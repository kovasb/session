goog.provide('session.client.main');
goog.require('cljs.core');
goog.require('session.client.svgtest');
goog.require('goog.events');
goog.require('session.client.loop');
goog.require('session.client.session');
goog.require('session.ui');
goog.require('goog.events.EventType');
goog.require('goog.object');
goog.require('session.client.mvc');
goog.require('cljs_jquery.core');
goog.require('session.client.editor');
goog.require('fetch.remotes');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
session.client.main.session = cljs.core.atom.call(null,null);
session.client.main.load_session = (function load_session(id){
return fetch.remotes.remote_callback.call(null,"get-session",cljs.core.PersistentVector.fromArray([id]),(function (result){
var s__50003 = eval.call(null,"\uFDD0'result".call(null,result));
var v__50005 = (cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",session.client.mvc.view.call(null,s__50003)))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50004 = cljs.core.vector_QMARK_.call(null,session.client.mvc.view.call(null,s__50003));

if(cljs.core.truth_(or__3824__auto____50004))
{return or__3824__auto____50004;
} else
{return cljs.core.keyword_QMARK_.call(null,session.client.mvc.view.call(null,s__50003));
}
})())?cljs_jquery.core.dom_create.call(null,session.client.mvc.view.call(null,s__50003)):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,session.client.mvc.view.call(null,s__50003)):null)));

cljs.core.reset_BANG_.call(null,session.client.main.session,s__50003);
session.client.mvc.control.call(null,s__50003,v__50005);
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50006 = cljs.core.vector_QMARK_.call(null,"body > .container");

if(cljs.core.truth_(or__3824__auto____50006))
{return or__3824__auto____50006;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"body > .container"):null))),cljs.core.PersistentVector.fromArray(["html",""]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",v__50005))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50007 = cljs.core.vector_QMARK_.call(null,v__50005);

if(cljs.core.truth_(or__3824__auto____50007))
{return or__3824__auto____50007;
} else
{return cljs.core.keyword_QMARK_.call(null,v__50005);
}
})())?cljs_jquery.core.dom_create.call(null,v__50005):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,v__50005):null))),cljs.core.PersistentVector.fromArray(["appendTo",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50008 = cljs.core.vector_QMARK_.call(null,"body > .container");

if(cljs.core.truth_(or__3824__auto____50008))
{return or__3824__auto____50008;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"body > .container"):null)))]));
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",".loop-container"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50009 = cljs.core.vector_QMARK_.call(null,".loop-container");

if(cljs.core.truth_(or__3824__auto____50009))
{return or__3824__auto____50009;
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
session.client.main.load_new_file = (function load_new_file(x){
var s__50010 = eval.call(null,x);
var v__50012 = (cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",session.client.mvc.view.call(null,s__50010)))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50011 = cljs.core.vector_QMARK_.call(null,session.client.mvc.view.call(null,s__50010));

if(cljs.core.truth_(or__3824__auto____50011))
{return or__3824__auto____50011;
} else
{return cljs.core.keyword_QMARK_.call(null,session.client.mvc.view.call(null,s__50010));
}
})())?cljs_jquery.core.dom_create.call(null,session.client.mvc.view.call(null,s__50010)):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,session.client.mvc.view.call(null,s__50010)):null)));

cljs.core.reset_BANG_.call(null,session.client.main.session,s__50010);
session.client.mvc.control.call(null,s__50010,v__50012);
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50013 = cljs.core.vector_QMARK_.call(null,"body > .container");

if(cljs.core.truth_(or__3824__auto____50013))
{return or__3824__auto____50013;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"body > .container"):null))),cljs.core.PersistentVector.fromArray(["html",""]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",v__50012))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50014 = cljs.core.vector_QMARK_.call(null,v__50012);

if(cljs.core.truth_(or__3824__auto____50014))
{return or__3824__auto____50014;
} else
{return cljs.core.keyword_QMARK_.call(null,v__50012);
}
})())?cljs_jquery.core.dom_create.call(null,v__50012):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,v__50012):null))),cljs.core.PersistentVector.fromArray(["appendTo",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50015 = cljs.core.vector_QMARK_.call(null,"body > .container");

if(cljs.core.truth_(or__3824__auto____50015))
{return or__3824__auto____50015;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"body > .container"):null)))]));
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",".loop-container"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50016 = cljs.core.vector_QMARK_.call(null,".loop-container");

if(cljs.core.truth_(or__3824__auto____50016))
{return or__3824__auto____50016;
} else
{return cljs.core.keyword_QMARK_.call(null,".loop-container");
}
})())?cljs_jquery.core.dom_create.call(null,".loop-container"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,".loop-container"):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"]));
});
session.client.main.download_session = (function download_session(){
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","#downloadformdata"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50017 = cljs.core.vector_QMARK_.call(null,"#downloadformdata");

if(cljs.core.truth_(or__3824__auto____50017))
{return or__3824__auto____50017;
} else
{return cljs.core.keyword_QMARK_.call(null,"#downloadformdata");
}
})())?cljs_jquery.core.dom_create.call(null,"#downloadformdata"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"#downloadformdata"):null))),cljs.core.PersistentVector.fromArray(["val",(function (){var _STAR_print_meta_STAR_50018__50019 = cljs.core._STAR_print_meta_STAR_;

try{cljs.core._STAR_print_meta_STAR_ = true;
return cljs.core.pr_str.call(null,cljs.core.deref.call(null,session.client.main.session));
}finally {cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR_50018__50019;
}})()]));
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","#downloadform"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50021 = cljs.core.vector_QMARK_.call(null,"#downloadform");

if(cljs.core.truth_(or__3824__auto____50021))
{return or__3824__auto____50021;
} else
{return cljs.core.keyword_QMARK_.call(null,"#downloadform");
}
})())?cljs_jquery.core.dom_create.call(null,"#downloadform"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"#downloadform"):null))),cljs.core.PersistentVector.fromArray(["submit"]));
});
session.client.main.ds2 = (function ds2(){
var dataurl__50025 = cljs.core.str.call(null,"data:text/csv;charset=UTF-8,",encodeURIComponent.call(null,(function (){var _STAR_print_meta_STAR_50022__50023 = cljs.core._STAR_print_meta_STAR_;

try{cljs.core._STAR_print_meta_STAR_ = true;
return cljs.core.pr_str.call(null,cljs.core.deref.call(null,session.client.main.session));
}finally {cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR_50022__50023;
}})()));

return window.location.href=dataurl__50025;
});
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",document))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50026 = cljs.core.vector_QMARK_.call(null,document);

if(cljs.core.truth_(or__3824__auto____50026))
{return or__3824__auto____50026;
} else
{return cljs.core.keyword_QMARK_.call(null,document);
}
})())?cljs_jquery.core.dom_create.call(null,document):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,document):null))),cljs.core.PersistentVector.fromArray(["ready",(function (){
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","#savebutton"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50027 = cljs.core.vector_QMARK_.call(null,"#savebutton");

if(cljs.core.truth_(or__3824__auto____50027))
{return or__3824__auto____50027;
} else
{return cljs.core.keyword_QMARK_.call(null,"#savebutton");
}
})())?cljs_jquery.core.dom_create.call(null,"#savebutton"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"#savebutton"):null))),cljs.core.PersistentVector.fromArray(["on","click",(function (){
return session.client.main.download_session.call(null);
})]));
session.client.editor.add_keybindings.call(null);
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","#fileupload"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____50028 = cljs.core.vector_QMARK_.call(null,"#fileupload");

if(cljs.core.truth_(or__3824__auto____50028))
{return or__3824__auto____50028;
} else
{return cljs.core.keyword_QMARK_.call(null,"#fileupload");
}
})())?cljs_jquery.core.dom_create.call(null,"#fileupload"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"#fileupload"):null))),cljs.core.PersistentVector.fromArray(["fileupload",goog.object.create.call(null,"add",(function (e,data){
return data.submit().complete((function (result,status,xx){
return session.client.main.load_new_file.call(null,result.responseText);
}));
}))]));
return session.client.main.load_session.call(null,"default-session");
})]));
