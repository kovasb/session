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
{var vec__13209__13210 = route;
var m__13211 = cljs.core.nth.call(null,vec__13209__13210,0,null);
var u__13212 = cljs.core.nth.call(null,vec__13209__13210,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__13211),u__13212], true);
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
var cur__13215 = fetch.util.clj__GT_js.call(null,d);
var query__13216 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__13215)));
return [cljs.core.str(query__13216)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__13218 = req.getResponseText();
return callback.call(null,data__13218);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__13219){
var vec__13230__13231 = p__13219;
var opts__13232 = cljs.core.nth.call(null,vec__13230__13231,0,null);
var req__13234 = (new goog.net.XhrIo());
var vec__13233__13235 = fetch.core.parse_route.call(null,route);
var method__13236 = cljs.core.nth.call(null,vec__13233__13235,0,null);
var uri__13237 = cljs.core.nth.call(null,vec__13233__13235,1,null);
var data__13238 = fetch.core.__GT_data.call(null,content);
var callback__13239 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__13239))
{goog.events.listen(req__13234,goog.net.EventType.COMPLETE,(function (){
return callback__13239.call(null,req__13234);
}));
} else
{}
return req__13234.send(uri__13237,method__13236,data__13238,(cljs.core.truth_(opts__13232)?fetch.util.clj__GT_js.call(null,opts__13232):null));
};
var xhr = function (route,content,callback,var_args){
var p__13219 = null;
if (goog.isDef(var_args)) {
  p__13219 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__13219);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__13240){
var route = cljs.core.first(arglist__13240);
var content = cljs.core.first(cljs.core.next(arglist__13240));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13240)));
var p__13219 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13240)));
return xhr__delegate(route, content, callback, p__13219);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
