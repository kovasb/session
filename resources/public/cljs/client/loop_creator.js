goog.provide('session.client.loop_creator');
goog.require('cljs.core');
goog.require('session.client.subscribe');
goog.require('session.client.mvc');
/**
* docstring
*/
session.client.loop_creator.foobar = (function foobar(x){
return x;
});

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
session.client.loop_creator.LoopCreator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2345__auto__){
var this__6465 = this;
var h__2219__auto____6466 = this__6465.__hash;
if(!((h__2219__auto____6466 == null)))
{return h__2219__auto____6466;
} else
{var h__2219__auto____6467 = cljs.core.hash_imap.call(null,this__2345__auto__);
this__6465.__hash = h__2219__auto____6467;
return h__2219__auto____6467;
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2350__auto__,k__2351__auto__){
var this__6468 = this;
return this__2350__auto__.cljs$core$ILookup$_lookup$arity$3(this__2350__auto__,k__2351__auto__,null);
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2352__auto__,k6463,else__2353__auto__){
var this__6469 = this;
if((k6463 === "\uFDD0'x"))
{return this__6469.x;
} else
{if((k6463 === "\uFDD0'dom"))
{return this__6469.dom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__6469.__extmap,k6463,else__2353__auto__);
} else
{return null;
}
}
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2357__auto__,k__2358__auto__,G__6462){
var this__6470 = this;
var pred__6471__6474 = cljs.core.identical_QMARK_;
var expr__6472__6475 = k__2358__auto__;
if(pred__6471__6474.call(null,"\uFDD0'x",expr__6472__6475))
{return (new session.client.loop_creator.LoopCreator(G__6462,this__6470.dom,this__6470.__meta,this__6470.__extmap,null));
} else
{if(pred__6471__6474.call(null,"\uFDD0'dom",expr__6472__6475))
{return (new session.client.loop_creator.LoopCreator(this__6470.x,G__6462,this__6470.__meta,this__6470.__extmap,null));
} else
{return (new session.client.loop_creator.LoopCreator(this__6470.x,this__6470.dom,this__6470.__meta,cljs.core.assoc.call(null,this__6470.__extmap,k__2358__auto__,G__6462),null));
}
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2355__auto__,entry__2356__auto__){
var this__6476 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2356__auto__))
{return this__2355__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2355__auto__,cljs.core._nth.call(null,entry__2356__auto__,0),cljs.core._nth.call(null,entry__2356__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2355__auto__,entry__2356__auto__);
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2362__auto__){
var this__6477 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'x",this__6477.x),cljs.core.vector.call(null,"\uFDD0'dom",this__6477.dom)], true),this__6477.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$ = true;
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var this__6478 = this;
var v__6480 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6479 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true));
if(or__3939__auto____6479)
{return or__3939__auto____6479;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model","loop-creator"], true));
cljs.core.reset_BANG_.call(null,this__6478.dom,v__6480);
return v__6480;
});
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var this__6481 = this;
if(cljs.core.truth_(this__6481.x))
{cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__6481.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6482 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__6481.dom));
if(or__3939__auto____6482)
{return or__3939__auto____6482;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__6481.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__6481.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__6481.dom)):null))),cljs.core.PersistentVector.fromArray(["on","click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'insert-loop","\uFDD0'id":"a","\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'position"],{"\uFDD0'position":cljs.core.ObjMap.fromObject(["\uFDD0'after"],{"\uFDD0'after":this__6481.x})})}));
})], true));
} else
{}
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__6481.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6483 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__6481.dom));
if(or__3939__auto____6483)
{return or__3939__auto____6483;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__6481.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__6481.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__6481.dom)):null))),cljs.core.PersistentVector.fromArray(["on","mouseover",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6484 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3939__auto____6484)
{return or__3939__auto____6484;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"], true)),cljs.core.PersistentVector.fromArray(["toggleClass","icon-arrow-right"], true));
})], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__6481.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6485 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__6481.dom));
if(or__3939__auto____6485)
{return or__3939__auto____6485;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__6481.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__6481.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__6481.dom)):null))),cljs.core.PersistentVector.fromArray(["on","mouseout",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6486 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3939__auto____6486)
{return or__3939__auto____6486;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"], true)),cljs.core.PersistentVector.fromArray(["toggleClass","icon-arrow-right"], true));
})], true));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2364__auto__,opts__2365__auto__){
var this__6487 = this;
var pr_pair__2366__auto____6488 = (function (keyval__2367__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2365__auto__,keyval__2367__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2366__auto____6488,[cljs.core.str("#"),cljs.core.str("LoopCreator"),cljs.core.str("{")].join(''),", ","}",opts__2365__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'x",this__6487.x),cljs.core.vector.call(null,"\uFDD0'dom",this__6487.dom)], true),this__6487.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2354__auto__){
var this__6489 = this;
return (2 + cljs.core.count.call(null,this__6489.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2346__auto__,other__2347__auto__){
var this__6490 = this;
if(cljs.core.truth_((function (){var and__3937__auto____6491 = other__2347__auto__;
if(cljs.core.truth_(and__3937__auto____6491))
{var and__3937__auto____6492 = (this__2346__auto__.constructor === other__2347__auto__.constructor);
if(and__3937__auto____6492)
{return cljs.core.equiv_map.call(null,this__2346__auto__,other__2347__auto__);
} else
{return and__3937__auto____6492;
}
} else
{return and__3937__auto____6491;
}
})()))
{return true;
} else
{return false;
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2349__auto__,G__6462){
var this__6493 = this;
return (new session.client.loop_creator.LoopCreator(this__6493.x,this__6493.dom,G__6462,this__6493.__extmap,this__6493.__hash));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2348__auto__){
var this__6494 = this;
return this__6494.__meta;
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2359__auto__,k__2360__auto__){
var this__6495 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'dom","\uFDD0'x"]),k__2360__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2359__auto__),this__6495.__meta),k__2360__auto__);
} else
{return (new session.client.loop_creator.LoopCreator(this__6495.x,this__6495.dom,this__6495.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__6495.__extmap,k__2360__auto__)),null));
}
});
session.client.loop_creator.LoopCreator.cljs$lang$type = true;
session.client.loop_creator.LoopCreator.cljs$lang$ctorPrSeq = (function (this__2384__auto__){
return cljs.core.list.call(null,"session.client.loop-creator/LoopCreator");
});
session.client.loop_creator.__GT_LoopCreator = (function __GT_LoopCreator(x,dom){
return (new session.client.loop_creator.LoopCreator(x,dom));
});
session.client.loop_creator.map__GT_LoopCreator = (function map__GT_LoopCreator(G__6464){
return (new session.client.loop_creator.LoopCreator((new cljs.core.Keyword("\uFDD0'x")).call(null,G__6464),(new cljs.core.Keyword("\uFDD0'dom")).call(null,G__6464),null,cljs.core.dissoc.call(null,G__6464,"\uFDD0'x","\uFDD0'dom")));
});
session.client.loop_creator.LoopCreator;
