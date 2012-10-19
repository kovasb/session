goog.provide('fetch.core');
goog.require('cljs.core');
goog.require('goog.structs');
goog.require('goog.Uri.QueryData');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('fetch.util');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
fetch.core.__GT_method = (function __GT_method(m){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,m));
});
fetch.core.parse_route = (function parse_route(route){
if(cljs.core.string_QMARK_.call(null,route))
{return cljs.core.PersistentVector.fromArray(["GET",route], true);
} else
{if(cljs.core.vector_QMARK_.call(null,route))
{var vec__11563__11564 = route;
var m__11565 = cljs.core.nth.call(null,vec__11563__11564,0,null);
var u__11566 = cljs.core.nth.call(null,vec__11563__11564,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__11565),u__11566], true);
} else
{if("\uFDD0'else")
{return cljs.core.PersistentVector.fromArray(["GET",route], true);
} else
{return null;
}
}
}
});
fetch.core.__GT_data = (function __GT_data(d){
var cur__11569 = fetch.util.clj__GT_js.call(null,d);
var query__11570 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__11569)));
return [cljs.core.str(query__11570)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__11572 = req.getResponseText();
return callback.call(null,data__11572);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__11573){
var vec__11584__11585 = p__11573;
var opts__11586 = cljs.core.nth.call(null,vec__11584__11585,0,null);
var req__11588 = (new goog.net.XhrIo());
var vec__11587__11589 = fetch.core.parse_route.call(null,route);
var method__11590 = cljs.core.nth.call(null,vec__11587__11589,0,null);
var uri__11591 = cljs.core.nth.call(null,vec__11587__11589,1,null);
var data__11592 = fetch.core.__GT_data.call(null,content);
var callback__11593 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__11593))
{goog.events.listen(req__11588,goog.net.EventType.COMPLETE,(function (){
return callback__11593.call(null,req__11588);
}));
} else
{}
return req__11588.send(uri__11591,method__11590,data__11592,(cljs.core.truth_(opts__11586)?fetch.util.clj__GT_js.call(null,opts__11586):null));
};
var xhr = function (route,content,callback,var_args){
var p__11573 = null;
if (goog.isDef(var_args)) {
  p__11573 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__11573);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__11594){
var route = cljs.core.first(arglist__11594);
var content = cljs.core.first(cljs.core.next(arglist__11594));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11594)));
var p__11573 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11594)));
return xhr__delegate(route, content, callback, p__11573);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
