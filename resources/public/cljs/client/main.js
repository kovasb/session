goog.provide('session.client.main');
goog.require('cljs.core');
goog.require('session.client.hiccup');
goog.require('goog.events');
goog.require('session.client.loop');
goog.require('session.client.session');
goog.require('cljs.reader');
goog.require('session.ui');
goog.require('subpar.core');
goog.require('goog.events.EventType');
goog.require('goog.object');
goog.require('session.client.mvc');
goog.require('cljs_jquery.core');
goog.require('session.client.subsession');
goog.require('session.client.editor');
goog.require('fetch.remotes');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
session.client.main.session = cljs.core.atom.call(null,null);
session.client.main.load_session = (function load_session(id){
return fetch.remotes.remote_callback.call(null,"get-session",cljs.core.PersistentVector.fromArray([id], true),(function (result){
var s__7581 = cljs.reader.read_string.call(null,(new cljs.core.Keyword("\uFDD0'result")).call(null,result));
var v__7583 = ((cljs.core._EQ_.call(null,"\uFDD0'this",session.client.mvc.view.call(null,s__7581)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7582 = cljs.core.vector_QMARK_.call(null,session.client.mvc.view.call(null,s__7581));
if(or__3824__auto____7582)
{return or__3824__auto____7582;
} else
{return cljs.core.keyword_QMARK_.call(null,session.client.mvc.view.call(null,s__7581));
}
})())?cljs_jquery.core.dom_create.call(null,session.client.mvc.view.call(null,s__7581)):((true)?cljs_jquery.core.jquery.call(null,session.client.mvc.view.call(null,s__7581)):null)));
cljs.core.reset_BANG_.call(null,session.client.main.session,s__7581);
session.client.mvc.control.call(null,s__7581,v__7583);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7584 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3824__auto____7584)
{return or__3824__auto____7584;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):((true)?cljs_jquery.core.jquery.call(null,"body > .container"):null))),cljs.core.PersistentVector.fromArray(["html",""], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",v__7583))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7585 = cljs.core.vector_QMARK_.call(null,v__7583);
if(or__3824__auto____7585)
{return or__3824__auto____7585;
} else
{return cljs.core.keyword_QMARK_.call(null,v__7583);
}
})())?cljs_jquery.core.dom_create.call(null,v__7583):((true)?cljs_jquery.core.jquery.call(null,v__7583):null))),cljs.core.PersistentVector.fromArray(["appendTo",((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7586 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3824__auto____7586)
{return or__3824__auto____7586;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):((true)?cljs_jquery.core.jquery.call(null,"body > .container"):null)))], true));
return session.client.session.load_subsession_tab.call(null,cljs.core.first.call(null,(new cljs.core.Keyword("\uFDD0'subsessions")).call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,cljs.core.deref.call(null,session.client.main.session)))));
}));
});
session.client.main.keymap = {"Shift-Enter":(function (cm){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cm.getWrapperElement()))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7588 = cljs.core.vector_QMARK_.call(null,cm.getWrapperElement());
if(or__3824__auto____7588)
{return or__3824__auto____7588;
} else
{return cljs.core.keyword_QMARK_.call(null,cm.getWrapperElement());
}
})())?cljs_jquery.core.dom_create.call(null,cm.getWrapperElement()):((true)?cljs_jquery.core.jquery.call(null,cm.getWrapperElement()):null))),cljs.core.PersistentVector.fromArray(["trigger","evaluate-input"], true));
}),"Backspace":(function (cm){
return subpar.core.backward_delete.call(null,cm);
}),"Delete":(function (cm){
return subpar.core.forward_delete.call(null,cm);
}),"Ctrl-D":(function (cm){
return subpar.core.forward_delete.call(null,cm);
}),"Shift-9":(function (cm){
return subpar.core.open_expression.call(null,cm,"()");
}),"[":(function (cm){
return subpar.core.open_expression.call(null,cm,"[]");
}),"Shift-[":(function (cm){
return subpar.core.open_expression.call(null,cm,"{}");
}),"Shift-0":(function (cm){
return subpar.core.close_expression.call(null,cm,")");
}),"]":(function (cm){
return subpar.core.close_expression.call(null,cm,"]");
}),"Shift-]":(function (cm){
return subpar.core.close_expression.call(null,cm,"}");
}),"Shift-'":(function (cm){
return subpar.core.double_quote.call(null,cm);
}),"Ctrl-Alt-F":(function (cm){
return subpar.core.forward.call(null,cm);
}),"Ctrl-Alt-B":(function (cm){
return subpar.core.backward.call(null,cm);
}),"Ctrl-Alt-U":(function (cm){
return subpar.core.backward_up.call(null,cm);
}),"Ctrl-Alt-D":(function (cm){
return subpar.core.forward_down.call(null,cm);
}),"Ctrl-Alt-P":(function (cm){
return subpar.core.backward_down.call(null,cm);
}),"Ctrl-Alt-N":(function (cm){
return subpar.core.forward_up.call(null,cm);
}),"Shift-Ctrl-[":(function (cm){
return subpar.core.backward_barf.call(null,cm);
}),"Ctrl-Alt-Right":(function (cm){
return subpar.core.backward_barf.call(null,cm);
}),"Ctrl-]":(function (cm){
return subpar.core.backward_barf.call(null,cm);
}),"Shift-Ctrl-]":(function (cm){
return subpar.core.forward_barf.call(null,cm);
}),"Ctrl-Left":(function (cm){
return subpar.core.forward_barf.call(null,cm);
}),"Shift-Ctrl-9":(function (cm){
return subpar.core.backward_slurp.call(null,cm);
}),"Ctrl-Alt-Left":(function (cm){
return subpar.core.backward_slurp.call(null,cm);
}),"Ctrl-[":(function (cm){
return subpar.core.backward_slurp.call(null,cm);
}),"Shift-Ctrl-0":(function (cm){
return subpar.core.forward_slurp.call(null,cm);
}),"Ctrl-Right":(function (cm){
return subpar.core.forward_slurp.call(null,cm);
}),"Alt-Up":(function (cm){
return subpar.core.splice_delete_backward.call(null,cm);
}),"Alt-Down":(function (cm){
return subpar.core.splice_delete_forward.call(null,cm);
}),"Alt-S":(function (cm){
return subpar.core.splice.call(null,cm);
}),"Ctrl-Alt-\\":(function (cm){
return subpar.core.indent_selection.call(null,cm);
}),"fallthrough":["basic","emacs"]};
session.client.main.series_plot = (function series_plot(x){
var elt__7593 = ((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7592 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true));
if(or__3824__auto____7592)
{return or__3824__auto____7592;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true)):null)));
$.plot(elt__7593,[{"data":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (p1__7587_SHARP_){
return cljs.core.apply.call(null,cljs.core.array,p1__7587_SHARP_);
}),(new cljs.core.Keyword("\uFDD0'data")).call(null,x)))}],{"yaxis":{"labelWidth":25,"position":"left"}});
return elt__7593;
});
session.client.main.timeseries_plot = (function timeseries_plot(x){
var elt__7597 = ((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7596 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true));
if(or__3824__auto____7596)
{return or__3824__auto____7596;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true)):null)));
$.plot(elt__7597,[{"data":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (p1__7589_SHARP_){
return [cljs.core.first.call(null,p1__7589_SHARP_).getTime(),cljs.core.last.call(null,p1__7589_SHARP_)];
}),(new cljs.core.Keyword("\uFDD0'data")).call(null,x)))}],{"xaxis":{"mode":"time","timeformat":"%y/%m/%d"},"yaxis":{"labelWidth":25,"position":"left"}});
return elt__7597;
});
session.client.main.table = (function table(x){
if(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:100%"}),cljs.core.map.call(null,(function (r){
return cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.map.call(null,(function (c){
return cljs.core.PersistentVector.fromArray(["\uFDD0'td",session.client.mvc.render.call(null,c)], true);
}),r)], true);
}),(new cljs.core.Keyword("\uFDD0'data")).call(null,x))], true)))
{return cljs_jquery.core.jquery.call(null,this);
} else
{if((function (){var or__3824__auto____7599 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:100%"}),cljs.core.map.call(null,(function (r){
return cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.map.call(null,(function (c){
return cljs.core.PersistentVector.fromArray(["\uFDD0'td",session.client.mvc.render.call(null,c)], true);
}),r)], true);
}),(new cljs.core.Keyword("\uFDD0'data")).call(null,x))], true));
if(or__3824__auto____7599)
{return or__3824__auto____7599;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:100%"}),cljs.core.map.call(null,(function (r){
return cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.map.call(null,(function (c){
return cljs.core.PersistentVector.fromArray(["\uFDD0'td",session.client.mvc.render.call(null,c)], true);
}),r)], true);
}),(new cljs.core.Keyword("\uFDD0'data")).call(null,x))], true));
}
})())
{return cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:100%"}),cljs.core.map.call(null,(function (r){
return cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.map.call(null,(function (c){
return cljs.core.PersistentVector.fromArray(["\uFDD0'td",session.client.mvc.render.call(null,c)], true);
}),r)], true);
}),(new cljs.core.Keyword("\uFDD0'data")).call(null,x))], true));
} else
{if(true)
{return cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:100%"}),cljs.core.map.call(null,(function (r){
return cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.map.call(null,(function (c){
return cljs.core.PersistentVector.fromArray(["\uFDD0'td",session.client.mvc.render.call(null,c)], true);
}),r)], true);
}),(new cljs.core.Keyword("\uFDD0'data")).call(null,x))], true));
} else
{return null;
}
}
}
});
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",document))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____7600 = cljs.core.vector_QMARK_.call(null,document);
if(or__3824__auto____7600)
{return or__3824__auto____7600;
} else
{return cljs.core.keyword_QMARK_.call(null,document);
}
})())?cljs_jquery.core.dom_create.call(null,document):((true)?cljs_jquery.core.jquery.call(null,document):null))),cljs.core.PersistentVector.fromArray(["ready",(function (){
(CodeMirror.defaults["theme"] = "ambiance");
(CodeMirror.keyMap["subpar"] = session.client.main.keymap);
cljs.reader.register_tag_parser_BANG_.call(null,"testtag",(function (x){
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([x], true)], true);
}));
cljs.reader.register_tag_parser_BANG_.call(null,"flot",session.client.main.series_plot);
cljs.reader.register_tag_parser_BANG_.call(null,"table",session.client.main.table);
cljs.reader.register_tag_parser_BANG_.call(null,"series-plot",session.client.main.series_plot);
cljs.reader.register_tag_parser_BANG_.call(null,"timeseries-plot",session.client.main.timeseries_plot);
cljs.reader.register_tag_parser_BANG_.call(null,"loop",(function (x){
return (new session.client.loop.Loop(cljs.core.assoc.call(null,x,"\uFDD0'input",cljs.core.atom.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,x)),"\uFDD0'output",cljs.core.atom.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,x))),cljs.core.atom.call(null,null)));
}));
cljs.reader.register_tag_parser_BANG_.call(null,"session",(function (x){
return (new session.client.session.Session(x,cljs.core.atom.call(null,null)));
}));
cljs.reader.register_tag_parser_BANG_.call(null,"subsession",(function (x){
return (new session.client.subsession.Subsession(cljs.core.assoc.call(null,x,"\uFDD0'loops",cljs.core.atom.call(null,(new cljs.core.Keyword("\uFDD0'loops")).call(null,x))),cljs.core.atom.call(null,null)));
}));
return session.client.main.load_session.call(null,"default-session");
})], true));
