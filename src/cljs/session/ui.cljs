(ns session.ui)



;;"dX9GTUMh490"

(defn youtube [x]
   (with-meta [:iframe {:width "420" :height "315"
              :src  (str "http://www.youtube.com/embed/" x "?rel=0")}] {:view :dom})
  )
