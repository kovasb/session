goog.provide('session.client.editor');
goog.require('cljs.core');
goog.require('session.client.subscribe');
goog.require('subpar.core');
/**
* returns a type 4 random UUID: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
*/
session.client.editor.uuid = (function uuid(){
var r__10757 = cljs.core.repeatedly.call(null,30,(function (){
return cljs.core.rand_int.call(null,16).toString(16);
}));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.take.call(null,8,r__10757),cljs.core.PersistentVector.fromArray(["-"], true),cljs.core.take.call(null,4,cljs.core.drop.call(null,8,r__10757)),cljs.core.PersistentVector.fromArray(["-4"], true),cljs.core.take.call(null,3,cljs.core.drop.call(null,12,r__10757)),cljs.core.PersistentVector.fromArray(["-"], true),cljs.core.PersistentVector.fromArray([(8 | (3 & cljs.core.rand_int.call(null,15))).toString(16)], true),cljs.core.take.call(null,3,cljs.core.drop.call(null,15,r__10757)),cljs.core.PersistentVector.fromArray(["-"], true),cljs.core.take.call(null,12,cljs.core.drop.call(null,18,r__10757))));
});
session.client.editor.session_uuid = session.client.editor.uuid.call(null);
session.client.editor.create_editor = (function create_editor(id){
var editor__10761 = CodeMirror.fromTextArea(document.getElementById([cljs.core.str("area"),cljs.core.str(id)].join('')),{"lineNumbers":false,"mode":"text/x-clojure","onKeyEvent":(function (editor,event){
var text__10760 = editor.getValue();
if(cljs.core._EQ_.call(null,event.type,"keyup"))
{session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'input","\uFDD0'origin"],{"\uFDD0'op":"\uFDD0'update-textarea","\uFDD0'id":id,"\uFDD0'input":text__10760,"\uFDD0'origin":session.client.editor.session_uuid}));
} else
{}
return false;
}),"keyMap":"subpar"});
return editor__10761;
});
