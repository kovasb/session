goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('goog.json');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__13055){
var vec__13056__13057 = p__13055;
var k__13058 = cljs.core.nth.call(null,vec__13056__13057,0,null);
var v__13059 = cljs.core.nth.call(null,vec__13056__13057,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__13058.toLowerCase()),v__13059], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__1 = (function (this$){
if((function (){var and__3822__auto____13076 = this$;
if(and__3822__auto____13076)
{return this$.clojure$browser$net$IConnection$connect$arity$1;
} else
{return and__3822__auto____13076;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else
{var x__2363__auto____13077 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13078 = (clojure.browser.net.connect[goog.typeOf(x__2363__auto____13077)]);
if(or__3824__auto____13078)
{return or__3824__auto____13078;
} else
{var or__3824__auto____13079 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____13079)
{return or__3824__auto____13079;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__2 = (function (this$,opt1){
if((function (){var and__3822__auto____13080 = this$;
if(and__3822__auto____13080)
{return this$.clojure$browser$net$IConnection$connect$arity$2;
} else
{return and__3822__auto____13080;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else
{var x__2363__auto____13081 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13082 = (clojure.browser.net.connect[goog.typeOf(x__2363__auto____13081)]);
if(or__3824__auto____13082)
{return or__3824__auto____13082;
} else
{var or__3824__auto____13083 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____13083)
{return or__3824__auto____13083;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3 = (function (this$,opt1,opt2){
if((function (){var and__3822__auto____13084 = this$;
if(and__3822__auto____13084)
{return this$.clojure$browser$net$IConnection$connect$arity$3;
} else
{return and__3822__auto____13084;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else
{var x__2363__auto____13085 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13086 = (clojure.browser.net.connect[goog.typeOf(x__2363__auto____13085)]);
if(or__3824__auto____13086)
{return or__3824__auto____13086;
} else
{var or__3824__auto____13087 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____13087)
{return or__3824__auto____13087;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4 = (function (this$,opt1,opt2,opt3){
if((function (){var and__3822__auto____13088 = this$;
if(and__3822__auto____13088)
{return this$.clojure$browser$net$IConnection$connect$arity$4;
} else
{return and__3822__auto____13088;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else
{var x__2363__auto____13089 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13090 = (clojure.browser.net.connect[goog.typeOf(x__2363__auto____13089)]);
if(or__3824__auto____13090)
{return or__3824__auto____13090;
} else
{var or__3824__auto____13091 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____13091)
{return or__3824__auto____13091;
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
if((function (){var and__3822__auto____13112 = this$;
if(and__3822__auto____13112)
{return this$.clojure$browser$net$IConnection$transmit$arity$2;
} else
{return and__3822__auto____13112;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else
{var x__2363__auto____13113 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13114 = (clojure.browser.net.transmit[goog.typeOf(x__2363__auto____13113)]);
if(or__3824__auto____13114)
{return or__3824__auto____13114;
} else
{var or__3824__auto____13115 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____13115)
{return or__3824__auto____13115;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3 = (function (this$,opt,opt2){
if((function (){var and__3822__auto____13116 = this$;
if(and__3822__auto____13116)
{return this$.clojure$browser$net$IConnection$transmit$arity$3;
} else
{return and__3822__auto____13116;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else
{var x__2363__auto____13117 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13118 = (clojure.browser.net.transmit[goog.typeOf(x__2363__auto____13117)]);
if(or__3824__auto____13118)
{return or__3824__auto____13118;
} else
{var or__3824__auto____13119 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____13119)
{return or__3824__auto____13119;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4 = (function (this$,opt,opt2,opt3){
if((function (){var and__3822__auto____13120 = this$;
if(and__3822__auto____13120)
{return this$.clojure$browser$net$IConnection$transmit$arity$4;
} else
{return and__3822__auto____13120;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else
{var x__2363__auto____13121 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13122 = (clojure.browser.net.transmit[goog.typeOf(x__2363__auto____13121)]);
if(or__3824__auto____13122)
{return or__3824__auto____13122;
} else
{var or__3824__auto____13123 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____13123)
{return or__3824__auto____13123;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__5 = (function (this$,opt,opt2,opt3,opt4){
if((function (){var and__3822__auto____13124 = this$;
if(and__3822__auto____13124)
{return this$.clojure$browser$net$IConnection$transmit$arity$5;
} else
{return and__3822__auto____13124;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else
{var x__2363__auto____13125 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13126 = (clojure.browser.net.transmit[goog.typeOf(x__2363__auto____13125)]);
if(or__3824__auto____13126)
{return or__3824__auto____13126;
} else
{var or__3824__auto____13127 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____13127)
{return or__3824__auto____13127;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((function (){var and__3822__auto____13128 = this$;
if(and__3822__auto____13128)
{return this$.clojure$browser$net$IConnection$transmit$arity$6;
} else
{return and__3822__auto____13128;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else
{var x__2363__auto____13129 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13130 = (clojure.browser.net.transmit[goog.typeOf(x__2363__auto____13129)]);
if(or__3824__auto____13130)
{return or__3824__auto____13130;
} else
{var or__3824__auto____13131 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____13131)
{return or__3824__auto____13131;
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
if((function (){var and__3822__auto____13136 = this$;
if(and__3822__auto____13136)
{return this$.clojure$browser$net$IConnection$close$arity$1;
} else
{return and__3822__auto____13136;
}
})())
{return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else
{var x__2363__auto____13137 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13138 = (clojure.browser.net.close[goog.typeOf(x__2363__auto____13137)]);
if(or__3824__auto____13138)
{return or__3824__auto____13138;
} else
{var or__3824__auto____13139 = (clojure.browser.net.close["_"]);
if(or__3824__auto____13139)
{return or__3824__auto____13139;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__13140){
var vec__13141__13142 = p__13140;
var k__13143 = cljs.core.nth.call(null,vec__13141__13142,0,null);
var v__13144 = cljs.core.nth.call(null,vec__13141__13142,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__13143.toLowerCase()),v__13144], true);
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
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__13145){
var vec__13146__13147 = p__13145;
var k__13148 = cljs.core.nth.call(null,vec__13146__13147,0,null);
var v__13149 = cljs.core.nth.call(null,vec__13146__13147,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__13148.toLowerCase()),v__13149], true);
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
if((function (){var and__3822__auto____13158 = this$;
if(and__3822__auto____13158)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3;
} else
{return and__3822__auto____13158;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else
{var x__2363__auto____13159 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13160 = (clojure.browser.net.register_service[goog.typeOf(x__2363__auto____13159)]);
if(or__3824__auto____13160)
{return or__3824__auto____13160;
} else
{var or__3824__auto____13161 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____13161)
{return or__3824__auto____13161;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((function (){var and__3822__auto____13162 = this$;
if(and__3822__auto____13162)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4;
} else
{return and__3822__auto____13162;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else
{var x__2363__auto____13163 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____13164 = (clojure.browser.net.register_service[goog.typeOf(x__2363__auto____13163)]);
if(or__3824__auto____13164)
{return or__3824__auto____13164;
} else
{var or__3824__auto____13165 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____13165)
{return or__3824__auto____13165;
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
var temp__3974__auto____13177 = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__3974__auto____13177))
{var config__13178 = temp__3974__auto____13177;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse(config__13178)));
} else
{return null;
}
});
var xpc_connection__1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__13179){
var vec__13180__13181 = p__13179;
var k__13182 = cljs.core.nth.call(null,vec__13180__13181,0,null);
var v__13183 = cljs.core.nth.call(null,vec__13180__13181,1,null);
var temp__3971__auto____13184 = cljs.core._lookup.call(null,clojure.browser.net.xpc_config_fields,k__13182,null);
if(cljs.core.truth_(temp__3971__auto____13184))
{var field__13185 = temp__3971__auto____13184;
var G__13186__13187 = sum;
(G__13186__13187[field__13185] = v__13183);
return G__13186__13187;
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
