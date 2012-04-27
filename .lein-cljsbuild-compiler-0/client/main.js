goog.provide('session.client.main');
goog.require('cljs.core');
goog.require('session.client.svgtest');
goog.require('goog.events');
goog.require('session.client.loop');
goog.require('session.client.session');
goog.require('goog.events.EventType');
goog.require('session.client.mvc');
goog.require('cljs_jquery.core');
goog.require('session.client.editor');
goog.require('fetch.remotes');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
session.client.main.session = cljs.core.atom.call(null,null);
session.client.main.load_session = (function load_session(id){
return fetch.remotes.remote_callback.call(null,"get-session",cljs.core.PersistentVector.fromArray([id]),(function (result){
var s__3294 = eval.call(null,"\uFDD0'result".call(null,result));
var v__3296 = (cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",session.client.mvc.view.call(null,s__3294)))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3295 = cljs.core.vector_QMARK_.call(null,session.client.mvc.view.call(null,s__3294));

if(cljs.core.truth_(or__3824__auto____3295))
{return or__3824__auto____3295;
} else
{return cljs.core.keyword_QMARK_.call(null,session.client.mvc.view.call(null,s__3294));
}
})())?cljs_jquery.core.dom_create.call(null,session.client.mvc.view.call(null,s__3294)):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,session.client.mvc.view.call(null,s__3294)):null)));

cljs.core.reset_BANG_.call(null,session.client.main.session,s__3294);
session.client.mvc.control.call(null,s__3294,v__3296);
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3297 = cljs.core.vector_QMARK_.call(null,"body > .container");

if(cljs.core.truth_(or__3824__auto____3297))
{return or__3824__auto____3297;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"body > .container"):null))),cljs.core.PersistentVector.fromArray(["html",""]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",v__3296))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3298 = cljs.core.vector_QMARK_.call(null,v__3296);

if(cljs.core.truth_(or__3824__auto____3298))
{return or__3824__auto____3298;
} else
{return cljs.core.keyword_QMARK_.call(null,v__3296);
}
})())?cljs_jquery.core.dom_create.call(null,v__3296):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,v__3296):null))),cljs.core.PersistentVector.fromArray(["appendTo",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3299 = cljs.core.vector_QMARK_.call(null,"body > .container");

if(cljs.core.truth_(or__3824__auto____3299))
{return or__3824__auto____3299;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"body > .container"):null)))]));
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",".loop-container"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3300 = cljs.core.vector_QMARK_.call(null,".loop-container");

if(cljs.core.truth_(or__3824__auto____3300))
{return or__3824__auto____3300;
} else
{return cljs.core.keyword_QMARK_.call(null,".loop-container");
}
})())?cljs_jquery.core.dom_create.call(null,".loop-container"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,".loop-container"):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"]));
}));
});
session.client.main.save_session = (function save_session(){
return fetch.remotes.remote_callback.call(null,"store-session",cljs.core.PersistentVector.fromArray(["\uFDD0'id".call(null,cljs.core.deref.call(null,session.client.main.session)),cljs.core.pr_str.call(null,cljs.core.deref.call(null,session.client.main.session))]),(function (result){
return result;
}));
});
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",document))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____3301 = cljs.core.vector_QMARK_.call(null,document);

if(cljs.core.truth_(or__3824__auto____3301))
{return or__3824__auto____3301;
} else
{return cljs.core.keyword_QMARK_.call(null,document);
}
})())?cljs_jquery.core.dom_create.call(null,document):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,document):null))),cljs.core.PersistentVector.fromArray(["ready",(function (){
session.client.editor.add_keybindings.call(null);
return session.client.main.load_session.call(null,1);
})]));
