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
var this__690744 = this;
var h__2192__auto____690745 = this__690744.__hash;
if(!((h__2192__auto____690745 == null)))
{return h__2192__auto____690745;
} else
{var h__2192__auto____690746 = cljs.core.hash_imap.call(null,this__2318__auto__);
this__690744.__hash = h__2192__auto____690746;
return h__2192__auto____690746;
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2323__auto__,k__2324__auto__){
var this__690747 = this;
return this__2323__auto__.cljs$core$ILookup$_lookup$arity$3(this__2323__auto__,k__2324__auto__,null);
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2325__auto__,k690742,else__2326__auto__){
var this__690748 = this;
if((k690742 === "\uFDD0'x"))
{return this__690748.x;
} else
{if((k690742 === "\uFDD0'dom"))
{return this__690748.dom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__690748.__extmap,k690742,else__2326__auto__);
} else
{return null;
}
}
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2330__auto__,k__2331__auto__,G__690741){
var this__690749 = this;
var pred__690750__690753 = cljs.core.identical_QMARK_;
var expr__690751__690754 = k__2331__auto__;
if(pred__690750__690753.call(null,"\uFDD0'x",expr__690751__690754))
{return (new session.client.loop_creator.LoopCreator(G__690741,this__690749.dom,this__690749.__meta,this__690749.__extmap,null));
} else
{if(pred__690750__690753.call(null,"\uFDD0'dom",expr__690751__690754))
{return (new session.client.loop_creator.LoopCreator(this__690749.x,G__690741,this__690749.__meta,this__690749.__extmap,null));
} else
{return (new session.client.loop_creator.LoopCreator(this__690749.x,this__690749.dom,this__690749.__meta,cljs.core.assoc.call(null,this__690749.__extmap,k__2331__auto__,G__690741),null));
}
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2328__auto__,entry__2329__auto__){
var this__690755 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2329__auto__))
{return this__2328__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2328__auto__,cljs.core._nth.call(null,entry__2329__auto__,0),cljs.core._nth.call(null,entry__2329__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2328__auto__,entry__2329__auto__);
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2335__auto__){
var this__690756 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'x",this__690756.x),cljs.core.vector.call(null,"\uFDD0'dom",this__690756.dom)], true),this__690756.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$ = true;
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var this__690757 = this;
var v__690759 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon.icon-white",""], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____690758 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon.icon-white",""], true)], true));
if(or__3824__auto____690758)
{return or__3824__auto____690758;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon.icon-white",""], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon.icon-white",""], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon.icon-white",""], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model","loop-creator"], true));
cljs.core.reset_BANG_.call(null,this__690757.dom,v__690759);
return v__690759;
});
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var this__690760 = this;
if(cljs.core.truth_(this__690760.x))
{cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__690760.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____690761 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__690760.dom));
if(or__3824__auto____690761)
{return or__3824__auto____690761;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__690760.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__690760.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__690760.dom)):null))),cljs.core.PersistentVector.fromArray(["on","click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'insert-loop","\uFDD0'id":"a","\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'position"],{"\uFDD0'position":cljs.core.ObjMap.fromObject(["\uFDD0'after"],{"\uFDD0'after":this__690760.x})})}));
})], true));
} else
{}
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__690760.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____690762 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__690760.dom));
if(or__3824__auto____690762)
{return or__3824__auto____690762;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__690760.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__690760.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__690760.dom)):null))),cljs.core.PersistentVector.fromArray(["on","mouseover",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____690763 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3824__auto____690763)
{return or__3824__auto____690763;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"], true)),cljs.core.PersistentVector.fromArray(["toggleClass","icon-arrow-right"], true));
})], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__690760.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____690764 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__690760.dom));
if(or__3824__auto____690764)
{return or__3824__auto____690764;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__690760.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__690760.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__690760.dom)):null))),cljs.core.PersistentVector.fromArray(["on","mouseout",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____690765 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3824__auto____690765)
{return or__3824__auto____690765;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"], true)),cljs.core.PersistentVector.fromArray(["toggleClass","icon-arrow-right"], true));
})], true));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2337__auto__,opts__2338__auto__){
var this__690766 = this;
var pr_pair__2339__auto____690767 = (function (keyval__2340__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2338__auto__,keyval__2340__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2339__auto____690767,[cljs.core.str("#"),cljs.core.str("LoopCreator"),cljs.core.str("{")].join(''),", ","}",opts__2338__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'x",this__690766.x),cljs.core.vector.call(null,"\uFDD0'dom",this__690766.dom)], true),this__690766.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2327__auto__){
var this__690768 = this;
return (2 + cljs.core.count.call(null,this__690768.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2319__auto__,other__2320__auto__){
var this__690769 = this;
if(cljs.core.truth_((function (){var and__3822__auto____690770 = other__2320__auto__;
if(cljs.core.truth_(and__3822__auto____690770))
{var and__3822__auto____690771 = (this__2319__auto__.constructor === other__2320__auto__.constructor);
if(and__3822__auto____690771)
{return cljs.core.equiv_map.call(null,this__2319__auto__,other__2320__auto__);
} else
{return and__3822__auto____690771;
}
} else
{return and__3822__auto____690770;
}
})()))
{return true;
} else
{return false;
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2322__auto__,G__690741){
var this__690772 = this;
return (new session.client.loop_creator.LoopCreator(this__690772.x,this__690772.dom,G__690741,this__690772.__extmap,this__690772.__hash));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2321__auto__){
var this__690773 = this;
return this__690773.__meta;
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2332__auto__,k__2333__auto__){
var this__690774 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'dom","\uFDD0'x"]),k__2333__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2332__auto__),this__690774.__meta),k__2333__auto__);
} else
{return (new session.client.loop_creator.LoopCreator(this__690774.x,this__690774.dom,this__690774.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__690774.__extmap,k__2333__auto__)),null));
}
});
session.client.loop_creator.LoopCreator.cljs$lang$type = true;
session.client.loop_creator.LoopCreator.cljs$lang$ctorPrSeq = (function (this__2357__auto__){
return cljs.core.list.call(null,"session.client.loop-creator/LoopCreator");
});
session.client.loop_creator.__GT_LoopCreator = (function __GT_LoopCreator(x,dom){
return (new session.client.loop_creator.LoopCreator(x,dom));
});
session.client.loop_creator.map__GT_LoopCreator = (function map__GT_LoopCreator(G__690743){
return (new session.client.loop_creator.LoopCreator((new cljs.core.Keyword("\uFDD0'x")).call(null,G__690743),(new cljs.core.Keyword("\uFDD0'dom")).call(null,G__690743),null,cljs.core.dissoc.call(null,G__690743,"\uFDD0'x","\uFDD0'dom")));
});
session.client.loop_creator.LoopCreator;
