goog.provide('session.client.session');
goog.require('cljs.core');
goog.require('session.client.loop_creator');
goog.require('session.client.loop');
goog.require('session.client.mvc');
session.client.session.last_loop_id = cljs.core.atom.call(null,0);
session.client.session.new_loop_id = (function new_loop_id(){
return cljs.core.str.call(null,cljs.core.swap_BANG_.call(null,session.client.session.last_loop_id,(function (p1__50049_SHARP_){
return (1 + p1__50049_SHARP_);
})));
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
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
session.client.session.Session.prototype.cljs$core$IHash$ = true;
session.client.session.Session.prototype.cljs$core$IHash$_hash = (function (this__383__auto__){
var this__50053 = this;
return cljs.core.hash_coll.call(null,this__383__auto__);
});
session.client.session.Session.prototype.cljs$core$ILookup$ = true;
session.client.session.Session.prototype.cljs$core$ILookup$_lookup = (function() {
var G__50072 = null;
var G__50072__50073 = (function (this__388__auto__,k__389__auto__){
var this__50054 = this;
return cljs.core._lookup.call(null,this__388__auto__,k__389__auto__,null);
});
var G__50072__50074 = (function (this__390__auto__,k50051,else__391__auto__){
var this__50055 = this;
if(cljs.core.truth_((k50051 === "\uFDD0'model")))
{return this__50055.model;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.get.call(null,this__50055.__extmap,k50051,else__391__auto__);
} else
{return null;
}
}
});
G__50072 = function(this__390__auto__,k50051,else__391__auto__){
switch(arguments.length){
case  2 :
return G__50072__50073.call(this,this__390__auto__,k50051);
case  3 :
return G__50072__50074.call(this,this__390__auto__,k50051,else__391__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__50072;
})()
;
session.client.session.Session.prototype.cljs$core$IAssociative$ = true;
session.client.session.Session.prototype.cljs$core$IAssociative$_assoc = (function (this__395__auto__,k__396__auto__,G__50050){
var this__50056 = this;
var pred__50057__50060 = cljs.core.identical_QMARK_;
var expr__50058__50061 = k__396__auto__;

if(cljs.core.truth_(pred__50057__50060.call(null,"\uFDD0'model",expr__50058__50061)))
{return (new session.client.session.Session(G__50050,this__50056.__meta,this__50056.__extmap));
} else
{return (new session.client.session.Session(this__50056.model,this__50056.__meta,cljs.core.assoc.call(null,this__50056.__extmap,k__396__auto__,G__50050)));
}
});
session.client.session.Session.prototype.cljs$core$IRecord$ = true;
session.client.session.Session.prototype.cljs$core$ICollection$ = true;
session.client.session.Session.prototype.cljs$core$ICollection$_conj = (function (this__393__auto__,entry__394__auto__){
var this__50062 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__394__auto__)))
{return cljs.core._assoc.call(null,this__393__auto__,cljs.core._nth.call(null,entry__394__auto__,0),cljs.core._nth.call(null,entry__394__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__393__auto__,entry__394__auto__);
}
});
session.client.session.Session.prototype.cljs$core$ISeqable$ = true;
session.client.session.Session.prototype.cljs$core$ISeqable$_seq = (function (this__400__auto__){
var this__50063 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'model",this__50063.model)]),this__50063.__extmap));
});
session.client.session.Session.prototype.cljs$core$IPrintable$ = true;
session.client.session.Session.prototype.cljs$core$IPrintable$_pr_seq = (function (this__402__auto__,opts__403__auto__){
var this__50064 = this;
var pr_pair__404__auto____50065 = (function (keyval__405__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__403__auto__,keyval__405__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__404__auto____50065,cljs.core.str.call(null,"#","session.client.session.Session","{"),", ","}",opts__403__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'model",this__50064.model)]),this__50064.__extmap));
});
session.client.session.Session.prototype.cljs$core$ICounted$ = true;
session.client.session.Session.prototype.cljs$core$ICounted$_count = (function (this__392__auto__){
var this__50066 = this;
return (1 + cljs.core.count.call(null,this__50066.__extmap));
});
session.client.session.Session.prototype.cljs$core$IEquiv$ = true;
session.client.session.Session.prototype.cljs$core$IEquiv$_equiv = (function (this__384__auto__,other__385__auto__){
var this__50067 = this;
var and__3822__auto____50068 = (this__384__auto__.constructor === other__385__auto__.constructor);

if(cljs.core.truth_(and__3822__auto____50068))
{return cljs.core.equiv_map.call(null,this__384__auto__,other__385__auto__);
} else
{return and__3822__auto____50068;
}
});
session.client.session.Session.prototype.cljs$core$IWithMeta$ = true;
session.client.session.Session.prototype.cljs$core$IWithMeta$_with_meta = (function (this__387__auto__,G__50050){
var this__50069 = this;
return (new session.client.session.Session(this__50069.model,G__50050,this__50069.__extmap));
});
session.client.session.Session.prototype.cljs$core$IMeta$ = true;
session.client.session.Session.prototype.cljs$core$IMeta$_meta = (function (this__386__auto__){
var this__50070 = this;
return this__50070.__meta;
});
session.client.session.Session.prototype.cljs$core$IMap$ = true;
session.client.session.Session.prototype.cljs$core$IMap$_dissoc = (function (this__397__auto__,k__398__auto__){
var this__50071 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["\uFDD0'model"]),k__398__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__397__auto__),this__50071.__meta),k__398__auto__);
} else
{return (new session.client.session.Session(this__50071.model,this__50071.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__50071.__extmap,k__398__auto__))));
}
});
session.client.session.Session.cljs$core$IPrintable$_pr_seq = (function (this__429__auto__){
return cljs.core.list.call(null,"session.client.session.Session");
});
session.client.session.__GT_Session = (function __GT_Session(model){
return (new session.client.session.Session(model));
});
session.client.session.map__GT_Session = (function map__GT_Session(G__50052){
return (new session.client.session.Session("\uFDD0'model".call(null,G__50052),null,cljs.core.dissoc.call(null,G__50052,"\uFDD0'model")));
});
session.client.session.Session;
session.client.session.Session.prototype.session$client$mvc$IMVC$ = true;
session.client.session.Session.prototype.session$client$mvc$IMVC$view = (function (this$){
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.map.call(null,session.client.mvc.render,"\uFDD0'subsessions".call(null,"\uFDD0'model".call(null,this$)))])])])))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50076 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.map.call(null,session.client.mvc.render,"\uFDD0'subsessions".call(null,"\uFDD0'model".call(null,this$)))])])]));

if(cljs.core.truth_(or__3824__auto____50076))
{return or__3824__auto____50076;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.map.call(null,session.client.mvc.render,"\uFDD0'subsessions".call(null,"\uFDD0'model".call(null,this$)))])])]));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.map.call(null,session.client.mvc.render,"\uFDD0'subsessions".call(null,"\uFDD0'model".call(null,this$)))])])])):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.map.call(null,session.client.mvc.render,"\uFDD0'subsessions".call(null,"\uFDD0'model".call(null,this$)))])])])):null))),cljs.core.PersistentVector.fromArray(["data","model","\uFDD0'model".call(null,this$)]));
});
session.client.session.Session.prototype.session$client$mvc$IMVC$control = (function (this$,session_view){
return cljs.core.reset_BANG_.call(null,session.client.session.last_loop_id,"\uFDD0'last-loop-id".call(null,"\uFDD0'model".call(null,this$)));
});
session.client.session.Session.prototype.cljs$core$IPrintable$ = true;
session.client.session.Session.prototype.cljs$core$IPrintable$_pr_seq = (function (this$,opts){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#session/session "]),cljs.core._pr_seq.call(null,cljs.core.assoc.call(null,"\uFDD0'model".call(null,this$),"\uFDD0'last-loop-id",cljs.core.deref.call(null,session.client.session.last_loop_id)),opts),"");
});
