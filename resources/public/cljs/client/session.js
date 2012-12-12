goog.provide('session.client.session');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('session.client.mvc');
goog.require('session.client.loop');
goog.require('session.client.loop_creator');
session.client.session.last_loop_id = cljs.core.atom.call(null,0);
session.client.session.new_loop_id = (function new_loop_id(){
var id__7677 = cljs.core.swap_BANG_.call(null,session.client.session.last_loop_id,(function (p1__7675_SHARP_){
return (1 + p1__7675_SHARP_);
}));
fetch.remotes.remote_callback.call(null,"new-loop",cljs.core.PersistentVector.fromArray([id__7677], true),(function (x){
return x;
}));
return [cljs.core.str(id__7677)].join('');
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
session.client.session.Session.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2345__auto__){
var this__7681 = this;
var h__2219__auto____7682 = this__7681.__hash;
if(!((h__2219__auto____7682 == null)))
{return h__2219__auto____7682;
} else
{var h__2219__auto____7683 = cljs.core.hash_imap.call(null,this__2345__auto__);
this__7681.__hash = h__2219__auto____7683;
return h__2219__auto____7683;
}
});
session.client.session.Session.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2350__auto__,k__2351__auto__){
var this__7684 = this;
return this__2350__auto__.cljs$core$ILookup$_lookup$arity$3(this__2350__auto__,k__2351__auto__,null);
});
session.client.session.Session.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2352__auto__,k7679,else__2353__auto__){
var this__7685 = this;
if((k7679 === "\uFDD0'model"))
{return this__7685.model;
} else
{if((k7679 === "\uFDD0'dom"))
{return this__7685.dom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__7685.__extmap,k7679,else__2353__auto__);
} else
{return null;
}
}
}
});
session.client.session.Session.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2357__auto__,k__2358__auto__,G__7678){
var this__7686 = this;
var pred__7687__7690 = cljs.core.identical_QMARK_;
var expr__7688__7691 = k__2358__auto__;
if(pred__7687__7690.call(null,"\uFDD0'model",expr__7688__7691))
{return (new session.client.session.Session(G__7678,this__7686.dom,this__7686.__meta,this__7686.__extmap,null));
} else
{if(pred__7687__7690.call(null,"\uFDD0'dom",expr__7688__7691))
{return (new session.client.session.Session(this__7686.model,G__7678,this__7686.__meta,this__7686.__extmap,null));
} else
{return (new session.client.session.Session(this__7686.model,this__7686.dom,this__7686.__meta,cljs.core.assoc.call(null,this__7686.__extmap,k__2358__auto__,G__7678),null));
}
}
});
session.client.session.Session.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2355__auto__,entry__2356__auto__){
var this__7692 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2356__auto__))
{return this__2355__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2355__auto__,cljs.core._nth.call(null,entry__2356__auto__,0),cljs.core._nth.call(null,entry__2356__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2355__auto__,entry__2356__auto__);
}
});
session.client.session.Session.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2362__auto__){
var this__7693 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'model",this__7693.model),cljs.core.vector.call(null,"\uFDD0'dom",this__7693.dom)], true),this__7693.__extmap));
});
session.client.session.Session.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2364__auto__,opts__2365__auto__){
var this__7694 = this;
var pr_pair__2366__auto____7695 = (function (keyval__2367__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2365__auto__,keyval__2367__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2366__auto____7695,[cljs.core.str("#"),cljs.core.str("Session"),cljs.core.str("{")].join(''),", ","}",opts__2365__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'model",this__7694.model),cljs.core.vector.call(null,"\uFDD0'dom",this__7694.dom)], true),this__7694.__extmap));
});
session.client.session.Session.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2354__auto__){
var this__7696 = this;
return (2 + cljs.core.count.call(null,this__7696.__extmap));
});
session.client.session.Session.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2346__auto__,other__2347__auto__){
var this__7697 = this;
if(cljs.core.truth_((function (){var and__3937__auto____7698 = other__2347__auto__;
if(cljs.core.truth_(and__3937__auto____7698))
{var and__3937__auto____7699 = (this__2346__auto__.constructor === other__2347__auto__.constructor);
if(and__3937__auto____7699)
{return cljs.core.equiv_map.call(null,this__2346__auto__,other__2347__auto__);
} else
{return and__3937__auto____7699;
}
} else
{return and__3937__auto____7698;
}
})()))
{return true;
} else
{return false;
}
});
session.client.session.Session.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2349__auto__,G__7678){
var this__7700 = this;
return (new session.client.session.Session(this__7700.model,this__7700.dom,G__7678,this__7700.__extmap,this__7700.__hash));
});
session.client.session.Session.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2348__auto__){
var this__7701 = this;
return this__7701.__meta;
});
session.client.session.Session.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2359__auto__,k__2360__auto__){
var this__7702 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'model","\uFDD0'dom"]),k__2360__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2359__auto__),this__7702.__meta),k__2360__auto__);
} else
{return (new session.client.session.Session(this__7702.model,this__7702.dom,this__7702.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__7702.__extmap,k__2360__auto__)),null));
}
});
session.client.session.Session.cljs$lang$type = true;
session.client.session.Session.cljs$lang$ctorPrSeq = (function (this__2384__auto__){
return cljs.core.list.call(null,"session.client.session/Session");
});
session.client.session.__GT_Session = (function __GT_Session(model,dom){
return (new session.client.session.Session(model,dom));
});
session.client.session.map__GT_Session = (function map__GT_Session(G__7680){
return (new session.client.session.Session((new cljs.core.Keyword("\uFDD0'model")).call(null,G__7680),(new cljs.core.Keyword("\uFDD0'dom")).call(null,G__7680),null,cljs.core.dissoc.call(null,G__7680,"\uFDD0'model","\uFDD0'dom")));
});
session.client.session.Session;
session.client.session.load_subsession_tab = (function load_subsession_tab(x){
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7706 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true));
if(or__3939__auto____7706)
{return or__3939__auto____7706;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)):null))),cljs.core.PersistentVector.fromArray(["appendTo",((cljs.core._EQ_.call(null,"\uFDD0'this",".tab-content"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7707 = cljs.core.vector_QMARK_.call(null,".tab-content");
if(or__3939__auto____7707)
{return or__3939__auto____7707;
} else
{return cljs.core.keyword_QMARK_.call(null,".tab-content");
}
})())?cljs_jquery.core.dom_create.call(null,".tab-content"):((true)?cljs_jquery.core.jquery.call(null,".tab-content"):null)))], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",".loop-container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7708 = cljs.core.vector_QMARK_.call(null,".loop-container");
if(or__3939__auto____7708)
{return or__3939__auto____7708;
} else
{return cljs.core.keyword_QMARK_.call(null,".loop-container");
}
})())?cljs_jquery.core.dom_create.call(null,".loop-container"):((true)?cljs_jquery.core.jquery.call(null,".loop-container"):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"], true));
});
session.client.session.Session.prototype.session$client$mvc$IMVC$ = true;
session.client.session.Session.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7709 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true));
if(or__3939__auto____7709)
{return or__3939__auto____7709;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",(new cljs.core.Keyword("\uFDD0'model")).call(null,this$)], true));
});
session.client.session.Session.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
return cljs.core.reset_BANG_.call(null,session.client.session.last_loop_id,(new cljs.core.Keyword("\uFDD0'last-loop-id")).call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,this$)));
});
