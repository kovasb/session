goog.provide('session.client.editor');
goog.require('cljs.core');
/**
* Convert a clojure map into a JavaScript object
*/
session.client.editor.jsObj = (function jsObj(obj){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__49928){
var vec__49929__49930 = p__49928;
var k__49931 = cljs.core.nth.call(null,vec__49929__49930,0,null);
var v__49932 = cljs.core.nth.call(null,vec__49929__49930,1,null);

var k__49933 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,k__49931))?cljs.core.name.call(null,k__49931):k__49931);
var v__49934 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,v__49932))?cljs.core.name.call(null,v__49932):v__49932);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,v__49934)))
{return cljs.core.PersistentVector.fromArray([k__49933,jsObj.call(null,v__49934)]);
} else
{return cljs.core.PersistentVector.fromArray([k__49933,v__49934]);
}
}),obj)).strobj;
});
session.client.editor.ace = ace;
session.client.editor.js_require = require;
session.client.editor.canon = session.client.editor.js_require.call(null,"pilot/canon");
session.client.editor.add_keybindings = (function add_keybindings(){
return session.client.editor.canon.addCommand(session.client.editor.jsObj.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bindKey","\uFDD0'exec"],{"\uFDD0'name":"evaluateCell","\uFDD0'bindKey":cljs.core.ObjMap.fromObject(["\uFDD0'win","\uFDD0'mac","\uFDD0'sender"],{"\uFDD0'win":"Shift-Return","\uFDD0'mac":"Shift-Return","\uFDD0'sender":"editor"}),"\uFDD0'exec":(function (env,args,request){
session.client.editor.keyevent = cljs.core.PersistentVector.fromArray([env,args,request]);
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",env.editor.container))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49935 = cljs.core.vector_QMARK_.call(null,env.editor.container);

if(cljs.core.truth_(or__3824__auto____49935))
{return or__3824__auto____49935;
} else
{return cljs.core.keyword_QMARK_.call(null,env.editor.container);
}
})())?cljs_jquery.core.dom_create.call(null,env.editor.container):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,env.editor.container):null))),cljs.core.PersistentVector.fromArray(["trigger","evaluate-input"]));
})})));
});
session.client.editor.fit_to_length_function = (function fit_to_length_function(id,editor){
return (function (){
var val__49936 = cljs.core.str.call(null,(editor.renderer.lineHeight * editor.getSession().getLength()),"px");

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.str.call(null,"#",id)))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49937 = cljs.core.vector_QMARK_.call(null,cljs.core.str.call(null,"#",id));

if(cljs.core.truth_(or__3824__auto____49937))
{return or__3824__auto____49937;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.str.call(null,"#",id));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.str.call(null,"#",id)):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.str.call(null,"#",id)):null))),cljs.core.PersistentVector.fromArray(["css","height",val__49936]));
return editor.resize();
});
});
session.client.editor.fit_to_length = (function fit_to_length(id,editor){
var val__49938 = cljs.core.str.call(null,(editor.renderer.lineHeight * editor.getSession().getLength()),"px");

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.str.call(null,"#",id)))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49939 = cljs.core.vector_QMARK_.call(null,cljs.core.str.call(null,"#",id));

if(cljs.core.truth_(or__3824__auto____49939))
{return or__3824__auto____49939;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.str.call(null,"#",id));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.str.call(null,"#",id)):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.str.call(null,"#",id)):null))),cljs.core.PersistentVector.fromArray(["css","height",val__49938]));
return editor.resize();
});
session.client.editor.create_editor = (function create_editor(id){
var editor__49940 = session.client.editor.ace.edit(id);
var mode__49941 = session.client.editor.js_require.call(null,"ace/mode/clojure").Mode;
var fitfn__49942 = session.client.editor.fit_to_length_function.call(null,id,editor__49940);

editor__49940.getSession().setMode((new mode__49941()));
editor__49940.getSession().addEventListener("change",fitfn__49942);
editor__49940.renderer.setShowGutter(false);
editor__49940.renderer.setHScrollBarAlwaysVisible(false);
return editor__49940;
});
