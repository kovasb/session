goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__5351){
var vec__5352__5353 = p__5351;
var k__5354 = cljs.core.nth.call(null,vec__5352__5353,0,null);
var v__5355 = cljs.core.nth.call(null,vec__5352__5353,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__5354.toLowerCase()),v__5355]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__5386 = (function (this$){
if(cljs.core.truth_((function (){var and__3822__auto____5356 = this$;

if(cljs.core.truth_(and__3822__auto____5356))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____5356;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3824__auto____5357 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5357))
{return or__3824__auto____5357;
} else
{var or__3824__auto____5358 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____5358))
{return or__3824__auto____5358;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__5387 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3822__auto____5359 = this$;

if(cljs.core.truth_(and__3822__auto____5359))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____5359;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3824__auto____5360 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5360))
{return or__3824__auto____5360;
} else
{var or__3824__auto____5361 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____5361))
{return or__3824__auto____5361;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__5388 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3822__auto____5362 = this$;

if(cljs.core.truth_(and__3822__auto____5362))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____5362;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3824__auto____5363 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5363))
{return or__3824__auto____5363;
} else
{var or__3824__auto____5364 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____5364))
{return or__3824__auto____5364;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__5389 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3822__auto____5365 = this$;

if(cljs.core.truth_(and__3822__auto____5365))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____5365;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3824__auto____5366 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5366))
{return or__3824__auto____5366;
} else
{var or__3824__auto____5367 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____5367))
{return or__3824__auto____5367;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case  1 :
return connect__5386.call(this,this$);
case  2 :
return connect__5387.call(this,this$,opt1);
case  3 :
return connect__5388.call(this,this$,opt1,opt2);
case  4 :
return connect__5389.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__5391 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3822__auto____5368 = this$;

if(cljs.core.truth_(and__3822__auto____5368))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____5368;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3824__auto____5369 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5369))
{return or__3824__auto____5369;
} else
{var or__3824__auto____5370 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____5370))
{return or__3824__auto____5370;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__5392 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3822__auto____5371 = this$;

if(cljs.core.truth_(and__3822__auto____5371))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____5371;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3824__auto____5372 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5372))
{return or__3824__auto____5372;
} else
{var or__3824__auto____5373 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____5373))
{return or__3824__auto____5373;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__5393 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3822__auto____5374 = this$;

if(cljs.core.truth_(and__3822__auto____5374))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____5374;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3824__auto____5375 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5375))
{return or__3824__auto____5375;
} else
{var or__3824__auto____5376 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____5376))
{return or__3824__auto____5376;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__5394 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3822__auto____5377 = this$;

if(cljs.core.truth_(and__3822__auto____5377))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____5377;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3824__auto____5378 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5378))
{return or__3824__auto____5378;
} else
{var or__3824__auto____5379 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____5379))
{return or__3824__auto____5379;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__5395 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3822__auto____5380 = this$;

if(cljs.core.truth_(and__3822__auto____5380))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____5380;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3824__auto____5381 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5381))
{return or__3824__auto____5381;
} else
{var or__3824__auto____5382 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____5382))
{return or__3824__auto____5382;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case  2 :
return transmit__5391.call(this,this$,opt);
case  3 :
return transmit__5392.call(this,this$,opt,opt2);
case  4 :
return transmit__5393.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__5394.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__5395.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3822__auto____5383 = this$;

if(cljs.core.truth_(and__3822__auto____5383))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3822__auto____5383;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3824__auto____5384 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5384))
{return or__3824__auto____5384;
} else
{var or__3824__auto____5385 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3824__auto____5385))
{return or__3824__auto____5385;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__5397){
var vec__5398__5399 = p__5397;
var k__5400 = cljs.core.nth.call(null,vec__5398__5399,0,null);
var v__5401 = cljs.core.nth.call(null,vec__5398__5399,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__5400.toLowerCase()),v__5401]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__5402 = null;
var G__5402__5403 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__5402__5404 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__5402__5405 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__5402__5406 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__5402__5407 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__5402 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__5402__5403.call(this,this$,uri);
case  3 :
return G__5402__5404.call(this,this$,uri,method);
case  4 :
return G__5402__5405.call(this,this$,uri,method,content);
case  5 :
return G__5402__5406.call(this,this$,uri,method,content,headers);
case  6 :
return G__5402__5407.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5402;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__5409){
var vec__5410__5411 = p__5409;
var k__5412 = cljs.core.nth.call(null,vec__5410__5411,0,null);
var v__5413 = cljs.core.nth.call(null,vec__5410__5411,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__5412.toLowerCase()),v__5413]);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__5420 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3822__auto____5414 = this$;

if(cljs.core.truth_(and__3822__auto____5414))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3822__auto____5414;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3824__auto____5415 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5415))
{return or__3824__auto____5415;
} else
{var or__3824__auto____5416 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3824__auto____5416))
{return or__3824__auto____5416;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__5421 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3822__auto____5417 = this$;

if(cljs.core.truth_(and__3822__auto____5417))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3822__auto____5417;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3824__auto____5418 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5418))
{return or__3824__auto____5418;
} else
{var or__3824__auto____5419 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3824__auto____5419))
{return or__3824__auto____5419;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return register_service__5420.call(this,this$,service_name,fn);
case  4 :
return register_service__5421.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__5423 = null;
var G__5423__5424 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__5423__5425 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__5423__5426 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__5423__5427 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__5423 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__5423__5424.call(this,this$);
case  2 :
return G__5423__5425.call(this,this$,on_connect_fn);
case  3 :
return G__5423__5426.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__5423__5427.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5423;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service = (function() {
var G__5429 = null;
var G__5429__5430 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__5429__5431 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__5429 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__5429__5430.call(this,this$,service_name,fn);
case  4 :
return G__5429__5431.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5429;
})()
;
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__5442 = (function (){
var temp__3974__auto____5433 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3974__auto____5433))
{var config__5434 = temp__3974__auto____5433;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__5434)));
} else
{return null;
}
});
var xpc_connection__5443 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__5435){
var vec__5436__5437 = p__5435;
var k__5438 = cljs.core.nth.call(null,vec__5436__5437,0,null);
var v__5439 = cljs.core.nth.call(null,vec__5436__5437,1,null);

var temp__3971__auto____5440 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__5438);

if(cljs.core.truth_(temp__3971__auto____5440))
{var field__5441 = temp__3971__auto____5440;

return cljs.core.assoc.call(null,sum,field__5441,v__5439);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__5442.call(this);
case  1 :
return xpc_connection__5443.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
