goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3824__auto____4306 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3824__auto____4306))
{return or__3824__auto____4306;
} else
{var or__3824__auto____4307 = (p["_"]);

if(cljs.core.truth_(or__3824__auto____4307))
{return or__3824__auto____4307;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__4371 = (function (this$){
if(cljs.core.truth_((function (){var and__3822__auto____4308 = this$;

if(cljs.core.truth_(and__3822__auto____4308))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4308;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3824__auto____4309 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4309))
{return or__3824__auto____4309;
} else
{var or__3824__auto____4310 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4310))
{return or__3824__auto____4310;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__4372 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3822__auto____4311 = this$;

if(cljs.core.truth_(and__3822__auto____4311))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4311;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3824__auto____4312 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4312))
{return or__3824__auto____4312;
} else
{var or__3824__auto____4313 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4313))
{return or__3824__auto____4313;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__4373 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3822__auto____4314 = this$;

if(cljs.core.truth_(and__3822__auto____4314))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4314;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3824__auto____4315 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4315))
{return or__3824__auto____4315;
} else
{var or__3824__auto____4316 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4316))
{return or__3824__auto____4316;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4374 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3822__auto____4317 = this$;

if(cljs.core.truth_(and__3822__auto____4317))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4317;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3824__auto____4318 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4318))
{return or__3824__auto____4318;
} else
{var or__3824__auto____4319 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4319))
{return or__3824__auto____4319;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__4375 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3822__auto____4320 = this$;

if(cljs.core.truth_(and__3822__auto____4320))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4320;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____4321 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4321))
{return or__3824__auto____4321;
} else
{var or__3824__auto____4322 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4322))
{return or__3824__auto____4322;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__4376 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3822__auto____4323 = this$;

if(cljs.core.truth_(and__3822__auto____4323))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4323;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____4324 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4324))
{return or__3824__auto____4324;
} else
{var or__3824__auto____4325 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4325))
{return or__3824__auto____4325;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__4377 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3822__auto____4326 = this$;

if(cljs.core.truth_(and__3822__auto____4326))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4326;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____4327 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4327))
{return or__3824__auto____4327;
} else
{var or__3824__auto____4328 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4328))
{return or__3824__auto____4328;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__4378 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3822__auto____4329 = this$;

if(cljs.core.truth_(and__3822__auto____4329))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4329;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____4330 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4330))
{return or__3824__auto____4330;
} else
{var or__3824__auto____4331 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4331))
{return or__3824__auto____4331;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__4379 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3822__auto____4332 = this$;

if(cljs.core.truth_(and__3822__auto____4332))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4332;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____4333 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4333))
{return or__3824__auto____4333;
} else
{var or__3824__auto____4334 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4334))
{return or__3824__auto____4334;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__4380 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3822__auto____4335 = this$;

if(cljs.core.truth_(and__3822__auto____4335))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4335;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____4336 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4336))
{return or__3824__auto____4336;
} else
{var or__3824__auto____4337 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4337))
{return or__3824__auto____4337;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__4381 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3822__auto____4338 = this$;

if(cljs.core.truth_(and__3822__auto____4338))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4338;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____4339 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4339))
{return or__3824__auto____4339;
} else
{var or__3824__auto____4340 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4340))
{return or__3824__auto____4340;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__4382 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3822__auto____4341 = this$;

if(cljs.core.truth_(and__3822__auto____4341))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4341;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____4342 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4342))
{return or__3824__auto____4342;
} else
{var or__3824__auto____4343 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4343))
{return or__3824__auto____4343;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__4383 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3822__auto____4344 = this$;

if(cljs.core.truth_(and__3822__auto____4344))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4344;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____4345 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4345))
{return or__3824__auto____4345;
} else
{var or__3824__auto____4346 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4346))
{return or__3824__auto____4346;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__4384 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3822__auto____4347 = this$;

if(cljs.core.truth_(and__3822__auto____4347))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4347;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____4348 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4348))
{return or__3824__auto____4348;
} else
{var or__3824__auto____4349 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4349))
{return or__3824__auto____4349;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__4385 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3822__auto____4350 = this$;

if(cljs.core.truth_(and__3822__auto____4350))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4350;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____4351 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4351))
{return or__3824__auto____4351;
} else
{var or__3824__auto____4352 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4352))
{return or__3824__auto____4352;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__4386 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3822__auto____4353 = this$;

if(cljs.core.truth_(and__3822__auto____4353))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4353;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____4354 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4354))
{return or__3824__auto____4354;
} else
{var or__3824__auto____4355 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4355))
{return or__3824__auto____4355;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__4387 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3822__auto____4356 = this$;

if(cljs.core.truth_(and__3822__auto____4356))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4356;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____4357 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4357))
{return or__3824__auto____4357;
} else
{var or__3824__auto____4358 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4358))
{return or__3824__auto____4358;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__4388 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3822__auto____4359 = this$;

if(cljs.core.truth_(and__3822__auto____4359))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4359;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____4360 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4360))
{return or__3824__auto____4360;
} else
{var or__3824__auto____4361 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4361))
{return or__3824__auto____4361;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__4389 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3822__auto____4362 = this$;

if(cljs.core.truth_(and__3822__auto____4362))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4362;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____4363 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4363))
{return or__3824__auto____4363;
} else
{var or__3824__auto____4364 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4364))
{return or__3824__auto____4364;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__4390 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3822__auto____4365 = this$;

if(cljs.core.truth_(and__3822__auto____4365))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4365;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____4366 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4366))
{return or__3824__auto____4366;
} else
{var or__3824__auto____4367 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4367))
{return or__3824__auto____4367;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__4391 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3822__auto____4368 = this$;

if(cljs.core.truth_(and__3822__auto____4368))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4368;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____4369 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4369))
{return or__3824__auto____4369;
} else
{var or__3824__auto____4370 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4370))
{return or__3824__auto____4370;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__4371.call(this,this$);
case  2 :
return _invoke__4372.call(this,this$,a);
case  3 :
return _invoke__4373.call(this,this$,a,b);
case  4 :
return _invoke__4374.call(this,this$,a,b,c);
case  5 :
return _invoke__4375.call(this,this$,a,b,c,d);
case  6 :
return _invoke__4376.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__4377.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__4378.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__4379.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__4380.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__4381.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__4382.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__4383.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__4384.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__4385.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__4386.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__4387.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__4388.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__4389.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__4390.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__4391.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3822__auto____4393 = coll;

if(cljs.core.truth_(and__3822__auto____4393))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3822__auto____4393;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3824__auto____4394 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4394))
{return or__3824__auto____4394;
} else
{var or__3824__auto____4395 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3824__auto____4395))
{return or__3824__auto____4395;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3822__auto____4396 = coll;

if(cljs.core.truth_(and__3822__auto____4396))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3822__auto____4396;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3824__auto____4397 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4397))
{return or__3824__auto____4397;
} else
{var or__3824__auto____4398 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3824__auto____4398))
{return or__3824__auto____4398;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3822__auto____4399 = coll;

if(cljs.core.truth_(and__3822__auto____4399))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3822__auto____4399;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3824__auto____4400 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4400))
{return or__3824__auto____4400;
} else
{var or__3824__auto____4401 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3824__auto____4401))
{return or__3824__auto____4401;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__4408 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3822__auto____4402 = coll;

if(cljs.core.truth_(and__3822__auto____4402))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3822__auto____4402;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3824__auto____4403 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4403))
{return or__3824__auto____4403;
} else
{var or__3824__auto____4404 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3824__auto____4404))
{return or__3824__auto____4404;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__4409 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3822__auto____4405 = coll;

if(cljs.core.truth_(and__3822__auto____4405))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3822__auto____4405;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3824__auto____4406 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4406))
{return or__3824__auto____4406;
} else
{var or__3824__auto____4407 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3824__auto____4407))
{return or__3824__auto____4407;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__4408.call(this,coll,n);
case  3 :
return _nth__4409.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3822__auto____4411 = coll;

if(cljs.core.truth_(and__3822__auto____4411))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3822__auto____4411;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3824__auto____4412 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4412))
{return or__3824__auto____4412;
} else
{var or__3824__auto____4413 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3824__auto____4413))
{return or__3824__auto____4413;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3822__auto____4414 = coll;

if(cljs.core.truth_(and__3822__auto____4414))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3822__auto____4414;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3824__auto____4415 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4415))
{return or__3824__auto____4415;
} else
{var or__3824__auto____4416 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3824__auto____4416))
{return or__3824__auto____4416;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__4423 = (function (o,k){
if(cljs.core.truth_((function (){var and__3822__auto____4417 = o;

if(cljs.core.truth_(and__3822__auto____4417))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3822__auto____4417;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3824__auto____4418 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4418))
{return or__3824__auto____4418;
} else
{var or__3824__auto____4419 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3824__auto____4419))
{return or__3824__auto____4419;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__4424 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3822__auto____4420 = o;

if(cljs.core.truth_(and__3822__auto____4420))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3822__auto____4420;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3824__auto____4421 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4421))
{return or__3824__auto____4421;
} else
{var or__3824__auto____4422 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3824__auto____4422))
{return or__3824__auto____4422;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__4423.call(this,o,k);
case  3 :
return _lookup__4424.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____4426 = coll;

if(cljs.core.truth_(and__3822__auto____4426))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3822__auto____4426;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3824__auto____4427 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4427))
{return or__3824__auto____4427;
} else
{var or__3824__auto____4428 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3824__auto____4428))
{return or__3824__auto____4428;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3822__auto____4429 = coll;

if(cljs.core.truth_(and__3822__auto____4429))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3822__auto____4429;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3824__auto____4430 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4430))
{return or__3824__auto____4430;
} else
{var or__3824__auto____4431 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3824__auto____4431))
{return or__3824__auto____4431;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____4432 = coll;

if(cljs.core.truth_(and__3822__auto____4432))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3822__auto____4432;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3824__auto____4433 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4433))
{return or__3824__auto____4433;
} else
{var or__3824__auto____4434 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3824__auto____4434))
{return or__3824__auto____4434;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3822__auto____4435 = coll;

if(cljs.core.truth_(and__3822__auto____4435))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3822__auto____4435;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3824__auto____4436 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4436))
{return or__3824__auto____4436;
} else
{var or__3824__auto____4437 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3824__auto____4437))
{return or__3824__auto____4437;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3822__auto____4438 = coll;

if(cljs.core.truth_(and__3822__auto____4438))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3822__auto____4438;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3824__auto____4439 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4439))
{return or__3824__auto____4439;
} else
{var or__3824__auto____4440 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3824__auto____4440))
{return or__3824__auto____4440;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3822__auto____4441 = coll;

if(cljs.core.truth_(and__3822__auto____4441))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3822__auto____4441;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3824__auto____4442 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4442))
{return or__3824__auto____4442;
} else
{var or__3824__auto____4443 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3824__auto____4443))
{return or__3824__auto____4443;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3822__auto____4444 = coll;

if(cljs.core.truth_(and__3822__auto____4444))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3822__auto____4444;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3824__auto____4445 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4445))
{return or__3824__auto____4445;
} else
{var or__3824__auto____4446 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3824__auto____4446))
{return or__3824__auto____4446;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3822__auto____4447 = o;

if(cljs.core.truth_(and__3822__auto____4447))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3822__auto____4447;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3824__auto____4448 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4448))
{return or__3824__auto____4448;
} else
{var or__3824__auto____4449 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3824__auto____4449))
{return or__3824__auto____4449;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3822__auto____4450 = o;

if(cljs.core.truth_(and__3822__auto____4450))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3822__auto____4450;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____4451 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4451))
{return or__3824__auto____4451;
} else
{var or__3824__auto____4452 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3824__auto____4452))
{return or__3824__auto____4452;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3822__auto____4453 = o;

if(cljs.core.truth_(and__3822__auto____4453))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3822__auto____4453;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3824__auto____4454 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4454))
{return or__3824__auto____4454;
} else
{var or__3824__auto____4455 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3824__auto____4455))
{return or__3824__auto____4455;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3822__auto____4456 = o;

if(cljs.core.truth_(and__3822__auto____4456))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3822__auto____4456;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3824__auto____4457 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4457))
{return or__3824__auto____4457;
} else
{var or__3824__auto____4458 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3824__auto____4458))
{return or__3824__auto____4458;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__4465 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3822__auto____4459 = coll;

if(cljs.core.truth_(and__3822__auto____4459))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3822__auto____4459;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3824__auto____4460 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4460))
{return or__3824__auto____4460;
} else
{var or__3824__auto____4461 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3824__auto____4461))
{return or__3824__auto____4461;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__4466 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3822__auto____4462 = coll;

if(cljs.core.truth_(and__3822__auto____4462))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3822__auto____4462;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3824__auto____4463 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4463))
{return or__3824__auto____4463;
} else
{var or__3824__auto____4464 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3824__auto____4464))
{return or__3824__auto____4464;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__4465.call(this,coll,f);
case  3 :
return _reduce__4466.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3822__auto____4468 = o;

if(cljs.core.truth_(and__3822__auto____4468))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3822__auto____4468;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3824__auto____4469 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4469))
{return or__3824__auto____4469;
} else
{var or__3824__auto____4470 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3824__auto____4470))
{return or__3824__auto____4470;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3822__auto____4471 = o;

if(cljs.core.truth_(and__3822__auto____4471))
{return o.cljs$core$IHash$_hash;
} else
{return and__3822__auto____4471;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3824__auto____4472 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4472))
{return or__3824__auto____4472;
} else
{var or__3824__auto____4473 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3824__auto____4473))
{return or__3824__auto____4473;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3822__auto____4474 = o;

if(cljs.core.truth_(and__3822__auto____4474))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3822__auto____4474;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3824__auto____4475 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4475))
{return or__3824__auto____4475;
} else
{var or__3824__auto____4476 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3824__auto____4476))
{return or__3824__auto____4476;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3822__auto____4477 = o;

if(cljs.core.truth_(and__3822__auto____4477))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3822__auto____4477;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3824__auto____4478 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4478))
{return or__3824__auto____4478;
} else
{var or__3824__auto____4479 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3824__auto____4479))
{return or__3824__auto____4479;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3822__auto____4480 = d;

if(cljs.core.truth_(and__3822__auto____4480))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3822__auto____4480;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3824__auto____4481 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3824__auto____4481))
{return or__3824__auto____4481;
} else
{var or__3824__auto____4482 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3824__auto____4482))
{return or__3824__auto____4482;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3822__auto____4483 = this$;

if(cljs.core.truth_(and__3822__auto____4483))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3822__auto____4483;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____4484 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4484))
{return or__3824__auto____4484;
} else
{var or__3824__auto____4485 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3824__auto____4485))
{return or__3824__auto____4485;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3822__auto____4486 = this$;

if(cljs.core.truth_(and__3822__auto____4486))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3822__auto____4486;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3824__auto____4487 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4487))
{return or__3824__auto____4487;
} else
{var or__3824__auto____4488 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3824__auto____4488))
{return or__3824__auto____4488;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3822__auto____4489 = this$;

if(cljs.core.truth_(and__3822__auto____4489))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3822__auto____4489;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3824__auto____4490 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4490))
{return or__3824__auto____4490;
} else
{var or__3824__auto____4491 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3824__auto____4491))
{return or__3824__auto____4491;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__4492 = null;
var G__4492__4493 = (function (o,k){
return null;
});
var G__4492__4494 = (function (o,k,not_found){
return not_found;
});
G__4492 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__4492__4493.call(this,o,k);
case  3 :
return G__4492__4494.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4492;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__4496 = null;
var G__4496__4497 = (function (_,f){
return f.call(null);
});
var G__4496__4498 = (function (_,f,start){
return start;
});
G__4496 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__4496__4497.call(this,_,f);
case  3 :
return G__4496__4498.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4496;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o === null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__4500 = null;
var G__4500__4501 = (function (_,n){
return null;
});
var G__4500__4502 = (function (_,n,not_found){
return not_found;
});
G__4500 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__4500__4501.call(this,_,n);
case  3 :
return G__4500__4502.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4500;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__4510 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__4504 = cljs.core._nth.call(null,cicoll,0);
var n__4505 = 1;

while(true){
if(cljs.core.truth_((n__4505 < cljs.core._count.call(null,cicoll))))
{{
var G__4514 = f.call(null,val__4504,cljs.core._nth.call(null,cicoll,n__4505));
var G__4515 = (n__4505 + 1);
val__4504 = G__4514;
n__4505 = G__4515;
continue;
}
} else
{return val__4504;
}
break;
}
}
});
var ci_reduce__4511 = (function (cicoll,f,val){
var val__4506 = val;
var n__4507 = 0;

while(true){
if(cljs.core.truth_((n__4507 < cljs.core._count.call(null,cicoll))))
{{
var G__4516 = f.call(null,val__4506,cljs.core._nth.call(null,cicoll,n__4507));
var G__4517 = (n__4507 + 1);
val__4506 = G__4516;
n__4507 = G__4517;
continue;
}
} else
{return val__4506;
}
break;
}
});
var ci_reduce__4512 = (function (cicoll,f,val,idx){
var val__4508 = val;
var n__4509 = idx;

while(true){
if(cljs.core.truth_((n__4509 < cljs.core._count.call(null,cicoll))))
{{
var G__4518 = f.call(null,val__4508,cljs.core._nth.call(null,cicoll,n__4509));
var G__4519 = (n__4509 + 1);
val__4508 = G__4518;
n__4509 = G__4519;
continue;
}
} else
{return val__4508;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__4510.call(this,cicoll,f);
case  3 :
return ci_reduce__4511.call(this,cicoll,f,val);
case  4 :
return ci_reduce__4512.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4520 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4533 = null;
var G__4533__4534 = (function (_,f){
var this__4521 = this;
return cljs.core.ci_reduce.call(null,this__4521.a,f,(this__4521.a[this__4521.i]),(this__4521.i + 1));
});
var G__4533__4535 = (function (_,f,start){
var this__4522 = this;
return cljs.core.ci_reduce.call(null,this__4522.a,f,start,this__4522.i);
});
G__4533 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__4533__4534.call(this,_,f);
case  3 :
return G__4533__4535.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4533;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4523 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4524 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4537 = null;
var G__4537__4538 = (function (coll,n){
var this__4525 = this;
var i__4526 = (n + this__4525.i);

if(cljs.core.truth_((i__4526 < this__4525.a.length)))
{return (this__4525.a[i__4526]);
} else
{return null;
}
});
var G__4537__4539 = (function (coll,n,not_found){
var this__4527 = this;
var i__4528 = (n + this__4527.i);

if(cljs.core.truth_((i__4528 < this__4527.a.length)))
{return (this__4527.a[i__4528]);
} else
{return not_found;
}
});
G__4537 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4537__4538.call(this,coll,n);
case  3 :
return G__4537__4539.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4537;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__4529 = this;
return (this__4529.a.length - this__4529.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__4530 = this;
return (this__4530.a[this__4530.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__4531 = this;
if(cljs.core.truth_(((this__4531.i + 1) < this__4531.a.length)))
{return (new cljs.core.IndexedSeq(this__4531.a,(this__4531.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__4532 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__4541 = null;
var G__4541__4542 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__4541__4543 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__4541 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__4541__4542.call(this,array,f);
case  3 :
return G__4541__4543.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4541;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__4545 = null;
var G__4545__4546 = (function (array,k){
return (array[k]);
});
var G__4545__4547 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__4545 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__4545__4546.call(this,array,k);
case  3 :
return G__4545__4547.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4545;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__4549 = null;
var G__4549__4550 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__4549__4551 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__4549 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__4549__4550.call(this,array,n);
case  3 :
return G__4549__4551.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4549;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3974__auto____4553 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4553))
{var s__4554 = temp__3974__auto____4553;

return cljs.core._first.call(null,s__4554);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__4555 = cljs.core.next.call(null,s);
s = G__4555;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__4556 = cljs.core.seq.call(null,x);
var n__4557 = 0;

while(true){
if(cljs.core.truth_(s__4556))
{{
var G__4558 = cljs.core.next.call(null,s__4556);
var G__4559 = (n__4557 + 1);
s__4556 = G__4558;
n__4557 = G__4559;
continue;
}
} else
{return n__4557;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__4560 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__4561 = (function() { 
var G__4563__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__4564 = conj.call(null,coll,x);
var G__4565 = cljs.core.first.call(null,xs);
var G__4566 = cljs.core.next.call(null,xs);
coll = G__4564;
x = G__4565;
xs = G__4566;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__4563 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4563__delegate.call(this, coll, x, xs);
};
G__4563.cljs$lang$maxFixedArity = 2;
G__4563.cljs$lang$applyTo = (function (arglist__4567){
var coll = cljs.core.first(arglist__4567);
var x = cljs.core.first(cljs.core.next(arglist__4567));
var xs = cljs.core.rest(cljs.core.next(arglist__4567));
return G__4563__delegate.call(this, coll, x, xs);
});
return G__4563;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__4560.call(this,coll,x);
default:
return conj__4561.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__4561.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__4568 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__4569 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__4568.call(this,coll,n);
case  3 :
return nth__4569.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__4571 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__4572 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__4571.call(this,o,k);
case  3 :
return get__4572.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__4575 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4576 = (function() { 
var G__4578__delegate = function (coll,k,v,kvs){
while(true){
var ret__4574 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__4579 = ret__4574;
var G__4580 = cljs.core.first.call(null,kvs);
var G__4581 = cljs.core.second.call(null,kvs);
var G__4582 = cljs.core.nnext.call(null,kvs);
coll = G__4579;
k = G__4580;
v = G__4581;
kvs = G__4582;
continue;
}
} else
{return ret__4574;
}
break;
}
};
var G__4578 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4578__delegate.call(this, coll, k, v, kvs);
};
G__4578.cljs$lang$maxFixedArity = 3;
G__4578.cljs$lang$applyTo = (function (arglist__4583){
var coll = cljs.core.first(arglist__4583);
var k = cljs.core.first(cljs.core.next(arglist__4583));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4583)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4583)));
return G__4578__delegate.call(this, coll, k, v, kvs);
});
return G__4578;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__4575.call(this,coll,k,v);
default:
return assoc__4576.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4576.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__4585 = (function (coll){
return coll;
});
var dissoc__4586 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__4587 = (function() { 
var G__4589__delegate = function (coll,k,ks){
while(true){
var ret__4584 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__4590 = ret__4584;
var G__4591 = cljs.core.first.call(null,ks);
var G__4592 = cljs.core.next.call(null,ks);
coll = G__4590;
k = G__4591;
ks = G__4592;
continue;
}
} else
{return ret__4584;
}
break;
}
};
var G__4589 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4589__delegate.call(this, coll, k, ks);
};
G__4589.cljs$lang$maxFixedArity = 2;
G__4589.cljs$lang$applyTo = (function (arglist__4593){
var coll = cljs.core.first(arglist__4593);
var k = cljs.core.first(cljs.core.next(arglist__4593));
var ks = cljs.core.rest(cljs.core.next(arglist__4593));
return G__4589__delegate.call(this, coll, k, ks);
});
return G__4589;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__4585.call(this,coll);
case  2 :
return dissoc__4586.call(this,coll,k);
default:
return dissoc__4587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__4587.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__359__auto____4594 = o;

if(cljs.core.truth_((function (){var and__3822__auto____4595 = x__359__auto____4594;

if(cljs.core.truth_(and__3822__auto____4595))
{var and__3822__auto____4596 = x__359__auto____4594.cljs$core$IMeta$;

if(cljs.core.truth_(and__3822__auto____4596))
{return cljs.core.not.call(null,x__359__auto____4594.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3822__auto____4596;
}
} else
{return and__3822__auto____4595;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__359__auto____4594);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__4598 = (function (coll){
return coll;
});
var disj__4599 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__4600 = (function() { 
var G__4602__delegate = function (coll,k,ks){
while(true){
var ret__4597 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__4603 = ret__4597;
var G__4604 = cljs.core.first.call(null,ks);
var G__4605 = cljs.core.next.call(null,ks);
coll = G__4603;
k = G__4604;
ks = G__4605;
continue;
}
} else
{return ret__4597;
}
break;
}
};
var G__4602 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4602__delegate.call(this, coll, k, ks);
};
G__4602.cljs$lang$maxFixedArity = 2;
G__4602.cljs$lang$applyTo = (function (arglist__4606){
var coll = cljs.core.first(arglist__4606);
var k = cljs.core.first(cljs.core.next(arglist__4606));
var ks = cljs.core.rest(cljs.core.next(arglist__4606));
return G__4602__delegate.call(this, coll, k, ks);
});
return G__4602;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__4598.call(this,coll);
case  2 :
return disj__4599.call(this,coll,k);
default:
return disj__4600.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__4600.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__359__auto____4607 = x;

if(cljs.core.truth_((function (){var and__3822__auto____4608 = x__359__auto____4607;

if(cljs.core.truth_(and__3822__auto____4608))
{var and__3822__auto____4609 = x__359__auto____4607.cljs$core$ICollection$;

if(cljs.core.truth_(and__3822__auto____4609))
{return cljs.core.not.call(null,x__359__auto____4607.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3822__auto____4609;
}
} else
{return and__3822__auto____4608;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__359__auto____4607);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__359__auto____4610 = x;

if(cljs.core.truth_((function (){var and__3822__auto____4611 = x__359__auto____4610;

if(cljs.core.truth_(and__3822__auto____4611))
{var and__3822__auto____4612 = x__359__auto____4610.cljs$core$ISet$;

if(cljs.core.truth_(and__3822__auto____4612))
{return cljs.core.not.call(null,x__359__auto____4610.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3822__auto____4612;
}
} else
{return and__3822__auto____4611;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__359__auto____4610);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__359__auto____4613 = x;

if(cljs.core.truth_((function (){var and__3822__auto____4614 = x__359__auto____4613;

if(cljs.core.truth_(and__3822__auto____4614))
{var and__3822__auto____4615 = x__359__auto____4613.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3822__auto____4615))
{return cljs.core.not.call(null,x__359__auto____4613.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3822__auto____4615;
}
} else
{return and__3822__auto____4614;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__359__auto____4613);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__359__auto____4616 = x;

if(cljs.core.truth_((function (){var and__3822__auto____4617 = x__359__auto____4616;

if(cljs.core.truth_(and__3822__auto____4617))
{var and__3822__auto____4618 = x__359__auto____4616.cljs$core$ISequential$;

if(cljs.core.truth_(and__3822__auto____4618))
{return cljs.core.not.call(null,x__359__auto____4616.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3822__auto____4618;
}
} else
{return and__3822__auto____4617;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__359__auto____4616);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__359__auto____4619 = x;

if(cljs.core.truth_((function (){var and__3822__auto____4620 = x__359__auto____4619;

if(cljs.core.truth_(and__3822__auto____4620))
{var and__3822__auto____4621 = x__359__auto____4619.cljs$core$ICounted$;

if(cljs.core.truth_(and__3822__auto____4621))
{return cljs.core.not.call(null,x__359__auto____4619.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3822__auto____4621;
}
} else
{return and__3822__auto____4620;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__359__auto____4619);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__359__auto____4622 = x;

if(cljs.core.truth_((function (){var and__3822__auto____4623 = x__359__auto____4622;

if(cljs.core.truth_(and__3822__auto____4623))
{var and__3822__auto____4624 = x__359__auto____4622.cljs$core$IMap$;

if(cljs.core.truth_(and__3822__auto____4624))
{return cljs.core.not.call(null,x__359__auto____4622.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3822__auto____4624;
}
} else
{return and__3822__auto____4623;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__359__auto____4622);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__359__auto____4625 = x;

if(cljs.core.truth_((function (){var and__3822__auto____4626 = x__359__auto____4625;

if(cljs.core.truth_(and__3822__auto____4626))
{var and__3822__auto____4627 = x__359__auto____4625.cljs$core$IVector$;

if(cljs.core.truth_(and__3822__auto____4627))
{return cljs.core.not.call(null,x__359__auto____4625.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3822__auto____4627;
}
} else
{return and__3822__auto____4626;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__359__auto____4625);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__4628 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__4628.push(key);
}));
return keys__4628;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_((s === null)))
{return false;
} else
{var x__359__auto____4629 = s;

if(cljs.core.truth_((function (){var and__3822__auto____4630 = x__359__auto____4629;

if(cljs.core.truth_(and__3822__auto____4630))
{var and__3822__auto____4631 = x__359__auto____4629.cljs$core$ISeq$;

if(cljs.core.truth_(and__3822__auto____4631))
{return cljs.core.not.call(null,x__359__auto____4629.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3822__auto____4631;
}
} else
{return and__3822__auto____4630;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__359__auto____4629);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____4632 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3822__auto____4632))
{return cljs.core.not.call(null,(function (){var or__3824__auto____4633 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3824__auto____4633))
{return or__3824__auto____4633;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3822__auto____4632;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____4634 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3822__auto____4634))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3822__auto____4634;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____4635 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3822__auto____4635))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3822__auto____4635;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____4636 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3822__auto____4636))
{return (n == n.toFixed());
} else
{return and__3822__auto____4636;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____4637 = coll;

if(cljs.core.truth_(and__3822__auto____4637))
{var and__3822__auto____4638 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3822__auto____4638))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____4638;
}
} else
{return and__3822__auto____4637;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___4643 = (function (x){
return true;
});
var distinct_QMARK___4644 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___4645 = (function() { 
var G__4647__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__4639 = cljs.core.set([y,x]);
var xs__4640 = more;

while(true){
var x__4641 = cljs.core.first.call(null,xs__4640);
var etc__4642 = cljs.core.next.call(null,xs__4640);

if(cljs.core.truth_(xs__4640))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__4639,x__4641)))
{return false;
} else
{{
var G__4648 = cljs.core.conj.call(null,s__4639,x__4641);
var G__4649 = etc__4642;
s__4639 = G__4648;
xs__4640 = G__4649;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__4647 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4647__delegate.call(this, x, y, more);
};
G__4647.cljs$lang$maxFixedArity = 2;
G__4647.cljs$lang$applyTo = (function (arglist__4650){
var x = cljs.core.first(arglist__4650);
var y = cljs.core.first(cljs.core.next(arglist__4650));
var more = cljs.core.rest(cljs.core.next(arglist__4650));
return G__4647__delegate.call(this, x, y, more);
});
return G__4647;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___4643.call(this,x);
case  2 :
return distinct_QMARK___4644.call(this,x,y);
default:
return distinct_QMARK___4645.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___4645.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__4651 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__4651)))
{return r__4651;
} else
{if(cljs.core.truth_(r__4651))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__4653 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__4654 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__4652 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__4652,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__4652);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__4653.call(this,comp);
case  2 :
return sort__4654.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__4656 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__4657 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__4656.call(this,keyfn,comp);
case  3 :
return sort_by__4657.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__4659 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__4660 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__4659.call(this,f,val);
case  3 :
return reduce__4660.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__4666 = (function (f,coll){
var temp__3971__auto____4662 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3971__auto____4662))
{var s__4663 = temp__3971__auto____4662;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__4663),cljs.core.next.call(null,s__4663));
} else
{return f.call(null);
}
});
var seq_reduce__4667 = (function (f,val,coll){
var val__4664 = val;
var coll__4665 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__4665))
{{
var G__4669 = f.call(null,val__4664,cljs.core.first.call(null,coll__4665));
var G__4670 = cljs.core.next.call(null,coll__4665);
val__4664 = G__4669;
coll__4665 = G__4670;
continue;
}
} else
{return val__4664;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__4666.call(this,f,val);
case  3 :
return seq_reduce__4667.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__4671 = null;
var G__4671__4672 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__4671__4673 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__4671 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4671__4672.call(this,coll,f);
case  3 :
return G__4671__4673.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4671;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___4675 = (function (){
return 0;
});
var _PLUS___4676 = (function (x){
return x;
});
var _PLUS___4677 = (function (x,y){
return (x + y);
});
var _PLUS___4678 = (function() { 
var G__4680__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__4680 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4680__delegate.call(this, x, y, more);
};
G__4680.cljs$lang$maxFixedArity = 2;
G__4680.cljs$lang$applyTo = (function (arglist__4681){
var x = cljs.core.first(arglist__4681);
var y = cljs.core.first(cljs.core.next(arglist__4681));
var more = cljs.core.rest(cljs.core.next(arglist__4681));
return G__4680__delegate.call(this, x, y, more);
});
return G__4680;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___4675.call(this);
case  1 :
return _PLUS___4676.call(this,x);
case  2 :
return _PLUS___4677.call(this,x,y);
default:
return _PLUS___4678.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___4678.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___4682 = (function (x){
return (- x);
});
var ___4683 = (function (x,y){
return (x - y);
});
var ___4684 = (function() { 
var G__4686__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__4686 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4686__delegate.call(this, x, y, more);
};
G__4686.cljs$lang$maxFixedArity = 2;
G__4686.cljs$lang$applyTo = (function (arglist__4687){
var x = cljs.core.first(arglist__4687);
var y = cljs.core.first(cljs.core.next(arglist__4687));
var more = cljs.core.rest(cljs.core.next(arglist__4687));
return G__4686__delegate.call(this, x, y, more);
});
return G__4686;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___4682.call(this,x);
case  2 :
return ___4683.call(this,x,y);
default:
return ___4684.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___4684.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___4688 = (function (){
return 1;
});
var _STAR___4689 = (function (x){
return x;
});
var _STAR___4690 = (function (x,y){
return (x * y);
});
var _STAR___4691 = (function() { 
var G__4693__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__4693 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4693__delegate.call(this, x, y, more);
};
G__4693.cljs$lang$maxFixedArity = 2;
G__4693.cljs$lang$applyTo = (function (arglist__4694){
var x = cljs.core.first(arglist__4694);
var y = cljs.core.first(cljs.core.next(arglist__4694));
var more = cljs.core.rest(cljs.core.next(arglist__4694));
return G__4693__delegate.call(this, x, y, more);
});
return G__4693;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___4688.call(this);
case  1 :
return _STAR___4689.call(this,x);
case  2 :
return _STAR___4690.call(this,x,y);
default:
return _STAR___4691.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___4691.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___4695 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___4696 = (function (x,y){
return (x / y);
});
var _SLASH___4697 = (function() { 
var G__4699__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__4699 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4699__delegate.call(this, x, y, more);
};
G__4699.cljs$lang$maxFixedArity = 2;
G__4699.cljs$lang$applyTo = (function (arglist__4700){
var x = cljs.core.first(arglist__4700);
var y = cljs.core.first(cljs.core.next(arglist__4700));
var more = cljs.core.rest(cljs.core.next(arglist__4700));
return G__4699__delegate.call(this, x, y, more);
});
return G__4699;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___4695.call(this,x);
case  2 :
return _SLASH___4696.call(this,x,y);
default:
return _SLASH___4697.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___4697.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___4701 = (function (x){
return true;
});
var _LT___4702 = (function (x,y){
return (x < y);
});
var _LT___4703 = (function() { 
var G__4705__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4706 = y;
var G__4707 = cljs.core.first.call(null,more);
var G__4708 = cljs.core.next.call(null,more);
x = G__4706;
y = G__4707;
more = G__4708;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__4705 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4705__delegate.call(this, x, y, more);
};
G__4705.cljs$lang$maxFixedArity = 2;
G__4705.cljs$lang$applyTo = (function (arglist__4709){
var x = cljs.core.first(arglist__4709);
var y = cljs.core.first(cljs.core.next(arglist__4709));
var more = cljs.core.rest(cljs.core.next(arglist__4709));
return G__4705__delegate.call(this, x, y, more);
});
return G__4705;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___4701.call(this,x);
case  2 :
return _LT___4702.call(this,x,y);
default:
return _LT___4703.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___4703.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___4710 = (function (x){
return true;
});
var _LT__EQ___4711 = (function (x,y){
return (x <= y);
});
var _LT__EQ___4712 = (function() { 
var G__4714__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4715 = y;
var G__4716 = cljs.core.first.call(null,more);
var G__4717 = cljs.core.next.call(null,more);
x = G__4715;
y = G__4716;
more = G__4717;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__4714 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4714__delegate.call(this, x, y, more);
};
G__4714.cljs$lang$maxFixedArity = 2;
G__4714.cljs$lang$applyTo = (function (arglist__4718){
var x = cljs.core.first(arglist__4718);
var y = cljs.core.first(cljs.core.next(arglist__4718));
var more = cljs.core.rest(cljs.core.next(arglist__4718));
return G__4714__delegate.call(this, x, y, more);
});
return G__4714;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___4710.call(this,x);
case  2 :
return _LT__EQ___4711.call(this,x,y);
default:
return _LT__EQ___4712.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___4712.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___4719 = (function (x){
return true;
});
var _GT___4720 = (function (x,y){
return (x > y);
});
var _GT___4721 = (function() { 
var G__4723__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4724 = y;
var G__4725 = cljs.core.first.call(null,more);
var G__4726 = cljs.core.next.call(null,more);
x = G__4724;
y = G__4725;
more = G__4726;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__4723 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4723__delegate.call(this, x, y, more);
};
G__4723.cljs$lang$maxFixedArity = 2;
G__4723.cljs$lang$applyTo = (function (arglist__4727){
var x = cljs.core.first(arglist__4727);
var y = cljs.core.first(cljs.core.next(arglist__4727));
var more = cljs.core.rest(cljs.core.next(arglist__4727));
return G__4723__delegate.call(this, x, y, more);
});
return G__4723;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___4719.call(this,x);
case  2 :
return _GT___4720.call(this,x,y);
default:
return _GT___4721.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___4721.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___4728 = (function (x){
return true;
});
var _GT__EQ___4729 = (function (x,y){
return (x >= y);
});
var _GT__EQ___4730 = (function() { 
var G__4732__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4733 = y;
var G__4734 = cljs.core.first.call(null,more);
var G__4735 = cljs.core.next.call(null,more);
x = G__4733;
y = G__4734;
more = G__4735;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__4732 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4732__delegate.call(this, x, y, more);
};
G__4732.cljs$lang$maxFixedArity = 2;
G__4732.cljs$lang$applyTo = (function (arglist__4736){
var x = cljs.core.first(arglist__4736);
var y = cljs.core.first(cljs.core.next(arglist__4736));
var more = cljs.core.rest(cljs.core.next(arglist__4736));
return G__4732__delegate.call(this, x, y, more);
});
return G__4732;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___4728.call(this,x);
case  2 :
return _GT__EQ___4729.call(this,x,y);
default:
return _GT__EQ___4730.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___4730.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__4737 = (function (x){
return x;
});
var max__4738 = (function (x,y){
return ((x > y) ? x : y);
});
var max__4739 = (function() { 
var G__4741__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__4741 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4741__delegate.call(this, x, y, more);
};
G__4741.cljs$lang$maxFixedArity = 2;
G__4741.cljs$lang$applyTo = (function (arglist__4742){
var x = cljs.core.first(arglist__4742);
var y = cljs.core.first(cljs.core.next(arglist__4742));
var more = cljs.core.rest(cljs.core.next(arglist__4742));
return G__4741__delegate.call(this, x, y, more);
});
return G__4741;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__4737.call(this,x);
case  2 :
return max__4738.call(this,x,y);
default:
return max__4739.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__4739.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__4743 = (function (x){
return x;
});
var min__4744 = (function (x,y){
return ((x < y) ? x : y);
});
var min__4745 = (function() { 
var G__4747__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__4747 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4747__delegate.call(this, x, y, more);
};
G__4747.cljs$lang$maxFixedArity = 2;
G__4747.cljs$lang$applyTo = (function (arglist__4748){
var x = cljs.core.first(arglist__4748);
var y = cljs.core.first(cljs.core.next(arglist__4748));
var more = cljs.core.rest(cljs.core.next(arglist__4748));
return G__4747__delegate.call(this, x, y, more);
});
return G__4747;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__4743.call(this,x);
case  2 :
return min__4744.call(this,x,y);
default:
return min__4745.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__4745.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__4749 = (n % d);

return cljs.core.fix.call(null,((n - rem__4749) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__4750 = cljs.core.quot.call(null,n,d);

return (n - (d * q__4750));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4751 = (function (){
return Math.random.call(null);
});
var rand__4752 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4751.call(this);
case  1 :
return rand__4752.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___4754 = (function (x){
return true;
});
var _EQ__EQ___4755 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___4756 = (function() { 
var G__4758__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4759 = y;
var G__4760 = cljs.core.first.call(null,more);
var G__4761 = cljs.core.next.call(null,more);
x = G__4759;
y = G__4760;
more = G__4761;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__4758 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4758__delegate.call(this, x, y, more);
};
G__4758.cljs$lang$maxFixedArity = 2;
G__4758.cljs$lang$applyTo = (function (arglist__4762){
var x = cljs.core.first(arglist__4762);
var y = cljs.core.first(cljs.core.next(arglist__4762));
var more = cljs.core.rest(cljs.core.next(arglist__4762));
return G__4758__delegate.call(this, x, y, more);
});
return G__4758;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___4754.call(this,x);
case  2 :
return _EQ__EQ___4755.call(this,x,y);
default:
return _EQ__EQ___4756.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___4756.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__4763 = n;
var xs__4764 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3822__auto____4765 = xs__4764;

if(cljs.core.truth_(and__3822__auto____4765))
{return (n__4763 > 0);
} else
{return and__3822__auto____4765;
}
})()))
{{
var G__4766 = (n__4763 - 1);
var G__4767 = cljs.core.next.call(null,xs__4764);
n__4763 = G__4766;
xs__4764 = G__4767;
continue;
}
} else
{return xs__4764;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__4772 = null;
var G__4772__4773 = (function (coll,n){
var temp__3971__auto____4768 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3971__auto____4768))
{var xs__4769 = temp__3971__auto____4768;

return cljs.core.first.call(null,xs__4769);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__4772__4774 = (function (coll,n,not_found){
var temp__3971__auto____4770 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3971__auto____4770))
{var xs__4771 = temp__3971__auto____4770;

return cljs.core.first.call(null,xs__4771);
} else
{return not_found;
}
});
G__4772 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4772__4773.call(this,coll,n);
case  3 :
return G__4772__4774.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4772;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___4776 = (function (){
return "";
});
var str_STAR___4777 = (function (x){
if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___4778 = (function() { 
var G__4780__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__4781 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__4782 = cljs.core.next.call(null,more);
sb = G__4781;
more = G__4782;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__4780 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4780__delegate.call(this, x, ys);
};
G__4780.cljs$lang$maxFixedArity = 1;
G__4780.cljs$lang$applyTo = (function (arglist__4783){
var x = cljs.core.first(arglist__4783);
var ys = cljs.core.rest(arglist__4783);
return G__4780__delegate.call(this, x, ys);
});
return G__4780;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___4776.call(this);
case  1 :
return str_STAR___4777.call(this,x);
default:
return str_STAR___4778.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___4778.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__4784 = (function (){
return "";
});
var str__4785 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__4786 = (function() { 
var G__4788__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__4789 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__4790 = cljs.core.next.call(null,more);
sb = G__4789;
more = G__4790;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__4788 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4788__delegate.call(this, x, ys);
};
G__4788.cljs$lang$maxFixedArity = 1;
G__4788.cljs$lang$applyTo = (function (arglist__4791){
var x = cljs.core.first(arglist__4791);
var ys = cljs.core.rest(arglist__4791);
return G__4788__delegate.call(this, x, ys);
});
return G__4788;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__4784.call(this);
case  1 :
return str__4785.call(this,x);
default:
return str__4786.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__4786.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__4792 = (function (s,start){
return s.substring(start);
});
var subs__4793 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__4792.call(this,s,start);
case  3 :
return subs__4793.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__4795 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__4796 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__4795.call(this,ns);
case  2 :
return symbol__4796.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__4798 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__4799 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__4798.call(this,ns);
case  2 :
return keyword__4799.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__4801 = cljs.core.seq.call(null,x);
var ys__4802 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__4801 === null)))
{return (ys__4802 === null);
} else
{if(cljs.core.truth_((ys__4802 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__4801),cljs.core.first.call(null,ys__4802))))
{{
var G__4803 = cljs.core.next.call(null,xs__4801);
var G__4804 = cljs.core.next.call(null,ys__4802);
xs__4801 = G__4803;
ys__4802 = G__4804;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__4805_SHARP_,p2__4806_SHARP_){
return cljs.core.hash_combine.call(null,p1__4805_SHARP_,cljs.core.hash.call(null,p2__4806_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__4807__4808 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__4807__4808))
{var G__4810__4812 = cljs.core.first.call(null,G__4807__4808);
var vec__4811__4813 = G__4810__4812;
var key_name__4814 = cljs.core.nth.call(null,vec__4811__4813,0,null);
var f__4815 = cljs.core.nth.call(null,vec__4811__4813,1,null);
var G__4807__4816 = G__4807__4808;

var G__4810__4817 = G__4810__4812;
var G__4807__4818 = G__4807__4816;

while(true){
var vec__4819__4820 = G__4810__4817;
var key_name__4821 = cljs.core.nth.call(null,vec__4819__4820,0,null);
var f__4822 = cljs.core.nth.call(null,vec__4819__4820,1,null);
var G__4807__4823 = G__4807__4818;

var str_name__4824 = cljs.core.name.call(null,key_name__4821);

obj[str_name__4824] = f__4822;
var temp__3974__auto____4825 = cljs.core.next.call(null,G__4807__4823);

if(cljs.core.truth_(temp__3974__auto____4825))
{var G__4807__4826 = temp__3974__auto____4825;

{
var G__4827 = cljs.core.first.call(null,G__4807__4826);
var G__4828 = G__4807__4826;
G__4810__4817 = G__4827;
G__4807__4818 = G__4828;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4829 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4830 = this;
return (new cljs.core.List(this__4830.meta,o,coll,(this__4830.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4831 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4832 = this;
return this__4832.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4833 = this;
return this__4833.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4834 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4835 = this;
return this__4835.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4836 = this;
return this__4836.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4837 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4838 = this;
return (new cljs.core.List(meta,this__4838.first,this__4838.rest,this__4838.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4839 = this;
return this__4839.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4840 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4841 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4842 = this;
return (new cljs.core.List(this__4842.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4843 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4844 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4845 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4846 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4847 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4848 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4849 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4850 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4851 = this;
return this__4851.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4852 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__4853){
var items = cljs.core.seq( arglist__4853 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4854 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4855 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4856 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4857 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4857.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4858 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4859 = this;
return this__4859.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4860 = this;
if(cljs.core.truth_((this__4860.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__4860.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4861 = this;
return this__4861.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4862 = this;
return (new cljs.core.Cons(meta,this__4862.first,this__4862.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__4863 = null;
var G__4863__4864 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__4863__4865 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__4863 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__4863__4864.call(this,string,f);
case  3 :
return G__4863__4865.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4863;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__4867 = null;
var G__4867__4868 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__4867__4869 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__4867 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__4867__4868.call(this,string,k);
case  3 :
return G__4867__4869.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4867;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__4871 = null;
var G__4871__4872 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__4871__4873 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__4871 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__4871__4872.call(this,string,n);
case  3 :
return G__4871__4873.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4871;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__4881 = null;
var G__4881__4882 = (function (tsym4875,coll){
var tsym4875__4877 = this;

var this$__4878 = tsym4875__4877;

return cljs.core.get.call(null,coll,this$__4878.toString());
});
var G__4881__4883 = (function (tsym4876,coll,not_found){
var tsym4876__4879 = this;

var this$__4880 = tsym4876__4879;

return cljs.core.get.call(null,coll,this$__4880.toString(),not_found);
});
G__4881 = function(tsym4876,coll,not_found){
switch(arguments.length){
case  2 :
return G__4881__4882.call(this,tsym4876,coll);
case  3 :
return G__4881__4883.call(this,tsym4876,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4881;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__4885 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__4885;
} else
{lazy_seq.x = x__4885.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4886 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4887 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4888 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4889 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4889.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4890 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4891 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4892 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4893 = this;
return this__4893.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4894 = this;
return (new cljs.core.LazySeq(meta,this__4894.realized,this__4894.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__4895 = [];

var s__4896 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4896)))
{ary__4895.push(cljs.core.first.call(null,s__4896));
{
var G__4897 = cljs.core.next.call(null,s__4896);
s__4896 = G__4897;
continue;
}
} else
{return ary__4895;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__4898 = s;
var i__4899 = n;
var sum__4900 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3822__auto____4901 = (i__4899 > 0);

if(cljs.core.truth_(and__3822__auto____4901))
{return cljs.core.seq.call(null,s__4898);
} else
{return and__3822__auto____4901;
}
})()))
{{
var G__4902 = cljs.core.next.call(null,s__4898);
var G__4903 = (i__4899 - 1);
var G__4904 = (sum__4900 + 1);
s__4898 = G__4902;
i__4899 = G__4903;
sum__4900 = G__4904;
continue;
}
} else
{return sum__4900;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_((arglist === null)))
{return null;
} else
{if(cljs.core.truth_((cljs.core.next.call(null,arglist) === null)))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__4908 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__4909 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__4910 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4905 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__4905))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4905),concat.call(null,cljs.core.rest.call(null,s__4905),y));
} else
{return y;
}
})));
});
var concat__4911 = (function() { 
var G__4913__delegate = function (x,y,zs){
var cat__4907 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__4906 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__4906))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__4906),cat.call(null,cljs.core.rest.call(null,xys__4906),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__4907.call(null,concat.call(null,x,y),zs);
};
var G__4913 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4913__delegate.call(this, x, y, zs);
};
G__4913.cljs$lang$maxFixedArity = 2;
G__4913.cljs$lang$applyTo = (function (arglist__4914){
var x = cljs.core.first(arglist__4914);
var y = cljs.core.first(cljs.core.next(arglist__4914));
var zs = cljs.core.rest(cljs.core.next(arglist__4914));
return G__4913__delegate.call(this, x, y, zs);
});
return G__4913;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__4908.call(this);
case  1 :
return concat__4909.call(this,x);
case  2 :
return concat__4910.call(this,x,y);
default:
return concat__4911.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__4911.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___4915 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___4916 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___4917 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4918 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___4919 = (function() { 
var G__4921__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__4921 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4921__delegate.call(this, a, b, c, d, more);
};
G__4921.cljs$lang$maxFixedArity = 4;
G__4921.cljs$lang$applyTo = (function (arglist__4922){
var a = cljs.core.first(arglist__4922);
var b = cljs.core.first(cljs.core.next(arglist__4922));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4922)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4922))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4922))));
return G__4921__delegate.call(this, a, b, c, d, more);
});
return G__4921;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___4915.call(this,a);
case  2 :
return list_STAR___4916.call(this,a,b);
case  3 :
return list_STAR___4917.call(this,a,b,c);
case  4 :
return list_STAR___4918.call(this,a,b,c,d);
default:
return list_STAR___4919.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___4919.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__4932 = (function (f,args){
var fixed_arity__4923 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__4923 + 1)) <= fixed_arity__4923)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__4933 = (function (f,x,args){
var arglist__4924 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__4925 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4924,fixed_arity__4925) <= fixed_arity__4925)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4924));
} else
{return f.cljs$lang$applyTo(arglist__4924);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4924));
}
});
var apply__4934 = (function (f,x,y,args){
var arglist__4926 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__4927 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4926,fixed_arity__4927) <= fixed_arity__4927)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4926));
} else
{return f.cljs$lang$applyTo(arglist__4926);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4926));
}
});
var apply__4935 = (function (f,x,y,z,args){
var arglist__4928 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__4929 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4928,fixed_arity__4929) <= fixed_arity__4929)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4928));
} else
{return f.cljs$lang$applyTo(arglist__4928);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4928));
}
});
var apply__4936 = (function() { 
var G__4938__delegate = function (f,a,b,c,d,args){
var arglist__4930 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__4931 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4930,fixed_arity__4931) <= fixed_arity__4931)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4930));
} else
{return f.cljs$lang$applyTo(arglist__4930);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4930));
}
};
var G__4938 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4938__delegate.call(this, f, a, b, c, d, args);
};
G__4938.cljs$lang$maxFixedArity = 5;
G__4938.cljs$lang$applyTo = (function (arglist__4939){
var f = cljs.core.first(arglist__4939);
var a = cljs.core.first(cljs.core.next(arglist__4939));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4939)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4939))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4939)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4939)))));
return G__4938__delegate.call(this, f, a, b, c, d, args);
});
return G__4938;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__4932.call(this,f,a);
case  3 :
return apply__4933.call(this,f,a,b);
case  4 :
return apply__4934.call(this,f,a,b,c);
case  5 :
return apply__4935.call(this,f,a,b,c,d);
default:
return apply__4936.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__4936.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__4940){
var obj = cljs.core.first(arglist__4940);
var f = cljs.core.first(cljs.core.next(arglist__4940));
var args = cljs.core.rest(cljs.core.next(arglist__4940));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___4941 = (function (x){
return false;
});
var not_EQ___4942 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___4943 = (function() { 
var G__4945__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__4945 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4945__delegate.call(this, x, y, more);
};
G__4945.cljs$lang$maxFixedArity = 2;
G__4945.cljs$lang$applyTo = (function (arglist__4946){
var x = cljs.core.first(arglist__4946);
var y = cljs.core.first(cljs.core.next(arglist__4946));
var more = cljs.core.rest(cljs.core.next(arglist__4946));
return G__4945__delegate.call(this, x, y, more);
});
return G__4945;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___4941.call(this,x);
case  2 :
return not_EQ___4942.call(this,x,y);
default:
return not_EQ___4943.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___4943.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_((cljs.core.seq.call(null,coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__4947 = pred;
var G__4948 = cljs.core.next.call(null,coll);
pred = G__4947;
coll = G__4948;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3824__auto____4949 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3824__auto____4949))
{return or__3824__auto____4949;
} else
{{
var G__4950 = pred;
var G__4951 = cljs.core.next.call(null,coll);
pred = G__4950;
coll = G__4951;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__4952 = null;
var G__4952__4953 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__4952__4954 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__4952__4955 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__4952__4956 = (function() { 
var G__4958__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__4958 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4958__delegate.call(this, x, y, zs);
};
G__4958.cljs$lang$maxFixedArity = 2;
G__4958.cljs$lang$applyTo = (function (arglist__4959){
var x = cljs.core.first(arglist__4959);
var y = cljs.core.first(cljs.core.next(arglist__4959));
var zs = cljs.core.rest(cljs.core.next(arglist__4959));
return G__4958__delegate.call(this, x, y, zs);
});
return G__4958;
})()
;
G__4952 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__4952__4953.call(this);
case  1 :
return G__4952__4954.call(this,x);
case  2 :
return G__4952__4955.call(this,x,y);
default:
return G__4952__4956.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4952.cljs$lang$maxFixedArity = 2;
G__4952.cljs$lang$applyTo = G__4952__4956.cljs$lang$applyTo;
return G__4952;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__4960__delegate = function (args){
return x;
};
var G__4960 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4960__delegate.call(this, args);
};
G__4960.cljs$lang$maxFixedArity = 0;
G__4960.cljs$lang$applyTo = (function (arglist__4961){
var args = cljs.core.seq( arglist__4961 );;
return G__4960__delegate.call(this, args);
});
return G__4960;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__4965 = (function (){
return cljs.core.identity;
});
var comp__4966 = (function (f){
return f;
});
var comp__4967 = (function (f,g){
return (function() {
var G__4971 = null;
var G__4971__4972 = (function (){
return f.call(null,g.call(null));
});
var G__4971__4973 = (function (x){
return f.call(null,g.call(null,x));
});
var G__4971__4974 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__4971__4975 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__4971__4976 = (function() { 
var G__4978__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4978 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4978__delegate.call(this, x, y, z, args);
};
G__4978.cljs$lang$maxFixedArity = 3;
G__4978.cljs$lang$applyTo = (function (arglist__4979){
var x = cljs.core.first(arglist__4979);
var y = cljs.core.first(cljs.core.next(arglist__4979));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4979)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4979)));
return G__4978__delegate.call(this, x, y, z, args);
});
return G__4978;
})()
;
G__4971 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4971__4972.call(this);
case  1 :
return G__4971__4973.call(this,x);
case  2 :
return G__4971__4974.call(this,x,y);
case  3 :
return G__4971__4975.call(this,x,y,z);
default:
return G__4971__4976.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4971.cljs$lang$maxFixedArity = 3;
G__4971.cljs$lang$applyTo = G__4971__4976.cljs$lang$applyTo;
return G__4971;
})()
});
var comp__4968 = (function (f,g,h){
return (function() {
var G__4980 = null;
var G__4980__4981 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__4980__4982 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__4980__4983 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__4980__4984 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__4980__4985 = (function() { 
var G__4987__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__4987 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4987__delegate.call(this, x, y, z, args);
};
G__4987.cljs$lang$maxFixedArity = 3;
G__4987.cljs$lang$applyTo = (function (arglist__4988){
var x = cljs.core.first(arglist__4988);
var y = cljs.core.first(cljs.core.next(arglist__4988));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4988)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4988)));
return G__4987__delegate.call(this, x, y, z, args);
});
return G__4987;
})()
;
G__4980 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4980__4981.call(this);
case  1 :
return G__4980__4982.call(this,x);
case  2 :
return G__4980__4983.call(this,x,y);
case  3 :
return G__4980__4984.call(this,x,y,z);
default:
return G__4980__4985.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4980.cljs$lang$maxFixedArity = 3;
G__4980.cljs$lang$applyTo = G__4980__4985.cljs$lang$applyTo;
return G__4980;
})()
});
var comp__4969 = (function() { 
var G__4989__delegate = function (f1,f2,f3,fs){
var fs__4962 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__4990__delegate = function (args){
var ret__4963 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__4962),args);
var fs__4964 = cljs.core.next.call(null,fs__4962);

while(true){
if(cljs.core.truth_(fs__4964))
{{
var G__4991 = cljs.core.first.call(null,fs__4964).call(null,ret__4963);
var G__4992 = cljs.core.next.call(null,fs__4964);
ret__4963 = G__4991;
fs__4964 = G__4992;
continue;
}
} else
{return ret__4963;
}
break;
}
};
var G__4990 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4990__delegate.call(this, args);
};
G__4990.cljs$lang$maxFixedArity = 0;
G__4990.cljs$lang$applyTo = (function (arglist__4993){
var args = cljs.core.seq( arglist__4993 );;
return G__4990__delegate.call(this, args);
});
return G__4990;
})()
;
};
var G__4989 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4989__delegate.call(this, f1, f2, f3, fs);
};
G__4989.cljs$lang$maxFixedArity = 3;
G__4989.cljs$lang$applyTo = (function (arglist__4994){
var f1 = cljs.core.first(arglist__4994);
var f2 = cljs.core.first(cljs.core.next(arglist__4994));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4994)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4994)));
return G__4989__delegate.call(this, f1, f2, f3, fs);
});
return G__4989;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__4965.call(this);
case  1 :
return comp__4966.call(this,f1);
case  2 :
return comp__4967.call(this,f1,f2);
case  3 :
return comp__4968.call(this,f1,f2,f3);
default:
return comp__4969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4969.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__4995 = (function (f,arg1){
return (function() { 
var G__5000__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__5000 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5000__delegate.call(this, args);
};
G__5000.cljs$lang$maxFixedArity = 0;
G__5000.cljs$lang$applyTo = (function (arglist__5001){
var args = cljs.core.seq( arglist__5001 );;
return G__5000__delegate.call(this, args);
});
return G__5000;
})()
;
});
var partial__4996 = (function (f,arg1,arg2){
return (function() { 
var G__5002__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__5002 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5002__delegate.call(this, args);
};
G__5002.cljs$lang$maxFixedArity = 0;
G__5002.cljs$lang$applyTo = (function (arglist__5003){
var args = cljs.core.seq( arglist__5003 );;
return G__5002__delegate.call(this, args);
});
return G__5002;
})()
;
});
var partial__4997 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__5004__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__5004 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5004__delegate.call(this, args);
};
G__5004.cljs$lang$maxFixedArity = 0;
G__5004.cljs$lang$applyTo = (function (arglist__5005){
var args = cljs.core.seq( arglist__5005 );;
return G__5004__delegate.call(this, args);
});
return G__5004;
})()
;
});
var partial__4998 = (function() { 
var G__5006__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__5007__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__5007 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5007__delegate.call(this, args);
};
G__5007.cljs$lang$maxFixedArity = 0;
G__5007.cljs$lang$applyTo = (function (arglist__5008){
var args = cljs.core.seq( arglist__5008 );;
return G__5007__delegate.call(this, args);
});
return G__5007;
})()
;
};
var G__5006 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__5006__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__5006.cljs$lang$maxFixedArity = 4;
G__5006.cljs$lang$applyTo = (function (arglist__5009){
var f = cljs.core.first(arglist__5009);
var arg1 = cljs.core.first(cljs.core.next(arglist__5009));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5009)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5009))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5009))));
return G__5006__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__5006;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__4995.call(this,f,arg1);
case  3 :
return partial__4996.call(this,f,arg1,arg2);
case  4 :
return partial__4997.call(this,f,arg1,arg2,arg3);
default:
return partial__4998.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__4998.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__5010 = (function (f,x){
return (function() {
var G__5014 = null;
var G__5014__5015 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__5014__5016 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__5014__5017 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__5014__5018 = (function() { 
var G__5020__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__5020 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5020__delegate.call(this, a, b, c, ds);
};
G__5020.cljs$lang$maxFixedArity = 3;
G__5020.cljs$lang$applyTo = (function (arglist__5021){
var a = cljs.core.first(arglist__5021);
var b = cljs.core.first(cljs.core.next(arglist__5021));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5021)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5021)));
return G__5020__delegate.call(this, a, b, c, ds);
});
return G__5020;
})()
;
G__5014 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__5014__5015.call(this,a);
case  2 :
return G__5014__5016.call(this,a,b);
case  3 :
return G__5014__5017.call(this,a,b,c);
default:
return G__5014__5018.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5014.cljs$lang$maxFixedArity = 3;
G__5014.cljs$lang$applyTo = G__5014__5018.cljs$lang$applyTo;
return G__5014;
})()
});
var fnil__5011 = (function (f,x,y){
return (function() {
var G__5022 = null;
var G__5022__5023 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__5022__5024 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__5022__5025 = (function() { 
var G__5027__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__5027 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5027__delegate.call(this, a, b, c, ds);
};
G__5027.cljs$lang$maxFixedArity = 3;
G__5027.cljs$lang$applyTo = (function (arglist__5028){
var a = cljs.core.first(arglist__5028);
var b = cljs.core.first(cljs.core.next(arglist__5028));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5028)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5028)));
return G__5027__delegate.call(this, a, b, c, ds);
});
return G__5027;
})()
;
G__5022 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__5022__5023.call(this,a,b);
case  3 :
return G__5022__5024.call(this,a,b,c);
default:
return G__5022__5025.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5022.cljs$lang$maxFixedArity = 3;
G__5022.cljs$lang$applyTo = G__5022__5025.cljs$lang$applyTo;
return G__5022;
})()
});
var fnil__5012 = (function (f,x,y,z){
return (function() {
var G__5029 = null;
var G__5029__5030 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__5029__5031 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__5029__5032 = (function() { 
var G__5034__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__5034 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5034__delegate.call(this, a, b, c, ds);
};
G__5034.cljs$lang$maxFixedArity = 3;
G__5034.cljs$lang$applyTo = (function (arglist__5035){
var a = cljs.core.first(arglist__5035);
var b = cljs.core.first(cljs.core.next(arglist__5035));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5035)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5035)));
return G__5034__delegate.call(this, a, b, c, ds);
});
return G__5034;
})()
;
G__5029 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__5029__5030.call(this,a,b);
case  3 :
return G__5029__5031.call(this,a,b,c);
default:
return G__5029__5032.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5029.cljs$lang$maxFixedArity = 3;
G__5029.cljs$lang$applyTo = G__5029__5032.cljs$lang$applyTo;
return G__5029;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__5010.call(this,f,x);
case  3 :
return fnil__5011.call(this,f,x,y);
case  4 :
return fnil__5012.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__5038 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5036 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5036))
{var s__5037 = temp__3974__auto____5036;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__5037)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__5037)));
} else
{return null;
}
})));
});

return mapi__5038.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5039 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5039))
{var s__5040 = temp__3974__auto____5039;

var x__5041 = f.call(null,cljs.core.first.call(null,s__5040));

if(cljs.core.truth_((x__5041 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__5040));
} else
{return cljs.core.cons.call(null,x__5041,keep.call(null,f,cljs.core.rest.call(null,s__5040)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__5051 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5048 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5048))
{var s__5049 = temp__3974__auto____5048;

var x__5050 = f.call(null,idx,cljs.core.first.call(null,s__5049));

if(cljs.core.truth_((x__5050 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__5049));
} else
{return cljs.core.cons.call(null,x__5050,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__5049)));
}
} else
{return null;
}
})));
});

return keepi__5051.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__5096 = (function (p){
return (function() {
var ep1 = null;
var ep1__5101 = (function (){
return true;
});
var ep1__5102 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__5103 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5058 = p.call(null,x);

if(cljs.core.truth_(and__3822__auto____5058))
{return p.call(null,y);
} else
{return and__3822__auto____5058;
}
})());
});
var ep1__5104 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5059 = p.call(null,x);

if(cljs.core.truth_(and__3822__auto____5059))
{var and__3822__auto____5060 = p.call(null,y);

if(cljs.core.truth_(and__3822__auto____5060))
{return p.call(null,z);
} else
{return and__3822__auto____5060;
}
} else
{return and__3822__auto____5059;
}
})());
});
var ep1__5105 = (function() { 
var G__5107__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5061 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____5061))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____5061;
}
})());
};
var G__5107 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5107__delegate.call(this, x, y, z, args);
};
G__5107.cljs$lang$maxFixedArity = 3;
G__5107.cljs$lang$applyTo = (function (arglist__5108){
var x = cljs.core.first(arglist__5108);
var y = cljs.core.first(cljs.core.next(arglist__5108));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5108)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5108)));
return G__5107__delegate.call(this, x, y, z, args);
});
return G__5107;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__5101.call(this);
case  1 :
return ep1__5102.call(this,x);
case  2 :
return ep1__5103.call(this,x,y);
case  3 :
return ep1__5104.call(this,x,y,z);
default:
return ep1__5105.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__5105.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__5097 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__5109 = (function (){
return true;
});
var ep2__5110 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5062 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____5062))
{return p2.call(null,x);
} else
{return and__3822__auto____5062;
}
})());
});
var ep2__5111 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5063 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____5063))
{var and__3822__auto____5064 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____5064))
{var and__3822__auto____5065 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____5065))
{return p2.call(null,y);
} else
{return and__3822__auto____5065;
}
} else
{return and__3822__auto____5064;
}
} else
{return and__3822__auto____5063;
}
})());
});
var ep2__5112 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5066 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____5066))
{var and__3822__auto____5067 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____5067))
{var and__3822__auto____5068 = p1.call(null,z);

if(cljs.core.truth_(and__3822__auto____5068))
{var and__3822__auto____5069 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____5069))
{var and__3822__auto____5070 = p2.call(null,y);

if(cljs.core.truth_(and__3822__auto____5070))
{return p2.call(null,z);
} else
{return and__3822__auto____5070;
}
} else
{return and__3822__auto____5069;
}
} else
{return and__3822__auto____5068;
}
} else
{return and__3822__auto____5067;
}
} else
{return and__3822__auto____5066;
}
})());
});
var ep2__5113 = (function() { 
var G__5115__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5071 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____5071))
{return cljs.core.every_QMARK_.call(null,(function (p1__5042_SHARP_){
var and__3822__auto____5072 = p1.call(null,p1__5042_SHARP_);

if(cljs.core.truth_(and__3822__auto____5072))
{return p2.call(null,p1__5042_SHARP_);
} else
{return and__3822__auto____5072;
}
}),args);
} else
{return and__3822__auto____5071;
}
})());
};
var G__5115 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5115__delegate.call(this, x, y, z, args);
};
G__5115.cljs$lang$maxFixedArity = 3;
G__5115.cljs$lang$applyTo = (function (arglist__5116){
var x = cljs.core.first(arglist__5116);
var y = cljs.core.first(cljs.core.next(arglist__5116));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5116)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5116)));
return G__5115__delegate.call(this, x, y, z, args);
});
return G__5115;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__5109.call(this);
case  1 :
return ep2__5110.call(this,x);
case  2 :
return ep2__5111.call(this,x,y);
case  3 :
return ep2__5112.call(this,x,y,z);
default:
return ep2__5113.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__5113.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__5098 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__5117 = (function (){
return true;
});
var ep3__5118 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5073 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____5073))
{var and__3822__auto____5074 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____5074))
{return p3.call(null,x);
} else
{return and__3822__auto____5074;
}
} else
{return and__3822__auto____5073;
}
})());
});
var ep3__5119 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5075 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____5075))
{var and__3822__auto____5076 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____5076))
{var and__3822__auto____5077 = p3.call(null,x);

if(cljs.core.truth_(and__3822__auto____5077))
{var and__3822__auto____5078 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____5078))
{var and__3822__auto____5079 = p2.call(null,y);

if(cljs.core.truth_(and__3822__auto____5079))
{return p3.call(null,y);
} else
{return and__3822__auto____5079;
}
} else
{return and__3822__auto____5078;
}
} else
{return and__3822__auto____5077;
}
} else
{return and__3822__auto____5076;
}
} else
{return and__3822__auto____5075;
}
})());
});
var ep3__5120 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5080 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____5080))
{var and__3822__auto____5081 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____5081))
{var and__3822__auto____5082 = p3.call(null,x);

if(cljs.core.truth_(and__3822__auto____5082))
{var and__3822__auto____5083 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____5083))
{var and__3822__auto____5084 = p2.call(null,y);

if(cljs.core.truth_(and__3822__auto____5084))
{var and__3822__auto____5085 = p3.call(null,y);

if(cljs.core.truth_(and__3822__auto____5085))
{var and__3822__auto____5086 = p1.call(null,z);

if(cljs.core.truth_(and__3822__auto____5086))
{var and__3822__auto____5087 = p2.call(null,z);

if(cljs.core.truth_(and__3822__auto____5087))
{return p3.call(null,z);
} else
{return and__3822__auto____5087;
}
} else
{return and__3822__auto____5086;
}
} else
{return and__3822__auto____5085;
}
} else
{return and__3822__auto____5084;
}
} else
{return and__3822__auto____5083;
}
} else
{return and__3822__auto____5082;
}
} else
{return and__3822__auto____5081;
}
} else
{return and__3822__auto____5080;
}
})());
});
var ep3__5121 = (function() { 
var G__5123__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5088 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____5088))
{return cljs.core.every_QMARK_.call(null,(function (p1__5043_SHARP_){
var and__3822__auto____5089 = p1.call(null,p1__5043_SHARP_);

if(cljs.core.truth_(and__3822__auto____5089))
{var and__3822__auto____5090 = p2.call(null,p1__5043_SHARP_);

if(cljs.core.truth_(and__3822__auto____5090))
{return p3.call(null,p1__5043_SHARP_);
} else
{return and__3822__auto____5090;
}
} else
{return and__3822__auto____5089;
}
}),args);
} else
{return and__3822__auto____5088;
}
})());
};
var G__5123 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5123__delegate.call(this, x, y, z, args);
};
G__5123.cljs$lang$maxFixedArity = 3;
G__5123.cljs$lang$applyTo = (function (arglist__5124){
var x = cljs.core.first(arglist__5124);
var y = cljs.core.first(cljs.core.next(arglist__5124));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5124)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5124)));
return G__5123__delegate.call(this, x, y, z, args);
});
return G__5123;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__5117.call(this);
case  1 :
return ep3__5118.call(this,x);
case  2 :
return ep3__5119.call(this,x,y);
case  3 :
return ep3__5120.call(this,x,y,z);
default:
return ep3__5121.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__5121.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__5099 = (function() { 
var G__5125__delegate = function (p1,p2,p3,ps){
var ps__5091 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__5126 = (function (){
return true;
});
var epn__5127 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__5044_SHARP_){
return p1__5044_SHARP_.call(null,x);
}),ps__5091);
});
var epn__5128 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__5045_SHARP_){
var and__3822__auto____5092 = p1__5045_SHARP_.call(null,x);

if(cljs.core.truth_(and__3822__auto____5092))
{return p1__5045_SHARP_.call(null,y);
} else
{return and__3822__auto____5092;
}
}),ps__5091);
});
var epn__5129 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__5046_SHARP_){
var and__3822__auto____5093 = p1__5046_SHARP_.call(null,x);

if(cljs.core.truth_(and__3822__auto____5093))
{var and__3822__auto____5094 = p1__5046_SHARP_.call(null,y);

if(cljs.core.truth_(and__3822__auto____5094))
{return p1__5046_SHARP_.call(null,z);
} else
{return and__3822__auto____5094;
}
} else
{return and__3822__auto____5093;
}
}),ps__5091);
});
var epn__5130 = (function() { 
var G__5132__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____5095 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____5095))
{return cljs.core.every_QMARK_.call(null,(function (p1__5047_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__5047_SHARP_,args);
}),ps__5091);
} else
{return and__3822__auto____5095;
}
})());
};
var G__5132 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5132__delegate.call(this, x, y, z, args);
};
G__5132.cljs$lang$maxFixedArity = 3;
G__5132.cljs$lang$applyTo = (function (arglist__5133){
var x = cljs.core.first(arglist__5133);
var y = cljs.core.first(cljs.core.next(arglist__5133));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5133)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5133)));
return G__5132__delegate.call(this, x, y, z, args);
});
return G__5132;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__5126.call(this);
case  1 :
return epn__5127.call(this,x);
case  2 :
return epn__5128.call(this,x,y);
case  3 :
return epn__5129.call(this,x,y,z);
default:
return epn__5130.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__5130.cljs$lang$applyTo;
return epn;
})()
};
var G__5125 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5125__delegate.call(this, p1, p2, p3, ps);
};
G__5125.cljs$lang$maxFixedArity = 3;
G__5125.cljs$lang$applyTo = (function (arglist__5134){
var p1 = cljs.core.first(arglist__5134);
var p2 = cljs.core.first(cljs.core.next(arglist__5134));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5134)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5134)));
return G__5125__delegate.call(this, p1, p2, p3, ps);
});
return G__5125;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__5096.call(this,p1);
case  2 :
return every_pred__5097.call(this,p1,p2);
case  3 :
return every_pred__5098.call(this,p1,p2,p3);
default:
return every_pred__5099.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__5099.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__5174 = (function (p){
return (function() {
var sp1 = null;
var sp1__5179 = (function (){
return null;
});
var sp1__5180 = (function (x){
return p.call(null,x);
});
var sp1__5181 = (function (x,y){
var or__3824__auto____5136 = p.call(null,x);

if(cljs.core.truth_(or__3824__auto____5136))
{return or__3824__auto____5136;
} else
{return p.call(null,y);
}
});
var sp1__5182 = (function (x,y,z){
var or__3824__auto____5137 = p.call(null,x);

if(cljs.core.truth_(or__3824__auto____5137))
{return or__3824__auto____5137;
} else
{var or__3824__auto____5138 = p.call(null,y);

if(cljs.core.truth_(or__3824__auto____5138))
{return or__3824__auto____5138;
} else
{return p.call(null,z);
}
}
});
var sp1__5183 = (function() { 
var G__5185__delegate = function (x,y,z,args){
var or__3824__auto____5139 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____5139))
{return or__3824__auto____5139;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__5185 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5185__delegate.call(this, x, y, z, args);
};
G__5185.cljs$lang$maxFixedArity = 3;
G__5185.cljs$lang$applyTo = (function (arglist__5186){
var x = cljs.core.first(arglist__5186);
var y = cljs.core.first(cljs.core.next(arglist__5186));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5186)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5186)));
return G__5185__delegate.call(this, x, y, z, args);
});
return G__5185;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__5179.call(this);
case  1 :
return sp1__5180.call(this,x);
case  2 :
return sp1__5181.call(this,x,y);
case  3 :
return sp1__5182.call(this,x,y,z);
default:
return sp1__5183.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__5183.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__5175 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__5187 = (function (){
return null;
});
var sp2__5188 = (function (x){
var or__3824__auto____5140 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____5140))
{return or__3824__auto____5140;
} else
{return p2.call(null,x);
}
});
var sp2__5189 = (function (x,y){
var or__3824__auto____5141 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____5141))
{return or__3824__auto____5141;
} else
{var or__3824__auto____5142 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____5142))
{return or__3824__auto____5142;
} else
{var or__3824__auto____5143 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____5143))
{return or__3824__auto____5143;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__5190 = (function (x,y,z){
var or__3824__auto____5144 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____5144))
{return or__3824__auto____5144;
} else
{var or__3824__auto____5145 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____5145))
{return or__3824__auto____5145;
} else
{var or__3824__auto____5146 = p1.call(null,z);

if(cljs.core.truth_(or__3824__auto____5146))
{return or__3824__auto____5146;
} else
{var or__3824__auto____5147 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____5147))
{return or__3824__auto____5147;
} else
{var or__3824__auto____5148 = p2.call(null,y);

if(cljs.core.truth_(or__3824__auto____5148))
{return or__3824__auto____5148;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__5191 = (function() { 
var G__5193__delegate = function (x,y,z,args){
var or__3824__auto____5149 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____5149))
{return or__3824__auto____5149;
} else
{return cljs.core.some.call(null,(function (p1__5052_SHARP_){
var or__3824__auto____5150 = p1.call(null,p1__5052_SHARP_);

if(cljs.core.truth_(or__3824__auto____5150))
{return or__3824__auto____5150;
} else
{return p2.call(null,p1__5052_SHARP_);
}
}),args);
}
};
var G__5193 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5193__delegate.call(this, x, y, z, args);
};
G__5193.cljs$lang$maxFixedArity = 3;
G__5193.cljs$lang$applyTo = (function (arglist__5194){
var x = cljs.core.first(arglist__5194);
var y = cljs.core.first(cljs.core.next(arglist__5194));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5194)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5194)));
return G__5193__delegate.call(this, x, y, z, args);
});
return G__5193;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__5187.call(this);
case  1 :
return sp2__5188.call(this,x);
case  2 :
return sp2__5189.call(this,x,y);
case  3 :
return sp2__5190.call(this,x,y,z);
default:
return sp2__5191.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__5191.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__5176 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__5195 = (function (){
return null;
});
var sp3__5196 = (function (x){
var or__3824__auto____5151 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____5151))
{return or__3824__auto____5151;
} else
{var or__3824__auto____5152 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____5152))
{return or__3824__auto____5152;
} else
{return p3.call(null,x);
}
}
});
var sp3__5197 = (function (x,y){
var or__3824__auto____5153 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____5153))
{return or__3824__auto____5153;
} else
{var or__3824__auto____5154 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____5154))
{return or__3824__auto____5154;
} else
{var or__3824__auto____5155 = p3.call(null,x);

if(cljs.core.truth_(or__3824__auto____5155))
{return or__3824__auto____5155;
} else
{var or__3824__auto____5156 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____5156))
{return or__3824__auto____5156;
} else
{var or__3824__auto____5157 = p2.call(null,y);

if(cljs.core.truth_(or__3824__auto____5157))
{return or__3824__auto____5157;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__5198 = (function (x,y,z){
var or__3824__auto____5158 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____5158))
{return or__3824__auto____5158;
} else
{var or__3824__auto____5159 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____5159))
{return or__3824__auto____5159;
} else
{var or__3824__auto____5160 = p3.call(null,x);

if(cljs.core.truth_(or__3824__auto____5160))
{return or__3824__auto____5160;
} else
{var or__3824__auto____5161 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____5161))
{return or__3824__auto____5161;
} else
{var or__3824__auto____5162 = p2.call(null,y);

if(cljs.core.truth_(or__3824__auto____5162))
{return or__3824__auto____5162;
} else
{var or__3824__auto____5163 = p3.call(null,y);

if(cljs.core.truth_(or__3824__auto____5163))
{return or__3824__auto____5163;
} else
{var or__3824__auto____5164 = p1.call(null,z);

if(cljs.core.truth_(or__3824__auto____5164))
{return or__3824__auto____5164;
} else
{var or__3824__auto____5165 = p2.call(null,z);

if(cljs.core.truth_(or__3824__auto____5165))
{return or__3824__auto____5165;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__5199 = (function() { 
var G__5201__delegate = function (x,y,z,args){
var or__3824__auto____5166 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____5166))
{return or__3824__auto____5166;
} else
{return cljs.core.some.call(null,(function (p1__5053_SHARP_){
var or__3824__auto____5167 = p1.call(null,p1__5053_SHARP_);

if(cljs.core.truth_(or__3824__auto____5167))
{return or__3824__auto____5167;
} else
{var or__3824__auto____5168 = p2.call(null,p1__5053_SHARP_);

if(cljs.core.truth_(or__3824__auto____5168))
{return or__3824__auto____5168;
} else
{return p3.call(null,p1__5053_SHARP_);
}
}
}),args);
}
};
var G__5201 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5201__delegate.call(this, x, y, z, args);
};
G__5201.cljs$lang$maxFixedArity = 3;
G__5201.cljs$lang$applyTo = (function (arglist__5202){
var x = cljs.core.first(arglist__5202);
var y = cljs.core.first(cljs.core.next(arglist__5202));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5202)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5202)));
return G__5201__delegate.call(this, x, y, z, args);
});
return G__5201;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__5195.call(this);
case  1 :
return sp3__5196.call(this,x);
case  2 :
return sp3__5197.call(this,x,y);
case  3 :
return sp3__5198.call(this,x,y,z);
default:
return sp3__5199.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__5199.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__5177 = (function() { 
var G__5203__delegate = function (p1,p2,p3,ps){
var ps__5169 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__5204 = (function (){
return null;
});
var spn__5205 = (function (x){
return cljs.core.some.call(null,(function (p1__5054_SHARP_){
return p1__5054_SHARP_.call(null,x);
}),ps__5169);
});
var spn__5206 = (function (x,y){
return cljs.core.some.call(null,(function (p1__5055_SHARP_){
var or__3824__auto____5170 = p1__5055_SHARP_.call(null,x);

if(cljs.core.truth_(or__3824__auto____5170))
{return or__3824__auto____5170;
} else
{return p1__5055_SHARP_.call(null,y);
}
}),ps__5169);
});
var spn__5207 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__5056_SHARP_){
var or__3824__auto____5171 = p1__5056_SHARP_.call(null,x);

if(cljs.core.truth_(or__3824__auto____5171))
{return or__3824__auto____5171;
} else
{var or__3824__auto____5172 = p1__5056_SHARP_.call(null,y);

if(cljs.core.truth_(or__3824__auto____5172))
{return or__3824__auto____5172;
} else
{return p1__5056_SHARP_.call(null,z);
}
}
}),ps__5169);
});
var spn__5208 = (function() { 
var G__5210__delegate = function (x,y,z,args){
var or__3824__auto____5173 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____5173))
{return or__3824__auto____5173;
} else
{return cljs.core.some.call(null,(function (p1__5057_SHARP_){
return cljs.core.some.call(null,p1__5057_SHARP_,args);
}),ps__5169);
}
};
var G__5210 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5210__delegate.call(this, x, y, z, args);
};
G__5210.cljs$lang$maxFixedArity = 3;
G__5210.cljs$lang$applyTo = (function (arglist__5211){
var x = cljs.core.first(arglist__5211);
var y = cljs.core.first(cljs.core.next(arglist__5211));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5211)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5211)));
return G__5210__delegate.call(this, x, y, z, args);
});
return G__5210;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__5204.call(this);
case  1 :
return spn__5205.call(this,x);
case  2 :
return spn__5206.call(this,x,y);
case  3 :
return spn__5207.call(this,x,y,z);
default:
return spn__5208.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__5208.cljs$lang$applyTo;
return spn;
})()
};
var G__5203 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5203__delegate.call(this, p1, p2, p3, ps);
};
G__5203.cljs$lang$maxFixedArity = 3;
G__5203.cljs$lang$applyTo = (function (arglist__5212){
var p1 = cljs.core.first(arglist__5212);
var p2 = cljs.core.first(cljs.core.next(arglist__5212));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5212)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5212)));
return G__5203__delegate.call(this, p1, p2, p3, ps);
});
return G__5203;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__5174.call(this,p1);
case  2 :
return some_fn__5175.call(this,p1,p2);
case  3 :
return some_fn__5176.call(this,p1,p2,p3);
default:
return some_fn__5177.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__5177.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__5225 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5213 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5213))
{var s__5214 = temp__3974__auto____5213;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__5214)),map.call(null,f,cljs.core.rest.call(null,s__5214)));
} else
{return null;
}
})));
});
var map__5226 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__5215 = cljs.core.seq.call(null,c1);
var s2__5216 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3822__auto____5217 = s1__5215;

if(cljs.core.truth_(and__3822__auto____5217))
{return s2__5216;
} else
{return and__3822__auto____5217;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__5215),cljs.core.first.call(null,s2__5216)),map.call(null,f,cljs.core.rest.call(null,s1__5215),cljs.core.rest.call(null,s2__5216)));
} else
{return null;
}
})));
});
var map__5227 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__5218 = cljs.core.seq.call(null,c1);
var s2__5219 = cljs.core.seq.call(null,c2);
var s3__5220 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3822__auto____5221 = s1__5218;

if(cljs.core.truth_(and__3822__auto____5221))
{var and__3822__auto____5222 = s2__5219;

if(cljs.core.truth_(and__3822__auto____5222))
{return s3__5220;
} else
{return and__3822__auto____5222;
}
} else
{return and__3822__auto____5221;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__5218),cljs.core.first.call(null,s2__5219),cljs.core.first.call(null,s3__5220)),map.call(null,f,cljs.core.rest.call(null,s1__5218),cljs.core.rest.call(null,s2__5219),cljs.core.rest.call(null,s3__5220)));
} else
{return null;
}
})));
});
var map__5228 = (function() { 
var G__5230__delegate = function (f,c1,c2,c3,colls){
var step__5224 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__5223 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__5223)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__5223),step.call(null,map.call(null,cljs.core.rest,ss__5223)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__5135_SHARP_){
return cljs.core.apply.call(null,f,p1__5135_SHARP_);
}),step__5224.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__5230 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__5230__delegate.call(this, f, c1, c2, c3, colls);
};
G__5230.cljs$lang$maxFixedArity = 4;
G__5230.cljs$lang$applyTo = (function (arglist__5231){
var f = cljs.core.first(arglist__5231);
var c1 = cljs.core.first(cljs.core.next(arglist__5231));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5231)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5231))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5231))));
return G__5230__delegate.call(this, f, c1, c2, c3, colls);
});
return G__5230;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__5225.call(this,f,c1);
case  3 :
return map__5226.call(this,f,c1,c2);
case  4 :
return map__5227.call(this,f,c1,c2,c3);
default:
return map__5228.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5228.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3974__auto____5232 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5232))
{var s__5233 = temp__3974__auto____5232;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__5233),take.call(null,(n - 1),cljs.core.rest.call(null,s__5233)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__5236 = (function (n,coll){
while(true){
var s__5234 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3822__auto____5235 = (n > 0);

if(cljs.core.truth_(and__3822__auto____5235))
{return s__5234;
} else
{return and__3822__auto____5235;
}
})()))
{{
var G__5237 = (n - 1);
var G__5238 = cljs.core.rest.call(null,s__5234);
n = G__5237;
coll = G__5238;
continue;
}
} else
{return s__5234;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__5236.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__5239 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__5240 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__5239.call(this,n);
case  2 :
return drop_last__5240.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__5242 = cljs.core.seq.call(null,coll);
var lead__5243 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__5243))
{{
var G__5244 = cljs.core.next.call(null,s__5242);
var G__5245 = cljs.core.next.call(null,lead__5243);
s__5242 = G__5244;
lead__5243 = G__5245;
continue;
}
} else
{return s__5242;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__5248 = (function (pred,coll){
while(true){
var s__5246 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3822__auto____5247 = s__5246;

if(cljs.core.truth_(and__3822__auto____5247))
{return pred.call(null,cljs.core.first.call(null,s__5246));
} else
{return and__3822__auto____5247;
}
})()))
{{
var G__5249 = pred;
var G__5250 = cljs.core.rest.call(null,s__5246);
pred = G__5249;
coll = G__5250;
continue;
}
} else
{return s__5246;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__5248.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5251 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5251))
{var s__5252 = temp__3974__auto____5251;

return cljs.core.concat.call(null,s__5252,cycle.call(null,s__5252));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__5253 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__5254 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__5253.call(this,n);
case  2 :
return repeat__5254.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__5256 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__5257 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__5256.call(this,n);
case  2 :
return repeatedly__5257.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__5263 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__5259 = cljs.core.seq.call(null,c1);
var s2__5260 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3822__auto____5261 = s1__5259;

if(cljs.core.truth_(and__3822__auto____5261))
{return s2__5260;
} else
{return and__3822__auto____5261;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__5259),cljs.core.cons.call(null,cljs.core.first.call(null,s2__5260),interleave.call(null,cljs.core.rest.call(null,s1__5259),cljs.core.rest.call(null,s2__5260))));
} else
{return null;
}
})));
});
var interleave__5264 = (function() { 
var G__5266__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__5262 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__5262)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__5262),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__5262)));
} else
{return null;
}
})));
};
var G__5266 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5266__delegate.call(this, c1, c2, colls);
};
G__5266.cljs$lang$maxFixedArity = 2;
G__5266.cljs$lang$applyTo = (function (arglist__5267){
var c1 = cljs.core.first(arglist__5267);
var c2 = cljs.core.first(cljs.core.next(arglist__5267));
var colls = cljs.core.rest(cljs.core.next(arglist__5267));
return G__5266__delegate.call(this, c1, c2, colls);
});
return G__5266;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__5263.call(this,c1,c2);
default:
return interleave__5264.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__5264.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__5270 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____5268 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3971__auto____5268))
{var coll__5269 = temp__3971__auto____5268;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__5269),cat.call(null,cljs.core.rest.call(null,coll__5269),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__5270.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__5271 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__5272 = (function() { 
var G__5274__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__5274 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5274__delegate.call(this, f, coll, colls);
};
G__5274.cljs$lang$maxFixedArity = 2;
G__5274.cljs$lang$applyTo = (function (arglist__5275){
var f = cljs.core.first(arglist__5275);
var coll = cljs.core.first(cljs.core.next(arglist__5275));
var colls = cljs.core.rest(cljs.core.next(arglist__5275));
return G__5274__delegate.call(this, f, coll, colls);
});
return G__5274;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__5271.call(this,f,coll);
default:
return mapcat__5272.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__5272.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5276 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5276))
{var s__5277 = temp__3974__auto____5276;

var f__5278 = cljs.core.first.call(null,s__5277);
var r__5279 = cljs.core.rest.call(null,s__5277);

if(cljs.core.truth_(pred.call(null,f__5278)))
{return cljs.core.cons.call(null,f__5278,filter.call(null,pred,r__5279));
} else
{return filter.call(null,pred,r__5279);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__5281 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__5281.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__5280_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__5280_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__5288 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__5289 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5282 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5282))
{var s__5283 = temp__3974__auto____5282;

var p__5284 = cljs.core.take.call(null,n,s__5283);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__5284))))
{return cljs.core.cons.call(null,p__5284,partition.call(null,n,step,cljs.core.drop.call(null,step,s__5283)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__5290 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5285 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5285))
{var s__5286 = temp__3974__auto____5285;

var p__5287 = cljs.core.take.call(null,n,s__5286);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__5287))))
{return cljs.core.cons.call(null,p__5287,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__5286)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__5287,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__5288.call(this,n,step);
case  3 :
return partition__5289.call(this,n,step,pad);
case  4 :
return partition__5290.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__5296 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__5297 = (function (m,ks,not_found){
var sentinel__5292 = cljs.core.lookup_sentinel;
var m__5293 = m;
var ks__5294 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__5294))
{var m__5295 = cljs.core.get.call(null,m__5293,cljs.core.first.call(null,ks__5294),sentinel__5292);

if(cljs.core.truth_((sentinel__5292 === m__5295)))
{return not_found;
} else
{{
var G__5299 = sentinel__5292;
var G__5300 = m__5295;
var G__5301 = cljs.core.next.call(null,ks__5294);
sentinel__5292 = G__5299;
m__5293 = G__5300;
ks__5294 = G__5301;
continue;
}
}
} else
{return m__5293;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__5296.call(this,m,ks);
case  3 :
return get_in__5297.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__5302,v){
var vec__5303__5304 = p__5302;
var k__5305 = cljs.core.nth.call(null,vec__5303__5304,0,null);
var ks__5306 = cljs.core.nthnext.call(null,vec__5303__5304,1);

if(cljs.core.truth_(ks__5306))
{return cljs.core.assoc.call(null,m,k__5305,assoc_in.call(null,cljs.core.get.call(null,m,k__5305),ks__5306,v));
} else
{return cljs.core.assoc.call(null,m,k__5305,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__5307,f,args){
var vec__5308__5309 = p__5307;
var k__5310 = cljs.core.nth.call(null,vec__5308__5309,0,null);
var ks__5311 = cljs.core.nthnext.call(null,vec__5308__5309,1);

if(cljs.core.truth_(ks__5311))
{return cljs.core.assoc.call(null,m,k__5310,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__5310),ks__5311,f,args));
} else
{return cljs.core.assoc.call(null,m,k__5310,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__5310),args));
}
};
var update_in = function (m,p__5307,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__5307, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__5312){
var m = cljs.core.first(arglist__5312);
var p__5307 = cljs.core.first(cljs.core.next(arglist__5312));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5312)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5312)));
return update_in__delegate.call(this, m, p__5307, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5313 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5346 = null;
var G__5346__5347 = (function (coll,k){
var this__5314 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__5346__5348 = (function (coll,k,not_found){
var this__5315 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__5346 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5346__5347.call(this,coll,k);
case  3 :
return G__5346__5348.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5346;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__5316 = this;
var new_array__5317 = cljs.core.aclone.call(null,this__5316.array);

(new_array__5317[k] = v);
return (new cljs.core.Vector(this__5316.meta,new_array__5317));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__5350 = null;
var G__5350__5351 = (function (tsym5318,k){
var this__5320 = this;
var tsym5318__5321 = this;

var coll__5322 = tsym5318__5321;

return cljs.core._lookup.call(null,coll__5322,k);
});
var G__5350__5352 = (function (tsym5319,k,not_found){
var this__5323 = this;
var tsym5319__5324 = this;

var coll__5325 = tsym5319__5324;

return cljs.core._lookup.call(null,coll__5325,k,not_found);
});
G__5350 = function(tsym5319,k,not_found){
switch(arguments.length){
case  2 :
return G__5350__5351.call(this,tsym5319,k);
case  3 :
return G__5350__5352.call(this,tsym5319,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5350;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5326 = this;
var new_array__5327 = cljs.core.aclone.call(null,this__5326.array);

new_array__5327.push(o);
return (new cljs.core.Vector(this__5326.meta,new_array__5327));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__5354 = null;
var G__5354__5355 = (function (v,f){
var this__5328 = this;
return cljs.core.ci_reduce.call(null,this__5328.array,f);
});
var G__5354__5356 = (function (v,f,start){
var this__5329 = this;
return cljs.core.ci_reduce.call(null,this__5329.array,f,start);
});
G__5354 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__5354__5355.call(this,v,f);
case  3 :
return G__5354__5356.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5354;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5330 = this;
if(cljs.core.truth_((this__5330.array.length > 0)))
{var vector_seq__5331 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__5330.array.length)))
{return cljs.core.cons.call(null,(this__5330.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__5331.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5332 = this;
return this__5332.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5333 = this;
var count__5334 = this__5333.array.length;

if(cljs.core.truth_((count__5334 > 0)))
{return (this__5333.array[(count__5334 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5335 = this;
if(cljs.core.truth_((this__5335.array.length > 0)))
{var new_array__5336 = cljs.core.aclone.call(null,this__5335.array);

new_array__5336.pop();
return (new cljs.core.Vector(this__5335.meta,new_array__5336));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__5337 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5338 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5339 = this;
return (new cljs.core.Vector(meta,this__5339.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5340 = this;
return this__5340.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__5358 = null;
var G__5358__5359 = (function (coll,n){
var this__5341 = this;
if(cljs.core.truth_((function (){var and__3822__auto____5342 = (0 <= n);

if(cljs.core.truth_(and__3822__auto____5342))
{return (n < this__5341.array.length);
} else
{return and__3822__auto____5342;
}
})()))
{return (this__5341.array[n]);
} else
{return null;
}
});
var G__5358__5360 = (function (coll,n,not_found){
var this__5343 = this;
if(cljs.core.truth_((function (){var and__3822__auto____5344 = (0 <= n);

if(cljs.core.truth_(and__3822__auto____5344))
{return (n < this__5343.array.length);
} else
{return and__3822__auto____5344;
}
})()))
{return (this__5343.array[n]);
} else
{return not_found;
}
});
G__5358 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5358__5359.call(this,coll,n);
case  3 :
return G__5358__5360.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5358;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5345 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__5345.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__5362 = pv.cnt;

if(cljs.core.truth_((cnt__5362 < 32)))
{return 0;
} else
{return (((cnt__5362 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__5363 = level;
var ret__5364 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__5363)))
{return ret__5364;
} else
{var embed__5365 = ret__5364;
var r__5366 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___5367 = (r__5366[0] = embed__5365);

{
var G__5368 = (ll__5363 - 5);
var G__5369 = r__5366;
ll__5363 = G__5368;
ret__5364 = G__5369;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__5370 = cljs.core.aclone.call(null,parent);
var subidx__5371 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__5370[subidx__5371] = tailnode);
return ret__5370;
} else
{var temp__3971__auto____5372 = (parent[subidx__5371]);

if(cljs.core.truth_(temp__3971__auto____5372))
{var child__5373 = temp__3971__auto____5372;

var node_to_insert__5374 = push_tail.call(null,pv,(level - 5),child__5373,tailnode);
var ___5375 = (ret__5370[subidx__5371] = node_to_insert__5374);

return ret__5370;
} else
{var node_to_insert__5376 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___5377 = (ret__5370[subidx__5371] = node_to_insert__5376);

return ret__5370;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3822__auto____5378 = (0 <= i);

if(cljs.core.truth_(and__3822__auto____5378))
{return (i < pv.cnt);
} else
{return and__3822__auto____5378;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__5379 = pv.root;
var level__5380 = pv.shift;

while(true){
if(cljs.core.truth_((level__5380 > 0)))
{{
var G__5381 = (node__5379[((i >> level__5380) & 31)]);
var G__5382 = (level__5380 - 5);
node__5379 = G__5381;
level__5380 = G__5382;
continue;
}
} else
{return node__5379;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__5383 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__5383[(i & 31)] = val);
return ret__5383;
} else
{var subidx__5384 = ((i >> level) & 31);
var ___5385 = (ret__5383[subidx__5384] = do_assoc.call(null,pv,(level - 5),(node[subidx__5384]),i,val));

return ret__5383;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__5386 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__5387 = pop_tail.call(null,pv,(level - 5),(node[subidx__5386]));

if(cljs.core.truth_((function (){var and__3822__auto____5388 = (new_child__5387 === null);

if(cljs.core.truth_(and__3822__auto____5388))
{return (subidx__5386 === 0);
} else
{return and__3822__auto____5388;
}
})()))
{return null;
} else
{var ret__5389 = cljs.core.aclone.call(null,node);
var ___5390 = (ret__5389[subidx__5386] = new_child__5387);

return ret__5389;
}
} else
{if(cljs.core.truth_((subidx__5386 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__5391 = cljs.core.aclone.call(null,node);
var ___5392 = (ret__5391[subidx__5386] = null);

return ret__5391;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
})
cljs.core.PersistentVector.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5393 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5433 = null;
var G__5433__5434 = (function (coll,k){
var this__5394 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__5433__5435 = (function (coll,k,not_found){
var this__5395 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__5433 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5433__5434.call(this,coll,k);
case  3 :
return G__5433__5435.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5433;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__5396 = this;
if(cljs.core.truth_((function (){var and__3822__auto____5397 = (0 <= k);

if(cljs.core.truth_(and__3822__auto____5397))
{return (k < this__5396.cnt);
} else
{return and__3822__auto____5397;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__5398 = cljs.core.aclone.call(null,this__5396.tail);

(new_tail__5398[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__5396.meta,this__5396.cnt,this__5396.shift,this__5396.root,new_tail__5398));
} else
{return (new cljs.core.PersistentVector(this__5396.meta,this__5396.cnt,this__5396.shift,cljs.core.do_assoc.call(null,coll,this__5396.shift,this__5396.root,k,v),this__5396.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__5396.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__5396.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__5437 = null;
var G__5437__5438 = (function (tsym5399,k){
var this__5401 = this;
var tsym5399__5402 = this;

var coll__5403 = tsym5399__5402;

return cljs.core._lookup.call(null,coll__5403,k);
});
var G__5437__5439 = (function (tsym5400,k,not_found){
var this__5404 = this;
var tsym5400__5405 = this;

var coll__5406 = tsym5400__5405;

return cljs.core._lookup.call(null,coll__5406,k,not_found);
});
G__5437 = function(tsym5400,k,not_found){
switch(arguments.length){
case  2 :
return G__5437__5438.call(this,tsym5400,k);
case  3 :
return G__5437__5439.call(this,tsym5400,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5437;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5407 = this;
if(cljs.core.truth_(((this__5407.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__5408 = cljs.core.aclone.call(null,this__5407.tail);

new_tail__5408.push(o);
return (new cljs.core.PersistentVector(this__5407.meta,(this__5407.cnt + 1),this__5407.shift,this__5407.root,new_tail__5408));
} else
{var root_overflow_QMARK___5409 = ((this__5407.cnt >> 5) > (1 << this__5407.shift));
var new_shift__5410 = (cljs.core.truth_(root_overflow_QMARK___5409)?(this__5407.shift + 5):this__5407.shift);
var new_root__5412 = (cljs.core.truth_(root_overflow_QMARK___5409)?(function (){var n_r__5411 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__5411[0] = this__5407.root);
(n_r__5411[1] = cljs.core.new_path.call(null,this__5407.shift,this__5407.tail));
return n_r__5411;
})():cljs.core.push_tail.call(null,coll,this__5407.shift,this__5407.root,this__5407.tail));

return (new cljs.core.PersistentVector(this__5407.meta,(this__5407.cnt + 1),new_shift__5410,new_root__5412,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__5441 = null;
var G__5441__5442 = (function (v,f){
var this__5413 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__5441__5443 = (function (v,f,start){
var this__5414 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__5441 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__5441__5442.call(this,v,f);
case  3 :
return G__5441__5443.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5441;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5415 = this;
if(cljs.core.truth_((this__5415.cnt > 0)))
{var vector_seq__5416 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__5415.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__5416.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5417 = this;
return this__5417.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5418 = this;
if(cljs.core.truth_((this__5418.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__5418.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5419 = this;
if(cljs.core.truth_((this__5419.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__5419.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__5419.meta);
} else
{if(cljs.core.truth_((1 < (this__5419.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__5419.meta,(this__5419.cnt - 1),this__5419.shift,this__5419.root,cljs.core.aclone.call(null,this__5419.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__5420 = cljs.core.array_for.call(null,coll,(this__5419.cnt - 2));
var nr__5421 = cljs.core.pop_tail.call(null,this__5419.shift,this__5419.root);
var new_root__5422 = (cljs.core.truth_((nr__5421 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__5421);
var cnt_1__5423 = (this__5419.cnt - 1);

if(cljs.core.truth_((function (){var and__3822__auto____5424 = (5 < this__5419.shift);

if(cljs.core.truth_(and__3822__auto____5424))
{return ((new_root__5422[1]) === null);
} else
{return and__3822__auto____5424;
}
})()))
{return (new cljs.core.PersistentVector(this__5419.meta,cnt_1__5423,(this__5419.shift - 5),(new_root__5422[0]),new_tail__5420));
} else
{return (new cljs.core.PersistentVector(this__5419.meta,cnt_1__5423,this__5419.shift,new_root__5422,new_tail__5420));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__5425 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5426 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5427 = this;
return (new cljs.core.PersistentVector(meta,this__5427.cnt,this__5427.shift,this__5427.root,this__5427.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5428 = this;
return this__5428.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__5445 = null;
var G__5445__5446 = (function (coll,n){
var this__5429 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__5445__5447 = (function (coll,n,not_found){
var this__5430 = this;
if(cljs.core.truth_((function (){var and__3822__auto____5431 = (0 <= n);

if(cljs.core.truth_(and__3822__auto____5431))
{return (n < this__5430.cnt);
} else
{return and__3822__auto____5431;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__5445 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5445__5446.call(this,coll,n);
case  3 :
return G__5445__5447.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5445;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5432 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__5432.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = (new Array(32));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[]));
cljs.core.PersistentVector.fromArray = (function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xs);
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__5449){
var args = cljs.core.seq( arglist__5449 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5450 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5478 = null;
var G__5478__5479 = (function (coll,k){
var this__5451 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__5478__5480 = (function (coll,k,not_found){
var this__5452 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__5478 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5478__5479.call(this,coll,k);
case  3 :
return G__5478__5480.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5478;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__5453 = this;
var v_pos__5454 = (this__5453.start + key);

return (new cljs.core.Subvec(this__5453.meta,cljs.core._assoc.call(null,this__5453.v,v_pos__5454,val),this__5453.start,((this__5453.end > (v_pos__5454 + 1)) ? this__5453.end : (v_pos__5454 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__5482 = null;
var G__5482__5483 = (function (tsym5455,k){
var this__5457 = this;
var tsym5455__5458 = this;

var coll__5459 = tsym5455__5458;

return cljs.core._lookup.call(null,coll__5459,k);
});
var G__5482__5484 = (function (tsym5456,k,not_found){
var this__5460 = this;
var tsym5456__5461 = this;

var coll__5462 = tsym5456__5461;

return cljs.core._lookup.call(null,coll__5462,k,not_found);
});
G__5482 = function(tsym5456,k,not_found){
switch(arguments.length){
case  2 :
return G__5482__5483.call(this,tsym5456,k);
case  3 :
return G__5482__5484.call(this,tsym5456,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5482;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5463 = this;
return (new cljs.core.Subvec(this__5463.meta,cljs.core._assoc_n.call(null,this__5463.v,this__5463.end,o),this__5463.start,(this__5463.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__5486 = null;
var G__5486__5487 = (function (coll,f){
var this__5464 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__5486__5488 = (function (coll,f,start){
var this__5465 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__5486 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__5486__5487.call(this,coll,f);
case  3 :
return G__5486__5488.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5486;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5466 = this;
var subvec_seq__5467 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__5466.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__5466.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__5467.call(null,this__5466.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5468 = this;
return (this__5468.end - this__5468.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5469 = this;
return cljs.core._nth.call(null,this__5469.v,(this__5469.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5470 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__5470.start,this__5470.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__5470.meta,this__5470.v,this__5470.start,(this__5470.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__5471 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5472 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5473 = this;
return (new cljs.core.Subvec(meta,this__5473.v,this__5473.start,this__5473.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5474 = this;
return this__5474.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__5490 = null;
var G__5490__5491 = (function (coll,n){
var this__5475 = this;
return cljs.core._nth.call(null,this__5475.v,(this__5475.start + n));
});
var G__5490__5492 = (function (coll,n,not_found){
var this__5476 = this;
return cljs.core._nth.call(null,this__5476.v,(this__5476.start + n),not_found);
});
G__5490 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5490__5491.call(this,coll,n);
case  3 :
return G__5490__5492.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5490;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5477 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__5477.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__5494 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__5495 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__5494.call(this,v,start);
case  3 :
return subvec__5495.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5497 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5498 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5499 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5500 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5500.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5501 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5502 = this;
return cljs.core._first.call(null,this__5502.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5503 = this;
var temp__3971__auto____5504 = cljs.core.next.call(null,this__5503.front);

if(cljs.core.truth_(temp__3971__auto____5504))
{var f1__5505 = temp__3971__auto____5504;

return (new cljs.core.PersistentQueueSeq(this__5503.meta,f1__5505,this__5503.rear));
} else
{if(cljs.core.truth_((this__5503.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__5503.meta,this__5503.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5506 = this;
return this__5506.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5507 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__5507.front,this__5507.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5508 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5509 = this;
if(cljs.core.truth_(this__5509.front))
{return (new cljs.core.PersistentQueue(this__5509.meta,(this__5509.count + 1),this__5509.front,cljs.core.conj.call(null,(function (){var or__3824__auto____5510 = this__5509.rear;

if(cljs.core.truth_(or__3824__auto____5510))
{return or__3824__auto____5510;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__5509.meta,(this__5509.count + 1),cljs.core.conj.call(null,this__5509.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5511 = this;
var rear__5512 = cljs.core.seq.call(null,this__5511.rear);

if(cljs.core.truth_((function (){var or__3824__auto____5513 = this__5511.front;

if(cljs.core.truth_(or__3824__auto____5513))
{return or__3824__auto____5513;
} else
{return rear__5512;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__5511.front,cljs.core.seq.call(null,rear__5512)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5514 = this;
return this__5514.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5515 = this;
return cljs.core._first.call(null,this__5515.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5516 = this;
if(cljs.core.truth_(this__5516.front))
{var temp__3971__auto____5517 = cljs.core.next.call(null,this__5516.front);

if(cljs.core.truth_(temp__3971__auto____5517))
{var f1__5518 = temp__3971__auto____5517;

return (new cljs.core.PersistentQueue(this__5516.meta,(this__5516.count - 1),f1__5518,this__5516.rear));
} else
{return (new cljs.core.PersistentQueue(this__5516.meta,(this__5516.count - 1),cljs.core.seq.call(null,this__5516.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5519 = this;
return cljs.core.first.call(null,this__5519.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5520 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5521 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5522 = this;
return (new cljs.core.PersistentQueue(meta,this__5522.count,this__5522.front,this__5522.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5523 = this;
return this__5523.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5524 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__5525 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__5526 = array.length;

var i__5527 = 0;

while(true){
if(cljs.core.truth_((i__5527 < len__5526)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__5527]))))
{return i__5527;
} else
{{
var G__5528 = (i__5527 + incr);
i__5527 = G__5528;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___5530 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___5531 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3822__auto____5529 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3822__auto____5529))
{return strobj.hasOwnProperty(k);
} else
{return and__3822__auto____5529;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___5530.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___5531.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__5534 = cljs.core.hash.call(null,a);
var b__5535 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__5534 < b__5535)))
{return -1;
} else
{if(cljs.core.truth_((a__5534 > b__5535)))
{return 1;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5536 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5563 = null;
var G__5563__5564 = (function (coll,k){
var this__5537 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__5563__5565 = (function (coll,k,not_found){
var this__5538 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__5538.strobj,(this__5538.strobj[k]),not_found);
});
G__5563 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5563__5564.call(this,coll,k);
case  3 :
return G__5563__5565.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5563;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__5539 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__5540 = goog.object.clone.call(null,this__5539.strobj);
var overwrite_QMARK___5541 = new_strobj__5540.hasOwnProperty(k);

(new_strobj__5540[k] = v);
if(cljs.core.truth_(overwrite_QMARK___5541))
{return (new cljs.core.ObjMap(this__5539.meta,this__5539.keys,new_strobj__5540));
} else
{var new_keys__5542 = cljs.core.aclone.call(null,this__5539.keys);

new_keys__5542.push(k);
return (new cljs.core.ObjMap(this__5539.meta,new_keys__5542,new_strobj__5540));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__5539.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__5543 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__5543.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__5567 = null;
var G__5567__5568 = (function (tsym5544,k){
var this__5546 = this;
var tsym5544__5547 = this;

var coll__5548 = tsym5544__5547;

return cljs.core._lookup.call(null,coll__5548,k);
});
var G__5567__5569 = (function (tsym5545,k,not_found){
var this__5549 = this;
var tsym5545__5550 = this;

var coll__5551 = tsym5545__5550;

return cljs.core._lookup.call(null,coll__5551,k,not_found);
});
G__5567 = function(tsym5545,k,not_found){
switch(arguments.length){
case  2 :
return G__5567__5568.call(this,tsym5545,k);
case  3 :
return G__5567__5569.call(this,tsym5545,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5567;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__5552 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5553 = this;
if(cljs.core.truth_((this__5553.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__5533_SHARP_){
return cljs.core.vector.call(null,p1__5533_SHARP_,(this__5553.strobj[p1__5533_SHARP_]));
}),this__5553.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5554 = this;
return this__5554.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5555 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5556 = this;
return (new cljs.core.ObjMap(meta,this__5556.keys,this__5556.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5557 = this;
return this__5557.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5558 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__5558.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__5559 = this;
if(cljs.core.truth_((function (){var and__3822__auto____5560 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3822__auto____5560))
{return this__5559.strobj.hasOwnProperty(k);
} else
{return and__3822__auto____5560;
}
})()))
{var new_keys__5561 = cljs.core.aclone.call(null,this__5559.keys);
var new_strobj__5562 = goog.object.clone.call(null,this__5559.strobj);

new_keys__5561.splice(cljs.core.scan_array.call(null,1,k,new_keys__5561),1);
cljs.core.js_delete.call(null,new_strobj__5562,k);
return (new cljs.core.ObjMap(this__5559.meta,new_keys__5561,new_strobj__5562));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5572 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5610 = null;
var G__5610__5611 = (function (coll,k){
var this__5573 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__5610__5612 = (function (coll,k,not_found){
var this__5574 = this;
var bucket__5575 = (this__5574.hashobj[cljs.core.hash.call(null,k)]);
var i__5576 = (cljs.core.truth_(bucket__5575)?cljs.core.scan_array.call(null,2,k,bucket__5575):null);

if(cljs.core.truth_(i__5576))
{return (bucket__5575[(i__5576 + 1)]);
} else
{return not_found;
}
});
G__5610 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5610__5611.call(this,coll,k);
case  3 :
return G__5610__5612.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5610;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__5577 = this;
var h__5578 = cljs.core.hash.call(null,k);
var bucket__5579 = (this__5577.hashobj[h__5578]);

if(cljs.core.truth_(bucket__5579))
{var new_bucket__5580 = cljs.core.aclone.call(null,bucket__5579);
var new_hashobj__5581 = goog.object.clone.call(null,this__5577.hashobj);

(new_hashobj__5581[h__5578] = new_bucket__5580);
var temp__3971__auto____5582 = cljs.core.scan_array.call(null,2,k,new_bucket__5580);

if(cljs.core.truth_(temp__3971__auto____5582))
{var i__5583 = temp__3971__auto____5582;

(new_bucket__5580[(i__5583 + 1)] = v);
return (new cljs.core.HashMap(this__5577.meta,this__5577.count,new_hashobj__5581));
} else
{new_bucket__5580.push(k,v);
return (new cljs.core.HashMap(this__5577.meta,(this__5577.count + 1),new_hashobj__5581));
}
} else
{var new_hashobj__5584 = goog.object.clone.call(null,this__5577.hashobj);

(new_hashobj__5584[h__5578] = [k,v]);
return (new cljs.core.HashMap(this__5577.meta,(this__5577.count + 1),new_hashobj__5584));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__5585 = this;
var bucket__5586 = (this__5585.hashobj[cljs.core.hash.call(null,k)]);
var i__5587 = (cljs.core.truth_(bucket__5586)?cljs.core.scan_array.call(null,2,k,bucket__5586):null);

if(cljs.core.truth_(i__5587))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__5614 = null;
var G__5614__5615 = (function (tsym5588,k){
var this__5590 = this;
var tsym5588__5591 = this;

var coll__5592 = tsym5588__5591;

return cljs.core._lookup.call(null,coll__5592,k);
});
var G__5614__5616 = (function (tsym5589,k,not_found){
var this__5593 = this;
var tsym5589__5594 = this;

var coll__5595 = tsym5589__5594;

return cljs.core._lookup.call(null,coll__5595,k,not_found);
});
G__5614 = function(tsym5589,k,not_found){
switch(arguments.length){
case  2 :
return G__5614__5615.call(this,tsym5589,k);
case  3 :
return G__5614__5616.call(this,tsym5589,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5614;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__5596 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5597 = this;
if(cljs.core.truth_((this__5597.count > 0)))
{var hashes__5598 = cljs.core.js_keys.call(null,this__5597.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__5571_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__5597.hashobj[p1__5571_SHARP_])));
}),hashes__5598);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5599 = this;
return this__5599.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5600 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5601 = this;
return (new cljs.core.HashMap(meta,this__5601.count,this__5601.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5602 = this;
return this__5602.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5603 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__5603.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__5604 = this;
var h__5605 = cljs.core.hash.call(null,k);
var bucket__5606 = (this__5604.hashobj[h__5605]);
var i__5607 = (cljs.core.truth_(bucket__5606)?cljs.core.scan_array.call(null,2,k,bucket__5606):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__5607)))
{return coll;
} else
{var new_hashobj__5608 = goog.object.clone.call(null,this__5604.hashobj);

if(cljs.core.truth_((3 > bucket__5606.length)))
{cljs.core.js_delete.call(null,new_hashobj__5608,h__5605);
} else
{var new_bucket__5609 = cljs.core.aclone.call(null,bucket__5606);

new_bucket__5609.splice(i__5607,2);
(new_hashobj__5608[h__5605] = new_bucket__5609);
}
return (new cljs.core.HashMap(this__5604.meta,(this__5604.count - 1),new_hashobj__5608));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__5618 = ks.length;

var i__5619 = 0;
var out__5620 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__5619 < len__5618)))
{{
var G__5621 = (i__5619 + 1);
var G__5622 = cljs.core.assoc.call(null,out__5620,(ks[i__5619]),(vs[i__5619]));
i__5619 = G__5621;
out__5620 = G__5622;
continue;
}
} else
{return out__5620;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__5623 = cljs.core.seq.call(null,keyvals);
var out__5624 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__5623))
{{
var G__5625 = cljs.core.nnext.call(null,in$__5623);
var G__5626 = cljs.core.assoc.call(null,out__5624,cljs.core.first.call(null,in$__5623),cljs.core.second.call(null,in$__5623));
in$__5623 = G__5625;
out__5624 = G__5626;
continue;
}
} else
{return out__5624;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__5627){
var keyvals = cljs.core.seq( arglist__5627 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__5628_SHARP_,p2__5629_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____5630 = p1__5628_SHARP_;

if(cljs.core.truth_(or__3824__auto____5630))
{return or__3824__auto____5630;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__5629_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__5631){
var maps = cljs.core.seq( arglist__5631 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__5634 = (function (m,e){
var k__5632 = cljs.core.first.call(null,e);
var v__5633 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__5632)))
{return cljs.core.assoc.call(null,m,k__5632,f.call(null,cljs.core.get.call(null,m,k__5632),v__5633));
} else
{return cljs.core.assoc.call(null,m,k__5632,v__5633);
}
});
var merge2__5636 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__5634,(function (){var or__3824__auto____5635 = m1;

if(cljs.core.truth_(or__3824__auto____5635))
{return or__3824__auto____5635;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__5636,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__5637){
var f = cljs.core.first(arglist__5637);
var maps = cljs.core.rest(arglist__5637);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__5639 = cljs.core.ObjMap.fromObject([],{});
var keys__5640 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__5640))
{var key__5641 = cljs.core.first.call(null,keys__5640);
var entry__5642 = cljs.core.get.call(null,map,key__5641,"\uFDD0'user/not-found");

{
var G__5643 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__5642,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__5639,key__5641,entry__5642):ret__5639);
var G__5644 = cljs.core.next.call(null,keys__5640);
ret__5639 = G__5643;
keys__5640 = G__5644;
continue;
}
} else
{return ret__5639;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5645 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5666 = null;
var G__5666__5667 = (function (coll,v){
var this__5646 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__5666__5668 = (function (coll,v,not_found){
var this__5647 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__5647.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__5666 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__5666__5667.call(this,coll,v);
case  3 :
return G__5666__5668.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5666;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__5670 = null;
var G__5670__5671 = (function (tsym5648,k){
var this__5650 = this;
var tsym5648__5651 = this;

var coll__5652 = tsym5648__5651;

return cljs.core._lookup.call(null,coll__5652,k);
});
var G__5670__5672 = (function (tsym5649,k,not_found){
var this__5653 = this;
var tsym5649__5654 = this;

var coll__5655 = tsym5649__5654;

return cljs.core._lookup.call(null,coll__5655,k,not_found);
});
G__5670 = function(tsym5649,k,not_found){
switch(arguments.length){
case  2 :
return G__5670__5671.call(this,tsym5649,k);
case  3 :
return G__5670__5672.call(this,tsym5649,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5670;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5656 = this;
return (new cljs.core.Set(this__5656.meta,cljs.core.assoc.call(null,this__5656.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5657 = this;
return cljs.core.keys.call(null,this__5657.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__5658 = this;
return (new cljs.core.Set(this__5658.meta,cljs.core.dissoc.call(null,this__5658.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5659 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5660 = this;
var and__3822__auto____5661 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3822__auto____5661))
{var and__3822__auto____5662 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3822__auto____5662))
{return cljs.core.every_QMARK_.call(null,(function (p1__5638_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__5638_SHARP_);
}),other);
} else
{return and__3822__auto____5662;
}
} else
{return and__3822__auto____5661;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5663 = this;
return (new cljs.core.Set(meta,this__5663.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5664 = this;
return this__5664.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5665 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__5665.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__5675 = cljs.core.seq.call(null,coll);
var out__5676 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__5675))))
{{
var G__5677 = cljs.core.rest.call(null,in$__5675);
var G__5678 = cljs.core.conj.call(null,out__5676,cljs.core.first.call(null,in$__5675));
in$__5675 = G__5677;
out__5676 = G__5678;
continue;
}
} else
{return out__5676;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__5679 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____5680 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3971__auto____5680))
{var e__5681 = temp__3971__auto____5680;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__5681));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__5679,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__5674_SHARP_){
var temp__3971__auto____5682 = cljs.core.find.call(null,smap,p1__5674_SHARP_);

if(cljs.core.truth_(temp__3971__auto____5682))
{var e__5683 = temp__3971__auto____5682;

return cljs.core.second.call(null,e__5683);
} else
{return p1__5674_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__5691 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__5684,seen){
while(true){
var vec__5685__5686 = p__5684;
var f__5687 = cljs.core.nth.call(null,vec__5685__5686,0,null);
var xs__5688 = vec__5685__5686;

var temp__3974__auto____5689 = cljs.core.seq.call(null,xs__5688);

if(cljs.core.truth_(temp__3974__auto____5689))
{var s__5690 = temp__3974__auto____5689;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__5687)))
{{
var G__5692 = cljs.core.rest.call(null,s__5690);
var G__5693 = seen;
p__5684 = G__5692;
seen = G__5693;
continue;
}
} else
{return cljs.core.cons.call(null,f__5687,step.call(null,cljs.core.rest.call(null,s__5690),cljs.core.conj.call(null,seen,f__5687)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__5691.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__5694 = cljs.core.PersistentVector.fromArray([]);
var s__5695 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__5695)))
{{
var G__5696 = cljs.core.conj.call(null,ret__5694,cljs.core.first.call(null,s__5695));
var G__5697 = cljs.core.next.call(null,s__5695);
ret__5694 = G__5696;
s__5695 = G__5697;
continue;
}
} else
{return cljs.core.seq.call(null,ret__5694);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3824__auto____5698 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3824__auto____5698))
{return or__3824__auto____5698;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__5699 = x.lastIndexOf("/");

if(cljs.core.truth_((i__5699 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__5699 + 1));
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3824__auto____5700 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3824__auto____5700))
{return or__3824__auto____5700;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__5701 = x.lastIndexOf("/");

if(cljs.core.truth_((i__5701 > -1)))
{return cljs.core.subs.call(null,x,2,i__5701);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__5704 = cljs.core.ObjMap.fromObject([],{});
var ks__5705 = cljs.core.seq.call(null,keys);
var vs__5706 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3822__auto____5707 = ks__5705;

if(cljs.core.truth_(and__3822__auto____5707))
{return vs__5706;
} else
{return and__3822__auto____5707;
}
})()))
{{
var G__5708 = cljs.core.assoc.call(null,map__5704,cljs.core.first.call(null,ks__5705),cljs.core.first.call(null,vs__5706));
var G__5709 = cljs.core.next.call(null,ks__5705);
var G__5710 = cljs.core.next.call(null,vs__5706);
map__5704 = G__5708;
ks__5705 = G__5709;
vs__5706 = G__5710;
continue;
}
} else
{return map__5704;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__5713 = (function (k,x){
return x;
});
var max_key__5714 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__5715 = (function() { 
var G__5717__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__5702_SHARP_,p2__5703_SHARP_){
return max_key.call(null,k,p1__5702_SHARP_,p2__5703_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__5717 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5717__delegate.call(this, k, x, y, more);
};
G__5717.cljs$lang$maxFixedArity = 3;
G__5717.cljs$lang$applyTo = (function (arglist__5718){
var k = cljs.core.first(arglist__5718);
var x = cljs.core.first(cljs.core.next(arglist__5718));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5718)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5718)));
return G__5717__delegate.call(this, k, x, y, more);
});
return G__5717;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__5713.call(this,k,x);
case  3 :
return max_key__5714.call(this,k,x,y);
default:
return max_key__5715.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__5715.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__5719 = (function (k,x){
return x;
});
var min_key__5720 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__5721 = (function() { 
var G__5723__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__5711_SHARP_,p2__5712_SHARP_){
return min_key.call(null,k,p1__5711_SHARP_,p2__5712_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__5723 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5723__delegate.call(this, k, x, y, more);
};
G__5723.cljs$lang$maxFixedArity = 3;
G__5723.cljs$lang$applyTo = (function (arglist__5724){
var k = cljs.core.first(arglist__5724);
var x = cljs.core.first(cljs.core.next(arglist__5724));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5724)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5724)));
return G__5723__delegate.call(this, k, x, y, more);
});
return G__5723;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__5719.call(this,k,x);
case  3 :
return min_key__5720.call(this,k,x,y);
default:
return min_key__5721.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__5721.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__5727 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__5728 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5725 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5725))
{var s__5726 = temp__3974__auto____5725;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__5726),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__5726)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__5727.call(this,n,step);
case  3 :
return partition_all__5728.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5730 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5730))
{var s__5731 = temp__3974__auto____5730;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__5731))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__5731),take_while.call(null,pred,cljs.core.rest.call(null,s__5731)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__5732 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__5733 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__5749 = null;
var G__5749__5750 = (function (rng,f){
var this__5734 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__5749__5751 = (function (rng,f,s){
var this__5735 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__5749 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__5749__5750.call(this,rng,f);
case  3 :
return G__5749__5751.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5749;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__5736 = this;
var comp__5737 = (cljs.core.truth_((this__5736.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__5737.call(null,this__5736.start,this__5736.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__5738 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__5738.end - this__5738.start) / this__5738.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__5739 = this;
return this__5739.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__5740 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__5740.meta,(this__5740.start + this__5740.step),this__5740.end,this__5740.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__5741 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__5742 = this;
return (new cljs.core.Range(meta,this__5742.start,this__5742.end,this__5742.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__5743 = this;
return this__5743.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__5753 = null;
var G__5753__5754 = (function (rng,n){
var this__5744 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__5744.start + (n * this__5744.step));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____5745 = (this__5744.start > this__5744.end);

if(cljs.core.truth_(and__3822__auto____5745))
{return cljs.core._EQ_.call(null,this__5744.step,0);
} else
{return and__3822__auto____5745;
}
})()))
{return this__5744.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__5753__5755 = (function (rng,n,not_found){
var this__5746 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__5746.start + (n * this__5746.step));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____5747 = (this__5746.start > this__5746.end);

if(cljs.core.truth_(and__3822__auto____5747))
{return cljs.core._EQ_.call(null,this__5746.step,0);
} else
{return and__3822__auto____5747;
}
})()))
{return this__5746.start;
} else
{return not_found;
}
}
});
G__5753 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__5753__5754.call(this,rng,n);
case  3 :
return G__5753__5755.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5753;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__5748 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5748.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__5757 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__5758 = (function (end){
return range.call(null,0,end,1);
});
var range__5759 = (function (start,end){
return range.call(null,start,end,1);
});
var range__5760 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__5757.call(this);
case  1 :
return range__5758.call(this,start);
case  2 :
return range__5759.call(this,start,end);
case  3 :
return range__5760.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5762 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5762))
{var s__5763 = temp__3974__auto____5762;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__5763),take_nth.call(null,n,cljs.core.drop.call(null,n,s__5763)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5765 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5765))
{var s__5766 = temp__3974__auto____5765;

var fst__5767 = cljs.core.first.call(null,s__5766);
var fv__5768 = f.call(null,fst__5767);
var run__5769 = cljs.core.cons.call(null,fst__5767,cljs.core.take_while.call(null,(function (p1__5764_SHARP_){
return cljs.core._EQ_.call(null,fv__5768,f.call(null,p1__5764_SHARP_));
}),cljs.core.next.call(null,s__5766)));

return cljs.core.cons.call(null,run__5769,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__5769),s__5766))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__5784 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____5780 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3971__auto____5780))
{var s__5781 = temp__3971__auto____5780;

return reductions.call(null,f,cljs.core.first.call(null,s__5781),cljs.core.rest.call(null,s__5781));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__5785 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5782 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5782))
{var s__5783 = temp__3974__auto____5782;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__5783)),cljs.core.rest.call(null,s__5783));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__5784.call(this,f,init);
case  3 :
return reductions__5785.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__5788 = (function (f){
return (function() {
var G__5793 = null;
var G__5793__5794 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__5793__5795 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__5793__5796 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__5793__5797 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__5793__5798 = (function() { 
var G__5800__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__5800 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5800__delegate.call(this, x, y, z, args);
};
G__5800.cljs$lang$maxFixedArity = 3;
G__5800.cljs$lang$applyTo = (function (arglist__5801){
var x = cljs.core.first(arglist__5801);
var y = cljs.core.first(cljs.core.next(arglist__5801));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5801)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5801)));
return G__5800__delegate.call(this, x, y, z, args);
});
return G__5800;
})()
;
G__5793 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5793__5794.call(this);
case  1 :
return G__5793__5795.call(this,x);
case  2 :
return G__5793__5796.call(this,x,y);
case  3 :
return G__5793__5797.call(this,x,y,z);
default:
return G__5793__5798.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5793.cljs$lang$maxFixedArity = 3;
G__5793.cljs$lang$applyTo = G__5793__5798.cljs$lang$applyTo;
return G__5793;
})()
});
var juxt__5789 = (function (f,g){
return (function() {
var G__5802 = null;
var G__5802__5803 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__5802__5804 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__5802__5805 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__5802__5806 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__5802__5807 = (function() { 
var G__5809__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__5809 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5809__delegate.call(this, x, y, z, args);
};
G__5809.cljs$lang$maxFixedArity = 3;
G__5809.cljs$lang$applyTo = (function (arglist__5810){
var x = cljs.core.first(arglist__5810);
var y = cljs.core.first(cljs.core.next(arglist__5810));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5810)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5810)));
return G__5809__delegate.call(this, x, y, z, args);
});
return G__5809;
})()
;
G__5802 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5802__5803.call(this);
case  1 :
return G__5802__5804.call(this,x);
case  2 :
return G__5802__5805.call(this,x,y);
case  3 :
return G__5802__5806.call(this,x,y,z);
default:
return G__5802__5807.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5802.cljs$lang$maxFixedArity = 3;
G__5802.cljs$lang$applyTo = G__5802__5807.cljs$lang$applyTo;
return G__5802;
})()
});
var juxt__5790 = (function (f,g,h){
return (function() {
var G__5811 = null;
var G__5811__5812 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__5811__5813 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__5811__5814 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__5811__5815 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__5811__5816 = (function() { 
var G__5818__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__5818 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5818__delegate.call(this, x, y, z, args);
};
G__5818.cljs$lang$maxFixedArity = 3;
G__5818.cljs$lang$applyTo = (function (arglist__5819){
var x = cljs.core.first(arglist__5819);
var y = cljs.core.first(cljs.core.next(arglist__5819));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5819)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5819)));
return G__5818__delegate.call(this, x, y, z, args);
});
return G__5818;
})()
;
G__5811 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5811__5812.call(this);
case  1 :
return G__5811__5813.call(this,x);
case  2 :
return G__5811__5814.call(this,x,y);
case  3 :
return G__5811__5815.call(this,x,y,z);
default:
return G__5811__5816.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5811.cljs$lang$maxFixedArity = 3;
G__5811.cljs$lang$applyTo = G__5811__5816.cljs$lang$applyTo;
return G__5811;
})()
});
var juxt__5791 = (function() { 
var G__5820__delegate = function (f,g,h,fs){
var fs__5787 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__5821 = null;
var G__5821__5822 = (function (){
return cljs.core.reduce.call(null,(function (p1__5770_SHARP_,p2__5771_SHARP_){
return cljs.core.conj.call(null,p1__5770_SHARP_,p2__5771_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__5787);
});
var G__5821__5823 = (function (x){
return cljs.core.reduce.call(null,(function (p1__5772_SHARP_,p2__5773_SHARP_){
return cljs.core.conj.call(null,p1__5772_SHARP_,p2__5773_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__5787);
});
var G__5821__5824 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__5774_SHARP_,p2__5775_SHARP_){
return cljs.core.conj.call(null,p1__5774_SHARP_,p2__5775_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__5787);
});
var G__5821__5825 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__5776_SHARP_,p2__5777_SHARP_){
return cljs.core.conj.call(null,p1__5776_SHARP_,p2__5777_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__5787);
});
var G__5821__5826 = (function() { 
var G__5828__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__5778_SHARP_,p2__5779_SHARP_){
return cljs.core.conj.call(null,p1__5778_SHARP_,cljs.core.apply.call(null,p2__5779_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__5787);
};
var G__5828 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5828__delegate.call(this, x, y, z, args);
};
G__5828.cljs$lang$maxFixedArity = 3;
G__5828.cljs$lang$applyTo = (function (arglist__5829){
var x = cljs.core.first(arglist__5829);
var y = cljs.core.first(cljs.core.next(arglist__5829));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5829)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5829)));
return G__5828__delegate.call(this, x, y, z, args);
});
return G__5828;
})()
;
G__5821 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5821__5822.call(this);
case  1 :
return G__5821__5823.call(this,x);
case  2 :
return G__5821__5824.call(this,x,y);
case  3 :
return G__5821__5825.call(this,x,y,z);
default:
return G__5821__5826.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5821.cljs$lang$maxFixedArity = 3;
G__5821.cljs$lang$applyTo = G__5821__5826.cljs$lang$applyTo;
return G__5821;
})()
};
var G__5820 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5820__delegate.call(this, f, g, h, fs);
};
G__5820.cljs$lang$maxFixedArity = 3;
G__5820.cljs$lang$applyTo = (function (arglist__5830){
var f = cljs.core.first(arglist__5830);
var g = cljs.core.first(cljs.core.next(arglist__5830));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5830)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5830)));
return G__5820__delegate.call(this, f, g, h, fs);
});
return G__5820;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__5788.call(this,f);
case  2 :
return juxt__5789.call(this,f,g);
case  3 :
return juxt__5790.call(this,f,g,h);
default:
return juxt__5791.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__5791.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__5832 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__5835 = cljs.core.next.call(null,coll);
coll = G__5835;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__5833 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____5831 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3822__auto____5831))
{return (n > 0);
} else
{return and__3822__auto____5831;
}
})()))
{{
var G__5836 = (n - 1);
var G__5837 = cljs.core.next.call(null,coll);
n = G__5836;
coll = G__5837;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__5832.call(this,n);
case  2 :
return dorun__5833.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__5838 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__5839 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__5838.call(this,n);
case  2 :
return doall__5839.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__5841 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__5841),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__5841),1)))
{return cljs.core.first.call(null,matches__5841);
} else
{return cljs.core.vec.call(null,matches__5841);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__5842 = re.exec(s);

if(cljs.core.truth_((matches__5842 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__5842),1)))
{return cljs.core.first.call(null,matches__5842);
} else
{return cljs.core.vec.call(null,matches__5842);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__5843 = cljs.core.re_find.call(null,re,s);
var match_idx__5844 = s.search(re);
var match_str__5845 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__5843))?cljs.core.first.call(null,match_data__5843):match_data__5843);
var post_match__5846 = cljs.core.subs.call(null,s,(match_idx__5844 + cljs.core.count.call(null,match_str__5845)));

if(cljs.core.truth_(match_data__5843))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__5843,re_seq.call(null,re,post_match__5846));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__5848__5849 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___5850 = cljs.core.nth.call(null,vec__5848__5849,0,null);
var flags__5851 = cljs.core.nth.call(null,vec__5848__5849,1,null);
var pattern__5852 = cljs.core.nth.call(null,vec__5848__5849,2,null);

return (new RegExp(pattern__5852,flags__5851));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__5847_SHARP_){
return print_one.call(null,p1__5847_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_((obj === null)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____5853 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3822__auto____5853))
{var and__3822__auto____5857 = (function (){var x__359__auto____5854 = obj;

if(cljs.core.truth_((function (){var and__3822__auto____5855 = x__359__auto____5854;

if(cljs.core.truth_(and__3822__auto____5855))
{var and__3822__auto____5856 = x__359__auto____5854.cljs$core$IMeta$;

if(cljs.core.truth_(and__3822__auto____5856))
{return cljs.core.not.call(null,x__359__auto____5854.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3822__auto____5856;
}
} else
{return and__3822__auto____5855;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__359__auto____5854);
}
})();

if(cljs.core.truth_(and__3822__auto____5857))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____5857;
}
} else
{return and__3822__auto____5853;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__359__auto____5858 = obj;

if(cljs.core.truth_((function (){var and__3822__auto____5859 = x__359__auto____5858;

if(cljs.core.truth_(and__3822__auto____5859))
{var and__3822__auto____5860 = x__359__auto____5858.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3822__auto____5860))
{return cljs.core.not.call(null,x__359__auto____5858.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3822__auto____5860;
}
} else
{return and__3822__auto____5859;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__359__auto____5858);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__5861 = cljs.core.first.call(null,objs);
var sb__5862 = (new goog.string.StringBuffer());

var G__5863__5864 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__5863__5864))
{var obj__5865 = cljs.core.first.call(null,G__5863__5864);
var G__5863__5866 = G__5863__5864;

while(true){
if(cljs.core.truth_((obj__5865 === first_obj__5861)))
{} else
{sb__5862.append(" ");
}
var G__5867__5868 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__5865,opts));

if(cljs.core.truth_(G__5867__5868))
{var string__5869 = cljs.core.first.call(null,G__5867__5868);
var G__5867__5870 = G__5867__5868;

while(true){
sb__5862.append(string__5869);
var temp__3974__auto____5871 = cljs.core.next.call(null,G__5867__5870);

if(cljs.core.truth_(temp__3974__auto____5871))
{var G__5867__5872 = temp__3974__auto____5871;

{
var G__5875 = cljs.core.first.call(null,G__5867__5872);
var G__5876 = G__5867__5872;
string__5869 = G__5875;
G__5867__5870 = G__5876;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____5873 = cljs.core.next.call(null,G__5863__5866);

if(cljs.core.truth_(temp__3974__auto____5873))
{var G__5863__5874 = temp__3974__auto____5873;

{
var G__5877 = cljs.core.first.call(null,G__5863__5874);
var G__5878 = G__5863__5874;
obj__5865 = G__5877;
G__5863__5866 = G__5878;
continue;
}
} else
{}
break;
}
} else
{}
return sb__5862;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return cljs.core.str.call(null,cljs.core.pr_sb.call(null,objs,opts));
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__5879 = cljs.core.pr_sb.call(null,objs,opts);

sb__5879.append("\n");
return cljs.core.str.call(null,sb__5879);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__5880 = cljs.core.first.call(null,objs);

var G__5881__5882 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__5881__5882))
{var obj__5883 = cljs.core.first.call(null,G__5881__5882);
var G__5881__5884 = G__5881__5882;

while(true){
if(cljs.core.truth_((obj__5883 === first_obj__5880)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__5885__5886 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__5883,opts));

if(cljs.core.truth_(G__5885__5886))
{var string__5887 = cljs.core.first.call(null,G__5885__5886);
var G__5885__5888 = G__5885__5886;

while(true){
cljs.core.string_print.call(null,string__5887);
var temp__3974__auto____5889 = cljs.core.next.call(null,G__5885__5888);

if(cljs.core.truth_(temp__3974__auto____5889))
{var G__5885__5890 = temp__3974__auto____5889;

{
var G__5893 = cljs.core.first.call(null,G__5885__5890);
var G__5894 = G__5885__5890;
string__5887 = G__5893;
G__5885__5888 = G__5894;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____5891 = cljs.core.next.call(null,G__5881__5884);

if(cljs.core.truth_(temp__3974__auto____5891))
{var G__5881__5892 = temp__3974__auto____5891;

{
var G__5895 = cljs.core.first.call(null,G__5881__5892);
var G__5896 = G__5881__5892;
obj__5883 = G__5895;
G__5881__5884 = G__5896;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__5897){
var objs = cljs.core.seq( arglist__5897 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__5898){
var objs = cljs.core.seq( arglist__5898 );;
return prn_str__delegate.call(this, objs);
});
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__5899){
var objs = cljs.core.seq( arglist__5899 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__5900){
var objs = cljs.core.seq( arglist__5900 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__5901){
var objs = cljs.core.seq( arglist__5901 );;
return print_str__delegate.call(this, objs);
});
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__5902){
var objs = cljs.core.seq( arglist__5902 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__5903){
var objs = cljs.core.seq( arglist__5903 );;
return println_str__delegate.call(this, objs);
});
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__5904){
var objs = cljs.core.seq( arglist__5904 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__5905 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__5905,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3974__auto____5906 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3974__auto____5906))
{var nspc__5907 = temp__3974__auto____5906;

return cljs.core.str.call(null,nspc__5907,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3974__auto____5908 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3974__auto____5908))
{var nspc__5909 = temp__3974__auto____5908;

return cljs.core.str.call(null,nspc__5909,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__5910 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__5910,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__5911 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__5912 = this;
var G__5913__5914 = cljs.core.seq.call(null,this__5912.watches);

if(cljs.core.truth_(G__5913__5914))
{var G__5916__5918 = cljs.core.first.call(null,G__5913__5914);
var vec__5917__5919 = G__5916__5918;
var key__5920 = cljs.core.nth.call(null,vec__5917__5919,0,null);
var f__5921 = cljs.core.nth.call(null,vec__5917__5919,1,null);
var G__5913__5922 = G__5913__5914;

var G__5916__5923 = G__5916__5918;
var G__5913__5924 = G__5913__5922;

while(true){
var vec__5925__5926 = G__5916__5923;
var key__5927 = cljs.core.nth.call(null,vec__5925__5926,0,null);
var f__5928 = cljs.core.nth.call(null,vec__5925__5926,1,null);
var G__5913__5929 = G__5913__5924;

f__5928.call(null,key__5927,this$,oldval,newval);
var temp__3974__auto____5930 = cljs.core.next.call(null,G__5913__5929);

if(cljs.core.truth_(temp__3974__auto____5930))
{var G__5913__5931 = temp__3974__auto____5930;

{
var G__5938 = cljs.core.first.call(null,G__5913__5931);
var G__5939 = G__5913__5931;
G__5916__5923 = G__5938;
G__5913__5924 = G__5939;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__5932 = this;
return this$.watches = cljs.core.assoc.call(null,this__5932.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__5933 = this;
return this$.watches = cljs.core.dissoc.call(null,this__5933.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__5934 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__5934.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__5935 = this;
return this__5935.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__5936 = this;
return this__5936.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__5937 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__5946 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__5947 = (function() { 
var G__5949__delegate = function (x,p__5940){
var map__5941__5942 = p__5940;
var map__5941__5943 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5941__5942))?cljs.core.apply.call(null,cljs.core.hash_map,map__5941__5942):map__5941__5942);
var validator__5944 = cljs.core.get.call(null,map__5941__5943,"\uFDD0'validator");
var meta__5945 = cljs.core.get.call(null,map__5941__5943,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__5945,validator__5944,null));
};
var G__5949 = function (x,var_args){
var p__5940 = null;
if (goog.isDef(var_args)) {
  p__5940 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5949__delegate.call(this, x, p__5940);
};
G__5949.cljs$lang$maxFixedArity = 1;
G__5949.cljs$lang$applyTo = (function (arglist__5950){
var x = cljs.core.first(arglist__5950);
var p__5940 = cljs.core.rest(arglist__5950);
return G__5949__delegate.call(this, x, p__5940);
});
return G__5949;
})()
;
atom = function(x,var_args){
var p__5940 = var_args;
switch(arguments.length){
case  1 :
return atom__5946.call(this,x);
default:
return atom__5947.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__5947.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____5951 = a.validator;

if(cljs.core.truth_(temp__3974__auto____5951))
{var validate__5952 = temp__3974__auto____5951;

if(cljs.core.truth_(validate__5952.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__5953 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__5953,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___5954 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___5955 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___5956 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5957 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___5958 = (function() { 
var G__5960__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__5960 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__5960__delegate.call(this, a, f, x, y, z, more);
};
G__5960.cljs$lang$maxFixedArity = 5;
G__5960.cljs$lang$applyTo = (function (arglist__5961){
var a = cljs.core.first(arglist__5961);
var f = cljs.core.first(cljs.core.next(arglist__5961));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5961)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5961))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5961)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5961)))));
return G__5960__delegate.call(this, a, f, x, y, z, more);
});
return G__5960;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___5954.call(this,a,f);
case  3 :
return swap_BANG___5955.call(this,a,f,x);
case  4 :
return swap_BANG___5956.call(this,a,f,x,y);
case  5 :
return swap_BANG___5957.call(this,a,f,x,y,z);
default:
return swap_BANG___5958.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___5958.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__5962){
var iref = cljs.core.first(arglist__5962);
var f = cljs.core.first(cljs.core.next(arglist__5962));
var args = cljs.core.rest(cljs.core.next(arglist__5962));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__5963 = (function (){
return gensym.call(null,"G__");
});
var gensym__5964 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__5963.call(this);
case  1 :
return gensym__5964.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__5966 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__5966.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__5967 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__5967.state,(function (p__5968){
var curr_state__5969 = p__5968;
var curr_state__5970 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__5969))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__5969):curr_state__5969);
var done__5971 = cljs.core.get.call(null,curr_state__5970,"\uFDD0'done");

if(cljs.core.truth_(done__5971))
{return curr_state__5970;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__5967.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__5972__5973 = options;
var map__5972__5974 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5972__5973))?cljs.core.apply.call(null,cljs.core.hash_map,map__5972__5973):map__5972__5973);
var keywordize_keys__5975 = cljs.core.get.call(null,map__5972__5974,"\uFDD0'keywordize-keys");
var keyfn__5976 = (cljs.core.truth_(keywordize_keys__5975)?cljs.core.keyword:cljs.core.str);
var f__5982 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__428__auto____5981 = (function iter__5977(s__5978){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5978__5979 = s__5978;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__5978__5979)))
{var k__5980 = cljs.core.first.call(null,s__5978__5979);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__5976.call(null,k__5980),thisfn.call(null,(x[k__5980]))]),iter__5977.call(null,cljs.core.rest.call(null,s__5978__5979)));
} else
{return null;
}
break;
}
})));
});

return iter__428__auto____5981.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__5982.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__5983){
var x = cljs.core.first(arglist__5983);
var options = cljs.core.rest(arglist__5983);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__5984 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__5988__delegate = function (args){
var temp__3971__auto____5985 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__5984),args);

if(cljs.core.truth_(temp__3971__auto____5985))
{var v__5986 = temp__3971__auto____5985;

return v__5986;
} else
{var ret__5987 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__5984,cljs.core.assoc,args,ret__5987);
return ret__5987;
}
};
var G__5988 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5988__delegate.call(this, args);
};
G__5988.cljs$lang$maxFixedArity = 0;
G__5988.cljs$lang$applyTo = (function (arglist__5989){
var args = cljs.core.seq( arglist__5989 );;
return G__5988__delegate.call(this, args);
});
return G__5988;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__5991 = (function (f){
while(true){
var ret__5990 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__5990)))
{{
var G__5994 = ret__5990;
f = G__5994;
continue;
}
} else
{return ret__5990;
}
break;
}
});
var trampoline__5992 = (function() { 
var G__5995__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__5995 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5995__delegate.call(this, f, args);
};
G__5995.cljs$lang$maxFixedArity = 1;
G__5995.cljs$lang$applyTo = (function (arglist__5996){
var f = cljs.core.first(arglist__5996);
var args = cljs.core.rest(arglist__5996);
return G__5995__delegate.call(this, f, args);
});
return G__5995;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__5991.call(this,f);
default:
return trampoline__5992.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__5992.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__5997 = (function (){
return rand.call(null,1);
});
var rand__5998 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__5997.call(this);
case  1 :
return rand__5998.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__6000 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__6000,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__6000,cljs.core.PersistentVector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___6009 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___6010 = (function (h,child,parent){
var or__3824__auto____6001 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3824__auto____6001))
{return or__3824__auto____6001;
} else
{var or__3824__auto____6002 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3824__auto____6002))
{return or__3824__auto____6002;
} else
{var and__3822__auto____6003 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3822__auto____6003))
{var and__3822__auto____6004 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3822__auto____6004))
{var and__3822__auto____6005 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3822__auto____6005))
{var ret__6006 = true;
var i__6007 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3824__auto____6008 = cljs.core.not.call(null,ret__6006);

if(cljs.core.truth_(or__3824__auto____6008))
{return or__3824__auto____6008;
} else
{return cljs.core._EQ_.call(null,i__6007,cljs.core.count.call(null,parent));
}
})()))
{return ret__6006;
} else
{{
var G__6012 = isa_QMARK_.call(null,h,child.call(null,i__6007),parent.call(null,i__6007));
var G__6013 = (i__6007 + 1);
ret__6006 = G__6012;
i__6007 = G__6013;
continue;
}
}
break;
}
} else
{return and__3822__auto____6005;
}
} else
{return and__3822__auto____6004;
}
} else
{return and__3822__auto____6003;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___6009.call(this,h,child);
case  3 :
return isa_QMARK___6010.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__6014 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__6015 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__6014.call(this,h);
case  2 :
return parents__6015.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__6017 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__6018 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__6017.call(this,h);
case  2 :
return ancestors__6018.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__6020 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__6021 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__6020.call(this,h);
case  2 :
return descendants__6021.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__6031 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__6032 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__6026 = "\uFDD0'parents".call(null,h);
var td__6027 = "\uFDD0'descendants".call(null,h);
var ta__6028 = "\uFDD0'ancestors".call(null,h);
var tf__6029 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3824__auto____6030 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__6026.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__6028.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__6028.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__6026,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__6029.call(null,"\uFDD0'ancestors".call(null,h),tag,td__6027,parent,ta__6028),"\uFDD0'descendants":tf__6029.call(null,"\uFDD0'descendants".call(null,h),parent,ta__6028,tag,td__6027)});
})());

if(cljs.core.truth_(or__3824__auto____6030))
{return or__3824__auto____6030;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__6031.call(this,h,tag);
case  3 :
return derive__6032.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__6038 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__6039 = (function (h,tag,parent){
var parentMap__6034 = "\uFDD0'parents".call(null,h);
var childsParents__6035 = (cljs.core.truth_(parentMap__6034.call(null,tag))?cljs.core.disj.call(null,parentMap__6034.call(null,tag),parent):cljs.core.set([]));
var newParents__6036 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__6035))?cljs.core.assoc.call(null,parentMap__6034,tag,childsParents__6035):cljs.core.dissoc.call(null,parentMap__6034,tag));
var deriv_seq__6037 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__6023_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__6023_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__6023_SHARP_),cljs.core.second.call(null,p1__6023_SHARP_)));
}),cljs.core.seq.call(null,newParents__6036)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__6034.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__6024_SHARP_,p2__6025_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__6024_SHARP_,p2__6025_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__6037));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__6038.call(this,h,tag);
case  3 :
return underive__6039.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__6041 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3824__auto____6043 = (cljs.core.truth_((function (){var and__3822__auto____6042 = xprefs__6041;

if(cljs.core.truth_(and__3822__auto____6042))
{return xprefs__6041.call(null,y);
} else
{return and__3822__auto____6042;
}
})())?true:null);

if(cljs.core.truth_(or__3824__auto____6043))
{return or__3824__auto____6043;
} else
{var or__3824__auto____6045 = (function (){var ps__6044 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__6044) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__6044),prefer_table)))
{} else
{}
{
var G__6048 = cljs.core.rest.call(null,ps__6044);
ps__6044 = G__6048;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3824__auto____6045))
{return or__3824__auto____6045;
} else
{var or__3824__auto____6047 = (function (){var ps__6046 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__6046) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__6046),y,prefer_table)))
{} else
{}
{
var G__6049 = cljs.core.rest.call(null,ps__6046);
ps__6046 = G__6049;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3824__auto____6047))
{return or__3824__auto____6047;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____6050 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3824__auto____6050))
{return or__3824__auto____6050;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__6059 = cljs.core.reduce.call(null,(function (be,p__6051){
var vec__6052__6053 = p__6051;
var k__6054 = cljs.core.nth.call(null,vec__6052__6053,0,null);
var ___6055 = cljs.core.nth.call(null,vec__6052__6053,1,null);
var e__6056 = vec__6052__6053;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__6054)))
{var be2__6058 = (cljs.core.truth_((function (){var or__3824__auto____6057 = (be === null);

if(cljs.core.truth_(or__3824__auto____6057))
{return or__3824__auto____6057;
} else
{return cljs.core.dominates.call(null,k__6054,cljs.core.first.call(null,be),prefer_table);
}
})())?e__6056:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__6058),k__6054,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__6054," and ",cljs.core.first.call(null,be2__6058),", and neither is preferred")));
}
return be2__6058;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__6059))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__6059));
return cljs.core.second.call(null,best_entry__6059);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3822__auto____6060 = mf;

if(cljs.core.truth_(and__3822__auto____6060))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3822__auto____6060;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3824__auto____6061 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____6061))
{return or__3824__auto____6061;
} else
{var or__3824__auto____6062 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3824__auto____6062))
{return or__3824__auto____6062;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3822__auto____6063 = mf;

if(cljs.core.truth_(and__3822__auto____6063))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3822__auto____6063;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____6064 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____6064))
{return or__3824__auto____6064;
} else
{var or__3824__auto____6065 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3824__auto____6065))
{return or__3824__auto____6065;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3822__auto____6066 = mf;

if(cljs.core.truth_(and__3822__auto____6066))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3822__auto____6066;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____6067 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____6067))
{return or__3824__auto____6067;
} else
{var or__3824__auto____6068 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3824__auto____6068))
{return or__3824__auto____6068;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3822__auto____6069 = mf;

if(cljs.core.truth_(and__3822__auto____6069))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3822__auto____6069;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____6070 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____6070))
{return or__3824__auto____6070;
} else
{var or__3824__auto____6071 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3824__auto____6071))
{return or__3824__auto____6071;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3822__auto____6072 = mf;

if(cljs.core.truth_(and__3822__auto____6072))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3822__auto____6072;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____6073 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____6073))
{return or__3824__auto____6073;
} else
{var or__3824__auto____6074 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3824__auto____6074))
{return or__3824__auto____6074;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3822__auto____6075 = mf;

if(cljs.core.truth_(and__3822__auto____6075))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3822__auto____6075;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3824__auto____6076 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____6076))
{return or__3824__auto____6076;
} else
{var or__3824__auto____6077 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3824__auto____6077))
{return or__3824__auto____6077;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3822__auto____6078 = mf;

if(cljs.core.truth_(and__3822__auto____6078))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3822__auto____6078;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3824__auto____6079 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____6079))
{return or__3824__auto____6079;
} else
{var or__3824__auto____6080 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3824__auto____6080))
{return or__3824__auto____6080;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3822__auto____6081 = mf;

if(cljs.core.truth_(and__3822__auto____6081))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3822__auto____6081;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3824__auto____6082 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____6082))
{return or__3824__auto____6082;
} else
{var or__3824__auto____6083 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3824__auto____6083))
{return or__3824__auto____6083;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__6084 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__6085 = cljs.core._get_method.call(null,mf,dispatch_val__6084);

if(cljs.core.truth_(target_fn__6085))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__6084)));
}
return cljs.core.apply.call(null,target_fn__6085,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__6086 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__6087 = this;
cljs.core.swap_BANG_.call(null,this__6087.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6087.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6087.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__6087.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__6088 = this;
cljs.core.swap_BANG_.call(null,this__6088.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__6088.method_cache,this__6088.method_table,this__6088.cached_hierarchy,this__6088.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__6089 = this;
cljs.core.swap_BANG_.call(null,this__6089.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__6089.method_cache,this__6089.method_table,this__6089.cached_hierarchy,this__6089.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__6090 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__6090.cached_hierarchy),cljs.core.deref.call(null,this__6090.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__6090.method_cache,this__6090.method_table,this__6090.cached_hierarchy,this__6090.hierarchy);
}
var temp__3971__auto____6091 = cljs.core.deref.call(null,this__6090.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3971__auto____6091))
{var target_fn__6092 = temp__3971__auto____6091;

return target_fn__6092;
} else
{var temp__3971__auto____6093 = cljs.core.find_and_cache_best_method.call(null,this__6090.name,dispatch_val,this__6090.hierarchy,this__6090.method_table,this__6090.prefer_table,this__6090.method_cache,this__6090.cached_hierarchy);

if(cljs.core.truth_(temp__3971__auto____6093))
{var target_fn__6094 = temp__3971__auto____6093;

return target_fn__6094;
} else
{return cljs.core.deref.call(null,this__6090.method_table).call(null,this__6090.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__6095 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__6095.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__6095.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__6095.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__6095.method_cache,this__6095.method_table,this__6095.cached_hierarchy,this__6095.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__6096 = this;
return cljs.core.deref.call(null,this__6096.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__6097 = this;
return cljs.core.deref.call(null,this__6097.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__6098 = this;
return cljs.core.do_dispatch.call(null,mf,this__6098.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__6099__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__6099 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6099__delegate.call(this, _, args);
};
G__6099.cljs$lang$maxFixedArity = 1;
G__6099.cljs$lang$applyTo = (function (arglist__6100){
var _ = cljs.core.first(arglist__6100);
var args = cljs.core.rest(arglist__6100);
return G__6099__delegate.call(this, _, args);
});
return G__6099;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
