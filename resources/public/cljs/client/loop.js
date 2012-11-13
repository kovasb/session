goog.provide('session.client.loop');
goog.require('cljs.core');
goog.require('session.client.loop_creator');
goog.require('cljs.reader');
goog.require('session.client.editor');
goog.require('session.client.mvc');
goog.require('session.client.subscribe');
session.client.loop.render_loop_output = (function render_loop_output(x){
var y__6434 = session.client.mvc.view.call(null,x);
if(cljs.core.string_QMARK_.call(null,y__6434))
{try{var d__6437 = document.createElement("div");
CodeMirror.runMode(y__6434,"text/x-clojure",d__6437);
return d__6437;
}catch (e6435){if(cljs.core.instance_QMARK_.call(null,Error,e6435))
{var e__6436 = e6435;
return alert(cljs.core.pr_str.call(null,cljs.core.PersistentVector.fromArray([y__6434,e__6436], true)));
} else
{if("\uFDD0'else")
{throw e6435;
} else
{return null;
}
}
}} else
{return y__6434;
}
});

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
session.client.loop.Loop.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"session.client.loop/Loop");
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$ = true;
session.client.loop.Loop.prototype.session$client$mvc$IMVC$view$arity$1 = (function (model){
var this__6438 = this;
var v__6446 = (function (){var id__6439 = (new cljs.core.Keyword("\uFDD0'id")).call(null,model);
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__6439,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6440 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____6440)
{return or__3939__auto____6440;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__6439,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__6439})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right.icon-white",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__6439)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left.icon-white",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-ambiance",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#000"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__6439,cljs.core.atom.call(null,null))))], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6442 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__6439,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6441 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____6441)
{return or__3939__auto____6441;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__6439,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__6439})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right.icon-white",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__6439)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left.icon-white",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-ambiance",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#000"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__6439,cljs.core.atom.call(null,null))))], true)], true));
if(or__3939__auto____6442)
{return or__3939__auto____6442;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__6439,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6443 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____6443)
{return or__3939__auto____6443;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__6439,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__6439})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right.icon-white",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__6439)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left.icon-white",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-ambiance",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#000"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__6439,cljs.core.atom.call(null,null))))], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__6439,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6444 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____6444)
{return or__3939__auto____6444;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__6439,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__6439})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right.icon-white",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__6439)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left.icon-white",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-ambiance",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#000"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__6439,cljs.core.atom.call(null,null))))], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__6439,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6445 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____6445)
{return or__3939__auto____6445;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__6439,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__6439})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right.icon-white",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__6439)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left.icon-white",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-ambiance",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#000"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__6439,cljs.core.atom.call(null,null))))], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",model], true));
})();
cljs.core.reset_BANG_.call(null,this__6438.dom,v__6446);
return v__6446;
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var this__6447 = this;
var dom_elt__6448 = cljs.core.deref.call(null,this__6447.dom);
session.client.subscribe.subscribe_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'id")).call(null,this__6447.model),this$);
var id__6449 = (new cljs.core.Keyword("\uFDD0'id")).call(null,this__6447.model);
var editor__6450 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__6448))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6451 = cljs.core.vector_QMARK_.call(null,dom_elt__6448);
if(or__3939__auto____6451)
{return or__3939__auto____6451;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__6448);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__6448):((true)?cljs_jquery.core.jquery.call(null,dom_elt__6448):null))),cljs.core.PersistentVector.fromArray(["on","post-render",(function (){
return cljs.core.reset_BANG_.call(null,editor__6450,session.client.editor.create_editor.call(null,[cljs.core.str("area"),cljs.core.str(id__6449)].join('')));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__6448))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6452 = cljs.core.vector_QMARK_.call(null,dom_elt__6448);
if(or__3939__auto____6452)
{return or__3939__auto____6452;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__6448);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__6448):((true)?cljs_jquery.core.jquery.call(null,dom_elt__6448):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-deleter",(function (){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__6448))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6453 = cljs.core.vector_QMARK_.call(null,dom_elt__6448);
if(or__3939__auto____6453)
{return or__3939__auto____6453;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__6448);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__6448):((true)?cljs_jquery.core.jquery.call(null,dom_elt__6448):null))),cljs.core.PersistentVector.fromArray(["trigger","delete-loop"], true));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__6448))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6454 = cljs.core.vector_QMARK_.call(null,dom_elt__6448);
if(or__3939__auto____6454)
{return or__3939__auto____6454;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__6448);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__6448):((true)?cljs_jquery.core.jquery.call(null,dom_elt__6448):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-input",(function (){
cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__6448))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6455 = cljs.core.vector_QMARK_.call(null,dom_elt__6448);
if(or__3939__auto____6455)
{return or__3939__auto____6455;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__6448);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__6448):((true)?cljs_jquery.core.jquery.call(null,dom_elt__6448):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true));
cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__6447.model),cljs.core.deref.call(null,editor__6450).getValue());
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'evaluate-clj","\uFDD0'id":(new cljs.core.Keyword("\uFDD0'id")).call(null,this__6447.model),"\uFDD0'data":cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__6447.model))}));
})], true));
return cljs.core.add_watch.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,this__6447.model),"\uFDD0'update-output",(function (key,atom,old,new$){
var viewable__6456 = session.client.mvc.view.call(null,new$);
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__6448))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6457 = cljs.core.vector_QMARK_.call(null,dom_elt__6448);
if(or__3939__auto____6457)
{return or__3939__auto____6457;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__6448);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__6448):((true)?cljs_jquery.core.jquery.call(null,dom_elt__6448):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true)),cljs.core.PersistentVector.fromArray(["append",((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-ambiance",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#000"}),session.client.loop.render_loop_output.call(null,new$)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____6458 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-ambiance",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#000"}),session.client.loop.render_loop_output.call(null,new$)], true));
if(or__3939__auto____6458)
{return or__3939__auto____6458;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-ambiance",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#000"}),session.client.loop.render_loop_output.call(null,new$)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-ambiance",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#000"}),session.client.loop.render_loop_output.call(null,new$)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-ambiance",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#000"}),session.client.loop.render_loop_output.call(null,new$)], true)):null)))], true));
}));
});
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__6459 = this;
return this__6459.model.call(null,k);
});
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__6460 = this;
return this__6460.model.call(null,k,not_found);
});
session.client.loop.Loop.prototype.session$client$subscribe$ISubscribe$ = true;
session.client.loop.Loop.prototype.session$client$subscribe$ISubscribe$receive$arity$2 = (function (this$,msg){
var this__6461 = this;
return cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,this__6461.model),(new cljs.core.Keyword("\uFDD0'data")).call(null,msg));
});
session.client.loop.Loop;
