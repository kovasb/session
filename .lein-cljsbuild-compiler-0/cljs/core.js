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
var or__3824__auto____3456 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3824__auto____3456))
{return or__3824__auto____3456;
} else
{var or__3824__auto____3457 = (p["_"]);

if(cljs.core.truth_(or__3824__auto____3457))
{return or__3824__auto____3457;
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
var _invoke__3521 = (function (this$){
if(cljs.core.truth_((function (){var and__3822__auto____3458 = this$;

if(cljs.core.truth_(and__3822__auto____3458))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3458;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3824__auto____3459 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3459))
{return or__3824__auto____3459;
} else
{var or__3824__auto____3460 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3460))
{return or__3824__auto____3460;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__3522 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3822__auto____3461 = this$;

if(cljs.core.truth_(and__3822__auto____3461))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3461;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3824__auto____3462 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3462))
{return or__3824__auto____3462;
} else
{var or__3824__auto____3463 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3463))
{return or__3824__auto____3463;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3523 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3822__auto____3464 = this$;

if(cljs.core.truth_(and__3822__auto____3464))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3464;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3824__auto____3465 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3465))
{return or__3824__auto____3465;
} else
{var or__3824__auto____3466 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3466))
{return or__3824__auto____3466;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__3524 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3822__auto____3467 = this$;

if(cljs.core.truth_(and__3822__auto____3467))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3467;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3824__auto____3468 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3468))
{return or__3824__auto____3468;
} else
{var or__3824__auto____3469 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3469))
{return or__3824__auto____3469;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__3525 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3822__auto____3470 = this$;

if(cljs.core.truth_(and__3822__auto____3470))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3470;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____3471 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3471))
{return or__3824__auto____3471;
} else
{var or__3824__auto____3472 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3472))
{return or__3824__auto____3472;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__3526 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3822__auto____3473 = this$;

if(cljs.core.truth_(and__3822__auto____3473))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3473;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____3474 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3474))
{return or__3824__auto____3474;
} else
{var or__3824__auto____3475 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3475))
{return or__3824__auto____3475;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__3527 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3822__auto____3476 = this$;

if(cljs.core.truth_(and__3822__auto____3476))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3476;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____3477 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3477))
{return or__3824__auto____3477;
} else
{var or__3824__auto____3478 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3478))
{return or__3824__auto____3478;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__3528 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3822__auto____3479 = this$;

if(cljs.core.truth_(and__3822__auto____3479))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3479;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____3480 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3480))
{return or__3824__auto____3480;
} else
{var or__3824__auto____3481 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3481))
{return or__3824__auto____3481;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__3529 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3822__auto____3482 = this$;

if(cljs.core.truth_(and__3822__auto____3482))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3482;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____3483 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3483))
{return or__3824__auto____3483;
} else
{var or__3824__auto____3484 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3484))
{return or__3824__auto____3484;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__3530 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3822__auto____3485 = this$;

if(cljs.core.truth_(and__3822__auto____3485))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3485;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____3486 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3486))
{return or__3824__auto____3486;
} else
{var or__3824__auto____3487 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3487))
{return or__3824__auto____3487;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__3531 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3822__auto____3488 = this$;

if(cljs.core.truth_(and__3822__auto____3488))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3488;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____3489 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3489))
{return or__3824__auto____3489;
} else
{var or__3824__auto____3490 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3490))
{return or__3824__auto____3490;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__3532 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3822__auto____3491 = this$;

if(cljs.core.truth_(and__3822__auto____3491))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3491;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____3492 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3492))
{return or__3824__auto____3492;
} else
{var or__3824__auto____3493 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3493))
{return or__3824__auto____3493;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__3533 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3822__auto____3494 = this$;

if(cljs.core.truth_(and__3822__auto____3494))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3494;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____3495 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3495))
{return or__3824__auto____3495;
} else
{var or__3824__auto____3496 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3496))
{return or__3824__auto____3496;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__3534 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3822__auto____3497 = this$;

if(cljs.core.truth_(and__3822__auto____3497))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3497;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____3498 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3498))
{return or__3824__auto____3498;
} else
{var or__3824__auto____3499 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3499))
{return or__3824__auto____3499;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__3535 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3822__auto____3500 = this$;

if(cljs.core.truth_(and__3822__auto____3500))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3500;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____3501 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3501))
{return or__3824__auto____3501;
} else
{var or__3824__auto____3502 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3502))
{return or__3824__auto____3502;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__3536 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3822__auto____3503 = this$;

if(cljs.core.truth_(and__3822__auto____3503))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3503;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____3504 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3504))
{return or__3824__auto____3504;
} else
{var or__3824__auto____3505 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3505))
{return or__3824__auto____3505;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__3537 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3822__auto____3506 = this$;

if(cljs.core.truth_(and__3822__auto____3506))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3506;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____3507 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3507))
{return or__3824__auto____3507;
} else
{var or__3824__auto____3508 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3508))
{return or__3824__auto____3508;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__3538 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3822__auto____3509 = this$;

if(cljs.core.truth_(and__3822__auto____3509))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3509;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____3510 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3510))
{return or__3824__auto____3510;
} else
{var or__3824__auto____3511 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3511))
{return or__3824__auto____3511;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__3539 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3822__auto____3512 = this$;

if(cljs.core.truth_(and__3822__auto____3512))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3512;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____3513 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3513))
{return or__3824__auto____3513;
} else
{var or__3824__auto____3514 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3514))
{return or__3824__auto____3514;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__3540 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3822__auto____3515 = this$;

if(cljs.core.truth_(and__3822__auto____3515))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3515;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____3516 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3516))
{return or__3824__auto____3516;
} else
{var or__3824__auto____3517 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3517))
{return or__3824__auto____3517;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__3541 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3822__auto____3518 = this$;

if(cljs.core.truth_(and__3822__auto____3518))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3518;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____3519 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3519))
{return or__3824__auto____3519;
} else
{var or__3824__auto____3520 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____3520))
{return or__3824__auto____3520;
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
return _invoke__3521.call(this,this$);
case  2 :
return _invoke__3522.call(this,this$,a);
case  3 :
return _invoke__3523.call(this,this$,a,b);
case  4 :
return _invoke__3524.call(this,this$,a,b,c);
case  5 :
return _invoke__3525.call(this,this$,a,b,c,d);
case  6 :
return _invoke__3526.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__3527.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__3528.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__3529.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__3530.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__3531.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__3532.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__3533.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__3534.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__3535.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__3536.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__3537.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__3538.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__3539.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__3540.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__3541.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3822__auto____3543 = coll;

if(cljs.core.truth_(and__3822__auto____3543))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3822__auto____3543;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3824__auto____3544 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____3544))
{return or__3824__auto____3544;
} else
{var or__3824__auto____3545 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3824__auto____3545))
{return or__3824__auto____3545;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3822__auto____3546 = coll;

if(cljs.core.truth_(and__3822__auto____3546))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3822__auto____3546;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3824__auto____3547 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____3547))
{return or__3824__auto____3547;
} else
{var or__3824__auto____3548 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3824__auto____3548))
{return or__3824__auto____3548;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3822__auto____3549 = coll;

if(cljs.core.truth_(and__3822__auto____3549))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3822__auto____3549;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3824__auto____3550 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____3550))
{return or__3824__auto____3550;
} else
{var or__3824__auto____3551 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3824__auto____3551))
{return or__3824__auto____3551;
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
var _nth__3558 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3822__auto____3552 = coll;

if(cljs.core.truth_(and__3822__auto____3552))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3822__auto____3552;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3824__auto____3553 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____3553))
{return or__3824__auto____3553;
} else
{var or__3824__auto____3554 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3824__auto____3554))
{return or__3824__auto____3554;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3559 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3822__auto____3555 = coll;

if(cljs.core.truth_(and__3822__auto____3555))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3822__auto____3555;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3824__auto____3556 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____3556))
{return or__3824__auto____3556;
} else
{var or__3824__auto____3557 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3824__auto____3557))
{return or__3824__auto____3557;
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
return _nth__3558.call(this,coll,n);
case  3 :
return _nth__3559.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3822__auto____3561 = coll;

if(cljs.core.truth_(and__3822__auto____3561))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3822__auto____3561;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3824__auto____3562 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____3562))
{return or__3824__auto____3562;
} else
{var or__3824__auto____3563 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3824__auto____3563))
{return or__3824__auto____3563;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3822__auto____3564 = coll;

if(cljs.core.truth_(and__3822__auto____3564))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3822__auto____3564;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3824__auto____3565 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____3565))
{return or__3824__auto____3565;
} else
{var or__3824__auto____3566 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3824__auto____3566))
{return or__3824__auto____3566;
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
var _lookup__3573 = (function (o,k){
if(cljs.core.truth_((function (){var and__3822__auto____3567 = o;

if(cljs.core.truth_(and__3822__auto____3567))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3822__auto____3567;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3824__auto____3568 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____3568))
{return or__3824__auto____3568;
} else
{var or__3824__auto____3569 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3824__auto____3569))
{return or__3824__auto____3569;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3574 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3822__auto____3570 = o;

if(cljs.core.truth_(and__3822__auto____3570))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3822__auto____3570;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3824__auto____3571 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____3571))
{return or__3824__auto____3571;
} else
{var or__3824__auto____3572 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3824__auto____3572))
{return or__3824__auto____3572;
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
return _lookup__3573.call(this,o,k);
case  3 :
return _lookup__3574.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____3576 = coll;

if(cljs.core.truth_(and__3822__auto____3576))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3822__auto____3576;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3824__auto____3577 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____3577))
{return or__3824__auto____3577;
} else
{var or__3824__auto____3578 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3824__auto____3578))
{return or__3824__auto____3578;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3822__auto____3579 = coll;

if(cljs.core.truth_(and__3822__auto____3579))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3822__auto____3579;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3824__auto____3580 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____3580))
{return or__3824__auto____3580;
} else
{var or__3824__auto____3581 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3824__auto____3581))
{return or__3824__auto____3581;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____3582 = coll;

if(cljs.core.truth_(and__3822__auto____3582))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3822__auto____3582;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3824__auto____3583 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____3583))
{return or__3824__auto____3583;
} else
{var or__3824__auto____3584 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3824__auto____3584))
{return or__3824__auto____3584;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3822__auto____3585 = coll;

if(cljs.core.truth_(and__3822__auto____3585))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3822__auto____3585;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3824__auto____3586 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____3586))
{return or__3824__auto____3586;
} else
{var or__3824__auto____3587 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3824__auto____3587))
{return or__3824__auto____3587;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3822__auto____3588 = coll;

if(cljs.core.truth_(and__3822__auto____3588))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3822__auto____3588;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3824__auto____3589 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____3589))
{return or__3824__auto____3589;
} else
{var or__3824__auto____3590 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3824__auto____3590))
{return or__3824__auto____3590;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3822__auto____3591 = coll;

if(cljs.core.truth_(and__3822__auto____3591))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3822__auto____3591;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3824__auto____3592 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____3592))
{return or__3824__auto____3592;
} else
{var or__3824__auto____3593 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3824__auto____3593))
{return or__3824__auto____3593;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3822__auto____3594 = coll;

if(cljs.core.truth_(and__3822__auto____3594))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3822__auto____3594;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3824__auto____3595 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____3595))
{return or__3824__auto____3595;
} else
{var or__3824__auto____3596 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3824__auto____3596))
{return or__3824__auto____3596;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3822__auto____3597 = o;

if(cljs.core.truth_(and__3822__auto____3597))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3822__auto____3597;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3824__auto____3598 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____3598))
{return or__3824__auto____3598;
} else
{var or__3824__auto____3599 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3824__auto____3599))
{return or__3824__auto____3599;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3822__auto____3600 = o;

if(cljs.core.truth_(and__3822__auto____3600))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3822__auto____3600;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____3601 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____3601))
{return or__3824__auto____3601;
} else
{var or__3824__auto____3602 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3824__auto____3602))
{return or__3824__auto____3602;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3822__auto____3603 = o;

if(cljs.core.truth_(and__3822__auto____3603))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3822__auto____3603;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3824__auto____3604 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____3604))
{return or__3824__auto____3604;
} else
{var or__3824__auto____3605 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3824__auto____3605))
{return or__3824__auto____3605;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3822__auto____3606 = o;

if(cljs.core.truth_(and__3822__auto____3606))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3822__auto____3606;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3824__auto____3607 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____3607))
{return or__3824__auto____3607;
} else
{var or__3824__auto____3608 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3824__auto____3608))
{return or__3824__auto____3608;
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
var _reduce__3615 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3822__auto____3609 = coll;

if(cljs.core.truth_(and__3822__auto____3609))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3822__auto____3609;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3824__auto____3610 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____3610))
{return or__3824__auto____3610;
} else
{var or__3824__auto____3611 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3824__auto____3611))
{return or__3824__auto____3611;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3616 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3822__auto____3612 = coll;

if(cljs.core.truth_(and__3822__auto____3612))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3822__auto____3612;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3824__auto____3613 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____3613))
{return or__3824__auto____3613;
} else
{var or__3824__auto____3614 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3824__auto____3614))
{return or__3824__auto____3614;
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
return _reduce__3615.call(this,coll,f);
case  3 :
return _reduce__3616.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3822__auto____3618 = o;

if(cljs.core.truth_(and__3822__auto____3618))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3822__auto____3618;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3824__auto____3619 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____3619))
{return or__3824__auto____3619;
} else
{var or__3824__auto____3620 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3824__auto____3620))
{return or__3824__auto____3620;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3822__auto____3621 = o;

if(cljs.core.truth_(and__3822__auto____3621))
{return o.cljs$core$IHash$_hash;
} else
{return and__3822__auto____3621;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3824__auto____3622 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____3622))
{return or__3824__auto____3622;
} else
{var or__3824__auto____3623 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3824__auto____3623))
{return or__3824__auto____3623;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3822__auto____3624 = o;

if(cljs.core.truth_(and__3822__auto____3624))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3822__auto____3624;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3824__auto____3625 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____3625))
{return or__3824__auto____3625;
} else
{var or__3824__auto____3626 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3824__auto____3626))
{return or__3824__auto____3626;
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
if(cljs.core.truth_((function (){var and__3822__auto____3627 = o;

if(cljs.core.truth_(and__3822__auto____3627))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3822__auto____3627;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3824__auto____3628 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____3628))
{return or__3824__auto____3628;
} else
{var or__3824__auto____3629 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3824__auto____3629))
{return or__3824__auto____3629;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3822__auto____3630 = d;

if(cljs.core.truth_(and__3822__auto____3630))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3822__auto____3630;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3824__auto____3631 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3824__auto____3631))
{return or__3824__auto____3631;
} else
{var or__3824__auto____3632 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3824__auto____3632))
{return or__3824__auto____3632;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3822__auto____3633 = this$;

if(cljs.core.truth_(and__3822__auto____3633))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3822__auto____3633;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____3634 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3634))
{return or__3824__auto____3634;
} else
{var or__3824__auto____3635 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3824__auto____3635))
{return or__3824__auto____3635;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3822__auto____3636 = this$;

if(cljs.core.truth_(and__3822__auto____3636))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3822__auto____3636;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3824__auto____3637 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3637))
{return or__3824__auto____3637;
} else
{var or__3824__auto____3638 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3824__auto____3638))
{return or__3824__auto____3638;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3822__auto____3639 = this$;

if(cljs.core.truth_(and__3822__auto____3639))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3822__auto____3639;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3824__auto____3640 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____3640))
{return or__3824__auto____3640;
} else
{var or__3824__auto____3641 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3824__auto____3641))
{return or__3824__auto____3641;
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
var G__3642 = null;
var G__3642__3643 = (function (o,k){
return null;
});
var G__3642__3644 = (function (o,k,not_found){
return not_found;
});
G__3642 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3642__3643.call(this,o,k);
case  3 :
return G__3642__3644.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3642;
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
var G__3646 = null;
var G__3646__3647 = (function (_,f){
return f.call(null);
});
var G__3646__3648 = (function (_,f,start){
return start;
});
G__3646 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3646__3647.call(this,_,f);
case  3 :
return G__3646__3648.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3646;
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
var G__3650 = null;
var G__3650__3651 = (function (_,n){
return null;
});
var G__3650__3652 = (function (_,n,not_found){
return not_found;
});
G__3650 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3650__3651.call(this,_,n);
case  3 :
return G__3650__3652.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3650;
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
var ci_reduce__3660 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3654 = cljs.core._nth.call(null,cicoll,0);
var n__3655 = 1;

while(true){
if(cljs.core.truth_((n__3655 < cljs.core._count.call(null,cicoll))))
{{
var G__3664 = f.call(null,val__3654,cljs.core._nth.call(null,cicoll,n__3655));
var G__3665 = (n__3655 + 1);
val__3654 = G__3664;
n__3655 = G__3665;
continue;
}
} else
{return val__3654;
}
break;
}
}
});
var ci_reduce__3661 = (function (cicoll,f,val){
var val__3656 = val;
var n__3657 = 0;

while(true){
if(cljs.core.truth_((n__3657 < cljs.core._count.call(null,cicoll))))
{{
var G__3666 = f.call(null,val__3656,cljs.core._nth.call(null,cicoll,n__3657));
var G__3667 = (n__3657 + 1);
val__3656 = G__3666;
n__3657 = G__3667;
continue;
}
} else
{return val__3656;
}
break;
}
});
var ci_reduce__3662 = (function (cicoll,f,val,idx){
var val__3658 = val;
var n__3659 = idx;

while(true){
if(cljs.core.truth_((n__3659 < cljs.core._count.call(null,cicoll))))
{{
var G__3668 = f.call(null,val__3658,cljs.core._nth.call(null,cicoll,n__3659));
var G__3669 = (n__3659 + 1);
val__3658 = G__3668;
n__3659 = G__3669;
continue;
}
} else
{return val__3658;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3660.call(this,cicoll,f);
case  3 :
return ci_reduce__3661.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3662.call(this,cicoll,f,val,idx);
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
var this__3670 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3683 = null;
var G__3683__3684 = (function (_,f){
var this__3671 = this;
return cljs.core.ci_reduce.call(null,this__3671.a,f,(this__3671.a[this__3671.i]),(this__3671.i + 1));
});
var G__3683__3685 = (function (_,f,start){
var this__3672 = this;
return cljs.core.ci_reduce.call(null,this__3672.a,f,start,this__3672.i);
});
G__3683 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3683__3684.call(this,_,f);
case  3 :
return G__3683__3685.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3683;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3673 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3674 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3687 = null;
var G__3687__3688 = (function (coll,n){
var this__3675 = this;
var i__3676 = (n + this__3675.i);

if(cljs.core.truth_((i__3676 < this__3675.a.length)))
{return (this__3675.a[i__3676]);
} else
{return null;
}
});
var G__3687__3689 = (function (coll,n,not_found){
var this__3677 = this;
var i__3678 = (n + this__3677.i);

if(cljs.core.truth_((i__3678 < this__3677.a.length)))
{return (this__3677.a[i__3678]);
} else
{return not_found;
}
});
G__3687 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3687__3688.call(this,coll,n);
case  3 :
return G__3687__3689.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3687;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3679 = this;
return (this__3679.a.length - this__3679.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3680 = this;
return (this__3680.a[this__3680.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3681 = this;
if(cljs.core.truth_(((this__3681.i + 1) < this__3681.a.length)))
{return (new cljs.core.IndexedSeq(this__3681.a,(this__3681.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3682 = this;
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
var G__3691 = null;
var G__3691__3692 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3691__3693 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3691 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3691__3692.call(this,array,f);
case  3 :
return G__3691__3693.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3691;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3695 = null;
var G__3695__3696 = (function (array,k){
return (array[k]);
});
var G__3695__3697 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3695 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3695__3696.call(this,array,k);
case  3 :
return G__3695__3697.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3695;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3699 = null;
var G__3699__3700 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3699__3701 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3699 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3699__3700.call(this,array,n);
case  3 :
return G__3699__3701.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3699;
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
var temp__3974__auto____3703 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____3703))
{var s__3704 = temp__3974__auto____3703;

return cljs.core._first.call(null,s__3704);
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
var G__3705 = cljs.core.next.call(null,s);
s = G__3705;
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
var s__3706 = cljs.core.seq.call(null,x);
var n__3707 = 0;

while(true){
if(cljs.core.truth_(s__3706))
{{
var G__3708 = cljs.core.next.call(null,s__3706);
var G__3709 = (n__3707 + 1);
s__3706 = G__3708;
n__3707 = G__3709;
continue;
}
} else
{return n__3707;
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
var conj__3710 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3711 = (function() { 
var G__3713__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3714 = conj.call(null,coll,x);
var G__3715 = cljs.core.first.call(null,xs);
var G__3716 = cljs.core.next.call(null,xs);
coll = G__3714;
x = G__3715;
xs = G__3716;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3713 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3713__delegate.call(this, coll, x, xs);
};
G__3713.cljs$lang$maxFixedArity = 2;
G__3713.cljs$lang$applyTo = (function (arglist__3717){
var coll = cljs.core.first(arglist__3717);
var x = cljs.core.first(cljs.core.next(arglist__3717));
var xs = cljs.core.rest(cljs.core.next(arglist__3717));
return G__3713__delegate.call(this, coll, x, xs);
});
return G__3713;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3710.call(this,coll,x);
default:
return conj__3711.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3711.cljs$lang$applyTo;
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
var nth__3718 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3719 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3718.call(this,coll,n);
case  3 :
return nth__3719.call(this,coll,n,not_found);
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
var get__3721 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3722 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3721.call(this,o,k);
case  3 :
return get__3722.call(this,o,k,not_found);
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
var assoc__3725 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3726 = (function() { 
var G__3728__delegate = function (coll,k,v,kvs){
while(true){
var ret__3724 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3729 = ret__3724;
var G__3730 = cljs.core.first.call(null,kvs);
var G__3731 = cljs.core.second.call(null,kvs);
var G__3732 = cljs.core.nnext.call(null,kvs);
coll = G__3729;
k = G__3730;
v = G__3731;
kvs = G__3732;
continue;
}
} else
{return ret__3724;
}
break;
}
};
var G__3728 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3728__delegate.call(this, coll, k, v, kvs);
};
G__3728.cljs$lang$maxFixedArity = 3;
G__3728.cljs$lang$applyTo = (function (arglist__3733){
var coll = cljs.core.first(arglist__3733);
var k = cljs.core.first(cljs.core.next(arglist__3733));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3733)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3733)));
return G__3728__delegate.call(this, coll, k, v, kvs);
});
return G__3728;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3725.call(this,coll,k,v);
default:
return assoc__3726.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3726.cljs$lang$applyTo;
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
var dissoc__3735 = (function (coll){
return coll;
});
var dissoc__3736 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3737 = (function() { 
var G__3739__delegate = function (coll,k,ks){
while(true){
var ret__3734 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3740 = ret__3734;
var G__3741 = cljs.core.first.call(null,ks);
var G__3742 = cljs.core.next.call(null,ks);
coll = G__3740;
k = G__3741;
ks = G__3742;
continue;
}
} else
{return ret__3734;
}
break;
}
};
var G__3739 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3739__delegate.call(this, coll, k, ks);
};
G__3739.cljs$lang$maxFixedArity = 2;
G__3739.cljs$lang$applyTo = (function (arglist__3743){
var coll = cljs.core.first(arglist__3743);
var k = cljs.core.first(cljs.core.next(arglist__3743));
var ks = cljs.core.rest(cljs.core.next(arglist__3743));
return G__3739__delegate.call(this, coll, k, ks);
});
return G__3739;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3735.call(this,coll);
case  2 :
return dissoc__3736.call(this,coll,k);
default:
return dissoc__3737.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3737.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____3744 = o;

if(cljs.core.truth_((function (){var and__3822__auto____3745 = x__451__auto____3744;

if(cljs.core.truth_(and__3822__auto____3745))
{var and__3822__auto____3746 = x__451__auto____3744.cljs$core$IMeta$;

if(cljs.core.truth_(and__3822__auto____3746))
{return cljs.core.not.call(null,x__451__auto____3744.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3822__auto____3746;
}
} else
{return and__3822__auto____3745;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____3744);
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
var disj__3748 = (function (coll){
return coll;
});
var disj__3749 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3750 = (function() { 
var G__3752__delegate = function (coll,k,ks){
while(true){
var ret__3747 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3753 = ret__3747;
var G__3754 = cljs.core.first.call(null,ks);
var G__3755 = cljs.core.next.call(null,ks);
coll = G__3753;
k = G__3754;
ks = G__3755;
continue;
}
} else
{return ret__3747;
}
break;
}
};
var G__3752 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3752__delegate.call(this, coll, k, ks);
};
G__3752.cljs$lang$maxFixedArity = 2;
G__3752.cljs$lang$applyTo = (function (arglist__3756){
var coll = cljs.core.first(arglist__3756);
var k = cljs.core.first(cljs.core.next(arglist__3756));
var ks = cljs.core.rest(cljs.core.next(arglist__3756));
return G__3752__delegate.call(this, coll, k, ks);
});
return G__3752;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3748.call(this,coll);
case  2 :
return disj__3749.call(this,coll,k);
default:
return disj__3750.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3750.cljs$lang$applyTo;
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
{var x__451__auto____3757 = x;

if(cljs.core.truth_((function (){var and__3822__auto____3758 = x__451__auto____3757;

if(cljs.core.truth_(and__3822__auto____3758))
{var and__3822__auto____3759 = x__451__auto____3757.cljs$core$ICollection$;

if(cljs.core.truth_(and__3822__auto____3759))
{return cljs.core.not.call(null,x__451__auto____3757.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3822__auto____3759;
}
} else
{return and__3822__auto____3758;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____3757);
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
{var x__451__auto____3760 = x;

if(cljs.core.truth_((function (){var and__3822__auto____3761 = x__451__auto____3760;

if(cljs.core.truth_(and__3822__auto____3761))
{var and__3822__auto____3762 = x__451__auto____3760.cljs$core$ISet$;

if(cljs.core.truth_(and__3822__auto____3762))
{return cljs.core.not.call(null,x__451__auto____3760.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3822__auto____3762;
}
} else
{return and__3822__auto____3761;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____3760);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____3763 = x;

if(cljs.core.truth_((function (){var and__3822__auto____3764 = x__451__auto____3763;

if(cljs.core.truth_(and__3822__auto____3764))
{var and__3822__auto____3765 = x__451__auto____3763.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3822__auto____3765))
{return cljs.core.not.call(null,x__451__auto____3763.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3822__auto____3765;
}
} else
{return and__3822__auto____3764;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____3763);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____3766 = x;

if(cljs.core.truth_((function (){var and__3822__auto____3767 = x__451__auto____3766;

if(cljs.core.truth_(and__3822__auto____3767))
{var and__3822__auto____3768 = x__451__auto____3766.cljs$core$ISequential$;

if(cljs.core.truth_(and__3822__auto____3768))
{return cljs.core.not.call(null,x__451__auto____3766.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3822__auto____3768;
}
} else
{return and__3822__auto____3767;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____3766);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____3769 = x;

if(cljs.core.truth_((function (){var and__3822__auto____3770 = x__451__auto____3769;

if(cljs.core.truth_(and__3822__auto____3770))
{var and__3822__auto____3771 = x__451__auto____3769.cljs$core$ICounted$;

if(cljs.core.truth_(and__3822__auto____3771))
{return cljs.core.not.call(null,x__451__auto____3769.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3822__auto____3771;
}
} else
{return and__3822__auto____3770;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____3769);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____3772 = x;

if(cljs.core.truth_((function (){var and__3822__auto____3773 = x__451__auto____3772;

if(cljs.core.truth_(and__3822__auto____3773))
{var and__3822__auto____3774 = x__451__auto____3772.cljs$core$IMap$;

if(cljs.core.truth_(and__3822__auto____3774))
{return cljs.core.not.call(null,x__451__auto____3772.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3822__auto____3774;
}
} else
{return and__3822__auto____3773;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____3772);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____3775 = x;

if(cljs.core.truth_((function (){var and__3822__auto____3776 = x__451__auto____3775;

if(cljs.core.truth_(and__3822__auto____3776))
{var and__3822__auto____3777 = x__451__auto____3775.cljs$core$IVector$;

if(cljs.core.truth_(and__3822__auto____3777))
{return cljs.core.not.call(null,x__451__auto____3775.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3822__auto____3777;
}
} else
{return and__3822__auto____3776;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____3775);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3778 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3778.push(key);
}));
return keys__3778;
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
{var x__451__auto____3779 = s;

if(cljs.core.truth_((function (){var and__3822__auto____3780 = x__451__auto____3779;

if(cljs.core.truth_(and__3822__auto____3780))
{var and__3822__auto____3781 = x__451__auto____3779.cljs$core$ISeq$;

if(cljs.core.truth_(and__3822__auto____3781))
{return cljs.core.not.call(null,x__451__auto____3779.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3822__auto____3781;
}
} else
{return and__3822__auto____3780;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____3779);
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
var and__3822__auto____3782 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3822__auto____3782))
{return cljs.core.not.call(null,(function (){var or__3824__auto____3783 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3824__auto____3783))
{return or__3824__auto____3783;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3822__auto____3782;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____3784 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3822__auto____3784))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3822__auto____3784;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____3785 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3822__auto____3785))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3822__auto____3785;
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
var and__3822__auto____3786 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3822__auto____3786))
{return (n == n.toFixed());
} else
{return and__3822__auto____3786;
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
if(cljs.core.truth_((function (){var and__3822__auto____3787 = coll;

if(cljs.core.truth_(and__3822__auto____3787))
{var and__3822__auto____3788 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3822__auto____3788))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____3788;
}
} else
{return and__3822__auto____3787;
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
var distinct_QMARK___3793 = (function (x){
return true;
});
var distinct_QMARK___3794 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3795 = (function() { 
var G__3797__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3789 = cljs.core.set([y,x]);
var xs__3790 = more;

while(true){
var x__3791 = cljs.core.first.call(null,xs__3790);
var etc__3792 = cljs.core.next.call(null,xs__3790);

if(cljs.core.truth_(xs__3790))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3789,x__3791)))
{return false;
} else
{{
var G__3798 = cljs.core.conj.call(null,s__3789,x__3791);
var G__3799 = etc__3792;
s__3789 = G__3798;
xs__3790 = G__3799;
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
var G__3797 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3797__delegate.call(this, x, y, more);
};
G__3797.cljs$lang$maxFixedArity = 2;
G__3797.cljs$lang$applyTo = (function (arglist__3800){
var x = cljs.core.first(arglist__3800);
var y = cljs.core.first(cljs.core.next(arglist__3800));
var more = cljs.core.rest(cljs.core.next(arglist__3800));
return G__3797__delegate.call(this, x, y, more);
});
return G__3797;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3793.call(this,x);
case  2 :
return distinct_QMARK___3794.call(this,x,y);
default:
return distinct_QMARK___3795.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3795.cljs$lang$applyTo;
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
var r__3801 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3801)))
{return r__3801;
} else
{if(cljs.core.truth_(r__3801))
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
var sort__3803 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3804 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3802 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3802,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3802);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3803.call(this,comp);
case  2 :
return sort__3804.call(this,comp,coll);
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
var sort_by__3806 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3807 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3806.call(this,keyfn,comp);
case  3 :
return sort_by__3807.call(this,keyfn,comp,coll);
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
var reduce__3809 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3810 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3809.call(this,f,val);
case  3 :
return reduce__3810.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3816 = (function (f,coll){
var temp__3971__auto____3812 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3971__auto____3812))
{var s__3813 = temp__3971__auto____3812;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3813),cljs.core.next.call(null,s__3813));
} else
{return f.call(null);
}
});
var seq_reduce__3817 = (function (f,val,coll){
var val__3814 = val;
var coll__3815 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3815))
{{
var G__3819 = f.call(null,val__3814,cljs.core.first.call(null,coll__3815));
var G__3820 = cljs.core.next.call(null,coll__3815);
val__3814 = G__3819;
coll__3815 = G__3820;
continue;
}
} else
{return val__3814;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3816.call(this,f,val);
case  3 :
return seq_reduce__3817.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3821 = null;
var G__3821__3822 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3821__3823 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3821 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3821__3822.call(this,coll,f);
case  3 :
return G__3821__3823.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3821;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3825 = (function (){
return 0;
});
var _PLUS___3826 = (function (x){
return x;
});
var _PLUS___3827 = (function (x,y){
return (x + y);
});
var _PLUS___3828 = (function() { 
var G__3830__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3830 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3830__delegate.call(this, x, y, more);
};
G__3830.cljs$lang$maxFixedArity = 2;
G__3830.cljs$lang$applyTo = (function (arglist__3831){
var x = cljs.core.first(arglist__3831);
var y = cljs.core.first(cljs.core.next(arglist__3831));
var more = cljs.core.rest(cljs.core.next(arglist__3831));
return G__3830__delegate.call(this, x, y, more);
});
return G__3830;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3825.call(this);
case  1 :
return _PLUS___3826.call(this,x);
case  2 :
return _PLUS___3827.call(this,x,y);
default:
return _PLUS___3828.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3828.cljs$lang$applyTo;
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
var ___3832 = (function (x){
return (- x);
});
var ___3833 = (function (x,y){
return (x - y);
});
var ___3834 = (function() { 
var G__3836__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__3836 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3836__delegate.call(this, x, y, more);
};
G__3836.cljs$lang$maxFixedArity = 2;
G__3836.cljs$lang$applyTo = (function (arglist__3837){
var x = cljs.core.first(arglist__3837);
var y = cljs.core.first(cljs.core.next(arglist__3837));
var more = cljs.core.rest(cljs.core.next(arglist__3837));
return G__3836__delegate.call(this, x, y, more);
});
return G__3836;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3832.call(this,x);
case  2 :
return ___3833.call(this,x,y);
default:
return ___3834.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3834.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3838 = (function (){
return 1;
});
var _STAR___3839 = (function (x){
return x;
});
var _STAR___3840 = (function (x,y){
return (x * y);
});
var _STAR___3841 = (function() { 
var G__3843__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3843 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3843__delegate.call(this, x, y, more);
};
G__3843.cljs$lang$maxFixedArity = 2;
G__3843.cljs$lang$applyTo = (function (arglist__3844){
var x = cljs.core.first(arglist__3844);
var y = cljs.core.first(cljs.core.next(arglist__3844));
var more = cljs.core.rest(cljs.core.next(arglist__3844));
return G__3843__delegate.call(this, x, y, more);
});
return G__3843;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3838.call(this);
case  1 :
return _STAR___3839.call(this,x);
case  2 :
return _STAR___3840.call(this,x,y);
default:
return _STAR___3841.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3841.cljs$lang$applyTo;
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
var _SLASH___3845 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___3846 = (function (x,y){
return (x / y);
});
var _SLASH___3847 = (function() { 
var G__3849__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3849 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3849__delegate.call(this, x, y, more);
};
G__3849.cljs$lang$maxFixedArity = 2;
G__3849.cljs$lang$applyTo = (function (arglist__3850){
var x = cljs.core.first(arglist__3850);
var y = cljs.core.first(cljs.core.next(arglist__3850));
var more = cljs.core.rest(cljs.core.next(arglist__3850));
return G__3849__delegate.call(this, x, y, more);
});
return G__3849;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3845.call(this,x);
case  2 :
return _SLASH___3846.call(this,x,y);
default:
return _SLASH___3847.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3847.cljs$lang$applyTo;
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
var _LT___3851 = (function (x){
return true;
});
var _LT___3852 = (function (x,y){
return (x < y);
});
var _LT___3853 = (function() { 
var G__3855__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3856 = y;
var G__3857 = cljs.core.first.call(null,more);
var G__3858 = cljs.core.next.call(null,more);
x = G__3856;
y = G__3857;
more = G__3858;
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
var G__3855 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3855__delegate.call(this, x, y, more);
};
G__3855.cljs$lang$maxFixedArity = 2;
G__3855.cljs$lang$applyTo = (function (arglist__3859){
var x = cljs.core.first(arglist__3859);
var y = cljs.core.first(cljs.core.next(arglist__3859));
var more = cljs.core.rest(cljs.core.next(arglist__3859));
return G__3855__delegate.call(this, x, y, more);
});
return G__3855;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3851.call(this,x);
case  2 :
return _LT___3852.call(this,x,y);
default:
return _LT___3853.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3853.cljs$lang$applyTo;
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
var _LT__EQ___3860 = (function (x){
return true;
});
var _LT__EQ___3861 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3862 = (function() { 
var G__3864__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3865 = y;
var G__3866 = cljs.core.first.call(null,more);
var G__3867 = cljs.core.next.call(null,more);
x = G__3865;
y = G__3866;
more = G__3867;
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
var G__3864 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3864__delegate.call(this, x, y, more);
};
G__3864.cljs$lang$maxFixedArity = 2;
G__3864.cljs$lang$applyTo = (function (arglist__3868){
var x = cljs.core.first(arglist__3868);
var y = cljs.core.first(cljs.core.next(arglist__3868));
var more = cljs.core.rest(cljs.core.next(arglist__3868));
return G__3864__delegate.call(this, x, y, more);
});
return G__3864;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3860.call(this,x);
case  2 :
return _LT__EQ___3861.call(this,x,y);
default:
return _LT__EQ___3862.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3862.cljs$lang$applyTo;
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
var _GT___3869 = (function (x){
return true;
});
var _GT___3870 = (function (x,y){
return (x > y);
});
var _GT___3871 = (function() { 
var G__3873__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3874 = y;
var G__3875 = cljs.core.first.call(null,more);
var G__3876 = cljs.core.next.call(null,more);
x = G__3874;
y = G__3875;
more = G__3876;
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
var G__3873 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3873__delegate.call(this, x, y, more);
};
G__3873.cljs$lang$maxFixedArity = 2;
G__3873.cljs$lang$applyTo = (function (arglist__3877){
var x = cljs.core.first(arglist__3877);
var y = cljs.core.first(cljs.core.next(arglist__3877));
var more = cljs.core.rest(cljs.core.next(arglist__3877));
return G__3873__delegate.call(this, x, y, more);
});
return G__3873;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3869.call(this,x);
case  2 :
return _GT___3870.call(this,x,y);
default:
return _GT___3871.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3871.cljs$lang$applyTo;
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
var _GT__EQ___3878 = (function (x){
return true;
});
var _GT__EQ___3879 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3880 = (function() { 
var G__3882__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3883 = y;
var G__3884 = cljs.core.first.call(null,more);
var G__3885 = cljs.core.next.call(null,more);
x = G__3883;
y = G__3884;
more = G__3885;
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
var G__3882 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3882__delegate.call(this, x, y, more);
};
G__3882.cljs$lang$maxFixedArity = 2;
G__3882.cljs$lang$applyTo = (function (arglist__3886){
var x = cljs.core.first(arglist__3886);
var y = cljs.core.first(cljs.core.next(arglist__3886));
var more = cljs.core.rest(cljs.core.next(arglist__3886));
return G__3882__delegate.call(this, x, y, more);
});
return G__3882;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3878.call(this,x);
case  2 :
return _GT__EQ___3879.call(this,x,y);
default:
return _GT__EQ___3880.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3880.cljs$lang$applyTo;
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
var max__3887 = (function (x){
return x;
});
var max__3888 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3889 = (function() { 
var G__3891__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3891 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3891__delegate.call(this, x, y, more);
};
G__3891.cljs$lang$maxFixedArity = 2;
G__3891.cljs$lang$applyTo = (function (arglist__3892){
var x = cljs.core.first(arglist__3892);
var y = cljs.core.first(cljs.core.next(arglist__3892));
var more = cljs.core.rest(cljs.core.next(arglist__3892));
return G__3891__delegate.call(this, x, y, more);
});
return G__3891;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3887.call(this,x);
case  2 :
return max__3888.call(this,x,y);
default:
return max__3889.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3889.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3893 = (function (x){
return x;
});
var min__3894 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3895 = (function() { 
var G__3897__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3897 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3897__delegate.call(this, x, y, more);
};
G__3897.cljs$lang$maxFixedArity = 2;
G__3897.cljs$lang$applyTo = (function (arglist__3898){
var x = cljs.core.first(arglist__3898);
var y = cljs.core.first(cljs.core.next(arglist__3898));
var more = cljs.core.rest(cljs.core.next(arglist__3898));
return G__3897__delegate.call(this, x, y, more);
});
return G__3897;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3893.call(this,x);
case  2 :
return min__3894.call(this,x,y);
default:
return min__3895.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3895.cljs$lang$applyTo;
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
var rem__3899 = (n % d);

return cljs.core.fix.call(null,((n - rem__3899) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3900 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3900));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3901 = (function (){
return Math.random.call(null);
});
var rand__3902 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3901.call(this);
case  1 :
return rand__3902.call(this,n);
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
var _EQ__EQ___3904 = (function (x){
return true;
});
var _EQ__EQ___3905 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3906 = (function() { 
var G__3908__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3909 = y;
var G__3910 = cljs.core.first.call(null,more);
var G__3911 = cljs.core.next.call(null,more);
x = G__3909;
y = G__3910;
more = G__3911;
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
var G__3908 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3908__delegate.call(this, x, y, more);
};
G__3908.cljs$lang$maxFixedArity = 2;
G__3908.cljs$lang$applyTo = (function (arglist__3912){
var x = cljs.core.first(arglist__3912);
var y = cljs.core.first(cljs.core.next(arglist__3912));
var more = cljs.core.rest(cljs.core.next(arglist__3912));
return G__3908__delegate.call(this, x, y, more);
});
return G__3908;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3904.call(this,x);
case  2 :
return _EQ__EQ___3905.call(this,x,y);
default:
return _EQ__EQ___3906.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3906.cljs$lang$applyTo;
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
var n__3913 = n;
var xs__3914 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3822__auto____3915 = xs__3914;

if(cljs.core.truth_(and__3822__auto____3915))
{return (n__3913 > 0);
} else
{return and__3822__auto____3915;
}
})()))
{{
var G__3916 = (n__3913 - 1);
var G__3917 = cljs.core.next.call(null,xs__3914);
n__3913 = G__3916;
xs__3914 = G__3917;
continue;
}
} else
{return xs__3914;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3922 = null;
var G__3922__3923 = (function (coll,n){
var temp__3971__auto____3918 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3971__auto____3918))
{var xs__3919 = temp__3971__auto____3918;

return cljs.core.first.call(null,xs__3919);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3922__3924 = (function (coll,n,not_found){
var temp__3971__auto____3920 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3971__auto____3920))
{var xs__3921 = temp__3971__auto____3920;

return cljs.core.first.call(null,xs__3921);
} else
{return not_found;
}
});
G__3922 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3922__3923.call(this,coll,n);
case  3 :
return G__3922__3924.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3922;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3926 = (function (){
return "";
});
var str_STAR___3927 = (function (x){
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
var str_STAR___3928 = (function() { 
var G__3930__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3931 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3932 = cljs.core.next.call(null,more);
sb = G__3931;
more = G__3932;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3930 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3930__delegate.call(this, x, ys);
};
G__3930.cljs$lang$maxFixedArity = 1;
G__3930.cljs$lang$applyTo = (function (arglist__3933){
var x = cljs.core.first(arglist__3933);
var ys = cljs.core.rest(arglist__3933);
return G__3930__delegate.call(this, x, ys);
});
return G__3930;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3926.call(this);
case  1 :
return str_STAR___3927.call(this,x);
default:
return str_STAR___3928.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3928.cljs$lang$applyTo;
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
var str__3934 = (function (){
return "";
});
var str__3935 = (function (x){
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
var str__3936 = (function() { 
var G__3938__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3939 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__3940 = cljs.core.next.call(null,more);
sb = G__3939;
more = G__3940;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__3938 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3938__delegate.call(this, x, ys);
};
G__3938.cljs$lang$maxFixedArity = 1;
G__3938.cljs$lang$applyTo = (function (arglist__3941){
var x = cljs.core.first(arglist__3941);
var ys = cljs.core.rest(arglist__3941);
return G__3938__delegate.call(this, x, ys);
});
return G__3938;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3934.call(this);
case  1 :
return str__3935.call(this,x);
default:
return str__3936.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3936.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3942 = (function (s,start){
return s.substring(start);
});
var subs__3943 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3942.call(this,s,start);
case  3 :
return subs__3943.call(this,s,start,end);
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
var symbol__3945 = (function (name){
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
var symbol__3946 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3945.call(this,ns);
case  2 :
return symbol__3946.call(this,ns,name);
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
var keyword__3948 = (function (name){
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
var keyword__3949 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3948.call(this,ns);
case  2 :
return keyword__3949.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3951 = cljs.core.seq.call(null,x);
var ys__3952 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__3951 === null)))
{return (ys__3952 === null);
} else
{if(cljs.core.truth_((ys__3952 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3951),cljs.core.first.call(null,ys__3952))))
{{
var G__3953 = cljs.core.next.call(null,xs__3951);
var G__3954 = cljs.core.next.call(null,ys__3952);
xs__3951 = G__3953;
ys__3952 = G__3954;
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
return cljs.core.reduce.call(null,(function (p1__3955_SHARP_,p2__3956_SHARP_){
return cljs.core.hash_combine.call(null,p1__3955_SHARP_,cljs.core.hash.call(null,p2__3956_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3957__3958 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3957__3958))
{var G__3960__3962 = cljs.core.first.call(null,G__3957__3958);
var vec__3961__3963 = G__3960__3962;
var key_name__3964 = cljs.core.nth.call(null,vec__3961__3963,0,null);
var f__3965 = cljs.core.nth.call(null,vec__3961__3963,1,null);
var G__3957__3966 = G__3957__3958;

var G__3960__3967 = G__3960__3962;
var G__3957__3968 = G__3957__3966;

while(true){
var vec__3969__3970 = G__3960__3967;
var key_name__3971 = cljs.core.nth.call(null,vec__3969__3970,0,null);
var f__3972 = cljs.core.nth.call(null,vec__3969__3970,1,null);
var G__3957__3973 = G__3957__3968;

var str_name__3974 = cljs.core.name.call(null,key_name__3971);

obj[str_name__3974] = f__3972;
var temp__3974__auto____3975 = cljs.core.next.call(null,G__3957__3973);

if(cljs.core.truth_(temp__3974__auto____3975))
{var G__3957__3976 = temp__3974__auto____3975;

{
var G__3977 = cljs.core.first.call(null,G__3957__3976);
var G__3978 = G__3957__3976;
G__3960__3967 = G__3977;
G__3957__3968 = G__3978;
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
var this__3979 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3980 = this;
return (new cljs.core.List(this__3980.meta,o,coll,(this__3980.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3981 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3982 = this;
return this__3982.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3983 = this;
return this__3983.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3984 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3985 = this;
return this__3985.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3986 = this;
return this__3986.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3987 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3988 = this;
return (new cljs.core.List(meta,this__3988.first,this__3988.rest,this__3988.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3989 = this;
return this__3989.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3990 = this;
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
var this__3991 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3992 = this;
return (new cljs.core.List(this__3992.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3993 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3994 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3995 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3996 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3997 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3998 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3999 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4000 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4001 = this;
return this__4001.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4002 = this;
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
list.cljs$lang$applyTo = (function (arglist__4003){
var items = cljs.core.seq( arglist__4003 );;
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
var this__4004 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4005 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4006 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4007 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4007.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4008 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4009 = this;
return this__4009.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4010 = this;
if(cljs.core.truth_((this__4010.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__4010.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4011 = this;
return this__4011.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4012 = this;
return (new cljs.core.Cons(meta,this__4012.first,this__4012.rest));
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
var G__4013 = null;
var G__4013__4014 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__4013__4015 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__4013 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__4013__4014.call(this,string,f);
case  3 :
return G__4013__4015.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4013;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__4017 = null;
var G__4017__4018 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__4017__4019 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__4017 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__4017__4018.call(this,string,k);
case  3 :
return G__4017__4019.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4017;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__4021 = null;
var G__4021__4022 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__4021__4023 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__4021 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__4021__4022.call(this,string,n);
case  3 :
return G__4021__4023.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4021;
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
var G__4031 = null;
var G__4031__4032 = (function (tsym4025,coll){
var tsym4025__4027 = this;

var this$__4028 = tsym4025__4027;

return cljs.core.get.call(null,coll,this$__4028.toString());
});
var G__4031__4033 = (function (tsym4026,coll,not_found){
var tsym4026__4029 = this;

var this$__4030 = tsym4026__4029;

return cljs.core.get.call(null,coll,this$__4030.toString(),not_found);
});
G__4031 = function(tsym4026,coll,not_found){
switch(arguments.length){
case  2 :
return G__4031__4032.call(this,tsym4026,coll);
case  3 :
return G__4031__4033.call(this,tsym4026,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4031;
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
var x__4035 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__4035;
} else
{lazy_seq.x = x__4035.call(null);
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
var this__4036 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4037 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4038 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4039 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4039.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4040 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4041 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4042 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4043 = this;
return this__4043.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4044 = this;
return (new cljs.core.LazySeq(meta,this__4044.realized,this__4044.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__4045 = [];

var s__4046 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4046)))
{ary__4045.push(cljs.core.first.call(null,s__4046));
{
var G__4047 = cljs.core.next.call(null,s__4046);
s__4046 = G__4047;
continue;
}
} else
{return ary__4045;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__4048 = s;
var i__4049 = n;
var sum__4050 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3822__auto____4051 = (i__4049 > 0);

if(cljs.core.truth_(and__3822__auto____4051))
{return cljs.core.seq.call(null,s__4048);
} else
{return and__3822__auto____4051;
}
})()))
{{
var G__4052 = cljs.core.next.call(null,s__4048);
var G__4053 = (i__4049 - 1);
var G__4054 = (sum__4050 + 1);
s__4048 = G__4052;
i__4049 = G__4053;
sum__4050 = G__4054;
continue;
}
} else
{return sum__4050;
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
var concat__4058 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__4059 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__4060 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4055 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__4055))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4055),concat.call(null,cljs.core.rest.call(null,s__4055),y));
} else
{return y;
}
})));
});
var concat__4061 = (function() { 
var G__4063__delegate = function (x,y,zs){
var cat__4057 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__4056 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__4056))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__4056),cat.call(null,cljs.core.rest.call(null,xys__4056),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__4057.call(null,concat.call(null,x,y),zs);
};
var G__4063 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4063__delegate.call(this, x, y, zs);
};
G__4063.cljs$lang$maxFixedArity = 2;
G__4063.cljs$lang$applyTo = (function (arglist__4064){
var x = cljs.core.first(arglist__4064);
var y = cljs.core.first(cljs.core.next(arglist__4064));
var zs = cljs.core.rest(cljs.core.next(arglist__4064));
return G__4063__delegate.call(this, x, y, zs);
});
return G__4063;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__4058.call(this);
case  1 :
return concat__4059.call(this,x);
case  2 :
return concat__4060.call(this,x,y);
default:
return concat__4061.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__4061.cljs$lang$applyTo;
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
var list_STAR___4065 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___4066 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___4067 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4068 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___4069 = (function() { 
var G__4071__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__4071 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4071__delegate.call(this, a, b, c, d, more);
};
G__4071.cljs$lang$maxFixedArity = 4;
G__4071.cljs$lang$applyTo = (function (arglist__4072){
var a = cljs.core.first(arglist__4072);
var b = cljs.core.first(cljs.core.next(arglist__4072));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4072)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4072))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4072))));
return G__4071__delegate.call(this, a, b, c, d, more);
});
return G__4071;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___4065.call(this,a);
case  2 :
return list_STAR___4066.call(this,a,b);
case  3 :
return list_STAR___4067.call(this,a,b,c);
case  4 :
return list_STAR___4068.call(this,a,b,c,d);
default:
return list_STAR___4069.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___4069.cljs$lang$applyTo;
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
var apply__4082 = (function (f,args){
var fixed_arity__4073 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__4073 + 1)) <= fixed_arity__4073)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__4083 = (function (f,x,args){
var arglist__4074 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__4075 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4074,fixed_arity__4075) <= fixed_arity__4075)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4074));
} else
{return f.cljs$lang$applyTo(arglist__4074);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4074));
}
});
var apply__4084 = (function (f,x,y,args){
var arglist__4076 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__4077 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4076,fixed_arity__4077) <= fixed_arity__4077)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4076));
} else
{return f.cljs$lang$applyTo(arglist__4076);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4076));
}
});
var apply__4085 = (function (f,x,y,z,args){
var arglist__4078 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__4079 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4078,fixed_arity__4079) <= fixed_arity__4079)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4078));
} else
{return f.cljs$lang$applyTo(arglist__4078);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4078));
}
});
var apply__4086 = (function() { 
var G__4088__delegate = function (f,a,b,c,d,args){
var arglist__4080 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__4081 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4080,fixed_arity__4081) <= fixed_arity__4081)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4080));
} else
{return f.cljs$lang$applyTo(arglist__4080);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4080));
}
};
var G__4088 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4088__delegate.call(this, f, a, b, c, d, args);
};
G__4088.cljs$lang$maxFixedArity = 5;
G__4088.cljs$lang$applyTo = (function (arglist__4089){
var f = cljs.core.first(arglist__4089);
var a = cljs.core.first(cljs.core.next(arglist__4089));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4089)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4089))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4089)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4089)))));
return G__4088__delegate.call(this, f, a, b, c, d, args);
});
return G__4088;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__4082.call(this,f,a);
case  3 :
return apply__4083.call(this,f,a,b);
case  4 :
return apply__4084.call(this,f,a,b,c);
case  5 :
return apply__4085.call(this,f,a,b,c,d);
default:
return apply__4086.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__4086.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__4090){
var obj = cljs.core.first(arglist__4090);
var f = cljs.core.first(cljs.core.next(arglist__4090));
var args = cljs.core.rest(cljs.core.next(arglist__4090));
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
var not_EQ___4091 = (function (x){
return false;
});
var not_EQ___4092 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___4093 = (function() { 
var G__4095__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__4095 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4095__delegate.call(this, x, y, more);
};
G__4095.cljs$lang$maxFixedArity = 2;
G__4095.cljs$lang$applyTo = (function (arglist__4096){
var x = cljs.core.first(arglist__4096);
var y = cljs.core.first(cljs.core.next(arglist__4096));
var more = cljs.core.rest(cljs.core.next(arglist__4096));
return G__4095__delegate.call(this, x, y, more);
});
return G__4095;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___4091.call(this,x);
case  2 :
return not_EQ___4092.call(this,x,y);
default:
return not_EQ___4093.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___4093.cljs$lang$applyTo;
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
var G__4097 = pred;
var G__4098 = cljs.core.next.call(null,coll);
pred = G__4097;
coll = G__4098;
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
{var or__3824__auto____4099 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3824__auto____4099))
{return or__3824__auto____4099;
} else
{{
var G__4100 = pred;
var G__4101 = cljs.core.next.call(null,coll);
pred = G__4100;
coll = G__4101;
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
var G__4102 = null;
var G__4102__4103 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__4102__4104 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__4102__4105 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__4102__4106 = (function() { 
var G__4108__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__4108 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4108__delegate.call(this, x, y, zs);
};
G__4108.cljs$lang$maxFixedArity = 2;
G__4108.cljs$lang$applyTo = (function (arglist__4109){
var x = cljs.core.first(arglist__4109);
var y = cljs.core.first(cljs.core.next(arglist__4109));
var zs = cljs.core.rest(cljs.core.next(arglist__4109));
return G__4108__delegate.call(this, x, y, zs);
});
return G__4108;
})()
;
G__4102 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__4102__4103.call(this);
case  1 :
return G__4102__4104.call(this,x);
case  2 :
return G__4102__4105.call(this,x,y);
default:
return G__4102__4106.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4102.cljs$lang$maxFixedArity = 2;
G__4102.cljs$lang$applyTo = G__4102__4106.cljs$lang$applyTo;
return G__4102;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__4110__delegate = function (args){
return x;
};
var G__4110 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4110__delegate.call(this, args);
};
G__4110.cljs$lang$maxFixedArity = 0;
G__4110.cljs$lang$applyTo = (function (arglist__4111){
var args = cljs.core.seq( arglist__4111 );;
return G__4110__delegate.call(this, args);
});
return G__4110;
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
var comp__4115 = (function (){
return cljs.core.identity;
});
var comp__4116 = (function (f){
return f;
});
var comp__4117 = (function (f,g){
return (function() {
var G__4121 = null;
var G__4121__4122 = (function (){
return f.call(null,g.call(null));
});
var G__4121__4123 = (function (x){
return f.call(null,g.call(null,x));
});
var G__4121__4124 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__4121__4125 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__4121__4126 = (function() { 
var G__4128__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4128 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4128__delegate.call(this, x, y, z, args);
};
G__4128.cljs$lang$maxFixedArity = 3;
G__4128.cljs$lang$applyTo = (function (arglist__4129){
var x = cljs.core.first(arglist__4129);
var y = cljs.core.first(cljs.core.next(arglist__4129));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4129)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4129)));
return G__4128__delegate.call(this, x, y, z, args);
});
return G__4128;
})()
;
G__4121 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4121__4122.call(this);
case  1 :
return G__4121__4123.call(this,x);
case  2 :
return G__4121__4124.call(this,x,y);
case  3 :
return G__4121__4125.call(this,x,y,z);
default:
return G__4121__4126.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4121.cljs$lang$maxFixedArity = 3;
G__4121.cljs$lang$applyTo = G__4121__4126.cljs$lang$applyTo;
return G__4121;
})()
});
var comp__4118 = (function (f,g,h){
return (function() {
var G__4130 = null;
var G__4130__4131 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__4130__4132 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__4130__4133 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__4130__4134 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__4130__4135 = (function() { 
var G__4137__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__4137 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4137__delegate.call(this, x, y, z, args);
};
G__4137.cljs$lang$maxFixedArity = 3;
G__4137.cljs$lang$applyTo = (function (arglist__4138){
var x = cljs.core.first(arglist__4138);
var y = cljs.core.first(cljs.core.next(arglist__4138));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4138)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4138)));
return G__4137__delegate.call(this, x, y, z, args);
});
return G__4137;
})()
;
G__4130 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4130__4131.call(this);
case  1 :
return G__4130__4132.call(this,x);
case  2 :
return G__4130__4133.call(this,x,y);
case  3 :
return G__4130__4134.call(this,x,y,z);
default:
return G__4130__4135.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4130.cljs$lang$maxFixedArity = 3;
G__4130.cljs$lang$applyTo = G__4130__4135.cljs$lang$applyTo;
return G__4130;
})()
});
var comp__4119 = (function() { 
var G__4139__delegate = function (f1,f2,f3,fs){
var fs__4112 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__4140__delegate = function (args){
var ret__4113 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__4112),args);
var fs__4114 = cljs.core.next.call(null,fs__4112);

while(true){
if(cljs.core.truth_(fs__4114))
{{
var G__4141 = cljs.core.first.call(null,fs__4114).call(null,ret__4113);
var G__4142 = cljs.core.next.call(null,fs__4114);
ret__4113 = G__4141;
fs__4114 = G__4142;
continue;
}
} else
{return ret__4113;
}
break;
}
};
var G__4140 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4140__delegate.call(this, args);
};
G__4140.cljs$lang$maxFixedArity = 0;
G__4140.cljs$lang$applyTo = (function (arglist__4143){
var args = cljs.core.seq( arglist__4143 );;
return G__4140__delegate.call(this, args);
});
return G__4140;
})()
;
};
var G__4139 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4139__delegate.call(this, f1, f2, f3, fs);
};
G__4139.cljs$lang$maxFixedArity = 3;
G__4139.cljs$lang$applyTo = (function (arglist__4144){
var f1 = cljs.core.first(arglist__4144);
var f2 = cljs.core.first(cljs.core.next(arglist__4144));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4144)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4144)));
return G__4139__delegate.call(this, f1, f2, f3, fs);
});
return G__4139;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__4115.call(this);
case  1 :
return comp__4116.call(this,f1);
case  2 :
return comp__4117.call(this,f1,f2);
case  3 :
return comp__4118.call(this,f1,f2,f3);
default:
return comp__4119.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4119.cljs$lang$applyTo;
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
var partial__4145 = (function (f,arg1){
return (function() { 
var G__4150__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__4150 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4150__delegate.call(this, args);
};
G__4150.cljs$lang$maxFixedArity = 0;
G__4150.cljs$lang$applyTo = (function (arglist__4151){
var args = cljs.core.seq( arglist__4151 );;
return G__4150__delegate.call(this, args);
});
return G__4150;
})()
;
});
var partial__4146 = (function (f,arg1,arg2){
return (function() { 
var G__4152__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__4152 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4152__delegate.call(this, args);
};
G__4152.cljs$lang$maxFixedArity = 0;
G__4152.cljs$lang$applyTo = (function (arglist__4153){
var args = cljs.core.seq( arglist__4153 );;
return G__4152__delegate.call(this, args);
});
return G__4152;
})()
;
});
var partial__4147 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__4154__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__4154 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4154__delegate.call(this, args);
};
G__4154.cljs$lang$maxFixedArity = 0;
G__4154.cljs$lang$applyTo = (function (arglist__4155){
var args = cljs.core.seq( arglist__4155 );;
return G__4154__delegate.call(this, args);
});
return G__4154;
})()
;
});
var partial__4148 = (function() { 
var G__4156__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__4157__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__4157 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4157__delegate.call(this, args);
};
G__4157.cljs$lang$maxFixedArity = 0;
G__4157.cljs$lang$applyTo = (function (arglist__4158){
var args = cljs.core.seq( arglist__4158 );;
return G__4157__delegate.call(this, args);
});
return G__4157;
})()
;
};
var G__4156 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4156__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__4156.cljs$lang$maxFixedArity = 4;
G__4156.cljs$lang$applyTo = (function (arglist__4159){
var f = cljs.core.first(arglist__4159);
var arg1 = cljs.core.first(cljs.core.next(arglist__4159));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4159)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4159))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4159))));
return G__4156__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__4156;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__4145.call(this,f,arg1);
case  3 :
return partial__4146.call(this,f,arg1,arg2);
case  4 :
return partial__4147.call(this,f,arg1,arg2,arg3);
default:
return partial__4148.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__4148.cljs$lang$applyTo;
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
var fnil__4160 = (function (f,x){
return (function() {
var G__4164 = null;
var G__4164__4165 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__4164__4166 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__4164__4167 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__4164__4168 = (function() { 
var G__4170__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__4170 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4170__delegate.call(this, a, b, c, ds);
};
G__4170.cljs$lang$maxFixedArity = 3;
G__4170.cljs$lang$applyTo = (function (arglist__4171){
var a = cljs.core.first(arglist__4171);
var b = cljs.core.first(cljs.core.next(arglist__4171));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4171)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4171)));
return G__4170__delegate.call(this, a, b, c, ds);
});
return G__4170;
})()
;
G__4164 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__4164__4165.call(this,a);
case  2 :
return G__4164__4166.call(this,a,b);
case  3 :
return G__4164__4167.call(this,a,b,c);
default:
return G__4164__4168.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4164.cljs$lang$maxFixedArity = 3;
G__4164.cljs$lang$applyTo = G__4164__4168.cljs$lang$applyTo;
return G__4164;
})()
});
var fnil__4161 = (function (f,x,y){
return (function() {
var G__4172 = null;
var G__4172__4173 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__4172__4174 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__4172__4175 = (function() { 
var G__4177__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__4177 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4177__delegate.call(this, a, b, c, ds);
};
G__4177.cljs$lang$maxFixedArity = 3;
G__4177.cljs$lang$applyTo = (function (arglist__4178){
var a = cljs.core.first(arglist__4178);
var b = cljs.core.first(cljs.core.next(arglist__4178));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4178)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4178)));
return G__4177__delegate.call(this, a, b, c, ds);
});
return G__4177;
})()
;
G__4172 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__4172__4173.call(this,a,b);
case  3 :
return G__4172__4174.call(this,a,b,c);
default:
return G__4172__4175.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4172.cljs$lang$maxFixedArity = 3;
G__4172.cljs$lang$applyTo = G__4172__4175.cljs$lang$applyTo;
return G__4172;
})()
});
var fnil__4162 = (function (f,x,y,z){
return (function() {
var G__4179 = null;
var G__4179__4180 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__4179__4181 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__4179__4182 = (function() { 
var G__4184__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__4184 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4184__delegate.call(this, a, b, c, ds);
};
G__4184.cljs$lang$maxFixedArity = 3;
G__4184.cljs$lang$applyTo = (function (arglist__4185){
var a = cljs.core.first(arglist__4185);
var b = cljs.core.first(cljs.core.next(arglist__4185));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4185)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4185)));
return G__4184__delegate.call(this, a, b, c, ds);
});
return G__4184;
})()
;
G__4179 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__4179__4180.call(this,a,b);
case  3 :
return G__4179__4181.call(this,a,b,c);
default:
return G__4179__4182.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4179.cljs$lang$maxFixedArity = 3;
G__4179.cljs$lang$applyTo = G__4179__4182.cljs$lang$applyTo;
return G__4179;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__4160.call(this,f,x);
case  3 :
return fnil__4161.call(this,f,x,y);
case  4 :
return fnil__4162.call(this,f,x,y,z);
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
var mapi__4188 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4186 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4186))
{var s__4187 = temp__3974__auto____4186;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__4187)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__4187)));
} else
{return null;
}
})));
});

return mapi__4188.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4189 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4189))
{var s__4190 = temp__3974__auto____4189;

var x__4191 = f.call(null,cljs.core.first.call(null,s__4190));

if(cljs.core.truth_((x__4191 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__4190));
} else
{return cljs.core.cons.call(null,x__4191,keep.call(null,f,cljs.core.rest.call(null,s__4190)));
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
var keepi__4201 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4198 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4198))
{var s__4199 = temp__3974__auto____4198;

var x__4200 = f.call(null,idx,cljs.core.first.call(null,s__4199));

if(cljs.core.truth_((x__4200 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__4199));
} else
{return cljs.core.cons.call(null,x__4200,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__4199)));
}
} else
{return null;
}
})));
});

return keepi__4201.call(null,0,coll);
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
var every_pred__4246 = (function (p){
return (function() {
var ep1 = null;
var ep1__4251 = (function (){
return true;
});
var ep1__4252 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__4253 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4208 = p.call(null,x);

if(cljs.core.truth_(and__3822__auto____4208))
{return p.call(null,y);
} else
{return and__3822__auto____4208;
}
})());
});
var ep1__4254 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4209 = p.call(null,x);

if(cljs.core.truth_(and__3822__auto____4209))
{var and__3822__auto____4210 = p.call(null,y);

if(cljs.core.truth_(and__3822__auto____4210))
{return p.call(null,z);
} else
{return and__3822__auto____4210;
}
} else
{return and__3822__auto____4209;
}
})());
});
var ep1__4255 = (function() { 
var G__4257__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4211 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____4211))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____4211;
}
})());
};
var G__4257 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4257__delegate.call(this, x, y, z, args);
};
G__4257.cljs$lang$maxFixedArity = 3;
G__4257.cljs$lang$applyTo = (function (arglist__4258){
var x = cljs.core.first(arglist__4258);
var y = cljs.core.first(cljs.core.next(arglist__4258));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4258)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4258)));
return G__4257__delegate.call(this, x, y, z, args);
});
return G__4257;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__4251.call(this);
case  1 :
return ep1__4252.call(this,x);
case  2 :
return ep1__4253.call(this,x,y);
case  3 :
return ep1__4254.call(this,x,y,z);
default:
return ep1__4255.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4255.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__4247 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__4259 = (function (){
return true;
});
var ep2__4260 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4212 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____4212))
{return p2.call(null,x);
} else
{return and__3822__auto____4212;
}
})());
});
var ep2__4261 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4213 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____4213))
{var and__3822__auto____4214 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____4214))
{var and__3822__auto____4215 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____4215))
{return p2.call(null,y);
} else
{return and__3822__auto____4215;
}
} else
{return and__3822__auto____4214;
}
} else
{return and__3822__auto____4213;
}
})());
});
var ep2__4262 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4216 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____4216))
{var and__3822__auto____4217 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____4217))
{var and__3822__auto____4218 = p1.call(null,z);

if(cljs.core.truth_(and__3822__auto____4218))
{var and__3822__auto____4219 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____4219))
{var and__3822__auto____4220 = p2.call(null,y);

if(cljs.core.truth_(and__3822__auto____4220))
{return p2.call(null,z);
} else
{return and__3822__auto____4220;
}
} else
{return and__3822__auto____4219;
}
} else
{return and__3822__auto____4218;
}
} else
{return and__3822__auto____4217;
}
} else
{return and__3822__auto____4216;
}
})());
});
var ep2__4263 = (function() { 
var G__4265__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4221 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____4221))
{return cljs.core.every_QMARK_.call(null,(function (p1__4192_SHARP_){
var and__3822__auto____4222 = p1.call(null,p1__4192_SHARP_);

if(cljs.core.truth_(and__3822__auto____4222))
{return p2.call(null,p1__4192_SHARP_);
} else
{return and__3822__auto____4222;
}
}),args);
} else
{return and__3822__auto____4221;
}
})());
};
var G__4265 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4265__delegate.call(this, x, y, z, args);
};
G__4265.cljs$lang$maxFixedArity = 3;
G__4265.cljs$lang$applyTo = (function (arglist__4266){
var x = cljs.core.first(arglist__4266);
var y = cljs.core.first(cljs.core.next(arglist__4266));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4266)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4266)));
return G__4265__delegate.call(this, x, y, z, args);
});
return G__4265;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__4259.call(this);
case  1 :
return ep2__4260.call(this,x);
case  2 :
return ep2__4261.call(this,x,y);
case  3 :
return ep2__4262.call(this,x,y,z);
default:
return ep2__4263.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4263.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__4248 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__4267 = (function (){
return true;
});
var ep3__4268 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4223 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____4223))
{var and__3822__auto____4224 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____4224))
{return p3.call(null,x);
} else
{return and__3822__auto____4224;
}
} else
{return and__3822__auto____4223;
}
})());
});
var ep3__4269 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4225 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____4225))
{var and__3822__auto____4226 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____4226))
{var and__3822__auto____4227 = p3.call(null,x);

if(cljs.core.truth_(and__3822__auto____4227))
{var and__3822__auto____4228 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____4228))
{var and__3822__auto____4229 = p2.call(null,y);

if(cljs.core.truth_(and__3822__auto____4229))
{return p3.call(null,y);
} else
{return and__3822__auto____4229;
}
} else
{return and__3822__auto____4228;
}
} else
{return and__3822__auto____4227;
}
} else
{return and__3822__auto____4226;
}
} else
{return and__3822__auto____4225;
}
})());
});
var ep3__4270 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4230 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____4230))
{var and__3822__auto____4231 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____4231))
{var and__3822__auto____4232 = p3.call(null,x);

if(cljs.core.truth_(and__3822__auto____4232))
{var and__3822__auto____4233 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____4233))
{var and__3822__auto____4234 = p2.call(null,y);

if(cljs.core.truth_(and__3822__auto____4234))
{var and__3822__auto____4235 = p3.call(null,y);

if(cljs.core.truth_(and__3822__auto____4235))
{var and__3822__auto____4236 = p1.call(null,z);

if(cljs.core.truth_(and__3822__auto____4236))
{var and__3822__auto____4237 = p2.call(null,z);

if(cljs.core.truth_(and__3822__auto____4237))
{return p3.call(null,z);
} else
{return and__3822__auto____4237;
}
} else
{return and__3822__auto____4236;
}
} else
{return and__3822__auto____4235;
}
} else
{return and__3822__auto____4234;
}
} else
{return and__3822__auto____4233;
}
} else
{return and__3822__auto____4232;
}
} else
{return and__3822__auto____4231;
}
} else
{return and__3822__auto____4230;
}
})());
});
var ep3__4271 = (function() { 
var G__4273__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4238 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____4238))
{return cljs.core.every_QMARK_.call(null,(function (p1__4193_SHARP_){
var and__3822__auto____4239 = p1.call(null,p1__4193_SHARP_);

if(cljs.core.truth_(and__3822__auto____4239))
{var and__3822__auto____4240 = p2.call(null,p1__4193_SHARP_);

if(cljs.core.truth_(and__3822__auto____4240))
{return p3.call(null,p1__4193_SHARP_);
} else
{return and__3822__auto____4240;
}
} else
{return and__3822__auto____4239;
}
}),args);
} else
{return and__3822__auto____4238;
}
})());
};
var G__4273 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4273__delegate.call(this, x, y, z, args);
};
G__4273.cljs$lang$maxFixedArity = 3;
G__4273.cljs$lang$applyTo = (function (arglist__4274){
var x = cljs.core.first(arglist__4274);
var y = cljs.core.first(cljs.core.next(arglist__4274));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4274)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4274)));
return G__4273__delegate.call(this, x, y, z, args);
});
return G__4273;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__4267.call(this);
case  1 :
return ep3__4268.call(this,x);
case  2 :
return ep3__4269.call(this,x,y);
case  3 :
return ep3__4270.call(this,x,y,z);
default:
return ep3__4271.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4271.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__4249 = (function() { 
var G__4275__delegate = function (p1,p2,p3,ps){
var ps__4241 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__4276 = (function (){
return true;
});
var epn__4277 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__4194_SHARP_){
return p1__4194_SHARP_.call(null,x);
}),ps__4241);
});
var epn__4278 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__4195_SHARP_){
var and__3822__auto____4242 = p1__4195_SHARP_.call(null,x);

if(cljs.core.truth_(and__3822__auto____4242))
{return p1__4195_SHARP_.call(null,y);
} else
{return and__3822__auto____4242;
}
}),ps__4241);
});
var epn__4279 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__4196_SHARP_){
var and__3822__auto____4243 = p1__4196_SHARP_.call(null,x);

if(cljs.core.truth_(and__3822__auto____4243))
{var and__3822__auto____4244 = p1__4196_SHARP_.call(null,y);

if(cljs.core.truth_(and__3822__auto____4244))
{return p1__4196_SHARP_.call(null,z);
} else
{return and__3822__auto____4244;
}
} else
{return and__3822__auto____4243;
}
}),ps__4241);
});
var epn__4280 = (function() { 
var G__4282__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4245 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____4245))
{return cljs.core.every_QMARK_.call(null,(function (p1__4197_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__4197_SHARP_,args);
}),ps__4241);
} else
{return and__3822__auto____4245;
}
})());
};
var G__4282 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4282__delegate.call(this, x, y, z, args);
};
G__4282.cljs$lang$maxFixedArity = 3;
G__4282.cljs$lang$applyTo = (function (arglist__4283){
var x = cljs.core.first(arglist__4283);
var y = cljs.core.first(cljs.core.next(arglist__4283));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4283)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4283)));
return G__4282__delegate.call(this, x, y, z, args);
});
return G__4282;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__4276.call(this);
case  1 :
return epn__4277.call(this,x);
case  2 :
return epn__4278.call(this,x,y);
case  3 :
return epn__4279.call(this,x,y,z);
default:
return epn__4280.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4280.cljs$lang$applyTo;
return epn;
})()
};
var G__4275 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4275__delegate.call(this, p1, p2, p3, ps);
};
G__4275.cljs$lang$maxFixedArity = 3;
G__4275.cljs$lang$applyTo = (function (arglist__4284){
var p1 = cljs.core.first(arglist__4284);
var p2 = cljs.core.first(cljs.core.next(arglist__4284));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4284)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4284)));
return G__4275__delegate.call(this, p1, p2, p3, ps);
});
return G__4275;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__4246.call(this,p1);
case  2 :
return every_pred__4247.call(this,p1,p2);
case  3 :
return every_pred__4248.call(this,p1,p2,p3);
default:
return every_pred__4249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4249.cljs$lang$applyTo;
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
var some_fn__4324 = (function (p){
return (function() {
var sp1 = null;
var sp1__4329 = (function (){
return null;
});
var sp1__4330 = (function (x){
return p.call(null,x);
});
var sp1__4331 = (function (x,y){
var or__3824__auto____4286 = p.call(null,x);

if(cljs.core.truth_(or__3824__auto____4286))
{return or__3824__auto____4286;
} else
{return p.call(null,y);
}
});
var sp1__4332 = (function (x,y,z){
var or__3824__auto____4287 = p.call(null,x);

if(cljs.core.truth_(or__3824__auto____4287))
{return or__3824__auto____4287;
} else
{var or__3824__auto____4288 = p.call(null,y);

if(cljs.core.truth_(or__3824__auto____4288))
{return or__3824__auto____4288;
} else
{return p.call(null,z);
}
}
});
var sp1__4333 = (function() { 
var G__4335__delegate = function (x,y,z,args){
var or__3824__auto____4289 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____4289))
{return or__3824__auto____4289;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__4335 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4335__delegate.call(this, x, y, z, args);
};
G__4335.cljs$lang$maxFixedArity = 3;
G__4335.cljs$lang$applyTo = (function (arglist__4336){
var x = cljs.core.first(arglist__4336);
var y = cljs.core.first(cljs.core.next(arglist__4336));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4336)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4336)));
return G__4335__delegate.call(this, x, y, z, args);
});
return G__4335;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__4329.call(this);
case  1 :
return sp1__4330.call(this,x);
case  2 :
return sp1__4331.call(this,x,y);
case  3 :
return sp1__4332.call(this,x,y,z);
default:
return sp1__4333.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4333.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__4325 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__4337 = (function (){
return null;
});
var sp2__4338 = (function (x){
var or__3824__auto____4290 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____4290))
{return or__3824__auto____4290;
} else
{return p2.call(null,x);
}
});
var sp2__4339 = (function (x,y){
var or__3824__auto____4291 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____4291))
{return or__3824__auto____4291;
} else
{var or__3824__auto____4292 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____4292))
{return or__3824__auto____4292;
} else
{var or__3824__auto____4293 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____4293))
{return or__3824__auto____4293;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__4340 = (function (x,y,z){
var or__3824__auto____4294 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____4294))
{return or__3824__auto____4294;
} else
{var or__3824__auto____4295 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____4295))
{return or__3824__auto____4295;
} else
{var or__3824__auto____4296 = p1.call(null,z);

if(cljs.core.truth_(or__3824__auto____4296))
{return or__3824__auto____4296;
} else
{var or__3824__auto____4297 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____4297))
{return or__3824__auto____4297;
} else
{var or__3824__auto____4298 = p2.call(null,y);

if(cljs.core.truth_(or__3824__auto____4298))
{return or__3824__auto____4298;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4341 = (function() { 
var G__4343__delegate = function (x,y,z,args){
var or__3824__auto____4299 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____4299))
{return or__3824__auto____4299;
} else
{return cljs.core.some.call(null,(function (p1__4202_SHARP_){
var or__3824__auto____4300 = p1.call(null,p1__4202_SHARP_);

if(cljs.core.truth_(or__3824__auto____4300))
{return or__3824__auto____4300;
} else
{return p2.call(null,p1__4202_SHARP_);
}
}),args);
}
};
var G__4343 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4343__delegate.call(this, x, y, z, args);
};
G__4343.cljs$lang$maxFixedArity = 3;
G__4343.cljs$lang$applyTo = (function (arglist__4344){
var x = cljs.core.first(arglist__4344);
var y = cljs.core.first(cljs.core.next(arglist__4344));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4344)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4344)));
return G__4343__delegate.call(this, x, y, z, args);
});
return G__4343;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__4337.call(this);
case  1 :
return sp2__4338.call(this,x);
case  2 :
return sp2__4339.call(this,x,y);
case  3 :
return sp2__4340.call(this,x,y,z);
default:
return sp2__4341.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4341.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__4326 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__4345 = (function (){
return null;
});
var sp3__4346 = (function (x){
var or__3824__auto____4301 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____4301))
{return or__3824__auto____4301;
} else
{var or__3824__auto____4302 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____4302))
{return or__3824__auto____4302;
} else
{return p3.call(null,x);
}
}
});
var sp3__4347 = (function (x,y){
var or__3824__auto____4303 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____4303))
{return or__3824__auto____4303;
} else
{var or__3824__auto____4304 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____4304))
{return or__3824__auto____4304;
} else
{var or__3824__auto____4305 = p3.call(null,x);

if(cljs.core.truth_(or__3824__auto____4305))
{return or__3824__auto____4305;
} else
{var or__3824__auto____4306 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____4306))
{return or__3824__auto____4306;
} else
{var or__3824__auto____4307 = p2.call(null,y);

if(cljs.core.truth_(or__3824__auto____4307))
{return or__3824__auto____4307;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__4348 = (function (x,y,z){
var or__3824__auto____4308 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____4308))
{return or__3824__auto____4308;
} else
{var or__3824__auto____4309 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____4309))
{return or__3824__auto____4309;
} else
{var or__3824__auto____4310 = p3.call(null,x);

if(cljs.core.truth_(or__3824__auto____4310))
{return or__3824__auto____4310;
} else
{var or__3824__auto____4311 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____4311))
{return or__3824__auto____4311;
} else
{var or__3824__auto____4312 = p2.call(null,y);

if(cljs.core.truth_(or__3824__auto____4312))
{return or__3824__auto____4312;
} else
{var or__3824__auto____4313 = p3.call(null,y);

if(cljs.core.truth_(or__3824__auto____4313))
{return or__3824__auto____4313;
} else
{var or__3824__auto____4314 = p1.call(null,z);

if(cljs.core.truth_(or__3824__auto____4314))
{return or__3824__auto____4314;
} else
{var or__3824__auto____4315 = p2.call(null,z);

if(cljs.core.truth_(or__3824__auto____4315))
{return or__3824__auto____4315;
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
var sp3__4349 = (function() { 
var G__4351__delegate = function (x,y,z,args){
var or__3824__auto____4316 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____4316))
{return or__3824__auto____4316;
} else
{return cljs.core.some.call(null,(function (p1__4203_SHARP_){
var or__3824__auto____4317 = p1.call(null,p1__4203_SHARP_);

if(cljs.core.truth_(or__3824__auto____4317))
{return or__3824__auto____4317;
} else
{var or__3824__auto____4318 = p2.call(null,p1__4203_SHARP_);

if(cljs.core.truth_(or__3824__auto____4318))
{return or__3824__auto____4318;
} else
{return p3.call(null,p1__4203_SHARP_);
}
}
}),args);
}
};
var G__4351 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4351__delegate.call(this, x, y, z, args);
};
G__4351.cljs$lang$maxFixedArity = 3;
G__4351.cljs$lang$applyTo = (function (arglist__4352){
var x = cljs.core.first(arglist__4352);
var y = cljs.core.first(cljs.core.next(arglist__4352));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4352)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4352)));
return G__4351__delegate.call(this, x, y, z, args);
});
return G__4351;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__4345.call(this);
case  1 :
return sp3__4346.call(this,x);
case  2 :
return sp3__4347.call(this,x,y);
case  3 :
return sp3__4348.call(this,x,y,z);
default:
return sp3__4349.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4349.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__4327 = (function() { 
var G__4353__delegate = function (p1,p2,p3,ps){
var ps__4319 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__4354 = (function (){
return null;
});
var spn__4355 = (function (x){
return cljs.core.some.call(null,(function (p1__4204_SHARP_){
return p1__4204_SHARP_.call(null,x);
}),ps__4319);
});
var spn__4356 = (function (x,y){
return cljs.core.some.call(null,(function (p1__4205_SHARP_){
var or__3824__auto____4320 = p1__4205_SHARP_.call(null,x);

if(cljs.core.truth_(or__3824__auto____4320))
{return or__3824__auto____4320;
} else
{return p1__4205_SHARP_.call(null,y);
}
}),ps__4319);
});
var spn__4357 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__4206_SHARP_){
var or__3824__auto____4321 = p1__4206_SHARP_.call(null,x);

if(cljs.core.truth_(or__3824__auto____4321))
{return or__3824__auto____4321;
} else
{var or__3824__auto____4322 = p1__4206_SHARP_.call(null,y);

if(cljs.core.truth_(or__3824__auto____4322))
{return or__3824__auto____4322;
} else
{return p1__4206_SHARP_.call(null,z);
}
}
}),ps__4319);
});
var spn__4358 = (function() { 
var G__4360__delegate = function (x,y,z,args){
var or__3824__auto____4323 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____4323))
{return or__3824__auto____4323;
} else
{return cljs.core.some.call(null,(function (p1__4207_SHARP_){
return cljs.core.some.call(null,p1__4207_SHARP_,args);
}),ps__4319);
}
};
var G__4360 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4360__delegate.call(this, x, y, z, args);
};
G__4360.cljs$lang$maxFixedArity = 3;
G__4360.cljs$lang$applyTo = (function (arglist__4361){
var x = cljs.core.first(arglist__4361);
var y = cljs.core.first(cljs.core.next(arglist__4361));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4361)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4361)));
return G__4360__delegate.call(this, x, y, z, args);
});
return G__4360;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__4354.call(this);
case  1 :
return spn__4355.call(this,x);
case  2 :
return spn__4356.call(this,x,y);
case  3 :
return spn__4357.call(this,x,y,z);
default:
return spn__4358.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4358.cljs$lang$applyTo;
return spn;
})()
};
var G__4353 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4353__delegate.call(this, p1, p2, p3, ps);
};
G__4353.cljs$lang$maxFixedArity = 3;
G__4353.cljs$lang$applyTo = (function (arglist__4362){
var p1 = cljs.core.first(arglist__4362);
var p2 = cljs.core.first(cljs.core.next(arglist__4362));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4362)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4362)));
return G__4353__delegate.call(this, p1, p2, p3, ps);
});
return G__4353;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__4324.call(this,p1);
case  2 :
return some_fn__4325.call(this,p1,p2);
case  3 :
return some_fn__4326.call(this,p1,p2,p3);
default:
return some_fn__4327.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4327.cljs$lang$applyTo;
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
var map__4375 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4363 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4363))
{var s__4364 = temp__3974__auto____4363;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__4364)),map.call(null,f,cljs.core.rest.call(null,s__4364)));
} else
{return null;
}
})));
});
var map__4376 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4365 = cljs.core.seq.call(null,c1);
var s2__4366 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3822__auto____4367 = s1__4365;

if(cljs.core.truth_(and__3822__auto____4367))
{return s2__4366;
} else
{return and__3822__auto____4367;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4365),cljs.core.first.call(null,s2__4366)),map.call(null,f,cljs.core.rest.call(null,s1__4365),cljs.core.rest.call(null,s2__4366)));
} else
{return null;
}
})));
});
var map__4377 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4368 = cljs.core.seq.call(null,c1);
var s2__4369 = cljs.core.seq.call(null,c2);
var s3__4370 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3822__auto____4371 = s1__4368;

if(cljs.core.truth_(and__3822__auto____4371))
{var and__3822__auto____4372 = s2__4369;

if(cljs.core.truth_(and__3822__auto____4372))
{return s3__4370;
} else
{return and__3822__auto____4372;
}
} else
{return and__3822__auto____4371;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4368),cljs.core.first.call(null,s2__4369),cljs.core.first.call(null,s3__4370)),map.call(null,f,cljs.core.rest.call(null,s1__4368),cljs.core.rest.call(null,s2__4369),cljs.core.rest.call(null,s3__4370)));
} else
{return null;
}
})));
});
var map__4378 = (function() { 
var G__4380__delegate = function (f,c1,c2,c3,colls){
var step__4374 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4373 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4373)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__4373),step.call(null,map.call(null,cljs.core.rest,ss__4373)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__4285_SHARP_){
return cljs.core.apply.call(null,f,p1__4285_SHARP_);
}),step__4374.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__4380 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4380__delegate.call(this, f, c1, c2, c3, colls);
};
G__4380.cljs$lang$maxFixedArity = 4;
G__4380.cljs$lang$applyTo = (function (arglist__4381){
var f = cljs.core.first(arglist__4381);
var c1 = cljs.core.first(cljs.core.next(arglist__4381));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4381)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4381))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4381))));
return G__4380__delegate.call(this, f, c1, c2, c3, colls);
});
return G__4380;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__4375.call(this,f,c1);
case  3 :
return map__4376.call(this,f,c1,c2);
case  4 :
return map__4377.call(this,f,c1,c2,c3);
default:
return map__4378.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__4378.cljs$lang$applyTo;
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
{var temp__3974__auto____4382 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4382))
{var s__4383 = temp__3974__auto____4382;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4383),take.call(null,(n - 1),cljs.core.rest.call(null,s__4383)));
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
var step__4386 = (function (n,coll){
while(true){
var s__4384 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3822__auto____4385 = (n > 0);

if(cljs.core.truth_(and__3822__auto____4385))
{return s__4384;
} else
{return and__3822__auto____4385;
}
})()))
{{
var G__4387 = (n - 1);
var G__4388 = cljs.core.rest.call(null,s__4384);
n = G__4387;
coll = G__4388;
continue;
}
} else
{return s__4384;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4386.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__4389 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__4390 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__4389.call(this,n);
case  2 :
return drop_last__4390.call(this,n,s);
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
var s__4392 = cljs.core.seq.call(null,coll);
var lead__4393 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__4393))
{{
var G__4394 = cljs.core.next.call(null,s__4392);
var G__4395 = cljs.core.next.call(null,lead__4393);
s__4392 = G__4394;
lead__4393 = G__4395;
continue;
}
} else
{return s__4392;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__4398 = (function (pred,coll){
while(true){
var s__4396 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3822__auto____4397 = s__4396;

if(cljs.core.truth_(and__3822__auto____4397))
{return pred.call(null,cljs.core.first.call(null,s__4396));
} else
{return and__3822__auto____4397;
}
})()))
{{
var G__4399 = pred;
var G__4400 = cljs.core.rest.call(null,s__4396);
pred = G__4399;
coll = G__4400;
continue;
}
} else
{return s__4396;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4398.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4401 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4401))
{var s__4402 = temp__3974__auto____4401;

return cljs.core.concat.call(null,s__4402,cycle.call(null,s__4402));
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
var repeat__4403 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__4404 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__4403.call(this,n);
case  2 :
return repeat__4404.call(this,n,x);
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
var repeatedly__4406 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__4407 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__4406.call(this,n);
case  2 :
return repeatedly__4407.call(this,n,f);
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
var interleave__4413 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4409 = cljs.core.seq.call(null,c1);
var s2__4410 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3822__auto____4411 = s1__4409;

if(cljs.core.truth_(and__3822__auto____4411))
{return s2__4410;
} else
{return and__3822__auto____4411;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__4409),cljs.core.cons.call(null,cljs.core.first.call(null,s2__4410),interleave.call(null,cljs.core.rest.call(null,s1__4409),cljs.core.rest.call(null,s2__4410))));
} else
{return null;
}
})));
});
var interleave__4414 = (function() { 
var G__4416__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4412 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4412)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__4412),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__4412)));
} else
{return null;
}
})));
};
var G__4416 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4416__delegate.call(this, c1, c2, colls);
};
G__4416.cljs$lang$maxFixedArity = 2;
G__4416.cljs$lang$applyTo = (function (arglist__4417){
var c1 = cljs.core.first(arglist__4417);
var c2 = cljs.core.first(cljs.core.next(arglist__4417));
var colls = cljs.core.rest(cljs.core.next(arglist__4417));
return G__4416__delegate.call(this, c1, c2, colls);
});
return G__4416;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__4413.call(this,c1,c2);
default:
return interleave__4414.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__4414.cljs$lang$applyTo;
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
var cat__4420 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____4418 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3971__auto____4418))
{var coll__4419 = temp__3971__auto____4418;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__4419),cat.call(null,cljs.core.rest.call(null,coll__4419),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__4420.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__4421 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__4422 = (function() { 
var G__4424__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__4424 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4424__delegate.call(this, f, coll, colls);
};
G__4424.cljs$lang$maxFixedArity = 2;
G__4424.cljs$lang$applyTo = (function (arglist__4425){
var f = cljs.core.first(arglist__4425);
var coll = cljs.core.first(cljs.core.next(arglist__4425));
var colls = cljs.core.rest(cljs.core.next(arglist__4425));
return G__4424__delegate.call(this, f, coll, colls);
});
return G__4424;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__4421.call(this,f,coll);
default:
return mapcat__4422.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__4422.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4426 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4426))
{var s__4427 = temp__3974__auto____4426;

var f__4428 = cljs.core.first.call(null,s__4427);
var r__4429 = cljs.core.rest.call(null,s__4427);

if(cljs.core.truth_(pred.call(null,f__4428)))
{return cljs.core.cons.call(null,f__4428,filter.call(null,pred,r__4429));
} else
{return filter.call(null,pred,r__4429);
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
var walk__4431 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__4431.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__4430_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__4430_SHARP_));
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
var partition__4438 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__4439 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4432 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4432))
{var s__4433 = temp__3974__auto____4432;

var p__4434 = cljs.core.take.call(null,n,s__4433);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4434))))
{return cljs.core.cons.call(null,p__4434,partition.call(null,n,step,cljs.core.drop.call(null,step,s__4433)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4440 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4435 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4435))
{var s__4436 = temp__3974__auto____4435;

var p__4437 = cljs.core.take.call(null,n,s__4436);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4437))))
{return cljs.core.cons.call(null,p__4437,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__4436)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__4437,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__4438.call(this,n,step);
case  3 :
return partition__4439.call(this,n,step,pad);
case  4 :
return partition__4440.call(this,n,step,pad,coll);
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
var get_in__4446 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__4447 = (function (m,ks,not_found){
var sentinel__4442 = cljs.core.lookup_sentinel;
var m__4443 = m;
var ks__4444 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__4444))
{var m__4445 = cljs.core.get.call(null,m__4443,cljs.core.first.call(null,ks__4444),sentinel__4442);

if(cljs.core.truth_((sentinel__4442 === m__4445)))
{return not_found;
} else
{{
var G__4449 = sentinel__4442;
var G__4450 = m__4445;
var G__4451 = cljs.core.next.call(null,ks__4444);
sentinel__4442 = G__4449;
m__4443 = G__4450;
ks__4444 = G__4451;
continue;
}
}
} else
{return m__4443;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__4446.call(this,m,ks);
case  3 :
return get_in__4447.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__4452,v){
var vec__4453__4454 = p__4452;
var k__4455 = cljs.core.nth.call(null,vec__4453__4454,0,null);
var ks__4456 = cljs.core.nthnext.call(null,vec__4453__4454,1);

if(cljs.core.truth_(ks__4456))
{return cljs.core.assoc.call(null,m,k__4455,assoc_in.call(null,cljs.core.get.call(null,m,k__4455),ks__4456,v));
} else
{return cljs.core.assoc.call(null,m,k__4455,v);
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
var update_in__delegate = function (m,p__4457,f,args){
var vec__4458__4459 = p__4457;
var k__4460 = cljs.core.nth.call(null,vec__4458__4459,0,null);
var ks__4461 = cljs.core.nthnext.call(null,vec__4458__4459,1);

if(cljs.core.truth_(ks__4461))
{return cljs.core.assoc.call(null,m,k__4460,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__4460),ks__4461,f,args));
} else
{return cljs.core.assoc.call(null,m,k__4460,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__4460),args));
}
};
var update_in = function (m,p__4457,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__4457, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__4462){
var m = cljs.core.first(arglist__4462);
var p__4457 = cljs.core.first(cljs.core.next(arglist__4462));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4462)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4462)));
return update_in__delegate.call(this, m, p__4457, f, args);
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
var this__4463 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4496 = null;
var G__4496__4497 = (function (coll,k){
var this__4464 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4496__4498 = (function (coll,k,not_found){
var this__4465 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4496 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4496__4497.call(this,coll,k);
case  3 :
return G__4496__4498.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4496;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4466 = this;
var new_array__4467 = cljs.core.aclone.call(null,this__4466.array);

(new_array__4467[k] = v);
return (new cljs.core.Vector(this__4466.meta,new_array__4467));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__4500 = null;
var G__4500__4501 = (function (tsym4468,k){
var this__4470 = this;
var tsym4468__4471 = this;

var coll__4472 = tsym4468__4471;

return cljs.core._lookup.call(null,coll__4472,k);
});
var G__4500__4502 = (function (tsym4469,k,not_found){
var this__4473 = this;
var tsym4469__4474 = this;

var coll__4475 = tsym4469__4474;

return cljs.core._lookup.call(null,coll__4475,k,not_found);
});
G__4500 = function(tsym4469,k,not_found){
switch(arguments.length){
case  2 :
return G__4500__4501.call(this,tsym4469,k);
case  3 :
return G__4500__4502.call(this,tsym4469,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4500;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4476 = this;
var new_array__4477 = cljs.core.aclone.call(null,this__4476.array);

new_array__4477.push(o);
return (new cljs.core.Vector(this__4476.meta,new_array__4477));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4504 = null;
var G__4504__4505 = (function (v,f){
var this__4478 = this;
return cljs.core.ci_reduce.call(null,this__4478.array,f);
});
var G__4504__4506 = (function (v,f,start){
var this__4479 = this;
return cljs.core.ci_reduce.call(null,this__4479.array,f,start);
});
G__4504 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4504__4505.call(this,v,f);
case  3 :
return G__4504__4506.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4504;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4480 = this;
if(cljs.core.truth_((this__4480.array.length > 0)))
{var vector_seq__4481 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4480.array.length)))
{return cljs.core.cons.call(null,(this__4480.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4481.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4482 = this;
return this__4482.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4483 = this;
var count__4484 = this__4483.array.length;

if(cljs.core.truth_((count__4484 > 0)))
{return (this__4483.array[(count__4484 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4485 = this;
if(cljs.core.truth_((this__4485.array.length > 0)))
{var new_array__4486 = cljs.core.aclone.call(null,this__4485.array);

new_array__4486.pop();
return (new cljs.core.Vector(this__4485.meta,new_array__4486));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4487 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4488 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4489 = this;
return (new cljs.core.Vector(meta,this__4489.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4490 = this;
return this__4490.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4508 = null;
var G__4508__4509 = (function (coll,n){
var this__4491 = this;
if(cljs.core.truth_((function (){var and__3822__auto____4492 = (0 <= n);

if(cljs.core.truth_(and__3822__auto____4492))
{return (n < this__4491.array.length);
} else
{return and__3822__auto____4492;
}
})()))
{return (this__4491.array[n]);
} else
{return null;
}
});
var G__4508__4510 = (function (coll,n,not_found){
var this__4493 = this;
if(cljs.core.truth_((function (){var and__3822__auto____4494 = (0 <= n);

if(cljs.core.truth_(and__3822__auto____4494))
{return (n < this__4493.array.length);
} else
{return and__3822__auto____4494;
}
})()))
{return (this__4493.array[n]);
} else
{return not_found;
}
});
G__4508 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4508__4509.call(this,coll,n);
case  3 :
return G__4508__4510.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4508;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4495 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4495.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__4512 = pv.cnt;

if(cljs.core.truth_((cnt__4512 < 32)))
{return 0;
} else
{return (((cnt__4512 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__4513 = level;
var ret__4514 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__4513)))
{return ret__4514;
} else
{var embed__4515 = ret__4514;
var r__4516 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___4517 = (r__4516[0] = embed__4515);

{
var G__4518 = (ll__4513 - 5);
var G__4519 = r__4516;
ll__4513 = G__4518;
ret__4514 = G__4519;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__4520 = cljs.core.aclone.call(null,parent);
var subidx__4521 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__4520[subidx__4521] = tailnode);
return ret__4520;
} else
{var temp__3971__auto____4522 = (parent[subidx__4521]);

if(cljs.core.truth_(temp__3971__auto____4522))
{var child__4523 = temp__3971__auto____4522;

var node_to_insert__4524 = push_tail.call(null,pv,(level - 5),child__4523,tailnode);
var ___4525 = (ret__4520[subidx__4521] = node_to_insert__4524);

return ret__4520;
} else
{var node_to_insert__4526 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___4527 = (ret__4520[subidx__4521] = node_to_insert__4526);

return ret__4520;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3822__auto____4528 = (0 <= i);

if(cljs.core.truth_(and__3822__auto____4528))
{return (i < pv.cnt);
} else
{return and__3822__auto____4528;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__4529 = pv.root;
var level__4530 = pv.shift;

while(true){
if(cljs.core.truth_((level__4530 > 0)))
{{
var G__4531 = (node__4529[((i >> level__4530) & 31)]);
var G__4532 = (level__4530 - 5);
node__4529 = G__4531;
level__4530 = G__4532;
continue;
}
} else
{return node__4529;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__4533 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__4533[(i & 31)] = val);
return ret__4533;
} else
{var subidx__4534 = ((i >> level) & 31);
var ___4535 = (ret__4533[subidx__4534] = do_assoc.call(null,pv,(level - 5),(node[subidx__4534]),i,val));

return ret__4533;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__4536 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__4537 = pop_tail.call(null,pv,(level - 5),(node[subidx__4536]));

if(cljs.core.truth_((function (){var and__3822__auto____4538 = (new_child__4537 === null);

if(cljs.core.truth_(and__3822__auto____4538))
{return (subidx__4536 === 0);
} else
{return and__3822__auto____4538;
}
})()))
{return null;
} else
{var ret__4539 = cljs.core.aclone.call(null,node);
var ___4540 = (ret__4539[subidx__4536] = new_child__4537);

return ret__4539;
}
} else
{if(cljs.core.truth_((subidx__4536 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__4541 = cljs.core.aclone.call(null,node);
var ___4542 = (ret__4541[subidx__4536] = null);

return ret__4541;
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
var this__4543 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4583 = null;
var G__4583__4584 = (function (coll,k){
var this__4544 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4583__4585 = (function (coll,k,not_found){
var this__4545 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4583 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4583__4584.call(this,coll,k);
case  3 :
return G__4583__4585.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4583;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4546 = this;
if(cljs.core.truth_((function (){var and__3822__auto____4547 = (0 <= k);

if(cljs.core.truth_(and__3822__auto____4547))
{return (k < this__4546.cnt);
} else
{return and__3822__auto____4547;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__4548 = cljs.core.aclone.call(null,this__4546.tail);

(new_tail__4548[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__4546.meta,this__4546.cnt,this__4546.shift,this__4546.root,new_tail__4548));
} else
{return (new cljs.core.PersistentVector(this__4546.meta,this__4546.cnt,this__4546.shift,cljs.core.do_assoc.call(null,coll,this__4546.shift,this__4546.root,k,v),this__4546.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__4546.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__4546.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__4587 = null;
var G__4587__4588 = (function (tsym4549,k){
var this__4551 = this;
var tsym4549__4552 = this;

var coll__4553 = tsym4549__4552;

return cljs.core._lookup.call(null,coll__4553,k);
});
var G__4587__4589 = (function (tsym4550,k,not_found){
var this__4554 = this;
var tsym4550__4555 = this;

var coll__4556 = tsym4550__4555;

return cljs.core._lookup.call(null,coll__4556,k,not_found);
});
G__4587 = function(tsym4550,k,not_found){
switch(arguments.length){
case  2 :
return G__4587__4588.call(this,tsym4550,k);
case  3 :
return G__4587__4589.call(this,tsym4550,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4587;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4557 = this;
if(cljs.core.truth_(((this__4557.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__4558 = cljs.core.aclone.call(null,this__4557.tail);

new_tail__4558.push(o);
return (new cljs.core.PersistentVector(this__4557.meta,(this__4557.cnt + 1),this__4557.shift,this__4557.root,new_tail__4558));
} else
{var root_overflow_QMARK___4559 = ((this__4557.cnt >> 5) > (1 << this__4557.shift));
var new_shift__4560 = (cljs.core.truth_(root_overflow_QMARK___4559)?(this__4557.shift + 5):this__4557.shift);
var new_root__4562 = (cljs.core.truth_(root_overflow_QMARK___4559)?(function (){var n_r__4561 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__4561[0] = this__4557.root);
(n_r__4561[1] = cljs.core.new_path.call(null,this__4557.shift,this__4557.tail));
return n_r__4561;
})():cljs.core.push_tail.call(null,coll,this__4557.shift,this__4557.root,this__4557.tail));

return (new cljs.core.PersistentVector(this__4557.meta,(this__4557.cnt + 1),new_shift__4560,new_root__4562,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4591 = null;
var G__4591__4592 = (function (v,f){
var this__4563 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__4591__4593 = (function (v,f,start){
var this__4564 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__4591 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4591__4592.call(this,v,f);
case  3 :
return G__4591__4593.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4591;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4565 = this;
if(cljs.core.truth_((this__4565.cnt > 0)))
{var vector_seq__4566 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4565.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4566.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4567 = this;
return this__4567.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4568 = this;
if(cljs.core.truth_((this__4568.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__4568.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4569 = this;
if(cljs.core.truth_((this__4569.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__4569.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__4569.meta);
} else
{if(cljs.core.truth_((1 < (this__4569.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__4569.meta,(this__4569.cnt - 1),this__4569.shift,this__4569.root,cljs.core.aclone.call(null,this__4569.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__4570 = cljs.core.array_for.call(null,coll,(this__4569.cnt - 2));
var nr__4571 = cljs.core.pop_tail.call(null,this__4569.shift,this__4569.root);
var new_root__4572 = (cljs.core.truth_((nr__4571 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__4571);
var cnt_1__4573 = (this__4569.cnt - 1);

if(cljs.core.truth_((function (){var and__3822__auto____4574 = (5 < this__4569.shift);

if(cljs.core.truth_(and__3822__auto____4574))
{return ((new_root__4572[1]) === null);
} else
{return and__3822__auto____4574;
}
})()))
{return (new cljs.core.PersistentVector(this__4569.meta,cnt_1__4573,(this__4569.shift - 5),(new_root__4572[0]),new_tail__4570));
} else
{return (new cljs.core.PersistentVector(this__4569.meta,cnt_1__4573,this__4569.shift,new_root__4572,new_tail__4570));
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
var this__4575 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4576 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4577 = this;
return (new cljs.core.PersistentVector(meta,this__4577.cnt,this__4577.shift,this__4577.root,this__4577.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4578 = this;
return this__4578.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4595 = null;
var G__4595__4596 = (function (coll,n){
var this__4579 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__4595__4597 = (function (coll,n,not_found){
var this__4580 = this;
if(cljs.core.truth_((function (){var and__3822__auto____4581 = (0 <= n);

if(cljs.core.truth_(and__3822__auto____4581))
{return (n < this__4580.cnt);
} else
{return and__3822__auto____4581;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__4595 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4595__4596.call(this,coll,n);
case  3 :
return G__4595__4597.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4595;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4582 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__4582.meta);
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
vector.cljs$lang$applyTo = (function (arglist__4599){
var args = cljs.core.seq( arglist__4599 );;
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
var this__4600 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4628 = null;
var G__4628__4629 = (function (coll,k){
var this__4601 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4628__4630 = (function (coll,k,not_found){
var this__4602 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4628 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4628__4629.call(this,coll,k);
case  3 :
return G__4628__4630.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4628;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__4603 = this;
var v_pos__4604 = (this__4603.start + key);

return (new cljs.core.Subvec(this__4603.meta,cljs.core._assoc.call(null,this__4603.v,v_pos__4604,val),this__4603.start,((this__4603.end > (v_pos__4604 + 1)) ? this__4603.end : (v_pos__4604 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__4632 = null;
var G__4632__4633 = (function (tsym4605,k){
var this__4607 = this;
var tsym4605__4608 = this;

var coll__4609 = tsym4605__4608;

return cljs.core._lookup.call(null,coll__4609,k);
});
var G__4632__4634 = (function (tsym4606,k,not_found){
var this__4610 = this;
var tsym4606__4611 = this;

var coll__4612 = tsym4606__4611;

return cljs.core._lookup.call(null,coll__4612,k,not_found);
});
G__4632 = function(tsym4606,k,not_found){
switch(arguments.length){
case  2 :
return G__4632__4633.call(this,tsym4606,k);
case  3 :
return G__4632__4634.call(this,tsym4606,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4632;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4613 = this;
return (new cljs.core.Subvec(this__4613.meta,cljs.core._assoc_n.call(null,this__4613.v,this__4613.end,o),this__4613.start,(this__4613.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4636 = null;
var G__4636__4637 = (function (coll,f){
var this__4614 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__4636__4638 = (function (coll,f,start){
var this__4615 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__4636 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4636__4637.call(this,coll,f);
case  3 :
return G__4636__4638.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4636;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4616 = this;
var subvec_seq__4617 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__4616.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__4616.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__4617.call(null,this__4616.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4618 = this;
return (this__4618.end - this__4618.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4619 = this;
return cljs.core._nth.call(null,this__4619.v,(this__4619.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4620 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__4620.start,this__4620.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__4620.meta,this__4620.v,this__4620.start,(this__4620.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4621 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4622 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4623 = this;
return (new cljs.core.Subvec(meta,this__4623.v,this__4623.start,this__4623.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4624 = this;
return this__4624.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4640 = null;
var G__4640__4641 = (function (coll,n){
var this__4625 = this;
return cljs.core._nth.call(null,this__4625.v,(this__4625.start + n));
});
var G__4640__4642 = (function (coll,n,not_found){
var this__4626 = this;
return cljs.core._nth.call(null,this__4626.v,(this__4626.start + n),not_found);
});
G__4640 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4640__4641.call(this,coll,n);
case  3 :
return G__4640__4642.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4640;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4627 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4627.meta);
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
var subvec__4644 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__4645 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__4644.call(this,v,start);
case  3 :
return subvec__4645.call(this,v,start,end);
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
var this__4647 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4648 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4649 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4650 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4650.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4651 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4652 = this;
return cljs.core._first.call(null,this__4652.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4653 = this;
var temp__3971__auto____4654 = cljs.core.next.call(null,this__4653.front);

if(cljs.core.truth_(temp__3971__auto____4654))
{var f1__4655 = temp__3971__auto____4654;

return (new cljs.core.PersistentQueueSeq(this__4653.meta,f1__4655,this__4653.rear));
} else
{if(cljs.core.truth_((this__4653.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__4653.meta,this__4653.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4656 = this;
return this__4656.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4657 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__4657.front,this__4657.rear));
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
var this__4658 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4659 = this;
if(cljs.core.truth_(this__4659.front))
{return (new cljs.core.PersistentQueue(this__4659.meta,(this__4659.count + 1),this__4659.front,cljs.core.conj.call(null,(function (){var or__3824__auto____4660 = this__4659.rear;

if(cljs.core.truth_(or__3824__auto____4660))
{return or__3824__auto____4660;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__4659.meta,(this__4659.count + 1),cljs.core.conj.call(null,this__4659.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4661 = this;
var rear__4662 = cljs.core.seq.call(null,this__4661.rear);

if(cljs.core.truth_((function (){var or__3824__auto____4663 = this__4661.front;

if(cljs.core.truth_(or__3824__auto____4663))
{return or__3824__auto____4663;
} else
{return rear__4662;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__4661.front,cljs.core.seq.call(null,rear__4662)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4664 = this;
return this__4664.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4665 = this;
return cljs.core._first.call(null,this__4665.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4666 = this;
if(cljs.core.truth_(this__4666.front))
{var temp__3971__auto____4667 = cljs.core.next.call(null,this__4666.front);

if(cljs.core.truth_(temp__3971__auto____4667))
{var f1__4668 = temp__3971__auto____4667;

return (new cljs.core.PersistentQueue(this__4666.meta,(this__4666.count - 1),f1__4668,this__4666.rear));
} else
{return (new cljs.core.PersistentQueue(this__4666.meta,(this__4666.count - 1),cljs.core.seq.call(null,this__4666.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4669 = this;
return cljs.core.first.call(null,this__4669.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4670 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4671 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4672 = this;
return (new cljs.core.PersistentQueue(meta,this__4672.count,this__4672.front,this__4672.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4673 = this;
return this__4673.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4674 = this;
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
var this__4675 = this;
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
var len__4676 = array.length;

var i__4677 = 0;

while(true){
if(cljs.core.truth_((i__4677 < len__4676)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4677]))))
{return i__4677;
} else
{{
var G__4678 = (i__4677 + incr);
i__4677 = G__4678;
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
var obj_map_contains_key_QMARK___4680 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4681 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3822__auto____4679 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3822__auto____4679))
{return strobj.hasOwnProperty(k);
} else
{return and__3822__auto____4679;
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
return obj_map_contains_key_QMARK___4680.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4681.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__4684 = cljs.core.hash.call(null,a);
var b__4685 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__4684 < b__4685)))
{return -1;
} else
{if(cljs.core.truth_((a__4684 > b__4685)))
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
var this__4686 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4713 = null;
var G__4713__4714 = (function (coll,k){
var this__4687 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4713__4715 = (function (coll,k,not_found){
var this__4688 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4688.strobj,(this__4688.strobj[k]),not_found);
});
G__4713 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4713__4714.call(this,coll,k);
case  3 :
return G__4713__4715.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4713;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4689 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4690 = goog.object.clone.call(null,this__4689.strobj);
var overwrite_QMARK___4691 = new_strobj__4690.hasOwnProperty(k);

(new_strobj__4690[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4691))
{return (new cljs.core.ObjMap(this__4689.meta,this__4689.keys,new_strobj__4690));
} else
{var new_keys__4692 = cljs.core.aclone.call(null,this__4689.keys);

new_keys__4692.push(k);
return (new cljs.core.ObjMap(this__4689.meta,new_keys__4692,new_strobj__4690));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4689.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4693 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4693.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__4717 = null;
var G__4717__4718 = (function (tsym4694,k){
var this__4696 = this;
var tsym4694__4697 = this;

var coll__4698 = tsym4694__4697;

return cljs.core._lookup.call(null,coll__4698,k);
});
var G__4717__4719 = (function (tsym4695,k,not_found){
var this__4699 = this;
var tsym4695__4700 = this;

var coll__4701 = tsym4695__4700;

return cljs.core._lookup.call(null,coll__4701,k,not_found);
});
G__4717 = function(tsym4695,k,not_found){
switch(arguments.length){
case  2 :
return G__4717__4718.call(this,tsym4695,k);
case  3 :
return G__4717__4719.call(this,tsym4695,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4717;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4702 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4703 = this;
if(cljs.core.truth_((this__4703.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4683_SHARP_){
return cljs.core.vector.call(null,p1__4683_SHARP_,(this__4703.strobj[p1__4683_SHARP_]));
}),this__4703.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4704 = this;
return this__4704.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4705 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4706 = this;
return (new cljs.core.ObjMap(meta,this__4706.keys,this__4706.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4707 = this;
return this__4707.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4708 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4708.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4709 = this;
if(cljs.core.truth_((function (){var and__3822__auto____4710 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3822__auto____4710))
{return this__4709.strobj.hasOwnProperty(k);
} else
{return and__3822__auto____4710;
}
})()))
{var new_keys__4711 = cljs.core.aclone.call(null,this__4709.keys);
var new_strobj__4712 = goog.object.clone.call(null,this__4709.strobj);

new_keys__4711.splice(cljs.core.scan_array.call(null,1,k,new_keys__4711),1);
cljs.core.js_delete.call(null,new_strobj__4712,k);
return (new cljs.core.ObjMap(this__4709.meta,new_keys__4711,new_strobj__4712));
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
var this__4722 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4760 = null;
var G__4760__4761 = (function (coll,k){
var this__4723 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4760__4762 = (function (coll,k,not_found){
var this__4724 = this;
var bucket__4725 = (this__4724.hashobj[cljs.core.hash.call(null,k)]);
var i__4726 = (cljs.core.truth_(bucket__4725)?cljs.core.scan_array.call(null,2,k,bucket__4725):null);

if(cljs.core.truth_(i__4726))
{return (bucket__4725[(i__4726 + 1)]);
} else
{return not_found;
}
});
G__4760 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4760__4761.call(this,coll,k);
case  3 :
return G__4760__4762.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4760;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4727 = this;
var h__4728 = cljs.core.hash.call(null,k);
var bucket__4729 = (this__4727.hashobj[h__4728]);

if(cljs.core.truth_(bucket__4729))
{var new_bucket__4730 = cljs.core.aclone.call(null,bucket__4729);
var new_hashobj__4731 = goog.object.clone.call(null,this__4727.hashobj);

(new_hashobj__4731[h__4728] = new_bucket__4730);
var temp__3971__auto____4732 = cljs.core.scan_array.call(null,2,k,new_bucket__4730);

if(cljs.core.truth_(temp__3971__auto____4732))
{var i__4733 = temp__3971__auto____4732;

(new_bucket__4730[(i__4733 + 1)] = v);
return (new cljs.core.HashMap(this__4727.meta,this__4727.count,new_hashobj__4731));
} else
{new_bucket__4730.push(k,v);
return (new cljs.core.HashMap(this__4727.meta,(this__4727.count + 1),new_hashobj__4731));
}
} else
{var new_hashobj__4734 = goog.object.clone.call(null,this__4727.hashobj);

(new_hashobj__4734[h__4728] = [k,v]);
return (new cljs.core.HashMap(this__4727.meta,(this__4727.count + 1),new_hashobj__4734));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4735 = this;
var bucket__4736 = (this__4735.hashobj[cljs.core.hash.call(null,k)]);
var i__4737 = (cljs.core.truth_(bucket__4736)?cljs.core.scan_array.call(null,2,k,bucket__4736):null);

if(cljs.core.truth_(i__4737))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__4764 = null;
var G__4764__4765 = (function (tsym4738,k){
var this__4740 = this;
var tsym4738__4741 = this;

var coll__4742 = tsym4738__4741;

return cljs.core._lookup.call(null,coll__4742,k);
});
var G__4764__4766 = (function (tsym4739,k,not_found){
var this__4743 = this;
var tsym4739__4744 = this;

var coll__4745 = tsym4739__4744;

return cljs.core._lookup.call(null,coll__4745,k,not_found);
});
G__4764 = function(tsym4739,k,not_found){
switch(arguments.length){
case  2 :
return G__4764__4765.call(this,tsym4739,k);
case  3 :
return G__4764__4766.call(this,tsym4739,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4764;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4746 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4747 = this;
if(cljs.core.truth_((this__4747.count > 0)))
{var hashes__4748 = cljs.core.js_keys.call(null,this__4747.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__4721_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4747.hashobj[p1__4721_SHARP_])));
}),hashes__4748);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4749 = this;
return this__4749.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4750 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4751 = this;
return (new cljs.core.HashMap(meta,this__4751.count,this__4751.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4752 = this;
return this__4752.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4753 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4753.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4754 = this;
var h__4755 = cljs.core.hash.call(null,k);
var bucket__4756 = (this__4754.hashobj[h__4755]);
var i__4757 = (cljs.core.truth_(bucket__4756)?cljs.core.scan_array.call(null,2,k,bucket__4756):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4757)))
{return coll;
} else
{var new_hashobj__4758 = goog.object.clone.call(null,this__4754.hashobj);

if(cljs.core.truth_((3 > bucket__4756.length)))
{cljs.core.js_delete.call(null,new_hashobj__4758,h__4755);
} else
{var new_bucket__4759 = cljs.core.aclone.call(null,bucket__4756);

new_bucket__4759.splice(i__4757,2);
(new_hashobj__4758[h__4755] = new_bucket__4759);
}
return (new cljs.core.HashMap(this__4754.meta,(this__4754.count - 1),new_hashobj__4758));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4768 = ks.length;

var i__4769 = 0;
var out__4770 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4769 < len__4768)))
{{
var G__4771 = (i__4769 + 1);
var G__4772 = cljs.core.assoc.call(null,out__4770,(ks[i__4769]),(vs[i__4769]));
i__4769 = G__4771;
out__4770 = G__4772;
continue;
}
} else
{return out__4770;
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
var in$__4773 = cljs.core.seq.call(null,keyvals);
var out__4774 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4773))
{{
var G__4775 = cljs.core.nnext.call(null,in$__4773);
var G__4776 = cljs.core.assoc.call(null,out__4774,cljs.core.first.call(null,in$__4773),cljs.core.second.call(null,in$__4773));
in$__4773 = G__4775;
out__4774 = G__4776;
continue;
}
} else
{return out__4774;
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
hash_map.cljs$lang$applyTo = (function (arglist__4777){
var keyvals = cljs.core.seq( arglist__4777 );;
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
{return cljs.core.reduce.call(null,(function (p1__4778_SHARP_,p2__4779_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____4780 = p1__4778_SHARP_;

if(cljs.core.truth_(or__3824__auto____4780))
{return or__3824__auto____4780;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4779_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__4781){
var maps = cljs.core.seq( arglist__4781 );;
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
{var merge_entry__4784 = (function (m,e){
var k__4782 = cljs.core.first.call(null,e);
var v__4783 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4782)))
{return cljs.core.assoc.call(null,m,k__4782,f.call(null,cljs.core.get.call(null,m,k__4782),v__4783));
} else
{return cljs.core.assoc.call(null,m,k__4782,v__4783);
}
});
var merge2__4786 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4784,(function (){var or__3824__auto____4785 = m1;

if(cljs.core.truth_(or__3824__auto____4785))
{return or__3824__auto____4785;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4786,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__4787){
var f = cljs.core.first(arglist__4787);
var maps = cljs.core.rest(arglist__4787);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4789 = cljs.core.ObjMap.fromObject([],{});
var keys__4790 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4790))
{var key__4791 = cljs.core.first.call(null,keys__4790);
var entry__4792 = cljs.core.get.call(null,map,key__4791,"\uFDD0'user/not-found");

{
var G__4793 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4792,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__4789,key__4791,entry__4792):ret__4789);
var G__4794 = cljs.core.next.call(null,keys__4790);
ret__4789 = G__4793;
keys__4790 = G__4794;
continue;
}
} else
{return ret__4789;
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
var this__4795 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4816 = null;
var G__4816__4817 = (function (coll,v){
var this__4796 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4816__4818 = (function (coll,v,not_found){
var this__4797 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4797.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4816 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4816__4817.call(this,coll,v);
case  3 :
return G__4816__4818.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4816;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__4820 = null;
var G__4820__4821 = (function (tsym4798,k){
var this__4800 = this;
var tsym4798__4801 = this;

var coll__4802 = tsym4798__4801;

return cljs.core._lookup.call(null,coll__4802,k);
});
var G__4820__4822 = (function (tsym4799,k,not_found){
var this__4803 = this;
var tsym4799__4804 = this;

var coll__4805 = tsym4799__4804;

return cljs.core._lookup.call(null,coll__4805,k,not_found);
});
G__4820 = function(tsym4799,k,not_found){
switch(arguments.length){
case  2 :
return G__4820__4821.call(this,tsym4799,k);
case  3 :
return G__4820__4822.call(this,tsym4799,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4820;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4806 = this;
return (new cljs.core.Set(this__4806.meta,cljs.core.assoc.call(null,this__4806.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4807 = this;
return cljs.core.keys.call(null,this__4807.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4808 = this;
return (new cljs.core.Set(this__4808.meta,cljs.core.dissoc.call(null,this__4808.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4809 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4810 = this;
var and__3822__auto____4811 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3822__auto____4811))
{var and__3822__auto____4812 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3822__auto____4812))
{return cljs.core.every_QMARK_.call(null,(function (p1__4788_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4788_SHARP_);
}),other);
} else
{return and__3822__auto____4812;
}
} else
{return and__3822__auto____4811;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4813 = this;
return (new cljs.core.Set(meta,this__4813.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4814 = this;
return this__4814.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4815 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4815.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4825 = cljs.core.seq.call(null,coll);
var out__4826 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4825))))
{{
var G__4827 = cljs.core.rest.call(null,in$__4825);
var G__4828 = cljs.core.conj.call(null,out__4826,cljs.core.first.call(null,in$__4825));
in$__4825 = G__4827;
out__4826 = G__4828;
continue;
}
} else
{return out__4826;
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
{var n__4829 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____4830 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3971__auto____4830))
{var e__4831 = temp__3971__auto____4830;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4831));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4829,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4824_SHARP_){
var temp__3971__auto____4832 = cljs.core.find.call(null,smap,p1__4824_SHARP_);

if(cljs.core.truth_(temp__3971__auto____4832))
{var e__4833 = temp__3971__auto____4832;

return cljs.core.second.call(null,e__4833);
} else
{return p1__4824_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4841 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4834,seen){
while(true){
var vec__4835__4836 = p__4834;
var f__4837 = cljs.core.nth.call(null,vec__4835__4836,0,null);
var xs__4838 = vec__4835__4836;

var temp__3974__auto____4839 = cljs.core.seq.call(null,xs__4838);

if(cljs.core.truth_(temp__3974__auto____4839))
{var s__4840 = temp__3974__auto____4839;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4837)))
{{
var G__4842 = cljs.core.rest.call(null,s__4840);
var G__4843 = seen;
p__4834 = G__4842;
seen = G__4843;
continue;
}
} else
{return cljs.core.cons.call(null,f__4837,step.call(null,cljs.core.rest.call(null,s__4840),cljs.core.conj.call(null,seen,f__4837)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4841.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4844 = cljs.core.PersistentVector.fromArray([]);
var s__4845 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4845)))
{{
var G__4846 = cljs.core.conj.call(null,ret__4844,cljs.core.first.call(null,s__4845));
var G__4847 = cljs.core.next.call(null,s__4845);
ret__4844 = G__4846;
s__4845 = G__4847;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4844);
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
{if(cljs.core.truth_((function (){var or__3824__auto____4848 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3824__auto____4848))
{return or__3824__auto____4848;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4849 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4849 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4849 + 1));
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
if(cljs.core.truth_((function (){var or__3824__auto____4850 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3824__auto____4850))
{return or__3824__auto____4850;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4851 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4851 > -1)))
{return cljs.core.subs.call(null,x,2,i__4851);
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
var map__4854 = cljs.core.ObjMap.fromObject([],{});
var ks__4855 = cljs.core.seq.call(null,keys);
var vs__4856 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3822__auto____4857 = ks__4855;

if(cljs.core.truth_(and__3822__auto____4857))
{return vs__4856;
} else
{return and__3822__auto____4857;
}
})()))
{{
var G__4858 = cljs.core.assoc.call(null,map__4854,cljs.core.first.call(null,ks__4855),cljs.core.first.call(null,vs__4856));
var G__4859 = cljs.core.next.call(null,ks__4855);
var G__4860 = cljs.core.next.call(null,vs__4856);
map__4854 = G__4858;
ks__4855 = G__4859;
vs__4856 = G__4860;
continue;
}
} else
{return map__4854;
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
var max_key__4863 = (function (k,x){
return x;
});
var max_key__4864 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4865 = (function() { 
var G__4867__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4852_SHARP_,p2__4853_SHARP_){
return max_key.call(null,k,p1__4852_SHARP_,p2__4853_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4867 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4867__delegate.call(this, k, x, y, more);
};
G__4867.cljs$lang$maxFixedArity = 3;
G__4867.cljs$lang$applyTo = (function (arglist__4868){
var k = cljs.core.first(arglist__4868);
var x = cljs.core.first(cljs.core.next(arglist__4868));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4868)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4868)));
return G__4867__delegate.call(this, k, x, y, more);
});
return G__4867;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4863.call(this,k,x);
case  3 :
return max_key__4864.call(this,k,x,y);
default:
return max_key__4865.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4865.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4869 = (function (k,x){
return x;
});
var min_key__4870 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4871 = (function() { 
var G__4873__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4861_SHARP_,p2__4862_SHARP_){
return min_key.call(null,k,p1__4861_SHARP_,p2__4862_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4873 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4873__delegate.call(this, k, x, y, more);
};
G__4873.cljs$lang$maxFixedArity = 3;
G__4873.cljs$lang$applyTo = (function (arglist__4874){
var k = cljs.core.first(arglist__4874);
var x = cljs.core.first(cljs.core.next(arglist__4874));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4874)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4874)));
return G__4873__delegate.call(this, k, x, y, more);
});
return G__4873;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4869.call(this,k,x);
case  3 :
return min_key__4870.call(this,k,x,y);
default:
return min_key__4871.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4871.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4877 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4878 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4875 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4875))
{var s__4876 = temp__3974__auto____4875;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4876),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4876)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4877.call(this,n,step);
case  3 :
return partition_all__4878.call(this,n,step,coll);
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
var temp__3974__auto____4880 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4880))
{var s__4881 = temp__3974__auto____4880;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4881))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4881),take_while.call(null,pred,cljs.core.rest.call(null,s__4881)));
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
var this__4882 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4883 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4899 = null;
var G__4899__4900 = (function (rng,f){
var this__4884 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4899__4901 = (function (rng,f,s){
var this__4885 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4899 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4899__4900.call(this,rng,f);
case  3 :
return G__4899__4901.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4899;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4886 = this;
var comp__4887 = (cljs.core.truth_((this__4886.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4887.call(null,this__4886.start,this__4886.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4888 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4888.end - this__4888.start) / this__4888.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4889 = this;
return this__4889.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4890 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4890.meta,(this__4890.start + this__4890.step),this__4890.end,this__4890.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4891 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4892 = this;
return (new cljs.core.Range(meta,this__4892.start,this__4892.end,this__4892.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4893 = this;
return this__4893.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4903 = null;
var G__4903__4904 = (function (rng,n){
var this__4894 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4894.start + (n * this__4894.step));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____4895 = (this__4894.start > this__4894.end);

if(cljs.core.truth_(and__3822__auto____4895))
{return cljs.core._EQ_.call(null,this__4894.step,0);
} else
{return and__3822__auto____4895;
}
})()))
{return this__4894.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4903__4905 = (function (rng,n,not_found){
var this__4896 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4896.start + (n * this__4896.step));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____4897 = (this__4896.start > this__4896.end);

if(cljs.core.truth_(and__3822__auto____4897))
{return cljs.core._EQ_.call(null,this__4896.step,0);
} else
{return and__3822__auto____4897;
}
})()))
{return this__4896.start;
} else
{return not_found;
}
}
});
G__4903 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4903__4904.call(this,rng,n);
case  3 :
return G__4903__4905.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4903;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4898 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4898.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4907 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4908 = (function (end){
return range.call(null,0,end,1);
});
var range__4909 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4910 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4907.call(this);
case  1 :
return range__4908.call(this,start);
case  2 :
return range__4909.call(this,start,end);
case  3 :
return range__4910.call(this,start,end,step);
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
var temp__3974__auto____4912 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4912))
{var s__4913 = temp__3974__auto____4912;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4913),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4913)));
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
var temp__3974__auto____4915 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4915))
{var s__4916 = temp__3974__auto____4915;

var fst__4917 = cljs.core.first.call(null,s__4916);
var fv__4918 = f.call(null,fst__4917);
var run__4919 = cljs.core.cons.call(null,fst__4917,cljs.core.take_while.call(null,(function (p1__4914_SHARP_){
return cljs.core._EQ_.call(null,fv__4918,f.call(null,p1__4914_SHARP_));
}),cljs.core.next.call(null,s__4916)));

return cljs.core.cons.call(null,run__4919,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4919),s__4916))));
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
var reductions__4934 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____4930 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3971__auto____4930))
{var s__4931 = temp__3971__auto____4930;

return reductions.call(null,f,cljs.core.first.call(null,s__4931),cljs.core.rest.call(null,s__4931));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4935 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4932 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4932))
{var s__4933 = temp__3974__auto____4932;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4933)),cljs.core.rest.call(null,s__4933));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4934.call(this,f,init);
case  3 :
return reductions__4935.call(this,f,init,coll);
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
var juxt__4938 = (function (f){
return (function() {
var G__4943 = null;
var G__4943__4944 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4943__4945 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4943__4946 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4943__4947 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4943__4948 = (function() { 
var G__4950__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4950 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4950__delegate.call(this, x, y, z, args);
};
G__4950.cljs$lang$maxFixedArity = 3;
G__4950.cljs$lang$applyTo = (function (arglist__4951){
var x = cljs.core.first(arglist__4951);
var y = cljs.core.first(cljs.core.next(arglist__4951));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4951)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4951)));
return G__4950__delegate.call(this, x, y, z, args);
});
return G__4950;
})()
;
G__4943 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4943__4944.call(this);
case  1 :
return G__4943__4945.call(this,x);
case  2 :
return G__4943__4946.call(this,x,y);
case  3 :
return G__4943__4947.call(this,x,y,z);
default:
return G__4943__4948.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4943.cljs$lang$maxFixedArity = 3;
G__4943.cljs$lang$applyTo = G__4943__4948.cljs$lang$applyTo;
return G__4943;
})()
});
var juxt__4939 = (function (f,g){
return (function() {
var G__4952 = null;
var G__4952__4953 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4952__4954 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4952__4955 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4952__4956 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4952__4957 = (function() { 
var G__4959__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4959 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4959__delegate.call(this, x, y, z, args);
};
G__4959.cljs$lang$maxFixedArity = 3;
G__4959.cljs$lang$applyTo = (function (arglist__4960){
var x = cljs.core.first(arglist__4960);
var y = cljs.core.first(cljs.core.next(arglist__4960));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4960)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4960)));
return G__4959__delegate.call(this, x, y, z, args);
});
return G__4959;
})()
;
G__4952 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4952__4953.call(this);
case  1 :
return G__4952__4954.call(this,x);
case  2 :
return G__4952__4955.call(this,x,y);
case  3 :
return G__4952__4956.call(this,x,y,z);
default:
return G__4952__4957.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4952.cljs$lang$maxFixedArity = 3;
G__4952.cljs$lang$applyTo = G__4952__4957.cljs$lang$applyTo;
return G__4952;
})()
});
var juxt__4940 = (function (f,g,h){
return (function() {
var G__4961 = null;
var G__4961__4962 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4961__4963 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4961__4964 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4961__4965 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4961__4966 = (function() { 
var G__4968__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4968 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4968__delegate.call(this, x, y, z, args);
};
G__4968.cljs$lang$maxFixedArity = 3;
G__4968.cljs$lang$applyTo = (function (arglist__4969){
var x = cljs.core.first(arglist__4969);
var y = cljs.core.first(cljs.core.next(arglist__4969));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4969)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4969)));
return G__4968__delegate.call(this, x, y, z, args);
});
return G__4968;
})()
;
G__4961 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4961__4962.call(this);
case  1 :
return G__4961__4963.call(this,x);
case  2 :
return G__4961__4964.call(this,x,y);
case  3 :
return G__4961__4965.call(this,x,y,z);
default:
return G__4961__4966.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4961.cljs$lang$maxFixedArity = 3;
G__4961.cljs$lang$applyTo = G__4961__4966.cljs$lang$applyTo;
return G__4961;
})()
});
var juxt__4941 = (function() { 
var G__4970__delegate = function (f,g,h,fs){
var fs__4937 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4971 = null;
var G__4971__4972 = (function (){
return cljs.core.reduce.call(null,(function (p1__4920_SHARP_,p2__4921_SHARP_){
return cljs.core.conj.call(null,p1__4920_SHARP_,p2__4921_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__4937);
});
var G__4971__4973 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4922_SHARP_,p2__4923_SHARP_){
return cljs.core.conj.call(null,p1__4922_SHARP_,p2__4923_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__4937);
});
var G__4971__4974 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4924_SHARP_,p2__4925_SHARP_){
return cljs.core.conj.call(null,p1__4924_SHARP_,p2__4925_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__4937);
});
var G__4971__4975 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4926_SHARP_,p2__4927_SHARP_){
return cljs.core.conj.call(null,p1__4926_SHARP_,p2__4927_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__4937);
});
var G__4971__4976 = (function() { 
var G__4978__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4928_SHARP_,p2__4929_SHARP_){
return cljs.core.conj.call(null,p1__4928_SHARP_,cljs.core.apply.call(null,p2__4929_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__4937);
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
};
var G__4970 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4970__delegate.call(this, f, g, h, fs);
};
G__4970.cljs$lang$maxFixedArity = 3;
G__4970.cljs$lang$applyTo = (function (arglist__4980){
var f = cljs.core.first(arglist__4980);
var g = cljs.core.first(cljs.core.next(arglist__4980));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4980)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4980)));
return G__4970__delegate.call(this, f, g, h, fs);
});
return G__4970;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4938.call(this,f);
case  2 :
return juxt__4939.call(this,f,g);
case  3 :
return juxt__4940.call(this,f,g,h);
default:
return juxt__4941.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4941.cljs$lang$applyTo;
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
var dorun__4982 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4985 = cljs.core.next.call(null,coll);
coll = G__4985;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4983 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____4981 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3822__auto____4981))
{return (n > 0);
} else
{return and__3822__auto____4981;
}
})()))
{{
var G__4986 = (n - 1);
var G__4987 = cljs.core.next.call(null,coll);
n = G__4986;
coll = G__4987;
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
return dorun__4982.call(this,n);
case  2 :
return dorun__4983.call(this,n,coll);
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
var doall__4988 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4989 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4988.call(this,n);
case  2 :
return doall__4989.call(this,n,coll);
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
var matches__4991 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4991),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4991),1)))
{return cljs.core.first.call(null,matches__4991);
} else
{return cljs.core.vec.call(null,matches__4991);
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
var matches__4992 = re.exec(s);

if(cljs.core.truth_((matches__4992 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4992),1)))
{return cljs.core.first.call(null,matches__4992);
} else
{return cljs.core.vec.call(null,matches__4992);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4993 = cljs.core.re_find.call(null,re,s);
var match_idx__4994 = s.search(re);
var match_str__4995 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4993))?cljs.core.first.call(null,match_data__4993):match_data__4993);
var post_match__4996 = cljs.core.subs.call(null,s,(match_idx__4994 + cljs.core.count.call(null,match_str__4995)));

if(cljs.core.truth_(match_data__4993))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4993,re_seq.call(null,re,post_match__4996));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__4998__4999 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___5000 = cljs.core.nth.call(null,vec__4998__4999,0,null);
var flags__5001 = cljs.core.nth.call(null,vec__4998__4999,1,null);
var pattern__5002 = cljs.core.nth.call(null,vec__4998__4999,2,null);

return (new RegExp(pattern__5002,flags__5001));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4997_SHARP_){
return print_one.call(null,p1__4997_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____5003 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3822__auto____5003))
{var and__3822__auto____5007 = (function (){var x__451__auto____5004 = obj;

if(cljs.core.truth_((function (){var and__3822__auto____5005 = x__451__auto____5004;

if(cljs.core.truth_(and__3822__auto____5005))
{var and__3822__auto____5006 = x__451__auto____5004.cljs$core$IMeta$;

if(cljs.core.truth_(and__3822__auto____5006))
{return cljs.core.not.call(null,x__451__auto____5004.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3822__auto____5006;
}
} else
{return and__3822__auto____5005;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____5004);
}
})();

if(cljs.core.truth_(and__3822__auto____5007))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____5007;
}
} else
{return and__3822__auto____5003;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____5008 = obj;

if(cljs.core.truth_((function (){var and__3822__auto____5009 = x__451__auto____5008;

if(cljs.core.truth_(and__3822__auto____5009))
{var and__3822__auto____5010 = x__451__auto____5008.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3822__auto____5010))
{return cljs.core.not.call(null,x__451__auto____5008.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3822__auto____5010;
}
} else
{return and__3822__auto____5009;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____5008);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__5011 = cljs.core.first.call(null,objs);
var sb__5012 = (new goog.string.StringBuffer());

var G__5013__5014 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__5013__5014))
{var obj__5015 = cljs.core.first.call(null,G__5013__5014);
var G__5013__5016 = G__5013__5014;

while(true){
if(cljs.core.truth_((obj__5015 === first_obj__5011)))
{} else
{sb__5012.append(" ");
}
var G__5017__5018 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__5015,opts));

if(cljs.core.truth_(G__5017__5018))
{var string__5019 = cljs.core.first.call(null,G__5017__5018);
var G__5017__5020 = G__5017__5018;

while(true){
sb__5012.append(string__5019);
var temp__3974__auto____5021 = cljs.core.next.call(null,G__5017__5020);

if(cljs.core.truth_(temp__3974__auto____5021))
{var G__5017__5022 = temp__3974__auto____5021;

{
var G__5025 = cljs.core.first.call(null,G__5017__5022);
var G__5026 = G__5017__5022;
string__5019 = G__5025;
G__5017__5020 = G__5026;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____5023 = cljs.core.next.call(null,G__5013__5016);

if(cljs.core.truth_(temp__3974__auto____5023))
{var G__5013__5024 = temp__3974__auto____5023;

{
var G__5027 = cljs.core.first.call(null,G__5013__5024);
var G__5028 = G__5013__5024;
obj__5015 = G__5027;
G__5013__5016 = G__5028;
continue;
}
} else
{}
break;
}
} else
{}
return sb__5012;
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
var sb__5029 = cljs.core.pr_sb.call(null,objs,opts);

sb__5029.append("\n");
return cljs.core.str.call(null,sb__5029);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__5030 = cljs.core.first.call(null,objs);

var G__5031__5032 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__5031__5032))
{var obj__5033 = cljs.core.first.call(null,G__5031__5032);
var G__5031__5034 = G__5031__5032;

while(true){
if(cljs.core.truth_((obj__5033 === first_obj__5030)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__5035__5036 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__5033,opts));

if(cljs.core.truth_(G__5035__5036))
{var string__5037 = cljs.core.first.call(null,G__5035__5036);
var G__5035__5038 = G__5035__5036;

while(true){
cljs.core.string_print.call(null,string__5037);
var temp__3974__auto____5039 = cljs.core.next.call(null,G__5035__5038);

if(cljs.core.truth_(temp__3974__auto____5039))
{var G__5035__5040 = temp__3974__auto____5039;

{
var G__5043 = cljs.core.first.call(null,G__5035__5040);
var G__5044 = G__5035__5040;
string__5037 = G__5043;
G__5035__5038 = G__5044;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____5041 = cljs.core.next.call(null,G__5031__5034);

if(cljs.core.truth_(temp__3974__auto____5041))
{var G__5031__5042 = temp__3974__auto____5041;

{
var G__5045 = cljs.core.first.call(null,G__5031__5042);
var G__5046 = G__5031__5042;
obj__5033 = G__5045;
G__5031__5034 = G__5046;
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
pr_str.cljs$lang$applyTo = (function (arglist__5047){
var objs = cljs.core.seq( arglist__5047 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__5048){
var objs = cljs.core.seq( arglist__5048 );;
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
pr.cljs$lang$applyTo = (function (arglist__5049){
var objs = cljs.core.seq( arglist__5049 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__5050){
var objs = cljs.core.seq( arglist__5050 );;
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
print_str.cljs$lang$applyTo = (function (arglist__5051){
var objs = cljs.core.seq( arglist__5051 );;
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
println.cljs$lang$applyTo = (function (arglist__5052){
var objs = cljs.core.seq( arglist__5052 );;
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
println_str.cljs$lang$applyTo = (function (arglist__5053){
var objs = cljs.core.seq( arglist__5053 );;
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
prn.cljs$lang$applyTo = (function (arglist__5054){
var objs = cljs.core.seq( arglist__5054 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__5055 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__5055,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3974__auto____5056 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3974__auto____5056))
{var nspc__5057 = temp__3974__auto____5056;

return cljs.core.str.call(null,nspc__5057,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3974__auto____5058 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3974__auto____5058))
{var nspc__5059 = temp__3974__auto____5058;

return cljs.core.str.call(null,nspc__5059,"/");
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
var pr_pair__5060 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__5060,"{",", ","}",opts,coll);
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
var this__5061 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__5062 = this;
var G__5063__5064 = cljs.core.seq.call(null,this__5062.watches);

if(cljs.core.truth_(G__5063__5064))
{var G__5066__5068 = cljs.core.first.call(null,G__5063__5064);
var vec__5067__5069 = G__5066__5068;
var key__5070 = cljs.core.nth.call(null,vec__5067__5069,0,null);
var f__5071 = cljs.core.nth.call(null,vec__5067__5069,1,null);
var G__5063__5072 = G__5063__5064;

var G__5066__5073 = G__5066__5068;
var G__5063__5074 = G__5063__5072;

while(true){
var vec__5075__5076 = G__5066__5073;
var key__5077 = cljs.core.nth.call(null,vec__5075__5076,0,null);
var f__5078 = cljs.core.nth.call(null,vec__5075__5076,1,null);
var G__5063__5079 = G__5063__5074;

f__5078.call(null,key__5077,this$,oldval,newval);
var temp__3974__auto____5080 = cljs.core.next.call(null,G__5063__5079);

if(cljs.core.truth_(temp__3974__auto____5080))
{var G__5063__5081 = temp__3974__auto____5080;

{
var G__5088 = cljs.core.first.call(null,G__5063__5081);
var G__5089 = G__5063__5081;
G__5066__5073 = G__5088;
G__5063__5074 = G__5089;
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
var this__5082 = this;
return this$.watches = cljs.core.assoc.call(null,this__5082.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__5083 = this;
return this$.watches = cljs.core.dissoc.call(null,this__5083.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__5084 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__5084.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__5085 = this;
return this__5085.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__5086 = this;
return this__5086.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__5087 = this;
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
var atom__5096 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__5097 = (function() { 
var G__5099__delegate = function (x,p__5090){
var map__5091__5092 = p__5090;
var map__5091__5093 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5091__5092))?cljs.core.apply.call(null,cljs.core.hash_map,map__5091__5092):map__5091__5092);
var validator__5094 = cljs.core.get.call(null,map__5091__5093,"\uFDD0'validator");
var meta__5095 = cljs.core.get.call(null,map__5091__5093,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__5095,validator__5094,null));
};
var G__5099 = function (x,var_args){
var p__5090 = null;
if (goog.isDef(var_args)) {
  p__5090 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5099__delegate.call(this, x, p__5090);
};
G__5099.cljs$lang$maxFixedArity = 1;
G__5099.cljs$lang$applyTo = (function (arglist__5100){
var x = cljs.core.first(arglist__5100);
var p__5090 = cljs.core.rest(arglist__5100);
return G__5099__delegate.call(this, x, p__5090);
});
return G__5099;
})()
;
atom = function(x,var_args){
var p__5090 = var_args;
switch(arguments.length){
case  1 :
return atom__5096.call(this,x);
default:
return atom__5097.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__5097.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____5101 = a.validator;

if(cljs.core.truth_(temp__3974__auto____5101))
{var validate__5102 = temp__3974__auto____5101;

if(cljs.core.truth_(validate__5102.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__5103 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__5103,new_value);
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
var swap_BANG___5104 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___5105 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___5106 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5107 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___5108 = (function() { 
var G__5110__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__5110 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__5110__delegate.call(this, a, f, x, y, z, more);
};
G__5110.cljs$lang$maxFixedArity = 5;
G__5110.cljs$lang$applyTo = (function (arglist__5111){
var a = cljs.core.first(arglist__5111);
var f = cljs.core.first(cljs.core.next(arglist__5111));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5111)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5111))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5111)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5111)))));
return G__5110__delegate.call(this, a, f, x, y, z, more);
});
return G__5110;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___5104.call(this,a,f);
case  3 :
return swap_BANG___5105.call(this,a,f,x);
case  4 :
return swap_BANG___5106.call(this,a,f,x,y);
case  5 :
return swap_BANG___5107.call(this,a,f,x,y,z);
default:
return swap_BANG___5108.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___5108.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__5112){
var iref = cljs.core.first(arglist__5112);
var f = cljs.core.first(cljs.core.next(arglist__5112));
var args = cljs.core.rest(cljs.core.next(arglist__5112));
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
var gensym__5113 = (function (){
return gensym.call(null,"G__");
});
var gensym__5114 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__5113.call(this);
case  1 :
return gensym__5114.call(this,prefix_string);
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
var this__5116 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__5116.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__5117 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__5117.state,(function (p__5118){
var curr_state__5119 = p__5118;
var curr_state__5120 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__5119))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__5119):curr_state__5119);
var done__5121 = cljs.core.get.call(null,curr_state__5120,"\uFDD0'done");

if(cljs.core.truth_(done__5121))
{return curr_state__5120;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__5117.f.call(null)});
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
var map__5122__5123 = options;
var map__5122__5124 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5122__5123))?cljs.core.apply.call(null,cljs.core.hash_map,map__5122__5123):map__5122__5123);
var keywordize_keys__5125 = cljs.core.get.call(null,map__5122__5124,"\uFDD0'keywordize-keys");
var keyfn__5126 = (cljs.core.truth_(keywordize_keys__5125)?cljs.core.keyword:cljs.core.str);
var f__5132 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____5131 = (function iter__5127(s__5128){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5128__5129 = s__5128;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__5128__5129)))
{var k__5130 = cljs.core.first.call(null,s__5128__5129);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__5126.call(null,k__5130),thisfn.call(null,(x[k__5130]))]),iter__5127.call(null,cljs.core.rest.call(null,s__5128__5129)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____5131.call(null,cljs.core.js_keys.call(null,x));
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

return f__5132.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__5133){
var x = cljs.core.first(arglist__5133);
var options = cljs.core.rest(arglist__5133);
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
var mem__5134 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__5138__delegate = function (args){
var temp__3971__auto____5135 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__5134),args);

if(cljs.core.truth_(temp__3971__auto____5135))
{var v__5136 = temp__3971__auto____5135;

return v__5136;
} else
{var ret__5137 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__5134,cljs.core.assoc,args,ret__5137);
return ret__5137;
}
};
var G__5138 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5138__delegate.call(this, args);
};
G__5138.cljs$lang$maxFixedArity = 0;
G__5138.cljs$lang$applyTo = (function (arglist__5139){
var args = cljs.core.seq( arglist__5139 );;
return G__5138__delegate.call(this, args);
});
return G__5138;
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
var trampoline__5141 = (function (f){
while(true){
var ret__5140 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__5140)))
{{
var G__5144 = ret__5140;
f = G__5144;
continue;
}
} else
{return ret__5140;
}
break;
}
});
var trampoline__5142 = (function() { 
var G__5145__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__5145 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5145__delegate.call(this, f, args);
};
G__5145.cljs$lang$maxFixedArity = 1;
G__5145.cljs$lang$applyTo = (function (arglist__5146){
var f = cljs.core.first(arglist__5146);
var args = cljs.core.rest(arglist__5146);
return G__5145__delegate.call(this, f, args);
});
return G__5145;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__5141.call(this,f);
default:
return trampoline__5142.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__5142.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__5147 = (function (){
return rand.call(null,1);
});
var rand__5148 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__5147.call(this);
case  1 :
return rand__5148.call(this,n);
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
var k__5150 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__5150,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__5150,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___5159 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___5160 = (function (h,child,parent){
var or__3824__auto____5151 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3824__auto____5151))
{return or__3824__auto____5151;
} else
{var or__3824__auto____5152 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3824__auto____5152))
{return or__3824__auto____5152;
} else
{var and__3822__auto____5153 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3822__auto____5153))
{var and__3822__auto____5154 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3822__auto____5154))
{var and__3822__auto____5155 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3822__auto____5155))
{var ret__5156 = true;
var i__5157 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3824__auto____5158 = cljs.core.not.call(null,ret__5156);

if(cljs.core.truth_(or__3824__auto____5158))
{return or__3824__auto____5158;
} else
{return cljs.core._EQ_.call(null,i__5157,cljs.core.count.call(null,parent));
}
})()))
{return ret__5156;
} else
{{
var G__5162 = isa_QMARK_.call(null,h,child.call(null,i__5157),parent.call(null,i__5157));
var G__5163 = (i__5157 + 1);
ret__5156 = G__5162;
i__5157 = G__5163;
continue;
}
}
break;
}
} else
{return and__3822__auto____5155;
}
} else
{return and__3822__auto____5154;
}
} else
{return and__3822__auto____5153;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___5159.call(this,h,child);
case  3 :
return isa_QMARK___5160.call(this,h,child,parent);
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
var parents__5164 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__5165 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__5164.call(this,h);
case  2 :
return parents__5165.call(this,h,tag);
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
var ancestors__5167 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__5168 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__5167.call(this,h);
case  2 :
return ancestors__5168.call(this,h,tag);
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
var descendants__5170 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__5171 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__5170.call(this,h);
case  2 :
return descendants__5171.call(this,h,tag);
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
var derive__5181 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__5182 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__5176 = "\uFDD0'parents".call(null,h);
var td__5177 = "\uFDD0'descendants".call(null,h);
var ta__5178 = "\uFDD0'ancestors".call(null,h);
var tf__5179 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3824__auto____5180 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__5176.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__5178.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__5178.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__5176,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__5179.call(null,"\uFDD0'ancestors".call(null,h),tag,td__5177,parent,ta__5178),"\uFDD0'descendants":tf__5179.call(null,"\uFDD0'descendants".call(null,h),parent,ta__5178,tag,td__5177)});
})());

if(cljs.core.truth_(or__3824__auto____5180))
{return or__3824__auto____5180;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__5181.call(this,h,tag);
case  3 :
return derive__5182.call(this,h,tag,parent);
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
var underive__5188 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__5189 = (function (h,tag,parent){
var parentMap__5184 = "\uFDD0'parents".call(null,h);
var childsParents__5185 = (cljs.core.truth_(parentMap__5184.call(null,tag))?cljs.core.disj.call(null,parentMap__5184.call(null,tag),parent):cljs.core.set([]));
var newParents__5186 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__5185))?cljs.core.assoc.call(null,parentMap__5184,tag,childsParents__5185):cljs.core.dissoc.call(null,parentMap__5184,tag));
var deriv_seq__5187 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__5173_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__5173_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__5173_SHARP_),cljs.core.second.call(null,p1__5173_SHARP_)));
}),cljs.core.seq.call(null,newParents__5186)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__5184.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__5174_SHARP_,p2__5175_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__5174_SHARP_,p2__5175_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__5187));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__5188.call(this,h,tag);
case  3 :
return underive__5189.call(this,h,tag,parent);
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
var xprefs__5191 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3824__auto____5193 = (cljs.core.truth_((function (){var and__3822__auto____5192 = xprefs__5191;

if(cljs.core.truth_(and__3822__auto____5192))
{return xprefs__5191.call(null,y);
} else
{return and__3822__auto____5192;
}
})())?true:null);

if(cljs.core.truth_(or__3824__auto____5193))
{return or__3824__auto____5193;
} else
{var or__3824__auto____5195 = (function (){var ps__5194 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__5194) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__5194),prefer_table)))
{} else
{}
{
var G__5198 = cljs.core.rest.call(null,ps__5194);
ps__5194 = G__5198;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3824__auto____5195))
{return or__3824__auto____5195;
} else
{var or__3824__auto____5197 = (function (){var ps__5196 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__5196) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__5196),y,prefer_table)))
{} else
{}
{
var G__5199 = cljs.core.rest.call(null,ps__5196);
ps__5196 = G__5199;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3824__auto____5197))
{return or__3824__auto____5197;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____5200 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3824__auto____5200))
{return or__3824__auto____5200;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__5209 = cljs.core.reduce.call(null,(function (be,p__5201){
var vec__5202__5203 = p__5201;
var k__5204 = cljs.core.nth.call(null,vec__5202__5203,0,null);
var ___5205 = cljs.core.nth.call(null,vec__5202__5203,1,null);
var e__5206 = vec__5202__5203;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__5204)))
{var be2__5208 = (cljs.core.truth_((function (){var or__3824__auto____5207 = (be === null);

if(cljs.core.truth_(or__3824__auto____5207))
{return or__3824__auto____5207;
} else
{return cljs.core.dominates.call(null,k__5204,cljs.core.first.call(null,be),prefer_table);
}
})())?e__5206:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__5208),k__5204,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__5204," and ",cljs.core.first.call(null,be2__5208),", and neither is preferred")));
}
return be2__5208;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__5209))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__5209));
return cljs.core.second.call(null,best_entry__5209);
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
if(cljs.core.truth_((function (){var and__3822__auto____5210 = mf;

if(cljs.core.truth_(and__3822__auto____5210))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3822__auto____5210;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3824__auto____5211 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____5211))
{return or__3824__auto____5211;
} else
{var or__3824__auto____5212 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3824__auto____5212))
{return or__3824__auto____5212;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3822__auto____5213 = mf;

if(cljs.core.truth_(and__3822__auto____5213))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3822__auto____5213;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____5214 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____5214))
{return or__3824__auto____5214;
} else
{var or__3824__auto____5215 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3824__auto____5215))
{return or__3824__auto____5215;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3822__auto____5216 = mf;

if(cljs.core.truth_(and__3822__auto____5216))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3822__auto____5216;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____5217 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____5217))
{return or__3824__auto____5217;
} else
{var or__3824__auto____5218 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3824__auto____5218))
{return or__3824__auto____5218;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3822__auto____5219 = mf;

if(cljs.core.truth_(and__3822__auto____5219))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3822__auto____5219;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____5220 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____5220))
{return or__3824__auto____5220;
} else
{var or__3824__auto____5221 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3824__auto____5221))
{return or__3824__auto____5221;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3822__auto____5222 = mf;

if(cljs.core.truth_(and__3822__auto____5222))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3822__auto____5222;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____5223 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____5223))
{return or__3824__auto____5223;
} else
{var or__3824__auto____5224 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3824__auto____5224))
{return or__3824__auto____5224;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3822__auto____5225 = mf;

if(cljs.core.truth_(and__3822__auto____5225))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3822__auto____5225;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3824__auto____5226 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____5226))
{return or__3824__auto____5226;
} else
{var or__3824__auto____5227 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3824__auto____5227))
{return or__3824__auto____5227;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3822__auto____5228 = mf;

if(cljs.core.truth_(and__3822__auto____5228))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3822__auto____5228;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3824__auto____5229 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____5229))
{return or__3824__auto____5229;
} else
{var or__3824__auto____5230 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3824__auto____5230))
{return or__3824__auto____5230;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3822__auto____5231 = mf;

if(cljs.core.truth_(and__3822__auto____5231))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3822__auto____5231;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3824__auto____5232 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____5232))
{return or__3824__auto____5232;
} else
{var or__3824__auto____5233 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3824__auto____5233))
{return or__3824__auto____5233;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__5234 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__5235 = cljs.core._get_method.call(null,mf,dispatch_val__5234);

if(cljs.core.truth_(target_fn__5235))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__5234)));
}
return cljs.core.apply.call(null,target_fn__5235,args);
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
var this__5236 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__5237 = this;
cljs.core.swap_BANG_.call(null,this__5237.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__5237.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__5237.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__5237.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__5238 = this;
cljs.core.swap_BANG_.call(null,this__5238.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__5238.method_cache,this__5238.method_table,this__5238.cached_hierarchy,this__5238.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__5239 = this;
cljs.core.swap_BANG_.call(null,this__5239.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__5239.method_cache,this__5239.method_table,this__5239.cached_hierarchy,this__5239.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__5240 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__5240.cached_hierarchy),cljs.core.deref.call(null,this__5240.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__5240.method_cache,this__5240.method_table,this__5240.cached_hierarchy,this__5240.hierarchy);
}
var temp__3971__auto____5241 = cljs.core.deref.call(null,this__5240.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3971__auto____5241))
{var target_fn__5242 = temp__3971__auto____5241;

return target_fn__5242;
} else
{var temp__3971__auto____5243 = cljs.core.find_and_cache_best_method.call(null,this__5240.name,dispatch_val,this__5240.hierarchy,this__5240.method_table,this__5240.prefer_table,this__5240.method_cache,this__5240.cached_hierarchy);

if(cljs.core.truth_(temp__3971__auto____5243))
{var target_fn__5244 = temp__3971__auto____5243;

return target_fn__5244;
} else
{return cljs.core.deref.call(null,this__5240.method_table).call(null,this__5240.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__5245 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__5245.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__5245.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__5245.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__5245.method_cache,this__5245.method_table,this__5245.cached_hierarchy,this__5245.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__5246 = this;
return cljs.core.deref.call(null,this__5246.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__5247 = this;
return cljs.core.deref.call(null,this__5247.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__5248 = this;
return cljs.core.do_dispatch.call(null,mf,this__5248.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__5249__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__5249 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5249__delegate.call(this, _, args);
};
G__5249.cljs$lang$maxFixedArity = 1;
G__5249.cljs$lang$applyTo = (function (arglist__5250){
var _ = cljs.core.first(arglist__5250);
var args = cljs.core.rest(arglist__5250);
return G__5249__delegate.call(this, _, args);
});
return G__5249;
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
