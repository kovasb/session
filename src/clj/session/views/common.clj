(ns session.views.common

  (:use [noir.core :only [defpartial]]
        [hiccup.page :only [include-css html5]]))

(defpartial layout [& content]
            (html5
              [:head
               [:title "htmlrepl"]
               (include-css "bootstrap/css/bootstrap.css")
               (include-css "css/jquery.fileupload-ui.css")
               (include-css "css/codemirror.css")
               (include-css "css/fatcursor.css")]
              [:body {:style "padding-top:40px"}
               content
               ;;[:script {:type "text/javascript" :src "ace/ace.js"}]
               ;;[:script {:type "text/javascript" :src "ace/mode-clojure.js"}]
               [:script {:type "text/javascript" :src "js/codemirror-compressed.js"}]
               [:script {:type "text/javascript" :src "js/subpar.js"}]
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
               [:script {:type "text/javascript" :src "cljs/bootstrap.js"}]

               ]))
