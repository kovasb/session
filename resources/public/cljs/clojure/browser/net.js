goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__32177){
var vec__32178__32179 = p__32177;
var k__32180 = cljs.core.nth.call(null,vec__32178__32179,0,null);
var v__32181 = cljs.core.nth.call(null,vec__32178__32179,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__32180.toLowerCase()),v__32181]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__32212 = (function (this$){
if(cljs.core.truth_((function (){var and__3822__auto____32182 = this$;

if(cljs.core.truth_(and__3822__auto____32182))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____32182;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3824__auto____32183 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____32183))
{return or__3824__auto____32183;
} else
{var or__3824__auto____32184 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____32184))
{return or__3824__auto____32184;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__32213 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3822__auto____32185 = this$;

if(cljs.core.truth_(and__3822__auto____32185))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____32185;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3824__auto____32186 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____32186))
{return or__3824__auto____32186;
} else
{var or__3824__auto____32187 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____32187))
{return or__3824__auto____32187;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__32214 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3822__auto____32188 = this$;

if(cljs.core.truth_(and__3822__auto____32188))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____32188;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3824__auto____32189 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____32189))
{return or__3824__auto____32189;
} else
{var or__3824__auto____32190 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____32190))
{return or__3824__auto____32190;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__32215 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3822__auto____32191 = this$;

if(cljs.core.truth_(and__3822__auto____32191))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____32191;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3824__auto____32192 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____32192))
{return or__3824__auto____32192;
} else
{var or__3824__auto____32193 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____32193))
{return or__3824__auto____32193;
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
return connect__32212.call(this,this$);
case  2 :
return connect__32213.call(this,this$,opt1);
case  3 :
return connect__32214.call(this,this$,opt1,opt2);
case  4 :
return connect__32215.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__32217 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3822__auto____32194 = this$;

if(cljs.core.truth_(and__3822__auto____32194))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____32194;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3824__auto____32195 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____32195))
{return or__3824__auto____32195;
} else
{var or__3824__auto____32196 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____32196))
{return or__3824__auto____32196;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__32218 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3822__auto____32197 = this$;

if(cljs.core.truth_(and__3822__auto____32197))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____32197;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3824__auto____32198 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____32198))
{return or__3824__auto____32198;
} else
{var or__3824__auto____32199 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____32199))
{return or__3824__auto____32199;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__32219 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3822__auto____32200 = this$;

if(cljs.core.truth_(and__3822__auto____32200))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____32200;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3824__auto____32201 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____32201))
{return or__3824__auto____32201;
} else
{var or__3824__auto____32202 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____32202))
{return or__3824__auto____32202;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__32220 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3822__auto____32203 = this$;

if(cljs.core.truth_(and__3822__auto____32203))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____32203;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3824__auto____32204 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____32204))
{return or__3824__auto____32204;
} else
{var or__3824__auto____32205 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____32205))
{return or__3824__auto____32205;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__32221 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3822__auto____32206 = this$;

if(cljs.core.truth_(and__3822__auto____32206))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____32206;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3824__auto____32207 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____32207))
{return or__3824__auto____32207;
} else
{var or__3824__auto____32208 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____32208))
{return or__3824__auto____32208;
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
return transmit__32217.call(this,this$,opt);
case  3 :
return transmit__32218.call(this,this$,opt,opt2);
case  4 :
return transmit__32219.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__32220.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__32221.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3822__auto____32209 = this$;

if(cljs.core.truth_(and__3822__auto____32209))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3822__auto____32209;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3824__auto____32210 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____32210))
{return or__3824__auto____32210;
} else
{var or__3824__auto____32211 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3824__auto____32211))
{return or__3824__auto____32211;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__32223){
var vec__32224__32225 = p__32223;
var k__32226 = cljs.core.nth.call(null,vec__32224__32225,0,null);
var v__32227 = cljs.core.nth.call(null,vec__32224__32225,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__32226.toLowerCase()),v__32227]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__32228 = null;
var G__32228__32229 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__32228__32230 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__32228__32231 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__32228__32232 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__32228__32233 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__32228 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__32228__32229.call(this,this$,uri);
case  3 :
return G__32228__32230.call(this,this$,uri,method);
case  4 :
return G__32228__32231.call(this,this$,uri,method,content);
case  5 :
return G__32228__32232.call(this,this$,uri,method,content,headers);
case  6 :
return G__32228__32233.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__32228;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__32235){
var vec__32236__32237 = p__32235;
var k__32238 = cljs.core.nth.call(null,vec__32236__32237,0,null);
var v__32239 = cljs.core.nth.call(null,vec__32236__32237,1,null);

return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__32238.toLowerCase()),v__32239]);
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
var register_service__32246 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3822__auto____32240 = this$;

if(cljs.core.truth_(and__3822__auto____32240))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3822__auto____32240;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3824__auto____32241 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____32241))
{return or__3824__auto____32241;
} else
{var or__3824__auto____32242 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3824__auto____32242))
{return or__3824__auto____32242;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__32247 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3822__auto____32243 = this$;

if(cljs.core.truth_(and__3822__auto____32243))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3822__auto____32243;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3824__auto____32244 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____32244))
{return or__3824__auto____32244;
} else
{var or__3824__auto____32245 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3824__auto____32245))
{return or__3824__auto____32245;
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
return register_service__32246.call(this,this$,service_name,fn);
case  4 :
return register_service__32247.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__32249 = null;
var G__32249__32250 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__32249__32251 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__32249__32252 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__32249__32253 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__32249 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__32249__32250.call(this,this$);
case  2 :
return G__32249__32251.call(this,this$,on_connect_fn);
case  3 :
return G__32249__32252.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__32249__32253.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__32249;
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
var G__32255 = null;
var G__32255__32256 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__32255__32257 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__32255 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__32255__32256.call(this,this$,service_name,fn);
case  4 :
return G__32255__32257.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__32255;
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
var xpc_connection__32268 = (function (){
var temp__3974__auto____32259 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3974__auto____32259))
{var config__32260 = temp__3974__auto____32259;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__32260)));
} else
{return null;
}
});
var xpc_connection__32269 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__32261){
var vec__32262__32263 = p__32261;
var k__32264 = cljs.core.nth.call(null,vec__32262__32263,0,null);
var v__32265 = cljs.core.nth.call(null,vec__32262__32263,1,null);

var temp__3971__auto____32266 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__32264);

if(cljs.core.truth_(temp__3971__auto____32266))
{var field__32267 = temp__3971__auto____32266;

return cljs.core.assoc.call(null,sum,field__32267,v__32265);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__32268.call(this);
case  1 :
return xpc_connection__32269.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
