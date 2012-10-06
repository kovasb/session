(ns session.datafile
  (:use simple-avro.schema)
  (:use simple-avro.core)
  (:require carbonite.buffer)
  (:require carbonite.api)
  (:import (org.apache.avro Schema Schema$Type)
           (org.apache.avro.file CodecFactory
                                 DataFileStream
                                 DataFileWriter
                                 DataFileReader
                                 SeekableInput
                                 SeekableFileInput)
           (org.apache.avro.generic GenericDatumWriter
                                    GenericDatumReader)
           (java.io InputStream OutputStream File
                    FileOutputStream FileInputStream
                    BufferedOutputStream BufferedInputStream)
           (java.net URI URL)))


;; hack to fix putting raw byts in avro
(in-ns 'simple-avro.core)
(def *packers* (assoc *packers* Schema$Type/BYTES (fn [x y] (java.nio.ByteBuffer/wrap y))))
(def *unpackers* (assoc *unpackers* Schema$Type/BYTES (fn [x y]  y)))
(in-ns 'session.datafile)

(def registry (carbonite.api/default-registry))

(defavro-record LoopOutput :value avro-bytes)

(defn get-writer [file]
  (let [w (DataFileWriter. (GenericDatumWriter. (avro-schema LoopOutput)))]
    (.create w (avro-schema LoopOutput) (File. file))
    w))

(defn close-writer [writer] (.flush writer) (.close writer))

(defn get-reader [file] (DataFileReader. (File. file) (GenericDatumReader.)))

(defn write-loop-output [writer output]
  (let [position (.sync writer) b (com.esotericsoftware.kryo.io.Output. 1024)]
    (carbonite.api/write-buffer registry b output)
    (.append writer (pack (avro-schema LoopOutput) {"value"  (.toBytes b)}))
    (.flush writer)
    position))

(defn read-loop-output [reader pos]
  (.seek reader pos)
  (let [data (.next reader)]
    (carbonite.api/read-buffer
     registry
     (com.esotericsoftware.kryo.io.Input.
      (.array ((unpack (avro-schema LoopOutput) data) "value"))))))
