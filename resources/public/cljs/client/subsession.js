goog.provide('session.client.subsession');
goog.require('cljs.core');
goog.require('session.client.loop_creator');
goog.require('session.client.loop');
goog.require('session.client.mvc');
goog.require('session.client.session');
session.client.subsession.ISubsession = {};
session.client.subsession.insert_new_loop = (function insert_new_loop(this$,session_view,event){
if(cljs.core.truth_((function (){var and__3822__auto____50077 = this$;

if(cljs.core.truth_(and__3822__auto____50077))
{return this$.session$client$subsession$ISubsession$insert_new_loop;
} else
{return and__3822__auto____50077;
}
})()))
{return this$.session$client$subsession$ISubsession$insert_new_loop(this$,session_view,event);
} else
{return (function (){var or__3824__auto____50078 = (session.client.subsession.insert_new_loop[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50078))
{return or__3824__auto____50078;
} else
{var or__3824__auto____50079 = (session.client.subsession.insert_new_loop["_"]);

if(cljs.core.truth_(or__3824__auto____50079))
{return or__3824__auto____50079;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.insert-new-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
session.client.subsession.delete_loop = (function delete_loop(this$,session_view,event){
if(cljs.core.truth_((function (){var and__3822__auto____50080 = this$;

if(cljs.core.truth_(and__3822__auto____50080))
{return this$.session$client$subsession$ISubsession$delete_loop;
} else
{return and__3822__auto____50080;
}
})()))
{return this$.session$client$subsession$ISubsession$delete_loop(this$,session_view,event);
} else
{return (function (){var or__3824__auto____50081 = (session.client.subsession.delete_loop[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50081))
{return or__3824__auto____50081;
} else
{var or__3824__auto____50082 = (session.client.subsession.delete_loop["_"]);

if(cljs.core.truth_(or__3824__auto____50082))
{return or__3824__auto____50082;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.delete-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
session.client.subsession.evaluate_loop = (function evaluate_loop(this$,session_view,event){
if(cljs.core.truth_((function (){var and__3822__auto____50083 = this$;

if(cljs.core.truth_(and__3822__auto____50083))
{return this$.session$client$subsession$ISubsession$evaluate_loop;
} else
{return and__3822__auto____50083;
}
})()))
{return this$.session$client$subsession$ISubsession$evaluate_loop(this$,session_view,event);
} else
{return (function (){var or__3824__auto____50084 = (session.client.subsession.evaluate_loop[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50084))
{return or__3824__auto____50084;
} else
{var or__3824__auto____50085 = (session.client.subsession.evaluate_loop["_"]);

if(cljs.core.truth_(or__3824__auto____50085))
{return or__3824__auto____50085;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.evaluate-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
session.client.subsession.evaluate_clj = (function evaluate_clj(event_model){
return fetch.remotes.remote_callback.call(null,"eval-expr-string",cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,"\uFDD0'input".call(null,event_model))]),(function (result){
return cljs.core.reset_BANG_.call(null,"\uFDD0'output".call(null,event_model),eval.call(null,"\uFDD0'result".call(null,result)));
}));
});
session.client.subsession.evaluate_cljs = (function evaluate_cljs(event_model){
return fetch.remotes.remote_callback.call(null,"compile-expr-string",cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,"\uFDD0'input".call(null,event_model))]),(function (result){
return cljs.core.reset_BANG_.call(null,"\uFDD0'output".call(null,event_model),(function (){var x__50092 = eval.call(null,"\uFDD0'result".call(null,result));

if(cljs.core.truth_(x__50092))
{return x__50092;
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
})
session.client.subsession.Subsession.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"session.client.subsession.Subsession");
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$ = true;
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$insert_new_loop = (function (this$,session_view,event){
var this__50093 = this;
var event_target__50094 = event.target;
var event_model__50096 = cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",event_target__50094))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50095 = cljs.core.vector_QMARK_.call(null,event_target__50094);

if(cljs.core.truth_(or__3824__auto____50095))
{return or__3824__auto____50095;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__50094);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__50094):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,event_target__50094):null))),cljs.core.PersistentVector.fromArray(["data","model"]));
var loop_model__50098 = (function (){var id__50097 = session.client.session.new_loop_id.call(null);

return (new session.client.loop.Loop(cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'input","\uFDD0'output"],{"\uFDD0'id":id__50097,"\uFDD0'input":cljs.core.atom.call(null,""),"\uFDD0'output":cljs.core.atom.call(null,null)})));
})();
var loop_view__50099 = session.client.mvc.render.call(null,loop_model__50098);
var session_model__50100 = this$;

if(cljs.core.truth_(cljs.core._EQ_.call(null,event_model__50096,cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]))))
{cljs.core.swap_BANG_.call(null,"\uFDD0'loops".call(null,session_model__50100),(function (p1__50089_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([loop_model__50098]),p1__50089_SHARP_));
}));
} else
{cljs.core.swap_BANG_.call(null,"\uFDD0'loops".call(null,session_model__50100),(function (p1__50090_SHARP_){
var vec__50101__50102 = cljs.core.split_with.call(null,(function (m){
return cljs.core.not_EQ_.call(null,m,event_model__50096);
}),p1__50090_SHARP_);
var left__50103 = cljs.core.nth.call(null,vec__50101__50102,0,null);
var right__50104 = cljs.core.nth.call(null,vec__50101__50102,1,null);

return cljs.core.vec.call(null,cljs.core.concat.call(null,left__50103,cljs.core.PersistentVector.fromArray([event_model__50096,loop_model__50098]),cljs.core.rest.call(null,right__50104)));
}));
}
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__50099))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50105 = cljs.core.vector_QMARK_.call(null,loop_view__50099);

if(cljs.core.truth_(or__3824__auto____50105))
{return or__3824__auto____50105;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__50099);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__50099):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,loop_view__50099):null))),cljs.core.PersistentVector.fromArray(["insertAfter",event_target__50094]));
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__50099))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50106 = cljs.core.vector_QMARK_.call(null,loop_view__50099);

if(cljs.core.truth_(or__3824__auto____50106))
{return or__3824__auto____50106;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__50099);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__50099):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,loop_view__50099):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"]));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$delete_loop = (function (this$,session_view,event){
var this__50107 = this;
var event_target__50108 = event.target;
var event_model__50110 = cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",event_target__50108))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50109 = cljs.core.vector_QMARK_.call(null,event_target__50108);

if(cljs.core.truth_(or__3824__auto____50109))
{return or__3824__auto____50109;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__50108);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__50108):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,event_target__50108):null))),cljs.core.PersistentVector.fromArray(["data","model"]));
var session_model__50111 = this$;

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",event_target__50108))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50112 = cljs.core.vector_QMARK_.call(null,event_target__50108);

if(cljs.core.truth_(or__3824__auto____50112))
{return or__3824__auto____50112;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__50108);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__50108):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,event_target__50108):null))),cljs.core.PersistentVector.fromArray(["remove"]));
return cljs.core.swap_BANG_.call(null,"\uFDD0'loops".call(null,session_model__50111),(function (p1__50091_SHARP_){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (m){
return cljs.core.not_EQ_.call(null,m,event_model__50110);
}),p1__50091_SHARP_));
}));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$evaluate_loop = (function (this$,session_view,event){
var this__50113 = this;
var event_target__50114 = event.target;
var event_model__50116 = cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",event_target__50114))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50115 = cljs.core.vector_QMARK_.call(null,event_target__50114);

if(cljs.core.truth_(or__3824__auto____50115))
{return or__3824__auto____50115;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__50114);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__50114):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,event_target__50114):null))),cljs.core.PersistentVector.fromArray(["data","model"]));

if(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'cljs","\uFDD0'type".call(null,this$))))
{return session.client.subsession.evaluate_cljs.call(null,event_model__50116);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'clj","\uFDD0'type".call(null,this$))))
{return session.client.subsession.evaluate_clj.call(null,event_model__50116);
} else
{return null;
}
}
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$ = true;
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$view = (function (this$){
var this__50117 = this;
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span2",cljs.core.PersistentVector.fromArray(["\uFDD0'h3",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'clj","\uFDD0'type".call(null,this$)))?"Clojure":"Clojurescript")])])]),(function (){var v__50118 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

session.client.mvc.control2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})),v__50118);
return v__50118;
})(),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,"\uFDD0'loops".call(null,this__50117.model)))])))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50120 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span2",cljs.core.PersistentVector.fromArray(["\uFDD0'h3",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'clj","\uFDD0'type".call(null,this$)))?"Clojure":"Clojurescript")])])]),(function (){var v__50119 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

session.client.mvc.control2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})),v__50119);
return v__50119;
})(),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,"\uFDD0'loops".call(null,this__50117.model)))]));

if(cljs.core.truth_(or__3824__auto____50120))
{return or__3824__auto____50120;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span2",cljs.core.PersistentVector.fromArray(["\uFDD0'h3",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'clj","\uFDD0'type".call(null,this$)))?"Clojure":"Clojurescript")])])]),(function (){var v__50121 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

session.client.mvc.control2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})),v__50121);
return v__50121;
})(),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,"\uFDD0'loops".call(null,this__50117.model)))]));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span2",cljs.core.PersistentVector.fromArray(["\uFDD0'h3",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'clj","\uFDD0'type".call(null,this$)))?"Clojure":"Clojurescript")])])]),(function (){var v__50122 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

session.client.mvc.control2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})),v__50122);
return v__50122;
})(),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,"\uFDD0'loops".call(null,this__50117.model)))])):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span2",cljs.core.PersistentVector.fromArray(["\uFDD0'h3",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'clj","\uFDD0'type".call(null,this$)))?"Clojure":"Clojurescript")])])]),(function (){var v__50123 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

session.client.mvc.control2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})),v__50123);
return v__50123;
})(),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,"\uFDD0'loops".call(null,this__50117.model)))])):null))),cljs.core.PersistentVector.fromArray(["data","model",this__50117.model]));
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$control = (function (this$,session_view){
var this__50124 = this;
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50125 = cljs.core.vector_QMARK_.call(null,session_view);

if(cljs.core.truth_(or__3824__auto____50125))
{return or__3824__auto____50125;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","insert-new-loop",(function (p1__50086_SHARP_){
return session.client.subsession.insert_new_loop.call(null,this$,session_view,p1__50086_SHARP_);
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50126 = cljs.core.vector_QMARK_.call(null,session_view);

if(cljs.core.truth_(or__3824__auto____50126))
{return or__3824__auto____50126;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","delete-loop",(function (p1__50087_SHARP_){
return session.client.subsession.delete_loop.call(null,this$,session_view,p1__50087_SHARP_);
})]));
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50127 = cljs.core.vector_QMARK_.call(null,session_view);

if(cljs.core.truth_(or__3824__auto____50127))
{return or__3824__auto____50127;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-loop",(function (p1__50088_SHARP_){
return session.client.subsession.evaluate_loop.call(null,this$,session_view,p1__50088_SHARP_);
})]));
});
session.client.subsession.Subsession.prototype.cljs$core$IPrintable$ = true;
session.client.subsession.Subsession.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__50128 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#session/subsession "]),cljs.core._pr_seq.call(null,cljs.core.assoc.call(null,this__50128.model,"\uFDD0'loops",cljs.core.deref.call(null,"\uFDD0'loops".call(null,this__50128.model))),opts),"");
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$ = true;
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup = (function() {
var G__50131 = null;
var G__50131__50132 = (function (o,k){
var this__50129 = this;
return this__50129.model.call(null,k);
});
var G__50131__50133 = (function (o,k,not_found){
var this__50130 = this;
return this__50130.model.call(null,k,not_found);
});
G__50131 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__50131__50132.call(this,o,k);
case  3 :
return G__50131__50133.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__50131;
})()
;
session.client.subsession.Subsession;
