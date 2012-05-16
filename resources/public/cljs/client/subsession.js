goog.provide('session.client.subsession');
goog.require('cljs.core');
goog.require('session.client.loop_creator');
goog.require('session.client.loop');
goog.require('session.client.mvc');
goog.require('session.client.session');
session.client.subsession.ISubsession = {};
session.client.subsession.insert_new_loop = (function insert_new_loop(this$,session_view,event){
if(cljs.core.truth_((function (){var and__3822__auto____30172 = this$;

if(cljs.core.truth_(and__3822__auto____30172))
{return this$.session$client$subsession$ISubsession$insert_new_loop;
} else
{return and__3822__auto____30172;
}
})()))
{return this$.session$client$subsession$ISubsession$insert_new_loop(this$,session_view,event);
} else
{return (function (){var or__3824__auto____30173 = (session.client.subsession.insert_new_loop[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30173))
{return or__3824__auto____30173;
} else
{var or__3824__auto____30174 = (session.client.subsession.insert_new_loop["_"]);

if(cljs.core.truth_(or__3824__auto____30174))
{return or__3824__auto____30174;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.insert-new-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
session.client.subsession.delete_loop = (function delete_loop(this$,session_view,event){
if(cljs.core.truth_((function (){var and__3822__auto____30175 = this$;

if(cljs.core.truth_(and__3822__auto____30175))
{return this$.session$client$subsession$ISubsession$delete_loop;
} else
{return and__3822__auto____30175;
}
})()))
{return this$.session$client$subsession$ISubsession$delete_loop(this$,session_view,event);
} else
{return (function (){var or__3824__auto____30176 = (session.client.subsession.delete_loop[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30176))
{return or__3824__auto____30176;
} else
{var or__3824__auto____30177 = (session.client.subsession.delete_loop["_"]);

if(cljs.core.truth_(or__3824__auto____30177))
{return or__3824__auto____30177;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.delete-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
session.client.subsession.evaluate_loop = (function evaluate_loop(this$,session_view,event){
if(cljs.core.truth_((function (){var and__3822__auto____30178 = this$;

if(cljs.core.truth_(and__3822__auto____30178))
{return this$.session$client$subsession$ISubsession$evaluate_loop;
} else
{return and__3822__auto____30178;
}
})()))
{return this$.session$client$subsession$ISubsession$evaluate_loop(this$,session_view,event);
} else
{return (function (){var or__3824__auto____30179 = (session.client.subsession.evaluate_loop[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30179))
{return or__3824__auto____30179;
} else
{var or__3824__auto____30180 = (session.client.subsession.evaluate_loop["_"]);

if(cljs.core.truth_(or__3824__auto____30180))
{return or__3824__auto____30180;
} else
{throw cljs.core.missing_protocol.call(null,"ISubsession.evaluate-loop",this$);
}
}
})().call(null,this$,session_view,event);
}
});
session.client.subsession.evaluate_clj = (function evaluate_clj(event_model){
return fetch.remotes.remote_callback.call(null,"eval-expr-string",cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,"\uFDD0'input".call(null,event_model))]),(function (result){
return cljs.core.reset_BANG_.call(null,"\uFDD0'output".call(null,event_model),"\uFDD0'result".call(null,result));
}));
});
session.client.subsession.evaluate_cljs = (function evaluate_cljs(event_model){
return fetch.remotes.remote_callback.call(null,"compile-expr-string",cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,"\uFDD0'input".call(null,event_model))]),(function (result){
return cljs.core.reset_BANG_.call(null,"\uFDD0'output".call(null,event_model),(function (){var x__30187 = eval.call(null,"\uFDD0'result".call(null,result));

if(cljs.core.truth_(x__30187))
{return x__30187;
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
var this__30188 = this;
var event_target__30189 = event.target;
var event_model__30191 = cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",event_target__30189))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30190 = cljs.core.vector_QMARK_.call(null,event_target__30189);

if(cljs.core.truth_(or__3824__auto____30190))
{return or__3824__auto____30190;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__30189);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__30189):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,event_target__30189):null))),cljs.core.PersistentVector.fromArray(["data","model"]));
var loop_model__30193 = (function (){var id__30192 = session.client.session.new_loop_id.call(null);

return (new session.client.loop.Loop(cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'input","\uFDD0'output"],{"\uFDD0'id":id__30192,"\uFDD0'input":cljs.core.atom.call(null,""),"\uFDD0'output":cljs.core.atom.call(null,null)})));
})();
var loop_view__30194 = session.client.mvc.render.call(null,loop_model__30193);
var session_model__30195 = this$;

if(cljs.core.truth_(cljs.core._EQ_.call(null,event_model__30191,cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]))))
{cljs.core.swap_BANG_.call(null,"\uFDD0'loops".call(null,session_model__30195),(function (p1__30184_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([loop_model__30193]),p1__30184_SHARP_));
}));
} else
{cljs.core.swap_BANG_.call(null,"\uFDD0'loops".call(null,session_model__30195),(function (p1__30185_SHARP_){
var vec__30196__30197 = cljs.core.split_with.call(null,(function (m){
return cljs.core.not_EQ_.call(null,m,event_model__30191);
}),p1__30185_SHARP_);
var left__30198 = cljs.core.nth.call(null,vec__30196__30197,0,null);
var right__30199 = cljs.core.nth.call(null,vec__30196__30197,1,null);

return cljs.core.vec.call(null,cljs.core.concat.call(null,left__30198,cljs.core.PersistentVector.fromArray([event_model__30191,loop_model__30193]),cljs.core.rest.call(null,right__30199)));
}));
}
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__30194))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30200 = cljs.core.vector_QMARK_.call(null,loop_view__30194);

if(cljs.core.truth_(or__3824__auto____30200))
{return or__3824__auto____30200;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__30194);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__30194):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,loop_view__30194):null))),cljs.core.PersistentVector.fromArray(["insertAfter",event_target__30189]));
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",loop_view__30194))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30201 = cljs.core.vector_QMARK_.call(null,loop_view__30194);

if(cljs.core.truth_(or__3824__auto____30201))
{return or__3824__auto____30201;
} else
{return cljs.core.keyword_QMARK_.call(null,loop_view__30194);
}
})())?cljs_jquery.core.dom_create.call(null,loop_view__30194):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,loop_view__30194):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"]));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$delete_loop = (function (this$,session_view,event){
var this__30202 = this;
var event_target__30203 = event.target;
var event_model__30205 = cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",event_target__30203))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30204 = cljs.core.vector_QMARK_.call(null,event_target__30203);

if(cljs.core.truth_(or__3824__auto____30204))
{return or__3824__auto____30204;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__30203);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__30203):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,event_target__30203):null))),cljs.core.PersistentVector.fromArray(["data","model"]));
var session_model__30206 = this$;

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",event_target__30203))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30207 = cljs.core.vector_QMARK_.call(null,event_target__30203);

if(cljs.core.truth_(or__3824__auto____30207))
{return or__3824__auto____30207;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__30203);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__30203):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,event_target__30203):null))),cljs.core.PersistentVector.fromArray(["remove"]));
return cljs.core.swap_BANG_.call(null,"\uFDD0'loops".call(null,session_model__30206),(function (p1__30186_SHARP_){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (m){
return cljs.core.not_EQ_.call(null,m,event_model__30205);
}),p1__30186_SHARP_));
}));
});
session.client.subsession.Subsession.prototype.session$client$subsession$ISubsession$evaluate_loop = (function (this$,session_view,event){
var this__30208 = this;
var event_target__30209 = event.target;
var event_model__30211 = cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",event_target__30209))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30210 = cljs.core.vector_QMARK_.call(null,event_target__30209);

if(cljs.core.truth_(or__3824__auto____30210))
{return or__3824__auto____30210;
} else
{return cljs.core.keyword_QMARK_.call(null,event_target__30209);
}
})())?cljs_jquery.core.dom_create.call(null,event_target__30209):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,event_target__30209):null))),cljs.core.PersistentVector.fromArray(["data","model"]));

if(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'cljs","\uFDD0'type".call(null,this$))))
{return session.client.subsession.evaluate_cljs.call(null,event_model__30211);
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'clj","\uFDD0'type".call(null,this$))))
{return session.client.subsession.evaluate_clj.call(null,event_model__30211);
} else
{return null;
}
}
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$ = true;
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$view = (function (this$){
var this__30212 = this;
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span2",cljs.core.PersistentVector.fromArray(["\uFDD0'h3",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'clj","\uFDD0'type".call(null,this$)))?"Clojure":"Clojurescript")])])]),(function (){var v__30213 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

session.client.mvc.control2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})),v__30213);
return v__30213;
})(),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,"\uFDD0'loops".call(null,this__30212.model)))])))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30215 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span2",cljs.core.PersistentVector.fromArray(["\uFDD0'h3",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'clj","\uFDD0'type".call(null,this$)))?"Clojure":"Clojurescript")])])]),(function (){var v__30214 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

session.client.mvc.control2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})),v__30214);
return v__30214;
})(),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,"\uFDD0'loops".call(null,this__30212.model)))]));

if(cljs.core.truth_(or__3824__auto____30215))
{return or__3824__auto____30215;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span2",cljs.core.PersistentVector.fromArray(["\uFDD0'h3",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'clj","\uFDD0'type".call(null,this$)))?"Clojure":"Clojurescript")])])]),(function (){var v__30216 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

session.client.mvc.control2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})),v__30216);
return v__30216;
})(),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,"\uFDD0'loops".call(null,this__30212.model)))]));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span2",cljs.core.PersistentVector.fromArray(["\uFDD0'h3",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'clj","\uFDD0'type".call(null,this$)))?"Clojure":"Clojurescript")])])]),(function (){var v__30217 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

session.client.mvc.control2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})),v__30217);
return v__30217;
})(),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,"\uFDD0'loops".call(null,this__30212.model)))])):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.subsession.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span2",cljs.core.PersistentVector.fromArray(["\uFDD0'h3",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'clj","\uFDD0'type".call(null,this$)))?"Clojure":"Clojurescript")])])]),(function (){var v__30218 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

session.client.mvc.control2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})),v__30218);
return v__30218;
})(),cljs.core.map.call(null,session.client.mvc.render,cljs.core.deref.call(null,"\uFDD0'loops".call(null,this__30212.model)))])):null))),cljs.core.PersistentVector.fromArray(["data","model",this__30212.model]));
});
session.client.subsession.Subsession.prototype.session$client$mvc$IMVC$control = (function (this$,session_view){
var this__30219 = this;
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30220 = cljs.core.vector_QMARK_.call(null,session_view);

if(cljs.core.truth_(or__3824__auto____30220))
{return or__3824__auto____30220;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","insert-new-loop",(function (p1__30181_SHARP_){
return session.client.subsession.insert_new_loop.call(null,this$,session_view,p1__30181_SHARP_);
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30221 = cljs.core.vector_QMARK_.call(null,session_view);

if(cljs.core.truth_(or__3824__auto____30221))
{return or__3824__auto____30221;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","delete-loop",(function (p1__30182_SHARP_){
return session.client.subsession.delete_loop.call(null,this$,session_view,p1__30182_SHARP_);
})]));
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",session_view))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30222 = cljs.core.vector_QMARK_.call(null,session_view);

if(cljs.core.truth_(or__3824__auto____30222))
{return or__3824__auto____30222;
} else
{return cljs.core.keyword_QMARK_.call(null,session_view);
}
})())?cljs_jquery.core.dom_create.call(null,session_view):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,session_view):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-loop",(function (p1__30183_SHARP_){
return session.client.subsession.evaluate_loop.call(null,this$,session_view,p1__30183_SHARP_);
})]));
});
session.client.subsession.Subsession.prototype.cljs$core$IPrintable$ = true;
session.client.subsession.Subsession.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__30223 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#session/subsession "]),cljs.core._pr_seq.call(null,cljs.core.assoc.call(null,this__30223.model,"\uFDD0'loops",cljs.core.deref.call(null,"\uFDD0'loops".call(null,this__30223.model))),opts),"");
});
session.client.subsession.Subsession.prototype.cljs$core$ILookup$ = true;
session.client.subsession.Subsession.prototype.cljs$core$ILookup$_lookup = (function() {
var G__30226 = null;
var G__30226__30227 = (function (o,k){
var this__30224 = this;
return this__30224.model.call(null,k);
});
var G__30226__30228 = (function (o,k,not_found){
var this__30225 = this;
return this__30225.model.call(null,k,not_found);
});
G__30226 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__30226__30227.call(this,o,k);
case  3 :
return G__30226__30228.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30226;
})()
;
session.client.subsession.Subsession;
