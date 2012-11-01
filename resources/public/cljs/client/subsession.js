goog.provide('session.client.subsession');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('session.client.session');
goog.require('session.client.mvc');
goog.require('session.client.loop');
goog.require('session.client.loop_creator');
session.client.subsession.ISubsession = {};
session.client.subsession.insert_new_loop = (function insert_new_loop(this$,session_view,event){
if((function (){var and__3822__auto____6391 = this$;
if(and__3822__auto____6391)
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$3;
} else
{return and__3822__auto____6391;
}
})())
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$3(this$,session_view,event);
} else
{var x__2363__auto____6392 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6393 = (session.client.subsession.insert_new_loop[goog.typeOf(x__2363__auto____6392)]);
if(or__3824__auto____6393)
{return or__3824__auto____6393;
} else
{var or__3824__auto____6394 = (session.client.subsession.insert_new_loop["_"]);
if(or__3824__auto____6394)
{return or__3824__auto____6394;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.insert-new-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
session.client.subsession.delete_loop = (function delete_loop(this$,session_view,event){
if((function (){var and__3822__auto____6399 = this$;
if(and__3822__auto____6399)
{return this$.session$client$subsession$ISubsession$delete_loop$arity$3;
} else
{return and__3822__auto____6399;
}
})())
{return this$.session$client$subsession$ISubsession$delete_loop$arity$3(this$,session_view,event);
} else
{var x__2363__auto____6400 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6401 = (session.client.subsession.delete_loop[goog.typeOf(x__2363__auto____6400)]);
if(or__3824__auto____6401)
{return or__3824__auto____6401;
} else
{var or__3824__auto____6402 = (session.client.subsession.delete_loop["_"]);
if(or__3824__auto____6402)
{return or__3824__auto____6402;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.delete-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
session.client.subsession.evaluate_loop = (function evaluate_loop(this$,session_view,event){
if((function (){var and__3822__auto____6407 = this$;
if(and__3822__auto____6407)
{return this$.session$client$subsession$ISubsession$evaluate_loop$arity$3;
} else
{return and__3822__auto____6407;
}
})())
{return this$.session$client$subsession$ISubsession$evaluate_loop$arity$3(this$,session_view,event);
} else
{var x__2363__auto____6408 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6409 = (session.client.subsession.evaluate_loop[goog.typeOf(x__2363__auto____6408)]);
if(or__3824__auto____6409)
{return or__3824__auto____6409;
} else
{var or__3824__auto____6410 = (session.client.subsession.evaluate_loop["_"]);
if(or__3824__auto____6410)
{return or__3824__auto____6410;
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
var data__6412 = cljs.reader.read_string.call(null,e.data);
return cljs.core.deref.call(null,session.client.subsession.callbacks).call(null,(new cljs.core.Keyword("\uFDD0'id")).call(null,data__6412)).call(null,(new cljs.core.Keyword("\uFDD0'data")).call(null,data__6412));
}));
session.client.subsession.response_handler = (function response_handler(event_model){
return (function (p1__6411_SHARP_){
return cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,event_model),p1__6411_SHARP_);
});
});
session.client.subsession.evaluate_clj = (function evaluate_clj(event_model){
cljs.core.swap_BANG_.call(null,session.client.subsession.callbacks,cljs.core.assoc,(new cljs.core.Keyword("\uFDD0'id")).call(null,event_model),session.client.subsession.response_handler.call(null,event_model));
return session.client.subsession.ws.send(cljs.core.pr_str.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'data","\uFDD0'id"],{"\uFDD0'op":"\uFDD0'evaluate-clj","\uFDD0'data":cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,event_model)),"\uFDD0'id":(new cljs.core.Keyword("\uFDD0'id")).call(null,event_model)})));
});
session.client.subsession.evaluate_cljs = (function evaluate_cljs(event_model){
return fetch.remotes.remote_callback.call(null,"compile-expr-string",cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,event_model)),(new cljs.core.Keyword("\uFDD0'id")).call(null,event_model)], true),(function (result){
return cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,event_model),(function (){var x__6420 = eval((new cljs.core.Keyword("\uFDD0'result")).call(null,result));
if(cljs.core.truth_(x__6420))
{return x__6420;
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
this.cljs$lang$protocol_mask$partition0$ = 536871168;
})
session.client.subsession.Subsession.cljs$lang$type = true;
session.client.subsession.Subsession.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"session.client.subsession/Subsession");
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$ = true;
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$insert_new_loop$arity$3 = (function (this$,session_view,event){
var this__6421 = this;
var event_target__6422 = event.target;
var event_model__6424 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__6422))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6423 = cljs.core.vector_QMARK_.call(null,event_target__6422);
if(or__3824__auto____6423)
{return or__3824__auto____6423;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__6422);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__6422):((true)?cljs_jquery.core.jquery.call(null,event_target__6422):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
var loop_model__6426 = (function (){var id__6425 = session.client.session.new_loop_id.call(null);
return (new session.client.loop.Loop(cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'input","\uFDD0'output"],{"\uFDD0'id":id__6425,"\uFDD0'input":cljs.core.atom.call(null,""),"\uFDD0'output":cljs.core.atom.call(null,null)})));
})();
var loop_view__6427 = session.client.mvc.render.call(null,loop_model__6426);
var session_model__6428 = this$;
if(cljs.core._EQ_.call(null,event_model__6424,"loop-creator"))
{cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,session_model__6428),(function (p1__6416_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([loop_model__6426], true),p1__6416_SHARP_));
}));
} else
{cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,session_model__6428),(function (p1__6417_SHARP_){
var vec__6429__6430 = cljs.core.split_with.call(null,(function (m){
return cljs.core.not_EQ_.call(null,m,event_model__6424);
}),p1__6417_SHARP_);
var left__6431 = cljs.core.nth.call(null,vec__6429__6430,0,null);
var right__6432 = cljs.core.nth.call(null,vec__6429__6430,1,null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,left__6431,cljs.core.PersistentVector.fromArray([event_model__6424,loop_model__6426], true),cljs.core.rest.call(null,right__6432)));
}));
}
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__6427))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6433 = cljs.core.vector_QMARK_.call(null,loop_view__6427);
if(or__3824__auto____6433)
{return or__3824__auto____6433;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__6427);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__6427):((true)?cljs_jquery.core.jquery.call(null,loop_view__6427):null))),cljs.core.PersistentVector.fromArray(["insertAfter",event_target__6422], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__6427))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6434 = cljs.core.vector_QMARK_.call(null,loop_view__6427);
if(or__3824__auto____6434)
{return or__3824__auto____6434;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__6427);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__6427):((true)?cljs_jquery.core.jquery.call(null,loop_view__6427):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"], true));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$delete_loop$arity$3 = (function (this$,session_view,event){
var this__6435 = this;
var event_target__6436 = event.target;
var event_model__6438 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__6436))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6437 = cljs.core.vector_QMARK_.call(null,event_target__6436);
if(or__3824__auto____6437)
{return or__3824__auto____6437;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__6436);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__6436):((true)?cljs_jquery.core.jquery.call(null,event_target__6436):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
var session_model__6439 = this$;
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__6436))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6440 = cljs.core.vector_QMARK_.call(null,event_target__6436);
if(or__3824__auto____6440)
{return or__3824__auto____6440;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__6436);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__6436):((true)?cljs_jquery.core.jquery.call(null,event_target__6436):null))),cljs.core.PersistentVector.fromArray(["remove"], true));
return cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,session_model__6439),(function (p1__6418_SHARP_){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (m){
return cljs.core.not_EQ_.call(null,m,event_model__6438);
}),p1__6418_SHARP_));
}));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$evaluate_loop$arity$3 = (function (this$,session_view,event){
var this__6441 = this;
var event_target__6442 = event.target;
var event_model__6444 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__6442))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6443 = cljs.core.vector_QMARK_.call(null,event_target__6442);
if(or__3824__auto____6443)
{return or__3824__auto____6443;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__6442);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__6442):((true)?cljs_jquery.core.jquery.call(null,event_target__6442):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
if(cljs.core._EQ_.call(null,"\uFDD0'cljs",(new cljs.core.Keyword("\uFDD0'type")).call(null,this$)))
{return session.client.subsession.evaluate_cljs.call(null,event_model__6444);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'clj",(new cljs.core.Keyword("\uFDD0'type")).call(null,this$)))
{return session.client.subsession.evaluate_clj.call(null,event_model__6444);
} else
{return null;
}
}
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$ = true;
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var this__6445 = this;
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__6445.model)))], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6446 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__6445.model)))], true));
if(or__3824__auto____6446)
{return or__3824__auto____6446;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__6445.model)))], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__6445.model)))], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__6445.model)))], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",this__6445.model], true));
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$control$arity$2 = (function (this$,session_view){
var this__6447 = this;
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6448 = cljs.core.vector_QMARK_.call(null,session_view);
if(or__3824__auto____6448)
{return or__3824__auto____6448;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):((true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","insert-new-loop",(function (p1__6413_SHARP_){
return session.client.subsession.insert_new_loop.call(null,this$,session_view,p1__6413_SHARP_);
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6449 = cljs.core.vector_QMARK_.call(null,session_view);
if(or__3824__auto____6449)
{return or__3824__auto____6449;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):((true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","delete-loop",(function (p1__6414_SHARP_){
return session.client.subsession.delete_loop.call(null,this$,session_view,p1__6414_SHARP_);
})], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6450 = cljs.core.vector_QMARK_.call(null,session_view);
if(or__3824__auto____6450)
{return or__3824__auto____6450;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):((true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-loop",(function (p1__6415_SHARP_){
return session.client.subsession.evaluate_loop.call(null,this$,session_view,p1__6415_SHARP_);
})], true));
});
session.client.subsession.Subsession.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__6451 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#session/subsession "], true),cljs.core._pr_seq.call(null,cljs.core.assoc.call(null,this__6451.model,"\uFDD0'loops",cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__6451.model))),opts),"");
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__6452 = this;
return this__6452.model.call(null,k);
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__6453 = this;
return this__6453.model.call(null,k,not_found);
});
session.client.subsession.Subsession;
cljs.reader.register_tag_parser_BANG_.call(null,"subsession",(function (x){
return (new session.client.subsession.Subsession(cljs.core.assoc.call(null,x,"\uFDD0'loops",cljs.core.atom.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,x)))));
}));
