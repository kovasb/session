goog.provide('session.client.loop');
goog.require('cljs.core');
goog.require('session.client.loop_creator');
goog.require('cljs.reader');
goog.require('session.client.editor');
goog.require('session.client.mvc');

/**
* @constructor
*/
session.client.loop.Loop = (function (model){
this.model = model;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 536871168;
})
session.client.loop.Loop.cljs$lang$type = true;
session.client.loop.Loop.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"session.client.loop/Loop");
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$ = true;
session.client.loop.Loop.prototype.session$client$mvc$IMVC$view$arity$1 = (function (model){
var this__6377 = this;
var id__6378 = (new cljs.core.Keyword("\uFDD0'id")).call(null,model);
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__6378}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__6378)].join(''),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":[cljs.core.str("delete"),cljs.core.str(id__6378)].join(''),"\uFDD0'style":"margin-left:10px;float:none"}),"x"], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("out"),cljs.core.str(id__6378)].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(false)))], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6379 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__6378}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__6378)].join(''),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":[cljs.core.str("delete"),cljs.core.str(id__6378)].join(''),"\uFDD0'style":"margin-left:10px;float:none"}),"x"], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("out"),cljs.core.str(id__6378)].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(false)))], true));
if(or__3824__auto____6379)
{return or__3824__auto____6379;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__6378}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__6378)].join(''),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":[cljs.core.str("delete"),cljs.core.str(id__6378)].join(''),"\uFDD0'style":"margin-left:10px;float:none"}),"x"], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("out"),cljs.core.str(id__6378)].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(false)))], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__6378}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__6378)].join(''),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":[cljs.core.str("delete"),cljs.core.str(id__6378)].join(''),"\uFDD0'style":"margin-left:10px;float:none"}),"x"], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("out"),cljs.core.str(id__6378)].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(false)))], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__6378}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__6378)].join(''),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":[cljs.core.str("delete"),cljs.core.str(id__6378)].join(''),"\uFDD0'style":"margin-left:10px;float:none"}),"x"], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("out"),cljs.core.str(id__6378)].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(false)))], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",model], true));
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$control$arity$2 = (function (model,viewobject){
var this__6380 = this;
var model__6382 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6381 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6381)
{return or__3824__auto____6381;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
var id__6383 = (new cljs.core.Keyword("\uFDD0'id")).call(null,model__6382);
var editor__6384 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6385 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6385)
{return or__3824__auto____6385;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-creator",(function (){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6386 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6386)
{return or__3824__auto____6386;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","insert-new-loop"], true));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6387 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6387)
{return or__3824__auto____6387;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","post-render",(function (){
cljs.core.reset_BANG_.call(null,editor__6384,session.client.editor.create_editor.call(null,[cljs.core.str("area"),cljs.core.str(id__6383)].join('')));
return session.client.editor.fit_to_length.call(null,[cljs.core.str("area"),cljs.core.str(id__6383)].join(''),cljs.core.deref.call(null,editor__6384));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6388 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6388)
{return or__3824__auto____6388;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-deleter",(function (){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6389 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6389)
{return or__3824__auto____6389;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","delete-loop"], true));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6390 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6390)
{return or__3824__auto____6390;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-input",(function (){
cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model__6382),cljs.core.deref.call(null,editor__6384).getSession().getValue());
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6391 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6391)
{return or__3824__auto____6391;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","evaluate-loop"], true));
})], true));
return cljs.core.add_watch.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model__6382),"\uFDD0'update-output",(function (key,atom,old,new$){
if(cljs.core._EQ_.call(null,cljs.core.Atom,cljs.core.type.call(null,new$)))
{alert("add atom to watch");
cljs.core.add_watch.call(null,new$,"\uFDD0'update-from-atom",(function (key2,atom2,old2,new2){
alert("atom update");
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6392 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6392)
{return or__3824__auto____6392;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true)),cljs.core.PersistentVector.fromArray(["append",((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new2)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6393 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new2)], true));
if(or__3824__auto____6393)
{return or__3824__auto____6393;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new2)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new2)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new2)], true)):null)))], true));
}));
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6394 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6394)
{return or__3824__auto____6394;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true)),cljs.core.PersistentVector.fromArray(["append",((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,cljs.core.deref.call(null,new$))], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6395 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,cljs.core.deref.call(null,new$))], true));
if(or__3824__auto____6395)
{return or__3824__auto____6395;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,cljs.core.deref.call(null,new$))], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,cljs.core.deref.call(null,new$))], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,cljs.core.deref.call(null,new$))], true)):null)))], true));
} else
{return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6396 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6396)
{return or__3824__auto____6396;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true)),cljs.core.PersistentVector.fromArray(["append",((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6397 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true));
if(or__3824__auto____6397)
{return or__3824__auto____6397;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true)):null)))], true));
}
}));
});
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__6398 = this;
return this__6398.model.call(null,k);
});
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__6399 = this;
return this__6399.model.call(null,k,not_found);
});
session.client.loop.Loop.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__6400 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#session/loop "], true),cljs.core._pr_seq.call(null,cljs.core.assoc.call(null,this__6400.model,"\uFDD0'input",cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__6400.model)),"\uFDD0'output",cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,this__6400.model))),opts),"");
});
session.client.loop.Loop;
cljs.reader.register_tag_parser_BANG_.call(null,"loop",(function (x){
return (new session.client.loop.Loop(cljs.core.assoc.call(null,x,"\uFDD0'input",cljs.core.atom.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,x)),"\uFDD0'output",cljs.core.atom.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,x)))));
}));
