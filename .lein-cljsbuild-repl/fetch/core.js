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
{var vec__3431__3432 = route;
var m__3433 = cljs.core.nth.call(null,vec__3431__3432,0,null);
var u__3434 = cljs.core.nth.call(null,vec__3431__3432,1,null);

return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__3433),u__3434]);
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
var cur__3435 = fetch.util.clj__GT_js.call(null,d);
var query__3436 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__3435)));

return cljs.core.str.call(null,query__3436);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__3437 = req.getResponseText();

return callback.call(null,data__3437);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__3438){
var vec__3439__3440 = p__3438;
var opts__3441 = cljs.core.nth.call(null,vec__3439__3440,0,null);

var req__3443 = (new goog.net.XhrIo());
var vec__3442__3444 = fetch.core.parse_route.call(null,route);
var method__3445 = cljs.core.nth.call(null,vec__3442__3444,0,null);
var uri__3446 = cljs.core.nth.call(null,vec__3442__3444,1,null);
var data__3447 = fetch.core.__GT_data.call(null,content);
var callback__3448 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__3448))
{goog.events.listen.call(null,req__3443,goog.net.EventType.COMPLETE,(function (){
return callback__3448.call(null,req__3443);
}));
} else
{}
return req__3443.send(uri__3446,method__3445,data__3447,(cljs.core.truth_(opts__3441)?fetch.util.clj__GT_js.call(null,opts__3441):null));
};
var xhr = function (route,content,callback,var_args){
var p__3438 = null;
if (goog.isDef(var_args)) {
  p__3438 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__3438);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__3449){
var route = cljs.core.first(arglist__3449);
var content = cljs.core.first(cljs.core.next(arglist__3449));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3449)));
var p__3438 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3449)));
return xhr__delegate.call(this, route, content, callback, p__3438);
});
return xhr;
})()
;
