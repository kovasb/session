goog.provide('session.client.svgtest');
goog.require('cljs.core');
goog.require('c2.layout.partition');
goog.require('c2.svg');
goog.require('c2.maths');
session.client.svgtest.unify = (function() {
var unify = null;
var unify__30230 = (function (data,mapping){
return cljs.core.map.call(null,mapping,data);
});
var unify__30231 = (function (container,data,mapping){
return cljs.core.into.call(null,container,unify.call(null,data,mapping));
});
unify = function(container,data,mapping){
switch(arguments.length){
case  2 :
return unify__30230.call(this,container,data);
case  3 :
return unify__30231.call(this,container,data,mapping);
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
var style__delegate = function (m,p__30234){
var map__30235__30236 = p__30234;
var map__30235__30237 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__30235__30236))?cljs.core.apply.call(null,cljs.core.hash_map,map__30235__30236):map__30235__30236);
var numeric_suffix__30238 = cljs.core.get.call(null,map__30235__30237,"\uFDD0'numeric-suffix","px");

return cljs.core.apply.call(null,cljs.core.str,(function (){var iter__520__auto____30246 = (function iter__30239(s__30240){
return (new cljs.core.LazySeq(null,false,(function (){
var s__30240__30241 = s__30240;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__30240__30241)))
{var vec__30242__30243 = cljs.core.first.call(null,s__30240__30241);
var k__30244 = cljs.core.nth.call(null,vec__30242__30243,0,null);
var v__30245 = cljs.core.nth.call(null,vec__30242__30243,1,null);

return cljs.core.cons.call(null,cljs.core.str.call(null,cljs.core.name.call(null,k__30244),":",(cljs.core.truth_(cljs.core.number_QMARK_.call(null,v__30245))?cljs.core.str.call(null,v__30245,numeric_suffix__30238):v__30245),";"),iter__30239.call(null,cljs.core.rest.call(null,s__30240__30241)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____30246.call(null,m);
})());
};
var style = function (m,var_args){
var p__30234 = null;
if (goog.isDef(var_args)) {
  p__30234 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return style__delegate.call(this, m, p__30234);
};
style.cljs$lang$maxFixedArity = 1;
style.cljs$lang$applyTo = (function (arglist__30247){
var m = cljs.core.first(arglist__30247);
var p__30234 = cljs.core.rest(arglist__30247);
return style__delegate.call(this, m, p__30234);
});
return style;
})()
;
session.client.svgtest.result = (function (){var data__30249 = cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'children"],{"\uFDD0'name":"Delicious Pie","\uFDD0'children":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bites"],{"\uFDD0'name":"Eaten","\uFDD0'bites":11}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bites"],{"\uFDD0'name":"Not Eaten","\uFDD0'bites":39}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bites"],{"\uFDD0'name":"Silverware","\uFDD0'bites":8})])});
var slices__30250 = cljs.core.filter.call(null,(function (p1__30233_SHARP_){
return cljs.core._EQ_.call(null,"\uFDD0'depth".call(null,"\uFDD0'partition".call(null,p1__30233_SHARP_)),1);
}),c2.layout.partition.partition.call(null,data__30249,"\uFDD0'value","\uFDD0'bites","\uFDD0'size",cljs.core.PersistentVector.fromArray([c2.maths.Tau,1])));
var radius__30251 = 170;

return cljs.core.PersistentVector.fromArray(["\uFDD0'svg",cljs.core.PersistentVector.fromArray(["\uFDD0'g",cljs.core.ObjMap.fromObject(["\uFDD0'transform"],{"\uFDD0'transform":"translate(200,200)"}),session.client.svgtest.unify.call(null,slices__30250,(function (p__30252){
var map__30253__30255 = p__30252;
var map__30253__30256 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__30253__30255))?cljs.core.apply.call(null,cljs.core.hash_map,map__30253__30255):map__30253__30255);
var name__30257 = cljs.core.get.call(null,map__30253__30256,"\uFDD0'name");
var bites__30258 = cljs.core.get.call(null,map__30253__30256,"\uFDD0'bites");
var map__30254__30259 = cljs.core.get.call(null,map__30253__30256,"\uFDD0'partition");
var map__30254__30260 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__30254__30259))?cljs.core.apply.call(null,cljs.core.hash_map,map__30254__30259):map__30254__30259);
var dx__30261 = cljs.core.get.call(null,map__30254__30260,"\uFDD0'dx");
var x__30262 = cljs.core.get.call(null,map__30254__30260,"\uFDD0'x");

return cljs.core.PersistentVector.fromArray(["\uFDD0'g.slice",cljs.core.PersistentVector.fromArray(["\uFDD0'path",cljs.core.ObjMap.fromObject(["\uFDD0'd","\uFDD0'style"],{"\uFDD0'd":c2.svg.arc.call(null,"\uFDD0'outer-radius",radius__30251,"\uFDD0'start-angle",x__30262,"\uFDD0'end-angle",(x__30262 + dx__30261)),"\uFDD0'style":session.client.svgtest.style.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'stroke","\uFDD0'fill"],{"\uFDD0'stroke":"black","\uFDD0'fill":session.client.svgtest.case$.call(null,name__30257,"Eaten","yellow","Not Eaten","tan","Silverware","silver")}))})]),(function (){var label_angle__30263 = (x__30262 + (dx__30261 / 2));

return cljs.core.PersistentVector.fromArray(["\uFDD0'text",cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'text-anchor"],{"\uFDD0'x":((0.5 * radius__30251) * c2.maths.cos.call(null,label_angle__30263)),"\uFDD0'y":((0.5 * radius__30251) * c2.maths.sin.call(null,label_angle__30263)),"\uFDD0'text-anchor":(function (){var pred__30264__30267 = cljs.core._GT_;
var expr__30265__30268 = (label_angle__30263 % c2.maths.Tau);

if(cljs.core.truth_(pred__30264__30267.call(null,(c2.maths.Tau * 0.25),expr__30265__30268)))
{return "start";
} else
{if(cljs.core.truth_(pred__30264__30267.call(null,(c2.maths.Tau * 0.75),expr__30265__30268)))
{return "end";
} else
{if(cljs.core.truth_(pred__30264__30267.call(null,c2.maths.Tau,expr__30265__30268)))
{return "start";
} else
{throw (new Error(cljs.core.str.call(null,"No matching clause: ",expr__30265__30268)));
}
}
}
})()}),cljs.core.str.call(null,name__30257)]);
})()]);
}))])]);
})();
var data__30269 = cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'children"],{"\uFDD0'name":"Delicious Pie","\uFDD0'children":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bites"],{"\uFDD0'name":"Eaten","\uFDD0'bites":11}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bites"],{"\uFDD0'name":"Not Eaten","\uFDD0'bites":39}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bites"],{"\uFDD0'name":"Silverware","\uFDD0'bites":8})])});
var slices__30270 = cljs.core.filter.call(null,(function (p1__30248_SHARP_){
return cljs.core._EQ_.call(null,"\uFDD0'depth".call(null,"\uFDD0'partition".call(null,p1__30248_SHARP_)),1);
}),c2.layout.partition.partition.call(null,data__30269,"\uFDD0'value","\uFDD0'bites","\uFDD0'size",cljs.core.PersistentVector.fromArray([c2.maths.Tau,1])));
var radius__30271 = 170;

cljs.core.PersistentVector.fromArray(["\uFDD0'svg",cljs.core.PersistentVector.fromArray(["\uFDD0'g",cljs.core.ObjMap.fromObject(["\uFDD0'transform"],{"\uFDD0'transform":"translate(200,200)"}),cljs.core.vector.call(null,slices__30270,(function (p__30272){
var map__30273__30275 = p__30272;
var map__30273__30276 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__30273__30275))?cljs.core.apply.call(null,cljs.core.hash_map,map__30273__30275):map__30273__30275);
var name__30277 = cljs.core.get.call(null,map__30273__30276,"\uFDD0'name");
var bites__30278 = cljs.core.get.call(null,map__30273__30276,"\uFDD0'bites");
var map__30274__30279 = cljs.core.get.call(null,map__30273__30276,"\uFDD0'partition");
var map__30274__30280 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__30274__30279))?cljs.core.apply.call(null,cljs.core.hash_map,map__30274__30279):map__30274__30279);
var dx__30281 = cljs.core.get.call(null,map__30274__30280,"\uFDD0'dx");
var x__30282 = cljs.core.get.call(null,map__30274__30280,"\uFDD0'x");

return cljs.core.PersistentVector.fromArray(["\uFDD0'g.slice",cljs.core.PersistentVector.fromArray(["\uFDD0'path",cljs.core.ObjMap.fromObject(["\uFDD0'd","\uFDD0'style"],{"\uFDD0'd":c2.svg.arc.call(null,"\uFDD0'outer-radius",radius__30271,"\uFDD0'start-angle",x__30282,"\uFDD0'end-angle",(x__30282 + dx__30281)),"\uFDD0'style":session.client.svgtest.style.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'stroke","\uFDD0'fill"],{"\uFDD0'stroke":"black","\uFDD0'fill":session.client.svgtest.case$.call(null,name__30277,"Eaten","yellow","Not Eaten","tan","Silverware","silver")}))})]),(function (){var label_angle__30283 = (x__30282 + (dx__30281 / 2));

return cljs.core.PersistentVector.fromArray(["\uFDD0'text",cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'text-anchor"],{"\uFDD0'x":((0.5 * radius__30271) * c2.maths.cos.call(null,label_angle__30283)),"\uFDD0'y":((0.5 * radius__30271) * c2.maths.sin.call(null,label_angle__30283)),"\uFDD0'text-anchor":(function (){var pred__30284__30287 = cljs.core._GT_;
var expr__30285__30288 = (label_angle__30283 % c2.maths.Tau);

if(cljs.core.truth_(pred__30284__30287.call(null,(c2.maths.Tau * 0.25),expr__30285__30288)))
{return "start";
} else
{if(cljs.core.truth_(pred__30284__30287.call(null,(c2.maths.Tau * 0.75),expr__30285__30288)))
{return "end";
} else
{if(cljs.core.truth_(pred__30284__30287.call(null,c2.maths.Tau,expr__30285__30288)))
{return "start";
} else
{throw (new Error(cljs.core.str.call(null,"No matching clause: ",expr__30285__30288)));
}
}
}
})()}),cljs.core.str.call(null,name__30277)]);
})()]);
}))])]);
