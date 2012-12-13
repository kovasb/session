goog.provide('session.client.session');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('session.client.mvc');
goog.require('session.client.loop');
goog.require('session.client.loop_creator');
session.client.session.last_loop_id = cljs.core.atom.call(null,0);
session.client.session.new_loop_id = (function new_loop_id(){
var id__7660 = cljs.core.swap_BANG_.call(null,session.client.session.last_loop_id,(function (p1__7658_SHARP_){
return (1 + p1__7658_SHARP_);
}));
fetch.remotes.remote_callback.call(null,"new-loop",cljs.core.PersistentVector.fromArray([id__7660], true),(function (x){
return x;
}));
return [cljs.core.str(id__7660)].join('');
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
session.client.session.Session.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2351__auto__){
var this__7664 = this;
var h__2225__auto____7665 = this__7664.__hash;
if(!((h__2225__auto____7665 == null)))
{return h__2225__auto____7665;
} else
{var h__2225__auto____7666 = cljs.core.hash_imap.call(null,this__2351__auto__);
this__7664.__hash = h__2225__auto____7666;
return h__2225__auto____7666;
}
});
session.client.session.Session.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2356__auto__,k__2357__auto__){
var this__7667 = this;
return this__2356__auto__.cljs$core$ILookup$_lookup$arity$3(this__2356__auto__,k__2357__auto__,null);
});
session.client.session.Session.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2358__auto__,k7662,else__2359__auto__){
var this__7668 = this;
if((k7662 === "\uFDD0'model"))
{return this__7668.model;
} else
{if((k7662 === "\uFDD0'dom"))
{return this__7668.dom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__7668.__extmap,k7662,else__2359__auto__);
} else
{return null;
}
}
}
});
session.client.session.Session.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2363__auto__,k__2364__auto__,G__7661){
var this__7669 = this;
var pred__7670__7673 = cljs.core.identical_QMARK_;
var expr__7671__7674 = k__2364__auto__;
if(pred__7670__7673.call(null,"\uFDD0'model",expr__7671__7674))
{return (new session.client.session.Session(G__7661,this__7669.dom,this__7669.__meta,this__7669.__extmap,null));
} else
{if(pred__7670__7673.call(null,"\uFDD0'dom",expr__7671__7674))
{return (new session.client.session.Session(this__7669.model,G__7661,this__7669.__meta,this__7669.__extmap,null));
} else
{return (new session.client.session.Session(this__7669.model,this__7669.dom,this__7669.__meta,cljs.core.assoc.call(null,this__7669.__extmap,k__2364__auto__,G__7661),null));
}
}
});
session.client.session.Session.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2361__auto__,entry__2362__auto__){
var this__7675 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2362__auto__))
{return this__2361__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2361__auto__,cljs.core._nth.call(null,entry__2362__auto__,0),cljs.core._nth.call(null,entry__2362__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2361__auto__,entry__2362__auto__);
}
});
session.client.session.Session.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2368__auto__){
var this__7676 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'model",this__7676.model),cljs.core.vector.call(null,"\uFDD0'dom",this__7676.dom)], true),this__7676.__extmap));
});
session.client.session.Session.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2370__auto__,opts__2371__auto__){
var this__7677 = this;
var pr_pair__2372__auto____7678 = (function (keyval__2373__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2371__auto__,keyval__2373__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2372__auto____7678,[cljs.core.str("#"),cljs.core.str("Session"),cljs.core.str("{")].join(''),", ","}",opts__2371__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'model",this__7677.model),cljs.core.vector.call(null,"\uFDD0'dom",this__7677.dom)], true),this__7677.__extmap));
});
session.client.session.Session.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2360__auto__){
var this__7679 = this;
return (2 + cljs.core.count.call(null,this__7679.__extmap));
});
session.client.session.Session.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2352__auto__,other__2353__auto__){
var this__7680 = this;
if(cljs.core.truth_((function (){var and__3937__auto____7681 = other__2353__auto__;
if(cljs.core.truth_(and__3937__auto____7681))
{var and__3937__auto____7682 = (this__2352__auto__.constructor === other__2353__auto__.constructor);
if(and__3937__auto____7682)
{return cljs.core.equiv_map.call(null,this__2352__auto__,other__2353__auto__);
} else
{return and__3937__auto____7682;
}
} else
{return and__3937__auto____7681;
}
})()))
{return true;
} else
{return false;
}
});
session.client.session.Session.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2355__auto__,G__7661){
var this__7683 = this;
return (new session.client.session.Session(this__7683.model,this__7683.dom,G__7661,this__7683.__extmap,this__7683.__hash));
});
session.client.session.Session.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2354__auto__){
var this__7684 = this;
return this__7684.__meta;
});
session.client.session.Session.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2365__auto__,k__2366__auto__){
var this__7685 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'model","\uFDD0'dom"]),k__2366__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2365__auto__),this__7685.__meta),k__2366__auto__);
} else
{return (new session.client.session.Session(this__7685.model,this__7685.dom,this__7685.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__7685.__extmap,k__2366__auto__)),null));
}
});
session.client.session.Session.cljs$lang$type = true;
session.client.session.Session.cljs$lang$ctorPrSeq = (function (this__2390__auto__){
return cljs.core.list.call(null,"session.client.session/Session");
});
session.client.session.__GT_Session = (function __GT_Session(model,dom){
return (new session.client.session.Session(model,dom));
});
session.client.session.map__GT_Session = (function map__GT_Session(G__7663){
return (new session.client.session.Session((new cljs.core.Keyword("\uFDD0'model")).call(null,G__7663),(new cljs.core.Keyword("\uFDD0'dom")).call(null,G__7663),null,cljs.core.dissoc.call(null,G__7663,"\uFDD0'model","\uFDD0'dom")));
});
session.client.session.Session;
session.client.session.load_subsession_tab = (function load_subsession_tab(x){
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7689 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true));
if(or__3939__auto____7689)
{return or__3939__auto____7689;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)):null))),cljs.core.PersistentVector.fromArray(["appendTo",((cljs.core._EQ_.call(null,"\uFDD0'this",".tab-content"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7690 = cljs.core.vector_QMARK_.call(null,".tab-content");
if(or__3939__auto____7690)
{return or__3939__auto____7690;
} else
{return cljs.core.keyword_QMARK_.call(null,".tab-content");
}
})())?cljs_jquery.core.dom_create.call(null,".tab-content"):((true)?cljs_jquery.core.jquery.call(null,".tab-content"):null)))], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",".loop-container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7691 = cljs.core.vector_QMARK_.call(null,".loop-container");
if(or__3939__auto____7691)
{return or__3939__auto____7691;
} else
{return cljs.core.keyword_QMARK_.call(null,".loop-container");
}
})())?cljs_jquery.core.dom_create.call(null,".loop-container"):((true)?cljs_jquery.core.jquery.call(null,".loop-container"):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"], true));
});
session.client.session.Session.prototype.session$client$mvc$IMVC$ = true;
session.client.session.Session.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7692 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true));
if(or__3939__auto____7692)
{return or__3939__auto____7692;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",(new cljs.core.Keyword("\uFDD0'model")).call(null,this$)], true));
});
session.client.session.Session.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
return cljs.core.reset_BANG_.call(null,session.client.session.last_loop_id,(new cljs.core.Keyword("\uFDD0'last-loop-id")).call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,this$)));
});
