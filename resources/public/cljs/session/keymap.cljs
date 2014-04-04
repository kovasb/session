(ns session.keymap
  (:require
   [subpar.core]
   [session.paredit :as paredit]))


(def subpar-keymap
  #js {
       "Cmd-Z" (fn [cm] (.undo cm))
       "Shift-Cmd-Z" (fn [cm] (.redo cm))
       "Ctrl-Z"  (fn [cm] (.undo cm))
       "Shift-Ctrl-Z"  (fn [cm] (.redo cm))

       ;; Basic Insertion Commands
       ;; open round
       "Shift-9"         (fn [cm] (subpar.core/open-expression cm "()") )
       ;; close round
       "Shift-0"         (fn [cm] (subpar.core/close-expression cm ")") )
       ;; close round and newline
       "Alt-Enter"            (fn [cm] (paredit/paredit :paredit-plus.new-line-after-pair-close cm))
       ;; open square

       "[" (fn [cm] (subpar.core/open-expression cm "[]"))
       ;; close square
       "]"               (fn [cm] (subpar.core/close-expression cm "]") )
       ;; open curly
       "Shift-["         (fn [cm] (subpar.core/open-expression cm "{}") )
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
       ;
       "fallthrough" #js ["basic" "emacs"]
       })



(comment
  ;; paredit-plus commands
  [:paredit-plus.raise-sexp
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
   ])

