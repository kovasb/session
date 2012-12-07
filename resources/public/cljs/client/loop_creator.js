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
var this__7175 = this;
var h__2192__auto____7176 = this__7175.__hash;
if(!((h__2192__auto____7176 == null)))
{return h__2192__auto____7176;
} else
{var h__2192__auto____7177 = cljs.core.hash_imap.call(null,this__2318__auto__);
this__7175.__hash = h__2192__auto____7177;
return h__2192__auto____7177;
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2323__auto__,k__2324__auto__){
var this__7178 = this;
return this__2323__auto__.cljs$core$ILookup$_lookup$arity$3(this__2323__auto__,k__2324__auto__,null);
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2325__auto__,k7173,else__2326__auto__){
var this__7179 = this;
if((k7173 === "\uFDD0'x"))
{return this__7179.x;
} else
{if((k7173 === "\uFDD0'dom"))
{return this__7179.dom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__7179.__extmap,k7173,else__2326__auto__);
} else
{return null;
}
}
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2330__auto__,k__2331__auto__,G__7172){
var this__7180 = this;
var pred__7181__7184 = cljs.core.identical_QMARK_;
var expr__7182__7185 = k__2331__auto__;
if(pred__7181__7184.call(null,"\uFDD0'x",expr__7182__7185))
{return (new session.client.loop_creator.LoopCreator(G__7172,this__7180.dom,this__7180.__meta,this__7180.__extmap,null));
} else
{if(pred__7181__7184.call(null,"\uFDD0'dom",expr__7182__7185))
{return (new session.client.loop_creator.LoopCreator(this__7180.x,G__7172,this__7180.__meta,this__7180.__extmap,null));
} else
{return (new session.client.loop_creator.LoopCreator(this__7180.x,this__7180.dom,this__7180.__meta,cljs.core.assoc.call(null,this__7180.__extmap,k__2331__auto__,G__7172),null));
}
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2328__auto__,entry__2329__auto__){
var this__7186 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2329__auto__))
{return this__2328__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2328__auto__,cljs.core._nth.call(null,entry__2329__auto__,0),cljs.core._nth.call(null,entry__2329__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2328__auto__,entry__2329__auto__);
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2335__auto__){
var this__7187 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'x",this__7187.x),cljs.core.vector.call(null,"\uFDD0'dom",this__7187.dom)], true),this__7187.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$ = true;
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var this__7188 = this;
var v__7190 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon.icon-white",""], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7189 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon.icon-white",""], true)], true));
if(or__3824__auto____7189)
{return or__3824__auto____7189;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon.icon-white",""], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon.icon-white",""], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:20px;height:18px;margin-top:5px;margin-bottom:5px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon.icon-white",""], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model","loop-creator"], true));
cljs.core.reset_BANG_.call(null,this__7188.dom,v__7190);
return v__7190;
});
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var this__7191 = this;
if(cljs.core.truth_(this__7191.x))
{cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__7191.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7192 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__7191.dom));
if(or__3824__auto____7192)
{return or__3824__auto____7192;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__7191.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__7191.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__7191.dom)):null))),cljs.core.PersistentVector.fromArray(["on","click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'insert-loop","\uFDD0'id":"a","\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'position"],{"\uFDD0'position":cljs.core.ObjMap.fromObject(["\uFDD0'after"],{"\uFDD0'after":this__7191.x})})}));
})], true));
} else
{}
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__7191.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7193 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__7191.dom));
if(or__3824__auto____7193)
{return or__3824__auto____7193;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__7191.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__7191.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__7191.dom)):null))),cljs.core.PersistentVector.fromArray(["on","mouseover",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7194 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3824__auto____7194)
{return or__3824__auto____7194;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"], true)),cljs.core.PersistentVector.fromArray(["toggleClass","icon-arrow-right"], true));
})], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.deref.call(null,this__7191.dom)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7195 = cljs.core.vector_QMARK_.call(null,cljs.core.deref.call(null,this__7191.dom));
if(or__3824__auto____7195)
{return or__3824__auto____7195;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.deref.call(null,this__7191.dom));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.deref.call(null,this__7191.dom)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.deref.call(null,this__7191.dom)):null))),cljs.core.PersistentVector.fromArray(["on","mouseout",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7196 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3824__auto____7196)
{return or__3824__auto____7196;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"], true)),cljs.core.PersistentVector.fromArray(["toggleClass","icon-arrow-right"], true));
})], true));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2337__auto__,opts__2338__auto__){
var this__7197 = this;
var pr_pair__2339__auto____7198 = (function (keyval__2340__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2338__auto__,keyval__2340__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2339__auto____7198,[cljs.core.str("#"),cljs.core.str("LoopCreator"),cljs.core.str("{")].join(''),", ","}",opts__2338__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'x",this__7197.x),cljs.core.vector.call(null,"\uFDD0'dom",this__7197.dom)], true),this__7197.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2327__auto__){
var this__7199 = this;
return (2 + cljs.core.count.call(null,this__7199.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2319__auto__,other__2320__auto__){
var this__7200 = this;
if(cljs.core.truth_((function (){var and__3822__auto____7201 = other__2320__auto__;
if(cljs.core.truth_(and__3822__auto____7201))
{var and__3822__auto____7202 = (this__2319__auto__.constructor === other__2320__auto__.constructor);
if(and__3822__auto____7202)
{return cljs.core.equiv_map.call(null,this__2319__auto__,other__2320__auto__);
} else
{return and__3822__auto____7202;
}
} else
{return and__3822__auto____7201;
}
})()))
{return true;
} else
{return false;
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2322__auto__,G__7172){
var this__7203 = this;
return (new session.client.loop_creator.LoopCreator(this__7203.x,this__7203.dom,G__7172,this__7203.__extmap,this__7203.__hash));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2321__auto__){
var this__7204 = this;
return this__7204.__meta;
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2332__auto__,k__2333__auto__){
var this__7205 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'dom","\uFDD0'x"]),k__2333__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2332__auto__),this__7205.__meta),k__2333__auto__);
} else
{return (new session.client.loop_creator.LoopCreator(this__7205.x,this__7205.dom,this__7205.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__7205.__extmap,k__2333__auto__)),null));
}
});
session.client.loop_creator.LoopCreator.cljs$lang$type = true;
session.client.loop_creator.LoopCreator.cljs$lang$ctorPrSeq = (function (this__2357__auto__){
return cljs.core.list.call(null,"session.client.loop-creator/LoopCreator");
});
session.client.loop_creator.__GT_LoopCreator = (function __GT_LoopCreator(x,dom){
return (new session.client.loop_creator.LoopCreator(x,dom));
});
session.client.loop_creator.map__GT_LoopCreator = (function map__GT_LoopCreator(G__7174){
return (new session.client.loop_creator.LoopCreator((new cljs.core.Keyword("\uFDD0'x")).call(null,G__7174),(new cljs.core.Keyword("\uFDD0'dom")).call(null,G__7174),null,cljs.core.dissoc.call(null,G__7174,"\uFDD0'x","\uFDD0'dom")));
});
session.client.loop_creator.LoopCreator;
