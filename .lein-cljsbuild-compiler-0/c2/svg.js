goog.provide('c2.svg');
goog.require('cljs.core');
goog.require('c2.maths');
c2.svg.translate = (function translate(coordinates){
while(true){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coordinates)))
{if(cljs.core.truth_((function (){var and__3822__auto____6986 = cljs.core.vector_QMARK_.call(null,coordinates);

if(cljs.core.truth_(and__3822__auto____6986))
{return cljs.core._EQ_.call(null,cljs.core.count.call(null,coordinates),2);
} else
{return and__3822__auto____6986;
}
})()))
{var x__6987 = cljs.core.nth.call(null,coordinates,0);
var y__6988 = cljs.core.nth.call(null,coordinates,1);

return cljs.core.str.call(null,"translate(",x__6987,",",y__6988,")");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new java.lang.Exception(cljs.core.str.call(null,"No match found. ","Followed ",1," branches."," Breadcrumbs: ",cljs.core.vec([cljs.core.list("\uFDD1'clojure.core/vector?","\uFDD1'coordinates")]))));
} else
{return null;
}
}
} else
{if(cljs.core.truth_((function (){var x__451__auto____6989 = coordinates;

if(cljs.core.truth_((function (){var and__3822__auto____6990 = x__451__auto____6989;

if(cljs.core.truth_(and__3822__auto____6990))
{var and__3822__auto____6991 = x__451__auto____6989.cljs$core$ILookup$;

if(cljs.core.truth_(and__3822__auto____6991))
{return cljs.core.not.call(null,x__451__auto____6989.hasOwnProperty("cljs$core$ILookup$"));
} else
{return and__3822__auto____6991;
}
} else
{return and__3822__auto____6990;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ILookup,x__451__auto____6989);
}
})()))
{var y__6992 = cljs.core.get.call(null,coordinates,"\uFDD0'y");
var x__6993 = cljs.core.get.call(null,coordinates,"\uFDD0'x");

{
var G__6994 = cljs.core.PersistentVector.fromArray([x__6993,y__6992]);
coordinates = G__6994;
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
{if(cljs.core.truth_((function (){var and__3822__auto____6999 = cljs.core.vector_QMARK_.call(null,coordinates);

if(cljs.core.truth_(and__3822__auto____6999))
{return cljs.core._EQ_.call(null,cljs.core.count.call(null,coordinates),2);
} else
{return and__3822__auto____6999;
}
})()))
{var x__7000 = cljs.core.nth.call(null,coordinates,0);
var y__7001 = cljs.core.nth.call(null,coordinates,1);

return cljs.core.str.call(null,"scale(",x__7000,",",y__7001,")");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new java.lang.Exception(cljs.core.str.call(null,"No match found. ","Followed ",1," branches."," Breadcrumbs: ",cljs.core.vec([cljs.core.list("\uFDD1'clojure.core/vector?","\uFDD1'coordinates")]))));
} else
{return null;
}
}
} else
{if(cljs.core.truth_((function (){var x__451__auto____7002 = coordinates;

if(cljs.core.truth_((function (){var and__3822__auto____7003 = x__451__auto____7002;

if(cljs.core.truth_(and__3822__auto____7003))
{var and__3822__auto____7004 = x__451__auto____7002.cljs$core$ILookup$;

if(cljs.core.truth_(and__3822__auto____7004))
{return cljs.core.not.call(null,x__451__auto____7002.hasOwnProperty("cljs$core$ILookup$"));
} else
{return and__3822__auto____7004;
}
} else
{return and__3822__auto____7003;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ILookup,x__451__auto____7002);
}
})()))
{var y__7005 = cljs.core.get.call(null,coordinates,"\uFDD0'y");
var x__7006 = cljs.core.get.call(null,coordinates,"\uFDD0'x");

{
var G__7007 = cljs.core.PersistentVector.fromArray([x__7006,y__7005]);
coordinates = G__7007;
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
var axis__delegate = function (scale,ticks,p__7008){
var map__7009__7010 = p__7008;
var map__7009__7011 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7009__7010))?cljs.core.apply.call(null,cljs.core.hash_map,map__7009__7010):map__7009__7010);
var text_margin__7012 = cljs.core.get.call(null,map__7009__7011,"\uFDD0'text-margin",9);
var major_tick_width__7013 = cljs.core.get.call(null,map__7009__7011,"\uFDD0'major-tick-width",6);
var formatter__7014 = cljs.core.get.call(null,map__7009__7011,"\uFDD0'formatter",cljs.core.str);
var orientation__7015 = cljs.core.get.call(null,map__7009__7011,"\uFDD0'orientation","\uFDD0'left");

var vec__7016__7017 = c2.svg.case$.call(null,orientation__7015,"\uFDD0'left".call(null,"\uFDD0'right"),cljs.core.PersistentVector.fromArray(["\uFDD0'x","\uFDD0'y","\uFDD0'x1","\uFDD0'x2","\uFDD0'y1","\uFDD0'y2"]),"\uFDD0'top".call(null,"\uFDD0'bottom"),cljs.core.PersistentVector.fromArray(["\uFDD0'y","\uFDD0'x","\uFDD0'y1","\uFDD0'y2","\uFDD0'x1","\uFDD0'x2"]));
var x__7018 = cljs.core.nth.call(null,vec__7016__7017,0,null);
var y__7019 = cljs.core.nth.call(null,vec__7016__7017,1,null);
var x1__7020 = cljs.core.nth.call(null,vec__7016__7017,2,null);
var x2__7021 = cljs.core.nth.call(null,vec__7016__7017,3,null);
var y1__7022 = cljs.core.nth.call(null,vec__7016__7017,4,null);
var y2__7023 = cljs.core.nth.call(null,vec__7016__7017,5,null);
var parity__7024 = c2.svg.case$.call(null,orientation__7015,"\uFDD0'left".call(null,"\uFDD0'top"),-1,"\uFDD0'right".call(null,"\uFDD0'bottom"),1);

return cljs.core.PersistentVector.fromArray(["\uFDD0'g.axis",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":cljs.core.name.call(null,orientation__7015)}),cljs.core.PersistentVector.fromArray(["\uFDD0'line.rule",cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.interleave.call(null,cljs.core.PersistentVector.fromArray([y1__7022,y2__7023]),"\uFDD0'range".call(null,scale)))]),cljs.core.map.call(null,(function (d){
return cljs.core.PersistentVector.fromArray(["\uFDD0'g.major-tick",cljs.core.ObjMap.fromObject(["\uFDD0'transform"],{"\uFDD0'transform":c2.svg.translate.call(null,cljs.core.HashMap.fromArrays([x__7018,y__7019],[0,scale.call(null,d)]))}),cljs.core.PersistentVector.fromArray(["\uFDD0'text",cljs.core.HashMap.fromArrays([x__7018],[(parity__7024 * text_margin__7012)]),formatter__7014.call(null,d)]),cljs.core.PersistentVector.fromArray(["\uFDD0'line",cljs.core.HashMap.fromArrays([x1__7020,x2__7021],[0,(parity__7024 * major_tick_width__7013)])])]);
}),ticks)]);
};
var axis = function (scale,ticks,var_args){
var p__7008 = null;
if (goog.isDef(var_args)) {
  p__7008 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return axis__delegate.call(this, scale, ticks, p__7008);
};
axis.cljs$lang$maxFixedArity = 2;
axis.cljs$lang$applyTo = (function (arglist__7025){
var scale = cljs.core.first(arglist__7025);
var ticks = cljs.core.first(cljs.core.next(arglist__7025));
var p__7008 = cljs.core.rest(cljs.core.next(arglist__7025));
return axis__delegate.call(this, scale, ticks, p__7008);
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
var circle__7031 = (function (radius){
return circle.call(null,cljs.core.PersistentVector.fromArray([0,0]),radius);
});
var circle__7032 = (function (p__7026,radius){
var vec__7027__7028 = p__7026;
var x__7029 = cljs.core.nth.call(null,vec__7027__7028,0,null);
var y__7030 = cljs.core.nth.call(null,vec__7027__7028,1,null);

return cljs.core.str.call(null,"M",(x__7029 + radius),",",y__7030,"A",(x__7029 + radius),",",(y__7030 + radius)," 0 1,1",(- (x__7029 + radius)),",",y__7030,"A",(x__7029 + radius),",",(y__7030 + radius)," 0 1,1",(x__7029 + radius),",",y__7030);
});
circle = function(p__7026,radius){
switch(arguments.length){
case  1 :
return circle__7031.call(this,p__7026);
case  2 :
return circle__7032.call(this,p__7026,radius);
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
var arc__delegate = function (p__7034){
var map__7035__7036 = p__7034;
var map__7035__7037 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7035__7036))?cljs.core.apply.call(null,cljs.core.hash_map,map__7035__7036):map__7035__7036);
var angle_offset__7038 = cljs.core.get.call(null,map__7035__7037,"\uFDD0'angle-offset",0);
var end_angle__7039 = cljs.core.get.call(null,map__7035__7037,"\uFDD0'end-angle",c2.maths.Pi);
var start_angle__7040 = cljs.core.get.call(null,map__7035__7037,"\uFDD0'start-angle",0);
var outer_radius__7041 = cljs.core.get.call(null,map__7035__7037,"\uFDD0'outer-radius",1);
var inner_radius__7042 = cljs.core.get.call(null,map__7035__7037,"\uFDD0'inner-radius",0);

var r0__7044 = inner_radius__7042;
var r1__7045 = outer_radius__7041;
var vec__7043__7046 = cljs.core.sort.call(null,cljs.core.PersistentVector.fromArray([(angle_offset__7038 + start_angle__7040),(angle_offset__7038 + end_angle__7039)]));
var a0__7047 = cljs.core.nth.call(null,vec__7043__7046,0,null);
var a1__7048 = cljs.core.nth.call(null,vec__7043__7046,1,null);
var da__7049 = (a1__7048 - a0__7047);
var large_arc_flag__7050 = (cljs.core.truth_((da__7049 < c2.maths.Pi))?"0":"1");
var s0__7051 = c2.maths.sin.call(null,a0__7047);
var c0__7052 = c2.maths.cos.call(null,a0__7047);
var s1__7053 = c2.maths.sin.call(null,a1__7048);
var c1__7054 = c2.maths.cos.call(null,a1__7048);

if(cljs.core.truth_((da__7049 >= c2.svg.ArcMax)))
{return cljs.core.str.call(null,"M0,",r1__7045,"A",r1__7045,",",r1__7045," 0 1,1 0,",(- r1__7045),"A",r1__7045,",",r1__7045," 0 1,1 0,",r1__7045,(cljs.core.truth_(cljs.core.not_EQ_.call(null,0,r0__7044))?cljs.core.str.call(null,"M0,",r0__7044,"A",r0__7044,",",r0__7044," 0 1,0 0,",(- r0__7044),"A",r0__7044,",",r0__7044," 0 1,0 0,",r0__7044):null),"Z");
} else
{return cljs.core.str.call(null,"M",(r1__7045 * c0__7052),",",(r1__7045 * s0__7051),"A",r1__7045,",",r1__7045," 0 ",large_arc_flag__7050,",1 ",(r1__7045 * c1__7054),",",(r1__7045 * s1__7053),(cljs.core.truth_(cljs.core.not_EQ_.call(null,0,r0__7044))?cljs.core.str.call(null,"L",(r0__7044 * c1__7054),",",(r0__7044 * s1__7053),"A",r0__7044,",",r0__7044," 0 ",large_arc_flag__7050,",0 ",(r0__7044 * c0__7052),",",(r0__7044 * s0__7051)):"L0,0"),"Z");
}
};
var arc = function (var_args){
var p__7034 = null;
if (goog.isDef(var_args)) {
  p__7034 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return arc__delegate.call(this, p__7034);
};
arc.cljs$lang$maxFixedArity = 0;
arc.cljs$lang$applyTo = (function (arglist__7055){
var p__7034 = cljs.core.seq( arglist__7055 );;
return arc__delegate.call(this, p__7034);
});
return arc;
})()
;
