goog.provide('session.client.editor');
goog.require('cljs.core');
/**
* Convert a clojure map into a JavaScript object
*/
session.client.editor.jsObj = (function jsObj(obj){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__30003){
var vec__30004__30005 = p__30003;
var k__30006 = cljs.core.nth.call(null,vec__30004__30005,0,null);
var v__30007 = cljs.core.nth.call(null,vec__30004__30005,1,null);

var k__30008 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,k__30006))?cljs.core.name.call(null,k__30006):k__30006);
var v__30009 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,v__30007))?cljs.core.name.call(null,v__30007):v__30007);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,v__30009)))
{return cljs.core.PersistentVector.fromArray([k__30008,jsObj.call(null,v__30009)]);
} else
{return cljs.core.PersistentVector.fromArray([k__30008,v__30009]);
}
}),obj)).strobj;
});
session.client.editor.ace = ace;
session.client.editor.js_require = require;
session.client.editor.canon = session.client.editor.js_require.call(null,"pilot/canon");
session.client.editor.add_keybindings = (function add_keybindings(){
return session.client.editor.canon.addCommand(session.client.editor.jsObj.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bindKey","\uFDD0'exec"],{"\uFDD0'name":"evaluateCell","\uFDD0'bindKey":cljs.core.ObjMap.fromObject(["\uFDD0'win","\uFDD0'mac","\uFDD0'sender"],{"\uFDD0'win":"Shift-Return","\uFDD0'mac":"Shift-Return","\uFDD0'sender":"editor"}),"\uFDD0'exec":(function (env,args,request){
session.client.editor.keyevent = cljs.core.PersistentVector.fromArray([env,args,request]);
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",env.editor.container))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30010 = cljs.core.vector_QMARK_.call(null,env.editor.container);

if(cljs.core.truth_(or__3824__auto____30010))
{return or__3824__auto____30010;
} else
{return cljs.core.keyword_QMARK_.call(null,env.editor.container);
}
})())?cljs_jquery.core.dom_create.call(null,env.editor.container):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,env.editor.container):null))),cljs.core.PersistentVector.fromArray(["trigger","evaluate-input"]));
})})));
});
session.client.editor.fit_to_length_function = (function fit_to_length_function(id,editor){
return (function (){
var val__30011 = cljs.core.str.call(null,(editor.renderer.lineHeight * editor.getSession().getLength()),"px");

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.str.call(null,"#",id)))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30012 = cljs.core.vector_QMARK_.call(null,cljs.core.str.call(null,"#",id));

if(cljs.core.truth_(or__3824__auto____30012))
{return or__3824__auto____30012;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.str.call(null,"#",id));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.str.call(null,"#",id)):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.str.call(null,"#",id)):null))),cljs.core.PersistentVector.fromArray(["css","height",val__30011]));
return editor.resize();
});
});
session.client.editor.fit_to_length = (function fit_to_length(id,editor){
var val__30013 = cljs.core.str.call(null,(editor.renderer.lineHeight * editor.getSession().getLength()),"px");

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.str.call(null,"#",id)))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30014 = cljs.core.vector_QMARK_.call(null,cljs.core.str.call(null,"#",id));

if(cljs.core.truth_(or__3824__auto____30014))
{return or__3824__auto____30014;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.str.call(null,"#",id));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.str.call(null,"#",id)):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.str.call(null,"#",id)):null))),cljs.core.PersistentVector.fromArray(["css","height",val__30013]));
return editor.resize();
});
session.client.editor.create_editor = (function create_editor(id){
var editor__30015 = session.client.editor.ace.edit(id);
var mode__30016 = session.client.editor.js_require.call(null,"ace/mode/clojure").Mode;
var fitfn__30017 = session.client.editor.fit_to_length_function.call(null,id,editor__30015);

editor__30015.setHighlightActiveLine(false);
editor__30015.getSession().setMode((new mode__30016()));
editor__30015.getSession().addEventListener("change",fitfn__30017);
editor__30015.renderer.setShowGutter(false);
editor__30015.renderer.setHScrollBarAlwaysVisible(false);
return editor__30015;
});
