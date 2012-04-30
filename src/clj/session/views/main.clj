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
                [:li.active [:a {:href "#"} "Home"]]

                [:li [:a#savebutton {:href "#"} "Download"]
                 ]

                [:li
                 [:form#fileupload {:action "upload" :method "POST" :style "padding: 10px 10px 11px" :enctype "multipart/form-data"}
                  [:span.fileinput-button
                   [:a {:href "#"}  "Upload"]
                   [:input {:type "file" :name "files[]" :multiple "true"}]
                   ]


                  ]]

                (comment [:li.dropdown
                  [:a.dropdown-toggle {:data-toggle "dropdown" :href "#"} "Examples " [:b.caret ""]]
                  [:ul.dropdown-menu
                   [:li [:a {:href "#"} "a"]]
                   [:li [:a {:href "#"} "b"]]
                   ]
                  ])
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
