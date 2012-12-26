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
{var vec__13160__13161 = route;
var m__13162 = cljs.core.nth.call(null,vec__13160__13161,0,null);
var u__13163 = cljs.core.nth.call(null,vec__13160__13161,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__13162),u__13163], true);
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
var cur__13166 = fetch.util.clj__GT_js.call(null,d);
var query__13167 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__13166)));
return [cljs.core.str(query__13167)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__13169 = req.getResponseText();
return callback.call(null,data__13169);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__13170){
var vec__13181__13182 = p__13170;
var opts__13183 = cljs.core.nth.call(null,vec__13181__13182,0,null);
var req__13185 = (new goog.net.XhrIo());
var vec__13184__13186 = fetch.core.parse_route.call(null,route);
var method__13187 = cljs.core.nth.call(null,vec__13184__13186,0,null);
var uri__13188 = cljs.core.nth.call(null,vec__13184__13186,1,null);
var data__13189 = fetch.core.__GT_data.call(null,content);
var callback__13190 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__13190))
{goog.events.listen(req__13185,goog.net.EventType.COMPLETE,(function (){
return callback__13190.call(null,req__13185);
}));
} else
{}
return req__13185.send(uri__13188,method__13187,data__13189,(cljs.core.truth_(opts__13183)?fetch.util.clj__GT_js.call(null,opts__13183):null));
};
var xhr = function (route,content,callback,var_args){
var p__13170 = null;
if (goog.isDef(var_args)) {
  p__13170 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__13170);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__13191){
var route = cljs.core.first(arglist__13191);
var content = cljs.core.first(cljs.core.next(arglist__13191));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13191)));
var p__13170 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13191)));
return xhr__delegate(route, content, callback, p__13170);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
