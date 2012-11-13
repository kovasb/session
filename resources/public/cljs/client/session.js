goog.provide('session.client.session');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('session.client.mvc');
goog.require('session.client.loop');
goog.require('session.client.loop_creator');
session.client.session.last_loop_id = cljs.core.atom.call(null,0);
session.client.session.new_loop_id = (function new_loop_id(){
var id__240265 = cljs.core.swap_BANG_.call(null,session.client.session.last_loop_id,(function (p1__240263_SHARP_){
return (1 + p1__240263_SHARP_);
}));
fetch.remotes.remote_callback.call(null,"new-loop",cljs.core.PersistentVector.fromArray([id__240265], true),(function (x){
return x;
}));
return [cljs.core.str(id__240265)].join('');
});

/**
* @constructor
* @param {*} model
* @param {*} dom
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
session.client.session.Session = (function (model,dom,__meta,__extmap){
this.model = model;
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
session.client.session.Session.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2318__auto__){
var this__240269 = this;
var h__2192__auto____240270 = this__240269.__hash;
if(!((h__2192__auto____240270 == null)))
{return h__2192__auto____240270;
} else
{var h__2192__auto____240271 = cljs.core.hash_imap.call(null,this__2318__auto__);
this__240269.__hash = h__2192__auto____240271;
return h__2192__auto____240271;
}
});
session.client.session.Session.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2323__auto__,k__2324__auto__){
var this__240272 = this;
return this__2323__auto__.cljs$core$ILookup$_lookup$arity$3(this__2323__auto__,k__2324__auto__,null);
});
session.client.session.Session.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2325__auto__,k240267,else__2326__auto__){
var this__240273 = this;
if((k240267 === "\uFDD0'model"))
{return this__240273.model;
} else
{if((k240267 === "\uFDD0'dom"))
{return this__240273.dom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__240273.__extmap,k240267,else__2326__auto__);
} else
{return null;
}
}
}
});
session.client.session.Session.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2330__auto__,k__2331__auto__,G__240266){
var this__240274 = this;
var pred__240275__240278 = cljs.core.identical_QMARK_;
var expr__240276__240279 = k__2331__auto__;
if(pred__240275__240278.call(null,"\uFDD0'model",expr__240276__240279))
{return (new session.client.session.Session(G__240266,this__240274.dom,this__240274.__meta,this__240274.__extmap,null));
} else
{if(pred__240275__240278.call(null,"\uFDD0'dom",expr__240276__240279))
{return (new session.client.session.Session(this__240274.model,G__240266,this__240274.__meta,this__240274.__extmap,null));
} else
{return (new session.client.session.Session(this__240274.model,this__240274.dom,this__240274.__meta,cljs.core.assoc.call(null,this__240274.__extmap,k__2331__auto__,G__240266),null));
}
}
});
session.client.session.Session.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2328__auto__,entry__2329__auto__){
var this__240280 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2329__auto__))
{return this__2328__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2328__auto__,cljs.core._nth.call(null,entry__2329__auto__,0),cljs.core._nth.call(null,entry__2329__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2328__auto__,entry__2329__auto__);
}
});
session.client.session.Session.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2335__auto__){
var this__240281 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'model",this__240281.model),cljs.core.vector.call(null,"\uFDD0'dom",this__240281.dom)], true),this__240281.__extmap));
});
session.client.session.Session.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2337__auto__,opts__2338__auto__){
var this__240282 = this;
var pr_pair__2339__auto____240283 = (function (keyval__2340__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2338__auto__,keyval__2340__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2339__auto____240283,[cljs.core.str("#"),cljs.core.str("Session"),cljs.core.str("{")].join(''),", ","}",opts__2338__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'model",this__240282.model),cljs.core.vector.call(null,"\uFDD0'dom",this__240282.dom)], true),this__240282.__extmap));
});
session.client.session.Session.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2327__auto__){
var this__240284 = this;
return (2 + cljs.core.count.call(null,this__240284.__extmap));
});
session.client.session.Session.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2319__auto__,other__2320__auto__){
var this__240285 = this;
if(cljs.core.truth_((function (){var and__3822__auto____240286 = other__2320__auto__;
if(cljs.core.truth_(and__3822__auto____240286))
{var and__3822__auto____240287 = (this__2319__auto__.constructor === other__2320__auto__.constructor);
if(and__3822__auto____240287)
{return cljs.core.equiv_map.call(null,this__2319__auto__,other__2320__auto__);
} else
{return and__3822__auto____240287;
}
} else
{return and__3822__auto____240286;
}
})()))
{return true;
} else
{return false;
}
});
session.client.session.Session.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2322__auto__,G__240266){
var this__240288 = this;
return (new session.client.session.Session(this__240288.model,this__240288.dom,G__240266,this__240288.__extmap,this__240288.__hash));
});
session.client.session.Session.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2321__auto__){
var this__240289 = this;
return this__240289.__meta;
});
session.client.session.Session.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2332__auto__,k__2333__auto__){
var this__240290 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'model","\uFDD0'dom"]),k__2333__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2332__auto__),this__240290.__meta),k__2333__auto__);
} else
{return (new session.client.session.Session(this__240290.model,this__240290.dom,this__240290.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__240290.__extmap,k__2333__auto__)),null));
}
});
session.client.session.Session.cljs$lang$type = true;
session.client.session.Session.cljs$lang$ctorPrSeq = (function (this__2357__auto__){
return cljs.core.list.call(null,"session.client.session/Session");
});
session.client.session.__GT_Session = (function __GT_Session(model,dom){
return (new session.client.session.Session(model,dom));
});
session.client.session.map__GT_Session = (function map__GT_Session(G__240268){
return (new session.client.session.Session((new cljs.core.Keyword("\uFDD0'model")).call(null,G__240268),(new cljs.core.Keyword("\uFDD0'dom")).call(null,G__240268),null,cljs.core.dissoc.call(null,G__240268,"\uFDD0'model","\uFDD0'dom")));
});
session.client.session.Session;
session.client.session.load_subsession_tab = (function load_subsession_tab(x){
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____240294 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true));
if(or__3824__auto____240294)
{return or__3824__auto____240294;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)):null))),cljs.core.PersistentVector.fromArray(["appendTo",((cljs.core._EQ_.call(null,"\uFDD0'this",".tab-content"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____240295 = cljs.core.vector_QMARK_.call(null,".tab-content");
if(or__3824__auto____240295)
{return or__3824__auto____240295;
} else
{return cljs.core.keyword_QMARK_.call(null,".tab-content");
}
})())?cljs_jquery.core.dom_create.call(null,".tab-content"):((true)?cljs_jquery.core.jquery.call(null,".tab-content"):null)))], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",".loop-container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____240296 = cljs.core.vector_QMARK_.call(null,".loop-container");
if(or__3824__auto____240296)
{return or__3824__auto____240296;
} else
{return cljs.core.keyword_QMARK_.call(null,".loop-container");
}
})())?cljs_jquery.core.dom_create.call(null,".loop-container"):((true)?cljs_jquery.core.jquery.call(null,".loop-container"):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"], true));
});
session.client.session.Session.prototype.session$client$mvc$IMVC$ = true;
session.client.session.Session.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____240297 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true));
if(or__3824__auto____240297)
{return or__3824__auto____240297;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",(new cljs.core.Keyword("\uFDD0'model")).call(null,this$)], true));
});
session.client.session.Session.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
return cljs.core.reset_BANG_.call(null,session.client.session.last_loop_id,(new cljs.core.Keyword("\uFDD0'last-loop-id")).call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,this$)));
});
