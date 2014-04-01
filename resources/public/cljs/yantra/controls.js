// Compiled by ClojureScript 0.0-2197
goog.provide('yantra.controls');
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
yantra.controls.control_renderers = new cljs.core.PersistentArrayMap.fromArray([yantra.datatypes.Slider,(function (cursor,owner,opts){var v = om.core.value.call(null,cursor);var val = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(v);var r = new cljs.core.Keyword(null,"range","range",1122184367).cljs$core$IFn$_invoke$arity$1(v);var min = cljs.core.first.call(null,r);var max = cljs.core.second.call(null,r);var step = ((cljs.core._EQ_.call(null,3,cljs.core.count.call(null,r)))?cljs.core.last.call(null,r):1);return om.dom.input.call(null,{"step": step, "max": max, "min": min, "defaultValue": val, "type": "range"});
})], true, false);

//# sourceMappingURL=controls.js.map