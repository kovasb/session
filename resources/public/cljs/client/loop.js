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
this.cljs$lang$protocol_mask$partition0$ = 256;
})
session.client.loop.Loop.cljs$lang$type = true;
session.client.loop.Loop.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"session.client.loop/Loop");
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$ = true;
session.client.loop.Loop.prototype.session$client$mvc$IMVC$view$arity$1 = (function (model){
var this__11422 = this;
var id__11423 = (new cljs.core.Keyword("\uFDD0'id")).call(null,model);
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__11423)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____11424 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__11423)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true));
if(or__3824__auto____11424)
{return or__3824__auto____11424;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__11423)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__11423)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__11423)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",model], true));
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$control$arity$2 = (function (model,viewobject){
var this__11425 = this;
var model__11427 = cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____11426 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____11426)
{return or__3824__auto____11426;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["data","model"], true));
var id__11428 = (new cljs.core.Keyword("\uFDD0'id")).call(null,model__11427);
var editor__11429 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____11430 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____11430)
{return or__3824__auto____11430;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-creator",(function (){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____11431 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____11431)
{return or__3824__auto____11431;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","insert-new-loop"], true));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____11432 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____11432)
{return or__3824__auto____11432;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","post-render",(function (){
return cljs.core.reset_BANG_.call(null,editor__11429,session.client.editor.create_editor.call(null,[cljs.core.str("area"),cljs.core.str(id__11428)].join('')));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____11433 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____11433)
{return or__3824__auto____11433;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-deleter",(function (){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____11434 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____11434)
{return or__3824__auto____11434;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","delete-loop"], true));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____11435 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____11435)
{return or__3824__auto____11435;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-input",(function (){
cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model__11427),cljs.core.deref.call(null,editor__11429).getValue());
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____11436 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____11436)
{return or__3824__auto____11436;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","evaluate-loop"], true));
})], true));
return cljs.core.add_watch.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model__11427),"\uFDD0'update-output",(function (key,atom,old,new$){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____11437 = cljs.core.vector_QMARK_.call(null,viewobject);
if(or__3824__auto____11437)
{return or__3824__auto____11437;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):((true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true)),cljs.core.PersistentVector.fromArray(["append",((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____11438 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true));
if(or__3824__auto____11438)
{return or__3824__auto____11438;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true)):null)))], true));
}));
});
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__11439 = this;
return this__11439.model.call(null,k);
});
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__11440 = this;
return this__11440.model.call(null,k,not_found);
});
session.client.loop.Loop;
