goog.provide('session.client.subsession');
goog.require('cljs.core');
goog.require('session.client.loop_creator');
goog.require('session.client.loop');
goog.require('session.client.mvc');
session.client.subsession.ISubsession = {};
session.client.subsession.insert_new_loop = (function insert_new_loop(this$,session_view,event){
if(cljs.core.truth_((function (){var and__3822__auto____3354 = this$;

if(cljs.core.truth_(and__3822__auto____3354))
{return this$.session$client$subsession$ISubsession$insert_new_loop;
} else
{return and__3822__auto____3354;
}
})()))
{return this$.session$client$subsession$ISubsession$insert_new_loop(this$,session_view,event);
} else
{return (function (){var or__3824__auto____3355 = (session.client.subsession.insert_new_loop[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3355))
{return or__3824__auto____3355;
} else
{var or__3824__auto____3356 = (session.client.subsession.insert_new_loop["_"]);

if(cljs.core.truth_(or__3824__auto____3356))
{return or__3824__auto____3356;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.insert-new-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
session.client.subsession.delete_loop = (function delete_loop(this$,session_view,event){
if(cljs.core.truth_((function (){var and__3822__auto____3357 = this$;

if(cljs.core.truth_(and__3822__auto____3357))
{return this$.session$client$subsession$ISubsession$delete_loop;
} else
{return and__3822__auto____3357;
}
})()))
{return this$.session$client$subsession$ISubsession$delete_loop(this$,session_view,event);
} else
{return (function (){var or__3824__auto____3358 = (session.client.subsession.delete_loop[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3358))
{return or__3824__auto____3358;
} else
{var or__3824__auto____3359 = (session.client.subsession.delete_loop["_"]);

if(cljs.core.truth_(or__3824__auto____3359))
{return or__3824__auto____3359;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.delete-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});

/**
* @constructor
*/
session.client.subsession.Subsession = (function (model){
this.model = model;
})
session.client.subsession.Subsession.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"session.client.subsession.Subsession");
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$ = true;
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$insert_new_loop = (function (this$,session_view,event){
var this__3360 = this;
var event_target__3361 = event.target;
var event_model__3363 = cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",event_target__3361))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3362 = cljs.core.vector_QMARK_.call(null,event_target__3361);

if(cljs.core.truth_(or__3824__auto____3362))
{return or__3824__auto____3362;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__3361);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__3361):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,event_target__3361):null))),cljs.core.PersistentVector.fromArray(["data","model"]));
var loop_model__3365 = (function (){var id__3364 = session.client.loop.new_loop_id.call(null);

return (new session.client.loop.Loop(cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'input","\uFDD0'output"],{"\uFDD0'id":id__3364,"\uFDD0'input":cljs.core.atom.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'loop",id__3364])),"\uFDD0'output":cljs.core.atom.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'loop",id__3364]))})));
})();
var loop_view__3366 = session.client.mvc.render.call(null,loop_model__3365);
var session_model__3367 = this$;

if(cljs.core.truth_(cljs.core._EQ_.call(null,event_model__3363,cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]))))
{cljs.core.swap_BANG_.call(null,"\uFDD0'loops".call(null,session_model__3367),(function (p1__3351_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([loop_model__3365]),p1__3351_SHARP_));
}));
} else
{cljs.core.swap_BANG_.call(null,"\uFDD0'loops".call(null,session_model__3367),(function (p1__3352_SHARP_){
var vec__3368__3369 = cljs.core.split_with.call(null,(function (m){
return cljs.core.not_EQ_.call(null,m,event_model__3363);
}),p1__3352_SHARP_);
var left__3370 = cljs.core.nth.call(null,vec__3368__3369,0,null);
var right__3371 = cljs.core.nth.call(null,vec__3368__3369,1,null);

return cljs.core.vec.call(null,cljs.core.concat.call(null,left__3370,cljs.core.PersistentVector.fromArray([event_model__3363,loop_model__3365]),cljs.core.rest.call(null,right__3371)));
}));
}
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__3366))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3372 = cljs.core.vector_QMARK_.call(null,loop_view__3366);

if(cljs.core.truth_(or__3824__auto____3372))
{return or__3824__auto____3372;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__3366);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__3366):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,loop_view__3366):null))),cljs.core.PersistentVector.fromArray(["insertAfter",event_target__3361]));
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__3366))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3373 = cljs.core.vector_QMARK_.call(null,loop_view__3366);

if(cljs.core.truth_(or__3824__auto____3373))
{return or__3824__auto____3373;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__3366);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__3366):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,loop_view__3366):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"]));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$delete_loop = (function (this$,session_view,event){
var this__3374 = this;
var event_target__3375 = event.target;
var event_model__3377 = cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",event_target__3375))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3376 = cljs.core.vector_QMARK_.call(null,event_target__3375);

if(cljs.core.truth_(or__3824__auto____3376))
{return or__3824__auto____3376;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__3375);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__3375):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,event_target__3375):null))),cljs.core.PersistentVector.fromArray(["data","model"]));
var session_model__3378 = this$;

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",event_target__3375))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3379 = cljs.core.vector_QMARK_.call(null,event_target__3375);

if(cljs.core.truth_(or__3824__auto____3379))
{return or__3824__auto____3379;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__3375);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__3375):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,event_target__3375):null))),cljs.core.PersistentVector.fromArray(["remove"]));
return cljs.core.swap_BANG_.call(null,"\uFDD0'loops".call(null,session_model__3378),(function (p1__3353_SHARP_){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (m){
return cljs.core.not_EQ_.call(null,m,event_model__3377);
}),p1__3353_SHARP_));
}));
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$ = true;
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$view = (function (this$){
var this__3380 = this;
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",(function (){var v__3381 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

session.client.mvc.control2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})),v__3381);
return v__3381;
})(),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,"\uFDD0'loops".call(null,this__3380.model)))])))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3383 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",(function (){var v__3382 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

session.client.mvc.control2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})),v__3382);
return v__3382;
})(),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,"\uFDD0'loops".call(null,this__3380.model)))]));

if(cljs.core.truth_(or__3824__auto____3383))
{return or__3824__auto____3383;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",(function (){var v__3384 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

session.client.mvc.control2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})),v__3384);
return v__3384;
})(),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,"\uFDD0'loops".call(null,this__3380.model)))]));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",(function (){var v__3385 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

session.client.mvc.control2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})),v__3385);
return v__3385;
})(),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,"\uFDD0'loops".call(null,this__3380.model)))])):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",(function (){var v__3386 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

session.client.mvc.control2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})),v__3386);
return v__3386;
})(),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,"\uFDD0'loops".call(null,this__3380.model)))])):null))),cljs.core.PersistentVector.fromArray(["data","model",this__3380.model]));
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$control = (function (this$,session_view){
var this__3387 = this;
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3388 = cljs.core.vector_QMARK_.call(null,session_view);

if(cljs.core.truth_(or__3824__auto____3388))
{return or__3824__auto____3388;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","insert-new-loop",(function (p1__3349_SHARP_){
return session.client.subsession.insert_new_loop.call(null,this$,session_view,p1__3349_SHARP_);
})]));
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3389 = cljs.core.vector_QMARK_.call(null,session_view);

if(cljs.core.truth_(or__3824__auto____3389))
{return or__3824__auto____3389;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","delete-loop",(function (p1__3350_SHARP_){
return session.client.subsession.delete_loop.call(null,this$,session_view,p1__3350_SHARP_);
})]));
});
session.client.subsession.Subsession.prototype.cljs$core$IPrintable$ = true;
session.client.subsession.Subsession.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3390 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#session/subsession "]),cljs.core._pr_seq.call(null,cljs.core.assoc.call(null,this__3390.model,"\uFDD0'loops",cljs.core.deref.call(null,"\uFDD0'loops".call(null,this__3390.model))),opts),"");
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$ = true;
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3393 = null;
var G__3393__3394 = (function (o,k){
var this__3391 = this;
return this__3391.model.call(null,k);
});
var G__3393__3395 = (function (o,k,not_found){
var this__3392 = this;
return this__3392.model.call(null,k,not_found);
});
G__3393 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3393__3394.call(this,o,k);
case  3 :
return G__3393__3395.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3393;
})()
;
session.client.subsession.Subsession;
