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
{var vec__4119 = route;
var m = cljs.core.nth.call(null,vec__4119,0,null);
var u = cljs.core.nth.call(null,vec__4119,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m),u], true);
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
var cur = fetch.util.clj__GT_js.call(null,d);
var query = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur)));
return [cljs.core.str(query)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data = req.getResponseText();
return callback.call(null,data);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__4120){
var vec__4123 = p__4120;
var opts = cljs.core.nth.call(null,vec__4123,0,null);
var req = (new goog.net.XhrIo());
var vec__4124 = fetch.core.parse_route.call(null,route);
var method = cljs.core.nth.call(null,vec__4124,0,null);
var uri = cljs.core.nth.call(null,vec__4124,1,null);
var data = fetch.core.__GT_data.call(null,content);
var callback__$1 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__$1))
{goog.events.listen(req,goog.net.EventType.COMPLETE,(function (){
return callback__$1.call(null,req);
}));
} else
{}
return req.send(uri,method,data,(cljs.core.truth_(opts)?fetch.util.clj__GT_js.call(null,opts):null));
};
var xhr = function (route,content,callback,var_args){
var p__4120 = null;
if (goog.isDef(var_args)) {
  p__4120 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__4120);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__4125){
var route = cljs.core.first(arglist__4125);
var content = cljs.core.first(cljs.core.next(arglist__4125));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4125)));
var p__4120 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4125)));
return xhr__delegate(route, content, callback, p__4120);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
