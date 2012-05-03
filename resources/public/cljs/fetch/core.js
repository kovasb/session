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
{var vec__52198__52199 = route;
var m__52200 = cljs.core.nth.call(null,vec__52198__52199,0,null);
var u__52201 = cljs.core.nth.call(null,vec__52198__52199,1,null);

return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__52200),u__52201]);
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
var cur__52202 = fetch.util.clj__GT_js.call(null,d);
var query__52203 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__52202)));

return cljs.core.str.call(null,query__52203);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__52204 = req.getResponseText();

return callback.call(null,data__52204);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__52205){
var vec__52206__52207 = p__52205;
var opts__52208 = cljs.core.nth.call(null,vec__52206__52207,0,null);

var req__52210 = (new goog.net.XhrIo());
var vec__52209__52211 = fetch.core.parse_route.call(null,route);
var method__52212 = cljs.core.nth.call(null,vec__52209__52211,0,null);
var uri__52213 = cljs.core.nth.call(null,vec__52209__52211,1,null);
var data__52214 = fetch.core.__GT_data.call(null,content);
var callback__52215 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__52215))
{goog.events.listen.call(null,req__52210,goog.net.EventType.COMPLETE,(function (){
return callback__52215.call(null,req__52210);
}));
} else
{}
return req__52210.send(uri__52213,method__52212,data__52214,(cljs.core.truth_(opts__52208)?fetch.util.clj__GT_js.call(null,opts__52208):null));
};
var xhr = function (route,content,callback,var_args){
var p__52205 = null;
if (goog.isDef(var_args)) {
  p__52205 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__52205);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__52216){
var route = cljs.core.first(arglist__52216);
var content = cljs.core.first(cljs.core.next(arglist__52216));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__52216)));
var p__52205 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__52216)));
return xhr__delegate.call(this, route, content, callback, p__52205);
});
return xhr;
})()
;
