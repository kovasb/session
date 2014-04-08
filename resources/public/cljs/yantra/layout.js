// Compiled by ClojureScript 0.0-2197
goog.provide('yantra.layout');
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
yantra.layout.layout_renderers = new cljs.core.PersistentArrayMap.fromArray([yantra.datatypes.Column,(function (cursor,owner,opts){var builder = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"builder","builder",1244848909));if(typeof yantra.layout.t15039 !== 'undefined')
{} else
{
/**
* @constructor
*/
yantra.layout.t15039 = (function (builder,opts,owner,cursor,meta15040){
this.builder = builder;
this.opts = opts;
this.owner = owner;
this.cursor = cursor;
this.meta15040 = meta15040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
yantra.layout.t15039.cljs$lang$type = true;
yantra.layout.t15039.cljs$lang$ctorStr = "yantra.layout/t15039";
yantra.layout.t15039.cljs$lang$ctorPrWriter = ((function (builder){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"yantra.layout/t15039");
});})(builder))
;
yantra.layout.t15039.prototype.om$core$IRender$ = true;
yantra.layout.t15039.prototype.om$core$IRender$render$arity$1 = ((function (builder){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,cljs.core.into_array.call(null,cljs.core.map.call(null,((function (___$1,builder){
return (function (p1__15038_SHARP_){return React.DOM.div(null,self__.builder.call(null,p1__15038_SHARP_));
});})(___$1,builder))
,new cljs.core.Keyword(null,"contents","contents",4741549708).cljs$core$IFn$_invoke$arity$1(self__.cursor))));
});})(builder))
;
yantra.layout.t15039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (builder){
return (function (_15041){var self__ = this;
var _15041__$1 = this;return self__.meta15040;
});})(builder))
;
yantra.layout.t15039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (builder){
return (function (_15041,meta15040__$1){var self__ = this;
var _15041__$1 = this;return (new yantra.layout.t15039(self__.builder,self__.opts,self__.owner,self__.cursor,meta15040__$1));
});})(builder))
;
yantra.layout.__GT_t15039 = ((function (builder){
return (function __GT_t15039(builder__$1,opts__$1,owner__$1,cursor__$1,meta15040){return (new yantra.layout.t15039(builder__$1,opts__$1,owner__$1,cursor__$1,meta15040));
});})(builder))
;
}
return (new yantra.layout.t15039(builder,opts,owner,cursor,null));
})], true, false);

//# sourceMappingURL=layout.js.map