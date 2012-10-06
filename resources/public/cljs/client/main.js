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
var s__6785 = cljs.reader.read_string.call(null,(new cljs.core.Keyword("\uFDD0'result")).call(null,result));
var v__6787 = ((cljs.core._EQ_.call(null,"\uFDD0'this",session.client.mvc.view.call(null,s__6785)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6786 = cljs.core.vector_QMARK_.call(null,session.client.mvc.view.call(null,s__6785));
if(or__3824__auto____6786)
{return or__3824__auto____6786;
} else
{return cljs.core.keyword_QMARK_.call(null,session.client.mvc.view.call(null,s__6785));
}
})())?cljs_jquery.core.dom_create.call(null,session.client.mvc.view.call(null,s__6785)):((true)?cljs_jquery.core.jquery.call(null,session.client.mvc.view.call(null,s__6785)):null)));
cljs.core.reset_BANG_.call(null,session.client.main.session,s__6785);
session.client.mvc.control.call(null,s__6785,v__6787);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6788 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3824__auto____6788)
{return or__3824__auto____6788;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):((true)?cljs_jquery.core.jquery.call(null,"body > .container"):null))),cljs.core.PersistentVector.fromArray(["html",""], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",v__6787))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6789 = cljs.core.vector_QMARK_.call(null,v__6787);
if(or__3824__auto____6789)
{return or__3824__auto____6789;
} else
{return cljs.core.keyword_QMARK_.call(null,v__6787);
}
})())?cljs_jquery.core.dom_create.call(null,v__6787):((true)?cljs_jquery.core.jquery.call(null,v__6787):null))),cljs.core.PersistentVector.fromArray(["appendTo",((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6790 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3824__auto____6790)
{return or__3824__auto____6790;
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
var s__6797 = cljs.reader.read_string.call(null,x);
var v__6799 = ((cljs.core._EQ_.call(null,"\uFDD0'this",session.client.mvc.view.call(null,s__6797)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6798 = cljs.core.vector_QMARK_.call(null,session.client.mvc.view.call(null,s__6797));
if(or__3824__auto____6798)
{return or__3824__auto____6798;
} else
{return cljs.core.keyword_QMARK_.call(null,session.client.mvc.view.call(null,s__6797));
}
})())?cljs_jquery.core.dom_create.call(null,session.client.mvc.view.call(null,s__6797)):((true)?cljs_jquery.core.jquery.call(null,session.client.mvc.view.call(null,s__6797)):null)));
cljs.core.reset_BANG_.call(null,session.client.main.session,s__6797);
session.client.mvc.control.call(null,s__6797,v__6799);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6800 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3824__auto____6800)
{return or__3824__auto____6800;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):((true)?cljs_jquery.core.jquery.call(null,"body > .container"):null))),cljs.core.PersistentVector.fromArray(["html",""], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",v__6799))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6801 = cljs.core.vector_QMARK_.call(null,v__6799);
if(or__3824__auto____6801)
{return or__3824__auto____6801;
} else
{return cljs.core.keyword_QMARK_.call(null,v__6799);
}
})())?cljs_jquery.core.dom_create.call(null,v__6799):((true)?cljs_jquery.core.jquery.call(null,v__6799):null))),cljs.core.PersistentVector.fromArray(["appendTo",((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6802 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3824__auto____6802)
{return or__3824__auto____6802;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):((true)?cljs_jquery.core.jquery.call(null,"body > .container"):null)))], true));
});
session.client.main.download_session = (function download_session(){
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","#downloadformdata"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6808 = cljs.core.vector_QMARK_.call(null,"#downloadformdata");
if(or__3824__auto____6808)
{return or__3824__auto____6808;
} else
{return cljs.core.keyword_QMARK_.call(null,"#downloadformdata");
}
})())?cljs_jquery.core.dom_create.call(null,"#downloadformdata"):((true)?cljs_jquery.core.jquery.call(null,"#downloadformdata"):null))),cljs.core.PersistentVector.fromArray(["val",(function (){var _STAR_print_meta_STAR_6809__6810 = cljs.core._STAR_print_meta_STAR_;
try{cljs.core._STAR_print_meta_STAR_ = true;
return cljs.core.pr_str.call(null,cljs.core.deref.call(null,session.client.main.session));
}finally {cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR_6809__6810;
}})()], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","#downloadform"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6812 = cljs.core.vector_QMARK_.call(null,"#downloadform");
if(or__3824__auto____6812)
{return or__3824__auto____6812;
} else
{return cljs.core.keyword_QMARK_.call(null,"#downloadform");
}
})())?cljs_jquery.core.dom_create.call(null,"#downloadform"):((true)?cljs_jquery.core.jquery.call(null,"#downloadform"):null))),cljs.core.PersistentVector.fromArray(["submit"], true));
});
session.client.main.ds2 = (function ds2(){
var dataurl__6820 = [cljs.core.str("data:text/csv;charset=UTF-8,"),cljs.core.str(encodeURIComponent((function (){var _STAR_print_meta_STAR_6817__6818 = cljs.core._STAR_print_meta_STAR_;
try{cljs.core._STAR_print_meta_STAR_ = true;
return cljs.core.pr_str.call(null,cljs.core.deref.call(null,session.client.main.session));
}finally {cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR_6817__6818;
}})()))].join('');
return window.location.href=dataurl__6820;
});
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",document))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6821 = cljs.core.vector_QMARK_.call(null,document);
if(or__3824__auto____6821)
{return or__3824__auto____6821;
} else
{return cljs.core.keyword_QMARK_.call(null,document);
}
})())?cljs_jquery.core.dom_create.call(null,document):((true)?cljs_jquery.core.jquery.call(null,document):null))),cljs.core.PersistentVector.fromArray(["ready",(function (){
cljs.reader.register_tag_parser_BANG_.call(null,"testtag",(function (x){
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([x], true)], true);
}));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",".example"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6822 = cljs.core.vector_QMARK_.call(null,".example");
if(or__3824__auto____6822)
{return or__3824__auto____6822;
} else
{return cljs.core.keyword_QMARK_.call(null,".example");
}
})())?cljs_jquery.core.dom_create.call(null,".example"):((true)?cljs_jquery.core.jquery.call(null,".example"):null))),cljs.core.PersistentVector.fromArray(["on","click",(function (){
return session.client.main.load_session.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6823 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3824__auto____6823)
{return or__3824__auto____6823;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["attr","id"], true)));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","#savebutton"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6824 = cljs.core.vector_QMARK_.call(null,"#savebutton");
if(or__3824__auto____6824)
{return or__3824__auto____6824;
} else
{return cljs.core.keyword_QMARK_.call(null,"#savebutton");
}
})())?cljs_jquery.core.dom_create.call(null,"#savebutton"):((true)?cljs_jquery.core.jquery.call(null,"#savebutton"):null))),cljs.core.PersistentVector.fromArray(["on","click",(function (){
return session.client.main.download_session.call(null);
})], true));
session.client.editor.add_keybindings.call(null);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","#fileupload"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6825 = cljs.core.vector_QMARK_.call(null,"#fileupload");
if(or__3824__auto____6825)
{return or__3824__auto____6825;
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
