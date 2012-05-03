goog.provide('session.client.svgtest');
goog.require('cljs.core');
goog.require('c2.layout.partition');
goog.require('c2.svg');
goog.require('c2.maths');
session.client.svgtest.unify = (function() {
var unify = null;
var unify__50135 = (function (data,mapping){
return cljs.core.map.call(null,mapping,data);
});
var unify__50136 = (function (container,data,mapping){
return cljs.core.into.call(null,container,unify.call(null,data,mapping));
});
unify = function(container,data,mapping){
switch(arguments.length){
case  2 :
return unify__50135.call(this,container,data);
case  3 :
return unify__50136.call(this,container,data,mapping);
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
var style__delegate = function (m,p__50139){
var map__50140__50141 = p__50139;
var map__50140__50142 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__50140__50141))?cljs.core.apply.call(null,cljs.core.hash_map,map__50140__50141):map__50140__50141);
var numeric_suffix__50143 = cljs.core.get.call(null,map__50140__50142,"\uFDD0'numeric-suffix","px");

return cljs.core.apply.call(null,cljs.core.str,(function (){var iter__520__auto____50151 = (function iter__50144(s__50145){
return (new cljs.core.LazySeq(null,false,(function (){
var s__50145__50146 = s__50145;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__50145__50146)))
{var vec__50147__50148 = cljs.core.first.call(null,s__50145__50146);
var k__50149 = cljs.core.nth.call(null,vec__50147__50148,0,null);
var v__50150 = cljs.core.nth.call(null,vec__50147__50148,1,null);

return cljs.core.cons.call(null,cljs.core.str.call(null,cljs.core.name.call(null,k__50149),":",(cljs.core.truth_(cljs.core.number_QMARK_.call(null,v__50150))?cljs.core.str.call(null,v__50150,numeric_suffix__50143):v__50150),";"),iter__50144.call(null,cljs.core.rest.call(null,s__50145__50146)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____50151.call(null,m);
})());
};
var style = function (m,var_args){
var p__50139 = null;
if (goog.isDef(var_args)) {
  p__50139 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return style__delegate.call(this, m, p__50139);
};
style.cljs$lang$maxFixedArity = 1;
style.cljs$lang$applyTo = (function (arglist__50152){
var m = cljs.core.first(arglist__50152);
var p__50139 = cljs.core.rest(arglist__50152);
return style__delegate.call(this, m, p__50139);
});
return style;
})()
;
session.client.svgtest.result = (function (){var data__50154 = cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'children"],{"\uFDD0'name":"Delicious Pie","\uFDD0'children":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bites"],{"\uFDD0'name":"Eaten","\uFDD0'bites":11}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bites"],{"\uFDD0'name":"Not Eaten","\uFDD0'bites":39}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bites"],{"\uFDD0'name":"Silverware","\uFDD0'bites":8})])});
var slices__50155 = cljs.core.filter.call(null,(function (p1__50138_SHARP_){
return cljs.core._EQ_.call(null,"\uFDD0'depth".call(null,"\uFDD0'partition".call(null,p1__50138_SHARP_)),1);
}),c2.layout.partition.partition.call(null,data__50154,"\uFDD0'value","\uFDD0'bites","\uFDD0'size",cljs.core.PersistentVector.fromArray([c2.maths.Tau,1])));
var radius__50156 = 170;

return cljs.core.PersistentVector.fromArray(["\uFDD0'svg",cljs.core.PersistentVector.fromArray(["\uFDD0'g",cljs.core.ObjMap.fromObject(["\uFDD0'transform"],{"\uFDD0'transform":"translate(200,200)"}),session.client.svgtest.unify.call(null,slices__50155,(function (p__50157){
var map__50158__50160 = p__50157;
var map__50158__50161 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__50158__50160))?cljs.core.apply.call(null,cljs.core.hash_map,map__50158__50160):map__50158__50160);
var name__50162 = cljs.core.get.call(null,map__50158__50161,"\uFDD0'name");
var bites__50163 = cljs.core.get.call(null,map__50158__50161,"\uFDD0'bites");
var map__50159__50164 = cljs.core.get.call(null,map__50158__50161,"\uFDD0'partition");
var map__50159__50165 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__50159__50164))?cljs.core.apply.call(null,cljs.core.hash_map,map__50159__50164):map__50159__50164);
var dx__50166 = cljs.core.get.call(null,map__50159__50165,"\uFDD0'dx");
var x__50167 = cljs.core.get.call(null,map__50159__50165,"\uFDD0'x");

return cljs.core.PersistentVector.fromArray(["\uFDD0'g.slice",cljs.core.PersistentVector.fromArray(["\uFDD0'path",cljs.core.ObjMap.fromObject(["\uFDD0'd","\uFDD0'style"],{"\uFDD0'd":c2.svg.arc.call(null,"\uFDD0'outer-radius",radius__50156,"\uFDD0'start-angle",x__50167,"\uFDD0'end-angle",(x__50167 + dx__50166)),"\uFDD0'style":session.client.svgtest.style.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'stroke","\uFDD0'fill"],{"\uFDD0'stroke":"black","\uFDD0'fill":session.client.svgtest.case$.call(null,name__50162,"Eaten","yellow","Not Eaten","tan","Silverware","silver")}))})]),(function (){var label_angle__50168 = (x__50167 + (dx__50166 / 2));

return cljs.core.PersistentVector.fromArray(["\uFDD0'text",cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'text-anchor"],{"\uFDD0'x":((0.5 * radius__50156) * c2.maths.cos.call(null,label_angle__50168)),"\uFDD0'y":((0.5 * radius__50156) * c2.maths.sin.call(null,label_angle__50168)),"\uFDD0'text-anchor":(function (){var pred__50169__50172 = cljs.core._GT_;
var expr__50170__50173 = (label_angle__50168 % c2.maths.Tau);

if(cljs.core.truth_(pred__50169__50172.call(null,(c2.maths.Tau * 0.25),expr__50170__50173)))
{return "start";
} else
{if(cljs.core.truth_(pred__50169__50172.call(null,(c2.maths.Tau * 0.75),expr__50170__50173)))
{return "end";
} else
{if(cljs.core.truth_(pred__50169__50172.call(null,c2.maths.Tau,expr__50170__50173)))
{return "start";
} else
{throw (new Error(cljs.core.str.call(null,"No matching clause: ",expr__50170__50173)));
}
}
}
})()}),cljs.core.str.call(null,name__50162)]);
})()]);
}))])]);
})();
var data__50174 = cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'children"],{"\uFDD0'name":"Delicious Pie","\uFDD0'children":cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bites"],{"\uFDD0'name":"Eaten","\uFDD0'bites":11}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bites"],{"\uFDD0'name":"Not Eaten","\uFDD0'bites":39}),cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'bites"],{"\uFDD0'name":"Silverware","\uFDD0'bites":8})])});
var slices__50175 = cljs.core.filter.call(null,(function (p1__50153_SHARP_){
return cljs.core._EQ_.call(null,"\uFDD0'depth".call(null,"\uFDD0'partition".call(null,p1__50153_SHARP_)),1);
}),c2.layout.partition.partition.call(null,data__50174,"\uFDD0'value","\uFDD0'bites","\uFDD0'size",cljs.core.PersistentVector.fromArray([c2.maths.Tau,1])));
var radius__50176 = 170;

cljs.core.PersistentVector.fromArray(["\uFDD0'svg",cljs.core.PersistentVector.fromArray(["\uFDD0'g",cljs.core.ObjMap.fromObject(["\uFDD0'transform"],{"\uFDD0'transform":"translate(200,200)"}),cljs.core.vector.call(null,slices__50175,(function (p__50177){
var map__50178__50180 = p__50177;
var map__50178__50181 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__50178__50180))?cljs.core.apply.call(null,cljs.core.hash_map,map__50178__50180):map__50178__50180);
var name__50182 = cljs.core.get.call(null,map__50178__50181,"\uFDD0'name");
var bites__50183 = cljs.core.get.call(null,map__50178__50181,"\uFDD0'bites");
var map__50179__50184 = cljs.core.get.call(null,map__50178__50181,"\uFDD0'partition");
var map__50179__50185 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__50179__50184))?cljs.core.apply.call(null,cljs.core.hash_map,map__50179__50184):map__50179__50184);
var dx__50186 = cljs.core.get.call(null,map__50179__50185,"\uFDD0'dx");
var x__50187 = cljs.core.get.call(null,map__50179__50185,"\uFDD0'x");

return cljs.core.PersistentVector.fromArray(["\uFDD0'g.slice",cljs.core.PersistentVector.fromArray(["\uFDD0'path",cljs.core.ObjMap.fromObject(["\uFDD0'd","\uFDD0'style"],{"\uFDD0'd":c2.svg.arc.call(null,"\uFDD0'outer-radius",radius__50176,"\uFDD0'start-angle",x__50187,"\uFDD0'end-angle",(x__50187 + dx__50186)),"\uFDD0'style":session.client.svgtest.style.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'stroke","\uFDD0'fill"],{"\uFDD0'stroke":"black","\uFDD0'fill":session.client.svgtest.case$.call(null,name__50182,"Eaten","yellow","Not Eaten","tan","Silverware","silver")}))})]),(function (){var label_angle__50188 = (x__50187 + (dx__50186 / 2));

return cljs.core.PersistentVector.fromArray(["\uFDD0'text",cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'text-anchor"],{"\uFDD0'x":((0.5 * radius__50176) * c2.maths.cos.call(null,label_angle__50188)),"\uFDD0'y":((0.5 * radius__50176) * c2.maths.sin.call(null,label_angle__50188)),"\uFDD0'text-anchor":(function (){var pred__50189__50192 = cljs.core._GT_;
var expr__50190__50193 = (label_angle__50188 % c2.maths.Tau);

if(cljs.core.truth_(pred__50189__50192.call(null,(c2.maths.Tau * 0.25),expr__50190__50193)))
{return "start";
} else
{if(cljs.core.truth_(pred__50189__50192.call(null,(c2.maths.Tau * 0.75),expr__50190__50193)))
{return "end";
} else
{if(cljs.core.truth_(pred__50189__50192.call(null,c2.maths.Tau,expr__50190__50193)))
{return "start";
} else
{throw (new Error(cljs.core.str.call(null,"No matching clause: ",expr__50190__50193)));
}
}
}
})()}),cljs.core.str.call(null,name__50182)]);
})()]);
}))])]);
