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
{var vec__13213__13214 = route;
var m__13215 = cljs.core.nth.call(null,vec__13213__13214,0,null);
var u__13216 = cljs.core.nth.call(null,vec__13213__13214,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__13215),u__13216], true);
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
var cur__13219 = fetch.util.clj__GT_js.call(null,d);
var query__13220 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__13219)));
return [cljs.core.str(query__13220)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__13222 = req.getResponseText();
return callback.call(null,data__13222);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__13223){
var vec__13234__13235 = p__13223;
var opts__13236 = cljs.core.nth.call(null,vec__13234__13235,0,null);
var req__13238 = (new goog.net.XhrIo());
var vec__13237__13239 = fetch.core.parse_route.call(null,route);
var method__13240 = cljs.core.nth.call(null,vec__13237__13239,0,null);
var uri__13241 = cljs.core.nth.call(null,vec__13237__13239,1,null);
var data__13242 = fetch.core.__GT_data.call(null,content);
var callback__13243 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__13243))
{goog.events.listen(req__13238,goog.net.EventType.COMPLETE,(function (){
return callback__13243.call(null,req__13238);
}));
} else
{}
return req__13238.send(uri__13241,method__13240,data__13242,(cljs.core.truth_(opts__13236)?fetch.util.clj__GT_js.call(null,opts__13236):null));
};
var xhr = function (route,content,callback,var_args){
var p__13223 = null;
if (goog.isDef(var_args)) {
  p__13223 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__13223);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__13244){
var route = cljs.core.first(arglist__13244);
var content = cljs.core.first(cljs.core.next(arglist__13244));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13244)));
var p__13223 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13244)));
return xhr__delegate(route, content, callback, p__13223);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
