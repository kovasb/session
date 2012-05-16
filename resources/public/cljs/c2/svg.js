goog.provide('c2.svg');
goog.require('cljs.core');
goog.require('c2.maths');
c2.svg.translate = (function translate(coordinates){
while(true){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coordinates)))
{if(cljs.core.truth_((function (){var and__3822__auto____32422 = cljs.core.vector_QMARK_.call(null,coordinates);

if(cljs.core.truth_(and__3822__auto____32422))
{return cljs.core._EQ_.call(null,cljs.core.count.call(null,coordinates),2);
} else
{return and__3822__auto____32422;
}
})()))
{var x__32423 = cljs.core.nth.call(null,coordinates,0);
var y__32424 = cljs.core.nth.call(null,coordinates,1);

return cljs.core.str.call(null,"translate(",x__32423,",",y__32424,")");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new java.lang.Exception(cljs.core.str.call(null,"No match found. ","Followed ",1," branches."," Breadcrumbs: ",cljs.core.vec([cljs.core.list("\uFDD1'clojure.core/vector?","\uFDD1'coordinates")]))));
} else
{return null;
}
}
} else
{if(cljs.core.truth_((function (){var x__451__auto____32425 = coordinates;

if(cljs.core.truth_((function (){var and__3822__auto____32426 = x__451__auto____32425;

if(cljs.core.truth_(and__3822__auto____32426))
{var and__3822__auto____32427 = x__451__auto____32425.cljs$core$ILookup$;

if(cljs.core.truth_(and__3822__auto____32427))
{return cljs.core.not.call(null,x__451__auto____32425.hasOwnProperty("cljs$core$ILookup$"));
} else
{return and__3822__auto____32427;
}
} else
{return and__3822__auto____32426;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ILookup,x__451__auto____32425);
}
})()))
{var y__32428 = cljs.core.get.call(null,coordinates,"\uFDD0'y");
var x__32429 = cljs.core.get.call(null,coordinates,"\uFDD0'x");

{
var G__32430 = cljs.core.PersistentVector.fromArray([x__32429,y__32428]);
coordinates = G__32430;
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
{if(cljs.core.truth_((function (){var and__3822__auto____32435 = cljs.core.vector_QMARK_.call(null,coordinates);

if(cljs.core.truth_(and__3822__auto____32435))
{return cljs.core._EQ_.call(null,cljs.core.count.call(null,coordinates),2);
} else
{return and__3822__auto____32435;
}
})()))
{var x__32436 = cljs.core.nth.call(null,coordinates,0);
var y__32437 = cljs.core.nth.call(null,coordinates,1);

return cljs.core.str.call(null,"scale(",x__32436,",",y__32437,")");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new java.lang.Exception(cljs.core.str.call(null,"No match found. ","Followed ",1," branches."," Breadcrumbs: ",cljs.core.vec([cljs.core.list("\uFDD1'clojure.core/vector?","\uFDD1'coordinates")]))));
} else
{return null;
}
}
} else
{if(cljs.core.truth_((function (){var x__451__auto____32438 = coordinates;

if(cljs.core.truth_((function (){var and__3822__auto____32439 = x__451__auto____32438;

if(cljs.core.truth_(and__3822__auto____32439))
{var and__3822__auto____32440 = x__451__auto____32438.cljs$core$ILookup$;

if(cljs.core.truth_(and__3822__auto____32440))
{return cljs.core.not.call(null,x__451__auto____32438.hasOwnProperty("cljs$core$ILookup$"));
} else
{return and__3822__auto____32440;
}
} else
{return and__3822__auto____32439;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ILookup,x__451__auto____32438);
}
})()))
{var y__32441 = cljs.core.get.call(null,coordinates,"\uFDD0'y");
var x__32442 = cljs.core.get.call(null,coordinates,"\uFDD0'x");

{
var G__32443 = cljs.core.PersistentVector.fromArray([x__32442,y__32441]);
coordinates = G__32443;
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
var axis__delegate = function (scale,ticks,p__32444){
var map__32445__32446 = p__32444;
var map__32445__32447 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__32445__32446))?cljs.core.apply.call(null,cljs.core.hash_map,map__32445__32446):map__32445__32446);
var text_margin__32448 = cljs.core.get.call(null,map__32445__32447,"\uFDD0'text-margin",9);
var major_tick_width__32449 = cljs.core.get.call(null,map__32445__32447,"\uFDD0'major-tick-width",6);
var formatter__32450 = cljs.core.get.call(null,map__32445__32447,"\uFDD0'formatter",cljs.core.str);
var orientation__32451 = cljs.core.get.call(null,map__32445__32447,"\uFDD0'orientation","\uFDD0'left");

var vec__32452__32453 = c2.svg.case$.call(null,orientation__32451,"\uFDD0'left".call(null,"\uFDD0'right"),cljs.core.PersistentVector.fromArray(["\uFDD0'x","\uFDD0'y","\uFDD0'x1","\uFDD0'x2","\uFDD0'y1","\uFDD0'y2"]),"\uFDD0'top".call(null,"\uFDD0'bottom"),cljs.core.PersistentVector.fromArray(["\uFDD0'y","\uFDD0'x","\uFDD0'y1","\uFDD0'y2","\uFDD0'x1","\uFDD0'x2"]));
var x__32454 = cljs.core.nth.call(null,vec__32452__32453,0,null);
var y__32455 = cljs.core.nth.call(null,vec__32452__32453,1,null);
var x1__32456 = cljs.core.nth.call(null,vec__32452__32453,2,null);
var x2__32457 = cljs.core.nth.call(null,vec__32452__32453,3,null);
var y1__32458 = cljs.core.nth.call(null,vec__32452__32453,4,null);
var y2__32459 = cljs.core.nth.call(null,vec__32452__32453,5,null);
var parity__32460 = c2.svg.case$.call(null,orientation__32451,"\uFDD0'left".call(null,"\uFDD0'top"),-1,"\uFDD0'right".call(null,"\uFDD0'bottom"),1);

return cljs.core.PersistentVector.fromArray(["\uFDD0'g.axis",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":cljs.core.name.call(null,orientation__32451)}),cljs.core.PersistentVector.fromArray(["\uFDD0'line.rule",cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.interleave.call(null,cljs.core.PersistentVector.fromArray([y1__32458,y2__32459]),"\uFDD0'range".call(null,scale)))]),cljs.core.map.call(null,(function (d){
return cljs.core.PersistentVector.fromArray(["\uFDD0'g.major-tick",cljs.core.ObjMap.fromObject(["\uFDD0'transform"],{"\uFDD0'transform":c2.svg.translate.call(null,cljs.core.HashMap.fromArrays([x__32454,y__32455],[0,scale.call(null,d)]))}),cljs.core.PersistentVector.fromArray(["\uFDD0'text",cljs.core.HashMap.fromArrays([x__32454],[(parity__32460 * text_margin__32448)]),formatter__32450.call(null,d)]),cljs.core.PersistentVector.fromArray(["\uFDD0'line",cljs.core.HashMap.fromArrays([x1__32456,x2__32457],[0,(parity__32460 * major_tick_width__32449)])])]);
}),ticks)]);
};
var axis = function (scale,ticks,var_args){
var p__32444 = null;
if (goog.isDef(var_args)) {
  p__32444 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return axis__delegate.call(this, scale, ticks, p__32444);
};
axis.cljs$lang$maxFixedArity = 2;
axis.cljs$lang$applyTo = (function (arglist__32461){
var scale = cljs.core.first(arglist__32461);
var ticks = cljs.core.first(cljs.core.next(arglist__32461));
var p__32444 = cljs.core.rest(cljs.core.next(arglist__32461));
return axis__delegate.call(this, scale, ticks, p__32444);
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
var circle__32467 = (function (radius){
return circle.call(null,cljs.core.PersistentVector.fromArray([0,0]),radius);
});
var circle__32468 = (function (p__32462,radius){
var vec__32463__32464 = p__32462;
var x__32465 = cljs.core.nth.call(null,vec__32463__32464,0,null);
var y__32466 = cljs.core.nth.call(null,vec__32463__32464,1,null);

return cljs.core.str.call(null,"M",(x__32465 + radius),",",y__32466,"A",(x__32465 + radius),",",(y__32466 + radius)," 0 1,1",(- (x__32465 + radius)),",",y__32466,"A",(x__32465 + radius),",",(y__32466 + radius)," 0 1,1",(x__32465 + radius),",",y__32466);
});
circle = function(p__32462,radius){
switch(arguments.length){
case  1 :
return circle__32467.call(this,p__32462);
case  2 :
return circle__32468.call(this,p__32462,radius);
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
var arc__delegate = function (p__32470){
var map__32471__32472 = p__32470;
var map__32471__32473 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__32471__32472))?cljs.core.apply.call(null,cljs.core.hash_map,map__32471__32472):map__32471__32472);
var angle_offset__32474 = cljs.core.get.call(null,map__32471__32473,"\uFDD0'angle-offset",0);
var end_angle__32475 = cljs.core.get.call(null,map__32471__32473,"\uFDD0'end-angle",c2.maths.Pi);
var start_angle__32476 = cljs.core.get.call(null,map__32471__32473,"\uFDD0'start-angle",0);
var outer_radius__32477 = cljs.core.get.call(null,map__32471__32473,"\uFDD0'outer-radius",1);
var inner_radius__32478 = cljs.core.get.call(null,map__32471__32473,"\uFDD0'inner-radius",0);

var r0__32480 = inner_radius__32478;
var r1__32481 = outer_radius__32477;
var vec__32479__32482 = cljs.core.sort.call(null,cljs.core.PersistentVector.fromArray([(angle_offset__32474 + start_angle__32476),(angle_offset__32474 + end_angle__32475)]));
var a0__32483 = cljs.core.nth.call(null,vec__32479__32482,0,null);
var a1__32484 = cljs.core.nth.call(null,vec__32479__32482,1,null);
var da__32485 = (a1__32484 - a0__32483);
var large_arc_flag__32486 = (cljs.core.truth_((da__32485 < c2.maths.Pi))?"0":"1");
var s0__32487 = c2.maths.sin.call(null,a0__32483);
var c0__32488 = c2.maths.cos.call(null,a0__32483);
var s1__32489 = c2.maths.sin.call(null,a1__32484);
var c1__32490 = c2.maths.cos.call(null,a1__32484);

if(cljs.core.truth_((da__32485 >= c2.svg.ArcMax)))
{return cljs.core.str.call(null,"M0,",r1__32481,"A",r1__32481,",",r1__32481," 0 1,1 0,",(- r1__32481),"A",r1__32481,",",r1__32481," 0 1,1 0,",r1__32481,(cljs.core.truth_(cljs.core.not_EQ_.call(null,0,r0__32480))?cljs.core.str.call(null,"M0,",r0__32480,"A",r0__32480,",",r0__32480," 0 1,0 0,",(- r0__32480),"A",r0__32480,",",r0__32480," 0 1,0 0,",r0__32480):null),"Z");
} else
{return cljs.core.str.call(null,"M",(r1__32481 * c0__32488),",",(r1__32481 * s0__32487),"A",r1__32481,",",r1__32481," 0 ",large_arc_flag__32486,",1 ",(r1__32481 * c1__32490),",",(r1__32481 * s1__32489),(cljs.core.truth_(cljs.core.not_EQ_.call(null,0,r0__32480))?cljs.core.str.call(null,"L",(r0__32480 * c1__32490),",",(r0__32480 * s1__32489),"A",r0__32480,",",r0__32480," 0 ",large_arc_flag__32486,",0 ",(r0__32480 * c0__32488),",",(r0__32480 * s0__32487)):"L0,0"),"Z");
}
};
var arc = function (var_args){
var p__32470 = null;
if (goog.isDef(var_args)) {
  p__32470 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return arc__delegate.call(this, p__32470);
};
arc.cljs$lang$maxFixedArity = 0;
arc.cljs$lang$applyTo = (function (arglist__32491){
var p__32470 = cljs.core.seq( arglist__32491 );;
return arc__delegate.call(this, p__32470);
});
return arc;
})()
;
