(ns session.keymap
  (:require
   [subpar.core]))





(def subpar-keymap
  (js-obj
   "Shift-Enter" (fn [cm] (.log js/console "shift-enter"))
   "Backspace" (fn [cm] (subpar.core/backward-delete cm))
   "Delete" (fn [cm] (subpar.core/forward-delete cm))
   "Ctrl-D" (fn [cm] (subpar.core/forward-delete cm))
   "Shift-9" (fn [cm] (.log js/console "(") (subpar.core/open-expression cm "()"))
   "[" (fn [cm] (subpar.core/open-expression cm "[]"))
   "Shift-[" (fn [cm] (subpar.core/open-expression cm "{}"))
   "Shift-0" (fn [cm] (subpar.core/close-expression cm ")"))
   "]" (fn [cm] (subpar.core/close-expression cm "]"))
   "Shift-]" (fn [cm] (subpar.core/close-expression cm "}"))
   "Shift-'" (fn [cm] (subpar.core/double-quote cm))
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
   "Ctrl-Alt-\\" (fn [cm] (subpar.core/indent-selection cm))
   "fallthrough" #js ["basic" "emacs"] )) ;; not sure if this is right
