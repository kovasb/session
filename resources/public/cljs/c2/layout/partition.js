goog.provide('c2.layout.partition');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
c2.layout.partition.partition = (function() { 
var partition__delegate = function (root,p__52427){
var map__52428__52429 = p__52427;
var map__52428__52430 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__52428__52429))?cljs.core.apply.call(null,cljs.core.hash_map,map__52428__52429):map__52428__52429);
var output_key__52431 = cljs.core.get.call(null,map__52428__52430,"\uFDD0'output-key","\uFDD0'partition");
var size__52432 = cljs.core.get.call(null,map__52428__52430,"\uFDD0'size",cljs.core.PersistentVector.fromArray([1,1]));
var value__52433 = cljs.core.get.call(null,map__52428__52430,"\uFDD0'value","\uFDD0'value");
var children__52434 = cljs.core.get.call(null,map__52428__52430,"\uFDD0'children","\uFDD0'children");
var sort__52435 = cljs.core.get.call(null,map__52428__52430,"\uFDD0'sort",null);

c2.layout.partition.depth = (function depth(node){
return ((function (){var temp__3971__auto____52436 = children__52434.call(null,node);

if(cljs.core.truth_(temp__3971__auto____52436))
{var cs__52437 = temp__3971__auto____52436;

return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,depth,cs__52437));
} else
{return 0;
}
})() + 1);
});
c2.layout.partition.node_value = (function node_value(node){
var temp__3971__auto____52438 = children__52434.call(null,node);

if(cljs.core.truth_(temp__3971__auto____52438))
{var cs__52439 = temp__3971__auto____52438;

return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,node_value,cs__52439));
} else
{return value__52433.call(null,node);
}
});
c2.layout.partition.position = (function position(node,depth,x,p__52440){
var vec__52441__52442 = p__52440;
var dx__52443 = cljs.core.nth.call(null,vec__52441__52442,0,null);
var dy__52444 = cljs.core.nth.call(null,vec__52441__52442,1,null);

return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.assoc.call(null,node,output_key__52431,cljs.core.merge.call(null,output_key__52431.call(null,node),cljs.core.ObjMap.fromObject(["\uFDD0'depth","\uFDD0'value","\uFDD0'x","\uFDD0'y","\uFDD0'dx","\uFDD0'dy"],{"\uFDD0'depth":depth,"\uFDD0'value":c2.layout.partition.node_value.call(null,node),"\uFDD0'x":x,"\uFDD0'y":(depth * dy__52444),"\uFDD0'dx":dx__52443,"\uFDD0'dy":dy__52444})))]),(function (){var unit_cdx__52445 = (dx__52443 / c2.layout.partition.node_value.call(null,node));
var cs__52446 = children__52434.call(null,node);

return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (child,cx){
return position.call(null,child,(depth + 1),cx,cljs.core.PersistentVector.fromArray([(unit_cdx__52445 * c2.layout.partition.node_value.call(null,child)),dy__52444]));
}),cs__52446,cljs.core.reductions.call(null,(function (cx,child){
return (cx + (unit_cdx__52445 * c2.layout.partition.node_value.call(null,child)));
}),x,cs__52446)));
})());
});
return c2.layout.partition.position.call(null,root,0,0,cljs.core.PersistentVector.fromArray([cljs.core.first.call(null,size__52432),(cljs.core.second.call(null,size__52432) / c2.layout.partition.depth.call(null,root))]));
};
var partition = function (root,var_args){
var p__52427 = null;
if (goog.isDef(var_args)) {
  p__52427 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return partition__delegate.call(this, root, p__52427);
};
partition.cljs$lang$maxFixedArity = 1;
partition.cljs$lang$applyTo = (function (arglist__52447){
var root = cljs.core.first(arglist__52447);
var p__52427 = cljs.core.rest(arglist__52447);
return partition__delegate.call(this, root, p__52427);
});
return partition;
})()
;
