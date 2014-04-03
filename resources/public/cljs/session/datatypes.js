// Compiled by ClojureScript 0.0-2197
goog.provide('session.datatypes');
goog.require('cljs.core');

/**
* @constructor
* @param {*} loops
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
session.datatypes.Session = (function (loops,__meta,__extmap){
this.loops = loops;
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
session.datatypes.Session.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
session.datatypes.Session.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
session.datatypes.Session.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k9279,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9279,new cljs.core.Keyword(null,"loops","loops",1117061569)))
{return self__.loops;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9279,else__4067__auto__);
} else
{return null;
}
}
});
session.datatypes.Session.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__9278){var self__ = this;
var this__4071__auto____$1 = this;var pred__9281 = cljs.core.keyword_identical_QMARK_;var expr__9282 = k__4072__auto__;if(cljs.core.truth_(pred__9281.call(null,new cljs.core.Keyword(null,"loops","loops",1117061569),expr__9282)))
{return (new session.datatypes.Session(G__9278,self__.__meta,self__.__extmap,null));
} else
{return (new session.datatypes.Session(self__.loops,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__9278),null));
}
});
session.datatypes.Session.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#session.datatypes.Session{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"loops","loops",1117061569),self__.loops],null))], null),self__.__extmap));
});
session.datatypes.Session.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
session.datatypes.Session.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"loops","loops",1117061569),self__.loops],null))], null),self__.__extmap));
});
session.datatypes.Session.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
session.datatypes.Session.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
session.datatypes.Session.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__9278){var self__ = this;
var this__4063__auto____$1 = this;return (new session.datatypes.Session(self__.loops,G__9278,self__.__extmap,self__.__hash));
});
session.datatypes.Session.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new session.datatypes.Session(self__.loops,self__.__meta,self__.__extmap,self__.__hash));
});
session.datatypes.Session.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
session.datatypes.Session.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loops","loops",1117061569),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new session.datatypes.Session(self__.loops,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
session.datatypes.Session.cljs$lang$type = true;
session.datatypes.Session.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"session.datatypes/Session");
});
session.datatypes.Session.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"session.datatypes/Session");
});
session.datatypes.__GT_Session = (function __GT_Session(loops){return (new session.datatypes.Session(loops));
});
session.datatypes.map__GT_Session = (function map__GT_Session(G__9280){return (new session.datatypes.Session(new cljs.core.Keyword(null,"loops","loops",1117061569).cljs$core$IFn$_invoke$arity$1(G__9280),null,cljs.core.dissoc.call(null,G__9280,new cljs.core.Keyword(null,"loops","loops",1117061569))));
});

/**
* @constructor
* @param {*} id
* @param {*} in$
* @param {*} out
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
session.datatypes.Loop = (function (id,in$,out,__meta,__extmap){
this.id = id;
this.in$ = in$;
this.out = out;
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
session.datatypes.Loop.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
session.datatypes.Loop.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
session.datatypes.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k9285,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9285,new cljs.core.Keyword(null,"id","id",1013907597)))
{return self__.id;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9285,new cljs.core.Keyword(null,"in","in",1013907607)))
{return self__.in$;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9285,new cljs.core.Keyword(null,"out","out",1014014656)))
{return self__.out;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9285,else__4067__auto__);
} else
{return null;
}
}
}
}
});
session.datatypes.Loop.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__9284){var self__ = this;
var this__4071__auto____$1 = this;var pred__9287 = cljs.core.keyword_identical_QMARK_;var expr__9288 = k__4072__auto__;if(cljs.core.truth_(pred__9287.call(null,new cljs.core.Keyword(null,"id","id",1013907597),expr__9288)))
{return (new session.datatypes.Loop(G__9284,self__.in$,self__.out,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9287.call(null,new cljs.core.Keyword(null,"in","in",1013907607),expr__9288)))
{return (new session.datatypes.Loop(self__.id,G__9284,self__.out,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9287.call(null,new cljs.core.Keyword(null,"out","out",1014014656),expr__9288)))
{return (new session.datatypes.Loop(self__.id,self__.in$,G__9284,self__.__meta,self__.__extmap,null));
} else
{return (new session.datatypes.Loop(self__.id,self__.in$,self__.out,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__9284),null));
}
}
}
});
session.datatypes.Loop.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#session.datatypes.Loop{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",1013907597),self__.id],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",1013907607),self__.in$],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"out","out",1014014656),self__.out],null))], null),self__.__extmap));
});
session.datatypes.Loop.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
session.datatypes.Loop.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",1013907597),self__.id],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",1013907607),self__.in$],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"out","out",1014014656),self__.out],null))], null),self__.__extmap));
});
session.datatypes.Loop.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
session.datatypes.Loop.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
session.datatypes.Loop.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__9284){var self__ = this;
var this__4063__auto____$1 = this;return (new session.datatypes.Loop(self__.id,self__.in$,self__.out,G__9284,self__.__extmap,self__.__hash));
});
session.datatypes.Loop.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new session.datatypes.Loop(self__.id,self__.in$,self__.out,self__.__meta,self__.__extmap,self__.__hash));
});
session.datatypes.Loop.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
session.datatypes.Loop.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in","in",1013907607),null,new cljs.core.Keyword(null,"out","out",1014014656),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new session.datatypes.Loop(self__.id,self__.in$,self__.out,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
session.datatypes.Loop.cljs$lang$type = true;
session.datatypes.Loop.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"session.datatypes/Loop");
});
session.datatypes.Loop.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"session.datatypes/Loop");
});
session.datatypes.__GT_Loop = (function __GT_Loop(id,in$,out){return (new session.datatypes.Loop(id,in$,out));
});
session.datatypes.map__GT_Loop = (function map__GT_Loop(G__9286){return (new session.datatypes.Loop(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(G__9286),new cljs.core.Keyword(null,"in","in",1013907607).cljs$core$IFn$_invoke$arity$1(G__9286),new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(G__9286),null,cljs.core.dissoc.call(null,G__9286,new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.Keyword(null,"out","out",1014014656))));
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
session.datatypes.Boot = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
session.datatypes.Boot.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
session.datatypes.Boot.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
session.datatypes.Boot.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k9291,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9291,else__4067__auto__);
} else
{return null;
}
});
session.datatypes.Boot.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__9290){var self__ = this;
var this__4071__auto____$1 = this;var pred__9293 = cljs.core.keyword_identical_QMARK_;var expr__9294 = k__4072__auto__;return (new session.datatypes.Boot(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__9290),null));
});
session.datatypes.Boot.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#session.datatypes.Boot{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
session.datatypes.Boot.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
session.datatypes.Boot.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});
session.datatypes.Boot.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (0 + cljs.core.count.call(null,self__.__extmap));
});
session.datatypes.Boot.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
session.datatypes.Boot.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__9290){var self__ = this;
var this__4063__auto____$1 = this;return (new session.datatypes.Boot(G__9290,self__.__extmap,self__.__hash));
});
session.datatypes.Boot.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new session.datatypes.Boot(self__.__meta,self__.__extmap,self__.__hash));
});
session.datatypes.Boot.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
session.datatypes.Boot.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new session.datatypes.Boot(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
session.datatypes.Boot.cljs$lang$type = true;
session.datatypes.Boot.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"session.datatypes/Boot");
});
session.datatypes.Boot.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"session.datatypes/Boot");
});
session.datatypes.__GT_Boot = (function __GT_Boot(){return (new session.datatypes.Boot());
});
session.datatypes.map__GT_Boot = (function map__GT_Boot(G__9292){return (new session.datatypes.Boot(null,cljs.core.dissoc.call(null,G__9292)));
});

/**
* @constructor
* @param {*} type
* @param {*} id
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
session.datatypes.SessionObject = (function (type,id,__meta,__extmap){
this.type = type;
this.id = id;
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
session.datatypes.SessionObject.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap.call(null,this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
session.datatypes.SessionObject.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.call(null,this__4064__auto____$1,k__4065__auto__,null);
});
session.datatypes.SessionObject.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k9297,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k9297,new cljs.core.Keyword(null,"type","type",1017479852)))
{return self__.type;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k9297,new cljs.core.Keyword(null,"id","id",1013907597)))
{return self__.id;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k9297,else__4067__auto__);
} else
{return null;
}
}
}
});
session.datatypes.SessionObject.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__9296){var self__ = this;
var this__4071__auto____$1 = this;var pred__9299 = cljs.core.keyword_identical_QMARK_;var expr__9300 = k__4072__auto__;if(cljs.core.truth_(pred__9299.call(null,new cljs.core.Keyword(null,"type","type",1017479852),expr__9300)))
{return (new session.datatypes.SessionObject(G__9296,self__.id,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__9299.call(null,new cljs.core.Keyword(null,"id","id",1013907597),expr__9300)))
{return (new session.datatypes.SessionObject(self__.type,G__9296,self__.__meta,self__.__extmap,null));
} else
{return (new session.datatypes.SessionObject(self__.type,self__.id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4072__auto__,G__9296),null));
}
}
});
session.datatypes.SessionObject.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4079__auto__,pr_pair__4081__auto__,"#session.datatypes.SessionObject{",", ","}",opts__4080__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1017479852),self__.type],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",1013907597),self__.id],null))], null),self__.__extmap));
});
session.datatypes.SessionObject.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4070__auto__))
{return cljs.core._assoc.call(null,this__4069__auto____$1,cljs.core._nth.call(null,entry__4070__auto__,0),cljs.core._nth.call(null,entry__4070__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
session.datatypes.SessionObject.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1017479852),self__.type],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",1013907597),self__.id],null))], null),self__.__extmap));
});
session.datatypes.SessionObject.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
session.datatypes.SessionObject.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
session.datatypes.SessionObject.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__9296){var self__ = this;
var this__4063__auto____$1 = this;return (new session.datatypes.SessionObject(self__.type,self__.id,G__9296,self__.__extmap,self__.__hash));
});
session.datatypes.SessionObject.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new session.datatypes.SessionObject(self__.type,self__.id,self__.__meta,self__.__extmap,self__.__hash));
});
session.datatypes.SessionObject.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
session.datatypes.SessionObject.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),null,new cljs.core.Keyword(null,"id","id",1013907597),null], null), null),k__4074__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new session.datatypes.SessionObject(self__.type,self__.id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4074__auto__)),null));
}
});
session.datatypes.SessionObject.cljs$lang$type = true;
session.datatypes.SessionObject.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"session.datatypes/SessionObject");
});
session.datatypes.SessionObject.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write.call(null,writer__4099__auto__,"session.datatypes/SessionObject");
});
session.datatypes.__GT_SessionObject = (function __GT_SessionObject(type,id){return (new session.datatypes.SessionObject(type,id));
});
session.datatypes.map__GT_SessionObject = (function map__GT_SessionObject(G__9298){return (new session.datatypes.SessionObject(new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(G__9298),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(G__9298),null,cljs.core.dissoc.call(null,G__9298,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"id","id",1013907597))));
});

//# sourceMappingURL=datatypes.js.map