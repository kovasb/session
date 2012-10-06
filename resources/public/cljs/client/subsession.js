goog.provide('session.client.subsession');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('session.client.session');
goog.require('session.client.mvc');
goog.require('session.client.loop');
goog.require('session.client.loop_creator');
void 0;session.client.subsession.ISubsession = {};
session.client.subsession.insert_new_loop = (function insert_new_loop(this$,session_view,event){
if((function (){var and__3822__auto____6899 = this$;
if(and__3822__auto____6899)
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$3;
} else
{return and__3822__auto____6899;
}
})())
{return this$.session$client$subsession$ISubsession$insert_new_loop$arity$3(this$,session_view,event);
} else
{return (function (){var or__3824__auto____6900 = (session.client.subsession.insert_new_loop[goog.typeOf(this$)]);
if(or__3824__auto____6900)
{return or__3824__auto____6900;
} else
{var or__3824__auto____6901 = (session.client.subsession.insert_new_loop["_"]);
if(or__3824__auto____6901)
{return or__3824__auto____6901;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.insert-new-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
session.client.subsession.delete_loop = (function delete_loop(this$,session_view,event){
if((function (){var and__3822__auto____6905 = this$;
if(and__3822__auto____6905)
{return this$.session$client$subsession$ISubsession$delete_loop$arity$3;
} else
{return and__3822__auto____6905;
}
})())
{return this$.session$client$subsession$ISubsession$delete_loop$arity$3(this$,session_view,event);
} else
{return (function (){var or__3824__auto____6906 = (session.client.subsession.delete_loop[goog.typeOf(this$)]);
if(or__3824__auto____6906)
{return or__3824__auto____6906;
} else
{var or__3824__auto____6907 = (session.client.subsession.delete_loop["_"]);
if(or__3824__auto____6907)
{return or__3824__auto____6907;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.delete-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
session.client.subsession.evaluate_loop = (function evaluate_loop(this$,session_view,event){
if((function (){var and__3822__auto____6911 = this$;
if(and__3822__auto____6911)
{return this$.session$client$subsession$ISubsession$evaluate_loop$arity$3;
} else
{return and__3822__auto____6911;
}
})())
{return this$.session$client$subsession$ISubsession$evaluate_loop$arity$3(this$,session_view,event);
} else
{return (function (){var or__3824__auto____6912 = (session.client.subsession.evaluate_loop[goog.typeOf(this$)]);
if(or__3824__auto____6912)
{return or__3824__auto____6912;
} else
{var or__3824__auto____6913 = (session.client.subsession.evaluate_loop["_"]);
if(or__3824__auto____6913)
{return or__3824__auto____6913;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.evaluate-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
void 0;session.client.subsession.evaluate_clj = (function evaluate_clj(event_model){
return fetch.remotes.remote_callback.call(null,"eval-expr-string",cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,event_model)),(new cljs.core.Keyword("\uFDD0'id")).call(null,event_model)], true),(function (result){
return cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,event_model),(new cljs.core.Keyword("\uFDD0'result")).call(null,result));
}));
});
session.client.subsession.evaluate_cljs = (function evaluate_cljs(event_model){
return fetch.remotes.remote_callback.call(null,"compile-expr-string",cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,event_model)),(new cljs.core.Keyword("\uFDD0'id")).call(null,event_model)], true),(function (result){
return cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,event_model),(function (){var x__6921 = eval((new cljs.core.Keyword("\uFDD0'result")).call(null,result));
if(cljs.core.truth_(x__6921))
{return x__6921;
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
session.client.subsession.Subsession.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"session.client.subsession/Subsession");
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$ = true;
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$insert_new_loop$arity$3 = (function (this$,session_view,event){
var this__6922 = this;
var event_target__6923 = event.target;
var event_model__6925 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__6923))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6924 = cljs.core.vector_QMARK_.call(null,event_target__6923);
if(or__3824__auto____6924)
{return or__3824__auto____6924;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__6923);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__6923):((true)?cljs_jquery.core.jquery.call(null,event_target__6923):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
var loop_model__6927 = (function (){var id__6926 = session.client.session.new_loop_id.call(null);
return (new session.client.loop.Loop(cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'input","\uFDD0'output"],{"\uFDD0'id":id__6926,"\uFDD0'input":cljs.core.atom.call(null,""),"\uFDD0'output":cljs.core.atom.call(null,null)})));
})();
var loop_view__6928 = session.client.mvc.render.call(null,loop_model__6927);
var session_model__6929 = this$;
if(cljs.core._EQ_.call(null,event_model__6925,"loop-creator"))
{cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,session_model__6929),(function (p1__6917_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([loop_model__6927], true),p1__6917_SHARP_));
}));
} else
{cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,session_model__6929),(function (p1__6918_SHARP_){
var vec__6930__6931 = cljs.core.split_with.call(null,(function (m){
return cljs.core.not_EQ_.call(null,m,event_model__6925);
}),p1__6918_SHARP_);
var left__6932 = cljs.core.nth.call(null,vec__6930__6931,0,null);
var right__6933 = cljs.core.nth.call(null,vec__6930__6931,1,null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,left__6932,cljs.core.PersistentVector.fromArray([event_model__6925,loop_model__6927], true),cljs.core.rest.call(null,right__6933)));
}));
}
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__6928))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6934 = cljs.core.vector_QMARK_.call(null,loop_view__6928);
if(or__3824__auto____6934)
{return or__3824__auto____6934;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__6928);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__6928):((true)?cljs_jquery.core.jquery.call(null,loop_view__6928):null))),cljs.core.PersistentVector.fromArray(["insertAfter",event_target__6923], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__6928))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6935 = cljs.core.vector_QMARK_.call(null,loop_view__6928);
if(or__3824__auto____6935)
{return or__3824__auto____6935;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__6928);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__6928):((true)?cljs_jquery.core.jquery.call(null,loop_view__6928):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"], true));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$delete_loop$arity$3 = (function (this$,session_view,event){
var this__6936 = this;
var event_target__6937 = event.target;
var event_model__6939 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__6937))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6938 = cljs.core.vector_QMARK_.call(null,event_target__6937);
if(or__3824__auto____6938)
{return or__3824__auto____6938;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__6937);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__6937):((true)?cljs_jquery.core.jquery.call(null,event_target__6937):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
var session_model__6940 = this$;
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__6937))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6941 = cljs.core.vector_QMARK_.call(null,event_target__6937);
if(or__3824__auto____6941)
{return or__3824__auto____6941;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__6937);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__6937):((true)?cljs_jquery.core.jquery.call(null,event_target__6937):null))),cljs.core.PersistentVector.fromArray(["remove"], true));
return cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,session_model__6940),(function (p1__6919_SHARP_){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (m){
return cljs.core.not_EQ_.call(null,m,event_model__6939);
}),p1__6919_SHARP_));
}));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$evaluate_loop$arity$3 = (function (this$,session_view,event){
var this__6942 = this;
var event_target__6943 = event.target;
var event_model__6945 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",event_target__6943))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6944 = cljs.core.vector_QMARK_.call(null,event_target__6943);
if(or__3824__auto____6944)
{return or__3824__auto____6944;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__6943);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__6943):((true)?cljs_jquery.core.jquery.call(null,event_target__6943):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
if(cljs.core._EQ_.call(null,"\uFDD0'cljs",(new cljs.core.Keyword("\uFDD0'type")).call(null,this$)))
{return session.client.subsession.evaluate_cljs.call(null,event_model__6945);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'clj",(new cljs.core.Keyword("\uFDD0'type")).call(null,this$)))
{return session.client.subsession.evaluate_clj.call(null,event_model__6945);
} else
{return null;
}
}
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$ = true;
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var this__6946 = this;
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__6946.model)))], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6947 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__6946.model)))], true));
if(or__3824__auto____6947)
{return or__3824__auto____6947;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__6946.model)))], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__6946.model)))], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(true))),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__6946.model)))], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",this__6946.model], true));
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$control$arity$2 = (function (this$,session_view){
var this__6948 = this;
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6949 = cljs.core.vector_QMARK_.call(null,session_view);
if(or__3824__auto____6949)
{return or__3824__auto____6949;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):((true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","insert-new-loop",(function (p1__6914_SHARP_){
return session.client.subsession.insert_new_loop.call(null,this$,session_view,p1__6914_SHARP_);
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6950 = cljs.core.vector_QMARK_.call(null,session_view);
if(or__3824__auto____6950)
{return or__3824__auto____6950;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):((true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","delete-loop",(function (p1__6915_SHARP_){
return session.client.subsession.delete_loop.call(null,this$,session_view,p1__6915_SHARP_);
})], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6951 = cljs.core.vector_QMARK_.call(null,session_view);
if(or__3824__auto____6951)
{return or__3824__auto____6951;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):((true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-loop",(function (p1__6916_SHARP_){
return session.client.subsession.evaluate_loop.call(null,this$,session_view,p1__6916_SHARP_);
})], true));
});
session.client.subsession.Subsession.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__6952 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#session/subsession "], true),cljs.core._pr_seq.call(null,cljs.core.assoc.call(null,this__6952.model,"\uFDD0'loops",cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,this__6952.model))),opts),"");
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__6953 = this;
return this__6953.model.call(null,k);
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__6954 = this;
return this__6954.model.call(null,k,not_found);
});
session.client.subsession.Subsession;
cljs.reader.register_tag_parser_BANG_.call(null,"subsession",(function (x){
return (new session.client.subsession.Subsession(cljs.core.assoc.call(null,x,"\uFDD0'loops",cljs.core.atom.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,x)))));
}));
