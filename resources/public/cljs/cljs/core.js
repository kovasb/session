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
var or__3824__auto____50194 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3824__auto____50194))
{return or__3824__auto____50194;
} else
{var or__3824__auto____50195 = (p["_"]);

if(cljs.core.truth_(or__3824__auto____50195))
{return or__3824__auto____50195;
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
var _invoke__50259 = (function (this$){
if(cljs.core.truth_((function (){var and__3822__auto____50196 = this$;

if(cljs.core.truth_(and__3822__auto____50196))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50196;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3824__auto____50197 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50197))
{return or__3824__auto____50197;
} else
{var or__3824__auto____50198 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50198))
{return or__3824__auto____50198;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__50260 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3822__auto____50199 = this$;

if(cljs.core.truth_(and__3822__auto____50199))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50199;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3824__auto____50200 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50200))
{return or__3824__auto____50200;
} else
{var or__3824__auto____50201 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50201))
{return or__3824__auto____50201;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__50261 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3822__auto____50202 = this$;

if(cljs.core.truth_(and__3822__auto____50202))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50202;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3824__auto____50203 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50203))
{return or__3824__auto____50203;
} else
{var or__3824__auto____50204 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50204))
{return or__3824__auto____50204;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__50262 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3822__auto____50205 = this$;

if(cljs.core.truth_(and__3822__auto____50205))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50205;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3824__auto____50206 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50206))
{return or__3824__auto____50206;
} else
{var or__3824__auto____50207 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50207))
{return or__3824__auto____50207;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__50263 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3822__auto____50208 = this$;

if(cljs.core.truth_(and__3822__auto____50208))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50208;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____50209 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50209))
{return or__3824__auto____50209;
} else
{var or__3824__auto____50210 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50210))
{return or__3824__auto____50210;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__50264 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3822__auto____50211 = this$;

if(cljs.core.truth_(and__3822__auto____50211))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50211;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____50212 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50212))
{return or__3824__auto____50212;
} else
{var or__3824__auto____50213 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50213))
{return or__3824__auto____50213;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__50265 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3822__auto____50214 = this$;

if(cljs.core.truth_(and__3822__auto____50214))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50214;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____50215 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50215))
{return or__3824__auto____50215;
} else
{var or__3824__auto____50216 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50216))
{return or__3824__auto____50216;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__50266 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3822__auto____50217 = this$;

if(cljs.core.truth_(and__3822__auto____50217))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50217;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____50218 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50218))
{return or__3824__auto____50218;
} else
{var or__3824__auto____50219 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50219))
{return or__3824__auto____50219;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__50267 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3822__auto____50220 = this$;

if(cljs.core.truth_(and__3822__auto____50220))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50220;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____50221 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50221))
{return or__3824__auto____50221;
} else
{var or__3824__auto____50222 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50222))
{return or__3824__auto____50222;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__50268 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3822__auto____50223 = this$;

if(cljs.core.truth_(and__3822__auto____50223))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50223;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____50224 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50224))
{return or__3824__auto____50224;
} else
{var or__3824__auto____50225 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50225))
{return or__3824__auto____50225;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__50269 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3822__auto____50226 = this$;

if(cljs.core.truth_(and__3822__auto____50226))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50226;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____50227 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50227))
{return or__3824__auto____50227;
} else
{var or__3824__auto____50228 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50228))
{return or__3824__auto____50228;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__50270 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3822__auto____50229 = this$;

if(cljs.core.truth_(and__3822__auto____50229))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50229;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____50230 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50230))
{return or__3824__auto____50230;
} else
{var or__3824__auto____50231 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50231))
{return or__3824__auto____50231;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__50271 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3822__auto____50232 = this$;

if(cljs.core.truth_(and__3822__auto____50232))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50232;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____50233 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50233))
{return or__3824__auto____50233;
} else
{var or__3824__auto____50234 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50234))
{return or__3824__auto____50234;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__50272 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3822__auto____50235 = this$;

if(cljs.core.truth_(and__3822__auto____50235))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50235;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____50236 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50236))
{return or__3824__auto____50236;
} else
{var or__3824__auto____50237 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50237))
{return or__3824__auto____50237;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__50273 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3822__auto____50238 = this$;

if(cljs.core.truth_(and__3822__auto____50238))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50238;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____50239 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50239))
{return or__3824__auto____50239;
} else
{var or__3824__auto____50240 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50240))
{return or__3824__auto____50240;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__50274 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3822__auto____50241 = this$;

if(cljs.core.truth_(and__3822__auto____50241))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50241;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____50242 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50242))
{return or__3824__auto____50242;
} else
{var or__3824__auto____50243 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50243))
{return or__3824__auto____50243;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__50275 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3822__auto____50244 = this$;

if(cljs.core.truth_(and__3822__auto____50244))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50244;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____50245 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50245))
{return or__3824__auto____50245;
} else
{var or__3824__auto____50246 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50246))
{return or__3824__auto____50246;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__50276 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3822__auto____50247 = this$;

if(cljs.core.truth_(and__3822__auto____50247))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50247;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____50248 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50248))
{return or__3824__auto____50248;
} else
{var or__3824__auto____50249 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50249))
{return or__3824__auto____50249;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__50277 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3822__auto____50250 = this$;

if(cljs.core.truth_(and__3822__auto____50250))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50250;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____50251 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50251))
{return or__3824__auto____50251;
} else
{var or__3824__auto____50252 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50252))
{return or__3824__auto____50252;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__50278 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3822__auto____50253 = this$;

if(cljs.core.truth_(and__3822__auto____50253))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50253;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____50254 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50254))
{return or__3824__auto____50254;
} else
{var or__3824__auto____50255 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50255))
{return or__3824__auto____50255;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__50279 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3822__auto____50256 = this$;

if(cljs.core.truth_(and__3822__auto____50256))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3822__auto____50256;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____50257 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50257))
{return or__3824__auto____50257;
} else
{var or__3824__auto____50258 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3824__auto____50258))
{return or__3824__auto____50258;
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
return _invoke__50259.call(this,this$);
case  2 :
return _invoke__50260.call(this,this$,a);
case  3 :
return _invoke__50261.call(this,this$,a,b);
case  4 :
return _invoke__50262.call(this,this$,a,b,c);
case  5 :
return _invoke__50263.call(this,this$,a,b,c,d);
case  6 :
return _invoke__50264.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__50265.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__50266.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__50267.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__50268.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__50269.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__50270.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__50271.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__50272.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__50273.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__50274.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__50275.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__50276.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__50277.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__50278.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__50279.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3822__auto____50281 = coll;

if(cljs.core.truth_(and__3822__auto____50281))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3822__auto____50281;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3824__auto____50282 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____50282))
{return or__3824__auto____50282;
} else
{var or__3824__auto____50283 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3824__auto____50283))
{return or__3824__auto____50283;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3822__auto____50284 = coll;

if(cljs.core.truth_(and__3822__auto____50284))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3822__auto____50284;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3824__auto____50285 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____50285))
{return or__3824__auto____50285;
} else
{var or__3824__auto____50286 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3824__auto____50286))
{return or__3824__auto____50286;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3822__auto____50287 = coll;

if(cljs.core.truth_(and__3822__auto____50287))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3822__auto____50287;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3824__auto____50288 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____50288))
{return or__3824__auto____50288;
} else
{var or__3824__auto____50289 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3824__auto____50289))
{return or__3824__auto____50289;
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
var _nth__50296 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3822__auto____50290 = coll;

if(cljs.core.truth_(and__3822__auto____50290))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3822__auto____50290;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3824__auto____50291 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____50291))
{return or__3824__auto____50291;
} else
{var or__3824__auto____50292 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3824__auto____50292))
{return or__3824__auto____50292;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__50297 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3822__auto____50293 = coll;

if(cljs.core.truth_(and__3822__auto____50293))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3822__auto____50293;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3824__auto____50294 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____50294))
{return or__3824__auto____50294;
} else
{var or__3824__auto____50295 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3824__auto____50295))
{return or__3824__auto____50295;
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
return _nth__50296.call(this,coll,n);
case  3 :
return _nth__50297.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3822__auto____50299 = coll;

if(cljs.core.truth_(and__3822__auto____50299))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3822__auto____50299;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3824__auto____50300 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____50300))
{return or__3824__auto____50300;
} else
{var or__3824__auto____50301 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3824__auto____50301))
{return or__3824__auto____50301;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3822__auto____50302 = coll;

if(cljs.core.truth_(and__3822__auto____50302))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3822__auto____50302;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3824__auto____50303 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____50303))
{return or__3824__auto____50303;
} else
{var or__3824__auto____50304 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3824__auto____50304))
{return or__3824__auto____50304;
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
var _lookup__50311 = (function (o,k){
if(cljs.core.truth_((function (){var and__3822__auto____50305 = o;

if(cljs.core.truth_(and__3822__auto____50305))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3822__auto____50305;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3824__auto____50306 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____50306))
{return or__3824__auto____50306;
} else
{var or__3824__auto____50307 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3824__auto____50307))
{return or__3824__auto____50307;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__50312 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3822__auto____50308 = o;

if(cljs.core.truth_(and__3822__auto____50308))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3822__auto____50308;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3824__auto____50309 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____50309))
{return or__3824__auto____50309;
} else
{var or__3824__auto____50310 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3824__auto____50310))
{return or__3824__auto____50310;
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
return _lookup__50311.call(this,o,k);
case  3 :
return _lookup__50312.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____50314 = coll;

if(cljs.core.truth_(and__3822__auto____50314))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3822__auto____50314;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3824__auto____50315 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____50315))
{return or__3824__auto____50315;
} else
{var or__3824__auto____50316 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3824__auto____50316))
{return or__3824__auto____50316;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3822__auto____50317 = coll;

if(cljs.core.truth_(and__3822__auto____50317))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3822__auto____50317;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3824__auto____50318 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____50318))
{return or__3824__auto____50318;
} else
{var or__3824__auto____50319 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3824__auto____50319))
{return or__3824__auto____50319;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____50320 = coll;

if(cljs.core.truth_(and__3822__auto____50320))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3822__auto____50320;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3824__auto____50321 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____50321))
{return or__3824__auto____50321;
} else
{var or__3824__auto____50322 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3824__auto____50322))
{return or__3824__auto____50322;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3822__auto____50323 = coll;

if(cljs.core.truth_(and__3822__auto____50323))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3822__auto____50323;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3824__auto____50324 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____50324))
{return or__3824__auto____50324;
} else
{var or__3824__auto____50325 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3824__auto____50325))
{return or__3824__auto____50325;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3822__auto____50326 = coll;

if(cljs.core.truth_(and__3822__auto____50326))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3822__auto____50326;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3824__auto____50327 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____50327))
{return or__3824__auto____50327;
} else
{var or__3824__auto____50328 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3824__auto____50328))
{return or__3824__auto____50328;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3822__auto____50329 = coll;

if(cljs.core.truth_(and__3822__auto____50329))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3822__auto____50329;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3824__auto____50330 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____50330))
{return or__3824__auto____50330;
} else
{var or__3824__auto____50331 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3824__auto____50331))
{return or__3824__auto____50331;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3822__auto____50332 = coll;

if(cljs.core.truth_(and__3822__auto____50332))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3822__auto____50332;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3824__auto____50333 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____50333))
{return or__3824__auto____50333;
} else
{var or__3824__auto____50334 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3824__auto____50334))
{return or__3824__auto____50334;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3822__auto____50335 = o;

if(cljs.core.truth_(and__3822__auto____50335))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3822__auto____50335;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3824__auto____50336 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____50336))
{return or__3824__auto____50336;
} else
{var or__3824__auto____50337 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3824__auto____50337))
{return or__3824__auto____50337;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3822__auto____50338 = o;

if(cljs.core.truth_(and__3822__auto____50338))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3822__auto____50338;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____50339 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____50339))
{return or__3824__auto____50339;
} else
{var or__3824__auto____50340 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3824__auto____50340))
{return or__3824__auto____50340;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3822__auto____50341 = o;

if(cljs.core.truth_(and__3822__auto____50341))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3822__auto____50341;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3824__auto____50342 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____50342))
{return or__3824__auto____50342;
} else
{var or__3824__auto____50343 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3824__auto____50343))
{return or__3824__auto____50343;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3822__auto____50344 = o;

if(cljs.core.truth_(and__3822__auto____50344))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3822__auto____50344;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3824__auto____50345 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____50345))
{return or__3824__auto____50345;
} else
{var or__3824__auto____50346 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3824__auto____50346))
{return or__3824__auto____50346;
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
var _reduce__50353 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3822__auto____50347 = coll;

if(cljs.core.truth_(and__3822__auto____50347))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3822__auto____50347;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3824__auto____50348 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____50348))
{return or__3824__auto____50348;
} else
{var or__3824__auto____50349 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3824__auto____50349))
{return or__3824__auto____50349;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__50354 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3822__auto____50350 = coll;

if(cljs.core.truth_(and__3822__auto____50350))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3822__auto____50350;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3824__auto____50351 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3824__auto____50351))
{return or__3824__auto____50351;
} else
{var or__3824__auto____50352 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3824__auto____50352))
{return or__3824__auto____50352;
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
return _reduce__50353.call(this,coll,f);
case  3 :
return _reduce__50354.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3822__auto____50356 = o;

if(cljs.core.truth_(and__3822__auto____50356))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3822__auto____50356;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3824__auto____50357 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____50357))
{return or__3824__auto____50357;
} else
{var or__3824__auto____50358 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3824__auto____50358))
{return or__3824__auto____50358;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3822__auto____50359 = o;

if(cljs.core.truth_(and__3822__auto____50359))
{return o.cljs$core$IHash$_hash;
} else
{return and__3822__auto____50359;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3824__auto____50360 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____50360))
{return or__3824__auto____50360;
} else
{var or__3824__auto____50361 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3824__auto____50361))
{return or__3824__auto____50361;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3822__auto____50362 = o;

if(cljs.core.truth_(and__3822__auto____50362))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3822__auto____50362;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3824__auto____50363 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____50363))
{return or__3824__auto____50363;
} else
{var or__3824__auto____50364 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3824__auto____50364))
{return or__3824__auto____50364;
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
if(cljs.core.truth_((function (){var and__3822__auto____50365 = o;

if(cljs.core.truth_(and__3822__auto____50365))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3822__auto____50365;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3824__auto____50366 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3824__auto____50366))
{return or__3824__auto____50366;
} else
{var or__3824__auto____50367 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3824__auto____50367))
{return or__3824__auto____50367;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3822__auto____50368 = d;

if(cljs.core.truth_(and__3822__auto____50368))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3822__auto____50368;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3824__auto____50369 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3824__auto____50369))
{return or__3824__auto____50369;
} else
{var or__3824__auto____50370 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3824__auto____50370))
{return or__3824__auto____50370;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3822__auto____50371 = this$;

if(cljs.core.truth_(and__3822__auto____50371))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3822__auto____50371;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____50372 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50372))
{return or__3824__auto____50372;
} else
{var or__3824__auto____50373 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3824__auto____50373))
{return or__3824__auto____50373;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3822__auto____50374 = this$;

if(cljs.core.truth_(and__3822__auto____50374))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3822__auto____50374;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3824__auto____50375 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50375))
{return or__3824__auto____50375;
} else
{var or__3824__auto____50376 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3824__auto____50376))
{return or__3824__auto____50376;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3822__auto____50377 = this$;

if(cljs.core.truth_(and__3822__auto____50377))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3822__auto____50377;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3824__auto____50378 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3824__auto____50378))
{return or__3824__auto____50378;
} else
{var or__3824__auto____50379 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3824__auto____50379))
{return or__3824__auto____50379;
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
var G__50380 = null;
var G__50380__50381 = (function (o,k){
return null;
});
var G__50380__50382 = (function (o,k,not_found){
return not_found;
});
G__50380 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__50380__50381.call(this,o,k);
case  3 :
return G__50380__50382.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__50380;
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
var G__50384 = null;
var G__50384__50385 = (function (_,f){
return f.call(null);
});
var G__50384__50386 = (function (_,f,start){
return start;
});
G__50384 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__50384__50385.call(this,_,f);
case  3 :
return G__50384__50386.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__50384;
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
var G__50388 = null;
var G__50388__50389 = (function (_,n){
return null;
});
var G__50388__50390 = (function (_,n,not_found){
return not_found;
});
G__50388 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__50388__50389.call(this,_,n);
case  3 :
return G__50388__50390.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__50388;
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
var ci_reduce__50398 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__50392 = cljs.core._nth.call(null,cicoll,0);
var n__50393 = 1;

while(true){
if(cljs.core.truth_((n__50393 < cljs.core._count.call(null,cicoll))))
{{
var G__50402 = f.call(null,val__50392,cljs.core._nth.call(null,cicoll,n__50393));
var G__50403 = (n__50393 + 1);
val__50392 = G__50402;
n__50393 = G__50403;
continue;
}
} else
{return val__50392;
}
break;
}
}
});
var ci_reduce__50399 = (function (cicoll,f,val){
var val__50394 = val;
var n__50395 = 0;

while(true){
if(cljs.core.truth_((n__50395 < cljs.core._count.call(null,cicoll))))
{{
var G__50404 = f.call(null,val__50394,cljs.core._nth.call(null,cicoll,n__50395));
var G__50405 = (n__50395 + 1);
val__50394 = G__50404;
n__50395 = G__50405;
continue;
}
} else
{return val__50394;
}
break;
}
});
var ci_reduce__50400 = (function (cicoll,f,val,idx){
var val__50396 = val;
var n__50397 = idx;

while(true){
if(cljs.core.truth_((n__50397 < cljs.core._count.call(null,cicoll))))
{{
var G__50406 = f.call(null,val__50396,cljs.core._nth.call(null,cicoll,n__50397));
var G__50407 = (n__50397 + 1);
val__50396 = G__50406;
n__50397 = G__50407;
continue;
}
} else
{return val__50396;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__50398.call(this,cicoll,f);
case  3 :
return ci_reduce__50399.call(this,cicoll,f,val);
case  4 :
return ci_reduce__50400.call(this,cicoll,f,val,idx);
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
var this__50408 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__50421 = null;
var G__50421__50422 = (function (_,f){
var this__50409 = this;
return cljs.core.ci_reduce.call(null,this__50409.a,f,(this__50409.a[this__50409.i]),(this__50409.i + 1));
});
var G__50421__50423 = (function (_,f,start){
var this__50410 = this;
return cljs.core.ci_reduce.call(null,this__50410.a,f,start,this__50410.i);
});
G__50421 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__50421__50422.call(this,_,f);
case  3 :
return G__50421__50423.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__50421;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__50411 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__50412 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__50425 = null;
var G__50425__50426 = (function (coll,n){
var this__50413 = this;
var i__50414 = (n + this__50413.i);

if(cljs.core.truth_((i__50414 < this__50413.a.length)))
{return (this__50413.a[i__50414]);
} else
{return null;
}
});
var G__50425__50427 = (function (coll,n,not_found){
var this__50415 = this;
var i__50416 = (n + this__50415.i);

if(cljs.core.truth_((i__50416 < this__50415.a.length)))
{return (this__50415.a[i__50416]);
} else
{return not_found;
}
});
G__50425 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__50425__50426.call(this,coll,n);
case  3 :
return G__50425__50427.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__50425;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__50417 = this;
return (this__50417.a.length - this__50417.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__50418 = this;
return (this__50418.a[this__50418.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__50419 = this;
if(cljs.core.truth_(((this__50419.i + 1) < this__50419.a.length)))
{return (new cljs.core.IndexedSeq(this__50419.a,(this__50419.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__50420 = this;
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
var G__50429 = null;
var G__50429__50430 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__50429__50431 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__50429 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__50429__50430.call(this,array,f);
case  3 :
return G__50429__50431.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__50429;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__50433 = null;
var G__50433__50434 = (function (array,k){
return (array[k]);
});
var G__50433__50435 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__50433 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__50433__50434.call(this,array,k);
case  3 :
return G__50433__50435.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__50433;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__50437 = null;
var G__50437__50438 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__50437__50439 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__50437 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__50437__50438.call(this,array,n);
case  3 :
return G__50437__50439.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__50437;
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
var temp__3974__auto____50441 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____50441))
{var s__50442 = temp__3974__auto____50441;

return cljs.core._first.call(null,s__50442);
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
var G__50443 = cljs.core.next.call(null,s);
s = G__50443;
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
var s__50444 = cljs.core.seq.call(null,x);
var n__50445 = 0;

while(true){
if(cljs.core.truth_(s__50444))
{{
var G__50446 = cljs.core.next.call(null,s__50444);
var G__50447 = (n__50445 + 1);
s__50444 = G__50446;
n__50445 = G__50447;
continue;
}
} else
{return n__50445;
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
var conj__50448 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__50449 = (function() { 
var G__50451__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__50452 = conj.call(null,coll,x);
var G__50453 = cljs.core.first.call(null,xs);
var G__50454 = cljs.core.next.call(null,xs);
coll = G__50452;
x = G__50453;
xs = G__50454;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__50451 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__50451__delegate.call(this, coll, x, xs);
};
G__50451.cljs$lang$maxFixedArity = 2;
G__50451.cljs$lang$applyTo = (function (arglist__50455){
var coll = cljs.core.first(arglist__50455);
var x = cljs.core.first(cljs.core.next(arglist__50455));
var xs = cljs.core.rest(cljs.core.next(arglist__50455));
return G__50451__delegate.call(this, coll, x, xs);
});
return G__50451;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__50448.call(this,coll,x);
default:
return conj__50449.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__50449.cljs$lang$applyTo;
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
var nth__50456 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__50457 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__50456.call(this,coll,n);
case  3 :
return nth__50457.call(this,coll,n,not_found);
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
var get__50459 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__50460 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__50459.call(this,o,k);
case  3 :
return get__50460.call(this,o,k,not_found);
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
var assoc__50463 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__50464 = (function() { 
var G__50466__delegate = function (coll,k,v,kvs){
while(true){
var ret__50462 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__50467 = ret__50462;
var G__50468 = cljs.core.first.call(null,kvs);
var G__50469 = cljs.core.second.call(null,kvs);
var G__50470 = cljs.core.nnext.call(null,kvs);
coll = G__50467;
k = G__50468;
v = G__50469;
kvs = G__50470;
continue;
}
} else
{return ret__50462;
}
break;
}
};
var G__50466 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__50466__delegate.call(this, coll, k, v, kvs);
};
G__50466.cljs$lang$maxFixedArity = 3;
G__50466.cljs$lang$applyTo = (function (arglist__50471){
var coll = cljs.core.first(arglist__50471);
var k = cljs.core.first(cljs.core.next(arglist__50471));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__50471)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__50471)));
return G__50466__delegate.call(this, coll, k, v, kvs);
});
return G__50466;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__50463.call(this,coll,k,v);
default:
return assoc__50464.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__50464.cljs$lang$applyTo;
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
var dissoc__50473 = (function (coll){
return coll;
});
var dissoc__50474 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__50475 = (function() { 
var G__50477__delegate = function (coll,k,ks){
while(true){
var ret__50472 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__50478 = ret__50472;
var G__50479 = cljs.core.first.call(null,ks);
var G__50480 = cljs.core.next.call(null,ks);
coll = G__50478;
k = G__50479;
ks = G__50480;
continue;
}
} else
{return ret__50472;
}
break;
}
};
var G__50477 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__50477__delegate.call(this, coll, k, ks);
};
G__50477.cljs$lang$maxFixedArity = 2;
G__50477.cljs$lang$applyTo = (function (arglist__50481){
var coll = cljs.core.first(arglist__50481);
var k = cljs.core.first(cljs.core.next(arglist__50481));
var ks = cljs.core.rest(cljs.core.next(arglist__50481));
return G__50477__delegate.call(this, coll, k, ks);
});
return G__50477;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__50473.call(this,coll);
case  2 :
return dissoc__50474.call(this,coll,k);
default:
return dissoc__50475.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__50475.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____50482 = o;

if(cljs.core.truth_((function (){var and__3822__auto____50483 = x__451__auto____50482;

if(cljs.core.truth_(and__3822__auto____50483))
{var and__3822__auto____50484 = x__451__auto____50482.cljs$core$IMeta$;

if(cljs.core.truth_(and__3822__auto____50484))
{return cljs.core.not.call(null,x__451__auto____50482.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3822__auto____50484;
}
} else
{return and__3822__auto____50483;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____50482);
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
var disj__50486 = (function (coll){
return coll;
});
var disj__50487 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__50488 = (function() { 
var G__50490__delegate = function (coll,k,ks){
while(true){
var ret__50485 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__50491 = ret__50485;
var G__50492 = cljs.core.first.call(null,ks);
var G__50493 = cljs.core.next.call(null,ks);
coll = G__50491;
k = G__50492;
ks = G__50493;
continue;
}
} else
{return ret__50485;
}
break;
}
};
var G__50490 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__50490__delegate.call(this, coll, k, ks);
};
G__50490.cljs$lang$maxFixedArity = 2;
G__50490.cljs$lang$applyTo = (function (arglist__50494){
var coll = cljs.core.first(arglist__50494);
var k = cljs.core.first(cljs.core.next(arglist__50494));
var ks = cljs.core.rest(cljs.core.next(arglist__50494));
return G__50490__delegate.call(this, coll, k, ks);
});
return G__50490;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__50486.call(this,coll);
case  2 :
return disj__50487.call(this,coll,k);
default:
return disj__50488.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__50488.cljs$lang$applyTo;
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
{var x__451__auto____50495 = x;

if(cljs.core.truth_((function (){var and__3822__auto____50496 = x__451__auto____50495;

if(cljs.core.truth_(and__3822__auto____50496))
{var and__3822__auto____50497 = x__451__auto____50495.cljs$core$ICollection$;

if(cljs.core.truth_(and__3822__auto____50497))
{return cljs.core.not.call(null,x__451__auto____50495.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3822__auto____50497;
}
} else
{return and__3822__auto____50496;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____50495);
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
{var x__451__auto____50498 = x;

if(cljs.core.truth_((function (){var and__3822__auto____50499 = x__451__auto____50498;

if(cljs.core.truth_(and__3822__auto____50499))
{var and__3822__auto____50500 = x__451__auto____50498.cljs$core$ISet$;

if(cljs.core.truth_(and__3822__auto____50500))
{return cljs.core.not.call(null,x__451__auto____50498.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3822__auto____50500;
}
} else
{return and__3822__auto____50499;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____50498);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____50501 = x;

if(cljs.core.truth_((function (){var and__3822__auto____50502 = x__451__auto____50501;

if(cljs.core.truth_(and__3822__auto____50502))
{var and__3822__auto____50503 = x__451__auto____50501.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3822__auto____50503))
{return cljs.core.not.call(null,x__451__auto____50501.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3822__auto____50503;
}
} else
{return and__3822__auto____50502;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____50501);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____50504 = x;

if(cljs.core.truth_((function (){var and__3822__auto____50505 = x__451__auto____50504;

if(cljs.core.truth_(and__3822__auto____50505))
{var and__3822__auto____50506 = x__451__auto____50504.cljs$core$ISequential$;

if(cljs.core.truth_(and__3822__auto____50506))
{return cljs.core.not.call(null,x__451__auto____50504.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3822__auto____50506;
}
} else
{return and__3822__auto____50505;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____50504);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____50507 = x;

if(cljs.core.truth_((function (){var and__3822__auto____50508 = x__451__auto____50507;

if(cljs.core.truth_(and__3822__auto____50508))
{var and__3822__auto____50509 = x__451__auto____50507.cljs$core$ICounted$;

if(cljs.core.truth_(and__3822__auto____50509))
{return cljs.core.not.call(null,x__451__auto____50507.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3822__auto____50509;
}
} else
{return and__3822__auto____50508;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____50507);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____50510 = x;

if(cljs.core.truth_((function (){var and__3822__auto____50511 = x__451__auto____50510;

if(cljs.core.truth_(and__3822__auto____50511))
{var and__3822__auto____50512 = x__451__auto____50510.cljs$core$IMap$;

if(cljs.core.truth_(and__3822__auto____50512))
{return cljs.core.not.call(null,x__451__auto____50510.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3822__auto____50512;
}
} else
{return and__3822__auto____50511;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____50510);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____50513 = x;

if(cljs.core.truth_((function (){var and__3822__auto____50514 = x__451__auto____50513;

if(cljs.core.truth_(and__3822__auto____50514))
{var and__3822__auto____50515 = x__451__auto____50513.cljs$core$IVector$;

if(cljs.core.truth_(and__3822__auto____50515))
{return cljs.core.not.call(null,x__451__auto____50513.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3822__auto____50515;
}
} else
{return and__3822__auto____50514;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____50513);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__50516 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__50516.push(key);
}));
return keys__50516;
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
{var x__451__auto____50517 = s;

if(cljs.core.truth_((function (){var and__3822__auto____50518 = x__451__auto____50517;

if(cljs.core.truth_(and__3822__auto____50518))
{var and__3822__auto____50519 = x__451__auto____50517.cljs$core$ISeq$;

if(cljs.core.truth_(and__3822__auto____50519))
{return cljs.core.not.call(null,x__451__auto____50517.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3822__auto____50519;
}
} else
{return and__3822__auto____50518;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____50517);
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
var and__3822__auto____50520 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3822__auto____50520))
{return cljs.core.not.call(null,(function (){var or__3824__auto____50521 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3824__auto____50521))
{return or__3824__auto____50521;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3822__auto____50520;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____50522 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3822__auto____50522))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3822__auto____50522;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____50523 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3822__auto____50523))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3822__auto____50523;
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
var and__3822__auto____50524 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3822__auto____50524))
{return (n == n.toFixed());
} else
{return and__3822__auto____50524;
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
if(cljs.core.truth_((function (){var and__3822__auto____50525 = coll;

if(cljs.core.truth_(and__3822__auto____50525))
{var and__3822__auto____50526 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3822__auto____50526))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____50526;
}
} else
{return and__3822__auto____50525;
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
var distinct_QMARK___50531 = (function (x){
return true;
});
var distinct_QMARK___50532 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___50533 = (function() { 
var G__50535__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__50527 = cljs.core.set([y,x]);
var xs__50528 = more;

while(true){
var x__50529 = cljs.core.first.call(null,xs__50528);
var etc__50530 = cljs.core.next.call(null,xs__50528);

if(cljs.core.truth_(xs__50528))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__50527,x__50529)))
{return false;
} else
{{
var G__50536 = cljs.core.conj.call(null,s__50527,x__50529);
var G__50537 = etc__50530;
s__50527 = G__50536;
xs__50528 = G__50537;
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
var G__50535 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__50535__delegate.call(this, x, y, more);
};
G__50535.cljs$lang$maxFixedArity = 2;
G__50535.cljs$lang$applyTo = (function (arglist__50538){
var x = cljs.core.first(arglist__50538);
var y = cljs.core.first(cljs.core.next(arglist__50538));
var more = cljs.core.rest(cljs.core.next(arglist__50538));
return G__50535__delegate.call(this, x, y, more);
});
return G__50535;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___50531.call(this,x);
case  2 :
return distinct_QMARK___50532.call(this,x,y);
default:
return distinct_QMARK___50533.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___50533.cljs$lang$applyTo;
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
var r__50539 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__50539)))
{return r__50539;
} else
{if(cljs.core.truth_(r__50539))
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
var sort__50541 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__50542 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__50540 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__50540,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__50540);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__50541.call(this,comp);
case  2 :
return sort__50542.call(this,comp,coll);
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
var sort_by__50544 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__50545 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__50544.call(this,keyfn,comp);
case  3 :
return sort_by__50545.call(this,keyfn,comp,coll);
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
var reduce__50547 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__50548 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__50547.call(this,f,val);
case  3 :
return reduce__50548.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__50554 = (function (f,coll){
var temp__3971__auto____50550 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3971__auto____50550))
{var s__50551 = temp__3971__auto____50550;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__50551),cljs.core.next.call(null,s__50551));
} else
{return f.call(null);
}
});
var seq_reduce__50555 = (function (f,val,coll){
var val__50552 = val;
var coll__50553 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__50553))
{{
var G__50557 = f.call(null,val__50552,cljs.core.first.call(null,coll__50553));
var G__50558 = cljs.core.next.call(null,coll__50553);
val__50552 = G__50557;
coll__50553 = G__50558;
continue;
}
} else
{return val__50552;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__50554.call(this,f,val);
case  3 :
return seq_reduce__50555.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__50559 = null;
var G__50559__50560 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__50559__50561 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__50559 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__50559__50560.call(this,coll,f);
case  3 :
return G__50559__50561.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__50559;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___50563 = (function (){
return 0;
});
var _PLUS___50564 = (function (x){
return x;
});
var _PLUS___50565 = (function (x,y){
return (x + y);
});
var _PLUS___50566 = (function() { 
var G__50568__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__50568 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__50568__delegate.call(this, x, y, more);
};
G__50568.cljs$lang$maxFixedArity = 2;
G__50568.cljs$lang$applyTo = (function (arglist__50569){
var x = cljs.core.first(arglist__50569);
var y = cljs.core.first(cljs.core.next(arglist__50569));
var more = cljs.core.rest(cljs.core.next(arglist__50569));
return G__50568__delegate.call(this, x, y, more);
});
return G__50568;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___50563.call(this);
case  1 :
return _PLUS___50564.call(this,x);
case  2 :
return _PLUS___50565.call(this,x,y);
default:
return _PLUS___50566.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___50566.cljs$lang$applyTo;
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
var ___50570 = (function (x){
return (- x);
});
var ___50571 = (function (x,y){
return (x - y);
});
var ___50572 = (function() { 
var G__50574__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__50574 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__50574__delegate.call(this, x, y, more);
};
G__50574.cljs$lang$maxFixedArity = 2;
G__50574.cljs$lang$applyTo = (function (arglist__50575){
var x = cljs.core.first(arglist__50575);
var y = cljs.core.first(cljs.core.next(arglist__50575));
var more = cljs.core.rest(cljs.core.next(arglist__50575));
return G__50574__delegate.call(this, x, y, more);
});
return G__50574;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___50570.call(this,x);
case  2 :
return ___50571.call(this,x,y);
default:
return ___50572.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___50572.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___50576 = (function (){
return 1;
});
var _STAR___50577 = (function (x){
return x;
});
var _STAR___50578 = (function (x,y){
return (x * y);
});
var _STAR___50579 = (function() { 
var G__50581__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__50581 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__50581__delegate.call(this, x, y, more);
};
G__50581.cljs$lang$maxFixedArity = 2;
G__50581.cljs$lang$applyTo = (function (arglist__50582){
var x = cljs.core.first(arglist__50582);
var y = cljs.core.first(cljs.core.next(arglist__50582));
var more = cljs.core.rest(cljs.core.next(arglist__50582));
return G__50581__delegate.call(this, x, y, more);
});
return G__50581;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___50576.call(this);
case  1 :
return _STAR___50577.call(this,x);
case  2 :
return _STAR___50578.call(this,x,y);
default:
return _STAR___50579.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___50579.cljs$lang$applyTo;
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
var _SLASH___50583 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___50584 = (function (x,y){
return (x / y);
});
var _SLASH___50585 = (function() { 
var G__50587__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__50587 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__50587__delegate.call(this, x, y, more);
};
G__50587.cljs$lang$maxFixedArity = 2;
G__50587.cljs$lang$applyTo = (function (arglist__50588){
var x = cljs.core.first(arglist__50588);
var y = cljs.core.first(cljs.core.next(arglist__50588));
var more = cljs.core.rest(cljs.core.next(arglist__50588));
return G__50587__delegate.call(this, x, y, more);
});
return G__50587;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___50583.call(this,x);
case  2 :
return _SLASH___50584.call(this,x,y);
default:
return _SLASH___50585.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___50585.cljs$lang$applyTo;
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
var _LT___50589 = (function (x){
return true;
});
var _LT___50590 = (function (x,y){
return (x < y);
});
var _LT___50591 = (function() { 
var G__50593__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__50594 = y;
var G__50595 = cljs.core.first.call(null,more);
var G__50596 = cljs.core.next.call(null,more);
x = G__50594;
y = G__50595;
more = G__50596;
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
var G__50593 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__50593__delegate.call(this, x, y, more);
};
G__50593.cljs$lang$maxFixedArity = 2;
G__50593.cljs$lang$applyTo = (function (arglist__50597){
var x = cljs.core.first(arglist__50597);
var y = cljs.core.first(cljs.core.next(arglist__50597));
var more = cljs.core.rest(cljs.core.next(arglist__50597));
return G__50593__delegate.call(this, x, y, more);
});
return G__50593;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___50589.call(this,x);
case  2 :
return _LT___50590.call(this,x,y);
default:
return _LT___50591.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___50591.cljs$lang$applyTo;
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
var _LT__EQ___50598 = (function (x){
return true;
});
var _LT__EQ___50599 = (function (x,y){
return (x <= y);
});
var _LT__EQ___50600 = (function() { 
var G__50602__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__50603 = y;
var G__50604 = cljs.core.first.call(null,more);
var G__50605 = cljs.core.next.call(null,more);
x = G__50603;
y = G__50604;
more = G__50605;
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
var G__50602 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__50602__delegate.call(this, x, y, more);
};
G__50602.cljs$lang$maxFixedArity = 2;
G__50602.cljs$lang$applyTo = (function (arglist__50606){
var x = cljs.core.first(arglist__50606);
var y = cljs.core.first(cljs.core.next(arglist__50606));
var more = cljs.core.rest(cljs.core.next(arglist__50606));
return G__50602__delegate.call(this, x, y, more);
});
return G__50602;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___50598.call(this,x);
case  2 :
return _LT__EQ___50599.call(this,x,y);
default:
return _LT__EQ___50600.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___50600.cljs$lang$applyTo;
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
var _GT___50607 = (function (x){
return true;
});
var _GT___50608 = (function (x,y){
return (x > y);
});
var _GT___50609 = (function() { 
var G__50611__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__50612 = y;
var G__50613 = cljs.core.first.call(null,more);
var G__50614 = cljs.core.next.call(null,more);
x = G__50612;
y = G__50613;
more = G__50614;
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
var G__50611 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__50611__delegate.call(this, x, y, more);
};
G__50611.cljs$lang$maxFixedArity = 2;
G__50611.cljs$lang$applyTo = (function (arglist__50615){
var x = cljs.core.first(arglist__50615);
var y = cljs.core.first(cljs.core.next(arglist__50615));
var more = cljs.core.rest(cljs.core.next(arglist__50615));
return G__50611__delegate.call(this, x, y, more);
});
return G__50611;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___50607.call(this,x);
case  2 :
return _GT___50608.call(this,x,y);
default:
return _GT___50609.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___50609.cljs$lang$applyTo;
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
var _GT__EQ___50616 = (function (x){
return true;
});
var _GT__EQ___50617 = (function (x,y){
return (x >= y);
});
var _GT__EQ___50618 = (function() { 
var G__50620__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__50621 = y;
var G__50622 = cljs.core.first.call(null,more);
var G__50623 = cljs.core.next.call(null,more);
x = G__50621;
y = G__50622;
more = G__50623;
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
var G__50620 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__50620__delegate.call(this, x, y, more);
};
G__50620.cljs$lang$maxFixedArity = 2;
G__50620.cljs$lang$applyTo = (function (arglist__50624){
var x = cljs.core.first(arglist__50624);
var y = cljs.core.first(cljs.core.next(arglist__50624));
var more = cljs.core.rest(cljs.core.next(arglist__50624));
return G__50620__delegate.call(this, x, y, more);
});
return G__50620;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___50616.call(this,x);
case  2 :
return _GT__EQ___50617.call(this,x,y);
default:
return _GT__EQ___50618.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___50618.cljs$lang$applyTo;
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
var max__50625 = (function (x){
return x;
});
var max__50626 = (function (x,y){
return ((x > y) ? x : y);
});
var max__50627 = (function() { 
var G__50629__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__50629 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__50629__delegate.call(this, x, y, more);
};
G__50629.cljs$lang$maxFixedArity = 2;
G__50629.cljs$lang$applyTo = (function (arglist__50630){
var x = cljs.core.first(arglist__50630);
var y = cljs.core.first(cljs.core.next(arglist__50630));
var more = cljs.core.rest(cljs.core.next(arglist__50630));
return G__50629__delegate.call(this, x, y, more);
});
return G__50629;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__50625.call(this,x);
case  2 :
return max__50626.call(this,x,y);
default:
return max__50627.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__50627.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__50631 = (function (x){
return x;
});
var min__50632 = (function (x,y){
return ((x < y) ? x : y);
});
var min__50633 = (function() { 
var G__50635__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__50635 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__50635__delegate.call(this, x, y, more);
};
G__50635.cljs$lang$maxFixedArity = 2;
G__50635.cljs$lang$applyTo = (function (arglist__50636){
var x = cljs.core.first(arglist__50636);
var y = cljs.core.first(cljs.core.next(arglist__50636));
var more = cljs.core.rest(cljs.core.next(arglist__50636));
return G__50635__delegate.call(this, x, y, more);
});
return G__50635;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__50631.call(this,x);
case  2 :
return min__50632.call(this,x,y);
default:
return min__50633.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__50633.cljs$lang$applyTo;
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
var rem__50637 = (n % d);

return cljs.core.fix.call(null,((n - rem__50637) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__50638 = cljs.core.quot.call(null,n,d);

return (n - (d * q__50638));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__50639 = (function (){
return Math.random.call(null);
});
var rand__50640 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__50639.call(this);
case  1 :
return rand__50640.call(this,n);
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
var _EQ__EQ___50642 = (function (x){
return true;
});
var _EQ__EQ___50643 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___50644 = (function() { 
var G__50646__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__50647 = y;
var G__50648 = cljs.core.first.call(null,more);
var G__50649 = cljs.core.next.call(null,more);
x = G__50647;
y = G__50648;
more = G__50649;
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
var G__50646 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__50646__delegate.call(this, x, y, more);
};
G__50646.cljs$lang$maxFixedArity = 2;
G__50646.cljs$lang$applyTo = (function (arglist__50650){
var x = cljs.core.first(arglist__50650);
var y = cljs.core.first(cljs.core.next(arglist__50650));
var more = cljs.core.rest(cljs.core.next(arglist__50650));
return G__50646__delegate.call(this, x, y, more);
});
return G__50646;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___50642.call(this,x);
case  2 :
return _EQ__EQ___50643.call(this,x,y);
default:
return _EQ__EQ___50644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___50644.cljs$lang$applyTo;
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
var n__50651 = n;
var xs__50652 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3822__auto____50653 = xs__50652;

if(cljs.core.truth_(and__3822__auto____50653))
{return (n__50651 > 0);
} else
{return and__3822__auto____50653;
}
})()))
{{
var G__50654 = (n__50651 - 1);
var G__50655 = cljs.core.next.call(null,xs__50652);
n__50651 = G__50654;
xs__50652 = G__50655;
continue;
}
} else
{return xs__50652;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__50660 = null;
var G__50660__50661 = (function (coll,n){
var temp__3971__auto____50656 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3971__auto____50656))
{var xs__50657 = temp__3971__auto____50656;

return cljs.core.first.call(null,xs__50657);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__50660__50662 = (function (coll,n,not_found){
var temp__3971__auto____50658 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3971__auto____50658))
{var xs__50659 = temp__3971__auto____50658;

return cljs.core.first.call(null,xs__50659);
} else
{return not_found;
}
});
G__50660 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__50660__50661.call(this,coll,n);
case  3 :
return G__50660__50662.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__50660;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___50664 = (function (){
return "";
});
var str_STAR___50665 = (function (x){
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
var str_STAR___50666 = (function() { 
var G__50668__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__50669 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__50670 = cljs.core.next.call(null,more);
sb = G__50669;
more = G__50670;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__50668 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__50668__delegate.call(this, x, ys);
};
G__50668.cljs$lang$maxFixedArity = 1;
G__50668.cljs$lang$applyTo = (function (arglist__50671){
var x = cljs.core.first(arglist__50671);
var ys = cljs.core.rest(arglist__50671);
return G__50668__delegate.call(this, x, ys);
});
return G__50668;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___50664.call(this);
case  1 :
return str_STAR___50665.call(this,x);
default:
return str_STAR___50666.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___50666.cljs$lang$applyTo;
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
var str__50672 = (function (){
return "";
});
var str__50673 = (function (x){
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
var str__50674 = (function() { 
var G__50676__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__50677 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__50678 = cljs.core.next.call(null,more);
sb = G__50677;
more = G__50678;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__50676 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__50676__delegate.call(this, x, ys);
};
G__50676.cljs$lang$maxFixedArity = 1;
G__50676.cljs$lang$applyTo = (function (arglist__50679){
var x = cljs.core.first(arglist__50679);
var ys = cljs.core.rest(arglist__50679);
return G__50676__delegate.call(this, x, ys);
});
return G__50676;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__50672.call(this);
case  1 :
return str__50673.call(this,x);
default:
return str__50674.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__50674.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__50680 = (function (s,start){
return s.substring(start);
});
var subs__50681 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__50680.call(this,s,start);
case  3 :
return subs__50681.call(this,s,start,end);
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
var symbol__50683 = (function (name){
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
var symbol__50684 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__50683.call(this,ns);
case  2 :
return symbol__50684.call(this,ns,name);
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
var keyword__50686 = (function (name){
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
var keyword__50687 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__50686.call(this,ns);
case  2 :
return keyword__50687.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__50689 = cljs.core.seq.call(null,x);
var ys__50690 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__50689 === null)))
{return (ys__50690 === null);
} else
{if(cljs.core.truth_((ys__50690 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__50689),cljs.core.first.call(null,ys__50690))))
{{
var G__50691 = cljs.core.next.call(null,xs__50689);
var G__50692 = cljs.core.next.call(null,ys__50690);
xs__50689 = G__50691;
ys__50690 = G__50692;
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
return cljs.core.reduce.call(null,(function (p1__50693_SHARP_,p2__50694_SHARP_){
return cljs.core.hash_combine.call(null,p1__50693_SHARP_,cljs.core.hash.call(null,p2__50694_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__50695__50696 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__50695__50696))
{var G__50698__50700 = cljs.core.first.call(null,G__50695__50696);
var vec__50699__50701 = G__50698__50700;
var key_name__50702 = cljs.core.nth.call(null,vec__50699__50701,0,null);
var f__50703 = cljs.core.nth.call(null,vec__50699__50701,1,null);
var G__50695__50704 = G__50695__50696;

var G__50698__50705 = G__50698__50700;
var G__50695__50706 = G__50695__50704;

while(true){
var vec__50707__50708 = G__50698__50705;
var key_name__50709 = cljs.core.nth.call(null,vec__50707__50708,0,null);
var f__50710 = cljs.core.nth.call(null,vec__50707__50708,1,null);
var G__50695__50711 = G__50695__50706;

var str_name__50712 = cljs.core.name.call(null,key_name__50709);

obj[str_name__50712] = f__50710;
var temp__3974__auto____50713 = cljs.core.next.call(null,G__50695__50711);

if(cljs.core.truth_(temp__3974__auto____50713))
{var G__50695__50714 = temp__3974__auto____50713;

{
var G__50715 = cljs.core.first.call(null,G__50695__50714);
var G__50716 = G__50695__50714;
G__50698__50705 = G__50715;
G__50695__50706 = G__50716;
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
var this__50717 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__50718 = this;
return (new cljs.core.List(this__50718.meta,o,coll,(this__50718.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__50719 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__50720 = this;
return this__50720.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__50721 = this;
return this__50721.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__50722 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__50723 = this;
return this__50723.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__50724 = this;
return this__50724.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__50725 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__50726 = this;
return (new cljs.core.List(meta,this__50726.first,this__50726.rest,this__50726.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__50727 = this;
return this__50727.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__50728 = this;
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
var this__50729 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__50730 = this;
return (new cljs.core.List(this__50730.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__50731 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__50732 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__50733 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__50734 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__50735 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__50736 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__50737 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__50738 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__50739 = this;
return this__50739.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__50740 = this;
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
list.cljs$lang$applyTo = (function (arglist__50741){
var items = cljs.core.seq( arglist__50741 );;
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
var this__50742 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__50743 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__50744 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__50745 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__50745.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__50746 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__50747 = this;
return this__50747.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__50748 = this;
if(cljs.core.truth_((this__50748.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__50748.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__50749 = this;
return this__50749.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__50750 = this;
return (new cljs.core.Cons(meta,this__50750.first,this__50750.rest));
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
var G__50751 = null;
var G__50751__50752 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__50751__50753 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__50751 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__50751__50752.call(this,string,f);
case  3 :
return G__50751__50753.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__50751;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__50755 = null;
var G__50755__50756 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__50755__50757 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__50755 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__50755__50756.call(this,string,k);
case  3 :
return G__50755__50757.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__50755;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__50759 = null;
var G__50759__50760 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__50759__50761 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__50759 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__50759__50760.call(this,string,n);
case  3 :
return G__50759__50761.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__50759;
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
var G__50769 = null;
var G__50769__50770 = (function (tsym50763,coll){
var tsym50763__50765 = this;

var this$__50766 = tsym50763__50765;

return cljs.core.get.call(null,coll,this$__50766.toString());
});
var G__50769__50771 = (function (tsym50764,coll,not_found){
var tsym50764__50767 = this;

var this$__50768 = tsym50764__50767;

return cljs.core.get.call(null,coll,this$__50768.toString(),not_found);
});
G__50769 = function(tsym50764,coll,not_found){
switch(arguments.length){
case  2 :
return G__50769__50770.call(this,tsym50764,coll);
case  3 :
return G__50769__50771.call(this,tsym50764,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__50769;
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
var x__50773 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__50773;
} else
{lazy_seq.x = x__50773.call(null);
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
var this__50774 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__50775 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__50776 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__50777 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__50777.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__50778 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__50779 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__50780 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__50781 = this;
return this__50781.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__50782 = this;
return (new cljs.core.LazySeq(meta,this__50782.realized,this__50782.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__50783 = [];

var s__50784 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__50784)))
{ary__50783.push(cljs.core.first.call(null,s__50784));
{
var G__50785 = cljs.core.next.call(null,s__50784);
s__50784 = G__50785;
continue;
}
} else
{return ary__50783;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__50786 = s;
var i__50787 = n;
var sum__50788 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3822__auto____50789 = (i__50787 > 0);

if(cljs.core.truth_(and__3822__auto____50789))
{return cljs.core.seq.call(null,s__50786);
} else
{return and__3822__auto____50789;
}
})()))
{{
var G__50790 = cljs.core.next.call(null,s__50786);
var G__50791 = (i__50787 - 1);
var G__50792 = (sum__50788 + 1);
s__50786 = G__50790;
i__50787 = G__50791;
sum__50788 = G__50792;
continue;
}
} else
{return sum__50788;
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
var concat__50796 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__50797 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__50798 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__50793 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__50793))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__50793),concat.call(null,cljs.core.rest.call(null,s__50793),y));
} else
{return y;
}
})));
});
var concat__50799 = (function() { 
var G__50801__delegate = function (x,y,zs){
var cat__50795 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__50794 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__50794))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__50794),cat.call(null,cljs.core.rest.call(null,xys__50794),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__50795.call(null,concat.call(null,x,y),zs);
};
var G__50801 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__50801__delegate.call(this, x, y, zs);
};
G__50801.cljs$lang$maxFixedArity = 2;
G__50801.cljs$lang$applyTo = (function (arglist__50802){
var x = cljs.core.first(arglist__50802);
var y = cljs.core.first(cljs.core.next(arglist__50802));
var zs = cljs.core.rest(cljs.core.next(arglist__50802));
return G__50801__delegate.call(this, x, y, zs);
});
return G__50801;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__50796.call(this);
case  1 :
return concat__50797.call(this,x);
case  2 :
return concat__50798.call(this,x,y);
default:
return concat__50799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__50799.cljs$lang$applyTo;
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
var list_STAR___50803 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___50804 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___50805 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___50806 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___50807 = (function() { 
var G__50809__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__50809 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__50809__delegate.call(this, a, b, c, d, more);
};
G__50809.cljs$lang$maxFixedArity = 4;
G__50809.cljs$lang$applyTo = (function (arglist__50810){
var a = cljs.core.first(arglist__50810);
var b = cljs.core.first(cljs.core.next(arglist__50810));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__50810)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__50810))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__50810))));
return G__50809__delegate.call(this, a, b, c, d, more);
});
return G__50809;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___50803.call(this,a);
case  2 :
return list_STAR___50804.call(this,a,b);
case  3 :
return list_STAR___50805.call(this,a,b,c);
case  4 :
return list_STAR___50806.call(this,a,b,c,d);
default:
return list_STAR___50807.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___50807.cljs$lang$applyTo;
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
var apply__50820 = (function (f,args){
var fixed_arity__50811 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__50811 + 1)) <= fixed_arity__50811)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__50821 = (function (f,x,args){
var arglist__50812 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__50813 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__50812,fixed_arity__50813) <= fixed_arity__50813)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__50812));
} else
{return f.cljs$lang$applyTo(arglist__50812);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__50812));
}
});
var apply__50822 = (function (f,x,y,args){
var arglist__50814 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__50815 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__50814,fixed_arity__50815) <= fixed_arity__50815)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__50814));
} else
{return f.cljs$lang$applyTo(arglist__50814);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__50814));
}
});
var apply__50823 = (function (f,x,y,z,args){
var arglist__50816 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__50817 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__50816,fixed_arity__50817) <= fixed_arity__50817)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__50816));
} else
{return f.cljs$lang$applyTo(arglist__50816);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__50816));
}
});
var apply__50824 = (function() { 
var G__50826__delegate = function (f,a,b,c,d,args){
var arglist__50818 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__50819 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__50818,fixed_arity__50819) <= fixed_arity__50819)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__50818));
} else
{return f.cljs$lang$applyTo(arglist__50818);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__50818));
}
};
var G__50826 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__50826__delegate.call(this, f, a, b, c, d, args);
};
G__50826.cljs$lang$maxFixedArity = 5;
G__50826.cljs$lang$applyTo = (function (arglist__50827){
var f = cljs.core.first(arglist__50827);
var a = cljs.core.first(cljs.core.next(arglist__50827));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__50827)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__50827))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__50827)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__50827)))));
return G__50826__delegate.call(this, f, a, b, c, d, args);
});
return G__50826;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__50820.call(this,f,a);
case  3 :
return apply__50821.call(this,f,a,b);
case  4 :
return apply__50822.call(this,f,a,b,c);
case  5 :
return apply__50823.call(this,f,a,b,c,d);
default:
return apply__50824.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__50824.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__50828){
var obj = cljs.core.first(arglist__50828);
var f = cljs.core.first(cljs.core.next(arglist__50828));
var args = cljs.core.rest(cljs.core.next(arglist__50828));
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
var not_EQ___50829 = (function (x){
return false;
});
var not_EQ___50830 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___50831 = (function() { 
var G__50833__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__50833 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__50833__delegate.call(this, x, y, more);
};
G__50833.cljs$lang$maxFixedArity = 2;
G__50833.cljs$lang$applyTo = (function (arglist__50834){
var x = cljs.core.first(arglist__50834);
var y = cljs.core.first(cljs.core.next(arglist__50834));
var more = cljs.core.rest(cljs.core.next(arglist__50834));
return G__50833__delegate.call(this, x, y, more);
});
return G__50833;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___50829.call(this,x);
case  2 :
return not_EQ___50830.call(this,x,y);
default:
return not_EQ___50831.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___50831.cljs$lang$applyTo;
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
var G__50835 = pred;
var G__50836 = cljs.core.next.call(null,coll);
pred = G__50835;
coll = G__50836;
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
{var or__3824__auto____50837 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3824__auto____50837))
{return or__3824__auto____50837;
} else
{{
var G__50838 = pred;
var G__50839 = cljs.core.next.call(null,coll);
pred = G__50838;
coll = G__50839;
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
var G__50840 = null;
var G__50840__50841 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__50840__50842 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__50840__50843 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__50840__50844 = (function() { 
var G__50846__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__50846 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__50846__delegate.call(this, x, y, zs);
};
G__50846.cljs$lang$maxFixedArity = 2;
G__50846.cljs$lang$applyTo = (function (arglist__50847){
var x = cljs.core.first(arglist__50847);
var y = cljs.core.first(cljs.core.next(arglist__50847));
var zs = cljs.core.rest(cljs.core.next(arglist__50847));
return G__50846__delegate.call(this, x, y, zs);
});
return G__50846;
})()
;
G__50840 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__50840__50841.call(this);
case  1 :
return G__50840__50842.call(this,x);
case  2 :
return G__50840__50843.call(this,x,y);
default:
return G__50840__50844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__50840.cljs$lang$maxFixedArity = 2;
G__50840.cljs$lang$applyTo = G__50840__50844.cljs$lang$applyTo;
return G__50840;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__50848__delegate = function (args){
return x;
};
var G__50848 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__50848__delegate.call(this, args);
};
G__50848.cljs$lang$maxFixedArity = 0;
G__50848.cljs$lang$applyTo = (function (arglist__50849){
var args = cljs.core.seq( arglist__50849 );;
return G__50848__delegate.call(this, args);
});
return G__50848;
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
var comp__50853 = (function (){
return cljs.core.identity;
});
var comp__50854 = (function (f){
return f;
});
var comp__50855 = (function (f,g){
return (function() {
var G__50859 = null;
var G__50859__50860 = (function (){
return f.call(null,g.call(null));
});
var G__50859__50861 = (function (x){
return f.call(null,g.call(null,x));
});
var G__50859__50862 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__50859__50863 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__50859__50864 = (function() { 
var G__50866__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__50866 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__50866__delegate.call(this, x, y, z, args);
};
G__50866.cljs$lang$maxFixedArity = 3;
G__50866.cljs$lang$applyTo = (function (arglist__50867){
var x = cljs.core.first(arglist__50867);
var y = cljs.core.first(cljs.core.next(arglist__50867));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__50867)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__50867)));
return G__50866__delegate.call(this, x, y, z, args);
});
return G__50866;
})()
;
G__50859 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__50859__50860.call(this);
case  1 :
return G__50859__50861.call(this,x);
case  2 :
return G__50859__50862.call(this,x,y);
case  3 :
return G__50859__50863.call(this,x,y,z);
default:
return G__50859__50864.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__50859.cljs$lang$maxFixedArity = 3;
G__50859.cljs$lang$applyTo = G__50859__50864.cljs$lang$applyTo;
return G__50859;
})()
});
var comp__50856 = (function (f,g,h){
return (function() {
var G__50868 = null;
var G__50868__50869 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__50868__50870 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__50868__50871 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__50868__50872 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__50868__50873 = (function() { 
var G__50875__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__50875 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__50875__delegate.call(this, x, y, z, args);
};
G__50875.cljs$lang$maxFixedArity = 3;
G__50875.cljs$lang$applyTo = (function (arglist__50876){
var x = cljs.core.first(arglist__50876);
var y = cljs.core.first(cljs.core.next(arglist__50876));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__50876)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__50876)));
return G__50875__delegate.call(this, x, y, z, args);
});
return G__50875;
})()
;
G__50868 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__50868__50869.call(this);
case  1 :
return G__50868__50870.call(this,x);
case  2 :
return G__50868__50871.call(this,x,y);
case  3 :
return G__50868__50872.call(this,x,y,z);
default:
return G__50868__50873.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__50868.cljs$lang$maxFixedArity = 3;
G__50868.cljs$lang$applyTo = G__50868__50873.cljs$lang$applyTo;
return G__50868;
})()
});
var comp__50857 = (function() { 
var G__50877__delegate = function (f1,f2,f3,fs){
var fs__50850 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__50878__delegate = function (args){
var ret__50851 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__50850),args);
var fs__50852 = cljs.core.next.call(null,fs__50850);

while(true){
if(cljs.core.truth_(fs__50852))
{{
var G__50879 = cljs.core.first.call(null,fs__50852).call(null,ret__50851);
var G__50880 = cljs.core.next.call(null,fs__50852);
ret__50851 = G__50879;
fs__50852 = G__50880;
continue;
}
} else
{return ret__50851;
}
break;
}
};
var G__50878 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__50878__delegate.call(this, args);
};
G__50878.cljs$lang$maxFixedArity = 0;
G__50878.cljs$lang$applyTo = (function (arglist__50881){
var args = cljs.core.seq( arglist__50881 );;
return G__50878__delegate.call(this, args);
});
return G__50878;
})()
;
};
var G__50877 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__50877__delegate.call(this, f1, f2, f3, fs);
};
G__50877.cljs$lang$maxFixedArity = 3;
G__50877.cljs$lang$applyTo = (function (arglist__50882){
var f1 = cljs.core.first(arglist__50882);
var f2 = cljs.core.first(cljs.core.next(arglist__50882));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__50882)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__50882)));
return G__50877__delegate.call(this, f1, f2, f3, fs);
});
return G__50877;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__50853.call(this);
case  1 :
return comp__50854.call(this,f1);
case  2 :
return comp__50855.call(this,f1,f2);
case  3 :
return comp__50856.call(this,f1,f2,f3);
default:
return comp__50857.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__50857.cljs$lang$applyTo;
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
var partial__50883 = (function (f,arg1){
return (function() { 
var G__50888__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__50888 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__50888__delegate.call(this, args);
};
G__50888.cljs$lang$maxFixedArity = 0;
G__50888.cljs$lang$applyTo = (function (arglist__50889){
var args = cljs.core.seq( arglist__50889 );;
return G__50888__delegate.call(this, args);
});
return G__50888;
})()
;
});
var partial__50884 = (function (f,arg1,arg2){
return (function() { 
var G__50890__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__50890 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__50890__delegate.call(this, args);
};
G__50890.cljs$lang$maxFixedArity = 0;
G__50890.cljs$lang$applyTo = (function (arglist__50891){
var args = cljs.core.seq( arglist__50891 );;
return G__50890__delegate.call(this, args);
});
return G__50890;
})()
;
});
var partial__50885 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__50892__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__50892 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__50892__delegate.call(this, args);
};
G__50892.cljs$lang$maxFixedArity = 0;
G__50892.cljs$lang$applyTo = (function (arglist__50893){
var args = cljs.core.seq( arglist__50893 );;
return G__50892__delegate.call(this, args);
});
return G__50892;
})()
;
});
var partial__50886 = (function() { 
var G__50894__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__50895__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__50895 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__50895__delegate.call(this, args);
};
G__50895.cljs$lang$maxFixedArity = 0;
G__50895.cljs$lang$applyTo = (function (arglist__50896){
var args = cljs.core.seq( arglist__50896 );;
return G__50895__delegate.call(this, args);
});
return G__50895;
})()
;
};
var G__50894 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__50894__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__50894.cljs$lang$maxFixedArity = 4;
G__50894.cljs$lang$applyTo = (function (arglist__50897){
var f = cljs.core.first(arglist__50897);
var arg1 = cljs.core.first(cljs.core.next(arglist__50897));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__50897)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__50897))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__50897))));
return G__50894__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__50894;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__50883.call(this,f,arg1);
case  3 :
return partial__50884.call(this,f,arg1,arg2);
case  4 :
return partial__50885.call(this,f,arg1,arg2,arg3);
default:
return partial__50886.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__50886.cljs$lang$applyTo;
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
var fnil__50898 = (function (f,x){
return (function() {
var G__50902 = null;
var G__50902__50903 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__50902__50904 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__50902__50905 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__50902__50906 = (function() { 
var G__50908__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__50908 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__50908__delegate.call(this, a, b, c, ds);
};
G__50908.cljs$lang$maxFixedArity = 3;
G__50908.cljs$lang$applyTo = (function (arglist__50909){
var a = cljs.core.first(arglist__50909);
var b = cljs.core.first(cljs.core.next(arglist__50909));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__50909)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__50909)));
return G__50908__delegate.call(this, a, b, c, ds);
});
return G__50908;
})()
;
G__50902 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__50902__50903.call(this,a);
case  2 :
return G__50902__50904.call(this,a,b);
case  3 :
return G__50902__50905.call(this,a,b,c);
default:
return G__50902__50906.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__50902.cljs$lang$maxFixedArity = 3;
G__50902.cljs$lang$applyTo = G__50902__50906.cljs$lang$applyTo;
return G__50902;
})()
});
var fnil__50899 = (function (f,x,y){
return (function() {
var G__50910 = null;
var G__50910__50911 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__50910__50912 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__50910__50913 = (function() { 
var G__50915__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__50915 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__50915__delegate.call(this, a, b, c, ds);
};
G__50915.cljs$lang$maxFixedArity = 3;
G__50915.cljs$lang$applyTo = (function (arglist__50916){
var a = cljs.core.first(arglist__50916);
var b = cljs.core.first(cljs.core.next(arglist__50916));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__50916)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__50916)));
return G__50915__delegate.call(this, a, b, c, ds);
});
return G__50915;
})()
;
G__50910 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__50910__50911.call(this,a,b);
case  3 :
return G__50910__50912.call(this,a,b,c);
default:
return G__50910__50913.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__50910.cljs$lang$maxFixedArity = 3;
G__50910.cljs$lang$applyTo = G__50910__50913.cljs$lang$applyTo;
return G__50910;
})()
});
var fnil__50900 = (function (f,x,y,z){
return (function() {
var G__50917 = null;
var G__50917__50918 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__50917__50919 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__50917__50920 = (function() { 
var G__50922__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__50922 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__50922__delegate.call(this, a, b, c, ds);
};
G__50922.cljs$lang$maxFixedArity = 3;
G__50922.cljs$lang$applyTo = (function (arglist__50923){
var a = cljs.core.first(arglist__50923);
var b = cljs.core.first(cljs.core.next(arglist__50923));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__50923)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__50923)));
return G__50922__delegate.call(this, a, b, c, ds);
});
return G__50922;
})()
;
G__50917 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__50917__50918.call(this,a,b);
case  3 :
return G__50917__50919.call(this,a,b,c);
default:
return G__50917__50920.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__50917.cljs$lang$maxFixedArity = 3;
G__50917.cljs$lang$applyTo = G__50917__50920.cljs$lang$applyTo;
return G__50917;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__50898.call(this,f,x);
case  3 :
return fnil__50899.call(this,f,x,y);
case  4 :
return fnil__50900.call(this,f,x,y,z);
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
var mapi__50926 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____50924 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____50924))
{var s__50925 = temp__3974__auto____50924;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__50925)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__50925)));
} else
{return null;
}
})));
});

return mapi__50926.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____50927 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____50927))
{var s__50928 = temp__3974__auto____50927;

var x__50929 = f.call(null,cljs.core.first.call(null,s__50928));

if(cljs.core.truth_((x__50929 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__50928));
} else
{return cljs.core.cons.call(null,x__50929,keep.call(null,f,cljs.core.rest.call(null,s__50928)));
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
var keepi__50939 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____50936 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____50936))
{var s__50937 = temp__3974__auto____50936;

var x__50938 = f.call(null,idx,cljs.core.first.call(null,s__50937));

if(cljs.core.truth_((x__50938 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__50937));
} else
{return cljs.core.cons.call(null,x__50938,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__50937)));
}
} else
{return null;
}
})));
});

return keepi__50939.call(null,0,coll);
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
var every_pred__50984 = (function (p){
return (function() {
var ep1 = null;
var ep1__50989 = (function (){
return true;
});
var ep1__50990 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__50991 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____50946 = p.call(null,x);

if(cljs.core.truth_(and__3822__auto____50946))
{return p.call(null,y);
} else
{return and__3822__auto____50946;
}
})());
});
var ep1__50992 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____50947 = p.call(null,x);

if(cljs.core.truth_(and__3822__auto____50947))
{var and__3822__auto____50948 = p.call(null,y);

if(cljs.core.truth_(and__3822__auto____50948))
{return p.call(null,z);
} else
{return and__3822__auto____50948;
}
} else
{return and__3822__auto____50947;
}
})());
});
var ep1__50993 = (function() { 
var G__50995__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____50949 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____50949))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____50949;
}
})());
};
var G__50995 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__50995__delegate.call(this, x, y, z, args);
};
G__50995.cljs$lang$maxFixedArity = 3;
G__50995.cljs$lang$applyTo = (function (arglist__50996){
var x = cljs.core.first(arglist__50996);
var y = cljs.core.first(cljs.core.next(arglist__50996));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__50996)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__50996)));
return G__50995__delegate.call(this, x, y, z, args);
});
return G__50995;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__50989.call(this);
case  1 :
return ep1__50990.call(this,x);
case  2 :
return ep1__50991.call(this,x,y);
case  3 :
return ep1__50992.call(this,x,y,z);
default:
return ep1__50993.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__50993.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__50985 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__50997 = (function (){
return true;
});
var ep2__50998 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____50950 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____50950))
{return p2.call(null,x);
} else
{return and__3822__auto____50950;
}
})());
});
var ep2__50999 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____50951 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____50951))
{var and__3822__auto____50952 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____50952))
{var and__3822__auto____50953 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____50953))
{return p2.call(null,y);
} else
{return and__3822__auto____50953;
}
} else
{return and__3822__auto____50952;
}
} else
{return and__3822__auto____50951;
}
})());
});
var ep2__51000 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____50954 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____50954))
{var and__3822__auto____50955 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____50955))
{var and__3822__auto____50956 = p1.call(null,z);

if(cljs.core.truth_(and__3822__auto____50956))
{var and__3822__auto____50957 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____50957))
{var and__3822__auto____50958 = p2.call(null,y);

if(cljs.core.truth_(and__3822__auto____50958))
{return p2.call(null,z);
} else
{return and__3822__auto____50958;
}
} else
{return and__3822__auto____50957;
}
} else
{return and__3822__auto____50956;
}
} else
{return and__3822__auto____50955;
}
} else
{return and__3822__auto____50954;
}
})());
});
var ep2__51001 = (function() { 
var G__51003__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____50959 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____50959))
{return cljs.core.every_QMARK_.call(null,(function (p1__50930_SHARP_){
var and__3822__auto____50960 = p1.call(null,p1__50930_SHARP_);

if(cljs.core.truth_(and__3822__auto____50960))
{return p2.call(null,p1__50930_SHARP_);
} else
{return and__3822__auto____50960;
}
}),args);
} else
{return and__3822__auto____50959;
}
})());
};
var G__51003 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__51003__delegate.call(this, x, y, z, args);
};
G__51003.cljs$lang$maxFixedArity = 3;
G__51003.cljs$lang$applyTo = (function (arglist__51004){
var x = cljs.core.first(arglist__51004);
var y = cljs.core.first(cljs.core.next(arglist__51004));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51004)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__51004)));
return G__51003__delegate.call(this, x, y, z, args);
});
return G__51003;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__50997.call(this);
case  1 :
return ep2__50998.call(this,x);
case  2 :
return ep2__50999.call(this,x,y);
case  3 :
return ep2__51000.call(this,x,y,z);
default:
return ep2__51001.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__51001.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__50986 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__51005 = (function (){
return true;
});
var ep3__51006 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____50961 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____50961))
{var and__3822__auto____50962 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____50962))
{return p3.call(null,x);
} else
{return and__3822__auto____50962;
}
} else
{return and__3822__auto____50961;
}
})());
});
var ep3__51007 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____50963 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____50963))
{var and__3822__auto____50964 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____50964))
{var and__3822__auto____50965 = p3.call(null,x);

if(cljs.core.truth_(and__3822__auto____50965))
{var and__3822__auto____50966 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____50966))
{var and__3822__auto____50967 = p2.call(null,y);

if(cljs.core.truth_(and__3822__auto____50967))
{return p3.call(null,y);
} else
{return and__3822__auto____50967;
}
} else
{return and__3822__auto____50966;
}
} else
{return and__3822__auto____50965;
}
} else
{return and__3822__auto____50964;
}
} else
{return and__3822__auto____50963;
}
})());
});
var ep3__51008 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____50968 = p1.call(null,x);

if(cljs.core.truth_(and__3822__auto____50968))
{var and__3822__auto____50969 = p2.call(null,x);

if(cljs.core.truth_(and__3822__auto____50969))
{var and__3822__auto____50970 = p3.call(null,x);

if(cljs.core.truth_(and__3822__auto____50970))
{var and__3822__auto____50971 = p1.call(null,y);

if(cljs.core.truth_(and__3822__auto____50971))
{var and__3822__auto____50972 = p2.call(null,y);

if(cljs.core.truth_(and__3822__auto____50972))
{var and__3822__auto____50973 = p3.call(null,y);

if(cljs.core.truth_(and__3822__auto____50973))
{var and__3822__auto____50974 = p1.call(null,z);

if(cljs.core.truth_(and__3822__auto____50974))
{var and__3822__auto____50975 = p2.call(null,z);

if(cljs.core.truth_(and__3822__auto____50975))
{return p3.call(null,z);
} else
{return and__3822__auto____50975;
}
} else
{return and__3822__auto____50974;
}
} else
{return and__3822__auto____50973;
}
} else
{return and__3822__auto____50972;
}
} else
{return and__3822__auto____50971;
}
} else
{return and__3822__auto____50970;
}
} else
{return and__3822__auto____50969;
}
} else
{return and__3822__auto____50968;
}
})());
});
var ep3__51009 = (function() { 
var G__51011__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____50976 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____50976))
{return cljs.core.every_QMARK_.call(null,(function (p1__50931_SHARP_){
var and__3822__auto____50977 = p1.call(null,p1__50931_SHARP_);

if(cljs.core.truth_(and__3822__auto____50977))
{var and__3822__auto____50978 = p2.call(null,p1__50931_SHARP_);

if(cljs.core.truth_(and__3822__auto____50978))
{return p3.call(null,p1__50931_SHARP_);
} else
{return and__3822__auto____50978;
}
} else
{return and__3822__auto____50977;
}
}),args);
} else
{return and__3822__auto____50976;
}
})());
};
var G__51011 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__51011__delegate.call(this, x, y, z, args);
};
G__51011.cljs$lang$maxFixedArity = 3;
G__51011.cljs$lang$applyTo = (function (arglist__51012){
var x = cljs.core.first(arglist__51012);
var y = cljs.core.first(cljs.core.next(arglist__51012));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51012)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__51012)));
return G__51011__delegate.call(this, x, y, z, args);
});
return G__51011;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__51005.call(this);
case  1 :
return ep3__51006.call(this,x);
case  2 :
return ep3__51007.call(this,x,y);
case  3 :
return ep3__51008.call(this,x,y,z);
default:
return ep3__51009.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__51009.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__50987 = (function() { 
var G__51013__delegate = function (p1,p2,p3,ps){
var ps__50979 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__51014 = (function (){
return true;
});
var epn__51015 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__50932_SHARP_){
return p1__50932_SHARP_.call(null,x);
}),ps__50979);
});
var epn__51016 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__50933_SHARP_){
var and__3822__auto____50980 = p1__50933_SHARP_.call(null,x);

if(cljs.core.truth_(and__3822__auto____50980))
{return p1__50933_SHARP_.call(null,y);
} else
{return and__3822__auto____50980;
}
}),ps__50979);
});
var epn__51017 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__50934_SHARP_){
var and__3822__auto____50981 = p1__50934_SHARP_.call(null,x);

if(cljs.core.truth_(and__3822__auto____50981))
{var and__3822__auto____50982 = p1__50934_SHARP_.call(null,y);

if(cljs.core.truth_(and__3822__auto____50982))
{return p1__50934_SHARP_.call(null,z);
} else
{return and__3822__auto____50982;
}
} else
{return and__3822__auto____50981;
}
}),ps__50979);
});
var epn__51018 = (function() { 
var G__51020__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____50983 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3822__auto____50983))
{return cljs.core.every_QMARK_.call(null,(function (p1__50935_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__50935_SHARP_,args);
}),ps__50979);
} else
{return and__3822__auto____50983;
}
})());
};
var G__51020 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__51020__delegate.call(this, x, y, z, args);
};
G__51020.cljs$lang$maxFixedArity = 3;
G__51020.cljs$lang$applyTo = (function (arglist__51021){
var x = cljs.core.first(arglist__51021);
var y = cljs.core.first(cljs.core.next(arglist__51021));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51021)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__51021)));
return G__51020__delegate.call(this, x, y, z, args);
});
return G__51020;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__51014.call(this);
case  1 :
return epn__51015.call(this,x);
case  2 :
return epn__51016.call(this,x,y);
case  3 :
return epn__51017.call(this,x,y,z);
default:
return epn__51018.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__51018.cljs$lang$applyTo;
return epn;
})()
};
var G__51013 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__51013__delegate.call(this, p1, p2, p3, ps);
};
G__51013.cljs$lang$maxFixedArity = 3;
G__51013.cljs$lang$applyTo = (function (arglist__51022){
var p1 = cljs.core.first(arglist__51022);
var p2 = cljs.core.first(cljs.core.next(arglist__51022));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51022)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__51022)));
return G__51013__delegate.call(this, p1, p2, p3, ps);
});
return G__51013;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__50984.call(this,p1);
case  2 :
return every_pred__50985.call(this,p1,p2);
case  3 :
return every_pred__50986.call(this,p1,p2,p3);
default:
return every_pred__50987.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__50987.cljs$lang$applyTo;
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
var some_fn__51062 = (function (p){
return (function() {
var sp1 = null;
var sp1__51067 = (function (){
return null;
});
var sp1__51068 = (function (x){
return p.call(null,x);
});
var sp1__51069 = (function (x,y){
var or__3824__auto____51024 = p.call(null,x);

if(cljs.core.truth_(or__3824__auto____51024))
{return or__3824__auto____51024;
} else
{return p.call(null,y);
}
});
var sp1__51070 = (function (x,y,z){
var or__3824__auto____51025 = p.call(null,x);

if(cljs.core.truth_(or__3824__auto____51025))
{return or__3824__auto____51025;
} else
{var or__3824__auto____51026 = p.call(null,y);

if(cljs.core.truth_(or__3824__auto____51026))
{return or__3824__auto____51026;
} else
{return p.call(null,z);
}
}
});
var sp1__51071 = (function() { 
var G__51073__delegate = function (x,y,z,args){
var or__3824__auto____51027 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____51027))
{return or__3824__auto____51027;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__51073 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__51073__delegate.call(this, x, y, z, args);
};
G__51073.cljs$lang$maxFixedArity = 3;
G__51073.cljs$lang$applyTo = (function (arglist__51074){
var x = cljs.core.first(arglist__51074);
var y = cljs.core.first(cljs.core.next(arglist__51074));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51074)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__51074)));
return G__51073__delegate.call(this, x, y, z, args);
});
return G__51073;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__51067.call(this);
case  1 :
return sp1__51068.call(this,x);
case  2 :
return sp1__51069.call(this,x,y);
case  3 :
return sp1__51070.call(this,x,y,z);
default:
return sp1__51071.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__51071.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__51063 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__51075 = (function (){
return null;
});
var sp2__51076 = (function (x){
var or__3824__auto____51028 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____51028))
{return or__3824__auto____51028;
} else
{return p2.call(null,x);
}
});
var sp2__51077 = (function (x,y){
var or__3824__auto____51029 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____51029))
{return or__3824__auto____51029;
} else
{var or__3824__auto____51030 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____51030))
{return or__3824__auto____51030;
} else
{var or__3824__auto____51031 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____51031))
{return or__3824__auto____51031;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__51078 = (function (x,y,z){
var or__3824__auto____51032 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____51032))
{return or__3824__auto____51032;
} else
{var or__3824__auto____51033 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____51033))
{return or__3824__auto____51033;
} else
{var or__3824__auto____51034 = p1.call(null,z);

if(cljs.core.truth_(or__3824__auto____51034))
{return or__3824__auto____51034;
} else
{var or__3824__auto____51035 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____51035))
{return or__3824__auto____51035;
} else
{var or__3824__auto____51036 = p2.call(null,y);

if(cljs.core.truth_(or__3824__auto____51036))
{return or__3824__auto____51036;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__51079 = (function() { 
var G__51081__delegate = function (x,y,z,args){
var or__3824__auto____51037 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____51037))
{return or__3824__auto____51037;
} else
{return cljs.core.some.call(null,(function (p1__50940_SHARP_){
var or__3824__auto____51038 = p1.call(null,p1__50940_SHARP_);

if(cljs.core.truth_(or__3824__auto____51038))
{return or__3824__auto____51038;
} else
{return p2.call(null,p1__50940_SHARP_);
}
}),args);
}
};
var G__51081 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__51081__delegate.call(this, x, y, z, args);
};
G__51081.cljs$lang$maxFixedArity = 3;
G__51081.cljs$lang$applyTo = (function (arglist__51082){
var x = cljs.core.first(arglist__51082);
var y = cljs.core.first(cljs.core.next(arglist__51082));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51082)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__51082)));
return G__51081__delegate.call(this, x, y, z, args);
});
return G__51081;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__51075.call(this);
case  1 :
return sp2__51076.call(this,x);
case  2 :
return sp2__51077.call(this,x,y);
case  3 :
return sp2__51078.call(this,x,y,z);
default:
return sp2__51079.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__51079.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__51064 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__51083 = (function (){
return null;
});
var sp3__51084 = (function (x){
var or__3824__auto____51039 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____51039))
{return or__3824__auto____51039;
} else
{var or__3824__auto____51040 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____51040))
{return or__3824__auto____51040;
} else
{return p3.call(null,x);
}
}
});
var sp3__51085 = (function (x,y){
var or__3824__auto____51041 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____51041))
{return or__3824__auto____51041;
} else
{var or__3824__auto____51042 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____51042))
{return or__3824__auto____51042;
} else
{var or__3824__auto____51043 = p3.call(null,x);

if(cljs.core.truth_(or__3824__auto____51043))
{return or__3824__auto____51043;
} else
{var or__3824__auto____51044 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____51044))
{return or__3824__auto____51044;
} else
{var or__3824__auto____51045 = p2.call(null,y);

if(cljs.core.truth_(or__3824__auto____51045))
{return or__3824__auto____51045;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__51086 = (function (x,y,z){
var or__3824__auto____51046 = p1.call(null,x);

if(cljs.core.truth_(or__3824__auto____51046))
{return or__3824__auto____51046;
} else
{var or__3824__auto____51047 = p2.call(null,x);

if(cljs.core.truth_(or__3824__auto____51047))
{return or__3824__auto____51047;
} else
{var or__3824__auto____51048 = p3.call(null,x);

if(cljs.core.truth_(or__3824__auto____51048))
{return or__3824__auto____51048;
} else
{var or__3824__auto____51049 = p1.call(null,y);

if(cljs.core.truth_(or__3824__auto____51049))
{return or__3824__auto____51049;
} else
{var or__3824__auto____51050 = p2.call(null,y);

if(cljs.core.truth_(or__3824__auto____51050))
{return or__3824__auto____51050;
} else
{var or__3824__auto____51051 = p3.call(null,y);

if(cljs.core.truth_(or__3824__auto____51051))
{return or__3824__auto____51051;
} else
{var or__3824__auto____51052 = p1.call(null,z);

if(cljs.core.truth_(or__3824__auto____51052))
{return or__3824__auto____51052;
} else
{var or__3824__auto____51053 = p2.call(null,z);

if(cljs.core.truth_(or__3824__auto____51053))
{return or__3824__auto____51053;
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
var sp3__51087 = (function() { 
var G__51089__delegate = function (x,y,z,args){
var or__3824__auto____51054 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____51054))
{return or__3824__auto____51054;
} else
{return cljs.core.some.call(null,(function (p1__50941_SHARP_){
var or__3824__auto____51055 = p1.call(null,p1__50941_SHARP_);

if(cljs.core.truth_(or__3824__auto____51055))
{return or__3824__auto____51055;
} else
{var or__3824__auto____51056 = p2.call(null,p1__50941_SHARP_);

if(cljs.core.truth_(or__3824__auto____51056))
{return or__3824__auto____51056;
} else
{return p3.call(null,p1__50941_SHARP_);
}
}
}),args);
}
};
var G__51089 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__51089__delegate.call(this, x, y, z, args);
};
G__51089.cljs$lang$maxFixedArity = 3;
G__51089.cljs$lang$applyTo = (function (arglist__51090){
var x = cljs.core.first(arglist__51090);
var y = cljs.core.first(cljs.core.next(arglist__51090));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51090)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__51090)));
return G__51089__delegate.call(this, x, y, z, args);
});
return G__51089;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__51083.call(this);
case  1 :
return sp3__51084.call(this,x);
case  2 :
return sp3__51085.call(this,x,y);
case  3 :
return sp3__51086.call(this,x,y,z);
default:
return sp3__51087.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__51087.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__51065 = (function() { 
var G__51091__delegate = function (p1,p2,p3,ps){
var ps__51057 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__51092 = (function (){
return null;
});
var spn__51093 = (function (x){
return cljs.core.some.call(null,(function (p1__50942_SHARP_){
return p1__50942_SHARP_.call(null,x);
}),ps__51057);
});
var spn__51094 = (function (x,y){
return cljs.core.some.call(null,(function (p1__50943_SHARP_){
var or__3824__auto____51058 = p1__50943_SHARP_.call(null,x);

if(cljs.core.truth_(or__3824__auto____51058))
{return or__3824__auto____51058;
} else
{return p1__50943_SHARP_.call(null,y);
}
}),ps__51057);
});
var spn__51095 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__50944_SHARP_){
var or__3824__auto____51059 = p1__50944_SHARP_.call(null,x);

if(cljs.core.truth_(or__3824__auto____51059))
{return or__3824__auto____51059;
} else
{var or__3824__auto____51060 = p1__50944_SHARP_.call(null,y);

if(cljs.core.truth_(or__3824__auto____51060))
{return or__3824__auto____51060;
} else
{return p1__50944_SHARP_.call(null,z);
}
}
}),ps__51057);
});
var spn__51096 = (function() { 
var G__51098__delegate = function (x,y,z,args){
var or__3824__auto____51061 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3824__auto____51061))
{return or__3824__auto____51061;
} else
{return cljs.core.some.call(null,(function (p1__50945_SHARP_){
return cljs.core.some.call(null,p1__50945_SHARP_,args);
}),ps__51057);
}
};
var G__51098 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__51098__delegate.call(this, x, y, z, args);
};
G__51098.cljs$lang$maxFixedArity = 3;
G__51098.cljs$lang$applyTo = (function (arglist__51099){
var x = cljs.core.first(arglist__51099);
var y = cljs.core.first(cljs.core.next(arglist__51099));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51099)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__51099)));
return G__51098__delegate.call(this, x, y, z, args);
});
return G__51098;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__51092.call(this);
case  1 :
return spn__51093.call(this,x);
case  2 :
return spn__51094.call(this,x,y);
case  3 :
return spn__51095.call(this,x,y,z);
default:
return spn__51096.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__51096.cljs$lang$applyTo;
return spn;
})()
};
var G__51091 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__51091__delegate.call(this, p1, p2, p3, ps);
};
G__51091.cljs$lang$maxFixedArity = 3;
G__51091.cljs$lang$applyTo = (function (arglist__51100){
var p1 = cljs.core.first(arglist__51100);
var p2 = cljs.core.first(cljs.core.next(arglist__51100));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51100)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__51100)));
return G__51091__delegate.call(this, p1, p2, p3, ps);
});
return G__51091;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__51062.call(this,p1);
case  2 :
return some_fn__51063.call(this,p1,p2);
case  3 :
return some_fn__51064.call(this,p1,p2,p3);
default:
return some_fn__51065.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__51065.cljs$lang$applyTo;
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
var map__51113 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____51101 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____51101))
{var s__51102 = temp__3974__auto____51101;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__51102)),map.call(null,f,cljs.core.rest.call(null,s__51102)));
} else
{return null;
}
})));
});
var map__51114 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__51103 = cljs.core.seq.call(null,c1);
var s2__51104 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3822__auto____51105 = s1__51103;

if(cljs.core.truth_(and__3822__auto____51105))
{return s2__51104;
} else
{return and__3822__auto____51105;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__51103),cljs.core.first.call(null,s2__51104)),map.call(null,f,cljs.core.rest.call(null,s1__51103),cljs.core.rest.call(null,s2__51104)));
} else
{return null;
}
})));
});
var map__51115 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__51106 = cljs.core.seq.call(null,c1);
var s2__51107 = cljs.core.seq.call(null,c2);
var s3__51108 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3822__auto____51109 = s1__51106;

if(cljs.core.truth_(and__3822__auto____51109))
{var and__3822__auto____51110 = s2__51107;

if(cljs.core.truth_(and__3822__auto____51110))
{return s3__51108;
} else
{return and__3822__auto____51110;
}
} else
{return and__3822__auto____51109;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__51106),cljs.core.first.call(null,s2__51107),cljs.core.first.call(null,s3__51108)),map.call(null,f,cljs.core.rest.call(null,s1__51106),cljs.core.rest.call(null,s2__51107),cljs.core.rest.call(null,s3__51108)));
} else
{return null;
}
})));
});
var map__51116 = (function() { 
var G__51118__delegate = function (f,c1,c2,c3,colls){
var step__51112 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__51111 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__51111)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__51111),step.call(null,map.call(null,cljs.core.rest,ss__51111)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__51023_SHARP_){
return cljs.core.apply.call(null,f,p1__51023_SHARP_);
}),step__51112.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__51118 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__51118__delegate.call(this, f, c1, c2, c3, colls);
};
G__51118.cljs$lang$maxFixedArity = 4;
G__51118.cljs$lang$applyTo = (function (arglist__51119){
var f = cljs.core.first(arglist__51119);
var c1 = cljs.core.first(cljs.core.next(arglist__51119));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51119)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__51119))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__51119))));
return G__51118__delegate.call(this, f, c1, c2, c3, colls);
});
return G__51118;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__51113.call(this,f,c1);
case  3 :
return map__51114.call(this,f,c1,c2);
case  4 :
return map__51115.call(this,f,c1,c2,c3);
default:
return map__51116.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__51116.cljs$lang$applyTo;
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
{var temp__3974__auto____51120 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____51120))
{var s__51121 = temp__3974__auto____51120;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__51121),take.call(null,(n - 1),cljs.core.rest.call(null,s__51121)));
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
var step__51124 = (function (n,coll){
while(true){
var s__51122 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3822__auto____51123 = (n > 0);

if(cljs.core.truth_(and__3822__auto____51123))
{return s__51122;
} else
{return and__3822__auto____51123;
}
})()))
{{
var G__51125 = (n - 1);
var G__51126 = cljs.core.rest.call(null,s__51122);
n = G__51125;
coll = G__51126;
continue;
}
} else
{return s__51122;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__51124.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__51127 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__51128 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__51127.call(this,n);
case  2 :
return drop_last__51128.call(this,n,s);
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
var s__51130 = cljs.core.seq.call(null,coll);
var lead__51131 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__51131))
{{
var G__51132 = cljs.core.next.call(null,s__51130);
var G__51133 = cljs.core.next.call(null,lead__51131);
s__51130 = G__51132;
lead__51131 = G__51133;
continue;
}
} else
{return s__51130;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__51136 = (function (pred,coll){
while(true){
var s__51134 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3822__auto____51135 = s__51134;

if(cljs.core.truth_(and__3822__auto____51135))
{return pred.call(null,cljs.core.first.call(null,s__51134));
} else
{return and__3822__auto____51135;
}
})()))
{{
var G__51137 = pred;
var G__51138 = cljs.core.rest.call(null,s__51134);
pred = G__51137;
coll = G__51138;
continue;
}
} else
{return s__51134;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__51136.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____51139 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____51139))
{var s__51140 = temp__3974__auto____51139;

return cljs.core.concat.call(null,s__51140,cycle.call(null,s__51140));
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
var repeat__51141 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__51142 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__51141.call(this,n);
case  2 :
return repeat__51142.call(this,n,x);
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
var repeatedly__51144 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__51145 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__51144.call(this,n);
case  2 :
return repeatedly__51145.call(this,n,f);
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
var interleave__51151 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__51147 = cljs.core.seq.call(null,c1);
var s2__51148 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3822__auto____51149 = s1__51147;

if(cljs.core.truth_(and__3822__auto____51149))
{return s2__51148;
} else
{return and__3822__auto____51149;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__51147),cljs.core.cons.call(null,cljs.core.first.call(null,s2__51148),interleave.call(null,cljs.core.rest.call(null,s1__51147),cljs.core.rest.call(null,s2__51148))));
} else
{return null;
}
})));
});
var interleave__51152 = (function() { 
var G__51154__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__51150 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__51150)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__51150),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__51150)));
} else
{return null;
}
})));
};
var G__51154 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__51154__delegate.call(this, c1, c2, colls);
};
G__51154.cljs$lang$maxFixedArity = 2;
G__51154.cljs$lang$applyTo = (function (arglist__51155){
var c1 = cljs.core.first(arglist__51155);
var c2 = cljs.core.first(cljs.core.next(arglist__51155));
var colls = cljs.core.rest(cljs.core.next(arglist__51155));
return G__51154__delegate.call(this, c1, c2, colls);
});
return G__51154;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__51151.call(this,c1,c2);
default:
return interleave__51152.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__51152.cljs$lang$applyTo;
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
var cat__51158 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____51156 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3971__auto____51156))
{var coll__51157 = temp__3971__auto____51156;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__51157),cat.call(null,cljs.core.rest.call(null,coll__51157),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__51158.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__51159 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__51160 = (function() { 
var G__51162__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__51162 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__51162__delegate.call(this, f, coll, colls);
};
G__51162.cljs$lang$maxFixedArity = 2;
G__51162.cljs$lang$applyTo = (function (arglist__51163){
var f = cljs.core.first(arglist__51163);
var coll = cljs.core.first(cljs.core.next(arglist__51163));
var colls = cljs.core.rest(cljs.core.next(arglist__51163));
return G__51162__delegate.call(this, f, coll, colls);
});
return G__51162;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__51159.call(this,f,coll);
default:
return mapcat__51160.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__51160.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____51164 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____51164))
{var s__51165 = temp__3974__auto____51164;

var f__51166 = cljs.core.first.call(null,s__51165);
var r__51167 = cljs.core.rest.call(null,s__51165);

if(cljs.core.truth_(pred.call(null,f__51166)))
{return cljs.core.cons.call(null,f__51166,filter.call(null,pred,r__51167));
} else
{return filter.call(null,pred,r__51167);
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
var walk__51169 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__51169.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__51168_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__51168_SHARP_));
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
var partition__51176 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__51177 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____51170 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____51170))
{var s__51171 = temp__3974__auto____51170;

var p__51172 = cljs.core.take.call(null,n,s__51171);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__51172))))
{return cljs.core.cons.call(null,p__51172,partition.call(null,n,step,cljs.core.drop.call(null,step,s__51171)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__51178 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____51173 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____51173))
{var s__51174 = temp__3974__auto____51173;

var p__51175 = cljs.core.take.call(null,n,s__51174);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__51175))))
{return cljs.core.cons.call(null,p__51175,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__51174)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__51175,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__51176.call(this,n,step);
case  3 :
return partition__51177.call(this,n,step,pad);
case  4 :
return partition__51178.call(this,n,step,pad,coll);
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
var get_in__51184 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__51185 = (function (m,ks,not_found){
var sentinel__51180 = cljs.core.lookup_sentinel;
var m__51181 = m;
var ks__51182 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__51182))
{var m__51183 = cljs.core.get.call(null,m__51181,cljs.core.first.call(null,ks__51182),sentinel__51180);

if(cljs.core.truth_((sentinel__51180 === m__51183)))
{return not_found;
} else
{{
var G__51187 = sentinel__51180;
var G__51188 = m__51183;
var G__51189 = cljs.core.next.call(null,ks__51182);
sentinel__51180 = G__51187;
m__51181 = G__51188;
ks__51182 = G__51189;
continue;
}
}
} else
{return m__51181;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__51184.call(this,m,ks);
case  3 :
return get_in__51185.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__51190,v){
var vec__51191__51192 = p__51190;
var k__51193 = cljs.core.nth.call(null,vec__51191__51192,0,null);
var ks__51194 = cljs.core.nthnext.call(null,vec__51191__51192,1);

if(cljs.core.truth_(ks__51194))
{return cljs.core.assoc.call(null,m,k__51193,assoc_in.call(null,cljs.core.get.call(null,m,k__51193),ks__51194,v));
} else
{return cljs.core.assoc.call(null,m,k__51193,v);
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
var update_in__delegate = function (m,p__51195,f,args){
var vec__51196__51197 = p__51195;
var k__51198 = cljs.core.nth.call(null,vec__51196__51197,0,null);
var ks__51199 = cljs.core.nthnext.call(null,vec__51196__51197,1);

if(cljs.core.truth_(ks__51199))
{return cljs.core.assoc.call(null,m,k__51198,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__51198),ks__51199,f,args));
} else
{return cljs.core.assoc.call(null,m,k__51198,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__51198),args));
}
};
var update_in = function (m,p__51195,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__51195, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__51200){
var m = cljs.core.first(arglist__51200);
var p__51195 = cljs.core.first(cljs.core.next(arglist__51200));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51200)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__51200)));
return update_in__delegate.call(this, m, p__51195, f, args);
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
var this__51201 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__51234 = null;
var G__51234__51235 = (function (coll,k){
var this__51202 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__51234__51236 = (function (coll,k,not_found){
var this__51203 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__51234 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__51234__51235.call(this,coll,k);
case  3 :
return G__51234__51236.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51234;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__51204 = this;
var new_array__51205 = cljs.core.aclone.call(null,this__51204.array);

(new_array__51205[k] = v);
return (new cljs.core.Vector(this__51204.meta,new_array__51205));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__51238 = null;
var G__51238__51239 = (function (tsym51206,k){
var this__51208 = this;
var tsym51206__51209 = this;

var coll__51210 = tsym51206__51209;

return cljs.core._lookup.call(null,coll__51210,k);
});
var G__51238__51240 = (function (tsym51207,k,not_found){
var this__51211 = this;
var tsym51207__51212 = this;

var coll__51213 = tsym51207__51212;

return cljs.core._lookup.call(null,coll__51213,k,not_found);
});
G__51238 = function(tsym51207,k,not_found){
switch(arguments.length){
case  2 :
return G__51238__51239.call(this,tsym51207,k);
case  3 :
return G__51238__51240.call(this,tsym51207,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51238;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__51214 = this;
var new_array__51215 = cljs.core.aclone.call(null,this__51214.array);

new_array__51215.push(o);
return (new cljs.core.Vector(this__51214.meta,new_array__51215));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__51242 = null;
var G__51242__51243 = (function (v,f){
var this__51216 = this;
return cljs.core.ci_reduce.call(null,this__51216.array,f);
});
var G__51242__51244 = (function (v,f,start){
var this__51217 = this;
return cljs.core.ci_reduce.call(null,this__51217.array,f,start);
});
G__51242 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__51242__51243.call(this,v,f);
case  3 :
return G__51242__51244.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51242;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__51218 = this;
if(cljs.core.truth_((this__51218.array.length > 0)))
{var vector_seq__51219 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__51218.array.length)))
{return cljs.core.cons.call(null,(this__51218.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__51219.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__51220 = this;
return this__51220.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__51221 = this;
var count__51222 = this__51221.array.length;

if(cljs.core.truth_((count__51222 > 0)))
{return (this__51221.array[(count__51222 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__51223 = this;
if(cljs.core.truth_((this__51223.array.length > 0)))
{var new_array__51224 = cljs.core.aclone.call(null,this__51223.array);

new_array__51224.pop();
return (new cljs.core.Vector(this__51223.meta,new_array__51224));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__51225 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__51226 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__51227 = this;
return (new cljs.core.Vector(meta,this__51227.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__51228 = this;
return this__51228.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__51246 = null;
var G__51246__51247 = (function (coll,n){
var this__51229 = this;
if(cljs.core.truth_((function (){var and__3822__auto____51230 = (0 <= n);

if(cljs.core.truth_(and__3822__auto____51230))
{return (n < this__51229.array.length);
} else
{return and__3822__auto____51230;
}
})()))
{return (this__51229.array[n]);
} else
{return null;
}
});
var G__51246__51248 = (function (coll,n,not_found){
var this__51231 = this;
if(cljs.core.truth_((function (){var and__3822__auto____51232 = (0 <= n);

if(cljs.core.truth_(and__3822__auto____51232))
{return (n < this__51231.array.length);
} else
{return and__3822__auto____51232;
}
})()))
{return (this__51231.array[n]);
} else
{return not_found;
}
});
G__51246 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__51246__51247.call(this,coll,n);
case  3 :
return G__51246__51248.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51246;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__51233 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__51233.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__51250 = pv.cnt;

if(cljs.core.truth_((cnt__51250 < 32)))
{return 0;
} else
{return (((cnt__51250 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__51251 = level;
var ret__51252 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__51251)))
{return ret__51252;
} else
{var embed__51253 = ret__51252;
var r__51254 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___51255 = (r__51254[0] = embed__51253);

{
var G__51256 = (ll__51251 - 5);
var G__51257 = r__51254;
ll__51251 = G__51256;
ret__51252 = G__51257;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__51258 = cljs.core.aclone.call(null,parent);
var subidx__51259 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__51258[subidx__51259] = tailnode);
return ret__51258;
} else
{var temp__3971__auto____51260 = (parent[subidx__51259]);

if(cljs.core.truth_(temp__3971__auto____51260))
{var child__51261 = temp__3971__auto____51260;

var node_to_insert__51262 = push_tail.call(null,pv,(level - 5),child__51261,tailnode);
var ___51263 = (ret__51258[subidx__51259] = node_to_insert__51262);

return ret__51258;
} else
{var node_to_insert__51264 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___51265 = (ret__51258[subidx__51259] = node_to_insert__51264);

return ret__51258;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3822__auto____51266 = (0 <= i);

if(cljs.core.truth_(and__3822__auto____51266))
{return (i < pv.cnt);
} else
{return and__3822__auto____51266;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__51267 = pv.root;
var level__51268 = pv.shift;

while(true){
if(cljs.core.truth_((level__51268 > 0)))
{{
var G__51269 = (node__51267[((i >> level__51268) & 31)]);
var G__51270 = (level__51268 - 5);
node__51267 = G__51269;
level__51268 = G__51270;
continue;
}
} else
{return node__51267;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__51271 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__51271[(i & 31)] = val);
return ret__51271;
} else
{var subidx__51272 = ((i >> level) & 31);
var ___51273 = (ret__51271[subidx__51272] = do_assoc.call(null,pv,(level - 5),(node[subidx__51272]),i,val));

return ret__51271;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__51274 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__51275 = pop_tail.call(null,pv,(level - 5),(node[subidx__51274]));

if(cljs.core.truth_((function (){var and__3822__auto____51276 = (new_child__51275 === null);

if(cljs.core.truth_(and__3822__auto____51276))
{return (subidx__51274 === 0);
} else
{return and__3822__auto____51276;
}
})()))
{return null;
} else
{var ret__51277 = cljs.core.aclone.call(null,node);
var ___51278 = (ret__51277[subidx__51274] = new_child__51275);

return ret__51277;
}
} else
{if(cljs.core.truth_((subidx__51274 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__51279 = cljs.core.aclone.call(null,node);
var ___51280 = (ret__51279[subidx__51274] = null);

return ret__51279;
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
var this__51281 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__51321 = null;
var G__51321__51322 = (function (coll,k){
var this__51282 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__51321__51323 = (function (coll,k,not_found){
var this__51283 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__51321 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__51321__51322.call(this,coll,k);
case  3 :
return G__51321__51323.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51321;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__51284 = this;
if(cljs.core.truth_((function (){var and__3822__auto____51285 = (0 <= k);

if(cljs.core.truth_(and__3822__auto____51285))
{return (k < this__51284.cnt);
} else
{return and__3822__auto____51285;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__51286 = cljs.core.aclone.call(null,this__51284.tail);

(new_tail__51286[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__51284.meta,this__51284.cnt,this__51284.shift,this__51284.root,new_tail__51286));
} else
{return (new cljs.core.PersistentVector(this__51284.meta,this__51284.cnt,this__51284.shift,cljs.core.do_assoc.call(null,coll,this__51284.shift,this__51284.root,k,v),this__51284.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__51284.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__51284.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__51325 = null;
var G__51325__51326 = (function (tsym51287,k){
var this__51289 = this;
var tsym51287__51290 = this;

var coll__51291 = tsym51287__51290;

return cljs.core._lookup.call(null,coll__51291,k);
});
var G__51325__51327 = (function (tsym51288,k,not_found){
var this__51292 = this;
var tsym51288__51293 = this;

var coll__51294 = tsym51288__51293;

return cljs.core._lookup.call(null,coll__51294,k,not_found);
});
G__51325 = function(tsym51288,k,not_found){
switch(arguments.length){
case  2 :
return G__51325__51326.call(this,tsym51288,k);
case  3 :
return G__51325__51327.call(this,tsym51288,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51325;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__51295 = this;
if(cljs.core.truth_(((this__51295.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__51296 = cljs.core.aclone.call(null,this__51295.tail);

new_tail__51296.push(o);
return (new cljs.core.PersistentVector(this__51295.meta,(this__51295.cnt + 1),this__51295.shift,this__51295.root,new_tail__51296));
} else
{var root_overflow_QMARK___51297 = ((this__51295.cnt >> 5) > (1 << this__51295.shift));
var new_shift__51298 = (cljs.core.truth_(root_overflow_QMARK___51297)?(this__51295.shift + 5):this__51295.shift);
var new_root__51300 = (cljs.core.truth_(root_overflow_QMARK___51297)?(function (){var n_r__51299 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__51299[0] = this__51295.root);
(n_r__51299[1] = cljs.core.new_path.call(null,this__51295.shift,this__51295.tail));
return n_r__51299;
})():cljs.core.push_tail.call(null,coll,this__51295.shift,this__51295.root,this__51295.tail));

return (new cljs.core.PersistentVector(this__51295.meta,(this__51295.cnt + 1),new_shift__51298,new_root__51300,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__51329 = null;
var G__51329__51330 = (function (v,f){
var this__51301 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__51329__51331 = (function (v,f,start){
var this__51302 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__51329 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__51329__51330.call(this,v,f);
case  3 :
return G__51329__51331.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51329;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__51303 = this;
if(cljs.core.truth_((this__51303.cnt > 0)))
{var vector_seq__51304 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__51303.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__51304.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__51305 = this;
return this__51305.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__51306 = this;
if(cljs.core.truth_((this__51306.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__51306.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__51307 = this;
if(cljs.core.truth_((this__51307.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__51307.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__51307.meta);
} else
{if(cljs.core.truth_((1 < (this__51307.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__51307.meta,(this__51307.cnt - 1),this__51307.shift,this__51307.root,cljs.core.aclone.call(null,this__51307.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__51308 = cljs.core.array_for.call(null,coll,(this__51307.cnt - 2));
var nr__51309 = cljs.core.pop_tail.call(null,this__51307.shift,this__51307.root);
var new_root__51310 = (cljs.core.truth_((nr__51309 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__51309);
var cnt_1__51311 = (this__51307.cnt - 1);

if(cljs.core.truth_((function (){var and__3822__auto____51312 = (5 < this__51307.shift);

if(cljs.core.truth_(and__3822__auto____51312))
{return ((new_root__51310[1]) === null);
} else
{return and__3822__auto____51312;
}
})()))
{return (new cljs.core.PersistentVector(this__51307.meta,cnt_1__51311,(this__51307.shift - 5),(new_root__51310[0]),new_tail__51308));
} else
{return (new cljs.core.PersistentVector(this__51307.meta,cnt_1__51311,this__51307.shift,new_root__51310,new_tail__51308));
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
var this__51313 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__51314 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__51315 = this;
return (new cljs.core.PersistentVector(meta,this__51315.cnt,this__51315.shift,this__51315.root,this__51315.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__51316 = this;
return this__51316.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__51333 = null;
var G__51333__51334 = (function (coll,n){
var this__51317 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__51333__51335 = (function (coll,n,not_found){
var this__51318 = this;
if(cljs.core.truth_((function (){var and__3822__auto____51319 = (0 <= n);

if(cljs.core.truth_(and__3822__auto____51319))
{return (n < this__51318.cnt);
} else
{return and__3822__auto____51319;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__51333 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__51333__51334.call(this,coll,n);
case  3 :
return G__51333__51335.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51333;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__51320 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__51320.meta);
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
vector.cljs$lang$applyTo = (function (arglist__51337){
var args = cljs.core.seq( arglist__51337 );;
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
var this__51338 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__51366 = null;
var G__51366__51367 = (function (coll,k){
var this__51339 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__51366__51368 = (function (coll,k,not_found){
var this__51340 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__51366 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__51366__51367.call(this,coll,k);
case  3 :
return G__51366__51368.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51366;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__51341 = this;
var v_pos__51342 = (this__51341.start + key);

return (new cljs.core.Subvec(this__51341.meta,cljs.core._assoc.call(null,this__51341.v,v_pos__51342,val),this__51341.start,((this__51341.end > (v_pos__51342 + 1)) ? this__51341.end : (v_pos__51342 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__51370 = null;
var G__51370__51371 = (function (tsym51343,k){
var this__51345 = this;
var tsym51343__51346 = this;

var coll__51347 = tsym51343__51346;

return cljs.core._lookup.call(null,coll__51347,k);
});
var G__51370__51372 = (function (tsym51344,k,not_found){
var this__51348 = this;
var tsym51344__51349 = this;

var coll__51350 = tsym51344__51349;

return cljs.core._lookup.call(null,coll__51350,k,not_found);
});
G__51370 = function(tsym51344,k,not_found){
switch(arguments.length){
case  2 :
return G__51370__51371.call(this,tsym51344,k);
case  3 :
return G__51370__51372.call(this,tsym51344,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51370;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__51351 = this;
return (new cljs.core.Subvec(this__51351.meta,cljs.core._assoc_n.call(null,this__51351.v,this__51351.end,o),this__51351.start,(this__51351.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__51374 = null;
var G__51374__51375 = (function (coll,f){
var this__51352 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__51374__51376 = (function (coll,f,start){
var this__51353 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__51374 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__51374__51375.call(this,coll,f);
case  3 :
return G__51374__51376.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51374;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__51354 = this;
var subvec_seq__51355 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__51354.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__51354.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__51355.call(null,this__51354.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__51356 = this;
return (this__51356.end - this__51356.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__51357 = this;
return cljs.core._nth.call(null,this__51357.v,(this__51357.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__51358 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__51358.start,this__51358.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__51358.meta,this__51358.v,this__51358.start,(this__51358.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__51359 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__51360 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__51361 = this;
return (new cljs.core.Subvec(meta,this__51361.v,this__51361.start,this__51361.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__51362 = this;
return this__51362.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__51378 = null;
var G__51378__51379 = (function (coll,n){
var this__51363 = this;
return cljs.core._nth.call(null,this__51363.v,(this__51363.start + n));
});
var G__51378__51380 = (function (coll,n,not_found){
var this__51364 = this;
return cljs.core._nth.call(null,this__51364.v,(this__51364.start + n),not_found);
});
G__51378 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__51378__51379.call(this,coll,n);
case  3 :
return G__51378__51380.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51378;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__51365 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__51365.meta);
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
var subvec__51382 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__51383 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__51382.call(this,v,start);
case  3 :
return subvec__51383.call(this,v,start,end);
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
var this__51385 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__51386 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__51387 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__51388 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__51388.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__51389 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__51390 = this;
return cljs.core._first.call(null,this__51390.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__51391 = this;
var temp__3971__auto____51392 = cljs.core.next.call(null,this__51391.front);

if(cljs.core.truth_(temp__3971__auto____51392))
{var f1__51393 = temp__3971__auto____51392;

return (new cljs.core.PersistentQueueSeq(this__51391.meta,f1__51393,this__51391.rear));
} else
{if(cljs.core.truth_((this__51391.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__51391.meta,this__51391.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__51394 = this;
return this__51394.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__51395 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__51395.front,this__51395.rear));
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
var this__51396 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__51397 = this;
if(cljs.core.truth_(this__51397.front))
{return (new cljs.core.PersistentQueue(this__51397.meta,(this__51397.count + 1),this__51397.front,cljs.core.conj.call(null,(function (){var or__3824__auto____51398 = this__51397.rear;

if(cljs.core.truth_(or__3824__auto____51398))
{return or__3824__auto____51398;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__51397.meta,(this__51397.count + 1),cljs.core.conj.call(null,this__51397.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__51399 = this;
var rear__51400 = cljs.core.seq.call(null,this__51399.rear);

if(cljs.core.truth_((function (){var or__3824__auto____51401 = this__51399.front;

if(cljs.core.truth_(or__3824__auto____51401))
{return or__3824__auto____51401;
} else
{return rear__51400;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__51399.front,cljs.core.seq.call(null,rear__51400)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__51402 = this;
return this__51402.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__51403 = this;
return cljs.core._first.call(null,this__51403.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__51404 = this;
if(cljs.core.truth_(this__51404.front))
{var temp__3971__auto____51405 = cljs.core.next.call(null,this__51404.front);

if(cljs.core.truth_(temp__3971__auto____51405))
{var f1__51406 = temp__3971__auto____51405;

return (new cljs.core.PersistentQueue(this__51404.meta,(this__51404.count - 1),f1__51406,this__51404.rear));
} else
{return (new cljs.core.PersistentQueue(this__51404.meta,(this__51404.count - 1),cljs.core.seq.call(null,this__51404.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__51407 = this;
return cljs.core.first.call(null,this__51407.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__51408 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__51409 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__51410 = this;
return (new cljs.core.PersistentQueue(meta,this__51410.count,this__51410.front,this__51410.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__51411 = this;
return this__51411.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__51412 = this;
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
var this__51413 = this;
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
var len__51414 = array.length;

var i__51415 = 0;

while(true){
if(cljs.core.truth_((i__51415 < len__51414)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__51415]))))
{return i__51415;
} else
{{
var G__51416 = (i__51415 + incr);
i__51415 = G__51416;
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
var obj_map_contains_key_QMARK___51418 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___51419 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3822__auto____51417 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3822__auto____51417))
{return strobj.hasOwnProperty(k);
} else
{return and__3822__auto____51417;
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
return obj_map_contains_key_QMARK___51418.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___51419.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__51422 = cljs.core.hash.call(null,a);
var b__51423 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__51422 < b__51423)))
{return -1;
} else
{if(cljs.core.truth_((a__51422 > b__51423)))
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
var this__51424 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__51451 = null;
var G__51451__51452 = (function (coll,k){
var this__51425 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__51451__51453 = (function (coll,k,not_found){
var this__51426 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__51426.strobj,(this__51426.strobj[k]),not_found);
});
G__51451 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__51451__51452.call(this,coll,k);
case  3 :
return G__51451__51453.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51451;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__51427 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__51428 = goog.object.clone.call(null,this__51427.strobj);
var overwrite_QMARK___51429 = new_strobj__51428.hasOwnProperty(k);

(new_strobj__51428[k] = v);
if(cljs.core.truth_(overwrite_QMARK___51429))
{return (new cljs.core.ObjMap(this__51427.meta,this__51427.keys,new_strobj__51428));
} else
{var new_keys__51430 = cljs.core.aclone.call(null,this__51427.keys);

new_keys__51430.push(k);
return (new cljs.core.ObjMap(this__51427.meta,new_keys__51430,new_strobj__51428));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__51427.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__51431 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__51431.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__51455 = null;
var G__51455__51456 = (function (tsym51432,k){
var this__51434 = this;
var tsym51432__51435 = this;

var coll__51436 = tsym51432__51435;

return cljs.core._lookup.call(null,coll__51436,k);
});
var G__51455__51457 = (function (tsym51433,k,not_found){
var this__51437 = this;
var tsym51433__51438 = this;

var coll__51439 = tsym51433__51438;

return cljs.core._lookup.call(null,coll__51439,k,not_found);
});
G__51455 = function(tsym51433,k,not_found){
switch(arguments.length){
case  2 :
return G__51455__51456.call(this,tsym51433,k);
case  3 :
return G__51455__51457.call(this,tsym51433,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51455;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__51440 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__51441 = this;
if(cljs.core.truth_((this__51441.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__51421_SHARP_){
return cljs.core.vector.call(null,p1__51421_SHARP_,(this__51441.strobj[p1__51421_SHARP_]));
}),this__51441.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__51442 = this;
return this__51442.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__51443 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__51444 = this;
return (new cljs.core.ObjMap(meta,this__51444.keys,this__51444.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__51445 = this;
return this__51445.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__51446 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__51446.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__51447 = this;
if(cljs.core.truth_((function (){var and__3822__auto____51448 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3822__auto____51448))
{return this__51447.strobj.hasOwnProperty(k);
} else
{return and__3822__auto____51448;
}
})()))
{var new_keys__51449 = cljs.core.aclone.call(null,this__51447.keys);
var new_strobj__51450 = goog.object.clone.call(null,this__51447.strobj);

new_keys__51449.splice(cljs.core.scan_array.call(null,1,k,new_keys__51449),1);
cljs.core.js_delete.call(null,new_strobj__51450,k);
return (new cljs.core.ObjMap(this__51447.meta,new_keys__51449,new_strobj__51450));
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
var this__51460 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__51498 = null;
var G__51498__51499 = (function (coll,k){
var this__51461 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__51498__51500 = (function (coll,k,not_found){
var this__51462 = this;
var bucket__51463 = (this__51462.hashobj[cljs.core.hash.call(null,k)]);
var i__51464 = (cljs.core.truth_(bucket__51463)?cljs.core.scan_array.call(null,2,k,bucket__51463):null);

if(cljs.core.truth_(i__51464))
{return (bucket__51463[(i__51464 + 1)]);
} else
{return not_found;
}
});
G__51498 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__51498__51499.call(this,coll,k);
case  3 :
return G__51498__51500.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51498;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__51465 = this;
var h__51466 = cljs.core.hash.call(null,k);
var bucket__51467 = (this__51465.hashobj[h__51466]);

if(cljs.core.truth_(bucket__51467))
{var new_bucket__51468 = cljs.core.aclone.call(null,bucket__51467);
var new_hashobj__51469 = goog.object.clone.call(null,this__51465.hashobj);

(new_hashobj__51469[h__51466] = new_bucket__51468);
var temp__3971__auto____51470 = cljs.core.scan_array.call(null,2,k,new_bucket__51468);

if(cljs.core.truth_(temp__3971__auto____51470))
{var i__51471 = temp__3971__auto____51470;

(new_bucket__51468[(i__51471 + 1)] = v);
return (new cljs.core.HashMap(this__51465.meta,this__51465.count,new_hashobj__51469));
} else
{new_bucket__51468.push(k,v);
return (new cljs.core.HashMap(this__51465.meta,(this__51465.count + 1),new_hashobj__51469));
}
} else
{var new_hashobj__51472 = goog.object.clone.call(null,this__51465.hashobj);

(new_hashobj__51472[h__51466] = [k,v]);
return (new cljs.core.HashMap(this__51465.meta,(this__51465.count + 1),new_hashobj__51472));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__51473 = this;
var bucket__51474 = (this__51473.hashobj[cljs.core.hash.call(null,k)]);
var i__51475 = (cljs.core.truth_(bucket__51474)?cljs.core.scan_array.call(null,2,k,bucket__51474):null);

if(cljs.core.truth_(i__51475))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__51502 = null;
var G__51502__51503 = (function (tsym51476,k){
var this__51478 = this;
var tsym51476__51479 = this;

var coll__51480 = tsym51476__51479;

return cljs.core._lookup.call(null,coll__51480,k);
});
var G__51502__51504 = (function (tsym51477,k,not_found){
var this__51481 = this;
var tsym51477__51482 = this;

var coll__51483 = tsym51477__51482;

return cljs.core._lookup.call(null,coll__51483,k,not_found);
});
G__51502 = function(tsym51477,k,not_found){
switch(arguments.length){
case  2 :
return G__51502__51503.call(this,tsym51477,k);
case  3 :
return G__51502__51504.call(this,tsym51477,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51502;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__51484 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__51485 = this;
if(cljs.core.truth_((this__51485.count > 0)))
{var hashes__51486 = cljs.core.js_keys.call(null,this__51485.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__51459_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__51485.hashobj[p1__51459_SHARP_])));
}),hashes__51486);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__51487 = this;
return this__51487.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__51488 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__51489 = this;
return (new cljs.core.HashMap(meta,this__51489.count,this__51489.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__51490 = this;
return this__51490.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__51491 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__51491.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__51492 = this;
var h__51493 = cljs.core.hash.call(null,k);
var bucket__51494 = (this__51492.hashobj[h__51493]);
var i__51495 = (cljs.core.truth_(bucket__51494)?cljs.core.scan_array.call(null,2,k,bucket__51494):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__51495)))
{return coll;
} else
{var new_hashobj__51496 = goog.object.clone.call(null,this__51492.hashobj);

if(cljs.core.truth_((3 > bucket__51494.length)))
{cljs.core.js_delete.call(null,new_hashobj__51496,h__51493);
} else
{var new_bucket__51497 = cljs.core.aclone.call(null,bucket__51494);

new_bucket__51497.splice(i__51495,2);
(new_hashobj__51496[h__51493] = new_bucket__51497);
}
return (new cljs.core.HashMap(this__51492.meta,(this__51492.count - 1),new_hashobj__51496));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__51506 = ks.length;

var i__51507 = 0;
var out__51508 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__51507 < len__51506)))
{{
var G__51509 = (i__51507 + 1);
var G__51510 = cljs.core.assoc.call(null,out__51508,(ks[i__51507]),(vs[i__51507]));
i__51507 = G__51509;
out__51508 = G__51510;
continue;
}
} else
{return out__51508;
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
var in$__51511 = cljs.core.seq.call(null,keyvals);
var out__51512 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__51511))
{{
var G__51513 = cljs.core.nnext.call(null,in$__51511);
var G__51514 = cljs.core.assoc.call(null,out__51512,cljs.core.first.call(null,in$__51511),cljs.core.second.call(null,in$__51511));
in$__51511 = G__51513;
out__51512 = G__51514;
continue;
}
} else
{return out__51512;
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
hash_map.cljs$lang$applyTo = (function (arglist__51515){
var keyvals = cljs.core.seq( arglist__51515 );;
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
{return cljs.core.reduce.call(null,(function (p1__51516_SHARP_,p2__51517_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____51518 = p1__51516_SHARP_;

if(cljs.core.truth_(or__3824__auto____51518))
{return or__3824__auto____51518;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__51517_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__51519){
var maps = cljs.core.seq( arglist__51519 );;
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
{var merge_entry__51522 = (function (m,e){
var k__51520 = cljs.core.first.call(null,e);
var v__51521 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__51520)))
{return cljs.core.assoc.call(null,m,k__51520,f.call(null,cljs.core.get.call(null,m,k__51520),v__51521));
} else
{return cljs.core.assoc.call(null,m,k__51520,v__51521);
}
});
var merge2__51524 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__51522,(function (){var or__3824__auto____51523 = m1;

if(cljs.core.truth_(or__3824__auto____51523))
{return or__3824__auto____51523;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__51524,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__51525){
var f = cljs.core.first(arglist__51525);
var maps = cljs.core.rest(arglist__51525);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__51527 = cljs.core.ObjMap.fromObject([],{});
var keys__51528 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__51528))
{var key__51529 = cljs.core.first.call(null,keys__51528);
var entry__51530 = cljs.core.get.call(null,map,key__51529,"\uFDD0'user/not-found");

{
var G__51531 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__51530,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__51527,key__51529,entry__51530):ret__51527);
var G__51532 = cljs.core.next.call(null,keys__51528);
ret__51527 = G__51531;
keys__51528 = G__51532;
continue;
}
} else
{return ret__51527;
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
var this__51533 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__51554 = null;
var G__51554__51555 = (function (coll,v){
var this__51534 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__51554__51556 = (function (coll,v,not_found){
var this__51535 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__51535.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__51554 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__51554__51555.call(this,coll,v);
case  3 :
return G__51554__51556.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51554;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__51558 = null;
var G__51558__51559 = (function (tsym51536,k){
var this__51538 = this;
var tsym51536__51539 = this;

var coll__51540 = tsym51536__51539;

return cljs.core._lookup.call(null,coll__51540,k);
});
var G__51558__51560 = (function (tsym51537,k,not_found){
var this__51541 = this;
var tsym51537__51542 = this;

var coll__51543 = tsym51537__51542;

return cljs.core._lookup.call(null,coll__51543,k,not_found);
});
G__51558 = function(tsym51537,k,not_found){
switch(arguments.length){
case  2 :
return G__51558__51559.call(this,tsym51537,k);
case  3 :
return G__51558__51560.call(this,tsym51537,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51558;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__51544 = this;
return (new cljs.core.Set(this__51544.meta,cljs.core.assoc.call(null,this__51544.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__51545 = this;
return cljs.core.keys.call(null,this__51545.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__51546 = this;
return (new cljs.core.Set(this__51546.meta,cljs.core.dissoc.call(null,this__51546.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__51547 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__51548 = this;
var and__3822__auto____51549 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3822__auto____51549))
{var and__3822__auto____51550 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3822__auto____51550))
{return cljs.core.every_QMARK_.call(null,(function (p1__51526_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__51526_SHARP_);
}),other);
} else
{return and__3822__auto____51550;
}
} else
{return and__3822__auto____51549;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__51551 = this;
return (new cljs.core.Set(meta,this__51551.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__51552 = this;
return this__51552.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__51553 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__51553.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__51563 = cljs.core.seq.call(null,coll);
var out__51564 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__51563))))
{{
var G__51565 = cljs.core.rest.call(null,in$__51563);
var G__51566 = cljs.core.conj.call(null,out__51564,cljs.core.first.call(null,in$__51563));
in$__51563 = G__51565;
out__51564 = G__51566;
continue;
}
} else
{return out__51564;
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
{var n__51567 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____51568 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3971__auto____51568))
{var e__51569 = temp__3971__auto____51568;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__51569));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__51567,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__51562_SHARP_){
var temp__3971__auto____51570 = cljs.core.find.call(null,smap,p1__51562_SHARP_);

if(cljs.core.truth_(temp__3971__auto____51570))
{var e__51571 = temp__3971__auto____51570;

return cljs.core.second.call(null,e__51571);
} else
{return p1__51562_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__51579 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__51572,seen){
while(true){
var vec__51573__51574 = p__51572;
var f__51575 = cljs.core.nth.call(null,vec__51573__51574,0,null);
var xs__51576 = vec__51573__51574;

var temp__3974__auto____51577 = cljs.core.seq.call(null,xs__51576);

if(cljs.core.truth_(temp__3974__auto____51577))
{var s__51578 = temp__3974__auto____51577;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__51575)))
{{
var G__51580 = cljs.core.rest.call(null,s__51578);
var G__51581 = seen;
p__51572 = G__51580;
seen = G__51581;
continue;
}
} else
{return cljs.core.cons.call(null,f__51575,step.call(null,cljs.core.rest.call(null,s__51578),cljs.core.conj.call(null,seen,f__51575)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__51579.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__51582 = cljs.core.PersistentVector.fromArray([]);
var s__51583 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__51583)))
{{
var G__51584 = cljs.core.conj.call(null,ret__51582,cljs.core.first.call(null,s__51583));
var G__51585 = cljs.core.next.call(null,s__51583);
ret__51582 = G__51584;
s__51583 = G__51585;
continue;
}
} else
{return cljs.core.seq.call(null,ret__51582);
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
{if(cljs.core.truth_((function (){var or__3824__auto____51586 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3824__auto____51586))
{return or__3824__auto____51586;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__51587 = x.lastIndexOf("/");

if(cljs.core.truth_((i__51587 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__51587 + 1));
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
if(cljs.core.truth_((function (){var or__3824__auto____51588 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3824__auto____51588))
{return or__3824__auto____51588;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__51589 = x.lastIndexOf("/");

if(cljs.core.truth_((i__51589 > -1)))
{return cljs.core.subs.call(null,x,2,i__51589);
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
var map__51592 = cljs.core.ObjMap.fromObject([],{});
var ks__51593 = cljs.core.seq.call(null,keys);
var vs__51594 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3822__auto____51595 = ks__51593;

if(cljs.core.truth_(and__3822__auto____51595))
{return vs__51594;
} else
{return and__3822__auto____51595;
}
})()))
{{
var G__51596 = cljs.core.assoc.call(null,map__51592,cljs.core.first.call(null,ks__51593),cljs.core.first.call(null,vs__51594));
var G__51597 = cljs.core.next.call(null,ks__51593);
var G__51598 = cljs.core.next.call(null,vs__51594);
map__51592 = G__51596;
ks__51593 = G__51597;
vs__51594 = G__51598;
continue;
}
} else
{return map__51592;
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
var max_key__51601 = (function (k,x){
return x;
});
var max_key__51602 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__51603 = (function() { 
var G__51605__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__51590_SHARP_,p2__51591_SHARP_){
return max_key.call(null,k,p1__51590_SHARP_,p2__51591_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__51605 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__51605__delegate.call(this, k, x, y, more);
};
G__51605.cljs$lang$maxFixedArity = 3;
G__51605.cljs$lang$applyTo = (function (arglist__51606){
var k = cljs.core.first(arglist__51606);
var x = cljs.core.first(cljs.core.next(arglist__51606));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51606)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__51606)));
return G__51605__delegate.call(this, k, x, y, more);
});
return G__51605;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__51601.call(this,k,x);
case  3 :
return max_key__51602.call(this,k,x,y);
default:
return max_key__51603.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__51603.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__51607 = (function (k,x){
return x;
});
var min_key__51608 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__51609 = (function() { 
var G__51611__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__51599_SHARP_,p2__51600_SHARP_){
return min_key.call(null,k,p1__51599_SHARP_,p2__51600_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__51611 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__51611__delegate.call(this, k, x, y, more);
};
G__51611.cljs$lang$maxFixedArity = 3;
G__51611.cljs$lang$applyTo = (function (arglist__51612){
var k = cljs.core.first(arglist__51612);
var x = cljs.core.first(cljs.core.next(arglist__51612));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51612)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__51612)));
return G__51611__delegate.call(this, k, x, y, more);
});
return G__51611;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__51607.call(this,k,x);
case  3 :
return min_key__51608.call(this,k,x,y);
default:
return min_key__51609.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__51609.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__51615 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__51616 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____51613 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____51613))
{var s__51614 = temp__3974__auto____51613;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__51614),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__51614)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__51615.call(this,n,step);
case  3 :
return partition_all__51616.call(this,n,step,coll);
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
var temp__3974__auto____51618 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____51618))
{var s__51619 = temp__3974__auto____51618;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__51619))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__51619),take_while.call(null,pred,cljs.core.rest.call(null,s__51619)));
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
var this__51620 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__51621 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__51637 = null;
var G__51637__51638 = (function (rng,f){
var this__51622 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__51637__51639 = (function (rng,f,s){
var this__51623 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__51637 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__51637__51638.call(this,rng,f);
case  3 :
return G__51637__51639.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51637;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__51624 = this;
var comp__51625 = (cljs.core.truth_((this__51624.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__51625.call(null,this__51624.start,this__51624.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__51626 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__51626.end - this__51626.start) / this__51626.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__51627 = this;
return this__51627.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__51628 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__51628.meta,(this__51628.start + this__51628.step),this__51628.end,this__51628.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__51629 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__51630 = this;
return (new cljs.core.Range(meta,this__51630.start,this__51630.end,this__51630.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__51631 = this;
return this__51631.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__51641 = null;
var G__51641__51642 = (function (rng,n){
var this__51632 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__51632.start + (n * this__51632.step));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____51633 = (this__51632.start > this__51632.end);

if(cljs.core.truth_(and__3822__auto____51633))
{return cljs.core._EQ_.call(null,this__51632.step,0);
} else
{return and__3822__auto____51633;
}
})()))
{return this__51632.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__51641__51643 = (function (rng,n,not_found){
var this__51634 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__51634.start + (n * this__51634.step));
} else
{if(cljs.core.truth_((function (){var and__3822__auto____51635 = (this__51634.start > this__51634.end);

if(cljs.core.truth_(and__3822__auto____51635))
{return cljs.core._EQ_.call(null,this__51634.step,0);
} else
{return and__3822__auto____51635;
}
})()))
{return this__51634.start;
} else
{return not_found;
}
}
});
G__51641 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__51641__51642.call(this,rng,n);
case  3 :
return G__51641__51643.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__51641;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__51636 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__51636.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__51645 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__51646 = (function (end){
return range.call(null,0,end,1);
});
var range__51647 = (function (start,end){
return range.call(null,start,end,1);
});
var range__51648 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__51645.call(this);
case  1 :
return range__51646.call(this,start);
case  2 :
return range__51647.call(this,start,end);
case  3 :
return range__51648.call(this,start,end,step);
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
var temp__3974__auto____51650 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____51650))
{var s__51651 = temp__3974__auto____51650;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__51651),take_nth.call(null,n,cljs.core.drop.call(null,n,s__51651)));
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
var temp__3974__auto____51653 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____51653))
{var s__51654 = temp__3974__auto____51653;

var fst__51655 = cljs.core.first.call(null,s__51654);
var fv__51656 = f.call(null,fst__51655);
var run__51657 = cljs.core.cons.call(null,fst__51655,cljs.core.take_while.call(null,(function (p1__51652_SHARP_){
return cljs.core._EQ_.call(null,fv__51656,f.call(null,p1__51652_SHARP_));
}),cljs.core.next.call(null,s__51654)));

return cljs.core.cons.call(null,run__51657,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__51657),s__51654))));
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
var reductions__51672 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____51668 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3971__auto____51668))
{var s__51669 = temp__3971__auto____51668;

return reductions.call(null,f,cljs.core.first.call(null,s__51669),cljs.core.rest.call(null,s__51669));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__51673 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____51670 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3974__auto____51670))
{var s__51671 = temp__3974__auto____51670;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__51671)),cljs.core.rest.call(null,s__51671));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__51672.call(this,f,init);
case  3 :
return reductions__51673.call(this,f,init,coll);
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
var juxt__51676 = (function (f){
return (function() {
var G__51681 = null;
var G__51681__51682 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__51681__51683 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__51681__51684 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__51681__51685 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__51681__51686 = (function() { 
var G__51688__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__51688 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__51688__delegate.call(this, x, y, z, args);
};
G__51688.cljs$lang$maxFixedArity = 3;
G__51688.cljs$lang$applyTo = (function (arglist__51689){
var x = cljs.core.first(arglist__51689);
var y = cljs.core.first(cljs.core.next(arglist__51689));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51689)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__51689)));
return G__51688__delegate.call(this, x, y, z, args);
});
return G__51688;
})()
;
G__51681 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__51681__51682.call(this);
case  1 :
return G__51681__51683.call(this,x);
case  2 :
return G__51681__51684.call(this,x,y);
case  3 :
return G__51681__51685.call(this,x,y,z);
default:
return G__51681__51686.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__51681.cljs$lang$maxFixedArity = 3;
G__51681.cljs$lang$applyTo = G__51681__51686.cljs$lang$applyTo;
return G__51681;
})()
});
var juxt__51677 = (function (f,g){
return (function() {
var G__51690 = null;
var G__51690__51691 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__51690__51692 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__51690__51693 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__51690__51694 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__51690__51695 = (function() { 
var G__51697__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__51697 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__51697__delegate.call(this, x, y, z, args);
};
G__51697.cljs$lang$maxFixedArity = 3;
G__51697.cljs$lang$applyTo = (function (arglist__51698){
var x = cljs.core.first(arglist__51698);
var y = cljs.core.first(cljs.core.next(arglist__51698));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51698)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__51698)));
return G__51697__delegate.call(this, x, y, z, args);
});
return G__51697;
})()
;
G__51690 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__51690__51691.call(this);
case  1 :
return G__51690__51692.call(this,x);
case  2 :
return G__51690__51693.call(this,x,y);
case  3 :
return G__51690__51694.call(this,x,y,z);
default:
return G__51690__51695.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__51690.cljs$lang$maxFixedArity = 3;
G__51690.cljs$lang$applyTo = G__51690__51695.cljs$lang$applyTo;
return G__51690;
})()
});
var juxt__51678 = (function (f,g,h){
return (function() {
var G__51699 = null;
var G__51699__51700 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__51699__51701 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__51699__51702 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__51699__51703 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__51699__51704 = (function() { 
var G__51706__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__51706 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__51706__delegate.call(this, x, y, z, args);
};
G__51706.cljs$lang$maxFixedArity = 3;
G__51706.cljs$lang$applyTo = (function (arglist__51707){
var x = cljs.core.first(arglist__51707);
var y = cljs.core.first(cljs.core.next(arglist__51707));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51707)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__51707)));
return G__51706__delegate.call(this, x, y, z, args);
});
return G__51706;
})()
;
G__51699 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__51699__51700.call(this);
case  1 :
return G__51699__51701.call(this,x);
case  2 :
return G__51699__51702.call(this,x,y);
case  3 :
return G__51699__51703.call(this,x,y,z);
default:
return G__51699__51704.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__51699.cljs$lang$maxFixedArity = 3;
G__51699.cljs$lang$applyTo = G__51699__51704.cljs$lang$applyTo;
return G__51699;
})()
});
var juxt__51679 = (function() { 
var G__51708__delegate = function (f,g,h,fs){
var fs__51675 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__51709 = null;
var G__51709__51710 = (function (){
return cljs.core.reduce.call(null,(function (p1__51658_SHARP_,p2__51659_SHARP_){
return cljs.core.conj.call(null,p1__51658_SHARP_,p2__51659_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__51675);
});
var G__51709__51711 = (function (x){
return cljs.core.reduce.call(null,(function (p1__51660_SHARP_,p2__51661_SHARP_){
return cljs.core.conj.call(null,p1__51660_SHARP_,p2__51661_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__51675);
});
var G__51709__51712 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__51662_SHARP_,p2__51663_SHARP_){
return cljs.core.conj.call(null,p1__51662_SHARP_,p2__51663_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__51675);
});
var G__51709__51713 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__51664_SHARP_,p2__51665_SHARP_){
return cljs.core.conj.call(null,p1__51664_SHARP_,p2__51665_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__51675);
});
var G__51709__51714 = (function() { 
var G__51716__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__51666_SHARP_,p2__51667_SHARP_){
return cljs.core.conj.call(null,p1__51666_SHARP_,cljs.core.apply.call(null,p2__51667_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__51675);
};
var G__51716 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__51716__delegate.call(this, x, y, z, args);
};
G__51716.cljs$lang$maxFixedArity = 3;
G__51716.cljs$lang$applyTo = (function (arglist__51717){
var x = cljs.core.first(arglist__51717);
var y = cljs.core.first(cljs.core.next(arglist__51717));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51717)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__51717)));
return G__51716__delegate.call(this, x, y, z, args);
});
return G__51716;
})()
;
G__51709 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__51709__51710.call(this);
case  1 :
return G__51709__51711.call(this,x);
case  2 :
return G__51709__51712.call(this,x,y);
case  3 :
return G__51709__51713.call(this,x,y,z);
default:
return G__51709__51714.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__51709.cljs$lang$maxFixedArity = 3;
G__51709.cljs$lang$applyTo = G__51709__51714.cljs$lang$applyTo;
return G__51709;
})()
};
var G__51708 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__51708__delegate.call(this, f, g, h, fs);
};
G__51708.cljs$lang$maxFixedArity = 3;
G__51708.cljs$lang$applyTo = (function (arglist__51718){
var f = cljs.core.first(arglist__51718);
var g = cljs.core.first(cljs.core.next(arglist__51718));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51718)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__51718)));
return G__51708__delegate.call(this, f, g, h, fs);
});
return G__51708;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__51676.call(this,f);
case  2 :
return juxt__51677.call(this,f,g);
case  3 :
return juxt__51678.call(this,f,g,h);
default:
return juxt__51679.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__51679.cljs$lang$applyTo;
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
var dorun__51720 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__51723 = cljs.core.next.call(null,coll);
coll = G__51723;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__51721 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____51719 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3822__auto____51719))
{return (n > 0);
} else
{return and__3822__auto____51719;
}
})()))
{{
var G__51724 = (n - 1);
var G__51725 = cljs.core.next.call(null,coll);
n = G__51724;
coll = G__51725;
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
return dorun__51720.call(this,n);
case  2 :
return dorun__51721.call(this,n,coll);
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
var doall__51726 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__51727 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__51726.call(this,n);
case  2 :
return doall__51727.call(this,n,coll);
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
var matches__51729 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__51729),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__51729),1)))
{return cljs.core.first.call(null,matches__51729);
} else
{return cljs.core.vec.call(null,matches__51729);
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
var matches__51730 = re.exec(s);

if(cljs.core.truth_((matches__51730 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__51730),1)))
{return cljs.core.first.call(null,matches__51730);
} else
{return cljs.core.vec.call(null,matches__51730);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__51731 = cljs.core.re_find.call(null,re,s);
var match_idx__51732 = s.search(re);
var match_str__51733 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__51731))?cljs.core.first.call(null,match_data__51731):match_data__51731);
var post_match__51734 = cljs.core.subs.call(null,s,(match_idx__51732 + cljs.core.count.call(null,match_str__51733)));

if(cljs.core.truth_(match_data__51731))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__51731,re_seq.call(null,re,post_match__51734));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__51736__51737 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___51738 = cljs.core.nth.call(null,vec__51736__51737,0,null);
var flags__51739 = cljs.core.nth.call(null,vec__51736__51737,1,null);
var pattern__51740 = cljs.core.nth.call(null,vec__51736__51737,2,null);

return (new RegExp(pattern__51740,flags__51739));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__51735_SHARP_){
return print_one.call(null,p1__51735_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____51741 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3822__auto____51741))
{var and__3822__auto____51745 = (function (){var x__451__auto____51742 = obj;

if(cljs.core.truth_((function (){var and__3822__auto____51743 = x__451__auto____51742;

if(cljs.core.truth_(and__3822__auto____51743))
{var and__3822__auto____51744 = x__451__auto____51742.cljs$core$IMeta$;

if(cljs.core.truth_(and__3822__auto____51744))
{return cljs.core.not.call(null,x__451__auto____51742.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3822__auto____51744;
}
} else
{return and__3822__auto____51743;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____51742);
}
})();

if(cljs.core.truth_(and__3822__auto____51745))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____51745;
}
} else
{return and__3822__auto____51741;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____51746 = obj;

if(cljs.core.truth_((function (){var and__3822__auto____51747 = x__451__auto____51746;

if(cljs.core.truth_(and__3822__auto____51747))
{var and__3822__auto____51748 = x__451__auto____51746.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3822__auto____51748))
{return cljs.core.not.call(null,x__451__auto____51746.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3822__auto____51748;
}
} else
{return and__3822__auto____51747;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____51746);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__51749 = cljs.core.first.call(null,objs);
var sb__51750 = (new goog.string.StringBuffer());

var G__51751__51752 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__51751__51752))
{var obj__51753 = cljs.core.first.call(null,G__51751__51752);
var G__51751__51754 = G__51751__51752;

while(true){
if(cljs.core.truth_((obj__51753 === first_obj__51749)))
{} else
{sb__51750.append(" ");
}
var G__51755__51756 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__51753,opts));

if(cljs.core.truth_(G__51755__51756))
{var string__51757 = cljs.core.first.call(null,G__51755__51756);
var G__51755__51758 = G__51755__51756;

while(true){
sb__51750.append(string__51757);
var temp__3974__auto____51759 = cljs.core.next.call(null,G__51755__51758);

if(cljs.core.truth_(temp__3974__auto____51759))
{var G__51755__51760 = temp__3974__auto____51759;

{
var G__51763 = cljs.core.first.call(null,G__51755__51760);
var G__51764 = G__51755__51760;
string__51757 = G__51763;
G__51755__51758 = G__51764;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____51761 = cljs.core.next.call(null,G__51751__51754);

if(cljs.core.truth_(temp__3974__auto____51761))
{var G__51751__51762 = temp__3974__auto____51761;

{
var G__51765 = cljs.core.first.call(null,G__51751__51762);
var G__51766 = G__51751__51762;
obj__51753 = G__51765;
G__51751__51754 = G__51766;
continue;
}
} else
{}
break;
}
} else
{}
return sb__51750;
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
var sb__51767 = cljs.core.pr_sb.call(null,objs,opts);

sb__51767.append("\n");
return cljs.core.str.call(null,sb__51767);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__51768 = cljs.core.first.call(null,objs);

var G__51769__51770 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__51769__51770))
{var obj__51771 = cljs.core.first.call(null,G__51769__51770);
var G__51769__51772 = G__51769__51770;

while(true){
if(cljs.core.truth_((obj__51771 === first_obj__51768)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__51773__51774 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__51771,opts));

if(cljs.core.truth_(G__51773__51774))
{var string__51775 = cljs.core.first.call(null,G__51773__51774);
var G__51773__51776 = G__51773__51774;

while(true){
cljs.core.string_print.call(null,string__51775);
var temp__3974__auto____51777 = cljs.core.next.call(null,G__51773__51776);

if(cljs.core.truth_(temp__3974__auto____51777))
{var G__51773__51778 = temp__3974__auto____51777;

{
var G__51781 = cljs.core.first.call(null,G__51773__51778);
var G__51782 = G__51773__51778;
string__51775 = G__51781;
G__51773__51776 = G__51782;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____51779 = cljs.core.next.call(null,G__51769__51772);

if(cljs.core.truth_(temp__3974__auto____51779))
{var G__51769__51780 = temp__3974__auto____51779;

{
var G__51783 = cljs.core.first.call(null,G__51769__51780);
var G__51784 = G__51769__51780;
obj__51771 = G__51783;
G__51769__51772 = G__51784;
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
pr_str.cljs$lang$applyTo = (function (arglist__51785){
var objs = cljs.core.seq( arglist__51785 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__51786){
var objs = cljs.core.seq( arglist__51786 );;
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
pr.cljs$lang$applyTo = (function (arglist__51787){
var objs = cljs.core.seq( arglist__51787 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__51788){
var objs = cljs.core.seq( arglist__51788 );;
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
print_str.cljs$lang$applyTo = (function (arglist__51789){
var objs = cljs.core.seq( arglist__51789 );;
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
println.cljs$lang$applyTo = (function (arglist__51790){
var objs = cljs.core.seq( arglist__51790 );;
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
println_str.cljs$lang$applyTo = (function (arglist__51791){
var objs = cljs.core.seq( arglist__51791 );;
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
prn.cljs$lang$applyTo = (function (arglist__51792){
var objs = cljs.core.seq( arglist__51792 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__51793 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__51793,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3974__auto____51794 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3974__auto____51794))
{var nspc__51795 = temp__3974__auto____51794;

return cljs.core.str.call(null,nspc__51795,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3974__auto____51796 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3974__auto____51796))
{var nspc__51797 = temp__3974__auto____51796;

return cljs.core.str.call(null,nspc__51797,"/");
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
var pr_pair__51798 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__51798,"{",", ","}",opts,coll);
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
var this__51799 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__51800 = this;
var G__51801__51802 = cljs.core.seq.call(null,this__51800.watches);

if(cljs.core.truth_(G__51801__51802))
{var G__51804__51806 = cljs.core.first.call(null,G__51801__51802);
var vec__51805__51807 = G__51804__51806;
var key__51808 = cljs.core.nth.call(null,vec__51805__51807,0,null);
var f__51809 = cljs.core.nth.call(null,vec__51805__51807,1,null);
var G__51801__51810 = G__51801__51802;

var G__51804__51811 = G__51804__51806;
var G__51801__51812 = G__51801__51810;

while(true){
var vec__51813__51814 = G__51804__51811;
var key__51815 = cljs.core.nth.call(null,vec__51813__51814,0,null);
var f__51816 = cljs.core.nth.call(null,vec__51813__51814,1,null);
var G__51801__51817 = G__51801__51812;

f__51816.call(null,key__51815,this$,oldval,newval);
var temp__3974__auto____51818 = cljs.core.next.call(null,G__51801__51817);

if(cljs.core.truth_(temp__3974__auto____51818))
{var G__51801__51819 = temp__3974__auto____51818;

{
var G__51826 = cljs.core.first.call(null,G__51801__51819);
var G__51827 = G__51801__51819;
G__51804__51811 = G__51826;
G__51801__51812 = G__51827;
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
var this__51820 = this;
return this$.watches = cljs.core.assoc.call(null,this__51820.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__51821 = this;
return this$.watches = cljs.core.dissoc.call(null,this__51821.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__51822 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__51822.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__51823 = this;
return this__51823.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__51824 = this;
return this__51824.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__51825 = this;
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
var atom__51834 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__51835 = (function() { 
var G__51837__delegate = function (x,p__51828){
var map__51829__51830 = p__51828;
var map__51829__51831 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__51829__51830))?cljs.core.apply.call(null,cljs.core.hash_map,map__51829__51830):map__51829__51830);
var validator__51832 = cljs.core.get.call(null,map__51829__51831,"\uFDD0'validator");
var meta__51833 = cljs.core.get.call(null,map__51829__51831,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__51833,validator__51832,null));
};
var G__51837 = function (x,var_args){
var p__51828 = null;
if (goog.isDef(var_args)) {
  p__51828 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__51837__delegate.call(this, x, p__51828);
};
G__51837.cljs$lang$maxFixedArity = 1;
G__51837.cljs$lang$applyTo = (function (arglist__51838){
var x = cljs.core.first(arglist__51838);
var p__51828 = cljs.core.rest(arglist__51838);
return G__51837__delegate.call(this, x, p__51828);
});
return G__51837;
})()
;
atom = function(x,var_args){
var p__51828 = var_args;
switch(arguments.length){
case  1 :
return atom__51834.call(this,x);
default:
return atom__51835.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__51835.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____51839 = a.validator;

if(cljs.core.truth_(temp__3974__auto____51839))
{var validate__51840 = temp__3974__auto____51839;

if(cljs.core.truth_(validate__51840.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__51841 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__51841,new_value);
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
var swap_BANG___51842 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___51843 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___51844 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___51845 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___51846 = (function() { 
var G__51848__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__51848 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__51848__delegate.call(this, a, f, x, y, z, more);
};
G__51848.cljs$lang$maxFixedArity = 5;
G__51848.cljs$lang$applyTo = (function (arglist__51849){
var a = cljs.core.first(arglist__51849);
var f = cljs.core.first(cljs.core.next(arglist__51849));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__51849)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__51849))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__51849)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__51849)))));
return G__51848__delegate.call(this, a, f, x, y, z, more);
});
return G__51848;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___51842.call(this,a,f);
case  3 :
return swap_BANG___51843.call(this,a,f,x);
case  4 :
return swap_BANG___51844.call(this,a,f,x,y);
case  5 :
return swap_BANG___51845.call(this,a,f,x,y,z);
default:
return swap_BANG___51846.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___51846.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__51850){
var iref = cljs.core.first(arglist__51850);
var f = cljs.core.first(cljs.core.next(arglist__51850));
var args = cljs.core.rest(cljs.core.next(arglist__51850));
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
var gensym__51851 = (function (){
return gensym.call(null,"G__");
});
var gensym__51852 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__51851.call(this);
case  1 :
return gensym__51852.call(this,prefix_string);
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
var this__51854 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__51854.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__51855 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__51855.state,(function (p__51856){
var curr_state__51857 = p__51856;
var curr_state__51858 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__51857))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__51857):curr_state__51857);
var done__51859 = cljs.core.get.call(null,curr_state__51858,"\uFDD0'done");

if(cljs.core.truth_(done__51859))
{return curr_state__51858;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__51855.f.call(null)});
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
var map__51860__51861 = options;
var map__51860__51862 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__51860__51861))?cljs.core.apply.call(null,cljs.core.hash_map,map__51860__51861):map__51860__51861);
var keywordize_keys__51863 = cljs.core.get.call(null,map__51860__51862,"\uFDD0'keywordize-keys");
var keyfn__51864 = (cljs.core.truth_(keywordize_keys__51863)?cljs.core.keyword:cljs.core.str);
var f__51870 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____51869 = (function iter__51865(s__51866){
return (new cljs.core.LazySeq(null,false,(function (){
var s__51866__51867 = s__51866;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__51866__51867)))
{var k__51868 = cljs.core.first.call(null,s__51866__51867);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__51864.call(null,k__51868),thisfn.call(null,(x[k__51868]))]),iter__51865.call(null,cljs.core.rest.call(null,s__51866__51867)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____51869.call(null,cljs.core.js_keys.call(null,x));
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

return f__51870.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__51871){
var x = cljs.core.first(arglist__51871);
var options = cljs.core.rest(arglist__51871);
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
var mem__51872 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__51876__delegate = function (args){
var temp__3971__auto____51873 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__51872),args);

if(cljs.core.truth_(temp__3971__auto____51873))
{var v__51874 = temp__3971__auto____51873;

return v__51874;
} else
{var ret__51875 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__51872,cljs.core.assoc,args,ret__51875);
return ret__51875;
}
};
var G__51876 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__51876__delegate.call(this, args);
};
G__51876.cljs$lang$maxFixedArity = 0;
G__51876.cljs$lang$applyTo = (function (arglist__51877){
var args = cljs.core.seq( arglist__51877 );;
return G__51876__delegate.call(this, args);
});
return G__51876;
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
var trampoline__51879 = (function (f){
while(true){
var ret__51878 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__51878)))
{{
var G__51882 = ret__51878;
f = G__51882;
continue;
}
} else
{return ret__51878;
}
break;
}
});
var trampoline__51880 = (function() { 
var G__51883__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__51883 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__51883__delegate.call(this, f, args);
};
G__51883.cljs$lang$maxFixedArity = 1;
G__51883.cljs$lang$applyTo = (function (arglist__51884){
var f = cljs.core.first(arglist__51884);
var args = cljs.core.rest(arglist__51884);
return G__51883__delegate.call(this, f, args);
});
return G__51883;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__51879.call(this,f);
default:
return trampoline__51880.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__51880.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__51885 = (function (){
return rand.call(null,1);
});
var rand__51886 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__51885.call(this);
case  1 :
return rand__51886.call(this,n);
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
var k__51888 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__51888,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__51888,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___51897 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___51898 = (function (h,child,parent){
var or__3824__auto____51889 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3824__auto____51889))
{return or__3824__auto____51889;
} else
{var or__3824__auto____51890 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3824__auto____51890))
{return or__3824__auto____51890;
} else
{var and__3822__auto____51891 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3822__auto____51891))
{var and__3822__auto____51892 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3822__auto____51892))
{var and__3822__auto____51893 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3822__auto____51893))
{var ret__51894 = true;
var i__51895 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3824__auto____51896 = cljs.core.not.call(null,ret__51894);

if(cljs.core.truth_(or__3824__auto____51896))
{return or__3824__auto____51896;
} else
{return cljs.core._EQ_.call(null,i__51895,cljs.core.count.call(null,parent));
}
})()))
{return ret__51894;
} else
{{
var G__51900 = isa_QMARK_.call(null,h,child.call(null,i__51895),parent.call(null,i__51895));
var G__51901 = (i__51895 + 1);
ret__51894 = G__51900;
i__51895 = G__51901;
continue;
}
}
break;
}
} else
{return and__3822__auto____51893;
}
} else
{return and__3822__auto____51892;
}
} else
{return and__3822__auto____51891;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___51897.call(this,h,child);
case  3 :
return isa_QMARK___51898.call(this,h,child,parent);
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
var parents__51902 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__51903 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__51902.call(this,h);
case  2 :
return parents__51903.call(this,h,tag);
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
var ancestors__51905 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__51906 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__51905.call(this,h);
case  2 :
return ancestors__51906.call(this,h,tag);
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
var descendants__51908 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__51909 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__51908.call(this,h);
case  2 :
return descendants__51909.call(this,h,tag);
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
var derive__51919 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__51920 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__51914 = "\uFDD0'parents".call(null,h);
var td__51915 = "\uFDD0'descendants".call(null,h);
var ta__51916 = "\uFDD0'ancestors".call(null,h);
var tf__51917 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3824__auto____51918 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__51914.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__51916.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__51916.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__51914,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__51917.call(null,"\uFDD0'ancestors".call(null,h),tag,td__51915,parent,ta__51916),"\uFDD0'descendants":tf__51917.call(null,"\uFDD0'descendants".call(null,h),parent,ta__51916,tag,td__51915)});
})());

if(cljs.core.truth_(or__3824__auto____51918))
{return or__3824__auto____51918;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__51919.call(this,h,tag);
case  3 :
return derive__51920.call(this,h,tag,parent);
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
var underive__51926 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__51927 = (function (h,tag,parent){
var parentMap__51922 = "\uFDD0'parents".call(null,h);
var childsParents__51923 = (cljs.core.truth_(parentMap__51922.call(null,tag))?cljs.core.disj.call(null,parentMap__51922.call(null,tag),parent):cljs.core.set([]));
var newParents__51924 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__51923))?cljs.core.assoc.call(null,parentMap__51922,tag,childsParents__51923):cljs.core.dissoc.call(null,parentMap__51922,tag));
var deriv_seq__51925 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__51911_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__51911_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__51911_SHARP_),cljs.core.second.call(null,p1__51911_SHARP_)));
}),cljs.core.seq.call(null,newParents__51924)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__51922.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__51912_SHARP_,p2__51913_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__51912_SHARP_,p2__51913_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__51925));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__51926.call(this,h,tag);
case  3 :
return underive__51927.call(this,h,tag,parent);
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
var xprefs__51929 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3824__auto____51931 = (cljs.core.truth_((function (){var and__3822__auto____51930 = xprefs__51929;

if(cljs.core.truth_(and__3822__auto____51930))
{return xprefs__51929.call(null,y);
} else
{return and__3822__auto____51930;
}
})())?true:null);

if(cljs.core.truth_(or__3824__auto____51931))
{return or__3824__auto____51931;
} else
{var or__3824__auto____51933 = (function (){var ps__51932 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__51932) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__51932),prefer_table)))
{} else
{}
{
var G__51936 = cljs.core.rest.call(null,ps__51932);
ps__51932 = G__51936;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3824__auto____51933))
{return or__3824__auto____51933;
} else
{var or__3824__auto____51935 = (function (){var ps__51934 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__51934) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__51934),y,prefer_table)))
{} else
{}
{
var G__51937 = cljs.core.rest.call(null,ps__51934);
ps__51934 = G__51937;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3824__auto____51935))
{return or__3824__auto____51935;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____51938 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3824__auto____51938))
{return or__3824__auto____51938;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__51947 = cljs.core.reduce.call(null,(function (be,p__51939){
var vec__51940__51941 = p__51939;
var k__51942 = cljs.core.nth.call(null,vec__51940__51941,0,null);
var ___51943 = cljs.core.nth.call(null,vec__51940__51941,1,null);
var e__51944 = vec__51940__51941;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__51942)))
{var be2__51946 = (cljs.core.truth_((function (){var or__3824__auto____51945 = (be === null);

if(cljs.core.truth_(or__3824__auto____51945))
{return or__3824__auto____51945;
} else
{return cljs.core.dominates.call(null,k__51942,cljs.core.first.call(null,be),prefer_table);
}
})())?e__51944:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__51946),k__51942,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__51942," and ",cljs.core.first.call(null,be2__51946),", and neither is preferred")));
}
return be2__51946;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__51947))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__51947));
return cljs.core.second.call(null,best_entry__51947);
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
if(cljs.core.truth_((function (){var and__3822__auto____51948 = mf;

if(cljs.core.truth_(and__3822__auto____51948))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3822__auto____51948;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3824__auto____51949 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____51949))
{return or__3824__auto____51949;
} else
{var or__3824__auto____51950 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3824__auto____51950))
{return or__3824__auto____51950;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3822__auto____51951 = mf;

if(cljs.core.truth_(and__3822__auto____51951))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3822__auto____51951;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____51952 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____51952))
{return or__3824__auto____51952;
} else
{var or__3824__auto____51953 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3824__auto____51953))
{return or__3824__auto____51953;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3822__auto____51954 = mf;

if(cljs.core.truth_(and__3822__auto____51954))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3822__auto____51954;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____51955 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____51955))
{return or__3824__auto____51955;
} else
{var or__3824__auto____51956 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3824__auto____51956))
{return or__3824__auto____51956;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3822__auto____51957 = mf;

if(cljs.core.truth_(and__3822__auto____51957))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3822__auto____51957;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____51958 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____51958))
{return or__3824__auto____51958;
} else
{var or__3824__auto____51959 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3824__auto____51959))
{return or__3824__auto____51959;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3822__auto____51960 = mf;

if(cljs.core.truth_(and__3822__auto____51960))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3822__auto____51960;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____51961 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____51961))
{return or__3824__auto____51961;
} else
{var or__3824__auto____51962 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3824__auto____51962))
{return or__3824__auto____51962;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3822__auto____51963 = mf;

if(cljs.core.truth_(and__3822__auto____51963))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3822__auto____51963;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3824__auto____51964 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____51964))
{return or__3824__auto____51964;
} else
{var or__3824__auto____51965 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3824__auto____51965))
{return or__3824__auto____51965;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3822__auto____51966 = mf;

if(cljs.core.truth_(and__3822__auto____51966))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3822__auto____51966;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3824__auto____51967 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____51967))
{return or__3824__auto____51967;
} else
{var or__3824__auto____51968 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3824__auto____51968))
{return or__3824__auto____51968;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3822__auto____51969 = mf;

if(cljs.core.truth_(and__3822__auto____51969))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3822__auto____51969;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3824__auto____51970 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3824__auto____51970))
{return or__3824__auto____51970;
} else
{var or__3824__auto____51971 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3824__auto____51971))
{return or__3824__auto____51971;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__51972 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__51973 = cljs.core._get_method.call(null,mf,dispatch_val__51972);

if(cljs.core.truth_(target_fn__51973))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__51972)));
}
return cljs.core.apply.call(null,target_fn__51973,args);
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
var this__51974 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__51975 = this;
cljs.core.swap_BANG_.call(null,this__51975.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__51975.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__51975.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__51975.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__51976 = this;
cljs.core.swap_BANG_.call(null,this__51976.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__51976.method_cache,this__51976.method_table,this__51976.cached_hierarchy,this__51976.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__51977 = this;
cljs.core.swap_BANG_.call(null,this__51977.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__51977.method_cache,this__51977.method_table,this__51977.cached_hierarchy,this__51977.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__51978 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__51978.cached_hierarchy),cljs.core.deref.call(null,this__51978.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__51978.method_cache,this__51978.method_table,this__51978.cached_hierarchy,this__51978.hierarchy);
}
var temp__3971__auto____51979 = cljs.core.deref.call(null,this__51978.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3971__auto____51979))
{var target_fn__51980 = temp__3971__auto____51979;

return target_fn__51980;
} else
{var temp__3971__auto____51981 = cljs.core.find_and_cache_best_method.call(null,this__51978.name,dispatch_val,this__51978.hierarchy,this__51978.method_table,this__51978.prefer_table,this__51978.method_cache,this__51978.cached_hierarchy);

if(cljs.core.truth_(temp__3971__auto____51981))
{var target_fn__51982 = temp__3971__auto____51981;

return target_fn__51982;
} else
{return cljs.core.deref.call(null,this__51978.method_table).call(null,this__51978.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__51983 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__51983.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__51983.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__51983.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__51983.method_cache,this__51983.method_table,this__51983.cached_hierarchy,this__51983.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__51984 = this;
return cljs.core.deref.call(null,this__51984.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__51985 = this;
return cljs.core.deref.call(null,this__51985.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__51986 = this;
return cljs.core.do_dispatch.call(null,mf,this__51986.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__51987__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__51987 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__51987__delegate.call(this, _, args);
};
G__51987.cljs$lang$maxFixedArity = 1;
G__51987.cljs$lang$applyTo = (function (arglist__51988){
var _ = cljs.core.first(arglist__51988);
var args = cljs.core.rest(arglist__51988);
return G__51987__delegate.call(this, _, args);
});
return G__51987;
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
