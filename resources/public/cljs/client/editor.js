goog.provide('session.client.editor');
goog.require('cljs.core');
goog.require('session.client.subscribe');
goog.require('subpar.core');
session.client.editor.create_editor = (function create_editor(id){
var editor__6913 = CodeMirror.fromTextArea(document.getElementById([cljs.core.str("area"),cljs.core.str(id)].join('')),{"lineNumbers":false,"mode":"text/x-clojure","onKeyEvent":(function (editor,event){
var text__6912 = editor.getValue();
if(cljs.core._EQ_.call(null,event.type,"keyup"))
{session.client.subscribe.send_BANG_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'op","\uFDD0'id","\uFDD0'input","\uFDD0'origin"],{"\uFDD0'op":"\uFDD0'update-textarea","\uFDD0'id":id,"\uFDD0'input":text__6912,"\uFDD0'origin":session.client.main.session_uuid}));
} else
{}
return false;
}),"keyMap":"subpar"});
return editor__6913;
});
