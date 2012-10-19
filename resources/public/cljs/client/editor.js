goog.provide('session.client.editor');
goog.require('cljs.core');
/**
* Convert a clojure map into a JavaScript object
*/
session.client.editor.jsObj = (function jsObj(obj){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__6121){
var vec__6122__6123 = p__6121;
var k__6124 = cljs.core.nth.call(null,vec__6122__6123,0,null);
var v__6125 = cljs.core.nth.call(null,vec__6122__6123,1,null);
var k__6126 = ((cljs.core.keyword_QMARK_.call(null,k__6124))?cljs.core.name.call(null,k__6124):k__6124);
var v__6127 = ((cljs.core.keyword_QMARK_.call(null,v__6125))?cljs.core.name.call(null,v__6125):v__6125);
if(cljs.core.map_QMARK_.call(null,v__6127))
{return cljs.core.PersistentVector.fromArray([k__6126,jsObj.call(null,v__6127)], true);
} else
{return cljs.core.PersistentVector.fromArray([k__6126,v__6127], true);
}
}),obj)).strobj;
});
session.client.editor.jsObj2 = (function jsObj2(clj_map){
var newobj__6129 = {};
cljs.core.reduce.call(null,(function (out,kv){
(out[cljs.core.first.call(null,kv)] = cljs.core.last.call(null,kv));
return out;
}),newobj__6129,clj_map);
return newobj__6129;
});
session.client.editor.ace = ace;
session.client.editor.js_require = require;
session.client.editor.canon = session.client.editor.js_require.call(null,"pilot/canon");
session.client.editor.add_keybindings = (function add_keybindings(){
return session.client.editor.canon.addCommand(session.client.editor.jsObj2.call(null,cljs.core.ObjMap.fromObject(["name","bindKey","exec"],{"name":"evaluateCell","bindKey":session.client.editor.jsObj2.call(null,cljs.core.ObjMap.fromObject(["win","mac","sender"],{"win":"Shift-Return","mac":"Shift-Return","sender":"editor"})),"exec":(function (env,args,request){
session.client.editor.keyevent = cljs.core.PersistentVector.fromArray([env,args,request], true);
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",env.editor.container))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6131 = cljs.core.vector_QMARK_.call(null,env.editor.container);
if(or__3824__auto____6131)
{return or__3824__auto____6131;
} else
{return cljs.core.keyword_QMARK_.call(null,env.editor.container);
}
})())?cljs_jquery.core.dom_create.call(null,env.editor.container):((true)?cljs_jquery.core.jquery.call(null,env.editor.container):null))),cljs.core.PersistentVector.fromArray(["trigger","evaluate-input"], true));
})})));
});
session.client.editor.fit_to_length_function = (function fit_to_length_function(id,editor){
return (function (){
var val__6134 = [cljs.core.str((editor.renderer.lineHeight * editor.getSession().getLength())),cljs.core.str("px")].join('');
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",[cljs.core.str("#"),cljs.core.str(id)].join('')))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6135 = cljs.core.vector_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str(id)].join(''));
if(or__3824__auto____6135)
{return or__3824__auto____6135;
} else
{return cljs.core.keyword_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str(id)].join(''));
}
})())?cljs_jquery.core.dom_create.call(null,[cljs.core.str("#"),cljs.core.str(id)].join('')):((true)?cljs_jquery.core.jquery.call(null,[cljs.core.str("#"),cljs.core.str(id)].join('')):null))),cljs.core.PersistentVector.fromArray(["css","height",val__6134], true));
return editor.resize();
});
});
session.client.editor.fit_to_length = (function fit_to_length(id,editor){
var val__6138 = [cljs.core.str((editor.renderer.lineHeight * editor.getSession().getLength())),cljs.core.str("px")].join('');
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",[cljs.core.str("#"),cljs.core.str(id)].join('')))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____6139 = cljs.core.vector_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str(id)].join(''));
if(or__3824__auto____6139)
{return or__3824__auto____6139;
} else
{return cljs.core.keyword_QMARK_.call(null,[cljs.core.str("#"),cljs.core.str(id)].join(''));
}
})())?cljs_jquery.core.dom_create.call(null,[cljs.core.str("#"),cljs.core.str(id)].join('')):((true)?cljs_jquery.core.jquery.call(null,[cljs.core.str("#"),cljs.core.str(id)].join('')):null))),cljs.core.PersistentVector.fromArray(["css","height",val__6138], true));
return editor.resize();
});
session.client.editor.create_editor = (function create_editor(id){
var editor__6143 = session.client.editor.ace.edit(id);
var mode__6144 = session.client.editor.js_require.call(null,"ace/mode/clojure").Mode;
var fitfn__6145 = session.client.editor.fit_to_length_function.call(null,id,editor__6143);
editor__6143.setHighlightActiveLine(false);
editor__6143.getSession().setMode((new mode__6144()));
editor__6143.getSession().addEventListener("change",fitfn__6145);
editor__6143.renderer.setShowGutter(false);
editor__6143.renderer.setHScrollBarAlwaysVisible(false);
return editor__6143;
});
