goog.provide('session.client.subsession');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('session.client.session');
goog.require('session.client.mvc');
goog.require('session.client.loop');
goog.require('session.client.loop_creator');
session.client.subsession.ISubsession = {};
session.client.subsession.insert_new_loop = (function insert_new_loop(this$,session_view,event){
if((function (){var and__3822__auto____7587 = this$;
if(and__3822__auto____7587)
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$3;
} else
{return and__3822__auto____7587;
}
})())
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$3(this$,session_view,event);
} else
{var x__2363__auto____7588 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7589 = (session.client.subsession.insert_new_loop[goog.typeOf(x__2363__auto____7588)]);
if(or__3824__auto____7589)
{return or__3824__auto____7589;
} else
{var or__3824__auto____7590 = (session.client.subsession.insert_new_loop["_"]);
if(or__3824__auto____7590)
{return or__3824__auto____7590;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.insert-new-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
session.client.subsession.delete_loop = (function delete_loop(this$,session_view,event){
if((function (){var and__3822__auto____7595 = this$;
if(and__3822__auto____7595)
{return this$.session$client$subsession$ISubsession$delete_loop$arity$3;
} else
{return and__3822__auto____7595;
}
})())
{return this$.session$client$subsession$ISubsession$delete_loop$arity$3(this$,session_view,event);
} else
{var x__2363__auto____7596 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7597 = (session.client.subsession.delete_loop[goog.typeOf(x__2363__auto____7596)]);
if(or__3824__auto____7597)
{return or__3824__auto____7597;
} else
{var or__3824__auto____7598 = (session.client.subsession.delete_loop["_"]);
if(or__3824__auto____7598)
{return or__3824__auto____7598;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.delete-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
session.client.subsession.evaluate_loop = (function evaluate_loop(this$,session_view,event){
if((function (){var and__3822__auto____7603 = this$;
if(and__3822__auto____7603)
{return this$.session$client$subsession$ISubsession$evaluate_loop$arity$3;
} else
{return and__3822__auto____7603;
}
})())
{return this$.session$client$subsession$ISubsession$evaluate_loop$arity$3(this$,session_view,event);
} else
{var x__2363__auto____7604 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7605 = (session.client.subsession.evaluate_loop[goog.typeOf(x__2363__auto____7604)]);
if(or__3824__auto____7605)
{return or__3824__auto____7605;
} else
{var or__3824__auto____7606 = (session.client.subsession.evaluate_loop["_"]);
if(or__3824__auto____7606)
{return or__3824__auto____7606;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.evaluate-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
session.client.subsession.callbacks = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
session.client.subsession.ws = (new WebSocket("ws://localhost:8090/service"));
(session.client.subsession.ws["onmessage"] = (function (e){
var data__7608 = cljs.reader.read_string.call(null,e.data);
return cljs.core.deref.call(null,session.client.subsession.callbacks).call(null,(new cljs.core.Keyword("\uFDD0'id")).call(null,data__7608)).call(null,(new cljs.core.Keyword("\uFDD0'data")).call(null,data__7608));
}));
session.client.subsession.response_handler = (function response_handler(event_model){
return (function (p1__7607_SHARP_){
return cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,event_model),p1__7607_SHARP_);
});
});
session.client.subsession.evaluate_clj = (function evaluate_clj(event_model){
cljs.core.swap_BANG_.call(null,session.client.subsession.callbacks,cljs.core.assoc,(new cljs.core.Keyword("\uFDD0'id")).call(null,event_model),session.client.subsession.response_handler.call(null,event_model));
return session.client.subsession.ws.send(cljs.core.pr_str.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'data","\uFDD0'id"],{"\uFDD0'op":"\uFDD0'evaluate-clj","\uFDD0'data":cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,event_model)),"\uFDD0'id":(new cljs.core.Keyword("\uFDD0'id")).call(null,event_model)})));
});
session.client.subsession.evaluate_cljs = (function evaluate_cljs(event_model){
return fetch.remotes.remote_callback.call(null,"compile-expr-string",cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,event_model)),(new cljs.core.Keyword("\uFDD0'id")).call(null,event_model)], true),(function (result){
return cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,event_model),(function (){var x__7616 = eval((new cljs.core.Keyword("\uFDD0'result")).call(null,result));
if(cljs.core.truth_(x__7616))
{return x__7616;
} else
{return null;
}
})());
}));
});

/**
* @constructor
*/
session.client.subsession.Subsession = (function (model){
this.model = model;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 256;
})
session.client.subsession.Subsession.cljs$lang$type = true;
session.client.subsession.Subsession.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"session.client.subsession/Subsession");
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$ = true;
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$insert_new_loop$arity$3 = (function (this$,session_view,event){
var this__7617 = this;
var event_target__7618 = event.target;
var event_model__7620 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__7618))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7619 = cljs.core.vector_QMARK_.call(null,event_target__7618);
if(or__3824__auto____7619)
{return or__3824__auto____7619;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__7618);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__7618):((true)?cljs_jquery.core.jquery.call(null,event_target__7618):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
var loop_model__7622 = (function (){var id__7621 = session.client.session.new_loop_id.call(null);
return (new session.client.loop.Loop(cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'input","\uFDD0'output"],{"\uFDD0'id":id__7621,"\uFDD0'input":cljs.core.atom.call(null,""),"\uFDD0'output":cljs.core.atom.call(null,null)})));
})();
var loop_view__7623 = session.client.mvc.render.call(null,loop_model__7622);
var session_model__7624 = this$;
if(cljs.core._EQ_.call(null,event_model__7620,"loop-creator"))
{cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,session_model__7624),(function (p1__7612_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([loop_model__7622], true),p1__7612_SHARP_));
}));
} else
{cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,session_model__7624),(function (p1__7613_SHARP_){
var vec__7625__7626 = cljs.core.split_with.call(null,(function (m){
return cljs.core.not_EQ_.call(null,m,event_model__7620);
}),p1__7613_SHARP_);
var left__7627 = cljs.core.nth.call(null,vec__7625__7626,0,null);
var right__7628 = cljs.core.nth.call(null,vec__7625__7626,1,null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,left__7627,cljs.core.PersistentVector.fromArray([event_model__7620,loop_model__7622], true),cljs.core.rest.call(null,right__7628)));
}));
}
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__7623))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7629 = cljs.core.vector_QMARK_.call(null,loop_view__7623);
if(or__3824__auto____7629)
{return or__3824__auto____7629;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__7623);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__7623):((true)?cljs_jquery.core.jquery.call(null,loop_view__7623):null))),cljs.core.PersistentVector.fromArray(["insertAfter",event_target__7618], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__7623))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7630 = cljs.core.vector_QMARK_.call(null,loop_view__7623);
if(or__3824__auto____7630)
{return or__3824__auto____7630;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__7623);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__7623):((true)?cljs_jquery.core.jquery.call(null,loop_view__7623):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"], true));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$delete_loop$arity$3 = (function (this$,session_view,event){
var this__7631 = this;
var event_target__7632 = event.target;
var event_model__7634 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__7632))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7633 = cljs.core.vector_QMARK_.call(null,event_target__7632);
if(or__3824__auto____7633)
{return or__3824__auto____7633;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__7632);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__7632):((true)?cljs_jquery.core.jquery.call(null,event_target__7632):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
var session_model__7635 = this$;
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__7632))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7636 = cljs.core.vector_QMARK_.call(null,event_target__7632);
if(or__3824__auto____7636)
{return or__3824__auto____7636;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__7632);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__7632):((true)?cljs_jquery.core.jquery.call(null,event_target__7632):null))),cljs.core.PersistentVector.fromArray(["remove"], true));
return cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,session_model__7635),(function (p1__7614_SHARP_){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (m){
return cljs.core.not_EQ_.call(null,m,event_model__7634);
}),p1__7614_SHARP_));
}));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$evaluate_loop$arity$3 = (function (this$,session_view,event){
var this__7637 = this;
var event_target__7638 = event.target;
var event_model__7640 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__7638))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7639 = cljs.core.vector_QMARK_.call(null,event_target__7638);
if(or__3824__auto____7639)
{return or__3824__auto____7639;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__7638);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__7638):((true)?cljs_jquery.core.jquery.call(null,event_target__7638):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
return session.client.subsession.evaluate_clj.call(null,event_model__7640);
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$ = true;
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var this__7641 = this;
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__7641.model)))], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7642 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__7641.model)))], true));
if(or__3824__auto____7642)
{return or__3824__auto____7642;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__7641.model)))], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__7641.model)))], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__7641.model)))], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",this__7641.model], true));
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$control$arity$2 = (function (this$,session_view){
var this__7643 = this;
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7644 = cljs.core.vector_QMARK_.call(null,session_view);
if(or__3824__auto____7644)
{return or__3824__auto____7644;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):((true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","insert-new-loop",(function (p1__7609_SHARP_){
return session.client.subsession.insert_new_loop.call(null,this$,session_view,p1__7609_SHARP_);
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7645 = cljs.core.vector_QMARK_.call(null,session_view);
if(or__3824__auto____7645)
{return or__3824__auto____7645;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):((true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","delete-loop",(function (p1__7610_SHARP_){
return session.client.subsession.delete_loop.call(null,this$,session_view,p1__7610_SHARP_);
})], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7646 = cljs.core.vector_QMARK_.call(null,session_view);
if(or__3824__auto____7646)
{return or__3824__auto____7646;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):((true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-loop",(function (p1__7611_SHARP_){
return session.client.subsession.evaluate_loop.call(null,this$,session_view,p1__7611_SHARP_);
})], true));
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__7647 = this;
return this__7647.model.call(null,k);
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__7648 = this;
return this__7648.model.call(null,k,not_found);
});
session.client.subsession.Subsession;
