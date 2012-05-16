goog.provide('session.client.mvc');
goog.require('cljs.core');
session.client.mvc.IMVC = {};
session.client.mvc.view = (function view(this$){
if(cljs.core.truth_((function (){var and__3822__auto____30107 = this$;

if(cljs.core.truth_(and__3822__auto____30107))
{return this$.session$client$mvc$IMVC$view;
} else
{return and__3822__auto____30107;
}
})()))
{return this$.session$client$mvc$IMVC$view(this$);
} else
{return (function (){var or__3824__auto____30108 = (session.client.mvc.view[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30108))
{return or__3824__auto____30108;
} else
{var or__3824__auto____30109 = (session.client.mvc.view["_"]);

if(cljs.core.truth_(or__3824__auto____30109))
{return or__3824__auto____30109;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.view",this$);
}
}
})().call(null,this$);
}
});
session.client.mvc.control = (function control(this$,viewobject){
if(cljs.core.truth_((function (){var and__3822__auto____30110 = this$;

if(cljs.core.truth_(and__3822__auto____30110))
{return this$.session$client$mvc$IMVC$control;
} else
{return and__3822__auto____30110;
}
})()))
{return this$.session$client$mvc$IMVC$control(this$,viewobject);
} else
{return (function (){var or__3824__auto____30111 = (session.client.mvc.control[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30111))
{return or__3824__auto____30111;
} else
{var or__3824__auto____30112 = (session.client.mvc.control["_"]);

if(cljs.core.truth_(or__3824__auto____30112))
{return or__3824__auto____30112;
} else
{throw cljs.core.missing_protocol.call(null,"IMVC.control",this$);
}
}
})().call(null,this$,viewobject);
}
});
session.client.mvc.control2 = (function (){var method_table__585__auto____30113 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__586__auto____30114 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__587__auto____30115 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__588__auto____30116 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__589__auto____30117 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("control2",(function (p1__30106_SHARP_){
return cljs.core.identity.call(null,"\uFDD0'view".call(null,cljs.core.meta.call(null,p1__30106_SHARP_)));
}),"\uFDD0'default",hierarchy__589__auto____30117,method_table__585__auto____30113,prefer_table__586__auto____30114,method_cache__587__auto____30115,cached_hierarchy__588__auto____30116));
})();
cljs.core._add_method.call(null,session.client.mvc.control2,"\uFDD0'default",(function (){
return null;
}));
session.client.mvc.view2 = (function (){var method_table__585__auto____30119 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var prefer_table__586__auto____30120 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var method_cache__587__auto____30121 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var cached_hierarchy__588__auto____30122 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
var hierarchy__589__auto____30123 = cljs.core.get.call(null,cljs.core.ObjMap.fromObject([],{}),"\uFDD0'hierarchy",cljs.core.global_hierarchy);

return (new cljs.core.MultiFn("view2",(function (p1__30118_SHARP_){
return cljs.core.identity.call(null,"\uFDD0'view".call(null,cljs.core.meta.call(null,p1__30118_SHARP_)));
}),"\uFDD0'default",hierarchy__589__auto____30123,method_table__585__auto____30119,prefer_table__586__auto____30120,method_cache__587__auto____30121,cached_hierarchy__588__auto____30122));
})();
cljs.core._add_method.call(null,session.client.mvc.view2,"\uFDD0'dom",(function (arg){
if(cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",arg)))
{return cljs_jquery.core.jquery.call(null,this);
} else
{if(cljs.core.truth_((function (){var or__3824__auto____30124 = cljs.core.vector_QMARK_.call(null,arg);

if(cljs.core.truth_(or__3824__auto____30124))
{return or__3824__auto____30124;
} else
{return cljs.core.keyword_QMARK_.call(null,arg);
}
})()))
{return cljs_jquery.core.dom_create.call(null,arg);
} else
{if(cljs.core.truth_(true))
{return cljs_jquery.core.jquery.call(null,arg);
} else
{return null;
}
}
}
}));
/**
* Convert a clojure map into a JavaScript object
*/
session.client.mvc.jsObj = (function jsObj(obj){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__30128){
var vec__30129__30130 = p__30128;
var k__30131 = cljs.core.nth.call(null,vec__30129__30130,0,null);
var v__30132 = cljs.core.nth.call(null,vec__30129__30130,1,null);

var k__30133 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,k__30131))?cljs.core.name.call(null,k__30131):k__30131);
var v__30134 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,v__30132))?cljs.core.name.call(null,v__30132):v__30132);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,v__30134)))
{return cljs.core.PersistentVector.fromArray([k__30133,jsObj.call(null,v__30134)]);
} else
{return cljs.core.PersistentVector.fromArray([k__30133,v__30134]);
}
}),obj)).strobj;
});
session.client.mvc.reshape_categorical_data = (function reshape_categorical_data(d){
var bins__30137 = cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.first,d));
var categories__30138 = cljs.core.distinct.call(null,cljs.core.map.call(null,(function (p1__30125_SHARP_){
return cljs.core.nth.call(null,p1__30125_SHARP_,1);
}),d));
var value_map__30139 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p1__30126_SHARP_){
return cljs.core.vector.call(null,cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,p1__30126_SHARP_,0),cljs.core.nth.call(null,p1__30126_SHARP_,1)]),cljs.core.last.call(null,p1__30126_SHARP_));
}),d));

return cljs.core.ObjMap.fromObject(["\uFDD0'data","\uFDD0'categories","\uFDD0'bins"],{"\uFDD0'data":cljs.core.map.call(null,(function (c){
return cljs.core.map.call(null,(function (p1__30127_SHARP_){
return value_map__30139.call(null,cljs.core.PersistentVector.fromArray([p1__30127_SHARP_,c]),0);
}),bins__30137);
}),categories__30138),"\uFDD0'categories":categories__30138,"\uFDD0'bins":bins__30137});
});
session.client.mvc.insertBarChart = (function insertBarChart(data,graphicsDivID){
return (new Highcharts.Chart(session.client.mvc.jsObj.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'chart","\uFDD0'xAxis","\uFDD0'series"],{"\uFDD0'chart":cljs.core.ObjMap.fromObject(["\uFDD0'defaultSeriesType","\uFDD0'renderTo"],{"\uFDD0'defaultSeriesType":"bar","\uFDD0'renderTo":graphicsDivID}),"\uFDD0'xAxis":cljs.core.ObjMap.fromObject(["\uFDD0'categories"],{"\uFDD0'categories":cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.str,"\uFDD0'bins".call(null,data)))}),"\uFDD0'series":cljs.core.to_array.call(null,cljs.core.map.call(null,(function (p1__30135_SHARP_,p2__30136_SHARP_){
return session.client.mvc.jsObj.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'data"],{"\uFDD0'name":p1__30135_SHARP_,"\uFDD0'data":cljs.core.to_array.call(null,p2__30136_SHARP_)}));
}),"\uFDD0'categories".call(null,data),"\uFDD0'data".call(null,data)))}))));
});
cljs.core._add_method.call(null,session.client.mvc.view2,"\uFDD0'barchart",(function (arg){
var d__30140 = session.client.mvc.reshape_categorical_data.call(null,arg);
var elt__30142 = ((cljs.core.truth_(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:200px;height:200px"}),""])))?cljs_jquery.core.jquery.call(null,this):(cljs.core.truth_((function (){var or__3824__auto____30141 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:200px;height:200px"}),""]));

if(cljs.core.truth_(or__3824__auto____30141))
{return or__3824__auto____30141;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:200px;height:200px"}),""]));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:200px;height:200px"}),""])):(cljs.core.truth_(true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:200px;height:200px"}),""])):null)))[0]);

session.client.mvc.insertBarChart.call(null,d__30140,elt__30142);
return elt__30142;
}));
cljs.core._add_method.call(null,session.client.mvc.view2,"\uFDD0'default",(function (arg){
if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Element,arg)))
{return arg;
} else
{if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,jQuery,arg)))
{return arg;
} else
{if(cljs.core.truth_(true))
{return cljs.core.pr_str.call(null,arg);
} else
{return null;
}
}
}
}));
session.client.mvc.render = (function render(m){
var v__30143 = session.client.mvc.view.call(null,m);

session.client.mvc.control.call(null,m,v__30143);
return v__30143;
});
