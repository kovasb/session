goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
void 0;/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
if((p[goog.typeOf(x)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
void 0;cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
void 0;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__10785__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__10785 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10785__delegate.call(this, array, i, idxs);
};
G__10785.cljs$lang$maxFixedArity = 2;
G__10785.cljs$lang$applyTo = (function (arglist__10799){
var array = cljs.core.first(arglist__10799);
var i = cljs.core.first(cljs.core.next(arglist__10799));
var idxs = cljs.core.rest(cljs.core.next(arglist__10799));
return G__10785__delegate(array, i, idxs);
});
G__10785.cljs$lang$arity$variadic = G__10785__delegate;
return G__10785;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
void 0;
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
void 0;cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____10982 = this$;
if(and__3822__auto____10982)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____10982;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____10983 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____10983)
{return or__3824__auto____10983;
} else
{var or__3824__auto____10984 = (cljs.core._invoke["_"]);
if(or__3824__auto____10984)
{return or__3824__auto____10984;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____10985 = this$;
if(and__3822__auto____10985)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____10985;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____10986 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____10986)
{return or__3824__auto____10986;
} else
{var or__3824__auto____10987 = (cljs.core._invoke["_"]);
if(or__3824__auto____10987)
{return or__3824__auto____10987;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____10988 = this$;
if(and__3822__auto____10988)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____10988;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____10989 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____10989)
{return or__3824__auto____10989;
} else
{var or__3824__auto____10990 = (cljs.core._invoke["_"]);
if(or__3824__auto____10990)
{return or__3824__auto____10990;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____10991 = this$;
if(and__3822__auto____10991)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____10991;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____10992 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____10992)
{return or__3824__auto____10992;
} else
{var or__3824__auto____10993 = (cljs.core._invoke["_"]);
if(or__3824__auto____10993)
{return or__3824__auto____10993;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____10994 = this$;
if(and__3822__auto____10994)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____10994;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____10995 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____10995)
{return or__3824__auto____10995;
} else
{var or__3824__auto____10996 = (cljs.core._invoke["_"]);
if(or__3824__auto____10996)
{return or__3824__auto____10996;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____10998 = this$;
if(and__3822__auto____10998)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____10998;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____11000 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____11000)
{return or__3824__auto____11000;
} else
{var or__3824__auto____11002 = (cljs.core._invoke["_"]);
if(or__3824__auto____11002)
{return or__3824__auto____11002;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____11004 = this$;
if(and__3822__auto____11004)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____11004;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____11005 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____11005)
{return or__3824__auto____11005;
} else
{var or__3824__auto____11006 = (cljs.core._invoke["_"]);
if(or__3824__auto____11006)
{return or__3824__auto____11006;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____11008 = this$;
if(and__3822__auto____11008)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____11008;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____11011 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____11011)
{return or__3824__auto____11011;
} else
{var or__3824__auto____11012 = (cljs.core._invoke["_"]);
if(or__3824__auto____11012)
{return or__3824__auto____11012;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____11014 = this$;
if(and__3822__auto____11014)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____11014;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____11016 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____11016)
{return or__3824__auto____11016;
} else
{var or__3824__auto____11018 = (cljs.core._invoke["_"]);
if(or__3824__auto____11018)
{return or__3824__auto____11018;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____11019 = this$;
if(and__3822__auto____11019)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____11019;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____11021 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____11021)
{return or__3824__auto____11021;
} else
{var or__3824__auto____11022 = (cljs.core._invoke["_"]);
if(or__3824__auto____11022)
{return or__3824__auto____11022;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____11025 = this$;
if(and__3822__auto____11025)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____11025;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____11026 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____11026)
{return or__3824__auto____11026;
} else
{var or__3824__auto____11027 = (cljs.core._invoke["_"]);
if(or__3824__auto____11027)
{return or__3824__auto____11027;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____11029 = this$;
if(and__3822__auto____11029)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____11029;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____11031 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____11031)
{return or__3824__auto____11031;
} else
{var or__3824__auto____11032 = (cljs.core._invoke["_"]);
if(or__3824__auto____11032)
{return or__3824__auto____11032;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____11035 = this$;
if(and__3822__auto____11035)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____11035;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____11037 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____11037)
{return or__3824__auto____11037;
} else
{var or__3824__auto____11038 = (cljs.core._invoke["_"]);
if(or__3824__auto____11038)
{return or__3824__auto____11038;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____11040 = this$;
if(and__3822__auto____11040)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____11040;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____11042 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____11042)
{return or__3824__auto____11042;
} else
{var or__3824__auto____11043 = (cljs.core._invoke["_"]);
if(or__3824__auto____11043)
{return or__3824__auto____11043;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____11045 = this$;
if(and__3822__auto____11045)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____11045;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____11046 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____11046)
{return or__3824__auto____11046;
} else
{var or__3824__auto____11047 = (cljs.core._invoke["_"]);
if(or__3824__auto____11047)
{return or__3824__auto____11047;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____11048 = this$;
if(and__3822__auto____11048)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____11048;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____11049 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____11049)
{return or__3824__auto____11049;
} else
{var or__3824__auto____11051 = (cljs.core._invoke["_"]);
if(or__3824__auto____11051)
{return or__3824__auto____11051;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____11053 = this$;
if(and__3822__auto____11053)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____11053;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____11054 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____11054)
{return or__3824__auto____11054;
} else
{var or__3824__auto____11056 = (cljs.core._invoke["_"]);
if(or__3824__auto____11056)
{return or__3824__auto____11056;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____11058 = this$;
if(and__3822__auto____11058)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____11058;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____11059 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____11059)
{return or__3824__auto____11059;
} else
{var or__3824__auto____11060 = (cljs.core._invoke["_"]);
if(or__3824__auto____11060)
{return or__3824__auto____11060;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____11062 = this$;
if(and__3822__auto____11062)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____11062;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____11065 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____11065)
{return or__3824__auto____11065;
} else
{var or__3824__auto____11068 = (cljs.core._invoke["_"]);
if(or__3824__auto____11068)
{return or__3824__auto____11068;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____11070 = this$;
if(and__3822__auto____11070)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____11070;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____11071 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____11071)
{return or__3824__auto____11071;
} else
{var or__3824__auto____11073 = (cljs.core._invoke["_"]);
if(or__3824__auto____11073)
{return or__3824__auto____11073;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____11077 = this$;
if(and__3822__auto____11077)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____11077;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____11079 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____11079)
{return or__3824__auto____11079;
} else
{var or__3824__auto____11080 = (cljs.core._invoke["_"]);
if(or__3824__auto____11080)
{return or__3824__auto____11080;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
void 0;void 0;cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____11460 = coll;
if(and__3822__auto____11460)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____11460;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____11461 = (cljs.core._count[goog.typeOf(coll)]);
if(or__3824__auto____11461)
{return or__3824__auto____11461;
} else
{var or__3824__auto____11462 = (cljs.core._count["_"]);
if(or__3824__auto____11462)
{return or__3824__auto____11462;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____11466 = coll;
if(and__3822__auto____11466)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____11466;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____11467 = (cljs.core._empty[goog.typeOf(coll)]);
if(or__3824__auto____11467)
{return or__3824__auto____11467;
} else
{var or__3824__auto____11468 = (cljs.core._empty["_"]);
if(or__3824__auto____11468)
{return or__3824__auto____11468;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____11472 = coll;
if(and__3822__auto____11472)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____11472;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____11473 = (cljs.core._conj[goog.typeOf(coll)]);
if(or__3824__auto____11473)
{return or__3824__auto____11473;
} else
{var or__3824__auto____11474 = (cljs.core._conj["_"]);
if(or__3824__auto____11474)
{return or__3824__auto____11474;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
void 0;void 0;cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____11481 = coll;
if(and__3822__auto____11481)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____11481;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____11482 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____11482)
{return or__3824__auto____11482;
} else
{var or__3824__auto____11483 = (cljs.core._nth["_"]);
if(or__3824__auto____11483)
{return or__3824__auto____11483;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____11484 = coll;
if(and__3822__auto____11484)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____11484;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____11485 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____11485)
{return or__3824__auto____11485;
} else
{var or__3824__auto____11486 = (cljs.core._nth["_"]);
if(or__3824__auto____11486)
{return or__3824__auto____11486;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
void 0;void 0;cljs.core.ASeq = {};
void 0;void 0;cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____11490 = coll;
if(and__3822__auto____11490)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____11490;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____11491 = (cljs.core._first[goog.typeOf(coll)]);
if(or__3824__auto____11491)
{return or__3824__auto____11491;
} else
{var or__3824__auto____11492 = (cljs.core._first["_"]);
if(or__3824__auto____11492)
{return or__3824__auto____11492;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____11496 = coll;
if(and__3822__auto____11496)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____11496;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____11497 = (cljs.core._rest[goog.typeOf(coll)]);
if(or__3824__auto____11497)
{return or__3824__auto____11497;
} else
{var or__3824__auto____11498 = (cljs.core._rest["_"]);
if(or__3824__auto____11498)
{return or__3824__auto____11498;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____11502 = coll;
if(and__3822__auto____11502)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____11502;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____11503 = (cljs.core._next[goog.typeOf(coll)]);
if(or__3824__auto____11503)
{return or__3824__auto____11503;
} else
{var or__3824__auto____11504 = (cljs.core._next["_"]);
if(or__3824__auto____11504)
{return or__3824__auto____11504;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____11511 = o;
if(and__3822__auto____11511)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____11511;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____11512 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____11512)
{return or__3824__auto____11512;
} else
{var or__3824__auto____11513 = (cljs.core._lookup["_"]);
if(or__3824__auto____11513)
{return or__3824__auto____11513;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____11514 = o;
if(and__3822__auto____11514)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____11514;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____11515 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____11515)
{return or__3824__auto____11515;
} else
{var or__3824__auto____11516 = (cljs.core._lookup["_"]);
if(or__3824__auto____11516)
{return or__3824__auto____11516;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
void 0;void 0;cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____11520 = coll;
if(and__3822__auto____11520)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____11520;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____11521 = (cljs.core._contains_key_QMARK_[goog.typeOf(coll)]);
if(or__3824__auto____11521)
{return or__3824__auto____11521;
} else
{var or__3824__auto____11522 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____11522)
{return or__3824__auto____11522;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____11526 = coll;
if(and__3822__auto____11526)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____11526;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____11527 = (cljs.core._assoc[goog.typeOf(coll)]);
if(or__3824__auto____11527)
{return or__3824__auto____11527;
} else
{var or__3824__auto____11528 = (cljs.core._assoc["_"]);
if(or__3824__auto____11528)
{return or__3824__auto____11528;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____11532 = coll;
if(and__3822__auto____11532)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____11532;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____11533 = (cljs.core._dissoc[goog.typeOf(coll)]);
if(or__3824__auto____11533)
{return or__3824__auto____11533;
} else
{var or__3824__auto____11534 = (cljs.core._dissoc["_"]);
if(or__3824__auto____11534)
{return or__3824__auto____11534;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____11538 = coll;
if(and__3822__auto____11538)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____11538;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____11539 = (cljs.core._key[goog.typeOf(coll)]);
if(or__3824__auto____11539)
{return or__3824__auto____11539;
} else
{var or__3824__auto____11540 = (cljs.core._key["_"]);
if(or__3824__auto____11540)
{return or__3824__auto____11540;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____11544 = coll;
if(and__3822__auto____11544)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____11544;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____11545 = (cljs.core._val[goog.typeOf(coll)]);
if(or__3824__auto____11545)
{return or__3824__auto____11545;
} else
{var or__3824__auto____11546 = (cljs.core._val["_"]);
if(or__3824__auto____11546)
{return or__3824__auto____11546;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____11550 = coll;
if(and__3822__auto____11550)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____11550;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____11551 = (cljs.core._disjoin[goog.typeOf(coll)]);
if(or__3824__auto____11551)
{return or__3824__auto____11551;
} else
{var or__3824__auto____11552 = (cljs.core._disjoin["_"]);
if(or__3824__auto____11552)
{return or__3824__auto____11552;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____11556 = coll;
if(and__3822__auto____11556)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____11556;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____11557 = (cljs.core._peek[goog.typeOf(coll)]);
if(or__3824__auto____11557)
{return or__3824__auto____11557;
} else
{var or__3824__auto____11558 = (cljs.core._peek["_"]);
if(or__3824__auto____11558)
{return or__3824__auto____11558;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____11562 = coll;
if(and__3822__auto____11562)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____11562;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____11563 = (cljs.core._pop[goog.typeOf(coll)]);
if(or__3824__auto____11563)
{return or__3824__auto____11563;
} else
{var or__3824__auto____11564 = (cljs.core._pop["_"]);
if(or__3824__auto____11564)
{return or__3824__auto____11564;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____11568 = coll;
if(and__3822__auto____11568)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____11568;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____11569 = (cljs.core._assoc_n[goog.typeOf(coll)]);
if(or__3824__auto____11569)
{return or__3824__auto____11569;
} else
{var or__3824__auto____11570 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____11570)
{return or__3824__auto____11570;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____11574 = o;
if(and__3822__auto____11574)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____11574;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____11575 = (cljs.core._deref[goog.typeOf(o)]);
if(or__3824__auto____11575)
{return or__3824__auto____11575;
} else
{var or__3824__auto____11576 = (cljs.core._deref["_"]);
if(or__3824__auto____11576)
{return or__3824__auto____11576;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____11580 = o;
if(and__3822__auto____11580)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____11580;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____11581 = (cljs.core._deref_with_timeout[goog.typeOf(o)]);
if(or__3824__auto____11581)
{return or__3824__auto____11581;
} else
{var or__3824__auto____11582 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____11582)
{return or__3824__auto____11582;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____11586 = o;
if(and__3822__auto____11586)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____11586;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____11587 = (cljs.core._meta[goog.typeOf(o)]);
if(or__3824__auto____11587)
{return or__3824__auto____11587;
} else
{var or__3824__auto____11588 = (cljs.core._meta["_"]);
if(or__3824__auto____11588)
{return or__3824__auto____11588;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____11592 = o;
if(and__3822__auto____11592)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____11592;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____11593 = (cljs.core._with_meta[goog.typeOf(o)]);
if(or__3824__auto____11593)
{return or__3824__auto____11593;
} else
{var or__3824__auto____11594 = (cljs.core._with_meta["_"]);
if(or__3824__auto____11594)
{return or__3824__auto____11594;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
void 0;void 0;cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____11601 = coll;
if(and__3822__auto____11601)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____11601;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____11602 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____11602)
{return or__3824__auto____11602;
} else
{var or__3824__auto____11603 = (cljs.core._reduce["_"]);
if(or__3824__auto____11603)
{return or__3824__auto____11603;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____11604 = coll;
if(and__3822__auto____11604)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____11604;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____11605 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____11605)
{return or__3824__auto____11605;
} else
{var or__3824__auto____11606 = (cljs.core._reduce["_"]);
if(or__3824__auto____11606)
{return or__3824__auto____11606;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
void 0;void 0;cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____11610 = coll;
if(and__3822__auto____11610)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____11610;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____11611 = (cljs.core._kv_reduce[goog.typeOf(coll)]);
if(or__3824__auto____11611)
{return or__3824__auto____11611;
} else
{var or__3824__auto____11612 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____11612)
{return or__3824__auto____11612;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____11616 = o;
if(and__3822__auto____11616)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____11616;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____11617 = (cljs.core._equiv[goog.typeOf(o)]);
if(or__3824__auto____11617)
{return or__3824__auto____11617;
} else
{var or__3824__auto____11618 = (cljs.core._equiv["_"]);
if(or__3824__auto____11618)
{return or__3824__auto____11618;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____11622 = o;
if(and__3822__auto____11622)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____11622;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____11623 = (cljs.core._hash[goog.typeOf(o)]);
if(or__3824__auto____11623)
{return or__3824__auto____11623;
} else
{var or__3824__auto____11624 = (cljs.core._hash["_"]);
if(or__3824__auto____11624)
{return or__3824__auto____11624;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____11628 = o;
if(and__3822__auto____11628)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____11628;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____11629 = (cljs.core._seq[goog.typeOf(o)]);
if(or__3824__auto____11629)
{return or__3824__auto____11629;
} else
{var or__3824__auto____11630 = (cljs.core._seq["_"]);
if(or__3824__auto____11630)
{return or__3824__auto____11630;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISequential = {};
void 0;void 0;cljs.core.IList = {};
void 0;void 0;cljs.core.IRecord = {};
void 0;void 0;cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____11634 = coll;
if(and__3822__auto____11634)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____11634;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____11635 = (cljs.core._rseq[goog.typeOf(coll)]);
if(or__3824__auto____11635)
{return or__3824__auto____11635;
} else
{var or__3824__auto____11636 = (cljs.core._rseq["_"]);
if(or__3824__auto____11636)
{return or__3824__auto____11636;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____11640 = coll;
if(and__3822__auto____11640)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____11640;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____11641 = (cljs.core._sorted_seq[goog.typeOf(coll)]);
if(or__3824__auto____11641)
{return or__3824__auto____11641;
} else
{var or__3824__auto____11642 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____11642)
{return or__3824__auto____11642;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____11646 = coll;
if(and__3822__auto____11646)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____11646;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____11647 = (cljs.core._sorted_seq_from[goog.typeOf(coll)]);
if(or__3824__auto____11647)
{return or__3824__auto____11647;
} else
{var or__3824__auto____11648 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____11648)
{return or__3824__auto____11648;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____11652 = coll;
if(and__3822__auto____11652)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____11652;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____11653 = (cljs.core._entry_key[goog.typeOf(coll)]);
if(or__3824__auto____11653)
{return or__3824__auto____11653;
} else
{var or__3824__auto____11654 = (cljs.core._entry_key["_"]);
if(or__3824__auto____11654)
{return or__3824__auto____11654;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____11658 = coll;
if(and__3822__auto____11658)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____11658;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____11659 = (cljs.core._comparator[goog.typeOf(coll)]);
if(or__3824__auto____11659)
{return or__3824__auto____11659;
} else
{var or__3824__auto____11660 = (cljs.core._comparator["_"]);
if(or__3824__auto____11660)
{return or__3824__auto____11660;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____11664 = o;
if(and__3822__auto____11664)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____11664;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____11665 = (cljs.core._pr_seq[goog.typeOf(o)]);
if(or__3824__auto____11665)
{return or__3824__auto____11665;
} else
{var or__3824__auto____11666 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____11666)
{return or__3824__auto____11666;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____11670 = d;
if(and__3822__auto____11670)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____11670;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____11671 = (cljs.core._realized_QMARK_[goog.typeOf(d)]);
if(or__3824__auto____11671)
{return or__3824__auto____11671;
} else
{var or__3824__auto____11672 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____11672)
{return or__3824__auto____11672;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____11676 = this$;
if(and__3822__auto____11676)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____11676;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____11677 = (cljs.core._notify_watches[goog.typeOf(this$)]);
if(or__3824__auto____11677)
{return or__3824__auto____11677;
} else
{var or__3824__auto____11678 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____11678)
{return or__3824__auto____11678;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____11682 = this$;
if(and__3822__auto____11682)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____11682;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____11683 = (cljs.core._add_watch[goog.typeOf(this$)]);
if(or__3824__auto____11683)
{return or__3824__auto____11683;
} else
{var or__3824__auto____11684 = (cljs.core._add_watch["_"]);
if(or__3824__auto____11684)
{return or__3824__auto____11684;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____11688 = this$;
if(and__3822__auto____11688)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____11688;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____11689 = (cljs.core._remove_watch[goog.typeOf(this$)]);
if(or__3824__auto____11689)
{return or__3824__auto____11689;
} else
{var or__3824__auto____11690 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____11690)
{return or__3824__auto____11690;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____11694 = coll;
if(and__3822__auto____11694)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____11694;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____11695 = (cljs.core._as_transient[goog.typeOf(coll)]);
if(or__3824__auto____11695)
{return or__3824__auto____11695;
} else
{var or__3824__auto____11696 = (cljs.core._as_transient["_"]);
if(or__3824__auto____11696)
{return or__3824__auto____11696;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____11700 = tcoll;
if(and__3822__auto____11700)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____11700;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____11701 = (cljs.core._conj_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____11701)
{return or__3824__auto____11701;
} else
{var or__3824__auto____11702 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____11702)
{return or__3824__auto____11702;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____11706 = tcoll;
if(and__3822__auto____11706)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____11706;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____11707 = (cljs.core._persistent_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____11707)
{return or__3824__auto____11707;
} else
{var or__3824__auto____11708 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____11708)
{return or__3824__auto____11708;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____11712 = tcoll;
if(and__3822__auto____11712)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____11712;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____11713 = (cljs.core._assoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____11713)
{return or__3824__auto____11713;
} else
{var or__3824__auto____11714 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____11714)
{return or__3824__auto____11714;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____11718 = tcoll;
if(and__3822__auto____11718)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____11718;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____11719 = (cljs.core._dissoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____11719)
{return or__3824__auto____11719;
} else
{var or__3824__auto____11720 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____11720)
{return or__3824__auto____11720;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____11724 = tcoll;
if(and__3822__auto____11724)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____11724;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____11725 = (cljs.core._assoc_n_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____11725)
{return or__3824__auto____11725;
} else
{var or__3824__auto____11726 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____11726)
{return or__3824__auto____11726;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____11730 = tcoll;
if(and__3822__auto____11730)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____11730;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____11731 = (cljs.core._pop_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____11731)
{return or__3824__auto____11731;
} else
{var or__3824__auto____11732 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____11732)
{return or__3824__auto____11732;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____11736 = tcoll;
if(and__3822__auto____11736)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____11736;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____11737 = (cljs.core._disjoin_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____11737)
{return or__3824__auto____11737;
} else
{var or__3824__auto____11738 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____11738)
{return or__3824__auto____11738;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;void 0;cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____11742 = x;
if(and__3822__auto____11742)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____11742;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{return (function (){var or__3824__auto____11743 = (cljs.core._compare[goog.typeOf(x)]);
if(or__3824__auto____11743)
{return or__3824__auto____11743;
} else
{var or__3824__auto____11744 = (cljs.core._compare["_"]);
if(or__3824__auto____11744)
{return or__3824__auto____11744;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
void 0;void 0;cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____11748 = coll;
if(and__3822__auto____11748)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____11748;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____11749 = (cljs.core._drop_first[goog.typeOf(coll)]);
if(or__3824__auto____11749)
{return or__3824__auto____11749;
} else
{var or__3824__auto____11750 = (cljs.core._drop_first["_"]);
if(or__3824__auto____11750)
{return or__3824__auto____11750;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____11754 = coll;
if(and__3822__auto____11754)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____11754;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____11755 = (cljs.core._chunked_first[goog.typeOf(coll)]);
if(or__3824__auto____11755)
{return or__3824__auto____11755;
} else
{var or__3824__auto____11756 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____11756)
{return or__3824__auto____11756;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____11760 = coll;
if(and__3822__auto____11760)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____11760;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____11761 = (cljs.core._chunked_rest[goog.typeOf(coll)]);
if(or__3824__auto____11761)
{return or__3824__auto____11761;
} else
{var or__3824__auto____11762 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____11762)
{return or__3824__auto____11762;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____11766 = coll;
if(and__3822__auto____11766)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____11766;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____11767 = (cljs.core._chunked_next[goog.typeOf(coll)]);
if(or__3824__auto____11767)
{return or__3824__auto____11767;
} else
{var or__3824__auto____11768 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____11768)
{return or__3824__auto____11768;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
void 0;/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
void 0;
void 0;
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____11770 = (x === y);
if(or__3824__auto____11770)
{return or__3824__auto____11770;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__11771__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__11772 = y;
var G__11773 = cljs.core.first.call(null,more);
var G__11774 = cljs.core.next.call(null,more);
x = G__11772;
y = G__11773;
more = G__11774;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11771 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11771__delegate.call(this, x, y, more);
};
G__11771.cljs$lang$maxFixedArity = 2;
G__11771.cljs$lang$applyTo = (function (arglist__11775){
var x = cljs.core.first(arglist__11775);
var y = cljs.core.first(cljs.core.next(arglist__11775));
var more = cljs.core.rest(cljs.core.next(arglist__11775));
return G__11771__delegate(x, y, more);
});
G__11771.cljs$lang$arity$variadic = G__11771__delegate;
return G__11771;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
void 0;
void 0;
void 0;
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__11776 = null;
var G__11776__2 = (function (o,k){
return null;
});
var G__11776__3 = (function (o,k,not_found){
return not_found;
});
G__11776 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__11776__2.call(this,o,k);
case 3:
return G__11776__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11776;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__11777 = null;
var G__11777__2 = (function (_,f){
return f.call(null);
});
var G__11777__3 = (function (_,f,start){
return start;
});
G__11777 = function(_,f,start){
switch(arguments.length){
case 2:
return G__11777__2.call(this,_,f);
case 3:
return G__11777__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11777;
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
return (o == null);
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
var G__11778 = null;
var G__11778__2 = (function (_,n){
return null;
});
var G__11778__3 = (function (_,n,not_found){
return not_found;
});
G__11778 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__11778__2.call(this,_,n);
case 3:
return G__11778__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11778;
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
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
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
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
void 0;
void 0;
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__11791 = cljs.core._count.call(null,cicoll);
if((cnt__11791 === 0))
{return f.call(null);
} else
{var val__11792 = cljs.core._nth.call(null,cicoll,0);
var n__11793 = 1;
while(true){
if((n__11793 < cnt__11791))
{var nval__11794 = f.call(null,val__11792,cljs.core._nth.call(null,cicoll,n__11793));
if(cljs.core.reduced_QMARK_.call(null,nval__11794))
{return cljs.core.deref.call(null,nval__11794);
} else
{{
var G__11803 = nval__11794;
var G__11804 = (n__11793 + 1);
val__11792 = G__11803;
n__11793 = G__11804;
continue;
}
}
} else
{return val__11792;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__11795 = cljs.core._count.call(null,cicoll);
var val__11796 = val;
var n__11797 = 0;
while(true){
if((n__11797 < cnt__11795))
{var nval__11798 = f.call(null,val__11796,cljs.core._nth.call(null,cicoll,n__11797));
if(cljs.core.reduced_QMARK_.call(null,nval__11798))
{return cljs.core.deref.call(null,nval__11798);
} else
{{
var G__11805 = nval__11798;
var G__11806 = (n__11797 + 1);
val__11796 = G__11805;
n__11797 = G__11806;
continue;
}
}
} else
{return val__11796;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__11799 = cljs.core._count.call(null,cicoll);
var val__11800 = val;
var n__11801 = idx;
while(true){
if((n__11801 < cnt__11799))
{var nval__11802 = f.call(null,val__11800,cljs.core._nth.call(null,cicoll,n__11801));
if(cljs.core.reduced_QMARK_.call(null,nval__11802))
{return cljs.core.deref.call(null,nval__11802);
} else
{{
var G__11807 = nval__11802;
var G__11808 = (n__11801 + 1);
val__11800 = G__11807;
n__11801 = G__11808;
continue;
}
}
} else
{return val__11800;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__11821 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__11822 = (arr[0]);
var n__11823 = 1;
while(true){
if((n__11823 < cnt__11821))
{var nval__11824 = f.call(null,val__11822,(arr[n__11823]));
if(cljs.core.reduced_QMARK_.call(null,nval__11824))
{return cljs.core.deref.call(null,nval__11824);
} else
{{
var G__11833 = nval__11824;
var G__11834 = (n__11823 + 1);
val__11822 = G__11833;
n__11823 = G__11834;
continue;
}
}
} else
{return val__11822;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__11825 = arr.length;
var val__11826 = val;
var n__11827 = 0;
while(true){
if((n__11827 < cnt__11825))
{var nval__11828 = f.call(null,val__11826,(arr[n__11827]));
if(cljs.core.reduced_QMARK_.call(null,nval__11828))
{return cljs.core.deref.call(null,nval__11828);
} else
{{
var G__11835 = nval__11828;
var G__11836 = (n__11827 + 1);
val__11826 = G__11835;
n__11827 = G__11836;
continue;
}
}
} else
{return val__11826;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__11829 = arr.length;
var val__11830 = val;
var n__11831 = idx;
while(true){
if((n__11831 < cnt__11829))
{var nval__11832 = f.call(null,val__11830,(arr[n__11831]));
if(cljs.core.reduced_QMARK_.call(null,nval__11832))
{return cljs.core.deref.call(null,nval__11832);
} else
{{
var G__11837 = nval__11832;
var G__11838 = (n__11831 + 1);
val__11830 = G__11837;
n__11831 = G__11838;
continue;
}
}
} else
{return val__11830;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;
void 0;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11839 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__11840 = this;
if(((this__11840.i + 1) < this__11840.a.length))
{return (new cljs.core.IndexedSeq(this__11840.a,(this__11840.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11841 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11842 = this;
var c__11843 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__11843 > 0))
{return (new cljs.core.RSeq(coll,(c__11843 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__11844 = this;
var this__11845 = this;
return cljs.core.pr_str.call(null,this__11845);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__11846 = this;
if(cljs.core.counted_QMARK_.call(null,this__11846.a))
{return cljs.core.ci_reduce.call(null,this__11846.a,f,(this__11846.a[this__11846.i]),(this__11846.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__11846.a[this__11846.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__11847 = this;
if(cljs.core.counted_QMARK_.call(null,this__11847.a))
{return cljs.core.ci_reduce.call(null,this__11847.a,f,start,this__11847.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11848 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__11849 = this;
return (this__11849.a.length - this__11849.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__11850 = this;
return (this__11850.a[this__11850.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__11851 = this;
if(((this__11851.i + 1) < this__11851.a.length))
{return (new cljs.core.IndexedSeq(this__11851.a,(this__11851.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11852 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__11853 = this;
var i__11854 = (n + this__11853.i);
if((i__11854 < this__11853.a.length))
{return (this__11853.a[i__11854]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__11855 = this;
var i__11856 = (n + this__11855.i);
if((i__11856 < this__11855.a.length))
{return (this__11855.a[i__11856]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__11857 = null;
var G__11857__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__11857__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__11857 = function(array,f,start){
switch(arguments.length){
case 2:
return G__11857__2.call(this,array,f);
case 3:
return G__11857__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11857;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__11858 = null;
var G__11858__2 = (function (array,k){
return (array[k]);
});
var G__11858__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__11858 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__11858__2.call(this,array,k);
case 3:
return G__11858__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11858;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__11859 = null;
var G__11859__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__11859__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__11859 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__11859__2.call(this,array,n);
case 3:
return G__11859__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11859;
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
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11860 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11861 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__11862 = this;
var this__11863 = this;
return cljs.core.pr_str.call(null,this__11863);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11864 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11865 = this;
return (this__11865.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11866 = this;
return cljs.core._nth.call(null,this__11866.ci,this__11866.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11867 = this;
if((this__11867.i > 0))
{return (new cljs.core.RSeq(this__11867.ci,(this__11867.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11868 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__11869 = this;
return (new cljs.core.RSeq(this__11869.ci,this__11869.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11870 = this;
return this__11870.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__11874__11875 = coll;
if(G__11874__11875)
{if((function (){var or__3824__auto____11876 = (G__11874__11875.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____11876)
{return or__3824__auto____11876;
} else
{return G__11874__11875.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__11874__11875.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__11874__11875);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__11874__11875);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__11881__11882 = coll;
if(G__11881__11882)
{if((function (){var or__3824__auto____11883 = (G__11881__11882.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____11883)
{return or__3824__auto____11883;
} else
{return G__11881__11882.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__11881__11882.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11881__11882);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11881__11882);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__11884 = cljs.core.seq.call(null,coll);
if((s__11884 == null))
{return null;
} else
{return cljs.core._first.call(null,s__11884);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__11889__11890 = coll;
if(G__11889__11890)
{if((function (){var or__3824__auto____11891 = (G__11889__11890.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____11891)
{return or__3824__auto____11891;
} else
{return G__11889__11890.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__11889__11890.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11889__11890);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__11889__11890);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__11892 = cljs.core.seq.call(null,coll);
if(!((s__11892 == null)))
{return cljs.core._rest.call(null,s__11892);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__11896__11897 = coll;
if(G__11896__11897)
{if((function (){var or__3824__auto____11898 = (G__11896__11897.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____11898)
{return or__3824__auto____11898;
} else
{return G__11896__11897.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__11896__11897.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__11896__11897);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__11896__11897);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
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
var sn__11900 = cljs.core.next.call(null,s);
if(!((sn__11900 == null)))
{{
var G__11901 = sn__11900;
s = G__11901;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
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
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__11902__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__11903 = conj.call(null,coll,x);
var G__11904 = cljs.core.first.call(null,xs);
var G__11905 = cljs.core.next.call(null,xs);
coll = G__11903;
x = G__11904;
xs = G__11905;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__11902 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11902__delegate.call(this, coll, x, xs);
};
G__11902.cljs$lang$maxFixedArity = 2;
G__11902.cljs$lang$applyTo = (function (arglist__11906){
var coll = cljs.core.first(arglist__11906);
var x = cljs.core.first(cljs.core.next(arglist__11906));
var xs = cljs.core.rest(cljs.core.next(arglist__11906));
return G__11902__delegate(coll, x, xs);
});
G__11902.cljs$lang$arity$variadic = G__11902__delegate;
return G__11902;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
void 0;
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__11909 = cljs.core.seq.call(null,coll);
var acc__11910 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__11909))
{return (acc__11910 + cljs.core._count.call(null,s__11909));
} else
{{
var G__11911 = cljs.core.next.call(null,s__11909);
var G__11912 = (acc__11910 + 1);
s__11909 = G__11911;
acc__11910 = G__11912;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
void 0;
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__11919__11920 = coll;
if(G__11919__11920)
{if((function (){var or__3824__auto____11921 = (G__11919__11920.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____11921)
{return or__3824__auto____11921;
} else
{return G__11919__11920.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__11919__11920.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11919__11920);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11919__11920);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__11922__11923 = coll;
if(G__11922__11923)
{if((function (){var or__3824__auto____11924 = (G__11922__11923.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____11924)
{return or__3824__auto____11924;
} else
{return G__11922__11923.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__11922__11923.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11922__11923);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11922__11923);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
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
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__11927__delegate = function (coll,k,v,kvs){
while(true){
var ret__11926 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__11928 = ret__11926;
var G__11929 = cljs.core.first.call(null,kvs);
var G__11930 = cljs.core.second.call(null,kvs);
var G__11931 = cljs.core.nnext.call(null,kvs);
coll = G__11928;
k = G__11929;
v = G__11930;
kvs = G__11931;
continue;
}
} else
{return ret__11926;
}
break;
}
};
var G__11927 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11927__delegate.call(this, coll, k, v, kvs);
};
G__11927.cljs$lang$maxFixedArity = 3;
G__11927.cljs$lang$applyTo = (function (arglist__11932){
var coll = cljs.core.first(arglist__11932);
var k = cljs.core.first(cljs.core.next(arglist__11932));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11932)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11932)));
return G__11927__delegate(coll, k, v, kvs);
});
G__11927.cljs$lang$arity$variadic = G__11927__delegate;
return G__11927;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
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
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__11935__delegate = function (coll,k,ks){
while(true){
var ret__11934 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__11936 = ret__11934;
var G__11937 = cljs.core.first.call(null,ks);
var G__11938 = cljs.core.next.call(null,ks);
coll = G__11936;
k = G__11937;
ks = G__11938;
continue;
}
} else
{return ret__11934;
}
break;
}
};
var G__11935 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11935__delegate.call(this, coll, k, ks);
};
G__11935.cljs$lang$maxFixedArity = 2;
G__11935.cljs$lang$applyTo = (function (arglist__11939){
var coll = cljs.core.first(arglist__11939);
var k = cljs.core.first(cljs.core.next(arglist__11939));
var ks = cljs.core.rest(cljs.core.next(arglist__11939));
return G__11935__delegate(coll, k, ks);
});
G__11935.cljs$lang$arity$variadic = G__11935__delegate;
return G__11935;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
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
if((function (){var G__11943__11944 = o;
if(G__11943__11944)
{if((function (){var or__3824__auto____11945 = (G__11943__11944.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____11945)
{return or__3824__auto____11945;
} else
{return G__11943__11944.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__11943__11944.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11943__11944);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__11943__11944);
}
})())
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
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__11948__delegate = function (coll,k,ks){
while(true){
var ret__11947 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__11949 = ret__11947;
var G__11950 = cljs.core.first.call(null,ks);
var G__11951 = cljs.core.next.call(null,ks);
coll = G__11949;
k = G__11950;
ks = G__11951;
continue;
}
} else
{return ret__11947;
}
break;
}
};
var G__11948 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11948__delegate.call(this, coll, k, ks);
};
G__11948.cljs$lang$maxFixedArity = 2;
G__11948.cljs$lang$applyTo = (function (arglist__11952){
var coll = cljs.core.first(arglist__11952);
var k = cljs.core.first(cljs.core.next(arglist__11952));
var ks = cljs.core.rest(cljs.core.next(arglist__11952));
return G__11948__delegate(coll, k, ks);
});
G__11948.cljs$lang$arity$variadic = G__11948__delegate;
return G__11948;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__11954 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__11954);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__11954;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__11956 = (cljs.core.string_hash_cache[k]);
if(!((h__11956 == null)))
{return h__11956;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____11958 = goog.isString(o);
if(and__3822__auto____11958)
{return check_cache;
} else
{return and__3822__auto____11958;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
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
if((x == null))
{return false;
} else
{var G__11962__11963 = x;
if(G__11962__11963)
{if((function (){var or__3824__auto____11964 = (G__11962__11963.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____11964)
{return or__3824__auto____11964;
} else
{return G__11962__11963.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__11962__11963.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__11962__11963);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__11962__11963);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__11968__11969 = x;
if(G__11968__11969)
{if((function (){var or__3824__auto____11970 = (G__11968__11969.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____11970)
{return or__3824__auto____11970;
} else
{return G__11968__11969.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__11968__11969.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__11968__11969);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__11968__11969);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__11974__11975 = x;
if(G__11974__11975)
{if((function (){var or__3824__auto____11976 = (G__11974__11975.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____11976)
{return or__3824__auto____11976;
} else
{return G__11974__11975.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__11974__11975.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__11974__11975);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__11974__11975);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__11980__11981 = x;
if(G__11980__11981)
{if((function (){var or__3824__auto____11982 = (G__11980__11981.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____11982)
{return or__3824__auto____11982;
} else
{return G__11980__11981.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__11980__11981.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__11980__11981);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__11980__11981);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__11986__11987 = x;
if(G__11986__11987)
{if((function (){var or__3824__auto____11988 = (G__11986__11987.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____11988)
{return or__3824__auto____11988;
} else
{return G__11986__11987.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__11986__11987.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__11986__11987);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__11986__11987);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__11992__11993 = x;
if(G__11992__11993)
{if((function (){var or__3824__auto____11994 = (G__11992__11993.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____11994)
{return or__3824__auto____11994;
} else
{return G__11992__11993.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__11992__11993.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11992__11993);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__11992__11993);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__11998__11999 = x;
if(G__11998__11999)
{if((function (){var or__3824__auto____12000 = (G__11998__11999.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____12000)
{return or__3824__auto____12000;
} else
{return G__11998__11999.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__11998__11999.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11998__11999);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__11998__11999);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__12004__12005 = x;
if(G__12004__12005)
{if((function (){var or__3824__auto____12006 = (G__12004__12005.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____12006)
{return or__3824__auto____12006;
} else
{return G__12004__12005.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__12004__12005.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__12004__12005);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__12004__12005);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__12010__12011 = x;
if(G__12010__12011)
{if((function (){var or__3824__auto____12012 = (G__12010__12011.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____12012)
{return or__3824__auto____12012;
} else
{return G__12010__12011.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__12010__12011.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__12010__12011);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__12010__12011);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__12016__12017 = x;
if(G__12016__12017)
{if(cljs.core.truth_((function (){var or__3824__auto____12018 = null;
if(cljs.core.truth_(or__3824__auto____12018))
{return or__3824__auto____12018;
} else
{return G__12016__12017.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__12016__12017.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__12016__12017);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__12016__12017);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__12019__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__12019 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12019__delegate.call(this, keyvals);
};
G__12019.cljs$lang$maxFixedArity = 0;
G__12019.cljs$lang$applyTo = (function (arglist__12020){
var keyvals = cljs.core.seq(arglist__12020);;
return G__12019__delegate(keyvals);
});
G__12019.cljs$lang$arity$variadic = G__12019__delegate;
return G__12019;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(falsecljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__12022 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__12022.push(key);
}));
return keys__12022;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__12026 = i;
var j__12027 = j;
var len__12028 = len;
while(true){
if((len__12028 === 0))
{return to;
} else
{(to[j__12027] = (from[i__12026]));
{
var G__12029 = (i__12026 + 1);
var G__12030 = (j__12027 + 1);
var G__12031 = (len__12028 - 1);
i__12026 = G__12029;
j__12027 = G__12030;
len__12028 = G__12031;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__12035 = (i + (len - 1));
var j__12036 = (j + (len - 1));
var len__12037 = len;
while(true){
if((len__12037 === 0))
{return to;
} else
{(to[j__12036] = (from[i__12035]));
{
var G__12038 = (i__12035 - 1);
var G__12039 = (j__12036 - 1);
var G__12040 = (len__12037 - 1);
i__12035 = G__12038;
j__12036 = G__12039;
len__12037 = G__12040;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
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
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__12044__12045 = s;
if(G__12044__12045)
{if((function (){var or__3824__auto____12046 = (G__12044__12045.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____12046)
{return or__3824__auto____12046;
} else
{return G__12044__12045.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__12044__12045.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__12044__12045);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__12044__12045);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__12050__12051 = s;
if(G__12050__12051)
{if((function (){var or__3824__auto____12052 = (G__12050__12051.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____12052)
{return or__3824__auto____12052;
} else
{return G__12050__12051.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12050__12051.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12050__12051);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12050__12051);
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
var and__3822__auto____12055 = goog.isString(x);
if(and__3822__auto____12055)
{return !((function (){var or__3824__auto____12056 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____12056)
{return or__3824__auto____12056;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____12055;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____12058 = goog.isString(x);
if(and__3822__auto____12058)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____12058;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____12060 = goog.isString(x);
if(and__3822__auto____12060)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____12060;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____12065 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____12065)
{return or__3824__auto____12065;
} else
{var G__12066__12067 = f;
if(G__12066__12067)
{if((function (){var or__3824__auto____12068 = (G__12066__12067.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____12068)
{return or__3824__auto____12068;
} else
{return G__12066__12067.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__12066__12067.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__12066__12067);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__12066__12067);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____12070 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____12070)
{return (n == n.toFixed());
} else
{return and__3822__auto____12070;
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
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____12073 = coll;
if(cljs.core.truth_(and__3822__auto____12073))
{var and__3822__auto____12074 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____12074)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____12074;
}
} else
{return and__3822__auto____12073;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
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
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__12083__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__12079 = cljs.core.set([y,x]);
var xs__12080 = more;
while(true){
var x__12081 = cljs.core.first.call(null,xs__12080);
var etc__12082 = cljs.core.next.call(null,xs__12080);
if(cljs.core.truth_(xs__12080))
{if(cljs.core.contains_QMARK_.call(null,s__12079,x__12081))
{return false;
} else
{{
var G__12084 = cljs.core.conj.call(null,s__12079,x__12081);
var G__12085 = etc__12082;
s__12079 = G__12084;
xs__12080 = G__12085;
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
var G__12083 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12083__delegate.call(this, x, y, more);
};
G__12083.cljs$lang$maxFixedArity = 2;
G__12083.cljs$lang$applyTo = (function (arglist__12086){
var x = cljs.core.first(arglist__12086);
var y = cljs.core.first(cljs.core.next(arglist__12086));
var more = cljs.core.rest(cljs.core.next(arglist__12086));
return G__12083__delegate(x, y, more);
});
G__12083.cljs$lang$arity$variadic = G__12083__delegate;
return G__12083;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__12090__12091 = x;
if(G__12090__12091)
{if(cljs.core.truth_((function (){var or__3824__auto____12092 = null;
if(cljs.core.truth_(or__3824__auto____12092))
{return or__3824__auto____12092;
} else
{return G__12090__12091.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__12090__12091.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__12090__12091);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__12090__12091);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__12097 = cljs.core.count.call(null,xs);
var yl__12098 = cljs.core.count.call(null,ys);
if((xl__12097 < yl__12098))
{return -1;
} else
{if((xl__12097 > yl__12098))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__12097,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__12099 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____12100 = (d__12099 === 0);
if(and__3822__auto____12100)
{return ((n + 1) < len);
} else
{return and__3822__auto____12100;
}
})())
{{
var G__12101 = xs;
var G__12102 = ys;
var G__12103 = len;
var G__12104 = (n + 1);
xs = G__12101;
ys = G__12102;
len = G__12103;
n = G__12104;
continue;
}
} else
{return d__12099;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__12106 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__12106))
{return r__12106;
} else
{if(cljs.core.truth_(r__12106))
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
void 0;
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__12108 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__12108,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__12108);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
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
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____12114 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____12114)
{var s__12115 = temp__3971__auto____12114;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__12115),cljs.core.next.call(null,s__12115));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__12116 = val;
var coll__12117 = cljs.core.seq.call(null,coll);
while(true){
if(coll__12117)
{var nval__12118 = f.call(null,val__12116,cljs.core.first.call(null,coll__12117));
if(cljs.core.reduced_QMARK_.call(null,nval__12118))
{return cljs.core.deref.call(null,nval__12118);
} else
{{
var G__12119 = nval__12118;
var G__12120 = cljs.core.next.call(null,coll__12117);
val__12116 = G__12119;
coll__12117 = G__12120;
continue;
}
}
} else
{return val__12116;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
void 0;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__12122 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__12122);
return cljs.core.vec.call(null,a__12122);
});
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
var reduce__2 = (function (f,coll){
if((function (){var G__12129__12130 = coll;
if(G__12129__12130)
{if((function (){var or__3824__auto____12131 = (G__12129__12130.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____12131)
{return or__3824__auto____12131;
} else
{return G__12129__12130.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__12129__12130.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__12129__12130);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__12129__12130);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__12132__12133 = coll;
if(G__12132__12133)
{if((function (){var or__3824__auto____12134 = (G__12132__12133.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____12134)
{return or__3824__auto____12134;
} else
{return G__12132__12133.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__12132__12133.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__12132__12133);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__12132__12133);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__12135 = this;
return this__12135.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__12136__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__12136 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12136__delegate.call(this, x, y, more);
};
G__12136.cljs$lang$maxFixedArity = 2;
G__12136.cljs$lang$applyTo = (function (arglist__12137){
var x = cljs.core.first(arglist__12137);
var y = cljs.core.first(cljs.core.next(arglist__12137));
var more = cljs.core.rest(cljs.core.next(arglist__12137));
return G__12136__delegate(x, y, more);
});
G__12136.cljs$lang$arity$variadic = G__12136__delegate;
return G__12136;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
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
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__12138__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__12138 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12138__delegate.call(this, x, y, more);
};
G__12138.cljs$lang$maxFixedArity = 2;
G__12138.cljs$lang$applyTo = (function (arglist__12139){
var x = cljs.core.first(arglist__12139);
var y = cljs.core.first(cljs.core.next(arglist__12139));
var more = cljs.core.rest(cljs.core.next(arglist__12139));
return G__12138__delegate(x, y, more);
});
G__12138.cljs$lang$arity$variadic = G__12138__delegate;
return G__12138;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__12140__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__12140 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12140__delegate.call(this, x, y, more);
};
G__12140.cljs$lang$maxFixedArity = 2;
G__12140.cljs$lang$applyTo = (function (arglist__12141){
var x = cljs.core.first(arglist__12141);
var y = cljs.core.first(cljs.core.next(arglist__12141));
var more = cljs.core.rest(cljs.core.next(arglist__12141));
return G__12140__delegate(x, y, more);
});
G__12140.cljs$lang$arity$variadic = G__12140__delegate;
return G__12140;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
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
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__12142__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__12142 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12142__delegate.call(this, x, y, more);
};
G__12142.cljs$lang$maxFixedArity = 2;
G__12142.cljs$lang$applyTo = (function (arglist__12143){
var x = cljs.core.first(arglist__12143);
var y = cljs.core.first(cljs.core.next(arglist__12143));
var more = cljs.core.rest(cljs.core.next(arglist__12143));
return G__12142__delegate(x, y, more);
});
G__12142.cljs$lang$arity$variadic = G__12142__delegate;
return G__12142;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
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
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__12144__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__12145 = y;
var G__12146 = cljs.core.first.call(null,more);
var G__12147 = cljs.core.next.call(null,more);
x = G__12145;
y = G__12146;
more = G__12147;
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
var G__12144 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12144__delegate.call(this, x, y, more);
};
G__12144.cljs$lang$maxFixedArity = 2;
G__12144.cljs$lang$applyTo = (function (arglist__12148){
var x = cljs.core.first(arglist__12148);
var y = cljs.core.first(cljs.core.next(arglist__12148));
var more = cljs.core.rest(cljs.core.next(arglist__12148));
return G__12144__delegate(x, y, more);
});
G__12144.cljs$lang$arity$variadic = G__12144__delegate;
return G__12144;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
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
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__12149__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__12150 = y;
var G__12151 = cljs.core.first.call(null,more);
var G__12152 = cljs.core.next.call(null,more);
x = G__12150;
y = G__12151;
more = G__12152;
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
var G__12149 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12149__delegate.call(this, x, y, more);
};
G__12149.cljs$lang$maxFixedArity = 2;
G__12149.cljs$lang$applyTo = (function (arglist__12153){
var x = cljs.core.first(arglist__12153);
var y = cljs.core.first(cljs.core.next(arglist__12153));
var more = cljs.core.rest(cljs.core.next(arglist__12153));
return G__12149__delegate(x, y, more);
});
G__12149.cljs$lang$arity$variadic = G__12149__delegate;
return G__12149;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
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
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__12154__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__12155 = y;
var G__12156 = cljs.core.first.call(null,more);
var G__12157 = cljs.core.next.call(null,more);
x = G__12155;
y = G__12156;
more = G__12157;
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
var G__12154 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12154__delegate.call(this, x, y, more);
};
G__12154.cljs$lang$maxFixedArity = 2;
G__12154.cljs$lang$applyTo = (function (arglist__12158){
var x = cljs.core.first(arglist__12158);
var y = cljs.core.first(cljs.core.next(arglist__12158));
var more = cljs.core.rest(cljs.core.next(arglist__12158));
return G__12154__delegate(x, y, more);
});
G__12154.cljs$lang$arity$variadic = G__12154__delegate;
return G__12154;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
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
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__12159__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__12160 = y;
var G__12161 = cljs.core.first.call(null,more);
var G__12162 = cljs.core.next.call(null,more);
x = G__12160;
y = G__12161;
more = G__12162;
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
var G__12159 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12159__delegate.call(this, x, y, more);
};
G__12159.cljs$lang$maxFixedArity = 2;
G__12159.cljs$lang$applyTo = (function (arglist__12163){
var x = cljs.core.first(arglist__12163);
var y = cljs.core.first(cljs.core.next(arglist__12163));
var more = cljs.core.rest(cljs.core.next(arglist__12163));
return G__12159__delegate(x, y, more);
});
G__12159.cljs$lang$arity$variadic = G__12159__delegate;
return G__12159;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
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
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__12164__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__12164 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12164__delegate.call(this, x, y, more);
};
G__12164.cljs$lang$maxFixedArity = 2;
G__12164.cljs$lang$applyTo = (function (arglist__12165){
var x = cljs.core.first(arglist__12165);
var y = cljs.core.first(cljs.core.next(arglist__12165));
var more = cljs.core.rest(cljs.core.next(arglist__12165));
return G__12164__delegate(x, y, more);
});
G__12164.cljs$lang$arity$variadic = G__12164__delegate;
return G__12164;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__12166__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__12166 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12166__delegate.call(this, x, y, more);
};
G__12166.cljs$lang$maxFixedArity = 2;
G__12166.cljs$lang$applyTo = (function (arglist__12167){
var x = cljs.core.first(arglist__12167);
var y = cljs.core.first(cljs.core.next(arglist__12167));
var more = cljs.core.rest(cljs.core.next(arglist__12167));
return G__12166__delegate(x, y, more);
});
G__12166.cljs$lang$arity$variadic = G__12166__delegate;
return G__12166;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
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
var rem__12169 = (n % d);
return cljs.core.fix.call(null,((n - rem__12169) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__12171 = cljs.core.quot.call(null,n,d);
return (n - (d * q__12171));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
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
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__12174 = (v - ((v >> 1) & 1431655765));
var v__12175 = ((v__12174 & 858993459) + ((v__12174 >> 2) & 858993459));
return ((((v__12175 + (v__12175 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__12176__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__12177 = y;
var G__12178 = cljs.core.first.call(null,more);
var G__12179 = cljs.core.next.call(null,more);
x = G__12177;
y = G__12178;
more = G__12179;
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
var G__12176 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12176__delegate.call(this, x, y, more);
};
G__12176.cljs$lang$maxFixedArity = 2;
G__12176.cljs$lang$applyTo = (function (arglist__12180){
var x = cljs.core.first(arglist__12180);
var y = cljs.core.first(cljs.core.next(arglist__12180));
var more = cljs.core.rest(cljs.core.next(arglist__12180));
return G__12176__delegate(x, y, more);
});
G__12176.cljs$lang$arity$variadic = G__12176__delegate;
return G__12176;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
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
var n__12184 = n;
var xs__12185 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____12186 = xs__12185;
if(and__3822__auto____12186)
{return (n__12184 > 0);
} else
{return and__3822__auto____12186;
}
})()))
{{
var G__12187 = (n__12184 - 1);
var G__12188 = cljs.core.next.call(null,xs__12185);
n__12184 = G__12187;
xs__12185 = G__12188;
continue;
}
} else
{return xs__12185;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__12189__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__12190 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__12191 = cljs.core.next.call(null,more);
sb = G__12190;
more = G__12191;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__12189 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12189__delegate.call(this, x, ys);
};
G__12189.cljs$lang$maxFixedArity = 1;
G__12189.cljs$lang$applyTo = (function (arglist__12192){
var x = cljs.core.first(arglist__12192);
var ys = cljs.core.rest(arglist__12192);
return G__12189__delegate(x, ys);
});
G__12189.cljs$lang$arity$variadic = G__12189__delegate;
return G__12189;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
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
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__12193__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__12194 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__12195 = cljs.core.next.call(null,more);
sb = G__12194;
more = G__12195;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__12193 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12193__delegate.call(this, x, ys);
};
G__12193.cljs$lang$maxFixedArity = 1;
G__12193.cljs$lang$applyTo = (function (arglist__12196){
var x = cljs.core.first(arglist__12196);
var ys = cljs.core.rest(arglist__12196);
return G__12193__delegate(x, ys);
});
G__12193.cljs$lang$arity$variadic = G__12193__delegate;
return G__12193;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__12199 = cljs.core.seq.call(null,x);
var ys__12200 = cljs.core.seq.call(null,y);
while(true){
if((xs__12199 == null))
{return (ys__12200 == null);
} else
{if((ys__12200 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__12199),cljs.core.first.call(null,ys__12200)))
{{
var G__12201 = cljs.core.next.call(null,xs__12199);
var G__12202 = cljs.core.next.call(null,ys__12200);
xs__12199 = G__12201;
ys__12200 = G__12202;
continue;
}
} else
{if("\uFDD0'else")
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
return cljs.core.reduce.call(null,(function (p1__12203_SHARP_,p2__12204_SHARP_){
return cljs.core.hash_combine.call(null,p1__12203_SHARP_,cljs.core.hash.call(null,p2__12204_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__12208 = 0;
var s__12209 = cljs.core.seq.call(null,m);
while(true){
if(s__12209)
{var e__12210 = cljs.core.first.call(null,s__12209);
{
var G__12211 = ((h__12208 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__12210)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__12210)))) % 4503599627370496);
var G__12212 = cljs.core.next.call(null,s__12209);
h__12208 = G__12211;
s__12209 = G__12212;
continue;
}
} else
{return h__12208;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__12216 = 0;
var s__12217 = cljs.core.seq.call(null,s);
while(true){
if(s__12217)
{var e__12218 = cljs.core.first.call(null,s__12217);
{
var G__12219 = ((h__12216 + cljs.core.hash.call(null,e__12218)) % 4503599627370496);
var G__12220 = cljs.core.next.call(null,s__12217);
h__12216 = G__12219;
s__12217 = G__12220;
continue;
}
} else
{return h__12216;
}
break;
}
});
void 0;
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__12241__12242 = cljs.core.seq.call(null,fn_map);
if(G__12241__12242)
{var G__12244__12246 = cljs.core.first.call(null,G__12241__12242);
var vec__12245__12247 = G__12244__12246;
var key_name__12248 = cljs.core.nth.call(null,vec__12245__12247,0,null);
var f__12249 = cljs.core.nth.call(null,vec__12245__12247,1,null);
var G__12241__12250 = G__12241__12242;
var G__12244__12251 = G__12244__12246;
var G__12241__12252 = G__12241__12250;
while(true){
var vec__12253__12254 = G__12244__12251;
var key_name__12255 = cljs.core.nth.call(null,vec__12253__12254,0,null);
var f__12256 = cljs.core.nth.call(null,vec__12253__12254,1,null);
var G__12241__12257 = G__12241__12252;
var str_name__12258 = cljs.core.name.call(null,key_name__12255);
(obj[str_name__12258] = f__12256);
var temp__3974__auto____12259 = cljs.core.next.call(null,G__12241__12257);
if(temp__3974__auto____12259)
{var G__12241__12260 = temp__3974__auto____12259;
{
var G__12261 = cljs.core.first.call(null,G__12241__12260);
var G__12262 = G__12241__12260;
G__12244__12251 = G__12261;
G__12241__12252 = G__12262;
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
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12263 = this;
var h__4806__auto____12264 = this__12263.__hash;
if(!((h__4806__auto____12264 == null)))
{return h__4806__auto____12264;
} else
{var h__4806__auto____12265 = cljs.core.hash_coll.call(null,coll);
this__12263.__hash = h__4806__auto____12265;
return h__4806__auto____12265;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__12266 = this;
if((this__12266.count === 1))
{return null;
} else
{return this__12266.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12267 = this;
return (new cljs.core.List(this__12267.meta,o,coll,(this__12267.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__12268 = this;
var this__12269 = this;
return cljs.core.pr_str.call(null,this__12269);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12270 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12271 = this;
return this__12271.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12272 = this;
return this__12272.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12273 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12274 = this;
return this__12274.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12275 = this;
if((this__12275.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__12275.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12276 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12277 = this;
return (new cljs.core.List(meta,this__12277.first,this__12277.rest,this__12277.count,this__12277.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12278 = this;
return this__12278.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12279 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12280 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__12281 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12282 = this;
return (new cljs.core.List(this__12282.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__12283 = this;
var this__12284 = this;
return cljs.core.pr_str.call(null,this__12284);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12285 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__12286 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__12287 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__12288 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12289 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12290 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12291 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12292 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12293 = this;
return this__12293.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12294 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__12298__12299 = coll;
if(G__12298__12299)
{if((function (){var or__3824__auto____12300 = (G__12298__12299.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____12300)
{return or__3824__auto____12300;
} else
{return G__12298__12299.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__12298__12299.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__12298__12299);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__12298__12299);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__12301__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__12301 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12301__delegate.call(this, x, y, z, items);
};
G__12301.cljs$lang$maxFixedArity = 3;
G__12301.cljs$lang$applyTo = (function (arglist__12302){
var x = cljs.core.first(arglist__12302);
var y = cljs.core.first(cljs.core.next(arglist__12302));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12302)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12302)));
return G__12301__delegate(x, y, z, items);
});
G__12301.cljs$lang$arity$variadic = G__12301__delegate;
return G__12301;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12303 = this;
var h__4806__auto____12304 = this__12303.__hash;
if(!((h__4806__auto____12304 == null)))
{return h__4806__auto____12304;
} else
{var h__4806__auto____12305 = cljs.core.hash_coll.call(null,coll);
this__12303.__hash = h__4806__auto____12305;
return h__4806__auto____12305;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__12306 = this;
if((this__12306.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__12306.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12307 = this;
return (new cljs.core.Cons(null,o,coll,this__12307.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__12308 = this;
var this__12309 = this;
return cljs.core.pr_str.call(null,this__12309);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12310 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12311 = this;
return this__12311.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12312 = this;
if((this__12312.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__12312.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12313 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12314 = this;
return (new cljs.core.Cons(meta,this__12314.first,this__12314.rest,this__12314.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12315 = this;
return this__12315.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12316 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12316.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____12321 = (coll == null);
if(or__3824__auto____12321)
{return or__3824__auto____12321;
} else
{var G__12322__12323 = coll;
if(G__12322__12323)
{if((function (){var or__3824__auto____12324 = (G__12322__12323.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____12324)
{return or__3824__auto____12324;
} else
{return G__12322__12323.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__12322__12323.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__12322__12323);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__12322__12323);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__12328__12329 = x;
if(G__12328__12329)
{if((function (){var or__3824__auto____12330 = (G__12328__12329.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____12330)
{return or__3824__auto____12330;
} else
{return G__12328__12329.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__12328__12329.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__12328__12329);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__12328__12329);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__12331 = null;
var G__12331__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__12331__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__12331 = function(string,f,start){
switch(arguments.length){
case 2:
return G__12331__2.call(this,string,f);
case 3:
return G__12331__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12331;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__12332 = null;
var G__12332__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__12332__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__12332 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__12332__2.call(this,string,k);
case 3:
return G__12332__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12332;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__12333 = null;
var G__12333__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__12333__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__12333 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__12333__2.call(this,string,n);
case 3:
return G__12333__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12333;
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
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function (this_sym12336,coll){
var this__12337 = this;
var this_sym12336__12338 = this;
var ___12339 = this_sym12336__12338;
if((coll == null))
{return null;
} else
{var strobj__12340 = coll.strobj;
if((strobj__12340 == null))
{return cljs.core._lookup.call(null,coll,this__12337.k,null);
} else
{return (strobj__12340[this__12337.k]);
}
}
});
cljs.core.Keyword.prototype.apply = (function (this_sym12334,args12335){
var this__12341 = this;
return this_sym12334.call.apply(this_sym12334,[this_sym12334].concat(args12335.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__12350 = null;
var G__12350__2 = (function (this_sym12344,coll){
var this_sym12344__12346 = this;
var this__12347 = this_sym12344__12346;
return cljs.core._lookup.call(null,coll,this__12347.toString(),null);
});
var G__12350__3 = (function (this_sym12345,coll,not_found){
var this_sym12345__12348 = this;
var this__12349 = this_sym12345__12348;
return cljs.core._lookup.call(null,coll,this__12349.toString(),not_found);
});
G__12350 = function(this_sym12345,coll,not_found){
switch(arguments.length){
case 2:
return G__12350__2.call(this,this_sym12345,coll);
case 3:
return G__12350__3.call(this,this_sym12345,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12350;
})()
;
String.prototype.apply = (function (this_sym12342,args12343){
return this_sym12342.call.apply(this_sym12342,[this_sym12342].concat(args12343.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__12352 = lazy_seq.x;
if(lazy_seq.realized)
{return x__12352;
} else
{lazy_seq.x = x__12352.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__12353 = this;
var h__4806__auto____12354 = this__12353.__hash;
if(!((h__4806__auto____12354 == null)))
{return h__4806__auto____12354;
} else
{var h__4806__auto____12355 = cljs.core.hash_coll.call(null,coll);
this__12353.__hash = h__4806__auto____12355;
return h__4806__auto____12355;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__12356 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__12357 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__12358 = this;
var this__12359 = this;
return cljs.core.pr_str.call(null,this__12359);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12360 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12361 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12362 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12363 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__12364 = this;
return (new cljs.core.LazySeq(meta,this__12364.realized,this__12364.x,this__12364.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12365 = this;
return this__12365.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__12366 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12366.meta);
});
cljs.core.LazySeq;
void 0;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__12367 = this;
return this__12367.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__12368 = this;
var ___12369 = this;
(this__12368.buf[this__12368.end] = o);
return this__12368.end = (this__12368.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__12370 = this;
var ___12371 = this;
var ret__12372 = (new cljs.core.ArrayChunk(this__12370.buf,0,this__12370.end));
this__12370.buf = null;
return ret__12372;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__12373 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__12373.arr[this__12373.off]),(this__12373.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__12374 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__12374.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__12375 = this;
if((this__12375.off === this__12375.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__12375.arr,(this__12375.off + 1),this__12375.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__12376 = this;
return (this__12376.arr[(this__12376.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__12377 = this;
if((function (){var and__3822__auto____12378 = (i >= 0);
if(and__3822__auto____12378)
{return (i < (this__12377.end - this__12377.off));
} else
{return and__3822__auto____12378;
}
})())
{return (this__12377.arr[(this__12377.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__12379 = this;
return (this__12379.end - this__12379.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__12380 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__12381 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__12382 = this;
return cljs.core._nth.call(null,this__12382.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__12383 = this;
if((cljs.core._count.call(null,this__12383.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__12383.chunk),this__12383.more,this__12383.meta));
} else
{if((this__12383.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__12383.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__12384 = this;
if((this__12384.more == null))
{return null;
} else
{return this__12384.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__12385 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__12386 = this;
return (new cljs.core.ChunkedCons(this__12386.chunk,this__12386.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__12387 = this;
return this__12387.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__12388 = this;
return this__12388.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__12389 = this;
if((this__12389.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__12389.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__12393__12394 = s;
if(G__12393__12394)
{if(cljs.core.truth_((function (){var or__3824__auto____12395 = null;
if(cljs.core.truth_(or__3824__auto____12395))
{return or__3824__auto____12395;
} else
{return G__12393__12394.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__12393__12394.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__12393__12394);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__12393__12394);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__12398 = [];
var s__12399 = s;
while(true){
if(cljs.core.seq.call(null,s__12399))
{ary__12398.push(cljs.core.first.call(null,s__12399));
{
var G__12400 = cljs.core.next.call(null,s__12399);
s__12399 = G__12400;
continue;
}
} else
{return ary__12398;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__12404 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__12405 = 0;
var xs__12406 = cljs.core.seq.call(null,coll);
while(true){
if(xs__12406)
{(ret__12404[i__12405] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__12406)));
{
var G__12407 = (i__12405 + 1);
var G__12408 = cljs.core.next.call(null,xs__12406);
i__12405 = G__12407;
xs__12406 = G__12408;
continue;
}
} else
{}
break;
}
return ret__12404;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__12416 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__12417 = cljs.core.seq.call(null,init_val_or_seq);
var i__12418 = 0;
var s__12419 = s__12417;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____12420 = s__12419;
if(and__3822__auto____12420)
{return (i__12418 < size);
} else
{return and__3822__auto____12420;
}
})()))
{(a__12416[i__12418] = cljs.core.first.call(null,s__12419));
{
var G__12423 = (i__12418 + 1);
var G__12424 = cljs.core.next.call(null,s__12419);
i__12418 = G__12423;
s__12419 = G__12424;
continue;
}
} else
{return a__12416;
}
break;
}
} else
{var n__5313__auto____12421 = size;
var i__12422 = 0;
while(true){
if((i__12422 < n__5313__auto____12421))
{(a__12416[i__12422] = init_val_or_seq);
{
var G__12425 = (i__12422 + 1);
i__12422 = G__12425;
continue;
}
} else
{}
break;
}
return a__12416;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__12433 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__12434 = cljs.core.seq.call(null,init_val_or_seq);
var i__12435 = 0;
var s__12436 = s__12434;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____12437 = s__12436;
if(and__3822__auto____12437)
{return (i__12435 < size);
} else
{return and__3822__auto____12437;
}
})()))
{(a__12433[i__12435] = cljs.core.first.call(null,s__12436));
{
var G__12440 = (i__12435 + 1);
var G__12441 = cljs.core.next.call(null,s__12436);
i__12435 = G__12440;
s__12436 = G__12441;
continue;
}
} else
{return a__12433;
}
break;
}
} else
{var n__5313__auto____12438 = size;
var i__12439 = 0;
while(true){
if((i__12439 < n__5313__auto____12438))
{(a__12433[i__12439] = init_val_or_seq);
{
var G__12442 = (i__12439 + 1);
i__12439 = G__12442;
continue;
}
} else
{}
break;
}
return a__12433;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__12450 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__12451 = cljs.core.seq.call(null,init_val_or_seq);
var i__12452 = 0;
var s__12453 = s__12451;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____12454 = s__12453;
if(and__3822__auto____12454)
{return (i__12452 < size);
} else
{return and__3822__auto____12454;
}
})()))
{(a__12450[i__12452] = cljs.core.first.call(null,s__12453));
{
var G__12457 = (i__12452 + 1);
var G__12458 = cljs.core.next.call(null,s__12453);
i__12452 = G__12457;
s__12453 = G__12458;
continue;
}
} else
{return a__12450;
}
break;
}
} else
{var n__5313__auto____12455 = size;
var i__12456 = 0;
while(true){
if((i__12456 < n__5313__auto____12455))
{(a__12450[i__12456] = init_val_or_seq);
{
var G__12459 = (i__12456 + 1);
i__12456 = G__12459;
continue;
}
} else
{}
break;
}
return a__12450;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__12464 = s;
var i__12465 = n;
var sum__12466 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____12467 = (i__12465 > 0);
if(and__3822__auto____12467)
{return cljs.core.seq.call(null,s__12464);
} else
{return and__3822__auto____12467;
}
})()))
{{
var G__12468 = cljs.core.next.call(null,s__12464);
var G__12469 = (i__12465 - 1);
var G__12470 = (sum__12466 + 1);
s__12464 = G__12468;
i__12465 = G__12469;
sum__12466 = G__12470;
continue;
}
} else
{return sum__12466;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
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
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12475 = cljs.core.seq.call(null,x);
if(s__12475)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__12475))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__12475),concat.call(null,cljs.core.chunk_rest.call(null,s__12475),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__12475),concat.call(null,cljs.core.rest.call(null,s__12475),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__12479__delegate = function (x,y,zs){
var cat__12478 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__12477 = cljs.core.seq.call(null,xys);
if(xys__12477)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__12477))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__12477),cat.call(null,cljs.core.chunk_rest.call(null,xys__12477),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__12477),cat.call(null,cljs.core.rest.call(null,xys__12477),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__12478.call(null,concat.call(null,x,y),zs);
};
var G__12479 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12479__delegate.call(this, x, y, zs);
};
G__12479.cljs$lang$maxFixedArity = 2;
G__12479.cljs$lang$applyTo = (function (arglist__12480){
var x = cljs.core.first(arglist__12480);
var y = cljs.core.first(cljs.core.next(arglist__12480));
var zs = cljs.core.rest(cljs.core.next(arglist__12480));
return G__12479__delegate(x, y, zs);
});
G__12479.cljs$lang$arity$variadic = G__12479__delegate;
return G__12479;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
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
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__12481__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__12481 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12481__delegate.call(this, a, b, c, d, more);
};
G__12481.cljs$lang$maxFixedArity = 4;
G__12481.cljs$lang$applyTo = (function (arglist__12482){
var a = cljs.core.first(arglist__12482);
var b = cljs.core.first(cljs.core.next(arglist__12482));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12482)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12482))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12482))));
return G__12481__delegate(a, b, c, d, more);
});
G__12481.cljs$lang$arity$variadic = G__12481__delegate;
return G__12481;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
void 0;cljs.core.apply_to = (function apply_to(f,argc,args){
var args__12524 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__12525 = cljs.core._first.call(null,args__12524);
var args__12526 = cljs.core._rest.call(null,args__12524);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__12525);
} else
{return f.call(null,a__12525);
}
} else
{var b__12527 = cljs.core._first.call(null,args__12526);
var args__12528 = cljs.core._rest.call(null,args__12526);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__12525,b__12527);
} else
{return f.call(null,a__12525,b__12527);
}
} else
{var c__12529 = cljs.core._first.call(null,args__12528);
var args__12530 = cljs.core._rest.call(null,args__12528);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__12525,b__12527,c__12529);
} else
{return f.call(null,a__12525,b__12527,c__12529);
}
} else
{var d__12531 = cljs.core._first.call(null,args__12530);
var args__12532 = cljs.core._rest.call(null,args__12530);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__12525,b__12527,c__12529,d__12531);
} else
{return f.call(null,a__12525,b__12527,c__12529,d__12531);
}
} else
{var e__12533 = cljs.core._first.call(null,args__12532);
var args__12534 = cljs.core._rest.call(null,args__12532);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__12525,b__12527,c__12529,d__12531,e__12533);
} else
{return f.call(null,a__12525,b__12527,c__12529,d__12531,e__12533);
}
} else
{var f__12535 = cljs.core._first.call(null,args__12534);
var args__12536 = cljs.core._rest.call(null,args__12534);
if((argc === 6))
{if(f__12535.cljs$lang$arity$6)
{return f__12535.cljs$lang$arity$6(a__12525,b__12527,c__12529,d__12531,e__12533,f__12535);
} else
{return f__12535.call(null,a__12525,b__12527,c__12529,d__12531,e__12533,f__12535);
}
} else
{var g__12537 = cljs.core._first.call(null,args__12536);
var args__12538 = cljs.core._rest.call(null,args__12536);
if((argc === 7))
{if(f__12535.cljs$lang$arity$7)
{return f__12535.cljs$lang$arity$7(a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537);
} else
{return f__12535.call(null,a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537);
}
} else
{var h__12539 = cljs.core._first.call(null,args__12538);
var args__12540 = cljs.core._rest.call(null,args__12538);
if((argc === 8))
{if(f__12535.cljs$lang$arity$8)
{return f__12535.cljs$lang$arity$8(a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539);
} else
{return f__12535.call(null,a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539);
}
} else
{var i__12541 = cljs.core._first.call(null,args__12540);
var args__12542 = cljs.core._rest.call(null,args__12540);
if((argc === 9))
{if(f__12535.cljs$lang$arity$9)
{return f__12535.cljs$lang$arity$9(a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541);
} else
{return f__12535.call(null,a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541);
}
} else
{var j__12543 = cljs.core._first.call(null,args__12542);
var args__12544 = cljs.core._rest.call(null,args__12542);
if((argc === 10))
{if(f__12535.cljs$lang$arity$10)
{return f__12535.cljs$lang$arity$10(a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543);
} else
{return f__12535.call(null,a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543);
}
} else
{var k__12545 = cljs.core._first.call(null,args__12544);
var args__12546 = cljs.core._rest.call(null,args__12544);
if((argc === 11))
{if(f__12535.cljs$lang$arity$11)
{return f__12535.cljs$lang$arity$11(a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545);
} else
{return f__12535.call(null,a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545);
}
} else
{var l__12547 = cljs.core._first.call(null,args__12546);
var args__12548 = cljs.core._rest.call(null,args__12546);
if((argc === 12))
{if(f__12535.cljs$lang$arity$12)
{return f__12535.cljs$lang$arity$12(a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545,l__12547);
} else
{return f__12535.call(null,a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545,l__12547);
}
} else
{var m__12549 = cljs.core._first.call(null,args__12548);
var args__12550 = cljs.core._rest.call(null,args__12548);
if((argc === 13))
{if(f__12535.cljs$lang$arity$13)
{return f__12535.cljs$lang$arity$13(a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545,l__12547,m__12549);
} else
{return f__12535.call(null,a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545,l__12547,m__12549);
}
} else
{var n__12551 = cljs.core._first.call(null,args__12550);
var args__12552 = cljs.core._rest.call(null,args__12550);
if((argc === 14))
{if(f__12535.cljs$lang$arity$14)
{return f__12535.cljs$lang$arity$14(a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545,l__12547,m__12549,n__12551);
} else
{return f__12535.call(null,a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545,l__12547,m__12549,n__12551);
}
} else
{var o__12553 = cljs.core._first.call(null,args__12552);
var args__12554 = cljs.core._rest.call(null,args__12552);
if((argc === 15))
{if(f__12535.cljs$lang$arity$15)
{return f__12535.cljs$lang$arity$15(a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545,l__12547,m__12549,n__12551,o__12553);
} else
{return f__12535.call(null,a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545,l__12547,m__12549,n__12551,o__12553);
}
} else
{var p__12555 = cljs.core._first.call(null,args__12554);
var args__12556 = cljs.core._rest.call(null,args__12554);
if((argc === 16))
{if(f__12535.cljs$lang$arity$16)
{return f__12535.cljs$lang$arity$16(a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545,l__12547,m__12549,n__12551,o__12553,p__12555);
} else
{return f__12535.call(null,a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545,l__12547,m__12549,n__12551,o__12553,p__12555);
}
} else
{var q__12557 = cljs.core._first.call(null,args__12556);
var args__12558 = cljs.core._rest.call(null,args__12556);
if((argc === 17))
{if(f__12535.cljs$lang$arity$17)
{return f__12535.cljs$lang$arity$17(a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545,l__12547,m__12549,n__12551,o__12553,p__12555,q__12557);
} else
{return f__12535.call(null,a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545,l__12547,m__12549,n__12551,o__12553,p__12555,q__12557);
}
} else
{var r__12559 = cljs.core._first.call(null,args__12558);
var args__12560 = cljs.core._rest.call(null,args__12558);
if((argc === 18))
{if(f__12535.cljs$lang$arity$18)
{return f__12535.cljs$lang$arity$18(a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545,l__12547,m__12549,n__12551,o__12553,p__12555,q__12557,r__12559);
} else
{return f__12535.call(null,a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545,l__12547,m__12549,n__12551,o__12553,p__12555,q__12557,r__12559);
}
} else
{var s__12561 = cljs.core._first.call(null,args__12560);
var args__12562 = cljs.core._rest.call(null,args__12560);
if((argc === 19))
{if(f__12535.cljs$lang$arity$19)
{return f__12535.cljs$lang$arity$19(a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545,l__12547,m__12549,n__12551,o__12553,p__12555,q__12557,r__12559,s__12561);
} else
{return f__12535.call(null,a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545,l__12547,m__12549,n__12551,o__12553,p__12555,q__12557,r__12559,s__12561);
}
} else
{var t__12563 = cljs.core._first.call(null,args__12562);
var args__12564 = cljs.core._rest.call(null,args__12562);
if((argc === 20))
{if(f__12535.cljs$lang$arity$20)
{return f__12535.cljs$lang$arity$20(a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545,l__12547,m__12549,n__12551,o__12553,p__12555,q__12557,r__12559,s__12561,t__12563);
} else
{return f__12535.call(null,a__12525,b__12527,c__12529,d__12531,e__12533,f__12535,g__12537,h__12539,i__12541,j__12543,k__12545,l__12547,m__12549,n__12551,o__12553,p__12555,q__12557,r__12559,s__12561,t__12563);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
void 0;/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__12579 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__12580 = cljs.core.bounded_count.call(null,args,(fixed_arity__12579 + 1));
if((bc__12580 <= fixed_arity__12579))
{return cljs.core.apply_to.call(null,f,bc__12580,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__12581 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__12582 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__12583 = cljs.core.bounded_count.call(null,arglist__12581,(fixed_arity__12582 + 1));
if((bc__12583 <= fixed_arity__12582))
{return cljs.core.apply_to.call(null,f,bc__12583,arglist__12581);
} else
{return f.cljs$lang$applyTo(arglist__12581);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12581));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__12584 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__12585 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__12586 = cljs.core.bounded_count.call(null,arglist__12584,(fixed_arity__12585 + 1));
if((bc__12586 <= fixed_arity__12585))
{return cljs.core.apply_to.call(null,f,bc__12586,arglist__12584);
} else
{return f.cljs$lang$applyTo(arglist__12584);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12584));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__12587 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__12588 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__12589 = cljs.core.bounded_count.call(null,arglist__12587,(fixed_arity__12588 + 1));
if((bc__12589 <= fixed_arity__12588))
{return cljs.core.apply_to.call(null,f,bc__12589,arglist__12587);
} else
{return f.cljs$lang$applyTo(arglist__12587);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12587));
}
});
var apply__6 = (function() { 
var G__12593__delegate = function (f,a,b,c,d,args){
var arglist__12590 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__12591 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__12592 = cljs.core.bounded_count.call(null,arglist__12590,(fixed_arity__12591 + 1));
if((bc__12592 <= fixed_arity__12591))
{return cljs.core.apply_to.call(null,f,bc__12592,arglist__12590);
} else
{return f.cljs$lang$applyTo(arglist__12590);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12590));
}
};
var G__12593 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12593__delegate.call(this, f, a, b, c, d, args);
};
G__12593.cljs$lang$maxFixedArity = 5;
G__12593.cljs$lang$applyTo = (function (arglist__12594){
var f = cljs.core.first(arglist__12594);
var a = cljs.core.first(cljs.core.next(arglist__12594));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12594)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12594))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12594)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12594)))));
return G__12593__delegate(f, a, b, c, d, args);
});
G__12593.cljs$lang$arity$variadic = G__12593__delegate;
return G__12593;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
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
vary_meta.cljs$lang$applyTo = (function (arglist__12595){
var obj = cljs.core.first(arglist__12595);
var f = cljs.core.first(cljs.core.next(arglist__12595));
var args = cljs.core.rest(cljs.core.next(arglist__12595));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__12596__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__12596 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12596__delegate.call(this, x, y, more);
};
G__12596.cljs$lang$maxFixedArity = 2;
G__12596.cljs$lang$applyTo = (function (arglist__12597){
var x = cljs.core.first(arglist__12597);
var y = cljs.core.first(cljs.core.next(arglist__12597));
var more = cljs.core.rest(cljs.core.next(arglist__12597));
return G__12596__delegate(x, y, more);
});
G__12596.cljs$lang$arity$variadic = G__12596__delegate;
return G__12596;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
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
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__12598 = pred;
var G__12599 = cljs.core.next.call(null,coll);
pred = G__12598;
coll = G__12599;
continue;
}
} else
{if("\uFDD0'else")
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
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____12601 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____12601))
{return or__3824__auto____12601;
} else
{{
var G__12602 = pred;
var G__12603 = cljs.core.next.call(null,coll);
pred = G__12602;
coll = G__12603;
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
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
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
var G__12604 = null;
var G__12604__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__12604__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__12604__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__12604__3 = (function() { 
var G__12605__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__12605 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12605__delegate.call(this, x, y, zs);
};
G__12605.cljs$lang$maxFixedArity = 2;
G__12605.cljs$lang$applyTo = (function (arglist__12606){
var x = cljs.core.first(arglist__12606);
var y = cljs.core.first(cljs.core.next(arglist__12606));
var zs = cljs.core.rest(cljs.core.next(arglist__12606));
return G__12605__delegate(x, y, zs);
});
G__12605.cljs$lang$arity$variadic = G__12605__delegate;
return G__12605;
})()
;
G__12604 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__12604__0.call(this);
case 1:
return G__12604__1.call(this,x);
case 2:
return G__12604__2.call(this,x,y);
default:
return G__12604__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__12604.cljs$lang$maxFixedArity = 2;
G__12604.cljs$lang$applyTo = G__12604__3.cljs$lang$applyTo;
return G__12604;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__12607__delegate = function (args){
return x;
};
var G__12607 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12607__delegate.call(this, args);
};
G__12607.cljs$lang$maxFixedArity = 0;
G__12607.cljs$lang$applyTo = (function (arglist__12608){
var args = cljs.core.seq(arglist__12608);;
return G__12607__delegate(args);
});
G__12607.cljs$lang$arity$variadic = G__12607__delegate;
return G__12607;
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
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__12615 = null;
var G__12615__0 = (function (){
return f.call(null,g.call(null));
});
var G__12615__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__12615__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__12615__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__12615__4 = (function() { 
var G__12616__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__12616 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12616__delegate.call(this, x, y, z, args);
};
G__12616.cljs$lang$maxFixedArity = 3;
G__12616.cljs$lang$applyTo = (function (arglist__12617){
var x = cljs.core.first(arglist__12617);
var y = cljs.core.first(cljs.core.next(arglist__12617));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12617)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12617)));
return G__12616__delegate(x, y, z, args);
});
G__12616.cljs$lang$arity$variadic = G__12616__delegate;
return G__12616;
})()
;
G__12615 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12615__0.call(this);
case 1:
return G__12615__1.call(this,x);
case 2:
return G__12615__2.call(this,x,y);
case 3:
return G__12615__3.call(this,x,y,z);
default:
return G__12615__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12615.cljs$lang$maxFixedArity = 3;
G__12615.cljs$lang$applyTo = G__12615__4.cljs$lang$applyTo;
return G__12615;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__12618 = null;
var G__12618__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__12618__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__12618__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__12618__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__12618__4 = (function() { 
var G__12619__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__12619 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12619__delegate.call(this, x, y, z, args);
};
G__12619.cljs$lang$maxFixedArity = 3;
G__12619.cljs$lang$applyTo = (function (arglist__12620){
var x = cljs.core.first(arglist__12620);
var y = cljs.core.first(cljs.core.next(arglist__12620));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12620)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12620)));
return G__12619__delegate(x, y, z, args);
});
G__12619.cljs$lang$arity$variadic = G__12619__delegate;
return G__12619;
})()
;
G__12618 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12618__0.call(this);
case 1:
return G__12618__1.call(this,x);
case 2:
return G__12618__2.call(this,x,y);
case 3:
return G__12618__3.call(this,x,y,z);
default:
return G__12618__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12618.cljs$lang$maxFixedArity = 3;
G__12618.cljs$lang$applyTo = G__12618__4.cljs$lang$applyTo;
return G__12618;
})()
});
var comp__4 = (function() { 
var G__12621__delegate = function (f1,f2,f3,fs){
var fs__12612 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__12622__delegate = function (args){
var ret__12613 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__12612),args);
var fs__12614 = cljs.core.next.call(null,fs__12612);
while(true){
if(fs__12614)
{{
var G__12623 = cljs.core.first.call(null,fs__12614).call(null,ret__12613);
var G__12624 = cljs.core.next.call(null,fs__12614);
ret__12613 = G__12623;
fs__12614 = G__12624;
continue;
}
} else
{return ret__12613;
}
break;
}
};
var G__12622 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12622__delegate.call(this, args);
};
G__12622.cljs$lang$maxFixedArity = 0;
G__12622.cljs$lang$applyTo = (function (arglist__12625){
var args = cljs.core.seq(arglist__12625);;
return G__12622__delegate(args);
});
G__12622.cljs$lang$arity$variadic = G__12622__delegate;
return G__12622;
})()
;
};
var G__12621 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12621__delegate.call(this, f1, f2, f3, fs);
};
G__12621.cljs$lang$maxFixedArity = 3;
G__12621.cljs$lang$applyTo = (function (arglist__12626){
var f1 = cljs.core.first(arglist__12626);
var f2 = cljs.core.first(cljs.core.next(arglist__12626));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12626)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12626)));
return G__12621__delegate(f1, f2, f3, fs);
});
G__12621.cljs$lang$arity$variadic = G__12621__delegate;
return G__12621;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
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
var partial__2 = (function (f,arg1){
return (function() { 
var G__12627__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__12627 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12627__delegate.call(this, args);
};
G__12627.cljs$lang$maxFixedArity = 0;
G__12627.cljs$lang$applyTo = (function (arglist__12628){
var args = cljs.core.seq(arglist__12628);;
return G__12627__delegate(args);
});
G__12627.cljs$lang$arity$variadic = G__12627__delegate;
return G__12627;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__12629__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__12629 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12629__delegate.call(this, args);
};
G__12629.cljs$lang$maxFixedArity = 0;
G__12629.cljs$lang$applyTo = (function (arglist__12630){
var args = cljs.core.seq(arglist__12630);;
return G__12629__delegate(args);
});
G__12629.cljs$lang$arity$variadic = G__12629__delegate;
return G__12629;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__12631__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__12631 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12631__delegate.call(this, args);
};
G__12631.cljs$lang$maxFixedArity = 0;
G__12631.cljs$lang$applyTo = (function (arglist__12632){
var args = cljs.core.seq(arglist__12632);;
return G__12631__delegate(args);
});
G__12631.cljs$lang$arity$variadic = G__12631__delegate;
return G__12631;
})()
;
});
var partial__5 = (function() { 
var G__12633__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__12634__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__12634 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12634__delegate.call(this, args);
};
G__12634.cljs$lang$maxFixedArity = 0;
G__12634.cljs$lang$applyTo = (function (arglist__12635){
var args = cljs.core.seq(arglist__12635);;
return G__12634__delegate(args);
});
G__12634.cljs$lang$arity$variadic = G__12634__delegate;
return G__12634;
})()
;
};
var G__12633 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12633__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__12633.cljs$lang$maxFixedArity = 4;
G__12633.cljs$lang$applyTo = (function (arglist__12636){
var f = cljs.core.first(arglist__12636);
var arg1 = cljs.core.first(cljs.core.next(arglist__12636));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12636)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12636))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12636))));
return G__12633__delegate(f, arg1, arg2, arg3, more);
});
G__12633.cljs$lang$arity$variadic = G__12633__delegate;
return G__12633;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
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
var fnil__2 = (function (f,x){
return (function() {
var G__12637 = null;
var G__12637__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__12637__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__12637__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__12637__4 = (function() { 
var G__12638__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__12638 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12638__delegate.call(this, a, b, c, ds);
};
G__12638.cljs$lang$maxFixedArity = 3;
G__12638.cljs$lang$applyTo = (function (arglist__12639){
var a = cljs.core.first(arglist__12639);
var b = cljs.core.first(cljs.core.next(arglist__12639));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12639)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12639)));
return G__12638__delegate(a, b, c, ds);
});
G__12638.cljs$lang$arity$variadic = G__12638__delegate;
return G__12638;
})()
;
G__12637 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__12637__1.call(this,a);
case 2:
return G__12637__2.call(this,a,b);
case 3:
return G__12637__3.call(this,a,b,c);
default:
return G__12637__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12637.cljs$lang$maxFixedArity = 3;
G__12637.cljs$lang$applyTo = G__12637__4.cljs$lang$applyTo;
return G__12637;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__12640 = null;
var G__12640__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__12640__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__12640__4 = (function() { 
var G__12641__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__12641 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12641__delegate.call(this, a, b, c, ds);
};
G__12641.cljs$lang$maxFixedArity = 3;
G__12641.cljs$lang$applyTo = (function (arglist__12642){
var a = cljs.core.first(arglist__12642);
var b = cljs.core.first(cljs.core.next(arglist__12642));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12642)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12642)));
return G__12641__delegate(a, b, c, ds);
});
G__12641.cljs$lang$arity$variadic = G__12641__delegate;
return G__12641;
})()
;
G__12640 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__12640__2.call(this,a,b);
case 3:
return G__12640__3.call(this,a,b,c);
default:
return G__12640__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12640.cljs$lang$maxFixedArity = 3;
G__12640.cljs$lang$applyTo = G__12640__4.cljs$lang$applyTo;
return G__12640;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__12643 = null;
var G__12643__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__12643__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__12643__4 = (function() { 
var G__12644__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__12644 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12644__delegate.call(this, a, b, c, ds);
};
G__12644.cljs$lang$maxFixedArity = 3;
G__12644.cljs$lang$applyTo = (function (arglist__12645){
var a = cljs.core.first(arglist__12645);
var b = cljs.core.first(cljs.core.next(arglist__12645));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12645)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12645)));
return G__12644__delegate(a, b, c, ds);
});
G__12644.cljs$lang$arity$variadic = G__12644__delegate;
return G__12644;
})()
;
G__12643 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__12643__2.call(this,a,b);
case 3:
return G__12643__3.call(this,a,b,c);
default:
return G__12643__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12643.cljs$lang$maxFixedArity = 3;
G__12643.cljs$lang$applyTo = G__12643__4.cljs$lang$applyTo;
return G__12643;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
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
var mapi__12661 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____12669 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12669)
{var s__12670 = temp__3974__auto____12669;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12670))
{var c__12671 = cljs.core.chunk_first.call(null,s__12670);
var size__12672 = cljs.core.count.call(null,c__12671);
var b__12673 = cljs.core.chunk_buffer.call(null,size__12672);
var n__5313__auto____12674 = size__12672;
var i__12675 = 0;
while(true){
if((i__12675 < n__5313__auto____12674))
{cljs.core.chunk_append.call(null,b__12673,f.call(null,(idx + i__12675),cljs.core._nth.call(null,c__12671,i__12675)));
{
var G__12676 = (i__12675 + 1);
i__12675 = G__12676;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12673),mapi.call(null,(idx + size__12672),cljs.core.chunk_rest.call(null,s__12670)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__12670)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__12670)));
}
} else
{return null;
}
}),null));
});
return mapi__12661.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____12686 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12686)
{var s__12687 = temp__3974__auto____12686;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12687))
{var c__12688 = cljs.core.chunk_first.call(null,s__12687);
var size__12689 = cljs.core.count.call(null,c__12688);
var b__12690 = cljs.core.chunk_buffer.call(null,size__12689);
var n__5313__auto____12691 = size__12689;
var i__12692 = 0;
while(true){
if((i__12692 < n__5313__auto____12691))
{var x__12693 = f.call(null,cljs.core._nth.call(null,c__12688,i__12692));
if((x__12693 == null))
{} else
{cljs.core.chunk_append.call(null,b__12690,x__12693);
}
{
var G__12695 = (i__12692 + 1);
i__12692 = G__12695;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12690),keep.call(null,f,cljs.core.chunk_rest.call(null,s__12687)));
} else
{var x__12694 = f.call(null,cljs.core.first.call(null,s__12687));
if((x__12694 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__12687));
} else
{return cljs.core.cons.call(null,x__12694,keep.call(null,f,cljs.core.rest.call(null,s__12687)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__12721 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____12731 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12731)
{var s__12732 = temp__3974__auto____12731;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12732))
{var c__12733 = cljs.core.chunk_first.call(null,s__12732);
var size__12734 = cljs.core.count.call(null,c__12733);
var b__12735 = cljs.core.chunk_buffer.call(null,size__12734);
var n__5313__auto____12736 = size__12734;
var i__12737 = 0;
while(true){
if((i__12737 < n__5313__auto____12736))
{var x__12738 = f.call(null,(idx + i__12737),cljs.core._nth.call(null,c__12733,i__12737));
if((x__12738 == null))
{} else
{cljs.core.chunk_append.call(null,b__12735,x__12738);
}
{
var G__12740 = (i__12737 + 1);
i__12737 = G__12740;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12735),keepi.call(null,(idx + size__12734),cljs.core.chunk_rest.call(null,s__12732)));
} else
{var x__12739 = f.call(null,idx,cljs.core.first.call(null,s__12732));
if((x__12739 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__12732));
} else
{return cljs.core.cons.call(null,x__12739,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__12732)));
}
}
} else
{return null;
}
}),null));
});
return keepi__12721.call(null,0,coll);
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
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12826 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____12826))
{return p.call(null,y);
} else
{return and__3822__auto____12826;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12827 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____12827))
{var and__3822__auto____12828 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____12828))
{return p.call(null,z);
} else
{return and__3822__auto____12828;
}
} else
{return and__3822__auto____12827;
}
})());
});
var ep1__4 = (function() { 
var G__12897__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12829 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____12829))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____12829;
}
})());
};
var G__12897 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12897__delegate.call(this, x, y, z, args);
};
G__12897.cljs$lang$maxFixedArity = 3;
G__12897.cljs$lang$applyTo = (function (arglist__12898){
var x = cljs.core.first(arglist__12898);
var y = cljs.core.first(cljs.core.next(arglist__12898));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12898)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12898)));
return G__12897__delegate(x, y, z, args);
});
G__12897.cljs$lang$arity$variadic = G__12897__delegate;
return G__12897;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12841 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____12841))
{return p2.call(null,x);
} else
{return and__3822__auto____12841;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12842 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____12842))
{var and__3822__auto____12843 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____12843))
{var and__3822__auto____12844 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____12844))
{return p2.call(null,y);
} else
{return and__3822__auto____12844;
}
} else
{return and__3822__auto____12843;
}
} else
{return and__3822__auto____12842;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12845 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____12845))
{var and__3822__auto____12846 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____12846))
{var and__3822__auto____12847 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____12847))
{var and__3822__auto____12848 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____12848))
{var and__3822__auto____12849 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____12849))
{return p2.call(null,z);
} else
{return and__3822__auto____12849;
}
} else
{return and__3822__auto____12848;
}
} else
{return and__3822__auto____12847;
}
} else
{return and__3822__auto____12846;
}
} else
{return and__3822__auto____12845;
}
})());
});
var ep2__4 = (function() { 
var G__12899__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12850 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____12850))
{return cljs.core.every_QMARK_.call(null,(function (p1__12696_SHARP_){
var and__3822__auto____12851 = p1.call(null,p1__12696_SHARP_);
if(cljs.core.truth_(and__3822__auto____12851))
{return p2.call(null,p1__12696_SHARP_);
} else
{return and__3822__auto____12851;
}
}),args);
} else
{return and__3822__auto____12850;
}
})());
};
var G__12899 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12899__delegate.call(this, x, y, z, args);
};
G__12899.cljs$lang$maxFixedArity = 3;
G__12899.cljs$lang$applyTo = (function (arglist__12900){
var x = cljs.core.first(arglist__12900);
var y = cljs.core.first(cljs.core.next(arglist__12900));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12900)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12900)));
return G__12899__delegate(x, y, z, args);
});
G__12899.cljs$lang$arity$variadic = G__12899__delegate;
return G__12899;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12870 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____12870))
{var and__3822__auto____12871 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____12871))
{return p3.call(null,x);
} else
{return and__3822__auto____12871;
}
} else
{return and__3822__auto____12870;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12872 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____12872))
{var and__3822__auto____12873 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____12873))
{var and__3822__auto____12874 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____12874))
{var and__3822__auto____12875 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____12875))
{var and__3822__auto____12876 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____12876))
{return p3.call(null,y);
} else
{return and__3822__auto____12876;
}
} else
{return and__3822__auto____12875;
}
} else
{return and__3822__auto____12874;
}
} else
{return and__3822__auto____12873;
}
} else
{return and__3822__auto____12872;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12877 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____12877))
{var and__3822__auto____12878 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____12878))
{var and__3822__auto____12879 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____12879))
{var and__3822__auto____12880 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____12880))
{var and__3822__auto____12881 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____12881))
{var and__3822__auto____12882 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____12882))
{var and__3822__auto____12883 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____12883))
{var and__3822__auto____12884 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____12884))
{return p3.call(null,z);
} else
{return and__3822__auto____12884;
}
} else
{return and__3822__auto____12883;
}
} else
{return and__3822__auto____12882;
}
} else
{return and__3822__auto____12881;
}
} else
{return and__3822__auto____12880;
}
} else
{return and__3822__auto____12879;
}
} else
{return and__3822__auto____12878;
}
} else
{return and__3822__auto____12877;
}
})());
});
var ep3__4 = (function() { 
var G__12901__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12885 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____12885))
{return cljs.core.every_QMARK_.call(null,(function (p1__12697_SHARP_){
var and__3822__auto____12886 = p1.call(null,p1__12697_SHARP_);
if(cljs.core.truth_(and__3822__auto____12886))
{var and__3822__auto____12887 = p2.call(null,p1__12697_SHARP_);
if(cljs.core.truth_(and__3822__auto____12887))
{return p3.call(null,p1__12697_SHARP_);
} else
{return and__3822__auto____12887;
}
} else
{return and__3822__auto____12886;
}
}),args);
} else
{return and__3822__auto____12885;
}
})());
};
var G__12901 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12901__delegate.call(this, x, y, z, args);
};
G__12901.cljs$lang$maxFixedArity = 3;
G__12901.cljs$lang$applyTo = (function (arglist__12902){
var x = cljs.core.first(arglist__12902);
var y = cljs.core.first(cljs.core.next(arglist__12902));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12902)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12902)));
return G__12901__delegate(x, y, z, args);
});
G__12901.cljs$lang$arity$variadic = G__12901__delegate;
return G__12901;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__12903__delegate = function (p1,p2,p3,ps){
var ps__12888 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__12698_SHARP_){
return p1__12698_SHARP_.call(null,x);
}),ps__12888);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__12699_SHARP_){
var and__3822__auto____12893 = p1__12699_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____12893))
{return p1__12699_SHARP_.call(null,y);
} else
{return and__3822__auto____12893;
}
}),ps__12888);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__12700_SHARP_){
var and__3822__auto____12894 = p1__12700_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____12894))
{var and__3822__auto____12895 = p1__12700_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____12895))
{return p1__12700_SHARP_.call(null,z);
} else
{return and__3822__auto____12895;
}
} else
{return and__3822__auto____12894;
}
}),ps__12888);
});
var epn__4 = (function() { 
var G__12904__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____12896 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____12896))
{return cljs.core.every_QMARK_.call(null,(function (p1__12701_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__12701_SHARP_,args);
}),ps__12888);
} else
{return and__3822__auto____12896;
}
})());
};
var G__12904 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12904__delegate.call(this, x, y, z, args);
};
G__12904.cljs$lang$maxFixedArity = 3;
G__12904.cljs$lang$applyTo = (function (arglist__12905){
var x = cljs.core.first(arglist__12905);
var y = cljs.core.first(cljs.core.next(arglist__12905));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12905)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12905)));
return G__12904__delegate(x, y, z, args);
});
G__12904.cljs$lang$arity$variadic = G__12904__delegate;
return G__12904;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__12903 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12903__delegate.call(this, p1, p2, p3, ps);
};
G__12903.cljs$lang$maxFixedArity = 3;
G__12903.cljs$lang$applyTo = (function (arglist__12906){
var p1 = cljs.core.first(arglist__12906);
var p2 = cljs.core.first(cljs.core.next(arglist__12906));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12906)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12906)));
return G__12903__delegate(p1, p2, p3, ps);
});
G__12903.cljs$lang$arity$variadic = G__12903__delegate;
return G__12903;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
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
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____12987 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____12987))
{return or__3824__auto____12987;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____12988 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____12988))
{return or__3824__auto____12988;
} else
{var or__3824__auto____12989 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____12989))
{return or__3824__auto____12989;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__13058__delegate = function (x,y,z,args){
var or__3824__auto____12990 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____12990))
{return or__3824__auto____12990;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__13058 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13058__delegate.call(this, x, y, z, args);
};
G__13058.cljs$lang$maxFixedArity = 3;
G__13058.cljs$lang$applyTo = (function (arglist__13059){
var x = cljs.core.first(arglist__13059);
var y = cljs.core.first(cljs.core.next(arglist__13059));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13059)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13059)));
return G__13058__delegate(x, y, z, args);
});
G__13058.cljs$lang$arity$variadic = G__13058__delegate;
return G__13058;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____13002 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____13002))
{return or__3824__auto____13002;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____13003 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____13003))
{return or__3824__auto____13003;
} else
{var or__3824__auto____13004 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____13004))
{return or__3824__auto____13004;
} else
{var or__3824__auto____13005 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____13005))
{return or__3824__auto____13005;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____13006 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____13006))
{return or__3824__auto____13006;
} else
{var or__3824__auto____13007 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____13007))
{return or__3824__auto____13007;
} else
{var or__3824__auto____13008 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____13008))
{return or__3824__auto____13008;
} else
{var or__3824__auto____13009 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____13009))
{return or__3824__auto____13009;
} else
{var or__3824__auto____13010 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____13010))
{return or__3824__auto____13010;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__13060__delegate = function (x,y,z,args){
var or__3824__auto____13011 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____13011))
{return or__3824__auto____13011;
} else
{return cljs.core.some.call(null,(function (p1__12741_SHARP_){
var or__3824__auto____13012 = p1.call(null,p1__12741_SHARP_);
if(cljs.core.truth_(or__3824__auto____13012))
{return or__3824__auto____13012;
} else
{return p2.call(null,p1__12741_SHARP_);
}
}),args);
}
};
var G__13060 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13060__delegate.call(this, x, y, z, args);
};
G__13060.cljs$lang$maxFixedArity = 3;
G__13060.cljs$lang$applyTo = (function (arglist__13061){
var x = cljs.core.first(arglist__13061);
var y = cljs.core.first(cljs.core.next(arglist__13061));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13061)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13061)));
return G__13060__delegate(x, y, z, args);
});
G__13060.cljs$lang$arity$variadic = G__13060__delegate;
return G__13060;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____13031 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____13031))
{return or__3824__auto____13031;
} else
{var or__3824__auto____13032 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____13032))
{return or__3824__auto____13032;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____13033 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____13033))
{return or__3824__auto____13033;
} else
{var or__3824__auto____13034 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____13034))
{return or__3824__auto____13034;
} else
{var or__3824__auto____13035 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____13035))
{return or__3824__auto____13035;
} else
{var or__3824__auto____13036 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____13036))
{return or__3824__auto____13036;
} else
{var or__3824__auto____13037 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____13037))
{return or__3824__auto____13037;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____13038 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____13038))
{return or__3824__auto____13038;
} else
{var or__3824__auto____13039 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____13039))
{return or__3824__auto____13039;
} else
{var or__3824__auto____13040 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____13040))
{return or__3824__auto____13040;
} else
{var or__3824__auto____13041 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____13041))
{return or__3824__auto____13041;
} else
{var or__3824__auto____13042 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____13042))
{return or__3824__auto____13042;
} else
{var or__3824__auto____13043 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____13043))
{return or__3824__auto____13043;
} else
{var or__3824__auto____13044 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____13044))
{return or__3824__auto____13044;
} else
{var or__3824__auto____13045 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____13045))
{return or__3824__auto____13045;
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
var sp3__4 = (function() { 
var G__13062__delegate = function (x,y,z,args){
var or__3824__auto____13046 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____13046))
{return or__3824__auto____13046;
} else
{return cljs.core.some.call(null,(function (p1__12742_SHARP_){
var or__3824__auto____13047 = p1.call(null,p1__12742_SHARP_);
if(cljs.core.truth_(or__3824__auto____13047))
{return or__3824__auto____13047;
} else
{var or__3824__auto____13048 = p2.call(null,p1__12742_SHARP_);
if(cljs.core.truth_(or__3824__auto____13048))
{return or__3824__auto____13048;
} else
{return p3.call(null,p1__12742_SHARP_);
}
}
}),args);
}
};
var G__13062 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13062__delegate.call(this, x, y, z, args);
};
G__13062.cljs$lang$maxFixedArity = 3;
G__13062.cljs$lang$applyTo = (function (arglist__13063){
var x = cljs.core.first(arglist__13063);
var y = cljs.core.first(cljs.core.next(arglist__13063));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13063)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13063)));
return G__13062__delegate(x, y, z, args);
});
G__13062.cljs$lang$arity$variadic = G__13062__delegate;
return G__13062;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__13064__delegate = function (p1,p2,p3,ps){
var ps__13049 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__12743_SHARP_){
return p1__12743_SHARP_.call(null,x);
}),ps__13049);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__12744_SHARP_){
var or__3824__auto____13054 = p1__12744_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____13054))
{return or__3824__auto____13054;
} else
{return p1__12744_SHARP_.call(null,y);
}
}),ps__13049);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__12745_SHARP_){
var or__3824__auto____13055 = p1__12745_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____13055))
{return or__3824__auto____13055;
} else
{var or__3824__auto____13056 = p1__12745_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____13056))
{return or__3824__auto____13056;
} else
{return p1__12745_SHARP_.call(null,z);
}
}
}),ps__13049);
});
var spn__4 = (function() { 
var G__13065__delegate = function (x,y,z,args){
var or__3824__auto____13057 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____13057))
{return or__3824__auto____13057;
} else
{return cljs.core.some.call(null,(function (p1__12746_SHARP_){
return cljs.core.some.call(null,p1__12746_SHARP_,args);
}),ps__13049);
}
};
var G__13065 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13065__delegate.call(this, x, y, z, args);
};
G__13065.cljs$lang$maxFixedArity = 3;
G__13065.cljs$lang$applyTo = (function (arglist__13066){
var x = cljs.core.first(arglist__13066);
var y = cljs.core.first(cljs.core.next(arglist__13066));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13066)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13066)));
return G__13065__delegate(x, y, z, args);
});
G__13065.cljs$lang$arity$variadic = G__13065__delegate;
return G__13065;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__13064 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13064__delegate.call(this, p1, p2, p3, ps);
};
G__13064.cljs$lang$maxFixedArity = 3;
G__13064.cljs$lang$applyTo = (function (arglist__13067){
var p1 = cljs.core.first(arglist__13067);
var p2 = cljs.core.first(cljs.core.next(arglist__13067));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13067)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13067)));
return G__13064__delegate(p1, p2, p3, ps);
});
G__13064.cljs$lang$arity$variadic = G__13064__delegate;
return G__13064;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
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
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____13086 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13086)
{var s__13087 = temp__3974__auto____13086;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13087))
{var c__13088 = cljs.core.chunk_first.call(null,s__13087);
var size__13089 = cljs.core.count.call(null,c__13088);
var b__13090 = cljs.core.chunk_buffer.call(null,size__13089);
var n__5313__auto____13091 = size__13089;
var i__13092 = 0;
while(true){
if((i__13092 < n__5313__auto____13091))
{cljs.core.chunk_append.call(null,b__13090,f.call(null,cljs.core._nth.call(null,c__13088,i__13092)));
{
var G__13104 = (i__13092 + 1);
i__13092 = G__13104;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13090),map.call(null,f,cljs.core.chunk_rest.call(null,s__13087)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__13087)),map.call(null,f,cljs.core.rest.call(null,s__13087)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__13093 = cljs.core.seq.call(null,c1);
var s2__13094 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____13095 = s1__13093;
if(and__3822__auto____13095)
{return s2__13094;
} else
{return and__3822__auto____13095;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__13093),cljs.core.first.call(null,s2__13094)),map.call(null,f,cljs.core.rest.call(null,s1__13093),cljs.core.rest.call(null,s2__13094)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__13096 = cljs.core.seq.call(null,c1);
var s2__13097 = cljs.core.seq.call(null,c2);
var s3__13098 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____13099 = s1__13096;
if(and__3822__auto____13099)
{var and__3822__auto____13100 = s2__13097;
if(and__3822__auto____13100)
{return s3__13098;
} else
{return and__3822__auto____13100;
}
} else
{return and__3822__auto____13099;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__13096),cljs.core.first.call(null,s2__13097),cljs.core.first.call(null,s3__13098)),map.call(null,f,cljs.core.rest.call(null,s1__13096),cljs.core.rest.call(null,s2__13097),cljs.core.rest.call(null,s3__13098)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__13105__delegate = function (f,c1,c2,c3,colls){
var step__13103 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__13102 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__13102))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__13102),step.call(null,map.call(null,cljs.core.rest,ss__13102)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__12907_SHARP_){
return cljs.core.apply.call(null,f,p1__12907_SHARP_);
}),step__13103.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__13105 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__13105__delegate.call(this, f, c1, c2, c3, colls);
};
G__13105.cljs$lang$maxFixedArity = 4;
G__13105.cljs$lang$applyTo = (function (arglist__13106){
var f = cljs.core.first(arglist__13106);
var c1 = cljs.core.first(cljs.core.next(arglist__13106));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13106)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13106))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13106))));
return G__13105__delegate(f, c1, c2, c3, colls);
});
G__13105.cljs$lang$arity$variadic = G__13105__delegate;
return G__13105;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____13109 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13109)
{var s__13110 = temp__3974__auto____13109;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__13110),take.call(null,(n - 1),cljs.core.rest.call(null,s__13110)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__13116 = (function (n,coll){
while(true){
var s__13114 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____13115 = (n > 0);
if(and__3822__auto____13115)
{return s__13114;
} else
{return and__3822__auto____13115;
}
})()))
{{
var G__13117 = (n - 1);
var G__13118 = cljs.core.rest.call(null,s__13114);
n = G__13117;
coll = G__13118;
continue;
}
} else
{return s__13114;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__13116.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__13121 = cljs.core.seq.call(null,coll);
var lead__13122 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__13122)
{{
var G__13123 = cljs.core.next.call(null,s__13121);
var G__13124 = cljs.core.next.call(null,lead__13122);
s__13121 = G__13123;
lead__13122 = G__13124;
continue;
}
} else
{return s__13121;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__13130 = (function (pred,coll){
while(true){
var s__13128 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____13129 = s__13128;
if(and__3822__auto____13129)
{return pred.call(null,cljs.core.first.call(null,s__13128));
} else
{return and__3822__auto____13129;
}
})()))
{{
var G__13131 = pred;
var G__13132 = cljs.core.rest.call(null,s__13128);
pred = G__13131;
coll = G__13132;
continue;
}
} else
{return s__13128;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__13130.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____13135 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13135)
{var s__13136 = temp__3974__auto____13135;
return cljs.core.concat.call(null,s__13136,cycle.call(null,s__13136));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
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
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__13141 = cljs.core.seq.call(null,c1);
var s2__13142 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____13143 = s1__13141;
if(and__3822__auto____13143)
{return s2__13142;
} else
{return and__3822__auto____13143;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__13141),cljs.core.cons.call(null,cljs.core.first.call(null,s2__13142),interleave.call(null,cljs.core.rest.call(null,s1__13141),cljs.core.rest.call(null,s2__13142))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__13145__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__13144 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__13144))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__13144),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__13144)));
} else
{return null;
}
}),null));
};
var G__13145 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13145__delegate.call(this, c1, c2, colls);
};
G__13145.cljs$lang$maxFixedArity = 2;
G__13145.cljs$lang$applyTo = (function (arglist__13146){
var c1 = cljs.core.first(arglist__13146);
var c2 = cljs.core.first(cljs.core.next(arglist__13146));
var colls = cljs.core.rest(cljs.core.next(arglist__13146));
return G__13145__delegate(c1, c2, colls);
});
G__13145.cljs$lang$arity$variadic = G__13145__delegate;
return G__13145;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
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
var cat__13156 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____13154 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____13154)
{var coll__13155 = temp__3971__auto____13154;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__13155),cat.call(null,cljs.core.rest.call(null,coll__13155),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__13156.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__13157__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__13157 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13157__delegate.call(this, f, coll, colls);
};
G__13157.cljs$lang$maxFixedArity = 2;
G__13157.cljs$lang$applyTo = (function (arglist__13158){
var f = cljs.core.first(arglist__13158);
var coll = cljs.core.first(cljs.core.next(arglist__13158));
var colls = cljs.core.rest(cljs.core.next(arglist__13158));
return G__13157__delegate(f, coll, colls);
});
G__13157.cljs$lang$arity$variadic = G__13157__delegate;
return G__13157;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____13168 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13168)
{var s__13169 = temp__3974__auto____13168;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13169))
{var c__13170 = cljs.core.chunk_first.call(null,s__13169);
var size__13171 = cljs.core.count.call(null,c__13170);
var b__13172 = cljs.core.chunk_buffer.call(null,size__13171);
var n__5313__auto____13173 = size__13171;
var i__13174 = 0;
while(true){
if((i__13174 < n__5313__auto____13173))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__13170,i__13174))))
{cljs.core.chunk_append.call(null,b__13172,cljs.core._nth.call(null,c__13170,i__13174));
} else
{}
{
var G__13177 = (i__13174 + 1);
i__13174 = G__13177;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13172),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__13169)));
} else
{var f__13175 = cljs.core.first.call(null,s__13169);
var r__13176 = cljs.core.rest.call(null,s__13169);
if(cljs.core.truth_(pred.call(null,f__13175)))
{return cljs.core.cons.call(null,f__13175,filter.call(null,pred,r__13176));
} else
{return filter.call(null,pred,r__13176);
}
}
} else
{return null;
}
}),null));
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
var walk__13180 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__13180.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__13178_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__13178_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__13184__13185 = to;
if(G__13184__13185)
{if((function (){var or__3824__auto____13186 = (G__13184__13185.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____13186)
{return or__3824__auto____13186;
} else
{return G__13184__13185.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__13184__13185.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__13184__13185);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__13184__13185);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__13187__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__13187 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__13187__delegate.call(this, f, c1, c2, c3, colls);
};
G__13187.cljs$lang$maxFixedArity = 4;
G__13187.cljs$lang$applyTo = (function (arglist__13188){
var f = cljs.core.first(arglist__13188);
var c1 = cljs.core.first(cljs.core.next(arglist__13188));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13188)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13188))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13188))));
return G__13187__delegate(f, c1, c2, c3, colls);
});
G__13187.cljs$lang$arity$variadic = G__13187__delegate;
return G__13187;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
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
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____13195 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13195)
{var s__13196 = temp__3974__auto____13195;
var p__13197 = cljs.core.take.call(null,n,s__13196);
if((n === cljs.core.count.call(null,p__13197)))
{return cljs.core.cons.call(null,p__13197,partition.call(null,n,step,cljs.core.drop.call(null,step,s__13196)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____13198 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____13198)
{var s__13199 = temp__3974__auto____13198;
var p__13200 = cljs.core.take.call(null,n,s__13199);
if((n === cljs.core.count.call(null,p__13200)))
{return cljs.core.cons.call(null,p__13200,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__13199)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__13200,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
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
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__13205 = cljs.core.lookup_sentinel;
var m__13206 = m;
var ks__13207 = cljs.core.seq.call(null,ks);
while(true){
if(ks__13207)
{var m__13208 = cljs.core._lookup.call(null,m__13206,cljs.core.first.call(null,ks__13207),sentinel__13205);
if((sentinel__13205 === m__13208))
{return not_found;
} else
{{
var G__13209 = sentinel__13205;
var G__13210 = m__13208;
var G__13211 = cljs.core.next.call(null,ks__13207);
sentinel__13205 = G__13209;
m__13206 = G__13210;
ks__13207 = G__13211;
continue;
}
}
} else
{return m__13206;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__13212,v){
var vec__13217__13218 = p__13212;
var k__13219 = cljs.core.nth.call(null,vec__13217__13218,0,null);
var ks__13220 = cljs.core.nthnext.call(null,vec__13217__13218,1);
if(cljs.core.truth_(ks__13220))
{return cljs.core.assoc.call(null,m,k__13219,assoc_in.call(null,cljs.core._lookup.call(null,m,k__13219,null),ks__13220,v));
} else
{return cljs.core.assoc.call(null,m,k__13219,v);
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
var update_in__delegate = function (m,p__13221,f,args){
var vec__13226__13227 = p__13221;
var k__13228 = cljs.core.nth.call(null,vec__13226__13227,0,null);
var ks__13229 = cljs.core.nthnext.call(null,vec__13226__13227,1);
if(cljs.core.truth_(ks__13229))
{return cljs.core.assoc.call(null,m,k__13228,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__13228,null),ks__13229,f,args));
} else
{return cljs.core.assoc.call(null,m,k__13228,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__13228,null),args));
}
};
var update_in = function (m,p__13221,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__13221, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__13230){
var m = cljs.core.first(arglist__13230);
var p__13221 = cljs.core.first(cljs.core.next(arglist__13230));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13230)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13230)));
return update_in__delegate(m, p__13221, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13233 = this;
var h__4806__auto____13234 = this__13233.__hash;
if(!((h__4806__auto____13234 == null)))
{return h__4806__auto____13234;
} else
{var h__4806__auto____13235 = cljs.core.hash_coll.call(null,coll);
this__13233.__hash = h__4806__auto____13235;
return h__4806__auto____13235;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13236 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13237 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13238 = this;
var new_array__13239 = this__13238.array.slice();
(new_array__13239[k] = v);
return (new cljs.core.Vector(this__13238.meta,new_array__13239,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__13270 = null;
var G__13270__2 = (function (this_sym13240,k){
var this__13242 = this;
var this_sym13240__13243 = this;
var coll__13244 = this_sym13240__13243;
return coll__13244.cljs$core$ILookup$_lookup$arity$2(coll__13244,k);
});
var G__13270__3 = (function (this_sym13241,k,not_found){
var this__13242 = this;
var this_sym13241__13245 = this;
var coll__13246 = this_sym13241__13245;
return coll__13246.cljs$core$ILookup$_lookup$arity$3(coll__13246,k,not_found);
});
G__13270 = function(this_sym13241,k,not_found){
switch(arguments.length){
case 2:
return G__13270__2.call(this,this_sym13241,k);
case 3:
return G__13270__3.call(this,this_sym13241,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13270;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym13231,args13232){
var this__13247 = this;
return this_sym13231.call.apply(this_sym13231,[this_sym13231].concat(args13232.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13248 = this;
var new_array__13249 = this__13248.array.slice();
new_array__13249.push(o);
return (new cljs.core.Vector(this__13248.meta,new_array__13249,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__13250 = this;
var this__13251 = this;
return cljs.core.pr_str.call(null,this__13251);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__13252 = this;
return cljs.core.ci_reduce.call(null,this__13252.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__13253 = this;
return cljs.core.ci_reduce.call(null,this__13253.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13254 = this;
if((this__13254.array.length > 0))
{var vector_seq__13255 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__13254.array.length))
{return cljs.core.cons.call(null,(this__13254.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__13255.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13256 = this;
return this__13256.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__13257 = this;
var count__13258 = this__13257.array.length;
if((count__13258 > 0))
{return (this__13257.array[(count__13258 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__13259 = this;
if((this__13259.array.length > 0))
{var new_array__13260 = this__13259.array.slice();
new_array__13260.pop();
return (new cljs.core.Vector(this__13259.meta,new_array__13260,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__13261 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13262 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13263 = this;
return (new cljs.core.Vector(meta,this__13263.array,this__13263.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13264 = this;
return this__13264.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__13265 = this;
if((function (){var and__3822__auto____13266 = (0 <= n);
if(and__3822__auto____13266)
{return (n < this__13265.array.length);
} else
{return and__3822__auto____13266;
}
})())
{return (this__13265.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__13267 = this;
if((function (){var and__3822__auto____13268 = (0 <= n);
if(and__3822__auto____13268)
{return (n < this__13267.array.length);
} else
{return and__3822__auto____13268;
}
})())
{return (this__13267.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13269 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__13269.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__4956__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__13272 = pv.cnt;
if((cnt__13272 < 32))
{return 0;
} else
{return (((cnt__13272 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__13278 = level;
var ret__13279 = node;
while(true){
if((ll__13278 === 0))
{return ret__13279;
} else
{var embed__13280 = ret__13279;
var r__13281 = cljs.core.pv_fresh_node.call(null,edit);
var ___13282 = cljs.core.pv_aset.call(null,r__13281,0,embed__13280);
{
var G__13283 = (ll__13278 - 5);
var G__13284 = r__13281;
ll__13278 = G__13283;
ret__13279 = G__13284;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__13290 = cljs.core.pv_clone_node.call(null,parent);
var subidx__13291 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__13290,subidx__13291,tailnode);
return ret__13290;
} else
{var child__13292 = cljs.core.pv_aget.call(null,parent,subidx__13291);
if(!((child__13292 == null)))
{var node_to_insert__13293 = push_tail.call(null,pv,(level - 5),child__13292,tailnode);
cljs.core.pv_aset.call(null,ret__13290,subidx__13291,node_to_insert__13293);
return ret__13290;
} else
{var node_to_insert__13294 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__13290,subidx__13291,node_to_insert__13294);
return ret__13290;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____13298 = (0 <= i);
if(and__3822__auto____13298)
{return (i < pv.cnt);
} else
{return and__3822__auto____13298;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__13299 = pv.root;
var level__13300 = pv.shift;
while(true){
if((level__13300 > 0))
{{
var G__13301 = cljs.core.pv_aget.call(null,node__13299,((i >>> level__13300) & 31));
var G__13302 = (level__13300 - 5);
node__13299 = G__13301;
level__13300 = G__13302;
continue;
}
} else
{return node__13299.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__13305 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__13305,(i & 31),val);
return ret__13305;
} else
{var subidx__13306 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__13305,subidx__13306,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__13306),i,val));
return ret__13305;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__13312 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__13313 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__13312));
if((function (){var and__3822__auto____13314 = (new_child__13313 == null);
if(and__3822__auto____13314)
{return (subidx__13312 === 0);
} else
{return and__3822__auto____13314;
}
})())
{return null;
} else
{var ret__13315 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__13315,subidx__13312,new_child__13313);
return ret__13315;
}
} else
{if((subidx__13312 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__13316 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__13316,subidx__13312,null);
return ret__13316;
} else
{return null;
}
}
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__13319 = this;
return (new cljs.core.TransientVector(this__13319.cnt,this__13319.shift,cljs.core.tv_editable_root.call(null,this__13319.root),cljs.core.tv_editable_tail.call(null,this__13319.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13320 = this;
var h__4806__auto____13321 = this__13320.__hash;
if(!((h__4806__auto____13321 == null)))
{return h__4806__auto____13321;
} else
{var h__4806__auto____13322 = cljs.core.hash_coll.call(null,coll);
this__13320.__hash = h__4806__auto____13322;
return h__4806__auto____13322;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13323 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13324 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13325 = this;
if((function (){var and__3822__auto____13326 = (0 <= k);
if(and__3822__auto____13326)
{return (k < this__13325.cnt);
} else
{return and__3822__auto____13326;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__13327 = this__13325.tail.slice();
(new_tail__13327[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__13325.meta,this__13325.cnt,this__13325.shift,this__13325.root,new_tail__13327,null));
} else
{return (new cljs.core.PersistentVector(this__13325.meta,this__13325.cnt,this__13325.shift,cljs.core.do_assoc.call(null,coll,this__13325.shift,this__13325.root,k,v),this__13325.tail,null));
}
} else
{if((k === this__13325.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__13325.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__13375 = null;
var G__13375__2 = (function (this_sym13328,k){
var this__13330 = this;
var this_sym13328__13331 = this;
var coll__13332 = this_sym13328__13331;
return coll__13332.cljs$core$ILookup$_lookup$arity$2(coll__13332,k);
});
var G__13375__3 = (function (this_sym13329,k,not_found){
var this__13330 = this;
var this_sym13329__13333 = this;
var coll__13334 = this_sym13329__13333;
return coll__13334.cljs$core$ILookup$_lookup$arity$3(coll__13334,k,not_found);
});
G__13375 = function(this_sym13329,k,not_found){
switch(arguments.length){
case 2:
return G__13375__2.call(this,this_sym13329,k);
case 3:
return G__13375__3.call(this,this_sym13329,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13375;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym13317,args13318){
var this__13335 = this;
return this_sym13317.call.apply(this_sym13317,[this_sym13317].concat(args13318.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__13336 = this;
var step_init__13337 = [0,init];
var i__13338 = 0;
while(true){
if((i__13338 < this__13336.cnt))
{var arr__13339 = cljs.core.array_for.call(null,v,i__13338);
var len__13340 = arr__13339.length;
var init__13344 = (function (){var j__13341 = 0;
var init__13342 = (step_init__13337[1]);
while(true){
if((j__13341 < len__13340))
{var init__13343 = f.call(null,init__13342,(j__13341 + i__13338),(arr__13339[j__13341]));
if(cljs.core.reduced_QMARK_.call(null,init__13343))
{return init__13343;
} else
{{
var G__13376 = (j__13341 + 1);
var G__13377 = init__13343;
j__13341 = G__13376;
init__13342 = G__13377;
continue;
}
}
} else
{(step_init__13337[0] = len__13340);
(step_init__13337[1] = init__13342);
return init__13342;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__13344))
{return cljs.core.deref.call(null,init__13344);
} else
{{
var G__13378 = (i__13338 + (step_init__13337[0]));
i__13338 = G__13378;
continue;
}
}
} else
{return (step_init__13337[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13345 = this;
if(((this__13345.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__13346 = this__13345.tail.slice();
new_tail__13346.push(o);
return (new cljs.core.PersistentVector(this__13345.meta,(this__13345.cnt + 1),this__13345.shift,this__13345.root,new_tail__13346,null));
} else
{var root_overflow_QMARK___13347 = ((this__13345.cnt >>> 5) > (1 << this__13345.shift));
var new_shift__13348 = ((root_overflow_QMARK___13347)?(this__13345.shift + 5):this__13345.shift);
var new_root__13350 = ((root_overflow_QMARK___13347)?(function (){var n_r__13349 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__13349,0,this__13345.root);
cljs.core.pv_aset.call(null,n_r__13349,1,cljs.core.new_path.call(null,null,this__13345.shift,(new cljs.core.VectorNode(null,this__13345.tail))));
return n_r__13349;
})():cljs.core.push_tail.call(null,coll,this__13345.shift,this__13345.root,(new cljs.core.VectorNode(null,this__13345.tail))));
return (new cljs.core.PersistentVector(this__13345.meta,(this__13345.cnt + 1),new_shift__13348,new_root__13350,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__13351 = this;
if((this__13351.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__13351.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__13352 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__13353 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__13354 = this;
var this__13355 = this;
return cljs.core.pr_str.call(null,this__13355);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__13356 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__13357 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13358 = this;
if((this__13358.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13359 = this;
return this__13359.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__13360 = this;
if((this__13360.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__13360.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__13361 = this;
if((this__13361.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__13361.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__13361.meta);
} else
{if((1 < (this__13361.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__13361.meta,(this__13361.cnt - 1),this__13361.shift,this__13361.root,this__13361.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__13362 = cljs.core.array_for.call(null,coll,(this__13361.cnt - 2));
var nr__13363 = cljs.core.pop_tail.call(null,coll,this__13361.shift,this__13361.root);
var new_root__13364 = (((nr__13363 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__13363);
var cnt_1__13365 = (this__13361.cnt - 1);
if((function (){var and__3822__auto____13366 = (5 < this__13361.shift);
if(and__3822__auto____13366)
{return (cljs.core.pv_aget.call(null,new_root__13364,1) == null);
} else
{return and__3822__auto____13366;
}
})())
{return (new cljs.core.PersistentVector(this__13361.meta,cnt_1__13365,(this__13361.shift - 5),cljs.core.pv_aget.call(null,new_root__13364,0),new_tail__13362,null));
} else
{return (new cljs.core.PersistentVector(this__13361.meta,cnt_1__13365,this__13361.shift,new_root__13364,new_tail__13362,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__13367 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13368 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13369 = this;
return (new cljs.core.PersistentVector(meta,this__13369.cnt,this__13369.shift,this__13369.root,this__13369.tail,this__13369.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13370 = this;
return this__13370.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__13371 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__13372 = this;
if((function (){var and__3822__auto____13373 = (0 <= n);
if(and__3822__auto____13373)
{return (n < this__13372.cnt);
} else
{return and__3822__auto____13373;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13374 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__13374.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__13379 = xs.length;
var xs__13380 = (((no_clone === true))?xs:xs.slice());
if((l__13379 < 32))
{return (new cljs.core.PersistentVector(null,l__13379,5,cljs.core.PersistentVector.EMPTY_NODE,xs__13380,null));
} else
{var node__13381 = xs__13380.slice(0,32);
var v__13382 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__13381,null));
var i__13383 = 32;
var out__13384 = cljs.core._as_transient.call(null,v__13382);
while(true){
if((i__13383 < l__13379))
{{
var G__13385 = (i__13383 + 1);
var G__13386 = cljs.core.conj_BANG_.call(null,out__13384,(xs__13380[i__13383]));
i__13383 = G__13385;
out__13384 = G__13386;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13384);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
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
vector.cljs$lang$applyTo = (function (arglist__13387){
var args = cljs.core.seq(arglist__13387);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__13388 = this;
if(((this__13388.off + 1) < this__13388.node.length))
{var s__13389 = cljs.core.chunked_seq.call(null,this__13388.vec,this__13388.node,this__13388.i,(this__13388.off + 1));
if((s__13389 == null))
{return null;
} else
{return s__13389;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13390 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13391 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__13392 = this;
return (this__13392.node[this__13392.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__13393 = this;
if(((this__13393.off + 1) < this__13393.node.length))
{var s__13394 = cljs.core.chunked_seq.call(null,this__13393.vec,this__13393.node,this__13393.i,(this__13393.off + 1));
if((s__13394 == null))
{return cljs.core.List.EMPTY;
} else
{return s__13394;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__13395 = this;
var l__13396 = this__13395.node.length;
var s__13397 = ((((this__13395.i + l__13396) < cljs.core._count.call(null,this__13395.vec)))?cljs.core.chunked_seq.call(null,this__13395.vec,(this__13395.i + l__13396),0):null);
if((s__13397 == null))
{return null;
} else
{return s__13397;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13398 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__13399 = this;
return cljs.core.chunked_seq.call(null,this__13399.vec,this__13399.node,this__13399.i,this__13399.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__13400 = this;
return this__13400.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13401 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__13401.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__13402 = this;
return cljs.core.array_chunk.call(null,this__13402.node,this__13402.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__13403 = this;
var l__13404 = this__13403.node.length;
var s__13405 = ((((this__13403.i + l__13404) < cljs.core._count.call(null,this__13403.vec)))?cljs.core.chunked_seq.call(null,this__13403.vec,(this__13403.i + l__13404),0):null);
if((s__13405 == null))
{return cljs.core.List.EMPTY;
} else
{return s__13405;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13408 = this;
var h__4806__auto____13409 = this__13408.__hash;
if(!((h__4806__auto____13409 == null)))
{return h__4806__auto____13409;
} else
{var h__4806__auto____13410 = cljs.core.hash_coll.call(null,coll);
this__13408.__hash = h__4806__auto____13410;
return h__4806__auto____13410;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13411 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13412 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__13413 = this;
var v_pos__13414 = (this__13413.start + key);
return (new cljs.core.Subvec(this__13413.meta,cljs.core._assoc.call(null,this__13413.v,v_pos__13414,val),this__13413.start,((this__13413.end > (v_pos__13414 + 1)) ? this__13413.end : (v_pos__13414 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__13440 = null;
var G__13440__2 = (function (this_sym13415,k){
var this__13417 = this;
var this_sym13415__13418 = this;
var coll__13419 = this_sym13415__13418;
return coll__13419.cljs$core$ILookup$_lookup$arity$2(coll__13419,k);
});
var G__13440__3 = (function (this_sym13416,k,not_found){
var this__13417 = this;
var this_sym13416__13420 = this;
var coll__13421 = this_sym13416__13420;
return coll__13421.cljs$core$ILookup$_lookup$arity$3(coll__13421,k,not_found);
});
G__13440 = function(this_sym13416,k,not_found){
switch(arguments.length){
case 2:
return G__13440__2.call(this,this_sym13416,k);
case 3:
return G__13440__3.call(this,this_sym13416,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13440;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym13406,args13407){
var this__13422 = this;
return this_sym13406.call.apply(this_sym13406,[this_sym13406].concat(args13407.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13423 = this;
return (new cljs.core.Subvec(this__13423.meta,cljs.core._assoc_n.call(null,this__13423.v,this__13423.end,o),this__13423.start,(this__13423.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__13424 = this;
var this__13425 = this;
return cljs.core.pr_str.call(null,this__13425);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__13426 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__13427 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13428 = this;
var subvec_seq__13429 = (function subvec_seq(i){
if((i === this__13428.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__13428.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__13429.call(null,this__13428.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13430 = this;
return (this__13430.end - this__13430.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__13431 = this;
return cljs.core._nth.call(null,this__13431.v,(this__13431.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__13432 = this;
if((this__13432.start === this__13432.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__13432.meta,this__13432.v,this__13432.start,(this__13432.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__13433 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13434 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13435 = this;
return (new cljs.core.Subvec(meta,this__13435.v,this__13435.start,this__13435.end,this__13435.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13436 = this;
return this__13436.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__13437 = this;
return cljs.core._nth.call(null,this__13437.v,(this__13437.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__13438 = this;
return cljs.core._nth.call(null,this__13438.v,(this__13438.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13439 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__13439.meta);
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
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__13442 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__13442,0,tl.length);
return ret__13442;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__13446 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__13447 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__13446,subidx__13447,(((level === 5))?tail_node:(function (){var child__13448 = cljs.core.pv_aget.call(null,ret__13446,subidx__13447);
if(!((child__13448 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__13448,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__13446;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__13453 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__13454 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__13455 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__13453,subidx__13454));
if((function (){var and__3822__auto____13456 = (new_child__13455 == null);
if(and__3822__auto____13456)
{return (subidx__13454 === 0);
} else
{return and__3822__auto____13456;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__13453,subidx__13454,new_child__13455);
return node__13453;
}
} else
{if((subidx__13454 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__13453,subidx__13454,null);
return node__13453;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____13461 = (0 <= i);
if(and__3822__auto____13461)
{return (i < tv.cnt);
} else
{return and__3822__auto____13461;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__13462 = tv.root;
var node__13463 = root__13462;
var level__13464 = tv.shift;
while(true){
if((level__13464 > 0))
{{
var G__13465 = cljs.core.tv_ensure_editable.call(null,root__13462.edit,cljs.core.pv_aget.call(null,node__13463,((i >>> level__13464) & 31)));
var G__13466 = (level__13464 - 5);
node__13463 = G__13465;
level__13464 = G__13466;
continue;
}
} else
{return node__13463.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__13506 = null;
var G__13506__2 = (function (this_sym13469,k){
var this__13471 = this;
var this_sym13469__13472 = this;
var coll__13473 = this_sym13469__13472;
return coll__13473.cljs$core$ILookup$_lookup$arity$2(coll__13473,k);
});
var G__13506__3 = (function (this_sym13470,k,not_found){
var this__13471 = this;
var this_sym13470__13474 = this;
var coll__13475 = this_sym13470__13474;
return coll__13475.cljs$core$ILookup$_lookup$arity$3(coll__13475,k,not_found);
});
G__13506 = function(this_sym13470,k,not_found){
switch(arguments.length){
case 2:
return G__13506__2.call(this,this_sym13470,k);
case 3:
return G__13506__3.call(this,this_sym13470,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13506;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym13467,args13468){
var this__13476 = this;
return this_sym13467.call.apply(this_sym13467,[this_sym13467].concat(args13468.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13477 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13478 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__13479 = this;
if(this__13479.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__13480 = this;
if((function (){var and__3822__auto____13481 = (0 <= n);
if(and__3822__auto____13481)
{return (n < this__13480.cnt);
} else
{return and__3822__auto____13481;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13482 = this;
if(this__13482.root.edit)
{return this__13482.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__13483 = this;
if(this__13483.root.edit)
{if((function (){var and__3822__auto____13484 = (0 <= n);
if(and__3822__auto____13484)
{return (n < this__13483.cnt);
} else
{return and__3822__auto____13484;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__13483.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__13489 = (function go(level,node){
var node__13487 = cljs.core.tv_ensure_editable.call(null,this__13483.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__13487,(n & 31),val);
return node__13487;
} else
{var subidx__13488 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__13487,subidx__13488,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__13487,subidx__13488)));
return node__13487;
}
}).call(null,this__13483.shift,this__13483.root);
this__13483.root = new_root__13489;
return tcoll;
}
} else
{if((n === this__13483.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__13483.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__13490 = this;
if(this__13490.root.edit)
{if((this__13490.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__13490.cnt))
{this__13490.cnt = 0;
return tcoll;
} else
{if((((this__13490.cnt - 1) & 31) > 0))
{this__13490.cnt = (this__13490.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__13491 = cljs.core.editable_array_for.call(null,tcoll,(this__13490.cnt - 2));
var new_root__13493 = (function (){var nr__13492 = cljs.core.tv_pop_tail.call(null,tcoll,this__13490.shift,this__13490.root);
if(!((nr__13492 == null)))
{return nr__13492;
} else
{return (new cljs.core.VectorNode(this__13490.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____13494 = (5 < this__13490.shift);
if(and__3822__auto____13494)
{return (cljs.core.pv_aget.call(null,new_root__13493,1) == null);
} else
{return and__3822__auto____13494;
}
})())
{var new_root__13495 = cljs.core.tv_ensure_editable.call(null,this__13490.root.edit,cljs.core.pv_aget.call(null,new_root__13493,0));
this__13490.root = new_root__13495;
this__13490.shift = (this__13490.shift - 5);
this__13490.cnt = (this__13490.cnt - 1);
this__13490.tail = new_tail__13491;
return tcoll;
} else
{this__13490.root = new_root__13493;
this__13490.cnt = (this__13490.cnt - 1);
this__13490.tail = new_tail__13491;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__13496 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__13497 = this;
if(this__13497.root.edit)
{if(((this__13497.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__13497.tail[(this__13497.cnt & 31)] = o);
this__13497.cnt = (this__13497.cnt + 1);
return tcoll;
} else
{var tail_node__13498 = (new cljs.core.VectorNode(this__13497.root.edit,this__13497.tail));
var new_tail__13499 = cljs.core.make_array.call(null,32);
(new_tail__13499[0] = o);
this__13497.tail = new_tail__13499;
if(((this__13497.cnt >>> 5) > (1 << this__13497.shift)))
{var new_root_array__13500 = cljs.core.make_array.call(null,32);
var new_shift__13501 = (this__13497.shift + 5);
(new_root_array__13500[0] = this__13497.root);
(new_root_array__13500[1] = cljs.core.new_path.call(null,this__13497.root.edit,this__13497.shift,tail_node__13498));
this__13497.root = (new cljs.core.VectorNode(this__13497.root.edit,new_root_array__13500));
this__13497.shift = new_shift__13501;
this__13497.cnt = (this__13497.cnt + 1);
return tcoll;
} else
{var new_root__13502 = cljs.core.tv_push_tail.call(null,tcoll,this__13497.shift,this__13497.root,tail_node__13498);
this__13497.root = new_root__13502;
this__13497.cnt = (this__13497.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__13503 = this;
if(this__13503.root.edit)
{this__13503.root.edit = null;
var len__13504 = (this__13503.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__13505 = cljs.core.make_array.call(null,len__13504);
cljs.core.array_copy.call(null,this__13503.tail,0,trimmed_tail__13505,0,len__13504);
return (new cljs.core.PersistentVector(null,this__13503.cnt,this__13503.shift,this__13503.root,trimmed_tail__13505,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13507 = this;
var h__4806__auto____13508 = this__13507.__hash;
if(!((h__4806__auto____13508 == null)))
{return h__4806__auto____13508;
} else
{var h__4806__auto____13509 = cljs.core.hash_coll.call(null,coll);
this__13507.__hash = h__4806__auto____13509;
return h__4806__auto____13509;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13510 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__13511 = this;
var this__13512 = this;
return cljs.core.pr_str.call(null,this__13512);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13513 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__13514 = this;
return cljs.core._first.call(null,this__13514.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__13515 = this;
var temp__3971__auto____13516 = cljs.core.next.call(null,this__13515.front);
if(temp__3971__auto____13516)
{var f1__13517 = temp__3971__auto____13516;
return (new cljs.core.PersistentQueueSeq(this__13515.meta,f1__13517,this__13515.rear,null));
} else
{if((this__13515.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__13515.meta,this__13515.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13518 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13519 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__13519.front,this__13519.rear,this__13519.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13520 = this;
return this__13520.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13521 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13521.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13522 = this;
var h__4806__auto____13523 = this__13522.__hash;
if(!((h__4806__auto____13523 == null)))
{return h__4806__auto____13523;
} else
{var h__4806__auto____13524 = cljs.core.hash_coll.call(null,coll);
this__13522.__hash = h__4806__auto____13524;
return h__4806__auto____13524;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13525 = this;
if(cljs.core.truth_(this__13525.front))
{return (new cljs.core.PersistentQueue(this__13525.meta,(this__13525.count + 1),this__13525.front,cljs.core.conj.call(null,(function (){var or__3824__auto____13526 = this__13525.rear;
if(cljs.core.truth_(or__3824__auto____13526))
{return or__3824__auto____13526;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__13525.meta,(this__13525.count + 1),cljs.core.conj.call(null,this__13525.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__13527 = this;
var this__13528 = this;
return cljs.core.pr_str.call(null,this__13528);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13529 = this;
var rear__13530 = cljs.core.seq.call(null,this__13529.rear);
if(cljs.core.truth_((function (){var or__3824__auto____13531 = this__13529.front;
if(cljs.core.truth_(or__3824__auto____13531))
{return or__3824__auto____13531;
} else
{return rear__13530;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__13529.front,cljs.core.seq.call(null,rear__13530),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13532 = this;
return this__13532.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__13533 = this;
return cljs.core._first.call(null,this__13533.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__13534 = this;
if(cljs.core.truth_(this__13534.front))
{var temp__3971__auto____13535 = cljs.core.next.call(null,this__13534.front);
if(temp__3971__auto____13535)
{var f1__13536 = temp__3971__auto____13535;
return (new cljs.core.PersistentQueue(this__13534.meta,(this__13534.count - 1),f1__13536,this__13534.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__13534.meta,(this__13534.count - 1),cljs.core.seq.call(null,this__13534.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__13537 = this;
return cljs.core.first.call(null,this__13537.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__13538 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13539 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13540 = this;
return (new cljs.core.PersistentQueue(meta,this__13540.count,this__13540.front,this__13540.rear,this__13540.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13541 = this;
return this__13541.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13542 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__13543 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__13546 = array.length;
var i__13547 = 0;
while(true){
if((i__13547 < len__13546))
{if((k === (array[i__13547])))
{return i__13547;
} else
{{
var G__13548 = (i__13547 + incr);
i__13547 = G__13548;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__13551 = cljs.core.hash.call(null,a);
var b__13552 = cljs.core.hash.call(null,b);
if((a__13551 < b__13552))
{return -1;
} else
{if((a__13551 > b__13552))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__13560 = m.keys;
var len__13561 = ks__13560.length;
var so__13562 = m.strobj;
var out__13563 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__13564 = 0;
var out__13565 = cljs.core.transient$.call(null,out__13563);
while(true){
if((i__13564 < len__13561))
{var k__13566 = (ks__13560[i__13564]);
{
var G__13567 = (i__13564 + 1);
var G__13568 = cljs.core.assoc_BANG_.call(null,out__13565,k__13566,(so__13562[k__13566]));
i__13564 = G__13567;
out__13565 = G__13568;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__13565,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__13574 = {};
var l__13575 = ks.length;
var i__13576 = 0;
while(true){
if((i__13576 < l__13575))
{var k__13577 = (ks[i__13576]);
(new_obj__13574[k__13577] = (obj[k__13577]));
{
var G__13578 = (i__13576 + 1);
i__13576 = G__13578;
continue;
}
} else
{}
break;
}
return new_obj__13574;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__13581 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13582 = this;
var h__4806__auto____13583 = this__13582.__hash;
if(!((h__4806__auto____13583 == null)))
{return h__4806__auto____13583;
} else
{var h__4806__auto____13584 = cljs.core.hash_imap.call(null,coll);
this__13582.__hash = h__4806__auto____13584;
return h__4806__auto____13584;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13585 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13586 = this;
if((function (){var and__3822__auto____13587 = goog.isString(k);
if(and__3822__auto____13587)
{return !((cljs.core.scan_array.call(null,1,k,this__13586.keys) == null));
} else
{return and__3822__auto____13587;
}
})())
{return (this__13586.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13588 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____13589 = (this__13588.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____13589)
{return or__3824__auto____13589;
} else
{return (this__13588.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__13588.keys) == null)))
{var new_strobj__13590 = cljs.core.obj_clone.call(null,this__13588.strobj,this__13588.keys);
(new_strobj__13590[k] = v);
return (new cljs.core.ObjMap(this__13588.meta,this__13588.keys,new_strobj__13590,(this__13588.update_count + 1),null));
} else
{var new_strobj__13591 = cljs.core.obj_clone.call(null,this__13588.strobj,this__13588.keys);
var new_keys__13592 = this__13588.keys.slice();
(new_strobj__13591[k] = v);
new_keys__13592.push(k);
return (new cljs.core.ObjMap(this__13588.meta,new_keys__13592,new_strobj__13591,(this__13588.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__13593 = this;
if((function (){var and__3822__auto____13594 = goog.isString(k);
if(and__3822__auto____13594)
{return !((cljs.core.scan_array.call(null,1,k,this__13593.keys) == null));
} else
{return and__3822__auto____13594;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__13616 = null;
var G__13616__2 = (function (this_sym13595,k){
var this__13597 = this;
var this_sym13595__13598 = this;
var coll__13599 = this_sym13595__13598;
return coll__13599.cljs$core$ILookup$_lookup$arity$2(coll__13599,k);
});
var G__13616__3 = (function (this_sym13596,k,not_found){
var this__13597 = this;
var this_sym13596__13600 = this;
var coll__13601 = this_sym13596__13600;
return coll__13601.cljs$core$ILookup$_lookup$arity$3(coll__13601,k,not_found);
});
G__13616 = function(this_sym13596,k,not_found){
switch(arguments.length){
case 2:
return G__13616__2.call(this,this_sym13596,k);
case 3:
return G__13616__3.call(this,this_sym13596,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13616;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym13579,args13580){
var this__13602 = this;
return this_sym13579.call.apply(this_sym13579,[this_sym13579].concat(args13580.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__13603 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__13604 = this;
var this__13605 = this;
return cljs.core.pr_str.call(null,this__13605);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13606 = this;
if((this__13606.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__13569_SHARP_){
return cljs.core.vector.call(null,p1__13569_SHARP_,(this__13606.strobj[p1__13569_SHARP_]));
}),this__13606.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13607 = this;
return this__13607.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13608 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13609 = this;
return (new cljs.core.ObjMap(meta,this__13609.keys,this__13609.strobj,this__13609.update_count,this__13609.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13610 = this;
return this__13610.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13611 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13611.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__13612 = this;
if((function (){var and__3822__auto____13613 = goog.isString(k);
if(and__3822__auto____13613)
{return !((cljs.core.scan_array.call(null,1,k,this__13612.keys) == null));
} else
{return and__3822__auto____13613;
}
})())
{var new_keys__13614 = this__13612.keys.slice();
var new_strobj__13615 = cljs.core.obj_clone.call(null,this__13612.strobj,this__13612.keys);
new_keys__13614.splice(cljs.core.scan_array.call(null,1,k,new_keys__13614),1);
cljs.core.js_delete.call(null,new_strobj__13615,k);
return (new cljs.core.ObjMap(this__13612.meta,new_keys__13614,new_strobj__13615,(this__13612.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13620 = this;
var h__4806__auto____13621 = this__13620.__hash;
if(!((h__4806__auto____13621 == null)))
{return h__4806__auto____13621;
} else
{var h__4806__auto____13622 = cljs.core.hash_imap.call(null,coll);
this__13620.__hash = h__4806__auto____13622;
return h__4806__auto____13622;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13623 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13624 = this;
var bucket__13625 = (this__13624.hashobj[cljs.core.hash.call(null,k)]);
var i__13626 = (cljs.core.truth_(bucket__13625)?cljs.core.scan_array.call(null,2,k,bucket__13625):null);
if(cljs.core.truth_(i__13626))
{return (bucket__13625[(i__13626 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13627 = this;
var h__13628 = cljs.core.hash.call(null,k);
var bucket__13629 = (this__13627.hashobj[h__13628]);
if(cljs.core.truth_(bucket__13629))
{var new_bucket__13630 = bucket__13629.slice();
var new_hashobj__13631 = goog.object.clone(this__13627.hashobj);
(new_hashobj__13631[h__13628] = new_bucket__13630);
var temp__3971__auto____13632 = cljs.core.scan_array.call(null,2,k,new_bucket__13630);
if(cljs.core.truth_(temp__3971__auto____13632))
{var i__13633 = temp__3971__auto____13632;
(new_bucket__13630[(i__13633 + 1)] = v);
return (new cljs.core.HashMap(this__13627.meta,this__13627.count,new_hashobj__13631,null));
} else
{new_bucket__13630.push(k,v);
return (new cljs.core.HashMap(this__13627.meta,(this__13627.count + 1),new_hashobj__13631,null));
}
} else
{var new_hashobj__13634 = goog.object.clone(this__13627.hashobj);
(new_hashobj__13634[h__13628] = [k,v]);
return (new cljs.core.HashMap(this__13627.meta,(this__13627.count + 1),new_hashobj__13634,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__13635 = this;
var bucket__13636 = (this__13635.hashobj[cljs.core.hash.call(null,k)]);
var i__13637 = (cljs.core.truth_(bucket__13636)?cljs.core.scan_array.call(null,2,k,bucket__13636):null);
if(cljs.core.truth_(i__13637))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__13662 = null;
var G__13662__2 = (function (this_sym13638,k){
var this__13640 = this;
var this_sym13638__13641 = this;
var coll__13642 = this_sym13638__13641;
return coll__13642.cljs$core$ILookup$_lookup$arity$2(coll__13642,k);
});
var G__13662__3 = (function (this_sym13639,k,not_found){
var this__13640 = this;
var this_sym13639__13643 = this;
var coll__13644 = this_sym13639__13643;
return coll__13644.cljs$core$ILookup$_lookup$arity$3(coll__13644,k,not_found);
});
G__13662 = function(this_sym13639,k,not_found){
switch(arguments.length){
case 2:
return G__13662__2.call(this,this_sym13639,k);
case 3:
return G__13662__3.call(this,this_sym13639,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13662;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym13618,args13619){
var this__13645 = this;
return this_sym13618.call.apply(this_sym13618,[this_sym13618].concat(args13619.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__13646 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__13647 = this;
var this__13648 = this;
return cljs.core.pr_str.call(null,this__13648);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13649 = this;
if((this__13649.count > 0))
{var hashes__13650 = cljs.core.js_keys.call(null,this__13649.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__13617_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13649.hashobj[p1__13617_SHARP_])));
}),hashes__13650);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13651 = this;
return this__13651.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13652 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13653 = this;
return (new cljs.core.HashMap(meta,this__13653.count,this__13653.hashobj,this__13653.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13654 = this;
return this__13654.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13655 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13655.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__13656 = this;
var h__13657 = cljs.core.hash.call(null,k);
var bucket__13658 = (this__13656.hashobj[h__13657]);
var i__13659 = (cljs.core.truth_(bucket__13658)?cljs.core.scan_array.call(null,2,k,bucket__13658):null);
if(cljs.core.not.call(null,i__13659))
{return coll;
} else
{var new_hashobj__13660 = goog.object.clone(this__13656.hashobj);
if((3 > bucket__13658.length))
{cljs.core.js_delete.call(null,new_hashobj__13660,h__13657);
} else
{var new_bucket__13661 = bucket__13658.slice();
new_bucket__13661.splice(i__13659,2);
(new_hashobj__13660[h__13657] = new_bucket__13661);
}
return (new cljs.core.HashMap(this__13656.meta,(this__13656.count - 1),new_hashobj__13660,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13663 = ks.length;
var i__13664 = 0;
var out__13665 = cljs.core.HashMap.EMPTY;
while(true){
if((i__13664 < len__13663))
{{
var G__13666 = (i__13664 + 1);
var G__13667 = cljs.core.assoc.call(null,out__13665,(ks[i__13664]),(vs[i__13664]));
i__13664 = G__13666;
out__13665 = G__13667;
continue;
}
} else
{return out__13665;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__13671 = m.arr;
var len__13672 = arr__13671.length;
var i__13673 = 0;
while(true){
if((len__13672 <= i__13673))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__13671[i__13673]),k))
{return i__13673;
} else
{if("\uFDD0'else")
{{
var G__13674 = (i__13673 + 2);
i__13673 = G__13674;
continue;
}
} else
{return null;
}
}
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__13677 = this;
return (new cljs.core.TransientArrayMap({},this__13677.arr.length,this__13677.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13678 = this;
var h__4806__auto____13679 = this__13678.__hash;
if(!((h__4806__auto____13679 == null)))
{return h__4806__auto____13679;
} else
{var h__4806__auto____13680 = cljs.core.hash_imap.call(null,coll);
this__13678.__hash = h__4806__auto____13680;
return h__4806__auto____13680;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__13681 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__13682 = this;
var idx__13683 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__13683 === -1))
{return not_found;
} else
{return (this__13682.arr[(idx__13683 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__13684 = this;
var idx__13685 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__13685 === -1))
{if((this__13684.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__13684.meta,(this__13684.cnt + 1),(function (){var G__13686__13687 = this__13684.arr.slice();
G__13686__13687.push(k);
G__13686__13687.push(v);
return G__13686__13687;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__13684.arr[(idx__13685 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__13684.meta,this__13684.cnt,(function (){var G__13688__13689 = this__13684.arr.slice();
(G__13688__13689[(idx__13685 + 1)] = v);
return G__13688__13689;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__13690 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__13722 = null;
var G__13722__2 = (function (this_sym13691,k){
var this__13693 = this;
var this_sym13691__13694 = this;
var coll__13695 = this_sym13691__13694;
return coll__13695.cljs$core$ILookup$_lookup$arity$2(coll__13695,k);
});
var G__13722__3 = (function (this_sym13692,k,not_found){
var this__13693 = this;
var this_sym13692__13696 = this;
var coll__13697 = this_sym13692__13696;
return coll__13697.cljs$core$ILookup$_lookup$arity$3(coll__13697,k,not_found);
});
G__13722 = function(this_sym13692,k,not_found){
switch(arguments.length){
case 2:
return G__13722__2.call(this,this_sym13692,k);
case 3:
return G__13722__3.call(this,this_sym13692,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13722;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym13675,args13676){
var this__13698 = this;
return this_sym13675.call.apply(this_sym13675,[this_sym13675].concat(args13676.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__13699 = this;
var len__13700 = this__13699.arr.length;
var i__13701 = 0;
var init__13702 = init;
while(true){
if((i__13701 < len__13700))
{var init__13703 = f.call(null,init__13702,(this__13699.arr[i__13701]),(this__13699.arr[(i__13701 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__13703))
{return cljs.core.deref.call(null,init__13703);
} else
{{
var G__13723 = (i__13701 + 2);
var G__13724 = init__13703;
i__13701 = G__13723;
init__13702 = G__13724;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__13704 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__13705 = this;
var this__13706 = this;
return cljs.core.pr_str.call(null,this__13706);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__13707 = this;
if((this__13707.cnt > 0))
{var len__13708 = this__13707.arr.length;
var array_map_seq__13709 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__13708))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__13707.arr[i]),(this__13707.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__13709.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__13710 = this;
return this__13710.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13711 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13712 = this;
return (new cljs.core.PersistentArrayMap(meta,this__13712.cnt,this__13712.arr,this__13712.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13713 = this;
return this__13713.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13714 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__13714.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__13715 = this;
var idx__13716 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__13716 >= 0))
{var len__13717 = this__13715.arr.length;
var new_len__13718 = (len__13717 - 2);
if((new_len__13718 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__13719 = cljs.core.make_array.call(null,new_len__13718);
var s__13720 = 0;
var d__13721 = 0;
while(true){
if((s__13720 >= len__13717))
{return (new cljs.core.PersistentArrayMap(this__13715.meta,(this__13715.cnt - 1),new_arr__13719,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__13715.arr[s__13720])))
{{
var G__13725 = (s__13720 + 2);
var G__13726 = d__13721;
s__13720 = G__13725;
d__13721 = G__13726;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__13719[d__13721] = (this__13715.arr[s__13720]));
(new_arr__13719[(d__13721 + 1)] = (this__13715.arr[(s__13720 + 1)]));
{
var G__13727 = (s__13720 + 2);
var G__13728 = (d__13721 + 2);
s__13720 = G__13727;
d__13721 = G__13728;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__13729 = cljs.core.count.call(null,ks);
var i__13730 = 0;
var out__13731 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__13730 < len__13729))
{{
var G__13732 = (i__13730 + 1);
var G__13733 = cljs.core.assoc_BANG_.call(null,out__13731,(ks[i__13730]),(vs[i__13730]));
i__13730 = G__13732;
out__13731 = G__13733;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__13731);
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__13734 = this;
if(cljs.core.truth_(this__13734.editable_QMARK_))
{var idx__13735 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__13735 >= 0))
{(this__13734.arr[idx__13735] = (this__13734.arr[(this__13734.len - 2)]));
(this__13734.arr[(idx__13735 + 1)] = (this__13734.arr[(this__13734.len - 1)]));
var G__13736__13737 = this__13734.arr;
G__13736__13737.pop();
G__13736__13737.pop();
G__13736__13737;
this__13734.len = (this__13734.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__13738 = this;
if(cljs.core.truth_(this__13738.editable_QMARK_))
{var idx__13739 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__13739 === -1))
{if(((this__13738.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__13738.len = (this__13738.len + 2);
this__13738.arr.push(key);
this__13738.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__13738.len,this__13738.arr),key,val);
}
} else
{if((val === (this__13738.arr[(idx__13739 + 1)])))
{return tcoll;
} else
{(this__13738.arr[(idx__13739 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__13740 = this;
if(cljs.core.truth_(this__13740.editable_QMARK_))
{if((function (){var G__13741__13742 = o;
if(G__13741__13742)
{if((function (){var or__3824__auto____13743 = (G__13741__13742.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____13743)
{return or__3824__auto____13743;
} else
{return G__13741__13742.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__13741__13742.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__13741__13742);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__13741__13742);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__13744 = cljs.core.seq.call(null,o);
var tcoll__13745 = tcoll;
while(true){
var temp__3971__auto____13746 = cljs.core.first.call(null,es__13744);
if(cljs.core.truth_(temp__3971__auto____13746))
{var e__13747 = temp__3971__auto____13746;
{
var G__13753 = cljs.core.next.call(null,es__13744);
var G__13754 = tcoll__13745.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__13745,cljs.core.key.call(null,e__13747),cljs.core.val.call(null,e__13747));
es__13744 = G__13753;
tcoll__13745 = G__13754;
continue;
}
} else
{return tcoll__13745;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__13748 = this;
if(cljs.core.truth_(this__13748.editable_QMARK_))
{this__13748.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__13748.len,2),this__13748.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__13749 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__13750 = this;
if(cljs.core.truth_(this__13750.editable_QMARK_))
{var idx__13751 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__13751 === -1))
{return not_found;
} else
{return (this__13750.arr[(idx__13751 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__13752 = this;
if(cljs.core.truth_(this__13752.editable_QMARK_))
{return cljs.core.quot.call(null,this__13752.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__13757 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__13758 = 0;
while(true){
if((i__13758 < len))
{{
var G__13759 = cljs.core.assoc_BANG_.call(null,out__13757,(arr[i__13758]),(arr[(i__13758 + 1)]));
var G__13760 = (i__13758 + 2);
out__13757 = G__13759;
i__13758 = G__13760;
continue;
}
} else
{return out__13757;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__4956__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__13765__13766 = arr.slice();
(G__13765__13766[i] = a);
return G__13765__13766;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__13767__13768 = arr.slice();
(G__13767__13768[i] = a);
(G__13767__13768[j] = b);
return G__13767__13768;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__13770 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__13770,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__13770,(2 * i),(new_arr__13770.length - (2 * i)));
return new_arr__13770;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__13773 = inode.ensure_editable(edit);
(editable__13773.arr[i] = a);
return editable__13773;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__13774 = inode.ensure_editable(edit);
(editable__13774.arr[i] = a);
(editable__13774.arr[j] = b);
return editable__13774;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__13781 = arr.length;
var i__13782 = 0;
var init__13783 = init;
while(true){
if((i__13782 < len__13781))
{var init__13786 = (function (){var k__13784 = (arr[i__13782]);
if(!((k__13784 == null)))
{return f.call(null,init__13783,k__13784,(arr[(i__13782 + 1)]));
} else
{var node__13785 = (arr[(i__13782 + 1)]);
if(!((node__13785 == null)))
{return node__13785.kv_reduce(f,init__13783);
} else
{return init__13783;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__13786))
{return cljs.core.deref.call(null,init__13786);
} else
{{
var G__13787 = (i__13782 + 2);
var G__13788 = init__13786;
i__13782 = G__13787;
init__13783 = G__13788;
continue;
}
}
} else
{return init__13783;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__13789 = this;
var inode__13790 = this;
if((this__13789.bitmap === bit))
{return null;
} else
{var editable__13791 = inode__13790.ensure_editable(e);
var earr__13792 = editable__13791.arr;
var len__13793 = earr__13792.length;
editable__13791.bitmap = (bit ^ editable__13791.bitmap);
cljs.core.array_copy.call(null,earr__13792,(2 * (i + 1)),earr__13792,(2 * i),(len__13793 - (2 * (i + 1))));
(earr__13792[(len__13793 - 2)] = null);
(earr__13792[(len__13793 - 1)] = null);
return editable__13791;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__13794 = this;
var inode__13795 = this;
var bit__13796 = (1 << ((hash >>> shift) & 0x01f));
var idx__13797 = cljs.core.bitmap_indexed_node_index.call(null,this__13794.bitmap,bit__13796);
if(((this__13794.bitmap & bit__13796) === 0))
{var n__13798 = cljs.core.bit_count.call(null,this__13794.bitmap);
if(((2 * n__13798) < this__13794.arr.length))
{var editable__13799 = inode__13795.ensure_editable(edit);
var earr__13800 = editable__13799.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__13800,(2 * idx__13797),earr__13800,(2 * (idx__13797 + 1)),(2 * (n__13798 - idx__13797)));
(earr__13800[(2 * idx__13797)] = key);
(earr__13800[((2 * idx__13797) + 1)] = val);
editable__13799.bitmap = (editable__13799.bitmap | bit__13796);
return editable__13799;
} else
{if((n__13798 >= 16))
{var nodes__13801 = cljs.core.make_array.call(null,32);
var jdx__13802 = ((hash >>> shift) & 0x01f);
(nodes__13801[jdx__13802] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__13803 = 0;
var j__13804 = 0;
while(true){
if((i__13803 < 32))
{if((((this__13794.bitmap >>> i__13803) & 1) === 0))
{{
var G__13857 = (i__13803 + 1);
var G__13858 = j__13804;
i__13803 = G__13857;
j__13804 = G__13858;
continue;
}
} else
{(nodes__13801[i__13803] = ((!(((this__13794.arr[j__13804]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__13794.arr[j__13804])),(this__13794.arr[j__13804]),(this__13794.arr[(j__13804 + 1)]),added_leaf_QMARK_):(this__13794.arr[(j__13804 + 1)])));
{
var G__13859 = (i__13803 + 1);
var G__13860 = (j__13804 + 2);
i__13803 = G__13859;
j__13804 = G__13860;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__13798 + 1),nodes__13801));
} else
{if("\uFDD0'else")
{var new_arr__13805 = cljs.core.make_array.call(null,(2 * (n__13798 + 4)));
cljs.core.array_copy.call(null,this__13794.arr,0,new_arr__13805,0,(2 * idx__13797));
(new_arr__13805[(2 * idx__13797)] = key);
(new_arr__13805[((2 * idx__13797) + 1)] = val);
cljs.core.array_copy.call(null,this__13794.arr,(2 * idx__13797),new_arr__13805,(2 * (idx__13797 + 1)),(2 * (n__13798 - idx__13797)));
added_leaf_QMARK_.val = true;
var editable__13806 = inode__13795.ensure_editable(edit);
editable__13806.arr = new_arr__13805;
editable__13806.bitmap = (editable__13806.bitmap | bit__13796);
return editable__13806;
} else
{return null;
}
}
}
} else
{var key_or_nil__13807 = (this__13794.arr[(2 * idx__13797)]);
var val_or_node__13808 = (this__13794.arr[((2 * idx__13797) + 1)]);
if((key_or_nil__13807 == null))
{var n__13809 = val_or_node__13808.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__13809 === val_or_node__13808))
{return inode__13795;
} else
{return cljs.core.edit_and_set.call(null,inode__13795,edit,((2 * idx__13797) + 1),n__13809);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__13807))
{if((val === val_or_node__13808))
{return inode__13795;
} else
{return cljs.core.edit_and_set.call(null,inode__13795,edit,((2 * idx__13797) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__13795,edit,(2 * idx__13797),null,((2 * idx__13797) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__13807,val_or_node__13808,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__13810 = this;
var inode__13811 = this;
return cljs.core.create_inode_seq.call(null,this__13810.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__13812 = this;
var inode__13813 = this;
var bit__13814 = (1 << ((hash >>> shift) & 0x01f));
if(((this__13812.bitmap & bit__13814) === 0))
{return inode__13813;
} else
{var idx__13815 = cljs.core.bitmap_indexed_node_index.call(null,this__13812.bitmap,bit__13814);
var key_or_nil__13816 = (this__13812.arr[(2 * idx__13815)]);
var val_or_node__13817 = (this__13812.arr[((2 * idx__13815) + 1)]);
if((key_or_nil__13816 == null))
{var n__13818 = val_or_node__13817.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__13818 === val_or_node__13817))
{return inode__13813;
} else
{if(!((n__13818 == null)))
{return cljs.core.edit_and_set.call(null,inode__13813,edit,((2 * idx__13815) + 1),n__13818);
} else
{if((this__13812.bitmap === bit__13814))
{return null;
} else
{if("\uFDD0'else")
{return inode__13813.edit_and_remove_pair(edit,bit__13814,idx__13815);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__13816))
{(removed_leaf_QMARK_[0] = true);
return inode__13813.edit_and_remove_pair(edit,bit__13814,idx__13815);
} else
{if("\uFDD0'else")
{return inode__13813;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__13819 = this;
var inode__13820 = this;
if((e === this__13819.edit))
{return inode__13820;
} else
{var n__13821 = cljs.core.bit_count.call(null,this__13819.bitmap);
var new_arr__13822 = cljs.core.make_array.call(null,(((n__13821 < 0))?4:(2 * (n__13821 + 1))));
cljs.core.array_copy.call(null,this__13819.arr,0,new_arr__13822,0,(2 * n__13821));
return (new cljs.core.BitmapIndexedNode(e,this__13819.bitmap,new_arr__13822));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__13823 = this;
var inode__13824 = this;
return cljs.core.inode_kv_reduce.call(null,this__13823.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__13825 = this;
var inode__13826 = this;
var bit__13827 = (1 << ((hash >>> shift) & 0x01f));
if(((this__13825.bitmap & bit__13827) === 0))
{return not_found;
} else
{var idx__13828 = cljs.core.bitmap_indexed_node_index.call(null,this__13825.bitmap,bit__13827);
var key_or_nil__13829 = (this__13825.arr[(2 * idx__13828)]);
var val_or_node__13830 = (this__13825.arr[((2 * idx__13828) + 1)]);
if((key_or_nil__13829 == null))
{return val_or_node__13830.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__13829))
{return cljs.core.PersistentVector.fromArray([key_or_nil__13829,val_or_node__13830], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__13831 = this;
var inode__13832 = this;
var bit__13833 = (1 << ((hash >>> shift) & 0x01f));
if(((this__13831.bitmap & bit__13833) === 0))
{return inode__13832;
} else
{var idx__13834 = cljs.core.bitmap_indexed_node_index.call(null,this__13831.bitmap,bit__13833);
var key_or_nil__13835 = (this__13831.arr[(2 * idx__13834)]);
var val_or_node__13836 = (this__13831.arr[((2 * idx__13834) + 1)]);
if((key_or_nil__13835 == null))
{var n__13837 = val_or_node__13836.inode_without((shift + 5),hash,key);
if((n__13837 === val_or_node__13836))
{return inode__13832;
} else
{if(!((n__13837 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__13831.bitmap,cljs.core.clone_and_set.call(null,this__13831.arr,((2 * idx__13834) + 1),n__13837)));
} else
{if((this__13831.bitmap === bit__13833))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__13831.bitmap ^ bit__13833),cljs.core.remove_pair.call(null,this__13831.arr,idx__13834)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__13835))
{return (new cljs.core.BitmapIndexedNode(null,(this__13831.bitmap ^ bit__13833),cljs.core.remove_pair.call(null,this__13831.arr,idx__13834)));
} else
{if("\uFDD0'else")
{return inode__13832;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__13838 = this;
var inode__13839 = this;
var bit__13840 = (1 << ((hash >>> shift) & 0x01f));
var idx__13841 = cljs.core.bitmap_indexed_node_index.call(null,this__13838.bitmap,bit__13840);
if(((this__13838.bitmap & bit__13840) === 0))
{var n__13842 = cljs.core.bit_count.call(null,this__13838.bitmap);
if((n__13842 >= 16))
{var nodes__13843 = cljs.core.make_array.call(null,32);
var jdx__13844 = ((hash >>> shift) & 0x01f);
(nodes__13843[jdx__13844] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__13845 = 0;
var j__13846 = 0;
while(true){
if((i__13845 < 32))
{if((((this__13838.bitmap >>> i__13845) & 1) === 0))
{{
var G__13861 = (i__13845 + 1);
var G__13862 = j__13846;
i__13845 = G__13861;
j__13846 = G__13862;
continue;
}
} else
{(nodes__13843[i__13845] = ((!(((this__13838.arr[j__13846]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__13838.arr[j__13846])),(this__13838.arr[j__13846]),(this__13838.arr[(j__13846 + 1)]),added_leaf_QMARK_):(this__13838.arr[(j__13846 + 1)])));
{
var G__13863 = (i__13845 + 1);
var G__13864 = (j__13846 + 2);
i__13845 = G__13863;
j__13846 = G__13864;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__13842 + 1),nodes__13843));
} else
{var new_arr__13847 = cljs.core.make_array.call(null,(2 * (n__13842 + 1)));
cljs.core.array_copy.call(null,this__13838.arr,0,new_arr__13847,0,(2 * idx__13841));
(new_arr__13847[(2 * idx__13841)] = key);
(new_arr__13847[((2 * idx__13841) + 1)] = val);
cljs.core.array_copy.call(null,this__13838.arr,(2 * idx__13841),new_arr__13847,(2 * (idx__13841 + 1)),(2 * (n__13842 - idx__13841)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__13838.bitmap | bit__13840),new_arr__13847));
}
} else
{var key_or_nil__13848 = (this__13838.arr[(2 * idx__13841)]);
var val_or_node__13849 = (this__13838.arr[((2 * idx__13841) + 1)]);
if((key_or_nil__13848 == null))
{var n__13850 = val_or_node__13849.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__13850 === val_or_node__13849))
{return inode__13839;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__13838.bitmap,cljs.core.clone_and_set.call(null,this__13838.arr,((2 * idx__13841) + 1),n__13850)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__13848))
{if((val === val_or_node__13849))
{return inode__13839;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__13838.bitmap,cljs.core.clone_and_set.call(null,this__13838.arr,((2 * idx__13841) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__13838.bitmap,cljs.core.clone_and_set.call(null,this__13838.arr,(2 * idx__13841),null,((2 * idx__13841) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__13848,val_or_node__13849,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__13851 = this;
var inode__13852 = this;
var bit__13853 = (1 << ((hash >>> shift) & 0x01f));
if(((this__13851.bitmap & bit__13853) === 0))
{return not_found;
} else
{var idx__13854 = cljs.core.bitmap_indexed_node_index.call(null,this__13851.bitmap,bit__13853);
var key_or_nil__13855 = (this__13851.arr[(2 * idx__13854)]);
var val_or_node__13856 = (this__13851.arr[((2 * idx__13854) + 1)]);
if((key_or_nil__13855 == null))
{return val_or_node__13856.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__13855))
{return val_or_node__13856;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__13872 = array_node.arr;
var len__13873 = (2 * (array_node.cnt - 1));
var new_arr__13874 = cljs.core.make_array.call(null,len__13873);
var i__13875 = 0;
var j__13876 = 1;
var bitmap__13877 = 0;
while(true){
if((i__13875 < len__13873))
{if((function (){var and__3822__auto____13878 = !((i__13875 === idx));
if(and__3822__auto____13878)
{return !(((arr__13872[i__13875]) == null));
} else
{return and__3822__auto____13878;
}
})())
{(new_arr__13874[j__13876] = (arr__13872[i__13875]));
{
var G__13879 = (i__13875 + 1);
var G__13880 = (j__13876 + 2);
var G__13881 = (bitmap__13877 | (1 << i__13875));
i__13875 = G__13879;
j__13876 = G__13880;
bitmap__13877 = G__13881;
continue;
}
} else
{{
var G__13882 = (i__13875 + 1);
var G__13883 = j__13876;
var G__13884 = bitmap__13877;
i__13875 = G__13882;
j__13876 = G__13883;
bitmap__13877 = G__13884;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__13877,new_arr__13874));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__13885 = this;
var inode__13886 = this;
var idx__13887 = ((hash >>> shift) & 0x01f);
var node__13888 = (this__13885.arr[idx__13887]);
if((node__13888 == null))
{var editable__13889 = cljs.core.edit_and_set.call(null,inode__13886,edit,idx__13887,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__13889.cnt = (editable__13889.cnt + 1);
return editable__13889;
} else
{var n__13890 = node__13888.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__13890 === node__13888))
{return inode__13886;
} else
{return cljs.core.edit_and_set.call(null,inode__13886,edit,idx__13887,n__13890);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__13891 = this;
var inode__13892 = this;
return cljs.core.create_array_node_seq.call(null,this__13891.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__13893 = this;
var inode__13894 = this;
var idx__13895 = ((hash >>> shift) & 0x01f);
var node__13896 = (this__13893.arr[idx__13895]);
if((node__13896 == null))
{return inode__13894;
} else
{var n__13897 = node__13896.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__13897 === node__13896))
{return inode__13894;
} else
{if((n__13897 == null))
{if((this__13893.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__13894,edit,idx__13895);
} else
{var editable__13898 = cljs.core.edit_and_set.call(null,inode__13894,edit,idx__13895,n__13897);
editable__13898.cnt = (editable__13898.cnt - 1);
return editable__13898;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__13894,edit,idx__13895,n__13897);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__13899 = this;
var inode__13900 = this;
if((e === this__13899.edit))
{return inode__13900;
} else
{return (new cljs.core.ArrayNode(e,this__13899.cnt,this__13899.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__13901 = this;
var inode__13902 = this;
var len__13903 = this__13901.arr.length;
var i__13904 = 0;
var init__13905 = init;
while(true){
if((i__13904 < len__13903))
{var node__13906 = (this__13901.arr[i__13904]);
if(!((node__13906 == null)))
{var init__13907 = node__13906.kv_reduce(f,init__13905);
if(cljs.core.reduced_QMARK_.call(null,init__13907))
{return cljs.core.deref.call(null,init__13907);
} else
{{
var G__13926 = (i__13904 + 1);
var G__13927 = init__13907;
i__13904 = G__13926;
init__13905 = G__13927;
continue;
}
}
} else
{return null;
}
} else
{return init__13905;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__13908 = this;
var inode__13909 = this;
var idx__13910 = ((hash >>> shift) & 0x01f);
var node__13911 = (this__13908.arr[idx__13910]);
if(!((node__13911 == null)))
{return node__13911.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__13912 = this;
var inode__13913 = this;
var idx__13914 = ((hash >>> shift) & 0x01f);
var node__13915 = (this__13912.arr[idx__13914]);
if(!((node__13915 == null)))
{var n__13916 = node__13915.inode_without((shift + 5),hash,key);
if((n__13916 === node__13915))
{return inode__13913;
} else
{if((n__13916 == null))
{if((this__13912.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__13913,null,idx__13914);
} else
{return (new cljs.core.ArrayNode(null,(this__13912.cnt - 1),cljs.core.clone_and_set.call(null,this__13912.arr,idx__13914,n__13916)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__13912.cnt,cljs.core.clone_and_set.call(null,this__13912.arr,idx__13914,n__13916)));
} else
{return null;
}
}
}
} else
{return inode__13913;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__13917 = this;
var inode__13918 = this;
var idx__13919 = ((hash >>> shift) & 0x01f);
var node__13920 = (this__13917.arr[idx__13919]);
if((node__13920 == null))
{return (new cljs.core.ArrayNode(null,(this__13917.cnt + 1),cljs.core.clone_and_set.call(null,this__13917.arr,idx__13919,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__13921 = node__13920.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__13921 === node__13920))
{return inode__13918;
} else
{return (new cljs.core.ArrayNode(null,this__13917.cnt,cljs.core.clone_and_set.call(null,this__13917.arr,idx__13919,n__13921)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__13922 = this;
var inode__13923 = this;
var idx__13924 = ((hash >>> shift) & 0x01f);
var node__13925 = (this__13922.arr[idx__13924]);
if(!((node__13925 == null)))
{return node__13925.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__13930 = (2 * cnt);
var i__13931 = 0;
while(true){
if((i__13931 < lim__13930))
{if(cljs.core.key_test.call(null,key,(arr[i__13931])))
{return i__13931;
} else
{{
var G__13932 = (i__13931 + 2);
i__13931 = G__13932;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__13933 = this;
var inode__13934 = this;
if((hash === this__13933.collision_hash))
{var idx__13935 = cljs.core.hash_collision_node_find_index.call(null,this__13933.arr,this__13933.cnt,key);
if((idx__13935 === -1))
{if((this__13933.arr.length > (2 * this__13933.cnt)))
{var editable__13936 = cljs.core.edit_and_set.call(null,inode__13934,edit,(2 * this__13933.cnt),key,((2 * this__13933.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__13936.cnt = (editable__13936.cnt + 1);
return editable__13936;
} else
{var len__13937 = this__13933.arr.length;
var new_arr__13938 = cljs.core.make_array.call(null,(len__13937 + 2));
cljs.core.array_copy.call(null,this__13933.arr,0,new_arr__13938,0,len__13937);
(new_arr__13938[len__13937] = key);
(new_arr__13938[(len__13937 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__13934.ensure_editable_array(edit,(this__13933.cnt + 1),new_arr__13938);
}
} else
{if(((this__13933.arr[(idx__13935 + 1)]) === val))
{return inode__13934;
} else
{return cljs.core.edit_and_set.call(null,inode__13934,edit,(idx__13935 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__13933.collision_hash >>> shift) & 0x01f)),[null,inode__13934,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__13939 = this;
var inode__13940 = this;
return cljs.core.create_inode_seq.call(null,this__13939.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__13941 = this;
var inode__13942 = this;
var idx__13943 = cljs.core.hash_collision_node_find_index.call(null,this__13941.arr,this__13941.cnt,key);
if((idx__13943 === -1))
{return inode__13942;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__13941.cnt === 1))
{return null;
} else
{var editable__13944 = inode__13942.ensure_editable(edit);
var earr__13945 = editable__13944.arr;
(earr__13945[idx__13943] = (earr__13945[((2 * this__13941.cnt) - 2)]));
(earr__13945[(idx__13943 + 1)] = (earr__13945[((2 * this__13941.cnt) - 1)]));
(earr__13945[((2 * this__13941.cnt) - 1)] = null);
(earr__13945[((2 * this__13941.cnt) - 2)] = null);
editable__13944.cnt = (editable__13944.cnt - 1);
return editable__13944;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__13946 = this;
var inode__13947 = this;
if((e === this__13946.edit))
{return inode__13947;
} else
{var new_arr__13948 = cljs.core.make_array.call(null,(2 * (this__13946.cnt + 1)));
cljs.core.array_copy.call(null,this__13946.arr,0,new_arr__13948,0,(2 * this__13946.cnt));
return (new cljs.core.HashCollisionNode(e,this__13946.collision_hash,this__13946.cnt,new_arr__13948));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__13949 = this;
var inode__13950 = this;
return cljs.core.inode_kv_reduce.call(null,this__13949.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__13951 = this;
var inode__13952 = this;
var idx__13953 = cljs.core.hash_collision_node_find_index.call(null,this__13951.arr,this__13951.cnt,key);
if((idx__13953 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__13951.arr[idx__13953])))
{return cljs.core.PersistentVector.fromArray([(this__13951.arr[idx__13953]),(this__13951.arr[(idx__13953 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__13954 = this;
var inode__13955 = this;
var idx__13956 = cljs.core.hash_collision_node_find_index.call(null,this__13954.arr,this__13954.cnt,key);
if((idx__13956 === -1))
{return inode__13955;
} else
{if((this__13954.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__13954.collision_hash,(this__13954.cnt - 1),cljs.core.remove_pair.call(null,this__13954.arr,cljs.core.quot.call(null,idx__13956,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__13957 = this;
var inode__13958 = this;
if((hash === this__13957.collision_hash))
{var idx__13959 = cljs.core.hash_collision_node_find_index.call(null,this__13957.arr,this__13957.cnt,key);
if((idx__13959 === -1))
{var len__13960 = this__13957.arr.length;
var new_arr__13961 = cljs.core.make_array.call(null,(len__13960 + 2));
cljs.core.array_copy.call(null,this__13957.arr,0,new_arr__13961,0,len__13960);
(new_arr__13961[len__13960] = key);
(new_arr__13961[(len__13960 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__13957.collision_hash,(this__13957.cnt + 1),new_arr__13961));
} else
{if(cljs.core._EQ_.call(null,(this__13957.arr[idx__13959]),val))
{return inode__13958;
} else
{return (new cljs.core.HashCollisionNode(null,this__13957.collision_hash,this__13957.cnt,cljs.core.clone_and_set.call(null,this__13957.arr,(idx__13959 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__13957.collision_hash >>> shift) & 0x01f)),[null,inode__13958])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__13962 = this;
var inode__13963 = this;
var idx__13964 = cljs.core.hash_collision_node_find_index.call(null,this__13962.arr,this__13962.cnt,key);
if((idx__13964 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__13962.arr[idx__13964])))
{return (this__13962.arr[(idx__13964 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__13965 = this;
var inode__13966 = this;
if((e === this__13965.edit))
{this__13965.arr = array;
this__13965.cnt = count;
return inode__13966;
} else
{return (new cljs.core.HashCollisionNode(this__13965.edit,this__13965.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__13971 = cljs.core.hash.call(null,key1);
if((key1hash__13971 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__13971,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___13972 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__13971,key1,val1,added_leaf_QMARK___13972).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___13972);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__13973 = cljs.core.hash.call(null,key1);
if((key1hash__13973 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__13973,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___13974 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__13973,key1,val1,added_leaf_QMARK___13974).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___13974);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__13975 = this;
var h__4806__auto____13976 = this__13975.__hash;
if(!((h__4806__auto____13976 == null)))
{return h__4806__auto____13976;
} else
{var h__4806__auto____13977 = cljs.core.hash_coll.call(null,coll);
this__13975.__hash = h__4806__auto____13977;
return h__4806__auto____13977;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__13978 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__13979 = this;
var this__13980 = this;
return cljs.core.pr_str.call(null,this__13980);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__13981 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__13982 = this;
if((this__13982.s == null))
{return cljs.core.PersistentVector.fromArray([(this__13982.nodes[this__13982.i]),(this__13982.nodes[(this__13982.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__13982.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__13983 = this;
if((this__13983.s == null))
{return cljs.core.create_inode_seq.call(null,this__13983.nodes,(this__13983.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__13983.nodes,this__13983.i,cljs.core.next.call(null,this__13983.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__13984 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__13985 = this;
return (new cljs.core.NodeSeq(meta,this__13985.nodes,this__13985.i,this__13985.s,this__13985.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__13986 = this;
return this__13986.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__13987 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13987.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__13994 = nodes.length;
var j__13995 = i;
while(true){
if((j__13995 < len__13994))
{if(!(((nodes[j__13995]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__13995,null,null));
} else
{var temp__3971__auto____13996 = (nodes[(j__13995 + 1)]);
if(cljs.core.truth_(temp__3971__auto____13996))
{var node__13997 = temp__3971__auto____13996;
var temp__3971__auto____13998 = node__13997.inode_seq();
if(cljs.core.truth_(temp__3971__auto____13998))
{var node_seq__13999 = temp__3971__auto____13998;
return (new cljs.core.NodeSeq(null,nodes,(j__13995 + 2),node_seq__13999,null));
} else
{{
var G__14000 = (j__13995 + 2);
j__13995 = G__14000;
continue;
}
}
} else
{{
var G__14001 = (j__13995 + 2);
j__13995 = G__14001;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14002 = this;
var h__4806__auto____14003 = this__14002.__hash;
if(!((h__4806__auto____14003 == null)))
{return h__4806__auto____14003;
} else
{var h__4806__auto____14004 = cljs.core.hash_coll.call(null,coll);
this__14002.__hash = h__4806__auto____14004;
return h__4806__auto____14004;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__14005 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__14006 = this;
var this__14007 = this;
return cljs.core.pr_str.call(null,this__14007);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__14008 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__14009 = this;
return cljs.core.first.call(null,this__14009.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__14010 = this;
return cljs.core.create_array_node_seq.call(null,null,this__14010.nodes,this__14010.i,cljs.core.next.call(null,this__14010.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14011 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14012 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__14012.nodes,this__14012.i,this__14012.s,this__14012.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14013 = this;
return this__14013.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14014 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14014.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__14021 = nodes.length;
var j__14022 = i;
while(true){
if((j__14022 < len__14021))
{var temp__3971__auto____14023 = (nodes[j__14022]);
if(cljs.core.truth_(temp__3971__auto____14023))
{var nj__14024 = temp__3971__auto____14023;
var temp__3971__auto____14025 = nj__14024.inode_seq();
if(cljs.core.truth_(temp__3971__auto____14025))
{var ns__14026 = temp__3971__auto____14025;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__14022 + 1),ns__14026,null));
} else
{{
var G__14027 = (j__14022 + 1);
j__14022 = G__14027;
continue;
}
}
} else
{{
var G__14028 = (j__14022 + 1);
j__14022 = G__14028;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__14031 = this;
return (new cljs.core.TransientHashMap({},this__14031.root,this__14031.cnt,this__14031.has_nil_QMARK_,this__14031.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14032 = this;
var h__4806__auto____14033 = this__14032.__hash;
if(!((h__4806__auto____14033 == null)))
{return h__4806__auto____14033;
} else
{var h__4806__auto____14034 = cljs.core.hash_imap.call(null,coll);
this__14032.__hash = h__4806__auto____14034;
return h__4806__auto____14034;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__14035 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__14036 = this;
if((k == null))
{if(this__14036.has_nil_QMARK_)
{return this__14036.nil_val;
} else
{return not_found;
}
} else
{if((this__14036.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__14036.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__14037 = this;
if((k == null))
{if((function (){var and__3822__auto____14038 = this__14037.has_nil_QMARK_;
if(and__3822__auto____14038)
{return (v === this__14037.nil_val);
} else
{return and__3822__auto____14038;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__14037.meta,((this__14037.has_nil_QMARK_)?this__14037.cnt:(this__14037.cnt + 1)),this__14037.root,true,v,null));
}
} else
{var added_leaf_QMARK___14039 = (new cljs.core.Box(false));
var new_root__14040 = (((this__14037.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__14037.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___14039);
if((new_root__14040 === this__14037.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__14037.meta,((added_leaf_QMARK___14039.val)?(this__14037.cnt + 1):this__14037.cnt),new_root__14040,this__14037.has_nil_QMARK_,this__14037.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__14041 = this;
if((k == null))
{return this__14041.has_nil_QMARK_;
} else
{if((this__14041.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__14041.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__14064 = null;
var G__14064__2 = (function (this_sym14042,k){
var this__14044 = this;
var this_sym14042__14045 = this;
var coll__14046 = this_sym14042__14045;
return coll__14046.cljs$core$ILookup$_lookup$arity$2(coll__14046,k);
});
var G__14064__3 = (function (this_sym14043,k,not_found){
var this__14044 = this;
var this_sym14043__14047 = this;
var coll__14048 = this_sym14043__14047;
return coll__14048.cljs$core$ILookup$_lookup$arity$3(coll__14048,k,not_found);
});
G__14064 = function(this_sym14043,k,not_found){
switch(arguments.length){
case 2:
return G__14064__2.call(this,this_sym14043,k);
case 3:
return G__14064__3.call(this,this_sym14043,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14064;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym14029,args14030){
var this__14049 = this;
return this_sym14029.call.apply(this_sym14029,[this_sym14029].concat(args14030.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__14050 = this;
var init__14051 = ((this__14050.has_nil_QMARK_)?f.call(null,init,null,this__14050.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__14051))
{return cljs.core.deref.call(null,init__14051);
} else
{if(!((this__14050.root == null)))
{return this__14050.root.kv_reduce(f,init__14051);
} else
{if("\uFDD0'else")
{return init__14051;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__14052 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__14053 = this;
var this__14054 = this;
return cljs.core.pr_str.call(null,this__14054);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__14055 = this;
if((this__14055.cnt > 0))
{var s__14056 = ((!((this__14055.root == null)))?this__14055.root.inode_seq():null);
if(this__14055.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__14055.nil_val], true),s__14056);
} else
{return s__14056;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14057 = this;
return this__14057.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14058 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14059 = this;
return (new cljs.core.PersistentHashMap(meta,this__14059.cnt,this__14059.root,this__14059.has_nil_QMARK_,this__14059.nil_val,this__14059.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14060 = this;
return this__14060.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14061 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__14061.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__14062 = this;
if((k == null))
{if(this__14062.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__14062.meta,(this__14062.cnt - 1),this__14062.root,false,null,null));
} else
{return coll;
}
} else
{if((this__14062.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__14063 = this__14062.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__14063 === this__14062.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__14062.meta,(this__14062.cnt - 1),new_root__14063,this__14062.has_nil_QMARK_,this__14062.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__14065 = ks.length;
var i__14066 = 0;
var out__14067 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__14066 < len__14065))
{{
var G__14068 = (i__14066 + 1);
var G__14069 = cljs.core.assoc_BANG_.call(null,out__14067,(ks[i__14066]),(vs[i__14066]));
i__14066 = G__14068;
out__14067 = G__14069;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__14067);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__14070 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__14071 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__14072 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__14073 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__14074 = this;
if((k == null))
{if(this__14074.has_nil_QMARK_)
{return this__14074.nil_val;
} else
{return null;
}
} else
{if((this__14074.root == null))
{return null;
} else
{return this__14074.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__14075 = this;
if((k == null))
{if(this__14075.has_nil_QMARK_)
{return this__14075.nil_val;
} else
{return not_found;
}
} else
{if((this__14075.root == null))
{return not_found;
} else
{return this__14075.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14076 = this;
if(this__14076.edit)
{return this__14076.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__14077 = this;
var tcoll__14078 = this;
if(this__14077.edit)
{if((function (){var G__14079__14080 = o;
if(G__14079__14080)
{if((function (){var or__3824__auto____14081 = (G__14079__14080.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____14081)
{return or__3824__auto____14081;
} else
{return G__14079__14080.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__14079__14080.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__14079__14080);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__14079__14080);
}
})())
{return tcoll__14078.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__14082 = cljs.core.seq.call(null,o);
var tcoll__14083 = tcoll__14078;
while(true){
var temp__3971__auto____14084 = cljs.core.first.call(null,es__14082);
if(cljs.core.truth_(temp__3971__auto____14084))
{var e__14085 = temp__3971__auto____14084;
{
var G__14096 = cljs.core.next.call(null,es__14082);
var G__14097 = tcoll__14083.assoc_BANG_(cljs.core.key.call(null,e__14085),cljs.core.val.call(null,e__14085));
es__14082 = G__14096;
tcoll__14083 = G__14097;
continue;
}
} else
{return tcoll__14083;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__14086 = this;
var tcoll__14087 = this;
if(this__14086.edit)
{if((k == null))
{if((this__14086.nil_val === v))
{} else
{this__14086.nil_val = v;
}
if(this__14086.has_nil_QMARK_)
{} else
{this__14086.count = (this__14086.count + 1);
this__14086.has_nil_QMARK_ = true;
}
return tcoll__14087;
} else
{var added_leaf_QMARK___14088 = (new cljs.core.Box(false));
var node__14089 = (((this__14086.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__14086.root).inode_assoc_BANG_(this__14086.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___14088);
if((node__14089 === this__14086.root))
{} else
{this__14086.root = node__14089;
}
if(added_leaf_QMARK___14088.val)
{this__14086.count = (this__14086.count + 1);
} else
{}
return tcoll__14087;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__14090 = this;
var tcoll__14091 = this;
if(this__14090.edit)
{if((k == null))
{if(this__14090.has_nil_QMARK_)
{this__14090.has_nil_QMARK_ = false;
this__14090.nil_val = null;
this__14090.count = (this__14090.count - 1);
return tcoll__14091;
} else
{return tcoll__14091;
}
} else
{if((this__14090.root == null))
{return tcoll__14091;
} else
{var removed_leaf_QMARK___14092 = (new cljs.core.Box(false));
var node__14093 = this__14090.root.inode_without_BANG_(this__14090.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___14092);
if((node__14093 === this__14090.root))
{} else
{this__14090.root = node__14093;
}
if(cljs.core.truth_((removed_leaf_QMARK___14092[0])))
{this__14090.count = (this__14090.count - 1);
} else
{}
return tcoll__14091;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__14094 = this;
var tcoll__14095 = this;
if(this__14094.edit)
{this__14094.edit = null;
return (new cljs.core.PersistentHashMap(null,this__14094.count,this__14094.root,this__14094.has_nil_QMARK_,this__14094.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__14100 = node;
var stack__14101 = stack;
while(true){
if(!((t__14100 == null)))
{{
var G__14102 = ((ascending_QMARK_)?t__14100.left:t__14100.right);
var G__14103 = cljs.core.conj.call(null,stack__14101,t__14100);
t__14100 = G__14102;
stack__14101 = G__14103;
continue;
}
} else
{return stack__14101;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14104 = this;
var h__4806__auto____14105 = this__14104.__hash;
if(!((h__4806__auto____14105 == null)))
{return h__4806__auto____14105;
} else
{var h__4806__auto____14106 = cljs.core.hash_coll.call(null,coll);
this__14104.__hash = h__4806__auto____14106;
return h__4806__auto____14106;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__14107 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__14108 = this;
var this__14109 = this;
return cljs.core.pr_str.call(null,this__14109);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__14110 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14111 = this;
if((this__14111.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__14111.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__14112 = this;
return cljs.core.peek.call(null,this__14112.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__14113 = this;
var t__14114 = cljs.core.first.call(null,this__14113.stack);
var next_stack__14115 = cljs.core.tree_map_seq_push.call(null,((this__14113.ascending_QMARK_)?t__14114.right:t__14114.left),cljs.core.next.call(null,this__14113.stack),this__14113.ascending_QMARK_);
if(!((next_stack__14115 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__14115,this__14113.ascending_QMARK_,(this__14113.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14116 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14117 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__14117.stack,this__14117.ascending_QMARK_,this__14117.cnt,this__14117.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14118 = this;
return this__14118.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
void 0;
void 0;
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____14120 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____14120)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____14120;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____14122 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____14122)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____14122;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__14126 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__14126))
{return cljs.core.deref.call(null,init__14126);
} else
{var init__14127 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__14126):init__14126);
if(cljs.core.reduced_QMARK_.call(null,init__14127))
{return cljs.core.deref.call(null,init__14127);
} else
{var init__14128 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__14127):init__14127);
if(cljs.core.reduced_QMARK_.call(null,init__14128))
{return cljs.core.deref.call(null,init__14128);
} else
{return init__14128;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14131 = this;
var h__4806__auto____14132 = this__14131.__hash;
if(!((h__4806__auto____14132 == null)))
{return h__4806__auto____14132;
} else
{var h__4806__auto____14133 = cljs.core.hash_coll.call(null,coll);
this__14131.__hash = h__4806__auto____14133;
return h__4806__auto____14133;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__14134 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__14135 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__14136 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__14136.key,this__14136.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__14184 = null;
var G__14184__2 = (function (this_sym14137,k){
var this__14139 = this;
var this_sym14137__14140 = this;
var node__14141 = this_sym14137__14140;
return node__14141.cljs$core$ILookup$_lookup$arity$2(node__14141,k);
});
var G__14184__3 = (function (this_sym14138,k,not_found){
var this__14139 = this;
var this_sym14138__14142 = this;
var node__14143 = this_sym14138__14142;
return node__14143.cljs$core$ILookup$_lookup$arity$3(node__14143,k,not_found);
});
G__14184 = function(this_sym14138,k,not_found){
switch(arguments.length){
case 2:
return G__14184__2.call(this,this_sym14138,k);
case 3:
return G__14184__3.call(this,this_sym14138,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14184;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym14129,args14130){
var this__14144 = this;
return this_sym14129.call.apply(this_sym14129,[this_sym14129].concat(args14130.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__14145 = this;
return cljs.core.PersistentVector.fromArray([this__14145.key,this__14145.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__14146 = this;
return this__14146.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__14147 = this;
return this__14147.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__14148 = this;
var node__14149 = this;
return ins.balance_right(node__14149);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__14150 = this;
var node__14151 = this;
return (new cljs.core.RedNode(this__14150.key,this__14150.val,this__14150.left,this__14150.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__14152 = this;
var node__14153 = this;
return cljs.core.balance_right_del.call(null,this__14152.key,this__14152.val,this__14152.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__14154 = this;
var node__14155 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__14156 = this;
var node__14157 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__14157,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__14158 = this;
var node__14159 = this;
return cljs.core.balance_left_del.call(null,this__14158.key,this__14158.val,del,this__14158.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__14160 = this;
var node__14161 = this;
return ins.balance_left(node__14161);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__14162 = this;
var node__14163 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__14163,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__14185 = null;
var G__14185__0 = (function (){
var this__14164 = this;
var this__14166 = this;
return cljs.core.pr_str.call(null,this__14166);
});
G__14185 = function(){
switch(arguments.length){
case 0:
return G__14185__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14185;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__14167 = this;
var node__14168 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__14168,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__14169 = this;
var node__14170 = this;
return node__14170;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__14171 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__14172 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__14173 = this;
return cljs.core.list.call(null,this__14173.key,this__14173.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__14174 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__14175 = this;
return this__14175.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__14176 = this;
return cljs.core.PersistentVector.fromArray([this__14176.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__14177 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__14177.key,this__14177.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14178 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__14179 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__14179.key,this__14179.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__14180 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__14181 = this;
if((n === 0))
{return this__14181.key;
} else
{if((n === 1))
{return this__14181.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__14182 = this;
if((n === 0))
{return this__14182.key;
} else
{if((n === 1))
{return this__14182.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__14183 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14188 = this;
var h__4806__auto____14189 = this__14188.__hash;
if(!((h__4806__auto____14189 == null)))
{return h__4806__auto____14189;
} else
{var h__4806__auto____14190 = cljs.core.hash_coll.call(null,coll);
this__14188.__hash = h__4806__auto____14190;
return h__4806__auto____14190;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__14191 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__14192 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__14193 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__14193.key,this__14193.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__14241 = null;
var G__14241__2 = (function (this_sym14194,k){
var this__14196 = this;
var this_sym14194__14197 = this;
var node__14198 = this_sym14194__14197;
return node__14198.cljs$core$ILookup$_lookup$arity$2(node__14198,k);
});
var G__14241__3 = (function (this_sym14195,k,not_found){
var this__14196 = this;
var this_sym14195__14199 = this;
var node__14200 = this_sym14195__14199;
return node__14200.cljs$core$ILookup$_lookup$arity$3(node__14200,k,not_found);
});
G__14241 = function(this_sym14195,k,not_found){
switch(arguments.length){
case 2:
return G__14241__2.call(this,this_sym14195,k);
case 3:
return G__14241__3.call(this,this_sym14195,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14241;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym14186,args14187){
var this__14201 = this;
return this_sym14186.call.apply(this_sym14186,[this_sym14186].concat(args14187.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__14202 = this;
return cljs.core.PersistentVector.fromArray([this__14202.key,this__14202.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__14203 = this;
return this__14203.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__14204 = this;
return this__14204.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__14205 = this;
var node__14206 = this;
return (new cljs.core.RedNode(this__14205.key,this__14205.val,this__14205.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__14207 = this;
var node__14208 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__14209 = this;
var node__14210 = this;
return (new cljs.core.RedNode(this__14209.key,this__14209.val,this__14209.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__14211 = this;
var node__14212 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__14213 = this;
var node__14214 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__14214,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__14215 = this;
var node__14216 = this;
return (new cljs.core.RedNode(this__14215.key,this__14215.val,del,this__14215.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__14217 = this;
var node__14218 = this;
return (new cljs.core.RedNode(this__14217.key,this__14217.val,ins,this__14217.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__14219 = this;
var node__14220 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__14219.left))
{return (new cljs.core.RedNode(this__14219.key,this__14219.val,this__14219.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__14219.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__14219.right))
{return (new cljs.core.RedNode(this__14219.right.key,this__14219.right.val,(new cljs.core.BlackNode(this__14219.key,this__14219.val,this__14219.left,this__14219.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__14219.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__14220,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__14242 = null;
var G__14242__0 = (function (){
var this__14221 = this;
var this__14223 = this;
return cljs.core.pr_str.call(null,this__14223);
});
G__14242 = function(){
switch(arguments.length){
case 0:
return G__14242__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14242;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__14224 = this;
var node__14225 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__14224.right))
{return (new cljs.core.RedNode(this__14224.key,this__14224.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__14224.left,null)),this__14224.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__14224.left))
{return (new cljs.core.RedNode(this__14224.left.key,this__14224.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__14224.left.left,null)),(new cljs.core.BlackNode(this__14224.key,this__14224.val,this__14224.left.right,this__14224.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__14225,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__14226 = this;
var node__14227 = this;
return (new cljs.core.BlackNode(this__14226.key,this__14226.val,this__14226.left,this__14226.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__14228 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__14229 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__14230 = this;
return cljs.core.list.call(null,this__14230.key,this__14230.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__14231 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__14232 = this;
return this__14232.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__14233 = this;
return cljs.core.PersistentVector.fromArray([this__14233.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__14234 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__14234.key,this__14234.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14235 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__14236 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__14236.key,this__14236.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__14237 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__14238 = this;
if((n === 0))
{return this__14238.key;
} else
{if((n === 1))
{return this__14238.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__14239 = this;
if((n === 0))
{return this__14239.key;
} else
{if((n === 1))
{return this__14239.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__14240 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__14246 = comp.call(null,k,tree.key);
if((c__14246 === 0))
{(found[0] = tree);
return null;
} else
{if((c__14246 < 0))
{var ins__14247 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__14247 == null)))
{return tree.add_left(ins__14247);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__14248 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__14248 == null)))
{return tree.add_right(ins__14248);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__14251 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__14251))
{return (new cljs.core.RedNode(app__14251.key,app__14251.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__14251.left,null)),(new cljs.core.RedNode(right.key,right.val,app__14251.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__14251,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__14252 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__14252))
{return (new cljs.core.RedNode(app__14252.key,app__14252.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__14252.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__14252.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__14252,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__14258 = comp.call(null,k,tree.key);
if((c__14258 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__14258 < 0))
{var del__14259 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____14260 = !((del__14259 == null));
if(or__3824__auto____14260)
{return or__3824__auto____14260;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__14259,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__14259,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__14261 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____14262 = !((del__14261 == null));
if(or__3824__auto____14262)
{return or__3824__auto____14262;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__14261);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__14261,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__14265 = tree.key;
var c__14266 = comp.call(null,k,tk__14265);
if((c__14266 === 0))
{return tree.replace(tk__14265,v,tree.left,tree.right);
} else
{if((c__14266 < 0))
{return tree.replace(tk__14265,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__14265,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14269 = this;
var h__4806__auto____14270 = this__14269.__hash;
if(!((h__4806__auto____14270 == null)))
{return h__4806__auto____14270;
} else
{var h__4806__auto____14271 = cljs.core.hash_imap.call(null,coll);
this__14269.__hash = h__4806__auto____14271;
return h__4806__auto____14271;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__14272 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__14273 = this;
var n__14274 = coll.entry_at(k);
if(!((n__14274 == null)))
{return n__14274.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__14275 = this;
var found__14276 = [null];
var t__14277 = cljs.core.tree_map_add.call(null,this__14275.comp,this__14275.tree,k,v,found__14276);
if((t__14277 == null))
{var found_node__14278 = cljs.core.nth.call(null,found__14276,0);
if(cljs.core._EQ_.call(null,v,found_node__14278.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__14275.comp,cljs.core.tree_map_replace.call(null,this__14275.comp,this__14275.tree,k,v),this__14275.cnt,this__14275.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__14275.comp,t__14277.blacken(),(this__14275.cnt + 1),this__14275.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__14279 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__14313 = null;
var G__14313__2 = (function (this_sym14280,k){
var this__14282 = this;
var this_sym14280__14283 = this;
var coll__14284 = this_sym14280__14283;
return coll__14284.cljs$core$ILookup$_lookup$arity$2(coll__14284,k);
});
var G__14313__3 = (function (this_sym14281,k,not_found){
var this__14282 = this;
var this_sym14281__14285 = this;
var coll__14286 = this_sym14281__14285;
return coll__14286.cljs$core$ILookup$_lookup$arity$3(coll__14286,k,not_found);
});
G__14313 = function(this_sym14281,k,not_found){
switch(arguments.length){
case 2:
return G__14313__2.call(this,this_sym14281,k);
case 3:
return G__14313__3.call(this,this_sym14281,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14313;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym14267,args14268){
var this__14287 = this;
return this_sym14267.call.apply(this_sym14267,[this_sym14267].concat(args14268.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__14288 = this;
if(!((this__14288.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__14288.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__14289 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__14290 = this;
if((this__14290.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__14290.tree,false,this__14290.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__14291 = this;
var this__14292 = this;
return cljs.core.pr_str.call(null,this__14292);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__14293 = this;
var coll__14294 = this;
var t__14295 = this__14293.tree;
while(true){
if(!((t__14295 == null)))
{var c__14296 = this__14293.comp.call(null,k,t__14295.key);
if((c__14296 === 0))
{return t__14295;
} else
{if((c__14296 < 0))
{{
var G__14314 = t__14295.left;
t__14295 = G__14314;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__14315 = t__14295.right;
t__14295 = G__14315;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__14297 = this;
if((this__14297.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__14297.tree,ascending_QMARK_,this__14297.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__14298 = this;
if((this__14298.cnt > 0))
{var stack__14299 = null;
var t__14300 = this__14298.tree;
while(true){
if(!((t__14300 == null)))
{var c__14301 = this__14298.comp.call(null,k,t__14300.key);
if((c__14301 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__14299,t__14300),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__14301 < 0))
{{
var G__14316 = cljs.core.conj.call(null,stack__14299,t__14300);
var G__14317 = t__14300.left;
stack__14299 = G__14316;
t__14300 = G__14317;
continue;
}
} else
{{
var G__14318 = stack__14299;
var G__14319 = t__14300.right;
stack__14299 = G__14318;
t__14300 = G__14319;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__14301 > 0))
{{
var G__14320 = cljs.core.conj.call(null,stack__14299,t__14300);
var G__14321 = t__14300.right;
stack__14299 = G__14320;
t__14300 = G__14321;
continue;
}
} else
{{
var G__14322 = stack__14299;
var G__14323 = t__14300.left;
stack__14299 = G__14322;
t__14300 = G__14323;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__14299 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__14299,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__14302 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__14303 = this;
return this__14303.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__14304 = this;
if((this__14304.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__14304.tree,true,this__14304.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14305 = this;
return this__14305.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14306 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14307 = this;
return (new cljs.core.PersistentTreeMap(this__14307.comp,this__14307.tree,this__14307.cnt,meta,this__14307.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14308 = this;
return this__14308.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14309 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__14309.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__14310 = this;
var found__14311 = [null];
var t__14312 = cljs.core.tree_map_remove.call(null,this__14310.comp,this__14310.tree,k,found__14311);
if((t__14312 == null))
{if((cljs.core.nth.call(null,found__14311,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__14310.comp,null,0,this__14310.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__14310.comp,t__14312.blacken(),(this__14310.cnt - 1),this__14310.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__14326 = cljs.core.seq.call(null,keyvals);
var out__14327 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__14326)
{{
var G__14328 = cljs.core.nnext.call(null,in__14326);
var G__14329 = cljs.core.assoc_BANG_.call(null,out__14327,cljs.core.first.call(null,in__14326),cljs.core.second.call(null,in__14326));
in__14326 = G__14328;
out__14327 = G__14329;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__14327);
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
hash_map.cljs$lang$applyTo = (function (arglist__14330){
var keyvals = cljs.core.seq(arglist__14330);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__14331){
var keyvals = cljs.core.seq(arglist__14331);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__14334 = cljs.core.seq.call(null,keyvals);
var out__14335 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__14334)
{{
var G__14336 = cljs.core.nnext.call(null,in__14334);
var G__14337 = cljs.core.assoc.call(null,out__14335,cljs.core.first.call(null,in__14334),cljs.core.second.call(null,in__14334));
in__14334 = G__14336;
out__14335 = G__14337;
continue;
}
} else
{return out__14335;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__14338){
var keyvals = cljs.core.seq(arglist__14338);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__14341 = cljs.core.seq.call(null,keyvals);
var out__14342 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__14341)
{{
var G__14343 = cljs.core.nnext.call(null,in__14341);
var G__14344 = cljs.core.assoc.call(null,out__14342,cljs.core.first.call(null,in__14341),cljs.core.second.call(null,in__14341));
in__14341 = G__14343;
out__14342 = G__14344;
continue;
}
} else
{return out__14342;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__14345){
var comparator = cljs.core.first(arglist__14345);
var keyvals = cljs.core.rest(arglist__14345);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
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
{return cljs.core.reduce.call(null,(function (p1__14346_SHARP_,p2__14347_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____14349 = p1__14346_SHARP_;
if(cljs.core.truth_(or__3824__auto____14349))
{return or__3824__auto____14349;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__14347_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__14350){
var maps = cljs.core.seq(arglist__14350);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
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
{var merge_entry__14358 = (function (m,e){
var k__14356 = cljs.core.first.call(null,e);
var v__14357 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__14356))
{return cljs.core.assoc.call(null,m,k__14356,f.call(null,cljs.core._lookup.call(null,m,k__14356,null),v__14357));
} else
{return cljs.core.assoc.call(null,m,k__14356,v__14357);
}
});
var merge2__14360 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__14358,(function (){var or__3824__auto____14359 = m1;
if(cljs.core.truth_(or__3824__auto____14359))
{return or__3824__auto____14359;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__14360,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__14361){
var f = cljs.core.first(arglist__14361);
var maps = cljs.core.rest(arglist__14361);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__14366 = cljs.core.ObjMap.EMPTY;
var keys__14367 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__14367)
{var key__14368 = cljs.core.first.call(null,keys__14367);
var entry__14369 = cljs.core._lookup.call(null,map,key__14368,"\uFDD0'session.server/not-found");
{
var G__14370 = ((cljs.core.not_EQ_.call(null,entry__14369,"\uFDD0'session.server/not-found"))?cljs.core.assoc.call(null,ret__14366,key__14368,entry__14369):ret__14366);
var G__14371 = cljs.core.next.call(null,keys__14367);
ret__14366 = G__14370;
keys__14367 = G__14371;
continue;
}
} else
{return ret__14366;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__14375 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__14375.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14376 = this;
var h__4806__auto____14377 = this__14376.__hash;
if(!((h__4806__auto____14377 == null)))
{return h__4806__auto____14377;
} else
{var h__4806__auto____14378 = cljs.core.hash_iset.call(null,coll);
this__14376.__hash = h__4806__auto____14378;
return h__4806__auto____14378;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__14379 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__14380 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__14380.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__14401 = null;
var G__14401__2 = (function (this_sym14381,k){
var this__14383 = this;
var this_sym14381__14384 = this;
var coll__14385 = this_sym14381__14384;
return coll__14385.cljs$core$ILookup$_lookup$arity$2(coll__14385,k);
});
var G__14401__3 = (function (this_sym14382,k,not_found){
var this__14383 = this;
var this_sym14382__14386 = this;
var coll__14387 = this_sym14382__14386;
return coll__14387.cljs$core$ILookup$_lookup$arity$3(coll__14387,k,not_found);
});
G__14401 = function(this_sym14382,k,not_found){
switch(arguments.length){
case 2:
return G__14401__2.call(this,this_sym14382,k);
case 3:
return G__14401__3.call(this,this_sym14382,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14401;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym14373,args14374){
var this__14388 = this;
return this_sym14373.call.apply(this_sym14373,[this_sym14373].concat(args14374.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__14389 = this;
return (new cljs.core.PersistentHashSet(this__14389.meta,cljs.core.assoc.call(null,this__14389.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__14390 = this;
var this__14391 = this;
return cljs.core.pr_str.call(null,this__14391);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__14392 = this;
return cljs.core.keys.call(null,this__14392.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__14393 = this;
return (new cljs.core.PersistentHashSet(this__14393.meta,cljs.core.dissoc.call(null,this__14393.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14394 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14395 = this;
var and__3822__auto____14396 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____14396)
{var and__3822__auto____14397 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____14397)
{return cljs.core.every_QMARK_.call(null,(function (p1__14372_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__14372_SHARP_);
}),other);
} else
{return and__3822__auto____14397;
}
} else
{return and__3822__auto____14396;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14398 = this;
return (new cljs.core.PersistentHashSet(meta,this__14398.hash_map,this__14398.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14399 = this;
return this__14399.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14400 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__14400.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__14419 = null;
var G__14419__2 = (function (this_sym14405,k){
var this__14407 = this;
var this_sym14405__14408 = this;
var tcoll__14409 = this_sym14405__14408;
if((cljs.core._lookup.call(null,this__14407.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__14419__3 = (function (this_sym14406,k,not_found){
var this__14407 = this;
var this_sym14406__14410 = this;
var tcoll__14411 = this_sym14406__14410;
if((cljs.core._lookup.call(null,this__14407.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__14419 = function(this_sym14406,k,not_found){
switch(arguments.length){
case 2:
return G__14419__2.call(this,this_sym14406,k);
case 3:
return G__14419__3.call(this,this_sym14406,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14419;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym14403,args14404){
var this__14412 = this;
return this_sym14403.call.apply(this_sym14403,[this_sym14403].concat(args14404.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__14413 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__14414 = this;
if((cljs.core._lookup.call(null,this__14414.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__14415 = this;
return cljs.core.count.call(null,this__14415.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__14416 = this;
this__14416.transient_map = cljs.core.dissoc_BANG_.call(null,this__14416.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__14417 = this;
this__14417.transient_map = cljs.core.assoc_BANG_.call(null,this__14417.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__14418 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__14418.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__14422 = this;
var h__4806__auto____14423 = this__14422.__hash;
if(!((h__4806__auto____14423 == null)))
{return h__4806__auto____14423;
} else
{var h__4806__auto____14424 = cljs.core.hash_iset.call(null,coll);
this__14422.__hash = h__4806__auto____14424;
return h__4806__auto____14424;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__14425 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__14426 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__14426.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__14452 = null;
var G__14452__2 = (function (this_sym14427,k){
var this__14429 = this;
var this_sym14427__14430 = this;
var coll__14431 = this_sym14427__14430;
return coll__14431.cljs$core$ILookup$_lookup$arity$2(coll__14431,k);
});
var G__14452__3 = (function (this_sym14428,k,not_found){
var this__14429 = this;
var this_sym14428__14432 = this;
var coll__14433 = this_sym14428__14432;
return coll__14433.cljs$core$ILookup$_lookup$arity$3(coll__14433,k,not_found);
});
G__14452 = function(this_sym14428,k,not_found){
switch(arguments.length){
case 2:
return G__14452__2.call(this,this_sym14428,k);
case 3:
return G__14452__3.call(this,this_sym14428,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14452;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym14420,args14421){
var this__14434 = this;
return this_sym14420.call.apply(this_sym14420,[this_sym14420].concat(args14421.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__14435 = this;
return (new cljs.core.PersistentTreeSet(this__14435.meta,cljs.core.assoc.call(null,this__14435.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__14436 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__14436.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__14437 = this;
var this__14438 = this;
return cljs.core.pr_str.call(null,this__14438);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__14439 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__14439.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__14440 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__14440.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__14441 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__14442 = this;
return cljs.core._comparator.call(null,this__14442.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__14443 = this;
return cljs.core.keys.call(null,this__14443.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__14444 = this;
return (new cljs.core.PersistentTreeSet(this__14444.meta,cljs.core.dissoc.call(null,this__14444.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__14445 = this;
return cljs.core.count.call(null,this__14445.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__14446 = this;
var and__3822__auto____14447 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____14447)
{var and__3822__auto____14448 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____14448)
{return cljs.core.every_QMARK_.call(null,(function (p1__14402_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__14402_SHARP_);
}),other);
} else
{return and__3822__auto____14448;
}
} else
{return and__3822__auto____14447;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__14449 = this;
return (new cljs.core.PersistentTreeSet(meta,this__14449.tree_map,this__14449.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__14450 = this;
return this__14450.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__14451 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__14451.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in__14455 = cljs.core.seq.call(null,coll);
var out__14456 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__14455))
{{
var G__14457 = cljs.core.next.call(null,in__14455);
var G__14458 = cljs.core.conj_BANG_.call(null,out__14456,cljs.core.first.call(null,in__14455));
in__14455 = G__14457;
out__14456 = G__14458;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__14456);
}
break;
}
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__14459){
var keys = cljs.core.seq(arglist__14459);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__14461){
var comparator = cljs.core.first(arglist__14461);
var keys = cljs.core.rest(arglist__14461);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__14467 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____14468 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____14468))
{var e__14469 = temp__3971__auto____14468;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__14469));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__14467,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__14460_SHARP_){
var temp__3971__auto____14470 = cljs.core.find.call(null,smap,p1__14460_SHARP_);
if(cljs.core.truth_(temp__3971__auto____14470))
{var e__14471 = temp__3971__auto____14470;
return cljs.core.second.call(null,e__14471);
} else
{return p1__14460_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__14501 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__14494,seen){
while(true){
var vec__14495__14496 = p__14494;
var f__14497 = cljs.core.nth.call(null,vec__14495__14496,0,null);
var xs__14498 = vec__14495__14496;
var temp__3974__auto____14499 = cljs.core.seq.call(null,xs__14498);
if(temp__3974__auto____14499)
{var s__14500 = temp__3974__auto____14499;
if(cljs.core.contains_QMARK_.call(null,seen,f__14497))
{{
var G__14502 = cljs.core.rest.call(null,s__14500);
var G__14503 = seen;
p__14494 = G__14502;
seen = G__14503;
continue;
}
} else
{return cljs.core.cons.call(null,f__14497,step.call(null,cljs.core.rest.call(null,s__14500),cljs.core.conj.call(null,seen,f__14497)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__14501.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__14506 = cljs.core.PersistentVector.EMPTY;
var s__14507 = s;
while(true){
if(cljs.core.next.call(null,s__14507))
{{
var G__14508 = cljs.core.conj.call(null,ret__14506,cljs.core.first.call(null,s__14507));
var G__14509 = cljs.core.next.call(null,s__14507);
ret__14506 = G__14508;
s__14507 = G__14509;
continue;
}
} else
{return cljs.core.seq.call(null,ret__14506);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____14512 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____14512)
{return or__3824__auto____14512;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__14513 = x.lastIndexOf("/");
if((i__14513 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__14513 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
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
if((function (){var or__3824__auto____14516 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____14516)
{return or__3824__auto____14516;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__14517 = x.lastIndexOf("/");
if((i__14517 > -1))
{return cljs.core.subs.call(null,x,2,i__14517);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__14524 = cljs.core.ObjMap.EMPTY;
var ks__14525 = cljs.core.seq.call(null,keys);
var vs__14526 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____14527 = ks__14525;
if(and__3822__auto____14527)
{return vs__14526;
} else
{return and__3822__auto____14527;
}
})())
{{
var G__14528 = cljs.core.assoc.call(null,map__14524,cljs.core.first.call(null,ks__14525),cljs.core.first.call(null,vs__14526));
var G__14529 = cljs.core.next.call(null,ks__14525);
var G__14530 = cljs.core.next.call(null,vs__14526);
map__14524 = G__14528;
ks__14525 = G__14529;
vs__14526 = G__14530;
continue;
}
} else
{return map__14524;
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
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__14533__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__14518_SHARP_,p2__14519_SHARP_){
return max_key.call(null,k,p1__14518_SHARP_,p2__14519_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__14533 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14533__delegate.call(this, k, x, y, more);
};
G__14533.cljs$lang$maxFixedArity = 3;
G__14533.cljs$lang$applyTo = (function (arglist__14534){
var k = cljs.core.first(arglist__14534);
var x = cljs.core.first(cljs.core.next(arglist__14534));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14534)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14534)));
return G__14533__delegate(k, x, y, more);
});
G__14533.cljs$lang$arity$variadic = G__14533__delegate;
return G__14533;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__14535__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__14531_SHARP_,p2__14532_SHARP_){
return min_key.call(null,k,p1__14531_SHARP_,p2__14532_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__14535 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14535__delegate.call(this, k, x, y, more);
};
G__14535.cljs$lang$maxFixedArity = 3;
G__14535.cljs$lang$applyTo = (function (arglist__14536){
var k = cljs.core.first(arglist__14536);
var x = cljs.core.first(cljs.core.next(arglist__14536));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14536)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14536)));
return G__14535__delegate(k, x, y, more);
});
G__14535.cljs$lang$arity$variadic = G__14535__delegate;
return G__14535;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____14539 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____14539)
{var s__14540 = temp__3974__auto____14539;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__14540),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__14540)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____14544 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____14544)
{var s__14545 = temp__3974__auto____14544;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__14545))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__14545),take_while.call(null,pred,cljs.core.rest.call(null,s__14545)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__14547 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__14547.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__14559 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____14560 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____14560))
{var vec__14561__14562 = temp__3974__auto____14560;
var e__14563 = cljs.core.nth.call(null,vec__14561__14562,0,null);
var s__14564 = vec__14561__14562;
if(cljs.core.truth_(include__14559.call(null,e__14563)))
{return s__14564;
} else
{return cljs.core.next.call(null,s__14564);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__14559,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____14565 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____14565))
{var vec__14566__14567 = temp__3974__auto____14565;
var e__14568 = cljs.core.nth.call(null,vec__14566__14567,0,null);
var s__14569 = vec__14566__14567;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__14568))?s__14569:cljs.core.next.call(null,s__14569)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__14581 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____14582 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____14582))
{var vec__14583__14584 = temp__3974__auto____14582;
var e__14585 = cljs.core.nth.call(null,vec__14583__14584,0,null);
var s__14586 = vec__14583__14584;
if(cljs.core.truth_(include__14581.call(null,e__14585)))
{return s__14586;
} else
{return cljs.core.next.call(null,s__14586);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__14581,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____14587 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____14587))
{var vec__14588__14589 = temp__3974__auto____14587;
var e__14590 = cljs.core.nth.call(null,vec__14588__14589,0,null);
var s__14591 = vec__14588__14589;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__14590))?s__14591:cljs.core.next.call(null,s__14591)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__14592 = this;
var h__4806__auto____14593 = this__14592.__hash;
if(!((h__4806__auto____14593 == null)))
{return h__4806__auto____14593;
} else
{var h__4806__auto____14594 = cljs.core.hash_coll.call(null,rng);
this__14592.__hash = h__4806__auto____14594;
return h__4806__auto____14594;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__14595 = this;
if((this__14595.step > 0))
{if(((this__14595.start + this__14595.step) < this__14595.end))
{return (new cljs.core.Range(this__14595.meta,(this__14595.start + this__14595.step),this__14595.end,this__14595.step,null));
} else
{return null;
}
} else
{if(((this__14595.start + this__14595.step) > this__14595.end))
{return (new cljs.core.Range(this__14595.meta,(this__14595.start + this__14595.step),this__14595.end,this__14595.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__14596 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__14597 = this;
var this__14598 = this;
return cljs.core.pr_str.call(null,this__14598);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__14599 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__14600 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__14601 = this;
if((this__14601.step > 0))
{if((this__14601.start < this__14601.end))
{return rng;
} else
{return null;
}
} else
{if((this__14601.start > this__14601.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__14602 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__14602.end - this__14602.start) / this__14602.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__14603 = this;
return this__14603.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__14604 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__14604.meta,(this__14604.start + this__14604.step),this__14604.end,this__14604.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__14605 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__14606 = this;
return (new cljs.core.Range(meta,this__14606.start,this__14606.end,this__14606.step,this__14606.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__14607 = this;
return this__14607.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__14608 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__14608.start + (n * this__14608.step));
} else
{if((function (){var and__3822__auto____14609 = (this__14608.start > this__14608.end);
if(and__3822__auto____14609)
{return (this__14608.step === 0);
} else
{return and__3822__auto____14609;
}
})())
{return this__14608.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__14610 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__14610.start + (n * this__14610.step));
} else
{if((function (){var and__3822__auto____14611 = (this__14610.start > this__14610.end);
if(and__3822__auto____14611)
{return (this__14610.step === 0);
} else
{return and__3822__auto____14611;
}
})())
{return this__14610.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__14612 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14612.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____14615 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____14615)
{var s__14616 = temp__3974__auto____14615;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__14616),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14616)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____14623 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____14623)
{var s__14624 = temp__3974__auto____14623;
var fst__14625 = cljs.core.first.call(null,s__14624);
var fv__14626 = f.call(null,fst__14625);
var run__14627 = cljs.core.cons.call(null,fst__14625,cljs.core.take_while.call(null,(function (p1__14617_SHARP_){
return cljs.core._EQ_.call(null,fv__14626,f.call(null,p1__14617_SHARP_));
}),cljs.core.next.call(null,s__14624)));
return cljs.core.cons.call(null,run__14627,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14627),s__14624))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____14642 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____14642)
{var s__14643 = temp__3971__auto____14642;
return reductions.call(null,f,cljs.core.first.call(null,s__14643),cljs.core.rest.call(null,s__14643));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____14644 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____14644)
{var s__14645 = temp__3974__auto____14644;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14645)),cljs.core.rest.call(null,s__14645));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
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
var juxt__1 = (function (f){
return (function() {
var G__14648 = null;
var G__14648__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14648__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14648__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14648__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14648__4 = (function() { 
var G__14649__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14649 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14649__delegate.call(this, x, y, z, args);
};
G__14649.cljs$lang$maxFixedArity = 3;
G__14649.cljs$lang$applyTo = (function (arglist__14650){
var x = cljs.core.first(arglist__14650);
var y = cljs.core.first(cljs.core.next(arglist__14650));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14650)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14650)));
return G__14649__delegate(x, y, z, args);
});
G__14649.cljs$lang$arity$variadic = G__14649__delegate;
return G__14649;
})()
;
G__14648 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14648__0.call(this);
case 1:
return G__14648__1.call(this,x);
case 2:
return G__14648__2.call(this,x,y);
case 3:
return G__14648__3.call(this,x,y,z);
default:
return G__14648__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__14648.cljs$lang$maxFixedArity = 3;
G__14648.cljs$lang$applyTo = G__14648__4.cljs$lang$applyTo;
return G__14648;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__14651 = null;
var G__14651__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14651__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14651__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14651__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14651__4 = (function() { 
var G__14652__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14652 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14652__delegate.call(this, x, y, z, args);
};
G__14652.cljs$lang$maxFixedArity = 3;
G__14652.cljs$lang$applyTo = (function (arglist__14653){
var x = cljs.core.first(arglist__14653);
var y = cljs.core.first(cljs.core.next(arglist__14653));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14653)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14653)));
return G__14652__delegate(x, y, z, args);
});
G__14652.cljs$lang$arity$variadic = G__14652__delegate;
return G__14652;
})()
;
G__14651 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14651__0.call(this);
case 1:
return G__14651__1.call(this,x);
case 2:
return G__14651__2.call(this,x,y);
case 3:
return G__14651__3.call(this,x,y,z);
default:
return G__14651__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__14651.cljs$lang$maxFixedArity = 3;
G__14651.cljs$lang$applyTo = G__14651__4.cljs$lang$applyTo;
return G__14651;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__14654 = null;
var G__14654__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14654__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14654__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14654__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14654__4 = (function() { 
var G__14655__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14655 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14655__delegate.call(this, x, y, z, args);
};
G__14655.cljs$lang$maxFixedArity = 3;
G__14655.cljs$lang$applyTo = (function (arglist__14656){
var x = cljs.core.first(arglist__14656);
var y = cljs.core.first(cljs.core.next(arglist__14656));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14656)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14656)));
return G__14655__delegate(x, y, z, args);
});
G__14655.cljs$lang$arity$variadic = G__14655__delegate;
return G__14655;
})()
;
G__14654 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14654__0.call(this);
case 1:
return G__14654__1.call(this,x);
case 2:
return G__14654__2.call(this,x,y);
case 3:
return G__14654__3.call(this,x,y,z);
default:
return G__14654__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__14654.cljs$lang$maxFixedArity = 3;
G__14654.cljs$lang$applyTo = G__14654__4.cljs$lang$applyTo;
return G__14654;
})()
});
var juxt__4 = (function() { 
var G__14657__delegate = function (f,g,h,fs){
var fs__14647 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__14658 = null;
var G__14658__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__14628_SHARP_,p2__14629_SHARP_){
return cljs.core.conj.call(null,p1__14628_SHARP_,p2__14629_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__14647);
});
var G__14658__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14630_SHARP_,p2__14631_SHARP_){
return cljs.core.conj.call(null,p1__14630_SHARP_,p2__14631_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__14647);
});
var G__14658__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14632_SHARP_,p2__14633_SHARP_){
return cljs.core.conj.call(null,p1__14632_SHARP_,p2__14633_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__14647);
});
var G__14658__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14634_SHARP_,p2__14635_SHARP_){
return cljs.core.conj.call(null,p1__14634_SHARP_,p2__14635_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__14647);
});
var G__14658__4 = (function() { 
var G__14659__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14636_SHARP_,p2__14637_SHARP_){
return cljs.core.conj.call(null,p1__14636_SHARP_,cljs.core.apply.call(null,p2__14637_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__14647);
};
var G__14659 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14659__delegate.call(this, x, y, z, args);
};
G__14659.cljs$lang$maxFixedArity = 3;
G__14659.cljs$lang$applyTo = (function (arglist__14660){
var x = cljs.core.first(arglist__14660);
var y = cljs.core.first(cljs.core.next(arglist__14660));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14660)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14660)));
return G__14659__delegate(x, y, z, args);
});
G__14659.cljs$lang$arity$variadic = G__14659__delegate;
return G__14659;
})()
;
G__14658 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__14658__0.call(this);
case 1:
return G__14658__1.call(this,x);
case 2:
return G__14658__2.call(this,x,y);
case 3:
return G__14658__3.call(this,x,y,z);
default:
return G__14658__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__14658.cljs$lang$maxFixedArity = 3;
G__14658.cljs$lang$applyTo = G__14658__4.cljs$lang$applyTo;
return G__14658;
})()
};
var G__14657 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14657__delegate.call(this, f, g, h, fs);
};
G__14657.cljs$lang$maxFixedArity = 3;
G__14657.cljs$lang$applyTo = (function (arglist__14661){
var f = cljs.core.first(arglist__14661);
var g = cljs.core.first(cljs.core.next(arglist__14661));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14661)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14661)));
return G__14657__delegate(f, g, h, fs);
});
G__14657.cljs$lang$arity$variadic = G__14657__delegate;
return G__14657;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
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
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__14664 = cljs.core.next.call(null,coll);
coll = G__14664;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____14663 = cljs.core.seq.call(null,coll);
if(and__3822__auto____14663)
{return (n > 0);
} else
{return and__3822__auto____14663;
}
})()))
{{
var G__14665 = (n - 1);
var G__14666 = cljs.core.next.call(null,coll);
n = G__14665;
coll = G__14666;
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
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
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
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__14668 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14668),s))
{if((cljs.core.count.call(null,matches__14668) === 1))
{return cljs.core.first.call(null,matches__14668);
} else
{return cljs.core.vec.call(null,matches__14668);
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
var matches__14670 = re.exec(s);
if((matches__14670 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__14670) === 1))
{return cljs.core.first.call(null,matches__14670);
} else
{return cljs.core.vec.call(null,matches__14670);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14675 = cljs.core.re_find.call(null,re,s);
var match_idx__14676 = s.search(re);
var match_str__14677 = ((cljs.core.coll_QMARK_.call(null,match_data__14675))?cljs.core.first.call(null,match_data__14675):match_data__14675);
var post_match__14678 = cljs.core.subs.call(null,s,(match_idx__14676 + cljs.core.count.call(null,match_str__14677)));
if(cljs.core.truth_(match_data__14675))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14675,re_seq.call(null,re,post_match__14678));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__14685__14686 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___14687 = cljs.core.nth.call(null,vec__14685__14686,0,null);
var flags__14688 = cljs.core.nth.call(null,vec__14685__14686,1,null);
var pattern__14689 = cljs.core.nth.call(null,vec__14685__14686,2,null);
return (new RegExp(pattern__14689,flags__14688));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__14679_SHARP_){
return print_one.call(null,p1__14679_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____14699 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____14699))
{var and__3822__auto____14703 = (function (){var G__14700__14701 = obj;
if(G__14700__14701)
{if((function (){var or__3824__auto____14702 = (G__14700__14701.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____14702)
{return or__3824__auto____14702;
} else
{return G__14700__14701.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__14700__14701.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__14700__14701);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__14700__14701);
}
})();
if(cljs.core.truth_(and__3822__auto____14703))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____14703;
}
} else
{return and__3822__auto____14699;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____14704 = !((obj == null));
if(and__3822__auto____14704)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____14704;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__14705__14706 = obj;
if(G__14705__14706)
{if((function (){var or__3824__auto____14707 = (G__14705__14706.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____14707)
{return or__3824__auto____14707;
} else
{return G__14705__14706.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__14705__14706.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__14705__14706);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__14705__14706);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__14722 = cljs.core.first.call(null,objs);
var sb__14723 = (new goog.string.StringBuffer());
var G__14724__14725 = cljs.core.seq.call(null,objs);
if(G__14724__14725)
{var obj__14726 = cljs.core.first.call(null,G__14724__14725);
var G__14724__14727 = G__14724__14725;
while(true){
if((obj__14726 === first_obj__14722))
{} else
{sb__14723.append(" ");
}
var G__14728__14729 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14726,opts));
if(G__14728__14729)
{var string__14730 = cljs.core.first.call(null,G__14728__14729);
var G__14728__14731 = G__14728__14729;
while(true){
sb__14723.append(string__14730);
var temp__3974__auto____14732 = cljs.core.next.call(null,G__14728__14731);
if(temp__3974__auto____14732)
{var G__14728__14733 = temp__3974__auto____14732;
{
var G__14736 = cljs.core.first.call(null,G__14728__14733);
var G__14737 = G__14728__14733;
string__14730 = G__14736;
G__14728__14731 = G__14737;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____14734 = cljs.core.next.call(null,G__14724__14727);
if(temp__3974__auto____14734)
{var G__14724__14735 = temp__3974__auto____14734;
{
var G__14738 = cljs.core.first.call(null,G__14724__14735);
var G__14739 = G__14724__14735;
obj__14726 = G__14738;
G__14724__14727 = G__14739;
continue;
}
} else
{}
break;
}
} else
{}
return sb__14723;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__14741 = cljs.core.pr_sb.call(null,objs,opts);
sb__14741.append("\n");
return [cljs.core.str(sb__14741)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14755 = cljs.core.first.call(null,objs);
var G__14756__14757 = cljs.core.seq.call(null,objs);
if(G__14756__14757)
{var obj__14758 = cljs.core.first.call(null,G__14756__14757);
var G__14756__14759 = G__14756__14757;
while(true){
if((obj__14758 === first_obj__14755))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14760__14761 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14758,opts));
if(G__14760__14761)
{var string__14762 = cljs.core.first.call(null,G__14760__14761);
var G__14760__14763 = G__14760__14761;
while(true){
cljs.core.string_print.call(null,string__14762);
var temp__3974__auto____14764 = cljs.core.next.call(null,G__14760__14763);
if(temp__3974__auto____14764)
{var G__14760__14765 = temp__3974__auto____14764;
{
var G__14768 = cljs.core.first.call(null,G__14760__14765);
var G__14769 = G__14760__14765;
string__14762 = G__14768;
G__14760__14763 = G__14769;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____14766 = cljs.core.next.call(null,G__14756__14759);
if(temp__3974__auto____14766)
{var G__14756__14767 = temp__3974__auto____14766;
{
var G__14770 = cljs.core.first.call(null,G__14756__14767);
var G__14771 = G__14756__14767;
obj__14758 = G__14770;
G__14756__14759 = G__14771;
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
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
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
pr_str.cljs$lang$applyTo = (function (arglist__14772){
var objs = cljs.core.seq(arglist__14772);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
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
prn_str.cljs$lang$applyTo = (function (arglist__14773){
var objs = cljs.core.seq(arglist__14773);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
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
pr.cljs$lang$applyTo = (function (arglist__14774){
var objs = cljs.core.seq(arglist__14774);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14775){
var objs = cljs.core.seq(arglist__14775);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
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
print_str.cljs$lang$applyTo = (function (arglist__14776){
var objs = cljs.core.seq(arglist__14776);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
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
println.cljs$lang$applyTo = (function (arglist__14777){
var objs = cljs.core.seq(arglist__14777);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
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
println_str.cljs$lang$applyTo = (function (arglist__14778){
var objs = cljs.core.seq(arglist__14778);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
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
prn.cljs$lang$applyTo = (function (arglist__14779){
var objs = cljs.core.seq(arglist__14779);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__14780 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__14780,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__14781 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__14781,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__14782 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__14782,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____14783 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____14783))
{var nspc__14784 = temp__3974__auto____14783;
return [cljs.core.str(nspc__14784),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____14785 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____14785))
{var nspc__14786 = temp__3974__auto____14785;
return [cljs.core.str(nspc__14786),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__14787 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__14787,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__14789 = (function (n,len){
var ns__14788 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__14788) < len))
{{
var G__14791 = [cljs.core.str("0"),cljs.core.str(ns__14788)].join('');
ns__14788 = G__14791;
continue;
}
} else
{return ns__14788;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__14789.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__14789.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__14789.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__14789.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__14789.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__14789.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__14790 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__14790,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__14792 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__14793 = this;
var G__14794__14795 = cljs.core.seq.call(null,this__14793.watches);
if(G__14794__14795)
{var G__14797__14799 = cljs.core.first.call(null,G__14794__14795);
var vec__14798__14800 = G__14797__14799;
var key__14801 = cljs.core.nth.call(null,vec__14798__14800,0,null);
var f__14802 = cljs.core.nth.call(null,vec__14798__14800,1,null);
var G__14794__14803 = G__14794__14795;
var G__14797__14804 = G__14797__14799;
var G__14794__14805 = G__14794__14803;
while(true){
var vec__14806__14807 = G__14797__14804;
var key__14808 = cljs.core.nth.call(null,vec__14806__14807,0,null);
var f__14809 = cljs.core.nth.call(null,vec__14806__14807,1,null);
var G__14794__14810 = G__14794__14805;
f__14809.call(null,key__14808,this$,oldval,newval);
var temp__3974__auto____14811 = cljs.core.next.call(null,G__14794__14810);
if(temp__3974__auto____14811)
{var G__14794__14812 = temp__3974__auto____14811;
{
var G__14819 = cljs.core.first.call(null,G__14794__14812);
var G__14820 = G__14794__14812;
G__14797__14804 = G__14819;
G__14794__14805 = G__14820;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__14813 = this;
return this$.watches = cljs.core.assoc.call(null,this__14813.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__14814 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14814.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__14815 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__14815.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__14816 = this;
return this__14816.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__14817 = this;
return this__14817.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__14818 = this;
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
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__14832__delegate = function (x,p__14821){
var map__14827__14828 = p__14821;
var map__14827__14829 = ((cljs.core.seq_QMARK_.call(null,map__14827__14828))?cljs.core.apply.call(null,cljs.core.hash_map,map__14827__14828):map__14827__14828);
var validator__14830 = cljs.core._lookup.call(null,map__14827__14829,"\uFDD0'validator",null);
var meta__14831 = cljs.core._lookup.call(null,map__14827__14829,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__14831,validator__14830,null));
};
var G__14832 = function (x,var_args){
var p__14821 = null;
if (goog.isDef(var_args)) {
  p__14821 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14832__delegate.call(this, x, p__14821);
};
G__14832.cljs$lang$maxFixedArity = 1;
G__14832.cljs$lang$applyTo = (function (arglist__14833){
var x = cljs.core.first(arglist__14833);
var p__14821 = cljs.core.rest(arglist__14833);
return G__14832__delegate(x, p__14821);
});
G__14832.cljs$lang$arity$variadic = G__14832__delegate;
return G__14832;
})()
;
atom = function(x,var_args){
var p__14821 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____14837 = a.validator;
if(cljs.core.truth_(temp__3974__auto____14837))
{var validate__14838 = temp__3974__auto____14837;
if(cljs.core.truth_(validate__14838.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6394))))].join('')));
}
} else
{}
var old_value__14839 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14839,new_value);
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
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__14840__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14840 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14840__delegate.call(this, a, f, x, y, z, more);
};
G__14840.cljs$lang$maxFixedArity = 5;
G__14840.cljs$lang$applyTo = (function (arglist__14841){
var a = cljs.core.first(arglist__14841);
var f = cljs.core.first(cljs.core.next(arglist__14841));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14841)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14841))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14841)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14841)))));
return G__14840__delegate(a, f, x, y, z, more);
});
G__14840.cljs$lang$arity$variadic = G__14840__delegate;
return G__14840;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14842){
var iref = cljs.core.first(arglist__14842);
var f = cljs.core.first(cljs.core.next(arglist__14842));
var args = cljs.core.rest(cljs.core.next(arglist__14842));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
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
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
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
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__14843 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__14843.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__14844 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__14844.state,(function (p__14845){
var curr_state__14846 = p__14845;
var curr_state__14847 = ((cljs.core.seq_QMARK_.call(null,curr_state__14846))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__14846):curr_state__14846);
var done__14848 = cljs.core._lookup.call(null,curr_state__14847,"\uFDD0'done",null);
if(cljs.core.truth_(done__14848))
{return curr_state__14847;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__14844.f.call(null)});
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
if(cljs.core.delay_QMARK_.call(null,x))
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
var map__14869__14870 = options;
var map__14869__14871 = ((cljs.core.seq_QMARK_.call(null,map__14869__14870))?cljs.core.apply.call(null,cljs.core.hash_map,map__14869__14870):map__14869__14870);
var keywordize_keys__14872 = cljs.core._lookup.call(null,map__14869__14871,"\uFDD0'keywordize-keys",null);
var keyfn__14873 = (cljs.core.truth_(keywordize_keys__14872)?cljs.core.keyword:cljs.core.str);
var f__14888 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__5175__auto____14887 = (function iter__14881(s__14882){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14882__14885 = s__14882;
while(true){
if(cljs.core.seq.call(null,s__14882__14885))
{var k__14886 = cljs.core.first.call(null,s__14882__14885);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__14873.call(null,k__14886),thisfn.call(null,(x[k__14886]))], true),iter__14881.call(null,cljs.core.rest.call(null,s__14882__14885)));
} else
{return null;
}
break;
}
}),null));
});
return iter__5175__auto____14887.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__14888.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14889){
var x = cljs.core.first(arglist__14889);
var options = cljs.core.rest(arglist__14889);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
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
var mem__14894 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__14898__delegate = function (args){
var temp__3971__auto____14895 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__14894),args,null);
if(cljs.core.truth_(temp__3971__auto____14895))
{var v__14896 = temp__3971__auto____14895;
return v__14896;
} else
{var ret__14897 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__14894,cljs.core.assoc,args,ret__14897);
return ret__14897;
}
};
var G__14898 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14898__delegate.call(this, args);
};
G__14898.cljs$lang$maxFixedArity = 0;
G__14898.cljs$lang$applyTo = (function (arglist__14899){
var args = cljs.core.seq(arglist__14899);;
return G__14898__delegate(args);
});
G__14898.cljs$lang$arity$variadic = G__14898__delegate;
return G__14898;
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
var trampoline__1 = (function (f){
while(true){
var ret__14901 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__14901))
{{
var G__14902 = ret__14901;
f = G__14902;
continue;
}
} else
{return ret__14901;
}
break;
}
});
var trampoline__2 = (function() { 
var G__14903__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14903 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14903__delegate.call(this, f, args);
};
G__14903.cljs$lang$maxFixedArity = 1;
G__14903.cljs$lang$applyTo = (function (arglist__14904){
var f = cljs.core.first(arglist__14904);
var args = cljs.core.rest(arglist__14904);
return G__14903__delegate(f, args);
});
G__14903.cljs$lang$arity$variadic = G__14903__delegate;
return G__14903;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
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
var k__14906 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__14906,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__14906,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____14915 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____14915)
{return or__3824__auto____14915;
} else
{var or__3824__auto____14916 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____14916)
{return or__3824__auto____14916;
} else
{var and__3822__auto____14917 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____14917)
{var and__3822__auto____14918 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____14918)
{var and__3822__auto____14919 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____14919)
{var ret__14920 = true;
var i__14921 = 0;
while(true){
if((function (){var or__3824__auto____14922 = cljs.core.not.call(null,ret__14920);
if(or__3824__auto____14922)
{return or__3824__auto____14922;
} else
{return (i__14921 === cljs.core.count.call(null,parent));
}
})())
{return ret__14920;
} else
{{
var G__14923 = isa_QMARK_.call(null,h,child.call(null,i__14921),parent.call(null,i__14921));
var G__14924 = (i__14921 + 1);
ret__14920 = G__14923;
i__14921 = G__14924;
continue;
}
}
break;
}
} else
{return and__3822__auto____14919;
}
} else
{return and__3822__auto____14918;
}
} else
{return and__3822__auto____14917;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
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
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6678))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6682))))].join('')));
}
var tp__14933 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__14934 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__14935 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__14936 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____14937 = ((cljs.core.contains_QMARK_.call(null,tp__14933.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__14935.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__14935.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__14933,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__14936.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__14934,parent,ta__14935),"\uFDD0'descendants":tf__14936.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__14935,tag,td__14934)});
})());
if(cljs.core.truth_(or__3824__auto____14937))
{return or__3824__auto____14937;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
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
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__14942 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__14943 = (cljs.core.truth_(parentMap__14942.call(null,tag))?cljs.core.disj.call(null,parentMap__14942.call(null,tag),parent):cljs.core.set([]));
var newParents__14944 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__14943))?cljs.core.assoc.call(null,parentMap__14942,tag,childsParents__14943):cljs.core.dissoc.call(null,parentMap__14942,tag));
var deriv_seq__14945 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14925_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14925_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14925_SHARP_),cljs.core.second.call(null,p1__14925_SHARP_)));
}),cljs.core.seq.call(null,newParents__14944)));
if(cljs.core.contains_QMARK_.call(null,parentMap__14942.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__14926_SHARP_,p2__14927_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14926_SHARP_,p2__14927_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__14945));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
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
var xprefs__14953 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____14955 = (cljs.core.truth_((function (){var and__3822__auto____14954 = xprefs__14953;
if(cljs.core.truth_(and__3822__auto____14954))
{return xprefs__14953.call(null,y);
} else
{return and__3822__auto____14954;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____14955))
{return or__3824__auto____14955;
} else
{var or__3824__auto____14957 = (function (){var ps__14956 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__14956) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__14956),prefer_table)))
{} else
{}
{
var G__14960 = cljs.core.rest.call(null,ps__14956);
ps__14956 = G__14960;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____14957))
{return or__3824__auto____14957;
} else
{var or__3824__auto____14959 = (function (){var ps__14958 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__14958) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__14958),y,prefer_table)))
{} else
{}
{
var G__14961 = cljs.core.rest.call(null,ps__14958);
ps__14958 = G__14961;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____14959))
{return or__3824__auto____14959;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____14963 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____14963))
{return or__3824__auto____14963;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__14981 = cljs.core.reduce.call(null,(function (be,p__14973){
var vec__14974__14975 = p__14973;
var k__14976 = cljs.core.nth.call(null,vec__14974__14975,0,null);
var ___14977 = cljs.core.nth.call(null,vec__14974__14975,1,null);
var e__14978 = vec__14974__14975;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__14976))
{var be2__14980 = (cljs.core.truth_((function (){var or__3824__auto____14979 = (be == null);
if(or__3824__auto____14979)
{return or__3824__auto____14979;
} else
{return cljs.core.dominates.call(null,k__14976,cljs.core.first.call(null,be),prefer_table);
}
})())?e__14978:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__14980),k__14976,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__14976),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__14980)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__14980;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__14981))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__14981));
return cljs.core.second.call(null,best_entry__14981);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
void 0;cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____14985 = mf;
if(and__3822__auto____14985)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____14985;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____14986 = (cljs.core._reset[goog.typeOf(mf)]);
if(or__3824__auto____14986)
{return or__3824__auto____14986;
} else
{var or__3824__auto____14987 = (cljs.core._reset["_"]);
if(or__3824__auto____14987)
{return or__3824__auto____14987;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____14991 = mf;
if(and__3822__auto____14991)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____14991;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____14992 = (cljs.core._add_method[goog.typeOf(mf)]);
if(or__3824__auto____14992)
{return or__3824__auto____14992;
} else
{var or__3824__auto____14993 = (cljs.core._add_method["_"]);
if(or__3824__auto____14993)
{return or__3824__auto____14993;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____14997 = mf;
if(and__3822__auto____14997)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____14997;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____14998 = (cljs.core._remove_method[goog.typeOf(mf)]);
if(or__3824__auto____14998)
{return or__3824__auto____14998;
} else
{var or__3824__auto____14999 = (cljs.core._remove_method["_"]);
if(or__3824__auto____14999)
{return or__3824__auto____14999;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____15003 = mf;
if(and__3822__auto____15003)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____15003;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____15004 = (cljs.core._prefer_method[goog.typeOf(mf)]);
if(or__3824__auto____15004)
{return or__3824__auto____15004;
} else
{var or__3824__auto____15005 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____15005)
{return or__3824__auto____15005;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____15009 = mf;
if(and__3822__auto____15009)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____15009;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____15010 = (cljs.core._get_method[goog.typeOf(mf)]);
if(or__3824__auto____15010)
{return or__3824__auto____15010;
} else
{var or__3824__auto____15011 = (cljs.core._get_method["_"]);
if(or__3824__auto____15011)
{return or__3824__auto____15011;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____15015 = mf;
if(and__3822__auto____15015)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____15015;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____15016 = (cljs.core._methods[goog.typeOf(mf)]);
if(or__3824__auto____15016)
{return or__3824__auto____15016;
} else
{var or__3824__auto____15017 = (cljs.core._methods["_"]);
if(or__3824__auto____15017)
{return or__3824__auto____15017;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____15021 = mf;
if(and__3822__auto____15021)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____15021;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____15022 = (cljs.core._prefers[goog.typeOf(mf)]);
if(or__3824__auto____15022)
{return or__3824__auto____15022;
} else
{var or__3824__auto____15023 = (cljs.core._prefers["_"]);
if(or__3824__auto____15023)
{return or__3824__auto____15023;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____15027 = mf;
if(and__3822__auto____15027)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____15027;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____15028 = (cljs.core._dispatch[goog.typeOf(mf)]);
if(or__3824__auto____15028)
{return or__3824__auto____15028;
} else
{var or__3824__auto____15029 = (cljs.core._dispatch["_"]);
if(or__3824__auto____15029)
{return or__3824__auto____15029;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15032 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15033 = cljs.core._get_method.call(null,mf,dispatch_val__15032);
if(cljs.core.truth_(target_fn__15033))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__15032)].join('')));
}
return cljs.core.apply.call(null,target_fn__15033,args);
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
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__15034 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__15035 = this;
cljs.core.swap_BANG_.call(null,this__15035.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__15035.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__15035.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__15035.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__15036 = this;
cljs.core.swap_BANG_.call(null,this__15036.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15036.method_cache,this__15036.method_table,this__15036.cached_hierarchy,this__15036.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__15037 = this;
cljs.core.swap_BANG_.call(null,this__15037.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15037.method_cache,this__15037.method_table,this__15037.cached_hierarchy,this__15037.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__15038 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15038.cached_hierarchy),cljs.core.deref.call(null,this__15038.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__15038.method_cache,this__15038.method_table,this__15038.cached_hierarchy,this__15038.hierarchy);
}
var temp__3971__auto____15039 = cljs.core.deref.call(null,this__15038.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____15039))
{var target_fn__15040 = temp__3971__auto____15039;
return target_fn__15040;
} else
{var temp__3971__auto____15041 = cljs.core.find_and_cache_best_method.call(null,this__15038.name,dispatch_val,this__15038.hierarchy,this__15038.method_table,this__15038.prefer_table,this__15038.method_cache,this__15038.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____15041))
{var target_fn__15042 = temp__3971__auto____15041;
return target_fn__15042;
} else
{return cljs.core.deref.call(null,this__15038.method_table).call(null,this__15038.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15043 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15043.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__15043.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__15043.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15043.method_cache,this__15043.method_table,this__15043.cached_hierarchy,this__15043.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__15044 = this;
return cljs.core.deref.call(null,this__15044.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__15045 = this;
return cljs.core.deref.call(null,this__15045.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__15046 = this;
return cljs.core.do_dispatch.call(null,mf,this__15046.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15048__delegate = function (_,args){
var self__15047 = this;
return cljs.core._dispatch.call(null,self__15047,args);
};
var G__15048 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15048__delegate.call(this, _, args);
};
G__15048.cljs$lang$maxFixedArity = 1;
G__15048.cljs$lang$applyTo = (function (arglist__15049){
var _ = cljs.core.first(arglist__15049);
var args = cljs.core.rest(arglist__15049);
return G__15048__delegate(_, args);
});
G__15048.cljs$lang$arity$variadic = G__15048__delegate;
return G__15048;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__15050 = this;
return cljs.core._dispatch.call(null,self__15050,args);
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

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__4955__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__15051 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_15053,_){
var this__15052 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__15052.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__15054 = this;
return (this__15054.uuid === other.uuid);
});
cljs.core.UUID.prototype.toString = (function (){
var this__15055 = this;
var this__15056 = this;
return cljs.core.pr_str.call(null,this__15056);
});
cljs.core.UUID;
