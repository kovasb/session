// Compiled by ClojureScript 0.0-2197
goog.provide('yantra.datatypes');
goog.require('cljs.core');

/**
* @constructor
* @param {*} value
* @param {*} range
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.Slider = (function (value,range,__meta,__extmap){
this.value = value;
this.range = range;
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
yantra.datatypes.Slider.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4043__auto__){var self__ = this;
var this__4043__auto____$1 = this;var h__3873__auto__ = self__.__hash;if(!((h__3873__auto__ == null)))
{return h__3873__auto__;
} else
{var h__3873__auto____$1 = cljs.core.hash_imap.call(null,this__4043__auto____$1);self__.__hash = h__3873__auto____$1;
return h__3873__auto____$1;
}
});
yantra.datatypes.Slider.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4048__auto__,k__4049__auto__){var self__ = this;
var this__4048__auto____$1 = this;return cljs.core._lookup.call(null,this__4048__auto____$1,k__4049__auto__,null);
});
yantra.datatypes.Slider.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4050__auto__,k14444,else__4051__auto__){var self__ = this;
var this__4050__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14444,new cljs.core.Keyword(null,"value","value",1125876963)))
{return self__.value;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14444,new cljs.core.Keyword(null,"range","range",1122184367)))
{return self__.range;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14444,else__4051__auto__);
} else
{return null;
}
}
}
});
yantra.datatypes.Slider.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4055__auto__,k__4056__auto__,G__14443){var self__ = this;
var this__4055__auto____$1 = this;var pred__14446 = cljs.core.keyword_identical_QMARK_;var expr__14447 = k__4056__auto__;if(cljs.core.truth_(pred__14446.call(null,new cljs.core.Keyword(null,"value","value",1125876963),expr__14447)))
{return (new yantra.datatypes.Slider(G__14443,self__.range,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14446.call(null,new cljs.core.Keyword(null,"range","range",1122184367),expr__14447)))
{return (new yantra.datatypes.Slider(self__.value,G__14443,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.Slider(self__.value,self__.range,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4056__auto__,G__14443),null));
}
}
});
yantra.datatypes.Slider.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4062__auto__,writer__4063__auto__,opts__4064__auto__){var self__ = this;
var this__4062__auto____$1 = this;var pr_pair__4065__auto__ = ((function (this__4062__auto____$1){
return (function (keyval__4066__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,cljs.core.pr_writer,""," ","",opts__4064__auto__,keyval__4066__auto__);
});})(this__4062__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,pr_pair__4065__auto__,"#yantra.datatypes.Slider{",", ","}",opts__4064__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",1125876963),self__.value],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"range","range",1122184367),self__.range],null))], null),self__.__extmap));
});
yantra.datatypes.Slider.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4053__auto__,entry__4054__auto__){var self__ = this;
var this__4053__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4054__auto__))
{return cljs.core._assoc.call(null,this__4053__auto____$1,cljs.core._nth.call(null,entry__4054__auto__,0),cljs.core._nth.call(null,entry__4054__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4053__auto____$1,entry__4054__auto__);
}
});
yantra.datatypes.Slider.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4060__auto__){var self__ = this;
var this__4060__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",1125876963),self__.value],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"range","range",1122184367),self__.range],null))], null),self__.__extmap));
});
yantra.datatypes.Slider.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4052__auto__){var self__ = this;
var this__4052__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.Slider.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4044__auto__,other__4045__auto__){var self__ = this;
var this__4044__auto____$1 = this;if(cljs.core.truth_((function (){var and__3450__auto__ = other__4045__auto__;if(cljs.core.truth_(and__3450__auto__))
{return ((this__4044__auto____$1.constructor === other__4045__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4044__auto____$1,other__4045__auto__));
} else
{return and__3450__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.Slider.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4047__auto__,G__14443){var self__ = this;
var this__4047__auto____$1 = this;return (new yantra.datatypes.Slider(self__.value,self__.range,G__14443,self__.__extmap,self__.__hash));
});
yantra.datatypes.Slider.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4042__auto__){var self__ = this;
var this__4042__auto____$1 = this;return (new yantra.datatypes.Slider(self__.value,self__.range,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.Slider.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4046__auto__){var self__ = this;
var this__4046__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.Slider.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4057__auto__,k__4058__auto__){var self__ = this;
var this__4057__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"range","range",1122184367),null,new cljs.core.Keyword(null,"value","value",1125876963),null], null), null),k__4058__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4057__auto____$1),self__.__meta),k__4058__auto__);
} else
{return (new yantra.datatypes.Slider(self__.value,self__.range,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4058__auto__)),null));
}
});
yantra.datatypes.Slider.cljs$lang$type = true;
yantra.datatypes.Slider.cljs$lang$ctorPrSeq = (function (this__4082__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/Slider");
});
yantra.datatypes.Slider.cljs$lang$ctorPrWriter = (function (this__4082__auto__,writer__4083__auto__){return cljs.core._write.call(null,writer__4083__auto__,"yantra.datatypes/Slider");
});
yantra.datatypes.__GT_Slider = (function __GT_Slider(value,range){return (new yantra.datatypes.Slider(value,range));
});
yantra.datatypes.map__GT_Slider = (function map__GT_Slider(G__14445){return (new yantra.datatypes.Slider(new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__14445),new cljs.core.Keyword(null,"range","range",1122184367).cljs$core$IFn$_invoke$arity$1(G__14445),null,cljs.core.dissoc.call(null,G__14445,new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"range","range",1122184367))));
});

/**
* @constructor
* @param {*} contents
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.Column = (function (contents,__meta,__extmap){
this.contents = contents;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
yantra.datatypes.Column.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4043__auto__){var self__ = this;
var this__4043__auto____$1 = this;var h__3873__auto__ = self__.__hash;if(!((h__3873__auto__ == null)))
{return h__3873__auto__;
} else
{var h__3873__auto____$1 = cljs.core.hash_imap.call(null,this__4043__auto____$1);self__.__hash = h__3873__auto____$1;
return h__3873__auto____$1;
}
});
yantra.datatypes.Column.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4048__auto__,k__4049__auto__){var self__ = this;
var this__4048__auto____$1 = this;return cljs.core._lookup.call(null,this__4048__auto____$1,k__4049__auto__,null);
});
yantra.datatypes.Column.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4050__auto__,k14450,else__4051__auto__){var self__ = this;
var this__4050__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14450,new cljs.core.Keyword(null,"contents","contents",4741549708)))
{return self__.contents;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14450,else__4051__auto__);
} else
{return null;
}
}
});
yantra.datatypes.Column.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4055__auto__,k__4056__auto__,G__14449){var self__ = this;
var this__4055__auto____$1 = this;var pred__14452 = cljs.core.keyword_identical_QMARK_;var expr__14453 = k__4056__auto__;if(cljs.core.truth_(pred__14452.call(null,new cljs.core.Keyword(null,"contents","contents",4741549708),expr__14453)))
{return (new yantra.datatypes.Column(G__14449,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.Column(self__.contents,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4056__auto__,G__14449),null));
}
});
yantra.datatypes.Column.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4062__auto__,writer__4063__auto__,opts__4064__auto__){var self__ = this;
var this__4062__auto____$1 = this;var pr_pair__4065__auto__ = ((function (this__4062__auto____$1){
return (function (keyval__4066__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,cljs.core.pr_writer,""," ","",opts__4064__auto__,keyval__4066__auto__);
});})(this__4062__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,pr_pair__4065__auto__,"#yantra.datatypes.Column{",", ","}",opts__4064__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"contents","contents",4741549708),self__.contents],null))], null),self__.__extmap));
});
yantra.datatypes.Column.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4053__auto__,entry__4054__auto__){var self__ = this;
var this__4053__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4054__auto__))
{return cljs.core._assoc.call(null,this__4053__auto____$1,cljs.core._nth.call(null,entry__4054__auto__,0),cljs.core._nth.call(null,entry__4054__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4053__auto____$1,entry__4054__auto__);
}
});
yantra.datatypes.Column.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4060__auto__){var self__ = this;
var this__4060__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"contents","contents",4741549708),self__.contents],null))], null),self__.__extmap));
});
yantra.datatypes.Column.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4052__auto__){var self__ = this;
var this__4052__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.Column.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4044__auto__,other__4045__auto__){var self__ = this;
var this__4044__auto____$1 = this;if(cljs.core.truth_((function (){var and__3450__auto__ = other__4045__auto__;if(cljs.core.truth_(and__3450__auto__))
{return ((this__4044__auto____$1.constructor === other__4045__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4044__auto____$1,other__4045__auto__));
} else
{return and__3450__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.Column.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4047__auto__,G__14449){var self__ = this;
var this__4047__auto____$1 = this;return (new yantra.datatypes.Column(self__.contents,G__14449,self__.__extmap,self__.__hash));
});
yantra.datatypes.Column.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4042__auto__){var self__ = this;
var this__4042__auto____$1 = this;return (new yantra.datatypes.Column(self__.contents,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.Column.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4046__auto__){var self__ = this;
var this__4046__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.Column.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4057__auto__,k__4058__auto__){var self__ = this;
var this__4057__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",4741549708),null], null), null),k__4058__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4057__auto____$1),self__.__meta),k__4058__auto__);
} else
{return (new yantra.datatypes.Column(self__.contents,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4058__auto__)),null));
}
});
yantra.datatypes.Column.cljs$lang$type = true;
yantra.datatypes.Column.cljs$lang$ctorPrSeq = (function (this__4082__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/Column");
});
yantra.datatypes.Column.cljs$lang$ctorPrWriter = (function (this__4082__auto__,writer__4083__auto__){return cljs.core._write.call(null,writer__4083__auto__,"yantra.datatypes/Column");
});
yantra.datatypes.__GT_Column = (function __GT_Column(contents){return (new yantra.datatypes.Column(contents));
});
yantra.datatypes.map__GT_Column = (function map__GT_Column(G__14451){return (new yantra.datatypes.Column(new cljs.core.Keyword(null,"contents","contents",4741549708).cljs$core$IFn$_invoke$arity$1(G__14451),null,cljs.core.dissoc.call(null,G__14451,new cljs.core.Keyword(null,"contents","contents",4741549708))));
});

/**
* @constructor
* @param {*} contents
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.Graphics = (function (contents,__meta,__extmap){
this.contents = contents;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
yantra.datatypes.Graphics.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4043__auto__){var self__ = this;
var this__4043__auto____$1 = this;var h__3873__auto__ = self__.__hash;if(!((h__3873__auto__ == null)))
{return h__3873__auto__;
} else
{var h__3873__auto____$1 = cljs.core.hash_imap.call(null,this__4043__auto____$1);self__.__hash = h__3873__auto____$1;
return h__3873__auto____$1;
}
});
yantra.datatypes.Graphics.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4048__auto__,k__4049__auto__){var self__ = this;
var this__4048__auto____$1 = this;return cljs.core._lookup.call(null,this__4048__auto____$1,k__4049__auto__,null);
});
yantra.datatypes.Graphics.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4050__auto__,k14456,else__4051__auto__){var self__ = this;
var this__4050__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14456,new cljs.core.Keyword(null,"contents","contents",4741549708)))
{return self__.contents;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14456,else__4051__auto__);
} else
{return null;
}
}
});
yantra.datatypes.Graphics.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4055__auto__,k__4056__auto__,G__14455){var self__ = this;
var this__4055__auto____$1 = this;var pred__14458 = cljs.core.keyword_identical_QMARK_;var expr__14459 = k__4056__auto__;if(cljs.core.truth_(pred__14458.call(null,new cljs.core.Keyword(null,"contents","contents",4741549708),expr__14459)))
{return (new yantra.datatypes.Graphics(G__14455,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.Graphics(self__.contents,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4056__auto__,G__14455),null));
}
});
yantra.datatypes.Graphics.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4062__auto__,writer__4063__auto__,opts__4064__auto__){var self__ = this;
var this__4062__auto____$1 = this;var pr_pair__4065__auto__ = ((function (this__4062__auto____$1){
return (function (keyval__4066__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,cljs.core.pr_writer,""," ","",opts__4064__auto__,keyval__4066__auto__);
});})(this__4062__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,pr_pair__4065__auto__,"#yantra.datatypes.Graphics{",", ","}",opts__4064__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"contents","contents",4741549708),self__.contents],null))], null),self__.__extmap));
});
yantra.datatypes.Graphics.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4053__auto__,entry__4054__auto__){var self__ = this;
var this__4053__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4054__auto__))
{return cljs.core._assoc.call(null,this__4053__auto____$1,cljs.core._nth.call(null,entry__4054__auto__,0),cljs.core._nth.call(null,entry__4054__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4053__auto____$1,entry__4054__auto__);
}
});
yantra.datatypes.Graphics.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4060__auto__){var self__ = this;
var this__4060__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"contents","contents",4741549708),self__.contents],null))], null),self__.__extmap));
});
yantra.datatypes.Graphics.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4052__auto__){var self__ = this;
var this__4052__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.Graphics.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4044__auto__,other__4045__auto__){var self__ = this;
var this__4044__auto____$1 = this;if(cljs.core.truth_((function (){var and__3450__auto__ = other__4045__auto__;if(cljs.core.truth_(and__3450__auto__))
{return ((this__4044__auto____$1.constructor === other__4045__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4044__auto____$1,other__4045__auto__));
} else
{return and__3450__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.Graphics.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4047__auto__,G__14455){var self__ = this;
var this__4047__auto____$1 = this;return (new yantra.datatypes.Graphics(self__.contents,G__14455,self__.__extmap,self__.__hash));
});
yantra.datatypes.Graphics.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4042__auto__){var self__ = this;
var this__4042__auto____$1 = this;return (new yantra.datatypes.Graphics(self__.contents,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.Graphics.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4046__auto__){var self__ = this;
var this__4046__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.Graphics.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4057__auto__,k__4058__auto__){var self__ = this;
var this__4057__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contents","contents",4741549708),null], null), null),k__4058__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4057__auto____$1),self__.__meta),k__4058__auto__);
} else
{return (new yantra.datatypes.Graphics(self__.contents,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4058__auto__)),null));
}
});
yantra.datatypes.Graphics.cljs$lang$type = true;
yantra.datatypes.Graphics.cljs$lang$ctorPrSeq = (function (this__4082__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/Graphics");
});
yantra.datatypes.Graphics.cljs$lang$ctorPrWriter = (function (this__4082__auto__,writer__4083__auto__){return cljs.core._write.call(null,writer__4083__auto__,"yantra.datatypes/Graphics");
});
yantra.datatypes.__GT_Graphics = (function __GT_Graphics(contents){return (new yantra.datatypes.Graphics(contents));
});
yantra.datatypes.map__GT_Graphics = (function map__GT_Graphics(G__14457){return (new yantra.datatypes.Graphics(new cljs.core.Keyword(null,"contents","contents",4741549708).cljs$core$IFn$_invoke$arity$1(G__14457),null,cljs.core.dissoc.call(null,G__14457,new cljs.core.Keyword(null,"contents","contents",4741549708))));
});

/**
* @constructor
* @param {*} point
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.Point = (function (point,__meta,__extmap){
this.point = point;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
yantra.datatypes.Point.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4043__auto__){var self__ = this;
var this__4043__auto____$1 = this;var h__3873__auto__ = self__.__hash;if(!((h__3873__auto__ == null)))
{return h__3873__auto__;
} else
{var h__3873__auto____$1 = cljs.core.hash_imap.call(null,this__4043__auto____$1);self__.__hash = h__3873__auto____$1;
return h__3873__auto____$1;
}
});
yantra.datatypes.Point.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4048__auto__,k__4049__auto__){var self__ = this;
var this__4048__auto____$1 = this;return cljs.core._lookup.call(null,this__4048__auto____$1,k__4049__auto__,null);
});
yantra.datatypes.Point.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4050__auto__,k14462,else__4051__auto__){var self__ = this;
var this__4050__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14462,new cljs.core.Keyword(null,"point","point",1120749826)))
{return self__.point;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14462,else__4051__auto__);
} else
{return null;
}
}
});
yantra.datatypes.Point.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4055__auto__,k__4056__auto__,G__14461){var self__ = this;
var this__4055__auto____$1 = this;var pred__14464 = cljs.core.keyword_identical_QMARK_;var expr__14465 = k__4056__auto__;if(cljs.core.truth_(pred__14464.call(null,new cljs.core.Keyword(null,"point","point",1120749826),expr__14465)))
{return (new yantra.datatypes.Point(G__14461,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.Point(self__.point,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4056__auto__,G__14461),null));
}
});
yantra.datatypes.Point.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4062__auto__,writer__4063__auto__,opts__4064__auto__){var self__ = this;
var this__4062__auto____$1 = this;var pr_pair__4065__auto__ = ((function (this__4062__auto____$1){
return (function (keyval__4066__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,cljs.core.pr_writer,""," ","",opts__4064__auto__,keyval__4066__auto__);
});})(this__4062__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,pr_pair__4065__auto__,"#yantra.datatypes.Point{",", ","}",opts__4064__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"point","point",1120749826),self__.point],null))], null),self__.__extmap));
});
yantra.datatypes.Point.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4053__auto__,entry__4054__auto__){var self__ = this;
var this__4053__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4054__auto__))
{return cljs.core._assoc.call(null,this__4053__auto____$1,cljs.core._nth.call(null,entry__4054__auto__,0),cljs.core._nth.call(null,entry__4054__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4053__auto____$1,entry__4054__auto__);
}
});
yantra.datatypes.Point.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4060__auto__){var self__ = this;
var this__4060__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"point","point",1120749826),self__.point],null))], null),self__.__extmap));
});
yantra.datatypes.Point.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4052__auto__){var self__ = this;
var this__4052__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.Point.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4044__auto__,other__4045__auto__){var self__ = this;
var this__4044__auto____$1 = this;if(cljs.core.truth_((function (){var and__3450__auto__ = other__4045__auto__;if(cljs.core.truth_(and__3450__auto__))
{return ((this__4044__auto____$1.constructor === other__4045__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4044__auto____$1,other__4045__auto__));
} else
{return and__3450__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.Point.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4047__auto__,G__14461){var self__ = this;
var this__4047__auto____$1 = this;return (new yantra.datatypes.Point(self__.point,G__14461,self__.__extmap,self__.__hash));
});
yantra.datatypes.Point.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4042__auto__){var self__ = this;
var this__4042__auto____$1 = this;return (new yantra.datatypes.Point(self__.point,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.Point.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4046__auto__){var self__ = this;
var this__4046__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.Point.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4057__auto__,k__4058__auto__){var self__ = this;
var this__4057__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"point","point",1120749826),null], null), null),k__4058__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4057__auto____$1),self__.__meta),k__4058__auto__);
} else
{return (new yantra.datatypes.Point(self__.point,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4058__auto__)),null));
}
});
yantra.datatypes.Point.cljs$lang$type = true;
yantra.datatypes.Point.cljs$lang$ctorPrSeq = (function (this__4082__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/Point");
});
yantra.datatypes.Point.cljs$lang$ctorPrWriter = (function (this__4082__auto__,writer__4083__auto__){return cljs.core._write.call(null,writer__4083__auto__,"yantra.datatypes/Point");
});
yantra.datatypes.__GT_Point = (function __GT_Point(point){return (new yantra.datatypes.Point(point));
});
yantra.datatypes.map__GT_Point = (function map__GT_Point(G__14463){return (new yantra.datatypes.Point(new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(G__14463),null,cljs.core.dissoc.call(null,G__14463,new cljs.core.Keyword(null,"point","point",1120749826))));
});

/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.Line = (function (points,__meta,__extmap){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
yantra.datatypes.Line.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4043__auto__){var self__ = this;
var this__4043__auto____$1 = this;var h__3873__auto__ = self__.__hash;if(!((h__3873__auto__ == null)))
{return h__3873__auto__;
} else
{var h__3873__auto____$1 = cljs.core.hash_imap.call(null,this__4043__auto____$1);self__.__hash = h__3873__auto____$1;
return h__3873__auto____$1;
}
});
yantra.datatypes.Line.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4048__auto__,k__4049__auto__){var self__ = this;
var this__4048__auto____$1 = this;return cljs.core._lookup.call(null,this__4048__auto____$1,k__4049__auto__,null);
});
yantra.datatypes.Line.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4050__auto__,k14468,else__4051__auto__){var self__ = this;
var this__4050__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14468,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14468,else__4051__auto__);
} else
{return null;
}
}
});
yantra.datatypes.Line.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4055__auto__,k__4056__auto__,G__14467){var self__ = this;
var this__4055__auto____$1 = this;var pred__14470 = cljs.core.keyword_identical_QMARK_;var expr__14471 = k__4056__auto__;if(cljs.core.truth_(pred__14470.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__14471)))
{return (new yantra.datatypes.Line(G__14467,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.Line(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4056__auto__,G__14467),null));
}
});
yantra.datatypes.Line.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4062__auto__,writer__4063__auto__,opts__4064__auto__){var self__ = this;
var this__4062__auto____$1 = this;var pr_pair__4065__auto__ = ((function (this__4062__auto____$1){
return (function (keyval__4066__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,cljs.core.pr_writer,""," ","",opts__4064__auto__,keyval__4066__auto__);
});})(this__4062__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,pr_pair__4065__auto__,"#yantra.datatypes.Line{",", ","}",opts__4064__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
yantra.datatypes.Line.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4053__auto__,entry__4054__auto__){var self__ = this;
var this__4053__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4054__auto__))
{return cljs.core._assoc.call(null,this__4053__auto____$1,cljs.core._nth.call(null,entry__4054__auto__,0),cljs.core._nth.call(null,entry__4054__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4053__auto____$1,entry__4054__auto__);
}
});
yantra.datatypes.Line.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4060__auto__){var self__ = this;
var this__4060__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
yantra.datatypes.Line.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4052__auto__){var self__ = this;
var this__4052__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.Line.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4044__auto__,other__4045__auto__){var self__ = this;
var this__4044__auto____$1 = this;if(cljs.core.truth_((function (){var and__3450__auto__ = other__4045__auto__;if(cljs.core.truth_(and__3450__auto__))
{return ((this__4044__auto____$1.constructor === other__4045__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4044__auto____$1,other__4045__auto__));
} else
{return and__3450__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.Line.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4047__auto__,G__14467){var self__ = this;
var this__4047__auto____$1 = this;return (new yantra.datatypes.Line(self__.points,G__14467,self__.__extmap,self__.__hash));
});
yantra.datatypes.Line.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4042__auto__){var self__ = this;
var this__4042__auto____$1 = this;return (new yantra.datatypes.Line(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.Line.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4046__auto__){var self__ = this;
var this__4046__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.Line.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4057__auto__,k__4058__auto__){var self__ = this;
var this__4057__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__4058__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4057__auto____$1),self__.__meta),k__4058__auto__);
} else
{return (new yantra.datatypes.Line(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4058__auto__)),null));
}
});
yantra.datatypes.Line.cljs$lang$type = true;
yantra.datatypes.Line.cljs$lang$ctorPrSeq = (function (this__4082__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/Line");
});
yantra.datatypes.Line.cljs$lang$ctorPrWriter = (function (this__4082__auto__,writer__4083__auto__){return cljs.core._write.call(null,writer__4083__auto__,"yantra.datatypes/Line");
});
yantra.datatypes.__GT_Line = (function __GT_Line(points){return (new yantra.datatypes.Line(points));
});
yantra.datatypes.map__GT_Line = (function map__GT_Line(G__14469){return (new yantra.datatypes.Line(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__14469),null,cljs.core.dissoc.call(null,G__14469,new cljs.core.Keyword(null,"points","points",4326117461))));
});

/**
* @constructor
* @param {*} point
* @param {*} radius
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.Disk = (function (point,radius,__meta,__extmap){
this.point = point;
this.radius = radius;
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
yantra.datatypes.Disk.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4043__auto__){var self__ = this;
var this__4043__auto____$1 = this;var h__3873__auto__ = self__.__hash;if(!((h__3873__auto__ == null)))
{return h__3873__auto__;
} else
{var h__3873__auto____$1 = cljs.core.hash_imap.call(null,this__4043__auto____$1);self__.__hash = h__3873__auto____$1;
return h__3873__auto____$1;
}
});
yantra.datatypes.Disk.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4048__auto__,k__4049__auto__){var self__ = this;
var this__4048__auto____$1 = this;return cljs.core._lookup.call(null,this__4048__auto____$1,k__4049__auto__,null);
});
yantra.datatypes.Disk.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4050__auto__,k14474,else__4051__auto__){var self__ = this;
var this__4050__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14474,new cljs.core.Keyword(null,"point","point",1120749826)))
{return self__.point;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14474,new cljs.core.Keyword(null,"radius","radius",4370292740)))
{return self__.radius;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14474,else__4051__auto__);
} else
{return null;
}
}
}
});
yantra.datatypes.Disk.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4055__auto__,k__4056__auto__,G__14473){var self__ = this;
var this__4055__auto____$1 = this;var pred__14476 = cljs.core.keyword_identical_QMARK_;var expr__14477 = k__4056__auto__;if(cljs.core.truth_(pred__14476.call(null,new cljs.core.Keyword(null,"point","point",1120749826),expr__14477)))
{return (new yantra.datatypes.Disk(G__14473,self__.radius,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14476.call(null,new cljs.core.Keyword(null,"radius","radius",4370292740),expr__14477)))
{return (new yantra.datatypes.Disk(self__.point,G__14473,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.Disk(self__.point,self__.radius,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4056__auto__,G__14473),null));
}
}
});
yantra.datatypes.Disk.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4062__auto__,writer__4063__auto__,opts__4064__auto__){var self__ = this;
var this__4062__auto____$1 = this;var pr_pair__4065__auto__ = ((function (this__4062__auto____$1){
return (function (keyval__4066__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,cljs.core.pr_writer,""," ","",opts__4064__auto__,keyval__4066__auto__);
});})(this__4062__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,pr_pair__4065__auto__,"#yantra.datatypes.Disk{",", ","}",opts__4064__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"point","point",1120749826),self__.point],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"radius","radius",4370292740),self__.radius],null))], null),self__.__extmap));
});
yantra.datatypes.Disk.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4053__auto__,entry__4054__auto__){var self__ = this;
var this__4053__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4054__auto__))
{return cljs.core._assoc.call(null,this__4053__auto____$1,cljs.core._nth.call(null,entry__4054__auto__,0),cljs.core._nth.call(null,entry__4054__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4053__auto____$1,entry__4054__auto__);
}
});
yantra.datatypes.Disk.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4060__auto__){var self__ = this;
var this__4060__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"point","point",1120749826),self__.point],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"radius","radius",4370292740),self__.radius],null))], null),self__.__extmap));
});
yantra.datatypes.Disk.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4052__auto__){var self__ = this;
var this__4052__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.Disk.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4044__auto__,other__4045__auto__){var self__ = this;
var this__4044__auto____$1 = this;if(cljs.core.truth_((function (){var and__3450__auto__ = other__4045__auto__;if(cljs.core.truth_(and__3450__auto__))
{return ((this__4044__auto____$1.constructor === other__4045__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4044__auto____$1,other__4045__auto__));
} else
{return and__3450__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.Disk.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4047__auto__,G__14473){var self__ = this;
var this__4047__auto____$1 = this;return (new yantra.datatypes.Disk(self__.point,self__.radius,G__14473,self__.__extmap,self__.__hash));
});
yantra.datatypes.Disk.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4042__auto__){var self__ = this;
var this__4042__auto____$1 = this;return (new yantra.datatypes.Disk(self__.point,self__.radius,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.Disk.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4046__auto__){var self__ = this;
var this__4046__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.Disk.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4057__auto__,k__4058__auto__){var self__ = this;
var this__4057__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"point","point",1120749826),null,new cljs.core.Keyword(null,"radius","radius",4370292740),null], null), null),k__4058__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4057__auto____$1),self__.__meta),k__4058__auto__);
} else
{return (new yantra.datatypes.Disk(self__.point,self__.radius,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4058__auto__)),null));
}
});
yantra.datatypes.Disk.cljs$lang$type = true;
yantra.datatypes.Disk.cljs$lang$ctorPrSeq = (function (this__4082__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/Disk");
});
yantra.datatypes.Disk.cljs$lang$ctorPrWriter = (function (this__4082__auto__,writer__4083__auto__){return cljs.core._write.call(null,writer__4083__auto__,"yantra.datatypes/Disk");
});
yantra.datatypes.__GT_Disk = (function __GT_Disk(point,radius){return (new yantra.datatypes.Disk(point,radius));
});
yantra.datatypes.map__GT_Disk = (function map__GT_Disk(G__14475){return (new yantra.datatypes.Disk(new cljs.core.Keyword(null,"point","point",1120749826).cljs$core$IFn$_invoke$arity$1(G__14475),new cljs.core.Keyword(null,"radius","radius",4370292740).cljs$core$IFn$_invoke$arity$1(G__14475),null,cljs.core.dissoc.call(null,G__14475,new cljs.core.Keyword(null,"point","point",1120749826),new cljs.core.Keyword(null,"radius","radius",4370292740))));
});

/**
* @constructor
* @param {*} p1
* @param {*} p2
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.Rectangle = (function (p1,p2,__meta,__extmap){
this.p1 = p1;
this.p2 = p2;
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
yantra.datatypes.Rectangle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4043__auto__){var self__ = this;
var this__4043__auto____$1 = this;var h__3873__auto__ = self__.__hash;if(!((h__3873__auto__ == null)))
{return h__3873__auto__;
} else
{var h__3873__auto____$1 = cljs.core.hash_imap.call(null,this__4043__auto____$1);self__.__hash = h__3873__auto____$1;
return h__3873__auto____$1;
}
});
yantra.datatypes.Rectangle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4048__auto__,k__4049__auto__){var self__ = this;
var this__4048__auto____$1 = this;return cljs.core._lookup.call(null,this__4048__auto____$1,k__4049__auto__,null);
});
yantra.datatypes.Rectangle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4050__auto__,k14480,else__4051__auto__){var self__ = this;
var this__4050__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14480,new cljs.core.Keyword(null,"p1","p1",1013907763)))
{return self__.p1;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14480,new cljs.core.Keyword(null,"p2","p2",1013907764)))
{return self__.p2;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14480,else__4051__auto__);
} else
{return null;
}
}
}
});
yantra.datatypes.Rectangle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4055__auto__,k__4056__auto__,G__14479){var self__ = this;
var this__4055__auto____$1 = this;var pred__14482 = cljs.core.keyword_identical_QMARK_;var expr__14483 = k__4056__auto__;if(cljs.core.truth_(pred__14482.call(null,new cljs.core.Keyword(null,"p1","p1",1013907763),expr__14483)))
{return (new yantra.datatypes.Rectangle(G__14479,self__.p2,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14482.call(null,new cljs.core.Keyword(null,"p2","p2",1013907764),expr__14483)))
{return (new yantra.datatypes.Rectangle(self__.p1,G__14479,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.Rectangle(self__.p1,self__.p2,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4056__auto__,G__14479),null));
}
}
});
yantra.datatypes.Rectangle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4062__auto__,writer__4063__auto__,opts__4064__auto__){var self__ = this;
var this__4062__auto____$1 = this;var pr_pair__4065__auto__ = ((function (this__4062__auto____$1){
return (function (keyval__4066__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,cljs.core.pr_writer,""," ","",opts__4064__auto__,keyval__4066__auto__);
});})(this__4062__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,pr_pair__4065__auto__,"#yantra.datatypes.Rectangle{",", ","}",opts__4064__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p1","p1",1013907763),self__.p1],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p2","p2",1013907764),self__.p2],null))], null),self__.__extmap));
});
yantra.datatypes.Rectangle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4053__auto__,entry__4054__auto__){var self__ = this;
var this__4053__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4054__auto__))
{return cljs.core._assoc.call(null,this__4053__auto____$1,cljs.core._nth.call(null,entry__4054__auto__,0),cljs.core._nth.call(null,entry__4054__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4053__auto____$1,entry__4054__auto__);
}
});
yantra.datatypes.Rectangle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4060__auto__){var self__ = this;
var this__4060__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p1","p1",1013907763),self__.p1],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p2","p2",1013907764),self__.p2],null))], null),self__.__extmap));
});
yantra.datatypes.Rectangle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4052__auto__){var self__ = this;
var this__4052__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.Rectangle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4044__auto__,other__4045__auto__){var self__ = this;
var this__4044__auto____$1 = this;if(cljs.core.truth_((function (){var and__3450__auto__ = other__4045__auto__;if(cljs.core.truth_(and__3450__auto__))
{return ((this__4044__auto____$1.constructor === other__4045__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4044__auto____$1,other__4045__auto__));
} else
{return and__3450__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.Rectangle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4047__auto__,G__14479){var self__ = this;
var this__4047__auto____$1 = this;return (new yantra.datatypes.Rectangle(self__.p1,self__.p2,G__14479,self__.__extmap,self__.__hash));
});
yantra.datatypes.Rectangle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4042__auto__){var self__ = this;
var this__4042__auto____$1 = this;return (new yantra.datatypes.Rectangle(self__.p1,self__.p2,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.Rectangle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4046__auto__){var self__ = this;
var this__4046__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.Rectangle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4057__auto__,k__4058__auto__){var self__ = this;
var this__4057__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p1","p1",1013907763),null,new cljs.core.Keyword(null,"p2","p2",1013907764),null], null), null),k__4058__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4057__auto____$1),self__.__meta),k__4058__auto__);
} else
{return (new yantra.datatypes.Rectangle(self__.p1,self__.p2,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4058__auto__)),null));
}
});
yantra.datatypes.Rectangle.cljs$lang$type = true;
yantra.datatypes.Rectangle.cljs$lang$ctorPrSeq = (function (this__4082__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/Rectangle");
});
yantra.datatypes.Rectangle.cljs$lang$ctorPrWriter = (function (this__4082__auto__,writer__4083__auto__){return cljs.core._write.call(null,writer__4083__auto__,"yantra.datatypes/Rectangle");
});
yantra.datatypes.__GT_Rectangle = (function __GT_Rectangle(p1,p2){return (new yantra.datatypes.Rectangle(p1,p2));
});
yantra.datatypes.map__GT_Rectangle = (function map__GT_Rectangle(G__14481){return (new yantra.datatypes.Rectangle(new cljs.core.Keyword(null,"p1","p1",1013907763).cljs$core$IFn$_invoke$arity$1(G__14481),new cljs.core.Keyword(null,"p2","p2",1013907764).cljs$core$IFn$_invoke$arity$1(G__14481),null,cljs.core.dissoc.call(null,G__14481,new cljs.core.Keyword(null,"p1","p1",1013907763),new cljs.core.Keyword(null,"p2","p2",1013907764))));
});

/**
* @constructor
* @param {*} style
* @param {*} prims
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.Style = (function (style,prims,__meta,__extmap){
this.style = style;
this.prims = prims;
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
yantra.datatypes.Style.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4043__auto__){var self__ = this;
var this__4043__auto____$1 = this;var h__3873__auto__ = self__.__hash;if(!((h__3873__auto__ == null)))
{return h__3873__auto__;
} else
{var h__3873__auto____$1 = cljs.core.hash_imap.call(null,this__4043__auto____$1);self__.__hash = h__3873__auto____$1;
return h__3873__auto____$1;
}
});
yantra.datatypes.Style.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4048__auto__,k__4049__auto__){var self__ = this;
var this__4048__auto____$1 = this;return cljs.core._lookup.call(null,this__4048__auto____$1,k__4049__auto__,null);
});
yantra.datatypes.Style.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4050__auto__,k14486,else__4051__auto__){var self__ = this;
var this__4050__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14486,new cljs.core.Keyword(null,"style","style",1123684643)))
{return self__.style;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14486,new cljs.core.Keyword(null,"prims","prims",1120839167)))
{return self__.prims;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14486,else__4051__auto__);
} else
{return null;
}
}
}
});
yantra.datatypes.Style.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4055__auto__,k__4056__auto__,G__14485){var self__ = this;
var this__4055__auto____$1 = this;var pred__14488 = cljs.core.keyword_identical_QMARK_;var expr__14489 = k__4056__auto__;if(cljs.core.truth_(pred__14488.call(null,new cljs.core.Keyword(null,"style","style",1123684643),expr__14489)))
{return (new yantra.datatypes.Style(G__14485,self__.prims,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14488.call(null,new cljs.core.Keyword(null,"prims","prims",1120839167),expr__14489)))
{return (new yantra.datatypes.Style(self__.style,G__14485,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.Style(self__.style,self__.prims,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4056__auto__,G__14485),null));
}
}
});
yantra.datatypes.Style.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4062__auto__,writer__4063__auto__,opts__4064__auto__){var self__ = this;
var this__4062__auto____$1 = this;var pr_pair__4065__auto__ = ((function (this__4062__auto____$1){
return (function (keyval__4066__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,cljs.core.pr_writer,""," ","",opts__4064__auto__,keyval__4066__auto__);
});})(this__4062__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,pr_pair__4065__auto__,"#yantra.datatypes.Style{",", ","}",opts__4064__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",1123684643),self__.style],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prims","prims",1120839167),self__.prims],null))], null),self__.__extmap));
});
yantra.datatypes.Style.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4053__auto__,entry__4054__auto__){var self__ = this;
var this__4053__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4054__auto__))
{return cljs.core._assoc.call(null,this__4053__auto____$1,cljs.core._nth.call(null,entry__4054__auto__,0),cljs.core._nth.call(null,entry__4054__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4053__auto____$1,entry__4054__auto__);
}
});
yantra.datatypes.Style.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4060__auto__){var self__ = this;
var this__4060__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",1123684643),self__.style],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prims","prims",1120839167),self__.prims],null))], null),self__.__extmap));
});
yantra.datatypes.Style.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4052__auto__){var self__ = this;
var this__4052__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.Style.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4044__auto__,other__4045__auto__){var self__ = this;
var this__4044__auto____$1 = this;if(cljs.core.truth_((function (){var and__3450__auto__ = other__4045__auto__;if(cljs.core.truth_(and__3450__auto__))
{return ((this__4044__auto____$1.constructor === other__4045__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4044__auto____$1,other__4045__auto__));
} else
{return and__3450__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.Style.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4047__auto__,G__14485){var self__ = this;
var this__4047__auto____$1 = this;return (new yantra.datatypes.Style(self__.style,self__.prims,G__14485,self__.__extmap,self__.__hash));
});
yantra.datatypes.Style.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4042__auto__){var self__ = this;
var this__4042__auto____$1 = this;return (new yantra.datatypes.Style(self__.style,self__.prims,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.Style.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4046__auto__){var self__ = this;
var this__4046__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.Style.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4057__auto__,k__4058__auto__){var self__ = this;
var this__4057__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prims","prims",1120839167),null,new cljs.core.Keyword(null,"style","style",1123684643),null], null), null),k__4058__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4057__auto____$1),self__.__meta),k__4058__auto__);
} else
{return (new yantra.datatypes.Style(self__.style,self__.prims,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4058__auto__)),null));
}
});
yantra.datatypes.Style.cljs$lang$type = true;
yantra.datatypes.Style.cljs$lang$ctorPrSeq = (function (this__4082__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/Style");
});
yantra.datatypes.Style.cljs$lang$ctorPrWriter = (function (this__4082__auto__,writer__4083__auto__){return cljs.core._write.call(null,writer__4083__auto__,"yantra.datatypes/Style");
});
yantra.datatypes.__GT_Style = (function __GT_Style(style,prims){return (new yantra.datatypes.Style(style,prims));
});
yantra.datatypes.map__GT_Style = (function map__GT_Style(G__14487){return (new yantra.datatypes.Style(new cljs.core.Keyword(null,"style","style",1123684643).cljs$core$IFn$_invoke$arity$1(G__14487),new cljs.core.Keyword(null,"prims","prims",1120839167).cljs$core$IFn$_invoke$arity$1(G__14487),null,cljs.core.dissoc.call(null,G__14487,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.Keyword(null,"prims","prims",1120839167))));
});

/**
* @constructor
* @param {*} data
* @param {*} opts
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.ListLinePlot = (function (data,opts,__meta,__extmap){
this.data = data;
this.opts = opts;
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
yantra.datatypes.ListLinePlot.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4043__auto__){var self__ = this;
var this__4043__auto____$1 = this;var h__3873__auto__ = self__.__hash;if(!((h__3873__auto__ == null)))
{return h__3873__auto__;
} else
{var h__3873__auto____$1 = cljs.core.hash_imap.call(null,this__4043__auto____$1);self__.__hash = h__3873__auto____$1;
return h__3873__auto____$1;
}
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4048__auto__,k__4049__auto__){var self__ = this;
var this__4048__auto____$1 = this;return cljs.core._lookup.call(null,this__4048__auto____$1,k__4049__auto__,null);
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4050__auto__,k14492,else__4051__auto__){var self__ = this;
var this__4050__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14492,new cljs.core.Keyword(null,"data","data",1016980252)))
{return self__.data;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14492,new cljs.core.Keyword(null,"opts","opts",1017322386)))
{return self__.opts;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14492,else__4051__auto__);
} else
{return null;
}
}
}
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4055__auto__,k__4056__auto__,G__14491){var self__ = this;
var this__4055__auto____$1 = this;var pred__14494 = cljs.core.keyword_identical_QMARK_;var expr__14495 = k__4056__auto__;if(cljs.core.truth_(pred__14494.call(null,new cljs.core.Keyword(null,"data","data",1016980252),expr__14495)))
{return (new yantra.datatypes.ListLinePlot(G__14491,self__.opts,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14494.call(null,new cljs.core.Keyword(null,"opts","opts",1017322386),expr__14495)))
{return (new yantra.datatypes.ListLinePlot(self__.data,G__14491,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.ListLinePlot(self__.data,self__.opts,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4056__auto__,G__14491),null));
}
}
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4062__auto__,writer__4063__auto__,opts__4064__auto__){var self__ = this;
var this__4062__auto____$1 = this;var pr_pair__4065__auto__ = ((function (this__4062__auto____$1){
return (function (keyval__4066__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,cljs.core.pr_writer,""," ","",opts__4064__auto__,keyval__4066__auto__);
});})(this__4062__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,pr_pair__4065__auto__,"#yantra.datatypes.ListLinePlot{",", ","}",opts__4064__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",1016980252),self__.data],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts],null))], null),self__.__extmap));
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4053__auto__,entry__4054__auto__){var self__ = this;
var this__4053__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4054__auto__))
{return cljs.core._assoc.call(null,this__4053__auto____$1,cljs.core._nth.call(null,entry__4054__auto__,0),cljs.core._nth.call(null,entry__4054__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4053__auto____$1,entry__4054__auto__);
}
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4060__auto__){var self__ = this;
var this__4060__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",1016980252),self__.data],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts],null))], null),self__.__extmap));
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4052__auto__){var self__ = this;
var this__4052__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4044__auto__,other__4045__auto__){var self__ = this;
var this__4044__auto____$1 = this;if(cljs.core.truth_((function (){var and__3450__auto__ = other__4045__auto__;if(cljs.core.truth_(and__3450__auto__))
{return ((this__4044__auto____$1.constructor === other__4045__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4044__auto____$1,other__4045__auto__));
} else
{return and__3450__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4047__auto__,G__14491){var self__ = this;
var this__4047__auto____$1 = this;return (new yantra.datatypes.ListLinePlot(self__.data,self__.opts,G__14491,self__.__extmap,self__.__hash));
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4042__auto__){var self__ = this;
var this__4042__auto____$1 = this;return (new yantra.datatypes.ListLinePlot(self__.data,self__.opts,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4046__auto__){var self__ = this;
var this__4046__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.ListLinePlot.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4057__auto__,k__4058__auto__){var self__ = this;
var this__4057__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",1016980252),null,new cljs.core.Keyword(null,"opts","opts",1017322386),null], null), null),k__4058__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4057__auto____$1),self__.__meta),k__4058__auto__);
} else
{return (new yantra.datatypes.ListLinePlot(self__.data,self__.opts,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4058__auto__)),null));
}
});
yantra.datatypes.ListLinePlot.cljs$lang$type = true;
yantra.datatypes.ListLinePlot.cljs$lang$ctorPrSeq = (function (this__4082__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/ListLinePlot");
});
yantra.datatypes.ListLinePlot.cljs$lang$ctorPrWriter = (function (this__4082__auto__,writer__4083__auto__){return cljs.core._write.call(null,writer__4083__auto__,"yantra.datatypes/ListLinePlot");
});
yantra.datatypes.__GT_ListLinePlot = (function __GT_ListLinePlot(data,opts){return (new yantra.datatypes.ListLinePlot(data,opts));
});
yantra.datatypes.map__GT_ListLinePlot = (function map__GT_ListLinePlot(G__14493){return (new yantra.datatypes.ListLinePlot(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(G__14493),new cljs.core.Keyword(null,"opts","opts",1017322386).cljs$core$IFn$_invoke$arity$1(G__14493),null,cljs.core.dissoc.call(null,G__14493,new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"opts","opts",1017322386))));
});

/**
* @constructor
* @param {*} data
* @param {*} opts
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.BarChart = (function (data,opts,__meta,__extmap){
this.data = data;
this.opts = opts;
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
yantra.datatypes.BarChart.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4043__auto__){var self__ = this;
var this__4043__auto____$1 = this;var h__3873__auto__ = self__.__hash;if(!((h__3873__auto__ == null)))
{return h__3873__auto__;
} else
{var h__3873__auto____$1 = cljs.core.hash_imap.call(null,this__4043__auto____$1);self__.__hash = h__3873__auto____$1;
return h__3873__auto____$1;
}
});
yantra.datatypes.BarChart.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4048__auto__,k__4049__auto__){var self__ = this;
var this__4048__auto____$1 = this;return cljs.core._lookup.call(null,this__4048__auto____$1,k__4049__auto__,null);
});
yantra.datatypes.BarChart.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4050__auto__,k14498,else__4051__auto__){var self__ = this;
var this__4050__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14498,new cljs.core.Keyword(null,"data","data",1016980252)))
{return self__.data;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14498,new cljs.core.Keyword(null,"opts","opts",1017322386)))
{return self__.opts;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14498,else__4051__auto__);
} else
{return null;
}
}
}
});
yantra.datatypes.BarChart.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4055__auto__,k__4056__auto__,G__14497){var self__ = this;
var this__4055__auto____$1 = this;var pred__14500 = cljs.core.keyword_identical_QMARK_;var expr__14501 = k__4056__auto__;if(cljs.core.truth_(pred__14500.call(null,new cljs.core.Keyword(null,"data","data",1016980252),expr__14501)))
{return (new yantra.datatypes.BarChart(G__14497,self__.opts,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14500.call(null,new cljs.core.Keyword(null,"opts","opts",1017322386),expr__14501)))
{return (new yantra.datatypes.BarChart(self__.data,G__14497,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.BarChart(self__.data,self__.opts,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4056__auto__,G__14497),null));
}
}
});
yantra.datatypes.BarChart.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4062__auto__,writer__4063__auto__,opts__4064__auto__){var self__ = this;
var this__4062__auto____$1 = this;var pr_pair__4065__auto__ = ((function (this__4062__auto____$1){
return (function (keyval__4066__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,cljs.core.pr_writer,""," ","",opts__4064__auto__,keyval__4066__auto__);
});})(this__4062__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,pr_pair__4065__auto__,"#yantra.datatypes.BarChart{",", ","}",opts__4064__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",1016980252),self__.data],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts],null))], null),self__.__extmap));
});
yantra.datatypes.BarChart.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4053__auto__,entry__4054__auto__){var self__ = this;
var this__4053__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4054__auto__))
{return cljs.core._assoc.call(null,this__4053__auto____$1,cljs.core._nth.call(null,entry__4054__auto__,0),cljs.core._nth.call(null,entry__4054__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4053__auto____$1,entry__4054__auto__);
}
});
yantra.datatypes.BarChart.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4060__auto__){var self__ = this;
var this__4060__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",1016980252),self__.data],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts],null))], null),self__.__extmap));
});
yantra.datatypes.BarChart.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4052__auto__){var self__ = this;
var this__4052__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.BarChart.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4044__auto__,other__4045__auto__){var self__ = this;
var this__4044__auto____$1 = this;if(cljs.core.truth_((function (){var and__3450__auto__ = other__4045__auto__;if(cljs.core.truth_(and__3450__auto__))
{return ((this__4044__auto____$1.constructor === other__4045__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4044__auto____$1,other__4045__auto__));
} else
{return and__3450__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.BarChart.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4047__auto__,G__14497){var self__ = this;
var this__4047__auto____$1 = this;return (new yantra.datatypes.BarChart(self__.data,self__.opts,G__14497,self__.__extmap,self__.__hash));
});
yantra.datatypes.BarChart.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4042__auto__){var self__ = this;
var this__4042__auto____$1 = this;return (new yantra.datatypes.BarChart(self__.data,self__.opts,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.BarChart.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4046__auto__){var self__ = this;
var this__4046__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.BarChart.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4057__auto__,k__4058__auto__){var self__ = this;
var this__4057__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",1016980252),null,new cljs.core.Keyword(null,"opts","opts",1017322386),null], null), null),k__4058__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4057__auto____$1),self__.__meta),k__4058__auto__);
} else
{return (new yantra.datatypes.BarChart(self__.data,self__.opts,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4058__auto__)),null));
}
});
yantra.datatypes.BarChart.cljs$lang$type = true;
yantra.datatypes.BarChart.cljs$lang$ctorPrSeq = (function (this__4082__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/BarChart");
});
yantra.datatypes.BarChart.cljs$lang$ctorPrWriter = (function (this__4082__auto__,writer__4083__auto__){return cljs.core._write.call(null,writer__4083__auto__,"yantra.datatypes/BarChart");
});
yantra.datatypes.__GT_BarChart = (function __GT_BarChart(data,opts){return (new yantra.datatypes.BarChart(data,opts));
});
yantra.datatypes.map__GT_BarChart = (function map__GT_BarChart(G__14499){return (new yantra.datatypes.BarChart(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(G__14499),new cljs.core.Keyword(null,"opts","opts",1017322386).cljs$core$IFn$_invoke$arity$1(G__14499),null,cljs.core.dissoc.call(null,G__14499,new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"opts","opts",1017322386))));
});

/**
* @constructor
* @param {*} tag
* @param {*} attributes
* @param {*} children
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
yantra.datatypes.HTMLElement = (function (tag,attributes,children,__meta,__extmap){
this.tag = tag;
this.attributes = attributes;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
yantra.datatypes.HTMLElement.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4043__auto__){var self__ = this;
var this__4043__auto____$1 = this;var h__3873__auto__ = self__.__hash;if(!((h__3873__auto__ == null)))
{return h__3873__auto__;
} else
{var h__3873__auto____$1 = cljs.core.hash_imap.call(null,this__4043__auto____$1);self__.__hash = h__3873__auto____$1;
return h__3873__auto____$1;
}
});
yantra.datatypes.HTMLElement.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4048__auto__,k__4049__auto__){var self__ = this;
var this__4048__auto____$1 = this;return cljs.core._lookup.call(null,this__4048__auto____$1,k__4049__auto__,null);
});
yantra.datatypes.HTMLElement.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4050__auto__,k14504,else__4051__auto__){var self__ = this;
var this__4050__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k14504,new cljs.core.Keyword(null,"tag","tag",1014018828)))
{return self__.tag;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14504,new cljs.core.Keyword(null,"attributes","attributes",1419549897)))
{return self__.attributes;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k14504,new cljs.core.Keyword(null,"children","children",2673430897)))
{return self__.children;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k14504,else__4051__auto__);
} else
{return null;
}
}
}
}
});
yantra.datatypes.HTMLElement.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4055__auto__,k__4056__auto__,G__14503){var self__ = this;
var this__4055__auto____$1 = this;var pred__14506 = cljs.core.keyword_identical_QMARK_;var expr__14507 = k__4056__auto__;if(cljs.core.truth_(pred__14506.call(null,new cljs.core.Keyword(null,"tag","tag",1014018828),expr__14507)))
{return (new yantra.datatypes.HTMLElement(G__14503,self__.attributes,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14506.call(null,new cljs.core.Keyword(null,"attributes","attributes",1419549897),expr__14507)))
{return (new yantra.datatypes.HTMLElement(self__.tag,G__14503,self__.children,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__14506.call(null,new cljs.core.Keyword(null,"children","children",2673430897),expr__14507)))
{return (new yantra.datatypes.HTMLElement(self__.tag,self__.attributes,G__14503,self__.__meta,self__.__extmap,null));
} else
{return (new yantra.datatypes.HTMLElement(self__.tag,self__.attributes,self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4056__auto__,G__14503),null));
}
}
}
});
yantra.datatypes.HTMLElement.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4062__auto__,writer__4063__auto__,opts__4064__auto__){var self__ = this;
var this__4062__auto____$1 = this;var pr_pair__4065__auto__ = ((function (this__4062__auto____$1){
return (function (keyval__4066__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,cljs.core.pr_writer,""," ","",opts__4064__auto__,keyval__4066__auto__);
});})(this__4062__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4063__auto__,pr_pair__4065__auto__,"#yantra.datatypes.HTMLElement{",", ","}",opts__4064__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",1014018828),self__.tag],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attributes","attributes",1419549897),self__.attributes],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
yantra.datatypes.HTMLElement.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4053__auto__,entry__4054__auto__){var self__ = this;
var this__4053__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4054__auto__))
{return cljs.core._assoc.call(null,this__4053__auto____$1,cljs.core._nth.call(null,entry__4054__auto__,0),cljs.core._nth.call(null,entry__4054__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4053__auto____$1,entry__4054__auto__);
}
});
yantra.datatypes.HTMLElement.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4060__auto__){var self__ = this;
var this__4060__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",1014018828),self__.tag],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attributes","attributes",1419549897),self__.attributes],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",2673430897),self__.children],null))], null),self__.__extmap));
});
yantra.datatypes.HTMLElement.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4052__auto__){var self__ = this;
var this__4052__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
yantra.datatypes.HTMLElement.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4044__auto__,other__4045__auto__){var self__ = this;
var this__4044__auto____$1 = this;if(cljs.core.truth_((function (){var and__3450__auto__ = other__4045__auto__;if(cljs.core.truth_(and__3450__auto__))
{return ((this__4044__auto____$1.constructor === other__4045__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4044__auto____$1,other__4045__auto__));
} else
{return and__3450__auto__;
}
})()))
{return true;
} else
{return false;
}
});
yantra.datatypes.HTMLElement.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4047__auto__,G__14503){var self__ = this;
var this__4047__auto____$1 = this;return (new yantra.datatypes.HTMLElement(self__.tag,self__.attributes,self__.children,G__14503,self__.__extmap,self__.__hash));
});
yantra.datatypes.HTMLElement.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4042__auto__){var self__ = this;
var this__4042__auto____$1 = this;return (new yantra.datatypes.HTMLElement(self__.tag,self__.attributes,self__.children,self__.__meta,self__.__extmap,self__.__hash));
});
yantra.datatypes.HTMLElement.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4046__auto__){var self__ = this;
var this__4046__auto____$1 = this;return self__.__meta;
});
yantra.datatypes.HTMLElement.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4057__auto__,k__4058__auto__){var self__ = this;
var this__4057__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"children","children",2673430897),null,new cljs.core.Keyword(null,"attributes","attributes",1419549897),null,new cljs.core.Keyword(null,"tag","tag",1014018828),null], null), null),k__4058__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4057__auto____$1),self__.__meta),k__4058__auto__);
} else
{return (new yantra.datatypes.HTMLElement(self__.tag,self__.attributes,self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4058__auto__)),null));
}
});
yantra.datatypes.HTMLElement.cljs$lang$type = true;
yantra.datatypes.HTMLElement.cljs$lang$ctorPrSeq = (function (this__4082__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"yantra.datatypes/HTMLElement");
});
yantra.datatypes.HTMLElement.cljs$lang$ctorPrWriter = (function (this__4082__auto__,writer__4083__auto__){return cljs.core._write.call(null,writer__4083__auto__,"yantra.datatypes/HTMLElement");
});
yantra.datatypes.__GT_HTMLElement = (function __GT_HTMLElement(tag,attributes,children){return (new yantra.datatypes.HTMLElement(tag,attributes,children));
});
yantra.datatypes.map__GT_HTMLElement = (function map__GT_HTMLElement(G__14505){return (new yantra.datatypes.HTMLElement(new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(G__14505),new cljs.core.Keyword(null,"attributes","attributes",1419549897).cljs$core$IFn$_invoke$arity$1(G__14505),new cljs.core.Keyword(null,"children","children",2673430897).cljs$core$IFn$_invoke$arity$1(G__14505),null,cljs.core.dissoc.call(null,G__14505,new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword(null,"attributes","attributes",1419549897),new cljs.core.Keyword(null,"children","children",2673430897))));
});

//# sourceMappingURL=datatypes.js.map