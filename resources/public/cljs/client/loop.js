goog.provide('session.client.loop');
goog.require('cljs.core');
goog.require('session.client.loop_creator');
goog.require('cljs.reader');
goog.require('session.client.editor');
goog.require('session.client.mvc');
goog.require('session.client.subscribe');
session.client.loop.render_loop_output = (function render_loop_output(x){
var y__7196 = session.client.mvc.view.call(null,x);
if(cljs.core.string_QMARK_.call(null,y__7196))
{try{var d__7199 = document.createElement("div");
CodeMirror.runMode(y__7196,"text/x-clojure",d__7199);
return d__7199;
}catch (e7197){if(cljs.core.instance_QMARK_.call(null,Error,e7197))
{var e__7198 = e7197;
return alert(cljs.core.pr_str.call(null,cljs.core.PersistentVector.fromArray([y__7196,e__7198], true)));
} else
{if("\uFDD0'else")
{throw e7197;
} else
{return null;
}
}
}} else
{return y__7196;
}
});

/**
* @constructor
*/
session.client.loop.Loop = (function (model,dom){
this.model = model;
this.dom = dom;
})
session.client.loop.Loop.cljs$lang$type = true;
session.client.loop.Loop.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"session.client.loop/Loop");
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$ = true;
session.client.loop.Loop.prototype.session$client$mvc$IMVC$view$arity$1 = (function (this$){
var this__7200 = this;
var v__7208 = (function (){var id__7201 = (new cljs.core.Keyword("\uFDD0'id")).call(null,this__7200.model);
if(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__7201,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7202 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____7202)
{return or__3939__auto____7202;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__7201,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__7201})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__7201)].join(''),"\uFDD0'class":"exp-input"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__7200.model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,this__7200.model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__7201,cljs.core.atom.call(null,null))))], true)], true)))
{return cljs_jquery.core.jquery.call(null,this);
} else
{if((function (){var or__3939__auto____7204 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__7201,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7203 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____7203)
{return or__3939__auto____7203;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__7201,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__7201})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__7201)].join(''),"\uFDD0'class":"exp-input"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__7200.model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,this__7200.model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__7201,cljs.core.atom.call(null,null))))], true)], true));
if(or__3939__auto____7204)
{return or__3939__auto____7204;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__7201,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7205 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____7205)
{return or__3939__auto____7205;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__7201,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__7201})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__7201)].join(''),"\uFDD0'class":"exp-input"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__7200.model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,this__7200.model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__7201,cljs.core.atom.call(null,null))))], true)], true));
}
})())
{return cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__7201,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7206 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____7206)
{return or__3939__auto____7206;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__7201,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__7201})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__7201)].join(''),"\uFDD0'class":"exp-input"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__7200.model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,this__7200.model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__7201,cljs.core.atom.call(null,null))))], true)], true));
} else
{if(true)
{return cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__7201,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7207 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____7207)
{return or__3939__auto____7207;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__7201,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__7201})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__7201)].join(''),"\uFDD0'class":"exp-input"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__7200.model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,this__7200.model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__7201,cljs.core.atom.call(null,null))))], true)], true));
} else
{return null;
}
}
}
})();
cljs.core.reset_BANG_.call(null,this__7200.dom,v__7208);
return v__7208;
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var this__7209 = this;
var dom_elt__7210 = cljs.core.deref.call(null,this__7209.dom);
session.client.subscribe.subscribe_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'id")).call(null,this__7209.model),this$);
var id__7211 = (new cljs.core.Keyword("\uFDD0'id")).call(null,this__7209.model);
var editor__7212 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__7210))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7213 = cljs.core.vector_QMARK_.call(null,dom_elt__7210);
if(or__3939__auto____7213)
{return or__3939__auto____7213;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__7210);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__7210):((true)?cljs_jquery.core.jquery.call(null,dom_elt__7210):null))),cljs.core.PersistentVector.fromArray(["on","post-render",(function (){
return cljs.core.reset_BANG_.call(null,editor__7212,session.client.editor.create_editor.call(null,id__7211));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__7210))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7214 = cljs.core.vector_QMARK_.call(null,dom_elt__7210);
if(or__3939__auto____7214)
{return or__3939__auto____7214;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__7210);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__7210):((true)?cljs_jquery.core.jquery.call(null,dom_elt__7210):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-input",(function (){
cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__7210))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7215 = cljs.core.vector_QMARK_.call(null,dom_elt__7210);
if(or__3939__auto____7215)
{return or__3939__auto____7215;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__7210);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__7210):((true)?cljs_jquery.core.jquery.call(null,dom_elt__7210):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true));
cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__7209.model),cljs.core.deref.call(null,editor__7212).getValue());
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'evaluate-clj","\uFDD0'id":(new cljs.core.Keyword("\uFDD0'id")).call(null,this__7209.model),"\uFDD0'data":cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__7209.model))}));
})], true));
cljs.core.add_watch.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,this__7209.model),"\uFDD0'update-output",(function (key,atom,old,new$){
var viewable__7216 = session.client.mvc.view.call(null,new$);
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__7210))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7217 = cljs.core.vector_QMARK_.call(null,dom_elt__7210);
if(or__3939__auto____7217)
{return or__3939__auto____7217;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__7210);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__7210):((true)?cljs_jquery.core.jquery.call(null,dom_elt__7210):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true)),cljs.core.PersistentVector.fromArray(["append",((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7218 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true));
if(or__3939__auto____7218)
{return or__3939__auto____7218;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true)):null)))], true));
}));
return cljs.core.add_watch.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__7209.model),"\uFDD0'input-output",(function (key,atom,old,new$){
cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__7210))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7219 = cljs.core.vector_QMARK_.call(null,dom_elt__7210);
if(or__3939__auto____7219)
{return or__3939__auto____7219;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__7210);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__7210):((true)?cljs_jquery.core.jquery.call(null,dom_elt__7210):null))),cljs.core.PersistentVector.fromArray(["find","textarea.exp-input"], true)),cljs.core.PersistentVector.fromArray(["html",new$], true));
return cljs.core.deref.call(null,editor__7212).setValue(new$);
}));
});
session.client.loop.Loop.prototype.session$client$subscribe$ISubscribe$ = true;
session.client.loop.Loop.prototype.session$client$subscribe$ISubscribe$receive$arity$2 = (function (this$,msg){
var this__7220 = this;
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'data")).call(null,msg)))
{cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,this__7220.model),(new cljs.core.Keyword("\uFDD0'data")).call(null,msg));
} else
{}
if(cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'origin")).call(null,msg),session.client.main.session_uuid))
{return null;
} else
{return cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__7220.model),(new cljs.core.Keyword("\uFDD0'input")).call(null,msg));
}
});
session.client.loop.Loop;
