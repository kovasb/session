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
var G__6118__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6118 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6118__delegate.call(this, array, i, idxs);
};
G__6118.cljs$lang$maxFixedArity = 2;
G__6118.cljs$lang$applyTo = (function (arglist__6119){
var array = cljs.core.first(arglist__6119);
var i = cljs.core.first(cljs.core.next(arglist__6119));
var idxs = cljs.core.rest(cljs.core.next(arglist__6119));
return G__6118__delegate(array, i, idxs);
});
G__6118.cljs$lang$arity$variadic = G__6118__delegate;
return G__6118;
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
if((function (){var and__3822__auto____6183 = this$;
if(and__3822__auto____6183)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6183;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____6184 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6184)
{return or__3824__auto____6184;
} else
{var or__3824__auto____6185 = (cljs.core._invoke["_"]);
if(or__3824__auto____6185)
{return or__3824__auto____6185;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6186 = this$;
if(and__3822__auto____6186)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6186;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____6187 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6187)
{return or__3824__auto____6187;
} else
{var or__3824__auto____6188 = (cljs.core._invoke["_"]);
if(or__3824__auto____6188)
{return or__3824__auto____6188;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6189 = this$;
if(and__3822__auto____6189)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6189;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____6190 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6190)
{return or__3824__auto____6190;
} else
{var or__3824__auto____6191 = (cljs.core._invoke["_"]);
if(or__3824__auto____6191)
{return or__3824__auto____6191;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6192 = this$;
if(and__3822__auto____6192)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6192;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____6193 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6193)
{return or__3824__auto____6193;
} else
{var or__3824__auto____6194 = (cljs.core._invoke["_"]);
if(or__3824__auto____6194)
{return or__3824__auto____6194;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6195 = this$;
if(and__3822__auto____6195)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6195;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____6196 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6196)
{return or__3824__auto____6196;
} else
{var or__3824__auto____6197 = (cljs.core._invoke["_"]);
if(or__3824__auto____6197)
{return or__3824__auto____6197;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6198 = this$;
if(and__3822__auto____6198)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6198;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____6199 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6199)
{return or__3824__auto____6199;
} else
{var or__3824__auto____6200 = (cljs.core._invoke["_"]);
if(or__3824__auto____6200)
{return or__3824__auto____6200;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6201 = this$;
if(and__3822__auto____6201)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6201;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____6202 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6202)
{return or__3824__auto____6202;
} else
{var or__3824__auto____6203 = (cljs.core._invoke["_"]);
if(or__3824__auto____6203)
{return or__3824__auto____6203;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6204 = this$;
if(and__3822__auto____6204)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6204;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____6205 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6205)
{return or__3824__auto____6205;
} else
{var or__3824__auto____6206 = (cljs.core._invoke["_"]);
if(or__3824__auto____6206)
{return or__3824__auto____6206;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6207 = this$;
if(and__3822__auto____6207)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6207;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____6208 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6208)
{return or__3824__auto____6208;
} else
{var or__3824__auto____6209 = (cljs.core._invoke["_"]);
if(or__3824__auto____6209)
{return or__3824__auto____6209;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6210 = this$;
if(and__3822__auto____6210)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6210;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____6211 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6211)
{return or__3824__auto____6211;
} else
{var or__3824__auto____6212 = (cljs.core._invoke["_"]);
if(or__3824__auto____6212)
{return or__3824__auto____6212;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6213 = this$;
if(and__3822__auto____6213)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6213;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____6214 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6214)
{return or__3824__auto____6214;
} else
{var or__3824__auto____6215 = (cljs.core._invoke["_"]);
if(or__3824__auto____6215)
{return or__3824__auto____6215;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6216 = this$;
if(and__3822__auto____6216)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6216;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____6217 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6217)
{return or__3824__auto____6217;
} else
{var or__3824__auto____6218 = (cljs.core._invoke["_"]);
if(or__3824__auto____6218)
{return or__3824__auto____6218;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6219 = this$;
if(and__3822__auto____6219)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6219;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____6220 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6220)
{return or__3824__auto____6220;
} else
{var or__3824__auto____6221 = (cljs.core._invoke["_"]);
if(or__3824__auto____6221)
{return or__3824__auto____6221;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6222 = this$;
if(and__3822__auto____6222)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6222;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____6223 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6223)
{return or__3824__auto____6223;
} else
{var or__3824__auto____6224 = (cljs.core._invoke["_"]);
if(or__3824__auto____6224)
{return or__3824__auto____6224;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6225 = this$;
if(and__3822__auto____6225)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6225;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____6226 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6226)
{return or__3824__auto____6226;
} else
{var or__3824__auto____6227 = (cljs.core._invoke["_"]);
if(or__3824__auto____6227)
{return or__3824__auto____6227;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6228 = this$;
if(and__3822__auto____6228)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6228;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____6229 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6229)
{return or__3824__auto____6229;
} else
{var or__3824__auto____6230 = (cljs.core._invoke["_"]);
if(or__3824__auto____6230)
{return or__3824__auto____6230;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6231 = this$;
if(and__3822__auto____6231)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6231;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____6232 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6232)
{return or__3824__auto____6232;
} else
{var or__3824__auto____6233 = (cljs.core._invoke["_"]);
if(or__3824__auto____6233)
{return or__3824__auto____6233;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6234 = this$;
if(and__3822__auto____6234)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6234;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____6235 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6235)
{return or__3824__auto____6235;
} else
{var or__3824__auto____6236 = (cljs.core._invoke["_"]);
if(or__3824__auto____6236)
{return or__3824__auto____6236;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6237 = this$;
if(and__3822__auto____6237)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6237;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____6238 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6238)
{return or__3824__auto____6238;
} else
{var or__3824__auto____6239 = (cljs.core._invoke["_"]);
if(or__3824__auto____6239)
{return or__3824__auto____6239;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6240 = this$;
if(and__3822__auto____6240)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6240;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____6241 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6241)
{return or__3824__auto____6241;
} else
{var or__3824__auto____6242 = (cljs.core._invoke["_"]);
if(or__3824__auto____6242)
{return or__3824__auto____6242;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6243 = this$;
if(and__3822__auto____6243)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6243;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____6244 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6244)
{return or__3824__auto____6244;
} else
{var or__3824__auto____6245 = (cljs.core._invoke["_"]);
if(or__3824__auto____6245)
{return or__3824__auto____6245;
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
if((function (){var and__3822__auto____6249 = coll;
if(and__3822__auto____6249)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6249;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____6250 = (cljs.core._count[goog.typeOf(coll)]);
if(or__3824__auto____6250)
{return or__3824__auto____6250;
} else
{var or__3824__auto____6251 = (cljs.core._count["_"]);
if(or__3824__auto____6251)
{return or__3824__auto____6251;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6255 = coll;
if(and__3822__auto____6255)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6255;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____6256 = (cljs.core._empty[goog.typeOf(coll)]);
if(or__3824__auto____6256)
{return or__3824__auto____6256;
} else
{var or__3824__auto____6257 = (cljs.core._empty["_"]);
if(or__3824__auto____6257)
{return or__3824__auto____6257;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6261 = coll;
if(and__3822__auto____6261)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6261;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____6262 = (cljs.core._conj[goog.typeOf(coll)]);
if(or__3824__auto____6262)
{return or__3824__auto____6262;
} else
{var or__3824__auto____6263 = (cljs.core._conj["_"]);
if(or__3824__auto____6263)
{return or__3824__auto____6263;
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
if((function (){var and__3822__auto____6270 = coll;
if(and__3822__auto____6270)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6270;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____6271 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6271)
{return or__3824__auto____6271;
} else
{var or__3824__auto____6272 = (cljs.core._nth["_"]);
if(or__3824__auto____6272)
{return or__3824__auto____6272;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6273 = coll;
if(and__3822__auto____6273)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6273;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____6274 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6274)
{return or__3824__auto____6274;
} else
{var or__3824__auto____6275 = (cljs.core._nth["_"]);
if(or__3824__auto____6275)
{return or__3824__auto____6275;
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
if((function (){var and__3822__auto____6279 = coll;
if(and__3822__auto____6279)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6279;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6280 = (cljs.core._first[goog.typeOf(coll)]);
if(or__3824__auto____6280)
{return or__3824__auto____6280;
} else
{var or__3824__auto____6281 = (cljs.core._first["_"]);
if(or__3824__auto____6281)
{return or__3824__auto____6281;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6285 = coll;
if(and__3822__auto____6285)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6285;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____6286 = (cljs.core._rest[goog.typeOf(coll)]);
if(or__3824__auto____6286)
{return or__3824__auto____6286;
} else
{var or__3824__auto____6287 = (cljs.core._rest["_"]);
if(or__3824__auto____6287)
{return or__3824__auto____6287;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6291 = coll;
if(and__3822__auto____6291)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6291;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____6292 = (cljs.core._next[goog.typeOf(coll)]);
if(or__3824__auto____6292)
{return or__3824__auto____6292;
} else
{var or__3824__auto____6293 = (cljs.core._next["_"]);
if(or__3824__auto____6293)
{return or__3824__auto____6293;
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
if((function (){var and__3822__auto____6300 = o;
if(and__3822__auto____6300)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6300;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____6301 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6301)
{return or__3824__auto____6301;
} else
{var or__3824__auto____6302 = (cljs.core._lookup["_"]);
if(or__3824__auto____6302)
{return or__3824__auto____6302;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6303 = o;
if(and__3822__auto____6303)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6303;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____6304 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6304)
{return or__3824__auto____6304;
} else
{var or__3824__auto____6305 = (cljs.core._lookup["_"]);
if(or__3824__auto____6305)
{return or__3824__auto____6305;
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
if((function (){var and__3822__auto____6309 = coll;
if(and__3822__auto____6309)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6309;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6310 = (cljs.core._contains_key_QMARK_[goog.typeOf(coll)]);
if(or__3824__auto____6310)
{return or__3824__auto____6310;
} else
{var or__3824__auto____6311 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6311)
{return or__3824__auto____6311;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6315 = coll;
if(and__3822__auto____6315)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6315;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____6316 = (cljs.core._assoc[goog.typeOf(coll)]);
if(or__3824__auto____6316)
{return or__3824__auto____6316;
} else
{var or__3824__auto____6317 = (cljs.core._assoc["_"]);
if(or__3824__auto____6317)
{return or__3824__auto____6317;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6321 = coll;
if(and__3822__auto____6321)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6321;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6322 = (cljs.core._dissoc[goog.typeOf(coll)]);
if(or__3824__auto____6322)
{return or__3824__auto____6322;
} else
{var or__3824__auto____6323 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6323)
{return or__3824__auto____6323;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6327 = coll;
if(and__3822__auto____6327)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6327;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____6328 = (cljs.core._key[goog.typeOf(coll)]);
if(or__3824__auto____6328)
{return or__3824__auto____6328;
} else
{var or__3824__auto____6329 = (cljs.core._key["_"]);
if(or__3824__auto____6329)
{return or__3824__auto____6329;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6333 = coll;
if(and__3822__auto____6333)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6333;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____6334 = (cljs.core._val[goog.typeOf(coll)]);
if(or__3824__auto____6334)
{return or__3824__auto____6334;
} else
{var or__3824__auto____6335 = (cljs.core._val["_"]);
if(or__3824__auto____6335)
{return or__3824__auto____6335;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6339 = coll;
if(and__3822__auto____6339)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6339;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____6340 = (cljs.core._disjoin[goog.typeOf(coll)]);
if(or__3824__auto____6340)
{return or__3824__auto____6340;
} else
{var or__3824__auto____6341 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6341)
{return or__3824__auto____6341;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6345 = coll;
if(and__3822__auto____6345)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6345;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____6346 = (cljs.core._peek[goog.typeOf(coll)]);
if(or__3824__auto____6346)
{return or__3824__auto____6346;
} else
{var or__3824__auto____6347 = (cljs.core._peek["_"]);
if(or__3824__auto____6347)
{return or__3824__auto____6347;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6351 = coll;
if(and__3822__auto____6351)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6351;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____6352 = (cljs.core._pop[goog.typeOf(coll)]);
if(or__3824__auto____6352)
{return or__3824__auto____6352;
} else
{var or__3824__auto____6353 = (cljs.core._pop["_"]);
if(or__3824__auto____6353)
{return or__3824__auto____6353;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6357 = coll;
if(and__3822__auto____6357)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6357;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____6358 = (cljs.core._assoc_n[goog.typeOf(coll)]);
if(or__3824__auto____6358)
{return or__3824__auto____6358;
} else
{var or__3824__auto____6359 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6359)
{return or__3824__auto____6359;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6363 = o;
if(and__3822__auto____6363)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6363;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____6364 = (cljs.core._deref[goog.typeOf(o)]);
if(or__3824__auto____6364)
{return or__3824__auto____6364;
} else
{var or__3824__auto____6365 = (cljs.core._deref["_"]);
if(or__3824__auto____6365)
{return or__3824__auto____6365;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6369 = o;
if(and__3822__auto____6369)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6369;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____6370 = (cljs.core._deref_with_timeout[goog.typeOf(o)]);
if(or__3824__auto____6370)
{return or__3824__auto____6370;
} else
{var or__3824__auto____6371 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6371)
{return or__3824__auto____6371;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6375 = o;
if(and__3822__auto____6375)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6375;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____6376 = (cljs.core._meta[goog.typeOf(o)]);
if(or__3824__auto____6376)
{return or__3824__auto____6376;
} else
{var or__3824__auto____6377 = (cljs.core._meta["_"]);
if(or__3824__auto____6377)
{return or__3824__auto____6377;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6381 = o;
if(and__3822__auto____6381)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6381;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____6382 = (cljs.core._with_meta[goog.typeOf(o)]);
if(or__3824__auto____6382)
{return or__3824__auto____6382;
} else
{var or__3824__auto____6383 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6383)
{return or__3824__auto____6383;
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
if((function (){var and__3822__auto____6390 = coll;
if(and__3822__auto____6390)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6390;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____6391 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6391)
{return or__3824__auto____6391;
} else
{var or__3824__auto____6392 = (cljs.core._reduce["_"]);
if(or__3824__auto____6392)
{return or__3824__auto____6392;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6393 = coll;
if(and__3822__auto____6393)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6393;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____6394 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6394)
{return or__3824__auto____6394;
} else
{var or__3824__auto____6395 = (cljs.core._reduce["_"]);
if(or__3824__auto____6395)
{return or__3824__auto____6395;
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
if((function (){var and__3822__auto____6399 = coll;
if(and__3822__auto____6399)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6399;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____6400 = (cljs.core._kv_reduce[goog.typeOf(coll)]);
if(or__3824__auto____6400)
{return or__3824__auto____6400;
} else
{var or__3824__auto____6401 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6401)
{return or__3824__auto____6401;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6405 = o;
if(and__3822__auto____6405)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6405;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____6406 = (cljs.core._equiv[goog.typeOf(o)]);
if(or__3824__auto____6406)
{return or__3824__auto____6406;
} else
{var or__3824__auto____6407 = (cljs.core._equiv["_"]);
if(or__3824__auto____6407)
{return or__3824__auto____6407;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6411 = o;
if(and__3822__auto____6411)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6411;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____6412 = (cljs.core._hash[goog.typeOf(o)]);
if(or__3824__auto____6412)
{return or__3824__auto____6412;
} else
{var or__3824__auto____6413 = (cljs.core._hash["_"]);
if(or__3824__auto____6413)
{return or__3824__auto____6413;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6417 = o;
if(and__3822__auto____6417)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6417;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____6418 = (cljs.core._seq[goog.typeOf(o)]);
if(or__3824__auto____6418)
{return or__3824__auto____6418;
} else
{var or__3824__auto____6419 = (cljs.core._seq["_"]);
if(or__3824__auto____6419)
{return or__3824__auto____6419;
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
if((function (){var and__3822__auto____6423 = coll;
if(and__3822__auto____6423)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6423;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____6424 = (cljs.core._rseq[goog.typeOf(coll)]);
if(or__3824__auto____6424)
{return or__3824__auto____6424;
} else
{var or__3824__auto____6425 = (cljs.core._rseq["_"]);
if(or__3824__auto____6425)
{return or__3824__auto____6425;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6429 = coll;
if(and__3822__auto____6429)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6429;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6430 = (cljs.core._sorted_seq[goog.typeOf(coll)]);
if(or__3824__auto____6430)
{return or__3824__auto____6430;
} else
{var or__3824__auto____6431 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6431)
{return or__3824__auto____6431;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6435 = coll;
if(and__3822__auto____6435)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6435;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6436 = (cljs.core._sorted_seq_from[goog.typeOf(coll)]);
if(or__3824__auto____6436)
{return or__3824__auto____6436;
} else
{var or__3824__auto____6437 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6437)
{return or__3824__auto____6437;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6441 = coll;
if(and__3822__auto____6441)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6441;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____6442 = (cljs.core._entry_key[goog.typeOf(coll)]);
if(or__3824__auto____6442)
{return or__3824__auto____6442;
} else
{var or__3824__auto____6443 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6443)
{return or__3824__auto____6443;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6447 = coll;
if(and__3822__auto____6447)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6447;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____6448 = (cljs.core._comparator[goog.typeOf(coll)]);
if(or__3824__auto____6448)
{return or__3824__auto____6448;
} else
{var or__3824__auto____6449 = (cljs.core._comparator["_"]);
if(or__3824__auto____6449)
{return or__3824__auto____6449;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6453 = o;
if(and__3822__auto____6453)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6453;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____6454 = (cljs.core._pr_seq[goog.typeOf(o)]);
if(or__3824__auto____6454)
{return or__3824__auto____6454;
} else
{var or__3824__auto____6455 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6455)
{return or__3824__auto____6455;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6459 = d;
if(and__3822__auto____6459)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6459;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____6460 = (cljs.core._realized_QMARK_[goog.typeOf(d)]);
if(or__3824__auto____6460)
{return or__3824__auto____6460;
} else
{var or__3824__auto____6461 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6461)
{return or__3824__auto____6461;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6465 = this$;
if(and__3822__auto____6465)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6465;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____6466 = (cljs.core._notify_watches[goog.typeOf(this$)]);
if(or__3824__auto____6466)
{return or__3824__auto____6466;
} else
{var or__3824__auto____6467 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6467)
{return or__3824__auto____6467;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6471 = this$;
if(and__3822__auto____6471)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6471;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____6472 = (cljs.core._add_watch[goog.typeOf(this$)]);
if(or__3824__auto____6472)
{return or__3824__auto____6472;
} else
{var or__3824__auto____6473 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6473)
{return or__3824__auto____6473;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6477 = this$;
if(and__3822__auto____6477)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6477;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____6478 = (cljs.core._remove_watch[goog.typeOf(this$)]);
if(or__3824__auto____6478)
{return or__3824__auto____6478;
} else
{var or__3824__auto____6479 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6479)
{return or__3824__auto____6479;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6483 = coll;
if(and__3822__auto____6483)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6483;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____6484 = (cljs.core._as_transient[goog.typeOf(coll)]);
if(or__3824__auto____6484)
{return or__3824__auto____6484;
} else
{var or__3824__auto____6485 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6485)
{return or__3824__auto____6485;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6489 = tcoll;
if(and__3822__auto____6489)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6489;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____6490 = (cljs.core._conj_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6490)
{return or__3824__auto____6490;
} else
{var or__3824__auto____6491 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6491)
{return or__3824__auto____6491;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6495 = tcoll;
if(and__3822__auto____6495)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6495;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____6496 = (cljs.core._persistent_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6496)
{return or__3824__auto____6496;
} else
{var or__3824__auto____6497 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6497)
{return or__3824__auto____6497;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6501 = tcoll;
if(and__3822__auto____6501)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6501;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____6502 = (cljs.core._assoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6502)
{return or__3824__auto____6502;
} else
{var or__3824__auto____6503 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6503)
{return or__3824__auto____6503;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6507 = tcoll;
if(and__3822__auto____6507)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6507;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____6508 = (cljs.core._dissoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6508)
{return or__3824__auto____6508;
} else
{var or__3824__auto____6509 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6509)
{return or__3824__auto____6509;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6513 = tcoll;
if(and__3822__auto____6513)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6513;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____6514 = (cljs.core._assoc_n_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6514)
{return or__3824__auto____6514;
} else
{var or__3824__auto____6515 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6515)
{return or__3824__auto____6515;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6519 = tcoll;
if(and__3822__auto____6519)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6519;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____6520 = (cljs.core._pop_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6520)
{return or__3824__auto____6520;
} else
{var or__3824__auto____6521 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6521)
{return or__3824__auto____6521;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____6525 = tcoll;
if(and__3822__auto____6525)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____6525;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____6526 = (cljs.core._disjoin_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6526)
{return or__3824__auto____6526;
} else
{var or__3824__auto____6527 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____6527)
{return or__3824__auto____6527;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;void 0;cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____6531 = x;
if(and__3822__auto____6531)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____6531;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{return (function (){var or__3824__auto____6532 = (cljs.core._compare[goog.typeOf(x)]);
if(or__3824__auto____6532)
{return or__3824__auto____6532;
} else
{var or__3824__auto____6533 = (cljs.core._compare["_"]);
if(or__3824__auto____6533)
{return or__3824__auto____6533;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
void 0;void 0;cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____6537 = coll;
if(and__3822__auto____6537)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____6537;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6538 = (cljs.core._drop_first[goog.typeOf(coll)]);
if(or__3824__auto____6538)
{return or__3824__auto____6538;
} else
{var or__3824__auto____6539 = (cljs.core._drop_first["_"]);
if(or__3824__auto____6539)
{return or__3824__auto____6539;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____6543 = coll;
if(and__3822__auto____6543)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____6543;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6544 = (cljs.core._chunked_first[goog.typeOf(coll)]);
if(or__3824__auto____6544)
{return or__3824__auto____6544;
} else
{var or__3824__auto____6545 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____6545)
{return or__3824__auto____6545;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____6549 = coll;
if(and__3822__auto____6549)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____6549;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____6550 = (cljs.core._chunked_rest[goog.typeOf(coll)]);
if(or__3824__auto____6550)
{return or__3824__auto____6550;
} else
{var or__3824__auto____6551 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____6551)
{return or__3824__auto____6551;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____6555 = coll;
if(and__3822__auto____6555)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____6555;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____6556 = (cljs.core._chunked_next[goog.typeOf(coll)]);
if(or__3824__auto____6556)
{return or__3824__auto____6556;
} else
{var or__3824__auto____6557 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____6557)
{return or__3824__auto____6557;
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
var or__3824__auto____6559 = (x === y);
if(or__3824__auto____6559)
{return or__3824__auto____6559;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__6560__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__6561 = y;
var G__6562 = cljs.core.first.call(null,more);
var G__6563 = cljs.core.next.call(null,more);
x = G__6561;
y = G__6562;
more = G__6563;
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
var G__6560 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6560__delegate.call(this, x, y, more);
};
G__6560.cljs$lang$maxFixedArity = 2;
G__6560.cljs$lang$applyTo = (function (arglist__6564){
var x = cljs.core.first(arglist__6564);
var y = cljs.core.first(cljs.core.next(arglist__6564));
var more = cljs.core.rest(cljs.core.next(arglist__6564));
return G__6560__delegate(x, y, more);
});
G__6560.cljs$lang$arity$variadic = G__6560__delegate;
return G__6560;
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
var G__6565 = null;
var G__6565__2 = (function (o,k){
return null;
});
var G__6565__3 = (function (o,k,not_found){
return not_found;
});
G__6565 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__6565__2.call(this,o,k);
case 3:
return G__6565__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6565;
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
var G__6566 = null;
var G__6566__2 = (function (_,f){
return f.call(null);
});
var G__6566__3 = (function (_,f,start){
return start;
});
G__6566 = function(_,f,start){
switch(arguments.length){
case 2:
return G__6566__2.call(this,_,f);
case 3:
return G__6566__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6566;
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
var G__6567 = null;
var G__6567__2 = (function (_,n){
return null;
});
var G__6567__3 = (function (_,n,not_found){
return not_found;
});
G__6567 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__6567__2.call(this,_,n);
case 3:
return G__6567__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6567;
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
var cnt__6580 = cljs.core._count.call(null,cicoll);
if((cnt__6580 === 0))
{return f.call(null);
} else
{var val__6581 = cljs.core._nth.call(null,cicoll,0);
var n__6582 = 1;
while(true){
if((n__6582 < cnt__6580))
{var nval__6583 = f.call(null,val__6581,cljs.core._nth.call(null,cicoll,n__6582));
if(cljs.core.reduced_QMARK_.call(null,nval__6583))
{return cljs.core.deref.call(null,nval__6583);
} else
{{
var G__6592 = nval__6583;
var G__6593 = (n__6582 + 1);
val__6581 = G__6592;
n__6582 = G__6593;
continue;
}
}
} else
{return val__6581;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__6584 = cljs.core._count.call(null,cicoll);
var val__6585 = val;
var n__6586 = 0;
while(true){
if((n__6586 < cnt__6584))
{var nval__6587 = f.call(null,val__6585,cljs.core._nth.call(null,cicoll,n__6586));
if(cljs.core.reduced_QMARK_.call(null,nval__6587))
{return cljs.core.deref.call(null,nval__6587);
} else
{{
var G__6594 = nval__6587;
var G__6595 = (n__6586 + 1);
val__6585 = G__6594;
n__6586 = G__6595;
continue;
}
}
} else
{return val__6585;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__6588 = cljs.core._count.call(null,cicoll);
var val__6589 = val;
var n__6590 = idx;
while(true){
if((n__6590 < cnt__6588))
{var nval__6591 = f.call(null,val__6589,cljs.core._nth.call(null,cicoll,n__6590));
if(cljs.core.reduced_QMARK_.call(null,nval__6591))
{return cljs.core.deref.call(null,nval__6591);
} else
{{
var G__6596 = nval__6591;
var G__6597 = (n__6590 + 1);
val__6589 = G__6596;
n__6590 = G__6597;
continue;
}
}
} else
{return val__6589;
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
var cnt__6610 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__6611 = (arr[0]);
var n__6612 = 1;
while(true){
if((n__6612 < cnt__6610))
{var nval__6613 = f.call(null,val__6611,(arr[n__6612]));
if(cljs.core.reduced_QMARK_.call(null,nval__6613))
{return cljs.core.deref.call(null,nval__6613);
} else
{{
var G__6622 = nval__6613;
var G__6623 = (n__6612 + 1);
val__6611 = G__6622;
n__6612 = G__6623;
continue;
}
}
} else
{return val__6611;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__6614 = arr.length;
var val__6615 = val;
var n__6616 = 0;
while(true){
if((n__6616 < cnt__6614))
{var nval__6617 = f.call(null,val__6615,(arr[n__6616]));
if(cljs.core.reduced_QMARK_.call(null,nval__6617))
{return cljs.core.deref.call(null,nval__6617);
} else
{{
var G__6624 = nval__6617;
var G__6625 = (n__6616 + 1);
val__6615 = G__6624;
n__6616 = G__6625;
continue;
}
}
} else
{return val__6615;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__6618 = arr.length;
var val__6619 = val;
var n__6620 = idx;
while(true){
if((n__6620 < cnt__6618))
{var nval__6621 = f.call(null,val__6619,(arr[n__6620]));
if(cljs.core.reduced_QMARK_.call(null,nval__6621))
{return cljs.core.deref.call(null,nval__6621);
} else
{{
var G__6626 = nval__6621;
var G__6627 = (n__6620 + 1);
val__6619 = G__6626;
n__6620 = G__6627;
continue;
}
}
} else
{return val__6619;
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6628 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__6629 = this;
if(((this__6629.i + 1) < this__6629.a.length))
{return (new cljs.core.IndexedSeq(this__6629.a,(this__6629.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6630 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__6631 = this;
var c__6632 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__6632 > 0))
{return (new cljs.core.RSeq(coll,(c__6632 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__6633 = this;
var this__6634 = this;
return cljs.core.pr_str.call(null,this__6634);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__6635 = this;
if(cljs.core.counted_QMARK_.call(null,this__6635.a))
{return cljs.core.ci_reduce.call(null,this__6635.a,f,(this__6635.a[this__6635.i]),(this__6635.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__6635.a[this__6635.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__6636 = this;
if(cljs.core.counted_QMARK_.call(null,this__6636.a))
{return cljs.core.ci_reduce.call(null,this__6636.a,f,start,this__6636.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__6637 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6638 = this;
return (this__6638.a.length - this__6638.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__6639 = this;
return (this__6639.a[this__6639.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__6640 = this;
if(((this__6640.i + 1) < this__6640.a.length))
{return (new cljs.core.IndexedSeq(this__6640.a,(this__6640.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6641 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__6642 = this;
var i__6643 = (n + this__6642.i);
if((i__6643 < this__6642.a.length))
{return (this__6642.a[i__6643]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__6644 = this;
var i__6645 = (n + this__6644.i);
if((i__6645 < this__6644.a.length))
{return (this__6644.a[i__6645]);
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
var G__6646 = null;
var G__6646__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__6646__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__6646 = function(array,f,start){
switch(arguments.length){
case 2:
return G__6646__2.call(this,array,f);
case 3:
return G__6646__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6646;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__6647 = null;
var G__6647__2 = (function (array,k){
return (array[k]);
});
var G__6647__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__6647 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__6647__2.call(this,array,k);
case 3:
return G__6647__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6647;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__6648 = null;
var G__6648__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__6648__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__6648 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__6648__2.call(this,array,n);
case 3:
return G__6648__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6648;
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
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6649 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6650 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__6651 = this;
var this__6652 = this;
return cljs.core.pr_str.call(null,this__6652);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6653 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6654 = this;
return (this__6654.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6655 = this;
return cljs.core._nth.call(null,this__6655.ci,this__6655.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6656 = this;
if((this__6656.i > 0))
{return (new cljs.core.RSeq(this__6656.ci,(this__6656.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6657 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__6658 = this;
return (new cljs.core.RSeq(this__6658.ci,this__6658.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6659 = this;
return this__6659.meta;
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
{if((function (){var G__6663__6664 = coll;
if(G__6663__6664)
{if((function (){var or__3824__auto____6665 = (G__6663__6664.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____6665)
{return or__3824__auto____6665;
} else
{return G__6663__6664.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__6663__6664.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6663__6664);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6663__6664);
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
{if((function (){var G__6670__6671 = coll;
if(G__6670__6671)
{if((function (){var or__3824__auto____6672 = (G__6670__6671.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6672)
{return or__3824__auto____6672;
} else
{return G__6670__6671.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6670__6671.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6670__6671);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6670__6671);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__6673 = cljs.core.seq.call(null,coll);
if((s__6673 == null))
{return null;
} else
{return cljs.core._first.call(null,s__6673);
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
{if((function (){var G__6678__6679 = coll;
if(G__6678__6679)
{if((function (){var or__3824__auto____6680 = (G__6678__6679.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6680)
{return or__3824__auto____6680;
} else
{return G__6678__6679.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6678__6679.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6678__6679);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6678__6679);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__6681 = cljs.core.seq.call(null,coll);
if(!((s__6681 == null)))
{return cljs.core._rest.call(null,s__6681);
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
{if((function (){var G__6685__6686 = coll;
if(G__6685__6686)
{if((function (){var or__3824__auto____6687 = (G__6685__6686.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____6687)
{return or__3824__auto____6687;
} else
{return G__6685__6686.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__6685__6686.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6685__6686);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6685__6686);
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
var sn__6689 = cljs.core.next.call(null,s);
if(!((sn__6689 == null)))
{{
var G__6690 = sn__6689;
s = G__6690;
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
var G__6691__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__6692 = conj.call(null,coll,x);
var G__6693 = cljs.core.first.call(null,xs);
var G__6694 = cljs.core.next.call(null,xs);
coll = G__6692;
x = G__6693;
xs = G__6694;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__6691 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6691__delegate.call(this, coll, x, xs);
};
G__6691.cljs$lang$maxFixedArity = 2;
G__6691.cljs$lang$applyTo = (function (arglist__6695){
var coll = cljs.core.first(arglist__6695);
var x = cljs.core.first(cljs.core.next(arglist__6695));
var xs = cljs.core.rest(cljs.core.next(arglist__6695));
return G__6691__delegate(coll, x, xs);
});
G__6691.cljs$lang$arity$variadic = G__6691__delegate;
return G__6691;
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
var s__6698 = cljs.core.seq.call(null,coll);
var acc__6699 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__6698))
{return (acc__6699 + cljs.core._count.call(null,s__6698));
} else
{{
var G__6700 = cljs.core.next.call(null,s__6698);
var G__6701 = (acc__6699 + 1);
s__6698 = G__6700;
acc__6699 = G__6701;
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
{if((function (){var G__6708__6709 = coll;
if(G__6708__6709)
{if((function (){var or__3824__auto____6710 = (G__6708__6709.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6710)
{return or__3824__auto____6710;
} else
{return G__6708__6709.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6708__6709.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6708__6709);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6708__6709);
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
{if((function (){var G__6711__6712 = coll;
if(G__6711__6712)
{if((function (){var or__3824__auto____6713 = (G__6711__6712.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6713)
{return or__3824__auto____6713;
} else
{return G__6711__6712.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6711__6712.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6711__6712);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6711__6712);
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
var G__6716__delegate = function (coll,k,v,kvs){
while(true){
var ret__6715 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__6717 = ret__6715;
var G__6718 = cljs.core.first.call(null,kvs);
var G__6719 = cljs.core.second.call(null,kvs);
var G__6720 = cljs.core.nnext.call(null,kvs);
coll = G__6717;
k = G__6718;
v = G__6719;
kvs = G__6720;
continue;
}
} else
{return ret__6715;
}
break;
}
};
var G__6716 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6716__delegate.call(this, coll, k, v, kvs);
};
G__6716.cljs$lang$maxFixedArity = 3;
G__6716.cljs$lang$applyTo = (function (arglist__6721){
var coll = cljs.core.first(arglist__6721);
var k = cljs.core.first(cljs.core.next(arglist__6721));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6721)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6721)));
return G__6716__delegate(coll, k, v, kvs);
});
G__6716.cljs$lang$arity$variadic = G__6716__delegate;
return G__6716;
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
var G__6724__delegate = function (coll,k,ks){
while(true){
var ret__6723 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6725 = ret__6723;
var G__6726 = cljs.core.first.call(null,ks);
var G__6727 = cljs.core.next.call(null,ks);
coll = G__6725;
k = G__6726;
ks = G__6727;
continue;
}
} else
{return ret__6723;
}
break;
}
};
var G__6724 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6724__delegate.call(this, coll, k, ks);
};
G__6724.cljs$lang$maxFixedArity = 2;
G__6724.cljs$lang$applyTo = (function (arglist__6728){
var coll = cljs.core.first(arglist__6728);
var k = cljs.core.first(cljs.core.next(arglist__6728));
var ks = cljs.core.rest(cljs.core.next(arglist__6728));
return G__6724__delegate(coll, k, ks);
});
G__6724.cljs$lang$arity$variadic = G__6724__delegate;
return G__6724;
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
if((function (){var G__6732__6733 = o;
if(G__6732__6733)
{if((function (){var or__3824__auto____6734 = (G__6732__6733.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____6734)
{return or__3824__auto____6734;
} else
{return G__6732__6733.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__6732__6733.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6732__6733);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6732__6733);
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
var G__6737__delegate = function (coll,k,ks){
while(true){
var ret__6736 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6738 = ret__6736;
var G__6739 = cljs.core.first.call(null,ks);
var G__6740 = cljs.core.next.call(null,ks);
coll = G__6738;
k = G__6739;
ks = G__6740;
continue;
}
} else
{return ret__6736;
}
break;
}
};
var G__6737 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6737__delegate.call(this, coll, k, ks);
};
G__6737.cljs$lang$maxFixedArity = 2;
G__6737.cljs$lang$applyTo = (function (arglist__6741){
var coll = cljs.core.first(arglist__6741);
var k = cljs.core.first(cljs.core.next(arglist__6741));
var ks = cljs.core.rest(cljs.core.next(arglist__6741));
return G__6737__delegate(coll, k, ks);
});
G__6737.cljs$lang$arity$variadic = G__6737__delegate;
return G__6737;
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
var h__6743 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__6743);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__6743;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__6745 = (cljs.core.string_hash_cache[k]);
if(!((h__6745 == null)))
{return h__6745;
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
if((function (){var and__3822__auto____6747 = goog.isString(o);
if(and__3822__auto____6747)
{return check_cache;
} else
{return and__3822__auto____6747;
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
{var G__6751__6752 = x;
if(G__6751__6752)
{if((function (){var or__3824__auto____6753 = (G__6751__6752.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____6753)
{return or__3824__auto____6753;
} else
{return G__6751__6752.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__6751__6752.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6751__6752);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6751__6752);
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
{var G__6757__6758 = x;
if(G__6757__6758)
{if((function (){var or__3824__auto____6759 = (G__6757__6758.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____6759)
{return or__3824__auto____6759;
} else
{return G__6757__6758.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__6757__6758.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6757__6758);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6757__6758);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__6763__6764 = x;
if(G__6763__6764)
{if((function (){var or__3824__auto____6765 = (G__6763__6764.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____6765)
{return or__3824__auto____6765;
} else
{return G__6763__6764.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__6763__6764.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6763__6764);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6763__6764);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__6769__6770 = x;
if(G__6769__6770)
{if((function (){var or__3824__auto____6771 = (G__6769__6770.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____6771)
{return or__3824__auto____6771;
} else
{return G__6769__6770.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__6769__6770.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6769__6770);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6769__6770);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__6775__6776 = x;
if(G__6775__6776)
{if((function (){var or__3824__auto____6777 = (G__6775__6776.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____6777)
{return or__3824__auto____6777;
} else
{return G__6775__6776.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__6775__6776.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6775__6776);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6775__6776);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__6781__6782 = x;
if(G__6781__6782)
{if((function (){var or__3824__auto____6783 = (G__6781__6782.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6783)
{return or__3824__auto____6783;
} else
{return G__6781__6782.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6781__6782.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6781__6782);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6781__6782);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__6787__6788 = x;
if(G__6787__6788)
{if((function (){var or__3824__auto____6789 = (G__6787__6788.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6789)
{return or__3824__auto____6789;
} else
{return G__6787__6788.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6787__6788.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6787__6788);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6787__6788);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6793__6794 = x;
if(G__6793__6794)
{if((function (){var or__3824__auto____6795 = (G__6793__6794.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____6795)
{return or__3824__auto____6795;
} else
{return G__6793__6794.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__6793__6794.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6793__6794);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6793__6794);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__6799__6800 = x;
if(G__6799__6800)
{if((function (){var or__3824__auto____6801 = (G__6799__6800.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____6801)
{return or__3824__auto____6801;
} else
{return G__6799__6800.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__6799__6800.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6799__6800);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6799__6800);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__6805__6806 = x;
if(G__6805__6806)
{if(cljs.core.truth_((function (){var or__3824__auto____6807 = null;
if(cljs.core.truth_(or__3824__auto____6807))
{return or__3824__auto____6807;
} else
{return G__6805__6806.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__6805__6806.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__6805__6806);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__6805__6806);
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
var G__6808__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__6808 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6808__delegate.call(this, keyvals);
};
G__6808.cljs$lang$maxFixedArity = 0;
G__6808.cljs$lang$applyTo = (function (arglist__6809){
var keyvals = cljs.core.seq(arglist__6809);;
return G__6808__delegate(keyvals);
});
G__6808.cljs$lang$arity$variadic = G__6808__delegate;
return G__6808;
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
var keys__6811 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__6811.push(key);
}));
return keys__6811;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__6815 = i;
var j__6816 = j;
var len__6817 = len;
while(true){
if((len__6817 === 0))
{return to;
} else
{(to[j__6816] = (from[i__6815]));
{
var G__6818 = (i__6815 + 1);
var G__6819 = (j__6816 + 1);
var G__6820 = (len__6817 - 1);
i__6815 = G__6818;
j__6816 = G__6819;
len__6817 = G__6820;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__6824 = (i + (len - 1));
var j__6825 = (j + (len - 1));
var len__6826 = len;
while(true){
if((len__6826 === 0))
{return to;
} else
{(to[j__6825] = (from[i__6824]));
{
var G__6827 = (i__6824 - 1);
var G__6828 = (j__6825 - 1);
var G__6829 = (len__6826 - 1);
i__6824 = G__6827;
j__6825 = G__6828;
len__6826 = G__6829;
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
{var G__6833__6834 = s;
if(G__6833__6834)
{if((function (){var or__3824__auto____6835 = (G__6833__6834.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6835)
{return or__3824__auto____6835;
} else
{return G__6833__6834.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6833__6834.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6833__6834);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6833__6834);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__6839__6840 = s;
if(G__6839__6840)
{if((function (){var or__3824__auto____6841 = (G__6839__6840.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____6841)
{return or__3824__auto____6841;
} else
{return G__6839__6840.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6839__6840.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6839__6840);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6839__6840);
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
var and__3822__auto____6844 = goog.isString(x);
if(and__3822__auto____6844)
{return !((function (){var or__3824__auto____6845 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____6845)
{return or__3824__auto____6845;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____6844;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____6847 = goog.isString(x);
if(and__3822__auto____6847)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____6847;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____6849 = goog.isString(x);
if(and__3822__auto____6849)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____6849;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____6854 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____6854)
{return or__3824__auto____6854;
} else
{var G__6855__6856 = f;
if(G__6855__6856)
{if((function (){var or__3824__auto____6857 = (G__6855__6856.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____6857)
{return or__3824__auto____6857;
} else
{return G__6855__6856.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__6855__6856.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__6855__6856);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__6855__6856);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____6859 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____6859)
{return (n == n.toFixed());
} else
{return and__3822__auto____6859;
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
if(cljs.core.truth_((function (){var and__3822__auto____6862 = coll;
if(cljs.core.truth_(and__3822__auto____6862))
{var and__3822__auto____6863 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____6863)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____6863;
}
} else
{return and__3822__auto____6862;
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
var G__6872__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__6868 = cljs.core.set([y,x]);
var xs__6869 = more;
while(true){
var x__6870 = cljs.core.first.call(null,xs__6869);
var etc__6871 = cljs.core.next.call(null,xs__6869);
if(cljs.core.truth_(xs__6869))
{if(cljs.core.contains_QMARK_.call(null,s__6868,x__6870))
{return false;
} else
{{
var G__6873 = cljs.core.conj.call(null,s__6868,x__6870);
var G__6874 = etc__6871;
s__6868 = G__6873;
xs__6869 = G__6874;
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
var G__6872 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6872__delegate.call(this, x, y, more);
};
G__6872.cljs$lang$maxFixedArity = 2;
G__6872.cljs$lang$applyTo = (function (arglist__6875){
var x = cljs.core.first(arglist__6875);
var y = cljs.core.first(cljs.core.next(arglist__6875));
var more = cljs.core.rest(cljs.core.next(arglist__6875));
return G__6872__delegate(x, y, more);
});
G__6872.cljs$lang$arity$variadic = G__6872__delegate;
return G__6872;
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
{if((function (){var G__6879__6880 = x;
if(G__6879__6880)
{if(cljs.core.truth_((function (){var or__3824__auto____6881 = null;
if(cljs.core.truth_(or__3824__auto____6881))
{return or__3824__auto____6881;
} else
{return G__6879__6880.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__6879__6880.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__6879__6880);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__6879__6880);
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
var xl__6886 = cljs.core.count.call(null,xs);
var yl__6887 = cljs.core.count.call(null,ys);
if((xl__6886 < yl__6887))
{return -1;
} else
{if((xl__6886 > yl__6887))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__6886,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__6888 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____6889 = (d__6888 === 0);
if(and__3822__auto____6889)
{return ((n + 1) < len);
} else
{return and__3822__auto____6889;
}
})())
{{
var G__6890 = xs;
var G__6891 = ys;
var G__6892 = len;
var G__6893 = (n + 1);
xs = G__6890;
ys = G__6891;
len = G__6892;
n = G__6893;
continue;
}
} else
{return d__6888;
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
var r__6895 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__6895))
{return r__6895;
} else
{if(cljs.core.truth_(r__6895))
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
{var a__6897 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__6897,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__6897);
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
var temp__3971__auto____6903 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____6903)
{var s__6904 = temp__3971__auto____6903;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__6904),cljs.core.next.call(null,s__6904));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__6905 = val;
var coll__6906 = cljs.core.seq.call(null,coll);
while(true){
if(coll__6906)
{var nval__6907 = f.call(null,val__6905,cljs.core.first.call(null,coll__6906));
if(cljs.core.reduced_QMARK_.call(null,nval__6907))
{return cljs.core.deref.call(null,nval__6907);
} else
{{
var G__6908 = nval__6907;
var G__6909 = cljs.core.next.call(null,coll__6906);
val__6905 = G__6908;
coll__6906 = G__6909;
continue;
}
}
} else
{return val__6905;
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
var a__6911 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__6911);
return cljs.core.vec.call(null,a__6911);
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
if((function (){var G__6918__6919 = coll;
if(G__6918__6919)
{if((function (){var or__3824__auto____6920 = (G__6918__6919.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6920)
{return or__3824__auto____6920;
} else
{return G__6918__6919.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6918__6919.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6918__6919);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6918__6919);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__6921__6922 = coll;
if(G__6921__6922)
{if((function (){var or__3824__auto____6923 = (G__6921__6922.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6923)
{return or__3824__auto____6923;
} else
{return G__6921__6922.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6921__6922.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6921__6922);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6921__6922);
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__6924 = this;
return this__6924.val;
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
var G__6925__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__6925 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6925__delegate.call(this, x, y, more);
};
G__6925.cljs$lang$maxFixedArity = 2;
G__6925.cljs$lang$applyTo = (function (arglist__6926){
var x = cljs.core.first(arglist__6926);
var y = cljs.core.first(cljs.core.next(arglist__6926));
var more = cljs.core.rest(cljs.core.next(arglist__6926));
return G__6925__delegate(x, y, more);
});
G__6925.cljs$lang$arity$variadic = G__6925__delegate;
return G__6925;
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
var G__6927__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__6927 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6927__delegate.call(this, x, y, more);
};
G__6927.cljs$lang$maxFixedArity = 2;
G__6927.cljs$lang$applyTo = (function (arglist__6928){
var x = cljs.core.first(arglist__6928);
var y = cljs.core.first(cljs.core.next(arglist__6928));
var more = cljs.core.rest(cljs.core.next(arglist__6928));
return G__6927__delegate(x, y, more);
});
G__6927.cljs$lang$arity$variadic = G__6927__delegate;
return G__6927;
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
var G__6929__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__6929 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6929__delegate.call(this, x, y, more);
};
G__6929.cljs$lang$maxFixedArity = 2;
G__6929.cljs$lang$applyTo = (function (arglist__6930){
var x = cljs.core.first(arglist__6930);
var y = cljs.core.first(cljs.core.next(arglist__6930));
var more = cljs.core.rest(cljs.core.next(arglist__6930));
return G__6929__delegate(x, y, more);
});
G__6929.cljs$lang$arity$variadic = G__6929__delegate;
return G__6929;
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
var G__6931__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__6931 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6931__delegate.call(this, x, y, more);
};
G__6931.cljs$lang$maxFixedArity = 2;
G__6931.cljs$lang$applyTo = (function (arglist__6932){
var x = cljs.core.first(arglist__6932);
var y = cljs.core.first(cljs.core.next(arglist__6932));
var more = cljs.core.rest(cljs.core.next(arglist__6932));
return G__6931__delegate(x, y, more);
});
G__6931.cljs$lang$arity$variadic = G__6931__delegate;
return G__6931;
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
var G__6933__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__6934 = y;
var G__6935 = cljs.core.first.call(null,more);
var G__6936 = cljs.core.next.call(null,more);
x = G__6934;
y = G__6935;
more = G__6936;
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
var G__6933 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6933__delegate.call(this, x, y, more);
};
G__6933.cljs$lang$maxFixedArity = 2;
G__6933.cljs$lang$applyTo = (function (arglist__6937){
var x = cljs.core.first(arglist__6937);
var y = cljs.core.first(cljs.core.next(arglist__6937));
var more = cljs.core.rest(cljs.core.next(arglist__6937));
return G__6933__delegate(x, y, more);
});
G__6933.cljs$lang$arity$variadic = G__6933__delegate;
return G__6933;
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
var G__6938__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__6939 = y;
var G__6940 = cljs.core.first.call(null,more);
var G__6941 = cljs.core.next.call(null,more);
x = G__6939;
y = G__6940;
more = G__6941;
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
var G__6938 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6938__delegate.call(this, x, y, more);
};
G__6938.cljs$lang$maxFixedArity = 2;
G__6938.cljs$lang$applyTo = (function (arglist__6942){
var x = cljs.core.first(arglist__6942);
var y = cljs.core.first(cljs.core.next(arglist__6942));
var more = cljs.core.rest(cljs.core.next(arglist__6942));
return G__6938__delegate(x, y, more);
});
G__6938.cljs$lang$arity$variadic = G__6938__delegate;
return G__6938;
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
var G__6943__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__6944 = y;
var G__6945 = cljs.core.first.call(null,more);
var G__6946 = cljs.core.next.call(null,more);
x = G__6944;
y = G__6945;
more = G__6946;
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
var G__6943 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6943__delegate.call(this, x, y, more);
};
G__6943.cljs$lang$maxFixedArity = 2;
G__6943.cljs$lang$applyTo = (function (arglist__6947){
var x = cljs.core.first(arglist__6947);
var y = cljs.core.first(cljs.core.next(arglist__6947));
var more = cljs.core.rest(cljs.core.next(arglist__6947));
return G__6943__delegate(x, y, more);
});
G__6943.cljs$lang$arity$variadic = G__6943__delegate;
return G__6943;
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
var G__6948__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__6949 = y;
var G__6950 = cljs.core.first.call(null,more);
var G__6951 = cljs.core.next.call(null,more);
x = G__6949;
y = G__6950;
more = G__6951;
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
var G__6948 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6948__delegate.call(this, x, y, more);
};
G__6948.cljs$lang$maxFixedArity = 2;
G__6948.cljs$lang$applyTo = (function (arglist__6952){
var x = cljs.core.first(arglist__6952);
var y = cljs.core.first(cljs.core.next(arglist__6952));
var more = cljs.core.rest(cljs.core.next(arglist__6952));
return G__6948__delegate(x, y, more);
});
G__6948.cljs$lang$arity$variadic = G__6948__delegate;
return G__6948;
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
var G__6953__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__6953 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6953__delegate.call(this, x, y, more);
};
G__6953.cljs$lang$maxFixedArity = 2;
G__6953.cljs$lang$applyTo = (function (arglist__6954){
var x = cljs.core.first(arglist__6954);
var y = cljs.core.first(cljs.core.next(arglist__6954));
var more = cljs.core.rest(cljs.core.next(arglist__6954));
return G__6953__delegate(x, y, more);
});
G__6953.cljs$lang$arity$variadic = G__6953__delegate;
return G__6953;
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
var G__6955__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__6955 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6955__delegate.call(this, x, y, more);
};
G__6955.cljs$lang$maxFixedArity = 2;
G__6955.cljs$lang$applyTo = (function (arglist__6956){
var x = cljs.core.first(arglist__6956);
var y = cljs.core.first(cljs.core.next(arglist__6956));
var more = cljs.core.rest(cljs.core.next(arglist__6956));
return G__6955__delegate(x, y, more);
});
G__6955.cljs$lang$arity$variadic = G__6955__delegate;
return G__6955;
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
var rem__6958 = (n % d);
return cljs.core.fix.call(null,((n - rem__6958) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__6960 = cljs.core.quot.call(null,n,d);
return (n - (d * q__6960));
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
var v__6963 = (v - ((v >> 1) & 1431655765));
var v__6964 = ((v__6963 & 858993459) + ((v__6963 >> 2) & 858993459));
return ((((v__6964 + (v__6964 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__6965__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__6966 = y;
var G__6967 = cljs.core.first.call(null,more);
var G__6968 = cljs.core.next.call(null,more);
x = G__6966;
y = G__6967;
more = G__6968;
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
var G__6965 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6965__delegate.call(this, x, y, more);
};
G__6965.cljs$lang$maxFixedArity = 2;
G__6965.cljs$lang$applyTo = (function (arglist__6969){
var x = cljs.core.first(arglist__6969);
var y = cljs.core.first(cljs.core.next(arglist__6969));
var more = cljs.core.rest(cljs.core.next(arglist__6969));
return G__6965__delegate(x, y, more);
});
G__6965.cljs$lang$arity$variadic = G__6965__delegate;
return G__6965;
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
var n__6973 = n;
var xs__6974 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6975 = xs__6974;
if(and__3822__auto____6975)
{return (n__6973 > 0);
} else
{return and__3822__auto____6975;
}
})()))
{{
var G__6976 = (n__6973 - 1);
var G__6977 = cljs.core.next.call(null,xs__6974);
n__6973 = G__6976;
xs__6974 = G__6977;
continue;
}
} else
{return xs__6974;
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
var G__6978__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6979 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__6980 = cljs.core.next.call(null,more);
sb = G__6979;
more = G__6980;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__6978 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6978__delegate.call(this, x, ys);
};
G__6978.cljs$lang$maxFixedArity = 1;
G__6978.cljs$lang$applyTo = (function (arglist__6981){
var x = cljs.core.first(arglist__6981);
var ys = cljs.core.rest(arglist__6981);
return G__6978__delegate(x, ys);
});
G__6978.cljs$lang$arity$variadic = G__6978__delegate;
return G__6978;
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
var G__6982__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6983 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__6984 = cljs.core.next.call(null,more);
sb = G__6983;
more = G__6984;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__6982 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6982__delegate.call(this, x, ys);
};
G__6982.cljs$lang$maxFixedArity = 1;
G__6982.cljs$lang$applyTo = (function (arglist__6985){
var x = cljs.core.first(arglist__6985);
var ys = cljs.core.rest(arglist__6985);
return G__6982__delegate(x, ys);
});
G__6982.cljs$lang$arity$variadic = G__6982__delegate;
return G__6982;
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__6988 = cljs.core.seq.call(null,x);
var ys__6989 = cljs.core.seq.call(null,y);
while(true){
if((xs__6988 == null))
{return (ys__6989 == null);
} else
{if((ys__6989 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__6988),cljs.core.first.call(null,ys__6989)))
{{
var G__6990 = cljs.core.next.call(null,xs__6988);
var G__6991 = cljs.core.next.call(null,ys__6989);
xs__6988 = G__6990;
ys__6989 = G__6991;
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
return cljs.core.reduce.call(null,(function (p1__6992_SHARP_,p2__6993_SHARP_){
return cljs.core.hash_combine.call(null,p1__6992_SHARP_,cljs.core.hash.call(null,p2__6993_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__6997 = 0;
var s__6998 = cljs.core.seq.call(null,m);
while(true){
if(s__6998)
{var e__6999 = cljs.core.first.call(null,s__6998);
{
var G__7000 = ((h__6997 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__6999)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__6999)))) % 4503599627370496);
var G__7001 = cljs.core.next.call(null,s__6998);
h__6997 = G__7000;
s__6998 = G__7001;
continue;
}
} else
{return h__6997;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7005 = 0;
var s__7006 = cljs.core.seq.call(null,s);
while(true){
if(s__7006)
{var e__7007 = cljs.core.first.call(null,s__7006);
{
var G__7008 = ((h__7005 + cljs.core.hash.call(null,e__7007)) % 4503599627370496);
var G__7009 = cljs.core.next.call(null,s__7006);
h__7005 = G__7008;
s__7006 = G__7009;
continue;
}
} else
{return h__7005;
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
var G__7030__7031 = cljs.core.seq.call(null,fn_map);
if(G__7030__7031)
{var G__7033__7035 = cljs.core.first.call(null,G__7030__7031);
var vec__7034__7036 = G__7033__7035;
var key_name__7037 = cljs.core.nth.call(null,vec__7034__7036,0,null);
var f__7038 = cljs.core.nth.call(null,vec__7034__7036,1,null);
var G__7030__7039 = G__7030__7031;
var G__7033__7040 = G__7033__7035;
var G__7030__7041 = G__7030__7039;
while(true){
var vec__7042__7043 = G__7033__7040;
var key_name__7044 = cljs.core.nth.call(null,vec__7042__7043,0,null);
var f__7045 = cljs.core.nth.call(null,vec__7042__7043,1,null);
var G__7030__7046 = G__7030__7041;
var str_name__7047 = cljs.core.name.call(null,key_name__7044);
(obj[str_name__7047] = f__7045);
var temp__3974__auto____7048 = cljs.core.next.call(null,G__7030__7046);
if(temp__3974__auto____7048)
{var G__7030__7049 = temp__3974__auto____7048;
{
var G__7050 = cljs.core.first.call(null,G__7030__7049);
var G__7051 = G__7030__7049;
G__7033__7040 = G__7050;
G__7030__7041 = G__7051;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7052 = this;
var h__2260__auto____7053 = this__7052.__hash;
if(!((h__2260__auto____7053 == null)))
{return h__2260__auto____7053;
} else
{var h__2260__auto____7054 = cljs.core.hash_coll.call(null,coll);
this__7052.__hash = h__2260__auto____7054;
return h__2260__auto____7054;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7055 = this;
if((this__7055.count === 1))
{return null;
} else
{return this__7055.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7056 = this;
return (new cljs.core.List(this__7056.meta,o,coll,(this__7056.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7057 = this;
var this__7058 = this;
return cljs.core.pr_str.call(null,this__7058);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7059 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7060 = this;
return this__7060.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7061 = this;
return this__7061.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7062 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7063 = this;
return this__7063.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7064 = this;
if((this__7064.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7064.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7065 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7066 = this;
return (new cljs.core.List(meta,this__7066.first,this__7066.rest,this__7066.count,this__7066.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7067 = this;
return this__7067.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7068 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7069 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7070 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7071 = this;
return (new cljs.core.List(this__7071.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7072 = this;
var this__7073 = this;
return cljs.core.pr_str.call(null,this__7073);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7074 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7075 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7076 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7077 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7078 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7079 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7080 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7081 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7082 = this;
return this__7082.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7083 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7087__7088 = coll;
if(G__7087__7088)
{if((function (){var or__3824__auto____7089 = (G__7087__7088.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7089)
{return or__3824__auto____7089;
} else
{return G__7087__7088.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7087__7088.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7087__7088);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7087__7088);
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
var G__7090__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7090 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7090__delegate.call(this, x, y, z, items);
};
G__7090.cljs$lang$maxFixedArity = 3;
G__7090.cljs$lang$applyTo = (function (arglist__7091){
var x = cljs.core.first(arglist__7091);
var y = cljs.core.first(cljs.core.next(arglist__7091));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7091)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7091)));
return G__7090__delegate(x, y, z, items);
});
G__7090.cljs$lang$arity$variadic = G__7090__delegate;
return G__7090;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7092 = this;
var h__2260__auto____7093 = this__7092.__hash;
if(!((h__2260__auto____7093 == null)))
{return h__2260__auto____7093;
} else
{var h__2260__auto____7094 = cljs.core.hash_coll.call(null,coll);
this__7092.__hash = h__2260__auto____7094;
return h__2260__auto____7094;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7095 = this;
if((this__7095.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7095.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7096 = this;
return (new cljs.core.Cons(null,o,coll,this__7096.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7097 = this;
var this__7098 = this;
return cljs.core.pr_str.call(null,this__7098);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7099 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7100 = this;
return this__7100.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7101 = this;
if((this__7101.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7101.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7102 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7103 = this;
return (new cljs.core.Cons(meta,this__7103.first,this__7103.rest,this__7103.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7104 = this;
return this__7104.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7105 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7105.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7110 = (coll == null);
if(or__3824__auto____7110)
{return or__3824__auto____7110;
} else
{var G__7111__7112 = coll;
if(G__7111__7112)
{if((function (){var or__3824__auto____7113 = (G__7111__7112.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7113)
{return or__3824__auto____7113;
} else
{return G__7111__7112.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7111__7112.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7111__7112);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7111__7112);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7117__7118 = x;
if(G__7117__7118)
{if((function (){var or__3824__auto____7119 = (G__7117__7118.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7119)
{return or__3824__auto____7119;
} else
{return G__7117__7118.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7117__7118.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7117__7118);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7117__7118);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7120 = null;
var G__7120__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7120__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7120 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7120__2.call(this,string,f);
case 3:
return G__7120__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7120;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7121 = null;
var G__7121__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7121__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7121 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7121__2.call(this,string,k);
case 3:
return G__7121__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7121;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7122 = null;
var G__7122__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7122__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7122 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7122__2.call(this,string,n);
case 3:
return G__7122__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7122;
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
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function (this_sym7125,coll){
var this__7126 = this;
var this_sym7125__7127 = this;
var ___7128 = this_sym7125__7127;
if((coll == null))
{return null;
} else
{var strobj__7129 = coll.strobj;
if((strobj__7129 == null))
{return cljs.core._lookup.call(null,coll,this__7126.k,null);
} else
{return (strobj__7129[this__7126.k]);
}
}
});
cljs.core.Keyword.prototype.apply = (function (this_sym7123,args7124){
var this__7130 = this;
return this_sym7123.call.apply(this_sym7123,[this_sym7123].concat(args7124.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7139 = null;
var G__7139__2 = (function (this_sym7133,coll){
var this_sym7133__7135 = this;
var this__7136 = this_sym7133__7135;
return cljs.core._lookup.call(null,coll,this__7136.toString(),null);
});
var G__7139__3 = (function (this_sym7134,coll,not_found){
var this_sym7134__7137 = this;
var this__7138 = this_sym7134__7137;
return cljs.core._lookup.call(null,coll,this__7138.toString(),not_found);
});
G__7139 = function(this_sym7134,coll,not_found){
switch(arguments.length){
case 2:
return G__7139__2.call(this,this_sym7134,coll);
case 3:
return G__7139__3.call(this,this_sym7134,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7139;
})()
;
String.prototype.apply = (function (this_sym7131,args7132){
return this_sym7131.call.apply(this_sym7131,[this_sym7131].concat(args7132.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7141 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7141;
} else
{lazy_seq.x = x__7141.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7142 = this;
var h__2260__auto____7143 = this__7142.__hash;
if(!((h__2260__auto____7143 == null)))
{return h__2260__auto____7143;
} else
{var h__2260__auto____7144 = cljs.core.hash_coll.call(null,coll);
this__7142.__hash = h__2260__auto____7144;
return h__2260__auto____7144;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7145 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7146 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7147 = this;
var this__7148 = this;
return cljs.core.pr_str.call(null,this__7148);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7149 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7150 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7151 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7152 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7153 = this;
return (new cljs.core.LazySeq(meta,this__7153.realized,this__7153.x,this__7153.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7154 = this;
return this__7154.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7155 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7155.meta);
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7156 = this;
return this__7156.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7157 = this;
var ___7158 = this;
(this__7157.buf[this__7157.end] = o);
return this__7157.end = (this__7157.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7159 = this;
var ___7160 = this;
var ret__7161 = (new cljs.core.ArrayChunk(this__7159.buf,0,this__7159.end));
this__7159.buf = null;
return ret__7161;
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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7162 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7162.arr[this__7162.off]),(this__7162.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7163 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7163.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7164 = this;
if((this__7164.off === this__7164.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7164.arr,(this__7164.off + 1),this__7164.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7165 = this;
return (this__7165.arr[(this__7165.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7166 = this;
if((function (){var and__3822__auto____7167 = (i >= 0);
if(and__3822__auto____7167)
{return (i < (this__7166.end - this__7166.off));
} else
{return and__3822__auto____7167;
}
})())
{return (this__7166.arr[(this__7166.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7168 = this;
return (this__7168.end - this__7168.off);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__7169 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7170 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7171 = this;
return cljs.core._nth.call(null,this__7171.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7172 = this;
if((cljs.core._count.call(null,this__7172.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7172.chunk),this__7172.more,this__7172.meta));
} else
{if((this__7172.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7172.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7173 = this;
if((this__7173.more == null))
{return null;
} else
{return this__7173.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7174 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7175 = this;
return (new cljs.core.ChunkedCons(this__7175.chunk,this__7175.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7176 = this;
return this__7176.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7177 = this;
return this__7177.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7178 = this;
if((this__7178.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7178.more;
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
if((function (){var G__7182__7183 = s;
if(G__7182__7183)
{if(cljs.core.truth_((function (){var or__3824__auto____7184 = null;
if(cljs.core.truth_(or__3824__auto____7184))
{return or__3824__auto____7184;
} else
{return G__7182__7183.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7182__7183.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7182__7183);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7182__7183);
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
var ary__7187 = [];
var s__7188 = s;
while(true){
if(cljs.core.seq.call(null,s__7188))
{ary__7187.push(cljs.core.first.call(null,s__7188));
{
var G__7189 = cljs.core.next.call(null,s__7188);
s__7188 = G__7189;
continue;
}
} else
{return ary__7187;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7193 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7194 = 0;
var xs__7195 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7195)
{(ret__7193[i__7194] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7195)));
{
var G__7196 = (i__7194 + 1);
var G__7197 = cljs.core.next.call(null,xs__7195);
i__7194 = G__7196;
xs__7195 = G__7197;
continue;
}
} else
{}
break;
}
return ret__7193;
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
var a__7205 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7206 = cljs.core.seq.call(null,init_val_or_seq);
var i__7207 = 0;
var s__7208 = s__7206;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7209 = s__7208;
if(and__3822__auto____7209)
{return (i__7207 < size);
} else
{return and__3822__auto____7209;
}
})()))
{(a__7205[i__7207] = cljs.core.first.call(null,s__7208));
{
var G__7212 = (i__7207 + 1);
var G__7213 = cljs.core.next.call(null,s__7208);
i__7207 = G__7212;
s__7208 = G__7213;
continue;
}
} else
{return a__7205;
}
break;
}
} else
{var n__2599__auto____7210 = size;
var i__7211 = 0;
while(true){
if((i__7211 < n__2599__auto____7210))
{(a__7205[i__7211] = init_val_or_seq);
{
var G__7214 = (i__7211 + 1);
i__7211 = G__7214;
continue;
}
} else
{}
break;
}
return a__7205;
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
var a__7222 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7223 = cljs.core.seq.call(null,init_val_or_seq);
var i__7224 = 0;
var s__7225 = s__7223;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7226 = s__7225;
if(and__3822__auto____7226)
{return (i__7224 < size);
} else
{return and__3822__auto____7226;
}
})()))
{(a__7222[i__7224] = cljs.core.first.call(null,s__7225));
{
var G__7229 = (i__7224 + 1);
var G__7230 = cljs.core.next.call(null,s__7225);
i__7224 = G__7229;
s__7225 = G__7230;
continue;
}
} else
{return a__7222;
}
break;
}
} else
{var n__2599__auto____7227 = size;
var i__7228 = 0;
while(true){
if((i__7228 < n__2599__auto____7227))
{(a__7222[i__7228] = init_val_or_seq);
{
var G__7231 = (i__7228 + 1);
i__7228 = G__7231;
continue;
}
} else
{}
break;
}
return a__7222;
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
var a__7239 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7240 = cljs.core.seq.call(null,init_val_or_seq);
var i__7241 = 0;
var s__7242 = s__7240;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7243 = s__7242;
if(and__3822__auto____7243)
{return (i__7241 < size);
} else
{return and__3822__auto____7243;
}
})()))
{(a__7239[i__7241] = cljs.core.first.call(null,s__7242));
{
var G__7246 = (i__7241 + 1);
var G__7247 = cljs.core.next.call(null,s__7242);
i__7241 = G__7246;
s__7242 = G__7247;
continue;
}
} else
{return a__7239;
}
break;
}
} else
{var n__2599__auto____7244 = size;
var i__7245 = 0;
while(true){
if((i__7245 < n__2599__auto____7244))
{(a__7239[i__7245] = init_val_or_seq);
{
var G__7248 = (i__7245 + 1);
i__7245 = G__7248;
continue;
}
} else
{}
break;
}
return a__7239;
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
{var s__7253 = s;
var i__7254 = n;
var sum__7255 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7256 = (i__7254 > 0);
if(and__3822__auto____7256)
{return cljs.core.seq.call(null,s__7253);
} else
{return and__3822__auto____7256;
}
})()))
{{
var G__7257 = cljs.core.next.call(null,s__7253);
var G__7258 = (i__7254 - 1);
var G__7259 = (sum__7255 + 1);
s__7253 = G__7257;
i__7254 = G__7258;
sum__7255 = G__7259;
continue;
}
} else
{return sum__7255;
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
var s__7264 = cljs.core.seq.call(null,x);
if(s__7264)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7264))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7264),concat.call(null,cljs.core.chunk_rest.call(null,s__7264),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7264),concat.call(null,cljs.core.rest.call(null,s__7264),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7268__delegate = function (x,y,zs){
var cat__7267 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7266 = cljs.core.seq.call(null,xys);
if(xys__7266)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7266))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7266),cat.call(null,cljs.core.chunk_rest.call(null,xys__7266),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7266),cat.call(null,cljs.core.rest.call(null,xys__7266),zs));
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
return cat__7267.call(null,concat.call(null,x,y),zs);
};
var G__7268 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7268__delegate.call(this, x, y, zs);
};
G__7268.cljs$lang$maxFixedArity = 2;
G__7268.cljs$lang$applyTo = (function (arglist__7269){
var x = cljs.core.first(arglist__7269);
var y = cljs.core.first(cljs.core.next(arglist__7269));
var zs = cljs.core.rest(cljs.core.next(arglist__7269));
return G__7268__delegate(x, y, zs);
});
G__7268.cljs$lang$arity$variadic = G__7268__delegate;
return G__7268;
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
var G__7270__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7270 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7270__delegate.call(this, a, b, c, d, more);
};
G__7270.cljs$lang$maxFixedArity = 4;
G__7270.cljs$lang$applyTo = (function (arglist__7271){
var a = cljs.core.first(arglist__7271);
var b = cljs.core.first(cljs.core.next(arglist__7271));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7271)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7271))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7271))));
return G__7270__delegate(a, b, c, d, more);
});
G__7270.cljs$lang$arity$variadic = G__7270__delegate;
return G__7270;
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
var args__7313 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7314 = cljs.core._first.call(null,args__7313);
var args__7315 = cljs.core._rest.call(null,args__7313);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7314);
} else
{return f.call(null,a__7314);
}
} else
{var b__7316 = cljs.core._first.call(null,args__7315);
var args__7317 = cljs.core._rest.call(null,args__7315);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7314,b__7316);
} else
{return f.call(null,a__7314,b__7316);
}
} else
{var c__7318 = cljs.core._first.call(null,args__7317);
var args__7319 = cljs.core._rest.call(null,args__7317);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7314,b__7316,c__7318);
} else
{return f.call(null,a__7314,b__7316,c__7318);
}
} else
{var d__7320 = cljs.core._first.call(null,args__7319);
var args__7321 = cljs.core._rest.call(null,args__7319);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7314,b__7316,c__7318,d__7320);
} else
{return f.call(null,a__7314,b__7316,c__7318,d__7320);
}
} else
{var e__7322 = cljs.core._first.call(null,args__7321);
var args__7323 = cljs.core._rest.call(null,args__7321);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7314,b__7316,c__7318,d__7320,e__7322);
} else
{return f.call(null,a__7314,b__7316,c__7318,d__7320,e__7322);
}
} else
{var f__7324 = cljs.core._first.call(null,args__7323);
var args__7325 = cljs.core._rest.call(null,args__7323);
if((argc === 6))
{if(f__7324.cljs$lang$arity$6)
{return f__7324.cljs$lang$arity$6(a__7314,b__7316,c__7318,d__7320,e__7322,f__7324);
} else
{return f__7324.call(null,a__7314,b__7316,c__7318,d__7320,e__7322,f__7324);
}
} else
{var g__7326 = cljs.core._first.call(null,args__7325);
var args__7327 = cljs.core._rest.call(null,args__7325);
if((argc === 7))
{if(f__7324.cljs$lang$arity$7)
{return f__7324.cljs$lang$arity$7(a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326);
} else
{return f__7324.call(null,a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326);
}
} else
{var h__7328 = cljs.core._first.call(null,args__7327);
var args__7329 = cljs.core._rest.call(null,args__7327);
if((argc === 8))
{if(f__7324.cljs$lang$arity$8)
{return f__7324.cljs$lang$arity$8(a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328);
} else
{return f__7324.call(null,a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328);
}
} else
{var i__7330 = cljs.core._first.call(null,args__7329);
var args__7331 = cljs.core._rest.call(null,args__7329);
if((argc === 9))
{if(f__7324.cljs$lang$arity$9)
{return f__7324.cljs$lang$arity$9(a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330);
} else
{return f__7324.call(null,a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330);
}
} else
{var j__7332 = cljs.core._first.call(null,args__7331);
var args__7333 = cljs.core._rest.call(null,args__7331);
if((argc === 10))
{if(f__7324.cljs$lang$arity$10)
{return f__7324.cljs$lang$arity$10(a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332);
} else
{return f__7324.call(null,a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332);
}
} else
{var k__7334 = cljs.core._first.call(null,args__7333);
var args__7335 = cljs.core._rest.call(null,args__7333);
if((argc === 11))
{if(f__7324.cljs$lang$arity$11)
{return f__7324.cljs$lang$arity$11(a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334);
} else
{return f__7324.call(null,a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334);
}
} else
{var l__7336 = cljs.core._first.call(null,args__7335);
var args__7337 = cljs.core._rest.call(null,args__7335);
if((argc === 12))
{if(f__7324.cljs$lang$arity$12)
{return f__7324.cljs$lang$arity$12(a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334,l__7336);
} else
{return f__7324.call(null,a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334,l__7336);
}
} else
{var m__7338 = cljs.core._first.call(null,args__7337);
var args__7339 = cljs.core._rest.call(null,args__7337);
if((argc === 13))
{if(f__7324.cljs$lang$arity$13)
{return f__7324.cljs$lang$arity$13(a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334,l__7336,m__7338);
} else
{return f__7324.call(null,a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334,l__7336,m__7338);
}
} else
{var n__7340 = cljs.core._first.call(null,args__7339);
var args__7341 = cljs.core._rest.call(null,args__7339);
if((argc === 14))
{if(f__7324.cljs$lang$arity$14)
{return f__7324.cljs$lang$arity$14(a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334,l__7336,m__7338,n__7340);
} else
{return f__7324.call(null,a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334,l__7336,m__7338,n__7340);
}
} else
{var o__7342 = cljs.core._first.call(null,args__7341);
var args__7343 = cljs.core._rest.call(null,args__7341);
if((argc === 15))
{if(f__7324.cljs$lang$arity$15)
{return f__7324.cljs$lang$arity$15(a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334,l__7336,m__7338,n__7340,o__7342);
} else
{return f__7324.call(null,a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334,l__7336,m__7338,n__7340,o__7342);
}
} else
{var p__7344 = cljs.core._first.call(null,args__7343);
var args__7345 = cljs.core._rest.call(null,args__7343);
if((argc === 16))
{if(f__7324.cljs$lang$arity$16)
{return f__7324.cljs$lang$arity$16(a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334,l__7336,m__7338,n__7340,o__7342,p__7344);
} else
{return f__7324.call(null,a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334,l__7336,m__7338,n__7340,o__7342,p__7344);
}
} else
{var q__7346 = cljs.core._first.call(null,args__7345);
var args__7347 = cljs.core._rest.call(null,args__7345);
if((argc === 17))
{if(f__7324.cljs$lang$arity$17)
{return f__7324.cljs$lang$arity$17(a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334,l__7336,m__7338,n__7340,o__7342,p__7344,q__7346);
} else
{return f__7324.call(null,a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334,l__7336,m__7338,n__7340,o__7342,p__7344,q__7346);
}
} else
{var r__7348 = cljs.core._first.call(null,args__7347);
var args__7349 = cljs.core._rest.call(null,args__7347);
if((argc === 18))
{if(f__7324.cljs$lang$arity$18)
{return f__7324.cljs$lang$arity$18(a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334,l__7336,m__7338,n__7340,o__7342,p__7344,q__7346,r__7348);
} else
{return f__7324.call(null,a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334,l__7336,m__7338,n__7340,o__7342,p__7344,q__7346,r__7348);
}
} else
{var s__7350 = cljs.core._first.call(null,args__7349);
var args__7351 = cljs.core._rest.call(null,args__7349);
if((argc === 19))
{if(f__7324.cljs$lang$arity$19)
{return f__7324.cljs$lang$arity$19(a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334,l__7336,m__7338,n__7340,o__7342,p__7344,q__7346,r__7348,s__7350);
} else
{return f__7324.call(null,a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334,l__7336,m__7338,n__7340,o__7342,p__7344,q__7346,r__7348,s__7350);
}
} else
{var t__7352 = cljs.core._first.call(null,args__7351);
var args__7353 = cljs.core._rest.call(null,args__7351);
if((argc === 20))
{if(f__7324.cljs$lang$arity$20)
{return f__7324.cljs$lang$arity$20(a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334,l__7336,m__7338,n__7340,o__7342,p__7344,q__7346,r__7348,s__7350,t__7352);
} else
{return f__7324.call(null,a__7314,b__7316,c__7318,d__7320,e__7322,f__7324,g__7326,h__7328,i__7330,j__7332,k__7334,l__7336,m__7338,n__7340,o__7342,p__7344,q__7346,r__7348,s__7350,t__7352);
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
var fixed_arity__7368 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7369 = cljs.core.bounded_count.call(null,args,(fixed_arity__7368 + 1));
if((bc__7369 <= fixed_arity__7368))
{return cljs.core.apply_to.call(null,f,bc__7369,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7370 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7371 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7372 = cljs.core.bounded_count.call(null,arglist__7370,(fixed_arity__7371 + 1));
if((bc__7372 <= fixed_arity__7371))
{return cljs.core.apply_to.call(null,f,bc__7372,arglist__7370);
} else
{return f.cljs$lang$applyTo(arglist__7370);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7370));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7373 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7374 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7375 = cljs.core.bounded_count.call(null,arglist__7373,(fixed_arity__7374 + 1));
if((bc__7375 <= fixed_arity__7374))
{return cljs.core.apply_to.call(null,f,bc__7375,arglist__7373);
} else
{return f.cljs$lang$applyTo(arglist__7373);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7373));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7376 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7377 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7378 = cljs.core.bounded_count.call(null,arglist__7376,(fixed_arity__7377 + 1));
if((bc__7378 <= fixed_arity__7377))
{return cljs.core.apply_to.call(null,f,bc__7378,arglist__7376);
} else
{return f.cljs$lang$applyTo(arglist__7376);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7376));
}
});
var apply__6 = (function() { 
var G__7382__delegate = function (f,a,b,c,d,args){
var arglist__7379 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7380 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7381 = cljs.core.bounded_count.call(null,arglist__7379,(fixed_arity__7380 + 1));
if((bc__7381 <= fixed_arity__7380))
{return cljs.core.apply_to.call(null,f,bc__7381,arglist__7379);
} else
{return f.cljs$lang$applyTo(arglist__7379);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7379));
}
};
var G__7382 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7382__delegate.call(this, f, a, b, c, d, args);
};
G__7382.cljs$lang$maxFixedArity = 5;
G__7382.cljs$lang$applyTo = (function (arglist__7383){
var f = cljs.core.first(arglist__7383);
var a = cljs.core.first(cljs.core.next(arglist__7383));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7383)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7383))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7383)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7383)))));
return G__7382__delegate(f, a, b, c, d, args);
});
G__7382.cljs$lang$arity$variadic = G__7382__delegate;
return G__7382;
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
vary_meta.cljs$lang$applyTo = (function (arglist__7384){
var obj = cljs.core.first(arglist__7384);
var f = cljs.core.first(cljs.core.next(arglist__7384));
var args = cljs.core.rest(cljs.core.next(arglist__7384));
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
var G__7385__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7385 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7385__delegate.call(this, x, y, more);
};
G__7385.cljs$lang$maxFixedArity = 2;
G__7385.cljs$lang$applyTo = (function (arglist__7386){
var x = cljs.core.first(arglist__7386);
var y = cljs.core.first(cljs.core.next(arglist__7386));
var more = cljs.core.rest(cljs.core.next(arglist__7386));
return G__7385__delegate(x, y, more);
});
G__7385.cljs$lang$arity$variadic = G__7385__delegate;
return G__7385;
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
var G__7387 = pred;
var G__7388 = cljs.core.next.call(null,coll);
pred = G__7387;
coll = G__7388;
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
{var or__3824__auto____7390 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7390))
{return or__3824__auto____7390;
} else
{{
var G__7391 = pred;
var G__7392 = cljs.core.next.call(null,coll);
pred = G__7391;
coll = G__7392;
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
var G__7393 = null;
var G__7393__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7393__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7393__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7393__3 = (function() { 
var G__7394__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7394 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7394__delegate.call(this, x, y, zs);
};
G__7394.cljs$lang$maxFixedArity = 2;
G__7394.cljs$lang$applyTo = (function (arglist__7395){
var x = cljs.core.first(arglist__7395);
var y = cljs.core.first(cljs.core.next(arglist__7395));
var zs = cljs.core.rest(cljs.core.next(arglist__7395));
return G__7394__delegate(x, y, zs);
});
G__7394.cljs$lang$arity$variadic = G__7394__delegate;
return G__7394;
})()
;
G__7393 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7393__0.call(this);
case 1:
return G__7393__1.call(this,x);
case 2:
return G__7393__2.call(this,x,y);
default:
return G__7393__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7393.cljs$lang$maxFixedArity = 2;
G__7393.cljs$lang$applyTo = G__7393__3.cljs$lang$applyTo;
return G__7393;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7396__delegate = function (args){
return x;
};
var G__7396 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7396__delegate.call(this, args);
};
G__7396.cljs$lang$maxFixedArity = 0;
G__7396.cljs$lang$applyTo = (function (arglist__7397){
var args = cljs.core.seq(arglist__7397);;
return G__7396__delegate(args);
});
G__7396.cljs$lang$arity$variadic = G__7396__delegate;
return G__7396;
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
var G__7404 = null;
var G__7404__0 = (function (){
return f.call(null,g.call(null));
});
var G__7404__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7404__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7404__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7404__4 = (function() { 
var G__7405__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7405 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7405__delegate.call(this, x, y, z, args);
};
G__7405.cljs$lang$maxFixedArity = 3;
G__7405.cljs$lang$applyTo = (function (arglist__7406){
var x = cljs.core.first(arglist__7406);
var y = cljs.core.first(cljs.core.next(arglist__7406));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7406)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7406)));
return G__7405__delegate(x, y, z, args);
});
G__7405.cljs$lang$arity$variadic = G__7405__delegate;
return G__7405;
})()
;
G__7404 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7404__0.call(this);
case 1:
return G__7404__1.call(this,x);
case 2:
return G__7404__2.call(this,x,y);
case 3:
return G__7404__3.call(this,x,y,z);
default:
return G__7404__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7404.cljs$lang$maxFixedArity = 3;
G__7404.cljs$lang$applyTo = G__7404__4.cljs$lang$applyTo;
return G__7404;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7407 = null;
var G__7407__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7407__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7407__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7407__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7407__4 = (function() { 
var G__7408__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7408 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7408__delegate.call(this, x, y, z, args);
};
G__7408.cljs$lang$maxFixedArity = 3;
G__7408.cljs$lang$applyTo = (function (arglist__7409){
var x = cljs.core.first(arglist__7409);
var y = cljs.core.first(cljs.core.next(arglist__7409));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7409)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7409)));
return G__7408__delegate(x, y, z, args);
});
G__7408.cljs$lang$arity$variadic = G__7408__delegate;
return G__7408;
})()
;
G__7407 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7407__0.call(this);
case 1:
return G__7407__1.call(this,x);
case 2:
return G__7407__2.call(this,x,y);
case 3:
return G__7407__3.call(this,x,y,z);
default:
return G__7407__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7407.cljs$lang$maxFixedArity = 3;
G__7407.cljs$lang$applyTo = G__7407__4.cljs$lang$applyTo;
return G__7407;
})()
});
var comp__4 = (function() { 
var G__7410__delegate = function (f1,f2,f3,fs){
var fs__7401 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7411__delegate = function (args){
var ret__7402 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7401),args);
var fs__7403 = cljs.core.next.call(null,fs__7401);
while(true){
if(fs__7403)
{{
var G__7412 = cljs.core.first.call(null,fs__7403).call(null,ret__7402);
var G__7413 = cljs.core.next.call(null,fs__7403);
ret__7402 = G__7412;
fs__7403 = G__7413;
continue;
}
} else
{return ret__7402;
}
break;
}
};
var G__7411 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7411__delegate.call(this, args);
};
G__7411.cljs$lang$maxFixedArity = 0;
G__7411.cljs$lang$applyTo = (function (arglist__7414){
var args = cljs.core.seq(arglist__7414);;
return G__7411__delegate(args);
});
G__7411.cljs$lang$arity$variadic = G__7411__delegate;
return G__7411;
})()
;
};
var G__7410 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7410__delegate.call(this, f1, f2, f3, fs);
};
G__7410.cljs$lang$maxFixedArity = 3;
G__7410.cljs$lang$applyTo = (function (arglist__7415){
var f1 = cljs.core.first(arglist__7415);
var f2 = cljs.core.first(cljs.core.next(arglist__7415));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7415)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7415)));
return G__7410__delegate(f1, f2, f3, fs);
});
G__7410.cljs$lang$arity$variadic = G__7410__delegate;
return G__7410;
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
var G__7416__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7416 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7416__delegate.call(this, args);
};
G__7416.cljs$lang$maxFixedArity = 0;
G__7416.cljs$lang$applyTo = (function (arglist__7417){
var args = cljs.core.seq(arglist__7417);;
return G__7416__delegate(args);
});
G__7416.cljs$lang$arity$variadic = G__7416__delegate;
return G__7416;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7418__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7418 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7418__delegate.call(this, args);
};
G__7418.cljs$lang$maxFixedArity = 0;
G__7418.cljs$lang$applyTo = (function (arglist__7419){
var args = cljs.core.seq(arglist__7419);;
return G__7418__delegate(args);
});
G__7418.cljs$lang$arity$variadic = G__7418__delegate;
return G__7418;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7420__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7420 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7420__delegate.call(this, args);
};
G__7420.cljs$lang$maxFixedArity = 0;
G__7420.cljs$lang$applyTo = (function (arglist__7421){
var args = cljs.core.seq(arglist__7421);;
return G__7420__delegate(args);
});
G__7420.cljs$lang$arity$variadic = G__7420__delegate;
return G__7420;
})()
;
});
var partial__5 = (function() { 
var G__7422__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7423__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7423 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7423__delegate.call(this, args);
};
G__7423.cljs$lang$maxFixedArity = 0;
G__7423.cljs$lang$applyTo = (function (arglist__7424){
var args = cljs.core.seq(arglist__7424);;
return G__7423__delegate(args);
});
G__7423.cljs$lang$arity$variadic = G__7423__delegate;
return G__7423;
})()
;
};
var G__7422 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7422__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7422.cljs$lang$maxFixedArity = 4;
G__7422.cljs$lang$applyTo = (function (arglist__7425){
var f = cljs.core.first(arglist__7425);
var arg1 = cljs.core.first(cljs.core.next(arglist__7425));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7425)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7425))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7425))));
return G__7422__delegate(f, arg1, arg2, arg3, more);
});
G__7422.cljs$lang$arity$variadic = G__7422__delegate;
return G__7422;
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
var G__7426 = null;
var G__7426__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7426__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7426__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7426__4 = (function() { 
var G__7427__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7427 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7427__delegate.call(this, a, b, c, ds);
};
G__7427.cljs$lang$maxFixedArity = 3;
G__7427.cljs$lang$applyTo = (function (arglist__7428){
var a = cljs.core.first(arglist__7428);
var b = cljs.core.first(cljs.core.next(arglist__7428));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7428)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7428)));
return G__7427__delegate(a, b, c, ds);
});
G__7427.cljs$lang$arity$variadic = G__7427__delegate;
return G__7427;
})()
;
G__7426 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7426__1.call(this,a);
case 2:
return G__7426__2.call(this,a,b);
case 3:
return G__7426__3.call(this,a,b,c);
default:
return G__7426__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7426.cljs$lang$maxFixedArity = 3;
G__7426.cljs$lang$applyTo = G__7426__4.cljs$lang$applyTo;
return G__7426;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7429 = null;
var G__7429__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7429__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7429__4 = (function() { 
var G__7430__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7430 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7430__delegate.call(this, a, b, c, ds);
};
G__7430.cljs$lang$maxFixedArity = 3;
G__7430.cljs$lang$applyTo = (function (arglist__7431){
var a = cljs.core.first(arglist__7431);
var b = cljs.core.first(cljs.core.next(arglist__7431));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7431)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7431)));
return G__7430__delegate(a, b, c, ds);
});
G__7430.cljs$lang$arity$variadic = G__7430__delegate;
return G__7430;
})()
;
G__7429 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7429__2.call(this,a,b);
case 3:
return G__7429__3.call(this,a,b,c);
default:
return G__7429__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7429.cljs$lang$maxFixedArity = 3;
G__7429.cljs$lang$applyTo = G__7429__4.cljs$lang$applyTo;
return G__7429;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7432 = null;
var G__7432__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7432__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7432__4 = (function() { 
var G__7433__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7433 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7433__delegate.call(this, a, b, c, ds);
};
G__7433.cljs$lang$maxFixedArity = 3;
G__7433.cljs$lang$applyTo = (function (arglist__7434){
var a = cljs.core.first(arglist__7434);
var b = cljs.core.first(cljs.core.next(arglist__7434));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7434)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7434)));
return G__7433__delegate(a, b, c, ds);
});
G__7433.cljs$lang$arity$variadic = G__7433__delegate;
return G__7433;
})()
;
G__7432 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7432__2.call(this,a,b);
case 3:
return G__7432__3.call(this,a,b,c);
default:
return G__7432__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7432.cljs$lang$maxFixedArity = 3;
G__7432.cljs$lang$applyTo = G__7432__4.cljs$lang$applyTo;
return G__7432;
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
var mapi__7450 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7458 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7458)
{var s__7459 = temp__3974__auto____7458;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7459))
{var c__7460 = cljs.core.chunk_first.call(null,s__7459);
var size__7461 = cljs.core.count.call(null,c__7460);
var b__7462 = cljs.core.chunk_buffer.call(null,size__7461);
var n__2599__auto____7463 = size__7461;
var i__7464 = 0;
while(true){
if((i__7464 < n__2599__auto____7463))
{cljs.core.chunk_append.call(null,b__7462,f.call(null,(idx + i__7464),cljs.core._nth.call(null,c__7460,i__7464)));
{
var G__7465 = (i__7464 + 1);
i__7464 = G__7465;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7462),mapi.call(null,(idx + size__7461),cljs.core.chunk_rest.call(null,s__7459)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7459)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7459)));
}
} else
{return null;
}
}),null));
});
return mapi__7450.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7475 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7475)
{var s__7476 = temp__3974__auto____7475;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7476))
{var c__7477 = cljs.core.chunk_first.call(null,s__7476);
var size__7478 = cljs.core.count.call(null,c__7477);
var b__7479 = cljs.core.chunk_buffer.call(null,size__7478);
var n__2599__auto____7480 = size__7478;
var i__7481 = 0;
while(true){
if((i__7481 < n__2599__auto____7480))
{var x__7482 = f.call(null,cljs.core._nth.call(null,c__7477,i__7481));
if((x__7482 == null))
{} else
{cljs.core.chunk_append.call(null,b__7479,x__7482);
}
{
var G__7484 = (i__7481 + 1);
i__7481 = G__7484;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7479),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7476)));
} else
{var x__7483 = f.call(null,cljs.core.first.call(null,s__7476));
if((x__7483 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7476));
} else
{return cljs.core.cons.call(null,x__7483,keep.call(null,f,cljs.core.rest.call(null,s__7476)));
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
var keepi__7510 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7520 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7520)
{var s__7521 = temp__3974__auto____7520;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7521))
{var c__7522 = cljs.core.chunk_first.call(null,s__7521);
var size__7523 = cljs.core.count.call(null,c__7522);
var b__7524 = cljs.core.chunk_buffer.call(null,size__7523);
var n__2599__auto____7525 = size__7523;
var i__7526 = 0;
while(true){
if((i__7526 < n__2599__auto____7525))
{var x__7527 = f.call(null,(idx + i__7526),cljs.core._nth.call(null,c__7522,i__7526));
if((x__7527 == null))
{} else
{cljs.core.chunk_append.call(null,b__7524,x__7527);
}
{
var G__7529 = (i__7526 + 1);
i__7526 = G__7529;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7524),keepi.call(null,(idx + size__7523),cljs.core.chunk_rest.call(null,s__7521)));
} else
{var x__7528 = f.call(null,idx,cljs.core.first.call(null,s__7521));
if((x__7528 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7521));
} else
{return cljs.core.cons.call(null,x__7528,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7521)));
}
}
} else
{return null;
}
}),null));
});
return keepi__7510.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7615 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7615))
{return p.call(null,y);
} else
{return and__3822__auto____7615;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7616 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7616))
{var and__3822__auto____7617 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____7617))
{return p.call(null,z);
} else
{return and__3822__auto____7617;
}
} else
{return and__3822__auto____7616;
}
})());
});
var ep1__4 = (function() { 
var G__7686__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7618 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7618))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____7618;
}
})());
};
var G__7686 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7686__delegate.call(this, x, y, z, args);
};
G__7686.cljs$lang$maxFixedArity = 3;
G__7686.cljs$lang$applyTo = (function (arglist__7687){
var x = cljs.core.first(arglist__7687);
var y = cljs.core.first(cljs.core.next(arglist__7687));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7687)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7687)));
return G__7686__delegate(x, y, z, args);
});
G__7686.cljs$lang$arity$variadic = G__7686__delegate;
return G__7686;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7630 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7630))
{return p2.call(null,x);
} else
{return and__3822__auto____7630;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7631 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7631))
{var and__3822__auto____7632 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7632))
{var and__3822__auto____7633 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7633))
{return p2.call(null,y);
} else
{return and__3822__auto____7633;
}
} else
{return and__3822__auto____7632;
}
} else
{return and__3822__auto____7631;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7634 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7634))
{var and__3822__auto____7635 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7635))
{var and__3822__auto____7636 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7636))
{var and__3822__auto____7637 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7637))
{var and__3822__auto____7638 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7638))
{return p2.call(null,z);
} else
{return and__3822__auto____7638;
}
} else
{return and__3822__auto____7637;
}
} else
{return and__3822__auto____7636;
}
} else
{return and__3822__auto____7635;
}
} else
{return and__3822__auto____7634;
}
})());
});
var ep2__4 = (function() { 
var G__7688__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7639 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7639))
{return cljs.core.every_QMARK_.call(null,(function (p1__7485_SHARP_){
var and__3822__auto____7640 = p1.call(null,p1__7485_SHARP_);
if(cljs.core.truth_(and__3822__auto____7640))
{return p2.call(null,p1__7485_SHARP_);
} else
{return and__3822__auto____7640;
}
}),args);
} else
{return and__3822__auto____7639;
}
})());
};
var G__7688 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7688__delegate.call(this, x, y, z, args);
};
G__7688.cljs$lang$maxFixedArity = 3;
G__7688.cljs$lang$applyTo = (function (arglist__7689){
var x = cljs.core.first(arglist__7689);
var y = cljs.core.first(cljs.core.next(arglist__7689));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7689)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7689)));
return G__7688__delegate(x, y, z, args);
});
G__7688.cljs$lang$arity$variadic = G__7688__delegate;
return G__7688;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7659 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7659))
{var and__3822__auto____7660 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7660))
{return p3.call(null,x);
} else
{return and__3822__auto____7660;
}
} else
{return and__3822__auto____7659;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7661 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7661))
{var and__3822__auto____7662 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7662))
{var and__3822__auto____7663 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7663))
{var and__3822__auto____7664 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7664))
{var and__3822__auto____7665 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7665))
{return p3.call(null,y);
} else
{return and__3822__auto____7665;
}
} else
{return and__3822__auto____7664;
}
} else
{return and__3822__auto____7663;
}
} else
{return and__3822__auto____7662;
}
} else
{return and__3822__auto____7661;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7666 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7666))
{var and__3822__auto____7667 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7667))
{var and__3822__auto____7668 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7668))
{var and__3822__auto____7669 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7669))
{var and__3822__auto____7670 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7670))
{var and__3822__auto____7671 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____7671))
{var and__3822__auto____7672 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7672))
{var and__3822__auto____7673 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____7673))
{return p3.call(null,z);
} else
{return and__3822__auto____7673;
}
} else
{return and__3822__auto____7672;
}
} else
{return and__3822__auto____7671;
}
} else
{return and__3822__auto____7670;
}
} else
{return and__3822__auto____7669;
}
} else
{return and__3822__auto____7668;
}
} else
{return and__3822__auto____7667;
}
} else
{return and__3822__auto____7666;
}
})());
});
var ep3__4 = (function() { 
var G__7690__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7674 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7674))
{return cljs.core.every_QMARK_.call(null,(function (p1__7486_SHARP_){
var and__3822__auto____7675 = p1.call(null,p1__7486_SHARP_);
if(cljs.core.truth_(and__3822__auto____7675))
{var and__3822__auto____7676 = p2.call(null,p1__7486_SHARP_);
if(cljs.core.truth_(and__3822__auto____7676))
{return p3.call(null,p1__7486_SHARP_);
} else
{return and__3822__auto____7676;
}
} else
{return and__3822__auto____7675;
}
}),args);
} else
{return and__3822__auto____7674;
}
})());
};
var G__7690 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7690__delegate.call(this, x, y, z, args);
};
G__7690.cljs$lang$maxFixedArity = 3;
G__7690.cljs$lang$applyTo = (function (arglist__7691){
var x = cljs.core.first(arglist__7691);
var y = cljs.core.first(cljs.core.next(arglist__7691));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7691)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7691)));
return G__7690__delegate(x, y, z, args);
});
G__7690.cljs$lang$arity$variadic = G__7690__delegate;
return G__7690;
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
var G__7692__delegate = function (p1,p2,p3,ps){
var ps__7677 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7487_SHARP_){
return p1__7487_SHARP_.call(null,x);
}),ps__7677);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7488_SHARP_){
var and__3822__auto____7682 = p1__7488_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7682))
{return p1__7488_SHARP_.call(null,y);
} else
{return and__3822__auto____7682;
}
}),ps__7677);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7489_SHARP_){
var and__3822__auto____7683 = p1__7489_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7683))
{var and__3822__auto____7684 = p1__7489_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____7684))
{return p1__7489_SHARP_.call(null,z);
} else
{return and__3822__auto____7684;
}
} else
{return and__3822__auto____7683;
}
}),ps__7677);
});
var epn__4 = (function() { 
var G__7693__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7685 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7685))
{return cljs.core.every_QMARK_.call(null,(function (p1__7490_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7490_SHARP_,args);
}),ps__7677);
} else
{return and__3822__auto____7685;
}
})());
};
var G__7693 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7693__delegate.call(this, x, y, z, args);
};
G__7693.cljs$lang$maxFixedArity = 3;
G__7693.cljs$lang$applyTo = (function (arglist__7694){
var x = cljs.core.first(arglist__7694);
var y = cljs.core.first(cljs.core.next(arglist__7694));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7694)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7694)));
return G__7693__delegate(x, y, z, args);
});
G__7693.cljs$lang$arity$variadic = G__7693__delegate;
return G__7693;
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
var G__7692 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7692__delegate.call(this, p1, p2, p3, ps);
};
G__7692.cljs$lang$maxFixedArity = 3;
G__7692.cljs$lang$applyTo = (function (arglist__7695){
var p1 = cljs.core.first(arglist__7695);
var p2 = cljs.core.first(cljs.core.next(arglist__7695));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7695)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7695)));
return G__7692__delegate(p1, p2, p3, ps);
});
G__7692.cljs$lang$arity$variadic = G__7692__delegate;
return G__7692;
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
var or__3824__auto____7776 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7776))
{return or__3824__auto____7776;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____7777 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7777))
{return or__3824__auto____7777;
} else
{var or__3824__auto____7778 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____7778))
{return or__3824__auto____7778;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__7847__delegate = function (x,y,z,args){
var or__3824__auto____7779 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7779))
{return or__3824__auto____7779;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__7847 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7847__delegate.call(this, x, y, z, args);
};
G__7847.cljs$lang$maxFixedArity = 3;
G__7847.cljs$lang$applyTo = (function (arglist__7848){
var x = cljs.core.first(arglist__7848);
var y = cljs.core.first(cljs.core.next(arglist__7848));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7848)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7848)));
return G__7847__delegate(x, y, z, args);
});
G__7847.cljs$lang$arity$variadic = G__7847__delegate;
return G__7847;
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
var or__3824__auto____7791 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7791))
{return or__3824__auto____7791;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____7792 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7792))
{return or__3824__auto____7792;
} else
{var or__3824__auto____7793 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7793))
{return or__3824__auto____7793;
} else
{var or__3824__auto____7794 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7794))
{return or__3824__auto____7794;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____7795 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7795))
{return or__3824__auto____7795;
} else
{var or__3824__auto____7796 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7796))
{return or__3824__auto____7796;
} else
{var or__3824__auto____7797 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7797))
{return or__3824__auto____7797;
} else
{var or__3824__auto____7798 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7798))
{return or__3824__auto____7798;
} else
{var or__3824__auto____7799 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7799))
{return or__3824__auto____7799;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__7849__delegate = function (x,y,z,args){
var or__3824__auto____7800 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7800))
{return or__3824__auto____7800;
} else
{return cljs.core.some.call(null,(function (p1__7530_SHARP_){
var or__3824__auto____7801 = p1.call(null,p1__7530_SHARP_);
if(cljs.core.truth_(or__3824__auto____7801))
{return or__3824__auto____7801;
} else
{return p2.call(null,p1__7530_SHARP_);
}
}),args);
}
};
var G__7849 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7849__delegate.call(this, x, y, z, args);
};
G__7849.cljs$lang$maxFixedArity = 3;
G__7849.cljs$lang$applyTo = (function (arglist__7850){
var x = cljs.core.first(arglist__7850);
var y = cljs.core.first(cljs.core.next(arglist__7850));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7850)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7850)));
return G__7849__delegate(x, y, z, args);
});
G__7849.cljs$lang$arity$variadic = G__7849__delegate;
return G__7849;
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
var or__3824__auto____7820 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7820))
{return or__3824__auto____7820;
} else
{var or__3824__auto____7821 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7821))
{return or__3824__auto____7821;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____7822 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7822))
{return or__3824__auto____7822;
} else
{var or__3824__auto____7823 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7823))
{return or__3824__auto____7823;
} else
{var or__3824__auto____7824 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7824))
{return or__3824__auto____7824;
} else
{var or__3824__auto____7825 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7825))
{return or__3824__auto____7825;
} else
{var or__3824__auto____7826 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7826))
{return or__3824__auto____7826;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____7827 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7827))
{return or__3824__auto____7827;
} else
{var or__3824__auto____7828 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7828))
{return or__3824__auto____7828;
} else
{var or__3824__auto____7829 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7829))
{return or__3824__auto____7829;
} else
{var or__3824__auto____7830 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7830))
{return or__3824__auto____7830;
} else
{var or__3824__auto____7831 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7831))
{return or__3824__auto____7831;
} else
{var or__3824__auto____7832 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____7832))
{return or__3824__auto____7832;
} else
{var or__3824__auto____7833 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7833))
{return or__3824__auto____7833;
} else
{var or__3824__auto____7834 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____7834))
{return or__3824__auto____7834;
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
var G__7851__delegate = function (x,y,z,args){
var or__3824__auto____7835 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7835))
{return or__3824__auto____7835;
} else
{return cljs.core.some.call(null,(function (p1__7531_SHARP_){
var or__3824__auto____7836 = p1.call(null,p1__7531_SHARP_);
if(cljs.core.truth_(or__3824__auto____7836))
{return or__3824__auto____7836;
} else
{var or__3824__auto____7837 = p2.call(null,p1__7531_SHARP_);
if(cljs.core.truth_(or__3824__auto____7837))
{return or__3824__auto____7837;
} else
{return p3.call(null,p1__7531_SHARP_);
}
}
}),args);
}
};
var G__7851 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7851__delegate.call(this, x, y, z, args);
};
G__7851.cljs$lang$maxFixedArity = 3;
G__7851.cljs$lang$applyTo = (function (arglist__7852){
var x = cljs.core.first(arglist__7852);
var y = cljs.core.first(cljs.core.next(arglist__7852));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7852)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7852)));
return G__7851__delegate(x, y, z, args);
});
G__7851.cljs$lang$arity$variadic = G__7851__delegate;
return G__7851;
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
var G__7853__delegate = function (p1,p2,p3,ps){
var ps__7838 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__7532_SHARP_){
return p1__7532_SHARP_.call(null,x);
}),ps__7838);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7533_SHARP_){
var or__3824__auto____7843 = p1__7533_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____7843))
{return or__3824__auto____7843;
} else
{return p1__7533_SHARP_.call(null,y);
}
}),ps__7838);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7534_SHARP_){
var or__3824__auto____7844 = p1__7534_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____7844))
{return or__3824__auto____7844;
} else
{var or__3824__auto____7845 = p1__7534_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____7845))
{return or__3824__auto____7845;
} else
{return p1__7534_SHARP_.call(null,z);
}
}
}),ps__7838);
});
var spn__4 = (function() { 
var G__7854__delegate = function (x,y,z,args){
var or__3824__auto____7846 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7846))
{return or__3824__auto____7846;
} else
{return cljs.core.some.call(null,(function (p1__7535_SHARP_){
return cljs.core.some.call(null,p1__7535_SHARP_,args);
}),ps__7838);
}
};
var G__7854 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7854__delegate.call(this, x, y, z, args);
};
G__7854.cljs$lang$maxFixedArity = 3;
G__7854.cljs$lang$applyTo = (function (arglist__7855){
var x = cljs.core.first(arglist__7855);
var y = cljs.core.first(cljs.core.next(arglist__7855));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7855)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7855)));
return G__7854__delegate(x, y, z, args);
});
G__7854.cljs$lang$arity$variadic = G__7854__delegate;
return G__7854;
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
var G__7853 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7853__delegate.call(this, p1, p2, p3, ps);
};
G__7853.cljs$lang$maxFixedArity = 3;
G__7853.cljs$lang$applyTo = (function (arglist__7856){
var p1 = cljs.core.first(arglist__7856);
var p2 = cljs.core.first(cljs.core.next(arglist__7856));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7856)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7856)));
return G__7853__delegate(p1, p2, p3, ps);
});
G__7853.cljs$lang$arity$variadic = G__7853__delegate;
return G__7853;
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
var temp__3974__auto____7875 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7875)
{var s__7876 = temp__3974__auto____7875;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7876))
{var c__7877 = cljs.core.chunk_first.call(null,s__7876);
var size__7878 = cljs.core.count.call(null,c__7877);
var b__7879 = cljs.core.chunk_buffer.call(null,size__7878);
var n__2599__auto____7880 = size__7878;
var i__7881 = 0;
while(true){
if((i__7881 < n__2599__auto____7880))
{cljs.core.chunk_append.call(null,b__7879,f.call(null,cljs.core._nth.call(null,c__7877,i__7881)));
{
var G__7893 = (i__7881 + 1);
i__7881 = G__7893;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7879),map.call(null,f,cljs.core.chunk_rest.call(null,s__7876)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__7876)),map.call(null,f,cljs.core.rest.call(null,s__7876)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7882 = cljs.core.seq.call(null,c1);
var s2__7883 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____7884 = s1__7882;
if(and__3822__auto____7884)
{return s2__7883;
} else
{return and__3822__auto____7884;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7882),cljs.core.first.call(null,s2__7883)),map.call(null,f,cljs.core.rest.call(null,s1__7882),cljs.core.rest.call(null,s2__7883)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7885 = cljs.core.seq.call(null,c1);
var s2__7886 = cljs.core.seq.call(null,c2);
var s3__7887 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____7888 = s1__7885;
if(and__3822__auto____7888)
{var and__3822__auto____7889 = s2__7886;
if(and__3822__auto____7889)
{return s3__7887;
} else
{return and__3822__auto____7889;
}
} else
{return and__3822__auto____7888;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7885),cljs.core.first.call(null,s2__7886),cljs.core.first.call(null,s3__7887)),map.call(null,f,cljs.core.rest.call(null,s1__7885),cljs.core.rest.call(null,s2__7886),cljs.core.rest.call(null,s3__7887)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__7894__delegate = function (f,c1,c2,c3,colls){
var step__7892 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7891 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7891))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__7891),step.call(null,map.call(null,cljs.core.rest,ss__7891)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__7696_SHARP_){
return cljs.core.apply.call(null,f,p1__7696_SHARP_);
}),step__7892.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__7894 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7894__delegate.call(this, f, c1, c2, c3, colls);
};
G__7894.cljs$lang$maxFixedArity = 4;
G__7894.cljs$lang$applyTo = (function (arglist__7895){
var f = cljs.core.first(arglist__7895);
var c1 = cljs.core.first(cljs.core.next(arglist__7895));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7895)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7895))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7895))));
return G__7894__delegate(f, c1, c2, c3, colls);
});
G__7894.cljs$lang$arity$variadic = G__7894__delegate;
return G__7894;
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
{var temp__3974__auto____7898 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7898)
{var s__7899 = temp__3974__auto____7898;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__7899),take.call(null,(n - 1),cljs.core.rest.call(null,s__7899)));
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
var step__7905 = (function (n,coll){
while(true){
var s__7903 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____7904 = (n > 0);
if(and__3822__auto____7904)
{return s__7903;
} else
{return and__3822__auto____7904;
}
})()))
{{
var G__7906 = (n - 1);
var G__7907 = cljs.core.rest.call(null,s__7903);
n = G__7906;
coll = G__7907;
continue;
}
} else
{return s__7903;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__7905.call(null,n,coll);
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
var s__7910 = cljs.core.seq.call(null,coll);
var lead__7911 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__7911)
{{
var G__7912 = cljs.core.next.call(null,s__7910);
var G__7913 = cljs.core.next.call(null,lead__7911);
s__7910 = G__7912;
lead__7911 = G__7913;
continue;
}
} else
{return s__7910;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__7919 = (function (pred,coll){
while(true){
var s__7917 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____7918 = s__7917;
if(and__3822__auto____7918)
{return pred.call(null,cljs.core.first.call(null,s__7917));
} else
{return and__3822__auto____7918;
}
})()))
{{
var G__7920 = pred;
var G__7921 = cljs.core.rest.call(null,s__7917);
pred = G__7920;
coll = G__7921;
continue;
}
} else
{return s__7917;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__7919.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7924 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7924)
{var s__7925 = temp__3974__auto____7924;
return cljs.core.concat.call(null,s__7925,cycle.call(null,s__7925));
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
var s1__7930 = cljs.core.seq.call(null,c1);
var s2__7931 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____7932 = s1__7930;
if(and__3822__auto____7932)
{return s2__7931;
} else
{return and__3822__auto____7932;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__7930),cljs.core.cons.call(null,cljs.core.first.call(null,s2__7931),interleave.call(null,cljs.core.rest.call(null,s1__7930),cljs.core.rest.call(null,s2__7931))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__7934__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7933 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7933))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__7933),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__7933)));
} else
{return null;
}
}),null));
};
var G__7934 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7934__delegate.call(this, c1, c2, colls);
};
G__7934.cljs$lang$maxFixedArity = 2;
G__7934.cljs$lang$applyTo = (function (arglist__7935){
var c1 = cljs.core.first(arglist__7935);
var c2 = cljs.core.first(cljs.core.next(arglist__7935));
var colls = cljs.core.rest(cljs.core.next(arglist__7935));
return G__7934__delegate(c1, c2, colls);
});
G__7934.cljs$lang$arity$variadic = G__7934__delegate;
return G__7934;
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
var cat__7945 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____7943 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7943)
{var coll__7944 = temp__3971__auto____7943;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__7944),cat.call(null,cljs.core.rest.call(null,coll__7944),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__7945.call(null,null,colls);
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
var G__7946__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__7946 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7946__delegate.call(this, f, coll, colls);
};
G__7946.cljs$lang$maxFixedArity = 2;
G__7946.cljs$lang$applyTo = (function (arglist__7947){
var f = cljs.core.first(arglist__7947);
var coll = cljs.core.first(cljs.core.next(arglist__7947));
var colls = cljs.core.rest(cljs.core.next(arglist__7947));
return G__7946__delegate(f, coll, colls);
});
G__7946.cljs$lang$arity$variadic = G__7946__delegate;
return G__7946;
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
var temp__3974__auto____7957 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7957)
{var s__7958 = temp__3974__auto____7957;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7958))
{var c__7959 = cljs.core.chunk_first.call(null,s__7958);
var size__7960 = cljs.core.count.call(null,c__7959);
var b__7961 = cljs.core.chunk_buffer.call(null,size__7960);
var n__2599__auto____7962 = size__7960;
var i__7963 = 0;
while(true){
if((i__7963 < n__2599__auto____7962))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__7959,i__7963))))
{cljs.core.chunk_append.call(null,b__7961,cljs.core._nth.call(null,c__7959,i__7963));
} else
{}
{
var G__7966 = (i__7963 + 1);
i__7963 = G__7966;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7961),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__7958)));
} else
{var f__7964 = cljs.core.first.call(null,s__7958);
var r__7965 = cljs.core.rest.call(null,s__7958);
if(cljs.core.truth_(pred.call(null,f__7964)))
{return cljs.core.cons.call(null,f__7964,filter.call(null,pred,r__7965));
} else
{return filter.call(null,pred,r__7965);
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
var walk__7969 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__7969.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__7967_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__7967_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__7973__7974 = to;
if(G__7973__7974)
{if((function (){var or__3824__auto____7975 = (G__7973__7974.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____7975)
{return or__3824__auto____7975;
} else
{return G__7973__7974.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__7973__7974.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__7973__7974);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__7973__7974);
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
var G__7976__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__7976 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7976__delegate.call(this, f, c1, c2, c3, colls);
};
G__7976.cljs$lang$maxFixedArity = 4;
G__7976.cljs$lang$applyTo = (function (arglist__7977){
var f = cljs.core.first(arglist__7977);
var c1 = cljs.core.first(cljs.core.next(arglist__7977));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7977)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7977))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7977))));
return G__7976__delegate(f, c1, c2, c3, colls);
});
G__7976.cljs$lang$arity$variadic = G__7976__delegate;
return G__7976;
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
var temp__3974__auto____7984 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7984)
{var s__7985 = temp__3974__auto____7984;
var p__7986 = cljs.core.take.call(null,n,s__7985);
if((n === cljs.core.count.call(null,p__7986)))
{return cljs.core.cons.call(null,p__7986,partition.call(null,n,step,cljs.core.drop.call(null,step,s__7985)));
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
var temp__3974__auto____7987 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7987)
{var s__7988 = temp__3974__auto____7987;
var p__7989 = cljs.core.take.call(null,n,s__7988);
if((n === cljs.core.count.call(null,p__7989)))
{return cljs.core.cons.call(null,p__7989,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__7988)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__7989,pad)));
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
var sentinel__7994 = cljs.core.lookup_sentinel;
var m__7995 = m;
var ks__7996 = cljs.core.seq.call(null,ks);
while(true){
if(ks__7996)
{var m__7997 = cljs.core._lookup.call(null,m__7995,cljs.core.first.call(null,ks__7996),sentinel__7994);
if((sentinel__7994 === m__7997))
{return not_found;
} else
{{
var G__7998 = sentinel__7994;
var G__7999 = m__7997;
var G__8000 = cljs.core.next.call(null,ks__7996);
sentinel__7994 = G__7998;
m__7995 = G__7999;
ks__7996 = G__8000;
continue;
}
}
} else
{return m__7995;
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
cljs.core.assoc_in = (function assoc_in(m,p__8001,v){
var vec__8006__8007 = p__8001;
var k__8008 = cljs.core.nth.call(null,vec__8006__8007,0,null);
var ks__8009 = cljs.core.nthnext.call(null,vec__8006__8007,1);
if(cljs.core.truth_(ks__8009))
{return cljs.core.assoc.call(null,m,k__8008,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8008,null),ks__8009,v));
} else
{return cljs.core.assoc.call(null,m,k__8008,v);
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
var update_in__delegate = function (m,p__8010,f,args){
var vec__8015__8016 = p__8010;
var k__8017 = cljs.core.nth.call(null,vec__8015__8016,0,null);
var ks__8018 = cljs.core.nthnext.call(null,vec__8015__8016,1);
if(cljs.core.truth_(ks__8018))
{return cljs.core.assoc.call(null,m,k__8017,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8017,null),ks__8018,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8017,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8017,null),args));
}
};
var update_in = function (m,p__8010,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8010, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8019){
var m = cljs.core.first(arglist__8019);
var p__8010 = cljs.core.first(cljs.core.next(arglist__8019));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8019)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8019)));
return update_in__delegate(m, p__8010, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8022 = this;
var h__2260__auto____8023 = this__8022.__hash;
if(!((h__2260__auto____8023 == null)))
{return h__2260__auto____8023;
} else
{var h__2260__auto____8024 = cljs.core.hash_coll.call(null,coll);
this__8022.__hash = h__2260__auto____8024;
return h__2260__auto____8024;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8025 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8026 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8027 = this;
var new_array__8028 = this__8027.array.slice();
(new_array__8028[k] = v);
return (new cljs.core.Vector(this__8027.meta,new_array__8028,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8059 = null;
var G__8059__2 = (function (this_sym8029,k){
var this__8031 = this;
var this_sym8029__8032 = this;
var coll__8033 = this_sym8029__8032;
return coll__8033.cljs$core$ILookup$_lookup$arity$2(coll__8033,k);
});
var G__8059__3 = (function (this_sym8030,k,not_found){
var this__8031 = this;
var this_sym8030__8034 = this;
var coll__8035 = this_sym8030__8034;
return coll__8035.cljs$core$ILookup$_lookup$arity$3(coll__8035,k,not_found);
});
G__8059 = function(this_sym8030,k,not_found){
switch(arguments.length){
case 2:
return G__8059__2.call(this,this_sym8030,k);
case 3:
return G__8059__3.call(this,this_sym8030,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8059;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8020,args8021){
var this__8036 = this;
return this_sym8020.call.apply(this_sym8020,[this_sym8020].concat(args8021.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8037 = this;
var new_array__8038 = this__8037.array.slice();
new_array__8038.push(o);
return (new cljs.core.Vector(this__8037.meta,new_array__8038,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8039 = this;
var this__8040 = this;
return cljs.core.pr_str.call(null,this__8040);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8041 = this;
return cljs.core.ci_reduce.call(null,this__8041.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8042 = this;
return cljs.core.ci_reduce.call(null,this__8042.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8043 = this;
if((this__8043.array.length > 0))
{var vector_seq__8044 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8043.array.length))
{return cljs.core.cons.call(null,(this__8043.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8044.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8045 = this;
return this__8045.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8046 = this;
var count__8047 = this__8046.array.length;
if((count__8047 > 0))
{return (this__8046.array[(count__8047 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8048 = this;
if((this__8048.array.length > 0))
{var new_array__8049 = this__8048.array.slice();
new_array__8049.pop();
return (new cljs.core.Vector(this__8048.meta,new_array__8049,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8050 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8051 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8052 = this;
return (new cljs.core.Vector(meta,this__8052.array,this__8052.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8053 = this;
return this__8053.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8054 = this;
if((function (){var and__3822__auto____8055 = (0 <= n);
if(and__3822__auto____8055)
{return (n < this__8054.array.length);
} else
{return and__3822__auto____8055;
}
})())
{return (this__8054.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8056 = this;
if((function (){var and__3822__auto____8057 = (0 <= n);
if(and__3822__auto____8057)
{return (n < this__8056.array.length);
} else
{return and__3822__auto____8057;
}
})())
{return (this__8056.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8058 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8058.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2378__auto__){
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
var cnt__8061 = pv.cnt;
if((cnt__8061 < 32))
{return 0;
} else
{return (((cnt__8061 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8067 = level;
var ret__8068 = node;
while(true){
if((ll__8067 === 0))
{return ret__8068;
} else
{var embed__8069 = ret__8068;
var r__8070 = cljs.core.pv_fresh_node.call(null,edit);
var ___8071 = cljs.core.pv_aset.call(null,r__8070,0,embed__8069);
{
var G__8072 = (ll__8067 - 5);
var G__8073 = r__8070;
ll__8067 = G__8072;
ret__8068 = G__8073;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8079 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8080 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8079,subidx__8080,tailnode);
return ret__8079;
} else
{var child__8081 = cljs.core.pv_aget.call(null,parent,subidx__8080);
if(!((child__8081 == null)))
{var node_to_insert__8082 = push_tail.call(null,pv,(level - 5),child__8081,tailnode);
cljs.core.pv_aset.call(null,ret__8079,subidx__8080,node_to_insert__8082);
return ret__8079;
} else
{var node_to_insert__8083 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8079,subidx__8080,node_to_insert__8083);
return ret__8079;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8087 = (0 <= i);
if(and__3822__auto____8087)
{return (i < pv.cnt);
} else
{return and__3822__auto____8087;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8088 = pv.root;
var level__8089 = pv.shift;
while(true){
if((level__8089 > 0))
{{
var G__8090 = cljs.core.pv_aget.call(null,node__8088,((i >>> level__8089) & 31));
var G__8091 = (level__8089 - 5);
node__8088 = G__8090;
level__8089 = G__8091;
continue;
}
} else
{return node__8088.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8094 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8094,(i & 31),val);
return ret__8094;
} else
{var subidx__8095 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8094,subidx__8095,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8095),i,val));
return ret__8094;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8101 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8102 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8101));
if((function (){var and__3822__auto____8103 = (new_child__8102 == null);
if(and__3822__auto____8103)
{return (subidx__8101 === 0);
} else
{return and__3822__auto____8103;
}
})())
{return null;
} else
{var ret__8104 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8104,subidx__8101,new_child__8102);
return ret__8104;
}
} else
{if((subidx__8101 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8105 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8105,subidx__8101,null);
return ret__8105;
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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8108 = this;
return (new cljs.core.TransientVector(this__8108.cnt,this__8108.shift,cljs.core.tv_editable_root.call(null,this__8108.root),cljs.core.tv_editable_tail.call(null,this__8108.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8109 = this;
var h__2260__auto____8110 = this__8109.__hash;
if(!((h__2260__auto____8110 == null)))
{return h__2260__auto____8110;
} else
{var h__2260__auto____8111 = cljs.core.hash_coll.call(null,coll);
this__8109.__hash = h__2260__auto____8111;
return h__2260__auto____8111;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8112 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8113 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8114 = this;
if((function (){var and__3822__auto____8115 = (0 <= k);
if(and__3822__auto____8115)
{return (k < this__8114.cnt);
} else
{return and__3822__auto____8115;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8116 = this__8114.tail.slice();
(new_tail__8116[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8114.meta,this__8114.cnt,this__8114.shift,this__8114.root,new_tail__8116,null));
} else
{return (new cljs.core.PersistentVector(this__8114.meta,this__8114.cnt,this__8114.shift,cljs.core.do_assoc.call(null,coll,this__8114.shift,this__8114.root,k,v),this__8114.tail,null));
}
} else
{if((k === this__8114.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8114.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8164 = null;
var G__8164__2 = (function (this_sym8117,k){
var this__8119 = this;
var this_sym8117__8120 = this;
var coll__8121 = this_sym8117__8120;
return coll__8121.cljs$core$ILookup$_lookup$arity$2(coll__8121,k);
});
var G__8164__3 = (function (this_sym8118,k,not_found){
var this__8119 = this;
var this_sym8118__8122 = this;
var coll__8123 = this_sym8118__8122;
return coll__8123.cljs$core$ILookup$_lookup$arity$3(coll__8123,k,not_found);
});
G__8164 = function(this_sym8118,k,not_found){
switch(arguments.length){
case 2:
return G__8164__2.call(this,this_sym8118,k);
case 3:
return G__8164__3.call(this,this_sym8118,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8164;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8106,args8107){
var this__8124 = this;
return this_sym8106.call.apply(this_sym8106,[this_sym8106].concat(args8107.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8125 = this;
var step_init__8126 = [0,init];
var i__8127 = 0;
while(true){
if((i__8127 < this__8125.cnt))
{var arr__8128 = cljs.core.array_for.call(null,v,i__8127);
var len__8129 = arr__8128.length;
var init__8133 = (function (){var j__8130 = 0;
var init__8131 = (step_init__8126[1]);
while(true){
if((j__8130 < len__8129))
{var init__8132 = f.call(null,init__8131,(j__8130 + i__8127),(arr__8128[j__8130]));
if(cljs.core.reduced_QMARK_.call(null,init__8132))
{return init__8132;
} else
{{
var G__8165 = (j__8130 + 1);
var G__8166 = init__8132;
j__8130 = G__8165;
init__8131 = G__8166;
continue;
}
}
} else
{(step_init__8126[0] = len__8129);
(step_init__8126[1] = init__8131);
return init__8131;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8133))
{return cljs.core.deref.call(null,init__8133);
} else
{{
var G__8167 = (i__8127 + (step_init__8126[0]));
i__8127 = G__8167;
continue;
}
}
} else
{return (step_init__8126[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8134 = this;
if(((this__8134.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8135 = this__8134.tail.slice();
new_tail__8135.push(o);
return (new cljs.core.PersistentVector(this__8134.meta,(this__8134.cnt + 1),this__8134.shift,this__8134.root,new_tail__8135,null));
} else
{var root_overflow_QMARK___8136 = ((this__8134.cnt >>> 5) > (1 << this__8134.shift));
var new_shift__8137 = ((root_overflow_QMARK___8136)?(this__8134.shift + 5):this__8134.shift);
var new_root__8139 = ((root_overflow_QMARK___8136)?(function (){var n_r__8138 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8138,0,this__8134.root);
cljs.core.pv_aset.call(null,n_r__8138,1,cljs.core.new_path.call(null,null,this__8134.shift,(new cljs.core.VectorNode(null,this__8134.tail))));
return n_r__8138;
})():cljs.core.push_tail.call(null,coll,this__8134.shift,this__8134.root,(new cljs.core.VectorNode(null,this__8134.tail))));
return (new cljs.core.PersistentVector(this__8134.meta,(this__8134.cnt + 1),new_shift__8137,new_root__8139,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8140 = this;
if((this__8140.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8140.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8141 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8142 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8143 = this;
var this__8144 = this;
return cljs.core.pr_str.call(null,this__8144);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8145 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8146 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8147 = this;
if((this__8147.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8148 = this;
return this__8148.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8149 = this;
if((this__8149.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8149.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8150 = this;
if((this__8150.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8150.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8150.meta);
} else
{if((1 < (this__8150.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8150.meta,(this__8150.cnt - 1),this__8150.shift,this__8150.root,this__8150.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8151 = cljs.core.array_for.call(null,coll,(this__8150.cnt - 2));
var nr__8152 = cljs.core.pop_tail.call(null,coll,this__8150.shift,this__8150.root);
var new_root__8153 = (((nr__8152 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8152);
var cnt_1__8154 = (this__8150.cnt - 1);
if((function (){var and__3822__auto____8155 = (5 < this__8150.shift);
if(and__3822__auto____8155)
{return (cljs.core.pv_aget.call(null,new_root__8153,1) == null);
} else
{return and__3822__auto____8155;
}
})())
{return (new cljs.core.PersistentVector(this__8150.meta,cnt_1__8154,(this__8150.shift - 5),cljs.core.pv_aget.call(null,new_root__8153,0),new_tail__8151,null));
} else
{return (new cljs.core.PersistentVector(this__8150.meta,cnt_1__8154,this__8150.shift,new_root__8153,new_tail__8151,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8156 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8157 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8158 = this;
return (new cljs.core.PersistentVector(meta,this__8158.cnt,this__8158.shift,this__8158.root,this__8158.tail,this__8158.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8159 = this;
return this__8159.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8160 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8161 = this;
if((function (){var and__3822__auto____8162 = (0 <= n);
if(and__3822__auto____8162)
{return (n < this__8161.cnt);
} else
{return and__3822__auto____8162;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8163 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8163.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8168 = xs.length;
var xs__8169 = (((no_clone === true))?xs:xs.slice());
if((l__8168 < 32))
{return (new cljs.core.PersistentVector(null,l__8168,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8169,null));
} else
{var node__8170 = xs__8169.slice(0,32);
var v__8171 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8170,null));
var i__8172 = 32;
var out__8173 = cljs.core._as_transient.call(null,v__8171);
while(true){
if((i__8172 < l__8168))
{{
var G__8174 = (i__8172 + 1);
var G__8175 = cljs.core.conj_BANG_.call(null,out__8173,(xs__8169[i__8172]));
i__8172 = G__8174;
out__8173 = G__8175;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8173);
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
vector.cljs$lang$applyTo = (function (arglist__8176){
var args = cljs.core.seq(arglist__8176);;
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8177 = this;
if(((this__8177.off + 1) < this__8177.node.length))
{var s__8178 = cljs.core.chunked_seq.call(null,this__8177.vec,this__8177.node,this__8177.i,(this__8177.off + 1));
if((s__8178 == null))
{return null;
} else
{return s__8178;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8179 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8180 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8181 = this;
return (this__8181.node[this__8181.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8182 = this;
if(((this__8182.off + 1) < this__8182.node.length))
{var s__8183 = cljs.core.chunked_seq.call(null,this__8182.vec,this__8182.node,this__8182.i,(this__8182.off + 1));
if((s__8183 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8183;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8184 = this;
var l__8185 = this__8184.node.length;
var s__8186 = ((((this__8184.i + l__8185) < cljs.core._count.call(null,this__8184.vec)))?cljs.core.chunked_seq.call(null,this__8184.vec,(this__8184.i + l__8185),0):null);
if((s__8186 == null))
{return null;
} else
{return s__8186;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8187 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8188 = this;
return cljs.core.chunked_seq.call(null,this__8188.vec,this__8188.node,this__8188.i,this__8188.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8189 = this;
return this__8189.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8190 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8190.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8191 = this;
return cljs.core.array_chunk.call(null,this__8191.node,this__8191.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8192 = this;
var l__8193 = this__8192.node.length;
var s__8194 = ((((this__8192.i + l__8193) < cljs.core._count.call(null,this__8192.vec)))?cljs.core.chunked_seq.call(null,this__8192.vec,(this__8192.i + l__8193),0):null);
if((s__8194 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8194;
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8197 = this;
var h__2260__auto____8198 = this__8197.__hash;
if(!((h__2260__auto____8198 == null)))
{return h__2260__auto____8198;
} else
{var h__2260__auto____8199 = cljs.core.hash_coll.call(null,coll);
this__8197.__hash = h__2260__auto____8199;
return h__2260__auto____8199;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8200 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8201 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8202 = this;
var v_pos__8203 = (this__8202.start + key);
return (new cljs.core.Subvec(this__8202.meta,cljs.core._assoc.call(null,this__8202.v,v_pos__8203,val),this__8202.start,((this__8202.end > (v_pos__8203 + 1)) ? this__8202.end : (v_pos__8203 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8229 = null;
var G__8229__2 = (function (this_sym8204,k){
var this__8206 = this;
var this_sym8204__8207 = this;
var coll__8208 = this_sym8204__8207;
return coll__8208.cljs$core$ILookup$_lookup$arity$2(coll__8208,k);
});
var G__8229__3 = (function (this_sym8205,k,not_found){
var this__8206 = this;
var this_sym8205__8209 = this;
var coll__8210 = this_sym8205__8209;
return coll__8210.cljs$core$ILookup$_lookup$arity$3(coll__8210,k,not_found);
});
G__8229 = function(this_sym8205,k,not_found){
switch(arguments.length){
case 2:
return G__8229__2.call(this,this_sym8205,k);
case 3:
return G__8229__3.call(this,this_sym8205,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8229;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8195,args8196){
var this__8211 = this;
return this_sym8195.call.apply(this_sym8195,[this_sym8195].concat(args8196.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8212 = this;
return (new cljs.core.Subvec(this__8212.meta,cljs.core._assoc_n.call(null,this__8212.v,this__8212.end,o),this__8212.start,(this__8212.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8213 = this;
var this__8214 = this;
return cljs.core.pr_str.call(null,this__8214);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8215 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8216 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8217 = this;
var subvec_seq__8218 = (function subvec_seq(i){
if((i === this__8217.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8217.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8218.call(null,this__8217.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8219 = this;
return (this__8219.end - this__8219.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8220 = this;
return cljs.core._nth.call(null,this__8220.v,(this__8220.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8221 = this;
if((this__8221.start === this__8221.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8221.meta,this__8221.v,this__8221.start,(this__8221.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8222 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8223 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8224 = this;
return (new cljs.core.Subvec(meta,this__8224.v,this__8224.start,this__8224.end,this__8224.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8225 = this;
return this__8225.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8226 = this;
return cljs.core._nth.call(null,this__8226.v,(this__8226.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8227 = this;
return cljs.core._nth.call(null,this__8227.v,(this__8227.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8228 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8228.meta);
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
var ret__8231 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8231,0,tl.length);
return ret__8231;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8235 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8236 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8235,subidx__8236,(((level === 5))?tail_node:(function (){var child__8237 = cljs.core.pv_aget.call(null,ret__8235,subidx__8236);
if(!((child__8237 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8237,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8235;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8242 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8243 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8244 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8242,subidx__8243));
if((function (){var and__3822__auto____8245 = (new_child__8244 == null);
if(and__3822__auto____8245)
{return (subidx__8243 === 0);
} else
{return and__3822__auto____8245;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8242,subidx__8243,new_child__8244);
return node__8242;
}
} else
{if((subidx__8243 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8242,subidx__8243,null);
return node__8242;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8250 = (0 <= i);
if(and__3822__auto____8250)
{return (i < tv.cnt);
} else
{return and__3822__auto____8250;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8251 = tv.root;
var node__8252 = root__8251;
var level__8253 = tv.shift;
while(true){
if((level__8253 > 0))
{{
var G__8254 = cljs.core.tv_ensure_editable.call(null,root__8251.edit,cljs.core.pv_aget.call(null,node__8252,((i >>> level__8253) & 31)));
var G__8255 = (level__8253 - 5);
node__8252 = G__8254;
level__8253 = G__8255;
continue;
}
} else
{return node__8252.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8295 = null;
var G__8295__2 = (function (this_sym8258,k){
var this__8260 = this;
var this_sym8258__8261 = this;
var coll__8262 = this_sym8258__8261;
return coll__8262.cljs$core$ILookup$_lookup$arity$2(coll__8262,k);
});
var G__8295__3 = (function (this_sym8259,k,not_found){
var this__8260 = this;
var this_sym8259__8263 = this;
var coll__8264 = this_sym8259__8263;
return coll__8264.cljs$core$ILookup$_lookup$arity$3(coll__8264,k,not_found);
});
G__8295 = function(this_sym8259,k,not_found){
switch(arguments.length){
case 2:
return G__8295__2.call(this,this_sym8259,k);
case 3:
return G__8295__3.call(this,this_sym8259,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8295;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8256,args8257){
var this__8265 = this;
return this_sym8256.call.apply(this_sym8256,[this_sym8256].concat(args8257.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8266 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8267 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8268 = this;
if(this__8268.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8269 = this;
if((function (){var and__3822__auto____8270 = (0 <= n);
if(and__3822__auto____8270)
{return (n < this__8269.cnt);
} else
{return and__3822__auto____8270;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8271 = this;
if(this__8271.root.edit)
{return this__8271.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8272 = this;
if(this__8272.root.edit)
{if((function (){var and__3822__auto____8273 = (0 <= n);
if(and__3822__auto____8273)
{return (n < this__8272.cnt);
} else
{return and__3822__auto____8273;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8272.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8278 = (function go(level,node){
var node__8276 = cljs.core.tv_ensure_editable.call(null,this__8272.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8276,(n & 31),val);
return node__8276;
} else
{var subidx__8277 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8276,subidx__8277,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8276,subidx__8277)));
return node__8276;
}
}).call(null,this__8272.shift,this__8272.root);
this__8272.root = new_root__8278;
return tcoll;
}
} else
{if((n === this__8272.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8272.cnt)].join('')));
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
var this__8279 = this;
if(this__8279.root.edit)
{if((this__8279.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8279.cnt))
{this__8279.cnt = 0;
return tcoll;
} else
{if((((this__8279.cnt - 1) & 31) > 0))
{this__8279.cnt = (this__8279.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8280 = cljs.core.editable_array_for.call(null,tcoll,(this__8279.cnt - 2));
var new_root__8282 = (function (){var nr__8281 = cljs.core.tv_pop_tail.call(null,tcoll,this__8279.shift,this__8279.root);
if(!((nr__8281 == null)))
{return nr__8281;
} else
{return (new cljs.core.VectorNode(this__8279.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8283 = (5 < this__8279.shift);
if(and__3822__auto____8283)
{return (cljs.core.pv_aget.call(null,new_root__8282,1) == null);
} else
{return and__3822__auto____8283;
}
})())
{var new_root__8284 = cljs.core.tv_ensure_editable.call(null,this__8279.root.edit,cljs.core.pv_aget.call(null,new_root__8282,0));
this__8279.root = new_root__8284;
this__8279.shift = (this__8279.shift - 5);
this__8279.cnt = (this__8279.cnt - 1);
this__8279.tail = new_tail__8280;
return tcoll;
} else
{this__8279.root = new_root__8282;
this__8279.cnt = (this__8279.cnt - 1);
this__8279.tail = new_tail__8280;
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
var this__8285 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8286 = this;
if(this__8286.root.edit)
{if(((this__8286.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8286.tail[(this__8286.cnt & 31)] = o);
this__8286.cnt = (this__8286.cnt + 1);
return tcoll;
} else
{var tail_node__8287 = (new cljs.core.VectorNode(this__8286.root.edit,this__8286.tail));
var new_tail__8288 = cljs.core.make_array.call(null,32);
(new_tail__8288[0] = o);
this__8286.tail = new_tail__8288;
if(((this__8286.cnt >>> 5) > (1 << this__8286.shift)))
{var new_root_array__8289 = cljs.core.make_array.call(null,32);
var new_shift__8290 = (this__8286.shift + 5);
(new_root_array__8289[0] = this__8286.root);
(new_root_array__8289[1] = cljs.core.new_path.call(null,this__8286.root.edit,this__8286.shift,tail_node__8287));
this__8286.root = (new cljs.core.VectorNode(this__8286.root.edit,new_root_array__8289));
this__8286.shift = new_shift__8290;
this__8286.cnt = (this__8286.cnt + 1);
return tcoll;
} else
{var new_root__8291 = cljs.core.tv_push_tail.call(null,tcoll,this__8286.shift,this__8286.root,tail_node__8287);
this__8286.root = new_root__8291;
this__8286.cnt = (this__8286.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8292 = this;
if(this__8292.root.edit)
{this__8292.root.edit = null;
var len__8293 = (this__8292.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8294 = cljs.core.make_array.call(null,len__8293);
cljs.core.array_copy.call(null,this__8292.tail,0,trimmed_tail__8294,0,len__8293);
return (new cljs.core.PersistentVector(null,this__8292.cnt,this__8292.shift,this__8292.root,trimmed_tail__8294,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8296 = this;
var h__2260__auto____8297 = this__8296.__hash;
if(!((h__2260__auto____8297 == null)))
{return h__2260__auto____8297;
} else
{var h__2260__auto____8298 = cljs.core.hash_coll.call(null,coll);
this__8296.__hash = h__2260__auto____8298;
return h__2260__auto____8298;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8299 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8300 = this;
var this__8301 = this;
return cljs.core.pr_str.call(null,this__8301);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8302 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8303 = this;
return cljs.core._first.call(null,this__8303.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8304 = this;
var temp__3971__auto____8305 = cljs.core.next.call(null,this__8304.front);
if(temp__3971__auto____8305)
{var f1__8306 = temp__3971__auto____8305;
return (new cljs.core.PersistentQueueSeq(this__8304.meta,f1__8306,this__8304.rear,null));
} else
{if((this__8304.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8304.meta,this__8304.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8307 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8308 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8308.front,this__8308.rear,this__8308.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8309 = this;
return this__8309.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8310 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8310.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8311 = this;
var h__2260__auto____8312 = this__8311.__hash;
if(!((h__2260__auto____8312 == null)))
{return h__2260__auto____8312;
} else
{var h__2260__auto____8313 = cljs.core.hash_coll.call(null,coll);
this__8311.__hash = h__2260__auto____8313;
return h__2260__auto____8313;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8314 = this;
if(cljs.core.truth_(this__8314.front))
{return (new cljs.core.PersistentQueue(this__8314.meta,(this__8314.count + 1),this__8314.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8315 = this__8314.rear;
if(cljs.core.truth_(or__3824__auto____8315))
{return or__3824__auto____8315;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8314.meta,(this__8314.count + 1),cljs.core.conj.call(null,this__8314.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8316 = this;
var this__8317 = this;
return cljs.core.pr_str.call(null,this__8317);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8318 = this;
var rear__8319 = cljs.core.seq.call(null,this__8318.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8320 = this__8318.front;
if(cljs.core.truth_(or__3824__auto____8320))
{return or__3824__auto____8320;
} else
{return rear__8319;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8318.front,cljs.core.seq.call(null,rear__8319),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8321 = this;
return this__8321.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8322 = this;
return cljs.core._first.call(null,this__8322.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8323 = this;
if(cljs.core.truth_(this__8323.front))
{var temp__3971__auto____8324 = cljs.core.next.call(null,this__8323.front);
if(temp__3971__auto____8324)
{var f1__8325 = temp__3971__auto____8324;
return (new cljs.core.PersistentQueue(this__8323.meta,(this__8323.count - 1),f1__8325,this__8323.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8323.meta,(this__8323.count - 1),cljs.core.seq.call(null,this__8323.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8326 = this;
return cljs.core.first.call(null,this__8326.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8327 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8328 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8329 = this;
return (new cljs.core.PersistentQueue(meta,this__8329.count,this__8329.front,this__8329.rear,this__8329.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8330 = this;
return this__8330.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8331 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8332 = this;
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
var len__8335 = array.length;
var i__8336 = 0;
while(true){
if((i__8336 < len__8335))
{if((k === (array[i__8336])))
{return i__8336;
} else
{{
var G__8337 = (i__8336 + incr);
i__8336 = G__8337;
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
var a__8340 = cljs.core.hash.call(null,a);
var b__8341 = cljs.core.hash.call(null,b);
if((a__8340 < b__8341))
{return -1;
} else
{if((a__8340 > b__8341))
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
var ks__8349 = m.keys;
var len__8350 = ks__8349.length;
var so__8351 = m.strobj;
var out__8352 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8353 = 0;
var out__8354 = cljs.core.transient$.call(null,out__8352);
while(true){
if((i__8353 < len__8350))
{var k__8355 = (ks__8349[i__8353]);
{
var G__8356 = (i__8353 + 1);
var G__8357 = cljs.core.assoc_BANG_.call(null,out__8354,k__8355,(so__8351[k__8355]));
i__8353 = G__8356;
out__8354 = G__8357;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8354,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8363 = {};
var l__8364 = ks.length;
var i__8365 = 0;
while(true){
if((i__8365 < l__8364))
{var k__8366 = (ks[i__8365]);
(new_obj__8363[k__8366] = (obj[k__8366]));
{
var G__8367 = (i__8365 + 1);
i__8365 = G__8367;
continue;
}
} else
{}
break;
}
return new_obj__8363;
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8370 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8371 = this;
var h__2260__auto____8372 = this__8371.__hash;
if(!((h__2260__auto____8372 == null)))
{return h__2260__auto____8372;
} else
{var h__2260__auto____8373 = cljs.core.hash_imap.call(null,coll);
this__8371.__hash = h__2260__auto____8373;
return h__2260__auto____8373;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8374 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8375 = this;
if((function (){var and__3822__auto____8376 = goog.isString(k);
if(and__3822__auto____8376)
{return !((cljs.core.scan_array.call(null,1,k,this__8375.keys) == null));
} else
{return and__3822__auto____8376;
}
})())
{return (this__8375.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8377 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8378 = (this__8377.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8378)
{return or__3824__auto____8378;
} else
{return (this__8377.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8377.keys) == null)))
{var new_strobj__8379 = cljs.core.obj_clone.call(null,this__8377.strobj,this__8377.keys);
(new_strobj__8379[k] = v);
return (new cljs.core.ObjMap(this__8377.meta,this__8377.keys,new_strobj__8379,(this__8377.update_count + 1),null));
} else
{var new_strobj__8380 = cljs.core.obj_clone.call(null,this__8377.strobj,this__8377.keys);
var new_keys__8381 = this__8377.keys.slice();
(new_strobj__8380[k] = v);
new_keys__8381.push(k);
return (new cljs.core.ObjMap(this__8377.meta,new_keys__8381,new_strobj__8380,(this__8377.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8382 = this;
if((function (){var and__3822__auto____8383 = goog.isString(k);
if(and__3822__auto____8383)
{return !((cljs.core.scan_array.call(null,1,k,this__8382.keys) == null));
} else
{return and__3822__auto____8383;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8405 = null;
var G__8405__2 = (function (this_sym8384,k){
var this__8386 = this;
var this_sym8384__8387 = this;
var coll__8388 = this_sym8384__8387;
return coll__8388.cljs$core$ILookup$_lookup$arity$2(coll__8388,k);
});
var G__8405__3 = (function (this_sym8385,k,not_found){
var this__8386 = this;
var this_sym8385__8389 = this;
var coll__8390 = this_sym8385__8389;
return coll__8390.cljs$core$ILookup$_lookup$arity$3(coll__8390,k,not_found);
});
G__8405 = function(this_sym8385,k,not_found){
switch(arguments.length){
case 2:
return G__8405__2.call(this,this_sym8385,k);
case 3:
return G__8405__3.call(this,this_sym8385,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8405;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8368,args8369){
var this__8391 = this;
return this_sym8368.call.apply(this_sym8368,[this_sym8368].concat(args8369.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8392 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8393 = this;
var this__8394 = this;
return cljs.core.pr_str.call(null,this__8394);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8395 = this;
if((this__8395.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8358_SHARP_){
return cljs.core.vector.call(null,p1__8358_SHARP_,(this__8395.strobj[p1__8358_SHARP_]));
}),this__8395.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8396 = this;
return this__8396.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8397 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8398 = this;
return (new cljs.core.ObjMap(meta,this__8398.keys,this__8398.strobj,this__8398.update_count,this__8398.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8399 = this;
return this__8399.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8400 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8400.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8401 = this;
if((function (){var and__3822__auto____8402 = goog.isString(k);
if(and__3822__auto____8402)
{return !((cljs.core.scan_array.call(null,1,k,this__8401.keys) == null));
} else
{return and__3822__auto____8402;
}
})())
{var new_keys__8403 = this__8401.keys.slice();
var new_strobj__8404 = cljs.core.obj_clone.call(null,this__8401.strobj,this__8401.keys);
new_keys__8403.splice(cljs.core.scan_array.call(null,1,k,new_keys__8403),1);
cljs.core.js_delete.call(null,new_strobj__8404,k);
return (new cljs.core.ObjMap(this__8401.meta,new_keys__8403,new_strobj__8404,(this__8401.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8409 = this;
var h__2260__auto____8410 = this__8409.__hash;
if(!((h__2260__auto____8410 == null)))
{return h__2260__auto____8410;
} else
{var h__2260__auto____8411 = cljs.core.hash_imap.call(null,coll);
this__8409.__hash = h__2260__auto____8411;
return h__2260__auto____8411;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8412 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8413 = this;
var bucket__8414 = (this__8413.hashobj[cljs.core.hash.call(null,k)]);
var i__8415 = (cljs.core.truth_(bucket__8414)?cljs.core.scan_array.call(null,2,k,bucket__8414):null);
if(cljs.core.truth_(i__8415))
{return (bucket__8414[(i__8415 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8416 = this;
var h__8417 = cljs.core.hash.call(null,k);
var bucket__8418 = (this__8416.hashobj[h__8417]);
if(cljs.core.truth_(bucket__8418))
{var new_bucket__8419 = bucket__8418.slice();
var new_hashobj__8420 = goog.object.clone(this__8416.hashobj);
(new_hashobj__8420[h__8417] = new_bucket__8419);
var temp__3971__auto____8421 = cljs.core.scan_array.call(null,2,k,new_bucket__8419);
if(cljs.core.truth_(temp__3971__auto____8421))
{var i__8422 = temp__3971__auto____8421;
(new_bucket__8419[(i__8422 + 1)] = v);
return (new cljs.core.HashMap(this__8416.meta,this__8416.count,new_hashobj__8420,null));
} else
{new_bucket__8419.push(k,v);
return (new cljs.core.HashMap(this__8416.meta,(this__8416.count + 1),new_hashobj__8420,null));
}
} else
{var new_hashobj__8423 = goog.object.clone(this__8416.hashobj);
(new_hashobj__8423[h__8417] = [k,v]);
return (new cljs.core.HashMap(this__8416.meta,(this__8416.count + 1),new_hashobj__8423,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8424 = this;
var bucket__8425 = (this__8424.hashobj[cljs.core.hash.call(null,k)]);
var i__8426 = (cljs.core.truth_(bucket__8425)?cljs.core.scan_array.call(null,2,k,bucket__8425):null);
if(cljs.core.truth_(i__8426))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8451 = null;
var G__8451__2 = (function (this_sym8427,k){
var this__8429 = this;
var this_sym8427__8430 = this;
var coll__8431 = this_sym8427__8430;
return coll__8431.cljs$core$ILookup$_lookup$arity$2(coll__8431,k);
});
var G__8451__3 = (function (this_sym8428,k,not_found){
var this__8429 = this;
var this_sym8428__8432 = this;
var coll__8433 = this_sym8428__8432;
return coll__8433.cljs$core$ILookup$_lookup$arity$3(coll__8433,k,not_found);
});
G__8451 = function(this_sym8428,k,not_found){
switch(arguments.length){
case 2:
return G__8451__2.call(this,this_sym8428,k);
case 3:
return G__8451__3.call(this,this_sym8428,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8451;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8407,args8408){
var this__8434 = this;
return this_sym8407.call.apply(this_sym8407,[this_sym8407].concat(args8408.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8435 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8436 = this;
var this__8437 = this;
return cljs.core.pr_str.call(null,this__8437);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8438 = this;
if((this__8438.count > 0))
{var hashes__8439 = cljs.core.js_keys.call(null,this__8438.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8406_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8438.hashobj[p1__8406_SHARP_])));
}),hashes__8439);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8440 = this;
return this__8440.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8441 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8442 = this;
return (new cljs.core.HashMap(meta,this__8442.count,this__8442.hashobj,this__8442.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8443 = this;
return this__8443.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8444 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8444.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8445 = this;
var h__8446 = cljs.core.hash.call(null,k);
var bucket__8447 = (this__8445.hashobj[h__8446]);
var i__8448 = (cljs.core.truth_(bucket__8447)?cljs.core.scan_array.call(null,2,k,bucket__8447):null);
if(cljs.core.not.call(null,i__8448))
{return coll;
} else
{var new_hashobj__8449 = goog.object.clone(this__8445.hashobj);
if((3 > bucket__8447.length))
{cljs.core.js_delete.call(null,new_hashobj__8449,h__8446);
} else
{var new_bucket__8450 = bucket__8447.slice();
new_bucket__8450.splice(i__8448,2);
(new_hashobj__8449[h__8446] = new_bucket__8450);
}
return (new cljs.core.HashMap(this__8445.meta,(this__8445.count - 1),new_hashobj__8449,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8452 = ks.length;
var i__8453 = 0;
var out__8454 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8453 < len__8452))
{{
var G__8455 = (i__8453 + 1);
var G__8456 = cljs.core.assoc.call(null,out__8454,(ks[i__8453]),(vs[i__8453]));
i__8453 = G__8455;
out__8454 = G__8456;
continue;
}
} else
{return out__8454;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8460 = m.arr;
var len__8461 = arr__8460.length;
var i__8462 = 0;
while(true){
if((len__8461 <= i__8462))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8460[i__8462]),k))
{return i__8462;
} else
{if("\uFDD0'else")
{{
var G__8463 = (i__8462 + 2);
i__8462 = G__8463;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8466 = this;
return (new cljs.core.TransientArrayMap({},this__8466.arr.length,this__8466.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8467 = this;
var h__2260__auto____8468 = this__8467.__hash;
if(!((h__2260__auto____8468 == null)))
{return h__2260__auto____8468;
} else
{var h__2260__auto____8469 = cljs.core.hash_imap.call(null,coll);
this__8467.__hash = h__2260__auto____8469;
return h__2260__auto____8469;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8470 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8471 = this;
var idx__8472 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8472 === -1))
{return not_found;
} else
{return (this__8471.arr[(idx__8472 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8473 = this;
var idx__8474 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8474 === -1))
{if((this__8473.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8473.meta,(this__8473.cnt + 1),(function (){var G__8475__8476 = this__8473.arr.slice();
G__8475__8476.push(k);
G__8475__8476.push(v);
return G__8475__8476;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8473.arr[(idx__8474 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8473.meta,this__8473.cnt,(function (){var G__8477__8478 = this__8473.arr.slice();
(G__8477__8478[(idx__8474 + 1)] = v);
return G__8477__8478;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8479 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8511 = null;
var G__8511__2 = (function (this_sym8480,k){
var this__8482 = this;
var this_sym8480__8483 = this;
var coll__8484 = this_sym8480__8483;
return coll__8484.cljs$core$ILookup$_lookup$arity$2(coll__8484,k);
});
var G__8511__3 = (function (this_sym8481,k,not_found){
var this__8482 = this;
var this_sym8481__8485 = this;
var coll__8486 = this_sym8481__8485;
return coll__8486.cljs$core$ILookup$_lookup$arity$3(coll__8486,k,not_found);
});
G__8511 = function(this_sym8481,k,not_found){
switch(arguments.length){
case 2:
return G__8511__2.call(this,this_sym8481,k);
case 3:
return G__8511__3.call(this,this_sym8481,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8511;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8464,args8465){
var this__8487 = this;
return this_sym8464.call.apply(this_sym8464,[this_sym8464].concat(args8465.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8488 = this;
var len__8489 = this__8488.arr.length;
var i__8490 = 0;
var init__8491 = init;
while(true){
if((i__8490 < len__8489))
{var init__8492 = f.call(null,init__8491,(this__8488.arr[i__8490]),(this__8488.arr[(i__8490 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8492))
{return cljs.core.deref.call(null,init__8492);
} else
{{
var G__8512 = (i__8490 + 2);
var G__8513 = init__8492;
i__8490 = G__8512;
init__8491 = G__8513;
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
var this__8493 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8494 = this;
var this__8495 = this;
return cljs.core.pr_str.call(null,this__8495);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8496 = this;
if((this__8496.cnt > 0))
{var len__8497 = this__8496.arr.length;
var array_map_seq__8498 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8497))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8496.arr[i]),(this__8496.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8498.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8499 = this;
return this__8499.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8500 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8501 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8501.cnt,this__8501.arr,this__8501.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8502 = this;
return this__8502.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8503 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8503.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8504 = this;
var idx__8505 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8505 >= 0))
{var len__8506 = this__8504.arr.length;
var new_len__8507 = (len__8506 - 2);
if((new_len__8507 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__8508 = cljs.core.make_array.call(null,new_len__8507);
var s__8509 = 0;
var d__8510 = 0;
while(true){
if((s__8509 >= len__8506))
{return (new cljs.core.PersistentArrayMap(this__8504.meta,(this__8504.cnt - 1),new_arr__8508,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8504.arr[s__8509])))
{{
var G__8514 = (s__8509 + 2);
var G__8515 = d__8510;
s__8509 = G__8514;
d__8510 = G__8515;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8508[d__8510] = (this__8504.arr[s__8509]));
(new_arr__8508[(d__8510 + 1)] = (this__8504.arr[(s__8509 + 1)]));
{
var G__8516 = (s__8509 + 2);
var G__8517 = (d__8510 + 2);
s__8509 = G__8516;
d__8510 = G__8517;
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
var len__8518 = cljs.core.count.call(null,ks);
var i__8519 = 0;
var out__8520 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8519 < len__8518))
{{
var G__8521 = (i__8519 + 1);
var G__8522 = cljs.core.assoc_BANG_.call(null,out__8520,(ks[i__8519]),(vs[i__8519]));
i__8519 = G__8521;
out__8520 = G__8522;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8520);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8523 = this;
if(cljs.core.truth_(this__8523.editable_QMARK_))
{var idx__8524 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8524 >= 0))
{(this__8523.arr[idx__8524] = (this__8523.arr[(this__8523.len - 2)]));
(this__8523.arr[(idx__8524 + 1)] = (this__8523.arr[(this__8523.len - 1)]));
var G__8525__8526 = this__8523.arr;
G__8525__8526.pop();
G__8525__8526.pop();
G__8525__8526;
this__8523.len = (this__8523.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8527 = this;
if(cljs.core.truth_(this__8527.editable_QMARK_))
{var idx__8528 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8528 === -1))
{if(((this__8527.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__8527.len = (this__8527.len + 2);
this__8527.arr.push(key);
this__8527.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__8527.len,this__8527.arr),key,val);
}
} else
{if((val === (this__8527.arr[(idx__8528 + 1)])))
{return tcoll;
} else
{(this__8527.arr[(idx__8528 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8529 = this;
if(cljs.core.truth_(this__8529.editable_QMARK_))
{if((function (){var G__8530__8531 = o;
if(G__8530__8531)
{if((function (){var or__3824__auto____8532 = (G__8530__8531.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8532)
{return or__3824__auto____8532;
} else
{return G__8530__8531.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8530__8531.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8530__8531);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8530__8531);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8533 = cljs.core.seq.call(null,o);
var tcoll__8534 = tcoll;
while(true){
var temp__3971__auto____8535 = cljs.core.first.call(null,es__8533);
if(cljs.core.truth_(temp__3971__auto____8535))
{var e__8536 = temp__3971__auto____8535;
{
var G__8542 = cljs.core.next.call(null,es__8533);
var G__8543 = tcoll__8534.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__8534,cljs.core.key.call(null,e__8536),cljs.core.val.call(null,e__8536));
es__8533 = G__8542;
tcoll__8534 = G__8543;
continue;
}
} else
{return tcoll__8534;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8537 = this;
if(cljs.core.truth_(this__8537.editable_QMARK_))
{this__8537.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__8537.len,2),this__8537.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8538 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8539 = this;
if(cljs.core.truth_(this__8539.editable_QMARK_))
{var idx__8540 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__8540 === -1))
{return not_found;
} else
{return (this__8539.arr[(idx__8540 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8541 = this;
if(cljs.core.truth_(this__8541.editable_QMARK_))
{return cljs.core.quot.call(null,this__8541.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__8546 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__8547 = 0;
while(true){
if((i__8547 < len))
{{
var G__8548 = cljs.core.assoc_BANG_.call(null,out__8546,(arr[i__8547]),(arr[(i__8547 + 1)]));
var G__8549 = (i__8547 + 2);
out__8546 = G__8548;
i__8547 = G__8549;
continue;
}
} else
{return out__8546;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2378__auto__){
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
var G__8554__8555 = arr.slice();
(G__8554__8555[i] = a);
return G__8554__8555;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__8556__8557 = arr.slice();
(G__8556__8557[i] = a);
(G__8556__8557[j] = b);
return G__8556__8557;
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
var new_arr__8559 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__8559,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__8559,(2 * i),(new_arr__8559.length - (2 * i)));
return new_arr__8559;
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
var editable__8562 = inode.ensure_editable(edit);
(editable__8562.arr[i] = a);
return editable__8562;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__8563 = inode.ensure_editable(edit);
(editable__8563.arr[i] = a);
(editable__8563.arr[j] = b);
return editable__8563;
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
var len__8570 = arr.length;
var i__8571 = 0;
var init__8572 = init;
while(true){
if((i__8571 < len__8570))
{var init__8575 = (function (){var k__8573 = (arr[i__8571]);
if(!((k__8573 == null)))
{return f.call(null,init__8572,k__8573,(arr[(i__8571 + 1)]));
} else
{var node__8574 = (arr[(i__8571 + 1)]);
if(!((node__8574 == null)))
{return node__8574.kv_reduce(f,init__8572);
} else
{return init__8572;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8575))
{return cljs.core.deref.call(null,init__8575);
} else
{{
var G__8576 = (i__8571 + 2);
var G__8577 = init__8575;
i__8571 = G__8576;
init__8572 = G__8577;
continue;
}
}
} else
{return init__8572;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__8578 = this;
var inode__8579 = this;
if((this__8578.bitmap === bit))
{return null;
} else
{var editable__8580 = inode__8579.ensure_editable(e);
var earr__8581 = editable__8580.arr;
var len__8582 = earr__8581.length;
editable__8580.bitmap = (bit ^ editable__8580.bitmap);
cljs.core.array_copy.call(null,earr__8581,(2 * (i + 1)),earr__8581,(2 * i),(len__8582 - (2 * (i + 1))));
(earr__8581[(len__8582 - 2)] = null);
(earr__8581[(len__8582 - 1)] = null);
return editable__8580;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8583 = this;
var inode__8584 = this;
var bit__8585 = (1 << ((hash >>> shift) & 0x01f));
var idx__8586 = cljs.core.bitmap_indexed_node_index.call(null,this__8583.bitmap,bit__8585);
if(((this__8583.bitmap & bit__8585) === 0))
{var n__8587 = cljs.core.bit_count.call(null,this__8583.bitmap);
if(((2 * n__8587) < this__8583.arr.length))
{var editable__8588 = inode__8584.ensure_editable(edit);
var earr__8589 = editable__8588.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__8589,(2 * idx__8586),earr__8589,(2 * (idx__8586 + 1)),(2 * (n__8587 - idx__8586)));
(earr__8589[(2 * idx__8586)] = key);
(earr__8589[((2 * idx__8586) + 1)] = val);
editable__8588.bitmap = (editable__8588.bitmap | bit__8585);
return editable__8588;
} else
{if((n__8587 >= 16))
{var nodes__8590 = cljs.core.make_array.call(null,32);
var jdx__8591 = ((hash >>> shift) & 0x01f);
(nodes__8590[jdx__8591] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8592 = 0;
var j__8593 = 0;
while(true){
if((i__8592 < 32))
{if((((this__8583.bitmap >>> i__8592) & 1) === 0))
{{
var G__8646 = (i__8592 + 1);
var G__8647 = j__8593;
i__8592 = G__8646;
j__8593 = G__8647;
continue;
}
} else
{(nodes__8590[i__8592] = ((!(((this__8583.arr[j__8593]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__8583.arr[j__8593])),(this__8583.arr[j__8593]),(this__8583.arr[(j__8593 + 1)]),added_leaf_QMARK_):(this__8583.arr[(j__8593 + 1)])));
{
var G__8648 = (i__8592 + 1);
var G__8649 = (j__8593 + 2);
i__8592 = G__8648;
j__8593 = G__8649;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__8587 + 1),nodes__8590));
} else
{if("\uFDD0'else")
{var new_arr__8594 = cljs.core.make_array.call(null,(2 * (n__8587 + 4)));
cljs.core.array_copy.call(null,this__8583.arr,0,new_arr__8594,0,(2 * idx__8586));
(new_arr__8594[(2 * idx__8586)] = key);
(new_arr__8594[((2 * idx__8586) + 1)] = val);
cljs.core.array_copy.call(null,this__8583.arr,(2 * idx__8586),new_arr__8594,(2 * (idx__8586 + 1)),(2 * (n__8587 - idx__8586)));
added_leaf_QMARK_.val = true;
var editable__8595 = inode__8584.ensure_editable(edit);
editable__8595.arr = new_arr__8594;
editable__8595.bitmap = (editable__8595.bitmap | bit__8585);
return editable__8595;
} else
{return null;
}
}
}
} else
{var key_or_nil__8596 = (this__8583.arr[(2 * idx__8586)]);
var val_or_node__8597 = (this__8583.arr[((2 * idx__8586) + 1)]);
if((key_or_nil__8596 == null))
{var n__8598 = val_or_node__8597.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8598 === val_or_node__8597))
{return inode__8584;
} else
{return cljs.core.edit_and_set.call(null,inode__8584,edit,((2 * idx__8586) + 1),n__8598);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8596))
{if((val === val_or_node__8597))
{return inode__8584;
} else
{return cljs.core.edit_and_set.call(null,inode__8584,edit,((2 * idx__8586) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__8584,edit,(2 * idx__8586),null,((2 * idx__8586) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__8596,val_or_node__8597,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__8599 = this;
var inode__8600 = this;
return cljs.core.create_inode_seq.call(null,this__8599.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8601 = this;
var inode__8602 = this;
var bit__8603 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8601.bitmap & bit__8603) === 0))
{return inode__8602;
} else
{var idx__8604 = cljs.core.bitmap_indexed_node_index.call(null,this__8601.bitmap,bit__8603);
var key_or_nil__8605 = (this__8601.arr[(2 * idx__8604)]);
var val_or_node__8606 = (this__8601.arr[((2 * idx__8604) + 1)]);
if((key_or_nil__8605 == null))
{var n__8607 = val_or_node__8606.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8607 === val_or_node__8606))
{return inode__8602;
} else
{if(!((n__8607 == null)))
{return cljs.core.edit_and_set.call(null,inode__8602,edit,((2 * idx__8604) + 1),n__8607);
} else
{if((this__8601.bitmap === bit__8603))
{return null;
} else
{if("\uFDD0'else")
{return inode__8602.edit_and_remove_pair(edit,bit__8603,idx__8604);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8605))
{(removed_leaf_QMARK_[0] = true);
return inode__8602.edit_and_remove_pair(edit,bit__8603,idx__8604);
} else
{if("\uFDD0'else")
{return inode__8602;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__8608 = this;
var inode__8609 = this;
if((e === this__8608.edit))
{return inode__8609;
} else
{var n__8610 = cljs.core.bit_count.call(null,this__8608.bitmap);
var new_arr__8611 = cljs.core.make_array.call(null,(((n__8610 < 0))?4:(2 * (n__8610 + 1))));
cljs.core.array_copy.call(null,this__8608.arr,0,new_arr__8611,0,(2 * n__8610));
return (new cljs.core.BitmapIndexedNode(e,this__8608.bitmap,new_arr__8611));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__8612 = this;
var inode__8613 = this;
return cljs.core.inode_kv_reduce.call(null,this__8612.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8614 = this;
var inode__8615 = this;
var bit__8616 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8614.bitmap & bit__8616) === 0))
{return not_found;
} else
{var idx__8617 = cljs.core.bitmap_indexed_node_index.call(null,this__8614.bitmap,bit__8616);
var key_or_nil__8618 = (this__8614.arr[(2 * idx__8617)]);
var val_or_node__8619 = (this__8614.arr[((2 * idx__8617) + 1)]);
if((key_or_nil__8618 == null))
{return val_or_node__8619.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8618))
{return cljs.core.PersistentVector.fromArray([key_or_nil__8618,val_or_node__8619], true);
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
var this__8620 = this;
var inode__8621 = this;
var bit__8622 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8620.bitmap & bit__8622) === 0))
{return inode__8621;
} else
{var idx__8623 = cljs.core.bitmap_indexed_node_index.call(null,this__8620.bitmap,bit__8622);
var key_or_nil__8624 = (this__8620.arr[(2 * idx__8623)]);
var val_or_node__8625 = (this__8620.arr[((2 * idx__8623) + 1)]);
if((key_or_nil__8624 == null))
{var n__8626 = val_or_node__8625.inode_without((shift + 5),hash,key);
if((n__8626 === val_or_node__8625))
{return inode__8621;
} else
{if(!((n__8626 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__8620.bitmap,cljs.core.clone_and_set.call(null,this__8620.arr,((2 * idx__8623) + 1),n__8626)));
} else
{if((this__8620.bitmap === bit__8622))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__8620.bitmap ^ bit__8622),cljs.core.remove_pair.call(null,this__8620.arr,idx__8623)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8624))
{return (new cljs.core.BitmapIndexedNode(null,(this__8620.bitmap ^ bit__8622),cljs.core.remove_pair.call(null,this__8620.arr,idx__8623)));
} else
{if("\uFDD0'else")
{return inode__8621;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8627 = this;
var inode__8628 = this;
var bit__8629 = (1 << ((hash >>> shift) & 0x01f));
var idx__8630 = cljs.core.bitmap_indexed_node_index.call(null,this__8627.bitmap,bit__8629);
if(((this__8627.bitmap & bit__8629) === 0))
{var n__8631 = cljs.core.bit_count.call(null,this__8627.bitmap);
if((n__8631 >= 16))
{var nodes__8632 = cljs.core.make_array.call(null,32);
var jdx__8633 = ((hash >>> shift) & 0x01f);
(nodes__8632[jdx__8633] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8634 = 0;
var j__8635 = 0;
while(true){
if((i__8634 < 32))
{if((((this__8627.bitmap >>> i__8634) & 1) === 0))
{{
var G__8650 = (i__8634 + 1);
var G__8651 = j__8635;
i__8634 = G__8650;
j__8635 = G__8651;
continue;
}
} else
{(nodes__8632[i__8634] = ((!(((this__8627.arr[j__8635]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__8627.arr[j__8635])),(this__8627.arr[j__8635]),(this__8627.arr[(j__8635 + 1)]),added_leaf_QMARK_):(this__8627.arr[(j__8635 + 1)])));
{
var G__8652 = (i__8634 + 1);
var G__8653 = (j__8635 + 2);
i__8634 = G__8652;
j__8635 = G__8653;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__8631 + 1),nodes__8632));
} else
{var new_arr__8636 = cljs.core.make_array.call(null,(2 * (n__8631 + 1)));
cljs.core.array_copy.call(null,this__8627.arr,0,new_arr__8636,0,(2 * idx__8630));
(new_arr__8636[(2 * idx__8630)] = key);
(new_arr__8636[((2 * idx__8630) + 1)] = val);
cljs.core.array_copy.call(null,this__8627.arr,(2 * idx__8630),new_arr__8636,(2 * (idx__8630 + 1)),(2 * (n__8631 - idx__8630)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__8627.bitmap | bit__8629),new_arr__8636));
}
} else
{var key_or_nil__8637 = (this__8627.arr[(2 * idx__8630)]);
var val_or_node__8638 = (this__8627.arr[((2 * idx__8630) + 1)]);
if((key_or_nil__8637 == null))
{var n__8639 = val_or_node__8638.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8639 === val_or_node__8638))
{return inode__8628;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8627.bitmap,cljs.core.clone_and_set.call(null,this__8627.arr,((2 * idx__8630) + 1),n__8639)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8637))
{if((val === val_or_node__8638))
{return inode__8628;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8627.bitmap,cljs.core.clone_and_set.call(null,this__8627.arr,((2 * idx__8630) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__8627.bitmap,cljs.core.clone_and_set.call(null,this__8627.arr,(2 * idx__8630),null,((2 * idx__8630) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__8637,val_or_node__8638,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8640 = this;
var inode__8641 = this;
var bit__8642 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8640.bitmap & bit__8642) === 0))
{return not_found;
} else
{var idx__8643 = cljs.core.bitmap_indexed_node_index.call(null,this__8640.bitmap,bit__8642);
var key_or_nil__8644 = (this__8640.arr[(2 * idx__8643)]);
var val_or_node__8645 = (this__8640.arr[((2 * idx__8643) + 1)]);
if((key_or_nil__8644 == null))
{return val_or_node__8645.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8644))
{return val_or_node__8645;
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
var arr__8661 = array_node.arr;
var len__8662 = (2 * (array_node.cnt - 1));
var new_arr__8663 = cljs.core.make_array.call(null,len__8662);
var i__8664 = 0;
var j__8665 = 1;
var bitmap__8666 = 0;
while(true){
if((i__8664 < len__8662))
{if((function (){var and__3822__auto____8667 = !((i__8664 === idx));
if(and__3822__auto____8667)
{return !(((arr__8661[i__8664]) == null));
} else
{return and__3822__auto____8667;
}
})())
{(new_arr__8663[j__8665] = (arr__8661[i__8664]));
{
var G__8668 = (i__8664 + 1);
var G__8669 = (j__8665 + 2);
var G__8670 = (bitmap__8666 | (1 << i__8664));
i__8664 = G__8668;
j__8665 = G__8669;
bitmap__8666 = G__8670;
continue;
}
} else
{{
var G__8671 = (i__8664 + 1);
var G__8672 = j__8665;
var G__8673 = bitmap__8666;
i__8664 = G__8671;
j__8665 = G__8672;
bitmap__8666 = G__8673;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__8666,new_arr__8663));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8674 = this;
var inode__8675 = this;
var idx__8676 = ((hash >>> shift) & 0x01f);
var node__8677 = (this__8674.arr[idx__8676]);
if((node__8677 == null))
{var editable__8678 = cljs.core.edit_and_set.call(null,inode__8675,edit,idx__8676,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__8678.cnt = (editable__8678.cnt + 1);
return editable__8678;
} else
{var n__8679 = node__8677.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8679 === node__8677))
{return inode__8675;
} else
{return cljs.core.edit_and_set.call(null,inode__8675,edit,idx__8676,n__8679);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__8680 = this;
var inode__8681 = this;
return cljs.core.create_array_node_seq.call(null,this__8680.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8682 = this;
var inode__8683 = this;
var idx__8684 = ((hash >>> shift) & 0x01f);
var node__8685 = (this__8682.arr[idx__8684]);
if((node__8685 == null))
{return inode__8683;
} else
{var n__8686 = node__8685.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8686 === node__8685))
{return inode__8683;
} else
{if((n__8686 == null))
{if((this__8682.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8683,edit,idx__8684);
} else
{var editable__8687 = cljs.core.edit_and_set.call(null,inode__8683,edit,idx__8684,n__8686);
editable__8687.cnt = (editable__8687.cnt - 1);
return editable__8687;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__8683,edit,idx__8684,n__8686);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__8688 = this;
var inode__8689 = this;
if((e === this__8688.edit))
{return inode__8689;
} else
{return (new cljs.core.ArrayNode(e,this__8688.cnt,this__8688.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__8690 = this;
var inode__8691 = this;
var len__8692 = this__8690.arr.length;
var i__8693 = 0;
var init__8694 = init;
while(true){
if((i__8693 < len__8692))
{var node__8695 = (this__8690.arr[i__8693]);
if(!((node__8695 == null)))
{var init__8696 = node__8695.kv_reduce(f,init__8694);
if(cljs.core.reduced_QMARK_.call(null,init__8696))
{return cljs.core.deref.call(null,init__8696);
} else
{{
var G__8715 = (i__8693 + 1);
var G__8716 = init__8696;
i__8693 = G__8715;
init__8694 = G__8716;
continue;
}
}
} else
{return null;
}
} else
{return init__8694;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8697 = this;
var inode__8698 = this;
var idx__8699 = ((hash >>> shift) & 0x01f);
var node__8700 = (this__8697.arr[idx__8699]);
if(!((node__8700 == null)))
{return node__8700.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__8701 = this;
var inode__8702 = this;
var idx__8703 = ((hash >>> shift) & 0x01f);
var node__8704 = (this__8701.arr[idx__8703]);
if(!((node__8704 == null)))
{var n__8705 = node__8704.inode_without((shift + 5),hash,key);
if((n__8705 === node__8704))
{return inode__8702;
} else
{if((n__8705 == null))
{if((this__8701.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8702,null,idx__8703);
} else
{return (new cljs.core.ArrayNode(null,(this__8701.cnt - 1),cljs.core.clone_and_set.call(null,this__8701.arr,idx__8703,n__8705)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__8701.cnt,cljs.core.clone_and_set.call(null,this__8701.arr,idx__8703,n__8705)));
} else
{return null;
}
}
}
} else
{return inode__8702;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8706 = this;
var inode__8707 = this;
var idx__8708 = ((hash >>> shift) & 0x01f);
var node__8709 = (this__8706.arr[idx__8708]);
if((node__8709 == null))
{return (new cljs.core.ArrayNode(null,(this__8706.cnt + 1),cljs.core.clone_and_set.call(null,this__8706.arr,idx__8708,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__8710 = node__8709.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8710 === node__8709))
{return inode__8707;
} else
{return (new cljs.core.ArrayNode(null,this__8706.cnt,cljs.core.clone_and_set.call(null,this__8706.arr,idx__8708,n__8710)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8711 = this;
var inode__8712 = this;
var idx__8713 = ((hash >>> shift) & 0x01f);
var node__8714 = (this__8711.arr[idx__8713]);
if(!((node__8714 == null)))
{return node__8714.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__8719 = (2 * cnt);
var i__8720 = 0;
while(true){
if((i__8720 < lim__8719))
{if(cljs.core.key_test.call(null,key,(arr[i__8720])))
{return i__8720;
} else
{{
var G__8721 = (i__8720 + 2);
i__8720 = G__8721;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8722 = this;
var inode__8723 = this;
if((hash === this__8722.collision_hash))
{var idx__8724 = cljs.core.hash_collision_node_find_index.call(null,this__8722.arr,this__8722.cnt,key);
if((idx__8724 === -1))
{if((this__8722.arr.length > (2 * this__8722.cnt)))
{var editable__8725 = cljs.core.edit_and_set.call(null,inode__8723,edit,(2 * this__8722.cnt),key,((2 * this__8722.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__8725.cnt = (editable__8725.cnt + 1);
return editable__8725;
} else
{var len__8726 = this__8722.arr.length;
var new_arr__8727 = cljs.core.make_array.call(null,(len__8726 + 2));
cljs.core.array_copy.call(null,this__8722.arr,0,new_arr__8727,0,len__8726);
(new_arr__8727[len__8726] = key);
(new_arr__8727[(len__8726 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__8723.ensure_editable_array(edit,(this__8722.cnt + 1),new_arr__8727);
}
} else
{if(((this__8722.arr[(idx__8724 + 1)]) === val))
{return inode__8723;
} else
{return cljs.core.edit_and_set.call(null,inode__8723,edit,(idx__8724 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__8722.collision_hash >>> shift) & 0x01f)),[null,inode__8723,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__8728 = this;
var inode__8729 = this;
return cljs.core.create_inode_seq.call(null,this__8728.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8730 = this;
var inode__8731 = this;
var idx__8732 = cljs.core.hash_collision_node_find_index.call(null,this__8730.arr,this__8730.cnt,key);
if((idx__8732 === -1))
{return inode__8731;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__8730.cnt === 1))
{return null;
} else
{var editable__8733 = inode__8731.ensure_editable(edit);
var earr__8734 = editable__8733.arr;
(earr__8734[idx__8732] = (earr__8734[((2 * this__8730.cnt) - 2)]));
(earr__8734[(idx__8732 + 1)] = (earr__8734[((2 * this__8730.cnt) - 1)]));
(earr__8734[((2 * this__8730.cnt) - 1)] = null);
(earr__8734[((2 * this__8730.cnt) - 2)] = null);
editable__8733.cnt = (editable__8733.cnt - 1);
return editable__8733;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__8735 = this;
var inode__8736 = this;
if((e === this__8735.edit))
{return inode__8736;
} else
{var new_arr__8737 = cljs.core.make_array.call(null,(2 * (this__8735.cnt + 1)));
cljs.core.array_copy.call(null,this__8735.arr,0,new_arr__8737,0,(2 * this__8735.cnt));
return (new cljs.core.HashCollisionNode(e,this__8735.collision_hash,this__8735.cnt,new_arr__8737));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__8738 = this;
var inode__8739 = this;
return cljs.core.inode_kv_reduce.call(null,this__8738.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8740 = this;
var inode__8741 = this;
var idx__8742 = cljs.core.hash_collision_node_find_index.call(null,this__8740.arr,this__8740.cnt,key);
if((idx__8742 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8740.arr[idx__8742])))
{return cljs.core.PersistentVector.fromArray([(this__8740.arr[idx__8742]),(this__8740.arr[(idx__8742 + 1)])], true);
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
var this__8743 = this;
var inode__8744 = this;
var idx__8745 = cljs.core.hash_collision_node_find_index.call(null,this__8743.arr,this__8743.cnt,key);
if((idx__8745 === -1))
{return inode__8744;
} else
{if((this__8743.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__8743.collision_hash,(this__8743.cnt - 1),cljs.core.remove_pair.call(null,this__8743.arr,cljs.core.quot.call(null,idx__8745,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8746 = this;
var inode__8747 = this;
if((hash === this__8746.collision_hash))
{var idx__8748 = cljs.core.hash_collision_node_find_index.call(null,this__8746.arr,this__8746.cnt,key);
if((idx__8748 === -1))
{var len__8749 = this__8746.arr.length;
var new_arr__8750 = cljs.core.make_array.call(null,(len__8749 + 2));
cljs.core.array_copy.call(null,this__8746.arr,0,new_arr__8750,0,len__8749);
(new_arr__8750[len__8749] = key);
(new_arr__8750[(len__8749 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__8746.collision_hash,(this__8746.cnt + 1),new_arr__8750));
} else
{if(cljs.core._EQ_.call(null,(this__8746.arr[idx__8748]),val))
{return inode__8747;
} else
{return (new cljs.core.HashCollisionNode(null,this__8746.collision_hash,this__8746.cnt,cljs.core.clone_and_set.call(null,this__8746.arr,(idx__8748 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__8746.collision_hash >>> shift) & 0x01f)),[null,inode__8747])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8751 = this;
var inode__8752 = this;
var idx__8753 = cljs.core.hash_collision_node_find_index.call(null,this__8751.arr,this__8751.cnt,key);
if((idx__8753 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8751.arr[idx__8753])))
{return (this__8751.arr[(idx__8753 + 1)]);
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
var this__8754 = this;
var inode__8755 = this;
if((e === this__8754.edit))
{this__8754.arr = array;
this__8754.cnt = count;
return inode__8755;
} else
{return (new cljs.core.HashCollisionNode(this__8754.edit,this__8754.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__8760 = cljs.core.hash.call(null,key1);
if((key1hash__8760 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8760,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8761 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__8760,key1,val1,added_leaf_QMARK___8761).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___8761);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__8762 = cljs.core.hash.call(null,key1);
if((key1hash__8762 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8762,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8763 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__8762,key1,val1,added_leaf_QMARK___8763).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___8763);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8764 = this;
var h__2260__auto____8765 = this__8764.__hash;
if(!((h__2260__auto____8765 == null)))
{return h__2260__auto____8765;
} else
{var h__2260__auto____8766 = cljs.core.hash_coll.call(null,coll);
this__8764.__hash = h__2260__auto____8766;
return h__2260__auto____8766;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8767 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__8768 = this;
var this__8769 = this;
return cljs.core.pr_str.call(null,this__8769);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8770 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8771 = this;
if((this__8771.s == null))
{return cljs.core.PersistentVector.fromArray([(this__8771.nodes[this__8771.i]),(this__8771.nodes[(this__8771.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__8771.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8772 = this;
if((this__8772.s == null))
{return cljs.core.create_inode_seq.call(null,this__8772.nodes,(this__8772.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__8772.nodes,this__8772.i,cljs.core.next.call(null,this__8772.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8773 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8774 = this;
return (new cljs.core.NodeSeq(meta,this__8774.nodes,this__8774.i,this__8774.s,this__8774.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8775 = this;
return this__8775.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8776 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8776.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__8783 = nodes.length;
var j__8784 = i;
while(true){
if((j__8784 < len__8783))
{if(!(((nodes[j__8784]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__8784,null,null));
} else
{var temp__3971__auto____8785 = (nodes[(j__8784 + 1)]);
if(cljs.core.truth_(temp__3971__auto____8785))
{var node__8786 = temp__3971__auto____8785;
var temp__3971__auto____8787 = node__8786.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8787))
{var node_seq__8788 = temp__3971__auto____8787;
return (new cljs.core.NodeSeq(null,nodes,(j__8784 + 2),node_seq__8788,null));
} else
{{
var G__8789 = (j__8784 + 2);
j__8784 = G__8789;
continue;
}
}
} else
{{
var G__8790 = (j__8784 + 2);
j__8784 = G__8790;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8791 = this;
var h__2260__auto____8792 = this__8791.__hash;
if(!((h__2260__auto____8792 == null)))
{return h__2260__auto____8792;
} else
{var h__2260__auto____8793 = cljs.core.hash_coll.call(null,coll);
this__8791.__hash = h__2260__auto____8793;
return h__2260__auto____8793;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8794 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__8795 = this;
var this__8796 = this;
return cljs.core.pr_str.call(null,this__8796);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8797 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8798 = this;
return cljs.core.first.call(null,this__8798.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8799 = this;
return cljs.core.create_array_node_seq.call(null,null,this__8799.nodes,this__8799.i,cljs.core.next.call(null,this__8799.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8800 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8801 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__8801.nodes,this__8801.i,this__8801.s,this__8801.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8802 = this;
return this__8802.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8803 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8803.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__8810 = nodes.length;
var j__8811 = i;
while(true){
if((j__8811 < len__8810))
{var temp__3971__auto____8812 = (nodes[j__8811]);
if(cljs.core.truth_(temp__3971__auto____8812))
{var nj__8813 = temp__3971__auto____8812;
var temp__3971__auto____8814 = nj__8813.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8814))
{var ns__8815 = temp__3971__auto____8814;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__8811 + 1),ns__8815,null));
} else
{{
var G__8816 = (j__8811 + 1);
j__8811 = G__8816;
continue;
}
}
} else
{{
var G__8817 = (j__8811 + 1);
j__8811 = G__8817;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8820 = this;
return (new cljs.core.TransientHashMap({},this__8820.root,this__8820.cnt,this__8820.has_nil_QMARK_,this__8820.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8821 = this;
var h__2260__auto____8822 = this__8821.__hash;
if(!((h__2260__auto____8822 == null)))
{return h__2260__auto____8822;
} else
{var h__2260__auto____8823 = cljs.core.hash_imap.call(null,coll);
this__8821.__hash = h__2260__auto____8823;
return h__2260__auto____8823;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8824 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8825 = this;
if((k == null))
{if(this__8825.has_nil_QMARK_)
{return this__8825.nil_val;
} else
{return not_found;
}
} else
{if((this__8825.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__8825.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8826 = this;
if((k == null))
{if((function (){var and__3822__auto____8827 = this__8826.has_nil_QMARK_;
if(and__3822__auto____8827)
{return (v === this__8826.nil_val);
} else
{return and__3822__auto____8827;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8826.meta,((this__8826.has_nil_QMARK_)?this__8826.cnt:(this__8826.cnt + 1)),this__8826.root,true,v,null));
}
} else
{var added_leaf_QMARK___8828 = (new cljs.core.Box(false));
var new_root__8829 = (((this__8826.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8826.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8828);
if((new_root__8829 === this__8826.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8826.meta,((added_leaf_QMARK___8828.val)?(this__8826.cnt + 1):this__8826.cnt),new_root__8829,this__8826.has_nil_QMARK_,this__8826.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8830 = this;
if((k == null))
{return this__8830.has_nil_QMARK_;
} else
{if((this__8830.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__8830.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__8853 = null;
var G__8853__2 = (function (this_sym8831,k){
var this__8833 = this;
var this_sym8831__8834 = this;
var coll__8835 = this_sym8831__8834;
return coll__8835.cljs$core$ILookup$_lookup$arity$2(coll__8835,k);
});
var G__8853__3 = (function (this_sym8832,k,not_found){
var this__8833 = this;
var this_sym8832__8836 = this;
var coll__8837 = this_sym8832__8836;
return coll__8837.cljs$core$ILookup$_lookup$arity$3(coll__8837,k,not_found);
});
G__8853 = function(this_sym8832,k,not_found){
switch(arguments.length){
case 2:
return G__8853__2.call(this,this_sym8832,k);
case 3:
return G__8853__3.call(this,this_sym8832,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8853;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym8818,args8819){
var this__8838 = this;
return this_sym8818.call.apply(this_sym8818,[this_sym8818].concat(args8819.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8839 = this;
var init__8840 = ((this__8839.has_nil_QMARK_)?f.call(null,init,null,this__8839.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__8840))
{return cljs.core.deref.call(null,init__8840);
} else
{if(!((this__8839.root == null)))
{return this__8839.root.kv_reduce(f,init__8840);
} else
{if("\uFDD0'else")
{return init__8840;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8841 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__8842 = this;
var this__8843 = this;
return cljs.core.pr_str.call(null,this__8843);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8844 = this;
if((this__8844.cnt > 0))
{var s__8845 = ((!((this__8844.root == null)))?this__8844.root.inode_seq():null);
if(this__8844.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__8844.nil_val], true),s__8845);
} else
{return s__8845;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8846 = this;
return this__8846.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8847 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8848 = this;
return (new cljs.core.PersistentHashMap(meta,this__8848.cnt,this__8848.root,this__8848.has_nil_QMARK_,this__8848.nil_val,this__8848.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8849 = this;
return this__8849.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8850 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__8850.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8851 = this;
if((k == null))
{if(this__8851.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__8851.meta,(this__8851.cnt - 1),this__8851.root,false,null,null));
} else
{return coll;
}
} else
{if((this__8851.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__8852 = this__8851.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__8852 === this__8851.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8851.meta,(this__8851.cnt - 1),new_root__8852,this__8851.has_nil_QMARK_,this__8851.nil_val,null));
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
var len__8854 = ks.length;
var i__8855 = 0;
var out__8856 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__8855 < len__8854))
{{
var G__8857 = (i__8855 + 1);
var G__8858 = cljs.core.assoc_BANG_.call(null,out__8856,(ks[i__8855]),(vs[i__8855]));
i__8855 = G__8857;
out__8856 = G__8858;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8856);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8859 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8860 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__8861 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8862 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8863 = this;
if((k == null))
{if(this__8863.has_nil_QMARK_)
{return this__8863.nil_val;
} else
{return null;
}
} else
{if((this__8863.root == null))
{return null;
} else
{return this__8863.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8864 = this;
if((k == null))
{if(this__8864.has_nil_QMARK_)
{return this__8864.nil_val;
} else
{return not_found;
}
} else
{if((this__8864.root == null))
{return not_found;
} else
{return this__8864.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8865 = this;
if(this__8865.edit)
{return this__8865.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__8866 = this;
var tcoll__8867 = this;
if(this__8866.edit)
{if((function (){var G__8868__8869 = o;
if(G__8868__8869)
{if((function (){var or__3824__auto____8870 = (G__8868__8869.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8870)
{return or__3824__auto____8870;
} else
{return G__8868__8869.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8868__8869.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8868__8869);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8868__8869);
}
})())
{return tcoll__8867.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8871 = cljs.core.seq.call(null,o);
var tcoll__8872 = tcoll__8867;
while(true){
var temp__3971__auto____8873 = cljs.core.first.call(null,es__8871);
if(cljs.core.truth_(temp__3971__auto____8873))
{var e__8874 = temp__3971__auto____8873;
{
var G__8885 = cljs.core.next.call(null,es__8871);
var G__8886 = tcoll__8872.assoc_BANG_(cljs.core.key.call(null,e__8874),cljs.core.val.call(null,e__8874));
es__8871 = G__8885;
tcoll__8872 = G__8886;
continue;
}
} else
{return tcoll__8872;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__8875 = this;
var tcoll__8876 = this;
if(this__8875.edit)
{if((k == null))
{if((this__8875.nil_val === v))
{} else
{this__8875.nil_val = v;
}
if(this__8875.has_nil_QMARK_)
{} else
{this__8875.count = (this__8875.count + 1);
this__8875.has_nil_QMARK_ = true;
}
return tcoll__8876;
} else
{var added_leaf_QMARK___8877 = (new cljs.core.Box(false));
var node__8878 = (((this__8875.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8875.root).inode_assoc_BANG_(this__8875.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8877);
if((node__8878 === this__8875.root))
{} else
{this__8875.root = node__8878;
}
if(added_leaf_QMARK___8877.val)
{this__8875.count = (this__8875.count + 1);
} else
{}
return tcoll__8876;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__8879 = this;
var tcoll__8880 = this;
if(this__8879.edit)
{if((k == null))
{if(this__8879.has_nil_QMARK_)
{this__8879.has_nil_QMARK_ = false;
this__8879.nil_val = null;
this__8879.count = (this__8879.count - 1);
return tcoll__8880;
} else
{return tcoll__8880;
}
} else
{if((this__8879.root == null))
{return tcoll__8880;
} else
{var removed_leaf_QMARK___8881 = (new cljs.core.Box(false));
var node__8882 = this__8879.root.inode_without_BANG_(this__8879.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___8881);
if((node__8882 === this__8879.root))
{} else
{this__8879.root = node__8882;
}
if(cljs.core.truth_((removed_leaf_QMARK___8881[0])))
{this__8879.count = (this__8879.count - 1);
} else
{}
return tcoll__8880;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__8883 = this;
var tcoll__8884 = this;
if(this__8883.edit)
{this__8883.edit = null;
return (new cljs.core.PersistentHashMap(null,this__8883.count,this__8883.root,this__8883.has_nil_QMARK_,this__8883.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__8889 = node;
var stack__8890 = stack;
while(true){
if(!((t__8889 == null)))
{{
var G__8891 = ((ascending_QMARK_)?t__8889.left:t__8889.right);
var G__8892 = cljs.core.conj.call(null,stack__8890,t__8889);
t__8889 = G__8891;
stack__8890 = G__8892;
continue;
}
} else
{return stack__8890;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8893 = this;
var h__2260__auto____8894 = this__8893.__hash;
if(!((h__2260__auto____8894 == null)))
{return h__2260__auto____8894;
} else
{var h__2260__auto____8895 = cljs.core.hash_coll.call(null,coll);
this__8893.__hash = h__2260__auto____8895;
return h__2260__auto____8895;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8896 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__8897 = this;
var this__8898 = this;
return cljs.core.pr_str.call(null,this__8898);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8899 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8900 = this;
if((this__8900.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__8900.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__8901 = this;
return cljs.core.peek.call(null,this__8901.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__8902 = this;
var t__8903 = cljs.core.first.call(null,this__8902.stack);
var next_stack__8904 = cljs.core.tree_map_seq_push.call(null,((this__8902.ascending_QMARK_)?t__8903.right:t__8903.left),cljs.core.next.call(null,this__8902.stack),this__8902.ascending_QMARK_);
if(!((next_stack__8904 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__8904,this__8902.ascending_QMARK_,(this__8902.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8905 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8906 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__8906.stack,this__8906.ascending_QMARK_,this__8906.cnt,this__8906.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8907 = this;
return this__8907.meta;
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
{if((function (){var and__3822__auto____8909 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____8909)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____8909;
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
{if((function (){var and__3822__auto____8911 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____8911)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____8911;
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
var init__8915 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__8915))
{return cljs.core.deref.call(null,init__8915);
} else
{var init__8916 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__8915):init__8915);
if(cljs.core.reduced_QMARK_.call(null,init__8916))
{return cljs.core.deref.call(null,init__8916);
} else
{var init__8917 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__8916):init__8916);
if(cljs.core.reduced_QMARK_.call(null,init__8917))
{return cljs.core.deref.call(null,init__8917);
} else
{return init__8917;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8920 = this;
var h__2260__auto____8921 = this__8920.__hash;
if(!((h__2260__auto____8921 == null)))
{return h__2260__auto____8921;
} else
{var h__2260__auto____8922 = cljs.core.hash_coll.call(null,coll);
this__8920.__hash = h__2260__auto____8922;
return h__2260__auto____8922;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8923 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8924 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8925 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__8925.key,this__8925.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__8973 = null;
var G__8973__2 = (function (this_sym8926,k){
var this__8928 = this;
var this_sym8926__8929 = this;
var node__8930 = this_sym8926__8929;
return node__8930.cljs$core$ILookup$_lookup$arity$2(node__8930,k);
});
var G__8973__3 = (function (this_sym8927,k,not_found){
var this__8928 = this;
var this_sym8927__8931 = this;
var node__8932 = this_sym8927__8931;
return node__8932.cljs$core$ILookup$_lookup$arity$3(node__8932,k,not_found);
});
G__8973 = function(this_sym8927,k,not_found){
switch(arguments.length){
case 2:
return G__8973__2.call(this,this_sym8927,k);
case 3:
return G__8973__3.call(this,this_sym8927,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8973;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym8918,args8919){
var this__8933 = this;
return this_sym8918.call.apply(this_sym8918,[this_sym8918].concat(args8919.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8934 = this;
return cljs.core.PersistentVector.fromArray([this__8934.key,this__8934.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8935 = this;
return this__8935.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8936 = this;
return this__8936.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__8937 = this;
var node__8938 = this;
return ins.balance_right(node__8938);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__8939 = this;
var node__8940 = this;
return (new cljs.core.RedNode(this__8939.key,this__8939.val,this__8939.left,this__8939.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__8941 = this;
var node__8942 = this;
return cljs.core.balance_right_del.call(null,this__8941.key,this__8941.val,this__8941.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__8943 = this;
var node__8944 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__8945 = this;
var node__8946 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__8946,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__8947 = this;
var node__8948 = this;
return cljs.core.balance_left_del.call(null,this__8947.key,this__8947.val,del,this__8947.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__8949 = this;
var node__8950 = this;
return ins.balance_left(node__8950);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__8951 = this;
var node__8952 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__8952,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__8974 = null;
var G__8974__0 = (function (){
var this__8953 = this;
var this__8955 = this;
return cljs.core.pr_str.call(null,this__8955);
});
G__8974 = function(){
switch(arguments.length){
case 0:
return G__8974__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8974;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__8956 = this;
var node__8957 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8957,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__8958 = this;
var node__8959 = this;
return node__8959;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8960 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8961 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8962 = this;
return cljs.core.list.call(null,this__8962.key,this__8962.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8963 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8964 = this;
return this__8964.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8965 = this;
return cljs.core.PersistentVector.fromArray([this__8965.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8966 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__8966.key,this__8966.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8967 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__8968 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__8968.key,this__8968.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__8969 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__8970 = this;
if((n === 0))
{return this__8970.key;
} else
{if((n === 1))
{return this__8970.val;
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
var this__8971 = this;
if((n === 0))
{return this__8971.key;
} else
{if((n === 1))
{return this__8971.val;
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
var this__8972 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8977 = this;
var h__2260__auto____8978 = this__8977.__hash;
if(!((h__2260__auto____8978 == null)))
{return h__2260__auto____8978;
} else
{var h__2260__auto____8979 = cljs.core.hash_coll.call(null,coll);
this__8977.__hash = h__2260__auto____8979;
return h__2260__auto____8979;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8980 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8981 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8982 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__8982.key,this__8982.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9030 = null;
var G__9030__2 = (function (this_sym8983,k){
var this__8985 = this;
var this_sym8983__8986 = this;
var node__8987 = this_sym8983__8986;
return node__8987.cljs$core$ILookup$_lookup$arity$2(node__8987,k);
});
var G__9030__3 = (function (this_sym8984,k,not_found){
var this__8985 = this;
var this_sym8984__8988 = this;
var node__8989 = this_sym8984__8988;
return node__8989.cljs$core$ILookup$_lookup$arity$3(node__8989,k,not_found);
});
G__9030 = function(this_sym8984,k,not_found){
switch(arguments.length){
case 2:
return G__9030__2.call(this,this_sym8984,k);
case 3:
return G__9030__3.call(this,this_sym8984,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9030;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym8975,args8976){
var this__8990 = this;
return this_sym8975.call.apply(this_sym8975,[this_sym8975].concat(args8976.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8991 = this;
return cljs.core.PersistentVector.fromArray([this__8991.key,this__8991.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8992 = this;
return this__8992.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8993 = this;
return this__8993.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__8994 = this;
var node__8995 = this;
return (new cljs.core.RedNode(this__8994.key,this__8994.val,this__8994.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__8996 = this;
var node__8997 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__8998 = this;
var node__8999 = this;
return (new cljs.core.RedNode(this__8998.key,this__8998.val,this__8998.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9000 = this;
var node__9001 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9002 = this;
var node__9003 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9003,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9004 = this;
var node__9005 = this;
return (new cljs.core.RedNode(this__9004.key,this__9004.val,del,this__9004.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9006 = this;
var node__9007 = this;
return (new cljs.core.RedNode(this__9006.key,this__9006.val,ins,this__9006.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9008 = this;
var node__9009 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9008.left))
{return (new cljs.core.RedNode(this__9008.key,this__9008.val,this__9008.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9008.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9008.right))
{return (new cljs.core.RedNode(this__9008.right.key,this__9008.right.val,(new cljs.core.BlackNode(this__9008.key,this__9008.val,this__9008.left,this__9008.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9008.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9009,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9031 = null;
var G__9031__0 = (function (){
var this__9010 = this;
var this__9012 = this;
return cljs.core.pr_str.call(null,this__9012);
});
G__9031 = function(){
switch(arguments.length){
case 0:
return G__9031__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9031;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9013 = this;
var node__9014 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9013.right))
{return (new cljs.core.RedNode(this__9013.key,this__9013.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9013.left,null)),this__9013.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9013.left))
{return (new cljs.core.RedNode(this__9013.left.key,this__9013.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9013.left.left,null)),(new cljs.core.BlackNode(this__9013.key,this__9013.val,this__9013.left.right,this__9013.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9014,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9015 = this;
var node__9016 = this;
return (new cljs.core.BlackNode(this__9015.key,this__9015.val,this__9015.left,this__9015.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9017 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9018 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9019 = this;
return cljs.core.list.call(null,this__9019.key,this__9019.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9020 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9021 = this;
return this__9021.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9022 = this;
return cljs.core.PersistentVector.fromArray([this__9022.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9023 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9023.key,this__9023.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9024 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9025 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9025.key,this__9025.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9026 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9027 = this;
if((n === 0))
{return this__9027.key;
} else
{if((n === 1))
{return this__9027.val;
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
var this__9028 = this;
if((n === 0))
{return this__9028.key;
} else
{if((n === 1))
{return this__9028.val;
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
var this__9029 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9035 = comp.call(null,k,tree.key);
if((c__9035 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9035 < 0))
{var ins__9036 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9036 == null)))
{return tree.add_left(ins__9036);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9037 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9037 == null)))
{return tree.add_right(ins__9037);
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
{var app__9040 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9040))
{return (new cljs.core.RedNode(app__9040.key,app__9040.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9040.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9040.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9040,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9041 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9041))
{return (new cljs.core.RedNode(app__9041.key,app__9041.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9041.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9041.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9041,right.right,null)));
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
{var c__9047 = comp.call(null,k,tree.key);
if((c__9047 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9047 < 0))
{var del__9048 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____9049 = !((del__9048 == null));
if(or__3824__auto____9049)
{return or__3824__auto____9049;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9048,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9048,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9050 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____9051 = !((del__9050 == null));
if(or__3824__auto____9051)
{return or__3824__auto____9051;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9050);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9050,null));
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
var tk__9054 = tree.key;
var c__9055 = comp.call(null,k,tk__9054);
if((c__9055 === 0))
{return tree.replace(tk__9054,v,tree.left,tree.right);
} else
{if((c__9055 < 0))
{return tree.replace(tk__9054,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9054,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9058 = this;
var h__2260__auto____9059 = this__9058.__hash;
if(!((h__2260__auto____9059 == null)))
{return h__2260__auto____9059;
} else
{var h__2260__auto____9060 = cljs.core.hash_imap.call(null,coll);
this__9058.__hash = h__2260__auto____9060;
return h__2260__auto____9060;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9061 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9062 = this;
var n__9063 = coll.entry_at(k);
if(!((n__9063 == null)))
{return n__9063.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9064 = this;
var found__9065 = [null];
var t__9066 = cljs.core.tree_map_add.call(null,this__9064.comp,this__9064.tree,k,v,found__9065);
if((t__9066 == null))
{var found_node__9067 = cljs.core.nth.call(null,found__9065,0);
if(cljs.core._EQ_.call(null,v,found_node__9067.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9064.comp,cljs.core.tree_map_replace.call(null,this__9064.comp,this__9064.tree,k,v),this__9064.cnt,this__9064.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9064.comp,t__9066.blacken(),(this__9064.cnt + 1),this__9064.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9068 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9102 = null;
var G__9102__2 = (function (this_sym9069,k){
var this__9071 = this;
var this_sym9069__9072 = this;
var coll__9073 = this_sym9069__9072;
return coll__9073.cljs$core$ILookup$_lookup$arity$2(coll__9073,k);
});
var G__9102__3 = (function (this_sym9070,k,not_found){
var this__9071 = this;
var this_sym9070__9074 = this;
var coll__9075 = this_sym9070__9074;
return coll__9075.cljs$core$ILookup$_lookup$arity$3(coll__9075,k,not_found);
});
G__9102 = function(this_sym9070,k,not_found){
switch(arguments.length){
case 2:
return G__9102__2.call(this,this_sym9070,k);
case 3:
return G__9102__3.call(this,this_sym9070,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9102;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9056,args9057){
var this__9076 = this;
return this_sym9056.call.apply(this_sym9056,[this_sym9056].concat(args9057.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9077 = this;
if(!((this__9077.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9077.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9078 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9079 = this;
if((this__9079.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9079.tree,false,this__9079.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9080 = this;
var this__9081 = this;
return cljs.core.pr_str.call(null,this__9081);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9082 = this;
var coll__9083 = this;
var t__9084 = this__9082.tree;
while(true){
if(!((t__9084 == null)))
{var c__9085 = this__9082.comp.call(null,k,t__9084.key);
if((c__9085 === 0))
{return t__9084;
} else
{if((c__9085 < 0))
{{
var G__9103 = t__9084.left;
t__9084 = G__9103;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9104 = t__9084.right;
t__9084 = G__9104;
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
var this__9086 = this;
if((this__9086.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9086.tree,ascending_QMARK_,this__9086.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9087 = this;
if((this__9087.cnt > 0))
{var stack__9088 = null;
var t__9089 = this__9087.tree;
while(true){
if(!((t__9089 == null)))
{var c__9090 = this__9087.comp.call(null,k,t__9089.key);
if((c__9090 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9088,t__9089),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9090 < 0))
{{
var G__9105 = cljs.core.conj.call(null,stack__9088,t__9089);
var G__9106 = t__9089.left;
stack__9088 = G__9105;
t__9089 = G__9106;
continue;
}
} else
{{
var G__9107 = stack__9088;
var G__9108 = t__9089.right;
stack__9088 = G__9107;
t__9089 = G__9108;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9090 > 0))
{{
var G__9109 = cljs.core.conj.call(null,stack__9088,t__9089);
var G__9110 = t__9089.right;
stack__9088 = G__9109;
t__9089 = G__9110;
continue;
}
} else
{{
var G__9111 = stack__9088;
var G__9112 = t__9089.left;
stack__9088 = G__9111;
t__9089 = G__9112;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9088 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9088,ascending_QMARK_,-1,null));
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
var this__9091 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9092 = this;
return this__9092.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9093 = this;
if((this__9093.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9093.tree,true,this__9093.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9094 = this;
return this__9094.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9095 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9096 = this;
return (new cljs.core.PersistentTreeMap(this__9096.comp,this__9096.tree,this__9096.cnt,meta,this__9096.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9097 = this;
return this__9097.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9098 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9098.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9099 = this;
var found__9100 = [null];
var t__9101 = cljs.core.tree_map_remove.call(null,this__9099.comp,this__9099.tree,k,found__9100);
if((t__9101 == null))
{if((cljs.core.nth.call(null,found__9100,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9099.comp,null,0,this__9099.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9099.comp,t__9101.blacken(),(this__9099.cnt - 1),this__9099.meta,null));
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
var in__9115 = cljs.core.seq.call(null,keyvals);
var out__9116 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9115)
{{
var G__9117 = cljs.core.nnext.call(null,in__9115);
var G__9118 = cljs.core.assoc_BANG_.call(null,out__9116,cljs.core.first.call(null,in__9115),cljs.core.second.call(null,in__9115));
in__9115 = G__9117;
out__9116 = G__9118;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9116);
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
hash_map.cljs$lang$applyTo = (function (arglist__9119){
var keyvals = cljs.core.seq(arglist__9119);;
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
array_map.cljs$lang$applyTo = (function (arglist__9120){
var keyvals = cljs.core.seq(arglist__9120);;
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
var in__9123 = cljs.core.seq.call(null,keyvals);
var out__9124 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9123)
{{
var G__9125 = cljs.core.nnext.call(null,in__9123);
var G__9126 = cljs.core.assoc.call(null,out__9124,cljs.core.first.call(null,in__9123),cljs.core.second.call(null,in__9123));
in__9123 = G__9125;
out__9124 = G__9126;
continue;
}
} else
{return out__9124;
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
sorted_map.cljs$lang$applyTo = (function (arglist__9127){
var keyvals = cljs.core.seq(arglist__9127);;
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
var in__9130 = cljs.core.seq.call(null,keyvals);
var out__9131 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9130)
{{
var G__9132 = cljs.core.nnext.call(null,in__9130);
var G__9133 = cljs.core.assoc.call(null,out__9131,cljs.core.first.call(null,in__9130),cljs.core.second.call(null,in__9130));
in__9130 = G__9132;
out__9131 = G__9133;
continue;
}
} else
{return out__9131;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__9134){
var comparator = cljs.core.first(arglist__9134);
var keyvals = cljs.core.rest(arglist__9134);
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
{return cljs.core.reduce.call(null,(function (p1__9135_SHARP_,p2__9136_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____9138 = p1__9135_SHARP_;
if(cljs.core.truth_(or__3824__auto____9138))
{return or__3824__auto____9138;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9136_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__9139){
var maps = cljs.core.seq(arglist__9139);;
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
{var merge_entry__9147 = (function (m,e){
var k__9145 = cljs.core.first.call(null,e);
var v__9146 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9145))
{return cljs.core.assoc.call(null,m,k__9145,f.call(null,cljs.core._lookup.call(null,m,k__9145,null),v__9146));
} else
{return cljs.core.assoc.call(null,m,k__9145,v__9146);
}
});
var merge2__9149 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9147,(function (){var or__3824__auto____9148 = m1;
if(cljs.core.truth_(or__3824__auto____9148))
{return or__3824__auto____9148;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9149,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__9150){
var f = cljs.core.first(arglist__9150);
var maps = cljs.core.rest(arglist__9150);
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
var ret__9155 = cljs.core.ObjMap.EMPTY;
var keys__9156 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9156)
{var key__9157 = cljs.core.first.call(null,keys__9156);
var entry__9158 = cljs.core._lookup.call(null,map,key__9157,"\uFDD0'user/not-found");
{
var G__9159 = ((cljs.core.not_EQ_.call(null,entry__9158,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__9155,key__9157,entry__9158):ret__9155);
var G__9160 = cljs.core.next.call(null,keys__9156);
ret__9155 = G__9159;
keys__9156 = G__9160;
continue;
}
} else
{return ret__9155;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9164 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9164.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9165 = this;
var h__2260__auto____9166 = this__9165.__hash;
if(!((h__2260__auto____9166 == null)))
{return h__2260__auto____9166;
} else
{var h__2260__auto____9167 = cljs.core.hash_iset.call(null,coll);
this__9165.__hash = h__2260__auto____9167;
return h__2260__auto____9167;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9168 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9169 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9169.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9190 = null;
var G__9190__2 = (function (this_sym9170,k){
var this__9172 = this;
var this_sym9170__9173 = this;
var coll__9174 = this_sym9170__9173;
return coll__9174.cljs$core$ILookup$_lookup$arity$2(coll__9174,k);
});
var G__9190__3 = (function (this_sym9171,k,not_found){
var this__9172 = this;
var this_sym9171__9175 = this;
var coll__9176 = this_sym9171__9175;
return coll__9176.cljs$core$ILookup$_lookup$arity$3(coll__9176,k,not_found);
});
G__9190 = function(this_sym9171,k,not_found){
switch(arguments.length){
case 2:
return G__9190__2.call(this,this_sym9171,k);
case 3:
return G__9190__3.call(this,this_sym9171,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9190;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9162,args9163){
var this__9177 = this;
return this_sym9162.call.apply(this_sym9162,[this_sym9162].concat(args9163.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9178 = this;
return (new cljs.core.PersistentHashSet(this__9178.meta,cljs.core.assoc.call(null,this__9178.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9179 = this;
var this__9180 = this;
return cljs.core.pr_str.call(null,this__9180);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9181 = this;
return cljs.core.keys.call(null,this__9181.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9182 = this;
return (new cljs.core.PersistentHashSet(this__9182.meta,cljs.core.dissoc.call(null,this__9182.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9183 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9184 = this;
var and__3822__auto____9185 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9185)
{var and__3822__auto____9186 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9186)
{return cljs.core.every_QMARK_.call(null,(function (p1__9161_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9161_SHARP_);
}),other);
} else
{return and__3822__auto____9186;
}
} else
{return and__3822__auto____9185;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9187 = this;
return (new cljs.core.PersistentHashSet(meta,this__9187.hash_map,this__9187.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9188 = this;
return this__9188.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9189 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9189.meta);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9208 = null;
var G__9208__2 = (function (this_sym9194,k){
var this__9196 = this;
var this_sym9194__9197 = this;
var tcoll__9198 = this_sym9194__9197;
if((cljs.core._lookup.call(null,this__9196.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9208__3 = (function (this_sym9195,k,not_found){
var this__9196 = this;
var this_sym9195__9199 = this;
var tcoll__9200 = this_sym9195__9199;
if((cljs.core._lookup.call(null,this__9196.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9208 = function(this_sym9195,k,not_found){
switch(arguments.length){
case 2:
return G__9208__2.call(this,this_sym9195,k);
case 3:
return G__9208__3.call(this,this_sym9195,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9208;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9192,args9193){
var this__9201 = this;
return this_sym9192.call.apply(this_sym9192,[this_sym9192].concat(args9193.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9202 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9203 = this;
if((cljs.core._lookup.call(null,this__9203.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9204 = this;
return cljs.core.count.call(null,this__9204.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9205 = this;
this__9205.transient_map = cljs.core.dissoc_BANG_.call(null,this__9205.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9206 = this;
this__9206.transient_map = cljs.core.assoc_BANG_.call(null,this__9206.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9207 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9207.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9211 = this;
var h__2260__auto____9212 = this__9211.__hash;
if(!((h__2260__auto____9212 == null)))
{return h__2260__auto____9212;
} else
{var h__2260__auto____9213 = cljs.core.hash_iset.call(null,coll);
this__9211.__hash = h__2260__auto____9213;
return h__2260__auto____9213;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9214 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9215 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9215.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9241 = null;
var G__9241__2 = (function (this_sym9216,k){
var this__9218 = this;
var this_sym9216__9219 = this;
var coll__9220 = this_sym9216__9219;
return coll__9220.cljs$core$ILookup$_lookup$arity$2(coll__9220,k);
});
var G__9241__3 = (function (this_sym9217,k,not_found){
var this__9218 = this;
var this_sym9217__9221 = this;
var coll__9222 = this_sym9217__9221;
return coll__9222.cljs$core$ILookup$_lookup$arity$3(coll__9222,k,not_found);
});
G__9241 = function(this_sym9217,k,not_found){
switch(arguments.length){
case 2:
return G__9241__2.call(this,this_sym9217,k);
case 3:
return G__9241__3.call(this,this_sym9217,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9241;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9209,args9210){
var this__9223 = this;
return this_sym9209.call.apply(this_sym9209,[this_sym9209].concat(args9210.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9224 = this;
return (new cljs.core.PersistentTreeSet(this__9224.meta,cljs.core.assoc.call(null,this__9224.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9225 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9225.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9226 = this;
var this__9227 = this;
return cljs.core.pr_str.call(null,this__9227);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9228 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9228.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9229 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9229.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9230 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9231 = this;
return cljs.core._comparator.call(null,this__9231.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9232 = this;
return cljs.core.keys.call(null,this__9232.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9233 = this;
return (new cljs.core.PersistentTreeSet(this__9233.meta,cljs.core.dissoc.call(null,this__9233.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9234 = this;
return cljs.core.count.call(null,this__9234.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9235 = this;
var and__3822__auto____9236 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9236)
{var and__3822__auto____9237 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9237)
{return cljs.core.every_QMARK_.call(null,(function (p1__9191_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9191_SHARP_);
}),other);
} else
{return and__3822__auto____9237;
}
} else
{return and__3822__auto____9236;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9238 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9238.tree_map,this__9238.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9239 = this;
return this__9239.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9240 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9240.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in__9244 = cljs.core.seq.call(null,coll);
var out__9245 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9244))
{{
var G__9246 = cljs.core.next.call(null,in__9244);
var G__9247 = cljs.core.conj_BANG_.call(null,out__9245,cljs.core.first.call(null,in__9244));
in__9244 = G__9246;
out__9245 = G__9247;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9245);
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
sorted_set.cljs$lang$applyTo = (function (arglist__9248){
var keys = cljs.core.seq(arglist__9248);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__9250){
var comparator = cljs.core.first(arglist__9250);
var keys = cljs.core.rest(arglist__9250);
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
{var n__9256 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9257 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9257))
{var e__9258 = temp__3971__auto____9257;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9258));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9256,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9249_SHARP_){
var temp__3971__auto____9259 = cljs.core.find.call(null,smap,p1__9249_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9259))
{var e__9260 = temp__3971__auto____9259;
return cljs.core.second.call(null,e__9260);
} else
{return p1__9249_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9290 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9283,seen){
while(true){
var vec__9284__9285 = p__9283;
var f__9286 = cljs.core.nth.call(null,vec__9284__9285,0,null);
var xs__9287 = vec__9284__9285;
var temp__3974__auto____9288 = cljs.core.seq.call(null,xs__9287);
if(temp__3974__auto____9288)
{var s__9289 = temp__3974__auto____9288;
if(cljs.core.contains_QMARK_.call(null,seen,f__9286))
{{
var G__9291 = cljs.core.rest.call(null,s__9289);
var G__9292 = seen;
p__9283 = G__9291;
seen = G__9292;
continue;
}
} else
{return cljs.core.cons.call(null,f__9286,step.call(null,cljs.core.rest.call(null,s__9289),cljs.core.conj.call(null,seen,f__9286)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9290.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__9295 = cljs.core.PersistentVector.EMPTY;
var s__9296 = s;
while(true){
if(cljs.core.next.call(null,s__9296))
{{
var G__9297 = cljs.core.conj.call(null,ret__9295,cljs.core.first.call(null,s__9296));
var G__9298 = cljs.core.next.call(null,s__9296);
ret__9295 = G__9297;
s__9296 = G__9298;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9295);
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
{if((function (){var or__3824__auto____9301 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9301)
{return or__3824__auto____9301;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9302 = x.lastIndexOf("/");
if((i__9302 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9302 + 1));
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
if((function (){var or__3824__auto____9305 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9305)
{return or__3824__auto____9305;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9306 = x.lastIndexOf("/");
if((i__9306 > -1))
{return cljs.core.subs.call(null,x,2,i__9306);
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
var map__9313 = cljs.core.ObjMap.EMPTY;
var ks__9314 = cljs.core.seq.call(null,keys);
var vs__9315 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9316 = ks__9314;
if(and__3822__auto____9316)
{return vs__9315;
} else
{return and__3822__auto____9316;
}
})())
{{
var G__9317 = cljs.core.assoc.call(null,map__9313,cljs.core.first.call(null,ks__9314),cljs.core.first.call(null,vs__9315));
var G__9318 = cljs.core.next.call(null,ks__9314);
var G__9319 = cljs.core.next.call(null,vs__9315);
map__9313 = G__9317;
ks__9314 = G__9318;
vs__9315 = G__9319;
continue;
}
} else
{return map__9313;
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
var G__9322__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9307_SHARP_,p2__9308_SHARP_){
return max_key.call(null,k,p1__9307_SHARP_,p2__9308_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9322 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9322__delegate.call(this, k, x, y, more);
};
G__9322.cljs$lang$maxFixedArity = 3;
G__9322.cljs$lang$applyTo = (function (arglist__9323){
var k = cljs.core.first(arglist__9323);
var x = cljs.core.first(cljs.core.next(arglist__9323));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9323)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9323)));
return G__9322__delegate(k, x, y, more);
});
G__9322.cljs$lang$arity$variadic = G__9322__delegate;
return G__9322;
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
var G__9324__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9320_SHARP_,p2__9321_SHARP_){
return min_key.call(null,k,p1__9320_SHARP_,p2__9321_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9324 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9324__delegate.call(this, k, x, y, more);
};
G__9324.cljs$lang$maxFixedArity = 3;
G__9324.cljs$lang$applyTo = (function (arglist__9325){
var k = cljs.core.first(arglist__9325);
var x = cljs.core.first(cljs.core.next(arglist__9325));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9325)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9325)));
return G__9324__delegate(k, x, y, more);
});
G__9324.cljs$lang$arity$variadic = G__9324__delegate;
return G__9324;
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
var temp__3974__auto____9328 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9328)
{var s__9329 = temp__3974__auto____9328;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9329),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9329)));
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
var temp__3974__auto____9332 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9332)
{var s__9333 = temp__3974__auto____9332;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9333))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9333),take_while.call(null,pred,cljs.core.rest.call(null,s__9333)));
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
var comp__9335 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9335.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__9347 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9348 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9348))
{var vec__9349__9350 = temp__3974__auto____9348;
var e__9351 = cljs.core.nth.call(null,vec__9349__9350,0,null);
var s__9352 = vec__9349__9350;
if(cljs.core.truth_(include__9347.call(null,e__9351)))
{return s__9352;
} else
{return cljs.core.next.call(null,s__9352);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9347,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9353 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9353))
{var vec__9354__9355 = temp__3974__auto____9353;
var e__9356 = cljs.core.nth.call(null,vec__9354__9355,0,null);
var s__9357 = vec__9354__9355;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9356))?s__9357:cljs.core.next.call(null,s__9357)));
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
var include__9369 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9370 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9370))
{var vec__9371__9372 = temp__3974__auto____9370;
var e__9373 = cljs.core.nth.call(null,vec__9371__9372,0,null);
var s__9374 = vec__9371__9372;
if(cljs.core.truth_(include__9369.call(null,e__9373)))
{return s__9374;
} else
{return cljs.core.next.call(null,s__9374);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9369,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9375 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9375))
{var vec__9376__9377 = temp__3974__auto____9375;
var e__9378 = cljs.core.nth.call(null,vec__9376__9377,0,null);
var s__9379 = vec__9376__9377;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9378))?s__9379:cljs.core.next.call(null,s__9379)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9380 = this;
var h__2260__auto____9381 = this__9380.__hash;
if(!((h__2260__auto____9381 == null)))
{return h__2260__auto____9381;
} else
{var h__2260__auto____9382 = cljs.core.hash_coll.call(null,rng);
this__9380.__hash = h__2260__auto____9382;
return h__2260__auto____9382;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9383 = this;
if((this__9383.step > 0))
{if(((this__9383.start + this__9383.step) < this__9383.end))
{return (new cljs.core.Range(this__9383.meta,(this__9383.start + this__9383.step),this__9383.end,this__9383.step,null));
} else
{return null;
}
} else
{if(((this__9383.start + this__9383.step) > this__9383.end))
{return (new cljs.core.Range(this__9383.meta,(this__9383.start + this__9383.step),this__9383.end,this__9383.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9384 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9385 = this;
var this__9386 = this;
return cljs.core.pr_str.call(null,this__9386);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9387 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9388 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9389 = this;
if((this__9389.step > 0))
{if((this__9389.start < this__9389.end))
{return rng;
} else
{return null;
}
} else
{if((this__9389.start > this__9389.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9390 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9390.end - this__9390.start) / this__9390.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9391 = this;
return this__9391.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9392 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9392.meta,(this__9392.start + this__9392.step),this__9392.end,this__9392.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9393 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9394 = this;
return (new cljs.core.Range(meta,this__9394.start,this__9394.end,this__9394.step,this__9394.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9395 = this;
return this__9395.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9396 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9396.start + (n * this__9396.step));
} else
{if((function (){var and__3822__auto____9397 = (this__9396.start > this__9396.end);
if(and__3822__auto____9397)
{return (this__9396.step === 0);
} else
{return and__3822__auto____9397;
}
})())
{return this__9396.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9398 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9398.start + (n * this__9398.step));
} else
{if((function (){var and__3822__auto____9399 = (this__9398.start > this__9398.end);
if(and__3822__auto____9399)
{return (this__9398.step === 0);
} else
{return and__3822__auto____9399;
}
})())
{return this__9398.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9400 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9400.meta);
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
var temp__3974__auto____9403 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9403)
{var s__9404 = temp__3974__auto____9403;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9404),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9404)));
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
var temp__3974__auto____9411 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9411)
{var s__9412 = temp__3974__auto____9411;
var fst__9413 = cljs.core.first.call(null,s__9412);
var fv__9414 = f.call(null,fst__9413);
var run__9415 = cljs.core.cons.call(null,fst__9413,cljs.core.take_while.call(null,(function (p1__9405_SHARP_){
return cljs.core._EQ_.call(null,fv__9414,f.call(null,p1__9405_SHARP_));
}),cljs.core.next.call(null,s__9412)));
return cljs.core.cons.call(null,run__9415,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9415),s__9412))));
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
var temp__3971__auto____9430 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9430)
{var s__9431 = temp__3971__auto____9430;
return reductions.call(null,f,cljs.core.first.call(null,s__9431),cljs.core.rest.call(null,s__9431));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9432 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9432)
{var s__9433 = temp__3974__auto____9432;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9433)),cljs.core.rest.call(null,s__9433));
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
var G__9436 = null;
var G__9436__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9436__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9436__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9436__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9436__4 = (function() { 
var G__9437__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9437 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9437__delegate.call(this, x, y, z, args);
};
G__9437.cljs$lang$maxFixedArity = 3;
G__9437.cljs$lang$applyTo = (function (arglist__9438){
var x = cljs.core.first(arglist__9438);
var y = cljs.core.first(cljs.core.next(arglist__9438));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9438)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9438)));
return G__9437__delegate(x, y, z, args);
});
G__9437.cljs$lang$arity$variadic = G__9437__delegate;
return G__9437;
})()
;
G__9436 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9436__0.call(this);
case 1:
return G__9436__1.call(this,x);
case 2:
return G__9436__2.call(this,x,y);
case 3:
return G__9436__3.call(this,x,y,z);
default:
return G__9436__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9436.cljs$lang$maxFixedArity = 3;
G__9436.cljs$lang$applyTo = G__9436__4.cljs$lang$applyTo;
return G__9436;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9439 = null;
var G__9439__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9439__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9439__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9439__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9439__4 = (function() { 
var G__9440__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9440 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9440__delegate.call(this, x, y, z, args);
};
G__9440.cljs$lang$maxFixedArity = 3;
G__9440.cljs$lang$applyTo = (function (arglist__9441){
var x = cljs.core.first(arglist__9441);
var y = cljs.core.first(cljs.core.next(arglist__9441));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9441)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9441)));
return G__9440__delegate(x, y, z, args);
});
G__9440.cljs$lang$arity$variadic = G__9440__delegate;
return G__9440;
})()
;
G__9439 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9439__0.call(this);
case 1:
return G__9439__1.call(this,x);
case 2:
return G__9439__2.call(this,x,y);
case 3:
return G__9439__3.call(this,x,y,z);
default:
return G__9439__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9439.cljs$lang$maxFixedArity = 3;
G__9439.cljs$lang$applyTo = G__9439__4.cljs$lang$applyTo;
return G__9439;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9442 = null;
var G__9442__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9442__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9442__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9442__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9442__4 = (function() { 
var G__9443__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9443 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9443__delegate.call(this, x, y, z, args);
};
G__9443.cljs$lang$maxFixedArity = 3;
G__9443.cljs$lang$applyTo = (function (arglist__9444){
var x = cljs.core.first(arglist__9444);
var y = cljs.core.first(cljs.core.next(arglist__9444));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9444)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9444)));
return G__9443__delegate(x, y, z, args);
});
G__9443.cljs$lang$arity$variadic = G__9443__delegate;
return G__9443;
})()
;
G__9442 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9442__0.call(this);
case 1:
return G__9442__1.call(this,x);
case 2:
return G__9442__2.call(this,x,y);
case 3:
return G__9442__3.call(this,x,y,z);
default:
return G__9442__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9442.cljs$lang$maxFixedArity = 3;
G__9442.cljs$lang$applyTo = G__9442__4.cljs$lang$applyTo;
return G__9442;
})()
});
var juxt__4 = (function() { 
var G__9445__delegate = function (f,g,h,fs){
var fs__9435 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9446 = null;
var G__9446__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9416_SHARP_,p2__9417_SHARP_){
return cljs.core.conj.call(null,p1__9416_SHARP_,p2__9417_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9435);
});
var G__9446__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9418_SHARP_,p2__9419_SHARP_){
return cljs.core.conj.call(null,p1__9418_SHARP_,p2__9419_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9435);
});
var G__9446__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9420_SHARP_,p2__9421_SHARP_){
return cljs.core.conj.call(null,p1__9420_SHARP_,p2__9421_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9435);
});
var G__9446__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9422_SHARP_,p2__9423_SHARP_){
return cljs.core.conj.call(null,p1__9422_SHARP_,p2__9423_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9435);
});
var G__9446__4 = (function() { 
var G__9447__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9424_SHARP_,p2__9425_SHARP_){
return cljs.core.conj.call(null,p1__9424_SHARP_,cljs.core.apply.call(null,p2__9425_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9435);
};
var G__9447 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9447__delegate.call(this, x, y, z, args);
};
G__9447.cljs$lang$maxFixedArity = 3;
G__9447.cljs$lang$applyTo = (function (arglist__9448){
var x = cljs.core.first(arglist__9448);
var y = cljs.core.first(cljs.core.next(arglist__9448));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9448)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9448)));
return G__9447__delegate(x, y, z, args);
});
G__9447.cljs$lang$arity$variadic = G__9447__delegate;
return G__9447;
})()
;
G__9446 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9446__0.call(this);
case 1:
return G__9446__1.call(this,x);
case 2:
return G__9446__2.call(this,x,y);
case 3:
return G__9446__3.call(this,x,y,z);
default:
return G__9446__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9446.cljs$lang$maxFixedArity = 3;
G__9446.cljs$lang$applyTo = G__9446__4.cljs$lang$applyTo;
return G__9446;
})()
};
var G__9445 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9445__delegate.call(this, f, g, h, fs);
};
G__9445.cljs$lang$maxFixedArity = 3;
G__9445.cljs$lang$applyTo = (function (arglist__9449){
var f = cljs.core.first(arglist__9449);
var g = cljs.core.first(cljs.core.next(arglist__9449));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9449)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9449)));
return G__9445__delegate(f, g, h, fs);
});
G__9445.cljs$lang$arity$variadic = G__9445__delegate;
return G__9445;
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
var G__9452 = cljs.core.next.call(null,coll);
coll = G__9452;
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
if(cljs.core.truth_((function (){var and__3822__auto____9451 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9451)
{return (n > 0);
} else
{return and__3822__auto____9451;
}
})()))
{{
var G__9453 = (n - 1);
var G__9454 = cljs.core.next.call(null,coll);
n = G__9453;
coll = G__9454;
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
var matches__9456 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9456),s))
{if((cljs.core.count.call(null,matches__9456) === 1))
{return cljs.core.first.call(null,matches__9456);
} else
{return cljs.core.vec.call(null,matches__9456);
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
var matches__9458 = re.exec(s);
if((matches__9458 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9458) === 1))
{return cljs.core.first.call(null,matches__9458);
} else
{return cljs.core.vec.call(null,matches__9458);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9463 = cljs.core.re_find.call(null,re,s);
var match_idx__9464 = s.search(re);
var match_str__9465 = ((cljs.core.coll_QMARK_.call(null,match_data__9463))?cljs.core.first.call(null,match_data__9463):match_data__9463);
var post_match__9466 = cljs.core.subs.call(null,s,(match_idx__9464 + cljs.core.count.call(null,match_str__9465)));
if(cljs.core.truth_(match_data__9463))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9463,re_seq.call(null,re,post_match__9466));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9473__9474 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9475 = cljs.core.nth.call(null,vec__9473__9474,0,null);
var flags__9476 = cljs.core.nth.call(null,vec__9473__9474,1,null);
var pattern__9477 = cljs.core.nth.call(null,vec__9473__9474,2,null);
return (new RegExp(pattern__9477,flags__9476));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9467_SHARP_){
return print_one.call(null,p1__9467_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9487 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9487))
{var and__3822__auto____9491 = (function (){var G__9488__9489 = obj;
if(G__9488__9489)
{if((function (){var or__3824__auto____9490 = (G__9488__9489.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9490)
{return or__3824__auto____9490;
} else
{return G__9488__9489.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9488__9489.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9488__9489);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9488__9489);
}
})();
if(cljs.core.truth_(and__3822__auto____9491))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9491;
}
} else
{return and__3822__auto____9487;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____9492 = !((obj == null));
if(and__3822__auto____9492)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9492;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9493__9494 = obj;
if(G__9493__9494)
{if((function (){var or__3824__auto____9495 = (G__9493__9494.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____9495)
{return or__3824__auto____9495;
} else
{return G__9493__9494.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9493__9494.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9493__9494);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9493__9494);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__9510 = cljs.core.first.call(null,objs);
var sb__9511 = (new goog.string.StringBuffer());
var G__9512__9513 = cljs.core.seq.call(null,objs);
if(G__9512__9513)
{var obj__9514 = cljs.core.first.call(null,G__9512__9513);
var G__9512__9515 = G__9512__9513;
while(true){
if((obj__9514 === first_obj__9510))
{} else
{sb__9511.append(" ");
}
var G__9516__9517 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9514,opts));
if(G__9516__9517)
{var string__9518 = cljs.core.first.call(null,G__9516__9517);
var G__9516__9519 = G__9516__9517;
while(true){
sb__9511.append(string__9518);
var temp__3974__auto____9520 = cljs.core.next.call(null,G__9516__9519);
if(temp__3974__auto____9520)
{var G__9516__9521 = temp__3974__auto____9520;
{
var G__9524 = cljs.core.first.call(null,G__9516__9521);
var G__9525 = G__9516__9521;
string__9518 = G__9524;
G__9516__9519 = G__9525;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9522 = cljs.core.next.call(null,G__9512__9515);
if(temp__3974__auto____9522)
{var G__9512__9523 = temp__3974__auto____9522;
{
var G__9526 = cljs.core.first.call(null,G__9512__9523);
var G__9527 = G__9512__9523;
obj__9514 = G__9526;
G__9512__9515 = G__9527;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9511;
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
var sb__9529 = cljs.core.pr_sb.call(null,objs,opts);
sb__9529.append("\n");
return [cljs.core.str(sb__9529)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__9543 = cljs.core.first.call(null,objs);
var G__9544__9545 = cljs.core.seq.call(null,objs);
if(G__9544__9545)
{var obj__9546 = cljs.core.first.call(null,G__9544__9545);
var G__9544__9547 = G__9544__9545;
while(true){
if((obj__9546 === first_obj__9543))
{} else
{cljs.core.string_print.call(null," ");
}
var G__9548__9549 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9546,opts));
if(G__9548__9549)
{var string__9550 = cljs.core.first.call(null,G__9548__9549);
var G__9548__9551 = G__9548__9549;
while(true){
cljs.core.string_print.call(null,string__9550);
var temp__3974__auto____9552 = cljs.core.next.call(null,G__9548__9551);
if(temp__3974__auto____9552)
{var G__9548__9553 = temp__3974__auto____9552;
{
var G__9556 = cljs.core.first.call(null,G__9548__9553);
var G__9557 = G__9548__9553;
string__9550 = G__9556;
G__9548__9551 = G__9557;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9554 = cljs.core.next.call(null,G__9544__9547);
if(temp__3974__auto____9554)
{var G__9544__9555 = temp__3974__auto____9554;
{
var G__9558 = cljs.core.first.call(null,G__9544__9555);
var G__9559 = G__9544__9555;
obj__9546 = G__9558;
G__9544__9547 = G__9559;
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
pr_str.cljs$lang$applyTo = (function (arglist__9560){
var objs = cljs.core.seq(arglist__9560);;
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
prn_str.cljs$lang$applyTo = (function (arglist__9561){
var objs = cljs.core.seq(arglist__9561);;
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
pr.cljs$lang$applyTo = (function (arglist__9562){
var objs = cljs.core.seq(arglist__9562);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__9563){
var objs = cljs.core.seq(arglist__9563);;
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
print_str.cljs$lang$applyTo = (function (arglist__9564){
var objs = cljs.core.seq(arglist__9564);;
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
println.cljs$lang$applyTo = (function (arglist__9565){
var objs = cljs.core.seq(arglist__9565);;
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
println_str.cljs$lang$applyTo = (function (arglist__9566){
var objs = cljs.core.seq(arglist__9566);;
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
prn.cljs$lang$applyTo = (function (arglist__9567){
var objs = cljs.core.seq(arglist__9567);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9568 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9568,"{",", ","}",opts,coll);
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
var pr_pair__9569 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9569,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9570 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9570,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____9571 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9571))
{var nspc__9572 = temp__3974__auto____9571;
return [cljs.core.str(nspc__9572),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____9573 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9573))
{var nspc__9574 = temp__3974__auto____9573;
return [cljs.core.str(nspc__9574),cljs.core.str("/")].join('');
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
var pr_pair__9575 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9575,"{",", ","}",opts,coll);
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
var normalize__9577 = (function (n,len){
var ns__9576 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__9576) < len))
{{
var G__9579 = [cljs.core.str("0"),cljs.core.str(ns__9576)].join('');
ns__9576 = G__9579;
continue;
}
} else
{return ns__9576;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__9577.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__9577.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__9577.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__9577.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__9577.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__9577.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__9578 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9578,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9580 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__9581 = this;
var G__9582__9583 = cljs.core.seq.call(null,this__9581.watches);
if(G__9582__9583)
{var G__9585__9587 = cljs.core.first.call(null,G__9582__9583);
var vec__9586__9588 = G__9585__9587;
var key__9589 = cljs.core.nth.call(null,vec__9586__9588,0,null);
var f__9590 = cljs.core.nth.call(null,vec__9586__9588,1,null);
var G__9582__9591 = G__9582__9583;
var G__9585__9592 = G__9585__9587;
var G__9582__9593 = G__9582__9591;
while(true){
var vec__9594__9595 = G__9585__9592;
var key__9596 = cljs.core.nth.call(null,vec__9594__9595,0,null);
var f__9597 = cljs.core.nth.call(null,vec__9594__9595,1,null);
var G__9582__9598 = G__9582__9593;
f__9597.call(null,key__9596,this$,oldval,newval);
var temp__3974__auto____9599 = cljs.core.next.call(null,G__9582__9598);
if(temp__3974__auto____9599)
{var G__9582__9600 = temp__3974__auto____9599;
{
var G__9607 = cljs.core.first.call(null,G__9582__9600);
var G__9608 = G__9582__9600;
G__9585__9592 = G__9607;
G__9582__9593 = G__9608;
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
var this__9601 = this;
return this$.watches = cljs.core.assoc.call(null,this__9601.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__9602 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9602.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__9603 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__9603.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__9604 = this;
return this__9604.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9605 = this;
return this__9605.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9606 = this;
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
var G__9620__delegate = function (x,p__9609){
var map__9615__9616 = p__9609;
var map__9615__9617 = ((cljs.core.seq_QMARK_.call(null,map__9615__9616))?cljs.core.apply.call(null,cljs.core.hash_map,map__9615__9616):map__9615__9616);
var validator__9618 = cljs.core._lookup.call(null,map__9615__9617,"\uFDD0'validator",null);
var meta__9619 = cljs.core._lookup.call(null,map__9615__9617,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__9619,validator__9618,null));
};
var G__9620 = function (x,var_args){
var p__9609 = null;
if (goog.isDef(var_args)) {
  p__9609 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9620__delegate.call(this, x, p__9609);
};
G__9620.cljs$lang$maxFixedArity = 1;
G__9620.cljs$lang$applyTo = (function (arglist__9621){
var x = cljs.core.first(arglist__9621);
var p__9609 = cljs.core.rest(arglist__9621);
return G__9620__delegate(x, p__9609);
});
G__9620.cljs$lang$arity$variadic = G__9620__delegate;
return G__9620;
})()
;
atom = function(x,var_args){
var p__9609 = var_args;
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
var temp__3974__auto____9625 = a.validator;
if(cljs.core.truth_(temp__3974__auto____9625))
{var validate__9626 = temp__3974__auto____9625;
if(cljs.core.truth_(validate__9626.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6394))))].join('')));
}
} else
{}
var old_value__9627 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9627,new_value);
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
var G__9628__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9628 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9628__delegate.call(this, a, f, x, y, z, more);
};
G__9628.cljs$lang$maxFixedArity = 5;
G__9628.cljs$lang$applyTo = (function (arglist__9629){
var a = cljs.core.first(arglist__9629);
var f = cljs.core.first(cljs.core.next(arglist__9629));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9629)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9629))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9629)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9629)))));
return G__9628__delegate(a, f, x, y, z, more);
});
G__9628.cljs$lang$arity$variadic = G__9628__delegate;
return G__9628;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9630){
var iref = cljs.core.first(arglist__9630);
var f = cljs.core.first(cljs.core.next(arglist__9630));
var args = cljs.core.rest(cljs.core.next(arglist__9630));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__9631 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__9631.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9632 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__9632.state,(function (p__9633){
var curr_state__9634 = p__9633;
var curr_state__9635 = ((cljs.core.seq_QMARK_.call(null,curr_state__9634))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__9634):curr_state__9634);
var done__9636 = cljs.core._lookup.call(null,curr_state__9635,"\uFDD0'done",null);
if(cljs.core.truth_(done__9636))
{return curr_state__9635;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9632.f.call(null)});
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
var map__9657__9658 = options;
var map__9657__9659 = ((cljs.core.seq_QMARK_.call(null,map__9657__9658))?cljs.core.apply.call(null,cljs.core.hash_map,map__9657__9658):map__9657__9658);
var keywordize_keys__9660 = cljs.core._lookup.call(null,map__9657__9659,"\uFDD0'keywordize-keys",null);
var keyfn__9661 = (cljs.core.truth_(keywordize_keys__9660)?cljs.core.keyword:cljs.core.str);
var f__9676 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2534__auto____9675 = (function iter__9669(s__9670){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9670__9673 = s__9670;
while(true){
if(cljs.core.seq.call(null,s__9670__9673))
{var k__9674 = cljs.core.first.call(null,s__9670__9673);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9661.call(null,k__9674),thisfn.call(null,(x[k__9674]))], true),iter__9669.call(null,cljs.core.rest.call(null,s__9670__9673)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2534__auto____9675.call(null,cljs.core.js_keys.call(null,x));
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
return f__9676.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9677){
var x = cljs.core.first(arglist__9677);
var options = cljs.core.rest(arglist__9677);
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
var mem__9682 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__9686__delegate = function (args){
var temp__3971__auto____9683 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__9682),args,null);
if(cljs.core.truth_(temp__3971__auto____9683))
{var v__9684 = temp__3971__auto____9683;
return v__9684;
} else
{var ret__9685 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__9682,cljs.core.assoc,args,ret__9685);
return ret__9685;
}
};
var G__9686 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9686__delegate.call(this, args);
};
G__9686.cljs$lang$maxFixedArity = 0;
G__9686.cljs$lang$applyTo = (function (arglist__9687){
var args = cljs.core.seq(arglist__9687);;
return G__9686__delegate(args);
});
G__9686.cljs$lang$arity$variadic = G__9686__delegate;
return G__9686;
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
var ret__9689 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__9689))
{{
var G__9690 = ret__9689;
f = G__9690;
continue;
}
} else
{return ret__9689;
}
break;
}
});
var trampoline__2 = (function() { 
var G__9691__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9691 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9691__delegate.call(this, f, args);
};
G__9691.cljs$lang$maxFixedArity = 1;
G__9691.cljs$lang$applyTo = (function (arglist__9692){
var f = cljs.core.first(arglist__9692);
var args = cljs.core.rest(arglist__9692);
return G__9691__delegate(f, args);
});
G__9691.cljs$lang$arity$variadic = G__9691__delegate;
return G__9691;
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
var k__9694 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__9694,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__9694,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____9703 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____9703)
{return or__3824__auto____9703;
} else
{var or__3824__auto____9704 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____9704)
{return or__3824__auto____9704;
} else
{var and__3822__auto____9705 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____9705)
{var and__3822__auto____9706 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____9706)
{var and__3822__auto____9707 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____9707)
{var ret__9708 = true;
var i__9709 = 0;
while(true){
if((function (){var or__3824__auto____9710 = cljs.core.not.call(null,ret__9708);
if(or__3824__auto____9710)
{return or__3824__auto____9710;
} else
{return (i__9709 === cljs.core.count.call(null,parent));
}
})())
{return ret__9708;
} else
{{
var G__9711 = isa_QMARK_.call(null,h,child.call(null,i__9709),parent.call(null,i__9709));
var G__9712 = (i__9709 + 1);
ret__9708 = G__9711;
i__9709 = G__9712;
continue;
}
}
break;
}
} else
{return and__3822__auto____9707;
}
} else
{return and__3822__auto____9706;
}
} else
{return and__3822__auto____9705;
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
var tp__9721 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__9722 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__9723 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__9724 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____9725 = ((cljs.core.contains_QMARK_.call(null,tp__9721.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__9723.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__9723.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__9721,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__9724.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__9722,parent,ta__9723),"\uFDD0'descendants":tf__9724.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__9723,tag,td__9722)});
})());
if(cljs.core.truth_(or__3824__auto____9725))
{return or__3824__auto____9725;
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
var parentMap__9730 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__9731 = (cljs.core.truth_(parentMap__9730.call(null,tag))?cljs.core.disj.call(null,parentMap__9730.call(null,tag),parent):cljs.core.set([]));
var newParents__9732 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__9731))?cljs.core.assoc.call(null,parentMap__9730,tag,childsParents__9731):cljs.core.dissoc.call(null,parentMap__9730,tag));
var deriv_seq__9733 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9713_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9713_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9713_SHARP_),cljs.core.second.call(null,p1__9713_SHARP_)));
}),cljs.core.seq.call(null,newParents__9732)));
if(cljs.core.contains_QMARK_.call(null,parentMap__9730.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__9714_SHARP_,p2__9715_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9714_SHARP_,p2__9715_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__9733));
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
var xprefs__9741 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____9743 = (cljs.core.truth_((function (){var and__3822__auto____9742 = xprefs__9741;
if(cljs.core.truth_(and__3822__auto____9742))
{return xprefs__9741.call(null,y);
} else
{return and__3822__auto____9742;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____9743))
{return or__3824__auto____9743;
} else
{var or__3824__auto____9745 = (function (){var ps__9744 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__9744) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__9744),prefer_table)))
{} else
{}
{
var G__9748 = cljs.core.rest.call(null,ps__9744);
ps__9744 = G__9748;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9745))
{return or__3824__auto____9745;
} else
{var or__3824__auto____9747 = (function (){var ps__9746 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__9746) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__9746),y,prefer_table)))
{} else
{}
{
var G__9749 = cljs.core.rest.call(null,ps__9746);
ps__9746 = G__9749;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9747))
{return or__3824__auto____9747;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____9751 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____9751))
{return or__3824__auto____9751;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9769 = cljs.core.reduce.call(null,(function (be,p__9761){
var vec__9762__9763 = p__9761;
var k__9764 = cljs.core.nth.call(null,vec__9762__9763,0,null);
var ___9765 = cljs.core.nth.call(null,vec__9762__9763,1,null);
var e__9766 = vec__9762__9763;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__9764))
{var be2__9768 = (cljs.core.truth_((function (){var or__3824__auto____9767 = (be == null);
if(or__3824__auto____9767)
{return or__3824__auto____9767;
} else
{return cljs.core.dominates.call(null,k__9764,cljs.core.first.call(null,be),prefer_table);
}
})())?e__9766:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__9768),k__9764,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__9764),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__9768)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__9768;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__9769))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__9769));
return cljs.core.second.call(null,best_entry__9769);
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
if((function (){var and__3822__auto____9773 = mf;
if(and__3822__auto____9773)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____9773;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____9774 = (cljs.core._reset[goog.typeOf(mf)]);
if(or__3824__auto____9774)
{return or__3824__auto____9774;
} else
{var or__3824__auto____9775 = (cljs.core._reset["_"]);
if(or__3824__auto____9775)
{return or__3824__auto____9775;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____9779 = mf;
if(and__3822__auto____9779)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____9779;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____9780 = (cljs.core._add_method[goog.typeOf(mf)]);
if(or__3824__auto____9780)
{return or__3824__auto____9780;
} else
{var or__3824__auto____9781 = (cljs.core._add_method["_"]);
if(or__3824__auto____9781)
{return or__3824__auto____9781;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____9785 = mf;
if(and__3822__auto____9785)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____9785;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____9786 = (cljs.core._remove_method[goog.typeOf(mf)]);
if(or__3824__auto____9786)
{return or__3824__auto____9786;
} else
{var or__3824__auto____9787 = (cljs.core._remove_method["_"]);
if(or__3824__auto____9787)
{return or__3824__auto____9787;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____9791 = mf;
if(and__3822__auto____9791)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____9791;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____9792 = (cljs.core._prefer_method[goog.typeOf(mf)]);
if(or__3824__auto____9792)
{return or__3824__auto____9792;
} else
{var or__3824__auto____9793 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____9793)
{return or__3824__auto____9793;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____9797 = mf;
if(and__3822__auto____9797)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____9797;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____9798 = (cljs.core._get_method[goog.typeOf(mf)]);
if(or__3824__auto____9798)
{return or__3824__auto____9798;
} else
{var or__3824__auto____9799 = (cljs.core._get_method["_"]);
if(or__3824__auto____9799)
{return or__3824__auto____9799;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____9803 = mf;
if(and__3822__auto____9803)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____9803;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____9804 = (cljs.core._methods[goog.typeOf(mf)]);
if(or__3824__auto____9804)
{return or__3824__auto____9804;
} else
{var or__3824__auto____9805 = (cljs.core._methods["_"]);
if(or__3824__auto____9805)
{return or__3824__auto____9805;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____9809 = mf;
if(and__3822__auto____9809)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____9809;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____9810 = (cljs.core._prefers[goog.typeOf(mf)]);
if(or__3824__auto____9810)
{return or__3824__auto____9810;
} else
{var or__3824__auto____9811 = (cljs.core._prefers["_"]);
if(or__3824__auto____9811)
{return or__3824__auto____9811;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____9815 = mf;
if(and__3822__auto____9815)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____9815;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____9816 = (cljs.core._dispatch[goog.typeOf(mf)]);
if(or__3824__auto____9816)
{return or__3824__auto____9816;
} else
{var or__3824__auto____9817 = (cljs.core._dispatch["_"]);
if(or__3824__auto____9817)
{return or__3824__auto____9817;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__9820 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__9821 = cljs.core._get_method.call(null,mf,dispatch_val__9820);
if(cljs.core.truth_(target_fn__9821))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__9820)].join('')));
}
return cljs.core.apply.call(null,target_fn__9821,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9822 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__9823 = this;
cljs.core.swap_BANG_.call(null,this__9823.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9823.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9823.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9823.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__9824 = this;
cljs.core.swap_BANG_.call(null,this__9824.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__9824.method_cache,this__9824.method_table,this__9824.cached_hierarchy,this__9824.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__9825 = this;
cljs.core.swap_BANG_.call(null,this__9825.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__9825.method_cache,this__9825.method_table,this__9825.cached_hierarchy,this__9825.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__9826 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__9826.cached_hierarchy),cljs.core.deref.call(null,this__9826.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__9826.method_cache,this__9826.method_table,this__9826.cached_hierarchy,this__9826.hierarchy);
}
var temp__3971__auto____9827 = cljs.core.deref.call(null,this__9826.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____9827))
{var target_fn__9828 = temp__3971__auto____9827;
return target_fn__9828;
} else
{var temp__3971__auto____9829 = cljs.core.find_and_cache_best_method.call(null,this__9826.name,dispatch_val,this__9826.hierarchy,this__9826.method_table,this__9826.prefer_table,this__9826.method_cache,this__9826.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____9829))
{var target_fn__9830 = temp__3971__auto____9829;
return target_fn__9830;
} else
{return cljs.core.deref.call(null,this__9826.method_table).call(null,this__9826.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__9831 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__9831.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__9831.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__9831.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__9831.method_cache,this__9831.method_table,this__9831.cached_hierarchy,this__9831.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__9832 = this;
return cljs.core.deref.call(null,this__9832.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__9833 = this;
return cljs.core.deref.call(null,this__9833.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__9834 = this;
return cljs.core.do_dispatch.call(null,mf,this__9834.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__9836__delegate = function (_,args){
var self__9835 = this;
return cljs.core._dispatch.call(null,self__9835,args);
};
var G__9836 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9836__delegate.call(this, _, args);
};
G__9836.cljs$lang$maxFixedArity = 1;
G__9836.cljs$lang$applyTo = (function (arglist__9837){
var _ = cljs.core.first(arglist__9837);
var args = cljs.core.rest(arglist__9837);
return G__9836__delegate(_, args);
});
G__9836.cljs$lang$arity$variadic = G__9836__delegate;
return G__9836;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__9838 = this;
return cljs.core._dispatch.call(null,self__9838,args);
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
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2377__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9839 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_9841,_){
var this__9840 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__9840.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__9842 = this;
return (this__9842.uuid === other.uuid);
});
cljs.core.UUID.prototype.toString = (function (){
var this__9843 = this;
var this__9844 = this;
return cljs.core.pr_str.call(null,this__9844);
});
cljs.core.UUID;
