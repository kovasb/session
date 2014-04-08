// Compiled by ClojureScript 0.0-2197
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
yantra.graphics.BoundingBox = (function (){var obj14839 = {};return obj14839;
})();
yantra.graphics.bounding_points = (function bounding_points(x){if((function (){var and__3466__auto__ = x;if(and__3466__auto__)
{return x.yantra$graphics$BoundingBox$bounding_points$arity$1;
} else
{return and__3466__auto__;
}
})())
{return x.yantra$graphics$BoundingBox$bounding_points$arity$1(x);
} else
{var x__4105__auto__ = (((x == null))?null:x);return (function (){var or__3478__auto__ = (yantra.graphics.bounding_points[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (yantra.graphics.bounding_points["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
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
yantra.graphics.expand_plot_range = (function expand_plot_range(bounding_box,image_size){var vec__14844 = bounding_box;var vec__14845 = cljs.core.nth.call(null,vec__14844,0,null);var xmin = cljs.core.nth.call(null,vec__14845,0,null);var ymin = cljs.core.nth.call(null,vec__14845,1,null);var vec__14846 = cljs.core.nth.call(null,vec__14844,1,null);var xmax = cljs.core.nth.call(null,vec__14846,0,null);var ymax = cljs.core.nth.call(null,vec__14846,1,null);var vec__14847 = image_size;var image_width = cljs.core.nth.call(null,vec__14847,0,null);var image_height = cljs.core.nth.call(null,vec__14847,1,null);var width = Math.abs.call(null,(xmax - xmin));var height = Math.abs.call(null,(ymax - ymin));var plotaspect = (height / width);var imageaspect = (image_height / image_width);if((plotaspect < imageaspect))
{var newheight = (width * imageaspect);var heightdiff = ((newheight - height) / 2);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xmin,(ymin - heightdiff)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xmax,(ymax + heightdiff)], null)], null);
} else
{return bounding_box;
}
});
yantra.graphics.coordinate_transformer = (function coordinate_transformer(bounding_box,image_size){var vec__14854 = yantra.graphics.expand_plot_range.call(null,bounding_box,image_size);var vec__14855 = cljs.core.nth.call(null,vec__14854,0,null);var xmin = cljs.core.nth.call(null,vec__14855,0,null);var ymin = cljs.core.nth.call(null,vec__14855,1,null);var vec__14856 = cljs.core.nth.call(null,vec__14854,1,null);var xmax = cljs.core.nth.call(null,vec__14856,0,null);var ymax = cljs.core.nth.call(null,vec__14856,1,null);var vec__14857 = image_size;var image_width = cljs.core.nth.call(null,vec__14857,0,null);var image_height = cljs.core.nth.call(null,vec__14857,1,null);var width = Math.abs.call(null,(xmax - xmin));var height = Math.abs.call(null,(ymax - ymin));return ((function (vec__14854,vec__14855,xmin,ymin,vec__14856,xmax,ymax,vec__14857,image_width,image_height,width,height){
return (function (p__14858){var vec__14859 = p__14858;var x = cljs.core.nth.call(null,vec__14859,0,null);var y = cljs.core.nth.call(null,vec__14859,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - xmin) * (image_width / width)),(image_height - ((y - ymin) * (image_height / height)))], null);
});
;})(vec__14854,vec__14855,xmin,ymin,vec__14856,xmax,ymax,vec__14857,image_width,image_height,width,height))
});
yantra.graphics.distance_transformer = (function distance_transformer(bounding_box,image_size){var vec__14864 = bounding_box;var vec__14865 = cljs.core.nth.call(null,vec__14864,0,null);var xmin = cljs.core.nth.call(null,vec__14865,0,null);var ymin = cljs.core.nth.call(null,vec__14865,1,null);var vec__14866 = cljs.core.nth.call(null,vec__14864,1,null);var xmax = cljs.core.nth.call(null,vec__14866,0,null);var ymax = cljs.core.nth.call(null,vec__14866,1,null);var vec__14867 = image_size;var image_width = cljs.core.nth.call(null,vec__14867,0,null);var image_height = cljs.core.nth.call(null,vec__14867,1,null);var width = Math.abs.call(null,(xmax - xmin));var height = Math.abs.call(null,(ymax - ymin));return ((function (vec__14864,vec__14865,xmin,ymin,vec__14866,xmax,ymax,vec__14867,image_width,image_height,width,height){
return (function (d){return (d * (image_width / width));
});
;})(vec__14864,vec__14865,xmin,ymin,vec__14866,xmax,ymax,vec__14867,image_width,image_height,width,height))
});
yantra.graphics.listplot = (function listplot(l){return (new yantra.datatypes.Graphics(cljs.core.vec.call(null,cljs.core.map_indexed.call(null,(function (p1__14868_SHARP_,p2__14869_SHARP_){return (new yantra.datatypes.Point(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14868_SHARP_,p2__14869_SHARP_], null)));
}),l))));
});
yantra.graphics.points_to_svg_string = (function points_to_svg_string(points){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.map.call(null,(function (p1__14870_SHARP_){return [cljs.core.str(cljs.core.first.call(null,p1__14870_SHARP_)),cljs.core.str(","),cljs.core.str(cljs.core.last.call(null,p1__14870_SHARP_))].join('');
}),points)));
});
yantra.graphics.graphics_renderers = new cljs.core.PersistentArrayMap.fromArray([yantra.datatypes.Line,(function (cursor,owner,opts){if(typeof yantra.graphics.t14873 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.graphics.t14873 = (function (opts,owner,cursor,meta14874){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta14874 = meta14874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.graphics.t14873.cljs$lang$type = true;
yantra.graphics.t14873.cljs$lang$ctorStr = "yantra.graphics/t14873";
yantra.graphics.t14873.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"yantra.graphics/t14873");
});
yantra.graphics.t14873.prototype.om$core$IRender$ = true;
yantra.graphics.t14873.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var v = om.core.value.call(null,self__.cursor);var coordfn = new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122).cljs$core$IFn$_invoke$arity$1(self__.opts);return React.DOM.polyline({"points": yantra.graphics.points_to_svg_string.call(null,cljs.core.map.call(null,coordfn,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(v))), "fill": "none"});
});
yantra.graphics.t14873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14875){var self__ = this;
var _14875__$1 = this;return self__.meta14874;
});
yantra.graphics.t14873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14875,meta14874__$1){var self__ = this;
var _14875__$1 = this;return (new yantra.graphics.t14873(self__.opts,self__.owner,self__.cursor,meta14874__$1));
});
yantra.graphics.__GT_t14873 = (function __GT_t14873(opts__$1,owner__$1,cursor__$1,meta14874){return (new yantra.graphics.t14873(opts__$1,owner__$1,cursor__$1,meta14874));
});
}
return (new yantra.graphics.t14873(opts,owner,cursor,null));
}),yantra.datatypes.Style,(function (cursor,owner,opts){if(typeof yantra.graphics.t14876 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.graphics.t14876 = (function (opts,owner,cursor,meta14877){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta14877 = meta14877;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.graphics.t14876.cljs$lang$type = true;
yantra.graphics.t14876.cljs$lang$ctorStr = "yantra.graphics/t14876";
yantra.graphics.t14876.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"yantra.graphics/t14876");
});
yantra.graphics.t14876.prototype.om$core$IRender$ = true;
yantra.graphics.t14876.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var e = om.core.value.call(null,self__.cursor);var coordfn = new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122).cljs$core$IFn$_invoke$arity$1(self__.opts);var distancefn = new cljs.core.Keyword(null,"distance-fn","distance-fn",4584217874).cljs$core$IFn$_invoke$arity$1(self__.opts);var builder = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"builder","builder",1244848909));return React.DOM.g(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.Keyword(null,"style","style",1123684643).cljs$core$IFn$_invoke$arity$1(e)], null)),(((cljs.core.seq_QMARK_.call(null,new cljs.core.Keyword(null,"prims","prims",1120839167).cljs$core$IFn$_invoke$arity$1(e))) || (cljs.core.vector_QMARK_.call(null,new cljs.core.Keyword(null,"prims","prims",1120839167).cljs$core$IFn$_invoke$arity$1(e))))?cljs.core.into_array.call(null,cljs.core.map.call(null,((function (e,coordfn,distancefn,builder,___$1){
return (function (p1__14871_SHARP_){return builder.call(null,p1__14871_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122),coordfn,new cljs.core.Keyword(null,"distance-fn","distance-fn",4584217874),distancefn], null)], null));
});})(e,coordfn,distancefn,builder,___$1))
,new cljs.core.Keyword(null,"prims","prims",1120839167).cljs$core$IFn$_invoke$arity$1(self__.cursor))):builder.call(null,new cljs.core.Keyword(null,"prims","prims",1120839167).cljs$core$IFn$_invoke$arity$1(self__.cursor),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122),coordfn,new cljs.core.Keyword(null,"distance-fn","distance-fn",4584217874),distancefn], null)], null))));
});
yantra.graphics.t14876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14878){var self__ = this;
var _14878__$1 = this;return self__.meta14877;
});
yantra.graphics.t14876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14878,meta14877__$1){var self__ = this;
var _14878__$1 = this;return (new yantra.graphics.t14876(self__.opts,self__.owner,self__.cursor,meta14877__$1));
});
yantra.graphics.__GT_t14876 = (function __GT_t14876(opts__$1,owner__$1,cursor__$1,meta14877){return (new yantra.graphics.t14876(opts__$1,owner__$1,cursor__$1,meta14877));
});
}
return (new yantra.graphics.t14876(opts,owner,cursor,null));
}),yantra.datatypes.Point,(function (cursor,owner,opts){if(typeof yantra.graphics.t14879 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.graphics.t14879 = (function (opts,owner,cursor,meta14880){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta14880 = meta14880;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.graphics.t14879.cljs$lang$type = true;
yantra.graphics.t14879.cljs$lang$ctorStr = "yantra.graphics/t14879";
yantra.graphics.t14879.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"yantra.graphics/t14879");
});
yantra.graphics.t14879.prototype.om$core$IRender$ = true;
yantra.graphics.t14879.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var p2 = new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(om.core.value.call(null,self__.cursor));return React.DOM.circle(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1013907431),cljs.core.first.call(null,p2),new cljs.core.Keyword(null,"cy","cy",1013907432),cljs.core.last.call(null,p2),new cljs.core.Keyword(null,"r","r",1013904356),"3"], null));
});
yantra.graphics.t14879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14881){var self__ = this;
var _14881__$1 = this;return self__.meta14880;
});
yantra.graphics.t14879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14881,meta14880__$1){var self__ = this;
var _14881__$1 = this;return (new yantra.graphics.t14879(self__.opts,self__.owner,self__.cursor,meta14880__$1));
});
yantra.graphics.__GT_t14879 = (function __GT_t14879(opts__$1,owner__$1,cursor__$1,meta14880){return (new yantra.graphics.t14879(opts__$1,owner__$1,cursor__$1,meta14880));
});
}
return (new yantra.graphics.t14879(opts,owner,cursor,null));
}),yantra.datatypes.Disk,(function (cursor,owner,opts){if(typeof yantra.graphics.t14882 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.graphics.t14882 = (function (opts,owner,cursor,meta14883){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta14883 = meta14883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.graphics.t14882.cljs$lang$type = true;
yantra.graphics.t14882.cljs$lang$ctorStr = "yantra.graphics/t14882";
yantra.graphics.t14882.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"yantra.graphics/t14882");
});
yantra.graphics.t14882.prototype.om$core$IRender$ = true;
yantra.graphics.t14882.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var coordfn = new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122).cljs$core$IFn$_invoke$arity$1(self__.opts);var distancefn = new cljs.core.Keyword(null,"distance-fn","distance-fn",4584217874).cljs$core$IFn$_invoke$arity$1(self__.opts);var v = om.core.value.call(null,self__.cursor);var p2 = coordfn.call(null,new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(v));return React.DOM.circle({"r": distancefn.call(null,new cljs.core.Keyword(null,"radius","radius",4370292740).cljs$core$IFn$_invoke$arity$1(v)), "cy": cljs.core.last.call(null,p2), "cx": cljs.core.first.call(null,p2)});
});
yantra.graphics.t14882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14884){var self__ = this;
var _14884__$1 = this;return self__.meta14883;
});
yantra.graphics.t14882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14884,meta14883__$1){var self__ = this;
var _14884__$1 = this;return (new yantra.graphics.t14882(self__.opts,self__.owner,self__.cursor,meta14883__$1));
});
yantra.graphics.__GT_t14882 = (function __GT_t14882(opts__$1,owner__$1,cursor__$1,meta14883){return (new yantra.graphics.t14882(opts__$1,owner__$1,cursor__$1,meta14883));
});
}
return (new yantra.graphics.t14882(opts,owner,cursor,null));
}),yantra.datatypes.Graphics,(function (cursor,owner,opts){if(typeof yantra.graphics.t14885 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.graphics.t14885 = (function (opts,owner,cursor,meta14886){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta14886 = meta14886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.graphics.t14885.cljs$lang$type = true;
yantra.graphics.t14885.cljs$lang$ctorStr = "yantra.graphics/t14885";
yantra.graphics.t14885.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"yantra.graphics/t14885");
});
yantra.graphics.t14885.prototype.om$core$IRender$ = true;
yantra.graphics.t14885.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var builder = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"builder","builder",1244848909));var bb = yantra.graphics.bounding_box.call(null,new cljs.core.Keyword(null,"contents","contents",4741549708).cljs$core$IFn$_invoke$arity$1(om.core.value.call(null,self__.cursor)));var coordfn = yantra.graphics.coordinate_transformer.call(null,bb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [200,200], null));var distancefn = yantra.graphics.distance_transformer.call(null,bb,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [200,200], null));return React.DOM.svg({"height": 200, "width": 200},cljs.core.into_array.call(null,cljs.core.mapv.call(null,((function (builder,bb,coordfn,distancefn,___$1){
return (function (p1__14872_SHARP_){return builder.call(null,p1__14872_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord-fn","coord-fn",4768239122),coordfn,new cljs.core.Keyword(null,"distance-fn","distance-fn",4584217874),distancefn], null)], null));
});})(builder,bb,coordfn,distancefn,___$1))
,new cljs.core.Keyword(null,"contents","contents",4741549708).cljs$core$IFn$_invoke$arity$1(self__.cursor))));
});
yantra.graphics.t14885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14887){var self__ = this;
var _14887__$1 = this;return self__.meta14886;
});
yantra.graphics.t14885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14887,meta14886__$1){var self__ = this;
var _14887__$1 = this;return (new yantra.graphics.t14885(self__.opts,self__.owner,self__.cursor,meta14886__$1));
});
yantra.graphics.__GT_t14885 = (function __GT_t14885(opts__$1,owner__$1,cursor__$1,meta14886){return (new yantra.graphics.t14885(opts__$1,owner__$1,cursor__$1,meta14886));
});
}
return (new yantra.graphics.t14885(opts,owner,cursor,null));
})], true, false);

//# sourceMappingURL=graphics.js.map