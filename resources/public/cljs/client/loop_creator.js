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
session.client.loop_creator.LoopCreator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2318__auto__){
var this__7170 = this;
var h__2192__auto____7171 = this__7170.__hash;
if(!((h__2192__auto____7171 == null)))
{return h__2192__auto____7171;
} else
{var h__2192__auto____7172 = cljs.core.hash_imap.call(null,this__2318__auto__);
this__7170.__hash = h__2192__auto____7172;
return h__2192__auto____7172;
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2323__auto__,k__2324__auto__){
var this__7173 = this;
return this__2323__auto__.cljs$core$ILookup$_lookup$arity$3(this__2323__auto__,k__2324__auto__,null);
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2325__auto__,k7168,else__2326__auto__){
var this__7174 = this;
if((k7168 === "\uFDD0'x"))
{return this__7174.x;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__7174.__extmap,k7168,else__2326__auto__);
} else
{return null;
}
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2330__auto__,k__2331__auto__,G__7167){
var this__7175 = this;
var pred__7176__7179 = cljs.core.identical_QMARK_;
var expr__7177__7180 = k__2331__auto__;
if(pred__7176__7179.call(null,"\uFDD0'x",expr__7177__7180))
{return (new session.client.loop_creator.LoopCreator(G__7167,this__7175.__meta,this__7175.__extmap,null));
} else
{return (new session.client.loop_creator.LoopCreator(this__7175.x,this__7175.__meta,cljs.core.assoc.call(null,this__7175.__extmap,k__2331__auto__,G__7167),null));
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2328__auto__,entry__2329__auto__){
var this__7181 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2329__auto__))
{return this__2328__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2328__auto__,cljs.core._nth.call(null,entry__2329__auto__,0),cljs.core._nth.call(null,entry__2329__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2328__auto__,entry__2329__auto__);
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2335__auto__){
var this__7182 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'x",this__7182.x)], true),this__7182.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$ = true;
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var this__7183 = this;
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;height:18px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7184 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;height:18px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true));
if(or__3824__auto____7184)
{return or__3824__auto____7184;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;height:18px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;height:18px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-creator",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;height:18px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.new-loop-icon",""], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model","loop-creator"], true));
});
session.client.loop_creator.LoopCreator.prototype.session$client$mvc$IMVC$control$arity$2 = (function (this$,viewobject){
var this__7185 = this;
if(cljs.core.truth_(this__7185.x))
{cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7186 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____7186)
{return or__3824__auto____7186;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","click",(function (){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7187 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3824__auto____7187)
{return or__3824__auto____7187;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["trigger","insert-new-loop"], true));
})], true));
} else
{}
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7188 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____7188)
{return or__3824__auto____7188;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","mouseover",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7189 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3824__auto____7189)
{return or__3824__auto____7189;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"], true)),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"], true));
})], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7190 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____7190)
{return or__3824__auto____7190;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","mouseout",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7191 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3824__auto____7191)
{return or__3824__auto____7191;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"], true)),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"], true));
})], true));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2337__auto__,opts__2338__auto__){
var this__7192 = this;
var pr_pair__2339__auto____7193 = (function (keyval__2340__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2338__auto__,keyval__2340__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2339__auto____7193,[cljs.core.str("#"),cljs.core.str("LoopCreator"),cljs.core.str("{")].join(''),", ","}",opts__2338__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'x",this__7192.x)], true),this__7192.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2327__auto__){
var this__7194 = this;
return (1 + cljs.core.count.call(null,this__7194.__extmap));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2319__auto__,other__2320__auto__){
var this__7195 = this;
if(cljs.core.truth_((function (){var and__3822__auto____7196 = other__2320__auto__;
if(cljs.core.truth_(and__3822__auto____7196))
{var and__3822__auto____7197 = (this__2319__auto__.constructor === other__2320__auto__.constructor);
if(and__3822__auto____7197)
{return cljs.core.equiv_map.call(null,this__2319__auto__,other__2320__auto__);
} else
{return and__3822__auto____7197;
}
} else
{return and__3822__auto____7196;
}
})()))
{return true;
} else
{return false;
}
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2322__auto__,G__7167){
var this__7198 = this;
return (new session.client.loop_creator.LoopCreator(this__7198.x,G__7167,this__7198.__extmap,this__7198.__hash));
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2321__auto__){
var this__7199 = this;
return this__7199.__meta;
});
session.client.loop_creator.LoopCreator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2332__auto__,k__2333__auto__){
var this__7200 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'x"]),k__2333__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2332__auto__),this__7200.__meta),k__2333__auto__);
} else
{return (new session.client.loop_creator.LoopCreator(this__7200.x,this__7200.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__7200.__extmap,k__2333__auto__)),null));
}
});
session.client.loop_creator.LoopCreator.cljs$lang$type = true;
session.client.loop_creator.LoopCreator.cljs$lang$ctorPrSeq = (function (this__2357__auto__){
return cljs.core.list.call(null,"session.client.loop-creator/LoopCreator");
});
session.client.loop_creator.__GT_LoopCreator = (function __GT_LoopCreator(x){
return (new session.client.loop_creator.LoopCreator(x));
});
session.client.loop_creator.map__GT_LoopCreator = (function map__GT_LoopCreator(G__7169){
return (new session.client.loop_creator.LoopCreator((new cljs.core.Keyword("\uFDD0'x")).call(null,G__7169),null,cljs.core.dissoc.call(null,G__7169,"\uFDD0'x")));
});
session.client.loop_creator.LoopCreator;
