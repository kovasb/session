goog.provide('session.client.main');
goog.require('cljs.core');
goog.require('session.client.hiccup');
goog.require('goog.events');
goog.require('session.client.loop');
goog.require('session.client.session');
goog.require('cljs.reader');
goog.require('session.ui');
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
session.client.main.saved_result = (new cljs.core.Keyword("\uFDD0'result")).call(null,result);
var s__6859 = cljs.reader.read_string.call(null,(new cljs.core.Keyword("\uFDD0'result")).call(null,result));
var v__6861 = ((cljs.core._EQ_.call(null,"\uFDD0'this",session.client.mvc.view.call(null,s__6859)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6860 = cljs.core.vector_QMARK_.call(null,session.client.mvc.view.call(null,s__6859));
if(or__3824__auto____6860)
{return or__3824__auto____6860;
} else
{return cljs.core.keyword_QMARK_.call(null,session.client.mvc.view.call(null,s__6859));
}
})())?cljs_jquery.core.dom_create.call(null,session.client.mvc.view.call(null,s__6859)):((true)?cljs_jquery.core.jquery.call(null,session.client.mvc.view.call(null,s__6859)):null)));
cljs.core.reset_BANG_.call(null,session.client.main.session,s__6859);
session.client.mvc.control.call(null,s__6859,v__6861);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6862 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3824__auto____6862)
{return or__3824__auto____6862;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):((true)?cljs_jquery.core.jquery.call(null,"body > .container"):null))),cljs.core.PersistentVector.fromArray(["html",""], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",v__6861))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6863 = cljs.core.vector_QMARK_.call(null,v__6861);
if(or__3824__auto____6863)
{return or__3824__auto____6863;
} else
{return cljs.core.keyword_QMARK_.call(null,v__6861);
}
})())?cljs_jquery.core.dom_create.call(null,v__6861):((true)?cljs_jquery.core.jquery.call(null,v__6861):null))),cljs.core.PersistentVector.fromArray(["appendTo",((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6864 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3824__auto____6864)
{return or__3824__auto____6864;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):((true)?cljs_jquery.core.jquery.call(null,"body > .container"):null)))], true));
}));
});
session.client.main.save_session = (function save_session(){
return fetch.remotes.remote_callback.call(null,"store-session",cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0'id")).call(null,cljs.core.deref.call(null,session.client.main.session)),cljs.core.pr_str.call(null,cljs.core.deref.call(null,session.client.main.session))], true),(function (result){
return result;
}));
});
session.client.main.load_new_file = (function load_new_file(x){
var s__6871 = cljs.reader.read_string.call(null,x);
var v__6873 = ((cljs.core._EQ_.call(null,"\uFDD0'this",session.client.mvc.view.call(null,s__6871)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6872 = cljs.core.vector_QMARK_.call(null,session.client.mvc.view.call(null,s__6871));
if(or__3824__auto____6872)
{return or__3824__auto____6872;
} else
{return cljs.core.keyword_QMARK_.call(null,session.client.mvc.view.call(null,s__6871));
}
})())?cljs_jquery.core.dom_create.call(null,session.client.mvc.view.call(null,s__6871)):((true)?cljs_jquery.core.jquery.call(null,session.client.mvc.view.call(null,s__6871)):null)));
cljs.core.reset_BANG_.call(null,session.client.main.session,s__6871);
session.client.mvc.control.call(null,s__6871,v__6873);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6874 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3824__auto____6874)
{return or__3824__auto____6874;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):((true)?cljs_jquery.core.jquery.call(null,"body > .container"):null))),cljs.core.PersistentVector.fromArray(["html",""], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",v__6873))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6875 = cljs.core.vector_QMARK_.call(null,v__6873);
if(or__3824__auto____6875)
{return or__3824__auto____6875;
} else
{return cljs.core.keyword_QMARK_.call(null,v__6873);
}
})())?cljs_jquery.core.dom_create.call(null,v__6873):((true)?cljs_jquery.core.jquery.call(null,v__6873):null))),cljs.core.PersistentVector.fromArray(["appendTo",((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6876 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3824__auto____6876)
{return or__3824__auto____6876;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):((true)?cljs_jquery.core.jquery.call(null,"body > .container"):null)))], true));
});
session.client.main.download_session = (function download_session(){
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","#downloadformdata"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6882 = cljs.core.vector_QMARK_.call(null,"#downloadformdata");
if(or__3824__auto____6882)
{return or__3824__auto____6882;
} else
{return cljs.core.keyword_QMARK_.call(null,"#downloadformdata");
}
})())?cljs_jquery.core.dom_create.call(null,"#downloadformdata"):((true)?cljs_jquery.core.jquery.call(null,"#downloadformdata"):null))),cljs.core.PersistentVector.fromArray(["val",(function (){var _STAR_print_meta_STAR_6883__6884 = cljs.core._STAR_print_meta_STAR_;
try{cljs.core._STAR_print_meta_STAR_ = true;
return cljs.core.pr_str.call(null,cljs.core.deref.call(null,session.client.main.session));
}finally {cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR_6883__6884;
}})()], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","#downloadform"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6886 = cljs.core.vector_QMARK_.call(null,"#downloadform");
if(or__3824__auto____6886)
{return or__3824__auto____6886;
} else
{return cljs.core.keyword_QMARK_.call(null,"#downloadform");
}
})())?cljs_jquery.core.dom_create.call(null,"#downloadform"):((true)?cljs_jquery.core.jquery.call(null,"#downloadform"):null))),cljs.core.PersistentVector.fromArray(["submit"], true));
});
session.client.main.ds2 = (function ds2(){
var dataurl__6894 = [cljs.core.str("data:text/csv;charset=UTF-8,"),cljs.core.str(encodeURIComponent((function (){var _STAR_print_meta_STAR_6891__6892 = cljs.core._STAR_print_meta_STAR_;
try{cljs.core._STAR_print_meta_STAR_ = true;
return cljs.core.pr_str.call(null,cljs.core.deref.call(null,session.client.main.session));
}finally {cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR_6891__6892;
}})()))].join('');
return window.location.href=dataurl__6894;
});
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",document))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6895 = cljs.core.vector_QMARK_.call(null,document);
if(or__3824__auto____6895)
{return or__3824__auto____6895;
} else
{return cljs.core.keyword_QMARK_.call(null,document);
}
})())?cljs_jquery.core.dom_create.call(null,document):((true)?cljs_jquery.core.jquery.call(null,document):null))),cljs.core.PersistentVector.fromArray(["ready",(function (){
cljs.reader.register_tag_parser_BANG_.call(null,"testtag",(function (x){
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([x], true)], true);
}));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",".example"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6896 = cljs.core.vector_QMARK_.call(null,".example");
if(or__3824__auto____6896)
{return or__3824__auto____6896;
} else
{return cljs.core.keyword_QMARK_.call(null,".example");
}
})())?cljs_jquery.core.dom_create.call(null,".example"):((true)?cljs_jquery.core.jquery.call(null,".example"):null))),cljs.core.PersistentVector.fromArray(["on","click",(function (){
return session.client.main.load_session.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6897 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3824__auto____6897)
{return or__3824__auto____6897;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["attr","id"], true)));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","#savebutton"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6898 = cljs.core.vector_QMARK_.call(null,"#savebutton");
if(or__3824__auto____6898)
{return or__3824__auto____6898;
} else
{return cljs.core.keyword_QMARK_.call(null,"#savebutton");
}
})())?cljs_jquery.core.dom_create.call(null,"#savebutton"):((true)?cljs_jquery.core.jquery.call(null,"#savebutton"):null))),cljs.core.PersistentVector.fromArray(["on","click",(function (){
return session.client.main.download_session.call(null);
})], true));
session.client.editor.add_keybindings.call(null);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","#fileupload"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6899 = cljs.core.vector_QMARK_.call(null,"#fileupload");
if(or__3824__auto____6899)
{return or__3824__auto____6899;
} else
{return cljs.core.keyword_QMARK_.call(null,"#fileupload");
}
})())?cljs_jquery.core.dom_create.call(null,"#fileupload"):((true)?cljs_jquery.core.jquery.call(null,"#fileupload"):null))),cljs.core.PersistentVector.fromArray(["fileupload",goog.object.create("add",(function (e,data){
return data.submit().complete((function (result,status,xx){
return session.client.main.load_new_file.call(null,result.responseText);
}));
}))], true));
return session.client.main.load_session.call(null,"default-session");
})], true));
