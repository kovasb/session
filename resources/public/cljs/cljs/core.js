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
var G__6956__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6956 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6956__delegate.call(this, array, i, idxs);
};
G__6956.cljs$lang$maxFixedArity = 2;
G__6956.cljs$lang$applyTo = (function (arglist__6957){
var array = cljs.core.first(arglist__6957);
var i = cljs.core.first(cljs.core.next(arglist__6957));
var idxs = cljs.core.rest(cljs.core.next(arglist__6957));
return G__6956__delegate(array, i, idxs);
});
G__6956.cljs$lang$arity$variadic = G__6956__delegate;
return G__6956;
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
if((function (){var and__3822__auto____7021 = this$;
if(and__3822__auto____7021)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____7021;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____7022 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7022)
{return or__3824__auto____7022;
} else
{var or__3824__auto____7023 = (cljs.core._invoke["_"]);
if(or__3824__auto____7023)
{return or__3824__auto____7023;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____7024 = this$;
if(and__3822__auto____7024)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____7024;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____7025 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7025)
{return or__3824__auto____7025;
} else
{var or__3824__auto____7026 = (cljs.core._invoke["_"]);
if(or__3824__auto____7026)
{return or__3824__auto____7026;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____7027 = this$;
if(and__3822__auto____7027)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____7027;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____7028 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7028)
{return or__3824__auto____7028;
} else
{var or__3824__auto____7029 = (cljs.core._invoke["_"]);
if(or__3824__auto____7029)
{return or__3824__auto____7029;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____7030 = this$;
if(and__3822__auto____7030)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____7030;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____7031 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7031)
{return or__3824__auto____7031;
} else
{var or__3824__auto____7032 = (cljs.core._invoke["_"]);
if(or__3824__auto____7032)
{return or__3824__auto____7032;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____7033 = this$;
if(and__3822__auto____7033)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____7033;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____7034 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7034)
{return or__3824__auto____7034;
} else
{var or__3824__auto____7035 = (cljs.core._invoke["_"]);
if(or__3824__auto____7035)
{return or__3824__auto____7035;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____7036 = this$;
if(and__3822__auto____7036)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____7036;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____7037 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7037)
{return or__3824__auto____7037;
} else
{var or__3824__auto____7038 = (cljs.core._invoke["_"]);
if(or__3824__auto____7038)
{return or__3824__auto____7038;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____7039 = this$;
if(and__3822__auto____7039)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____7039;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____7040 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7040)
{return or__3824__auto____7040;
} else
{var or__3824__auto____7041 = (cljs.core._invoke["_"]);
if(or__3824__auto____7041)
{return or__3824__auto____7041;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____7042 = this$;
if(and__3822__auto____7042)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____7042;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____7043 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7043)
{return or__3824__auto____7043;
} else
{var or__3824__auto____7044 = (cljs.core._invoke["_"]);
if(or__3824__auto____7044)
{return or__3824__auto____7044;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____7045 = this$;
if(and__3822__auto____7045)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____7045;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____7046 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7046)
{return or__3824__auto____7046;
} else
{var or__3824__auto____7047 = (cljs.core._invoke["_"]);
if(or__3824__auto____7047)
{return or__3824__auto____7047;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____7048 = this$;
if(and__3822__auto____7048)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____7048;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____7049 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7049)
{return or__3824__auto____7049;
} else
{var or__3824__auto____7050 = (cljs.core._invoke["_"]);
if(or__3824__auto____7050)
{return or__3824__auto____7050;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____7051 = this$;
if(and__3822__auto____7051)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____7051;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____7052 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7052)
{return or__3824__auto____7052;
} else
{var or__3824__auto____7053 = (cljs.core._invoke["_"]);
if(or__3824__auto____7053)
{return or__3824__auto____7053;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____7054 = this$;
if(and__3822__auto____7054)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____7054;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____7055 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7055)
{return or__3824__auto____7055;
} else
{var or__3824__auto____7056 = (cljs.core._invoke["_"]);
if(or__3824__auto____7056)
{return or__3824__auto____7056;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____7057 = this$;
if(and__3822__auto____7057)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____7057;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____7058 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7058)
{return or__3824__auto____7058;
} else
{var or__3824__auto____7059 = (cljs.core._invoke["_"]);
if(or__3824__auto____7059)
{return or__3824__auto____7059;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____7060 = this$;
if(and__3822__auto____7060)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____7060;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____7061 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7061)
{return or__3824__auto____7061;
} else
{var or__3824__auto____7062 = (cljs.core._invoke["_"]);
if(or__3824__auto____7062)
{return or__3824__auto____7062;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____7063 = this$;
if(and__3822__auto____7063)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____7063;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____7064 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7064)
{return or__3824__auto____7064;
} else
{var or__3824__auto____7065 = (cljs.core._invoke["_"]);
if(or__3824__auto____7065)
{return or__3824__auto____7065;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____7066 = this$;
if(and__3822__auto____7066)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____7066;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____7067 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7067)
{return or__3824__auto____7067;
} else
{var or__3824__auto____7068 = (cljs.core._invoke["_"]);
if(or__3824__auto____7068)
{return or__3824__auto____7068;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____7069 = this$;
if(and__3822__auto____7069)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____7069;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____7070 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7070)
{return or__3824__auto____7070;
} else
{var or__3824__auto____7071 = (cljs.core._invoke["_"]);
if(or__3824__auto____7071)
{return or__3824__auto____7071;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____7072 = this$;
if(and__3822__auto____7072)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____7072;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____7073 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7073)
{return or__3824__auto____7073;
} else
{var or__3824__auto____7074 = (cljs.core._invoke["_"]);
if(or__3824__auto____7074)
{return or__3824__auto____7074;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____7075 = this$;
if(and__3822__auto____7075)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____7075;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____7076 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7076)
{return or__3824__auto____7076;
} else
{var or__3824__auto____7077 = (cljs.core._invoke["_"]);
if(or__3824__auto____7077)
{return or__3824__auto____7077;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____7078 = this$;
if(and__3822__auto____7078)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____7078;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____7079 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7079)
{return or__3824__auto____7079;
} else
{var or__3824__auto____7080 = (cljs.core._invoke["_"]);
if(or__3824__auto____7080)
{return or__3824__auto____7080;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____7081 = this$;
if(and__3822__auto____7081)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____7081;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____7082 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____7082)
{return or__3824__auto____7082;
} else
{var or__3824__auto____7083 = (cljs.core._invoke["_"]);
if(or__3824__auto____7083)
{return or__3824__auto____7083;
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
if((function (){var and__3822__auto____7087 = coll;
if(and__3822__auto____7087)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____7087;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____7088 = (cljs.core._count[goog.typeOf(coll)]);
if(or__3824__auto____7088)
{return or__3824__auto____7088;
} else
{var or__3824__auto____7089 = (cljs.core._count["_"]);
if(or__3824__auto____7089)
{return or__3824__auto____7089;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____7093 = coll;
if(and__3822__auto____7093)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____7093;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____7094 = (cljs.core._empty[goog.typeOf(coll)]);
if(or__3824__auto____7094)
{return or__3824__auto____7094;
} else
{var or__3824__auto____7095 = (cljs.core._empty["_"]);
if(or__3824__auto____7095)
{return or__3824__auto____7095;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____7099 = coll;
if(and__3822__auto____7099)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____7099;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____7100 = (cljs.core._conj[goog.typeOf(coll)]);
if(or__3824__auto____7100)
{return or__3824__auto____7100;
} else
{var or__3824__auto____7101 = (cljs.core._conj["_"]);
if(or__3824__auto____7101)
{return or__3824__auto____7101;
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
if((function (){var and__3822__auto____7108 = coll;
if(and__3822__auto____7108)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____7108;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____7109 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____7109)
{return or__3824__auto____7109;
} else
{var or__3824__auto____7110 = (cljs.core._nth["_"]);
if(or__3824__auto____7110)
{return or__3824__auto____7110;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____7111 = coll;
if(and__3822__auto____7111)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____7111;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____7112 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____7112)
{return or__3824__auto____7112;
} else
{var or__3824__auto____7113 = (cljs.core._nth["_"]);
if(or__3824__auto____7113)
{return or__3824__auto____7113;
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
if((function (){var and__3822__auto____7117 = coll;
if(and__3822__auto____7117)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____7117;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____7118 = (cljs.core._first[goog.typeOf(coll)]);
if(or__3824__auto____7118)
{return or__3824__auto____7118;
} else
{var or__3824__auto____7119 = (cljs.core._first["_"]);
if(or__3824__auto____7119)
{return or__3824__auto____7119;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____7123 = coll;
if(and__3822__auto____7123)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____7123;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____7124 = (cljs.core._rest[goog.typeOf(coll)]);
if(or__3824__auto____7124)
{return or__3824__auto____7124;
} else
{var or__3824__auto____7125 = (cljs.core._rest["_"]);
if(or__3824__auto____7125)
{return or__3824__auto____7125;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____7129 = coll;
if(and__3822__auto____7129)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____7129;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____7130 = (cljs.core._next[goog.typeOf(coll)]);
if(or__3824__auto____7130)
{return or__3824__auto____7130;
} else
{var or__3824__auto____7131 = (cljs.core._next["_"]);
if(or__3824__auto____7131)
{return or__3824__auto____7131;
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
if((function (){var and__3822__auto____7138 = o;
if(and__3822__auto____7138)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____7138;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____7139 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____7139)
{return or__3824__auto____7139;
} else
{var or__3824__auto____7140 = (cljs.core._lookup["_"]);
if(or__3824__auto____7140)
{return or__3824__auto____7140;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____7141 = o;
if(and__3822__auto____7141)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____7141;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____7142 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____7142)
{return or__3824__auto____7142;
} else
{var or__3824__auto____7143 = (cljs.core._lookup["_"]);
if(or__3824__auto____7143)
{return or__3824__auto____7143;
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
if((function (){var and__3822__auto____7147 = coll;
if(and__3822__auto____7147)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____7147;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____7148 = (cljs.core._contains_key_QMARK_[goog.typeOf(coll)]);
if(or__3824__auto____7148)
{return or__3824__auto____7148;
} else
{var or__3824__auto____7149 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____7149)
{return or__3824__auto____7149;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____7153 = coll;
if(and__3822__auto____7153)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____7153;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____7154 = (cljs.core._assoc[goog.typeOf(coll)]);
if(or__3824__auto____7154)
{return or__3824__auto____7154;
} else
{var or__3824__auto____7155 = (cljs.core._assoc["_"]);
if(or__3824__auto____7155)
{return or__3824__auto____7155;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____7159 = coll;
if(and__3822__auto____7159)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____7159;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____7160 = (cljs.core._dissoc[goog.typeOf(coll)]);
if(or__3824__auto____7160)
{return or__3824__auto____7160;
} else
{var or__3824__auto____7161 = (cljs.core._dissoc["_"]);
if(or__3824__auto____7161)
{return or__3824__auto____7161;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____7165 = coll;
if(and__3822__auto____7165)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____7165;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____7166 = (cljs.core._key[goog.typeOf(coll)]);
if(or__3824__auto____7166)
{return or__3824__auto____7166;
} else
{var or__3824__auto____7167 = (cljs.core._key["_"]);
if(or__3824__auto____7167)
{return or__3824__auto____7167;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____7171 = coll;
if(and__3822__auto____7171)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____7171;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____7172 = (cljs.core._val[goog.typeOf(coll)]);
if(or__3824__auto____7172)
{return or__3824__auto____7172;
} else
{var or__3824__auto____7173 = (cljs.core._val["_"]);
if(or__3824__auto____7173)
{return or__3824__auto____7173;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____7177 = coll;
if(and__3822__auto____7177)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____7177;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____7178 = (cljs.core._disjoin[goog.typeOf(coll)]);
if(or__3824__auto____7178)
{return or__3824__auto____7178;
} else
{var or__3824__auto____7179 = (cljs.core._disjoin["_"]);
if(or__3824__auto____7179)
{return or__3824__auto____7179;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____7183 = coll;
if(and__3822__auto____7183)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____7183;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____7184 = (cljs.core._peek[goog.typeOf(coll)]);
if(or__3824__auto____7184)
{return or__3824__auto____7184;
} else
{var or__3824__auto____7185 = (cljs.core._peek["_"]);
if(or__3824__auto____7185)
{return or__3824__auto____7185;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____7189 = coll;
if(and__3822__auto____7189)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____7189;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____7190 = (cljs.core._pop[goog.typeOf(coll)]);
if(or__3824__auto____7190)
{return or__3824__auto____7190;
} else
{var or__3824__auto____7191 = (cljs.core._pop["_"]);
if(or__3824__auto____7191)
{return or__3824__auto____7191;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____7195 = coll;
if(and__3822__auto____7195)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____7195;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____7196 = (cljs.core._assoc_n[goog.typeOf(coll)]);
if(or__3824__auto____7196)
{return or__3824__auto____7196;
} else
{var or__3824__auto____7197 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____7197)
{return or__3824__auto____7197;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____7201 = o;
if(and__3822__auto____7201)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____7201;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____7202 = (cljs.core._deref[goog.typeOf(o)]);
if(or__3824__auto____7202)
{return or__3824__auto____7202;
} else
{var or__3824__auto____7203 = (cljs.core._deref["_"]);
if(or__3824__auto____7203)
{return or__3824__auto____7203;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____7207 = o;
if(and__3822__auto____7207)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____7207;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____7208 = (cljs.core._deref_with_timeout[goog.typeOf(o)]);
if(or__3824__auto____7208)
{return or__3824__auto____7208;
} else
{var or__3824__auto____7209 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____7209)
{return or__3824__auto____7209;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____7213 = o;
if(and__3822__auto____7213)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____7213;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____7214 = (cljs.core._meta[goog.typeOf(o)]);
if(or__3824__auto____7214)
{return or__3824__auto____7214;
} else
{var or__3824__auto____7215 = (cljs.core._meta["_"]);
if(or__3824__auto____7215)
{return or__3824__auto____7215;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____7219 = o;
if(and__3822__auto____7219)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____7219;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____7220 = (cljs.core._with_meta[goog.typeOf(o)]);
if(or__3824__auto____7220)
{return or__3824__auto____7220;
} else
{var or__3824__auto____7221 = (cljs.core._with_meta["_"]);
if(or__3824__auto____7221)
{return or__3824__auto____7221;
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
if((function (){var and__3822__auto____7228 = coll;
if(and__3822__auto____7228)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____7228;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____7229 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____7229)
{return or__3824__auto____7229;
} else
{var or__3824__auto____7230 = (cljs.core._reduce["_"]);
if(or__3824__auto____7230)
{return or__3824__auto____7230;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____7231 = coll;
if(and__3822__auto____7231)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____7231;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____7232 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____7232)
{return or__3824__auto____7232;
} else
{var or__3824__auto____7233 = (cljs.core._reduce["_"]);
if(or__3824__auto____7233)
{return or__3824__auto____7233;
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
if((function (){var and__3822__auto____7237 = coll;
if(and__3822__auto____7237)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____7237;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____7238 = (cljs.core._kv_reduce[goog.typeOf(coll)]);
if(or__3824__auto____7238)
{return or__3824__auto____7238;
} else
{var or__3824__auto____7239 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____7239)
{return or__3824__auto____7239;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____7243 = o;
if(and__3822__auto____7243)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____7243;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____7244 = (cljs.core._equiv[goog.typeOf(o)]);
if(or__3824__auto____7244)
{return or__3824__auto____7244;
} else
{var or__3824__auto____7245 = (cljs.core._equiv["_"]);
if(or__3824__auto____7245)
{return or__3824__auto____7245;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____7249 = o;
if(and__3822__auto____7249)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____7249;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____7250 = (cljs.core._hash[goog.typeOf(o)]);
if(or__3824__auto____7250)
{return or__3824__auto____7250;
} else
{var or__3824__auto____7251 = (cljs.core._hash["_"]);
if(or__3824__auto____7251)
{return or__3824__auto____7251;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____7255 = o;
if(and__3822__auto____7255)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____7255;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____7256 = (cljs.core._seq[goog.typeOf(o)]);
if(or__3824__auto____7256)
{return or__3824__auto____7256;
} else
{var or__3824__auto____7257 = (cljs.core._seq["_"]);
if(or__3824__auto____7257)
{return or__3824__auto____7257;
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
if((function (){var and__3822__auto____7261 = coll;
if(and__3822__auto____7261)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____7261;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____7262 = (cljs.core._rseq[goog.typeOf(coll)]);
if(or__3824__auto____7262)
{return or__3824__auto____7262;
} else
{var or__3824__auto____7263 = (cljs.core._rseq["_"]);
if(or__3824__auto____7263)
{return or__3824__auto____7263;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____7267 = coll;
if(and__3822__auto____7267)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____7267;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____7268 = (cljs.core._sorted_seq[goog.typeOf(coll)]);
if(or__3824__auto____7268)
{return or__3824__auto____7268;
} else
{var or__3824__auto____7269 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____7269)
{return or__3824__auto____7269;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____7273 = coll;
if(and__3822__auto____7273)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____7273;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____7274 = (cljs.core._sorted_seq_from[goog.typeOf(coll)]);
if(or__3824__auto____7274)
{return or__3824__auto____7274;
} else
{var or__3824__auto____7275 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____7275)
{return or__3824__auto____7275;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____7279 = coll;
if(and__3822__auto____7279)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____7279;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____7280 = (cljs.core._entry_key[goog.typeOf(coll)]);
if(or__3824__auto____7280)
{return or__3824__auto____7280;
} else
{var or__3824__auto____7281 = (cljs.core._entry_key["_"]);
if(or__3824__auto____7281)
{return or__3824__auto____7281;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____7285 = coll;
if(and__3822__auto____7285)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____7285;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____7286 = (cljs.core._comparator[goog.typeOf(coll)]);
if(or__3824__auto____7286)
{return or__3824__auto____7286;
} else
{var or__3824__auto____7287 = (cljs.core._comparator["_"]);
if(or__3824__auto____7287)
{return or__3824__auto____7287;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____7291 = o;
if(and__3822__auto____7291)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____7291;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____7292 = (cljs.core._pr_seq[goog.typeOf(o)]);
if(or__3824__auto____7292)
{return or__3824__auto____7292;
} else
{var or__3824__auto____7293 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____7293)
{return or__3824__auto____7293;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____7297 = d;
if(and__3822__auto____7297)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____7297;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____7298 = (cljs.core._realized_QMARK_[goog.typeOf(d)]);
if(or__3824__auto____7298)
{return or__3824__auto____7298;
} else
{var or__3824__auto____7299 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____7299)
{return or__3824__auto____7299;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____7303 = this$;
if(and__3822__auto____7303)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____7303;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____7304 = (cljs.core._notify_watches[goog.typeOf(this$)]);
if(or__3824__auto____7304)
{return or__3824__auto____7304;
} else
{var or__3824__auto____7305 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____7305)
{return or__3824__auto____7305;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____7309 = this$;
if(and__3822__auto____7309)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____7309;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____7310 = (cljs.core._add_watch[goog.typeOf(this$)]);
if(or__3824__auto____7310)
{return or__3824__auto____7310;
} else
{var or__3824__auto____7311 = (cljs.core._add_watch["_"]);
if(or__3824__auto____7311)
{return or__3824__auto____7311;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____7315 = this$;
if(and__3822__auto____7315)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____7315;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____7316 = (cljs.core._remove_watch[goog.typeOf(this$)]);
if(or__3824__auto____7316)
{return or__3824__auto____7316;
} else
{var or__3824__auto____7317 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____7317)
{return or__3824__auto____7317;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____7321 = coll;
if(and__3822__auto____7321)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____7321;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____7322 = (cljs.core._as_transient[goog.typeOf(coll)]);
if(or__3824__auto____7322)
{return or__3824__auto____7322;
} else
{var or__3824__auto____7323 = (cljs.core._as_transient["_"]);
if(or__3824__auto____7323)
{return or__3824__auto____7323;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____7327 = tcoll;
if(and__3822__auto____7327)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____7327;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____7328 = (cljs.core._conj_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7328)
{return or__3824__auto____7328;
} else
{var or__3824__auto____7329 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____7329)
{return or__3824__auto____7329;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____7333 = tcoll;
if(and__3822__auto____7333)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____7333;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____7334 = (cljs.core._persistent_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7334)
{return or__3824__auto____7334;
} else
{var or__3824__auto____7335 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____7335)
{return or__3824__auto____7335;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____7339 = tcoll;
if(and__3822__auto____7339)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____7339;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____7340 = (cljs.core._assoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7340)
{return or__3824__auto____7340;
} else
{var or__3824__auto____7341 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____7341)
{return or__3824__auto____7341;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____7345 = tcoll;
if(and__3822__auto____7345)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____7345;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____7346 = (cljs.core._dissoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7346)
{return or__3824__auto____7346;
} else
{var or__3824__auto____7347 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____7347)
{return or__3824__auto____7347;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____7351 = tcoll;
if(and__3822__auto____7351)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____7351;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____7352 = (cljs.core._assoc_n_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7352)
{return or__3824__auto____7352;
} else
{var or__3824__auto____7353 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____7353)
{return or__3824__auto____7353;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____7357 = tcoll;
if(and__3822__auto____7357)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____7357;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____7358 = (cljs.core._pop_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7358)
{return or__3824__auto____7358;
} else
{var or__3824__auto____7359 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____7359)
{return or__3824__auto____7359;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____7363 = tcoll;
if(and__3822__auto____7363)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____7363;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____7364 = (cljs.core._disjoin_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____7364)
{return or__3824__auto____7364;
} else
{var or__3824__auto____7365 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____7365)
{return or__3824__auto____7365;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;void 0;cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____7369 = x;
if(and__3822__auto____7369)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____7369;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{return (function (){var or__3824__auto____7370 = (cljs.core._compare[goog.typeOf(x)]);
if(or__3824__auto____7370)
{return or__3824__auto____7370;
} else
{var or__3824__auto____7371 = (cljs.core._compare["_"]);
if(or__3824__auto____7371)
{return or__3824__auto____7371;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
void 0;void 0;cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____7375 = coll;
if(and__3822__auto____7375)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____7375;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____7376 = (cljs.core._drop_first[goog.typeOf(coll)]);
if(or__3824__auto____7376)
{return or__3824__auto____7376;
} else
{var or__3824__auto____7377 = (cljs.core._drop_first["_"]);
if(or__3824__auto____7377)
{return or__3824__auto____7377;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____7381 = coll;
if(and__3822__auto____7381)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____7381;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____7382 = (cljs.core._chunked_first[goog.typeOf(coll)]);
if(or__3824__auto____7382)
{return or__3824__auto____7382;
} else
{var or__3824__auto____7383 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____7383)
{return or__3824__auto____7383;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____7387 = coll;
if(and__3822__auto____7387)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____7387;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____7388 = (cljs.core._chunked_rest[goog.typeOf(coll)]);
if(or__3824__auto____7388)
{return or__3824__auto____7388;
} else
{var or__3824__auto____7389 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____7389)
{return or__3824__auto____7389;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____7393 = coll;
if(and__3822__auto____7393)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____7393;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____7394 = (cljs.core._chunked_next[goog.typeOf(coll)]);
if(or__3824__auto____7394)
{return or__3824__auto____7394;
} else
{var or__3824__auto____7395 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____7395)
{return or__3824__auto____7395;
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
var or__3824__auto____7397 = (x === y);
if(or__3824__auto____7397)
{return or__3824__auto____7397;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7398__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7399 = y;
var G__7400 = cljs.core.first.call(null,more);
var G__7401 = cljs.core.next.call(null,more);
x = G__7399;
y = G__7400;
more = G__7401;
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
var G__7398 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7398__delegate.call(this, x, y, more);
};
G__7398.cljs$lang$maxFixedArity = 2;
G__7398.cljs$lang$applyTo = (function (arglist__7402){
var x = cljs.core.first(arglist__7402);
var y = cljs.core.first(cljs.core.next(arglist__7402));
var more = cljs.core.rest(cljs.core.next(arglist__7402));
return G__7398__delegate(x, y, more);
});
G__7398.cljs$lang$arity$variadic = G__7398__delegate;
return G__7398;
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
var G__7403 = null;
var G__7403__2 = (function (o,k){
return null;
});
var G__7403__3 = (function (o,k,not_found){
return not_found;
});
G__7403 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7403__2.call(this,o,k);
case 3:
return G__7403__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7403;
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
var G__7404 = null;
var G__7404__2 = (function (_,f){
return f.call(null);
});
var G__7404__3 = (function (_,f,start){
return start;
});
G__7404 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7404__2.call(this,_,f);
case 3:
return G__7404__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7404;
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
var G__7405 = null;
var G__7405__2 = (function (_,n){
return null;
});
var G__7405__3 = (function (_,n,not_found){
return not_found;
});
G__7405 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7405__2.call(this,_,n);
case 3:
return G__7405__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7405;
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
var cnt__7418 = cljs.core._count.call(null,cicoll);
if((cnt__7418 === 0))
{return f.call(null);
} else
{var val__7419 = cljs.core._nth.call(null,cicoll,0);
var n__7420 = 1;
while(true){
if((n__7420 < cnt__7418))
{var nval__7421 = f.call(null,val__7419,cljs.core._nth.call(null,cicoll,n__7420));
if(cljs.core.reduced_QMARK_.call(null,nval__7421))
{return cljs.core.deref.call(null,nval__7421);
} else
{{
var G__7430 = nval__7421;
var G__7431 = (n__7420 + 1);
val__7419 = G__7430;
n__7420 = G__7431;
continue;
}
}
} else
{return val__7419;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7422 = cljs.core._count.call(null,cicoll);
var val__7423 = val;
var n__7424 = 0;
while(true){
if((n__7424 < cnt__7422))
{var nval__7425 = f.call(null,val__7423,cljs.core._nth.call(null,cicoll,n__7424));
if(cljs.core.reduced_QMARK_.call(null,nval__7425))
{return cljs.core.deref.call(null,nval__7425);
} else
{{
var G__7432 = nval__7425;
var G__7433 = (n__7424 + 1);
val__7423 = G__7432;
n__7424 = G__7433;
continue;
}
}
} else
{return val__7423;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7426 = cljs.core._count.call(null,cicoll);
var val__7427 = val;
var n__7428 = idx;
while(true){
if((n__7428 < cnt__7426))
{var nval__7429 = f.call(null,val__7427,cljs.core._nth.call(null,cicoll,n__7428));
if(cljs.core.reduced_QMARK_.call(null,nval__7429))
{return cljs.core.deref.call(null,nval__7429);
} else
{{
var G__7434 = nval__7429;
var G__7435 = (n__7428 + 1);
val__7427 = G__7434;
n__7428 = G__7435;
continue;
}
}
} else
{return val__7427;
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
var cnt__7448 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7449 = (arr[0]);
var n__7450 = 1;
while(true){
if((n__7450 < cnt__7448))
{var nval__7451 = f.call(null,val__7449,(arr[n__7450]));
if(cljs.core.reduced_QMARK_.call(null,nval__7451))
{return cljs.core.deref.call(null,nval__7451);
} else
{{
var G__7460 = nval__7451;
var G__7461 = (n__7450 + 1);
val__7449 = G__7460;
n__7450 = G__7461;
continue;
}
}
} else
{return val__7449;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7452 = arr.length;
var val__7453 = val;
var n__7454 = 0;
while(true){
if((n__7454 < cnt__7452))
{var nval__7455 = f.call(null,val__7453,(arr[n__7454]));
if(cljs.core.reduced_QMARK_.call(null,nval__7455))
{return cljs.core.deref.call(null,nval__7455);
} else
{{
var G__7462 = nval__7455;
var G__7463 = (n__7454 + 1);
val__7453 = G__7462;
n__7454 = G__7463;
continue;
}
}
} else
{return val__7453;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7456 = arr.length;
var val__7457 = val;
var n__7458 = idx;
while(true){
if((n__7458 < cnt__7456))
{var nval__7459 = f.call(null,val__7457,(arr[n__7458]));
if(cljs.core.reduced_QMARK_.call(null,nval__7459))
{return cljs.core.deref.call(null,nval__7459);
} else
{{
var G__7464 = nval__7459;
var G__7465 = (n__7458 + 1);
val__7457 = G__7464;
n__7458 = G__7465;
continue;
}
}
} else
{return val__7457;
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7466 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7467 = this;
if(((this__7467.i + 1) < this__7467.a.length))
{return (new cljs.core.IndexedSeq(this__7467.a,(this__7467.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7468 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7469 = this;
var c__7470 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7470 > 0))
{return (new cljs.core.RSeq(coll,(c__7470 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7471 = this;
var this__7472 = this;
return cljs.core.pr_str.call(null,this__7472);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7473 = this;
if(cljs.core.counted_QMARK_.call(null,this__7473.a))
{return cljs.core.ci_reduce.call(null,this__7473.a,f,(this__7473.a[this__7473.i]),(this__7473.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7473.a[this__7473.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7474 = this;
if(cljs.core.counted_QMARK_.call(null,this__7474.a))
{return cljs.core.ci_reduce.call(null,this__7474.a,f,start,this__7474.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7475 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7476 = this;
return (this__7476.a.length - this__7476.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7477 = this;
return (this__7477.a[this__7477.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7478 = this;
if(((this__7478.i + 1) < this__7478.a.length))
{return (new cljs.core.IndexedSeq(this__7478.a,(this__7478.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7479 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7480 = this;
var i__7481 = (n + this__7480.i);
if((i__7481 < this__7480.a.length))
{return (this__7480.a[i__7481]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7482 = this;
var i__7483 = (n + this__7482.i);
if((i__7483 < this__7482.a.length))
{return (this__7482.a[i__7483]);
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
var G__7484 = null;
var G__7484__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7484__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7484 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7484__2.call(this,array,f);
case 3:
return G__7484__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7484;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7485 = null;
var G__7485__2 = (function (array,k){
return (array[k]);
});
var G__7485__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7485 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7485__2.call(this,array,k);
case 3:
return G__7485__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7485;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7486 = null;
var G__7486__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7486__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7486 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7486__2.call(this,array,n);
case 3:
return G__7486__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7486;
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
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7487 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7488 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7489 = this;
var this__7490 = this;
return cljs.core.pr_str.call(null,this__7490);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7491 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7492 = this;
return (this__7492.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7493 = this;
return cljs.core._nth.call(null,this__7493.ci,this__7493.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7494 = this;
if((this__7494.i > 0))
{return (new cljs.core.RSeq(this__7494.ci,(this__7494.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7495 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7496 = this;
return (new cljs.core.RSeq(this__7496.ci,this__7496.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7497 = this;
return this__7497.meta;
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
{if((function (){var G__7501__7502 = coll;
if(G__7501__7502)
{if((function (){var or__3824__auto____7503 = (G__7501__7502.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7503)
{return or__3824__auto____7503;
} else
{return G__7501__7502.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7501__7502.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7501__7502);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7501__7502);
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
{if((function (){var G__7508__7509 = coll;
if(G__7508__7509)
{if((function (){var or__3824__auto____7510 = (G__7508__7509.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7510)
{return or__3824__auto____7510;
} else
{return G__7508__7509.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7508__7509.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7508__7509);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7508__7509);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__7511 = cljs.core.seq.call(null,coll);
if((s__7511 == null))
{return null;
} else
{return cljs.core._first.call(null,s__7511);
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
{if((function (){var G__7516__7517 = coll;
if(G__7516__7517)
{if((function (){var or__3824__auto____7518 = (G__7516__7517.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7518)
{return or__3824__auto____7518;
} else
{return G__7516__7517.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7516__7517.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7516__7517);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7516__7517);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__7519 = cljs.core.seq.call(null,coll);
if(!((s__7519 == null)))
{return cljs.core._rest.call(null,s__7519);
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
{if((function (){var G__7523__7524 = coll;
if(G__7523__7524)
{if((function (){var or__3824__auto____7525 = (G__7523__7524.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7525)
{return or__3824__auto____7525;
} else
{return G__7523__7524.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7523__7524.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7523__7524);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7523__7524);
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
var sn__7527 = cljs.core.next.call(null,s);
if(!((sn__7527 == null)))
{{
var G__7528 = sn__7527;
s = G__7528;
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
var G__7529__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7530 = conj.call(null,coll,x);
var G__7531 = cljs.core.first.call(null,xs);
var G__7532 = cljs.core.next.call(null,xs);
coll = G__7530;
x = G__7531;
xs = G__7532;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7529 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7529__delegate.call(this, coll, x, xs);
};
G__7529.cljs$lang$maxFixedArity = 2;
G__7529.cljs$lang$applyTo = (function (arglist__7533){
var coll = cljs.core.first(arglist__7533);
var x = cljs.core.first(cljs.core.next(arglist__7533));
var xs = cljs.core.rest(cljs.core.next(arglist__7533));
return G__7529__delegate(coll, x, xs);
});
G__7529.cljs$lang$arity$variadic = G__7529__delegate;
return G__7529;
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
var s__7536 = cljs.core.seq.call(null,coll);
var acc__7537 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__7536))
{return (acc__7537 + cljs.core._count.call(null,s__7536));
} else
{{
var G__7538 = cljs.core.next.call(null,s__7536);
var G__7539 = (acc__7537 + 1);
s__7536 = G__7538;
acc__7537 = G__7539;
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
{if((function (){var G__7546__7547 = coll;
if(G__7546__7547)
{if((function (){var or__3824__auto____7548 = (G__7546__7547.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7548)
{return or__3824__auto____7548;
} else
{return G__7546__7547.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7546__7547.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7546__7547);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7546__7547);
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
{if((function (){var G__7549__7550 = coll;
if(G__7549__7550)
{if((function (){var or__3824__auto____7551 = (G__7549__7550.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7551)
{return or__3824__auto____7551;
} else
{return G__7549__7550.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7549__7550.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7549__7550);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7549__7550);
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
var G__7554__delegate = function (coll,k,v,kvs){
while(true){
var ret__7553 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7555 = ret__7553;
var G__7556 = cljs.core.first.call(null,kvs);
var G__7557 = cljs.core.second.call(null,kvs);
var G__7558 = cljs.core.nnext.call(null,kvs);
coll = G__7555;
k = G__7556;
v = G__7557;
kvs = G__7558;
continue;
}
} else
{return ret__7553;
}
break;
}
};
var G__7554 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7554__delegate.call(this, coll, k, v, kvs);
};
G__7554.cljs$lang$maxFixedArity = 3;
G__7554.cljs$lang$applyTo = (function (arglist__7559){
var coll = cljs.core.first(arglist__7559);
var k = cljs.core.first(cljs.core.next(arglist__7559));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7559)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7559)));
return G__7554__delegate(coll, k, v, kvs);
});
G__7554.cljs$lang$arity$variadic = G__7554__delegate;
return G__7554;
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
var G__7562__delegate = function (coll,k,ks){
while(true){
var ret__7561 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7563 = ret__7561;
var G__7564 = cljs.core.first.call(null,ks);
var G__7565 = cljs.core.next.call(null,ks);
coll = G__7563;
k = G__7564;
ks = G__7565;
continue;
}
} else
{return ret__7561;
}
break;
}
};
var G__7562 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7562__delegate.call(this, coll, k, ks);
};
G__7562.cljs$lang$maxFixedArity = 2;
G__7562.cljs$lang$applyTo = (function (arglist__7566){
var coll = cljs.core.first(arglist__7566);
var k = cljs.core.first(cljs.core.next(arglist__7566));
var ks = cljs.core.rest(cljs.core.next(arglist__7566));
return G__7562__delegate(coll, k, ks);
});
G__7562.cljs$lang$arity$variadic = G__7562__delegate;
return G__7562;
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
if((function (){var G__7570__7571 = o;
if(G__7570__7571)
{if((function (){var or__3824__auto____7572 = (G__7570__7571.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7572)
{return or__3824__auto____7572;
} else
{return G__7570__7571.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7570__7571.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7570__7571);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7570__7571);
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
var G__7575__delegate = function (coll,k,ks){
while(true){
var ret__7574 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7576 = ret__7574;
var G__7577 = cljs.core.first.call(null,ks);
var G__7578 = cljs.core.next.call(null,ks);
coll = G__7576;
k = G__7577;
ks = G__7578;
continue;
}
} else
{return ret__7574;
}
break;
}
};
var G__7575 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7575__delegate.call(this, coll, k, ks);
};
G__7575.cljs$lang$maxFixedArity = 2;
G__7575.cljs$lang$applyTo = (function (arglist__7579){
var coll = cljs.core.first(arglist__7579);
var k = cljs.core.first(cljs.core.next(arglist__7579));
var ks = cljs.core.rest(cljs.core.next(arglist__7579));
return G__7575__delegate(coll, k, ks);
});
G__7575.cljs$lang$arity$variadic = G__7575__delegate;
return G__7575;
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
var h__7581 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7581);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7581;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7583 = (cljs.core.string_hash_cache[k]);
if(!((h__7583 == null)))
{return h__7583;
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
if((function (){var and__3822__auto____7585 = goog.isString(o);
if(and__3822__auto____7585)
{return check_cache;
} else
{return and__3822__auto____7585;
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
{var G__7589__7590 = x;
if(G__7589__7590)
{if((function (){var or__3824__auto____7591 = (G__7589__7590.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7591)
{return or__3824__auto____7591;
} else
{return G__7589__7590.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7589__7590.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7589__7590);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7589__7590);
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
{var G__7595__7596 = x;
if(G__7595__7596)
{if((function (){var or__3824__auto____7597 = (G__7595__7596.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7597)
{return or__3824__auto____7597;
} else
{return G__7595__7596.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7595__7596.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7595__7596);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7595__7596);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7601__7602 = x;
if(G__7601__7602)
{if((function (){var or__3824__auto____7603 = (G__7601__7602.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7603)
{return or__3824__auto____7603;
} else
{return G__7601__7602.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7601__7602.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7601__7602);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7601__7602);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7607__7608 = x;
if(G__7607__7608)
{if((function (){var or__3824__auto____7609 = (G__7607__7608.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7609)
{return or__3824__auto____7609;
} else
{return G__7607__7608.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7607__7608.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7607__7608);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7607__7608);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7613__7614 = x;
if(G__7613__7614)
{if((function (){var or__3824__auto____7615 = (G__7613__7614.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7615)
{return or__3824__auto____7615;
} else
{return G__7613__7614.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7613__7614.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7613__7614);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7613__7614);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7619__7620 = x;
if(G__7619__7620)
{if((function (){var or__3824__auto____7621 = (G__7619__7620.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7621)
{return or__3824__auto____7621;
} else
{return G__7619__7620.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7619__7620.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7619__7620);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7619__7620);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7625__7626 = x;
if(G__7625__7626)
{if((function (){var or__3824__auto____7627 = (G__7625__7626.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7627)
{return or__3824__auto____7627;
} else
{return G__7625__7626.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7625__7626.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7625__7626);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7625__7626);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7631__7632 = x;
if(G__7631__7632)
{if((function (){var or__3824__auto____7633 = (G__7631__7632.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7633)
{return or__3824__auto____7633;
} else
{return G__7631__7632.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7631__7632.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7631__7632);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7631__7632);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7637__7638 = x;
if(G__7637__7638)
{if((function (){var or__3824__auto____7639 = (G__7637__7638.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7639)
{return or__3824__auto____7639;
} else
{return G__7637__7638.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7637__7638.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7637__7638);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7637__7638);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7643__7644 = x;
if(G__7643__7644)
{if(cljs.core.truth_((function (){var or__3824__auto____7645 = null;
if(cljs.core.truth_(or__3824__auto____7645))
{return or__3824__auto____7645;
} else
{return G__7643__7644.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7643__7644.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7643__7644);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7643__7644);
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
var G__7646__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7646 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7646__delegate.call(this, keyvals);
};
G__7646.cljs$lang$maxFixedArity = 0;
G__7646.cljs$lang$applyTo = (function (arglist__7647){
var keyvals = cljs.core.seq(arglist__7647);;
return G__7646__delegate(keyvals);
});
G__7646.cljs$lang$arity$variadic = G__7646__delegate;
return G__7646;
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
var keys__7649 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7649.push(key);
}));
return keys__7649;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7653 = i;
var j__7654 = j;
var len__7655 = len;
while(true){
if((len__7655 === 0))
{return to;
} else
{(to[j__7654] = (from[i__7653]));
{
var G__7656 = (i__7653 + 1);
var G__7657 = (j__7654 + 1);
var G__7658 = (len__7655 - 1);
i__7653 = G__7656;
j__7654 = G__7657;
len__7655 = G__7658;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7662 = (i + (len - 1));
var j__7663 = (j + (len - 1));
var len__7664 = len;
while(true){
if((len__7664 === 0))
{return to;
} else
{(to[j__7663] = (from[i__7662]));
{
var G__7665 = (i__7662 - 1);
var G__7666 = (j__7663 - 1);
var G__7667 = (len__7664 - 1);
i__7662 = G__7665;
j__7663 = G__7666;
len__7664 = G__7667;
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
{var G__7671__7672 = s;
if(G__7671__7672)
{if((function (){var or__3824__auto____7673 = (G__7671__7672.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7673)
{return or__3824__auto____7673;
} else
{return G__7671__7672.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7671__7672.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7671__7672);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7671__7672);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7677__7678 = s;
if(G__7677__7678)
{if((function (){var or__3824__auto____7679 = (G__7677__7678.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7679)
{return or__3824__auto____7679;
} else
{return G__7677__7678.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7677__7678.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7677__7678);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7677__7678);
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
var and__3822__auto____7682 = goog.isString(x);
if(and__3822__auto____7682)
{return !((function (){var or__3824__auto____7683 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7683)
{return or__3824__auto____7683;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7682;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7685 = goog.isString(x);
if(and__3822__auto____7685)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7685;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7687 = goog.isString(x);
if(and__3822__auto____7687)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7687;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7692 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7692)
{return or__3824__auto____7692;
} else
{var G__7693__7694 = f;
if(G__7693__7694)
{if((function (){var or__3824__auto____7695 = (G__7693__7694.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7695)
{return or__3824__auto____7695;
} else
{return G__7693__7694.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7693__7694.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7693__7694);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7693__7694);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7697 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7697)
{return (n == n.toFixed());
} else
{return and__3822__auto____7697;
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
if(cljs.core.truth_((function (){var and__3822__auto____7700 = coll;
if(cljs.core.truth_(and__3822__auto____7700))
{var and__3822__auto____7701 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7701)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7701;
}
} else
{return and__3822__auto____7700;
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
var G__7710__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7706 = cljs.core.set([y,x]);
var xs__7707 = more;
while(true){
var x__7708 = cljs.core.first.call(null,xs__7707);
var etc__7709 = cljs.core.next.call(null,xs__7707);
if(cljs.core.truth_(xs__7707))
{if(cljs.core.contains_QMARK_.call(null,s__7706,x__7708))
{return false;
} else
{{
var G__7711 = cljs.core.conj.call(null,s__7706,x__7708);
var G__7712 = etc__7709;
s__7706 = G__7711;
xs__7707 = G__7712;
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
var G__7710 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7710__delegate.call(this, x, y, more);
};
G__7710.cljs$lang$maxFixedArity = 2;
G__7710.cljs$lang$applyTo = (function (arglist__7713){
var x = cljs.core.first(arglist__7713);
var y = cljs.core.first(cljs.core.next(arglist__7713));
var more = cljs.core.rest(cljs.core.next(arglist__7713));
return G__7710__delegate(x, y, more);
});
G__7710.cljs$lang$arity$variadic = G__7710__delegate;
return G__7710;
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
{if((function (){var G__7717__7718 = x;
if(G__7717__7718)
{if(cljs.core.truth_((function (){var or__3824__auto____7719 = null;
if(cljs.core.truth_(or__3824__auto____7719))
{return or__3824__auto____7719;
} else
{return G__7717__7718.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7717__7718.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7717__7718);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7717__7718);
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
var xl__7724 = cljs.core.count.call(null,xs);
var yl__7725 = cljs.core.count.call(null,ys);
if((xl__7724 < yl__7725))
{return -1;
} else
{if((xl__7724 > yl__7725))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7724,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7726 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7727 = (d__7726 === 0);
if(and__3822__auto____7727)
{return ((n + 1) < len);
} else
{return and__3822__auto____7727;
}
})())
{{
var G__7728 = xs;
var G__7729 = ys;
var G__7730 = len;
var G__7731 = (n + 1);
xs = G__7728;
ys = G__7729;
len = G__7730;
n = G__7731;
continue;
}
} else
{return d__7726;
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
var r__7733 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7733))
{return r__7733;
} else
{if(cljs.core.truth_(r__7733))
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
{var a__7735 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7735,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7735);
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
var temp__3971__auto____7741 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7741)
{var s__7742 = temp__3971__auto____7741;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7742),cljs.core.next.call(null,s__7742));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7743 = val;
var coll__7744 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7744)
{var nval__7745 = f.call(null,val__7743,cljs.core.first.call(null,coll__7744));
if(cljs.core.reduced_QMARK_.call(null,nval__7745))
{return cljs.core.deref.call(null,nval__7745);
} else
{{
var G__7746 = nval__7745;
var G__7747 = cljs.core.next.call(null,coll__7744);
val__7743 = G__7746;
coll__7744 = G__7747;
continue;
}
}
} else
{return val__7743;
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
var a__7749 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7749);
return cljs.core.vec.call(null,a__7749);
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
if((function (){var G__7756__7757 = coll;
if(G__7756__7757)
{if((function (){var or__3824__auto____7758 = (G__7756__7757.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7758)
{return or__3824__auto____7758;
} else
{return G__7756__7757.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7756__7757.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7756__7757);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7756__7757);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7759__7760 = coll;
if(G__7759__7760)
{if((function (){var or__3824__auto____7761 = (G__7759__7760.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7761)
{return or__3824__auto____7761;
} else
{return G__7759__7760.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7759__7760.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7759__7760);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7759__7760);
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__7762 = this;
return this__7762.val;
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
var G__7763__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7763 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7763__delegate.call(this, x, y, more);
};
G__7763.cljs$lang$maxFixedArity = 2;
G__7763.cljs$lang$applyTo = (function (arglist__7764){
var x = cljs.core.first(arglist__7764);
var y = cljs.core.first(cljs.core.next(arglist__7764));
var more = cljs.core.rest(cljs.core.next(arglist__7764));
return G__7763__delegate(x, y, more);
});
G__7763.cljs$lang$arity$variadic = G__7763__delegate;
return G__7763;
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
var G__7765__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7765 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7765__delegate.call(this, x, y, more);
};
G__7765.cljs$lang$maxFixedArity = 2;
G__7765.cljs$lang$applyTo = (function (arglist__7766){
var x = cljs.core.first(arglist__7766);
var y = cljs.core.first(cljs.core.next(arglist__7766));
var more = cljs.core.rest(cljs.core.next(arglist__7766));
return G__7765__delegate(x, y, more);
});
G__7765.cljs$lang$arity$variadic = G__7765__delegate;
return G__7765;
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
var G__7767__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7767 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7767__delegate.call(this, x, y, more);
};
G__7767.cljs$lang$maxFixedArity = 2;
G__7767.cljs$lang$applyTo = (function (arglist__7768){
var x = cljs.core.first(arglist__7768);
var y = cljs.core.first(cljs.core.next(arglist__7768));
var more = cljs.core.rest(cljs.core.next(arglist__7768));
return G__7767__delegate(x, y, more);
});
G__7767.cljs$lang$arity$variadic = G__7767__delegate;
return G__7767;
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
var G__7769__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7769 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7769__delegate.call(this, x, y, more);
};
G__7769.cljs$lang$maxFixedArity = 2;
G__7769.cljs$lang$applyTo = (function (arglist__7770){
var x = cljs.core.first(arglist__7770);
var y = cljs.core.first(cljs.core.next(arglist__7770));
var more = cljs.core.rest(cljs.core.next(arglist__7770));
return G__7769__delegate(x, y, more);
});
G__7769.cljs$lang$arity$variadic = G__7769__delegate;
return G__7769;
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
var G__7771__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7772 = y;
var G__7773 = cljs.core.first.call(null,more);
var G__7774 = cljs.core.next.call(null,more);
x = G__7772;
y = G__7773;
more = G__7774;
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
var G__7771 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7771__delegate.call(this, x, y, more);
};
G__7771.cljs$lang$maxFixedArity = 2;
G__7771.cljs$lang$applyTo = (function (arglist__7775){
var x = cljs.core.first(arglist__7775);
var y = cljs.core.first(cljs.core.next(arglist__7775));
var more = cljs.core.rest(cljs.core.next(arglist__7775));
return G__7771__delegate(x, y, more);
});
G__7771.cljs$lang$arity$variadic = G__7771__delegate;
return G__7771;
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
var G__7776__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7777 = y;
var G__7778 = cljs.core.first.call(null,more);
var G__7779 = cljs.core.next.call(null,more);
x = G__7777;
y = G__7778;
more = G__7779;
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
var G__7776 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7776__delegate.call(this, x, y, more);
};
G__7776.cljs$lang$maxFixedArity = 2;
G__7776.cljs$lang$applyTo = (function (arglist__7780){
var x = cljs.core.first(arglist__7780);
var y = cljs.core.first(cljs.core.next(arglist__7780));
var more = cljs.core.rest(cljs.core.next(arglist__7780));
return G__7776__delegate(x, y, more);
});
G__7776.cljs$lang$arity$variadic = G__7776__delegate;
return G__7776;
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
var G__7781__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7782 = y;
var G__7783 = cljs.core.first.call(null,more);
var G__7784 = cljs.core.next.call(null,more);
x = G__7782;
y = G__7783;
more = G__7784;
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
var G__7781 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7781__delegate.call(this, x, y, more);
};
G__7781.cljs$lang$maxFixedArity = 2;
G__7781.cljs$lang$applyTo = (function (arglist__7785){
var x = cljs.core.first(arglist__7785);
var y = cljs.core.first(cljs.core.next(arglist__7785));
var more = cljs.core.rest(cljs.core.next(arglist__7785));
return G__7781__delegate(x, y, more);
});
G__7781.cljs$lang$arity$variadic = G__7781__delegate;
return G__7781;
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
var G__7786__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7787 = y;
var G__7788 = cljs.core.first.call(null,more);
var G__7789 = cljs.core.next.call(null,more);
x = G__7787;
y = G__7788;
more = G__7789;
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
var G__7786 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7786__delegate.call(this, x, y, more);
};
G__7786.cljs$lang$maxFixedArity = 2;
G__7786.cljs$lang$applyTo = (function (arglist__7790){
var x = cljs.core.first(arglist__7790);
var y = cljs.core.first(cljs.core.next(arglist__7790));
var more = cljs.core.rest(cljs.core.next(arglist__7790));
return G__7786__delegate(x, y, more);
});
G__7786.cljs$lang$arity$variadic = G__7786__delegate;
return G__7786;
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
var G__7791__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7791 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7791__delegate.call(this, x, y, more);
};
G__7791.cljs$lang$maxFixedArity = 2;
G__7791.cljs$lang$applyTo = (function (arglist__7792){
var x = cljs.core.first(arglist__7792);
var y = cljs.core.first(cljs.core.next(arglist__7792));
var more = cljs.core.rest(cljs.core.next(arglist__7792));
return G__7791__delegate(x, y, more);
});
G__7791.cljs$lang$arity$variadic = G__7791__delegate;
return G__7791;
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
var G__7793__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7793 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7793__delegate.call(this, x, y, more);
};
G__7793.cljs$lang$maxFixedArity = 2;
G__7793.cljs$lang$applyTo = (function (arglist__7794){
var x = cljs.core.first(arglist__7794);
var y = cljs.core.first(cljs.core.next(arglist__7794));
var more = cljs.core.rest(cljs.core.next(arglist__7794));
return G__7793__delegate(x, y, more);
});
G__7793.cljs$lang$arity$variadic = G__7793__delegate;
return G__7793;
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
var rem__7796 = (n % d);
return cljs.core.fix.call(null,((n - rem__7796) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7798 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7798));
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
var v__7801 = (v - ((v >> 1) & 1431655765));
var v__7802 = ((v__7801 & 858993459) + ((v__7801 >> 2) & 858993459));
return ((((v__7802 + (v__7802 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__7803__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7804 = y;
var G__7805 = cljs.core.first.call(null,more);
var G__7806 = cljs.core.next.call(null,more);
x = G__7804;
y = G__7805;
more = G__7806;
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
var G__7803 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7803__delegate.call(this, x, y, more);
};
G__7803.cljs$lang$maxFixedArity = 2;
G__7803.cljs$lang$applyTo = (function (arglist__7807){
var x = cljs.core.first(arglist__7807);
var y = cljs.core.first(cljs.core.next(arglist__7807));
var more = cljs.core.rest(cljs.core.next(arglist__7807));
return G__7803__delegate(x, y, more);
});
G__7803.cljs$lang$arity$variadic = G__7803__delegate;
return G__7803;
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
var n__7811 = n;
var xs__7812 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7813 = xs__7812;
if(and__3822__auto____7813)
{return (n__7811 > 0);
} else
{return and__3822__auto____7813;
}
})()))
{{
var G__7814 = (n__7811 - 1);
var G__7815 = cljs.core.next.call(null,xs__7812);
n__7811 = G__7814;
xs__7812 = G__7815;
continue;
}
} else
{return xs__7812;
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
var G__7816__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7817 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7818 = cljs.core.next.call(null,more);
sb = G__7817;
more = G__7818;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7816 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7816__delegate.call(this, x, ys);
};
G__7816.cljs$lang$maxFixedArity = 1;
G__7816.cljs$lang$applyTo = (function (arglist__7819){
var x = cljs.core.first(arglist__7819);
var ys = cljs.core.rest(arglist__7819);
return G__7816__delegate(x, ys);
});
G__7816.cljs$lang$arity$variadic = G__7816__delegate;
return G__7816;
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
var G__7820__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7821 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7822 = cljs.core.next.call(null,more);
sb = G__7821;
more = G__7822;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7820 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7820__delegate.call(this, x, ys);
};
G__7820.cljs$lang$maxFixedArity = 1;
G__7820.cljs$lang$applyTo = (function (arglist__7823){
var x = cljs.core.first(arglist__7823);
var ys = cljs.core.rest(arglist__7823);
return G__7820__delegate(x, ys);
});
G__7820.cljs$lang$arity$variadic = G__7820__delegate;
return G__7820;
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7826 = cljs.core.seq.call(null,x);
var ys__7827 = cljs.core.seq.call(null,y);
while(true){
if((xs__7826 == null))
{return (ys__7827 == null);
} else
{if((ys__7827 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7826),cljs.core.first.call(null,ys__7827)))
{{
var G__7828 = cljs.core.next.call(null,xs__7826);
var G__7829 = cljs.core.next.call(null,ys__7827);
xs__7826 = G__7828;
ys__7827 = G__7829;
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
return cljs.core.reduce.call(null,(function (p1__7830_SHARP_,p2__7831_SHARP_){
return cljs.core.hash_combine.call(null,p1__7830_SHARP_,cljs.core.hash.call(null,p2__7831_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__7835 = 0;
var s__7836 = cljs.core.seq.call(null,m);
while(true){
if(s__7836)
{var e__7837 = cljs.core.first.call(null,s__7836);
{
var G__7838 = ((h__7835 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7837)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7837)))) % 4503599627370496);
var G__7839 = cljs.core.next.call(null,s__7836);
h__7835 = G__7838;
s__7836 = G__7839;
continue;
}
} else
{return h__7835;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7843 = 0;
var s__7844 = cljs.core.seq.call(null,s);
while(true){
if(s__7844)
{var e__7845 = cljs.core.first.call(null,s__7844);
{
var G__7846 = ((h__7843 + cljs.core.hash.call(null,e__7845)) % 4503599627370496);
var G__7847 = cljs.core.next.call(null,s__7844);
h__7843 = G__7846;
s__7844 = G__7847;
continue;
}
} else
{return h__7843;
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
var G__7868__7869 = cljs.core.seq.call(null,fn_map);
if(G__7868__7869)
{var G__7871__7873 = cljs.core.first.call(null,G__7868__7869);
var vec__7872__7874 = G__7871__7873;
var key_name__7875 = cljs.core.nth.call(null,vec__7872__7874,0,null);
var f__7876 = cljs.core.nth.call(null,vec__7872__7874,1,null);
var G__7868__7877 = G__7868__7869;
var G__7871__7878 = G__7871__7873;
var G__7868__7879 = G__7868__7877;
while(true){
var vec__7880__7881 = G__7871__7878;
var key_name__7882 = cljs.core.nth.call(null,vec__7880__7881,0,null);
var f__7883 = cljs.core.nth.call(null,vec__7880__7881,1,null);
var G__7868__7884 = G__7868__7879;
var str_name__7885 = cljs.core.name.call(null,key_name__7882);
(obj[str_name__7885] = f__7883);
var temp__3974__auto____7886 = cljs.core.next.call(null,G__7868__7884);
if(temp__3974__auto____7886)
{var G__7868__7887 = temp__3974__auto____7886;
{
var G__7888 = cljs.core.first.call(null,G__7868__7887);
var G__7889 = G__7868__7887;
G__7871__7878 = G__7888;
G__7868__7879 = G__7889;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7890 = this;
var h__2346__auto____7891 = this__7890.__hash;
if(!((h__2346__auto____7891 == null)))
{return h__2346__auto____7891;
} else
{var h__2346__auto____7892 = cljs.core.hash_coll.call(null,coll);
this__7890.__hash = h__2346__auto____7892;
return h__2346__auto____7892;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7893 = this;
if((this__7893.count === 1))
{return null;
} else
{return this__7893.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7894 = this;
return (new cljs.core.List(this__7894.meta,o,coll,(this__7894.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7895 = this;
var this__7896 = this;
return cljs.core.pr_str.call(null,this__7896);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7897 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7898 = this;
return this__7898.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7899 = this;
return this__7899.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7900 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7901 = this;
return this__7901.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7902 = this;
if((this__7902.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7902.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7903 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7904 = this;
return (new cljs.core.List(meta,this__7904.first,this__7904.rest,this__7904.count,this__7904.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7905 = this;
return this__7905.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7906 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7907 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7908 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7909 = this;
return (new cljs.core.List(this__7909.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7910 = this;
var this__7911 = this;
return cljs.core.pr_str.call(null,this__7911);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7912 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7913 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7914 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7915 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7916 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7917 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7918 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7919 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7920 = this;
return this__7920.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7921 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7925__7926 = coll;
if(G__7925__7926)
{if((function (){var or__3824__auto____7927 = (G__7925__7926.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7927)
{return or__3824__auto____7927;
} else
{return G__7925__7926.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7925__7926.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7925__7926);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7925__7926);
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
var G__7928__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7928 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7928__delegate.call(this, x, y, z, items);
};
G__7928.cljs$lang$maxFixedArity = 3;
G__7928.cljs$lang$applyTo = (function (arglist__7929){
var x = cljs.core.first(arglist__7929);
var y = cljs.core.first(cljs.core.next(arglist__7929));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7929)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7929)));
return G__7928__delegate(x, y, z, items);
});
G__7928.cljs$lang$arity$variadic = G__7928__delegate;
return G__7928;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7930 = this;
var h__2346__auto____7931 = this__7930.__hash;
if(!((h__2346__auto____7931 == null)))
{return h__2346__auto____7931;
} else
{var h__2346__auto____7932 = cljs.core.hash_coll.call(null,coll);
this__7930.__hash = h__2346__auto____7932;
return h__2346__auto____7932;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7933 = this;
if((this__7933.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7933.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7934 = this;
return (new cljs.core.Cons(null,o,coll,this__7934.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7935 = this;
var this__7936 = this;
return cljs.core.pr_str.call(null,this__7936);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7937 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7938 = this;
return this__7938.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7939 = this;
if((this__7939.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7939.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7940 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7941 = this;
return (new cljs.core.Cons(meta,this__7941.first,this__7941.rest,this__7941.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7942 = this;
return this__7942.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7943 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7943.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7948 = (coll == null);
if(or__3824__auto____7948)
{return or__3824__auto____7948;
} else
{var G__7949__7950 = coll;
if(G__7949__7950)
{if((function (){var or__3824__auto____7951 = (G__7949__7950.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7951)
{return or__3824__auto____7951;
} else
{return G__7949__7950.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7949__7950.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7949__7950);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7949__7950);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7955__7956 = x;
if(G__7955__7956)
{if((function (){var or__3824__auto____7957 = (G__7955__7956.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7957)
{return or__3824__auto____7957;
} else
{return G__7955__7956.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7955__7956.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7955__7956);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7955__7956);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7958 = null;
var G__7958__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7958__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7958 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7958__2.call(this,string,f);
case 3:
return G__7958__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7958;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7959 = null;
var G__7959__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7959__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7959 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7959__2.call(this,string,k);
case 3:
return G__7959__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7959;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7960 = null;
var G__7960__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7960__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7960 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7960__2.call(this,string,n);
case 3:
return G__7960__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7960;
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
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function (this_sym7963,coll){
var this__7964 = this;
var this_sym7963__7965 = this;
var ___7966 = this_sym7963__7965;
if((coll == null))
{return null;
} else
{var strobj__7967 = coll.strobj;
if((strobj__7967 == null))
{return cljs.core._lookup.call(null,coll,this__7964.k,null);
} else
{return (strobj__7967[this__7964.k]);
}
}
});
cljs.core.Keyword.prototype.apply = (function (this_sym7961,args7962){
var this__7968 = this;
return this_sym7961.call.apply(this_sym7961,[this_sym7961].concat(args7962.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7977 = null;
var G__7977__2 = (function (this_sym7971,coll){
var this_sym7971__7973 = this;
var this__7974 = this_sym7971__7973;
return cljs.core._lookup.call(null,coll,this__7974.toString(),null);
});
var G__7977__3 = (function (this_sym7972,coll,not_found){
var this_sym7972__7975 = this;
var this__7976 = this_sym7972__7975;
return cljs.core._lookup.call(null,coll,this__7976.toString(),not_found);
});
G__7977 = function(this_sym7972,coll,not_found){
switch(arguments.length){
case 2:
return G__7977__2.call(this,this_sym7972,coll);
case 3:
return G__7977__3.call(this,this_sym7972,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7977;
})()
;
String.prototype.apply = (function (this_sym7969,args7970){
return this_sym7969.call.apply(this_sym7969,[this_sym7969].concat(args7970.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7979 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7979;
} else
{lazy_seq.x = x__7979.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7980 = this;
var h__2346__auto____7981 = this__7980.__hash;
if(!((h__2346__auto____7981 == null)))
{return h__2346__auto____7981;
} else
{var h__2346__auto____7982 = cljs.core.hash_coll.call(null,coll);
this__7980.__hash = h__2346__auto____7982;
return h__2346__auto____7982;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7983 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7984 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7985 = this;
var this__7986 = this;
return cljs.core.pr_str.call(null,this__7986);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7987 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7988 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7989 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7990 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7991 = this;
return (new cljs.core.LazySeq(meta,this__7991.realized,this__7991.x,this__7991.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7992 = this;
return this__7992.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7993 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7993.meta);
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7994 = this;
return this__7994.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7995 = this;
var ___7996 = this;
(this__7995.buf[this__7995.end] = o);
return this__7995.end = (this__7995.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7997 = this;
var ___7998 = this;
var ret__7999 = (new cljs.core.ArrayChunk(this__7997.buf,0,this__7997.end));
this__7997.buf = null;
return ret__7999;
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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8000 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__8000.arr[this__8000.off]),(this__8000.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8001 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__8001.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__8002 = this;
if((this__8002.off === this__8002.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__8002.arr,(this__8002.off + 1),this__8002.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__8003 = this;
return (this__8003.arr[(this__8003.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__8004 = this;
if((function (){var and__3822__auto____8005 = (i >= 0);
if(and__3822__auto____8005)
{return (i < (this__8004.end - this__8004.off));
} else
{return and__3822__auto____8005;
}
})())
{return (this__8004.arr[(this__8004.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8006 = this;
return (this__8006.end - this__8006.off);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__8007 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8008 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8009 = this;
return cljs.core._nth.call(null,this__8009.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8010 = this;
if((cljs.core._count.call(null,this__8010.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__8010.chunk),this__8010.more,this__8010.meta));
} else
{if((this__8010.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8010.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8011 = this;
if((this__8011.more == null))
{return null;
} else
{return this__8011.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8012 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8013 = this;
return (new cljs.core.ChunkedCons(this__8013.chunk,this__8013.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8014 = this;
return this__8014.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8015 = this;
return this__8015.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8016 = this;
if((this__8016.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8016.more;
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
if((function (){var G__8020__8021 = s;
if(G__8020__8021)
{if(cljs.core.truth_((function (){var or__3824__auto____8022 = null;
if(cljs.core.truth_(or__3824__auto____8022))
{return or__3824__auto____8022;
} else
{return G__8020__8021.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__8020__8021.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__8020__8021);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__8020__8021);
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
var ary__8025 = [];
var s__8026 = s;
while(true){
if(cljs.core.seq.call(null,s__8026))
{ary__8025.push(cljs.core.first.call(null,s__8026));
{
var G__8027 = cljs.core.next.call(null,s__8026);
s__8026 = G__8027;
continue;
}
} else
{return ary__8025;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__8031 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__8032 = 0;
var xs__8033 = cljs.core.seq.call(null,coll);
while(true){
if(xs__8033)
{(ret__8031[i__8032] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__8033)));
{
var G__8034 = (i__8032 + 1);
var G__8035 = cljs.core.next.call(null,xs__8033);
i__8032 = G__8034;
xs__8033 = G__8035;
continue;
}
} else
{}
break;
}
return ret__8031;
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
var a__8043 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8044 = cljs.core.seq.call(null,init_val_or_seq);
var i__8045 = 0;
var s__8046 = s__8044;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8047 = s__8046;
if(and__3822__auto____8047)
{return (i__8045 < size);
} else
{return and__3822__auto____8047;
}
})()))
{(a__8043[i__8045] = cljs.core.first.call(null,s__8046));
{
var G__8050 = (i__8045 + 1);
var G__8051 = cljs.core.next.call(null,s__8046);
i__8045 = G__8050;
s__8046 = G__8051;
continue;
}
} else
{return a__8043;
}
break;
}
} else
{var n__2685__auto____8048 = size;
var i__8049 = 0;
while(true){
if((i__8049 < n__2685__auto____8048))
{(a__8043[i__8049] = init_val_or_seq);
{
var G__8052 = (i__8049 + 1);
i__8049 = G__8052;
continue;
}
} else
{}
break;
}
return a__8043;
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
var a__8060 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8061 = cljs.core.seq.call(null,init_val_or_seq);
var i__8062 = 0;
var s__8063 = s__8061;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8064 = s__8063;
if(and__3822__auto____8064)
{return (i__8062 < size);
} else
{return and__3822__auto____8064;
}
})()))
{(a__8060[i__8062] = cljs.core.first.call(null,s__8063));
{
var G__8067 = (i__8062 + 1);
var G__8068 = cljs.core.next.call(null,s__8063);
i__8062 = G__8067;
s__8063 = G__8068;
continue;
}
} else
{return a__8060;
}
break;
}
} else
{var n__2685__auto____8065 = size;
var i__8066 = 0;
while(true){
if((i__8066 < n__2685__auto____8065))
{(a__8060[i__8066] = init_val_or_seq);
{
var G__8069 = (i__8066 + 1);
i__8066 = G__8069;
continue;
}
} else
{}
break;
}
return a__8060;
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
var a__8077 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8078 = cljs.core.seq.call(null,init_val_or_seq);
var i__8079 = 0;
var s__8080 = s__8078;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8081 = s__8080;
if(and__3822__auto____8081)
{return (i__8079 < size);
} else
{return and__3822__auto____8081;
}
})()))
{(a__8077[i__8079] = cljs.core.first.call(null,s__8080));
{
var G__8084 = (i__8079 + 1);
var G__8085 = cljs.core.next.call(null,s__8080);
i__8079 = G__8084;
s__8080 = G__8085;
continue;
}
} else
{return a__8077;
}
break;
}
} else
{var n__2685__auto____8082 = size;
var i__8083 = 0;
while(true){
if((i__8083 < n__2685__auto____8082))
{(a__8077[i__8083] = init_val_or_seq);
{
var G__8086 = (i__8083 + 1);
i__8083 = G__8086;
continue;
}
} else
{}
break;
}
return a__8077;
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
{var s__8091 = s;
var i__8092 = n;
var sum__8093 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8094 = (i__8092 > 0);
if(and__3822__auto____8094)
{return cljs.core.seq.call(null,s__8091);
} else
{return and__3822__auto____8094;
}
})()))
{{
var G__8095 = cljs.core.next.call(null,s__8091);
var G__8096 = (i__8092 - 1);
var G__8097 = (sum__8093 + 1);
s__8091 = G__8095;
i__8092 = G__8096;
sum__8093 = G__8097;
continue;
}
} else
{return sum__8093;
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
var s__8102 = cljs.core.seq.call(null,x);
if(s__8102)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__8102))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__8102),concat.call(null,cljs.core.chunk_rest.call(null,s__8102),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8102),concat.call(null,cljs.core.rest.call(null,s__8102),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__8106__delegate = function (x,y,zs){
var cat__8105 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8104 = cljs.core.seq.call(null,xys);
if(xys__8104)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__8104))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__8104),cat.call(null,cljs.core.chunk_rest.call(null,xys__8104),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__8104),cat.call(null,cljs.core.rest.call(null,xys__8104),zs));
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
return cat__8105.call(null,concat.call(null,x,y),zs);
};
var G__8106 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8106__delegate.call(this, x, y, zs);
};
G__8106.cljs$lang$maxFixedArity = 2;
G__8106.cljs$lang$applyTo = (function (arglist__8107){
var x = cljs.core.first(arglist__8107);
var y = cljs.core.first(cljs.core.next(arglist__8107));
var zs = cljs.core.rest(cljs.core.next(arglist__8107));
return G__8106__delegate(x, y, zs);
});
G__8106.cljs$lang$arity$variadic = G__8106__delegate;
return G__8106;
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
var G__8108__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__8108 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8108__delegate.call(this, a, b, c, d, more);
};
G__8108.cljs$lang$maxFixedArity = 4;
G__8108.cljs$lang$applyTo = (function (arglist__8109){
var a = cljs.core.first(arglist__8109);
var b = cljs.core.first(cljs.core.next(arglist__8109));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8109)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8109))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8109))));
return G__8108__delegate(a, b, c, d, more);
});
G__8108.cljs$lang$arity$variadic = G__8108__delegate;
return G__8108;
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
var args__8151 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__8152 = cljs.core._first.call(null,args__8151);
var args__8153 = cljs.core._rest.call(null,args__8151);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__8152);
} else
{return f.call(null,a__8152);
}
} else
{var b__8154 = cljs.core._first.call(null,args__8153);
var args__8155 = cljs.core._rest.call(null,args__8153);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__8152,b__8154);
} else
{return f.call(null,a__8152,b__8154);
}
} else
{var c__8156 = cljs.core._first.call(null,args__8155);
var args__8157 = cljs.core._rest.call(null,args__8155);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__8152,b__8154,c__8156);
} else
{return f.call(null,a__8152,b__8154,c__8156);
}
} else
{var d__8158 = cljs.core._first.call(null,args__8157);
var args__8159 = cljs.core._rest.call(null,args__8157);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__8152,b__8154,c__8156,d__8158);
} else
{return f.call(null,a__8152,b__8154,c__8156,d__8158);
}
} else
{var e__8160 = cljs.core._first.call(null,args__8159);
var args__8161 = cljs.core._rest.call(null,args__8159);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__8152,b__8154,c__8156,d__8158,e__8160);
} else
{return f.call(null,a__8152,b__8154,c__8156,d__8158,e__8160);
}
} else
{var f__8162 = cljs.core._first.call(null,args__8161);
var args__8163 = cljs.core._rest.call(null,args__8161);
if((argc === 6))
{if(f__8162.cljs$lang$arity$6)
{return f__8162.cljs$lang$arity$6(a__8152,b__8154,c__8156,d__8158,e__8160,f__8162);
} else
{return f__8162.call(null,a__8152,b__8154,c__8156,d__8158,e__8160,f__8162);
}
} else
{var g__8164 = cljs.core._first.call(null,args__8163);
var args__8165 = cljs.core._rest.call(null,args__8163);
if((argc === 7))
{if(f__8162.cljs$lang$arity$7)
{return f__8162.cljs$lang$arity$7(a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164);
} else
{return f__8162.call(null,a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164);
}
} else
{var h__8166 = cljs.core._first.call(null,args__8165);
var args__8167 = cljs.core._rest.call(null,args__8165);
if((argc === 8))
{if(f__8162.cljs$lang$arity$8)
{return f__8162.cljs$lang$arity$8(a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166);
} else
{return f__8162.call(null,a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166);
}
} else
{var i__8168 = cljs.core._first.call(null,args__8167);
var args__8169 = cljs.core._rest.call(null,args__8167);
if((argc === 9))
{if(f__8162.cljs$lang$arity$9)
{return f__8162.cljs$lang$arity$9(a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168);
} else
{return f__8162.call(null,a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168);
}
} else
{var j__8170 = cljs.core._first.call(null,args__8169);
var args__8171 = cljs.core._rest.call(null,args__8169);
if((argc === 10))
{if(f__8162.cljs$lang$arity$10)
{return f__8162.cljs$lang$arity$10(a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170);
} else
{return f__8162.call(null,a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170);
}
} else
{var k__8172 = cljs.core._first.call(null,args__8171);
var args__8173 = cljs.core._rest.call(null,args__8171);
if((argc === 11))
{if(f__8162.cljs$lang$arity$11)
{return f__8162.cljs$lang$arity$11(a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172);
} else
{return f__8162.call(null,a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172);
}
} else
{var l__8174 = cljs.core._first.call(null,args__8173);
var args__8175 = cljs.core._rest.call(null,args__8173);
if((argc === 12))
{if(f__8162.cljs$lang$arity$12)
{return f__8162.cljs$lang$arity$12(a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172,l__8174);
} else
{return f__8162.call(null,a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172,l__8174);
}
} else
{var m__8176 = cljs.core._first.call(null,args__8175);
var args__8177 = cljs.core._rest.call(null,args__8175);
if((argc === 13))
{if(f__8162.cljs$lang$arity$13)
{return f__8162.cljs$lang$arity$13(a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172,l__8174,m__8176);
} else
{return f__8162.call(null,a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172,l__8174,m__8176);
}
} else
{var n__8178 = cljs.core._first.call(null,args__8177);
var args__8179 = cljs.core._rest.call(null,args__8177);
if((argc === 14))
{if(f__8162.cljs$lang$arity$14)
{return f__8162.cljs$lang$arity$14(a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172,l__8174,m__8176,n__8178);
} else
{return f__8162.call(null,a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172,l__8174,m__8176,n__8178);
}
} else
{var o__8180 = cljs.core._first.call(null,args__8179);
var args__8181 = cljs.core._rest.call(null,args__8179);
if((argc === 15))
{if(f__8162.cljs$lang$arity$15)
{return f__8162.cljs$lang$arity$15(a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172,l__8174,m__8176,n__8178,o__8180);
} else
{return f__8162.call(null,a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172,l__8174,m__8176,n__8178,o__8180);
}
} else
{var p__8182 = cljs.core._first.call(null,args__8181);
var args__8183 = cljs.core._rest.call(null,args__8181);
if((argc === 16))
{if(f__8162.cljs$lang$arity$16)
{return f__8162.cljs$lang$arity$16(a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172,l__8174,m__8176,n__8178,o__8180,p__8182);
} else
{return f__8162.call(null,a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172,l__8174,m__8176,n__8178,o__8180,p__8182);
}
} else
{var q__8184 = cljs.core._first.call(null,args__8183);
var args__8185 = cljs.core._rest.call(null,args__8183);
if((argc === 17))
{if(f__8162.cljs$lang$arity$17)
{return f__8162.cljs$lang$arity$17(a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172,l__8174,m__8176,n__8178,o__8180,p__8182,q__8184);
} else
{return f__8162.call(null,a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172,l__8174,m__8176,n__8178,o__8180,p__8182,q__8184);
}
} else
{var r__8186 = cljs.core._first.call(null,args__8185);
var args__8187 = cljs.core._rest.call(null,args__8185);
if((argc === 18))
{if(f__8162.cljs$lang$arity$18)
{return f__8162.cljs$lang$arity$18(a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172,l__8174,m__8176,n__8178,o__8180,p__8182,q__8184,r__8186);
} else
{return f__8162.call(null,a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172,l__8174,m__8176,n__8178,o__8180,p__8182,q__8184,r__8186);
}
} else
{var s__8188 = cljs.core._first.call(null,args__8187);
var args__8189 = cljs.core._rest.call(null,args__8187);
if((argc === 19))
{if(f__8162.cljs$lang$arity$19)
{return f__8162.cljs$lang$arity$19(a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172,l__8174,m__8176,n__8178,o__8180,p__8182,q__8184,r__8186,s__8188);
} else
{return f__8162.call(null,a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172,l__8174,m__8176,n__8178,o__8180,p__8182,q__8184,r__8186,s__8188);
}
} else
{var t__8190 = cljs.core._first.call(null,args__8189);
var args__8191 = cljs.core._rest.call(null,args__8189);
if((argc === 20))
{if(f__8162.cljs$lang$arity$20)
{return f__8162.cljs$lang$arity$20(a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172,l__8174,m__8176,n__8178,o__8180,p__8182,q__8184,r__8186,s__8188,t__8190);
} else
{return f__8162.call(null,a__8152,b__8154,c__8156,d__8158,e__8160,f__8162,g__8164,h__8166,i__8168,j__8170,k__8172,l__8174,m__8176,n__8178,o__8180,p__8182,q__8184,r__8186,s__8188,t__8190);
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
var fixed_arity__8206 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8207 = cljs.core.bounded_count.call(null,args,(fixed_arity__8206 + 1));
if((bc__8207 <= fixed_arity__8206))
{return cljs.core.apply_to.call(null,f,bc__8207,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__8208 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__8209 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8210 = cljs.core.bounded_count.call(null,arglist__8208,(fixed_arity__8209 + 1));
if((bc__8210 <= fixed_arity__8209))
{return cljs.core.apply_to.call(null,f,bc__8210,arglist__8208);
} else
{return f.cljs$lang$applyTo(arglist__8208);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8208));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__8211 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__8212 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8213 = cljs.core.bounded_count.call(null,arglist__8211,(fixed_arity__8212 + 1));
if((bc__8213 <= fixed_arity__8212))
{return cljs.core.apply_to.call(null,f,bc__8213,arglist__8211);
} else
{return f.cljs$lang$applyTo(arglist__8211);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8211));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__8214 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__8215 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8216 = cljs.core.bounded_count.call(null,arglist__8214,(fixed_arity__8215 + 1));
if((bc__8216 <= fixed_arity__8215))
{return cljs.core.apply_to.call(null,f,bc__8216,arglist__8214);
} else
{return f.cljs$lang$applyTo(arglist__8214);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8214));
}
});
var apply__6 = (function() { 
var G__8220__delegate = function (f,a,b,c,d,args){
var arglist__8217 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__8218 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8219 = cljs.core.bounded_count.call(null,arglist__8217,(fixed_arity__8218 + 1));
if((bc__8219 <= fixed_arity__8218))
{return cljs.core.apply_to.call(null,f,bc__8219,arglist__8217);
} else
{return f.cljs$lang$applyTo(arglist__8217);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8217));
}
};
var G__8220 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8220__delegate.call(this, f, a, b, c, d, args);
};
G__8220.cljs$lang$maxFixedArity = 5;
G__8220.cljs$lang$applyTo = (function (arglist__8221){
var f = cljs.core.first(arglist__8221);
var a = cljs.core.first(cljs.core.next(arglist__8221));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8221)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8221))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8221)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8221)))));
return G__8220__delegate(f, a, b, c, d, args);
});
G__8220.cljs$lang$arity$variadic = G__8220__delegate;
return G__8220;
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
vary_meta.cljs$lang$applyTo = (function (arglist__8222){
var obj = cljs.core.first(arglist__8222);
var f = cljs.core.first(cljs.core.next(arglist__8222));
var args = cljs.core.rest(cljs.core.next(arglist__8222));
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
var G__8223__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__8223 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8223__delegate.call(this, x, y, more);
};
G__8223.cljs$lang$maxFixedArity = 2;
G__8223.cljs$lang$applyTo = (function (arglist__8224){
var x = cljs.core.first(arglist__8224);
var y = cljs.core.first(cljs.core.next(arglist__8224));
var more = cljs.core.rest(cljs.core.next(arglist__8224));
return G__8223__delegate(x, y, more);
});
G__8223.cljs$lang$arity$variadic = G__8223__delegate;
return G__8223;
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
var G__8225 = pred;
var G__8226 = cljs.core.next.call(null,coll);
pred = G__8225;
coll = G__8226;
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
{var or__3824__auto____8228 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____8228))
{return or__3824__auto____8228;
} else
{{
var G__8229 = pred;
var G__8230 = cljs.core.next.call(null,coll);
pred = G__8229;
coll = G__8230;
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
var G__8231 = null;
var G__8231__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__8231__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__8231__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__8231__3 = (function() { 
var G__8232__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__8232 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8232__delegate.call(this, x, y, zs);
};
G__8232.cljs$lang$maxFixedArity = 2;
G__8232.cljs$lang$applyTo = (function (arglist__8233){
var x = cljs.core.first(arglist__8233);
var y = cljs.core.first(cljs.core.next(arglist__8233));
var zs = cljs.core.rest(cljs.core.next(arglist__8233));
return G__8232__delegate(x, y, zs);
});
G__8232.cljs$lang$arity$variadic = G__8232__delegate;
return G__8232;
})()
;
G__8231 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__8231__0.call(this);
case 1:
return G__8231__1.call(this,x);
case 2:
return G__8231__2.call(this,x,y);
default:
return G__8231__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__8231.cljs$lang$maxFixedArity = 2;
G__8231.cljs$lang$applyTo = G__8231__3.cljs$lang$applyTo;
return G__8231;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8234__delegate = function (args){
return x;
};
var G__8234 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8234__delegate.call(this, args);
};
G__8234.cljs$lang$maxFixedArity = 0;
G__8234.cljs$lang$applyTo = (function (arglist__8235){
var args = cljs.core.seq(arglist__8235);;
return G__8234__delegate(args);
});
G__8234.cljs$lang$arity$variadic = G__8234__delegate;
return G__8234;
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
var G__8242 = null;
var G__8242__0 = (function (){
return f.call(null,g.call(null));
});
var G__8242__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__8242__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__8242__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__8242__4 = (function() { 
var G__8243__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8243 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8243__delegate.call(this, x, y, z, args);
};
G__8243.cljs$lang$maxFixedArity = 3;
G__8243.cljs$lang$applyTo = (function (arglist__8244){
var x = cljs.core.first(arglist__8244);
var y = cljs.core.first(cljs.core.next(arglist__8244));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8244)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8244)));
return G__8243__delegate(x, y, z, args);
});
G__8243.cljs$lang$arity$variadic = G__8243__delegate;
return G__8243;
})()
;
G__8242 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8242__0.call(this);
case 1:
return G__8242__1.call(this,x);
case 2:
return G__8242__2.call(this,x,y);
case 3:
return G__8242__3.call(this,x,y,z);
default:
return G__8242__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8242.cljs$lang$maxFixedArity = 3;
G__8242.cljs$lang$applyTo = G__8242__4.cljs$lang$applyTo;
return G__8242;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__8245 = null;
var G__8245__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__8245__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__8245__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__8245__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__8245__4 = (function() { 
var G__8246__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__8246 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8246__delegate.call(this, x, y, z, args);
};
G__8246.cljs$lang$maxFixedArity = 3;
G__8246.cljs$lang$applyTo = (function (arglist__8247){
var x = cljs.core.first(arglist__8247);
var y = cljs.core.first(cljs.core.next(arglist__8247));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8247)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8247)));
return G__8246__delegate(x, y, z, args);
});
G__8246.cljs$lang$arity$variadic = G__8246__delegate;
return G__8246;
})()
;
G__8245 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8245__0.call(this);
case 1:
return G__8245__1.call(this,x);
case 2:
return G__8245__2.call(this,x,y);
case 3:
return G__8245__3.call(this,x,y,z);
default:
return G__8245__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8245.cljs$lang$maxFixedArity = 3;
G__8245.cljs$lang$applyTo = G__8245__4.cljs$lang$applyTo;
return G__8245;
})()
});
var comp__4 = (function() { 
var G__8248__delegate = function (f1,f2,f3,fs){
var fs__8239 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__8249__delegate = function (args){
var ret__8240 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__8239),args);
var fs__8241 = cljs.core.next.call(null,fs__8239);
while(true){
if(fs__8241)
{{
var G__8250 = cljs.core.first.call(null,fs__8241).call(null,ret__8240);
var G__8251 = cljs.core.next.call(null,fs__8241);
ret__8240 = G__8250;
fs__8241 = G__8251;
continue;
}
} else
{return ret__8240;
}
break;
}
};
var G__8249 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8249__delegate.call(this, args);
};
G__8249.cljs$lang$maxFixedArity = 0;
G__8249.cljs$lang$applyTo = (function (arglist__8252){
var args = cljs.core.seq(arglist__8252);;
return G__8249__delegate(args);
});
G__8249.cljs$lang$arity$variadic = G__8249__delegate;
return G__8249;
})()
;
};
var G__8248 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8248__delegate.call(this, f1, f2, f3, fs);
};
G__8248.cljs$lang$maxFixedArity = 3;
G__8248.cljs$lang$applyTo = (function (arglist__8253){
var f1 = cljs.core.first(arglist__8253);
var f2 = cljs.core.first(cljs.core.next(arglist__8253));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8253)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8253)));
return G__8248__delegate(f1, f2, f3, fs);
});
G__8248.cljs$lang$arity$variadic = G__8248__delegate;
return G__8248;
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
var G__8254__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__8254 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8254__delegate.call(this, args);
};
G__8254.cljs$lang$maxFixedArity = 0;
G__8254.cljs$lang$applyTo = (function (arglist__8255){
var args = cljs.core.seq(arglist__8255);;
return G__8254__delegate(args);
});
G__8254.cljs$lang$arity$variadic = G__8254__delegate;
return G__8254;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__8256__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__8256 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8256__delegate.call(this, args);
};
G__8256.cljs$lang$maxFixedArity = 0;
G__8256.cljs$lang$applyTo = (function (arglist__8257){
var args = cljs.core.seq(arglist__8257);;
return G__8256__delegate(args);
});
G__8256.cljs$lang$arity$variadic = G__8256__delegate;
return G__8256;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__8258__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__8258 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8258__delegate.call(this, args);
};
G__8258.cljs$lang$maxFixedArity = 0;
G__8258.cljs$lang$applyTo = (function (arglist__8259){
var args = cljs.core.seq(arglist__8259);;
return G__8258__delegate(args);
});
G__8258.cljs$lang$arity$variadic = G__8258__delegate;
return G__8258;
})()
;
});
var partial__5 = (function() { 
var G__8260__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8261__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__8261 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8261__delegate.call(this, args);
};
G__8261.cljs$lang$maxFixedArity = 0;
G__8261.cljs$lang$applyTo = (function (arglist__8262){
var args = cljs.core.seq(arglist__8262);;
return G__8261__delegate(args);
});
G__8261.cljs$lang$arity$variadic = G__8261__delegate;
return G__8261;
})()
;
};
var G__8260 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8260__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__8260.cljs$lang$maxFixedArity = 4;
G__8260.cljs$lang$applyTo = (function (arglist__8263){
var f = cljs.core.first(arglist__8263);
var arg1 = cljs.core.first(cljs.core.next(arglist__8263));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8263)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8263))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8263))));
return G__8260__delegate(f, arg1, arg2, arg3, more);
});
G__8260.cljs$lang$arity$variadic = G__8260__delegate;
return G__8260;
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
var G__8264 = null;
var G__8264__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__8264__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__8264__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__8264__4 = (function() { 
var G__8265__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__8265 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8265__delegate.call(this, a, b, c, ds);
};
G__8265.cljs$lang$maxFixedArity = 3;
G__8265.cljs$lang$applyTo = (function (arglist__8266){
var a = cljs.core.first(arglist__8266);
var b = cljs.core.first(cljs.core.next(arglist__8266));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8266)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8266)));
return G__8265__delegate(a, b, c, ds);
});
G__8265.cljs$lang$arity$variadic = G__8265__delegate;
return G__8265;
})()
;
G__8264 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__8264__1.call(this,a);
case 2:
return G__8264__2.call(this,a,b);
case 3:
return G__8264__3.call(this,a,b,c);
default:
return G__8264__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8264.cljs$lang$maxFixedArity = 3;
G__8264.cljs$lang$applyTo = G__8264__4.cljs$lang$applyTo;
return G__8264;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__8267 = null;
var G__8267__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__8267__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__8267__4 = (function() { 
var G__8268__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__8268 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8268__delegate.call(this, a, b, c, ds);
};
G__8268.cljs$lang$maxFixedArity = 3;
G__8268.cljs$lang$applyTo = (function (arglist__8269){
var a = cljs.core.first(arglist__8269);
var b = cljs.core.first(cljs.core.next(arglist__8269));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8269)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8269)));
return G__8268__delegate(a, b, c, ds);
});
G__8268.cljs$lang$arity$variadic = G__8268__delegate;
return G__8268;
})()
;
G__8267 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8267__2.call(this,a,b);
case 3:
return G__8267__3.call(this,a,b,c);
default:
return G__8267__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8267.cljs$lang$maxFixedArity = 3;
G__8267.cljs$lang$applyTo = G__8267__4.cljs$lang$applyTo;
return G__8267;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__8270 = null;
var G__8270__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__8270__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__8270__4 = (function() { 
var G__8271__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__8271 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8271__delegate.call(this, a, b, c, ds);
};
G__8271.cljs$lang$maxFixedArity = 3;
G__8271.cljs$lang$applyTo = (function (arglist__8272){
var a = cljs.core.first(arglist__8272);
var b = cljs.core.first(cljs.core.next(arglist__8272));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8272)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8272)));
return G__8271__delegate(a, b, c, ds);
});
G__8271.cljs$lang$arity$variadic = G__8271__delegate;
return G__8271;
})()
;
G__8270 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8270__2.call(this,a,b);
case 3:
return G__8270__3.call(this,a,b,c);
default:
return G__8270__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8270.cljs$lang$maxFixedArity = 3;
G__8270.cljs$lang$applyTo = G__8270__4.cljs$lang$applyTo;
return G__8270;
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
var mapi__8288 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8296 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8296)
{var s__8297 = temp__3974__auto____8296;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8297))
{var c__8298 = cljs.core.chunk_first.call(null,s__8297);
var size__8299 = cljs.core.count.call(null,c__8298);
var b__8300 = cljs.core.chunk_buffer.call(null,size__8299);
var n__2685__auto____8301 = size__8299;
var i__8302 = 0;
while(true){
if((i__8302 < n__2685__auto____8301))
{cljs.core.chunk_append.call(null,b__8300,f.call(null,(idx + i__8302),cljs.core._nth.call(null,c__8298,i__8302)));
{
var G__8303 = (i__8302 + 1);
i__8302 = G__8303;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8300),mapi.call(null,(idx + size__8299),cljs.core.chunk_rest.call(null,s__8297)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__8297)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__8297)));
}
} else
{return null;
}
}),null));
});
return mapi__8288.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8313 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8313)
{var s__8314 = temp__3974__auto____8313;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8314))
{var c__8315 = cljs.core.chunk_first.call(null,s__8314);
var size__8316 = cljs.core.count.call(null,c__8315);
var b__8317 = cljs.core.chunk_buffer.call(null,size__8316);
var n__2685__auto____8318 = size__8316;
var i__8319 = 0;
while(true){
if((i__8319 < n__2685__auto____8318))
{var x__8320 = f.call(null,cljs.core._nth.call(null,c__8315,i__8319));
if((x__8320 == null))
{} else
{cljs.core.chunk_append.call(null,b__8317,x__8320);
}
{
var G__8322 = (i__8319 + 1);
i__8319 = G__8322;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8317),keep.call(null,f,cljs.core.chunk_rest.call(null,s__8314)));
} else
{var x__8321 = f.call(null,cljs.core.first.call(null,s__8314));
if((x__8321 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__8314));
} else
{return cljs.core.cons.call(null,x__8321,keep.call(null,f,cljs.core.rest.call(null,s__8314)));
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
var keepi__8348 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8358 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8358)
{var s__8359 = temp__3974__auto____8358;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8359))
{var c__8360 = cljs.core.chunk_first.call(null,s__8359);
var size__8361 = cljs.core.count.call(null,c__8360);
var b__8362 = cljs.core.chunk_buffer.call(null,size__8361);
var n__2685__auto____8363 = size__8361;
var i__8364 = 0;
while(true){
if((i__8364 < n__2685__auto____8363))
{var x__8365 = f.call(null,(idx + i__8364),cljs.core._nth.call(null,c__8360,i__8364));
if((x__8365 == null))
{} else
{cljs.core.chunk_append.call(null,b__8362,x__8365);
}
{
var G__8367 = (i__8364 + 1);
i__8364 = G__8367;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8362),keepi.call(null,(idx + size__8361),cljs.core.chunk_rest.call(null,s__8359)));
} else
{var x__8366 = f.call(null,idx,cljs.core.first.call(null,s__8359));
if((x__8366 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8359));
} else
{return cljs.core.cons.call(null,x__8366,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8359)));
}
}
} else
{return null;
}
}),null));
});
return keepi__8348.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8453 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8453))
{return p.call(null,y);
} else
{return and__3822__auto____8453;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8454 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8454))
{var and__3822__auto____8455 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____8455))
{return p.call(null,z);
} else
{return and__3822__auto____8455;
}
} else
{return and__3822__auto____8454;
}
})());
});
var ep1__4 = (function() { 
var G__8524__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8456 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8456))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____8456;
}
})());
};
var G__8524 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8524__delegate.call(this, x, y, z, args);
};
G__8524.cljs$lang$maxFixedArity = 3;
G__8524.cljs$lang$applyTo = (function (arglist__8525){
var x = cljs.core.first(arglist__8525);
var y = cljs.core.first(cljs.core.next(arglist__8525));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8525)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8525)));
return G__8524__delegate(x, y, z, args);
});
G__8524.cljs$lang$arity$variadic = G__8524__delegate;
return G__8524;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8468 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8468))
{return p2.call(null,x);
} else
{return and__3822__auto____8468;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8469 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8469))
{var and__3822__auto____8470 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8470))
{var and__3822__auto____8471 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8471))
{return p2.call(null,y);
} else
{return and__3822__auto____8471;
}
} else
{return and__3822__auto____8470;
}
} else
{return and__3822__auto____8469;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8472 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8472))
{var and__3822__auto____8473 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8473))
{var and__3822__auto____8474 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8474))
{var and__3822__auto____8475 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8475))
{var and__3822__auto____8476 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8476))
{return p2.call(null,z);
} else
{return and__3822__auto____8476;
}
} else
{return and__3822__auto____8475;
}
} else
{return and__3822__auto____8474;
}
} else
{return and__3822__auto____8473;
}
} else
{return and__3822__auto____8472;
}
})());
});
var ep2__4 = (function() { 
var G__8526__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8477 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8477))
{return cljs.core.every_QMARK_.call(null,(function (p1__8323_SHARP_){
var and__3822__auto____8478 = p1.call(null,p1__8323_SHARP_);
if(cljs.core.truth_(and__3822__auto____8478))
{return p2.call(null,p1__8323_SHARP_);
} else
{return and__3822__auto____8478;
}
}),args);
} else
{return and__3822__auto____8477;
}
})());
};
var G__8526 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8526__delegate.call(this, x, y, z, args);
};
G__8526.cljs$lang$maxFixedArity = 3;
G__8526.cljs$lang$applyTo = (function (arglist__8527){
var x = cljs.core.first(arglist__8527);
var y = cljs.core.first(cljs.core.next(arglist__8527));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8527)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8527)));
return G__8526__delegate(x, y, z, args);
});
G__8526.cljs$lang$arity$variadic = G__8526__delegate;
return G__8526;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8497 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8497))
{var and__3822__auto____8498 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8498))
{return p3.call(null,x);
} else
{return and__3822__auto____8498;
}
} else
{return and__3822__auto____8497;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8499 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8499))
{var and__3822__auto____8500 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8500))
{var and__3822__auto____8501 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8501))
{var and__3822__auto____8502 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8502))
{var and__3822__auto____8503 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8503))
{return p3.call(null,y);
} else
{return and__3822__auto____8503;
}
} else
{return and__3822__auto____8502;
}
} else
{return and__3822__auto____8501;
}
} else
{return and__3822__auto____8500;
}
} else
{return and__3822__auto____8499;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8504 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8504))
{var and__3822__auto____8505 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8505))
{var and__3822__auto____8506 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8506))
{var and__3822__auto____8507 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8507))
{var and__3822__auto____8508 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8508))
{var and__3822__auto____8509 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____8509))
{var and__3822__auto____8510 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8510))
{var and__3822__auto____8511 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____8511))
{return p3.call(null,z);
} else
{return and__3822__auto____8511;
}
} else
{return and__3822__auto____8510;
}
} else
{return and__3822__auto____8509;
}
} else
{return and__3822__auto____8508;
}
} else
{return and__3822__auto____8507;
}
} else
{return and__3822__auto____8506;
}
} else
{return and__3822__auto____8505;
}
} else
{return and__3822__auto____8504;
}
})());
});
var ep3__4 = (function() { 
var G__8528__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8512 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8512))
{return cljs.core.every_QMARK_.call(null,(function (p1__8324_SHARP_){
var and__3822__auto____8513 = p1.call(null,p1__8324_SHARP_);
if(cljs.core.truth_(and__3822__auto____8513))
{var and__3822__auto____8514 = p2.call(null,p1__8324_SHARP_);
if(cljs.core.truth_(and__3822__auto____8514))
{return p3.call(null,p1__8324_SHARP_);
} else
{return and__3822__auto____8514;
}
} else
{return and__3822__auto____8513;
}
}),args);
} else
{return and__3822__auto____8512;
}
})());
};
var G__8528 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8528__delegate.call(this, x, y, z, args);
};
G__8528.cljs$lang$maxFixedArity = 3;
G__8528.cljs$lang$applyTo = (function (arglist__8529){
var x = cljs.core.first(arglist__8529);
var y = cljs.core.first(cljs.core.next(arglist__8529));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8529)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8529)));
return G__8528__delegate(x, y, z, args);
});
G__8528.cljs$lang$arity$variadic = G__8528__delegate;
return G__8528;
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
var G__8530__delegate = function (p1,p2,p3,ps){
var ps__8515 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8325_SHARP_){
return p1__8325_SHARP_.call(null,x);
}),ps__8515);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8326_SHARP_){
var and__3822__auto____8520 = p1__8326_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8520))
{return p1__8326_SHARP_.call(null,y);
} else
{return and__3822__auto____8520;
}
}),ps__8515);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8327_SHARP_){
var and__3822__auto____8521 = p1__8327_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8521))
{var and__3822__auto____8522 = p1__8327_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____8522))
{return p1__8327_SHARP_.call(null,z);
} else
{return and__3822__auto____8522;
}
} else
{return and__3822__auto____8521;
}
}),ps__8515);
});
var epn__4 = (function() { 
var G__8531__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8523 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8523))
{return cljs.core.every_QMARK_.call(null,(function (p1__8328_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8328_SHARP_,args);
}),ps__8515);
} else
{return and__3822__auto____8523;
}
})());
};
var G__8531 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8531__delegate.call(this, x, y, z, args);
};
G__8531.cljs$lang$maxFixedArity = 3;
G__8531.cljs$lang$applyTo = (function (arglist__8532){
var x = cljs.core.first(arglist__8532);
var y = cljs.core.first(cljs.core.next(arglist__8532));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8532)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8532)));
return G__8531__delegate(x, y, z, args);
});
G__8531.cljs$lang$arity$variadic = G__8531__delegate;
return G__8531;
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
var G__8530 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8530__delegate.call(this, p1, p2, p3, ps);
};
G__8530.cljs$lang$maxFixedArity = 3;
G__8530.cljs$lang$applyTo = (function (arglist__8533){
var p1 = cljs.core.first(arglist__8533);
var p2 = cljs.core.first(cljs.core.next(arglist__8533));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8533)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8533)));
return G__8530__delegate(p1, p2, p3, ps);
});
G__8530.cljs$lang$arity$variadic = G__8530__delegate;
return G__8530;
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
var or__3824__auto____8614 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8614))
{return or__3824__auto____8614;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8615 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8615))
{return or__3824__auto____8615;
} else
{var or__3824__auto____8616 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____8616))
{return or__3824__auto____8616;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8685__delegate = function (x,y,z,args){
var or__3824__auto____8617 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8617))
{return or__3824__auto____8617;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8685 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8685__delegate.call(this, x, y, z, args);
};
G__8685.cljs$lang$maxFixedArity = 3;
G__8685.cljs$lang$applyTo = (function (arglist__8686){
var x = cljs.core.first(arglist__8686);
var y = cljs.core.first(cljs.core.next(arglist__8686));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8686)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8686)));
return G__8685__delegate(x, y, z, args);
});
G__8685.cljs$lang$arity$variadic = G__8685__delegate;
return G__8685;
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
var or__3824__auto____8629 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8629))
{return or__3824__auto____8629;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8630 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8630))
{return or__3824__auto____8630;
} else
{var or__3824__auto____8631 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8631))
{return or__3824__auto____8631;
} else
{var or__3824__auto____8632 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8632))
{return or__3824__auto____8632;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8633 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8633))
{return or__3824__auto____8633;
} else
{var or__3824__auto____8634 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8634))
{return or__3824__auto____8634;
} else
{var or__3824__auto____8635 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8635))
{return or__3824__auto____8635;
} else
{var or__3824__auto____8636 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8636))
{return or__3824__auto____8636;
} else
{var or__3824__auto____8637 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8637))
{return or__3824__auto____8637;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8687__delegate = function (x,y,z,args){
var or__3824__auto____8638 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8638))
{return or__3824__auto____8638;
} else
{return cljs.core.some.call(null,(function (p1__8368_SHARP_){
var or__3824__auto____8639 = p1.call(null,p1__8368_SHARP_);
if(cljs.core.truth_(or__3824__auto____8639))
{return or__3824__auto____8639;
} else
{return p2.call(null,p1__8368_SHARP_);
}
}),args);
}
};
var G__8687 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8687__delegate.call(this, x, y, z, args);
};
G__8687.cljs$lang$maxFixedArity = 3;
G__8687.cljs$lang$applyTo = (function (arglist__8688){
var x = cljs.core.first(arglist__8688);
var y = cljs.core.first(cljs.core.next(arglist__8688));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8688)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8688)));
return G__8687__delegate(x, y, z, args);
});
G__8687.cljs$lang$arity$variadic = G__8687__delegate;
return G__8687;
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
var or__3824__auto____8658 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8658))
{return or__3824__auto____8658;
} else
{var or__3824__auto____8659 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8659))
{return or__3824__auto____8659;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8660 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8660))
{return or__3824__auto____8660;
} else
{var or__3824__auto____8661 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8661))
{return or__3824__auto____8661;
} else
{var or__3824__auto____8662 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8662))
{return or__3824__auto____8662;
} else
{var or__3824__auto____8663 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8663))
{return or__3824__auto____8663;
} else
{var or__3824__auto____8664 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8664))
{return or__3824__auto____8664;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8665 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8665))
{return or__3824__auto____8665;
} else
{var or__3824__auto____8666 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8666))
{return or__3824__auto____8666;
} else
{var or__3824__auto____8667 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8667))
{return or__3824__auto____8667;
} else
{var or__3824__auto____8668 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8668))
{return or__3824__auto____8668;
} else
{var or__3824__auto____8669 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8669))
{return or__3824__auto____8669;
} else
{var or__3824__auto____8670 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____8670))
{return or__3824__auto____8670;
} else
{var or__3824__auto____8671 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8671))
{return or__3824__auto____8671;
} else
{var or__3824__auto____8672 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8672))
{return or__3824__auto____8672;
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
var G__8689__delegate = function (x,y,z,args){
var or__3824__auto____8673 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8673))
{return or__3824__auto____8673;
} else
{return cljs.core.some.call(null,(function (p1__8369_SHARP_){
var or__3824__auto____8674 = p1.call(null,p1__8369_SHARP_);
if(cljs.core.truth_(or__3824__auto____8674))
{return or__3824__auto____8674;
} else
{var or__3824__auto____8675 = p2.call(null,p1__8369_SHARP_);
if(cljs.core.truth_(or__3824__auto____8675))
{return or__3824__auto____8675;
} else
{return p3.call(null,p1__8369_SHARP_);
}
}
}),args);
}
};
var G__8689 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8689__delegate.call(this, x, y, z, args);
};
G__8689.cljs$lang$maxFixedArity = 3;
G__8689.cljs$lang$applyTo = (function (arglist__8690){
var x = cljs.core.first(arglist__8690);
var y = cljs.core.first(cljs.core.next(arglist__8690));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8690)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8690)));
return G__8689__delegate(x, y, z, args);
});
G__8689.cljs$lang$arity$variadic = G__8689__delegate;
return G__8689;
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
var G__8691__delegate = function (p1,p2,p3,ps){
var ps__8676 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__8370_SHARP_){
return p1__8370_SHARP_.call(null,x);
}),ps__8676);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8371_SHARP_){
var or__3824__auto____8681 = p1__8371_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8681))
{return or__3824__auto____8681;
} else
{return p1__8371_SHARP_.call(null,y);
}
}),ps__8676);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8372_SHARP_){
var or__3824__auto____8682 = p1__8372_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8682))
{return or__3824__auto____8682;
} else
{var or__3824__auto____8683 = p1__8372_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8683))
{return or__3824__auto____8683;
} else
{return p1__8372_SHARP_.call(null,z);
}
}
}),ps__8676);
});
var spn__4 = (function() { 
var G__8692__delegate = function (x,y,z,args){
var or__3824__auto____8684 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8684))
{return or__3824__auto____8684;
} else
{return cljs.core.some.call(null,(function (p1__8373_SHARP_){
return cljs.core.some.call(null,p1__8373_SHARP_,args);
}),ps__8676);
}
};
var G__8692 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8692__delegate.call(this, x, y, z, args);
};
G__8692.cljs$lang$maxFixedArity = 3;
G__8692.cljs$lang$applyTo = (function (arglist__8693){
var x = cljs.core.first(arglist__8693);
var y = cljs.core.first(cljs.core.next(arglist__8693));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8693)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8693)));
return G__8692__delegate(x, y, z, args);
});
G__8692.cljs$lang$arity$variadic = G__8692__delegate;
return G__8692;
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
var G__8691 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8691__delegate.call(this, p1, p2, p3, ps);
};
G__8691.cljs$lang$maxFixedArity = 3;
G__8691.cljs$lang$applyTo = (function (arglist__8694){
var p1 = cljs.core.first(arglist__8694);
var p2 = cljs.core.first(cljs.core.next(arglist__8694));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8694)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8694)));
return G__8691__delegate(p1, p2, p3, ps);
});
G__8691.cljs$lang$arity$variadic = G__8691__delegate;
return G__8691;
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
var temp__3974__auto____8713 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8713)
{var s__8714 = temp__3974__auto____8713;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8714))
{var c__8715 = cljs.core.chunk_first.call(null,s__8714);
var size__8716 = cljs.core.count.call(null,c__8715);
var b__8717 = cljs.core.chunk_buffer.call(null,size__8716);
var n__2685__auto____8718 = size__8716;
var i__8719 = 0;
while(true){
if((i__8719 < n__2685__auto____8718))
{cljs.core.chunk_append.call(null,b__8717,f.call(null,cljs.core._nth.call(null,c__8715,i__8719)));
{
var G__8731 = (i__8719 + 1);
i__8719 = G__8731;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8717),map.call(null,f,cljs.core.chunk_rest.call(null,s__8714)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8714)),map.call(null,f,cljs.core.rest.call(null,s__8714)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8720 = cljs.core.seq.call(null,c1);
var s2__8721 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8722 = s1__8720;
if(and__3822__auto____8722)
{return s2__8721;
} else
{return and__3822__auto____8722;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8720),cljs.core.first.call(null,s2__8721)),map.call(null,f,cljs.core.rest.call(null,s1__8720),cljs.core.rest.call(null,s2__8721)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8723 = cljs.core.seq.call(null,c1);
var s2__8724 = cljs.core.seq.call(null,c2);
var s3__8725 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8726 = s1__8723;
if(and__3822__auto____8726)
{var and__3822__auto____8727 = s2__8724;
if(and__3822__auto____8727)
{return s3__8725;
} else
{return and__3822__auto____8727;
}
} else
{return and__3822__auto____8726;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8723),cljs.core.first.call(null,s2__8724),cljs.core.first.call(null,s3__8725)),map.call(null,f,cljs.core.rest.call(null,s1__8723),cljs.core.rest.call(null,s2__8724),cljs.core.rest.call(null,s3__8725)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8732__delegate = function (f,c1,c2,c3,colls){
var step__8730 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8729 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8729))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8729),step.call(null,map.call(null,cljs.core.rest,ss__8729)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__8534_SHARP_){
return cljs.core.apply.call(null,f,p1__8534_SHARP_);
}),step__8730.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8732 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8732__delegate.call(this, f, c1, c2, c3, colls);
};
G__8732.cljs$lang$maxFixedArity = 4;
G__8732.cljs$lang$applyTo = (function (arglist__8733){
var f = cljs.core.first(arglist__8733);
var c1 = cljs.core.first(cljs.core.next(arglist__8733));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8733)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8733))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8733))));
return G__8732__delegate(f, c1, c2, c3, colls);
});
G__8732.cljs$lang$arity$variadic = G__8732__delegate;
return G__8732;
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
{var temp__3974__auto____8736 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8736)
{var s__8737 = temp__3974__auto____8736;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8737),take.call(null,(n - 1),cljs.core.rest.call(null,s__8737)));
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
var step__8743 = (function (n,coll){
while(true){
var s__8741 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8742 = (n > 0);
if(and__3822__auto____8742)
{return s__8741;
} else
{return and__3822__auto____8742;
}
})()))
{{
var G__8744 = (n - 1);
var G__8745 = cljs.core.rest.call(null,s__8741);
n = G__8744;
coll = G__8745;
continue;
}
} else
{return s__8741;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8743.call(null,n,coll);
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
var s__8748 = cljs.core.seq.call(null,coll);
var lead__8749 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8749)
{{
var G__8750 = cljs.core.next.call(null,s__8748);
var G__8751 = cljs.core.next.call(null,lead__8749);
s__8748 = G__8750;
lead__8749 = G__8751;
continue;
}
} else
{return s__8748;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8757 = (function (pred,coll){
while(true){
var s__8755 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8756 = s__8755;
if(and__3822__auto____8756)
{return pred.call(null,cljs.core.first.call(null,s__8755));
} else
{return and__3822__auto____8756;
}
})()))
{{
var G__8758 = pred;
var G__8759 = cljs.core.rest.call(null,s__8755);
pred = G__8758;
coll = G__8759;
continue;
}
} else
{return s__8755;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8757.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8762 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8762)
{var s__8763 = temp__3974__auto____8762;
return cljs.core.concat.call(null,s__8763,cycle.call(null,s__8763));
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
var s1__8768 = cljs.core.seq.call(null,c1);
var s2__8769 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8770 = s1__8768;
if(and__3822__auto____8770)
{return s2__8769;
} else
{return and__3822__auto____8770;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8768),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8769),interleave.call(null,cljs.core.rest.call(null,s1__8768),cljs.core.rest.call(null,s2__8769))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8772__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8771 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8771))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8771),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8771)));
} else
{return null;
}
}),null));
};
var G__8772 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8772__delegate.call(this, c1, c2, colls);
};
G__8772.cljs$lang$maxFixedArity = 2;
G__8772.cljs$lang$applyTo = (function (arglist__8773){
var c1 = cljs.core.first(arglist__8773);
var c2 = cljs.core.first(cljs.core.next(arglist__8773));
var colls = cljs.core.rest(cljs.core.next(arglist__8773));
return G__8772__delegate(c1, c2, colls);
});
G__8772.cljs$lang$arity$variadic = G__8772__delegate;
return G__8772;
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
var cat__8783 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8781 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____8781)
{var coll__8782 = temp__3971__auto____8781;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8782),cat.call(null,cljs.core.rest.call(null,coll__8782),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8783.call(null,null,colls);
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
var G__8784__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8784 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8784__delegate.call(this, f, coll, colls);
};
G__8784.cljs$lang$maxFixedArity = 2;
G__8784.cljs$lang$applyTo = (function (arglist__8785){
var f = cljs.core.first(arglist__8785);
var coll = cljs.core.first(cljs.core.next(arglist__8785));
var colls = cljs.core.rest(cljs.core.next(arglist__8785));
return G__8784__delegate(f, coll, colls);
});
G__8784.cljs$lang$arity$variadic = G__8784__delegate;
return G__8784;
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
var temp__3974__auto____8795 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8795)
{var s__8796 = temp__3974__auto____8795;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8796))
{var c__8797 = cljs.core.chunk_first.call(null,s__8796);
var size__8798 = cljs.core.count.call(null,c__8797);
var b__8799 = cljs.core.chunk_buffer.call(null,size__8798);
var n__2685__auto____8800 = size__8798;
var i__8801 = 0;
while(true){
if((i__8801 < n__2685__auto____8800))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8797,i__8801))))
{cljs.core.chunk_append.call(null,b__8799,cljs.core._nth.call(null,c__8797,i__8801));
} else
{}
{
var G__8804 = (i__8801 + 1);
i__8801 = G__8804;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8799),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8796)));
} else
{var f__8802 = cljs.core.first.call(null,s__8796);
var r__8803 = cljs.core.rest.call(null,s__8796);
if(cljs.core.truth_(pred.call(null,f__8802)))
{return cljs.core.cons.call(null,f__8802,filter.call(null,pred,r__8803));
} else
{return filter.call(null,pred,r__8803);
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
var walk__8807 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8807.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8805_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8805_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8811__8812 = to;
if(G__8811__8812)
{if((function (){var or__3824__auto____8813 = (G__8811__8812.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8813)
{return or__3824__auto____8813;
} else
{return G__8811__8812.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8811__8812.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8811__8812);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8811__8812);
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
var G__8814__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8814 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8814__delegate.call(this, f, c1, c2, c3, colls);
};
G__8814.cljs$lang$maxFixedArity = 4;
G__8814.cljs$lang$applyTo = (function (arglist__8815){
var f = cljs.core.first(arglist__8815);
var c1 = cljs.core.first(cljs.core.next(arglist__8815));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8815)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8815))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8815))));
return G__8814__delegate(f, c1, c2, c3, colls);
});
G__8814.cljs$lang$arity$variadic = G__8814__delegate;
return G__8814;
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
var temp__3974__auto____8822 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8822)
{var s__8823 = temp__3974__auto____8822;
var p__8824 = cljs.core.take.call(null,n,s__8823);
if((n === cljs.core.count.call(null,p__8824)))
{return cljs.core.cons.call(null,p__8824,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8823)));
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
var temp__3974__auto____8825 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8825)
{var s__8826 = temp__3974__auto____8825;
var p__8827 = cljs.core.take.call(null,n,s__8826);
if((n === cljs.core.count.call(null,p__8827)))
{return cljs.core.cons.call(null,p__8827,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8826)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8827,pad)));
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
var sentinel__8832 = cljs.core.lookup_sentinel;
var m__8833 = m;
var ks__8834 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8834)
{var m__8835 = cljs.core._lookup.call(null,m__8833,cljs.core.first.call(null,ks__8834),sentinel__8832);
if((sentinel__8832 === m__8835))
{return not_found;
} else
{{
var G__8836 = sentinel__8832;
var G__8837 = m__8835;
var G__8838 = cljs.core.next.call(null,ks__8834);
sentinel__8832 = G__8836;
m__8833 = G__8837;
ks__8834 = G__8838;
continue;
}
}
} else
{return m__8833;
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
cljs.core.assoc_in = (function assoc_in(m,p__8839,v){
var vec__8844__8845 = p__8839;
var k__8846 = cljs.core.nth.call(null,vec__8844__8845,0,null);
var ks__8847 = cljs.core.nthnext.call(null,vec__8844__8845,1);
if(cljs.core.truth_(ks__8847))
{return cljs.core.assoc.call(null,m,k__8846,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8846,null),ks__8847,v));
} else
{return cljs.core.assoc.call(null,m,k__8846,v);
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
var update_in__delegate = function (m,p__8848,f,args){
var vec__8853__8854 = p__8848;
var k__8855 = cljs.core.nth.call(null,vec__8853__8854,0,null);
var ks__8856 = cljs.core.nthnext.call(null,vec__8853__8854,1);
if(cljs.core.truth_(ks__8856))
{return cljs.core.assoc.call(null,m,k__8855,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8855,null),ks__8856,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8855,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8855,null),args));
}
};
var update_in = function (m,p__8848,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8848, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8857){
var m = cljs.core.first(arglist__8857);
var p__8848 = cljs.core.first(cljs.core.next(arglist__8857));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8857)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8857)));
return update_in__delegate(m, p__8848, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8860 = this;
var h__2346__auto____8861 = this__8860.__hash;
if(!((h__2346__auto____8861 == null)))
{return h__2346__auto____8861;
} else
{var h__2346__auto____8862 = cljs.core.hash_coll.call(null,coll);
this__8860.__hash = h__2346__auto____8862;
return h__2346__auto____8862;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8863 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8864 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8865 = this;
var new_array__8866 = this__8865.array.slice();
(new_array__8866[k] = v);
return (new cljs.core.Vector(this__8865.meta,new_array__8866,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8897 = null;
var G__8897__2 = (function (this_sym8867,k){
var this__8869 = this;
var this_sym8867__8870 = this;
var coll__8871 = this_sym8867__8870;
return coll__8871.cljs$core$ILookup$_lookup$arity$2(coll__8871,k);
});
var G__8897__3 = (function (this_sym8868,k,not_found){
var this__8869 = this;
var this_sym8868__8872 = this;
var coll__8873 = this_sym8868__8872;
return coll__8873.cljs$core$ILookup$_lookup$arity$3(coll__8873,k,not_found);
});
G__8897 = function(this_sym8868,k,not_found){
switch(arguments.length){
case 2:
return G__8897__2.call(this,this_sym8868,k);
case 3:
return G__8897__3.call(this,this_sym8868,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8897;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8858,args8859){
var this__8874 = this;
return this_sym8858.call.apply(this_sym8858,[this_sym8858].concat(args8859.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8875 = this;
var new_array__8876 = this__8875.array.slice();
new_array__8876.push(o);
return (new cljs.core.Vector(this__8875.meta,new_array__8876,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8877 = this;
var this__8878 = this;
return cljs.core.pr_str.call(null,this__8878);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8879 = this;
return cljs.core.ci_reduce.call(null,this__8879.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8880 = this;
return cljs.core.ci_reduce.call(null,this__8880.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8881 = this;
if((this__8881.array.length > 0))
{var vector_seq__8882 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8881.array.length))
{return cljs.core.cons.call(null,(this__8881.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8882.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8883 = this;
return this__8883.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8884 = this;
var count__8885 = this__8884.array.length;
if((count__8885 > 0))
{return (this__8884.array[(count__8885 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8886 = this;
if((this__8886.array.length > 0))
{var new_array__8887 = this__8886.array.slice();
new_array__8887.pop();
return (new cljs.core.Vector(this__8886.meta,new_array__8887,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8888 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8889 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8890 = this;
return (new cljs.core.Vector(meta,this__8890.array,this__8890.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8891 = this;
return this__8891.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8892 = this;
if((function (){var and__3822__auto____8893 = (0 <= n);
if(and__3822__auto____8893)
{return (n < this__8892.array.length);
} else
{return and__3822__auto____8893;
}
})())
{return (this__8892.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8894 = this;
if((function (){var and__3822__auto____8895 = (0 <= n);
if(and__3822__auto____8895)
{return (n < this__8894.array.length);
} else
{return and__3822__auto____8895;
}
})())
{return (this__8894.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8896 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8896.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2464__auto__){
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
var cnt__8899 = pv.cnt;
if((cnt__8899 < 32))
{return 0;
} else
{return (((cnt__8899 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8905 = level;
var ret__8906 = node;
while(true){
if((ll__8905 === 0))
{return ret__8906;
} else
{var embed__8907 = ret__8906;
var r__8908 = cljs.core.pv_fresh_node.call(null,edit);
var ___8909 = cljs.core.pv_aset.call(null,r__8908,0,embed__8907);
{
var G__8910 = (ll__8905 - 5);
var G__8911 = r__8908;
ll__8905 = G__8910;
ret__8906 = G__8911;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8917 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8918 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8917,subidx__8918,tailnode);
return ret__8917;
} else
{var child__8919 = cljs.core.pv_aget.call(null,parent,subidx__8918);
if(!((child__8919 == null)))
{var node_to_insert__8920 = push_tail.call(null,pv,(level - 5),child__8919,tailnode);
cljs.core.pv_aset.call(null,ret__8917,subidx__8918,node_to_insert__8920);
return ret__8917;
} else
{var node_to_insert__8921 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8917,subidx__8918,node_to_insert__8921);
return ret__8917;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8925 = (0 <= i);
if(and__3822__auto____8925)
{return (i < pv.cnt);
} else
{return and__3822__auto____8925;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8926 = pv.root;
var level__8927 = pv.shift;
while(true){
if((level__8927 > 0))
{{
var G__8928 = cljs.core.pv_aget.call(null,node__8926,((i >>> level__8927) & 31));
var G__8929 = (level__8927 - 5);
node__8926 = G__8928;
level__8927 = G__8929;
continue;
}
} else
{return node__8926.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8932 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8932,(i & 31),val);
return ret__8932;
} else
{var subidx__8933 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8932,subidx__8933,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8933),i,val));
return ret__8932;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8939 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8940 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8939));
if((function (){var and__3822__auto____8941 = (new_child__8940 == null);
if(and__3822__auto____8941)
{return (subidx__8939 === 0);
} else
{return and__3822__auto____8941;
}
})())
{return null;
} else
{var ret__8942 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8942,subidx__8939,new_child__8940);
return ret__8942;
}
} else
{if((subidx__8939 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8943 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8943,subidx__8939,null);
return ret__8943;
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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8946 = this;
return (new cljs.core.TransientVector(this__8946.cnt,this__8946.shift,cljs.core.tv_editable_root.call(null,this__8946.root),cljs.core.tv_editable_tail.call(null,this__8946.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8947 = this;
var h__2346__auto____8948 = this__8947.__hash;
if(!((h__2346__auto____8948 == null)))
{return h__2346__auto____8948;
} else
{var h__2346__auto____8949 = cljs.core.hash_coll.call(null,coll);
this__8947.__hash = h__2346__auto____8949;
return h__2346__auto____8949;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8950 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8951 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8952 = this;
if((function (){var and__3822__auto____8953 = (0 <= k);
if(and__3822__auto____8953)
{return (k < this__8952.cnt);
} else
{return and__3822__auto____8953;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8954 = this__8952.tail.slice();
(new_tail__8954[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8952.meta,this__8952.cnt,this__8952.shift,this__8952.root,new_tail__8954,null));
} else
{return (new cljs.core.PersistentVector(this__8952.meta,this__8952.cnt,this__8952.shift,cljs.core.do_assoc.call(null,coll,this__8952.shift,this__8952.root,k,v),this__8952.tail,null));
}
} else
{if((k === this__8952.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8952.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__9002 = null;
var G__9002__2 = (function (this_sym8955,k){
var this__8957 = this;
var this_sym8955__8958 = this;
var coll__8959 = this_sym8955__8958;
return coll__8959.cljs$core$ILookup$_lookup$arity$2(coll__8959,k);
});
var G__9002__3 = (function (this_sym8956,k,not_found){
var this__8957 = this;
var this_sym8956__8960 = this;
var coll__8961 = this_sym8956__8960;
return coll__8961.cljs$core$ILookup$_lookup$arity$3(coll__8961,k,not_found);
});
G__9002 = function(this_sym8956,k,not_found){
switch(arguments.length){
case 2:
return G__9002__2.call(this,this_sym8956,k);
case 3:
return G__9002__3.call(this,this_sym8956,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9002;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8944,args8945){
var this__8962 = this;
return this_sym8944.call.apply(this_sym8944,[this_sym8944].concat(args8945.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8963 = this;
var step_init__8964 = [0,init];
var i__8965 = 0;
while(true){
if((i__8965 < this__8963.cnt))
{var arr__8966 = cljs.core.array_for.call(null,v,i__8965);
var len__8967 = arr__8966.length;
var init__8971 = (function (){var j__8968 = 0;
var init__8969 = (step_init__8964[1]);
while(true){
if((j__8968 < len__8967))
{var init__8970 = f.call(null,init__8969,(j__8968 + i__8965),(arr__8966[j__8968]));
if(cljs.core.reduced_QMARK_.call(null,init__8970))
{return init__8970;
} else
{{
var G__9003 = (j__8968 + 1);
var G__9004 = init__8970;
j__8968 = G__9003;
init__8969 = G__9004;
continue;
}
}
} else
{(step_init__8964[0] = len__8967);
(step_init__8964[1] = init__8969);
return init__8969;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8971))
{return cljs.core.deref.call(null,init__8971);
} else
{{
var G__9005 = (i__8965 + (step_init__8964[0]));
i__8965 = G__9005;
continue;
}
}
} else
{return (step_init__8964[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8972 = this;
if(((this__8972.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8973 = this__8972.tail.slice();
new_tail__8973.push(o);
return (new cljs.core.PersistentVector(this__8972.meta,(this__8972.cnt + 1),this__8972.shift,this__8972.root,new_tail__8973,null));
} else
{var root_overflow_QMARK___8974 = ((this__8972.cnt >>> 5) > (1 << this__8972.shift));
var new_shift__8975 = ((root_overflow_QMARK___8974)?(this__8972.shift + 5):this__8972.shift);
var new_root__8977 = ((root_overflow_QMARK___8974)?(function (){var n_r__8976 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8976,0,this__8972.root);
cljs.core.pv_aset.call(null,n_r__8976,1,cljs.core.new_path.call(null,null,this__8972.shift,(new cljs.core.VectorNode(null,this__8972.tail))));
return n_r__8976;
})():cljs.core.push_tail.call(null,coll,this__8972.shift,this__8972.root,(new cljs.core.VectorNode(null,this__8972.tail))));
return (new cljs.core.PersistentVector(this__8972.meta,(this__8972.cnt + 1),new_shift__8975,new_root__8977,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8978 = this;
if((this__8978.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8978.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8979 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8980 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8981 = this;
var this__8982 = this;
return cljs.core.pr_str.call(null,this__8982);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8983 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8984 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8985 = this;
if((this__8985.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8986 = this;
return this__8986.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8987 = this;
if((this__8987.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8987.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8988 = this;
if((this__8988.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8988.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8988.meta);
} else
{if((1 < (this__8988.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8988.meta,(this__8988.cnt - 1),this__8988.shift,this__8988.root,this__8988.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8989 = cljs.core.array_for.call(null,coll,(this__8988.cnt - 2));
var nr__8990 = cljs.core.pop_tail.call(null,coll,this__8988.shift,this__8988.root);
var new_root__8991 = (((nr__8990 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8990);
var cnt_1__8992 = (this__8988.cnt - 1);
if((function (){var and__3822__auto____8993 = (5 < this__8988.shift);
if(and__3822__auto____8993)
{return (cljs.core.pv_aget.call(null,new_root__8991,1) == null);
} else
{return and__3822__auto____8993;
}
})())
{return (new cljs.core.PersistentVector(this__8988.meta,cnt_1__8992,(this__8988.shift - 5),cljs.core.pv_aget.call(null,new_root__8991,0),new_tail__8989,null));
} else
{return (new cljs.core.PersistentVector(this__8988.meta,cnt_1__8992,this__8988.shift,new_root__8991,new_tail__8989,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8994 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8995 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8996 = this;
return (new cljs.core.PersistentVector(meta,this__8996.cnt,this__8996.shift,this__8996.root,this__8996.tail,this__8996.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8997 = this;
return this__8997.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8998 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8999 = this;
if((function (){var and__3822__auto____9000 = (0 <= n);
if(and__3822__auto____9000)
{return (n < this__8999.cnt);
} else
{return and__3822__auto____9000;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9001 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9001.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__9006 = xs.length;
var xs__9007 = (((no_clone === true))?xs:xs.slice());
if((l__9006 < 32))
{return (new cljs.core.PersistentVector(null,l__9006,5,cljs.core.PersistentVector.EMPTY_NODE,xs__9007,null));
} else
{var node__9008 = xs__9007.slice(0,32);
var v__9009 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__9008,null));
var i__9010 = 32;
var out__9011 = cljs.core._as_transient.call(null,v__9009);
while(true){
if((i__9010 < l__9006))
{{
var G__9012 = (i__9010 + 1);
var G__9013 = cljs.core.conj_BANG_.call(null,out__9011,(xs__9007[i__9010]));
i__9010 = G__9012;
out__9011 = G__9013;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9011);
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
vector.cljs$lang$applyTo = (function (arglist__9014){
var args = cljs.core.seq(arglist__9014);;
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9015 = this;
if(((this__9015.off + 1) < this__9015.node.length))
{var s__9016 = cljs.core.chunked_seq.call(null,this__9015.vec,this__9015.node,this__9015.i,(this__9015.off + 1));
if((s__9016 == null))
{return null;
} else
{return s__9016;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9017 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9018 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9019 = this;
return (this__9019.node[this__9019.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9020 = this;
if(((this__9020.off + 1) < this__9020.node.length))
{var s__9021 = cljs.core.chunked_seq.call(null,this__9020.vec,this__9020.node,this__9020.i,(this__9020.off + 1));
if((s__9021 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9021;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9022 = this;
var l__9023 = this__9022.node.length;
var s__9024 = ((((this__9022.i + l__9023) < cljs.core._count.call(null,this__9022.vec)))?cljs.core.chunked_seq.call(null,this__9022.vec,(this__9022.i + l__9023),0):null);
if((s__9024 == null))
{return null;
} else
{return s__9024;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9025 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9026 = this;
return cljs.core.chunked_seq.call(null,this__9026.vec,this__9026.node,this__9026.i,this__9026.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__9027 = this;
return this__9027.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9028 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9028.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9029 = this;
return cljs.core.array_chunk.call(null,this__9029.node,this__9029.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9030 = this;
var l__9031 = this__9030.node.length;
var s__9032 = ((((this__9030.i + l__9031) < cljs.core._count.call(null,this__9030.vec)))?cljs.core.chunked_seq.call(null,this__9030.vec,(this__9030.i + l__9031),0):null);
if((s__9032 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9032;
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9035 = this;
var h__2346__auto____9036 = this__9035.__hash;
if(!((h__2346__auto____9036 == null)))
{return h__2346__auto____9036;
} else
{var h__2346__auto____9037 = cljs.core.hash_coll.call(null,coll);
this__9035.__hash = h__2346__auto____9037;
return h__2346__auto____9037;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9038 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9039 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__9040 = this;
var v_pos__9041 = (this__9040.start + key);
return (new cljs.core.Subvec(this__9040.meta,cljs.core._assoc.call(null,this__9040.v,v_pos__9041,val),this__9040.start,((this__9040.end > (v_pos__9041 + 1)) ? this__9040.end : (v_pos__9041 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__9067 = null;
var G__9067__2 = (function (this_sym9042,k){
var this__9044 = this;
var this_sym9042__9045 = this;
var coll__9046 = this_sym9042__9045;
return coll__9046.cljs$core$ILookup$_lookup$arity$2(coll__9046,k);
});
var G__9067__3 = (function (this_sym9043,k,not_found){
var this__9044 = this;
var this_sym9043__9047 = this;
var coll__9048 = this_sym9043__9047;
return coll__9048.cljs$core$ILookup$_lookup$arity$3(coll__9048,k,not_found);
});
G__9067 = function(this_sym9043,k,not_found){
switch(arguments.length){
case 2:
return G__9067__2.call(this,this_sym9043,k);
case 3:
return G__9067__3.call(this,this_sym9043,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9067;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym9033,args9034){
var this__9049 = this;
return this_sym9033.call.apply(this_sym9033,[this_sym9033].concat(args9034.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9050 = this;
return (new cljs.core.Subvec(this__9050.meta,cljs.core._assoc_n.call(null,this__9050.v,this__9050.end,o),this__9050.start,(this__9050.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__9051 = this;
var this__9052 = this;
return cljs.core.pr_str.call(null,this__9052);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9053 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9054 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9055 = this;
var subvec_seq__9056 = (function subvec_seq(i){
if((i === this__9055.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__9055.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__9056.call(null,this__9055.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9057 = this;
return (this__9057.end - this__9057.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9058 = this;
return cljs.core._nth.call(null,this__9058.v,(this__9058.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9059 = this;
if((this__9059.start === this__9059.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__9059.meta,this__9059.v,this__9059.start,(this__9059.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9060 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9061 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9062 = this;
return (new cljs.core.Subvec(meta,this__9062.v,this__9062.start,this__9062.end,this__9062.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9063 = this;
return this__9063.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9064 = this;
return cljs.core._nth.call(null,this__9064.v,(this__9064.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9065 = this;
return cljs.core._nth.call(null,this__9065.v,(this__9065.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9066 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9066.meta);
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
var ret__9069 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__9069,0,tl.length);
return ret__9069;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__9073 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__9074 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__9073,subidx__9074,(((level === 5))?tail_node:(function (){var child__9075 = cljs.core.pv_aget.call(null,ret__9073,subidx__9074);
if(!((child__9075 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__9075,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__9073;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__9080 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__9081 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9082 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__9080,subidx__9081));
if((function (){var and__3822__auto____9083 = (new_child__9082 == null);
if(and__3822__auto____9083)
{return (subidx__9081 === 0);
} else
{return and__3822__auto____9083;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__9080,subidx__9081,new_child__9082);
return node__9080;
}
} else
{if((subidx__9081 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__9080,subidx__9081,null);
return node__9080;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____9088 = (0 <= i);
if(and__3822__auto____9088)
{return (i < tv.cnt);
} else
{return and__3822__auto____9088;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__9089 = tv.root;
var node__9090 = root__9089;
var level__9091 = tv.shift;
while(true){
if((level__9091 > 0))
{{
var G__9092 = cljs.core.tv_ensure_editable.call(null,root__9089.edit,cljs.core.pv_aget.call(null,node__9090,((i >>> level__9091) & 31)));
var G__9093 = (level__9091 - 5);
node__9090 = G__9092;
level__9091 = G__9093;
continue;
}
} else
{return node__9090.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__9133 = null;
var G__9133__2 = (function (this_sym9096,k){
var this__9098 = this;
var this_sym9096__9099 = this;
var coll__9100 = this_sym9096__9099;
return coll__9100.cljs$core$ILookup$_lookup$arity$2(coll__9100,k);
});
var G__9133__3 = (function (this_sym9097,k,not_found){
var this__9098 = this;
var this_sym9097__9101 = this;
var coll__9102 = this_sym9097__9101;
return coll__9102.cljs$core$ILookup$_lookup$arity$3(coll__9102,k,not_found);
});
G__9133 = function(this_sym9097,k,not_found){
switch(arguments.length){
case 2:
return G__9133__2.call(this,this_sym9097,k);
case 3:
return G__9133__3.call(this,this_sym9097,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9133;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym9094,args9095){
var this__9103 = this;
return this_sym9094.call.apply(this_sym9094,[this_sym9094].concat(args9095.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9104 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9105 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9106 = this;
if(this__9106.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9107 = this;
if((function (){var and__3822__auto____9108 = (0 <= n);
if(and__3822__auto____9108)
{return (n < this__9107.cnt);
} else
{return and__3822__auto____9108;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9109 = this;
if(this__9109.root.edit)
{return this__9109.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__9110 = this;
if(this__9110.root.edit)
{if((function (){var and__3822__auto____9111 = (0 <= n);
if(and__3822__auto____9111)
{return (n < this__9110.cnt);
} else
{return and__3822__auto____9111;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__9110.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__9116 = (function go(level,node){
var node__9114 = cljs.core.tv_ensure_editable.call(null,this__9110.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__9114,(n & 31),val);
return node__9114;
} else
{var subidx__9115 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__9114,subidx__9115,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__9114,subidx__9115)));
return node__9114;
}
}).call(null,this__9110.shift,this__9110.root);
this__9110.root = new_root__9116;
return tcoll;
}
} else
{if((n === this__9110.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__9110.cnt)].join('')));
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
var this__9117 = this;
if(this__9117.root.edit)
{if((this__9117.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9117.cnt))
{this__9117.cnt = 0;
return tcoll;
} else
{if((((this__9117.cnt - 1) & 31) > 0))
{this__9117.cnt = (this__9117.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__9118 = cljs.core.editable_array_for.call(null,tcoll,(this__9117.cnt - 2));
var new_root__9120 = (function (){var nr__9119 = cljs.core.tv_pop_tail.call(null,tcoll,this__9117.shift,this__9117.root);
if(!((nr__9119 == null)))
{return nr__9119;
} else
{return (new cljs.core.VectorNode(this__9117.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____9121 = (5 < this__9117.shift);
if(and__3822__auto____9121)
{return (cljs.core.pv_aget.call(null,new_root__9120,1) == null);
} else
{return and__3822__auto____9121;
}
})())
{var new_root__9122 = cljs.core.tv_ensure_editable.call(null,this__9117.root.edit,cljs.core.pv_aget.call(null,new_root__9120,0));
this__9117.root = new_root__9122;
this__9117.shift = (this__9117.shift - 5);
this__9117.cnt = (this__9117.cnt - 1);
this__9117.tail = new_tail__9118;
return tcoll;
} else
{this__9117.root = new_root__9120;
this__9117.cnt = (this__9117.cnt - 1);
this__9117.tail = new_tail__9118;
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
var this__9123 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9124 = this;
if(this__9124.root.edit)
{if(((this__9124.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__9124.tail[(this__9124.cnt & 31)] = o);
this__9124.cnt = (this__9124.cnt + 1);
return tcoll;
} else
{var tail_node__9125 = (new cljs.core.VectorNode(this__9124.root.edit,this__9124.tail));
var new_tail__9126 = cljs.core.make_array.call(null,32);
(new_tail__9126[0] = o);
this__9124.tail = new_tail__9126;
if(((this__9124.cnt >>> 5) > (1 << this__9124.shift)))
{var new_root_array__9127 = cljs.core.make_array.call(null,32);
var new_shift__9128 = (this__9124.shift + 5);
(new_root_array__9127[0] = this__9124.root);
(new_root_array__9127[1] = cljs.core.new_path.call(null,this__9124.root.edit,this__9124.shift,tail_node__9125));
this__9124.root = (new cljs.core.VectorNode(this__9124.root.edit,new_root_array__9127));
this__9124.shift = new_shift__9128;
this__9124.cnt = (this__9124.cnt + 1);
return tcoll;
} else
{var new_root__9129 = cljs.core.tv_push_tail.call(null,tcoll,this__9124.shift,this__9124.root,tail_node__9125);
this__9124.root = new_root__9129;
this__9124.cnt = (this__9124.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9130 = this;
if(this__9130.root.edit)
{this__9130.root.edit = null;
var len__9131 = (this__9130.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__9132 = cljs.core.make_array.call(null,len__9131);
cljs.core.array_copy.call(null,this__9130.tail,0,trimmed_tail__9132,0,len__9131);
return (new cljs.core.PersistentVector(null,this__9130.cnt,this__9130.shift,this__9130.root,trimmed_tail__9132,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9134 = this;
var h__2346__auto____9135 = this__9134.__hash;
if(!((h__2346__auto____9135 == null)))
{return h__2346__auto____9135;
} else
{var h__2346__auto____9136 = cljs.core.hash_coll.call(null,coll);
this__9134.__hash = h__2346__auto____9136;
return h__2346__auto____9136;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9137 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__9138 = this;
var this__9139 = this;
return cljs.core.pr_str.call(null,this__9139);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9140 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9141 = this;
return cljs.core._first.call(null,this__9141.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9142 = this;
var temp__3971__auto____9143 = cljs.core.next.call(null,this__9142.front);
if(temp__3971__auto____9143)
{var f1__9144 = temp__3971__auto____9143;
return (new cljs.core.PersistentQueueSeq(this__9142.meta,f1__9144,this__9142.rear,null));
} else
{if((this__9142.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__9142.meta,this__9142.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9145 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9146 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__9146.front,this__9146.rear,this__9146.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9147 = this;
return this__9147.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9148 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9148.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9149 = this;
var h__2346__auto____9150 = this__9149.__hash;
if(!((h__2346__auto____9150 == null)))
{return h__2346__auto____9150;
} else
{var h__2346__auto____9151 = cljs.core.hash_coll.call(null,coll);
this__9149.__hash = h__2346__auto____9151;
return h__2346__auto____9151;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9152 = this;
if(cljs.core.truth_(this__9152.front))
{return (new cljs.core.PersistentQueue(this__9152.meta,(this__9152.count + 1),this__9152.front,cljs.core.conj.call(null,(function (){var or__3824__auto____9153 = this__9152.rear;
if(cljs.core.truth_(or__3824__auto____9153))
{return or__3824__auto____9153;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__9152.meta,(this__9152.count + 1),cljs.core.conj.call(null,this__9152.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__9154 = this;
var this__9155 = this;
return cljs.core.pr_str.call(null,this__9155);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9156 = this;
var rear__9157 = cljs.core.seq.call(null,this__9156.rear);
if(cljs.core.truth_((function (){var or__3824__auto____9158 = this__9156.front;
if(cljs.core.truth_(or__3824__auto____9158))
{return or__3824__auto____9158;
} else
{return rear__9157;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__9156.front,cljs.core.seq.call(null,rear__9157),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9159 = this;
return this__9159.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9160 = this;
return cljs.core._first.call(null,this__9160.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9161 = this;
if(cljs.core.truth_(this__9161.front))
{var temp__3971__auto____9162 = cljs.core.next.call(null,this__9161.front);
if(temp__3971__auto____9162)
{var f1__9163 = temp__3971__auto____9162;
return (new cljs.core.PersistentQueue(this__9161.meta,(this__9161.count - 1),f1__9163,this__9161.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__9161.meta,(this__9161.count - 1),cljs.core.seq.call(null,this__9161.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9164 = this;
return cljs.core.first.call(null,this__9164.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9165 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9166 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9167 = this;
return (new cljs.core.PersistentQueue(meta,this__9167.count,this__9167.front,this__9167.rear,this__9167.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9168 = this;
return this__9168.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9169 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9170 = this;
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
var len__9173 = array.length;
var i__9174 = 0;
while(true){
if((i__9174 < len__9173))
{if((k === (array[i__9174])))
{return i__9174;
} else
{{
var G__9175 = (i__9174 + incr);
i__9174 = G__9175;
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
var a__9178 = cljs.core.hash.call(null,a);
var b__9179 = cljs.core.hash.call(null,b);
if((a__9178 < b__9179))
{return -1;
} else
{if((a__9178 > b__9179))
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
var ks__9187 = m.keys;
var len__9188 = ks__9187.length;
var so__9189 = m.strobj;
var out__9190 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__9191 = 0;
var out__9192 = cljs.core.transient$.call(null,out__9190);
while(true){
if((i__9191 < len__9188))
{var k__9193 = (ks__9187[i__9191]);
{
var G__9194 = (i__9191 + 1);
var G__9195 = cljs.core.assoc_BANG_.call(null,out__9192,k__9193,(so__9189[k__9193]));
i__9191 = G__9194;
out__9192 = G__9195;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__9192,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__9201 = {};
var l__9202 = ks.length;
var i__9203 = 0;
while(true){
if((i__9203 < l__9202))
{var k__9204 = (ks[i__9203]);
(new_obj__9201[k__9204] = (obj[k__9204]));
{
var G__9205 = (i__9203 + 1);
i__9203 = G__9205;
continue;
}
} else
{}
break;
}
return new_obj__9201;
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9208 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9209 = this;
var h__2346__auto____9210 = this__9209.__hash;
if(!((h__2346__auto____9210 == null)))
{return h__2346__auto____9210;
} else
{var h__2346__auto____9211 = cljs.core.hash_imap.call(null,coll);
this__9209.__hash = h__2346__auto____9211;
return h__2346__auto____9211;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9212 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9213 = this;
if((function (){var and__3822__auto____9214 = goog.isString(k);
if(and__3822__auto____9214)
{return !((cljs.core.scan_array.call(null,1,k,this__9213.keys) == null));
} else
{return and__3822__auto____9214;
}
})())
{return (this__9213.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9215 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____9216 = (this__9215.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____9216)
{return or__3824__auto____9216;
} else
{return (this__9215.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__9215.keys) == null)))
{var new_strobj__9217 = cljs.core.obj_clone.call(null,this__9215.strobj,this__9215.keys);
(new_strobj__9217[k] = v);
return (new cljs.core.ObjMap(this__9215.meta,this__9215.keys,new_strobj__9217,(this__9215.update_count + 1),null));
} else
{var new_strobj__9218 = cljs.core.obj_clone.call(null,this__9215.strobj,this__9215.keys);
var new_keys__9219 = this__9215.keys.slice();
(new_strobj__9218[k] = v);
new_keys__9219.push(k);
return (new cljs.core.ObjMap(this__9215.meta,new_keys__9219,new_strobj__9218,(this__9215.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9220 = this;
if((function (){var and__3822__auto____9221 = goog.isString(k);
if(and__3822__auto____9221)
{return !((cljs.core.scan_array.call(null,1,k,this__9220.keys) == null));
} else
{return and__3822__auto____9221;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__9243 = null;
var G__9243__2 = (function (this_sym9222,k){
var this__9224 = this;
var this_sym9222__9225 = this;
var coll__9226 = this_sym9222__9225;
return coll__9226.cljs$core$ILookup$_lookup$arity$2(coll__9226,k);
});
var G__9243__3 = (function (this_sym9223,k,not_found){
var this__9224 = this;
var this_sym9223__9227 = this;
var coll__9228 = this_sym9223__9227;
return coll__9228.cljs$core$ILookup$_lookup$arity$3(coll__9228,k,not_found);
});
G__9243 = function(this_sym9223,k,not_found){
switch(arguments.length){
case 2:
return G__9243__2.call(this,this_sym9223,k);
case 3:
return G__9243__3.call(this,this_sym9223,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9243;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym9206,args9207){
var this__9229 = this;
return this_sym9206.call.apply(this_sym9206,[this_sym9206].concat(args9207.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9230 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__9231 = this;
var this__9232 = this;
return cljs.core.pr_str.call(null,this__9232);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9233 = this;
if((this__9233.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__9196_SHARP_){
return cljs.core.vector.call(null,p1__9196_SHARP_,(this__9233.strobj[p1__9196_SHARP_]));
}),this__9233.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9234 = this;
return this__9234.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9235 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9236 = this;
return (new cljs.core.ObjMap(meta,this__9236.keys,this__9236.strobj,this__9236.update_count,this__9236.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9237 = this;
return this__9237.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9238 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__9238.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9239 = this;
if((function (){var and__3822__auto____9240 = goog.isString(k);
if(and__3822__auto____9240)
{return !((cljs.core.scan_array.call(null,1,k,this__9239.keys) == null));
} else
{return and__3822__auto____9240;
}
})())
{var new_keys__9241 = this__9239.keys.slice();
var new_strobj__9242 = cljs.core.obj_clone.call(null,this__9239.strobj,this__9239.keys);
new_keys__9241.splice(cljs.core.scan_array.call(null,1,k,new_keys__9241),1);
cljs.core.js_delete.call(null,new_strobj__9242,k);
return (new cljs.core.ObjMap(this__9239.meta,new_keys__9241,new_strobj__9242,(this__9239.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9247 = this;
var h__2346__auto____9248 = this__9247.__hash;
if(!((h__2346__auto____9248 == null)))
{return h__2346__auto____9248;
} else
{var h__2346__auto____9249 = cljs.core.hash_imap.call(null,coll);
this__9247.__hash = h__2346__auto____9249;
return h__2346__auto____9249;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9250 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9251 = this;
var bucket__9252 = (this__9251.hashobj[cljs.core.hash.call(null,k)]);
var i__9253 = (cljs.core.truth_(bucket__9252)?cljs.core.scan_array.call(null,2,k,bucket__9252):null);
if(cljs.core.truth_(i__9253))
{return (bucket__9252[(i__9253 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9254 = this;
var h__9255 = cljs.core.hash.call(null,k);
var bucket__9256 = (this__9254.hashobj[h__9255]);
if(cljs.core.truth_(bucket__9256))
{var new_bucket__9257 = bucket__9256.slice();
var new_hashobj__9258 = goog.object.clone(this__9254.hashobj);
(new_hashobj__9258[h__9255] = new_bucket__9257);
var temp__3971__auto____9259 = cljs.core.scan_array.call(null,2,k,new_bucket__9257);
if(cljs.core.truth_(temp__3971__auto____9259))
{var i__9260 = temp__3971__auto____9259;
(new_bucket__9257[(i__9260 + 1)] = v);
return (new cljs.core.HashMap(this__9254.meta,this__9254.count,new_hashobj__9258,null));
} else
{new_bucket__9257.push(k,v);
return (new cljs.core.HashMap(this__9254.meta,(this__9254.count + 1),new_hashobj__9258,null));
}
} else
{var new_hashobj__9261 = goog.object.clone(this__9254.hashobj);
(new_hashobj__9261[h__9255] = [k,v]);
return (new cljs.core.HashMap(this__9254.meta,(this__9254.count + 1),new_hashobj__9261,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9262 = this;
var bucket__9263 = (this__9262.hashobj[cljs.core.hash.call(null,k)]);
var i__9264 = (cljs.core.truth_(bucket__9263)?cljs.core.scan_array.call(null,2,k,bucket__9263):null);
if(cljs.core.truth_(i__9264))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__9289 = null;
var G__9289__2 = (function (this_sym9265,k){
var this__9267 = this;
var this_sym9265__9268 = this;
var coll__9269 = this_sym9265__9268;
return coll__9269.cljs$core$ILookup$_lookup$arity$2(coll__9269,k);
});
var G__9289__3 = (function (this_sym9266,k,not_found){
var this__9267 = this;
var this_sym9266__9270 = this;
var coll__9271 = this_sym9266__9270;
return coll__9271.cljs$core$ILookup$_lookup$arity$3(coll__9271,k,not_found);
});
G__9289 = function(this_sym9266,k,not_found){
switch(arguments.length){
case 2:
return G__9289__2.call(this,this_sym9266,k);
case 3:
return G__9289__3.call(this,this_sym9266,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9289;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym9245,args9246){
var this__9272 = this;
return this_sym9245.call.apply(this_sym9245,[this_sym9245].concat(args9246.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9273 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__9274 = this;
var this__9275 = this;
return cljs.core.pr_str.call(null,this__9275);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9276 = this;
if((this__9276.count > 0))
{var hashes__9277 = cljs.core.js_keys.call(null,this__9276.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__9244_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__9276.hashobj[p1__9244_SHARP_])));
}),hashes__9277);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9278 = this;
return this__9278.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9279 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9280 = this;
return (new cljs.core.HashMap(meta,this__9280.count,this__9280.hashobj,this__9280.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9281 = this;
return this__9281.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9282 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__9282.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9283 = this;
var h__9284 = cljs.core.hash.call(null,k);
var bucket__9285 = (this__9283.hashobj[h__9284]);
var i__9286 = (cljs.core.truth_(bucket__9285)?cljs.core.scan_array.call(null,2,k,bucket__9285):null);
if(cljs.core.not.call(null,i__9286))
{return coll;
} else
{var new_hashobj__9287 = goog.object.clone(this__9283.hashobj);
if((3 > bucket__9285.length))
{cljs.core.js_delete.call(null,new_hashobj__9287,h__9284);
} else
{var new_bucket__9288 = bucket__9285.slice();
new_bucket__9288.splice(i__9286,2);
(new_hashobj__9287[h__9284] = new_bucket__9288);
}
return (new cljs.core.HashMap(this__9283.meta,(this__9283.count - 1),new_hashobj__9287,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__9290 = ks.length;
var i__9291 = 0;
var out__9292 = cljs.core.HashMap.EMPTY;
while(true){
if((i__9291 < len__9290))
{{
var G__9293 = (i__9291 + 1);
var G__9294 = cljs.core.assoc.call(null,out__9292,(ks[i__9291]),(vs[i__9291]));
i__9291 = G__9293;
out__9292 = G__9294;
continue;
}
} else
{return out__9292;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__9298 = m.arr;
var len__9299 = arr__9298.length;
var i__9300 = 0;
while(true){
if((len__9299 <= i__9300))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__9298[i__9300]),k))
{return i__9300;
} else
{if("\uFDD0'else")
{{
var G__9301 = (i__9300 + 2);
i__9300 = G__9301;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9304 = this;
return (new cljs.core.TransientArrayMap({},this__9304.arr.length,this__9304.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9305 = this;
var h__2346__auto____9306 = this__9305.__hash;
if(!((h__2346__auto____9306 == null)))
{return h__2346__auto____9306;
} else
{var h__2346__auto____9307 = cljs.core.hash_imap.call(null,coll);
this__9305.__hash = h__2346__auto____9307;
return h__2346__auto____9307;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9308 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9309 = this;
var idx__9310 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9310 === -1))
{return not_found;
} else
{return (this__9309.arr[(idx__9310 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9311 = this;
var idx__9312 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9312 === -1))
{if((this__9311.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__9311.meta,(this__9311.cnt + 1),(function (){var G__9313__9314 = this__9311.arr.slice();
G__9313__9314.push(k);
G__9313__9314.push(v);
return G__9313__9314;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__9311.arr[(idx__9312 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__9311.meta,this__9311.cnt,(function (){var G__9315__9316 = this__9311.arr.slice();
(G__9315__9316[(idx__9312 + 1)] = v);
return G__9315__9316;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9317 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__9349 = null;
var G__9349__2 = (function (this_sym9318,k){
var this__9320 = this;
var this_sym9318__9321 = this;
var coll__9322 = this_sym9318__9321;
return coll__9322.cljs$core$ILookup$_lookup$arity$2(coll__9322,k);
});
var G__9349__3 = (function (this_sym9319,k,not_found){
var this__9320 = this;
var this_sym9319__9323 = this;
var coll__9324 = this_sym9319__9323;
return coll__9324.cljs$core$ILookup$_lookup$arity$3(coll__9324,k,not_found);
});
G__9349 = function(this_sym9319,k,not_found){
switch(arguments.length){
case 2:
return G__9349__2.call(this,this_sym9319,k);
case 3:
return G__9349__3.call(this,this_sym9319,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9349;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym9302,args9303){
var this__9325 = this;
return this_sym9302.call.apply(this_sym9302,[this_sym9302].concat(args9303.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9326 = this;
var len__9327 = this__9326.arr.length;
var i__9328 = 0;
var init__9329 = init;
while(true){
if((i__9328 < len__9327))
{var init__9330 = f.call(null,init__9329,(this__9326.arr[i__9328]),(this__9326.arr[(i__9328 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__9330))
{return cljs.core.deref.call(null,init__9330);
} else
{{
var G__9350 = (i__9328 + 2);
var G__9351 = init__9330;
i__9328 = G__9350;
init__9329 = G__9351;
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
var this__9331 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__9332 = this;
var this__9333 = this;
return cljs.core.pr_str.call(null,this__9333);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9334 = this;
if((this__9334.cnt > 0))
{var len__9335 = this__9334.arr.length;
var array_map_seq__9336 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__9335))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__9334.arr[i]),(this__9334.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__9336.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9337 = this;
return this__9337.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9338 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9339 = this;
return (new cljs.core.PersistentArrayMap(meta,this__9339.cnt,this__9339.arr,this__9339.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9340 = this;
return this__9340.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9341 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9341.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9342 = this;
var idx__9343 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9343 >= 0))
{var len__9344 = this__9342.arr.length;
var new_len__9345 = (len__9344 - 2);
if((new_len__9345 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__9346 = cljs.core.make_array.call(null,new_len__9345);
var s__9347 = 0;
var d__9348 = 0;
while(true){
if((s__9347 >= len__9344))
{return (new cljs.core.PersistentArrayMap(this__9342.meta,(this__9342.cnt - 1),new_arr__9346,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__9342.arr[s__9347])))
{{
var G__9352 = (s__9347 + 2);
var G__9353 = d__9348;
s__9347 = G__9352;
d__9348 = G__9353;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__9346[d__9348] = (this__9342.arr[s__9347]));
(new_arr__9346[(d__9348 + 1)] = (this__9342.arr[(s__9347 + 1)]));
{
var G__9354 = (s__9347 + 2);
var G__9355 = (d__9348 + 2);
s__9347 = G__9354;
d__9348 = G__9355;
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
var len__9356 = cljs.core.count.call(null,ks);
var i__9357 = 0;
var out__9358 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__9357 < len__9356))
{{
var G__9359 = (i__9357 + 1);
var G__9360 = cljs.core.assoc_BANG_.call(null,out__9358,(ks[i__9357]),(vs[i__9357]));
i__9357 = G__9359;
out__9358 = G__9360;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9358);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9361 = this;
if(cljs.core.truth_(this__9361.editable_QMARK_))
{var idx__9362 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9362 >= 0))
{(this__9361.arr[idx__9362] = (this__9361.arr[(this__9361.len - 2)]));
(this__9361.arr[(idx__9362 + 1)] = (this__9361.arr[(this__9361.len - 1)]));
var G__9363__9364 = this__9361.arr;
G__9363__9364.pop();
G__9363__9364.pop();
G__9363__9364;
this__9361.len = (this__9361.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9365 = this;
if(cljs.core.truth_(this__9365.editable_QMARK_))
{var idx__9366 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9366 === -1))
{if(((this__9365.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9365.len = (this__9365.len + 2);
this__9365.arr.push(key);
this__9365.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__9365.len,this__9365.arr),key,val);
}
} else
{if((val === (this__9365.arr[(idx__9366 + 1)])))
{return tcoll;
} else
{(this__9365.arr[(idx__9366 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9367 = this;
if(cljs.core.truth_(this__9367.editable_QMARK_))
{if((function (){var G__9368__9369 = o;
if(G__9368__9369)
{if((function (){var or__3824__auto____9370 = (G__9368__9369.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9370)
{return or__3824__auto____9370;
} else
{return G__9368__9369.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9368__9369.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9368__9369);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9368__9369);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9371 = cljs.core.seq.call(null,o);
var tcoll__9372 = tcoll;
while(true){
var temp__3971__auto____9373 = cljs.core.first.call(null,es__9371);
if(cljs.core.truth_(temp__3971__auto____9373))
{var e__9374 = temp__3971__auto____9373;
{
var G__9380 = cljs.core.next.call(null,es__9371);
var G__9381 = tcoll__9372.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9372,cljs.core.key.call(null,e__9374),cljs.core.val.call(null,e__9374));
es__9371 = G__9380;
tcoll__9372 = G__9381;
continue;
}
} else
{return tcoll__9372;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9375 = this;
if(cljs.core.truth_(this__9375.editable_QMARK_))
{this__9375.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__9375.len,2),this__9375.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9376 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9377 = this;
if(cljs.core.truth_(this__9377.editable_QMARK_))
{var idx__9378 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__9378 === -1))
{return not_found;
} else
{return (this__9377.arr[(idx__9378 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9379 = this;
if(cljs.core.truth_(this__9379.editable_QMARK_))
{return cljs.core.quot.call(null,this__9379.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9384 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__9385 = 0;
while(true){
if((i__9385 < len))
{{
var G__9386 = cljs.core.assoc_BANG_.call(null,out__9384,(arr[i__9385]),(arr[(i__9385 + 1)]));
var G__9387 = (i__9385 + 2);
out__9384 = G__9386;
i__9385 = G__9387;
continue;
}
} else
{return out__9384;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2464__auto__){
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
var G__9392__9393 = arr.slice();
(G__9392__9393[i] = a);
return G__9392__9393;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9394__9395 = arr.slice();
(G__9394__9395[i] = a);
(G__9394__9395[j] = b);
return G__9394__9395;
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
var new_arr__9397 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__9397,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__9397,(2 * i),(new_arr__9397.length - (2 * i)));
return new_arr__9397;
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
var editable__9400 = inode.ensure_editable(edit);
(editable__9400.arr[i] = a);
return editable__9400;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9401 = inode.ensure_editable(edit);
(editable__9401.arr[i] = a);
(editable__9401.arr[j] = b);
return editable__9401;
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
var len__9408 = arr.length;
var i__9409 = 0;
var init__9410 = init;
while(true){
if((i__9409 < len__9408))
{var init__9413 = (function (){var k__9411 = (arr[i__9409]);
if(!((k__9411 == null)))
{return f.call(null,init__9410,k__9411,(arr[(i__9409 + 1)]));
} else
{var node__9412 = (arr[(i__9409 + 1)]);
if(!((node__9412 == null)))
{return node__9412.kv_reduce(f,init__9410);
} else
{return init__9410;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9413))
{return cljs.core.deref.call(null,init__9413);
} else
{{
var G__9414 = (i__9409 + 2);
var G__9415 = init__9413;
i__9409 = G__9414;
init__9410 = G__9415;
continue;
}
}
} else
{return init__9410;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__9416 = this;
var inode__9417 = this;
if((this__9416.bitmap === bit))
{return null;
} else
{var editable__9418 = inode__9417.ensure_editable(e);
var earr__9419 = editable__9418.arr;
var len__9420 = earr__9419.length;
editable__9418.bitmap = (bit ^ editable__9418.bitmap);
cljs.core.array_copy.call(null,earr__9419,(2 * (i + 1)),earr__9419,(2 * i),(len__9420 - (2 * (i + 1))));
(earr__9419[(len__9420 - 2)] = null);
(earr__9419[(len__9420 - 1)] = null);
return editable__9418;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9421 = this;
var inode__9422 = this;
var bit__9423 = (1 << ((hash >>> shift) & 0x01f));
var idx__9424 = cljs.core.bitmap_indexed_node_index.call(null,this__9421.bitmap,bit__9423);
if(((this__9421.bitmap & bit__9423) === 0))
{var n__9425 = cljs.core.bit_count.call(null,this__9421.bitmap);
if(((2 * n__9425) < this__9421.arr.length))
{var editable__9426 = inode__9422.ensure_editable(edit);
var earr__9427 = editable__9426.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9427,(2 * idx__9424),earr__9427,(2 * (idx__9424 + 1)),(2 * (n__9425 - idx__9424)));
(earr__9427[(2 * idx__9424)] = key);
(earr__9427[((2 * idx__9424) + 1)] = val);
editable__9426.bitmap = (editable__9426.bitmap | bit__9423);
return editable__9426;
} else
{if((n__9425 >= 16))
{var nodes__9428 = cljs.core.make_array.call(null,32);
var jdx__9429 = ((hash >>> shift) & 0x01f);
(nodes__9428[jdx__9429] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9430 = 0;
var j__9431 = 0;
while(true){
if((i__9430 < 32))
{if((((this__9421.bitmap >>> i__9430) & 1) === 0))
{{
var G__9484 = (i__9430 + 1);
var G__9485 = j__9431;
i__9430 = G__9484;
j__9431 = G__9485;
continue;
}
} else
{(nodes__9428[i__9430] = ((!(((this__9421.arr[j__9431]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9421.arr[j__9431])),(this__9421.arr[j__9431]),(this__9421.arr[(j__9431 + 1)]),added_leaf_QMARK_):(this__9421.arr[(j__9431 + 1)])));
{
var G__9486 = (i__9430 + 1);
var G__9487 = (j__9431 + 2);
i__9430 = G__9486;
j__9431 = G__9487;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9425 + 1),nodes__9428));
} else
{if("\uFDD0'else")
{var new_arr__9432 = cljs.core.make_array.call(null,(2 * (n__9425 + 4)));
cljs.core.array_copy.call(null,this__9421.arr,0,new_arr__9432,0,(2 * idx__9424));
(new_arr__9432[(2 * idx__9424)] = key);
(new_arr__9432[((2 * idx__9424) + 1)] = val);
cljs.core.array_copy.call(null,this__9421.arr,(2 * idx__9424),new_arr__9432,(2 * (idx__9424 + 1)),(2 * (n__9425 - idx__9424)));
added_leaf_QMARK_.val = true;
var editable__9433 = inode__9422.ensure_editable(edit);
editable__9433.arr = new_arr__9432;
editable__9433.bitmap = (editable__9433.bitmap | bit__9423);
return editable__9433;
} else
{return null;
}
}
}
} else
{var key_or_nil__9434 = (this__9421.arr[(2 * idx__9424)]);
var val_or_node__9435 = (this__9421.arr[((2 * idx__9424) + 1)]);
if((key_or_nil__9434 == null))
{var n__9436 = val_or_node__9435.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9436 === val_or_node__9435))
{return inode__9422;
} else
{return cljs.core.edit_and_set.call(null,inode__9422,edit,((2 * idx__9424) + 1),n__9436);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9434))
{if((val === val_or_node__9435))
{return inode__9422;
} else
{return cljs.core.edit_and_set.call(null,inode__9422,edit,((2 * idx__9424) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9422,edit,(2 * idx__9424),null,((2 * idx__9424) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9434,val_or_node__9435,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9437 = this;
var inode__9438 = this;
return cljs.core.create_inode_seq.call(null,this__9437.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9439 = this;
var inode__9440 = this;
var bit__9441 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9439.bitmap & bit__9441) === 0))
{return inode__9440;
} else
{var idx__9442 = cljs.core.bitmap_indexed_node_index.call(null,this__9439.bitmap,bit__9441);
var key_or_nil__9443 = (this__9439.arr[(2 * idx__9442)]);
var val_or_node__9444 = (this__9439.arr[((2 * idx__9442) + 1)]);
if((key_or_nil__9443 == null))
{var n__9445 = val_or_node__9444.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9445 === val_or_node__9444))
{return inode__9440;
} else
{if(!((n__9445 == null)))
{return cljs.core.edit_and_set.call(null,inode__9440,edit,((2 * idx__9442) + 1),n__9445);
} else
{if((this__9439.bitmap === bit__9441))
{return null;
} else
{if("\uFDD0'else")
{return inode__9440.edit_and_remove_pair(edit,bit__9441,idx__9442);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9443))
{(removed_leaf_QMARK_[0] = true);
return inode__9440.edit_and_remove_pair(edit,bit__9441,idx__9442);
} else
{if("\uFDD0'else")
{return inode__9440;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9446 = this;
var inode__9447 = this;
if((e === this__9446.edit))
{return inode__9447;
} else
{var n__9448 = cljs.core.bit_count.call(null,this__9446.bitmap);
var new_arr__9449 = cljs.core.make_array.call(null,(((n__9448 < 0))?4:(2 * (n__9448 + 1))));
cljs.core.array_copy.call(null,this__9446.arr,0,new_arr__9449,0,(2 * n__9448));
return (new cljs.core.BitmapIndexedNode(e,this__9446.bitmap,new_arr__9449));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9450 = this;
var inode__9451 = this;
return cljs.core.inode_kv_reduce.call(null,this__9450.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9452 = this;
var inode__9453 = this;
var bit__9454 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9452.bitmap & bit__9454) === 0))
{return not_found;
} else
{var idx__9455 = cljs.core.bitmap_indexed_node_index.call(null,this__9452.bitmap,bit__9454);
var key_or_nil__9456 = (this__9452.arr[(2 * idx__9455)]);
var val_or_node__9457 = (this__9452.arr[((2 * idx__9455) + 1)]);
if((key_or_nil__9456 == null))
{return val_or_node__9457.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9456))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9456,val_or_node__9457], true);
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
var this__9458 = this;
var inode__9459 = this;
var bit__9460 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9458.bitmap & bit__9460) === 0))
{return inode__9459;
} else
{var idx__9461 = cljs.core.bitmap_indexed_node_index.call(null,this__9458.bitmap,bit__9460);
var key_or_nil__9462 = (this__9458.arr[(2 * idx__9461)]);
var val_or_node__9463 = (this__9458.arr[((2 * idx__9461) + 1)]);
if((key_or_nil__9462 == null))
{var n__9464 = val_or_node__9463.inode_without((shift + 5),hash,key);
if((n__9464 === val_or_node__9463))
{return inode__9459;
} else
{if(!((n__9464 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9458.bitmap,cljs.core.clone_and_set.call(null,this__9458.arr,((2 * idx__9461) + 1),n__9464)));
} else
{if((this__9458.bitmap === bit__9460))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9458.bitmap ^ bit__9460),cljs.core.remove_pair.call(null,this__9458.arr,idx__9461)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9462))
{return (new cljs.core.BitmapIndexedNode(null,(this__9458.bitmap ^ bit__9460),cljs.core.remove_pair.call(null,this__9458.arr,idx__9461)));
} else
{if("\uFDD0'else")
{return inode__9459;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9465 = this;
var inode__9466 = this;
var bit__9467 = (1 << ((hash >>> shift) & 0x01f));
var idx__9468 = cljs.core.bitmap_indexed_node_index.call(null,this__9465.bitmap,bit__9467);
if(((this__9465.bitmap & bit__9467) === 0))
{var n__9469 = cljs.core.bit_count.call(null,this__9465.bitmap);
if((n__9469 >= 16))
{var nodes__9470 = cljs.core.make_array.call(null,32);
var jdx__9471 = ((hash >>> shift) & 0x01f);
(nodes__9470[jdx__9471] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9472 = 0;
var j__9473 = 0;
while(true){
if((i__9472 < 32))
{if((((this__9465.bitmap >>> i__9472) & 1) === 0))
{{
var G__9488 = (i__9472 + 1);
var G__9489 = j__9473;
i__9472 = G__9488;
j__9473 = G__9489;
continue;
}
} else
{(nodes__9470[i__9472] = ((!(((this__9465.arr[j__9473]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9465.arr[j__9473])),(this__9465.arr[j__9473]),(this__9465.arr[(j__9473 + 1)]),added_leaf_QMARK_):(this__9465.arr[(j__9473 + 1)])));
{
var G__9490 = (i__9472 + 1);
var G__9491 = (j__9473 + 2);
i__9472 = G__9490;
j__9473 = G__9491;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9469 + 1),nodes__9470));
} else
{var new_arr__9474 = cljs.core.make_array.call(null,(2 * (n__9469 + 1)));
cljs.core.array_copy.call(null,this__9465.arr,0,new_arr__9474,0,(2 * idx__9468));
(new_arr__9474[(2 * idx__9468)] = key);
(new_arr__9474[((2 * idx__9468) + 1)] = val);
cljs.core.array_copy.call(null,this__9465.arr,(2 * idx__9468),new_arr__9474,(2 * (idx__9468 + 1)),(2 * (n__9469 - idx__9468)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9465.bitmap | bit__9467),new_arr__9474));
}
} else
{var key_or_nil__9475 = (this__9465.arr[(2 * idx__9468)]);
var val_or_node__9476 = (this__9465.arr[((2 * idx__9468) + 1)]);
if((key_or_nil__9475 == null))
{var n__9477 = val_or_node__9476.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9477 === val_or_node__9476))
{return inode__9466;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9465.bitmap,cljs.core.clone_and_set.call(null,this__9465.arr,((2 * idx__9468) + 1),n__9477)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9475))
{if((val === val_or_node__9476))
{return inode__9466;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9465.bitmap,cljs.core.clone_and_set.call(null,this__9465.arr,((2 * idx__9468) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9465.bitmap,cljs.core.clone_and_set.call(null,this__9465.arr,(2 * idx__9468),null,((2 * idx__9468) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9475,val_or_node__9476,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9478 = this;
var inode__9479 = this;
var bit__9480 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9478.bitmap & bit__9480) === 0))
{return not_found;
} else
{var idx__9481 = cljs.core.bitmap_indexed_node_index.call(null,this__9478.bitmap,bit__9480);
var key_or_nil__9482 = (this__9478.arr[(2 * idx__9481)]);
var val_or_node__9483 = (this__9478.arr[((2 * idx__9481) + 1)]);
if((key_or_nil__9482 == null))
{return val_or_node__9483.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9482))
{return val_or_node__9483;
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
var arr__9499 = array_node.arr;
var len__9500 = (2 * (array_node.cnt - 1));
var new_arr__9501 = cljs.core.make_array.call(null,len__9500);
var i__9502 = 0;
var j__9503 = 1;
var bitmap__9504 = 0;
while(true){
if((i__9502 < len__9500))
{if((function (){var and__3822__auto____9505 = !((i__9502 === idx));
if(and__3822__auto____9505)
{return !(((arr__9499[i__9502]) == null));
} else
{return and__3822__auto____9505;
}
})())
{(new_arr__9501[j__9503] = (arr__9499[i__9502]));
{
var G__9506 = (i__9502 + 1);
var G__9507 = (j__9503 + 2);
var G__9508 = (bitmap__9504 | (1 << i__9502));
i__9502 = G__9506;
j__9503 = G__9507;
bitmap__9504 = G__9508;
continue;
}
} else
{{
var G__9509 = (i__9502 + 1);
var G__9510 = j__9503;
var G__9511 = bitmap__9504;
i__9502 = G__9509;
j__9503 = G__9510;
bitmap__9504 = G__9511;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9504,new_arr__9501));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9512 = this;
var inode__9513 = this;
var idx__9514 = ((hash >>> shift) & 0x01f);
var node__9515 = (this__9512.arr[idx__9514]);
if((node__9515 == null))
{var editable__9516 = cljs.core.edit_and_set.call(null,inode__9513,edit,idx__9514,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9516.cnt = (editable__9516.cnt + 1);
return editable__9516;
} else
{var n__9517 = node__9515.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9517 === node__9515))
{return inode__9513;
} else
{return cljs.core.edit_and_set.call(null,inode__9513,edit,idx__9514,n__9517);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9518 = this;
var inode__9519 = this;
return cljs.core.create_array_node_seq.call(null,this__9518.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9520 = this;
var inode__9521 = this;
var idx__9522 = ((hash >>> shift) & 0x01f);
var node__9523 = (this__9520.arr[idx__9522]);
if((node__9523 == null))
{return inode__9521;
} else
{var n__9524 = node__9523.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9524 === node__9523))
{return inode__9521;
} else
{if((n__9524 == null))
{if((this__9520.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9521,edit,idx__9522);
} else
{var editable__9525 = cljs.core.edit_and_set.call(null,inode__9521,edit,idx__9522,n__9524);
editable__9525.cnt = (editable__9525.cnt - 1);
return editable__9525;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__9521,edit,idx__9522,n__9524);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9526 = this;
var inode__9527 = this;
if((e === this__9526.edit))
{return inode__9527;
} else
{return (new cljs.core.ArrayNode(e,this__9526.cnt,this__9526.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9528 = this;
var inode__9529 = this;
var len__9530 = this__9528.arr.length;
var i__9531 = 0;
var init__9532 = init;
while(true){
if((i__9531 < len__9530))
{var node__9533 = (this__9528.arr[i__9531]);
if(!((node__9533 == null)))
{var init__9534 = node__9533.kv_reduce(f,init__9532);
if(cljs.core.reduced_QMARK_.call(null,init__9534))
{return cljs.core.deref.call(null,init__9534);
} else
{{
var G__9553 = (i__9531 + 1);
var G__9554 = init__9534;
i__9531 = G__9553;
init__9532 = G__9554;
continue;
}
}
} else
{return null;
}
} else
{return init__9532;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9535 = this;
var inode__9536 = this;
var idx__9537 = ((hash >>> shift) & 0x01f);
var node__9538 = (this__9535.arr[idx__9537]);
if(!((node__9538 == null)))
{return node__9538.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9539 = this;
var inode__9540 = this;
var idx__9541 = ((hash >>> shift) & 0x01f);
var node__9542 = (this__9539.arr[idx__9541]);
if(!((node__9542 == null)))
{var n__9543 = node__9542.inode_without((shift + 5),hash,key);
if((n__9543 === node__9542))
{return inode__9540;
} else
{if((n__9543 == null))
{if((this__9539.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9540,null,idx__9541);
} else
{return (new cljs.core.ArrayNode(null,(this__9539.cnt - 1),cljs.core.clone_and_set.call(null,this__9539.arr,idx__9541,n__9543)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9539.cnt,cljs.core.clone_and_set.call(null,this__9539.arr,idx__9541,n__9543)));
} else
{return null;
}
}
}
} else
{return inode__9540;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9544 = this;
var inode__9545 = this;
var idx__9546 = ((hash >>> shift) & 0x01f);
var node__9547 = (this__9544.arr[idx__9546]);
if((node__9547 == null))
{return (new cljs.core.ArrayNode(null,(this__9544.cnt + 1),cljs.core.clone_and_set.call(null,this__9544.arr,idx__9546,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9548 = node__9547.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9548 === node__9547))
{return inode__9545;
} else
{return (new cljs.core.ArrayNode(null,this__9544.cnt,cljs.core.clone_and_set.call(null,this__9544.arr,idx__9546,n__9548)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9549 = this;
var inode__9550 = this;
var idx__9551 = ((hash >>> shift) & 0x01f);
var node__9552 = (this__9549.arr[idx__9551]);
if(!((node__9552 == null)))
{return node__9552.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9557 = (2 * cnt);
var i__9558 = 0;
while(true){
if((i__9558 < lim__9557))
{if(cljs.core.key_test.call(null,key,(arr[i__9558])))
{return i__9558;
} else
{{
var G__9559 = (i__9558 + 2);
i__9558 = G__9559;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9560 = this;
var inode__9561 = this;
if((hash === this__9560.collision_hash))
{var idx__9562 = cljs.core.hash_collision_node_find_index.call(null,this__9560.arr,this__9560.cnt,key);
if((idx__9562 === -1))
{if((this__9560.arr.length > (2 * this__9560.cnt)))
{var editable__9563 = cljs.core.edit_and_set.call(null,inode__9561,edit,(2 * this__9560.cnt),key,((2 * this__9560.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9563.cnt = (editable__9563.cnt + 1);
return editable__9563;
} else
{var len__9564 = this__9560.arr.length;
var new_arr__9565 = cljs.core.make_array.call(null,(len__9564 + 2));
cljs.core.array_copy.call(null,this__9560.arr,0,new_arr__9565,0,len__9564);
(new_arr__9565[len__9564] = key);
(new_arr__9565[(len__9564 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9561.ensure_editable_array(edit,(this__9560.cnt + 1),new_arr__9565);
}
} else
{if(((this__9560.arr[(idx__9562 + 1)]) === val))
{return inode__9561;
} else
{return cljs.core.edit_and_set.call(null,inode__9561,edit,(idx__9562 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9560.collision_hash >>> shift) & 0x01f)),[null,inode__9561,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9566 = this;
var inode__9567 = this;
return cljs.core.create_inode_seq.call(null,this__9566.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9568 = this;
var inode__9569 = this;
var idx__9570 = cljs.core.hash_collision_node_find_index.call(null,this__9568.arr,this__9568.cnt,key);
if((idx__9570 === -1))
{return inode__9569;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9568.cnt === 1))
{return null;
} else
{var editable__9571 = inode__9569.ensure_editable(edit);
var earr__9572 = editable__9571.arr;
(earr__9572[idx__9570] = (earr__9572[((2 * this__9568.cnt) - 2)]));
(earr__9572[(idx__9570 + 1)] = (earr__9572[((2 * this__9568.cnt) - 1)]));
(earr__9572[((2 * this__9568.cnt) - 1)] = null);
(earr__9572[((2 * this__9568.cnt) - 2)] = null);
editable__9571.cnt = (editable__9571.cnt - 1);
return editable__9571;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9573 = this;
var inode__9574 = this;
if((e === this__9573.edit))
{return inode__9574;
} else
{var new_arr__9575 = cljs.core.make_array.call(null,(2 * (this__9573.cnt + 1)));
cljs.core.array_copy.call(null,this__9573.arr,0,new_arr__9575,0,(2 * this__9573.cnt));
return (new cljs.core.HashCollisionNode(e,this__9573.collision_hash,this__9573.cnt,new_arr__9575));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9576 = this;
var inode__9577 = this;
return cljs.core.inode_kv_reduce.call(null,this__9576.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9578 = this;
var inode__9579 = this;
var idx__9580 = cljs.core.hash_collision_node_find_index.call(null,this__9578.arr,this__9578.cnt,key);
if((idx__9580 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9578.arr[idx__9580])))
{return cljs.core.PersistentVector.fromArray([(this__9578.arr[idx__9580]),(this__9578.arr[(idx__9580 + 1)])], true);
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
var this__9581 = this;
var inode__9582 = this;
var idx__9583 = cljs.core.hash_collision_node_find_index.call(null,this__9581.arr,this__9581.cnt,key);
if((idx__9583 === -1))
{return inode__9582;
} else
{if((this__9581.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9581.collision_hash,(this__9581.cnt - 1),cljs.core.remove_pair.call(null,this__9581.arr,cljs.core.quot.call(null,idx__9583,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9584 = this;
var inode__9585 = this;
if((hash === this__9584.collision_hash))
{var idx__9586 = cljs.core.hash_collision_node_find_index.call(null,this__9584.arr,this__9584.cnt,key);
if((idx__9586 === -1))
{var len__9587 = this__9584.arr.length;
var new_arr__9588 = cljs.core.make_array.call(null,(len__9587 + 2));
cljs.core.array_copy.call(null,this__9584.arr,0,new_arr__9588,0,len__9587);
(new_arr__9588[len__9587] = key);
(new_arr__9588[(len__9587 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9584.collision_hash,(this__9584.cnt + 1),new_arr__9588));
} else
{if(cljs.core._EQ_.call(null,(this__9584.arr[idx__9586]),val))
{return inode__9585;
} else
{return (new cljs.core.HashCollisionNode(null,this__9584.collision_hash,this__9584.cnt,cljs.core.clone_and_set.call(null,this__9584.arr,(idx__9586 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9584.collision_hash >>> shift) & 0x01f)),[null,inode__9585])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9589 = this;
var inode__9590 = this;
var idx__9591 = cljs.core.hash_collision_node_find_index.call(null,this__9589.arr,this__9589.cnt,key);
if((idx__9591 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9589.arr[idx__9591])))
{return (this__9589.arr[(idx__9591 + 1)]);
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
var this__9592 = this;
var inode__9593 = this;
if((e === this__9592.edit))
{this__9592.arr = array;
this__9592.cnt = count;
return inode__9593;
} else
{return (new cljs.core.HashCollisionNode(this__9592.edit,this__9592.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9598 = cljs.core.hash.call(null,key1);
if((key1hash__9598 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9598,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9599 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9598,key1,val1,added_leaf_QMARK___9599).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9599);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9600 = cljs.core.hash.call(null,key1);
if((key1hash__9600 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9600,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9601 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9600,key1,val1,added_leaf_QMARK___9601).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9601);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9602 = this;
var h__2346__auto____9603 = this__9602.__hash;
if(!((h__2346__auto____9603 == null)))
{return h__2346__auto____9603;
} else
{var h__2346__auto____9604 = cljs.core.hash_coll.call(null,coll);
this__9602.__hash = h__2346__auto____9604;
return h__2346__auto____9604;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9605 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9606 = this;
var this__9607 = this;
return cljs.core.pr_str.call(null,this__9607);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9608 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9609 = this;
if((this__9609.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9609.nodes[this__9609.i]),(this__9609.nodes[(this__9609.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__9609.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9610 = this;
if((this__9610.s == null))
{return cljs.core.create_inode_seq.call(null,this__9610.nodes,(this__9610.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9610.nodes,this__9610.i,cljs.core.next.call(null,this__9610.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9611 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9612 = this;
return (new cljs.core.NodeSeq(meta,this__9612.nodes,this__9612.i,this__9612.s,this__9612.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9613 = this;
return this__9613.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9614 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9614.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9621 = nodes.length;
var j__9622 = i;
while(true){
if((j__9622 < len__9621))
{if(!(((nodes[j__9622]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9622,null,null));
} else
{var temp__3971__auto____9623 = (nodes[(j__9622 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9623))
{var node__9624 = temp__3971__auto____9623;
var temp__3971__auto____9625 = node__9624.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9625))
{var node_seq__9626 = temp__3971__auto____9625;
return (new cljs.core.NodeSeq(null,nodes,(j__9622 + 2),node_seq__9626,null));
} else
{{
var G__9627 = (j__9622 + 2);
j__9622 = G__9627;
continue;
}
}
} else
{{
var G__9628 = (j__9622 + 2);
j__9622 = G__9628;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9629 = this;
var h__2346__auto____9630 = this__9629.__hash;
if(!((h__2346__auto____9630 == null)))
{return h__2346__auto____9630;
} else
{var h__2346__auto____9631 = cljs.core.hash_coll.call(null,coll);
this__9629.__hash = h__2346__auto____9631;
return h__2346__auto____9631;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9632 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9633 = this;
var this__9634 = this;
return cljs.core.pr_str.call(null,this__9634);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9635 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9636 = this;
return cljs.core.first.call(null,this__9636.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9637 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9637.nodes,this__9637.i,cljs.core.next.call(null,this__9637.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9638 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9639 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9639.nodes,this__9639.i,this__9639.s,this__9639.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9640 = this;
return this__9640.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9641 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9641.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9648 = nodes.length;
var j__9649 = i;
while(true){
if((j__9649 < len__9648))
{var temp__3971__auto____9650 = (nodes[j__9649]);
if(cljs.core.truth_(temp__3971__auto____9650))
{var nj__9651 = temp__3971__auto____9650;
var temp__3971__auto____9652 = nj__9651.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9652))
{var ns__9653 = temp__3971__auto____9652;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9649 + 1),ns__9653,null));
} else
{{
var G__9654 = (j__9649 + 1);
j__9649 = G__9654;
continue;
}
}
} else
{{
var G__9655 = (j__9649 + 1);
j__9649 = G__9655;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9658 = this;
return (new cljs.core.TransientHashMap({},this__9658.root,this__9658.cnt,this__9658.has_nil_QMARK_,this__9658.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9659 = this;
var h__2346__auto____9660 = this__9659.__hash;
if(!((h__2346__auto____9660 == null)))
{return h__2346__auto____9660;
} else
{var h__2346__auto____9661 = cljs.core.hash_imap.call(null,coll);
this__9659.__hash = h__2346__auto____9661;
return h__2346__auto____9661;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9662 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9663 = this;
if((k == null))
{if(this__9663.has_nil_QMARK_)
{return this__9663.nil_val;
} else
{return not_found;
}
} else
{if((this__9663.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9663.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9664 = this;
if((k == null))
{if((function (){var and__3822__auto____9665 = this__9664.has_nil_QMARK_;
if(and__3822__auto____9665)
{return (v === this__9664.nil_val);
} else
{return and__3822__auto____9665;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9664.meta,((this__9664.has_nil_QMARK_)?this__9664.cnt:(this__9664.cnt + 1)),this__9664.root,true,v,null));
}
} else
{var added_leaf_QMARK___9666 = (new cljs.core.Box(false));
var new_root__9667 = (((this__9664.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9664.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9666);
if((new_root__9667 === this__9664.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9664.meta,((added_leaf_QMARK___9666.val)?(this__9664.cnt + 1):this__9664.cnt),new_root__9667,this__9664.has_nil_QMARK_,this__9664.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9668 = this;
if((k == null))
{return this__9668.has_nil_QMARK_;
} else
{if((this__9668.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9668.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9691 = null;
var G__9691__2 = (function (this_sym9669,k){
var this__9671 = this;
var this_sym9669__9672 = this;
var coll__9673 = this_sym9669__9672;
return coll__9673.cljs$core$ILookup$_lookup$arity$2(coll__9673,k);
});
var G__9691__3 = (function (this_sym9670,k,not_found){
var this__9671 = this;
var this_sym9670__9674 = this;
var coll__9675 = this_sym9670__9674;
return coll__9675.cljs$core$ILookup$_lookup$arity$3(coll__9675,k,not_found);
});
G__9691 = function(this_sym9670,k,not_found){
switch(arguments.length){
case 2:
return G__9691__2.call(this,this_sym9670,k);
case 3:
return G__9691__3.call(this,this_sym9670,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9691;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9656,args9657){
var this__9676 = this;
return this_sym9656.call.apply(this_sym9656,[this_sym9656].concat(args9657.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9677 = this;
var init__9678 = ((this__9677.has_nil_QMARK_)?f.call(null,init,null,this__9677.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9678))
{return cljs.core.deref.call(null,init__9678);
} else
{if(!((this__9677.root == null)))
{return this__9677.root.kv_reduce(f,init__9678);
} else
{if("\uFDD0'else")
{return init__9678;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9679 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9680 = this;
var this__9681 = this;
return cljs.core.pr_str.call(null,this__9681);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9682 = this;
if((this__9682.cnt > 0))
{var s__9683 = ((!((this__9682.root == null)))?this__9682.root.inode_seq():null);
if(this__9682.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9682.nil_val], true),s__9683);
} else
{return s__9683;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9684 = this;
return this__9684.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9685 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9686 = this;
return (new cljs.core.PersistentHashMap(meta,this__9686.cnt,this__9686.root,this__9686.has_nil_QMARK_,this__9686.nil_val,this__9686.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9687 = this;
return this__9687.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9688 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9688.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9689 = this;
if((k == null))
{if(this__9689.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9689.meta,(this__9689.cnt - 1),this__9689.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9689.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9690 = this__9689.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9690 === this__9689.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9689.meta,(this__9689.cnt - 1),new_root__9690,this__9689.has_nil_QMARK_,this__9689.nil_val,null));
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
var len__9692 = ks.length;
var i__9693 = 0;
var out__9694 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9693 < len__9692))
{{
var G__9695 = (i__9693 + 1);
var G__9696 = cljs.core.assoc_BANG_.call(null,out__9694,(ks[i__9693]),(vs[i__9693]));
i__9693 = G__9695;
out__9694 = G__9696;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9694);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9697 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9698 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9699 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9700 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9701 = this;
if((k == null))
{if(this__9701.has_nil_QMARK_)
{return this__9701.nil_val;
} else
{return null;
}
} else
{if((this__9701.root == null))
{return null;
} else
{return this__9701.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9702 = this;
if((k == null))
{if(this__9702.has_nil_QMARK_)
{return this__9702.nil_val;
} else
{return not_found;
}
} else
{if((this__9702.root == null))
{return not_found;
} else
{return this__9702.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9703 = this;
if(this__9703.edit)
{return this__9703.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9704 = this;
var tcoll__9705 = this;
if(this__9704.edit)
{if((function (){var G__9706__9707 = o;
if(G__9706__9707)
{if((function (){var or__3824__auto____9708 = (G__9706__9707.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9708)
{return or__3824__auto____9708;
} else
{return G__9706__9707.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9706__9707.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9706__9707);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9706__9707);
}
})())
{return tcoll__9705.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9709 = cljs.core.seq.call(null,o);
var tcoll__9710 = tcoll__9705;
while(true){
var temp__3971__auto____9711 = cljs.core.first.call(null,es__9709);
if(cljs.core.truth_(temp__3971__auto____9711))
{var e__9712 = temp__3971__auto____9711;
{
var G__9723 = cljs.core.next.call(null,es__9709);
var G__9724 = tcoll__9710.assoc_BANG_(cljs.core.key.call(null,e__9712),cljs.core.val.call(null,e__9712));
es__9709 = G__9723;
tcoll__9710 = G__9724;
continue;
}
} else
{return tcoll__9710;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9713 = this;
var tcoll__9714 = this;
if(this__9713.edit)
{if((k == null))
{if((this__9713.nil_val === v))
{} else
{this__9713.nil_val = v;
}
if(this__9713.has_nil_QMARK_)
{} else
{this__9713.count = (this__9713.count + 1);
this__9713.has_nil_QMARK_ = true;
}
return tcoll__9714;
} else
{var added_leaf_QMARK___9715 = (new cljs.core.Box(false));
var node__9716 = (((this__9713.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9713.root).inode_assoc_BANG_(this__9713.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9715);
if((node__9716 === this__9713.root))
{} else
{this__9713.root = node__9716;
}
if(added_leaf_QMARK___9715.val)
{this__9713.count = (this__9713.count + 1);
} else
{}
return tcoll__9714;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9717 = this;
var tcoll__9718 = this;
if(this__9717.edit)
{if((k == null))
{if(this__9717.has_nil_QMARK_)
{this__9717.has_nil_QMARK_ = false;
this__9717.nil_val = null;
this__9717.count = (this__9717.count - 1);
return tcoll__9718;
} else
{return tcoll__9718;
}
} else
{if((this__9717.root == null))
{return tcoll__9718;
} else
{var removed_leaf_QMARK___9719 = (new cljs.core.Box(false));
var node__9720 = this__9717.root.inode_without_BANG_(this__9717.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9719);
if((node__9720 === this__9717.root))
{} else
{this__9717.root = node__9720;
}
if(cljs.core.truth_((removed_leaf_QMARK___9719[0])))
{this__9717.count = (this__9717.count - 1);
} else
{}
return tcoll__9718;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9721 = this;
var tcoll__9722 = this;
if(this__9721.edit)
{this__9721.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9721.count,this__9721.root,this__9721.has_nil_QMARK_,this__9721.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9727 = node;
var stack__9728 = stack;
while(true){
if(!((t__9727 == null)))
{{
var G__9729 = ((ascending_QMARK_)?t__9727.left:t__9727.right);
var G__9730 = cljs.core.conj.call(null,stack__9728,t__9727);
t__9727 = G__9729;
stack__9728 = G__9730;
continue;
}
} else
{return stack__9728;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9731 = this;
var h__2346__auto____9732 = this__9731.__hash;
if(!((h__2346__auto____9732 == null)))
{return h__2346__auto____9732;
} else
{var h__2346__auto____9733 = cljs.core.hash_coll.call(null,coll);
this__9731.__hash = h__2346__auto____9733;
return h__2346__auto____9733;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9734 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9735 = this;
var this__9736 = this;
return cljs.core.pr_str.call(null,this__9736);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9737 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9738 = this;
if((this__9738.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9738.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9739 = this;
return cljs.core.peek.call(null,this__9739.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9740 = this;
var t__9741 = cljs.core.first.call(null,this__9740.stack);
var next_stack__9742 = cljs.core.tree_map_seq_push.call(null,((this__9740.ascending_QMARK_)?t__9741.right:t__9741.left),cljs.core.next.call(null,this__9740.stack),this__9740.ascending_QMARK_);
if(!((next_stack__9742 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9742,this__9740.ascending_QMARK_,(this__9740.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9743 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9744 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9744.stack,this__9744.ascending_QMARK_,this__9744.cnt,this__9744.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9745 = this;
return this__9745.meta;
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
{if((function (){var and__3822__auto____9747 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9747)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9747;
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
{if((function (){var and__3822__auto____9749 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9749)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9749;
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
var init__9753 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9753))
{return cljs.core.deref.call(null,init__9753);
} else
{var init__9754 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9753):init__9753);
if(cljs.core.reduced_QMARK_.call(null,init__9754))
{return cljs.core.deref.call(null,init__9754);
} else
{var init__9755 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9754):init__9754);
if(cljs.core.reduced_QMARK_.call(null,init__9755))
{return cljs.core.deref.call(null,init__9755);
} else
{return init__9755;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9758 = this;
var h__2346__auto____9759 = this__9758.__hash;
if(!((h__2346__auto____9759 == null)))
{return h__2346__auto____9759;
} else
{var h__2346__auto____9760 = cljs.core.hash_coll.call(null,coll);
this__9758.__hash = h__2346__auto____9760;
return h__2346__auto____9760;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9761 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9762 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9763 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9763.key,this__9763.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9811 = null;
var G__9811__2 = (function (this_sym9764,k){
var this__9766 = this;
var this_sym9764__9767 = this;
var node__9768 = this_sym9764__9767;
return node__9768.cljs$core$ILookup$_lookup$arity$2(node__9768,k);
});
var G__9811__3 = (function (this_sym9765,k,not_found){
var this__9766 = this;
var this_sym9765__9769 = this;
var node__9770 = this_sym9765__9769;
return node__9770.cljs$core$ILookup$_lookup$arity$3(node__9770,k,not_found);
});
G__9811 = function(this_sym9765,k,not_found){
switch(arguments.length){
case 2:
return G__9811__2.call(this,this_sym9765,k);
case 3:
return G__9811__3.call(this,this_sym9765,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9811;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9756,args9757){
var this__9771 = this;
return this_sym9756.call.apply(this_sym9756,[this_sym9756].concat(args9757.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9772 = this;
return cljs.core.PersistentVector.fromArray([this__9772.key,this__9772.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9773 = this;
return this__9773.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9774 = this;
return this__9774.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9775 = this;
var node__9776 = this;
return ins.balance_right(node__9776);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9777 = this;
var node__9778 = this;
return (new cljs.core.RedNode(this__9777.key,this__9777.val,this__9777.left,this__9777.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9779 = this;
var node__9780 = this;
return cljs.core.balance_right_del.call(null,this__9779.key,this__9779.val,this__9779.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9781 = this;
var node__9782 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9783 = this;
var node__9784 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9784,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9785 = this;
var node__9786 = this;
return cljs.core.balance_left_del.call(null,this__9785.key,this__9785.val,del,this__9785.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9787 = this;
var node__9788 = this;
return ins.balance_left(node__9788);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9789 = this;
var node__9790 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9790,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9812 = null;
var G__9812__0 = (function (){
var this__9791 = this;
var this__9793 = this;
return cljs.core.pr_str.call(null,this__9793);
});
G__9812 = function(){
switch(arguments.length){
case 0:
return G__9812__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9812;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9794 = this;
var node__9795 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9795,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9796 = this;
var node__9797 = this;
return node__9797;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9798 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9799 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9800 = this;
return cljs.core.list.call(null,this__9800.key,this__9800.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9801 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9802 = this;
return this__9802.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9803 = this;
return cljs.core.PersistentVector.fromArray([this__9803.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9804 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9804.key,this__9804.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9805 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9806 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9806.key,this__9806.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9807 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9808 = this;
if((n === 0))
{return this__9808.key;
} else
{if((n === 1))
{return this__9808.val;
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
var this__9809 = this;
if((n === 0))
{return this__9809.key;
} else
{if((n === 1))
{return this__9809.val;
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
var this__9810 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9815 = this;
var h__2346__auto____9816 = this__9815.__hash;
if(!((h__2346__auto____9816 == null)))
{return h__2346__auto____9816;
} else
{var h__2346__auto____9817 = cljs.core.hash_coll.call(null,coll);
this__9815.__hash = h__2346__auto____9817;
return h__2346__auto____9817;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9818 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9819 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9820 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9820.key,this__9820.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9868 = null;
var G__9868__2 = (function (this_sym9821,k){
var this__9823 = this;
var this_sym9821__9824 = this;
var node__9825 = this_sym9821__9824;
return node__9825.cljs$core$ILookup$_lookup$arity$2(node__9825,k);
});
var G__9868__3 = (function (this_sym9822,k,not_found){
var this__9823 = this;
var this_sym9822__9826 = this;
var node__9827 = this_sym9822__9826;
return node__9827.cljs$core$ILookup$_lookup$arity$3(node__9827,k,not_found);
});
G__9868 = function(this_sym9822,k,not_found){
switch(arguments.length){
case 2:
return G__9868__2.call(this,this_sym9822,k);
case 3:
return G__9868__3.call(this,this_sym9822,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9868;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9813,args9814){
var this__9828 = this;
return this_sym9813.call.apply(this_sym9813,[this_sym9813].concat(args9814.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9829 = this;
return cljs.core.PersistentVector.fromArray([this__9829.key,this__9829.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9830 = this;
return this__9830.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9831 = this;
return this__9831.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9832 = this;
var node__9833 = this;
return (new cljs.core.RedNode(this__9832.key,this__9832.val,this__9832.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9834 = this;
var node__9835 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9836 = this;
var node__9837 = this;
return (new cljs.core.RedNode(this__9836.key,this__9836.val,this__9836.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9838 = this;
var node__9839 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9840 = this;
var node__9841 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9841,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9842 = this;
var node__9843 = this;
return (new cljs.core.RedNode(this__9842.key,this__9842.val,del,this__9842.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9844 = this;
var node__9845 = this;
return (new cljs.core.RedNode(this__9844.key,this__9844.val,ins,this__9844.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9846 = this;
var node__9847 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9846.left))
{return (new cljs.core.RedNode(this__9846.key,this__9846.val,this__9846.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9846.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9846.right))
{return (new cljs.core.RedNode(this__9846.right.key,this__9846.right.val,(new cljs.core.BlackNode(this__9846.key,this__9846.val,this__9846.left,this__9846.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9846.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9847,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9869 = null;
var G__9869__0 = (function (){
var this__9848 = this;
var this__9850 = this;
return cljs.core.pr_str.call(null,this__9850);
});
G__9869 = function(){
switch(arguments.length){
case 0:
return G__9869__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9869;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9851 = this;
var node__9852 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9851.right))
{return (new cljs.core.RedNode(this__9851.key,this__9851.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9851.left,null)),this__9851.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9851.left))
{return (new cljs.core.RedNode(this__9851.left.key,this__9851.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9851.left.left,null)),(new cljs.core.BlackNode(this__9851.key,this__9851.val,this__9851.left.right,this__9851.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9852,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9853 = this;
var node__9854 = this;
return (new cljs.core.BlackNode(this__9853.key,this__9853.val,this__9853.left,this__9853.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9855 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9856 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9857 = this;
return cljs.core.list.call(null,this__9857.key,this__9857.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9858 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9859 = this;
return this__9859.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9860 = this;
return cljs.core.PersistentVector.fromArray([this__9860.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9861 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9861.key,this__9861.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9862 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9863 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9863.key,this__9863.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9864 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9865 = this;
if((n === 0))
{return this__9865.key;
} else
{if((n === 1))
{return this__9865.val;
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
var this__9866 = this;
if((n === 0))
{return this__9866.key;
} else
{if((n === 1))
{return this__9866.val;
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
var this__9867 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9873 = comp.call(null,k,tree.key);
if((c__9873 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9873 < 0))
{var ins__9874 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9874 == null)))
{return tree.add_left(ins__9874);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9875 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9875 == null)))
{return tree.add_right(ins__9875);
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
{var app__9878 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9878))
{return (new cljs.core.RedNode(app__9878.key,app__9878.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9878.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9878.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9878,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9879 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9879))
{return (new cljs.core.RedNode(app__9879.key,app__9879.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9879.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9879.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9879,right.right,null)));
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
{var c__9885 = comp.call(null,k,tree.key);
if((c__9885 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9885 < 0))
{var del__9886 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9887 = !((del__9886 == null));
if(or__3824__auto____9887)
{return or__3824__auto____9887;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9886,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9886,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9888 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9889 = !((del__9888 == null));
if(or__3824__auto____9889)
{return or__3824__auto____9889;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9888);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9888,null));
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
var tk__9892 = tree.key;
var c__9893 = comp.call(null,k,tk__9892);
if((c__9893 === 0))
{return tree.replace(tk__9892,v,tree.left,tree.right);
} else
{if((c__9893 < 0))
{return tree.replace(tk__9892,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9892,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9896 = this;
var h__2346__auto____9897 = this__9896.__hash;
if(!((h__2346__auto____9897 == null)))
{return h__2346__auto____9897;
} else
{var h__2346__auto____9898 = cljs.core.hash_imap.call(null,coll);
this__9896.__hash = h__2346__auto____9898;
return h__2346__auto____9898;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9899 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9900 = this;
var n__9901 = coll.entry_at(k);
if(!((n__9901 == null)))
{return n__9901.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9902 = this;
var found__9903 = [null];
var t__9904 = cljs.core.tree_map_add.call(null,this__9902.comp,this__9902.tree,k,v,found__9903);
if((t__9904 == null))
{var found_node__9905 = cljs.core.nth.call(null,found__9903,0);
if(cljs.core._EQ_.call(null,v,found_node__9905.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9902.comp,cljs.core.tree_map_replace.call(null,this__9902.comp,this__9902.tree,k,v),this__9902.cnt,this__9902.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9902.comp,t__9904.blacken(),(this__9902.cnt + 1),this__9902.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9906 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9940 = null;
var G__9940__2 = (function (this_sym9907,k){
var this__9909 = this;
var this_sym9907__9910 = this;
var coll__9911 = this_sym9907__9910;
return coll__9911.cljs$core$ILookup$_lookup$arity$2(coll__9911,k);
});
var G__9940__3 = (function (this_sym9908,k,not_found){
var this__9909 = this;
var this_sym9908__9912 = this;
var coll__9913 = this_sym9908__9912;
return coll__9913.cljs$core$ILookup$_lookup$arity$3(coll__9913,k,not_found);
});
G__9940 = function(this_sym9908,k,not_found){
switch(arguments.length){
case 2:
return G__9940__2.call(this,this_sym9908,k);
case 3:
return G__9940__3.call(this,this_sym9908,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9940;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9894,args9895){
var this__9914 = this;
return this_sym9894.call.apply(this_sym9894,[this_sym9894].concat(args9895.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9915 = this;
if(!((this__9915.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9915.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9916 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9917 = this;
if((this__9917.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9917.tree,false,this__9917.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9918 = this;
var this__9919 = this;
return cljs.core.pr_str.call(null,this__9919);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9920 = this;
var coll__9921 = this;
var t__9922 = this__9920.tree;
while(true){
if(!((t__9922 == null)))
{var c__9923 = this__9920.comp.call(null,k,t__9922.key);
if((c__9923 === 0))
{return t__9922;
} else
{if((c__9923 < 0))
{{
var G__9941 = t__9922.left;
t__9922 = G__9941;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9942 = t__9922.right;
t__9922 = G__9942;
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
var this__9924 = this;
if((this__9924.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9924.tree,ascending_QMARK_,this__9924.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9925 = this;
if((this__9925.cnt > 0))
{var stack__9926 = null;
var t__9927 = this__9925.tree;
while(true){
if(!((t__9927 == null)))
{var c__9928 = this__9925.comp.call(null,k,t__9927.key);
if((c__9928 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9926,t__9927),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9928 < 0))
{{
var G__9943 = cljs.core.conj.call(null,stack__9926,t__9927);
var G__9944 = t__9927.left;
stack__9926 = G__9943;
t__9927 = G__9944;
continue;
}
} else
{{
var G__9945 = stack__9926;
var G__9946 = t__9927.right;
stack__9926 = G__9945;
t__9927 = G__9946;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9928 > 0))
{{
var G__9947 = cljs.core.conj.call(null,stack__9926,t__9927);
var G__9948 = t__9927.right;
stack__9926 = G__9947;
t__9927 = G__9948;
continue;
}
} else
{{
var G__9949 = stack__9926;
var G__9950 = t__9927.left;
stack__9926 = G__9949;
t__9927 = G__9950;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9926 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9926,ascending_QMARK_,-1,null));
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
var this__9929 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9930 = this;
return this__9930.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9931 = this;
if((this__9931.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9931.tree,true,this__9931.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9932 = this;
return this__9932.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9933 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9934 = this;
return (new cljs.core.PersistentTreeMap(this__9934.comp,this__9934.tree,this__9934.cnt,meta,this__9934.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9935 = this;
return this__9935.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9936 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9936.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9937 = this;
var found__9938 = [null];
var t__9939 = cljs.core.tree_map_remove.call(null,this__9937.comp,this__9937.tree,k,found__9938);
if((t__9939 == null))
{if((cljs.core.nth.call(null,found__9938,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9937.comp,null,0,this__9937.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9937.comp,t__9939.blacken(),(this__9937.cnt - 1),this__9937.meta,null));
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
var in__9953 = cljs.core.seq.call(null,keyvals);
var out__9954 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9953)
{{
var G__9955 = cljs.core.nnext.call(null,in__9953);
var G__9956 = cljs.core.assoc_BANG_.call(null,out__9954,cljs.core.first.call(null,in__9953),cljs.core.second.call(null,in__9953));
in__9953 = G__9955;
out__9954 = G__9956;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9954);
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
hash_map.cljs$lang$applyTo = (function (arglist__9957){
var keyvals = cljs.core.seq(arglist__9957);;
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
array_map.cljs$lang$applyTo = (function (arglist__9958){
var keyvals = cljs.core.seq(arglist__9958);;
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
var in__9961 = cljs.core.seq.call(null,keyvals);
var out__9962 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9961)
{{
var G__9963 = cljs.core.nnext.call(null,in__9961);
var G__9964 = cljs.core.assoc.call(null,out__9962,cljs.core.first.call(null,in__9961),cljs.core.second.call(null,in__9961));
in__9961 = G__9963;
out__9962 = G__9964;
continue;
}
} else
{return out__9962;
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
sorted_map.cljs$lang$applyTo = (function (arglist__9965){
var keyvals = cljs.core.seq(arglist__9965);;
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
var in__9968 = cljs.core.seq.call(null,keyvals);
var out__9969 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9968)
{{
var G__9970 = cljs.core.nnext.call(null,in__9968);
var G__9971 = cljs.core.assoc.call(null,out__9969,cljs.core.first.call(null,in__9968),cljs.core.second.call(null,in__9968));
in__9968 = G__9970;
out__9969 = G__9971;
continue;
}
} else
{return out__9969;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__9972){
var comparator = cljs.core.first(arglist__9972);
var keyvals = cljs.core.rest(arglist__9972);
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
{return cljs.core.reduce.call(null,(function (p1__9973_SHARP_,p2__9974_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9976 = p1__9973_SHARP_;
if(cljs.core.truth_(or__3824__auto____9976))
{return or__3824__auto____9976;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9974_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__9977){
var maps = cljs.core.seq(arglist__9977);;
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
{var merge_entry__9985 = (function (m,e){
var k__9983 = cljs.core.first.call(null,e);
var v__9984 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9983))
{return cljs.core.assoc.call(null,m,k__9983,f.call(null,cljs.core._lookup.call(null,m,k__9983,null),v__9984));
} else
{return cljs.core.assoc.call(null,m,k__9983,v__9984);
}
});
var merge2__9987 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9985,(function (){var or__3824__auto____9986 = m1;
if(cljs.core.truth_(or__3824__auto____9986))
{return or__3824__auto____9986;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9987,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__9988){
var f = cljs.core.first(arglist__9988);
var maps = cljs.core.rest(arglist__9988);
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
var ret__9993 = cljs.core.ObjMap.EMPTY;
var keys__9994 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9994)
{var key__9995 = cljs.core.first.call(null,keys__9994);
var entry__9996 = cljs.core._lookup.call(null,map,key__9995,"\uFDD0'user/not-found");
{
var G__9997 = ((cljs.core.not_EQ_.call(null,entry__9996,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__9993,key__9995,entry__9996):ret__9993);
var G__9998 = cljs.core.next.call(null,keys__9994);
ret__9993 = G__9997;
keys__9994 = G__9998;
continue;
}
} else
{return ret__9993;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10002 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__10002.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10003 = this;
var h__2346__auto____10004 = this__10003.__hash;
if(!((h__2346__auto____10004 == null)))
{return h__2346__auto____10004;
} else
{var h__2346__auto____10005 = cljs.core.hash_iset.call(null,coll);
this__10003.__hash = h__2346__auto____10005;
return h__2346__auto____10005;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10006 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10007 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__10007.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__10028 = null;
var G__10028__2 = (function (this_sym10008,k){
var this__10010 = this;
var this_sym10008__10011 = this;
var coll__10012 = this_sym10008__10011;
return coll__10012.cljs$core$ILookup$_lookup$arity$2(coll__10012,k);
});
var G__10028__3 = (function (this_sym10009,k,not_found){
var this__10010 = this;
var this_sym10009__10013 = this;
var coll__10014 = this_sym10009__10013;
return coll__10014.cljs$core$ILookup$_lookup$arity$3(coll__10014,k,not_found);
});
G__10028 = function(this_sym10009,k,not_found){
switch(arguments.length){
case 2:
return G__10028__2.call(this,this_sym10009,k);
case 3:
return G__10028__3.call(this,this_sym10009,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10028;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym10000,args10001){
var this__10015 = this;
return this_sym10000.call.apply(this_sym10000,[this_sym10000].concat(args10001.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10016 = this;
return (new cljs.core.PersistentHashSet(this__10016.meta,cljs.core.assoc.call(null,this__10016.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__10017 = this;
var this__10018 = this;
return cljs.core.pr_str.call(null,this__10018);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10019 = this;
return cljs.core.keys.call(null,this__10019.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10020 = this;
return (new cljs.core.PersistentHashSet(this__10020.meta,cljs.core.dissoc.call(null,this__10020.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10021 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10022 = this;
var and__3822__auto____10023 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____10023)
{var and__3822__auto____10024 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____10024)
{return cljs.core.every_QMARK_.call(null,(function (p1__9999_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9999_SHARP_);
}),other);
} else
{return and__3822__auto____10024;
}
} else
{return and__3822__auto____10023;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10025 = this;
return (new cljs.core.PersistentHashSet(meta,this__10025.hash_map,this__10025.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10026 = this;
return this__10026.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10027 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__10027.meta);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__10046 = null;
var G__10046__2 = (function (this_sym10032,k){
var this__10034 = this;
var this_sym10032__10035 = this;
var tcoll__10036 = this_sym10032__10035;
if((cljs.core._lookup.call(null,this__10034.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__10046__3 = (function (this_sym10033,k,not_found){
var this__10034 = this;
var this_sym10033__10037 = this;
var tcoll__10038 = this_sym10033__10037;
if((cljs.core._lookup.call(null,this__10034.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__10046 = function(this_sym10033,k,not_found){
switch(arguments.length){
case 2:
return G__10046__2.call(this,this_sym10033,k);
case 3:
return G__10046__3.call(this,this_sym10033,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10046;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym10030,args10031){
var this__10039 = this;
return this_sym10030.call.apply(this_sym10030,[this_sym10030].concat(args10031.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__10040 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__10041 = this;
if((cljs.core._lookup.call(null,this__10041.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__10042 = this;
return cljs.core.count.call(null,this__10042.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__10043 = this;
this__10043.transient_map = cljs.core.dissoc_BANG_.call(null,this__10043.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10044 = this;
this__10044.transient_map = cljs.core.assoc_BANG_.call(null,this__10044.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10045 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__10045.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10049 = this;
var h__2346__auto____10050 = this__10049.__hash;
if(!((h__2346__auto____10050 == null)))
{return h__2346__auto____10050;
} else
{var h__2346__auto____10051 = cljs.core.hash_iset.call(null,coll);
this__10049.__hash = h__2346__auto____10051;
return h__2346__auto____10051;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10052 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10053 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__10053.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__10079 = null;
var G__10079__2 = (function (this_sym10054,k){
var this__10056 = this;
var this_sym10054__10057 = this;
var coll__10058 = this_sym10054__10057;
return coll__10058.cljs$core$ILookup$_lookup$arity$2(coll__10058,k);
});
var G__10079__3 = (function (this_sym10055,k,not_found){
var this__10056 = this;
var this_sym10055__10059 = this;
var coll__10060 = this_sym10055__10059;
return coll__10060.cljs$core$ILookup$_lookup$arity$3(coll__10060,k,not_found);
});
G__10079 = function(this_sym10055,k,not_found){
switch(arguments.length){
case 2:
return G__10079__2.call(this,this_sym10055,k);
case 3:
return G__10079__3.call(this,this_sym10055,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10079;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym10047,args10048){
var this__10061 = this;
return this_sym10047.call.apply(this_sym10047,[this_sym10047].concat(args10048.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10062 = this;
return (new cljs.core.PersistentTreeSet(this__10062.meta,cljs.core.assoc.call(null,this__10062.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10063 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__10063.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__10064 = this;
var this__10065 = this;
return cljs.core.pr_str.call(null,this__10065);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__10066 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__10066.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10067 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__10067.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__10068 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10069 = this;
return cljs.core._comparator.call(null,this__10069.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10070 = this;
return cljs.core.keys.call(null,this__10070.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10071 = this;
return (new cljs.core.PersistentTreeSet(this__10071.meta,cljs.core.dissoc.call(null,this__10071.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10072 = this;
return cljs.core.count.call(null,this__10072.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10073 = this;
var and__3822__auto____10074 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____10074)
{var and__3822__auto____10075 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____10075)
{return cljs.core.every_QMARK_.call(null,(function (p1__10029_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__10029_SHARP_);
}),other);
} else
{return and__3822__auto____10075;
}
} else
{return and__3822__auto____10074;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10076 = this;
return (new cljs.core.PersistentTreeSet(meta,this__10076.tree_map,this__10076.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10077 = this;
return this__10077.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10078 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__10078.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in__10082 = cljs.core.seq.call(null,coll);
var out__10083 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__10082))
{{
var G__10084 = cljs.core.next.call(null,in__10082);
var G__10085 = cljs.core.conj_BANG_.call(null,out__10083,cljs.core.first.call(null,in__10082));
in__10082 = G__10084;
out__10083 = G__10085;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10083);
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
sorted_set.cljs$lang$applyTo = (function (arglist__10086){
var keys = cljs.core.seq(arglist__10086);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__10088){
var comparator = cljs.core.first(arglist__10088);
var keys = cljs.core.rest(arglist__10088);
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
{var n__10094 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____10095 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____10095))
{var e__10096 = temp__3971__auto____10095;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__10096));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__10094,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__10087_SHARP_){
var temp__3971__auto____10097 = cljs.core.find.call(null,smap,p1__10087_SHARP_);
if(cljs.core.truth_(temp__3971__auto____10097))
{var e__10098 = temp__3971__auto____10097;
return cljs.core.second.call(null,e__10098);
} else
{return p1__10087_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__10128 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__10121,seen){
while(true){
var vec__10122__10123 = p__10121;
var f__10124 = cljs.core.nth.call(null,vec__10122__10123,0,null);
var xs__10125 = vec__10122__10123;
var temp__3974__auto____10126 = cljs.core.seq.call(null,xs__10125);
if(temp__3974__auto____10126)
{var s__10127 = temp__3974__auto____10126;
if(cljs.core.contains_QMARK_.call(null,seen,f__10124))
{{
var G__10129 = cljs.core.rest.call(null,s__10127);
var G__10130 = seen;
p__10121 = G__10129;
seen = G__10130;
continue;
}
} else
{return cljs.core.cons.call(null,f__10124,step.call(null,cljs.core.rest.call(null,s__10127),cljs.core.conj.call(null,seen,f__10124)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__10128.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__10133 = cljs.core.PersistentVector.EMPTY;
var s__10134 = s;
while(true){
if(cljs.core.next.call(null,s__10134))
{{
var G__10135 = cljs.core.conj.call(null,ret__10133,cljs.core.first.call(null,s__10134));
var G__10136 = cljs.core.next.call(null,s__10134);
ret__10133 = G__10135;
s__10134 = G__10136;
continue;
}
} else
{return cljs.core.seq.call(null,ret__10133);
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
{if((function (){var or__3824__auto____10139 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____10139)
{return or__3824__auto____10139;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__10140 = x.lastIndexOf("/");
if((i__10140 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__10140 + 1));
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
if((function (){var or__3824__auto____10143 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____10143)
{return or__3824__auto____10143;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__10144 = x.lastIndexOf("/");
if((i__10144 > -1))
{return cljs.core.subs.call(null,x,2,i__10144);
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
var map__10151 = cljs.core.ObjMap.EMPTY;
var ks__10152 = cljs.core.seq.call(null,keys);
var vs__10153 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____10154 = ks__10152;
if(and__3822__auto____10154)
{return vs__10153;
} else
{return and__3822__auto____10154;
}
})())
{{
var G__10155 = cljs.core.assoc.call(null,map__10151,cljs.core.first.call(null,ks__10152),cljs.core.first.call(null,vs__10153));
var G__10156 = cljs.core.next.call(null,ks__10152);
var G__10157 = cljs.core.next.call(null,vs__10153);
map__10151 = G__10155;
ks__10152 = G__10156;
vs__10153 = G__10157;
continue;
}
} else
{return map__10151;
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
var G__10160__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__10145_SHARP_,p2__10146_SHARP_){
return max_key.call(null,k,p1__10145_SHARP_,p2__10146_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__10160 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10160__delegate.call(this, k, x, y, more);
};
G__10160.cljs$lang$maxFixedArity = 3;
G__10160.cljs$lang$applyTo = (function (arglist__10161){
var k = cljs.core.first(arglist__10161);
var x = cljs.core.first(cljs.core.next(arglist__10161));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10161)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10161)));
return G__10160__delegate(k, x, y, more);
});
G__10160.cljs$lang$arity$variadic = G__10160__delegate;
return G__10160;
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
var G__10162__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__10158_SHARP_,p2__10159_SHARP_){
return min_key.call(null,k,p1__10158_SHARP_,p2__10159_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__10162 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10162__delegate.call(this, k, x, y, more);
};
G__10162.cljs$lang$maxFixedArity = 3;
G__10162.cljs$lang$applyTo = (function (arglist__10163){
var k = cljs.core.first(arglist__10163);
var x = cljs.core.first(cljs.core.next(arglist__10163));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10163)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10163)));
return G__10162__delegate(k, x, y, more);
});
G__10162.cljs$lang$arity$variadic = G__10162__delegate;
return G__10162;
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
var temp__3974__auto____10166 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10166)
{var s__10167 = temp__3974__auto____10166;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__10167),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__10167)));
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
var temp__3974__auto____10170 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10170)
{var s__10171 = temp__3974__auto____10170;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__10171))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10171),take_while.call(null,pred,cljs.core.rest.call(null,s__10171)));
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
var comp__10173 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__10173.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__10185 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____10186 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____10186))
{var vec__10187__10188 = temp__3974__auto____10186;
var e__10189 = cljs.core.nth.call(null,vec__10187__10188,0,null);
var s__10190 = vec__10187__10188;
if(cljs.core.truth_(include__10185.call(null,e__10189)))
{return s__10190;
} else
{return cljs.core.next.call(null,s__10190);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__10185,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____10191 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____10191))
{var vec__10192__10193 = temp__3974__auto____10191;
var e__10194 = cljs.core.nth.call(null,vec__10192__10193,0,null);
var s__10195 = vec__10192__10193;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__10194))?s__10195:cljs.core.next.call(null,s__10195)));
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
var include__10207 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____10208 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____10208))
{var vec__10209__10210 = temp__3974__auto____10208;
var e__10211 = cljs.core.nth.call(null,vec__10209__10210,0,null);
var s__10212 = vec__10209__10210;
if(cljs.core.truth_(include__10207.call(null,e__10211)))
{return s__10212;
} else
{return cljs.core.next.call(null,s__10212);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__10207,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____10213 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____10213))
{var vec__10214__10215 = temp__3974__auto____10213;
var e__10216 = cljs.core.nth.call(null,vec__10214__10215,0,null);
var s__10217 = vec__10214__10215;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__10216))?s__10217:cljs.core.next.call(null,s__10217)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__10218 = this;
var h__2346__auto____10219 = this__10218.__hash;
if(!((h__2346__auto____10219 == null)))
{return h__2346__auto____10219;
} else
{var h__2346__auto____10220 = cljs.core.hash_coll.call(null,rng);
this__10218.__hash = h__2346__auto____10220;
return h__2346__auto____10220;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__10221 = this;
if((this__10221.step > 0))
{if(((this__10221.start + this__10221.step) < this__10221.end))
{return (new cljs.core.Range(this__10221.meta,(this__10221.start + this__10221.step),this__10221.end,this__10221.step,null));
} else
{return null;
}
} else
{if(((this__10221.start + this__10221.step) > this__10221.end))
{return (new cljs.core.Range(this__10221.meta,(this__10221.start + this__10221.step),this__10221.end,this__10221.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__10222 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__10223 = this;
var this__10224 = this;
return cljs.core.pr_str.call(null,this__10224);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__10225 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__10226 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__10227 = this;
if((this__10227.step > 0))
{if((this__10227.start < this__10227.end))
{return rng;
} else
{return null;
}
} else
{if((this__10227.start > this__10227.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__10228 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__10228.end - this__10228.start) / this__10228.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__10229 = this;
return this__10229.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__10230 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__10230.meta,(this__10230.start + this__10230.step),this__10230.end,this__10230.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__10231 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__10232 = this;
return (new cljs.core.Range(meta,this__10232.start,this__10232.end,this__10232.step,this__10232.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__10233 = this;
return this__10233.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__10234 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__10234.start + (n * this__10234.step));
} else
{if((function (){var and__3822__auto____10235 = (this__10234.start > this__10234.end);
if(and__3822__auto____10235)
{return (this__10234.step === 0);
} else
{return and__3822__auto____10235;
}
})())
{return this__10234.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__10236 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__10236.start + (n * this__10236.step));
} else
{if((function (){var and__3822__auto____10237 = (this__10236.start > this__10236.end);
if(and__3822__auto____10237)
{return (this__10236.step === 0);
} else
{return and__3822__auto____10237;
}
})())
{return this__10236.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__10238 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10238.meta);
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
var temp__3974__auto____10241 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10241)
{var s__10242 = temp__3974__auto____10241;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__10242),take_nth.call(null,n,cljs.core.drop.call(null,n,s__10242)));
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
var temp__3974__auto____10249 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10249)
{var s__10250 = temp__3974__auto____10249;
var fst__10251 = cljs.core.first.call(null,s__10250);
var fv__10252 = f.call(null,fst__10251);
var run__10253 = cljs.core.cons.call(null,fst__10251,cljs.core.take_while.call(null,(function (p1__10243_SHARP_){
return cljs.core._EQ_.call(null,fv__10252,f.call(null,p1__10243_SHARP_));
}),cljs.core.next.call(null,s__10250)));
return cljs.core.cons.call(null,run__10253,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__10253),s__10250))));
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
var temp__3971__auto____10268 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____10268)
{var s__10269 = temp__3971__auto____10268;
return reductions.call(null,f,cljs.core.first.call(null,s__10269),cljs.core.rest.call(null,s__10269));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10270 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10270)
{var s__10271 = temp__3974__auto____10270;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__10271)),cljs.core.rest.call(null,s__10271));
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
var G__10274 = null;
var G__10274__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__10274__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__10274__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__10274__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__10274__4 = (function() { 
var G__10275__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__10275 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10275__delegate.call(this, x, y, z, args);
};
G__10275.cljs$lang$maxFixedArity = 3;
G__10275.cljs$lang$applyTo = (function (arglist__10276){
var x = cljs.core.first(arglist__10276);
var y = cljs.core.first(cljs.core.next(arglist__10276));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10276)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10276)));
return G__10275__delegate(x, y, z, args);
});
G__10275.cljs$lang$arity$variadic = G__10275__delegate;
return G__10275;
})()
;
G__10274 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10274__0.call(this);
case 1:
return G__10274__1.call(this,x);
case 2:
return G__10274__2.call(this,x,y);
case 3:
return G__10274__3.call(this,x,y,z);
default:
return G__10274__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10274.cljs$lang$maxFixedArity = 3;
G__10274.cljs$lang$applyTo = G__10274__4.cljs$lang$applyTo;
return G__10274;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__10277 = null;
var G__10277__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__10277__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__10277__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__10277__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__10277__4 = (function() { 
var G__10278__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10278 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10278__delegate.call(this, x, y, z, args);
};
G__10278.cljs$lang$maxFixedArity = 3;
G__10278.cljs$lang$applyTo = (function (arglist__10279){
var x = cljs.core.first(arglist__10279);
var y = cljs.core.first(cljs.core.next(arglist__10279));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10279)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10279)));
return G__10278__delegate(x, y, z, args);
});
G__10278.cljs$lang$arity$variadic = G__10278__delegate;
return G__10278;
})()
;
G__10277 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10277__0.call(this);
case 1:
return G__10277__1.call(this,x);
case 2:
return G__10277__2.call(this,x,y);
case 3:
return G__10277__3.call(this,x,y,z);
default:
return G__10277__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10277.cljs$lang$maxFixedArity = 3;
G__10277.cljs$lang$applyTo = G__10277__4.cljs$lang$applyTo;
return G__10277;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__10280 = null;
var G__10280__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__10280__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__10280__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__10280__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__10280__4 = (function() { 
var G__10281__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__10281 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10281__delegate.call(this, x, y, z, args);
};
G__10281.cljs$lang$maxFixedArity = 3;
G__10281.cljs$lang$applyTo = (function (arglist__10282){
var x = cljs.core.first(arglist__10282);
var y = cljs.core.first(cljs.core.next(arglist__10282));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10282)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10282)));
return G__10281__delegate(x, y, z, args);
});
G__10281.cljs$lang$arity$variadic = G__10281__delegate;
return G__10281;
})()
;
G__10280 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10280__0.call(this);
case 1:
return G__10280__1.call(this,x);
case 2:
return G__10280__2.call(this,x,y);
case 3:
return G__10280__3.call(this,x,y,z);
default:
return G__10280__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10280.cljs$lang$maxFixedArity = 3;
G__10280.cljs$lang$applyTo = G__10280__4.cljs$lang$applyTo;
return G__10280;
})()
});
var juxt__4 = (function() { 
var G__10283__delegate = function (f,g,h,fs){
var fs__10273 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__10284 = null;
var G__10284__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__10254_SHARP_,p2__10255_SHARP_){
return cljs.core.conj.call(null,p1__10254_SHARP_,p2__10255_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__10273);
});
var G__10284__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__10256_SHARP_,p2__10257_SHARP_){
return cljs.core.conj.call(null,p1__10256_SHARP_,p2__10257_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__10273);
});
var G__10284__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__10258_SHARP_,p2__10259_SHARP_){
return cljs.core.conj.call(null,p1__10258_SHARP_,p2__10259_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__10273);
});
var G__10284__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__10260_SHARP_,p2__10261_SHARP_){
return cljs.core.conj.call(null,p1__10260_SHARP_,p2__10261_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__10273);
});
var G__10284__4 = (function() { 
var G__10285__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__10262_SHARP_,p2__10263_SHARP_){
return cljs.core.conj.call(null,p1__10262_SHARP_,cljs.core.apply.call(null,p2__10263_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__10273);
};
var G__10285 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10285__delegate.call(this, x, y, z, args);
};
G__10285.cljs$lang$maxFixedArity = 3;
G__10285.cljs$lang$applyTo = (function (arglist__10286){
var x = cljs.core.first(arglist__10286);
var y = cljs.core.first(cljs.core.next(arglist__10286));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10286)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10286)));
return G__10285__delegate(x, y, z, args);
});
G__10285.cljs$lang$arity$variadic = G__10285__delegate;
return G__10285;
})()
;
G__10284 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10284__0.call(this);
case 1:
return G__10284__1.call(this,x);
case 2:
return G__10284__2.call(this,x,y);
case 3:
return G__10284__3.call(this,x,y,z);
default:
return G__10284__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10284.cljs$lang$maxFixedArity = 3;
G__10284.cljs$lang$applyTo = G__10284__4.cljs$lang$applyTo;
return G__10284;
})()
};
var G__10283 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10283__delegate.call(this, f, g, h, fs);
};
G__10283.cljs$lang$maxFixedArity = 3;
G__10283.cljs$lang$applyTo = (function (arglist__10287){
var f = cljs.core.first(arglist__10287);
var g = cljs.core.first(cljs.core.next(arglist__10287));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10287)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10287)));
return G__10283__delegate(f, g, h, fs);
});
G__10283.cljs$lang$arity$variadic = G__10283__delegate;
return G__10283;
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
var G__10290 = cljs.core.next.call(null,coll);
coll = G__10290;
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
if(cljs.core.truth_((function (){var and__3822__auto____10289 = cljs.core.seq.call(null,coll);
if(and__3822__auto____10289)
{return (n > 0);
} else
{return and__3822__auto____10289;
}
})()))
{{
var G__10291 = (n - 1);
var G__10292 = cljs.core.next.call(null,coll);
n = G__10291;
coll = G__10292;
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
var matches__10294 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__10294),s))
{if((cljs.core.count.call(null,matches__10294) === 1))
{return cljs.core.first.call(null,matches__10294);
} else
{return cljs.core.vec.call(null,matches__10294);
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
var matches__10296 = re.exec(s);
if((matches__10296 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__10296) === 1))
{return cljs.core.first.call(null,matches__10296);
} else
{return cljs.core.vec.call(null,matches__10296);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__10301 = cljs.core.re_find.call(null,re,s);
var match_idx__10302 = s.search(re);
var match_str__10303 = ((cljs.core.coll_QMARK_.call(null,match_data__10301))?cljs.core.first.call(null,match_data__10301):match_data__10301);
var post_match__10304 = cljs.core.subs.call(null,s,(match_idx__10302 + cljs.core.count.call(null,match_str__10303)));
if(cljs.core.truth_(match_data__10301))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__10301,re_seq.call(null,re,post_match__10304));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__10311__10312 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___10313 = cljs.core.nth.call(null,vec__10311__10312,0,null);
var flags__10314 = cljs.core.nth.call(null,vec__10311__10312,1,null);
var pattern__10315 = cljs.core.nth.call(null,vec__10311__10312,2,null);
return (new RegExp(pattern__10315,flags__10314));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__10305_SHARP_){
return print_one.call(null,p1__10305_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____10325 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____10325))
{var and__3822__auto____10329 = (function (){var G__10326__10327 = obj;
if(G__10326__10327)
{if((function (){var or__3824__auto____10328 = (G__10326__10327.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____10328)
{return or__3824__auto____10328;
} else
{return G__10326__10327.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__10326__10327.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10326__10327);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10326__10327);
}
})();
if(cljs.core.truth_(and__3822__auto____10329))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____10329;
}
} else
{return and__3822__auto____10325;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____10330 = !((obj == null));
if(and__3822__auto____10330)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____10330;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__10331__10332 = obj;
if(G__10331__10332)
{if((function (){var or__3824__auto____10333 = (G__10331__10332.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____10333)
{return or__3824__auto____10333;
} else
{return G__10331__10332.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__10331__10332.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10331__10332);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10331__10332);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__10348 = cljs.core.first.call(null,objs);
var sb__10349 = (new goog.string.StringBuffer());
var G__10350__10351 = cljs.core.seq.call(null,objs);
if(G__10350__10351)
{var obj__10352 = cljs.core.first.call(null,G__10350__10351);
var G__10350__10353 = G__10350__10351;
while(true){
if((obj__10352 === first_obj__10348))
{} else
{sb__10349.append(" ");
}
var G__10354__10355 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10352,opts));
if(G__10354__10355)
{var string__10356 = cljs.core.first.call(null,G__10354__10355);
var G__10354__10357 = G__10354__10355;
while(true){
sb__10349.append(string__10356);
var temp__3974__auto____10358 = cljs.core.next.call(null,G__10354__10357);
if(temp__3974__auto____10358)
{var G__10354__10359 = temp__3974__auto____10358;
{
var G__10362 = cljs.core.first.call(null,G__10354__10359);
var G__10363 = G__10354__10359;
string__10356 = G__10362;
G__10354__10357 = G__10363;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10360 = cljs.core.next.call(null,G__10350__10353);
if(temp__3974__auto____10360)
{var G__10350__10361 = temp__3974__auto____10360;
{
var G__10364 = cljs.core.first.call(null,G__10350__10361);
var G__10365 = G__10350__10361;
obj__10352 = G__10364;
G__10350__10353 = G__10365;
continue;
}
} else
{}
break;
}
} else
{}
return sb__10349;
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
var sb__10367 = cljs.core.pr_sb.call(null,objs,opts);
sb__10367.append("\n");
return [cljs.core.str(sb__10367)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__10381 = cljs.core.first.call(null,objs);
var G__10382__10383 = cljs.core.seq.call(null,objs);
if(G__10382__10383)
{var obj__10384 = cljs.core.first.call(null,G__10382__10383);
var G__10382__10385 = G__10382__10383;
while(true){
if((obj__10384 === first_obj__10381))
{} else
{cljs.core.string_print.call(null," ");
}
var G__10386__10387 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10384,opts));
if(G__10386__10387)
{var string__10388 = cljs.core.first.call(null,G__10386__10387);
var G__10386__10389 = G__10386__10387;
while(true){
cljs.core.string_print.call(null,string__10388);
var temp__3974__auto____10390 = cljs.core.next.call(null,G__10386__10389);
if(temp__3974__auto____10390)
{var G__10386__10391 = temp__3974__auto____10390;
{
var G__10394 = cljs.core.first.call(null,G__10386__10391);
var G__10395 = G__10386__10391;
string__10388 = G__10394;
G__10386__10389 = G__10395;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10392 = cljs.core.next.call(null,G__10382__10385);
if(temp__3974__auto____10392)
{var G__10382__10393 = temp__3974__auto____10392;
{
var G__10396 = cljs.core.first.call(null,G__10382__10393);
var G__10397 = G__10382__10393;
obj__10384 = G__10396;
G__10382__10385 = G__10397;
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
pr_str.cljs$lang$applyTo = (function (arglist__10398){
var objs = cljs.core.seq(arglist__10398);;
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
prn_str.cljs$lang$applyTo = (function (arglist__10399){
var objs = cljs.core.seq(arglist__10399);;
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
pr.cljs$lang$applyTo = (function (arglist__10400){
var objs = cljs.core.seq(arglist__10400);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__10401){
var objs = cljs.core.seq(arglist__10401);;
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
print_str.cljs$lang$applyTo = (function (arglist__10402){
var objs = cljs.core.seq(arglist__10402);;
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
println.cljs$lang$applyTo = (function (arglist__10403){
var objs = cljs.core.seq(arglist__10403);;
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
println_str.cljs$lang$applyTo = (function (arglist__10404){
var objs = cljs.core.seq(arglist__10404);;
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
prn.cljs$lang$applyTo = (function (arglist__10405){
var objs = cljs.core.seq(arglist__10405);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10406 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10406,"{",", ","}",opts,coll);
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
var pr_pair__10407 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10407,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10408 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10408,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10409 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10409))
{var nspc__10410 = temp__3974__auto____10409;
return [cljs.core.str(nspc__10410),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____10411 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10411))
{var nspc__10412 = temp__3974__auto____10411;
return [cljs.core.str(nspc__10412),cljs.core.str("/")].join('');
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
var pr_pair__10413 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10413,"{",", ","}",opts,coll);
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
var normalize__10415 = (function (n,len){
var ns__10414 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10414) < len))
{{
var G__10417 = [cljs.core.str("0"),cljs.core.str(ns__10414)].join('');
ns__10414 = G__10417;
continue;
}
} else
{return ns__10414;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10415.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10415.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10415.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10415.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10415.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10415.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__10416 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10416,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10418 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10419 = this;
var G__10420__10421 = cljs.core.seq.call(null,this__10419.watches);
if(G__10420__10421)
{var G__10423__10425 = cljs.core.first.call(null,G__10420__10421);
var vec__10424__10426 = G__10423__10425;
var key__10427 = cljs.core.nth.call(null,vec__10424__10426,0,null);
var f__10428 = cljs.core.nth.call(null,vec__10424__10426,1,null);
var G__10420__10429 = G__10420__10421;
var G__10423__10430 = G__10423__10425;
var G__10420__10431 = G__10420__10429;
while(true){
var vec__10432__10433 = G__10423__10430;
var key__10434 = cljs.core.nth.call(null,vec__10432__10433,0,null);
var f__10435 = cljs.core.nth.call(null,vec__10432__10433,1,null);
var G__10420__10436 = G__10420__10431;
f__10435.call(null,key__10434,this$,oldval,newval);
var temp__3974__auto____10437 = cljs.core.next.call(null,G__10420__10436);
if(temp__3974__auto____10437)
{var G__10420__10438 = temp__3974__auto____10437;
{
var G__10445 = cljs.core.first.call(null,G__10420__10438);
var G__10446 = G__10420__10438;
G__10423__10430 = G__10445;
G__10420__10431 = G__10446;
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
var this__10439 = this;
return this$.watches = cljs.core.assoc.call(null,this__10439.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10440 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10440.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10441 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10441.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10442 = this;
return this__10442.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10443 = this;
return this__10443.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10444 = this;
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
var G__10458__delegate = function (x,p__10447){
var map__10453__10454 = p__10447;
var map__10453__10455 = ((cljs.core.seq_QMARK_.call(null,map__10453__10454))?cljs.core.apply.call(null,cljs.core.hash_map,map__10453__10454):map__10453__10454);
var validator__10456 = cljs.core._lookup.call(null,map__10453__10455,"\uFDD0'validator",null);
var meta__10457 = cljs.core._lookup.call(null,map__10453__10455,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10457,validator__10456,null));
};
var G__10458 = function (x,var_args){
var p__10447 = null;
if (goog.isDef(var_args)) {
  p__10447 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10458__delegate.call(this, x, p__10447);
};
G__10458.cljs$lang$maxFixedArity = 1;
G__10458.cljs$lang$applyTo = (function (arglist__10459){
var x = cljs.core.first(arglist__10459);
var p__10447 = cljs.core.rest(arglist__10459);
return G__10458__delegate(x, p__10447);
});
G__10458.cljs$lang$arity$variadic = G__10458__delegate;
return G__10458;
})()
;
atom = function(x,var_args){
var p__10447 = var_args;
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
var temp__3974__auto____10463 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10463))
{var validate__10464 = temp__3974__auto____10463;
if(cljs.core.truth_(validate__10464.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6394))))].join('')));
}
} else
{}
var old_value__10465 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__10465,new_value);
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
var G__10466__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__10466 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10466__delegate.call(this, a, f, x, y, z, more);
};
G__10466.cljs$lang$maxFixedArity = 5;
G__10466.cljs$lang$applyTo = (function (arglist__10467){
var a = cljs.core.first(arglist__10467);
var f = cljs.core.first(cljs.core.next(arglist__10467));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10467)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10467))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10467)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10467)))));
return G__10466__delegate(a, f, x, y, z, more);
});
G__10466.cljs$lang$arity$variadic = G__10466__delegate;
return G__10466;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10468){
var iref = cljs.core.first(arglist__10468);
var f = cljs.core.first(cljs.core.next(arglist__10468));
var args = cljs.core.rest(cljs.core.next(arglist__10468));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__10469 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__10469.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10470 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__10470.state,(function (p__10471){
var curr_state__10472 = p__10471;
var curr_state__10473 = ((cljs.core.seq_QMARK_.call(null,curr_state__10472))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__10472):curr_state__10472);
var done__10474 = cljs.core._lookup.call(null,curr_state__10473,"\uFDD0'done",null);
if(cljs.core.truth_(done__10474))
{return curr_state__10473;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__10470.f.call(null)});
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
var map__10495__10496 = options;
var map__10495__10497 = ((cljs.core.seq_QMARK_.call(null,map__10495__10496))?cljs.core.apply.call(null,cljs.core.hash_map,map__10495__10496):map__10495__10496);
var keywordize_keys__10498 = cljs.core._lookup.call(null,map__10495__10497,"\uFDD0'keywordize-keys",null);
var keyfn__10499 = (cljs.core.truth_(keywordize_keys__10498)?cljs.core.keyword:cljs.core.str);
var f__10514 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2620__auto____10513 = (function iter__10507(s__10508){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10508__10511 = s__10508;
while(true){
if(cljs.core.seq.call(null,s__10508__10511))
{var k__10512 = cljs.core.first.call(null,s__10508__10511);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__10499.call(null,k__10512),thisfn.call(null,(x[k__10512]))], true),iter__10507.call(null,cljs.core.rest.call(null,s__10508__10511)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2620__auto____10513.call(null,cljs.core.js_keys.call(null,x));
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
return f__10514.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10515){
var x = cljs.core.first(arglist__10515);
var options = cljs.core.rest(arglist__10515);
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
var mem__10520 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10524__delegate = function (args){
var temp__3971__auto____10521 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__10520),args,null);
if(cljs.core.truth_(temp__3971__auto____10521))
{var v__10522 = temp__3971__auto____10521;
return v__10522;
} else
{var ret__10523 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__10520,cljs.core.assoc,args,ret__10523);
return ret__10523;
}
};
var G__10524 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10524__delegate.call(this, args);
};
G__10524.cljs$lang$maxFixedArity = 0;
G__10524.cljs$lang$applyTo = (function (arglist__10525){
var args = cljs.core.seq(arglist__10525);;
return G__10524__delegate(args);
});
G__10524.cljs$lang$arity$variadic = G__10524__delegate;
return G__10524;
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
var ret__10527 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__10527))
{{
var G__10528 = ret__10527;
f = G__10528;
continue;
}
} else
{return ret__10527;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10529__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__10529 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10529__delegate.call(this, f, args);
};
G__10529.cljs$lang$maxFixedArity = 1;
G__10529.cljs$lang$applyTo = (function (arglist__10530){
var f = cljs.core.first(arglist__10530);
var args = cljs.core.rest(arglist__10530);
return G__10529__delegate(f, args);
});
G__10529.cljs$lang$arity$variadic = G__10529__delegate;
return G__10529;
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
var k__10532 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__10532,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__10532,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____10541 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____10541)
{return or__3824__auto____10541;
} else
{var or__3824__auto____10542 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10542)
{return or__3824__auto____10542;
} else
{var and__3822__auto____10543 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____10543)
{var and__3822__auto____10544 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____10544)
{var and__3822__auto____10545 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____10545)
{var ret__10546 = true;
var i__10547 = 0;
while(true){
if((function (){var or__3824__auto____10548 = cljs.core.not.call(null,ret__10546);
if(or__3824__auto____10548)
{return or__3824__auto____10548;
} else
{return (i__10547 === cljs.core.count.call(null,parent));
}
})())
{return ret__10546;
} else
{{
var G__10549 = isa_QMARK_.call(null,h,child.call(null,i__10547),parent.call(null,i__10547));
var G__10550 = (i__10547 + 1);
ret__10546 = G__10549;
i__10547 = G__10550;
continue;
}
}
break;
}
} else
{return and__3822__auto____10545;
}
} else
{return and__3822__auto____10544;
}
} else
{return and__3822__auto____10543;
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
var tp__10559 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10560 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10561 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10562 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____10563 = ((cljs.core.contains_QMARK_.call(null,tp__10559.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__10561.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__10561.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__10559,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__10562.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10560,parent,ta__10561),"\uFDD0'descendants":tf__10562.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10561,tag,td__10560)});
})());
if(cljs.core.truth_(or__3824__auto____10563))
{return or__3824__auto____10563;
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
var parentMap__10568 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10569 = (cljs.core.truth_(parentMap__10568.call(null,tag))?cljs.core.disj.call(null,parentMap__10568.call(null,tag),parent):cljs.core.set([]));
var newParents__10570 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10569))?cljs.core.assoc.call(null,parentMap__10568,tag,childsParents__10569):cljs.core.dissoc.call(null,parentMap__10568,tag));
var deriv_seq__10571 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10551_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10551_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10551_SHARP_),cljs.core.second.call(null,p1__10551_SHARP_)));
}),cljs.core.seq.call(null,newParents__10570)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10568.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__10552_SHARP_,p2__10553_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__10552_SHARP_,p2__10553_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10571));
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
var xprefs__10579 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____10581 = (cljs.core.truth_((function (){var and__3822__auto____10580 = xprefs__10579;
if(cljs.core.truth_(and__3822__auto____10580))
{return xprefs__10579.call(null,y);
} else
{return and__3822__auto____10580;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10581))
{return or__3824__auto____10581;
} else
{var or__3824__auto____10583 = (function (){var ps__10582 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10582) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10582),prefer_table)))
{} else
{}
{
var G__10586 = cljs.core.rest.call(null,ps__10582);
ps__10582 = G__10586;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10583))
{return or__3824__auto____10583;
} else
{var or__3824__auto____10585 = (function (){var ps__10584 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10584) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10584),y,prefer_table)))
{} else
{}
{
var G__10587 = cljs.core.rest.call(null,ps__10584);
ps__10584 = G__10587;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10585))
{return or__3824__auto____10585;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10589 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10589))
{return or__3824__auto____10589;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10607 = cljs.core.reduce.call(null,(function (be,p__10599){
var vec__10600__10601 = p__10599;
var k__10602 = cljs.core.nth.call(null,vec__10600__10601,0,null);
var ___10603 = cljs.core.nth.call(null,vec__10600__10601,1,null);
var e__10604 = vec__10600__10601;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10602))
{var be2__10606 = (cljs.core.truth_((function (){var or__3824__auto____10605 = (be == null);
if(or__3824__auto____10605)
{return or__3824__auto____10605;
} else
{return cljs.core.dominates.call(null,k__10602,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10604:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10606),k__10602,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10602),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10606)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10606;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10607))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10607));
return cljs.core.second.call(null,best_entry__10607);
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
if((function (){var and__3822__auto____10611 = mf;
if(and__3822__auto____10611)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10611;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____10612 = (cljs.core._reset[goog.typeOf(mf)]);
if(or__3824__auto____10612)
{return or__3824__auto____10612;
} else
{var or__3824__auto____10613 = (cljs.core._reset["_"]);
if(or__3824__auto____10613)
{return or__3824__auto____10613;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10617 = mf;
if(and__3822__auto____10617)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10617;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____10618 = (cljs.core._add_method[goog.typeOf(mf)]);
if(or__3824__auto____10618)
{return or__3824__auto____10618;
} else
{var or__3824__auto____10619 = (cljs.core._add_method["_"]);
if(or__3824__auto____10619)
{return or__3824__auto____10619;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10623 = mf;
if(and__3822__auto____10623)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10623;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____10624 = (cljs.core._remove_method[goog.typeOf(mf)]);
if(or__3824__auto____10624)
{return or__3824__auto____10624;
} else
{var or__3824__auto____10625 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10625)
{return or__3824__auto____10625;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10629 = mf;
if(and__3822__auto____10629)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10629;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____10630 = (cljs.core._prefer_method[goog.typeOf(mf)]);
if(or__3824__auto____10630)
{return or__3824__auto____10630;
} else
{var or__3824__auto____10631 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10631)
{return or__3824__auto____10631;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10635 = mf;
if(and__3822__auto____10635)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10635;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____10636 = (cljs.core._get_method[goog.typeOf(mf)]);
if(or__3824__auto____10636)
{return or__3824__auto____10636;
} else
{var or__3824__auto____10637 = (cljs.core._get_method["_"]);
if(or__3824__auto____10637)
{return or__3824__auto____10637;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10641 = mf;
if(and__3822__auto____10641)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10641;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____10642 = (cljs.core._methods[goog.typeOf(mf)]);
if(or__3824__auto____10642)
{return or__3824__auto____10642;
} else
{var or__3824__auto____10643 = (cljs.core._methods["_"]);
if(or__3824__auto____10643)
{return or__3824__auto____10643;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10647 = mf;
if(and__3822__auto____10647)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10647;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____10648 = (cljs.core._prefers[goog.typeOf(mf)]);
if(or__3824__auto____10648)
{return or__3824__auto____10648;
} else
{var or__3824__auto____10649 = (cljs.core._prefers["_"]);
if(or__3824__auto____10649)
{return or__3824__auto____10649;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10653 = mf;
if(and__3822__auto____10653)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10653;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____10654 = (cljs.core._dispatch[goog.typeOf(mf)]);
if(or__3824__auto____10654)
{return or__3824__auto____10654;
} else
{var or__3824__auto____10655 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10655)
{return or__3824__auto____10655;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10658 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10659 = cljs.core._get_method.call(null,mf,dispatch_val__10658);
if(cljs.core.truth_(target_fn__10659))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10658)].join('')));
}
return cljs.core.apply.call(null,target_fn__10659,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10660 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10661 = this;
cljs.core.swap_BANG_.call(null,this__10661.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10661.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10661.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10661.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10662 = this;
cljs.core.swap_BANG_.call(null,this__10662.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10662.method_cache,this__10662.method_table,this__10662.cached_hierarchy,this__10662.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10663 = this;
cljs.core.swap_BANG_.call(null,this__10663.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10663.method_cache,this__10663.method_table,this__10663.cached_hierarchy,this__10663.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10664 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10664.cached_hierarchy),cljs.core.deref.call(null,this__10664.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10664.method_cache,this__10664.method_table,this__10664.cached_hierarchy,this__10664.hierarchy);
}
var temp__3971__auto____10665 = cljs.core.deref.call(null,this__10664.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10665))
{var target_fn__10666 = temp__3971__auto____10665;
return target_fn__10666;
} else
{var temp__3971__auto____10667 = cljs.core.find_and_cache_best_method.call(null,this__10664.name,dispatch_val,this__10664.hierarchy,this__10664.method_table,this__10664.prefer_table,this__10664.method_cache,this__10664.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10667))
{var target_fn__10668 = temp__3971__auto____10667;
return target_fn__10668;
} else
{return cljs.core.deref.call(null,this__10664.method_table).call(null,this__10664.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10669 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10669.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10669.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10669.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10669.method_cache,this__10669.method_table,this__10669.cached_hierarchy,this__10669.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10670 = this;
return cljs.core.deref.call(null,this__10670.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10671 = this;
return cljs.core.deref.call(null,this__10671.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10672 = this;
return cljs.core.do_dispatch.call(null,mf,this__10672.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10674__delegate = function (_,args){
var self__10673 = this;
return cljs.core._dispatch.call(null,self__10673,args);
};
var G__10674 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10674__delegate.call(this, _, args);
};
G__10674.cljs$lang$maxFixedArity = 1;
G__10674.cljs$lang$applyTo = (function (arglist__10675){
var _ = cljs.core.first(arglist__10675);
var args = cljs.core.rest(arglist__10675);
return G__10674__delegate(_, args);
});
G__10674.cljs$lang$arity$variadic = G__10674__delegate;
return G__10674;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10676 = this;
return cljs.core._dispatch.call(null,self__10676,args);
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
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2463__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10677 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10679,_){
var this__10678 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10678.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10680 = this;
return (this__10680.uuid === other.uuid);
});
cljs.core.UUID.prototype.toString = (function (){
var this__10681 = this;
var this__10682 = this;
return cljs.core.pr_str.call(null,this__10682);
});
cljs.core.UUID;
