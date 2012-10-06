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
{var vec__13406__13407 = route;
var m__13408 = cljs.core.nth.call(null,vec__13406__13407,0,null);
var u__13409 = cljs.core.nth.call(null,vec__13406__13407,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__13408),u__13409], true);
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
var cur__13412 = fetch.util.clj__GT_js.call(null,d);
var query__13413 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__13412)));
return [cljs.core.str(query__13413)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__13415 = req.getResponseText();
return callback.call(null,data__13415);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__13416){
var vec__13427__13428 = p__13416;
var opts__13429 = cljs.core.nth.call(null,vec__13427__13428,0,null);
var req__13431 = (new goog.net.XhrIo());
var vec__13430__13432 = fetch.core.parse_route.call(null,route);
var method__13433 = cljs.core.nth.call(null,vec__13430__13432,0,null);
var uri__13434 = cljs.core.nth.call(null,vec__13430__13432,1,null);
var data__13435 = fetch.core.__GT_data.call(null,content);
var callback__13436 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__13436))
{goog.events.listen(req__13431,goog.net.EventType.COMPLETE,(function (){
return callback__13436.call(null,req__13431);
}));
} else
{}
return req__13431.send(uri__13434,method__13433,data__13435,(cljs.core.truth_(opts__13429)?fetch.util.clj__GT_js.call(null,opts__13429):null));
};
var xhr = function (route,content,callback,var_args){
var p__13416 = null;
if (goog.isDef(var_args)) {
  p__13416 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__13416);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__13437){
var route = cljs.core.first(arglist__13437);
var content = cljs.core.first(cljs.core.next(arglist__13437));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13437)));
var p__13416 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13437)));
return xhr__delegate(route, content, callback, p__13416);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
