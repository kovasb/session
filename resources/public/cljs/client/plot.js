goog.provide('session.client.plot');
goog.require('cljs.core');
goog.require('session.client.mvc');
session.client.plot.series_plot = (function series_plot(x){
var elt__7629 = ((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7628 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true));
if(or__3939__auto____7628)
{return or__3939__auto____7628;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true)):null)));
$.plot(elt__7629,[{"data":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (p1__7624_SHARP_){
return cljs.core.apply.call(null,cljs.core.array,p1__7624_SHARP_);
}),(new cljs.core.Keyword("\uFDD0'data")).call(null,x)))}],{"yaxis":{"labelWidth":25,"position":"left"}});
return elt__7629;
});
session.client.plot.timeseries_plot = (function timeseries_plot(x){
var elt__7633 = ((cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3939__auto____7632 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true));
if(or__3939__auto____7632)
{return or__3939__auto____7632;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true));
}
})())?cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true)):((true)?cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:600px;height:200px;position:relative"}),""], true)):null)));
$.plot(elt__7633,[{"data":cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (p1__7625_SHARP_){
return [cljs.core.first.call(null,p1__7625_SHARP_).getTime(),cljs.core.last.call(null,p1__7625_SHARP_)];
}),(new cljs.core.Keyword("\uFDD0'data")).call(null,x)))}],{"xaxis":{"mode":"time","timeformat":"%y/%m/%d"},"yaxis":{"labelWidth":25,"position":"left"}});
return elt__7633;
});
session.client.plot.table = (function table(x){
if(cljs.core._EQ_.call(null,"\uFDD0'this",cljs.core.PersistentVector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:100%"}),cljs.core.map.call(null,(function (r){
return cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.map.call(null,(function (c){
return cljs.core.PersistentVector.fromArray(["\uFDD0'td",session.client.mvc.render.call(null,c)], true);
}),r)], true);
}),(new cljs.core.Keyword("\uFDD0'data")).call(null,x))], true)))
{return cljs_jquery.core.jquery.call(null,this);
} else
{if((function (){var or__3939__auto____7635 = cljs.core.vector_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:100%"}),cljs.core.map.call(null,(function (r){
return cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.map.call(null,(function (c){
return cljs.core.PersistentVector.fromArray(["\uFDD0'td",session.client.mvc.render.call(null,c)], true);
}),r)], true);
}),(new cljs.core.Keyword("\uFDD0'data")).call(null,x))], true));
if(or__3939__auto____7635)
{return or__3939__auto____7635;
} else
{return cljs.core.keyword_QMARK_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:100%"}),cljs.core.map.call(null,(function (r){
return cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.map.call(null,(function (c){
return cljs.core.PersistentVector.fromArray(["\uFDD0'td",session.client.mvc.render.call(null,c)], true);
}),r)], true);
}),(new cljs.core.Keyword("\uFDD0'data")).call(null,x))], true));
}
})())
{return cljs_jquery.core.dom_create.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:100%"}),cljs.core.map.call(null,(function (r){
return cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.map.call(null,(function (c){
return cljs.core.PersistentVector.fromArray(["\uFDD0'td",session.client.mvc.render.call(null,c)], true);
}),r)], true);
}),(new cljs.core.Keyword("\uFDD0'data")).call(null,x))], true));
} else
{if(true)
{return cljs_jquery.core.jquery.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'table",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":"width:100%"}),cljs.core.map.call(null,(function (r){
return cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.map.call(null,(function (c){
return cljs.core.PersistentVector.fromArray(["\uFDD0'td",session.client.mvc.render.call(null,c)], true);
}),r)], true);
}),(new cljs.core.Keyword("\uFDD0'data")).call(null,x))], true));
} else
{return null;
}
}
}
});
