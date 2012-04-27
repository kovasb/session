goog.provide('fetch.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('clojure.string');
goog.require('fetch.util');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
fetch.core.__GT_method = (function __GT_method(m){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,m));
});
fetch.core.parse_route = (function parse_route(route){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,route)))
{return cljs.core.PersistentVector.fromArray(["GET",route]);
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,route)))
{var vec__5468__5469 = route;
var m__5470 = cljs.core.nth.call(null,vec__5468__5469,0,null);
var u__5471 = cljs.core.nth.call(null,vec__5468__5469,1,null);

return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__5470),u__5471]);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.PersistentVector.fromArray(["GET",route]);
} else
{return null;
}
}
}
});
fetch.core.__GT_data = (function __GT_data(d){
var cur__5472 = fetch.util.clj__GT_js.call(null,d);
var query__5473 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__5472)));

return cljs.core.str.call(null,query__5473);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__5474 = req.getResponseText();

return callback.call(null,data__5474);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__5475){
var vec__5476__5477 = p__5475;
var opts__5478 = cljs.core.nth.call(null,vec__5476__5477,0,null);

var req__5480 = (new goog.net.XhrIo());
var vec__5479__5481 = fetch.core.parse_route.call(null,route);
var method__5482 = cljs.core.nth.call(null,vec__5479__5481,0,null);
var uri__5483 = cljs.core.nth.call(null,vec__5479__5481,1,null);
var data__5484 = fetch.core.__GT_data.call(null,content);
var callback__5485 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__5485))
{goog.events.listen.call(null,req__5480,goog.net.EventType.COMPLETE,(function (){
return callback__5485.call(null,req__5480);
}));
} else
{}
return req__5480.send(uri__5483,method__5482,data__5484,(cljs.core.truth_(opts__5478)?fetch.util.clj__GT_js.call(null,opts__5478):null));
};
var xhr = function (route,content,callback,var_args){
var p__5475 = null;
if (goog.isDef(var_args)) {
  p__5475 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__5475);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__5486){
var route = cljs.core.first(arglist__5486);
var content = cljs.core.first(cljs.core.next(arglist__5486));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5486)));
var p__5475 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5486)));
return xhr__delegate.call(this, route, content, callback, p__5475);
});
return xhr;
})()
;
