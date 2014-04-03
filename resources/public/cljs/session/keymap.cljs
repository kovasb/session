(ns session.keymap
  (:require
   [subpar.core]
   [session.paredit :as paredit]))




;; caret-position text-value selection-start selection-end

(def test (fn [cm]
            (js/alert "foo")
            (let [doc cm]
              (.log js/console [(.getCursor doc "head") (.getCursor doc "from") (.getCursor doc "to") (.getCursor doc "anchor")]))     ))


(defn editor-data [doc]
  {:selection-start (let [x (.indexFromPos doc (.getCursor doc "from"))] x)
   :selection-end (let [x (.indexFromPos doc (.getCursor doc "to"))] x)
   :caret-position (let [x (.indexFromPos doc (.getCursor doc "head"))] x)
   :text-value (.getValue doc)})


(comment
  (let [doc cm
        positions ]
    (.log js/console (pr-str (mapv (fn [x] {:ch (.-ch x) :line (.-line x) :xRel (.-xRel x)}) [(.getCursor doc "head") (.getCursor doc "from") (.getCursor doc "to")])))) )

:paredit-plus.raise-sexp
:paredit-plus.new-line-after-pair-close
:paredit-plus.duplicate
:paredit-plus.delete-pair-contents
:paredit-plus.forward-delete
:paredit-plus.backward-delete
:paredit-plus.join-sexps
:paredit-plus.split-sexp
:paredit-plus.splice-sexp-killing-forward
:paredit-plus.splice-sexp-killing-backward
:paredit-plus.splice-sexp
:paredit-plus.kill
:paredit-plus.wrap-round
:paredit-plus.wrap-square
:paredit-plus.wrap-curly
:paredit-plus.wrap-quote


(def subpar-keymap
  #js {
       ;; Basic Insertion Commands
       ;; open round
       "Shift-9"         (fn [cm] (subpar.core/open-expression cm "()"))
       ;; close round
       "Shift-0"         (fn [cm] (subpar.core/close-expression cm ")"))
       ;; close round and newline
       "Alt-Enter"            (fn [cm] (paredit/paredit :paredit-plus.new-line-after-pair-close cm))
       ;; open square
       "["               (fn [cm] (subpar.core/open-expression cm "[]"))
       ;; close square
       "]"               (fn [cm] (subpar.core/close-expression cm "]"))
       ;; open curly
       "Shift-["         (fn [cm] (subpar.core/open-expression cm "{}"))
       ;; close curly
       "Shift-]"         (fn [cm] (subpar.core/close-expression cm "}"))
       ;; double quote
       "Shift-'"          (fn [cm] (subpar.core/double-quote cm))
       ;; backslash

       ;; Deleting & Killing
       ;; backwards delete
       "Backspace"       (fn [cm] (paredit/paredit :paredit-plus.backward-delete cm))
       "Delete"          (fn [cm] (paredit/paredit :paredit-plus.backward-delete cm))
       ;; kill
       "Ctrl-K"    (fn [cm] (paredit/paredit :paredit-plus.kill cm))

       ;; Depth-Changing Commands
       ;; wrap round
       "Shift-Alt-9"     (fn [cm] (paredit/paredit :paredit-plus.wrap-round cm))
       ;; wrap square
       "Alt-["           (fn [cm] (paredit/paredit :paredit-plus.wrap-square cm))
       ;; wrap curly
       "Shift-Alt-["     (fn [cm] (paredit/paredit :paredit-plus.wrap-curly cm))
       ;; splice
       "Alt-S"           (fn [cm] (paredit/paredit :paredit-plus.splice-sexp cm))
       ;; raise
       "Ctrl-R"          (fn [cm] (paredit/paredit :paredit-plus.raise-sexp cm))


       ;; Barfage & Slurpage
       ;; foward slurp
       "Shift-Ctrl-0"    (fn [cm] (subpar.core/forward-slurp cm)) ;; todo key combination didn't work in chrome on windows
       "Ctrl-Right"      (fn [cm] (subpar.core/forward-slurp cm))
       ;; forward barf
       "Shift-Ctrl-]"    (fn [cm] (subpar.core/forward-barf cm))
       "Ctrl-Left"       (fn [cm] (subpar.core/forward-barf cm))
       ;; backward slurp
       "Shift-Ctrl-9"    (fn [cm] (subpar.core/backward-slurp cm))
       "Ctrl-Alt-Left"   (fn [cm] (subpar.core/backward-slurp cm))
       "Ctrl-["          (fn [cm] (subpar.core/backward-slurp cm))
       ;; backward barf
       "Shift-Ctrl-["    (fn [cm] (subpar.core/backward-barf cm))
       "Ctrl-Alt-Right"  (fn [cm] (subpar.core/backward-barf cm))
       "Ctrl-]"          (fn [cm] (subpar.core/backward-barf cm))

       ;; Paredit Misc
       ;; split
       "Shift-Alt-S"     (fn [cm] (paredit/paredit :paredit-plus.split-sexp cm))
       ;; join
       "Alt-J"           (fn [cm] (paredit/paredit :paredit-plus.join-sexps cm))

       ;; Session
       "Shift-Enter"     (fn [cm] nil)
       "fallthrough" #js ["basic"]
       })


(comment
  (def subpar-keymap
   (js-obj
     "Shift-Enter" test
     "Backspace" (fn [cm] (paredit/paredite cm))
     "Delete" (fn [cm] (paredit/paredit :paredit-plus.forward-delete cm))
     "Ctrl-D" (fn [cm] (paredit/paredit :paredit-plus.forward-delete cm))
     ;"Shift-9"  test ;(fn [cm] (.log js/console "(") (subpar.core/open-expression cm "()"))

     "Shift-[" (fn [cm]  (.log js/console (pr-str )))
     ;"Shift-0" (fn [cm] (subpar.core/close-expression cm ")"))
     ;"]" (fn [cm] (subpar.core/close-expression cm "]"))
     ;"Shift-]" (fn [cm] (subpar.core/close-expression cm "}"))
     ;"Shift-'" (fn [cm] (subpar.core/double-quote cm))
     "Ctrl-Alt-F" (fn [cm] (subpar.core/forward cm))
     "Ctrl-Alt-B" (fn [cm] (subpar.core/backward cm))
     "Ctrl-Alt-U" (fn [cm] (subpar.core/backward-up cm))
     "Ctrl-Alt-D" (fn [cm] (subpar.core/forward-down cm))
     "Ctrl-Alt-P" (fn [cm] (subpar.core/backward-down cm))
     "Ctrl-Alt-N" (fn [cm] (subpar.core/forward-up cm)) ;; doesn't work for chrome on windows
     "Shift-Ctrl-[" (fn [cm] (subpar.core/backward-barf cm))
     "Ctrl-Alt-Right" (fn [cm] (subpar.core/backward-barf cm))
     "Ctrl-]" (fn [cm] (subpar.core/backward-barf cm))
     "Shift-Ctrl-]" (fn [cm] (subpar.core/forward-barf cm))
     "Ctrl-Left" (fn [cm] (subpar.core/forward-barf cm))
     "Shift-Ctrl-9" (fn [cm] (subpar.core/backward-slurp cm))
     "Ctrl-Alt-Left" (fn [cm] (subpar.core/backward-slurp cm))
     "Ctrl-[" (fn [cm] (subpar.core/backward-slurp cm))
     "Shift-Ctrl-0" (fn [cm] (subpar.core/forward-slurp cm)) ;; todo key combination didn't work in chrome on windows
     "Ctrl-Right" (fn [cm] (subpar.core/forward-slurp cm))
     ;;todo add padding space if necessary for all splices
     "Alt-Up" (fn [cm] (subpar.core/splice-delete-backward cm))
     "Alt-Down" (fn [cm] (subpar.core/splice-delete-forward cm))
     "Alt-S" (fn [cm] (subpar.core/splice cm))
     ;;todo wrap expression in round, square, curly.
     "Ctrl-Alt-\\" (fn [cm] (subpar.core/indent-selection cm)))))

