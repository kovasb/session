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
var s__30078 = eval.call(null,"\uFDD0'result".call(null,result));
var v__30080 = (cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",session.client.mvc.view.call(null,s__30078)))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30079 = cljs.core.vector_QMARK_.call(null,session.client.mvc.view.call(null,s__30078));

if(cljs.core.truth_(or__3824__auto____30079))
{return or__3824__auto____30079;
} else
{return cljs.core.keyword_QMARK_.call(null,session.client.mvc.view.call(null,s__30078));
}
})())?cljs_jquery.core.dom_create.call(null,session.client.mvc.view.call(null,s__30078)):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,session.client.mvc.view.call(null,s__30078)):null)));

cljs.core.reset_BANG_.call(null,session.client.main.session,s__30078);
session.client.mvc.control.call(null,s__30078,v__30080);
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30081 = cljs.core.vector_QMARK_.call(null,"body > .container");

if(cljs.core.truth_(or__3824__auto____30081))
{return or__3824__auto____30081;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"body > .container"):null))),cljs.core.PersistentVector.fromArray(["html",""]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",v__30080))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30082 = cljs.core.vector_QMARK_.call(null,v__30080);

if(cljs.core.truth_(or__3824__auto____30082))
{return or__3824__auto____30082;
} else
{return cljs.core.keyword_QMARK_.call(null,v__30080);
}
})())?cljs_jquery.core.dom_create.call(null,v__30080):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,v__30080):null))),cljs.core.PersistentVector.fromArray(["appendTo",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30083 = cljs.core.vector_QMARK_.call(null,"body > .container");

if(cljs.core.truth_(or__3824__auto____30083))
{return or__3824__auto____30083;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"body > .container"):null)))]));
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",".loop-container"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30084 = cljs.core.vector_QMARK_.call(null,".loop-container");

if(cljs.core.truth_(or__3824__auto____30084))
{return or__3824__auto____30084;
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
var s__30085 = eval.call(null,x);
var v__30087 = (cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",session.client.mvc.view.call(null,s__30085)))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30086 = cljs.core.vector_QMARK_.call(null,session.client.mvc.view.call(null,s__30085));

if(cljs.core.truth_(or__3824__auto____30086))
{return or__3824__auto____30086;
} else
{return cljs.core.keyword_QMARK_.call(null,session.client.mvc.view.call(null,s__30085));
}
})())?cljs_jquery.core.dom_create.call(null,session.client.mvc.view.call(null,s__30085)):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,session.client.mvc.view.call(null,s__30085)):null)));

cljs.core.reset_BANG_.call(null,session.client.main.session,s__30085);
session.client.mvc.control.call(null,s__30085,v__30087);
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30088 = cljs.core.vector_QMARK_.call(null,"body > .container");

if(cljs.core.truth_(or__3824__auto____30088))
{return or__3824__auto____30088;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"body > .container"):null))),cljs.core.PersistentVector.fromArray(["html",""]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",v__30087))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30089 = cljs.core.vector_QMARK_.call(null,v__30087);

if(cljs.core.truth_(or__3824__auto____30089))
{return or__3824__auto____30089;
} else
{return cljs.core.keyword_QMARK_.call(null,v__30087);
}
})())?cljs_jquery.core.dom_create.call(null,v__30087):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,v__30087):null))),cljs.core.PersistentVector.fromArray(["appendTo",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30090 = cljs.core.vector_QMARK_.call(null,"body > .container");

if(cljs.core.truth_(or__3824__auto____30090))
{return or__3824__auto____30090;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"body > .container"):null)))]));
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",".loop-container"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30091 = cljs.core.vector_QMARK_.call(null,".loop-container");

if(cljs.core.truth_(or__3824__auto____30091))
{return or__3824__auto____30091;
} else
{return cljs.core.keyword_QMARK_.call(null,".loop-container");
}
})())?cljs_jquery.core.dom_create.call(null,".loop-container"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,".loop-container"):null))),cljs.core.PersistentVector.fromArray(["trigger","post-render"]));
});
session.client.main.download_session = (function download_session(){
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","#downloadformdata"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30092 = cljs.core.vector_QMARK_.call(null,"#downloadformdata");

if(cljs.core.truth_(or__3824__auto____30092))
{return or__3824__auto____30092;
} else
{return cljs.core.keyword_QMARK_.call(null,"#downloadformdata");
}
})())?cljs_jquery.core.dom_create.call(null,"#downloadformdata"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"#downloadformdata"):null))),cljs.core.PersistentVector.fromArray(["val",(function (){var _STAR_print_meta_STAR_30093__30094 = cljs.core._STAR_print_meta_STAR_;

try{cljs.core._STAR_print_meta_STAR_ = true;
return cljs.core.pr_str.call(null,cljs.core.deref.call(null,session.client.main.session));
}finally {cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR_30093__30094;
}})()]));
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","#downloadform"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30096 = cljs.core.vector_QMARK_.call(null,"#downloadform");

if(cljs.core.truth_(or__3824__auto____30096))
{return or__3824__auto____30096;
} else
{return cljs.core.keyword_QMARK_.call(null,"#downloadform");
}
})())?cljs_jquery.core.dom_create.call(null,"#downloadform"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"#downloadform"):null))),cljs.core.PersistentVector.fromArray(["submit"]));
});
session.client.main.ds2 = (function ds2(){
var dataurl__30100 = cljs.core.str.call(null,"data:text/csv;charset=UTF-8,",encodeURIComponent.call(null,(function (){var _STAR_print_meta_STAR_30097__30098 = cljs.core._STAR_print_meta_STAR_;

try{cljs.core._STAR_print_meta_STAR_ = true;
return cljs.core.pr_str.call(null,cljs.core.deref.call(null,session.client.main.session));
}finally {cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR_30097__30098;
}})()));

return window.location.href=dataurl__30100;
});
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",document))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30101 = cljs.core.vector_QMARK_.call(null,document);

if(cljs.core.truth_(or__3824__auto____30101))
{return or__3824__auto____30101;
} else
{return cljs.core.keyword_QMARK_.call(null,document);
}
})())?cljs_jquery.core.dom_create.call(null,document):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,document):null))),cljs.core.PersistentVector.fromArray(["ready",(function (){
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",".example"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30102 = cljs.core.vector_QMARK_.call(null,".example");

if(cljs.core.truth_(or__3824__auto____30102))
{return or__3824__auto____30102;
} else
{return cljs.core.keyword_QMARK_.call(null,".example");
}
})())?cljs_jquery.core.dom_create.call(null,".example"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,".example"):null))),cljs.core.PersistentVector.fromArray(["on","click",(function (){
return session.client.main.load_session.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30103 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____30103))
{return or__3824__auto____30103;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["attr","id"])));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","#savebutton"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30104 = cljs.core.vector_QMARK_.call(null,"#savebutton");

if(cljs.core.truth_(or__3824__auto____30104))
{return or__3824__auto____30104;
} else
{return cljs.core.keyword_QMARK_.call(null,"#savebutton");
}
})())?cljs_jquery.core.dom_create.call(null,"#savebutton"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"#savebutton"):null))),cljs.core.PersistentVector.fromArray(["on","click",(function (){
return session.client.main.download_session.call(null);
})]));
session.client.editor.add_keybindings.call(null);
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","#fileupload"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30105 = cljs.core.vector_QMARK_.call(null,"#fileupload");

if(cljs.core.truth_(or__3824__auto____30105))
{return or__3824__auto____30105;
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
