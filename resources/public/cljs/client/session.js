goog.provide('session.client.session');
goog.require('cljs.core');
goog.require('session.client.loop_creator');
goog.require('session.client.loop');
goog.require('session.client.mvc');
session.client.session.last_loop_id = cljs.core.atom.call(null,0);
session.client.session.new_loop_id = (function new_loop_id(){
return cljs.core.str.call(null,cljs.core.swap_BANG_.call(null,session.client.session.last_loop_id,(function (p1__30144_SHARP_){
return (1 + p1__30144_SHARP_);
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
var this__30148 = this;
return cljs.core.hash_coll.call(null,this__383__auto__);
});
session.client.session.Session.prototype.cljs$core$ILookup$ = true;
session.client.session.Session.prototype.cljs$core$ILookup$_lookup = (function() {
var G__30167 = null;
var G__30167__30168 = (function (this__388__auto__,k__389__auto__){
var this__30149 = this;
return cljs.core._lookup.call(null,this__388__auto__,k__389__auto__,null);
});
var G__30167__30169 = (function (this__390__auto__,k30146,else__391__auto__){
var this__30150 = this;
if(cljs.core.truth_((k30146 === "\uFDD0'model")))
{return this__30150.model;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.get.call(null,this__30150.__extmap,k30146,else__391__auto__);
} else
{return null;
}
}
});
G__30167 = function(this__390__auto__,k30146,else__391__auto__){
switch(arguments.length){
case  2 :
return G__30167__30168.call(this,this__390__auto__,k30146);
case  3 :
return G__30167__30169.call(this,this__390__auto__,k30146,else__391__auto__);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30167;
})()
;
session.client.session.Session.prototype.cljs$core$IAssociative$ = true;
session.client.session.Session.prototype.cljs$core$IAssociative$_assoc = (function (this__395__auto__,k__396__auto__,G__30145){
var this__30151 = this;
var pred__30152__30155 = cljs.core.identical_QMARK_;
var expr__30153__30156 = k__396__auto__;

if(cljs.core.truth_(pred__30152__30155.call(null,"\uFDD0'model",expr__30153__30156)))
{return (new session.client.session.Session(G__30145,this__30151.__meta,this__30151.__extmap));
} else
{return (new session.client.session.Session(this__30151.model,this__30151.__meta,cljs.core.assoc.call(null,this__30151.__extmap,k__396__auto__,G__30145)));
}
});
session.client.session.Session.prototype.cljs$core$IRecord$ = true;
session.client.session.Session.prototype.cljs$core$ICollection$ = true;
session.client.session.Session.prototype.cljs$core$ICollection$_conj = (function (this__393__auto__,entry__394__auto__){
var this__30157 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry__394__auto__)))
{return cljs.core._assoc.call(null,this__393__auto__,cljs.core._nth.call(null,entry__394__auto__,0),cljs.core._nth.call(null,entry__394__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__393__auto__,entry__394__auto__);
}
});
session.client.session.Session.prototype.cljs$core$ISeqable$ = true;
session.client.session.Session.prototype.cljs$core$ISeqable$_seq = (function (this__400__auto__){
var this__30158 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'model",this__30158.model)]),this__30158.__extmap));
});
session.client.session.Session.prototype.cljs$core$IPrintable$ = true;
session.client.session.Session.prototype.cljs$core$IPrintable$_pr_seq = (function (this__402__auto__,opts__403__auto__){
var this__30159 = this;
var pr_pair__404__auto____30160 = (function (keyval__405__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__403__auto__,keyval__405__auto__);
});

return cljs.core.pr_sequential.call(null,pr_pair__404__auto____30160,cljs.core.str.call(null,"#","session.client.session.Session","{"),", ","}",opts__403__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'model",this__30159.model)]),this__30159.__extmap));
});
session.client.session.Session.prototype.cljs$core$ICounted$ = true;
session.client.session.Session.prototype.cljs$core$ICounted$_count = (function (this__392__auto__){
var this__30161 = this;
return (1 + cljs.core.count.call(null,this__30161.__extmap));
});
session.client.session.Session.prototype.cljs$core$IEquiv$ = true;
session.client.session.Session.prototype.cljs$core$IEquiv$_equiv = (function (this__384__auto__,other__385__auto__){
var this__30162 = this;
var and__3822__auto____30163 = (this__384__auto__.constructor === other__385__auto__.constructor);

if(cljs.core.truth_(and__3822__auto____30163))
{return cljs.core.equiv_map.call(null,this__384__auto__,other__385__auto__);
} else
{return and__3822__auto____30163;
}
});
session.client.session.Session.prototype.cljs$core$IWithMeta$ = true;
session.client.session.Session.prototype.cljs$core$IWithMeta$_with_meta = (function (this__387__auto__,G__30145){
var this__30164 = this;
return (new session.client.session.Session(this__30164.model,G__30145,this__30164.__extmap));
});
session.client.session.Session.prototype.cljs$core$IMeta$ = true;
session.client.session.Session.prototype.cljs$core$IMeta$_meta = (function (this__386__auto__){
var this__30165 = this;
return this__30165.__meta;
});
session.client.session.Session.prototype.cljs$core$IMap$ = true;
session.client.session.Session.prototype.cljs$core$IMap$_dissoc = (function (this__397__auto__,k__398__auto__){
var this__30166 = this;
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,cljs.core.set(["\uFDD0'model"]),k__398__auto__)))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),this__397__auto__),this__30166.__meta),k__398__auto__);
} else
{return (new session.client.session.Session(this__30166.model,this__30166.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__30166.__extmap,k__398__auto__))));
}
});
session.client.session.Session.cljs$core$IPrintable$_pr_seq = (function (this__429__auto__){
return cljs.core.list.call(null,"session.client.session.Session");
});
session.client.session.__GT_Session = (function __GT_Session(model){
return (new session.client.session.Session(model));
});
session.client.session.map__GT_Session = (function map__GT_Session(G__30147){
return (new session.client.session.Session("\uFDD0'model".call(null,G__30147),null,cljs.core.dissoc.call(null,G__30147,"\uFDD0'model")));
});
session.client.session.Session;
session.client.session.Session.prototype.session$client$mvc$IMVC$ = true;
session.client.session.Session.prototype.session$client$mvc$IMVC$view = (function (this$){
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.map.call(null,session.client.mvc.render,"\uFDD0'subsessions".call(null,"\uFDD0'model".call(null,this$)))])])])))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30171 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.session.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.map.call(null,session.client.mvc.render,"\uFDD0'subsessions".call(null,"\uFDD0'model".call(null,this$)))])])]));

if(cljs.core.truth_(or__3824__auto____30171))
{return or__3824__auto____30171;
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
