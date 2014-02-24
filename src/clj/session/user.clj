(ns session.user
  (:use yantra.datatypes
        [criterium.core :only [quick-benchmark benchmark]])
  (:require [datomic.api :as d]))


(declare ^:dynamic *datomic-conn*)