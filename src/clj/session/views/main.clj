(ns session.views.main
  (:require [session.views.common :as common])
  (:use [noir.core :only [defpage]]
        [hiccup.core :only [html]]))

(defpage "/" []
         (common/layout
          (seq [
            [:div.navbar.navbar-fixed-top
             [:div.navbar-inner
              [:div.container {:style "margin-left:20px"}
               [:a.brand {:href "#"} "SESSION"]
               [:ul.nav
                [:li.active [:a {:href "#"} "Current Session"]]

                [:li [:span#savebutton.btn {:href "#"} "Download"]
                 ]
                [:li [:a " "]]
                [:li
                 [:form#fileupload {:action "upload" :method "POST"
                                    ;;:style "padding: 11px 10px 11px"
                                    :enctype "multipart/form-data"}
                  [:span.fileinput-button.btn
                   [:a {:href "#"
                        :style "color:#000"
                        }  "Upload"]
                   [:input {:type "file" :name "files[]" :multiple "true"}]
                   ]


                  ]]

                [:li.dropdown
                 [:a.dropdown-toggle {:data-toggle "dropdown" :href "#"} "Examples " [:b.caret ""]]
                 [:ul.dropdown-menu
                  [:li#clojure-language.example [:a {:href "#"} "Clojure Language"]]
                  ;;[:li#twitter-bootstrap.example [:a {:href "#"} "Twitter Bootstrap"]]
                  ;;[:li#graphics.example [:a {:href "#"} "Graphics"]]
                  [:li#cascalog.example [:a {:href "#"} "Cascalog"]]
                  ]
                 ]
                ;;[:li [:a {:href "#"} "Rationale"]]

                ]

               ]]
             ]
            [:div.container {:style "margin-left:20px"}
             [:div.content



              ]
             ] [:form#downloadform {:method "POST" :action "download"}
                      [:input#downloadformdata {:type "hidden" :value "" :name "session-data"}]
                      ]])))
