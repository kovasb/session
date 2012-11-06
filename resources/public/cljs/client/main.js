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
var s__81719 = cljs.reader.read_string.call(null,(new cljs.core.Keyword("\uFDD0'result")).call(null,result));
var v__81721 = ((cljs.core._EQ_.call(null,"\uFDD0'this",session.client.mvc.view.call(null,s__81719)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____81720 = cljs.core.vector_QMARK_.call(null,session.client.mvc.view.call(null,s__81719));
if(or__3824__auto____81720)
{return or__3824__auto____81720;
} else
{return cljs.core.keyword_QMARK_.call(null,session.client.mvc.view.call(null,s__81719));
}
})())?cljs_jquery.core.dom_create.call(null,session.client.mvc.view.call(null,s__81719)):((true)?cljs_jquery.core.jquery.call(null,session.client.mvc.view.call(null,s__81719)):null)));
cljs.core.reset_BANG_.call(null,session.client.main.session,s__81719);
session.client.mvc.control.call(null,s__81719,v__81721);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____81722 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3824__auto____81722)
{return or__3824__auto____81722;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):((true)?cljs_jquery.core.jquery.call(null,"body > .container"):null))),cljs.core.PersistentVector.fromArray(["html",""], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",v__81721))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____81723 = cljs.core.vector_QMARK_.call(null,v__81721);
if(or__3824__auto____81723)
{return or__3824__auto____81723;
} else
{return cljs.core.keyword_QMARK_.call(null,v__81721);
}
})())?cljs_jquery.core.dom_create.call(null,v__81721):((true)?cljs_jquery.core.jquery.call(null,v__81721):null))),cljs.core.PersistentVector.fromArray(["appendTo",((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____81724 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3824__auto____81724)
{return or__3824__auto____81724;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):((true)?cljs_jquery.core.jquery.call(null,"body > .container"):null)))], true));
}));
});
session.client.main.keymap = {"Shift-Enter":(function (cm){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cm.getWrapperElement()))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____81725 = cljs.core.vector_QMARK_.call(null,cm.getWrapperElement());
if(or__3824__auto____81725)
{return or__3824__auto____81725;
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
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",document))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____81726 = cljs.core.vector_QMARK_.call(null,document);
if(or__3824__auto____81726)
{return or__3824__auto____81726;
} else
{return cljs.core.keyword_QMARK_.call(null,document);
}
})())?cljs_jquery.core.dom_create.call(null,document):((true)?cljs_jquery.core.jquery.call(null,document):null))),cljs.core.PersistentVector.fromArray(["ready",(function (){
(CodeMirror.keyMap["subpar"] = session.client.main.keymap);
cljs.reader.register_tag_parser_BANG_.call(null,"testtag",(function (x){
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([x], true)], true);
}));
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
