goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('goog.json');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__13010){
var vec__13011__13012 = p__13010;
var k__13013 = cljs.core.nth.call(null,vec__13011__13012,0,null);
var v__13014 = cljs.core.nth.call(null,vec__13011__13012,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__13013.toLowerCase()),v__13014], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__1 = (function (this$){
if((function (){var and__3822__auto____13031 = this$;
if(and__3822__auto____13031)
{return this$.clojure$browser$net$IConnection$connect$arity$1;
} else
{return and__3822__auto____13031;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else
{var x__2363__auto____13032 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13033 = (clojure.browser.net.connect[goog.typeOf(x__2363__auto____13032)]);
if(or__3824__auto____13033)
{return or__3824__auto____13033;
} else
{var or__3824__auto____13034 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____13034)
{return or__3824__auto____13034;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__2 = (function (this$,opt1){
if((function (){var and__3822__auto____13035 = this$;
if(and__3822__auto____13035)
{return this$.clojure$browser$net$IConnection$connect$arity$2;
} else
{return and__3822__auto____13035;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else
{var x__2363__auto____13036 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13037 = (clojure.browser.net.connect[goog.typeOf(x__2363__auto____13036)]);
if(or__3824__auto____13037)
{return or__3824__auto____13037;
} else
{var or__3824__auto____13038 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____13038)
{return or__3824__auto____13038;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3 = (function (this$,opt1,opt2){
if((function (){var and__3822__auto____13039 = this$;
if(and__3822__auto____13039)
{return this$.clojure$browser$net$IConnection$connect$arity$3;
} else
{return and__3822__auto____13039;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else
{var x__2363__auto____13040 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13041 = (clojure.browser.net.connect[goog.typeOf(x__2363__auto____13040)]);
if(or__3824__auto____13041)
{return or__3824__auto____13041;
} else
{var or__3824__auto____13042 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____13042)
{return or__3824__auto____13042;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4 = (function (this$,opt1,opt2,opt3){
if((function (){var and__3822__auto____13043 = this$;
if(and__3822__auto____13043)
{return this$.clojure$browser$net$IConnection$connect$arity$4;
} else
{return and__3822__auto____13043;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else
{var x__2363__auto____13044 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13045 = (clojure.browser.net.connect[goog.typeOf(x__2363__auto____13044)]);
if(or__3824__auto____13045)
{return or__3824__auto____13045;
} else
{var or__3824__auto____13046 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____13046)
{return or__3824__auto____13046;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case 1:
return connect__1.call(this,this$);
case 2:
return connect__2.call(this,this$,opt1);
case 3:
return connect__3.call(this,this$,opt1,opt2);
case 4:
return connect__4.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
connect.cljs$lang$arity$1 = connect__1;
connect.cljs$lang$arity$2 = connect__2;
connect.cljs$lang$arity$3 = connect__3;
connect.cljs$lang$arity$4 = connect__4;
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__2 = (function (this$,opt){
if((function (){var and__3822__auto____13067 = this$;
if(and__3822__auto____13067)
{return this$.clojure$browser$net$IConnection$transmit$arity$2;
} else
{return and__3822__auto____13067;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else
{var x__2363__auto____13068 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13069 = (clojure.browser.net.transmit[goog.typeOf(x__2363__auto____13068)]);
if(or__3824__auto____13069)
{return or__3824__auto____13069;
} else
{var or__3824__auto____13070 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____13070)
{return or__3824__auto____13070;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3 = (function (this$,opt,opt2){
if((function (){var and__3822__auto____13071 = this$;
if(and__3822__auto____13071)
{return this$.clojure$browser$net$IConnection$transmit$arity$3;
} else
{return and__3822__auto____13071;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else
{var x__2363__auto____13072 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13073 = (clojure.browser.net.transmit[goog.typeOf(x__2363__auto____13072)]);
if(or__3824__auto____13073)
{return or__3824__auto____13073;
} else
{var or__3824__auto____13074 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____13074)
{return or__3824__auto____13074;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4 = (function (this$,opt,opt2,opt3){
if((function (){var and__3822__auto____13075 = this$;
if(and__3822__auto____13075)
{return this$.clojure$browser$net$IConnection$transmit$arity$4;
} else
{return and__3822__auto____13075;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else
{var x__2363__auto____13076 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13077 = (clojure.browser.net.transmit[goog.typeOf(x__2363__auto____13076)]);
if(or__3824__auto____13077)
{return or__3824__auto____13077;
} else
{var or__3824__auto____13078 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____13078)
{return or__3824__auto____13078;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__5 = (function (this$,opt,opt2,opt3,opt4){
if((function (){var and__3822__auto____13079 = this$;
if(and__3822__auto____13079)
{return this$.clojure$browser$net$IConnection$transmit$arity$5;
} else
{return and__3822__auto____13079;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else
{var x__2363__auto____13080 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13081 = (clojure.browser.net.transmit[goog.typeOf(x__2363__auto____13080)]);
if(or__3824__auto____13081)
{return or__3824__auto____13081;
} else
{var or__3824__auto____13082 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____13082)
{return or__3824__auto____13082;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((function (){var and__3822__auto____13083 = this$;
if(and__3822__auto____13083)
{return this$.clojure$browser$net$IConnection$transmit$arity$6;
} else
{return and__3822__auto____13083;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else
{var x__2363__auto____13084 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13085 = (clojure.browser.net.transmit[goog.typeOf(x__2363__auto____13084)]);
if(or__3824__auto____13085)
{return or__3824__auto____13085;
} else
{var or__3824__auto____13086 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____13086)
{return or__3824__auto____13086;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case 2:
return transmit__2.call(this,this$,opt);
case 3:
return transmit__3.call(this,this$,opt,opt2);
case 4:
return transmit__4.call(this,this$,opt,opt2,opt3);
case 5:
return transmit__5.call(this,this$,opt,opt2,opt3,opt4);
case 6:
return transmit__6.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
transmit.cljs$lang$arity$2 = transmit__2;
transmit.cljs$lang$arity$3 = transmit__3;
transmit.cljs$lang$arity$4 = transmit__4;
transmit.cljs$lang$arity$5 = transmit__5;
transmit.cljs$lang$arity$6 = transmit__6;
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if((function (){var and__3822__auto____13091 = this$;
if(and__3822__auto____13091)
{return this$.clojure$browser$net$IConnection$close$arity$1;
} else
{return and__3822__auto____13091;
}
})())
{return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else
{var x__2363__auto____13092 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13093 = (clojure.browser.net.close[goog.typeOf(x__2363__auto____13092)]);
if(or__3824__auto____13093)
{return or__3824__auto____13093;
} else
{var or__3824__auto____13094 = (clojure.browser.net.close["_"]);
if(or__3824__auto____13094)
{return or__3824__auto____13094;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__13095){
var vec__13096__13097 = p__13095;
var k__13098 = cljs.core.nth.call(null,vec__13096__13097,0,null);
var v__13099 = cljs.core.nth.call(null,vec__13096__13097,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__13098.toLowerCase()),v__13099], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$4 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$5 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$6 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__13100){
var vec__13101__13102 = p__13100;
var k__13103 = cljs.core.nth.call(null,vec__13101__13102,0,null);
var v__13104 = cljs.core.nth.call(null,vec__13101__13102,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__13103.toLowerCase()),v__13104], true);
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
var register_service__3 = (function (this$,service_name,fn){
if((function (){var and__3822__auto____13113 = this$;
if(and__3822__auto____13113)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3;
} else
{return and__3822__auto____13113;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else
{var x__2363__auto____13114 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13115 = (clojure.browser.net.register_service[goog.typeOf(x__2363__auto____13114)]);
if(or__3824__auto____13115)
{return or__3824__auto____13115;
} else
{var or__3824__auto____13116 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____13116)
{return or__3824__auto____13116;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((function (){var and__3822__auto____13117 = this$;
if(and__3822__auto____13117)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4;
} else
{return and__3822__auto____13117;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else
{var x__2363__auto____13118 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13119 = (clojure.browser.net.register_service[goog.typeOf(x__2363__auto____13118)]);
if(or__3824__auto____13119)
{return or__3824__auto____13119;
} else
{var or__3824__auto____13120 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____13120)
{return or__3824__auto____13120;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case 3:
return register_service__3.call(this,this$,service_name,fn);
case 4:
return register_service__4.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
register_service.cljs$lang$arity$3 = register_service__3;
register_service.cljs$lang$arity$4 = register_service__4;
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$1 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$4 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$3 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
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
var xpc_connection__0 = (function (){
var temp__3974__auto____13132 = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__3974__auto____13132))
{var config__13133 = temp__3974__auto____13132;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse(config__13133)));
} else
{return null;
}
});
var xpc_connection__1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__13134){
var vec__13135__13136 = p__13134;
var k__13137 = cljs.core.nth.call(null,vec__13135__13136,0,null);
var v__13138 = cljs.core.nth.call(null,vec__13135__13136,1,null);
var temp__3971__auto____13139 = cljs.core._lookup.call(null,clojure.browser.net.xpc_config_fields,k__13137,null);
if(cljs.core.truth_(temp__3971__auto____13139))
{var field__13140 = temp__3971__auto____13139;
var G__13141__13142 = sum;
(G__13141__13142[field__13140] = v__13138);
return G__13141__13142;
} else
{return sum;
}
}),{},config)));
});
xpc_connection = function(config){
switch(arguments.length){
case 0:
return xpc_connection__0.call(this);
case 1:
return xpc_connection__1.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
xpc_connection.cljs$lang$arity$0 = xpc_connection__0;
xpc_connection.cljs$lang$arity$1 = xpc_connection__1;
return xpc_connection;
})()
;
