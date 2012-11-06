goog.provide('session.client.loop');
goog.require('cljs.core');
goog.require('session.client.loop_creator');
goog.require('cljs.reader');
goog.require('session.client.editor');
goog.require('session.client.mvc');
goog.require('session.client.subscribe');

/**
* @constructor
*/
session.client.loop.Loop = (function (model,dom){
this.model = model;
this.dom = dom;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 256;
})
session.client.loop.Loop.cljs$lang$type = true;
session.client.loop.Loop.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"session.client.loop/Loop");
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$ = true;
session.client.loop.Loop.prototype.session$client$mvc$IMVC$view$arity$1 = (function (model){
var this__119459 = this;
var v__119462 = (function (){var id__119460 = (new cljs.core.Keyword("\uFDD0'id")).call(null,model);
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__119460)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____119461 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__119460)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true));
if(or__3824__auto____119461)
{return or__3824__auto____119461;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__119460)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__119460)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__119460)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",session.client.mvc.view.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",model], true));
})();
cljs.core.reset_BANG_.call(null,this__119459.dom,v__119462);
return v__119462;
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var this__119463 = this;
var dom_elt__119464 = cljs.core.deref.call(null,this__119463.dom);
session.client.subscribe.subscribe_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'id")).call(null,this__119463.model),this$);
var id__119465 = (new cljs.core.Keyword("\uFDD0'id")).call(null,this__119463.model);
var editor__119466 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__119464))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____119467 = cljs.core.vector_QMARK_.call(null,dom_elt__119464);
if(or__3824__auto____119467)
{return or__3824__auto____119467;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__119464);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__119464):((true)?cljs_jquery.core.jquery.call(null,dom_elt__119464):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-creator",(function (){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__119464))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____119468 = cljs.core.vector_QMARK_.call(null,dom_elt__119464);
if(or__3824__auto____119468)
{return or__3824__auto____119468;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__119464);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__119464):((true)?cljs_jquery.core.jquery.call(null,dom_elt__119464):null))),cljs.core.PersistentVector.fromArray(["trigger","insert-new-loop"], true));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__119464))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____119469 = cljs.core.vector_QMARK_.call(null,dom_elt__119464);
if(or__3824__auto____119469)
{return or__3824__auto____119469;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__119464);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__119464):((true)?cljs_jquery.core.jquery.call(null,dom_elt__119464):null))),cljs.core.PersistentVector.fromArray(["on","post-render",(function (){
return cljs.core.reset_BANG_.call(null,editor__119466,session.client.editor.create_editor.call(null,[cljs.core.str("area"),cljs.core.str(id__119465)].join('')));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__119464))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____119470 = cljs.core.vector_QMARK_.call(null,dom_elt__119464);
if(or__3824__auto____119470)
{return or__3824__auto____119470;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__119464);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__119464):((true)?cljs_jquery.core.jquery.call(null,dom_elt__119464):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-deleter",(function (){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__119464))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____119471 = cljs.core.vector_QMARK_.call(null,dom_elt__119464);
if(or__3824__auto____119471)
{return or__3824__auto____119471;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__119464);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__119464):((true)?cljs_jquery.core.jquery.call(null,dom_elt__119464):null))),cljs.core.PersistentVector.fromArray(["trigger","delete-loop"], true));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__119464))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____119472 = cljs.core.vector_QMARK_.call(null,dom_elt__119464);
if(or__3824__auto____119472)
{return or__3824__auto____119472;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__119464);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__119464):((true)?cljs_jquery.core.jquery.call(null,dom_elt__119464):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-input",(function (){
cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__119463.model),cljs.core.deref.call(null,editor__119466).getValue());
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'evaluate-clj","\uFDD0'id":(new cljs.core.Keyword("\uFDD0'id")).call(null,this__119463.model),"\uFDD0'data":cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__119463.model))}));
})], true));
return cljs.core.add_watch.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,this__119463.model),"\uFDD0'update-output",(function (key,atom,old,new$){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__119464))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____119473 = cljs.core.vector_QMARK_.call(null,dom_elt__119464);
if(or__3824__auto____119473)
{return or__3824__auto____119473;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__119464);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__119464):((true)?cljs_jquery.core.jquery.call(null,dom_elt__119464):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true)),cljs.core.PersistentVector.fromArray(["append",((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____119474 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true));
if(or__3824__auto____119474)
{return or__3824__auto____119474;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view.call(null,new$)], true)):null)))], true));
}));
});
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__119475 = this;
return this__119475.model.call(null,k);
});
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__119476 = this;
return this__119476.model.call(null,k,not_found);
});
session.client.loop.Loop.prototype.session$client$subscribe$ISubscribe$ = true;
session.client.loop.Loop.prototype.session$client$subscribe$ISubscribe$receive$arity$2 = (function (this$,msg){
var this__119477 = this;
return cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,this__119477.model),(new cljs.core.Keyword("\uFDD0'data")).call(null,msg));
});
session.client.loop.Loop;
