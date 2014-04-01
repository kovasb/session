// Compiled by ClojureScript 0.0-2197
goog.provide('session.io');
goog.require('cljs.core');
goog.require('merchant.common');
goog.require('merchant.edn.writer');
goog.require('merchant.edn.reader');
goog.require('yantra.datamappings');
goog.require('session.datamappings');
session.io.data_mappings = cljs.core.concat.call(null,yantra.datamappings.data_mappings,session.datamappings.data_mappings);
session.io.read_edn = (function read_edn(x){return merchant.edn.reader.import_edn.call(null,x,session.io.data_mappings);
});
session.io.write_edn = (function write_edn(x){return merchant.edn.writer.export_edn.call(null,x,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag-map","tag-map",3758714907),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__9429_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"record","record",4373962691).cljs$core$IFn$_invoke$arity$1(p1__9429_SHARP_),cljs.core.assoc.call(null,p1__9429_SHARP_,new cljs.core.Keyword(null,"write-fn","write-fn",3462353128),merchant.common.write_map)],null));
}),session.io.data_mappings))], null));
});

//# sourceMappingURL=io.js.map