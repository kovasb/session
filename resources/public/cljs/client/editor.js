goog.provide('session.client.editor');
goog.require('cljs.core');
goog.require('subpar.core');
session.client.editor.create_editor = (function create_editor(id){
var editor = CodeMirror.fromTextArea(document.getElementById(id),{"lineNumbers":false,"mode":"text/x-clojure","keyMap":"subpar"});
return editor;
});
