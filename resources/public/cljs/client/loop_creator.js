goog.provide('session.client.loop_creator');
goog.require('cljs.core');
goog.require('session.client.mvc');

/**
* @constructor
* @param {*} x
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
session.client.loop_creator.LoopCreator = (function (x,__meta,__extmap){
this.x = x;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 619054858;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
session.client.loop_creator.LoopCreator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2472__auto__){
var this__6404 = this;
var h__2346__auto____6405 = this__6404.__hash;
if(!((h__2346__auto____6405 == null)))
{return h__2346__auto____6405;
} else
{var h__2346__auto____6406 = cljs.core.hash_imap.call(null,this__2472__auto__);
this__6404.__hash = h__2346__auto____6406;
return h__2346__auto____6406;
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2477__auto__,k__2478__auto__){
var this__6407 = this;
return this__2477__auto__.cljs$core$ILookup$_lookup$arity$3(this__2477__auto__,k__2478__auto__,null);
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2479__auto__,k6402,else__2480__auto__){
var this__6408 = this;
if((k6402 === "\uFDD0'x"))
{return this__6408.x;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__6408.__extmap,k6402,else__2480__auto__);
} else
{return null;
}
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2484__auto__,k__2485__auto__,G__6401){
var this__6409 = this;
var pred__6410__6413 = cljs.core.identical_QMARK_;
var expr__6411__6414 = k__2485__auto__;
if(pred__6410__6413.call(null,"\uFDD0'x",expr__6411__6414))
{return (new session.client.loop_creator.LoopCreator(G__6401,this__6409.__meta,this__6409.__extmap,null));
} else
{return (new session.client.loop_creator.LoopCreator(this__6409.x,this__6409.__meta,cljs.core.assoc.call(null,this__6409.__extmap,k__2485__auto__,G__6401),null));
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2482__auto__,entry__2483__auto__){
var this__6415 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2483__auto__))
{return this__2482__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2482__auto__,cljs.core._nth.call(null,entry__2483__auto__,0),cljs.core._nth.call(null,entry__2483__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2482__auto__,entry__2483__auto__);
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2489__auto__){
var this__6416 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'x",this__6416.x)], true),this__6416.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$ = true;
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var this__6417 = this;
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.span6.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;height:18px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6418 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.span6.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;height:18px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true));
if(or__3824__auto____6418)
{return or__3824__auto____6418;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.span6.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;height:18px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.span6.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;height:18px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.span6.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;height:18px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model","loop-creator"], true));
});
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$control$arity$2 = (function (this$,viewobject){
var this__6419 = this;
if(cljs.core.truth_(this__6419.x))
{cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6420 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6420)
{return or__3824__auto____6420;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","click",(function (){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6421 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3824__auto____6421)
{return or__3824__auto____6421;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["trigger","insert-new-loop"], true));
})], true));
} else
{}
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6422 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6422)
{return or__3824__auto____6422;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","mouseover",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6423 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3824__auto____6423)
{return or__3824__auto____6423;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"], true)),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"], true));
})], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6424 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6424)
{return or__3824__auto____6424;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","mouseout",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6425 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3824__auto____6425)
{return or__3824__auto____6425;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"], true)),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"], true));
})], true));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2491__auto__,opts__2492__auto__){
var this__6426 = this;
var pr_pair__2493__auto____6427 = (function (keyval__2494__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2492__auto__,keyval__2494__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2493__auto____6427,[cljs.core.str("#"),cljs.core.str("LoopCreator"),cljs.core.str("{")].join(''),", ","}",opts__2492__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'x",this__6426.x)], true),this__6426.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2481__auto__){
var this__6428 = this;
return (1 + cljs.core.count.call(null,this__6428.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2473__auto__,other__2474__auto__){
var this__6429 = this;
if(cljs.core.truth_((function (){var and__3822__auto____6430 = other__2474__auto__;
if(cljs.core.truth_(and__3822__auto____6430))
{var and__3822__auto____6431 = (this__2473__auto__.constructor === other__2474__auto__.constructor);
if(and__3822__auto____6431)
{return cljs.core.equiv_map.call(null,this__2473__auto__,other__2474__auto__);
} else
{return and__3822__auto____6431;
}
} else
{return and__3822__auto____6430;
}
})()))
{return true;
} else
{return false;
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2476__auto__,G__6401){
var this__6432 = this;
return (new session.client.loop_creator.LoopCreator(this__6432.x,G__6401,this__6432.__extmap,this__6432.__hash));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2475__auto__){
var this__6433 = this;
return this__6433.__meta;
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2486__auto__,k__2487__auto__){
var this__6434 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.set(["\uFDD0'x"]),k__2487__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2486__auto__),this__6434.__meta),k__2487__auto__);
} else
{return (new session.client.loop_creator.LoopCreator(this__6434.x,this__6434.__meta,this__6434.__hash,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__6434.__extmap,k__2487__auto__)),null));
}
});
session.client.loop_creator.LoopCreator.cljs$lang$type = true;
session.client.loop_creator.LoopCreator.cljs$lang$ctorPrSeq = (function (this__2511__auto__){
return cljs.core.list.call(null,"session.client.loop-creator/LoopCreator");
});
session.client.loop_creator.__GT_LoopCreator = (function __GT_LoopCreator(x){
return (new session.client.loop_creator.LoopCreator(x));
});
session.client.loop_creator.map__GT_LoopCreator = (function map__GT_LoopCreator(G__6403){
return (new session.client.loop_creator.LoopCreator((new cljs.core.Keyword("\uFDD0'x")).call(null,G__6403),null,cljs.core.dissoc.call(null,G__6403,"\uFDD0'x")));
});
session.client.loop_creator.LoopCreator;
