(ns session.views.common
  (:require [noir.cljs.core :as cljs])
  (:use [noir.core :only [defpartial]]
        [hiccup.page :only [include-css html5]]))

(defpartial layout [& content]
            (html5
              [:head
               [:title "htmlrepl"]
               (include-css "bootstrap/css/bootstrap.css")
               (include-css "css/jquery.fileupload-ui.css")
               [:style {:type "text/css"}  ".ace_editor .ace_sb {overflow-y: hidden;}\n .ace_scroller {overflow-x: hidden}"]

               ]
              [:body {:style "padding-top:40px"}
               content
               [:script {:type "text/javascript" :src "ace/ace.js"}]
               [:script {:type "text/javascript" :src "ace/mode-clojure.js"}]
               [:script {:type "text/javascript" :src "jquery.js"}]
               [:script {:type "text/javascript" :src "bootstrap/js/bootstrap.js"}]
               [:script {:type "text/javascript" :src "highcharts.js"}]
               [:script {:type "text/javascript" :src "js/vendor/jquery.ui.widget.js"}]
               [:script {:type "text/javascript" :src "js/jquery.iframe-transport.js"}]
               [:script {:type "text/javascript" :src "js/jquery.fileupload.js"}]
               [:script {:type "text/javascript" :src "js/jquery.fileupload-fp.js"}]
               [:script {:type "text/javascript" :src "js/jquery.fileupload-ui.js"}]
               [:script {:type "text/javascript" :src "js/locale.js"}]
               [:script {:type "text/javascript" :src "js/main.js"}]
               (cljs/include-scripts)]))
