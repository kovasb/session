goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('goog.json');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__13052){
var vec__13053__13054 = p__13052;
var k__13055 = cljs.core.nth.call(null,vec__13053__13054,0,null);
var v__13056 = cljs.core.nth.call(null,vec__13053__13054,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__13055.toLowerCase()),v__13056], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__1 = (function (this$){
if((function (){var and__3937__auto____13073 = this$;
if(and__3937__auto____13073)
{return this$.clojure$browser$net$IConnection$connect$arity$1;
} else
{return and__3937__auto____13073;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else
{var x__2396__auto____13074 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13075 = (clojure.browser.net.connect[goog.typeOf(x__2396__auto____13074)]);
if(or__3939__auto____13075)
{return or__3939__auto____13075;
} else
{var or__3939__auto____13076 = (clojure.browser.net.connect["_"]);
if(or__3939__auto____13076)
{return or__3939__auto____13076;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__2 = (function (this$,opt1){
if((function (){var and__3937__auto____13077 = this$;
if(and__3937__auto____13077)
{return this$.clojure$browser$net$IConnection$connect$arity$2;
} else
{return and__3937__auto____13077;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else
{var x__2396__auto____13078 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13079 = (clojure.browser.net.connect[goog.typeOf(x__2396__auto____13078)]);
if(or__3939__auto____13079)
{return or__3939__auto____13079;
} else
{var or__3939__auto____13080 = (clojure.browser.net.connect["_"]);
if(or__3939__auto____13080)
{return or__3939__auto____13080;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3 = (function (this$,opt1,opt2){
if((function (){var and__3937__auto____13081 = this$;
if(and__3937__auto____13081)
{return this$.clojure$browser$net$IConnection$connect$arity$3;
} else
{return and__3937__auto____13081;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else
{var x__2396__auto____13082 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13083 = (clojure.browser.net.connect[goog.typeOf(x__2396__auto____13082)]);
if(or__3939__auto____13083)
{return or__3939__auto____13083;
} else
{var or__3939__auto____13084 = (clojure.browser.net.connect["_"]);
if(or__3939__auto____13084)
{return or__3939__auto____13084;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4 = (function (this$,opt1,opt2,opt3){
if((function (){var and__3937__auto____13085 = this$;
if(and__3937__auto____13085)
{return this$.clojure$browser$net$IConnection$connect$arity$4;
} else
{return and__3937__auto____13085;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else
{var x__2396__auto____13086 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13087 = (clojure.browser.net.connect[goog.typeOf(x__2396__auto____13086)]);
if(or__3939__auto____13087)
{return or__3939__auto____13087;
} else
{var or__3939__auto____13088 = (clojure.browser.net.connect["_"]);
if(or__3939__auto____13088)
{return or__3939__auto____13088;
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
if((function (){var and__3937__auto____13109 = this$;
if(and__3937__auto____13109)
{return this$.clojure$browser$net$IConnection$transmit$arity$2;
} else
{return and__3937__auto____13109;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else
{var x__2396__auto____13110 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13111 = (clojure.browser.net.transmit[goog.typeOf(x__2396__auto____13110)]);
if(or__3939__auto____13111)
{return or__3939__auto____13111;
} else
{var or__3939__auto____13112 = (clojure.browser.net.transmit["_"]);
if(or__3939__auto____13112)
{return or__3939__auto____13112;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3 = (function (this$,opt,opt2){
if((function (){var and__3937__auto____13113 = this$;
if(and__3937__auto____13113)
{return this$.clojure$browser$net$IConnection$transmit$arity$3;
} else
{return and__3937__auto____13113;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else
{var x__2396__auto____13114 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13115 = (clojure.browser.net.transmit[goog.typeOf(x__2396__auto____13114)]);
if(or__3939__auto____13115)
{return or__3939__auto____13115;
} else
{var or__3939__auto____13116 = (clojure.browser.net.transmit["_"]);
if(or__3939__auto____13116)
{return or__3939__auto____13116;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4 = (function (this$,opt,opt2,opt3){
if((function (){var and__3937__auto____13117 = this$;
if(and__3937__auto____13117)
{return this$.clojure$browser$net$IConnection$transmit$arity$4;
} else
{return and__3937__auto____13117;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else
{var x__2396__auto____13118 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13119 = (clojure.browser.net.transmit[goog.typeOf(x__2396__auto____13118)]);
if(or__3939__auto____13119)
{return or__3939__auto____13119;
} else
{var or__3939__auto____13120 = (clojure.browser.net.transmit["_"]);
if(or__3939__auto____13120)
{return or__3939__auto____13120;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__5 = (function (this$,opt,opt2,opt3,opt4){
if((function (){var and__3937__auto____13121 = this$;
if(and__3937__auto____13121)
{return this$.clojure$browser$net$IConnection$transmit$arity$5;
} else
{return and__3937__auto____13121;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else
{var x__2396__auto____13122 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13123 = (clojure.browser.net.transmit[goog.typeOf(x__2396__auto____13122)]);
if(or__3939__auto____13123)
{return or__3939__auto____13123;
} else
{var or__3939__auto____13124 = (clojure.browser.net.transmit["_"]);
if(or__3939__auto____13124)
{return or__3939__auto____13124;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((function (){var and__3937__auto____13125 = this$;
if(and__3937__auto____13125)
{return this$.clojure$browser$net$IConnection$transmit$arity$6;
} else
{return and__3937__auto____13125;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else
{var x__2396__auto____13126 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13127 = (clojure.browser.net.transmit[goog.typeOf(x__2396__auto____13126)]);
if(or__3939__auto____13127)
{return or__3939__auto____13127;
} else
{var or__3939__auto____13128 = (clojure.browser.net.transmit["_"]);
if(or__3939__auto____13128)
{return or__3939__auto____13128;
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
if((function (){var and__3937__auto____13133 = this$;
if(and__3937__auto____13133)
{return this$.clojure$browser$net$IConnection$close$arity$1;
} else
{return and__3937__auto____13133;
}
})())
{return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else
{var x__2396__auto____13134 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13135 = (clojure.browser.net.close[goog.typeOf(x__2396__auto____13134)]);
if(or__3939__auto____13135)
{return or__3939__auto____13135;
} else
{var or__3939__auto____13136 = (clojure.browser.net.close["_"]);
if(or__3939__auto____13136)
{return or__3939__auto____13136;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__13137){
var vec__13138__13139 = p__13137;
var k__13140 = cljs.core.nth.call(null,vec__13138__13139,0,null);
var v__13141 = cljs.core.nth.call(null,vec__13138__13139,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__13140.toLowerCase()),v__13141], true);
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
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__13142){
var vec__13143__13144 = p__13142;
var k__13145 = cljs.core.nth.call(null,vec__13143__13144,0,null);
var v__13146 = cljs.core.nth.call(null,vec__13143__13144,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__13145.toLowerCase()),v__13146], true);
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
if((function (){var and__3937__auto____13155 = this$;
if(and__3937__auto____13155)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3;
} else
{return and__3937__auto____13155;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else
{var x__2396__auto____13156 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13157 = (clojure.browser.net.register_service[goog.typeOf(x__2396__auto____13156)]);
if(or__3939__auto____13157)
{return or__3939__auto____13157;
} else
{var or__3939__auto____13158 = (clojure.browser.net.register_service["_"]);
if(or__3939__auto____13158)
{return or__3939__auto____13158;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((function (){var and__3937__auto____13159 = this$;
if(and__3937__auto____13159)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4;
} else
{return and__3937__auto____13159;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else
{var x__2396__auto____13160 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____13161 = (clojure.browser.net.register_service[goog.typeOf(x__2396__auto____13160)]);
if(or__3939__auto____13161)
{return or__3939__auto____13161;
} else
{var or__3939__auto____13162 = (clojure.browser.net.register_service["_"]);
if(or__3939__auto____13162)
{return or__3939__auto____13162;
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
var temp__4088__auto____13174 = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__4088__auto____13174))
{var config__13175 = temp__4088__auto____13174;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse(config__13175)));
} else
{return null;
}
});
var xpc_connection__1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__13176){
var vec__13177__13178 = p__13176;
var k__13179 = cljs.core.nth.call(null,vec__13177__13178,0,null);
var v__13180 = cljs.core.nth.call(null,vec__13177__13178,1,null);
var temp__4086__auto____13181 = cljs.core._lookup.call(null,clojure.browser.net.xpc_config_fields,k__13179,null);
if(cljs.core.truth_(temp__4086__auto____13181))
{var field__13182 = temp__4086__auto____13181;
var G__13183__13184 = sum;
(G__13183__13184[field__13182] = v__13180);
return G__13183__13184;
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
