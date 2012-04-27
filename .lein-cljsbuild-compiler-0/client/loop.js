goog.provide('session.client.loop');
goog.require('cljs.core');
goog.require('session.client.editor');
goog.require('session.client.mvc');
session.client.loop.last_loop_id = cljs.core.atom.call(null,0);
session.client.loop.new_loop_id = (function new_loop_id(){
return cljs.core.str.call(null,cljs.core.swap_BANG_.call(null,session.client.loop.last_loop_id,(function (p1__3236_SHARP_){
return (1 + p1__3236_SHARP_);
})));
});
session.client.loop.ILoop = {};
session.client.loop.evaluate_loop = (function evaluate_loop(model){
if(cljs.core.truth_((function (){var and__3822__auto____3237 = model;

if(cljs.core.truth_(and__3822__auto____3237))
{return model.session$client$loop$ILoop$evaluate_loop;
} else
{return and__3822__auto____3237;
}
})()))
{return model.session$client$loop$ILoop$evaluate_loop(model);
} else
{return (function (){var or__3824__auto____3238 = (session.client.loop.evaluate_loop[goog.typeOf.call(null,model)]);

if(cljs.core.truth_(or__3824__auto____3238))
{return or__3824__auto____3238;
} else
{var or__3824__auto____3239 = (session.client.loop.evaluate_loop["_"]);

if(cljs.core.truth_(or__3824__auto____3239))
{return or__3824__auto____3239;
} else
{throw cljs.core.missing_protocol.call(null,"ILoop.evaluate-loop",model);
}
}
})().call(null,model);
}
});

/**
* @constructor
*/
session.client.loop.Loop = (function (model){
this.model = model;
})
session.client.loop.Loop.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"session.client.loop.Loop");
});
session.client.loop.Loop.prototype.session$client$loop$ILoop$ = true;
session.client.loop.Loop.prototype.session$client$loop$ILoop$evaluate_loop = (function (model){
var this__3240 = this;
return fetch.remotes.remote_callback.call(null,"compile-expr-string",cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,"\uFDD0'input".call(null,model))]),(function (result){
return cljs.core.reset_BANG_.call(null,"\uFDD0'output".call(null,model),eval.call(null,"\uFDD0'result".call(null,result)));
}));
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$ = true;
session.client.loop.Loop.prototype.session$client$mvc$IMVC$view = (function (model){
var this__3241 = this;
var id__3242 = "\uFDD0'id".call(null,model);

return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__3242}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span10.row",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":cljs.core.str.call(null,"delete",id__3242),"\uFDD0'style":"float:right"}),"x"])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span8",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":cljs.core.str.call(null,"area",id__3242),"\uFDD0'style":"position:relative;height:36px"}),cljs.core.deref.call(null,"\uFDD0'input".call(null,model))])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":cljs.core.str.call(null,"out",id__3242)}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span8.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background:#DDD;position:relative;height:20px"}),session.client.mvc.view2.call(null,cljs.core.deref.call(null,"\uFDD0'output".call(null,model)))])]),session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})))])))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3243 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__3242}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span10.row",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":cljs.core.str.call(null,"delete",id__3242),"\uFDD0'style":"float:right"}),"x"])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span8",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":cljs.core.str.call(null,"area",id__3242),"\uFDD0'style":"position:relative;height:36px"}),cljs.core.deref.call(null,"\uFDD0'input".call(null,model))])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":cljs.core.str.call(null,"out",id__3242)}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span8.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background:#DDD;position:relative;height:20px"}),session.client.mvc.view2.call(null,cljs.core.deref.call(null,"\uFDD0'output".call(null,model)))])]),session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})))]));

if(cljs.core.truth_(or__3824__auto____3243))
{return or__3824__auto____3243;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__3242}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span10.row",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":cljs.core.str.call(null,"delete",id__3242),"\uFDD0'style":"float:right"}),"x"])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span8",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":cljs.core.str.call(null,"area",id__3242),"\uFDD0'style":"position:relative;height:36px"}),cljs.core.deref.call(null,"\uFDD0'input".call(null,model))])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":cljs.core.str.call(null,"out",id__3242)}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span8.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background:#DDD;position:relative;height:20px"}),session.client.mvc.view2.call(null,cljs.core.deref.call(null,"\uFDD0'output".call(null,model)))])]),session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})))]));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__3242}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span10.row",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":cljs.core.str.call(null,"delete",id__3242),"\uFDD0'style":"float:right"}),"x"])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span8",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":cljs.core.str.call(null,"area",id__3242),"\uFDD0'style":"position:relative;height:36px"}),cljs.core.deref.call(null,"\uFDD0'input".call(null,model))])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":cljs.core.str.call(null,"out",id__3242)}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span8.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background:#DDD;position:relative;height:20px"}),session.client.mvc.view2.call(null,cljs.core.deref.call(null,"\uFDD0'output".call(null,model)))])]),session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})))])):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__3242}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span10.row",cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":cljs.core.str.call(null,"delete",id__3242),"\uFDD0'style":"float:right"}),"x"])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span8",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":cljs.core.str.call(null,"area",id__3242),"\uFDD0'style":"position:relative;height:36px"}),cljs.core.deref.call(null,"\uFDD0'input".call(null,model))])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":cljs.core.str.call(null,"out",id__3242)}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span8.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background:#DDD;position:relative;height:20px"}),session.client.mvc.view2.call(null,cljs.core.deref.call(null,"\uFDD0'output".call(null,model)))])]),session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})))])):null))),cljs.core.PersistentVector.fromArray(["data","model",model]));
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$control = (function (model,viewobject){
var this__3244 = this;
var model__3246 = cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3245 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____3245))
{return or__3824__auto____3245;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["data","model"]));
var id__3247 = "\uFDD0'id".call(null,model__3246);
var editor__3248 = cljs.core.atom.call(null,cljs.core.PersistentVector.fromArray([]));

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3249 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____3249))
{return or__3824__auto____3249;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-creator",(function (){
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3250 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____3250))
{return or__3824__auto____3250;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","insert-new-loop"]));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3251 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____3251))
{return or__3824__auto____3251;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","post-render",(function (){
return cljs.core.reset_BANG_.call(null,editor__3248,session.client.editor.create_editor.call(null,cljs.core.str.call(null,"area",id__3247)));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3252 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____3252))
{return or__3824__auto____3252;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-deleter",(function (){
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3253 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____3253))
{return or__3824__auto____3253;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","delete-loop"]));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3254 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____3254))
{return or__3824__auto____3254;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-input",(function (){
cljs.core.reset_BANG_.call(null,"\uFDD0'input".call(null,model__3246),cljs.core.deref.call(null,editor__3248).getSession().getValue());
return session.client.loop.evaluate_loop.call(null,model__3246);
})]));
return cljs.core.add_watch.call(null,"\uFDD0'output".call(null,model__3246),"\uFDD0'update-output",(function (key,atom,old,new$){
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Atom,cljs.core.type.call(null,new$))))
{alert.call(null,"add atom to watch");
cljs.core.add_watch.call(null,new$,"\uFDD0'update-from-atom",(function (key2,atom2,old2,new2){
alert.call(null,"atom update");
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3255 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____3255))
{return or__3824__auto____3255;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"])),cljs.core.PersistentVector.fromArray(["html",""])),cljs.core.PersistentVector.fromArray(["append",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new2)])))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3256 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new2)]));

if(cljs.core.truth_(or__3824__auto____3256))
{return or__3824__auto____3256;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new2)]));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new2)])):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new2)])):null)))]));
}));
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3257 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____3257))
{return or__3824__auto____3257;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"])),cljs.core.PersistentVector.fromArray(["html",""])),cljs.core.PersistentVector.fromArray(["append",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,cljs.core.deref.call(null,new$))])))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3258 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,cljs.core.deref.call(null,new$))]));

if(cljs.core.truth_(or__3824__auto____3258))
{return or__3824__auto____3258;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,cljs.core.deref.call(null,new$))]));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,cljs.core.deref.call(null,new$))])):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,cljs.core.deref.call(null,new$))])):null)))]));
} else
{return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3259 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____3259))
{return or__3824__auto____3259;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"])),cljs.core.PersistentVector.fromArray(["html",""])),cljs.core.PersistentVector.fromArray(["append",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new$)])))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3260 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new$)]));

if(cljs.core.truth_(or__3824__auto____3260))
{return or__3824__auto____3260;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new$)]));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new$)])):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new$)])):null)))]));
}
}));
});
session.client.loop.Loop.prototype.cljs$core$ILookup$ = true;
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3264 = null;
var G__3264__3265 = (function (o,k){
var this__3261 = this;
return this__3261.model.call(null,k);
});
var G__3264__3266 = (function (o,k,not_found){
var this__3262 = this;
return this__3262.model.call(null,k,not_found);
});
G__3264 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3264__3265.call(this,o,k);
case  3 :
return G__3264__3266.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3264;
})()
;
session.client.loop.Loop.prototype.cljs$core$IPrintable$ = true;
session.client.loop.Loop.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3263 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#session/loop "]),cljs.core._pr_seq.call(null,cljs.core.assoc.call(null,this__3263.model,"\uFDD0'input",cljs.core.deref.call(null,"\uFDD0'input".call(null,this__3263.model)),"\uFDD0'output",cljs.core.deref.call(null,"\uFDD0'output".call(null,this__3263.model))),opts),"");
});
session.client.loop.Loop;
