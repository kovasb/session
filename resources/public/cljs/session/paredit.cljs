(ns session.paredit
  (:require clojure.set))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;




;;;;;;;;;;;;;;;;;;;;;;;;;;;


(defn string-contains? [str x]
  (not= (.indexOf str x) -1))

(defn selection? [e]
  (.somethingSelected e))

(defn kill-line [e]
  (js/CodeMirror.commands.killLine e))

(defn new-line-indent [e]
  (js/CodeMirror.commands.newlineAndIndent e))

(defn caret [e side]
  (.getCursor e side))

(defn caret-position [e & [side]]
  (let [pos (caret e side)]
    {:line (.-line pos)
     :ch (.-ch pos)}))

(defn selection-bounds [e]
  (if (selection? e)
    {:from (caret-position e "start")
     :to (caret-position e "end")}))


(defn token-at [e pos]
  (js->clj (.getTokenAt e (clj->js pos)) :keywordize-keys true))


(defn get-line [e l]
  (.getLine e l))

(defn replace-range
  ([editor start value]
   (.replaceRange editor value (clj->js start)))
  ([editor start end value]
   (.replaceRange editor value (clj->js start) (clj->js end))))

(defn get-range [e from to]
  (.getRange e (clj->js from) (clj->js to)))

(defn pos->index [e pos] (.indexFromPos e (clj->js pos)))

(defn set-loc
  ([loc dir]
   (set-loc loc dir :ch))
  ([loc dir axis]
   (when loc
     (update-in loc [axis] + dir))))

(defn token-type-at [e pos]
  (.getTokenTypeAt e (clj->js pos)))

(defn set-cursor [e pos]
  (.setCursor e (clj->js pos)))

(defn cm-operation [e func]
  (.operation e func) e)

(defn indent-lines [editor start end t]
  (let [d  (- (:line end) (:line start))]
    (if (zero? d)
      (.indentLine editor (:line end) t)
      (dotimes [x (inc d)]
        (.indentLine editor (+ (:line start) x))))))


(defn line-count [e l]
  (count (get-line e l)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn whitespace? [s]
  (contains? #{" " "\t" "\r" "\n" "\f"} s))

(def pairs [{:type :list :open "(" :close ")"}
            {:type :map :open "{" :close "}"}
            {:type :string :open "\"" :close "\""}
            {:type :vector :open "[" :close "]"}])

(def directions {:backward -1 :forward 1})

(defn dir->int [dir]
  (get directions dir))

(defn pair-chars [t]
  (if (= t :all)
    (clojure.set/union (pair-chars :open) (pair-chars :close))
    (set (map t pairs))))

(defn pair->set [p]
  (set ((juxt :open :close) p)))

(defn char->pair [c]
  (first
    (filter (fn [m] (or
                      (= (:open m) c)
                      (= (:close m) c))) pairs)))

(defn char-type [p c]
  (if (= (:open p) c)
    :open
    :close))

(defn type->dir [t]
  (if (= :open t)
    :forward
    :backward))

(defn opposite-char [c]
  (when-let [p (char->pair c)]
    (if (= (:open p) c)
      (:close p)
      (:open p))))

(defn char-at-loc [ed loc]
  (let [l (get-line ed (:line loc))
        c (get l (:ch loc))]
    c))

(defn comment|string|char? [ed loc allow-strings?]
  "Check wether the character at loc is part of a comment or string"
  (if-let [tokentype (token-type-at ed (set-loc loc 1))]
    (cond
      (string-contains? tokentype "comment-form") false
      (string-contains? tokentype "comment") true
      (string-contains? tokentype "char") true
      (string-contains? tokentype "string") (when-not allow-strings? true))
    false))

(defn index->pos [ed i]
  (.posFromIndex ed i))

(defn- loc-compare-fn [f]
  (fn [ed & locs]
    (apply f (map #(pos->index ed %) locs))))

(def loc<
  (loc-compare-fn <))

(def loc>
  (loc-compare-fn >))

(def loc>=
  (loc-compare-fn >=))

(def loc<=
  (loc-compare-fn <=))

(defn escaped-char? [ed loc]
  (loop [loc (set-loc loc -1)
         result 0]
    (let [[ch line] ((juxt :ch :line) loc)
          c (char-at-loc ed loc)]
      (if (< ch 0)
        (odd? result)
        (if (= "\\" c)
          (recur (set-loc loc -1) (inc result))
          (odd? result))))))

(defn escapes-char? [ed loc]
  (if
      (and
        (= "\\" (char-at-loc ed loc))
        (not (escaped-char? ed loc))
        (char-at-loc ed (set-loc loc 1)))
    true
    false))

(defn find-pos-h
  ([ed loc amount]
   (find-pos-h ed loc amount :char false))
  ([ed loc amount unit vis?]
   (let [pos (.findPosH ed (clj->js loc) amount (name unit) vis?)]
     {:line (.-line pos)
      :ch (.-ch pos)})))

(defn string-boundary [ed l dir]
  (loop [loc l
         result nil]
    (let [token-type (token-type-at ed (set-loc loc 1))
          next-loc (find-pos-h ed loc (dir->int dir))]
      (if (and
            token-type
            (string-contains? token-type "string") )
        (if (= next-loc loc)
          (condp = dir
            :backward loc
            :forward (set-loc loc -1))
          (recur next-loc loc))
        result))))

(defn string-bounds [ed l]
  [(string-boundary ed l :backward) (string-boundary ed l :forward)])

(defn find-match [ed l c]
  (when-let [p (char->pair c)]
    (let [pair-type (:type p)
          type (char-type p c)
          dir (type->dir type)
          opposite (opposite-char c)]
      (if (= pair-type :string)
        (first (remove #(= l %) (string-bounds ed l)))
        (loop [chars (locate-chars ed l #{c opposite} dir)
               stack 0]
          (when-not (empty? chars)
            (let [[char loc] (first chars)]
              (cond
                (= loc l) (recur (rest chars) stack)
                (= char c) (recur (rest chars) (inc stack))
                (= char opposite) (if (= 0 stack)
                                    loc
                                    (recur (rest chars) (dec stack)))
                :else (recur (rest chars) stack)))))))))

(defn locate-chars
  ([ed l cs dir include-start?]
   (let [l (if include-start?
             l
             (find-pos-h ed l (dir->int dir)))]
     (locate-chars ed l cs dir)))
  ([ed l cs dir]
   (let [next-loc (find-pos-h ed l (dir->int dir))
         c (char-at-loc ed l)
         pair (char->pair c)]
     (cond
       (and
         pair
         (= (:type pair) :string)
         (contains? cs c)) (let [token (token-at ed (set-loc l 1))
                                 t (:type token)
                                 start (:start token)
                                 end (- (:end token) 1)]
                             (if (and
                                   (= t "string")
                                   (or (= start (:ch l)) (= end (:ch l))))
                               (lazy-seq (cons [c l] (locate-chars ed next-loc cs dir)))
                               (lazy-seq (locate-chars ed next-loc cs dir))))
       (comment|string|char? ed l false) (lazy-seq (locate-chars ed next-loc cs dir))
       (contains? cs c) (if (= next-loc l)
                          (lazy-seq (cons [c l] '()))
                          (lazy-seq (cons [c l] (locate-chars ed next-loc cs dir))))
       (= next-loc l) '()
       :else (lazy-seq (locate-chars ed next-loc cs dir))))))

(defn locate-chars-on-line [ed l cs dir]
  (take-while (fn [[c loc]] (= (:line l) (:line loc))) (locate-chars ed l cs dir)))

(defn find-unbalanced
  ([ed l dir]
   (let [cs (condp = dir
              :forward (pair-chars :close)
              :backward (pair-chars :open))]
     (find-unbalanced ed l cs dir)))
  ([ed l cs dir]
   (find-unbalanced ed (locate-chars ed l cs dir) l cs dir))
  ([ed locations l cs dir]
   (if-not (empty? locations)
     (let [[c loc] (first locations)]
       (if-let [matchloc (find-match ed loc c)]
         (if (<
               (* (dir->int dir) (pos->index ed matchloc))
               (* (dir->int dir) (pos->index ed l)))
           (lazy-seq (cons [c loc] (find-unbalanced ed (rest locations) l cs dir)))
           (lazy-seq (find-unbalanced ed (rest locations) l cs dir)))
         (lazy-seq (cons [c loc] (find-unbalanced ed (rest locations) l cs dir)))))
     '())))

(defn pair-bounds [ed l]
  (when-let [[c loc] (first (find-unbalanced ed l :forward))]
    [(find-match ed loc c) loc]))

(defn move-cursor-along-pair [ed l dir side]
  (when-let [[startloc endloc] (pair-bounds ed l)]
    (let [adjustment {:before 0
                      :after 1}
          dir->loc {:forward endloc
                    :backward startloc}]
      (set-cursor ed (set-loc (dir->loc dir) (side adjustment))))))

(defn paredit-kill [ed]
  (let [startloc (caret-position ed)
        c (char-at-loc ed startloc)
        all-pair-chars (pair-chars :all)]
    (if (contains? all-pair-chars c)
      (when-let [matchloc (find-match ed startloc c)]
        (if (> (pos->index ed matchloc) (pos->index ed startloc))
          (replace-range ed startloc (set-loc matchloc 1) "")
          (replace-range ed (set-loc startloc 1) matchloc "")))
      (let [line (:line startloc)
            chars (take-while (fn [[c loc]] (= line (:line loc))) (locate-chars ed startloc all-pair-chars :forward))]
        (if (empty? chars)
          (kill-line ed)
          (if-let [kl (some (fn [[c loc]]
                              (when-let [mloc (find-match ed loc c)]
                                (when (loc> ed startloc mloc)
                                  loc))) (filter (fn [[c _]] (contains? (pair-chars :close) c)) chars))]
            (replace-range ed startloc kl "")
            (if-let [kl (some (fn [[c loc]]
                                (when-let [mloc (find-match ed loc c)]
                                  (when (> (:line mloc) (:line loc))
                                    mloc))) (filter (fn [[c _]] (contains? (pair-chars :open) c)) chars))]
              (replace-range ed startloc (set-loc kl 1) "")
              (kill-line ed)
              )))
        ))))

(defn wrap-region
  ([ed [startloc endloc] p]
   (wrap-region ed [startloc endloc] p false))
  ([ed [startloc endloc] p end-inclusive?]
   (cm-operation ed (fn []
                          (replace-range ed (set-loc endloc (if end-inclusive? 1 0)) (:close p))
                          (replace-range ed startloc (:open p))))))

(defn paredit-wrap-with-pair [ed l p]
  (let [c (char-at-loc ed l)]
    (cond
      (selection? ed) (let [bounds (selection-bounds ed)]
                               (wrap-region ed [(:from bounds) (:to bounds)] p))
      (comment|string|char? ed l true) (.log js/console "Paredit: Illegal context: not available in comments or escaped char")
      (comment|string|char? ed l false) (when-let [bounds (string-bounds ed l)]
                                          (wrap-region ed bounds p true))
      (char->pair c) (when-let [mloc (find-match ed l c)]
                       (wrap-region ed (sort-by #(pos->index ed %) [l mloc]) p true))
      :else (let [token (token-at ed (set-loc l 1))
                  startloc {:line (:line l) :ch (:start token)}
                  endloc {:line (:line l) :ch (:end token)}]
              (wrap-region ed [startloc endloc] p)))))

(defn paredit-splice-sexp [ed l]
  (when-let [[c loc] (first (find-unbalanced ed l (pair-chars :close) :forward))]
    (when-let [mloc (find-match ed loc c)]
      (cm-operation ed (fn []
                             (replace-range ed loc (set-loc loc 1) "")
                             (replace-range ed mloc (set-loc mloc 1) ""))))))

(defn paredit-splice-sexp-kill [ed l dir]
  (when-let [[c loc] (first (find-unbalanced ed l (pair-chars :close) :forward))]
    (when-let [mloc (find-match ed loc c)]
      (condp = dir
        :backward (cm-operation ed (fn []
                                         (replace-range ed loc (set-loc loc 1) "")
                                         (replace-range ed mloc l "")))
        :forward (cm-operation ed (fn []
                                        (replace-range ed l (set-loc loc 1) "")
                                        (replace-range ed mloc (set-loc mloc 1) "")))))))

(defn paredit-split-sexp [ed l]
  (when-let [[c loc] (first (find-unbalanced ed l (pair-chars :close) :forward))]
    (if (find-match ed loc c)
      (let [p (char->pair c)
            s (str (:close p) " " (:open p))]
        (cm-operation ed (fn []
                               (replace-range ed l s)
                               (set-cursor ed (set-loc l 1))))))))

(defn paredit-join-sexps [ed l]
  (let [[lc ll] (first (locate-chars ed l (pair-chars :close) :backward))
        [rc rl] (first (locate-chars ed l (pair-chars :open) :forward))]
    (if (and lc rc)
      (if (= lc (opposite-char rc))
        (cm-operation ed (fn []
                               (replace-range ed rl (set-loc rl 1) "")
                               (replace-range ed ll (set-loc ll 1) "")
                               (indent-lines ed ll rl "smart")))
        (.log js/console "Paredit: Mismatched sexps")))))

(defn paredit-forward-delete [ed l]
  (let [l (caret-position ed)
        nloc (set-loc l 1)
        c (char-at-loc ed l)
        nc (char-at-loc ed (set-loc l 1))
        pc (char-at-loc ed (set-loc l -1))
        pair (char->pair c)
        tokentype (token-type-at ed nloc)]
    (cond
      (and tokentype
           (string-contains? tokentype "comment")) (if nc
                                                  (replace-range ed l (set-loc l 1) "")
                                                  (cm-operation ed (fn []
                                                                         (replace-range ed l (set-loc l 1) "")
                                                                         (set-cursor ed (set-loc l -1)))))
      (escaped-char? ed l) (replace-range ed (set-loc l 1) (set-loc l -1) "")
      (escapes-char? ed l) (replace-range ed l (set-loc l 2) "")
      pair (cond
             (and
               (contains? (pair-chars :close) c)
               (not (escaped-char? ed l))
               (= pc (opposite-char c))) (replace-range ed (set-loc l 1) (set-loc l -1) "")
             nc (set-cursor ed (set-loc l 1)))
      nc (replace-range ed l (set-loc l 1) "")
      :else (cm-operation ed (fn []
                                   (replace-range ed l (set-loc l 1) "")
                                   (set-cursor ed (set-loc l -1)))))))

(defn paredit-backward-delete [ed l]
  (let [l (caret-position ed)
        ploc (set-loc l -1)
        nloc (set-loc l 1)
        c (char-at-loc ed l)
        pc (char-at-loc ed (set-loc l -1))
        tokentype (token-type-at ed l)]
    (cond
      (not pc) (replace-range ed l (find-pos-h ed l -1) "")
      (and tokentype
           (string-contains? tokentype "comment")) (replace-range ed l ploc "")
      (escaped-char? ed ploc) (replace-range ed l (set-loc l -2) "")
      (escapes-char? ed ploc) (replace-range ed nloc ploc "")
      (contains? (pair-chars :open) pc) (if (= c (opposite-char pc))
                                          (replace-range ed nloc ploc "")
                                          (set-cursor ed ploc))
      (contains? (pair-chars :close) pc) (set-cursor ed ploc)
      :else (replace-range ed l ploc ""))))

(defn paredit-duplicate [ed l]
  (let [startloc l
        startindex (pos->index ed startloc)
        all-pair-chars (pair-chars :all)
        endloc (loop [startloc startloc
                      chars (locate-chars-on-line ed startloc all-pair-chars :forward)]
                 (if-not (empty? chars)
                   (let [[c loc] (first chars)]
                     (when-let [mloc (find-match ed loc c)]
                       (let [sline (:line loc)
                             mline (:line mloc)
                             mindex (pos->index ed mloc)]
                         (cond
                           (< mindex startindex) loc
                           (> mline sline) (recur mloc (locate-chars-on-line ed mloc all-pair-chars :forward))
                           :else (recur startloc (rest chars))))))
                   {:ch (line-count ed (:line startloc)) :line (:line startloc)}))]
    (let [text-to-dupl (get-range ed startloc endloc)]
      (cm-operation ed (fn []
                             (replace-range ed startloc endloc (str text-to-dupl "\n" text-to-dupl))
                             (set-cursor ed (find-pos-h ed startloc (inc (count text-to-dupl))))
                             (indent-lines ed startloc (find-pos-h ed endloc (inc (count text-to-dupl))) "smart"))))))

(defn delete-pair-contents [ed l]
  (when-let [[start end] (pair-bounds ed l)]
    (replace-range ed (set-loc start 1) end "")))

(defn paredit-raise-sexp [ed l]
  (let [c (char-at-loc ed l)
        token (token-at ed (set-loc l 1))
        tokentype (:type token)
        delete-surrounding (fn [[startloc endloc]]
                             (when-let [[p-startloc p-endloc] (pair-bounds ed startloc)]
                               (cm-operation ed (fn []
                                                      (replace-range ed (set-loc endloc 1) (set-loc p-endloc 1) "")
                                                      (replace-range ed p-startloc startloc "")))))]
    (cond
      (and tokentype (string-contains? tokentype "comment") (not (string-contains? tokentype "comment-form")))
           (.log js/console "Paredit: Illegal context: not available in comments")
      (and tokentype (string-contains? tokentype "string")) (delete-surrounding (string-bounds ed l))
      (contains? (pair-chars :all) c) (when-let [mloc (find-match ed l c)]
                                        (delete-surrounding (sort-by #(pos->index ed %) [l mloc])))
      (or (whitespace? c) (nil? c)) (let [nloc (find-pos-h ed l 1)]
                                      (when-not (= l nloc)
                                        (recur ed nloc)))
      :else (let [line (:line l)]
              (delete-surrounding [{:line line :ch (:start token)} (set-loc {:line line :ch (:end token)} -1)])))))


(def commands
  (into
    {}
    (map
      #(vector (:command %) (:exec %))
      [
       {:command :paredit-plus.raise-sexp
        :desc    "Paredit Plus: Raise sexp"
        :exec    (fn [ed] (paredit-raise-sexp ed (caret-position ed)))}
       {:command :paredit-plus.new-line-after-pair-close
        :desc    "Paredit Plus: New line after pair close"
        :exec    (fn [ed] (cm-operation ed (fn [ed]
                                             (move-cursor-along-pair ed (caret-position ed) :forward :after)
                                             (new-line-indent ed))))}
       {:command :paredit-plus.duplicate
        :desc    "Paredit Plus: Duplicate"
        :exec    (fn [ed] (paredit-duplicate ed (caret-position ed)))}
       {:command :paredit-plus.delete-pair-contents
        :desc    "Paredit Plus: Delete contents inside current pair"
        :exec    (fn [ed] (delete-pair-contents ed (caret-position ed)))}
       {:command :paredit-plus.forward-delete
        :desc    "Paredit Plus: Forward delete"
        :exec    (fn [ed] (paredit-forward-delete ed (caret-position ed)))}
       {:command :paredit-plus.backward-delete
        :desc    "Paredit Plus: Backward delete"
        :exec    (fn [ed] (paredit-backward-delete ed (caret-position ed)))}
       {:command :paredit-plus.join-sexps
        :desc    "Paredit Plus: Join sexps"
        :exec    (fn [ed] (paredit-join-sexps ed (caret-position ed)))}
       {:command :paredit-plus.split-sexp
        :desc    "Paredit Plus: Split sexp"
        :exec    (fn [ed] (paredit-split-sexp ed (caret-position ed)))}
       {:command :paredit-plus.splice-sexp-killing-forward
        :desc    "Paredit Plus: Splice sexp killing forward"
        :exec    (fn [ed] (paredit-splice-sexp-kill ed (caret-position ed) :forward))}
       {:command :paredit-plus.splice-sexp-killing-backward
        :desc    "Paredit Plus: Splice sexp killing backward"
        :exec    (fn [ed] (paredit-splice-sexp-kill ed (caret-position ed) :backward))}
       {:command :paredit-plus.splice-sexp
        :desc    "Paredit Plus: Splice sexp"
        :exec    (fn [ed] (paredit-splice-sexp ed (caret-position ed)))}
       {:command :paredit-plus.kill
        :desc    "Paredit Plus: Kill"
        :exec    (fn [ed] (paredit-kill ed))}
       {:command :paredit-plus.wrap-round
        :desc    "Paredit Plus: Wrap round"
        :exec    (fn [ed] (paredit-wrap-with-pair ed (caret-position ed) (char->pair "(")))}
       {:command :paredit-plus.wrap-square
        :desc    "Paredit Plus: Wrap square"
        :exec    (fn [ed] (paredit-wrap-with-pair ed (caret-position ed) (char->pair "[")))}
       {:command :paredit-plus.wrap-curly
        :desc    "Paredit Plus: Wrap curly"
        :exec    (fn [ed] (paredit-wrap-with-pair ed (caret-position ed) (char->pair "{")))}
       {:command :paredit-plus.wrap-quote
        :desc    "Paredit Plus: Wrap quote"
        :exec    (fn [ed] (paredit-wrap-with-pair ed (caret-position ed) (char->pair "\"")))}

       ])))

(defn paredit [cmd ed]
  (.log js/console cmd)
  ((commands cmd) ed))
