goog.provide('session.client.loop');
goog.require('cljs.core');
goog.require('session.client.loop_creator');
goog.require('cljs.reader');
goog.require('session.client.editor');
goog.require('session.client.mvc');
goog.require('session.client.subscribe');
session.client.loop.render_loop_output = (function render_loop_output(x){
var y = session.client.mvc.view.call(null,x);
if(cljs.core.string_QMARK_.call(null,y))
{try{var d = document.createElement("div");
CodeMirror.runMode(y,"text/x-clojure",d);
return d;
}catch (e3010){if(cljs.core.instance_QMARK_.call(null,Error,e3010))
{var e = e3010;
return alert(cljs.core.pr_str.call(null,cljs.core.PersistentVector.fromArray([y,e], true)));
} else
{if("\uFDD0'else")
{throw e3010;
} else
{return null;
}
}
}} else
{return y;
}
});

goog.provide('session.client.loop.Loop');

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
session.client.loop.Loop.cljs$lang$ctorPrSeq = (function (this__2350__auto__){
return cljs.core.list.call(null,"session.client.loop/Loop");
});
session.client.loop.Loop.cljs$lang$ctorPrWriter = (function (this__2350__auto__,writer__2351__auto__){
return cljs.core._write.call(null,writer__2351__auto__,"session.client.loop/Loop");
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$ = true;
session.client.loop.Loop.prototype.session$client$mvc$IMVC$view$arity$1 = (function (model__$1){
var self__ = this;
var v = (function (){var id = (new cljs.core.Keyword("\uFDD0'id")).call(null,model__$1);
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model__$1))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model__$1)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id,cljs.core.atom.call(null,null))))], true)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model__$1))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model__$1)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id,cljs.core.atom.call(null,null))))], true)], true));
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____$1 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto____$1)
{return or__3939__auto____$1;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model__$1))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model__$1)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id,cljs.core.atom.call(null,null))))], true)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model__$1))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model__$1)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id,cljs.core.atom.call(null,null))))], true)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":id,"\uFDD0'style":"position:relative"}),cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-remove",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:absolute;top:2px;right:-20px"}),""], true)):null))),cljs.core.PersistentVector.fromArray(["click",(function (){
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'delete-loop","\uFDD0'id":id,"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id})}));
})], true)),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span12",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"padding-top:0px;border-right:dotted #555 1px;border-left:dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.loop-container",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;padding-bottom:5px;border-bottom: dotted #555 1px"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:0px;top:2px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'textarea",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":[cljs.core.str("area"),cljs.core.str(id)].join('')}),cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,model__$1))], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"position:relative;margin-left:5px;padding-top:5px;padding-left:0px;font-family: Monaco, Menlo, 'Andale Mono', 'lucida console', 'Courier New', monospace;color:#AAA"}),cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'style"],{"\uFDD0'height":"18px","\uFDD0'style":"opacity:.8;position:absolute;left:-25px;top:7px"}),""], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.loopout.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,model__$1)))], true)], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",session.client.mvc.render.call(null,(new session.client.loop_creator.LoopCreator(id,cljs.core.atom.call(null,null))))], true)], true)):null))),cljs.core.PersistentVector.fromArray(["data","model",model__$1], true));
})();
cljs.core.reset_BANG_.call(null,self__.dom,v);
return v;
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$control$arity$1 = (function (this$){
var self__ = this;
var dom_elt = cljs.core.deref.call(null,self__.dom);
session.client.subscribe.subscribe_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'id")).call(null,self__.model),this$);
var id = (new cljs.core.Keyword("\uFDD0'id")).call(null,self__.model);
var editor = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,dom_elt);
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt):((true)?cljs_jquery.core.jquery.call(null,dom_elt):null))),cljs.core.PersistentVector.fromArray(["on","post-render",(function (){
return cljs.core.reset_BANG_.call(null,editor,session.client.editor.create_editor.call(null,[cljs.core.str("area"),cljs.core.str(id)].join('')));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,dom_elt);
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt):((true)?cljs_jquery.core.jquery.call(null,dom_elt):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-deleter",(function (){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,dom_elt);
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt):((true)?cljs_jquery.core.jquery.call(null,dom_elt):null))),cljs.core.PersistentVector.fromArray(["trigger","delete-loop"], true));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,dom_elt);
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt):((true)?cljs_jquery.core.jquery.call(null,dom_elt):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-input",(function (){
cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,dom_elt);
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt):((true)?cljs_jquery.core.jquery.call(null,dom_elt):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true));
cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,self__.model),cljs.core.deref.call(null,editor).getValue());
return session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'data"],{"\uFDD0'op":"\uFDD0'evaluate-clj","\uFDD0'id":(new cljs.core.Keyword("\uFDD0'id")).call(null,self__.model),"\uFDD0'data":cljs.core.deref.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,self__.model))}));
})], true));
return cljs.core.add_watch.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,self__.model),"\uFDD0'update-output",(function (key,atom,old,new$){
var viewable = session.client.mvc.view.call(null,new$);
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",dom_elt))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,dom_elt);
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,dom_elt);
}
})())?cljs_jquery.core.dom_create.call(null,dom_elt):((true)?cljs_jquery.core.jquery.call(null,dom_elt):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"], true)),cljs.core.PersistentVector.fromArray(["html",""], true)),cljs.core.PersistentVector.fromArray(["append",((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto__ = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true));
if(or__3939__auto__)
{return or__3939__auto__;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.cm-s-default",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"background-color:#FFF"}),session.client.loop.render_loop_output.call(null,new$)], true)):null)))], true));
}));
});
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
return self__.model.call(null,k);
});
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
return self__.model.call(null,k,not_found);
});
session.client.loop.Loop.prototype.session$client$subscribe$ISubscribe$ = true;
session.client.loop.Loop.prototype.session$client$subscribe$ISubscribe$receive$arity$2 = (function (this$,msg){
var self__ = this;
return cljs.core.reset_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,self__.model),(new cljs.core.Keyword("\uFDD0'data")).call(null,msg));
});
session.client.loop.Loop;
