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
session.client.loop_creator.LoopCreator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2351__auto__){
var this__7224 = this;
var h__2225__auto____7225 = this__7224.__hash;
if(!((h__2225__auto____7225 == null)))
{return h__2225__auto____7225;
} else
{var h__2225__auto____7226 = cljs.core.hash_imap.call(null,this__2351__auto__);
this__7224.__hash = h__2225__auto____7226;
return h__2225__auto____7226;
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2356__auto__,k__2357__auto__){
var this__7227 = this;
return this__2356__auto__.cljs$core$ILookup$_lookup$arity$3(this__2356__auto__,k__2357__auto__,null);
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2358__auto__,k7222,else__2359__auto__){
var this__7228 = this;
if((k7222 === "\uFDD0'x"))
{return this__7228.x;
} else
{if((k7222 === "\uFDD0'dom"))
{return this__7228.dom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__7228.__extmap,k7222,else__2359__auto__);
} else
{return null;
}
}
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2363__auto__,k__2364__auto__,G__7221){
var this__7229 = this;
var pred__7230__7233 = cljs.core.identical_QMARK_;
var expr__7231__7234 = k__2364__auto__;
if(pred__7230__7233.call(null,"\uFDD0'x",expr__7231__7234))
{return (new session.client.loop_creator.LoopCreator(G__7221,this__7229.dom,this__7229.__meta,this__7229.__extmap,null));
} else
{if(pred__7230__7233.call(null,"\uFDD0'dom",expr__7231__7234))
{return (new session.client.loop_creator.LoopCreator(this__7229.x,G__7221,this__7229.__meta,this__7229.__extmap,null));
} else
{return (new session.client.loop_creator.LoopCreator(this__7229.x,this__7229.dom,this__7229.__meta,cljs.core.assoc.call(null,this__7229.__extmap,k__2364__auto__,G__7221),null));
}
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2361__auto__,entry__2362__auto__){
var this__7235 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2362__auto__))
{return this__2361__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2361__auto__,cljs.core._nth.call(null,entry__2362__auto__,0),cljs.core._nth.call(null,entry__2362__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2361__auto__,entry__2362__auto__);
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2368__auto__){
var this__7236 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'x",this__7236.x),cljs.core.vector.call(null,"\uFDD0'dom",this__7236.dom)], true),this__7236.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$ = true;
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var this__7237 = this;
var v__7239 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7238 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true));
if(or__3939__auto____7238)
{return or__3939__auto____7238;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model","loop-creator"], true));
cljs.core.reset_BANG_.call(null,this__7237.dom,v__7239);
return v__7239;
});
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var this__7240 = this;
if(cljs.core.truth_(this__7240.x))
{cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__7240.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7241 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__7240.dom));
if(or__3939__auto____7241)
{return or__3939__auto____7241;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__7240.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__7240.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__7240.dom)):null))),cljs.core.PersistentVector.fromArray(["on","click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'insert-loop","\uFDD0'id":"a","\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'position"],{"\uFDD0'position":cljs.core.ObjMap.fromObject(["\uFDD0'after"],{"\uFDD0'after":this__7240.x})})}));
})], true));
} else
{}
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__7240.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7242 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__7240.dom));
if(or__3939__auto____7242)
{return or__3939__auto____7242;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__7240.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__7240.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__7240.dom)):null))),cljs.core.PersistentVector.fromArray(["on","mouseover",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7243 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3939__auto____7243)
{return or__3939__auto____7243;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"], true)),cljs.core.PersistentVector.fromArray(["toggleClass","icon-arrow-right"], true));
})], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__7240.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7244 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__7240.dom));
if(or__3939__auto____7244)
{return or__3939__auto____7244;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__7240.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__7240.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__7240.dom)):null))),cljs.core.PersistentVector.fromArray(["on","mouseout",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7245 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3939__auto____7245)
{return or__3939__auto____7245;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"], true)),cljs.core.PersistentVector.fromArray(["toggleClass","icon-arrow-right"], true));
})], true));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2370__auto__,opts__2371__auto__){
var this__7246 = this;
var pr_pair__2372__auto____7247 = (function (keyval__2373__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2371__auto__,keyval__2373__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2372__auto____7247,[cljs.core.str("#"),cljs.core.str("LoopCreator"),cljs.core.str("{")].join(''),", ","}",opts__2371__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'x",this__7246.x),cljs.core.vector.call(null,"\uFDD0'dom",this__7246.dom)], true),this__7246.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2360__auto__){
var this__7248 = this;
return (2 + cljs.core.count.call(null,this__7248.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2352__auto__,other__2353__auto__){
var this__7249 = this;
if(cljs.core.truth_((function (){var and__3937__auto____7250 = other__2353__auto__;
if(cljs.core.truth_(and__3937__auto____7250))
{var and__3937__auto____7251 = (this__2352__auto__.constructor === other__2353__auto__.constructor);
if(and__3937__auto____7251)
{return cljs.core.equiv_map.call(null,this__2352__auto__,other__2353__auto__);
} else
{return and__3937__auto____7251;
}
} else
{return and__3937__auto____7250;
}
})()))
{return true;
} else
{return false;
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2355__auto__,G__7221){
var this__7252 = this;
return (new session.client.loop_creator.LoopCreator(this__7252.x,this__7252.dom,G__7221,this__7252.__extmap,this__7252.__hash));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2354__auto__){
var this__7253 = this;
return this__7253.__meta;
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2365__auto__,k__2366__auto__){
var this__7254 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'dom","\uFDD0'x"]),k__2366__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2365__auto__),this__7254.__meta),k__2366__auto__);
} else
{return (new session.client.loop_creator.LoopCreator(this__7254.x,this__7254.dom,this__7254.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__7254.__extmap,k__2366__auto__)),null));
}
});
session.client.loop_creator.LoopCreator.cljs$lang$type = true;
session.client.loop_creator.LoopCreator.cljs$lang$ctorPrSeq = (function (this__2390__auto__){
return cljs.core.list.call(null,"session.client.loop-creator/LoopCreator");
});
session.client.loop_creator.__GT_LoopCreator = (function __GT_LoopCreator(x,dom){
return (new session.client.loop_creator.LoopCreator(x,dom));
});
session.client.loop_creator.map__GT_LoopCreator = (function map__GT_LoopCreator(G__7223){
return (new session.client.loop_creator.LoopCreator((new cljs.core.Keyword("\uFDD0'x")).call(null,G__7223),(new cljs.core.Keyword("\uFDD0'dom")).call(null,G__7223),null,cljs.core.dissoc.call(null,G__7223,"\uFDD0'x","\uFDD0'dom")));
});
session.client.loop_creator.LoopCreator;
