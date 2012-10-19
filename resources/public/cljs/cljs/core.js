goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
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
var x__7040 = (((x == null))?null:x);
if((p[goog.typeOf(x__7040)]))
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
cljs.core.is_proto_ = (function is_proto_(x){
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
var G__7041__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__7041 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7041__delegate.call(this, array, i, idxs);
};
G__7041.cljs$lang$maxFixedArity = 2;
G__7041.cljs$lang$applyTo = (function (arglist__7042){
var array = cljs.core.first(arglist__7042);
var i = cljs.core.first(cljs.core.next(arglist__7042));
var idxs = cljs.core.rest(cljs.core.next(arglist__7042));
return G__7041__delegate(array, i, idxs);
});
G__7041.cljs$lang$arity$variadic = G__7041__delegate;
return G__7041;
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
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____7127 = this$;
if(and__3822__auto____7127)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____7127;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2363__auto____7128 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7129 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7128)]);
if(or__3824__auto____7129)
{return or__3824__auto____7129;
} else
{var or__3824__auto____7130 = (cljs.core._invoke["_"]);
if(or__3824__auto____7130)
{return or__3824__auto____7130;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____7131 = this$;
if(and__3822__auto____7131)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____7131;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2363__auto____7132 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7133 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7132)]);
if(or__3824__auto____7133)
{return or__3824__auto____7133;
} else
{var or__3824__auto____7134 = (cljs.core._invoke["_"]);
if(or__3824__auto____7134)
{return or__3824__auto____7134;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____7135 = this$;
if(and__3822__auto____7135)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____7135;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2363__auto____7136 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7137 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7136)]);
if(or__3824__auto____7137)
{return or__3824__auto____7137;
} else
{var or__3824__auto____7138 = (cljs.core._invoke["_"]);
if(or__3824__auto____7138)
{return or__3824__auto____7138;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____7139 = this$;
if(and__3822__auto____7139)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____7139;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2363__auto____7140 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7141 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7140)]);
if(or__3824__auto____7141)
{return or__3824__auto____7141;
} else
{var or__3824__auto____7142 = (cljs.core._invoke["_"]);
if(or__3824__auto____7142)
{return or__3824__auto____7142;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____7143 = this$;
if(and__3822__auto____7143)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____7143;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2363__auto____7144 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7145 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7144)]);
if(or__3824__auto____7145)
{return or__3824__auto____7145;
} else
{var or__3824__auto____7146 = (cljs.core._invoke["_"]);
if(or__3824__auto____7146)
{return or__3824__auto____7146;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____7147 = this$;
if(and__3822__auto____7147)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____7147;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2363__auto____7148 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7149 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7148)]);
if(or__3824__auto____7149)
{return or__3824__auto____7149;
} else
{var or__3824__auto____7150 = (cljs.core._invoke["_"]);
if(or__3824__auto____7150)
{return or__3824__auto____7150;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____7151 = this$;
if(and__3822__auto____7151)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____7151;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2363__auto____7152 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7153 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7152)]);
if(or__3824__auto____7153)
{return or__3824__auto____7153;
} else
{var or__3824__auto____7154 = (cljs.core._invoke["_"]);
if(or__3824__auto____7154)
{return or__3824__auto____7154;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____7155 = this$;
if(and__3822__auto____7155)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____7155;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2363__auto____7156 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7157 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7156)]);
if(or__3824__auto____7157)
{return or__3824__auto____7157;
} else
{var or__3824__auto____7158 = (cljs.core._invoke["_"]);
if(or__3824__auto____7158)
{return or__3824__auto____7158;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____7159 = this$;
if(and__3822__auto____7159)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____7159;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2363__auto____7160 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7161 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7160)]);
if(or__3824__auto____7161)
{return or__3824__auto____7161;
} else
{var or__3824__auto____7162 = (cljs.core._invoke["_"]);
if(or__3824__auto____7162)
{return or__3824__auto____7162;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____7163 = this$;
if(and__3822__auto____7163)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____7163;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2363__auto____7164 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7165 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7164)]);
if(or__3824__auto____7165)
{return or__3824__auto____7165;
} else
{var or__3824__auto____7166 = (cljs.core._invoke["_"]);
if(or__3824__auto____7166)
{return or__3824__auto____7166;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____7167 = this$;
if(and__3822__auto____7167)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____7167;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2363__auto____7168 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7169 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7168)]);
if(or__3824__auto____7169)
{return or__3824__auto____7169;
} else
{var or__3824__auto____7170 = (cljs.core._invoke["_"]);
if(or__3824__auto____7170)
{return or__3824__auto____7170;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____7171 = this$;
if(and__3822__auto____7171)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____7171;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2363__auto____7172 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7173 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7172)]);
if(or__3824__auto____7173)
{return or__3824__auto____7173;
} else
{var or__3824__auto____7174 = (cljs.core._invoke["_"]);
if(or__3824__auto____7174)
{return or__3824__auto____7174;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____7175 = this$;
if(and__3822__auto____7175)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____7175;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2363__auto____7176 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7177 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7176)]);
if(or__3824__auto____7177)
{return or__3824__auto____7177;
} else
{var or__3824__auto____7178 = (cljs.core._invoke["_"]);
if(or__3824__auto____7178)
{return or__3824__auto____7178;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____7179 = this$;
if(and__3822__auto____7179)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____7179;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2363__auto____7180 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7181 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7180)]);
if(or__3824__auto____7181)
{return or__3824__auto____7181;
} else
{var or__3824__auto____7182 = (cljs.core._invoke["_"]);
if(or__3824__auto____7182)
{return or__3824__auto____7182;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____7183 = this$;
if(and__3822__auto____7183)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____7183;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2363__auto____7184 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7185 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7184)]);
if(or__3824__auto____7185)
{return or__3824__auto____7185;
} else
{var or__3824__auto____7186 = (cljs.core._invoke["_"]);
if(or__3824__auto____7186)
{return or__3824__auto____7186;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____7187 = this$;
if(and__3822__auto____7187)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____7187;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2363__auto____7188 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7189 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7188)]);
if(or__3824__auto____7189)
{return or__3824__auto____7189;
} else
{var or__3824__auto____7190 = (cljs.core._invoke["_"]);
if(or__3824__auto____7190)
{return or__3824__auto____7190;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____7191 = this$;
if(and__3822__auto____7191)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____7191;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2363__auto____7192 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7193 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7192)]);
if(or__3824__auto____7193)
{return or__3824__auto____7193;
} else
{var or__3824__auto____7194 = (cljs.core._invoke["_"]);
if(or__3824__auto____7194)
{return or__3824__auto____7194;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____7195 = this$;
if(and__3822__auto____7195)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____7195;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2363__auto____7196 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7197 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7196)]);
if(or__3824__auto____7197)
{return or__3824__auto____7197;
} else
{var or__3824__auto____7198 = (cljs.core._invoke["_"]);
if(or__3824__auto____7198)
{return or__3824__auto____7198;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____7199 = this$;
if(and__3822__auto____7199)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____7199;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2363__auto____7200 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7201 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7200)]);
if(or__3824__auto____7201)
{return or__3824__auto____7201;
} else
{var or__3824__auto____7202 = (cljs.core._invoke["_"]);
if(or__3824__auto____7202)
{return or__3824__auto____7202;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____7203 = this$;
if(and__3822__auto____7203)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____7203;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2363__auto____7204 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7205 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7204)]);
if(or__3824__auto____7205)
{return or__3824__auto____7205;
} else
{var or__3824__auto____7206 = (cljs.core._invoke["_"]);
if(or__3824__auto____7206)
{return or__3824__auto____7206;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____7207 = this$;
if(and__3822__auto____7207)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____7207;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2363__auto____7208 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7209 = (cljs.core._invoke[goog.typeOf(x__2363__auto____7208)]);
if(or__3824__auto____7209)
{return or__3824__auto____7209;
} else
{var or__3824__auto____7210 = (cljs.core._invoke["_"]);
if(or__3824__auto____7210)
{return or__3824__auto____7210;
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
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____7215 = coll;
if(and__3822__auto____7215)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____7215;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2363__auto____7216 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7217 = (cljs.core._count[goog.typeOf(x__2363__auto____7216)]);
if(or__3824__auto____7217)
{return or__3824__auto____7217;
} else
{var or__3824__auto____7218 = (cljs.core._count["_"]);
if(or__3824__auto____7218)
{return or__3824__auto____7218;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____7223 = coll;
if(and__3822__auto____7223)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____7223;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2363__auto____7224 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7225 = (cljs.core._empty[goog.typeOf(x__2363__auto____7224)]);
if(or__3824__auto____7225)
{return or__3824__auto____7225;
} else
{var or__3824__auto____7226 = (cljs.core._empty["_"]);
if(or__3824__auto____7226)
{return or__3824__auto____7226;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____7231 = coll;
if(and__3822__auto____7231)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____7231;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2363__auto____7232 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7233 = (cljs.core._conj[goog.typeOf(x__2363__auto____7232)]);
if(or__3824__auto____7233)
{return or__3824__auto____7233;
} else
{var or__3824__auto____7234 = (cljs.core._conj["_"]);
if(or__3824__auto____7234)
{return or__3824__auto____7234;
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
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____7243 = coll;
if(and__3822__auto____7243)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____7243;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2363__auto____7244 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7245 = (cljs.core._nth[goog.typeOf(x__2363__auto____7244)]);
if(or__3824__auto____7245)
{return or__3824__auto____7245;
} else
{var or__3824__auto____7246 = (cljs.core._nth["_"]);
if(or__3824__auto____7246)
{return or__3824__auto____7246;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____7247 = coll;
if(and__3822__auto____7247)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____7247;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2363__auto____7248 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7249 = (cljs.core._nth[goog.typeOf(x__2363__auto____7248)]);
if(or__3824__auto____7249)
{return or__3824__auto____7249;
} else
{var or__3824__auto____7250 = (cljs.core._nth["_"]);
if(or__3824__auto____7250)
{return or__3824__auto____7250;
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
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____7255 = coll;
if(and__3822__auto____7255)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____7255;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2363__auto____7256 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7257 = (cljs.core._first[goog.typeOf(x__2363__auto____7256)]);
if(or__3824__auto____7257)
{return or__3824__auto____7257;
} else
{var or__3824__auto____7258 = (cljs.core._first["_"]);
if(or__3824__auto____7258)
{return or__3824__auto____7258;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____7263 = coll;
if(and__3822__auto____7263)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____7263;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2363__auto____7264 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7265 = (cljs.core._rest[goog.typeOf(x__2363__auto____7264)]);
if(or__3824__auto____7265)
{return or__3824__auto____7265;
} else
{var or__3824__auto____7266 = (cljs.core._rest["_"]);
if(or__3824__auto____7266)
{return or__3824__auto____7266;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____7271 = coll;
if(and__3822__auto____7271)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____7271;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2363__auto____7272 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7273 = (cljs.core._next[goog.typeOf(x__2363__auto____7272)]);
if(or__3824__auto____7273)
{return or__3824__auto____7273;
} else
{var or__3824__auto____7274 = (cljs.core._next["_"]);
if(or__3824__auto____7274)
{return or__3824__auto____7274;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____7283 = o;
if(and__3822__auto____7283)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____7283;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2363__auto____7284 = (((o == null))?null:o);
return (function (){var or__3824__auto____7285 = (cljs.core._lookup[goog.typeOf(x__2363__auto____7284)]);
if(or__3824__auto____7285)
{return or__3824__auto____7285;
} else
{var or__3824__auto____7286 = (cljs.core._lookup["_"]);
if(or__3824__auto____7286)
{return or__3824__auto____7286;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____7287 = o;
if(and__3822__auto____7287)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____7287;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2363__auto____7288 = (((o == null))?null:o);
return (function (){var or__3824__auto____7289 = (cljs.core._lookup[goog.typeOf(x__2363__auto____7288)]);
if(or__3824__auto____7289)
{return or__3824__auto____7289;
} else
{var or__3824__auto____7290 = (cljs.core._lookup["_"]);
if(or__3824__auto____7290)
{return or__3824__auto____7290;
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
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____7295 = coll;
if(and__3822__auto____7295)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____7295;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2363__auto____7296 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7297 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2363__auto____7296)]);
if(or__3824__auto____7297)
{return or__3824__auto____7297;
} else
{var or__3824__auto____7298 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____7298)
{return or__3824__auto____7298;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____7303 = coll;
if(and__3822__auto____7303)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____7303;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2363__auto____7304 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7305 = (cljs.core._assoc[goog.typeOf(x__2363__auto____7304)]);
if(or__3824__auto____7305)
{return or__3824__auto____7305;
} else
{var or__3824__auto____7306 = (cljs.core._assoc["_"]);
if(or__3824__auto____7306)
{return or__3824__auto____7306;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____7311 = coll;
if(and__3822__auto____7311)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____7311;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2363__auto____7312 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7313 = (cljs.core._dissoc[goog.typeOf(x__2363__auto____7312)]);
if(or__3824__auto____7313)
{return or__3824__auto____7313;
} else
{var or__3824__auto____7314 = (cljs.core._dissoc["_"]);
if(or__3824__auto____7314)
{return or__3824__auto____7314;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____7319 = coll;
if(and__3822__auto____7319)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____7319;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2363__auto____7320 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7321 = (cljs.core._key[goog.typeOf(x__2363__auto____7320)]);
if(or__3824__auto____7321)
{return or__3824__auto____7321;
} else
{var or__3824__auto____7322 = (cljs.core._key["_"]);
if(or__3824__auto____7322)
{return or__3824__auto____7322;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____7327 = coll;
if(and__3822__auto____7327)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____7327;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2363__auto____7328 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7329 = (cljs.core._val[goog.typeOf(x__2363__auto____7328)]);
if(or__3824__auto____7329)
{return or__3824__auto____7329;
} else
{var or__3824__auto____7330 = (cljs.core._val["_"]);
if(or__3824__auto____7330)
{return or__3824__auto____7330;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____7335 = coll;
if(and__3822__auto____7335)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____7335;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2363__auto____7336 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7337 = (cljs.core._disjoin[goog.typeOf(x__2363__auto____7336)]);
if(or__3824__auto____7337)
{return or__3824__auto____7337;
} else
{var or__3824__auto____7338 = (cljs.core._disjoin["_"]);
if(or__3824__auto____7338)
{return or__3824__auto____7338;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____7343 = coll;
if(and__3822__auto____7343)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____7343;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2363__auto____7344 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7345 = (cljs.core._peek[goog.typeOf(x__2363__auto____7344)]);
if(or__3824__auto____7345)
{return or__3824__auto____7345;
} else
{var or__3824__auto____7346 = (cljs.core._peek["_"]);
if(or__3824__auto____7346)
{return or__3824__auto____7346;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____7351 = coll;
if(and__3822__auto____7351)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____7351;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2363__auto____7352 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7353 = (cljs.core._pop[goog.typeOf(x__2363__auto____7352)]);
if(or__3824__auto____7353)
{return or__3824__auto____7353;
} else
{var or__3824__auto____7354 = (cljs.core._pop["_"]);
if(or__3824__auto____7354)
{return or__3824__auto____7354;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____7359 = coll;
if(and__3822__auto____7359)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____7359;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2363__auto____7360 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7361 = (cljs.core._assoc_n[goog.typeOf(x__2363__auto____7360)]);
if(or__3824__auto____7361)
{return or__3824__auto____7361;
} else
{var or__3824__auto____7362 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____7362)
{return or__3824__auto____7362;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____7367 = o;
if(and__3822__auto____7367)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____7367;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2363__auto____7368 = (((o == null))?null:o);
return (function (){var or__3824__auto____7369 = (cljs.core._deref[goog.typeOf(x__2363__auto____7368)]);
if(or__3824__auto____7369)
{return or__3824__auto____7369;
} else
{var or__3824__auto____7370 = (cljs.core._deref["_"]);
if(or__3824__auto____7370)
{return or__3824__auto____7370;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____7375 = o;
if(and__3822__auto____7375)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____7375;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2363__auto____7376 = (((o == null))?null:o);
return (function (){var or__3824__auto____7377 = (cljs.core._deref_with_timeout[goog.typeOf(x__2363__auto____7376)]);
if(or__3824__auto____7377)
{return or__3824__auto____7377;
} else
{var or__3824__auto____7378 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____7378)
{return or__3824__auto____7378;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____7383 = o;
if(and__3822__auto____7383)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____7383;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2363__auto____7384 = (((o == null))?null:o);
return (function (){var or__3824__auto____7385 = (cljs.core._meta[goog.typeOf(x__2363__auto____7384)]);
if(or__3824__auto____7385)
{return or__3824__auto____7385;
} else
{var or__3824__auto____7386 = (cljs.core._meta["_"]);
if(or__3824__auto____7386)
{return or__3824__auto____7386;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____7391 = o;
if(and__3822__auto____7391)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____7391;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2363__auto____7392 = (((o == null))?null:o);
return (function (){var or__3824__auto____7393 = (cljs.core._with_meta[goog.typeOf(x__2363__auto____7392)]);
if(or__3824__auto____7393)
{return or__3824__auto____7393;
} else
{var or__3824__auto____7394 = (cljs.core._with_meta["_"]);
if(or__3824__auto____7394)
{return or__3824__auto____7394;
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
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____7403 = coll;
if(and__3822__auto____7403)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____7403;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2363__auto____7404 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7405 = (cljs.core._reduce[goog.typeOf(x__2363__auto____7404)]);
if(or__3824__auto____7405)
{return or__3824__auto____7405;
} else
{var or__3824__auto____7406 = (cljs.core._reduce["_"]);
if(or__3824__auto____7406)
{return or__3824__auto____7406;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____7407 = coll;
if(and__3822__auto____7407)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____7407;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2363__auto____7408 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7409 = (cljs.core._reduce[goog.typeOf(x__2363__auto____7408)]);
if(or__3824__auto____7409)
{return or__3824__auto____7409;
} else
{var or__3824__auto____7410 = (cljs.core._reduce["_"]);
if(or__3824__auto____7410)
{return or__3824__auto____7410;
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
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____7415 = coll;
if(and__3822__auto____7415)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____7415;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2363__auto____7416 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7417 = (cljs.core._kv_reduce[goog.typeOf(x__2363__auto____7416)]);
if(or__3824__auto____7417)
{return or__3824__auto____7417;
} else
{var or__3824__auto____7418 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____7418)
{return or__3824__auto____7418;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____7423 = o;
if(and__3822__auto____7423)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____7423;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2363__auto____7424 = (((o == null))?null:o);
return (function (){var or__3824__auto____7425 = (cljs.core._equiv[goog.typeOf(x__2363__auto____7424)]);
if(or__3824__auto____7425)
{return or__3824__auto____7425;
} else
{var or__3824__auto____7426 = (cljs.core._equiv["_"]);
if(or__3824__auto____7426)
{return or__3824__auto____7426;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____7431 = o;
if(and__3822__auto____7431)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____7431;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2363__auto____7432 = (((o == null))?null:o);
return (function (){var or__3824__auto____7433 = (cljs.core._hash[goog.typeOf(x__2363__auto____7432)]);
if(or__3824__auto____7433)
{return or__3824__auto____7433;
} else
{var or__3824__auto____7434 = (cljs.core._hash["_"]);
if(or__3824__auto____7434)
{return or__3824__auto____7434;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____7439 = o;
if(and__3822__auto____7439)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____7439;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2363__auto____7440 = (((o == null))?null:o);
return (function (){var or__3824__auto____7441 = (cljs.core._seq[goog.typeOf(x__2363__auto____7440)]);
if(or__3824__auto____7441)
{return or__3824__auto____7441;
} else
{var or__3824__auto____7442 = (cljs.core._seq["_"]);
if(or__3824__auto____7442)
{return or__3824__auto____7442;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____7447 = coll;
if(and__3822__auto____7447)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____7447;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2363__auto____7448 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7449 = (cljs.core._rseq[goog.typeOf(x__2363__auto____7448)]);
if(or__3824__auto____7449)
{return or__3824__auto____7449;
} else
{var or__3824__auto____7450 = (cljs.core._rseq["_"]);
if(or__3824__auto____7450)
{return or__3824__auto____7450;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____7455 = coll;
if(and__3822__auto____7455)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____7455;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2363__auto____7456 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7457 = (cljs.core._sorted_seq[goog.typeOf(x__2363__auto____7456)]);
if(or__3824__auto____7457)
{return or__3824__auto____7457;
} else
{var or__3824__auto____7458 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____7458)
{return or__3824__auto____7458;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____7463 = coll;
if(and__3822__auto____7463)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____7463;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2363__auto____7464 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7465 = (cljs.core._sorted_seq_from[goog.typeOf(x__2363__auto____7464)]);
if(or__3824__auto____7465)
{return or__3824__auto____7465;
} else
{var or__3824__auto____7466 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____7466)
{return or__3824__auto____7466;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____7471 = coll;
if(and__3822__auto____7471)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____7471;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2363__auto____7472 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7473 = (cljs.core._entry_key[goog.typeOf(x__2363__auto____7472)]);
if(or__3824__auto____7473)
{return or__3824__auto____7473;
} else
{var or__3824__auto____7474 = (cljs.core._entry_key["_"]);
if(or__3824__auto____7474)
{return or__3824__auto____7474;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____7479 = coll;
if(and__3822__auto____7479)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____7479;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2363__auto____7480 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7481 = (cljs.core._comparator[goog.typeOf(x__2363__auto____7480)]);
if(or__3824__auto____7481)
{return or__3824__auto____7481;
} else
{var or__3824__auto____7482 = (cljs.core._comparator["_"]);
if(or__3824__auto____7482)
{return or__3824__auto____7482;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____7487 = o;
if(and__3822__auto____7487)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____7487;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2363__auto____7488 = (((o == null))?null:o);
return (function (){var or__3824__auto____7489 = (cljs.core._pr_seq[goog.typeOf(x__2363__auto____7488)]);
if(or__3824__auto____7489)
{return or__3824__auto____7489;
} else
{var or__3824__auto____7490 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____7490)
{return or__3824__auto____7490;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____7495 = d;
if(and__3822__auto____7495)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____7495;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2363__auto____7496 = (((d == null))?null:d);
return (function (){var or__3824__auto____7497 = (cljs.core._realized_QMARK_[goog.typeOf(x__2363__auto____7496)]);
if(or__3824__auto____7497)
{return or__3824__auto____7497;
} else
{var or__3824__auto____7498 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____7498)
{return or__3824__auto____7498;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____7503 = this$;
if(and__3822__auto____7503)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____7503;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2363__auto____7504 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7505 = (cljs.core._notify_watches[goog.typeOf(x__2363__auto____7504)]);
if(or__3824__auto____7505)
{return or__3824__auto____7505;
} else
{var or__3824__auto____7506 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____7506)
{return or__3824__auto____7506;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____7511 = this$;
if(and__3822__auto____7511)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____7511;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2363__auto____7512 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7513 = (cljs.core._add_watch[goog.typeOf(x__2363__auto____7512)]);
if(or__3824__auto____7513)
{return or__3824__auto____7513;
} else
{var or__3824__auto____7514 = (cljs.core._add_watch["_"]);
if(or__3824__auto____7514)
{return or__3824__auto____7514;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____7519 = this$;
if(and__3822__auto____7519)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____7519;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2363__auto____7520 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7521 = (cljs.core._remove_watch[goog.typeOf(x__2363__auto____7520)]);
if(or__3824__auto____7521)
{return or__3824__auto____7521;
} else
{var or__3824__auto____7522 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____7522)
{return or__3824__auto____7522;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____7527 = coll;
if(and__3822__auto____7527)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____7527;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2363__auto____7528 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7529 = (cljs.core._as_transient[goog.typeOf(x__2363__auto____7528)]);
if(or__3824__auto____7529)
{return or__3824__auto____7529;
} else
{var or__3824__auto____7530 = (cljs.core._as_transient["_"]);
if(or__3824__auto____7530)
{return or__3824__auto____7530;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____7535 = tcoll;
if(and__3822__auto____7535)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____7535;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2363__auto____7536 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7537 = (cljs.core._conj_BANG_[goog.typeOf(x__2363__auto____7536)]);
if(or__3824__auto____7537)
{return or__3824__auto____7537;
} else
{var or__3824__auto____7538 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____7538)
{return or__3824__auto____7538;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____7543 = tcoll;
if(and__3822__auto____7543)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____7543;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2363__auto____7544 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7545 = (cljs.core._persistent_BANG_[goog.typeOf(x__2363__auto____7544)]);
if(or__3824__auto____7545)
{return or__3824__auto____7545;
} else
{var or__3824__auto____7546 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____7546)
{return or__3824__auto____7546;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____7551 = tcoll;
if(and__3822__auto____7551)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____7551;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2363__auto____7552 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7553 = (cljs.core._assoc_BANG_[goog.typeOf(x__2363__auto____7552)]);
if(or__3824__auto____7553)
{return or__3824__auto____7553;
} else
{var or__3824__auto____7554 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____7554)
{return or__3824__auto____7554;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____7559 = tcoll;
if(and__3822__auto____7559)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____7559;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2363__auto____7560 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7561 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2363__auto____7560)]);
if(or__3824__auto____7561)
{return or__3824__auto____7561;
} else
{var or__3824__auto____7562 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____7562)
{return or__3824__auto____7562;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____7567 = tcoll;
if(and__3822__auto____7567)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____7567;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2363__auto____7568 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7569 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2363__auto____7568)]);
if(or__3824__auto____7569)
{return or__3824__auto____7569;
} else
{var or__3824__auto____7570 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____7570)
{return or__3824__auto____7570;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____7575 = tcoll;
if(and__3822__auto____7575)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____7575;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2363__auto____7576 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7577 = (cljs.core._pop_BANG_[goog.typeOf(x__2363__auto____7576)]);
if(or__3824__auto____7577)
{return or__3824__auto____7577;
} else
{var or__3824__auto____7578 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____7578)
{return or__3824__auto____7578;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____7583 = tcoll;
if(and__3822__auto____7583)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____7583;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2363__auto____7584 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7585 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2363__auto____7584)]);
if(or__3824__auto____7585)
{return or__3824__auto____7585;
} else
{var or__3824__auto____7586 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____7586)
{return or__3824__auto____7586;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____7591 = x;
if(and__3822__auto____7591)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____7591;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2363__auto____7592 = (((x == null))?null:x);
return (function (){var or__3824__auto____7593 = (cljs.core._compare[goog.typeOf(x__2363__auto____7592)]);
if(or__3824__auto____7593)
{return or__3824__auto____7593;
} else
{var or__3824__auto____7594 = (cljs.core._compare["_"]);
if(or__3824__auto____7594)
{return or__3824__auto____7594;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____7599 = coll;
if(and__3822__auto____7599)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____7599;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2363__auto____7600 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7601 = (cljs.core._drop_first[goog.typeOf(x__2363__auto____7600)]);
if(or__3824__auto____7601)
{return or__3824__auto____7601;
} else
{var or__3824__auto____7602 = (cljs.core._drop_first["_"]);
if(or__3824__auto____7602)
{return or__3824__auto____7602;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____7607 = coll;
if(and__3822__auto____7607)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____7607;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2363__auto____7608 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7609 = (cljs.core._chunked_first[goog.typeOf(x__2363__auto____7608)]);
if(or__3824__auto____7609)
{return or__3824__auto____7609;
} else
{var or__3824__auto____7610 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____7610)
{return or__3824__auto____7610;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____7615 = coll;
if(and__3822__auto____7615)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____7615;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2363__auto____7616 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7617 = (cljs.core._chunked_rest[goog.typeOf(x__2363__auto____7616)]);
if(or__3824__auto____7617)
{return or__3824__auto____7617;
} else
{var or__3824__auto____7618 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____7618)
{return or__3824__auto____7618;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____7623 = coll;
if(and__3822__auto____7623)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____7623;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2363__auto____7624 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7625 = (cljs.core._chunked_next[goog.typeOf(x__2363__auto____7624)]);
if(or__3824__auto____7625)
{return or__3824__auto____7625;
} else
{var or__3824__auto____7626 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____7626)
{return or__3824__auto____7626;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
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
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____7628 = (x === y);
if(or__3824__auto____7628)
{return or__3824__auto____7628;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7629__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7630 = y;
var G__7631 = cljs.core.first.call(null,more);
var G__7632 = cljs.core.next.call(null,more);
x = G__7630;
y = G__7631;
more = G__7632;
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
var G__7629 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7629__delegate.call(this, x, y, more);
};
G__7629.cljs$lang$maxFixedArity = 2;
G__7629.cljs$lang$applyTo = (function (arglist__7633){
var x = cljs.core.first(arglist__7633);
var y = cljs.core.first(cljs.core.next(arglist__7633));
var more = cljs.core.rest(cljs.core.next(arglist__7633));
return G__7629__delegate(x, y, more);
});
G__7629.cljs$lang$arity$variadic = G__7629__delegate;
return G__7629;
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
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__7634 = null;
var G__7634__2 = (function (o,k){
return null;
});
var G__7634__3 = (function (o,k,not_found){
return not_found;
});
G__7634 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7634__2.call(this,o,k);
case 3:
return G__7634__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7634;
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
var G__7635 = null;
var G__7635__2 = (function (_,f){
return f.call(null);
});
var G__7635__3 = (function (_,f,start){
return start;
});
G__7635 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7635__2.call(this,_,f);
case 3:
return G__7635__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7635;
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
var G__7636 = null;
var G__7636__2 = (function (_,n){
return null;
});
var G__7636__3 = (function (_,n,not_found){
return not_found;
});
G__7636 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7636__2.call(this,_,n);
case 3:
return G__7636__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7636;
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
var and__3822__auto____7637 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____7637)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____7637;
}
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
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__7650 = cljs.core._count.call(null,cicoll);
if((cnt__7650 === 0))
{return f.call(null);
} else
{var val__7651 = cljs.core._nth.call(null,cicoll,0);
var n__7652 = 1;
while(true){
if((n__7652 < cnt__7650))
{var nval__7653 = f.call(null,val__7651,cljs.core._nth.call(null,cicoll,n__7652));
if(cljs.core.reduced_QMARK_.call(null,nval__7653))
{return cljs.core.deref.call(null,nval__7653);
} else
{{
var G__7662 = nval__7653;
var G__7663 = (n__7652 + 1);
val__7651 = G__7662;
n__7652 = G__7663;
continue;
}
}
} else
{return val__7651;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7654 = cljs.core._count.call(null,cicoll);
var val__7655 = val;
var n__7656 = 0;
while(true){
if((n__7656 < cnt__7654))
{var nval__7657 = f.call(null,val__7655,cljs.core._nth.call(null,cicoll,n__7656));
if(cljs.core.reduced_QMARK_.call(null,nval__7657))
{return cljs.core.deref.call(null,nval__7657);
} else
{{
var G__7664 = nval__7657;
var G__7665 = (n__7656 + 1);
val__7655 = G__7664;
n__7656 = G__7665;
continue;
}
}
} else
{return val__7655;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7658 = cljs.core._count.call(null,cicoll);
var val__7659 = val;
var n__7660 = idx;
while(true){
if((n__7660 < cnt__7658))
{var nval__7661 = f.call(null,val__7659,cljs.core._nth.call(null,cicoll,n__7660));
if(cljs.core.reduced_QMARK_.call(null,nval__7661))
{return cljs.core.deref.call(null,nval__7661);
} else
{{
var G__7666 = nval__7661;
var G__7667 = (n__7660 + 1);
val__7659 = G__7666;
n__7660 = G__7667;
continue;
}
}
} else
{return val__7659;
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
var cnt__7680 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7681 = (arr[0]);
var n__7682 = 1;
while(true){
if((n__7682 < cnt__7680))
{var nval__7683 = f.call(null,val__7681,(arr[n__7682]));
if(cljs.core.reduced_QMARK_.call(null,nval__7683))
{return cljs.core.deref.call(null,nval__7683);
} else
{{
var G__7692 = nval__7683;
var G__7693 = (n__7682 + 1);
val__7681 = G__7692;
n__7682 = G__7693;
continue;
}
}
} else
{return val__7681;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7684 = arr.length;
var val__7685 = val;
var n__7686 = 0;
while(true){
if((n__7686 < cnt__7684))
{var nval__7687 = f.call(null,val__7685,(arr[n__7686]));
if(cljs.core.reduced_QMARK_.call(null,nval__7687))
{return cljs.core.deref.call(null,nval__7687);
} else
{{
var G__7694 = nval__7687;
var G__7695 = (n__7686 + 1);
val__7685 = G__7694;
n__7686 = G__7695;
continue;
}
}
} else
{return val__7685;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7688 = arr.length;
var val__7689 = val;
var n__7690 = idx;
while(true){
if((n__7690 < cnt__7688))
{var nval__7691 = f.call(null,val__7689,(arr[n__7690]));
if(cljs.core.reduced_QMARK_.call(null,nval__7691))
{return cljs.core.deref.call(null,nval__7691);
} else
{{
var G__7696 = nval__7691;
var G__7697 = (n__7690 + 1);
val__7689 = G__7696;
n__7690 = G__7697;
continue;
}
}
} else
{return val__7689;
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7698 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7699 = this;
if(((this__7699.i + 1) < this__7699.a.length))
{return (new cljs.core.IndexedSeq(this__7699.a,(this__7699.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7700 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7701 = this;
var c__7702 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7702 > 0))
{return (new cljs.core.RSeq(coll,(c__7702 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7703 = this;
var this__7704 = this;
return cljs.core.pr_str.call(null,this__7704);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7705 = this;
if(cljs.core.counted_QMARK_.call(null,this__7705.a))
{return cljs.core.ci_reduce.call(null,this__7705.a,f,(this__7705.a[this__7705.i]),(this__7705.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7705.a[this__7705.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7706 = this;
if(cljs.core.counted_QMARK_.call(null,this__7706.a))
{return cljs.core.ci_reduce.call(null,this__7706.a,f,start,this__7706.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7707 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7708 = this;
return (this__7708.a.length - this__7708.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7709 = this;
return (this__7709.a[this__7709.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7710 = this;
if(((this__7710.i + 1) < this__7710.a.length))
{return (new cljs.core.IndexedSeq(this__7710.a,(this__7710.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7711 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7712 = this;
var i__7713 = (n + this__7712.i);
if((i__7713 < this__7712.a.length))
{return (this__7712.a[i__7713]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7714 = this;
var i__7715 = (n + this__7714.i);
if((i__7715 < this__7714.a.length))
{return (this__7714.a[i__7715]);
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
var G__7716 = null;
var G__7716__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7716__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7716 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7716__2.call(this,array,f);
case 3:
return G__7716__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7716;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7717 = null;
var G__7717__2 = (function (array,k){
return (array[k]);
});
var G__7717__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7717 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7717__2.call(this,array,k);
case 3:
return G__7717__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7717;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7718 = null;
var G__7718__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7718__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7718 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7718__2.call(this,array,n);
case 3:
return G__7718__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7718;
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
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7719 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7720 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7721 = this;
var this__7722 = this;
return cljs.core.pr_str.call(null,this__7722);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7723 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7724 = this;
return (this__7724.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7725 = this;
return cljs.core._nth.call(null,this__7725.ci,this__7725.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7726 = this;
if((this__7726.i > 0))
{return (new cljs.core.RSeq(this__7726.ci,(this__7726.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7727 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7728 = this;
return (new cljs.core.RSeq(this__7728.ci,this__7728.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7729 = this;
return this__7729.meta;
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
{if((function (){var G__7733__7734 = coll;
if(G__7733__7734)
{if((function (){var or__3824__auto____7735 = (G__7733__7734.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7735)
{return or__3824__auto____7735;
} else
{return G__7733__7734.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7733__7734.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7733__7734);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__7733__7734);
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
{if((function (){var G__7740__7741 = coll;
if(G__7740__7741)
{if((function (){var or__3824__auto____7742 = (G__7740__7741.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7742)
{return or__3824__auto____7742;
} else
{return G__7740__7741.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7740__7741.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7740__7741);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7740__7741);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__7743 = cljs.core.seq.call(null,coll);
if((s__7743 == null))
{return null;
} else
{return cljs.core._first.call(null,s__7743);
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
{if((function (){var G__7748__7749 = coll;
if(G__7748__7749)
{if((function (){var or__3824__auto____7750 = (G__7748__7749.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7750)
{return or__3824__auto____7750;
} else
{return G__7748__7749.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7748__7749.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7748__7749);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7748__7749);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__7751 = cljs.core.seq.call(null,coll);
if(!((s__7751 == null)))
{return cljs.core._rest.call(null,s__7751);
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
{if((function (){var G__7755__7756 = coll;
if(G__7755__7756)
{if((function (){var or__3824__auto____7757 = (G__7755__7756.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7757)
{return or__3824__auto____7757;
} else
{return G__7755__7756.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7755__7756.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7755__7756);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__7755__7756);
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
var sn__7759 = cljs.core.next.call(null,s);
if(!((sn__7759 == null)))
{{
var G__7760 = sn__7759;
s = G__7760;
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
var G__7761__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7762 = conj.call(null,coll,x);
var G__7763 = cljs.core.first.call(null,xs);
var G__7764 = cljs.core.next.call(null,xs);
coll = G__7762;
x = G__7763;
xs = G__7764;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7761 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7761__delegate.call(this, coll, x, xs);
};
G__7761.cljs$lang$maxFixedArity = 2;
G__7761.cljs$lang$applyTo = (function (arglist__7765){
var coll = cljs.core.first(arglist__7765);
var x = cljs.core.first(cljs.core.next(arglist__7765));
var xs = cljs.core.rest(cljs.core.next(arglist__7765));
return G__7761__delegate(coll, x, xs);
});
G__7761.cljs$lang$arity$variadic = G__7761__delegate;
return G__7761;
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
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__7768 = cljs.core.seq.call(null,coll);
var acc__7769 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__7768))
{return (acc__7769 + cljs.core._count.call(null,s__7768));
} else
{{
var G__7770 = cljs.core.next.call(null,s__7768);
var G__7771 = (acc__7769 + 1);
s__7768 = G__7770;
acc__7769 = G__7771;
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
{if((function (){var G__7778__7779 = coll;
if(G__7778__7779)
{if((function (){var or__3824__auto____7780 = (G__7778__7779.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7780)
{return or__3824__auto____7780;
} else
{return G__7778__7779.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7778__7779.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7778__7779);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7778__7779);
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
{if((function (){var G__7781__7782 = coll;
if(G__7781__7782)
{if((function (){var or__3824__auto____7783 = (G__7781__7782.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7783)
{return or__3824__auto____7783;
} else
{return G__7781__7782.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7781__7782.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7781__7782);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7781__7782);
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
var G__7786__delegate = function (coll,k,v,kvs){
while(true){
var ret__7785 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7787 = ret__7785;
var G__7788 = cljs.core.first.call(null,kvs);
var G__7789 = cljs.core.second.call(null,kvs);
var G__7790 = cljs.core.nnext.call(null,kvs);
coll = G__7787;
k = G__7788;
v = G__7789;
kvs = G__7790;
continue;
}
} else
{return ret__7785;
}
break;
}
};
var G__7786 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7786__delegate.call(this, coll, k, v, kvs);
};
G__7786.cljs$lang$maxFixedArity = 3;
G__7786.cljs$lang$applyTo = (function (arglist__7791){
var coll = cljs.core.first(arglist__7791);
var k = cljs.core.first(cljs.core.next(arglist__7791));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7791)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7791)));
return G__7786__delegate(coll, k, v, kvs);
});
G__7786.cljs$lang$arity$variadic = G__7786__delegate;
return G__7786;
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
var G__7794__delegate = function (coll,k,ks){
while(true){
var ret__7793 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7795 = ret__7793;
var G__7796 = cljs.core.first.call(null,ks);
var G__7797 = cljs.core.next.call(null,ks);
coll = G__7795;
k = G__7796;
ks = G__7797;
continue;
}
} else
{return ret__7793;
}
break;
}
};
var G__7794 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7794__delegate.call(this, coll, k, ks);
};
G__7794.cljs$lang$maxFixedArity = 2;
G__7794.cljs$lang$applyTo = (function (arglist__7798){
var coll = cljs.core.first(arglist__7798);
var k = cljs.core.first(cljs.core.next(arglist__7798));
var ks = cljs.core.rest(cljs.core.next(arglist__7798));
return G__7794__delegate(coll, k, ks);
});
G__7794.cljs$lang$arity$variadic = G__7794__delegate;
return G__7794;
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
if((function (){var G__7802__7803 = o;
if(G__7802__7803)
{if((function (){var or__3824__auto____7804 = (G__7802__7803.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7804)
{return or__3824__auto____7804;
} else
{return G__7802__7803.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7802__7803.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7802__7803);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__7802__7803);
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
var G__7807__delegate = function (coll,k,ks){
while(true){
var ret__7806 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__7808 = ret__7806;
var G__7809 = cljs.core.first.call(null,ks);
var G__7810 = cljs.core.next.call(null,ks);
coll = G__7808;
k = G__7809;
ks = G__7810;
continue;
}
} else
{return ret__7806;
}
break;
}
};
var G__7807 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7807__delegate.call(this, coll, k, ks);
};
G__7807.cljs$lang$maxFixedArity = 2;
G__7807.cljs$lang$applyTo = (function (arglist__7811){
var coll = cljs.core.first(arglist__7811);
var k = cljs.core.first(cljs.core.next(arglist__7811));
var ks = cljs.core.rest(cljs.core.next(arglist__7811));
return G__7807__delegate(coll, k, ks);
});
G__7807.cljs$lang$arity$variadic = G__7807__delegate;
return G__7807;
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
var h__7813 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7813);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7813;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7815 = (cljs.core.string_hash_cache[k]);
if(!((h__7815 == null)))
{return h__7815;
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
if((function (){var and__3822__auto____7817 = goog.isString(o);
if(and__3822__auto____7817)
{return check_cache;
} else
{return and__3822__auto____7817;
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
{var G__7821__7822 = x;
if(G__7821__7822)
{if((function (){var or__3824__auto____7823 = (G__7821__7822.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7823)
{return or__3824__auto____7823;
} else
{return G__7821__7822.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7821__7822.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7821__7822);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__7821__7822);
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
{var G__7827__7828 = x;
if(G__7827__7828)
{if((function (){var or__3824__auto____7829 = (G__7827__7828.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7829)
{return or__3824__auto____7829;
} else
{return G__7827__7828.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7827__7828.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7827__7828);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__7827__7828);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7833__7834 = x;
if(G__7833__7834)
{if((function (){var or__3824__auto____7835 = (G__7833__7834.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7835)
{return or__3824__auto____7835;
} else
{return G__7833__7834.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7833__7834.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7833__7834);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__7833__7834);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7839__7840 = x;
if(G__7839__7840)
{if((function (){var or__3824__auto____7841 = (G__7839__7840.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7841)
{return or__3824__auto____7841;
} else
{return G__7839__7840.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7839__7840.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7839__7840);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__7839__7840);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7845__7846 = x;
if(G__7845__7846)
{if((function (){var or__3824__auto____7847 = (G__7845__7846.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7847)
{return or__3824__auto____7847;
} else
{return G__7845__7846.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7845__7846.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7845__7846);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__7845__7846);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7851__7852 = x;
if(G__7851__7852)
{if((function (){var or__3824__auto____7853 = (G__7851__7852.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7853)
{return or__3824__auto____7853;
} else
{return G__7851__7852.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7851__7852.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7851__7852);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__7851__7852);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7857__7858 = x;
if(G__7857__7858)
{if((function (){var or__3824__auto____7859 = (G__7857__7858.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7859)
{return or__3824__auto____7859;
} else
{return G__7857__7858.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7857__7858.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7857__7858);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7857__7858);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7863__7864 = x;
if(G__7863__7864)
{if((function (){var or__3824__auto____7865 = (G__7863__7864.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7865)
{return or__3824__auto____7865;
} else
{return G__7863__7864.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7863__7864.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7863__7864);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7863__7864);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7869__7870 = x;
if(G__7869__7870)
{if((function (){var or__3824__auto____7871 = (G__7869__7870.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7871)
{return or__3824__auto____7871;
} else
{return G__7869__7870.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7869__7870.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7869__7870);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7869__7870);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7875__7876 = x;
if(G__7875__7876)
{if(cljs.core.truth_((function (){var or__3824__auto____7877 = null;
if(cljs.core.truth_(or__3824__auto____7877))
{return or__3824__auto____7877;
} else
{return G__7875__7876.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7875__7876.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7875__7876);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7875__7876);
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
var G__7878__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7878 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7878__delegate.call(this, keyvals);
};
G__7878.cljs$lang$maxFixedArity = 0;
G__7878.cljs$lang$applyTo = (function (arglist__7879){
var keyvals = cljs.core.seq(arglist__7879);;
return G__7878__delegate(keyvals);
});
G__7878.cljs$lang$arity$variadic = G__7878__delegate;
return G__7878;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
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
var keys__7881 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7881.push(key);
}));
return keys__7881;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7885 = i;
var j__7886 = j;
var len__7887 = len;
while(true){
if((len__7887 === 0))
{return to;
} else
{(to[j__7886] = (from[i__7885]));
{
var G__7888 = (i__7885 + 1);
var G__7889 = (j__7886 + 1);
var G__7890 = (len__7887 - 1);
i__7885 = G__7888;
j__7886 = G__7889;
len__7887 = G__7890;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7894 = (i + (len - 1));
var j__7895 = (j + (len - 1));
var len__7896 = len;
while(true){
if((len__7896 === 0))
{return to;
} else
{(to[j__7895] = (from[i__7894]));
{
var G__7897 = (i__7894 - 1);
var G__7898 = (j__7895 - 1);
var G__7899 = (len__7896 - 1);
i__7894 = G__7897;
j__7895 = G__7898;
len__7896 = G__7899;
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
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__7903__7904 = s;
if(G__7903__7904)
{if((function (){var or__3824__auto____7905 = (G__7903__7904.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7905)
{return or__3824__auto____7905;
} else
{return G__7903__7904.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7903__7904.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7903__7904);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7903__7904);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7909__7910 = s;
if(G__7909__7910)
{if((function (){var or__3824__auto____7911 = (G__7909__7910.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7911)
{return or__3824__auto____7911;
} else
{return G__7909__7910.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7909__7910.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7909__7910);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7909__7910);
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
var and__3822__auto____7914 = goog.isString(x);
if(and__3822__auto____7914)
{return !((function (){var or__3824__auto____7915 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7915)
{return or__3824__auto____7915;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7914;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7917 = goog.isString(x);
if(and__3822__auto____7917)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7917;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7919 = goog.isString(x);
if(and__3822__auto____7919)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7919;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7924 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____7924)
{return or__3824__auto____7924;
} else
{var G__7925__7926 = f;
if(G__7925__7926)
{if((function (){var or__3824__auto____7927 = (G__7925__7926.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7927)
{return or__3824__auto____7927;
} else
{return G__7925__7926.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7925__7926.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7925__7926);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7925__7926);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7929 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____7929)
{return (n == n.toFixed());
} else
{return and__3822__auto____7929;
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
if(cljs.core.truth_((function (){var and__3822__auto____7932 = coll;
if(cljs.core.truth_(and__3822__auto____7932))
{var and__3822__auto____7933 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____7933)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____7933;
}
} else
{return and__3822__auto____7932;
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
var G__7942__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7938 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__7939 = more;
while(true){
var x__7940 = cljs.core.first.call(null,xs__7939);
var etc__7941 = cljs.core.next.call(null,xs__7939);
if(cljs.core.truth_(xs__7939))
{if(cljs.core.contains_QMARK_.call(null,s__7938,x__7940))
{return false;
} else
{{
var G__7943 = cljs.core.conj.call(null,s__7938,x__7940);
var G__7944 = etc__7941;
s__7938 = G__7943;
xs__7939 = G__7944;
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
var G__7942 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7942__delegate.call(this, x, y, more);
};
G__7942.cljs$lang$maxFixedArity = 2;
G__7942.cljs$lang$applyTo = (function (arglist__7945){
var x = cljs.core.first(arglist__7945);
var y = cljs.core.first(cljs.core.next(arglist__7945));
var more = cljs.core.rest(cljs.core.next(arglist__7945));
return G__7942__delegate(x, y, more);
});
G__7942.cljs$lang$arity$variadic = G__7942__delegate;
return G__7942;
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
{if((function (){var G__7949__7950 = x;
if(G__7949__7950)
{if(cljs.core.truth_((function (){var or__3824__auto____7951 = null;
if(cljs.core.truth_(or__3824__auto____7951))
{return or__3824__auto____7951;
} else
{return G__7949__7950.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7949__7950.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7949__7950);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7949__7950);
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
var xl__7956 = cljs.core.count.call(null,xs);
var yl__7957 = cljs.core.count.call(null,ys);
if((xl__7956 < yl__7957))
{return -1;
} else
{if((xl__7956 > yl__7957))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7956,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7958 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____7959 = (d__7958 === 0);
if(and__3822__auto____7959)
{return ((n + 1) < len);
} else
{return and__3822__auto____7959;
}
})())
{{
var G__7960 = xs;
var G__7961 = ys;
var G__7962 = len;
var G__7963 = (n + 1);
xs = G__7960;
ys = G__7961;
len = G__7962;
n = G__7963;
continue;
}
} else
{return d__7958;
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
var r__7965 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7965))
{return r__7965;
} else
{if(cljs.core.truth_(r__7965))
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
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__7967 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7967,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7967);
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
var temp__3971__auto____7973 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7973)
{var s__7974 = temp__3971__auto____7973;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7974),cljs.core.next.call(null,s__7974));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7975 = val;
var coll__7976 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7976)
{var nval__7977 = f.call(null,val__7975,cljs.core.first.call(null,coll__7976));
if(cljs.core.reduced_QMARK_.call(null,nval__7977))
{return cljs.core.deref.call(null,nval__7977);
} else
{{
var G__7978 = nval__7977;
var G__7979 = cljs.core.next.call(null,coll__7976);
val__7975 = G__7978;
coll__7976 = G__7979;
continue;
}
}
} else
{return val__7975;
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
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__7981 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7981);
return cljs.core.vec.call(null,a__7981);
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
if((function (){var G__7988__7989 = coll;
if(G__7988__7989)
{if((function (){var or__3824__auto____7990 = (G__7988__7989.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7990)
{return or__3824__auto____7990;
} else
{return G__7988__7989.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7988__7989.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7988__7989);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7988__7989);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7991__7992 = coll;
if(G__7991__7992)
{if((function (){var or__3824__auto____7993 = (G__7991__7992.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7993)
{return or__3824__auto____7993;
} else
{return G__7991__7992.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7991__7992.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7991__7992);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7991__7992);
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__7994 = this;
return this__7994.val;
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
var G__7995__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7995 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7995__delegate.call(this, x, y, more);
};
G__7995.cljs$lang$maxFixedArity = 2;
G__7995.cljs$lang$applyTo = (function (arglist__7996){
var x = cljs.core.first(arglist__7996);
var y = cljs.core.first(cljs.core.next(arglist__7996));
var more = cljs.core.rest(cljs.core.next(arglist__7996));
return G__7995__delegate(x, y, more);
});
G__7995.cljs$lang$arity$variadic = G__7995__delegate;
return G__7995;
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
var G__7997__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7997 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7997__delegate.call(this, x, y, more);
};
G__7997.cljs$lang$maxFixedArity = 2;
G__7997.cljs$lang$applyTo = (function (arglist__7998){
var x = cljs.core.first(arglist__7998);
var y = cljs.core.first(cljs.core.next(arglist__7998));
var more = cljs.core.rest(cljs.core.next(arglist__7998));
return G__7997__delegate(x, y, more);
});
G__7997.cljs$lang$arity$variadic = G__7997__delegate;
return G__7997;
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
var G__7999__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7999 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7999__delegate.call(this, x, y, more);
};
G__7999.cljs$lang$maxFixedArity = 2;
G__7999.cljs$lang$applyTo = (function (arglist__8000){
var x = cljs.core.first(arglist__8000);
var y = cljs.core.first(cljs.core.next(arglist__8000));
var more = cljs.core.rest(cljs.core.next(arglist__8000));
return G__7999__delegate(x, y, more);
});
G__7999.cljs$lang$arity$variadic = G__7999__delegate;
return G__7999;
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
var G__8001__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8001 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8001__delegate.call(this, x, y, more);
};
G__8001.cljs$lang$maxFixedArity = 2;
G__8001.cljs$lang$applyTo = (function (arglist__8002){
var x = cljs.core.first(arglist__8002);
var y = cljs.core.first(cljs.core.next(arglist__8002));
var more = cljs.core.rest(cljs.core.next(arglist__8002));
return G__8001__delegate(x, y, more);
});
G__8001.cljs$lang$arity$variadic = G__8001__delegate;
return G__8001;
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
var G__8003__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__8004 = y;
var G__8005 = cljs.core.first.call(null,more);
var G__8006 = cljs.core.next.call(null,more);
x = G__8004;
y = G__8005;
more = G__8006;
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
var G__8003 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8003__delegate.call(this, x, y, more);
};
G__8003.cljs$lang$maxFixedArity = 2;
G__8003.cljs$lang$applyTo = (function (arglist__8007){
var x = cljs.core.first(arglist__8007);
var y = cljs.core.first(cljs.core.next(arglist__8007));
var more = cljs.core.rest(cljs.core.next(arglist__8007));
return G__8003__delegate(x, y, more);
});
G__8003.cljs$lang$arity$variadic = G__8003__delegate;
return G__8003;
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
var G__8008__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__8009 = y;
var G__8010 = cljs.core.first.call(null,more);
var G__8011 = cljs.core.next.call(null,more);
x = G__8009;
y = G__8010;
more = G__8011;
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
var G__8008 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8008__delegate.call(this, x, y, more);
};
G__8008.cljs$lang$maxFixedArity = 2;
G__8008.cljs$lang$applyTo = (function (arglist__8012){
var x = cljs.core.first(arglist__8012);
var y = cljs.core.first(cljs.core.next(arglist__8012));
var more = cljs.core.rest(cljs.core.next(arglist__8012));
return G__8008__delegate(x, y, more);
});
G__8008.cljs$lang$arity$variadic = G__8008__delegate;
return G__8008;
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
var G__8013__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__8014 = y;
var G__8015 = cljs.core.first.call(null,more);
var G__8016 = cljs.core.next.call(null,more);
x = G__8014;
y = G__8015;
more = G__8016;
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
var G__8013 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8013__delegate.call(this, x, y, more);
};
G__8013.cljs$lang$maxFixedArity = 2;
G__8013.cljs$lang$applyTo = (function (arglist__8017){
var x = cljs.core.first(arglist__8017);
var y = cljs.core.first(cljs.core.next(arglist__8017));
var more = cljs.core.rest(cljs.core.next(arglist__8017));
return G__8013__delegate(x, y, more);
});
G__8013.cljs$lang$arity$variadic = G__8013__delegate;
return G__8013;
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
var G__8018__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__8019 = y;
var G__8020 = cljs.core.first.call(null,more);
var G__8021 = cljs.core.next.call(null,more);
x = G__8019;
y = G__8020;
more = G__8021;
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
var G__8018 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8018__delegate.call(this, x, y, more);
};
G__8018.cljs$lang$maxFixedArity = 2;
G__8018.cljs$lang$applyTo = (function (arglist__8022){
var x = cljs.core.first(arglist__8022);
var y = cljs.core.first(cljs.core.next(arglist__8022));
var more = cljs.core.rest(cljs.core.next(arglist__8022));
return G__8018__delegate(x, y, more);
});
G__8018.cljs$lang$arity$variadic = G__8018__delegate;
return G__8018;
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
var G__8023__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8023 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8023__delegate.call(this, x, y, more);
};
G__8023.cljs$lang$maxFixedArity = 2;
G__8023.cljs$lang$applyTo = (function (arglist__8024){
var x = cljs.core.first(arglist__8024);
var y = cljs.core.first(cljs.core.next(arglist__8024));
var more = cljs.core.rest(cljs.core.next(arglist__8024));
return G__8023__delegate(x, y, more);
});
G__8023.cljs$lang$arity$variadic = G__8023__delegate;
return G__8023;
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
var G__8025__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8025 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8025__delegate.call(this, x, y, more);
};
G__8025.cljs$lang$maxFixedArity = 2;
G__8025.cljs$lang$applyTo = (function (arglist__8026){
var x = cljs.core.first(arglist__8026);
var y = cljs.core.first(cljs.core.next(arglist__8026));
var more = cljs.core.rest(cljs.core.next(arglist__8026));
return G__8025__delegate(x, y, more);
});
G__8025.cljs$lang$arity$variadic = G__8025__delegate;
return G__8025;
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
var rem__8028 = (n % d);
return cljs.core.fix.call(null,((n - rem__8028) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8030 = cljs.core.quot.call(null,n,d);
return (n - (d * q__8030));
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
var v__8033 = (v - ((v >> 1) & 1431655765));
var v__8034 = ((v__8033 & 858993459) + ((v__8033 >> 2) & 858993459));
return ((((v__8034 + (v__8034 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__8035__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__8036 = y;
var G__8037 = cljs.core.first.call(null,more);
var G__8038 = cljs.core.next.call(null,more);
x = G__8036;
y = G__8037;
more = G__8038;
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
var G__8035 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8035__delegate.call(this, x, y, more);
};
G__8035.cljs$lang$maxFixedArity = 2;
G__8035.cljs$lang$applyTo = (function (arglist__8039){
var x = cljs.core.first(arglist__8039);
var y = cljs.core.first(cljs.core.next(arglist__8039));
var more = cljs.core.rest(cljs.core.next(arglist__8039));
return G__8035__delegate(x, y, more);
});
G__8035.cljs$lang$arity$variadic = G__8035__delegate;
return G__8035;
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
var n__8043 = n;
var xs__8044 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8045 = xs__8044;
if(and__3822__auto____8045)
{return (n__8043 > 0);
} else
{return and__3822__auto____8045;
}
})()))
{{
var G__8046 = (n__8043 - 1);
var G__8047 = cljs.core.next.call(null,xs__8044);
n__8043 = G__8046;
xs__8044 = G__8047;
continue;
}
} else
{return xs__8044;
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
var G__8048__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8049 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8050 = cljs.core.next.call(null,more);
sb = G__8049;
more = G__8050;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8048 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8048__delegate.call(this, x, ys);
};
G__8048.cljs$lang$maxFixedArity = 1;
G__8048.cljs$lang$applyTo = (function (arglist__8051){
var x = cljs.core.first(arglist__8051);
var ys = cljs.core.rest(arglist__8051);
return G__8048__delegate(x, ys);
});
G__8048.cljs$lang$arity$variadic = G__8048__delegate;
return G__8048;
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
var G__8052__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8053 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__8054 = cljs.core.next.call(null,more);
sb = G__8053;
more = G__8054;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__8052 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8052__delegate.call(this, x, ys);
};
G__8052.cljs$lang$maxFixedArity = 1;
G__8052.cljs$lang$applyTo = (function (arglist__8055){
var x = cljs.core.first(arglist__8055);
var ys = cljs.core.rest(arglist__8055);
return G__8052__delegate(x, ys);
});
G__8052.cljs$lang$arity$variadic = G__8052__delegate;
return G__8052;
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
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__8056){
var fmt = cljs.core.first(arglist__8056);
var args = cljs.core.rest(arglist__8056);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8059 = cljs.core.seq.call(null,x);
var ys__8060 = cljs.core.seq.call(null,y);
while(true){
if((xs__8059 == null))
{return (ys__8060 == null);
} else
{if((ys__8060 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8059),cljs.core.first.call(null,ys__8060)))
{{
var G__8061 = cljs.core.next.call(null,xs__8059);
var G__8062 = cljs.core.next.call(null,ys__8060);
xs__8059 = G__8061;
ys__8060 = G__8062;
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
return cljs.core.reduce.call(null,(function (p1__8063_SHARP_,p2__8064_SHARP_){
return cljs.core.hash_combine.call(null,p1__8063_SHARP_,cljs.core.hash.call(null,p2__8064_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__8068 = 0;
var s__8069 = cljs.core.seq.call(null,m);
while(true){
if(s__8069)
{var e__8070 = cljs.core.first.call(null,s__8069);
{
var G__8071 = ((h__8068 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__8070)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__8070)))) % 4503599627370496);
var G__8072 = cljs.core.next.call(null,s__8069);
h__8068 = G__8071;
s__8069 = G__8072;
continue;
}
} else
{return h__8068;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__8076 = 0;
var s__8077 = cljs.core.seq.call(null,s);
while(true){
if(s__8077)
{var e__8078 = cljs.core.first.call(null,s__8077);
{
var G__8079 = ((h__8076 + cljs.core.hash.call(null,e__8078)) % 4503599627370496);
var G__8080 = cljs.core.next.call(null,s__8077);
h__8076 = G__8079;
s__8077 = G__8080;
continue;
}
} else
{return h__8076;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8101__8102 = cljs.core.seq.call(null,fn_map);
if(G__8101__8102)
{var G__8104__8106 = cljs.core.first.call(null,G__8101__8102);
var vec__8105__8107 = G__8104__8106;
var key_name__8108 = cljs.core.nth.call(null,vec__8105__8107,0,null);
var f__8109 = cljs.core.nth.call(null,vec__8105__8107,1,null);
var G__8101__8110 = G__8101__8102;
var G__8104__8111 = G__8104__8106;
var G__8101__8112 = G__8101__8110;
while(true){
var vec__8113__8114 = G__8104__8111;
var key_name__8115 = cljs.core.nth.call(null,vec__8113__8114,0,null);
var f__8116 = cljs.core.nth.call(null,vec__8113__8114,1,null);
var G__8101__8117 = G__8101__8112;
var str_name__8118 = cljs.core.name.call(null,key_name__8115);
(obj[str_name__8118] = f__8116);
var temp__3974__auto____8119 = cljs.core.next.call(null,G__8101__8117);
if(temp__3974__auto____8119)
{var G__8101__8120 = temp__3974__auto____8119;
{
var G__8121 = cljs.core.first.call(null,G__8101__8120);
var G__8122 = G__8101__8120;
G__8104__8111 = G__8121;
G__8101__8112 = G__8122;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8123 = this;
var h__2192__auto____8124 = this__8123.__hash;
if(!((h__2192__auto____8124 == null)))
{return h__2192__auto____8124;
} else
{var h__2192__auto____8125 = cljs.core.hash_coll.call(null,coll);
this__8123.__hash = h__2192__auto____8125;
return h__2192__auto____8125;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8126 = this;
if((this__8126.count === 1))
{return null;
} else
{return this__8126.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8127 = this;
return (new cljs.core.List(this__8127.meta,o,coll,(this__8127.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__8128 = this;
var this__8129 = this;
return cljs.core.pr_str.call(null,this__8129);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8130 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8131 = this;
return this__8131.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8132 = this;
return this__8132.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8133 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8134 = this;
return this__8134.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8135 = this;
if((this__8135.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__8135.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8136 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8137 = this;
return (new cljs.core.List(meta,this__8137.first,this__8137.rest,this__8137.count,this__8137.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8138 = this;
return this__8138.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8139 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8140 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8141 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8142 = this;
return (new cljs.core.List(this__8142.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__8143 = this;
var this__8144 = this;
return cljs.core.pr_str.call(null,this__8144);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8145 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8146 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8147 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8148 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8149 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8150 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8151 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8152 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8153 = this;
return this__8153.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8154 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__8158__8159 = coll;
if(G__8158__8159)
{if((function (){var or__3824__auto____8160 = (G__8158__8159.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____8160)
{return or__3824__auto____8160;
} else
{return G__8158__8159.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__8158__8159.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__8158__8159);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__8158__8159);
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
var G__8161__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__8161 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8161__delegate.call(this, x, y, z, items);
};
G__8161.cljs$lang$maxFixedArity = 3;
G__8161.cljs$lang$applyTo = (function (arglist__8162){
var x = cljs.core.first(arglist__8162);
var y = cljs.core.first(cljs.core.next(arglist__8162));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8162)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8162)));
return G__8161__delegate(x, y, z, items);
});
G__8161.cljs$lang$arity$variadic = G__8161__delegate;
return G__8161;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8163 = this;
var h__2192__auto____8164 = this__8163.__hash;
if(!((h__2192__auto____8164 == null)))
{return h__2192__auto____8164;
} else
{var h__2192__auto____8165 = cljs.core.hash_coll.call(null,coll);
this__8163.__hash = h__2192__auto____8165;
return h__2192__auto____8165;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8166 = this;
if((this__8166.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__8166.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8167 = this;
return (new cljs.core.Cons(null,o,coll,this__8167.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__8168 = this;
var this__8169 = this;
return cljs.core.pr_str.call(null,this__8169);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8170 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8171 = this;
return this__8171.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8172 = this;
if((this__8172.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__8172.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8173 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8174 = this;
return (new cljs.core.Cons(meta,this__8174.first,this__8174.rest,this__8174.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8175 = this;
return this__8175.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8176 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8176.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____8181 = (coll == null);
if(or__3824__auto____8181)
{return or__3824__auto____8181;
} else
{var G__8182__8183 = coll;
if(G__8182__8183)
{if((function (){var or__3824__auto____8184 = (G__8182__8183.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____8184)
{return or__3824__auto____8184;
} else
{return G__8182__8183.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8182__8183.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8182__8183);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8182__8183);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__8188__8189 = x;
if(G__8188__8189)
{if((function (){var or__3824__auto____8190 = (G__8188__8189.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____8190)
{return or__3824__auto____8190;
} else
{return G__8188__8189.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__8188__8189.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__8188__8189);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__8188__8189);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__8191 = null;
var G__8191__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__8191__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__8191 = function(string,f,start){
switch(arguments.length){
case 2:
return G__8191__2.call(this,string,f);
case 3:
return G__8191__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8191;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8192 = null;
var G__8192__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__8192__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__8192 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__8192__2.call(this,string,k);
case 3:
return G__8192__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8192;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8193 = null;
var G__8193__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__8193__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8193 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__8193__2.call(this,string,n);
case 3:
return G__8193__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8193;
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
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__8205 = null;
var G__8205__2 = (function (this_sym8196,coll){
var this__8198 = this;
var this_sym8196__8199 = this;
var ___8200 = this_sym8196__8199;
if((coll == null))
{return null;
} else
{var strobj__8201 = coll.strobj;
if((strobj__8201 == null))
{return cljs.core._lookup.call(null,coll,this__8198.k,null);
} else
{return (strobj__8201[this__8198.k]);
}
}
});
var G__8205__3 = (function (this_sym8197,coll,not_found){
var this__8198 = this;
var this_sym8197__8202 = this;
var ___8203 = this_sym8197__8202;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__8198.k,not_found);
}
});
G__8205 = function(this_sym8197,coll,not_found){
switch(arguments.length){
case 2:
return G__8205__2.call(this,this_sym8197,coll);
case 3:
return G__8205__3.call(this,this_sym8197,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8205;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym8194,args8195){
var this__8204 = this;
return this_sym8194.call.apply(this_sym8194,[this_sym8194].concat(args8195.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__8214 = null;
var G__8214__2 = (function (this_sym8208,coll){
var this_sym8208__8210 = this;
var this__8211 = this_sym8208__8210;
return cljs.core._lookup.call(null,coll,this__8211.toString(),null);
});
var G__8214__3 = (function (this_sym8209,coll,not_found){
var this_sym8209__8212 = this;
var this__8213 = this_sym8209__8212;
return cljs.core._lookup.call(null,coll,this__8213.toString(),not_found);
});
G__8214 = function(this_sym8209,coll,not_found){
switch(arguments.length){
case 2:
return G__8214__2.call(this,this_sym8209,coll);
case 3:
return G__8214__3.call(this,this_sym8209,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8214;
})()
;
String.prototype.apply = (function (this_sym8206,args8207){
return this_sym8206.call.apply(this_sym8206,[this_sym8206].concat(args8207.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__8216 = lazy_seq.x;
if(lazy_seq.realized)
{return x__8216;
} else
{lazy_seq.x = x__8216.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8217 = this;
var h__2192__auto____8218 = this__8217.__hash;
if(!((h__2192__auto____8218 == null)))
{return h__2192__auto____8218;
} else
{var h__2192__auto____8219 = cljs.core.hash_coll.call(null,coll);
this__8217.__hash = h__2192__auto____8219;
return h__2192__auto____8219;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8220 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8221 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__8222 = this;
var this__8223 = this;
return cljs.core.pr_str.call(null,this__8223);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8224 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8225 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8226 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8227 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8228 = this;
return (new cljs.core.LazySeq(meta,this__8228.realized,this__8228.x,this__8228.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8229 = this;
return this__8229.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8230 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8230.meta);
});
cljs.core.LazySeq;

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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8231 = this;
return this__8231.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__8232 = this;
var ___8233 = this;
(this__8232.buf[this__8232.end] = o);
return this__8232.end = (this__8232.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__8234 = this;
var ___8235 = this;
var ret__8236 = (new cljs.core.ArrayChunk(this__8234.buf,0,this__8234.end));
this__8234.buf = null;
return ret__8236;
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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8237 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__8237.arr[this__8237.off]),(this__8237.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8238 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__8238.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__8239 = this;
if((this__8239.off === this__8239.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__8239.arr,(this__8239.off + 1),this__8239.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__8240 = this;
return (this__8240.arr[(this__8240.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__8241 = this;
if((function (){var and__3822__auto____8242 = (i >= 0);
if(and__3822__auto____8242)
{return (i < (this__8241.end - this__8241.off));
} else
{return and__3822__auto____8242;
}
})())
{return (this__8241.arr[(this__8241.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8243 = this;
return (this__8243.end - this__8243.off);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__8244 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8245 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8246 = this;
return cljs.core._nth.call(null,this__8246.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8247 = this;
if((cljs.core._count.call(null,this__8247.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__8247.chunk),this__8247.more,this__8247.meta));
} else
{if((this__8247.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8247.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8248 = this;
if((this__8248.more == null))
{return null;
} else
{return this__8248.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8249 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8250 = this;
return (new cljs.core.ChunkedCons(this__8250.chunk,this__8250.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8251 = this;
return this__8251.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8252 = this;
return this__8252.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8253 = this;
if((this__8253.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8253.more;
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
if((function (){var G__8257__8258 = s;
if(G__8257__8258)
{if(cljs.core.truth_((function (){var or__3824__auto____8259 = null;
if(cljs.core.truth_(or__3824__auto____8259))
{return or__3824__auto____8259;
} else
{return G__8257__8258.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__8257__8258.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__8257__8258);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__8257__8258);
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
var ary__8262 = [];
var s__8263 = s;
while(true){
if(cljs.core.seq.call(null,s__8263))
{ary__8262.push(cljs.core.first.call(null,s__8263));
{
var G__8264 = cljs.core.next.call(null,s__8263);
s__8263 = G__8264;
continue;
}
} else
{return ary__8262;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__8268 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__8269 = 0;
var xs__8270 = cljs.core.seq.call(null,coll);
while(true){
if(xs__8270)
{(ret__8268[i__8269] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__8270)));
{
var G__8271 = (i__8269 + 1);
var G__8272 = cljs.core.next.call(null,xs__8270);
i__8269 = G__8271;
xs__8270 = G__8272;
continue;
}
} else
{}
break;
}
return ret__8268;
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
var a__8280 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8281 = cljs.core.seq.call(null,init_val_or_seq);
var i__8282 = 0;
var s__8283 = s__8281;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8284 = s__8283;
if(and__3822__auto____8284)
{return (i__8282 < size);
} else
{return and__3822__auto____8284;
}
})()))
{(a__8280[i__8282] = cljs.core.first.call(null,s__8283));
{
var G__8287 = (i__8282 + 1);
var G__8288 = cljs.core.next.call(null,s__8283);
i__8282 = G__8287;
s__8283 = G__8288;
continue;
}
} else
{return a__8280;
}
break;
}
} else
{var n__2527__auto____8285 = size;
var i__8286 = 0;
while(true){
if((i__8286 < n__2527__auto____8285))
{(a__8280[i__8286] = init_val_or_seq);
{
var G__8289 = (i__8286 + 1);
i__8286 = G__8289;
continue;
}
} else
{}
break;
}
return a__8280;
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
var a__8297 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8298 = cljs.core.seq.call(null,init_val_or_seq);
var i__8299 = 0;
var s__8300 = s__8298;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8301 = s__8300;
if(and__3822__auto____8301)
{return (i__8299 < size);
} else
{return and__3822__auto____8301;
}
})()))
{(a__8297[i__8299] = cljs.core.first.call(null,s__8300));
{
var G__8304 = (i__8299 + 1);
var G__8305 = cljs.core.next.call(null,s__8300);
i__8299 = G__8304;
s__8300 = G__8305;
continue;
}
} else
{return a__8297;
}
break;
}
} else
{var n__2527__auto____8302 = size;
var i__8303 = 0;
while(true){
if((i__8303 < n__2527__auto____8302))
{(a__8297[i__8303] = init_val_or_seq);
{
var G__8306 = (i__8303 + 1);
i__8303 = G__8306;
continue;
}
} else
{}
break;
}
return a__8297;
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
var a__8314 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8315 = cljs.core.seq.call(null,init_val_or_seq);
var i__8316 = 0;
var s__8317 = s__8315;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8318 = s__8317;
if(and__3822__auto____8318)
{return (i__8316 < size);
} else
{return and__3822__auto____8318;
}
})()))
{(a__8314[i__8316] = cljs.core.first.call(null,s__8317));
{
var G__8321 = (i__8316 + 1);
var G__8322 = cljs.core.next.call(null,s__8317);
i__8316 = G__8321;
s__8317 = G__8322;
continue;
}
} else
{return a__8314;
}
break;
}
} else
{var n__2527__auto____8319 = size;
var i__8320 = 0;
while(true){
if((i__8320 < n__2527__auto____8319))
{(a__8314[i__8320] = init_val_or_seq);
{
var G__8323 = (i__8320 + 1);
i__8320 = G__8323;
continue;
}
} else
{}
break;
}
return a__8314;
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
{var s__8328 = s;
var i__8329 = n;
var sum__8330 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8331 = (i__8329 > 0);
if(and__3822__auto____8331)
{return cljs.core.seq.call(null,s__8328);
} else
{return and__3822__auto____8331;
}
})()))
{{
var G__8332 = cljs.core.next.call(null,s__8328);
var G__8333 = (i__8329 - 1);
var G__8334 = (sum__8330 + 1);
s__8328 = G__8332;
i__8329 = G__8333;
sum__8330 = G__8334;
continue;
}
} else
{return sum__8330;
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
var s__8339 = cljs.core.seq.call(null,x);
if(s__8339)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__8339))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__8339),concat.call(null,cljs.core.chunk_rest.call(null,s__8339),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8339),concat.call(null,cljs.core.rest.call(null,s__8339),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__8343__delegate = function (x,y,zs){
var cat__8342 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8341 = cljs.core.seq.call(null,xys);
if(xys__8341)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__8341))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__8341),cat.call(null,cljs.core.chunk_rest.call(null,xys__8341),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__8341),cat.call(null,cljs.core.rest.call(null,xys__8341),zs));
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
return cat__8342.call(null,concat.call(null,x,y),zs);
};
var G__8343 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8343__delegate.call(this, x, y, zs);
};
G__8343.cljs$lang$maxFixedArity = 2;
G__8343.cljs$lang$applyTo = (function (arglist__8344){
var x = cljs.core.first(arglist__8344);
var y = cljs.core.first(cljs.core.next(arglist__8344));
var zs = cljs.core.rest(cljs.core.next(arglist__8344));
return G__8343__delegate(x, y, zs);
});
G__8343.cljs$lang$arity$variadic = G__8343__delegate;
return G__8343;
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
var G__8345__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__8345 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8345__delegate.call(this, a, b, c, d, more);
};
G__8345.cljs$lang$maxFixedArity = 4;
G__8345.cljs$lang$applyTo = (function (arglist__8346){
var a = cljs.core.first(arglist__8346);
var b = cljs.core.first(cljs.core.next(arglist__8346));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8346)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8346))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8346))));
return G__8345__delegate(a, b, c, d, more);
});
G__8345.cljs$lang$arity$variadic = G__8345__delegate;
return G__8345;
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
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__8388 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__8389 = cljs.core._first.call(null,args__8388);
var args__8390 = cljs.core._rest.call(null,args__8388);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__8389);
} else
{return f.call(null,a__8389);
}
} else
{var b__8391 = cljs.core._first.call(null,args__8390);
var args__8392 = cljs.core._rest.call(null,args__8390);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__8389,b__8391);
} else
{return f.call(null,a__8389,b__8391);
}
} else
{var c__8393 = cljs.core._first.call(null,args__8392);
var args__8394 = cljs.core._rest.call(null,args__8392);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__8389,b__8391,c__8393);
} else
{return f.call(null,a__8389,b__8391,c__8393);
}
} else
{var d__8395 = cljs.core._first.call(null,args__8394);
var args__8396 = cljs.core._rest.call(null,args__8394);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__8389,b__8391,c__8393,d__8395);
} else
{return f.call(null,a__8389,b__8391,c__8393,d__8395);
}
} else
{var e__8397 = cljs.core._first.call(null,args__8396);
var args__8398 = cljs.core._rest.call(null,args__8396);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__8389,b__8391,c__8393,d__8395,e__8397);
} else
{return f.call(null,a__8389,b__8391,c__8393,d__8395,e__8397);
}
} else
{var f__8399 = cljs.core._first.call(null,args__8398);
var args__8400 = cljs.core._rest.call(null,args__8398);
if((argc === 6))
{if(f__8399.cljs$lang$arity$6)
{return f__8399.cljs$lang$arity$6(a__8389,b__8391,c__8393,d__8395,e__8397,f__8399);
} else
{return f__8399.call(null,a__8389,b__8391,c__8393,d__8395,e__8397,f__8399);
}
} else
{var g__8401 = cljs.core._first.call(null,args__8400);
var args__8402 = cljs.core._rest.call(null,args__8400);
if((argc === 7))
{if(f__8399.cljs$lang$arity$7)
{return f__8399.cljs$lang$arity$7(a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401);
} else
{return f__8399.call(null,a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401);
}
} else
{var h__8403 = cljs.core._first.call(null,args__8402);
var args__8404 = cljs.core._rest.call(null,args__8402);
if((argc === 8))
{if(f__8399.cljs$lang$arity$8)
{return f__8399.cljs$lang$arity$8(a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403);
} else
{return f__8399.call(null,a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403);
}
} else
{var i__8405 = cljs.core._first.call(null,args__8404);
var args__8406 = cljs.core._rest.call(null,args__8404);
if((argc === 9))
{if(f__8399.cljs$lang$arity$9)
{return f__8399.cljs$lang$arity$9(a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405);
} else
{return f__8399.call(null,a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405);
}
} else
{var j__8407 = cljs.core._first.call(null,args__8406);
var args__8408 = cljs.core._rest.call(null,args__8406);
if((argc === 10))
{if(f__8399.cljs$lang$arity$10)
{return f__8399.cljs$lang$arity$10(a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407);
} else
{return f__8399.call(null,a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407);
}
} else
{var k__8409 = cljs.core._first.call(null,args__8408);
var args__8410 = cljs.core._rest.call(null,args__8408);
if((argc === 11))
{if(f__8399.cljs$lang$arity$11)
{return f__8399.cljs$lang$arity$11(a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409);
} else
{return f__8399.call(null,a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409);
}
} else
{var l__8411 = cljs.core._first.call(null,args__8410);
var args__8412 = cljs.core._rest.call(null,args__8410);
if((argc === 12))
{if(f__8399.cljs$lang$arity$12)
{return f__8399.cljs$lang$arity$12(a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409,l__8411);
} else
{return f__8399.call(null,a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409,l__8411);
}
} else
{var m__8413 = cljs.core._first.call(null,args__8412);
var args__8414 = cljs.core._rest.call(null,args__8412);
if((argc === 13))
{if(f__8399.cljs$lang$arity$13)
{return f__8399.cljs$lang$arity$13(a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409,l__8411,m__8413);
} else
{return f__8399.call(null,a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409,l__8411,m__8413);
}
} else
{var n__8415 = cljs.core._first.call(null,args__8414);
var args__8416 = cljs.core._rest.call(null,args__8414);
if((argc === 14))
{if(f__8399.cljs$lang$arity$14)
{return f__8399.cljs$lang$arity$14(a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409,l__8411,m__8413,n__8415);
} else
{return f__8399.call(null,a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409,l__8411,m__8413,n__8415);
}
} else
{var o__8417 = cljs.core._first.call(null,args__8416);
var args__8418 = cljs.core._rest.call(null,args__8416);
if((argc === 15))
{if(f__8399.cljs$lang$arity$15)
{return f__8399.cljs$lang$arity$15(a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409,l__8411,m__8413,n__8415,o__8417);
} else
{return f__8399.call(null,a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409,l__8411,m__8413,n__8415,o__8417);
}
} else
{var p__8419 = cljs.core._first.call(null,args__8418);
var args__8420 = cljs.core._rest.call(null,args__8418);
if((argc === 16))
{if(f__8399.cljs$lang$arity$16)
{return f__8399.cljs$lang$arity$16(a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409,l__8411,m__8413,n__8415,o__8417,p__8419);
} else
{return f__8399.call(null,a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409,l__8411,m__8413,n__8415,o__8417,p__8419);
}
} else
{var q__8421 = cljs.core._first.call(null,args__8420);
var args__8422 = cljs.core._rest.call(null,args__8420);
if((argc === 17))
{if(f__8399.cljs$lang$arity$17)
{return f__8399.cljs$lang$arity$17(a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409,l__8411,m__8413,n__8415,o__8417,p__8419,q__8421);
} else
{return f__8399.call(null,a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409,l__8411,m__8413,n__8415,o__8417,p__8419,q__8421);
}
} else
{var r__8423 = cljs.core._first.call(null,args__8422);
var args__8424 = cljs.core._rest.call(null,args__8422);
if((argc === 18))
{if(f__8399.cljs$lang$arity$18)
{return f__8399.cljs$lang$arity$18(a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409,l__8411,m__8413,n__8415,o__8417,p__8419,q__8421,r__8423);
} else
{return f__8399.call(null,a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409,l__8411,m__8413,n__8415,o__8417,p__8419,q__8421,r__8423);
}
} else
{var s__8425 = cljs.core._first.call(null,args__8424);
var args__8426 = cljs.core._rest.call(null,args__8424);
if((argc === 19))
{if(f__8399.cljs$lang$arity$19)
{return f__8399.cljs$lang$arity$19(a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409,l__8411,m__8413,n__8415,o__8417,p__8419,q__8421,r__8423,s__8425);
} else
{return f__8399.call(null,a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409,l__8411,m__8413,n__8415,o__8417,p__8419,q__8421,r__8423,s__8425);
}
} else
{var t__8427 = cljs.core._first.call(null,args__8426);
var args__8428 = cljs.core._rest.call(null,args__8426);
if((argc === 20))
{if(f__8399.cljs$lang$arity$20)
{return f__8399.cljs$lang$arity$20(a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409,l__8411,m__8413,n__8415,o__8417,p__8419,q__8421,r__8423,s__8425,t__8427);
} else
{return f__8399.call(null,a__8389,b__8391,c__8393,d__8395,e__8397,f__8399,g__8401,h__8403,i__8405,j__8407,k__8409,l__8411,m__8413,n__8415,o__8417,p__8419,q__8421,r__8423,s__8425,t__8427);
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
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__8443 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8444 = cljs.core.bounded_count.call(null,args,(fixed_arity__8443 + 1));
if((bc__8444 <= fixed_arity__8443))
{return cljs.core.apply_to.call(null,f,bc__8444,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__8445 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__8446 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8447 = cljs.core.bounded_count.call(null,arglist__8445,(fixed_arity__8446 + 1));
if((bc__8447 <= fixed_arity__8446))
{return cljs.core.apply_to.call(null,f,bc__8447,arglist__8445);
} else
{return f.cljs$lang$applyTo(arglist__8445);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8445));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__8448 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__8449 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8450 = cljs.core.bounded_count.call(null,arglist__8448,(fixed_arity__8449 + 1));
if((bc__8450 <= fixed_arity__8449))
{return cljs.core.apply_to.call(null,f,bc__8450,arglist__8448);
} else
{return f.cljs$lang$applyTo(arglist__8448);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8448));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__8451 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__8452 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8453 = cljs.core.bounded_count.call(null,arglist__8451,(fixed_arity__8452 + 1));
if((bc__8453 <= fixed_arity__8452))
{return cljs.core.apply_to.call(null,f,bc__8453,arglist__8451);
} else
{return f.cljs$lang$applyTo(arglist__8451);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8451));
}
});
var apply__6 = (function() { 
var G__8457__delegate = function (f,a,b,c,d,args){
var arglist__8454 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__8455 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8456 = cljs.core.bounded_count.call(null,arglist__8454,(fixed_arity__8455 + 1));
if((bc__8456 <= fixed_arity__8455))
{return cljs.core.apply_to.call(null,f,bc__8456,arglist__8454);
} else
{return f.cljs$lang$applyTo(arglist__8454);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8454));
}
};
var G__8457 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8457__delegate.call(this, f, a, b, c, d, args);
};
G__8457.cljs$lang$maxFixedArity = 5;
G__8457.cljs$lang$applyTo = (function (arglist__8458){
var f = cljs.core.first(arglist__8458);
var a = cljs.core.first(cljs.core.next(arglist__8458));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8458)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8458))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8458)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8458)))));
return G__8457__delegate(f, a, b, c, d, args);
});
G__8457.cljs$lang$arity$variadic = G__8457__delegate;
return G__8457;
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
vary_meta.cljs$lang$applyTo = (function (arglist__8459){
var obj = cljs.core.first(arglist__8459);
var f = cljs.core.first(cljs.core.next(arglist__8459));
var args = cljs.core.rest(cljs.core.next(arglist__8459));
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
var G__8460__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__8460 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8460__delegate.call(this, x, y, more);
};
G__8460.cljs$lang$maxFixedArity = 2;
G__8460.cljs$lang$applyTo = (function (arglist__8461){
var x = cljs.core.first(arglist__8461);
var y = cljs.core.first(cljs.core.next(arglist__8461));
var more = cljs.core.rest(cljs.core.next(arglist__8461));
return G__8460__delegate(x, y, more);
});
G__8460.cljs$lang$arity$variadic = G__8460__delegate;
return G__8460;
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
var G__8462 = pred;
var G__8463 = cljs.core.next.call(null,coll);
pred = G__8462;
coll = G__8463;
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
{var or__3824__auto____8465 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____8465))
{return or__3824__auto____8465;
} else
{{
var G__8466 = pred;
var G__8467 = cljs.core.next.call(null,coll);
pred = G__8466;
coll = G__8467;
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
var G__8468 = null;
var G__8468__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__8468__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__8468__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__8468__3 = (function() { 
var G__8469__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__8469 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8469__delegate.call(this, x, y, zs);
};
G__8469.cljs$lang$maxFixedArity = 2;
G__8469.cljs$lang$applyTo = (function (arglist__8470){
var x = cljs.core.first(arglist__8470);
var y = cljs.core.first(cljs.core.next(arglist__8470));
var zs = cljs.core.rest(cljs.core.next(arglist__8470));
return G__8469__delegate(x, y, zs);
});
G__8469.cljs$lang$arity$variadic = G__8469__delegate;
return G__8469;
})()
;
G__8468 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__8468__0.call(this);
case 1:
return G__8468__1.call(this,x);
case 2:
return G__8468__2.call(this,x,y);
default:
return G__8468__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__8468.cljs$lang$maxFixedArity = 2;
G__8468.cljs$lang$applyTo = G__8468__3.cljs$lang$applyTo;
return G__8468;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8471__delegate = function (args){
return x;
};
var G__8471 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8471__delegate.call(this, args);
};
G__8471.cljs$lang$maxFixedArity = 0;
G__8471.cljs$lang$applyTo = (function (arglist__8472){
var args = cljs.core.seq(arglist__8472);;
return G__8471__delegate(args);
});
G__8471.cljs$lang$arity$variadic = G__8471__delegate;
return G__8471;
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
var G__8479 = null;
var G__8479__0 = (function (){
return f.call(null,g.call(null));
});
var G__8479__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__8479__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__8479__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__8479__4 = (function() { 
var G__8480__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8480 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8480__delegate.call(this, x, y, z, args);
};
G__8480.cljs$lang$maxFixedArity = 3;
G__8480.cljs$lang$applyTo = (function (arglist__8481){
var x = cljs.core.first(arglist__8481);
var y = cljs.core.first(cljs.core.next(arglist__8481));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8481)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8481)));
return G__8480__delegate(x, y, z, args);
});
G__8480.cljs$lang$arity$variadic = G__8480__delegate;
return G__8480;
})()
;
G__8479 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8479__0.call(this);
case 1:
return G__8479__1.call(this,x);
case 2:
return G__8479__2.call(this,x,y);
case 3:
return G__8479__3.call(this,x,y,z);
default:
return G__8479__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8479.cljs$lang$maxFixedArity = 3;
G__8479.cljs$lang$applyTo = G__8479__4.cljs$lang$applyTo;
return G__8479;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__8482 = null;
var G__8482__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__8482__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__8482__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__8482__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__8482__4 = (function() { 
var G__8483__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__8483 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8483__delegate.call(this, x, y, z, args);
};
G__8483.cljs$lang$maxFixedArity = 3;
G__8483.cljs$lang$applyTo = (function (arglist__8484){
var x = cljs.core.first(arglist__8484);
var y = cljs.core.first(cljs.core.next(arglist__8484));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8484)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8484)));
return G__8483__delegate(x, y, z, args);
});
G__8483.cljs$lang$arity$variadic = G__8483__delegate;
return G__8483;
})()
;
G__8482 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8482__0.call(this);
case 1:
return G__8482__1.call(this,x);
case 2:
return G__8482__2.call(this,x,y);
case 3:
return G__8482__3.call(this,x,y,z);
default:
return G__8482__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8482.cljs$lang$maxFixedArity = 3;
G__8482.cljs$lang$applyTo = G__8482__4.cljs$lang$applyTo;
return G__8482;
})()
});
var comp__4 = (function() { 
var G__8485__delegate = function (f1,f2,f3,fs){
var fs__8476 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__8486__delegate = function (args){
var ret__8477 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__8476),args);
var fs__8478 = cljs.core.next.call(null,fs__8476);
while(true){
if(fs__8478)
{{
var G__8487 = cljs.core.first.call(null,fs__8478).call(null,ret__8477);
var G__8488 = cljs.core.next.call(null,fs__8478);
ret__8477 = G__8487;
fs__8478 = G__8488;
continue;
}
} else
{return ret__8477;
}
break;
}
};
var G__8486 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8486__delegate.call(this, args);
};
G__8486.cljs$lang$maxFixedArity = 0;
G__8486.cljs$lang$applyTo = (function (arglist__8489){
var args = cljs.core.seq(arglist__8489);;
return G__8486__delegate(args);
});
G__8486.cljs$lang$arity$variadic = G__8486__delegate;
return G__8486;
})()
;
};
var G__8485 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8485__delegate.call(this, f1, f2, f3, fs);
};
G__8485.cljs$lang$maxFixedArity = 3;
G__8485.cljs$lang$applyTo = (function (arglist__8490){
var f1 = cljs.core.first(arglist__8490);
var f2 = cljs.core.first(cljs.core.next(arglist__8490));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8490)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8490)));
return G__8485__delegate(f1, f2, f3, fs);
});
G__8485.cljs$lang$arity$variadic = G__8485__delegate;
return G__8485;
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
var G__8491__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__8491 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8491__delegate.call(this, args);
};
G__8491.cljs$lang$maxFixedArity = 0;
G__8491.cljs$lang$applyTo = (function (arglist__8492){
var args = cljs.core.seq(arglist__8492);;
return G__8491__delegate(args);
});
G__8491.cljs$lang$arity$variadic = G__8491__delegate;
return G__8491;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__8493__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__8493 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8493__delegate.call(this, args);
};
G__8493.cljs$lang$maxFixedArity = 0;
G__8493.cljs$lang$applyTo = (function (arglist__8494){
var args = cljs.core.seq(arglist__8494);;
return G__8493__delegate(args);
});
G__8493.cljs$lang$arity$variadic = G__8493__delegate;
return G__8493;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__8495__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__8495 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8495__delegate.call(this, args);
};
G__8495.cljs$lang$maxFixedArity = 0;
G__8495.cljs$lang$applyTo = (function (arglist__8496){
var args = cljs.core.seq(arglist__8496);;
return G__8495__delegate(args);
});
G__8495.cljs$lang$arity$variadic = G__8495__delegate;
return G__8495;
})()
;
});
var partial__5 = (function() { 
var G__8497__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8498__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__8498 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8498__delegate.call(this, args);
};
G__8498.cljs$lang$maxFixedArity = 0;
G__8498.cljs$lang$applyTo = (function (arglist__8499){
var args = cljs.core.seq(arglist__8499);;
return G__8498__delegate(args);
});
G__8498.cljs$lang$arity$variadic = G__8498__delegate;
return G__8498;
})()
;
};
var G__8497 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8497__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__8497.cljs$lang$maxFixedArity = 4;
G__8497.cljs$lang$applyTo = (function (arglist__8500){
var f = cljs.core.first(arglist__8500);
var arg1 = cljs.core.first(cljs.core.next(arglist__8500));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8500)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8500))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8500))));
return G__8497__delegate(f, arg1, arg2, arg3, more);
});
G__8497.cljs$lang$arity$variadic = G__8497__delegate;
return G__8497;
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
var G__8501 = null;
var G__8501__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__8501__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__8501__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__8501__4 = (function() { 
var G__8502__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__8502 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8502__delegate.call(this, a, b, c, ds);
};
G__8502.cljs$lang$maxFixedArity = 3;
G__8502.cljs$lang$applyTo = (function (arglist__8503){
var a = cljs.core.first(arglist__8503);
var b = cljs.core.first(cljs.core.next(arglist__8503));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8503)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8503)));
return G__8502__delegate(a, b, c, ds);
});
G__8502.cljs$lang$arity$variadic = G__8502__delegate;
return G__8502;
})()
;
G__8501 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__8501__1.call(this,a);
case 2:
return G__8501__2.call(this,a,b);
case 3:
return G__8501__3.call(this,a,b,c);
default:
return G__8501__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8501.cljs$lang$maxFixedArity = 3;
G__8501.cljs$lang$applyTo = G__8501__4.cljs$lang$applyTo;
return G__8501;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__8504 = null;
var G__8504__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__8504__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__8504__4 = (function() { 
var G__8505__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__8505 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8505__delegate.call(this, a, b, c, ds);
};
G__8505.cljs$lang$maxFixedArity = 3;
G__8505.cljs$lang$applyTo = (function (arglist__8506){
var a = cljs.core.first(arglist__8506);
var b = cljs.core.first(cljs.core.next(arglist__8506));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8506)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8506)));
return G__8505__delegate(a, b, c, ds);
});
G__8505.cljs$lang$arity$variadic = G__8505__delegate;
return G__8505;
})()
;
G__8504 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8504__2.call(this,a,b);
case 3:
return G__8504__3.call(this,a,b,c);
default:
return G__8504__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8504.cljs$lang$maxFixedArity = 3;
G__8504.cljs$lang$applyTo = G__8504__4.cljs$lang$applyTo;
return G__8504;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__8507 = null;
var G__8507__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__8507__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__8507__4 = (function() { 
var G__8508__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__8508 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8508__delegate.call(this, a, b, c, ds);
};
G__8508.cljs$lang$maxFixedArity = 3;
G__8508.cljs$lang$applyTo = (function (arglist__8509){
var a = cljs.core.first(arglist__8509);
var b = cljs.core.first(cljs.core.next(arglist__8509));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8509)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8509)));
return G__8508__delegate(a, b, c, ds);
});
G__8508.cljs$lang$arity$variadic = G__8508__delegate;
return G__8508;
})()
;
G__8507 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8507__2.call(this,a,b);
case 3:
return G__8507__3.call(this,a,b,c);
default:
return G__8507__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8507.cljs$lang$maxFixedArity = 3;
G__8507.cljs$lang$applyTo = G__8507__4.cljs$lang$applyTo;
return G__8507;
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
var mapi__8525 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8533 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8533)
{var s__8534 = temp__3974__auto____8533;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8534))
{var c__8535 = cljs.core.chunk_first.call(null,s__8534);
var size__8536 = cljs.core.count.call(null,c__8535);
var b__8537 = cljs.core.chunk_buffer.call(null,size__8536);
var n__2527__auto____8538 = size__8536;
var i__8539 = 0;
while(true){
if((i__8539 < n__2527__auto____8538))
{cljs.core.chunk_append.call(null,b__8537,f.call(null,(idx + i__8539),cljs.core._nth.call(null,c__8535,i__8539)));
{
var G__8540 = (i__8539 + 1);
i__8539 = G__8540;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8537),mapi.call(null,(idx + size__8536),cljs.core.chunk_rest.call(null,s__8534)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__8534)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__8534)));
}
} else
{return null;
}
}),null));
});
return mapi__8525.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8550 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8550)
{var s__8551 = temp__3974__auto____8550;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8551))
{var c__8552 = cljs.core.chunk_first.call(null,s__8551);
var size__8553 = cljs.core.count.call(null,c__8552);
var b__8554 = cljs.core.chunk_buffer.call(null,size__8553);
var n__2527__auto____8555 = size__8553;
var i__8556 = 0;
while(true){
if((i__8556 < n__2527__auto____8555))
{var x__8557 = f.call(null,cljs.core._nth.call(null,c__8552,i__8556));
if((x__8557 == null))
{} else
{cljs.core.chunk_append.call(null,b__8554,x__8557);
}
{
var G__8559 = (i__8556 + 1);
i__8556 = G__8559;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8554),keep.call(null,f,cljs.core.chunk_rest.call(null,s__8551)));
} else
{var x__8558 = f.call(null,cljs.core.first.call(null,s__8551));
if((x__8558 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__8551));
} else
{return cljs.core.cons.call(null,x__8558,keep.call(null,f,cljs.core.rest.call(null,s__8551)));
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
var keepi__8585 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8595 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8595)
{var s__8596 = temp__3974__auto____8595;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8596))
{var c__8597 = cljs.core.chunk_first.call(null,s__8596);
var size__8598 = cljs.core.count.call(null,c__8597);
var b__8599 = cljs.core.chunk_buffer.call(null,size__8598);
var n__2527__auto____8600 = size__8598;
var i__8601 = 0;
while(true){
if((i__8601 < n__2527__auto____8600))
{var x__8602 = f.call(null,(idx + i__8601),cljs.core._nth.call(null,c__8597,i__8601));
if((x__8602 == null))
{} else
{cljs.core.chunk_append.call(null,b__8599,x__8602);
}
{
var G__8604 = (i__8601 + 1);
i__8601 = G__8604;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8599),keepi.call(null,(idx + size__8598),cljs.core.chunk_rest.call(null,s__8596)));
} else
{var x__8603 = f.call(null,idx,cljs.core.first.call(null,s__8596));
if((x__8603 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8596));
} else
{return cljs.core.cons.call(null,x__8603,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8596)));
}
}
} else
{return null;
}
}),null));
});
return keepi__8585.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8690 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8690))
{return p.call(null,y);
} else
{return and__3822__auto____8690;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8691 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____8691))
{var and__3822__auto____8692 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____8692))
{return p.call(null,z);
} else
{return and__3822__auto____8692;
}
} else
{return and__3822__auto____8691;
}
})());
});
var ep1__4 = (function() { 
var G__8761__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8693 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8693))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____8693;
}
})());
};
var G__8761 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8761__delegate.call(this, x, y, z, args);
};
G__8761.cljs$lang$maxFixedArity = 3;
G__8761.cljs$lang$applyTo = (function (arglist__8762){
var x = cljs.core.first(arglist__8762);
var y = cljs.core.first(cljs.core.next(arglist__8762));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8762)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8762)));
return G__8761__delegate(x, y, z, args);
});
G__8761.cljs$lang$arity$variadic = G__8761__delegate;
return G__8761;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8705 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8705))
{return p2.call(null,x);
} else
{return and__3822__auto____8705;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8706 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8706))
{var and__3822__auto____8707 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8707))
{var and__3822__auto____8708 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8708))
{return p2.call(null,y);
} else
{return and__3822__auto____8708;
}
} else
{return and__3822__auto____8707;
}
} else
{return and__3822__auto____8706;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8709 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8709))
{var and__3822__auto____8710 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8710))
{var and__3822__auto____8711 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8711))
{var and__3822__auto____8712 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8712))
{var and__3822__auto____8713 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8713))
{return p2.call(null,z);
} else
{return and__3822__auto____8713;
}
} else
{return and__3822__auto____8712;
}
} else
{return and__3822__auto____8711;
}
} else
{return and__3822__auto____8710;
}
} else
{return and__3822__auto____8709;
}
})());
});
var ep2__4 = (function() { 
var G__8763__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8714 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8714))
{return cljs.core.every_QMARK_.call(null,(function (p1__8560_SHARP_){
var and__3822__auto____8715 = p1.call(null,p1__8560_SHARP_);
if(cljs.core.truth_(and__3822__auto____8715))
{return p2.call(null,p1__8560_SHARP_);
} else
{return and__3822__auto____8715;
}
}),args);
} else
{return and__3822__auto____8714;
}
})());
};
var G__8763 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8763__delegate.call(this, x, y, z, args);
};
G__8763.cljs$lang$maxFixedArity = 3;
G__8763.cljs$lang$applyTo = (function (arglist__8764){
var x = cljs.core.first(arglist__8764);
var y = cljs.core.first(cljs.core.next(arglist__8764));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8764)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8764)));
return G__8763__delegate(x, y, z, args);
});
G__8763.cljs$lang$arity$variadic = G__8763__delegate;
return G__8763;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8734 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8734))
{var and__3822__auto____8735 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8735))
{return p3.call(null,x);
} else
{return and__3822__auto____8735;
}
} else
{return and__3822__auto____8734;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8736 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8736))
{var and__3822__auto____8737 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8737))
{var and__3822__auto____8738 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8738))
{var and__3822__auto____8739 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8739))
{var and__3822__auto____8740 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8740))
{return p3.call(null,y);
} else
{return and__3822__auto____8740;
}
} else
{return and__3822__auto____8739;
}
} else
{return and__3822__auto____8738;
}
} else
{return and__3822__auto____8737;
}
} else
{return and__3822__auto____8736;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8741 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____8741))
{var and__3822__auto____8742 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____8742))
{var and__3822__auto____8743 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____8743))
{var and__3822__auto____8744 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____8744))
{var and__3822__auto____8745 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____8745))
{var and__3822__auto____8746 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____8746))
{var and__3822__auto____8747 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____8747))
{var and__3822__auto____8748 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____8748))
{return p3.call(null,z);
} else
{return and__3822__auto____8748;
}
} else
{return and__3822__auto____8747;
}
} else
{return and__3822__auto____8746;
}
} else
{return and__3822__auto____8745;
}
} else
{return and__3822__auto____8744;
}
} else
{return and__3822__auto____8743;
}
} else
{return and__3822__auto____8742;
}
} else
{return and__3822__auto____8741;
}
})());
});
var ep3__4 = (function() { 
var G__8765__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8749 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8749))
{return cljs.core.every_QMARK_.call(null,(function (p1__8561_SHARP_){
var and__3822__auto____8750 = p1.call(null,p1__8561_SHARP_);
if(cljs.core.truth_(and__3822__auto____8750))
{var and__3822__auto____8751 = p2.call(null,p1__8561_SHARP_);
if(cljs.core.truth_(and__3822__auto____8751))
{return p3.call(null,p1__8561_SHARP_);
} else
{return and__3822__auto____8751;
}
} else
{return and__3822__auto____8750;
}
}),args);
} else
{return and__3822__auto____8749;
}
})());
};
var G__8765 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8765__delegate.call(this, x, y, z, args);
};
G__8765.cljs$lang$maxFixedArity = 3;
G__8765.cljs$lang$applyTo = (function (arglist__8766){
var x = cljs.core.first(arglist__8766);
var y = cljs.core.first(cljs.core.next(arglist__8766));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8766)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8766)));
return G__8765__delegate(x, y, z, args);
});
G__8765.cljs$lang$arity$variadic = G__8765__delegate;
return G__8765;
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
var G__8767__delegate = function (p1,p2,p3,ps){
var ps__8752 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8562_SHARP_){
return p1__8562_SHARP_.call(null,x);
}),ps__8752);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8563_SHARP_){
var and__3822__auto____8757 = p1__8563_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8757))
{return p1__8563_SHARP_.call(null,y);
} else
{return and__3822__auto____8757;
}
}),ps__8752);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8564_SHARP_){
var and__3822__auto____8758 = p1__8564_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____8758))
{var and__3822__auto____8759 = p1__8564_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____8759))
{return p1__8564_SHARP_.call(null,z);
} else
{return and__3822__auto____8759;
}
} else
{return and__3822__auto____8758;
}
}),ps__8752);
});
var epn__4 = (function() { 
var G__8768__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____8760 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____8760))
{return cljs.core.every_QMARK_.call(null,(function (p1__8565_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8565_SHARP_,args);
}),ps__8752);
} else
{return and__3822__auto____8760;
}
})());
};
var G__8768 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8768__delegate.call(this, x, y, z, args);
};
G__8768.cljs$lang$maxFixedArity = 3;
G__8768.cljs$lang$applyTo = (function (arglist__8769){
var x = cljs.core.first(arglist__8769);
var y = cljs.core.first(cljs.core.next(arglist__8769));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8769)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8769)));
return G__8768__delegate(x, y, z, args);
});
G__8768.cljs$lang$arity$variadic = G__8768__delegate;
return G__8768;
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
var G__8767 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8767__delegate.call(this, p1, p2, p3, ps);
};
G__8767.cljs$lang$maxFixedArity = 3;
G__8767.cljs$lang$applyTo = (function (arglist__8770){
var p1 = cljs.core.first(arglist__8770);
var p2 = cljs.core.first(cljs.core.next(arglist__8770));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8770)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8770)));
return G__8767__delegate(p1, p2, p3, ps);
});
G__8767.cljs$lang$arity$variadic = G__8767__delegate;
return G__8767;
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
var or__3824__auto____8851 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8851))
{return or__3824__auto____8851;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8852 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____8852))
{return or__3824__auto____8852;
} else
{var or__3824__auto____8853 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____8853))
{return or__3824__auto____8853;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8922__delegate = function (x,y,z,args){
var or__3824__auto____8854 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8854))
{return or__3824__auto____8854;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8922 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8922__delegate.call(this, x, y, z, args);
};
G__8922.cljs$lang$maxFixedArity = 3;
G__8922.cljs$lang$applyTo = (function (arglist__8923){
var x = cljs.core.first(arglist__8923);
var y = cljs.core.first(cljs.core.next(arglist__8923));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8923)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8923)));
return G__8922__delegate(x, y, z, args);
});
G__8922.cljs$lang$arity$variadic = G__8922__delegate;
return G__8922;
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
var or__3824__auto____8866 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8866))
{return or__3824__auto____8866;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8867 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8867))
{return or__3824__auto____8867;
} else
{var or__3824__auto____8868 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8868))
{return or__3824__auto____8868;
} else
{var or__3824__auto____8869 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8869))
{return or__3824__auto____8869;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8870 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8870))
{return or__3824__auto____8870;
} else
{var or__3824__auto____8871 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8871))
{return or__3824__auto____8871;
} else
{var or__3824__auto____8872 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8872))
{return or__3824__auto____8872;
} else
{var or__3824__auto____8873 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8873))
{return or__3824__auto____8873;
} else
{var or__3824__auto____8874 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8874))
{return or__3824__auto____8874;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8924__delegate = function (x,y,z,args){
var or__3824__auto____8875 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8875))
{return or__3824__auto____8875;
} else
{return cljs.core.some.call(null,(function (p1__8605_SHARP_){
var or__3824__auto____8876 = p1.call(null,p1__8605_SHARP_);
if(cljs.core.truth_(or__3824__auto____8876))
{return or__3824__auto____8876;
} else
{return p2.call(null,p1__8605_SHARP_);
}
}),args);
}
};
var G__8924 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8924__delegate.call(this, x, y, z, args);
};
G__8924.cljs$lang$maxFixedArity = 3;
G__8924.cljs$lang$applyTo = (function (arglist__8925){
var x = cljs.core.first(arglist__8925);
var y = cljs.core.first(cljs.core.next(arglist__8925));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8925)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8925)));
return G__8924__delegate(x, y, z, args);
});
G__8924.cljs$lang$arity$variadic = G__8924__delegate;
return G__8924;
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
var or__3824__auto____8895 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8895))
{return or__3824__auto____8895;
} else
{var or__3824__auto____8896 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8896))
{return or__3824__auto____8896;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8897 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8897))
{return or__3824__auto____8897;
} else
{var or__3824__auto____8898 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8898))
{return or__3824__auto____8898;
} else
{var or__3824__auto____8899 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8899))
{return or__3824__auto____8899;
} else
{var or__3824__auto____8900 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8900))
{return or__3824__auto____8900;
} else
{var or__3824__auto____8901 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8901))
{return or__3824__auto____8901;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8902 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____8902))
{return or__3824__auto____8902;
} else
{var or__3824__auto____8903 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____8903))
{return or__3824__auto____8903;
} else
{var or__3824__auto____8904 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____8904))
{return or__3824__auto____8904;
} else
{var or__3824__auto____8905 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____8905))
{return or__3824__auto____8905;
} else
{var or__3824__auto____8906 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____8906))
{return or__3824__auto____8906;
} else
{var or__3824__auto____8907 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____8907))
{return or__3824__auto____8907;
} else
{var or__3824__auto____8908 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____8908))
{return or__3824__auto____8908;
} else
{var or__3824__auto____8909 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____8909))
{return or__3824__auto____8909;
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
var G__8926__delegate = function (x,y,z,args){
var or__3824__auto____8910 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8910))
{return or__3824__auto____8910;
} else
{return cljs.core.some.call(null,(function (p1__8606_SHARP_){
var or__3824__auto____8911 = p1.call(null,p1__8606_SHARP_);
if(cljs.core.truth_(or__3824__auto____8911))
{return or__3824__auto____8911;
} else
{var or__3824__auto____8912 = p2.call(null,p1__8606_SHARP_);
if(cljs.core.truth_(or__3824__auto____8912))
{return or__3824__auto____8912;
} else
{return p3.call(null,p1__8606_SHARP_);
}
}
}),args);
}
};
var G__8926 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8926__delegate.call(this, x, y, z, args);
};
G__8926.cljs$lang$maxFixedArity = 3;
G__8926.cljs$lang$applyTo = (function (arglist__8927){
var x = cljs.core.first(arglist__8927);
var y = cljs.core.first(cljs.core.next(arglist__8927));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8927)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8927)));
return G__8926__delegate(x, y, z, args);
});
G__8926.cljs$lang$arity$variadic = G__8926__delegate;
return G__8926;
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
var G__8928__delegate = function (p1,p2,p3,ps){
var ps__8913 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__8607_SHARP_){
return p1__8607_SHARP_.call(null,x);
}),ps__8913);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8608_SHARP_){
var or__3824__auto____8918 = p1__8608_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8918))
{return or__3824__auto____8918;
} else
{return p1__8608_SHARP_.call(null,y);
}
}),ps__8913);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8609_SHARP_){
var or__3824__auto____8919 = p1__8609_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____8919))
{return or__3824__auto____8919;
} else
{var or__3824__auto____8920 = p1__8609_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____8920))
{return or__3824__auto____8920;
} else
{return p1__8609_SHARP_.call(null,z);
}
}
}),ps__8913);
});
var spn__4 = (function() { 
var G__8929__delegate = function (x,y,z,args){
var or__3824__auto____8921 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____8921))
{return or__3824__auto____8921;
} else
{return cljs.core.some.call(null,(function (p1__8610_SHARP_){
return cljs.core.some.call(null,p1__8610_SHARP_,args);
}),ps__8913);
}
};
var G__8929 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8929__delegate.call(this, x, y, z, args);
};
G__8929.cljs$lang$maxFixedArity = 3;
G__8929.cljs$lang$applyTo = (function (arglist__8930){
var x = cljs.core.first(arglist__8930);
var y = cljs.core.first(cljs.core.next(arglist__8930));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8930)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8930)));
return G__8929__delegate(x, y, z, args);
});
G__8929.cljs$lang$arity$variadic = G__8929__delegate;
return G__8929;
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
var G__8928 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8928__delegate.call(this, p1, p2, p3, ps);
};
G__8928.cljs$lang$maxFixedArity = 3;
G__8928.cljs$lang$applyTo = (function (arglist__8931){
var p1 = cljs.core.first(arglist__8931);
var p2 = cljs.core.first(cljs.core.next(arglist__8931));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8931)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8931)));
return G__8928__delegate(p1, p2, p3, ps);
});
G__8928.cljs$lang$arity$variadic = G__8928__delegate;
return G__8928;
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
var temp__3974__auto____8950 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8950)
{var s__8951 = temp__3974__auto____8950;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8951))
{var c__8952 = cljs.core.chunk_first.call(null,s__8951);
var size__8953 = cljs.core.count.call(null,c__8952);
var b__8954 = cljs.core.chunk_buffer.call(null,size__8953);
var n__2527__auto____8955 = size__8953;
var i__8956 = 0;
while(true){
if((i__8956 < n__2527__auto____8955))
{cljs.core.chunk_append.call(null,b__8954,f.call(null,cljs.core._nth.call(null,c__8952,i__8956)));
{
var G__8968 = (i__8956 + 1);
i__8956 = G__8968;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8954),map.call(null,f,cljs.core.chunk_rest.call(null,s__8951)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8951)),map.call(null,f,cljs.core.rest.call(null,s__8951)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8957 = cljs.core.seq.call(null,c1);
var s2__8958 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____8959 = s1__8957;
if(and__3822__auto____8959)
{return s2__8958;
} else
{return and__3822__auto____8959;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8957),cljs.core.first.call(null,s2__8958)),map.call(null,f,cljs.core.rest.call(null,s1__8957),cljs.core.rest.call(null,s2__8958)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8960 = cljs.core.seq.call(null,c1);
var s2__8961 = cljs.core.seq.call(null,c2);
var s3__8962 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____8963 = s1__8960;
if(and__3822__auto____8963)
{var and__3822__auto____8964 = s2__8961;
if(and__3822__auto____8964)
{return s3__8962;
} else
{return and__3822__auto____8964;
}
} else
{return and__3822__auto____8963;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8960),cljs.core.first.call(null,s2__8961),cljs.core.first.call(null,s3__8962)),map.call(null,f,cljs.core.rest.call(null,s1__8960),cljs.core.rest.call(null,s2__8961),cljs.core.rest.call(null,s3__8962)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8969__delegate = function (f,c1,c2,c3,colls){
var step__8967 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8966 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8966))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8966),step.call(null,map.call(null,cljs.core.rest,ss__8966)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__8771_SHARP_){
return cljs.core.apply.call(null,f,p1__8771_SHARP_);
}),step__8967.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8969 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8969__delegate.call(this, f, c1, c2, c3, colls);
};
G__8969.cljs$lang$maxFixedArity = 4;
G__8969.cljs$lang$applyTo = (function (arglist__8970){
var f = cljs.core.first(arglist__8970);
var c1 = cljs.core.first(cljs.core.next(arglist__8970));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8970)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8970))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8970))));
return G__8969__delegate(f, c1, c2, c3, colls);
});
G__8969.cljs$lang$arity$variadic = G__8969__delegate;
return G__8969;
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
{var temp__3974__auto____8973 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8973)
{var s__8974 = temp__3974__auto____8973;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8974),take.call(null,(n - 1),cljs.core.rest.call(null,s__8974)));
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
var step__8980 = (function (n,coll){
while(true){
var s__8978 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8979 = (n > 0);
if(and__3822__auto____8979)
{return s__8978;
} else
{return and__3822__auto____8979;
}
})()))
{{
var G__8981 = (n - 1);
var G__8982 = cljs.core.rest.call(null,s__8978);
n = G__8981;
coll = G__8982;
continue;
}
} else
{return s__8978;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8980.call(null,n,coll);
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
var s__8985 = cljs.core.seq.call(null,coll);
var lead__8986 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8986)
{{
var G__8987 = cljs.core.next.call(null,s__8985);
var G__8988 = cljs.core.next.call(null,lead__8986);
s__8985 = G__8987;
lead__8986 = G__8988;
continue;
}
} else
{return s__8985;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8994 = (function (pred,coll){
while(true){
var s__8992 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____8993 = s__8992;
if(and__3822__auto____8993)
{return pred.call(null,cljs.core.first.call(null,s__8992));
} else
{return and__3822__auto____8993;
}
})()))
{{
var G__8995 = pred;
var G__8996 = cljs.core.rest.call(null,s__8992);
pred = G__8995;
coll = G__8996;
continue;
}
} else
{return s__8992;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8994.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8999 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____8999)
{var s__9000 = temp__3974__auto____8999;
return cljs.core.concat.call(null,s__9000,cycle.call(null,s__9000));
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
var s1__9005 = cljs.core.seq.call(null,c1);
var s2__9006 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____9007 = s1__9005;
if(and__3822__auto____9007)
{return s2__9006;
} else
{return and__3822__auto____9007;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__9005),cljs.core.cons.call(null,cljs.core.first.call(null,s2__9006),interleave.call(null,cljs.core.rest.call(null,s1__9005),cljs.core.rest.call(null,s2__9006))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__9009__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9008 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9008))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__9008),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__9008)));
} else
{return null;
}
}),null));
};
var G__9009 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9009__delegate.call(this, c1, c2, colls);
};
G__9009.cljs$lang$maxFixedArity = 2;
G__9009.cljs$lang$applyTo = (function (arglist__9010){
var c1 = cljs.core.first(arglist__9010);
var c2 = cljs.core.first(cljs.core.next(arglist__9010));
var colls = cljs.core.rest(cljs.core.next(arglist__9010));
return G__9009__delegate(c1, c2, colls);
});
G__9009.cljs$lang$arity$variadic = G__9009__delegate;
return G__9009;
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
var cat__9020 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9018 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9018)
{var coll__9019 = temp__3971__auto____9018;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__9019),cat.call(null,cljs.core.rest.call(null,coll__9019),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__9020.call(null,null,colls);
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
var G__9021__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__9021 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9021__delegate.call(this, f, coll, colls);
};
G__9021.cljs$lang$maxFixedArity = 2;
G__9021.cljs$lang$applyTo = (function (arglist__9022){
var f = cljs.core.first(arglist__9022);
var coll = cljs.core.first(cljs.core.next(arglist__9022));
var colls = cljs.core.rest(cljs.core.next(arglist__9022));
return G__9021__delegate(f, coll, colls);
});
G__9021.cljs$lang$arity$variadic = G__9021__delegate;
return G__9021;
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
var temp__3974__auto____9032 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9032)
{var s__9033 = temp__3974__auto____9032;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9033))
{var c__9034 = cljs.core.chunk_first.call(null,s__9033);
var size__9035 = cljs.core.count.call(null,c__9034);
var b__9036 = cljs.core.chunk_buffer.call(null,size__9035);
var n__2527__auto____9037 = size__9035;
var i__9038 = 0;
while(true){
if((i__9038 < n__2527__auto____9037))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__9034,i__9038))))
{cljs.core.chunk_append.call(null,b__9036,cljs.core._nth.call(null,c__9034,i__9038));
} else
{}
{
var G__9041 = (i__9038 + 1);
i__9038 = G__9041;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9036),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__9033)));
} else
{var f__9039 = cljs.core.first.call(null,s__9033);
var r__9040 = cljs.core.rest.call(null,s__9033);
if(cljs.core.truth_(pred.call(null,f__9039)))
{return cljs.core.cons.call(null,f__9039,filter.call(null,pred,r__9040));
} else
{return filter.call(null,pred,r__9040);
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
var walk__9044 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__9044.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__9042_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__9042_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__9048__9049 = to;
if(G__9048__9049)
{if((function (){var or__3824__auto____9050 = (G__9048__9049.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____9050)
{return or__3824__auto____9050;
} else
{return G__9048__9049.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__9048__9049.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__9048__9049);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__9048__9049);
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
var G__9051__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__9051 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9051__delegate.call(this, f, c1, c2, c3, colls);
};
G__9051.cljs$lang$maxFixedArity = 4;
G__9051.cljs$lang$applyTo = (function (arglist__9052){
var f = cljs.core.first(arglist__9052);
var c1 = cljs.core.first(cljs.core.next(arglist__9052));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9052)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9052))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9052))));
return G__9051__delegate(f, c1, c2, c3, colls);
});
G__9051.cljs$lang$arity$variadic = G__9051__delegate;
return G__9051;
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
var temp__3974__auto____9059 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9059)
{var s__9060 = temp__3974__auto____9059;
var p__9061 = cljs.core.take.call(null,n,s__9060);
if((n === cljs.core.count.call(null,p__9061)))
{return cljs.core.cons.call(null,p__9061,partition.call(null,n,step,cljs.core.drop.call(null,step,s__9060)));
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
var temp__3974__auto____9062 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9062)
{var s__9063 = temp__3974__auto____9062;
var p__9064 = cljs.core.take.call(null,n,s__9063);
if((n === cljs.core.count.call(null,p__9064)))
{return cljs.core.cons.call(null,p__9064,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__9063)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__9064,pad)));
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
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__9069 = cljs.core.lookup_sentinel;
var m__9070 = m;
var ks__9071 = cljs.core.seq.call(null,ks);
while(true){
if(ks__9071)
{var m__9072 = cljs.core._lookup.call(null,m__9070,cljs.core.first.call(null,ks__9071),sentinel__9069);
if((sentinel__9069 === m__9072))
{return not_found;
} else
{{
var G__9073 = sentinel__9069;
var G__9074 = m__9072;
var G__9075 = cljs.core.next.call(null,ks__9071);
sentinel__9069 = G__9073;
m__9070 = G__9074;
ks__9071 = G__9075;
continue;
}
}
} else
{return m__9070;
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
cljs.core.assoc_in = (function assoc_in(m,p__9076,v){
var vec__9081__9082 = p__9076;
var k__9083 = cljs.core.nth.call(null,vec__9081__9082,0,null);
var ks__9084 = cljs.core.nthnext.call(null,vec__9081__9082,1);
if(cljs.core.truth_(ks__9084))
{return cljs.core.assoc.call(null,m,k__9083,assoc_in.call(null,cljs.core._lookup.call(null,m,k__9083,null),ks__9084,v));
} else
{return cljs.core.assoc.call(null,m,k__9083,v);
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
var update_in__delegate = function (m,p__9085,f,args){
var vec__9090__9091 = p__9085;
var k__9092 = cljs.core.nth.call(null,vec__9090__9091,0,null);
var ks__9093 = cljs.core.nthnext.call(null,vec__9090__9091,1);
if(cljs.core.truth_(ks__9093))
{return cljs.core.assoc.call(null,m,k__9092,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__9092,null),ks__9093,f,args));
} else
{return cljs.core.assoc.call(null,m,k__9092,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__9092,null),args));
}
};
var update_in = function (m,p__9085,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__9085, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__9094){
var m = cljs.core.first(arglist__9094);
var p__9085 = cljs.core.first(cljs.core.next(arglist__9094));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9094)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9094)));
return update_in__delegate(m, p__9085, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9097 = this;
var h__2192__auto____9098 = this__9097.__hash;
if(!((h__2192__auto____9098 == null)))
{return h__2192__auto____9098;
} else
{var h__2192__auto____9099 = cljs.core.hash_coll.call(null,coll);
this__9097.__hash = h__2192__auto____9099;
return h__2192__auto____9099;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9100 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9101 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9102 = this;
var new_array__9103 = this__9102.array.slice();
(new_array__9103[k] = v);
return (new cljs.core.Vector(this__9102.meta,new_array__9103,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__9134 = null;
var G__9134__2 = (function (this_sym9104,k){
var this__9106 = this;
var this_sym9104__9107 = this;
var coll__9108 = this_sym9104__9107;
return coll__9108.cljs$core$ILookup$_lookup$arity$2(coll__9108,k);
});
var G__9134__3 = (function (this_sym9105,k,not_found){
var this__9106 = this;
var this_sym9105__9109 = this;
var coll__9110 = this_sym9105__9109;
return coll__9110.cljs$core$ILookup$_lookup$arity$3(coll__9110,k,not_found);
});
G__9134 = function(this_sym9105,k,not_found){
switch(arguments.length){
case 2:
return G__9134__2.call(this,this_sym9105,k);
case 3:
return G__9134__3.call(this,this_sym9105,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9134;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym9095,args9096){
var this__9111 = this;
return this_sym9095.call.apply(this_sym9095,[this_sym9095].concat(args9096.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9112 = this;
var new_array__9113 = this__9112.array.slice();
new_array__9113.push(o);
return (new cljs.core.Vector(this__9112.meta,new_array__9113,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__9114 = this;
var this__9115 = this;
return cljs.core.pr_str.call(null,this__9115);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9116 = this;
return cljs.core.ci_reduce.call(null,this__9116.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9117 = this;
return cljs.core.ci_reduce.call(null,this__9117.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9118 = this;
if((this__9118.array.length > 0))
{var vector_seq__9119 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__9118.array.length))
{return cljs.core.cons.call(null,(this__9118.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__9119.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9120 = this;
return this__9120.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9121 = this;
var count__9122 = this__9121.array.length;
if((count__9122 > 0))
{return (this__9121.array[(count__9122 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9123 = this;
if((this__9123.array.length > 0))
{var new_array__9124 = this__9123.array.slice();
new_array__9124.pop();
return (new cljs.core.Vector(this__9123.meta,new_array__9124,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9125 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9126 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9127 = this;
return (new cljs.core.Vector(meta,this__9127.array,this__9127.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9128 = this;
return this__9128.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9129 = this;
if((function (){var and__3822__auto____9130 = (0 <= n);
if(and__3822__auto____9130)
{return (n < this__9129.array.length);
} else
{return and__3822__auto____9130;
}
})())
{return (this__9129.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9131 = this;
if((function (){var and__3822__auto____9132 = (0 <= n);
if(and__3822__auto____9132)
{return (n < this__9131.array.length);
} else
{return and__3822__auto____9132;
}
})())
{return (this__9131.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9133 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9133.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2310__auto__){
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
var cnt__9136 = pv.cnt;
if((cnt__9136 < 32))
{return 0;
} else
{return (((cnt__9136 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__9142 = level;
var ret__9143 = node;
while(true){
if((ll__9142 === 0))
{return ret__9143;
} else
{var embed__9144 = ret__9143;
var r__9145 = cljs.core.pv_fresh_node.call(null,edit);
var ___9146 = cljs.core.pv_aset.call(null,r__9145,0,embed__9144);
{
var G__9147 = (ll__9142 - 5);
var G__9148 = r__9145;
ll__9142 = G__9147;
ret__9143 = G__9148;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__9154 = cljs.core.pv_clone_node.call(null,parent);
var subidx__9155 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__9154,subidx__9155,tailnode);
return ret__9154;
} else
{var child__9156 = cljs.core.pv_aget.call(null,parent,subidx__9155);
if(!((child__9156 == null)))
{var node_to_insert__9157 = push_tail.call(null,pv,(level - 5),child__9156,tailnode);
cljs.core.pv_aset.call(null,ret__9154,subidx__9155,node_to_insert__9157);
return ret__9154;
} else
{var node_to_insert__9158 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__9154,subidx__9155,node_to_insert__9158);
return ret__9154;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____9162 = (0 <= i);
if(and__3822__auto____9162)
{return (i < pv.cnt);
} else
{return and__3822__auto____9162;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__9163 = pv.root;
var level__9164 = pv.shift;
while(true){
if((level__9164 > 0))
{{
var G__9165 = cljs.core.pv_aget.call(null,node__9163,((i >>> level__9164) & 31));
var G__9166 = (level__9164 - 5);
node__9163 = G__9165;
level__9164 = G__9166;
continue;
}
} else
{return node__9163.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__9169 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__9169,(i & 31),val);
return ret__9169;
} else
{var subidx__9170 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__9169,subidx__9170,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__9170),i,val));
return ret__9169;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__9176 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9177 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__9176));
if((function (){var and__3822__auto____9178 = (new_child__9177 == null);
if(and__3822__auto____9178)
{return (subidx__9176 === 0);
} else
{return and__3822__auto____9178;
}
})())
{return null;
} else
{var ret__9179 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__9179,subidx__9176,new_child__9177);
return ret__9179;
}
} else
{if((subidx__9176 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__9180 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__9180,subidx__9176,null);
return ret__9180;
} else
{return null;
}
}
}
});

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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9183 = this;
return (new cljs.core.TransientVector(this__9183.cnt,this__9183.shift,cljs.core.tv_editable_root.call(null,this__9183.root),cljs.core.tv_editable_tail.call(null,this__9183.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9184 = this;
var h__2192__auto____9185 = this__9184.__hash;
if(!((h__2192__auto____9185 == null)))
{return h__2192__auto____9185;
} else
{var h__2192__auto____9186 = cljs.core.hash_coll.call(null,coll);
this__9184.__hash = h__2192__auto____9186;
return h__2192__auto____9186;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9187 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9188 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9189 = this;
if((function (){var and__3822__auto____9190 = (0 <= k);
if(and__3822__auto____9190)
{return (k < this__9189.cnt);
} else
{return and__3822__auto____9190;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__9191 = this__9189.tail.slice();
(new_tail__9191[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__9189.meta,this__9189.cnt,this__9189.shift,this__9189.root,new_tail__9191,null));
} else
{return (new cljs.core.PersistentVector(this__9189.meta,this__9189.cnt,this__9189.shift,cljs.core.do_assoc.call(null,coll,this__9189.shift,this__9189.root,k,v),this__9189.tail,null));
}
} else
{if((k === this__9189.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__9189.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__9239 = null;
var G__9239__2 = (function (this_sym9192,k){
var this__9194 = this;
var this_sym9192__9195 = this;
var coll__9196 = this_sym9192__9195;
return coll__9196.cljs$core$ILookup$_lookup$arity$2(coll__9196,k);
});
var G__9239__3 = (function (this_sym9193,k,not_found){
var this__9194 = this;
var this_sym9193__9197 = this;
var coll__9198 = this_sym9193__9197;
return coll__9198.cljs$core$ILookup$_lookup$arity$3(coll__9198,k,not_found);
});
G__9239 = function(this_sym9193,k,not_found){
switch(arguments.length){
case 2:
return G__9239__2.call(this,this_sym9193,k);
case 3:
return G__9239__3.call(this,this_sym9193,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9239;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym9181,args9182){
var this__9199 = this;
return this_sym9181.call.apply(this_sym9181,[this_sym9181].concat(args9182.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__9200 = this;
var step_init__9201 = [0,init];
var i__9202 = 0;
while(true){
if((i__9202 < this__9200.cnt))
{var arr__9203 = cljs.core.array_for.call(null,v,i__9202);
var len__9204 = arr__9203.length;
var init__9208 = (function (){var j__9205 = 0;
var init__9206 = (step_init__9201[1]);
while(true){
if((j__9205 < len__9204))
{var init__9207 = f.call(null,init__9206,(j__9205 + i__9202),(arr__9203[j__9205]));
if(cljs.core.reduced_QMARK_.call(null,init__9207))
{return init__9207;
} else
{{
var G__9240 = (j__9205 + 1);
var G__9241 = init__9207;
j__9205 = G__9240;
init__9206 = G__9241;
continue;
}
}
} else
{(step_init__9201[0] = len__9204);
(step_init__9201[1] = init__9206);
return init__9206;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9208))
{return cljs.core.deref.call(null,init__9208);
} else
{{
var G__9242 = (i__9202 + (step_init__9201[0]));
i__9202 = G__9242;
continue;
}
}
} else
{return (step_init__9201[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9209 = this;
if(((this__9209.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__9210 = this__9209.tail.slice();
new_tail__9210.push(o);
return (new cljs.core.PersistentVector(this__9209.meta,(this__9209.cnt + 1),this__9209.shift,this__9209.root,new_tail__9210,null));
} else
{var root_overflow_QMARK___9211 = ((this__9209.cnt >>> 5) > (1 << this__9209.shift));
var new_shift__9212 = ((root_overflow_QMARK___9211)?(this__9209.shift + 5):this__9209.shift);
var new_root__9214 = ((root_overflow_QMARK___9211)?(function (){var n_r__9213 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__9213,0,this__9209.root);
cljs.core.pv_aset.call(null,n_r__9213,1,cljs.core.new_path.call(null,null,this__9209.shift,(new cljs.core.VectorNode(null,this__9209.tail))));
return n_r__9213;
})():cljs.core.push_tail.call(null,coll,this__9209.shift,this__9209.root,(new cljs.core.VectorNode(null,this__9209.tail))));
return (new cljs.core.PersistentVector(this__9209.meta,(this__9209.cnt + 1),new_shift__9212,new_root__9214,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9215 = this;
if((this__9215.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__9215.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__9216 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__9217 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__9218 = this;
var this__9219 = this;
return cljs.core.pr_str.call(null,this__9219);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9220 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9221 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9222 = this;
if((this__9222.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9223 = this;
return this__9223.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9224 = this;
if((this__9224.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__9224.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9225 = this;
if((this__9225.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9225.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9225.meta);
} else
{if((1 < (this__9225.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__9225.meta,(this__9225.cnt - 1),this__9225.shift,this__9225.root,this__9225.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__9226 = cljs.core.array_for.call(null,coll,(this__9225.cnt - 2));
var nr__9227 = cljs.core.pop_tail.call(null,coll,this__9225.shift,this__9225.root);
var new_root__9228 = (((nr__9227 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__9227);
var cnt_1__9229 = (this__9225.cnt - 1);
if((function (){var and__3822__auto____9230 = (5 < this__9225.shift);
if(and__3822__auto____9230)
{return (cljs.core.pv_aget.call(null,new_root__9228,1) == null);
} else
{return and__3822__auto____9230;
}
})())
{return (new cljs.core.PersistentVector(this__9225.meta,cnt_1__9229,(this__9225.shift - 5),cljs.core.pv_aget.call(null,new_root__9228,0),new_tail__9226,null));
} else
{return (new cljs.core.PersistentVector(this__9225.meta,cnt_1__9229,this__9225.shift,new_root__9228,new_tail__9226,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9231 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9232 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9233 = this;
return (new cljs.core.PersistentVector(meta,this__9233.cnt,this__9233.shift,this__9233.root,this__9233.tail,this__9233.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9234 = this;
return this__9234.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9235 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9236 = this;
if((function (){var and__3822__auto____9237 = (0 <= n);
if(and__3822__auto____9237)
{return (n < this__9236.cnt);
} else
{return and__3822__auto____9237;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9238 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9238.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__9243 = xs.length;
var xs__9244 = (((no_clone === true))?xs:xs.slice());
if((l__9243 < 32))
{return (new cljs.core.PersistentVector(null,l__9243,5,cljs.core.PersistentVector.EMPTY_NODE,xs__9244,null));
} else
{var node__9245 = xs__9244.slice(0,32);
var v__9246 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__9245,null));
var i__9247 = 32;
var out__9248 = cljs.core._as_transient.call(null,v__9246);
while(true){
if((i__9247 < l__9243))
{{
var G__9249 = (i__9247 + 1);
var G__9250 = cljs.core.conj_BANG_.call(null,out__9248,(xs__9244[i__9247]));
i__9247 = G__9249;
out__9248 = G__9250;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9248);
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
vector.cljs$lang$applyTo = (function (arglist__9251){
var args = cljs.core.seq(arglist__9251);;
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9252 = this;
if(((this__9252.off + 1) < this__9252.node.length))
{var s__9253 = cljs.core.chunked_seq.call(null,this__9252.vec,this__9252.node,this__9252.i,(this__9252.off + 1));
if((s__9253 == null))
{return null;
} else
{return s__9253;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9254 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9255 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9256 = this;
return (this__9256.node[this__9256.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9257 = this;
if(((this__9257.off + 1) < this__9257.node.length))
{var s__9258 = cljs.core.chunked_seq.call(null,this__9257.vec,this__9257.node,this__9257.i,(this__9257.off + 1));
if((s__9258 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9258;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9259 = this;
var l__9260 = this__9259.node.length;
var s__9261 = ((((this__9259.i + l__9260) < cljs.core._count.call(null,this__9259.vec)))?cljs.core.chunked_seq.call(null,this__9259.vec,(this__9259.i + l__9260),0):null);
if((s__9261 == null))
{return null;
} else
{return s__9261;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9262 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9263 = this;
return cljs.core.chunked_seq.call(null,this__9263.vec,this__9263.node,this__9263.i,this__9263.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__9264 = this;
return this__9264.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9265 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9265.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9266 = this;
return cljs.core.array_chunk.call(null,this__9266.node,this__9266.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9267 = this;
var l__9268 = this__9267.node.length;
var s__9269 = ((((this__9267.i + l__9268) < cljs.core._count.call(null,this__9267.vec)))?cljs.core.chunked_seq.call(null,this__9267.vec,(this__9267.i + l__9268),0):null);
if((s__9269 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9269;
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9272 = this;
var h__2192__auto____9273 = this__9272.__hash;
if(!((h__2192__auto____9273 == null)))
{return h__2192__auto____9273;
} else
{var h__2192__auto____9274 = cljs.core.hash_coll.call(null,coll);
this__9272.__hash = h__2192__auto____9274;
return h__2192__auto____9274;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9275 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9276 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__9277 = this;
var v_pos__9278 = (this__9277.start + key);
return (new cljs.core.Subvec(this__9277.meta,cljs.core._assoc.call(null,this__9277.v,v_pos__9278,val),this__9277.start,((this__9277.end > (v_pos__9278 + 1)) ? this__9277.end : (v_pos__9278 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__9304 = null;
var G__9304__2 = (function (this_sym9279,k){
var this__9281 = this;
var this_sym9279__9282 = this;
var coll__9283 = this_sym9279__9282;
return coll__9283.cljs$core$ILookup$_lookup$arity$2(coll__9283,k);
});
var G__9304__3 = (function (this_sym9280,k,not_found){
var this__9281 = this;
var this_sym9280__9284 = this;
var coll__9285 = this_sym9280__9284;
return coll__9285.cljs$core$ILookup$_lookup$arity$3(coll__9285,k,not_found);
});
G__9304 = function(this_sym9280,k,not_found){
switch(arguments.length){
case 2:
return G__9304__2.call(this,this_sym9280,k);
case 3:
return G__9304__3.call(this,this_sym9280,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9304;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym9270,args9271){
var this__9286 = this;
return this_sym9270.call.apply(this_sym9270,[this_sym9270].concat(args9271.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9287 = this;
return (new cljs.core.Subvec(this__9287.meta,cljs.core._assoc_n.call(null,this__9287.v,this__9287.end,o),this__9287.start,(this__9287.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__9288 = this;
var this__9289 = this;
return cljs.core.pr_str.call(null,this__9289);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9290 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9291 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9292 = this;
var subvec_seq__9293 = (function subvec_seq(i){
if((i === this__9292.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__9292.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__9293.call(null,this__9292.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9294 = this;
return (this__9294.end - this__9294.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9295 = this;
return cljs.core._nth.call(null,this__9295.v,(this__9295.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9296 = this;
if((this__9296.start === this__9296.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__9296.meta,this__9296.v,this__9296.start,(this__9296.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9297 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9298 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9299 = this;
return (new cljs.core.Subvec(meta,this__9299.v,this__9299.start,this__9299.end,this__9299.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9300 = this;
return this__9300.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9301 = this;
return cljs.core._nth.call(null,this__9301.v,(this__9301.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9302 = this;
return cljs.core._nth.call(null,this__9302.v,(this__9302.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9303 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9303.meta);
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
var ret__9306 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__9306,0,tl.length);
return ret__9306;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__9310 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__9311 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__9310,subidx__9311,(((level === 5))?tail_node:(function (){var child__9312 = cljs.core.pv_aget.call(null,ret__9310,subidx__9311);
if(!((child__9312 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__9312,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__9310;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__9317 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__9318 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9319 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__9317,subidx__9318));
if((function (){var and__3822__auto____9320 = (new_child__9319 == null);
if(and__3822__auto____9320)
{return (subidx__9318 === 0);
} else
{return and__3822__auto____9320;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__9317,subidx__9318,new_child__9319);
return node__9317;
}
} else
{if((subidx__9318 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__9317,subidx__9318,null);
return node__9317;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____9325 = (0 <= i);
if(and__3822__auto____9325)
{return (i < tv.cnt);
} else
{return and__3822__auto____9325;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__9326 = tv.root;
var node__9327 = root__9326;
var level__9328 = tv.shift;
while(true){
if((level__9328 > 0))
{{
var G__9329 = cljs.core.tv_ensure_editable.call(null,root__9326.edit,cljs.core.pv_aget.call(null,node__9327,((i >>> level__9328) & 31)));
var G__9330 = (level__9328 - 5);
node__9327 = G__9329;
level__9328 = G__9330;
continue;
}
} else
{return node__9327.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__9370 = null;
var G__9370__2 = (function (this_sym9333,k){
var this__9335 = this;
var this_sym9333__9336 = this;
var coll__9337 = this_sym9333__9336;
return coll__9337.cljs$core$ILookup$_lookup$arity$2(coll__9337,k);
});
var G__9370__3 = (function (this_sym9334,k,not_found){
var this__9335 = this;
var this_sym9334__9338 = this;
var coll__9339 = this_sym9334__9338;
return coll__9339.cljs$core$ILookup$_lookup$arity$3(coll__9339,k,not_found);
});
G__9370 = function(this_sym9334,k,not_found){
switch(arguments.length){
case 2:
return G__9370__2.call(this,this_sym9334,k);
case 3:
return G__9370__3.call(this,this_sym9334,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9370;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym9331,args9332){
var this__9340 = this;
return this_sym9331.call.apply(this_sym9331,[this_sym9331].concat(args9332.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9341 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9342 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9343 = this;
if(this__9343.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9344 = this;
if((function (){var and__3822__auto____9345 = (0 <= n);
if(and__3822__auto____9345)
{return (n < this__9344.cnt);
} else
{return and__3822__auto____9345;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9346 = this;
if(this__9346.root.edit)
{return this__9346.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__9347 = this;
if(this__9347.root.edit)
{if((function (){var and__3822__auto____9348 = (0 <= n);
if(and__3822__auto____9348)
{return (n < this__9347.cnt);
} else
{return and__3822__auto____9348;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__9347.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__9353 = (function go(level,node){
var node__9351 = cljs.core.tv_ensure_editable.call(null,this__9347.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__9351,(n & 31),val);
return node__9351;
} else
{var subidx__9352 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__9351,subidx__9352,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__9351,subidx__9352)));
return node__9351;
}
}).call(null,this__9347.shift,this__9347.root);
this__9347.root = new_root__9353;
return tcoll;
}
} else
{if((n === this__9347.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__9347.cnt)].join('')));
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
var this__9354 = this;
if(this__9354.root.edit)
{if((this__9354.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9354.cnt))
{this__9354.cnt = 0;
return tcoll;
} else
{if((((this__9354.cnt - 1) & 31) > 0))
{this__9354.cnt = (this__9354.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__9355 = cljs.core.editable_array_for.call(null,tcoll,(this__9354.cnt - 2));
var new_root__9357 = (function (){var nr__9356 = cljs.core.tv_pop_tail.call(null,tcoll,this__9354.shift,this__9354.root);
if(!((nr__9356 == null)))
{return nr__9356;
} else
{return (new cljs.core.VectorNode(this__9354.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____9358 = (5 < this__9354.shift);
if(and__3822__auto____9358)
{return (cljs.core.pv_aget.call(null,new_root__9357,1) == null);
} else
{return and__3822__auto____9358;
}
})())
{var new_root__9359 = cljs.core.tv_ensure_editable.call(null,this__9354.root.edit,cljs.core.pv_aget.call(null,new_root__9357,0));
this__9354.root = new_root__9359;
this__9354.shift = (this__9354.shift - 5);
this__9354.cnt = (this__9354.cnt - 1);
this__9354.tail = new_tail__9355;
return tcoll;
} else
{this__9354.root = new_root__9357;
this__9354.cnt = (this__9354.cnt - 1);
this__9354.tail = new_tail__9355;
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
var this__9360 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9361 = this;
if(this__9361.root.edit)
{if(((this__9361.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__9361.tail[(this__9361.cnt & 31)] = o);
this__9361.cnt = (this__9361.cnt + 1);
return tcoll;
} else
{var tail_node__9362 = (new cljs.core.VectorNode(this__9361.root.edit,this__9361.tail));
var new_tail__9363 = cljs.core.make_array.call(null,32);
(new_tail__9363[0] = o);
this__9361.tail = new_tail__9363;
if(((this__9361.cnt >>> 5) > (1 << this__9361.shift)))
{var new_root_array__9364 = cljs.core.make_array.call(null,32);
var new_shift__9365 = (this__9361.shift + 5);
(new_root_array__9364[0] = this__9361.root);
(new_root_array__9364[1] = cljs.core.new_path.call(null,this__9361.root.edit,this__9361.shift,tail_node__9362));
this__9361.root = (new cljs.core.VectorNode(this__9361.root.edit,new_root_array__9364));
this__9361.shift = new_shift__9365;
this__9361.cnt = (this__9361.cnt + 1);
return tcoll;
} else
{var new_root__9366 = cljs.core.tv_push_tail.call(null,tcoll,this__9361.shift,this__9361.root,tail_node__9362);
this__9361.root = new_root__9366;
this__9361.cnt = (this__9361.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9367 = this;
if(this__9367.root.edit)
{this__9367.root.edit = null;
var len__9368 = (this__9367.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__9369 = cljs.core.make_array.call(null,len__9368);
cljs.core.array_copy.call(null,this__9367.tail,0,trimmed_tail__9369,0,len__9368);
return (new cljs.core.PersistentVector(null,this__9367.cnt,this__9367.shift,this__9367.root,trimmed_tail__9369,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9371 = this;
var h__2192__auto____9372 = this__9371.__hash;
if(!((h__2192__auto____9372 == null)))
{return h__2192__auto____9372;
} else
{var h__2192__auto____9373 = cljs.core.hash_coll.call(null,coll);
this__9371.__hash = h__2192__auto____9373;
return h__2192__auto____9373;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9374 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__9375 = this;
var this__9376 = this;
return cljs.core.pr_str.call(null,this__9376);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9377 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9378 = this;
return cljs.core._first.call(null,this__9378.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9379 = this;
var temp__3971__auto____9380 = cljs.core.next.call(null,this__9379.front);
if(temp__3971__auto____9380)
{var f1__9381 = temp__3971__auto____9380;
return (new cljs.core.PersistentQueueSeq(this__9379.meta,f1__9381,this__9379.rear,null));
} else
{if((this__9379.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__9379.meta,this__9379.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9382 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9383 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__9383.front,this__9383.rear,this__9383.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9384 = this;
return this__9384.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9385 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9385.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9386 = this;
var h__2192__auto____9387 = this__9386.__hash;
if(!((h__2192__auto____9387 == null)))
{return h__2192__auto____9387;
} else
{var h__2192__auto____9388 = cljs.core.hash_coll.call(null,coll);
this__9386.__hash = h__2192__auto____9388;
return h__2192__auto____9388;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9389 = this;
if(cljs.core.truth_(this__9389.front))
{return (new cljs.core.PersistentQueue(this__9389.meta,(this__9389.count + 1),this__9389.front,cljs.core.conj.call(null,(function (){var or__3824__auto____9390 = this__9389.rear;
if(cljs.core.truth_(or__3824__auto____9390))
{return or__3824__auto____9390;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__9389.meta,(this__9389.count + 1),cljs.core.conj.call(null,this__9389.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__9391 = this;
var this__9392 = this;
return cljs.core.pr_str.call(null,this__9392);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9393 = this;
var rear__9394 = cljs.core.seq.call(null,this__9393.rear);
if(cljs.core.truth_((function (){var or__3824__auto____9395 = this__9393.front;
if(cljs.core.truth_(or__3824__auto____9395))
{return or__3824__auto____9395;
} else
{return rear__9394;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__9393.front,cljs.core.seq.call(null,rear__9394),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9396 = this;
return this__9396.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9397 = this;
return cljs.core._first.call(null,this__9397.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9398 = this;
if(cljs.core.truth_(this__9398.front))
{var temp__3971__auto____9399 = cljs.core.next.call(null,this__9398.front);
if(temp__3971__auto____9399)
{var f1__9400 = temp__3971__auto____9399;
return (new cljs.core.PersistentQueue(this__9398.meta,(this__9398.count - 1),f1__9400,this__9398.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__9398.meta,(this__9398.count - 1),cljs.core.seq.call(null,this__9398.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9401 = this;
return cljs.core.first.call(null,this__9401.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9402 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9403 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9404 = this;
return (new cljs.core.PersistentQueue(meta,this__9404.count,this__9404.front,this__9404.rear,this__9404.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9405 = this;
return this__9405.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9406 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9407 = this;
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
var len__9410 = array.length;
var i__9411 = 0;
while(true){
if((i__9411 < len__9410))
{if((k === (array[i__9411])))
{return i__9411;
} else
{{
var G__9412 = (i__9411 + incr);
i__9411 = G__9412;
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
var a__9415 = cljs.core.hash.call(null,a);
var b__9416 = cljs.core.hash.call(null,b);
if((a__9415 < b__9416))
{return -1;
} else
{if((a__9415 > b__9416))
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
var ks__9424 = m.keys;
var len__9425 = ks__9424.length;
var so__9426 = m.strobj;
var out__9427 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__9428 = 0;
var out__9429 = cljs.core.transient$.call(null,out__9427);
while(true){
if((i__9428 < len__9425))
{var k__9430 = (ks__9424[i__9428]);
{
var G__9431 = (i__9428 + 1);
var G__9432 = cljs.core.assoc_BANG_.call(null,out__9429,k__9430,(so__9426[k__9430]));
i__9428 = G__9431;
out__9429 = G__9432;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__9429,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__9438 = {};
var l__9439 = ks.length;
var i__9440 = 0;
while(true){
if((i__9440 < l__9439))
{var k__9441 = (ks[i__9440]);
(new_obj__9438[k__9441] = (obj[k__9441]));
{
var G__9442 = (i__9440 + 1);
i__9440 = G__9442;
continue;
}
} else
{}
break;
}
return new_obj__9438;
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9445 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9446 = this;
var h__2192__auto____9447 = this__9446.__hash;
if(!((h__2192__auto____9447 == null)))
{return h__2192__auto____9447;
} else
{var h__2192__auto____9448 = cljs.core.hash_imap.call(null,coll);
this__9446.__hash = h__2192__auto____9448;
return h__2192__auto____9448;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9449 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9450 = this;
if((function (){var and__3822__auto____9451 = goog.isString(k);
if(and__3822__auto____9451)
{return !((cljs.core.scan_array.call(null,1,k,this__9450.keys) == null));
} else
{return and__3822__auto____9451;
}
})())
{return (this__9450.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9452 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____9453 = (this__9452.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____9453)
{return or__3824__auto____9453;
} else
{return (this__9452.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__9452.keys) == null)))
{var new_strobj__9454 = cljs.core.obj_clone.call(null,this__9452.strobj,this__9452.keys);
(new_strobj__9454[k] = v);
return (new cljs.core.ObjMap(this__9452.meta,this__9452.keys,new_strobj__9454,(this__9452.update_count + 1),null));
} else
{var new_strobj__9455 = cljs.core.obj_clone.call(null,this__9452.strobj,this__9452.keys);
var new_keys__9456 = this__9452.keys.slice();
(new_strobj__9455[k] = v);
new_keys__9456.push(k);
return (new cljs.core.ObjMap(this__9452.meta,new_keys__9456,new_strobj__9455,(this__9452.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9457 = this;
if((function (){var and__3822__auto____9458 = goog.isString(k);
if(and__3822__auto____9458)
{return !((cljs.core.scan_array.call(null,1,k,this__9457.keys) == null));
} else
{return and__3822__auto____9458;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__9480 = null;
var G__9480__2 = (function (this_sym9459,k){
var this__9461 = this;
var this_sym9459__9462 = this;
var coll__9463 = this_sym9459__9462;
return coll__9463.cljs$core$ILookup$_lookup$arity$2(coll__9463,k);
});
var G__9480__3 = (function (this_sym9460,k,not_found){
var this__9461 = this;
var this_sym9460__9464 = this;
var coll__9465 = this_sym9460__9464;
return coll__9465.cljs$core$ILookup$_lookup$arity$3(coll__9465,k,not_found);
});
G__9480 = function(this_sym9460,k,not_found){
switch(arguments.length){
case 2:
return G__9480__2.call(this,this_sym9460,k);
case 3:
return G__9480__3.call(this,this_sym9460,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9480;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym9443,args9444){
var this__9466 = this;
return this_sym9443.call.apply(this_sym9443,[this_sym9443].concat(args9444.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9467 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__9468 = this;
var this__9469 = this;
return cljs.core.pr_str.call(null,this__9469);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9470 = this;
if((this__9470.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__9433_SHARP_){
return cljs.core.vector.call(null,p1__9433_SHARP_,(this__9470.strobj[p1__9433_SHARP_]));
}),this__9470.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9471 = this;
return this__9471.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9472 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9473 = this;
return (new cljs.core.ObjMap(meta,this__9473.keys,this__9473.strobj,this__9473.update_count,this__9473.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9474 = this;
return this__9474.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9475 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__9475.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9476 = this;
if((function (){var and__3822__auto____9477 = goog.isString(k);
if(and__3822__auto____9477)
{return !((cljs.core.scan_array.call(null,1,k,this__9476.keys) == null));
} else
{return and__3822__auto____9477;
}
})())
{var new_keys__9478 = this__9476.keys.slice();
var new_strobj__9479 = cljs.core.obj_clone.call(null,this__9476.strobj,this__9476.keys);
new_keys__9478.splice(cljs.core.scan_array.call(null,1,k,new_keys__9478),1);
cljs.core.js_delete.call(null,new_strobj__9479,k);
return (new cljs.core.ObjMap(this__9476.meta,new_keys__9478,new_strobj__9479,(this__9476.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9484 = this;
var h__2192__auto____9485 = this__9484.__hash;
if(!((h__2192__auto____9485 == null)))
{return h__2192__auto____9485;
} else
{var h__2192__auto____9486 = cljs.core.hash_imap.call(null,coll);
this__9484.__hash = h__2192__auto____9486;
return h__2192__auto____9486;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9487 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9488 = this;
var bucket__9489 = (this__9488.hashobj[cljs.core.hash.call(null,k)]);
var i__9490 = (cljs.core.truth_(bucket__9489)?cljs.core.scan_array.call(null,2,k,bucket__9489):null);
if(cljs.core.truth_(i__9490))
{return (bucket__9489[(i__9490 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9491 = this;
var h__9492 = cljs.core.hash.call(null,k);
var bucket__9493 = (this__9491.hashobj[h__9492]);
if(cljs.core.truth_(bucket__9493))
{var new_bucket__9494 = bucket__9493.slice();
var new_hashobj__9495 = goog.object.clone(this__9491.hashobj);
(new_hashobj__9495[h__9492] = new_bucket__9494);
var temp__3971__auto____9496 = cljs.core.scan_array.call(null,2,k,new_bucket__9494);
if(cljs.core.truth_(temp__3971__auto____9496))
{var i__9497 = temp__3971__auto____9496;
(new_bucket__9494[(i__9497 + 1)] = v);
return (new cljs.core.HashMap(this__9491.meta,this__9491.count,new_hashobj__9495,null));
} else
{new_bucket__9494.push(k,v);
return (new cljs.core.HashMap(this__9491.meta,(this__9491.count + 1),new_hashobj__9495,null));
}
} else
{var new_hashobj__9498 = goog.object.clone(this__9491.hashobj);
(new_hashobj__9498[h__9492] = [k,v]);
return (new cljs.core.HashMap(this__9491.meta,(this__9491.count + 1),new_hashobj__9498,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9499 = this;
var bucket__9500 = (this__9499.hashobj[cljs.core.hash.call(null,k)]);
var i__9501 = (cljs.core.truth_(bucket__9500)?cljs.core.scan_array.call(null,2,k,bucket__9500):null);
if(cljs.core.truth_(i__9501))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__9526 = null;
var G__9526__2 = (function (this_sym9502,k){
var this__9504 = this;
var this_sym9502__9505 = this;
var coll__9506 = this_sym9502__9505;
return coll__9506.cljs$core$ILookup$_lookup$arity$2(coll__9506,k);
});
var G__9526__3 = (function (this_sym9503,k,not_found){
var this__9504 = this;
var this_sym9503__9507 = this;
var coll__9508 = this_sym9503__9507;
return coll__9508.cljs$core$ILookup$_lookup$arity$3(coll__9508,k,not_found);
});
G__9526 = function(this_sym9503,k,not_found){
switch(arguments.length){
case 2:
return G__9526__2.call(this,this_sym9503,k);
case 3:
return G__9526__3.call(this,this_sym9503,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9526;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym9482,args9483){
var this__9509 = this;
return this_sym9482.call.apply(this_sym9482,[this_sym9482].concat(args9483.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9510 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__9511 = this;
var this__9512 = this;
return cljs.core.pr_str.call(null,this__9512);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9513 = this;
if((this__9513.count > 0))
{var hashes__9514 = cljs.core.js_keys.call(null,this__9513.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__9481_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__9513.hashobj[p1__9481_SHARP_])));
}),hashes__9514);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9515 = this;
return this__9515.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9516 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9517 = this;
return (new cljs.core.HashMap(meta,this__9517.count,this__9517.hashobj,this__9517.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9518 = this;
return this__9518.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9519 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__9519.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9520 = this;
var h__9521 = cljs.core.hash.call(null,k);
var bucket__9522 = (this__9520.hashobj[h__9521]);
var i__9523 = (cljs.core.truth_(bucket__9522)?cljs.core.scan_array.call(null,2,k,bucket__9522):null);
if(cljs.core.not.call(null,i__9523))
{return coll;
} else
{var new_hashobj__9524 = goog.object.clone(this__9520.hashobj);
if((3 > bucket__9522.length))
{cljs.core.js_delete.call(null,new_hashobj__9524,h__9521);
} else
{var new_bucket__9525 = bucket__9522.slice();
new_bucket__9525.splice(i__9523,2);
(new_hashobj__9524[h__9521] = new_bucket__9525);
}
return (new cljs.core.HashMap(this__9520.meta,(this__9520.count - 1),new_hashobj__9524,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__9527 = ks.length;
var i__9528 = 0;
var out__9529 = cljs.core.HashMap.EMPTY;
while(true){
if((i__9528 < len__9527))
{{
var G__9530 = (i__9528 + 1);
var G__9531 = cljs.core.assoc.call(null,out__9529,(ks[i__9528]),(vs[i__9528]));
i__9528 = G__9530;
out__9529 = G__9531;
continue;
}
} else
{return out__9529;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__9535 = m.arr;
var len__9536 = arr__9535.length;
var i__9537 = 0;
while(true){
if((len__9536 <= i__9537))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__9535[i__9537]),k))
{return i__9537;
} else
{if("\uFDD0'else")
{{
var G__9538 = (i__9537 + 2);
i__9537 = G__9538;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9541 = this;
return (new cljs.core.TransientArrayMap({},this__9541.arr.length,this__9541.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9542 = this;
var h__2192__auto____9543 = this__9542.__hash;
if(!((h__2192__auto____9543 == null)))
{return h__2192__auto____9543;
} else
{var h__2192__auto____9544 = cljs.core.hash_imap.call(null,coll);
this__9542.__hash = h__2192__auto____9544;
return h__2192__auto____9544;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9545 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9546 = this;
var idx__9547 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9547 === -1))
{return not_found;
} else
{return (this__9546.arr[(idx__9547 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9548 = this;
var idx__9549 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9549 === -1))
{if((this__9548.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__9548.meta,(this__9548.cnt + 1),(function (){var G__9550__9551 = this__9548.arr.slice();
G__9550__9551.push(k);
G__9550__9551.push(v);
return G__9550__9551;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__9548.arr[(idx__9549 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__9548.meta,this__9548.cnt,(function (){var G__9552__9553 = this__9548.arr.slice();
(G__9552__9553[(idx__9549 + 1)] = v);
return G__9552__9553;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9554 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__9586 = null;
var G__9586__2 = (function (this_sym9555,k){
var this__9557 = this;
var this_sym9555__9558 = this;
var coll__9559 = this_sym9555__9558;
return coll__9559.cljs$core$ILookup$_lookup$arity$2(coll__9559,k);
});
var G__9586__3 = (function (this_sym9556,k,not_found){
var this__9557 = this;
var this_sym9556__9560 = this;
var coll__9561 = this_sym9556__9560;
return coll__9561.cljs$core$ILookup$_lookup$arity$3(coll__9561,k,not_found);
});
G__9586 = function(this_sym9556,k,not_found){
switch(arguments.length){
case 2:
return G__9586__2.call(this,this_sym9556,k);
case 3:
return G__9586__3.call(this,this_sym9556,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9586;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym9539,args9540){
var this__9562 = this;
return this_sym9539.call.apply(this_sym9539,[this_sym9539].concat(args9540.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9563 = this;
var len__9564 = this__9563.arr.length;
var i__9565 = 0;
var init__9566 = init;
while(true){
if((i__9565 < len__9564))
{var init__9567 = f.call(null,init__9566,(this__9563.arr[i__9565]),(this__9563.arr[(i__9565 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__9567))
{return cljs.core.deref.call(null,init__9567);
} else
{{
var G__9587 = (i__9565 + 2);
var G__9588 = init__9567;
i__9565 = G__9587;
init__9566 = G__9588;
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
var this__9568 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__9569 = this;
var this__9570 = this;
return cljs.core.pr_str.call(null,this__9570);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9571 = this;
if((this__9571.cnt > 0))
{var len__9572 = this__9571.arr.length;
var array_map_seq__9573 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__9572))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__9571.arr[i]),(this__9571.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__9573.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9574 = this;
return this__9574.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9575 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9576 = this;
return (new cljs.core.PersistentArrayMap(meta,this__9576.cnt,this__9576.arr,this__9576.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9577 = this;
return this__9577.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9578 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9578.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9579 = this;
var idx__9580 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9580 >= 0))
{var len__9581 = this__9579.arr.length;
var new_len__9582 = (len__9581 - 2);
if((new_len__9582 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__9583 = cljs.core.make_array.call(null,new_len__9582);
var s__9584 = 0;
var d__9585 = 0;
while(true){
if((s__9584 >= len__9581))
{return (new cljs.core.PersistentArrayMap(this__9579.meta,(this__9579.cnt - 1),new_arr__9583,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__9579.arr[s__9584])))
{{
var G__9589 = (s__9584 + 2);
var G__9590 = d__9585;
s__9584 = G__9589;
d__9585 = G__9590;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__9583[d__9585] = (this__9579.arr[s__9584]));
(new_arr__9583[(d__9585 + 1)] = (this__9579.arr[(s__9584 + 1)]));
{
var G__9591 = (s__9584 + 2);
var G__9592 = (d__9585 + 2);
s__9584 = G__9591;
d__9585 = G__9592;
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
var len__9593 = cljs.core.count.call(null,ks);
var i__9594 = 0;
var out__9595 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__9594 < len__9593))
{{
var G__9596 = (i__9594 + 1);
var G__9597 = cljs.core.assoc_BANG_.call(null,out__9595,(ks[i__9594]),(vs[i__9594]));
i__9594 = G__9596;
out__9595 = G__9597;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9595);
}
break;
}
});

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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9598 = this;
if(cljs.core.truth_(this__9598.editable_QMARK_))
{var idx__9599 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9599 >= 0))
{(this__9598.arr[idx__9599] = (this__9598.arr[(this__9598.len - 2)]));
(this__9598.arr[(idx__9599 + 1)] = (this__9598.arr[(this__9598.len - 1)]));
var G__9600__9601 = this__9598.arr;
G__9600__9601.pop();
G__9600__9601.pop();
G__9600__9601;
this__9598.len = (this__9598.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9602 = this;
if(cljs.core.truth_(this__9602.editable_QMARK_))
{var idx__9603 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9603 === -1))
{if(((this__9602.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9602.len = (this__9602.len + 2);
this__9602.arr.push(key);
this__9602.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__9602.len,this__9602.arr),key,val);
}
} else
{if((val === (this__9602.arr[(idx__9603 + 1)])))
{return tcoll;
} else
{(this__9602.arr[(idx__9603 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9604 = this;
if(cljs.core.truth_(this__9604.editable_QMARK_))
{if((function (){var G__9605__9606 = o;
if(G__9605__9606)
{if((function (){var or__3824__auto____9607 = (G__9605__9606.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9607)
{return or__3824__auto____9607;
} else
{return G__9605__9606.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9605__9606.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9605__9606);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9605__9606);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9608 = cljs.core.seq.call(null,o);
var tcoll__9609 = tcoll;
while(true){
var temp__3971__auto____9610 = cljs.core.first.call(null,es__9608);
if(cljs.core.truth_(temp__3971__auto____9610))
{var e__9611 = temp__3971__auto____9610;
{
var G__9617 = cljs.core.next.call(null,es__9608);
var G__9618 = tcoll__9609.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9609,cljs.core.key.call(null,e__9611),cljs.core.val.call(null,e__9611));
es__9608 = G__9617;
tcoll__9609 = G__9618;
continue;
}
} else
{return tcoll__9609;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9612 = this;
if(cljs.core.truth_(this__9612.editable_QMARK_))
{this__9612.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__9612.len,2),this__9612.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9613 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9614 = this;
if(cljs.core.truth_(this__9614.editable_QMARK_))
{var idx__9615 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__9615 === -1))
{return not_found;
} else
{return (this__9614.arr[(idx__9615 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9616 = this;
if(cljs.core.truth_(this__9616.editable_QMARK_))
{return cljs.core.quot.call(null,this__9616.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9621 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__9622 = 0;
while(true){
if((i__9622 < len))
{{
var G__9623 = cljs.core.assoc_BANG_.call(null,out__9621,(arr[i__9622]),(arr[(i__9622 + 1)]));
var G__9624 = (i__9622 + 2);
out__9621 = G__9623;
i__9622 = G__9624;
continue;
}
} else
{return out__9621;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2310__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
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
var G__9629__9630 = arr.slice();
(G__9629__9630[i] = a);
return G__9629__9630;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9631__9632 = arr.slice();
(G__9631__9632[i] = a);
(G__9631__9632[j] = b);
return G__9631__9632;
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
var new_arr__9634 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__9634,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__9634,(2 * i),(new_arr__9634.length - (2 * i)));
return new_arr__9634;
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
var editable__9637 = inode.ensure_editable(edit);
(editable__9637.arr[i] = a);
return editable__9637;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9638 = inode.ensure_editable(edit);
(editable__9638.arr[i] = a);
(editable__9638.arr[j] = b);
return editable__9638;
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
var len__9645 = arr.length;
var i__9646 = 0;
var init__9647 = init;
while(true){
if((i__9646 < len__9645))
{var init__9650 = (function (){var k__9648 = (arr[i__9646]);
if(!((k__9648 == null)))
{return f.call(null,init__9647,k__9648,(arr[(i__9646 + 1)]));
} else
{var node__9649 = (arr[(i__9646 + 1)]);
if(!((node__9649 == null)))
{return node__9649.kv_reduce(f,init__9647);
} else
{return init__9647;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9650))
{return cljs.core.deref.call(null,init__9650);
} else
{{
var G__9651 = (i__9646 + 2);
var G__9652 = init__9650;
i__9646 = G__9651;
init__9647 = G__9652;
continue;
}
}
} else
{return init__9647;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__9653 = this;
var inode__9654 = this;
if((this__9653.bitmap === bit))
{return null;
} else
{var editable__9655 = inode__9654.ensure_editable(e);
var earr__9656 = editable__9655.arr;
var len__9657 = earr__9656.length;
editable__9655.bitmap = (bit ^ editable__9655.bitmap);
cljs.core.array_copy.call(null,earr__9656,(2 * (i + 1)),earr__9656,(2 * i),(len__9657 - (2 * (i + 1))));
(earr__9656[(len__9657 - 2)] = null);
(earr__9656[(len__9657 - 1)] = null);
return editable__9655;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9658 = this;
var inode__9659 = this;
var bit__9660 = (1 << ((hash >>> shift) & 0x01f));
var idx__9661 = cljs.core.bitmap_indexed_node_index.call(null,this__9658.bitmap,bit__9660);
if(((this__9658.bitmap & bit__9660) === 0))
{var n__9662 = cljs.core.bit_count.call(null,this__9658.bitmap);
if(((2 * n__9662) < this__9658.arr.length))
{var editable__9663 = inode__9659.ensure_editable(edit);
var earr__9664 = editable__9663.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9664,(2 * idx__9661),earr__9664,(2 * (idx__9661 + 1)),(2 * (n__9662 - idx__9661)));
(earr__9664[(2 * idx__9661)] = key);
(earr__9664[((2 * idx__9661) + 1)] = val);
editable__9663.bitmap = (editable__9663.bitmap | bit__9660);
return editable__9663;
} else
{if((n__9662 >= 16))
{var nodes__9665 = cljs.core.make_array.call(null,32);
var jdx__9666 = ((hash >>> shift) & 0x01f);
(nodes__9665[jdx__9666] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9667 = 0;
var j__9668 = 0;
while(true){
if((i__9667 < 32))
{if((((this__9658.bitmap >>> i__9667) & 1) === 0))
{{
var G__9721 = (i__9667 + 1);
var G__9722 = j__9668;
i__9667 = G__9721;
j__9668 = G__9722;
continue;
}
} else
{(nodes__9665[i__9667] = ((!(((this__9658.arr[j__9668]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9658.arr[j__9668])),(this__9658.arr[j__9668]),(this__9658.arr[(j__9668 + 1)]),added_leaf_QMARK_):(this__9658.arr[(j__9668 + 1)])));
{
var G__9723 = (i__9667 + 1);
var G__9724 = (j__9668 + 2);
i__9667 = G__9723;
j__9668 = G__9724;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9662 + 1),nodes__9665));
} else
{if("\uFDD0'else")
{var new_arr__9669 = cljs.core.make_array.call(null,(2 * (n__9662 + 4)));
cljs.core.array_copy.call(null,this__9658.arr,0,new_arr__9669,0,(2 * idx__9661));
(new_arr__9669[(2 * idx__9661)] = key);
(new_arr__9669[((2 * idx__9661) + 1)] = val);
cljs.core.array_copy.call(null,this__9658.arr,(2 * idx__9661),new_arr__9669,(2 * (idx__9661 + 1)),(2 * (n__9662 - idx__9661)));
added_leaf_QMARK_.val = true;
var editable__9670 = inode__9659.ensure_editable(edit);
editable__9670.arr = new_arr__9669;
editable__9670.bitmap = (editable__9670.bitmap | bit__9660);
return editable__9670;
} else
{return null;
}
}
}
} else
{var key_or_nil__9671 = (this__9658.arr[(2 * idx__9661)]);
var val_or_node__9672 = (this__9658.arr[((2 * idx__9661) + 1)]);
if((key_or_nil__9671 == null))
{var n__9673 = val_or_node__9672.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9673 === val_or_node__9672))
{return inode__9659;
} else
{return cljs.core.edit_and_set.call(null,inode__9659,edit,((2 * idx__9661) + 1),n__9673);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9671))
{if((val === val_or_node__9672))
{return inode__9659;
} else
{return cljs.core.edit_and_set.call(null,inode__9659,edit,((2 * idx__9661) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9659,edit,(2 * idx__9661),null,((2 * idx__9661) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9671,val_or_node__9672,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9674 = this;
var inode__9675 = this;
return cljs.core.create_inode_seq.call(null,this__9674.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9676 = this;
var inode__9677 = this;
var bit__9678 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9676.bitmap & bit__9678) === 0))
{return inode__9677;
} else
{var idx__9679 = cljs.core.bitmap_indexed_node_index.call(null,this__9676.bitmap,bit__9678);
var key_or_nil__9680 = (this__9676.arr[(2 * idx__9679)]);
var val_or_node__9681 = (this__9676.arr[((2 * idx__9679) + 1)]);
if((key_or_nil__9680 == null))
{var n__9682 = val_or_node__9681.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9682 === val_or_node__9681))
{return inode__9677;
} else
{if(!((n__9682 == null)))
{return cljs.core.edit_and_set.call(null,inode__9677,edit,((2 * idx__9679) + 1),n__9682);
} else
{if((this__9676.bitmap === bit__9678))
{return null;
} else
{if("\uFDD0'else")
{return inode__9677.edit_and_remove_pair(edit,bit__9678,idx__9679);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9680))
{(removed_leaf_QMARK_[0] = true);
return inode__9677.edit_and_remove_pair(edit,bit__9678,idx__9679);
} else
{if("\uFDD0'else")
{return inode__9677;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9683 = this;
var inode__9684 = this;
if((e === this__9683.edit))
{return inode__9684;
} else
{var n__9685 = cljs.core.bit_count.call(null,this__9683.bitmap);
var new_arr__9686 = cljs.core.make_array.call(null,(((n__9685 < 0))?4:(2 * (n__9685 + 1))));
cljs.core.array_copy.call(null,this__9683.arr,0,new_arr__9686,0,(2 * n__9685));
return (new cljs.core.BitmapIndexedNode(e,this__9683.bitmap,new_arr__9686));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9687 = this;
var inode__9688 = this;
return cljs.core.inode_kv_reduce.call(null,this__9687.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9689 = this;
var inode__9690 = this;
var bit__9691 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9689.bitmap & bit__9691) === 0))
{return not_found;
} else
{var idx__9692 = cljs.core.bitmap_indexed_node_index.call(null,this__9689.bitmap,bit__9691);
var key_or_nil__9693 = (this__9689.arr[(2 * idx__9692)]);
var val_or_node__9694 = (this__9689.arr[((2 * idx__9692) + 1)]);
if((key_or_nil__9693 == null))
{return val_or_node__9694.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9693))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9693,val_or_node__9694], true);
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
var this__9695 = this;
var inode__9696 = this;
var bit__9697 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9695.bitmap & bit__9697) === 0))
{return inode__9696;
} else
{var idx__9698 = cljs.core.bitmap_indexed_node_index.call(null,this__9695.bitmap,bit__9697);
var key_or_nil__9699 = (this__9695.arr[(2 * idx__9698)]);
var val_or_node__9700 = (this__9695.arr[((2 * idx__9698) + 1)]);
if((key_or_nil__9699 == null))
{var n__9701 = val_or_node__9700.inode_without((shift + 5),hash,key);
if((n__9701 === val_or_node__9700))
{return inode__9696;
} else
{if(!((n__9701 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9695.bitmap,cljs.core.clone_and_set.call(null,this__9695.arr,((2 * idx__9698) + 1),n__9701)));
} else
{if((this__9695.bitmap === bit__9697))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9695.bitmap ^ bit__9697),cljs.core.remove_pair.call(null,this__9695.arr,idx__9698)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9699))
{return (new cljs.core.BitmapIndexedNode(null,(this__9695.bitmap ^ bit__9697),cljs.core.remove_pair.call(null,this__9695.arr,idx__9698)));
} else
{if("\uFDD0'else")
{return inode__9696;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9702 = this;
var inode__9703 = this;
var bit__9704 = (1 << ((hash >>> shift) & 0x01f));
var idx__9705 = cljs.core.bitmap_indexed_node_index.call(null,this__9702.bitmap,bit__9704);
if(((this__9702.bitmap & bit__9704) === 0))
{var n__9706 = cljs.core.bit_count.call(null,this__9702.bitmap);
if((n__9706 >= 16))
{var nodes__9707 = cljs.core.make_array.call(null,32);
var jdx__9708 = ((hash >>> shift) & 0x01f);
(nodes__9707[jdx__9708] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9709 = 0;
var j__9710 = 0;
while(true){
if((i__9709 < 32))
{if((((this__9702.bitmap >>> i__9709) & 1) === 0))
{{
var G__9725 = (i__9709 + 1);
var G__9726 = j__9710;
i__9709 = G__9725;
j__9710 = G__9726;
continue;
}
} else
{(nodes__9707[i__9709] = ((!(((this__9702.arr[j__9710]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9702.arr[j__9710])),(this__9702.arr[j__9710]),(this__9702.arr[(j__9710 + 1)]),added_leaf_QMARK_):(this__9702.arr[(j__9710 + 1)])));
{
var G__9727 = (i__9709 + 1);
var G__9728 = (j__9710 + 2);
i__9709 = G__9727;
j__9710 = G__9728;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9706 + 1),nodes__9707));
} else
{var new_arr__9711 = cljs.core.make_array.call(null,(2 * (n__9706 + 1)));
cljs.core.array_copy.call(null,this__9702.arr,0,new_arr__9711,0,(2 * idx__9705));
(new_arr__9711[(2 * idx__9705)] = key);
(new_arr__9711[((2 * idx__9705) + 1)] = val);
cljs.core.array_copy.call(null,this__9702.arr,(2 * idx__9705),new_arr__9711,(2 * (idx__9705 + 1)),(2 * (n__9706 - idx__9705)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9702.bitmap | bit__9704),new_arr__9711));
}
} else
{var key_or_nil__9712 = (this__9702.arr[(2 * idx__9705)]);
var val_or_node__9713 = (this__9702.arr[((2 * idx__9705) + 1)]);
if((key_or_nil__9712 == null))
{var n__9714 = val_or_node__9713.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9714 === val_or_node__9713))
{return inode__9703;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9702.bitmap,cljs.core.clone_and_set.call(null,this__9702.arr,((2 * idx__9705) + 1),n__9714)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9712))
{if((val === val_or_node__9713))
{return inode__9703;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9702.bitmap,cljs.core.clone_and_set.call(null,this__9702.arr,((2 * idx__9705) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9702.bitmap,cljs.core.clone_and_set.call(null,this__9702.arr,(2 * idx__9705),null,((2 * idx__9705) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9712,val_or_node__9713,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9715 = this;
var inode__9716 = this;
var bit__9717 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9715.bitmap & bit__9717) === 0))
{return not_found;
} else
{var idx__9718 = cljs.core.bitmap_indexed_node_index.call(null,this__9715.bitmap,bit__9717);
var key_or_nil__9719 = (this__9715.arr[(2 * idx__9718)]);
var val_or_node__9720 = (this__9715.arr[((2 * idx__9718) + 1)]);
if((key_or_nil__9719 == null))
{return val_or_node__9720.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9719))
{return val_or_node__9720;
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
var arr__9736 = array_node.arr;
var len__9737 = (2 * (array_node.cnt - 1));
var new_arr__9738 = cljs.core.make_array.call(null,len__9737);
var i__9739 = 0;
var j__9740 = 1;
var bitmap__9741 = 0;
while(true){
if((i__9739 < len__9737))
{if((function (){var and__3822__auto____9742 = !((i__9739 === idx));
if(and__3822__auto____9742)
{return !(((arr__9736[i__9739]) == null));
} else
{return and__3822__auto____9742;
}
})())
{(new_arr__9738[j__9740] = (arr__9736[i__9739]));
{
var G__9743 = (i__9739 + 1);
var G__9744 = (j__9740 + 2);
var G__9745 = (bitmap__9741 | (1 << i__9739));
i__9739 = G__9743;
j__9740 = G__9744;
bitmap__9741 = G__9745;
continue;
}
} else
{{
var G__9746 = (i__9739 + 1);
var G__9747 = j__9740;
var G__9748 = bitmap__9741;
i__9739 = G__9746;
j__9740 = G__9747;
bitmap__9741 = G__9748;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9741,new_arr__9738));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9749 = this;
var inode__9750 = this;
var idx__9751 = ((hash >>> shift) & 0x01f);
var node__9752 = (this__9749.arr[idx__9751]);
if((node__9752 == null))
{var editable__9753 = cljs.core.edit_and_set.call(null,inode__9750,edit,idx__9751,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9753.cnt = (editable__9753.cnt + 1);
return editable__9753;
} else
{var n__9754 = node__9752.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9754 === node__9752))
{return inode__9750;
} else
{return cljs.core.edit_and_set.call(null,inode__9750,edit,idx__9751,n__9754);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9755 = this;
var inode__9756 = this;
return cljs.core.create_array_node_seq.call(null,this__9755.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9757 = this;
var inode__9758 = this;
var idx__9759 = ((hash >>> shift) & 0x01f);
var node__9760 = (this__9757.arr[idx__9759]);
if((node__9760 == null))
{return inode__9758;
} else
{var n__9761 = node__9760.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9761 === node__9760))
{return inode__9758;
} else
{if((n__9761 == null))
{if((this__9757.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9758,edit,idx__9759);
} else
{var editable__9762 = cljs.core.edit_and_set.call(null,inode__9758,edit,idx__9759,n__9761);
editable__9762.cnt = (editable__9762.cnt - 1);
return editable__9762;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__9758,edit,idx__9759,n__9761);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9763 = this;
var inode__9764 = this;
if((e === this__9763.edit))
{return inode__9764;
} else
{return (new cljs.core.ArrayNode(e,this__9763.cnt,this__9763.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9765 = this;
var inode__9766 = this;
var len__9767 = this__9765.arr.length;
var i__9768 = 0;
var init__9769 = init;
while(true){
if((i__9768 < len__9767))
{var node__9770 = (this__9765.arr[i__9768]);
if(!((node__9770 == null)))
{var init__9771 = node__9770.kv_reduce(f,init__9769);
if(cljs.core.reduced_QMARK_.call(null,init__9771))
{return cljs.core.deref.call(null,init__9771);
} else
{{
var G__9790 = (i__9768 + 1);
var G__9791 = init__9771;
i__9768 = G__9790;
init__9769 = G__9791;
continue;
}
}
} else
{return null;
}
} else
{return init__9769;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9772 = this;
var inode__9773 = this;
var idx__9774 = ((hash >>> shift) & 0x01f);
var node__9775 = (this__9772.arr[idx__9774]);
if(!((node__9775 == null)))
{return node__9775.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9776 = this;
var inode__9777 = this;
var idx__9778 = ((hash >>> shift) & 0x01f);
var node__9779 = (this__9776.arr[idx__9778]);
if(!((node__9779 == null)))
{var n__9780 = node__9779.inode_without((shift + 5),hash,key);
if((n__9780 === node__9779))
{return inode__9777;
} else
{if((n__9780 == null))
{if((this__9776.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__9777,null,idx__9778);
} else
{return (new cljs.core.ArrayNode(null,(this__9776.cnt - 1),cljs.core.clone_and_set.call(null,this__9776.arr,idx__9778,n__9780)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9776.cnt,cljs.core.clone_and_set.call(null,this__9776.arr,idx__9778,n__9780)));
} else
{return null;
}
}
}
} else
{return inode__9777;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9781 = this;
var inode__9782 = this;
var idx__9783 = ((hash >>> shift) & 0x01f);
var node__9784 = (this__9781.arr[idx__9783]);
if((node__9784 == null))
{return (new cljs.core.ArrayNode(null,(this__9781.cnt + 1),cljs.core.clone_and_set.call(null,this__9781.arr,idx__9783,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9785 = node__9784.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9785 === node__9784))
{return inode__9782;
} else
{return (new cljs.core.ArrayNode(null,this__9781.cnt,cljs.core.clone_and_set.call(null,this__9781.arr,idx__9783,n__9785)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9786 = this;
var inode__9787 = this;
var idx__9788 = ((hash >>> shift) & 0x01f);
var node__9789 = (this__9786.arr[idx__9788]);
if(!((node__9789 == null)))
{return node__9789.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9794 = (2 * cnt);
var i__9795 = 0;
while(true){
if((i__9795 < lim__9794))
{if(cljs.core.key_test.call(null,key,(arr[i__9795])))
{return i__9795;
} else
{{
var G__9796 = (i__9795 + 2);
i__9795 = G__9796;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9797 = this;
var inode__9798 = this;
if((hash === this__9797.collision_hash))
{var idx__9799 = cljs.core.hash_collision_node_find_index.call(null,this__9797.arr,this__9797.cnt,key);
if((idx__9799 === -1))
{if((this__9797.arr.length > (2 * this__9797.cnt)))
{var editable__9800 = cljs.core.edit_and_set.call(null,inode__9798,edit,(2 * this__9797.cnt),key,((2 * this__9797.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9800.cnt = (editable__9800.cnt + 1);
return editable__9800;
} else
{var len__9801 = this__9797.arr.length;
var new_arr__9802 = cljs.core.make_array.call(null,(len__9801 + 2));
cljs.core.array_copy.call(null,this__9797.arr,0,new_arr__9802,0,len__9801);
(new_arr__9802[len__9801] = key);
(new_arr__9802[(len__9801 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9798.ensure_editable_array(edit,(this__9797.cnt + 1),new_arr__9802);
}
} else
{if(((this__9797.arr[(idx__9799 + 1)]) === val))
{return inode__9798;
} else
{return cljs.core.edit_and_set.call(null,inode__9798,edit,(idx__9799 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9797.collision_hash >>> shift) & 0x01f)),[null,inode__9798,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9803 = this;
var inode__9804 = this;
return cljs.core.create_inode_seq.call(null,this__9803.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9805 = this;
var inode__9806 = this;
var idx__9807 = cljs.core.hash_collision_node_find_index.call(null,this__9805.arr,this__9805.cnt,key);
if((idx__9807 === -1))
{return inode__9806;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9805.cnt === 1))
{return null;
} else
{var editable__9808 = inode__9806.ensure_editable(edit);
var earr__9809 = editable__9808.arr;
(earr__9809[idx__9807] = (earr__9809[((2 * this__9805.cnt) - 2)]));
(earr__9809[(idx__9807 + 1)] = (earr__9809[((2 * this__9805.cnt) - 1)]));
(earr__9809[((2 * this__9805.cnt) - 1)] = null);
(earr__9809[((2 * this__9805.cnt) - 2)] = null);
editable__9808.cnt = (editable__9808.cnt - 1);
return editable__9808;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9810 = this;
var inode__9811 = this;
if((e === this__9810.edit))
{return inode__9811;
} else
{var new_arr__9812 = cljs.core.make_array.call(null,(2 * (this__9810.cnt + 1)));
cljs.core.array_copy.call(null,this__9810.arr,0,new_arr__9812,0,(2 * this__9810.cnt));
return (new cljs.core.HashCollisionNode(e,this__9810.collision_hash,this__9810.cnt,new_arr__9812));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9813 = this;
var inode__9814 = this;
return cljs.core.inode_kv_reduce.call(null,this__9813.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9815 = this;
var inode__9816 = this;
var idx__9817 = cljs.core.hash_collision_node_find_index.call(null,this__9815.arr,this__9815.cnt,key);
if((idx__9817 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9815.arr[idx__9817])))
{return cljs.core.PersistentVector.fromArray([(this__9815.arr[idx__9817]),(this__9815.arr[(idx__9817 + 1)])], true);
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
var this__9818 = this;
var inode__9819 = this;
var idx__9820 = cljs.core.hash_collision_node_find_index.call(null,this__9818.arr,this__9818.cnt,key);
if((idx__9820 === -1))
{return inode__9819;
} else
{if((this__9818.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9818.collision_hash,(this__9818.cnt - 1),cljs.core.remove_pair.call(null,this__9818.arr,cljs.core.quot.call(null,idx__9820,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9821 = this;
var inode__9822 = this;
if((hash === this__9821.collision_hash))
{var idx__9823 = cljs.core.hash_collision_node_find_index.call(null,this__9821.arr,this__9821.cnt,key);
if((idx__9823 === -1))
{var len__9824 = this__9821.arr.length;
var new_arr__9825 = cljs.core.make_array.call(null,(len__9824 + 2));
cljs.core.array_copy.call(null,this__9821.arr,0,new_arr__9825,0,len__9824);
(new_arr__9825[len__9824] = key);
(new_arr__9825[(len__9824 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9821.collision_hash,(this__9821.cnt + 1),new_arr__9825));
} else
{if(cljs.core._EQ_.call(null,(this__9821.arr[idx__9823]),val))
{return inode__9822;
} else
{return (new cljs.core.HashCollisionNode(null,this__9821.collision_hash,this__9821.cnt,cljs.core.clone_and_set.call(null,this__9821.arr,(idx__9823 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9821.collision_hash >>> shift) & 0x01f)),[null,inode__9822])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9826 = this;
var inode__9827 = this;
var idx__9828 = cljs.core.hash_collision_node_find_index.call(null,this__9826.arr,this__9826.cnt,key);
if((idx__9828 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__9826.arr[idx__9828])))
{return (this__9826.arr[(idx__9828 + 1)]);
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
var this__9829 = this;
var inode__9830 = this;
if((e === this__9829.edit))
{this__9829.arr = array;
this__9829.cnt = count;
return inode__9830;
} else
{return (new cljs.core.HashCollisionNode(this__9829.edit,this__9829.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9835 = cljs.core.hash.call(null,key1);
if((key1hash__9835 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9835,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9836 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9835,key1,val1,added_leaf_QMARK___9836).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9836);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9837 = cljs.core.hash.call(null,key1);
if((key1hash__9837 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9837,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9838 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9837,key1,val1,added_leaf_QMARK___9838).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9838);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9839 = this;
var h__2192__auto____9840 = this__9839.__hash;
if(!((h__2192__auto____9840 == null)))
{return h__2192__auto____9840;
} else
{var h__2192__auto____9841 = cljs.core.hash_coll.call(null,coll);
this__9839.__hash = h__2192__auto____9841;
return h__2192__auto____9841;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9842 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9843 = this;
var this__9844 = this;
return cljs.core.pr_str.call(null,this__9844);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9845 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9846 = this;
if((this__9846.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9846.nodes[this__9846.i]),(this__9846.nodes[(this__9846.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__9846.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9847 = this;
if((this__9847.s == null))
{return cljs.core.create_inode_seq.call(null,this__9847.nodes,(this__9847.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__9847.nodes,this__9847.i,cljs.core.next.call(null,this__9847.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9848 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9849 = this;
return (new cljs.core.NodeSeq(meta,this__9849.nodes,this__9849.i,this__9849.s,this__9849.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9850 = this;
return this__9850.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9851 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9851.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9858 = nodes.length;
var j__9859 = i;
while(true){
if((j__9859 < len__9858))
{if(!(((nodes[j__9859]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9859,null,null));
} else
{var temp__3971__auto____9860 = (nodes[(j__9859 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9860))
{var node__9861 = temp__3971__auto____9860;
var temp__3971__auto____9862 = node__9861.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9862))
{var node_seq__9863 = temp__3971__auto____9862;
return (new cljs.core.NodeSeq(null,nodes,(j__9859 + 2),node_seq__9863,null));
} else
{{
var G__9864 = (j__9859 + 2);
j__9859 = G__9864;
continue;
}
}
} else
{{
var G__9865 = (j__9859 + 2);
j__9859 = G__9865;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9866 = this;
var h__2192__auto____9867 = this__9866.__hash;
if(!((h__2192__auto____9867 == null)))
{return h__2192__auto____9867;
} else
{var h__2192__auto____9868 = cljs.core.hash_coll.call(null,coll);
this__9866.__hash = h__2192__auto____9868;
return h__2192__auto____9868;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9869 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9870 = this;
var this__9871 = this;
return cljs.core.pr_str.call(null,this__9871);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9872 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9873 = this;
return cljs.core.first.call(null,this__9873.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9874 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9874.nodes,this__9874.i,cljs.core.next.call(null,this__9874.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9875 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9876 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9876.nodes,this__9876.i,this__9876.s,this__9876.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9877 = this;
return this__9877.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9878 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9878.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9885 = nodes.length;
var j__9886 = i;
while(true){
if((j__9886 < len__9885))
{var temp__3971__auto____9887 = (nodes[j__9886]);
if(cljs.core.truth_(temp__3971__auto____9887))
{var nj__9888 = temp__3971__auto____9887;
var temp__3971__auto____9889 = nj__9888.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9889))
{var ns__9890 = temp__3971__auto____9889;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9886 + 1),ns__9890,null));
} else
{{
var G__9891 = (j__9886 + 1);
j__9886 = G__9891;
continue;
}
}
} else
{{
var G__9892 = (j__9886 + 1);
j__9886 = G__9892;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9895 = this;
return (new cljs.core.TransientHashMap({},this__9895.root,this__9895.cnt,this__9895.has_nil_QMARK_,this__9895.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9896 = this;
var h__2192__auto____9897 = this__9896.__hash;
if(!((h__2192__auto____9897 == null)))
{return h__2192__auto____9897;
} else
{var h__2192__auto____9898 = cljs.core.hash_imap.call(null,coll);
this__9896.__hash = h__2192__auto____9898;
return h__2192__auto____9898;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9899 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9900 = this;
if((k == null))
{if(this__9900.has_nil_QMARK_)
{return this__9900.nil_val;
} else
{return not_found;
}
} else
{if((this__9900.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9900.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9901 = this;
if((k == null))
{if((function (){var and__3822__auto____9902 = this__9901.has_nil_QMARK_;
if(and__3822__auto____9902)
{return (v === this__9901.nil_val);
} else
{return and__3822__auto____9902;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9901.meta,((this__9901.has_nil_QMARK_)?this__9901.cnt:(this__9901.cnt + 1)),this__9901.root,true,v,null));
}
} else
{var added_leaf_QMARK___9903 = (new cljs.core.Box(false));
var new_root__9904 = (((this__9901.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9901.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9903);
if((new_root__9904 === this__9901.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9901.meta,((added_leaf_QMARK___9903.val)?(this__9901.cnt + 1):this__9901.cnt),new_root__9904,this__9901.has_nil_QMARK_,this__9901.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9905 = this;
if((k == null))
{return this__9905.has_nil_QMARK_;
} else
{if((this__9905.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9905.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9928 = null;
var G__9928__2 = (function (this_sym9906,k){
var this__9908 = this;
var this_sym9906__9909 = this;
var coll__9910 = this_sym9906__9909;
return coll__9910.cljs$core$ILookup$_lookup$arity$2(coll__9910,k);
});
var G__9928__3 = (function (this_sym9907,k,not_found){
var this__9908 = this;
var this_sym9907__9911 = this;
var coll__9912 = this_sym9907__9911;
return coll__9912.cljs$core$ILookup$_lookup$arity$3(coll__9912,k,not_found);
});
G__9928 = function(this_sym9907,k,not_found){
switch(arguments.length){
case 2:
return G__9928__2.call(this,this_sym9907,k);
case 3:
return G__9928__3.call(this,this_sym9907,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9928;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9893,args9894){
var this__9913 = this;
return this_sym9893.call.apply(this_sym9893,[this_sym9893].concat(args9894.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9914 = this;
var init__9915 = ((this__9914.has_nil_QMARK_)?f.call(null,init,null,this__9914.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9915))
{return cljs.core.deref.call(null,init__9915);
} else
{if(!((this__9914.root == null)))
{return this__9914.root.kv_reduce(f,init__9915);
} else
{if("\uFDD0'else")
{return init__9915;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9916 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9917 = this;
var this__9918 = this;
return cljs.core.pr_str.call(null,this__9918);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9919 = this;
if((this__9919.cnt > 0))
{var s__9920 = ((!((this__9919.root == null)))?this__9919.root.inode_seq():null);
if(this__9919.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9919.nil_val], true),s__9920);
} else
{return s__9920;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9921 = this;
return this__9921.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9922 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9923 = this;
return (new cljs.core.PersistentHashMap(meta,this__9923.cnt,this__9923.root,this__9923.has_nil_QMARK_,this__9923.nil_val,this__9923.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9924 = this;
return this__9924.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9925 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9925.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9926 = this;
if((k == null))
{if(this__9926.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9926.meta,(this__9926.cnt - 1),this__9926.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9926.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9927 = this__9926.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9927 === this__9926.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9926.meta,(this__9926.cnt - 1),new_root__9927,this__9926.has_nil_QMARK_,this__9926.nil_val,null));
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
var len__9929 = ks.length;
var i__9930 = 0;
var out__9931 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9930 < len__9929))
{{
var G__9932 = (i__9930 + 1);
var G__9933 = cljs.core.assoc_BANG_.call(null,out__9931,(ks[i__9930]),(vs[i__9930]));
i__9930 = G__9932;
out__9931 = G__9933;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9931);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9934 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9935 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9936 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9937 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9938 = this;
if((k == null))
{if(this__9938.has_nil_QMARK_)
{return this__9938.nil_val;
} else
{return null;
}
} else
{if((this__9938.root == null))
{return null;
} else
{return this__9938.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9939 = this;
if((k == null))
{if(this__9939.has_nil_QMARK_)
{return this__9939.nil_val;
} else
{return not_found;
}
} else
{if((this__9939.root == null))
{return not_found;
} else
{return this__9939.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9940 = this;
if(this__9940.edit)
{return this__9940.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9941 = this;
var tcoll__9942 = this;
if(this__9941.edit)
{if((function (){var G__9943__9944 = o;
if(G__9943__9944)
{if((function (){var or__3824__auto____9945 = (G__9943__9944.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9945)
{return or__3824__auto____9945;
} else
{return G__9943__9944.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9943__9944.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9943__9944);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9943__9944);
}
})())
{return tcoll__9942.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9946 = cljs.core.seq.call(null,o);
var tcoll__9947 = tcoll__9942;
while(true){
var temp__3971__auto____9948 = cljs.core.first.call(null,es__9946);
if(cljs.core.truth_(temp__3971__auto____9948))
{var e__9949 = temp__3971__auto____9948;
{
var G__9960 = cljs.core.next.call(null,es__9946);
var G__9961 = tcoll__9947.assoc_BANG_(cljs.core.key.call(null,e__9949),cljs.core.val.call(null,e__9949));
es__9946 = G__9960;
tcoll__9947 = G__9961;
continue;
}
} else
{return tcoll__9947;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9950 = this;
var tcoll__9951 = this;
if(this__9950.edit)
{if((k == null))
{if((this__9950.nil_val === v))
{} else
{this__9950.nil_val = v;
}
if(this__9950.has_nil_QMARK_)
{} else
{this__9950.count = (this__9950.count + 1);
this__9950.has_nil_QMARK_ = true;
}
return tcoll__9951;
} else
{var added_leaf_QMARK___9952 = (new cljs.core.Box(false));
var node__9953 = (((this__9950.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9950.root).inode_assoc_BANG_(this__9950.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9952);
if((node__9953 === this__9950.root))
{} else
{this__9950.root = node__9953;
}
if(added_leaf_QMARK___9952.val)
{this__9950.count = (this__9950.count + 1);
} else
{}
return tcoll__9951;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9954 = this;
var tcoll__9955 = this;
if(this__9954.edit)
{if((k == null))
{if(this__9954.has_nil_QMARK_)
{this__9954.has_nil_QMARK_ = false;
this__9954.nil_val = null;
this__9954.count = (this__9954.count - 1);
return tcoll__9955;
} else
{return tcoll__9955;
}
} else
{if((this__9954.root == null))
{return tcoll__9955;
} else
{var removed_leaf_QMARK___9956 = (new cljs.core.Box(false));
var node__9957 = this__9954.root.inode_without_BANG_(this__9954.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9956);
if((node__9957 === this__9954.root))
{} else
{this__9954.root = node__9957;
}
if(cljs.core.truth_((removed_leaf_QMARK___9956[0])))
{this__9954.count = (this__9954.count - 1);
} else
{}
return tcoll__9955;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9958 = this;
var tcoll__9959 = this;
if(this__9958.edit)
{this__9958.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9958.count,this__9958.root,this__9958.has_nil_QMARK_,this__9958.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9964 = node;
var stack__9965 = stack;
while(true){
if(!((t__9964 == null)))
{{
var G__9966 = ((ascending_QMARK_)?t__9964.left:t__9964.right);
var G__9967 = cljs.core.conj.call(null,stack__9965,t__9964);
t__9964 = G__9966;
stack__9965 = G__9967;
continue;
}
} else
{return stack__9965;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9968 = this;
var h__2192__auto____9969 = this__9968.__hash;
if(!((h__2192__auto____9969 == null)))
{return h__2192__auto____9969;
} else
{var h__2192__auto____9970 = cljs.core.hash_coll.call(null,coll);
this__9968.__hash = h__2192__auto____9970;
return h__2192__auto____9970;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9971 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9972 = this;
var this__9973 = this;
return cljs.core.pr_str.call(null,this__9973);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9974 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9975 = this;
if((this__9975.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9975.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9976 = this;
return cljs.core.peek.call(null,this__9976.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9977 = this;
var t__9978 = cljs.core.first.call(null,this__9977.stack);
var next_stack__9979 = cljs.core.tree_map_seq_push.call(null,((this__9977.ascending_QMARK_)?t__9978.right:t__9978.left),cljs.core.next.call(null,this__9977.stack),this__9977.ascending_QMARK_);
if(!((next_stack__9979 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9979,this__9977.ascending_QMARK_,(this__9977.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9980 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9981 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9981.stack,this__9981.ascending_QMARK_,this__9981.cnt,this__9981.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9982 = this;
return this__9982.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
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
{if((function (){var and__3822__auto____9984 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____9984)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9984;
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
{if((function (){var and__3822__auto____9986 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____9986)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9986;
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
var init__9990 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9990))
{return cljs.core.deref.call(null,init__9990);
} else
{var init__9991 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9990):init__9990);
if(cljs.core.reduced_QMARK_.call(null,init__9991))
{return cljs.core.deref.call(null,init__9991);
} else
{var init__9992 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9991):init__9991);
if(cljs.core.reduced_QMARK_.call(null,init__9992))
{return cljs.core.deref.call(null,init__9992);
} else
{return init__9992;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9995 = this;
var h__2192__auto____9996 = this__9995.__hash;
if(!((h__2192__auto____9996 == null)))
{return h__2192__auto____9996;
} else
{var h__2192__auto____9997 = cljs.core.hash_coll.call(null,coll);
this__9995.__hash = h__2192__auto____9997;
return h__2192__auto____9997;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9998 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9999 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__10000 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__10000.key,this__10000.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__10048 = null;
var G__10048__2 = (function (this_sym10001,k){
var this__10003 = this;
var this_sym10001__10004 = this;
var node__10005 = this_sym10001__10004;
return node__10005.cljs$core$ILookup$_lookup$arity$2(node__10005,k);
});
var G__10048__3 = (function (this_sym10002,k,not_found){
var this__10003 = this;
var this_sym10002__10006 = this;
var node__10007 = this_sym10002__10006;
return node__10007.cljs$core$ILookup$_lookup$arity$3(node__10007,k,not_found);
});
G__10048 = function(this_sym10002,k,not_found){
switch(arguments.length){
case 2:
return G__10048__2.call(this,this_sym10002,k);
case 3:
return G__10048__3.call(this,this_sym10002,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10048;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9993,args9994){
var this__10008 = this;
return this_sym9993.call.apply(this_sym9993,[this_sym9993].concat(args9994.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__10009 = this;
return cljs.core.PersistentVector.fromArray([this__10009.key,this__10009.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__10010 = this;
return this__10010.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__10011 = this;
return this__10011.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__10012 = this;
var node__10013 = this;
return ins.balance_right(node__10013);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__10014 = this;
var node__10015 = this;
return (new cljs.core.RedNode(this__10014.key,this__10014.val,this__10014.left,this__10014.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__10016 = this;
var node__10017 = this;
return cljs.core.balance_right_del.call(null,this__10016.key,this__10016.val,this__10016.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__10018 = this;
var node__10019 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__10020 = this;
var node__10021 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__10021,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__10022 = this;
var node__10023 = this;
return cljs.core.balance_left_del.call(null,this__10022.key,this__10022.val,del,this__10022.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__10024 = this;
var node__10025 = this;
return ins.balance_left(node__10025);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__10026 = this;
var node__10027 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__10027,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__10049 = null;
var G__10049__0 = (function (){
var this__10028 = this;
var this__10030 = this;
return cljs.core.pr_str.call(null,this__10030);
});
G__10049 = function(){
switch(arguments.length){
case 0:
return G__10049__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10049;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__10031 = this;
var node__10032 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__10032,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__10033 = this;
var node__10034 = this;
return node__10034;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__10035 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__10036 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__10037 = this;
return cljs.core.list.call(null,this__10037.key,this__10037.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__10038 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__10039 = this;
return this__10039.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__10040 = this;
return cljs.core.PersistentVector.fromArray([this__10040.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__10041 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__10041.key,this__10041.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10042 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__10043 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__10043.key,this__10043.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__10044 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__10045 = this;
if((n === 0))
{return this__10045.key;
} else
{if((n === 1))
{return this__10045.val;
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
var this__10046 = this;
if((n === 0))
{return this__10046.key;
} else
{if((n === 1))
{return this__10046.val;
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
var this__10047 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10052 = this;
var h__2192__auto____10053 = this__10052.__hash;
if(!((h__2192__auto____10053 == null)))
{return h__2192__auto____10053;
} else
{var h__2192__auto____10054 = cljs.core.hash_coll.call(null,coll);
this__10052.__hash = h__2192__auto____10054;
return h__2192__auto____10054;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__10055 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__10056 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__10057 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__10057.key,this__10057.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__10105 = null;
var G__10105__2 = (function (this_sym10058,k){
var this__10060 = this;
var this_sym10058__10061 = this;
var node__10062 = this_sym10058__10061;
return node__10062.cljs$core$ILookup$_lookup$arity$2(node__10062,k);
});
var G__10105__3 = (function (this_sym10059,k,not_found){
var this__10060 = this;
var this_sym10059__10063 = this;
var node__10064 = this_sym10059__10063;
return node__10064.cljs$core$ILookup$_lookup$arity$3(node__10064,k,not_found);
});
G__10105 = function(this_sym10059,k,not_found){
switch(arguments.length){
case 2:
return G__10105__2.call(this,this_sym10059,k);
case 3:
return G__10105__3.call(this,this_sym10059,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10105;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym10050,args10051){
var this__10065 = this;
return this_sym10050.call.apply(this_sym10050,[this_sym10050].concat(args10051.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__10066 = this;
return cljs.core.PersistentVector.fromArray([this__10066.key,this__10066.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__10067 = this;
return this__10067.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__10068 = this;
return this__10068.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__10069 = this;
var node__10070 = this;
return (new cljs.core.RedNode(this__10069.key,this__10069.val,this__10069.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__10071 = this;
var node__10072 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__10073 = this;
var node__10074 = this;
return (new cljs.core.RedNode(this__10073.key,this__10073.val,this__10073.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__10075 = this;
var node__10076 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__10077 = this;
var node__10078 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__10078,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__10079 = this;
var node__10080 = this;
return (new cljs.core.RedNode(this__10079.key,this__10079.val,del,this__10079.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__10081 = this;
var node__10082 = this;
return (new cljs.core.RedNode(this__10081.key,this__10081.val,ins,this__10081.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__10083 = this;
var node__10084 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10083.left))
{return (new cljs.core.RedNode(this__10083.key,this__10083.val,this__10083.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__10083.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10083.right))
{return (new cljs.core.RedNode(this__10083.right.key,this__10083.right.val,(new cljs.core.BlackNode(this__10083.key,this__10083.val,this__10083.left,this__10083.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__10083.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__10084,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__10106 = null;
var G__10106__0 = (function (){
var this__10085 = this;
var this__10087 = this;
return cljs.core.pr_str.call(null,this__10087);
});
G__10106 = function(){
switch(arguments.length){
case 0:
return G__10106__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10106;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__10088 = this;
var node__10089 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10088.right))
{return (new cljs.core.RedNode(this__10088.key,this__10088.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__10088.left,null)),this__10088.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10088.left))
{return (new cljs.core.RedNode(this__10088.left.key,this__10088.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__10088.left.left,null)),(new cljs.core.BlackNode(this__10088.key,this__10088.val,this__10088.left.right,this__10088.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__10089,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__10090 = this;
var node__10091 = this;
return (new cljs.core.BlackNode(this__10090.key,this__10090.val,this__10090.left,this__10090.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__10092 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__10093 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__10094 = this;
return cljs.core.list.call(null,this__10094.key,this__10094.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__10095 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__10096 = this;
return this__10096.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__10097 = this;
return cljs.core.PersistentVector.fromArray([this__10097.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__10098 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__10098.key,this__10098.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10099 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__10100 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__10100.key,this__10100.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__10101 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__10102 = this;
if((n === 0))
{return this__10102.key;
} else
{if((n === 1))
{return this__10102.val;
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
var this__10103 = this;
if((n === 0))
{return this__10103.key;
} else
{if((n === 1))
{return this__10103.val;
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
var this__10104 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__10110 = comp.call(null,k,tree.key);
if((c__10110 === 0))
{(found[0] = tree);
return null;
} else
{if((c__10110 < 0))
{var ins__10111 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__10111 == null)))
{return tree.add_left(ins__10111);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__10112 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__10112 == null)))
{return tree.add_right(ins__10112);
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
{var app__10115 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__10115))
{return (new cljs.core.RedNode(app__10115.key,app__10115.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__10115.left,null)),(new cljs.core.RedNode(right.key,right.val,app__10115.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__10115,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__10116 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__10116))
{return (new cljs.core.RedNode(app__10116.key,app__10116.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__10116.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__10116.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__10116,right.right,null)));
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
{var c__10122 = comp.call(null,k,tree.key);
if((c__10122 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__10122 < 0))
{var del__10123 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____10124 = !((del__10123 == null));
if(or__3824__auto____10124)
{return or__3824__auto____10124;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__10123,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__10123,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__10125 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____10126 = !((del__10125 == null));
if(or__3824__auto____10126)
{return or__3824__auto____10126;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__10125);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__10125,null));
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
var tk__10129 = tree.key;
var c__10130 = comp.call(null,k,tk__10129);
if((c__10130 === 0))
{return tree.replace(tk__10129,v,tree.left,tree.right);
} else
{if((c__10130 < 0))
{return tree.replace(tk__10129,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__10129,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10133 = this;
var h__2192__auto____10134 = this__10133.__hash;
if(!((h__2192__auto____10134 == null)))
{return h__2192__auto____10134;
} else
{var h__2192__auto____10135 = cljs.core.hash_imap.call(null,coll);
this__10133.__hash = h__2192__auto____10135;
return h__2192__auto____10135;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10136 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10137 = this;
var n__10138 = coll.entry_at(k);
if(!((n__10138 == null)))
{return n__10138.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10139 = this;
var found__10140 = [null];
var t__10141 = cljs.core.tree_map_add.call(null,this__10139.comp,this__10139.tree,k,v,found__10140);
if((t__10141 == null))
{var found_node__10142 = cljs.core.nth.call(null,found__10140,0);
if(cljs.core._EQ_.call(null,v,found_node__10142.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10139.comp,cljs.core.tree_map_replace.call(null,this__10139.comp,this__10139.tree,k,v),this__10139.cnt,this__10139.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10139.comp,t__10141.blacken(),(this__10139.cnt + 1),this__10139.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10143 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__10177 = null;
var G__10177__2 = (function (this_sym10144,k){
var this__10146 = this;
var this_sym10144__10147 = this;
var coll__10148 = this_sym10144__10147;
return coll__10148.cljs$core$ILookup$_lookup$arity$2(coll__10148,k);
});
var G__10177__3 = (function (this_sym10145,k,not_found){
var this__10146 = this;
var this_sym10145__10149 = this;
var coll__10150 = this_sym10145__10149;
return coll__10150.cljs$core$ILookup$_lookup$arity$3(coll__10150,k,not_found);
});
G__10177 = function(this_sym10145,k,not_found){
switch(arguments.length){
case 2:
return G__10177__2.call(this,this_sym10145,k);
case 3:
return G__10177__3.call(this,this_sym10145,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10177;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym10131,args10132){
var this__10151 = this;
return this_sym10131.call.apply(this_sym10131,[this_sym10131].concat(args10132.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10152 = this;
if(!((this__10152.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__10152.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10153 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10154 = this;
if((this__10154.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10154.tree,false,this__10154.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__10155 = this;
var this__10156 = this;
return cljs.core.pr_str.call(null,this__10156);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__10157 = this;
var coll__10158 = this;
var t__10159 = this__10157.tree;
while(true){
if(!((t__10159 == null)))
{var c__10160 = this__10157.comp.call(null,k,t__10159.key);
if((c__10160 === 0))
{return t__10159;
} else
{if((c__10160 < 0))
{{
var G__10178 = t__10159.left;
t__10159 = G__10178;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__10179 = t__10159.right;
t__10159 = G__10179;
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
var this__10161 = this;
if((this__10161.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10161.tree,ascending_QMARK_,this__10161.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10162 = this;
if((this__10162.cnt > 0))
{var stack__10163 = null;
var t__10164 = this__10162.tree;
while(true){
if(!((t__10164 == null)))
{var c__10165 = this__10162.comp.call(null,k,t__10164.key);
if((c__10165 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__10163,t__10164),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__10165 < 0))
{{
var G__10180 = cljs.core.conj.call(null,stack__10163,t__10164);
var G__10181 = t__10164.left;
stack__10163 = G__10180;
t__10164 = G__10181;
continue;
}
} else
{{
var G__10182 = stack__10163;
var G__10183 = t__10164.right;
stack__10163 = G__10182;
t__10164 = G__10183;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__10165 > 0))
{{
var G__10184 = cljs.core.conj.call(null,stack__10163,t__10164);
var G__10185 = t__10164.right;
stack__10163 = G__10184;
t__10164 = G__10185;
continue;
}
} else
{{
var G__10186 = stack__10163;
var G__10187 = t__10164.left;
stack__10163 = G__10186;
t__10164 = G__10187;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__10163 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__10163,ascending_QMARK_,-1,null));
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
var this__10166 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10167 = this;
return this__10167.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10168 = this;
if((this__10168.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10168.tree,true,this__10168.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10169 = this;
return this__10169.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10170 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10171 = this;
return (new cljs.core.PersistentTreeMap(this__10171.comp,this__10171.tree,this__10171.cnt,meta,this__10171.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10172 = this;
return this__10172.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10173 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__10173.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10174 = this;
var found__10175 = [null];
var t__10176 = cljs.core.tree_map_remove.call(null,this__10174.comp,this__10174.tree,k,found__10175);
if((t__10176 == null))
{if((cljs.core.nth.call(null,found__10175,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10174.comp,null,0,this__10174.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10174.comp,t__10176.blacken(),(this__10174.cnt - 1),this__10174.meta,null));
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
var in__10190 = cljs.core.seq.call(null,keyvals);
var out__10191 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__10190)
{{
var G__10192 = cljs.core.nnext.call(null,in__10190);
var G__10193 = cljs.core.assoc_BANG_.call(null,out__10191,cljs.core.first.call(null,in__10190),cljs.core.second.call(null,in__10190));
in__10190 = G__10192;
out__10191 = G__10193;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10191);
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
hash_map.cljs$lang$applyTo = (function (arglist__10194){
var keyvals = cljs.core.seq(arglist__10194);;
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
array_map.cljs$lang$applyTo = (function (arglist__10195){
var keyvals = cljs.core.seq(arglist__10195);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__10199 = [];
var obj__10200 = {};
var kvs__10201 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__10201)
{ks__10199.push(cljs.core.first.call(null,kvs__10201));
(obj__10200[cljs.core.first.call(null,kvs__10201)] = cljs.core.second.call(null,kvs__10201));
{
var G__10202 = cljs.core.nnext.call(null,kvs__10201);
kvs__10201 = G__10202;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__10199,obj__10200);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__10203){
var keyvals = cljs.core.seq(arglist__10203);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__10206 = cljs.core.seq.call(null,keyvals);
var out__10207 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__10206)
{{
var G__10208 = cljs.core.nnext.call(null,in__10206);
var G__10209 = cljs.core.assoc.call(null,out__10207,cljs.core.first.call(null,in__10206),cljs.core.second.call(null,in__10206));
in__10206 = G__10208;
out__10207 = G__10209;
continue;
}
} else
{return out__10207;
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
sorted_map.cljs$lang$applyTo = (function (arglist__10210){
var keyvals = cljs.core.seq(arglist__10210);;
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
var in__10213 = cljs.core.seq.call(null,keyvals);
var out__10214 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__10213)
{{
var G__10215 = cljs.core.nnext.call(null,in__10213);
var G__10216 = cljs.core.assoc.call(null,out__10214,cljs.core.first.call(null,in__10213),cljs.core.second.call(null,in__10213));
in__10213 = G__10215;
out__10214 = G__10216;
continue;
}
} else
{return out__10214;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__10217){
var comparator = cljs.core.first(arglist__10217);
var keyvals = cljs.core.rest(arglist__10217);
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
{return cljs.core.reduce.call(null,(function (p1__10218_SHARP_,p2__10219_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____10221 = p1__10218_SHARP_;
if(cljs.core.truth_(or__3824__auto____10221))
{return or__3824__auto____10221;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__10219_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__10222){
var maps = cljs.core.seq(arglist__10222);;
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
{var merge_entry__10230 = (function (m,e){
var k__10228 = cljs.core.first.call(null,e);
var v__10229 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__10228))
{return cljs.core.assoc.call(null,m,k__10228,f.call(null,cljs.core._lookup.call(null,m,k__10228,null),v__10229));
} else
{return cljs.core.assoc.call(null,m,k__10228,v__10229);
}
});
var merge2__10232 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__10230,(function (){var or__3824__auto____10231 = m1;
if(cljs.core.truth_(or__3824__auto____10231))
{return or__3824__auto____10231;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__10232,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__10233){
var f = cljs.core.first(arglist__10233);
var maps = cljs.core.rest(arglist__10233);
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
var ret__10238 = cljs.core.ObjMap.EMPTY;
var keys__10239 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__10239)
{var key__10240 = cljs.core.first.call(null,keys__10239);
var entry__10241 = cljs.core._lookup.call(null,map,key__10240,"\uFDD0'cljs.core/not-found");
{
var G__10242 = ((cljs.core.not_EQ_.call(null,entry__10241,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__10238,key__10240,entry__10241):ret__10238);
var G__10243 = cljs.core.next.call(null,keys__10239);
ret__10238 = G__10242;
keys__10239 = G__10243;
continue;
}
} else
{return ret__10238;
}
break;
}
});

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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10247 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__10247.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10248 = this;
var h__2192__auto____10249 = this__10248.__hash;
if(!((h__2192__auto____10249 == null)))
{return h__2192__auto____10249;
} else
{var h__2192__auto____10250 = cljs.core.hash_iset.call(null,coll);
this__10248.__hash = h__2192__auto____10250;
return h__2192__auto____10250;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10251 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10252 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__10252.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__10273 = null;
var G__10273__2 = (function (this_sym10253,k){
var this__10255 = this;
var this_sym10253__10256 = this;
var coll__10257 = this_sym10253__10256;
return coll__10257.cljs$core$ILookup$_lookup$arity$2(coll__10257,k);
});
var G__10273__3 = (function (this_sym10254,k,not_found){
var this__10255 = this;
var this_sym10254__10258 = this;
var coll__10259 = this_sym10254__10258;
return coll__10259.cljs$core$ILookup$_lookup$arity$3(coll__10259,k,not_found);
});
G__10273 = function(this_sym10254,k,not_found){
switch(arguments.length){
case 2:
return G__10273__2.call(this,this_sym10254,k);
case 3:
return G__10273__3.call(this,this_sym10254,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10273;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym10245,args10246){
var this__10260 = this;
return this_sym10245.call.apply(this_sym10245,[this_sym10245].concat(args10246.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10261 = this;
return (new cljs.core.PersistentHashSet(this__10261.meta,cljs.core.assoc.call(null,this__10261.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__10262 = this;
var this__10263 = this;
return cljs.core.pr_str.call(null,this__10263);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10264 = this;
return cljs.core.keys.call(null,this__10264.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10265 = this;
return (new cljs.core.PersistentHashSet(this__10265.meta,cljs.core.dissoc.call(null,this__10265.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10266 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10267 = this;
var and__3822__auto____10268 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____10268)
{var and__3822__auto____10269 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____10269)
{return cljs.core.every_QMARK_.call(null,(function (p1__10244_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__10244_SHARP_);
}),other);
} else
{return and__3822__auto____10269;
}
} else
{return and__3822__auto____10268;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10270 = this;
return (new cljs.core.PersistentHashSet(meta,this__10270.hash_map,this__10270.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10271 = this;
return this__10271.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10272 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__10272.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__10274 = cljs.core.count.call(null,items);
var i__10275 = 0;
var out__10276 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__10275 < len__10274))
{{
var G__10277 = (i__10275 + 1);
var G__10278 = cljs.core.conj_BANG_.call(null,out__10276,(items[i__10275]));
i__10275 = G__10277;
out__10276 = G__10278;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10276);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__10296 = null;
var G__10296__2 = (function (this_sym10282,k){
var this__10284 = this;
var this_sym10282__10285 = this;
var tcoll__10286 = this_sym10282__10285;
if((cljs.core._lookup.call(null,this__10284.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__10296__3 = (function (this_sym10283,k,not_found){
var this__10284 = this;
var this_sym10283__10287 = this;
var tcoll__10288 = this_sym10283__10287;
if((cljs.core._lookup.call(null,this__10284.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__10296 = function(this_sym10283,k,not_found){
switch(arguments.length){
case 2:
return G__10296__2.call(this,this_sym10283,k);
case 3:
return G__10296__3.call(this,this_sym10283,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10296;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym10280,args10281){
var this__10289 = this;
return this_sym10280.call.apply(this_sym10280,[this_sym10280].concat(args10281.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__10290 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__10291 = this;
if((cljs.core._lookup.call(null,this__10291.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__10292 = this;
return cljs.core.count.call(null,this__10292.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__10293 = this;
this__10293.transient_map = cljs.core.dissoc_BANG_.call(null,this__10293.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10294 = this;
this__10294.transient_map = cljs.core.assoc_BANG_.call(null,this__10294.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10295 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__10295.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10299 = this;
var h__2192__auto____10300 = this__10299.__hash;
if(!((h__2192__auto____10300 == null)))
{return h__2192__auto____10300;
} else
{var h__2192__auto____10301 = cljs.core.hash_iset.call(null,coll);
this__10299.__hash = h__2192__auto____10301;
return h__2192__auto____10301;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10302 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10303 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__10303.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__10329 = null;
var G__10329__2 = (function (this_sym10304,k){
var this__10306 = this;
var this_sym10304__10307 = this;
var coll__10308 = this_sym10304__10307;
return coll__10308.cljs$core$ILookup$_lookup$arity$2(coll__10308,k);
});
var G__10329__3 = (function (this_sym10305,k,not_found){
var this__10306 = this;
var this_sym10305__10309 = this;
var coll__10310 = this_sym10305__10309;
return coll__10310.cljs$core$ILookup$_lookup$arity$3(coll__10310,k,not_found);
});
G__10329 = function(this_sym10305,k,not_found){
switch(arguments.length){
case 2:
return G__10329__2.call(this,this_sym10305,k);
case 3:
return G__10329__3.call(this,this_sym10305,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10329;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym10297,args10298){
var this__10311 = this;
return this_sym10297.call.apply(this_sym10297,[this_sym10297].concat(args10298.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10312 = this;
return (new cljs.core.PersistentTreeSet(this__10312.meta,cljs.core.assoc.call(null,this__10312.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10313 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__10313.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__10314 = this;
var this__10315 = this;
return cljs.core.pr_str.call(null,this__10315);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__10316 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__10316.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10317 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__10317.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__10318 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10319 = this;
return cljs.core._comparator.call(null,this__10319.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10320 = this;
return cljs.core.keys.call(null,this__10320.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10321 = this;
return (new cljs.core.PersistentTreeSet(this__10321.meta,cljs.core.dissoc.call(null,this__10321.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10322 = this;
return cljs.core.count.call(null,this__10322.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10323 = this;
var and__3822__auto____10324 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____10324)
{var and__3822__auto____10325 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____10325)
{return cljs.core.every_QMARK_.call(null,(function (p1__10279_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__10279_SHARP_);
}),other);
} else
{return and__3822__auto____10325;
}
} else
{return and__3822__auto____10324;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10326 = this;
return (new cljs.core.PersistentTreeSet(meta,this__10326.tree_map,this__10326.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10327 = this;
return this__10327.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10328 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__10328.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__10334__delegate = function (keys){
var in__10332 = cljs.core.seq.call(null,keys);
var out__10333 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__10332))
{{
var G__10335 = cljs.core.next.call(null,in__10332);
var G__10336 = cljs.core.conj_BANG_.call(null,out__10333,cljs.core.first.call(null,in__10332));
in__10332 = G__10335;
out__10333 = G__10336;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10333);
}
break;
}
};
var G__10334 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10334__delegate.call(this, keys);
};
G__10334.cljs$lang$maxFixedArity = 0;
G__10334.cljs$lang$applyTo = (function (arglist__10337){
var keys = cljs.core.seq(arglist__10337);;
return G__10334__delegate(keys);
});
G__10334.cljs$lang$arity$variadic = G__10334__delegate;
return G__10334;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
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
sorted_set.cljs$lang$applyTo = (function (arglist__10338){
var keys = cljs.core.seq(arglist__10338);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__10340){
var comparator = cljs.core.first(arglist__10340);
var keys = cljs.core.rest(arglist__10340);
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
{var n__10346 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____10347 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____10347))
{var e__10348 = temp__3971__auto____10347;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__10348));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__10346,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__10339_SHARP_){
var temp__3971__auto____10349 = cljs.core.find.call(null,smap,p1__10339_SHARP_);
if(cljs.core.truth_(temp__3971__auto____10349))
{var e__10350 = temp__3971__auto____10349;
return cljs.core.second.call(null,e__10350);
} else
{return p1__10339_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__10380 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__10373,seen){
while(true){
var vec__10374__10375 = p__10373;
var f__10376 = cljs.core.nth.call(null,vec__10374__10375,0,null);
var xs__10377 = vec__10374__10375;
var temp__3974__auto____10378 = cljs.core.seq.call(null,xs__10377);
if(temp__3974__auto____10378)
{var s__10379 = temp__3974__auto____10378;
if(cljs.core.contains_QMARK_.call(null,seen,f__10376))
{{
var G__10381 = cljs.core.rest.call(null,s__10379);
var G__10382 = seen;
p__10373 = G__10381;
seen = G__10382;
continue;
}
} else
{return cljs.core.cons.call(null,f__10376,step.call(null,cljs.core.rest.call(null,s__10379),cljs.core.conj.call(null,seen,f__10376)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__10380.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__10385 = cljs.core.PersistentVector.EMPTY;
var s__10386 = s;
while(true){
if(cljs.core.next.call(null,s__10386))
{{
var G__10387 = cljs.core.conj.call(null,ret__10385,cljs.core.first.call(null,s__10386));
var G__10388 = cljs.core.next.call(null,s__10386);
ret__10385 = G__10387;
s__10386 = G__10388;
continue;
}
} else
{return cljs.core.seq.call(null,ret__10385);
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
{if((function (){var or__3824__auto____10391 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____10391)
{return or__3824__auto____10391;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__10392 = x.lastIndexOf("/");
if((i__10392 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__10392 + 1));
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
if((function (){var or__3824__auto____10395 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____10395)
{return or__3824__auto____10395;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__10396 = x.lastIndexOf("/");
if((i__10396 > -1))
{return cljs.core.subs.call(null,x,2,i__10396);
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
var map__10403 = cljs.core.ObjMap.EMPTY;
var ks__10404 = cljs.core.seq.call(null,keys);
var vs__10405 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____10406 = ks__10404;
if(and__3822__auto____10406)
{return vs__10405;
} else
{return and__3822__auto____10406;
}
})())
{{
var G__10407 = cljs.core.assoc.call(null,map__10403,cljs.core.first.call(null,ks__10404),cljs.core.first.call(null,vs__10405));
var G__10408 = cljs.core.next.call(null,ks__10404);
var G__10409 = cljs.core.next.call(null,vs__10405);
map__10403 = G__10407;
ks__10404 = G__10408;
vs__10405 = G__10409;
continue;
}
} else
{return map__10403;
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
var G__10412__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__10397_SHARP_,p2__10398_SHARP_){
return max_key.call(null,k,p1__10397_SHARP_,p2__10398_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__10412 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10412__delegate.call(this, k, x, y, more);
};
G__10412.cljs$lang$maxFixedArity = 3;
G__10412.cljs$lang$applyTo = (function (arglist__10413){
var k = cljs.core.first(arglist__10413);
var x = cljs.core.first(cljs.core.next(arglist__10413));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10413)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10413)));
return G__10412__delegate(k, x, y, more);
});
G__10412.cljs$lang$arity$variadic = G__10412__delegate;
return G__10412;
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
var G__10414__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__10410_SHARP_,p2__10411_SHARP_){
return min_key.call(null,k,p1__10410_SHARP_,p2__10411_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__10414 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10414__delegate.call(this, k, x, y, more);
};
G__10414.cljs$lang$maxFixedArity = 3;
G__10414.cljs$lang$applyTo = (function (arglist__10415){
var k = cljs.core.first(arglist__10415);
var x = cljs.core.first(cljs.core.next(arglist__10415));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10415)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10415)));
return G__10414__delegate(k, x, y, more);
});
G__10414.cljs$lang$arity$variadic = G__10414__delegate;
return G__10414;
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
var temp__3974__auto____10418 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10418)
{var s__10419 = temp__3974__auto____10418;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__10419),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__10419)));
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
var temp__3974__auto____10422 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10422)
{var s__10423 = temp__3974__auto____10422;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__10423))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10423),take_while.call(null,pred,cljs.core.rest.call(null,s__10423)));
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
var comp__10425 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__10425.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__10437 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____10438 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____10438))
{var vec__10439__10440 = temp__3974__auto____10438;
var e__10441 = cljs.core.nth.call(null,vec__10439__10440,0,null);
var s__10442 = vec__10439__10440;
if(cljs.core.truth_(include__10437.call(null,e__10441)))
{return s__10442;
} else
{return cljs.core.next.call(null,s__10442);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__10437,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____10443 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____10443))
{var vec__10444__10445 = temp__3974__auto____10443;
var e__10446 = cljs.core.nth.call(null,vec__10444__10445,0,null);
var s__10447 = vec__10444__10445;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__10446))?s__10447:cljs.core.next.call(null,s__10447)));
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
var include__10459 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____10460 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____10460))
{var vec__10461__10462 = temp__3974__auto____10460;
var e__10463 = cljs.core.nth.call(null,vec__10461__10462,0,null);
var s__10464 = vec__10461__10462;
if(cljs.core.truth_(include__10459.call(null,e__10463)))
{return s__10464;
} else
{return cljs.core.next.call(null,s__10464);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__10459,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____10465 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____10465))
{var vec__10466__10467 = temp__3974__auto____10465;
var e__10468 = cljs.core.nth.call(null,vec__10466__10467,0,null);
var s__10469 = vec__10466__10467;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__10468))?s__10469:cljs.core.next.call(null,s__10469)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__10470 = this;
var h__2192__auto____10471 = this__10470.__hash;
if(!((h__2192__auto____10471 == null)))
{return h__2192__auto____10471;
} else
{var h__2192__auto____10472 = cljs.core.hash_coll.call(null,rng);
this__10470.__hash = h__2192__auto____10472;
return h__2192__auto____10472;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__10473 = this;
if((this__10473.step > 0))
{if(((this__10473.start + this__10473.step) < this__10473.end))
{return (new cljs.core.Range(this__10473.meta,(this__10473.start + this__10473.step),this__10473.end,this__10473.step,null));
} else
{return null;
}
} else
{if(((this__10473.start + this__10473.step) > this__10473.end))
{return (new cljs.core.Range(this__10473.meta,(this__10473.start + this__10473.step),this__10473.end,this__10473.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__10474 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__10475 = this;
var this__10476 = this;
return cljs.core.pr_str.call(null,this__10476);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__10477 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__10478 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__10479 = this;
if((this__10479.step > 0))
{if((this__10479.start < this__10479.end))
{return rng;
} else
{return null;
}
} else
{if((this__10479.start > this__10479.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__10480 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__10480.end - this__10480.start) / this__10480.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__10481 = this;
return this__10481.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__10482 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__10482.meta,(this__10482.start + this__10482.step),this__10482.end,this__10482.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__10483 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__10484 = this;
return (new cljs.core.Range(meta,this__10484.start,this__10484.end,this__10484.step,this__10484.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__10485 = this;
return this__10485.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__10486 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__10486.start + (n * this__10486.step));
} else
{if((function (){var and__3822__auto____10487 = (this__10486.start > this__10486.end);
if(and__3822__auto____10487)
{return (this__10486.step === 0);
} else
{return and__3822__auto____10487;
}
})())
{return this__10486.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__10488 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__10488.start + (n * this__10488.step));
} else
{if((function (){var and__3822__auto____10489 = (this__10488.start > this__10488.end);
if(and__3822__auto____10489)
{return (this__10488.step === 0);
} else
{return and__3822__auto____10489;
}
})())
{return this__10488.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__10490 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10490.meta);
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
var temp__3974__auto____10493 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10493)
{var s__10494 = temp__3974__auto____10493;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__10494),take_nth.call(null,n,cljs.core.drop.call(null,n,s__10494)));
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
var temp__3974__auto____10501 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10501)
{var s__10502 = temp__3974__auto____10501;
var fst__10503 = cljs.core.first.call(null,s__10502);
var fv__10504 = f.call(null,fst__10503);
var run__10505 = cljs.core.cons.call(null,fst__10503,cljs.core.take_while.call(null,(function (p1__10495_SHARP_){
return cljs.core._EQ_.call(null,fv__10504,f.call(null,p1__10495_SHARP_));
}),cljs.core.next.call(null,s__10502)));
return cljs.core.cons.call(null,run__10505,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__10505),s__10502))));
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
var temp__3971__auto____10520 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____10520)
{var s__10521 = temp__3971__auto____10520;
return reductions.call(null,f,cljs.core.first.call(null,s__10521),cljs.core.rest.call(null,s__10521));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10522 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10522)
{var s__10523 = temp__3974__auto____10522;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__10523)),cljs.core.rest.call(null,s__10523));
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
var G__10526 = null;
var G__10526__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__10526__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__10526__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__10526__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__10526__4 = (function() { 
var G__10527__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__10527 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10527__delegate.call(this, x, y, z, args);
};
G__10527.cljs$lang$maxFixedArity = 3;
G__10527.cljs$lang$applyTo = (function (arglist__10528){
var x = cljs.core.first(arglist__10528);
var y = cljs.core.first(cljs.core.next(arglist__10528));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10528)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10528)));
return G__10527__delegate(x, y, z, args);
});
G__10527.cljs$lang$arity$variadic = G__10527__delegate;
return G__10527;
})()
;
G__10526 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10526__0.call(this);
case 1:
return G__10526__1.call(this,x);
case 2:
return G__10526__2.call(this,x,y);
case 3:
return G__10526__3.call(this,x,y,z);
default:
return G__10526__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10526.cljs$lang$maxFixedArity = 3;
G__10526.cljs$lang$applyTo = G__10526__4.cljs$lang$applyTo;
return G__10526;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__10529 = null;
var G__10529__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__10529__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__10529__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__10529__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__10529__4 = (function() { 
var G__10530__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10530 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10530__delegate.call(this, x, y, z, args);
};
G__10530.cljs$lang$maxFixedArity = 3;
G__10530.cljs$lang$applyTo = (function (arglist__10531){
var x = cljs.core.first(arglist__10531);
var y = cljs.core.first(cljs.core.next(arglist__10531));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10531)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10531)));
return G__10530__delegate(x, y, z, args);
});
G__10530.cljs$lang$arity$variadic = G__10530__delegate;
return G__10530;
})()
;
G__10529 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10529__0.call(this);
case 1:
return G__10529__1.call(this,x);
case 2:
return G__10529__2.call(this,x,y);
case 3:
return G__10529__3.call(this,x,y,z);
default:
return G__10529__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10529.cljs$lang$maxFixedArity = 3;
G__10529.cljs$lang$applyTo = G__10529__4.cljs$lang$applyTo;
return G__10529;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__10532 = null;
var G__10532__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__10532__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__10532__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__10532__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__10532__4 = (function() { 
var G__10533__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__10533 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10533__delegate.call(this, x, y, z, args);
};
G__10533.cljs$lang$maxFixedArity = 3;
G__10533.cljs$lang$applyTo = (function (arglist__10534){
var x = cljs.core.first(arglist__10534);
var y = cljs.core.first(cljs.core.next(arglist__10534));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10534)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10534)));
return G__10533__delegate(x, y, z, args);
});
G__10533.cljs$lang$arity$variadic = G__10533__delegate;
return G__10533;
})()
;
G__10532 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10532__0.call(this);
case 1:
return G__10532__1.call(this,x);
case 2:
return G__10532__2.call(this,x,y);
case 3:
return G__10532__3.call(this,x,y,z);
default:
return G__10532__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10532.cljs$lang$maxFixedArity = 3;
G__10532.cljs$lang$applyTo = G__10532__4.cljs$lang$applyTo;
return G__10532;
})()
});
var juxt__4 = (function() { 
var G__10535__delegate = function (f,g,h,fs){
var fs__10525 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__10536 = null;
var G__10536__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__10506_SHARP_,p2__10507_SHARP_){
return cljs.core.conj.call(null,p1__10506_SHARP_,p2__10507_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__10525);
});
var G__10536__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__10508_SHARP_,p2__10509_SHARP_){
return cljs.core.conj.call(null,p1__10508_SHARP_,p2__10509_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__10525);
});
var G__10536__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__10510_SHARP_,p2__10511_SHARP_){
return cljs.core.conj.call(null,p1__10510_SHARP_,p2__10511_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__10525);
});
var G__10536__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__10512_SHARP_,p2__10513_SHARP_){
return cljs.core.conj.call(null,p1__10512_SHARP_,p2__10513_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__10525);
});
var G__10536__4 = (function() { 
var G__10537__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__10514_SHARP_,p2__10515_SHARP_){
return cljs.core.conj.call(null,p1__10514_SHARP_,cljs.core.apply.call(null,p2__10515_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__10525);
};
var G__10537 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10537__delegate.call(this, x, y, z, args);
};
G__10537.cljs$lang$maxFixedArity = 3;
G__10537.cljs$lang$applyTo = (function (arglist__10538){
var x = cljs.core.first(arglist__10538);
var y = cljs.core.first(cljs.core.next(arglist__10538));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10538)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10538)));
return G__10537__delegate(x, y, z, args);
});
G__10537.cljs$lang$arity$variadic = G__10537__delegate;
return G__10537;
})()
;
G__10536 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10536__0.call(this);
case 1:
return G__10536__1.call(this,x);
case 2:
return G__10536__2.call(this,x,y);
case 3:
return G__10536__3.call(this,x,y,z);
default:
return G__10536__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10536.cljs$lang$maxFixedArity = 3;
G__10536.cljs$lang$applyTo = G__10536__4.cljs$lang$applyTo;
return G__10536;
})()
};
var G__10535 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10535__delegate.call(this, f, g, h, fs);
};
G__10535.cljs$lang$maxFixedArity = 3;
G__10535.cljs$lang$applyTo = (function (arglist__10539){
var f = cljs.core.first(arglist__10539);
var g = cljs.core.first(cljs.core.next(arglist__10539));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10539)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10539)));
return G__10535__delegate(f, g, h, fs);
});
G__10535.cljs$lang$arity$variadic = G__10535__delegate;
return G__10535;
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
var G__10542 = cljs.core.next.call(null,coll);
coll = G__10542;
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
if(cljs.core.truth_((function (){var and__3822__auto____10541 = cljs.core.seq.call(null,coll);
if(and__3822__auto____10541)
{return (n > 0);
} else
{return and__3822__auto____10541;
}
})()))
{{
var G__10543 = (n - 1);
var G__10544 = cljs.core.next.call(null,coll);
n = G__10543;
coll = G__10544;
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
var matches__10546 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__10546),s))
{if((cljs.core.count.call(null,matches__10546) === 1))
{return cljs.core.first.call(null,matches__10546);
} else
{return cljs.core.vec.call(null,matches__10546);
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
var matches__10548 = re.exec(s);
if((matches__10548 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__10548) === 1))
{return cljs.core.first.call(null,matches__10548);
} else
{return cljs.core.vec.call(null,matches__10548);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__10553 = cljs.core.re_find.call(null,re,s);
var match_idx__10554 = s.search(re);
var match_str__10555 = ((cljs.core.coll_QMARK_.call(null,match_data__10553))?cljs.core.first.call(null,match_data__10553):match_data__10553);
var post_match__10556 = cljs.core.subs.call(null,s,(match_idx__10554 + cljs.core.count.call(null,match_str__10555)));
if(cljs.core.truth_(match_data__10553))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__10553,re_seq.call(null,re,post_match__10556));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__10563__10564 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___10565 = cljs.core.nth.call(null,vec__10563__10564,0,null);
var flags__10566 = cljs.core.nth.call(null,vec__10563__10564,1,null);
var pattern__10567 = cljs.core.nth.call(null,vec__10563__10564,2,null);
return (new RegExp(pattern__10567,flags__10566));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__10557_SHARP_){
return print_one.call(null,p1__10557_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____10577 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____10577))
{var and__3822__auto____10581 = (function (){var G__10578__10579 = obj;
if(G__10578__10579)
{if((function (){var or__3824__auto____10580 = (G__10578__10579.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____10580)
{return or__3824__auto____10580;
} else
{return G__10578__10579.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__10578__10579.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10578__10579);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10578__10579);
}
})();
if(cljs.core.truth_(and__3822__auto____10581))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____10581;
}
} else
{return and__3822__auto____10577;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____10582 = !((obj == null));
if(and__3822__auto____10582)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____10582;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__10583__10584 = obj;
if(G__10583__10584)
{if((function (){var or__3824__auto____10585 = (G__10583__10584.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____10585)
{return or__3824__auto____10585;
} else
{return G__10583__10584.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__10583__10584.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10583__10584);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10583__10584);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__10605 = (new goog.string.StringBuffer());
var G__10606__10607 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10606__10607)
{var string__10608 = cljs.core.first.call(null,G__10606__10607);
var G__10606__10609 = G__10606__10607;
while(true){
sb__10605.append(string__10608);
var temp__3974__auto____10610 = cljs.core.next.call(null,G__10606__10609);
if(temp__3974__auto____10610)
{var G__10606__10611 = temp__3974__auto____10610;
{
var G__10624 = cljs.core.first.call(null,G__10606__10611);
var G__10625 = G__10606__10611;
string__10608 = G__10624;
G__10606__10609 = G__10625;
continue;
}
} else
{}
break;
}
} else
{}
var G__10612__10613 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10612__10613)
{var obj__10614 = cljs.core.first.call(null,G__10612__10613);
var G__10612__10615 = G__10612__10613;
while(true){
sb__10605.append(" ");
var G__10616__10617 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10614,opts));
if(G__10616__10617)
{var string__10618 = cljs.core.first.call(null,G__10616__10617);
var G__10616__10619 = G__10616__10617;
while(true){
sb__10605.append(string__10618);
var temp__3974__auto____10620 = cljs.core.next.call(null,G__10616__10619);
if(temp__3974__auto____10620)
{var G__10616__10621 = temp__3974__auto____10620;
{
var G__10626 = cljs.core.first.call(null,G__10616__10621);
var G__10627 = G__10616__10621;
string__10618 = G__10626;
G__10616__10619 = G__10627;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10622 = cljs.core.next.call(null,G__10612__10615);
if(temp__3974__auto____10622)
{var G__10612__10623 = temp__3974__auto____10622;
{
var G__10628 = cljs.core.first.call(null,G__10612__10623);
var G__10629 = G__10612__10623;
obj__10614 = G__10628;
G__10612__10615 = G__10629;
continue;
}
} else
{}
break;
}
} else
{}
return sb__10605;
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
var sb__10631 = cljs.core.pr_sb.call(null,objs,opts);
sb__10631.append("\n");
return [cljs.core.str(sb__10631)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__10650__10651 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__10650__10651)
{var string__10652 = cljs.core.first.call(null,G__10650__10651);
var G__10650__10653 = G__10650__10651;
while(true){
cljs.core.string_print.call(null,string__10652);
var temp__3974__auto____10654 = cljs.core.next.call(null,G__10650__10653);
if(temp__3974__auto____10654)
{var G__10650__10655 = temp__3974__auto____10654;
{
var G__10668 = cljs.core.first.call(null,G__10650__10655);
var G__10669 = G__10650__10655;
string__10652 = G__10668;
G__10650__10653 = G__10669;
continue;
}
} else
{}
break;
}
} else
{}
var G__10656__10657 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__10656__10657)
{var obj__10658 = cljs.core.first.call(null,G__10656__10657);
var G__10656__10659 = G__10656__10657;
while(true){
cljs.core.string_print.call(null," ");
var G__10660__10661 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10658,opts));
if(G__10660__10661)
{var string__10662 = cljs.core.first.call(null,G__10660__10661);
var G__10660__10663 = G__10660__10661;
while(true){
cljs.core.string_print.call(null,string__10662);
var temp__3974__auto____10664 = cljs.core.next.call(null,G__10660__10663);
if(temp__3974__auto____10664)
{var G__10660__10665 = temp__3974__auto____10664;
{
var G__10670 = cljs.core.first.call(null,G__10660__10665);
var G__10671 = G__10660__10665;
string__10662 = G__10670;
G__10660__10663 = G__10671;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10666 = cljs.core.next.call(null,G__10656__10659);
if(temp__3974__auto____10666)
{var G__10656__10667 = temp__3974__auto____10666;
{
var G__10672 = cljs.core.first.call(null,G__10656__10667);
var G__10673 = G__10656__10667;
obj__10658 = G__10672;
G__10656__10659 = G__10673;
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
pr_str.cljs$lang$applyTo = (function (arglist__10674){
var objs = cljs.core.seq(arglist__10674);;
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
prn_str.cljs$lang$applyTo = (function (arglist__10675){
var objs = cljs.core.seq(arglist__10675);;
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
pr.cljs$lang$applyTo = (function (arglist__10676){
var objs = cljs.core.seq(arglist__10676);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__10677){
var objs = cljs.core.seq(arglist__10677);;
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
print_str.cljs$lang$applyTo = (function (arglist__10678){
var objs = cljs.core.seq(arglist__10678);;
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
println.cljs$lang$applyTo = (function (arglist__10679){
var objs = cljs.core.seq(arglist__10679);;
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
println_str.cljs$lang$applyTo = (function (arglist__10680){
var objs = cljs.core.seq(arglist__10680);;
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
prn.cljs$lang$applyTo = (function (arglist__10681){
var objs = cljs.core.seq(arglist__10681);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__10682){
var fmt = cljs.core.first(arglist__10682);
var args = cljs.core.rest(arglist__10682);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10683 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10683,"{",", ","}",opts,coll);
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
var pr_pair__10684 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10684,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10685 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10685,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10686 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10686))
{var nspc__10687 = temp__3974__auto____10686;
return [cljs.core.str(nspc__10687),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____10688 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____10688))
{var nspc__10689 = temp__3974__auto____10688;
return [cljs.core.str(nspc__10689),cljs.core.str("/")].join('');
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
var pr_pair__10690 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10690,"{",", ","}",opts,coll);
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
var normalize__10692 = (function (n,len){
var ns__10691 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10691) < len))
{{
var G__10694 = [cljs.core.str("0"),cljs.core.str(ns__10691)].join('');
ns__10691 = G__10694;
continue;
}
} else
{return ns__10691;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10692.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10692.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10692.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10692.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10692.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10692.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__10693 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10693,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10695 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10696 = this;
var G__10697__10698 = cljs.core.seq.call(null,this__10696.watches);
if(G__10697__10698)
{var G__10700__10702 = cljs.core.first.call(null,G__10697__10698);
var vec__10701__10703 = G__10700__10702;
var key__10704 = cljs.core.nth.call(null,vec__10701__10703,0,null);
var f__10705 = cljs.core.nth.call(null,vec__10701__10703,1,null);
var G__10697__10706 = G__10697__10698;
var G__10700__10707 = G__10700__10702;
var G__10697__10708 = G__10697__10706;
while(true){
var vec__10709__10710 = G__10700__10707;
var key__10711 = cljs.core.nth.call(null,vec__10709__10710,0,null);
var f__10712 = cljs.core.nth.call(null,vec__10709__10710,1,null);
var G__10697__10713 = G__10697__10708;
f__10712.call(null,key__10711,this$,oldval,newval);
var temp__3974__auto____10714 = cljs.core.next.call(null,G__10697__10713);
if(temp__3974__auto____10714)
{var G__10697__10715 = temp__3974__auto____10714;
{
var G__10722 = cljs.core.first.call(null,G__10697__10715);
var G__10723 = G__10697__10715;
G__10700__10707 = G__10722;
G__10697__10708 = G__10723;
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
var this__10716 = this;
return this$.watches = cljs.core.assoc.call(null,this__10716.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10717 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10717.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10718 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10718.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10719 = this;
return this__10719.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10720 = this;
return this__10720.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10721 = this;
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
var G__10735__delegate = function (x,p__10724){
var map__10730__10731 = p__10724;
var map__10730__10732 = ((cljs.core.seq_QMARK_.call(null,map__10730__10731))?cljs.core.apply.call(null,cljs.core.hash_map,map__10730__10731):map__10730__10731);
var validator__10733 = cljs.core._lookup.call(null,map__10730__10732,"\uFDD0'validator",null);
var meta__10734 = cljs.core._lookup.call(null,map__10730__10732,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10734,validator__10733,null));
};
var G__10735 = function (x,var_args){
var p__10724 = null;
if (goog.isDef(var_args)) {
  p__10724 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10735__delegate.call(this, x, p__10724);
};
G__10735.cljs$lang$maxFixedArity = 1;
G__10735.cljs$lang$applyTo = (function (arglist__10736){
var x = cljs.core.first(arglist__10736);
var p__10724 = cljs.core.rest(arglist__10736);
return G__10735__delegate(x, p__10724);
});
G__10735.cljs$lang$arity$variadic = G__10735__delegate;
return G__10735;
})()
;
atom = function(x,var_args){
var p__10724 = var_args;
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
var temp__3974__auto____10740 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10740))
{var validate__10741 = temp__3974__auto____10740;
if(cljs.core.truth_(validate__10741.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__10742 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__10742,new_value);
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
var G__10743__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__10743 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10743__delegate.call(this, a, f, x, y, z, more);
};
G__10743.cljs$lang$maxFixedArity = 5;
G__10743.cljs$lang$applyTo = (function (arglist__10744){
var a = cljs.core.first(arglist__10744);
var f = cljs.core.first(cljs.core.next(arglist__10744));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10744)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10744))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10744)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10744)))));
return G__10743__delegate(a, f, x, y, z, more);
});
G__10743.cljs$lang$arity$variadic = G__10743__delegate;
return G__10743;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10745){
var iref = cljs.core.first(arglist__10745);
var f = cljs.core.first(cljs.core.next(arglist__10745));
var args = cljs.core.rest(cljs.core.next(arglist__10745));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__10746 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__10746.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10747 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__10747.state,(function (p__10748){
var map__10749__10750 = p__10748;
var map__10749__10751 = ((cljs.core.seq_QMARK_.call(null,map__10749__10750))?cljs.core.apply.call(null,cljs.core.hash_map,map__10749__10750):map__10749__10750);
var curr_state__10752 = map__10749__10751;
var done__10753 = cljs.core._lookup.call(null,map__10749__10751,"\uFDD0'done",null);
if(cljs.core.truth_(done__10753))
{return curr_state__10752;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__10747.f.call(null)});
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
var map__10774__10775 = options;
var map__10774__10776 = ((cljs.core.seq_QMARK_.call(null,map__10774__10775))?cljs.core.apply.call(null,cljs.core.hash_map,map__10774__10775):map__10774__10775);
var keywordize_keys__10777 = cljs.core._lookup.call(null,map__10774__10776,"\uFDD0'keywordize-keys",null);
var keyfn__10778 = (cljs.core.truth_(keywordize_keys__10777)?cljs.core.keyword:cljs.core.str);
var f__10793 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2462__auto____10792 = (function iter__10786(s__10787){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10787__10790 = s__10787;
while(true){
if(cljs.core.seq.call(null,s__10787__10790))
{var k__10791 = cljs.core.first.call(null,s__10787__10790);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__10778.call(null,k__10791),thisfn.call(null,(x[k__10791]))], true),iter__10786.call(null,cljs.core.rest.call(null,s__10787__10790)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2462__auto____10792.call(null,cljs.core.js_keys.call(null,x));
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
return f__10793.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10794){
var x = cljs.core.first(arglist__10794);
var options = cljs.core.rest(arglist__10794);
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
var mem__10799 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10803__delegate = function (args){
var temp__3971__auto____10800 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__10799),args,null);
if(cljs.core.truth_(temp__3971__auto____10800))
{var v__10801 = temp__3971__auto____10800;
return v__10801;
} else
{var ret__10802 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__10799,cljs.core.assoc,args,ret__10802);
return ret__10802;
}
};
var G__10803 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10803__delegate.call(this, args);
};
G__10803.cljs$lang$maxFixedArity = 0;
G__10803.cljs$lang$applyTo = (function (arglist__10804){
var args = cljs.core.seq(arglist__10804);;
return G__10803__delegate(args);
});
G__10803.cljs$lang$arity$variadic = G__10803__delegate;
return G__10803;
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
var ret__10806 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__10806))
{{
var G__10807 = ret__10806;
f = G__10807;
continue;
}
} else
{return ret__10806;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10808__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__10808 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10808__delegate.call(this, f, args);
};
G__10808.cljs$lang$maxFixedArity = 1;
G__10808.cljs$lang$applyTo = (function (arglist__10809){
var f = cljs.core.first(arglist__10809);
var args = cljs.core.rest(arglist__10809);
return G__10808__delegate(f, args);
});
G__10808.cljs$lang$arity$variadic = G__10808__delegate;
return G__10808;
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
var k__10811 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__10811,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__10811,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____10820 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____10820)
{return or__3824__auto____10820;
} else
{var or__3824__auto____10821 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10821)
{return or__3824__auto____10821;
} else
{var and__3822__auto____10822 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____10822)
{var and__3822__auto____10823 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____10823)
{var and__3822__auto____10824 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____10824)
{var ret__10825 = true;
var i__10826 = 0;
while(true){
if((function (){var or__3824__auto____10827 = cljs.core.not.call(null,ret__10825);
if(or__3824__auto____10827)
{return or__3824__auto____10827;
} else
{return (i__10826 === cljs.core.count.call(null,parent));
}
})())
{return ret__10825;
} else
{{
var G__10828 = isa_QMARK_.call(null,h,child.call(null,i__10826),parent.call(null,i__10826));
var G__10829 = (i__10826 + 1);
ret__10825 = G__10828;
i__10826 = G__10829;
continue;
}
}
break;
}
} else
{return and__3822__auto____10824;
}
} else
{return and__3822__auto____10823;
}
} else
{return and__3822__auto____10822;
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728))))].join('')));
}
var tp__10838 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10839 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10840 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10841 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____10842 = ((cljs.core.contains_QMARK_.call(null,tp__10838.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__10840.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__10840.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__10838,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__10841.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10839,parent,ta__10840),"\uFDD0'descendants":tf__10841.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10840,tag,td__10839)});
})());
if(cljs.core.truth_(or__3824__auto____10842))
{return or__3824__auto____10842;
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
var parentMap__10847 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10848 = (cljs.core.truth_(parentMap__10847.call(null,tag))?cljs.core.disj.call(null,parentMap__10847.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__10849 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10848))?cljs.core.assoc.call(null,parentMap__10847,tag,childsParents__10848):cljs.core.dissoc.call(null,parentMap__10847,tag));
var deriv_seq__10850 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__10830_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__10830_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__10830_SHARP_),cljs.core.second.call(null,p1__10830_SHARP_)));
}),cljs.core.seq.call(null,newParents__10849)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10847.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__10831_SHARP_,p2__10832_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__10831_SHARP_,p2__10832_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10850));
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
var xprefs__10858 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____10860 = (cljs.core.truth_((function (){var and__3822__auto____10859 = xprefs__10858;
if(cljs.core.truth_(and__3822__auto____10859))
{return xprefs__10858.call(null,y);
} else
{return and__3822__auto____10859;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10860))
{return or__3824__auto____10860;
} else
{var or__3824__auto____10862 = (function (){var ps__10861 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10861) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10861),prefer_table)))
{} else
{}
{
var G__10865 = cljs.core.rest.call(null,ps__10861);
ps__10861 = G__10865;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10862))
{return or__3824__auto____10862;
} else
{var or__3824__auto____10864 = (function (){var ps__10863 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10863) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10863),y,prefer_table)))
{} else
{}
{
var G__10866 = cljs.core.rest.call(null,ps__10863);
ps__10863 = G__10866;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10864))
{return or__3824__auto____10864;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10868 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10868))
{return or__3824__auto____10868;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10886 = cljs.core.reduce.call(null,(function (be,p__10878){
var vec__10879__10880 = p__10878;
var k__10881 = cljs.core.nth.call(null,vec__10879__10880,0,null);
var ___10882 = cljs.core.nth.call(null,vec__10879__10880,1,null);
var e__10883 = vec__10879__10880;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10881))
{var be2__10885 = (cljs.core.truth_((function (){var or__3824__auto____10884 = (be == null);
if(or__3824__auto____10884)
{return or__3824__auto____10884;
} else
{return cljs.core.dominates.call(null,k__10881,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10883:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10885),k__10881,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10881),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10885)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10885;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10886))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10886));
return cljs.core.second.call(null,best_entry__10886);
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
if((function (){var and__3822__auto____10891 = mf;
if(and__3822__auto____10891)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10891;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2363__auto____10892 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10893 = (cljs.core._reset[goog.typeOf(x__2363__auto____10892)]);
if(or__3824__auto____10893)
{return or__3824__auto____10893;
} else
{var or__3824__auto____10894 = (cljs.core._reset["_"]);
if(or__3824__auto____10894)
{return or__3824__auto____10894;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10899 = mf;
if(and__3822__auto____10899)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10899;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2363__auto____10900 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10901 = (cljs.core._add_method[goog.typeOf(x__2363__auto____10900)]);
if(or__3824__auto____10901)
{return or__3824__auto____10901;
} else
{var or__3824__auto____10902 = (cljs.core._add_method["_"]);
if(or__3824__auto____10902)
{return or__3824__auto____10902;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10907 = mf;
if(and__3822__auto____10907)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10907;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2363__auto____10908 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10909 = (cljs.core._remove_method[goog.typeOf(x__2363__auto____10908)]);
if(or__3824__auto____10909)
{return or__3824__auto____10909;
} else
{var or__3824__auto____10910 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10910)
{return or__3824__auto____10910;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10915 = mf;
if(and__3822__auto____10915)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10915;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2363__auto____10916 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10917 = (cljs.core._prefer_method[goog.typeOf(x__2363__auto____10916)]);
if(or__3824__auto____10917)
{return or__3824__auto____10917;
} else
{var or__3824__auto____10918 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10918)
{return or__3824__auto____10918;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10923 = mf;
if(and__3822__auto____10923)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10923;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2363__auto____10924 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10925 = (cljs.core._get_method[goog.typeOf(x__2363__auto____10924)]);
if(or__3824__auto____10925)
{return or__3824__auto____10925;
} else
{var or__3824__auto____10926 = (cljs.core._get_method["_"]);
if(or__3824__auto____10926)
{return or__3824__auto____10926;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10931 = mf;
if(and__3822__auto____10931)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10931;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2363__auto____10932 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10933 = (cljs.core._methods[goog.typeOf(x__2363__auto____10932)]);
if(or__3824__auto____10933)
{return or__3824__auto____10933;
} else
{var or__3824__auto____10934 = (cljs.core._methods["_"]);
if(or__3824__auto____10934)
{return or__3824__auto____10934;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10939 = mf;
if(and__3822__auto____10939)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10939;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2363__auto____10940 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10941 = (cljs.core._prefers[goog.typeOf(x__2363__auto____10940)]);
if(or__3824__auto____10941)
{return or__3824__auto____10941;
} else
{var or__3824__auto____10942 = (cljs.core._prefers["_"]);
if(or__3824__auto____10942)
{return or__3824__auto____10942;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10947 = mf;
if(and__3822__auto____10947)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10947;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2363__auto____10948 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10949 = (cljs.core._dispatch[goog.typeOf(x__2363__auto____10948)]);
if(or__3824__auto____10949)
{return or__3824__auto____10949;
} else
{var or__3824__auto____10950 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10950)
{return or__3824__auto____10950;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10953 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10954 = cljs.core._get_method.call(null,mf,dispatch_val__10953);
if(cljs.core.truth_(target_fn__10954))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10953)].join('')));
}
return cljs.core.apply.call(null,target_fn__10954,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10955 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10956 = this;
cljs.core.swap_BANG_.call(null,this__10956.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10956.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10956.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10956.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10957 = this;
cljs.core.swap_BANG_.call(null,this__10957.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10957.method_cache,this__10957.method_table,this__10957.cached_hierarchy,this__10957.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10958 = this;
cljs.core.swap_BANG_.call(null,this__10958.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10958.method_cache,this__10958.method_table,this__10958.cached_hierarchy,this__10958.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10959 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10959.cached_hierarchy),cljs.core.deref.call(null,this__10959.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10959.method_cache,this__10959.method_table,this__10959.cached_hierarchy,this__10959.hierarchy);
}
var temp__3971__auto____10960 = cljs.core.deref.call(null,this__10959.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10960))
{var target_fn__10961 = temp__3971__auto____10960;
return target_fn__10961;
} else
{var temp__3971__auto____10962 = cljs.core.find_and_cache_best_method.call(null,this__10959.name,dispatch_val,this__10959.hierarchy,this__10959.method_table,this__10959.prefer_table,this__10959.method_cache,this__10959.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10962))
{var target_fn__10963 = temp__3971__auto____10962;
return target_fn__10963;
} else
{return cljs.core.deref.call(null,this__10959.method_table).call(null,this__10959.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10964 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10964.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10964.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10964.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10964.method_cache,this__10964.method_table,this__10964.cached_hierarchy,this__10964.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10965 = this;
return cljs.core.deref.call(null,this__10965.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10966 = this;
return cljs.core.deref.call(null,this__10966.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10967 = this;
return cljs.core.do_dispatch.call(null,mf,this__10967.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10969__delegate = function (_,args){
var self__10968 = this;
return cljs.core._dispatch.call(null,self__10968,args);
};
var G__10969 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10969__delegate.call(this, _, args);
};
G__10969.cljs$lang$maxFixedArity = 1;
G__10969.cljs$lang$applyTo = (function (arglist__10970){
var _ = cljs.core.first(arglist__10970);
var args = cljs.core.rest(arglist__10970);
return G__10969__delegate(_, args);
});
G__10969.cljs$lang$arity$variadic = G__10969__delegate;
return G__10969;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10971 = this;
return cljs.core._dispatch.call(null,self__10971,args);
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
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2309__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10972 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10974,_){
var this__10973 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10973.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10975 = this;
var and__3822__auto____10976 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____10976)
{return (this__10975.uuid === other.uuid);
} else
{return and__3822__auto____10976;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__10977 = this;
var this__10978 = this;
return cljs.core.pr_str.call(null,this__10978);
});
cljs.core.UUID;
