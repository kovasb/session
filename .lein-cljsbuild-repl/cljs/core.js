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
var or__3824__auto____3997 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3824__auto____3997))
{return or__3824__auto____3997;
} else
{var or__3824__auto____3998 = (p["_"]);

if(cljs.core.truth_(or__3824__auto____3998))
{return or__3824__auto____3998;
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
var _invoke__4062 = (function (this$){
if(cljs.core.truth_((function (){var and__3822__auto____3999 = this$;

if(cljs.core.truth_(and__3822__auto____3999))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____3999;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3824__auto____4000 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4000))
{return or__3824__auto____4000;
} else
{var or__3824__auto____4001 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4001))
{return or__3824__auto____4001;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__4063 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3822__auto____4002 = this$;

if(cljs.core.truth_(and__3822__auto____4002))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4002;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3824__auto____4003 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4003))
{return or__3824__auto____4003;
} else
{var or__3824__auto____4004 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4004))
{return or__3824__auto____4004;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__4064 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3822__auto____4005 = this$;

if(cljs.core.truth_(and__3822__auto____4005))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4005;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3824__auto____4006 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4006))
{return or__3824__auto____4006;
} else
{var or__3824__auto____4007 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4007))
{return or__3824__auto____4007;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4065 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3822__auto____4008 = this$;

if(cljs.core.truth_(and__3822__auto____4008))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4008;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3824__auto____4009 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4009))
{return or__3824__auto____4009;
} else
{var or__3824__auto____4010 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4010))
{return or__3824__auto____4010;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__4066 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3822__auto____4011 = this$;

if(cljs.core.truth_(and__3822__auto____4011))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4011;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____4012 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4012))
{return or__3824__auto____4012;
} else
{var or__3824__auto____4013 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4013))
{return or__3824__auto____4013;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__4067 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3822__auto____4014 = this$;

if(cljs.core.truth_(and__3822__auto____4014))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4014;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____4015 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4015))
{return or__3824__auto____4015;
} else
{var or__3824__auto____4016 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4016))
{return or__3824__auto____4016;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__4068 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3822__auto____4017 = this$;

if(cljs.core.truth_(and__3822__auto____4017))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4017;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____4018 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4018))
{return or__3824__auto____4018;
} else
{var or__3824__auto____4019 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4019))
{return or__3824__auto____4019;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__4069 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3822__auto____4020 = this$;

if(cljs.core.truth_(and__3822__auto____4020))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4020;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____4021 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4021))
{return or__3824__auto____4021;
} else
{var or__3824__auto____4022 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4022))
{return or__3824__auto____4022;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__4070 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3822__auto____4023 = this$;

if(cljs.core.truth_(and__3822__auto____4023))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4023;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____4024 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4024))
{return or__3824__auto____4024;
} else
{var or__3824__auto____4025 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4025))
{return or__3824__auto____4025;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__4071 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3822__auto____4026 = this$;

if(cljs.core.truth_(and__3822__auto____4026))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4026;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____4027 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4027))
{return or__3824__auto____4027;
} else
{var or__3824__auto____4028 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4028))
{return or__3824__auto____4028;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__4072 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3822__auto____4029 = this$;

if(cljs.core.truth_(and__3822__auto____4029))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4029;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____4030 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4030))
{return or__3824__auto____4030;
} else
{var or__3824__auto____4031 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4031))
{return or__3824__auto____4031;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__4073 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3822__auto____4032 = this$;

if(cljs.core.truth_(and__3822__auto____4032))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4032;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____4033 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4033))
{return or__3824__auto____4033;
} else
{var or__3824__auto____4034 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4034))
{return or__3824__auto____4034;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__4074 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3822__auto____4035 = this$;

if(cljs.core.truth_(and__3822__auto____4035))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4035;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____4036 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4036))
{return or__3824__auto____4036;
} else
{var or__3824__auto____4037 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4037))
{return or__3824__auto____4037;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__4075 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3822__auto____4038 = this$;

if(cljs.core.truth_(and__3822__auto____4038))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4038;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____4039 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4039))
{return or__3824__auto____4039;
} else
{var or__3824__auto____4040 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4040))
{return or__3824__auto____4040;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__4076 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3822__auto____4041 = this$;

if(cljs.core.truth_(and__3822__auto____4041))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4041;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____4042 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4042))
{return or__3824__auto____4042;
} else
{var or__3824__auto____4043 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4043))
{return or__3824__auto____4043;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__4077 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3822__auto____4044 = this$;

if(cljs.core.truth_(and__3822__auto____4044))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4044;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____4045 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4045))
{return or__3824__auto____4045;
} else
{var or__3824__auto____4046 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4046))
{return or__3824__auto____4046;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__4078 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3822__auto____4047 = this$;

if(cljs.core.truth_(and__3822__auto____4047))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4047;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____4048 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4048))
{return or__3824__auto____4048;
} else
{var or__3824__auto____4049 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4049))
{return or__3824__auto____4049;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__4079 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3822__auto____4050 = this$;

if(cljs.core.truth_(and__3822__auto____4050))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4050;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____4051 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4051))
{return or__3824__auto____4051;
} else
{var or__3824__auto____4052 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4052))
{return or__3824__auto____4052;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__4080 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3822__auto____4053 = this$;

if(cljs.core.truth_(and__3822__auto____4053))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4053;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____4054 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4054))
{return or__3824__auto____4054;
} else
{var or__3824__auto____4055 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4055))
{return or__3824__auto____4055;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__4081 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3822__auto____4056 = this$;

if(cljs.core.truth_(and__3822__auto____4056))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4056;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____4057 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4057))
{return or__3824__auto____4057;
} else
{var or__3824__auto____4058 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4058))
{return or__3824__auto____4058;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__4082 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3822__auto____4059 = this$;

if(cljs.core.truth_(and__3822__auto____4059))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____4059;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____4060 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4060))
{return or__3824__auto____4060;
} else
{var or__3824__auto____4061 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____4061))
{return or__3824__auto____4061;
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
return _invoke__4062.call(this,this$);
case  2 :
return _invoke__4063.call(this,this$,a);
case  3 :
return _invoke__4064.call(this,this$,a,b);
case  4 :
return _invoke__4065.call(this,this$,a,b,c);
case  5 :
return _invoke__4066.call(this,this$,a,b,c,d);
case  6 :
return _invoke__4067.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__4068.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__4069.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__4070.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__4071.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__4072.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__4073.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__4074.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__4075.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__4076.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__4077.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__4078.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__4079.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__4080.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__4081.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__4082.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3822__auto____4084 = coll;

if(cljs.core.truth_(and__3822__auto____4084))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3822__auto____4084;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3824__auto____4085 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4085))
{return or__3824__auto____4085;
} else
{var or__3824__auto____4086 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3824__auto____4086))
{return or__3824__auto____4086;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3822__auto____4087 = coll;

if(cljs.core.truth_(and__3822__auto____4087))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3822__auto____4087;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3824__auto____4088 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4088))
{return or__3824__auto____4088;
} else
{var or__3824__auto____4089 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3824__auto____4089))
{return or__3824__auto____4089;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3822__auto____4090 = coll;

if(cljs.core.truth_(and__3822__auto____4090))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3822__auto____4090;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3824__auto____4091 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4091))
{return or__3824__auto____4091;
} else
{var or__3824__auto____4092 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3824__auto____4092))
{return or__3824__auto____4092;
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
var _nth__4099 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3822__auto____4093 = coll;

if(cljs.core.truth_(and__3822__auto____4093))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3822__auto____4093;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3824__auto____4094 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4094))
{return or__3824__auto____4094;
} else
{var or__3824__auto____4095 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3824__auto____4095))
{return or__3824__auto____4095;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__4100 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3822__auto____4096 = coll;

if(cljs.core.truth_(and__3822__auto____4096))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3822__auto____4096;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3824__auto____4097 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4097))
{return or__3824__auto____4097;
} else
{var or__3824__auto____4098 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3824__auto____4098))
{return or__3824__auto____4098;
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
return _nth__4099.call(this,coll,n);
case  3 :
return _nth__4100.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3822__auto____4102 = coll;

if(cljs.core.truth_(and__3822__auto____4102))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3822__auto____4102;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3824__auto____4103 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4103))
{return or__3824__auto____4103;
} else
{var or__3824__auto____4104 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3824__auto____4104))
{return or__3824__auto____4104;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3822__auto____4105 = coll;

if(cljs.core.truth_(and__3822__auto____4105))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3822__auto____4105;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3824__auto____4106 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4106))
{return or__3824__auto____4106;
} else
{var or__3824__auto____4107 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3824__auto____4107))
{return or__3824__auto____4107;
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
var _lookup__4114 = (function (o,k){
if(cljs.core.truth_((function (){var and__3822__auto____4108 = o;

if(cljs.core.truth_(and__3822__auto____4108))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3822__auto____4108;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3824__auto____4109 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4109))
{return or__3824__auto____4109;
} else
{var or__3824__auto____4110 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3824__auto____4110))
{return or__3824__auto____4110;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__4115 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3822__auto____4111 = o;

if(cljs.core.truth_(and__3822__auto____4111))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3822__auto____4111;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3824__auto____4112 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4112))
{return or__3824__auto____4112;
} else
{var or__3824__auto____4113 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3824__auto____4113))
{return or__3824__auto____4113;
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
return _lookup__4114.call(this,o,k);
case  3 :
return _lookup__4115.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____4117 = coll;

if(cljs.core.truth_(and__3822__auto____4117))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3822__auto____4117;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3824__auto____4118 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4118))
{return or__3824__auto____4118;
} else
{var or__3824__auto____4119 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3824__auto____4119))
{return or__3824__auto____4119;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3822__auto____4120 = coll;

if(cljs.core.truth_(and__3822__auto____4120))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3822__auto____4120;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3824__auto____4121 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4121))
{return or__3824__auto____4121;
} else
{var or__3824__auto____4122 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3824__auto____4122))
{return or__3824__auto____4122;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____4123 = coll;

if(cljs.core.truth_(and__3822__auto____4123))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3822__auto____4123;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3824__auto____4124 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4124))
{return or__3824__auto____4124;
} else
{var or__3824__auto____4125 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3824__auto____4125))
{return or__3824__auto____4125;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3822__auto____4126 = coll;

if(cljs.core.truth_(and__3822__auto____4126))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3822__auto____4126;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3824__auto____4127 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4127))
{return or__3824__auto____4127;
} else
{var or__3824__auto____4128 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3824__auto____4128))
{return or__3824__auto____4128;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3822__auto____4129 = coll;

if(cljs.core.truth_(and__3822__auto____4129))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3822__auto____4129;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3824__auto____4130 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4130))
{return or__3824__auto____4130;
} else
{var or__3824__auto____4131 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3824__auto____4131))
{return or__3824__auto____4131;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3822__auto____4132 = coll;

if(cljs.core.truth_(and__3822__auto____4132))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3822__auto____4132;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3824__auto____4133 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4133))
{return or__3824__auto____4133;
} else
{var or__3824__auto____4134 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3824__auto____4134))
{return or__3824__auto____4134;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3822__auto____4135 = coll;

if(cljs.core.truth_(and__3822__auto____4135))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3822__auto____4135;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3824__auto____4136 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4136))
{return or__3824__auto____4136;
} else
{var or__3824__auto____4137 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3824__auto____4137))
{return or__3824__auto____4137;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3822__auto____4138 = o;

if(cljs.core.truth_(and__3822__auto____4138))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3822__auto____4138;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3824__auto____4139 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4139))
{return or__3824__auto____4139;
} else
{var or__3824__auto____4140 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3824__auto____4140))
{return or__3824__auto____4140;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3822__auto____4141 = o;

if(cljs.core.truth_(and__3822__auto____4141))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3822__auto____4141;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____4142 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4142))
{return or__3824__auto____4142;
} else
{var or__3824__auto____4143 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3824__auto____4143))
{return or__3824__auto____4143;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3822__auto____4144 = o;

if(cljs.core.truth_(and__3822__auto____4144))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3822__auto____4144;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3824__auto____4145 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4145))
{return or__3824__auto____4145;
} else
{var or__3824__auto____4146 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3824__auto____4146))
{return or__3824__auto____4146;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3822__auto____4147 = o;

if(cljs.core.truth_(and__3822__auto____4147))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3822__auto____4147;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3824__auto____4148 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4148))
{return or__3824__auto____4148;
} else
{var or__3824__auto____4149 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3824__auto____4149))
{return or__3824__auto____4149;
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
var _reduce__4156 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3822__auto____4150 = coll;

if(cljs.core.truth_(and__3822__auto____4150))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3822__auto____4150;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3824__auto____4151 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4151))
{return or__3824__auto____4151;
} else
{var or__3824__auto____4152 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3824__auto____4152))
{return or__3824__auto____4152;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__4157 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3822__auto____4153 = coll;

if(cljs.core.truth_(and__3822__auto____4153))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3822__auto____4153;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3824__auto____4154 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____4154))
{return or__3824__auto____4154;
} else
{var or__3824__auto____4155 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3824__auto____4155))
{return or__3824__auto____4155;
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
return _reduce__4156.call(this,coll,f);
case  3 :
return _reduce__4157.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3822__auto____4159 = o;

if(cljs.core.truth_(and__3822__auto____4159))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3822__auto____4159;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3824__auto____4160 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4160))
{return or__3824__auto____4160;
} else
{var or__3824__auto____4161 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3824__auto____4161))
{return or__3824__auto____4161;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3822__auto____4162 = o;

if(cljs.core.truth_(and__3822__auto____4162))
{return o.cljs$core$IHash$_hash;
} else
{return and__3822__auto____4162;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3824__auto____4163 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4163))
{return or__3824__auto____4163;
} else
{var or__3824__auto____4164 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3824__auto____4164))
{return or__3824__auto____4164;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3822__auto____4165 = o;

if(cljs.core.truth_(and__3822__auto____4165))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3822__auto____4165;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3824__auto____4166 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4166))
{return or__3824__auto____4166;
} else
{var or__3824__auto____4167 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3824__auto____4167))
{return or__3824__auto____4167;
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
if(cljs.core.truth_((function (){var and__3822__auto____4168 = o;

if(cljs.core.truth_(and__3822__auto____4168))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3822__auto____4168;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3824__auto____4169 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____4169))
{return or__3824__auto____4169;
} else
{var or__3824__auto____4170 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3824__auto____4170))
{return or__3824__auto____4170;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3822__auto____4171 = d;

if(cljs.core.truth_(and__3822__auto____4171))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3822__auto____4171;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3824__auto____4172 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3824__auto____4172))
{return or__3824__auto____4172;
} else
{var or__3824__auto____4173 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3824__auto____4173))
{return or__3824__auto____4173;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3822__auto____4174 = this$;

if(cljs.core.truth_(and__3822__auto____4174))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3822__auto____4174;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____4175 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4175))
{return or__3824__auto____4175;
} else
{var or__3824__auto____4176 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3824__auto____4176))
{return or__3824__auto____4176;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3822__auto____4177 = this$;

if(cljs.core.truth_(and__3822__auto____4177))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3822__auto____4177;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3824__auto____4178 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4178))
{return or__3824__auto____4178;
} else
{var or__3824__auto____4179 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3824__auto____4179))
{return or__3824__auto____4179;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3822__auto____4180 = this$;

if(cljs.core.truth_(and__3822__auto____4180))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3822__auto____4180;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3824__auto____4181 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____4181))
{return or__3824__auto____4181;
} else
{var or__3824__auto____4182 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3824__auto____4182))
{return or__3824__auto____4182;
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
Function.prototype.cljs$core$IPrintable$ = true;
Function.prototype.cljs$core$IPrintable$_pr_seq = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__4183 = null;
var G__4183__4184 = (function (o,k){
return null;
});
var G__4183__4185 = (function (o,k,not_found){
return not_found;
});
G__4183 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__4183__4184.call(this,o,k);
case  3 :
return G__4183__4185.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4183;
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
var G__4187 = null;
var G__4187__4188 = (function (_,f){
return f.call(null);
});
var G__4187__4189 = (function (_,f,start){
return start;
});
G__4187 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__4187__4188.call(this,_,f);
case  3 :
return G__4187__4189.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4187;
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
return cljs.core.nil_QMARK_.call(null,o);
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
var G__4191 = null;
var G__4191__4192 = (function (_,n){
return null;
});
var G__4191__4193 = (function (_,n,not_found){
return not_found;
});
G__4191 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__4191__4192.call(this,_,n);
case  3 :
return G__4191__4193.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4191;
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
var ci_reduce__4201 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__4195 = cljs.core._nth.call(null,cicoll,0);
var n__4196 = 1;

while(true){
if(cljs.core.truth_((n__4196 < cljs.core._count.call(null,cicoll))))
{{
var G__4205 = f.call(null,val__4195,cljs.core._nth.call(null,cicoll,n__4196));
var G__4206 = (n__4196 + 1);
val__4195 = G__4205;
n__4196 = G__4206;
continue;
}
} else
{return val__4195;
}
break;
}
}
});
var ci_reduce__4202 = (function (cicoll,f,val){
var val__4197 = val;
var n__4198 = 0;

while(true){
if(cljs.core.truth_((n__4198 < cljs.core._count.call(null,cicoll))))
{{
var G__4207 = f.call(null,val__4197,cljs.core._nth.call(null,cicoll,n__4198));
var G__4208 = (n__4198 + 1);
val__4197 = G__4207;
n__4198 = G__4208;
continue;
}
} else
{return val__4197;
}
break;
}
});
var ci_reduce__4203 = (function (cicoll,f,val,idx){
var val__4199 = val;
var n__4200 = idx;

while(true){
if(cljs.core.truth_((n__4200 < cljs.core._count.call(null,cicoll))))
{{
var G__4209 = f.call(null,val__4199,cljs.core._nth.call(null,cicoll,n__4200));
var G__4210 = (n__4200 + 1);
val__4199 = G__4209;
n__4200 = G__4210;
continue;
}
} else
{return val__4199;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__4201.call(this,cicoll,f);
case  3 :
return ci_reduce__4202.call(this,cicoll,f,val);
case  4 :
return ci_reduce__4203.call(this,cicoll,f,val,idx);
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
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__268__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4211 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4224 = null;
var G__4224__4225 = (function (_,f){
var this__4212 = this;
return cljs.core.ci_reduce.call(null,this__4212.a,f,(this__4212.a[this__4212.i]),(this__4212.i + 1));
});
var G__4224__4226 = (function (_,f,start){
var this__4213 = this;
return cljs.core.ci_reduce.call(null,this__4213.a,f,start,this__4213.i);
});
G__4224 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__4224__4225.call(this,_,f);
case  3 :
return G__4224__4226.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4224;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4214 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4215 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4228 = null;
var G__4228__4229 = (function (coll,n){
var this__4216 = this;
var i__4217 = (n + this__4216.i);

if(cljs.core.truth_((i__4217 < this__4216.a.length)))
{return (this__4216.a[i__4217]);
} else
{return null;
}
});
var G__4228__4230 = (function (coll,n,not_found){
var this__4218 = this;
var i__4219 = (n + this__4218.i);

if(cljs.core.truth_((i__4219 < this__4218.a.length)))
{return (this__4218.a[i__4219]);
} else
{return not_found;
}
});
G__4228 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4228__4229.call(this,coll,n);
case  3 :
return G__4228__4230.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4228;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__4220 = this;
return (this__4220.a.length - this__4220.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__4221 = this;
return (this__4221.a[this__4221.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__4222 = this;
if(cljs.core.truth_(((this__4222.i + 1) < this__4222.a.length)))
{return (new cljs.core.IndexedSeq(this__4222.a,(this__4222.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__4223 = this;
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
var G__4232 = null;
var G__4232__4233 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__4232__4234 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__4232 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__4232__4233.call(this,array,f);
case  3 :
return G__4232__4234.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4232;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__4236 = null;
var G__4236__4237 = (function (array,k){
return (array[k]);
});
var G__4236__4238 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__4236 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__4236__4237.call(this,array,k);
case  3 :
return G__4236__4238.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4236;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__4240 = null;
var G__4240__4241 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__4240__4242 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__4240 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__4240__4241.call(this,array,n);
case  3 :
return G__4240__4242.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4240;
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
var temp__3974__auto____4244 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4244))
{var s__4245 = temp__3974__auto____4244;

return cljs.core._first.call(null,s__4245);
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
var G__4246 = cljs.core.next.call(null,s);
s = G__4246;
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
var s__4247 = cljs.core.seq.call(null,x);
var n__4248 = 0;

while(true){
if(cljs.core.truth_(s__4247))
{{
var G__4249 = cljs.core.next.call(null,s__4247);
var G__4250 = (n__4248 + 1);
s__4247 = G__4249;
n__4248 = G__4250;
continue;
}
} else
{return n__4248;
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
var conj__4251 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__4252 = (function() { 
var G__4254__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__4255 = conj.call(null,coll,x);
var G__4256 = cljs.core.first.call(null,xs);
var G__4257 = cljs.core.next.call(null,xs);
coll = G__4255;
x = G__4256;
xs = G__4257;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__4254 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4254__delegate.call(this, coll, x, xs);
};
G__4254.cljs$lang$maxFixedArity = 2;
G__4254.cljs$lang$applyTo = (function (arglist__4258){
var coll = cljs.core.first(arglist__4258);
var x = cljs.core.first(cljs.core.next(arglist__4258));
var xs = cljs.core.rest(cljs.core.next(arglist__4258));
return G__4254__delegate.call(this, coll, x, xs);
});
return G__4254;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__4251.call(this,coll,x);
default:
return conj__4252.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__4252.cljs$lang$applyTo;
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
var nth__4259 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__4260 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__4259.call(this,coll,n);
case  3 :
return nth__4260.call(this,coll,n,not_found);
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
var get__4262 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__4263 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__4262.call(this,o,k);
case  3 :
return get__4263.call(this,o,k,not_found);
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
var assoc__4266 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4267 = (function() { 
var G__4269__delegate = function (coll,k,v,kvs){
while(true){
var ret__4265 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__4270 = ret__4265;
var G__4271 = cljs.core.first.call(null,kvs);
var G__4272 = cljs.core.second.call(null,kvs);
var G__4273 = cljs.core.nnext.call(null,kvs);
coll = G__4270;
k = G__4271;
v = G__4272;
kvs = G__4273;
continue;
}
} else
{return ret__4265;
}
break;
}
};
var G__4269 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4269__delegate.call(this, coll, k, v, kvs);
};
G__4269.cljs$lang$maxFixedArity = 3;
G__4269.cljs$lang$applyTo = (function (arglist__4274){
var coll = cljs.core.first(arglist__4274);
var k = cljs.core.first(cljs.core.next(arglist__4274));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4274)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4274)));
return G__4269__delegate.call(this, coll, k, v, kvs);
});
return G__4269;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__4266.call(this,coll,k,v);
default:
return assoc__4267.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4267.cljs$lang$applyTo;
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
var dissoc__4276 = (function (coll){
return coll;
});
var dissoc__4277 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__4278 = (function() { 
var G__4280__delegate = function (coll,k,ks){
while(true){
var ret__4275 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__4281 = ret__4275;
var G__4282 = cljs.core.first.call(null,ks);
var G__4283 = cljs.core.next.call(null,ks);
coll = G__4281;
k = G__4282;
ks = G__4283;
continue;
}
} else
{return ret__4275;
}
break;
}
};
var G__4280 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4280__delegate.call(this, coll, k, ks);
};
G__4280.cljs$lang$maxFixedArity = 2;
G__4280.cljs$lang$applyTo = (function (arglist__4284){
var coll = cljs.core.first(arglist__4284);
var k = cljs.core.first(cljs.core.next(arglist__4284));
var ks = cljs.core.rest(cljs.core.next(arglist__4284));
return G__4280__delegate.call(this, coll, k, ks);
});
return G__4280;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__4276.call(this,coll);
case  2 :
return dissoc__4277.call(this,coll,k);
default:
return dissoc__4278.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__4278.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__353__auto____4285 = o;

if(cljs.core.truth_((function (){var and__3822__auto____4286 = x__353__auto____4285;

if(cljs.core.truth_(and__3822__auto____4286))
{var and__3822__auto____4287 = x__353__auto____4285.cljs$core$IMeta$;

if(cljs.core.truth_(and__3822__auto____4287))
{return cljs.core.not.call(null,x__353__auto____4285.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3822__auto____4287;
}
} else
{return and__3822__auto____4286;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__353__auto____4285);
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
var disj__4289 = (function (coll){
return coll;
});
var disj__4290 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__4291 = (function() { 
var G__4293__delegate = function (coll,k,ks){
while(true){
var ret__4288 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__4294 = ret__4288;
var G__4295 = cljs.core.first.call(null,ks);
var G__4296 = cljs.core.next.call(null,ks);
coll = G__4294;
k = G__4295;
ks = G__4296;
continue;
}
} else
{return ret__4288;
}
break;
}
};
var G__4293 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4293__delegate.call(this, coll, k, ks);
};
G__4293.cljs$lang$maxFixedArity = 2;
G__4293.cljs$lang$applyTo = (function (arglist__4297){
var coll = cljs.core.first(arglist__4297);
var k = cljs.core.first(cljs.core.next(arglist__4297));
var ks = cljs.core.rest(cljs.core.next(arglist__4297));
return G__4293__delegate.call(this, coll, k, ks);
});
return G__4293;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__4289.call(this,coll);
case  2 :
return disj__4290.call(this,coll,k);
default:
return disj__4291.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__4291.cljs$lang$applyTo;
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
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__353__auto____4298 = x;

if(cljs.core.truth_((function (){var and__3822__auto____4299 = x__353__auto____4298;

if(cljs.core.truth_(and__3822__auto____4299))
{var and__3822__auto____4300 = x__353__auto____4298.cljs$core$ICollection$;

if(cljs.core.truth_(and__3822__auto____4300))
{return cljs.core.not.call(null,x__353__auto____4298.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3822__auto____4300;
}
} else
{return and__3822__auto____4299;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__353__auto____4298);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__353__auto____4301 = x;

if(cljs.core.truth_((function (){var and__3822__auto____4302 = x__353__auto____4301;

if(cljs.core.truth_(and__3822__auto____4302))
{var and__3822__auto____4303 = x__353__auto____4301.cljs$core$ISet$;

if(cljs.core.truth_(and__3822__auto____4303))
{return cljs.core.not.call(null,x__353__auto____4301.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3822__auto____4303;
}
} else
{return and__3822__auto____4302;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__353__auto____4301);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__353__auto____4304 = x;

if(cljs.core.truth_((function (){var and__3822__auto____4305 = x__353__auto____4304;

if(cljs.core.truth_(and__3822__auto____4305))
{var and__3822__auto____4306 = x__353__auto____4304.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3822__auto____4306))
{return cljs.core.not.call(null,x__353__auto____4304.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3822__auto____4306;
}
} else
{return and__3822__auto____4305;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__353__auto____4304);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__353__auto____4307 = x;

if(cljs.core.truth_((function (){var and__3822__auto____4308 = x__353__auto____4307;

if(cljs.core.truth_(and__3822__auto____4308))
{var and__3822__auto____4309 = x__353__auto____4307.cljs$core$ISequential$;

if(cljs.core.truth_(and__3822__auto____4309))
{return cljs.core.not.call(null,x__353__auto____4307.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3822__auto____4309;
}
} else
{return and__3822__auto____4308;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__353__auto____4307);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__353__auto____4310 = x;

if(cljs.core.truth_((function (){var and__3822__auto____4311 = x__353__auto____4310;

if(cljs.core.truth_(and__3822__auto____4311))
{var and__3822__auto____4312 = x__353__auto____4310.cljs$core$ICounted$;

if(cljs.core.truth_(and__3822__auto____4312))
{return cljs.core.not.call(null,x__353__auto____4310.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3822__auto____4312;
}
} else
{return and__3822__auto____4311;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__353__auto____4310);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__353__auto____4313 = x;

if(cljs.core.truth_((function (){var and__3822__auto____4314 = x__353__auto____4313;

if(cljs.core.truth_(and__3822__auto____4314))
{var and__3822__auto____4315 = x__353__auto____4313.cljs$core$IMap$;

if(cljs.core.truth_(and__3822__auto____4315))
{return cljs.core.not.call(null,x__353__auto____4313.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3822__auto____4315;
}
} else
{return and__3822__auto____4314;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__353__auto____4313);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__353__auto____4316 = x;

if(cljs.core.truth_((function (){var and__3822__auto____4317 = x__353__auto____4316;

if(cljs.core.truth_(and__3822__auto____4317))
{var and__3822__auto____4318 = x__353__auto____4316.cljs$core$IVector$;

if(cljs.core.truth_(and__3822__auto____4318))
{return cljs.core.not.call(null,x__353__auto____4316.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3822__auto____4318;
}
} else
{return and__3822__auto____4317;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__353__auto____4316);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__4319 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__4319.push(key);
}));
return keys__4319;
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
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__353__auto____4320 = s;

if(cljs.core.truth_((function (){var and__3822__auto____4321 = x__353__auto____4320;

if(cljs.core.truth_(and__3822__auto____4321))
{var and__3822__auto____4322 = x__353__auto____4320.cljs$core$ISeq$;

if(cljs.core.truth_(and__3822__auto____4322))
{return cljs.core.not.call(null,x__353__auto____4320.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3822__auto____4322;
}
} else
{return and__3822__auto____4321;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__353__auto____4320);
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
var and__3822__auto____4323 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3822__auto____4323))
{return cljs.core.not.call(null,(function (){var or__3824__auto____4324 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3824__auto____4324))
{return or__3824__auto____4324;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3822__auto____4323;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____4325 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3822__auto____4325))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3822__auto____4325;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____4326 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3822__auto____4326))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3822__auto____4326;
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
var and__3822__auto____4327 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3822__auto____4327))
{return (n == n.toFixed());
} else
{return and__3822__auto____4327;
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
if(cljs.core.truth_((function (){var and__3822__auto____4328 = coll;

if(cljs.core.truth_(and__3822__auto____4328))
{var and__3822__auto____4329 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3822__auto____4329))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____4329;
}
} else
{return and__3822__auto____4328;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
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
var distinct_QMARK___4334 = (function (x){
return true;
});
var distinct_QMARK___4335 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___4336 = (function() { 
var G__4338__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__4330 = cljs.core.set([y,x]);
var xs__4331 = more;

while(true){
var x__4332 = cljs.core.first.call(null,xs__4331);
var etc__4333 = cljs.core.next.call(null,xs__4331);

if(cljs.core.truth_(xs__4331))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__4330,x__4332)))
{return false;
} else
{{
var G__4339 = cljs.core.conj.call(null,s__4330,x__4332);
var G__4340 = etc__4333;
s__4330 = G__4339;
xs__4331 = G__4340;
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
var G__4338 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4338__delegate.call(this, x, y, more);
};
G__4338.cljs$lang$maxFixedArity = 2;
G__4338.cljs$lang$applyTo = (function (arglist__4341){
var x = cljs.core.first(arglist__4341);
var y = cljs.core.first(cljs.core.next(arglist__4341));
var more = cljs.core.rest(cljs.core.next(arglist__4341));
return G__4338__delegate.call(this, x, y, more);
});
return G__4338;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___4334.call(this,x);
case  2 :
return distinct_QMARK___4335.call(this,x,y);
default:
return distinct_QMARK___4336.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___4336.cljs$lang$applyTo;
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
var r__4342 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__4342)))
{return r__4342;
} else
{if(cljs.core.truth_(r__4342))
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
var sort__4344 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__4345 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__4343 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__4343,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__4343);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__4344.call(this,comp);
case  2 :
return sort__4345.call(this,comp,coll);
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
var sort_by__4347 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__4348 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__4347.call(this,keyfn,comp);
case  3 :
return sort_by__4348.call(this,keyfn,comp,coll);
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
var reduce__4350 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__4351 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__4350.call(this,f,val);
case  3 :
return reduce__4351.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__4357 = (function (f,coll){
var temp__3971__auto____4353 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3971__auto____4353))
{var s__4354 = temp__3971__auto____4353;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__4354),cljs.core.next.call(null,s__4354));
} else
{return f.call(null);
}
});
var seq_reduce__4358 = (function (f,val,coll){
var val__4355 = val;
var coll__4356 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__4356))
{{
var G__4360 = f.call(null,val__4355,cljs.core.first.call(null,coll__4356));
var G__4361 = cljs.core.next.call(null,coll__4356);
val__4355 = G__4360;
coll__4356 = G__4361;
continue;
}
} else
{return val__4355;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__4357.call(this,f,val);
case  3 :
return seq_reduce__4358.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__4362 = null;
var G__4362__4363 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__4362__4364 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__4362 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4362__4363.call(this,coll,f);
case  3 :
return G__4362__4364.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4362;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___4366 = (function (){
return 0;
});
var _PLUS___4367 = (function (x){
return x;
});
var _PLUS___4368 = (function (x,y){
return (x + y);
});
var _PLUS___4369 = (function() { 
var G__4371__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__4371 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4371__delegate.call(this, x, y, more);
};
G__4371.cljs$lang$maxFixedArity = 2;
G__4371.cljs$lang$applyTo = (function (arglist__4372){
var x = cljs.core.first(arglist__4372);
var y = cljs.core.first(cljs.core.next(arglist__4372));
var more = cljs.core.rest(cljs.core.next(arglist__4372));
return G__4371__delegate.call(this, x, y, more);
});
return G__4371;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___4366.call(this);
case  1 :
return _PLUS___4367.call(this,x);
case  2 :
return _PLUS___4368.call(this,x,y);
default:
return _PLUS___4369.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___4369.cljs$lang$applyTo;
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
var ___4373 = (function (x){
return (- x);
});
var ___4374 = (function (x,y){
return (x - y);
});
var ___4375 = (function() { 
var G__4377__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__4377 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4377__delegate.call(this, x, y, more);
};
G__4377.cljs$lang$maxFixedArity = 2;
G__4377.cljs$lang$applyTo = (function (arglist__4378){
var x = cljs.core.first(arglist__4378);
var y = cljs.core.first(cljs.core.next(arglist__4378));
var more = cljs.core.rest(cljs.core.next(arglist__4378));
return G__4377__delegate.call(this, x, y, more);
});
return G__4377;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___4373.call(this,x);
case  2 :
return ___4374.call(this,x,y);
default:
return ___4375.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___4375.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___4379 = (function (){
return 1;
});
var _STAR___4380 = (function (x){
return x;
});
var _STAR___4381 = (function (x,y){
return (x * y);
});
var _STAR___4382 = (function() { 
var G__4384__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__4384 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4384__delegate.call(this, x, y, more);
};
G__4384.cljs$lang$maxFixedArity = 2;
G__4384.cljs$lang$applyTo = (function (arglist__4385){
var x = cljs.core.first(arglist__4385);
var y = cljs.core.first(cljs.core.next(arglist__4385));
var more = cljs.core.rest(cljs.core.next(arglist__4385));
return G__4384__delegate.call(this, x, y, more);
});
return G__4384;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___4379.call(this);
case  1 :
return _STAR___4380.call(this,x);
case  2 :
return _STAR___4381.call(this,x,y);
default:
return _STAR___4382.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___4382.cljs$lang$applyTo;
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
var _SLASH___4386 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___4387 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___4388 = (function() { 
var G__4390__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__4390 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4390__delegate.call(this, x, y, more);
};
G__4390.cljs$lang$maxFixedArity = 2;
G__4390.cljs$lang$applyTo = (function (arglist__4391){
var x = cljs.core.first(arglist__4391);
var y = cljs.core.first(cljs.core.next(arglist__4391));
var more = cljs.core.rest(cljs.core.next(arglist__4391));
return G__4390__delegate.call(this, x, y, more);
});
return G__4390;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___4386.call(this,x);
case  2 :
return _SLASH___4387.call(this,x,y);
default:
return _SLASH___4388.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___4388.cljs$lang$applyTo;
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
var _LT___4392 = (function (x){
return true;
});
var _LT___4393 = (function (x,y){
return (x < y);
});
var _LT___4394 = (function() { 
var G__4396__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4397 = y;
var G__4398 = cljs.core.first.call(null,more);
var G__4399 = cljs.core.next.call(null,more);
x = G__4397;
y = G__4398;
more = G__4399;
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
var G__4396 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4396__delegate.call(this, x, y, more);
};
G__4396.cljs$lang$maxFixedArity = 2;
G__4396.cljs$lang$applyTo = (function (arglist__4400){
var x = cljs.core.first(arglist__4400);
var y = cljs.core.first(cljs.core.next(arglist__4400));
var more = cljs.core.rest(cljs.core.next(arglist__4400));
return G__4396__delegate.call(this, x, y, more);
});
return G__4396;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___4392.call(this,x);
case  2 :
return _LT___4393.call(this,x,y);
default:
return _LT___4394.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___4394.cljs$lang$applyTo;
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
var _LT__EQ___4401 = (function (x){
return true;
});
var _LT__EQ___4402 = (function (x,y){
return (x <= y);
});
var _LT__EQ___4403 = (function() { 
var G__4405__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4406 = y;
var G__4407 = cljs.core.first.call(null,more);
var G__4408 = cljs.core.next.call(null,more);
x = G__4406;
y = G__4407;
more = G__4408;
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
var G__4405 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4405__delegate.call(this, x, y, more);
};
G__4405.cljs$lang$maxFixedArity = 2;
G__4405.cljs$lang$applyTo = (function (arglist__4409){
var x = cljs.core.first(arglist__4409);
var y = cljs.core.first(cljs.core.next(arglist__4409));
var more = cljs.core.rest(cljs.core.next(arglist__4409));
return G__4405__delegate.call(this, x, y, more);
});
return G__4405;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___4401.call(this,x);
case  2 :
return _LT__EQ___4402.call(this,x,y);
default:
return _LT__EQ___4403.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___4403.cljs$lang$applyTo;
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
var _GT___4410 = (function (x){
return true;
});
var _GT___4411 = (function (x,y){
return (x > y);
});
var _GT___4412 = (function() { 
var G__4414__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4415 = y;
var G__4416 = cljs.core.first.call(null,more);
var G__4417 = cljs.core.next.call(null,more);
x = G__4415;
y = G__4416;
more = G__4417;
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
var G__4414 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4414__delegate.call(this, x, y, more);
};
G__4414.cljs$lang$maxFixedArity = 2;
G__4414.cljs$lang$applyTo = (function (arglist__4418){
var x = cljs.core.first(arglist__4418);
var y = cljs.core.first(cljs.core.next(arglist__4418));
var more = cljs.core.rest(cljs.core.next(arglist__4418));
return G__4414__delegate.call(this, x, y, more);
});
return G__4414;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___4410.call(this,x);
case  2 :
return _GT___4411.call(this,x,y);
default:
return _GT___4412.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___4412.cljs$lang$applyTo;
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
var _GT__EQ___4419 = (function (x){
return true;
});
var _GT__EQ___4420 = (function (x,y){
return (x >= y);
});
var _GT__EQ___4421 = (function() { 
var G__4423__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4424 = y;
var G__4425 = cljs.core.first.call(null,more);
var G__4426 = cljs.core.next.call(null,more);
x = G__4424;
y = G__4425;
more = G__4426;
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
var G__4423 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4423__delegate.call(this, x, y, more);
};
G__4423.cljs$lang$maxFixedArity = 2;
G__4423.cljs$lang$applyTo = (function (arglist__4427){
var x = cljs.core.first(arglist__4427);
var y = cljs.core.first(cljs.core.next(arglist__4427));
var more = cljs.core.rest(cljs.core.next(arglist__4427));
return G__4423__delegate.call(this, x, y, more);
});
return G__4423;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___4419.call(this,x);
case  2 :
return _GT__EQ___4420.call(this,x,y);
default:
return _GT__EQ___4421.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___4421.cljs$lang$applyTo;
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
var max__4428 = (function (x){
return x;
});
var max__4429 = (function (x,y){
return ((x > y) ? x : y);
});
var max__4430 = (function() { 
var G__4432__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__4432 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4432__delegate.call(this, x, y, more);
};
G__4432.cljs$lang$maxFixedArity = 2;
G__4432.cljs$lang$applyTo = (function (arglist__4433){
var x = cljs.core.first(arglist__4433);
var y = cljs.core.first(cljs.core.next(arglist__4433));
var more = cljs.core.rest(cljs.core.next(arglist__4433));
return G__4432__delegate.call(this, x, y, more);
});
return G__4432;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__4428.call(this,x);
case  2 :
return max__4429.call(this,x,y);
default:
return max__4430.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__4430.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__4434 = (function (x){
return x;
});
var min__4435 = (function (x,y){
return ((x < y) ? x : y);
});
var min__4436 = (function() { 
var G__4438__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__4438 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4438__delegate.call(this, x, y, more);
};
G__4438.cljs$lang$maxFixedArity = 2;
G__4438.cljs$lang$applyTo = (function (arglist__4439){
var x = cljs.core.first(arglist__4439);
var y = cljs.core.first(cljs.core.next(arglist__4439));
var more = cljs.core.rest(cljs.core.next(arglist__4439));
return G__4438__delegate.call(this, x, y, more);
});
return G__4438;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__4434.call(this,x);
case  2 :
return min__4435.call(this,x,y);
default:
return min__4436.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__4436.cljs$lang$applyTo;
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
var rem__4440 = (n % d);

return cljs.core.fix.call(null,((n - rem__4440) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__4441 = cljs.core.quot.call(null,n,d);

return (n - (d * q__4441));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4442 = (function (){
return Math.random.call(null);
});
var rand__4443 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4442.call(this);
case  1 :
return rand__4443.call(this,n);
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
var _EQ__EQ___4445 = (function (x){
return true;
});
var _EQ__EQ___4446 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___4447 = (function() { 
var G__4449__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4450 = y;
var G__4451 = cljs.core.first.call(null,more);
var G__4452 = cljs.core.next.call(null,more);
x = G__4450;
y = G__4451;
more = G__4452;
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
var G__4449 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4449__delegate.call(this, x, y, more);
};
G__4449.cljs$lang$maxFixedArity = 2;
G__4449.cljs$lang$applyTo = (function (arglist__4453){
var x = cljs.core.first(arglist__4453);
var y = cljs.core.first(cljs.core.next(arglist__4453));
var more = cljs.core.rest(cljs.core.next(arglist__4453));
return G__4449__delegate.call(this, x, y, more);
});
return G__4449;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___4445.call(this,x);
case  2 :
return _EQ__EQ___4446.call(this,x,y);
default:
return _EQ__EQ___4447.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___4447.cljs$lang$applyTo;
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
var n__4454 = n;
var xs__4455 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3822__auto____4456 = xs__4455;

if(cljs.core.truth_(and__3822__auto____4456))
{return (n__4454 > 0);
} else
{return and__3822__auto____4456;
}
})()))
{{
var G__4457 = (n__4454 - 1);
var G__4458 = cljs.core.next.call(null,xs__4455);
n__4454 = G__4457;
xs__4455 = G__4458;
continue;
}
} else
{return xs__4455;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__4463 = null;
var G__4463__4464 = (function (coll,n){
var temp__3971__auto____4459 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3971__auto____4459))
{var xs__4460 = temp__3971__auto____4459;

return cljs.core.first.call(null,xs__4460);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__4463__4465 = (function (coll,n,not_found){
var temp__3971__auto____4461 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3971__auto____4461))
{var xs__4462 = temp__3971__auto____4461;

return cljs.core.first.call(null,xs__4462);
} else
{return not_found;
}
});
G__4463 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4463__4464.call(this,coll,n);
case  3 :
return G__4463__4465.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4463;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___4467 = (function (){
return "";
});
var str_STAR___4468 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___4469 = (function() { 
var G__4471__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__4472 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__4473 = cljs.core.next.call(null,more);
sb = G__4472;
more = G__4473;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__4471 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4471__delegate.call(this, x, ys);
};
G__4471.cljs$lang$maxFixedArity = 1;
G__4471.cljs$lang$applyTo = (function (arglist__4474){
var x = cljs.core.first(arglist__4474);
var ys = cljs.core.rest(arglist__4474);
return G__4471__delegate.call(this, x, ys);
});
return G__4471;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___4467.call(this);
case  1 :
return str_STAR___4468.call(this,x);
default:
return str_STAR___4469.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___4469.cljs$lang$applyTo;
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
var str__4475 = (function (){
return "";
});
var str__4476 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__4477 = (function() { 
var G__4479__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__4479 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4479__delegate.call(this, x, ys);
};
G__4479.cljs$lang$maxFixedArity = 1;
G__4479.cljs$lang$applyTo = (function (arglist__4480){
var x = cljs.core.first(arglist__4480);
var ys = cljs.core.rest(arglist__4480);
return G__4479__delegate.call(this, x, ys);
});
return G__4479;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__4475.call(this);
case  1 :
return str__4476.call(this,x);
default:
return str__4477.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__4477.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__4481 = (function (s,start){
return s.substring(start);
});
var subs__4482 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__4481.call(this,s,start);
case  3 :
return subs__4482.call(this,s,start,end);
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
var symbol__4484 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__4485 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__4484.call(this,ns);
case  2 :
return symbol__4485.call(this,ns,name);
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
var keyword__4487 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__4488 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__4487.call(this,ns);
case  2 :
return keyword__4488.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__4490 = cljs.core.seq.call(null,x);
var ys__4491 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__4490)))
{return cljs.core.nil_QMARK_.call(null,ys__4491);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__4491)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__4490),cljs.core.first.call(null,ys__4491))))
{{
var G__4492 = cljs.core.next.call(null,xs__4490);
var G__4493 = cljs.core.next.call(null,ys__4491);
xs__4490 = G__4492;
ys__4491 = G__4493;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
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
return cljs.core.reduce.call(null,(function (p1__4494_SHARP_,p2__4495_SHARP_){
return cljs.core.hash_combine.call(null,p1__4494_SHARP_,cljs.core.hash.call(null,p2__4495_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__4496__4497 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__4496__4497))
{var G__4499__4501 = cljs.core.first.call(null,G__4496__4497);
var vec__4500__4502 = G__4499__4501;
var key_name__4503 = cljs.core.nth.call(null,vec__4500__4502,0,null);
var f__4504 = cljs.core.nth.call(null,vec__4500__4502,1,null);
var G__4496__4505 = G__4496__4497;

var G__4499__4506 = G__4499__4501;
var G__4496__4507 = G__4496__4505;

while(true){
var vec__4508__4509 = G__4499__4506;
var key_name__4510 = cljs.core.nth.call(null,vec__4508__4509,0,null);
var f__4511 = cljs.core.nth.call(null,vec__4508__4509,1,null);
var G__4496__4512 = G__4496__4507;

var str_name__4513 = cljs.core.name.call(null,key_name__4510);

obj[str_name__4513] = f__4511;
var temp__3974__auto____4514 = cljs.core.next.call(null,G__4496__4512);

if(cljs.core.truth_(temp__3974__auto____4514))
{var G__4496__4515 = temp__3974__auto____4514;

{
var G__4516 = cljs.core.first.call(null,G__4496__4515);
var G__4517 = G__4496__4515;
G__4499__4506 = G__4516;
G__4496__4507 = G__4517;
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
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__268__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4518 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4519 = this;
return (new cljs.core.List(this__4519.meta,o,coll,(this__4519.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4520 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4521 = this;
return this__4521.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4522 = this;
return this__4522.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4523 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4524 = this;
return this__4524.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4525 = this;
return this__4525.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4526 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4527 = this;
return (new cljs.core.List(meta,this__4527.first,this__4527.rest,this__4527.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4528 = this;
return this__4528.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4529 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__268__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4530 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4531 = this;
return (new cljs.core.List(this__4531.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4532 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4533 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4534 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4535 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4536 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4537 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4538 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4539 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4540 = this;
return this__4540.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4541 = this;
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
list.cljs$lang$applyTo = (function (arglist__4542){
var items = cljs.core.seq( arglist__4542 );;
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
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__268__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4543 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4544 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4545 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4546 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4546.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4547 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4548 = this;
return this__4548.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4549 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__4549.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__4549.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4550 = this;
return this__4550.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4551 = this;
return (new cljs.core.Cons(meta,this__4551.first,this__4551.rest));
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
var G__4552 = null;
var G__4552__4553 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__4552__4554 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__4552 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__4552__4553.call(this,string,f);
case  3 :
return G__4552__4554.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4552;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__4556 = null;
var G__4556__4557 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__4556__4558 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__4556 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__4556__4557.call(this,string,k);
case  3 :
return G__4556__4558.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4556;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__4560 = null;
var G__4560__4561 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__4560__4562 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__4560 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__4560__4561.call(this,string,n);
case  3 :
return G__4560__4562.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4560;
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
var G__4564 = null;
var G__4564__4565 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__4564__4566 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__4564 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__4564__4565.call(this,this$,coll);
case  3 :
return G__4564__4566.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4564;
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
var x__4568 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__4568;
} else
{lazy_seq.x = x__4568.call(null);
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
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__268__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4569 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4570 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4571 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4572 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4572.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4573 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4574 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4575 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4576 = this;
return this__4576.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4577 = this;
return (new cljs.core.LazySeq(meta,this__4577.realized,this__4577.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__4578 = cljs.core.array.call(null);

var s__4579 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4579)))
{ary__4578.push(cljs.core.first.call(null,s__4579));
{
var G__4580 = cljs.core.next.call(null,s__4579);
s__4579 = G__4580;
continue;
}
} else
{return ary__4578;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__4581 = s;
var i__4582 = n;
var sum__4583 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3822__auto____4584 = (i__4582 > 0);

if(cljs.core.truth_(and__3822__auto____4584))
{return cljs.core.seq.call(null,s__4581);
} else
{return and__3822__auto____4584;
}
})()))
{{
var G__4585 = cljs.core.next.call(null,s__4581);
var G__4586 = (i__4582 - 1);
var G__4587 = (sum__4583 + 1);
s__4581 = G__4585;
i__4582 = G__4586;
sum__4583 = G__4587;
continue;
}
} else
{return sum__4583;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
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
var concat__4591 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__4592 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__4593 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4588 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__4588))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4588),concat.call(null,cljs.core.rest.call(null,s__4588),y));
} else
{return y;
}
})));
});
var concat__4594 = (function() { 
var G__4596__delegate = function (x,y,zs){
var cat__4590 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__4589 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__4589))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__4589),cat.call(null,cljs.core.rest.call(null,xys__4589),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__4590.call(null,concat.call(null,x,y),zs);
};
var G__4596 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4596__delegate.call(this, x, y, zs);
};
G__4596.cljs$lang$maxFixedArity = 2;
G__4596.cljs$lang$applyTo = (function (arglist__4597){
var x = cljs.core.first(arglist__4597);
var y = cljs.core.first(cljs.core.next(arglist__4597));
var zs = cljs.core.rest(cljs.core.next(arglist__4597));
return G__4596__delegate.call(this, x, y, zs);
});
return G__4596;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__4591.call(this);
case  1 :
return concat__4592.call(this,x);
case  2 :
return concat__4593.call(this,x,y);
default:
return concat__4594.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__4594.cljs$lang$applyTo;
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
var list_STAR___4598 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___4599 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___4600 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4601 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___4602 = (function() { 
var G__4604__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__4604 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4604__delegate.call(this, a, b, c, d, more);
};
G__4604.cljs$lang$maxFixedArity = 4;
G__4604.cljs$lang$applyTo = (function (arglist__4605){
var a = cljs.core.first(arglist__4605);
var b = cljs.core.first(cljs.core.next(arglist__4605));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4605)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4605))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4605))));
return G__4604__delegate.call(this, a, b, c, d, more);
});
return G__4604;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___4598.call(this,a);
case  2 :
return list_STAR___4599.call(this,a,b);
case  3 :
return list_STAR___4600.call(this,a,b,c);
case  4 :
return list_STAR___4601.call(this,a,b,c,d);
default:
return list_STAR___4602.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___4602.cljs$lang$applyTo;
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
var apply__4615 = (function (f,args){
var fixed_arity__4606 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__4606 + 1)) <= fixed_arity__4606)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__4616 = (function (f,x,args){
var arglist__4607 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__4608 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4607,fixed_arity__4608) <= fixed_arity__4608)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4607));
} else
{return f.cljs$lang$applyTo(arglist__4607);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4607));
}
});
var apply__4617 = (function (f,x,y,args){
var arglist__4609 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__4610 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4609,fixed_arity__4610) <= fixed_arity__4610)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4609));
} else
{return f.cljs$lang$applyTo(arglist__4609);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4609));
}
});
var apply__4618 = (function (f,x,y,z,args){
var arglist__4611 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__4612 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4611,fixed_arity__4612) <= fixed_arity__4612)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4611));
} else
{return f.cljs$lang$applyTo(arglist__4611);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4611));
}
});
var apply__4619 = (function() { 
var G__4621__delegate = function (f,a,b,c,d,args){
var arglist__4613 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__4614 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4613,fixed_arity__4614) <= fixed_arity__4614)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4613));
} else
{return f.cljs$lang$applyTo(arglist__4613);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4613));
}
};
var G__4621 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4621__delegate.call(this, f, a, b, c, d, args);
};
G__4621.cljs$lang$maxFixedArity = 5;
G__4621.cljs$lang$applyTo = (function (arglist__4622){
var f = cljs.core.first(arglist__4622);
var a = cljs.core.first(cljs.core.next(arglist__4622));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4622)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4622))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4622)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4622)))));
return G__4621__delegate.call(this, f, a, b, c, d, args);
});
return G__4621;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__4615.call(this,f,a);
case  3 :
return apply__4616.call(this,f,a,b);
case  4 :
return apply__4617.call(this,f,a,b,c);
case  5 :
return apply__4618.call(this,f,a,b,c,d);
default:
return apply__4619.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__4619.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__4623){
var obj = cljs.core.first(arglist__4623);
var f = cljs.core.first(cljs.core.next(arglist__4623));
var args = cljs.core.rest(cljs.core.next(arglist__4623));
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
var not_EQ___4624 = (function (x){
return false;
});
var not_EQ___4625 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___4626 = (function() { 
var G__4628__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__4628 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4628__delegate.call(this, x, y, more);
};
G__4628.cljs$lang$maxFixedArity = 2;
G__4628.cljs$lang$applyTo = (function (arglist__4629){
var x = cljs.core.first(arglist__4629);
var y = cljs.core.first(cljs.core.next(arglist__4629));
var more = cljs.core.rest(cljs.core.next(arglist__4629));
return G__4628__delegate.call(this, x, y, more);
});
return G__4628;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___4624.call(this,x);
case  2 :
return not_EQ___4625.call(this,x,y);
default:
return not_EQ___4626.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___4626.cljs$lang$applyTo;
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
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__4630 = pred;
var G__4631 = cljs.core.next.call(null,coll);
pred = G__4630;
coll = G__4631;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
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
{var or__3824__auto____4632 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3824__auto____4632))
{return or__3824__auto____4632;
} else
{{
var G__4633 = pred;
var G__4634 = cljs.core.next.call(null,coll);
pred = G__4633;
coll = G__4634;
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
var G__4635 = null;
var G__4635__4636 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__4635__4637 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__4635__4638 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__4635__4639 = (function() { 
var G__4641__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__4641 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4641__delegate.call(this, x, y, zs);
};
G__4641.cljs$lang$maxFixedArity = 2;
G__4641.cljs$lang$applyTo = (function (arglist__4642){
var x = cljs.core.first(arglist__4642);
var y = cljs.core.first(cljs.core.next(arglist__4642));
var zs = cljs.core.rest(cljs.core.next(arglist__4642));
return G__4641__delegate.call(this, x, y, zs);
});
return G__4641;
})()
;
G__4635 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__4635__4636.call(this);
case  1 :
return G__4635__4637.call(this,x);
case  2 :
return G__4635__4638.call(this,x,y);
default:
return G__4635__4639.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4635.cljs$lang$maxFixedArity = 2;
G__4635.cljs$lang$applyTo = G__4635__4639.cljs$lang$applyTo;
return G__4635;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__4643__delegate = function (args){
return x;
};
var G__4643 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4643__delegate.call(this, args);
};
G__4643.cljs$lang$maxFixedArity = 0;
G__4643.cljs$lang$applyTo = (function (arglist__4644){
var args = cljs.core.seq( arglist__4644 );;
return G__4643__delegate.call(this, args);
});
return G__4643;
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
var comp__4648 = (function (){
return cljs.core.identity;
});
var comp__4649 = (function (f){
return f;
});
var comp__4650 = (function (f,g){
return (function() {
var G__4654 = null;
var G__4654__4655 = (function (){
return f.call(null,g.call(null));
});
var G__4654__4656 = (function (x){
return f.call(null,g.call(null,x));
});
var G__4654__4657 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__4654__4658 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__4654__4659 = (function() { 
var G__4661__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4661 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4661__delegate.call(this, x, y, z, args);
};
G__4661.cljs$lang$maxFixedArity = 3;
G__4661.cljs$lang$applyTo = (function (arglist__4662){
var x = cljs.core.first(arglist__4662);
var y = cljs.core.first(cljs.core.next(arglist__4662));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4662)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4662)));
return G__4661__delegate.call(this, x, y, z, args);
});
return G__4661;
})()
;
G__4654 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4654__4655.call(this);
case  1 :
return G__4654__4656.call(this,x);
case  2 :
return G__4654__4657.call(this,x,y);
case  3 :
return G__4654__4658.call(this,x,y,z);
default:
return G__4654__4659.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4654.cljs$lang$maxFixedArity = 3;
G__4654.cljs$lang$applyTo = G__4654__4659.cljs$lang$applyTo;
return G__4654;
})()
});
var comp__4651 = (function (f,g,h){
return (function() {
var G__4663 = null;
var G__4663__4664 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__4663__4665 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__4663__4666 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__4663__4667 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__4663__4668 = (function() { 
var G__4670__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__4670 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4670__delegate.call(this, x, y, z, args);
};
G__4670.cljs$lang$maxFixedArity = 3;
G__4670.cljs$lang$applyTo = (function (arglist__4671){
var x = cljs.core.first(arglist__4671);
var y = cljs.core.first(cljs.core.next(arglist__4671));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4671)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4671)));
return G__4670__delegate.call(this, x, y, z, args);
});
return G__4670;
})()
;
G__4663 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4663__4664.call(this);
case  1 :
return G__4663__4665.call(this,x);
case  2 :
return G__4663__4666.call(this,x,y);
case  3 :
return G__4663__4667.call(this,x,y,z);
default:
return G__4663__4668.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4663.cljs$lang$maxFixedArity = 3;
G__4663.cljs$lang$applyTo = G__4663__4668.cljs$lang$applyTo;
return G__4663;
})()
});
var comp__4652 = (function() { 
var G__4672__delegate = function (f1,f2,f3,fs){
var fs__4645 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__4673__delegate = function (args){
var ret__4646 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__4645),args);
var fs__4647 = cljs.core.next.call(null,fs__4645);

while(true){
if(cljs.core.truth_(fs__4647))
{{
var G__4674 = cljs.core.first.call(null,fs__4647).call(null,ret__4646);
var G__4675 = cljs.core.next.call(null,fs__4647);
ret__4646 = G__4674;
fs__4647 = G__4675;
continue;
}
} else
{return ret__4646;
}
break;
}
};
var G__4673 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4673__delegate.call(this, args);
};
G__4673.cljs$lang$maxFixedArity = 0;
G__4673.cljs$lang$applyTo = (function (arglist__4676){
var args = cljs.core.seq( arglist__4676 );;
return G__4673__delegate.call(this, args);
});
return G__4673;
})()
;
};
var G__4672 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4672__delegate.call(this, f1, f2, f3, fs);
};
G__4672.cljs$lang$maxFixedArity = 3;
G__4672.cljs$lang$applyTo = (function (arglist__4677){
var f1 = cljs.core.first(arglist__4677);
var f2 = cljs.core.first(cljs.core.next(arglist__4677));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4677)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4677)));
return G__4672__delegate.call(this, f1, f2, f3, fs);
});
return G__4672;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__4648.call(this);
case  1 :
return comp__4649.call(this,f1);
case  2 :
return comp__4650.call(this,f1,f2);
case  3 :
return comp__4651.call(this,f1,f2,f3);
default:
return comp__4652.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4652.cljs$lang$applyTo;
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
var partial__4678 = (function (f,arg1){
return (function() { 
var G__4683__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__4683 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4683__delegate.call(this, args);
};
G__4683.cljs$lang$maxFixedArity = 0;
G__4683.cljs$lang$applyTo = (function (arglist__4684){
var args = cljs.core.seq( arglist__4684 );;
return G__4683__delegate.call(this, args);
});
return G__4683;
})()
;
});
var partial__4679 = (function (f,arg1,arg2){
return (function() { 
var G__4685__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__4685 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4685__delegate.call(this, args);
};
G__4685.cljs$lang$maxFixedArity = 0;
G__4685.cljs$lang$applyTo = (function (arglist__4686){
var args = cljs.core.seq( arglist__4686 );;
return G__4685__delegate.call(this, args);
});
return G__4685;
})()
;
});
var partial__4680 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__4687__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__4687 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4687__delegate.call(this, args);
};
G__4687.cljs$lang$maxFixedArity = 0;
G__4687.cljs$lang$applyTo = (function (arglist__4688){
var args = cljs.core.seq( arglist__4688 );;
return G__4687__delegate.call(this, args);
});
return G__4687;
})()
;
});
var partial__4681 = (function() { 
var G__4689__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__4690__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__4690 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4690__delegate.call(this, args);
};
G__4690.cljs$lang$maxFixedArity = 0;
G__4690.cljs$lang$applyTo = (function (arglist__4691){
var args = cljs.core.seq( arglist__4691 );;
return G__4690__delegate.call(this, args);
});
return G__4690;
})()
;
};
var G__4689 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4689__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__4689.cljs$lang$maxFixedArity = 4;
G__4689.cljs$lang$applyTo = (function (arglist__4692){
var f = cljs.core.first(arglist__4692);
var arg1 = cljs.core.first(cljs.core.next(arglist__4692));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4692)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4692))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4692))));
return G__4689__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__4689;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__4678.call(this,f,arg1);
case  3 :
return partial__4679.call(this,f,arg1,arg2);
case  4 :
return partial__4680.call(this,f,arg1,arg2,arg3);
default:
return partial__4681.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__4681.cljs$lang$applyTo;
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
var fnil__4693 = (function (f,x){
return (function() {
var G__4697 = null;
var G__4697__4698 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__4697__4699 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__4697__4700 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__4697__4701 = (function() { 
var G__4703__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__4703 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4703__delegate.call(this, a, b, c, ds);
};
G__4703.cljs$lang$maxFixedArity = 3;
G__4703.cljs$lang$applyTo = (function (arglist__4704){
var a = cljs.core.first(arglist__4704);
var b = cljs.core.first(cljs.core.next(arglist__4704));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4704)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4704)));
return G__4703__delegate.call(this, a, b, c, ds);
});
return G__4703;
})()
;
G__4697 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__4697__4698.call(this,a);
case  2 :
return G__4697__4699.call(this,a,b);
case  3 :
return G__4697__4700.call(this,a,b,c);
default:
return G__4697__4701.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4697.cljs$lang$maxFixedArity = 3;
G__4697.cljs$lang$applyTo = G__4697__4701.cljs$lang$applyTo;
return G__4697;
})()
});
var fnil__4694 = (function (f,x,y){
return (function() {
var G__4705 = null;
var G__4705__4706 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__4705__4707 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__4705__4708 = (function() { 
var G__4710__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__4710 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4710__delegate.call(this, a, b, c, ds);
};
G__4710.cljs$lang$maxFixedArity = 3;
G__4710.cljs$lang$applyTo = (function (arglist__4711){
var a = cljs.core.first(arglist__4711);
var b = cljs.core.first(cljs.core.next(arglist__4711));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4711)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4711)));
return G__4710__delegate.call(this, a, b, c, ds);
});
return G__4710;
})()
;
G__4705 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__4705__4706.call(this,a,b);
case  3 :
return G__4705__4707.call(this,a,b,c);
default:
return G__4705__4708.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4705.cljs$lang$maxFixedArity = 3;
G__4705.cljs$lang$applyTo = G__4705__4708.cljs$lang$applyTo;
return G__4705;
})()
});
var fnil__4695 = (function (f,x,y,z){
return (function() {
var G__4712 = null;
var G__4712__4713 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__4712__4714 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__4712__4715 = (function() { 
var G__4717__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__4717 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4717__delegate.call(this, a, b, c, ds);
};
G__4717.cljs$lang$maxFixedArity = 3;
G__4717.cljs$lang$applyTo = (function (arglist__4718){
var a = cljs.core.first(arglist__4718);
var b = cljs.core.first(cljs.core.next(arglist__4718));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4718)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4718)));
return G__4717__delegate.call(this, a, b, c, ds);
});
return G__4717;
})()
;
G__4712 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__4712__4713.call(this,a,b);
case  3 :
return G__4712__4714.call(this,a,b,c);
default:
return G__4712__4715.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4712.cljs$lang$maxFixedArity = 3;
G__4712.cljs$lang$applyTo = G__4712__4715.cljs$lang$applyTo;
return G__4712;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__4693.call(this,f,x);
case  3 :
return fnil__4694.call(this,f,x,y);
case  4 :
return fnil__4695.call(this,f,x,y,z);
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
var mapi__4721 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4719 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4719))
{var s__4720 = temp__3974__auto____4719;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__4720)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__4720)));
} else
{return null;
}
})));
});

return mapi__4721.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4722 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4722))
{var s__4723 = temp__3974__auto____4722;

var x__4724 = f.call(null,cljs.core.first.call(null,s__4723));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__4724)))
{return keep.call(null,f,cljs.core.rest.call(null,s__4723));
} else
{return cljs.core.cons.call(null,x__4724,keep.call(null,f,cljs.core.rest.call(null,s__4723)));
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
var keepi__4734 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4731 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4731))
{var s__4732 = temp__3974__auto____4731;

var x__4733 = f.call(null,idx,cljs.core.first.call(null,s__4732));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__4733)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__4732));
} else
{return cljs.core.cons.call(null,x__4733,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__4732)));
}
} else
{return null;
}
})));
});

return keepi__4734.call(null,0,coll);
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
var every_pred__4779 = (function (p){
return (function() {
var ep1 = null;
var ep1__4784 = (function (){
return true;
});
var ep1__4785 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__4786 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4741 = p.call(null,x);

if(cljs.core.truth_(and__3822__auto____4741))
{return p.call(null,y);
} else
{return and__3822__auto____4741;
}
})());
});
var ep1__4787 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4742 = p.call(null,x);

if(cljs.core.truth_(and__3822__auto____4742))
{var and__3822__auto____4743 = p.call(null,y);

if(cljs.core.truth_(and__3822__auto____4743))
{return p.call(null,z);
} else
{return and__3822__auto____4743;
}
} else
{return and__3822__auto____4742;
}
})());
});
var ep1__4788 = (function() { 
var G__4790__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4744 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____4744))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____4744;
}
})());
};
var G__4790 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4790__delegate.call(this, x, y, z, args);
};
G__4790.cljs$lang$maxFixedArity = 3;
G__4790.cljs$lang$applyTo = (function (arglist__4791){
var x = cljs.core.first(arglist__4791);
var y = cljs.core.first(cljs.core.next(arglist__4791));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4791)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4791)));
return G__4790__delegate.call(this, x, y, z, args);
});
return G__4790;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__4784.call(this);
case  1 :
return ep1__4785.call(this,x);
case  2 :
return ep1__4786.call(this,x,y);
case  3 :
return ep1__4787.call(this,x,y,z);
default:
return ep1__4788.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4788.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__4780 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__4792 = (function (){
return true;
});
var ep2__4793 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4745 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____4745))
{return p2.call(null,x);
} else
{return and__3822__auto____4745;
}
})());
});
var ep2__4794 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4746 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____4746))
{var and__3822__auto____4747 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____4747))
{var and__3822__auto____4748 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____4748))
{return p2.call(null,y);
} else
{return and__3822__auto____4748;
}
} else
{return and__3822__auto____4747;
}
} else
{return and__3822__auto____4746;
}
})());
});
var ep2__4795 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4749 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____4749))
{var and__3822__auto____4750 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____4750))
{var and__3822__auto____4751 = p1.call(null,z);

if(cljs.core.truth_(and__3822__auto____4751))
{var and__3822__auto____4752 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____4752))
{var and__3822__auto____4753 = p2.call(null,y);

if(cljs.core.truth_(and__3822__auto____4753))
{return p2.call(null,z);
} else
{return and__3822__auto____4753;
}
} else
{return and__3822__auto____4752;
}
} else
{return and__3822__auto____4751;
}
} else
{return and__3822__auto____4750;
}
} else
{return and__3822__auto____4749;
}
})());
});
var ep2__4796 = (function() { 
var G__4798__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4754 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____4754))
{return cljs.core.every_QMARK_.call(null,(function (p1__4725_SHARP_){
var and__3822__auto____4755 = p1.call(null,p1__4725_SHARP_);

if(cljs.core.truth_(and__3822__auto____4755))
{return p2.call(null,p1__4725_SHARP_);
} else
{return and__3822__auto____4755;
}
}),args);
} else
{return and__3822__auto____4754;
}
})());
};
var G__4798 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4798__delegate.call(this, x, y, z, args);
};
G__4798.cljs$lang$maxFixedArity = 3;
G__4798.cljs$lang$applyTo = (function (arglist__4799){
var x = cljs.core.first(arglist__4799);
var y = cljs.core.first(cljs.core.next(arglist__4799));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4799)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4799)));
return G__4798__delegate.call(this, x, y, z, args);
});
return G__4798;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__4792.call(this);
case  1 :
return ep2__4793.call(this,x);
case  2 :
return ep2__4794.call(this,x,y);
case  3 :
return ep2__4795.call(this,x,y,z);
default:
return ep2__4796.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4796.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__4781 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__4800 = (function (){
return true;
});
var ep3__4801 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4756 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____4756))
{var and__3822__auto____4757 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____4757))
{return p3.call(null,x);
} else
{return and__3822__auto____4757;
}
} else
{return and__3822__auto____4756;
}
})());
});
var ep3__4802 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4758 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____4758))
{var and__3822__auto____4759 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____4759))
{var and__3822__auto____4760 = p3.call(null,x);

if(cljs.core.truth_(and__3822__auto____4760))
{var and__3822__auto____4761 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____4761))
{var and__3822__auto____4762 = p2.call(null,y);

if(cljs.core.truth_(and__3822__auto____4762))
{return p3.call(null,y);
} else
{return and__3822__auto____4762;
}
} else
{return and__3822__auto____4761;
}
} else
{return and__3822__auto____4760;
}
} else
{return and__3822__auto____4759;
}
} else
{return and__3822__auto____4758;
}
})());
});
var ep3__4803 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4763 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____4763))
{var and__3822__auto____4764 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____4764))
{var and__3822__auto____4765 = p3.call(null,x);

if(cljs.core.truth_(and__3822__auto____4765))
{var and__3822__auto____4766 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____4766))
{var and__3822__auto____4767 = p2.call(null,y);

if(cljs.core.truth_(and__3822__auto____4767))
{var and__3822__auto____4768 = p3.call(null,y);

if(cljs.core.truth_(and__3822__auto____4768))
{var and__3822__auto____4769 = p1.call(null,z);

if(cljs.core.truth_(and__3822__auto____4769))
{var and__3822__auto____4770 = p2.call(null,z);

if(cljs.core.truth_(and__3822__auto____4770))
{return p3.call(null,z);
} else
{return and__3822__auto____4770;
}
} else
{return and__3822__auto____4769;
}
} else
{return and__3822__auto____4768;
}
} else
{return and__3822__auto____4767;
}
} else
{return and__3822__auto____4766;
}
} else
{return and__3822__auto____4765;
}
} else
{return and__3822__auto____4764;
}
} else
{return and__3822__auto____4763;
}
})());
});
var ep3__4804 = (function() { 
var G__4806__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4771 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____4771))
{return cljs.core.every_QMARK_.call(null,(function (p1__4726_SHARP_){
var and__3822__auto____4772 = p1.call(null,p1__4726_SHARP_);

if(cljs.core.truth_(and__3822__auto____4772))
{var and__3822__auto____4773 = p2.call(null,p1__4726_SHARP_);

if(cljs.core.truth_(and__3822__auto____4773))
{return p3.call(null,p1__4726_SHARP_);
} else
{return and__3822__auto____4773;
}
} else
{return and__3822__auto____4772;
}
}),args);
} else
{return and__3822__auto____4771;
}
})());
};
var G__4806 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4806__delegate.call(this, x, y, z, args);
};
G__4806.cljs$lang$maxFixedArity = 3;
G__4806.cljs$lang$applyTo = (function (arglist__4807){
var x = cljs.core.first(arglist__4807);
var y = cljs.core.first(cljs.core.next(arglist__4807));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4807)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4807)));
return G__4806__delegate.call(this, x, y, z, args);
});
return G__4806;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__4800.call(this);
case  1 :
return ep3__4801.call(this,x);
case  2 :
return ep3__4802.call(this,x,y);
case  3 :
return ep3__4803.call(this,x,y,z);
default:
return ep3__4804.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4804.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__4782 = (function() { 
var G__4808__delegate = function (p1,p2,p3,ps){
var ps__4774 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__4809 = (function (){
return true;
});
var epn__4810 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__4727_SHARP_){
return p1__4727_SHARP_.call(null,x);
}),ps__4774);
});
var epn__4811 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__4728_SHARP_){
var and__3822__auto____4775 = p1__4728_SHARP_.call(null,x);

if(cljs.core.truth_(and__3822__auto____4775))
{return p1__4728_SHARP_.call(null,y);
} else
{return and__3822__auto____4775;
}
}),ps__4774);
});
var epn__4812 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__4729_SHARP_){
var and__3822__auto____4776 = p1__4729_SHARP_.call(null,x);

if(cljs.core.truth_(and__3822__auto____4776))
{var and__3822__auto____4777 = p1__4729_SHARP_.call(null,y);

if(cljs.core.truth_(and__3822__auto____4777))
{return p1__4729_SHARP_.call(null,z);
} else
{return and__3822__auto____4777;
}
} else
{return and__3822__auto____4776;
}
}),ps__4774);
});
var epn__4813 = (function() { 
var G__4815__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____4778 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____4778))
{return cljs.core.every_QMARK_.call(null,(function (p1__4730_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__4730_SHARP_,args);
}),ps__4774);
} else
{return and__3822__auto____4778;
}
})());
};
var G__4815 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4815__delegate.call(this, x, y, z, args);
};
G__4815.cljs$lang$maxFixedArity = 3;
G__4815.cljs$lang$applyTo = (function (arglist__4816){
var x = cljs.core.first(arglist__4816);
var y = cljs.core.first(cljs.core.next(arglist__4816));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4816)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4816)));
return G__4815__delegate.call(this, x, y, z, args);
});
return G__4815;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__4809.call(this);
case  1 :
return epn__4810.call(this,x);
case  2 :
return epn__4811.call(this,x,y);
case  3 :
return epn__4812.call(this,x,y,z);
default:
return epn__4813.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4813.cljs$lang$applyTo;
return epn;
})()
};
var G__4808 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4808__delegate.call(this, p1, p2, p3, ps);
};
G__4808.cljs$lang$maxFixedArity = 3;
G__4808.cljs$lang$applyTo = (function (arglist__4817){
var p1 = cljs.core.first(arglist__4817);
var p2 = cljs.core.first(cljs.core.next(arglist__4817));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4817)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4817)));
return G__4808__delegate.call(this, p1, p2, p3, ps);
});
return G__4808;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__4779.call(this,p1);
case  2 :
return every_pred__4780.call(this,p1,p2);
case  3 :
return every_pred__4781.call(this,p1,p2,p3);
default:
return every_pred__4782.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4782.cljs$lang$applyTo;
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
var some_fn__4857 = (function (p){
return (function() {
var sp1 = null;
var sp1__4862 = (function (){
return null;
});
var sp1__4863 = (function (x){
return p.call(null,x);
});
var sp1__4864 = (function (x,y){
var or__3824__auto____4819 = p.call(null,x);

if(cljs.core.truth_(or__3824__auto____4819))
{return or__3824__auto____4819;
} else
{return p.call(null,y);
}
});
var sp1__4865 = (function (x,y,z){
var or__3824__auto____4820 = p.call(null,x);

if(cljs.core.truth_(or__3824__auto____4820))
{return or__3824__auto____4820;
} else
{var or__3824__auto____4821 = p.call(null,y);

if(cljs.core.truth_(or__3824__auto____4821))
{return or__3824__auto____4821;
} else
{return p.call(null,z);
}
}
});
var sp1__4866 = (function() { 
var G__4868__delegate = function (x,y,z,args){
var or__3824__auto____4822 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____4822))
{return or__3824__auto____4822;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__4868 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4868__delegate.call(this, x, y, z, args);
};
G__4868.cljs$lang$maxFixedArity = 3;
G__4868.cljs$lang$applyTo = (function (arglist__4869){
var x = cljs.core.first(arglist__4869);
var y = cljs.core.first(cljs.core.next(arglist__4869));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4869)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4869)));
return G__4868__delegate.call(this, x, y, z, args);
});
return G__4868;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__4862.call(this);
case  1 :
return sp1__4863.call(this,x);
case  2 :
return sp1__4864.call(this,x,y);
case  3 :
return sp1__4865.call(this,x,y,z);
default:
return sp1__4866.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4866.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__4858 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__4870 = (function (){
return null;
});
var sp2__4871 = (function (x){
var or__3824__auto____4823 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____4823))
{return or__3824__auto____4823;
} else
{return p2.call(null,x);
}
});
var sp2__4872 = (function (x,y){
var or__3824__auto____4824 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____4824))
{return or__3824__auto____4824;
} else
{var or__3824__auto____4825 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____4825))
{return or__3824__auto____4825;
} else
{var or__3824__auto____4826 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____4826))
{return or__3824__auto____4826;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__4873 = (function (x,y,z){
var or__3824__auto____4827 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____4827))
{return or__3824__auto____4827;
} else
{var or__3824__auto____4828 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____4828))
{return or__3824__auto____4828;
} else
{var or__3824__auto____4829 = p1.call(null,z);

if(cljs.core.truth_(or__3824__auto____4829))
{return or__3824__auto____4829;
} else
{var or__3824__auto____4830 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____4830))
{return or__3824__auto____4830;
} else
{var or__3824__auto____4831 = p2.call(null,y);

if(cljs.core.truth_(or__3824__auto____4831))
{return or__3824__auto____4831;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4874 = (function() { 
var G__4876__delegate = function (x,y,z,args){
var or__3824__auto____4832 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____4832))
{return or__3824__auto____4832;
} else
{return cljs.core.some.call(null,(function (p1__4735_SHARP_){
var or__3824__auto____4833 = p1.call(null,p1__4735_SHARP_);

if(cljs.core.truth_(or__3824__auto____4833))
{return or__3824__auto____4833;
} else
{return p2.call(null,p1__4735_SHARP_);
}
}),args);
}
};
var G__4876 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4876__delegate.call(this, x, y, z, args);
};
G__4876.cljs$lang$maxFixedArity = 3;
G__4876.cljs$lang$applyTo = (function (arglist__4877){
var x = cljs.core.first(arglist__4877);
var y = cljs.core.first(cljs.core.next(arglist__4877));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4877)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4877)));
return G__4876__delegate.call(this, x, y, z, args);
});
return G__4876;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__4870.call(this);
case  1 :
return sp2__4871.call(this,x);
case  2 :
return sp2__4872.call(this,x,y);
case  3 :
return sp2__4873.call(this,x,y,z);
default:
return sp2__4874.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4874.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__4859 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__4878 = (function (){
return null;
});
var sp3__4879 = (function (x){
var or__3824__auto____4834 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____4834))
{return or__3824__auto____4834;
} else
{var or__3824__auto____4835 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____4835))
{return or__3824__auto____4835;
} else
{return p3.call(null,x);
}
}
});
var sp3__4880 = (function (x,y){
var or__3824__auto____4836 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____4836))
{return or__3824__auto____4836;
} else
{var or__3824__auto____4837 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____4837))
{return or__3824__auto____4837;
} else
{var or__3824__auto____4838 = p3.call(null,x);

if(cljs.core.truth_(or__3824__auto____4838))
{return or__3824__auto____4838;
} else
{var or__3824__auto____4839 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____4839))
{return or__3824__auto____4839;
} else
{var or__3824__auto____4840 = p2.call(null,y);

if(cljs.core.truth_(or__3824__auto____4840))
{return or__3824__auto____4840;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__4881 = (function (x,y,z){
var or__3824__auto____4841 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____4841))
{return or__3824__auto____4841;
} else
{var or__3824__auto____4842 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____4842))
{return or__3824__auto____4842;
} else
{var or__3824__auto____4843 = p3.call(null,x);

if(cljs.core.truth_(or__3824__auto____4843))
{return or__3824__auto____4843;
} else
{var or__3824__auto____4844 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____4844))
{return or__3824__auto____4844;
} else
{var or__3824__auto____4845 = p2.call(null,y);

if(cljs.core.truth_(or__3824__auto____4845))
{return or__3824__auto____4845;
} else
{var or__3824__auto____4846 = p3.call(null,y);

if(cljs.core.truth_(or__3824__auto____4846))
{return or__3824__auto____4846;
} else
{var or__3824__auto____4847 = p1.call(null,z);

if(cljs.core.truth_(or__3824__auto____4847))
{return or__3824__auto____4847;
} else
{var or__3824__auto____4848 = p2.call(null,z);

if(cljs.core.truth_(or__3824__auto____4848))
{return or__3824__auto____4848;
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
var sp3__4882 = (function() { 
var G__4884__delegate = function (x,y,z,args){
var or__3824__auto____4849 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____4849))
{return or__3824__auto____4849;
} else
{return cljs.core.some.call(null,(function (p1__4736_SHARP_){
var or__3824__auto____4850 = p1.call(null,p1__4736_SHARP_);

if(cljs.core.truth_(or__3824__auto____4850))
{return or__3824__auto____4850;
} else
{var or__3824__auto____4851 = p2.call(null,p1__4736_SHARP_);

if(cljs.core.truth_(or__3824__auto____4851))
{return or__3824__auto____4851;
} else
{return p3.call(null,p1__4736_SHARP_);
}
}
}),args);
}
};
var G__4884 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4884__delegate.call(this, x, y, z, args);
};
G__4884.cljs$lang$maxFixedArity = 3;
G__4884.cljs$lang$applyTo = (function (arglist__4885){
var x = cljs.core.first(arglist__4885);
var y = cljs.core.first(cljs.core.next(arglist__4885));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4885)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4885)));
return G__4884__delegate.call(this, x, y, z, args);
});
return G__4884;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__4878.call(this);
case  1 :
return sp3__4879.call(this,x);
case  2 :
return sp3__4880.call(this,x,y);
case  3 :
return sp3__4881.call(this,x,y,z);
default:
return sp3__4882.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4882.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__4860 = (function() { 
var G__4886__delegate = function (p1,p2,p3,ps){
var ps__4852 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__4887 = (function (){
return null;
});
var spn__4888 = (function (x){
return cljs.core.some.call(null,(function (p1__4737_SHARP_){
return p1__4737_SHARP_.call(null,x);
}),ps__4852);
});
var spn__4889 = (function (x,y){
return cljs.core.some.call(null,(function (p1__4738_SHARP_){
var or__3824__auto____4853 = p1__4738_SHARP_.call(null,x);

if(cljs.core.truth_(or__3824__auto____4853))
{return or__3824__auto____4853;
} else
{return p1__4738_SHARP_.call(null,y);
}
}),ps__4852);
});
var spn__4890 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__4739_SHARP_){
var or__3824__auto____4854 = p1__4739_SHARP_.call(null,x);

if(cljs.core.truth_(or__3824__auto____4854))
{return or__3824__auto____4854;
} else
{var or__3824__auto____4855 = p1__4739_SHARP_.call(null,y);

if(cljs.core.truth_(or__3824__auto____4855))
{return or__3824__auto____4855;
} else
{return p1__4739_SHARP_.call(null,z);
}
}
}),ps__4852);
});
var spn__4891 = (function() { 
var G__4893__delegate = function (x,y,z,args){
var or__3824__auto____4856 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____4856))
{return or__3824__auto____4856;
} else
{return cljs.core.some.call(null,(function (p1__4740_SHARP_){
return cljs.core.some.call(null,p1__4740_SHARP_,args);
}),ps__4852);
}
};
var G__4893 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4893__delegate.call(this, x, y, z, args);
};
G__4893.cljs$lang$maxFixedArity = 3;
G__4893.cljs$lang$applyTo = (function (arglist__4894){
var x = cljs.core.first(arglist__4894);
var y = cljs.core.first(cljs.core.next(arglist__4894));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4894)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4894)));
return G__4893__delegate.call(this, x, y, z, args);
});
return G__4893;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__4887.call(this);
case  1 :
return spn__4888.call(this,x);
case  2 :
return spn__4889.call(this,x,y);
case  3 :
return spn__4890.call(this,x,y,z);
default:
return spn__4891.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4891.cljs$lang$applyTo;
return spn;
})()
};
var G__4886 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4886__delegate.call(this, p1, p2, p3, ps);
};
G__4886.cljs$lang$maxFixedArity = 3;
G__4886.cljs$lang$applyTo = (function (arglist__4895){
var p1 = cljs.core.first(arglist__4895);
var p2 = cljs.core.first(cljs.core.next(arglist__4895));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4895)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4895)));
return G__4886__delegate.call(this, p1, p2, p3, ps);
});
return G__4886;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__4857.call(this,p1);
case  2 :
return some_fn__4858.call(this,p1,p2);
case  3 :
return some_fn__4859.call(this,p1,p2,p3);
default:
return some_fn__4860.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4860.cljs$lang$applyTo;
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
var map__4908 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4896 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4896))
{var s__4897 = temp__3974__auto____4896;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__4897)),map.call(null,f,cljs.core.rest.call(null,s__4897)));
} else
{return null;
}
})));
});
var map__4909 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4898 = cljs.core.seq.call(null,c1);
var s2__4899 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3822__auto____4900 = s1__4898;

if(cljs.core.truth_(and__3822__auto____4900))
{return s2__4899;
} else
{return and__3822__auto____4900;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4898),cljs.core.first.call(null,s2__4899)),map.call(null,f,cljs.core.rest.call(null,s1__4898),cljs.core.rest.call(null,s2__4899)));
} else
{return null;
}
})));
});
var map__4910 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4901 = cljs.core.seq.call(null,c1);
var s2__4902 = cljs.core.seq.call(null,c2);
var s3__4903 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3822__auto____4904 = s1__4901;

if(cljs.core.truth_(and__3822__auto____4904))
{var and__3822__auto____4905 = s2__4902;

if(cljs.core.truth_(and__3822__auto____4905))
{return s3__4903;
} else
{return and__3822__auto____4905;
}
} else
{return and__3822__auto____4904;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4901),cljs.core.first.call(null,s2__4902),cljs.core.first.call(null,s3__4903)),map.call(null,f,cljs.core.rest.call(null,s1__4901),cljs.core.rest.call(null,s2__4902),cljs.core.rest.call(null,s3__4903)));
} else
{return null;
}
})));
});
var map__4911 = (function() { 
var G__4913__delegate = function (f,c1,c2,c3,colls){
var step__4907 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4906 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4906)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__4906),step.call(null,map.call(null,cljs.core.rest,ss__4906)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__4818_SHARP_){
return cljs.core.apply.call(null,f,p1__4818_SHARP_);
}),step__4907.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__4913 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4913__delegate.call(this, f, c1, c2, c3, colls);
};
G__4913.cljs$lang$maxFixedArity = 4;
G__4913.cljs$lang$applyTo = (function (arglist__4914){
var f = cljs.core.first(arglist__4914);
var c1 = cljs.core.first(cljs.core.next(arglist__4914));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4914)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4914))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4914))));
return G__4913__delegate.call(this, f, c1, c2, c3, colls);
});
return G__4913;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__4908.call(this,f,c1);
case  3 :
return map__4909.call(this,f,c1,c2);
case  4 :
return map__4910.call(this,f,c1,c2,c3);
default:
return map__4911.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__4911.cljs$lang$applyTo;
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
{var temp__3974__auto____4915 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4915))
{var s__4916 = temp__3974__auto____4915;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4916),take.call(null,(n - 1),cljs.core.rest.call(null,s__4916)));
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
var step__4919 = (function (n,coll){
while(true){
var s__4917 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3822__auto____4918 = (n > 0);

if(cljs.core.truth_(and__3822__auto____4918))
{return s__4917;
} else
{return and__3822__auto____4918;
}
})()))
{{
var G__4920 = (n - 1);
var G__4921 = cljs.core.rest.call(null,s__4917);
n = G__4920;
coll = G__4921;
continue;
}
} else
{return s__4917;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4919.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__4922 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__4923 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__4922.call(this,n);
case  2 :
return drop_last__4923.call(this,n,s);
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
var s__4925 = cljs.core.seq.call(null,coll);
var lead__4926 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__4926))
{{
var G__4927 = cljs.core.next.call(null,s__4925);
var G__4928 = cljs.core.next.call(null,lead__4926);
s__4925 = G__4927;
lead__4926 = G__4928;
continue;
}
} else
{return s__4925;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__4931 = (function (pred,coll){
while(true){
var s__4929 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3822__auto____4930 = s__4929;

if(cljs.core.truth_(and__3822__auto____4930))
{return pred.call(null,cljs.core.first.call(null,s__4929));
} else
{return and__3822__auto____4930;
}
})()))
{{
var G__4932 = pred;
var G__4933 = cljs.core.rest.call(null,s__4929);
pred = G__4932;
coll = G__4933;
continue;
}
} else
{return s__4929;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4931.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4934 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4934))
{var s__4935 = temp__3974__auto____4934;

return cljs.core.concat.call(null,s__4935,cycle.call(null,s__4935));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__4936 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__4937 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__4936.call(this,n);
case  2 :
return repeat__4937.call(this,n,x);
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
var repeatedly__4939 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__4940 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__4939.call(this,n);
case  2 :
return repeatedly__4940.call(this,n,f);
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
var interleave__4946 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4942 = cljs.core.seq.call(null,c1);
var s2__4943 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3822__auto____4944 = s1__4942;

if(cljs.core.truth_(and__3822__auto____4944))
{return s2__4943;
} else
{return and__3822__auto____4944;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__4942),cljs.core.cons.call(null,cljs.core.first.call(null,s2__4943),interleave.call(null,cljs.core.rest.call(null,s1__4942),cljs.core.rest.call(null,s2__4943))));
} else
{return null;
}
})));
});
var interleave__4947 = (function() { 
var G__4949__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4945 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4945)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__4945),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__4945)));
} else
{return null;
}
})));
};
var G__4949 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4949__delegate.call(this, c1, c2, colls);
};
G__4949.cljs$lang$maxFixedArity = 2;
G__4949.cljs$lang$applyTo = (function (arglist__4950){
var c1 = cljs.core.first(arglist__4950);
var c2 = cljs.core.first(cljs.core.next(arglist__4950));
var colls = cljs.core.rest(cljs.core.next(arglist__4950));
return G__4949__delegate.call(this, c1, c2, colls);
});
return G__4949;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__4946.call(this,c1,c2);
default:
return interleave__4947.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__4947.cljs$lang$applyTo;
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
var cat__4953 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____4951 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3971__auto____4951))
{var coll__4952 = temp__3971__auto____4951;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__4952),cat.call(null,cljs.core.rest.call(null,coll__4952),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__4953.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__4954 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__4955 = (function() { 
var G__4957__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__4957 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4957__delegate.call(this, f, coll, colls);
};
G__4957.cljs$lang$maxFixedArity = 2;
G__4957.cljs$lang$applyTo = (function (arglist__4958){
var f = cljs.core.first(arglist__4958);
var coll = cljs.core.first(cljs.core.next(arglist__4958));
var colls = cljs.core.rest(cljs.core.next(arglist__4958));
return G__4957__delegate.call(this, f, coll, colls);
});
return G__4957;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__4954.call(this,f,coll);
default:
return mapcat__4955.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__4955.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4959 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4959))
{var s__4960 = temp__3974__auto____4959;

var f__4961 = cljs.core.first.call(null,s__4960);
var r__4962 = cljs.core.rest.call(null,s__4960);

if(cljs.core.truth_(pred.call(null,f__4961)))
{return cljs.core.cons.call(null,f__4961,filter.call(null,pred,r__4962));
} else
{return filter.call(null,pred,r__4962);
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
var walk__4964 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__4964.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__4963_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__4963_SHARP_));
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
var partition__4971 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__4972 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4965 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4965))
{var s__4966 = temp__3974__auto____4965;

var p__4967 = cljs.core.take.call(null,n,s__4966);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4967))))
{return cljs.core.cons.call(null,p__4967,partition.call(null,n,step,cljs.core.drop.call(null,step,s__4966)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4973 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____4968 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____4968))
{var s__4969 = temp__3974__auto____4968;

var p__4970 = cljs.core.take.call(null,n,s__4969);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4970))))
{return cljs.core.cons.call(null,p__4970,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__4969)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__4970,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__4971.call(this,n,step);
case  3 :
return partition__4972.call(this,n,step,pad);
case  4 :
return partition__4973.call(this,n,step,pad,coll);
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
var get_in__4979 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__4980 = (function (m,ks,not_found){
var sentinel__4975 = cljs.core.lookup_sentinel;
var m__4976 = m;
var ks__4977 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__4977))
{var m__4978 = cljs.core.get.call(null,m__4976,cljs.core.first.call(null,ks__4977),sentinel__4975);

if(cljs.core.truth_((sentinel__4975 === m__4978)))
{return not_found;
} else
{{
var G__4982 = sentinel__4975;
var G__4983 = m__4978;
var G__4984 = cljs.core.next.call(null,ks__4977);
sentinel__4975 = G__4982;
m__4976 = G__4983;
ks__4977 = G__4984;
continue;
}
}
} else
{return m__4976;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__4979.call(this,m,ks);
case  3 :
return get_in__4980.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__4985,v){
var vec__4986__4987 = p__4985;
var k__4988 = cljs.core.nth.call(null,vec__4986__4987,0,null);
var ks__4989 = cljs.core.nthnext.call(null,vec__4986__4987,1);

if(cljs.core.truth_(ks__4989))
{return cljs.core.assoc.call(null,m,k__4988,assoc_in.call(null,cljs.core.get.call(null,m,k__4988),ks__4989,v));
} else
{return cljs.core.assoc.call(null,m,k__4988,v);
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
var update_in__delegate = function (m,p__4990,f,args){
var vec__4991__4992 = p__4990;
var k__4993 = cljs.core.nth.call(null,vec__4991__4992,0,null);
var ks__4994 = cljs.core.nthnext.call(null,vec__4991__4992,1);

if(cljs.core.truth_(ks__4994))
{return cljs.core.assoc.call(null,m,k__4993,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__4993),ks__4994,f,args));
} else
{return cljs.core.assoc.call(null,m,k__4993,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__4993),args));
}
};
var update_in = function (m,p__4990,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__4990, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__4995){
var m = cljs.core.first(arglist__4995);
var p__4990 = cljs.core.first(cljs.core.next(arglist__4995));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4995)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4995)));
return update_in__delegate.call(this, m, p__4990, f, args);
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
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__268__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4996 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5023 = null;
var G__5023__5024 = (function (coll,k){
var this__4997 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__5023__5025 = (function (coll,k,not_found){
var this__4998 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__5023 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5023__5024.call(this,coll,k);
case  3 :
return G__5023__5025.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5023;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4999 = this;
var new_array__5000 = cljs.core.aclone.call(null,this__4999.array);

(new_array__5000[k] = v);
return (new cljs.core.Vector(this__4999.meta,new_array__5000));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__5027 = null;
var G__5027__5028 = (function (coll,k){
var this__5001 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__5027__5029 = (function (coll,k,not_found){
var this__5002 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__5027 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5027__5028.call(this,coll,k);
case  3 :
return G__5027__5029.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5027;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5003 = this;
var new_array__5004 = cljs.core.aclone.call(null,this__5003.array);

new_array__5004.push(o);
return (new cljs.core.Vector(this__5003.meta,new_array__5004));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__5031 = null;
var G__5031__5032 = (function (v,f){
var this__5005 = this;
return cljs.core.ci_reduce.call(null,this__5005.array,f);
});
var G__5031__5033 = (function (v,f,start){
var this__5006 = this;
return cljs.core.ci_reduce.call(null,this__5006.array,f,start);
});
G__5031 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__5031__5032.call(this,v,f);
case  3 :
return G__5031__5033.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5031;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5007 = this;
if(cljs.core.truth_((this__5007.array.length > 0)))
{var vector_seq__5008 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__5007.array.length)))
{return cljs.core.cons.call(null,(this__5007.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__5008.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5009 = this;
return this__5009.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5010 = this;
var count__5011 = this__5010.array.length;

if(cljs.core.truth_((count__5011 > 0)))
{return (this__5010.array[(count__5011 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5012 = this;
if(cljs.core.truth_((this__5012.array.length > 0)))
{var new_array__5013 = cljs.core.aclone.call(null,this__5012.array);

new_array__5013.pop();
return (new cljs.core.Vector(this__5012.meta,new_array__5013));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__5014 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5015 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5016 = this;
return (new cljs.core.Vector(meta,this__5016.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5017 = this;
return this__5017.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__5035 = null;
var G__5035__5036 = (function (coll,n){
var this__5018 = this;
if(cljs.core.truth_((function (){var and__3822__auto____5019 = (0 <= n);

if(cljs.core.truth_(and__3822__auto____5019))
{return (n < this__5018.array.length);
} else
{return and__3822__auto____5019;
}
})()))
{return (this__5018.array[n]);
} else
{return null;
}
});
var G__5035__5037 = (function (coll,n,not_found){
var this__5020 = this;
if(cljs.core.truth_((function (){var and__3822__auto____5021 = (0 <= n);

if(cljs.core.truth_(and__3822__auto____5021))
{return (n < this__5020.array.length);
} else
{return and__3822__auto____5021;
}
})()))
{return (this__5020.array[n]);
} else
{return not_found;
}
});
G__5035 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5035__5036.call(this,coll,n);
case  3 :
return G__5035__5037.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5035;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5022 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__5022.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
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
vector.cljs$lang$applyTo = (function (arglist__5039){
var args = cljs.core.seq( arglist__5039 );;
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
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__268__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5040 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5062 = null;
var G__5062__5063 = (function (coll,k){
var this__5041 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__5062__5064 = (function (coll,k,not_found){
var this__5042 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__5062 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5062__5063.call(this,coll,k);
case  3 :
return G__5062__5064.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5062;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__5043 = this;
var v_pos__5044 = (this__5043.start + key);

return (new cljs.core.Subvec(this__5043.meta,cljs.core._assoc.call(null,this__5043.v,v_pos__5044,val),this__5043.start,((this__5043.end > (v_pos__5044 + 1)) ? this__5043.end : (v_pos__5044 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__5066 = null;
var G__5066__5067 = (function (coll,k){
var this__5045 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__5066__5068 = (function (coll,k,not_found){
var this__5046 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__5066 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5066__5067.call(this,coll,k);
case  3 :
return G__5066__5068.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5066;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5047 = this;
return (new cljs.core.Subvec(this__5047.meta,cljs.core._assoc_n.call(null,this__5047.v,this__5047.end,o),this__5047.start,(this__5047.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__5070 = null;
var G__5070__5071 = (function (coll,f){
var this__5048 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__5070__5072 = (function (coll,f,start){
var this__5049 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__5070 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__5070__5071.call(this,coll,f);
case  3 :
return G__5070__5072.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5070;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5050 = this;
var subvec_seq__5051 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__5050.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__5050.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__5051.call(null,this__5050.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5052 = this;
return (this__5052.end - this__5052.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5053 = this;
return cljs.core._nth.call(null,this__5053.v,(this__5053.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5054 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__5054.start,this__5054.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__5054.meta,this__5054.v,this__5054.start,(this__5054.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__5055 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5056 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5057 = this;
return (new cljs.core.Subvec(meta,this__5057.v,this__5057.start,this__5057.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5058 = this;
return this__5058.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__5074 = null;
var G__5074__5075 = (function (coll,n){
var this__5059 = this;
return cljs.core._nth.call(null,this__5059.v,(this__5059.start + n));
});
var G__5074__5076 = (function (coll,n,not_found){
var this__5060 = this;
return cljs.core._nth.call(null,this__5060.v,(this__5060.start + n),not_found);
});
G__5074 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__5074__5075.call(this,coll,n);
case  3 :
return G__5074__5076.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5074;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5061 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__5061.meta);
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
var subvec__5078 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__5079 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__5078.call(this,v,start);
case  3 :
return subvec__5079.call(this,v,start,end);
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
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__268__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5081 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5082 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5083 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5084 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5084.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5085 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5086 = this;
return cljs.core._first.call(null,this__5086.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5087 = this;
var temp__3971__auto____5088 = cljs.core.next.call(null,this__5087.front);

if(cljs.core.truth_(temp__3971__auto____5088))
{var f1__5089 = temp__3971__auto____5088;

return (new cljs.core.PersistentQueueSeq(this__5087.meta,f1__5089,this__5087.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__5087.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__5087.meta,this__5087.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5090 = this;
return this__5090.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5091 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__5091.front,this__5091.rear));
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
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__268__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5092 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5093 = this;
if(cljs.core.truth_(this__5093.front))
{return (new cljs.core.PersistentQueue(this__5093.meta,(this__5093.count + 1),this__5093.front,cljs.core.conj.call(null,(function (){var or__3824__auto____5094 = this__5093.rear;

if(cljs.core.truth_(or__3824__auto____5094))
{return or__3824__auto____5094;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__5093.meta,(this__5093.count + 1),cljs.core.conj.call(null,this__5093.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5095 = this;
var rear__5096 = cljs.core.seq.call(null,this__5095.rear);

if(cljs.core.truth_((function (){var or__3824__auto____5097 = this__5095.front;

if(cljs.core.truth_(or__3824__auto____5097))
{return or__3824__auto____5097;
} else
{return rear__5096;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__5095.front,cljs.core.seq.call(null,rear__5096)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5098 = this;
return this__5098.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__5099 = this;
return cljs.core._first.call(null,this__5099.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__5100 = this;
if(cljs.core.truth_(this__5100.front))
{var temp__3971__auto____5101 = cljs.core.next.call(null,this__5100.front);

if(cljs.core.truth_(temp__3971__auto____5101))
{var f1__5102 = temp__3971__auto____5101;

return (new cljs.core.PersistentQueue(this__5100.meta,(this__5100.count - 1),f1__5102,this__5100.rear));
} else
{return (new cljs.core.PersistentQueue(this__5100.meta,(this__5100.count - 1),cljs.core.seq.call(null,this__5100.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__5103 = this;
return cljs.core.first.call(null,this__5103.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__5104 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5105 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5106 = this;
return (new cljs.core.PersistentQueue(meta,this__5106.count,this__5106.front,this__5106.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5107 = this;
return this__5107.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5108 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__268__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__5109 = this;
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
var len__5110 = array.length;

var i__5111 = 0;

while(true){
if(cljs.core.truth_((i__5111 < len__5110)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__5111]))))
{return i__5111;
} else
{{
var G__5112 = (i__5111 + incr);
i__5111 = G__5112;
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
var obj_map_contains_key_QMARK___5114 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___5115 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3822__auto____5113 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3822__auto____5113))
{return strobj.hasOwnProperty(k);
} else
{return and__3822__auto____5113;
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
return obj_map_contains_key_QMARK___5114.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___5115.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__268__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5118 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5139 = null;
var G__5139__5140 = (function (coll,k){
var this__5119 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__5139__5141 = (function (coll,k,not_found){
var this__5120 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__5120.strobj,(this__5120.strobj[k]),not_found);
});
G__5139 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5139__5140.call(this,coll,k);
case  3 :
return G__5139__5141.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5139;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__5121 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__5122 = goog.object.clone.call(null,this__5121.strobj);
var overwrite_QMARK___5123 = new_strobj__5122.hasOwnProperty(k);

(new_strobj__5122[k] = v);
if(cljs.core.truth_(overwrite_QMARK___5123))
{return (new cljs.core.ObjMap(this__5121.meta,this__5121.keys,new_strobj__5122));
} else
{var new_keys__5124 = cljs.core.aclone.call(null,this__5121.keys);

new_keys__5124.push(k);
return (new cljs.core.ObjMap(this__5121.meta,new_keys__5124,new_strobj__5122));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__5121.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__5125 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__5125.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__5143 = null;
var G__5143__5144 = (function (coll,k){
var this__5126 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__5143__5145 = (function (coll,k,not_found){
var this__5127 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__5143 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5143__5144.call(this,coll,k);
case  3 :
return G__5143__5145.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5143;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__5128 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5129 = this;
if(cljs.core.truth_((this__5129.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__5117_SHARP_){
return cljs.core.vector.call(null,p1__5117_SHARP_,(this__5129.strobj[p1__5117_SHARP_]));
}),this__5129.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5130 = this;
return this__5130.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5131 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5132 = this;
return (new cljs.core.ObjMap(meta,this__5132.keys,this__5132.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5133 = this;
return this__5133.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5134 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__5134.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__5135 = this;
if(cljs.core.truth_((function (){var and__3822__auto____5136 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3822__auto____5136))
{return this__5135.strobj.hasOwnProperty(k);
} else
{return and__3822__auto____5136;
}
})()))
{var new_keys__5137 = cljs.core.aclone.call(null,this__5135.keys);
var new_strobj__5138 = goog.object.clone.call(null,this__5135.strobj);

new_keys__5137.splice(cljs.core.scan_array.call(null,1,k,new_keys__5137),1);
cljs.core.js_delete.call(null,new_strobj__5138,k);
return (new cljs.core.ObjMap(this__5135.meta,new_keys__5137,new_strobj__5138));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
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
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__268__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5148 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5180 = null;
var G__5180__5181 = (function (coll,k){
var this__5149 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__5180__5182 = (function (coll,k,not_found){
var this__5150 = this;
var bucket__5151 = (this__5150.hashobj[cljs.core.hash.call(null,k)]);
var i__5152 = (cljs.core.truth_(bucket__5151)?cljs.core.scan_array.call(null,2,k,bucket__5151):null);

if(cljs.core.truth_(i__5152))
{return (bucket__5151[(i__5152 + 1)]);
} else
{return not_found;
}
});
G__5180 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5180__5181.call(this,coll,k);
case  3 :
return G__5180__5182.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5180;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__5153 = this;
var h__5154 = cljs.core.hash.call(null,k);
var bucket__5155 = (this__5153.hashobj[h__5154]);

if(cljs.core.truth_(bucket__5155))
{var new_bucket__5156 = cljs.core.aclone.call(null,bucket__5155);
var new_hashobj__5157 = goog.object.clone.call(null,this__5153.hashobj);

(new_hashobj__5157[h__5154] = new_bucket__5156);
var temp__3971__auto____5158 = cljs.core.scan_array.call(null,2,k,new_bucket__5156);

if(cljs.core.truth_(temp__3971__auto____5158))
{var i__5159 = temp__3971__auto____5158;

(new_bucket__5156[(i__5159 + 1)] = v);
return (new cljs.core.HashMap(this__5153.meta,this__5153.count,new_hashobj__5157));
} else
{new_bucket__5156.push(k,v);
return (new cljs.core.HashMap(this__5153.meta,(this__5153.count + 1),new_hashobj__5157));
}
} else
{var new_hashobj__5160 = goog.object.clone.call(null,this__5153.hashobj);

(new_hashobj__5160[h__5154] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__5153.meta,(this__5153.count + 1),new_hashobj__5160));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__5161 = this;
var bucket__5162 = (this__5161.hashobj[cljs.core.hash.call(null,k)]);
var i__5163 = (cljs.core.truth_(bucket__5162)?cljs.core.scan_array.call(null,2,k,bucket__5162):null);

if(cljs.core.truth_(i__5163))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__5184 = null;
var G__5184__5185 = (function (coll,k){
var this__5164 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__5184__5186 = (function (coll,k,not_found){
var this__5165 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__5184 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5184__5185.call(this,coll,k);
case  3 :
return G__5184__5186.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5184;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__5166 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5167 = this;
if(cljs.core.truth_((this__5167.count > 0)))
{var hashes__5168 = cljs.core.js_keys.call(null,this__5167.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__5147_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__5167.hashobj[p1__5147_SHARP_])));
}),hashes__5168);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5169 = this;
return this__5169.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5170 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5171 = this;
return (new cljs.core.HashMap(meta,this__5171.count,this__5171.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5172 = this;
return this__5172.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5173 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__5173.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__5174 = this;
var h__5175 = cljs.core.hash.call(null,k);
var bucket__5176 = (this__5174.hashobj[h__5175]);
var i__5177 = (cljs.core.truth_(bucket__5176)?cljs.core.scan_array.call(null,2,k,bucket__5176):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__5177)))
{return coll;
} else
{var new_hashobj__5178 = goog.object.clone.call(null,this__5174.hashobj);

if(cljs.core.truth_((3 > bucket__5176.length)))
{cljs.core.js_delete.call(null,new_hashobj__5178,h__5175);
} else
{var new_bucket__5179 = cljs.core.aclone.call(null,bucket__5176);

new_bucket__5179.splice(i__5177,2);
(new_hashobj__5178[h__5175] = new_bucket__5179);
}
return (new cljs.core.HashMap(this__5174.meta,(this__5174.count - 1),new_hashobj__5178));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__5188 = ks.length;

var i__5189 = 0;
var out__5190 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__5189 < len__5188)))
{{
var G__5191 = (i__5189 + 1);
var G__5192 = cljs.core.assoc.call(null,out__5190,(ks[i__5189]),(vs[i__5189]));
i__5189 = G__5191;
out__5190 = G__5192;
continue;
}
} else
{return out__5190;
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
var in$__5193 = cljs.core.seq.call(null,keyvals);
var out__5194 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__5193))
{{
var G__5195 = cljs.core.nnext.call(null,in$__5193);
var G__5196 = cljs.core.assoc.call(null,out__5194,cljs.core.first.call(null,in$__5193),cljs.core.second.call(null,in$__5193));
in$__5193 = G__5195;
out__5194 = G__5196;
continue;
}
} else
{return out__5194;
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
hash_map.cljs$lang$applyTo = (function (arglist__5197){
var keyvals = cljs.core.seq( arglist__5197 );;
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
{return cljs.core.reduce.call(null,(function (p1__5198_SHARP_,p2__5199_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____5200 = p1__5198_SHARP_;

if(cljs.core.truth_(or__3824__auto____5200))
{return or__3824__auto____5200;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__5199_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__5201){
var maps = cljs.core.seq( arglist__5201 );;
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
{var merge_entry__5204 = (function (m,e){
var k__5202 = cljs.core.first.call(null,e);
var v__5203 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__5202)))
{return cljs.core.assoc.call(null,m,k__5202,f.call(null,cljs.core.get.call(null,m,k__5202),v__5203));
} else
{return cljs.core.assoc.call(null,m,k__5202,v__5203);
}
});
var merge2__5206 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__5204,(function (){var or__3824__auto____5205 = m1;

if(cljs.core.truth_(or__3824__auto____5205))
{return or__3824__auto____5205;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__5206,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__5207){
var f = cljs.core.first(arglist__5207);
var maps = cljs.core.rest(arglist__5207);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__5209 = cljs.core.ObjMap.fromObject([],{});
var keys__5210 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__5210))
{var key__5211 = cljs.core.first.call(null,keys__5210);
var entry__5212 = cljs.core.get.call(null,map,key__5211,"﷐'user/not-found");

{
var G__5213 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__5212,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__5209,key__5211,entry__5212):ret__5209);
var G__5214 = cljs.core.next.call(null,keys__5210);
ret__5209 = G__5213;
keys__5210 = G__5214;
continue;
}
} else
{return ret__5209;
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
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__268__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__5215 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__5230 = null;
var G__5230__5231 = (function (coll,v){
var this__5216 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__5230__5232 = (function (coll,v,not_found){
var this__5217 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__5217.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__5230 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__5230__5231.call(this,coll,v);
case  3 :
return G__5230__5232.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5230;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__5234 = null;
var G__5234__5235 = (function (coll,k){
var this__5218 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__5234__5236 = (function (coll,k,not_found){
var this__5219 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__5234 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__5234__5235.call(this,coll,k);
case  3 :
return G__5234__5236.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5234;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__5220 = this;
return (new cljs.core.Set(this__5220.meta,cljs.core.assoc.call(null,this__5220.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__5221 = this;
return cljs.core.keys.call(null,this__5221.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__5222 = this;
return (new cljs.core.Set(this__5222.meta,cljs.core.dissoc.call(null,this__5222.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__5223 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__5224 = this;
var and__3822__auto____5225 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3822__auto____5225))
{var and__3822__auto____5226 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3822__auto____5226))
{return cljs.core.every_QMARK_.call(null,(function (p1__5208_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__5208_SHARP_);
}),other);
} else
{return and__3822__auto____5226;
}
} else
{return and__3822__auto____5225;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__5227 = this;
return (new cljs.core.Set(meta,this__5227.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__5228 = this;
return this__5228.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__5229 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__5229.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__5239 = cljs.core.seq.call(null,coll);
var out__5240 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__5239))))
{{
var G__5241 = cljs.core.rest.call(null,in$__5239);
var G__5242 = cljs.core.conj.call(null,out__5240,cljs.core.first.call(null,in$__5239));
in$__5239 = G__5241;
out__5240 = G__5242;
continue;
}
} else
{return out__5240;
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
{var n__5243 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____5244 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3971__auto____5244))
{var e__5245 = temp__3971__auto____5244;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__5245));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__5243,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__5238_SHARP_){
var temp__3971__auto____5246 = cljs.core.find.call(null,smap,p1__5238_SHARP_);

if(cljs.core.truth_(temp__3971__auto____5246))
{var e__5247 = temp__3971__auto____5246;

return cljs.core.second.call(null,e__5247);
} else
{return p1__5238_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__5255 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__5248,seen){
while(true){
var vec__5249__5250 = p__5248;
var f__5251 = cljs.core.nth.call(null,vec__5249__5250,0,null);
var xs__5252 = vec__5249__5250;

var temp__3974__auto____5253 = cljs.core.seq.call(null,xs__5252);

if(cljs.core.truth_(temp__3974__auto____5253))
{var s__5254 = temp__3974__auto____5253;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__5251)))
{{
var G__5256 = cljs.core.rest.call(null,s__5254);
var G__5257 = seen;
p__5248 = G__5256;
seen = G__5257;
continue;
}
} else
{return cljs.core.cons.call(null,f__5251,step.call(null,cljs.core.rest.call(null,s__5254),cljs.core.conj.call(null,seen,f__5251)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__5255.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__5258 = cljs.core.Vector.fromArray([]);
var s__5259 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__5259)))
{{
var G__5260 = cljs.core.conj.call(null,ret__5258,cljs.core.first.call(null,s__5259));
var G__5261 = cljs.core.next.call(null,s__5259);
ret__5258 = G__5260;
s__5259 = G__5261;
continue;
}
} else
{return cljs.core.seq.call(null,ret__5258);
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
{if(cljs.core.truth_((function (){var or__3824__auto____5262 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3824__auto____5262))
{return or__3824__auto____5262;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__5263 = x.lastIndexOf("/");

if(cljs.core.truth_((i__5263 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__5263 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
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
if(cljs.core.truth_((function (){var or__3824__auto____5264 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3824__auto____5264))
{return or__3824__auto____5264;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__5265 = x.lastIndexOf("/");

if(cljs.core.truth_((i__5265 > -1)))
{return cljs.core.subs.call(null,x,2,i__5265);
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
var map__5268 = cljs.core.ObjMap.fromObject([],{});
var ks__5269 = cljs.core.seq.call(null,keys);
var vs__5270 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3822__auto____5271 = ks__5269;

if(cljs.core.truth_(and__3822__auto____5271))
{return vs__5270;
} else
{return and__3822__auto____5271;
}
})()))
{{
var G__5272 = cljs.core.assoc.call(null,map__5268,cljs.core.first.call(null,ks__5269),cljs.core.first.call(null,vs__5270));
var G__5273 = cljs.core.next.call(null,ks__5269);
var G__5274 = cljs.core.next.call(null,vs__5270);
map__5268 = G__5272;
ks__5269 = G__5273;
vs__5270 = G__5274;
continue;
}
} else
{return map__5268;
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
var max_key__5277 = (function (k,x){
return x;
});
var max_key__5278 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__5279 = (function() { 
var G__5281__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__5266_SHARP_,p2__5267_SHARP_){
return max_key.call(null,k,p1__5266_SHARP_,p2__5267_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__5281 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5281__delegate.call(this, k, x, y, more);
};
G__5281.cljs$lang$maxFixedArity = 3;
G__5281.cljs$lang$applyTo = (function (arglist__5282){
var k = cljs.core.first(arglist__5282);
var x = cljs.core.first(cljs.core.next(arglist__5282));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5282)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5282)));
return G__5281__delegate.call(this, k, x, y, more);
});
return G__5281;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__5277.call(this,k,x);
case  3 :
return max_key__5278.call(this,k,x,y);
default:
return max_key__5279.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__5279.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__5283 = (function (k,x){
return x;
});
var min_key__5284 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__5285 = (function() { 
var G__5287__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__5275_SHARP_,p2__5276_SHARP_){
return min_key.call(null,k,p1__5275_SHARP_,p2__5276_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__5287 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5287__delegate.call(this, k, x, y, more);
};
G__5287.cljs$lang$maxFixedArity = 3;
G__5287.cljs$lang$applyTo = (function (arglist__5288){
var k = cljs.core.first(arglist__5288);
var x = cljs.core.first(cljs.core.next(arglist__5288));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5288)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5288)));
return G__5287__delegate.call(this, k, x, y, more);
});
return G__5287;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__5283.call(this,k,x);
case  3 :
return min_key__5284.call(this,k,x,y);
default:
return min_key__5285.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__5285.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__5291 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__5292 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5289 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5289))
{var s__5290 = temp__3974__auto____5289;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__5290),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__5290)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__5291.call(this,n,step);
case  3 :
return partition_all__5292.call(this,n,step,coll);
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
var temp__3974__auto____5294 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5294))
{var s__5295 = temp__3974__auto____5294;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__5295))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__5295),take_while.call(null,pred,cljs.core.rest.call(null,s__5295)));
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
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__268__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__5296 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__5297 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__5313 = null;
var G__5313__5314 = (function (rng,f){
var this__5298 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__5313__5315 = (function (rng,f,s){
var this__5299 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__5313 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__5313__5314.call(this,rng,f);
case  3 :
return G__5313__5315.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5313;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__5300 = this;
var comp__5301 = (cljs.core.truth_((this__5300.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__5301.call(null,this__5300.start,this__5300.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__5302 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__5302.end - this__5302.start) / this__5302.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__5303 = this;
return this__5303.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__5304 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__5304.meta,(this__5304.start + this__5304.step),this__5304.end,this__5304.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__5305 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__5306 = this;
return (new cljs.core.Range(meta,this__5306.start,this__5306.end,this__5306.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__5307 = this;
return this__5307.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__5317 = null;
var G__5317__5318 = (function (rng,n){
var this__5308 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__5308.start + (n * this__5308.step));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____5309 = (this__5308.start > this__5308.end);

if(cljs.core.truth_(and__3822__auto____5309))
{return cljs.core._EQ_.call(null,this__5308.step,0);
} else
{return and__3822__auto____5309;
}
})()))
{return this__5308.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__5317__5319 = (function (rng,n,not_found){
var this__5310 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__5310.start + (n * this__5310.step));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____5311 = (this__5310.start > this__5310.end);

if(cljs.core.truth_(and__3822__auto____5311))
{return cljs.core._EQ_.call(null,this__5310.step,0);
} else
{return and__3822__auto____5311;
}
})()))
{return this__5310.start;
} else
{return not_found;
}
}
});
G__5317 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__5317__5318.call(this,rng,n);
case  3 :
return G__5317__5319.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5317;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__5312 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__5312.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__5321 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__5322 = (function (end){
return range.call(null,0,end,1);
});
var range__5323 = (function (start,end){
return range.call(null,start,end,1);
});
var range__5324 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__5321.call(this);
case  1 :
return range__5322.call(this,start);
case  2 :
return range__5323.call(this,start,end);
case  3 :
return range__5324.call(this,start,end,step);
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
var temp__3974__auto____5326 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5326))
{var s__5327 = temp__3974__auto____5326;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__5327),take_nth.call(null,n,cljs.core.drop.call(null,n,s__5327)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5329 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5329))
{var s__5330 = temp__3974__auto____5329;

var fst__5331 = cljs.core.first.call(null,s__5330);
var fv__5332 = f.call(null,fst__5331);
var run__5333 = cljs.core.cons.call(null,fst__5331,cljs.core.take_while.call(null,(function (p1__5328_SHARP_){
return cljs.core._EQ_.call(null,fv__5332,f.call(null,p1__5328_SHARP_));
}),cljs.core.next.call(null,s__5330)));

return cljs.core.cons.call(null,run__5333,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__5333),s__5330))));
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
var reductions__5348 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____5344 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3971__auto____5344))
{var s__5345 = temp__3971__auto____5344;

return reductions.call(null,f,cljs.core.first.call(null,s__5345),cljs.core.rest.call(null,s__5345));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__5349 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____5346 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____5346))
{var s__5347 = temp__3974__auto____5346;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__5347)),cljs.core.rest.call(null,s__5347));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__5348.call(this,f,init);
case  3 :
return reductions__5349.call(this,f,init,coll);
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
var juxt__5352 = (function (f){
return (function() {
var G__5357 = null;
var G__5357__5358 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__5357__5359 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__5357__5360 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__5357__5361 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__5357__5362 = (function() { 
var G__5364__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__5364 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5364__delegate.call(this, x, y, z, args);
};
G__5364.cljs$lang$maxFixedArity = 3;
G__5364.cljs$lang$applyTo = (function (arglist__5365){
var x = cljs.core.first(arglist__5365);
var y = cljs.core.first(cljs.core.next(arglist__5365));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5365)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5365)));
return G__5364__delegate.call(this, x, y, z, args);
});
return G__5364;
})()
;
G__5357 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5357__5358.call(this);
case  1 :
return G__5357__5359.call(this,x);
case  2 :
return G__5357__5360.call(this,x,y);
case  3 :
return G__5357__5361.call(this,x,y,z);
default:
return G__5357__5362.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5357.cljs$lang$maxFixedArity = 3;
G__5357.cljs$lang$applyTo = G__5357__5362.cljs$lang$applyTo;
return G__5357;
})()
});
var juxt__5353 = (function (f,g){
return (function() {
var G__5366 = null;
var G__5366__5367 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__5366__5368 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__5366__5369 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__5366__5370 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__5366__5371 = (function() { 
var G__5373__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__5373 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5373__delegate.call(this, x, y, z, args);
};
G__5373.cljs$lang$maxFixedArity = 3;
G__5373.cljs$lang$applyTo = (function (arglist__5374){
var x = cljs.core.first(arglist__5374);
var y = cljs.core.first(cljs.core.next(arglist__5374));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5374)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5374)));
return G__5373__delegate.call(this, x, y, z, args);
});
return G__5373;
})()
;
G__5366 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5366__5367.call(this);
case  1 :
return G__5366__5368.call(this,x);
case  2 :
return G__5366__5369.call(this,x,y);
case  3 :
return G__5366__5370.call(this,x,y,z);
default:
return G__5366__5371.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5366.cljs$lang$maxFixedArity = 3;
G__5366.cljs$lang$applyTo = G__5366__5371.cljs$lang$applyTo;
return G__5366;
})()
});
var juxt__5354 = (function (f,g,h){
return (function() {
var G__5375 = null;
var G__5375__5376 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__5375__5377 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__5375__5378 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__5375__5379 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__5375__5380 = (function() { 
var G__5382__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__5382 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5382__delegate.call(this, x, y, z, args);
};
G__5382.cljs$lang$maxFixedArity = 3;
G__5382.cljs$lang$applyTo = (function (arglist__5383){
var x = cljs.core.first(arglist__5383);
var y = cljs.core.first(cljs.core.next(arglist__5383));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5383)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5383)));
return G__5382__delegate.call(this, x, y, z, args);
});
return G__5382;
})()
;
G__5375 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5375__5376.call(this);
case  1 :
return G__5375__5377.call(this,x);
case  2 :
return G__5375__5378.call(this,x,y);
case  3 :
return G__5375__5379.call(this,x,y,z);
default:
return G__5375__5380.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5375.cljs$lang$maxFixedArity = 3;
G__5375.cljs$lang$applyTo = G__5375__5380.cljs$lang$applyTo;
return G__5375;
})()
});
var juxt__5355 = (function() { 
var G__5384__delegate = function (f,g,h,fs){
var fs__5351 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__5385 = null;
var G__5385__5386 = (function (){
return cljs.core.reduce.call(null,(function (p1__5334_SHARP_,p2__5335_SHARP_){
return cljs.core.conj.call(null,p1__5334_SHARP_,p2__5335_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__5351);
});
var G__5385__5387 = (function (x){
return cljs.core.reduce.call(null,(function (p1__5336_SHARP_,p2__5337_SHARP_){
return cljs.core.conj.call(null,p1__5336_SHARP_,p2__5337_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__5351);
});
var G__5385__5388 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__5338_SHARP_,p2__5339_SHARP_){
return cljs.core.conj.call(null,p1__5338_SHARP_,p2__5339_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__5351);
});
var G__5385__5389 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__5340_SHARP_,p2__5341_SHARP_){
return cljs.core.conj.call(null,p1__5340_SHARP_,p2__5341_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__5351);
});
var G__5385__5390 = (function() { 
var G__5392__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__5342_SHARP_,p2__5343_SHARP_){
return cljs.core.conj.call(null,p1__5342_SHARP_,cljs.core.apply.call(null,p2__5343_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__5351);
};
var G__5392 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5392__delegate.call(this, x, y, z, args);
};
G__5392.cljs$lang$maxFixedArity = 3;
G__5392.cljs$lang$applyTo = (function (arglist__5393){
var x = cljs.core.first(arglist__5393);
var y = cljs.core.first(cljs.core.next(arglist__5393));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5393)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5393)));
return G__5392__delegate.call(this, x, y, z, args);
});
return G__5392;
})()
;
G__5385 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__5385__5386.call(this);
case  1 :
return G__5385__5387.call(this,x);
case  2 :
return G__5385__5388.call(this,x,y);
case  3 :
return G__5385__5389.call(this,x,y,z);
default:
return G__5385__5390.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__5385.cljs$lang$maxFixedArity = 3;
G__5385.cljs$lang$applyTo = G__5385__5390.cljs$lang$applyTo;
return G__5385;
})()
};
var G__5384 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__5384__delegate.call(this, f, g, h, fs);
};
G__5384.cljs$lang$maxFixedArity = 3;
G__5384.cljs$lang$applyTo = (function (arglist__5394){
var f = cljs.core.first(arglist__5394);
var g = cljs.core.first(cljs.core.next(arglist__5394));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5394)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__5394)));
return G__5384__delegate.call(this, f, g, h, fs);
});
return G__5384;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__5352.call(this,f);
case  2 :
return juxt__5353.call(this,f,g);
case  3 :
return juxt__5354.call(this,f,g,h);
default:
return juxt__5355.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__5355.cljs$lang$applyTo;
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
var dorun__5396 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__5399 = cljs.core.next.call(null,coll);
coll = G__5399;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__5397 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____5395 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3822__auto____5395))
{return (n > 0);
} else
{return and__3822__auto____5395;
}
})()))
{{
var G__5400 = (n - 1);
var G__5401 = cljs.core.next.call(null,coll);
n = G__5400;
coll = G__5401;
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
return dorun__5396.call(this,n);
case  2 :
return dorun__5397.call(this,n,coll);
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
var doall__5402 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__5403 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__5402.call(this,n);
case  2 :
return doall__5403.call(this,n,coll);
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
var matches__5405 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__5405),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__5405),1)))
{return cljs.core.first.call(null,matches__5405);
} else
{return cljs.core.vec.call(null,matches__5405);
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
var matches__5406 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__5406)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__5406),1)))
{return cljs.core.first.call(null,matches__5406);
} else
{return cljs.core.vec.call(null,matches__5406);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__5407 = cljs.core.re_find.call(null,re,s);
var match_idx__5408 = s.search(re);
var match_str__5409 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__5407))?cljs.core.first.call(null,match_data__5407):match_data__5407);
var post_match__5410 = cljs.core.subs.call(null,s,(match_idx__5408 + cljs.core.count.call(null,match_str__5409)));

if(cljs.core.truth_(match_data__5407))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__5407,re_seq.call(null,re,post_match__5410));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__5411_SHARP_){
return print_one.call(null,p1__5411_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____5412 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3822__auto____5412))
{var and__3822__auto____5416 = (function (){var x__353__auto____5413 = obj;

if(cljs.core.truth_((function (){var and__3822__auto____5414 = x__353__auto____5413;

if(cljs.core.truth_(and__3822__auto____5414))
{var and__3822__auto____5415 = x__353__auto____5413.cljs$core$IMeta$;

if(cljs.core.truth_(and__3822__auto____5415))
{return cljs.core.not.call(null,x__353__auto____5413.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3822__auto____5415;
}
} else
{return and__3822__auto____5414;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__353__auto____5413);
}
})();

if(cljs.core.truth_(and__3822__auto____5416))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____5416;
}
} else
{return and__3822__auto____5412;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__353__auto____5417 = obj;

if(cljs.core.truth_((function (){var and__3822__auto____5418 = x__353__auto____5417;

if(cljs.core.truth_(and__3822__auto____5418))
{var and__3822__auto____5419 = x__353__auto____5417.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3822__auto____5419))
{return cljs.core.not.call(null,x__353__auto____5417.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3822__auto____5419;
}
} else
{return and__3822__auto____5418;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__353__auto____5417);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__5420 = cljs.core.first.call(null,objs);
var sb__5421 = (new goog.string.StringBuffer());

var G__5422__5423 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__5422__5423))
{var obj__5424 = cljs.core.first.call(null,G__5422__5423);
var G__5422__5425 = G__5422__5423;

while(true){
if(cljs.core.truth_((obj__5424 === first_obj__5420)))
{} else
{sb__5421.append(" ");
}
var G__5426__5427 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__5424,opts));

if(cljs.core.truth_(G__5426__5427))
{var string__5428 = cljs.core.first.call(null,G__5426__5427);
var G__5426__5429 = G__5426__5427;

while(true){
sb__5421.append(string__5428);
var temp__3974__auto____5430 = cljs.core.next.call(null,G__5426__5429);

if(cljs.core.truth_(temp__3974__auto____5430))
{var G__5426__5431 = temp__3974__auto____5430;

{
var G__5434 = cljs.core.first.call(null,G__5426__5431);
var G__5435 = G__5426__5431;
string__5428 = G__5434;
G__5426__5429 = G__5435;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____5432 = cljs.core.next.call(null,G__5422__5425);

if(cljs.core.truth_(temp__3974__auto____5432))
{var G__5422__5433 = temp__3974__auto____5432;

{
var G__5436 = cljs.core.first.call(null,G__5422__5433);
var G__5437 = G__5422__5433;
obj__5424 = G__5436;
G__5422__5425 = G__5437;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__5421);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__5438 = cljs.core.first.call(null,objs);

var G__5439__5440 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__5439__5440))
{var obj__5441 = cljs.core.first.call(null,G__5439__5440);
var G__5439__5442 = G__5439__5440;

while(true){
if(cljs.core.truth_((obj__5441 === first_obj__5438)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__5443__5444 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__5441,opts));

if(cljs.core.truth_(G__5443__5444))
{var string__5445 = cljs.core.first.call(null,G__5443__5444);
var G__5443__5446 = G__5443__5444;

while(true){
cljs.core.string_print.call(null,string__5445);
var temp__3974__auto____5447 = cljs.core.next.call(null,G__5443__5446);

if(cljs.core.truth_(temp__3974__auto____5447))
{var G__5443__5448 = temp__3974__auto____5447;

{
var G__5451 = cljs.core.first.call(null,G__5443__5448);
var G__5452 = G__5443__5448;
string__5445 = G__5451;
G__5443__5446 = G__5452;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____5449 = cljs.core.next.call(null,G__5439__5442);

if(cljs.core.truth_(temp__3974__auto____5449))
{var G__5439__5450 = temp__3974__auto____5449;

{
var G__5453 = cljs.core.first.call(null,G__5439__5450);
var G__5454 = G__5439__5450;
obj__5441 = G__5453;
G__5439__5442 = G__5454;
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
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
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
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
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
pr_str.cljs$lang$applyTo = (function (arglist__5455){
var objs = cljs.core.seq( arglist__5455 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
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
pr.cljs$lang$applyTo = (function (arglist__5456){
var objs = cljs.core.seq( arglist__5456 );;
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
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__5457){
var objs = cljs.core.seq( arglist__5457 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
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
println.cljs$lang$applyTo = (function (arglist__5458){
var objs = cljs.core.seq( arglist__5458 );;
return println__delegate.call(this, objs);
});
return println;
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
prn.cljs$lang$applyTo = (function (arglist__5459){
var objs = cljs.core.seq( arglist__5459 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__5460 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__5460,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3974__auto____5461 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3974__auto____5461))
{var nspc__5462 = temp__3974__auto____5461;

return cljs.core.str.call(null,nspc__5462,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3974__auto____5463 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3974__auto____5463))
{var nspc__5464 = temp__3974__auto____5463;

return cljs.core.str.call(null,nspc__5464,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
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
var pr_pair__5465 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__5465,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__268__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__5466 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__5467 = this;
var G__5468__5469 = cljs.core.seq.call(null,this__5467.watches);

if(cljs.core.truth_(G__5468__5469))
{var G__5471__5473 = cljs.core.first.call(null,G__5468__5469);
var vec__5472__5474 = G__5471__5473;
var key__5475 = cljs.core.nth.call(null,vec__5472__5474,0,null);
var f__5476 = cljs.core.nth.call(null,vec__5472__5474,1,null);
var G__5468__5477 = G__5468__5469;

var G__5471__5478 = G__5471__5473;
var G__5468__5479 = G__5468__5477;

while(true){
var vec__5480__5481 = G__5471__5478;
var key__5482 = cljs.core.nth.call(null,vec__5480__5481,0,null);
var f__5483 = cljs.core.nth.call(null,vec__5480__5481,1,null);
var G__5468__5484 = G__5468__5479;

f__5483.call(null,key__5482,this$,oldval,newval);
var temp__3974__auto____5485 = cljs.core.next.call(null,G__5468__5484);

if(cljs.core.truth_(temp__3974__auto____5485))
{var G__5468__5486 = temp__3974__auto____5485;

{
var G__5493 = cljs.core.first.call(null,G__5468__5486);
var G__5494 = G__5468__5486;
G__5471__5478 = G__5493;
G__5468__5479 = G__5494;
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
var this__5487 = this;
return this$.watches = cljs.core.assoc.call(null,this__5487.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__5488 = this;
return this$.watches = cljs.core.dissoc.call(null,this__5488.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__5489 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__5489.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__5490 = this;
return this__5490.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__5491 = this;
return this__5491.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__5492 = this;
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
var atom__5501 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__5502 = (function() { 
var G__5504__delegate = function (x,p__5495){
var map__5496__5497 = p__5495;
var map__5496__5498 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5496__5497))?cljs.core.apply.call(null,cljs.core.hash_map,map__5496__5497):map__5496__5497);
var validator__5499 = cljs.core.get.call(null,map__5496__5498,"﷐'validator");
var meta__5500 = cljs.core.get.call(null,map__5496__5498,"﷐'meta");

return (new cljs.core.Atom(x,meta__5500,validator__5499,null));
};
var G__5504 = function (x,var_args){
var p__5495 = null;
if (goog.isDef(var_args)) {
  p__5495 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5504__delegate.call(this, x, p__5495);
};
G__5504.cljs$lang$maxFixedArity = 1;
G__5504.cljs$lang$applyTo = (function (arglist__5505){
var x = cljs.core.first(arglist__5505);
var p__5495 = cljs.core.rest(arglist__5505);
return G__5504__delegate.call(this, x, p__5495);
});
return G__5504;
})()
;
atom = function(x,var_args){
var p__5495 = var_args;
switch(arguments.length){
case  1 :
return atom__5501.call(this,x);
default:
return atom__5502.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__5502.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____5506 = a.validator;

if(cljs.core.truth_(temp__3974__auto____5506))
{var validate__5507 = temp__3974__auto____5506;

if(cljs.core.truth_(validate__5507.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__5508 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__5508,new_value);
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
var swap_BANG___5509 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___5510 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___5511 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5512 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___5513 = (function() { 
var G__5515__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__5515 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__5515__delegate.call(this, a, f, x, y, z, more);
};
G__5515.cljs$lang$maxFixedArity = 5;
G__5515.cljs$lang$applyTo = (function (arglist__5516){
var a = cljs.core.first(arglist__5516);
var f = cljs.core.first(cljs.core.next(arglist__5516));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5516)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5516))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5516)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5516)))));
return G__5515__delegate.call(this, a, f, x, y, z, more);
});
return G__5515;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___5509.call(this,a,f);
case  3 :
return swap_BANG___5510.call(this,a,f,x);
case  4 :
return swap_BANG___5511.call(this,a,f,x,y);
case  5 :
return swap_BANG___5512.call(this,a,f,x,y,z);
default:
return swap_BANG___5513.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___5513.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__5517){
var iref = cljs.core.first(arglist__5517);
var f = cljs.core.first(cljs.core.next(arglist__5517));
var args = cljs.core.rest(cljs.core.next(arglist__5517));
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
var gensym__5518 = (function (){
return gensym.call(null,"G__");
});
var gensym__5519 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__5518.call(this);
case  1 :
return gensym__5519.call(this,prefix_string);
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
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__268__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__5521 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__5521.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__5522 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__5522.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__5522.state,this__5522.f);
}
return cljs.core.deref.call(null,this__5522.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__5523){
var body = cljs.core.seq( arglist__5523 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
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
var map__5524__5525 = options;
var map__5524__5526 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5524__5525))?cljs.core.apply.call(null,cljs.core.hash_map,map__5524__5525):map__5524__5525);
var keywordize_keys__5527 = cljs.core.get.call(null,map__5524__5526,"﷐'keywordize-keys");
var keyfn__5528 = (cljs.core.truth_(keywordize_keys__5527)?cljs.core.keyword:cljs.core.str);
var f__5534 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__417__auto____5533 = (function iter__5529(s__5530){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5530__5531 = s__5530;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__5530__5531)))
{var k__5532 = cljs.core.first.call(null,s__5530__5531);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__5528.call(null,k__5532),thisfn.call(null,(x[k__5532]))]),iter__5529.call(null,cljs.core.rest.call(null,s__5530__5531)));
} else
{return null;
}
break;
}
})));
});

return iter__417__auto____5533.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__5534.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__5535){
var x = cljs.core.first(arglist__5535);
var options = cljs.core.rest(arglist__5535);
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
var mem__5536 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__5540__delegate = function (args){
var temp__3971__auto____5537 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__5536),args);

if(cljs.core.truth_(temp__3971__auto____5537))
{var v__5538 = temp__3971__auto____5537;

return v__5538;
} else
{var ret__5539 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__5536,cljs.core.assoc,args,ret__5539);
return ret__5539;
}
};
var G__5540 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5540__delegate.call(this, args);
};
G__5540.cljs$lang$maxFixedArity = 0;
G__5540.cljs$lang$applyTo = (function (arglist__5541){
var args = cljs.core.seq( arglist__5541 );;
return G__5540__delegate.call(this, args);
});
return G__5540;
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
var trampoline__5543 = (function (f){
while(true){
var ret__5542 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__5542)))
{{
var G__5546 = ret__5542;
f = G__5546;
continue;
}
} else
{return ret__5542;
}
break;
}
});
var trampoline__5544 = (function() { 
var G__5547__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__5547 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5547__delegate.call(this, f, args);
};
G__5547.cljs$lang$maxFixedArity = 1;
G__5547.cljs$lang$applyTo = (function (arglist__5548){
var f = cljs.core.first(arglist__5548);
var args = cljs.core.rest(arglist__5548);
return G__5547__delegate.call(this, f, args);
});
return G__5547;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__5543.call(this,f);
default:
return trampoline__5544.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__5544.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__5549 = (function (){
return rand.call(null,1);
});
var rand__5550 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__5549.call(this);
case  1 :
return rand__5550.call(this,n);
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
var k__5552 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__5552,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__5552,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
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
var isa_QMARK___5561 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___5562 = (function (h,child,parent){
var or__3824__auto____5553 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3824__auto____5553))
{return or__3824__auto____5553;
} else
{var or__3824__auto____5554 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3824__auto____5554))
{return or__3824__auto____5554;
} else
{var and__3822__auto____5555 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3822__auto____5555))
{var and__3822__auto____5556 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3822__auto____5556))
{var and__3822__auto____5557 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3822__auto____5557))
{var ret__5558 = true;
var i__5559 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3824__auto____5560 = cljs.core.not.call(null,ret__5558);

if(cljs.core.truth_(or__3824__auto____5560))
{return or__3824__auto____5560;
} else
{return cljs.core._EQ_.call(null,i__5559,cljs.core.count.call(null,parent));
}
})()))
{return ret__5558;
} else
{{
var G__5564 = isa_QMARK_.call(null,h,child.call(null,i__5559),parent.call(null,i__5559));
var G__5565 = (i__5559 + 1);
ret__5558 = G__5564;
i__5559 = G__5565;
continue;
}
}
break;
}
} else
{return and__3822__auto____5557;
}
} else
{return and__3822__auto____5556;
}
} else
{return and__3822__auto____5555;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___5561.call(this,h,child);
case  3 :
return isa_QMARK___5562.call(this,h,child,parent);
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
var parents__5566 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__5567 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__5566.call(this,h);
case  2 :
return parents__5567.call(this,h,tag);
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
var ancestors__5569 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__5570 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__5569.call(this,h);
case  2 :
return ancestors__5570.call(this,h,tag);
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
var descendants__5572 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__5573 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__5572.call(this,h);
case  2 :
return descendants__5573.call(this,h,tag);
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
var derive__5583 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__5584 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__5578 = "﷐'parents".call(null,h);
var td__5579 = "﷐'descendants".call(null,h);
var ta__5580 = "﷐'ancestors".call(null,h);
var tf__5581 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3824__auto____5582 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__5578.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__5580.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__5580.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__5578,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__5581.call(null,"﷐'ancestors".call(null,h),tag,td__5579,parent,ta__5580),"﷐'descendants":tf__5581.call(null,"﷐'descendants".call(null,h),parent,ta__5580,tag,td__5579)});
})());

if(cljs.core.truth_(or__3824__auto____5582))
{return or__3824__auto____5582;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__5583.call(this,h,tag);
case  3 :
return derive__5584.call(this,h,tag,parent);
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
var underive__5590 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__5591 = (function (h,tag,parent){
var parentMap__5586 = "﷐'parents".call(null,h);
var childsParents__5587 = (cljs.core.truth_(parentMap__5586.call(null,tag))?cljs.core.disj.call(null,parentMap__5586.call(null,tag),parent):cljs.core.set([]));
var newParents__5588 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__5587))?cljs.core.assoc.call(null,parentMap__5586,tag,childsParents__5587):cljs.core.dissoc.call(null,parentMap__5586,tag));
var deriv_seq__5589 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__5575_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__5575_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__5575_SHARP_),cljs.core.second.call(null,p1__5575_SHARP_)));
}),cljs.core.seq.call(null,newParents__5588)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__5586.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__5576_SHARP_,p2__5577_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__5576_SHARP_,p2__5577_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__5589));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__5590.call(this,h,tag);
case  3 :
return underive__5591.call(this,h,tag,parent);
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
var xprefs__5593 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3824__auto____5595 = (cljs.core.truth_((function (){var and__3822__auto____5594 = xprefs__5593;

if(cljs.core.truth_(and__3822__auto____5594))
{return xprefs__5593.call(null,y);
} else
{return and__3822__auto____5594;
}
})())?true:null);

if(cljs.core.truth_(or__3824__auto____5595))
{return or__3824__auto____5595;
} else
{var or__3824__auto____5597 = (function (){var ps__5596 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__5596) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__5596),prefer_table)))
{} else
{}
{
var G__5600 = cljs.core.rest.call(null,ps__5596);
ps__5596 = G__5600;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3824__auto____5597))
{return or__3824__auto____5597;
} else
{var or__3824__auto____5599 = (function (){var ps__5598 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__5598) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__5598),y,prefer_table)))
{} else
{}
{
var G__5601 = cljs.core.rest.call(null,ps__5598);
ps__5598 = G__5601;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3824__auto____5599))
{return or__3824__auto____5599;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____5602 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3824__auto____5602))
{return or__3824__auto____5602;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__5611 = cljs.core.reduce.call(null,(function (be,p__5603){
var vec__5604__5605 = p__5603;
var k__5606 = cljs.core.nth.call(null,vec__5604__5605,0,null);
var ___5607 = cljs.core.nth.call(null,vec__5604__5605,1,null);
var e__5608 = vec__5604__5605;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__5606)))
{var be2__5610 = (cljs.core.truth_((function (){var or__3824__auto____5609 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3824__auto____5609))
{return or__3824__auto____5609;
} else
{return cljs.core.dominates.call(null,k__5606,cljs.core.first.call(null,be),prefer_table);
}
})())?e__5608:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__5610),k__5606,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__5606," and ",cljs.core.first.call(null,be2__5610),", and neither is preferred")));
}
return be2__5610;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__5611))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__5611));
return cljs.core.second.call(null,best_entry__5611);
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
if(cljs.core.truth_((function (){var and__3822__auto____5612 = mf;

if(cljs.core.truth_(and__3822__auto____5612))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3822__auto____5612;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3824__auto____5613 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____5613))
{return or__3824__auto____5613;
} else
{var or__3824__auto____5614 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3824__auto____5614))
{return or__3824__auto____5614;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3822__auto____5615 = mf;

if(cljs.core.truth_(and__3822__auto____5615))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3822__auto____5615;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____5616 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____5616))
{return or__3824__auto____5616;
} else
{var or__3824__auto____5617 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3824__auto____5617))
{return or__3824__auto____5617;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3822__auto____5618 = mf;

if(cljs.core.truth_(and__3822__auto____5618))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3822__auto____5618;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____5619 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____5619))
{return or__3824__auto____5619;
} else
{var or__3824__auto____5620 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3824__auto____5620))
{return or__3824__auto____5620;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3822__auto____5621 = mf;

if(cljs.core.truth_(and__3822__auto____5621))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3822__auto____5621;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____5622 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____5622))
{return or__3824__auto____5622;
} else
{var or__3824__auto____5623 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3824__auto____5623))
{return or__3824__auto____5623;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3822__auto____5624 = mf;

if(cljs.core.truth_(and__3822__auto____5624))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3822__auto____5624;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____5625 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____5625))
{return or__3824__auto____5625;
} else
{var or__3824__auto____5626 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3824__auto____5626))
{return or__3824__auto____5626;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3822__auto____5627 = mf;

if(cljs.core.truth_(and__3822__auto____5627))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3822__auto____5627;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3824__auto____5628 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____5628))
{return or__3824__auto____5628;
} else
{var or__3824__auto____5629 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3824__auto____5629))
{return or__3824__auto____5629;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3822__auto____5630 = mf;

if(cljs.core.truth_(and__3822__auto____5630))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3822__auto____5630;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3824__auto____5631 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____5631))
{return or__3824__auto____5631;
} else
{var or__3824__auto____5632 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3824__auto____5632))
{return or__3824__auto____5632;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3822__auto____5633 = mf;

if(cljs.core.truth_(and__3822__auto____5633))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3822__auto____5633;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3824__auto____5634 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____5634))
{return or__3824__auto____5634;
} else
{var or__3824__auto____5635 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3824__auto____5635))
{return or__3824__auto____5635;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__5636 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__5637 = cljs.core._get_method.call(null,mf,dispatch_val__5636);

if(cljs.core.truth_(target_fn__5637))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__5636)));
}
return cljs.core.apply.call(null,target_fn__5637,args);
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
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__268__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__5638 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__5639 = this;
cljs.core.swap_BANG_.call(null,this__5639.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__5639.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__5639.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__5639.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__5640 = this;
cljs.core.swap_BANG_.call(null,this__5640.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__5640.method_cache,this__5640.method_table,this__5640.cached_hierarchy,this__5640.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__5641 = this;
cljs.core.swap_BANG_.call(null,this__5641.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__5641.method_cache,this__5641.method_table,this__5641.cached_hierarchy,this__5641.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__5642 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__5642.cached_hierarchy),cljs.core.deref.call(null,this__5642.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__5642.method_cache,this__5642.method_table,this__5642.cached_hierarchy,this__5642.hierarchy);
}
var temp__3971__auto____5643 = cljs.core.deref.call(null,this__5642.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3971__auto____5643))
{var target_fn__5644 = temp__3971__auto____5643;

return target_fn__5644;
} else
{var temp__3971__auto____5645 = cljs.core.find_and_cache_best_method.call(null,this__5642.name,dispatch_val,this__5642.hierarchy,this__5642.method_table,this__5642.prefer_table,this__5642.method_cache,this__5642.cached_hierarchy);

if(cljs.core.truth_(temp__3971__auto____5645))
{var target_fn__5646 = temp__3971__auto____5645;

return target_fn__5646;
} else
{return cljs.core.deref.call(null,this__5642.method_table).call(null,this__5642.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__5647 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__5647.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__5647.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__5647.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__5647.method_cache,this__5647.method_table,this__5647.cached_hierarchy,this__5647.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__5648 = this;
return cljs.core.deref.call(null,this__5648.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__5649 = this;
return cljs.core.deref.call(null,this__5649.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__5650 = this;
return cljs.core.do_dispatch.call(null,mf,this__5650.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__5651__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__5651 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5651__delegate.call(this, _, args);
};
G__5651.cljs$lang$maxFixedArity = 1;
G__5651.cljs$lang$applyTo = (function (arglist__5652){
var _ = cljs.core.first(arglist__5652);
var args = cljs.core.rest(arglist__5652);
return G__5651__delegate.call(this, _, args);
});
return G__5651;
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
