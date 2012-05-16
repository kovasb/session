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
var this__30018 = this;
var id__30019 = "\uFDD0'id".call(null,model);

return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__30019}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":cljs.core.str.call(null,"area",id__30019),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,"\uFDD0'input".call(null,model))]),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":cljs.core.str.call(null,"delete",id__30019),"\uFDD0'style":"margin-left:10px;float:none"}),"x"])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":cljs.core.str.call(null,"out",id__30019)}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view2.call(null,cljs.core.deref.call(null,"\uFDD0'output".call(null,model)))])])]),(function (){var lc__30020 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__30020))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30021 = cljs.core.vector_QMARK_.call(null,lc__30020);

if(cljs.core.truth_(or__3824__auto____30021))
{return or__3824__auto____30021;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__30020);
}
})())?cljs_jquery.core.dom_create.call(null,lc__30020):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__30020):null))),cljs.core.PersistentVector.fromArray(["on","mouseover",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30022 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____30022))
{return or__3824__auto____30022;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__30020))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30023 = cljs.core.vector_QMARK_.call(null,lc__30020);

if(cljs.core.truth_(or__3824__auto____30023))
{return or__3824__auto____30023;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__30020);
}
})())?cljs_jquery.core.dom_create.call(null,lc__30020):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__30020):null))),cljs.core.PersistentVector.fromArray(["on","mouseout",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30024 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____30024))
{return or__3824__auto____30024;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
return lc__30020;
})()])))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30030 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__30019}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":cljs.core.str.call(null,"area",id__30019),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,"\uFDD0'input".call(null,model))]),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":cljs.core.str.call(null,"delete",id__30019),"\uFDD0'style":"margin-left:10px;float:none"}),"x"])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":cljs.core.str.call(null,"out",id__30019)}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view2.call(null,cljs.core.deref.call(null,"\uFDD0'output".call(null,model)))])])]),(function (){var lc__30025 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__30025))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30026 = cljs.core.vector_QMARK_.call(null,lc__30025);

if(cljs.core.truth_(or__3824__auto____30026))
{return or__3824__auto____30026;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__30025);
}
})())?cljs_jquery.core.dom_create.call(null,lc__30025):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__30025):null))),cljs.core.PersistentVector.fromArray(["on","mouseover",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30027 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____30027))
{return or__3824__auto____30027;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__30025))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30028 = cljs.core.vector_QMARK_.call(null,lc__30025);

if(cljs.core.truth_(or__3824__auto____30028))
{return or__3824__auto____30028;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__30025);
}
})())?cljs_jquery.core.dom_create.call(null,lc__30025):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__30025):null))),cljs.core.PersistentVector.fromArray(["on","mouseout",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30029 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____30029))
{return or__3824__auto____30029;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
return lc__30025;
})()]));

if(cljs.core.truth_(or__3824__auto____30030))
{return or__3824__auto____30030;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__30019}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":cljs.core.str.call(null,"area",id__30019),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,"\uFDD0'input".call(null,model))]),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":cljs.core.str.call(null,"delete",id__30019),"\uFDD0'style":"margin-left:10px;float:none"}),"x"])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":cljs.core.str.call(null,"out",id__30019)}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view2.call(null,cljs.core.deref.call(null,"\uFDD0'output".call(null,model)))])])]),(function (){var lc__30031 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__30031))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30032 = cljs.core.vector_QMARK_.call(null,lc__30031);

if(cljs.core.truth_(or__3824__auto____30032))
{return or__3824__auto____30032;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__30031);
}
})())?cljs_jquery.core.dom_create.call(null,lc__30031):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__30031):null))),cljs.core.PersistentVector.fromArray(["on","mouseover",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30033 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____30033))
{return or__3824__auto____30033;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__30031))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30034 = cljs.core.vector_QMARK_.call(null,lc__30031);

if(cljs.core.truth_(or__3824__auto____30034))
{return or__3824__auto____30034;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__30031);
}
})())?cljs_jquery.core.dom_create.call(null,lc__30031):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__30031):null))),cljs.core.PersistentVector.fromArray(["on","mouseout",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30035 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____30035))
{return or__3824__auto____30035;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
return lc__30031;
})()]));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__30019}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":cljs.core.str.call(null,"area",id__30019),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,"\uFDD0'input".call(null,model))]),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":cljs.core.str.call(null,"delete",id__30019),"\uFDD0'style":"margin-left:10px;float:none"}),"x"])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":cljs.core.str.call(null,"out",id__30019)}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view2.call(null,cljs.core.deref.call(null,"\uFDD0'output".call(null,model)))])])]),(function (){var lc__30036 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__30036))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30037 = cljs.core.vector_QMARK_.call(null,lc__30036);

if(cljs.core.truth_(or__3824__auto____30037))
{return or__3824__auto____30037;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__30036);
}
})())?cljs_jquery.core.dom_create.call(null,lc__30036):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__30036):null))),cljs.core.PersistentVector.fromArray(["on","mouseover",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30038 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____30038))
{return or__3824__auto____30038;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__30036))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30039 = cljs.core.vector_QMARK_.call(null,lc__30036);

if(cljs.core.truth_(or__3824__auto____30039))
{return or__3824__auto____30039;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__30036);
}
})())?cljs_jquery.core.dom_create.call(null,lc__30036):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__30036):null))),cljs.core.PersistentVector.fromArray(["on","mouseout",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30040 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____30040))
{return or__3824__auto____30040;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
return lc__30036;
})()])):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.loop-container",cljs.core.PersistentVector.fromArray(["\uFDD0'div.row.input",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":id__30019}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-right",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5",cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'style"],{"\uFDD0'id":cljs.core.str.call(null,"area",id__30019),"\uFDD0'style":"margin-left:0px;position:relative;height:18px"}),cljs.core.deref.call(null,"\uFDD0'input".call(null,model))]),cljs.core.PersistentVector.fromArray(["\uFDD0'a.close.loop-deleter",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'id","\uFDD0'style"],{"\uFDD0'href":"#","\uFDD0'id":cljs.core.str.call(null,"delete",id__30019),"\uFDD0'style":"margin-left:10px;float:none"}),"x"])])]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.row",cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":cljs.core.str.call(null,"out",id__30019)}),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span6",cljs.core.PersistentVector.fromArray(["\uFDD0'i.icon-chevron-left",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"float:left"}),""]),cljs.core.PersistentVector.fromArray(["\uFDD0'div.span5.loopout",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"margin-left:0px;position:relative"}),session.client.mvc.view2.call(null,cljs.core.deref.call(null,"\uFDD0'output".call(null,model)))])])]),(function (){var lc__30041 = session.client.mvc.view2.call(null,cljs.core.with_meta(cljs.core.PersistentVector.fromArray(["\uFDD0'loop-creator"]),cljs.core.ObjMap.fromObject(["\uFDD0'view"],{"\uFDD0'view":"\uFDD0'loop-creator"})));

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__30041))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30042 = cljs.core.vector_QMARK_.call(null,lc__30041);

if(cljs.core.truth_(or__3824__auto____30042))
{return or__3824__auto____30042;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__30041);
}
})())?cljs_jquery.core.dom_create.call(null,lc__30041):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__30041):null))),cljs.core.PersistentVector.fromArray(["on","mouseover",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30043 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____30043))
{return or__3824__auto____30043;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",lc__30041))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30044 = cljs.core.vector_QMARK_.call(null,lc__30041);

if(cljs.core.truth_(or__3824__auto____30044))
{return or__3824__auto____30044;
} else
{return cljs.core.keyword_QMARK_.call(null,lc__30041);
}
})())?cljs_jquery.core.dom_create.call(null,lc__30041):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,lc__30041):null))),cljs.core.PersistentVector.fromArray(["on","mouseout",(function (){
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30045 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");

if(cljs.core.truth_(or__3824__auto____30045))
{return or__3824__auto____30045;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["find",".new-loop-icon"])),cljs.core.PersistentVector.fromArray(["toggleClass","icon-chevron-right"]));
})]));
return lc__30041;
})()])):null))),cljs.core.PersistentVector.fromArray(["data","model",model]));
});
session.client.loop.Loop.prototype.session$client$mvc$IMVC$control = (function (model,viewobject){
var this__30046 = this;
var model__30048 = cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30047 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____30047))
{return or__3824__auto____30047;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["data","model"]));
var id__30049 = "\uFDD0'id".call(null,model__30048);
var editor__30050 = cljs.core.atom.call(null,cljs.core.PersistentVector.fromArray([]));

cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30051 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____30051))
{return or__3824__auto____30051;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-creator",(function (){
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30052 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____30052))
{return or__3824__auto____30052;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","insert-new-loop"]));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30053 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____30053))
{return or__3824__auto____30053;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","post-render",(function (){
cljs.core.reset_BANG_.call(null,editor__30050,session.client.editor.create_editor.call(null,cljs.core.str.call(null,"area",id__30049)));
return session.client.editor.fit_to_length.call(null,cljs.core.str.call(null,"area",id__30049),cljs.core.deref.call(null,editor__30050));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30054 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____30054))
{return or__3824__auto____30054;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","click",".loop-deleter",(function (){
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30055 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____30055))
{return or__3824__auto____30055;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","delete-loop"]));
})]));
cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30056 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____30056))
{return or__3824__auto____30056;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["on","evaluate-input",(function (){
cljs.core.reset_BANG_.call(null,"\uFDD0'input".call(null,model__30048),cljs.core.deref.call(null,editor__30050).getSession().getValue());
return cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30057 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____30057))
{return or__3824__auto____30057;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["trigger","evaluate-loop"]));
})]));
return cljs.core.add_watch.call(null,"\uFDD0'output".call(null,model__30048),"\uFDD0'update-output",(function (key,atom,old,new$){
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Atom,cljs.core.type.call(null,new$))))
{alert.call(null,"add atom to watch");
cljs.core.add_watch.call(null,new$,"\uFDD0'update-from-atom",(function (key2,atom2,old2,new2){
alert.call(null,"atom update");
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30058 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____30058))
{return or__3824__auto____30058;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"])),cljs.core.PersistentVector.fromArray(["html",""])),cljs.core.PersistentVector.fromArray(["append",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new2)])))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30059 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new2)]));

if(cljs.core.truth_(or__3824__auto____30059))
{return or__3824__auto____30059;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new2)]));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new2)])):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new2)])):null)))]));
}));
return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30060 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____30060))
{return or__3824__auto____30060;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"])),cljs.core.PersistentVector.fromArray(["html",""])),cljs.core.PersistentVector.fromArray(["append",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,cljs.core.deref.call(null,new$))])))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30061 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,cljs.core.deref.call(null,new$))]));

if(cljs.core.truth_(or__3824__auto____30061))
{return or__3824__auto____30061;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,cljs.core.deref.call(null,new$))]));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,cljs.core.deref.call(null,new$))])):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,cljs.core.deref.call(null,new$))])):null)))]));
} else
{return cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,cljs_jquery.core.call_jquery.call(null,(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",viewobject))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30062 = cljs.core.vector_QMARK_.call(null,viewobject);

if(cljs.core.truth_(or__3824__auto____30062))
{return or__3824__auto____30062;
} else
{return cljs.core.keyword_QMARK_.call(null,viewobject);
}
})())?cljs_jquery.core.dom_create.call(null,viewobject):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,viewobject):null))),cljs.core.PersistentVector.fromArray(["find",".loopout"])),cljs.core.PersistentVector.fromArray(["html",""])),cljs.core.PersistentVector.fromArray(["append",(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new$)])))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30063 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new$)]));

if(cljs.core.truth_(or__3824__auto____30063))
{return or__3824__auto____30063;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new$)]));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new$)])):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",session.client.mvc.view2.call(null,new$)])):null)))]));
}
}));
});
session.client.loop.Loop.prototype.cljs$core$ILookup$ = true;
session.client.loop.Loop.prototype.cljs$core$ILookup$_lookup = (function() {
var G__30067 = null;
var G__30067__30068 = (function (o,k){
var this__30064 = this;
return this__30064.model.call(null,k);
});
var G__30067__30069 = (function (o,k,not_found){
var this__30065 = this;
return this__30065.model.call(null,k,not_found);
});
G__30067 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__30067__30068.call(this,o,k);
case  3 :
return G__30067__30069.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30067;
})()
;
session.client.loop.Loop.prototype.cljs$core$IPrintable$ = true;
session.client.loop.Loop.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__30066 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#session/loop "]),cljs.core._pr_seq.call(null,cljs.core.assoc.call(null,this__30066.model,"\uFDD0'input",cljs.core.deref.call(null,"\uFDD0'input".call(null,this__30066.model)),"\uFDD0'output",cljs.core.deref.call(null,"\uFDD0'output".call(null,this__30066.model))),opts),"");
});
session.client.loop.Loop;
