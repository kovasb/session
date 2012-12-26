goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('goog.json');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__13003){
var vec__13004__13005 = p__13003;
var k__13006 = cljs.core.nth.call(null,vec__13004__13005,0,null);
var v__13007 = cljs.core.nth.call(null,vec__13004__13005,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__13006.toLowerCase()),v__13007], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__1 = (function (this$){
if((function (){var and__3937__auto____13024 = this$;
if(and__3937__auto____13024)
{return this$.clojure$browser$net$IConnection$connect$arity$1;
} else
{return and__3937__auto____13024;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else
{var x__2396__auto____13025 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13026 = (clojure.browser.net.connect[goog.typeOf(x__2396__auto____13025)]);
if(or__3939__auto____13026)
{return or__3939__auto____13026;
} else
{var or__3939__auto____13027 = (clojure.browser.net.connect["_"]);
if(or__3939__auto____13027)
{return or__3939__auto____13027;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__2 = (function (this$,opt1){
if((function (){var and__3937__auto____13028 = this$;
if(and__3937__auto____13028)
{return this$.clojure$browser$net$IConnection$connect$arity$2;
} else
{return and__3937__auto____13028;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else
{var x__2396__auto____13029 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13030 = (clojure.browser.net.connect[goog.typeOf(x__2396__auto____13029)]);
if(or__3939__auto____13030)
{return or__3939__auto____13030;
} else
{var or__3939__auto____13031 = (clojure.browser.net.connect["_"]);
if(or__3939__auto____13031)
{return or__3939__auto____13031;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3 = (function (this$,opt1,opt2){
if((function (){var and__3937__auto____13032 = this$;
if(and__3937__auto____13032)
{return this$.clojure$browser$net$IConnection$connect$arity$3;
} else
{return and__3937__auto____13032;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else
{var x__2396__auto____13033 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13034 = (clojure.browser.net.connect[goog.typeOf(x__2396__auto____13033)]);
if(or__3939__auto____13034)
{return or__3939__auto____13034;
} else
{var or__3939__auto____13035 = (clojure.browser.net.connect["_"]);
if(or__3939__auto____13035)
{return or__3939__auto____13035;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4 = (function (this$,opt1,opt2,opt3){
if((function (){var and__3937__auto____13036 = this$;
if(and__3937__auto____13036)
{return this$.clojure$browser$net$IConnection$connect$arity$4;
} else
{return and__3937__auto____13036;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else
{var x__2396__auto____13037 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13038 = (clojure.browser.net.connect[goog.typeOf(x__2396__auto____13037)]);
if(or__3939__auto____13038)
{return or__3939__auto____13038;
} else
{var or__3939__auto____13039 = (clojure.browser.net.connect["_"]);
if(or__3939__auto____13039)
{return or__3939__auto____13039;
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
if((function (){var and__3937__auto____13060 = this$;
if(and__3937__auto____13060)
{return this$.clojure$browser$net$IConnection$transmit$arity$2;
} else
{return and__3937__auto____13060;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else
{var x__2396__auto____13061 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13062 = (clojure.browser.net.transmit[goog.typeOf(x__2396__auto____13061)]);
if(or__3939__auto____13062)
{return or__3939__auto____13062;
} else
{var or__3939__auto____13063 = (clojure.browser.net.transmit["_"]);
if(or__3939__auto____13063)
{return or__3939__auto____13063;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3 = (function (this$,opt,opt2){
if((function (){var and__3937__auto____13064 = this$;
if(and__3937__auto____13064)
{return this$.clojure$browser$net$IConnection$transmit$arity$3;
} else
{return and__3937__auto____13064;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else
{var x__2396__auto____13065 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13066 = (clojure.browser.net.transmit[goog.typeOf(x__2396__auto____13065)]);
if(or__3939__auto____13066)
{return or__3939__auto____13066;
} else
{var or__3939__auto____13067 = (clojure.browser.net.transmit["_"]);
if(or__3939__auto____13067)
{return or__3939__auto____13067;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4 = (function (this$,opt,opt2,opt3){
if((function (){var and__3937__auto____13068 = this$;
if(and__3937__auto____13068)
{return this$.clojure$browser$net$IConnection$transmit$arity$4;
} else
{return and__3937__auto____13068;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else
{var x__2396__auto____13069 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13070 = (clojure.browser.net.transmit[goog.typeOf(x__2396__auto____13069)]);
if(or__3939__auto____13070)
{return or__3939__auto____13070;
} else
{var or__3939__auto____13071 = (clojure.browser.net.transmit["_"]);
if(or__3939__auto____13071)
{return or__3939__auto____13071;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__5 = (function (this$,opt,opt2,opt3,opt4){
if((function (){var and__3937__auto____13072 = this$;
if(and__3937__auto____13072)
{return this$.clojure$browser$net$IConnection$transmit$arity$5;
} else
{return and__3937__auto____13072;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else
{var x__2396__auto____13073 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13074 = (clojure.browser.net.transmit[goog.typeOf(x__2396__auto____13073)]);
if(or__3939__auto____13074)
{return or__3939__auto____13074;
} else
{var or__3939__auto____13075 = (clojure.browser.net.transmit["_"]);
if(or__3939__auto____13075)
{return or__3939__auto____13075;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((function (){var and__3937__auto____13076 = this$;
if(and__3937__auto____13076)
{return this$.clojure$browser$net$IConnection$transmit$arity$6;
} else
{return and__3937__auto____13076;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else
{var x__2396__auto____13077 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13078 = (clojure.browser.net.transmit[goog.typeOf(x__2396__auto____13077)]);
if(or__3939__auto____13078)
{return or__3939__auto____13078;
} else
{var or__3939__auto____13079 = (clojure.browser.net.transmit["_"]);
if(or__3939__auto____13079)
{return or__3939__auto____13079;
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
if((function (){var and__3937__auto____13084 = this$;
if(and__3937__auto____13084)
{return this$.clojure$browser$net$IConnection$close$arity$1;
} else
{return and__3937__auto____13084;
}
})())
{return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else
{var x__2396__auto____13085 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13086 = (clojure.browser.net.close[goog.typeOf(x__2396__auto____13085)]);
if(or__3939__auto____13086)
{return or__3939__auto____13086;
} else
{var or__3939__auto____13087 = (clojure.browser.net.close["_"]);
if(or__3939__auto____13087)
{return or__3939__auto____13087;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__13088){
var vec__13089__13090 = p__13088;
var k__13091 = cljs.core.nth.call(null,vec__13089__13090,0,null);
var v__13092 = cljs.core.nth.call(null,vec__13089__13090,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__13091.toLowerCase()),v__13092], true);
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
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__13093){
var vec__13094__13095 = p__13093;
var k__13096 = cljs.core.nth.call(null,vec__13094__13095,0,null);
var v__13097 = cljs.core.nth.call(null,vec__13094__13095,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__13096.toLowerCase()),v__13097], true);
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
if((function (){var and__3937__auto____13106 = this$;
if(and__3937__auto____13106)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3;
} else
{return and__3937__auto____13106;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else
{var x__2396__auto____13107 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13108 = (clojure.browser.net.register_service[goog.typeOf(x__2396__auto____13107)]);
if(or__3939__auto____13108)
{return or__3939__auto____13108;
} else
{var or__3939__auto____13109 = (clojure.browser.net.register_service["_"]);
if(or__3939__auto____13109)
{return or__3939__auto____13109;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((function (){var and__3937__auto____13110 = this$;
if(and__3937__auto____13110)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4;
} else
{return and__3937__auto____13110;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else
{var x__2396__auto____13111 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13112 = (clojure.browser.net.register_service[goog.typeOf(x__2396__auto____13111)]);
if(or__3939__auto____13112)
{return or__3939__auto____13112;
} else
{var or__3939__auto____13113 = (clojure.browser.net.register_service["_"]);
if(or__3939__auto____13113)
{return or__3939__auto____13113;
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
var temp__4088__auto____13125 = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__4088__auto____13125))
{var config__13126 = temp__4088__auto____13125;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse(config__13126)));
} else
{return null;
}
});
var xpc_connection__1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__13127){
var vec__13128__13129 = p__13127;
var k__13130 = cljs.core.nth.call(null,vec__13128__13129,0,null);
var v__13131 = cljs.core.nth.call(null,vec__13128__13129,1,null);
var temp__4086__auto____13132 = cljs.core._lookup.call(null,clojure.browser.net.xpc_config_fields,k__13130,null);
if(cljs.core.truth_(temp__4086__auto____13132))
{var field__13133 = temp__4086__auto____13132;
var G__13134__13135 = sum;
(G__13134__13135[field__13133] = v__13131);
return G__13134__13135;
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
