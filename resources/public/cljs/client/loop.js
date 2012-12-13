goog.provide('session.client.loop');
goog.require('cljs.core');
goog.require('session.client.loop_creator');
goog.require('cljs.reader');
goog.require('session.client.editor');
goog.require('session.client.mvc');
goog.require('session.client.subscribe');
session.client.loop.render_loop_output = (function render_loop_output(x){
var y__7193 = session.client.mvc.view.call(null,x);
if(cljs.core.string_QMARK_.call(null,y__7193))
{try{var d__7196 = document.createElement("div");
CodeMirror.runMode(y__7193,"text/x-clojure",d__7196);
return d__7196;
}catch (e7194){if(cljs.core.instance_QMARK_.call(null,Error,e7194))
{var e__7195 = e7194;
return alert(cljs.core.pr_str.call(null,cljs.core.PersistentVector.fromArray([y__7193,e__7195], true)));
} else
{if("\uFDD0'else")
{throw e7194;
} else
{return null;
}
}
}} else
{return y__7193;
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
session.client.loop.Loop.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"session.client.loop/Loop");
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$ = true;
session.client.loop.Loop.prototype.session$client$mvc$IMVC$view$arity$1 = (function (model){
var this__7197 = this;
var v__7205 = (function (){var id__7198 = (new cljs.core.Keyword("\uFDD0'id")).call(null,model);
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__7198,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7199 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____7199)
{return or__3939__auto____7199;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__7198,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__7198})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__7198)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__7198,cljs.core.atom.call(null,null))))], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7201 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__7198,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7200 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____7200)
{return or__3939__auto____7200;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__7198,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__7198})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__7198)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__7198,cljs.core.atom.call(null,null))))], true)], true));
if(or__3939__auto____7201)
{return or__3939__auto____7201;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__7198,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7202 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____7202)
{return or__3939__auto____7202;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__7198,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__7198})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__7198)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__7198,cljs.core.atom.call(null,null))))], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__7198,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7203 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____7203)
{return or__3939__auto____7203;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__7198,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__7198})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__7198)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__7198,cljs.core.atom.call(null,null))))], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__7198,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7204 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____7204)
{return or__3939__auto____7204;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__7198,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__7198})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__7198)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__7198,cljs.core.atom.call(null,null))))], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",model], true));
})();
cljs.core.reset_BANG_.call(null,this__7197.dom,v__7205);
return v__7205;
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var this__7206 = this;
var dom_elt__7207 = cljs.core.deref.call(null,this__7206.dom);
session.client.subscribe.subscribe_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'id")).call(null,this__7206.model),this$);
var id__7208 = (new cljs.core.Keyword("\uFDD0'id")).call(null,this__7206.model);
var editor__7209 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__7207))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7210 = cljs.core.vector_QMARK_.call(null,dom_elt__7207);
if(or__3939__auto____7210)
{return or__3939__auto____7210;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__7207);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__7207):((true)?cljs_jquery.core.jquery.call(null,dom_elt__7207):null))),cljs.core.PersistentVector.fromArray(["on","post-render",(function (){
return cljs.core.reset_BANG_.call(null,editor__7209,session.client.editor.create_editor.call(null,[cljs.core.str("area"),cljs.core.str(id__7208)].join('')));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__7207))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7211 = cljs.core.vector_QMARK_.call(null,dom_elt__7207);
if(or__3939__auto____7211)
{return or__3939__auto____7211;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__7207);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__7207):((true)?cljs_jquery.core.jquery.call(null,dom_elt__7207):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-deleter",(function (){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__7207))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7212 = cljs.core.vector_QMARK_.call(null,dom_elt__7207);
if(or__3939__auto____7212)
{return or__3939__auto____7212;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__7207);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__7207):((true)?cljs_jquery.core.jquery.call(null,dom_elt__7207):null))),cljs.core.PersistentVector.fromArray(["trigger","delete-loop"], true));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__7207))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7213 = cljs.core.vector_QMARK_.call(null,dom_elt__7207);
if(or__3939__auto____7213)
{return or__3939__auto____7213;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__7207);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__7207):((true)?cljs_jquery.core.jquery.call(null,dom_elt__7207):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-input",(function (){
cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__7207))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7214 = cljs.core.vector_QMARK_.call(null,dom_elt__7207);
if(or__3939__auto____7214)
{return or__3939__auto____7214;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__7207);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__7207):((true)?cljs_jquery.core.jquery.call(null,dom_elt__7207):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true));
cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__7206.model),cljs.core.deref.call(null,editor__7209).getValue());
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'evaluate-clj","\uFDD0'id":(new cljs.core.Keyword("\uFDD0'id")).call(null,this__7206.model),"\uFDD0'data":cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__7206.model))}));
})], true));
return cljs.core.add_watch.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,this__7206.model),"\uFDD0'update-output",(function (key,atom,old,new$){
var viewable__7215 = session.client.mvc.view.call(null,new$);
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__7207))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7216 = cljs.core.vector_QMARK_.call(null,dom_elt__7207);
if(or__3939__auto____7216)
{return or__3939__auto____7216;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__7207);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__7207):((true)?cljs_jquery.core.jquery.call(null,dom_elt__7207):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true)),cljs.core.PersistentVector.fromArray(["append",((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7217 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true));
if(or__3939__auto____7217)
{return or__3939__auto____7217;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true)):null)))], true));
}));
});
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__7218 = this;
return this__7218.model.call(null,k);
});
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__7219 = this;
return this__7219.model.call(null,k,not_found);
});
session.client.loop.Loop.prototype.session$client$subscribe$ISubscribe$ = true;
session.client.loop.Loop.prototype.session$client$subscribe$ISubscribe$receive$arity$2 = (function (this$,msg){
var this__7220 = this;
return cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,this__7220.model),(new cljs.core.Keyword("\uFDD0'data")).call(null,msg));
});
session.client.loop.Loop;
