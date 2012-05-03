goog.provide('session.client.loop');
goog.require('cljs.core');
goog.require('session.client.editor');
goog.require('session.client.mvc');

/**
* @constructor
*/
session.client.loop.Loop = (function (model){
this.model = model;
})
session.client.loop.Loop.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"session.client.loop.Loop");
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$ = true;
session.client.loop.Loop.prototype.session$client$mvc$IMVC$view = (function (model){
var this__49943 = this;
var id__49944 = "\uFDD0'id".call(null,model);

return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__49944}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":cljs.core.str.call(null,"area",id__49944),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,"\uFDD0'input".call(null,model))]),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":cljs.core.str.call(null,"delete",id__49944),"\uFDD0'style":"margin-left:10px;float:none"}),"x"])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":cljs.core.str.call(null,"out",id__49944)}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view2.call(null,cljs.core.deref.call(null,"\uFDD0'output".call(null,model)))])])]),(function (){var lc__49945 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__49945))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49946 = cljs.core.vector_QMARK_.call(null,lc__49945);

if(cljs.core.truth_(or__3824__auto____49946))
{return or__3824__auto____49946;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__49945);
}
})())?cljs_jquery.core.dom_create.call(null,lc__49945):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__49945):null))),cljs.core.PersistentVector.fromArray(["on","mouseover",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49947 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____49947))
{return or__3824__auto____49947;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__49945))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49948 = cljs.core.vector_QMARK_.call(null,lc__49945);

if(cljs.core.truth_(or__3824__auto____49948))
{return or__3824__auto____49948;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__49945);
}
})())?cljs_jquery.core.dom_create.call(null,lc__49945):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__49945):null))),cljs.core.PersistentVector.fromArray(["on","mouseout",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49949 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____49949))
{return or__3824__auto____49949;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
return lc__49945;
})()])))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49955 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__49944}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":cljs.core.str.call(null,"area",id__49944),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,"\uFDD0'input".call(null,model))]),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":cljs.core.str.call(null,"delete",id__49944),"\uFDD0'style":"margin-left:10px;float:none"}),"x"])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":cljs.core.str.call(null,"out",id__49944)}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view2.call(null,cljs.core.deref.call(null,"\uFDD0'output".call(null,model)))])])]),(function (){var lc__49950 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__49950))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49951 = cljs.core.vector_QMARK_.call(null,lc__49950);

if(cljs.core.truth_(or__3824__auto____49951))
{return or__3824__auto____49951;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__49950);
}
})())?cljs_jquery.core.dom_create.call(null,lc__49950):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__49950):null))),cljs.core.PersistentVector.fromArray(["on","mouseover",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49952 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____49952))
{return or__3824__auto____49952;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__49950))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49953 = cljs.core.vector_QMARK_.call(null,lc__49950);

if(cljs.core.truth_(or__3824__auto____49953))
{return or__3824__auto____49953;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__49950);
}
})())?cljs_jquery.core.dom_create.call(null,lc__49950):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__49950):null))),cljs.core.PersistentVector.fromArray(["on","mouseout",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49954 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____49954))
{return or__3824__auto____49954;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
return lc__49950;
})()]));

if(cljs.core.truth_(or__3824__auto____49955))
{return or__3824__auto____49955;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__49944}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":cljs.core.str.call(null,"area",id__49944),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,"\uFDD0'input".call(null,model))]),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":cljs.core.str.call(null,"delete",id__49944),"\uFDD0'style":"margin-left:10px;float:none"}),"x"])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":cljs.core.str.call(null,"out",id__49944)}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view2.call(null,cljs.core.deref.call(null,"\uFDD0'output".call(null,model)))])])]),(function (){var lc__49956 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__49956))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49957 = cljs.core.vector_QMARK_.call(null,lc__49956);

if(cljs.core.truth_(or__3824__auto____49957))
{return or__3824__auto____49957;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__49956);
}
})())?cljs_jquery.core.dom_create.call(null,lc__49956):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__49956):null))),cljs.core.PersistentVector.fromArray(["on","mouseover",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49958 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____49958))
{return or__3824__auto____49958;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__49956))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49959 = cljs.core.vector_QMARK_.call(null,lc__49956);

if(cljs.core.truth_(or__3824__auto____49959))
{return or__3824__auto____49959;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__49956);
}
})())?cljs_jquery.core.dom_create.call(null,lc__49956):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__49956):null))),cljs.core.PersistentVector.fromArray(["on","mouseout",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49960 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____49960))
{return or__3824__auto____49960;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
return lc__49956;
})()]));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__49944}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":cljs.core.str.call(null,"area",id__49944),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,"\uFDD0'input".call(null,model))]),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":cljs.core.str.call(null,"delete",id__49944),"\uFDD0'style":"margin-left:10px;float:none"}),"x"])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":cljs.core.str.call(null,"out",id__49944)}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view2.call(null,cljs.core.deref.call(null,"\uFDD0'output".call(null,model)))])])]),(function (){var lc__49961 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__49961))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49962 = cljs.core.vector_QMARK_.call(null,lc__49961);

if(cljs.core.truth_(or__3824__auto____49962))
{return or__3824__auto____49962;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__49961);
}
})())?cljs_jquery.core.dom_create.call(null,lc__49961):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__49961):null))),cljs.core.PersistentVector.fromArray(["on","mouseover",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49963 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____49963))
{return or__3824__auto____49963;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__49961))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49964 = cljs.core.vector_QMARK_.call(null,lc__49961);

if(cljs.core.truth_(or__3824__auto____49964))
{return or__3824__auto____49964;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__49961);
}
})())?cljs_jquery.core.dom_create.call(null,lc__49961):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__49961):null))),cljs.core.PersistentVector.fromArray(["on","mouseout",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49965 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____49965))
{return or__3824__auto____49965;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
return lc__49961;
})()])):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__49944}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":cljs.core.str.call(null,"area",id__49944),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,"\uFDD0'input".call(null,model))]),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":cljs.core.str.call(null,"delete",id__49944),"\uFDD0'style":"margin-left:10px;float:none"}),"x"])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":cljs.core.str.call(null,"out",id__49944)}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view2.call(null,cljs.core.deref.call(null,"\uFDD0'output".call(null,model)))])])]),(function (){var lc__49966 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__49966))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49967 = cljs.core.vector_QMARK_.call(null,lc__49966);

if(cljs.core.truth_(or__3824__auto____49967))
{return or__3824__auto____49967;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__49966);
}
})())?cljs_jquery.core.dom_create.call(null,lc__49966):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__49966):null))),cljs.core.PersistentVector.fromArray(["on","mouseover",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49968 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____49968))
{return or__3824__auto____49968;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__49966))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49969 = cljs.core.vector_QMARK_.call(null,lc__49966);

if(cljs.core.truth_(or__3824__auto____49969))
{return or__3824__auto____49969;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__49966);
}
})())?cljs_jquery.core.dom_create.call(null,lc__49966):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__49966):null))),cljs.core.PersistentVector.fromArray(["on","mouseout",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49970 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____49970))
{return or__3824__auto____49970;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
return lc__49966;
})()])):null))),cljs.core.PersistentVector.fromArray(["data","model",model]));
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$control = (function (model,viewobject){
var this__49971 = this;
var model__49973 = cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49972 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____49972))
{return or__3824__auto____49972;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["data","model"]));
var id__49974 = "\uFDD0'id".call(null,model__49973);
var editor__49975 = cljs.core.atom.call(null,cljs.core.PersistentVector.fromArray([]));

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49976 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____49976))
{return or__3824__auto____49976;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-creator",(function (){
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49977 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____49977))
{return or__3824__auto____49977;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","insert-new-loop"]));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49978 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____49978))
{return or__3824__auto____49978;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","post-render",(function (){
cljs.core.reset_BANG_.call(null,editor__49975,session.client.editor.create_editor.call(null,cljs.core.str.call(null,"area",id__49974)));
return session.client.editor.fit_to_length.call(null,cljs.core.str.call(null,"area",id__49974),cljs.core.deref.call(null,editor__49975));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49979 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____49979))
{return or__3824__auto____49979;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-deleter",(function (){
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49980 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____49980))
{return or__3824__auto____49980;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","delete-loop"]));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49981 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____49981))
{return or__3824__auto____49981;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-input",(function (){
cljs.core.reset_BANG_.call(null,"\uFDD0'input".call(null,model__49973),cljs.core.deref.call(null,editor__49975).getSession().getValue());
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49982 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____49982))
{return or__3824__auto____49982;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","evaluate-loop"]));
})]));
return cljs.core.add_watch.call(null,"\uFDD0'output".call(null,model__49973),"\uFDD0'update-output",(function (key,atom,old,new$){
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Atom,cljs.core.type.call(null,new$))))
{alert.call(null,"add atom to watch");
cljs.core.add_watch.call(null,new$,"\uFDD0'update-from-atom",(function (key2,atom2,old2,new2){
alert.call(null,"atom update");
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49983 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____49983))
{return or__3824__auto____49983;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"])),cljs.core.PersistentVector.fromArray(["html",""])),cljs.core.PersistentVector.fromArray(["append",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new2)])))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49984 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new2)]));

if(cljs.core.truth_(or__3824__auto____49984))
{return or__3824__auto____49984;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new2)]));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new2)])):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new2)])):null)))]));
}));
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49985 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____49985))
{return or__3824__auto____49985;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"])),cljs.core.PersistentVector.fromArray(["html",""])),cljs.core.PersistentVector.fromArray(["append",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,cljs.core.deref.call(null,new$))])))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49986 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,cljs.core.deref.call(null,new$))]));

if(cljs.core.truth_(or__3824__auto____49986))
{return or__3824__auto____49986;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,cljs.core.deref.call(null,new$))]));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,cljs.core.deref.call(null,new$))])):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,cljs.core.deref.call(null,new$))])):null)))]));
} else
{return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49987 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____49987))
{return or__3824__auto____49987;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"])),cljs.core.PersistentVector.fromArray(["html",""])),cljs.core.PersistentVector.fromArray(["append",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new$)])))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____49988 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new$)]));

if(cljs.core.truth_(or__3824__auto____49988))
{return or__3824__auto____49988;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new$)]));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new$)])):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new$)])):null)))]));
}
}));
});
session.client.loop.Loop.prototype.cljs$core$ILookup$ = true;
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup = (function() {
var G__49992 = null;
var G__49992__49993 = (function (o,k){
var this__49989 = this;
return this__49989.model.call(null,k);
});
var G__49992__49994 = (function (o,k,not_found){
var this__49990 = this;
return this__49990.model.call(null,k,not_found);
});
G__49992 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__49992__49993.call(this,o,k);
case  3 :
return G__49992__49994.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__49992;
})()
;
session.client.loop.Loop.prototype.cljs$core$IPrintable$ = true;
session.client.loop.Loop.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__49991 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#session/loop "]),cljs.core._pr_seq.call(null,cljs.core.assoc.call(null,this__49991.model,"\uFDD0'input",cljs.core.deref.call(null,"\uFDD0'input".call(null,this__49991.model)),"\uFDD0'output",cljs.core.deref.call(null,"\uFDD0'output".call(null,this__49991.model))),opts),"");
});
session.client.loop.Loop;
