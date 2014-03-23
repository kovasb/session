// Compiled by ClojureScript 0.0-2156
goog.provide('yantra.graphics');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('React');
goog.require('yantra.datatypes');
goog.require('yantra.datatypes');
yantra.graphics.BoundingBox = (function (){var obj14446 = {};return obj14446;
})();
yantra.graphics.bounding_points = (function bounding_points(x){if((function (){var and__3391__auto__ = x;if(and__3391__auto__)
{return x.yantra$graphics$BoundingBox$bounding_points$arity$1;
} else
{return and__3391__auto__;
}
})())
{return x.yantra$graphics$BoundingBox$bounding_points$arity$1(x);
} else
{var x__4030__auto__ = (((x == null))?null:x);return (function (){var or__3403__auto__ = (yantra.graphics.bounding_points[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (yantra.graphics.bounding_points["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"BoundingBox.bounding-points",x);
}
}
})().call(null,x);
}
});
yantra.datatypes.Rectangle.prototype.yantra$graphics$BoundingBox$ = true;
yantra.datatypes.Rectangle.prototype.yantra$graphics$BoundingBox$bounding_points$arity$1 = (function (this$){var this$__$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(this$__$1),new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(this$__$1)], null);
});
yantra.datatypes.Disk.prototype.yantra$graphics$BoundingBox$ = true;
yantra.datatypes.Disk.prototype.yantra$graphics$BoundingBox$bounding_points$arity$1 = (function (this$){var this$__$1 = this;var point = new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(this$__$1);var radius = new cljs.core.Keyword(null,"radius","radius",4370292740).cljs$core$IFn$_invoke$arity$1(this$__$1);var x = cljs.core.first.call(null,point);var y = cljs.core.last.call(null,point);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + radius),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - radius),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + radius)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - radius)], null)], null);
});
yantra.datatypes.Line.prototype.yantra$graphics$BoundingBox$ = true;
yantra.datatypes.Line.prototype.yantra$graphics$BoundingBox$bounding_points$arity$1 = (function (this$){var this$__$1 = this;return new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(this$__$1);
});
yantra.datatypes.Point.prototype.yantra$graphics$BoundingBox$ = true;
yantra.datatypes.Point.prototype.yantra$graphics$BoundingBox$bounding_points$arity$1 = (function (this$){var this$__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(this$__$1)], null);
});
yantra.datatypes.Style.prototype.yantra$graphics$BoundingBox$ = true;
yantra.datatypes.Style.prototype.yantra$graphics$BoundingBox$bounding_points$arity$1 = (function (this$){var this$__$1 = this;return yantra.graphics.bounding_points.call(null,new cljs.core.Keyword(null,"prims","prims",1120839167).cljs$core$IFn$_invoke$arity$1(this$__$1));
});
(yantra.graphics.BoundingBox["_"] = true);
(yantra.graphics.bounding_points["_"] = (function (this$){if((cljs.core.seq_QMARK_.call(null,this$)) || (cljs.core.vector_QMARK_.call(null,this$)))
{return yantra.graphics.bounding_box.call(null,this$);
} else
{return cljs.core.PersistentVector.EMPTY;
}
}));
yantra.graphics.transpose = (function transpose(m){return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,m);
});
yantra.graphics.bounding_box = (function bounding_box(g){if((cljs.core.seq_QMARK_.call(null,g)) || (cljs.core.vector_QMARK_.call(null,g)))
{return yantra.graphics.transpose.call(null,cljs.core.map.call(null,(function (v){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.min,v),cljs.core.apply.call(null,cljs.core.max,v)], null);
}),yantra.graphics.transpose.call(null,cljs.core.mapcat.call(null,bounding_box,g))));
} else
{return yantra.graphics.transpose.call(null,cljs.core.map.call(null,(function (v){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.min,v),cljs.core.apply.call(null,cljs.core.max,v)], null);
}),yantra.graphics.transpose.call(null,yantra.graphics.bounding_points.call(null,g))));
}
});
yantra.graphics.expand_plot_range = (function expand_plot_range(bounding_box,image_size){var vec__14451 = bounding_box;var vec__14452 = cljs.core.nth.call(null,vec__14451,0,null);var xmin = cljs.core.nth.call(null,vec__14452,0,null);var ymin = cljs.core.nth.call(null,vec__14452,1,null);var vec__14453 = cljs.core.nth.call(null,vec__14451,1,null);var xmax = cljs.core.nth.call(null,vec__14453,0,null);var ymax = cljs.core.nth.call(null,vec__14453,1,null);var vec__14454 = image_size;var image_width = cljs.core.nth.call(null,vec__14454,0,null);var image_height = cljs.core.nth.call(null,vec__14454,1,null);var width = Math.abs.call(null,(xmax - xmin));var height = Math.abs.call(null,(ymax - ymin));var plotaspect = (height / width);var imageaspect = (image_height / image_width);if((plotaspect < imageaspect))
{var newheight = (width * imageaspect);var heightdiff = ((newheight - height) / 2);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xmin,(ymin - heightdiff)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xmax,(ymax + heightdiff)], null)], null);
} else
{return bounding_box;
}
});
yantra.graphics.coordinate_transformer = (function coordinate_transformer(bounding_box,image_size){var vec__14461 = yantra.graphics.expand_plot_range.call(null,bounding_box,image_size);var vec__14462 = cljs.core.nth.call(null,vec__14461,0,null);var xmin = cljs.core.nth.call(null,vec__14462,0,null);var ymin = cljs.core.nth.call(null,vec__14462,1,null);var vec__14463 = cljs.core.nth.call(null,vec__14461,1,null);var xmax = cljs.core.nth.call(null,vec__14463,0,null);var ymax = cljs.core.nth.call(null,vec__14463,1,null);var vec__14464 = image_size;var image_width = cljs.core.nth.call(null,vec__14464,0,null);var image_height = cljs.core.nth.call(null,vec__14464,1,null);var width = Math.abs.call(null,(xmax - xmin));var height = Math.abs.call(null,(ymax - ymin));return (function (p__14465){var vec__14466 = p__14465;var x = cljs.core.nth.call(null,vec__14466,0,null);var y = cljs.core.nth.call(null,vec__14466,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - xmin) * (image_width / width)),(image_height - ((y - ymin) * (image_height / height)))], null);
});
});
yantra.graphics.distance_transformer = (function distance_transformer(bounding_box,image_size){var vec__14471 = bounding_box;var vec__14472 = cljs.core.nth.call(null,vec__14471,0,null);var xmin = cljs.core.nth.call(null,vec__14472,0,null);var ymin = cljs.core.nth.call(null,vec__14472,1,null);var vec__14473 = cljs.core.nth.call(null,vec__14471,1,null);var xmax = cljs.core.nth.call(null,vec__14473,0,null);var ymax = cljs.core.nth.call(null,vec__14473,1,null);var vec__14474 = image_size;var image_width = cljs.core.nth.call(null,vec__14474,0,null);var image_height = cljs.core.nth.call(null,vec__14474,1,null);var width = Math.abs.call(null,(xmax - xmin));var height = Math.abs.call(null,(ymax - ymin));return (function (d){return (d * (image_width / width));
});
});
yantra.graphics.listplot = (function listplot(l){return (new yantra.datatypes.Graphics(cljs.core.vec.call(null,cljs.core.map_indexed.call(null,(function (p1__14475_SHARP_,p2__14476_SHARP_){return (new yantra.datatypes.Point(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14475_SHARP_,p2__14476_SHARP_], null)));
}),l))));
});
yantra.graphics.points_to_svg_string = (function points_to_svg_string(points){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.map.call(null,(function (p1__14477_SHARP_){return [cljs.core.str(cljs.core.first.call(null,p1__14477_SHARP_)),cljs.core.str(","),cljs.core.str(cljs.core.last.call(null,p1__14477_SHARP_))].join('');
}),points)));
});
yantra.graphics.graphics_renderers = new cljs.core.PersistentArrayMap.fromArray([yantra.datatypes.Line,(function (cursor,owner,opts){var v = om.core.value.call(null,cursor);var coordfn = new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122).cljs$core$IFn$_invoke$arity$1(opts);return React.DOM.polyline({"points": yantra.graphics.points_to_svg_string.call(null,cljs.core.map.call(null,coordfn,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(v))), "fill": "none"});
}),yantra.datatypes.Style,(function (cursor,owner,opts){var e = om.core.value.call(null,cursor);var coordfn = new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122).cljs$core$IFn$_invoke$arity$1(opts);var distancefn = new cljs.core.Keyword(null,"distance-fn","distance-fn",4584217874).cljs$core$IFn$_invoke$arity$1(opts);var builder = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"builder","builder",1244848909));return React.DOM.g(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.Keyword(null,"style","style",1123684643).cljs$core$IFn$_invoke$arity$1(e)], null)),(((cljs.core.seq_QMARK_.call(null,new cljs.core.Keyword(null,"prims","prims",1120839167).cljs$core$IFn$_invoke$arity$1(e))) || (cljs.core.vector_QMARK_.call(null,new cljs.core.Keyword(null,"prims","prims",1120839167).cljs$core$IFn$_invoke$arity$1(e))))?cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__14478_SHARP_){return builder.call(null,p1__14478_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122),coordfn,new cljs.core.Keyword(null,"distance-fn","distance-fn",4584217874),distancefn], null)], null));
}),new cljs.core.Keyword(null,"prims","prims",1120839167).cljs$core$IFn$_invoke$arity$1(cursor))):builder.call(null,new cljs.core.Keyword(null,"prims","prims",1120839167).cljs$core$IFn$_invoke$arity$1(cursor),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122),coordfn,new cljs.core.Keyword(null,"distance-fn","distance-fn",4584217874),distancefn], null)], null))));
}),yantra.datatypes.Point,(function (cursor,owner,opts){var p2 = new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(om.core.value.call(null,cursor));return React.DOM.circle(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1013907431),cljs.core.first.call(null,p2),new cljs.core.Keyword(null,"cy","cy",1013907432),cljs.core.last.call(null,p2),new cljs.core.Keyword(null,"r","r",1013904356),"3"], null));
}),yantra.datatypes.Disk,(function (cursor,owner,opts){var coordfn = new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122).cljs$core$IFn$_invoke$arity$1(opts);var distancefn = new cljs.core.Keyword(null,"distance-fn","distance-fn",4584217874).cljs$core$IFn$_invoke$arity$1(opts);var v = om.core.value.call(null,cursor);var p2 = coordfn.call(null,new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(v));return React.DOM.circle({"r": distancefn.call(null,new cljs.core.Keyword(null,"radius","radius",4370292740).cljs$core$IFn$_invoke$arity$1(v)), "cy": cljs.core.last.call(null,p2), "cx": cljs.core.first.call(null,p2)});
}),yantra.datatypes.Graphics,(function (cursor,owner,opts){var builder = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"builder","builder",1244848909));var bb = yantra.graphics.bounding_box.call(null,new cljs.core.Keyword(null,"contents","contents",4741549708).cljs$core$IFn$_invoke$arity$1(om.core.value.call(null,cursor)));var coordfn = yantra.graphics.coordinate_transformer.call(null,bb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [200,200], null));var distancefn = yantra.graphics.distance_transformer.call(null,bb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [200,200], null));return React.DOM.svg({"height": 200, "width": 200},cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__14479_SHARP_){return builder.call(null,p1__14479_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122),coordfn,new cljs.core.Keyword(null,"distance-fn","distance-fn",4584217874),distancefn], null)], null));
}),new cljs.core.Keyword(null,"contents","contents",4741549708).cljs$core$IFn$_invoke$arity$1(cursor))));
})], true, false);

//# sourceMappingURL=graphics.js.map