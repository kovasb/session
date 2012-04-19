(ns session.client.main
  (:require
   [cljs-jquery.core :as cj]
   [clojure.browser.repl :as repl]
   [fetch.remotes :as remotes]
   [goog.events :as events]
   [goog.events.EventType :as event-type])
  (:use-macros [cljs-jquery.macros :only [$]])
  (:require-macros [fetch.macros :as pm])

  ;;(:use [jayq.core :only [$ append]])
  ;;(:use-macros [crate.macros :only [defpartial]])
  )


(repl/connect "http://localhost:9000/repl")

;;(js/alert "foobarvar")

;https://gist.github.com/1141054


(defn jsObj
  "Convert a clojure map into a JavaScript object"
  [obj]
  (. (into {} (map (fn [[k v]]
                           (let [k (if (keyword? k) (name k) k)
                                 v (if (keyword? v) (name v) v)]
                             (if (map? v)
                               [k (jsObj v)]
                               [k v])))
                   obj))
     -strobj))

;;(defn session #session {id:1 :loops [#loop {:in 1 :out 1} ]})

(def last-out-id (atom 1))
(defn new-out-id [] (str "out" (swap! last-out-id #(+ 1 %))))
(def last-in-id (atom 1))
(defn new-in-id [] (str "in" (swap! last-in-id #(+ 1 %))))
(def last-loop-id (atom 2))
(defn new-loop-id [] (str (swap! last-in-id #(+ 1 %))))


(defmulti control #(identity (:view (meta ($ % (data "model"))))))

(defmethod control :default nil)

(defmulti view #(identity (:view (meta %))))

(defmethod view :dom [arg] ($ arg))

(defmethod view :default [arg]
  (cond
   (instance? js/Element arg) arg
   (instance? js/jQuery arg) arg
   true (pr-str arg)))


(defn render [m] (let [v (view m)] (control v) v))

(def ace (js* "ace"))

(def js-require (js* "require"))

(def canon (js-require "pilot/canon"))

(defn add-keybindings []
  (.addCommand canon
 (jsObj {
   :name "evaluateCell"
   :bindKey {:win "Shift-Return" :mac "Shift-Return" :sender "editor"}
   :exec (fn [env args request] (def keyevent [env args request])
           ($ (. (. env -editor) -container) (trigger "evaluate-input")))})))

(defn fit-to-length-function [id editor]
  (fn []
    ($ (str "#" id)
       (css "height"
            (str ( *
                   (. (. editor -renderer ) -lineHeight)
                   (. (. editor (getSession)) (getLength))) "px")))
    (. editor (resize))))

(defn create-editor [id]
  (let [
       editor (.edit ace id)
       mode (. (js-require "ace/mode/clojure") -Mode)
       fitfn (fit-to-length-function id editor)
        ]
    (.setMode (. editor (getSession)) (mode.))
    (.addEventListener (. editor (getSession))  "change" fitfn)
    (.setShowGutter (. editor -renderer) false)
    (.setHScrollBarAlwaysVisible  (. editor -renderer) false)
    ;(.setVScrollBarAlwaysVisible  (.renderer editor) false)
    editor))




(defn evaluate-loop [model]
  (pm/remote
   (compile-expr-string @(:input model))
   [result]
   ;;(js/alert (pr-str (:result result)))
   (reset! (:output model) (js/eval (:result result)))))

(defmethod view :session [model]
  ($ [:div.session
      (render ^{:view :loop-creator} [:loop-creator])
      (map render @(:loops model))
      ] (data "model" model)))

(defn delete-loop [session-view event]
   (let [
        event-target (. event -target)
        event-model ($ event-target (data "model"))
        session-model ($ session-view (data "model"))
        ]
     ($ event-target (remove))
     (swap! (:loops session-model) #(vec (filter (fn [m] (not= m event-model)) %)))

  ))


(defn insert-new-loop [session-view event]
  (let [
        event-target (. event -target)
        event-model ($ event-target (data "model"))
        loop-model (let [id (new-loop-id)] ^{:view :loop} {:id id :input (atom [:loop id]) :output (atom [:loop id])})
        loop-view (render loop-model)
        session-model ($ session-view (data "model"))
        ]
    (def insert-test [event event-target event-model loop-model loop-view])
    (if
        (= event-model [:loop-creator])
      (swap! (:loops session-model) #(vec (concat [loop-model] %)))
      (swap! (:loops session-model)
             #(let
                  [[left right] (split-with (fn [m] (not= m event-model)) %)]
                (vec (concat left [event-model loop-model] (rest right))))))
    ($ loop-view (insertAfter event-target))
    ;;(js/alert "post-render")
    ($ loop-view (trigger "post-render"))))

(defmethod control :session [session-view]
  ($ session-view
     (on "insert-new-loop" #(insert-new-loop session-view %)))
  ($ session-view (on "delete-loop" #(delete-loop session-view %)))
  ($ session-view (on "delete-loop" identity))
  ;;($ session-view (on "post-render"))
  )

(defmethod view :loop-creator [model]
  ($ [:div.row.span10.loop-creator {:style "background:#000000;height:30px"} ""] (data "model" model)))

(defmethod control :loop-creator [viewobject]
  ($ viewobject (on "click" #($ :this (trigger "insert-new-loop"))))
  )

(defmethod view :loop [model]
  (let [id (:id model)]
    ($
     [:div.loop-container
      [:div.row.input {:id id}
       [:div.span10.row
        [:a.close.loop-deleter {:href "#" :id (str "delete" id) :style "float:right"} "x"]]
       [:div.span8 {:id (str "area" id) :style "position:relative;height:36px"} @(:input model)]]
      [:div.row {:id (str "out" id)}
       [:div.span8.loopout {:style "background:#DDD;position:relative;height:20px"}
        (view @(:output model))]]
      (view ^{:view :loop-creator} [:loop-creator])
      ]
     (data "model" model))))

(defn shift-enter-event? [e] (and (. e (shiftKey)) (= 13 (. e (keycode)))))

(defmethod control :loop [viewobject]
  (let [model ($ viewobject (data "model")) id (:id model) editor (atom [])]
    ($ viewobject (on "click" ".loop-creator" #(do ($ viewobject (trigger "insert-new-loop")) )))
    ;;($ viewobject (on "click" "a.close"))
    ($ viewobject (on "post-render" #(reset! editor (create-editor (str "area" id)))))
    ($ viewobject (on "click" ".loop-deleter" #($ viewobject (trigger "delete-loop"))))
    ($ viewobject (on "evaluate-input"
                      #(do
                         ;;(js/alert "evaluate-input")
                         (reset! (:input model) (. (. @editor (getSession)) (getValue)))
                         (evaluate-loop model))))
    (add-watch (:output model) :update-output
     (fn [key atom old new]
       ($ viewobject (find ".loopout") (html "") (append ($ [:div (view new)])))))))

(comment
 (def model1 ^{:view :loop} {:id 2 :input (atom "a") :output (atom "b")})
 (def viewobject ($ (view model1)))
 (control viewobject)
 ($ viewobject (appendTo ($ "body > .container")))
 ($ viewobject (trigger "post-render"))
 )

;; ^{:view :dom} [:a {:href "#"} "foo"]

($ js/document (ready
                #(do

                   (add-keybindings)
                   (def session (let [id (new-loop-id)]
                                                    ^{:view :session}  {:id 1
                                                     :loops
                                                     (atom [^{:view :loop} {:id id :input (atom [:loop id]) :output (atom [:loop id])}])}
                                                    ))
                   (def viewobject ($ (view session)))
                   (control viewobject)
                   ($ viewobject (appendTo ($ "body > .container")))
                   ($ ".loop-container" (trigger "post-render"))
 ;;(def model1 ^{:view :loop} {:id 2 :input (atom "a") :output (atom "b")})
 ;;(def viewobject ($ (view model1)))
 ;;(control viewobject)
 ;;($ viewobject (appendTo ($ "body > .container")))
 ;;($ viewobject (trigger "post-render"))

                   )))
