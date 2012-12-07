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
var x__8644 = (((x == null))?null:x);
if((p[goog.typeOf(x__8644)]))
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
var G__8645__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__8645 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8645__delegate.call(this, array, i, idxs);
};
G__8645.cljs$lang$maxFixedArity = 2;
G__8645.cljs$lang$applyTo = (function (arglist__8646){
var array = cljs.core.first(arglist__8646);
var i = cljs.core.first(cljs.core.next(arglist__8646));
var idxs = cljs.core.rest(cljs.core.next(arglist__8646));
return G__8645__delegate(array, i, idxs);
});
G__8645.cljs$lang$arity$variadic = G__8645__delegate;
return G__8645;
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
if((function (){var and__3822__auto____8731 = this$;
if(and__3822__auto____8731)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____8731;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2363__auto____8732 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8733 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8732)]);
if(or__3824__auto____8733)
{return or__3824__auto____8733;
} else
{var or__3824__auto____8734 = (cljs.core._invoke["_"]);
if(or__3824__auto____8734)
{return or__3824__auto____8734;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____8735 = this$;
if(and__3822__auto____8735)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____8735;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2363__auto____8736 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8737 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8736)]);
if(or__3824__auto____8737)
{return or__3824__auto____8737;
} else
{var or__3824__auto____8738 = (cljs.core._invoke["_"]);
if(or__3824__auto____8738)
{return or__3824__auto____8738;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____8739 = this$;
if(and__3822__auto____8739)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____8739;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2363__auto____8740 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8741 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8740)]);
if(or__3824__auto____8741)
{return or__3824__auto____8741;
} else
{var or__3824__auto____8742 = (cljs.core._invoke["_"]);
if(or__3824__auto____8742)
{return or__3824__auto____8742;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____8743 = this$;
if(and__3822__auto____8743)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____8743;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2363__auto____8744 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8745 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8744)]);
if(or__3824__auto____8745)
{return or__3824__auto____8745;
} else
{var or__3824__auto____8746 = (cljs.core._invoke["_"]);
if(or__3824__auto____8746)
{return or__3824__auto____8746;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____8747 = this$;
if(and__3822__auto____8747)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____8747;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2363__auto____8748 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8749 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8748)]);
if(or__3824__auto____8749)
{return or__3824__auto____8749;
} else
{var or__3824__auto____8750 = (cljs.core._invoke["_"]);
if(or__3824__auto____8750)
{return or__3824__auto____8750;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____8751 = this$;
if(and__3822__auto____8751)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____8751;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2363__auto____8752 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8753 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8752)]);
if(or__3824__auto____8753)
{return or__3824__auto____8753;
} else
{var or__3824__auto____8754 = (cljs.core._invoke["_"]);
if(or__3824__auto____8754)
{return or__3824__auto____8754;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____8755 = this$;
if(and__3822__auto____8755)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____8755;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2363__auto____8756 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8757 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8756)]);
if(or__3824__auto____8757)
{return or__3824__auto____8757;
} else
{var or__3824__auto____8758 = (cljs.core._invoke["_"]);
if(or__3824__auto____8758)
{return or__3824__auto____8758;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____8759 = this$;
if(and__3822__auto____8759)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____8759;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2363__auto____8760 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8761 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8760)]);
if(or__3824__auto____8761)
{return or__3824__auto____8761;
} else
{var or__3824__auto____8762 = (cljs.core._invoke["_"]);
if(or__3824__auto____8762)
{return or__3824__auto____8762;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____8763 = this$;
if(and__3822__auto____8763)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____8763;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2363__auto____8764 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8765 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8764)]);
if(or__3824__auto____8765)
{return or__3824__auto____8765;
} else
{var or__3824__auto____8766 = (cljs.core._invoke["_"]);
if(or__3824__auto____8766)
{return or__3824__auto____8766;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____8767 = this$;
if(and__3822__auto____8767)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____8767;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2363__auto____8768 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8769 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8768)]);
if(or__3824__auto____8769)
{return or__3824__auto____8769;
} else
{var or__3824__auto____8770 = (cljs.core._invoke["_"]);
if(or__3824__auto____8770)
{return or__3824__auto____8770;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____8771 = this$;
if(and__3822__auto____8771)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____8771;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2363__auto____8772 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8773 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8772)]);
if(or__3824__auto____8773)
{return or__3824__auto____8773;
} else
{var or__3824__auto____8774 = (cljs.core._invoke["_"]);
if(or__3824__auto____8774)
{return or__3824__auto____8774;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____8775 = this$;
if(and__3822__auto____8775)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____8775;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2363__auto____8776 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8777 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8776)]);
if(or__3824__auto____8777)
{return or__3824__auto____8777;
} else
{var or__3824__auto____8778 = (cljs.core._invoke["_"]);
if(or__3824__auto____8778)
{return or__3824__auto____8778;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____8779 = this$;
if(and__3822__auto____8779)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____8779;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2363__auto____8780 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8781 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8780)]);
if(or__3824__auto____8781)
{return or__3824__auto____8781;
} else
{var or__3824__auto____8782 = (cljs.core._invoke["_"]);
if(or__3824__auto____8782)
{return or__3824__auto____8782;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____8783 = this$;
if(and__3822__auto____8783)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____8783;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2363__auto____8784 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8785 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8784)]);
if(or__3824__auto____8785)
{return or__3824__auto____8785;
} else
{var or__3824__auto____8786 = (cljs.core._invoke["_"]);
if(or__3824__auto____8786)
{return or__3824__auto____8786;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____8787 = this$;
if(and__3822__auto____8787)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____8787;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2363__auto____8788 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8789 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8788)]);
if(or__3824__auto____8789)
{return or__3824__auto____8789;
} else
{var or__3824__auto____8790 = (cljs.core._invoke["_"]);
if(or__3824__auto____8790)
{return or__3824__auto____8790;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____8791 = this$;
if(and__3822__auto____8791)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____8791;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2363__auto____8792 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8793 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8792)]);
if(or__3824__auto____8793)
{return or__3824__auto____8793;
} else
{var or__3824__auto____8794 = (cljs.core._invoke["_"]);
if(or__3824__auto____8794)
{return or__3824__auto____8794;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____8795 = this$;
if(and__3822__auto____8795)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____8795;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2363__auto____8796 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8797 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8796)]);
if(or__3824__auto____8797)
{return or__3824__auto____8797;
} else
{var or__3824__auto____8798 = (cljs.core._invoke["_"]);
if(or__3824__auto____8798)
{return or__3824__auto____8798;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____8799 = this$;
if(and__3822__auto____8799)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____8799;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2363__auto____8800 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8801 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8800)]);
if(or__3824__auto____8801)
{return or__3824__auto____8801;
} else
{var or__3824__auto____8802 = (cljs.core._invoke["_"]);
if(or__3824__auto____8802)
{return or__3824__auto____8802;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____8803 = this$;
if(and__3822__auto____8803)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____8803;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2363__auto____8804 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8805 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8804)]);
if(or__3824__auto____8805)
{return or__3824__auto____8805;
} else
{var or__3824__auto____8806 = (cljs.core._invoke["_"]);
if(or__3824__auto____8806)
{return or__3824__auto____8806;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____8807 = this$;
if(and__3822__auto____8807)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____8807;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2363__auto____8808 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8809 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8808)]);
if(or__3824__auto____8809)
{return or__3824__auto____8809;
} else
{var or__3824__auto____8810 = (cljs.core._invoke["_"]);
if(or__3824__auto____8810)
{return or__3824__auto____8810;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____8811 = this$;
if(and__3822__auto____8811)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____8811;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2363__auto____8812 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8813 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8812)]);
if(or__3824__auto____8813)
{return or__3824__auto____8813;
} else
{var or__3824__auto____8814 = (cljs.core._invoke["_"]);
if(or__3824__auto____8814)
{return or__3824__auto____8814;
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
if((function (){var and__3822__auto____8819 = coll;
if(and__3822__auto____8819)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____8819;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2363__auto____8820 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8821 = (cljs.core._count[goog.typeOf(x__2363__auto____8820)]);
if(or__3824__auto____8821)
{return or__3824__auto____8821;
} else
{var or__3824__auto____8822 = (cljs.core._count["_"]);
if(or__3824__auto____8822)
{return or__3824__auto____8822;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____8827 = coll;
if(and__3822__auto____8827)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____8827;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2363__auto____8828 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8829 = (cljs.core._empty[goog.typeOf(x__2363__auto____8828)]);
if(or__3824__auto____8829)
{return or__3824__auto____8829;
} else
{var or__3824__auto____8830 = (cljs.core._empty["_"]);
if(or__3824__auto____8830)
{return or__3824__auto____8830;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____8835 = coll;
if(and__3822__auto____8835)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____8835;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2363__auto____8836 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8837 = (cljs.core._conj[goog.typeOf(x__2363__auto____8836)]);
if(or__3824__auto____8837)
{return or__3824__auto____8837;
} else
{var or__3824__auto____8838 = (cljs.core._conj["_"]);
if(or__3824__auto____8838)
{return or__3824__auto____8838;
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
if((function (){var and__3822__auto____8847 = coll;
if(and__3822__auto____8847)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____8847;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2363__auto____8848 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8849 = (cljs.core._nth[goog.typeOf(x__2363__auto____8848)]);
if(or__3824__auto____8849)
{return or__3824__auto____8849;
} else
{var or__3824__auto____8850 = (cljs.core._nth["_"]);
if(or__3824__auto____8850)
{return or__3824__auto____8850;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____8851 = coll;
if(and__3822__auto____8851)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____8851;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2363__auto____8852 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8853 = (cljs.core._nth[goog.typeOf(x__2363__auto____8852)]);
if(or__3824__auto____8853)
{return or__3824__auto____8853;
} else
{var or__3824__auto____8854 = (cljs.core._nth["_"]);
if(or__3824__auto____8854)
{return or__3824__auto____8854;
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
if((function (){var and__3822__auto____8859 = coll;
if(and__3822__auto____8859)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____8859;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2363__auto____8860 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8861 = (cljs.core._first[goog.typeOf(x__2363__auto____8860)]);
if(or__3824__auto____8861)
{return or__3824__auto____8861;
} else
{var or__3824__auto____8862 = (cljs.core._first["_"]);
if(or__3824__auto____8862)
{return or__3824__auto____8862;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____8867 = coll;
if(and__3822__auto____8867)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____8867;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2363__auto____8868 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8869 = (cljs.core._rest[goog.typeOf(x__2363__auto____8868)]);
if(or__3824__auto____8869)
{return or__3824__auto____8869;
} else
{var or__3824__auto____8870 = (cljs.core._rest["_"]);
if(or__3824__auto____8870)
{return or__3824__auto____8870;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____8875 = coll;
if(and__3822__auto____8875)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____8875;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2363__auto____8876 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8877 = (cljs.core._next[goog.typeOf(x__2363__auto____8876)]);
if(or__3824__auto____8877)
{return or__3824__auto____8877;
} else
{var or__3824__auto____8878 = (cljs.core._next["_"]);
if(or__3824__auto____8878)
{return or__3824__auto____8878;
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
if((function (){var and__3822__auto____8887 = o;
if(and__3822__auto____8887)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____8887;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2363__auto____8888 = (((o == null))?null:o);
return (function (){var or__3824__auto____8889 = (cljs.core._lookup[goog.typeOf(x__2363__auto____8888)]);
if(or__3824__auto____8889)
{return or__3824__auto____8889;
} else
{var or__3824__auto____8890 = (cljs.core._lookup["_"]);
if(or__3824__auto____8890)
{return or__3824__auto____8890;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____8891 = o;
if(and__3822__auto____8891)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____8891;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2363__auto____8892 = (((o == null))?null:o);
return (function (){var or__3824__auto____8893 = (cljs.core._lookup[goog.typeOf(x__2363__auto____8892)]);
if(or__3824__auto____8893)
{return or__3824__auto____8893;
} else
{var or__3824__auto____8894 = (cljs.core._lookup["_"]);
if(or__3824__auto____8894)
{return or__3824__auto____8894;
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
if((function (){var and__3822__auto____8899 = coll;
if(and__3822__auto____8899)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____8899;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2363__auto____8900 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8901 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2363__auto____8900)]);
if(or__3824__auto____8901)
{return or__3824__auto____8901;
} else
{var or__3824__auto____8902 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____8902)
{return or__3824__auto____8902;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____8907 = coll;
if(and__3822__auto____8907)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____8907;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2363__auto____8908 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8909 = (cljs.core._assoc[goog.typeOf(x__2363__auto____8908)]);
if(or__3824__auto____8909)
{return or__3824__auto____8909;
} else
{var or__3824__auto____8910 = (cljs.core._assoc["_"]);
if(or__3824__auto____8910)
{return or__3824__auto____8910;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____8915 = coll;
if(and__3822__auto____8915)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____8915;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2363__auto____8916 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8917 = (cljs.core._dissoc[goog.typeOf(x__2363__auto____8916)]);
if(or__3824__auto____8917)
{return or__3824__auto____8917;
} else
{var or__3824__auto____8918 = (cljs.core._dissoc["_"]);
if(or__3824__auto____8918)
{return or__3824__auto____8918;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____8923 = coll;
if(and__3822__auto____8923)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____8923;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2363__auto____8924 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8925 = (cljs.core._key[goog.typeOf(x__2363__auto____8924)]);
if(or__3824__auto____8925)
{return or__3824__auto____8925;
} else
{var or__3824__auto____8926 = (cljs.core._key["_"]);
if(or__3824__auto____8926)
{return or__3824__auto____8926;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____8931 = coll;
if(and__3822__auto____8931)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____8931;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2363__auto____8932 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8933 = (cljs.core._val[goog.typeOf(x__2363__auto____8932)]);
if(or__3824__auto____8933)
{return or__3824__auto____8933;
} else
{var or__3824__auto____8934 = (cljs.core._val["_"]);
if(or__3824__auto____8934)
{return or__3824__auto____8934;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____8939 = coll;
if(and__3822__auto____8939)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____8939;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2363__auto____8940 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8941 = (cljs.core._disjoin[goog.typeOf(x__2363__auto____8940)]);
if(or__3824__auto____8941)
{return or__3824__auto____8941;
} else
{var or__3824__auto____8942 = (cljs.core._disjoin["_"]);
if(or__3824__auto____8942)
{return or__3824__auto____8942;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____8947 = coll;
if(and__3822__auto____8947)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____8947;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2363__auto____8948 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8949 = (cljs.core._peek[goog.typeOf(x__2363__auto____8948)]);
if(or__3824__auto____8949)
{return or__3824__auto____8949;
} else
{var or__3824__auto____8950 = (cljs.core._peek["_"]);
if(or__3824__auto____8950)
{return or__3824__auto____8950;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____8955 = coll;
if(and__3822__auto____8955)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____8955;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2363__auto____8956 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8957 = (cljs.core._pop[goog.typeOf(x__2363__auto____8956)]);
if(or__3824__auto____8957)
{return or__3824__auto____8957;
} else
{var or__3824__auto____8958 = (cljs.core._pop["_"]);
if(or__3824__auto____8958)
{return or__3824__auto____8958;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____8963 = coll;
if(and__3822__auto____8963)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____8963;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2363__auto____8964 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8965 = (cljs.core._assoc_n[goog.typeOf(x__2363__auto____8964)]);
if(or__3824__auto____8965)
{return or__3824__auto____8965;
} else
{var or__3824__auto____8966 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____8966)
{return or__3824__auto____8966;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____8971 = o;
if(and__3822__auto____8971)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____8971;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2363__auto____8972 = (((o == null))?null:o);
return (function (){var or__3824__auto____8973 = (cljs.core._deref[goog.typeOf(x__2363__auto____8972)]);
if(or__3824__auto____8973)
{return or__3824__auto____8973;
} else
{var or__3824__auto____8974 = (cljs.core._deref["_"]);
if(or__3824__auto____8974)
{return or__3824__auto____8974;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____8979 = o;
if(and__3822__auto____8979)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____8979;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2363__auto____8980 = (((o == null))?null:o);
return (function (){var or__3824__auto____8981 = (cljs.core._deref_with_timeout[goog.typeOf(x__2363__auto____8980)]);
if(or__3824__auto____8981)
{return or__3824__auto____8981;
} else
{var or__3824__auto____8982 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____8982)
{return or__3824__auto____8982;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____8987 = o;
if(and__3822__auto____8987)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____8987;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2363__auto____8988 = (((o == null))?null:o);
return (function (){var or__3824__auto____8989 = (cljs.core._meta[goog.typeOf(x__2363__auto____8988)]);
if(or__3824__auto____8989)
{return or__3824__auto____8989;
} else
{var or__3824__auto____8990 = (cljs.core._meta["_"]);
if(or__3824__auto____8990)
{return or__3824__auto____8990;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____8995 = o;
if(and__3822__auto____8995)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____8995;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2363__auto____8996 = (((o == null))?null:o);
return (function (){var or__3824__auto____8997 = (cljs.core._with_meta[goog.typeOf(x__2363__auto____8996)]);
if(or__3824__auto____8997)
{return or__3824__auto____8997;
} else
{var or__3824__auto____8998 = (cljs.core._with_meta["_"]);
if(or__3824__auto____8998)
{return or__3824__auto____8998;
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
if((function (){var and__3822__auto____9007 = coll;
if(and__3822__auto____9007)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____9007;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2363__auto____9008 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9009 = (cljs.core._reduce[goog.typeOf(x__2363__auto____9008)]);
if(or__3824__auto____9009)
{return or__3824__auto____9009;
} else
{var or__3824__auto____9010 = (cljs.core._reduce["_"]);
if(or__3824__auto____9010)
{return or__3824__auto____9010;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____9011 = coll;
if(and__3822__auto____9011)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____9011;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2363__auto____9012 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9013 = (cljs.core._reduce[goog.typeOf(x__2363__auto____9012)]);
if(or__3824__auto____9013)
{return or__3824__auto____9013;
} else
{var or__3824__auto____9014 = (cljs.core._reduce["_"]);
if(or__3824__auto____9014)
{return or__3824__auto____9014;
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
if((function (){var and__3822__auto____9019 = coll;
if(and__3822__auto____9019)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____9019;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2363__auto____9020 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9021 = (cljs.core._kv_reduce[goog.typeOf(x__2363__auto____9020)]);
if(or__3824__auto____9021)
{return or__3824__auto____9021;
} else
{var or__3824__auto____9022 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____9022)
{return or__3824__auto____9022;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____9027 = o;
if(and__3822__auto____9027)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____9027;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2363__auto____9028 = (((o == null))?null:o);
return (function (){var or__3824__auto____9029 = (cljs.core._equiv[goog.typeOf(x__2363__auto____9028)]);
if(or__3824__auto____9029)
{return or__3824__auto____9029;
} else
{var or__3824__auto____9030 = (cljs.core._equiv["_"]);
if(or__3824__auto____9030)
{return or__3824__auto____9030;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____9035 = o;
if(and__3822__auto____9035)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____9035;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2363__auto____9036 = (((o == null))?null:o);
return (function (){var or__3824__auto____9037 = (cljs.core._hash[goog.typeOf(x__2363__auto____9036)]);
if(or__3824__auto____9037)
{return or__3824__auto____9037;
} else
{var or__3824__auto____9038 = (cljs.core._hash["_"]);
if(or__3824__auto____9038)
{return or__3824__auto____9038;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____9043 = o;
if(and__3822__auto____9043)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____9043;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2363__auto____9044 = (((o == null))?null:o);
return (function (){var or__3824__auto____9045 = (cljs.core._seq[goog.typeOf(x__2363__auto____9044)]);
if(or__3824__auto____9045)
{return or__3824__auto____9045;
} else
{var or__3824__auto____9046 = (cljs.core._seq["_"]);
if(or__3824__auto____9046)
{return or__3824__auto____9046;
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
if((function (){var and__3822__auto____9051 = coll;
if(and__3822__auto____9051)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____9051;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2363__auto____9052 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9053 = (cljs.core._rseq[goog.typeOf(x__2363__auto____9052)]);
if(or__3824__auto____9053)
{return or__3824__auto____9053;
} else
{var or__3824__auto____9054 = (cljs.core._rseq["_"]);
if(or__3824__auto____9054)
{return or__3824__auto____9054;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____9059 = coll;
if(and__3822__auto____9059)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____9059;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2363__auto____9060 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9061 = (cljs.core._sorted_seq[goog.typeOf(x__2363__auto____9060)]);
if(or__3824__auto____9061)
{return or__3824__auto____9061;
} else
{var or__3824__auto____9062 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____9062)
{return or__3824__auto____9062;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____9067 = coll;
if(and__3822__auto____9067)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____9067;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2363__auto____9068 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9069 = (cljs.core._sorted_seq_from[goog.typeOf(x__2363__auto____9068)]);
if(or__3824__auto____9069)
{return or__3824__auto____9069;
} else
{var or__3824__auto____9070 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____9070)
{return or__3824__auto____9070;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____9075 = coll;
if(and__3822__auto____9075)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____9075;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2363__auto____9076 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9077 = (cljs.core._entry_key[goog.typeOf(x__2363__auto____9076)]);
if(or__3824__auto____9077)
{return or__3824__auto____9077;
} else
{var or__3824__auto____9078 = (cljs.core._entry_key["_"]);
if(or__3824__auto____9078)
{return or__3824__auto____9078;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____9083 = coll;
if(and__3822__auto____9083)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____9083;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2363__auto____9084 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9085 = (cljs.core._comparator[goog.typeOf(x__2363__auto____9084)]);
if(or__3824__auto____9085)
{return or__3824__auto____9085;
} else
{var or__3824__auto____9086 = (cljs.core._comparator["_"]);
if(or__3824__auto____9086)
{return or__3824__auto____9086;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____9091 = o;
if(and__3822__auto____9091)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____9091;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2363__auto____9092 = (((o == null))?null:o);
return (function (){var or__3824__auto____9093 = (cljs.core._pr_seq[goog.typeOf(x__2363__auto____9092)]);
if(or__3824__auto____9093)
{return or__3824__auto____9093;
} else
{var or__3824__auto____9094 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____9094)
{return or__3824__auto____9094;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____9099 = d;
if(and__3822__auto____9099)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____9099;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2363__auto____9100 = (((d == null))?null:d);
return (function (){var or__3824__auto____9101 = (cljs.core._realized_QMARK_[goog.typeOf(x__2363__auto____9100)]);
if(or__3824__auto____9101)
{return or__3824__auto____9101;
} else
{var or__3824__auto____9102 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____9102)
{return or__3824__auto____9102;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____9107 = this$;
if(and__3822__auto____9107)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____9107;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2363__auto____9108 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9109 = (cljs.core._notify_watches[goog.typeOf(x__2363__auto____9108)]);
if(or__3824__auto____9109)
{return or__3824__auto____9109;
} else
{var or__3824__auto____9110 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____9110)
{return or__3824__auto____9110;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____9115 = this$;
if(and__3822__auto____9115)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____9115;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2363__auto____9116 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9117 = (cljs.core._add_watch[goog.typeOf(x__2363__auto____9116)]);
if(or__3824__auto____9117)
{return or__3824__auto____9117;
} else
{var or__3824__auto____9118 = (cljs.core._add_watch["_"]);
if(or__3824__auto____9118)
{return or__3824__auto____9118;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____9123 = this$;
if(and__3822__auto____9123)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____9123;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2363__auto____9124 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9125 = (cljs.core._remove_watch[goog.typeOf(x__2363__auto____9124)]);
if(or__3824__auto____9125)
{return or__3824__auto____9125;
} else
{var or__3824__auto____9126 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____9126)
{return or__3824__auto____9126;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____9131 = coll;
if(and__3822__auto____9131)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____9131;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2363__auto____9132 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9133 = (cljs.core._as_transient[goog.typeOf(x__2363__auto____9132)]);
if(or__3824__auto____9133)
{return or__3824__auto____9133;
} else
{var or__3824__auto____9134 = (cljs.core._as_transient["_"]);
if(or__3824__auto____9134)
{return or__3824__auto____9134;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____9139 = tcoll;
if(and__3822__auto____9139)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____9139;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2363__auto____9140 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9141 = (cljs.core._conj_BANG_[goog.typeOf(x__2363__auto____9140)]);
if(or__3824__auto____9141)
{return or__3824__auto____9141;
} else
{var or__3824__auto____9142 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____9142)
{return or__3824__auto____9142;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____9147 = tcoll;
if(and__3822__auto____9147)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____9147;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2363__auto____9148 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9149 = (cljs.core._persistent_BANG_[goog.typeOf(x__2363__auto____9148)]);
if(or__3824__auto____9149)
{return or__3824__auto____9149;
} else
{var or__3824__auto____9150 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____9150)
{return or__3824__auto____9150;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____9155 = tcoll;
if(and__3822__auto____9155)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____9155;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2363__auto____9156 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9157 = (cljs.core._assoc_BANG_[goog.typeOf(x__2363__auto____9156)]);
if(or__3824__auto____9157)
{return or__3824__auto____9157;
} else
{var or__3824__auto____9158 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____9158)
{return or__3824__auto____9158;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____9163 = tcoll;
if(and__3822__auto____9163)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____9163;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2363__auto____9164 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9165 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2363__auto____9164)]);
if(or__3824__auto____9165)
{return or__3824__auto____9165;
} else
{var or__3824__auto____9166 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____9166)
{return or__3824__auto____9166;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____9171 = tcoll;
if(and__3822__auto____9171)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____9171;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2363__auto____9172 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9173 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2363__auto____9172)]);
if(or__3824__auto____9173)
{return or__3824__auto____9173;
} else
{var or__3824__auto____9174 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____9174)
{return or__3824__auto____9174;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____9179 = tcoll;
if(and__3822__auto____9179)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____9179;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2363__auto____9180 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9181 = (cljs.core._pop_BANG_[goog.typeOf(x__2363__auto____9180)]);
if(or__3824__auto____9181)
{return or__3824__auto____9181;
} else
{var or__3824__auto____9182 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____9182)
{return or__3824__auto____9182;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____9187 = tcoll;
if(and__3822__auto____9187)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____9187;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2363__auto____9188 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9189 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2363__auto____9188)]);
if(or__3824__auto____9189)
{return or__3824__auto____9189;
} else
{var or__3824__auto____9190 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____9190)
{return or__3824__auto____9190;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____9195 = x;
if(and__3822__auto____9195)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____9195;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2363__auto____9196 = (((x == null))?null:x);
return (function (){var or__3824__auto____9197 = (cljs.core._compare[goog.typeOf(x__2363__auto____9196)]);
if(or__3824__auto____9197)
{return or__3824__auto____9197;
} else
{var or__3824__auto____9198 = (cljs.core._compare["_"]);
if(or__3824__auto____9198)
{return or__3824__auto____9198;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____9203 = coll;
if(and__3822__auto____9203)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____9203;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2363__auto____9204 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9205 = (cljs.core._drop_first[goog.typeOf(x__2363__auto____9204)]);
if(or__3824__auto____9205)
{return or__3824__auto____9205;
} else
{var or__3824__auto____9206 = (cljs.core._drop_first["_"]);
if(or__3824__auto____9206)
{return or__3824__auto____9206;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____9211 = coll;
if(and__3822__auto____9211)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____9211;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2363__auto____9212 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9213 = (cljs.core._chunked_first[goog.typeOf(x__2363__auto____9212)]);
if(or__3824__auto____9213)
{return or__3824__auto____9213;
} else
{var or__3824__auto____9214 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____9214)
{return or__3824__auto____9214;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____9219 = coll;
if(and__3822__auto____9219)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____9219;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2363__auto____9220 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9221 = (cljs.core._chunked_rest[goog.typeOf(x__2363__auto____9220)]);
if(or__3824__auto____9221)
{return or__3824__auto____9221;
} else
{var or__3824__auto____9222 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____9222)
{return or__3824__auto____9222;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____9227 = coll;
if(and__3822__auto____9227)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____9227;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2363__auto____9228 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9229 = (cljs.core._chunked_next[goog.typeOf(x__2363__auto____9228)]);
if(or__3824__auto____9229)
{return or__3824__auto____9229;
} else
{var or__3824__auto____9230 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____9230)
{return or__3824__auto____9230;
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
var or__3824__auto____9232 = (x === y);
if(or__3824__auto____9232)
{return or__3824__auto____9232;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__9233__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__9234 = y;
var G__9235 = cljs.core.first.call(null,more);
var G__9236 = cljs.core.next.call(null,more);
x = G__9234;
y = G__9235;
more = G__9236;
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
var G__9233 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9233__delegate.call(this, x, y, more);
};
G__9233.cljs$lang$maxFixedArity = 2;
G__9233.cljs$lang$applyTo = (function (arglist__9237){
var x = cljs.core.first(arglist__9237);
var y = cljs.core.first(cljs.core.next(arglist__9237));
var more = cljs.core.rest(cljs.core.next(arglist__9237));
return G__9233__delegate(x, y, more);
});
G__9233.cljs$lang$arity$variadic = G__9233__delegate;
return G__9233;
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
var G__9238 = null;
var G__9238__2 = (function (o,k){
return null;
});
var G__9238__3 = (function (o,k,not_found){
return not_found;
});
G__9238 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__9238__2.call(this,o,k);
case 3:
return G__9238__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9238;
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
var G__9239 = null;
var G__9239__2 = (function (_,f){
return f.call(null);
});
var G__9239__3 = (function (_,f,start){
return start;
});
G__9239 = function(_,f,start){
switch(arguments.length){
case 2:
return G__9239__2.call(this,_,f);
case 3:
return G__9239__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9239;
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
var G__9240 = null;
var G__9240__2 = (function (_,n){
return null;
});
var G__9240__3 = (function (_,n,not_found){
return not_found;
});
G__9240 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__9240__2.call(this,_,n);
case 3:
return G__9240__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9240;
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
var and__3822__auto____9241 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____9241)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____9241;
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
var cnt__9254 = cljs.core._count.call(null,cicoll);
if((cnt__9254 === 0))
{return f.call(null);
} else
{var val__9255 = cljs.core._nth.call(null,cicoll,0);
var n__9256 = 1;
while(true){
if((n__9256 < cnt__9254))
{var nval__9257 = f.call(null,val__9255,cljs.core._nth.call(null,cicoll,n__9256));
if(cljs.core.reduced_QMARK_.call(null,nval__9257))
{return cljs.core.deref.call(null,nval__9257);
} else
{{
var G__9266 = nval__9257;
var G__9267 = (n__9256 + 1);
val__9255 = G__9266;
n__9256 = G__9267;
continue;
}
}
} else
{return val__9255;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__9258 = cljs.core._count.call(null,cicoll);
var val__9259 = val;
var n__9260 = 0;
while(true){
if((n__9260 < cnt__9258))
{var nval__9261 = f.call(null,val__9259,cljs.core._nth.call(null,cicoll,n__9260));
if(cljs.core.reduced_QMARK_.call(null,nval__9261))
{return cljs.core.deref.call(null,nval__9261);
} else
{{
var G__9268 = nval__9261;
var G__9269 = (n__9260 + 1);
val__9259 = G__9268;
n__9260 = G__9269;
continue;
}
}
} else
{return val__9259;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__9262 = cljs.core._count.call(null,cicoll);
var val__9263 = val;
var n__9264 = idx;
while(true){
if((n__9264 < cnt__9262))
{var nval__9265 = f.call(null,val__9263,cljs.core._nth.call(null,cicoll,n__9264));
if(cljs.core.reduced_QMARK_.call(null,nval__9265))
{return cljs.core.deref.call(null,nval__9265);
} else
{{
var G__9270 = nval__9265;
var G__9271 = (n__9264 + 1);
val__9263 = G__9270;
n__9264 = G__9271;
continue;
}
}
} else
{return val__9263;
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
var cnt__9284 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__9285 = (arr[0]);
var n__9286 = 1;
while(true){
if((n__9286 < cnt__9284))
{var nval__9287 = f.call(null,val__9285,(arr[n__9286]));
if(cljs.core.reduced_QMARK_.call(null,nval__9287))
{return cljs.core.deref.call(null,nval__9287);
} else
{{
var G__9296 = nval__9287;
var G__9297 = (n__9286 + 1);
val__9285 = G__9296;
n__9286 = G__9297;
continue;
}
}
} else
{return val__9285;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__9288 = arr.length;
var val__9289 = val;
var n__9290 = 0;
while(true){
if((n__9290 < cnt__9288))
{var nval__9291 = f.call(null,val__9289,(arr[n__9290]));
if(cljs.core.reduced_QMARK_.call(null,nval__9291))
{return cljs.core.deref.call(null,nval__9291);
} else
{{
var G__9298 = nval__9291;
var G__9299 = (n__9290 + 1);
val__9289 = G__9298;
n__9290 = G__9299;
continue;
}
}
} else
{return val__9289;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__9292 = arr.length;
var val__9293 = val;
var n__9294 = idx;
while(true){
if((n__9294 < cnt__9292))
{var nval__9295 = f.call(null,val__9293,(arr[n__9294]));
if(cljs.core.reduced_QMARK_.call(null,nval__9295))
{return cljs.core.deref.call(null,nval__9295);
} else
{{
var G__9300 = nval__9295;
var G__9301 = (n__9294 + 1);
val__9293 = G__9300;
n__9294 = G__9301;
continue;
}
}
} else
{return val__9293;
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
var this__9302 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__9303 = this;
if(((this__9303.i + 1) < this__9303.a.length))
{return (new cljs.core.IndexedSeq(this__9303.a,(this__9303.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9304 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9305 = this;
var c__9306 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__9306 > 0))
{return (new cljs.core.RSeq(coll,(c__9306 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__9307 = this;
var this__9308 = this;
return cljs.core.pr_str.call(null,this__9308);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9309 = this;
if(cljs.core.counted_QMARK_.call(null,this__9309.a))
{return cljs.core.ci_reduce.call(null,this__9309.a,f,(this__9309.a[this__9309.i]),(this__9309.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__9309.a[this__9309.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9310 = this;
if(cljs.core.counted_QMARK_.call(null,this__9310.a))
{return cljs.core.ci_reduce.call(null,this__9310.a,f,start,this__9310.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9311 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9312 = this;
return (this__9312.a.length - this__9312.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__9313 = this;
return (this__9313.a[this__9313.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__9314 = this;
if(((this__9314.i + 1) < this__9314.a.length))
{return (new cljs.core.IndexedSeq(this__9314.a,(this__9314.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9315 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9316 = this;
var i__9317 = (n + this__9316.i);
if((i__9317 < this__9316.a.length))
{return (this__9316.a[i__9317]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9318 = this;
var i__9319 = (n + this__9318.i);
if((i__9319 < this__9318.a.length))
{return (this__9318.a[i__9319]);
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
var G__9320 = null;
var G__9320__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__9320__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__9320 = function(array,f,start){
switch(arguments.length){
case 2:
return G__9320__2.call(this,array,f);
case 3:
return G__9320__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9320;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__9321 = null;
var G__9321__2 = (function (array,k){
return (array[k]);
});
var G__9321__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__9321 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__9321__2.call(this,array,k);
case 3:
return G__9321__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9321;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__9322 = null;
var G__9322__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__9322__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__9322 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__9322__2.call(this,array,n);
case 3:
return G__9322__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9322;
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
var this__9323 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9324 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__9325 = this;
var this__9326 = this;
return cljs.core.pr_str.call(null,this__9326);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9327 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9328 = this;
return (this__9328.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9329 = this;
return cljs.core._nth.call(null,this__9329.ci,this__9329.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9330 = this;
if((this__9330.i > 0))
{return (new cljs.core.RSeq(this__9330.ci,(this__9330.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9331 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__9332 = this;
return (new cljs.core.RSeq(this__9332.ci,this__9332.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9333 = this;
return this__9333.meta;
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
{if((function (){var G__9337__9338 = coll;
if(G__9337__9338)
{if((function (){var or__3824__auto____9339 = (G__9337__9338.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____9339)
{return or__3824__auto____9339;
} else
{return G__9337__9338.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__9337__9338.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9337__9338);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9337__9338);
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
{if((function (){var G__9344__9345 = coll;
if(G__9344__9345)
{if((function (){var or__3824__auto____9346 = (G__9344__9345.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9346)
{return or__3824__auto____9346;
} else
{return G__9344__9345.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9344__9345.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9344__9345);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9344__9345);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__9347 = cljs.core.seq.call(null,coll);
if((s__9347 == null))
{return null;
} else
{return cljs.core._first.call(null,s__9347);
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
{if((function (){var G__9352__9353 = coll;
if(G__9352__9353)
{if((function (){var or__3824__auto____9354 = (G__9352__9353.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9354)
{return or__3824__auto____9354;
} else
{return G__9352__9353.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9352__9353.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9352__9353);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9352__9353);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__9355 = cljs.core.seq.call(null,coll);
if(!((s__9355 == null)))
{return cljs.core._rest.call(null,s__9355);
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
{if((function (){var G__9359__9360 = coll;
if(G__9359__9360)
{if((function (){var or__3824__auto____9361 = (G__9359__9360.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____9361)
{return or__3824__auto____9361;
} else
{return G__9359__9360.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__9359__9360.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__9359__9360);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__9359__9360);
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
var sn__9363 = cljs.core.next.call(null,s);
if(!((sn__9363 == null)))
{{
var G__9364 = sn__9363;
s = G__9364;
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
var G__9365__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__9366 = conj.call(null,coll,x);
var G__9367 = cljs.core.first.call(null,xs);
var G__9368 = cljs.core.next.call(null,xs);
coll = G__9366;
x = G__9367;
xs = G__9368;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__9365 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9365__delegate.call(this, coll, x, xs);
};
G__9365.cljs$lang$maxFixedArity = 2;
G__9365.cljs$lang$applyTo = (function (arglist__9369){
var coll = cljs.core.first(arglist__9369);
var x = cljs.core.first(cljs.core.next(arglist__9369));
var xs = cljs.core.rest(cljs.core.next(arglist__9369));
return G__9365__delegate(coll, x, xs);
});
G__9365.cljs$lang$arity$variadic = G__9365__delegate;
return G__9365;
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
var s__9372 = cljs.core.seq.call(null,coll);
var acc__9373 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__9372))
{return (acc__9373 + cljs.core._count.call(null,s__9372));
} else
{{
var G__9374 = cljs.core.next.call(null,s__9372);
var G__9375 = (acc__9373 + 1);
s__9372 = G__9374;
acc__9373 = G__9375;
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
{if((function (){var G__9382__9383 = coll;
if(G__9382__9383)
{if((function (){var or__3824__auto____9384 = (G__9382__9383.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____9384)
{return or__3824__auto____9384;
} else
{return G__9382__9383.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9382__9383.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9382__9383);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9382__9383);
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
{if((function (){var G__9385__9386 = coll;
if(G__9385__9386)
{if((function (){var or__3824__auto____9387 = (G__9385__9386.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____9387)
{return or__3824__auto____9387;
} else
{return G__9385__9386.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9385__9386.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9385__9386);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9385__9386);
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
var G__9390__delegate = function (coll,k,v,kvs){
while(true){
var ret__9389 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__9391 = ret__9389;
var G__9392 = cljs.core.first.call(null,kvs);
var G__9393 = cljs.core.second.call(null,kvs);
var G__9394 = cljs.core.nnext.call(null,kvs);
coll = G__9391;
k = G__9392;
v = G__9393;
kvs = G__9394;
continue;
}
} else
{return ret__9389;
}
break;
}
};
var G__9390 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9390__delegate.call(this, coll, k, v, kvs);
};
G__9390.cljs$lang$maxFixedArity = 3;
G__9390.cljs$lang$applyTo = (function (arglist__9395){
var coll = cljs.core.first(arglist__9395);
var k = cljs.core.first(cljs.core.next(arglist__9395));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9395)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9395)));
return G__9390__delegate(coll, k, v, kvs);
});
G__9390.cljs$lang$arity$variadic = G__9390__delegate;
return G__9390;
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
var G__9398__delegate = function (coll,k,ks){
while(true){
var ret__9397 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__9399 = ret__9397;
var G__9400 = cljs.core.first.call(null,ks);
var G__9401 = cljs.core.next.call(null,ks);
coll = G__9399;
k = G__9400;
ks = G__9401;
continue;
}
} else
{return ret__9397;
}
break;
}
};
var G__9398 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9398__delegate.call(this, coll, k, ks);
};
G__9398.cljs$lang$maxFixedArity = 2;
G__9398.cljs$lang$applyTo = (function (arglist__9402){
var coll = cljs.core.first(arglist__9402);
var k = cljs.core.first(cljs.core.next(arglist__9402));
var ks = cljs.core.rest(cljs.core.next(arglist__9402));
return G__9398__delegate(coll, k, ks);
});
G__9398.cljs$lang$arity$variadic = G__9398__delegate;
return G__9398;
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
if((function (){var G__9406__9407 = o;
if(G__9406__9407)
{if((function (){var or__3824__auto____9408 = (G__9406__9407.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9408)
{return or__3824__auto____9408;
} else
{return G__9406__9407.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9406__9407.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9406__9407);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9406__9407);
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
var G__9411__delegate = function (coll,k,ks){
while(true){
var ret__9410 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__9412 = ret__9410;
var G__9413 = cljs.core.first.call(null,ks);
var G__9414 = cljs.core.next.call(null,ks);
coll = G__9412;
k = G__9413;
ks = G__9414;
continue;
}
} else
{return ret__9410;
}
break;
}
};
var G__9411 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9411__delegate.call(this, coll, k, ks);
};
G__9411.cljs$lang$maxFixedArity = 2;
G__9411.cljs$lang$applyTo = (function (arglist__9415){
var coll = cljs.core.first(arglist__9415);
var k = cljs.core.first(cljs.core.next(arglist__9415));
var ks = cljs.core.rest(cljs.core.next(arglist__9415));
return G__9411__delegate(coll, k, ks);
});
G__9411.cljs$lang$arity$variadic = G__9411__delegate;
return G__9411;
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
var h__9417 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__9417);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__9417;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__9419 = (cljs.core.string_hash_cache[k]);
if(!((h__9419 == null)))
{return h__9419;
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
if((function (){var and__3822__auto____9421 = goog.isString(o);
if(and__3822__auto____9421)
{return check_cache;
} else
{return and__3822__auto____9421;
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
{var G__9425__9426 = x;
if(G__9425__9426)
{if((function (){var or__3824__auto____9427 = (G__9425__9426.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____9427)
{return or__3824__auto____9427;
} else
{return G__9425__9426.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__9425__9426.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__9425__9426);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__9425__9426);
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
{var G__9431__9432 = x;
if(G__9431__9432)
{if((function (){var or__3824__auto____9433 = (G__9431__9432.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____9433)
{return or__3824__auto____9433;
} else
{return G__9431__9432.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__9431__9432.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__9431__9432);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__9431__9432);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__9437__9438 = x;
if(G__9437__9438)
{if((function (){var or__3824__auto____9439 = (G__9437__9438.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____9439)
{return or__3824__auto____9439;
} else
{return G__9437__9438.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__9437__9438.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__9437__9438);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__9437__9438);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__9443__9444 = x;
if(G__9443__9444)
{if((function (){var or__3824__auto____9445 = (G__9443__9444.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____9445)
{return or__3824__auto____9445;
} else
{return G__9443__9444.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__9443__9444.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__9443__9444);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__9443__9444);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__9449__9450 = x;
if(G__9449__9450)
{if((function (){var or__3824__auto____9451 = (G__9449__9450.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____9451)
{return or__3824__auto____9451;
} else
{return G__9449__9450.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__9449__9450.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__9449__9450);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__9449__9450);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__9455__9456 = x;
if(G__9455__9456)
{if((function (){var or__3824__auto____9457 = (G__9455__9456.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____9457)
{return or__3824__auto____9457;
} else
{return G__9455__9456.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9455__9456.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9455__9456);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9455__9456);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__9461__9462 = x;
if(G__9461__9462)
{if((function (){var or__3824__auto____9463 = (G__9461__9462.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____9463)
{return or__3824__auto____9463;
} else
{return G__9461__9462.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9461__9462.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9461__9462);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9461__9462);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__9467__9468 = x;
if(G__9467__9468)
{if((function (){var or__3824__auto____9469 = (G__9467__9468.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____9469)
{return or__3824__auto____9469;
} else
{return G__9467__9468.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__9467__9468.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__9467__9468);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__9467__9468);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__9473__9474 = x;
if(G__9473__9474)
{if((function (){var or__3824__auto____9475 = (G__9473__9474.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____9475)
{return or__3824__auto____9475;
} else
{return G__9473__9474.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__9473__9474.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__9473__9474);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__9473__9474);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__9479__9480 = x;
if(G__9479__9480)
{if(cljs.core.truth_((function (){var or__3824__auto____9481 = null;
if(cljs.core.truth_(or__3824__auto____9481))
{return or__3824__auto____9481;
} else
{return G__9479__9480.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__9479__9480.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__9479__9480);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__9479__9480);
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
var G__9482__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__9482 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9482__delegate.call(this, keyvals);
};
G__9482.cljs$lang$maxFixedArity = 0;
G__9482.cljs$lang$applyTo = (function (arglist__9483){
var keyvals = cljs.core.seq(arglist__9483);;
return G__9482__delegate(keyvals);
});
G__9482.cljs$lang$arity$variadic = G__9482__delegate;
return G__9482;
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
var keys__9485 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__9485.push(key);
}));
return keys__9485;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__9489 = i;
var j__9490 = j;
var len__9491 = len;
while(true){
if((len__9491 === 0))
{return to;
} else
{(to[j__9490] = (from[i__9489]));
{
var G__9492 = (i__9489 + 1);
var G__9493 = (j__9490 + 1);
var G__9494 = (len__9491 - 1);
i__9489 = G__9492;
j__9490 = G__9493;
len__9491 = G__9494;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__9498 = (i + (len - 1));
var j__9499 = (j + (len - 1));
var len__9500 = len;
while(true){
if((len__9500 === 0))
{return to;
} else
{(to[j__9499] = (from[i__9498]));
{
var G__9501 = (i__9498 - 1);
var G__9502 = (j__9499 - 1);
var G__9503 = (len__9500 - 1);
i__9498 = G__9501;
j__9499 = G__9502;
len__9500 = G__9503;
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
{var G__9507__9508 = s;
if(G__9507__9508)
{if((function (){var or__3824__auto____9509 = (G__9507__9508.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9509)
{return or__3824__auto____9509;
} else
{return G__9507__9508.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9507__9508.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9507__9508);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9507__9508);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__9513__9514 = s;
if(G__9513__9514)
{if((function (){var or__3824__auto____9515 = (G__9513__9514.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____9515)
{return or__3824__auto____9515;
} else
{return G__9513__9514.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__9513__9514.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__9513__9514);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__9513__9514);
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
var and__3822__auto____9518 = goog.isString(x);
if(and__3822__auto____9518)
{return !((function (){var or__3824__auto____9519 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____9519)
{return or__3824__auto____9519;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____9518;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____9521 = goog.isString(x);
if(and__3822__auto____9521)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____9521;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____9523 = goog.isString(x);
if(and__3822__auto____9523)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____9523;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____9528 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____9528)
{return or__3824__auto____9528;
} else
{var G__9529__9530 = f;
if(G__9529__9530)
{if((function (){var or__3824__auto____9531 = (G__9529__9530.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____9531)
{return or__3824__auto____9531;
} else
{return G__9529__9530.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__9529__9530.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__9529__9530);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__9529__9530);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____9533 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____9533)
{return (n == n.toFixed());
} else
{return and__3822__auto____9533;
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
if(cljs.core.truth_((function (){var and__3822__auto____9536 = coll;
if(cljs.core.truth_(and__3822__auto____9536))
{var and__3822__auto____9537 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____9537)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____9537;
}
} else
{return and__3822__auto____9536;
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
var G__9546__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__9542 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__9543 = more;
while(true){
var x__9544 = cljs.core.first.call(null,xs__9543);
var etc__9545 = cljs.core.next.call(null,xs__9543);
if(cljs.core.truth_(xs__9543))
{if(cljs.core.contains_QMARK_.call(null,s__9542,x__9544))
{return false;
} else
{{
var G__9547 = cljs.core.conj.call(null,s__9542,x__9544);
var G__9548 = etc__9545;
s__9542 = G__9547;
xs__9543 = G__9548;
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
var G__9546 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9546__delegate.call(this, x, y, more);
};
G__9546.cljs$lang$maxFixedArity = 2;
G__9546.cljs$lang$applyTo = (function (arglist__9549){
var x = cljs.core.first(arglist__9549);
var y = cljs.core.first(cljs.core.next(arglist__9549));
var more = cljs.core.rest(cljs.core.next(arglist__9549));
return G__9546__delegate(x, y, more);
});
G__9546.cljs$lang$arity$variadic = G__9546__delegate;
return G__9546;
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
{if((function (){var G__9553__9554 = x;
if(G__9553__9554)
{if(cljs.core.truth_((function (){var or__3824__auto____9555 = null;
if(cljs.core.truth_(or__3824__auto____9555))
{return or__3824__auto____9555;
} else
{return G__9553__9554.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__9553__9554.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__9553__9554);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__9553__9554);
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
var xl__9560 = cljs.core.count.call(null,xs);
var yl__9561 = cljs.core.count.call(null,ys);
if((xl__9560 < yl__9561))
{return -1;
} else
{if((xl__9560 > yl__9561))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__9560,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__9562 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____9563 = (d__9562 === 0);
if(and__3822__auto____9563)
{return ((n + 1) < len);
} else
{return and__3822__auto____9563;
}
})())
{{
var G__9564 = xs;
var G__9565 = ys;
var G__9566 = len;
var G__9567 = (n + 1);
xs = G__9564;
ys = G__9565;
len = G__9566;
n = G__9567;
continue;
}
} else
{return d__9562;
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
var r__9569 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__9569))
{return r__9569;
} else
{if(cljs.core.truth_(r__9569))
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
{var a__9571 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__9571,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9571);
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
var temp__3971__auto____9577 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9577)
{var s__9578 = temp__3971__auto____9577;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9578),cljs.core.next.call(null,s__9578));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__9579 = val;
var coll__9580 = cljs.core.seq.call(null,coll);
while(true){
if(coll__9580)
{var nval__9581 = f.call(null,val__9579,cljs.core.first.call(null,coll__9580));
if(cljs.core.reduced_QMARK_.call(null,nval__9581))
{return cljs.core.deref.call(null,nval__9581);
} else
{{
var G__9582 = nval__9581;
var G__9583 = cljs.core.next.call(null,coll__9580);
val__9579 = G__9582;
coll__9580 = G__9583;
continue;
}
}
} else
{return val__9579;
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
var a__9585 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__9585);
return cljs.core.vec.call(null,a__9585);
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
if((function (){var G__9592__9593 = coll;
if(G__9592__9593)
{if((function (){var or__3824__auto____9594 = (G__9592__9593.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____9594)
{return or__3824__auto____9594;
} else
{return G__9592__9593.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9592__9593.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9592__9593);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9592__9593);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__9595__9596 = coll;
if(G__9595__9596)
{if((function (){var or__3824__auto____9597 = (G__9595__9596.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____9597)
{return or__3824__auto____9597;
} else
{return G__9595__9596.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9595__9596.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9595__9596);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9595__9596);
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
var this__9598 = this;
return this__9598.val;
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
var G__9599__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9599 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9599__delegate.call(this, x, y, more);
};
G__9599.cljs$lang$maxFixedArity = 2;
G__9599.cljs$lang$applyTo = (function (arglist__9600){
var x = cljs.core.first(arglist__9600);
var y = cljs.core.first(cljs.core.next(arglist__9600));
var more = cljs.core.rest(cljs.core.next(arglist__9600));
return G__9599__delegate(x, y, more);
});
G__9599.cljs$lang$arity$variadic = G__9599__delegate;
return G__9599;
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
var G__9601__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9601 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9601__delegate.call(this, x, y, more);
};
G__9601.cljs$lang$maxFixedArity = 2;
G__9601.cljs$lang$applyTo = (function (arglist__9602){
var x = cljs.core.first(arglist__9602);
var y = cljs.core.first(cljs.core.next(arglist__9602));
var more = cljs.core.rest(cljs.core.next(arglist__9602));
return G__9601__delegate(x, y, more);
});
G__9601.cljs$lang$arity$variadic = G__9601__delegate;
return G__9601;
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
var G__9603__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9603 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9603__delegate.call(this, x, y, more);
};
G__9603.cljs$lang$maxFixedArity = 2;
G__9603.cljs$lang$applyTo = (function (arglist__9604){
var x = cljs.core.first(arglist__9604);
var y = cljs.core.first(cljs.core.next(arglist__9604));
var more = cljs.core.rest(cljs.core.next(arglist__9604));
return G__9603__delegate(x, y, more);
});
G__9603.cljs$lang$arity$variadic = G__9603__delegate;
return G__9603;
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
var G__9605__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9605 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9605__delegate.call(this, x, y, more);
};
G__9605.cljs$lang$maxFixedArity = 2;
G__9605.cljs$lang$applyTo = (function (arglist__9606){
var x = cljs.core.first(arglist__9606);
var y = cljs.core.first(cljs.core.next(arglist__9606));
var more = cljs.core.rest(cljs.core.next(arglist__9606));
return G__9605__delegate(x, y, more);
});
G__9605.cljs$lang$arity$variadic = G__9605__delegate;
return G__9605;
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
var G__9607__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__9608 = y;
var G__9609 = cljs.core.first.call(null,more);
var G__9610 = cljs.core.next.call(null,more);
x = G__9608;
y = G__9609;
more = G__9610;
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
var G__9607 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9607__delegate.call(this, x, y, more);
};
G__9607.cljs$lang$maxFixedArity = 2;
G__9607.cljs$lang$applyTo = (function (arglist__9611){
var x = cljs.core.first(arglist__9611);
var y = cljs.core.first(cljs.core.next(arglist__9611));
var more = cljs.core.rest(cljs.core.next(arglist__9611));
return G__9607__delegate(x, y, more);
});
G__9607.cljs$lang$arity$variadic = G__9607__delegate;
return G__9607;
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
var G__9612__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__9613 = y;
var G__9614 = cljs.core.first.call(null,more);
var G__9615 = cljs.core.next.call(null,more);
x = G__9613;
y = G__9614;
more = G__9615;
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
var G__9612 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9612__delegate.call(this, x, y, more);
};
G__9612.cljs$lang$maxFixedArity = 2;
G__9612.cljs$lang$applyTo = (function (arglist__9616){
var x = cljs.core.first(arglist__9616);
var y = cljs.core.first(cljs.core.next(arglist__9616));
var more = cljs.core.rest(cljs.core.next(arglist__9616));
return G__9612__delegate(x, y, more);
});
G__9612.cljs$lang$arity$variadic = G__9612__delegate;
return G__9612;
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
var G__9617__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__9618 = y;
var G__9619 = cljs.core.first.call(null,more);
var G__9620 = cljs.core.next.call(null,more);
x = G__9618;
y = G__9619;
more = G__9620;
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
var G__9617 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9617__delegate.call(this, x, y, more);
};
G__9617.cljs$lang$maxFixedArity = 2;
G__9617.cljs$lang$applyTo = (function (arglist__9621){
var x = cljs.core.first(arglist__9621);
var y = cljs.core.first(cljs.core.next(arglist__9621));
var more = cljs.core.rest(cljs.core.next(arglist__9621));
return G__9617__delegate(x, y, more);
});
G__9617.cljs$lang$arity$variadic = G__9617__delegate;
return G__9617;
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
var G__9622__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__9623 = y;
var G__9624 = cljs.core.first.call(null,more);
var G__9625 = cljs.core.next.call(null,more);
x = G__9623;
y = G__9624;
more = G__9625;
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
var G__9622 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9622__delegate.call(this, x, y, more);
};
G__9622.cljs$lang$maxFixedArity = 2;
G__9622.cljs$lang$applyTo = (function (arglist__9626){
var x = cljs.core.first(arglist__9626);
var y = cljs.core.first(cljs.core.next(arglist__9626));
var more = cljs.core.rest(cljs.core.next(arglist__9626));
return G__9622__delegate(x, y, more);
});
G__9622.cljs$lang$arity$variadic = G__9622__delegate;
return G__9622;
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
var G__9627__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9627 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9627__delegate.call(this, x, y, more);
};
G__9627.cljs$lang$maxFixedArity = 2;
G__9627.cljs$lang$applyTo = (function (arglist__9628){
var x = cljs.core.first(arglist__9628);
var y = cljs.core.first(cljs.core.next(arglist__9628));
var more = cljs.core.rest(cljs.core.next(arglist__9628));
return G__9627__delegate(x, y, more);
});
G__9627.cljs$lang$arity$variadic = G__9627__delegate;
return G__9627;
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
var G__9629__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9629 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9629__delegate.call(this, x, y, more);
};
G__9629.cljs$lang$maxFixedArity = 2;
G__9629.cljs$lang$applyTo = (function (arglist__9630){
var x = cljs.core.first(arglist__9630);
var y = cljs.core.first(cljs.core.next(arglist__9630));
var more = cljs.core.rest(cljs.core.next(arglist__9630));
return G__9629__delegate(x, y, more);
});
G__9629.cljs$lang$arity$variadic = G__9629__delegate;
return G__9629;
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
var rem__9632 = (n % d);
return cljs.core.fix.call(null,((n - rem__9632) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9634 = cljs.core.quot.call(null,n,d);
return (n - (d * q__9634));
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
var v__9637 = (v - ((v >> 1) & 1431655765));
var v__9638 = ((v__9637 & 858993459) + ((v__9637 >> 2) & 858993459));
return ((((v__9638 + (v__9638 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__9639__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__9640 = y;
var G__9641 = cljs.core.first.call(null,more);
var G__9642 = cljs.core.next.call(null,more);
x = G__9640;
y = G__9641;
more = G__9642;
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
var G__9639 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9639__delegate.call(this, x, y, more);
};
G__9639.cljs$lang$maxFixedArity = 2;
G__9639.cljs$lang$applyTo = (function (arglist__9643){
var x = cljs.core.first(arglist__9643);
var y = cljs.core.first(cljs.core.next(arglist__9643));
var more = cljs.core.rest(cljs.core.next(arglist__9643));
return G__9639__delegate(x, y, more);
});
G__9639.cljs$lang$arity$variadic = G__9639__delegate;
return G__9639;
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
var n__9647 = n;
var xs__9648 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9649 = xs__9648;
if(and__3822__auto____9649)
{return (n__9647 > 0);
} else
{return and__3822__auto____9649;
}
})()))
{{
var G__9650 = (n__9647 - 1);
var G__9651 = cljs.core.next.call(null,xs__9648);
n__9647 = G__9650;
xs__9648 = G__9651;
continue;
}
} else
{return xs__9648;
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
var G__9652__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9653 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9654 = cljs.core.next.call(null,more);
sb = G__9653;
more = G__9654;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9652 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9652__delegate.call(this, x, ys);
};
G__9652.cljs$lang$maxFixedArity = 1;
G__9652.cljs$lang$applyTo = (function (arglist__9655){
var x = cljs.core.first(arglist__9655);
var ys = cljs.core.rest(arglist__9655);
return G__9652__delegate(x, ys);
});
G__9652.cljs$lang$arity$variadic = G__9652__delegate;
return G__9652;
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
var G__9656__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9657 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__9658 = cljs.core.next.call(null,more);
sb = G__9657;
more = G__9658;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__9656 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9656__delegate.call(this, x, ys);
};
G__9656.cljs$lang$maxFixedArity = 1;
G__9656.cljs$lang$applyTo = (function (arglist__9659){
var x = cljs.core.first(arglist__9659);
var ys = cljs.core.rest(arglist__9659);
return G__9656__delegate(x, ys);
});
G__9656.cljs$lang$arity$variadic = G__9656__delegate;
return G__9656;
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
format.cljs$lang$applyTo = (function (arglist__9660){
var fmt = cljs.core.first(arglist__9660);
var args = cljs.core.rest(arglist__9660);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9663 = cljs.core.seq.call(null,x);
var ys__9664 = cljs.core.seq.call(null,y);
while(true){
if((xs__9663 == null))
{return (ys__9664 == null);
} else
{if((ys__9664 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9663),cljs.core.first.call(null,ys__9664)))
{{
var G__9665 = cljs.core.next.call(null,xs__9663);
var G__9666 = cljs.core.next.call(null,ys__9664);
xs__9663 = G__9665;
ys__9664 = G__9666;
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
return cljs.core.reduce.call(null,(function (p1__9667_SHARP_,p2__9668_SHARP_){
return cljs.core.hash_combine.call(null,p1__9667_SHARP_,cljs.core.hash.call(null,p2__9668_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__9672 = 0;
var s__9673 = cljs.core.seq.call(null,m);
while(true){
if(s__9673)
{var e__9674 = cljs.core.first.call(null,s__9673);
{
var G__9675 = ((h__9672 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__9674)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__9674)))) % 4503599627370496);
var G__9676 = cljs.core.next.call(null,s__9673);
h__9672 = G__9675;
s__9673 = G__9676;
continue;
}
} else
{return h__9672;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__9680 = 0;
var s__9681 = cljs.core.seq.call(null,s);
while(true){
if(s__9681)
{var e__9682 = cljs.core.first.call(null,s__9681);
{
var G__9683 = ((h__9680 + cljs.core.hash.call(null,e__9682)) % 4503599627370496);
var G__9684 = cljs.core.next.call(null,s__9681);
h__9680 = G__9683;
s__9681 = G__9684;
continue;
}
} else
{return h__9680;
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
var G__9705__9706 = cljs.core.seq.call(null,fn_map);
if(G__9705__9706)
{var G__9708__9710 = cljs.core.first.call(null,G__9705__9706);
var vec__9709__9711 = G__9708__9710;
var key_name__9712 = cljs.core.nth.call(null,vec__9709__9711,0,null);
var f__9713 = cljs.core.nth.call(null,vec__9709__9711,1,null);
var G__9705__9714 = G__9705__9706;
var G__9708__9715 = G__9708__9710;
var G__9705__9716 = G__9705__9714;
while(true){
var vec__9717__9718 = G__9708__9715;
var key_name__9719 = cljs.core.nth.call(null,vec__9717__9718,0,null);
var f__9720 = cljs.core.nth.call(null,vec__9717__9718,1,null);
var G__9705__9721 = G__9705__9716;
var str_name__9722 = cljs.core.name.call(null,key_name__9719);
(obj[str_name__9722] = f__9720);
var temp__3974__auto____9723 = cljs.core.next.call(null,G__9705__9721);
if(temp__3974__auto____9723)
{var G__9705__9724 = temp__3974__auto____9723;
{
var G__9725 = cljs.core.first.call(null,G__9705__9724);
var G__9726 = G__9705__9724;
G__9708__9715 = G__9725;
G__9705__9716 = G__9726;
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
var this__9727 = this;
var h__2192__auto____9728 = this__9727.__hash;
if(!((h__2192__auto____9728 == null)))
{return h__2192__auto____9728;
} else
{var h__2192__auto____9729 = cljs.core.hash_coll.call(null,coll);
this__9727.__hash = h__2192__auto____9729;
return h__2192__auto____9729;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9730 = this;
if((this__9730.count === 1))
{return null;
} else
{return this__9730.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9731 = this;
return (new cljs.core.List(this__9731.meta,o,coll,(this__9731.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__9732 = this;
var this__9733 = this;
return cljs.core.pr_str.call(null,this__9733);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9734 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9735 = this;
return this__9735.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9736 = this;
return this__9736.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9737 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9738 = this;
return this__9738.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9739 = this;
if((this__9739.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__9739.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9740 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9741 = this;
return (new cljs.core.List(meta,this__9741.first,this__9741.rest,this__9741.count,this__9741.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9742 = this;
return this__9742.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9743 = this;
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
var this__9744 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9745 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9746 = this;
return (new cljs.core.List(this__9746.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__9747 = this;
var this__9748 = this;
return cljs.core.pr_str.call(null,this__9748);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9749 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9750 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9751 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9752 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9753 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9754 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9755 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9756 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9757 = this;
return this__9757.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9758 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__9762__9763 = coll;
if(G__9762__9763)
{if((function (){var or__3824__auto____9764 = (G__9762__9763.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____9764)
{return or__3824__auto____9764;
} else
{return G__9762__9763.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__9762__9763.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__9762__9763);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__9762__9763);
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
var G__9765__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__9765 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9765__delegate.call(this, x, y, z, items);
};
G__9765.cljs$lang$maxFixedArity = 3;
G__9765.cljs$lang$applyTo = (function (arglist__9766){
var x = cljs.core.first(arglist__9766);
var y = cljs.core.first(cljs.core.next(arglist__9766));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9766)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9766)));
return G__9765__delegate(x, y, z, items);
});
G__9765.cljs$lang$arity$variadic = G__9765__delegate;
return G__9765;
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
var this__9767 = this;
var h__2192__auto____9768 = this__9767.__hash;
if(!((h__2192__auto____9768 == null)))
{return h__2192__auto____9768;
} else
{var h__2192__auto____9769 = cljs.core.hash_coll.call(null,coll);
this__9767.__hash = h__2192__auto____9769;
return h__2192__auto____9769;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9770 = this;
if((this__9770.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__9770.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9771 = this;
return (new cljs.core.Cons(null,o,coll,this__9771.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__9772 = this;
var this__9773 = this;
return cljs.core.pr_str.call(null,this__9773);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9774 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9775 = this;
return this__9775.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9776 = this;
if((this__9776.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__9776.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9777 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9778 = this;
return (new cljs.core.Cons(meta,this__9778.first,this__9778.rest,this__9778.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9779 = this;
return this__9779.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9780 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9780.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____9785 = (coll == null);
if(or__3824__auto____9785)
{return or__3824__auto____9785;
} else
{var G__9786__9787 = coll;
if(G__9786__9787)
{if((function (){var or__3824__auto____9788 = (G__9786__9787.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9788)
{return or__3824__auto____9788;
} else
{return G__9786__9787.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9786__9787.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9786__9787);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9786__9787);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__9792__9793 = x;
if(G__9792__9793)
{if((function (){var or__3824__auto____9794 = (G__9792__9793.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____9794)
{return or__3824__auto____9794;
} else
{return G__9792__9793.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__9792__9793.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__9792__9793);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__9792__9793);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__9795 = null;
var G__9795__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9795__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9795 = function(string,f,start){
switch(arguments.length){
case 2:
return G__9795__2.call(this,string,f);
case 3:
return G__9795__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9795;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9796 = null;
var G__9796__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9796__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9796 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__9796__2.call(this,string,k);
case 3:
return G__9796__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9796;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9797 = null;
var G__9797__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__9797__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9797 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__9797__2.call(this,string,n);
case 3:
return G__9797__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9797;
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
var G__9809 = null;
var G__9809__2 = (function (this_sym9800,coll){
var this__9802 = this;
var this_sym9800__9803 = this;
var ___9804 = this_sym9800__9803;
if((coll == null))
{return null;
} else
{var strobj__9805 = coll.strobj;
if((strobj__9805 == null))
{return cljs.core._lookup.call(null,coll,this__9802.k,null);
} else
{return (strobj__9805[this__9802.k]);
}
}
});
var G__9809__3 = (function (this_sym9801,coll,not_found){
var this__9802 = this;
var this_sym9801__9806 = this;
var ___9807 = this_sym9801__9806;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__9802.k,not_found);
}
});
G__9809 = function(this_sym9801,coll,not_found){
switch(arguments.length){
case 2:
return G__9809__2.call(this,this_sym9801,coll);
case 3:
return G__9809__3.call(this,this_sym9801,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9809;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym9798,args9799){
var this__9808 = this;
return this_sym9798.call.apply(this_sym9798,[this_sym9798].concat(args9799.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__9818 = null;
var G__9818__2 = (function (this_sym9812,coll){
var this_sym9812__9814 = this;
var this__9815 = this_sym9812__9814;
return cljs.core._lookup.call(null,coll,this__9815.toString(),null);
});
var G__9818__3 = (function (this_sym9813,coll,not_found){
var this_sym9813__9816 = this;
var this__9817 = this_sym9813__9816;
return cljs.core._lookup.call(null,coll,this__9817.toString(),not_found);
});
G__9818 = function(this_sym9813,coll,not_found){
switch(arguments.length){
case 2:
return G__9818__2.call(this,this_sym9813,coll);
case 3:
return G__9818__3.call(this,this_sym9813,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9818;
})()
;
String.prototype.apply = (function (this_sym9810,args9811){
return this_sym9810.call.apply(this_sym9810,[this_sym9810].concat(args9811.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__9820 = lazy_seq.x;
if(lazy_seq.realized)
{return x__9820;
} else
{lazy_seq.x = x__9820.call(null);
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
var this__9821 = this;
var h__2192__auto____9822 = this__9821.__hash;
if(!((h__2192__auto____9822 == null)))
{return h__2192__auto____9822;
} else
{var h__2192__auto____9823 = cljs.core.hash_coll.call(null,coll);
this__9821.__hash = h__2192__auto____9823;
return h__2192__auto____9823;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9824 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9825 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__9826 = this;
var this__9827 = this;
return cljs.core.pr_str.call(null,this__9827);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9828 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9829 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9830 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9831 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9832 = this;
return (new cljs.core.LazySeq(meta,this__9832.realized,this__9832.x,this__9832.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9833 = this;
return this__9833.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9834 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9834.meta);
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
var this__9835 = this;
return this__9835.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__9836 = this;
var ___9837 = this;
(this__9836.buf[this__9836.end] = o);
return this__9836.end = (this__9836.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__9838 = this;
var ___9839 = this;
var ret__9840 = (new cljs.core.ArrayChunk(this__9838.buf,0,this__9838.end));
this__9838.buf = null;
return ret__9840;
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
var this__9841 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__9841.arr[this__9841.off]),(this__9841.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9842 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__9842.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__9843 = this;
if((this__9843.off === this__9843.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__9843.arr,(this__9843.off + 1),this__9843.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__9844 = this;
return (this__9844.arr[(this__9844.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__9845 = this;
if((function (){var and__3822__auto____9846 = (i >= 0);
if(and__3822__auto____9846)
{return (i < (this__9845.end - this__9845.off));
} else
{return and__3822__auto____9846;
}
})())
{return (this__9845.arr[(this__9845.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9847 = this;
return (this__9847.end - this__9847.off);
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
var this__9848 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9849 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9850 = this;
return cljs.core._nth.call(null,this__9850.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9851 = this;
if((cljs.core._count.call(null,this__9851.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__9851.chunk),this__9851.more,this__9851.meta));
} else
{if((this__9851.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__9851.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9852 = this;
if((this__9852.more == null))
{return null;
} else
{return this__9852.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9853 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9854 = this;
return (new cljs.core.ChunkedCons(this__9854.chunk,this__9854.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9855 = this;
return this__9855.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9856 = this;
return this__9856.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9857 = this;
if((this__9857.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__9857.more;
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
if((function (){var G__9861__9862 = s;
if(G__9861__9862)
{if(cljs.core.truth_((function (){var or__3824__auto____9863 = null;
if(cljs.core.truth_(or__3824__auto____9863))
{return or__3824__auto____9863;
} else
{return G__9861__9862.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__9861__9862.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__9861__9862);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__9861__9862);
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
var ary__9866 = [];
var s__9867 = s;
while(true){
if(cljs.core.seq.call(null,s__9867))
{ary__9866.push(cljs.core.first.call(null,s__9867));
{
var G__9868 = cljs.core.next.call(null,s__9867);
s__9867 = G__9868;
continue;
}
} else
{return ary__9866;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__9872 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__9873 = 0;
var xs__9874 = cljs.core.seq.call(null,coll);
while(true){
if(xs__9874)
{(ret__9872[i__9873] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__9874)));
{
var G__9875 = (i__9873 + 1);
var G__9876 = cljs.core.next.call(null,xs__9874);
i__9873 = G__9875;
xs__9874 = G__9876;
continue;
}
} else
{}
break;
}
return ret__9872;
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
var a__9884 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9885 = cljs.core.seq.call(null,init_val_or_seq);
var i__9886 = 0;
var s__9887 = s__9885;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9888 = s__9887;
if(and__3822__auto____9888)
{return (i__9886 < size);
} else
{return and__3822__auto____9888;
}
})()))
{(a__9884[i__9886] = cljs.core.first.call(null,s__9887));
{
var G__9891 = (i__9886 + 1);
var G__9892 = cljs.core.next.call(null,s__9887);
i__9886 = G__9891;
s__9887 = G__9892;
continue;
}
} else
{return a__9884;
}
break;
}
} else
{var n__2527__auto____9889 = size;
var i__9890 = 0;
while(true){
if((i__9890 < n__2527__auto____9889))
{(a__9884[i__9890] = init_val_or_seq);
{
var G__9893 = (i__9890 + 1);
i__9890 = G__9893;
continue;
}
} else
{}
break;
}
return a__9884;
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
var a__9901 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9902 = cljs.core.seq.call(null,init_val_or_seq);
var i__9903 = 0;
var s__9904 = s__9902;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9905 = s__9904;
if(and__3822__auto____9905)
{return (i__9903 < size);
} else
{return and__3822__auto____9905;
}
})()))
{(a__9901[i__9903] = cljs.core.first.call(null,s__9904));
{
var G__9908 = (i__9903 + 1);
var G__9909 = cljs.core.next.call(null,s__9904);
i__9903 = G__9908;
s__9904 = G__9909;
continue;
}
} else
{return a__9901;
}
break;
}
} else
{var n__2527__auto____9906 = size;
var i__9907 = 0;
while(true){
if((i__9907 < n__2527__auto____9906))
{(a__9901[i__9907] = init_val_or_seq);
{
var G__9910 = (i__9907 + 1);
i__9907 = G__9910;
continue;
}
} else
{}
break;
}
return a__9901;
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
var a__9918 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9919 = cljs.core.seq.call(null,init_val_or_seq);
var i__9920 = 0;
var s__9921 = s__9919;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9922 = s__9921;
if(and__3822__auto____9922)
{return (i__9920 < size);
} else
{return and__3822__auto____9922;
}
})()))
{(a__9918[i__9920] = cljs.core.first.call(null,s__9921));
{
var G__9925 = (i__9920 + 1);
var G__9926 = cljs.core.next.call(null,s__9921);
i__9920 = G__9925;
s__9921 = G__9926;
continue;
}
} else
{return a__9918;
}
break;
}
} else
{var n__2527__auto____9923 = size;
var i__9924 = 0;
while(true){
if((i__9924 < n__2527__auto____9923))
{(a__9918[i__9924] = init_val_or_seq);
{
var G__9927 = (i__9924 + 1);
i__9924 = G__9927;
continue;
}
} else
{}
break;
}
return a__9918;
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
{var s__9932 = s;
var i__9933 = n;
var sum__9934 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9935 = (i__9933 > 0);
if(and__3822__auto____9935)
{return cljs.core.seq.call(null,s__9932);
} else
{return and__3822__auto____9935;
}
})()))
{{
var G__9936 = cljs.core.next.call(null,s__9932);
var G__9937 = (i__9933 - 1);
var G__9938 = (sum__9934 + 1);
s__9932 = G__9936;
i__9933 = G__9937;
sum__9934 = G__9938;
continue;
}
} else
{return sum__9934;
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
var s__9943 = cljs.core.seq.call(null,x);
if(s__9943)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__9943))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__9943),concat.call(null,cljs.core.chunk_rest.call(null,s__9943),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9943),concat.call(null,cljs.core.rest.call(null,s__9943),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__9947__delegate = function (x,y,zs){
var cat__9946 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9945 = cljs.core.seq.call(null,xys);
if(xys__9945)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__9945))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__9945),cat.call(null,cljs.core.chunk_rest.call(null,xys__9945),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9945),cat.call(null,cljs.core.rest.call(null,xys__9945),zs));
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
return cat__9946.call(null,concat.call(null,x,y),zs);
};
var G__9947 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9947__delegate.call(this, x, y, zs);
};
G__9947.cljs$lang$maxFixedArity = 2;
G__9947.cljs$lang$applyTo = (function (arglist__9948){
var x = cljs.core.first(arglist__9948);
var y = cljs.core.first(cljs.core.next(arglist__9948));
var zs = cljs.core.rest(cljs.core.next(arglist__9948));
return G__9947__delegate(x, y, zs);
});
G__9947.cljs$lang$arity$variadic = G__9947__delegate;
return G__9947;
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
var G__9949__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9949 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9949__delegate.call(this, a, b, c, d, more);
};
G__9949.cljs$lang$maxFixedArity = 4;
G__9949.cljs$lang$applyTo = (function (arglist__9950){
var a = cljs.core.first(arglist__9950);
var b = cljs.core.first(cljs.core.next(arglist__9950));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9950)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9950))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9950))));
return G__9949__delegate(a, b, c, d, more);
});
G__9949.cljs$lang$arity$variadic = G__9949__delegate;
return G__9949;
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
var args__9992 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__9993 = cljs.core._first.call(null,args__9992);
var args__9994 = cljs.core._rest.call(null,args__9992);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__9993);
} else
{return f.call(null,a__9993);
}
} else
{var b__9995 = cljs.core._first.call(null,args__9994);
var args__9996 = cljs.core._rest.call(null,args__9994);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__9993,b__9995);
} else
{return f.call(null,a__9993,b__9995);
}
} else
{var c__9997 = cljs.core._first.call(null,args__9996);
var args__9998 = cljs.core._rest.call(null,args__9996);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__9993,b__9995,c__9997);
} else
{return f.call(null,a__9993,b__9995,c__9997);
}
} else
{var d__9999 = cljs.core._first.call(null,args__9998);
var args__10000 = cljs.core._rest.call(null,args__9998);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__9993,b__9995,c__9997,d__9999);
} else
{return f.call(null,a__9993,b__9995,c__9997,d__9999);
}
} else
{var e__10001 = cljs.core._first.call(null,args__10000);
var args__10002 = cljs.core._rest.call(null,args__10000);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__9993,b__9995,c__9997,d__9999,e__10001);
} else
{return f.call(null,a__9993,b__9995,c__9997,d__9999,e__10001);
}
} else
{var f__10003 = cljs.core._first.call(null,args__10002);
var args__10004 = cljs.core._rest.call(null,args__10002);
if((argc === 6))
{if(f__10003.cljs$lang$arity$6)
{return f__10003.cljs$lang$arity$6(a__9993,b__9995,c__9997,d__9999,e__10001,f__10003);
} else
{return f__10003.call(null,a__9993,b__9995,c__9997,d__9999,e__10001,f__10003);
}
} else
{var g__10005 = cljs.core._first.call(null,args__10004);
var args__10006 = cljs.core._rest.call(null,args__10004);
if((argc === 7))
{if(f__10003.cljs$lang$arity$7)
{return f__10003.cljs$lang$arity$7(a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005);
} else
{return f__10003.call(null,a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005);
}
} else
{var h__10007 = cljs.core._first.call(null,args__10006);
var args__10008 = cljs.core._rest.call(null,args__10006);
if((argc === 8))
{if(f__10003.cljs$lang$arity$8)
{return f__10003.cljs$lang$arity$8(a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007);
} else
{return f__10003.call(null,a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007);
}
} else
{var i__10009 = cljs.core._first.call(null,args__10008);
var args__10010 = cljs.core._rest.call(null,args__10008);
if((argc === 9))
{if(f__10003.cljs$lang$arity$9)
{return f__10003.cljs$lang$arity$9(a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009);
} else
{return f__10003.call(null,a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009);
}
} else
{var j__10011 = cljs.core._first.call(null,args__10010);
var args__10012 = cljs.core._rest.call(null,args__10010);
if((argc === 10))
{if(f__10003.cljs$lang$arity$10)
{return f__10003.cljs$lang$arity$10(a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011);
} else
{return f__10003.call(null,a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011);
}
} else
{var k__10013 = cljs.core._first.call(null,args__10012);
var args__10014 = cljs.core._rest.call(null,args__10012);
if((argc === 11))
{if(f__10003.cljs$lang$arity$11)
{return f__10003.cljs$lang$arity$11(a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013);
} else
{return f__10003.call(null,a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013);
}
} else
{var l__10015 = cljs.core._first.call(null,args__10014);
var args__10016 = cljs.core._rest.call(null,args__10014);
if((argc === 12))
{if(f__10003.cljs$lang$arity$12)
{return f__10003.cljs$lang$arity$12(a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013,l__10015);
} else
{return f__10003.call(null,a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013,l__10015);
}
} else
{var m__10017 = cljs.core._first.call(null,args__10016);
var args__10018 = cljs.core._rest.call(null,args__10016);
if((argc === 13))
{if(f__10003.cljs$lang$arity$13)
{return f__10003.cljs$lang$arity$13(a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013,l__10015,m__10017);
} else
{return f__10003.call(null,a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013,l__10015,m__10017);
}
} else
{var n__10019 = cljs.core._first.call(null,args__10018);
var args__10020 = cljs.core._rest.call(null,args__10018);
if((argc === 14))
{if(f__10003.cljs$lang$arity$14)
{return f__10003.cljs$lang$arity$14(a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013,l__10015,m__10017,n__10019);
} else
{return f__10003.call(null,a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013,l__10015,m__10017,n__10019);
}
} else
{var o__10021 = cljs.core._first.call(null,args__10020);
var args__10022 = cljs.core._rest.call(null,args__10020);
if((argc === 15))
{if(f__10003.cljs$lang$arity$15)
{return f__10003.cljs$lang$arity$15(a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013,l__10015,m__10017,n__10019,o__10021);
} else
{return f__10003.call(null,a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013,l__10015,m__10017,n__10019,o__10021);
}
} else
{var p__10023 = cljs.core._first.call(null,args__10022);
var args__10024 = cljs.core._rest.call(null,args__10022);
if((argc === 16))
{if(f__10003.cljs$lang$arity$16)
{return f__10003.cljs$lang$arity$16(a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013,l__10015,m__10017,n__10019,o__10021,p__10023);
} else
{return f__10003.call(null,a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013,l__10015,m__10017,n__10019,o__10021,p__10023);
}
} else
{var q__10025 = cljs.core._first.call(null,args__10024);
var args__10026 = cljs.core._rest.call(null,args__10024);
if((argc === 17))
{if(f__10003.cljs$lang$arity$17)
{return f__10003.cljs$lang$arity$17(a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013,l__10015,m__10017,n__10019,o__10021,p__10023,q__10025);
} else
{return f__10003.call(null,a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013,l__10015,m__10017,n__10019,o__10021,p__10023,q__10025);
}
} else
{var r__10027 = cljs.core._first.call(null,args__10026);
var args__10028 = cljs.core._rest.call(null,args__10026);
if((argc === 18))
{if(f__10003.cljs$lang$arity$18)
{return f__10003.cljs$lang$arity$18(a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013,l__10015,m__10017,n__10019,o__10021,p__10023,q__10025,r__10027);
} else
{return f__10003.call(null,a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013,l__10015,m__10017,n__10019,o__10021,p__10023,q__10025,r__10027);
}
} else
{var s__10029 = cljs.core._first.call(null,args__10028);
var args__10030 = cljs.core._rest.call(null,args__10028);
if((argc === 19))
{if(f__10003.cljs$lang$arity$19)
{return f__10003.cljs$lang$arity$19(a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013,l__10015,m__10017,n__10019,o__10021,p__10023,q__10025,r__10027,s__10029);
} else
{return f__10003.call(null,a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013,l__10015,m__10017,n__10019,o__10021,p__10023,q__10025,r__10027,s__10029);
}
} else
{var t__10031 = cljs.core._first.call(null,args__10030);
var args__10032 = cljs.core._rest.call(null,args__10030);
if((argc === 20))
{if(f__10003.cljs$lang$arity$20)
{return f__10003.cljs$lang$arity$20(a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013,l__10015,m__10017,n__10019,o__10021,p__10023,q__10025,r__10027,s__10029,t__10031);
} else
{return f__10003.call(null,a__9993,b__9995,c__9997,d__9999,e__10001,f__10003,g__10005,h__10007,i__10009,j__10011,k__10013,l__10015,m__10017,n__10019,o__10021,p__10023,q__10025,r__10027,s__10029,t__10031);
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
var fixed_arity__10047 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10048 = cljs.core.bounded_count.call(null,args,(fixed_arity__10047 + 1));
if((bc__10048 <= fixed_arity__10047))
{return cljs.core.apply_to.call(null,f,bc__10048,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__10049 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10050 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10051 = cljs.core.bounded_count.call(null,arglist__10049,(fixed_arity__10050 + 1));
if((bc__10051 <= fixed_arity__10050))
{return cljs.core.apply_to.call(null,f,bc__10051,arglist__10049);
} else
{return f.cljs$lang$applyTo(arglist__10049);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10049));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__10052 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10053 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10054 = cljs.core.bounded_count.call(null,arglist__10052,(fixed_arity__10053 + 1));
if((bc__10054 <= fixed_arity__10053))
{return cljs.core.apply_to.call(null,f,bc__10054,arglist__10052);
} else
{return f.cljs$lang$applyTo(arglist__10052);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10052));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__10055 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10056 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10057 = cljs.core.bounded_count.call(null,arglist__10055,(fixed_arity__10056 + 1));
if((bc__10057 <= fixed_arity__10056))
{return cljs.core.apply_to.call(null,f,bc__10057,arglist__10055);
} else
{return f.cljs$lang$applyTo(arglist__10055);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10055));
}
});
var apply__6 = (function() { 
var G__10061__delegate = function (f,a,b,c,d,args){
var arglist__10058 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10059 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10060 = cljs.core.bounded_count.call(null,arglist__10058,(fixed_arity__10059 + 1));
if((bc__10060 <= fixed_arity__10059))
{return cljs.core.apply_to.call(null,f,bc__10060,arglist__10058);
} else
{return f.cljs$lang$applyTo(arglist__10058);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10058));
}
};
var G__10061 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10061__delegate.call(this, f, a, b, c, d, args);
};
G__10061.cljs$lang$maxFixedArity = 5;
G__10061.cljs$lang$applyTo = (function (arglist__10062){
var f = cljs.core.first(arglist__10062);
var a = cljs.core.first(cljs.core.next(arglist__10062));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10062)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10062))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10062)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10062)))));
return G__10061__delegate(f, a, b, c, d, args);
});
G__10061.cljs$lang$arity$variadic = G__10061__delegate;
return G__10061;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10063){
var obj = cljs.core.first(arglist__10063);
var f = cljs.core.first(cljs.core.next(arglist__10063));
var args = cljs.core.rest(cljs.core.next(arglist__10063));
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
var G__10064__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10064 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10064__delegate.call(this, x, y, more);
};
G__10064.cljs$lang$maxFixedArity = 2;
G__10064.cljs$lang$applyTo = (function (arglist__10065){
var x = cljs.core.first(arglist__10065);
var y = cljs.core.first(cljs.core.next(arglist__10065));
var more = cljs.core.rest(cljs.core.next(arglist__10065));
return G__10064__delegate(x, y, more);
});
G__10064.cljs$lang$arity$variadic = G__10064__delegate;
return G__10064;
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
var G__10066 = pred;
var G__10067 = cljs.core.next.call(null,coll);
pred = G__10066;
coll = G__10067;
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
{var or__3824__auto____10069 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____10069))
{return or__3824__auto____10069;
} else
{{
var G__10070 = pred;
var G__10071 = cljs.core.next.call(null,coll);
pred = G__10070;
coll = G__10071;
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
var G__10072 = null;
var G__10072__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10072__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10072__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10072__3 = (function() { 
var G__10073__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10073 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10073__delegate.call(this, x, y, zs);
};
G__10073.cljs$lang$maxFixedArity = 2;
G__10073.cljs$lang$applyTo = (function (arglist__10074){
var x = cljs.core.first(arglist__10074);
var y = cljs.core.first(cljs.core.next(arglist__10074));
var zs = cljs.core.rest(cljs.core.next(arglist__10074));
return G__10073__delegate(x, y, zs);
});
G__10073.cljs$lang$arity$variadic = G__10073__delegate;
return G__10073;
})()
;
G__10072 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__10072__0.call(this);
case 1:
return G__10072__1.call(this,x);
case 2:
return G__10072__2.call(this,x,y);
default:
return G__10072__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__10072.cljs$lang$maxFixedArity = 2;
G__10072.cljs$lang$applyTo = G__10072__3.cljs$lang$applyTo;
return G__10072;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10075__delegate = function (args){
return x;
};
var G__10075 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10075__delegate.call(this, args);
};
G__10075.cljs$lang$maxFixedArity = 0;
G__10075.cljs$lang$applyTo = (function (arglist__10076){
var args = cljs.core.seq(arglist__10076);;
return G__10075__delegate(args);
});
G__10075.cljs$lang$arity$variadic = G__10075__delegate;
return G__10075;
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
var G__10083 = null;
var G__10083__0 = (function (){
return f.call(null,g.call(null));
});
var G__10083__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10083__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10083__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10083__4 = (function() { 
var G__10084__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10084 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10084__delegate.call(this, x, y, z, args);
};
G__10084.cljs$lang$maxFixedArity = 3;
G__10084.cljs$lang$applyTo = (function (arglist__10085){
var x = cljs.core.first(arglist__10085);
var y = cljs.core.first(cljs.core.next(arglist__10085));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10085)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10085)));
return G__10084__delegate(x, y, z, args);
});
G__10084.cljs$lang$arity$variadic = G__10084__delegate;
return G__10084;
})()
;
G__10083 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10083__0.call(this);
case 1:
return G__10083__1.call(this,x);
case 2:
return G__10083__2.call(this,x,y);
case 3:
return G__10083__3.call(this,x,y,z);
default:
return G__10083__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10083.cljs$lang$maxFixedArity = 3;
G__10083.cljs$lang$applyTo = G__10083__4.cljs$lang$applyTo;
return G__10083;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__10086 = null;
var G__10086__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10086__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10086__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10086__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10086__4 = (function() { 
var G__10087__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10087 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10087__delegate.call(this, x, y, z, args);
};
G__10087.cljs$lang$maxFixedArity = 3;
G__10087.cljs$lang$applyTo = (function (arglist__10088){
var x = cljs.core.first(arglist__10088);
var y = cljs.core.first(cljs.core.next(arglist__10088));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10088)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10088)));
return G__10087__delegate(x, y, z, args);
});
G__10087.cljs$lang$arity$variadic = G__10087__delegate;
return G__10087;
})()
;
G__10086 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10086__0.call(this);
case 1:
return G__10086__1.call(this,x);
case 2:
return G__10086__2.call(this,x,y);
case 3:
return G__10086__3.call(this,x,y,z);
default:
return G__10086__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10086.cljs$lang$maxFixedArity = 3;
G__10086.cljs$lang$applyTo = G__10086__4.cljs$lang$applyTo;
return G__10086;
})()
});
var comp__4 = (function() { 
var G__10089__delegate = function (f1,f2,f3,fs){
var fs__10080 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__10090__delegate = function (args){
var ret__10081 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10080),args);
var fs__10082 = cljs.core.next.call(null,fs__10080);
while(true){
if(fs__10082)
{{
var G__10091 = cljs.core.first.call(null,fs__10082).call(null,ret__10081);
var G__10092 = cljs.core.next.call(null,fs__10082);
ret__10081 = G__10091;
fs__10082 = G__10092;
continue;
}
} else
{return ret__10081;
}
break;
}
};
var G__10090 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10090__delegate.call(this, args);
};
G__10090.cljs$lang$maxFixedArity = 0;
G__10090.cljs$lang$applyTo = (function (arglist__10093){
var args = cljs.core.seq(arglist__10093);;
return G__10090__delegate(args);
});
G__10090.cljs$lang$arity$variadic = G__10090__delegate;
return G__10090;
})()
;
};
var G__10089 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10089__delegate.call(this, f1, f2, f3, fs);
};
G__10089.cljs$lang$maxFixedArity = 3;
G__10089.cljs$lang$applyTo = (function (arglist__10094){
var f1 = cljs.core.first(arglist__10094);
var f2 = cljs.core.first(cljs.core.next(arglist__10094));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10094)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10094)));
return G__10089__delegate(f1, f2, f3, fs);
});
G__10089.cljs$lang$arity$variadic = G__10089__delegate;
return G__10089;
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
var G__10095__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10095 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10095__delegate.call(this, args);
};
G__10095.cljs$lang$maxFixedArity = 0;
G__10095.cljs$lang$applyTo = (function (arglist__10096){
var args = cljs.core.seq(arglist__10096);;
return G__10095__delegate(args);
});
G__10095.cljs$lang$arity$variadic = G__10095__delegate;
return G__10095;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__10097__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10097 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10097__delegate.call(this, args);
};
G__10097.cljs$lang$maxFixedArity = 0;
G__10097.cljs$lang$applyTo = (function (arglist__10098){
var args = cljs.core.seq(arglist__10098);;
return G__10097__delegate(args);
});
G__10097.cljs$lang$arity$variadic = G__10097__delegate;
return G__10097;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10099__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10099 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10099__delegate.call(this, args);
};
G__10099.cljs$lang$maxFixedArity = 0;
G__10099.cljs$lang$applyTo = (function (arglist__10100){
var args = cljs.core.seq(arglist__10100);;
return G__10099__delegate(args);
});
G__10099.cljs$lang$arity$variadic = G__10099__delegate;
return G__10099;
})()
;
});
var partial__5 = (function() { 
var G__10101__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10102__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10102 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10102__delegate.call(this, args);
};
G__10102.cljs$lang$maxFixedArity = 0;
G__10102.cljs$lang$applyTo = (function (arglist__10103){
var args = cljs.core.seq(arglist__10103);;
return G__10102__delegate(args);
});
G__10102.cljs$lang$arity$variadic = G__10102__delegate;
return G__10102;
})()
;
};
var G__10101 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10101__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10101.cljs$lang$maxFixedArity = 4;
G__10101.cljs$lang$applyTo = (function (arglist__10104){
var f = cljs.core.first(arglist__10104);
var arg1 = cljs.core.first(cljs.core.next(arglist__10104));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10104)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10104))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10104))));
return G__10101__delegate(f, arg1, arg2, arg3, more);
});
G__10101.cljs$lang$arity$variadic = G__10101__delegate;
return G__10101;
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
var G__10105 = null;
var G__10105__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__10105__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__10105__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__10105__4 = (function() { 
var G__10106__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__10106 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10106__delegate.call(this, a, b, c, ds);
};
G__10106.cljs$lang$maxFixedArity = 3;
G__10106.cljs$lang$applyTo = (function (arglist__10107){
var a = cljs.core.first(arglist__10107);
var b = cljs.core.first(cljs.core.next(arglist__10107));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10107)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10107)));
return G__10106__delegate(a, b, c, ds);
});
G__10106.cljs$lang$arity$variadic = G__10106__delegate;
return G__10106;
})()
;
G__10105 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__10105__1.call(this,a);
case 2:
return G__10105__2.call(this,a,b);
case 3:
return G__10105__3.call(this,a,b,c);
default:
return G__10105__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10105.cljs$lang$maxFixedArity = 3;
G__10105.cljs$lang$applyTo = G__10105__4.cljs$lang$applyTo;
return G__10105;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__10108 = null;
var G__10108__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__10108__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__10108__4 = (function() { 
var G__10109__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__10109 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10109__delegate.call(this, a, b, c, ds);
};
G__10109.cljs$lang$maxFixedArity = 3;
G__10109.cljs$lang$applyTo = (function (arglist__10110){
var a = cljs.core.first(arglist__10110);
var b = cljs.core.first(cljs.core.next(arglist__10110));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10110)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10110)));
return G__10109__delegate(a, b, c, ds);
});
G__10109.cljs$lang$arity$variadic = G__10109__delegate;
return G__10109;
})()
;
G__10108 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__10108__2.call(this,a,b);
case 3:
return G__10108__3.call(this,a,b,c);
default:
return G__10108__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10108.cljs$lang$maxFixedArity = 3;
G__10108.cljs$lang$applyTo = G__10108__4.cljs$lang$applyTo;
return G__10108;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__10111 = null;
var G__10111__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__10111__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__10111__4 = (function() { 
var G__10112__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__10112 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10112__delegate.call(this, a, b, c, ds);
};
G__10112.cljs$lang$maxFixedArity = 3;
G__10112.cljs$lang$applyTo = (function (arglist__10113){
var a = cljs.core.first(arglist__10113);
var b = cljs.core.first(cljs.core.next(arglist__10113));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10113)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10113)));
return G__10112__delegate(a, b, c, ds);
});
G__10112.cljs$lang$arity$variadic = G__10112__delegate;
return G__10112;
})()
;
G__10111 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__10111__2.call(this,a,b);
case 3:
return G__10111__3.call(this,a,b,c);
default:
return G__10111__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10111.cljs$lang$maxFixedArity = 3;
G__10111.cljs$lang$applyTo = G__10111__4.cljs$lang$applyTo;
return G__10111;
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
var mapi__10129 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10137 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10137)
{var s__10138 = temp__3974__auto____10137;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10138))
{var c__10139 = cljs.core.chunk_first.call(null,s__10138);
var size__10140 = cljs.core.count.call(null,c__10139);
var b__10141 = cljs.core.chunk_buffer.call(null,size__10140);
var n__2527__auto____10142 = size__10140;
var i__10143 = 0;
while(true){
if((i__10143 < n__2527__auto____10142))
{cljs.core.chunk_append.call(null,b__10141,f.call(null,(idx + i__10143),cljs.core._nth.call(null,c__10139,i__10143)));
{
var G__10144 = (i__10143 + 1);
i__10143 = G__10144;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10141),mapi.call(null,(idx + size__10140),cljs.core.chunk_rest.call(null,s__10138)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10138)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__10138)));
}
} else
{return null;
}
}),null));
});
return mapi__10129.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10154 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10154)
{var s__10155 = temp__3974__auto____10154;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10155))
{var c__10156 = cljs.core.chunk_first.call(null,s__10155);
var size__10157 = cljs.core.count.call(null,c__10156);
var b__10158 = cljs.core.chunk_buffer.call(null,size__10157);
var n__2527__auto____10159 = size__10157;
var i__10160 = 0;
while(true){
if((i__10160 < n__2527__auto____10159))
{var x__10161 = f.call(null,cljs.core._nth.call(null,c__10156,i__10160));
if((x__10161 == null))
{} else
{cljs.core.chunk_append.call(null,b__10158,x__10161);
}
{
var G__10163 = (i__10160 + 1);
i__10160 = G__10163;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10158),keep.call(null,f,cljs.core.chunk_rest.call(null,s__10155)));
} else
{var x__10162 = f.call(null,cljs.core.first.call(null,s__10155));
if((x__10162 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__10155));
} else
{return cljs.core.cons.call(null,x__10162,keep.call(null,f,cljs.core.rest.call(null,s__10155)));
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
var keepi__10189 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10199 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10199)
{var s__10200 = temp__3974__auto____10199;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10200))
{var c__10201 = cljs.core.chunk_first.call(null,s__10200);
var size__10202 = cljs.core.count.call(null,c__10201);
var b__10203 = cljs.core.chunk_buffer.call(null,size__10202);
var n__2527__auto____10204 = size__10202;
var i__10205 = 0;
while(true){
if((i__10205 < n__2527__auto____10204))
{var x__10206 = f.call(null,(idx + i__10205),cljs.core._nth.call(null,c__10201,i__10205));
if((x__10206 == null))
{} else
{cljs.core.chunk_append.call(null,b__10203,x__10206);
}
{
var G__10208 = (i__10205 + 1);
i__10205 = G__10208;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10203),keepi.call(null,(idx + size__10202),cljs.core.chunk_rest.call(null,s__10200)));
} else
{var x__10207 = f.call(null,idx,cljs.core.first.call(null,s__10200));
if((x__10207 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__10200));
} else
{return cljs.core.cons.call(null,x__10207,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__10200)));
}
}
} else
{return null;
}
}),null));
});
return keepi__10189.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10294 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____10294))
{return p.call(null,y);
} else
{return and__3822__auto____10294;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10295 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____10295))
{var and__3822__auto____10296 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____10296))
{return p.call(null,z);
} else
{return and__3822__auto____10296;
}
} else
{return and__3822__auto____10295;
}
})());
});
var ep1__4 = (function() { 
var G__10365__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10297 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____10297))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____10297;
}
})());
};
var G__10365 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10365__delegate.call(this, x, y, z, args);
};
G__10365.cljs$lang$maxFixedArity = 3;
G__10365.cljs$lang$applyTo = (function (arglist__10366){
var x = cljs.core.first(arglist__10366);
var y = cljs.core.first(cljs.core.next(arglist__10366));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10366)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10366)));
return G__10365__delegate(x, y, z, args);
});
G__10365.cljs$lang$arity$variadic = G__10365__delegate;
return G__10365;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10309 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10309))
{return p2.call(null,x);
} else
{return and__3822__auto____10309;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10310 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10310))
{var and__3822__auto____10311 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____10311))
{var and__3822__auto____10312 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10312))
{return p2.call(null,y);
} else
{return and__3822__auto____10312;
}
} else
{return and__3822__auto____10311;
}
} else
{return and__3822__auto____10310;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10313 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10313))
{var and__3822__auto____10314 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____10314))
{var and__3822__auto____10315 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____10315))
{var and__3822__auto____10316 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10316))
{var and__3822__auto____10317 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____10317))
{return p2.call(null,z);
} else
{return and__3822__auto____10317;
}
} else
{return and__3822__auto____10316;
}
} else
{return and__3822__auto____10315;
}
} else
{return and__3822__auto____10314;
}
} else
{return and__3822__auto____10313;
}
})());
});
var ep2__4 = (function() { 
var G__10367__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10318 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____10318))
{return cljs.core.every_QMARK_.call(null,(function (p1__10164_SHARP_){
var and__3822__auto____10319 = p1.call(null,p1__10164_SHARP_);
if(cljs.core.truth_(and__3822__auto____10319))
{return p2.call(null,p1__10164_SHARP_);
} else
{return and__3822__auto____10319;
}
}),args);
} else
{return and__3822__auto____10318;
}
})());
};
var G__10367 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10367__delegate.call(this, x, y, z, args);
};
G__10367.cljs$lang$maxFixedArity = 3;
G__10367.cljs$lang$applyTo = (function (arglist__10368){
var x = cljs.core.first(arglist__10368);
var y = cljs.core.first(cljs.core.next(arglist__10368));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10368)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10368)));
return G__10367__delegate(x, y, z, args);
});
G__10367.cljs$lang$arity$variadic = G__10367__delegate;
return G__10367;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10338 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10338))
{var and__3822__auto____10339 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10339))
{return p3.call(null,x);
} else
{return and__3822__auto____10339;
}
} else
{return and__3822__auto____10338;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10340 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10340))
{var and__3822__auto____10341 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10341))
{var and__3822__auto____10342 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____10342))
{var and__3822__auto____10343 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____10343))
{var and__3822__auto____10344 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____10344))
{return p3.call(null,y);
} else
{return and__3822__auto____10344;
}
} else
{return and__3822__auto____10343;
}
} else
{return and__3822__auto____10342;
}
} else
{return and__3822__auto____10341;
}
} else
{return and__3822__auto____10340;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10345 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10345))
{var and__3822__auto____10346 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10346))
{var and__3822__auto____10347 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____10347))
{var and__3822__auto____10348 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____10348))
{var and__3822__auto____10349 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____10349))
{var and__3822__auto____10350 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____10350))
{var and__3822__auto____10351 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____10351))
{var and__3822__auto____10352 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____10352))
{return p3.call(null,z);
} else
{return and__3822__auto____10352;
}
} else
{return and__3822__auto____10351;
}
} else
{return and__3822__auto____10350;
}
} else
{return and__3822__auto____10349;
}
} else
{return and__3822__auto____10348;
}
} else
{return and__3822__auto____10347;
}
} else
{return and__3822__auto____10346;
}
} else
{return and__3822__auto____10345;
}
})());
});
var ep3__4 = (function() { 
var G__10369__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10353 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____10353))
{return cljs.core.every_QMARK_.call(null,(function (p1__10165_SHARP_){
var and__3822__auto____10354 = p1.call(null,p1__10165_SHARP_);
if(cljs.core.truth_(and__3822__auto____10354))
{var and__3822__auto____10355 = p2.call(null,p1__10165_SHARP_);
if(cljs.core.truth_(and__3822__auto____10355))
{return p3.call(null,p1__10165_SHARP_);
} else
{return and__3822__auto____10355;
}
} else
{return and__3822__auto____10354;
}
}),args);
} else
{return and__3822__auto____10353;
}
})());
};
var G__10369 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10369__delegate.call(this, x, y, z, args);
};
G__10369.cljs$lang$maxFixedArity = 3;
G__10369.cljs$lang$applyTo = (function (arglist__10370){
var x = cljs.core.first(arglist__10370);
var y = cljs.core.first(cljs.core.next(arglist__10370));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10370)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10370)));
return G__10369__delegate(x, y, z, args);
});
G__10369.cljs$lang$arity$variadic = G__10369__delegate;
return G__10369;
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
var G__10371__delegate = function (p1,p2,p3,ps){
var ps__10356 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10166_SHARP_){
return p1__10166_SHARP_.call(null,x);
}),ps__10356);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10167_SHARP_){
var and__3822__auto____10361 = p1__10167_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____10361))
{return p1__10167_SHARP_.call(null,y);
} else
{return and__3822__auto____10361;
}
}),ps__10356);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10168_SHARP_){
var and__3822__auto____10362 = p1__10168_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____10362))
{var and__3822__auto____10363 = p1__10168_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____10363))
{return p1__10168_SHARP_.call(null,z);
} else
{return and__3822__auto____10363;
}
} else
{return and__3822__auto____10362;
}
}),ps__10356);
});
var epn__4 = (function() { 
var G__10372__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10364 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____10364))
{return cljs.core.every_QMARK_.call(null,(function (p1__10169_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10169_SHARP_,args);
}),ps__10356);
} else
{return and__3822__auto____10364;
}
})());
};
var G__10372 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10372__delegate.call(this, x, y, z, args);
};
G__10372.cljs$lang$maxFixedArity = 3;
G__10372.cljs$lang$applyTo = (function (arglist__10373){
var x = cljs.core.first(arglist__10373);
var y = cljs.core.first(cljs.core.next(arglist__10373));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10373)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10373)));
return G__10372__delegate(x, y, z, args);
});
G__10372.cljs$lang$arity$variadic = G__10372__delegate;
return G__10372;
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
var G__10371 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10371__delegate.call(this, p1, p2, p3, ps);
};
G__10371.cljs$lang$maxFixedArity = 3;
G__10371.cljs$lang$applyTo = (function (arglist__10374){
var p1 = cljs.core.first(arglist__10374);
var p2 = cljs.core.first(cljs.core.next(arglist__10374));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10374)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10374)));
return G__10371__delegate(p1, p2, p3, ps);
});
G__10371.cljs$lang$arity$variadic = G__10371__delegate;
return G__10371;
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
var or__3824__auto____10455 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____10455))
{return or__3824__auto____10455;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____10456 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____10456))
{return or__3824__auto____10456;
} else
{var or__3824__auto____10457 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____10457))
{return or__3824__auto____10457;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__10526__delegate = function (x,y,z,args){
var or__3824__auto____10458 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10458))
{return or__3824__auto____10458;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__10526 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10526__delegate.call(this, x, y, z, args);
};
G__10526.cljs$lang$maxFixedArity = 3;
G__10526.cljs$lang$applyTo = (function (arglist__10527){
var x = cljs.core.first(arglist__10527);
var y = cljs.core.first(cljs.core.next(arglist__10527));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10527)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10527)));
return G__10526__delegate(x, y, z, args);
});
G__10526.cljs$lang$arity$variadic = G__10526__delegate;
return G__10526;
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
var or__3824__auto____10470 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10470))
{return or__3824__auto____10470;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____10471 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10471))
{return or__3824__auto____10471;
} else
{var or__3824__auto____10472 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10472))
{return or__3824__auto____10472;
} else
{var or__3824__auto____10473 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10473))
{return or__3824__auto____10473;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____10474 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10474))
{return or__3824__auto____10474;
} else
{var or__3824__auto____10475 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10475))
{return or__3824__auto____10475;
} else
{var or__3824__auto____10476 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____10476))
{return or__3824__auto____10476;
} else
{var or__3824__auto____10477 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10477))
{return or__3824__auto____10477;
} else
{var or__3824__auto____10478 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____10478))
{return or__3824__auto____10478;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__10528__delegate = function (x,y,z,args){
var or__3824__auto____10479 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10479))
{return or__3824__auto____10479;
} else
{return cljs.core.some.call(null,(function (p1__10209_SHARP_){
var or__3824__auto____10480 = p1.call(null,p1__10209_SHARP_);
if(cljs.core.truth_(or__3824__auto____10480))
{return or__3824__auto____10480;
} else
{return p2.call(null,p1__10209_SHARP_);
}
}),args);
}
};
var G__10528 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10528__delegate.call(this, x, y, z, args);
};
G__10528.cljs$lang$maxFixedArity = 3;
G__10528.cljs$lang$applyTo = (function (arglist__10529){
var x = cljs.core.first(arglist__10529);
var y = cljs.core.first(cljs.core.next(arglist__10529));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10529)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10529)));
return G__10528__delegate(x, y, z, args);
});
G__10528.cljs$lang$arity$variadic = G__10528__delegate;
return G__10528;
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
var or__3824__auto____10499 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10499))
{return or__3824__auto____10499;
} else
{var or__3824__auto____10500 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10500))
{return or__3824__auto____10500;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____10501 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10501))
{return or__3824__auto____10501;
} else
{var or__3824__auto____10502 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10502))
{return or__3824__auto____10502;
} else
{var or__3824__auto____10503 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____10503))
{return or__3824__auto____10503;
} else
{var or__3824__auto____10504 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10504))
{return or__3824__auto____10504;
} else
{var or__3824__auto____10505 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____10505))
{return or__3824__auto____10505;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____10506 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10506))
{return or__3824__auto____10506;
} else
{var or__3824__auto____10507 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10507))
{return or__3824__auto____10507;
} else
{var or__3824__auto____10508 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____10508))
{return or__3824__auto____10508;
} else
{var or__3824__auto____10509 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10509))
{return or__3824__auto____10509;
} else
{var or__3824__auto____10510 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____10510))
{return or__3824__auto____10510;
} else
{var or__3824__auto____10511 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____10511))
{return or__3824__auto____10511;
} else
{var or__3824__auto____10512 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____10512))
{return or__3824__auto____10512;
} else
{var or__3824__auto____10513 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____10513))
{return or__3824__auto____10513;
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
var G__10530__delegate = function (x,y,z,args){
var or__3824__auto____10514 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10514))
{return or__3824__auto____10514;
} else
{return cljs.core.some.call(null,(function (p1__10210_SHARP_){
var or__3824__auto____10515 = p1.call(null,p1__10210_SHARP_);
if(cljs.core.truth_(or__3824__auto____10515))
{return or__3824__auto____10515;
} else
{var or__3824__auto____10516 = p2.call(null,p1__10210_SHARP_);
if(cljs.core.truth_(or__3824__auto____10516))
{return or__3824__auto____10516;
} else
{return p3.call(null,p1__10210_SHARP_);
}
}
}),args);
}
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
var G__10532__delegate = function (p1,p2,p3,ps){
var ps__10517 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__10211_SHARP_){
return p1__10211_SHARP_.call(null,x);
}),ps__10517);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10212_SHARP_){
var or__3824__auto____10522 = p1__10212_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____10522))
{return or__3824__auto____10522;
} else
{return p1__10212_SHARP_.call(null,y);
}
}),ps__10517);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10213_SHARP_){
var or__3824__auto____10523 = p1__10213_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____10523))
{return or__3824__auto____10523;
} else
{var or__3824__auto____10524 = p1__10213_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____10524))
{return or__3824__auto____10524;
} else
{return p1__10213_SHARP_.call(null,z);
}
}
}),ps__10517);
});
var spn__4 = (function() { 
var G__10533__delegate = function (x,y,z,args){
var or__3824__auto____10525 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10525))
{return or__3824__auto____10525;
} else
{return cljs.core.some.call(null,(function (p1__10214_SHARP_){
return cljs.core.some.call(null,p1__10214_SHARP_,args);
}),ps__10517);
}
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
var G__10532 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10532__delegate.call(this, p1, p2, p3, ps);
};
G__10532.cljs$lang$maxFixedArity = 3;
G__10532.cljs$lang$applyTo = (function (arglist__10535){
var p1 = cljs.core.first(arglist__10535);
var p2 = cljs.core.first(cljs.core.next(arglist__10535));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10535)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10535)));
return G__10532__delegate(p1, p2, p3, ps);
});
G__10532.cljs$lang$arity$variadic = G__10532__delegate;
return G__10532;
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
var temp__3974__auto____10554 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10554)
{var s__10555 = temp__3974__auto____10554;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10555))
{var c__10556 = cljs.core.chunk_first.call(null,s__10555);
var size__10557 = cljs.core.count.call(null,c__10556);
var b__10558 = cljs.core.chunk_buffer.call(null,size__10557);
var n__2527__auto____10559 = size__10557;
var i__10560 = 0;
while(true){
if((i__10560 < n__2527__auto____10559))
{cljs.core.chunk_append.call(null,b__10558,f.call(null,cljs.core._nth.call(null,c__10556,i__10560)));
{
var G__10572 = (i__10560 + 1);
i__10560 = G__10572;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10558),map.call(null,f,cljs.core.chunk_rest.call(null,s__10555)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__10555)),map.call(null,f,cljs.core.rest.call(null,s__10555)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10561 = cljs.core.seq.call(null,c1);
var s2__10562 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____10563 = s1__10561;
if(and__3822__auto____10563)
{return s2__10562;
} else
{return and__3822__auto____10563;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10561),cljs.core.first.call(null,s2__10562)),map.call(null,f,cljs.core.rest.call(null,s1__10561),cljs.core.rest.call(null,s2__10562)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10564 = cljs.core.seq.call(null,c1);
var s2__10565 = cljs.core.seq.call(null,c2);
var s3__10566 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____10567 = s1__10564;
if(and__3822__auto____10567)
{var and__3822__auto____10568 = s2__10565;
if(and__3822__auto____10568)
{return s3__10566;
} else
{return and__3822__auto____10568;
}
} else
{return and__3822__auto____10567;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10564),cljs.core.first.call(null,s2__10565),cljs.core.first.call(null,s3__10566)),map.call(null,f,cljs.core.rest.call(null,s1__10564),cljs.core.rest.call(null,s2__10565),cljs.core.rest.call(null,s3__10566)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__10573__delegate = function (f,c1,c2,c3,colls){
var step__10571 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10570 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10570))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__10570),step.call(null,map.call(null,cljs.core.rest,ss__10570)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__10375_SHARP_){
return cljs.core.apply.call(null,f,p1__10375_SHARP_);
}),step__10571.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__10573 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10573__delegate.call(this, f, c1, c2, c3, colls);
};
G__10573.cljs$lang$maxFixedArity = 4;
G__10573.cljs$lang$applyTo = (function (arglist__10574){
var f = cljs.core.first(arglist__10574);
var c1 = cljs.core.first(cljs.core.next(arglist__10574));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10574)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10574))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10574))));
return G__10573__delegate(f, c1, c2, c3, colls);
});
G__10573.cljs$lang$arity$variadic = G__10573__delegate;
return G__10573;
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
{var temp__3974__auto____10577 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10577)
{var s__10578 = temp__3974__auto____10577;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__10578),take.call(null,(n - 1),cljs.core.rest.call(null,s__10578)));
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
var step__10584 = (function (n,coll){
while(true){
var s__10582 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____10583 = (n > 0);
if(and__3822__auto____10583)
{return s__10582;
} else
{return and__3822__auto____10583;
}
})()))
{{
var G__10585 = (n - 1);
var G__10586 = cljs.core.rest.call(null,s__10582);
n = G__10585;
coll = G__10586;
continue;
}
} else
{return s__10582;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__10584.call(null,n,coll);
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
var s__10589 = cljs.core.seq.call(null,coll);
var lead__10590 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__10590)
{{
var G__10591 = cljs.core.next.call(null,s__10589);
var G__10592 = cljs.core.next.call(null,lead__10590);
s__10589 = G__10591;
lead__10590 = G__10592;
continue;
}
} else
{return s__10589;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__10598 = (function (pred,coll){
while(true){
var s__10596 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____10597 = s__10596;
if(and__3822__auto____10597)
{return pred.call(null,cljs.core.first.call(null,s__10596));
} else
{return and__3822__auto____10597;
}
})()))
{{
var G__10599 = pred;
var G__10600 = cljs.core.rest.call(null,s__10596);
pred = G__10599;
coll = G__10600;
continue;
}
} else
{return s__10596;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__10598.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10603 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10603)
{var s__10604 = temp__3974__auto____10603;
return cljs.core.concat.call(null,s__10604,cycle.call(null,s__10604));
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
var s1__10609 = cljs.core.seq.call(null,c1);
var s2__10610 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____10611 = s1__10609;
if(and__3822__auto____10611)
{return s2__10610;
} else
{return and__3822__auto____10611;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__10609),cljs.core.cons.call(null,cljs.core.first.call(null,s2__10610),interleave.call(null,cljs.core.rest.call(null,s1__10609),cljs.core.rest.call(null,s2__10610))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__10613__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10612 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10612))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__10612),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__10612)));
} else
{return null;
}
}),null));
};
var G__10613 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10613__delegate.call(this, c1, c2, colls);
};
G__10613.cljs$lang$maxFixedArity = 2;
G__10613.cljs$lang$applyTo = (function (arglist__10614){
var c1 = cljs.core.first(arglist__10614);
var c2 = cljs.core.first(cljs.core.next(arglist__10614));
var colls = cljs.core.rest(cljs.core.next(arglist__10614));
return G__10613__delegate(c1, c2, colls);
});
G__10613.cljs$lang$arity$variadic = G__10613__delegate;
return G__10613;
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
var cat__10624 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____10622 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____10622)
{var coll__10623 = temp__3971__auto____10622;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__10623),cat.call(null,cljs.core.rest.call(null,coll__10623),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__10624.call(null,null,colls);
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
var G__10625__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__10625 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10625__delegate.call(this, f, coll, colls);
};
G__10625.cljs$lang$maxFixedArity = 2;
G__10625.cljs$lang$applyTo = (function (arglist__10626){
var f = cljs.core.first(arglist__10626);
var coll = cljs.core.first(cljs.core.next(arglist__10626));
var colls = cljs.core.rest(cljs.core.next(arglist__10626));
return G__10625__delegate(f, coll, colls);
});
G__10625.cljs$lang$arity$variadic = G__10625__delegate;
return G__10625;
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
var temp__3974__auto____10636 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10636)
{var s__10637 = temp__3974__auto____10636;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10637))
{var c__10638 = cljs.core.chunk_first.call(null,s__10637);
var size__10639 = cljs.core.count.call(null,c__10638);
var b__10640 = cljs.core.chunk_buffer.call(null,size__10639);
var n__2527__auto____10641 = size__10639;
var i__10642 = 0;
while(true){
if((i__10642 < n__2527__auto____10641))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__10638,i__10642))))
{cljs.core.chunk_append.call(null,b__10640,cljs.core._nth.call(null,c__10638,i__10642));
} else
{}
{
var G__10645 = (i__10642 + 1);
i__10642 = G__10645;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10640),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__10637)));
} else
{var f__10643 = cljs.core.first.call(null,s__10637);
var r__10644 = cljs.core.rest.call(null,s__10637);
if(cljs.core.truth_(pred.call(null,f__10643)))
{return cljs.core.cons.call(null,f__10643,filter.call(null,pred,r__10644));
} else
{return filter.call(null,pred,r__10644);
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
var walk__10648 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__10648.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__10646_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__10646_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__10652__10653 = to;
if(G__10652__10653)
{if((function (){var or__3824__auto____10654 = (G__10652__10653.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____10654)
{return or__3824__auto____10654;
} else
{return G__10652__10653.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__10652__10653.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__10652__10653);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__10652__10653);
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
var G__10655__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__10655 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10655__delegate.call(this, f, c1, c2, c3, colls);
};
G__10655.cljs$lang$maxFixedArity = 4;
G__10655.cljs$lang$applyTo = (function (arglist__10656){
var f = cljs.core.first(arglist__10656);
var c1 = cljs.core.first(cljs.core.next(arglist__10656));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10656)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10656))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10656))));
return G__10655__delegate(f, c1, c2, c3, colls);
});
G__10655.cljs$lang$arity$variadic = G__10655__delegate;
return G__10655;
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
var temp__3974__auto____10663 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10663)
{var s__10664 = temp__3974__auto____10663;
var p__10665 = cljs.core.take.call(null,n,s__10664);
if((n === cljs.core.count.call(null,p__10665)))
{return cljs.core.cons.call(null,p__10665,partition.call(null,n,step,cljs.core.drop.call(null,step,s__10664)));
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
var temp__3974__auto____10666 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10666)
{var s__10667 = temp__3974__auto____10666;
var p__10668 = cljs.core.take.call(null,n,s__10667);
if((n === cljs.core.count.call(null,p__10668)))
{return cljs.core.cons.call(null,p__10668,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__10667)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__10668,pad)));
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
var sentinel__10673 = cljs.core.lookup_sentinel;
var m__10674 = m;
var ks__10675 = cljs.core.seq.call(null,ks);
while(true){
if(ks__10675)
{var m__10676 = cljs.core._lookup.call(null,m__10674,cljs.core.first.call(null,ks__10675),sentinel__10673);
if((sentinel__10673 === m__10676))
{return not_found;
} else
{{
var G__10677 = sentinel__10673;
var G__10678 = m__10676;
var G__10679 = cljs.core.next.call(null,ks__10675);
sentinel__10673 = G__10677;
m__10674 = G__10678;
ks__10675 = G__10679;
continue;
}
}
} else
{return m__10674;
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
cljs.core.assoc_in = (function assoc_in(m,p__10680,v){
var vec__10685__10686 = p__10680;
var k__10687 = cljs.core.nth.call(null,vec__10685__10686,0,null);
var ks__10688 = cljs.core.nthnext.call(null,vec__10685__10686,1);
if(cljs.core.truth_(ks__10688))
{return cljs.core.assoc.call(null,m,k__10687,assoc_in.call(null,cljs.core._lookup.call(null,m,k__10687,null),ks__10688,v));
} else
{return cljs.core.assoc.call(null,m,k__10687,v);
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
var update_in__delegate = function (m,p__10689,f,args){
var vec__10694__10695 = p__10689;
var k__10696 = cljs.core.nth.call(null,vec__10694__10695,0,null);
var ks__10697 = cljs.core.nthnext.call(null,vec__10694__10695,1);
if(cljs.core.truth_(ks__10697))
{return cljs.core.assoc.call(null,m,k__10696,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__10696,null),ks__10697,f,args));
} else
{return cljs.core.assoc.call(null,m,k__10696,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__10696,null),args));
}
};
var update_in = function (m,p__10689,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__10689, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__10698){
var m = cljs.core.first(arglist__10698);
var p__10689 = cljs.core.first(cljs.core.next(arglist__10698));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10698)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10698)));
return update_in__delegate(m, p__10689, f, args);
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
var this__10701 = this;
var h__2192__auto____10702 = this__10701.__hash;
if(!((h__2192__auto____10702 == null)))
{return h__2192__auto____10702;
} else
{var h__2192__auto____10703 = cljs.core.hash_coll.call(null,coll);
this__10701.__hash = h__2192__auto____10703;
return h__2192__auto____10703;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10704 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10705 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10706 = this;
var new_array__10707 = this__10706.array.slice();
(new_array__10707[k] = v);
return (new cljs.core.Vector(this__10706.meta,new_array__10707,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__10738 = null;
var G__10738__2 = (function (this_sym10708,k){
var this__10710 = this;
var this_sym10708__10711 = this;
var coll__10712 = this_sym10708__10711;
return coll__10712.cljs$core$ILookup$_lookup$arity$2(coll__10712,k);
});
var G__10738__3 = (function (this_sym10709,k,not_found){
var this__10710 = this;
var this_sym10709__10713 = this;
var coll__10714 = this_sym10709__10713;
return coll__10714.cljs$core$ILookup$_lookup$arity$3(coll__10714,k,not_found);
});
G__10738 = function(this_sym10709,k,not_found){
switch(arguments.length){
case 2:
return G__10738__2.call(this,this_sym10709,k);
case 3:
return G__10738__3.call(this,this_sym10709,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10738;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym10699,args10700){
var this__10715 = this;
return this_sym10699.call.apply(this_sym10699,[this_sym10699].concat(args10700.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10716 = this;
var new_array__10717 = this__10716.array.slice();
new_array__10717.push(o);
return (new cljs.core.Vector(this__10716.meta,new_array__10717,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__10718 = this;
var this__10719 = this;
return cljs.core.pr_str.call(null,this__10719);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10720 = this;
return cljs.core.ci_reduce.call(null,this__10720.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10721 = this;
return cljs.core.ci_reduce.call(null,this__10721.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10722 = this;
if((this__10722.array.length > 0))
{var vector_seq__10723 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__10722.array.length))
{return cljs.core.cons.call(null,(this__10722.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__10723.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10724 = this;
return this__10724.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10725 = this;
var count__10726 = this__10725.array.length;
if((count__10726 > 0))
{return (this__10725.array[(count__10726 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10727 = this;
if((this__10727.array.length > 0))
{var new_array__10728 = this__10727.array.slice();
new_array__10728.pop();
return (new cljs.core.Vector(this__10727.meta,new_array__10728,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10729 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10730 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10731 = this;
return (new cljs.core.Vector(meta,this__10731.array,this__10731.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10732 = this;
return this__10732.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10733 = this;
if((function (){var and__3822__auto____10734 = (0 <= n);
if(and__3822__auto____10734)
{return (n < this__10733.array.length);
} else
{return and__3822__auto____10734;
}
})())
{return (this__10733.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10735 = this;
if((function (){var and__3822__auto____10736 = (0 <= n);
if(and__3822__auto____10736)
{return (n < this__10735.array.length);
} else
{return and__3822__auto____10736;
}
})())
{return (this__10735.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10737 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10737.meta);
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
var cnt__10740 = pv.cnt;
if((cnt__10740 < 32))
{return 0;
} else
{return (((cnt__10740 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__10746 = level;
var ret__10747 = node;
while(true){
if((ll__10746 === 0))
{return ret__10747;
} else
{var embed__10748 = ret__10747;
var r__10749 = cljs.core.pv_fresh_node.call(null,edit);
var ___10750 = cljs.core.pv_aset.call(null,r__10749,0,embed__10748);
{
var G__10751 = (ll__10746 - 5);
var G__10752 = r__10749;
ll__10746 = G__10751;
ret__10747 = G__10752;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__10758 = cljs.core.pv_clone_node.call(null,parent);
var subidx__10759 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__10758,subidx__10759,tailnode);
return ret__10758;
} else
{var child__10760 = cljs.core.pv_aget.call(null,parent,subidx__10759);
if(!((child__10760 == null)))
{var node_to_insert__10761 = push_tail.call(null,pv,(level - 5),child__10760,tailnode);
cljs.core.pv_aset.call(null,ret__10758,subidx__10759,node_to_insert__10761);
return ret__10758;
} else
{var node_to_insert__10762 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__10758,subidx__10759,node_to_insert__10762);
return ret__10758;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____10766 = (0 <= i);
if(and__3822__auto____10766)
{return (i < pv.cnt);
} else
{return and__3822__auto____10766;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__10767 = pv.root;
var level__10768 = pv.shift;
while(true){
if((level__10768 > 0))
{{
var G__10769 = cljs.core.pv_aget.call(null,node__10767,((i >>> level__10768) & 31));
var G__10770 = (level__10768 - 5);
node__10767 = G__10769;
level__10768 = G__10770;
continue;
}
} else
{return node__10767.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__10773 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__10773,(i & 31),val);
return ret__10773;
} else
{var subidx__10774 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10773,subidx__10774,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10774),i,val));
return ret__10773;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__10780 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10781 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10780));
if((function (){var and__3822__auto____10782 = (new_child__10781 == null);
if(and__3822__auto____10782)
{return (subidx__10780 === 0);
} else
{return and__3822__auto____10782;
}
})())
{return null;
} else
{var ret__10783 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10783,subidx__10780,new_child__10781);
return ret__10783;
}
} else
{if((subidx__10780 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__10784 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10784,subidx__10780,null);
return ret__10784;
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
var this__10787 = this;
return (new cljs.core.TransientVector(this__10787.cnt,this__10787.shift,cljs.core.tv_editable_root.call(null,this__10787.root),cljs.core.tv_editable_tail.call(null,this__10787.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10788 = this;
var h__2192__auto____10789 = this__10788.__hash;
if(!((h__2192__auto____10789 == null)))
{return h__2192__auto____10789;
} else
{var h__2192__auto____10790 = cljs.core.hash_coll.call(null,coll);
this__10788.__hash = h__2192__auto____10790;
return h__2192__auto____10790;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10791 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10792 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10793 = this;
if((function (){var and__3822__auto____10794 = (0 <= k);
if(and__3822__auto____10794)
{return (k < this__10793.cnt);
} else
{return and__3822__auto____10794;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__10795 = this__10793.tail.slice();
(new_tail__10795[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__10793.meta,this__10793.cnt,this__10793.shift,this__10793.root,new_tail__10795,null));
} else
{return (new cljs.core.PersistentVector(this__10793.meta,this__10793.cnt,this__10793.shift,cljs.core.do_assoc.call(null,coll,this__10793.shift,this__10793.root,k,v),this__10793.tail,null));
}
} else
{if((k === this__10793.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__10793.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__10843 = null;
var G__10843__2 = (function (this_sym10796,k){
var this__10798 = this;
var this_sym10796__10799 = this;
var coll__10800 = this_sym10796__10799;
return coll__10800.cljs$core$ILookup$_lookup$arity$2(coll__10800,k);
});
var G__10843__3 = (function (this_sym10797,k,not_found){
var this__10798 = this;
var this_sym10797__10801 = this;
var coll__10802 = this_sym10797__10801;
return coll__10802.cljs$core$ILookup$_lookup$arity$3(coll__10802,k,not_found);
});
G__10843 = function(this_sym10797,k,not_found){
switch(arguments.length){
case 2:
return G__10843__2.call(this,this_sym10797,k);
case 3:
return G__10843__3.call(this,this_sym10797,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10843;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym10785,args10786){
var this__10803 = this;
return this_sym10785.call.apply(this_sym10785,[this_sym10785].concat(args10786.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__10804 = this;
var step_init__10805 = [0,init];
var i__10806 = 0;
while(true){
if((i__10806 < this__10804.cnt))
{var arr__10807 = cljs.core.array_for.call(null,v,i__10806);
var len__10808 = arr__10807.length;
var init__10812 = (function (){var j__10809 = 0;
var init__10810 = (step_init__10805[1]);
while(true){
if((j__10809 < len__10808))
{var init__10811 = f.call(null,init__10810,(j__10809 + i__10806),(arr__10807[j__10809]));
if(cljs.core.reduced_QMARK_.call(null,init__10811))
{return init__10811;
} else
{{
var G__10844 = (j__10809 + 1);
var G__10845 = init__10811;
j__10809 = G__10844;
init__10810 = G__10845;
continue;
}
}
} else
{(step_init__10805[0] = len__10808);
(step_init__10805[1] = init__10810);
return init__10810;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__10812))
{return cljs.core.deref.call(null,init__10812);
} else
{{
var G__10846 = (i__10806 + (step_init__10805[0]));
i__10806 = G__10846;
continue;
}
}
} else
{return (step_init__10805[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10813 = this;
if(((this__10813.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__10814 = this__10813.tail.slice();
new_tail__10814.push(o);
return (new cljs.core.PersistentVector(this__10813.meta,(this__10813.cnt + 1),this__10813.shift,this__10813.root,new_tail__10814,null));
} else
{var root_overflow_QMARK___10815 = ((this__10813.cnt >>> 5) > (1 << this__10813.shift));
var new_shift__10816 = ((root_overflow_QMARK___10815)?(this__10813.shift + 5):this__10813.shift);
var new_root__10818 = ((root_overflow_QMARK___10815)?(function (){var n_r__10817 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__10817,0,this__10813.root);
cljs.core.pv_aset.call(null,n_r__10817,1,cljs.core.new_path.call(null,null,this__10813.shift,(new cljs.core.VectorNode(null,this__10813.tail))));
return n_r__10817;
})():cljs.core.push_tail.call(null,coll,this__10813.shift,this__10813.root,(new cljs.core.VectorNode(null,this__10813.tail))));
return (new cljs.core.PersistentVector(this__10813.meta,(this__10813.cnt + 1),new_shift__10816,new_root__10818,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10819 = this;
if((this__10819.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__10819.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__10820 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__10821 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__10822 = this;
var this__10823 = this;
return cljs.core.pr_str.call(null,this__10823);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10824 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10825 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10826 = this;
if((this__10826.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10827 = this;
return this__10827.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10828 = this;
if((this__10828.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__10828.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10829 = this;
if((this__10829.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10829.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10829.meta);
} else
{if((1 < (this__10829.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__10829.meta,(this__10829.cnt - 1),this__10829.shift,this__10829.root,this__10829.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__10830 = cljs.core.array_for.call(null,coll,(this__10829.cnt - 2));
var nr__10831 = cljs.core.pop_tail.call(null,coll,this__10829.shift,this__10829.root);
var new_root__10832 = (((nr__10831 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__10831);
var cnt_1__10833 = (this__10829.cnt - 1);
if((function (){var and__3822__auto____10834 = (5 < this__10829.shift);
if(and__3822__auto____10834)
{return (cljs.core.pv_aget.call(null,new_root__10832,1) == null);
} else
{return and__3822__auto____10834;
}
})())
{return (new cljs.core.PersistentVector(this__10829.meta,cnt_1__10833,(this__10829.shift - 5),cljs.core.pv_aget.call(null,new_root__10832,0),new_tail__10830,null));
} else
{return (new cljs.core.PersistentVector(this__10829.meta,cnt_1__10833,this__10829.shift,new_root__10832,new_tail__10830,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10835 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10836 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10837 = this;
return (new cljs.core.PersistentVector(meta,this__10837.cnt,this__10837.shift,this__10837.root,this__10837.tail,this__10837.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10838 = this;
return this__10838.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10839 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10840 = this;
if((function (){var and__3822__auto____10841 = (0 <= n);
if(and__3822__auto____10841)
{return (n < this__10840.cnt);
} else
{return and__3822__auto____10841;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10842 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10842.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__10847 = xs.length;
var xs__10848 = (((no_clone === true))?xs:xs.slice());
if((l__10847 < 32))
{return (new cljs.core.PersistentVector(null,l__10847,5,cljs.core.PersistentVector.EMPTY_NODE,xs__10848,null));
} else
{var node__10849 = xs__10848.slice(0,32);
var v__10850 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__10849,null));
var i__10851 = 32;
var out__10852 = cljs.core._as_transient.call(null,v__10850);
while(true){
if((i__10851 < l__10847))
{{
var G__10853 = (i__10851 + 1);
var G__10854 = cljs.core.conj_BANG_.call(null,out__10852,(xs__10848[i__10851]));
i__10851 = G__10853;
out__10852 = G__10854;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10852);
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
vector.cljs$lang$applyTo = (function (arglist__10855){
var args = cljs.core.seq(arglist__10855);;
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
var this__10856 = this;
if(((this__10856.off + 1) < this__10856.node.length))
{var s__10857 = cljs.core.chunked_seq.call(null,this__10856.vec,this__10856.node,this__10856.i,(this__10856.off + 1));
if((s__10857 == null))
{return null;
} else
{return s__10857;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10858 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10859 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10860 = this;
return (this__10860.node[this__10860.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10861 = this;
if(((this__10861.off + 1) < this__10861.node.length))
{var s__10862 = cljs.core.chunked_seq.call(null,this__10861.vec,this__10861.node,this__10861.i,(this__10861.off + 1));
if((s__10862 == null))
{return cljs.core.List.EMPTY;
} else
{return s__10862;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__10863 = this;
var l__10864 = this__10863.node.length;
var s__10865 = ((((this__10863.i + l__10864) < cljs.core._count.call(null,this__10863.vec)))?cljs.core.chunked_seq.call(null,this__10863.vec,(this__10863.i + l__10864),0):null);
if((s__10865 == null))
{return null;
} else
{return s__10865;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10866 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__10867 = this;
return cljs.core.chunked_seq.call(null,this__10867.vec,this__10867.node,this__10867.i,this__10867.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__10868 = this;
return this__10868.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10869 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10869.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__10870 = this;
return cljs.core.array_chunk.call(null,this__10870.node,this__10870.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__10871 = this;
var l__10872 = this__10871.node.length;
var s__10873 = ((((this__10871.i + l__10872) < cljs.core._count.call(null,this__10871.vec)))?cljs.core.chunked_seq.call(null,this__10871.vec,(this__10871.i + l__10872),0):null);
if((s__10873 == null))
{return cljs.core.List.EMPTY;
} else
{return s__10873;
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
var this__10876 = this;
var h__2192__auto____10877 = this__10876.__hash;
if(!((h__2192__auto____10877 == null)))
{return h__2192__auto____10877;
} else
{var h__2192__auto____10878 = cljs.core.hash_coll.call(null,coll);
this__10876.__hash = h__2192__auto____10878;
return h__2192__auto____10878;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10879 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10880 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__10881 = this;
var v_pos__10882 = (this__10881.start + key);
return (new cljs.core.Subvec(this__10881.meta,cljs.core._assoc.call(null,this__10881.v,v_pos__10882,val),this__10881.start,((this__10881.end > (v_pos__10882 + 1)) ? this__10881.end : (v_pos__10882 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__10908 = null;
var G__10908__2 = (function (this_sym10883,k){
var this__10885 = this;
var this_sym10883__10886 = this;
var coll__10887 = this_sym10883__10886;
return coll__10887.cljs$core$ILookup$_lookup$arity$2(coll__10887,k);
});
var G__10908__3 = (function (this_sym10884,k,not_found){
var this__10885 = this;
var this_sym10884__10888 = this;
var coll__10889 = this_sym10884__10888;
return coll__10889.cljs$core$ILookup$_lookup$arity$3(coll__10889,k,not_found);
});
G__10908 = function(this_sym10884,k,not_found){
switch(arguments.length){
case 2:
return G__10908__2.call(this,this_sym10884,k);
case 3:
return G__10908__3.call(this,this_sym10884,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10908;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym10874,args10875){
var this__10890 = this;
return this_sym10874.call.apply(this_sym10874,[this_sym10874].concat(args10875.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10891 = this;
return (new cljs.core.Subvec(this__10891.meta,cljs.core._assoc_n.call(null,this__10891.v,this__10891.end,o),this__10891.start,(this__10891.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__10892 = this;
var this__10893 = this;
return cljs.core.pr_str.call(null,this__10893);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__10894 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__10895 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10896 = this;
var subvec_seq__10897 = (function subvec_seq(i){
if((i === this__10896.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__10896.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__10897.call(null,this__10896.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10898 = this;
return (this__10898.end - this__10898.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10899 = this;
return cljs.core._nth.call(null,this__10899.v,(this__10899.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10900 = this;
if((this__10900.start === this__10900.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__10900.meta,this__10900.v,this__10900.start,(this__10900.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10901 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10902 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10903 = this;
return (new cljs.core.Subvec(meta,this__10903.v,this__10903.start,this__10903.end,this__10903.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10904 = this;
return this__10904.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10905 = this;
return cljs.core._nth.call(null,this__10905.v,(this__10905.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10906 = this;
return cljs.core._nth.call(null,this__10906.v,(this__10906.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10907 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10907.meta);
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
var ret__10910 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__10910,0,tl.length);
return ret__10910;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__10914 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__10915 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10914,subidx__10915,(((level === 5))?tail_node:(function (){var child__10916 = cljs.core.pv_aget.call(null,ret__10914,subidx__10915);
if(!((child__10916 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__10916,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__10914;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__10921 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__10922 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10923 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__10921,subidx__10922));
if((function (){var and__3822__auto____10924 = (new_child__10923 == null);
if(and__3822__auto____10924)
{return (subidx__10922 === 0);
} else
{return and__3822__auto____10924;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__10921,subidx__10922,new_child__10923);
return node__10921;
}
} else
{if((subidx__10922 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__10921,subidx__10922,null);
return node__10921;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____10929 = (0 <= i);
if(and__3822__auto____10929)
{return (i < tv.cnt);
} else
{return and__3822__auto____10929;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__10930 = tv.root;
var node__10931 = root__10930;
var level__10932 = tv.shift;
while(true){
if((level__10932 > 0))
{{
var G__10933 = cljs.core.tv_ensure_editable.call(null,root__10930.edit,cljs.core.pv_aget.call(null,node__10931,((i >>> level__10932) & 31)));
var G__10934 = (level__10932 - 5);
node__10931 = G__10933;
level__10932 = G__10934;
continue;
}
} else
{return node__10931.arr;
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
var G__10974 = null;
var G__10974__2 = (function (this_sym10937,k){
var this__10939 = this;
var this_sym10937__10940 = this;
var coll__10941 = this_sym10937__10940;
return coll__10941.cljs$core$ILookup$_lookup$arity$2(coll__10941,k);
});
var G__10974__3 = (function (this_sym10938,k,not_found){
var this__10939 = this;
var this_sym10938__10942 = this;
var coll__10943 = this_sym10938__10942;
return coll__10943.cljs$core$ILookup$_lookup$arity$3(coll__10943,k,not_found);
});
G__10974 = function(this_sym10938,k,not_found){
switch(arguments.length){
case 2:
return G__10974__2.call(this,this_sym10938,k);
case 3:
return G__10974__3.call(this,this_sym10938,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10974;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym10935,args10936){
var this__10944 = this;
return this_sym10935.call.apply(this_sym10935,[this_sym10935].concat(args10936.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10945 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10946 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10947 = this;
if(this__10947.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10948 = this;
if((function (){var and__3822__auto____10949 = (0 <= n);
if(and__3822__auto____10949)
{return (n < this__10948.cnt);
} else
{return and__3822__auto____10949;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10950 = this;
if(this__10950.root.edit)
{return this__10950.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__10951 = this;
if(this__10951.root.edit)
{if((function (){var and__3822__auto____10952 = (0 <= n);
if(and__3822__auto____10952)
{return (n < this__10951.cnt);
} else
{return and__3822__auto____10952;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__10951.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__10957 = (function go(level,node){
var node__10955 = cljs.core.tv_ensure_editable.call(null,this__10951.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__10955,(n & 31),val);
return node__10955;
} else
{var subidx__10956 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__10955,subidx__10956,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__10955,subidx__10956)));
return node__10955;
}
}).call(null,this__10951.shift,this__10951.root);
this__10951.root = new_root__10957;
return tcoll;
}
} else
{if((n === this__10951.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__10951.cnt)].join('')));
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
var this__10958 = this;
if(this__10958.root.edit)
{if((this__10958.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10958.cnt))
{this__10958.cnt = 0;
return tcoll;
} else
{if((((this__10958.cnt - 1) & 31) > 0))
{this__10958.cnt = (this__10958.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__10959 = cljs.core.editable_array_for.call(null,tcoll,(this__10958.cnt - 2));
var new_root__10961 = (function (){var nr__10960 = cljs.core.tv_pop_tail.call(null,tcoll,this__10958.shift,this__10958.root);
if(!((nr__10960 == null)))
{return nr__10960;
} else
{return (new cljs.core.VectorNode(this__10958.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____10962 = (5 < this__10958.shift);
if(and__3822__auto____10962)
{return (cljs.core.pv_aget.call(null,new_root__10961,1) == null);
} else
{return and__3822__auto____10962;
}
})())
{var new_root__10963 = cljs.core.tv_ensure_editable.call(null,this__10958.root.edit,cljs.core.pv_aget.call(null,new_root__10961,0));
this__10958.root = new_root__10963;
this__10958.shift = (this__10958.shift - 5);
this__10958.cnt = (this__10958.cnt - 1);
this__10958.tail = new_tail__10959;
return tcoll;
} else
{this__10958.root = new_root__10961;
this__10958.cnt = (this__10958.cnt - 1);
this__10958.tail = new_tail__10959;
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
var this__10964 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10965 = this;
if(this__10965.root.edit)
{if(((this__10965.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__10965.tail[(this__10965.cnt & 31)] = o);
this__10965.cnt = (this__10965.cnt + 1);
return tcoll;
} else
{var tail_node__10966 = (new cljs.core.VectorNode(this__10965.root.edit,this__10965.tail));
var new_tail__10967 = cljs.core.make_array.call(null,32);
(new_tail__10967[0] = o);
this__10965.tail = new_tail__10967;
if(((this__10965.cnt >>> 5) > (1 << this__10965.shift)))
{var new_root_array__10968 = cljs.core.make_array.call(null,32);
var new_shift__10969 = (this__10965.shift + 5);
(new_root_array__10968[0] = this__10965.root);
(new_root_array__10968[1] = cljs.core.new_path.call(null,this__10965.root.edit,this__10965.shift,tail_node__10966));
this__10965.root = (new cljs.core.VectorNode(this__10965.root.edit,new_root_array__10968));
this__10965.shift = new_shift__10969;
this__10965.cnt = (this__10965.cnt + 1);
return tcoll;
} else
{var new_root__10970 = cljs.core.tv_push_tail.call(null,tcoll,this__10965.shift,this__10965.root,tail_node__10966);
this__10965.root = new_root__10970;
this__10965.cnt = (this__10965.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10971 = this;
if(this__10971.root.edit)
{this__10971.root.edit = null;
var len__10972 = (this__10971.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__10973 = cljs.core.make_array.call(null,len__10972);
cljs.core.array_copy.call(null,this__10971.tail,0,trimmed_tail__10973,0,len__10972);
return (new cljs.core.PersistentVector(null,this__10971.cnt,this__10971.shift,this__10971.root,trimmed_tail__10973,null));
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
var this__10975 = this;
var h__2192__auto____10976 = this__10975.__hash;
if(!((h__2192__auto____10976 == null)))
{return h__2192__auto____10976;
} else
{var h__2192__auto____10977 = cljs.core.hash_coll.call(null,coll);
this__10975.__hash = h__2192__auto____10977;
return h__2192__auto____10977;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10978 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__10979 = this;
var this__10980 = this;
return cljs.core.pr_str.call(null,this__10980);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10981 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10982 = this;
return cljs.core._first.call(null,this__10982.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10983 = this;
var temp__3971__auto____10984 = cljs.core.next.call(null,this__10983.front);
if(temp__3971__auto____10984)
{var f1__10985 = temp__3971__auto____10984;
return (new cljs.core.PersistentQueueSeq(this__10983.meta,f1__10985,this__10983.rear,null));
} else
{if((this__10983.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__10983.meta,this__10983.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10986 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10987 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__10987.front,this__10987.rear,this__10987.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10988 = this;
return this__10988.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10989 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10989.meta);
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
var this__10990 = this;
var h__2192__auto____10991 = this__10990.__hash;
if(!((h__2192__auto____10991 == null)))
{return h__2192__auto____10991;
} else
{var h__2192__auto____10992 = cljs.core.hash_coll.call(null,coll);
this__10990.__hash = h__2192__auto____10992;
return h__2192__auto____10992;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10993 = this;
if(cljs.core.truth_(this__10993.front))
{return (new cljs.core.PersistentQueue(this__10993.meta,(this__10993.count + 1),this__10993.front,cljs.core.conj.call(null,(function (){var or__3824__auto____10994 = this__10993.rear;
if(cljs.core.truth_(or__3824__auto____10994))
{return or__3824__auto____10994;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__10993.meta,(this__10993.count + 1),cljs.core.conj.call(null,this__10993.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__10995 = this;
var this__10996 = this;
return cljs.core.pr_str.call(null,this__10996);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10997 = this;
var rear__10998 = cljs.core.seq.call(null,this__10997.rear);
if(cljs.core.truth_((function (){var or__3824__auto____10999 = this__10997.front;
if(cljs.core.truth_(or__3824__auto____10999))
{return or__3824__auto____10999;
} else
{return rear__10998;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__10997.front,cljs.core.seq.call(null,rear__10998),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11000 = this;
return this__11000.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__11001 = this;
return cljs.core._first.call(null,this__11001.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__11002 = this;
if(cljs.core.truth_(this__11002.front))
{var temp__3971__auto____11003 = cljs.core.next.call(null,this__11002.front);
if(temp__3971__auto____11003)
{var f1__11004 = temp__3971__auto____11003;
return (new cljs.core.PersistentQueue(this__11002.meta,(this__11002.count - 1),f1__11004,this__11002.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__11002.meta,(this__11002.count - 1),cljs.core.seq.call(null,this__11002.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11005 = this;
return cljs.core.first.call(null,this__11005.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11006 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11007 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11008 = this;
return (new cljs.core.PersistentQueue(meta,this__11008.count,this__11008.front,this__11008.rear,this__11008.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11009 = this;
return this__11009.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11010 = this;
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
var this__11011 = this;
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
var len__11014 = array.length;
var i__11015 = 0;
while(true){
if((i__11015 < len__11014))
{if((k === (array[i__11015])))
{return i__11015;
} else
{{
var G__11016 = (i__11015 + incr);
i__11015 = G__11016;
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
var a__11019 = cljs.core.hash.call(null,a);
var b__11020 = cljs.core.hash.call(null,b);
if((a__11019 < b__11020))
{return -1;
} else
{if((a__11019 > b__11020))
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
var ks__11028 = m.keys;
var len__11029 = ks__11028.length;
var so__11030 = m.strobj;
var out__11031 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__11032 = 0;
var out__11033 = cljs.core.transient$.call(null,out__11031);
while(true){
if((i__11032 < len__11029))
{var k__11034 = (ks__11028[i__11032]);
{
var G__11035 = (i__11032 + 1);
var G__11036 = cljs.core.assoc_BANG_.call(null,out__11033,k__11034,(so__11030[k__11034]));
i__11032 = G__11035;
out__11033 = G__11036;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__11033,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__11042 = {};
var l__11043 = ks.length;
var i__11044 = 0;
while(true){
if((i__11044 < l__11043))
{var k__11045 = (ks[i__11044]);
(new_obj__11042[k__11045] = (obj[k__11045]));
{
var G__11046 = (i__11044 + 1);
i__11044 = G__11046;
continue;
}
} else
{}
break;
}
return new_obj__11042;
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
var this__11049 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11050 = this;
var h__2192__auto____11051 = this__11050.__hash;
if(!((h__2192__auto____11051 == null)))
{return h__2192__auto____11051;
} else
{var h__2192__auto____11052 = cljs.core.hash_imap.call(null,coll);
this__11050.__hash = h__2192__auto____11052;
return h__2192__auto____11052;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11053 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11054 = this;
if((function (){var and__3822__auto____11055 = goog.isString(k);
if(and__3822__auto____11055)
{return !((cljs.core.scan_array.call(null,1,k,this__11054.keys) == null));
} else
{return and__3822__auto____11055;
}
})())
{return (this__11054.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11056 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____11057 = (this__11056.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____11057)
{return or__3824__auto____11057;
} else
{return (this__11056.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__11056.keys) == null)))
{var new_strobj__11058 = cljs.core.obj_clone.call(null,this__11056.strobj,this__11056.keys);
(new_strobj__11058[k] = v);
return (new cljs.core.ObjMap(this__11056.meta,this__11056.keys,new_strobj__11058,(this__11056.update_count + 1),null));
} else
{var new_strobj__11059 = cljs.core.obj_clone.call(null,this__11056.strobj,this__11056.keys);
var new_keys__11060 = this__11056.keys.slice();
(new_strobj__11059[k] = v);
new_keys__11060.push(k);
return (new cljs.core.ObjMap(this__11056.meta,new_keys__11060,new_strobj__11059,(this__11056.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11061 = this;
if((function (){var and__3822__auto____11062 = goog.isString(k);
if(and__3822__auto____11062)
{return !((cljs.core.scan_array.call(null,1,k,this__11061.keys) == null));
} else
{return and__3822__auto____11062;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__11084 = null;
var G__11084__2 = (function (this_sym11063,k){
var this__11065 = this;
var this_sym11063__11066 = this;
var coll__11067 = this_sym11063__11066;
return coll__11067.cljs$core$ILookup$_lookup$arity$2(coll__11067,k);
});
var G__11084__3 = (function (this_sym11064,k,not_found){
var this__11065 = this;
var this_sym11064__11068 = this;
var coll__11069 = this_sym11064__11068;
return coll__11069.cljs$core$ILookup$_lookup$arity$3(coll__11069,k,not_found);
});
G__11084 = function(this_sym11064,k,not_found){
switch(arguments.length){
case 2:
return G__11084__2.call(this,this_sym11064,k);
case 3:
return G__11084__3.call(this,this_sym11064,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11084;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym11047,args11048){
var this__11070 = this;
return this_sym11047.call.apply(this_sym11047,[this_sym11047].concat(args11048.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11071 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__11072 = this;
var this__11073 = this;
return cljs.core.pr_str.call(null,this__11073);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11074 = this;
if((this__11074.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__11037_SHARP_){
return cljs.core.vector.call(null,p1__11037_SHARP_,(this__11074.strobj[p1__11037_SHARP_]));
}),this__11074.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11075 = this;
return this__11075.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11076 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11077 = this;
return (new cljs.core.ObjMap(meta,this__11077.keys,this__11077.strobj,this__11077.update_count,this__11077.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11078 = this;
return this__11078.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11079 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__11079.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11080 = this;
if((function (){var and__3822__auto____11081 = goog.isString(k);
if(and__3822__auto____11081)
{return !((cljs.core.scan_array.call(null,1,k,this__11080.keys) == null));
} else
{return and__3822__auto____11081;
}
})())
{var new_keys__11082 = this__11080.keys.slice();
var new_strobj__11083 = cljs.core.obj_clone.call(null,this__11080.strobj,this__11080.keys);
new_keys__11082.splice(cljs.core.scan_array.call(null,1,k,new_keys__11082),1);
cljs.core.js_delete.call(null,new_strobj__11083,k);
return (new cljs.core.ObjMap(this__11080.meta,new_keys__11082,new_strobj__11083,(this__11080.update_count + 1),null));
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
var this__11088 = this;
var h__2192__auto____11089 = this__11088.__hash;
if(!((h__2192__auto____11089 == null)))
{return h__2192__auto____11089;
} else
{var h__2192__auto____11090 = cljs.core.hash_imap.call(null,coll);
this__11088.__hash = h__2192__auto____11090;
return h__2192__auto____11090;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11091 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11092 = this;
var bucket__11093 = (this__11092.hashobj[cljs.core.hash.call(null,k)]);
var i__11094 = (cljs.core.truth_(bucket__11093)?cljs.core.scan_array.call(null,2,k,bucket__11093):null);
if(cljs.core.truth_(i__11094))
{return (bucket__11093[(i__11094 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11095 = this;
var h__11096 = cljs.core.hash.call(null,k);
var bucket__11097 = (this__11095.hashobj[h__11096]);
if(cljs.core.truth_(bucket__11097))
{var new_bucket__11098 = bucket__11097.slice();
var new_hashobj__11099 = goog.object.clone(this__11095.hashobj);
(new_hashobj__11099[h__11096] = new_bucket__11098);
var temp__3971__auto____11100 = cljs.core.scan_array.call(null,2,k,new_bucket__11098);
if(cljs.core.truth_(temp__3971__auto____11100))
{var i__11101 = temp__3971__auto____11100;
(new_bucket__11098[(i__11101 + 1)] = v);
return (new cljs.core.HashMap(this__11095.meta,this__11095.count,new_hashobj__11099,null));
} else
{new_bucket__11098.push(k,v);
return (new cljs.core.HashMap(this__11095.meta,(this__11095.count + 1),new_hashobj__11099,null));
}
} else
{var new_hashobj__11102 = goog.object.clone(this__11095.hashobj);
(new_hashobj__11102[h__11096] = [k,v]);
return (new cljs.core.HashMap(this__11095.meta,(this__11095.count + 1),new_hashobj__11102,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11103 = this;
var bucket__11104 = (this__11103.hashobj[cljs.core.hash.call(null,k)]);
var i__11105 = (cljs.core.truth_(bucket__11104)?cljs.core.scan_array.call(null,2,k,bucket__11104):null);
if(cljs.core.truth_(i__11105))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__11130 = null;
var G__11130__2 = (function (this_sym11106,k){
var this__11108 = this;
var this_sym11106__11109 = this;
var coll__11110 = this_sym11106__11109;
return coll__11110.cljs$core$ILookup$_lookup$arity$2(coll__11110,k);
});
var G__11130__3 = (function (this_sym11107,k,not_found){
var this__11108 = this;
var this_sym11107__11111 = this;
var coll__11112 = this_sym11107__11111;
return coll__11112.cljs$core$ILookup$_lookup$arity$3(coll__11112,k,not_found);
});
G__11130 = function(this_sym11107,k,not_found){
switch(arguments.length){
case 2:
return G__11130__2.call(this,this_sym11107,k);
case 3:
return G__11130__3.call(this,this_sym11107,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11130;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym11086,args11087){
var this__11113 = this;
return this_sym11086.call.apply(this_sym11086,[this_sym11086].concat(args11087.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11114 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__11115 = this;
var this__11116 = this;
return cljs.core.pr_str.call(null,this__11116);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11117 = this;
if((this__11117.count > 0))
{var hashes__11118 = cljs.core.js_keys.call(null,this__11117.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__11085_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__11117.hashobj[p1__11085_SHARP_])));
}),hashes__11118);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11119 = this;
return this__11119.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11120 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11121 = this;
return (new cljs.core.HashMap(meta,this__11121.count,this__11121.hashobj,this__11121.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11122 = this;
return this__11122.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11123 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__11123.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11124 = this;
var h__11125 = cljs.core.hash.call(null,k);
var bucket__11126 = (this__11124.hashobj[h__11125]);
var i__11127 = (cljs.core.truth_(bucket__11126)?cljs.core.scan_array.call(null,2,k,bucket__11126):null);
if(cljs.core.not.call(null,i__11127))
{return coll;
} else
{var new_hashobj__11128 = goog.object.clone(this__11124.hashobj);
if((3 > bucket__11126.length))
{cljs.core.js_delete.call(null,new_hashobj__11128,h__11125);
} else
{var new_bucket__11129 = bucket__11126.slice();
new_bucket__11129.splice(i__11127,2);
(new_hashobj__11128[h__11125] = new_bucket__11129);
}
return (new cljs.core.HashMap(this__11124.meta,(this__11124.count - 1),new_hashobj__11128,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__11131 = ks.length;
var i__11132 = 0;
var out__11133 = cljs.core.HashMap.EMPTY;
while(true){
if((i__11132 < len__11131))
{{
var G__11134 = (i__11132 + 1);
var G__11135 = cljs.core.assoc.call(null,out__11133,(ks[i__11132]),(vs[i__11132]));
i__11132 = G__11134;
out__11133 = G__11135;
continue;
}
} else
{return out__11133;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__11139 = m.arr;
var len__11140 = arr__11139.length;
var i__11141 = 0;
while(true){
if((len__11140 <= i__11141))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__11139[i__11141]),k))
{return i__11141;
} else
{if("\uFDD0'else")
{{
var G__11142 = (i__11141 + 2);
i__11141 = G__11142;
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
var this__11145 = this;
return (new cljs.core.TransientArrayMap({},this__11145.arr.length,this__11145.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11146 = this;
var h__2192__auto____11147 = this__11146.__hash;
if(!((h__2192__auto____11147 == null)))
{return h__2192__auto____11147;
} else
{var h__2192__auto____11148 = cljs.core.hash_imap.call(null,coll);
this__11146.__hash = h__2192__auto____11148;
return h__2192__auto____11148;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11149 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11150 = this;
var idx__11151 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__11151 === -1))
{return not_found;
} else
{return (this__11150.arr[(idx__11151 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11152 = this;
var idx__11153 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__11153 === -1))
{if((this__11152.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__11152.meta,(this__11152.cnt + 1),(function (){var G__11154__11155 = this__11152.arr.slice();
G__11154__11155.push(k);
G__11154__11155.push(v);
return G__11154__11155;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__11152.arr[(idx__11153 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__11152.meta,this__11152.cnt,(function (){var G__11156__11157 = this__11152.arr.slice();
(G__11156__11157[(idx__11153 + 1)] = v);
return G__11156__11157;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11158 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__11190 = null;
var G__11190__2 = (function (this_sym11159,k){
var this__11161 = this;
var this_sym11159__11162 = this;
var coll__11163 = this_sym11159__11162;
return coll__11163.cljs$core$ILookup$_lookup$arity$2(coll__11163,k);
});
var G__11190__3 = (function (this_sym11160,k,not_found){
var this__11161 = this;
var this_sym11160__11164 = this;
var coll__11165 = this_sym11160__11164;
return coll__11165.cljs$core$ILookup$_lookup$arity$3(coll__11165,k,not_found);
});
G__11190 = function(this_sym11160,k,not_found){
switch(arguments.length){
case 2:
return G__11190__2.call(this,this_sym11160,k);
case 3:
return G__11190__3.call(this,this_sym11160,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11190;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym11143,args11144){
var this__11166 = this;
return this_sym11143.call.apply(this_sym11143,[this_sym11143].concat(args11144.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11167 = this;
var len__11168 = this__11167.arr.length;
var i__11169 = 0;
var init__11170 = init;
while(true){
if((i__11169 < len__11168))
{var init__11171 = f.call(null,init__11170,(this__11167.arr[i__11169]),(this__11167.arr[(i__11169 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__11171))
{return cljs.core.deref.call(null,init__11171);
} else
{{
var G__11191 = (i__11169 + 2);
var G__11192 = init__11171;
i__11169 = G__11191;
init__11170 = G__11192;
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
var this__11172 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__11173 = this;
var this__11174 = this;
return cljs.core.pr_str.call(null,this__11174);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11175 = this;
if((this__11175.cnt > 0))
{var len__11176 = this__11175.arr.length;
var array_map_seq__11177 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__11176))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__11175.arr[i]),(this__11175.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__11177.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11178 = this;
return this__11178.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11179 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11180 = this;
return (new cljs.core.PersistentArrayMap(meta,this__11180.cnt,this__11180.arr,this__11180.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11181 = this;
return this__11181.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11182 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11182.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11183 = this;
var idx__11184 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__11184 >= 0))
{var len__11185 = this__11183.arr.length;
var new_len__11186 = (len__11185 - 2);
if((new_len__11186 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__11187 = cljs.core.make_array.call(null,new_len__11186);
var s__11188 = 0;
var d__11189 = 0;
while(true){
if((s__11188 >= len__11185))
{return (new cljs.core.PersistentArrayMap(this__11183.meta,(this__11183.cnt - 1),new_arr__11187,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__11183.arr[s__11188])))
{{
var G__11193 = (s__11188 + 2);
var G__11194 = d__11189;
s__11188 = G__11193;
d__11189 = G__11194;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__11187[d__11189] = (this__11183.arr[s__11188]));
(new_arr__11187[(d__11189 + 1)] = (this__11183.arr[(s__11188 + 1)]));
{
var G__11195 = (s__11188 + 2);
var G__11196 = (d__11189 + 2);
s__11188 = G__11195;
d__11189 = G__11196;
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
var len__11197 = cljs.core.count.call(null,ks);
var i__11198 = 0;
var out__11199 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__11198 < len__11197))
{{
var G__11200 = (i__11198 + 1);
var G__11201 = cljs.core.assoc_BANG_.call(null,out__11199,(ks[i__11198]),(vs[i__11198]));
i__11198 = G__11200;
out__11199 = G__11201;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11199);
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
var this__11202 = this;
if(cljs.core.truth_(this__11202.editable_QMARK_))
{var idx__11203 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__11203 >= 0))
{(this__11202.arr[idx__11203] = (this__11202.arr[(this__11202.len - 2)]));
(this__11202.arr[(idx__11203 + 1)] = (this__11202.arr[(this__11202.len - 1)]));
var G__11204__11205 = this__11202.arr;
G__11204__11205.pop();
G__11204__11205.pop();
G__11204__11205;
this__11202.len = (this__11202.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__11206 = this;
if(cljs.core.truth_(this__11206.editable_QMARK_))
{var idx__11207 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__11207 === -1))
{if(((this__11206.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__11206.len = (this__11206.len + 2);
this__11206.arr.push(key);
this__11206.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__11206.len,this__11206.arr),key,val);
}
} else
{if((val === (this__11206.arr[(idx__11207 + 1)])))
{return tcoll;
} else
{(this__11206.arr[(idx__11207 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11208 = this;
if(cljs.core.truth_(this__11208.editable_QMARK_))
{if((function (){var G__11209__11210 = o;
if(G__11209__11210)
{if((function (){var or__3824__auto____11211 = (G__11209__11210.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____11211)
{return or__3824__auto____11211;
} else
{return G__11209__11210.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__11209__11210.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11209__11210);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11209__11210);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__11212 = cljs.core.seq.call(null,o);
var tcoll__11213 = tcoll;
while(true){
var temp__3971__auto____11214 = cljs.core.first.call(null,es__11212);
if(cljs.core.truth_(temp__3971__auto____11214))
{var e__11215 = temp__3971__auto____11214;
{
var G__11221 = cljs.core.next.call(null,es__11212);
var G__11222 = tcoll__11213.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__11213,cljs.core.key.call(null,e__11215),cljs.core.val.call(null,e__11215));
es__11212 = G__11221;
tcoll__11213 = G__11222;
continue;
}
} else
{return tcoll__11213;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11216 = this;
if(cljs.core.truth_(this__11216.editable_QMARK_))
{this__11216.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__11216.len,2),this__11216.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__11217 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__11218 = this;
if(cljs.core.truth_(this__11218.editable_QMARK_))
{var idx__11219 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__11219 === -1))
{return not_found;
} else
{return (this__11218.arr[(idx__11219 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__11220 = this;
if(cljs.core.truth_(this__11220.editable_QMARK_))
{return cljs.core.quot.call(null,this__11220.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__11225 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__11226 = 0;
while(true){
if((i__11226 < len))
{{
var G__11227 = cljs.core.assoc_BANG_.call(null,out__11225,(arr[i__11226]),(arr[(i__11226 + 1)]));
var G__11228 = (i__11226 + 2);
out__11225 = G__11227;
i__11226 = G__11228;
continue;
}
} else
{return out__11225;
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
var G__11233__11234 = arr.slice();
(G__11233__11234[i] = a);
return G__11233__11234;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__11235__11236 = arr.slice();
(G__11235__11236[i] = a);
(G__11235__11236[j] = b);
return G__11235__11236;
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
var new_arr__11238 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__11238,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__11238,(2 * i),(new_arr__11238.length - (2 * i)));
return new_arr__11238;
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
var editable__11241 = inode.ensure_editable(edit);
(editable__11241.arr[i] = a);
return editable__11241;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__11242 = inode.ensure_editable(edit);
(editable__11242.arr[i] = a);
(editable__11242.arr[j] = b);
return editable__11242;
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
var len__11249 = arr.length;
var i__11250 = 0;
var init__11251 = init;
while(true){
if((i__11250 < len__11249))
{var init__11254 = (function (){var k__11252 = (arr[i__11250]);
if(!((k__11252 == null)))
{return f.call(null,init__11251,k__11252,(arr[(i__11250 + 1)]));
} else
{var node__11253 = (arr[(i__11250 + 1)]);
if(!((node__11253 == null)))
{return node__11253.kv_reduce(f,init__11251);
} else
{return init__11251;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__11254))
{return cljs.core.deref.call(null,init__11254);
} else
{{
var G__11255 = (i__11250 + 2);
var G__11256 = init__11254;
i__11250 = G__11255;
init__11251 = G__11256;
continue;
}
}
} else
{return init__11251;
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
var this__11257 = this;
var inode__11258 = this;
if((this__11257.bitmap === bit))
{return null;
} else
{var editable__11259 = inode__11258.ensure_editable(e);
var earr__11260 = editable__11259.arr;
var len__11261 = earr__11260.length;
editable__11259.bitmap = (bit ^ editable__11259.bitmap);
cljs.core.array_copy.call(null,earr__11260,(2 * (i + 1)),earr__11260,(2 * i),(len__11261 - (2 * (i + 1))));
(earr__11260[(len__11261 - 2)] = null);
(earr__11260[(len__11261 - 1)] = null);
return editable__11259;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__11262 = this;
var inode__11263 = this;
var bit__11264 = (1 << ((hash >>> shift) & 0x01f));
var idx__11265 = cljs.core.bitmap_indexed_node_index.call(null,this__11262.bitmap,bit__11264);
if(((this__11262.bitmap & bit__11264) === 0))
{var n__11266 = cljs.core.bit_count.call(null,this__11262.bitmap);
if(((2 * n__11266) < this__11262.arr.length))
{var editable__11267 = inode__11263.ensure_editable(edit);
var earr__11268 = editable__11267.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__11268,(2 * idx__11265),earr__11268,(2 * (idx__11265 + 1)),(2 * (n__11266 - idx__11265)));
(earr__11268[(2 * idx__11265)] = key);
(earr__11268[((2 * idx__11265) + 1)] = val);
editable__11267.bitmap = (editable__11267.bitmap | bit__11264);
return editable__11267;
} else
{if((n__11266 >= 16))
{var nodes__11269 = cljs.core.make_array.call(null,32);
var jdx__11270 = ((hash >>> shift) & 0x01f);
(nodes__11269[jdx__11270] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__11271 = 0;
var j__11272 = 0;
while(true){
if((i__11271 < 32))
{if((((this__11262.bitmap >>> i__11271) & 1) === 0))
{{
var G__11325 = (i__11271 + 1);
var G__11326 = j__11272;
i__11271 = G__11325;
j__11272 = G__11326;
continue;
}
} else
{(nodes__11269[i__11271] = ((!(((this__11262.arr[j__11272]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__11262.arr[j__11272])),(this__11262.arr[j__11272]),(this__11262.arr[(j__11272 + 1)]),added_leaf_QMARK_):(this__11262.arr[(j__11272 + 1)])));
{
var G__11327 = (i__11271 + 1);
var G__11328 = (j__11272 + 2);
i__11271 = G__11327;
j__11272 = G__11328;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__11266 + 1),nodes__11269));
} else
{if("\uFDD0'else")
{var new_arr__11273 = cljs.core.make_array.call(null,(2 * (n__11266 + 4)));
cljs.core.array_copy.call(null,this__11262.arr,0,new_arr__11273,0,(2 * idx__11265));
(new_arr__11273[(2 * idx__11265)] = key);
(new_arr__11273[((2 * idx__11265) + 1)] = val);
cljs.core.array_copy.call(null,this__11262.arr,(2 * idx__11265),new_arr__11273,(2 * (idx__11265 + 1)),(2 * (n__11266 - idx__11265)));
added_leaf_QMARK_.val = true;
var editable__11274 = inode__11263.ensure_editable(edit);
editable__11274.arr = new_arr__11273;
editable__11274.bitmap = (editable__11274.bitmap | bit__11264);
return editable__11274;
} else
{return null;
}
}
}
} else
{var key_or_nil__11275 = (this__11262.arr[(2 * idx__11265)]);
var val_or_node__11276 = (this__11262.arr[((2 * idx__11265) + 1)]);
if((key_or_nil__11275 == null))
{var n__11277 = val_or_node__11276.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11277 === val_or_node__11276))
{return inode__11263;
} else
{return cljs.core.edit_and_set.call(null,inode__11263,edit,((2 * idx__11265) + 1),n__11277);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11275))
{if((val === val_or_node__11276))
{return inode__11263;
} else
{return cljs.core.edit_and_set.call(null,inode__11263,edit,((2 * idx__11265) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__11263,edit,(2 * idx__11265),null,((2 * idx__11265) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__11275,val_or_node__11276,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__11278 = this;
var inode__11279 = this;
return cljs.core.create_inode_seq.call(null,this__11278.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11280 = this;
var inode__11281 = this;
var bit__11282 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11280.bitmap & bit__11282) === 0))
{return inode__11281;
} else
{var idx__11283 = cljs.core.bitmap_indexed_node_index.call(null,this__11280.bitmap,bit__11282);
var key_or_nil__11284 = (this__11280.arr[(2 * idx__11283)]);
var val_or_node__11285 = (this__11280.arr[((2 * idx__11283) + 1)]);
if((key_or_nil__11284 == null))
{var n__11286 = val_or_node__11285.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__11286 === val_or_node__11285))
{return inode__11281;
} else
{if(!((n__11286 == null)))
{return cljs.core.edit_and_set.call(null,inode__11281,edit,((2 * idx__11283) + 1),n__11286);
} else
{if((this__11280.bitmap === bit__11282))
{return null;
} else
{if("\uFDD0'else")
{return inode__11281.edit_and_remove_pair(edit,bit__11282,idx__11283);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11284))
{(removed_leaf_QMARK_[0] = true);
return inode__11281.edit_and_remove_pair(edit,bit__11282,idx__11283);
} else
{if("\uFDD0'else")
{return inode__11281;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__11287 = this;
var inode__11288 = this;
if((e === this__11287.edit))
{return inode__11288;
} else
{var n__11289 = cljs.core.bit_count.call(null,this__11287.bitmap);
var new_arr__11290 = cljs.core.make_array.call(null,(((n__11289 < 0))?4:(2 * (n__11289 + 1))));
cljs.core.array_copy.call(null,this__11287.arr,0,new_arr__11290,0,(2 * n__11289));
return (new cljs.core.BitmapIndexedNode(e,this__11287.bitmap,new_arr__11290));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__11291 = this;
var inode__11292 = this;
return cljs.core.inode_kv_reduce.call(null,this__11291.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11293 = this;
var inode__11294 = this;
var bit__11295 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11293.bitmap & bit__11295) === 0))
{return not_found;
} else
{var idx__11296 = cljs.core.bitmap_indexed_node_index.call(null,this__11293.bitmap,bit__11295);
var key_or_nil__11297 = (this__11293.arr[(2 * idx__11296)]);
var val_or_node__11298 = (this__11293.arr[((2 * idx__11296) + 1)]);
if((key_or_nil__11297 == null))
{return val_or_node__11298.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11297))
{return cljs.core.PersistentVector.fromArray([key_or_nil__11297,val_or_node__11298], true);
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
var this__11299 = this;
var inode__11300 = this;
var bit__11301 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11299.bitmap & bit__11301) === 0))
{return inode__11300;
} else
{var idx__11302 = cljs.core.bitmap_indexed_node_index.call(null,this__11299.bitmap,bit__11301);
var key_or_nil__11303 = (this__11299.arr[(2 * idx__11302)]);
var val_or_node__11304 = (this__11299.arr[((2 * idx__11302) + 1)]);
if((key_or_nil__11303 == null))
{var n__11305 = val_or_node__11304.inode_without((shift + 5),hash,key);
if((n__11305 === val_or_node__11304))
{return inode__11300;
} else
{if(!((n__11305 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__11299.bitmap,cljs.core.clone_and_set.call(null,this__11299.arr,((2 * idx__11302) + 1),n__11305)));
} else
{if((this__11299.bitmap === bit__11301))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__11299.bitmap ^ bit__11301),cljs.core.remove_pair.call(null,this__11299.arr,idx__11302)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11303))
{return (new cljs.core.BitmapIndexedNode(null,(this__11299.bitmap ^ bit__11301),cljs.core.remove_pair.call(null,this__11299.arr,idx__11302)));
} else
{if("\uFDD0'else")
{return inode__11300;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11306 = this;
var inode__11307 = this;
var bit__11308 = (1 << ((hash >>> shift) & 0x01f));
var idx__11309 = cljs.core.bitmap_indexed_node_index.call(null,this__11306.bitmap,bit__11308);
if(((this__11306.bitmap & bit__11308) === 0))
{var n__11310 = cljs.core.bit_count.call(null,this__11306.bitmap);
if((n__11310 >= 16))
{var nodes__11311 = cljs.core.make_array.call(null,32);
var jdx__11312 = ((hash >>> shift) & 0x01f);
(nodes__11311[jdx__11312] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__11313 = 0;
var j__11314 = 0;
while(true){
if((i__11313 < 32))
{if((((this__11306.bitmap >>> i__11313) & 1) === 0))
{{
var G__11329 = (i__11313 + 1);
var G__11330 = j__11314;
i__11313 = G__11329;
j__11314 = G__11330;
continue;
}
} else
{(nodes__11311[i__11313] = ((!(((this__11306.arr[j__11314]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__11306.arr[j__11314])),(this__11306.arr[j__11314]),(this__11306.arr[(j__11314 + 1)]),added_leaf_QMARK_):(this__11306.arr[(j__11314 + 1)])));
{
var G__11331 = (i__11313 + 1);
var G__11332 = (j__11314 + 2);
i__11313 = G__11331;
j__11314 = G__11332;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__11310 + 1),nodes__11311));
} else
{var new_arr__11315 = cljs.core.make_array.call(null,(2 * (n__11310 + 1)));
cljs.core.array_copy.call(null,this__11306.arr,0,new_arr__11315,0,(2 * idx__11309));
(new_arr__11315[(2 * idx__11309)] = key);
(new_arr__11315[((2 * idx__11309) + 1)] = val);
cljs.core.array_copy.call(null,this__11306.arr,(2 * idx__11309),new_arr__11315,(2 * (idx__11309 + 1)),(2 * (n__11310 - idx__11309)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__11306.bitmap | bit__11308),new_arr__11315));
}
} else
{var key_or_nil__11316 = (this__11306.arr[(2 * idx__11309)]);
var val_or_node__11317 = (this__11306.arr[((2 * idx__11309) + 1)]);
if((key_or_nil__11316 == null))
{var n__11318 = val_or_node__11317.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11318 === val_or_node__11317))
{return inode__11307;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__11306.bitmap,cljs.core.clone_and_set.call(null,this__11306.arr,((2 * idx__11309) + 1),n__11318)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11316))
{if((val === val_or_node__11317))
{return inode__11307;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__11306.bitmap,cljs.core.clone_and_set.call(null,this__11306.arr,((2 * idx__11309) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__11306.bitmap,cljs.core.clone_and_set.call(null,this__11306.arr,(2 * idx__11309),null,((2 * idx__11309) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__11316,val_or_node__11317,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11319 = this;
var inode__11320 = this;
var bit__11321 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11319.bitmap & bit__11321) === 0))
{return not_found;
} else
{var idx__11322 = cljs.core.bitmap_indexed_node_index.call(null,this__11319.bitmap,bit__11321);
var key_or_nil__11323 = (this__11319.arr[(2 * idx__11322)]);
var val_or_node__11324 = (this__11319.arr[((2 * idx__11322) + 1)]);
if((key_or_nil__11323 == null))
{return val_or_node__11324.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11323))
{return val_or_node__11324;
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
var arr__11340 = array_node.arr;
var len__11341 = (2 * (array_node.cnt - 1));
var new_arr__11342 = cljs.core.make_array.call(null,len__11341);
var i__11343 = 0;
var j__11344 = 1;
var bitmap__11345 = 0;
while(true){
if((i__11343 < len__11341))
{if((function (){var and__3822__auto____11346 = !((i__11343 === idx));
if(and__3822__auto____11346)
{return !(((arr__11340[i__11343]) == null));
} else
{return and__3822__auto____11346;
}
})())
{(new_arr__11342[j__11344] = (arr__11340[i__11343]));
{
var G__11347 = (i__11343 + 1);
var G__11348 = (j__11344 + 2);
var G__11349 = (bitmap__11345 | (1 << i__11343));
i__11343 = G__11347;
j__11344 = G__11348;
bitmap__11345 = G__11349;
continue;
}
} else
{{
var G__11350 = (i__11343 + 1);
var G__11351 = j__11344;
var G__11352 = bitmap__11345;
i__11343 = G__11350;
j__11344 = G__11351;
bitmap__11345 = G__11352;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__11345,new_arr__11342));
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
var this__11353 = this;
var inode__11354 = this;
var idx__11355 = ((hash >>> shift) & 0x01f);
var node__11356 = (this__11353.arr[idx__11355]);
if((node__11356 == null))
{var editable__11357 = cljs.core.edit_and_set.call(null,inode__11354,edit,idx__11355,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__11357.cnt = (editable__11357.cnt + 1);
return editable__11357;
} else
{var n__11358 = node__11356.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11358 === node__11356))
{return inode__11354;
} else
{return cljs.core.edit_and_set.call(null,inode__11354,edit,idx__11355,n__11358);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__11359 = this;
var inode__11360 = this;
return cljs.core.create_array_node_seq.call(null,this__11359.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11361 = this;
var inode__11362 = this;
var idx__11363 = ((hash >>> shift) & 0x01f);
var node__11364 = (this__11361.arr[idx__11363]);
if((node__11364 == null))
{return inode__11362;
} else
{var n__11365 = node__11364.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__11365 === node__11364))
{return inode__11362;
} else
{if((n__11365 == null))
{if((this__11361.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__11362,edit,idx__11363);
} else
{var editable__11366 = cljs.core.edit_and_set.call(null,inode__11362,edit,idx__11363,n__11365);
editable__11366.cnt = (editable__11366.cnt - 1);
return editable__11366;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__11362,edit,idx__11363,n__11365);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__11367 = this;
var inode__11368 = this;
if((e === this__11367.edit))
{return inode__11368;
} else
{return (new cljs.core.ArrayNode(e,this__11367.cnt,this__11367.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__11369 = this;
var inode__11370 = this;
var len__11371 = this__11369.arr.length;
var i__11372 = 0;
var init__11373 = init;
while(true){
if((i__11372 < len__11371))
{var node__11374 = (this__11369.arr[i__11372]);
if(!((node__11374 == null)))
{var init__11375 = node__11374.kv_reduce(f,init__11373);
if(cljs.core.reduced_QMARK_.call(null,init__11375))
{return cljs.core.deref.call(null,init__11375);
} else
{{
var G__11394 = (i__11372 + 1);
var G__11395 = init__11375;
i__11372 = G__11394;
init__11373 = G__11395;
continue;
}
}
} else
{return null;
}
} else
{return init__11373;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11376 = this;
var inode__11377 = this;
var idx__11378 = ((hash >>> shift) & 0x01f);
var node__11379 = (this__11376.arr[idx__11378]);
if(!((node__11379 == null)))
{return node__11379.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__11380 = this;
var inode__11381 = this;
var idx__11382 = ((hash >>> shift) & 0x01f);
var node__11383 = (this__11380.arr[idx__11382]);
if(!((node__11383 == null)))
{var n__11384 = node__11383.inode_without((shift + 5),hash,key);
if((n__11384 === node__11383))
{return inode__11381;
} else
{if((n__11384 == null))
{if((this__11380.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__11381,null,idx__11382);
} else
{return (new cljs.core.ArrayNode(null,(this__11380.cnt - 1),cljs.core.clone_and_set.call(null,this__11380.arr,idx__11382,n__11384)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__11380.cnt,cljs.core.clone_and_set.call(null,this__11380.arr,idx__11382,n__11384)));
} else
{return null;
}
}
}
} else
{return inode__11381;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11385 = this;
var inode__11386 = this;
var idx__11387 = ((hash >>> shift) & 0x01f);
var node__11388 = (this__11385.arr[idx__11387]);
if((node__11388 == null))
{return (new cljs.core.ArrayNode(null,(this__11385.cnt + 1),cljs.core.clone_and_set.call(null,this__11385.arr,idx__11387,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__11389 = node__11388.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11389 === node__11388))
{return inode__11386;
} else
{return (new cljs.core.ArrayNode(null,this__11385.cnt,cljs.core.clone_and_set.call(null,this__11385.arr,idx__11387,n__11389)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11390 = this;
var inode__11391 = this;
var idx__11392 = ((hash >>> shift) & 0x01f);
var node__11393 = (this__11390.arr[idx__11392]);
if(!((node__11393 == null)))
{return node__11393.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__11398 = (2 * cnt);
var i__11399 = 0;
while(true){
if((i__11399 < lim__11398))
{if(cljs.core.key_test.call(null,key,(arr[i__11399])))
{return i__11399;
} else
{{
var G__11400 = (i__11399 + 2);
i__11399 = G__11400;
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
var this__11401 = this;
var inode__11402 = this;
if((hash === this__11401.collision_hash))
{var idx__11403 = cljs.core.hash_collision_node_find_index.call(null,this__11401.arr,this__11401.cnt,key);
if((idx__11403 === -1))
{if((this__11401.arr.length > (2 * this__11401.cnt)))
{var editable__11404 = cljs.core.edit_and_set.call(null,inode__11402,edit,(2 * this__11401.cnt),key,((2 * this__11401.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__11404.cnt = (editable__11404.cnt + 1);
return editable__11404;
} else
{var len__11405 = this__11401.arr.length;
var new_arr__11406 = cljs.core.make_array.call(null,(len__11405 + 2));
cljs.core.array_copy.call(null,this__11401.arr,0,new_arr__11406,0,len__11405);
(new_arr__11406[len__11405] = key);
(new_arr__11406[(len__11405 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__11402.ensure_editable_array(edit,(this__11401.cnt + 1),new_arr__11406);
}
} else
{if(((this__11401.arr[(idx__11403 + 1)]) === val))
{return inode__11402;
} else
{return cljs.core.edit_and_set.call(null,inode__11402,edit,(idx__11403 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__11401.collision_hash >>> shift) & 0x01f)),[null,inode__11402,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__11407 = this;
var inode__11408 = this;
return cljs.core.create_inode_seq.call(null,this__11407.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11409 = this;
var inode__11410 = this;
var idx__11411 = cljs.core.hash_collision_node_find_index.call(null,this__11409.arr,this__11409.cnt,key);
if((idx__11411 === -1))
{return inode__11410;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__11409.cnt === 1))
{return null;
} else
{var editable__11412 = inode__11410.ensure_editable(edit);
var earr__11413 = editable__11412.arr;
(earr__11413[idx__11411] = (earr__11413[((2 * this__11409.cnt) - 2)]));
(earr__11413[(idx__11411 + 1)] = (earr__11413[((2 * this__11409.cnt) - 1)]));
(earr__11413[((2 * this__11409.cnt) - 1)] = null);
(earr__11413[((2 * this__11409.cnt) - 2)] = null);
editable__11412.cnt = (editable__11412.cnt - 1);
return editable__11412;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__11414 = this;
var inode__11415 = this;
if((e === this__11414.edit))
{return inode__11415;
} else
{var new_arr__11416 = cljs.core.make_array.call(null,(2 * (this__11414.cnt + 1)));
cljs.core.array_copy.call(null,this__11414.arr,0,new_arr__11416,0,(2 * this__11414.cnt));
return (new cljs.core.HashCollisionNode(e,this__11414.collision_hash,this__11414.cnt,new_arr__11416));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__11417 = this;
var inode__11418 = this;
return cljs.core.inode_kv_reduce.call(null,this__11417.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11419 = this;
var inode__11420 = this;
var idx__11421 = cljs.core.hash_collision_node_find_index.call(null,this__11419.arr,this__11419.cnt,key);
if((idx__11421 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__11419.arr[idx__11421])))
{return cljs.core.PersistentVector.fromArray([(this__11419.arr[idx__11421]),(this__11419.arr[(idx__11421 + 1)])], true);
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
var this__11422 = this;
var inode__11423 = this;
var idx__11424 = cljs.core.hash_collision_node_find_index.call(null,this__11422.arr,this__11422.cnt,key);
if((idx__11424 === -1))
{return inode__11423;
} else
{if((this__11422.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__11422.collision_hash,(this__11422.cnt - 1),cljs.core.remove_pair.call(null,this__11422.arr,cljs.core.quot.call(null,idx__11424,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11425 = this;
var inode__11426 = this;
if((hash === this__11425.collision_hash))
{var idx__11427 = cljs.core.hash_collision_node_find_index.call(null,this__11425.arr,this__11425.cnt,key);
if((idx__11427 === -1))
{var len__11428 = this__11425.arr.length;
var new_arr__11429 = cljs.core.make_array.call(null,(len__11428 + 2));
cljs.core.array_copy.call(null,this__11425.arr,0,new_arr__11429,0,len__11428);
(new_arr__11429[len__11428] = key);
(new_arr__11429[(len__11428 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__11425.collision_hash,(this__11425.cnt + 1),new_arr__11429));
} else
{if(cljs.core._EQ_.call(null,(this__11425.arr[idx__11427]),val))
{return inode__11426;
} else
{return (new cljs.core.HashCollisionNode(null,this__11425.collision_hash,this__11425.cnt,cljs.core.clone_and_set.call(null,this__11425.arr,(idx__11427 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__11425.collision_hash >>> shift) & 0x01f)),[null,inode__11426])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11430 = this;
var inode__11431 = this;
var idx__11432 = cljs.core.hash_collision_node_find_index.call(null,this__11430.arr,this__11430.cnt,key);
if((idx__11432 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__11430.arr[idx__11432])))
{return (this__11430.arr[(idx__11432 + 1)]);
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
var this__11433 = this;
var inode__11434 = this;
if((e === this__11433.edit))
{this__11433.arr = array;
this__11433.cnt = count;
return inode__11434;
} else
{return (new cljs.core.HashCollisionNode(this__11433.edit,this__11433.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__11439 = cljs.core.hash.call(null,key1);
if((key1hash__11439 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__11439,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___11440 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__11439,key1,val1,added_leaf_QMARK___11440).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___11440);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__11441 = cljs.core.hash.call(null,key1);
if((key1hash__11441 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__11441,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___11442 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__11441,key1,val1,added_leaf_QMARK___11442).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___11442);
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
var this__11443 = this;
var h__2192__auto____11444 = this__11443.__hash;
if(!((h__2192__auto____11444 == null)))
{return h__2192__auto____11444;
} else
{var h__2192__auto____11445 = cljs.core.hash_coll.call(null,coll);
this__11443.__hash = h__2192__auto____11445;
return h__2192__auto____11445;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11446 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__11447 = this;
var this__11448 = this;
return cljs.core.pr_str.call(null,this__11448);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11449 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11450 = this;
if((this__11450.s == null))
{return cljs.core.PersistentVector.fromArray([(this__11450.nodes[this__11450.i]),(this__11450.nodes[(this__11450.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__11450.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11451 = this;
if((this__11451.s == null))
{return cljs.core.create_inode_seq.call(null,this__11451.nodes,(this__11451.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__11451.nodes,this__11451.i,cljs.core.next.call(null,this__11451.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11452 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11453 = this;
return (new cljs.core.NodeSeq(meta,this__11453.nodes,this__11453.i,this__11453.s,this__11453.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11454 = this;
return this__11454.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11455 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11455.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__11462 = nodes.length;
var j__11463 = i;
while(true){
if((j__11463 < len__11462))
{if(!(((nodes[j__11463]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__11463,null,null));
} else
{var temp__3971__auto____11464 = (nodes[(j__11463 + 1)]);
if(cljs.core.truth_(temp__3971__auto____11464))
{var node__11465 = temp__3971__auto____11464;
var temp__3971__auto____11466 = node__11465.inode_seq();
if(cljs.core.truth_(temp__3971__auto____11466))
{var node_seq__11467 = temp__3971__auto____11466;
return (new cljs.core.NodeSeq(null,nodes,(j__11463 + 2),node_seq__11467,null));
} else
{{
var G__11468 = (j__11463 + 2);
j__11463 = G__11468;
continue;
}
}
} else
{{
var G__11469 = (j__11463 + 2);
j__11463 = G__11469;
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
var this__11470 = this;
var h__2192__auto____11471 = this__11470.__hash;
if(!((h__2192__auto____11471 == null)))
{return h__2192__auto____11471;
} else
{var h__2192__auto____11472 = cljs.core.hash_coll.call(null,coll);
this__11470.__hash = h__2192__auto____11472;
return h__2192__auto____11472;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11473 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__11474 = this;
var this__11475 = this;
return cljs.core.pr_str.call(null,this__11475);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11476 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11477 = this;
return cljs.core.first.call(null,this__11477.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11478 = this;
return cljs.core.create_array_node_seq.call(null,null,this__11478.nodes,this__11478.i,cljs.core.next.call(null,this__11478.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11479 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11480 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__11480.nodes,this__11480.i,this__11480.s,this__11480.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11481 = this;
return this__11481.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11482 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11482.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__11489 = nodes.length;
var j__11490 = i;
while(true){
if((j__11490 < len__11489))
{var temp__3971__auto____11491 = (nodes[j__11490]);
if(cljs.core.truth_(temp__3971__auto____11491))
{var nj__11492 = temp__3971__auto____11491;
var temp__3971__auto____11493 = nj__11492.inode_seq();
if(cljs.core.truth_(temp__3971__auto____11493))
{var ns__11494 = temp__3971__auto____11493;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__11490 + 1),ns__11494,null));
} else
{{
var G__11495 = (j__11490 + 1);
j__11490 = G__11495;
continue;
}
}
} else
{{
var G__11496 = (j__11490 + 1);
j__11490 = G__11496;
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
var this__11499 = this;
return (new cljs.core.TransientHashMap({},this__11499.root,this__11499.cnt,this__11499.has_nil_QMARK_,this__11499.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11500 = this;
var h__2192__auto____11501 = this__11500.__hash;
if(!((h__2192__auto____11501 == null)))
{return h__2192__auto____11501;
} else
{var h__2192__auto____11502 = cljs.core.hash_imap.call(null,coll);
this__11500.__hash = h__2192__auto____11502;
return h__2192__auto____11502;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11503 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11504 = this;
if((k == null))
{if(this__11504.has_nil_QMARK_)
{return this__11504.nil_val;
} else
{return not_found;
}
} else
{if((this__11504.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__11504.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11505 = this;
if((k == null))
{if((function (){var and__3822__auto____11506 = this__11505.has_nil_QMARK_;
if(and__3822__auto____11506)
{return (v === this__11505.nil_val);
} else
{return and__3822__auto____11506;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11505.meta,((this__11505.has_nil_QMARK_)?this__11505.cnt:(this__11505.cnt + 1)),this__11505.root,true,v,null));
}
} else
{var added_leaf_QMARK___11507 = (new cljs.core.Box(false));
var new_root__11508 = (((this__11505.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__11505.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___11507);
if((new_root__11508 === this__11505.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11505.meta,((added_leaf_QMARK___11507.val)?(this__11505.cnt + 1):this__11505.cnt),new_root__11508,this__11505.has_nil_QMARK_,this__11505.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11509 = this;
if((k == null))
{return this__11509.has_nil_QMARK_;
} else
{if((this__11509.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__11509.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__11532 = null;
var G__11532__2 = (function (this_sym11510,k){
var this__11512 = this;
var this_sym11510__11513 = this;
var coll__11514 = this_sym11510__11513;
return coll__11514.cljs$core$ILookup$_lookup$arity$2(coll__11514,k);
});
var G__11532__3 = (function (this_sym11511,k,not_found){
var this__11512 = this;
var this_sym11511__11515 = this;
var coll__11516 = this_sym11511__11515;
return coll__11516.cljs$core$ILookup$_lookup$arity$3(coll__11516,k,not_found);
});
G__11532 = function(this_sym11511,k,not_found){
switch(arguments.length){
case 2:
return G__11532__2.call(this,this_sym11511,k);
case 3:
return G__11532__3.call(this,this_sym11511,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11532;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym11497,args11498){
var this__11517 = this;
return this_sym11497.call.apply(this_sym11497,[this_sym11497].concat(args11498.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11518 = this;
var init__11519 = ((this__11518.has_nil_QMARK_)?f.call(null,init,null,this__11518.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__11519))
{return cljs.core.deref.call(null,init__11519);
} else
{if(!((this__11518.root == null)))
{return this__11518.root.kv_reduce(f,init__11519);
} else
{if("\uFDD0'else")
{return init__11519;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11520 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__11521 = this;
var this__11522 = this;
return cljs.core.pr_str.call(null,this__11522);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11523 = this;
if((this__11523.cnt > 0))
{var s__11524 = ((!((this__11523.root == null)))?this__11523.root.inode_seq():null);
if(this__11523.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__11523.nil_val], true),s__11524);
} else
{return s__11524;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11525 = this;
return this__11525.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11526 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11527 = this;
return (new cljs.core.PersistentHashMap(meta,this__11527.cnt,this__11527.root,this__11527.has_nil_QMARK_,this__11527.nil_val,this__11527.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11528 = this;
return this__11528.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11529 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__11529.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11530 = this;
if((k == null))
{if(this__11530.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__11530.meta,(this__11530.cnt - 1),this__11530.root,false,null,null));
} else
{return coll;
}
} else
{if((this__11530.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__11531 = this__11530.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__11531 === this__11530.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11530.meta,(this__11530.cnt - 1),new_root__11531,this__11530.has_nil_QMARK_,this__11530.nil_val,null));
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
var len__11533 = ks.length;
var i__11534 = 0;
var out__11535 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__11534 < len__11533))
{{
var G__11536 = (i__11534 + 1);
var G__11537 = cljs.core.assoc_BANG_.call(null,out__11535,(ks[i__11534]),(vs[i__11534]));
i__11534 = G__11536;
out__11535 = G__11537;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11535);
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
var this__11538 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__11539 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__11540 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11541 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__11542 = this;
if((k == null))
{if(this__11542.has_nil_QMARK_)
{return this__11542.nil_val;
} else
{return null;
}
} else
{if((this__11542.root == null))
{return null;
} else
{return this__11542.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__11543 = this;
if((k == null))
{if(this__11543.has_nil_QMARK_)
{return this__11543.nil_val;
} else
{return not_found;
}
} else
{if((this__11543.root == null))
{return not_found;
} else
{return this__11543.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11544 = this;
if(this__11544.edit)
{return this__11544.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__11545 = this;
var tcoll__11546 = this;
if(this__11545.edit)
{if((function (){var G__11547__11548 = o;
if(G__11547__11548)
{if((function (){var or__3824__auto____11549 = (G__11547__11548.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____11549)
{return or__3824__auto____11549;
} else
{return G__11547__11548.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__11547__11548.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11547__11548);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11547__11548);
}
})())
{return tcoll__11546.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__11550 = cljs.core.seq.call(null,o);
var tcoll__11551 = tcoll__11546;
while(true){
var temp__3971__auto____11552 = cljs.core.first.call(null,es__11550);
if(cljs.core.truth_(temp__3971__auto____11552))
{var e__11553 = temp__3971__auto____11552;
{
var G__11564 = cljs.core.next.call(null,es__11550);
var G__11565 = tcoll__11551.assoc_BANG_(cljs.core.key.call(null,e__11553),cljs.core.val.call(null,e__11553));
es__11550 = G__11564;
tcoll__11551 = G__11565;
continue;
}
} else
{return tcoll__11551;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__11554 = this;
var tcoll__11555 = this;
if(this__11554.edit)
{if((k == null))
{if((this__11554.nil_val === v))
{} else
{this__11554.nil_val = v;
}
if(this__11554.has_nil_QMARK_)
{} else
{this__11554.count = (this__11554.count + 1);
this__11554.has_nil_QMARK_ = true;
}
return tcoll__11555;
} else
{var added_leaf_QMARK___11556 = (new cljs.core.Box(false));
var node__11557 = (((this__11554.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__11554.root).inode_assoc_BANG_(this__11554.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___11556);
if((node__11557 === this__11554.root))
{} else
{this__11554.root = node__11557;
}
if(added_leaf_QMARK___11556.val)
{this__11554.count = (this__11554.count + 1);
} else
{}
return tcoll__11555;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__11558 = this;
var tcoll__11559 = this;
if(this__11558.edit)
{if((k == null))
{if(this__11558.has_nil_QMARK_)
{this__11558.has_nil_QMARK_ = false;
this__11558.nil_val = null;
this__11558.count = (this__11558.count - 1);
return tcoll__11559;
} else
{return tcoll__11559;
}
} else
{if((this__11558.root == null))
{return tcoll__11559;
} else
{var removed_leaf_QMARK___11560 = (new cljs.core.Box(false));
var node__11561 = this__11558.root.inode_without_BANG_(this__11558.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___11560);
if((node__11561 === this__11558.root))
{} else
{this__11558.root = node__11561;
}
if(cljs.core.truth_((removed_leaf_QMARK___11560[0])))
{this__11558.count = (this__11558.count - 1);
} else
{}
return tcoll__11559;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__11562 = this;
var tcoll__11563 = this;
if(this__11562.edit)
{this__11562.edit = null;
return (new cljs.core.PersistentHashMap(null,this__11562.count,this__11562.root,this__11562.has_nil_QMARK_,this__11562.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__11568 = node;
var stack__11569 = stack;
while(true){
if(!((t__11568 == null)))
{{
var G__11570 = ((ascending_QMARK_)?t__11568.left:t__11568.right);
var G__11571 = cljs.core.conj.call(null,stack__11569,t__11568);
t__11568 = G__11570;
stack__11569 = G__11571;
continue;
}
} else
{return stack__11569;
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
var this__11572 = this;
var h__2192__auto____11573 = this__11572.__hash;
if(!((h__2192__auto____11573 == null)))
{return h__2192__auto____11573;
} else
{var h__2192__auto____11574 = cljs.core.hash_coll.call(null,coll);
this__11572.__hash = h__2192__auto____11574;
return h__2192__auto____11574;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11575 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__11576 = this;
var this__11577 = this;
return cljs.core.pr_str.call(null,this__11577);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11578 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11579 = this;
if((this__11579.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__11579.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__11580 = this;
return cljs.core.peek.call(null,this__11580.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__11581 = this;
var t__11582 = cljs.core.first.call(null,this__11581.stack);
var next_stack__11583 = cljs.core.tree_map_seq_push.call(null,((this__11581.ascending_QMARK_)?t__11582.right:t__11582.left),cljs.core.next.call(null,this__11581.stack),this__11581.ascending_QMARK_);
if(!((next_stack__11583 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__11583,this__11581.ascending_QMARK_,(this__11581.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11584 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11585 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__11585.stack,this__11585.ascending_QMARK_,this__11585.cnt,this__11585.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11586 = this;
return this__11586.meta;
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
{if((function (){var and__3822__auto____11588 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____11588)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____11588;
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
{if((function (){var and__3822__auto____11590 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____11590)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____11590;
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
var init__11594 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__11594))
{return cljs.core.deref.call(null,init__11594);
} else
{var init__11595 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__11594):init__11594);
if(cljs.core.reduced_QMARK_.call(null,init__11595))
{return cljs.core.deref.call(null,init__11595);
} else
{var init__11596 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__11595):init__11595);
if(cljs.core.reduced_QMARK_.call(null,init__11596))
{return cljs.core.deref.call(null,init__11596);
} else
{return init__11596;
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
var this__11599 = this;
var h__2192__auto____11600 = this__11599.__hash;
if(!((h__2192__auto____11600 == null)))
{return h__2192__auto____11600;
} else
{var h__2192__auto____11601 = cljs.core.hash_coll.call(null,coll);
this__11599.__hash = h__2192__auto____11601;
return h__2192__auto____11601;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__11602 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__11603 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__11604 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__11604.key,this__11604.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__11652 = null;
var G__11652__2 = (function (this_sym11605,k){
var this__11607 = this;
var this_sym11605__11608 = this;
var node__11609 = this_sym11605__11608;
return node__11609.cljs$core$ILookup$_lookup$arity$2(node__11609,k);
});
var G__11652__3 = (function (this_sym11606,k,not_found){
var this__11607 = this;
var this_sym11606__11610 = this;
var node__11611 = this_sym11606__11610;
return node__11611.cljs$core$ILookup$_lookup$arity$3(node__11611,k,not_found);
});
G__11652 = function(this_sym11606,k,not_found){
switch(arguments.length){
case 2:
return G__11652__2.call(this,this_sym11606,k);
case 3:
return G__11652__3.call(this,this_sym11606,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11652;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym11597,args11598){
var this__11612 = this;
return this_sym11597.call.apply(this_sym11597,[this_sym11597].concat(args11598.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__11613 = this;
return cljs.core.PersistentVector.fromArray([this__11613.key,this__11613.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__11614 = this;
return this__11614.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__11615 = this;
return this__11615.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__11616 = this;
var node__11617 = this;
return ins.balance_right(node__11617);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__11618 = this;
var node__11619 = this;
return (new cljs.core.RedNode(this__11618.key,this__11618.val,this__11618.left,this__11618.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__11620 = this;
var node__11621 = this;
return cljs.core.balance_right_del.call(null,this__11620.key,this__11620.val,this__11620.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__11622 = this;
var node__11623 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__11624 = this;
var node__11625 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__11625,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__11626 = this;
var node__11627 = this;
return cljs.core.balance_left_del.call(null,this__11626.key,this__11626.val,del,this__11626.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__11628 = this;
var node__11629 = this;
return ins.balance_left(node__11629);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__11630 = this;
var node__11631 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__11631,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__11653 = null;
var G__11653__0 = (function (){
var this__11632 = this;
var this__11634 = this;
return cljs.core.pr_str.call(null,this__11634);
});
G__11653 = function(){
switch(arguments.length){
case 0:
return G__11653__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11653;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__11635 = this;
var node__11636 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__11636,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__11637 = this;
var node__11638 = this;
return node__11638;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__11639 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__11640 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__11641 = this;
return cljs.core.list.call(null,this__11641.key,this__11641.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__11642 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__11643 = this;
return this__11643.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__11644 = this;
return cljs.core.PersistentVector.fromArray([this__11644.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__11645 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__11645.key,this__11645.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11646 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__11647 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__11647.key,this__11647.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__11648 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__11649 = this;
if((n === 0))
{return this__11649.key;
} else
{if((n === 1))
{return this__11649.val;
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
var this__11650 = this;
if((n === 0))
{return this__11650.key;
} else
{if((n === 1))
{return this__11650.val;
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
var this__11651 = this;
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
var this__11656 = this;
var h__2192__auto____11657 = this__11656.__hash;
if(!((h__2192__auto____11657 == null)))
{return h__2192__auto____11657;
} else
{var h__2192__auto____11658 = cljs.core.hash_coll.call(null,coll);
this__11656.__hash = h__2192__auto____11658;
return h__2192__auto____11658;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__11659 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__11660 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__11661 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__11661.key,this__11661.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__11709 = null;
var G__11709__2 = (function (this_sym11662,k){
var this__11664 = this;
var this_sym11662__11665 = this;
var node__11666 = this_sym11662__11665;
return node__11666.cljs$core$ILookup$_lookup$arity$2(node__11666,k);
});
var G__11709__3 = (function (this_sym11663,k,not_found){
var this__11664 = this;
var this_sym11663__11667 = this;
var node__11668 = this_sym11663__11667;
return node__11668.cljs$core$ILookup$_lookup$arity$3(node__11668,k,not_found);
});
G__11709 = function(this_sym11663,k,not_found){
switch(arguments.length){
case 2:
return G__11709__2.call(this,this_sym11663,k);
case 3:
return G__11709__3.call(this,this_sym11663,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11709;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym11654,args11655){
var this__11669 = this;
return this_sym11654.call.apply(this_sym11654,[this_sym11654].concat(args11655.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__11670 = this;
return cljs.core.PersistentVector.fromArray([this__11670.key,this__11670.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__11671 = this;
return this__11671.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__11672 = this;
return this__11672.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__11673 = this;
var node__11674 = this;
return (new cljs.core.RedNode(this__11673.key,this__11673.val,this__11673.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__11675 = this;
var node__11676 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__11677 = this;
var node__11678 = this;
return (new cljs.core.RedNode(this__11677.key,this__11677.val,this__11677.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__11679 = this;
var node__11680 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__11681 = this;
var node__11682 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__11682,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__11683 = this;
var node__11684 = this;
return (new cljs.core.RedNode(this__11683.key,this__11683.val,del,this__11683.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__11685 = this;
var node__11686 = this;
return (new cljs.core.RedNode(this__11685.key,this__11685.val,ins,this__11685.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__11687 = this;
var node__11688 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11687.left))
{return (new cljs.core.RedNode(this__11687.key,this__11687.val,this__11687.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__11687.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11687.right))
{return (new cljs.core.RedNode(this__11687.right.key,this__11687.right.val,(new cljs.core.BlackNode(this__11687.key,this__11687.val,this__11687.left,this__11687.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__11687.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__11688,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__11710 = null;
var G__11710__0 = (function (){
var this__11689 = this;
var this__11691 = this;
return cljs.core.pr_str.call(null,this__11691);
});
G__11710 = function(){
switch(arguments.length){
case 0:
return G__11710__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11710;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__11692 = this;
var node__11693 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11692.right))
{return (new cljs.core.RedNode(this__11692.key,this__11692.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__11692.left,null)),this__11692.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11692.left))
{return (new cljs.core.RedNode(this__11692.left.key,this__11692.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__11692.left.left,null)),(new cljs.core.BlackNode(this__11692.key,this__11692.val,this__11692.left.right,this__11692.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__11693,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__11694 = this;
var node__11695 = this;
return (new cljs.core.BlackNode(this__11694.key,this__11694.val,this__11694.left,this__11694.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__11696 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__11697 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__11698 = this;
return cljs.core.list.call(null,this__11698.key,this__11698.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__11699 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__11700 = this;
return this__11700.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__11701 = this;
return cljs.core.PersistentVector.fromArray([this__11701.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__11702 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__11702.key,this__11702.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11703 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__11704 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__11704.key,this__11704.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__11705 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__11706 = this;
if((n === 0))
{return this__11706.key;
} else
{if((n === 1))
{return this__11706.val;
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
var this__11707 = this;
if((n === 0))
{return this__11707.key;
} else
{if((n === 1))
{return this__11707.val;
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
var this__11708 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__11714 = comp.call(null,k,tree.key);
if((c__11714 === 0))
{(found[0] = tree);
return null;
} else
{if((c__11714 < 0))
{var ins__11715 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__11715 == null)))
{return tree.add_left(ins__11715);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__11716 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__11716 == null)))
{return tree.add_right(ins__11716);
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
{var app__11719 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__11719))
{return (new cljs.core.RedNode(app__11719.key,app__11719.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__11719.left,null)),(new cljs.core.RedNode(right.key,right.val,app__11719.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__11719,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__11720 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__11720))
{return (new cljs.core.RedNode(app__11720.key,app__11720.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__11720.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__11720.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__11720,right.right,null)));
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
{var c__11726 = comp.call(null,k,tree.key);
if((c__11726 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__11726 < 0))
{var del__11727 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____11728 = !((del__11727 == null));
if(or__3824__auto____11728)
{return or__3824__auto____11728;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__11727,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__11727,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__11729 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____11730 = !((del__11729 == null));
if(or__3824__auto____11730)
{return or__3824__auto____11730;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__11729);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__11729,null));
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
var tk__11733 = tree.key;
var c__11734 = comp.call(null,k,tk__11733);
if((c__11734 === 0))
{return tree.replace(tk__11733,v,tree.left,tree.right);
} else
{if((c__11734 < 0))
{return tree.replace(tk__11733,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__11733,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__11737 = this;
var h__2192__auto____11738 = this__11737.__hash;
if(!((h__2192__auto____11738 == null)))
{return h__2192__auto____11738;
} else
{var h__2192__auto____11739 = cljs.core.hash_imap.call(null,coll);
this__11737.__hash = h__2192__auto____11739;
return h__2192__auto____11739;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11740 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11741 = this;
var n__11742 = coll.entry_at(k);
if(!((n__11742 == null)))
{return n__11742.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11743 = this;
var found__11744 = [null];
var t__11745 = cljs.core.tree_map_add.call(null,this__11743.comp,this__11743.tree,k,v,found__11744);
if((t__11745 == null))
{var found_node__11746 = cljs.core.nth.call(null,found__11744,0);
if(cljs.core._EQ_.call(null,v,found_node__11746.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11743.comp,cljs.core.tree_map_replace.call(null,this__11743.comp,this__11743.tree,k,v),this__11743.cnt,this__11743.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11743.comp,t__11745.blacken(),(this__11743.cnt + 1),this__11743.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11747 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__11781 = null;
var G__11781__2 = (function (this_sym11748,k){
var this__11750 = this;
var this_sym11748__11751 = this;
var coll__11752 = this_sym11748__11751;
return coll__11752.cljs$core$ILookup$_lookup$arity$2(coll__11752,k);
});
var G__11781__3 = (function (this_sym11749,k,not_found){
var this__11750 = this;
var this_sym11749__11753 = this;
var coll__11754 = this_sym11749__11753;
return coll__11754.cljs$core$ILookup$_lookup$arity$3(coll__11754,k,not_found);
});
G__11781 = function(this_sym11749,k,not_found){
switch(arguments.length){
case 2:
return G__11781__2.call(this,this_sym11749,k);
case 3:
return G__11781__3.call(this,this_sym11749,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11781;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym11735,args11736){
var this__11755 = this;
return this_sym11735.call.apply(this_sym11735,[this_sym11735].concat(args11736.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11756 = this;
if(!((this__11756.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__11756.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11757 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11758 = this;
if((this__11758.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11758.tree,false,this__11758.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__11759 = this;
var this__11760 = this;
return cljs.core.pr_str.call(null,this__11760);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__11761 = this;
var coll__11762 = this;
var t__11763 = this__11761.tree;
while(true){
if(!((t__11763 == null)))
{var c__11764 = this__11761.comp.call(null,k,t__11763.key);
if((c__11764 === 0))
{return t__11763;
} else
{if((c__11764 < 0))
{{
var G__11782 = t__11763.left;
t__11763 = G__11782;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__11783 = t__11763.right;
t__11763 = G__11783;
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
var this__11765 = this;
if((this__11765.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11765.tree,ascending_QMARK_,this__11765.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11766 = this;
if((this__11766.cnt > 0))
{var stack__11767 = null;
var t__11768 = this__11766.tree;
while(true){
if(!((t__11768 == null)))
{var c__11769 = this__11766.comp.call(null,k,t__11768.key);
if((c__11769 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__11767,t__11768),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__11769 < 0))
{{
var G__11784 = cljs.core.conj.call(null,stack__11767,t__11768);
var G__11785 = t__11768.left;
stack__11767 = G__11784;
t__11768 = G__11785;
continue;
}
} else
{{
var G__11786 = stack__11767;
var G__11787 = t__11768.right;
stack__11767 = G__11786;
t__11768 = G__11787;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__11769 > 0))
{{
var G__11788 = cljs.core.conj.call(null,stack__11767,t__11768);
var G__11789 = t__11768.right;
stack__11767 = G__11788;
t__11768 = G__11789;
continue;
}
} else
{{
var G__11790 = stack__11767;
var G__11791 = t__11768.left;
stack__11767 = G__11790;
t__11768 = G__11791;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__11767 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__11767,ascending_QMARK_,-1,null));
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
var this__11770 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11771 = this;
return this__11771.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11772 = this;
if((this__11772.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11772.tree,true,this__11772.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11773 = this;
return this__11773.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11774 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11775 = this;
return (new cljs.core.PersistentTreeMap(this__11775.comp,this__11775.tree,this__11775.cnt,meta,this__11775.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11776 = this;
return this__11776.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11777 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__11777.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11778 = this;
var found__11779 = [null];
var t__11780 = cljs.core.tree_map_remove.call(null,this__11778.comp,this__11778.tree,k,found__11779);
if((t__11780 == null))
{if((cljs.core.nth.call(null,found__11779,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11778.comp,null,0,this__11778.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11778.comp,t__11780.blacken(),(this__11778.cnt - 1),this__11778.meta,null));
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
var in__11794 = cljs.core.seq.call(null,keyvals);
var out__11795 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__11794)
{{
var G__11796 = cljs.core.nnext.call(null,in__11794);
var G__11797 = cljs.core.assoc_BANG_.call(null,out__11795,cljs.core.first.call(null,in__11794),cljs.core.second.call(null,in__11794));
in__11794 = G__11796;
out__11795 = G__11797;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11795);
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
hash_map.cljs$lang$applyTo = (function (arglist__11798){
var keyvals = cljs.core.seq(arglist__11798);;
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
array_map.cljs$lang$applyTo = (function (arglist__11799){
var keyvals = cljs.core.seq(arglist__11799);;
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
var ks__11803 = [];
var obj__11804 = {};
var kvs__11805 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__11805)
{ks__11803.push(cljs.core.first.call(null,kvs__11805));
(obj__11804[cljs.core.first.call(null,kvs__11805)] = cljs.core.second.call(null,kvs__11805));
{
var G__11806 = cljs.core.nnext.call(null,kvs__11805);
kvs__11805 = G__11806;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__11803,obj__11804);
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
obj_map.cljs$lang$applyTo = (function (arglist__11807){
var keyvals = cljs.core.seq(arglist__11807);;
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
var in__11810 = cljs.core.seq.call(null,keyvals);
var out__11811 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__11810)
{{
var G__11812 = cljs.core.nnext.call(null,in__11810);
var G__11813 = cljs.core.assoc.call(null,out__11811,cljs.core.first.call(null,in__11810),cljs.core.second.call(null,in__11810));
in__11810 = G__11812;
out__11811 = G__11813;
continue;
}
} else
{return out__11811;
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
sorted_map.cljs$lang$applyTo = (function (arglist__11814){
var keyvals = cljs.core.seq(arglist__11814);;
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
var in__11817 = cljs.core.seq.call(null,keyvals);
var out__11818 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__11817)
{{
var G__11819 = cljs.core.nnext.call(null,in__11817);
var G__11820 = cljs.core.assoc.call(null,out__11818,cljs.core.first.call(null,in__11817),cljs.core.second.call(null,in__11817));
in__11817 = G__11819;
out__11818 = G__11820;
continue;
}
} else
{return out__11818;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__11821){
var comparator = cljs.core.first(arglist__11821);
var keyvals = cljs.core.rest(arglist__11821);
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
{return cljs.core.reduce.call(null,(function (p1__11822_SHARP_,p2__11823_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____11825 = p1__11822_SHARP_;
if(cljs.core.truth_(or__3824__auto____11825))
{return or__3824__auto____11825;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__11823_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__11826){
var maps = cljs.core.seq(arglist__11826);;
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
{var merge_entry__11834 = (function (m,e){
var k__11832 = cljs.core.first.call(null,e);
var v__11833 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__11832))
{return cljs.core.assoc.call(null,m,k__11832,f.call(null,cljs.core._lookup.call(null,m,k__11832,null),v__11833));
} else
{return cljs.core.assoc.call(null,m,k__11832,v__11833);
}
});
var merge2__11836 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__11834,(function (){var or__3824__auto____11835 = m1;
if(cljs.core.truth_(or__3824__auto____11835))
{return or__3824__auto____11835;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__11836,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__11837){
var f = cljs.core.first(arglist__11837);
var maps = cljs.core.rest(arglist__11837);
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
var ret__11842 = cljs.core.ObjMap.EMPTY;
var keys__11843 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__11843)
{var key__11844 = cljs.core.first.call(null,keys__11843);
var entry__11845 = cljs.core._lookup.call(null,map,key__11844,"\uFDD0'cljs.core/not-found");
{
var G__11846 = ((cljs.core.not_EQ_.call(null,entry__11845,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__11842,key__11844,entry__11845):ret__11842);
var G__11847 = cljs.core.next.call(null,keys__11843);
ret__11842 = G__11846;
keys__11843 = G__11847;
continue;
}
} else
{return ret__11842;
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
var this__11851 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__11851.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11852 = this;
var h__2192__auto____11853 = this__11852.__hash;
if(!((h__2192__auto____11853 == null)))
{return h__2192__auto____11853;
} else
{var h__2192__auto____11854 = cljs.core.hash_iset.call(null,coll);
this__11852.__hash = h__2192__auto____11854;
return h__2192__auto____11854;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11855 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11856 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11856.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__11877 = null;
var G__11877__2 = (function (this_sym11857,k){
var this__11859 = this;
var this_sym11857__11860 = this;
var coll__11861 = this_sym11857__11860;
return coll__11861.cljs$core$ILookup$_lookup$arity$2(coll__11861,k);
});
var G__11877__3 = (function (this_sym11858,k,not_found){
var this__11859 = this;
var this_sym11858__11862 = this;
var coll__11863 = this_sym11858__11862;
return coll__11863.cljs$core$ILookup$_lookup$arity$3(coll__11863,k,not_found);
});
G__11877 = function(this_sym11858,k,not_found){
switch(arguments.length){
case 2:
return G__11877__2.call(this,this_sym11858,k);
case 3:
return G__11877__3.call(this,this_sym11858,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11877;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym11849,args11850){
var this__11864 = this;
return this_sym11849.call.apply(this_sym11849,[this_sym11849].concat(args11850.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11865 = this;
return (new cljs.core.PersistentHashSet(this__11865.meta,cljs.core.assoc.call(null,this__11865.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__11866 = this;
var this__11867 = this;
return cljs.core.pr_str.call(null,this__11867);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11868 = this;
return cljs.core.keys.call(null,this__11868.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11869 = this;
return (new cljs.core.PersistentHashSet(this__11869.meta,cljs.core.dissoc.call(null,this__11869.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11870 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11871 = this;
var and__3822__auto____11872 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____11872)
{var and__3822__auto____11873 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____11873)
{return cljs.core.every_QMARK_.call(null,(function (p1__11848_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11848_SHARP_);
}),other);
} else
{return and__3822__auto____11873;
}
} else
{return and__3822__auto____11872;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11874 = this;
return (new cljs.core.PersistentHashSet(meta,this__11874.hash_map,this__11874.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11875 = this;
return this__11875.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11876 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__11876.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__11878 = cljs.core.count.call(null,items);
var i__11879 = 0;
var out__11880 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__11879 < len__11878))
{{
var G__11881 = (i__11879 + 1);
var G__11882 = cljs.core.conj_BANG_.call(null,out__11880,(items[i__11879]));
i__11879 = G__11881;
out__11880 = G__11882;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11880);
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
var G__11900 = null;
var G__11900__2 = (function (this_sym11886,k){
var this__11888 = this;
var this_sym11886__11889 = this;
var tcoll__11890 = this_sym11886__11889;
if((cljs.core._lookup.call(null,this__11888.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__11900__3 = (function (this_sym11887,k,not_found){
var this__11888 = this;
var this_sym11887__11891 = this;
var tcoll__11892 = this_sym11887__11891;
if((cljs.core._lookup.call(null,this__11888.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__11900 = function(this_sym11887,k,not_found){
switch(arguments.length){
case 2:
return G__11900__2.call(this,this_sym11887,k);
case 3:
return G__11900__3.call(this,this_sym11887,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11900;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym11884,args11885){
var this__11893 = this;
return this_sym11884.call.apply(this_sym11884,[this_sym11884].concat(args11885.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__11894 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__11895 = this;
if((cljs.core._lookup.call(null,this__11895.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__11896 = this;
return cljs.core.count.call(null,this__11896.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__11897 = this;
this__11897.transient_map = cljs.core.dissoc_BANG_.call(null,this__11897.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11898 = this;
this__11898.transient_map = cljs.core.assoc_BANG_.call(null,this__11898.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11899 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__11899.transient_map),null));
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
var this__11903 = this;
var h__2192__auto____11904 = this__11903.__hash;
if(!((h__2192__auto____11904 == null)))
{return h__2192__auto____11904;
} else
{var h__2192__auto____11905 = cljs.core.hash_iset.call(null,coll);
this__11903.__hash = h__2192__auto____11905;
return h__2192__auto____11905;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11906 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11907 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11907.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__11933 = null;
var G__11933__2 = (function (this_sym11908,k){
var this__11910 = this;
var this_sym11908__11911 = this;
var coll__11912 = this_sym11908__11911;
return coll__11912.cljs$core$ILookup$_lookup$arity$2(coll__11912,k);
});
var G__11933__3 = (function (this_sym11909,k,not_found){
var this__11910 = this;
var this_sym11909__11913 = this;
var coll__11914 = this_sym11909__11913;
return coll__11914.cljs$core$ILookup$_lookup$arity$3(coll__11914,k,not_found);
});
G__11933 = function(this_sym11909,k,not_found){
switch(arguments.length){
case 2:
return G__11933__2.call(this,this_sym11909,k);
case 3:
return G__11933__3.call(this,this_sym11909,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11933;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym11901,args11902){
var this__11915 = this;
return this_sym11901.call.apply(this_sym11901,[this_sym11901].concat(args11902.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11916 = this;
return (new cljs.core.PersistentTreeSet(this__11916.meta,cljs.core.assoc.call(null,this__11916.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11917 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__11917.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__11918 = this;
var this__11919 = this;
return cljs.core.pr_str.call(null,this__11919);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__11920 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__11920.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11921 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__11921.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__11922 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11923 = this;
return cljs.core._comparator.call(null,this__11923.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11924 = this;
return cljs.core.keys.call(null,this__11924.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11925 = this;
return (new cljs.core.PersistentTreeSet(this__11925.meta,cljs.core.dissoc.call(null,this__11925.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11926 = this;
return cljs.core.count.call(null,this__11926.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11927 = this;
var and__3822__auto____11928 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____11928)
{var and__3822__auto____11929 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____11929)
{return cljs.core.every_QMARK_.call(null,(function (p1__11883_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11883_SHARP_);
}),other);
} else
{return and__3822__auto____11929;
}
} else
{return and__3822__auto____11928;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11930 = this;
return (new cljs.core.PersistentTreeSet(meta,this__11930.tree_map,this__11930.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11931 = this;
return this__11931.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11932 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__11932.meta);
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
var G__11938__delegate = function (keys){
var in__11936 = cljs.core.seq.call(null,keys);
var out__11937 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__11936))
{{
var G__11939 = cljs.core.next.call(null,in__11936);
var G__11940 = cljs.core.conj_BANG_.call(null,out__11937,cljs.core.first.call(null,in__11936));
in__11936 = G__11939;
out__11937 = G__11940;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11937);
}
break;
}
};
var G__11938 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11938__delegate.call(this, keys);
};
G__11938.cljs$lang$maxFixedArity = 0;
G__11938.cljs$lang$applyTo = (function (arglist__11941){
var keys = cljs.core.seq(arglist__11941);;
return G__11938__delegate(keys);
});
G__11938.cljs$lang$arity$variadic = G__11938__delegate;
return G__11938;
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
sorted_set.cljs$lang$applyTo = (function (arglist__11942){
var keys = cljs.core.seq(arglist__11942);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__11944){
var comparator = cljs.core.first(arglist__11944);
var keys = cljs.core.rest(arglist__11944);
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
{var n__11950 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____11951 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____11951))
{var e__11952 = temp__3971__auto____11951;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__11952));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__11950,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__11943_SHARP_){
var temp__3971__auto____11953 = cljs.core.find.call(null,smap,p1__11943_SHARP_);
if(cljs.core.truth_(temp__3971__auto____11953))
{var e__11954 = temp__3971__auto____11953;
return cljs.core.second.call(null,e__11954);
} else
{return p1__11943_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__11984 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__11977,seen){
while(true){
var vec__11978__11979 = p__11977;
var f__11980 = cljs.core.nth.call(null,vec__11978__11979,0,null);
var xs__11981 = vec__11978__11979;
var temp__3974__auto____11982 = cljs.core.seq.call(null,xs__11981);
if(temp__3974__auto____11982)
{var s__11983 = temp__3974__auto____11982;
if(cljs.core.contains_QMARK_.call(null,seen,f__11980))
{{
var G__11985 = cljs.core.rest.call(null,s__11983);
var G__11986 = seen;
p__11977 = G__11985;
seen = G__11986;
continue;
}
} else
{return cljs.core.cons.call(null,f__11980,step.call(null,cljs.core.rest.call(null,s__11983),cljs.core.conj.call(null,seen,f__11980)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__11984.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__11989 = cljs.core.PersistentVector.EMPTY;
var s__11990 = s;
while(true){
if(cljs.core.next.call(null,s__11990))
{{
var G__11991 = cljs.core.conj.call(null,ret__11989,cljs.core.first.call(null,s__11990));
var G__11992 = cljs.core.next.call(null,s__11990);
ret__11989 = G__11991;
s__11990 = G__11992;
continue;
}
} else
{return cljs.core.seq.call(null,ret__11989);
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
{if((function (){var or__3824__auto____11995 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____11995)
{return or__3824__auto____11995;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__11996 = x.lastIndexOf("/");
if((i__11996 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__11996 + 1));
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
if((function (){var or__3824__auto____11999 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____11999)
{return or__3824__auto____11999;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__12000 = x.lastIndexOf("/");
if((i__12000 > -1))
{return cljs.core.subs.call(null,x,2,i__12000);
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
var map__12007 = cljs.core.ObjMap.EMPTY;
var ks__12008 = cljs.core.seq.call(null,keys);
var vs__12009 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____12010 = ks__12008;
if(and__3822__auto____12010)
{return vs__12009;
} else
{return and__3822__auto____12010;
}
})())
{{
var G__12011 = cljs.core.assoc.call(null,map__12007,cljs.core.first.call(null,ks__12008),cljs.core.first.call(null,vs__12009));
var G__12012 = cljs.core.next.call(null,ks__12008);
var G__12013 = cljs.core.next.call(null,vs__12009);
map__12007 = G__12011;
ks__12008 = G__12012;
vs__12009 = G__12013;
continue;
}
} else
{return map__12007;
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
var G__12016__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12001_SHARP_,p2__12002_SHARP_){
return max_key.call(null,k,p1__12001_SHARP_,p2__12002_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__12016 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12016__delegate.call(this, k, x, y, more);
};
G__12016.cljs$lang$maxFixedArity = 3;
G__12016.cljs$lang$applyTo = (function (arglist__12017){
var k = cljs.core.first(arglist__12017);
var x = cljs.core.first(cljs.core.next(arglist__12017));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12017)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12017)));
return G__12016__delegate(k, x, y, more);
});
G__12016.cljs$lang$arity$variadic = G__12016__delegate;
return G__12016;
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
var G__12018__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12014_SHARP_,p2__12015_SHARP_){
return min_key.call(null,k,p1__12014_SHARP_,p2__12015_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__12018 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12018__delegate.call(this, k, x, y, more);
};
G__12018.cljs$lang$maxFixedArity = 3;
G__12018.cljs$lang$applyTo = (function (arglist__12019){
var k = cljs.core.first(arglist__12019);
var x = cljs.core.first(cljs.core.next(arglist__12019));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12019)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12019)));
return G__12018__delegate(k, x, y, more);
});
G__12018.cljs$lang$arity$variadic = G__12018__delegate;
return G__12018;
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
var temp__3974__auto____12022 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12022)
{var s__12023 = temp__3974__auto____12022;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__12023),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__12023)));
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
var temp__3974__auto____12026 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12026)
{var s__12027 = temp__3974__auto____12026;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__12027))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__12027),take_while.call(null,pred,cljs.core.rest.call(null,s__12027)));
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
var comp__12029 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__12029.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__12041 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____12042 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____12042))
{var vec__12043__12044 = temp__3974__auto____12042;
var e__12045 = cljs.core.nth.call(null,vec__12043__12044,0,null);
var s__12046 = vec__12043__12044;
if(cljs.core.truth_(include__12041.call(null,e__12045)))
{return s__12046;
} else
{return cljs.core.next.call(null,s__12046);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__12041,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____12047 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____12047))
{var vec__12048__12049 = temp__3974__auto____12047;
var e__12050 = cljs.core.nth.call(null,vec__12048__12049,0,null);
var s__12051 = vec__12048__12049;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__12050))?s__12051:cljs.core.next.call(null,s__12051)));
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
var include__12063 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____12064 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____12064))
{var vec__12065__12066 = temp__3974__auto____12064;
var e__12067 = cljs.core.nth.call(null,vec__12065__12066,0,null);
var s__12068 = vec__12065__12066;
if(cljs.core.truth_(include__12063.call(null,e__12067)))
{return s__12068;
} else
{return cljs.core.next.call(null,s__12068);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__12063,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____12069 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____12069))
{var vec__12070__12071 = temp__3974__auto____12069;
var e__12072 = cljs.core.nth.call(null,vec__12070__12071,0,null);
var s__12073 = vec__12070__12071;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__12072))?s__12073:cljs.core.next.call(null,s__12073)));
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
var this__12074 = this;
var h__2192__auto____12075 = this__12074.__hash;
if(!((h__2192__auto____12075 == null)))
{return h__2192__auto____12075;
} else
{var h__2192__auto____12076 = cljs.core.hash_coll.call(null,rng);
this__12074.__hash = h__2192__auto____12076;
return h__2192__auto____12076;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__12077 = this;
if((this__12077.step > 0))
{if(((this__12077.start + this__12077.step) < this__12077.end))
{return (new cljs.core.Range(this__12077.meta,(this__12077.start + this__12077.step),this__12077.end,this__12077.step,null));
} else
{return null;
}
} else
{if(((this__12077.start + this__12077.step) > this__12077.end))
{return (new cljs.core.Range(this__12077.meta,(this__12077.start + this__12077.step),this__12077.end,this__12077.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__12078 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__12079 = this;
var this__12080 = this;
return cljs.core.pr_str.call(null,this__12080);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__12081 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__12082 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__12083 = this;
if((this__12083.step > 0))
{if((this__12083.start < this__12083.end))
{return rng;
} else
{return null;
}
} else
{if((this__12083.start > this__12083.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__12084 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__12084.end - this__12084.start) / this__12084.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__12085 = this;
return this__12085.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__12086 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__12086.meta,(this__12086.start + this__12086.step),this__12086.end,this__12086.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__12087 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__12088 = this;
return (new cljs.core.Range(meta,this__12088.start,this__12088.end,this__12088.step,this__12088.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__12089 = this;
return this__12089.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__12090 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__12090.start + (n * this__12090.step));
} else
{if((function (){var and__3822__auto____12091 = (this__12090.start > this__12090.end);
if(and__3822__auto____12091)
{return (this__12090.step === 0);
} else
{return and__3822__auto____12091;
}
})())
{return this__12090.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__12092 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__12092.start + (n * this__12092.step));
} else
{if((function (){var and__3822__auto____12093 = (this__12092.start > this__12092.end);
if(and__3822__auto____12093)
{return (this__12092.step === 0);
} else
{return and__3822__auto____12093;
}
})())
{return this__12092.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__12094 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12094.meta);
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
var temp__3974__auto____12097 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12097)
{var s__12098 = temp__3974__auto____12097;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__12098),take_nth.call(null,n,cljs.core.drop.call(null,n,s__12098)));
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
var temp__3974__auto____12105 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12105)
{var s__12106 = temp__3974__auto____12105;
var fst__12107 = cljs.core.first.call(null,s__12106);
var fv__12108 = f.call(null,fst__12107);
var run__12109 = cljs.core.cons.call(null,fst__12107,cljs.core.take_while.call(null,(function (p1__12099_SHARP_){
return cljs.core._EQ_.call(null,fv__12108,f.call(null,p1__12099_SHARP_));
}),cljs.core.next.call(null,s__12106)));
return cljs.core.cons.call(null,run__12109,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__12109),s__12106))));
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
var temp__3971__auto____12124 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____12124)
{var s__12125 = temp__3971__auto____12124;
return reductions.call(null,f,cljs.core.first.call(null,s__12125),cljs.core.rest.call(null,s__12125));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____12126 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12126)
{var s__12127 = temp__3974__auto____12126;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__12127)),cljs.core.rest.call(null,s__12127));
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
var G__12130 = null;
var G__12130__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__12130__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__12130__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__12130__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__12130__4 = (function() { 
var G__12131__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__12131 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12131__delegate.call(this, x, y, z, args);
};
G__12131.cljs$lang$maxFixedArity = 3;
G__12131.cljs$lang$applyTo = (function (arglist__12132){
var x = cljs.core.first(arglist__12132);
var y = cljs.core.first(cljs.core.next(arglist__12132));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12132)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12132)));
return G__12131__delegate(x, y, z, args);
});
G__12131.cljs$lang$arity$variadic = G__12131__delegate;
return G__12131;
})()
;
G__12130 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12130__0.call(this);
case 1:
return G__12130__1.call(this,x);
case 2:
return G__12130__2.call(this,x,y);
case 3:
return G__12130__3.call(this,x,y,z);
default:
return G__12130__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12130.cljs$lang$maxFixedArity = 3;
G__12130.cljs$lang$applyTo = G__12130__4.cljs$lang$applyTo;
return G__12130;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__12133 = null;
var G__12133__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__12133__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__12133__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__12133__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__12133__4 = (function() { 
var G__12134__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__12134 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12134__delegate.call(this, x, y, z, args);
};
G__12134.cljs$lang$maxFixedArity = 3;
G__12134.cljs$lang$applyTo = (function (arglist__12135){
var x = cljs.core.first(arglist__12135);
var y = cljs.core.first(cljs.core.next(arglist__12135));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12135)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12135)));
return G__12134__delegate(x, y, z, args);
});
G__12134.cljs$lang$arity$variadic = G__12134__delegate;
return G__12134;
})()
;
G__12133 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12133__0.call(this);
case 1:
return G__12133__1.call(this,x);
case 2:
return G__12133__2.call(this,x,y);
case 3:
return G__12133__3.call(this,x,y,z);
default:
return G__12133__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12133.cljs$lang$maxFixedArity = 3;
G__12133.cljs$lang$applyTo = G__12133__4.cljs$lang$applyTo;
return G__12133;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__12136 = null;
var G__12136__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__12136__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__12136__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__12136__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__12136__4 = (function() { 
var G__12137__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__12137 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12137__delegate.call(this, x, y, z, args);
};
G__12137.cljs$lang$maxFixedArity = 3;
G__12137.cljs$lang$applyTo = (function (arglist__12138){
var x = cljs.core.first(arglist__12138);
var y = cljs.core.first(cljs.core.next(arglist__12138));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12138)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12138)));
return G__12137__delegate(x, y, z, args);
});
G__12137.cljs$lang$arity$variadic = G__12137__delegate;
return G__12137;
})()
;
G__12136 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12136__0.call(this);
case 1:
return G__12136__1.call(this,x);
case 2:
return G__12136__2.call(this,x,y);
case 3:
return G__12136__3.call(this,x,y,z);
default:
return G__12136__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12136.cljs$lang$maxFixedArity = 3;
G__12136.cljs$lang$applyTo = G__12136__4.cljs$lang$applyTo;
return G__12136;
})()
});
var juxt__4 = (function() { 
var G__12139__delegate = function (f,g,h,fs){
var fs__12129 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__12140 = null;
var G__12140__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__12110_SHARP_,p2__12111_SHARP_){
return cljs.core.conj.call(null,p1__12110_SHARP_,p2__12111_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__12129);
});
var G__12140__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__12112_SHARP_,p2__12113_SHARP_){
return cljs.core.conj.call(null,p1__12112_SHARP_,p2__12113_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__12129);
});
var G__12140__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__12114_SHARP_,p2__12115_SHARP_){
return cljs.core.conj.call(null,p1__12114_SHARP_,p2__12115_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__12129);
});
var G__12140__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__12116_SHARP_,p2__12117_SHARP_){
return cljs.core.conj.call(null,p1__12116_SHARP_,p2__12117_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__12129);
});
var G__12140__4 = (function() { 
var G__12141__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__12118_SHARP_,p2__12119_SHARP_){
return cljs.core.conj.call(null,p1__12118_SHARP_,cljs.core.apply.call(null,p2__12119_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__12129);
};
var G__12141 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12141__delegate.call(this, x, y, z, args);
};
G__12141.cljs$lang$maxFixedArity = 3;
G__12141.cljs$lang$applyTo = (function (arglist__12142){
var x = cljs.core.first(arglist__12142);
var y = cljs.core.first(cljs.core.next(arglist__12142));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12142)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12142)));
return G__12141__delegate(x, y, z, args);
});
G__12141.cljs$lang$arity$variadic = G__12141__delegate;
return G__12141;
})()
;
G__12140 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12140__0.call(this);
case 1:
return G__12140__1.call(this,x);
case 2:
return G__12140__2.call(this,x,y);
case 3:
return G__12140__3.call(this,x,y,z);
default:
return G__12140__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12140.cljs$lang$maxFixedArity = 3;
G__12140.cljs$lang$applyTo = G__12140__4.cljs$lang$applyTo;
return G__12140;
})()
};
var G__12139 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12139__delegate.call(this, f, g, h, fs);
};
G__12139.cljs$lang$maxFixedArity = 3;
G__12139.cljs$lang$applyTo = (function (arglist__12143){
var f = cljs.core.first(arglist__12143);
var g = cljs.core.first(cljs.core.next(arglist__12143));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12143)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12143)));
return G__12139__delegate(f, g, h, fs);
});
G__12139.cljs$lang$arity$variadic = G__12139__delegate;
return G__12139;
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
var G__12146 = cljs.core.next.call(null,coll);
coll = G__12146;
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
if(cljs.core.truth_((function (){var and__3822__auto____12145 = cljs.core.seq.call(null,coll);
if(and__3822__auto____12145)
{return (n > 0);
} else
{return and__3822__auto____12145;
}
})()))
{{
var G__12147 = (n - 1);
var G__12148 = cljs.core.next.call(null,coll);
n = G__12147;
coll = G__12148;
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
var matches__12150 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__12150),s))
{if((cljs.core.count.call(null,matches__12150) === 1))
{return cljs.core.first.call(null,matches__12150);
} else
{return cljs.core.vec.call(null,matches__12150);
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
var matches__12152 = re.exec(s);
if((matches__12152 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__12152) === 1))
{return cljs.core.first.call(null,matches__12152);
} else
{return cljs.core.vec.call(null,matches__12152);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__12157 = cljs.core.re_find.call(null,re,s);
var match_idx__12158 = s.search(re);
var match_str__12159 = ((cljs.core.coll_QMARK_.call(null,match_data__12157))?cljs.core.first.call(null,match_data__12157):match_data__12157);
var post_match__12160 = cljs.core.subs.call(null,s,(match_idx__12158 + cljs.core.count.call(null,match_str__12159)));
if(cljs.core.truth_(match_data__12157))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__12157,re_seq.call(null,re,post_match__12160));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__12167__12168 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___12169 = cljs.core.nth.call(null,vec__12167__12168,0,null);
var flags__12170 = cljs.core.nth.call(null,vec__12167__12168,1,null);
var pattern__12171 = cljs.core.nth.call(null,vec__12167__12168,2,null);
return (new RegExp(pattern__12171,flags__12170));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__12161_SHARP_){
return print_one.call(null,p1__12161_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____12181 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____12181))
{var and__3822__auto____12185 = (function (){var G__12182__12183 = obj;
if(G__12182__12183)
{if((function (){var or__3824__auto____12184 = (G__12182__12183.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____12184)
{return or__3824__auto____12184;
} else
{return G__12182__12183.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__12182__12183.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__12182__12183);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__12182__12183);
}
})();
if(cljs.core.truth_(and__3822__auto____12185))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____12185;
}
} else
{return and__3822__auto____12181;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____12186 = !((obj == null));
if(and__3822__auto____12186)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____12186;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__12187__12188 = obj;
if(G__12187__12188)
{if((function (){var or__3824__auto____12189 = (G__12187__12188.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____12189)
{return or__3824__auto____12189;
} else
{return G__12187__12188.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__12187__12188.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__12187__12188);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__12187__12188);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__12209 = (new goog.string.StringBuffer());
var G__12210__12211 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__12210__12211)
{var string__12212 = cljs.core.first.call(null,G__12210__12211);
var G__12210__12213 = G__12210__12211;
while(true){
sb__12209.append(string__12212);
var temp__3974__auto____12214 = cljs.core.next.call(null,G__12210__12213);
if(temp__3974__auto____12214)
{var G__12210__12215 = temp__3974__auto____12214;
{
var G__12228 = cljs.core.first.call(null,G__12210__12215);
var G__12229 = G__12210__12215;
string__12212 = G__12228;
G__12210__12213 = G__12229;
continue;
}
} else
{}
break;
}
} else
{}
var G__12216__12217 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__12216__12217)
{var obj__12218 = cljs.core.first.call(null,G__12216__12217);
var G__12216__12219 = G__12216__12217;
while(true){
sb__12209.append(" ");
var G__12220__12221 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12218,opts));
if(G__12220__12221)
{var string__12222 = cljs.core.first.call(null,G__12220__12221);
var G__12220__12223 = G__12220__12221;
while(true){
sb__12209.append(string__12222);
var temp__3974__auto____12224 = cljs.core.next.call(null,G__12220__12223);
if(temp__3974__auto____12224)
{var G__12220__12225 = temp__3974__auto____12224;
{
var G__12230 = cljs.core.first.call(null,G__12220__12225);
var G__12231 = G__12220__12225;
string__12222 = G__12230;
G__12220__12223 = G__12231;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____12226 = cljs.core.next.call(null,G__12216__12219);
if(temp__3974__auto____12226)
{var G__12216__12227 = temp__3974__auto____12226;
{
var G__12232 = cljs.core.first.call(null,G__12216__12227);
var G__12233 = G__12216__12227;
obj__12218 = G__12232;
G__12216__12219 = G__12233;
continue;
}
} else
{}
break;
}
} else
{}
return sb__12209;
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
var sb__12235 = cljs.core.pr_sb.call(null,objs,opts);
sb__12235.append("\n");
return [cljs.core.str(sb__12235)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__12254__12255 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__12254__12255)
{var string__12256 = cljs.core.first.call(null,G__12254__12255);
var G__12254__12257 = G__12254__12255;
while(true){
cljs.core.string_print.call(null,string__12256);
var temp__3974__auto____12258 = cljs.core.next.call(null,G__12254__12257);
if(temp__3974__auto____12258)
{var G__12254__12259 = temp__3974__auto____12258;
{
var G__12272 = cljs.core.first.call(null,G__12254__12259);
var G__12273 = G__12254__12259;
string__12256 = G__12272;
G__12254__12257 = G__12273;
continue;
}
} else
{}
break;
}
} else
{}
var G__12260__12261 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__12260__12261)
{var obj__12262 = cljs.core.first.call(null,G__12260__12261);
var G__12260__12263 = G__12260__12261;
while(true){
cljs.core.string_print.call(null," ");
var G__12264__12265 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12262,opts));
if(G__12264__12265)
{var string__12266 = cljs.core.first.call(null,G__12264__12265);
var G__12264__12267 = G__12264__12265;
while(true){
cljs.core.string_print.call(null,string__12266);
var temp__3974__auto____12268 = cljs.core.next.call(null,G__12264__12267);
if(temp__3974__auto____12268)
{var G__12264__12269 = temp__3974__auto____12268;
{
var G__12274 = cljs.core.first.call(null,G__12264__12269);
var G__12275 = G__12264__12269;
string__12266 = G__12274;
G__12264__12267 = G__12275;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____12270 = cljs.core.next.call(null,G__12260__12263);
if(temp__3974__auto____12270)
{var G__12260__12271 = temp__3974__auto____12270;
{
var G__12276 = cljs.core.first.call(null,G__12260__12271);
var G__12277 = G__12260__12271;
obj__12262 = G__12276;
G__12260__12263 = G__12277;
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
pr_str.cljs$lang$applyTo = (function (arglist__12278){
var objs = cljs.core.seq(arglist__12278);;
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
prn_str.cljs$lang$applyTo = (function (arglist__12279){
var objs = cljs.core.seq(arglist__12279);;
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
pr.cljs$lang$applyTo = (function (arglist__12280){
var objs = cljs.core.seq(arglist__12280);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__12281){
var objs = cljs.core.seq(arglist__12281);;
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
print_str.cljs$lang$applyTo = (function (arglist__12282){
var objs = cljs.core.seq(arglist__12282);;
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
println.cljs$lang$applyTo = (function (arglist__12283){
var objs = cljs.core.seq(arglist__12283);;
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
println_str.cljs$lang$applyTo = (function (arglist__12284){
var objs = cljs.core.seq(arglist__12284);;
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
prn.cljs$lang$applyTo = (function (arglist__12285){
var objs = cljs.core.seq(arglist__12285);;
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
printf.cljs$lang$applyTo = (function (arglist__12286){
var fmt = cljs.core.first(arglist__12286);
var args = cljs.core.rest(arglist__12286);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__12287 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12287,"{",", ","}",opts,coll);
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
var pr_pair__12288 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12288,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__12289 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12289,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____12290 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____12290))
{var nspc__12291 = temp__3974__auto____12290;
return [cljs.core.str(nspc__12291),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____12292 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____12292))
{var nspc__12293 = temp__3974__auto____12292;
return [cljs.core.str(nspc__12293),cljs.core.str("/")].join('');
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
var pr_pair__12294 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12294,"{",", ","}",opts,coll);
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
var normalize__12296 = (function (n,len){
var ns__12295 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__12295) < len))
{{
var G__12298 = [cljs.core.str("0"),cljs.core.str(ns__12295)].join('');
ns__12295 = G__12298;
continue;
}
} else
{return ns__12295;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__12296.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__12296.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__12296.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__12296.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__12296.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__12296.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__12297 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12297,"{",", ","}",opts,coll);
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
var this__12299 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__12300 = this;
var G__12301__12302 = cljs.core.seq.call(null,this__12300.watches);
if(G__12301__12302)
{var G__12304__12306 = cljs.core.first.call(null,G__12301__12302);
var vec__12305__12307 = G__12304__12306;
var key__12308 = cljs.core.nth.call(null,vec__12305__12307,0,null);
var f__12309 = cljs.core.nth.call(null,vec__12305__12307,1,null);
var G__12301__12310 = G__12301__12302;
var G__12304__12311 = G__12304__12306;
var G__12301__12312 = G__12301__12310;
while(true){
var vec__12313__12314 = G__12304__12311;
var key__12315 = cljs.core.nth.call(null,vec__12313__12314,0,null);
var f__12316 = cljs.core.nth.call(null,vec__12313__12314,1,null);
var G__12301__12317 = G__12301__12312;
f__12316.call(null,key__12315,this$,oldval,newval);
var temp__3974__auto____12318 = cljs.core.next.call(null,G__12301__12317);
if(temp__3974__auto____12318)
{var G__12301__12319 = temp__3974__auto____12318;
{
var G__12326 = cljs.core.first.call(null,G__12301__12319);
var G__12327 = G__12301__12319;
G__12304__12311 = G__12326;
G__12301__12312 = G__12327;
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
var this__12320 = this;
return this$.watches = cljs.core.assoc.call(null,this__12320.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__12321 = this;
return this$.watches = cljs.core.dissoc.call(null,this__12321.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__12322 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__12322.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__12323 = this;
return this__12323.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__12324 = this;
return this__12324.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__12325 = this;
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
var G__12339__delegate = function (x,p__12328){
var map__12334__12335 = p__12328;
var map__12334__12336 = ((cljs.core.seq_QMARK_.call(null,map__12334__12335))?cljs.core.apply.call(null,cljs.core.hash_map,map__12334__12335):map__12334__12335);
var validator__12337 = cljs.core._lookup.call(null,map__12334__12336,"\uFDD0'validator",null);
var meta__12338 = cljs.core._lookup.call(null,map__12334__12336,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__12338,validator__12337,null));
};
var G__12339 = function (x,var_args){
var p__12328 = null;
if (goog.isDef(var_args)) {
  p__12328 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12339__delegate.call(this, x, p__12328);
};
G__12339.cljs$lang$maxFixedArity = 1;
G__12339.cljs$lang$applyTo = (function (arglist__12340){
var x = cljs.core.first(arglist__12340);
var p__12328 = cljs.core.rest(arglist__12340);
return G__12339__delegate(x, p__12328);
});
G__12339.cljs$lang$arity$variadic = G__12339__delegate;
return G__12339;
})()
;
atom = function(x,var_args){
var p__12328 = var_args;
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
var temp__3974__auto____12344 = a.validator;
if(cljs.core.truth_(temp__3974__auto____12344))
{var validate__12345 = temp__3974__auto____12344;
if(cljs.core.truth_(validate__12345.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__12346 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__12346,new_value);
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
var G__12347__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__12347 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12347__delegate.call(this, a, f, x, y, z, more);
};
G__12347.cljs$lang$maxFixedArity = 5;
G__12347.cljs$lang$applyTo = (function (arglist__12348){
var a = cljs.core.first(arglist__12348);
var f = cljs.core.first(cljs.core.next(arglist__12348));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12348)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12348))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12348)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12348)))));
return G__12347__delegate(a, f, x, y, z, more);
});
G__12347.cljs$lang$arity$variadic = G__12347__delegate;
return G__12347;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__12349){
var iref = cljs.core.first(arglist__12349);
var f = cljs.core.first(cljs.core.next(arglist__12349));
var args = cljs.core.rest(cljs.core.next(arglist__12349));
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
var this__12350 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__12350.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__12351 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__12351.state,(function (p__12352){
var map__12353__12354 = p__12352;
var map__12353__12355 = ((cljs.core.seq_QMARK_.call(null,map__12353__12354))?cljs.core.apply.call(null,cljs.core.hash_map,map__12353__12354):map__12353__12354);
var curr_state__12356 = map__12353__12355;
var done__12357 = cljs.core._lookup.call(null,map__12353__12355,"\uFDD0'done",null);
if(cljs.core.truth_(done__12357))
{return curr_state__12356;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__12351.f.call(null)});
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
var map__12378__12379 = options;
var map__12378__12380 = ((cljs.core.seq_QMARK_.call(null,map__12378__12379))?cljs.core.apply.call(null,cljs.core.hash_map,map__12378__12379):map__12378__12379);
var keywordize_keys__12381 = cljs.core._lookup.call(null,map__12378__12380,"\uFDD0'keywordize-keys",null);
var keyfn__12382 = (cljs.core.truth_(keywordize_keys__12381)?cljs.core.keyword:cljs.core.str);
var f__12397 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2462__auto____12396 = (function iter__12390(s__12391){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12391__12394 = s__12391;
while(true){
if(cljs.core.seq.call(null,s__12391__12394))
{var k__12395 = cljs.core.first.call(null,s__12391__12394);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__12382.call(null,k__12395),thisfn.call(null,(x[k__12395]))], true),iter__12390.call(null,cljs.core.rest.call(null,s__12391__12394)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2462__auto____12396.call(null,cljs.core.js_keys.call(null,x));
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
return f__12397.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__12398){
var x = cljs.core.first(arglist__12398);
var options = cljs.core.rest(arglist__12398);
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
var mem__12403 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__12407__delegate = function (args){
var temp__3971__auto____12404 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__12403),args,null);
if(cljs.core.truth_(temp__3971__auto____12404))
{var v__12405 = temp__3971__auto____12404;
return v__12405;
} else
{var ret__12406 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__12403,cljs.core.assoc,args,ret__12406);
return ret__12406;
}
};
var G__12407 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12407__delegate.call(this, args);
};
G__12407.cljs$lang$maxFixedArity = 0;
G__12407.cljs$lang$applyTo = (function (arglist__12408){
var args = cljs.core.seq(arglist__12408);;
return G__12407__delegate(args);
});
G__12407.cljs$lang$arity$variadic = G__12407__delegate;
return G__12407;
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
var ret__12410 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__12410))
{{
var G__12411 = ret__12410;
f = G__12411;
continue;
}
} else
{return ret__12410;
}
break;
}
});
var trampoline__2 = (function() { 
var G__12412__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__12412 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12412__delegate.call(this, f, args);
};
G__12412.cljs$lang$maxFixedArity = 1;
G__12412.cljs$lang$applyTo = (function (arglist__12413){
var f = cljs.core.first(arglist__12413);
var args = cljs.core.rest(arglist__12413);
return G__12412__delegate(f, args);
});
G__12412.cljs$lang$arity$variadic = G__12412__delegate;
return G__12412;
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
var k__12415 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__12415,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__12415,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____12424 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____12424)
{return or__3824__auto____12424;
} else
{var or__3824__auto____12425 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____12425)
{return or__3824__auto____12425;
} else
{var and__3822__auto____12426 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____12426)
{var and__3822__auto____12427 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____12427)
{var and__3822__auto____12428 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____12428)
{var ret__12429 = true;
var i__12430 = 0;
while(true){
if((function (){var or__3824__auto____12431 = cljs.core.not.call(null,ret__12429);
if(or__3824__auto____12431)
{return or__3824__auto____12431;
} else
{return (i__12430 === cljs.core.count.call(null,parent));
}
})())
{return ret__12429;
} else
{{
var G__12432 = isa_QMARK_.call(null,h,child.call(null,i__12430),parent.call(null,i__12430));
var G__12433 = (i__12430 + 1);
ret__12429 = G__12432;
i__12430 = G__12433;
continue;
}
}
break;
}
} else
{return and__3822__auto____12428;
}
} else
{return and__3822__auto____12427;
}
} else
{return and__3822__auto____12426;
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
var tp__12442 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__12443 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__12444 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__12445 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____12446 = ((cljs.core.contains_QMARK_.call(null,tp__12442.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__12444.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__12444.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__12442,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__12445.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__12443,parent,ta__12444),"\uFDD0'descendants":tf__12445.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__12444,tag,td__12443)});
})());
if(cljs.core.truth_(or__3824__auto____12446))
{return or__3824__auto____12446;
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
var parentMap__12451 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__12452 = (cljs.core.truth_(parentMap__12451.call(null,tag))?cljs.core.disj.call(null,parentMap__12451.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__12453 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__12452))?cljs.core.assoc.call(null,parentMap__12451,tag,childsParents__12452):cljs.core.dissoc.call(null,parentMap__12451,tag));
var deriv_seq__12454 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__12434_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__12434_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__12434_SHARP_),cljs.core.second.call(null,p1__12434_SHARP_)));
}),cljs.core.seq.call(null,newParents__12453)));
if(cljs.core.contains_QMARK_.call(null,parentMap__12451.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__12435_SHARP_,p2__12436_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__12435_SHARP_,p2__12436_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__12454));
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
var xprefs__12462 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____12464 = (cljs.core.truth_((function (){var and__3822__auto____12463 = xprefs__12462;
if(cljs.core.truth_(and__3822__auto____12463))
{return xprefs__12462.call(null,y);
} else
{return and__3822__auto____12463;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____12464))
{return or__3824__auto____12464;
} else
{var or__3824__auto____12466 = (function (){var ps__12465 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__12465) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__12465),prefer_table)))
{} else
{}
{
var G__12469 = cljs.core.rest.call(null,ps__12465);
ps__12465 = G__12469;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____12466))
{return or__3824__auto____12466;
} else
{var or__3824__auto____12468 = (function (){var ps__12467 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__12467) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__12467),y,prefer_table)))
{} else
{}
{
var G__12470 = cljs.core.rest.call(null,ps__12467);
ps__12467 = G__12470;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____12468))
{return or__3824__auto____12468;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____12472 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____12472))
{return or__3824__auto____12472;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__12490 = cljs.core.reduce.call(null,(function (be,p__12482){
var vec__12483__12484 = p__12482;
var k__12485 = cljs.core.nth.call(null,vec__12483__12484,0,null);
var ___12486 = cljs.core.nth.call(null,vec__12483__12484,1,null);
var e__12487 = vec__12483__12484;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__12485))
{var be2__12489 = (cljs.core.truth_((function (){var or__3824__auto____12488 = (be == null);
if(or__3824__auto____12488)
{return or__3824__auto____12488;
} else
{return cljs.core.dominates.call(null,k__12485,cljs.core.first.call(null,be),prefer_table);
}
})())?e__12487:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__12489),k__12485,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__12485),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__12489)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__12489;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__12490))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__12490));
return cljs.core.second.call(null,best_entry__12490);
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
if((function (){var and__3822__auto____12495 = mf;
if(and__3822__auto____12495)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____12495;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2363__auto____12496 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12497 = (cljs.core._reset[goog.typeOf(x__2363__auto____12496)]);
if(or__3824__auto____12497)
{return or__3824__auto____12497;
} else
{var or__3824__auto____12498 = (cljs.core._reset["_"]);
if(or__3824__auto____12498)
{return or__3824__auto____12498;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____12503 = mf;
if(and__3822__auto____12503)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____12503;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2363__auto____12504 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12505 = (cljs.core._add_method[goog.typeOf(x__2363__auto____12504)]);
if(or__3824__auto____12505)
{return or__3824__auto____12505;
} else
{var or__3824__auto____12506 = (cljs.core._add_method["_"]);
if(or__3824__auto____12506)
{return or__3824__auto____12506;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____12511 = mf;
if(and__3822__auto____12511)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____12511;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2363__auto____12512 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12513 = (cljs.core._remove_method[goog.typeOf(x__2363__auto____12512)]);
if(or__3824__auto____12513)
{return or__3824__auto____12513;
} else
{var or__3824__auto____12514 = (cljs.core._remove_method["_"]);
if(or__3824__auto____12514)
{return or__3824__auto____12514;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____12519 = mf;
if(and__3822__auto____12519)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____12519;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2363__auto____12520 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12521 = (cljs.core._prefer_method[goog.typeOf(x__2363__auto____12520)]);
if(or__3824__auto____12521)
{return or__3824__auto____12521;
} else
{var or__3824__auto____12522 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____12522)
{return or__3824__auto____12522;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____12527 = mf;
if(and__3822__auto____12527)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____12527;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2363__auto____12528 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12529 = (cljs.core._get_method[goog.typeOf(x__2363__auto____12528)]);
if(or__3824__auto____12529)
{return or__3824__auto____12529;
} else
{var or__3824__auto____12530 = (cljs.core._get_method["_"]);
if(or__3824__auto____12530)
{return or__3824__auto____12530;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____12535 = mf;
if(and__3822__auto____12535)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____12535;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2363__auto____12536 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12537 = (cljs.core._methods[goog.typeOf(x__2363__auto____12536)]);
if(or__3824__auto____12537)
{return or__3824__auto____12537;
} else
{var or__3824__auto____12538 = (cljs.core._methods["_"]);
if(or__3824__auto____12538)
{return or__3824__auto____12538;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____12543 = mf;
if(and__3822__auto____12543)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____12543;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2363__auto____12544 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12545 = (cljs.core._prefers[goog.typeOf(x__2363__auto____12544)]);
if(or__3824__auto____12545)
{return or__3824__auto____12545;
} else
{var or__3824__auto____12546 = (cljs.core._prefers["_"]);
if(or__3824__auto____12546)
{return or__3824__auto____12546;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____12551 = mf;
if(and__3822__auto____12551)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____12551;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2363__auto____12552 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12553 = (cljs.core._dispatch[goog.typeOf(x__2363__auto____12552)]);
if(or__3824__auto____12553)
{return or__3824__auto____12553;
} else
{var or__3824__auto____12554 = (cljs.core._dispatch["_"]);
if(or__3824__auto____12554)
{return or__3824__auto____12554;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__12557 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__12558 = cljs.core._get_method.call(null,mf,dispatch_val__12557);
if(cljs.core.truth_(target_fn__12558))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__12557)].join('')));
}
return cljs.core.apply.call(null,target_fn__12558,args);
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
var this__12559 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__12560 = this;
cljs.core.swap_BANG_.call(null,this__12560.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12560.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12560.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12560.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__12561 = this;
cljs.core.swap_BANG_.call(null,this__12561.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__12561.method_cache,this__12561.method_table,this__12561.cached_hierarchy,this__12561.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__12562 = this;
cljs.core.swap_BANG_.call(null,this__12562.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__12562.method_cache,this__12562.method_table,this__12562.cached_hierarchy,this__12562.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__12563 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__12563.cached_hierarchy),cljs.core.deref.call(null,this__12563.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__12563.method_cache,this__12563.method_table,this__12563.cached_hierarchy,this__12563.hierarchy);
}
var temp__3971__auto____12564 = cljs.core.deref.call(null,this__12563.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____12564))
{var target_fn__12565 = temp__3971__auto____12564;
return target_fn__12565;
} else
{var temp__3971__auto____12566 = cljs.core.find_and_cache_best_method.call(null,this__12563.name,dispatch_val,this__12563.hierarchy,this__12563.method_table,this__12563.prefer_table,this__12563.method_cache,this__12563.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____12566))
{var target_fn__12567 = temp__3971__auto____12566;
return target_fn__12567;
} else
{return cljs.core.deref.call(null,this__12563.method_table).call(null,this__12563.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__12568 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__12568.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__12568.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__12568.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__12568.method_cache,this__12568.method_table,this__12568.cached_hierarchy,this__12568.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__12569 = this;
return cljs.core.deref.call(null,this__12569.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__12570 = this;
return cljs.core.deref.call(null,this__12570.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__12571 = this;
return cljs.core.do_dispatch.call(null,mf,this__12571.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__12573__delegate = function (_,args){
var self__12572 = this;
return cljs.core._dispatch.call(null,self__12572,args);
};
var G__12573 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12573__delegate.call(this, _, args);
};
G__12573.cljs$lang$maxFixedArity = 1;
G__12573.cljs$lang$applyTo = (function (arglist__12574){
var _ = cljs.core.first(arglist__12574);
var args = cljs.core.rest(arglist__12574);
return G__12573__delegate(_, args);
});
G__12573.cljs$lang$arity$variadic = G__12573__delegate;
return G__12573;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__12575 = this;
return cljs.core._dispatch.call(null,self__12575,args);
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
var this__12576 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_12578,_){
var this__12577 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__12577.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__12579 = this;
var and__3822__auto____12580 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____12580)
{return (this__12579.uuid === other.uuid);
} else
{return and__3822__auto____12580;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__12581 = this;
var this__12582 = this;
return cljs.core.pr_str.call(null,this__12582);
});
cljs.core.UUID;
