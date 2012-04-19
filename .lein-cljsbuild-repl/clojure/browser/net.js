goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__5666){
var vec__5667__5668 = p__5666;
var k__5669 = cljs.core.nth.call(null,vec__5667__5668,0,null);
var v__5670 = cljs.core.nth.call(null,vec__5667__5668,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__5669.toLowerCase()),v__5670]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__5701 = (function (this$){
if(cljs.core.truth_((function (){var and__3822__auto____5671 = this$;

if(cljs.core.truth_(and__3822__auto____5671))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____5671;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3824__auto____5672 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5672))
{return or__3824__auto____5672;
} else
{var or__3824__auto____5673 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____5673))
{return or__3824__auto____5673;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__5702 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3822__auto____5674 = this$;

if(cljs.core.truth_(and__3822__auto____5674))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____5674;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3824__auto____5675 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5675))
{return or__3824__auto____5675;
} else
{var or__3824__auto____5676 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____5676))
{return or__3824__auto____5676;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__5703 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3822__auto____5677 = this$;

if(cljs.core.truth_(and__3822__auto____5677))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____5677;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3824__auto____5678 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5678))
{return or__3824__auto____5678;
} else
{var or__3824__auto____5679 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____5679))
{return or__3824__auto____5679;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__5704 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3822__auto____5680 = this$;

if(cljs.core.truth_(and__3822__auto____5680))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3822__auto____5680;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3824__auto____5681 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5681))
{return or__3824__auto____5681;
} else
{var or__3824__auto____5682 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3824__auto____5682))
{return or__3824__auto____5682;
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
return connect__5701.call(this,this$);
case  2 :
return connect__5702.call(this,this$,opt1);
case  3 :
return connect__5703.call(this,this$,opt1,opt2);
case  4 :
return connect__5704.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__5706 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3822__auto____5683 = this$;

if(cljs.core.truth_(and__3822__auto____5683))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____5683;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3824__auto____5684 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5684))
{return or__3824__auto____5684;
} else
{var or__3824__auto____5685 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____5685))
{return or__3824__auto____5685;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__5707 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3822__auto____5686 = this$;

if(cljs.core.truth_(and__3822__auto____5686))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____5686;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3824__auto____5687 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5687))
{return or__3824__auto____5687;
} else
{var or__3824__auto____5688 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____5688))
{return or__3824__auto____5688;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__5708 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3822__auto____5689 = this$;

if(cljs.core.truth_(and__3822__auto____5689))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____5689;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3824__auto____5690 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5690))
{return or__3824__auto____5690;
} else
{var or__3824__auto____5691 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____5691))
{return or__3824__auto____5691;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__5709 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3822__auto____5692 = this$;

if(cljs.core.truth_(and__3822__auto____5692))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____5692;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3824__auto____5693 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5693))
{return or__3824__auto____5693;
} else
{var or__3824__auto____5694 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____5694))
{return or__3824__auto____5694;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__5710 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3822__auto____5695 = this$;

if(cljs.core.truth_(and__3822__auto____5695))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3822__auto____5695;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3824__auto____5696 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5696))
{return or__3824__auto____5696;
} else
{var or__3824__auto____5697 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3824__auto____5697))
{return or__3824__auto____5697;
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
return transmit__5706.call(this,this$,opt);
case  3 :
return transmit__5707.call(this,this$,opt,opt2);
case  4 :
return transmit__5708.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__5709.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__5710.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3822__auto____5698 = this$;

if(cljs.core.truth_(and__3822__auto____5698))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3822__auto____5698;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3824__auto____5699 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5699))
{return or__3824__auto____5699;
} else
{var or__3824__auto____5700 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3824__auto____5700))
{return or__3824__auto____5700;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__5712){
var vec__5713__5714 = p__5712;
var k__5715 = cljs.core.nth.call(null,vec__5713__5714,0,null);
var v__5716 = cljs.core.nth.call(null,vec__5713__5714,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__5715.toLowerCase()),v__5716]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__5717 = null;
var G__5717__5718 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__5717__5719 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__5717__5720 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__5717__5721 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__5717__5722 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__5717 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__5717__5718.call(this,this$,uri);
case  3 :
return G__5717__5719.call(this,this$,uri,method);
case  4 :
return G__5717__5720.call(this,this$,uri,method,content);
case  5 :
return G__5717__5721.call(this,this$,uri,method,content,headers);
case  6 :
return G__5717__5722.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5717;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__5724){
var vec__5725__5726 = p__5724;
var k__5727 = cljs.core.nth.call(null,vec__5725__5726,0,null);
var v__5728 = cljs.core.nth.call(null,vec__5725__5726,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__5727.toLowerCase()),v__5728]);
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
var register_service__5735 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3822__auto____5729 = this$;

if(cljs.core.truth_(and__3822__auto____5729))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3822__auto____5729;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3824__auto____5730 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5730))
{return or__3824__auto____5730;
} else
{var or__3824__auto____5731 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3824__auto____5731))
{return or__3824__auto____5731;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__5736 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3822__auto____5732 = this$;

if(cljs.core.truth_(and__3822__auto____5732))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3822__auto____5732;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3824__auto____5733 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____5733))
{return or__3824__auto____5733;
} else
{var or__3824__auto____5734 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3824__auto____5734))
{return or__3824__auto____5734;
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
return register_service__5735.call(this,this$,service_name,fn);
case  4 :
return register_service__5736.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__5738 = null;
var G__5738__5739 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__5738__5740 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__5738__5741 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__5738__5742 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__5738 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__5738__5739.call(this,this$);
case  2 :
return G__5738__5740.call(this,this$,on_connect_fn);
case  3 :
return G__5738__5741.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__5738__5742.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5738;
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
var G__5744 = null;
var G__5744__5745 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__5744__5746 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__5744 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__5744__5745.call(this,this$,service_name,fn);
case  4 :
return G__5744__5746.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5744;
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
var xpc_connection__5757 = (function (){
var temp__3974__auto____5748 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3974__auto____5748))
{var config__5749 = temp__3974__auto____5748;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__5749)));
} else
{return null;
}
});
var xpc_connection__5758 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__5750){
var vec__5751__5752 = p__5750;
var k__5753 = cljs.core.nth.call(null,vec__5751__5752,0,null);
var v__5754 = cljs.core.nth.call(null,vec__5751__5752,1,null);

var temp__3971__auto____5755 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__5753);

if(cljs.core.truth_(temp__3971__auto____5755))
{var field__5756 = temp__3971__auto____5755;

return cljs.core.assoc.call(null,sum,field__5756,v__5754);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__5757.call(this);
case  1 :
return xpc_connection__5758.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
