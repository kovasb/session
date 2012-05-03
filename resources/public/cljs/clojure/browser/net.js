goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__52081){
var vec__52082__52083 = p__52081;
var k__52084 = cljs.core.nth.call(null,vec__52082__52083,0,null);
var v__52085 = cljs.core.nth.call(null,vec__52082__52083,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__52084.toLowerCase()),v__52085]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__52116 = (function (this$){
if(cljs.core.truth_((function (){var and__3822__auto____52086 = this$;

if(cljs.core.truth_(and__3822__auto____52086))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____52086;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3824__auto____52087 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____52087))
{return or__3824__auto____52087;
} else
{var or__3824__auto____52088 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____52088))
{return or__3824__auto____52088;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__52117 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3822__auto____52089 = this$;

if(cljs.core.truth_(and__3822__auto____52089))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____52089;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3824__auto____52090 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____52090))
{return or__3824__auto____52090;
} else
{var or__3824__auto____52091 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____52091))
{return or__3824__auto____52091;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__52118 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3822__auto____52092 = this$;

if(cljs.core.truth_(and__3822__auto____52092))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____52092;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3824__auto____52093 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____52093))
{return or__3824__auto____52093;
} else
{var or__3824__auto____52094 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____52094))
{return or__3824__auto____52094;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__52119 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3822__auto____52095 = this$;

if(cljs.core.truth_(and__3822__auto____52095))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____52095;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3824__auto____52096 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____52096))
{return or__3824__auto____52096;
} else
{var or__3824__auto____52097 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____52097))
{return or__3824__auto____52097;
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
return connect__52116.call(this,this$);
case  2 :
return connect__52117.call(this,this$,opt1);
case  3 :
return connect__52118.call(this,this$,opt1,opt2);
case  4 :
return connect__52119.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__52121 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3822__auto____52098 = this$;

if(cljs.core.truth_(and__3822__auto____52098))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____52098;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3824__auto____52099 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____52099))
{return or__3824__auto____52099;
} else
{var or__3824__auto____52100 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____52100))
{return or__3824__auto____52100;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__52122 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3822__auto____52101 = this$;

if(cljs.core.truth_(and__3822__auto____52101))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____52101;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3824__auto____52102 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____52102))
{return or__3824__auto____52102;
} else
{var or__3824__auto____52103 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____52103))
{return or__3824__auto____52103;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__52123 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3822__auto____52104 = this$;

if(cljs.core.truth_(and__3822__auto____52104))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____52104;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3824__auto____52105 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____52105))
{return or__3824__auto____52105;
} else
{var or__3824__auto____52106 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____52106))
{return or__3824__auto____52106;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__52124 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3822__auto____52107 = this$;

if(cljs.core.truth_(and__3822__auto____52107))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____52107;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3824__auto____52108 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____52108))
{return or__3824__auto____52108;
} else
{var or__3824__auto____52109 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____52109))
{return or__3824__auto____52109;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__52125 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3822__auto____52110 = this$;

if(cljs.core.truth_(and__3822__auto____52110))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____52110;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3824__auto____52111 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____52111))
{return or__3824__auto____52111;
} else
{var or__3824__auto____52112 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____52112))
{return or__3824__auto____52112;
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
return transmit__52121.call(this,this$,opt);
case  3 :
return transmit__52122.call(this,this$,opt,opt2);
case  4 :
return transmit__52123.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__52124.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__52125.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3822__auto____52113 = this$;

if(cljs.core.truth_(and__3822__auto____52113))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3822__auto____52113;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3824__auto____52114 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____52114))
{return or__3824__auto____52114;
} else
{var or__3824__auto____52115 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3824__auto____52115))
{return or__3824__auto____52115;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__52127){
var vec__52128__52129 = p__52127;
var k__52130 = cljs.core.nth.call(null,vec__52128__52129,0,null);
var v__52131 = cljs.core.nth.call(null,vec__52128__52129,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__52130.toLowerCase()),v__52131]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__52132 = null;
var G__52132__52133 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__52132__52134 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__52132__52135 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__52132__52136 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__52132__52137 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__52132 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__52132__52133.call(this,this$,uri);
case  3 :
return G__52132__52134.call(this,this$,uri,method);
case  4 :
return G__52132__52135.call(this,this$,uri,method,content);
case  5 :
return G__52132__52136.call(this,this$,uri,method,content,headers);
case  6 :
return G__52132__52137.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__52132;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__52139){
var vec__52140__52141 = p__52139;
var k__52142 = cljs.core.nth.call(null,vec__52140__52141,0,null);
var v__52143 = cljs.core.nth.call(null,vec__52140__52141,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__52142.toLowerCase()),v__52143]);
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
var register_service__52150 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3822__auto____52144 = this$;

if(cljs.core.truth_(and__3822__auto____52144))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3822__auto____52144;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3824__auto____52145 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____52145))
{return or__3824__auto____52145;
} else
{var or__3824__auto____52146 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3824__auto____52146))
{return or__3824__auto____52146;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__52151 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3822__auto____52147 = this$;

if(cljs.core.truth_(and__3822__auto____52147))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3822__auto____52147;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3824__auto____52148 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____52148))
{return or__3824__auto____52148;
} else
{var or__3824__auto____52149 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3824__auto____52149))
{return or__3824__auto____52149;
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
return register_service__52150.call(this,this$,service_name,fn);
case  4 :
return register_service__52151.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__52153 = null;
var G__52153__52154 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__52153__52155 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__52153__52156 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__52153__52157 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__52153 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__52153__52154.call(this,this$);
case  2 :
return G__52153__52155.call(this,this$,on_connect_fn);
case  3 :
return G__52153__52156.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__52153__52157.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__52153;
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
var G__52159 = null;
var G__52159__52160 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__52159__52161 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__52159 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__52159__52160.call(this,this$,service_name,fn);
case  4 :
return G__52159__52161.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__52159;
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
var xpc_connection__52172 = (function (){
var temp__3974__auto____52163 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3974__auto____52163))
{var config__52164 = temp__3974__auto____52163;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__52164)));
} else
{return null;
}
});
var xpc_connection__52173 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__52165){
var vec__52166__52167 = p__52165;
var k__52168 = cljs.core.nth.call(null,vec__52166__52167,0,null);
var v__52169 = cljs.core.nth.call(null,vec__52166__52167,1,null);

var temp__3971__auto____52170 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__52168);

if(cljs.core.truth_(temp__3971__auto____52170))
{var field__52171 = temp__3971__auto____52170;

return cljs.core.assoc.call(null,sum,field__52171,v__52169);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__52172.call(this);
case  1 :
return xpc_connection__52173.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
