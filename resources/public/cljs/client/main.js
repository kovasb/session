goog.provide('session.client.main');
goog.require('cljs.core');
goog.require('cljs_jquery.core');
goog.require('cljs.reader');
goog.require('session.client.mvc');
goog.require('session.client.readermap');
goog.require('session.client.keymap');
goog.require('subpar.core');
goog.require('fetch.remotes');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
/**
* returns a type 4 random UUID: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
*/
session.client.main.uuid = (function uuid(){
var r__7602 = cljs.core.repeatedly.call(null,30,(function (){
return cljs.core.rand_int.call(null,16).toString(16);
}));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.take.call(null,8,r__7602),cljs.core.PersistentVector.fromArray(["-"], true),cljs.core.take.call(null,4,cljs.core.drop.call(null,8,r__7602)),cljs.core.PersistentVector.fromArray(["-4"], true),cljs.core.take.call(null,3,cljs.core.drop.call(null,12,r__7602)),cljs.core.PersistentVector.fromArray(["-"], true),cljs.core.PersistentVector.fromArray([(8 | (3 & cljs.core.rand_int.call(null,15))).toString(16)], true),cljs.core.take.call(null,3,cljs.core.drop.call(null,15,r__7602)),cljs.core.PersistentVector.fromArray(["-"], true),cljs.core.take.call(null,12,cljs.core.drop.call(null,18,r__7602))));
});
session.client.main.session_uuid = session.client.main.uuid.call(null);
session.client.main.session = cljs.core.atom.call(null,null);
session.client.main.load_session = (function load_session(id){
return fetch.remotes.remote_callback.call(null,"get-session",cljs.core.PersistentVector.fromArray([id], true),(function (result){
var s__7604 = cljs.reader.read_string.call(null,(new cljs.core.Keyword("\uFDD0'result")).call(null,result));
cljs.core.reset_BANG_.call(null,session.client.main.session,s__7604);
return session.client.session.render_session.call(null,cljs.core.first.call(null,(new cljs.core.Keyword("\uFDD0'subsessions")).call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,cljs.core.deref.call(null,session.client.main.session)))));
}));
});
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",document))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7605 = cljs.core.vector_QMARK_.call(null,document);
if(or__3939__auto____7605)
{return or__3939__auto____7605;
} else
{return cljs.core.keyword_QMARK_.call(null,document);
}
})())?cljs_jquery.core.dom_create.call(null,document):((true)?cljs_jquery.core.jquery.call(null,document):null))),cljs.core.PersistentVector.fromArray(["ready",(function (){
session.client.readermap.register_tag_parsers.call(null);
(CodeMirror.keyMap["subpar"] = session.client.keymap.subpar_keymap);
return session.client.main.load_session.call(null,"default-session");
})], true));
