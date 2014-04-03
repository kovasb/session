(ns session.app.paredit
  (:require
    [paredit.core]
    [paredit.parser]))

(defn paredit-transform [input])

(def ^:dynamic *debug*)



(defn exec-command [cmd input]
  (let [{:keys [caret-position text-value selection-start selection-end]} input
        buffer (paredit.parser/edit-buffer nil 0 -1 text-value)
        parse-tree (paredit.parser/buffer-parse-tree buffer :for-test)]
    (paredit.core/paredit cmd
             {:parse-tree parse-tree :buffer buffer}
             {:text text-value, :offset
                    (min selection-start caret-position),
              :length (- selection-end selection-start)})))

;; send result to browser, and implement equivalent of insert-result


(comment
  ;; move to cljs side
  (defn insert-result [w pe]
   (dorun (map #(if (= 0 (:length %))
                 (.insert w (:text %) (:offset %))
                 (.replaceRange w (:text %) (:offset %) (+ (:length %) (:offset %))))
               (:modifs pe)))
   (.setCaretPosition w (:offset pe))
   (if (< 0 (:length pe))
     (do
       (.setSelectionStart w (:offset pe))
       (.setSelectionEnd w (+ (:offset pe) (:length pe)))))))


;; put in cljs side; resolve into commands in codemirror keymap
(def keymap
  {
    [nil "(" ] :paredit-open-round
    [nil ")" ] :paredit-close-round
    [nil "[" ] :paredit-open-square
    [nil "]" ] :paredit-close-square
    [nil "{" ] :paredit-open-curly
    [nil "}" ] :paredit-close-curly
    [nil "\b"] :paredit-backward-delete
    [nil  "\t"] :paredit-indent-line
    ["M" ")"] :paredit-close-round-and-newline
    [nil "\""] :paredit-doublequote
    [nil "DEL"] :paredit-forward-delete
    ; ["C" "K"] :paredit-kill not implemented in paredit.clj
    ["M" "("] :paredit-wrap-round
    ["M" "s"] :paredit-splice-sexp
    ["M" "r"] :paredit-raise-sexp
    ["C" "0"] :paredit-forward-slurp-sexp
    ["C" "9"] :paredit-backward-slurp-sexp
    ["C" "Close Bracket"] :paredit-forward-barf-sexp
    ["C" "Open Bracket"] :paredit-backward-barf-sexp
    [nil "\n"] :paredit-newline
    ["M" "S"] :paredit-split-sexp
    ["M" "J"] :paredit-join-sexps
    ["M" "Right"] :paredit-expand-right
    ["M" "Left"] :paredit-expand-left
    })

(comment
  (defn exec-paredit [k w]
   (let [cmd (keymap k)]
     (if *debug* (println [cmd k]))
     (if cmd
       (let [result (exec-command cmd w)]
         (if *debug* (println [cmd result]))
         (insert-result w result)))
     cmd)))

