(ns session.views.main
  (:require [session.views.common :as common])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]))

(defpage "/" []
         (common/layout
          (seq [
            [:div.navbar.navbar-fixed-top
             [:div.navbar-inner
              [:div.container
               [:a.brand {:href "#"} "SESSION"]
               [:ul.nav
                [:li.active [:a {:href "#"} "Home"]]

                ]

               ]]
             ]
            [:div.container {:style "margin-left:20px"}
             [:div.content


              ]
             ]])))
