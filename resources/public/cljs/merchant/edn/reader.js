// Compiled by ClojureScript 0.0-2197
goog.provide('merchant.edn.reader');
goog.require('cljs.core');
goog.require('cljs.reader');
merchant.edn.reader.record_name = (function record_name(record_class){return cljs.core.pr_str.call(null,record_class).replace("/",".");
});
/**
* Returns the map-style record factory for the `record-class`.
*/
merchant.edn.reader.class__GT_factory = (function class__GT_factory(record_class){var cname = merchant.edn.reader.record_name.call(null,record_class);var dot = cname.lastIndexOf(".");if((dot > 0))
{return eval([cljs.core.str(cljs.core.subs.call(null,cname,0,dot)),cljs.core.str(".map__GT_"),cljs.core.str(cljs.core.subs.call(null,cname,(dot + 1)))].join(''));
} else
{return null;
}
});
merchant.edn.reader.tl_mapping_to_constructor = (function tl_mapping_to_constructor(tl_mapping){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(tl_mapping),merchant.edn.reader.class__GT_factory.call(null,new cljs.core.Keyword(null,"record","record",4373962691).cljs$core$IFn$_invoke$arity$1(tl_mapping))], null);
});
merchant.edn.reader.import_edn = (function import_edn(data_string,tl_mappings){var old_tag_table = cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_);var readers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,merchant.edn.reader.tl_mapping_to_constructor,tl_mappings));cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.merge,readers);
var result = cljs.reader.read_string.call(null,data_string);cljs.core.reset_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,old_tag_table);
return result;
});

//# sourceMappingURL=reader.js.map