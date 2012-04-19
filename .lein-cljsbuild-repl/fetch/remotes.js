goog.provide('fetch.remotes');
goog.require('cljs.core');
goog.require('fetch.core');
goog.require('cljs.reader');
fetch.remotes.remote_uri = "/_fetch";
fetch.remotes.remote_callback = (function remote_callback(remote,params,callback){
return fetch.core.xhr.call(null,cljs.core.Vector.fromArray(["﷐'post",fetch.remotes.remote_uri]),cljs.core.ObjMap.fromObject(["﷐'remote","﷐'params"],{"﷐'remote":remote,"﷐'params":cljs.core.pr_str.call(null,params)}),(cljs.core.truth_(callback)?(function (data){
var data__3211 = (cljs.core.truth_(cljs.core._EQ_.call(null,data,""))?"nil":data);

return callback.call(null,cljs.reader.read_string.call(null,data__3211));
}):null));
});
