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
{var vec__13167__13168 = route;
var m__13169 = cljs.core.nth.call(null,vec__13167__13168,0,null);
var u__13170 = cljs.core.nth.call(null,vec__13167__13168,1,null);
return cljs.core.PersistentVector.fromArray([fetch.core.__GT_method.call(null,m__13169),u__13170], true);
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
var cur__13173 = fetch.util.clj__GT_js.call(null,d);
var query__13174 = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cur__13173)));
return [cljs.core.str(query__13174)].join('');
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__13176 = req.getResponseText();
return callback.call(null,data__13176);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__13177){
var vec__13188__13189 = p__13177;
var opts__13190 = cljs.core.nth.call(null,vec__13188__13189,0,null);
var req__13192 = (new goog.net.XhrIo());
var vec__13191__13193 = fetch.core.parse_route.call(null,route);
var method__13194 = cljs.core.nth.call(null,vec__13191__13193,0,null);
var uri__13195 = cljs.core.nth.call(null,vec__13191__13193,1,null);
var data__13196 = fetch.core.__GT_data.call(null,content);
var callback__13197 = fetch.core.__GT_callback.call(null,callback);
if(cljs.core.truth_(callback__13197))
{goog.events.listen(req__13192,goog.net.EventType.COMPLETE,(function (){
return callback__13197.call(null,req__13192);
}));
} else
{}
return req__13192.send(uri__13195,method__13194,data__13196,(cljs.core.truth_(opts__13190)?fetch.util.clj__GT_js.call(null,opts__13190):null));
};
var xhr = function (route,content,callback,var_args){
var p__13177 = null;
if (goog.isDef(var_args)) {
  p__13177 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__13177);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__13198){
var route = cljs.core.first(arglist__13198);
var content = cljs.core.first(cljs.core.next(arglist__13198));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13198)));
var p__13177 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13198)));
return xhr__delegate(route, content, callback, p__13177);
});
xhr.cljs$lang$arity$variadic = xhr__delegate;
return xhr;
})()
;
