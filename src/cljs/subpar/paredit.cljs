(ns subpar.paredit)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; what belongs in this namespace: anything related to parsing code
;; and deciding what indices are involved to perform a paredit-like
;; operation.
;;
;; what does not belong here: anything related to actually performing
;; paredit-like operations in a context such as codemirror
;;
;; basically this namespace contains code that should be useful for
;; any other context which wishes to enjoy paredit-like features.
;;
;; the main idea behind the implementation here is that the code
;; contains lists of lists. any given index/position in the code is
;; contained by a list (or by an imaginary outer list that surrounds
;; the entire file). so to perform paredit operations you want to go
;; from knowing where you are (index) to knowing what's the index for
;; the relevant opening delimiter, where's the matching closing
;; delimiter, and where do your siblings (either tokens or lists
;; themseles) start and end.
;;
;; for the paredit operations currently supported, the info above is
;; sufficient.
;;
;; subpar.core is another namespace. it knows how to tell codemirror
;; what to do. it can call this code. but this code should never call
;; subpar.core. this code should have nothing to do with codemirror.
;;
;; subpar.js should call subpar.core and should know nothing about
;; what's in here.
;;
;; this code assumes clojure-like syntax, and only handles
;; single-character delimiters. for example, it does not handle ^:{ 
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def code \c)

(def cmmnt \;)

(def string \")

(def openers #{ \( \[ \{ })

(def closers #{ \) \] \} })

(defn opener? [a] (contains? openers a))

(defn closer? [a] (contains? closers a))

(defn whitespace? [x] (or (= x \tab)
                          (= x \space)
                          (= x \newline)))

;; parse doesn't want you to see him just yet. he's pondering how to
;; be less of a beast.
(declare parse)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; getting info out of parse
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-opening-delimiter-index-with-parse [p i]
  (-> p :chars (nth i) (nth 1)))

(defn get-closing-delimiter-index-with-parse [p i]
  (get-in p [:families (get-opening-delimiter-index-with-parse p i) :closer]))

(defn get-opening-delimiter-index
  "returns index of the opening delimiter for the list that contains
  the point. if there is no containing list, this returns -1"
  [s i]
  (get-opening-delimiter-index-with-parse (parse s) i))

(defn get-closing-delimiter-index
  "returns index of the closing delimiter for the list that contains
  the point. if there is no containing list, this returns the length
  of the code"
  [s i]
  (get-closing-delimiter-index-with-parse (parse s) i))

(defn get-wrapper
  "returns the indices of the delimiters of the list containing the
  point."
  [p i]
  [(get-opening-delimiter-index-with-parse p i)
   (get-closing-delimiter-index-with-parse p i)])

(defn get-mode
  "gets the kind of text containin the point: string, code, comment"
  [p i]
  (-> p :chars (nth i) (nth 0)))

(defn in? [p i mode]
  (and (<= 0 i (count (:chars p)))
       (= mode (get-mode p i))))

(defn in-comment? [p i] (in? p i cmmnt))
(defn in-code?    [p i] (in? p i code))
(defn in-string?  [p i] (in? p i string))

(defn in-string [s i] (in-string? (parse s) i))

(def n-str? (complement in-string?))

(defn get-all-siblings [i p]
  (get-in p [:families (get-opening-delimiter-index-with-parse p i) :children]))

(defn get-siblings
  "returns a sorted list of the siblings at point 'i' after they have
  been transformed with 'transform' and filtered by 'predicate', both
  single argument fns"
  [i transform predicate p]
  (->> (get-all-siblings i p)
       transform
       (filter predicate)
       sort))

(defn count-lines
  "how many lines contain the code from i to j inclusive"
  [s i j]
  (and i j 
       (->> (take (count s) s)
            (drop-last (dec (- (count s) j)))
            (drop i)
            (filter #(= \newline %))
            count
            inc)))

(defn escaped?
  "whether the current spot is escaped"
  [s i]
  (-> (loop [c 0, j (dec i)]
        (let [a (nth s j nil)]
          (cond (< j 0) c
                (nil? a) c
                (not= \\ a) c
                true (recur (inc c) (dec j)))))
      odd?))

(defn closes-list? [p i] (some #{i} (->> p :families vals (map :closer))))
(defn opens-list?  [p i] (some #{i} (->> p :families keys)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit meat
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn backward-up-fn [s i]
  (let [[o c] (get-wrapper (parse s) i)]
    (if (= -1 o) i o)))

(defn forward-delete-action
  "returns 0 if nothing should be done (foo |)
           1 if one character should be deleted
           2 if a delimiter pair should be deleted and cursor is in pair (|)
           3 if a delimiter pair should be deleted and cursor is at start |()
           4 move forward (into a list to delete contents) |(foo)"
  [s i]
  (let [p (parse s), h (dec i), j (inc i), c (nth s i nil)]
    (cond (>= i (count s)) 0  ; at the end. do nothing.
          (escaped? s i) 2
          (escaped? s j) 3
          (= [h i] (get-wrapper p i)) 2
          (closes-list? p i) 0
          (= [i j] (get-wrapper p j)) 3
          (opens-list? p i) 4
          true 1)))

(defn backward-delete-action
  "returns 0 if nothing should be done (| foo)
           1 if one character should be deleted
           2 if a delimiter pair should be deleted and cursor is in pair (|)
           3 if a delimiter pair should be deleted and cursor is at end ()|
           4 move backward (into a list to delete contents) (foo)|"
  [s i]
  (let [p (parse s), g (- i 2), h (dec i)]
    (cond (<= i 0) 0  ; at the beginning. do nothing.
          (escaped? s h) 3
          (escaped? s i) 2
          (= [g h] (get-wrapper p h)) 3
          (closes-list? p h) 4
          (= [h i] (get-wrapper p i)) 2
          (opens-list? p h) 0
          true 1)))

(defn double-quote-action
  "returns 0 if creating a string,
           1 if escaping a double-quote,
           2 if ending a string
           3 if in comment and need a raw double-quote"
  [s i]
  (let [p (parse s)];;(apply str (take (inc i) s))
    (cond (< i 0)          0    ; out of range. just start a new string
          (>= i (count s)) 0    ; out of range. just start a new string
          (in-comment? p i)3
          (n-str? p i)     0    ; not in a string.
          (= \" (nth s i)) 2    ; in a string and at a double-quote
          :escaping        1))) ;in a string and not at a double-quote


(defn close-expression-vals
  "if nowhere to skip to, returns an emtpy vector.

  otherwise it's an vector of
  0 - whether we need to delete any whitespace
  1 - where to start deleting from
  2 - where to delete to
  3 - the destination for the cursor"
  [p i]
  (let [[o c] (get-wrapper p i)]
    (if (= -1 o)
      []
      (let [start  (inc (or (last (get-siblings i vals identity p)) o))
            delete (not= start c)
            dest   (if delete (inc start) (inc c))]
        [delete start c dest]))))


(defn get-start-of-next-list
  "finds the start of the next list/string/vector/map"
  [s i]
  (let [p (parse s)
        r (first (get-siblings i
                               keys
                               #(and (>= % i)
                                     (get-in p [:families %]))
                               p))]
    (if (nil? r) false r)))

(defn forward-down-fn [s i]
  (let [r (get-start-of-next-list s i)]
    (if r (inc r) i)))

(defn backward-fn
  "returns the index for the cursor position immediately back an
  s-expression or up an s-expression backward. compare to
  paredit-backward. goal: If there are no more S-expressions in this
  one before the opening delimiter, move past that opening delimiter
  backward; otherwise, move move backward past the S-expression
  preceding the point. and if there's nothing left, stay put."
  [s i]
  (let [p (parse s)
        b (last (get-siblings i keys #(< % i) p))
        o (get-opening-delimiter-index-with-parse p i)]
    (or b (if (< o 0) 0 o))))

(defn backward-down-fn
  "paredit-backward-down"
  [s i]
  (let [p (parse s)
        b (last (get-siblings i
                              vals
                              #(and (< % i) (closes-list? p %))
                              p))]
    (or b i)))

(defn forward-up-fn
  "paredit-forward-up"
  [s i]
  (let [p (parse s)
        [o c] (get-wrapper p i)
        in-list (not= -1 o)]
    (if in-list (inc c) i)))

(defn forward-fn
  "returns the index for the cursor position immediately forward an
  s-expression or out the end of an s-expression if already at the
  end. compare to paredit-forward. goal: If there are no more
  S-expressions in this one before the closing delimiter, move past
  that closing delimiter forward; otherwise, move move forward past
  the S-expression at the point. and if there's nothing of interest
  before the end of the file, then go to the end."
  [s i]
  (let [p (parse s)
        b (first (get-siblings i vals #(>= % i) p))
        c (get-closing-delimiter-index-with-parse p i)
        l (count s)]
    (cond b (inc b)
          c (min (inc c) l)
          true l)))

(defn forward-slurp-vals
  "returns an vector of
  0 - the delimiter that needs to move,
  1 - the source index,
  2 - the destination index in the orignal string,
  3 - the number of lines to indent starting from the source index.

  if nothing should be done, the vector returned will have length 0"
  [s i]
  (let [p       (parse s)
        [o c]   (get-wrapper p i) ; opening/closing delimiters wrapping location
        in-list (not= -1 o)
        a       (and in-list (nth s c false))
        d       (and in-list (first (get-siblings o vals #(> % c) p)))]
    (if (and a c d)
      [a c (inc d) (count-lines s o (inc d))]
      [])))

(defn backward-slurp-vals
  "returns an vector of
  0 - the delimiter that needs to move,
  1 - the source index,
  2 - the destination index in the orignal string,
  3 - the number of lines to indent starting from the source index.

  if nothing should be done, the vector returned will have length 0"
  [s i]
  (let [p (parse s)
        [o c] (get-wrapper p i)
        in-list (not= -1 o)
        d (and in-list (last (get-siblings o keys #(< % o) p)))
        a (and in-list (nth s o false))]
    (if (and a d)
      [a o d (count-lines s d c)]
      [])))

(defn forward-barf-vals
  "if nothing should be done, this returns an empty vector.

  if there is something to barf, this returns an vector of
  0 - the delimiter that needs to move,
  1 - the source index,
  2 - the destination index in the orignal string,
  3 - whether there needs to be a padding space after the delimiter
  4 - the number of lines to indent
  5 - the starting index for the indentation"
  [s i]
  (let [p       (parse s)
        [o c]   (get-wrapper p i) ; opening/closing delimiters wrapping location
        in-list (not= -1 o)
        endings (and in-list (get-siblings i vals (constantly true) p))
        a       (and c in-list (nth s c nil)) ; delimiter that needs to be moved
        r       (or (count-lines s o c) 1) ; count of lines that need re-indenting
        num     (if endings (count endings) 0)]
    (cond
     (> num 1) [a c (inc (nth endings (- num 2))) false r o]
     (= num 1) [a c (inc o)                       true  r o]
     true      [])))

(defn backward-barf-vals
  "if nothing should be done this returns an empty vector.

  if there is something to barf, this returns an vector of
  0 - the delimiter that needs to move,
  1 - the source index,
  2 - the destination index in the orignal string,
  3 - whether there needs to be a padding space before the delimiter
  4 - the number of lines to indent"
  [s i]
  (let [p       (parse s)
        [o c]   (get-wrapper p i) ; opening/closing delimiters wrapping location
        in-list (not= -1 o)
        starts  (and in-list (get-siblings i keys (constantly true) p))
        a       (and o in-list (nth s o nil)) ; delimiter that needs to be moved
        r       (or (count-lines s o c) 1) ; count of lines to re-indent
        num     (if starts (count starts) 0)]
    (cond
     (> num 1) [a o (second starts) false r]
     (= num 1) [a o c               true  r]
     true      [])))

(defn splice-vals
  "if nothing should be done this returns an empty vector.

  if there is something to splice, this returns an vector of
  0 - the opening delimiter of the current list
  1 - the closing delimiter of the current list
  2 - the index to start re-indenting from
  3 - how many lines to re-indent"
  [s i]
  (let [p       (parse s)
        [o c]   (get-wrapper p i) ; opening/closing delimiters wrapping location
        in-list (not= -1 o)]
    (if in-list
      (let [[n d] (get-wrapper p o) ; for text to indent afterwards
            r (count-lines s n d)]
        [o c (max 0 n) r])
      [])))

(defn splice-delete-backward-vals
  "if nothing should be done this returns an empty vector.

  if there is something to splice, this returns an vector of
  0 - the opening delimiter of the current list (start killing from here)
  1 - the index to kill to
  2 - the original index of the closing delimiter to delete as well (delete this guy first)
  3 - the index to start re-indenting from
  4 - how many lines to re-indent"
  [s i]
  (let [p       (parse s)
        [o c]   (get-wrapper p i) ; opening/closing delimiters wrapping location
        in-list (not= -1 o)]
    (if in-list
      (let [[n d] (get-wrapper p o) ; for text to indent afterwards
            r (count-lines s n d)]
        [o (max o i) c (max 0 n) r])
      [])))

(defn splice-delete-forward-vals
  "if nothing should be done this returns an empty vector.

  if there is something to splice, this returns an vector of
  0 - the opening delimiter of the current list
  1 - the index to kill from
  2 - the original index of the closing delimiter to kill to
  3 - the index to start re-indenting from
  4 - how many lines to re-indent"
  [s i]
  (let [p       (parse s)
        [o c]   (get-wrapper p i) ; opening/closing delimiters wrapping location
        in-list (not= -1 o)]
    (if in-list
      (let [[n d] (get-wrapper p o) ; for text to indent afterwards
            r (count-lines s n d)]
        [o i (inc c) (max 0 n) r])
      [])))

;; todo: implement wrap

(defn parse
  "annotates each index in s. assumes/requires all delimiters that are
  not in comments or strings to be paired and properly nested vs ([)].

  returns {:chars [[mode, poi] ... ]
           :families {opener-index {:closer i
                                    :children {start-index end-index}}}}

  where :chars has one extra element past the end of the string and
  there's a virtual wrapping parent delimiter pair at -1,length"
  [ss]
  (let [s (str ss " ")]
    (loop [i 0
           mode code
           openings (list -1)
           start -1
           t []
           families {-1 {:children {}}}
           escaping false
           in-word false]
      (let [a (nth s i nil), j (inc i), o (peek openings)]
        (cond
         ;; end condition, done with s, return t and closings.
         ;; but if we just ended a word, complete the child.
         (and (nil? a) in-word)
         {:chars t
          :families (-> families
                        (assoc-in [-1 :closer] (dec i))
                        (assoc-in [-1 :children start] (dec i)))}
         ;; end condition. not at end of word.
         (nil? a) 
         {:chars t
          :families (assoc-in families [-1 :closer] (dec i))}
         ;; escaping next char. applies in code and strings but not in
         ;; comments. if we're not in a word, this is a new child.
         (and (not= cmmnt mode) (= \\ a) (not escaping) (not in-word))
         (recur j mode openings i (conj t [mode o]) (assoc-in families [o :children i] j) true true)
         ;; escaping. if we are in a word, this is not a new child.
         (and (not= cmmnt mode) (= \\ a) (not escaping))
         (recur j mode openings i (conj t [mode o]) families true true)
         ;; at beginning of a comment. this spot behaves like code
         ;; if you type something like an opening delimiter (see
         ;; in-code? and in-comment?) but it behaves
         ;; like comment or whitespace if we want to skip past it
         ;; (see comment-char?). comments don't count as families
         (and (= code mode) (= \; a) (not escaping))
         (recur j cmmnt openings start (conj t [mode o]) families false false)
         ;; at end of line for comment
         (and (= cmmnt mode) (= \newline a))
         (recur j code openings start (conj t [mode o]) families false false)
         ;; in a comment but not yet at end of line
         (= cmmnt mode)
         (recur j cmmnt openings start (conj t [mode o]) families false false)
         ;; at beginning of string. this is a new parent. this is also
         ;; a new child.
         (and (= code mode) (= \" a) (not escaping))
         (recur j string (conj openings i) -1 (conj t [mode o]) (-> families
                                                                    (assoc-in [i :children] {})
                                                                    (assoc-in [o :children i] j)) false false)
         ;; at end of string. if this also ends a word, we should
         ;; complete the child
         (and (= string mode) (= \" a) (not escaping) in-word)
         (recur j code (pop openings) -1 (conj t [mode o]) (-> families
                                                               (assoc-in [o :closer] i)
                                                               (assoc-in [(second openings) :children o] i)
                                                               (assoc-in [o :children start] (dec i))) false false)
         ;; at end of string. but not at end of word. so just complete
         ;; the string as parent and as child
         (and (= string mode) (= \" a) (not escaping))
         (recur j code (pop openings) -1 (conj t [mode o]) (-> families
                                                               (assoc-in [o :closer] i)
                                                               (assoc-in [(second openings) :children o] i)) false false)
         ;; in string. at beginning of word, so at beginning of a new child.
         (and (= string mode) (not (whitespace? a)) (not in-word))
         (recur j string openings i (conj t [mode o]) (assoc-in families [o :children i] i) false true)
         ;; in string. at end of word, so at end of a child.
         (and (= string mode) (whitespace? a) in-word)
         (recur j string openings -1 (conj t [mode o]) (assoc-in families [o :children start] (dec i)) false false)
         ;; in string but not at beginning or end of word
         (= string mode)
         (recur j string openings start (conj t [mode o]) families false in-word)
         ;; at this point both strings and comments are dealt with
         ;; now the only mode remaining is code
         ;; and also already dealt with: comment starts, string starts
         ;; and escape \
         ;; here, a word has ended abruptly with an open delimiter. a
         ;; word (child) has ended. and a new parent and child has begun.
         (and (opener? a) in-word)
         (recur j code (conj openings i) -1 (conj t [mode o]) (-> families
                                                                  (assoc-in [o :children start] (dec i))
                                                                  (assoc-in [o :children i] i)
                                                                  (assoc-in [i :children] {})) false false)
         ;; new child. new parent.
         (opener? a)
         (recur j code (conj openings i) -1 (conj t [mode o]) (-> families
                                                                  (assoc-in [o :children i] i)
                                                                  (assoc-in [i :children] {})) false false)
         ;; completed a list which is both a parent and a child. also
         ;; completed a word which is a child 
         (and (closer? a) in-word)
         (recur j code (pop openings) -1 (conj t [mode o]) (-> families
                                                               (assoc-in [o :children start] (dec i))
                                                               (assoc-in [o :closer] i)
                                                               (assoc-in [(second openings) :children o] i)) false false)
         ;; completed a list which is both a parent and a child.
         (closer? a)
         (recur j code (pop openings) -1 (conj t [mode o]) (-> families
                                                               (assoc-in [o :closer] i)
                                                               (assoc-in [(second openings) :children o] i)) false false)
         ;; handle beginning of token. begins a child
         (and (not (whitespace? a)) (not in-word))
         (recur j code openings i (conj t [mode o]) (assoc-in families [o :children i] i) false true)
         ;; handle ending of token. ends a child.
         (and (whitespace? a) in-word)
         (recur j code openings -1 (conj t [mode o]) (assoc-in families [o :children start] (dec i)) false false)
         ;; plain whitespace that's not at the end of a word
         (and (whitespace? a) (not in-word))
         (recur j code openings -1 (conj t [mode o]) families false false)
         ;; in token
         (and (not (whitespace? a)) in-word)
         (recur j code openings start (conj t [mode o]) families false true)
         :default ;when does this happen?
         (recur j code openings start (conj t [\? o]) families escaping in-word))))))
