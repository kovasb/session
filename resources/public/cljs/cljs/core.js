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
var x__8621 = (((x == null))?null:x);
if((p[goog.typeOf(x__8621)]))
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
var G__8622__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__8622 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8622__delegate.call(this, array, i, idxs);
};
G__8622.cljs$lang$maxFixedArity = 2;
G__8622.cljs$lang$applyTo = (function (arglist__8623){
var array = cljs.core.first(arglist__8623);
var i = cljs.core.first(cljs.core.next(arglist__8623));
var idxs = cljs.core.rest(cljs.core.next(arglist__8623));
return G__8622__delegate(array, i, idxs);
});
G__8622.cljs$lang$arity$variadic = G__8622__delegate;
return G__8622;
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
if((function (){var and__3937__auto____8708 = this$;
if(and__3937__auto____8708)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3937__auto____8708;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2396__auto____8709 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8710 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8709)]);
if(or__3939__auto____8710)
{return or__3939__auto____8710;
} else
{var or__3939__auto____8711 = (cljs.core._invoke["_"]);
if(or__3939__auto____8711)
{return or__3939__auto____8711;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3937__auto____8712 = this$;
if(and__3937__auto____8712)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3937__auto____8712;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2396__auto____8713 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8714 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8713)]);
if(or__3939__auto____8714)
{return or__3939__auto____8714;
} else
{var or__3939__auto____8715 = (cljs.core._invoke["_"]);
if(or__3939__auto____8715)
{return or__3939__auto____8715;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3937__auto____8716 = this$;
if(and__3937__auto____8716)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3937__auto____8716;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2396__auto____8717 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8718 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8717)]);
if(or__3939__auto____8718)
{return or__3939__auto____8718;
} else
{var or__3939__auto____8719 = (cljs.core._invoke["_"]);
if(or__3939__auto____8719)
{return or__3939__auto____8719;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3937__auto____8720 = this$;
if(and__3937__auto____8720)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3937__auto____8720;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2396__auto____8721 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8722 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8721)]);
if(or__3939__auto____8722)
{return or__3939__auto____8722;
} else
{var or__3939__auto____8723 = (cljs.core._invoke["_"]);
if(or__3939__auto____8723)
{return or__3939__auto____8723;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3937__auto____8724 = this$;
if(and__3937__auto____8724)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3937__auto____8724;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2396__auto____8725 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8726 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8725)]);
if(or__3939__auto____8726)
{return or__3939__auto____8726;
} else
{var or__3939__auto____8727 = (cljs.core._invoke["_"]);
if(or__3939__auto____8727)
{return or__3939__auto____8727;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3937__auto____8728 = this$;
if(and__3937__auto____8728)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3937__auto____8728;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2396__auto____8729 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8730 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8729)]);
if(or__3939__auto____8730)
{return or__3939__auto____8730;
} else
{var or__3939__auto____8731 = (cljs.core._invoke["_"]);
if(or__3939__auto____8731)
{return or__3939__auto____8731;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3937__auto____8732 = this$;
if(and__3937__auto____8732)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3937__auto____8732;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2396__auto____8733 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8734 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8733)]);
if(or__3939__auto____8734)
{return or__3939__auto____8734;
} else
{var or__3939__auto____8735 = (cljs.core._invoke["_"]);
if(or__3939__auto____8735)
{return or__3939__auto____8735;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3937__auto____8736 = this$;
if(and__3937__auto____8736)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3937__auto____8736;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2396__auto____8737 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8738 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8737)]);
if(or__3939__auto____8738)
{return or__3939__auto____8738;
} else
{var or__3939__auto____8739 = (cljs.core._invoke["_"]);
if(or__3939__auto____8739)
{return or__3939__auto____8739;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3937__auto____8740 = this$;
if(and__3937__auto____8740)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3937__auto____8740;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2396__auto____8741 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8742 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8741)]);
if(or__3939__auto____8742)
{return or__3939__auto____8742;
} else
{var or__3939__auto____8743 = (cljs.core._invoke["_"]);
if(or__3939__auto____8743)
{return or__3939__auto____8743;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3937__auto____8744 = this$;
if(and__3937__auto____8744)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3937__auto____8744;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2396__auto____8745 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8746 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8745)]);
if(or__3939__auto____8746)
{return or__3939__auto____8746;
} else
{var or__3939__auto____8747 = (cljs.core._invoke["_"]);
if(or__3939__auto____8747)
{return or__3939__auto____8747;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3937__auto____8748 = this$;
if(and__3937__auto____8748)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3937__auto____8748;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2396__auto____8749 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8750 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8749)]);
if(or__3939__auto____8750)
{return or__3939__auto____8750;
} else
{var or__3939__auto____8751 = (cljs.core._invoke["_"]);
if(or__3939__auto____8751)
{return or__3939__auto____8751;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3937__auto____8752 = this$;
if(and__3937__auto____8752)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3937__auto____8752;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2396__auto____8753 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8754 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8753)]);
if(or__3939__auto____8754)
{return or__3939__auto____8754;
} else
{var or__3939__auto____8755 = (cljs.core._invoke["_"]);
if(or__3939__auto____8755)
{return or__3939__auto____8755;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3937__auto____8756 = this$;
if(and__3937__auto____8756)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3937__auto____8756;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2396__auto____8757 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8758 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8757)]);
if(or__3939__auto____8758)
{return or__3939__auto____8758;
} else
{var or__3939__auto____8759 = (cljs.core._invoke["_"]);
if(or__3939__auto____8759)
{return or__3939__auto____8759;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3937__auto____8760 = this$;
if(and__3937__auto____8760)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3937__auto____8760;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2396__auto____8761 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8762 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8761)]);
if(or__3939__auto____8762)
{return or__3939__auto____8762;
} else
{var or__3939__auto____8763 = (cljs.core._invoke["_"]);
if(or__3939__auto____8763)
{return or__3939__auto____8763;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3937__auto____8764 = this$;
if(and__3937__auto____8764)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3937__auto____8764;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2396__auto____8765 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8766 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8765)]);
if(or__3939__auto____8766)
{return or__3939__auto____8766;
} else
{var or__3939__auto____8767 = (cljs.core._invoke["_"]);
if(or__3939__auto____8767)
{return or__3939__auto____8767;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3937__auto____8768 = this$;
if(and__3937__auto____8768)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3937__auto____8768;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2396__auto____8769 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8770 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8769)]);
if(or__3939__auto____8770)
{return or__3939__auto____8770;
} else
{var or__3939__auto____8771 = (cljs.core._invoke["_"]);
if(or__3939__auto____8771)
{return or__3939__auto____8771;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3937__auto____8772 = this$;
if(and__3937__auto____8772)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3937__auto____8772;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2396__auto____8773 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8774 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8773)]);
if(or__3939__auto____8774)
{return or__3939__auto____8774;
} else
{var or__3939__auto____8775 = (cljs.core._invoke["_"]);
if(or__3939__auto____8775)
{return or__3939__auto____8775;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3937__auto____8776 = this$;
if(and__3937__auto____8776)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3937__auto____8776;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2396__auto____8777 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8778 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8777)]);
if(or__3939__auto____8778)
{return or__3939__auto____8778;
} else
{var or__3939__auto____8779 = (cljs.core._invoke["_"]);
if(or__3939__auto____8779)
{return or__3939__auto____8779;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3937__auto____8780 = this$;
if(and__3937__auto____8780)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3937__auto____8780;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2396__auto____8781 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8782 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8781)]);
if(or__3939__auto____8782)
{return or__3939__auto____8782;
} else
{var or__3939__auto____8783 = (cljs.core._invoke["_"]);
if(or__3939__auto____8783)
{return or__3939__auto____8783;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3937__auto____8784 = this$;
if(and__3937__auto____8784)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3937__auto____8784;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2396__auto____8785 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8786 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8785)]);
if(or__3939__auto____8786)
{return or__3939__auto____8786;
} else
{var or__3939__auto____8787 = (cljs.core._invoke["_"]);
if(or__3939__auto____8787)
{return or__3939__auto____8787;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3937__auto____8788 = this$;
if(and__3937__auto____8788)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3937__auto____8788;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2396__auto____8789 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8790 = (cljs.core._invoke[goog.typeOf(x__2396__auto____8789)]);
if(or__3939__auto____8790)
{return or__3939__auto____8790;
} else
{var or__3939__auto____8791 = (cljs.core._invoke["_"]);
if(or__3939__auto____8791)
{return or__3939__auto____8791;
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
if((function (){var and__3937__auto____8796 = coll;
if(and__3937__auto____8796)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3937__auto____8796;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2396__auto____8797 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8798 = (cljs.core._count[goog.typeOf(x__2396__auto____8797)]);
if(or__3939__auto____8798)
{return or__3939__auto____8798;
} else
{var or__3939__auto____8799 = (cljs.core._count["_"]);
if(or__3939__auto____8799)
{return or__3939__auto____8799;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3937__auto____8804 = coll;
if(and__3937__auto____8804)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3937__auto____8804;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2396__auto____8805 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8806 = (cljs.core._empty[goog.typeOf(x__2396__auto____8805)]);
if(or__3939__auto____8806)
{return or__3939__auto____8806;
} else
{var or__3939__auto____8807 = (cljs.core._empty["_"]);
if(or__3939__auto____8807)
{return or__3939__auto____8807;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3937__auto____8812 = coll;
if(and__3937__auto____8812)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3937__auto____8812;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2396__auto____8813 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8814 = (cljs.core._conj[goog.typeOf(x__2396__auto____8813)]);
if(or__3939__auto____8814)
{return or__3939__auto____8814;
} else
{var or__3939__auto____8815 = (cljs.core._conj["_"]);
if(or__3939__auto____8815)
{return or__3939__auto____8815;
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
if((function (){var and__3937__auto____8824 = coll;
if(and__3937__auto____8824)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3937__auto____8824;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2396__auto____8825 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8826 = (cljs.core._nth[goog.typeOf(x__2396__auto____8825)]);
if(or__3939__auto____8826)
{return or__3939__auto____8826;
} else
{var or__3939__auto____8827 = (cljs.core._nth["_"]);
if(or__3939__auto____8827)
{return or__3939__auto____8827;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3937__auto____8828 = coll;
if(and__3937__auto____8828)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3937__auto____8828;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2396__auto____8829 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8830 = (cljs.core._nth[goog.typeOf(x__2396__auto____8829)]);
if(or__3939__auto____8830)
{return or__3939__auto____8830;
} else
{var or__3939__auto____8831 = (cljs.core._nth["_"]);
if(or__3939__auto____8831)
{return or__3939__auto____8831;
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
if((function (){var and__3937__auto____8836 = coll;
if(and__3937__auto____8836)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3937__auto____8836;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2396__auto____8837 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8838 = (cljs.core._first[goog.typeOf(x__2396__auto____8837)]);
if(or__3939__auto____8838)
{return or__3939__auto____8838;
} else
{var or__3939__auto____8839 = (cljs.core._first["_"]);
if(or__3939__auto____8839)
{return or__3939__auto____8839;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3937__auto____8844 = coll;
if(and__3937__auto____8844)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3937__auto____8844;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2396__auto____8845 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8846 = (cljs.core._rest[goog.typeOf(x__2396__auto____8845)]);
if(or__3939__auto____8846)
{return or__3939__auto____8846;
} else
{var or__3939__auto____8847 = (cljs.core._rest["_"]);
if(or__3939__auto____8847)
{return or__3939__auto____8847;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3937__auto____8852 = coll;
if(and__3937__auto____8852)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3937__auto____8852;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2396__auto____8853 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8854 = (cljs.core._next[goog.typeOf(x__2396__auto____8853)]);
if(or__3939__auto____8854)
{return or__3939__auto____8854;
} else
{var or__3939__auto____8855 = (cljs.core._next["_"]);
if(or__3939__auto____8855)
{return or__3939__auto____8855;
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
if((function (){var and__3937__auto____8864 = o;
if(and__3937__auto____8864)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3937__auto____8864;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2396__auto____8865 = (((o == null))?null:o);
return (function (){var or__3939__auto____8866 = (cljs.core._lookup[goog.typeOf(x__2396__auto____8865)]);
if(or__3939__auto____8866)
{return or__3939__auto____8866;
} else
{var or__3939__auto____8867 = (cljs.core._lookup["_"]);
if(or__3939__auto____8867)
{return or__3939__auto____8867;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3937__auto____8868 = o;
if(and__3937__auto____8868)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3937__auto____8868;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2396__auto____8869 = (((o == null))?null:o);
return (function (){var or__3939__auto____8870 = (cljs.core._lookup[goog.typeOf(x__2396__auto____8869)]);
if(or__3939__auto____8870)
{return or__3939__auto____8870;
} else
{var or__3939__auto____8871 = (cljs.core._lookup["_"]);
if(or__3939__auto____8871)
{return or__3939__auto____8871;
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
if((function (){var and__3937__auto____8876 = coll;
if(and__3937__auto____8876)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3937__auto____8876;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2396__auto____8877 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8878 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2396__auto____8877)]);
if(or__3939__auto____8878)
{return or__3939__auto____8878;
} else
{var or__3939__auto____8879 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3939__auto____8879)
{return or__3939__auto____8879;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3937__auto____8884 = coll;
if(and__3937__auto____8884)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3937__auto____8884;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2396__auto____8885 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8886 = (cljs.core._assoc[goog.typeOf(x__2396__auto____8885)]);
if(or__3939__auto____8886)
{return or__3939__auto____8886;
} else
{var or__3939__auto____8887 = (cljs.core._assoc["_"]);
if(or__3939__auto____8887)
{return or__3939__auto____8887;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3937__auto____8892 = coll;
if(and__3937__auto____8892)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3937__auto____8892;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2396__auto____8893 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8894 = (cljs.core._dissoc[goog.typeOf(x__2396__auto____8893)]);
if(or__3939__auto____8894)
{return or__3939__auto____8894;
} else
{var or__3939__auto____8895 = (cljs.core._dissoc["_"]);
if(or__3939__auto____8895)
{return or__3939__auto____8895;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3937__auto____8900 = coll;
if(and__3937__auto____8900)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3937__auto____8900;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2396__auto____8901 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8902 = (cljs.core._key[goog.typeOf(x__2396__auto____8901)]);
if(or__3939__auto____8902)
{return or__3939__auto____8902;
} else
{var or__3939__auto____8903 = (cljs.core._key["_"]);
if(or__3939__auto____8903)
{return or__3939__auto____8903;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3937__auto____8908 = coll;
if(and__3937__auto____8908)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3937__auto____8908;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2396__auto____8909 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8910 = (cljs.core._val[goog.typeOf(x__2396__auto____8909)]);
if(or__3939__auto____8910)
{return or__3939__auto____8910;
} else
{var or__3939__auto____8911 = (cljs.core._val["_"]);
if(or__3939__auto____8911)
{return or__3939__auto____8911;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3937__auto____8916 = coll;
if(and__3937__auto____8916)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3937__auto____8916;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2396__auto____8917 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8918 = (cljs.core._disjoin[goog.typeOf(x__2396__auto____8917)]);
if(or__3939__auto____8918)
{return or__3939__auto____8918;
} else
{var or__3939__auto____8919 = (cljs.core._disjoin["_"]);
if(or__3939__auto____8919)
{return or__3939__auto____8919;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3937__auto____8924 = coll;
if(and__3937__auto____8924)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3937__auto____8924;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2396__auto____8925 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8926 = (cljs.core._peek[goog.typeOf(x__2396__auto____8925)]);
if(or__3939__auto____8926)
{return or__3939__auto____8926;
} else
{var or__3939__auto____8927 = (cljs.core._peek["_"]);
if(or__3939__auto____8927)
{return or__3939__auto____8927;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3937__auto____8932 = coll;
if(and__3937__auto____8932)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3937__auto____8932;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2396__auto____8933 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8934 = (cljs.core._pop[goog.typeOf(x__2396__auto____8933)]);
if(or__3939__auto____8934)
{return or__3939__auto____8934;
} else
{var or__3939__auto____8935 = (cljs.core._pop["_"]);
if(or__3939__auto____8935)
{return or__3939__auto____8935;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3937__auto____8940 = coll;
if(and__3937__auto____8940)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3937__auto____8940;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2396__auto____8941 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8942 = (cljs.core._assoc_n[goog.typeOf(x__2396__auto____8941)]);
if(or__3939__auto____8942)
{return or__3939__auto____8942;
} else
{var or__3939__auto____8943 = (cljs.core._assoc_n["_"]);
if(or__3939__auto____8943)
{return or__3939__auto____8943;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3937__auto____8948 = o;
if(and__3937__auto____8948)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3937__auto____8948;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2396__auto____8949 = (((o == null))?null:o);
return (function (){var or__3939__auto____8950 = (cljs.core._deref[goog.typeOf(x__2396__auto____8949)]);
if(or__3939__auto____8950)
{return or__3939__auto____8950;
} else
{var or__3939__auto____8951 = (cljs.core._deref["_"]);
if(or__3939__auto____8951)
{return or__3939__auto____8951;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3937__auto____8956 = o;
if(and__3937__auto____8956)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3937__auto____8956;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2396__auto____8957 = (((o == null))?null:o);
return (function (){var or__3939__auto____8958 = (cljs.core._deref_with_timeout[goog.typeOf(x__2396__auto____8957)]);
if(or__3939__auto____8958)
{return or__3939__auto____8958;
} else
{var or__3939__auto____8959 = (cljs.core._deref_with_timeout["_"]);
if(or__3939__auto____8959)
{return or__3939__auto____8959;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3937__auto____8964 = o;
if(and__3937__auto____8964)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3937__auto____8964;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2396__auto____8965 = (((o == null))?null:o);
return (function (){var or__3939__auto____8966 = (cljs.core._meta[goog.typeOf(x__2396__auto____8965)]);
if(or__3939__auto____8966)
{return or__3939__auto____8966;
} else
{var or__3939__auto____8967 = (cljs.core._meta["_"]);
if(or__3939__auto____8967)
{return or__3939__auto____8967;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3937__auto____8972 = o;
if(and__3937__auto____8972)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3937__auto____8972;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2396__auto____8973 = (((o == null))?null:o);
return (function (){var or__3939__auto____8974 = (cljs.core._with_meta[goog.typeOf(x__2396__auto____8973)]);
if(or__3939__auto____8974)
{return or__3939__auto____8974;
} else
{var or__3939__auto____8975 = (cljs.core._with_meta["_"]);
if(or__3939__auto____8975)
{return or__3939__auto____8975;
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
if((function (){var and__3937__auto____8984 = coll;
if(and__3937__auto____8984)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3937__auto____8984;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2396__auto____8985 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8986 = (cljs.core._reduce[goog.typeOf(x__2396__auto____8985)]);
if(or__3939__auto____8986)
{return or__3939__auto____8986;
} else
{var or__3939__auto____8987 = (cljs.core._reduce["_"]);
if(or__3939__auto____8987)
{return or__3939__auto____8987;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3937__auto____8988 = coll;
if(and__3937__auto____8988)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3937__auto____8988;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2396__auto____8989 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8990 = (cljs.core._reduce[goog.typeOf(x__2396__auto____8989)]);
if(or__3939__auto____8990)
{return or__3939__auto____8990;
} else
{var or__3939__auto____8991 = (cljs.core._reduce["_"]);
if(or__3939__auto____8991)
{return or__3939__auto____8991;
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
if((function (){var and__3937__auto____8996 = coll;
if(and__3937__auto____8996)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3937__auto____8996;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2396__auto____8997 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8998 = (cljs.core._kv_reduce[goog.typeOf(x__2396__auto____8997)]);
if(or__3939__auto____8998)
{return or__3939__auto____8998;
} else
{var or__3939__auto____8999 = (cljs.core._kv_reduce["_"]);
if(or__3939__auto____8999)
{return or__3939__auto____8999;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3937__auto____9004 = o;
if(and__3937__auto____9004)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3937__auto____9004;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2396__auto____9005 = (((o == null))?null:o);
return (function (){var or__3939__auto____9006 = (cljs.core._equiv[goog.typeOf(x__2396__auto____9005)]);
if(or__3939__auto____9006)
{return or__3939__auto____9006;
} else
{var or__3939__auto____9007 = (cljs.core._equiv["_"]);
if(or__3939__auto____9007)
{return or__3939__auto____9007;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3937__auto____9012 = o;
if(and__3937__auto____9012)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3937__auto____9012;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2396__auto____9013 = (((o == null))?null:o);
return (function (){var or__3939__auto____9014 = (cljs.core._hash[goog.typeOf(x__2396__auto____9013)]);
if(or__3939__auto____9014)
{return or__3939__auto____9014;
} else
{var or__3939__auto____9015 = (cljs.core._hash["_"]);
if(or__3939__auto____9015)
{return or__3939__auto____9015;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3937__auto____9020 = o;
if(and__3937__auto____9020)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3937__auto____9020;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2396__auto____9021 = (((o == null))?null:o);
return (function (){var or__3939__auto____9022 = (cljs.core._seq[goog.typeOf(x__2396__auto____9021)]);
if(or__3939__auto____9022)
{return or__3939__auto____9022;
} else
{var or__3939__auto____9023 = (cljs.core._seq["_"]);
if(or__3939__auto____9023)
{return or__3939__auto____9023;
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
if((function (){var and__3937__auto____9028 = coll;
if(and__3937__auto____9028)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3937__auto____9028;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2396__auto____9029 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9030 = (cljs.core._rseq[goog.typeOf(x__2396__auto____9029)]);
if(or__3939__auto____9030)
{return or__3939__auto____9030;
} else
{var or__3939__auto____9031 = (cljs.core._rseq["_"]);
if(or__3939__auto____9031)
{return or__3939__auto____9031;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3937__auto____9036 = coll;
if(and__3937__auto____9036)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3937__auto____9036;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2396__auto____9037 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9038 = (cljs.core._sorted_seq[goog.typeOf(x__2396__auto____9037)]);
if(or__3939__auto____9038)
{return or__3939__auto____9038;
} else
{var or__3939__auto____9039 = (cljs.core._sorted_seq["_"]);
if(or__3939__auto____9039)
{return or__3939__auto____9039;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3937__auto____9044 = coll;
if(and__3937__auto____9044)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3937__auto____9044;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2396__auto____9045 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9046 = (cljs.core._sorted_seq_from[goog.typeOf(x__2396__auto____9045)]);
if(or__3939__auto____9046)
{return or__3939__auto____9046;
} else
{var or__3939__auto____9047 = (cljs.core._sorted_seq_from["_"]);
if(or__3939__auto____9047)
{return or__3939__auto____9047;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3937__auto____9052 = coll;
if(and__3937__auto____9052)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3937__auto____9052;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2396__auto____9053 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9054 = (cljs.core._entry_key[goog.typeOf(x__2396__auto____9053)]);
if(or__3939__auto____9054)
{return or__3939__auto____9054;
} else
{var or__3939__auto____9055 = (cljs.core._entry_key["_"]);
if(or__3939__auto____9055)
{return or__3939__auto____9055;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3937__auto____9060 = coll;
if(and__3937__auto____9060)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3937__auto____9060;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2396__auto____9061 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9062 = (cljs.core._comparator[goog.typeOf(x__2396__auto____9061)]);
if(or__3939__auto____9062)
{return or__3939__auto____9062;
} else
{var or__3939__auto____9063 = (cljs.core._comparator["_"]);
if(or__3939__auto____9063)
{return or__3939__auto____9063;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3937__auto____9068 = o;
if(and__3937__auto____9068)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3937__auto____9068;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2396__auto____9069 = (((o == null))?null:o);
return (function (){var or__3939__auto____9070 = (cljs.core._pr_seq[goog.typeOf(x__2396__auto____9069)]);
if(or__3939__auto____9070)
{return or__3939__auto____9070;
} else
{var or__3939__auto____9071 = (cljs.core._pr_seq["_"]);
if(or__3939__auto____9071)
{return or__3939__auto____9071;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3937__auto____9076 = d;
if(and__3937__auto____9076)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3937__auto____9076;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2396__auto____9077 = (((d == null))?null:d);
return (function (){var or__3939__auto____9078 = (cljs.core._realized_QMARK_[goog.typeOf(x__2396__auto____9077)]);
if(or__3939__auto____9078)
{return or__3939__auto____9078;
} else
{var or__3939__auto____9079 = (cljs.core._realized_QMARK_["_"]);
if(or__3939__auto____9079)
{return or__3939__auto____9079;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3937__auto____9084 = this$;
if(and__3937__auto____9084)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3937__auto____9084;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2396__auto____9085 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____9086 = (cljs.core._notify_watches[goog.typeOf(x__2396__auto____9085)]);
if(or__3939__auto____9086)
{return or__3939__auto____9086;
} else
{var or__3939__auto____9087 = (cljs.core._notify_watches["_"]);
if(or__3939__auto____9087)
{return or__3939__auto____9087;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3937__auto____9092 = this$;
if(and__3937__auto____9092)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3937__auto____9092;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2396__auto____9093 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____9094 = (cljs.core._add_watch[goog.typeOf(x__2396__auto____9093)]);
if(or__3939__auto____9094)
{return or__3939__auto____9094;
} else
{var or__3939__auto____9095 = (cljs.core._add_watch["_"]);
if(or__3939__auto____9095)
{return or__3939__auto____9095;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3937__auto____9100 = this$;
if(and__3937__auto____9100)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3937__auto____9100;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2396__auto____9101 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____9102 = (cljs.core._remove_watch[goog.typeOf(x__2396__auto____9101)]);
if(or__3939__auto____9102)
{return or__3939__auto____9102;
} else
{var or__3939__auto____9103 = (cljs.core._remove_watch["_"]);
if(or__3939__auto____9103)
{return or__3939__auto____9103;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3937__auto____9108 = coll;
if(and__3937__auto____9108)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3937__auto____9108;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2396__auto____9109 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9110 = (cljs.core._as_transient[goog.typeOf(x__2396__auto____9109)]);
if(or__3939__auto____9110)
{return or__3939__auto____9110;
} else
{var or__3939__auto____9111 = (cljs.core._as_transient["_"]);
if(or__3939__auto____9111)
{return or__3939__auto____9111;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3937__auto____9116 = tcoll;
if(and__3937__auto____9116)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3937__auto____9116;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2396__auto____9117 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9118 = (cljs.core._conj_BANG_[goog.typeOf(x__2396__auto____9117)]);
if(or__3939__auto____9118)
{return or__3939__auto____9118;
} else
{var or__3939__auto____9119 = (cljs.core._conj_BANG_["_"]);
if(or__3939__auto____9119)
{return or__3939__auto____9119;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3937__auto____9124 = tcoll;
if(and__3937__auto____9124)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3937__auto____9124;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2396__auto____9125 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9126 = (cljs.core._persistent_BANG_[goog.typeOf(x__2396__auto____9125)]);
if(or__3939__auto____9126)
{return or__3939__auto____9126;
} else
{var or__3939__auto____9127 = (cljs.core._persistent_BANG_["_"]);
if(or__3939__auto____9127)
{return or__3939__auto____9127;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3937__auto____9132 = tcoll;
if(and__3937__auto____9132)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3937__auto____9132;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2396__auto____9133 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9134 = (cljs.core._assoc_BANG_[goog.typeOf(x__2396__auto____9133)]);
if(or__3939__auto____9134)
{return or__3939__auto____9134;
} else
{var or__3939__auto____9135 = (cljs.core._assoc_BANG_["_"]);
if(or__3939__auto____9135)
{return or__3939__auto____9135;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3937__auto____9140 = tcoll;
if(and__3937__auto____9140)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3937__auto____9140;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2396__auto____9141 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9142 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2396__auto____9141)]);
if(or__3939__auto____9142)
{return or__3939__auto____9142;
} else
{var or__3939__auto____9143 = (cljs.core._dissoc_BANG_["_"]);
if(or__3939__auto____9143)
{return or__3939__auto____9143;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3937__auto____9148 = tcoll;
if(and__3937__auto____9148)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3937__auto____9148;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2396__auto____9149 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9150 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2396__auto____9149)]);
if(or__3939__auto____9150)
{return or__3939__auto____9150;
} else
{var or__3939__auto____9151 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3939__auto____9151)
{return or__3939__auto____9151;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3937__auto____9156 = tcoll;
if(and__3937__auto____9156)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3937__auto____9156;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2396__auto____9157 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9158 = (cljs.core._pop_BANG_[goog.typeOf(x__2396__auto____9157)]);
if(or__3939__auto____9158)
{return or__3939__auto____9158;
} else
{var or__3939__auto____9159 = (cljs.core._pop_BANG_["_"]);
if(or__3939__auto____9159)
{return or__3939__auto____9159;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3937__auto____9164 = tcoll;
if(and__3937__auto____9164)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3937__auto____9164;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2396__auto____9165 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9166 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2396__auto____9165)]);
if(or__3939__auto____9166)
{return or__3939__auto____9166;
} else
{var or__3939__auto____9167 = (cljs.core._disjoin_BANG_["_"]);
if(or__3939__auto____9167)
{return or__3939__auto____9167;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3937__auto____9172 = x;
if(and__3937__auto____9172)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3937__auto____9172;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2396__auto____9173 = (((x == null))?null:x);
return (function (){var or__3939__auto____9174 = (cljs.core._compare[goog.typeOf(x__2396__auto____9173)]);
if(or__3939__auto____9174)
{return or__3939__auto____9174;
} else
{var or__3939__auto____9175 = (cljs.core._compare["_"]);
if(or__3939__auto____9175)
{return or__3939__auto____9175;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3937__auto____9180 = coll;
if(and__3937__auto____9180)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3937__auto____9180;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2396__auto____9181 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9182 = (cljs.core._drop_first[goog.typeOf(x__2396__auto____9181)]);
if(or__3939__auto____9182)
{return or__3939__auto____9182;
} else
{var or__3939__auto____9183 = (cljs.core._drop_first["_"]);
if(or__3939__auto____9183)
{return or__3939__auto____9183;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3937__auto____9188 = coll;
if(and__3937__auto____9188)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3937__auto____9188;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2396__auto____9189 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9190 = (cljs.core._chunked_first[goog.typeOf(x__2396__auto____9189)]);
if(or__3939__auto____9190)
{return or__3939__auto____9190;
} else
{var or__3939__auto____9191 = (cljs.core._chunked_first["_"]);
if(or__3939__auto____9191)
{return or__3939__auto____9191;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3937__auto____9196 = coll;
if(and__3937__auto____9196)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3937__auto____9196;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2396__auto____9197 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9198 = (cljs.core._chunked_rest[goog.typeOf(x__2396__auto____9197)]);
if(or__3939__auto____9198)
{return or__3939__auto____9198;
} else
{var or__3939__auto____9199 = (cljs.core._chunked_rest["_"]);
if(or__3939__auto____9199)
{return or__3939__auto____9199;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3937__auto____9204 = coll;
if(and__3937__auto____9204)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3937__auto____9204;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2396__auto____9205 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9206 = (cljs.core._chunked_next[goog.typeOf(x__2396__auto____9205)]);
if(or__3939__auto____9206)
{return or__3939__auto____9206;
} else
{var or__3939__auto____9207 = (cljs.core._chunked_next["_"]);
if(or__3939__auto____9207)
{return or__3939__auto____9207;
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
var or__3939__auto____9209 = (x === y);
if(or__3939__auto____9209)
{return or__3939__auto____9209;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__9210__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__9211 = y;
var G__9212 = cljs.core.first.call(null,more);
var G__9213 = cljs.core.next.call(null,more);
x = G__9211;
y = G__9212;
more = G__9213;
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
var G__9210 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9210__delegate.call(this, x, y, more);
};
G__9210.cljs$lang$maxFixedArity = 2;
G__9210.cljs$lang$applyTo = (function (arglist__9214){
var x = cljs.core.first(arglist__9214);
var y = cljs.core.first(cljs.core.next(arglist__9214));
var more = cljs.core.rest(cljs.core.next(arglist__9214));
return G__9210__delegate(x, y, more);
});
G__9210.cljs$lang$arity$variadic = G__9210__delegate;
return G__9210;
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
var G__9215 = null;
var G__9215__2 = (function (o,k){
return null;
});
var G__9215__3 = (function (o,k,not_found){
return not_found;
});
G__9215 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__9215__2.call(this,o,k);
case 3:
return G__9215__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9215;
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
var G__9216 = null;
var G__9216__2 = (function (_,f){
return f.call(null);
});
var G__9216__3 = (function (_,f,start){
return start;
});
G__9216 = function(_,f,start){
switch(arguments.length){
case 2:
return G__9216__2.call(this,_,f);
case 3:
return G__9216__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9216;
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
var G__9217 = null;
var G__9217__2 = (function (_,n){
return null;
});
var G__9217__3 = (function (_,n,not_found){
return not_found;
});
G__9217 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__9217__2.call(this,_,n);
case 3:
return G__9217__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9217;
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
var and__3937__auto____9218 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3937__auto____9218)
{return (o.toString() === other.toString());
} else
{return and__3937__auto____9218;
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
var cnt__9231 = cljs.core._count.call(null,cicoll);
if((cnt__9231 === 0))
{return f.call(null);
} else
{var val__9232 = cljs.core._nth.call(null,cicoll,0);
var n__9233 = 1;
while(true){
if((n__9233 < cnt__9231))
{var nval__9234 = f.call(null,val__9232,cljs.core._nth.call(null,cicoll,n__9233));
if(cljs.core.reduced_QMARK_.call(null,nval__9234))
{return cljs.core.deref.call(null,nval__9234);
} else
{{
var G__9243 = nval__9234;
var G__9244 = (n__9233 + 1);
val__9232 = G__9243;
n__9233 = G__9244;
continue;
}
}
} else
{return val__9232;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__9235 = cljs.core._count.call(null,cicoll);
var val__9236 = val;
var n__9237 = 0;
while(true){
if((n__9237 < cnt__9235))
{var nval__9238 = f.call(null,val__9236,cljs.core._nth.call(null,cicoll,n__9237));
if(cljs.core.reduced_QMARK_.call(null,nval__9238))
{return cljs.core.deref.call(null,nval__9238);
} else
{{
var G__9245 = nval__9238;
var G__9246 = (n__9237 + 1);
val__9236 = G__9245;
n__9237 = G__9246;
continue;
}
}
} else
{return val__9236;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__9239 = cljs.core._count.call(null,cicoll);
var val__9240 = val;
var n__9241 = idx;
while(true){
if((n__9241 < cnt__9239))
{var nval__9242 = f.call(null,val__9240,cljs.core._nth.call(null,cicoll,n__9241));
if(cljs.core.reduced_QMARK_.call(null,nval__9242))
{return cljs.core.deref.call(null,nval__9242);
} else
{{
var G__9247 = nval__9242;
var G__9248 = (n__9241 + 1);
val__9240 = G__9247;
n__9241 = G__9248;
continue;
}
}
} else
{return val__9240;
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
var cnt__9261 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__9262 = (arr[0]);
var n__9263 = 1;
while(true){
if((n__9263 < cnt__9261))
{var nval__9264 = f.call(null,val__9262,(arr[n__9263]));
if(cljs.core.reduced_QMARK_.call(null,nval__9264))
{return cljs.core.deref.call(null,nval__9264);
} else
{{
var G__9273 = nval__9264;
var G__9274 = (n__9263 + 1);
val__9262 = G__9273;
n__9263 = G__9274;
continue;
}
}
} else
{return val__9262;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__9265 = arr.length;
var val__9266 = val;
var n__9267 = 0;
while(true){
if((n__9267 < cnt__9265))
{var nval__9268 = f.call(null,val__9266,(arr[n__9267]));
if(cljs.core.reduced_QMARK_.call(null,nval__9268))
{return cljs.core.deref.call(null,nval__9268);
} else
{{
var G__9275 = nval__9268;
var G__9276 = (n__9267 + 1);
val__9266 = G__9275;
n__9267 = G__9276;
continue;
}
}
} else
{return val__9266;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__9269 = arr.length;
var val__9270 = val;
var n__9271 = idx;
while(true){
if((n__9271 < cnt__9269))
{var nval__9272 = f.call(null,val__9270,(arr[n__9271]));
if(cljs.core.reduced_QMARK_.call(null,nval__9272))
{return cljs.core.deref.call(null,nval__9272);
} else
{{
var G__9277 = nval__9272;
var G__9278 = (n__9271 + 1);
val__9270 = G__9277;
n__9271 = G__9278;
continue;
}
}
} else
{return val__9270;
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9279 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__9280 = this;
if(((this__9280.i + 1) < this__9280.a.length))
{return (new cljs.core.IndexedSeq(this__9280.a,(this__9280.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9281 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9282 = this;
var c__9283 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__9283 > 0))
{return (new cljs.core.RSeq(coll,(c__9283 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__9284 = this;
var this__9285 = this;
return cljs.core.pr_str.call(null,this__9285);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9286 = this;
if(cljs.core.counted_QMARK_.call(null,this__9286.a))
{return cljs.core.ci_reduce.call(null,this__9286.a,f,(this__9286.a[this__9286.i]),(this__9286.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__9286.a[this__9286.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9287 = this;
if(cljs.core.counted_QMARK_.call(null,this__9287.a))
{return cljs.core.ci_reduce.call(null,this__9287.a,f,start,this__9287.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9288 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9289 = this;
return (this__9289.a.length - this__9289.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__9290 = this;
return (this__9290.a[this__9290.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__9291 = this;
if(((this__9291.i + 1) < this__9291.a.length))
{return (new cljs.core.IndexedSeq(this__9291.a,(this__9291.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9292 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9293 = this;
var i__9294 = (n + this__9293.i);
if((i__9294 < this__9293.a.length))
{return (this__9293.a[i__9294]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9295 = this;
var i__9296 = (n + this__9295.i);
if((i__9296 < this__9295.a.length))
{return (this__9295.a[i__9296]);
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
var G__9297 = null;
var G__9297__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__9297__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__9297 = function(array,f,start){
switch(arguments.length){
case 2:
return G__9297__2.call(this,array,f);
case 3:
return G__9297__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9297;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__9298 = null;
var G__9298__2 = (function (array,k){
return (array[k]);
});
var G__9298__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__9298 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__9298__2.call(this,array,k);
case 3:
return G__9298__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9298;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__9299 = null;
var G__9299__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__9299__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__9299 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__9299__2.call(this,array,n);
case 3:
return G__9299__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9299;
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
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9300 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9301 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__9302 = this;
var this__9303 = this;
return cljs.core.pr_str.call(null,this__9303);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9304 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9305 = this;
return (this__9305.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9306 = this;
return cljs.core._nth.call(null,this__9306.ci,this__9306.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9307 = this;
if((this__9307.i > 0))
{return (new cljs.core.RSeq(this__9307.ci,(this__9307.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9308 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__9309 = this;
return (new cljs.core.RSeq(this__9309.ci,this__9309.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9310 = this;
return this__9310.meta;
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
{if((function (){var G__9314__9315 = coll;
if(G__9314__9315)
{if((function (){var or__3939__auto____9316 = (G__9314__9315.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3939__auto____9316)
{return or__3939__auto____9316;
} else
{return G__9314__9315.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__9314__9315.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9314__9315);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9314__9315);
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
{if((function (){var G__9321__9322 = coll;
if(G__9321__9322)
{if((function (){var or__3939__auto____9323 = (G__9321__9322.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3939__auto____9323)
{return or__3939__auto____9323;
} else
{return G__9321__9322.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9321__9322.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9321__9322);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9321__9322);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__9324 = cljs.core.seq.call(null,coll);
if((s__9324 == null))
{return null;
} else
{return cljs.core._first.call(null,s__9324);
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
{if((function (){var G__9329__9330 = coll;
if(G__9329__9330)
{if((function (){var or__3939__auto____9331 = (G__9329__9330.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3939__auto____9331)
{return or__3939__auto____9331;
} else
{return G__9329__9330.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9329__9330.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9329__9330);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9329__9330);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__9332 = cljs.core.seq.call(null,coll);
if(!((s__9332 == null)))
{return cljs.core._rest.call(null,s__9332);
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
{if((function (){var G__9336__9337 = coll;
if(G__9336__9337)
{if((function (){var or__3939__auto____9338 = (G__9336__9337.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3939__auto____9338)
{return or__3939__auto____9338;
} else
{return G__9336__9337.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__9336__9337.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__9336__9337);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__9336__9337);
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
var sn__9340 = cljs.core.next.call(null,s);
if(!((sn__9340 == null)))
{{
var G__9341 = sn__9340;
s = G__9341;
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
var G__9342__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__9343 = conj.call(null,coll,x);
var G__9344 = cljs.core.first.call(null,xs);
var G__9345 = cljs.core.next.call(null,xs);
coll = G__9343;
x = G__9344;
xs = G__9345;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__9342 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9342__delegate.call(this, coll, x, xs);
};
G__9342.cljs$lang$maxFixedArity = 2;
G__9342.cljs$lang$applyTo = (function (arglist__9346){
var coll = cljs.core.first(arglist__9346);
var x = cljs.core.first(cljs.core.next(arglist__9346));
var xs = cljs.core.rest(cljs.core.next(arglist__9346));
return G__9342__delegate(coll, x, xs);
});
G__9342.cljs$lang$arity$variadic = G__9342__delegate;
return G__9342;
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
var s__9349 = cljs.core.seq.call(null,coll);
var acc__9350 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__9349))
{return (acc__9350 + cljs.core._count.call(null,s__9349));
} else
{{
var G__9351 = cljs.core.next.call(null,s__9349);
var G__9352 = (acc__9350 + 1);
s__9349 = G__9351;
acc__9350 = G__9352;
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
{if((function (){var G__9359__9360 = coll;
if(G__9359__9360)
{if((function (){var or__3939__auto____9361 = (G__9359__9360.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3939__auto____9361)
{return or__3939__auto____9361;
} else
{return G__9359__9360.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9359__9360.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9359__9360);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9359__9360);
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
{if((function (){var G__9362__9363 = coll;
if(G__9362__9363)
{if((function (){var or__3939__auto____9364 = (G__9362__9363.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3939__auto____9364)
{return or__3939__auto____9364;
} else
{return G__9362__9363.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9362__9363.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9362__9363);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9362__9363);
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
var G__9367__delegate = function (coll,k,v,kvs){
while(true){
var ret__9366 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__9368 = ret__9366;
var G__9369 = cljs.core.first.call(null,kvs);
var G__9370 = cljs.core.second.call(null,kvs);
var G__9371 = cljs.core.nnext.call(null,kvs);
coll = G__9368;
k = G__9369;
v = G__9370;
kvs = G__9371;
continue;
}
} else
{return ret__9366;
}
break;
}
};
var G__9367 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9367__delegate.call(this, coll, k, v, kvs);
};
G__9367.cljs$lang$maxFixedArity = 3;
G__9367.cljs$lang$applyTo = (function (arglist__9372){
var coll = cljs.core.first(arglist__9372);
var k = cljs.core.first(cljs.core.next(arglist__9372));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9372)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9372)));
return G__9367__delegate(coll, k, v, kvs);
});
G__9367.cljs$lang$arity$variadic = G__9367__delegate;
return G__9367;
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
var G__9375__delegate = function (coll,k,ks){
while(true){
var ret__9374 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__9376 = ret__9374;
var G__9377 = cljs.core.first.call(null,ks);
var G__9378 = cljs.core.next.call(null,ks);
coll = G__9376;
k = G__9377;
ks = G__9378;
continue;
}
} else
{return ret__9374;
}
break;
}
};
var G__9375 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9375__delegate.call(this, coll, k, ks);
};
G__9375.cljs$lang$maxFixedArity = 2;
G__9375.cljs$lang$applyTo = (function (arglist__9379){
var coll = cljs.core.first(arglist__9379);
var k = cljs.core.first(cljs.core.next(arglist__9379));
var ks = cljs.core.rest(cljs.core.next(arglist__9379));
return G__9375__delegate(coll, k, ks);
});
G__9375.cljs$lang$arity$variadic = G__9375__delegate;
return G__9375;
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
if((function (){var G__9383__9384 = o;
if(G__9383__9384)
{if((function (){var or__3939__auto____9385 = (G__9383__9384.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3939__auto____9385)
{return or__3939__auto____9385;
} else
{return G__9383__9384.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9383__9384.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9383__9384);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9383__9384);
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
var G__9388__delegate = function (coll,k,ks){
while(true){
var ret__9387 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__9389 = ret__9387;
var G__9390 = cljs.core.first.call(null,ks);
var G__9391 = cljs.core.next.call(null,ks);
coll = G__9389;
k = G__9390;
ks = G__9391;
continue;
}
} else
{return ret__9387;
}
break;
}
};
var G__9388 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9388__delegate.call(this, coll, k, ks);
};
G__9388.cljs$lang$maxFixedArity = 2;
G__9388.cljs$lang$applyTo = (function (arglist__9392){
var coll = cljs.core.first(arglist__9392);
var k = cljs.core.first(cljs.core.next(arglist__9392));
var ks = cljs.core.rest(cljs.core.next(arglist__9392));
return G__9388__delegate(coll, k, ks);
});
G__9388.cljs$lang$arity$variadic = G__9388__delegate;
return G__9388;
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
var h__9394 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__9394);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__9394;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__9396 = (cljs.core.string_hash_cache[k]);
if(!((h__9396 == null)))
{return h__9396;
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
if((function (){var and__3937__auto____9398 = goog.isString(o);
if(and__3937__auto____9398)
{return check_cache;
} else
{return and__3937__auto____9398;
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
{var G__9402__9403 = x;
if(G__9402__9403)
{if((function (){var or__3939__auto____9404 = (G__9402__9403.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3939__auto____9404)
{return or__3939__auto____9404;
} else
{return G__9402__9403.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__9402__9403.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__9402__9403);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__9402__9403);
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
{var G__9408__9409 = x;
if(G__9408__9409)
{if((function (){var or__3939__auto____9410 = (G__9408__9409.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3939__auto____9410)
{return or__3939__auto____9410;
} else
{return G__9408__9409.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__9408__9409.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__9408__9409);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__9408__9409);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__9414__9415 = x;
if(G__9414__9415)
{if((function (){var or__3939__auto____9416 = (G__9414__9415.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3939__auto____9416)
{return or__3939__auto____9416;
} else
{return G__9414__9415.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__9414__9415.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__9414__9415);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__9414__9415);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__9420__9421 = x;
if(G__9420__9421)
{if((function (){var or__3939__auto____9422 = (G__9420__9421.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3939__auto____9422)
{return or__3939__auto____9422;
} else
{return G__9420__9421.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__9420__9421.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__9420__9421);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__9420__9421);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__9426__9427 = x;
if(G__9426__9427)
{if((function (){var or__3939__auto____9428 = (G__9426__9427.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3939__auto____9428)
{return or__3939__auto____9428;
} else
{return G__9426__9427.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__9426__9427.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__9426__9427);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__9426__9427);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__9432__9433 = x;
if(G__9432__9433)
{if((function (){var or__3939__auto____9434 = (G__9432__9433.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3939__auto____9434)
{return or__3939__auto____9434;
} else
{return G__9432__9433.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9432__9433.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9432__9433);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9432__9433);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__9438__9439 = x;
if(G__9438__9439)
{if((function (){var or__3939__auto____9440 = (G__9438__9439.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3939__auto____9440)
{return or__3939__auto____9440;
} else
{return G__9438__9439.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9438__9439.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9438__9439);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9438__9439);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__9444__9445 = x;
if(G__9444__9445)
{if((function (){var or__3939__auto____9446 = (G__9444__9445.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3939__auto____9446)
{return or__3939__auto____9446;
} else
{return G__9444__9445.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__9444__9445.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__9444__9445);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__9444__9445);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__9450__9451 = x;
if(G__9450__9451)
{if((function (){var or__3939__auto____9452 = (G__9450__9451.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3939__auto____9452)
{return or__3939__auto____9452;
} else
{return G__9450__9451.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__9450__9451.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__9450__9451);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__9450__9451);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__9456__9457 = x;
if(G__9456__9457)
{if(cljs.core.truth_((function (){var or__3939__auto____9458 = null;
if(cljs.core.truth_(or__3939__auto____9458))
{return or__3939__auto____9458;
} else
{return G__9456__9457.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__9456__9457.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__9456__9457);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__9456__9457);
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
var G__9459__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__9459 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9459__delegate.call(this, keyvals);
};
G__9459.cljs$lang$maxFixedArity = 0;
G__9459.cljs$lang$applyTo = (function (arglist__9460){
var keyvals = cljs.core.seq(arglist__9460);;
return G__9459__delegate(keyvals);
});
G__9459.cljs$lang$arity$variadic = G__9459__delegate;
return G__9459;
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
var keys__9462 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__9462.push(key);
}));
return keys__9462;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__9466 = i;
var j__9467 = j;
var len__9468 = len;
while(true){
if((len__9468 === 0))
{return to;
} else
{(to[j__9467] = (from[i__9466]));
{
var G__9469 = (i__9466 + 1);
var G__9470 = (j__9467 + 1);
var G__9471 = (len__9468 - 1);
i__9466 = G__9469;
j__9467 = G__9470;
len__9468 = G__9471;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__9475 = (i + (len - 1));
var j__9476 = (j + (len - 1));
var len__9477 = len;
while(true){
if((len__9477 === 0))
{return to;
} else
{(to[j__9476] = (from[i__9475]));
{
var G__9478 = (i__9475 - 1);
var G__9479 = (j__9476 - 1);
var G__9480 = (len__9477 - 1);
i__9475 = G__9478;
j__9476 = G__9479;
len__9477 = G__9480;
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
{var G__9484__9485 = s;
if(G__9484__9485)
{if((function (){var or__3939__auto____9486 = (G__9484__9485.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3939__auto____9486)
{return or__3939__auto____9486;
} else
{return G__9484__9485.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9484__9485.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9484__9485);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9484__9485);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__9490__9491 = s;
if(G__9490__9491)
{if((function (){var or__3939__auto____9492 = (G__9490__9491.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3939__auto____9492)
{return or__3939__auto____9492;
} else
{return G__9490__9491.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__9490__9491.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__9490__9491);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__9490__9491);
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
var and__3937__auto____9495 = goog.isString(x);
if(and__3937__auto____9495)
{return !((function (){var or__3939__auto____9496 = (x.charAt(0) === "\uFDD0");
if(or__3939__auto____9496)
{return or__3939__auto____9496;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3937__auto____9495;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3937__auto____9498 = goog.isString(x);
if(and__3937__auto____9498)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3937__auto____9498;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3937__auto____9500 = goog.isString(x);
if(and__3937__auto____9500)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3937__auto____9500;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3939__auto____9505 = cljs.core.fn_QMARK_.call(null,f);
if(or__3939__auto____9505)
{return or__3939__auto____9505;
} else
{var G__9506__9507 = f;
if(G__9506__9507)
{if((function (){var or__3939__auto____9508 = (G__9506__9507.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3939__auto____9508)
{return or__3939__auto____9508;
} else
{return G__9506__9507.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__9506__9507.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__9506__9507);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__9506__9507);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3937__auto____9510 = cljs.core.number_QMARK_.call(null,n);
if(and__3937__auto____9510)
{return (n == n.toFixed());
} else
{return and__3937__auto____9510;
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
if(cljs.core.truth_((function (){var and__3937__auto____9513 = coll;
if(cljs.core.truth_(and__3937__auto____9513))
{var and__3937__auto____9514 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3937__auto____9514)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3937__auto____9514;
}
} else
{return and__3937__auto____9513;
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
var G__9523__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__9519 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__9520 = more;
while(true){
var x__9521 = cljs.core.first.call(null,xs__9520);
var etc__9522 = cljs.core.next.call(null,xs__9520);
if(cljs.core.truth_(xs__9520))
{if(cljs.core.contains_QMARK_.call(null,s__9519,x__9521))
{return false;
} else
{{
var G__9524 = cljs.core.conj.call(null,s__9519,x__9521);
var G__9525 = etc__9522;
s__9519 = G__9524;
xs__9520 = G__9525;
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
var G__9523 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9523__delegate.call(this, x, y, more);
};
G__9523.cljs$lang$maxFixedArity = 2;
G__9523.cljs$lang$applyTo = (function (arglist__9526){
var x = cljs.core.first(arglist__9526);
var y = cljs.core.first(cljs.core.next(arglist__9526));
var more = cljs.core.rest(cljs.core.next(arglist__9526));
return G__9523__delegate(x, y, more);
});
G__9523.cljs$lang$arity$variadic = G__9523__delegate;
return G__9523;
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
{if((function (){var G__9530__9531 = x;
if(G__9530__9531)
{if(cljs.core.truth_((function (){var or__3939__auto____9532 = null;
if(cljs.core.truth_(or__3939__auto____9532))
{return or__3939__auto____9532;
} else
{return G__9530__9531.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__9530__9531.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__9530__9531);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__9530__9531);
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
var xl__9537 = cljs.core.count.call(null,xs);
var yl__9538 = cljs.core.count.call(null,ys);
if((xl__9537 < yl__9538))
{return -1;
} else
{if((xl__9537 > yl__9538))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__9537,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__9539 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3937__auto____9540 = (d__9539 === 0);
if(and__3937__auto____9540)
{return ((n + 1) < len);
} else
{return and__3937__auto____9540;
}
})())
{{
var G__9541 = xs;
var G__9542 = ys;
var G__9543 = len;
var G__9544 = (n + 1);
xs = G__9541;
ys = G__9542;
len = G__9543;
n = G__9544;
continue;
}
} else
{return d__9539;
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
var r__9546 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__9546))
{return r__9546;
} else
{if(cljs.core.truth_(r__9546))
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
{var a__9548 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__9548,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9548);
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
var temp__4086__auto____9554 = cljs.core.seq.call(null,coll);
if(temp__4086__auto____9554)
{var s__9555 = temp__4086__auto____9554;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9555),cljs.core.next.call(null,s__9555));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__9556 = val;
var coll__9557 = cljs.core.seq.call(null,coll);
while(true){
if(coll__9557)
{var nval__9558 = f.call(null,val__9556,cljs.core.first.call(null,coll__9557));
if(cljs.core.reduced_QMARK_.call(null,nval__9558))
{return cljs.core.deref.call(null,nval__9558);
} else
{{
var G__9559 = nval__9558;
var G__9560 = cljs.core.next.call(null,coll__9557);
val__9556 = G__9559;
coll__9557 = G__9560;
continue;
}
}
} else
{return val__9556;
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
var a__9562 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__9562);
return cljs.core.vec.call(null,a__9562);
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
if((function (){var G__9569__9570 = coll;
if(G__9569__9570)
{if((function (){var or__3939__auto____9571 = (G__9569__9570.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3939__auto____9571)
{return or__3939__auto____9571;
} else
{return G__9569__9570.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9569__9570.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9569__9570);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9569__9570);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__9572__9573 = coll;
if(G__9572__9573)
{if((function (){var or__3939__auto____9574 = (G__9572__9573.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3939__auto____9574)
{return or__3939__auto____9574;
} else
{return G__9572__9573.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9572__9573.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9572__9573);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9572__9573);
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__9575 = this;
return this__9575.val;
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
var G__9576__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9576 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9576__delegate.call(this, x, y, more);
};
G__9576.cljs$lang$maxFixedArity = 2;
G__9576.cljs$lang$applyTo = (function (arglist__9577){
var x = cljs.core.first(arglist__9577);
var y = cljs.core.first(cljs.core.next(arglist__9577));
var more = cljs.core.rest(cljs.core.next(arglist__9577));
return G__9576__delegate(x, y, more);
});
G__9576.cljs$lang$arity$variadic = G__9576__delegate;
return G__9576;
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
var G__9578__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9578 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9578__delegate.call(this, x, y, more);
};
G__9578.cljs$lang$maxFixedArity = 2;
G__9578.cljs$lang$applyTo = (function (arglist__9579){
var x = cljs.core.first(arglist__9579);
var y = cljs.core.first(cljs.core.next(arglist__9579));
var more = cljs.core.rest(cljs.core.next(arglist__9579));
return G__9578__delegate(x, y, more);
});
G__9578.cljs$lang$arity$variadic = G__9578__delegate;
return G__9578;
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
var G__9580__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9580 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9580__delegate.call(this, x, y, more);
};
G__9580.cljs$lang$maxFixedArity = 2;
G__9580.cljs$lang$applyTo = (function (arglist__9581){
var x = cljs.core.first(arglist__9581);
var y = cljs.core.first(cljs.core.next(arglist__9581));
var more = cljs.core.rest(cljs.core.next(arglist__9581));
return G__9580__delegate(x, y, more);
});
G__9580.cljs$lang$arity$variadic = G__9580__delegate;
return G__9580;
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
var G__9582__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9582 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9582__delegate.call(this, x, y, more);
};
G__9582.cljs$lang$maxFixedArity = 2;
G__9582.cljs$lang$applyTo = (function (arglist__9583){
var x = cljs.core.first(arglist__9583);
var y = cljs.core.first(cljs.core.next(arglist__9583));
var more = cljs.core.rest(cljs.core.next(arglist__9583));
return G__9582__delegate(x, y, more);
});
G__9582.cljs$lang$arity$variadic = G__9582__delegate;
return G__9582;
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
var G__9584__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__9585 = y;
var G__9586 = cljs.core.first.call(null,more);
var G__9587 = cljs.core.next.call(null,more);
x = G__9585;
y = G__9586;
more = G__9587;
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
var G__9584 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9584__delegate.call(this, x, y, more);
};
G__9584.cljs$lang$maxFixedArity = 2;
G__9584.cljs$lang$applyTo = (function (arglist__9588){
var x = cljs.core.first(arglist__9588);
var y = cljs.core.first(cljs.core.next(arglist__9588));
var more = cljs.core.rest(cljs.core.next(arglist__9588));
return G__9584__delegate(x, y, more);
});
G__9584.cljs$lang$arity$variadic = G__9584__delegate;
return G__9584;
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
var G__9589__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__9590 = y;
var G__9591 = cljs.core.first.call(null,more);
var G__9592 = cljs.core.next.call(null,more);
x = G__9590;
y = G__9591;
more = G__9592;
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
var G__9589 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9589__delegate.call(this, x, y, more);
};
G__9589.cljs$lang$maxFixedArity = 2;
G__9589.cljs$lang$applyTo = (function (arglist__9593){
var x = cljs.core.first(arglist__9593);
var y = cljs.core.first(cljs.core.next(arglist__9593));
var more = cljs.core.rest(cljs.core.next(arglist__9593));
return G__9589__delegate(x, y, more);
});
G__9589.cljs$lang$arity$variadic = G__9589__delegate;
return G__9589;
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
var G__9594__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__9595 = y;
var G__9596 = cljs.core.first.call(null,more);
var G__9597 = cljs.core.next.call(null,more);
x = G__9595;
y = G__9596;
more = G__9597;
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
var G__9594 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9594__delegate.call(this, x, y, more);
};
G__9594.cljs$lang$maxFixedArity = 2;
G__9594.cljs$lang$applyTo = (function (arglist__9598){
var x = cljs.core.first(arglist__9598);
var y = cljs.core.first(cljs.core.next(arglist__9598));
var more = cljs.core.rest(cljs.core.next(arglist__9598));
return G__9594__delegate(x, y, more);
});
G__9594.cljs$lang$arity$variadic = G__9594__delegate;
return G__9594;
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
var G__9599__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__9600 = y;
var G__9601 = cljs.core.first.call(null,more);
var G__9602 = cljs.core.next.call(null,more);
x = G__9600;
y = G__9601;
more = G__9602;
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
var G__9599 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9599__delegate.call(this, x, y, more);
};
G__9599.cljs$lang$maxFixedArity = 2;
G__9599.cljs$lang$applyTo = (function (arglist__9603){
var x = cljs.core.first(arglist__9603);
var y = cljs.core.first(cljs.core.next(arglist__9603));
var more = cljs.core.rest(cljs.core.next(arglist__9603));
return G__9599__delegate(x, y, more);
});
G__9599.cljs$lang$arity$variadic = G__9599__delegate;
return G__9599;
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
var G__9604__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9604 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9604__delegate.call(this, x, y, more);
};
G__9604.cljs$lang$maxFixedArity = 2;
G__9604.cljs$lang$applyTo = (function (arglist__9605){
var x = cljs.core.first(arglist__9605);
var y = cljs.core.first(cljs.core.next(arglist__9605));
var more = cljs.core.rest(cljs.core.next(arglist__9605));
return G__9604__delegate(x, y, more);
});
G__9604.cljs$lang$arity$variadic = G__9604__delegate;
return G__9604;
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
var G__9606__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9606 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9606__delegate.call(this, x, y, more);
};
G__9606.cljs$lang$maxFixedArity = 2;
G__9606.cljs$lang$applyTo = (function (arglist__9607){
var x = cljs.core.first(arglist__9607);
var y = cljs.core.first(cljs.core.next(arglist__9607));
var more = cljs.core.rest(cljs.core.next(arglist__9607));
return G__9606__delegate(x, y, more);
});
G__9606.cljs$lang$arity$variadic = G__9606__delegate;
return G__9606;
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
var rem__9609 = (n % d);
return cljs.core.fix.call(null,((n - rem__9609) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9611 = cljs.core.quot.call(null,n,d);
return (n - (d * q__9611));
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
var v__9614 = (v - ((v >> 1) & 1431655765));
var v__9615 = ((v__9614 & 858993459) + ((v__9614 >> 2) & 858993459));
return ((((v__9615 + (v__9615 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__9616__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__9617 = y;
var G__9618 = cljs.core.first.call(null,more);
var G__9619 = cljs.core.next.call(null,more);
x = G__9617;
y = G__9618;
more = G__9619;
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
var G__9616 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9616__delegate.call(this, x, y, more);
};
G__9616.cljs$lang$maxFixedArity = 2;
G__9616.cljs$lang$applyTo = (function (arglist__9620){
var x = cljs.core.first(arglist__9620);
var y = cljs.core.first(cljs.core.next(arglist__9620));
var more = cljs.core.rest(cljs.core.next(arglist__9620));
return G__9616__delegate(x, y, more);
});
G__9616.cljs$lang$arity$variadic = G__9616__delegate;
return G__9616;
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
var n__9624 = n;
var xs__9625 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____9626 = xs__9625;
if(and__3937__auto____9626)
{return (n__9624 > 0);
} else
{return and__3937__auto____9626;
}
})()))
{{
var G__9627 = (n__9624 - 1);
var G__9628 = cljs.core.next.call(null,xs__9625);
n__9624 = G__9627;
xs__9625 = G__9628;
continue;
}
} else
{return xs__9625;
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
var G__9629__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9630 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9631 = cljs.core.next.call(null,more);
sb = G__9630;
more = G__9631;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9629 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9629__delegate.call(this, x, ys);
};
G__9629.cljs$lang$maxFixedArity = 1;
G__9629.cljs$lang$applyTo = (function (arglist__9632){
var x = cljs.core.first(arglist__9632);
var ys = cljs.core.rest(arglist__9632);
return G__9629__delegate(x, ys);
});
G__9629.cljs$lang$arity$variadic = G__9629__delegate;
return G__9629;
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
var G__9633__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9634 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__9635 = cljs.core.next.call(null,more);
sb = G__9634;
more = G__9635;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__9633 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9633__delegate.call(this, x, ys);
};
G__9633.cljs$lang$maxFixedArity = 1;
G__9633.cljs$lang$applyTo = (function (arglist__9636){
var x = cljs.core.first(arglist__9636);
var ys = cljs.core.rest(arglist__9636);
return G__9633__delegate(x, ys);
});
G__9633.cljs$lang$arity$variadic = G__9633__delegate;
return G__9633;
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
format.cljs$lang$applyTo = (function (arglist__9637){
var fmt = cljs.core.first(arglist__9637);
var args = cljs.core.rest(arglist__9637);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9640 = cljs.core.seq.call(null,x);
var ys__9641 = cljs.core.seq.call(null,y);
while(true){
if((xs__9640 == null))
{return (ys__9641 == null);
} else
{if((ys__9641 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9640),cljs.core.first.call(null,ys__9641)))
{{
var G__9642 = cljs.core.next.call(null,xs__9640);
var G__9643 = cljs.core.next.call(null,ys__9641);
xs__9640 = G__9642;
ys__9641 = G__9643;
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
return cljs.core.reduce.call(null,(function (p1__9644_SHARP_,p2__9645_SHARP_){
return cljs.core.hash_combine.call(null,p1__9644_SHARP_,cljs.core.hash.call(null,p2__9645_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__9649 = 0;
var s__9650 = cljs.core.seq.call(null,m);
while(true){
if(s__9650)
{var e__9651 = cljs.core.first.call(null,s__9650);
{
var G__9652 = ((h__9649 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__9651)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__9651)))) % 4503599627370496);
var G__9653 = cljs.core.next.call(null,s__9650);
h__9649 = G__9652;
s__9650 = G__9653;
continue;
}
} else
{return h__9649;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__9657 = 0;
var s__9658 = cljs.core.seq.call(null,s);
while(true){
if(s__9658)
{var e__9659 = cljs.core.first.call(null,s__9658);
{
var G__9660 = ((h__9657 + cljs.core.hash.call(null,e__9659)) % 4503599627370496);
var G__9661 = cljs.core.next.call(null,s__9658);
h__9657 = G__9660;
s__9658 = G__9661;
continue;
}
} else
{return h__9657;
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
var G__9682__9683 = cljs.core.seq.call(null,fn_map);
if(G__9682__9683)
{var G__9685__9687 = cljs.core.first.call(null,G__9682__9683);
var vec__9686__9688 = G__9685__9687;
var key_name__9689 = cljs.core.nth.call(null,vec__9686__9688,0,null);
var f__9690 = cljs.core.nth.call(null,vec__9686__9688,1,null);
var G__9682__9691 = G__9682__9683;
var G__9685__9692 = G__9685__9687;
var G__9682__9693 = G__9682__9691;
while(true){
var vec__9694__9695 = G__9685__9692;
var key_name__9696 = cljs.core.nth.call(null,vec__9694__9695,0,null);
var f__9697 = cljs.core.nth.call(null,vec__9694__9695,1,null);
var G__9682__9698 = G__9682__9693;
var str_name__9699 = cljs.core.name.call(null,key_name__9696);
(obj[str_name__9699] = f__9697);
var temp__4088__auto____9700 = cljs.core.next.call(null,G__9682__9698);
if(temp__4088__auto____9700)
{var G__9682__9701 = temp__4088__auto____9700;
{
var G__9702 = cljs.core.first.call(null,G__9682__9701);
var G__9703 = G__9682__9701;
G__9685__9692 = G__9702;
G__9682__9693 = G__9703;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9704 = this;
var h__2225__auto____9705 = this__9704.__hash;
if(!((h__2225__auto____9705 == null)))
{return h__2225__auto____9705;
} else
{var h__2225__auto____9706 = cljs.core.hash_coll.call(null,coll);
this__9704.__hash = h__2225__auto____9706;
return h__2225__auto____9706;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9707 = this;
if((this__9707.count === 1))
{return null;
} else
{return this__9707.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9708 = this;
return (new cljs.core.List(this__9708.meta,o,coll,(this__9708.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__9709 = this;
var this__9710 = this;
return cljs.core.pr_str.call(null,this__9710);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9711 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9712 = this;
return this__9712.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9713 = this;
return this__9713.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9714 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9715 = this;
return this__9715.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9716 = this;
if((this__9716.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__9716.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9717 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9718 = this;
return (new cljs.core.List(meta,this__9718.first,this__9718.rest,this__9718.count,this__9718.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9719 = this;
return this__9719.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9720 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9721 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9722 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9723 = this;
return (new cljs.core.List(this__9723.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__9724 = this;
var this__9725 = this;
return cljs.core.pr_str.call(null,this__9725);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9726 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9727 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9728 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9729 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9730 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9731 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9732 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9733 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9734 = this;
return this__9734.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9735 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__9739__9740 = coll;
if(G__9739__9740)
{if((function (){var or__3939__auto____9741 = (G__9739__9740.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3939__auto____9741)
{return or__3939__auto____9741;
} else
{return G__9739__9740.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__9739__9740.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__9739__9740);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__9739__9740);
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
var G__9742__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__9742 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9742__delegate.call(this, x, y, z, items);
};
G__9742.cljs$lang$maxFixedArity = 3;
G__9742.cljs$lang$applyTo = (function (arglist__9743){
var x = cljs.core.first(arglist__9743);
var y = cljs.core.first(cljs.core.next(arglist__9743));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9743)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9743)));
return G__9742__delegate(x, y, z, items);
});
G__9742.cljs$lang$arity$variadic = G__9742__delegate;
return G__9742;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9744 = this;
var h__2225__auto____9745 = this__9744.__hash;
if(!((h__2225__auto____9745 == null)))
{return h__2225__auto____9745;
} else
{var h__2225__auto____9746 = cljs.core.hash_coll.call(null,coll);
this__9744.__hash = h__2225__auto____9746;
return h__2225__auto____9746;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9747 = this;
if((this__9747.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__9747.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9748 = this;
return (new cljs.core.Cons(null,o,coll,this__9748.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__9749 = this;
var this__9750 = this;
return cljs.core.pr_str.call(null,this__9750);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9751 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9752 = this;
return this__9752.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9753 = this;
if((this__9753.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__9753.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9754 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9755 = this;
return (new cljs.core.Cons(meta,this__9755.first,this__9755.rest,this__9755.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9756 = this;
return this__9756.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9757 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9757.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3939__auto____9762 = (coll == null);
if(or__3939__auto____9762)
{return or__3939__auto____9762;
} else
{var G__9763__9764 = coll;
if(G__9763__9764)
{if((function (){var or__3939__auto____9765 = (G__9763__9764.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3939__auto____9765)
{return or__3939__auto____9765;
} else
{return G__9763__9764.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9763__9764.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9763__9764);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9763__9764);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__9769__9770 = x;
if(G__9769__9770)
{if((function (){var or__3939__auto____9771 = (G__9769__9770.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3939__auto____9771)
{return or__3939__auto____9771;
} else
{return G__9769__9770.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__9769__9770.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__9769__9770);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__9769__9770);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__9772 = null;
var G__9772__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9772__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9772 = function(string,f,start){
switch(arguments.length){
case 2:
return G__9772__2.call(this,string,f);
case 3:
return G__9772__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9772;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9773 = null;
var G__9773__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9773__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9773 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__9773__2.call(this,string,k);
case 3:
return G__9773__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9773;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9774 = null;
var G__9774__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__9774__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9774 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__9774__2.call(this,string,n);
case 3:
return G__9774__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9774;
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
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__9786 = null;
var G__9786__2 = (function (this_sym9777,coll){
var this__9779 = this;
var this_sym9777__9780 = this;
var ___9781 = this_sym9777__9780;
if((coll == null))
{return null;
} else
{var strobj__9782 = coll.strobj;
if((strobj__9782 == null))
{return cljs.core._lookup.call(null,coll,this__9779.k,null);
} else
{return (strobj__9782[this__9779.k]);
}
}
});
var G__9786__3 = (function (this_sym9778,coll,not_found){
var this__9779 = this;
var this_sym9778__9783 = this;
var ___9784 = this_sym9778__9783;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__9779.k,not_found);
}
});
G__9786 = function(this_sym9778,coll,not_found){
switch(arguments.length){
case 2:
return G__9786__2.call(this,this_sym9778,coll);
case 3:
return G__9786__3.call(this,this_sym9778,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9786;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym9775,args9776){
var this__9785 = this;
return this_sym9775.call.apply(this_sym9775,[this_sym9775].concat(args9776.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__9795 = null;
var G__9795__2 = (function (this_sym9789,coll){
var this_sym9789__9791 = this;
var this__9792 = this_sym9789__9791;
return cljs.core._lookup.call(null,coll,this__9792.toString(),null);
});
var G__9795__3 = (function (this_sym9790,coll,not_found){
var this_sym9790__9793 = this;
var this__9794 = this_sym9790__9793;
return cljs.core._lookup.call(null,coll,this__9794.toString(),not_found);
});
G__9795 = function(this_sym9790,coll,not_found){
switch(arguments.length){
case 2:
return G__9795__2.call(this,this_sym9790,coll);
case 3:
return G__9795__3.call(this,this_sym9790,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9795;
})()
;
String.prototype.apply = (function (this_sym9787,args9788){
return this_sym9787.call.apply(this_sym9787,[this_sym9787].concat(args9788.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__9797 = lazy_seq.x;
if(lazy_seq.realized)
{return x__9797;
} else
{lazy_seq.x = x__9797.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9798 = this;
var h__2225__auto____9799 = this__9798.__hash;
if(!((h__2225__auto____9799 == null)))
{return h__2225__auto____9799;
} else
{var h__2225__auto____9800 = cljs.core.hash_coll.call(null,coll);
this__9798.__hash = h__2225__auto____9800;
return h__2225__auto____9800;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9801 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9802 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__9803 = this;
var this__9804 = this;
return cljs.core.pr_str.call(null,this__9804);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9805 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9806 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9807 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9808 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9809 = this;
return (new cljs.core.LazySeq(meta,this__9809.realized,this__9809.x,this__9809.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9810 = this;
return this__9810.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9811 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9811.meta);
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9812 = this;
return this__9812.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__9813 = this;
var ___9814 = this;
(this__9813.buf[this__9813.end] = o);
return this__9813.end = (this__9813.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__9815 = this;
var ___9816 = this;
var ret__9817 = (new cljs.core.ArrayChunk(this__9815.buf,0,this__9815.end));
this__9815.buf = null;
return ret__9817;
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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9818 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__9818.arr[this__9818.off]),(this__9818.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9819 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__9819.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__9820 = this;
if((this__9820.off === this__9820.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__9820.arr,(this__9820.off + 1),this__9820.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__9821 = this;
return (this__9821.arr[(this__9821.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__9822 = this;
if((function (){var and__3937__auto____9823 = (i >= 0);
if(and__3937__auto____9823)
{return (i < (this__9822.end - this__9822.off));
} else
{return and__3937__auto____9823;
}
})())
{return (this__9822.arr[(this__9822.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9824 = this;
return (this__9824.end - this__9824.off);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__9825 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9826 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9827 = this;
return cljs.core._nth.call(null,this__9827.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9828 = this;
if((cljs.core._count.call(null,this__9828.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__9828.chunk),this__9828.more,this__9828.meta));
} else
{if((this__9828.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__9828.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9829 = this;
if((this__9829.more == null))
{return null;
} else
{return this__9829.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9830 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9831 = this;
return (new cljs.core.ChunkedCons(this__9831.chunk,this__9831.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9832 = this;
return this__9832.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9833 = this;
return this__9833.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9834 = this;
if((this__9834.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__9834.more;
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
if((function (){var G__9838__9839 = s;
if(G__9838__9839)
{if(cljs.core.truth_((function (){var or__3939__auto____9840 = null;
if(cljs.core.truth_(or__3939__auto____9840))
{return or__3939__auto____9840;
} else
{return G__9838__9839.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__9838__9839.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__9838__9839);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__9838__9839);
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
var ary__9843 = [];
var s__9844 = s;
while(true){
if(cljs.core.seq.call(null,s__9844))
{ary__9843.push(cljs.core.first.call(null,s__9844));
{
var G__9845 = cljs.core.next.call(null,s__9844);
s__9844 = G__9845;
continue;
}
} else
{return ary__9843;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__9849 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__9850 = 0;
var xs__9851 = cljs.core.seq.call(null,coll);
while(true){
if(xs__9851)
{(ret__9849[i__9850] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__9851)));
{
var G__9852 = (i__9850 + 1);
var G__9853 = cljs.core.next.call(null,xs__9851);
i__9850 = G__9852;
xs__9851 = G__9853;
continue;
}
} else
{}
break;
}
return ret__9849;
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
var a__9861 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9862 = cljs.core.seq.call(null,init_val_or_seq);
var i__9863 = 0;
var s__9864 = s__9862;
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____9865 = s__9864;
if(and__3937__auto____9865)
{return (i__9863 < size);
} else
{return and__3937__auto____9865;
}
})()))
{(a__9861[i__9863] = cljs.core.first.call(null,s__9864));
{
var G__9868 = (i__9863 + 1);
var G__9869 = cljs.core.next.call(null,s__9864);
i__9863 = G__9868;
s__9864 = G__9869;
continue;
}
} else
{return a__9861;
}
break;
}
} else
{var n__2560__auto____9866 = size;
var i__9867 = 0;
while(true){
if((i__9867 < n__2560__auto____9866))
{(a__9861[i__9867] = init_val_or_seq);
{
var G__9870 = (i__9867 + 1);
i__9867 = G__9870;
continue;
}
} else
{}
break;
}
return a__9861;
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
var a__9878 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9879 = cljs.core.seq.call(null,init_val_or_seq);
var i__9880 = 0;
var s__9881 = s__9879;
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____9882 = s__9881;
if(and__3937__auto____9882)
{return (i__9880 < size);
} else
{return and__3937__auto____9882;
}
})()))
{(a__9878[i__9880] = cljs.core.first.call(null,s__9881));
{
var G__9885 = (i__9880 + 1);
var G__9886 = cljs.core.next.call(null,s__9881);
i__9880 = G__9885;
s__9881 = G__9886;
continue;
}
} else
{return a__9878;
}
break;
}
} else
{var n__2560__auto____9883 = size;
var i__9884 = 0;
while(true){
if((i__9884 < n__2560__auto____9883))
{(a__9878[i__9884] = init_val_or_seq);
{
var G__9887 = (i__9884 + 1);
i__9884 = G__9887;
continue;
}
} else
{}
break;
}
return a__9878;
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
var a__9895 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9896 = cljs.core.seq.call(null,init_val_or_seq);
var i__9897 = 0;
var s__9898 = s__9896;
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____9899 = s__9898;
if(and__3937__auto____9899)
{return (i__9897 < size);
} else
{return and__3937__auto____9899;
}
})()))
{(a__9895[i__9897] = cljs.core.first.call(null,s__9898));
{
var G__9902 = (i__9897 + 1);
var G__9903 = cljs.core.next.call(null,s__9898);
i__9897 = G__9902;
s__9898 = G__9903;
continue;
}
} else
{return a__9895;
}
break;
}
} else
{var n__2560__auto____9900 = size;
var i__9901 = 0;
while(true){
if((i__9901 < n__2560__auto____9900))
{(a__9895[i__9901] = init_val_or_seq);
{
var G__9904 = (i__9901 + 1);
i__9901 = G__9904;
continue;
}
} else
{}
break;
}
return a__9895;
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
{var s__9909 = s;
var i__9910 = n;
var sum__9911 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____9912 = (i__9910 > 0);
if(and__3937__auto____9912)
{return cljs.core.seq.call(null,s__9909);
} else
{return and__3937__auto____9912;
}
})()))
{{
var G__9913 = cljs.core.next.call(null,s__9909);
var G__9914 = (i__9910 - 1);
var G__9915 = (sum__9911 + 1);
s__9909 = G__9913;
i__9910 = G__9914;
sum__9911 = G__9915;
continue;
}
} else
{return sum__9911;
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
var s__9920 = cljs.core.seq.call(null,x);
if(s__9920)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__9920))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__9920),concat.call(null,cljs.core.chunk_rest.call(null,s__9920),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9920),concat.call(null,cljs.core.rest.call(null,s__9920),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__9924__delegate = function (x,y,zs){
var cat__9923 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9922 = cljs.core.seq.call(null,xys);
if(xys__9922)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__9922))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__9922),cat.call(null,cljs.core.chunk_rest.call(null,xys__9922),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9922),cat.call(null,cljs.core.rest.call(null,xys__9922),zs));
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
return cat__9923.call(null,concat.call(null,x,y),zs);
};
var G__9924 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9924__delegate.call(this, x, y, zs);
};
G__9924.cljs$lang$maxFixedArity = 2;
G__9924.cljs$lang$applyTo = (function (arglist__9925){
var x = cljs.core.first(arglist__9925);
var y = cljs.core.first(cljs.core.next(arglist__9925));
var zs = cljs.core.rest(cljs.core.next(arglist__9925));
return G__9924__delegate(x, y, zs);
});
G__9924.cljs$lang$arity$variadic = G__9924__delegate;
return G__9924;
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
var G__9926__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9926 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9926__delegate.call(this, a, b, c, d, more);
};
G__9926.cljs$lang$maxFixedArity = 4;
G__9926.cljs$lang$applyTo = (function (arglist__9927){
var a = cljs.core.first(arglist__9927);
var b = cljs.core.first(cljs.core.next(arglist__9927));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9927)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9927))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9927))));
return G__9926__delegate(a, b, c, d, more);
});
G__9926.cljs$lang$arity$variadic = G__9926__delegate;
return G__9926;
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
var args__9969 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__9970 = cljs.core._first.call(null,args__9969);
var args__9971 = cljs.core._rest.call(null,args__9969);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__9970);
} else
{return f.call(null,a__9970);
}
} else
{var b__9972 = cljs.core._first.call(null,args__9971);
var args__9973 = cljs.core._rest.call(null,args__9971);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__9970,b__9972);
} else
{return f.call(null,a__9970,b__9972);
}
} else
{var c__9974 = cljs.core._first.call(null,args__9973);
var args__9975 = cljs.core._rest.call(null,args__9973);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__9970,b__9972,c__9974);
} else
{return f.call(null,a__9970,b__9972,c__9974);
}
} else
{var d__9976 = cljs.core._first.call(null,args__9975);
var args__9977 = cljs.core._rest.call(null,args__9975);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__9970,b__9972,c__9974,d__9976);
} else
{return f.call(null,a__9970,b__9972,c__9974,d__9976);
}
} else
{var e__9978 = cljs.core._first.call(null,args__9977);
var args__9979 = cljs.core._rest.call(null,args__9977);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__9970,b__9972,c__9974,d__9976,e__9978);
} else
{return f.call(null,a__9970,b__9972,c__9974,d__9976,e__9978);
}
} else
{var f__9980 = cljs.core._first.call(null,args__9979);
var args__9981 = cljs.core._rest.call(null,args__9979);
if((argc === 6))
{if(f__9980.cljs$lang$arity$6)
{return f__9980.cljs$lang$arity$6(a__9970,b__9972,c__9974,d__9976,e__9978,f__9980);
} else
{return f__9980.call(null,a__9970,b__9972,c__9974,d__9976,e__9978,f__9980);
}
} else
{var g__9982 = cljs.core._first.call(null,args__9981);
var args__9983 = cljs.core._rest.call(null,args__9981);
if((argc === 7))
{if(f__9980.cljs$lang$arity$7)
{return f__9980.cljs$lang$arity$7(a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982);
} else
{return f__9980.call(null,a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982);
}
} else
{var h__9984 = cljs.core._first.call(null,args__9983);
var args__9985 = cljs.core._rest.call(null,args__9983);
if((argc === 8))
{if(f__9980.cljs$lang$arity$8)
{return f__9980.cljs$lang$arity$8(a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984);
} else
{return f__9980.call(null,a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984);
}
} else
{var i__9986 = cljs.core._first.call(null,args__9985);
var args__9987 = cljs.core._rest.call(null,args__9985);
if((argc === 9))
{if(f__9980.cljs$lang$arity$9)
{return f__9980.cljs$lang$arity$9(a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986);
} else
{return f__9980.call(null,a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986);
}
} else
{var j__9988 = cljs.core._first.call(null,args__9987);
var args__9989 = cljs.core._rest.call(null,args__9987);
if((argc === 10))
{if(f__9980.cljs$lang$arity$10)
{return f__9980.cljs$lang$arity$10(a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988);
} else
{return f__9980.call(null,a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988);
}
} else
{var k__9990 = cljs.core._first.call(null,args__9989);
var args__9991 = cljs.core._rest.call(null,args__9989);
if((argc === 11))
{if(f__9980.cljs$lang$arity$11)
{return f__9980.cljs$lang$arity$11(a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990);
} else
{return f__9980.call(null,a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990);
}
} else
{var l__9992 = cljs.core._first.call(null,args__9991);
var args__9993 = cljs.core._rest.call(null,args__9991);
if((argc === 12))
{if(f__9980.cljs$lang$arity$12)
{return f__9980.cljs$lang$arity$12(a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990,l__9992);
} else
{return f__9980.call(null,a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990,l__9992);
}
} else
{var m__9994 = cljs.core._first.call(null,args__9993);
var args__9995 = cljs.core._rest.call(null,args__9993);
if((argc === 13))
{if(f__9980.cljs$lang$arity$13)
{return f__9980.cljs$lang$arity$13(a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990,l__9992,m__9994);
} else
{return f__9980.call(null,a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990,l__9992,m__9994);
}
} else
{var n__9996 = cljs.core._first.call(null,args__9995);
var args__9997 = cljs.core._rest.call(null,args__9995);
if((argc === 14))
{if(f__9980.cljs$lang$arity$14)
{return f__9980.cljs$lang$arity$14(a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990,l__9992,m__9994,n__9996);
} else
{return f__9980.call(null,a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990,l__9992,m__9994,n__9996);
}
} else
{var o__9998 = cljs.core._first.call(null,args__9997);
var args__9999 = cljs.core._rest.call(null,args__9997);
if((argc === 15))
{if(f__9980.cljs$lang$arity$15)
{return f__9980.cljs$lang$arity$15(a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990,l__9992,m__9994,n__9996,o__9998);
} else
{return f__9980.call(null,a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990,l__9992,m__9994,n__9996,o__9998);
}
} else
{var p__10000 = cljs.core._first.call(null,args__9999);
var args__10001 = cljs.core._rest.call(null,args__9999);
if((argc === 16))
{if(f__9980.cljs$lang$arity$16)
{return f__9980.cljs$lang$arity$16(a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990,l__9992,m__9994,n__9996,o__9998,p__10000);
} else
{return f__9980.call(null,a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990,l__9992,m__9994,n__9996,o__9998,p__10000);
}
} else
{var q__10002 = cljs.core._first.call(null,args__10001);
var args__10003 = cljs.core._rest.call(null,args__10001);
if((argc === 17))
{if(f__9980.cljs$lang$arity$17)
{return f__9980.cljs$lang$arity$17(a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990,l__9992,m__9994,n__9996,o__9998,p__10000,q__10002);
} else
{return f__9980.call(null,a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990,l__9992,m__9994,n__9996,o__9998,p__10000,q__10002);
}
} else
{var r__10004 = cljs.core._first.call(null,args__10003);
var args__10005 = cljs.core._rest.call(null,args__10003);
if((argc === 18))
{if(f__9980.cljs$lang$arity$18)
{return f__9980.cljs$lang$arity$18(a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990,l__9992,m__9994,n__9996,o__9998,p__10000,q__10002,r__10004);
} else
{return f__9980.call(null,a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990,l__9992,m__9994,n__9996,o__9998,p__10000,q__10002,r__10004);
}
} else
{var s__10006 = cljs.core._first.call(null,args__10005);
var args__10007 = cljs.core._rest.call(null,args__10005);
if((argc === 19))
{if(f__9980.cljs$lang$arity$19)
{return f__9980.cljs$lang$arity$19(a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990,l__9992,m__9994,n__9996,o__9998,p__10000,q__10002,r__10004,s__10006);
} else
{return f__9980.call(null,a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990,l__9992,m__9994,n__9996,o__9998,p__10000,q__10002,r__10004,s__10006);
}
} else
{var t__10008 = cljs.core._first.call(null,args__10007);
var args__10009 = cljs.core._rest.call(null,args__10007);
if((argc === 20))
{if(f__9980.cljs$lang$arity$20)
{return f__9980.cljs$lang$arity$20(a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990,l__9992,m__9994,n__9996,o__9998,p__10000,q__10002,r__10004,s__10006,t__10008);
} else
{return f__9980.call(null,a__9970,b__9972,c__9974,d__9976,e__9978,f__9980,g__9982,h__9984,i__9986,j__9988,k__9990,l__9992,m__9994,n__9996,o__9998,p__10000,q__10002,r__10004,s__10006,t__10008);
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
var fixed_arity__10024 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10025 = cljs.core.bounded_count.call(null,args,(fixed_arity__10024 + 1));
if((bc__10025 <= fixed_arity__10024))
{return cljs.core.apply_to.call(null,f,bc__10025,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__10026 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10027 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10028 = cljs.core.bounded_count.call(null,arglist__10026,(fixed_arity__10027 + 1));
if((bc__10028 <= fixed_arity__10027))
{return cljs.core.apply_to.call(null,f,bc__10028,arglist__10026);
} else
{return f.cljs$lang$applyTo(arglist__10026);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10026));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__10029 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10030 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10031 = cljs.core.bounded_count.call(null,arglist__10029,(fixed_arity__10030 + 1));
if((bc__10031 <= fixed_arity__10030))
{return cljs.core.apply_to.call(null,f,bc__10031,arglist__10029);
} else
{return f.cljs$lang$applyTo(arglist__10029);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10029));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__10032 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10033 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10034 = cljs.core.bounded_count.call(null,arglist__10032,(fixed_arity__10033 + 1));
if((bc__10034 <= fixed_arity__10033))
{return cljs.core.apply_to.call(null,f,bc__10034,arglist__10032);
} else
{return f.cljs$lang$applyTo(arglist__10032);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10032));
}
});
var apply__6 = (function() { 
var G__10038__delegate = function (f,a,b,c,d,args){
var arglist__10035 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10036 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10037 = cljs.core.bounded_count.call(null,arglist__10035,(fixed_arity__10036 + 1));
if((bc__10037 <= fixed_arity__10036))
{return cljs.core.apply_to.call(null,f,bc__10037,arglist__10035);
} else
{return f.cljs$lang$applyTo(arglist__10035);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10035));
}
};
var G__10038 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10038__delegate.call(this, f, a, b, c, d, args);
};
G__10038.cljs$lang$maxFixedArity = 5;
G__10038.cljs$lang$applyTo = (function (arglist__10039){
var f = cljs.core.first(arglist__10039);
var a = cljs.core.first(cljs.core.next(arglist__10039));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10039)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10039))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10039)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10039)))));
return G__10038__delegate(f, a, b, c, d, args);
});
G__10038.cljs$lang$arity$variadic = G__10038__delegate;
return G__10038;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10040){
var obj = cljs.core.first(arglist__10040);
var f = cljs.core.first(cljs.core.next(arglist__10040));
var args = cljs.core.rest(cljs.core.next(arglist__10040));
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
var G__10041__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10041 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10041__delegate.call(this, x, y, more);
};
G__10041.cljs$lang$maxFixedArity = 2;
G__10041.cljs$lang$applyTo = (function (arglist__10042){
var x = cljs.core.first(arglist__10042);
var y = cljs.core.first(cljs.core.next(arglist__10042));
var more = cljs.core.rest(cljs.core.next(arglist__10042));
return G__10041__delegate(x, y, more);
});
G__10041.cljs$lang$arity$variadic = G__10041__delegate;
return G__10041;
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
var G__10043 = pred;
var G__10044 = cljs.core.next.call(null,coll);
pred = G__10043;
coll = G__10044;
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
{var or__3939__auto____10046 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3939__auto____10046))
{return or__3939__auto____10046;
} else
{{
var G__10047 = pred;
var G__10048 = cljs.core.next.call(null,coll);
pred = G__10047;
coll = G__10048;
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
var G__10049 = null;
var G__10049__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10049__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10049__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10049__3 = (function() { 
var G__10050__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10050 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10050__delegate.call(this, x, y, zs);
};
G__10050.cljs$lang$maxFixedArity = 2;
G__10050.cljs$lang$applyTo = (function (arglist__10051){
var x = cljs.core.first(arglist__10051);
var y = cljs.core.first(cljs.core.next(arglist__10051));
var zs = cljs.core.rest(cljs.core.next(arglist__10051));
return G__10050__delegate(x, y, zs);
});
G__10050.cljs$lang$arity$variadic = G__10050__delegate;
return G__10050;
})()
;
G__10049 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__10049__0.call(this);
case 1:
return G__10049__1.call(this,x);
case 2:
return G__10049__2.call(this,x,y);
default:
return G__10049__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__10049.cljs$lang$maxFixedArity = 2;
G__10049.cljs$lang$applyTo = G__10049__3.cljs$lang$applyTo;
return G__10049;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10052__delegate = function (args){
return x;
};
var G__10052 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10052__delegate.call(this, args);
};
G__10052.cljs$lang$maxFixedArity = 0;
G__10052.cljs$lang$applyTo = (function (arglist__10053){
var args = cljs.core.seq(arglist__10053);;
return G__10052__delegate(args);
});
G__10052.cljs$lang$arity$variadic = G__10052__delegate;
return G__10052;
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
var G__10060 = null;
var G__10060__0 = (function (){
return f.call(null,g.call(null));
});
var G__10060__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10060__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10060__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10060__4 = (function() { 
var G__10061__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10061 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10061__delegate.call(this, x, y, z, args);
};
G__10061.cljs$lang$maxFixedArity = 3;
G__10061.cljs$lang$applyTo = (function (arglist__10062){
var x = cljs.core.first(arglist__10062);
var y = cljs.core.first(cljs.core.next(arglist__10062));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10062)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10062)));
return G__10061__delegate(x, y, z, args);
});
G__10061.cljs$lang$arity$variadic = G__10061__delegate;
return G__10061;
})()
;
G__10060 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10060__0.call(this);
case 1:
return G__10060__1.call(this,x);
case 2:
return G__10060__2.call(this,x,y);
case 3:
return G__10060__3.call(this,x,y,z);
default:
return G__10060__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10060.cljs$lang$maxFixedArity = 3;
G__10060.cljs$lang$applyTo = G__10060__4.cljs$lang$applyTo;
return G__10060;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__10063 = null;
var G__10063__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10063__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10063__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10063__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10063__4 = (function() { 
var G__10064__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10064 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10064__delegate.call(this, x, y, z, args);
};
G__10064.cljs$lang$maxFixedArity = 3;
G__10064.cljs$lang$applyTo = (function (arglist__10065){
var x = cljs.core.first(arglist__10065);
var y = cljs.core.first(cljs.core.next(arglist__10065));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10065)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10065)));
return G__10064__delegate(x, y, z, args);
});
G__10064.cljs$lang$arity$variadic = G__10064__delegate;
return G__10064;
})()
;
G__10063 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10063__0.call(this);
case 1:
return G__10063__1.call(this,x);
case 2:
return G__10063__2.call(this,x,y);
case 3:
return G__10063__3.call(this,x,y,z);
default:
return G__10063__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10063.cljs$lang$maxFixedArity = 3;
G__10063.cljs$lang$applyTo = G__10063__4.cljs$lang$applyTo;
return G__10063;
})()
});
var comp__4 = (function() { 
var G__10066__delegate = function (f1,f2,f3,fs){
var fs__10057 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__10067__delegate = function (args){
var ret__10058 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10057),args);
var fs__10059 = cljs.core.next.call(null,fs__10057);
while(true){
if(fs__10059)
{{
var G__10068 = cljs.core.first.call(null,fs__10059).call(null,ret__10058);
var G__10069 = cljs.core.next.call(null,fs__10059);
ret__10058 = G__10068;
fs__10059 = G__10069;
continue;
}
} else
{return ret__10058;
}
break;
}
};
var G__10067 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10067__delegate.call(this, args);
};
G__10067.cljs$lang$maxFixedArity = 0;
G__10067.cljs$lang$applyTo = (function (arglist__10070){
var args = cljs.core.seq(arglist__10070);;
return G__10067__delegate(args);
});
G__10067.cljs$lang$arity$variadic = G__10067__delegate;
return G__10067;
})()
;
};
var G__10066 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10066__delegate.call(this, f1, f2, f3, fs);
};
G__10066.cljs$lang$maxFixedArity = 3;
G__10066.cljs$lang$applyTo = (function (arglist__10071){
var f1 = cljs.core.first(arglist__10071);
var f2 = cljs.core.first(cljs.core.next(arglist__10071));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10071)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10071)));
return G__10066__delegate(f1, f2, f3, fs);
});
G__10066.cljs$lang$arity$variadic = G__10066__delegate;
return G__10066;
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
var G__10072__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10072 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10072__delegate.call(this, args);
};
G__10072.cljs$lang$maxFixedArity = 0;
G__10072.cljs$lang$applyTo = (function (arglist__10073){
var args = cljs.core.seq(arglist__10073);;
return G__10072__delegate(args);
});
G__10072.cljs$lang$arity$variadic = G__10072__delegate;
return G__10072;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__10074__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10074 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10074__delegate.call(this, args);
};
G__10074.cljs$lang$maxFixedArity = 0;
G__10074.cljs$lang$applyTo = (function (arglist__10075){
var args = cljs.core.seq(arglist__10075);;
return G__10074__delegate(args);
});
G__10074.cljs$lang$arity$variadic = G__10074__delegate;
return G__10074;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10076__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10076 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10076__delegate.call(this, args);
};
G__10076.cljs$lang$maxFixedArity = 0;
G__10076.cljs$lang$applyTo = (function (arglist__10077){
var args = cljs.core.seq(arglist__10077);;
return G__10076__delegate(args);
});
G__10076.cljs$lang$arity$variadic = G__10076__delegate;
return G__10076;
})()
;
});
var partial__5 = (function() { 
var G__10078__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10079__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10079 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10079__delegate.call(this, args);
};
G__10079.cljs$lang$maxFixedArity = 0;
G__10079.cljs$lang$applyTo = (function (arglist__10080){
var args = cljs.core.seq(arglist__10080);;
return G__10079__delegate(args);
});
G__10079.cljs$lang$arity$variadic = G__10079__delegate;
return G__10079;
})()
;
};
var G__10078 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10078__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10078.cljs$lang$maxFixedArity = 4;
G__10078.cljs$lang$applyTo = (function (arglist__10081){
var f = cljs.core.first(arglist__10081);
var arg1 = cljs.core.first(cljs.core.next(arglist__10081));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10081)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10081))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10081))));
return G__10078__delegate(f, arg1, arg2, arg3, more);
});
G__10078.cljs$lang$arity$variadic = G__10078__delegate;
return G__10078;
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
var G__10082 = null;
var G__10082__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__10082__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__10082__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__10082__4 = (function() { 
var G__10083__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__10083 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10083__delegate.call(this, a, b, c, ds);
};
G__10083.cljs$lang$maxFixedArity = 3;
G__10083.cljs$lang$applyTo = (function (arglist__10084){
var a = cljs.core.first(arglist__10084);
var b = cljs.core.first(cljs.core.next(arglist__10084));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10084)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10084)));
return G__10083__delegate(a, b, c, ds);
});
G__10083.cljs$lang$arity$variadic = G__10083__delegate;
return G__10083;
})()
;
G__10082 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__10082__1.call(this,a);
case 2:
return G__10082__2.call(this,a,b);
case 3:
return G__10082__3.call(this,a,b,c);
default:
return G__10082__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10082.cljs$lang$maxFixedArity = 3;
G__10082.cljs$lang$applyTo = G__10082__4.cljs$lang$applyTo;
return G__10082;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__10085 = null;
var G__10085__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__10085__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__10085__4 = (function() { 
var G__10086__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__10086 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10086__delegate.call(this, a, b, c, ds);
};
G__10086.cljs$lang$maxFixedArity = 3;
G__10086.cljs$lang$applyTo = (function (arglist__10087){
var a = cljs.core.first(arglist__10087);
var b = cljs.core.first(cljs.core.next(arglist__10087));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10087)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10087)));
return G__10086__delegate(a, b, c, ds);
});
G__10086.cljs$lang$arity$variadic = G__10086__delegate;
return G__10086;
})()
;
G__10085 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__10085__2.call(this,a,b);
case 3:
return G__10085__3.call(this,a,b,c);
default:
return G__10085__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10085.cljs$lang$maxFixedArity = 3;
G__10085.cljs$lang$applyTo = G__10085__4.cljs$lang$applyTo;
return G__10085;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__10088 = null;
var G__10088__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__10088__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__10088__4 = (function() { 
var G__10089__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__10089 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10089__delegate.call(this, a, b, c, ds);
};
G__10089.cljs$lang$maxFixedArity = 3;
G__10089.cljs$lang$applyTo = (function (arglist__10090){
var a = cljs.core.first(arglist__10090);
var b = cljs.core.first(cljs.core.next(arglist__10090));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10090)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10090)));
return G__10089__delegate(a, b, c, ds);
});
G__10089.cljs$lang$arity$variadic = G__10089__delegate;
return G__10089;
})()
;
G__10088 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__10088__2.call(this,a,b);
case 3:
return G__10088__3.call(this,a,b,c);
default:
return G__10088__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10088.cljs$lang$maxFixedArity = 3;
G__10088.cljs$lang$applyTo = G__10088__4.cljs$lang$applyTo;
return G__10088;
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
var mapi__10106 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____10114 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10114)
{var s__10115 = temp__4088__auto____10114;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10115))
{var c__10116 = cljs.core.chunk_first.call(null,s__10115);
var size__10117 = cljs.core.count.call(null,c__10116);
var b__10118 = cljs.core.chunk_buffer.call(null,size__10117);
var n__2560__auto____10119 = size__10117;
var i__10120 = 0;
while(true){
if((i__10120 < n__2560__auto____10119))
{cljs.core.chunk_append.call(null,b__10118,f.call(null,(idx + i__10120),cljs.core._nth.call(null,c__10116,i__10120)));
{
var G__10121 = (i__10120 + 1);
i__10120 = G__10121;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10118),mapi.call(null,(idx + size__10117),cljs.core.chunk_rest.call(null,s__10115)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10115)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__10115)));
}
} else
{return null;
}
}),null));
});
return mapi__10106.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____10131 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10131)
{var s__10132 = temp__4088__auto____10131;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10132))
{var c__10133 = cljs.core.chunk_first.call(null,s__10132);
var size__10134 = cljs.core.count.call(null,c__10133);
var b__10135 = cljs.core.chunk_buffer.call(null,size__10134);
var n__2560__auto____10136 = size__10134;
var i__10137 = 0;
while(true){
if((i__10137 < n__2560__auto____10136))
{var x__10138 = f.call(null,cljs.core._nth.call(null,c__10133,i__10137));
if((x__10138 == null))
{} else
{cljs.core.chunk_append.call(null,b__10135,x__10138);
}
{
var G__10140 = (i__10137 + 1);
i__10137 = G__10140;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10135),keep.call(null,f,cljs.core.chunk_rest.call(null,s__10132)));
} else
{var x__10139 = f.call(null,cljs.core.first.call(null,s__10132));
if((x__10139 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__10132));
} else
{return cljs.core.cons.call(null,x__10139,keep.call(null,f,cljs.core.rest.call(null,s__10132)));
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
var keepi__10166 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____10176 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10176)
{var s__10177 = temp__4088__auto____10176;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10177))
{var c__10178 = cljs.core.chunk_first.call(null,s__10177);
var size__10179 = cljs.core.count.call(null,c__10178);
var b__10180 = cljs.core.chunk_buffer.call(null,size__10179);
var n__2560__auto____10181 = size__10179;
var i__10182 = 0;
while(true){
if((i__10182 < n__2560__auto____10181))
{var x__10183 = f.call(null,(idx + i__10182),cljs.core._nth.call(null,c__10178,i__10182));
if((x__10183 == null))
{} else
{cljs.core.chunk_append.call(null,b__10180,x__10183);
}
{
var G__10185 = (i__10182 + 1);
i__10182 = G__10185;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10180),keepi.call(null,(idx + size__10179),cljs.core.chunk_rest.call(null,s__10177)));
} else
{var x__10184 = f.call(null,idx,cljs.core.first.call(null,s__10177));
if((x__10184 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__10177));
} else
{return cljs.core.cons.call(null,x__10184,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__10177)));
}
}
} else
{return null;
}
}),null));
});
return keepi__10166.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10271 = p.call(null,x);
if(cljs.core.truth_(and__3937__auto____10271))
{return p.call(null,y);
} else
{return and__3937__auto____10271;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10272 = p.call(null,x);
if(cljs.core.truth_(and__3937__auto____10272))
{var and__3937__auto____10273 = p.call(null,y);
if(cljs.core.truth_(and__3937__auto____10273))
{return p.call(null,z);
} else
{return and__3937__auto____10273;
}
} else
{return and__3937__auto____10272;
}
})());
});
var ep1__4 = (function() { 
var G__10342__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10274 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3937__auto____10274))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3937__auto____10274;
}
})());
};
var G__10342 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10342__delegate.call(this, x, y, z, args);
};
G__10342.cljs$lang$maxFixedArity = 3;
G__10342.cljs$lang$applyTo = (function (arglist__10343){
var x = cljs.core.first(arglist__10343);
var y = cljs.core.first(cljs.core.next(arglist__10343));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10343)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10343)));
return G__10342__delegate(x, y, z, args);
});
G__10342.cljs$lang$arity$variadic = G__10342__delegate;
return G__10342;
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
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10286 = p1.call(null,x);
if(cljs.core.truth_(and__3937__auto____10286))
{return p2.call(null,x);
} else
{return and__3937__auto____10286;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10287 = p1.call(null,x);
if(cljs.core.truth_(and__3937__auto____10287))
{var and__3937__auto____10288 = p1.call(null,y);
if(cljs.core.truth_(and__3937__auto____10288))
{var and__3937__auto____10289 = p2.call(null,x);
if(cljs.core.truth_(and__3937__auto____10289))
{return p2.call(null,y);
} else
{return and__3937__auto____10289;
}
} else
{return and__3937__auto____10288;
}
} else
{return and__3937__auto____10287;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10290 = p1.call(null,x);
if(cljs.core.truth_(and__3937__auto____10290))
{var and__3937__auto____10291 = p1.call(null,y);
if(cljs.core.truth_(and__3937__auto____10291))
{var and__3937__auto____10292 = p1.call(null,z);
if(cljs.core.truth_(and__3937__auto____10292))
{var and__3937__auto____10293 = p2.call(null,x);
if(cljs.core.truth_(and__3937__auto____10293))
{var and__3937__auto____10294 = p2.call(null,y);
if(cljs.core.truth_(and__3937__auto____10294))
{return p2.call(null,z);
} else
{return and__3937__auto____10294;
}
} else
{return and__3937__auto____10293;
}
} else
{return and__3937__auto____10292;
}
} else
{return and__3937__auto____10291;
}
} else
{return and__3937__auto____10290;
}
})());
});
var ep2__4 = (function() { 
var G__10344__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10295 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3937__auto____10295))
{return cljs.core.every_QMARK_.call(null,(function (p1__10141_SHARP_){
var and__3937__auto____10296 = p1.call(null,p1__10141_SHARP_);
if(cljs.core.truth_(and__3937__auto____10296))
{return p2.call(null,p1__10141_SHARP_);
} else
{return and__3937__auto____10296;
}
}),args);
} else
{return and__3937__auto____10295;
}
})());
};
var G__10344 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10344__delegate.call(this, x, y, z, args);
};
G__10344.cljs$lang$maxFixedArity = 3;
G__10344.cljs$lang$applyTo = (function (arglist__10345){
var x = cljs.core.first(arglist__10345);
var y = cljs.core.first(cljs.core.next(arglist__10345));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10345)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10345)));
return G__10344__delegate(x, y, z, args);
});
G__10344.cljs$lang$arity$variadic = G__10344__delegate;
return G__10344;
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
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10315 = p1.call(null,x);
if(cljs.core.truth_(and__3937__auto____10315))
{var and__3937__auto____10316 = p2.call(null,x);
if(cljs.core.truth_(and__3937__auto____10316))
{return p3.call(null,x);
} else
{return and__3937__auto____10316;
}
} else
{return and__3937__auto____10315;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10317 = p1.call(null,x);
if(cljs.core.truth_(and__3937__auto____10317))
{var and__3937__auto____10318 = p2.call(null,x);
if(cljs.core.truth_(and__3937__auto____10318))
{var and__3937__auto____10319 = p3.call(null,x);
if(cljs.core.truth_(and__3937__auto____10319))
{var and__3937__auto____10320 = p1.call(null,y);
if(cljs.core.truth_(and__3937__auto____10320))
{var and__3937__auto____10321 = p2.call(null,y);
if(cljs.core.truth_(and__3937__auto____10321))
{return p3.call(null,y);
} else
{return and__3937__auto____10321;
}
} else
{return and__3937__auto____10320;
}
} else
{return and__3937__auto____10319;
}
} else
{return and__3937__auto____10318;
}
} else
{return and__3937__auto____10317;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10322 = p1.call(null,x);
if(cljs.core.truth_(and__3937__auto____10322))
{var and__3937__auto____10323 = p2.call(null,x);
if(cljs.core.truth_(and__3937__auto____10323))
{var and__3937__auto____10324 = p3.call(null,x);
if(cljs.core.truth_(and__3937__auto____10324))
{var and__3937__auto____10325 = p1.call(null,y);
if(cljs.core.truth_(and__3937__auto____10325))
{var and__3937__auto____10326 = p2.call(null,y);
if(cljs.core.truth_(and__3937__auto____10326))
{var and__3937__auto____10327 = p3.call(null,y);
if(cljs.core.truth_(and__3937__auto____10327))
{var and__3937__auto____10328 = p1.call(null,z);
if(cljs.core.truth_(and__3937__auto____10328))
{var and__3937__auto____10329 = p2.call(null,z);
if(cljs.core.truth_(and__3937__auto____10329))
{return p3.call(null,z);
} else
{return and__3937__auto____10329;
}
} else
{return and__3937__auto____10328;
}
} else
{return and__3937__auto____10327;
}
} else
{return and__3937__auto____10326;
}
} else
{return and__3937__auto____10325;
}
} else
{return and__3937__auto____10324;
}
} else
{return and__3937__auto____10323;
}
} else
{return and__3937__auto____10322;
}
})());
});
var ep3__4 = (function() { 
var G__10346__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10330 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3937__auto____10330))
{return cljs.core.every_QMARK_.call(null,(function (p1__10142_SHARP_){
var and__3937__auto____10331 = p1.call(null,p1__10142_SHARP_);
if(cljs.core.truth_(and__3937__auto____10331))
{var and__3937__auto____10332 = p2.call(null,p1__10142_SHARP_);
if(cljs.core.truth_(and__3937__auto____10332))
{return p3.call(null,p1__10142_SHARP_);
} else
{return and__3937__auto____10332;
}
} else
{return and__3937__auto____10331;
}
}),args);
} else
{return and__3937__auto____10330;
}
})());
};
var G__10346 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10346__delegate.call(this, x, y, z, args);
};
G__10346.cljs$lang$maxFixedArity = 3;
G__10346.cljs$lang$applyTo = (function (arglist__10347){
var x = cljs.core.first(arglist__10347);
var y = cljs.core.first(cljs.core.next(arglist__10347));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10347)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10347)));
return G__10346__delegate(x, y, z, args);
});
G__10346.cljs$lang$arity$variadic = G__10346__delegate;
return G__10346;
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
var G__10348__delegate = function (p1,p2,p3,ps){
var ps__10333 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10143_SHARP_){
return p1__10143_SHARP_.call(null,x);
}),ps__10333);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10144_SHARP_){
var and__3937__auto____10338 = p1__10144_SHARP_.call(null,x);
if(cljs.core.truth_(and__3937__auto____10338))
{return p1__10144_SHARP_.call(null,y);
} else
{return and__3937__auto____10338;
}
}),ps__10333);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10145_SHARP_){
var and__3937__auto____10339 = p1__10145_SHARP_.call(null,x);
if(cljs.core.truth_(and__3937__auto____10339))
{var and__3937__auto____10340 = p1__10145_SHARP_.call(null,y);
if(cljs.core.truth_(and__3937__auto____10340))
{return p1__10145_SHARP_.call(null,z);
} else
{return and__3937__auto____10340;
}
} else
{return and__3937__auto____10339;
}
}),ps__10333);
});
var epn__4 = (function() { 
var G__10349__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10341 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3937__auto____10341))
{return cljs.core.every_QMARK_.call(null,(function (p1__10146_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10146_SHARP_,args);
}),ps__10333);
} else
{return and__3937__auto____10341;
}
})());
};
var G__10349 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10349__delegate.call(this, x, y, z, args);
};
G__10349.cljs$lang$maxFixedArity = 3;
G__10349.cljs$lang$applyTo = (function (arglist__10350){
var x = cljs.core.first(arglist__10350);
var y = cljs.core.first(cljs.core.next(arglist__10350));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10350)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10350)));
return G__10349__delegate(x, y, z, args);
});
G__10349.cljs$lang$arity$variadic = G__10349__delegate;
return G__10349;
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
var G__10348 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10348__delegate.call(this, p1, p2, p3, ps);
};
G__10348.cljs$lang$maxFixedArity = 3;
G__10348.cljs$lang$applyTo = (function (arglist__10351){
var p1 = cljs.core.first(arglist__10351);
var p2 = cljs.core.first(cljs.core.next(arglist__10351));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10351)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10351)));
return G__10348__delegate(p1, p2, p3, ps);
});
G__10348.cljs$lang$arity$variadic = G__10348__delegate;
return G__10348;
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
var or__3939__auto____10432 = p.call(null,x);
if(cljs.core.truth_(or__3939__auto____10432))
{return or__3939__auto____10432;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3939__auto____10433 = p.call(null,x);
if(cljs.core.truth_(or__3939__auto____10433))
{return or__3939__auto____10433;
} else
{var or__3939__auto____10434 = p.call(null,y);
if(cljs.core.truth_(or__3939__auto____10434))
{return or__3939__auto____10434;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__10503__delegate = function (x,y,z,args){
var or__3939__auto____10435 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3939__auto____10435))
{return or__3939__auto____10435;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__10503 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10503__delegate.call(this, x, y, z, args);
};
G__10503.cljs$lang$maxFixedArity = 3;
G__10503.cljs$lang$applyTo = (function (arglist__10504){
var x = cljs.core.first(arglist__10504);
var y = cljs.core.first(cljs.core.next(arglist__10504));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10504)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10504)));
return G__10503__delegate(x, y, z, args);
});
G__10503.cljs$lang$arity$variadic = G__10503__delegate;
return G__10503;
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
var or__3939__auto____10447 = p1.call(null,x);
if(cljs.core.truth_(or__3939__auto____10447))
{return or__3939__auto____10447;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3939__auto____10448 = p1.call(null,x);
if(cljs.core.truth_(or__3939__auto____10448))
{return or__3939__auto____10448;
} else
{var or__3939__auto____10449 = p1.call(null,y);
if(cljs.core.truth_(or__3939__auto____10449))
{return or__3939__auto____10449;
} else
{var or__3939__auto____10450 = p2.call(null,x);
if(cljs.core.truth_(or__3939__auto____10450))
{return or__3939__auto____10450;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3939__auto____10451 = p1.call(null,x);
if(cljs.core.truth_(or__3939__auto____10451))
{return or__3939__auto____10451;
} else
{var or__3939__auto____10452 = p1.call(null,y);
if(cljs.core.truth_(or__3939__auto____10452))
{return or__3939__auto____10452;
} else
{var or__3939__auto____10453 = p1.call(null,z);
if(cljs.core.truth_(or__3939__auto____10453))
{return or__3939__auto____10453;
} else
{var or__3939__auto____10454 = p2.call(null,x);
if(cljs.core.truth_(or__3939__auto____10454))
{return or__3939__auto____10454;
} else
{var or__3939__auto____10455 = p2.call(null,y);
if(cljs.core.truth_(or__3939__auto____10455))
{return or__3939__auto____10455;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__10505__delegate = function (x,y,z,args){
var or__3939__auto____10456 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3939__auto____10456))
{return or__3939__auto____10456;
} else
{return cljs.core.some.call(null,(function (p1__10186_SHARP_){
var or__3939__auto____10457 = p1.call(null,p1__10186_SHARP_);
if(cljs.core.truth_(or__3939__auto____10457))
{return or__3939__auto____10457;
} else
{return p2.call(null,p1__10186_SHARP_);
}
}),args);
}
};
var G__10505 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10505__delegate.call(this, x, y, z, args);
};
G__10505.cljs$lang$maxFixedArity = 3;
G__10505.cljs$lang$applyTo = (function (arglist__10506){
var x = cljs.core.first(arglist__10506);
var y = cljs.core.first(cljs.core.next(arglist__10506));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10506)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10506)));
return G__10505__delegate(x, y, z, args);
});
G__10505.cljs$lang$arity$variadic = G__10505__delegate;
return G__10505;
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
var or__3939__auto____10476 = p1.call(null,x);
if(cljs.core.truth_(or__3939__auto____10476))
{return or__3939__auto____10476;
} else
{var or__3939__auto____10477 = p2.call(null,x);
if(cljs.core.truth_(or__3939__auto____10477))
{return or__3939__auto____10477;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3939__auto____10478 = p1.call(null,x);
if(cljs.core.truth_(or__3939__auto____10478))
{return or__3939__auto____10478;
} else
{var or__3939__auto____10479 = p2.call(null,x);
if(cljs.core.truth_(or__3939__auto____10479))
{return or__3939__auto____10479;
} else
{var or__3939__auto____10480 = p3.call(null,x);
if(cljs.core.truth_(or__3939__auto____10480))
{return or__3939__auto____10480;
} else
{var or__3939__auto____10481 = p1.call(null,y);
if(cljs.core.truth_(or__3939__auto____10481))
{return or__3939__auto____10481;
} else
{var or__3939__auto____10482 = p2.call(null,y);
if(cljs.core.truth_(or__3939__auto____10482))
{return or__3939__auto____10482;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3939__auto____10483 = p1.call(null,x);
if(cljs.core.truth_(or__3939__auto____10483))
{return or__3939__auto____10483;
} else
{var or__3939__auto____10484 = p2.call(null,x);
if(cljs.core.truth_(or__3939__auto____10484))
{return or__3939__auto____10484;
} else
{var or__3939__auto____10485 = p3.call(null,x);
if(cljs.core.truth_(or__3939__auto____10485))
{return or__3939__auto____10485;
} else
{var or__3939__auto____10486 = p1.call(null,y);
if(cljs.core.truth_(or__3939__auto____10486))
{return or__3939__auto____10486;
} else
{var or__3939__auto____10487 = p2.call(null,y);
if(cljs.core.truth_(or__3939__auto____10487))
{return or__3939__auto____10487;
} else
{var or__3939__auto____10488 = p3.call(null,y);
if(cljs.core.truth_(or__3939__auto____10488))
{return or__3939__auto____10488;
} else
{var or__3939__auto____10489 = p1.call(null,z);
if(cljs.core.truth_(or__3939__auto____10489))
{return or__3939__auto____10489;
} else
{var or__3939__auto____10490 = p2.call(null,z);
if(cljs.core.truth_(or__3939__auto____10490))
{return or__3939__auto____10490;
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
var G__10507__delegate = function (x,y,z,args){
var or__3939__auto____10491 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3939__auto____10491))
{return or__3939__auto____10491;
} else
{return cljs.core.some.call(null,(function (p1__10187_SHARP_){
var or__3939__auto____10492 = p1.call(null,p1__10187_SHARP_);
if(cljs.core.truth_(or__3939__auto____10492))
{return or__3939__auto____10492;
} else
{var or__3939__auto____10493 = p2.call(null,p1__10187_SHARP_);
if(cljs.core.truth_(or__3939__auto____10493))
{return or__3939__auto____10493;
} else
{return p3.call(null,p1__10187_SHARP_);
}
}
}),args);
}
};
var G__10507 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10507__delegate.call(this, x, y, z, args);
};
G__10507.cljs$lang$maxFixedArity = 3;
G__10507.cljs$lang$applyTo = (function (arglist__10508){
var x = cljs.core.first(arglist__10508);
var y = cljs.core.first(cljs.core.next(arglist__10508));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10508)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10508)));
return G__10507__delegate(x, y, z, args);
});
G__10507.cljs$lang$arity$variadic = G__10507__delegate;
return G__10507;
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
var G__10509__delegate = function (p1,p2,p3,ps){
var ps__10494 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__10188_SHARP_){
return p1__10188_SHARP_.call(null,x);
}),ps__10494);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10189_SHARP_){
var or__3939__auto____10499 = p1__10189_SHARP_.call(null,x);
if(cljs.core.truth_(or__3939__auto____10499))
{return or__3939__auto____10499;
} else
{return p1__10189_SHARP_.call(null,y);
}
}),ps__10494);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10190_SHARP_){
var or__3939__auto____10500 = p1__10190_SHARP_.call(null,x);
if(cljs.core.truth_(or__3939__auto____10500))
{return or__3939__auto____10500;
} else
{var or__3939__auto____10501 = p1__10190_SHARP_.call(null,y);
if(cljs.core.truth_(or__3939__auto____10501))
{return or__3939__auto____10501;
} else
{return p1__10190_SHARP_.call(null,z);
}
}
}),ps__10494);
});
var spn__4 = (function() { 
var G__10510__delegate = function (x,y,z,args){
var or__3939__auto____10502 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3939__auto____10502))
{return or__3939__auto____10502;
} else
{return cljs.core.some.call(null,(function (p1__10191_SHARP_){
return cljs.core.some.call(null,p1__10191_SHARP_,args);
}),ps__10494);
}
};
var G__10510 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10510__delegate.call(this, x, y, z, args);
};
G__10510.cljs$lang$maxFixedArity = 3;
G__10510.cljs$lang$applyTo = (function (arglist__10511){
var x = cljs.core.first(arglist__10511);
var y = cljs.core.first(cljs.core.next(arglist__10511));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10511)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10511)));
return G__10510__delegate(x, y, z, args);
});
G__10510.cljs$lang$arity$variadic = G__10510__delegate;
return G__10510;
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
var G__10509 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10509__delegate.call(this, p1, p2, p3, ps);
};
G__10509.cljs$lang$maxFixedArity = 3;
G__10509.cljs$lang$applyTo = (function (arglist__10512){
var p1 = cljs.core.first(arglist__10512);
var p2 = cljs.core.first(cljs.core.next(arglist__10512));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10512)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10512)));
return G__10509__delegate(p1, p2, p3, ps);
});
G__10509.cljs$lang$arity$variadic = G__10509__delegate;
return G__10509;
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
var temp__4088__auto____10531 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10531)
{var s__10532 = temp__4088__auto____10531;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10532))
{var c__10533 = cljs.core.chunk_first.call(null,s__10532);
var size__10534 = cljs.core.count.call(null,c__10533);
var b__10535 = cljs.core.chunk_buffer.call(null,size__10534);
var n__2560__auto____10536 = size__10534;
var i__10537 = 0;
while(true){
if((i__10537 < n__2560__auto____10536))
{cljs.core.chunk_append.call(null,b__10535,f.call(null,cljs.core._nth.call(null,c__10533,i__10537)));
{
var G__10549 = (i__10537 + 1);
i__10537 = G__10549;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10535),map.call(null,f,cljs.core.chunk_rest.call(null,s__10532)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__10532)),map.call(null,f,cljs.core.rest.call(null,s__10532)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10538 = cljs.core.seq.call(null,c1);
var s2__10539 = cljs.core.seq.call(null,c2);
if((function (){var and__3937__auto____10540 = s1__10538;
if(and__3937__auto____10540)
{return s2__10539;
} else
{return and__3937__auto____10540;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10538),cljs.core.first.call(null,s2__10539)),map.call(null,f,cljs.core.rest.call(null,s1__10538),cljs.core.rest.call(null,s2__10539)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10541 = cljs.core.seq.call(null,c1);
var s2__10542 = cljs.core.seq.call(null,c2);
var s3__10543 = cljs.core.seq.call(null,c3);
if((function (){var and__3937__auto____10544 = s1__10541;
if(and__3937__auto____10544)
{var and__3937__auto____10545 = s2__10542;
if(and__3937__auto____10545)
{return s3__10543;
} else
{return and__3937__auto____10545;
}
} else
{return and__3937__auto____10544;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10541),cljs.core.first.call(null,s2__10542),cljs.core.first.call(null,s3__10543)),map.call(null,f,cljs.core.rest.call(null,s1__10541),cljs.core.rest.call(null,s2__10542),cljs.core.rest.call(null,s3__10543)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__10550__delegate = function (f,c1,c2,c3,colls){
var step__10548 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10547 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10547))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__10547),step.call(null,map.call(null,cljs.core.rest,ss__10547)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__10352_SHARP_){
return cljs.core.apply.call(null,f,p1__10352_SHARP_);
}),step__10548.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__10550 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10550__delegate.call(this, f, c1, c2, c3, colls);
};
G__10550.cljs$lang$maxFixedArity = 4;
G__10550.cljs$lang$applyTo = (function (arglist__10551){
var f = cljs.core.first(arglist__10551);
var c1 = cljs.core.first(cljs.core.next(arglist__10551));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10551)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10551))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10551))));
return G__10550__delegate(f, c1, c2, c3, colls);
});
G__10550.cljs$lang$arity$variadic = G__10550__delegate;
return G__10550;
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
{var temp__4088__auto____10554 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10554)
{var s__10555 = temp__4088__auto____10554;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__10555),take.call(null,(n - 1),cljs.core.rest.call(null,s__10555)));
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
var step__10561 = (function (n,coll){
while(true){
var s__10559 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3937__auto____10560 = (n > 0);
if(and__3937__auto____10560)
{return s__10559;
} else
{return and__3937__auto____10560;
}
})()))
{{
var G__10562 = (n - 1);
var G__10563 = cljs.core.rest.call(null,s__10559);
n = G__10562;
coll = G__10563;
continue;
}
} else
{return s__10559;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__10561.call(null,n,coll);
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
var s__10566 = cljs.core.seq.call(null,coll);
var lead__10567 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__10567)
{{
var G__10568 = cljs.core.next.call(null,s__10566);
var G__10569 = cljs.core.next.call(null,lead__10567);
s__10566 = G__10568;
lead__10567 = G__10569;
continue;
}
} else
{return s__10566;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__10575 = (function (pred,coll){
while(true){
var s__10573 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3937__auto____10574 = s__10573;
if(and__3937__auto____10574)
{return pred.call(null,cljs.core.first.call(null,s__10573));
} else
{return and__3937__auto____10574;
}
})()))
{{
var G__10576 = pred;
var G__10577 = cljs.core.rest.call(null,s__10573);
pred = G__10576;
coll = G__10577;
continue;
}
} else
{return s__10573;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__10575.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____10580 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10580)
{var s__10581 = temp__4088__auto____10580;
return cljs.core.concat.call(null,s__10581,cycle.call(null,s__10581));
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
var s1__10586 = cljs.core.seq.call(null,c1);
var s2__10587 = cljs.core.seq.call(null,c2);
if((function (){var and__3937__auto____10588 = s1__10586;
if(and__3937__auto____10588)
{return s2__10587;
} else
{return and__3937__auto____10588;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__10586),cljs.core.cons.call(null,cljs.core.first.call(null,s2__10587),interleave.call(null,cljs.core.rest.call(null,s1__10586),cljs.core.rest.call(null,s2__10587))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__10590__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10589 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10589))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__10589),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__10589)));
} else
{return null;
}
}),null));
};
var G__10590 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10590__delegate.call(this, c1, c2, colls);
};
G__10590.cljs$lang$maxFixedArity = 2;
G__10590.cljs$lang$applyTo = (function (arglist__10591){
var c1 = cljs.core.first(arglist__10591);
var c2 = cljs.core.first(cljs.core.next(arglist__10591));
var colls = cljs.core.rest(cljs.core.next(arglist__10591));
return G__10590__delegate(c1, c2, colls);
});
G__10590.cljs$lang$arity$variadic = G__10590__delegate;
return G__10590;
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
var cat__10601 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4086__auto____10599 = cljs.core.seq.call(null,coll);
if(temp__4086__auto____10599)
{var coll__10600 = temp__4086__auto____10599;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__10600),cat.call(null,cljs.core.rest.call(null,coll__10600),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__10601.call(null,null,colls);
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
var G__10602__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__10602 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10602__delegate.call(this, f, coll, colls);
};
G__10602.cljs$lang$maxFixedArity = 2;
G__10602.cljs$lang$applyTo = (function (arglist__10603){
var f = cljs.core.first(arglist__10603);
var coll = cljs.core.first(cljs.core.next(arglist__10603));
var colls = cljs.core.rest(cljs.core.next(arglist__10603));
return G__10602__delegate(f, coll, colls);
});
G__10602.cljs$lang$arity$variadic = G__10602__delegate;
return G__10602;
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
var temp__4088__auto____10613 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10613)
{var s__10614 = temp__4088__auto____10613;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10614))
{var c__10615 = cljs.core.chunk_first.call(null,s__10614);
var size__10616 = cljs.core.count.call(null,c__10615);
var b__10617 = cljs.core.chunk_buffer.call(null,size__10616);
var n__2560__auto____10618 = size__10616;
var i__10619 = 0;
while(true){
if((i__10619 < n__2560__auto____10618))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__10615,i__10619))))
{cljs.core.chunk_append.call(null,b__10617,cljs.core._nth.call(null,c__10615,i__10619));
} else
{}
{
var G__10622 = (i__10619 + 1);
i__10619 = G__10622;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10617),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__10614)));
} else
{var f__10620 = cljs.core.first.call(null,s__10614);
var r__10621 = cljs.core.rest.call(null,s__10614);
if(cljs.core.truth_(pred.call(null,f__10620)))
{return cljs.core.cons.call(null,f__10620,filter.call(null,pred,r__10621));
} else
{return filter.call(null,pred,r__10621);
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
var walk__10625 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__10625.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__10623_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__10623_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__10629__10630 = to;
if(G__10629__10630)
{if((function (){var or__3939__auto____10631 = (G__10629__10630.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3939__auto____10631)
{return or__3939__auto____10631;
} else
{return G__10629__10630.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__10629__10630.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__10629__10630);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__10629__10630);
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
var G__10632__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__10632 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10632__delegate.call(this, f, c1, c2, c3, colls);
};
G__10632.cljs$lang$maxFixedArity = 4;
G__10632.cljs$lang$applyTo = (function (arglist__10633){
var f = cljs.core.first(arglist__10633);
var c1 = cljs.core.first(cljs.core.next(arglist__10633));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10633)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10633))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10633))));
return G__10632__delegate(f, c1, c2, c3, colls);
});
G__10632.cljs$lang$arity$variadic = G__10632__delegate;
return G__10632;
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
var temp__4088__auto____10640 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10640)
{var s__10641 = temp__4088__auto____10640;
var p__10642 = cljs.core.take.call(null,n,s__10641);
if((n === cljs.core.count.call(null,p__10642)))
{return cljs.core.cons.call(null,p__10642,partition.call(null,n,step,cljs.core.drop.call(null,step,s__10641)));
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
var temp__4088__auto____10643 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10643)
{var s__10644 = temp__4088__auto____10643;
var p__10645 = cljs.core.take.call(null,n,s__10644);
if((n === cljs.core.count.call(null,p__10645)))
{return cljs.core.cons.call(null,p__10645,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__10644)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__10645,pad)));
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
var sentinel__10650 = cljs.core.lookup_sentinel;
var m__10651 = m;
var ks__10652 = cljs.core.seq.call(null,ks);
while(true){
if(ks__10652)
{var m__10653 = cljs.core._lookup.call(null,m__10651,cljs.core.first.call(null,ks__10652),sentinel__10650);
if((sentinel__10650 === m__10653))
{return not_found;
} else
{{
var G__10654 = sentinel__10650;
var G__10655 = m__10653;
var G__10656 = cljs.core.next.call(null,ks__10652);
sentinel__10650 = G__10654;
m__10651 = G__10655;
ks__10652 = G__10656;
continue;
}
}
} else
{return m__10651;
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
cljs.core.assoc_in = (function assoc_in(m,p__10657,v){
var vec__10662__10663 = p__10657;
var k__10664 = cljs.core.nth.call(null,vec__10662__10663,0,null);
var ks__10665 = cljs.core.nthnext.call(null,vec__10662__10663,1);
if(cljs.core.truth_(ks__10665))
{return cljs.core.assoc.call(null,m,k__10664,assoc_in.call(null,cljs.core._lookup.call(null,m,k__10664,null),ks__10665,v));
} else
{return cljs.core.assoc.call(null,m,k__10664,v);
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
var update_in__delegate = function (m,p__10666,f,args){
var vec__10671__10672 = p__10666;
var k__10673 = cljs.core.nth.call(null,vec__10671__10672,0,null);
var ks__10674 = cljs.core.nthnext.call(null,vec__10671__10672,1);
if(cljs.core.truth_(ks__10674))
{return cljs.core.assoc.call(null,m,k__10673,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__10673,null),ks__10674,f,args));
} else
{return cljs.core.assoc.call(null,m,k__10673,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__10673,null),args));
}
};
var update_in = function (m,p__10666,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__10666, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__10675){
var m = cljs.core.first(arglist__10675);
var p__10666 = cljs.core.first(cljs.core.next(arglist__10675));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10675)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10675)));
return update_in__delegate(m, p__10666, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10678 = this;
var h__2225__auto____10679 = this__10678.__hash;
if(!((h__2225__auto____10679 == null)))
{return h__2225__auto____10679;
} else
{var h__2225__auto____10680 = cljs.core.hash_coll.call(null,coll);
this__10678.__hash = h__2225__auto____10680;
return h__2225__auto____10680;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10681 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10682 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10683 = this;
var new_array__10684 = this__10683.array.slice();
(new_array__10684[k] = v);
return (new cljs.core.Vector(this__10683.meta,new_array__10684,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__10715 = null;
var G__10715__2 = (function (this_sym10685,k){
var this__10687 = this;
var this_sym10685__10688 = this;
var coll__10689 = this_sym10685__10688;
return coll__10689.cljs$core$ILookup$_lookup$arity$2(coll__10689,k);
});
var G__10715__3 = (function (this_sym10686,k,not_found){
var this__10687 = this;
var this_sym10686__10690 = this;
var coll__10691 = this_sym10686__10690;
return coll__10691.cljs$core$ILookup$_lookup$arity$3(coll__10691,k,not_found);
});
G__10715 = function(this_sym10686,k,not_found){
switch(arguments.length){
case 2:
return G__10715__2.call(this,this_sym10686,k);
case 3:
return G__10715__3.call(this,this_sym10686,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10715;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym10676,args10677){
var this__10692 = this;
return this_sym10676.call.apply(this_sym10676,[this_sym10676].concat(args10677.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10693 = this;
var new_array__10694 = this__10693.array.slice();
new_array__10694.push(o);
return (new cljs.core.Vector(this__10693.meta,new_array__10694,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__10695 = this;
var this__10696 = this;
return cljs.core.pr_str.call(null,this__10696);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10697 = this;
return cljs.core.ci_reduce.call(null,this__10697.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10698 = this;
return cljs.core.ci_reduce.call(null,this__10698.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10699 = this;
if((this__10699.array.length > 0))
{var vector_seq__10700 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__10699.array.length))
{return cljs.core.cons.call(null,(this__10699.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__10700.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10701 = this;
return this__10701.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10702 = this;
var count__10703 = this__10702.array.length;
if((count__10703 > 0))
{return (this__10702.array[(count__10703 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10704 = this;
if((this__10704.array.length > 0))
{var new_array__10705 = this__10704.array.slice();
new_array__10705.pop();
return (new cljs.core.Vector(this__10704.meta,new_array__10705,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10706 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10707 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10708 = this;
return (new cljs.core.Vector(meta,this__10708.array,this__10708.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10709 = this;
return this__10709.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10710 = this;
if((function (){var and__3937__auto____10711 = (0 <= n);
if(and__3937__auto____10711)
{return (n < this__10710.array.length);
} else
{return and__3937__auto____10711;
}
})())
{return (this__10710.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10712 = this;
if((function (){var and__3937__auto____10713 = (0 <= n);
if(and__3937__auto____10713)
{return (n < this__10712.array.length);
} else
{return and__3937__auto____10713;
}
})())
{return (this__10712.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10714 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10714.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2343__auto__){
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
var cnt__10717 = pv.cnt;
if((cnt__10717 < 32))
{return 0;
} else
{return (((cnt__10717 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__10723 = level;
var ret__10724 = node;
while(true){
if((ll__10723 === 0))
{return ret__10724;
} else
{var embed__10725 = ret__10724;
var r__10726 = cljs.core.pv_fresh_node.call(null,edit);
var ___10727 = cljs.core.pv_aset.call(null,r__10726,0,embed__10725);
{
var G__10728 = (ll__10723 - 5);
var G__10729 = r__10726;
ll__10723 = G__10728;
ret__10724 = G__10729;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__10735 = cljs.core.pv_clone_node.call(null,parent);
var subidx__10736 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__10735,subidx__10736,tailnode);
return ret__10735;
} else
{var child__10737 = cljs.core.pv_aget.call(null,parent,subidx__10736);
if(!((child__10737 == null)))
{var node_to_insert__10738 = push_tail.call(null,pv,(level - 5),child__10737,tailnode);
cljs.core.pv_aset.call(null,ret__10735,subidx__10736,node_to_insert__10738);
return ret__10735;
} else
{var node_to_insert__10739 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__10735,subidx__10736,node_to_insert__10739);
return ret__10735;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3937__auto____10743 = (0 <= i);
if(and__3937__auto____10743)
{return (i < pv.cnt);
} else
{return and__3937__auto____10743;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__10744 = pv.root;
var level__10745 = pv.shift;
while(true){
if((level__10745 > 0))
{{
var G__10746 = cljs.core.pv_aget.call(null,node__10744,((i >>> level__10745) & 31));
var G__10747 = (level__10745 - 5);
node__10744 = G__10746;
level__10745 = G__10747;
continue;
}
} else
{return node__10744.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__10750 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__10750,(i & 31),val);
return ret__10750;
} else
{var subidx__10751 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10750,subidx__10751,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10751),i,val));
return ret__10750;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__10757 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10758 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10757));
if((function (){var and__3937__auto____10759 = (new_child__10758 == null);
if(and__3937__auto____10759)
{return (subidx__10757 === 0);
} else
{return and__3937__auto____10759;
}
})())
{return null;
} else
{var ret__10760 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10760,subidx__10757,new_child__10758);
return ret__10760;
}
} else
{if((subidx__10757 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__10761 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10761,subidx__10757,null);
return ret__10761;
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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10764 = this;
return (new cljs.core.TransientVector(this__10764.cnt,this__10764.shift,cljs.core.tv_editable_root.call(null,this__10764.root),cljs.core.tv_editable_tail.call(null,this__10764.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10765 = this;
var h__2225__auto____10766 = this__10765.__hash;
if(!((h__2225__auto____10766 == null)))
{return h__2225__auto____10766;
} else
{var h__2225__auto____10767 = cljs.core.hash_coll.call(null,coll);
this__10765.__hash = h__2225__auto____10767;
return h__2225__auto____10767;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10768 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10769 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10770 = this;
if((function (){var and__3937__auto____10771 = (0 <= k);
if(and__3937__auto____10771)
{return (k < this__10770.cnt);
} else
{return and__3937__auto____10771;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__10772 = this__10770.tail.slice();
(new_tail__10772[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__10770.meta,this__10770.cnt,this__10770.shift,this__10770.root,new_tail__10772,null));
} else
{return (new cljs.core.PersistentVector(this__10770.meta,this__10770.cnt,this__10770.shift,cljs.core.do_assoc.call(null,coll,this__10770.shift,this__10770.root,k,v),this__10770.tail,null));
}
} else
{if((k === this__10770.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__10770.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__10820 = null;
var G__10820__2 = (function (this_sym10773,k){
var this__10775 = this;
var this_sym10773__10776 = this;
var coll__10777 = this_sym10773__10776;
return coll__10777.cljs$core$ILookup$_lookup$arity$2(coll__10777,k);
});
var G__10820__3 = (function (this_sym10774,k,not_found){
var this__10775 = this;
var this_sym10774__10778 = this;
var coll__10779 = this_sym10774__10778;
return coll__10779.cljs$core$ILookup$_lookup$arity$3(coll__10779,k,not_found);
});
G__10820 = function(this_sym10774,k,not_found){
switch(arguments.length){
case 2:
return G__10820__2.call(this,this_sym10774,k);
case 3:
return G__10820__3.call(this,this_sym10774,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10820;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym10762,args10763){
var this__10780 = this;
return this_sym10762.call.apply(this_sym10762,[this_sym10762].concat(args10763.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__10781 = this;
var step_init__10782 = [0,init];
var i__10783 = 0;
while(true){
if((i__10783 < this__10781.cnt))
{var arr__10784 = cljs.core.array_for.call(null,v,i__10783);
var len__10785 = arr__10784.length;
var init__10789 = (function (){var j__10786 = 0;
var init__10787 = (step_init__10782[1]);
while(true){
if((j__10786 < len__10785))
{var init__10788 = f.call(null,init__10787,(j__10786 + i__10783),(arr__10784[j__10786]));
if(cljs.core.reduced_QMARK_.call(null,init__10788))
{return init__10788;
} else
{{
var G__10821 = (j__10786 + 1);
var G__10822 = init__10788;
j__10786 = G__10821;
init__10787 = G__10822;
continue;
}
}
} else
{(step_init__10782[0] = len__10785);
(step_init__10782[1] = init__10787);
return init__10787;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__10789))
{return cljs.core.deref.call(null,init__10789);
} else
{{
var G__10823 = (i__10783 + (step_init__10782[0]));
i__10783 = G__10823;
continue;
}
}
} else
{return (step_init__10782[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10790 = this;
if(((this__10790.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__10791 = this__10790.tail.slice();
new_tail__10791.push(o);
return (new cljs.core.PersistentVector(this__10790.meta,(this__10790.cnt + 1),this__10790.shift,this__10790.root,new_tail__10791,null));
} else
{var root_overflow_QMARK___10792 = ((this__10790.cnt >>> 5) > (1 << this__10790.shift));
var new_shift__10793 = ((root_overflow_QMARK___10792)?(this__10790.shift + 5):this__10790.shift);
var new_root__10795 = ((root_overflow_QMARK___10792)?(function (){var n_r__10794 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__10794,0,this__10790.root);
cljs.core.pv_aset.call(null,n_r__10794,1,cljs.core.new_path.call(null,null,this__10790.shift,(new cljs.core.VectorNode(null,this__10790.tail))));
return n_r__10794;
})():cljs.core.push_tail.call(null,coll,this__10790.shift,this__10790.root,(new cljs.core.VectorNode(null,this__10790.tail))));
return (new cljs.core.PersistentVector(this__10790.meta,(this__10790.cnt + 1),new_shift__10793,new_root__10795,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10796 = this;
if((this__10796.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__10796.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__10797 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__10798 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__10799 = this;
var this__10800 = this;
return cljs.core.pr_str.call(null,this__10800);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10801 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10802 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10803 = this;
if((this__10803.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10804 = this;
return this__10804.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10805 = this;
if((this__10805.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__10805.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10806 = this;
if((this__10806.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10806.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10806.meta);
} else
{if((1 < (this__10806.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__10806.meta,(this__10806.cnt - 1),this__10806.shift,this__10806.root,this__10806.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__10807 = cljs.core.array_for.call(null,coll,(this__10806.cnt - 2));
var nr__10808 = cljs.core.pop_tail.call(null,coll,this__10806.shift,this__10806.root);
var new_root__10809 = (((nr__10808 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__10808);
var cnt_1__10810 = (this__10806.cnt - 1);
if((function (){var and__3937__auto____10811 = (5 < this__10806.shift);
if(and__3937__auto____10811)
{return (cljs.core.pv_aget.call(null,new_root__10809,1) == null);
} else
{return and__3937__auto____10811;
}
})())
{return (new cljs.core.PersistentVector(this__10806.meta,cnt_1__10810,(this__10806.shift - 5),cljs.core.pv_aget.call(null,new_root__10809,0),new_tail__10807,null));
} else
{return (new cljs.core.PersistentVector(this__10806.meta,cnt_1__10810,this__10806.shift,new_root__10809,new_tail__10807,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10812 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10813 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10814 = this;
return (new cljs.core.PersistentVector(meta,this__10814.cnt,this__10814.shift,this__10814.root,this__10814.tail,this__10814.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10815 = this;
return this__10815.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10816 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10817 = this;
if((function (){var and__3937__auto____10818 = (0 <= n);
if(and__3937__auto____10818)
{return (n < this__10817.cnt);
} else
{return and__3937__auto____10818;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10819 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10819.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__10824 = xs.length;
var xs__10825 = (((no_clone === true))?xs:xs.slice());
if((l__10824 < 32))
{return (new cljs.core.PersistentVector(null,l__10824,5,cljs.core.PersistentVector.EMPTY_NODE,xs__10825,null));
} else
{var node__10826 = xs__10825.slice(0,32);
var v__10827 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__10826,null));
var i__10828 = 32;
var out__10829 = cljs.core._as_transient.call(null,v__10827);
while(true){
if((i__10828 < l__10824))
{{
var G__10830 = (i__10828 + 1);
var G__10831 = cljs.core.conj_BANG_.call(null,out__10829,(xs__10825[i__10828]));
i__10828 = G__10830;
out__10829 = G__10831;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10829);
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
vector.cljs$lang$applyTo = (function (arglist__10832){
var args = cljs.core.seq(arglist__10832);;
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__10833 = this;
if(((this__10833.off + 1) < this__10833.node.length))
{var s__10834 = cljs.core.chunked_seq.call(null,this__10833.vec,this__10833.node,this__10833.i,(this__10833.off + 1));
if((s__10834 == null))
{return null;
} else
{return s__10834;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10835 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10836 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10837 = this;
return (this__10837.node[this__10837.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10838 = this;
if(((this__10838.off + 1) < this__10838.node.length))
{var s__10839 = cljs.core.chunked_seq.call(null,this__10838.vec,this__10838.node,this__10838.i,(this__10838.off + 1));
if((s__10839 == null))
{return cljs.core.List.EMPTY;
} else
{return s__10839;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__10840 = this;
var l__10841 = this__10840.node.length;
var s__10842 = ((((this__10840.i + l__10841) < cljs.core._count.call(null,this__10840.vec)))?cljs.core.chunked_seq.call(null,this__10840.vec,(this__10840.i + l__10841),0):null);
if((s__10842 == null))
{return null;
} else
{return s__10842;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10843 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__10844 = this;
return cljs.core.chunked_seq.call(null,this__10844.vec,this__10844.node,this__10844.i,this__10844.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__10845 = this;
return this__10845.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10846 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10846.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__10847 = this;
return cljs.core.array_chunk.call(null,this__10847.node,this__10847.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__10848 = this;
var l__10849 = this__10848.node.length;
var s__10850 = ((((this__10848.i + l__10849) < cljs.core._count.call(null,this__10848.vec)))?cljs.core.chunked_seq.call(null,this__10848.vec,(this__10848.i + l__10849),0):null);
if((s__10850 == null))
{return cljs.core.List.EMPTY;
} else
{return s__10850;
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10853 = this;
var h__2225__auto____10854 = this__10853.__hash;
if(!((h__2225__auto____10854 == null)))
{return h__2225__auto____10854;
} else
{var h__2225__auto____10855 = cljs.core.hash_coll.call(null,coll);
this__10853.__hash = h__2225__auto____10855;
return h__2225__auto____10855;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10856 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10857 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__10858 = this;
var v_pos__10859 = (this__10858.start + key);
return (new cljs.core.Subvec(this__10858.meta,cljs.core._assoc.call(null,this__10858.v,v_pos__10859,val),this__10858.start,((this__10858.end > (v_pos__10859 + 1)) ? this__10858.end : (v_pos__10859 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__10885 = null;
var G__10885__2 = (function (this_sym10860,k){
var this__10862 = this;
var this_sym10860__10863 = this;
var coll__10864 = this_sym10860__10863;
return coll__10864.cljs$core$ILookup$_lookup$arity$2(coll__10864,k);
});
var G__10885__3 = (function (this_sym10861,k,not_found){
var this__10862 = this;
var this_sym10861__10865 = this;
var coll__10866 = this_sym10861__10865;
return coll__10866.cljs$core$ILookup$_lookup$arity$3(coll__10866,k,not_found);
});
G__10885 = function(this_sym10861,k,not_found){
switch(arguments.length){
case 2:
return G__10885__2.call(this,this_sym10861,k);
case 3:
return G__10885__3.call(this,this_sym10861,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10885;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym10851,args10852){
var this__10867 = this;
return this_sym10851.call.apply(this_sym10851,[this_sym10851].concat(args10852.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10868 = this;
return (new cljs.core.Subvec(this__10868.meta,cljs.core._assoc_n.call(null,this__10868.v,this__10868.end,o),this__10868.start,(this__10868.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__10869 = this;
var this__10870 = this;
return cljs.core.pr_str.call(null,this__10870);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__10871 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__10872 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10873 = this;
var subvec_seq__10874 = (function subvec_seq(i){
if((i === this__10873.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__10873.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__10874.call(null,this__10873.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10875 = this;
return (this__10875.end - this__10875.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10876 = this;
return cljs.core._nth.call(null,this__10876.v,(this__10876.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10877 = this;
if((this__10877.start === this__10877.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__10877.meta,this__10877.v,this__10877.start,(this__10877.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10878 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10879 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10880 = this;
return (new cljs.core.Subvec(meta,this__10880.v,this__10880.start,this__10880.end,this__10880.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10881 = this;
return this__10881.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10882 = this;
return cljs.core._nth.call(null,this__10882.v,(this__10882.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10883 = this;
return cljs.core._nth.call(null,this__10883.v,(this__10883.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10884 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10884.meta);
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
var ret__10887 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__10887,0,tl.length);
return ret__10887;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__10891 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__10892 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10891,subidx__10892,(((level === 5))?tail_node:(function (){var child__10893 = cljs.core.pv_aget.call(null,ret__10891,subidx__10892);
if(!((child__10893 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__10893,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__10891;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__10898 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__10899 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10900 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__10898,subidx__10899));
if((function (){var and__3937__auto____10901 = (new_child__10900 == null);
if(and__3937__auto____10901)
{return (subidx__10899 === 0);
} else
{return and__3937__auto____10901;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__10898,subidx__10899,new_child__10900);
return node__10898;
}
} else
{if((subidx__10899 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__10898,subidx__10899,null);
return node__10898;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3937__auto____10906 = (0 <= i);
if(and__3937__auto____10906)
{return (i < tv.cnt);
} else
{return and__3937__auto____10906;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__10907 = tv.root;
var node__10908 = root__10907;
var level__10909 = tv.shift;
while(true){
if((level__10909 > 0))
{{
var G__10910 = cljs.core.tv_ensure_editable.call(null,root__10907.edit,cljs.core.pv_aget.call(null,node__10908,((i >>> level__10909) & 31)));
var G__10911 = (level__10909 - 5);
node__10908 = G__10910;
level__10909 = G__10911;
continue;
}
} else
{return node__10908.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__10951 = null;
var G__10951__2 = (function (this_sym10914,k){
var this__10916 = this;
var this_sym10914__10917 = this;
var coll__10918 = this_sym10914__10917;
return coll__10918.cljs$core$ILookup$_lookup$arity$2(coll__10918,k);
});
var G__10951__3 = (function (this_sym10915,k,not_found){
var this__10916 = this;
var this_sym10915__10919 = this;
var coll__10920 = this_sym10915__10919;
return coll__10920.cljs$core$ILookup$_lookup$arity$3(coll__10920,k,not_found);
});
G__10951 = function(this_sym10915,k,not_found){
switch(arguments.length){
case 2:
return G__10951__2.call(this,this_sym10915,k);
case 3:
return G__10951__3.call(this,this_sym10915,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10951;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym10912,args10913){
var this__10921 = this;
return this_sym10912.call.apply(this_sym10912,[this_sym10912].concat(args10913.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10922 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10923 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10924 = this;
if(this__10924.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10925 = this;
if((function (){var and__3937__auto____10926 = (0 <= n);
if(and__3937__auto____10926)
{return (n < this__10925.cnt);
} else
{return and__3937__auto____10926;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10927 = this;
if(this__10927.root.edit)
{return this__10927.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__10928 = this;
if(this__10928.root.edit)
{if((function (){var and__3937__auto____10929 = (0 <= n);
if(and__3937__auto____10929)
{return (n < this__10928.cnt);
} else
{return and__3937__auto____10929;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__10928.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__10934 = (function go(level,node){
var node__10932 = cljs.core.tv_ensure_editable.call(null,this__10928.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__10932,(n & 31),val);
return node__10932;
} else
{var subidx__10933 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__10932,subidx__10933,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__10932,subidx__10933)));
return node__10932;
}
}).call(null,this__10928.shift,this__10928.root);
this__10928.root = new_root__10934;
return tcoll;
}
} else
{if((n === this__10928.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__10928.cnt)].join('')));
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
var this__10935 = this;
if(this__10935.root.edit)
{if((this__10935.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10935.cnt))
{this__10935.cnt = 0;
return tcoll;
} else
{if((((this__10935.cnt - 1) & 31) > 0))
{this__10935.cnt = (this__10935.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__10936 = cljs.core.editable_array_for.call(null,tcoll,(this__10935.cnt - 2));
var new_root__10938 = (function (){var nr__10937 = cljs.core.tv_pop_tail.call(null,tcoll,this__10935.shift,this__10935.root);
if(!((nr__10937 == null)))
{return nr__10937;
} else
{return (new cljs.core.VectorNode(this__10935.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3937__auto____10939 = (5 < this__10935.shift);
if(and__3937__auto____10939)
{return (cljs.core.pv_aget.call(null,new_root__10938,1) == null);
} else
{return and__3937__auto____10939;
}
})())
{var new_root__10940 = cljs.core.tv_ensure_editable.call(null,this__10935.root.edit,cljs.core.pv_aget.call(null,new_root__10938,0));
this__10935.root = new_root__10940;
this__10935.shift = (this__10935.shift - 5);
this__10935.cnt = (this__10935.cnt - 1);
this__10935.tail = new_tail__10936;
return tcoll;
} else
{this__10935.root = new_root__10938;
this__10935.cnt = (this__10935.cnt - 1);
this__10935.tail = new_tail__10936;
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
var this__10941 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10942 = this;
if(this__10942.root.edit)
{if(((this__10942.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__10942.tail[(this__10942.cnt & 31)] = o);
this__10942.cnt = (this__10942.cnt + 1);
return tcoll;
} else
{var tail_node__10943 = (new cljs.core.VectorNode(this__10942.root.edit,this__10942.tail));
var new_tail__10944 = cljs.core.make_array.call(null,32);
(new_tail__10944[0] = o);
this__10942.tail = new_tail__10944;
if(((this__10942.cnt >>> 5) > (1 << this__10942.shift)))
{var new_root_array__10945 = cljs.core.make_array.call(null,32);
var new_shift__10946 = (this__10942.shift + 5);
(new_root_array__10945[0] = this__10942.root);
(new_root_array__10945[1] = cljs.core.new_path.call(null,this__10942.root.edit,this__10942.shift,tail_node__10943));
this__10942.root = (new cljs.core.VectorNode(this__10942.root.edit,new_root_array__10945));
this__10942.shift = new_shift__10946;
this__10942.cnt = (this__10942.cnt + 1);
return tcoll;
} else
{var new_root__10947 = cljs.core.tv_push_tail.call(null,tcoll,this__10942.shift,this__10942.root,tail_node__10943);
this__10942.root = new_root__10947;
this__10942.cnt = (this__10942.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10948 = this;
if(this__10948.root.edit)
{this__10948.root.edit = null;
var len__10949 = (this__10948.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__10950 = cljs.core.make_array.call(null,len__10949);
cljs.core.array_copy.call(null,this__10948.tail,0,trimmed_tail__10950,0,len__10949);
return (new cljs.core.PersistentVector(null,this__10948.cnt,this__10948.shift,this__10948.root,trimmed_tail__10950,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10952 = this;
var h__2225__auto____10953 = this__10952.__hash;
if(!((h__2225__auto____10953 == null)))
{return h__2225__auto____10953;
} else
{var h__2225__auto____10954 = cljs.core.hash_coll.call(null,coll);
this__10952.__hash = h__2225__auto____10954;
return h__2225__auto____10954;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10955 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__10956 = this;
var this__10957 = this;
return cljs.core.pr_str.call(null,this__10957);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10958 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10959 = this;
return cljs.core._first.call(null,this__10959.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10960 = this;
var temp__4086__auto____10961 = cljs.core.next.call(null,this__10960.front);
if(temp__4086__auto____10961)
{var f1__10962 = temp__4086__auto____10961;
return (new cljs.core.PersistentQueueSeq(this__10960.meta,f1__10962,this__10960.rear,null));
} else
{if((this__10960.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__10960.meta,this__10960.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10963 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10964 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__10964.front,this__10964.rear,this__10964.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10965 = this;
return this__10965.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10966 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10966.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10967 = this;
var h__2225__auto____10968 = this__10967.__hash;
if(!((h__2225__auto____10968 == null)))
{return h__2225__auto____10968;
} else
{var h__2225__auto____10969 = cljs.core.hash_coll.call(null,coll);
this__10967.__hash = h__2225__auto____10969;
return h__2225__auto____10969;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10970 = this;
if(cljs.core.truth_(this__10970.front))
{return (new cljs.core.PersistentQueue(this__10970.meta,(this__10970.count + 1),this__10970.front,cljs.core.conj.call(null,(function (){var or__3939__auto____10971 = this__10970.rear;
if(cljs.core.truth_(or__3939__auto____10971))
{return or__3939__auto____10971;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__10970.meta,(this__10970.count + 1),cljs.core.conj.call(null,this__10970.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__10972 = this;
var this__10973 = this;
return cljs.core.pr_str.call(null,this__10973);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10974 = this;
var rear__10975 = cljs.core.seq.call(null,this__10974.rear);
if(cljs.core.truth_((function (){var or__3939__auto____10976 = this__10974.front;
if(cljs.core.truth_(or__3939__auto____10976))
{return or__3939__auto____10976;
} else
{return rear__10975;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__10974.front,cljs.core.seq.call(null,rear__10975),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10977 = this;
return this__10977.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10978 = this;
return cljs.core._first.call(null,this__10978.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10979 = this;
if(cljs.core.truth_(this__10979.front))
{var temp__4086__auto____10980 = cljs.core.next.call(null,this__10979.front);
if(temp__4086__auto____10980)
{var f1__10981 = temp__4086__auto____10980;
return (new cljs.core.PersistentQueue(this__10979.meta,(this__10979.count - 1),f1__10981,this__10979.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__10979.meta,(this__10979.count - 1),cljs.core.seq.call(null,this__10979.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10982 = this;
return cljs.core.first.call(null,this__10982.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10983 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10984 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10985 = this;
return (new cljs.core.PersistentQueue(meta,this__10985.count,this__10985.front,this__10985.rear,this__10985.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10986 = this;
return this__10986.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10987 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10988 = this;
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
var len__10991 = array.length;
var i__10992 = 0;
while(true){
if((i__10992 < len__10991))
{if((k === (array[i__10992])))
{return i__10992;
} else
{{
var G__10993 = (i__10992 + incr);
i__10992 = G__10993;
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
var a__10996 = cljs.core.hash.call(null,a);
var b__10997 = cljs.core.hash.call(null,b);
if((a__10996 < b__10997))
{return -1;
} else
{if((a__10996 > b__10997))
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
var ks__11005 = m.keys;
var len__11006 = ks__11005.length;
var so__11007 = m.strobj;
var out__11008 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__11009 = 0;
var out__11010 = cljs.core.transient$.call(null,out__11008);
while(true){
if((i__11009 < len__11006))
{var k__11011 = (ks__11005[i__11009]);
{
var G__11012 = (i__11009 + 1);
var G__11013 = cljs.core.assoc_BANG_.call(null,out__11010,k__11011,(so__11007[k__11011]));
i__11009 = G__11012;
out__11010 = G__11013;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__11010,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__11019 = {};
var l__11020 = ks.length;
var i__11021 = 0;
while(true){
if((i__11021 < l__11020))
{var k__11022 = (ks[i__11021]);
(new_obj__11019[k__11022] = (obj[k__11022]));
{
var G__11023 = (i__11021 + 1);
i__11021 = G__11023;
continue;
}
} else
{}
break;
}
return new_obj__11019;
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__11026 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11027 = this;
var h__2225__auto____11028 = this__11027.__hash;
if(!((h__2225__auto____11028 == null)))
{return h__2225__auto____11028;
} else
{var h__2225__auto____11029 = cljs.core.hash_imap.call(null,coll);
this__11027.__hash = h__2225__auto____11029;
return h__2225__auto____11029;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11030 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11031 = this;
if((function (){var and__3937__auto____11032 = goog.isString(k);
if(and__3937__auto____11032)
{return !((cljs.core.scan_array.call(null,1,k,this__11031.keys) == null));
} else
{return and__3937__auto____11032;
}
})())
{return (this__11031.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11033 = this;
if(goog.isString(k))
{if((function (){var or__3939__auto____11034 = (this__11033.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3939__auto____11034)
{return or__3939__auto____11034;
} else
{return (this__11033.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__11033.keys) == null)))
{var new_strobj__11035 = cljs.core.obj_clone.call(null,this__11033.strobj,this__11033.keys);
(new_strobj__11035[k] = v);
return (new cljs.core.ObjMap(this__11033.meta,this__11033.keys,new_strobj__11035,(this__11033.update_count + 1),null));
} else
{var new_strobj__11036 = cljs.core.obj_clone.call(null,this__11033.strobj,this__11033.keys);
var new_keys__11037 = this__11033.keys.slice();
(new_strobj__11036[k] = v);
new_keys__11037.push(k);
return (new cljs.core.ObjMap(this__11033.meta,new_keys__11037,new_strobj__11036,(this__11033.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11038 = this;
if((function (){var and__3937__auto____11039 = goog.isString(k);
if(and__3937__auto____11039)
{return !((cljs.core.scan_array.call(null,1,k,this__11038.keys) == null));
} else
{return and__3937__auto____11039;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__11061 = null;
var G__11061__2 = (function (this_sym11040,k){
var this__11042 = this;
var this_sym11040__11043 = this;
var coll__11044 = this_sym11040__11043;
return coll__11044.cljs$core$ILookup$_lookup$arity$2(coll__11044,k);
});
var G__11061__3 = (function (this_sym11041,k,not_found){
var this__11042 = this;
var this_sym11041__11045 = this;
var coll__11046 = this_sym11041__11045;
return coll__11046.cljs$core$ILookup$_lookup$arity$3(coll__11046,k,not_found);
});
G__11061 = function(this_sym11041,k,not_found){
switch(arguments.length){
case 2:
return G__11061__2.call(this,this_sym11041,k);
case 3:
return G__11061__3.call(this,this_sym11041,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11061;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym11024,args11025){
var this__11047 = this;
return this_sym11024.call.apply(this_sym11024,[this_sym11024].concat(args11025.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11048 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__11049 = this;
var this__11050 = this;
return cljs.core.pr_str.call(null,this__11050);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11051 = this;
if((this__11051.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__11014_SHARP_){
return cljs.core.vector.call(null,p1__11014_SHARP_,(this__11051.strobj[p1__11014_SHARP_]));
}),this__11051.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11052 = this;
return this__11052.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11053 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11054 = this;
return (new cljs.core.ObjMap(meta,this__11054.keys,this__11054.strobj,this__11054.update_count,this__11054.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11055 = this;
return this__11055.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11056 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__11056.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11057 = this;
if((function (){var and__3937__auto____11058 = goog.isString(k);
if(and__3937__auto____11058)
{return !((cljs.core.scan_array.call(null,1,k,this__11057.keys) == null));
} else
{return and__3937__auto____11058;
}
})())
{var new_keys__11059 = this__11057.keys.slice();
var new_strobj__11060 = cljs.core.obj_clone.call(null,this__11057.strobj,this__11057.keys);
new_keys__11059.splice(cljs.core.scan_array.call(null,1,k,new_keys__11059),1);
cljs.core.js_delete.call(null,new_strobj__11060,k);
return (new cljs.core.ObjMap(this__11057.meta,new_keys__11059,new_strobj__11060,(this__11057.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11065 = this;
var h__2225__auto____11066 = this__11065.__hash;
if(!((h__2225__auto____11066 == null)))
{return h__2225__auto____11066;
} else
{var h__2225__auto____11067 = cljs.core.hash_imap.call(null,coll);
this__11065.__hash = h__2225__auto____11067;
return h__2225__auto____11067;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11068 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11069 = this;
var bucket__11070 = (this__11069.hashobj[cljs.core.hash.call(null,k)]);
var i__11071 = (cljs.core.truth_(bucket__11070)?cljs.core.scan_array.call(null,2,k,bucket__11070):null);
if(cljs.core.truth_(i__11071))
{return (bucket__11070[(i__11071 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11072 = this;
var h__11073 = cljs.core.hash.call(null,k);
var bucket__11074 = (this__11072.hashobj[h__11073]);
if(cljs.core.truth_(bucket__11074))
{var new_bucket__11075 = bucket__11074.slice();
var new_hashobj__11076 = goog.object.clone(this__11072.hashobj);
(new_hashobj__11076[h__11073] = new_bucket__11075);
var temp__4086__auto____11077 = cljs.core.scan_array.call(null,2,k,new_bucket__11075);
if(cljs.core.truth_(temp__4086__auto____11077))
{var i__11078 = temp__4086__auto____11077;
(new_bucket__11075[(i__11078 + 1)] = v);
return (new cljs.core.HashMap(this__11072.meta,this__11072.count,new_hashobj__11076,null));
} else
{new_bucket__11075.push(k,v);
return (new cljs.core.HashMap(this__11072.meta,(this__11072.count + 1),new_hashobj__11076,null));
}
} else
{var new_hashobj__11079 = goog.object.clone(this__11072.hashobj);
(new_hashobj__11079[h__11073] = [k,v]);
return (new cljs.core.HashMap(this__11072.meta,(this__11072.count + 1),new_hashobj__11079,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11080 = this;
var bucket__11081 = (this__11080.hashobj[cljs.core.hash.call(null,k)]);
var i__11082 = (cljs.core.truth_(bucket__11081)?cljs.core.scan_array.call(null,2,k,bucket__11081):null);
if(cljs.core.truth_(i__11082))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__11107 = null;
var G__11107__2 = (function (this_sym11083,k){
var this__11085 = this;
var this_sym11083__11086 = this;
var coll__11087 = this_sym11083__11086;
return coll__11087.cljs$core$ILookup$_lookup$arity$2(coll__11087,k);
});
var G__11107__3 = (function (this_sym11084,k,not_found){
var this__11085 = this;
var this_sym11084__11088 = this;
var coll__11089 = this_sym11084__11088;
return coll__11089.cljs$core$ILookup$_lookup$arity$3(coll__11089,k,not_found);
});
G__11107 = function(this_sym11084,k,not_found){
switch(arguments.length){
case 2:
return G__11107__2.call(this,this_sym11084,k);
case 3:
return G__11107__3.call(this,this_sym11084,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11107;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym11063,args11064){
var this__11090 = this;
return this_sym11063.call.apply(this_sym11063,[this_sym11063].concat(args11064.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11091 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__11092 = this;
var this__11093 = this;
return cljs.core.pr_str.call(null,this__11093);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11094 = this;
if((this__11094.count > 0))
{var hashes__11095 = cljs.core.js_keys.call(null,this__11094.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__11062_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__11094.hashobj[p1__11062_SHARP_])));
}),hashes__11095);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11096 = this;
return this__11096.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11097 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11098 = this;
return (new cljs.core.HashMap(meta,this__11098.count,this__11098.hashobj,this__11098.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11099 = this;
return this__11099.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11100 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__11100.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11101 = this;
var h__11102 = cljs.core.hash.call(null,k);
var bucket__11103 = (this__11101.hashobj[h__11102]);
var i__11104 = (cljs.core.truth_(bucket__11103)?cljs.core.scan_array.call(null,2,k,bucket__11103):null);
if(cljs.core.not.call(null,i__11104))
{return coll;
} else
{var new_hashobj__11105 = goog.object.clone(this__11101.hashobj);
if((3 > bucket__11103.length))
{cljs.core.js_delete.call(null,new_hashobj__11105,h__11102);
} else
{var new_bucket__11106 = bucket__11103.slice();
new_bucket__11106.splice(i__11104,2);
(new_hashobj__11105[h__11102] = new_bucket__11106);
}
return (new cljs.core.HashMap(this__11101.meta,(this__11101.count - 1),new_hashobj__11105,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__11108 = ks.length;
var i__11109 = 0;
var out__11110 = cljs.core.HashMap.EMPTY;
while(true){
if((i__11109 < len__11108))
{{
var G__11111 = (i__11109 + 1);
var G__11112 = cljs.core.assoc.call(null,out__11110,(ks[i__11109]),(vs[i__11109]));
i__11109 = G__11111;
out__11110 = G__11112;
continue;
}
} else
{return out__11110;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__11116 = m.arr;
var len__11117 = arr__11116.length;
var i__11118 = 0;
while(true){
if((len__11117 <= i__11118))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__11116[i__11118]),k))
{return i__11118;
} else
{if("\uFDD0'else")
{{
var G__11119 = (i__11118 + 2);
i__11118 = G__11119;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__11122 = this;
return (new cljs.core.TransientArrayMap({},this__11122.arr.length,this__11122.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11123 = this;
var h__2225__auto____11124 = this__11123.__hash;
if(!((h__2225__auto____11124 == null)))
{return h__2225__auto____11124;
} else
{var h__2225__auto____11125 = cljs.core.hash_imap.call(null,coll);
this__11123.__hash = h__2225__auto____11125;
return h__2225__auto____11125;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11126 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11127 = this;
var idx__11128 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__11128 === -1))
{return not_found;
} else
{return (this__11127.arr[(idx__11128 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11129 = this;
var idx__11130 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__11130 === -1))
{if((this__11129.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__11129.meta,(this__11129.cnt + 1),(function (){var G__11131__11132 = this__11129.arr.slice();
G__11131__11132.push(k);
G__11131__11132.push(v);
return G__11131__11132;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__11129.arr[(idx__11130 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__11129.meta,this__11129.cnt,(function (){var G__11133__11134 = this__11129.arr.slice();
(G__11133__11134[(idx__11130 + 1)] = v);
return G__11133__11134;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11135 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__11167 = null;
var G__11167__2 = (function (this_sym11136,k){
var this__11138 = this;
var this_sym11136__11139 = this;
var coll__11140 = this_sym11136__11139;
return coll__11140.cljs$core$ILookup$_lookup$arity$2(coll__11140,k);
});
var G__11167__3 = (function (this_sym11137,k,not_found){
var this__11138 = this;
var this_sym11137__11141 = this;
var coll__11142 = this_sym11137__11141;
return coll__11142.cljs$core$ILookup$_lookup$arity$3(coll__11142,k,not_found);
});
G__11167 = function(this_sym11137,k,not_found){
switch(arguments.length){
case 2:
return G__11167__2.call(this,this_sym11137,k);
case 3:
return G__11167__3.call(this,this_sym11137,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11167;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym11120,args11121){
var this__11143 = this;
return this_sym11120.call.apply(this_sym11120,[this_sym11120].concat(args11121.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11144 = this;
var len__11145 = this__11144.arr.length;
var i__11146 = 0;
var init__11147 = init;
while(true){
if((i__11146 < len__11145))
{var init__11148 = f.call(null,init__11147,(this__11144.arr[i__11146]),(this__11144.arr[(i__11146 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__11148))
{return cljs.core.deref.call(null,init__11148);
} else
{{
var G__11168 = (i__11146 + 2);
var G__11169 = init__11148;
i__11146 = G__11168;
init__11147 = G__11169;
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
var this__11149 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__11150 = this;
var this__11151 = this;
return cljs.core.pr_str.call(null,this__11151);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11152 = this;
if((this__11152.cnt > 0))
{var len__11153 = this__11152.arr.length;
var array_map_seq__11154 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__11153))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__11152.arr[i]),(this__11152.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__11154.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11155 = this;
return this__11155.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11156 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11157 = this;
return (new cljs.core.PersistentArrayMap(meta,this__11157.cnt,this__11157.arr,this__11157.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11158 = this;
return this__11158.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11159 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11159.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11160 = this;
var idx__11161 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__11161 >= 0))
{var len__11162 = this__11160.arr.length;
var new_len__11163 = (len__11162 - 2);
if((new_len__11163 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__11164 = cljs.core.make_array.call(null,new_len__11163);
var s__11165 = 0;
var d__11166 = 0;
while(true){
if((s__11165 >= len__11162))
{return (new cljs.core.PersistentArrayMap(this__11160.meta,(this__11160.cnt - 1),new_arr__11164,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__11160.arr[s__11165])))
{{
var G__11170 = (s__11165 + 2);
var G__11171 = d__11166;
s__11165 = G__11170;
d__11166 = G__11171;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__11164[d__11166] = (this__11160.arr[s__11165]));
(new_arr__11164[(d__11166 + 1)] = (this__11160.arr[(s__11165 + 1)]));
{
var G__11172 = (s__11165 + 2);
var G__11173 = (d__11166 + 2);
s__11165 = G__11172;
d__11166 = G__11173;
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
var len__11174 = cljs.core.count.call(null,ks);
var i__11175 = 0;
var out__11176 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__11175 < len__11174))
{{
var G__11177 = (i__11175 + 1);
var G__11178 = cljs.core.assoc_BANG_.call(null,out__11176,(ks[i__11175]),(vs[i__11175]));
i__11175 = G__11177;
out__11176 = G__11178;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11176);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__11179 = this;
if(cljs.core.truth_(this__11179.editable_QMARK_))
{var idx__11180 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__11180 >= 0))
{(this__11179.arr[idx__11180] = (this__11179.arr[(this__11179.len - 2)]));
(this__11179.arr[(idx__11180 + 1)] = (this__11179.arr[(this__11179.len - 1)]));
var G__11181__11182 = this__11179.arr;
G__11181__11182.pop();
G__11181__11182.pop();
G__11181__11182;
this__11179.len = (this__11179.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__11183 = this;
if(cljs.core.truth_(this__11183.editable_QMARK_))
{var idx__11184 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__11184 === -1))
{if(((this__11183.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__11183.len = (this__11183.len + 2);
this__11183.arr.push(key);
this__11183.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__11183.len,this__11183.arr),key,val);
}
} else
{if((val === (this__11183.arr[(idx__11184 + 1)])))
{return tcoll;
} else
{(this__11183.arr[(idx__11184 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11185 = this;
if(cljs.core.truth_(this__11185.editable_QMARK_))
{if((function (){var G__11186__11187 = o;
if(G__11186__11187)
{if((function (){var or__3939__auto____11188 = (G__11186__11187.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3939__auto____11188)
{return or__3939__auto____11188;
} else
{return G__11186__11187.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__11186__11187.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11186__11187);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11186__11187);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__11189 = cljs.core.seq.call(null,o);
var tcoll__11190 = tcoll;
while(true){
var temp__4086__auto____11191 = cljs.core.first.call(null,es__11189);
if(cljs.core.truth_(temp__4086__auto____11191))
{var e__11192 = temp__4086__auto____11191;
{
var G__11198 = cljs.core.next.call(null,es__11189);
var G__11199 = tcoll__11190.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__11190,cljs.core.key.call(null,e__11192),cljs.core.val.call(null,e__11192));
es__11189 = G__11198;
tcoll__11190 = G__11199;
continue;
}
} else
{return tcoll__11190;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11193 = this;
if(cljs.core.truth_(this__11193.editable_QMARK_))
{this__11193.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__11193.len,2),this__11193.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__11194 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__11195 = this;
if(cljs.core.truth_(this__11195.editable_QMARK_))
{var idx__11196 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__11196 === -1))
{return not_found;
} else
{return (this__11195.arr[(idx__11196 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__11197 = this;
if(cljs.core.truth_(this__11197.editable_QMARK_))
{return cljs.core.quot.call(null,this__11197.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__11202 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__11203 = 0;
while(true){
if((i__11203 < len))
{{
var G__11204 = cljs.core.assoc_BANG_.call(null,out__11202,(arr[i__11203]),(arr[(i__11203 + 1)]));
var G__11205 = (i__11203 + 2);
out__11202 = G__11204;
i__11203 = G__11205;
continue;
}
} else
{return out__11202;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2343__auto__){
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
var G__11210__11211 = arr.slice();
(G__11210__11211[i] = a);
return G__11210__11211;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__11212__11213 = arr.slice();
(G__11212__11213[i] = a);
(G__11212__11213[j] = b);
return G__11212__11213;
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
var new_arr__11215 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__11215,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__11215,(2 * i),(new_arr__11215.length - (2 * i)));
return new_arr__11215;
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
var editable__11218 = inode.ensure_editable(edit);
(editable__11218.arr[i] = a);
return editable__11218;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__11219 = inode.ensure_editable(edit);
(editable__11219.arr[i] = a);
(editable__11219.arr[j] = b);
return editable__11219;
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
var len__11226 = arr.length;
var i__11227 = 0;
var init__11228 = init;
while(true){
if((i__11227 < len__11226))
{var init__11231 = (function (){var k__11229 = (arr[i__11227]);
if(!((k__11229 == null)))
{return f.call(null,init__11228,k__11229,(arr[(i__11227 + 1)]));
} else
{var node__11230 = (arr[(i__11227 + 1)]);
if(!((node__11230 == null)))
{return node__11230.kv_reduce(f,init__11228);
} else
{return init__11228;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__11231))
{return cljs.core.deref.call(null,init__11231);
} else
{{
var G__11232 = (i__11227 + 2);
var G__11233 = init__11231;
i__11227 = G__11232;
init__11228 = G__11233;
continue;
}
}
} else
{return init__11228;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__11234 = this;
var inode__11235 = this;
if((this__11234.bitmap === bit))
{return null;
} else
{var editable__11236 = inode__11235.ensure_editable(e);
var earr__11237 = editable__11236.arr;
var len__11238 = earr__11237.length;
editable__11236.bitmap = (bit ^ editable__11236.bitmap);
cljs.core.array_copy.call(null,earr__11237,(2 * (i + 1)),earr__11237,(2 * i),(len__11238 - (2 * (i + 1))));
(earr__11237[(len__11238 - 2)] = null);
(earr__11237[(len__11238 - 1)] = null);
return editable__11236;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__11239 = this;
var inode__11240 = this;
var bit__11241 = (1 << ((hash >>> shift) & 0x01f));
var idx__11242 = cljs.core.bitmap_indexed_node_index.call(null,this__11239.bitmap,bit__11241);
if(((this__11239.bitmap & bit__11241) === 0))
{var n__11243 = cljs.core.bit_count.call(null,this__11239.bitmap);
if(((2 * n__11243) < this__11239.arr.length))
{var editable__11244 = inode__11240.ensure_editable(edit);
var earr__11245 = editable__11244.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__11245,(2 * idx__11242),earr__11245,(2 * (idx__11242 + 1)),(2 * (n__11243 - idx__11242)));
(earr__11245[(2 * idx__11242)] = key);
(earr__11245[((2 * idx__11242) + 1)] = val);
editable__11244.bitmap = (editable__11244.bitmap | bit__11241);
return editable__11244;
} else
{if((n__11243 >= 16))
{var nodes__11246 = cljs.core.make_array.call(null,32);
var jdx__11247 = ((hash >>> shift) & 0x01f);
(nodes__11246[jdx__11247] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__11248 = 0;
var j__11249 = 0;
while(true){
if((i__11248 < 32))
{if((((this__11239.bitmap >>> i__11248) & 1) === 0))
{{
var G__11302 = (i__11248 + 1);
var G__11303 = j__11249;
i__11248 = G__11302;
j__11249 = G__11303;
continue;
}
} else
{(nodes__11246[i__11248] = ((!(((this__11239.arr[j__11249]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__11239.arr[j__11249])),(this__11239.arr[j__11249]),(this__11239.arr[(j__11249 + 1)]),added_leaf_QMARK_):(this__11239.arr[(j__11249 + 1)])));
{
var G__11304 = (i__11248 + 1);
var G__11305 = (j__11249 + 2);
i__11248 = G__11304;
j__11249 = G__11305;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__11243 + 1),nodes__11246));
} else
{if("\uFDD0'else")
{var new_arr__11250 = cljs.core.make_array.call(null,(2 * (n__11243 + 4)));
cljs.core.array_copy.call(null,this__11239.arr,0,new_arr__11250,0,(2 * idx__11242));
(new_arr__11250[(2 * idx__11242)] = key);
(new_arr__11250[((2 * idx__11242) + 1)] = val);
cljs.core.array_copy.call(null,this__11239.arr,(2 * idx__11242),new_arr__11250,(2 * (idx__11242 + 1)),(2 * (n__11243 - idx__11242)));
added_leaf_QMARK_.val = true;
var editable__11251 = inode__11240.ensure_editable(edit);
editable__11251.arr = new_arr__11250;
editable__11251.bitmap = (editable__11251.bitmap | bit__11241);
return editable__11251;
} else
{return null;
}
}
}
} else
{var key_or_nil__11252 = (this__11239.arr[(2 * idx__11242)]);
var val_or_node__11253 = (this__11239.arr[((2 * idx__11242) + 1)]);
if((key_or_nil__11252 == null))
{var n__11254 = val_or_node__11253.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11254 === val_or_node__11253))
{return inode__11240;
} else
{return cljs.core.edit_and_set.call(null,inode__11240,edit,((2 * idx__11242) + 1),n__11254);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11252))
{if((val === val_or_node__11253))
{return inode__11240;
} else
{return cljs.core.edit_and_set.call(null,inode__11240,edit,((2 * idx__11242) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__11240,edit,(2 * idx__11242),null,((2 * idx__11242) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__11252,val_or_node__11253,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__11255 = this;
var inode__11256 = this;
return cljs.core.create_inode_seq.call(null,this__11255.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11257 = this;
var inode__11258 = this;
var bit__11259 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11257.bitmap & bit__11259) === 0))
{return inode__11258;
} else
{var idx__11260 = cljs.core.bitmap_indexed_node_index.call(null,this__11257.bitmap,bit__11259);
var key_or_nil__11261 = (this__11257.arr[(2 * idx__11260)]);
var val_or_node__11262 = (this__11257.arr[((2 * idx__11260) + 1)]);
if((key_or_nil__11261 == null))
{var n__11263 = val_or_node__11262.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__11263 === val_or_node__11262))
{return inode__11258;
} else
{if(!((n__11263 == null)))
{return cljs.core.edit_and_set.call(null,inode__11258,edit,((2 * idx__11260) + 1),n__11263);
} else
{if((this__11257.bitmap === bit__11259))
{return null;
} else
{if("\uFDD0'else")
{return inode__11258.edit_and_remove_pair(edit,bit__11259,idx__11260);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11261))
{(removed_leaf_QMARK_[0] = true);
return inode__11258.edit_and_remove_pair(edit,bit__11259,idx__11260);
} else
{if("\uFDD0'else")
{return inode__11258;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__11264 = this;
var inode__11265 = this;
if((e === this__11264.edit))
{return inode__11265;
} else
{var n__11266 = cljs.core.bit_count.call(null,this__11264.bitmap);
var new_arr__11267 = cljs.core.make_array.call(null,(((n__11266 < 0))?4:(2 * (n__11266 + 1))));
cljs.core.array_copy.call(null,this__11264.arr,0,new_arr__11267,0,(2 * n__11266));
return (new cljs.core.BitmapIndexedNode(e,this__11264.bitmap,new_arr__11267));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__11268 = this;
var inode__11269 = this;
return cljs.core.inode_kv_reduce.call(null,this__11268.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11270 = this;
var inode__11271 = this;
var bit__11272 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11270.bitmap & bit__11272) === 0))
{return not_found;
} else
{var idx__11273 = cljs.core.bitmap_indexed_node_index.call(null,this__11270.bitmap,bit__11272);
var key_or_nil__11274 = (this__11270.arr[(2 * idx__11273)]);
var val_or_node__11275 = (this__11270.arr[((2 * idx__11273) + 1)]);
if((key_or_nil__11274 == null))
{return val_or_node__11275.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11274))
{return cljs.core.PersistentVector.fromArray([key_or_nil__11274,val_or_node__11275], true);
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
var this__11276 = this;
var inode__11277 = this;
var bit__11278 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11276.bitmap & bit__11278) === 0))
{return inode__11277;
} else
{var idx__11279 = cljs.core.bitmap_indexed_node_index.call(null,this__11276.bitmap,bit__11278);
var key_or_nil__11280 = (this__11276.arr[(2 * idx__11279)]);
var val_or_node__11281 = (this__11276.arr[((2 * idx__11279) + 1)]);
if((key_or_nil__11280 == null))
{var n__11282 = val_or_node__11281.inode_without((shift + 5),hash,key);
if((n__11282 === val_or_node__11281))
{return inode__11277;
} else
{if(!((n__11282 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__11276.bitmap,cljs.core.clone_and_set.call(null,this__11276.arr,((2 * idx__11279) + 1),n__11282)));
} else
{if((this__11276.bitmap === bit__11278))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__11276.bitmap ^ bit__11278),cljs.core.remove_pair.call(null,this__11276.arr,idx__11279)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11280))
{return (new cljs.core.BitmapIndexedNode(null,(this__11276.bitmap ^ bit__11278),cljs.core.remove_pair.call(null,this__11276.arr,idx__11279)));
} else
{if("\uFDD0'else")
{return inode__11277;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11283 = this;
var inode__11284 = this;
var bit__11285 = (1 << ((hash >>> shift) & 0x01f));
var idx__11286 = cljs.core.bitmap_indexed_node_index.call(null,this__11283.bitmap,bit__11285);
if(((this__11283.bitmap & bit__11285) === 0))
{var n__11287 = cljs.core.bit_count.call(null,this__11283.bitmap);
if((n__11287 >= 16))
{var nodes__11288 = cljs.core.make_array.call(null,32);
var jdx__11289 = ((hash >>> shift) & 0x01f);
(nodes__11288[jdx__11289] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__11290 = 0;
var j__11291 = 0;
while(true){
if((i__11290 < 32))
{if((((this__11283.bitmap >>> i__11290) & 1) === 0))
{{
var G__11306 = (i__11290 + 1);
var G__11307 = j__11291;
i__11290 = G__11306;
j__11291 = G__11307;
continue;
}
} else
{(nodes__11288[i__11290] = ((!(((this__11283.arr[j__11291]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__11283.arr[j__11291])),(this__11283.arr[j__11291]),(this__11283.arr[(j__11291 + 1)]),added_leaf_QMARK_):(this__11283.arr[(j__11291 + 1)])));
{
var G__11308 = (i__11290 + 1);
var G__11309 = (j__11291 + 2);
i__11290 = G__11308;
j__11291 = G__11309;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__11287 + 1),nodes__11288));
} else
{var new_arr__11292 = cljs.core.make_array.call(null,(2 * (n__11287 + 1)));
cljs.core.array_copy.call(null,this__11283.arr,0,new_arr__11292,0,(2 * idx__11286));
(new_arr__11292[(2 * idx__11286)] = key);
(new_arr__11292[((2 * idx__11286) + 1)] = val);
cljs.core.array_copy.call(null,this__11283.arr,(2 * idx__11286),new_arr__11292,(2 * (idx__11286 + 1)),(2 * (n__11287 - idx__11286)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__11283.bitmap | bit__11285),new_arr__11292));
}
} else
{var key_or_nil__11293 = (this__11283.arr[(2 * idx__11286)]);
var val_or_node__11294 = (this__11283.arr[((2 * idx__11286) + 1)]);
if((key_or_nil__11293 == null))
{var n__11295 = val_or_node__11294.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11295 === val_or_node__11294))
{return inode__11284;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__11283.bitmap,cljs.core.clone_and_set.call(null,this__11283.arr,((2 * idx__11286) + 1),n__11295)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11293))
{if((val === val_or_node__11294))
{return inode__11284;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__11283.bitmap,cljs.core.clone_and_set.call(null,this__11283.arr,((2 * idx__11286) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__11283.bitmap,cljs.core.clone_and_set.call(null,this__11283.arr,(2 * idx__11286),null,((2 * idx__11286) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__11293,val_or_node__11294,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11296 = this;
var inode__11297 = this;
var bit__11298 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11296.bitmap & bit__11298) === 0))
{return not_found;
} else
{var idx__11299 = cljs.core.bitmap_indexed_node_index.call(null,this__11296.bitmap,bit__11298);
var key_or_nil__11300 = (this__11296.arr[(2 * idx__11299)]);
var val_or_node__11301 = (this__11296.arr[((2 * idx__11299) + 1)]);
if((key_or_nil__11300 == null))
{return val_or_node__11301.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11300))
{return val_or_node__11301;
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
var arr__11317 = array_node.arr;
var len__11318 = (2 * (array_node.cnt - 1));
var new_arr__11319 = cljs.core.make_array.call(null,len__11318);
var i__11320 = 0;
var j__11321 = 1;
var bitmap__11322 = 0;
while(true){
if((i__11320 < len__11318))
{if((function (){var and__3937__auto____11323 = !((i__11320 === idx));
if(and__3937__auto____11323)
{return !(((arr__11317[i__11320]) == null));
} else
{return and__3937__auto____11323;
}
})())
{(new_arr__11319[j__11321] = (arr__11317[i__11320]));
{
var G__11324 = (i__11320 + 1);
var G__11325 = (j__11321 + 2);
var G__11326 = (bitmap__11322 | (1 << i__11320));
i__11320 = G__11324;
j__11321 = G__11325;
bitmap__11322 = G__11326;
continue;
}
} else
{{
var G__11327 = (i__11320 + 1);
var G__11328 = j__11321;
var G__11329 = bitmap__11322;
i__11320 = G__11327;
j__11321 = G__11328;
bitmap__11322 = G__11329;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__11322,new_arr__11319));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__11330 = this;
var inode__11331 = this;
var idx__11332 = ((hash >>> shift) & 0x01f);
var node__11333 = (this__11330.arr[idx__11332]);
if((node__11333 == null))
{var editable__11334 = cljs.core.edit_and_set.call(null,inode__11331,edit,idx__11332,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__11334.cnt = (editable__11334.cnt + 1);
return editable__11334;
} else
{var n__11335 = node__11333.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11335 === node__11333))
{return inode__11331;
} else
{return cljs.core.edit_and_set.call(null,inode__11331,edit,idx__11332,n__11335);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__11336 = this;
var inode__11337 = this;
return cljs.core.create_array_node_seq.call(null,this__11336.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11338 = this;
var inode__11339 = this;
var idx__11340 = ((hash >>> shift) & 0x01f);
var node__11341 = (this__11338.arr[idx__11340]);
if((node__11341 == null))
{return inode__11339;
} else
{var n__11342 = node__11341.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__11342 === node__11341))
{return inode__11339;
} else
{if((n__11342 == null))
{if((this__11338.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__11339,edit,idx__11340);
} else
{var editable__11343 = cljs.core.edit_and_set.call(null,inode__11339,edit,idx__11340,n__11342);
editable__11343.cnt = (editable__11343.cnt - 1);
return editable__11343;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__11339,edit,idx__11340,n__11342);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__11344 = this;
var inode__11345 = this;
if((e === this__11344.edit))
{return inode__11345;
} else
{return (new cljs.core.ArrayNode(e,this__11344.cnt,this__11344.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__11346 = this;
var inode__11347 = this;
var len__11348 = this__11346.arr.length;
var i__11349 = 0;
var init__11350 = init;
while(true){
if((i__11349 < len__11348))
{var node__11351 = (this__11346.arr[i__11349]);
if(!((node__11351 == null)))
{var init__11352 = node__11351.kv_reduce(f,init__11350);
if(cljs.core.reduced_QMARK_.call(null,init__11352))
{return cljs.core.deref.call(null,init__11352);
} else
{{
var G__11371 = (i__11349 + 1);
var G__11372 = init__11352;
i__11349 = G__11371;
init__11350 = G__11372;
continue;
}
}
} else
{return null;
}
} else
{return init__11350;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11353 = this;
var inode__11354 = this;
var idx__11355 = ((hash >>> shift) & 0x01f);
var node__11356 = (this__11353.arr[idx__11355]);
if(!((node__11356 == null)))
{return node__11356.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__11357 = this;
var inode__11358 = this;
var idx__11359 = ((hash >>> shift) & 0x01f);
var node__11360 = (this__11357.arr[idx__11359]);
if(!((node__11360 == null)))
{var n__11361 = node__11360.inode_without((shift + 5),hash,key);
if((n__11361 === node__11360))
{return inode__11358;
} else
{if((n__11361 == null))
{if((this__11357.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__11358,null,idx__11359);
} else
{return (new cljs.core.ArrayNode(null,(this__11357.cnt - 1),cljs.core.clone_and_set.call(null,this__11357.arr,idx__11359,n__11361)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__11357.cnt,cljs.core.clone_and_set.call(null,this__11357.arr,idx__11359,n__11361)));
} else
{return null;
}
}
}
} else
{return inode__11358;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11362 = this;
var inode__11363 = this;
var idx__11364 = ((hash >>> shift) & 0x01f);
var node__11365 = (this__11362.arr[idx__11364]);
if((node__11365 == null))
{return (new cljs.core.ArrayNode(null,(this__11362.cnt + 1),cljs.core.clone_and_set.call(null,this__11362.arr,idx__11364,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__11366 = node__11365.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11366 === node__11365))
{return inode__11363;
} else
{return (new cljs.core.ArrayNode(null,this__11362.cnt,cljs.core.clone_and_set.call(null,this__11362.arr,idx__11364,n__11366)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11367 = this;
var inode__11368 = this;
var idx__11369 = ((hash >>> shift) & 0x01f);
var node__11370 = (this__11367.arr[idx__11369]);
if(!((node__11370 == null)))
{return node__11370.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__11375 = (2 * cnt);
var i__11376 = 0;
while(true){
if((i__11376 < lim__11375))
{if(cljs.core.key_test.call(null,key,(arr[i__11376])))
{return i__11376;
} else
{{
var G__11377 = (i__11376 + 2);
i__11376 = G__11377;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__11378 = this;
var inode__11379 = this;
if((hash === this__11378.collision_hash))
{var idx__11380 = cljs.core.hash_collision_node_find_index.call(null,this__11378.arr,this__11378.cnt,key);
if((idx__11380 === -1))
{if((this__11378.arr.length > (2 * this__11378.cnt)))
{var editable__11381 = cljs.core.edit_and_set.call(null,inode__11379,edit,(2 * this__11378.cnt),key,((2 * this__11378.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__11381.cnt = (editable__11381.cnt + 1);
return editable__11381;
} else
{var len__11382 = this__11378.arr.length;
var new_arr__11383 = cljs.core.make_array.call(null,(len__11382 + 2));
cljs.core.array_copy.call(null,this__11378.arr,0,new_arr__11383,0,len__11382);
(new_arr__11383[len__11382] = key);
(new_arr__11383[(len__11382 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__11379.ensure_editable_array(edit,(this__11378.cnt + 1),new_arr__11383);
}
} else
{if(((this__11378.arr[(idx__11380 + 1)]) === val))
{return inode__11379;
} else
{return cljs.core.edit_and_set.call(null,inode__11379,edit,(idx__11380 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__11378.collision_hash >>> shift) & 0x01f)),[null,inode__11379,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__11384 = this;
var inode__11385 = this;
return cljs.core.create_inode_seq.call(null,this__11384.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11386 = this;
var inode__11387 = this;
var idx__11388 = cljs.core.hash_collision_node_find_index.call(null,this__11386.arr,this__11386.cnt,key);
if((idx__11388 === -1))
{return inode__11387;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__11386.cnt === 1))
{return null;
} else
{var editable__11389 = inode__11387.ensure_editable(edit);
var earr__11390 = editable__11389.arr;
(earr__11390[idx__11388] = (earr__11390[((2 * this__11386.cnt) - 2)]));
(earr__11390[(idx__11388 + 1)] = (earr__11390[((2 * this__11386.cnt) - 1)]));
(earr__11390[((2 * this__11386.cnt) - 1)] = null);
(earr__11390[((2 * this__11386.cnt) - 2)] = null);
editable__11389.cnt = (editable__11389.cnt - 1);
return editable__11389;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__11391 = this;
var inode__11392 = this;
if((e === this__11391.edit))
{return inode__11392;
} else
{var new_arr__11393 = cljs.core.make_array.call(null,(2 * (this__11391.cnt + 1)));
cljs.core.array_copy.call(null,this__11391.arr,0,new_arr__11393,0,(2 * this__11391.cnt));
return (new cljs.core.HashCollisionNode(e,this__11391.collision_hash,this__11391.cnt,new_arr__11393));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__11394 = this;
var inode__11395 = this;
return cljs.core.inode_kv_reduce.call(null,this__11394.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11396 = this;
var inode__11397 = this;
var idx__11398 = cljs.core.hash_collision_node_find_index.call(null,this__11396.arr,this__11396.cnt,key);
if((idx__11398 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__11396.arr[idx__11398])))
{return cljs.core.PersistentVector.fromArray([(this__11396.arr[idx__11398]),(this__11396.arr[(idx__11398 + 1)])], true);
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
var this__11399 = this;
var inode__11400 = this;
var idx__11401 = cljs.core.hash_collision_node_find_index.call(null,this__11399.arr,this__11399.cnt,key);
if((idx__11401 === -1))
{return inode__11400;
} else
{if((this__11399.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__11399.collision_hash,(this__11399.cnt - 1),cljs.core.remove_pair.call(null,this__11399.arr,cljs.core.quot.call(null,idx__11401,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11402 = this;
var inode__11403 = this;
if((hash === this__11402.collision_hash))
{var idx__11404 = cljs.core.hash_collision_node_find_index.call(null,this__11402.arr,this__11402.cnt,key);
if((idx__11404 === -1))
{var len__11405 = this__11402.arr.length;
var new_arr__11406 = cljs.core.make_array.call(null,(len__11405 + 2));
cljs.core.array_copy.call(null,this__11402.arr,0,new_arr__11406,0,len__11405);
(new_arr__11406[len__11405] = key);
(new_arr__11406[(len__11405 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__11402.collision_hash,(this__11402.cnt + 1),new_arr__11406));
} else
{if(cljs.core._EQ_.call(null,(this__11402.arr[idx__11404]),val))
{return inode__11403;
} else
{return (new cljs.core.HashCollisionNode(null,this__11402.collision_hash,this__11402.cnt,cljs.core.clone_and_set.call(null,this__11402.arr,(idx__11404 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__11402.collision_hash >>> shift) & 0x01f)),[null,inode__11403])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11407 = this;
var inode__11408 = this;
var idx__11409 = cljs.core.hash_collision_node_find_index.call(null,this__11407.arr,this__11407.cnt,key);
if((idx__11409 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__11407.arr[idx__11409])))
{return (this__11407.arr[(idx__11409 + 1)]);
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
var this__11410 = this;
var inode__11411 = this;
if((e === this__11410.edit))
{this__11410.arr = array;
this__11410.cnt = count;
return inode__11411;
} else
{return (new cljs.core.HashCollisionNode(this__11410.edit,this__11410.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__11416 = cljs.core.hash.call(null,key1);
if((key1hash__11416 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__11416,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___11417 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__11416,key1,val1,added_leaf_QMARK___11417).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___11417);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__11418 = cljs.core.hash.call(null,key1);
if((key1hash__11418 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__11418,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___11419 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__11418,key1,val1,added_leaf_QMARK___11419).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___11419);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11420 = this;
var h__2225__auto____11421 = this__11420.__hash;
if(!((h__2225__auto____11421 == null)))
{return h__2225__auto____11421;
} else
{var h__2225__auto____11422 = cljs.core.hash_coll.call(null,coll);
this__11420.__hash = h__2225__auto____11422;
return h__2225__auto____11422;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11423 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__11424 = this;
var this__11425 = this;
return cljs.core.pr_str.call(null,this__11425);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11426 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11427 = this;
if((this__11427.s == null))
{return cljs.core.PersistentVector.fromArray([(this__11427.nodes[this__11427.i]),(this__11427.nodes[(this__11427.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__11427.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11428 = this;
if((this__11428.s == null))
{return cljs.core.create_inode_seq.call(null,this__11428.nodes,(this__11428.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__11428.nodes,this__11428.i,cljs.core.next.call(null,this__11428.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11429 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11430 = this;
return (new cljs.core.NodeSeq(meta,this__11430.nodes,this__11430.i,this__11430.s,this__11430.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11431 = this;
return this__11431.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11432 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11432.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__11439 = nodes.length;
var j__11440 = i;
while(true){
if((j__11440 < len__11439))
{if(!(((nodes[j__11440]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__11440,null,null));
} else
{var temp__4086__auto____11441 = (nodes[(j__11440 + 1)]);
if(cljs.core.truth_(temp__4086__auto____11441))
{var node__11442 = temp__4086__auto____11441;
var temp__4086__auto____11443 = node__11442.inode_seq();
if(cljs.core.truth_(temp__4086__auto____11443))
{var node_seq__11444 = temp__4086__auto____11443;
return (new cljs.core.NodeSeq(null,nodes,(j__11440 + 2),node_seq__11444,null));
} else
{{
var G__11445 = (j__11440 + 2);
j__11440 = G__11445;
continue;
}
}
} else
{{
var G__11446 = (j__11440 + 2);
j__11440 = G__11446;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11447 = this;
var h__2225__auto____11448 = this__11447.__hash;
if(!((h__2225__auto____11448 == null)))
{return h__2225__auto____11448;
} else
{var h__2225__auto____11449 = cljs.core.hash_coll.call(null,coll);
this__11447.__hash = h__2225__auto____11449;
return h__2225__auto____11449;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11450 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__11451 = this;
var this__11452 = this;
return cljs.core.pr_str.call(null,this__11452);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11453 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11454 = this;
return cljs.core.first.call(null,this__11454.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11455 = this;
return cljs.core.create_array_node_seq.call(null,null,this__11455.nodes,this__11455.i,cljs.core.next.call(null,this__11455.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11456 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11457 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__11457.nodes,this__11457.i,this__11457.s,this__11457.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11458 = this;
return this__11458.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11459 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11459.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__11466 = nodes.length;
var j__11467 = i;
while(true){
if((j__11467 < len__11466))
{var temp__4086__auto____11468 = (nodes[j__11467]);
if(cljs.core.truth_(temp__4086__auto____11468))
{var nj__11469 = temp__4086__auto____11468;
var temp__4086__auto____11470 = nj__11469.inode_seq();
if(cljs.core.truth_(temp__4086__auto____11470))
{var ns__11471 = temp__4086__auto____11470;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__11467 + 1),ns__11471,null));
} else
{{
var G__11472 = (j__11467 + 1);
j__11467 = G__11472;
continue;
}
}
} else
{{
var G__11473 = (j__11467 + 1);
j__11467 = G__11473;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__11476 = this;
return (new cljs.core.TransientHashMap({},this__11476.root,this__11476.cnt,this__11476.has_nil_QMARK_,this__11476.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11477 = this;
var h__2225__auto____11478 = this__11477.__hash;
if(!((h__2225__auto____11478 == null)))
{return h__2225__auto____11478;
} else
{var h__2225__auto____11479 = cljs.core.hash_imap.call(null,coll);
this__11477.__hash = h__2225__auto____11479;
return h__2225__auto____11479;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11480 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11481 = this;
if((k == null))
{if(this__11481.has_nil_QMARK_)
{return this__11481.nil_val;
} else
{return not_found;
}
} else
{if((this__11481.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__11481.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11482 = this;
if((k == null))
{if((function (){var and__3937__auto____11483 = this__11482.has_nil_QMARK_;
if(and__3937__auto____11483)
{return (v === this__11482.nil_val);
} else
{return and__3937__auto____11483;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11482.meta,((this__11482.has_nil_QMARK_)?this__11482.cnt:(this__11482.cnt + 1)),this__11482.root,true,v,null));
}
} else
{var added_leaf_QMARK___11484 = (new cljs.core.Box(false));
var new_root__11485 = (((this__11482.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__11482.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___11484);
if((new_root__11485 === this__11482.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11482.meta,((added_leaf_QMARK___11484.val)?(this__11482.cnt + 1):this__11482.cnt),new_root__11485,this__11482.has_nil_QMARK_,this__11482.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11486 = this;
if((k == null))
{return this__11486.has_nil_QMARK_;
} else
{if((this__11486.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__11486.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__11509 = null;
var G__11509__2 = (function (this_sym11487,k){
var this__11489 = this;
var this_sym11487__11490 = this;
var coll__11491 = this_sym11487__11490;
return coll__11491.cljs$core$ILookup$_lookup$arity$2(coll__11491,k);
});
var G__11509__3 = (function (this_sym11488,k,not_found){
var this__11489 = this;
var this_sym11488__11492 = this;
var coll__11493 = this_sym11488__11492;
return coll__11493.cljs$core$ILookup$_lookup$arity$3(coll__11493,k,not_found);
});
G__11509 = function(this_sym11488,k,not_found){
switch(arguments.length){
case 2:
return G__11509__2.call(this,this_sym11488,k);
case 3:
return G__11509__3.call(this,this_sym11488,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11509;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym11474,args11475){
var this__11494 = this;
return this_sym11474.call.apply(this_sym11474,[this_sym11474].concat(args11475.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11495 = this;
var init__11496 = ((this__11495.has_nil_QMARK_)?f.call(null,init,null,this__11495.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__11496))
{return cljs.core.deref.call(null,init__11496);
} else
{if(!((this__11495.root == null)))
{return this__11495.root.kv_reduce(f,init__11496);
} else
{if("\uFDD0'else")
{return init__11496;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11497 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__11498 = this;
var this__11499 = this;
return cljs.core.pr_str.call(null,this__11499);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11500 = this;
if((this__11500.cnt > 0))
{var s__11501 = ((!((this__11500.root == null)))?this__11500.root.inode_seq():null);
if(this__11500.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__11500.nil_val], true),s__11501);
} else
{return s__11501;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11502 = this;
return this__11502.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11503 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11504 = this;
return (new cljs.core.PersistentHashMap(meta,this__11504.cnt,this__11504.root,this__11504.has_nil_QMARK_,this__11504.nil_val,this__11504.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11505 = this;
return this__11505.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11506 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__11506.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11507 = this;
if((k == null))
{if(this__11507.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__11507.meta,(this__11507.cnt - 1),this__11507.root,false,null,null));
} else
{return coll;
}
} else
{if((this__11507.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__11508 = this__11507.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__11508 === this__11507.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11507.meta,(this__11507.cnt - 1),new_root__11508,this__11507.has_nil_QMARK_,this__11507.nil_val,null));
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
var len__11510 = ks.length;
var i__11511 = 0;
var out__11512 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__11511 < len__11510))
{{
var G__11513 = (i__11511 + 1);
var G__11514 = cljs.core.assoc_BANG_.call(null,out__11512,(ks[i__11511]),(vs[i__11511]));
i__11511 = G__11513;
out__11512 = G__11514;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11512);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__11515 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__11516 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__11517 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11518 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__11519 = this;
if((k == null))
{if(this__11519.has_nil_QMARK_)
{return this__11519.nil_val;
} else
{return null;
}
} else
{if((this__11519.root == null))
{return null;
} else
{return this__11519.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__11520 = this;
if((k == null))
{if(this__11520.has_nil_QMARK_)
{return this__11520.nil_val;
} else
{return not_found;
}
} else
{if((this__11520.root == null))
{return not_found;
} else
{return this__11520.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11521 = this;
if(this__11521.edit)
{return this__11521.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__11522 = this;
var tcoll__11523 = this;
if(this__11522.edit)
{if((function (){var G__11524__11525 = o;
if(G__11524__11525)
{if((function (){var or__3939__auto____11526 = (G__11524__11525.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3939__auto____11526)
{return or__3939__auto____11526;
} else
{return G__11524__11525.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__11524__11525.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11524__11525);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11524__11525);
}
})())
{return tcoll__11523.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__11527 = cljs.core.seq.call(null,o);
var tcoll__11528 = tcoll__11523;
while(true){
var temp__4086__auto____11529 = cljs.core.first.call(null,es__11527);
if(cljs.core.truth_(temp__4086__auto____11529))
{var e__11530 = temp__4086__auto____11529;
{
var G__11541 = cljs.core.next.call(null,es__11527);
var G__11542 = tcoll__11528.assoc_BANG_(cljs.core.key.call(null,e__11530),cljs.core.val.call(null,e__11530));
es__11527 = G__11541;
tcoll__11528 = G__11542;
continue;
}
} else
{return tcoll__11528;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__11531 = this;
var tcoll__11532 = this;
if(this__11531.edit)
{if((k == null))
{if((this__11531.nil_val === v))
{} else
{this__11531.nil_val = v;
}
if(this__11531.has_nil_QMARK_)
{} else
{this__11531.count = (this__11531.count + 1);
this__11531.has_nil_QMARK_ = true;
}
return tcoll__11532;
} else
{var added_leaf_QMARK___11533 = (new cljs.core.Box(false));
var node__11534 = (((this__11531.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__11531.root).inode_assoc_BANG_(this__11531.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___11533);
if((node__11534 === this__11531.root))
{} else
{this__11531.root = node__11534;
}
if(added_leaf_QMARK___11533.val)
{this__11531.count = (this__11531.count + 1);
} else
{}
return tcoll__11532;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__11535 = this;
var tcoll__11536 = this;
if(this__11535.edit)
{if((k == null))
{if(this__11535.has_nil_QMARK_)
{this__11535.has_nil_QMARK_ = false;
this__11535.nil_val = null;
this__11535.count = (this__11535.count - 1);
return tcoll__11536;
} else
{return tcoll__11536;
}
} else
{if((this__11535.root == null))
{return tcoll__11536;
} else
{var removed_leaf_QMARK___11537 = (new cljs.core.Box(false));
var node__11538 = this__11535.root.inode_without_BANG_(this__11535.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___11537);
if((node__11538 === this__11535.root))
{} else
{this__11535.root = node__11538;
}
if(cljs.core.truth_((removed_leaf_QMARK___11537[0])))
{this__11535.count = (this__11535.count - 1);
} else
{}
return tcoll__11536;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__11539 = this;
var tcoll__11540 = this;
if(this__11539.edit)
{this__11539.edit = null;
return (new cljs.core.PersistentHashMap(null,this__11539.count,this__11539.root,this__11539.has_nil_QMARK_,this__11539.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__11545 = node;
var stack__11546 = stack;
while(true){
if(!((t__11545 == null)))
{{
var G__11547 = ((ascending_QMARK_)?t__11545.left:t__11545.right);
var G__11548 = cljs.core.conj.call(null,stack__11546,t__11545);
t__11545 = G__11547;
stack__11546 = G__11548;
continue;
}
} else
{return stack__11546;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11549 = this;
var h__2225__auto____11550 = this__11549.__hash;
if(!((h__2225__auto____11550 == null)))
{return h__2225__auto____11550;
} else
{var h__2225__auto____11551 = cljs.core.hash_coll.call(null,coll);
this__11549.__hash = h__2225__auto____11551;
return h__2225__auto____11551;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11552 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__11553 = this;
var this__11554 = this;
return cljs.core.pr_str.call(null,this__11554);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11555 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11556 = this;
if((this__11556.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__11556.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__11557 = this;
return cljs.core.peek.call(null,this__11557.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__11558 = this;
var t__11559 = cljs.core.first.call(null,this__11558.stack);
var next_stack__11560 = cljs.core.tree_map_seq_push.call(null,((this__11558.ascending_QMARK_)?t__11559.right:t__11559.left),cljs.core.next.call(null,this__11558.stack),this__11558.ascending_QMARK_);
if(!((next_stack__11560 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__11560,this__11558.ascending_QMARK_,(this__11558.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11561 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11562 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__11562.stack,this__11562.ascending_QMARK_,this__11562.cnt,this__11562.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11563 = this;
return this__11563.meta;
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
{if((function (){var and__3937__auto____11565 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3937__auto____11565)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3937__auto____11565;
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
{if((function (){var and__3937__auto____11567 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3937__auto____11567)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3937__auto____11567;
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
var init__11571 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__11571))
{return cljs.core.deref.call(null,init__11571);
} else
{var init__11572 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__11571):init__11571);
if(cljs.core.reduced_QMARK_.call(null,init__11572))
{return cljs.core.deref.call(null,init__11572);
} else
{var init__11573 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__11572):init__11572);
if(cljs.core.reduced_QMARK_.call(null,init__11573))
{return cljs.core.deref.call(null,init__11573);
} else
{return init__11573;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11576 = this;
var h__2225__auto____11577 = this__11576.__hash;
if(!((h__2225__auto____11577 == null)))
{return h__2225__auto____11577;
} else
{var h__2225__auto____11578 = cljs.core.hash_coll.call(null,coll);
this__11576.__hash = h__2225__auto____11578;
return h__2225__auto____11578;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__11579 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__11580 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__11581 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__11581.key,this__11581.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__11629 = null;
var G__11629__2 = (function (this_sym11582,k){
var this__11584 = this;
var this_sym11582__11585 = this;
var node__11586 = this_sym11582__11585;
return node__11586.cljs$core$ILookup$_lookup$arity$2(node__11586,k);
});
var G__11629__3 = (function (this_sym11583,k,not_found){
var this__11584 = this;
var this_sym11583__11587 = this;
var node__11588 = this_sym11583__11587;
return node__11588.cljs$core$ILookup$_lookup$arity$3(node__11588,k,not_found);
});
G__11629 = function(this_sym11583,k,not_found){
switch(arguments.length){
case 2:
return G__11629__2.call(this,this_sym11583,k);
case 3:
return G__11629__3.call(this,this_sym11583,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11629;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym11574,args11575){
var this__11589 = this;
return this_sym11574.call.apply(this_sym11574,[this_sym11574].concat(args11575.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__11590 = this;
return cljs.core.PersistentVector.fromArray([this__11590.key,this__11590.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__11591 = this;
return this__11591.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__11592 = this;
return this__11592.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__11593 = this;
var node__11594 = this;
return ins.balance_right(node__11594);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__11595 = this;
var node__11596 = this;
return (new cljs.core.RedNode(this__11595.key,this__11595.val,this__11595.left,this__11595.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__11597 = this;
var node__11598 = this;
return cljs.core.balance_right_del.call(null,this__11597.key,this__11597.val,this__11597.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__11599 = this;
var node__11600 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__11601 = this;
var node__11602 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__11602,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__11603 = this;
var node__11604 = this;
return cljs.core.balance_left_del.call(null,this__11603.key,this__11603.val,del,this__11603.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__11605 = this;
var node__11606 = this;
return ins.balance_left(node__11606);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__11607 = this;
var node__11608 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__11608,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__11630 = null;
var G__11630__0 = (function (){
var this__11609 = this;
var this__11611 = this;
return cljs.core.pr_str.call(null,this__11611);
});
G__11630 = function(){
switch(arguments.length){
case 0:
return G__11630__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11630;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__11612 = this;
var node__11613 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__11613,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__11614 = this;
var node__11615 = this;
return node__11615;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__11616 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__11617 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__11618 = this;
return cljs.core.list.call(null,this__11618.key,this__11618.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__11619 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__11620 = this;
return this__11620.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__11621 = this;
return cljs.core.PersistentVector.fromArray([this__11621.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__11622 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__11622.key,this__11622.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11623 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__11624 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__11624.key,this__11624.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__11625 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__11626 = this;
if((n === 0))
{return this__11626.key;
} else
{if((n === 1))
{return this__11626.val;
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
var this__11627 = this;
if((n === 0))
{return this__11627.key;
} else
{if((n === 1))
{return this__11627.val;
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
var this__11628 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11633 = this;
var h__2225__auto____11634 = this__11633.__hash;
if(!((h__2225__auto____11634 == null)))
{return h__2225__auto____11634;
} else
{var h__2225__auto____11635 = cljs.core.hash_coll.call(null,coll);
this__11633.__hash = h__2225__auto____11635;
return h__2225__auto____11635;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__11636 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__11637 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__11638 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__11638.key,this__11638.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__11686 = null;
var G__11686__2 = (function (this_sym11639,k){
var this__11641 = this;
var this_sym11639__11642 = this;
var node__11643 = this_sym11639__11642;
return node__11643.cljs$core$ILookup$_lookup$arity$2(node__11643,k);
});
var G__11686__3 = (function (this_sym11640,k,not_found){
var this__11641 = this;
var this_sym11640__11644 = this;
var node__11645 = this_sym11640__11644;
return node__11645.cljs$core$ILookup$_lookup$arity$3(node__11645,k,not_found);
});
G__11686 = function(this_sym11640,k,not_found){
switch(arguments.length){
case 2:
return G__11686__2.call(this,this_sym11640,k);
case 3:
return G__11686__3.call(this,this_sym11640,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11686;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym11631,args11632){
var this__11646 = this;
return this_sym11631.call.apply(this_sym11631,[this_sym11631].concat(args11632.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__11647 = this;
return cljs.core.PersistentVector.fromArray([this__11647.key,this__11647.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__11648 = this;
return this__11648.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__11649 = this;
return this__11649.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__11650 = this;
var node__11651 = this;
return (new cljs.core.RedNode(this__11650.key,this__11650.val,this__11650.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__11652 = this;
var node__11653 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__11654 = this;
var node__11655 = this;
return (new cljs.core.RedNode(this__11654.key,this__11654.val,this__11654.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__11656 = this;
var node__11657 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__11658 = this;
var node__11659 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__11659,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__11660 = this;
var node__11661 = this;
return (new cljs.core.RedNode(this__11660.key,this__11660.val,del,this__11660.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__11662 = this;
var node__11663 = this;
return (new cljs.core.RedNode(this__11662.key,this__11662.val,ins,this__11662.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__11664 = this;
var node__11665 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11664.left))
{return (new cljs.core.RedNode(this__11664.key,this__11664.val,this__11664.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__11664.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11664.right))
{return (new cljs.core.RedNode(this__11664.right.key,this__11664.right.val,(new cljs.core.BlackNode(this__11664.key,this__11664.val,this__11664.left,this__11664.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__11664.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__11665,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__11687 = null;
var G__11687__0 = (function (){
var this__11666 = this;
var this__11668 = this;
return cljs.core.pr_str.call(null,this__11668);
});
G__11687 = function(){
switch(arguments.length){
case 0:
return G__11687__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11687;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__11669 = this;
var node__11670 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11669.right))
{return (new cljs.core.RedNode(this__11669.key,this__11669.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__11669.left,null)),this__11669.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11669.left))
{return (new cljs.core.RedNode(this__11669.left.key,this__11669.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__11669.left.left,null)),(new cljs.core.BlackNode(this__11669.key,this__11669.val,this__11669.left.right,this__11669.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__11670,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__11671 = this;
var node__11672 = this;
return (new cljs.core.BlackNode(this__11671.key,this__11671.val,this__11671.left,this__11671.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__11673 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__11674 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__11675 = this;
return cljs.core.list.call(null,this__11675.key,this__11675.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__11676 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__11677 = this;
return this__11677.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__11678 = this;
return cljs.core.PersistentVector.fromArray([this__11678.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__11679 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__11679.key,this__11679.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11680 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__11681 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__11681.key,this__11681.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__11682 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__11683 = this;
if((n === 0))
{return this__11683.key;
} else
{if((n === 1))
{return this__11683.val;
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
var this__11684 = this;
if((n === 0))
{return this__11684.key;
} else
{if((n === 1))
{return this__11684.val;
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
var this__11685 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__11691 = comp.call(null,k,tree.key);
if((c__11691 === 0))
{(found[0] = tree);
return null;
} else
{if((c__11691 < 0))
{var ins__11692 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__11692 == null)))
{return tree.add_left(ins__11692);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__11693 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__11693 == null)))
{return tree.add_right(ins__11693);
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
{var app__11696 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__11696))
{return (new cljs.core.RedNode(app__11696.key,app__11696.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__11696.left,null)),(new cljs.core.RedNode(right.key,right.val,app__11696.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__11696,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__11697 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__11697))
{return (new cljs.core.RedNode(app__11697.key,app__11697.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__11697.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__11697.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__11697,right.right,null)));
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
{var c__11703 = comp.call(null,k,tree.key);
if((c__11703 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__11703 < 0))
{var del__11704 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3939__auto____11705 = !((del__11704 == null));
if(or__3939__auto____11705)
{return or__3939__auto____11705;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__11704,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__11704,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__11706 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3939__auto____11707 = !((del__11706 == null));
if(or__3939__auto____11707)
{return or__3939__auto____11707;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__11706);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__11706,null));
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
var tk__11710 = tree.key;
var c__11711 = comp.call(null,k,tk__11710);
if((c__11711 === 0))
{return tree.replace(tk__11710,v,tree.left,tree.right);
} else
{if((c__11711 < 0))
{return tree.replace(tk__11710,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__11710,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11714 = this;
var h__2225__auto____11715 = this__11714.__hash;
if(!((h__2225__auto____11715 == null)))
{return h__2225__auto____11715;
} else
{var h__2225__auto____11716 = cljs.core.hash_imap.call(null,coll);
this__11714.__hash = h__2225__auto____11716;
return h__2225__auto____11716;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11717 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11718 = this;
var n__11719 = coll.entry_at(k);
if(!((n__11719 == null)))
{return n__11719.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11720 = this;
var found__11721 = [null];
var t__11722 = cljs.core.tree_map_add.call(null,this__11720.comp,this__11720.tree,k,v,found__11721);
if((t__11722 == null))
{var found_node__11723 = cljs.core.nth.call(null,found__11721,0);
if(cljs.core._EQ_.call(null,v,found_node__11723.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11720.comp,cljs.core.tree_map_replace.call(null,this__11720.comp,this__11720.tree,k,v),this__11720.cnt,this__11720.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11720.comp,t__11722.blacken(),(this__11720.cnt + 1),this__11720.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11724 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__11758 = null;
var G__11758__2 = (function (this_sym11725,k){
var this__11727 = this;
var this_sym11725__11728 = this;
var coll__11729 = this_sym11725__11728;
return coll__11729.cljs$core$ILookup$_lookup$arity$2(coll__11729,k);
});
var G__11758__3 = (function (this_sym11726,k,not_found){
var this__11727 = this;
var this_sym11726__11730 = this;
var coll__11731 = this_sym11726__11730;
return coll__11731.cljs$core$ILookup$_lookup$arity$3(coll__11731,k,not_found);
});
G__11758 = function(this_sym11726,k,not_found){
switch(arguments.length){
case 2:
return G__11758__2.call(this,this_sym11726,k);
case 3:
return G__11758__3.call(this,this_sym11726,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11758;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym11712,args11713){
var this__11732 = this;
return this_sym11712.call.apply(this_sym11712,[this_sym11712].concat(args11713.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11733 = this;
if(!((this__11733.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__11733.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11734 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11735 = this;
if((this__11735.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11735.tree,false,this__11735.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__11736 = this;
var this__11737 = this;
return cljs.core.pr_str.call(null,this__11737);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__11738 = this;
var coll__11739 = this;
var t__11740 = this__11738.tree;
while(true){
if(!((t__11740 == null)))
{var c__11741 = this__11738.comp.call(null,k,t__11740.key);
if((c__11741 === 0))
{return t__11740;
} else
{if((c__11741 < 0))
{{
var G__11759 = t__11740.left;
t__11740 = G__11759;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__11760 = t__11740.right;
t__11740 = G__11760;
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
var this__11742 = this;
if((this__11742.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11742.tree,ascending_QMARK_,this__11742.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11743 = this;
if((this__11743.cnt > 0))
{var stack__11744 = null;
var t__11745 = this__11743.tree;
while(true){
if(!((t__11745 == null)))
{var c__11746 = this__11743.comp.call(null,k,t__11745.key);
if((c__11746 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__11744,t__11745),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__11746 < 0))
{{
var G__11761 = cljs.core.conj.call(null,stack__11744,t__11745);
var G__11762 = t__11745.left;
stack__11744 = G__11761;
t__11745 = G__11762;
continue;
}
} else
{{
var G__11763 = stack__11744;
var G__11764 = t__11745.right;
stack__11744 = G__11763;
t__11745 = G__11764;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__11746 > 0))
{{
var G__11765 = cljs.core.conj.call(null,stack__11744,t__11745);
var G__11766 = t__11745.right;
stack__11744 = G__11765;
t__11745 = G__11766;
continue;
}
} else
{{
var G__11767 = stack__11744;
var G__11768 = t__11745.left;
stack__11744 = G__11767;
t__11745 = G__11768;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__11744 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__11744,ascending_QMARK_,-1,null));
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
var this__11747 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11748 = this;
return this__11748.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11749 = this;
if((this__11749.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11749.tree,true,this__11749.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11750 = this;
return this__11750.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11751 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11752 = this;
return (new cljs.core.PersistentTreeMap(this__11752.comp,this__11752.tree,this__11752.cnt,meta,this__11752.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11753 = this;
return this__11753.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11754 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__11754.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11755 = this;
var found__11756 = [null];
var t__11757 = cljs.core.tree_map_remove.call(null,this__11755.comp,this__11755.tree,k,found__11756);
if((t__11757 == null))
{if((cljs.core.nth.call(null,found__11756,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11755.comp,null,0,this__11755.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11755.comp,t__11757.blacken(),(this__11755.cnt - 1),this__11755.meta,null));
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
var in__11771 = cljs.core.seq.call(null,keyvals);
var out__11772 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__11771)
{{
var G__11773 = cljs.core.nnext.call(null,in__11771);
var G__11774 = cljs.core.assoc_BANG_.call(null,out__11772,cljs.core.first.call(null,in__11771),cljs.core.second.call(null,in__11771));
in__11771 = G__11773;
out__11772 = G__11774;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11772);
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
hash_map.cljs$lang$applyTo = (function (arglist__11775){
var keyvals = cljs.core.seq(arglist__11775);;
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
array_map.cljs$lang$applyTo = (function (arglist__11776){
var keyvals = cljs.core.seq(arglist__11776);;
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
var ks__11780 = [];
var obj__11781 = {};
var kvs__11782 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__11782)
{ks__11780.push(cljs.core.first.call(null,kvs__11782));
(obj__11781[cljs.core.first.call(null,kvs__11782)] = cljs.core.second.call(null,kvs__11782));
{
var G__11783 = cljs.core.nnext.call(null,kvs__11782);
kvs__11782 = G__11783;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__11780,obj__11781);
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
obj_map.cljs$lang$applyTo = (function (arglist__11784){
var keyvals = cljs.core.seq(arglist__11784);;
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
var in__11787 = cljs.core.seq.call(null,keyvals);
var out__11788 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__11787)
{{
var G__11789 = cljs.core.nnext.call(null,in__11787);
var G__11790 = cljs.core.assoc.call(null,out__11788,cljs.core.first.call(null,in__11787),cljs.core.second.call(null,in__11787));
in__11787 = G__11789;
out__11788 = G__11790;
continue;
}
} else
{return out__11788;
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
sorted_map.cljs$lang$applyTo = (function (arglist__11791){
var keyvals = cljs.core.seq(arglist__11791);;
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
var in__11794 = cljs.core.seq.call(null,keyvals);
var out__11795 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__11794)
{{
var G__11796 = cljs.core.nnext.call(null,in__11794);
var G__11797 = cljs.core.assoc.call(null,out__11795,cljs.core.first.call(null,in__11794),cljs.core.second.call(null,in__11794));
in__11794 = G__11796;
out__11795 = G__11797;
continue;
}
} else
{return out__11795;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__11798){
var comparator = cljs.core.first(arglist__11798);
var keyvals = cljs.core.rest(arglist__11798);
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
{return cljs.core.reduce.call(null,(function (p1__11799_SHARP_,p2__11800_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3939__auto____11802 = p1__11799_SHARP_;
if(cljs.core.truth_(or__3939__auto____11802))
{return or__3939__auto____11802;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__11800_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__11803){
var maps = cljs.core.seq(arglist__11803);;
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
{var merge_entry__11811 = (function (m,e){
var k__11809 = cljs.core.first.call(null,e);
var v__11810 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__11809))
{return cljs.core.assoc.call(null,m,k__11809,f.call(null,cljs.core._lookup.call(null,m,k__11809,null),v__11810));
} else
{return cljs.core.assoc.call(null,m,k__11809,v__11810);
}
});
var merge2__11813 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__11811,(function (){var or__3939__auto____11812 = m1;
if(cljs.core.truth_(or__3939__auto____11812))
{return or__3939__auto____11812;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__11813,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__11814){
var f = cljs.core.first(arglist__11814);
var maps = cljs.core.rest(arglist__11814);
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
var ret__11819 = cljs.core.ObjMap.EMPTY;
var keys__11820 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__11820)
{var key__11821 = cljs.core.first.call(null,keys__11820);
var entry__11822 = cljs.core._lookup.call(null,map,key__11821,"\uFDD0'cljs.core/not-found");
{
var G__11823 = ((cljs.core.not_EQ_.call(null,entry__11822,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__11819,key__11821,entry__11822):ret__11819);
var G__11824 = cljs.core.next.call(null,keys__11820);
ret__11819 = G__11823;
keys__11820 = G__11824;
continue;
}
} else
{return ret__11819;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__11828 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__11828.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11829 = this;
var h__2225__auto____11830 = this__11829.__hash;
if(!((h__2225__auto____11830 == null)))
{return h__2225__auto____11830;
} else
{var h__2225__auto____11831 = cljs.core.hash_iset.call(null,coll);
this__11829.__hash = h__2225__auto____11831;
return h__2225__auto____11831;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11832 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11833 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11833.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__11854 = null;
var G__11854__2 = (function (this_sym11834,k){
var this__11836 = this;
var this_sym11834__11837 = this;
var coll__11838 = this_sym11834__11837;
return coll__11838.cljs$core$ILookup$_lookup$arity$2(coll__11838,k);
});
var G__11854__3 = (function (this_sym11835,k,not_found){
var this__11836 = this;
var this_sym11835__11839 = this;
var coll__11840 = this_sym11835__11839;
return coll__11840.cljs$core$ILookup$_lookup$arity$3(coll__11840,k,not_found);
});
G__11854 = function(this_sym11835,k,not_found){
switch(arguments.length){
case 2:
return G__11854__2.call(this,this_sym11835,k);
case 3:
return G__11854__3.call(this,this_sym11835,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11854;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym11826,args11827){
var this__11841 = this;
return this_sym11826.call.apply(this_sym11826,[this_sym11826].concat(args11827.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11842 = this;
return (new cljs.core.PersistentHashSet(this__11842.meta,cljs.core.assoc.call(null,this__11842.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__11843 = this;
var this__11844 = this;
return cljs.core.pr_str.call(null,this__11844);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11845 = this;
return cljs.core.keys.call(null,this__11845.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11846 = this;
return (new cljs.core.PersistentHashSet(this__11846.meta,cljs.core.dissoc.call(null,this__11846.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11847 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11848 = this;
var and__3937__auto____11849 = cljs.core.set_QMARK_.call(null,other);
if(and__3937__auto____11849)
{var and__3937__auto____11850 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3937__auto____11850)
{return cljs.core.every_QMARK_.call(null,(function (p1__11825_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11825_SHARP_);
}),other);
} else
{return and__3937__auto____11850;
}
} else
{return and__3937__auto____11849;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11851 = this;
return (new cljs.core.PersistentHashSet(meta,this__11851.hash_map,this__11851.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11852 = this;
return this__11852.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11853 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__11853.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__11855 = cljs.core.count.call(null,items);
var i__11856 = 0;
var out__11857 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__11856 < len__11855))
{{
var G__11858 = (i__11856 + 1);
var G__11859 = cljs.core.conj_BANG_.call(null,out__11857,(items[i__11856]));
i__11856 = G__11858;
out__11857 = G__11859;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11857);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__11877 = null;
var G__11877__2 = (function (this_sym11863,k){
var this__11865 = this;
var this_sym11863__11866 = this;
var tcoll__11867 = this_sym11863__11866;
if((cljs.core._lookup.call(null,this__11865.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__11877__3 = (function (this_sym11864,k,not_found){
var this__11865 = this;
var this_sym11864__11868 = this;
var tcoll__11869 = this_sym11864__11868;
if((cljs.core._lookup.call(null,this__11865.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__11877 = function(this_sym11864,k,not_found){
switch(arguments.length){
case 2:
return G__11877__2.call(this,this_sym11864,k);
case 3:
return G__11877__3.call(this,this_sym11864,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11877;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym11861,args11862){
var this__11870 = this;
return this_sym11861.call.apply(this_sym11861,[this_sym11861].concat(args11862.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__11871 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__11872 = this;
if((cljs.core._lookup.call(null,this__11872.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__11873 = this;
return cljs.core.count.call(null,this__11873.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__11874 = this;
this__11874.transient_map = cljs.core.dissoc_BANG_.call(null,this__11874.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11875 = this;
this__11875.transient_map = cljs.core.assoc_BANG_.call(null,this__11875.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11876 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__11876.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11880 = this;
var h__2225__auto____11881 = this__11880.__hash;
if(!((h__2225__auto____11881 == null)))
{return h__2225__auto____11881;
} else
{var h__2225__auto____11882 = cljs.core.hash_iset.call(null,coll);
this__11880.__hash = h__2225__auto____11882;
return h__2225__auto____11882;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11883 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11884 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11884.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__11910 = null;
var G__11910__2 = (function (this_sym11885,k){
var this__11887 = this;
var this_sym11885__11888 = this;
var coll__11889 = this_sym11885__11888;
return coll__11889.cljs$core$ILookup$_lookup$arity$2(coll__11889,k);
});
var G__11910__3 = (function (this_sym11886,k,not_found){
var this__11887 = this;
var this_sym11886__11890 = this;
var coll__11891 = this_sym11886__11890;
return coll__11891.cljs$core$ILookup$_lookup$arity$3(coll__11891,k,not_found);
});
G__11910 = function(this_sym11886,k,not_found){
switch(arguments.length){
case 2:
return G__11910__2.call(this,this_sym11886,k);
case 3:
return G__11910__3.call(this,this_sym11886,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11910;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym11878,args11879){
var this__11892 = this;
return this_sym11878.call.apply(this_sym11878,[this_sym11878].concat(args11879.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11893 = this;
return (new cljs.core.PersistentTreeSet(this__11893.meta,cljs.core.assoc.call(null,this__11893.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11894 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__11894.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__11895 = this;
var this__11896 = this;
return cljs.core.pr_str.call(null,this__11896);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__11897 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__11897.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11898 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__11898.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__11899 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11900 = this;
return cljs.core._comparator.call(null,this__11900.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11901 = this;
return cljs.core.keys.call(null,this__11901.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11902 = this;
return (new cljs.core.PersistentTreeSet(this__11902.meta,cljs.core.dissoc.call(null,this__11902.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11903 = this;
return cljs.core.count.call(null,this__11903.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11904 = this;
var and__3937__auto____11905 = cljs.core.set_QMARK_.call(null,other);
if(and__3937__auto____11905)
{var and__3937__auto____11906 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3937__auto____11906)
{return cljs.core.every_QMARK_.call(null,(function (p1__11860_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11860_SHARP_);
}),other);
} else
{return and__3937__auto____11906;
}
} else
{return and__3937__auto____11905;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11907 = this;
return (new cljs.core.PersistentTreeSet(meta,this__11907.tree_map,this__11907.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11908 = this;
return this__11908.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11909 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__11909.meta);
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
var G__11915__delegate = function (keys){
var in__11913 = cljs.core.seq.call(null,keys);
var out__11914 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__11913))
{{
var G__11916 = cljs.core.next.call(null,in__11913);
var G__11917 = cljs.core.conj_BANG_.call(null,out__11914,cljs.core.first.call(null,in__11913));
in__11913 = G__11916;
out__11914 = G__11917;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11914);
}
break;
}
};
var G__11915 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11915__delegate.call(this, keys);
};
G__11915.cljs$lang$maxFixedArity = 0;
G__11915.cljs$lang$applyTo = (function (arglist__11918){
var keys = cljs.core.seq(arglist__11918);;
return G__11915__delegate(keys);
});
G__11915.cljs$lang$arity$variadic = G__11915__delegate;
return G__11915;
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
sorted_set.cljs$lang$applyTo = (function (arglist__11919){
var keys = cljs.core.seq(arglist__11919);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__11921){
var comparator = cljs.core.first(arglist__11921);
var keys = cljs.core.rest(arglist__11921);
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
{var n__11927 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__4086__auto____11928 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__4086__auto____11928))
{var e__11929 = temp__4086__auto____11928;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__11929));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__11927,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__11920_SHARP_){
var temp__4086__auto____11930 = cljs.core.find.call(null,smap,p1__11920_SHARP_);
if(cljs.core.truth_(temp__4086__auto____11930))
{var e__11931 = temp__4086__auto____11930;
return cljs.core.second.call(null,e__11931);
} else
{return p1__11920_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__11961 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__11954,seen){
while(true){
var vec__11955__11956 = p__11954;
var f__11957 = cljs.core.nth.call(null,vec__11955__11956,0,null);
var xs__11958 = vec__11955__11956;
var temp__4088__auto____11959 = cljs.core.seq.call(null,xs__11958);
if(temp__4088__auto____11959)
{var s__11960 = temp__4088__auto____11959;
if(cljs.core.contains_QMARK_.call(null,seen,f__11957))
{{
var G__11962 = cljs.core.rest.call(null,s__11960);
var G__11963 = seen;
p__11954 = G__11962;
seen = G__11963;
continue;
}
} else
{return cljs.core.cons.call(null,f__11957,step.call(null,cljs.core.rest.call(null,s__11960),cljs.core.conj.call(null,seen,f__11957)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__11961.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__11966 = cljs.core.PersistentVector.EMPTY;
var s__11967 = s;
while(true){
if(cljs.core.next.call(null,s__11967))
{{
var G__11968 = cljs.core.conj.call(null,ret__11966,cljs.core.first.call(null,s__11967));
var G__11969 = cljs.core.next.call(null,s__11967);
ret__11966 = G__11968;
s__11967 = G__11969;
continue;
}
} else
{return cljs.core.seq.call(null,ret__11966);
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
{if((function (){var or__3939__auto____11972 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3939__auto____11972)
{return or__3939__auto____11972;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__11973 = x.lastIndexOf("/");
if((i__11973 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__11973 + 1));
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
if((function (){var or__3939__auto____11976 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3939__auto____11976)
{return or__3939__auto____11976;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__11977 = x.lastIndexOf("/");
if((i__11977 > -1))
{return cljs.core.subs.call(null,x,2,i__11977);
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
var map__11984 = cljs.core.ObjMap.EMPTY;
var ks__11985 = cljs.core.seq.call(null,keys);
var vs__11986 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3937__auto____11987 = ks__11985;
if(and__3937__auto____11987)
{return vs__11986;
} else
{return and__3937__auto____11987;
}
})())
{{
var G__11988 = cljs.core.assoc.call(null,map__11984,cljs.core.first.call(null,ks__11985),cljs.core.first.call(null,vs__11986));
var G__11989 = cljs.core.next.call(null,ks__11985);
var G__11990 = cljs.core.next.call(null,vs__11986);
map__11984 = G__11988;
ks__11985 = G__11989;
vs__11986 = G__11990;
continue;
}
} else
{return map__11984;
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
var G__11993__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__11978_SHARP_,p2__11979_SHARP_){
return max_key.call(null,k,p1__11978_SHARP_,p2__11979_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__11993 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11993__delegate.call(this, k, x, y, more);
};
G__11993.cljs$lang$maxFixedArity = 3;
G__11993.cljs$lang$applyTo = (function (arglist__11994){
var k = cljs.core.first(arglist__11994);
var x = cljs.core.first(cljs.core.next(arglist__11994));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11994)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11994)));
return G__11993__delegate(k, x, y, more);
});
G__11993.cljs$lang$arity$variadic = G__11993__delegate;
return G__11993;
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
var G__11995__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__11991_SHARP_,p2__11992_SHARP_){
return min_key.call(null,k,p1__11991_SHARP_,p2__11992_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__11995 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11995__delegate.call(this, k, x, y, more);
};
G__11995.cljs$lang$maxFixedArity = 3;
G__11995.cljs$lang$applyTo = (function (arglist__11996){
var k = cljs.core.first(arglist__11996);
var x = cljs.core.first(cljs.core.next(arglist__11996));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11996)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11996)));
return G__11995__delegate(k, x, y, more);
});
G__11995.cljs$lang$arity$variadic = G__11995__delegate;
return G__11995;
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
var temp__4088__auto____11999 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____11999)
{var s__12000 = temp__4088__auto____11999;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__12000),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__12000)));
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
var temp__4088__auto____12003 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____12003)
{var s__12004 = temp__4088__auto____12003;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__12004))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__12004),take_while.call(null,pred,cljs.core.rest.call(null,s__12004)));
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
var comp__12006 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__12006.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__12018 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__4088__auto____12019 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__4088__auto____12019))
{var vec__12020__12021 = temp__4088__auto____12019;
var e__12022 = cljs.core.nth.call(null,vec__12020__12021,0,null);
var s__12023 = vec__12020__12021;
if(cljs.core.truth_(include__12018.call(null,e__12022)))
{return s__12023;
} else
{return cljs.core.next.call(null,s__12023);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__12018,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4088__auto____12024 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__4088__auto____12024))
{var vec__12025__12026 = temp__4088__auto____12024;
var e__12027 = cljs.core.nth.call(null,vec__12025__12026,0,null);
var s__12028 = vec__12025__12026;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__12027))?s__12028:cljs.core.next.call(null,s__12028)));
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
var include__12040 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__4088__auto____12041 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__4088__auto____12041))
{var vec__12042__12043 = temp__4088__auto____12041;
var e__12044 = cljs.core.nth.call(null,vec__12042__12043,0,null);
var s__12045 = vec__12042__12043;
if(cljs.core.truth_(include__12040.call(null,e__12044)))
{return s__12045;
} else
{return cljs.core.next.call(null,s__12045);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__12040,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4088__auto____12046 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__4088__auto____12046))
{var vec__12047__12048 = temp__4088__auto____12046;
var e__12049 = cljs.core.nth.call(null,vec__12047__12048,0,null);
var s__12050 = vec__12047__12048;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__12049))?s__12050:cljs.core.next.call(null,s__12050)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__12051 = this;
var h__2225__auto____12052 = this__12051.__hash;
if(!((h__2225__auto____12052 == null)))
{return h__2225__auto____12052;
} else
{var h__2225__auto____12053 = cljs.core.hash_coll.call(null,rng);
this__12051.__hash = h__2225__auto____12053;
return h__2225__auto____12053;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__12054 = this;
if((this__12054.step > 0))
{if(((this__12054.start + this__12054.step) < this__12054.end))
{return (new cljs.core.Range(this__12054.meta,(this__12054.start + this__12054.step),this__12054.end,this__12054.step,null));
} else
{return null;
}
} else
{if(((this__12054.start + this__12054.step) > this__12054.end))
{return (new cljs.core.Range(this__12054.meta,(this__12054.start + this__12054.step),this__12054.end,this__12054.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__12055 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__12056 = this;
var this__12057 = this;
return cljs.core.pr_str.call(null,this__12057);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__12058 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__12059 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__12060 = this;
if((this__12060.step > 0))
{if((this__12060.start < this__12060.end))
{return rng;
} else
{return null;
}
} else
{if((this__12060.start > this__12060.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__12061 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__12061.end - this__12061.start) / this__12061.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__12062 = this;
return this__12062.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__12063 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__12063.meta,(this__12063.start + this__12063.step),this__12063.end,this__12063.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__12064 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__12065 = this;
return (new cljs.core.Range(meta,this__12065.start,this__12065.end,this__12065.step,this__12065.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__12066 = this;
return this__12066.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__12067 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__12067.start + (n * this__12067.step));
} else
{if((function (){var and__3937__auto____12068 = (this__12067.start > this__12067.end);
if(and__3937__auto____12068)
{return (this__12067.step === 0);
} else
{return and__3937__auto____12068;
}
})())
{return this__12067.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__12069 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__12069.start + (n * this__12069.step));
} else
{if((function (){var and__3937__auto____12070 = (this__12069.start > this__12069.end);
if(and__3937__auto____12070)
{return (this__12069.step === 0);
} else
{return and__3937__auto____12070;
}
})())
{return this__12069.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__12071 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12071.meta);
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
var temp__4088__auto____12074 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____12074)
{var s__12075 = temp__4088__auto____12074;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__12075),take_nth.call(null,n,cljs.core.drop.call(null,n,s__12075)));
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
var temp__4088__auto____12082 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____12082)
{var s__12083 = temp__4088__auto____12082;
var fst__12084 = cljs.core.first.call(null,s__12083);
var fv__12085 = f.call(null,fst__12084);
var run__12086 = cljs.core.cons.call(null,fst__12084,cljs.core.take_while.call(null,(function (p1__12076_SHARP_){
return cljs.core._EQ_.call(null,fv__12085,f.call(null,p1__12076_SHARP_));
}),cljs.core.next.call(null,s__12083)));
return cljs.core.cons.call(null,run__12086,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__12086),s__12083))));
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
var temp__4086__auto____12101 = cljs.core.seq.call(null,coll);
if(temp__4086__auto____12101)
{var s__12102 = temp__4086__auto____12101;
return reductions.call(null,f,cljs.core.first.call(null,s__12102),cljs.core.rest.call(null,s__12102));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____12103 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____12103)
{var s__12104 = temp__4088__auto____12103;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__12104)),cljs.core.rest.call(null,s__12104));
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
var G__12107 = null;
var G__12107__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__12107__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__12107__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__12107__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__12107__4 = (function() { 
var G__12108__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__12108 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12108__delegate.call(this, x, y, z, args);
};
G__12108.cljs$lang$maxFixedArity = 3;
G__12108.cljs$lang$applyTo = (function (arglist__12109){
var x = cljs.core.first(arglist__12109);
var y = cljs.core.first(cljs.core.next(arglist__12109));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12109)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12109)));
return G__12108__delegate(x, y, z, args);
});
G__12108.cljs$lang$arity$variadic = G__12108__delegate;
return G__12108;
})()
;
G__12107 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12107__0.call(this);
case 1:
return G__12107__1.call(this,x);
case 2:
return G__12107__2.call(this,x,y);
case 3:
return G__12107__3.call(this,x,y,z);
default:
return G__12107__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12107.cljs$lang$maxFixedArity = 3;
G__12107.cljs$lang$applyTo = G__12107__4.cljs$lang$applyTo;
return G__12107;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__12110 = null;
var G__12110__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__12110__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__12110__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__12110__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__12110__4 = (function() { 
var G__12111__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__12111 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12111__delegate.call(this, x, y, z, args);
};
G__12111.cljs$lang$maxFixedArity = 3;
G__12111.cljs$lang$applyTo = (function (arglist__12112){
var x = cljs.core.first(arglist__12112);
var y = cljs.core.first(cljs.core.next(arglist__12112));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12112)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12112)));
return G__12111__delegate(x, y, z, args);
});
G__12111.cljs$lang$arity$variadic = G__12111__delegate;
return G__12111;
})()
;
G__12110 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12110__0.call(this);
case 1:
return G__12110__1.call(this,x);
case 2:
return G__12110__2.call(this,x,y);
case 3:
return G__12110__3.call(this,x,y,z);
default:
return G__12110__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12110.cljs$lang$maxFixedArity = 3;
G__12110.cljs$lang$applyTo = G__12110__4.cljs$lang$applyTo;
return G__12110;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__12113 = null;
var G__12113__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__12113__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__12113__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__12113__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__12113__4 = (function() { 
var G__12114__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__12114 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12114__delegate.call(this, x, y, z, args);
};
G__12114.cljs$lang$maxFixedArity = 3;
G__12114.cljs$lang$applyTo = (function (arglist__12115){
var x = cljs.core.first(arglist__12115);
var y = cljs.core.first(cljs.core.next(arglist__12115));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12115)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12115)));
return G__12114__delegate(x, y, z, args);
});
G__12114.cljs$lang$arity$variadic = G__12114__delegate;
return G__12114;
})()
;
G__12113 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12113__0.call(this);
case 1:
return G__12113__1.call(this,x);
case 2:
return G__12113__2.call(this,x,y);
case 3:
return G__12113__3.call(this,x,y,z);
default:
return G__12113__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12113.cljs$lang$maxFixedArity = 3;
G__12113.cljs$lang$applyTo = G__12113__4.cljs$lang$applyTo;
return G__12113;
})()
});
var juxt__4 = (function() { 
var G__12116__delegate = function (f,g,h,fs){
var fs__12106 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__12117 = null;
var G__12117__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__12087_SHARP_,p2__12088_SHARP_){
return cljs.core.conj.call(null,p1__12087_SHARP_,p2__12088_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__12106);
});
var G__12117__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__12089_SHARP_,p2__12090_SHARP_){
return cljs.core.conj.call(null,p1__12089_SHARP_,p2__12090_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__12106);
});
var G__12117__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__12091_SHARP_,p2__12092_SHARP_){
return cljs.core.conj.call(null,p1__12091_SHARP_,p2__12092_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__12106);
});
var G__12117__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__12093_SHARP_,p2__12094_SHARP_){
return cljs.core.conj.call(null,p1__12093_SHARP_,p2__12094_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__12106);
});
var G__12117__4 = (function() { 
var G__12118__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__12095_SHARP_,p2__12096_SHARP_){
return cljs.core.conj.call(null,p1__12095_SHARP_,cljs.core.apply.call(null,p2__12096_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__12106);
};
var G__12118 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12118__delegate.call(this, x, y, z, args);
};
G__12118.cljs$lang$maxFixedArity = 3;
G__12118.cljs$lang$applyTo = (function (arglist__12119){
var x = cljs.core.first(arglist__12119);
var y = cljs.core.first(cljs.core.next(arglist__12119));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12119)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12119)));
return G__12118__delegate(x, y, z, args);
});
G__12118.cljs$lang$arity$variadic = G__12118__delegate;
return G__12118;
})()
;
G__12117 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12117__0.call(this);
case 1:
return G__12117__1.call(this,x);
case 2:
return G__12117__2.call(this,x,y);
case 3:
return G__12117__3.call(this,x,y,z);
default:
return G__12117__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12117.cljs$lang$maxFixedArity = 3;
G__12117.cljs$lang$applyTo = G__12117__4.cljs$lang$applyTo;
return G__12117;
})()
};
var G__12116 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12116__delegate.call(this, f, g, h, fs);
};
G__12116.cljs$lang$maxFixedArity = 3;
G__12116.cljs$lang$applyTo = (function (arglist__12120){
var f = cljs.core.first(arglist__12120);
var g = cljs.core.first(cljs.core.next(arglist__12120));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12120)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12120)));
return G__12116__delegate(f, g, h, fs);
});
G__12116.cljs$lang$arity$variadic = G__12116__delegate;
return G__12116;
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
var G__12123 = cljs.core.next.call(null,coll);
coll = G__12123;
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
if(cljs.core.truth_((function (){var and__3937__auto____12122 = cljs.core.seq.call(null,coll);
if(and__3937__auto____12122)
{return (n > 0);
} else
{return and__3937__auto____12122;
}
})()))
{{
var G__12124 = (n - 1);
var G__12125 = cljs.core.next.call(null,coll);
n = G__12124;
coll = G__12125;
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
var matches__12127 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__12127),s))
{if((cljs.core.count.call(null,matches__12127) === 1))
{return cljs.core.first.call(null,matches__12127);
} else
{return cljs.core.vec.call(null,matches__12127);
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
var matches__12129 = re.exec(s);
if((matches__12129 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__12129) === 1))
{return cljs.core.first.call(null,matches__12129);
} else
{return cljs.core.vec.call(null,matches__12129);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__12134 = cljs.core.re_find.call(null,re,s);
var match_idx__12135 = s.search(re);
var match_str__12136 = ((cljs.core.coll_QMARK_.call(null,match_data__12134))?cljs.core.first.call(null,match_data__12134):match_data__12134);
var post_match__12137 = cljs.core.subs.call(null,s,(match_idx__12135 + cljs.core.count.call(null,match_str__12136)));
if(cljs.core.truth_(match_data__12134))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__12134,re_seq.call(null,re,post_match__12137));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__12144__12145 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___12146 = cljs.core.nth.call(null,vec__12144__12145,0,null);
var flags__12147 = cljs.core.nth.call(null,vec__12144__12145,1,null);
var pattern__12148 = cljs.core.nth.call(null,vec__12144__12145,2,null);
return (new RegExp(pattern__12148,flags__12147));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__12138_SHARP_){
return print_one.call(null,p1__12138_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3937__auto____12158 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3937__auto____12158))
{var and__3937__auto____12162 = (function (){var G__12159__12160 = obj;
if(G__12159__12160)
{if((function (){var or__3939__auto____12161 = (G__12159__12160.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3939__auto____12161)
{return or__3939__auto____12161;
} else
{return G__12159__12160.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__12159__12160.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__12159__12160);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__12159__12160);
}
})();
if(cljs.core.truth_(and__3937__auto____12162))
{return cljs.core.meta.call(null,obj);
} else
{return and__3937__auto____12162;
}
} else
{return and__3937__auto____12158;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3937__auto____12163 = !((obj == null));
if(and__3937__auto____12163)
{return obj.cljs$lang$type;
} else
{return and__3937__auto____12163;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__12164__12165 = obj;
if(G__12164__12165)
{if((function (){var or__3939__auto____12166 = (G__12164__12165.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3939__auto____12166)
{return or__3939__auto____12166;
} else
{return G__12164__12165.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__12164__12165.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__12164__12165);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__12164__12165);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__12186 = (new goog.string.StringBuffer());
var G__12187__12188 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__12187__12188)
{var string__12189 = cljs.core.first.call(null,G__12187__12188);
var G__12187__12190 = G__12187__12188;
while(true){
sb__12186.append(string__12189);
var temp__4088__auto____12191 = cljs.core.next.call(null,G__12187__12190);
if(temp__4088__auto____12191)
{var G__12187__12192 = temp__4088__auto____12191;
{
var G__12205 = cljs.core.first.call(null,G__12187__12192);
var G__12206 = G__12187__12192;
string__12189 = G__12205;
G__12187__12190 = G__12206;
continue;
}
} else
{}
break;
}
} else
{}
var G__12193__12194 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__12193__12194)
{var obj__12195 = cljs.core.first.call(null,G__12193__12194);
var G__12193__12196 = G__12193__12194;
while(true){
sb__12186.append(" ");
var G__12197__12198 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12195,opts));
if(G__12197__12198)
{var string__12199 = cljs.core.first.call(null,G__12197__12198);
var G__12197__12200 = G__12197__12198;
while(true){
sb__12186.append(string__12199);
var temp__4088__auto____12201 = cljs.core.next.call(null,G__12197__12200);
if(temp__4088__auto____12201)
{var G__12197__12202 = temp__4088__auto____12201;
{
var G__12207 = cljs.core.first.call(null,G__12197__12202);
var G__12208 = G__12197__12202;
string__12199 = G__12207;
G__12197__12200 = G__12208;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4088__auto____12203 = cljs.core.next.call(null,G__12193__12196);
if(temp__4088__auto____12203)
{var G__12193__12204 = temp__4088__auto____12203;
{
var G__12209 = cljs.core.first.call(null,G__12193__12204);
var G__12210 = G__12193__12204;
obj__12195 = G__12209;
G__12193__12196 = G__12210;
continue;
}
} else
{}
break;
}
} else
{}
return sb__12186;
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
var sb__12212 = cljs.core.pr_sb.call(null,objs,opts);
sb__12212.append("\n");
return [cljs.core.str(sb__12212)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__12231__12232 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__12231__12232)
{var string__12233 = cljs.core.first.call(null,G__12231__12232);
var G__12231__12234 = G__12231__12232;
while(true){
cljs.core.string_print.call(null,string__12233);
var temp__4088__auto____12235 = cljs.core.next.call(null,G__12231__12234);
if(temp__4088__auto____12235)
{var G__12231__12236 = temp__4088__auto____12235;
{
var G__12249 = cljs.core.first.call(null,G__12231__12236);
var G__12250 = G__12231__12236;
string__12233 = G__12249;
G__12231__12234 = G__12250;
continue;
}
} else
{}
break;
}
} else
{}
var G__12237__12238 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__12237__12238)
{var obj__12239 = cljs.core.first.call(null,G__12237__12238);
var G__12237__12240 = G__12237__12238;
while(true){
cljs.core.string_print.call(null," ");
var G__12241__12242 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12239,opts));
if(G__12241__12242)
{var string__12243 = cljs.core.first.call(null,G__12241__12242);
var G__12241__12244 = G__12241__12242;
while(true){
cljs.core.string_print.call(null,string__12243);
var temp__4088__auto____12245 = cljs.core.next.call(null,G__12241__12244);
if(temp__4088__auto____12245)
{var G__12241__12246 = temp__4088__auto____12245;
{
var G__12251 = cljs.core.first.call(null,G__12241__12246);
var G__12252 = G__12241__12246;
string__12243 = G__12251;
G__12241__12244 = G__12252;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4088__auto____12247 = cljs.core.next.call(null,G__12237__12240);
if(temp__4088__auto____12247)
{var G__12237__12248 = temp__4088__auto____12247;
{
var G__12253 = cljs.core.first.call(null,G__12237__12248);
var G__12254 = G__12237__12248;
obj__12239 = G__12253;
G__12237__12240 = G__12254;
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
pr_str.cljs$lang$applyTo = (function (arglist__12255){
var objs = cljs.core.seq(arglist__12255);;
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
prn_str.cljs$lang$applyTo = (function (arglist__12256){
var objs = cljs.core.seq(arglist__12256);;
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
pr.cljs$lang$applyTo = (function (arglist__12257){
var objs = cljs.core.seq(arglist__12257);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__12258){
var objs = cljs.core.seq(arglist__12258);;
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
print_str.cljs$lang$applyTo = (function (arglist__12259){
var objs = cljs.core.seq(arglist__12259);;
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
println.cljs$lang$applyTo = (function (arglist__12260){
var objs = cljs.core.seq(arglist__12260);;
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
println_str.cljs$lang$applyTo = (function (arglist__12261){
var objs = cljs.core.seq(arglist__12261);;
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
prn.cljs$lang$applyTo = (function (arglist__12262){
var objs = cljs.core.seq(arglist__12262);;
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
printf.cljs$lang$applyTo = (function (arglist__12263){
var fmt = cljs.core.first(arglist__12263);
var args = cljs.core.rest(arglist__12263);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__12264 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12264,"{",", ","}",opts,coll);
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
var pr_pair__12265 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12265,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__12266 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12266,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__4088__auto____12267 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4088__auto____12267))
{var nspc__12268 = temp__4088__auto____12267;
return [cljs.core.str(nspc__12268),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__4088__auto____12269 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4088__auto____12269))
{var nspc__12270 = temp__4088__auto____12269;
return [cljs.core.str(nspc__12270),cljs.core.str("/")].join('');
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
var pr_pair__12271 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12271,"{",", ","}",opts,coll);
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
var normalize__12273 = (function (n,len){
var ns__12272 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__12272) < len))
{{
var G__12275 = [cljs.core.str("0"),cljs.core.str(ns__12272)].join('');
ns__12272 = G__12275;
continue;
}
} else
{return ns__12272;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__12273.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__12273.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__12273.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__12273.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__12273.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__12273.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__12274 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12274,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__12276 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__12277 = this;
var G__12278__12279 = cljs.core.seq.call(null,this__12277.watches);
if(G__12278__12279)
{var G__12281__12283 = cljs.core.first.call(null,G__12278__12279);
var vec__12282__12284 = G__12281__12283;
var key__12285 = cljs.core.nth.call(null,vec__12282__12284,0,null);
var f__12286 = cljs.core.nth.call(null,vec__12282__12284,1,null);
var G__12278__12287 = G__12278__12279;
var G__12281__12288 = G__12281__12283;
var G__12278__12289 = G__12278__12287;
while(true){
var vec__12290__12291 = G__12281__12288;
var key__12292 = cljs.core.nth.call(null,vec__12290__12291,0,null);
var f__12293 = cljs.core.nth.call(null,vec__12290__12291,1,null);
var G__12278__12294 = G__12278__12289;
f__12293.call(null,key__12292,this$,oldval,newval);
var temp__4088__auto____12295 = cljs.core.next.call(null,G__12278__12294);
if(temp__4088__auto____12295)
{var G__12278__12296 = temp__4088__auto____12295;
{
var G__12303 = cljs.core.first.call(null,G__12278__12296);
var G__12304 = G__12278__12296;
G__12281__12288 = G__12303;
G__12278__12289 = G__12304;
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
var this__12297 = this;
return this$.watches = cljs.core.assoc.call(null,this__12297.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__12298 = this;
return this$.watches = cljs.core.dissoc.call(null,this__12298.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__12299 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__12299.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__12300 = this;
return this__12300.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__12301 = this;
return this__12301.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__12302 = this;
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
var G__12316__delegate = function (x,p__12305){
var map__12311__12312 = p__12305;
var map__12311__12313 = ((cljs.core.seq_QMARK_.call(null,map__12311__12312))?cljs.core.apply.call(null,cljs.core.hash_map,map__12311__12312):map__12311__12312);
var validator__12314 = cljs.core._lookup.call(null,map__12311__12313,"\uFDD0'validator",null);
var meta__12315 = cljs.core._lookup.call(null,map__12311__12313,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__12315,validator__12314,null));
};
var G__12316 = function (x,var_args){
var p__12305 = null;
if (goog.isDef(var_args)) {
  p__12305 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12316__delegate.call(this, x, p__12305);
};
G__12316.cljs$lang$maxFixedArity = 1;
G__12316.cljs$lang$applyTo = (function (arglist__12317){
var x = cljs.core.first(arglist__12317);
var p__12305 = cljs.core.rest(arglist__12317);
return G__12316__delegate(x, p__12305);
});
G__12316.cljs$lang$arity$variadic = G__12316__delegate;
return G__12316;
})()
;
atom = function(x,var_args){
var p__12305 = var_args;
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
var temp__4088__auto____12321 = a.validator;
if(cljs.core.truth_(temp__4088__auto____12321))
{var validate__12322 = temp__4088__auto____12321;
if(cljs.core.truth_(validate__12322.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440,"\uFDD0'column",13))))].join('')));
}
} else
{}
var old_value__12323 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__12323,new_value);
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
var G__12324__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__12324 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12324__delegate.call(this, a, f, x, y, z, more);
};
G__12324.cljs$lang$maxFixedArity = 5;
G__12324.cljs$lang$applyTo = (function (arglist__12325){
var a = cljs.core.first(arglist__12325);
var f = cljs.core.first(cljs.core.next(arglist__12325));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12325)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12325))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12325)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12325)))));
return G__12324__delegate(a, f, x, y, z, more);
});
G__12324.cljs$lang$arity$variadic = G__12324__delegate;
return G__12324;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__12326){
var iref = cljs.core.first(arglist__12326);
var f = cljs.core.first(cljs.core.next(arglist__12326));
var args = cljs.core.rest(cljs.core.next(arglist__12326));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__12327 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__12327.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__12328 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__12328.state,(function (p__12329){
var map__12330__12331 = p__12329;
var map__12330__12332 = ((cljs.core.seq_QMARK_.call(null,map__12330__12331))?cljs.core.apply.call(null,cljs.core.hash_map,map__12330__12331):map__12330__12331);
var curr_state__12333 = map__12330__12332;
var done__12334 = cljs.core._lookup.call(null,map__12330__12332,"\uFDD0'done",null);
if(cljs.core.truth_(done__12334))
{return curr_state__12333;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__12328.f.call(null)});
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
var map__12363__12364 = options;
var map__12363__12365 = ((cljs.core.seq_QMARK_.call(null,map__12363__12364))?cljs.core.apply.call(null,cljs.core.hash_map,map__12363__12364):map__12363__12364);
var keywordize_keys__12366 = cljs.core._lookup.call(null,map__12363__12365,"\uFDD0'keywordize-keys",null);
var keyfn__12367 = (cljs.core.truth_(keywordize_keys__12366)?cljs.core.keyword:cljs.core.str);
var f__12390 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2495__auto____12389 = (function iter__12379(s__12380){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12380__12385 = s__12380;
while(true){
var temp__4088__auto____12386 = cljs.core.seq.call(null,s__12380__12385);
if(temp__4088__auto____12386)
{var xs__4574__auto____12387 = temp__4088__auto____12386;
var k__12388 = cljs.core.first.call(null,xs__4574__auto____12387);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__12367.call(null,k__12388),thisfn.call(null,(x[k__12388]))], true),iter__12379.call(null,cljs.core.rest.call(null,s__12380__12385)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2495__auto____12389.call(null,cljs.core.js_keys.call(null,x));
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
return f__12390.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__12391){
var x = cljs.core.first(arglist__12391);
var options = cljs.core.rest(arglist__12391);
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
var mem__12396 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__12400__delegate = function (args){
var temp__4086__auto____12397 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__12396),args,null);
if(cljs.core.truth_(temp__4086__auto____12397))
{var v__12398 = temp__4086__auto____12397;
return v__12398;
} else
{var ret__12399 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__12396,cljs.core.assoc,args,ret__12399);
return ret__12399;
}
};
var G__12400 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12400__delegate.call(this, args);
};
G__12400.cljs$lang$maxFixedArity = 0;
G__12400.cljs$lang$applyTo = (function (arglist__12401){
var args = cljs.core.seq(arglist__12401);;
return G__12400__delegate(args);
});
G__12400.cljs$lang$arity$variadic = G__12400__delegate;
return G__12400;
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
var ret__12403 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__12403))
{{
var G__12404 = ret__12403;
f = G__12404;
continue;
}
} else
{return ret__12403;
}
break;
}
});
var trampoline__2 = (function() { 
var G__12405__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__12405 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12405__delegate.call(this, f, args);
};
G__12405.cljs$lang$maxFixedArity = 1;
G__12405.cljs$lang$applyTo = (function (arglist__12406){
var f = cljs.core.first(arglist__12406);
var args = cljs.core.rest(arglist__12406);
return G__12405__delegate(f, args);
});
G__12405.cljs$lang$arity$variadic = G__12405__delegate;
return G__12405;
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
var k__12408 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__12408,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__12408,cljs.core.PersistentVector.EMPTY),x));
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
var or__3939__auto____12417 = cljs.core._EQ_.call(null,child,parent);
if(or__3939__auto____12417)
{return or__3939__auto____12417;
} else
{var or__3939__auto____12418 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3939__auto____12418)
{return or__3939__auto____12418;
} else
{var and__3937__auto____12419 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3937__auto____12419)
{var and__3937__auto____12420 = cljs.core.vector_QMARK_.call(null,child);
if(and__3937__auto____12420)
{var and__3937__auto____12421 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3937__auto____12421)
{var ret__12422 = true;
var i__12423 = 0;
while(true){
if((function (){var or__3939__auto____12424 = cljs.core.not.call(null,ret__12422);
if(or__3939__auto____12424)
{return or__3939__auto____12424;
} else
{return (i__12423 === cljs.core.count.call(null,parent));
}
})())
{return ret__12422;
} else
{{
var G__12425 = isa_QMARK_.call(null,h,child.call(null,i__12423),parent.call(null,i__12423));
var G__12426 = (i__12423 + 1);
ret__12422 = G__12425;
i__12423 = G__12426;
continue;
}
}
break;
}
} else
{return and__3937__auto____12421;
}
} else
{return and__3937__auto____12420;
}
} else
{return and__3937__auto____12419;
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724,"\uFDD0'column",12))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728,"\uFDD0'column",12))))].join('')));
}
var tp__12435 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__12436 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__12437 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__12438 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3939__auto____12439 = ((cljs.core.contains_QMARK_.call(null,tp__12435.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__12437.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__12437.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__12435,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__12438.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__12436,parent,ta__12437),"\uFDD0'descendants":tf__12438.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__12437,tag,td__12436)});
})());
if(cljs.core.truth_(or__3939__auto____12439))
{return or__3939__auto____12439;
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
var parentMap__12444 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__12445 = (cljs.core.truth_(parentMap__12444.call(null,tag))?cljs.core.disj.call(null,parentMap__12444.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__12446 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__12445))?cljs.core.assoc.call(null,parentMap__12444,tag,childsParents__12445):cljs.core.dissoc.call(null,parentMap__12444,tag));
var deriv_seq__12447 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__12427_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__12427_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__12427_SHARP_),cljs.core.second.call(null,p1__12427_SHARP_)));
}),cljs.core.seq.call(null,newParents__12446)));
if(cljs.core.contains_QMARK_.call(null,parentMap__12444.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__12428_SHARP_,p2__12429_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__12428_SHARP_,p2__12429_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__12447));
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
var xprefs__12455 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3939__auto____12457 = (cljs.core.truth_((function (){var and__3937__auto____12456 = xprefs__12455;
if(cljs.core.truth_(and__3937__auto____12456))
{return xprefs__12455.call(null,y);
} else
{return and__3937__auto____12456;
}
})())?true:null);
if(cljs.core.truth_(or__3939__auto____12457))
{return or__3939__auto____12457;
} else
{var or__3939__auto____12459 = (function (){var ps__12458 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__12458) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__12458),prefer_table)))
{} else
{}
{
var G__12462 = cljs.core.rest.call(null,ps__12458);
ps__12458 = G__12462;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3939__auto____12459))
{return or__3939__auto____12459;
} else
{var or__3939__auto____12461 = (function (){var ps__12460 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__12460) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__12460),y,prefer_table)))
{} else
{}
{
var G__12463 = cljs.core.rest.call(null,ps__12460);
ps__12460 = G__12463;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3939__auto____12461))
{return or__3939__auto____12461;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3939__auto____12465 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3939__auto____12465))
{return or__3939__auto____12465;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__12483 = cljs.core.reduce.call(null,(function (be,p__12475){
var vec__12476__12477 = p__12475;
var k__12478 = cljs.core.nth.call(null,vec__12476__12477,0,null);
var ___12479 = cljs.core.nth.call(null,vec__12476__12477,1,null);
var e__12480 = vec__12476__12477;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__12478))
{var be2__12482 = (cljs.core.truth_((function (){var or__3939__auto____12481 = (be == null);
if(or__3939__auto____12481)
{return or__3939__auto____12481;
} else
{return cljs.core.dominates.call(null,k__12478,cljs.core.first.call(null,be),prefer_table);
}
})())?e__12480:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__12482),k__12478,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__12478),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__12482)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__12482;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__12483))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__12483));
return cljs.core.second.call(null,best_entry__12483);
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
if((function (){var and__3937__auto____12488 = mf;
if(and__3937__auto____12488)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3937__auto____12488;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2396__auto____12489 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12490 = (cljs.core._reset[goog.typeOf(x__2396__auto____12489)]);
if(or__3939__auto____12490)
{return or__3939__auto____12490;
} else
{var or__3939__auto____12491 = (cljs.core._reset["_"]);
if(or__3939__auto____12491)
{return or__3939__auto____12491;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3937__auto____12496 = mf;
if(and__3937__auto____12496)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3937__auto____12496;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2396__auto____12497 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12498 = (cljs.core._add_method[goog.typeOf(x__2396__auto____12497)]);
if(or__3939__auto____12498)
{return or__3939__auto____12498;
} else
{var or__3939__auto____12499 = (cljs.core._add_method["_"]);
if(or__3939__auto____12499)
{return or__3939__auto____12499;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3937__auto____12504 = mf;
if(and__3937__auto____12504)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3937__auto____12504;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2396__auto____12505 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12506 = (cljs.core._remove_method[goog.typeOf(x__2396__auto____12505)]);
if(or__3939__auto____12506)
{return or__3939__auto____12506;
} else
{var or__3939__auto____12507 = (cljs.core._remove_method["_"]);
if(or__3939__auto____12507)
{return or__3939__auto____12507;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3937__auto____12512 = mf;
if(and__3937__auto____12512)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3937__auto____12512;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2396__auto____12513 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12514 = (cljs.core._prefer_method[goog.typeOf(x__2396__auto____12513)]);
if(or__3939__auto____12514)
{return or__3939__auto____12514;
} else
{var or__3939__auto____12515 = (cljs.core._prefer_method["_"]);
if(or__3939__auto____12515)
{return or__3939__auto____12515;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3937__auto____12520 = mf;
if(and__3937__auto____12520)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3937__auto____12520;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2396__auto____12521 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12522 = (cljs.core._get_method[goog.typeOf(x__2396__auto____12521)]);
if(or__3939__auto____12522)
{return or__3939__auto____12522;
} else
{var or__3939__auto____12523 = (cljs.core._get_method["_"]);
if(or__3939__auto____12523)
{return or__3939__auto____12523;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3937__auto____12528 = mf;
if(and__3937__auto____12528)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3937__auto____12528;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2396__auto____12529 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12530 = (cljs.core._methods[goog.typeOf(x__2396__auto____12529)]);
if(or__3939__auto____12530)
{return or__3939__auto____12530;
} else
{var or__3939__auto____12531 = (cljs.core._methods["_"]);
if(or__3939__auto____12531)
{return or__3939__auto____12531;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3937__auto____12536 = mf;
if(and__3937__auto____12536)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3937__auto____12536;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2396__auto____12537 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12538 = (cljs.core._prefers[goog.typeOf(x__2396__auto____12537)]);
if(or__3939__auto____12538)
{return or__3939__auto____12538;
} else
{var or__3939__auto____12539 = (cljs.core._prefers["_"]);
if(or__3939__auto____12539)
{return or__3939__auto____12539;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3937__auto____12544 = mf;
if(and__3937__auto____12544)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3937__auto____12544;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2396__auto____12545 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12546 = (cljs.core._dispatch[goog.typeOf(x__2396__auto____12545)]);
if(or__3939__auto____12546)
{return or__3939__auto____12546;
} else
{var or__3939__auto____12547 = (cljs.core._dispatch["_"]);
if(or__3939__auto____12547)
{return or__3939__auto____12547;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__12550 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__12551 = cljs.core._get_method.call(null,mf,dispatch_val__12550);
if(cljs.core.truth_(target_fn__12551))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__12550)].join('')));
}
return cljs.core.apply.call(null,target_fn__12551,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__12552 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__12553 = this;
cljs.core.swap_BANG_.call(null,this__12553.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12553.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12553.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12553.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__12554 = this;
cljs.core.swap_BANG_.call(null,this__12554.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__12554.method_cache,this__12554.method_table,this__12554.cached_hierarchy,this__12554.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__12555 = this;
cljs.core.swap_BANG_.call(null,this__12555.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__12555.method_cache,this__12555.method_table,this__12555.cached_hierarchy,this__12555.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__12556 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__12556.cached_hierarchy),cljs.core.deref.call(null,this__12556.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__12556.method_cache,this__12556.method_table,this__12556.cached_hierarchy,this__12556.hierarchy);
}
var temp__4086__auto____12557 = cljs.core.deref.call(null,this__12556.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__4086__auto____12557))
{var target_fn__12558 = temp__4086__auto____12557;
return target_fn__12558;
} else
{var temp__4086__auto____12559 = cljs.core.find_and_cache_best_method.call(null,this__12556.name,dispatch_val,this__12556.hierarchy,this__12556.method_table,this__12556.prefer_table,this__12556.method_cache,this__12556.cached_hierarchy);
if(cljs.core.truth_(temp__4086__auto____12559))
{var target_fn__12560 = temp__4086__auto____12559;
return target_fn__12560;
} else
{return cljs.core.deref.call(null,this__12556.method_table).call(null,this__12556.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__12561 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__12561.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__12561.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__12561.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__12561.method_cache,this__12561.method_table,this__12561.cached_hierarchy,this__12561.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__12562 = this;
return cljs.core.deref.call(null,this__12562.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__12563 = this;
return cljs.core.deref.call(null,this__12563.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__12564 = this;
return cljs.core.do_dispatch.call(null,mf,this__12564.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__12566__delegate = function (_,args){
var self__12565 = this;
return cljs.core._dispatch.call(null,self__12565,args);
};
var G__12566 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12566__delegate.call(this, _, args);
};
G__12566.cljs$lang$maxFixedArity = 1;
G__12566.cljs$lang$applyTo = (function (arglist__12567){
var _ = cljs.core.first(arglist__12567);
var args = cljs.core.rest(arglist__12567);
return G__12566__delegate(_, args);
});
G__12566.cljs$lang$arity$variadic = G__12566__delegate;
return G__12566;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__12568 = this;
return cljs.core._dispatch.call(null,self__12568,args);
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
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2342__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__12569 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_12571,_){
var this__12570 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__12570.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__12572 = this;
var and__3937__auto____12573 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3937__auto____12573)
{return (this__12572.uuid === other.uuid);
} else
{return and__3937__auto____12573;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__12574 = this;
var this__12575 = this;
return cljs.core.pr_str.call(null,this__12575);
});
cljs.core.UUID;
