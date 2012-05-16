goog.provide('c2.layout.partition');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
c2.layout.partition.partition = (function() { 
var partition__delegate = function (root,p__32523){
var map__32524__32525 = p__32523;
var map__32524__32526 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__32524__32525))?cljs.core.apply.call(null,cljs.core.hash_map,map__32524__32525):map__32524__32525);
var output_key__32527 = cljs.core.get.call(null,map__32524__32526,"\uFDD0'output-key","\uFDD0'partition");
var size__32528 = cljs.core.get.call(null,map__32524__32526,"\uFDD0'size",cljs.core.PersistentVector.fromArray([1,1]));
var value__32529 = cljs.core.get.call(null,map__32524__32526,"\uFDD0'value","\uFDD0'value");
var children__32530 = cljs.core.get.call(null,map__32524__32526,"\uFDD0'children","\uFDD0'children");
var sort__32531 = cljs.core.get.call(null,map__32524__32526,"\uFDD0'sort",null);

c2.layout.partition.depth = (function depth(node){
return ((function (){var temp__3971__auto____32532 = children__32530.call(null,node);

if(cljs.core.truth_(temp__3971__auto____32532))
{var cs__32533 = temp__3971__auto____32532;

return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,depth,cs__32533));
} else
{return 0;
}
})() + 1);
});
c2.layout.partition.node_value = (function node_value(node){
var temp__3971__auto____32534 = children__32530.call(null,node);

if(cljs.core.truth_(temp__3971__auto____32534))
{var cs__32535 = temp__3971__auto____32534;

return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,node_value,cs__32535));
} else
{return value__32529.call(null,node);
}
});
c2.layout.partition.position = (function position(node,depth,x,p__32536){
var vec__32537__32538 = p__32536;
var dx__32539 = cljs.core.nth.call(null,vec__32537__32538,0,null);
var dy__32540 = cljs.core.nth.call(null,vec__32537__32538,1,null);

return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.assoc.call(null,node,output_key__32527,cljs.core.merge.call(null,output_key__32527.call(null,node),cljs.core.ObjMap.fromObject(["\uFDD0'depth","\uFDD0'value","\uFDD0'x","\uFDD0'y","\uFDD0'dx","\uFDD0'dy"],{"\uFDD0'depth":depth,"\uFDD0'value":c2.layout.partition.node_value.call(null,node),"\uFDD0'x":x,"\uFDD0'y":(depth * dy__32540),"\uFDD0'dx":dx__32539,"\uFDD0'dy":dy__32540})))]),(function (){var unit_cdx__32541 = (dx__32539 / c2.layout.partition.node_value.call(null,node));
var cs__32542 = children__32530.call(null,node);

return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (child,cx){
return position.call(null,child,(depth + 1),cx,cljs.core.PersistentVector.fromArray([(unit_cdx__32541 * c2.layout.partition.node_value.call(null,child)),dy__32540]));
}),cs__32542,cljs.core.reductions.call(null,(function (cx,child){
return (cx + (unit_cdx__32541 * c2.layout.partition.node_value.call(null,child)));
}),x,cs__32542)));
})());
});
return c2.layout.partition.position.call(null,root,0,0,cljs.core.PersistentVector.fromArray([cljs.core.first.call(null,size__32528),(cljs.core.second.call(null,size__32528) / c2.layout.partition.depth.call(null,root))]));
};
var partition = function (root,var_args){
var p__32523 = null;
if (goog.isDef(var_args)) {
  p__32523 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return partition__delegate.call(this, root, p__32523);
};
partition.cljs$lang$maxFixedArity = 1;
partition.cljs$lang$applyTo = (function (arglist__32543){
var root = cljs.core.first(arglist__32543);
var p__32523 = cljs.core.rest(arglist__32543);
return partition__delegate.call(this, root, p__32523);
});
return partition;
})()
;
