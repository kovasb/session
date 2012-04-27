goog.provide('session.client.svgtest');
goog.require('cljs.core');
goog.require('c2.layout.partition');
goog.require('c2.svg');
goog.require('c2.maths');
session.client.svgtest.unify = (function() {
var unify = null;
var unify__3397 = (function (data,mapping){
return cljs.core.map.call(null,mapping,data);
});
var unify__3398 = (function (container,data,mapping){
return cljs.core.into.call(null,container,unify.call(null,data,mapping));
});
unify = function(container,data,mapping){
switch(arguments.length){
case  2 :
return unify__3397.call(this,container,data);
case  3 :
return unify__3398.call(this,container,data,mapping);
}
throw('Invalid arity: ' + arguments.length);
};
return unify;
})()
;
/**
* Convert map to CSS string. Optional :numeric-suffix added to numbers (defaults to 'px').
* @param {...*} var_args
*/
session.client.svgtest.style = (function() { 
var style__delegate = function (m,p__3401){
var map__3402__3403 = p__3401;
var map__3402__3404 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3402__3403))?cljs.core.apply.call(null,cljs.core.hash_map,map__3402__3403):map__3402__3403);
var numeric_suffix__3405 = cljs.core.get.call(null,map__3402__3404,"\uFDD0'numeric-suffix","px");

return cljs.core.apply.call(null,cljs.core.str,(function (){var iter__520__auto____3413 = (function iter__3406(s__3407){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3407__3408 = s__3407;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3407__3408)))
{var vec__3409__3410 = cljs.core.first.call(null,s__3407__3408);
var k__3411 = cljs.core.nth.call(null,vec__3409__3410,0,null);
var v__3412 = cljs.core.nth.call(null,vec__3409__3410,1,null);

return cljs.core.cons.call(null,cljs.core.str.call(null,cljs.core.name.call(null,k__3411),":",(cljs.core.truth_(cljs.core.number_QMARK_.call(null,v__3412))?cljs.core.str.call(null,v__3412,numeric_suffix__3405):v__3412),";"),iter__3406.call(null,cljs.core.rest.call(null,s__3407__3408)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____3413.call(null,m);
})());
};
var style = function (m,var_args){
var p__3401 = null;
if (goog.isDef(var_args)) {
  p__3401 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return style__delegate.call(this, m, p__3401);
};
style.cljs$lang$maxFixedArity = 1;
style.cljs$lang$applyTo = (function (arglist__3414){
var m = cljs.core.first(arglist__3414);
var p__3401 = cljs.core.rest(arglist__3414);
return style__delegate.call(this, m, p__3401);
});
return style;
})()
;
session.client.svgtest.result = (function (){var data__3416 = cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'children"],{"\uFDD0'name":"Delicious Pie","\uFDD0'children":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bites"],{"\uFDD0'name":"Eaten","\uFDD0'bites":11}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bites"],{"\uFDD0'name":"Not Eaten","\uFDD0'bites":39}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bites"],{"\uFDD0'name":"Silverware","\uFDD0'bites":8})])});
var slices__3417 = cljs.core.filter.call(null,(function (p1__3400_SHARP_){
return cljs.core._EQ_.call(null,"\uFDD0'depth".call(null,"\uFDD0'partition".call(null,p1__3400_SHARP_)),1);
}),c2.layout.partition.partition.call(null,data__3416,"\uFDD0'value","\uFDD0'bites","\uFDD0'size",cljs.core.PersistentVector.fromArray([c2.maths.Tau,1])));
var radius__3418 = 170;

return cljs.core.PersistentVector.fromArray(["\uFDD0'svg",cljs.core.PersistentVector.fromArray(["\uFDD0'g",cljs.core.ObjMap.fromObject(["\uFDD0'transform"],{"\uFDD0'transform":"translate(200,200)"}),session.client.svgtest.unify.call(null,slices__3417,(function (p__3419){
var map__3420__3422 = p__3419;
var map__3420__3423 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3420__3422))?cljs.core.apply.call(null,cljs.core.hash_map,map__3420__3422):map__3420__3422);
var name__3424 = cljs.core.get.call(null,map__3420__3423,"\uFDD0'name");
var bites__3425 = cljs.core.get.call(null,map__3420__3423,"\uFDD0'bites");
var map__3421__3426 = cljs.core.get.call(null,map__3420__3423,"\uFDD0'partition");
var map__3421__3427 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3421__3426))?cljs.core.apply.call(null,cljs.core.hash_map,map__3421__3426):map__3421__3426);
var dx__3428 = cljs.core.get.call(null,map__3421__3427,"\uFDD0'dx");
var x__3429 = cljs.core.get.call(null,map__3421__3427,"\uFDD0'x");

return cljs.core.PersistentVector.fromArray(["\uFDD0'g.slice",cljs.core.PersistentVector.fromArray(["\uFDD0'path",cljs.core.ObjMap.fromObject(["\uFDD0'd","\uFDD0'style"],{"\uFDD0'd":c2.svg.arc.call(null,"\uFDD0'outer-radius",radius__3418,"\uFDD0'start-angle",x__3429,"\uFDD0'end-angle",(x__3429 + dx__3428)),"\uFDD0'style":session.client.svgtest.style.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'stroke","\uFDD0'fill"],{"\uFDD0'stroke":"black","\uFDD0'fill":session.client.svgtest.case$.call(null,name__3424,"Eaten","yellow","Not Eaten","tan","Silverware","silver")}))})]),(function (){var label_angle__3430 = (x__3429 + (dx__3428 / 2));

return cljs.core.PersistentVector.fromArray(["\uFDD0'text",cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'text-anchor"],{"\uFDD0'x":((0.5 * radius__3418) * c2.maths.cos.call(null,label_angle__3430)),"\uFDD0'y":((0.5 * radius__3418) * c2.maths.sin.call(null,label_angle__3430)),"\uFDD0'text-anchor":(function (){var pred__3431__3434 = cljs.core._GT_;
var expr__3432__3435 = (label_angle__3430 % c2.maths.Tau);

if(cljs.core.truth_(pred__3431__3434.call(null,(c2.maths.Tau * 0.25),expr__3432__3435)))
{return "start";
} else
{if(cljs.core.truth_(pred__3431__3434.call(null,(c2.maths.Tau * 0.75),expr__3432__3435)))
{return "end";
} else
{if(cljs.core.truth_(pred__3431__3434.call(null,c2.maths.Tau,expr__3432__3435)))
{return "start";
} else
{throw (new Error(cljs.core.str.call(null,"No matching clause: ",expr__3432__3435)));
}
}
}
})()}),cljs.core.str.call(null,name__3424)]);
})()]);
}))])]);
})();
var data__3436 = cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'children"],{"\uFDD0'name":"Delicious Pie","\uFDD0'children":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bites"],{"\uFDD0'name":"Eaten","\uFDD0'bites":11}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bites"],{"\uFDD0'name":"Not Eaten","\uFDD0'bites":39}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bites"],{"\uFDD0'name":"Silverware","\uFDD0'bites":8})])});
var slices__3437 = cljs.core.filter.call(null,(function (p1__3415_SHARP_){
return cljs.core._EQ_.call(null,"\uFDD0'depth".call(null,"\uFDD0'partition".call(null,p1__3415_SHARP_)),1);
}),c2.layout.partition.partition.call(null,data__3436,"\uFDD0'value","\uFDD0'bites","\uFDD0'size",cljs.core.PersistentVector.fromArray([c2.maths.Tau,1])));
var radius__3438 = 170;

cljs.core.PersistentVector.fromArray(["\uFDD0'svg",cljs.core.PersistentVector.fromArray(["\uFDD0'g",cljs.core.ObjMap.fromObject(["\uFDD0'transform"],{"\uFDD0'transform":"translate(200,200)"}),cljs.core.vector.call(null,slices__3437,(function (p__3439){
var map__3440__3442 = p__3439;
var map__3440__3443 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3440__3442))?cljs.core.apply.call(null,cljs.core.hash_map,map__3440__3442):map__3440__3442);
var name__3444 = cljs.core.get.call(null,map__3440__3443,"\uFDD0'name");
var bites__3445 = cljs.core.get.call(null,map__3440__3443,"\uFDD0'bites");
var map__3441__3446 = cljs.core.get.call(null,map__3440__3443,"\uFDD0'partition");
var map__3441__3447 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3441__3446))?cljs.core.apply.call(null,cljs.core.hash_map,map__3441__3446):map__3441__3446);
var dx__3448 = cljs.core.get.call(null,map__3441__3447,"\uFDD0'dx");
var x__3449 = cljs.core.get.call(null,map__3441__3447,"\uFDD0'x");

return cljs.core.PersistentVector.fromArray(["\uFDD0'g.slice",cljs.core.PersistentVector.fromArray(["\uFDD0'path",cljs.core.ObjMap.fromObject(["\uFDD0'd","\uFDD0'style"],{"\uFDD0'd":c2.svg.arc.call(null,"\uFDD0'outer-radius",radius__3438,"\uFDD0'start-angle",x__3449,"\uFDD0'end-angle",(x__3449 + dx__3448)),"\uFDD0'style":session.client.svgtest.style.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'stroke","\uFDD0'fill"],{"\uFDD0'stroke":"black","\uFDD0'fill":session.client.svgtest.case$.call(null,name__3444,"Eaten","yellow","Not Eaten","tan","Silverware","silver")}))})]),(function (){var label_angle__3450 = (x__3449 + (dx__3448 / 2));

return cljs.core.PersistentVector.fromArray(["\uFDD0'text",cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'text-anchor"],{"\uFDD0'x":((0.5 * radius__3438) * c2.maths.cos.call(null,label_angle__3450)),"\uFDD0'y":((0.5 * radius__3438) * c2.maths.sin.call(null,label_angle__3450)),"\uFDD0'text-anchor":(function (){var pred__3451__3454 = cljs.core._GT_;
var expr__3452__3455 = (label_angle__3450 % c2.maths.Tau);

if(cljs.core.truth_(pred__3451__3454.call(null,(c2.maths.Tau * 0.25),expr__3452__3455)))
{return "start";
} else
{if(cljs.core.truth_(pred__3451__3454.call(null,(c2.maths.Tau * 0.75),expr__3452__3455)))
{return "end";
} else
{if(cljs.core.truth_(pred__3451__3454.call(null,c2.maths.Tau,expr__3452__3455)))
{return "start";
} else
{throw (new Error(cljs.core.str.call(null,"No matching clause: ",expr__3452__3455)));
}
}
}
})()}),cljs.core.str.call(null,name__3444)]);
})()]);
}))])]);
