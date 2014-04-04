// Compiled by ClojureScript 0.0-2197
goog.provide('yantra.plot');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('React');
goog.require('yantra.datatypes');
goog.require('yantra.datatypes');
yantra.plot.bar_chart_vega_values = (function bar_chart_vega_values(x){return cljs.core.mapv.call(null,(function (d,l){return new cljs.core.PersistentArrayMap(null, 2, ["x",l,"y",d], null);
}),new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"labels","labels",4198454129).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",1017322386).cljs$core$IFn$_invoke$arity$1(x)));
});
yantra.plot.bar_chart_spec = (function bar_chart_spec(x){return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",1127031096),200,new cljs.core.Keyword(null,"height","height",4087841945),200,new cljs.core.Keyword(null,"padding","padding",4502531971),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",1014019271),10,new cljs.core.Keyword(null,"left","left",1017222009),30,new cljs.core.Keyword(null,"bottom","bottom",3925642653),20,new cljs.core.Keyword(null,"right","right",1122416014),10], null),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"table",new cljs.core.Keyword(null,"values","values",4485058708),yantra.plot.bar_chart_vega_values.call(null,x)], null)], null),new cljs.core.Keyword(null,"axes","axes",1016912535),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"x",new cljs.core.Keyword(null,"scale","scale",1123155132),"x"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"y",new cljs.core.Keyword(null,"scale","scale",1123155132),"y"], null)], null),new cljs.core.Keyword(null,"scales","scales",4400681947),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),"x",new cljs.core.Keyword(null,"type","type",1017479852),"ordinal",new cljs.core.Keyword(null,"range","range",1122184367),"width",new cljs.core.Keyword(null,"domain","domain",3982673974),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",1016980252),"table",new cljs.core.Keyword(null,"field","field",1111331948),"data.x"], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),"y",new cljs.core.Keyword(null,"range","range",1122184367),"height",new cljs.core.Keyword(null,"nice","nice",1017285327),true,new cljs.core.Keyword(null,"domain","domain",3982673974),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",1016980252),"table",new cljs.core.Keyword(null,"field","field",1111331948),"data.y"], null)], null)], null),new cljs.core.Keyword(null,"marks","marks",1117570744),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"rect",new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",1016980252),"table"], null),new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enter","enter",1110571594),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",1123155132),"x",new cljs.core.Keyword(null,"field","field",1111331948),"data.x"], null),new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",1123155132),"x",new cljs.core.Keyword(null,"band","band",1016920487),true,new cljs.core.Keyword(null,"offset","offset",4289091589),-1], null),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",1123155132),"y",new cljs.core.Keyword(null,"field","field",1111331948),"data.y"], null),new cljs.core.Keyword(null,"y2","y2",1013908043),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",1123155132),"y",new cljs.core.Keyword(null,"value","value",1125876963),0], null)], null),new cljs.core.Keyword(null,"update","update",4470025275),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",1017047285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"steelBlue"], null)], null)], null)], null)], null)], null);
});
yantra.plot.list_line_plot_vega_values = (function list_line_plot_vega_values(x){var d = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(x);var temp__4090__auto__ = cljs.core.first.call(null,d);if(cljs.core.truth_(temp__4090__auto__))
{var f = temp__4090__auto__;if(cljs.core.vector_QMARK_.call(null,f))
{return cljs.core.mapv.call(null,((function (f,temp__4090__auto__,d){
return (function (p__15032){var vec__15033 = p__15032;var x__$1 = cljs.core.nth.call(null,vec__15033,0,null);var y = cljs.core.nth.call(null,vec__15033,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),x__$1,new cljs.core.Keyword(null,"y","y",1013904363),y], null);
});})(f,temp__4090__auto__,d))
,d);
} else
{return cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (f,temp__4090__auto__,d){
return (function (i,y){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),i,new cljs.core.Keyword(null,"y","y",1013904363),y], null);
});})(f,temp__4090__auto__,d))
,d));
}
} else
{return null;
}
});
yantra.plot.list_line_plot_spec = (function list_line_plot_spec(x){return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",1127031096),400,new cljs.core.Keyword(null,"height","height",4087841945),200,new cljs.core.Keyword(null,"padding","padding",4502531971),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",1014019271),10,new cljs.core.Keyword(null,"left","left",1017222009),30,new cljs.core.Keyword(null,"bottom","bottom",3925642653),20,new cljs.core.Keyword(null,"right","right",1122416014),10], null),new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"table",new cljs.core.Keyword(null,"values","values",4485058708),yantra.plot.list_line_plot_vega_values.call(null,x)], null)], null),new cljs.core.Keyword(null,"axes","axes",1016912535),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"x",new cljs.core.Keyword(null,"scale","scale",1123155132),"x",new cljs.core.Keyword(null,"tickSizeEnd","tickSizeEnd",2289845295),0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"y",new cljs.core.Keyword(null,"scale","scale",1123155132),"y"], null)], null),new cljs.core.Keyword(null,"scales","scales",4400681947),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),"x",new cljs.core.Keyword(null,"type","type",1017479852),"linear",new cljs.core.Keyword(null,"range","range",1122184367),"width",new cljs.core.Keyword(null,"domain","domain",3982673974),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",1016980252),"table",new cljs.core.Keyword(null,"field","field",1111331948),"data.x"], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),"y",new cljs.core.Keyword(null,"range","range",1122184367),"height",new cljs.core.Keyword(null,"nice","nice",1017285327),"true",new cljs.core.Keyword(null,"domain","domain",3982673974),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",1016980252),"table",new cljs.core.Keyword(null,"field","field",1111331948),"data.y"], null)], null)], null),new cljs.core.Keyword(null,"marks","marks",1117570744),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"line",new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",1016980252),"table"], null),new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1110571594),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",1123155132),"x",new cljs.core.Keyword(null,"field","field",1111331948),"data.x"], null),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",1123155132),"y",new cljs.core.Keyword(null,"field","field",1111331948),"data.y"], null),new cljs.core.Keyword(null,"stroke","stroke",4416891306),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"steelBlue"], null),new cljs.core.Keyword(null,"strokeWidth","strokeWidth",2937970144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),2], null)], null)], null)], null)], null)], null);
});
yantra.plot.plot_renderers = new cljs.core.PersistentArrayMap.fromArray([yantra.datatypes.ListLinePlot,(function (cursor,owner,opts){if(typeof yantra.plot.t15034 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.plot.t15034 = (function (opts,owner,cursor,meta15035){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta15035 = meta15035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.plot.t15034.cljs$lang$type = true;
yantra.plot.t15034.cljs$lang$ctorStr = "yantra.plot/t15034";
yantra.plot.t15034.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"yantra.plot/t15034");
});
yantra.plot.t15034.prototype.om$core$IDidMount$ = true;
yantra.plot.t15034.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return vg.parse.spec(cljs.core.clj__GT_js.call(null,yantra.plot.list_line_plot_spec.call(null,om.core.value.call(null,self__.cursor))),((function (___$1){
return (function (chart){return chart.call(null,{"el": om.core.get_node.call(null,self__.owner,"theElt")}).update();
});})(___$1))
);
});
yantra.plot.t15034.prototype.om$core$IDidUpdate$ = true;
yantra.plot.t15034.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;return vg.parse.spec(cljs.core.clj__GT_js.call(null,yantra.plot.list_line_plot_spec.call(null,om.core.value.call(null,self__.cursor))),((function (this$__$1){
return (function (chart){return chart.call(null,{"el": om.core.get_node.call(null,self__.owner,"theElt")}).update();
});})(this$__$1))
);
});
yantra.plot.t15034.prototype.om$core$IRender$ = true;
yantra.plot.t15034.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span({"ref": "theElt"},"");
});
yantra.plot.t15034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15036){var self__ = this;
var _15036__$1 = this;return self__.meta15035;
});
yantra.plot.t15034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15036,meta15035__$1){var self__ = this;
var _15036__$1 = this;return (new yantra.plot.t15034(self__.opts,self__.owner,self__.cursor,meta15035__$1));
});
yantra.plot.__GT_t15034 = (function __GT_t15034(opts__$1,owner__$1,cursor__$1,meta15035){return (new yantra.plot.t15034(opts__$1,owner__$1,cursor__$1,meta15035));
});
}
return (new yantra.plot.t15034(opts,owner,cursor,null));
}),yantra.datatypes.BarChart,(function (cursor,owner,opts){if(typeof yantra.plot.t15037 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.plot.t15037 = (function (opts,owner,cursor,meta15038){
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta15038 = meta15038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.plot.t15037.cljs$lang$type = true;
yantra.plot.t15037.cljs$lang$ctorStr = "yantra.plot/t15037";
yantra.plot.t15037.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"yantra.plot/t15037");
});
yantra.plot.t15037.prototype.om$core$IDidMount$ = true;
yantra.plot.t15037.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return vg.parse.spec(cljs.core.clj__GT_js.call(null,yantra.plot.bar_chart_spec.call(null,om.core.value.call(null,self__.cursor))),((function (___$1){
return (function (chart){return chart.call(null,{"el": om.core.get_node.call(null,self__.owner,"theElt")}).update();
});})(___$1))
);
});
yantra.plot.t15037.prototype.om$core$IDidUpdate$ = true;
yantra.plot.t15037.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;return vg.parse.spec(cljs.core.clj__GT_js.call(null,yantra.plot.bar_chart_spec.call(null,om.core.value.call(null,self__.cursor))),((function (this$__$1){
return (function (chart){return chart.call(null,{"el": om.core.get_node.call(null,self__.owner,"theElt")}).update();
});})(this$__$1))
);
});
yantra.plot.t15037.prototype.om$core$IRender$ = true;
yantra.plot.t15037.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span({"ref": "theElt"},"");
});
yantra.plot.t15037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15039){var self__ = this;
var _15039__$1 = this;return self__.meta15038;
});
yantra.plot.t15037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15039,meta15038__$1){var self__ = this;
var _15039__$1 = this;return (new yantra.plot.t15037(self__.opts,self__.owner,self__.cursor,meta15038__$1));
});
yantra.plot.__GT_t15037 = (function __GT_t15037(opts__$1,owner__$1,cursor__$1,meta15038){return (new yantra.plot.t15037(opts__$1,owner__$1,cursor__$1,meta15038));
});
}
return (new yantra.plot.t15037(opts,owner,cursor,null));
})], true, false);

//# sourceMappingURL=plot.js.map