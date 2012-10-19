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
session.client.loop.Loop.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"session.client.loop/Loop");
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$ = true;
session.client.loop.Loop.prototype.session$client$mvc$IMVC$view$arity$1 = (function (model){
var this__6426 = this;
var id__6427 = (new cljs.core.Keyword("\uFDD0'id")).call(null,model);
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__6427}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__6427)].join(''),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":[cljs.core.str("delete"),cljs.core.str(id__6427)].join(''),"\uFDD0'style":"margin-left:10px;float:none"}),"x"], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("out"),cljs.core.str(id__6427)].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(false)))], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6428 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__6427}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__6427)].join(''),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":[cljs.core.str("delete"),cljs.core.str(id__6427)].join(''),"\uFDD0'style":"margin-left:10px;float:none"}),"x"], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("out"),cljs.core.str(id__6427)].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(false)))], true));
if(or__3824__auto____6428)
{return or__3824__auto____6428;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__6427}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__6427)].join(''),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":[cljs.core.str("delete"),cljs.core.str(id__6427)].join(''),"\uFDD0'style":"margin-left:10px;float:none"}),"x"], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("out"),cljs.core.str(id__6427)].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(false)))], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__6427}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__6427)].join(''),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":[cljs.core.str("delete"),cljs.core.str(id__6427)].join(''),"\uFDD0'style":"margin-left:10px;float:none"}),"x"], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("out"),cljs.core.str(id__6427)].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(false)))], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__6427}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__6427)].join(''),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":[cljs.core.str("delete"),cljs.core.str(id__6427)].join(''),"\uFDD0'style":"margin-left:10px;float:none"}),"x"], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("out"),cljs.core.str(id__6427)].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(false)))], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",model], true));
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$control$arity$2 = (function (model,viewobject){
var this__6429 = this;
var model__6431 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6430 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6430)
{return or__3824__auto____6430;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
var id__6432 = (new cljs.core.Keyword("\uFDD0'id")).call(null,model__6431);
var editor__6433 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6434 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6434)
{return or__3824__auto____6434;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-creator",(function (){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6435 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6435)
{return or__3824__auto____6435;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","insert-new-loop"], true));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6436 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6436)
{return or__3824__auto____6436;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","post-render",(function (){
cljs.core.reset_BANG_.call(null,editor__6433,session.client.editor.create_editor.call(null,[cljs.core.str("area"),cljs.core.str(id__6432)].join('')));
return session.client.editor.fit_to_length.call(null,[cljs.core.str("area"),cljs.core.str(id__6432)].join(''),cljs.core.deref.call(null,editor__6433));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6437 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6437)
{return or__3824__auto____6437;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-deleter",(function (){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6438 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6438)
{return or__3824__auto____6438;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","delete-loop"], true));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6439 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6439)
{return or__3824__auto____6439;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-input",(function (){
cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model__6431),cljs.core.deref.call(null,editor__6433).getSession().getValue());
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6440 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6440)
{return or__3824__auto____6440;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","evaluate-loop"], true));
})], true));
return cljs.core.add_watch.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model__6431),"\uFDD0'update-output",(function (key,atom,old,new$){
if(cljs.core._EQ_.call(null,cljs.core.Atom,cljs.core.type.call(null,new$)))
{alert("add atom to watch");
cljs.core.add_watch.call(null,new$,"\uFDD0'update-from-atom",(function (key2,atom2,old2,new2){
alert("atom update");
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6441 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6441)
{return or__3824__auto____6441;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true)),cljs.core.PersistentVector.fromArray(["append",((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new2)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6442 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new2)], true));
if(or__3824__auto____6442)
{return or__3824__auto____6442;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new2)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new2)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new2)], true)):null)))], true));
}));
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6443 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6443)
{return or__3824__auto____6443;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true)),cljs.core.PersistentVector.fromArray(["append",((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,cljs.core.deref.call(null,new$))], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6444 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,cljs.core.deref.call(null,new$))], true));
if(or__3824__auto____6444)
{return or__3824__auto____6444;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,cljs.core.deref.call(null,new$))], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,cljs.core.deref.call(null,new$))], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,cljs.core.deref.call(null,new$))], true)):null)))], true));
} else
{return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6445 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____6445)
{return or__3824__auto____6445;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true)),cljs.core.PersistentVector.fromArray(["append",((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6446 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true));
if(or__3824__auto____6446)
{return or__3824__auto____6446;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true)):null)))], true));
}
}));
});
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__6447 = this;
return this__6447.model.call(null,k);
});
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__6448 = this;
return this__6448.model.call(null,k,not_found);
});
session.client.loop.Loop.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__6449 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#session/loop "], true),cljs.core._pr_seq.call(null,cljs.core.assoc.call(null,this__6449.model,"\uFDD0'input",cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__6449.model)),"\uFDD0'output",cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,this__6449.model))),opts),"");
});
session.client.loop.Loop;
cljs.reader.register_tag_parser_BANG_.call(null,"loop",(function (x){
return (new session.client.loop.Loop(cljs.core.assoc.call(null,x,"\uFDD0'input",cljs.core.atom.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,x)),"\uFDD0'output",cljs.core.atom.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,x)))));
}));
