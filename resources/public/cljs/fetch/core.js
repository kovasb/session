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
{var vec__11237__11238 = route;
var m__11239 = cljs.core.nth.call(null,vec__11237__11238,0,null);
var u__11240 = cljs.core.nth.call(null,vec__11237__11238,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__11239),u__11240], true);
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
var cur__11243 = fetch.util.clj__GT_js.call(null,d);
var query__11244 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__11243)));
return [cljs.core.str(query__11244)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__11246 = req.getResponseText();
return callback.call(null,data__11246);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__11247){
var vec__11258__11259 = p__11247;
var opts__11260 = cljs.core.nth.call(null,vec__11258__11259,0,null);
var req__11262 = (new goog.net.XhrIo());
var vec__11261__11263 = fetch.core.parse_route.call(null,route);
var method__11264 = cljs.core.nth.call(null,vec__11261__11263,0,null);
var uri__11265 = cljs.core.nth.call(null,vec__11261__11263,1,null);
var data__11266 = fetch.core.__GT_data.call(null,content);
var callback__11267 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__11267))
{goog.events.listen(req__11262,goog.net.EventType.COMPLETE,(function (){
return callback__11267.call(null,req__11262);
}));
} else
{}
return req__11262.send(uri__11265,method__11264,data__11266,(cljs.core.truth_(opts__11260)?fetch.util.clj__GT_js.call(null,opts__11260):null));
};
var xhr = function (route,content,callback,var_args){
var p__11247 = null;
if (goog.isDef(var_args)) {
  p__11247 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__11247);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__11268){
var route = cljs.core.first(arglist__11268);
var content = cljs.core.first(cljs.core.next(arglist__11268));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11268)));
var p__11247 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11268)));
return xhr__delegate(route, content, callback, p__11247);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
