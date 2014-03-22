(ns session.io
  (:require
    session.datamappings
    yantra.datamappings
    merchant.edn.reader
    merchant.edn.writer
    merchant.common

    ))



(def data-mappings
  (concat yantra.datamappings/data-mappings
         session.datamappings/data-mappings))


(defn read-edn [x]
  (merchant.edn.reader/import-edn
    x
    data-mappings))


(defn write-edn [x]
  (merchant.edn.writer/export-edn
    x
    {:tag-map (into {}
                    (map
                      #(vector (:record %)
                               (assoc % :write-fn merchant.common/write-map))
                      data-mappings))}))
