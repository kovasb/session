goog.provide('c2.layout.partition');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
c2.layout.partition.partition = (function() { 
var partition__delegate = function (root,p__7098){
var map__7099__7100 = p__7098;
var map__7099__7101 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7099__7100))?cljs.core.apply.call(null,cljs.core.hash_map,map__7099__7100):map__7099__7100);
var output_key__7102 = cljs.core.get.call(null,map__7099__7101,"\uFDD0'output-key","\uFDD0'partition");
var size__7103 = cljs.core.get.call(null,map__7099__7101,"\uFDD0'size",cljs.core.PersistentVector.fromArray([1,1]));
var value__7104 = cljs.core.get.call(null,map__7099__7101,"\uFDD0'value","\uFDD0'value");
var children__7105 = cljs.core.get.call(null,map__7099__7101,"\uFDD0'children","\uFDD0'children");
var sort__7106 = cljs.core.get.call(null,map__7099__7101,"\uFDD0'sort",null);

c2.layout.partition.depth = (function depth(node){
return ((function (){var temp__3971__auto____7107 = children__7105.call(null,node);

if(cljs.core.truth_(temp__3971__auto____7107))
{var cs__7108 = temp__3971__auto____7107;

return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,depth,cs__7108));
} else
{return 0;
}
})() + 1);
});
c2.layout.partition.node_value = (function node_value(node){
var temp__3971__auto____7109 = children__7105.call(null,node);

if(cljs.core.truth_(temp__3971__auto____7109))
{var cs__7110 = temp__3971__auto____7109;

return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,node_value,cs__7110));
} else
{return value__7104.call(null,node);
}
});
c2.layout.partition.position = (function position(node,depth,x,p__7111){
var vec__7112__7113 = p__7111;
var dx__7114 = cljs.core.nth.call(null,vec__7112__7113,0,null);
var dy__7115 = cljs.core.nth.call(null,vec__7112__7113,1,null);

return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.assoc.call(null,node,output_key__7102,cljs.core.merge.call(null,output_key__7102.call(null,node),cljs.core.ObjMap.fromObject(["\uFDD0'depth","\uFDD0'value","\uFDD0'x","\uFDD0'y","\uFDD0'dx","\uFDD0'dy"],{"\uFDD0'depth":depth,"\uFDD0'value":c2.layout.partition.node_value.call(null,node),"\uFDD0'x":x,"\uFDD0'y":(depth * dy__7115),"\uFDD0'dx":dx__7114,"\uFDD0'dy":dy__7115})))]),(function (){var unit_cdx__7116 = (dx__7114 / c2.layout.partition.node_value.call(null,node));
var cs__7117 = children__7105.call(null,node);

return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (child,cx){
return position.call(null,child,(depth + 1),cx,cljs.core.PersistentVector.fromArray([(unit_cdx__7116 * c2.layout.partition.node_value.call(null,child)),dy__7115]));
}),cs__7117,cljs.core.reductions.call(null,(function (cx,child){
return (cx + (unit_cdx__7116 * c2.layout.partition.node_value.call(null,child)));
}),x,cs__7117)));
})());
});
return c2.layout.partition.position.call(null,root,0,0,cljs.core.PersistentVector.fromArray([cljs.core.first.call(null,size__7103),(cljs.core.second.call(null,size__7103) / c2.layout.partition.depth.call(null,root))]));
};
var partition = function (root,var_args){
var p__7098 = null;
if (goog.isDef(var_args)) {
  p__7098 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return partition__delegate.call(this, root, p__7098);
};
partition.cljs$lang$maxFixedArity = 1;
partition.cljs$lang$applyTo = (function (arglist__7118){
var root = cljs.core.first(arglist__7118);
var p__7098 = cljs.core.rest(arglist__7118);
return partition__delegate.call(this, root, p__7098);
});
return partition;
})()
;
