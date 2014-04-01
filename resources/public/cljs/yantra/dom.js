// Compiled by ClojureScript 0.0-2197
goog.provide('yantra.dom');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('yantra.datatypes');
goog.require('yantra.datatypes');
yantra.dom.get_element = (function get_element(e){return (React.DOM[cljs.core.name.call(null,e)]);
});
yantra.dom.dom_renderers = new cljs.core.PersistentArrayMap.fromArray([yantra.datatypes.HTMLElement,(function (cursor,owner,opts){var v = om.core.value.call(null,cursor);var tag = new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(v);var attributes = new cljs.core.Keyword(null,"attributes","attributes",1419549897).cljs$core$IFn$_invoke$arity$1(v);var builder = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"builder","builder",1244848909));return cljs.core.apply.call(null,yantra.dom.get_element.call(null,tag),cljs.core.clj__GT_js.call(null,attributes),cljs.core.into_array.call(null,cljs.core.map.call(null,builder,new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(cursor))));
})], true, false);

//# sourceMappingURL=dom.js.map