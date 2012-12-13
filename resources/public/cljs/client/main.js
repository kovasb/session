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
var s__7607 = cljs.reader.read_string.call(null,(new cljs.core.Keyword("\uFDD0'result")).call(null,result));
var v__7609 = ((cljs.core._EQ_.call(null,"\uFDD0'this",session.client.mvc.view.call(null,s__7607)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7608 = cljs.core.vector_QMARK_.call(null,session.client.mvc.view.call(null,s__7607));
if(or__3939__auto____7608)
{return or__3939__auto____7608;
} else
{return cljs.core.keyword_QMARK_.call(null,session.client.mvc.view.call(null,s__7607));
}
})())?cljs_jquery.core.dom_create.call(null,session.client.mvc.view.call(null,s__7607)):((true)?cljs_jquery.core.jquery.call(null,session.client.mvc.view.call(null,s__7607)):null)));
cljs.core.reset_BANG_.call(null,session.client.main.session,s__7607);
session.client.mvc.control.call(null,s__7607,v__7609);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7610 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3939__auto____7610)
{return or__3939__auto____7610;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):((true)?cljs_jquery.core.jquery.call(null,"body > .container"):null))),cljs.core.PersistentVector.fromArray(["html",""], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",v__7609))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7611 = cljs.core.vector_QMARK_.call(null,v__7609);
if(or__3939__auto____7611)
{return or__3939__auto____7611;
} else
{return cljs.core.keyword_QMARK_.call(null,v__7609);
}
})())?cljs_jquery.core.dom_create.call(null,v__7609):((true)?cljs_jquery.core.jquery.call(null,v__7609):null))),cljs.core.PersistentVector.fromArray(["appendTo",((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7612 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3939__auto____7612)
{return or__3939__auto____7612;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):((true)?cljs_jquery.core.jquery.call(null,"body > .container"):null)))], true));
return session.client.session.load_subsession_tab.call(null,cljs.core.first.call(null,(new cljs.core.Keyword("\uFDD0'subsessions")).call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,cljs.core.deref.call(null,session.client.main.session)))));
}));
});
session.client.main.keymap = {"Shift-Enter":(function (cm){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cm.getWrapperElement()))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7614 = cljs.core.vector_QMARK_.call(null,cm.getWrapperElement());
if(or__3939__auto____7614)
{return or__3939__auto____7614;
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
var elt__7619 = ((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7618 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true));
if(or__3939__auto____7618)
{return or__3939__auto____7618;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true)):null)));
$.plot(elt__7619,[{"data":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (p1__7613_SHARP_){
return cljs.core.apply.call(null,cljs.core.array,p1__7613_SHARP_);
}),(new cljs.core.Keyword("\uFDD0'data")).call(null,x)))}],{"yaxis":{"labelWidth":25,"position":"left"}});
return elt__7619;
});
session.client.main.timeseries_plot = (function timeseries_plot(x){
var elt__7623 = ((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7622 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true));
if(or__3939__auto____7622)
{return or__3939__auto____7622;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true)):null)));
$.plot(elt__7623,[{"data":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (p1__7615_SHARP_){
return [cljs.core.first.call(null,p1__7615_SHARP_).getTime(),cljs.core.last.call(null,p1__7615_SHARP_)];
}),(new cljs.core.Keyword("\uFDD0'data")).call(null,x)))}],{"xaxis":{"mode":"time","timeformat":"%y/%m/%d"},"yaxis":{"labelWidth":25,"position":"left"}});
return elt__7623;
});
session.client.main.table = (function table(x){
if(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:100%"}),cljs.core.map.call(null,(function (r){
return cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.map.call(null,(function (c){
return cljs.core.PersistentVector.fromArray(["\uFDD0'td",session.client.mvc.render.call(null,c)], true);
}),r)], true);
}),(new cljs.core.Keyword("\uFDD0'data")).call(null,x))], true)))
{return cljs_jquery.core.jquery.call(null,this);
} else
{if((function (){var or__3939__auto____7625 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:100%"}),cljs.core.map.call(null,(function (r){
return cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.map.call(null,(function (c){
return cljs.core.PersistentVector.fromArray(["\uFDD0'td",session.client.mvc.render.call(null,c)], true);
}),r)], true);
}),(new cljs.core.Keyword("\uFDD0'data")).call(null,x))], true));
if(or__3939__auto____7625)
{return or__3939__auto____7625;
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
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",document))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7626 = cljs.core.vector_QMARK_.call(null,document);
if(or__3939__auto____7626)
{return or__3939__auto____7626;
} else
{return cljs.core.keyword_QMARK_.call(null,document);
}
})())?cljs_jquery.core.dom_create.call(null,document):((true)?cljs_jquery.core.jquery.call(null,document):null))),cljs.core.PersistentVector.fromArray(["ready",(function (){
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
