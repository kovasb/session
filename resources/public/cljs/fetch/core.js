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
{var vec__13226__13227 = route;
var m__13228 = cljs.core.nth.call(null,vec__13226__13227,0,null);
var u__13229 = cljs.core.nth.call(null,vec__13226__13227,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__13228),u__13229], true);
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
var cur__13232 = fetch.util.clj__GT_js.call(null,d);
var query__13233 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__13232)));
return [cljs.core.str(query__13233)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__13235 = req.getResponseText();
return callback.call(null,data__13235);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__13236){
var vec__13247__13248 = p__13236;
var opts__13249 = cljs.core.nth.call(null,vec__13247__13248,0,null);
var req__13251 = (new goog.net.XhrIo());
var vec__13250__13252 = fetch.core.parse_route.call(null,route);
var method__13253 = cljs.core.nth.call(null,vec__13250__13252,0,null);
var uri__13254 = cljs.core.nth.call(null,vec__13250__13252,1,null);
var data__13255 = fetch.core.__GT_data.call(null,content);
var callback__13256 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__13256))
{goog.events.listen(req__13251,goog.net.EventType.COMPLETE,(function (){
return callback__13256.call(null,req__13251);
}));
} else
{}
return req__13251.send(uri__13254,method__13253,data__13255,(cljs.core.truth_(opts__13249)?fetch.util.clj__GT_js.call(null,opts__13249):null));
};
var xhr = function (route,content,callback,var_args){
var p__13236 = null;
if (goog.isDef(var_args)) {
  p__13236 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__13236);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__13257){
var route = cljs.core.first(arglist__13257);
var content = cljs.core.first(cljs.core.next(arglist__13257));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13257)));
var p__13236 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13257)));
return xhr__delegate(route, content, callback, p__13236);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
