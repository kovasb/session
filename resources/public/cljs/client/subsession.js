goog.provide('session.client.subsession');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('session.client.session');
goog.require('session.client.mvc');
goog.require('session.client.loop');
goog.require('session.client.loop_creator');
session.client.subsession.ISubsession = {};
session.client.subsession.insert_new_loop = (function insert_new_loop(this$,session_view,event){
if((function (){var and__3822__auto____21142 = this$;
if(and__3822__auto____21142)
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$3;
} else
{return and__3822__auto____21142;
}
})())
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$3(this$,session_view,event);
} else
{var x__2363__auto____21143 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____21144 = (session.client.subsession.insert_new_loop[goog.typeOf(x__2363__auto____21143)]);
if(or__3824__auto____21144)
{return or__3824__auto____21144;
} else
{var or__3824__auto____21145 = (session.client.subsession.insert_new_loop["_"]);
if(or__3824__auto____21145)
{return or__3824__auto____21145;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.insert-new-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
session.client.subsession.delete_loop = (function delete_loop(this$,session_view,event){
if((function (){var and__3822__auto____21150 = this$;
if(and__3822__auto____21150)
{return this$.session$client$subsession$ISubsession$delete_loop$arity$3;
} else
{return and__3822__auto____21150;
}
})())
{return this$.session$client$subsession$ISubsession$delete_loop$arity$3(this$,session_view,event);
} else
{var x__2363__auto____21151 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____21152 = (session.client.subsession.delete_loop[goog.typeOf(x__2363__auto____21151)]);
if(or__3824__auto____21152)
{return or__3824__auto____21152;
} else
{var or__3824__auto____21153 = (session.client.subsession.delete_loop["_"]);
if(or__3824__auto____21153)
{return or__3824__auto____21153;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.delete-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
session.client.subsession.evaluate_loop = (function evaluate_loop(this$,session_view,event){
if((function (){var and__3822__auto____21158 = this$;
if(and__3822__auto____21158)
{return this$.session$client$subsession$ISubsession$evaluate_loop$arity$3;
} else
{return and__3822__auto____21158;
}
})())
{return this$.session$client$subsession$ISubsession$evaluate_loop$arity$3(this$,session_view,event);
} else
{var x__2363__auto____21159 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____21160 = (session.client.subsession.evaluate_loop[goog.typeOf(x__2363__auto____21159)]);
if(or__3824__auto____21160)
{return or__3824__auto____21160;
} else
{var or__3824__auto____21161 = (session.client.subsession.evaluate_loop["_"]);
if(or__3824__auto____21161)
{return or__3824__auto____21161;
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
var data__21163 = cljs.reader.read_string.call(null,e.data);
alert(cljs.core.pr_str.call(null,data__21163));
return cljs.core.deref.call(null,session.client.subsession.callbacks).call(null,(new cljs.core.Keyword("\uFDD0'id")).call(null,data__21163)).call(null,(new cljs.core.Keyword("\uFDD0'data")).call(null,data__21163));
}));
session.client.subsession.response_handler = (function response_handler(event_model){
return (function (p1__21162_SHARP_){
return cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,event_model),p1__21162_SHARP_);
});
});
session.client.subsession.evaluate_clj = (function evaluate_clj(event_model){
cljs.core.swap_BANG_.call(null,session.client.subsession.callbacks,cljs.core.assoc,(new cljs.core.Keyword("\uFDD0'id")).call(null,event_model),session.client.subsession.response_handler.call(null,event_model));
return session.client.subsession.ws.send(cljs.core.pr_str.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'data","\uFDD0'id"],{"\uFDD0'op":"\uFDD0'evaluate-clj","\uFDD0'data":cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,event_model)),"\uFDD0'id":(new cljs.core.Keyword("\uFDD0'id")).call(null,event_model)})));
});
session.client.subsession.evaluate_cljs = (function evaluate_cljs(event_model){
return fetch.remotes.remote_callback.call(null,"compile-expr-string",cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,event_model)),(new cljs.core.Keyword("\uFDD0'id")).call(null,event_model)], true),(function (result){
return cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,event_model),(function (){var x__21171 = eval((new cljs.core.Keyword("\uFDD0'result")).call(null,result));
if(cljs.core.truth_(x__21171))
{return x__21171;
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
var this__21172 = this;
var event_target__21173 = event.target;
var event_model__21175 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__21173))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____21174 = cljs.core.vector_QMARK_.call(null,event_target__21173);
if(or__3824__auto____21174)
{return or__3824__auto____21174;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__21173);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__21173):((true)?cljs_jquery.core.jquery.call(null,event_target__21173):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
var loop_model__21177 = (function (){var id__21176 = session.client.session.new_loop_id.call(null);
return (new session.client.loop.Loop(cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'input","\uFDD0'output"],{"\uFDD0'id":id__21176,"\uFDD0'input":cljs.core.atom.call(null,""),"\uFDD0'output":cljs.core.atom.call(null,null)})));
})();
var loop_view__21178 = session.client.mvc.render.call(null,loop_model__21177);
var session_model__21179 = this$;
if(cljs.core._EQ_.call(null,event_model__21175,"loop-creator"))
{cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,session_model__21179),(function (p1__21167_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([loop_model__21177], true),p1__21167_SHARP_));
}));
} else
{cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,session_model__21179),(function (p1__21168_SHARP_){
var vec__21180__21181 = cljs.core.split_with.call(null,(function (m){
return cljs.core.not_EQ_.call(null,m,event_model__21175);
}),p1__21168_SHARP_);
var left__21182 = cljs.core.nth.call(null,vec__21180__21181,0,null);
var right__21183 = cljs.core.nth.call(null,vec__21180__21181,1,null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,left__21182,cljs.core.PersistentVector.fromArray([event_model__21175,loop_model__21177], true),cljs.core.rest.call(null,right__21183)));
}));
}
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__21178))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____21184 = cljs.core.vector_QMARK_.call(null,loop_view__21178);
if(or__3824__auto____21184)
{return or__3824__auto____21184;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__21178);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__21178):((true)?cljs_jquery.core.jquery.call(null,loop_view__21178):null))),cljs.core.PersistentVector.fromArray(["insertAfter",event_target__21173], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__21178))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____21185 = cljs.core.vector_QMARK_.call(null,loop_view__21178);
if(or__3824__auto____21185)
{return or__3824__auto____21185;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__21178);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__21178):((true)?cljs_jquery.core.jquery.call(null,loop_view__21178):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"], true));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$delete_loop$arity$3 = (function (this$,session_view,event){
var this__21186 = this;
var event_target__21187 = event.target;
var event_model__21189 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__21187))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____21188 = cljs.core.vector_QMARK_.call(null,event_target__21187);
if(or__3824__auto____21188)
{return or__3824__auto____21188;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__21187);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__21187):((true)?cljs_jquery.core.jquery.call(null,event_target__21187):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
var session_model__21190 = this$;
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__21187))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____21191 = cljs.core.vector_QMARK_.call(null,event_target__21187);
if(or__3824__auto____21191)
{return or__3824__auto____21191;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__21187);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__21187):((true)?cljs_jquery.core.jquery.call(null,event_target__21187):null))),cljs.core.PersistentVector.fromArray(["remove"], true));
return cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,session_model__21190),(function (p1__21169_SHARP_){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (m){
return cljs.core.not_EQ_.call(null,m,event_model__21189);
}),p1__21169_SHARP_));
}));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$evaluate_loop$arity$3 = (function (this$,session_view,event){
var this__21192 = this;
var event_target__21193 = event.target;
var event_model__21195 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__21193))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____21194 = cljs.core.vector_QMARK_.call(null,event_target__21193);
if(or__3824__auto____21194)
{return or__3824__auto____21194;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__21193);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__21193):((true)?cljs_jquery.core.jquery.call(null,event_target__21193):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
if(cljs.core._EQ_.call(null,"\uFDD0'cljs",(new cljs.core.Keyword("\uFDD0'type")).call(null,this$)))
{return session.client.subsession.evaluate_cljs.call(null,event_model__21195);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'clj",(new cljs.core.Keyword("\uFDD0'type")).call(null,this$)))
{return session.client.subsession.evaluate_clj.call(null,event_model__21195);
} else
{return null;
}
}
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$ = true;
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var this__21196 = this;
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__21196.model)))], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____21197 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__21196.model)))], true));
if(or__3824__auto____21197)
{return or__3824__auto____21197;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__21196.model)))], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__21196.model)))], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__21196.model)))], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",this__21196.model], true));
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$control$arity$2 = (function (this$,session_view){
var this__21198 = this;
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____21199 = cljs.core.vector_QMARK_.call(null,session_view);
if(or__3824__auto____21199)
{return or__3824__auto____21199;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):((true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","insert-new-loop",(function (p1__21164_SHARP_){
return session.client.subsession.insert_new_loop.call(null,this$,session_view,p1__21164_SHARP_);
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____21200 = cljs.core.vector_QMARK_.call(null,session_view);
if(or__3824__auto____21200)
{return or__3824__auto____21200;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):((true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","delete-loop",(function (p1__21165_SHARP_){
return session.client.subsession.delete_loop.call(null,this$,session_view,p1__21165_SHARP_);
})], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____21201 = cljs.core.vector_QMARK_.call(null,session_view);
if(or__3824__auto____21201)
{return or__3824__auto____21201;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):((true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-loop",(function (p1__21166_SHARP_){
return session.client.subsession.evaluate_loop.call(null,this$,session_view,p1__21166_SHARP_);
})], true));
});
session.client.subsession.Subsession.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__21202 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#session/subsession "], true),cljs.core._pr_seq.call(null,cljs.core.assoc.call(null,this__21202.model,"\uFDD0'loops",cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__21202.model))),opts),"");
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__21203 = this;
return this__21203.model.call(null,k);
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__21204 = this;
return this__21204.model.call(null,k,not_found);
});
session.client.subsession.Subsession;
cljs.reader.register_tag_parser_BANG_.call(null,"subsession",(function (x){
return (new session.client.subsession.Subsession(cljs.core.assoc.call(null,x,"\uFDD0'loops",cljs.core.atom.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,x)))));
}));
