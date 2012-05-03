goog.provide('c2.svg');
goog.require('cljs.core');
goog.require('c2.maths');
c2.svg.translate = (function translate(coordinates){
while(true){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coordinates)))
{if(cljs.core.truth_((function (){var and__3822__auto____52326 = cljs.core.vector_QMARK_.call(null,coordinates);

if(cljs.core.truth_(and__3822__auto____52326))
{return cljs.core._EQ_.call(null,cljs.core.count.call(null,coordinates),2);
} else
{return and__3822__auto____52326;
}
})()))
{var x__52327 = cljs.core.nth.call(null,coordinates,0);
var y__52328 = cljs.core.nth.call(null,coordinates,1);

return cljs.core.str.call(null,"translate(",x__52327,",",y__52328,")");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new java.lang.Exception(cljs.core.str.call(null,"No match found. ","Followed ",1," branches."," Breadcrumbs: ",cljs.core.vec([cljs.core.list("\uFDD1'clojure.core/vector?","\uFDD1'coordinates")]))));
} else
{return null;
}
}
} else
{if(cljs.core.truth_((function (){var x__451__auto____52329 = coordinates;

if(cljs.core.truth_((function (){var and__3822__auto____52330 = x__451__auto____52329;

if(cljs.core.truth_(and__3822__auto____52330))
{var and__3822__auto____52331 = x__451__auto____52329.cljs$core$ILookup$;

if(cljs.core.truth_(and__3822__auto____52331))
{return cljs.core.not.call(null,x__451__auto____52329.hasOwnProperty("cljs$core$ILookup$"));
} else
{return and__3822__auto____52331;
}
} else
{return and__3822__auto____52330;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ILookup,x__451__auto____52329);
}
})()))
{var y__52332 = cljs.core.get.call(null,coordinates,"\uFDD0'y");
var x__52333 = cljs.core.get.call(null,coordinates,"\uFDD0'x");

{
var G__52334 = cljs.core.PersistentVector.fromArray([x__52333,y__52332]);
coordinates = G__52334;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{
return null;
} else
{return null;
}
}
}
break;
}
});
c2.svg.scale = (function scale(coordinates){
while(true){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coordinates)))
{if(cljs.core.truth_((function (){var and__3822__auto____52339 = cljs.core.vector_QMARK_.call(null,coordinates);

if(cljs.core.truth_(and__3822__auto____52339))
{return cljs.core._EQ_.call(null,cljs.core.count.call(null,coordinates),2);
} else
{return and__3822__auto____52339;
}
})()))
{var x__52340 = cljs.core.nth.call(null,coordinates,0);
var y__52341 = cljs.core.nth.call(null,coordinates,1);

return cljs.core.str.call(null,"scale(",x__52340,",",y__52341,")");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new java.lang.Exception(cljs.core.str.call(null,"No match found. ","Followed ",1," branches."," Breadcrumbs: ",cljs.core.vec([cljs.core.list("\uFDD1'clojure.core/vector?","\uFDD1'coordinates")]))));
} else
{return null;
}
}
} else
{if(cljs.core.truth_((function (){var x__451__auto____52342 = coordinates;

if(cljs.core.truth_((function (){var and__3822__auto____52343 = x__451__auto____52342;

if(cljs.core.truth_(and__3822__auto____52343))
{var and__3822__auto____52344 = x__451__auto____52342.cljs$core$ILookup$;

if(cljs.core.truth_(and__3822__auto____52344))
{return cljs.core.not.call(null,x__451__auto____52342.hasOwnProperty("cljs$core$ILookup$"));
} else
{return and__3822__auto____52344;
}
} else
{return and__3822__auto____52343;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ILookup,x__451__auto____52342);
}
})()))
{var y__52345 = cljs.core.get.call(null,coordinates,"\uFDD0'y");
var x__52346 = cljs.core.get.call(null,coordinates,"\uFDD0'x");

{
var G__52347 = cljs.core.PersistentVector.fromArray([x__52346,y__52345]);
coordinates = G__52347;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{
return null;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns axis <g> for input scale with ticks.
* Direction away from the data frame is defined to be positive; use negative margins and widths for the axis to render inside of the data frame
* @param {...*} var_args
*/
c2.svg.axis = (function() { 
var axis__delegate = function (scale,ticks,p__52348){
var map__52349__52350 = p__52348;
var map__52349__52351 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__52349__52350))?cljs.core.apply.call(null,cljs.core.hash_map,map__52349__52350):map__52349__52350);
var text_margin__52352 = cljs.core.get.call(null,map__52349__52351,"\uFDD0'text-margin",9);
var major_tick_width__52353 = cljs.core.get.call(null,map__52349__52351,"\uFDD0'major-tick-width",6);
var formatter__52354 = cljs.core.get.call(null,map__52349__52351,"\uFDD0'formatter",cljs.core.str);
var orientation__52355 = cljs.core.get.call(null,map__52349__52351,"\uFDD0'orientation","\uFDD0'left");

var vec__52356__52357 = c2.svg.case$.call(null,orientation__52355,"\uFDD0'left".call(null,"\uFDD0'right"),cljs.core.PersistentVector.fromArray(["\uFDD0'x","\uFDD0'y","\uFDD0'x1","\uFDD0'x2","\uFDD0'y1","\uFDD0'y2"]),"\uFDD0'top".call(null,"\uFDD0'bottom"),cljs.core.PersistentVector.fromArray(["\uFDD0'y","\uFDD0'x","\uFDD0'y1","\uFDD0'y2","\uFDD0'x1","\uFDD0'x2"]));
var x__52358 = cljs.core.nth.call(null,vec__52356__52357,0,null);
var y__52359 = cljs.core.nth.call(null,vec__52356__52357,1,null);
var x1__52360 = cljs.core.nth.call(null,vec__52356__52357,2,null);
var x2__52361 = cljs.core.nth.call(null,vec__52356__52357,3,null);
var y1__52362 = cljs.core.nth.call(null,vec__52356__52357,4,null);
var y2__52363 = cljs.core.nth.call(null,vec__52356__52357,5,null);
var parity__52364 = c2.svg.case$.call(null,orientation__52355,"\uFDD0'left".call(null,"\uFDD0'top"),-1,"\uFDD0'right".call(null,"\uFDD0'bottom"),1);

return cljs.core.PersistentVector.fromArray(["\uFDD0'g.axis",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":cljs.core.name.call(null,orientation__52355)}),cljs.core.PersistentVector.fromArray(["\uFDD0'line.rule",cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.interleave.call(null,cljs.core.PersistentVector.fromArray([y1__52362,y2__52363]),"\uFDD0'range".call(null,scale)))]),cljs.core.map.call(null,(function (d){
return cljs.core.PersistentVector.fromArray(["\uFDD0'g.major-tick",cljs.core.ObjMap.fromObject(["\uFDD0'transform"],{"\uFDD0'transform":c2.svg.translate.call(null,cljs.core.HashMap.fromArrays([x__52358,y__52359],[0,scale.call(null,d)]))}),cljs.core.PersistentVector.fromArray(["\uFDD0'text",cljs.core.HashMap.fromArrays([x__52358],[(parity__52364 * text_margin__52352)]),formatter__52354.call(null,d)]),cljs.core.PersistentVector.fromArray(["\uFDD0'line",cljs.core.HashMap.fromArrays([x1__52360,x2__52361],[0,(parity__52364 * major_tick_width__52353)])])]);
}),ticks)]);
};
var axis = function (scale,ticks,var_args){
var p__52348 = null;
if (goog.isDef(var_args)) {
  p__52348 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return axis__delegate.call(this, scale, ticks, p__52348);
};
axis.cljs$lang$maxFixedArity = 2;
axis.cljs$lang$applyTo = (function (arglist__52365){
var scale = cljs.core.first(arglist__52365);
var ticks = cljs.core.first(cljs.core.next(arglist__52365));
var p__52348 = cljs.core.rest(cljs.core.next(arglist__52365));
return axis__delegate.call(this, scale, ticks, p__52348);
});
return axis;
})()
;
c2.svg.ArcMax = (c2.maths.Tau - 1.0E-7);
/**
* Returns svg path data for a circle starting at 3 o'clock and sweeping in positive y.
*/
c2.svg.circle = (function() {
var circle = null;
var circle__52371 = (function (radius){
return circle.call(null,cljs.core.PersistentVector.fromArray([0,0]),radius);
});
var circle__52372 = (function (p__52366,radius){
var vec__52367__52368 = p__52366;
var x__52369 = cljs.core.nth.call(null,vec__52367__52368,0,null);
var y__52370 = cljs.core.nth.call(null,vec__52367__52368,1,null);

return cljs.core.str.call(null,"M",(x__52369 + radius),",",y__52370,"A",(x__52369 + radius),",",(y__52370 + radius)," 0 1,1",(- (x__52369 + radius)),",",y__52370,"A",(x__52369 + radius),",",(y__52370 + radius)," 0 1,1",(x__52369 + radius),",",y__52370);
});
circle = function(p__52366,radius){
switch(arguments.length){
case  1 :
return circle__52371.call(this,p__52366);
case  2 :
return circle__52372.call(this,p__52366,radius);
}
throw('Invalid arity: ' + arguments.length);
};
return circle;
})()
;
/**
* @param {...*} var_args
*/
c2.svg.arc = (function() { 
var arc__delegate = function (p__52374){
var map__52375__52376 = p__52374;
var map__52375__52377 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__52375__52376))?cljs.core.apply.call(null,cljs.core.hash_map,map__52375__52376):map__52375__52376);
var angle_offset__52378 = cljs.core.get.call(null,map__52375__52377,"\uFDD0'angle-offset",0);
var end_angle__52379 = cljs.core.get.call(null,map__52375__52377,"\uFDD0'end-angle",c2.maths.Pi);
var start_angle__52380 = cljs.core.get.call(null,map__52375__52377,"\uFDD0'start-angle",0);
var outer_radius__52381 = cljs.core.get.call(null,map__52375__52377,"\uFDD0'outer-radius",1);
var inner_radius__52382 = cljs.core.get.call(null,map__52375__52377,"\uFDD0'inner-radius",0);

var r0__52384 = inner_radius__52382;
var r1__52385 = outer_radius__52381;
var vec__52383__52386 = cljs.core.sort.call(null,cljs.core.PersistentVector.fromArray([(angle_offset__52378 + start_angle__52380),(angle_offset__52378 + end_angle__52379)]));
var a0__52387 = cljs.core.nth.call(null,vec__52383__52386,0,null);
var a1__52388 = cljs.core.nth.call(null,vec__52383__52386,1,null);
var da__52389 = (a1__52388 - a0__52387);
var large_arc_flag__52390 = (cljs.core.truth_((da__52389 < c2.maths.Pi))?"0":"1");
var s0__52391 = c2.maths.sin.call(null,a0__52387);
var c0__52392 = c2.maths.cos.call(null,a0__52387);
var s1__52393 = c2.maths.sin.call(null,a1__52388);
var c1__52394 = c2.maths.cos.call(null,a1__52388);

if(cljs.core.truth_((da__52389 >= c2.svg.ArcMax)))
{return cljs.core.str.call(null,"M0,",r1__52385,"A",r1__52385,",",r1__52385," 0 1,1 0,",(- r1__52385),"A",r1__52385,",",r1__52385," 0 1,1 0,",r1__52385,(cljs.core.truth_(cljs.core.not_EQ_.call(null,0,r0__52384))?cljs.core.str.call(null,"M0,",r0__52384,"A",r0__52384,",",r0__52384," 0 1,0 0,",(- r0__52384),"A",r0__52384,",",r0__52384," 0 1,0 0,",r0__52384):null),"Z");
} else
{return cljs.core.str.call(null,"M",(r1__52385 * c0__52392),",",(r1__52385 * s0__52391),"A",r1__52385,",",r1__52385," 0 ",large_arc_flag__52390,",1 ",(r1__52385 * c1__52394),",",(r1__52385 * s1__52393),(cljs.core.truth_(cljs.core.not_EQ_.call(null,0,r0__52384))?cljs.core.str.call(null,"L",(r0__52384 * c1__52394),",",(r0__52384 * s1__52393),"A",r0__52384,",",r0__52384," 0 ",large_arc_flag__52390,",0 ",(r0__52384 * c0__52392),",",(r0__52384 * s0__52391)):"L0,0"),"Z");
}
};
var arc = function (var_args){
var p__52374 = null;
if (goog.isDef(var_args)) {
  p__52374 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return arc__delegate.call(this, p__52374);
};
arc.cljs$lang$maxFixedArity = 0;
arc.cljs$lang$applyTo = (function (arglist__52395){
var p__52374 = cljs.core.seq( arglist__52395 );;
return arc__delegate.call(this, p__52374);
});
return arc;
})()
;
