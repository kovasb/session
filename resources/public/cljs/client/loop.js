goog.provide('session.client.loop');
goog.require('cljs.core');
goog.require('session.client.loop_creator');
goog.require('cljs.reader');
goog.require('session.client.editor');
goog.require('session.client.mvc');
goog.require('session.client.subscribe');
session.client.loop.render_loop_output = (function render_loop_output(x){
var y__14555 = session.client.mvc.view.call(null,x);
if(cljs.core.string_QMARK_.call(null,y__14555))
{try{var d__14558 = document.createElement("div");
CodeMirror.runMode(y__14555,"text/x-clojure",d__14558);
return d__14558;
}catch (e14556){if(cljs.core.instance_QMARK_.call(null,Error,e14556))
{var e__14557 = e14556;
return alert(cljs.core.pr_str.call(null,cljs.core.PersistentVector.fromArray([y__14555,e__14557], true)));
} else
{if("\uFDD0'else")
{throw e14556;
} else
{return null;
}
}
}} else
{return y__14555;
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
var this__14559 = this;
var v__14567 = (function (){var id__14560 = (new cljs.core.Keyword("\uFDD0'id")).call(null,model);
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__14560,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____14561 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____14561)
{return or__3939__auto____14561;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__14560,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__14560})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__14560)].join(''),"\uFDD0'class":"exp-input"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__14560,cljs.core.atom.call(null,null))))], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____14563 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__14560,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____14562 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____14562)
{return or__3939__auto____14562;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__14560,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__14560})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__14560)].join(''),"\uFDD0'class":"exp-input"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__14560,cljs.core.atom.call(null,null))))], true)], true));
if(or__3939__auto____14563)
{return or__3939__auto____14563;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__14560,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____14564 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____14564)
{return or__3939__auto____14564;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__14560,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__14560})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__14560)].join(''),"\uFDD0'class":"exp-input"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__14560,cljs.core.atom.call(null,null))))], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__14560,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____14565 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____14565)
{return or__3939__auto____14565;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__14560,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__14560})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__14560)].join(''),"\uFDD0'class":"exp-input"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__14560,cljs.core.atom.call(null,null))))], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id__14560,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____14566 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____14566)
{return or__3939__auto____14566;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id__14560,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__14560})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id__14560)].join(''),"\uFDD0'class":"exp-input"}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id__14560,cljs.core.atom.call(null,null))))], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",model], true));
})();
cljs.core.reset_BANG_.call(null,this__14559.dom,v__14567);
return v__14567;
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var this__14568 = this;
var dom_elt__14569 = cljs.core.deref.call(null,this__14568.dom);
session.client.subscribe.subscribe_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'id")).call(null,this__14568.model),this$);
var id__14570 = (new cljs.core.Keyword("\uFDD0'id")).call(null,this__14568.model);
var editor__14571 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__14569))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____14572 = cljs.core.vector_QMARK_.call(null,dom_elt__14569);
if(or__3939__auto____14572)
{return or__3939__auto____14572;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__14569);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__14569):((true)?cljs_jquery.core.jquery.call(null,dom_elt__14569):null))),cljs.core.PersistentVector.fromArray(["on","post-render",(function (){
return cljs.core.reset_BANG_.call(null,editor__14571,session.client.editor.create_editor.call(null,id__14570));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__14569))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____14573 = cljs.core.vector_QMARK_.call(null,dom_elt__14569);
if(or__3939__auto____14573)
{return or__3939__auto____14573;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__14569);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__14569):((true)?cljs_jquery.core.jquery.call(null,dom_elt__14569):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-deleter",(function (){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__14569))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____14574 = cljs.core.vector_QMARK_.call(null,dom_elt__14569);
if(or__3939__auto____14574)
{return or__3939__auto____14574;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__14569);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__14569):((true)?cljs_jquery.core.jquery.call(null,dom_elt__14569):null))),cljs.core.PersistentVector.fromArray(["trigger","delete-loop"], true));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__14569))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____14575 = cljs.core.vector_QMARK_.call(null,dom_elt__14569);
if(or__3939__auto____14575)
{return or__3939__auto____14575;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__14569);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__14569):((true)?cljs_jquery.core.jquery.call(null,dom_elt__14569):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-input",(function (){
cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__14569))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____14576 = cljs.core.vector_QMARK_.call(null,dom_elt__14569);
if(or__3939__auto____14576)
{return or__3939__auto____14576;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__14569);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__14569):((true)?cljs_jquery.core.jquery.call(null,dom_elt__14569):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true));
cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__14568.model),cljs.core.deref.call(null,editor__14571).getValue());
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'evaluate-clj","\uFDD0'id":(new cljs.core.Keyword("\uFDD0'id")).call(null,this__14568.model),"\uFDD0'data":cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__14568.model))}));
})], true));
cljs.core.add_watch.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,this__14568.model),"\uFDD0'update-output",(function (key,atom,old,new$){
var viewable__14577 = session.client.mvc.view.call(null,new$);
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__14569))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____14578 = cljs.core.vector_QMARK_.call(null,dom_elt__14569);
if(or__3939__auto____14578)
{return or__3939__auto____14578;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__14569);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__14569):((true)?cljs_jquery.core.jquery.call(null,dom_elt__14569):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true)),cljs.core.PersistentVector.fromArray(["append",((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____14579 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true));
if(or__3939__auto____14579)
{return or__3939__auto____14579;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true)):null)))], true));
}));
return cljs.core.add_watch.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__14568.model),"\uFDD0'input-output",(function (key,atom,old,new$){
cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt__14569))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____14580 = cljs.core.vector_QMARK_.call(null,dom_elt__14569);
if(or__3939__auto____14580)
{return or__3939__auto____14580;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt__14569);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt__14569):((true)?cljs_jquery.core.jquery.call(null,dom_elt__14569):null))),cljs.core.PersistentVector.fromArray(["find","textarea.exp-input"], true)),cljs.core.PersistentVector.fromArray(["html",new$], true));
return cljs.core.deref.call(null,editor__14571).setValue(new$);
}));
});
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__14581 = this;
return this__14581.model.call(null,k);
});
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__14582 = this;
return this__14582.model.call(null,k,not_found);
});
session.client.loop.Loop.prototype.session$client$subscribe$ISubscribe$ = true;
session.client.loop.Loop.prototype.session$client$subscribe$ISubscribe$receive$arity$2 = (function (this$,msg){
var this__14583 = this;
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'data")).call(null,msg)))
{cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,this__14583.model),(new cljs.core.Keyword("\uFDD0'data")).call(null,msg));
} else
{}
if(cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'origin")).call(null,msg),session.client.editor.session_uuid))
{return null;
} else
{return cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,this__14583.model),(new cljs.core.Keyword("\uFDD0'input")).call(null,msg));
}
});
session.client.loop.Loop;
