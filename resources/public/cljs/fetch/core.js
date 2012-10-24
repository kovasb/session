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
{var vec__13212__13213 = route;
var m__13214 = cljs.core.nth.call(null,vec__13212__13213,0,null);
var u__13215 = cljs.core.nth.call(null,vec__13212__13213,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__13214),u__13215], true);
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
var cur__13218 = fetch.util.clj__GT_js.call(null,d);
var query__13219 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__13218)));
return [cljs.core.str(query__13219)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__13221 = req.getResponseText();
return callback.call(null,data__13221);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__13222){
var vec__13233__13234 = p__13222;
var opts__13235 = cljs.core.nth.call(null,vec__13233__13234,0,null);
var req__13237 = (new goog.net.XhrIo());
var vec__13236__13238 = fetch.core.parse_route.call(null,route);
var method__13239 = cljs.core.nth.call(null,vec__13236__13238,0,null);
var uri__13240 = cljs.core.nth.call(null,vec__13236__13238,1,null);
var data__13241 = fetch.core.__GT_data.call(null,content);
var callback__13242 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__13242))
{goog.events.listen(req__13237,goog.net.EventType.COMPLETE,(function (){
return callback__13242.call(null,req__13237);
}));
} else
{}
return req__13237.send(uri__13240,method__13239,data__13241,(cljs.core.truth_(opts__13235)?fetch.util.clj__GT_js.call(null,opts__13235):null));
};
var xhr = function (route,content,callback,var_args){
var p__13222 = null;
if (goog.isDef(var_args)) {
  p__13222 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__13222);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__13243){
var route = cljs.core.first(arglist__13243);
var content = cljs.core.first(cljs.core.next(arglist__13243));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13243)));
var p__13222 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13243)));
return xhr__delegate(route, content, callback, p__13222);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
