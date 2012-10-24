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
var this__7143 = this;
var id__7144 = (new cljs.core.Keyword("\uFDD0'id")).call(null,model);
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__7144}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__7144)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":[cljs.core.str("delete"),cljs.core.str(id__7144)].join(''),"\uFDD0'style":"margin-left:10px;float:none"}),"x"], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("out"),cljs.core.str(id__7144)].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(false)))], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7145 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__7144}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__7144)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":[cljs.core.str("delete"),cljs.core.str(id__7144)].join(''),"\uFDD0'style":"margin-left:10px;float:none"}),"x"], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("out"),cljs.core.str(id__7144)].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(false)))], true));
if(or__3824__auto____7145)
{return or__3824__auto____7145;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__7144}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__7144)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":[cljs.core.str("delete"),cljs.core.str(id__7144)].join(''),"\uFDD0'style":"margin-left:10px;float:none"}),"x"], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("out"),cljs.core.str(id__7144)].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(false)))], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__7144}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__7144)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":[cljs.core.str("delete"),cljs.core.str(id__7144)].join(''),"\uFDD0'style":"margin-left:10px;float:none"}),"x"], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("out"),cljs.core.str(id__7144)].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(false)))], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__7144}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__7144)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":[cljs.core.str("delete"),cljs.core.str(id__7144)].join(''),"\uFDD0'style":"margin-left:10px;float:none"}),"x"], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("out"),cljs.core.str(id__7144)].join('')}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(false)))], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",model], true));
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$control$arity$2 = (function (model,viewobject){
var this__7146 = this;
var model__7148 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7147 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____7147)
{return or__3824__auto____7147;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
var id__7149 = (new cljs.core.Keyword("\uFDD0'id")).call(null,model__7148);
var editor__7150 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7151 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____7151)
{return or__3824__auto____7151;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-creator",(function (){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7152 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____7152)
{return or__3824__auto____7152;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","insert-new-loop"], true));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7153 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____7153)
{return or__3824__auto____7153;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","post-render",(function (){
return cljs.core.reset_BANG_.call(null,editor__7150,session.client.editor.create_editor.call(null,[cljs.core.str("area"),cljs.core.str(id__7149)].join('')));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7154 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____7154)
{return or__3824__auto____7154;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-deleter",(function (){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7155 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____7155)
{return or__3824__auto____7155;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","delete-loop"], true));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7156 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____7156)
{return or__3824__auto____7156;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-input",(function (){
cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model__7148),cljs.core.deref.call(null,editor__7150).getValue());
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7157 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____7157)
{return or__3824__auto____7157;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","evaluate-loop"], true));
})], true));
return cljs.core.add_watch.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model__7148),"\uFDD0'update-output",(function (key,atom,old,new$){
if(cljs.core._EQ_.call(null,cljs.core.Atom,cljs.core.type.call(null,new$)))
{alert("add atom to watch");
cljs.core.add_watch.call(null,new$,"\uFDD0'update-from-atom",(function (key2,atom2,old2,new2){
alert("atom update");
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7158 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____7158)
{return or__3824__auto____7158;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true)),cljs.core.PersistentVector.fromArray(["append",((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new2)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7159 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new2)], true));
if(or__3824__auto____7159)
{return or__3824__auto____7159;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new2)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new2)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new2)], true)):null)))], true));
}));
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7160 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____7160)
{return or__3824__auto____7160;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true)),cljs.core.PersistentVector.fromArray(["append",((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,cljs.core.deref.call(null,new$))], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7161 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,cljs.core.deref.call(null,new$))], true));
if(or__3824__auto____7161)
{return or__3824__auto____7161;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,cljs.core.deref.call(null,new$))], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,cljs.core.deref.call(null,new$))], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,cljs.core.deref.call(null,new$))], true)):null)))], true));
} else
{return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7162 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____7162)
{return or__3824__auto____7162;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true)),cljs.core.PersistentVector.fromArray(["append",((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7163 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true));
if(or__3824__auto____7163)
{return or__3824__auto____7163;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true)):null)))], true));
}
}));
});
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__7164 = this;
return this__7164.model.call(null,k);
});
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__7165 = this;
return this__7165.model.call(null,k,not_found);
});
session.client.loop.Loop.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__7166 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#session/loop "], true),cljs.core._pr_seq.call(null,cljs.core.assoc.call(null,this__7166.model,"\uFDD0'input",cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__7166.model)),"\uFDD0'output",cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,this__7166.model))),opts),"");
});
session.client.loop.Loop;
cljs.reader.register_tag_parser_BANG_.call(null,"loop",(function (x){
return (new session.client.loop.Loop(cljs.core.assoc.call(null,x,"\uFDD0'input",cljs.core.atom.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,x)),"\uFDD0'output",cljs.core.atom.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,x)))));
}));
