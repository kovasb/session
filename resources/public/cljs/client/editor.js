goog.provide('session.client.editor');
goog.require('cljs.core');
goog.require('subpar.core');
session.client.editor.create_editor = (function create_editor(id){
var editor__6905 = CodeMirror.fromTextArea(document.getElementById(id),{"lineNumbers":false,"mode":"text/x-clojure","keyMap":"subpar"});
return editor__6905;
});
