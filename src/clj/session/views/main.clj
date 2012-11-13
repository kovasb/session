(ns session.views.main
  (:require [session.views.common :as common])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]))

(defpage "/" []
         (common/layout
          (seq [
            [:div.navbar.navbar-fixed-top
             [:div.navbar-inner
              [:div.container {:style "margin-left:80px"}
               [:span {:href "#" :style "font-size:20px;margin-left:0px"} "session"]
               [:ul.nav]]]]
            [:div.container {:style "margin-left:20px"}
             [:div.content]]])))
