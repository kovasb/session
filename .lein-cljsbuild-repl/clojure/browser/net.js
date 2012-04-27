goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__6114){
var vec__6115__6116 = p__6114;
var k__6117 = cljs.core.nth.call(null,vec__6115__6116,0,null);
var v__6118 = cljs.core.nth.call(null,vec__6115__6116,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__6117.toLowerCase()),v__6118]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__6149 = (function (this$){
if(cljs.core.truth_((function (){var and__3822__auto____6119 = this$;

if(cljs.core.truth_(and__3822__auto____6119))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____6119;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3824__auto____6120 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____6120))
{return or__3824__auto____6120;
} else
{var or__3824__auto____6121 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____6121))
{return or__3824__auto____6121;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__6150 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3822__auto____6122 = this$;

if(cljs.core.truth_(and__3822__auto____6122))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____6122;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3824__auto____6123 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____6123))
{return or__3824__auto____6123;
} else
{var or__3824__auto____6124 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____6124))
{return or__3824__auto____6124;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__6151 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3822__auto____6125 = this$;

if(cljs.core.truth_(and__3822__auto____6125))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____6125;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3824__auto____6126 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____6126))
{return or__3824__auto____6126;
} else
{var or__3824__auto____6127 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____6127))
{return or__3824__auto____6127;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__6152 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3822__auto____6128 = this$;

if(cljs.core.truth_(and__3822__auto____6128))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____6128;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3824__auto____6129 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____6129))
{return or__3824__auto____6129;
} else
{var or__3824__auto____6130 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____6130))
{return or__3824__auto____6130;
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
return connect__6149.call(this,this$);
case  2 :
return connect__6150.call(this,this$,opt1);
case  3 :
return connect__6151.call(this,this$,opt1,opt2);
case  4 :
return connect__6152.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__6154 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3822__auto____6131 = this$;

if(cljs.core.truth_(and__3822__auto____6131))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____6131;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3824__auto____6132 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____6132))
{return or__3824__auto____6132;
} else
{var or__3824__auto____6133 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____6133))
{return or__3824__auto____6133;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__6155 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3822__auto____6134 = this$;

if(cljs.core.truth_(and__3822__auto____6134))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____6134;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3824__auto____6135 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____6135))
{return or__3824__auto____6135;
} else
{var or__3824__auto____6136 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____6136))
{return or__3824__auto____6136;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__6156 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3822__auto____6137 = this$;

if(cljs.core.truth_(and__3822__auto____6137))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____6137;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3824__auto____6138 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____6138))
{return or__3824__auto____6138;
} else
{var or__3824__auto____6139 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____6139))
{return or__3824__auto____6139;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__6157 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3822__auto____6140 = this$;

if(cljs.core.truth_(and__3822__auto____6140))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____6140;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3824__auto____6141 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____6141))
{return or__3824__auto____6141;
} else
{var or__3824__auto____6142 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____6142))
{return or__3824__auto____6142;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__6158 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3822__auto____6143 = this$;

if(cljs.core.truth_(and__3822__auto____6143))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____6143;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3824__auto____6144 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____6144))
{return or__3824__auto____6144;
} else
{var or__3824__auto____6145 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____6145))
{return or__3824__auto____6145;
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
return transmit__6154.call(this,this$,opt);
case  3 :
return transmit__6155.call(this,this$,opt,opt2);
case  4 :
return transmit__6156.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__6157.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__6158.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3822__auto____6146 = this$;

if(cljs.core.truth_(and__3822__auto____6146))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3822__auto____6146;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3824__auto____6147 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____6147))
{return or__3824__auto____6147;
} else
{var or__3824__auto____6148 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3824__auto____6148))
{return or__3824__auto____6148;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__6160){
var vec__6161__6162 = p__6160;
var k__6163 = cljs.core.nth.call(null,vec__6161__6162,0,null);
var v__6164 = cljs.core.nth.call(null,vec__6161__6162,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__6163.toLowerCase()),v__6164]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__6165 = null;
var G__6165__6166 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__6165__6167 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__6165__6168 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__6165__6169 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__6165__6170 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__6165 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__6165__6166.call(this,this$,uri);
case  3 :
return G__6165__6167.call(this,this$,uri,method);
case  4 :
return G__6165__6168.call(this,this$,uri,method,content);
case  5 :
return G__6165__6169.call(this,this$,uri,method,content,headers);
case  6 :
return G__6165__6170.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6165;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__6172){
var vec__6173__6174 = p__6172;
var k__6175 = cljs.core.nth.call(null,vec__6173__6174,0,null);
var v__6176 = cljs.core.nth.call(null,vec__6173__6174,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__6175.toLowerCase()),v__6176]);
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
var register_service__6183 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3822__auto____6177 = this$;

if(cljs.core.truth_(and__3822__auto____6177))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3822__auto____6177;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3824__auto____6178 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____6178))
{return or__3824__auto____6178;
} else
{var or__3824__auto____6179 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3824__auto____6179))
{return or__3824__auto____6179;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__6184 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3822__auto____6180 = this$;

if(cljs.core.truth_(and__3822__auto____6180))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3822__auto____6180;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3824__auto____6181 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____6181))
{return or__3824__auto____6181;
} else
{var or__3824__auto____6182 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3824__auto____6182))
{return or__3824__auto____6182;
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
return register_service__6183.call(this,this$,service_name,fn);
case  4 :
return register_service__6184.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__6186 = null;
var G__6186__6187 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__6186__6188 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__6186__6189 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__6186__6190 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__6186 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__6186__6187.call(this,this$);
case  2 :
return G__6186__6188.call(this,this$,on_connect_fn);
case  3 :
return G__6186__6189.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__6186__6190.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6186;
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
var G__6192 = null;
var G__6192__6193 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__6192__6194 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__6192 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__6192__6193.call(this,this$,service_name,fn);
case  4 :
return G__6192__6194.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6192;
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
var xpc_connection__6205 = (function (){
var temp__3974__auto____6196 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3974__auto____6196))
{var config__6197 = temp__3974__auto____6196;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__6197)));
} else
{return null;
}
});
var xpc_connection__6206 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__6198){
var vec__6199__6200 = p__6198;
var k__6201 = cljs.core.nth.call(null,vec__6199__6200,0,null);
var v__6202 = cljs.core.nth.call(null,vec__6199__6200,1,null);

var temp__3971__auto____6203 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__6201);

if(cljs.core.truth_(temp__3971__auto____6203))
{var field__6204 = temp__3971__auto____6203;

return cljs.core.assoc.call(null,sum,field__6204,v__6202);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__6205.call(this);
case  1 :
return xpc_connection__6206.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
