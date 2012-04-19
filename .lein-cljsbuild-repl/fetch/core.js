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
{return cljs.core.Vector.fromArray(["GET",route]);
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,route)))
{var vec__3212__3213 = route;
var m__3214 = cljs.core.nth.call(null,vec__3212__3213,0,null);
var u__3215 = cljs.core.nth.call(null,vec__3212__3213,1,null);

return cljs.core.Vector.fromArray([fetch.core.__GT_method.call(null,m__3214),u__3215]);
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.Vector.fromArray(["GET",route]);
} else
{return null;
}
}
}
});
fetch.core.__GT_data = (function __GT_data(d){
var cur__3216 = fetch.util.clj__GT_js.call(null,d);
var query__3217 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__3216)));

return cljs.core.str.call(null,query__3217);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__3218 = req.getResponseText();

return callback.call(null,data__3218);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__3219){
var vec__3220__3221 = p__3219;
var opts__3222 = cljs.core.nth.call(null,vec__3220__3221,0,null);

var req__3224 = (new goog.net.XhrIo());
var vec__3223__3225 = fetch.core.parse_route.call(null,route);
var method__3226 = cljs.core.nth.call(null,vec__3223__3225,0,null);
var uri__3227 = cljs.core.nth.call(null,vec__3223__3225,1,null);
var data__3228 = fetch.core.__GT_data.call(null,content);
var callback__3229 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__3229))
{goog.events.listen.call(null,req__3224,goog.net.EventType.COMPLETE,(function (){
return callback__3229.call(null,req__3224);
}));
} else
{}
return req__3224.send(uri__3227,method__3226,data__3228,(cljs.core.truth_(opts__3222)?fetch.util.clj__GT_js.call(null,opts__3222):null));
};
var xhr = function (route,content,callback,var_args){
var p__3219 = null;
if (goog.isDef(var_args)) {
  p__3219 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__3219);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__3230){
var route = cljs.core.first(arglist__3230);
var content = cljs.core.first(cljs.core.next(arglist__3230));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3230)));
var p__3219 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3230)));
return xhr__delegate.call(this, route, content, callback, p__3219);
});
return xhr;
})()
;
