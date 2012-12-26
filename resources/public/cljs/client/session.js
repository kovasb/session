goog.provide('session.client.session');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('session.client.mvc');
goog.require('session.client.loop');
goog.require('session.client.loop_creator');

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
var this__7639 = this;
var h__2225__auto____7640 = this__7639.__hash;
if(!((h__2225__auto____7640 == null)))
{return h__2225__auto____7640;
} else
{var h__2225__auto____7641 = cljs.core.hash_imap.call(null,this__2351__auto__);
this__7639.__hash = h__2225__auto____7641;
return h__2225__auto____7641;
}
});
session.client.session.Session.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2356__auto__,k__2357__auto__){
var this__7642 = this;
return this__2356__auto__.cljs$core$ILookup$_lookup$arity$3(this__2356__auto__,k__2357__auto__,null);
});
session.client.session.Session.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2358__auto__,k7637,else__2359__auto__){
var this__7643 = this;
if((k7637 === "\uFDD0'model"))
{return this__7643.model;
} else
{if((k7637 === "\uFDD0'dom"))
{return this__7643.dom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__7643.__extmap,k7637,else__2359__auto__);
} else
{return null;
}
}
}
});
session.client.session.Session.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2363__auto__,k__2364__auto__,G__7636){
var this__7644 = this;
var pred__7645__7648 = cljs.core.identical_QMARK_;
var expr__7646__7649 = k__2364__auto__;
if(pred__7645__7648.call(null,"\uFDD0'model",expr__7646__7649))
{return (new session.client.session.Session(G__7636,this__7644.dom,this__7644.__meta,this__7644.__extmap,null));
} else
{if(pred__7645__7648.call(null,"\uFDD0'dom",expr__7646__7649))
{return (new session.client.session.Session(this__7644.model,G__7636,this__7644.__meta,this__7644.__extmap,null));
} else
{return (new session.client.session.Session(this__7644.model,this__7644.dom,this__7644.__meta,cljs.core.assoc.call(null,this__7644.__extmap,k__2364__auto__,G__7636),null));
}
}
});
session.client.session.Session.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2361__auto__,entry__2362__auto__){
var this__7650 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2362__auto__))
{return this__2361__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2361__auto__,cljs.core._nth.call(null,entry__2362__auto__,0),cljs.core._nth.call(null,entry__2362__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2361__auto__,entry__2362__auto__);
}
});
session.client.session.Session.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2368__auto__){
var this__7651 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'model",this__7651.model),cljs.core.vector.call(null,"\uFDD0'dom",this__7651.dom)], true),this__7651.__extmap));
});
session.client.session.Session.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2370__auto__,opts__2371__auto__){
var this__7652 = this;
var pr_pair__2372__auto____7653 = (function (keyval__2373__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2371__auto__,keyval__2373__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2372__auto____7653,[cljs.core.str("#"),cljs.core.str("Session"),cljs.core.str("{")].join(''),", ","}",opts__2371__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'model",this__7652.model),cljs.core.vector.call(null,"\uFDD0'dom",this__7652.dom)], true),this__7652.__extmap));
});
session.client.session.Session.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2360__auto__){
var this__7654 = this;
return (2 + cljs.core.count.call(null,this__7654.__extmap));
});
session.client.session.Session.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2352__auto__,other__2353__auto__){
var this__7655 = this;
if(cljs.core.truth_((function (){var and__3937__auto____7656 = other__2353__auto__;
if(cljs.core.truth_(and__3937__auto____7656))
{var and__3937__auto____7657 = (this__2352__auto__.constructor === other__2353__auto__.constructor);
if(and__3937__auto____7657)
{return cljs.core.equiv_map.call(null,this__2352__auto__,other__2353__auto__);
} else
{return and__3937__auto____7657;
}
} else
{return and__3937__auto____7656;
}
})()))
{return true;
} else
{return false;
}
});
session.client.session.Session.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2355__auto__,G__7636){
var this__7658 = this;
return (new session.client.session.Session(this__7658.model,this__7658.dom,G__7636,this__7658.__extmap,this__7658.__hash));
});
session.client.session.Session.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2354__auto__){
var this__7659 = this;
return this__7659.__meta;
});
session.client.session.Session.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2365__auto__,k__2366__auto__){
var this__7660 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'model","\uFDD0'dom"]),k__2366__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2365__auto__),this__7660.__meta),k__2366__auto__);
} else
{return (new session.client.session.Session(this__7660.model,this__7660.dom,this__7660.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__7660.__extmap,k__2366__auto__)),null));
}
});
session.client.session.Session.cljs$lang$type = true;
session.client.session.Session.cljs$lang$ctorPrSeq = (function (this__2390__auto__){
return cljs.core.list.call(null,"session.client.session/Session");
});
session.client.session.__GT_Session = (function __GT_Session(model,dom){
return (new session.client.session.Session(model,dom));
});
session.client.session.map__GT_Session = (function map__GT_Session(G__7638){
return (new session.client.session.Session((new cljs.core.Keyword("\uFDD0'model")).call(null,G__7638),(new cljs.core.Keyword("\uFDD0'dom")).call(null,G__7638),null,cljs.core.dissoc.call(null,G__7638,"\uFDD0'model","\uFDD0'dom")));
});
session.client.session.Session;
session.client.session.render_session = (function render_session(x){
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7664 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)], true)], true));
if(or__3939__auto____7664)
{return or__3939__auto____7664;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)], true)], true)):null))),cljs.core.PersistentVector.fromArray(["appendTo",((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7665 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3939__auto____7665)
{return or__3939__auto____7665;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):((true)?cljs_jquery.core.jquery.call(null,"body > .container"):null)))], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",".loop-container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7666 = cljs.core.vector_QMARK_.call(null,".loop-container");
if(or__3939__auto____7666)
{return or__3939__auto____7666;
} else
{return cljs.core.keyword_QMARK_.call(null,".loop-container");
}
})())?cljs_jquery.core.dom_create.call(null,".loop-container"):((true)?cljs_jquery.core.jquery.call(null,".loop-container"):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"], true));
});
