// Compiled by ClojureScript 0.0-2156
goog.provide('merchant.edn.writer');
goog.require('cljs.core');
goog.require('merchant.common');
goog.require('merchant.common');
goog.require('goog.string.StringBuffer');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
goog.require('goog.string');
merchant.edn.writer.char_escapes = (function (){var obj14241 = {"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};return obj14241;
})();
merchant.edn.writer.quote_string = (function quote_string(s){return [cljs.core.str("\""),cljs.core.str(s.replace(RegExp("[\\\\\"\b\f\n\r\t]","g"),(function (match){return (merchant.edn.writer.char_escapes[match]);
}))),cljs.core.str("\"")].join('');
});
merchant.edn.writer.write_sequential = (function write_sequential(begin,print_one,sep,end,sequence,w){w.append(begin);
var temp__4092__auto___14250 = cljs.core.seq.call(null,sequence);if(temp__4092__auto___14250)
{var xs_14251 = temp__4092__auto___14250;var G__14247_14252 = xs_14251;var vec__14248_14253 = G__14247_14252;var x_14254 = cljs.core.nth.call(null,vec__14248_14253,0,null);var xs_14255__$1 = cljs.core.nthnext.call(null,vec__14248_14253,1);var G__14247_14256__$1 = G__14247_14252;while(true){
var vec__14249_14257 = G__14247_14256__$1;var x_14258__$1 = cljs.core.nth.call(null,vec__14249_14257,0,null);var xs_14259__$2 = cljs.core.nthnext.call(null,vec__14249_14257,1);print_one.call(null,x_14258__$1);
if(xs_14259__$2)
{w.append(sep);
{
var G__14260 = xs_14259__$2;
G__14247_14256__$1 = G__14260;
continue;
}
} else
{}
break;
}
} else
{}
return w.append(end);
});

/**
* @constructor
* @param {*} w
* @param {*} wm
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
merchant.edn.writer.EdnWriter = (function (w,wm,__meta,__extmap){
this.w = w;
this.wm = wm;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
merchant.edn.writer.EdnWriter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3984__auto__){var self__ = this;
var this__3984__auto____$1 = this;var h__3814__auto__ = self__.__hash;if(!((h__3814__auto__ == null)))
{return h__3814__auto__;
} else
{var h__3814__auto____$1 = cljs.core.hash_imap.call(null,this__3984__auto____$1);self__.__hash = h__3814__auto____$1;
return h__3814__auto____$1;
}
});
merchant.edn.writer.EdnWriter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3989__auto__,k__3990__auto__){var self__ = this;
var this__3989__auto____$1 = this;return cljs.core._lookup.call(null,this__3989__auto____$1,k__3990__auto__,null);
});
merchant.edn.writer.EdnWriter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3991__auto__,k14265,else__3992__auto__){var self__ = this;
var this__3991__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14265,new cljs.core.Keyword(null,"w","w",1013904361)))
{return self__.w;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14265,new cljs.core.Keyword(null,"wm","wm",1013908040)))
{return self__.wm;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14265,else__3992__auto__);
} else
{return null;
}
}
}
});
merchant.edn.writer.EdnWriter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3996__auto__,k__3997__auto__,G__14264){var self__ = this;
var this__3996__auto____$1 = this;var pred__14267 = cljs.core.keyword_identical_QMARK_;var expr__14268 = k__3997__auto__;if(cljs.core.truth_(pred__14267.call(null,new cljs.core.Keyword(null,"w","w",1013904361),expr__14268)))
{return (new merchant.edn.writer.EdnWriter(G__14264,self__.wm,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14267.call(null,new cljs.core.Keyword(null,"wm","wm",1013908040),expr__14268)))
{return (new merchant.edn.writer.EdnWriter(self__.w,G__14264,self__.__meta,self__.__extmap,null));
} else
{return (new merchant.edn.writer.EdnWriter(self__.w,self__.wm,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__3997__auto__,G__14264),null));
}
}
});
merchant.edn.writer.EdnWriter.prototype.merchant$common$IValueWriter$ = true;
merchant.edn.writer.EdnWriter.prototype.merchant$common$IValueWriter$write_list$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return merchant.edn.writer.write_sequential.call(null,"(",(function (p1__14261_SHARP_){return merchant.common.write.call(null,this$__$1,p1__14261_SHARP_);
})," ",")",o,self__.w);
});
merchant.edn.writer.EdnWriter.prototype.merchant$common$IValueWriter$write_nil$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return self__.w.append("nil");
});
merchant.edn.writer.EdnWriter.prototype.merchant$common$IValueWriter$write_set$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return merchant.edn.writer.write_sequential.call(null,"#{",(function (p1__14263_SHARP_){return merchant.common.write.call(null,this$__$1,p1__14263_SHARP_);
})," ","}",o,self__.w);
});
merchant.edn.writer.EdnWriter.prototype.merchant$common$IValueWriter$write_vector$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return merchant.edn.writer.write_sequential.call(null,"[",(function (p1__14262_SHARP_){return merchant.common.write.call(null,this$__$1,p1__14262_SHARP_);
})," ","]",o,self__.w);
});
merchant.edn.writer.EdnWriter.prototype.merchant$common$IValueWriter$write_tagged$arity$4 = (function (this$,tag,write_fn,o){var self__ = this;
var this$__$1 = this;self__.w.append("#");
self__.w.append(tag);
self__.w.append(" ");
return write_fn.call(null,this$__$1,o);
});
merchant.edn.writer.EdnWriter.prototype.merchant$common$IValueWriter$write_symbol$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return self__.w.append([cljs.core.str(o)].join(''));
});
merchant.edn.writer.EdnWriter.prototype.merchant$common$IValueWriter$write_keyword$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return self__.w.append([cljs.core.str(o)].join(''));
});
merchant.edn.writer.EdnWriter.prototype.merchant$common$IValueWriter$write$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return self__.wm.call(null,this$__$1,o);
});
merchant.edn.writer.EdnWriter.prototype.merchant$common$IValueWriter$write_string$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return self__.w.append(merchant.edn.writer.quote_string.call(null,o));
});
merchant.edn.writer.EdnWriter.prototype.merchant$common$IValueWriter$write_float$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return self__.w.append([cljs.core.str(o)].join(''));
});
merchant.edn.writer.EdnWriter.prototype.merchant$common$IValueWriter$write_map$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return merchant.edn.writer.write_sequential.call(null,"{",(function (e){merchant.common.write.call(null,this$__$1,cljs.core.key.call(null,e));
self__.w.append(" ");
return merchant.common.write.call(null,this$__$1,cljs.core.val.call(null,e));
}),", ","}",cljs.core.seq.call(null,o),self__.w);
});
merchant.edn.writer.EdnWriter.prototype.merchant$common$IValueWriter$write_character$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return null;
});
merchant.edn.writer.EdnWriter.prototype.merchant$common$IValueWriter$write_integer$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return self__.w.append([cljs.core.str(o)].join(''));
});
merchant.edn.writer.EdnWriter.prototype.merchant$common$IValueWriter$write_boolean$arity$2 = (function (this$,o){var self__ = this;
var this$__$1 = this;return self__.w.append([cljs.core.str(o)].join(''));
});
merchant.edn.writer.EdnWriter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4003__auto__,writer__4004__auto__,opts__4005__auto__){var self__ = this;
var this__4003__auto____$1 = this;var pr_pair__4006__auto__ = (function (keyval__4007__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4004__auto__,cljs.core.pr_writer,""," ","",opts__4005__auto__,keyval__4007__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__4004__auto__,pr_pair__4006__auto__,"#merchant.edn.writer.EdnWriter{",", ","}",opts__4005__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",1013904361),self__.w],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wm","wm",1013908040),self__.wm],null))], null),self__.__extmap));
});
merchant.edn.writer.EdnWriter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3994__auto__,entry__3995__auto__){var self__ = this;
var this__3994__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__3995__auto__))
{return cljs.core._assoc.call(null,this__3994__auto____$1,cljs.core._nth.call(null,entry__3995__auto__,0),cljs.core._nth.call(null,entry__3995__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__3994__auto____$1,entry__3995__auto__);
}
});
merchant.edn.writer.EdnWriter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4001__auto__){var self__ = this;
var this__4001__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",1013904361),self__.w],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wm","wm",1013908040),self__.wm],null))], null),self__.__extmap));
});
merchant.edn.writer.EdnWriter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3993__auto__){var self__ = this;
var this__3993__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
merchant.edn.writer.EdnWriter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3985__auto__,other__3986__auto__){var self__ = this;
var this__3985__auto____$1 = this;if(cljs.core.truth_((function (){var and__3391__auto__ = other__3986__auto__;if(cljs.core.truth_(and__3391__auto__))
{return ((this__3985__auto____$1.constructor === other__3986__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__3985__auto____$1,other__3986__auto__));
} else
{return and__3391__auto__;
}
})()))
{return true;
} else
{return false;
}
});
merchant.edn.writer.EdnWriter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3988__auto__,G__14264){var self__ = this;
var this__3988__auto____$1 = this;return (new merchant.edn.writer.EdnWriter(self__.w,self__.wm,G__14264,self__.__extmap,self__.__hash));
});
merchant.edn.writer.EdnWriter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__3983__auto__){var self__ = this;
var this__3983__auto____$1 = this;return (new merchant.edn.writer.EdnWriter(self__.w,self__.wm,self__.__meta,self__.__extmap,self__.__hash));
});
merchant.edn.writer.EdnWriter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3987__auto__){var self__ = this;
var this__3987__auto____$1 = this;return self__.__meta;
});
merchant.edn.writer.EdnWriter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3998__auto__,k__3999__auto__){var self__ = this;
var this__3998__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wm","wm",1013908040),null,new cljs.core.Keyword(null,"w","w",1013904361),null], null), null),k__3999__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__3998__auto____$1),self__.__meta),k__3999__auto__);
} else
{return (new merchant.edn.writer.EdnWriter(self__.w,self__.wm,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__3999__auto__)),null));
}
});
merchant.edn.writer.EdnWriter.cljs$lang$type = true;
merchant.edn.writer.EdnWriter.cljs$lang$ctorPrSeq = (function (this__4023__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"merchant.edn.writer/EdnWriter");
});
merchant.edn.writer.EdnWriter.cljs$lang$ctorPrWriter = (function (this__4023__auto__,writer__4024__auto__){return cljs.core._write.call(null,writer__4024__auto__,"merchant.edn.writer/EdnWriter");
});
merchant.edn.writer.__GT_EdnWriter = (function __GT_EdnWriter(w,wm){return (new merchant.edn.writer.EdnWriter(w,wm));
});
merchant.edn.writer.map__GT_EdnWriter = (function map__GT_EdnWriter(G__14266){return (new merchant.edn.writer.EdnWriter(new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(G__14266),new cljs.core.Keyword(null,"wm","wm",1013908040).cljs$core$IFn$_invoke$arity$1(G__14266),null,cljs.core.dissoc.call(null,G__14266,new cljs.core.Keyword(null,"w","w",1013904361),new cljs.core.Keyword(null,"wm","wm",1013908040))));
});
merchant.edn.writer.type_dispatch_map = (function type_dispatch_map(type_map,dispatch_map){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14272){var vec__14273 = p__14272;var k = cljs.core.nth.call(null,vec__14273,0,null);var v = cljs.core.nth.call(null,vec__14273,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,dispatch_map.call(null,v)], null);
}),type_map));
});
merchant.edn.writer.make_writer_fn = (function make_writer_fn(type_map,tag_map,default_fn){return (function (this$,o){var c = cljs.core.type.call(null,o);var temp__4090__auto__ = type_map.call(null,c);if(cljs.core.truth_(temp__4090__auto__))
{var writefn = temp__4090__auto__;return writefn.call(null,this$,o);
} else
{var temp__4090__auto____$1 = tag_map.call(null,c);if(cljs.core.truth_(temp__4090__auto____$1))
{var tlmap = temp__4090__auto____$1;return merchant.common.write_tagged.call(null,this$,new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(tlmap),new cljs.core.Keyword(null,"write-fn","write-fn",3462353128).cljs$core$IFn$_invoke$arity$1(tlmap),o);
} else
{return default_fn.call(null,this$,o);
}
}
});
});
merchant.edn.writer.edn_writer = (function edn_writer(jwriter,opts){var map__14275 = opts;var map__14275__$1 = ((cljs.core.seq_QMARK_.call(null,map__14275))?cljs.core.apply.call(null,cljs.core.hash_map,map__14275):map__14275);var default_fn = cljs.core.get.call(null,map__14275__$1,new cljs.core.Keyword(null,"default-fn","default-fn",1692507974),((function (map__14275,map__14275__$1){
return (function (this$,o){throw (new Error("No EDN mapping for type"));
});})(map__14275,map__14275__$1))
);var tag_map = cljs.core.get.call(null,map__14275__$1,new cljs.core.Keyword(null,"tag-map","tag-map",3758714907));var type_map = cljs.core.get.call(null,map__14275__$1,new cljs.core.Keyword(null,"type-map","type-map",4631392187));return (new merchant.edn.writer.EdnWriter(jwriter,merchant.edn.writer.make_writer_fn.call(null,merchant.edn.writer.type_dispatch_map.call(null,cljs.core.merge.call(null,merchant.common.default_type_map,type_map),merchant.common.default_dispatch_map),cljs.core.merge.call(null,merchant.common.default_tag_map,tag_map),default_fn)));
});
merchant.edn.writer.export_edn = (function() {
var export_edn = null;
var export_edn__1 = (function (x){return export_edn.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});
var export_edn__2 = (function (x,opts){var sw = (new goog.string.StringBuffer());var ew = merchant.edn.writer.edn_writer.call(null,sw,opts);merchant.common.write.call(null,ew,x);
return [cljs.core.str(sw)].join('');
});
export_edn = function(x,opts){
switch(arguments.length){
case 1:
return export_edn__1.call(this,x);
case 2:
return export_edn__2.call(this,x,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
export_edn.cljs$core$IFn$_invoke$arity$1 = export_edn__1;
export_edn.cljs$core$IFn$_invoke$arity$2 = export_edn__2;
return export_edn;
})()
;

//# sourceMappingURL=writer.js.map