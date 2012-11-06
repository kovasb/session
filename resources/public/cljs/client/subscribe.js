goog.provide('session.client.subscribe');
goog.require('cljs.core');
session.client.subscribe.ISubscribe = {};
session.client.subscribe.receive = (function receive(this$,msg){
if((function (){var and__3822__auto____73049 = this$;
if(and__3822__auto____73049)
{return this$.session$client$subscribe$ISubscribe$receive$arity$2;
} else
{return and__3822__auto____73049;
}
})())
{return this$.session$client$subscribe$ISubscribe$receive$arity$2(this$,msg);
} else
{var x__2363__auto____73050 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____73051 = (session.client.subscribe.receive[goog.typeOf(x__2363__auto____73050)]);
if(or__3824__auto____73051)
{return or__3824__auto____73051;
} else
{var or__3824__auto____73052 = (session.client.subscribe.receive["_"]);
if(or__3824__auto____73052)
{return or__3824__auto____73052;
} else
{throw cljs.core.missing_protocol.call(null,"ISubscribe.receive",this$);
}
}
})().call(null,this$,msg);
}
});
session.client.subscribe.ws = (new WebSocket("ws://localhost:8090/service"));
session.client.subscribe.callbacks = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
session.client.subscribe.subscribe_BANG_ = (function subscribe_BANG_(id,target){
return cljs.core.swap_BANG_.call(null,session.client.subscribe.callbacks,cljs.core.assoc,id,(function (p1__73053_SHARP_){
return session.client.subscribe.receive.call(null,target,p1__73053_SHARP_);
}));
});
(session.client.subscribe.ws["onmessage"] = (function (e){
var data__73054 = cljs.reader.read_string.call(null,e.data);
return cljs.core.deref.call(null,session.client.subscribe.callbacks).call(null,(new cljs.core.Keyword("\uFDD0'id")).call(null,data__73054)).call(null,data__73054);
}));
session.client.subscribe.send_BANG_ = (function send_BANG_(msg){
return session.client.subscribe.ws.send(cljs.core.pr_str.call(null,msg));
});
