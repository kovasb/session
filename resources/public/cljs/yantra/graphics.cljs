(ns yantra.graphics
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [yantra.datatypes :as dt]
    React
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]

    [cljs.core.async :refer [>! <! chan close! put! take! sliding-buffer dropping-buffer timeout]]))




(defprotocol BoundingBox
  (bounding-points [x]))

(declare bounding-box)

(extend-protocol BoundingBox
  default
  (bounding-points [this] (if (or (seq? this) (vector? this))
                            (bounding-box this)
                            []))
  dt/Style
  (bounding-points [this] (bounding-points (:prims this)))
  dt/Point
  (bounding-points [this] [(:point this)])
  dt/Line
  (bounding-points [this] (:points this))
  dt/Disk
  (bounding-points [this]
    (let [ point (:point this)
           radius (:radius this)
           x (first point) y (last point)]
      [[(+ x radius) y]
       [(- x radius) y]
       [x (+ y radius)]
       [x (- y radius)]]))
  dt/Rectangle
  (bounding-points [this] [(:p1 this) (:p2 this)])
  dt/Style
  (bounding-points [this] (bounding-points (:prims this))))




;;;;;;;;;;;;;;;;;;;;;;;;;


(defn transpose [m]
  (apply mapv vector m))

(defn bounding-box [g]
  (if (or (seq? g) (vector? g))
    (transpose
      (map (fn [v] [(apply min v) (apply max v)])
           (transpose (mapcat bounding-box g))))
    (transpose
      (map (fn [v] [(apply min v) (apply max v)])
           (transpose (bounding-points g))))))

(defn expand-plot-range [bounding-box image-size]
  (let [[[xmin ymin] [xmax ymax]] bounding-box
        [image-width image-height] image-size
        width (Math/abs (- xmax xmin))
        height (Math/abs (- ymax ymin))
        plotaspect (/ height width)
        imageaspect (/ image-height image-width)
        ]
    ;; if aspect ratio of plotrange < aspect ratio of image, then image is taller than graphics and need to puff vertically
    ;;  compute additional necessary plotrange, divide by 2 and add to ymin and ymax
    (if (< plotaspect imageaspect)
      (let [newheight (* width imageaspect)
            heightdiff (/ (- newheight height) 2)]
        ;(js/alert (str "heightdiff" heightdiff))
        [  [xmin (- ymin heightdiff)] [xmax  (+ ymax heightdiff)]])
      bounding-box)))



(defn coordinate-transformer [bounding-box image-size]
  (let [[[xmin ymin] [xmax ymax]]  (expand-plot-range bounding-box image-size)
        [image-width image-height] image-size
        width (Math/abs (- xmax xmin))
        height (Math/abs (- ymax ymin))]

    (fn [[x y]]
      [
        (* (- x xmin) (/ image-width width))
        (- image-height (* (- y ymin) (/ image-height height)))
        ])))


(defn distance-transformer [bounding-box image-size]
  ;; compare along only 1 axis for now
  ;(js/alert (str bounding-box))
  (let [[[xmin ymin] [xmax ymax]] bounding-box
        [image-width image-height] image-size
        width (Math/abs (- xmax xmin))
        height (Math/abs (- ymax ymin))]

    (fn [d] (* d (/ image-width width)))))


(defn listplot [l]
  (dt/Graphics. (vec (map-indexed #(dt/Point. [%1 %2]) l))))



(defn points-to-svg-string [points]
  (apply str (interpose " " (map #(str (first %) "," (last %)) points))))

(def graphics-renderers

  {
   dt/Line (fn [cursor owner opts]
             (reify
               om/IRender
               (render [_]
                 (let [v (om/value cursor)
                      coordfn (:coord-fn opts)]
                  (dom/polyline #js {:fill "none" :points (points-to-svg-string (map coordfn (:points v)))})))))

   dt/Style (fn [cursor owner opts]
              (reify
                om/IRender
                (render [_]
                  (let [e (om/value cursor)
                       coordfn (:coord-fn opts)
                       distancefn (:distance-fn opts)
                       builder (om/get-shared owner :builder)]
                   (dom/g
                     (clj->js {:style (:style e)})
                     (if (or (seq? (:prims e)) (vector? (:prims e)))
                       (into-array
                         (map #(builder % {:opts {:coord-fn coordfn :distance-fn distancefn}})
                              (:prims cursor)))
                       (builder (:prims cursor) {:opts {:coord-fn coordfn :distance-fn distancefn}}))))))
             



              )

  dt/Point    (fn [cursor owner opts]
                (reify
                  om/IRender
                  (render [_]
                    (let [p2 (:point (om/value cursor))]
                     (dom/circle {:cx (first p2) :cy (last p2) :r "3"})))))

  dt/Disk   (fn [cursor owner opts]
              (reify
                om/IRender
                (render [_]
                  (let [coordfn (:coord-fn opts) distancefn (:distance-fn opts)]
                   (let [v (om/value cursor)
                         p2 (coordfn (:point v))]
                     (dom/circle #js {:cx (first p2) :cy (last p2) :r (distancefn (:radius v))}))))))

  dt/Graphics (fn [cursor owner opts]
                (reify
                  om/IRender
                  (render [_]
                    (let [builder (om/get-shared owner :builder)
                         bb (bounding-box (:contents (om/value cursor)))
                         coordfn (coordinate-transformer bb [200 200])
                         distancefn (distance-transformer bb [200 200])]
                     (dom/svg #js {:width 200 :height 200}
                              (into-array
                                (mapv #(builder % {:opts {:coord-fn coordfn :distance-fn distancefn}})
                                     (:contents cursor))))))))
  })




(comment
  (def app-state (atom
                  (k/listplot [1 2 5 6 7 4 3 2 6]))))





