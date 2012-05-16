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
var or__3824__auto____30290 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3824__auto____30290))
{return or__3824__auto____30290;
} else
{var or__3824__auto____30291 = (p["_"]);

if(cljs.core.truth_(or__3824__auto____30291))
{return or__3824__auto____30291;
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
var _invoke__30355 = (function (this$){
if(cljs.core.truth_((function (){var and__3822__auto____30292 = this$;

if(cljs.core.truth_(and__3822__auto____30292))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30292;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3824__auto____30293 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30293))
{return or__3824__auto____30293;
} else
{var or__3824__auto____30294 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30294))
{return or__3824__auto____30294;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__30356 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3822__auto____30295 = this$;

if(cljs.core.truth_(and__3822__auto____30295))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30295;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3824__auto____30296 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30296))
{return or__3824__auto____30296;
} else
{var or__3824__auto____30297 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30297))
{return or__3824__auto____30297;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__30357 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3822__auto____30298 = this$;

if(cljs.core.truth_(and__3822__auto____30298))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30298;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3824__auto____30299 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30299))
{return or__3824__auto____30299;
} else
{var or__3824__auto____30300 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30300))
{return or__3824__auto____30300;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__30358 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3822__auto____30301 = this$;

if(cljs.core.truth_(and__3822__auto____30301))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30301;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3824__auto____30302 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30302))
{return or__3824__auto____30302;
} else
{var or__3824__auto____30303 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30303))
{return or__3824__auto____30303;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__30359 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3822__auto____30304 = this$;

if(cljs.core.truth_(and__3822__auto____30304))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30304;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____30305 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30305))
{return or__3824__auto____30305;
} else
{var or__3824__auto____30306 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30306))
{return or__3824__auto____30306;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__30360 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3822__auto____30307 = this$;

if(cljs.core.truth_(and__3822__auto____30307))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30307;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____30308 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30308))
{return or__3824__auto____30308;
} else
{var or__3824__auto____30309 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30309))
{return or__3824__auto____30309;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__30361 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3822__auto____30310 = this$;

if(cljs.core.truth_(and__3822__auto____30310))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30310;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____30311 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30311))
{return or__3824__auto____30311;
} else
{var or__3824__auto____30312 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30312))
{return or__3824__auto____30312;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__30362 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3822__auto____30313 = this$;

if(cljs.core.truth_(and__3822__auto____30313))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30313;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____30314 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30314))
{return or__3824__auto____30314;
} else
{var or__3824__auto____30315 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30315))
{return or__3824__auto____30315;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__30363 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3822__auto____30316 = this$;

if(cljs.core.truth_(and__3822__auto____30316))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30316;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____30317 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30317))
{return or__3824__auto____30317;
} else
{var or__3824__auto____30318 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30318))
{return or__3824__auto____30318;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__30364 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3822__auto____30319 = this$;

if(cljs.core.truth_(and__3822__auto____30319))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30319;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____30320 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30320))
{return or__3824__auto____30320;
} else
{var or__3824__auto____30321 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30321))
{return or__3824__auto____30321;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__30365 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3822__auto____30322 = this$;

if(cljs.core.truth_(and__3822__auto____30322))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30322;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____30323 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30323))
{return or__3824__auto____30323;
} else
{var or__3824__auto____30324 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30324))
{return or__3824__auto____30324;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__30366 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3822__auto____30325 = this$;

if(cljs.core.truth_(and__3822__auto____30325))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30325;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____30326 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30326))
{return or__3824__auto____30326;
} else
{var or__3824__auto____30327 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30327))
{return or__3824__auto____30327;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__30367 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3822__auto____30328 = this$;

if(cljs.core.truth_(and__3822__auto____30328))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30328;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____30329 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30329))
{return or__3824__auto____30329;
} else
{var or__3824__auto____30330 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30330))
{return or__3824__auto____30330;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__30368 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3822__auto____30331 = this$;

if(cljs.core.truth_(and__3822__auto____30331))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30331;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____30332 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30332))
{return or__3824__auto____30332;
} else
{var or__3824__auto____30333 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30333))
{return or__3824__auto____30333;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__30369 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3822__auto____30334 = this$;

if(cljs.core.truth_(and__3822__auto____30334))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30334;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____30335 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30335))
{return or__3824__auto____30335;
} else
{var or__3824__auto____30336 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30336))
{return or__3824__auto____30336;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__30370 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3822__auto____30337 = this$;

if(cljs.core.truth_(and__3822__auto____30337))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30337;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____30338 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30338))
{return or__3824__auto____30338;
} else
{var or__3824__auto____30339 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30339))
{return or__3824__auto____30339;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__30371 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3822__auto____30340 = this$;

if(cljs.core.truth_(and__3822__auto____30340))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30340;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____30341 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30341))
{return or__3824__auto____30341;
} else
{var or__3824__auto____30342 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30342))
{return or__3824__auto____30342;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__30372 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3822__auto____30343 = this$;

if(cljs.core.truth_(and__3822__auto____30343))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30343;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____30344 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30344))
{return or__3824__auto____30344;
} else
{var or__3824__auto____30345 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30345))
{return or__3824__auto____30345;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__30373 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3822__auto____30346 = this$;

if(cljs.core.truth_(and__3822__auto____30346))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30346;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____30347 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30347))
{return or__3824__auto____30347;
} else
{var or__3824__auto____30348 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30348))
{return or__3824__auto____30348;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__30374 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3822__auto____30349 = this$;

if(cljs.core.truth_(and__3822__auto____30349))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30349;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____30350 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30350))
{return or__3824__auto____30350;
} else
{var or__3824__auto____30351 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30351))
{return or__3824__auto____30351;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__30375 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3822__auto____30352 = this$;

if(cljs.core.truth_(and__3822__auto____30352))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____30352;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____30353 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30353))
{return or__3824__auto____30353;
} else
{var or__3824__auto____30354 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____30354))
{return or__3824__auto____30354;
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
return _invoke__30355.call(this,this$);
case  2 :
return _invoke__30356.call(this,this$,a);
case  3 :
return _invoke__30357.call(this,this$,a,b);
case  4 :
return _invoke__30358.call(this,this$,a,b,c);
case  5 :
return _invoke__30359.call(this,this$,a,b,c,d);
case  6 :
return _invoke__30360.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__30361.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__30362.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__30363.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__30364.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__30365.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__30366.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__30367.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__30368.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__30369.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__30370.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__30371.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__30372.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__30373.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__30374.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__30375.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3822__auto____30377 = coll;

if(cljs.core.truth_(and__3822__auto____30377))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3822__auto____30377;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3824__auto____30378 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____30378))
{return or__3824__auto____30378;
} else
{var or__3824__auto____30379 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3824__auto____30379))
{return or__3824__auto____30379;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3822__auto____30380 = coll;

if(cljs.core.truth_(and__3822__auto____30380))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3822__auto____30380;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3824__auto____30381 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____30381))
{return or__3824__auto____30381;
} else
{var or__3824__auto____30382 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3824__auto____30382))
{return or__3824__auto____30382;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3822__auto____30383 = coll;

if(cljs.core.truth_(and__3822__auto____30383))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3822__auto____30383;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3824__auto____30384 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____30384))
{return or__3824__auto____30384;
} else
{var or__3824__auto____30385 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3824__auto____30385))
{return or__3824__auto____30385;
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
var _nth__30392 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3822__auto____30386 = coll;

if(cljs.core.truth_(and__3822__auto____30386))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3822__auto____30386;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3824__auto____30387 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____30387))
{return or__3824__auto____30387;
} else
{var or__3824__auto____30388 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3824__auto____30388))
{return or__3824__auto____30388;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__30393 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3822__auto____30389 = coll;

if(cljs.core.truth_(and__3822__auto____30389))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3822__auto____30389;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3824__auto____30390 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____30390))
{return or__3824__auto____30390;
} else
{var or__3824__auto____30391 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3824__auto____30391))
{return or__3824__auto____30391;
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
return _nth__30392.call(this,coll,n);
case  3 :
return _nth__30393.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3822__auto____30395 = coll;

if(cljs.core.truth_(and__3822__auto____30395))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3822__auto____30395;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3824__auto____30396 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____30396))
{return or__3824__auto____30396;
} else
{var or__3824__auto____30397 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3824__auto____30397))
{return or__3824__auto____30397;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3822__auto____30398 = coll;

if(cljs.core.truth_(and__3822__auto____30398))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3822__auto____30398;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3824__auto____30399 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____30399))
{return or__3824__auto____30399;
} else
{var or__3824__auto____30400 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3824__auto____30400))
{return or__3824__auto____30400;
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
var _lookup__30407 = (function (o,k){
if(cljs.core.truth_((function (){var and__3822__auto____30401 = o;

if(cljs.core.truth_(and__3822__auto____30401))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3822__auto____30401;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3824__auto____30402 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____30402))
{return or__3824__auto____30402;
} else
{var or__3824__auto____30403 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3824__auto____30403))
{return or__3824__auto____30403;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__30408 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3822__auto____30404 = o;

if(cljs.core.truth_(and__3822__auto____30404))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3822__auto____30404;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3824__auto____30405 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____30405))
{return or__3824__auto____30405;
} else
{var or__3824__auto____30406 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3824__auto____30406))
{return or__3824__auto____30406;
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
return _lookup__30407.call(this,o,k);
case  3 :
return _lookup__30408.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____30410 = coll;

if(cljs.core.truth_(and__3822__auto____30410))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3822__auto____30410;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3824__auto____30411 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____30411))
{return or__3824__auto____30411;
} else
{var or__3824__auto____30412 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3824__auto____30412))
{return or__3824__auto____30412;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3822__auto____30413 = coll;

if(cljs.core.truth_(and__3822__auto____30413))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3822__auto____30413;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3824__auto____30414 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____30414))
{return or__3824__auto____30414;
} else
{var or__3824__auto____30415 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3824__auto____30415))
{return or__3824__auto____30415;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____30416 = coll;

if(cljs.core.truth_(and__3822__auto____30416))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3822__auto____30416;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3824__auto____30417 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____30417))
{return or__3824__auto____30417;
} else
{var or__3824__auto____30418 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3824__auto____30418))
{return or__3824__auto____30418;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3822__auto____30419 = coll;

if(cljs.core.truth_(and__3822__auto____30419))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3822__auto____30419;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3824__auto____30420 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____30420))
{return or__3824__auto____30420;
} else
{var or__3824__auto____30421 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3824__auto____30421))
{return or__3824__auto____30421;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3822__auto____30422 = coll;

if(cljs.core.truth_(and__3822__auto____30422))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3822__auto____30422;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3824__auto____30423 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____30423))
{return or__3824__auto____30423;
} else
{var or__3824__auto____30424 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3824__auto____30424))
{return or__3824__auto____30424;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3822__auto____30425 = coll;

if(cljs.core.truth_(and__3822__auto____30425))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3822__auto____30425;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3824__auto____30426 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____30426))
{return or__3824__auto____30426;
} else
{var or__3824__auto____30427 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3824__auto____30427))
{return or__3824__auto____30427;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3822__auto____30428 = coll;

if(cljs.core.truth_(and__3822__auto____30428))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3822__auto____30428;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3824__auto____30429 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____30429))
{return or__3824__auto____30429;
} else
{var or__3824__auto____30430 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3824__auto____30430))
{return or__3824__auto____30430;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3822__auto____30431 = o;

if(cljs.core.truth_(and__3822__auto____30431))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3822__auto____30431;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3824__auto____30432 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____30432))
{return or__3824__auto____30432;
} else
{var or__3824__auto____30433 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3824__auto____30433))
{return or__3824__auto____30433;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3822__auto____30434 = o;

if(cljs.core.truth_(and__3822__auto____30434))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3822__auto____30434;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____30435 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____30435))
{return or__3824__auto____30435;
} else
{var or__3824__auto____30436 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3824__auto____30436))
{return or__3824__auto____30436;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3822__auto____30437 = o;

if(cljs.core.truth_(and__3822__auto____30437))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3822__auto____30437;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3824__auto____30438 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____30438))
{return or__3824__auto____30438;
} else
{var or__3824__auto____30439 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3824__auto____30439))
{return or__3824__auto____30439;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3822__auto____30440 = o;

if(cljs.core.truth_(and__3822__auto____30440))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3822__auto____30440;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3824__auto____30441 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____30441))
{return or__3824__auto____30441;
} else
{var or__3824__auto____30442 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3824__auto____30442))
{return or__3824__auto____30442;
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
var _reduce__30449 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3822__auto____30443 = coll;

if(cljs.core.truth_(and__3822__auto____30443))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3822__auto____30443;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3824__auto____30444 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____30444))
{return or__3824__auto____30444;
} else
{var or__3824__auto____30445 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3824__auto____30445))
{return or__3824__auto____30445;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__30450 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3822__auto____30446 = coll;

if(cljs.core.truth_(and__3822__auto____30446))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3822__auto____30446;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3824__auto____30447 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____30447))
{return or__3824__auto____30447;
} else
{var or__3824__auto____30448 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3824__auto____30448))
{return or__3824__auto____30448;
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
return _reduce__30449.call(this,coll,f);
case  3 :
return _reduce__30450.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3822__auto____30452 = o;

if(cljs.core.truth_(and__3822__auto____30452))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3822__auto____30452;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3824__auto____30453 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____30453))
{return or__3824__auto____30453;
} else
{var or__3824__auto____30454 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3824__auto____30454))
{return or__3824__auto____30454;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3822__auto____30455 = o;

if(cljs.core.truth_(and__3822__auto____30455))
{return o.cljs$core$IHash$_hash;
} else
{return and__3822__auto____30455;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3824__auto____30456 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____30456))
{return or__3824__auto____30456;
} else
{var or__3824__auto____30457 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3824__auto____30457))
{return or__3824__auto____30457;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3822__auto____30458 = o;

if(cljs.core.truth_(and__3822__auto____30458))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3822__auto____30458;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3824__auto____30459 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____30459))
{return or__3824__auto____30459;
} else
{var or__3824__auto____30460 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3824__auto____30460))
{return or__3824__auto____30460;
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
if(cljs.core.truth_((function (){var and__3822__auto____30461 = o;

if(cljs.core.truth_(and__3822__auto____30461))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3822__auto____30461;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3824__auto____30462 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____30462))
{return or__3824__auto____30462;
} else
{var or__3824__auto____30463 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3824__auto____30463))
{return or__3824__auto____30463;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3822__auto____30464 = d;

if(cljs.core.truth_(and__3822__auto____30464))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3822__auto____30464;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3824__auto____30465 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3824__auto____30465))
{return or__3824__auto____30465;
} else
{var or__3824__auto____30466 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3824__auto____30466))
{return or__3824__auto____30466;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3822__auto____30467 = this$;

if(cljs.core.truth_(and__3822__auto____30467))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3822__auto____30467;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____30468 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30468))
{return or__3824__auto____30468;
} else
{var or__3824__auto____30469 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3824__auto____30469))
{return or__3824__auto____30469;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3822__auto____30470 = this$;

if(cljs.core.truth_(and__3822__auto____30470))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3822__auto____30470;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3824__auto____30471 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30471))
{return or__3824__auto____30471;
} else
{var or__3824__auto____30472 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3824__auto____30472))
{return or__3824__auto____30472;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3822__auto____30473 = this$;

if(cljs.core.truth_(and__3822__auto____30473))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3822__auto____30473;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3824__auto____30474 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____30474))
{return or__3824__auto____30474;
} else
{var or__3824__auto____30475 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3824__auto____30475))
{return or__3824__auto____30475;
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
var G__30476 = null;
var G__30476__30477 = (function (o,k){
return null;
});
var G__30476__30478 = (function (o,k,not_found){
return not_found;
});
G__30476 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__30476__30477.call(this,o,k);
case  3 :
return G__30476__30478.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30476;
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
var G__30480 = null;
var G__30480__30481 = (function (_,f){
return f.call(null);
});
var G__30480__30482 = (function (_,f,start){
return start;
});
G__30480 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__30480__30481.call(this,_,f);
case  3 :
return G__30480__30482.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30480;
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
var G__30484 = null;
var G__30484__30485 = (function (_,n){
return null;
});
var G__30484__30486 = (function (_,n,not_found){
return not_found;
});
G__30484 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__30484__30485.call(this,_,n);
case  3 :
return G__30484__30486.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30484;
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
var ci_reduce__30494 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__30488 = cljs.core._nth.call(null,cicoll,0);
var n__30489 = 1;

while(true){
if(cljs.core.truth_((n__30489 < cljs.core._count.call(null,cicoll))))
{{
var G__30498 = f.call(null,val__30488,cljs.core._nth.call(null,cicoll,n__30489));
var G__30499 = (n__30489 + 1);
val__30488 = G__30498;
n__30489 = G__30499;
continue;
}
} else
{return val__30488;
}
break;
}
}
});
var ci_reduce__30495 = (function (cicoll,f,val){
var val__30490 = val;
var n__30491 = 0;

while(true){
if(cljs.core.truth_((n__30491 < cljs.core._count.call(null,cicoll))))
{{
var G__30500 = f.call(null,val__30490,cljs.core._nth.call(null,cicoll,n__30491));
var G__30501 = (n__30491 + 1);
val__30490 = G__30500;
n__30491 = G__30501;
continue;
}
} else
{return val__30490;
}
break;
}
});
var ci_reduce__30496 = (function (cicoll,f,val,idx){
var val__30492 = val;
var n__30493 = idx;

while(true){
if(cljs.core.truth_((n__30493 < cljs.core._count.call(null,cicoll))))
{{
var G__30502 = f.call(null,val__30492,cljs.core._nth.call(null,cicoll,n__30493));
var G__30503 = (n__30493 + 1);
val__30492 = G__30502;
n__30493 = G__30503;
continue;
}
} else
{return val__30492;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__30494.call(this,cicoll,f);
case  3 :
return ci_reduce__30495.call(this,cicoll,f,val);
case  4 :
return ci_reduce__30496.call(this,cicoll,f,val,idx);
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
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__30504 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__30517 = null;
var G__30517__30518 = (function (_,f){
var this__30505 = this;
return cljs.core.ci_reduce.call(null,this__30505.a,f,(this__30505.a[this__30505.i]),(this__30505.i + 1));
});
var G__30517__30519 = (function (_,f,start){
var this__30506 = this;
return cljs.core.ci_reduce.call(null,this__30506.a,f,start,this__30506.i);
});
G__30517 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__30517__30518.call(this,_,f);
case  3 :
return G__30517__30519.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30517;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__30507 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__30508 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__30521 = null;
var G__30521__30522 = (function (coll,n){
var this__30509 = this;
var i__30510 = (n + this__30509.i);

if(cljs.core.truth_((i__30510 < this__30509.a.length)))
{return (this__30509.a[i__30510]);
} else
{return null;
}
});
var G__30521__30523 = (function (coll,n,not_found){
var this__30511 = this;
var i__30512 = (n + this__30511.i);

if(cljs.core.truth_((i__30512 < this__30511.a.length)))
{return (this__30511.a[i__30512]);
} else
{return not_found;
}
});
G__30521 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__30521__30522.call(this,coll,n);
case  3 :
return G__30521__30523.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30521;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__30513 = this;
return (this__30513.a.length - this__30513.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__30514 = this;
return (this__30514.a[this__30514.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__30515 = this;
if(cljs.core.truth_(((this__30515.i + 1) < this__30515.a.length)))
{return (new cljs.core.IndexedSeq(this__30515.a,(this__30515.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__30516 = this;
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
var G__30525 = null;
var G__30525__30526 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__30525__30527 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__30525 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__30525__30526.call(this,array,f);
case  3 :
return G__30525__30527.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30525;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__30529 = null;
var G__30529__30530 = (function (array,k){
return (array[k]);
});
var G__30529__30531 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__30529 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__30529__30530.call(this,array,k);
case  3 :
return G__30529__30531.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30529;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__30533 = null;
var G__30533__30534 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__30533__30535 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__30533 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__30533__30534.call(this,array,n);
case  3 :
return G__30533__30535.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30533;
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
var temp__3974__auto____30537 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____30537))
{var s__30538 = temp__3974__auto____30537;

return cljs.core._first.call(null,s__30538);
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
var G__30539 = cljs.core.next.call(null,s);
s = G__30539;
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
var s__30540 = cljs.core.seq.call(null,x);
var n__30541 = 0;

while(true){
if(cljs.core.truth_(s__30540))
{{
var G__30542 = cljs.core.next.call(null,s__30540);
var G__30543 = (n__30541 + 1);
s__30540 = G__30542;
n__30541 = G__30543;
continue;
}
} else
{return n__30541;
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
var conj__30544 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__30545 = (function() { 
var G__30547__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__30548 = conj.call(null,coll,x);
var G__30549 = cljs.core.first.call(null,xs);
var G__30550 = cljs.core.next.call(null,xs);
coll = G__30548;
x = G__30549;
xs = G__30550;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__30547 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30547__delegate.call(this, coll, x, xs);
};
G__30547.cljs$lang$maxFixedArity = 2;
G__30547.cljs$lang$applyTo = (function (arglist__30551){
var coll = cljs.core.first(arglist__30551);
var x = cljs.core.first(cljs.core.next(arglist__30551));
var xs = cljs.core.rest(cljs.core.next(arglist__30551));
return G__30547__delegate.call(this, coll, x, xs);
});
return G__30547;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__30544.call(this,coll,x);
default:
return conj__30545.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__30545.cljs$lang$applyTo;
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
var nth__30552 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__30553 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__30552.call(this,coll,n);
case  3 :
return nth__30553.call(this,coll,n,not_found);
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
var get__30555 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__30556 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__30555.call(this,o,k);
case  3 :
return get__30556.call(this,o,k,not_found);
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
var assoc__30559 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__30560 = (function() { 
var G__30562__delegate = function (coll,k,v,kvs){
while(true){
var ret__30558 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__30563 = ret__30558;
var G__30564 = cljs.core.first.call(null,kvs);
var G__30565 = cljs.core.second.call(null,kvs);
var G__30566 = cljs.core.nnext.call(null,kvs);
coll = G__30563;
k = G__30564;
v = G__30565;
kvs = G__30566;
continue;
}
} else
{return ret__30558;
}
break;
}
};
var G__30562 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__30562__delegate.call(this, coll, k, v, kvs);
};
G__30562.cljs$lang$maxFixedArity = 3;
G__30562.cljs$lang$applyTo = (function (arglist__30567){
var coll = cljs.core.first(arglist__30567);
var k = cljs.core.first(cljs.core.next(arglist__30567));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30567)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__30567)));
return G__30562__delegate.call(this, coll, k, v, kvs);
});
return G__30562;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__30559.call(this,coll,k,v);
default:
return assoc__30560.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__30560.cljs$lang$applyTo;
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
var dissoc__30569 = (function (coll){
return coll;
});
var dissoc__30570 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__30571 = (function() { 
var G__30573__delegate = function (coll,k,ks){
while(true){
var ret__30568 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__30574 = ret__30568;
var G__30575 = cljs.core.first.call(null,ks);
var G__30576 = cljs.core.next.call(null,ks);
coll = G__30574;
k = G__30575;
ks = G__30576;
continue;
}
} else
{return ret__30568;
}
break;
}
};
var G__30573 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30573__delegate.call(this, coll, k, ks);
};
G__30573.cljs$lang$maxFixedArity = 2;
G__30573.cljs$lang$applyTo = (function (arglist__30577){
var coll = cljs.core.first(arglist__30577);
var k = cljs.core.first(cljs.core.next(arglist__30577));
var ks = cljs.core.rest(cljs.core.next(arglist__30577));
return G__30573__delegate.call(this, coll, k, ks);
});
return G__30573;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__30569.call(this,coll);
case  2 :
return dissoc__30570.call(this,coll,k);
default:
return dissoc__30571.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__30571.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____30578 = o;

if(cljs.core.truth_((function (){var and__3822__auto____30579 = x__451__auto____30578;

if(cljs.core.truth_(and__3822__auto____30579))
{var and__3822__auto____30580 = x__451__auto____30578.cljs$core$IMeta$;

if(cljs.core.truth_(and__3822__auto____30580))
{return cljs.core.not.call(null,x__451__auto____30578.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3822__auto____30580;
}
} else
{return and__3822__auto____30579;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____30578);
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
var disj__30582 = (function (coll){
return coll;
});
var disj__30583 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__30584 = (function() { 
var G__30586__delegate = function (coll,k,ks){
while(true){
var ret__30581 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__30587 = ret__30581;
var G__30588 = cljs.core.first.call(null,ks);
var G__30589 = cljs.core.next.call(null,ks);
coll = G__30587;
k = G__30588;
ks = G__30589;
continue;
}
} else
{return ret__30581;
}
break;
}
};
var G__30586 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30586__delegate.call(this, coll, k, ks);
};
G__30586.cljs$lang$maxFixedArity = 2;
G__30586.cljs$lang$applyTo = (function (arglist__30590){
var coll = cljs.core.first(arglist__30590);
var k = cljs.core.first(cljs.core.next(arglist__30590));
var ks = cljs.core.rest(cljs.core.next(arglist__30590));
return G__30586__delegate.call(this, coll, k, ks);
});
return G__30586;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__30582.call(this,coll);
case  2 :
return disj__30583.call(this,coll,k);
default:
return disj__30584.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__30584.cljs$lang$applyTo;
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
{var x__451__auto____30591 = x;

if(cljs.core.truth_((function (){var and__3822__auto____30592 = x__451__auto____30591;

if(cljs.core.truth_(and__3822__auto____30592))
{var and__3822__auto____30593 = x__451__auto____30591.cljs$core$ICollection$;

if(cljs.core.truth_(and__3822__auto____30593))
{return cljs.core.not.call(null,x__451__auto____30591.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3822__auto____30593;
}
} else
{return and__3822__auto____30592;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____30591);
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
{var x__451__auto____30594 = x;

if(cljs.core.truth_((function (){var and__3822__auto____30595 = x__451__auto____30594;

if(cljs.core.truth_(and__3822__auto____30595))
{var and__3822__auto____30596 = x__451__auto____30594.cljs$core$ISet$;

if(cljs.core.truth_(and__3822__auto____30596))
{return cljs.core.not.call(null,x__451__auto____30594.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3822__auto____30596;
}
} else
{return and__3822__auto____30595;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____30594);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____30597 = x;

if(cljs.core.truth_((function (){var and__3822__auto____30598 = x__451__auto____30597;

if(cljs.core.truth_(and__3822__auto____30598))
{var and__3822__auto____30599 = x__451__auto____30597.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3822__auto____30599))
{return cljs.core.not.call(null,x__451__auto____30597.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3822__auto____30599;
}
} else
{return and__3822__auto____30598;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____30597);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____30600 = x;

if(cljs.core.truth_((function (){var and__3822__auto____30601 = x__451__auto____30600;

if(cljs.core.truth_(and__3822__auto____30601))
{var and__3822__auto____30602 = x__451__auto____30600.cljs$core$ISequential$;

if(cljs.core.truth_(and__3822__auto____30602))
{return cljs.core.not.call(null,x__451__auto____30600.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3822__auto____30602;
}
} else
{return and__3822__auto____30601;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____30600);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____30603 = x;

if(cljs.core.truth_((function (){var and__3822__auto____30604 = x__451__auto____30603;

if(cljs.core.truth_(and__3822__auto____30604))
{var and__3822__auto____30605 = x__451__auto____30603.cljs$core$ICounted$;

if(cljs.core.truth_(and__3822__auto____30605))
{return cljs.core.not.call(null,x__451__auto____30603.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3822__auto____30605;
}
} else
{return and__3822__auto____30604;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____30603);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____30606 = x;

if(cljs.core.truth_((function (){var and__3822__auto____30607 = x__451__auto____30606;

if(cljs.core.truth_(and__3822__auto____30607))
{var and__3822__auto____30608 = x__451__auto____30606.cljs$core$IMap$;

if(cljs.core.truth_(and__3822__auto____30608))
{return cljs.core.not.call(null,x__451__auto____30606.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3822__auto____30608;
}
} else
{return and__3822__auto____30607;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____30606);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____30609 = x;

if(cljs.core.truth_((function (){var and__3822__auto____30610 = x__451__auto____30609;

if(cljs.core.truth_(and__3822__auto____30610))
{var and__3822__auto____30611 = x__451__auto____30609.cljs$core$IVector$;

if(cljs.core.truth_(and__3822__auto____30611))
{return cljs.core.not.call(null,x__451__auto____30609.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3822__auto____30611;
}
} else
{return and__3822__auto____30610;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____30609);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__30612 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__30612.push(key);
}));
return keys__30612;
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
{var x__451__auto____30613 = s;

if(cljs.core.truth_((function (){var and__3822__auto____30614 = x__451__auto____30613;

if(cljs.core.truth_(and__3822__auto____30614))
{var and__3822__auto____30615 = x__451__auto____30613.cljs$core$ISeq$;

if(cljs.core.truth_(and__3822__auto____30615))
{return cljs.core.not.call(null,x__451__auto____30613.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3822__auto____30615;
}
} else
{return and__3822__auto____30614;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____30613);
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
var and__3822__auto____30616 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3822__auto____30616))
{return cljs.core.not.call(null,(function (){var or__3824__auto____30617 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3824__auto____30617))
{return or__3824__auto____30617;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3822__auto____30616;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____30618 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3822__auto____30618))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3822__auto____30618;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____30619 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3822__auto____30619))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3822__auto____30619;
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
var and__3822__auto____30620 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3822__auto____30620))
{return (n == n.toFixed());
} else
{return and__3822__auto____30620;
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
if(cljs.core.truth_((function (){var and__3822__auto____30621 = coll;

if(cljs.core.truth_(and__3822__auto____30621))
{var and__3822__auto____30622 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3822__auto____30622))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____30622;
}
} else
{return and__3822__auto____30621;
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
var distinct_QMARK___30627 = (function (x){
return true;
});
var distinct_QMARK___30628 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___30629 = (function() { 
var G__30631__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__30623 = cljs.core.set([y,x]);
var xs__30624 = more;

while(true){
var x__30625 = cljs.core.first.call(null,xs__30624);
var etc__30626 = cljs.core.next.call(null,xs__30624);

if(cljs.core.truth_(xs__30624))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__30623,x__30625)))
{return false;
} else
{{
var G__30632 = cljs.core.conj.call(null,s__30623,x__30625);
var G__30633 = etc__30626;
s__30623 = G__30632;
xs__30624 = G__30633;
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
var G__30631 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30631__delegate.call(this, x, y, more);
};
G__30631.cljs$lang$maxFixedArity = 2;
G__30631.cljs$lang$applyTo = (function (arglist__30634){
var x = cljs.core.first(arglist__30634);
var y = cljs.core.first(cljs.core.next(arglist__30634));
var more = cljs.core.rest(cljs.core.next(arglist__30634));
return G__30631__delegate.call(this, x, y, more);
});
return G__30631;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___30627.call(this,x);
case  2 :
return distinct_QMARK___30628.call(this,x,y);
default:
return distinct_QMARK___30629.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___30629.cljs$lang$applyTo;
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
var r__30635 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__30635)))
{return r__30635;
} else
{if(cljs.core.truth_(r__30635))
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
var sort__30637 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__30638 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__30636 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__30636,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__30636);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__30637.call(this,comp);
case  2 :
return sort__30638.call(this,comp,coll);
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
var sort_by__30640 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__30641 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__30640.call(this,keyfn,comp);
case  3 :
return sort_by__30641.call(this,keyfn,comp,coll);
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
var reduce__30643 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__30644 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__30643.call(this,f,val);
case  3 :
return reduce__30644.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__30650 = (function (f,coll){
var temp__3971__auto____30646 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3971__auto____30646))
{var s__30647 = temp__3971__auto____30646;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__30647),cljs.core.next.call(null,s__30647));
} else
{return f.call(null);
}
});
var seq_reduce__30651 = (function (f,val,coll){
var val__30648 = val;
var coll__30649 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__30649))
{{
var G__30653 = f.call(null,val__30648,cljs.core.first.call(null,coll__30649));
var G__30654 = cljs.core.next.call(null,coll__30649);
val__30648 = G__30653;
coll__30649 = G__30654;
continue;
}
} else
{return val__30648;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__30650.call(this,f,val);
case  3 :
return seq_reduce__30651.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__30655 = null;
var G__30655__30656 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__30655__30657 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__30655 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__30655__30656.call(this,coll,f);
case  3 :
return G__30655__30657.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30655;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___30659 = (function (){
return 0;
});
var _PLUS___30660 = (function (x){
return x;
});
var _PLUS___30661 = (function (x,y){
return (x + y);
});
var _PLUS___30662 = (function() { 
var G__30664__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__30664 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30664__delegate.call(this, x, y, more);
};
G__30664.cljs$lang$maxFixedArity = 2;
G__30664.cljs$lang$applyTo = (function (arglist__30665){
var x = cljs.core.first(arglist__30665);
var y = cljs.core.first(cljs.core.next(arglist__30665));
var more = cljs.core.rest(cljs.core.next(arglist__30665));
return G__30664__delegate.call(this, x, y, more);
});
return G__30664;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___30659.call(this);
case  1 :
return _PLUS___30660.call(this,x);
case  2 :
return _PLUS___30661.call(this,x,y);
default:
return _PLUS___30662.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___30662.cljs$lang$applyTo;
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
var ___30666 = (function (x){
return (- x);
});
var ___30667 = (function (x,y){
return (x - y);
});
var ___30668 = (function() { 
var G__30670__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__30670 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30670__delegate.call(this, x, y, more);
};
G__30670.cljs$lang$maxFixedArity = 2;
G__30670.cljs$lang$applyTo = (function (arglist__30671){
var x = cljs.core.first(arglist__30671);
var y = cljs.core.first(cljs.core.next(arglist__30671));
var more = cljs.core.rest(cljs.core.next(arglist__30671));
return G__30670__delegate.call(this, x, y, more);
});
return G__30670;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___30666.call(this,x);
case  2 :
return ___30667.call(this,x,y);
default:
return ___30668.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___30668.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___30672 = (function (){
return 1;
});
var _STAR___30673 = (function (x){
return x;
});
var _STAR___30674 = (function (x,y){
return (x * y);
});
var _STAR___30675 = (function() { 
var G__30677__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__30677 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30677__delegate.call(this, x, y, more);
};
G__30677.cljs$lang$maxFixedArity = 2;
G__30677.cljs$lang$applyTo = (function (arglist__30678){
var x = cljs.core.first(arglist__30678);
var y = cljs.core.first(cljs.core.next(arglist__30678));
var more = cljs.core.rest(cljs.core.next(arglist__30678));
return G__30677__delegate.call(this, x, y, more);
});
return G__30677;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___30672.call(this);
case  1 :
return _STAR___30673.call(this,x);
case  2 :
return _STAR___30674.call(this,x,y);
default:
return _STAR___30675.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___30675.cljs$lang$applyTo;
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
var _SLASH___30679 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___30680 = (function (x,y){
return (x / y);
});
var _SLASH___30681 = (function() { 
var G__30683__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__30683 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30683__delegate.call(this, x, y, more);
};
G__30683.cljs$lang$maxFixedArity = 2;
G__30683.cljs$lang$applyTo = (function (arglist__30684){
var x = cljs.core.first(arglist__30684);
var y = cljs.core.first(cljs.core.next(arglist__30684));
var more = cljs.core.rest(cljs.core.next(arglist__30684));
return G__30683__delegate.call(this, x, y, more);
});
return G__30683;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___30679.call(this,x);
case  2 :
return _SLASH___30680.call(this,x,y);
default:
return _SLASH___30681.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___30681.cljs$lang$applyTo;
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
var _LT___30685 = (function (x){
return true;
});
var _LT___30686 = (function (x,y){
return (x < y);
});
var _LT___30687 = (function() { 
var G__30689__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__30690 = y;
var G__30691 = cljs.core.first.call(null,more);
var G__30692 = cljs.core.next.call(null,more);
x = G__30690;
y = G__30691;
more = G__30692;
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
var G__30689 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30689__delegate.call(this, x, y, more);
};
G__30689.cljs$lang$maxFixedArity = 2;
G__30689.cljs$lang$applyTo = (function (arglist__30693){
var x = cljs.core.first(arglist__30693);
var y = cljs.core.first(cljs.core.next(arglist__30693));
var more = cljs.core.rest(cljs.core.next(arglist__30693));
return G__30689__delegate.call(this, x, y, more);
});
return G__30689;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___30685.call(this,x);
case  2 :
return _LT___30686.call(this,x,y);
default:
return _LT___30687.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___30687.cljs$lang$applyTo;
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
var _LT__EQ___30694 = (function (x){
return true;
});
var _LT__EQ___30695 = (function (x,y){
return (x <= y);
});
var _LT__EQ___30696 = (function() { 
var G__30698__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__30699 = y;
var G__30700 = cljs.core.first.call(null,more);
var G__30701 = cljs.core.next.call(null,more);
x = G__30699;
y = G__30700;
more = G__30701;
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
var G__30698 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30698__delegate.call(this, x, y, more);
};
G__30698.cljs$lang$maxFixedArity = 2;
G__30698.cljs$lang$applyTo = (function (arglist__30702){
var x = cljs.core.first(arglist__30702);
var y = cljs.core.first(cljs.core.next(arglist__30702));
var more = cljs.core.rest(cljs.core.next(arglist__30702));
return G__30698__delegate.call(this, x, y, more);
});
return G__30698;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___30694.call(this,x);
case  2 :
return _LT__EQ___30695.call(this,x,y);
default:
return _LT__EQ___30696.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___30696.cljs$lang$applyTo;
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
var _GT___30703 = (function (x){
return true;
});
var _GT___30704 = (function (x,y){
return (x > y);
});
var _GT___30705 = (function() { 
var G__30707__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__30708 = y;
var G__30709 = cljs.core.first.call(null,more);
var G__30710 = cljs.core.next.call(null,more);
x = G__30708;
y = G__30709;
more = G__30710;
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
var G__30707 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30707__delegate.call(this, x, y, more);
};
G__30707.cljs$lang$maxFixedArity = 2;
G__30707.cljs$lang$applyTo = (function (arglist__30711){
var x = cljs.core.first(arglist__30711);
var y = cljs.core.first(cljs.core.next(arglist__30711));
var more = cljs.core.rest(cljs.core.next(arglist__30711));
return G__30707__delegate.call(this, x, y, more);
});
return G__30707;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___30703.call(this,x);
case  2 :
return _GT___30704.call(this,x,y);
default:
return _GT___30705.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___30705.cljs$lang$applyTo;
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
var _GT__EQ___30712 = (function (x){
return true;
});
var _GT__EQ___30713 = (function (x,y){
return (x >= y);
});
var _GT__EQ___30714 = (function() { 
var G__30716__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__30717 = y;
var G__30718 = cljs.core.first.call(null,more);
var G__30719 = cljs.core.next.call(null,more);
x = G__30717;
y = G__30718;
more = G__30719;
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
var G__30716 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30716__delegate.call(this, x, y, more);
};
G__30716.cljs$lang$maxFixedArity = 2;
G__30716.cljs$lang$applyTo = (function (arglist__30720){
var x = cljs.core.first(arglist__30720);
var y = cljs.core.first(cljs.core.next(arglist__30720));
var more = cljs.core.rest(cljs.core.next(arglist__30720));
return G__30716__delegate.call(this, x, y, more);
});
return G__30716;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___30712.call(this,x);
case  2 :
return _GT__EQ___30713.call(this,x,y);
default:
return _GT__EQ___30714.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___30714.cljs$lang$applyTo;
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
var max__30721 = (function (x){
return x;
});
var max__30722 = (function (x,y){
return ((x > y) ? x : y);
});
var max__30723 = (function() { 
var G__30725__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__30725 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30725__delegate.call(this, x, y, more);
};
G__30725.cljs$lang$maxFixedArity = 2;
G__30725.cljs$lang$applyTo = (function (arglist__30726){
var x = cljs.core.first(arglist__30726);
var y = cljs.core.first(cljs.core.next(arglist__30726));
var more = cljs.core.rest(cljs.core.next(arglist__30726));
return G__30725__delegate.call(this, x, y, more);
});
return G__30725;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__30721.call(this,x);
case  2 :
return max__30722.call(this,x,y);
default:
return max__30723.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__30723.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__30727 = (function (x){
return x;
});
var min__30728 = (function (x,y){
return ((x < y) ? x : y);
});
var min__30729 = (function() { 
var G__30731__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__30731 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30731__delegate.call(this, x, y, more);
};
G__30731.cljs$lang$maxFixedArity = 2;
G__30731.cljs$lang$applyTo = (function (arglist__30732){
var x = cljs.core.first(arglist__30732);
var y = cljs.core.first(cljs.core.next(arglist__30732));
var more = cljs.core.rest(cljs.core.next(arglist__30732));
return G__30731__delegate.call(this, x, y, more);
});
return G__30731;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__30727.call(this,x);
case  2 :
return min__30728.call(this,x,y);
default:
return min__30729.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__30729.cljs$lang$applyTo;
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
var rem__30733 = (n % d);

return cljs.core.fix.call(null,((n - rem__30733) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__30734 = cljs.core.quot.call(null,n,d);

return (n - (d * q__30734));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__30735 = (function (){
return Math.random.call(null);
});
var rand__30736 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__30735.call(this);
case  1 :
return rand__30736.call(this,n);
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
var _EQ__EQ___30738 = (function (x){
return true;
});
var _EQ__EQ___30739 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___30740 = (function() { 
var G__30742__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__30743 = y;
var G__30744 = cljs.core.first.call(null,more);
var G__30745 = cljs.core.next.call(null,more);
x = G__30743;
y = G__30744;
more = G__30745;
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
var G__30742 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30742__delegate.call(this, x, y, more);
};
G__30742.cljs$lang$maxFixedArity = 2;
G__30742.cljs$lang$applyTo = (function (arglist__30746){
var x = cljs.core.first(arglist__30746);
var y = cljs.core.first(cljs.core.next(arglist__30746));
var more = cljs.core.rest(cljs.core.next(arglist__30746));
return G__30742__delegate.call(this, x, y, more);
});
return G__30742;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___30738.call(this,x);
case  2 :
return _EQ__EQ___30739.call(this,x,y);
default:
return _EQ__EQ___30740.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___30740.cljs$lang$applyTo;
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
var n__30747 = n;
var xs__30748 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3822__auto____30749 = xs__30748;

if(cljs.core.truth_(and__3822__auto____30749))
{return (n__30747 > 0);
} else
{return and__3822__auto____30749;
}
})()))
{{
var G__30750 = (n__30747 - 1);
var G__30751 = cljs.core.next.call(null,xs__30748);
n__30747 = G__30750;
xs__30748 = G__30751;
continue;
}
} else
{return xs__30748;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__30756 = null;
var G__30756__30757 = (function (coll,n){
var temp__3971__auto____30752 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3971__auto____30752))
{var xs__30753 = temp__3971__auto____30752;

return cljs.core.first.call(null,xs__30753);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__30756__30758 = (function (coll,n,not_found){
var temp__3971__auto____30754 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3971__auto____30754))
{var xs__30755 = temp__3971__auto____30754;

return cljs.core.first.call(null,xs__30755);
} else
{return not_found;
}
});
G__30756 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__30756__30757.call(this,coll,n);
case  3 :
return G__30756__30758.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30756;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___30760 = (function (){
return "";
});
var str_STAR___30761 = (function (x){
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
var str_STAR___30762 = (function() { 
var G__30764__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__30765 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__30766 = cljs.core.next.call(null,more);
sb = G__30765;
more = G__30766;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__30764 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__30764__delegate.call(this, x, ys);
};
G__30764.cljs$lang$maxFixedArity = 1;
G__30764.cljs$lang$applyTo = (function (arglist__30767){
var x = cljs.core.first(arglist__30767);
var ys = cljs.core.rest(arglist__30767);
return G__30764__delegate.call(this, x, ys);
});
return G__30764;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___30760.call(this);
case  1 :
return str_STAR___30761.call(this,x);
default:
return str_STAR___30762.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___30762.cljs$lang$applyTo;
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
var str__30768 = (function (){
return "";
});
var str__30769 = (function (x){
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
var str__30770 = (function() { 
var G__30772__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__30773 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__30774 = cljs.core.next.call(null,more);
sb = G__30773;
more = G__30774;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__30772 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__30772__delegate.call(this, x, ys);
};
G__30772.cljs$lang$maxFixedArity = 1;
G__30772.cljs$lang$applyTo = (function (arglist__30775){
var x = cljs.core.first(arglist__30775);
var ys = cljs.core.rest(arglist__30775);
return G__30772__delegate.call(this, x, ys);
});
return G__30772;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__30768.call(this);
case  1 :
return str__30769.call(this,x);
default:
return str__30770.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__30770.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__30776 = (function (s,start){
return s.substring(start);
});
var subs__30777 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__30776.call(this,s,start);
case  3 :
return subs__30777.call(this,s,start,end);
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
var symbol__30779 = (function (name){
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
var symbol__30780 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__30779.call(this,ns);
case  2 :
return symbol__30780.call(this,ns,name);
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
var keyword__30782 = (function (name){
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
var keyword__30783 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__30782.call(this,ns);
case  2 :
return keyword__30783.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__30785 = cljs.core.seq.call(null,x);
var ys__30786 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__30785 === null)))
{return (ys__30786 === null);
} else
{if(cljs.core.truth_((ys__30786 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__30785),cljs.core.first.call(null,ys__30786))))
{{
var G__30787 = cljs.core.next.call(null,xs__30785);
var G__30788 = cljs.core.next.call(null,ys__30786);
xs__30785 = G__30787;
ys__30786 = G__30788;
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
return cljs.core.reduce.call(null,(function (p1__30789_SHARP_,p2__30790_SHARP_){
return cljs.core.hash_combine.call(null,p1__30789_SHARP_,cljs.core.hash.call(null,p2__30790_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__30791__30792 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__30791__30792))
{var G__30794__30796 = cljs.core.first.call(null,G__30791__30792);
var vec__30795__30797 = G__30794__30796;
var key_name__30798 = cljs.core.nth.call(null,vec__30795__30797,0,null);
var f__30799 = cljs.core.nth.call(null,vec__30795__30797,1,null);
var G__30791__30800 = G__30791__30792;

var G__30794__30801 = G__30794__30796;
var G__30791__30802 = G__30791__30800;

while(true){
var vec__30803__30804 = G__30794__30801;
var key_name__30805 = cljs.core.nth.call(null,vec__30803__30804,0,null);
var f__30806 = cljs.core.nth.call(null,vec__30803__30804,1,null);
var G__30791__30807 = G__30791__30802;

var str_name__30808 = cljs.core.name.call(null,key_name__30805);

obj[str_name__30808] = f__30806;
var temp__3974__auto____30809 = cljs.core.next.call(null,G__30791__30807);

if(cljs.core.truth_(temp__3974__auto____30809))
{var G__30791__30810 = temp__3974__auto____30809;

{
var G__30811 = cljs.core.first.call(null,G__30791__30810);
var G__30812 = G__30791__30810;
G__30794__30801 = G__30811;
G__30791__30802 = G__30812;
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
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__30813 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__30814 = this;
return (new cljs.core.List(this__30814.meta,o,coll,(this__30814.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__30815 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__30816 = this;
return this__30816.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__30817 = this;
return this__30817.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__30818 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__30819 = this;
return this__30819.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__30820 = this;
return this__30820.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__30821 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__30822 = this;
return (new cljs.core.List(meta,this__30822.first,this__30822.rest,this__30822.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__30823 = this;
return this__30823.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__30824 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__30825 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__30826 = this;
return (new cljs.core.List(this__30826.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__30827 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__30828 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__30829 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__30830 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__30831 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__30832 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__30833 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__30834 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__30835 = this;
return this__30835.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__30836 = this;
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
list.cljs$lang$applyTo = (function (arglist__30837){
var items = cljs.core.seq( arglist__30837 );;
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
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__30838 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__30839 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__30840 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__30841 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__30841.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__30842 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__30843 = this;
return this__30843.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__30844 = this;
if(cljs.core.truth_((this__30844.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__30844.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__30845 = this;
return this__30845.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__30846 = this;
return (new cljs.core.Cons(meta,this__30846.first,this__30846.rest));
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
var G__30847 = null;
var G__30847__30848 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__30847__30849 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__30847 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__30847__30848.call(this,string,f);
case  3 :
return G__30847__30849.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30847;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__30851 = null;
var G__30851__30852 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__30851__30853 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__30851 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__30851__30852.call(this,string,k);
case  3 :
return G__30851__30853.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30851;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__30855 = null;
var G__30855__30856 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__30855__30857 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__30855 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__30855__30856.call(this,string,n);
case  3 :
return G__30855__30857.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30855;
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
var G__30865 = null;
var G__30865__30866 = (function (tsym30859,coll){
var tsym30859__30861 = this;

var this$__30862 = tsym30859__30861;

return cljs.core.get.call(null,coll,this$__30862.toString());
});
var G__30865__30867 = (function (tsym30860,coll,not_found){
var tsym30860__30863 = this;

var this$__30864 = tsym30860__30863;

return cljs.core.get.call(null,coll,this$__30864.toString(),not_found);
});
G__30865 = function(tsym30860,coll,not_found){
switch(arguments.length){
case  2 :
return G__30865__30866.call(this,tsym30860,coll);
case  3 :
return G__30865__30867.call(this,tsym30860,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30865;
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
var x__30869 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__30869;
} else
{lazy_seq.x = x__30869.call(null);
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
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__30870 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__30871 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__30872 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__30873 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__30873.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__30874 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__30875 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__30876 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__30877 = this;
return this__30877.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__30878 = this;
return (new cljs.core.LazySeq(meta,this__30878.realized,this__30878.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__30879 = [];

var s__30880 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__30880)))
{ary__30879.push(cljs.core.first.call(null,s__30880));
{
var G__30881 = cljs.core.next.call(null,s__30880);
s__30880 = G__30881;
continue;
}
} else
{return ary__30879;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__30882 = s;
var i__30883 = n;
var sum__30884 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3822__auto____30885 = (i__30883 > 0);

if(cljs.core.truth_(and__3822__auto____30885))
{return cljs.core.seq.call(null,s__30882);
} else
{return and__3822__auto____30885;
}
})()))
{{
var G__30886 = cljs.core.next.call(null,s__30882);
var G__30887 = (i__30883 - 1);
var G__30888 = (sum__30884 + 1);
s__30882 = G__30886;
i__30883 = G__30887;
sum__30884 = G__30888;
continue;
}
} else
{return sum__30884;
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
var concat__30892 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__30893 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__30894 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__30889 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__30889))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__30889),concat.call(null,cljs.core.rest.call(null,s__30889),y));
} else
{return y;
}
})));
});
var concat__30895 = (function() { 
var G__30897__delegate = function (x,y,zs){
var cat__30891 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__30890 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__30890))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__30890),cat.call(null,cljs.core.rest.call(null,xys__30890),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__30891.call(null,concat.call(null,x,y),zs);
};
var G__30897 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30897__delegate.call(this, x, y, zs);
};
G__30897.cljs$lang$maxFixedArity = 2;
G__30897.cljs$lang$applyTo = (function (arglist__30898){
var x = cljs.core.first(arglist__30898);
var y = cljs.core.first(cljs.core.next(arglist__30898));
var zs = cljs.core.rest(cljs.core.next(arglist__30898));
return G__30897__delegate.call(this, x, y, zs);
});
return G__30897;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__30892.call(this);
case  1 :
return concat__30893.call(this,x);
case  2 :
return concat__30894.call(this,x,y);
default:
return concat__30895.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__30895.cljs$lang$applyTo;
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
var list_STAR___30899 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___30900 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___30901 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___30902 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___30903 = (function() { 
var G__30905__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__30905 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__30905__delegate.call(this, a, b, c, d, more);
};
G__30905.cljs$lang$maxFixedArity = 4;
G__30905.cljs$lang$applyTo = (function (arglist__30906){
var a = cljs.core.first(arglist__30906);
var b = cljs.core.first(cljs.core.next(arglist__30906));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30906)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__30906))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__30906))));
return G__30905__delegate.call(this, a, b, c, d, more);
});
return G__30905;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___30899.call(this,a);
case  2 :
return list_STAR___30900.call(this,a,b);
case  3 :
return list_STAR___30901.call(this,a,b,c);
case  4 :
return list_STAR___30902.call(this,a,b,c,d);
default:
return list_STAR___30903.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___30903.cljs$lang$applyTo;
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
var apply__30916 = (function (f,args){
var fixed_arity__30907 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__30907 + 1)) <= fixed_arity__30907)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__30917 = (function (f,x,args){
var arglist__30908 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__30909 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__30908,fixed_arity__30909) <= fixed_arity__30909)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__30908));
} else
{return f.cljs$lang$applyTo(arglist__30908);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__30908));
}
});
var apply__30918 = (function (f,x,y,args){
var arglist__30910 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__30911 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__30910,fixed_arity__30911) <= fixed_arity__30911)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__30910));
} else
{return f.cljs$lang$applyTo(arglist__30910);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__30910));
}
});
var apply__30919 = (function (f,x,y,z,args){
var arglist__30912 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__30913 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__30912,fixed_arity__30913) <= fixed_arity__30913)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__30912));
} else
{return f.cljs$lang$applyTo(arglist__30912);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__30912));
}
});
var apply__30920 = (function() { 
var G__30922__delegate = function (f,a,b,c,d,args){
var arglist__30914 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__30915 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__30914,fixed_arity__30915) <= fixed_arity__30915)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__30914));
} else
{return f.cljs$lang$applyTo(arglist__30914);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__30914));
}
};
var G__30922 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__30922__delegate.call(this, f, a, b, c, d, args);
};
G__30922.cljs$lang$maxFixedArity = 5;
G__30922.cljs$lang$applyTo = (function (arglist__30923){
var f = cljs.core.first(arglist__30923);
var a = cljs.core.first(cljs.core.next(arglist__30923));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30923)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__30923))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__30923)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__30923)))));
return G__30922__delegate.call(this, f, a, b, c, d, args);
});
return G__30922;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__30916.call(this,f,a);
case  3 :
return apply__30917.call(this,f,a,b);
case  4 :
return apply__30918.call(this,f,a,b,c);
case  5 :
return apply__30919.call(this,f,a,b,c,d);
default:
return apply__30920.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__30920.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__30924){
var obj = cljs.core.first(arglist__30924);
var f = cljs.core.first(cljs.core.next(arglist__30924));
var args = cljs.core.rest(cljs.core.next(arglist__30924));
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
var not_EQ___30925 = (function (x){
return false;
});
var not_EQ___30926 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___30927 = (function() { 
var G__30929__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__30929 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30929__delegate.call(this, x, y, more);
};
G__30929.cljs$lang$maxFixedArity = 2;
G__30929.cljs$lang$applyTo = (function (arglist__30930){
var x = cljs.core.first(arglist__30930);
var y = cljs.core.first(cljs.core.next(arglist__30930));
var more = cljs.core.rest(cljs.core.next(arglist__30930));
return G__30929__delegate.call(this, x, y, more);
});
return G__30929;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___30925.call(this,x);
case  2 :
return not_EQ___30926.call(this,x,y);
default:
return not_EQ___30927.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___30927.cljs$lang$applyTo;
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
var G__30931 = pred;
var G__30932 = cljs.core.next.call(null,coll);
pred = G__30931;
coll = G__30932;
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
{var or__3824__auto____30933 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3824__auto____30933))
{return or__3824__auto____30933;
} else
{{
var G__30934 = pred;
var G__30935 = cljs.core.next.call(null,coll);
pred = G__30934;
coll = G__30935;
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
var G__30936 = null;
var G__30936__30937 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__30936__30938 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__30936__30939 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__30936__30940 = (function() { 
var G__30942__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__30942 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30942__delegate.call(this, x, y, zs);
};
G__30942.cljs$lang$maxFixedArity = 2;
G__30942.cljs$lang$applyTo = (function (arglist__30943){
var x = cljs.core.first(arglist__30943);
var y = cljs.core.first(cljs.core.next(arglist__30943));
var zs = cljs.core.rest(cljs.core.next(arglist__30943));
return G__30942__delegate.call(this, x, y, zs);
});
return G__30942;
})()
;
G__30936 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__30936__30937.call(this);
case  1 :
return G__30936__30938.call(this,x);
case  2 :
return G__30936__30939.call(this,x,y);
default:
return G__30936__30940.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__30936.cljs$lang$maxFixedArity = 2;
G__30936.cljs$lang$applyTo = G__30936__30940.cljs$lang$applyTo;
return G__30936;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__30944__delegate = function (args){
return x;
};
var G__30944 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__30944__delegate.call(this, args);
};
G__30944.cljs$lang$maxFixedArity = 0;
G__30944.cljs$lang$applyTo = (function (arglist__30945){
var args = cljs.core.seq( arglist__30945 );;
return G__30944__delegate.call(this, args);
});
return G__30944;
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
var comp__30949 = (function (){
return cljs.core.identity;
});
var comp__30950 = (function (f){
return f;
});
var comp__30951 = (function (f,g){
return (function() {
var G__30955 = null;
var G__30955__30956 = (function (){
return f.call(null,g.call(null));
});
var G__30955__30957 = (function (x){
return f.call(null,g.call(null,x));
});
var G__30955__30958 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__30955__30959 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__30955__30960 = (function() { 
var G__30962__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__30962 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__30962__delegate.call(this, x, y, z, args);
};
G__30962.cljs$lang$maxFixedArity = 3;
G__30962.cljs$lang$applyTo = (function (arglist__30963){
var x = cljs.core.first(arglist__30963);
var y = cljs.core.first(cljs.core.next(arglist__30963));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30963)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__30963)));
return G__30962__delegate.call(this, x, y, z, args);
});
return G__30962;
})()
;
G__30955 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__30955__30956.call(this);
case  1 :
return G__30955__30957.call(this,x);
case  2 :
return G__30955__30958.call(this,x,y);
case  3 :
return G__30955__30959.call(this,x,y,z);
default:
return G__30955__30960.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__30955.cljs$lang$maxFixedArity = 3;
G__30955.cljs$lang$applyTo = G__30955__30960.cljs$lang$applyTo;
return G__30955;
})()
});
var comp__30952 = (function (f,g,h){
return (function() {
var G__30964 = null;
var G__30964__30965 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__30964__30966 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__30964__30967 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__30964__30968 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__30964__30969 = (function() { 
var G__30971__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__30971 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__30971__delegate.call(this, x, y, z, args);
};
G__30971.cljs$lang$maxFixedArity = 3;
G__30971.cljs$lang$applyTo = (function (arglist__30972){
var x = cljs.core.first(arglist__30972);
var y = cljs.core.first(cljs.core.next(arglist__30972));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30972)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__30972)));
return G__30971__delegate.call(this, x, y, z, args);
});
return G__30971;
})()
;
G__30964 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__30964__30965.call(this);
case  1 :
return G__30964__30966.call(this,x);
case  2 :
return G__30964__30967.call(this,x,y);
case  3 :
return G__30964__30968.call(this,x,y,z);
default:
return G__30964__30969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__30964.cljs$lang$maxFixedArity = 3;
G__30964.cljs$lang$applyTo = G__30964__30969.cljs$lang$applyTo;
return G__30964;
})()
});
var comp__30953 = (function() { 
var G__30973__delegate = function (f1,f2,f3,fs){
var fs__30946 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__30974__delegate = function (args){
var ret__30947 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__30946),args);
var fs__30948 = cljs.core.next.call(null,fs__30946);

while(true){
if(cljs.core.truth_(fs__30948))
{{
var G__30975 = cljs.core.first.call(null,fs__30948).call(null,ret__30947);
var G__30976 = cljs.core.next.call(null,fs__30948);
ret__30947 = G__30975;
fs__30948 = G__30976;
continue;
}
} else
{return ret__30947;
}
break;
}
};
var G__30974 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__30974__delegate.call(this, args);
};
G__30974.cljs$lang$maxFixedArity = 0;
G__30974.cljs$lang$applyTo = (function (arglist__30977){
var args = cljs.core.seq( arglist__30977 );;
return G__30974__delegate.call(this, args);
});
return G__30974;
})()
;
};
var G__30973 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__30973__delegate.call(this, f1, f2, f3, fs);
};
G__30973.cljs$lang$maxFixedArity = 3;
G__30973.cljs$lang$applyTo = (function (arglist__30978){
var f1 = cljs.core.first(arglist__30978);
var f2 = cljs.core.first(cljs.core.next(arglist__30978));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30978)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__30978)));
return G__30973__delegate.call(this, f1, f2, f3, fs);
});
return G__30973;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__30949.call(this);
case  1 :
return comp__30950.call(this,f1);
case  2 :
return comp__30951.call(this,f1,f2);
case  3 :
return comp__30952.call(this,f1,f2,f3);
default:
return comp__30953.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__30953.cljs$lang$applyTo;
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
var partial__30979 = (function (f,arg1){
return (function() { 
var G__30984__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__30984 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__30984__delegate.call(this, args);
};
G__30984.cljs$lang$maxFixedArity = 0;
G__30984.cljs$lang$applyTo = (function (arglist__30985){
var args = cljs.core.seq( arglist__30985 );;
return G__30984__delegate.call(this, args);
});
return G__30984;
})()
;
});
var partial__30980 = (function (f,arg1,arg2){
return (function() { 
var G__30986__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__30986 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__30986__delegate.call(this, args);
};
G__30986.cljs$lang$maxFixedArity = 0;
G__30986.cljs$lang$applyTo = (function (arglist__30987){
var args = cljs.core.seq( arglist__30987 );;
return G__30986__delegate.call(this, args);
});
return G__30986;
})()
;
});
var partial__30981 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__30988__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__30988 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__30988__delegate.call(this, args);
};
G__30988.cljs$lang$maxFixedArity = 0;
G__30988.cljs$lang$applyTo = (function (arglist__30989){
var args = cljs.core.seq( arglist__30989 );;
return G__30988__delegate.call(this, args);
});
return G__30988;
})()
;
});
var partial__30982 = (function() { 
var G__30990__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__30991__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__30991 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__30991__delegate.call(this, args);
};
G__30991.cljs$lang$maxFixedArity = 0;
G__30991.cljs$lang$applyTo = (function (arglist__30992){
var args = cljs.core.seq( arglist__30992 );;
return G__30991__delegate.call(this, args);
});
return G__30991;
})()
;
};
var G__30990 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__30990__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__30990.cljs$lang$maxFixedArity = 4;
G__30990.cljs$lang$applyTo = (function (arglist__30993){
var f = cljs.core.first(arglist__30993);
var arg1 = cljs.core.first(cljs.core.next(arglist__30993));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30993)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__30993))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__30993))));
return G__30990__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__30990;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__30979.call(this,f,arg1);
case  3 :
return partial__30980.call(this,f,arg1,arg2);
case  4 :
return partial__30981.call(this,f,arg1,arg2,arg3);
default:
return partial__30982.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__30982.cljs$lang$applyTo;
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
var fnil__30994 = (function (f,x){
return (function() {
var G__30998 = null;
var G__30998__30999 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__30998__31000 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__30998__31001 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__30998__31002 = (function() { 
var G__31004__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__31004 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31004__delegate.call(this, a, b, c, ds);
};
G__31004.cljs$lang$maxFixedArity = 3;
G__31004.cljs$lang$applyTo = (function (arglist__31005){
var a = cljs.core.first(arglist__31005);
var b = cljs.core.first(cljs.core.next(arglist__31005));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31005)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31005)));
return G__31004__delegate.call(this, a, b, c, ds);
});
return G__31004;
})()
;
G__30998 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__30998__30999.call(this,a);
case  2 :
return G__30998__31000.call(this,a,b);
case  3 :
return G__30998__31001.call(this,a,b,c);
default:
return G__30998__31002.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__30998.cljs$lang$maxFixedArity = 3;
G__30998.cljs$lang$applyTo = G__30998__31002.cljs$lang$applyTo;
return G__30998;
})()
});
var fnil__30995 = (function (f,x,y){
return (function() {
var G__31006 = null;
var G__31006__31007 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__31006__31008 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__31006__31009 = (function() { 
var G__31011__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__31011 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31011__delegate.call(this, a, b, c, ds);
};
G__31011.cljs$lang$maxFixedArity = 3;
G__31011.cljs$lang$applyTo = (function (arglist__31012){
var a = cljs.core.first(arglist__31012);
var b = cljs.core.first(cljs.core.next(arglist__31012));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31012)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31012)));
return G__31011__delegate.call(this, a, b, c, ds);
});
return G__31011;
})()
;
G__31006 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__31006__31007.call(this,a,b);
case  3 :
return G__31006__31008.call(this,a,b,c);
default:
return G__31006__31009.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__31006.cljs$lang$maxFixedArity = 3;
G__31006.cljs$lang$applyTo = G__31006__31009.cljs$lang$applyTo;
return G__31006;
})()
});
var fnil__30996 = (function (f,x,y,z){
return (function() {
var G__31013 = null;
var G__31013__31014 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__31013__31015 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__31013__31016 = (function() { 
var G__31018__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__31018 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31018__delegate.call(this, a, b, c, ds);
};
G__31018.cljs$lang$maxFixedArity = 3;
G__31018.cljs$lang$applyTo = (function (arglist__31019){
var a = cljs.core.first(arglist__31019);
var b = cljs.core.first(cljs.core.next(arglist__31019));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31019)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31019)));
return G__31018__delegate.call(this, a, b, c, ds);
});
return G__31018;
})()
;
G__31013 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__31013__31014.call(this,a,b);
case  3 :
return G__31013__31015.call(this,a,b,c);
default:
return G__31013__31016.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__31013.cljs$lang$maxFixedArity = 3;
G__31013.cljs$lang$applyTo = G__31013__31016.cljs$lang$applyTo;
return G__31013;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__30994.call(this,f,x);
case  3 :
return fnil__30995.call(this,f,x,y);
case  4 :
return fnil__30996.call(this,f,x,y,z);
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
var mapi__31022 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____31020 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____31020))
{var s__31021 = temp__3974__auto____31020;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__31021)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__31021)));
} else
{return null;
}
})));
});

return mapi__31022.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____31023 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____31023))
{var s__31024 = temp__3974__auto____31023;

var x__31025 = f.call(null,cljs.core.first.call(null,s__31024));

if(cljs.core.truth_((x__31025 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__31024));
} else
{return cljs.core.cons.call(null,x__31025,keep.call(null,f,cljs.core.rest.call(null,s__31024)));
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
var keepi__31035 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____31032 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____31032))
{var s__31033 = temp__3974__auto____31032;

var x__31034 = f.call(null,idx,cljs.core.first.call(null,s__31033));

if(cljs.core.truth_((x__31034 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__31033));
} else
{return cljs.core.cons.call(null,x__31034,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__31033)));
}
} else
{return null;
}
})));
});

return keepi__31035.call(null,0,coll);
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
var every_pred__31080 = (function (p){
return (function() {
var ep1 = null;
var ep1__31085 = (function (){
return true;
});
var ep1__31086 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__31087 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____31042 = p.call(null,x);

if(cljs.core.truth_(and__3822__auto____31042))
{return p.call(null,y);
} else
{return and__3822__auto____31042;
}
})());
});
var ep1__31088 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____31043 = p.call(null,x);

if(cljs.core.truth_(and__3822__auto____31043))
{var and__3822__auto____31044 = p.call(null,y);

if(cljs.core.truth_(and__3822__auto____31044))
{return p.call(null,z);
} else
{return and__3822__auto____31044;
}
} else
{return and__3822__auto____31043;
}
})());
});
var ep1__31089 = (function() { 
var G__31091__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____31045 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____31045))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____31045;
}
})());
};
var G__31091 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31091__delegate.call(this, x, y, z, args);
};
G__31091.cljs$lang$maxFixedArity = 3;
G__31091.cljs$lang$applyTo = (function (arglist__31092){
var x = cljs.core.first(arglist__31092);
var y = cljs.core.first(cljs.core.next(arglist__31092));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31092)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31092)));
return G__31091__delegate.call(this, x, y, z, args);
});
return G__31091;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__31085.call(this);
case  1 :
return ep1__31086.call(this,x);
case  2 :
return ep1__31087.call(this,x,y);
case  3 :
return ep1__31088.call(this,x,y,z);
default:
return ep1__31089.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__31089.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__31081 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__31093 = (function (){
return true;
});
var ep2__31094 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____31046 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____31046))
{return p2.call(null,x);
} else
{return and__3822__auto____31046;
}
})());
});
var ep2__31095 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____31047 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____31047))
{var and__3822__auto____31048 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____31048))
{var and__3822__auto____31049 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____31049))
{return p2.call(null,y);
} else
{return and__3822__auto____31049;
}
} else
{return and__3822__auto____31048;
}
} else
{return and__3822__auto____31047;
}
})());
});
var ep2__31096 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____31050 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____31050))
{var and__3822__auto____31051 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____31051))
{var and__3822__auto____31052 = p1.call(null,z);

if(cljs.core.truth_(and__3822__auto____31052))
{var and__3822__auto____31053 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____31053))
{var and__3822__auto____31054 = p2.call(null,y);

if(cljs.core.truth_(and__3822__auto____31054))
{return p2.call(null,z);
} else
{return and__3822__auto____31054;
}
} else
{return and__3822__auto____31053;
}
} else
{return and__3822__auto____31052;
}
} else
{return and__3822__auto____31051;
}
} else
{return and__3822__auto____31050;
}
})());
});
var ep2__31097 = (function() { 
var G__31099__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____31055 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____31055))
{return cljs.core.every_QMARK_.call(null,(function (p1__31026_SHARP_){
var and__3822__auto____31056 = p1.call(null,p1__31026_SHARP_);

if(cljs.core.truth_(and__3822__auto____31056))
{return p2.call(null,p1__31026_SHARP_);
} else
{return and__3822__auto____31056;
}
}),args);
} else
{return and__3822__auto____31055;
}
})());
};
var G__31099 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31099__delegate.call(this, x, y, z, args);
};
G__31099.cljs$lang$maxFixedArity = 3;
G__31099.cljs$lang$applyTo = (function (arglist__31100){
var x = cljs.core.first(arglist__31100);
var y = cljs.core.first(cljs.core.next(arglist__31100));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31100)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31100)));
return G__31099__delegate.call(this, x, y, z, args);
});
return G__31099;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__31093.call(this);
case  1 :
return ep2__31094.call(this,x);
case  2 :
return ep2__31095.call(this,x,y);
case  3 :
return ep2__31096.call(this,x,y,z);
default:
return ep2__31097.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__31097.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__31082 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__31101 = (function (){
return true;
});
var ep3__31102 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____31057 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____31057))
{var and__3822__auto____31058 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____31058))
{return p3.call(null,x);
} else
{return and__3822__auto____31058;
}
} else
{return and__3822__auto____31057;
}
})());
});
var ep3__31103 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____31059 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____31059))
{var and__3822__auto____31060 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____31060))
{var and__3822__auto____31061 = p3.call(null,x);

if(cljs.core.truth_(and__3822__auto____31061))
{var and__3822__auto____31062 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____31062))
{var and__3822__auto____31063 = p2.call(null,y);

if(cljs.core.truth_(and__3822__auto____31063))
{return p3.call(null,y);
} else
{return and__3822__auto____31063;
}
} else
{return and__3822__auto____31062;
}
} else
{return and__3822__auto____31061;
}
} else
{return and__3822__auto____31060;
}
} else
{return and__3822__auto____31059;
}
})());
});
var ep3__31104 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____31064 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____31064))
{var and__3822__auto____31065 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____31065))
{var and__3822__auto____31066 = p3.call(null,x);

if(cljs.core.truth_(and__3822__auto____31066))
{var and__3822__auto____31067 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____31067))
{var and__3822__auto____31068 = p2.call(null,y);

if(cljs.core.truth_(and__3822__auto____31068))
{var and__3822__auto____31069 = p3.call(null,y);

if(cljs.core.truth_(and__3822__auto____31069))
{var and__3822__auto____31070 = p1.call(null,z);

if(cljs.core.truth_(and__3822__auto____31070))
{var and__3822__auto____31071 = p2.call(null,z);

if(cljs.core.truth_(and__3822__auto____31071))
{return p3.call(null,z);
} else
{return and__3822__auto____31071;
}
} else
{return and__3822__auto____31070;
}
} else
{return and__3822__auto____31069;
}
} else
{return and__3822__auto____31068;
}
} else
{return and__3822__auto____31067;
}
} else
{return and__3822__auto____31066;
}
} else
{return and__3822__auto____31065;
}
} else
{return and__3822__auto____31064;
}
})());
});
var ep3__31105 = (function() { 
var G__31107__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____31072 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____31072))
{return cljs.core.every_QMARK_.call(null,(function (p1__31027_SHARP_){
var and__3822__auto____31073 = p1.call(null,p1__31027_SHARP_);

if(cljs.core.truth_(and__3822__auto____31073))
{var and__3822__auto____31074 = p2.call(null,p1__31027_SHARP_);

if(cljs.core.truth_(and__3822__auto____31074))
{return p3.call(null,p1__31027_SHARP_);
} else
{return and__3822__auto____31074;
}
} else
{return and__3822__auto____31073;
}
}),args);
} else
{return and__3822__auto____31072;
}
})());
};
var G__31107 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31107__delegate.call(this, x, y, z, args);
};
G__31107.cljs$lang$maxFixedArity = 3;
G__31107.cljs$lang$applyTo = (function (arglist__31108){
var x = cljs.core.first(arglist__31108);
var y = cljs.core.first(cljs.core.next(arglist__31108));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31108)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31108)));
return G__31107__delegate.call(this, x, y, z, args);
});
return G__31107;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__31101.call(this);
case  1 :
return ep3__31102.call(this,x);
case  2 :
return ep3__31103.call(this,x,y);
case  3 :
return ep3__31104.call(this,x,y,z);
default:
return ep3__31105.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__31105.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__31083 = (function() { 
var G__31109__delegate = function (p1,p2,p3,ps){
var ps__31075 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__31110 = (function (){
return true;
});
var epn__31111 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__31028_SHARP_){
return p1__31028_SHARP_.call(null,x);
}),ps__31075);
});
var epn__31112 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__31029_SHARP_){
var and__3822__auto____31076 = p1__31029_SHARP_.call(null,x);

if(cljs.core.truth_(and__3822__auto____31076))
{return p1__31029_SHARP_.call(null,y);
} else
{return and__3822__auto____31076;
}
}),ps__31075);
});
var epn__31113 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__31030_SHARP_){
var and__3822__auto____31077 = p1__31030_SHARP_.call(null,x);

if(cljs.core.truth_(and__3822__auto____31077))
{var and__3822__auto____31078 = p1__31030_SHARP_.call(null,y);

if(cljs.core.truth_(and__3822__auto____31078))
{return p1__31030_SHARP_.call(null,z);
} else
{return and__3822__auto____31078;
}
} else
{return and__3822__auto____31077;
}
}),ps__31075);
});
var epn__31114 = (function() { 
var G__31116__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____31079 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____31079))
{return cljs.core.every_QMARK_.call(null,(function (p1__31031_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__31031_SHARP_,args);
}),ps__31075);
} else
{return and__3822__auto____31079;
}
})());
};
var G__31116 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31116__delegate.call(this, x, y, z, args);
};
G__31116.cljs$lang$maxFixedArity = 3;
G__31116.cljs$lang$applyTo = (function (arglist__31117){
var x = cljs.core.first(arglist__31117);
var y = cljs.core.first(cljs.core.next(arglist__31117));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31117)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31117)));
return G__31116__delegate.call(this, x, y, z, args);
});
return G__31116;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__31110.call(this);
case  1 :
return epn__31111.call(this,x);
case  2 :
return epn__31112.call(this,x,y);
case  3 :
return epn__31113.call(this,x,y,z);
default:
return epn__31114.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__31114.cljs$lang$applyTo;
return epn;
})()
};
var G__31109 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31109__delegate.call(this, p1, p2, p3, ps);
};
G__31109.cljs$lang$maxFixedArity = 3;
G__31109.cljs$lang$applyTo = (function (arglist__31118){
var p1 = cljs.core.first(arglist__31118);
var p2 = cljs.core.first(cljs.core.next(arglist__31118));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31118)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31118)));
return G__31109__delegate.call(this, p1, p2, p3, ps);
});
return G__31109;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__31080.call(this,p1);
case  2 :
return every_pred__31081.call(this,p1,p2);
case  3 :
return every_pred__31082.call(this,p1,p2,p3);
default:
return every_pred__31083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__31083.cljs$lang$applyTo;
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
var some_fn__31158 = (function (p){
return (function() {
var sp1 = null;
var sp1__31163 = (function (){
return null;
});
var sp1__31164 = (function (x){
return p.call(null,x);
});
var sp1__31165 = (function (x,y){
var or__3824__auto____31120 = p.call(null,x);

if(cljs.core.truth_(or__3824__auto____31120))
{return or__3824__auto____31120;
} else
{return p.call(null,y);
}
});
var sp1__31166 = (function (x,y,z){
var or__3824__auto____31121 = p.call(null,x);

if(cljs.core.truth_(or__3824__auto____31121))
{return or__3824__auto____31121;
} else
{var or__3824__auto____31122 = p.call(null,y);

if(cljs.core.truth_(or__3824__auto____31122))
{return or__3824__auto____31122;
} else
{return p.call(null,z);
}
}
});
var sp1__31167 = (function() { 
var G__31169__delegate = function (x,y,z,args){
var or__3824__auto____31123 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____31123))
{return or__3824__auto____31123;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__31169 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31169__delegate.call(this, x, y, z, args);
};
G__31169.cljs$lang$maxFixedArity = 3;
G__31169.cljs$lang$applyTo = (function (arglist__31170){
var x = cljs.core.first(arglist__31170);
var y = cljs.core.first(cljs.core.next(arglist__31170));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31170)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31170)));
return G__31169__delegate.call(this, x, y, z, args);
});
return G__31169;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__31163.call(this);
case  1 :
return sp1__31164.call(this,x);
case  2 :
return sp1__31165.call(this,x,y);
case  3 :
return sp1__31166.call(this,x,y,z);
default:
return sp1__31167.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__31167.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__31159 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__31171 = (function (){
return null;
});
var sp2__31172 = (function (x){
var or__3824__auto____31124 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____31124))
{return or__3824__auto____31124;
} else
{return p2.call(null,x);
}
});
var sp2__31173 = (function (x,y){
var or__3824__auto____31125 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____31125))
{return or__3824__auto____31125;
} else
{var or__3824__auto____31126 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____31126))
{return or__3824__auto____31126;
} else
{var or__3824__auto____31127 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____31127))
{return or__3824__auto____31127;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__31174 = (function (x,y,z){
var or__3824__auto____31128 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____31128))
{return or__3824__auto____31128;
} else
{var or__3824__auto____31129 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____31129))
{return or__3824__auto____31129;
} else
{var or__3824__auto____31130 = p1.call(null,z);

if(cljs.core.truth_(or__3824__auto____31130))
{return or__3824__auto____31130;
} else
{var or__3824__auto____31131 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____31131))
{return or__3824__auto____31131;
} else
{var or__3824__auto____31132 = p2.call(null,y);

if(cljs.core.truth_(or__3824__auto____31132))
{return or__3824__auto____31132;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__31175 = (function() { 
var G__31177__delegate = function (x,y,z,args){
var or__3824__auto____31133 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____31133))
{return or__3824__auto____31133;
} else
{return cljs.core.some.call(null,(function (p1__31036_SHARP_){
var or__3824__auto____31134 = p1.call(null,p1__31036_SHARP_);

if(cljs.core.truth_(or__3824__auto____31134))
{return or__3824__auto____31134;
} else
{return p2.call(null,p1__31036_SHARP_);
}
}),args);
}
};
var G__31177 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31177__delegate.call(this, x, y, z, args);
};
G__31177.cljs$lang$maxFixedArity = 3;
G__31177.cljs$lang$applyTo = (function (arglist__31178){
var x = cljs.core.first(arglist__31178);
var y = cljs.core.first(cljs.core.next(arglist__31178));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31178)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31178)));
return G__31177__delegate.call(this, x, y, z, args);
});
return G__31177;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__31171.call(this);
case  1 :
return sp2__31172.call(this,x);
case  2 :
return sp2__31173.call(this,x,y);
case  3 :
return sp2__31174.call(this,x,y,z);
default:
return sp2__31175.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__31175.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__31160 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__31179 = (function (){
return null;
});
var sp3__31180 = (function (x){
var or__3824__auto____31135 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____31135))
{return or__3824__auto____31135;
} else
{var or__3824__auto____31136 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____31136))
{return or__3824__auto____31136;
} else
{return p3.call(null,x);
}
}
});
var sp3__31181 = (function (x,y){
var or__3824__auto____31137 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____31137))
{return or__3824__auto____31137;
} else
{var or__3824__auto____31138 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____31138))
{return or__3824__auto____31138;
} else
{var or__3824__auto____31139 = p3.call(null,x);

if(cljs.core.truth_(or__3824__auto____31139))
{return or__3824__auto____31139;
} else
{var or__3824__auto____31140 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____31140))
{return or__3824__auto____31140;
} else
{var or__3824__auto____31141 = p2.call(null,y);

if(cljs.core.truth_(or__3824__auto____31141))
{return or__3824__auto____31141;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__31182 = (function (x,y,z){
var or__3824__auto____31142 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____31142))
{return or__3824__auto____31142;
} else
{var or__3824__auto____31143 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____31143))
{return or__3824__auto____31143;
} else
{var or__3824__auto____31144 = p3.call(null,x);

if(cljs.core.truth_(or__3824__auto____31144))
{return or__3824__auto____31144;
} else
{var or__3824__auto____31145 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____31145))
{return or__3824__auto____31145;
} else
{var or__3824__auto____31146 = p2.call(null,y);

if(cljs.core.truth_(or__3824__auto____31146))
{return or__3824__auto____31146;
} else
{var or__3824__auto____31147 = p3.call(null,y);

if(cljs.core.truth_(or__3824__auto____31147))
{return or__3824__auto____31147;
} else
{var or__3824__auto____31148 = p1.call(null,z);

if(cljs.core.truth_(or__3824__auto____31148))
{return or__3824__auto____31148;
} else
{var or__3824__auto____31149 = p2.call(null,z);

if(cljs.core.truth_(or__3824__auto____31149))
{return or__3824__auto____31149;
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
var sp3__31183 = (function() { 
var G__31185__delegate = function (x,y,z,args){
var or__3824__auto____31150 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____31150))
{return or__3824__auto____31150;
} else
{return cljs.core.some.call(null,(function (p1__31037_SHARP_){
var or__3824__auto____31151 = p1.call(null,p1__31037_SHARP_);

if(cljs.core.truth_(or__3824__auto____31151))
{return or__3824__auto____31151;
} else
{var or__3824__auto____31152 = p2.call(null,p1__31037_SHARP_);

if(cljs.core.truth_(or__3824__auto____31152))
{return or__3824__auto____31152;
} else
{return p3.call(null,p1__31037_SHARP_);
}
}
}),args);
}
};
var G__31185 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31185__delegate.call(this, x, y, z, args);
};
G__31185.cljs$lang$maxFixedArity = 3;
G__31185.cljs$lang$applyTo = (function (arglist__31186){
var x = cljs.core.first(arglist__31186);
var y = cljs.core.first(cljs.core.next(arglist__31186));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31186)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31186)));
return G__31185__delegate.call(this, x, y, z, args);
});
return G__31185;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__31179.call(this);
case  1 :
return sp3__31180.call(this,x);
case  2 :
return sp3__31181.call(this,x,y);
case  3 :
return sp3__31182.call(this,x,y,z);
default:
return sp3__31183.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__31183.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__31161 = (function() { 
var G__31187__delegate = function (p1,p2,p3,ps){
var ps__31153 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__31188 = (function (){
return null;
});
var spn__31189 = (function (x){
return cljs.core.some.call(null,(function (p1__31038_SHARP_){
return p1__31038_SHARP_.call(null,x);
}),ps__31153);
});
var spn__31190 = (function (x,y){
return cljs.core.some.call(null,(function (p1__31039_SHARP_){
var or__3824__auto____31154 = p1__31039_SHARP_.call(null,x);

if(cljs.core.truth_(or__3824__auto____31154))
{return or__3824__auto____31154;
} else
{return p1__31039_SHARP_.call(null,y);
}
}),ps__31153);
});
var spn__31191 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__31040_SHARP_){
var or__3824__auto____31155 = p1__31040_SHARP_.call(null,x);

if(cljs.core.truth_(or__3824__auto____31155))
{return or__3824__auto____31155;
} else
{var or__3824__auto____31156 = p1__31040_SHARP_.call(null,y);

if(cljs.core.truth_(or__3824__auto____31156))
{return or__3824__auto____31156;
} else
{return p1__31040_SHARP_.call(null,z);
}
}
}),ps__31153);
});
var spn__31192 = (function() { 
var G__31194__delegate = function (x,y,z,args){
var or__3824__auto____31157 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____31157))
{return or__3824__auto____31157;
} else
{return cljs.core.some.call(null,(function (p1__31041_SHARP_){
return cljs.core.some.call(null,p1__31041_SHARP_,args);
}),ps__31153);
}
};
var G__31194 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31194__delegate.call(this, x, y, z, args);
};
G__31194.cljs$lang$maxFixedArity = 3;
G__31194.cljs$lang$applyTo = (function (arglist__31195){
var x = cljs.core.first(arglist__31195);
var y = cljs.core.first(cljs.core.next(arglist__31195));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31195)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31195)));
return G__31194__delegate.call(this, x, y, z, args);
});
return G__31194;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__31188.call(this);
case  1 :
return spn__31189.call(this,x);
case  2 :
return spn__31190.call(this,x,y);
case  3 :
return spn__31191.call(this,x,y,z);
default:
return spn__31192.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__31192.cljs$lang$applyTo;
return spn;
})()
};
var G__31187 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31187__delegate.call(this, p1, p2, p3, ps);
};
G__31187.cljs$lang$maxFixedArity = 3;
G__31187.cljs$lang$applyTo = (function (arglist__31196){
var p1 = cljs.core.first(arglist__31196);
var p2 = cljs.core.first(cljs.core.next(arglist__31196));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31196)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31196)));
return G__31187__delegate.call(this, p1, p2, p3, ps);
});
return G__31187;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__31158.call(this,p1);
case  2 :
return some_fn__31159.call(this,p1,p2);
case  3 :
return some_fn__31160.call(this,p1,p2,p3);
default:
return some_fn__31161.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__31161.cljs$lang$applyTo;
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
var map__31209 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____31197 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____31197))
{var s__31198 = temp__3974__auto____31197;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__31198)),map.call(null,f,cljs.core.rest.call(null,s__31198)));
} else
{return null;
}
})));
});
var map__31210 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__31199 = cljs.core.seq.call(null,c1);
var s2__31200 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3822__auto____31201 = s1__31199;

if(cljs.core.truth_(and__3822__auto____31201))
{return s2__31200;
} else
{return and__3822__auto____31201;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__31199),cljs.core.first.call(null,s2__31200)),map.call(null,f,cljs.core.rest.call(null,s1__31199),cljs.core.rest.call(null,s2__31200)));
} else
{return null;
}
})));
});
var map__31211 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__31202 = cljs.core.seq.call(null,c1);
var s2__31203 = cljs.core.seq.call(null,c2);
var s3__31204 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3822__auto____31205 = s1__31202;

if(cljs.core.truth_(and__3822__auto____31205))
{var and__3822__auto____31206 = s2__31203;

if(cljs.core.truth_(and__3822__auto____31206))
{return s3__31204;
} else
{return and__3822__auto____31206;
}
} else
{return and__3822__auto____31205;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__31202),cljs.core.first.call(null,s2__31203),cljs.core.first.call(null,s3__31204)),map.call(null,f,cljs.core.rest.call(null,s1__31202),cljs.core.rest.call(null,s2__31203),cljs.core.rest.call(null,s3__31204)));
} else
{return null;
}
})));
});
var map__31212 = (function() { 
var G__31214__delegate = function (f,c1,c2,c3,colls){
var step__31208 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__31207 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__31207)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__31207),step.call(null,map.call(null,cljs.core.rest,ss__31207)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__31119_SHARP_){
return cljs.core.apply.call(null,f,p1__31119_SHARP_);
}),step__31208.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__31214 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__31214__delegate.call(this, f, c1, c2, c3, colls);
};
G__31214.cljs$lang$maxFixedArity = 4;
G__31214.cljs$lang$applyTo = (function (arglist__31215){
var f = cljs.core.first(arglist__31215);
var c1 = cljs.core.first(cljs.core.next(arglist__31215));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31215)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__31215))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__31215))));
return G__31214__delegate.call(this, f, c1, c2, c3, colls);
});
return G__31214;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__31209.call(this,f,c1);
case  3 :
return map__31210.call(this,f,c1,c2);
case  4 :
return map__31211.call(this,f,c1,c2,c3);
default:
return map__31212.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__31212.cljs$lang$applyTo;
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
{var temp__3974__auto____31216 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____31216))
{var s__31217 = temp__3974__auto____31216;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__31217),take.call(null,(n - 1),cljs.core.rest.call(null,s__31217)));
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
var step__31220 = (function (n,coll){
while(true){
var s__31218 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3822__auto____31219 = (n > 0);

if(cljs.core.truth_(and__3822__auto____31219))
{return s__31218;
} else
{return and__3822__auto____31219;
}
})()))
{{
var G__31221 = (n - 1);
var G__31222 = cljs.core.rest.call(null,s__31218);
n = G__31221;
coll = G__31222;
continue;
}
} else
{return s__31218;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__31220.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__31223 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__31224 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__31223.call(this,n);
case  2 :
return drop_last__31224.call(this,n,s);
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
var s__31226 = cljs.core.seq.call(null,coll);
var lead__31227 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__31227))
{{
var G__31228 = cljs.core.next.call(null,s__31226);
var G__31229 = cljs.core.next.call(null,lead__31227);
s__31226 = G__31228;
lead__31227 = G__31229;
continue;
}
} else
{return s__31226;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__31232 = (function (pred,coll){
while(true){
var s__31230 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3822__auto____31231 = s__31230;

if(cljs.core.truth_(and__3822__auto____31231))
{return pred.call(null,cljs.core.first.call(null,s__31230));
} else
{return and__3822__auto____31231;
}
})()))
{{
var G__31233 = pred;
var G__31234 = cljs.core.rest.call(null,s__31230);
pred = G__31233;
coll = G__31234;
continue;
}
} else
{return s__31230;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__31232.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____31235 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____31235))
{var s__31236 = temp__3974__auto____31235;

return cljs.core.concat.call(null,s__31236,cycle.call(null,s__31236));
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
var repeat__31237 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__31238 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__31237.call(this,n);
case  2 :
return repeat__31238.call(this,n,x);
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
var repeatedly__31240 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__31241 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__31240.call(this,n);
case  2 :
return repeatedly__31241.call(this,n,f);
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
var interleave__31247 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__31243 = cljs.core.seq.call(null,c1);
var s2__31244 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3822__auto____31245 = s1__31243;

if(cljs.core.truth_(and__3822__auto____31245))
{return s2__31244;
} else
{return and__3822__auto____31245;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__31243),cljs.core.cons.call(null,cljs.core.first.call(null,s2__31244),interleave.call(null,cljs.core.rest.call(null,s1__31243),cljs.core.rest.call(null,s2__31244))));
} else
{return null;
}
})));
});
var interleave__31248 = (function() { 
var G__31250__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__31246 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__31246)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__31246),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__31246)));
} else
{return null;
}
})));
};
var G__31250 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__31250__delegate.call(this, c1, c2, colls);
};
G__31250.cljs$lang$maxFixedArity = 2;
G__31250.cljs$lang$applyTo = (function (arglist__31251){
var c1 = cljs.core.first(arglist__31251);
var c2 = cljs.core.first(cljs.core.next(arglist__31251));
var colls = cljs.core.rest(cljs.core.next(arglist__31251));
return G__31250__delegate.call(this, c1, c2, colls);
});
return G__31250;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__31247.call(this,c1,c2);
default:
return interleave__31248.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__31248.cljs$lang$applyTo;
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
var cat__31254 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____31252 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3971__auto____31252))
{var coll__31253 = temp__3971__auto____31252;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__31253),cat.call(null,cljs.core.rest.call(null,coll__31253),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__31254.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__31255 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__31256 = (function() { 
var G__31258__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__31258 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__31258__delegate.call(this, f, coll, colls);
};
G__31258.cljs$lang$maxFixedArity = 2;
G__31258.cljs$lang$applyTo = (function (arglist__31259){
var f = cljs.core.first(arglist__31259);
var coll = cljs.core.first(cljs.core.next(arglist__31259));
var colls = cljs.core.rest(cljs.core.next(arglist__31259));
return G__31258__delegate.call(this, f, coll, colls);
});
return G__31258;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__31255.call(this,f,coll);
default:
return mapcat__31256.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__31256.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____31260 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____31260))
{var s__31261 = temp__3974__auto____31260;

var f__31262 = cljs.core.first.call(null,s__31261);
var r__31263 = cljs.core.rest.call(null,s__31261);

if(cljs.core.truth_(pred.call(null,f__31262)))
{return cljs.core.cons.call(null,f__31262,filter.call(null,pred,r__31263));
} else
{return filter.call(null,pred,r__31263);
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
var walk__31265 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__31265.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__31264_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__31264_SHARP_));
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
var partition__31272 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__31273 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____31266 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____31266))
{var s__31267 = temp__3974__auto____31266;

var p__31268 = cljs.core.take.call(null,n,s__31267);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__31268))))
{return cljs.core.cons.call(null,p__31268,partition.call(null,n,step,cljs.core.drop.call(null,step,s__31267)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__31274 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____31269 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____31269))
{var s__31270 = temp__3974__auto____31269;

var p__31271 = cljs.core.take.call(null,n,s__31270);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__31271))))
{return cljs.core.cons.call(null,p__31271,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__31270)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__31271,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__31272.call(this,n,step);
case  3 :
return partition__31273.call(this,n,step,pad);
case  4 :
return partition__31274.call(this,n,step,pad,coll);
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
var get_in__31280 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__31281 = (function (m,ks,not_found){
var sentinel__31276 = cljs.core.lookup_sentinel;
var m__31277 = m;
var ks__31278 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__31278))
{var m__31279 = cljs.core.get.call(null,m__31277,cljs.core.first.call(null,ks__31278),sentinel__31276);

if(cljs.core.truth_((sentinel__31276 === m__31279)))
{return not_found;
} else
{{
var G__31283 = sentinel__31276;
var G__31284 = m__31279;
var G__31285 = cljs.core.next.call(null,ks__31278);
sentinel__31276 = G__31283;
m__31277 = G__31284;
ks__31278 = G__31285;
continue;
}
}
} else
{return m__31277;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__31280.call(this,m,ks);
case  3 :
return get_in__31281.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__31286,v){
var vec__31287__31288 = p__31286;
var k__31289 = cljs.core.nth.call(null,vec__31287__31288,0,null);
var ks__31290 = cljs.core.nthnext.call(null,vec__31287__31288,1);

if(cljs.core.truth_(ks__31290))
{return cljs.core.assoc.call(null,m,k__31289,assoc_in.call(null,cljs.core.get.call(null,m,k__31289),ks__31290,v));
} else
{return cljs.core.assoc.call(null,m,k__31289,v);
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
var update_in__delegate = function (m,p__31291,f,args){
var vec__31292__31293 = p__31291;
var k__31294 = cljs.core.nth.call(null,vec__31292__31293,0,null);
var ks__31295 = cljs.core.nthnext.call(null,vec__31292__31293,1);

if(cljs.core.truth_(ks__31295))
{return cljs.core.assoc.call(null,m,k__31294,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__31294),ks__31295,f,args));
} else
{return cljs.core.assoc.call(null,m,k__31294,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__31294),args));
}
};
var update_in = function (m,p__31291,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__31291, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__31296){
var m = cljs.core.first(arglist__31296);
var p__31291 = cljs.core.first(cljs.core.next(arglist__31296));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31296)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31296)));
return update_in__delegate.call(this, m, p__31291, f, args);
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
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__31297 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__31330 = null;
var G__31330__31331 = (function (coll,k){
var this__31298 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__31330__31332 = (function (coll,k,not_found){
var this__31299 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__31330 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__31330__31331.call(this,coll,k);
case  3 :
return G__31330__31332.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31330;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__31300 = this;
var new_array__31301 = cljs.core.aclone.call(null,this__31300.array);

(new_array__31301[k] = v);
return (new cljs.core.Vector(this__31300.meta,new_array__31301));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__31334 = null;
var G__31334__31335 = (function (tsym31302,k){
var this__31304 = this;
var tsym31302__31305 = this;

var coll__31306 = tsym31302__31305;

return cljs.core._lookup.call(null,coll__31306,k);
});
var G__31334__31336 = (function (tsym31303,k,not_found){
var this__31307 = this;
var tsym31303__31308 = this;

var coll__31309 = tsym31303__31308;

return cljs.core._lookup.call(null,coll__31309,k,not_found);
});
G__31334 = function(tsym31303,k,not_found){
switch(arguments.length){
case  2 :
return G__31334__31335.call(this,tsym31303,k);
case  3 :
return G__31334__31336.call(this,tsym31303,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31334;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__31310 = this;
var new_array__31311 = cljs.core.aclone.call(null,this__31310.array);

new_array__31311.push(o);
return (new cljs.core.Vector(this__31310.meta,new_array__31311));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__31338 = null;
var G__31338__31339 = (function (v,f){
var this__31312 = this;
return cljs.core.ci_reduce.call(null,this__31312.array,f);
});
var G__31338__31340 = (function (v,f,start){
var this__31313 = this;
return cljs.core.ci_reduce.call(null,this__31313.array,f,start);
});
G__31338 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__31338__31339.call(this,v,f);
case  3 :
return G__31338__31340.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31338;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__31314 = this;
if(cljs.core.truth_((this__31314.array.length > 0)))
{var vector_seq__31315 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__31314.array.length)))
{return cljs.core.cons.call(null,(this__31314.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__31315.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__31316 = this;
return this__31316.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__31317 = this;
var count__31318 = this__31317.array.length;

if(cljs.core.truth_((count__31318 > 0)))
{return (this__31317.array[(count__31318 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__31319 = this;
if(cljs.core.truth_((this__31319.array.length > 0)))
{var new_array__31320 = cljs.core.aclone.call(null,this__31319.array);

new_array__31320.pop();
return (new cljs.core.Vector(this__31319.meta,new_array__31320));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__31321 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__31322 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__31323 = this;
return (new cljs.core.Vector(meta,this__31323.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__31324 = this;
return this__31324.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__31342 = null;
var G__31342__31343 = (function (coll,n){
var this__31325 = this;
if(cljs.core.truth_((function (){var and__3822__auto____31326 = (0 <= n);

if(cljs.core.truth_(and__3822__auto____31326))
{return (n < this__31325.array.length);
} else
{return and__3822__auto____31326;
}
})()))
{return (this__31325.array[n]);
} else
{return null;
}
});
var G__31342__31344 = (function (coll,n,not_found){
var this__31327 = this;
if(cljs.core.truth_((function (){var and__3822__auto____31328 = (0 <= n);

if(cljs.core.truth_(and__3822__auto____31328))
{return (n < this__31327.array.length);
} else
{return and__3822__auto____31328;
}
})()))
{return (this__31327.array[n]);
} else
{return not_found;
}
});
G__31342 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__31342__31343.call(this,coll,n);
case  3 :
return G__31342__31344.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31342;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__31329 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__31329.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__31346 = pv.cnt;

if(cljs.core.truth_((cnt__31346 < 32)))
{return 0;
} else
{return (((cnt__31346 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__31347 = level;
var ret__31348 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__31347)))
{return ret__31348;
} else
{var embed__31349 = ret__31348;
var r__31350 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___31351 = (r__31350[0] = embed__31349);

{
var G__31352 = (ll__31347 - 5);
var G__31353 = r__31350;
ll__31347 = G__31352;
ret__31348 = G__31353;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__31354 = cljs.core.aclone.call(null,parent);
var subidx__31355 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__31354[subidx__31355] = tailnode);
return ret__31354;
} else
{var temp__3971__auto____31356 = (parent[subidx__31355]);

if(cljs.core.truth_(temp__3971__auto____31356))
{var child__31357 = temp__3971__auto____31356;

var node_to_insert__31358 = push_tail.call(null,pv,(level - 5),child__31357,tailnode);
var ___31359 = (ret__31354[subidx__31355] = node_to_insert__31358);

return ret__31354;
} else
{var node_to_insert__31360 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___31361 = (ret__31354[subidx__31355] = node_to_insert__31360);

return ret__31354;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3822__auto____31362 = (0 <= i);

if(cljs.core.truth_(and__3822__auto____31362))
{return (i < pv.cnt);
} else
{return and__3822__auto____31362;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__31363 = pv.root;
var level__31364 = pv.shift;

while(true){
if(cljs.core.truth_((level__31364 > 0)))
{{
var G__31365 = (node__31363[((i >> level__31364) & 31)]);
var G__31366 = (level__31364 - 5);
node__31363 = G__31365;
level__31364 = G__31366;
continue;
}
} else
{return node__31363;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__31367 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__31367[(i & 31)] = val);
return ret__31367;
} else
{var subidx__31368 = ((i >> level) & 31);
var ___31369 = (ret__31367[subidx__31368] = do_assoc.call(null,pv,(level - 5),(node[subidx__31368]),i,val));

return ret__31367;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__31370 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__31371 = pop_tail.call(null,pv,(level - 5),(node[subidx__31370]));

if(cljs.core.truth_((function (){var and__3822__auto____31372 = (new_child__31371 === null);

if(cljs.core.truth_(and__3822__auto____31372))
{return (subidx__31370 === 0);
} else
{return and__3822__auto____31372;
}
})()))
{return null;
} else
{var ret__31373 = cljs.core.aclone.call(null,node);
var ___31374 = (ret__31373[subidx__31370] = new_child__31371);

return ret__31373;
}
} else
{if(cljs.core.truth_((subidx__31370 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__31375 = cljs.core.aclone.call(null,node);
var ___31376 = (ret__31375[subidx__31370] = null);

return ret__31375;
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
cljs.core.PersistentVector.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__31377 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__31417 = null;
var G__31417__31418 = (function (coll,k){
var this__31378 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__31417__31419 = (function (coll,k,not_found){
var this__31379 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__31417 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__31417__31418.call(this,coll,k);
case  3 :
return G__31417__31419.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31417;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__31380 = this;
if(cljs.core.truth_((function (){var and__3822__auto____31381 = (0 <= k);

if(cljs.core.truth_(and__3822__auto____31381))
{return (k < this__31380.cnt);
} else
{return and__3822__auto____31381;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__31382 = cljs.core.aclone.call(null,this__31380.tail);

(new_tail__31382[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__31380.meta,this__31380.cnt,this__31380.shift,this__31380.root,new_tail__31382));
} else
{return (new cljs.core.PersistentVector(this__31380.meta,this__31380.cnt,this__31380.shift,cljs.core.do_assoc.call(null,coll,this__31380.shift,this__31380.root,k,v),this__31380.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__31380.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__31380.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__31421 = null;
var G__31421__31422 = (function (tsym31383,k){
var this__31385 = this;
var tsym31383__31386 = this;

var coll__31387 = tsym31383__31386;

return cljs.core._lookup.call(null,coll__31387,k);
});
var G__31421__31423 = (function (tsym31384,k,not_found){
var this__31388 = this;
var tsym31384__31389 = this;

var coll__31390 = tsym31384__31389;

return cljs.core._lookup.call(null,coll__31390,k,not_found);
});
G__31421 = function(tsym31384,k,not_found){
switch(arguments.length){
case  2 :
return G__31421__31422.call(this,tsym31384,k);
case  3 :
return G__31421__31423.call(this,tsym31384,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31421;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__31391 = this;
if(cljs.core.truth_(((this__31391.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__31392 = cljs.core.aclone.call(null,this__31391.tail);

new_tail__31392.push(o);
return (new cljs.core.PersistentVector(this__31391.meta,(this__31391.cnt + 1),this__31391.shift,this__31391.root,new_tail__31392));
} else
{var root_overflow_QMARK___31393 = ((this__31391.cnt >> 5) > (1 << this__31391.shift));
var new_shift__31394 = (cljs.core.truth_(root_overflow_QMARK___31393)?(this__31391.shift + 5):this__31391.shift);
var new_root__31396 = (cljs.core.truth_(root_overflow_QMARK___31393)?(function (){var n_r__31395 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__31395[0] = this__31391.root);
(n_r__31395[1] = cljs.core.new_path.call(null,this__31391.shift,this__31391.tail));
return n_r__31395;
})():cljs.core.push_tail.call(null,coll,this__31391.shift,this__31391.root,this__31391.tail));

return (new cljs.core.PersistentVector(this__31391.meta,(this__31391.cnt + 1),new_shift__31394,new_root__31396,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__31425 = null;
var G__31425__31426 = (function (v,f){
var this__31397 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__31425__31427 = (function (v,f,start){
var this__31398 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__31425 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__31425__31426.call(this,v,f);
case  3 :
return G__31425__31427.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31425;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__31399 = this;
if(cljs.core.truth_((this__31399.cnt > 0)))
{var vector_seq__31400 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__31399.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__31400.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__31401 = this;
return this__31401.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__31402 = this;
if(cljs.core.truth_((this__31402.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__31402.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__31403 = this;
if(cljs.core.truth_((this__31403.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__31403.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__31403.meta);
} else
{if(cljs.core.truth_((1 < (this__31403.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__31403.meta,(this__31403.cnt - 1),this__31403.shift,this__31403.root,cljs.core.aclone.call(null,this__31403.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__31404 = cljs.core.array_for.call(null,coll,(this__31403.cnt - 2));
var nr__31405 = cljs.core.pop_tail.call(null,this__31403.shift,this__31403.root);
var new_root__31406 = (cljs.core.truth_((nr__31405 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__31405);
var cnt_1__31407 = (this__31403.cnt - 1);

if(cljs.core.truth_((function (){var and__3822__auto____31408 = (5 < this__31403.shift);

if(cljs.core.truth_(and__3822__auto____31408))
{return ((new_root__31406[1]) === null);
} else
{return and__3822__auto____31408;
}
})()))
{return (new cljs.core.PersistentVector(this__31403.meta,cnt_1__31407,(this__31403.shift - 5),(new_root__31406[0]),new_tail__31404));
} else
{return (new cljs.core.PersistentVector(this__31403.meta,cnt_1__31407,this__31403.shift,new_root__31406,new_tail__31404));
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
var this__31409 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__31410 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__31411 = this;
return (new cljs.core.PersistentVector(meta,this__31411.cnt,this__31411.shift,this__31411.root,this__31411.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__31412 = this;
return this__31412.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__31429 = null;
var G__31429__31430 = (function (coll,n){
var this__31413 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__31429__31431 = (function (coll,n,not_found){
var this__31414 = this;
if(cljs.core.truth_((function (){var and__3822__auto____31415 = (0 <= n);

if(cljs.core.truth_(and__3822__auto____31415))
{return (n < this__31414.cnt);
} else
{return and__3822__auto____31415;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__31429 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__31429__31430.call(this,coll,n);
case  3 :
return G__31429__31431.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31429;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__31416 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__31416.meta);
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
vector.cljs$lang$applyTo = (function (arglist__31433){
var args = cljs.core.seq( arglist__31433 );;
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
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__31434 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__31462 = null;
var G__31462__31463 = (function (coll,k){
var this__31435 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__31462__31464 = (function (coll,k,not_found){
var this__31436 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__31462 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__31462__31463.call(this,coll,k);
case  3 :
return G__31462__31464.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31462;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__31437 = this;
var v_pos__31438 = (this__31437.start + key);

return (new cljs.core.Subvec(this__31437.meta,cljs.core._assoc.call(null,this__31437.v,v_pos__31438,val),this__31437.start,((this__31437.end > (v_pos__31438 + 1)) ? this__31437.end : (v_pos__31438 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__31466 = null;
var G__31466__31467 = (function (tsym31439,k){
var this__31441 = this;
var tsym31439__31442 = this;

var coll__31443 = tsym31439__31442;

return cljs.core._lookup.call(null,coll__31443,k);
});
var G__31466__31468 = (function (tsym31440,k,not_found){
var this__31444 = this;
var tsym31440__31445 = this;

var coll__31446 = tsym31440__31445;

return cljs.core._lookup.call(null,coll__31446,k,not_found);
});
G__31466 = function(tsym31440,k,not_found){
switch(arguments.length){
case  2 :
return G__31466__31467.call(this,tsym31440,k);
case  3 :
return G__31466__31468.call(this,tsym31440,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31466;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__31447 = this;
return (new cljs.core.Subvec(this__31447.meta,cljs.core._assoc_n.call(null,this__31447.v,this__31447.end,o),this__31447.start,(this__31447.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__31470 = null;
var G__31470__31471 = (function (coll,f){
var this__31448 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__31470__31472 = (function (coll,f,start){
var this__31449 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__31470 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__31470__31471.call(this,coll,f);
case  3 :
return G__31470__31472.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31470;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__31450 = this;
var subvec_seq__31451 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__31450.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__31450.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__31451.call(null,this__31450.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__31452 = this;
return (this__31452.end - this__31452.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__31453 = this;
return cljs.core._nth.call(null,this__31453.v,(this__31453.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__31454 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__31454.start,this__31454.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__31454.meta,this__31454.v,this__31454.start,(this__31454.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__31455 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__31456 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__31457 = this;
return (new cljs.core.Subvec(meta,this__31457.v,this__31457.start,this__31457.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__31458 = this;
return this__31458.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__31474 = null;
var G__31474__31475 = (function (coll,n){
var this__31459 = this;
return cljs.core._nth.call(null,this__31459.v,(this__31459.start + n));
});
var G__31474__31476 = (function (coll,n,not_found){
var this__31460 = this;
return cljs.core._nth.call(null,this__31460.v,(this__31460.start + n),not_found);
});
G__31474 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__31474__31475.call(this,coll,n);
case  3 :
return G__31474__31476.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31474;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__31461 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__31461.meta);
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
var subvec__31478 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__31479 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__31478.call(this,v,start);
case  3 :
return subvec__31479.call(this,v,start,end);
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
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__31481 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__31482 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__31483 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__31484 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__31484.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__31485 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__31486 = this;
return cljs.core._first.call(null,this__31486.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__31487 = this;
var temp__3971__auto____31488 = cljs.core.next.call(null,this__31487.front);

if(cljs.core.truth_(temp__3971__auto____31488))
{var f1__31489 = temp__3971__auto____31488;

return (new cljs.core.PersistentQueueSeq(this__31487.meta,f1__31489,this__31487.rear));
} else
{if(cljs.core.truth_((this__31487.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__31487.meta,this__31487.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__31490 = this;
return this__31490.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__31491 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__31491.front,this__31491.rear));
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
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__31492 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__31493 = this;
if(cljs.core.truth_(this__31493.front))
{return (new cljs.core.PersistentQueue(this__31493.meta,(this__31493.count + 1),this__31493.front,cljs.core.conj.call(null,(function (){var or__3824__auto____31494 = this__31493.rear;

if(cljs.core.truth_(or__3824__auto____31494))
{return or__3824__auto____31494;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__31493.meta,(this__31493.count + 1),cljs.core.conj.call(null,this__31493.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__31495 = this;
var rear__31496 = cljs.core.seq.call(null,this__31495.rear);

if(cljs.core.truth_((function (){var or__3824__auto____31497 = this__31495.front;

if(cljs.core.truth_(or__3824__auto____31497))
{return or__3824__auto____31497;
} else
{return rear__31496;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__31495.front,cljs.core.seq.call(null,rear__31496)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__31498 = this;
return this__31498.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__31499 = this;
return cljs.core._first.call(null,this__31499.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__31500 = this;
if(cljs.core.truth_(this__31500.front))
{var temp__3971__auto____31501 = cljs.core.next.call(null,this__31500.front);

if(cljs.core.truth_(temp__3971__auto____31501))
{var f1__31502 = temp__3971__auto____31501;

return (new cljs.core.PersistentQueue(this__31500.meta,(this__31500.count - 1),f1__31502,this__31500.rear));
} else
{return (new cljs.core.PersistentQueue(this__31500.meta,(this__31500.count - 1),cljs.core.seq.call(null,this__31500.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__31503 = this;
return cljs.core.first.call(null,this__31503.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__31504 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__31505 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__31506 = this;
return (new cljs.core.PersistentQueue(meta,this__31506.count,this__31506.front,this__31506.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__31507 = this;
return this__31507.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__31508 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__31509 = this;
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
var len__31510 = array.length;

var i__31511 = 0;

while(true){
if(cljs.core.truth_((i__31511 < len__31510)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__31511]))))
{return i__31511;
} else
{{
var G__31512 = (i__31511 + incr);
i__31511 = G__31512;
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
var obj_map_contains_key_QMARK___31514 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___31515 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3822__auto____31513 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3822__auto____31513))
{return strobj.hasOwnProperty(k);
} else
{return and__3822__auto____31513;
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
return obj_map_contains_key_QMARK___31514.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___31515.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__31518 = cljs.core.hash.call(null,a);
var b__31519 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__31518 < b__31519)))
{return -1;
} else
{if(cljs.core.truth_((a__31518 > b__31519)))
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
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__31520 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__31547 = null;
var G__31547__31548 = (function (coll,k){
var this__31521 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__31547__31549 = (function (coll,k,not_found){
var this__31522 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__31522.strobj,(this__31522.strobj[k]),not_found);
});
G__31547 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__31547__31548.call(this,coll,k);
case  3 :
return G__31547__31549.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31547;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__31523 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__31524 = goog.object.clone.call(null,this__31523.strobj);
var overwrite_QMARK___31525 = new_strobj__31524.hasOwnProperty(k);

(new_strobj__31524[k] = v);
if(cljs.core.truth_(overwrite_QMARK___31525))
{return (new cljs.core.ObjMap(this__31523.meta,this__31523.keys,new_strobj__31524));
} else
{var new_keys__31526 = cljs.core.aclone.call(null,this__31523.keys);

new_keys__31526.push(k);
return (new cljs.core.ObjMap(this__31523.meta,new_keys__31526,new_strobj__31524));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__31523.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__31527 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__31527.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__31551 = null;
var G__31551__31552 = (function (tsym31528,k){
var this__31530 = this;
var tsym31528__31531 = this;

var coll__31532 = tsym31528__31531;

return cljs.core._lookup.call(null,coll__31532,k);
});
var G__31551__31553 = (function (tsym31529,k,not_found){
var this__31533 = this;
var tsym31529__31534 = this;

var coll__31535 = tsym31529__31534;

return cljs.core._lookup.call(null,coll__31535,k,not_found);
});
G__31551 = function(tsym31529,k,not_found){
switch(arguments.length){
case  2 :
return G__31551__31552.call(this,tsym31529,k);
case  3 :
return G__31551__31553.call(this,tsym31529,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31551;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__31536 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__31537 = this;
if(cljs.core.truth_((this__31537.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__31517_SHARP_){
return cljs.core.vector.call(null,p1__31517_SHARP_,(this__31537.strobj[p1__31517_SHARP_]));
}),this__31537.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__31538 = this;
return this__31538.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__31539 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__31540 = this;
return (new cljs.core.ObjMap(meta,this__31540.keys,this__31540.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__31541 = this;
return this__31541.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__31542 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__31542.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__31543 = this;
if(cljs.core.truth_((function (){var and__3822__auto____31544 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3822__auto____31544))
{return this__31543.strobj.hasOwnProperty(k);
} else
{return and__3822__auto____31544;
}
})()))
{var new_keys__31545 = cljs.core.aclone.call(null,this__31543.keys);
var new_strobj__31546 = goog.object.clone.call(null,this__31543.strobj);

new_keys__31545.splice(cljs.core.scan_array.call(null,1,k,new_keys__31545),1);
cljs.core.js_delete.call(null,new_strobj__31546,k);
return (new cljs.core.ObjMap(this__31543.meta,new_keys__31545,new_strobj__31546));
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
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__31556 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__31594 = null;
var G__31594__31595 = (function (coll,k){
var this__31557 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__31594__31596 = (function (coll,k,not_found){
var this__31558 = this;
var bucket__31559 = (this__31558.hashobj[cljs.core.hash.call(null,k)]);
var i__31560 = (cljs.core.truth_(bucket__31559)?cljs.core.scan_array.call(null,2,k,bucket__31559):null);

if(cljs.core.truth_(i__31560))
{return (bucket__31559[(i__31560 + 1)]);
} else
{return not_found;
}
});
G__31594 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__31594__31595.call(this,coll,k);
case  3 :
return G__31594__31596.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31594;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__31561 = this;
var h__31562 = cljs.core.hash.call(null,k);
var bucket__31563 = (this__31561.hashobj[h__31562]);

if(cljs.core.truth_(bucket__31563))
{var new_bucket__31564 = cljs.core.aclone.call(null,bucket__31563);
var new_hashobj__31565 = goog.object.clone.call(null,this__31561.hashobj);

(new_hashobj__31565[h__31562] = new_bucket__31564);
var temp__3971__auto____31566 = cljs.core.scan_array.call(null,2,k,new_bucket__31564);

if(cljs.core.truth_(temp__3971__auto____31566))
{var i__31567 = temp__3971__auto____31566;

(new_bucket__31564[(i__31567 + 1)] = v);
return (new cljs.core.HashMap(this__31561.meta,this__31561.count,new_hashobj__31565));
} else
{new_bucket__31564.push(k,v);
return (new cljs.core.HashMap(this__31561.meta,(this__31561.count + 1),new_hashobj__31565));
}
} else
{var new_hashobj__31568 = goog.object.clone.call(null,this__31561.hashobj);

(new_hashobj__31568[h__31562] = [k,v]);
return (new cljs.core.HashMap(this__31561.meta,(this__31561.count + 1),new_hashobj__31568));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__31569 = this;
var bucket__31570 = (this__31569.hashobj[cljs.core.hash.call(null,k)]);
var i__31571 = (cljs.core.truth_(bucket__31570)?cljs.core.scan_array.call(null,2,k,bucket__31570):null);

if(cljs.core.truth_(i__31571))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__31598 = null;
var G__31598__31599 = (function (tsym31572,k){
var this__31574 = this;
var tsym31572__31575 = this;

var coll__31576 = tsym31572__31575;

return cljs.core._lookup.call(null,coll__31576,k);
});
var G__31598__31600 = (function (tsym31573,k,not_found){
var this__31577 = this;
var tsym31573__31578 = this;

var coll__31579 = tsym31573__31578;

return cljs.core._lookup.call(null,coll__31579,k,not_found);
});
G__31598 = function(tsym31573,k,not_found){
switch(arguments.length){
case  2 :
return G__31598__31599.call(this,tsym31573,k);
case  3 :
return G__31598__31600.call(this,tsym31573,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31598;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__31580 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__31581 = this;
if(cljs.core.truth_((this__31581.count > 0)))
{var hashes__31582 = cljs.core.js_keys.call(null,this__31581.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__31555_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__31581.hashobj[p1__31555_SHARP_])));
}),hashes__31582);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__31583 = this;
return this__31583.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__31584 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__31585 = this;
return (new cljs.core.HashMap(meta,this__31585.count,this__31585.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__31586 = this;
return this__31586.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__31587 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__31587.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__31588 = this;
var h__31589 = cljs.core.hash.call(null,k);
var bucket__31590 = (this__31588.hashobj[h__31589]);
var i__31591 = (cljs.core.truth_(bucket__31590)?cljs.core.scan_array.call(null,2,k,bucket__31590):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__31591)))
{return coll;
} else
{var new_hashobj__31592 = goog.object.clone.call(null,this__31588.hashobj);

if(cljs.core.truth_((3 > bucket__31590.length)))
{cljs.core.js_delete.call(null,new_hashobj__31592,h__31589);
} else
{var new_bucket__31593 = cljs.core.aclone.call(null,bucket__31590);

new_bucket__31593.splice(i__31591,2);
(new_hashobj__31592[h__31589] = new_bucket__31593);
}
return (new cljs.core.HashMap(this__31588.meta,(this__31588.count - 1),new_hashobj__31592));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__31602 = ks.length;

var i__31603 = 0;
var out__31604 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__31603 < len__31602)))
{{
var G__31605 = (i__31603 + 1);
var G__31606 = cljs.core.assoc.call(null,out__31604,(ks[i__31603]),(vs[i__31603]));
i__31603 = G__31605;
out__31604 = G__31606;
continue;
}
} else
{return out__31604;
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
var in$__31607 = cljs.core.seq.call(null,keyvals);
var out__31608 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__31607))
{{
var G__31609 = cljs.core.nnext.call(null,in$__31607);
var G__31610 = cljs.core.assoc.call(null,out__31608,cljs.core.first.call(null,in$__31607),cljs.core.second.call(null,in$__31607));
in$__31607 = G__31609;
out__31608 = G__31610;
continue;
}
} else
{return out__31608;
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
hash_map.cljs$lang$applyTo = (function (arglist__31611){
var keyvals = cljs.core.seq( arglist__31611 );;
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
{return cljs.core.reduce.call(null,(function (p1__31612_SHARP_,p2__31613_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____31614 = p1__31612_SHARP_;

if(cljs.core.truth_(or__3824__auto____31614))
{return or__3824__auto____31614;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__31613_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__31615){
var maps = cljs.core.seq( arglist__31615 );;
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
{var merge_entry__31618 = (function (m,e){
var k__31616 = cljs.core.first.call(null,e);
var v__31617 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__31616)))
{return cljs.core.assoc.call(null,m,k__31616,f.call(null,cljs.core.get.call(null,m,k__31616),v__31617));
} else
{return cljs.core.assoc.call(null,m,k__31616,v__31617);
}
});
var merge2__31620 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__31618,(function (){var or__3824__auto____31619 = m1;

if(cljs.core.truth_(or__3824__auto____31619))
{return or__3824__auto____31619;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__31620,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__31621){
var f = cljs.core.first(arglist__31621);
var maps = cljs.core.rest(arglist__31621);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__31623 = cljs.core.ObjMap.fromObject([],{});
var keys__31624 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__31624))
{var key__31625 = cljs.core.first.call(null,keys__31624);
var entry__31626 = cljs.core.get.call(null,map,key__31625,"\uFDD0'user/not-found");

{
var G__31627 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__31626,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__31623,key__31625,entry__31626):ret__31623);
var G__31628 = cljs.core.next.call(null,keys__31624);
ret__31623 = G__31627;
keys__31624 = G__31628;
continue;
}
} else
{return ret__31623;
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
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__31629 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__31650 = null;
var G__31650__31651 = (function (coll,v){
var this__31630 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__31650__31652 = (function (coll,v,not_found){
var this__31631 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__31631.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__31650 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__31650__31651.call(this,coll,v);
case  3 :
return G__31650__31652.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31650;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__31654 = null;
var G__31654__31655 = (function (tsym31632,k){
var this__31634 = this;
var tsym31632__31635 = this;

var coll__31636 = tsym31632__31635;

return cljs.core._lookup.call(null,coll__31636,k);
});
var G__31654__31656 = (function (tsym31633,k,not_found){
var this__31637 = this;
var tsym31633__31638 = this;

var coll__31639 = tsym31633__31638;

return cljs.core._lookup.call(null,coll__31639,k,not_found);
});
G__31654 = function(tsym31633,k,not_found){
switch(arguments.length){
case  2 :
return G__31654__31655.call(this,tsym31633,k);
case  3 :
return G__31654__31656.call(this,tsym31633,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31654;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__31640 = this;
return (new cljs.core.Set(this__31640.meta,cljs.core.assoc.call(null,this__31640.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__31641 = this;
return cljs.core.keys.call(null,this__31641.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__31642 = this;
return (new cljs.core.Set(this__31642.meta,cljs.core.dissoc.call(null,this__31642.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__31643 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__31644 = this;
var and__3822__auto____31645 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3822__auto____31645))
{var and__3822__auto____31646 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3822__auto____31646))
{return cljs.core.every_QMARK_.call(null,(function (p1__31622_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__31622_SHARP_);
}),other);
} else
{return and__3822__auto____31646;
}
} else
{return and__3822__auto____31645;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__31647 = this;
return (new cljs.core.Set(meta,this__31647.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__31648 = this;
return this__31648.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__31649 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__31649.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__31659 = cljs.core.seq.call(null,coll);
var out__31660 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__31659))))
{{
var G__31661 = cljs.core.rest.call(null,in$__31659);
var G__31662 = cljs.core.conj.call(null,out__31660,cljs.core.first.call(null,in$__31659));
in$__31659 = G__31661;
out__31660 = G__31662;
continue;
}
} else
{return out__31660;
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
{var n__31663 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____31664 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3971__auto____31664))
{var e__31665 = temp__3971__auto____31664;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__31665));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__31663,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__31658_SHARP_){
var temp__3971__auto____31666 = cljs.core.find.call(null,smap,p1__31658_SHARP_);

if(cljs.core.truth_(temp__3971__auto____31666))
{var e__31667 = temp__3971__auto____31666;

return cljs.core.second.call(null,e__31667);
} else
{return p1__31658_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__31675 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__31668,seen){
while(true){
var vec__31669__31670 = p__31668;
var f__31671 = cljs.core.nth.call(null,vec__31669__31670,0,null);
var xs__31672 = vec__31669__31670;

var temp__3974__auto____31673 = cljs.core.seq.call(null,xs__31672);

if(cljs.core.truth_(temp__3974__auto____31673))
{var s__31674 = temp__3974__auto____31673;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__31671)))
{{
var G__31676 = cljs.core.rest.call(null,s__31674);
var G__31677 = seen;
p__31668 = G__31676;
seen = G__31677;
continue;
}
} else
{return cljs.core.cons.call(null,f__31671,step.call(null,cljs.core.rest.call(null,s__31674),cljs.core.conj.call(null,seen,f__31671)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__31675.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__31678 = cljs.core.PersistentVector.fromArray([]);
var s__31679 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__31679)))
{{
var G__31680 = cljs.core.conj.call(null,ret__31678,cljs.core.first.call(null,s__31679));
var G__31681 = cljs.core.next.call(null,s__31679);
ret__31678 = G__31680;
s__31679 = G__31681;
continue;
}
} else
{return cljs.core.seq.call(null,ret__31678);
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
{if(cljs.core.truth_((function (){var or__3824__auto____31682 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3824__auto____31682))
{return or__3824__auto____31682;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__31683 = x.lastIndexOf("/");

if(cljs.core.truth_((i__31683 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__31683 + 1));
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
if(cljs.core.truth_((function (){var or__3824__auto____31684 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3824__auto____31684))
{return or__3824__auto____31684;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__31685 = x.lastIndexOf("/");

if(cljs.core.truth_((i__31685 > -1)))
{return cljs.core.subs.call(null,x,2,i__31685);
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
var map__31688 = cljs.core.ObjMap.fromObject([],{});
var ks__31689 = cljs.core.seq.call(null,keys);
var vs__31690 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3822__auto____31691 = ks__31689;

if(cljs.core.truth_(and__3822__auto____31691))
{return vs__31690;
} else
{return and__3822__auto____31691;
}
})()))
{{
var G__31692 = cljs.core.assoc.call(null,map__31688,cljs.core.first.call(null,ks__31689),cljs.core.first.call(null,vs__31690));
var G__31693 = cljs.core.next.call(null,ks__31689);
var G__31694 = cljs.core.next.call(null,vs__31690);
map__31688 = G__31692;
ks__31689 = G__31693;
vs__31690 = G__31694;
continue;
}
} else
{return map__31688;
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
var max_key__31697 = (function (k,x){
return x;
});
var max_key__31698 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__31699 = (function() { 
var G__31701__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__31686_SHARP_,p2__31687_SHARP_){
return max_key.call(null,k,p1__31686_SHARP_,p2__31687_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__31701 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31701__delegate.call(this, k, x, y, more);
};
G__31701.cljs$lang$maxFixedArity = 3;
G__31701.cljs$lang$applyTo = (function (arglist__31702){
var k = cljs.core.first(arglist__31702);
var x = cljs.core.first(cljs.core.next(arglist__31702));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31702)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31702)));
return G__31701__delegate.call(this, k, x, y, more);
});
return G__31701;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__31697.call(this,k,x);
case  3 :
return max_key__31698.call(this,k,x,y);
default:
return max_key__31699.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__31699.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__31703 = (function (k,x){
return x;
});
var min_key__31704 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__31705 = (function() { 
var G__31707__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__31695_SHARP_,p2__31696_SHARP_){
return min_key.call(null,k,p1__31695_SHARP_,p2__31696_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__31707 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31707__delegate.call(this, k, x, y, more);
};
G__31707.cljs$lang$maxFixedArity = 3;
G__31707.cljs$lang$applyTo = (function (arglist__31708){
var k = cljs.core.first(arglist__31708);
var x = cljs.core.first(cljs.core.next(arglist__31708));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31708)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31708)));
return G__31707__delegate.call(this, k, x, y, more);
});
return G__31707;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__31703.call(this,k,x);
case  3 :
return min_key__31704.call(this,k,x,y);
default:
return min_key__31705.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__31705.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__31711 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__31712 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____31709 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____31709))
{var s__31710 = temp__3974__auto____31709;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__31710),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__31710)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__31711.call(this,n,step);
case  3 :
return partition_all__31712.call(this,n,step,coll);
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
var temp__3974__auto____31714 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____31714))
{var s__31715 = temp__3974__auto____31714;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__31715))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__31715),take_while.call(null,pred,cljs.core.rest.call(null,s__31715)));
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
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__31716 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__31717 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__31733 = null;
var G__31733__31734 = (function (rng,f){
var this__31718 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__31733__31735 = (function (rng,f,s){
var this__31719 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__31733 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__31733__31734.call(this,rng,f);
case  3 :
return G__31733__31735.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31733;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__31720 = this;
var comp__31721 = (cljs.core.truth_((this__31720.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__31721.call(null,this__31720.start,this__31720.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__31722 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__31722.end - this__31722.start) / this__31722.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__31723 = this;
return this__31723.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__31724 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__31724.meta,(this__31724.start + this__31724.step),this__31724.end,this__31724.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__31725 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__31726 = this;
return (new cljs.core.Range(meta,this__31726.start,this__31726.end,this__31726.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__31727 = this;
return this__31727.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__31737 = null;
var G__31737__31738 = (function (rng,n){
var this__31728 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__31728.start + (n * this__31728.step));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____31729 = (this__31728.start > this__31728.end);

if(cljs.core.truth_(and__3822__auto____31729))
{return cljs.core._EQ_.call(null,this__31728.step,0);
} else
{return and__3822__auto____31729;
}
})()))
{return this__31728.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__31737__31739 = (function (rng,n,not_found){
var this__31730 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__31730.start + (n * this__31730.step));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____31731 = (this__31730.start > this__31730.end);

if(cljs.core.truth_(and__3822__auto____31731))
{return cljs.core._EQ_.call(null,this__31730.step,0);
} else
{return and__3822__auto____31731;
}
})()))
{return this__31730.start;
} else
{return not_found;
}
}
});
G__31737 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__31737__31738.call(this,rng,n);
case  3 :
return G__31737__31739.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31737;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__31732 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__31732.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__31741 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__31742 = (function (end){
return range.call(null,0,end,1);
});
var range__31743 = (function (start,end){
return range.call(null,start,end,1);
});
var range__31744 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__31741.call(this);
case  1 :
return range__31742.call(this,start);
case  2 :
return range__31743.call(this,start,end);
case  3 :
return range__31744.call(this,start,end,step);
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
var temp__3974__auto____31746 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____31746))
{var s__31747 = temp__3974__auto____31746;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__31747),take_nth.call(null,n,cljs.core.drop.call(null,n,s__31747)));
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
var temp__3974__auto____31749 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____31749))
{var s__31750 = temp__3974__auto____31749;

var fst__31751 = cljs.core.first.call(null,s__31750);
var fv__31752 = f.call(null,fst__31751);
var run__31753 = cljs.core.cons.call(null,fst__31751,cljs.core.take_while.call(null,(function (p1__31748_SHARP_){
return cljs.core._EQ_.call(null,fv__31752,f.call(null,p1__31748_SHARP_));
}),cljs.core.next.call(null,s__31750)));

return cljs.core.cons.call(null,run__31753,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__31753),s__31750))));
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
var reductions__31768 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____31764 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3971__auto____31764))
{var s__31765 = temp__3971__auto____31764;

return reductions.call(null,f,cljs.core.first.call(null,s__31765),cljs.core.rest.call(null,s__31765));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__31769 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____31766 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____31766))
{var s__31767 = temp__3974__auto____31766;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__31767)),cljs.core.rest.call(null,s__31767));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__31768.call(this,f,init);
case  3 :
return reductions__31769.call(this,f,init,coll);
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
var juxt__31772 = (function (f){
return (function() {
var G__31777 = null;
var G__31777__31778 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__31777__31779 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__31777__31780 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__31777__31781 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__31777__31782 = (function() { 
var G__31784__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__31784 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31784__delegate.call(this, x, y, z, args);
};
G__31784.cljs$lang$maxFixedArity = 3;
G__31784.cljs$lang$applyTo = (function (arglist__31785){
var x = cljs.core.first(arglist__31785);
var y = cljs.core.first(cljs.core.next(arglist__31785));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31785)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31785)));
return G__31784__delegate.call(this, x, y, z, args);
});
return G__31784;
})()
;
G__31777 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__31777__31778.call(this);
case  1 :
return G__31777__31779.call(this,x);
case  2 :
return G__31777__31780.call(this,x,y);
case  3 :
return G__31777__31781.call(this,x,y,z);
default:
return G__31777__31782.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__31777.cljs$lang$maxFixedArity = 3;
G__31777.cljs$lang$applyTo = G__31777__31782.cljs$lang$applyTo;
return G__31777;
})()
});
var juxt__31773 = (function (f,g){
return (function() {
var G__31786 = null;
var G__31786__31787 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__31786__31788 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__31786__31789 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__31786__31790 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__31786__31791 = (function() { 
var G__31793__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__31793 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31793__delegate.call(this, x, y, z, args);
};
G__31793.cljs$lang$maxFixedArity = 3;
G__31793.cljs$lang$applyTo = (function (arglist__31794){
var x = cljs.core.first(arglist__31794);
var y = cljs.core.first(cljs.core.next(arglist__31794));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31794)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31794)));
return G__31793__delegate.call(this, x, y, z, args);
});
return G__31793;
})()
;
G__31786 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__31786__31787.call(this);
case  1 :
return G__31786__31788.call(this,x);
case  2 :
return G__31786__31789.call(this,x,y);
case  3 :
return G__31786__31790.call(this,x,y,z);
default:
return G__31786__31791.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__31786.cljs$lang$maxFixedArity = 3;
G__31786.cljs$lang$applyTo = G__31786__31791.cljs$lang$applyTo;
return G__31786;
})()
});
var juxt__31774 = (function (f,g,h){
return (function() {
var G__31795 = null;
var G__31795__31796 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__31795__31797 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__31795__31798 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__31795__31799 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__31795__31800 = (function() { 
var G__31802__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__31802 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31802__delegate.call(this, x, y, z, args);
};
G__31802.cljs$lang$maxFixedArity = 3;
G__31802.cljs$lang$applyTo = (function (arglist__31803){
var x = cljs.core.first(arglist__31803);
var y = cljs.core.first(cljs.core.next(arglist__31803));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31803)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31803)));
return G__31802__delegate.call(this, x, y, z, args);
});
return G__31802;
})()
;
G__31795 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__31795__31796.call(this);
case  1 :
return G__31795__31797.call(this,x);
case  2 :
return G__31795__31798.call(this,x,y);
case  3 :
return G__31795__31799.call(this,x,y,z);
default:
return G__31795__31800.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__31795.cljs$lang$maxFixedArity = 3;
G__31795.cljs$lang$applyTo = G__31795__31800.cljs$lang$applyTo;
return G__31795;
})()
});
var juxt__31775 = (function() { 
var G__31804__delegate = function (f,g,h,fs){
var fs__31771 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__31805 = null;
var G__31805__31806 = (function (){
return cljs.core.reduce.call(null,(function (p1__31754_SHARP_,p2__31755_SHARP_){
return cljs.core.conj.call(null,p1__31754_SHARP_,p2__31755_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__31771);
});
var G__31805__31807 = (function (x){
return cljs.core.reduce.call(null,(function (p1__31756_SHARP_,p2__31757_SHARP_){
return cljs.core.conj.call(null,p1__31756_SHARP_,p2__31757_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__31771);
});
var G__31805__31808 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__31758_SHARP_,p2__31759_SHARP_){
return cljs.core.conj.call(null,p1__31758_SHARP_,p2__31759_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__31771);
});
var G__31805__31809 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__31760_SHARP_,p2__31761_SHARP_){
return cljs.core.conj.call(null,p1__31760_SHARP_,p2__31761_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__31771);
});
var G__31805__31810 = (function() { 
var G__31812__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__31762_SHARP_,p2__31763_SHARP_){
return cljs.core.conj.call(null,p1__31762_SHARP_,cljs.core.apply.call(null,p2__31763_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__31771);
};
var G__31812 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31812__delegate.call(this, x, y, z, args);
};
G__31812.cljs$lang$maxFixedArity = 3;
G__31812.cljs$lang$applyTo = (function (arglist__31813){
var x = cljs.core.first(arglist__31813);
var y = cljs.core.first(cljs.core.next(arglist__31813));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31813)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31813)));
return G__31812__delegate.call(this, x, y, z, args);
});
return G__31812;
})()
;
G__31805 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__31805__31806.call(this);
case  1 :
return G__31805__31807.call(this,x);
case  2 :
return G__31805__31808.call(this,x,y);
case  3 :
return G__31805__31809.call(this,x,y,z);
default:
return G__31805__31810.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__31805.cljs$lang$maxFixedArity = 3;
G__31805.cljs$lang$applyTo = G__31805__31810.cljs$lang$applyTo;
return G__31805;
})()
};
var G__31804 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31804__delegate.call(this, f, g, h, fs);
};
G__31804.cljs$lang$maxFixedArity = 3;
G__31804.cljs$lang$applyTo = (function (arglist__31814){
var f = cljs.core.first(arglist__31814);
var g = cljs.core.first(cljs.core.next(arglist__31814));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31814)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31814)));
return G__31804__delegate.call(this, f, g, h, fs);
});
return G__31804;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__31772.call(this,f);
case  2 :
return juxt__31773.call(this,f,g);
case  3 :
return juxt__31774.call(this,f,g,h);
default:
return juxt__31775.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__31775.cljs$lang$applyTo;
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
var dorun__31816 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__31819 = cljs.core.next.call(null,coll);
coll = G__31819;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__31817 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____31815 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3822__auto____31815))
{return (n > 0);
} else
{return and__3822__auto____31815;
}
})()))
{{
var G__31820 = (n - 1);
var G__31821 = cljs.core.next.call(null,coll);
n = G__31820;
coll = G__31821;
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
return dorun__31816.call(this,n);
case  2 :
return dorun__31817.call(this,n,coll);
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
var doall__31822 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__31823 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__31822.call(this,n);
case  2 :
return doall__31823.call(this,n,coll);
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
var matches__31825 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__31825),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__31825),1)))
{return cljs.core.first.call(null,matches__31825);
} else
{return cljs.core.vec.call(null,matches__31825);
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
var matches__31826 = re.exec(s);

if(cljs.core.truth_((matches__31826 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__31826),1)))
{return cljs.core.first.call(null,matches__31826);
} else
{return cljs.core.vec.call(null,matches__31826);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__31827 = cljs.core.re_find.call(null,re,s);
var match_idx__31828 = s.search(re);
var match_str__31829 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__31827))?cljs.core.first.call(null,match_data__31827):match_data__31827);
var post_match__31830 = cljs.core.subs.call(null,s,(match_idx__31828 + cljs.core.count.call(null,match_str__31829)));

if(cljs.core.truth_(match_data__31827))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__31827,re_seq.call(null,re,post_match__31830));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__31832__31833 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___31834 = cljs.core.nth.call(null,vec__31832__31833,0,null);
var flags__31835 = cljs.core.nth.call(null,vec__31832__31833,1,null);
var pattern__31836 = cljs.core.nth.call(null,vec__31832__31833,2,null);

return (new RegExp(pattern__31836,flags__31835));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__31831_SHARP_){
return print_one.call(null,p1__31831_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____31837 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3822__auto____31837))
{var and__3822__auto____31841 = (function (){var x__451__auto____31838 = obj;

if(cljs.core.truth_((function (){var and__3822__auto____31839 = x__451__auto____31838;

if(cljs.core.truth_(and__3822__auto____31839))
{var and__3822__auto____31840 = x__451__auto____31838.cljs$core$IMeta$;

if(cljs.core.truth_(and__3822__auto____31840))
{return cljs.core.not.call(null,x__451__auto____31838.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3822__auto____31840;
}
} else
{return and__3822__auto____31839;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____31838);
}
})();

if(cljs.core.truth_(and__3822__auto____31841))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____31841;
}
} else
{return and__3822__auto____31837;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____31842 = obj;

if(cljs.core.truth_((function (){var and__3822__auto____31843 = x__451__auto____31842;

if(cljs.core.truth_(and__3822__auto____31843))
{var and__3822__auto____31844 = x__451__auto____31842.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3822__auto____31844))
{return cljs.core.not.call(null,x__451__auto____31842.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3822__auto____31844;
}
} else
{return and__3822__auto____31843;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____31842);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__31845 = cljs.core.first.call(null,objs);
var sb__31846 = (new goog.string.StringBuffer());

var G__31847__31848 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__31847__31848))
{var obj__31849 = cljs.core.first.call(null,G__31847__31848);
var G__31847__31850 = G__31847__31848;

while(true){
if(cljs.core.truth_((obj__31849 === first_obj__31845)))
{} else
{sb__31846.append(" ");
}
var G__31851__31852 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__31849,opts));

if(cljs.core.truth_(G__31851__31852))
{var string__31853 = cljs.core.first.call(null,G__31851__31852);
var G__31851__31854 = G__31851__31852;

while(true){
sb__31846.append(string__31853);
var temp__3974__auto____31855 = cljs.core.next.call(null,G__31851__31854);

if(cljs.core.truth_(temp__3974__auto____31855))
{var G__31851__31856 = temp__3974__auto____31855;

{
var G__31859 = cljs.core.first.call(null,G__31851__31856);
var G__31860 = G__31851__31856;
string__31853 = G__31859;
G__31851__31854 = G__31860;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____31857 = cljs.core.next.call(null,G__31847__31850);

if(cljs.core.truth_(temp__3974__auto____31857))
{var G__31847__31858 = temp__3974__auto____31857;

{
var G__31861 = cljs.core.first.call(null,G__31847__31858);
var G__31862 = G__31847__31858;
obj__31849 = G__31861;
G__31847__31850 = G__31862;
continue;
}
} else
{}
break;
}
} else
{}
return sb__31846;
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
var sb__31863 = cljs.core.pr_sb.call(null,objs,opts);

sb__31863.append("\n");
return cljs.core.str.call(null,sb__31863);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__31864 = cljs.core.first.call(null,objs);

var G__31865__31866 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__31865__31866))
{var obj__31867 = cljs.core.first.call(null,G__31865__31866);
var G__31865__31868 = G__31865__31866;

while(true){
if(cljs.core.truth_((obj__31867 === first_obj__31864)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__31869__31870 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__31867,opts));

if(cljs.core.truth_(G__31869__31870))
{var string__31871 = cljs.core.first.call(null,G__31869__31870);
var G__31869__31872 = G__31869__31870;

while(true){
cljs.core.string_print.call(null,string__31871);
var temp__3974__auto____31873 = cljs.core.next.call(null,G__31869__31872);

if(cljs.core.truth_(temp__3974__auto____31873))
{var G__31869__31874 = temp__3974__auto____31873;

{
var G__31877 = cljs.core.first.call(null,G__31869__31874);
var G__31878 = G__31869__31874;
string__31871 = G__31877;
G__31869__31872 = G__31878;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____31875 = cljs.core.next.call(null,G__31865__31868);

if(cljs.core.truth_(temp__3974__auto____31875))
{var G__31865__31876 = temp__3974__auto____31875;

{
var G__31879 = cljs.core.first.call(null,G__31865__31876);
var G__31880 = G__31865__31876;
obj__31867 = G__31879;
G__31865__31868 = G__31880;
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
pr_str.cljs$lang$applyTo = (function (arglist__31881){
var objs = cljs.core.seq( arglist__31881 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__31882){
var objs = cljs.core.seq( arglist__31882 );;
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
pr.cljs$lang$applyTo = (function (arglist__31883){
var objs = cljs.core.seq( arglist__31883 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__31884){
var objs = cljs.core.seq( arglist__31884 );;
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
print_str.cljs$lang$applyTo = (function (arglist__31885){
var objs = cljs.core.seq( arglist__31885 );;
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
println.cljs$lang$applyTo = (function (arglist__31886){
var objs = cljs.core.seq( arglist__31886 );;
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
println_str.cljs$lang$applyTo = (function (arglist__31887){
var objs = cljs.core.seq( arglist__31887 );;
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
prn.cljs$lang$applyTo = (function (arglist__31888){
var objs = cljs.core.seq( arglist__31888 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__31889 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__31889,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3974__auto____31890 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3974__auto____31890))
{var nspc__31891 = temp__3974__auto____31890;

return cljs.core.str.call(null,nspc__31891,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3974__auto____31892 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3974__auto____31892))
{var nspc__31893 = temp__3974__auto____31892;

return cljs.core.str.call(null,nspc__31893,"/");
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
var pr_pair__31894 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__31894,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__31895 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__31896 = this;
var G__31897__31898 = cljs.core.seq.call(null,this__31896.watches);

if(cljs.core.truth_(G__31897__31898))
{var G__31900__31902 = cljs.core.first.call(null,G__31897__31898);
var vec__31901__31903 = G__31900__31902;
var key__31904 = cljs.core.nth.call(null,vec__31901__31903,0,null);
var f__31905 = cljs.core.nth.call(null,vec__31901__31903,1,null);
var G__31897__31906 = G__31897__31898;

var G__31900__31907 = G__31900__31902;
var G__31897__31908 = G__31897__31906;

while(true){
var vec__31909__31910 = G__31900__31907;
var key__31911 = cljs.core.nth.call(null,vec__31909__31910,0,null);
var f__31912 = cljs.core.nth.call(null,vec__31909__31910,1,null);
var G__31897__31913 = G__31897__31908;

f__31912.call(null,key__31911,this$,oldval,newval);
var temp__3974__auto____31914 = cljs.core.next.call(null,G__31897__31913);

if(cljs.core.truth_(temp__3974__auto____31914))
{var G__31897__31915 = temp__3974__auto____31914;

{
var G__31922 = cljs.core.first.call(null,G__31897__31915);
var G__31923 = G__31897__31915;
G__31900__31907 = G__31922;
G__31897__31908 = G__31923;
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
var this__31916 = this;
return this$.watches = cljs.core.assoc.call(null,this__31916.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__31917 = this;
return this$.watches = cljs.core.dissoc.call(null,this__31917.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__31918 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__31918.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__31919 = this;
return this__31919.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__31920 = this;
return this__31920.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__31921 = this;
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
var atom__31930 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__31931 = (function() { 
var G__31933__delegate = function (x,p__31924){
var map__31925__31926 = p__31924;
var map__31925__31927 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__31925__31926))?cljs.core.apply.call(null,cljs.core.hash_map,map__31925__31926):map__31925__31926);
var validator__31928 = cljs.core.get.call(null,map__31925__31927,"\uFDD0'validator");
var meta__31929 = cljs.core.get.call(null,map__31925__31927,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__31929,validator__31928,null));
};
var G__31933 = function (x,var_args){
var p__31924 = null;
if (goog.isDef(var_args)) {
  p__31924 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__31933__delegate.call(this, x, p__31924);
};
G__31933.cljs$lang$maxFixedArity = 1;
G__31933.cljs$lang$applyTo = (function (arglist__31934){
var x = cljs.core.first(arglist__31934);
var p__31924 = cljs.core.rest(arglist__31934);
return G__31933__delegate.call(this, x, p__31924);
});
return G__31933;
})()
;
atom = function(x,var_args){
var p__31924 = var_args;
switch(arguments.length){
case  1 :
return atom__31930.call(this,x);
default:
return atom__31931.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__31931.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____31935 = a.validator;

if(cljs.core.truth_(temp__3974__auto____31935))
{var validate__31936 = temp__3974__auto____31935;

if(cljs.core.truth_(validate__31936.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__31937 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__31937,new_value);
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
var swap_BANG___31938 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___31939 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___31940 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___31941 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___31942 = (function() { 
var G__31944__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__31944 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__31944__delegate.call(this, a, f, x, y, z, more);
};
G__31944.cljs$lang$maxFixedArity = 5;
G__31944.cljs$lang$applyTo = (function (arglist__31945){
var a = cljs.core.first(arglist__31945);
var f = cljs.core.first(cljs.core.next(arglist__31945));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31945)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__31945))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__31945)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__31945)))));
return G__31944__delegate.call(this, a, f, x, y, z, more);
});
return G__31944;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___31938.call(this,a,f);
case  3 :
return swap_BANG___31939.call(this,a,f,x);
case  4 :
return swap_BANG___31940.call(this,a,f,x,y);
case  5 :
return swap_BANG___31941.call(this,a,f,x,y,z);
default:
return swap_BANG___31942.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___31942.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__31946){
var iref = cljs.core.first(arglist__31946);
var f = cljs.core.first(cljs.core.next(arglist__31946));
var args = cljs.core.rest(cljs.core.next(arglist__31946));
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
var gensym__31947 = (function (){
return gensym.call(null,"G__");
});
var gensym__31948 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__31947.call(this);
case  1 :
return gensym__31948.call(this,prefix_string);
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
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__31950 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__31950.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__31951 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__31951.state,(function (p__31952){
var curr_state__31953 = p__31952;
var curr_state__31954 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__31953))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__31953):curr_state__31953);
var done__31955 = cljs.core.get.call(null,curr_state__31954,"\uFDD0'done");

if(cljs.core.truth_(done__31955))
{return curr_state__31954;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__31951.f.call(null)});
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
var map__31956__31957 = options;
var map__31956__31958 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__31956__31957))?cljs.core.apply.call(null,cljs.core.hash_map,map__31956__31957):map__31956__31957);
var keywordize_keys__31959 = cljs.core.get.call(null,map__31956__31958,"\uFDD0'keywordize-keys");
var keyfn__31960 = (cljs.core.truth_(keywordize_keys__31959)?cljs.core.keyword:cljs.core.str);
var f__31966 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____31965 = (function iter__31961(s__31962){
return (new cljs.core.LazySeq(null,false,(function (){
var s__31962__31963 = s__31962;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__31962__31963)))
{var k__31964 = cljs.core.first.call(null,s__31962__31963);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__31960.call(null,k__31964),thisfn.call(null,(x[k__31964]))]),iter__31961.call(null,cljs.core.rest.call(null,s__31962__31963)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____31965.call(null,cljs.core.js_keys.call(null,x));
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

return f__31966.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__31967){
var x = cljs.core.first(arglist__31967);
var options = cljs.core.rest(arglist__31967);
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
var mem__31968 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__31972__delegate = function (args){
var temp__3971__auto____31969 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__31968),args);

if(cljs.core.truth_(temp__3971__auto____31969))
{var v__31970 = temp__3971__auto____31969;

return v__31970;
} else
{var ret__31971 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__31968,cljs.core.assoc,args,ret__31971);
return ret__31971;
}
};
var G__31972 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__31972__delegate.call(this, args);
};
G__31972.cljs$lang$maxFixedArity = 0;
G__31972.cljs$lang$applyTo = (function (arglist__31973){
var args = cljs.core.seq( arglist__31973 );;
return G__31972__delegate.call(this, args);
});
return G__31972;
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
var trampoline__31975 = (function (f){
while(true){
var ret__31974 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__31974)))
{{
var G__31978 = ret__31974;
f = G__31978;
continue;
}
} else
{return ret__31974;
}
break;
}
});
var trampoline__31976 = (function() { 
var G__31979__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__31979 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__31979__delegate.call(this, f, args);
};
G__31979.cljs$lang$maxFixedArity = 1;
G__31979.cljs$lang$applyTo = (function (arglist__31980){
var f = cljs.core.first(arglist__31980);
var args = cljs.core.rest(arglist__31980);
return G__31979__delegate.call(this, f, args);
});
return G__31979;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__31975.call(this,f);
default:
return trampoline__31976.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__31976.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__31981 = (function (){
return rand.call(null,1);
});
var rand__31982 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__31981.call(this);
case  1 :
return rand__31982.call(this,n);
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
var k__31984 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__31984,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__31984,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___31993 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___31994 = (function (h,child,parent){
var or__3824__auto____31985 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3824__auto____31985))
{return or__3824__auto____31985;
} else
{var or__3824__auto____31986 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3824__auto____31986))
{return or__3824__auto____31986;
} else
{var and__3822__auto____31987 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3822__auto____31987))
{var and__3822__auto____31988 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3822__auto____31988))
{var and__3822__auto____31989 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3822__auto____31989))
{var ret__31990 = true;
var i__31991 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3824__auto____31992 = cljs.core.not.call(null,ret__31990);

if(cljs.core.truth_(or__3824__auto____31992))
{return or__3824__auto____31992;
} else
{return cljs.core._EQ_.call(null,i__31991,cljs.core.count.call(null,parent));
}
})()))
{return ret__31990;
} else
{{
var G__31996 = isa_QMARK_.call(null,h,child.call(null,i__31991),parent.call(null,i__31991));
var G__31997 = (i__31991 + 1);
ret__31990 = G__31996;
i__31991 = G__31997;
continue;
}
}
break;
}
} else
{return and__3822__auto____31989;
}
} else
{return and__3822__auto____31988;
}
} else
{return and__3822__auto____31987;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___31993.call(this,h,child);
case  3 :
return isa_QMARK___31994.call(this,h,child,parent);
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
var parents__31998 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__31999 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__31998.call(this,h);
case  2 :
return parents__31999.call(this,h,tag);
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
var ancestors__32001 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__32002 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__32001.call(this,h);
case  2 :
return ancestors__32002.call(this,h,tag);
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
var descendants__32004 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__32005 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__32004.call(this,h);
case  2 :
return descendants__32005.call(this,h,tag);
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
var derive__32015 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__32016 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__32010 = "\uFDD0'parents".call(null,h);
var td__32011 = "\uFDD0'descendants".call(null,h);
var ta__32012 = "\uFDD0'ancestors".call(null,h);
var tf__32013 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3824__auto____32014 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__32010.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__32012.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__32012.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__32010,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__32013.call(null,"\uFDD0'ancestors".call(null,h),tag,td__32011,parent,ta__32012),"\uFDD0'descendants":tf__32013.call(null,"\uFDD0'descendants".call(null,h),parent,ta__32012,tag,td__32011)});
})());

if(cljs.core.truth_(or__3824__auto____32014))
{return or__3824__auto____32014;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__32015.call(this,h,tag);
case  3 :
return derive__32016.call(this,h,tag,parent);
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
var underive__32022 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__32023 = (function (h,tag,parent){
var parentMap__32018 = "\uFDD0'parents".call(null,h);
var childsParents__32019 = (cljs.core.truth_(parentMap__32018.call(null,tag))?cljs.core.disj.call(null,parentMap__32018.call(null,tag),parent):cljs.core.set([]));
var newParents__32020 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__32019))?cljs.core.assoc.call(null,parentMap__32018,tag,childsParents__32019):cljs.core.dissoc.call(null,parentMap__32018,tag));
var deriv_seq__32021 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__32007_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__32007_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__32007_SHARP_),cljs.core.second.call(null,p1__32007_SHARP_)));
}),cljs.core.seq.call(null,newParents__32020)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__32018.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__32008_SHARP_,p2__32009_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__32008_SHARP_,p2__32009_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__32021));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__32022.call(this,h,tag);
case  3 :
return underive__32023.call(this,h,tag,parent);
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
var xprefs__32025 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3824__auto____32027 = (cljs.core.truth_((function (){var and__3822__auto____32026 = xprefs__32025;

if(cljs.core.truth_(and__3822__auto____32026))
{return xprefs__32025.call(null,y);
} else
{return and__3822__auto____32026;
}
})())?true:null);

if(cljs.core.truth_(or__3824__auto____32027))
{return or__3824__auto____32027;
} else
{var or__3824__auto____32029 = (function (){var ps__32028 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__32028) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__32028),prefer_table)))
{} else
{}
{
var G__32032 = cljs.core.rest.call(null,ps__32028);
ps__32028 = G__32032;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3824__auto____32029))
{return or__3824__auto____32029;
} else
{var or__3824__auto____32031 = (function (){var ps__32030 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__32030) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__32030),y,prefer_table)))
{} else
{}
{
var G__32033 = cljs.core.rest.call(null,ps__32030);
ps__32030 = G__32033;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3824__auto____32031))
{return or__3824__auto____32031;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____32034 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3824__auto____32034))
{return or__3824__auto____32034;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__32043 = cljs.core.reduce.call(null,(function (be,p__32035){
var vec__32036__32037 = p__32035;
var k__32038 = cljs.core.nth.call(null,vec__32036__32037,0,null);
var ___32039 = cljs.core.nth.call(null,vec__32036__32037,1,null);
var e__32040 = vec__32036__32037;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__32038)))
{var be2__32042 = (cljs.core.truth_((function (){var or__3824__auto____32041 = (be === null);

if(cljs.core.truth_(or__3824__auto____32041))
{return or__3824__auto____32041;
} else
{return cljs.core.dominates.call(null,k__32038,cljs.core.first.call(null,be),prefer_table);
}
})())?e__32040:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__32042),k__32038,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__32038," and ",cljs.core.first.call(null,be2__32042),", and neither is preferred")));
}
return be2__32042;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__32043))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__32043));
return cljs.core.second.call(null,best_entry__32043);
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
if(cljs.core.truth_((function (){var and__3822__auto____32044 = mf;

if(cljs.core.truth_(and__3822__auto____32044))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3822__auto____32044;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3824__auto____32045 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____32045))
{return or__3824__auto____32045;
} else
{var or__3824__auto____32046 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3824__auto____32046))
{return or__3824__auto____32046;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3822__auto____32047 = mf;

if(cljs.core.truth_(and__3822__auto____32047))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3822__auto____32047;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____32048 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____32048))
{return or__3824__auto____32048;
} else
{var or__3824__auto____32049 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3824__auto____32049))
{return or__3824__auto____32049;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3822__auto____32050 = mf;

if(cljs.core.truth_(and__3822__auto____32050))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3822__auto____32050;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____32051 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____32051))
{return or__3824__auto____32051;
} else
{var or__3824__auto____32052 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3824__auto____32052))
{return or__3824__auto____32052;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3822__auto____32053 = mf;

if(cljs.core.truth_(and__3822__auto____32053))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3822__auto____32053;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____32054 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____32054))
{return or__3824__auto____32054;
} else
{var or__3824__auto____32055 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3824__auto____32055))
{return or__3824__auto____32055;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3822__auto____32056 = mf;

if(cljs.core.truth_(and__3822__auto____32056))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3822__auto____32056;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____32057 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____32057))
{return or__3824__auto____32057;
} else
{var or__3824__auto____32058 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3824__auto____32058))
{return or__3824__auto____32058;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3822__auto____32059 = mf;

if(cljs.core.truth_(and__3822__auto____32059))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3822__auto____32059;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3824__auto____32060 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____32060))
{return or__3824__auto____32060;
} else
{var or__3824__auto____32061 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3824__auto____32061))
{return or__3824__auto____32061;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3822__auto____32062 = mf;

if(cljs.core.truth_(and__3822__auto____32062))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3822__auto____32062;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3824__auto____32063 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____32063))
{return or__3824__auto____32063;
} else
{var or__3824__auto____32064 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3824__auto____32064))
{return or__3824__auto____32064;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3822__auto____32065 = mf;

if(cljs.core.truth_(and__3822__auto____32065))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3822__auto____32065;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3824__auto____32066 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____32066))
{return or__3824__auto____32066;
} else
{var or__3824__auto____32067 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3824__auto____32067))
{return or__3824__auto____32067;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__32068 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__32069 = cljs.core._get_method.call(null,mf,dispatch_val__32068);

if(cljs.core.truth_(target_fn__32069))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__32068)));
}
return cljs.core.apply.call(null,target_fn__32069,args);
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
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__32070 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__32071 = this;
cljs.core.swap_BANG_.call(null,this__32071.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__32071.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__32071.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__32071.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__32072 = this;
cljs.core.swap_BANG_.call(null,this__32072.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__32072.method_cache,this__32072.method_table,this__32072.cached_hierarchy,this__32072.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__32073 = this;
cljs.core.swap_BANG_.call(null,this__32073.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__32073.method_cache,this__32073.method_table,this__32073.cached_hierarchy,this__32073.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__32074 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__32074.cached_hierarchy),cljs.core.deref.call(null,this__32074.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__32074.method_cache,this__32074.method_table,this__32074.cached_hierarchy,this__32074.hierarchy);
}
var temp__3971__auto____32075 = cljs.core.deref.call(null,this__32074.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3971__auto____32075))
{var target_fn__32076 = temp__3971__auto____32075;

return target_fn__32076;
} else
{var temp__3971__auto____32077 = cljs.core.find_and_cache_best_method.call(null,this__32074.name,dispatch_val,this__32074.hierarchy,this__32074.method_table,this__32074.prefer_table,this__32074.method_cache,this__32074.cached_hierarchy);

if(cljs.core.truth_(temp__3971__auto____32077))
{var target_fn__32078 = temp__3971__auto____32077;

return target_fn__32078;
} else
{return cljs.core.deref.call(null,this__32074.method_table).call(null,this__32074.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__32079 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__32079.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__32079.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__32079.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__32079.method_cache,this__32079.method_table,this__32079.cached_hierarchy,this__32079.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__32080 = this;
return cljs.core.deref.call(null,this__32080.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__32081 = this;
return cljs.core.deref.call(null,this__32081.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__32082 = this;
return cljs.core.do_dispatch.call(null,mf,this__32082.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__32083__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__32083 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__32083__delegate.call(this, _, args);
};
G__32083.cljs$lang$maxFixedArity = 1;
G__32083.cljs$lang$applyTo = (function (arglist__32084){
var _ = cljs.core.first(arglist__32084);
var args = cljs.core.rest(arglist__32084);
return G__32083__delegate.call(this, _, args);
});
return G__32083;
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
