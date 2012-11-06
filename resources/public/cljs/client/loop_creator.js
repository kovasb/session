goog.provide('session.client.loop_creator');
goog.require('cljs.core');
goog.require('session.client.subscribe');
goog.require('session.client.mvc');

/**
* @constructor
* @param {*} x
* @param {*} dom
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
session.client.loop_creator.LoopCreator = (function (x,dom,__meta,__extmap){
this.x = x;
this.dom = dom;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 619054858;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
session.client.loop_creator.LoopCreator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2318__auto__){
var this__197855 = this;
var h__2192__auto____197856 = this__197855.__hash;
if(!((h__2192__auto____197856 == null)))
{return h__2192__auto____197856;
} else
{var h__2192__auto____197857 = cljs.core.hash_imap.call(null,this__2318__auto__);
this__197855.__hash = h__2192__auto____197857;
return h__2192__auto____197857;
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2323__auto__,k__2324__auto__){
var this__197858 = this;
return this__2323__auto__.cljs$core$ILookup$_lookup$arity$3(this__2323__auto__,k__2324__auto__,null);
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2325__auto__,k197853,else__2326__auto__){
var this__197859 = this;
if((k197853 === "\uFDD0'x"))
{return this__197859.x;
} else
{if((k197853 === "\uFDD0'dom"))
{return this__197859.dom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__197859.__extmap,k197853,else__2326__auto__);
} else
{return null;
}
}
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2330__auto__,k__2331__auto__,G__197852){
var this__197860 = this;
var pred__197861__197864 = cljs.core.identical_QMARK_;
var expr__197862__197865 = k__2331__auto__;
if(pred__197861__197864.call(null,"\uFDD0'x",expr__197862__197865))
{return (new session.client.loop_creator.LoopCreator(G__197852,this__197860.dom,this__197860.__meta,this__197860.__extmap,null));
} else
{if(pred__197861__197864.call(null,"\uFDD0'dom",expr__197862__197865))
{return (new session.client.loop_creator.LoopCreator(this__197860.x,G__197852,this__197860.__meta,this__197860.__extmap,null));
} else
{return (new session.client.loop_creator.LoopCreator(this__197860.x,this__197860.dom,this__197860.__meta,cljs.core.assoc.call(null,this__197860.__extmap,k__2331__auto__,G__197852),null));
}
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2328__auto__,entry__2329__auto__){
var this__197866 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2329__auto__))
{return this__2328__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2328__auto__,cljs.core._nth.call(null,entry__2329__auto__,0),cljs.core._nth.call(null,entry__2329__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2328__auto__,entry__2329__auto__);
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2335__auto__){
var this__197867 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'x",this__197867.x),cljs.core.vector.call(null,"\uFDD0'dom",this__197867.dom)], true),this__197867.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$ = true;
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var this__197868 = this;
var v__197870 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-creator",cljs.core.merge.call(null,(cljs.core.truth_(this__197868.x)?cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":"subsession-root-lc"}):cljs.core.ObjMap.EMPTY),cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;height:18px"})),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____197869 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-creator",cljs.core.merge.call(null,(cljs.core.truth_(this__197868.x)?cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":"subsession-root-lc"}):cljs.core.ObjMap.EMPTY),cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;height:18px"})),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true));
if(or__3824__auto____197869)
{return or__3824__auto____197869;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-creator",cljs.core.merge.call(null,(cljs.core.truth_(this__197868.x)?cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":"subsession-root-lc"}):cljs.core.ObjMap.EMPTY),cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;height:18px"})),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-creator",cljs.core.merge.call(null,(cljs.core.truth_(this__197868.x)?cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":"subsession-root-lc"}):cljs.core.ObjMap.EMPTY),cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;height:18px"})),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-creator",cljs.core.merge.call(null,(cljs.core.truth_(this__197868.x)?cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":"subsession-root-lc"}):cljs.core.ObjMap.EMPTY),cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;height:18px"})),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model","loop-creator"], true));
cljs.core.reset_BANG_.call(null,this__197868.dom,v__197870);
return v__197870;
});
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var this__197871 = this;
if(cljs.core.truth_(this__197871.x))
{cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__197871.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____197872 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__197871.dom));
if(or__3824__auto____197872)
{return or__3824__auto____197872;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__197871.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__197871.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__197871.dom)):null))),cljs.core.PersistentVector.fromArray(["on","click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'insert-loop","\uFDD0'id":"a","\uFDD0'data":"b"}));
})], true));
} else
{}
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__197871.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____197873 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__197871.dom));
if(or__3824__auto____197873)
{return or__3824__auto____197873;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__197871.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__197871.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__197871.dom)):null))),cljs.core.PersistentVector.fromArray(["on","mouseover",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____197874 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3824__auto____197874)
{return or__3824__auto____197874;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"], true)),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"], true));
})], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__197871.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____197875 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__197871.dom));
if(or__3824__auto____197875)
{return or__3824__auto____197875;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__197871.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__197871.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__197871.dom)):null))),cljs.core.PersistentVector.fromArray(["on","mouseout",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____197876 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3824__auto____197876)
{return or__3824__auto____197876;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"], true)),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"], true));
})], true));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2337__auto__,opts__2338__auto__){
var this__197877 = this;
var pr_pair__2339__auto____197878 = (function (keyval__2340__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2338__auto__,keyval__2340__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2339__auto____197878,[cljs.core.str("#"),cljs.core.str("LoopCreator"),cljs.core.str("{")].join(''),", ","}",opts__2338__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'x",this__197877.x),cljs.core.vector.call(null,"\uFDD0'dom",this__197877.dom)], true),this__197877.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2327__auto__){
var this__197879 = this;
return (2 + cljs.core.count.call(null,this__197879.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2319__auto__,other__2320__auto__){
var this__197880 = this;
if(cljs.core.truth_((function (){var and__3822__auto____197881 = other__2320__auto__;
if(cljs.core.truth_(and__3822__auto____197881))
{var and__3822__auto____197882 = (this__2319__auto__.constructor === other__2320__auto__.constructor);
if(and__3822__auto____197882)
{return cljs.core.equiv_map.call(null,this__2319__auto__,other__2320__auto__);
} else
{return and__3822__auto____197882;
}
} else
{return and__3822__auto____197881;
}
})()))
{return true;
} else
{return false;
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2322__auto__,G__197852){
var this__197883 = this;
return (new session.client.loop_creator.LoopCreator(this__197883.x,this__197883.dom,G__197852,this__197883.__extmap,this__197883.__hash));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2321__auto__){
var this__197884 = this;
return this__197884.__meta;
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2332__auto__,k__2333__auto__){
var this__197885 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'dom","\uFDD0'x"]),k__2333__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2332__auto__),this__197885.__meta),k__2333__auto__);
} else
{return (new session.client.loop_creator.LoopCreator(this__197885.x,this__197885.dom,this__197885.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__197885.__extmap,k__2333__auto__)),null));
}
});
session.client.loop_creator.LoopCreator.cljs$lang$type = true;
session.client.loop_creator.LoopCreator.cljs$lang$ctorPrSeq = (function (this__2357__auto__){
return cljs.core.list.call(null,"session.client.loop-creator/LoopCreator");
});
session.client.loop_creator.__GT_LoopCreator = (function __GT_LoopCreator(x,dom){
return (new session.client.loop_creator.LoopCreator(x,dom));
});
session.client.loop_creator.map__GT_LoopCreator = (function map__GT_LoopCreator(G__197854){
return (new session.client.loop_creator.LoopCreator((new cljs.core.Keyword("\uFDD0'x")).call(null,G__197854),(new cljs.core.Keyword("\uFDD0'dom")).call(null,G__197854),null,cljs.core.dissoc.call(null,G__197854,"\uFDD0'x","\uFDD0'dom")));
});
session.client.loop_creator.LoopCreator;
