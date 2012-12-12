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

goog.provide('session.client.loop_creator.LoopCreator');

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
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
session.client.loop_creator.LoopCreator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2361__auto__){
var self__ = this;
var h__2231__auto__ = self__.__hash;
if(!((h__2231__auto__ == null)))
{return h__2231__auto__;
} else
{var h__2231__auto____$1 = cljs.core.hash_imap.call(null,this__2361__auto__);
self__.__hash = h__2231__auto____$1;
return h__2231__auto____$1;
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2366__auto__,k__2367__auto__){
var self__ = this;
return this__2366__auto__.cljs$core$ILookup$_lookup$arity$3(this__2366__auto__,k__2367__auto__,null);
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2368__auto__,k3012,else__2369__auto__){
var self__ = this;
if((k3012 === "\uFDD0'x"))
{return self__.x;
} else
{if((k3012 === "\uFDD0'dom"))
{return self__.dom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,self__.__extmap,k3012,else__2369__auto__);
} else
{return null;
}
}
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2373__auto__,k__2374__auto__,G__3011){
var self__ = this;
var pred__3014 = cljs.core.identical_QMARK_;
var expr__3015 = k__2374__auto__;
if(pred__3014.call(null,"\uFDD0'x",expr__3015))
{return (new session.client.loop_creator.LoopCreator(G__3011,self__.dom,self__.__meta,self__.__extmap,null));
} else
{if(pred__3014.call(null,"\uFDD0'dom",expr__3015))
{return (new session.client.loop_creator.LoopCreator(self__.x,G__3011,self__.__meta,self__.__extmap,null));
} else
{return (new session.client.loop_creator.LoopCreator(self__.x,self__.dom,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__2374__auto__,G__3011),null));
}
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2380__auto__,writer__2381__auto__,opts__2382__auto__){
var self__ = this;
var pr_pair__2383__auto__ = (function (keyval__2384__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2381__auto__,cljs.core.pr_writer,""," ","",opts__2382__auto__,keyval__2384__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2381__auto__,pr_pair__2383__auto__,[cljs.core.str("#"),cljs.core.str("LoopCreator"),cljs.core.str("{")].join(''),", ","}",opts__2382__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'x",self__.x),cljs.core.vector.call(null,"\uFDD0'dom",self__.dom)], true),self__.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2371__auto__,entry__2372__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__2372__auto__))
{return this__2371__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2371__auto__,cljs.core._nth.call(null,entry__2372__auto__,0),cljs.core._nth.call(null,entry__2372__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2371__auto__,entry__2372__auto__);
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2378__auto__){
var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'x",self__.x),cljs.core.vector.call(null,"\uFDD0'dom",self__.dom)], true),self__.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$ = true;
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var self__ = this;
var v = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true));
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model","loop-creator"], true));
cljs.core.reset_BANG_.call(null,self__.dom,v);
return v;
});
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var self__ = this;
if(cljs.core.truth_(self__.x))
{cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,self__.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,self__.dom));
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,self__.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,self__.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,self__.dom)):null))),cljs.core.PersistentVector.fromArray(["on","click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'insert-loop","\uFDD0'id":"a","\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'position"],{"\uFDD0'position":cljs.core.ObjMap.fromObject(["\uFDD0'after"],{"\uFDD0'after":self__.x})})}));
})], true));
} else
{}
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,self__.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,self__.dom));
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,self__.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,self__.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,self__.dom)):null))),cljs.core.PersistentVector.fromArray(["on","mouseover",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"], true)),cljs.core.PersistentVector.fromArray(["toggleClass","icon-arrow-right"], true));
})], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,self__.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,self__.dom));
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,self__.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,self__.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,self__.dom)):null))),cljs.core.PersistentVector.fromArray(["on","mouseout",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"], true)),cljs.core.PersistentVector.fromArray(["toggleClass","icon-arrow-right"], true));
})], true));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2370__auto__){
var self__ = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2362__auto__,other__2363__auto__){
var self__ = this;
if(cljs.core.truth_((function (){var and__3937__auto__ = other__2363__auto__;
if(cljs.core.truth_(and__3937__auto__))
{var and__3937__auto____$1 = (this__2362__auto__.constructor === other__2363__auto__.constructor);
if(and__3937__auto____$1)
{return cljs.core.equiv_map.call(null,this__2362__auto__,other__2363__auto__);
} else
{return and__3937__auto____$1;
}
} else
{return and__3937__auto__;
}
})()))
{return true;
} else
{return false;
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2365__auto__,G__3011){
var self__ = this;
return (new session.client.loop_creator.LoopCreator(self__.x,self__.dom,G__3011,self__.__extmap,self__.__hash));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2364__auto__){
var self__ = this;
return self__.__meta;
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2375__auto__,k__2376__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'dom","\uFDD0'x"]),k__2376__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2375__auto__),self__.__meta),k__2376__auto__);
} else
{return (new session.client.loop_creator.LoopCreator(self__.x,self__.dom,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__2376__auto__)),null));
}
});
session.client.loop_creator.LoopCreator.cljs$lang$type = true;
session.client.loop_creator.LoopCreator.cljs$lang$ctorPrSeq = (function (this__2401__auto__){
return cljs.core.list.call(null,"session.client.loop-creator/LoopCreator");
});
session.client.loop_creator.LoopCreator.cljs$lang$ctorPrWriter = (function (this__2401__auto__,writer__2402__auto__){
return cljs.core._write.call(null,writer__2402__auto__,"session.client.loop-creator/LoopCreator");
});
session.client.loop_creator.__GT_LoopCreator = (function __GT_LoopCreator(x,dom){
return (new session.client.loop_creator.LoopCreator(x,dom));
});
session.client.loop_creator.map__GT_LoopCreator = (function map__GT_LoopCreator(G__3013){
return (new session.client.loop_creator.LoopCreator((new cljs.core.Keyword("\uFDD0'x")).call(null,G__3013),(new cljs.core.Keyword("\uFDD0'dom")).call(null,G__3013),null,cljs.core.dissoc.call(null,G__3013,"\uFDD0'x","\uFDD0'dom")));
});
session.client.loop_creator.LoopCreator;
