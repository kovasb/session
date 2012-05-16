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
{var vec__32294__32295 = route;
var m__32296 = cljs.core.nth.call(null,vec__32294__32295,0,null);
var u__32297 = cljs.core.nth.call(null,vec__32294__32295,1,null);

return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__32296),u__32297]);
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
var cur__32298 = fetch.util.clj__GT_js.call(null,d);
var query__32299 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__32298)));

return cljs.core.str.call(null,query__32299);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__32300 = req.getResponseText();

return callback.call(null,data__32300);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__32301){
var vec__32302__32303 = p__32301;
var opts__32304 = cljs.core.nth.call(null,vec__32302__32303,0,null);

var req__32306 = (new goog.net.XhrIo());
var vec__32305__32307 = fetch.core.parse_route.call(null,route);
var method__32308 = cljs.core.nth.call(null,vec__32305__32307,0,null);
var uri__32309 = cljs.core.nth.call(null,vec__32305__32307,1,null);
var data__32310 = fetch.core.__GT_data.call(null,content);
var callback__32311 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__32311))
{goog.events.listen.call(null,req__32306,goog.net.EventType.COMPLETE,(function (){
return callback__32311.call(null,req__32306);
}));
} else
{}
return req__32306.send(uri__32309,method__32308,data__32310,(cljs.core.truth_(opts__32304)?fetch.util.clj__GT_js.call(null,opts__32304):null));
};
var xhr = function (route,content,callback,var_args){
var p__32301 = null;
if (goog.isDef(var_args)) {
  p__32301 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__32301);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__32312){
var route = cljs.core.first(arglist__32312);
var content = cljs.core.first(cljs.core.next(arglist__32312));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__32312)));
var p__32301 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__32312)));
return xhr__delegate.call(this, route, content, callback, p__32301);
});
return xhr;
})()
;
