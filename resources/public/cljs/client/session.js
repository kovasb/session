goog.provide('session.client.session');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('session.client.mvc');
goog.require('session.client.loop');
goog.require('session.client.loop_creator');
session.client.session.last_loop_id = cljs.core.atom.call(null,0);
session.client.session.new_loop_id = (function new_loop_id(){
var id__7650 = cljs.core.swap_BANG_.call(null,session.client.session.last_loop_id,(function (p1__7648_SHARP_){
return (1 + p1__7648_SHARP_);
}));
fetch.remotes.remote_callback.call(null,"new-loop",cljs.core.PersistentVector.fromArray([id__7650], true),(function (x){
return x;
}));
return [cljs.core.str(id__7650)].join('');
});

/**
* @constructor
* @param {*} model
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
session.client.session.Session = (function (model,__meta,__extmap){
this.model = model;
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
session.client.session.Session.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2318__auto__){
var this__7654 = this;
var h__2192__auto____7655 = this__7654.__hash;
if(!((h__2192__auto____7655 == null)))
{return h__2192__auto____7655;
} else
{var h__2192__auto____7656 = cljs.core.hash_imap.call(null,this__2318__auto__);
this__7654.__hash = h__2192__auto____7656;
return h__2192__auto____7656;
}
});
session.client.session.Session.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2323__auto__,k__2324__auto__){
var this__7657 = this;
return this__2323__auto__.cljs$core$ILookup$_lookup$arity$3(this__2323__auto__,k__2324__auto__,null);
});
session.client.session.Session.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2325__auto__,k7652,else__2326__auto__){
var this__7658 = this;
if((k7652 === "\uFDD0'model"))
{return this__7658.model;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__7658.__extmap,k7652,else__2326__auto__);
} else
{return null;
}
}
});
session.client.session.Session.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2330__auto__,k__2331__auto__,G__7651){
var this__7659 = this;
var pred__7660__7663 = cljs.core.identical_QMARK_;
var expr__7661__7664 = k__2331__auto__;
if(pred__7660__7663.call(null,"\uFDD0'model",expr__7661__7664))
{return (new session.client.session.Session(G__7651,this__7659.__meta,this__7659.__extmap,null));
} else
{return (new session.client.session.Session(this__7659.model,this__7659.__meta,cljs.core.assoc.call(null,this__7659.__extmap,k__2331__auto__,G__7651),null));
}
});
session.client.session.Session.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2328__auto__,entry__2329__auto__){
var this__7665 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2329__auto__))
{return this__2328__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2328__auto__,cljs.core._nth.call(null,entry__2329__auto__,0),cljs.core._nth.call(null,entry__2329__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2328__auto__,entry__2329__auto__);
}
});
session.client.session.Session.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2335__auto__){
var this__7666 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'model",this__7666.model)], true),this__7666.__extmap));
});
session.client.session.Session.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2337__auto__,opts__2338__auto__){
var this__7667 = this;
var pr_pair__2339__auto____7668 = (function (keyval__2340__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2338__auto__,keyval__2340__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2339__auto____7668,[cljs.core.str("#"),cljs.core.str("Session"),cljs.core.str("{")].join(''),", ","}",opts__2338__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'model",this__7667.model)], true),this__7667.__extmap));
});
session.client.session.Session.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2327__auto__){
var this__7669 = this;
return (1 + cljs.core.count.call(null,this__7669.__extmap));
});
session.client.session.Session.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2319__auto__,other__2320__auto__){
var this__7670 = this;
if(cljs.core.truth_((function (){var and__3822__auto____7671 = other__2320__auto__;
if(cljs.core.truth_(and__3822__auto____7671))
{var and__3822__auto____7672 = (this__2319__auto__.constructor === other__2320__auto__.constructor);
if(and__3822__auto____7672)
{return cljs.core.equiv_map.call(null,this__2319__auto__,other__2320__auto__);
} else
{return and__3822__auto____7672;
}
} else
{return and__3822__auto____7671;
}
})()))
{return true;
} else
{return false;
}
});
session.client.session.Session.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2322__auto__,G__7651){
var this__7673 = this;
return (new session.client.session.Session(this__7673.model,G__7651,this__7673.__extmap,this__7673.__hash));
});
session.client.session.Session.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2321__auto__){
var this__7674 = this;
return this__7674.__meta;
});
session.client.session.Session.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2332__auto__,k__2333__auto__){
var this__7675 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'model"]),k__2333__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2332__auto__),this__7675.__meta),k__2333__auto__);
} else
{return (new session.client.session.Session(this__7675.model,this__7675.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__7675.__extmap,k__2333__auto__)),null));
}
});
session.client.session.Session.cljs$lang$type = true;
session.client.session.Session.cljs$lang$ctorPrSeq = (function (this__2357__auto__){
return cljs.core.list.call(null,"session.client.session/Session");
});
session.client.session.__GT_Session = (function __GT_Session(model){
return (new session.client.session.Session(model));
});
session.client.session.map__GT_Session = (function map__GT_Session(G__7653){
return (new session.client.session.Session((new cljs.core.Keyword("\uFDD0'model")).call(null,G__7653),null,cljs.core.dissoc.call(null,G__7653,"\uFDD0'model")));
});
session.client.session.Session;
session.client.session.load_subsession_tab = (function load_subsession_tab(x){
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",".tab-content"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7682 = cljs.core.vector_QMARK_.call(null,".tab-content");
if(or__3824__auto____7682)
{return or__3824__auto____7682;
} else
{return cljs.core.keyword_QMARK_.call(null,".tab-content");
}
})())?cljs_jquery.core.dom_create.call(null,".tab-content"):((true)?cljs_jquery.core.jquery.call(null,".tab-content"):null))),cljs.core.PersistentVector.fromArray(["html",""], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7683 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true));
if(or__3824__auto____7683)
{return or__3824__auto____7683;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)):null))),cljs.core.PersistentVector.fromArray(["appendTo",((cljs.core._EQ_.call(null,"\uFDD0'this",".tab-content"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7684 = cljs.core.vector_QMARK_.call(null,".tab-content");
if(or__3824__auto____7684)
{return or__3824__auto____7684;
} else
{return cljs.core.keyword_QMARK_.call(null,".tab-content");
}
})())?cljs_jquery.core.dom_create.call(null,".tab-content"):((true)?cljs_jquery.core.jquery.call(null,".tab-content"):null)))], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",".loop-creator"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7685 = cljs.core.vector_QMARK_.call(null,".loop-creator");
if(or__3824__auto____7685)
{return or__3824__auto____7685;
} else
{return cljs.core.keyword_QMARK_.call(null,".loop-creator");
}
})())?cljs_jquery.core.dom_create.call(null,".loop-creator"):((true)?cljs_jquery.core.jquery.call(null,".loop-creator"):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","#sessiontabs > li"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7686 = cljs.core.vector_QMARK_.call(null,"#sessiontabs > li");
if(or__3824__auto____7686)
{return or__3824__auto____7686;
} else
{return cljs.core.keyword_QMARK_.call(null,"#sessiontabs > li");
}
})())?cljs_jquery.core.dom_create.call(null,"#sessiontabs > li"):((true)?cljs_jquery.core.jquery.call(null,"#sessiontabs > li"):null))),cljs.core.PersistentVector.fromArray(["removeClass","active"], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",[cljs.core.str("#tab"),cljs.core.str(cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,x)))].join('')))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7687 = cljs.core.vector_QMARK_.call(null,[cljs.core.str("#tab"),cljs.core.str(cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,x)))].join(''));
if(or__3824__auto____7687)
{return or__3824__auto____7687;
} else
{return cljs.core.keyword_QMARK_.call(null,[cljs.core.str("#tab"),cljs.core.str(cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,x)))].join(''));
}
})())?cljs_jquery.core.dom_create.call(null,[cljs.core.str("#tab"),cljs.core.str(cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,x)))].join('')):((true)?cljs_jquery.core.jquery.call(null,[cljs.core.str("#tab"),cljs.core.str(cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,x)))].join('')):null))),cljs.core.PersistentVector.fromArray(["addClass","active"], true));
});
session.client.session.make_session_tabs = (function make_session_tabs(x){
return cljs.core.PersistentVector.fromArray(["\uFDD0'div.tabbable",cljs.core.PersistentVector.fromArray(["\uFDD0'ul#sessiontabs.nav.nav-tabs",cljs.core.map.call(null,(function (ss){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("tab"),cljs.core.str(cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,ss)))].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":[cljs.core.str("#tab"),cljs.core.str(cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,ss)))].join('')}),cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,ss))], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7689 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("tab"),cljs.core.str(cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,ss)))].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":[cljs.core.str("#tab"),cljs.core.str(cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,ss)))].join('')}),cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,ss))], true)], true));
if(or__3824__auto____7689)
{return or__3824__auto____7689;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("tab"),cljs.core.str(cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,ss)))].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":[cljs.core.str("#tab"),cljs.core.str(cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,ss)))].join('')}),cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,ss))], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("tab"),cljs.core.str(cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,ss)))].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":[cljs.core.str("#tab"),cljs.core.str(cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,ss)))].join('')}),cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,ss))], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("tab"),cljs.core.str(cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,ss)))].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":[cljs.core.str("#tab"),cljs.core.str(cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,ss)))].join('')}),cljs.core.name.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,ss))], true)], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.session.load_subsession_tab.call(null,ss);
})], true));
}),x)], true)], true);
});
session.client.session.Session.prototype.session$client$mvc$IMVC$ = true;
session.client.session.Session.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",session.client.session.make_session_tabs.call(null,(new cljs.core.Keyword("\uFDD0'subsessions")).call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,this$))),cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7690 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",session.client.session.make_session_tabs.call(null,(new cljs.core.Keyword("\uFDD0'subsessions")).call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,this$))),cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true));
if(or__3824__auto____7690)
{return or__3824__auto____7690;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",session.client.session.make_session_tabs.call(null,(new cljs.core.Keyword("\uFDD0'subsessions")).call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,this$))),cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",session.client.session.make_session_tabs.call(null,(new cljs.core.Keyword("\uFDD0'subsessions")).call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,this$))),cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",session.client.session.make_session_tabs.call(null,(new cljs.core.Keyword("\uFDD0'subsessions")).call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,this$))),cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",(new cljs.core.Keyword("\uFDD0'model")).call(null,this$)], true));
});
session.client.session.Session.prototype.session$client$mvc$IMVC$control$arity$2 = (function (this$,session_view){
return cljs.core.reset_BANG_.call(null,session.client.session.last_loop_id,(new cljs.core.Keyword("\uFDD0'last-loop-id")).call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,this$)));
});
session.client.session.Session.prototype.cljs$core$IPrintable$ = true;
session.client.session.Session.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this$,opts){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#session/session "], true),cljs.core._pr_seq.call(null,cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,this$),"\uFDD0'last-loop-id",cljs.core.deref.call(null,session.client.session.last_loop_id)),opts),"");
});
cljs.reader.register_tag_parser_BANG_.call(null,"session",(function (x){
return (new session.client.session.Session(x));
}));
