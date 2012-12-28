(ns session.client.remote
  (:require [cljs.reader :as r]
            [goog.net.XhrIo :as XhrIo]
            [goog.Uri.QueryData :as QueryData]))
 
(defn url-encode [data]
  (QueryData/createFromKeysValues
   (array "data")
   (array (pr-str data))))

(defn send [url & {:keys [data callback method timeout]
                   :or {callback identity
                        method :get}}]
  (XhrIo/send url
              #(-> % .-target .getResponseText r/read-string callback)
              (.toUpperCase (name method))
              (url-encode data)))
