goog.provide('session.client.session');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('session.client.mvc');
goog.require('session.client.loop');
goog.require('session.client.loop_creator');
session.client.session.last_loop_id = cljs.core.atom.call(null,0);
session.client.session.new_loop_id = (function new_loop_id(){
var id = cljs.core.swap_BANG_.call(null,session.client.session.last_loop_id,(function (p1__3101_SHARP_){
return (1 + p1__3101_SHARP_);
}));
fetch.remotes.remote_callback.call(null,"new-loop",cljs.core.PersistentVector.fromArray([id], true),(function (x){
return x;
}));
return [cljs.core.str(id)].join('');
});

goog.provide('session.client.session.Session');

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
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
session.client.session.Session.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2361__auto__){
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
session.client.session.Session.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2366__auto__,k__2367__auto__){
var self__ = this;
return this__2366__auto__.cljs$core$ILookup$_lookup$arity$3(this__2366__auto__,k__2367__auto__,null);
});
session.client.session.Session.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2368__auto__,k3103,else__2369__auto__){
var self__ = this;
if((k3103 === "\uFDD0'model"))
{return self__.model;
} else
{if((k3103 === "\uFDD0'dom"))
{return self__.dom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,self__.__extmap,k3103,else__2369__auto__);
} else
{return null;
}
}
}
});
session.client.session.Session.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2373__auto__,k__2374__auto__,G__3102){
var self__ = this;
var pred__3105 = cljs.core.identical_QMARK_;
var expr__3106 = k__2374__auto__;
if(pred__3105.call(null,"\uFDD0'model",expr__3106))
{return (new session.client.session.Session(G__3102,self__.dom,self__.__meta,self__.__extmap,null));
} else
{if(pred__3105.call(null,"\uFDD0'dom",expr__3106))
{return (new session.client.session.Session(self__.model,G__3102,self__.__meta,self__.__extmap,null));
} else
{return (new session.client.session.Session(self__.model,self__.dom,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__2374__auto__,G__3102),null));
}
}
});
session.client.session.Session.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2380__auto__,writer__2381__auto__,opts__2382__auto__){
var self__ = this;
var pr_pair__2383__auto__ = (function (keyval__2384__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2381__auto__,cljs.core.pr_writer,""," ","",opts__2382__auto__,keyval__2384__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2381__auto__,pr_pair__2383__auto__,[cljs.core.str("#"),cljs.core.str("Session"),cljs.core.str("{")].join(''),", ","}",opts__2382__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'model",self__.model),cljs.core.vector.call(null,"\uFDD0'dom",self__.dom)], true),self__.__extmap));
});
session.client.session.Session.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2371__auto__,entry__2372__auto__){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry__2372__auto__))
{return this__2371__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2371__auto__,cljs.core._nth.call(null,entry__2372__auto__,0),cljs.core._nth.call(null,entry__2372__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2371__auto__,entry__2372__auto__);
}
});
session.client.session.Session.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2378__auto__){
var self__ = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'model",self__.model),cljs.core.vector.call(null,"\uFDD0'dom",self__.dom)], true),self__.__extmap));
});
session.client.session.Session.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2370__auto__){
var self__ = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});
session.client.session.Session.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2362__auto__,other__2363__auto__){
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
session.client.session.Session.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2365__auto__,G__3102){
var self__ = this;
return (new session.client.session.Session(self__.model,self__.dom,G__3102,self__.__extmap,self__.__hash));
});
session.client.session.Session.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2364__auto__){
var self__ = this;
return self__.__meta;
});
session.client.session.Session.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2375__auto__,k__2376__auto__){
var self__ = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'model","\uFDD0'dom"]),k__2376__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2375__auto__),self__.__meta),k__2376__auto__);
} else
{return (new session.client.session.Session(self__.model,self__.dom,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__2376__auto__)),null));
}
});
session.client.session.Session.cljs$lang$type = true;
session.client.session.Session.cljs$lang$ctorPrSeq = (function (this__2401__auto__){
return cljs.core.list.call(null,"session.client.session/Session");
});
session.client.session.Session.cljs$lang$ctorPrWriter = (function (this__2401__auto__,writer__2402__auto__){
return cljs.core._write.call(null,writer__2402__auto__,"session.client.session/Session");
});
session.client.session.__GT_Session = (function __GT_Session(model,dom){
return (new session.client.session.Session(model,dom));
});
session.client.session.map__GT_Session = (function map__GT_Session(G__3104){
return (new session.client.session.Session((new cljs.core.Keyword("\uFDD0'model")).call(null,G__3104),(new cljs.core.Keyword("\uFDD0'dom")).call(null,G__3104),null,cljs.core.dissoc.call(null,G__3104,"\uFDD0'model","\uFDD0'dom")));
});
session.client.session.Session;
session.client.session.load_subsession_tab = (function load_subsession_tab(x){
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true));
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tab-pane",session.client.mvc.render.call(null,x)], true)):null))),cljs.core.PersistentVector.fromArray(["appendTo",((cljs.core._EQ_.call(null,"\uFDD0'this",".tab-content"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,".tab-content");
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,".tab-content");
}
})())?cljs_jquery.core.dom_create.call(null,".tab-content"):((true)?cljs_jquery.core.jquery.call(null,".tab-content"):null)))], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",".loop-container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,".loop-container");
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,".loop-container");
}
})())?cljs_jquery.core.dom_create.call(null,".loop-container"):((true)?cljs_jquery.core.jquery.call(null,".loop-container"):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"], true));
});
session.client.session.Session.prototype.session$client$mvc$IMVC$ = true;
session.client.session.Session.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true));
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.tab-content",""], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",(new cljs.core.Keyword("\uFDD0'model")).call(null,this$)], true));
});
session.client.session.Session.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
return cljs.core.reset_BANG_.call(null,session.client.session.last_loop_id,(new cljs.core.Keyword("\uFDD0'last-loop-id")).call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,this$)));
});
