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
var x__8690 = (((x == null))?null:x);
if((p[goog.typeOf(x__8690)]))
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
var G__8691__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__8691 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8691__delegate.call(this, array, i, idxs);
};
G__8691.cljs$lang$maxFixedArity = 2;
G__8691.cljs$lang$applyTo = (function (arglist__8692){
var array = cljs.core.first(arglist__8692);
var i = cljs.core.first(cljs.core.next(arglist__8692));
var idxs = cljs.core.rest(cljs.core.next(arglist__8692));
return G__8691__delegate(array, i, idxs);
});
G__8691.cljs$lang$arity$variadic = G__8691__delegate;
return G__8691;
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
if((function (){var and__3822__auto____8777 = this$;
if(and__3822__auto____8777)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____8777;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2363__auto____8778 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8779 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8778)]);
if(or__3824__auto____8779)
{return or__3824__auto____8779;
} else
{var or__3824__auto____8780 = (cljs.core._invoke["_"]);
if(or__3824__auto____8780)
{return or__3824__auto____8780;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____8781 = this$;
if(and__3822__auto____8781)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____8781;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2363__auto____8782 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8783 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8782)]);
if(or__3824__auto____8783)
{return or__3824__auto____8783;
} else
{var or__3824__auto____8784 = (cljs.core._invoke["_"]);
if(or__3824__auto____8784)
{return or__3824__auto____8784;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____8785 = this$;
if(and__3822__auto____8785)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____8785;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2363__auto____8786 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8787 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8786)]);
if(or__3824__auto____8787)
{return or__3824__auto____8787;
} else
{var or__3824__auto____8788 = (cljs.core._invoke["_"]);
if(or__3824__auto____8788)
{return or__3824__auto____8788;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____8789 = this$;
if(and__3822__auto____8789)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____8789;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2363__auto____8790 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8791 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8790)]);
if(or__3824__auto____8791)
{return or__3824__auto____8791;
} else
{var or__3824__auto____8792 = (cljs.core._invoke["_"]);
if(or__3824__auto____8792)
{return or__3824__auto____8792;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____8793 = this$;
if(and__3822__auto____8793)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____8793;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2363__auto____8794 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8795 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8794)]);
if(or__3824__auto____8795)
{return or__3824__auto____8795;
} else
{var or__3824__auto____8796 = (cljs.core._invoke["_"]);
if(or__3824__auto____8796)
{return or__3824__auto____8796;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____8797 = this$;
if(and__3822__auto____8797)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____8797;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2363__auto____8798 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8799 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8798)]);
if(or__3824__auto____8799)
{return or__3824__auto____8799;
} else
{var or__3824__auto____8800 = (cljs.core._invoke["_"]);
if(or__3824__auto____8800)
{return or__3824__auto____8800;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____8801 = this$;
if(and__3822__auto____8801)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____8801;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2363__auto____8802 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8803 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8802)]);
if(or__3824__auto____8803)
{return or__3824__auto____8803;
} else
{var or__3824__auto____8804 = (cljs.core._invoke["_"]);
if(or__3824__auto____8804)
{return or__3824__auto____8804;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____8805 = this$;
if(and__3822__auto____8805)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____8805;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2363__auto____8806 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8807 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8806)]);
if(or__3824__auto____8807)
{return or__3824__auto____8807;
} else
{var or__3824__auto____8808 = (cljs.core._invoke["_"]);
if(or__3824__auto____8808)
{return or__3824__auto____8808;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____8809 = this$;
if(and__3822__auto____8809)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____8809;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2363__auto____8810 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8811 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8810)]);
if(or__3824__auto____8811)
{return or__3824__auto____8811;
} else
{var or__3824__auto____8812 = (cljs.core._invoke["_"]);
if(or__3824__auto____8812)
{return or__3824__auto____8812;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____8813 = this$;
if(and__3822__auto____8813)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____8813;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2363__auto____8814 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8815 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8814)]);
if(or__3824__auto____8815)
{return or__3824__auto____8815;
} else
{var or__3824__auto____8816 = (cljs.core._invoke["_"]);
if(or__3824__auto____8816)
{return or__3824__auto____8816;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____8817 = this$;
if(and__3822__auto____8817)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____8817;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2363__auto____8818 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8819 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8818)]);
if(or__3824__auto____8819)
{return or__3824__auto____8819;
} else
{var or__3824__auto____8820 = (cljs.core._invoke["_"]);
if(or__3824__auto____8820)
{return or__3824__auto____8820;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____8821 = this$;
if(and__3822__auto____8821)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____8821;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2363__auto____8822 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8823 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8822)]);
if(or__3824__auto____8823)
{return or__3824__auto____8823;
} else
{var or__3824__auto____8824 = (cljs.core._invoke["_"]);
if(or__3824__auto____8824)
{return or__3824__auto____8824;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____8825 = this$;
if(and__3822__auto____8825)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____8825;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2363__auto____8826 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8827 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8826)]);
if(or__3824__auto____8827)
{return or__3824__auto____8827;
} else
{var or__3824__auto____8828 = (cljs.core._invoke["_"]);
if(or__3824__auto____8828)
{return or__3824__auto____8828;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____8829 = this$;
if(and__3822__auto____8829)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____8829;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2363__auto____8830 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8831 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8830)]);
if(or__3824__auto____8831)
{return or__3824__auto____8831;
} else
{var or__3824__auto____8832 = (cljs.core._invoke["_"]);
if(or__3824__auto____8832)
{return or__3824__auto____8832;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____8833 = this$;
if(and__3822__auto____8833)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____8833;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2363__auto____8834 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8835 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8834)]);
if(or__3824__auto____8835)
{return or__3824__auto____8835;
} else
{var or__3824__auto____8836 = (cljs.core._invoke["_"]);
if(or__3824__auto____8836)
{return or__3824__auto____8836;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____8837 = this$;
if(and__3822__auto____8837)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____8837;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2363__auto____8838 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8839 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8838)]);
if(or__3824__auto____8839)
{return or__3824__auto____8839;
} else
{var or__3824__auto____8840 = (cljs.core._invoke["_"]);
if(or__3824__auto____8840)
{return or__3824__auto____8840;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____8841 = this$;
if(and__3822__auto____8841)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____8841;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2363__auto____8842 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8843 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8842)]);
if(or__3824__auto____8843)
{return or__3824__auto____8843;
} else
{var or__3824__auto____8844 = (cljs.core._invoke["_"]);
if(or__3824__auto____8844)
{return or__3824__auto____8844;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____8845 = this$;
if(and__3822__auto____8845)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____8845;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2363__auto____8846 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8847 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8846)]);
if(or__3824__auto____8847)
{return or__3824__auto____8847;
} else
{var or__3824__auto____8848 = (cljs.core._invoke["_"]);
if(or__3824__auto____8848)
{return or__3824__auto____8848;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____8849 = this$;
if(and__3822__auto____8849)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____8849;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2363__auto____8850 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8851 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8850)]);
if(or__3824__auto____8851)
{return or__3824__auto____8851;
} else
{var or__3824__auto____8852 = (cljs.core._invoke["_"]);
if(or__3824__auto____8852)
{return or__3824__auto____8852;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____8853 = this$;
if(and__3822__auto____8853)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____8853;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2363__auto____8854 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8855 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8854)]);
if(or__3824__auto____8855)
{return or__3824__auto____8855;
} else
{var or__3824__auto____8856 = (cljs.core._invoke["_"]);
if(or__3824__auto____8856)
{return or__3824__auto____8856;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____8857 = this$;
if(and__3822__auto____8857)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____8857;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2363__auto____8858 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8859 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8858)]);
if(or__3824__auto____8859)
{return or__3824__auto____8859;
} else
{var or__3824__auto____8860 = (cljs.core._invoke["_"]);
if(or__3824__auto____8860)
{return or__3824__auto____8860;
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
if((function (){var and__3822__auto____8865 = coll;
if(and__3822__auto____8865)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____8865;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2363__auto____8866 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8867 = (cljs.core._count[goog.typeOf(x__2363__auto____8866)]);
if(or__3824__auto____8867)
{return or__3824__auto____8867;
} else
{var or__3824__auto____8868 = (cljs.core._count["_"]);
if(or__3824__auto____8868)
{return or__3824__auto____8868;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____8873 = coll;
if(and__3822__auto____8873)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____8873;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2363__auto____8874 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8875 = (cljs.core._empty[goog.typeOf(x__2363__auto____8874)]);
if(or__3824__auto____8875)
{return or__3824__auto____8875;
} else
{var or__3824__auto____8876 = (cljs.core._empty["_"]);
if(or__3824__auto____8876)
{return or__3824__auto____8876;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____8881 = coll;
if(and__3822__auto____8881)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____8881;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2363__auto____8882 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8883 = (cljs.core._conj[goog.typeOf(x__2363__auto____8882)]);
if(or__3824__auto____8883)
{return or__3824__auto____8883;
} else
{var or__3824__auto____8884 = (cljs.core._conj["_"]);
if(or__3824__auto____8884)
{return or__3824__auto____8884;
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
if((function (){var and__3822__auto____8893 = coll;
if(and__3822__auto____8893)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____8893;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2363__auto____8894 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8895 = (cljs.core._nth[goog.typeOf(x__2363__auto____8894)]);
if(or__3824__auto____8895)
{return or__3824__auto____8895;
} else
{var or__3824__auto____8896 = (cljs.core._nth["_"]);
if(or__3824__auto____8896)
{return or__3824__auto____8896;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____8897 = coll;
if(and__3822__auto____8897)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____8897;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2363__auto____8898 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8899 = (cljs.core._nth[goog.typeOf(x__2363__auto____8898)]);
if(or__3824__auto____8899)
{return or__3824__auto____8899;
} else
{var or__3824__auto____8900 = (cljs.core._nth["_"]);
if(or__3824__auto____8900)
{return or__3824__auto____8900;
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
if((function (){var and__3822__auto____8905 = coll;
if(and__3822__auto____8905)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____8905;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2363__auto____8906 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8907 = (cljs.core._first[goog.typeOf(x__2363__auto____8906)]);
if(or__3824__auto____8907)
{return or__3824__auto____8907;
} else
{var or__3824__auto____8908 = (cljs.core._first["_"]);
if(or__3824__auto____8908)
{return or__3824__auto____8908;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____8913 = coll;
if(and__3822__auto____8913)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____8913;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2363__auto____8914 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8915 = (cljs.core._rest[goog.typeOf(x__2363__auto____8914)]);
if(or__3824__auto____8915)
{return or__3824__auto____8915;
} else
{var or__3824__auto____8916 = (cljs.core._rest["_"]);
if(or__3824__auto____8916)
{return or__3824__auto____8916;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____8921 = coll;
if(and__3822__auto____8921)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____8921;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2363__auto____8922 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8923 = (cljs.core._next[goog.typeOf(x__2363__auto____8922)]);
if(or__3824__auto____8923)
{return or__3824__auto____8923;
} else
{var or__3824__auto____8924 = (cljs.core._next["_"]);
if(or__3824__auto____8924)
{return or__3824__auto____8924;
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
if((function (){var and__3822__auto____8933 = o;
if(and__3822__auto____8933)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____8933;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2363__auto____8934 = (((o == null))?null:o);
return (function (){var or__3824__auto____8935 = (cljs.core._lookup[goog.typeOf(x__2363__auto____8934)]);
if(or__3824__auto____8935)
{return or__3824__auto____8935;
} else
{var or__3824__auto____8936 = (cljs.core._lookup["_"]);
if(or__3824__auto____8936)
{return or__3824__auto____8936;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____8937 = o;
if(and__3822__auto____8937)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____8937;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2363__auto____8938 = (((o == null))?null:o);
return (function (){var or__3824__auto____8939 = (cljs.core._lookup[goog.typeOf(x__2363__auto____8938)]);
if(or__3824__auto____8939)
{return or__3824__auto____8939;
} else
{var or__3824__auto____8940 = (cljs.core._lookup["_"]);
if(or__3824__auto____8940)
{return or__3824__auto____8940;
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
if((function (){var and__3822__auto____8945 = coll;
if(and__3822__auto____8945)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____8945;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2363__auto____8946 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8947 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2363__auto____8946)]);
if(or__3824__auto____8947)
{return or__3824__auto____8947;
} else
{var or__3824__auto____8948 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____8948)
{return or__3824__auto____8948;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____8953 = coll;
if(and__3822__auto____8953)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____8953;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2363__auto____8954 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8955 = (cljs.core._assoc[goog.typeOf(x__2363__auto____8954)]);
if(or__3824__auto____8955)
{return or__3824__auto____8955;
} else
{var or__3824__auto____8956 = (cljs.core._assoc["_"]);
if(or__3824__auto____8956)
{return or__3824__auto____8956;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____8961 = coll;
if(and__3822__auto____8961)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____8961;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2363__auto____8962 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8963 = (cljs.core._dissoc[goog.typeOf(x__2363__auto____8962)]);
if(or__3824__auto____8963)
{return or__3824__auto____8963;
} else
{var or__3824__auto____8964 = (cljs.core._dissoc["_"]);
if(or__3824__auto____8964)
{return or__3824__auto____8964;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____8969 = coll;
if(and__3822__auto____8969)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____8969;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2363__auto____8970 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8971 = (cljs.core._key[goog.typeOf(x__2363__auto____8970)]);
if(or__3824__auto____8971)
{return or__3824__auto____8971;
} else
{var or__3824__auto____8972 = (cljs.core._key["_"]);
if(or__3824__auto____8972)
{return or__3824__auto____8972;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____8977 = coll;
if(and__3822__auto____8977)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____8977;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2363__auto____8978 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8979 = (cljs.core._val[goog.typeOf(x__2363__auto____8978)]);
if(or__3824__auto____8979)
{return or__3824__auto____8979;
} else
{var or__3824__auto____8980 = (cljs.core._val["_"]);
if(or__3824__auto____8980)
{return or__3824__auto____8980;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____8985 = coll;
if(and__3822__auto____8985)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____8985;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2363__auto____8986 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8987 = (cljs.core._disjoin[goog.typeOf(x__2363__auto____8986)]);
if(or__3824__auto____8987)
{return or__3824__auto____8987;
} else
{var or__3824__auto____8988 = (cljs.core._disjoin["_"]);
if(or__3824__auto____8988)
{return or__3824__auto____8988;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____8993 = coll;
if(and__3822__auto____8993)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____8993;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2363__auto____8994 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8995 = (cljs.core._peek[goog.typeOf(x__2363__auto____8994)]);
if(or__3824__auto____8995)
{return or__3824__auto____8995;
} else
{var or__3824__auto____8996 = (cljs.core._peek["_"]);
if(or__3824__auto____8996)
{return or__3824__auto____8996;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____9001 = coll;
if(and__3822__auto____9001)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____9001;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2363__auto____9002 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9003 = (cljs.core._pop[goog.typeOf(x__2363__auto____9002)]);
if(or__3824__auto____9003)
{return or__3824__auto____9003;
} else
{var or__3824__auto____9004 = (cljs.core._pop["_"]);
if(or__3824__auto____9004)
{return or__3824__auto____9004;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____9009 = coll;
if(and__3822__auto____9009)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____9009;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2363__auto____9010 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9011 = (cljs.core._assoc_n[goog.typeOf(x__2363__auto____9010)]);
if(or__3824__auto____9011)
{return or__3824__auto____9011;
} else
{var or__3824__auto____9012 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____9012)
{return or__3824__auto____9012;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____9017 = o;
if(and__3822__auto____9017)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____9017;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2363__auto____9018 = (((o == null))?null:o);
return (function (){var or__3824__auto____9019 = (cljs.core._deref[goog.typeOf(x__2363__auto____9018)]);
if(or__3824__auto____9019)
{return or__3824__auto____9019;
} else
{var or__3824__auto____9020 = (cljs.core._deref["_"]);
if(or__3824__auto____9020)
{return or__3824__auto____9020;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____9025 = o;
if(and__3822__auto____9025)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____9025;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2363__auto____9026 = (((o == null))?null:o);
return (function (){var or__3824__auto____9027 = (cljs.core._deref_with_timeout[goog.typeOf(x__2363__auto____9026)]);
if(or__3824__auto____9027)
{return or__3824__auto____9027;
} else
{var or__3824__auto____9028 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____9028)
{return or__3824__auto____9028;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____9033 = o;
if(and__3822__auto____9033)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____9033;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2363__auto____9034 = (((o == null))?null:o);
return (function (){var or__3824__auto____9035 = (cljs.core._meta[goog.typeOf(x__2363__auto____9034)]);
if(or__3824__auto____9035)
{return or__3824__auto____9035;
} else
{var or__3824__auto____9036 = (cljs.core._meta["_"]);
if(or__3824__auto____9036)
{return or__3824__auto____9036;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____9041 = o;
if(and__3822__auto____9041)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____9041;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2363__auto____9042 = (((o == null))?null:o);
return (function (){var or__3824__auto____9043 = (cljs.core._with_meta[goog.typeOf(x__2363__auto____9042)]);
if(or__3824__auto____9043)
{return or__3824__auto____9043;
} else
{var or__3824__auto____9044 = (cljs.core._with_meta["_"]);
if(or__3824__auto____9044)
{return or__3824__auto____9044;
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
if((function (){var and__3822__auto____9053 = coll;
if(and__3822__auto____9053)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____9053;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2363__auto____9054 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9055 = (cljs.core._reduce[goog.typeOf(x__2363__auto____9054)]);
if(or__3824__auto____9055)
{return or__3824__auto____9055;
} else
{var or__3824__auto____9056 = (cljs.core._reduce["_"]);
if(or__3824__auto____9056)
{return or__3824__auto____9056;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____9057 = coll;
if(and__3822__auto____9057)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____9057;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2363__auto____9058 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9059 = (cljs.core._reduce[goog.typeOf(x__2363__auto____9058)]);
if(or__3824__auto____9059)
{return or__3824__auto____9059;
} else
{var or__3824__auto____9060 = (cljs.core._reduce["_"]);
if(or__3824__auto____9060)
{return or__3824__auto____9060;
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
if((function (){var and__3822__auto____9065 = coll;
if(and__3822__auto____9065)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____9065;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2363__auto____9066 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9067 = (cljs.core._kv_reduce[goog.typeOf(x__2363__auto____9066)]);
if(or__3824__auto____9067)
{return or__3824__auto____9067;
} else
{var or__3824__auto____9068 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____9068)
{return or__3824__auto____9068;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____9073 = o;
if(and__3822__auto____9073)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____9073;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2363__auto____9074 = (((o == null))?null:o);
return (function (){var or__3824__auto____9075 = (cljs.core._equiv[goog.typeOf(x__2363__auto____9074)]);
if(or__3824__auto____9075)
{return or__3824__auto____9075;
} else
{var or__3824__auto____9076 = (cljs.core._equiv["_"]);
if(or__3824__auto____9076)
{return or__3824__auto____9076;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____9081 = o;
if(and__3822__auto____9081)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____9081;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2363__auto____9082 = (((o == null))?null:o);
return (function (){var or__3824__auto____9083 = (cljs.core._hash[goog.typeOf(x__2363__auto____9082)]);
if(or__3824__auto____9083)
{return or__3824__auto____9083;
} else
{var or__3824__auto____9084 = (cljs.core._hash["_"]);
if(or__3824__auto____9084)
{return or__3824__auto____9084;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____9089 = o;
if(and__3822__auto____9089)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____9089;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2363__auto____9090 = (((o == null))?null:o);
return (function (){var or__3824__auto____9091 = (cljs.core._seq[goog.typeOf(x__2363__auto____9090)]);
if(or__3824__auto____9091)
{return or__3824__auto____9091;
} else
{var or__3824__auto____9092 = (cljs.core._seq["_"]);
if(or__3824__auto____9092)
{return or__3824__auto____9092;
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
if((function (){var and__3822__auto____9097 = coll;
if(and__3822__auto____9097)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____9097;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2363__auto____9098 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9099 = (cljs.core._rseq[goog.typeOf(x__2363__auto____9098)]);
if(or__3824__auto____9099)
{return or__3824__auto____9099;
} else
{var or__3824__auto____9100 = (cljs.core._rseq["_"]);
if(or__3824__auto____9100)
{return or__3824__auto____9100;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____9105 = coll;
if(and__3822__auto____9105)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____9105;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2363__auto____9106 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9107 = (cljs.core._sorted_seq[goog.typeOf(x__2363__auto____9106)]);
if(or__3824__auto____9107)
{return or__3824__auto____9107;
} else
{var or__3824__auto____9108 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____9108)
{return or__3824__auto____9108;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____9113 = coll;
if(and__3822__auto____9113)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____9113;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2363__auto____9114 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9115 = (cljs.core._sorted_seq_from[goog.typeOf(x__2363__auto____9114)]);
if(or__3824__auto____9115)
{return or__3824__auto____9115;
} else
{var or__3824__auto____9116 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____9116)
{return or__3824__auto____9116;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____9121 = coll;
if(and__3822__auto____9121)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____9121;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2363__auto____9122 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9123 = (cljs.core._entry_key[goog.typeOf(x__2363__auto____9122)]);
if(or__3824__auto____9123)
{return or__3824__auto____9123;
} else
{var or__3824__auto____9124 = (cljs.core._entry_key["_"]);
if(or__3824__auto____9124)
{return or__3824__auto____9124;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____9129 = coll;
if(and__3822__auto____9129)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____9129;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2363__auto____9130 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9131 = (cljs.core._comparator[goog.typeOf(x__2363__auto____9130)]);
if(or__3824__auto____9131)
{return or__3824__auto____9131;
} else
{var or__3824__auto____9132 = (cljs.core._comparator["_"]);
if(or__3824__auto____9132)
{return or__3824__auto____9132;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____9137 = o;
if(and__3822__auto____9137)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____9137;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2363__auto____9138 = (((o == null))?null:o);
return (function (){var or__3824__auto____9139 = (cljs.core._pr_seq[goog.typeOf(x__2363__auto____9138)]);
if(or__3824__auto____9139)
{return or__3824__auto____9139;
} else
{var or__3824__auto____9140 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____9140)
{return or__3824__auto____9140;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____9145 = d;
if(and__3822__auto____9145)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____9145;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2363__auto____9146 = (((d == null))?null:d);
return (function (){var or__3824__auto____9147 = (cljs.core._realized_QMARK_[goog.typeOf(x__2363__auto____9146)]);
if(or__3824__auto____9147)
{return or__3824__auto____9147;
} else
{var or__3824__auto____9148 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____9148)
{return or__3824__auto____9148;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____9153 = this$;
if(and__3822__auto____9153)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____9153;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2363__auto____9154 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9155 = (cljs.core._notify_watches[goog.typeOf(x__2363__auto____9154)]);
if(or__3824__auto____9155)
{return or__3824__auto____9155;
} else
{var or__3824__auto____9156 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____9156)
{return or__3824__auto____9156;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____9161 = this$;
if(and__3822__auto____9161)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____9161;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2363__auto____9162 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9163 = (cljs.core._add_watch[goog.typeOf(x__2363__auto____9162)]);
if(or__3824__auto____9163)
{return or__3824__auto____9163;
} else
{var or__3824__auto____9164 = (cljs.core._add_watch["_"]);
if(or__3824__auto____9164)
{return or__3824__auto____9164;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____9169 = this$;
if(and__3822__auto____9169)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____9169;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2363__auto____9170 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9171 = (cljs.core._remove_watch[goog.typeOf(x__2363__auto____9170)]);
if(or__3824__auto____9171)
{return or__3824__auto____9171;
} else
{var or__3824__auto____9172 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____9172)
{return or__3824__auto____9172;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____9177 = coll;
if(and__3822__auto____9177)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____9177;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2363__auto____9178 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9179 = (cljs.core._as_transient[goog.typeOf(x__2363__auto____9178)]);
if(or__3824__auto____9179)
{return or__3824__auto____9179;
} else
{var or__3824__auto____9180 = (cljs.core._as_transient["_"]);
if(or__3824__auto____9180)
{return or__3824__auto____9180;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____9185 = tcoll;
if(and__3822__auto____9185)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____9185;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2363__auto____9186 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9187 = (cljs.core._conj_BANG_[goog.typeOf(x__2363__auto____9186)]);
if(or__3824__auto____9187)
{return or__3824__auto____9187;
} else
{var or__3824__auto____9188 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____9188)
{return or__3824__auto____9188;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____9193 = tcoll;
if(and__3822__auto____9193)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____9193;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2363__auto____9194 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9195 = (cljs.core._persistent_BANG_[goog.typeOf(x__2363__auto____9194)]);
if(or__3824__auto____9195)
{return or__3824__auto____9195;
} else
{var or__3824__auto____9196 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____9196)
{return or__3824__auto____9196;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____9201 = tcoll;
if(and__3822__auto____9201)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____9201;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2363__auto____9202 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9203 = (cljs.core._assoc_BANG_[goog.typeOf(x__2363__auto____9202)]);
if(or__3824__auto____9203)
{return or__3824__auto____9203;
} else
{var or__3824__auto____9204 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____9204)
{return or__3824__auto____9204;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____9209 = tcoll;
if(and__3822__auto____9209)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____9209;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2363__auto____9210 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9211 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2363__auto____9210)]);
if(or__3824__auto____9211)
{return or__3824__auto____9211;
} else
{var or__3824__auto____9212 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____9212)
{return or__3824__auto____9212;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____9217 = tcoll;
if(and__3822__auto____9217)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____9217;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2363__auto____9218 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9219 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2363__auto____9218)]);
if(or__3824__auto____9219)
{return or__3824__auto____9219;
} else
{var or__3824__auto____9220 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____9220)
{return or__3824__auto____9220;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____9225 = tcoll;
if(and__3822__auto____9225)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____9225;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2363__auto____9226 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9227 = (cljs.core._pop_BANG_[goog.typeOf(x__2363__auto____9226)]);
if(or__3824__auto____9227)
{return or__3824__auto____9227;
} else
{var or__3824__auto____9228 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____9228)
{return or__3824__auto____9228;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____9233 = tcoll;
if(and__3822__auto____9233)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____9233;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2363__auto____9234 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9235 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2363__auto____9234)]);
if(or__3824__auto____9235)
{return or__3824__auto____9235;
} else
{var or__3824__auto____9236 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____9236)
{return or__3824__auto____9236;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____9241 = x;
if(and__3822__auto____9241)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____9241;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2363__auto____9242 = (((x == null))?null:x);
return (function (){var or__3824__auto____9243 = (cljs.core._compare[goog.typeOf(x__2363__auto____9242)]);
if(or__3824__auto____9243)
{return or__3824__auto____9243;
} else
{var or__3824__auto____9244 = (cljs.core._compare["_"]);
if(or__3824__auto____9244)
{return or__3824__auto____9244;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____9249 = coll;
if(and__3822__auto____9249)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____9249;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2363__auto____9250 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9251 = (cljs.core._drop_first[goog.typeOf(x__2363__auto____9250)]);
if(or__3824__auto____9251)
{return or__3824__auto____9251;
} else
{var or__3824__auto____9252 = (cljs.core._drop_first["_"]);
if(or__3824__auto____9252)
{return or__3824__auto____9252;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____9257 = coll;
if(and__3822__auto____9257)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____9257;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2363__auto____9258 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9259 = (cljs.core._chunked_first[goog.typeOf(x__2363__auto____9258)]);
if(or__3824__auto____9259)
{return or__3824__auto____9259;
} else
{var or__3824__auto____9260 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____9260)
{return or__3824__auto____9260;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____9265 = coll;
if(and__3822__auto____9265)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____9265;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2363__auto____9266 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9267 = (cljs.core._chunked_rest[goog.typeOf(x__2363__auto____9266)]);
if(or__3824__auto____9267)
{return or__3824__auto____9267;
} else
{var or__3824__auto____9268 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____9268)
{return or__3824__auto____9268;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____9273 = coll;
if(and__3822__auto____9273)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____9273;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2363__auto____9274 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9275 = (cljs.core._chunked_next[goog.typeOf(x__2363__auto____9274)]);
if(or__3824__auto____9275)
{return or__3824__auto____9275;
} else
{var or__3824__auto____9276 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____9276)
{return or__3824__auto____9276;
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
var or__3824__auto____9278 = (x === y);
if(or__3824__auto____9278)
{return or__3824__auto____9278;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__9279__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__9280 = y;
var G__9281 = cljs.core.first.call(null,more);
var G__9282 = cljs.core.next.call(null,more);
x = G__9280;
y = G__9281;
more = G__9282;
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
var G__9279 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9279__delegate.call(this, x, y, more);
};
G__9279.cljs$lang$maxFixedArity = 2;
G__9279.cljs$lang$applyTo = (function (arglist__9283){
var x = cljs.core.first(arglist__9283);
var y = cljs.core.first(cljs.core.next(arglist__9283));
var more = cljs.core.rest(cljs.core.next(arglist__9283));
return G__9279__delegate(x, y, more);
});
G__9279.cljs$lang$arity$variadic = G__9279__delegate;
return G__9279;
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
var G__9284 = null;
var G__9284__2 = (function (o,k){
return null;
});
var G__9284__3 = (function (o,k,not_found){
return not_found;
});
G__9284 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__9284__2.call(this,o,k);
case 3:
return G__9284__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9284;
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
var G__9285 = null;
var G__9285__2 = (function (_,f){
return f.call(null);
});
var G__9285__3 = (function (_,f,start){
return start;
});
G__9285 = function(_,f,start){
switch(arguments.length){
case 2:
return G__9285__2.call(this,_,f);
case 3:
return G__9285__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9285;
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
var G__9286 = null;
var G__9286__2 = (function (_,n){
return null;
});
var G__9286__3 = (function (_,n,not_found){
return not_found;
});
G__9286 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__9286__2.call(this,_,n);
case 3:
return G__9286__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9286;
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
var and__3822__auto____9287 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____9287)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____9287;
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
var cnt__9300 = cljs.core._count.call(null,cicoll);
if((cnt__9300 === 0))
{return f.call(null);
} else
{var val__9301 = cljs.core._nth.call(null,cicoll,0);
var n__9302 = 1;
while(true){
if((n__9302 < cnt__9300))
{var nval__9303 = f.call(null,val__9301,cljs.core._nth.call(null,cicoll,n__9302));
if(cljs.core.reduced_QMARK_.call(null,nval__9303))
{return cljs.core.deref.call(null,nval__9303);
} else
{{
var G__9312 = nval__9303;
var G__9313 = (n__9302 + 1);
val__9301 = G__9312;
n__9302 = G__9313;
continue;
}
}
} else
{return val__9301;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__9304 = cljs.core._count.call(null,cicoll);
var val__9305 = val;
var n__9306 = 0;
while(true){
if((n__9306 < cnt__9304))
{var nval__9307 = f.call(null,val__9305,cljs.core._nth.call(null,cicoll,n__9306));
if(cljs.core.reduced_QMARK_.call(null,nval__9307))
{return cljs.core.deref.call(null,nval__9307);
} else
{{
var G__9314 = nval__9307;
var G__9315 = (n__9306 + 1);
val__9305 = G__9314;
n__9306 = G__9315;
continue;
}
}
} else
{return val__9305;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__9308 = cljs.core._count.call(null,cicoll);
var val__9309 = val;
var n__9310 = idx;
while(true){
if((n__9310 < cnt__9308))
{var nval__9311 = f.call(null,val__9309,cljs.core._nth.call(null,cicoll,n__9310));
if(cljs.core.reduced_QMARK_.call(null,nval__9311))
{return cljs.core.deref.call(null,nval__9311);
} else
{{
var G__9316 = nval__9311;
var G__9317 = (n__9310 + 1);
val__9309 = G__9316;
n__9310 = G__9317;
continue;
}
}
} else
{return val__9309;
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
var cnt__9330 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__9331 = (arr[0]);
var n__9332 = 1;
while(true){
if((n__9332 < cnt__9330))
{var nval__9333 = f.call(null,val__9331,(arr[n__9332]));
if(cljs.core.reduced_QMARK_.call(null,nval__9333))
{return cljs.core.deref.call(null,nval__9333);
} else
{{
var G__9342 = nval__9333;
var G__9343 = (n__9332 + 1);
val__9331 = G__9342;
n__9332 = G__9343;
continue;
}
}
} else
{return val__9331;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__9334 = arr.length;
var val__9335 = val;
var n__9336 = 0;
while(true){
if((n__9336 < cnt__9334))
{var nval__9337 = f.call(null,val__9335,(arr[n__9336]));
if(cljs.core.reduced_QMARK_.call(null,nval__9337))
{return cljs.core.deref.call(null,nval__9337);
} else
{{
var G__9344 = nval__9337;
var G__9345 = (n__9336 + 1);
val__9335 = G__9344;
n__9336 = G__9345;
continue;
}
}
} else
{return val__9335;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__9338 = arr.length;
var val__9339 = val;
var n__9340 = idx;
while(true){
if((n__9340 < cnt__9338))
{var nval__9341 = f.call(null,val__9339,(arr[n__9340]));
if(cljs.core.reduced_QMARK_.call(null,nval__9341))
{return cljs.core.deref.call(null,nval__9341);
} else
{{
var G__9346 = nval__9341;
var G__9347 = (n__9340 + 1);
val__9339 = G__9346;
n__9340 = G__9347;
continue;
}
}
} else
{return val__9339;
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
var this__9348 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__9349 = this;
if(((this__9349.i + 1) < this__9349.a.length))
{return (new cljs.core.IndexedSeq(this__9349.a,(this__9349.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9350 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9351 = this;
var c__9352 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__9352 > 0))
{return (new cljs.core.RSeq(coll,(c__9352 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__9353 = this;
var this__9354 = this;
return cljs.core.pr_str.call(null,this__9354);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9355 = this;
if(cljs.core.counted_QMARK_.call(null,this__9355.a))
{return cljs.core.ci_reduce.call(null,this__9355.a,f,(this__9355.a[this__9355.i]),(this__9355.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__9355.a[this__9355.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9356 = this;
if(cljs.core.counted_QMARK_.call(null,this__9356.a))
{return cljs.core.ci_reduce.call(null,this__9356.a,f,start,this__9356.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9357 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9358 = this;
return (this__9358.a.length - this__9358.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__9359 = this;
return (this__9359.a[this__9359.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__9360 = this;
if(((this__9360.i + 1) < this__9360.a.length))
{return (new cljs.core.IndexedSeq(this__9360.a,(this__9360.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9361 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9362 = this;
var i__9363 = (n + this__9362.i);
if((i__9363 < this__9362.a.length))
{return (this__9362.a[i__9363]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9364 = this;
var i__9365 = (n + this__9364.i);
if((i__9365 < this__9364.a.length))
{return (this__9364.a[i__9365]);
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
var G__9366 = null;
var G__9366__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__9366__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__9366 = function(array,f,start){
switch(arguments.length){
case 2:
return G__9366__2.call(this,array,f);
case 3:
return G__9366__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9366;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__9367 = null;
var G__9367__2 = (function (array,k){
return (array[k]);
});
var G__9367__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__9367 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__9367__2.call(this,array,k);
case 3:
return G__9367__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9367;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__9368 = null;
var G__9368__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__9368__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__9368 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__9368__2.call(this,array,n);
case 3:
return G__9368__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9368;
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
var this__9369 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9370 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__9371 = this;
var this__9372 = this;
return cljs.core.pr_str.call(null,this__9372);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9373 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9374 = this;
return (this__9374.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9375 = this;
return cljs.core._nth.call(null,this__9375.ci,this__9375.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9376 = this;
if((this__9376.i > 0))
{return (new cljs.core.RSeq(this__9376.ci,(this__9376.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9377 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__9378 = this;
return (new cljs.core.RSeq(this__9378.ci,this__9378.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9379 = this;
return this__9379.meta;
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
{if((function (){var G__9383__9384 = coll;
if(G__9383__9384)
{if((function (){var or__3824__auto____9385 = (G__9383__9384.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____9385)
{return or__3824__auto____9385;
} else
{return G__9383__9384.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__9383__9384.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9383__9384);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9383__9384);
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
{if((function (){var G__9390__9391 = coll;
if(G__9390__9391)
{if((function (){var or__3824__auto____9392 = (G__9390__9391.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9392)
{return or__3824__auto____9392;
} else
{return G__9390__9391.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9390__9391.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9390__9391);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9390__9391);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__9393 = cljs.core.seq.call(null,coll);
if((s__9393 == null))
{return null;
} else
{return cljs.core._first.call(null,s__9393);
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
{if((function (){var G__9398__9399 = coll;
if(G__9398__9399)
{if((function (){var or__3824__auto____9400 = (G__9398__9399.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9400)
{return or__3824__auto____9400;
} else
{return G__9398__9399.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9398__9399.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9398__9399);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9398__9399);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__9401 = cljs.core.seq.call(null,coll);
if(!((s__9401 == null)))
{return cljs.core._rest.call(null,s__9401);
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
{if((function (){var G__9405__9406 = coll;
if(G__9405__9406)
{if((function (){var or__3824__auto____9407 = (G__9405__9406.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____9407)
{return or__3824__auto____9407;
} else
{return G__9405__9406.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__9405__9406.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__9405__9406);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__9405__9406);
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
var sn__9409 = cljs.core.next.call(null,s);
if(!((sn__9409 == null)))
{{
var G__9410 = sn__9409;
s = G__9410;
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
var G__9411__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__9412 = conj.call(null,coll,x);
var G__9413 = cljs.core.first.call(null,xs);
var G__9414 = cljs.core.next.call(null,xs);
coll = G__9412;
x = G__9413;
xs = G__9414;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__9411 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9411__delegate.call(this, coll, x, xs);
};
G__9411.cljs$lang$maxFixedArity = 2;
G__9411.cljs$lang$applyTo = (function (arglist__9415){
var coll = cljs.core.first(arglist__9415);
var x = cljs.core.first(cljs.core.next(arglist__9415));
var xs = cljs.core.rest(cljs.core.next(arglist__9415));
return G__9411__delegate(coll, x, xs);
});
G__9411.cljs$lang$arity$variadic = G__9411__delegate;
return G__9411;
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
var s__9418 = cljs.core.seq.call(null,coll);
var acc__9419 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__9418))
{return (acc__9419 + cljs.core._count.call(null,s__9418));
} else
{{
var G__9420 = cljs.core.next.call(null,s__9418);
var G__9421 = (acc__9419 + 1);
s__9418 = G__9420;
acc__9419 = G__9421;
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
{if((function (){var G__9428__9429 = coll;
if(G__9428__9429)
{if((function (){var or__3824__auto____9430 = (G__9428__9429.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____9430)
{return or__3824__auto____9430;
} else
{return G__9428__9429.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9428__9429.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9428__9429);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9428__9429);
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
{if((function (){var G__9431__9432 = coll;
if(G__9431__9432)
{if((function (){var or__3824__auto____9433 = (G__9431__9432.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____9433)
{return or__3824__auto____9433;
} else
{return G__9431__9432.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9431__9432.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9431__9432);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9431__9432);
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
var G__9436__delegate = function (coll,k,v,kvs){
while(true){
var ret__9435 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__9437 = ret__9435;
var G__9438 = cljs.core.first.call(null,kvs);
var G__9439 = cljs.core.second.call(null,kvs);
var G__9440 = cljs.core.nnext.call(null,kvs);
coll = G__9437;
k = G__9438;
v = G__9439;
kvs = G__9440;
continue;
}
} else
{return ret__9435;
}
break;
}
};
var G__9436 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9436__delegate.call(this, coll, k, v, kvs);
};
G__9436.cljs$lang$maxFixedArity = 3;
G__9436.cljs$lang$applyTo = (function (arglist__9441){
var coll = cljs.core.first(arglist__9441);
var k = cljs.core.first(cljs.core.next(arglist__9441));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9441)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9441)));
return G__9436__delegate(coll, k, v, kvs);
});
G__9436.cljs$lang$arity$variadic = G__9436__delegate;
return G__9436;
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
var G__9444__delegate = function (coll,k,ks){
while(true){
var ret__9443 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__9445 = ret__9443;
var G__9446 = cljs.core.first.call(null,ks);
var G__9447 = cljs.core.next.call(null,ks);
coll = G__9445;
k = G__9446;
ks = G__9447;
continue;
}
} else
{return ret__9443;
}
break;
}
};
var G__9444 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9444__delegate.call(this, coll, k, ks);
};
G__9444.cljs$lang$maxFixedArity = 2;
G__9444.cljs$lang$applyTo = (function (arglist__9448){
var coll = cljs.core.first(arglist__9448);
var k = cljs.core.first(cljs.core.next(arglist__9448));
var ks = cljs.core.rest(cljs.core.next(arglist__9448));
return G__9444__delegate(coll, k, ks);
});
G__9444.cljs$lang$arity$variadic = G__9444__delegate;
return G__9444;
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
if((function (){var G__9452__9453 = o;
if(G__9452__9453)
{if((function (){var or__3824__auto____9454 = (G__9452__9453.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9454)
{return or__3824__auto____9454;
} else
{return G__9452__9453.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9452__9453.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9452__9453);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9452__9453);
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
var G__9457__delegate = function (coll,k,ks){
while(true){
var ret__9456 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__9458 = ret__9456;
var G__9459 = cljs.core.first.call(null,ks);
var G__9460 = cljs.core.next.call(null,ks);
coll = G__9458;
k = G__9459;
ks = G__9460;
continue;
}
} else
{return ret__9456;
}
break;
}
};
var G__9457 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9457__delegate.call(this, coll, k, ks);
};
G__9457.cljs$lang$maxFixedArity = 2;
G__9457.cljs$lang$applyTo = (function (arglist__9461){
var coll = cljs.core.first(arglist__9461);
var k = cljs.core.first(cljs.core.next(arglist__9461));
var ks = cljs.core.rest(cljs.core.next(arglist__9461));
return G__9457__delegate(coll, k, ks);
});
G__9457.cljs$lang$arity$variadic = G__9457__delegate;
return G__9457;
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
var h__9463 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__9463);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__9463;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__9465 = (cljs.core.string_hash_cache[k]);
if(!((h__9465 == null)))
{return h__9465;
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
if((function (){var and__3822__auto____9467 = goog.isString(o);
if(and__3822__auto____9467)
{return check_cache;
} else
{return and__3822__auto____9467;
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
{var G__9471__9472 = x;
if(G__9471__9472)
{if((function (){var or__3824__auto____9473 = (G__9471__9472.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____9473)
{return or__3824__auto____9473;
} else
{return G__9471__9472.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__9471__9472.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__9471__9472);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__9471__9472);
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
{var G__9477__9478 = x;
if(G__9477__9478)
{if((function (){var or__3824__auto____9479 = (G__9477__9478.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____9479)
{return or__3824__auto____9479;
} else
{return G__9477__9478.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__9477__9478.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__9477__9478);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__9477__9478);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__9483__9484 = x;
if(G__9483__9484)
{if((function (){var or__3824__auto____9485 = (G__9483__9484.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____9485)
{return or__3824__auto____9485;
} else
{return G__9483__9484.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__9483__9484.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__9483__9484);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__9483__9484);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__9489__9490 = x;
if(G__9489__9490)
{if((function (){var or__3824__auto____9491 = (G__9489__9490.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____9491)
{return or__3824__auto____9491;
} else
{return G__9489__9490.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__9489__9490.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__9489__9490);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__9489__9490);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__9495__9496 = x;
if(G__9495__9496)
{if((function (){var or__3824__auto____9497 = (G__9495__9496.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____9497)
{return or__3824__auto____9497;
} else
{return G__9495__9496.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__9495__9496.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__9495__9496);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__9495__9496);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__9501__9502 = x;
if(G__9501__9502)
{if((function (){var or__3824__auto____9503 = (G__9501__9502.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____9503)
{return or__3824__auto____9503;
} else
{return G__9501__9502.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9501__9502.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9501__9502);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9501__9502);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__9507__9508 = x;
if(G__9507__9508)
{if((function (){var or__3824__auto____9509 = (G__9507__9508.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____9509)
{return or__3824__auto____9509;
} else
{return G__9507__9508.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9507__9508.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9507__9508);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9507__9508);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__9513__9514 = x;
if(G__9513__9514)
{if((function (){var or__3824__auto____9515 = (G__9513__9514.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____9515)
{return or__3824__auto____9515;
} else
{return G__9513__9514.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__9513__9514.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__9513__9514);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__9513__9514);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__9519__9520 = x;
if(G__9519__9520)
{if((function (){var or__3824__auto____9521 = (G__9519__9520.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____9521)
{return or__3824__auto____9521;
} else
{return G__9519__9520.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__9519__9520.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__9519__9520);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__9519__9520);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__9525__9526 = x;
if(G__9525__9526)
{if(cljs.core.truth_((function (){var or__3824__auto____9527 = null;
if(cljs.core.truth_(or__3824__auto____9527))
{return or__3824__auto____9527;
} else
{return G__9525__9526.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__9525__9526.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__9525__9526);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__9525__9526);
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
var G__9528__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__9528 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9528__delegate.call(this, keyvals);
};
G__9528.cljs$lang$maxFixedArity = 0;
G__9528.cljs$lang$applyTo = (function (arglist__9529){
var keyvals = cljs.core.seq(arglist__9529);;
return G__9528__delegate(keyvals);
});
G__9528.cljs$lang$arity$variadic = G__9528__delegate;
return G__9528;
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
var keys__9531 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__9531.push(key);
}));
return keys__9531;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__9535 = i;
var j__9536 = j;
var len__9537 = len;
while(true){
if((len__9537 === 0))
{return to;
} else
{(to[j__9536] = (from[i__9535]));
{
var G__9538 = (i__9535 + 1);
var G__9539 = (j__9536 + 1);
var G__9540 = (len__9537 - 1);
i__9535 = G__9538;
j__9536 = G__9539;
len__9537 = G__9540;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__9544 = (i + (len - 1));
var j__9545 = (j + (len - 1));
var len__9546 = len;
while(true){
if((len__9546 === 0))
{return to;
} else
{(to[j__9545] = (from[i__9544]));
{
var G__9547 = (i__9544 - 1);
var G__9548 = (j__9545 - 1);
var G__9549 = (len__9546 - 1);
i__9544 = G__9547;
j__9545 = G__9548;
len__9546 = G__9549;
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
{var G__9553__9554 = s;
if(G__9553__9554)
{if((function (){var or__3824__auto____9555 = (G__9553__9554.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9555)
{return or__3824__auto____9555;
} else
{return G__9553__9554.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9553__9554.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9553__9554);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9553__9554);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__9559__9560 = s;
if(G__9559__9560)
{if((function (){var or__3824__auto____9561 = (G__9559__9560.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____9561)
{return or__3824__auto____9561;
} else
{return G__9559__9560.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__9559__9560.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__9559__9560);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__9559__9560);
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
var and__3822__auto____9564 = goog.isString(x);
if(and__3822__auto____9564)
{return !((function (){var or__3824__auto____9565 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____9565)
{return or__3824__auto____9565;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____9564;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____9567 = goog.isString(x);
if(and__3822__auto____9567)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____9567;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____9569 = goog.isString(x);
if(and__3822__auto____9569)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____9569;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____9574 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____9574)
{return or__3824__auto____9574;
} else
{var G__9575__9576 = f;
if(G__9575__9576)
{if((function (){var or__3824__auto____9577 = (G__9575__9576.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____9577)
{return or__3824__auto____9577;
} else
{return G__9575__9576.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__9575__9576.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__9575__9576);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__9575__9576);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____9579 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____9579)
{return (n == n.toFixed());
} else
{return and__3822__auto____9579;
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
if(cljs.core.truth_((function (){var and__3822__auto____9582 = coll;
if(cljs.core.truth_(and__3822__auto____9582))
{var and__3822__auto____9583 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____9583)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____9583;
}
} else
{return and__3822__auto____9582;
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
var G__9592__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__9588 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__9589 = more;
while(true){
var x__9590 = cljs.core.first.call(null,xs__9589);
var etc__9591 = cljs.core.next.call(null,xs__9589);
if(cljs.core.truth_(xs__9589))
{if(cljs.core.contains_QMARK_.call(null,s__9588,x__9590))
{return false;
} else
{{
var G__9593 = cljs.core.conj.call(null,s__9588,x__9590);
var G__9594 = etc__9591;
s__9588 = G__9593;
xs__9589 = G__9594;
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
var G__9592 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9592__delegate.call(this, x, y, more);
};
G__9592.cljs$lang$maxFixedArity = 2;
G__9592.cljs$lang$applyTo = (function (arglist__9595){
var x = cljs.core.first(arglist__9595);
var y = cljs.core.first(cljs.core.next(arglist__9595));
var more = cljs.core.rest(cljs.core.next(arglist__9595));
return G__9592__delegate(x, y, more);
});
G__9592.cljs$lang$arity$variadic = G__9592__delegate;
return G__9592;
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
{if((function (){var G__9599__9600 = x;
if(G__9599__9600)
{if(cljs.core.truth_((function (){var or__3824__auto____9601 = null;
if(cljs.core.truth_(or__3824__auto____9601))
{return or__3824__auto____9601;
} else
{return G__9599__9600.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__9599__9600.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__9599__9600);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__9599__9600);
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
var xl__9606 = cljs.core.count.call(null,xs);
var yl__9607 = cljs.core.count.call(null,ys);
if((xl__9606 < yl__9607))
{return -1;
} else
{if((xl__9606 > yl__9607))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__9606,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__9608 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____9609 = (d__9608 === 0);
if(and__3822__auto____9609)
{return ((n + 1) < len);
} else
{return and__3822__auto____9609;
}
})())
{{
var G__9610 = xs;
var G__9611 = ys;
var G__9612 = len;
var G__9613 = (n + 1);
xs = G__9610;
ys = G__9611;
len = G__9612;
n = G__9613;
continue;
}
} else
{return d__9608;
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
var r__9615 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__9615))
{return r__9615;
} else
{if(cljs.core.truth_(r__9615))
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
{var a__9617 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__9617,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9617);
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
var temp__3971__auto____9623 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9623)
{var s__9624 = temp__3971__auto____9623;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9624),cljs.core.next.call(null,s__9624));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__9625 = val;
var coll__9626 = cljs.core.seq.call(null,coll);
while(true){
if(coll__9626)
{var nval__9627 = f.call(null,val__9625,cljs.core.first.call(null,coll__9626));
if(cljs.core.reduced_QMARK_.call(null,nval__9627))
{return cljs.core.deref.call(null,nval__9627);
} else
{{
var G__9628 = nval__9627;
var G__9629 = cljs.core.next.call(null,coll__9626);
val__9625 = G__9628;
coll__9626 = G__9629;
continue;
}
}
} else
{return val__9625;
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
var a__9631 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__9631);
return cljs.core.vec.call(null,a__9631);
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
if((function (){var G__9638__9639 = coll;
if(G__9638__9639)
{if((function (){var or__3824__auto____9640 = (G__9638__9639.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____9640)
{return or__3824__auto____9640;
} else
{return G__9638__9639.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9638__9639.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9638__9639);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9638__9639);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__9641__9642 = coll;
if(G__9641__9642)
{if((function (){var or__3824__auto____9643 = (G__9641__9642.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____9643)
{return or__3824__auto____9643;
} else
{return G__9641__9642.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9641__9642.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9641__9642);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9641__9642);
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
var this__9644 = this;
return this__9644.val;
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
var G__9645__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9645 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9645__delegate.call(this, x, y, more);
};
G__9645.cljs$lang$maxFixedArity = 2;
G__9645.cljs$lang$applyTo = (function (arglist__9646){
var x = cljs.core.first(arglist__9646);
var y = cljs.core.first(cljs.core.next(arglist__9646));
var more = cljs.core.rest(cljs.core.next(arglist__9646));
return G__9645__delegate(x, y, more);
});
G__9645.cljs$lang$arity$variadic = G__9645__delegate;
return G__9645;
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
var G__9647__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9647 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9647__delegate.call(this, x, y, more);
};
G__9647.cljs$lang$maxFixedArity = 2;
G__9647.cljs$lang$applyTo = (function (arglist__9648){
var x = cljs.core.first(arglist__9648);
var y = cljs.core.first(cljs.core.next(arglist__9648));
var more = cljs.core.rest(cljs.core.next(arglist__9648));
return G__9647__delegate(x, y, more);
});
G__9647.cljs$lang$arity$variadic = G__9647__delegate;
return G__9647;
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
var G__9649__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9649 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9649__delegate.call(this, x, y, more);
};
G__9649.cljs$lang$maxFixedArity = 2;
G__9649.cljs$lang$applyTo = (function (arglist__9650){
var x = cljs.core.first(arglist__9650);
var y = cljs.core.first(cljs.core.next(arglist__9650));
var more = cljs.core.rest(cljs.core.next(arglist__9650));
return G__9649__delegate(x, y, more);
});
G__9649.cljs$lang$arity$variadic = G__9649__delegate;
return G__9649;
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
var G__9651__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9651 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9651__delegate.call(this, x, y, more);
};
G__9651.cljs$lang$maxFixedArity = 2;
G__9651.cljs$lang$applyTo = (function (arglist__9652){
var x = cljs.core.first(arglist__9652);
var y = cljs.core.first(cljs.core.next(arglist__9652));
var more = cljs.core.rest(cljs.core.next(arglist__9652));
return G__9651__delegate(x, y, more);
});
G__9651.cljs$lang$arity$variadic = G__9651__delegate;
return G__9651;
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
var G__9653__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__9654 = y;
var G__9655 = cljs.core.first.call(null,more);
var G__9656 = cljs.core.next.call(null,more);
x = G__9654;
y = G__9655;
more = G__9656;
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
var G__9653 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9653__delegate.call(this, x, y, more);
};
G__9653.cljs$lang$maxFixedArity = 2;
G__9653.cljs$lang$applyTo = (function (arglist__9657){
var x = cljs.core.first(arglist__9657);
var y = cljs.core.first(cljs.core.next(arglist__9657));
var more = cljs.core.rest(cljs.core.next(arglist__9657));
return G__9653__delegate(x, y, more);
});
G__9653.cljs$lang$arity$variadic = G__9653__delegate;
return G__9653;
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
var G__9658__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__9659 = y;
var G__9660 = cljs.core.first.call(null,more);
var G__9661 = cljs.core.next.call(null,more);
x = G__9659;
y = G__9660;
more = G__9661;
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
var G__9658 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9658__delegate.call(this, x, y, more);
};
G__9658.cljs$lang$maxFixedArity = 2;
G__9658.cljs$lang$applyTo = (function (arglist__9662){
var x = cljs.core.first(arglist__9662);
var y = cljs.core.first(cljs.core.next(arglist__9662));
var more = cljs.core.rest(cljs.core.next(arglist__9662));
return G__9658__delegate(x, y, more);
});
G__9658.cljs$lang$arity$variadic = G__9658__delegate;
return G__9658;
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
var G__9663__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__9664 = y;
var G__9665 = cljs.core.first.call(null,more);
var G__9666 = cljs.core.next.call(null,more);
x = G__9664;
y = G__9665;
more = G__9666;
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
var G__9663 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9663__delegate.call(this, x, y, more);
};
G__9663.cljs$lang$maxFixedArity = 2;
G__9663.cljs$lang$applyTo = (function (arglist__9667){
var x = cljs.core.first(arglist__9667);
var y = cljs.core.first(cljs.core.next(arglist__9667));
var more = cljs.core.rest(cljs.core.next(arglist__9667));
return G__9663__delegate(x, y, more);
});
G__9663.cljs$lang$arity$variadic = G__9663__delegate;
return G__9663;
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
var G__9668__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__9669 = y;
var G__9670 = cljs.core.first.call(null,more);
var G__9671 = cljs.core.next.call(null,more);
x = G__9669;
y = G__9670;
more = G__9671;
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
var G__9668 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9668__delegate.call(this, x, y, more);
};
G__9668.cljs$lang$maxFixedArity = 2;
G__9668.cljs$lang$applyTo = (function (arglist__9672){
var x = cljs.core.first(arglist__9672);
var y = cljs.core.first(cljs.core.next(arglist__9672));
var more = cljs.core.rest(cljs.core.next(arglist__9672));
return G__9668__delegate(x, y, more);
});
G__9668.cljs$lang$arity$variadic = G__9668__delegate;
return G__9668;
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
var G__9673__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9673 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9673__delegate.call(this, x, y, more);
};
G__9673.cljs$lang$maxFixedArity = 2;
G__9673.cljs$lang$applyTo = (function (arglist__9674){
var x = cljs.core.first(arglist__9674);
var y = cljs.core.first(cljs.core.next(arglist__9674));
var more = cljs.core.rest(cljs.core.next(arglist__9674));
return G__9673__delegate(x, y, more);
});
G__9673.cljs$lang$arity$variadic = G__9673__delegate;
return G__9673;
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
var G__9675__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9675 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9675__delegate.call(this, x, y, more);
};
G__9675.cljs$lang$maxFixedArity = 2;
G__9675.cljs$lang$applyTo = (function (arglist__9676){
var x = cljs.core.first(arglist__9676);
var y = cljs.core.first(cljs.core.next(arglist__9676));
var more = cljs.core.rest(cljs.core.next(arglist__9676));
return G__9675__delegate(x, y, more);
});
G__9675.cljs$lang$arity$variadic = G__9675__delegate;
return G__9675;
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
var rem__9678 = (n % d);
return cljs.core.fix.call(null,((n - rem__9678) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9680 = cljs.core.quot.call(null,n,d);
return (n - (d * q__9680));
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
var v__9683 = (v - ((v >> 1) & 1431655765));
var v__9684 = ((v__9683 & 858993459) + ((v__9683 >> 2) & 858993459));
return ((((v__9684 + (v__9684 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__9685__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__9686 = y;
var G__9687 = cljs.core.first.call(null,more);
var G__9688 = cljs.core.next.call(null,more);
x = G__9686;
y = G__9687;
more = G__9688;
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
var G__9685 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9685__delegate.call(this, x, y, more);
};
G__9685.cljs$lang$maxFixedArity = 2;
G__9685.cljs$lang$applyTo = (function (arglist__9689){
var x = cljs.core.first(arglist__9689);
var y = cljs.core.first(cljs.core.next(arglist__9689));
var more = cljs.core.rest(cljs.core.next(arglist__9689));
return G__9685__delegate(x, y, more);
});
G__9685.cljs$lang$arity$variadic = G__9685__delegate;
return G__9685;
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
var n__9693 = n;
var xs__9694 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9695 = xs__9694;
if(and__3822__auto____9695)
{return (n__9693 > 0);
} else
{return and__3822__auto____9695;
}
})()))
{{
var G__9696 = (n__9693 - 1);
var G__9697 = cljs.core.next.call(null,xs__9694);
n__9693 = G__9696;
xs__9694 = G__9697;
continue;
}
} else
{return xs__9694;
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
var G__9698__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9699 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9700 = cljs.core.next.call(null,more);
sb = G__9699;
more = G__9700;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9698 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9698__delegate.call(this, x, ys);
};
G__9698.cljs$lang$maxFixedArity = 1;
G__9698.cljs$lang$applyTo = (function (arglist__9701){
var x = cljs.core.first(arglist__9701);
var ys = cljs.core.rest(arglist__9701);
return G__9698__delegate(x, ys);
});
G__9698.cljs$lang$arity$variadic = G__9698__delegate;
return G__9698;
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
var G__9702__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9703 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__9704 = cljs.core.next.call(null,more);
sb = G__9703;
more = G__9704;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__9702 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9702__delegate.call(this, x, ys);
};
G__9702.cljs$lang$maxFixedArity = 1;
G__9702.cljs$lang$applyTo = (function (arglist__9705){
var x = cljs.core.first(arglist__9705);
var ys = cljs.core.rest(arglist__9705);
return G__9702__delegate(x, ys);
});
G__9702.cljs$lang$arity$variadic = G__9702__delegate;
return G__9702;
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
format.cljs$lang$applyTo = (function (arglist__9706){
var fmt = cljs.core.first(arglist__9706);
var args = cljs.core.rest(arglist__9706);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9709 = cljs.core.seq.call(null,x);
var ys__9710 = cljs.core.seq.call(null,y);
while(true){
if((xs__9709 == null))
{return (ys__9710 == null);
} else
{if((ys__9710 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9709),cljs.core.first.call(null,ys__9710)))
{{
var G__9711 = cljs.core.next.call(null,xs__9709);
var G__9712 = cljs.core.next.call(null,ys__9710);
xs__9709 = G__9711;
ys__9710 = G__9712;
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
return cljs.core.reduce.call(null,(function (p1__9713_SHARP_,p2__9714_SHARP_){
return cljs.core.hash_combine.call(null,p1__9713_SHARP_,cljs.core.hash.call(null,p2__9714_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__9718 = 0;
var s__9719 = cljs.core.seq.call(null,m);
while(true){
if(s__9719)
{var e__9720 = cljs.core.first.call(null,s__9719);
{
var G__9721 = ((h__9718 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__9720)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__9720)))) % 4503599627370496);
var G__9722 = cljs.core.next.call(null,s__9719);
h__9718 = G__9721;
s__9719 = G__9722;
continue;
}
} else
{return h__9718;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__9726 = 0;
var s__9727 = cljs.core.seq.call(null,s);
while(true){
if(s__9727)
{var e__9728 = cljs.core.first.call(null,s__9727);
{
var G__9729 = ((h__9726 + cljs.core.hash.call(null,e__9728)) % 4503599627370496);
var G__9730 = cljs.core.next.call(null,s__9727);
h__9726 = G__9729;
s__9727 = G__9730;
continue;
}
} else
{return h__9726;
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
var G__9751__9752 = cljs.core.seq.call(null,fn_map);
if(G__9751__9752)
{var G__9754__9756 = cljs.core.first.call(null,G__9751__9752);
var vec__9755__9757 = G__9754__9756;
var key_name__9758 = cljs.core.nth.call(null,vec__9755__9757,0,null);
var f__9759 = cljs.core.nth.call(null,vec__9755__9757,1,null);
var G__9751__9760 = G__9751__9752;
var G__9754__9761 = G__9754__9756;
var G__9751__9762 = G__9751__9760;
while(true){
var vec__9763__9764 = G__9754__9761;
var key_name__9765 = cljs.core.nth.call(null,vec__9763__9764,0,null);
var f__9766 = cljs.core.nth.call(null,vec__9763__9764,1,null);
var G__9751__9767 = G__9751__9762;
var str_name__9768 = cljs.core.name.call(null,key_name__9765);
(obj[str_name__9768] = f__9766);
var temp__3974__auto____9769 = cljs.core.next.call(null,G__9751__9767);
if(temp__3974__auto____9769)
{var G__9751__9770 = temp__3974__auto____9769;
{
var G__9771 = cljs.core.first.call(null,G__9751__9770);
var G__9772 = G__9751__9770;
G__9754__9761 = G__9771;
G__9751__9762 = G__9772;
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
var this__9773 = this;
var h__2192__auto____9774 = this__9773.__hash;
if(!((h__2192__auto____9774 == null)))
{return h__2192__auto____9774;
} else
{var h__2192__auto____9775 = cljs.core.hash_coll.call(null,coll);
this__9773.__hash = h__2192__auto____9775;
return h__2192__auto____9775;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9776 = this;
if((this__9776.count === 1))
{return null;
} else
{return this__9776.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9777 = this;
return (new cljs.core.List(this__9777.meta,o,coll,(this__9777.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__9778 = this;
var this__9779 = this;
return cljs.core.pr_str.call(null,this__9779);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9780 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9781 = this;
return this__9781.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9782 = this;
return this__9782.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9783 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9784 = this;
return this__9784.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9785 = this;
if((this__9785.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__9785.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9786 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9787 = this;
return (new cljs.core.List(meta,this__9787.first,this__9787.rest,this__9787.count,this__9787.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9788 = this;
return this__9788.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9789 = this;
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
var this__9790 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9791 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9792 = this;
return (new cljs.core.List(this__9792.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__9793 = this;
var this__9794 = this;
return cljs.core.pr_str.call(null,this__9794);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9795 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9796 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9797 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9798 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9799 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9800 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9801 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9802 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9803 = this;
return this__9803.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9804 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__9808__9809 = coll;
if(G__9808__9809)
{if((function (){var or__3824__auto____9810 = (G__9808__9809.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____9810)
{return or__3824__auto____9810;
} else
{return G__9808__9809.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__9808__9809.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__9808__9809);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__9808__9809);
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
var G__9811__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__9811 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9811__delegate.call(this, x, y, z, items);
};
G__9811.cljs$lang$maxFixedArity = 3;
G__9811.cljs$lang$applyTo = (function (arglist__9812){
var x = cljs.core.first(arglist__9812);
var y = cljs.core.first(cljs.core.next(arglist__9812));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9812)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9812)));
return G__9811__delegate(x, y, z, items);
});
G__9811.cljs$lang$arity$variadic = G__9811__delegate;
return G__9811;
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
var this__9813 = this;
var h__2192__auto____9814 = this__9813.__hash;
if(!((h__2192__auto____9814 == null)))
{return h__2192__auto____9814;
} else
{var h__2192__auto____9815 = cljs.core.hash_coll.call(null,coll);
this__9813.__hash = h__2192__auto____9815;
return h__2192__auto____9815;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9816 = this;
if((this__9816.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__9816.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9817 = this;
return (new cljs.core.Cons(null,o,coll,this__9817.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__9818 = this;
var this__9819 = this;
return cljs.core.pr_str.call(null,this__9819);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9820 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9821 = this;
return this__9821.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9822 = this;
if((this__9822.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__9822.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9823 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9824 = this;
return (new cljs.core.Cons(meta,this__9824.first,this__9824.rest,this__9824.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9825 = this;
return this__9825.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9826 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9826.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____9831 = (coll == null);
if(or__3824__auto____9831)
{return or__3824__auto____9831;
} else
{var G__9832__9833 = coll;
if(G__9832__9833)
{if((function (){var or__3824__auto____9834 = (G__9832__9833.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9834)
{return or__3824__auto____9834;
} else
{return G__9832__9833.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9832__9833.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9832__9833);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9832__9833);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__9838__9839 = x;
if(G__9838__9839)
{if((function (){var or__3824__auto____9840 = (G__9838__9839.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____9840)
{return or__3824__auto____9840;
} else
{return G__9838__9839.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__9838__9839.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__9838__9839);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__9838__9839);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__9841 = null;
var G__9841__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9841__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9841 = function(string,f,start){
switch(arguments.length){
case 2:
return G__9841__2.call(this,string,f);
case 3:
return G__9841__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9841;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9842 = null;
var G__9842__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9842__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9842 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__9842__2.call(this,string,k);
case 3:
return G__9842__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9842;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9843 = null;
var G__9843__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__9843__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9843 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__9843__2.call(this,string,n);
case 3:
return G__9843__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9843;
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
var G__9855 = null;
var G__9855__2 = (function (this_sym9846,coll){
var this__9848 = this;
var this_sym9846__9849 = this;
var ___9850 = this_sym9846__9849;
if((coll == null))
{return null;
} else
{var strobj__9851 = coll.strobj;
if((strobj__9851 == null))
{return cljs.core._lookup.call(null,coll,this__9848.k,null);
} else
{return (strobj__9851[this__9848.k]);
}
}
});
var G__9855__3 = (function (this_sym9847,coll,not_found){
var this__9848 = this;
var this_sym9847__9852 = this;
var ___9853 = this_sym9847__9852;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__9848.k,not_found);
}
});
G__9855 = function(this_sym9847,coll,not_found){
switch(arguments.length){
case 2:
return G__9855__2.call(this,this_sym9847,coll);
case 3:
return G__9855__3.call(this,this_sym9847,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9855;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym9844,args9845){
var this__9854 = this;
return this_sym9844.call.apply(this_sym9844,[this_sym9844].concat(args9845.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__9864 = null;
var G__9864__2 = (function (this_sym9858,coll){
var this_sym9858__9860 = this;
var this__9861 = this_sym9858__9860;
return cljs.core._lookup.call(null,coll,this__9861.toString(),null);
});
var G__9864__3 = (function (this_sym9859,coll,not_found){
var this_sym9859__9862 = this;
var this__9863 = this_sym9859__9862;
return cljs.core._lookup.call(null,coll,this__9863.toString(),not_found);
});
G__9864 = function(this_sym9859,coll,not_found){
switch(arguments.length){
case 2:
return G__9864__2.call(this,this_sym9859,coll);
case 3:
return G__9864__3.call(this,this_sym9859,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9864;
})()
;
String.prototype.apply = (function (this_sym9856,args9857){
return this_sym9856.call.apply(this_sym9856,[this_sym9856].concat(args9857.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__9866 = lazy_seq.x;
if(lazy_seq.realized)
{return x__9866;
} else
{lazy_seq.x = x__9866.call(null);
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
var this__9867 = this;
var h__2192__auto____9868 = this__9867.__hash;
if(!((h__2192__auto____9868 == null)))
{return h__2192__auto____9868;
} else
{var h__2192__auto____9869 = cljs.core.hash_coll.call(null,coll);
this__9867.__hash = h__2192__auto____9869;
return h__2192__auto____9869;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9870 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9871 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__9872 = this;
var this__9873 = this;
return cljs.core.pr_str.call(null,this__9873);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9874 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9875 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9876 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9877 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9878 = this;
return (new cljs.core.LazySeq(meta,this__9878.realized,this__9878.x,this__9878.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9879 = this;
return this__9879.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9880 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9880.meta);
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
var this__9881 = this;
return this__9881.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__9882 = this;
var ___9883 = this;
(this__9882.buf[this__9882.end] = o);
return this__9882.end = (this__9882.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__9884 = this;
var ___9885 = this;
var ret__9886 = (new cljs.core.ArrayChunk(this__9884.buf,0,this__9884.end));
this__9884.buf = null;
return ret__9886;
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
var this__9887 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__9887.arr[this__9887.off]),(this__9887.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9888 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__9888.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__9889 = this;
if((this__9889.off === this__9889.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__9889.arr,(this__9889.off + 1),this__9889.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__9890 = this;
return (this__9890.arr[(this__9890.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__9891 = this;
if((function (){var and__3822__auto____9892 = (i >= 0);
if(and__3822__auto____9892)
{return (i < (this__9891.end - this__9891.off));
} else
{return and__3822__auto____9892;
}
})())
{return (this__9891.arr[(this__9891.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9893 = this;
return (this__9893.end - this__9893.off);
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
var this__9894 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9895 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9896 = this;
return cljs.core._nth.call(null,this__9896.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9897 = this;
if((cljs.core._count.call(null,this__9897.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__9897.chunk),this__9897.more,this__9897.meta));
} else
{if((this__9897.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__9897.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9898 = this;
if((this__9898.more == null))
{return null;
} else
{return this__9898.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9899 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9900 = this;
return (new cljs.core.ChunkedCons(this__9900.chunk,this__9900.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9901 = this;
return this__9901.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9902 = this;
return this__9902.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9903 = this;
if((this__9903.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__9903.more;
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
if((function (){var G__9907__9908 = s;
if(G__9907__9908)
{if(cljs.core.truth_((function (){var or__3824__auto____9909 = null;
if(cljs.core.truth_(or__3824__auto____9909))
{return or__3824__auto____9909;
} else
{return G__9907__9908.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__9907__9908.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__9907__9908);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__9907__9908);
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
var ary__9912 = [];
var s__9913 = s;
while(true){
if(cljs.core.seq.call(null,s__9913))
{ary__9912.push(cljs.core.first.call(null,s__9913));
{
var G__9914 = cljs.core.next.call(null,s__9913);
s__9913 = G__9914;
continue;
}
} else
{return ary__9912;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__9918 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__9919 = 0;
var xs__9920 = cljs.core.seq.call(null,coll);
while(true){
if(xs__9920)
{(ret__9918[i__9919] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__9920)));
{
var G__9921 = (i__9919 + 1);
var G__9922 = cljs.core.next.call(null,xs__9920);
i__9919 = G__9921;
xs__9920 = G__9922;
continue;
}
} else
{}
break;
}
return ret__9918;
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
var a__9930 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9931 = cljs.core.seq.call(null,init_val_or_seq);
var i__9932 = 0;
var s__9933 = s__9931;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9934 = s__9933;
if(and__3822__auto____9934)
{return (i__9932 < size);
} else
{return and__3822__auto____9934;
}
})()))
{(a__9930[i__9932] = cljs.core.first.call(null,s__9933));
{
var G__9937 = (i__9932 + 1);
var G__9938 = cljs.core.next.call(null,s__9933);
i__9932 = G__9937;
s__9933 = G__9938;
continue;
}
} else
{return a__9930;
}
break;
}
} else
{var n__2527__auto____9935 = size;
var i__9936 = 0;
while(true){
if((i__9936 < n__2527__auto____9935))
{(a__9930[i__9936] = init_val_or_seq);
{
var G__9939 = (i__9936 + 1);
i__9936 = G__9939;
continue;
}
} else
{}
break;
}
return a__9930;
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
var a__9947 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9948 = cljs.core.seq.call(null,init_val_or_seq);
var i__9949 = 0;
var s__9950 = s__9948;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9951 = s__9950;
if(and__3822__auto____9951)
{return (i__9949 < size);
} else
{return and__3822__auto____9951;
}
})()))
{(a__9947[i__9949] = cljs.core.first.call(null,s__9950));
{
var G__9954 = (i__9949 + 1);
var G__9955 = cljs.core.next.call(null,s__9950);
i__9949 = G__9954;
s__9950 = G__9955;
continue;
}
} else
{return a__9947;
}
break;
}
} else
{var n__2527__auto____9952 = size;
var i__9953 = 0;
while(true){
if((i__9953 < n__2527__auto____9952))
{(a__9947[i__9953] = init_val_or_seq);
{
var G__9956 = (i__9953 + 1);
i__9953 = G__9956;
continue;
}
} else
{}
break;
}
return a__9947;
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
var a__9964 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9965 = cljs.core.seq.call(null,init_val_or_seq);
var i__9966 = 0;
var s__9967 = s__9965;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9968 = s__9967;
if(and__3822__auto____9968)
{return (i__9966 < size);
} else
{return and__3822__auto____9968;
}
})()))
{(a__9964[i__9966] = cljs.core.first.call(null,s__9967));
{
var G__9971 = (i__9966 + 1);
var G__9972 = cljs.core.next.call(null,s__9967);
i__9966 = G__9971;
s__9967 = G__9972;
continue;
}
} else
{return a__9964;
}
break;
}
} else
{var n__2527__auto____9969 = size;
var i__9970 = 0;
while(true){
if((i__9970 < n__2527__auto____9969))
{(a__9964[i__9970] = init_val_or_seq);
{
var G__9973 = (i__9970 + 1);
i__9970 = G__9973;
continue;
}
} else
{}
break;
}
return a__9964;
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
{var s__9978 = s;
var i__9979 = n;
var sum__9980 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9981 = (i__9979 > 0);
if(and__3822__auto____9981)
{return cljs.core.seq.call(null,s__9978);
} else
{return and__3822__auto____9981;
}
})()))
{{
var G__9982 = cljs.core.next.call(null,s__9978);
var G__9983 = (i__9979 - 1);
var G__9984 = (sum__9980 + 1);
s__9978 = G__9982;
i__9979 = G__9983;
sum__9980 = G__9984;
continue;
}
} else
{return sum__9980;
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
var s__9989 = cljs.core.seq.call(null,x);
if(s__9989)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__9989))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__9989),concat.call(null,cljs.core.chunk_rest.call(null,s__9989),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9989),concat.call(null,cljs.core.rest.call(null,s__9989),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__9993__delegate = function (x,y,zs){
var cat__9992 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9991 = cljs.core.seq.call(null,xys);
if(xys__9991)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__9991))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__9991),cat.call(null,cljs.core.chunk_rest.call(null,xys__9991),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9991),cat.call(null,cljs.core.rest.call(null,xys__9991),zs));
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
return cat__9992.call(null,concat.call(null,x,y),zs);
};
var G__9993 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9993__delegate.call(this, x, y, zs);
};
G__9993.cljs$lang$maxFixedArity = 2;
G__9993.cljs$lang$applyTo = (function (arglist__9994){
var x = cljs.core.first(arglist__9994);
var y = cljs.core.first(cljs.core.next(arglist__9994));
var zs = cljs.core.rest(cljs.core.next(arglist__9994));
return G__9993__delegate(x, y, zs);
});
G__9993.cljs$lang$arity$variadic = G__9993__delegate;
return G__9993;
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
var G__9995__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9995 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9995__delegate.call(this, a, b, c, d, more);
};
G__9995.cljs$lang$maxFixedArity = 4;
G__9995.cljs$lang$applyTo = (function (arglist__9996){
var a = cljs.core.first(arglist__9996);
var b = cljs.core.first(cljs.core.next(arglist__9996));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9996)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9996))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9996))));
return G__9995__delegate(a, b, c, d, more);
});
G__9995.cljs$lang$arity$variadic = G__9995__delegate;
return G__9995;
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
var args__10038 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__10039 = cljs.core._first.call(null,args__10038);
var args__10040 = cljs.core._rest.call(null,args__10038);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__10039);
} else
{return f.call(null,a__10039);
}
} else
{var b__10041 = cljs.core._first.call(null,args__10040);
var args__10042 = cljs.core._rest.call(null,args__10040);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__10039,b__10041);
} else
{return f.call(null,a__10039,b__10041);
}
} else
{var c__10043 = cljs.core._first.call(null,args__10042);
var args__10044 = cljs.core._rest.call(null,args__10042);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__10039,b__10041,c__10043);
} else
{return f.call(null,a__10039,b__10041,c__10043);
}
} else
{var d__10045 = cljs.core._first.call(null,args__10044);
var args__10046 = cljs.core._rest.call(null,args__10044);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__10039,b__10041,c__10043,d__10045);
} else
{return f.call(null,a__10039,b__10041,c__10043,d__10045);
}
} else
{var e__10047 = cljs.core._first.call(null,args__10046);
var args__10048 = cljs.core._rest.call(null,args__10046);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__10039,b__10041,c__10043,d__10045,e__10047);
} else
{return f.call(null,a__10039,b__10041,c__10043,d__10045,e__10047);
}
} else
{var f__10049 = cljs.core._first.call(null,args__10048);
var args__10050 = cljs.core._rest.call(null,args__10048);
if((argc === 6))
{if(f__10049.cljs$lang$arity$6)
{return f__10049.cljs$lang$arity$6(a__10039,b__10041,c__10043,d__10045,e__10047,f__10049);
} else
{return f__10049.call(null,a__10039,b__10041,c__10043,d__10045,e__10047,f__10049);
}
} else
{var g__10051 = cljs.core._first.call(null,args__10050);
var args__10052 = cljs.core._rest.call(null,args__10050);
if((argc === 7))
{if(f__10049.cljs$lang$arity$7)
{return f__10049.cljs$lang$arity$7(a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051);
} else
{return f__10049.call(null,a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051);
}
} else
{var h__10053 = cljs.core._first.call(null,args__10052);
var args__10054 = cljs.core._rest.call(null,args__10052);
if((argc === 8))
{if(f__10049.cljs$lang$arity$8)
{return f__10049.cljs$lang$arity$8(a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053);
} else
{return f__10049.call(null,a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053);
}
} else
{var i__10055 = cljs.core._first.call(null,args__10054);
var args__10056 = cljs.core._rest.call(null,args__10054);
if((argc === 9))
{if(f__10049.cljs$lang$arity$9)
{return f__10049.cljs$lang$arity$9(a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055);
} else
{return f__10049.call(null,a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055);
}
} else
{var j__10057 = cljs.core._first.call(null,args__10056);
var args__10058 = cljs.core._rest.call(null,args__10056);
if((argc === 10))
{if(f__10049.cljs$lang$arity$10)
{return f__10049.cljs$lang$arity$10(a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057);
} else
{return f__10049.call(null,a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057);
}
} else
{var k__10059 = cljs.core._first.call(null,args__10058);
var args__10060 = cljs.core._rest.call(null,args__10058);
if((argc === 11))
{if(f__10049.cljs$lang$arity$11)
{return f__10049.cljs$lang$arity$11(a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059);
} else
{return f__10049.call(null,a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059);
}
} else
{var l__10061 = cljs.core._first.call(null,args__10060);
var args__10062 = cljs.core._rest.call(null,args__10060);
if((argc === 12))
{if(f__10049.cljs$lang$arity$12)
{return f__10049.cljs$lang$arity$12(a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059,l__10061);
} else
{return f__10049.call(null,a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059,l__10061);
}
} else
{var m__10063 = cljs.core._first.call(null,args__10062);
var args__10064 = cljs.core._rest.call(null,args__10062);
if((argc === 13))
{if(f__10049.cljs$lang$arity$13)
{return f__10049.cljs$lang$arity$13(a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059,l__10061,m__10063);
} else
{return f__10049.call(null,a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059,l__10061,m__10063);
}
} else
{var n__10065 = cljs.core._first.call(null,args__10064);
var args__10066 = cljs.core._rest.call(null,args__10064);
if((argc === 14))
{if(f__10049.cljs$lang$arity$14)
{return f__10049.cljs$lang$arity$14(a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059,l__10061,m__10063,n__10065);
} else
{return f__10049.call(null,a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059,l__10061,m__10063,n__10065);
}
} else
{var o__10067 = cljs.core._first.call(null,args__10066);
var args__10068 = cljs.core._rest.call(null,args__10066);
if((argc === 15))
{if(f__10049.cljs$lang$arity$15)
{return f__10049.cljs$lang$arity$15(a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059,l__10061,m__10063,n__10065,o__10067);
} else
{return f__10049.call(null,a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059,l__10061,m__10063,n__10065,o__10067);
}
} else
{var p__10069 = cljs.core._first.call(null,args__10068);
var args__10070 = cljs.core._rest.call(null,args__10068);
if((argc === 16))
{if(f__10049.cljs$lang$arity$16)
{return f__10049.cljs$lang$arity$16(a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059,l__10061,m__10063,n__10065,o__10067,p__10069);
} else
{return f__10049.call(null,a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059,l__10061,m__10063,n__10065,o__10067,p__10069);
}
} else
{var q__10071 = cljs.core._first.call(null,args__10070);
var args__10072 = cljs.core._rest.call(null,args__10070);
if((argc === 17))
{if(f__10049.cljs$lang$arity$17)
{return f__10049.cljs$lang$arity$17(a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059,l__10061,m__10063,n__10065,o__10067,p__10069,q__10071);
} else
{return f__10049.call(null,a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059,l__10061,m__10063,n__10065,o__10067,p__10069,q__10071);
}
} else
{var r__10073 = cljs.core._first.call(null,args__10072);
var args__10074 = cljs.core._rest.call(null,args__10072);
if((argc === 18))
{if(f__10049.cljs$lang$arity$18)
{return f__10049.cljs$lang$arity$18(a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059,l__10061,m__10063,n__10065,o__10067,p__10069,q__10071,r__10073);
} else
{return f__10049.call(null,a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059,l__10061,m__10063,n__10065,o__10067,p__10069,q__10071,r__10073);
}
} else
{var s__10075 = cljs.core._first.call(null,args__10074);
var args__10076 = cljs.core._rest.call(null,args__10074);
if((argc === 19))
{if(f__10049.cljs$lang$arity$19)
{return f__10049.cljs$lang$arity$19(a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059,l__10061,m__10063,n__10065,o__10067,p__10069,q__10071,r__10073,s__10075);
} else
{return f__10049.call(null,a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059,l__10061,m__10063,n__10065,o__10067,p__10069,q__10071,r__10073,s__10075);
}
} else
{var t__10077 = cljs.core._first.call(null,args__10076);
var args__10078 = cljs.core._rest.call(null,args__10076);
if((argc === 20))
{if(f__10049.cljs$lang$arity$20)
{return f__10049.cljs$lang$arity$20(a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059,l__10061,m__10063,n__10065,o__10067,p__10069,q__10071,r__10073,s__10075,t__10077);
} else
{return f__10049.call(null,a__10039,b__10041,c__10043,d__10045,e__10047,f__10049,g__10051,h__10053,i__10055,j__10057,k__10059,l__10061,m__10063,n__10065,o__10067,p__10069,q__10071,r__10073,s__10075,t__10077);
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
var fixed_arity__10093 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10094 = cljs.core.bounded_count.call(null,args,(fixed_arity__10093 + 1));
if((bc__10094 <= fixed_arity__10093))
{return cljs.core.apply_to.call(null,f,bc__10094,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__10095 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10096 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10097 = cljs.core.bounded_count.call(null,arglist__10095,(fixed_arity__10096 + 1));
if((bc__10097 <= fixed_arity__10096))
{return cljs.core.apply_to.call(null,f,bc__10097,arglist__10095);
} else
{return f.cljs$lang$applyTo(arglist__10095);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10095));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__10098 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10099 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10100 = cljs.core.bounded_count.call(null,arglist__10098,(fixed_arity__10099 + 1));
if((bc__10100 <= fixed_arity__10099))
{return cljs.core.apply_to.call(null,f,bc__10100,arglist__10098);
} else
{return f.cljs$lang$applyTo(arglist__10098);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10098));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__10101 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10102 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10103 = cljs.core.bounded_count.call(null,arglist__10101,(fixed_arity__10102 + 1));
if((bc__10103 <= fixed_arity__10102))
{return cljs.core.apply_to.call(null,f,bc__10103,arglist__10101);
} else
{return f.cljs$lang$applyTo(arglist__10101);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10101));
}
});
var apply__6 = (function() { 
var G__10107__delegate = function (f,a,b,c,d,args){
var arglist__10104 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10105 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10106 = cljs.core.bounded_count.call(null,arglist__10104,(fixed_arity__10105 + 1));
if((bc__10106 <= fixed_arity__10105))
{return cljs.core.apply_to.call(null,f,bc__10106,arglist__10104);
} else
{return f.cljs$lang$applyTo(arglist__10104);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10104));
}
};
var G__10107 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10107__delegate.call(this, f, a, b, c, d, args);
};
G__10107.cljs$lang$maxFixedArity = 5;
G__10107.cljs$lang$applyTo = (function (arglist__10108){
var f = cljs.core.first(arglist__10108);
var a = cljs.core.first(cljs.core.next(arglist__10108));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10108)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10108))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10108)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10108)))));
return G__10107__delegate(f, a, b, c, d, args);
});
G__10107.cljs$lang$arity$variadic = G__10107__delegate;
return G__10107;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10109){
var obj = cljs.core.first(arglist__10109);
var f = cljs.core.first(cljs.core.next(arglist__10109));
var args = cljs.core.rest(cljs.core.next(arglist__10109));
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
var G__10110__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10110 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10110__delegate.call(this, x, y, more);
};
G__10110.cljs$lang$maxFixedArity = 2;
G__10110.cljs$lang$applyTo = (function (arglist__10111){
var x = cljs.core.first(arglist__10111);
var y = cljs.core.first(cljs.core.next(arglist__10111));
var more = cljs.core.rest(cljs.core.next(arglist__10111));
return G__10110__delegate(x, y, more);
});
G__10110.cljs$lang$arity$variadic = G__10110__delegate;
return G__10110;
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
var G__10112 = pred;
var G__10113 = cljs.core.next.call(null,coll);
pred = G__10112;
coll = G__10113;
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
{var or__3824__auto____10115 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____10115))
{return or__3824__auto____10115;
} else
{{
var G__10116 = pred;
var G__10117 = cljs.core.next.call(null,coll);
pred = G__10116;
coll = G__10117;
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
var G__10118 = null;
var G__10118__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10118__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10118__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10118__3 = (function() { 
var G__10119__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10119 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10119__delegate.call(this, x, y, zs);
};
G__10119.cljs$lang$maxFixedArity = 2;
G__10119.cljs$lang$applyTo = (function (arglist__10120){
var x = cljs.core.first(arglist__10120);
var y = cljs.core.first(cljs.core.next(arglist__10120));
var zs = cljs.core.rest(cljs.core.next(arglist__10120));
return G__10119__delegate(x, y, zs);
});
G__10119.cljs$lang$arity$variadic = G__10119__delegate;
return G__10119;
})()
;
G__10118 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__10118__0.call(this);
case 1:
return G__10118__1.call(this,x);
case 2:
return G__10118__2.call(this,x,y);
default:
return G__10118__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__10118.cljs$lang$maxFixedArity = 2;
G__10118.cljs$lang$applyTo = G__10118__3.cljs$lang$applyTo;
return G__10118;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10121__delegate = function (args){
return x;
};
var G__10121 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10121__delegate.call(this, args);
};
G__10121.cljs$lang$maxFixedArity = 0;
G__10121.cljs$lang$applyTo = (function (arglist__10122){
var args = cljs.core.seq(arglist__10122);;
return G__10121__delegate(args);
});
G__10121.cljs$lang$arity$variadic = G__10121__delegate;
return G__10121;
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
var G__10129 = null;
var G__10129__0 = (function (){
return f.call(null,g.call(null));
});
var G__10129__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10129__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10129__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10129__4 = (function() { 
var G__10130__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10130 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10130__delegate.call(this, x, y, z, args);
};
G__10130.cljs$lang$maxFixedArity = 3;
G__10130.cljs$lang$applyTo = (function (arglist__10131){
var x = cljs.core.first(arglist__10131);
var y = cljs.core.first(cljs.core.next(arglist__10131));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10131)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10131)));
return G__10130__delegate(x, y, z, args);
});
G__10130.cljs$lang$arity$variadic = G__10130__delegate;
return G__10130;
})()
;
G__10129 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10129__0.call(this);
case 1:
return G__10129__1.call(this,x);
case 2:
return G__10129__2.call(this,x,y);
case 3:
return G__10129__3.call(this,x,y,z);
default:
return G__10129__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10129.cljs$lang$maxFixedArity = 3;
G__10129.cljs$lang$applyTo = G__10129__4.cljs$lang$applyTo;
return G__10129;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__10132 = null;
var G__10132__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10132__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10132__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10132__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10132__4 = (function() { 
var G__10133__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10133 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10133__delegate.call(this, x, y, z, args);
};
G__10133.cljs$lang$maxFixedArity = 3;
G__10133.cljs$lang$applyTo = (function (arglist__10134){
var x = cljs.core.first(arglist__10134);
var y = cljs.core.first(cljs.core.next(arglist__10134));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10134)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10134)));
return G__10133__delegate(x, y, z, args);
});
G__10133.cljs$lang$arity$variadic = G__10133__delegate;
return G__10133;
})()
;
G__10132 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10132__0.call(this);
case 1:
return G__10132__1.call(this,x);
case 2:
return G__10132__2.call(this,x,y);
case 3:
return G__10132__3.call(this,x,y,z);
default:
return G__10132__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10132.cljs$lang$maxFixedArity = 3;
G__10132.cljs$lang$applyTo = G__10132__4.cljs$lang$applyTo;
return G__10132;
})()
});
var comp__4 = (function() { 
var G__10135__delegate = function (f1,f2,f3,fs){
var fs__10126 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__10136__delegate = function (args){
var ret__10127 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10126),args);
var fs__10128 = cljs.core.next.call(null,fs__10126);
while(true){
if(fs__10128)
{{
var G__10137 = cljs.core.first.call(null,fs__10128).call(null,ret__10127);
var G__10138 = cljs.core.next.call(null,fs__10128);
ret__10127 = G__10137;
fs__10128 = G__10138;
continue;
}
} else
{return ret__10127;
}
break;
}
};
var G__10136 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10136__delegate.call(this, args);
};
G__10136.cljs$lang$maxFixedArity = 0;
G__10136.cljs$lang$applyTo = (function (arglist__10139){
var args = cljs.core.seq(arglist__10139);;
return G__10136__delegate(args);
});
G__10136.cljs$lang$arity$variadic = G__10136__delegate;
return G__10136;
})()
;
};
var G__10135 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10135__delegate.call(this, f1, f2, f3, fs);
};
G__10135.cljs$lang$maxFixedArity = 3;
G__10135.cljs$lang$applyTo = (function (arglist__10140){
var f1 = cljs.core.first(arglist__10140);
var f2 = cljs.core.first(cljs.core.next(arglist__10140));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10140)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10140)));
return G__10135__delegate(f1, f2, f3, fs);
});
G__10135.cljs$lang$arity$variadic = G__10135__delegate;
return G__10135;
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
var G__10141__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10141 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10141__delegate.call(this, args);
};
G__10141.cljs$lang$maxFixedArity = 0;
G__10141.cljs$lang$applyTo = (function (arglist__10142){
var args = cljs.core.seq(arglist__10142);;
return G__10141__delegate(args);
});
G__10141.cljs$lang$arity$variadic = G__10141__delegate;
return G__10141;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__10143__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10143 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10143__delegate.call(this, args);
};
G__10143.cljs$lang$maxFixedArity = 0;
G__10143.cljs$lang$applyTo = (function (arglist__10144){
var args = cljs.core.seq(arglist__10144);;
return G__10143__delegate(args);
});
G__10143.cljs$lang$arity$variadic = G__10143__delegate;
return G__10143;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10145__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10145 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10145__delegate.call(this, args);
};
G__10145.cljs$lang$maxFixedArity = 0;
G__10145.cljs$lang$applyTo = (function (arglist__10146){
var args = cljs.core.seq(arglist__10146);;
return G__10145__delegate(args);
});
G__10145.cljs$lang$arity$variadic = G__10145__delegate;
return G__10145;
})()
;
});
var partial__5 = (function() { 
var G__10147__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10148__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10148 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10148__delegate.call(this, args);
};
G__10148.cljs$lang$maxFixedArity = 0;
G__10148.cljs$lang$applyTo = (function (arglist__10149){
var args = cljs.core.seq(arglist__10149);;
return G__10148__delegate(args);
});
G__10148.cljs$lang$arity$variadic = G__10148__delegate;
return G__10148;
})()
;
};
var G__10147 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10147__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10147.cljs$lang$maxFixedArity = 4;
G__10147.cljs$lang$applyTo = (function (arglist__10150){
var f = cljs.core.first(arglist__10150);
var arg1 = cljs.core.first(cljs.core.next(arglist__10150));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10150)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10150))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10150))));
return G__10147__delegate(f, arg1, arg2, arg3, more);
});
G__10147.cljs$lang$arity$variadic = G__10147__delegate;
return G__10147;
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
var G__10151 = null;
var G__10151__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__10151__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__10151__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__10151__4 = (function() { 
var G__10152__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__10152 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10152__delegate.call(this, a, b, c, ds);
};
G__10152.cljs$lang$maxFixedArity = 3;
G__10152.cljs$lang$applyTo = (function (arglist__10153){
var a = cljs.core.first(arglist__10153);
var b = cljs.core.first(cljs.core.next(arglist__10153));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10153)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10153)));
return G__10152__delegate(a, b, c, ds);
});
G__10152.cljs$lang$arity$variadic = G__10152__delegate;
return G__10152;
})()
;
G__10151 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__10151__1.call(this,a);
case 2:
return G__10151__2.call(this,a,b);
case 3:
return G__10151__3.call(this,a,b,c);
default:
return G__10151__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10151.cljs$lang$maxFixedArity = 3;
G__10151.cljs$lang$applyTo = G__10151__4.cljs$lang$applyTo;
return G__10151;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__10154 = null;
var G__10154__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__10154__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__10154__4 = (function() { 
var G__10155__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__10155 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10155__delegate.call(this, a, b, c, ds);
};
G__10155.cljs$lang$maxFixedArity = 3;
G__10155.cljs$lang$applyTo = (function (arglist__10156){
var a = cljs.core.first(arglist__10156);
var b = cljs.core.first(cljs.core.next(arglist__10156));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10156)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10156)));
return G__10155__delegate(a, b, c, ds);
});
G__10155.cljs$lang$arity$variadic = G__10155__delegate;
return G__10155;
})()
;
G__10154 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__10154__2.call(this,a,b);
case 3:
return G__10154__3.call(this,a,b,c);
default:
return G__10154__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10154.cljs$lang$maxFixedArity = 3;
G__10154.cljs$lang$applyTo = G__10154__4.cljs$lang$applyTo;
return G__10154;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__10157 = null;
var G__10157__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__10157__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__10157__4 = (function() { 
var G__10158__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__10158 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10158__delegate.call(this, a, b, c, ds);
};
G__10158.cljs$lang$maxFixedArity = 3;
G__10158.cljs$lang$applyTo = (function (arglist__10159){
var a = cljs.core.first(arglist__10159);
var b = cljs.core.first(cljs.core.next(arglist__10159));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10159)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10159)));
return G__10158__delegate(a, b, c, ds);
});
G__10158.cljs$lang$arity$variadic = G__10158__delegate;
return G__10158;
})()
;
G__10157 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__10157__2.call(this,a,b);
case 3:
return G__10157__3.call(this,a,b,c);
default:
return G__10157__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10157.cljs$lang$maxFixedArity = 3;
G__10157.cljs$lang$applyTo = G__10157__4.cljs$lang$applyTo;
return G__10157;
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
var mapi__10175 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10183 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10183)
{var s__10184 = temp__3974__auto____10183;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10184))
{var c__10185 = cljs.core.chunk_first.call(null,s__10184);
var size__10186 = cljs.core.count.call(null,c__10185);
var b__10187 = cljs.core.chunk_buffer.call(null,size__10186);
var n__2527__auto____10188 = size__10186;
var i__10189 = 0;
while(true){
if((i__10189 < n__2527__auto____10188))
{cljs.core.chunk_append.call(null,b__10187,f.call(null,(idx + i__10189),cljs.core._nth.call(null,c__10185,i__10189)));
{
var G__10190 = (i__10189 + 1);
i__10189 = G__10190;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10187),mapi.call(null,(idx + size__10186),cljs.core.chunk_rest.call(null,s__10184)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10184)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__10184)));
}
} else
{return null;
}
}),null));
});
return mapi__10175.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10200 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10200)
{var s__10201 = temp__3974__auto____10200;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10201))
{var c__10202 = cljs.core.chunk_first.call(null,s__10201);
var size__10203 = cljs.core.count.call(null,c__10202);
var b__10204 = cljs.core.chunk_buffer.call(null,size__10203);
var n__2527__auto____10205 = size__10203;
var i__10206 = 0;
while(true){
if((i__10206 < n__2527__auto____10205))
{var x__10207 = f.call(null,cljs.core._nth.call(null,c__10202,i__10206));
if((x__10207 == null))
{} else
{cljs.core.chunk_append.call(null,b__10204,x__10207);
}
{
var G__10209 = (i__10206 + 1);
i__10206 = G__10209;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10204),keep.call(null,f,cljs.core.chunk_rest.call(null,s__10201)));
} else
{var x__10208 = f.call(null,cljs.core.first.call(null,s__10201));
if((x__10208 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__10201));
} else
{return cljs.core.cons.call(null,x__10208,keep.call(null,f,cljs.core.rest.call(null,s__10201)));
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
var keepi__10235 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10245 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10245)
{var s__10246 = temp__3974__auto____10245;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10246))
{var c__10247 = cljs.core.chunk_first.call(null,s__10246);
var size__10248 = cljs.core.count.call(null,c__10247);
var b__10249 = cljs.core.chunk_buffer.call(null,size__10248);
var n__2527__auto____10250 = size__10248;
var i__10251 = 0;
while(true){
if((i__10251 < n__2527__auto____10250))
{var x__10252 = f.call(null,(idx + i__10251),cljs.core._nth.call(null,c__10247,i__10251));
if((x__10252 == null))
{} else
{cljs.core.chunk_append.call(null,b__10249,x__10252);
}
{
var G__10254 = (i__10251 + 1);
i__10251 = G__10254;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10249),keepi.call(null,(idx + size__10248),cljs.core.chunk_rest.call(null,s__10246)));
} else
{var x__10253 = f.call(null,idx,cljs.core.first.call(null,s__10246));
if((x__10253 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__10246));
} else
{return cljs.core.cons.call(null,x__10253,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__10246)));
}
}
} else
{return null;
}
}),null));
});
return keepi__10235.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10340 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____10340))
{return p.call(null,y);
} else
{return and__3822__auto____10340;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10341 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____10341))
{var and__3822__auto____10342 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____10342))
{return p.call(null,z);
} else
{return and__3822__auto____10342;
}
} else
{return and__3822__auto____10341;
}
})());
});
var ep1__4 = (function() { 
var G__10411__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10343 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____10343))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____10343;
}
})());
};
var G__10411 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10411__delegate.call(this, x, y, z, args);
};
G__10411.cljs$lang$maxFixedArity = 3;
G__10411.cljs$lang$applyTo = (function (arglist__10412){
var x = cljs.core.first(arglist__10412);
var y = cljs.core.first(cljs.core.next(arglist__10412));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10412)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10412)));
return G__10411__delegate(x, y, z, args);
});
G__10411.cljs$lang$arity$variadic = G__10411__delegate;
return G__10411;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10355 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10355))
{return p2.call(null,x);
} else
{return and__3822__auto____10355;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10356 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10356))
{var and__3822__auto____10357 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____10357))
{var and__3822__auto____10358 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10358))
{return p2.call(null,y);
} else
{return and__3822__auto____10358;
}
} else
{return and__3822__auto____10357;
}
} else
{return and__3822__auto____10356;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10359 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10359))
{var and__3822__auto____10360 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____10360))
{var and__3822__auto____10361 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____10361))
{var and__3822__auto____10362 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10362))
{var and__3822__auto____10363 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____10363))
{return p2.call(null,z);
} else
{return and__3822__auto____10363;
}
} else
{return and__3822__auto____10362;
}
} else
{return and__3822__auto____10361;
}
} else
{return and__3822__auto____10360;
}
} else
{return and__3822__auto____10359;
}
})());
});
var ep2__4 = (function() { 
var G__10413__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10364 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____10364))
{return cljs.core.every_QMARK_.call(null,(function (p1__10210_SHARP_){
var and__3822__auto____10365 = p1.call(null,p1__10210_SHARP_);
if(cljs.core.truth_(and__3822__auto____10365))
{return p2.call(null,p1__10210_SHARP_);
} else
{return and__3822__auto____10365;
}
}),args);
} else
{return and__3822__auto____10364;
}
})());
};
var G__10413 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10413__delegate.call(this, x, y, z, args);
};
G__10413.cljs$lang$maxFixedArity = 3;
G__10413.cljs$lang$applyTo = (function (arglist__10414){
var x = cljs.core.first(arglist__10414);
var y = cljs.core.first(cljs.core.next(arglist__10414));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10414)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10414)));
return G__10413__delegate(x, y, z, args);
});
G__10413.cljs$lang$arity$variadic = G__10413__delegate;
return G__10413;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10384 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10384))
{var and__3822__auto____10385 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10385))
{return p3.call(null,x);
} else
{return and__3822__auto____10385;
}
} else
{return and__3822__auto____10384;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10386 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10386))
{var and__3822__auto____10387 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10387))
{var and__3822__auto____10388 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____10388))
{var and__3822__auto____10389 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____10389))
{var and__3822__auto____10390 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____10390))
{return p3.call(null,y);
} else
{return and__3822__auto____10390;
}
} else
{return and__3822__auto____10389;
}
} else
{return and__3822__auto____10388;
}
} else
{return and__3822__auto____10387;
}
} else
{return and__3822__auto____10386;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10391 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10391))
{var and__3822__auto____10392 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10392))
{var and__3822__auto____10393 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____10393))
{var and__3822__auto____10394 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____10394))
{var and__3822__auto____10395 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____10395))
{var and__3822__auto____10396 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____10396))
{var and__3822__auto____10397 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____10397))
{var and__3822__auto____10398 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____10398))
{return p3.call(null,z);
} else
{return and__3822__auto____10398;
}
} else
{return and__3822__auto____10397;
}
} else
{return and__3822__auto____10396;
}
} else
{return and__3822__auto____10395;
}
} else
{return and__3822__auto____10394;
}
} else
{return and__3822__auto____10393;
}
} else
{return and__3822__auto____10392;
}
} else
{return and__3822__auto____10391;
}
})());
});
var ep3__4 = (function() { 
var G__10415__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10399 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____10399))
{return cljs.core.every_QMARK_.call(null,(function (p1__10211_SHARP_){
var and__3822__auto____10400 = p1.call(null,p1__10211_SHARP_);
if(cljs.core.truth_(and__3822__auto____10400))
{var and__3822__auto____10401 = p2.call(null,p1__10211_SHARP_);
if(cljs.core.truth_(and__3822__auto____10401))
{return p3.call(null,p1__10211_SHARP_);
} else
{return and__3822__auto____10401;
}
} else
{return and__3822__auto____10400;
}
}),args);
} else
{return and__3822__auto____10399;
}
})());
};
var G__10415 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10415__delegate.call(this, x, y, z, args);
};
G__10415.cljs$lang$maxFixedArity = 3;
G__10415.cljs$lang$applyTo = (function (arglist__10416){
var x = cljs.core.first(arglist__10416);
var y = cljs.core.first(cljs.core.next(arglist__10416));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10416)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10416)));
return G__10415__delegate(x, y, z, args);
});
G__10415.cljs$lang$arity$variadic = G__10415__delegate;
return G__10415;
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
var G__10417__delegate = function (p1,p2,p3,ps){
var ps__10402 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10212_SHARP_){
return p1__10212_SHARP_.call(null,x);
}),ps__10402);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10213_SHARP_){
var and__3822__auto____10407 = p1__10213_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____10407))
{return p1__10213_SHARP_.call(null,y);
} else
{return and__3822__auto____10407;
}
}),ps__10402);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10214_SHARP_){
var and__3822__auto____10408 = p1__10214_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____10408))
{var and__3822__auto____10409 = p1__10214_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____10409))
{return p1__10214_SHARP_.call(null,z);
} else
{return and__3822__auto____10409;
}
} else
{return and__3822__auto____10408;
}
}),ps__10402);
});
var epn__4 = (function() { 
var G__10418__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10410 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____10410))
{return cljs.core.every_QMARK_.call(null,(function (p1__10215_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10215_SHARP_,args);
}),ps__10402);
} else
{return and__3822__auto____10410;
}
})());
};
var G__10418 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10418__delegate.call(this, x, y, z, args);
};
G__10418.cljs$lang$maxFixedArity = 3;
G__10418.cljs$lang$applyTo = (function (arglist__10419){
var x = cljs.core.first(arglist__10419);
var y = cljs.core.first(cljs.core.next(arglist__10419));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10419)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10419)));
return G__10418__delegate(x, y, z, args);
});
G__10418.cljs$lang$arity$variadic = G__10418__delegate;
return G__10418;
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
var G__10417 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10417__delegate.call(this, p1, p2, p3, ps);
};
G__10417.cljs$lang$maxFixedArity = 3;
G__10417.cljs$lang$applyTo = (function (arglist__10420){
var p1 = cljs.core.first(arglist__10420);
var p2 = cljs.core.first(cljs.core.next(arglist__10420));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10420)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10420)));
return G__10417__delegate(p1, p2, p3, ps);
});
G__10417.cljs$lang$arity$variadic = G__10417__delegate;
return G__10417;
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
var or__3824__auto____10501 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____10501))
{return or__3824__auto____10501;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____10502 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____10502))
{return or__3824__auto____10502;
} else
{var or__3824__auto____10503 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____10503))
{return or__3824__auto____10503;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__10572__delegate = function (x,y,z,args){
var or__3824__auto____10504 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10504))
{return or__3824__auto____10504;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__10572 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10572__delegate.call(this, x, y, z, args);
};
G__10572.cljs$lang$maxFixedArity = 3;
G__10572.cljs$lang$applyTo = (function (arglist__10573){
var x = cljs.core.first(arglist__10573);
var y = cljs.core.first(cljs.core.next(arglist__10573));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10573)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10573)));
return G__10572__delegate(x, y, z, args);
});
G__10572.cljs$lang$arity$variadic = G__10572__delegate;
return G__10572;
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
var or__3824__auto____10516 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10516))
{return or__3824__auto____10516;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____10517 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10517))
{return or__3824__auto____10517;
} else
{var or__3824__auto____10518 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10518))
{return or__3824__auto____10518;
} else
{var or__3824__auto____10519 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10519))
{return or__3824__auto____10519;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____10520 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10520))
{return or__3824__auto____10520;
} else
{var or__3824__auto____10521 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10521))
{return or__3824__auto____10521;
} else
{var or__3824__auto____10522 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____10522))
{return or__3824__auto____10522;
} else
{var or__3824__auto____10523 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10523))
{return or__3824__auto____10523;
} else
{var or__3824__auto____10524 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____10524))
{return or__3824__auto____10524;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__10574__delegate = function (x,y,z,args){
var or__3824__auto____10525 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10525))
{return or__3824__auto____10525;
} else
{return cljs.core.some.call(null,(function (p1__10255_SHARP_){
var or__3824__auto____10526 = p1.call(null,p1__10255_SHARP_);
if(cljs.core.truth_(or__3824__auto____10526))
{return or__3824__auto____10526;
} else
{return p2.call(null,p1__10255_SHARP_);
}
}),args);
}
};
var G__10574 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10574__delegate.call(this, x, y, z, args);
};
G__10574.cljs$lang$maxFixedArity = 3;
G__10574.cljs$lang$applyTo = (function (arglist__10575){
var x = cljs.core.first(arglist__10575);
var y = cljs.core.first(cljs.core.next(arglist__10575));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10575)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10575)));
return G__10574__delegate(x, y, z, args);
});
G__10574.cljs$lang$arity$variadic = G__10574__delegate;
return G__10574;
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
var or__3824__auto____10545 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10545))
{return or__3824__auto____10545;
} else
{var or__3824__auto____10546 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10546))
{return or__3824__auto____10546;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____10547 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10547))
{return or__3824__auto____10547;
} else
{var or__3824__auto____10548 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10548))
{return or__3824__auto____10548;
} else
{var or__3824__auto____10549 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____10549))
{return or__3824__auto____10549;
} else
{var or__3824__auto____10550 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10550))
{return or__3824__auto____10550;
} else
{var or__3824__auto____10551 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____10551))
{return or__3824__auto____10551;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____10552 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10552))
{return or__3824__auto____10552;
} else
{var or__3824__auto____10553 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10553))
{return or__3824__auto____10553;
} else
{var or__3824__auto____10554 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____10554))
{return or__3824__auto____10554;
} else
{var or__3824__auto____10555 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10555))
{return or__3824__auto____10555;
} else
{var or__3824__auto____10556 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____10556))
{return or__3824__auto____10556;
} else
{var or__3824__auto____10557 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____10557))
{return or__3824__auto____10557;
} else
{var or__3824__auto____10558 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____10558))
{return or__3824__auto____10558;
} else
{var or__3824__auto____10559 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____10559))
{return or__3824__auto____10559;
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
var G__10576__delegate = function (x,y,z,args){
var or__3824__auto____10560 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10560))
{return or__3824__auto____10560;
} else
{return cljs.core.some.call(null,(function (p1__10256_SHARP_){
var or__3824__auto____10561 = p1.call(null,p1__10256_SHARP_);
if(cljs.core.truth_(or__3824__auto____10561))
{return or__3824__auto____10561;
} else
{var or__3824__auto____10562 = p2.call(null,p1__10256_SHARP_);
if(cljs.core.truth_(or__3824__auto____10562))
{return or__3824__auto____10562;
} else
{return p3.call(null,p1__10256_SHARP_);
}
}
}),args);
}
};
var G__10576 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10576__delegate.call(this, x, y, z, args);
};
G__10576.cljs$lang$maxFixedArity = 3;
G__10576.cljs$lang$applyTo = (function (arglist__10577){
var x = cljs.core.first(arglist__10577);
var y = cljs.core.first(cljs.core.next(arglist__10577));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10577)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10577)));
return G__10576__delegate(x, y, z, args);
});
G__10576.cljs$lang$arity$variadic = G__10576__delegate;
return G__10576;
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
var G__10578__delegate = function (p1,p2,p3,ps){
var ps__10563 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__10257_SHARP_){
return p1__10257_SHARP_.call(null,x);
}),ps__10563);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10258_SHARP_){
var or__3824__auto____10568 = p1__10258_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____10568))
{return or__3824__auto____10568;
} else
{return p1__10258_SHARP_.call(null,y);
}
}),ps__10563);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10259_SHARP_){
var or__3824__auto____10569 = p1__10259_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____10569))
{return or__3824__auto____10569;
} else
{var or__3824__auto____10570 = p1__10259_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____10570))
{return or__3824__auto____10570;
} else
{return p1__10259_SHARP_.call(null,z);
}
}
}),ps__10563);
});
var spn__4 = (function() { 
var G__10579__delegate = function (x,y,z,args){
var or__3824__auto____10571 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10571))
{return or__3824__auto____10571;
} else
{return cljs.core.some.call(null,(function (p1__10260_SHARP_){
return cljs.core.some.call(null,p1__10260_SHARP_,args);
}),ps__10563);
}
};
var G__10579 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10579__delegate.call(this, x, y, z, args);
};
G__10579.cljs$lang$maxFixedArity = 3;
G__10579.cljs$lang$applyTo = (function (arglist__10580){
var x = cljs.core.first(arglist__10580);
var y = cljs.core.first(cljs.core.next(arglist__10580));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10580)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10580)));
return G__10579__delegate(x, y, z, args);
});
G__10579.cljs$lang$arity$variadic = G__10579__delegate;
return G__10579;
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
var G__10578 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10578__delegate.call(this, p1, p2, p3, ps);
};
G__10578.cljs$lang$maxFixedArity = 3;
G__10578.cljs$lang$applyTo = (function (arglist__10581){
var p1 = cljs.core.first(arglist__10581);
var p2 = cljs.core.first(cljs.core.next(arglist__10581));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10581)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10581)));
return G__10578__delegate(p1, p2, p3, ps);
});
G__10578.cljs$lang$arity$variadic = G__10578__delegate;
return G__10578;
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
var temp__3974__auto____10600 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10600)
{var s__10601 = temp__3974__auto____10600;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10601))
{var c__10602 = cljs.core.chunk_first.call(null,s__10601);
var size__10603 = cljs.core.count.call(null,c__10602);
var b__10604 = cljs.core.chunk_buffer.call(null,size__10603);
var n__2527__auto____10605 = size__10603;
var i__10606 = 0;
while(true){
if((i__10606 < n__2527__auto____10605))
{cljs.core.chunk_append.call(null,b__10604,f.call(null,cljs.core._nth.call(null,c__10602,i__10606)));
{
var G__10618 = (i__10606 + 1);
i__10606 = G__10618;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10604),map.call(null,f,cljs.core.chunk_rest.call(null,s__10601)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__10601)),map.call(null,f,cljs.core.rest.call(null,s__10601)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10607 = cljs.core.seq.call(null,c1);
var s2__10608 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____10609 = s1__10607;
if(and__3822__auto____10609)
{return s2__10608;
} else
{return and__3822__auto____10609;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10607),cljs.core.first.call(null,s2__10608)),map.call(null,f,cljs.core.rest.call(null,s1__10607),cljs.core.rest.call(null,s2__10608)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10610 = cljs.core.seq.call(null,c1);
var s2__10611 = cljs.core.seq.call(null,c2);
var s3__10612 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____10613 = s1__10610;
if(and__3822__auto____10613)
{var and__3822__auto____10614 = s2__10611;
if(and__3822__auto____10614)
{return s3__10612;
} else
{return and__3822__auto____10614;
}
} else
{return and__3822__auto____10613;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10610),cljs.core.first.call(null,s2__10611),cljs.core.first.call(null,s3__10612)),map.call(null,f,cljs.core.rest.call(null,s1__10610),cljs.core.rest.call(null,s2__10611),cljs.core.rest.call(null,s3__10612)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__10619__delegate = function (f,c1,c2,c3,colls){
var step__10617 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10616 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10616))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__10616),step.call(null,map.call(null,cljs.core.rest,ss__10616)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__10421_SHARP_){
return cljs.core.apply.call(null,f,p1__10421_SHARP_);
}),step__10617.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__10619 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10619__delegate.call(this, f, c1, c2, c3, colls);
};
G__10619.cljs$lang$maxFixedArity = 4;
G__10619.cljs$lang$applyTo = (function (arglist__10620){
var f = cljs.core.first(arglist__10620);
var c1 = cljs.core.first(cljs.core.next(arglist__10620));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10620)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10620))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10620))));
return G__10619__delegate(f, c1, c2, c3, colls);
});
G__10619.cljs$lang$arity$variadic = G__10619__delegate;
return G__10619;
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
{var temp__3974__auto____10623 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10623)
{var s__10624 = temp__3974__auto____10623;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__10624),take.call(null,(n - 1),cljs.core.rest.call(null,s__10624)));
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
var step__10630 = (function (n,coll){
while(true){
var s__10628 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____10629 = (n > 0);
if(and__3822__auto____10629)
{return s__10628;
} else
{return and__3822__auto____10629;
}
})()))
{{
var G__10631 = (n - 1);
var G__10632 = cljs.core.rest.call(null,s__10628);
n = G__10631;
coll = G__10632;
continue;
}
} else
{return s__10628;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__10630.call(null,n,coll);
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
var s__10635 = cljs.core.seq.call(null,coll);
var lead__10636 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__10636)
{{
var G__10637 = cljs.core.next.call(null,s__10635);
var G__10638 = cljs.core.next.call(null,lead__10636);
s__10635 = G__10637;
lead__10636 = G__10638;
continue;
}
} else
{return s__10635;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__10644 = (function (pred,coll){
while(true){
var s__10642 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____10643 = s__10642;
if(and__3822__auto____10643)
{return pred.call(null,cljs.core.first.call(null,s__10642));
} else
{return and__3822__auto____10643;
}
})()))
{{
var G__10645 = pred;
var G__10646 = cljs.core.rest.call(null,s__10642);
pred = G__10645;
coll = G__10646;
continue;
}
} else
{return s__10642;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__10644.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10649 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10649)
{var s__10650 = temp__3974__auto____10649;
return cljs.core.concat.call(null,s__10650,cycle.call(null,s__10650));
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
var s1__10655 = cljs.core.seq.call(null,c1);
var s2__10656 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____10657 = s1__10655;
if(and__3822__auto____10657)
{return s2__10656;
} else
{return and__3822__auto____10657;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__10655),cljs.core.cons.call(null,cljs.core.first.call(null,s2__10656),interleave.call(null,cljs.core.rest.call(null,s1__10655),cljs.core.rest.call(null,s2__10656))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__10659__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10658 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10658))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__10658),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__10658)));
} else
{return null;
}
}),null));
};
var G__10659 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10659__delegate.call(this, c1, c2, colls);
};
G__10659.cljs$lang$maxFixedArity = 2;
G__10659.cljs$lang$applyTo = (function (arglist__10660){
var c1 = cljs.core.first(arglist__10660);
var c2 = cljs.core.first(cljs.core.next(arglist__10660));
var colls = cljs.core.rest(cljs.core.next(arglist__10660));
return G__10659__delegate(c1, c2, colls);
});
G__10659.cljs$lang$arity$variadic = G__10659__delegate;
return G__10659;
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
var cat__10670 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____10668 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____10668)
{var coll__10669 = temp__3971__auto____10668;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__10669),cat.call(null,cljs.core.rest.call(null,coll__10669),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__10670.call(null,null,colls);
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
var G__10671__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__10671 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10671__delegate.call(this, f, coll, colls);
};
G__10671.cljs$lang$maxFixedArity = 2;
G__10671.cljs$lang$applyTo = (function (arglist__10672){
var f = cljs.core.first(arglist__10672);
var coll = cljs.core.first(cljs.core.next(arglist__10672));
var colls = cljs.core.rest(cljs.core.next(arglist__10672));
return G__10671__delegate(f, coll, colls);
});
G__10671.cljs$lang$arity$variadic = G__10671__delegate;
return G__10671;
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
var temp__3974__auto____10682 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10682)
{var s__10683 = temp__3974__auto____10682;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10683))
{var c__10684 = cljs.core.chunk_first.call(null,s__10683);
var size__10685 = cljs.core.count.call(null,c__10684);
var b__10686 = cljs.core.chunk_buffer.call(null,size__10685);
var n__2527__auto____10687 = size__10685;
var i__10688 = 0;
while(true){
if((i__10688 < n__2527__auto____10687))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__10684,i__10688))))
{cljs.core.chunk_append.call(null,b__10686,cljs.core._nth.call(null,c__10684,i__10688));
} else
{}
{
var G__10691 = (i__10688 + 1);
i__10688 = G__10691;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10686),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__10683)));
} else
{var f__10689 = cljs.core.first.call(null,s__10683);
var r__10690 = cljs.core.rest.call(null,s__10683);
if(cljs.core.truth_(pred.call(null,f__10689)))
{return cljs.core.cons.call(null,f__10689,filter.call(null,pred,r__10690));
} else
{return filter.call(null,pred,r__10690);
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
var walk__10694 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__10694.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__10692_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__10692_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__10698__10699 = to;
if(G__10698__10699)
{if((function (){var or__3824__auto____10700 = (G__10698__10699.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____10700)
{return or__3824__auto____10700;
} else
{return G__10698__10699.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__10698__10699.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__10698__10699);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__10698__10699);
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
var G__10701__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__10701 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10701__delegate.call(this, f, c1, c2, c3, colls);
};
G__10701.cljs$lang$maxFixedArity = 4;
G__10701.cljs$lang$applyTo = (function (arglist__10702){
var f = cljs.core.first(arglist__10702);
var c1 = cljs.core.first(cljs.core.next(arglist__10702));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10702)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10702))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10702))));
return G__10701__delegate(f, c1, c2, c3, colls);
});
G__10701.cljs$lang$arity$variadic = G__10701__delegate;
return G__10701;
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
var temp__3974__auto____10709 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10709)
{var s__10710 = temp__3974__auto____10709;
var p__10711 = cljs.core.take.call(null,n,s__10710);
if((n === cljs.core.count.call(null,p__10711)))
{return cljs.core.cons.call(null,p__10711,partition.call(null,n,step,cljs.core.drop.call(null,step,s__10710)));
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
var temp__3974__auto____10712 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10712)
{var s__10713 = temp__3974__auto____10712;
var p__10714 = cljs.core.take.call(null,n,s__10713);
if((n === cljs.core.count.call(null,p__10714)))
{return cljs.core.cons.call(null,p__10714,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__10713)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__10714,pad)));
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
var sentinel__10719 = cljs.core.lookup_sentinel;
var m__10720 = m;
var ks__10721 = cljs.core.seq.call(null,ks);
while(true){
if(ks__10721)
{var m__10722 = cljs.core._lookup.call(null,m__10720,cljs.core.first.call(null,ks__10721),sentinel__10719);
if((sentinel__10719 === m__10722))
{return not_found;
} else
{{
var G__10723 = sentinel__10719;
var G__10724 = m__10722;
var G__10725 = cljs.core.next.call(null,ks__10721);
sentinel__10719 = G__10723;
m__10720 = G__10724;
ks__10721 = G__10725;
continue;
}
}
} else
{return m__10720;
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
cljs.core.assoc_in = (function assoc_in(m,p__10726,v){
var vec__10731__10732 = p__10726;
var k__10733 = cljs.core.nth.call(null,vec__10731__10732,0,null);
var ks__10734 = cljs.core.nthnext.call(null,vec__10731__10732,1);
if(cljs.core.truth_(ks__10734))
{return cljs.core.assoc.call(null,m,k__10733,assoc_in.call(null,cljs.core._lookup.call(null,m,k__10733,null),ks__10734,v));
} else
{return cljs.core.assoc.call(null,m,k__10733,v);
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
var update_in__delegate = function (m,p__10735,f,args){
var vec__10740__10741 = p__10735;
var k__10742 = cljs.core.nth.call(null,vec__10740__10741,0,null);
var ks__10743 = cljs.core.nthnext.call(null,vec__10740__10741,1);
if(cljs.core.truth_(ks__10743))
{return cljs.core.assoc.call(null,m,k__10742,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__10742,null),ks__10743,f,args));
} else
{return cljs.core.assoc.call(null,m,k__10742,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__10742,null),args));
}
};
var update_in = function (m,p__10735,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__10735, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__10744){
var m = cljs.core.first(arglist__10744);
var p__10735 = cljs.core.first(cljs.core.next(arglist__10744));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10744)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10744)));
return update_in__delegate(m, p__10735, f, args);
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
var this__10747 = this;
var h__2192__auto____10748 = this__10747.__hash;
if(!((h__2192__auto____10748 == null)))
{return h__2192__auto____10748;
} else
{var h__2192__auto____10749 = cljs.core.hash_coll.call(null,coll);
this__10747.__hash = h__2192__auto____10749;
return h__2192__auto____10749;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10750 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10751 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10752 = this;
var new_array__10753 = this__10752.array.slice();
(new_array__10753[k] = v);
return (new cljs.core.Vector(this__10752.meta,new_array__10753,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__10784 = null;
var G__10784__2 = (function (this_sym10754,k){
var this__10756 = this;
var this_sym10754__10757 = this;
var coll__10758 = this_sym10754__10757;
return coll__10758.cljs$core$ILookup$_lookup$arity$2(coll__10758,k);
});
var G__10784__3 = (function (this_sym10755,k,not_found){
var this__10756 = this;
var this_sym10755__10759 = this;
var coll__10760 = this_sym10755__10759;
return coll__10760.cljs$core$ILookup$_lookup$arity$3(coll__10760,k,not_found);
});
G__10784 = function(this_sym10755,k,not_found){
switch(arguments.length){
case 2:
return G__10784__2.call(this,this_sym10755,k);
case 3:
return G__10784__3.call(this,this_sym10755,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10784;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym10745,args10746){
var this__10761 = this;
return this_sym10745.call.apply(this_sym10745,[this_sym10745].concat(args10746.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10762 = this;
var new_array__10763 = this__10762.array.slice();
new_array__10763.push(o);
return (new cljs.core.Vector(this__10762.meta,new_array__10763,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__10764 = this;
var this__10765 = this;
return cljs.core.pr_str.call(null,this__10765);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10766 = this;
return cljs.core.ci_reduce.call(null,this__10766.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10767 = this;
return cljs.core.ci_reduce.call(null,this__10767.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10768 = this;
if((this__10768.array.length > 0))
{var vector_seq__10769 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__10768.array.length))
{return cljs.core.cons.call(null,(this__10768.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__10769.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10770 = this;
return this__10770.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10771 = this;
var count__10772 = this__10771.array.length;
if((count__10772 > 0))
{return (this__10771.array[(count__10772 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10773 = this;
if((this__10773.array.length > 0))
{var new_array__10774 = this__10773.array.slice();
new_array__10774.pop();
return (new cljs.core.Vector(this__10773.meta,new_array__10774,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10775 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10776 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10777 = this;
return (new cljs.core.Vector(meta,this__10777.array,this__10777.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10778 = this;
return this__10778.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10779 = this;
if((function (){var and__3822__auto____10780 = (0 <= n);
if(and__3822__auto____10780)
{return (n < this__10779.array.length);
} else
{return and__3822__auto____10780;
}
})())
{return (this__10779.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10781 = this;
if((function (){var and__3822__auto____10782 = (0 <= n);
if(and__3822__auto____10782)
{return (n < this__10781.array.length);
} else
{return and__3822__auto____10782;
}
})())
{return (this__10781.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10783 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10783.meta);
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
var cnt__10786 = pv.cnt;
if((cnt__10786 < 32))
{return 0;
} else
{return (((cnt__10786 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__10792 = level;
var ret__10793 = node;
while(true){
if((ll__10792 === 0))
{return ret__10793;
} else
{var embed__10794 = ret__10793;
var r__10795 = cljs.core.pv_fresh_node.call(null,edit);
var ___10796 = cljs.core.pv_aset.call(null,r__10795,0,embed__10794);
{
var G__10797 = (ll__10792 - 5);
var G__10798 = r__10795;
ll__10792 = G__10797;
ret__10793 = G__10798;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__10804 = cljs.core.pv_clone_node.call(null,parent);
var subidx__10805 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__10804,subidx__10805,tailnode);
return ret__10804;
} else
{var child__10806 = cljs.core.pv_aget.call(null,parent,subidx__10805);
if(!((child__10806 == null)))
{var node_to_insert__10807 = push_tail.call(null,pv,(level - 5),child__10806,tailnode);
cljs.core.pv_aset.call(null,ret__10804,subidx__10805,node_to_insert__10807);
return ret__10804;
} else
{var node_to_insert__10808 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__10804,subidx__10805,node_to_insert__10808);
return ret__10804;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____10812 = (0 <= i);
if(and__3822__auto____10812)
{return (i < pv.cnt);
} else
{return and__3822__auto____10812;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__10813 = pv.root;
var level__10814 = pv.shift;
while(true){
if((level__10814 > 0))
{{
var G__10815 = cljs.core.pv_aget.call(null,node__10813,((i >>> level__10814) & 31));
var G__10816 = (level__10814 - 5);
node__10813 = G__10815;
level__10814 = G__10816;
continue;
}
} else
{return node__10813.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__10819 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__10819,(i & 31),val);
return ret__10819;
} else
{var subidx__10820 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10819,subidx__10820,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10820),i,val));
return ret__10819;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__10826 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10827 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10826));
if((function (){var and__3822__auto____10828 = (new_child__10827 == null);
if(and__3822__auto____10828)
{return (subidx__10826 === 0);
} else
{return and__3822__auto____10828;
}
})())
{return null;
} else
{var ret__10829 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10829,subidx__10826,new_child__10827);
return ret__10829;
}
} else
{if((subidx__10826 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__10830 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10830,subidx__10826,null);
return ret__10830;
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
var this__10833 = this;
return (new cljs.core.TransientVector(this__10833.cnt,this__10833.shift,cljs.core.tv_editable_root.call(null,this__10833.root),cljs.core.tv_editable_tail.call(null,this__10833.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10834 = this;
var h__2192__auto____10835 = this__10834.__hash;
if(!((h__2192__auto____10835 == null)))
{return h__2192__auto____10835;
} else
{var h__2192__auto____10836 = cljs.core.hash_coll.call(null,coll);
this__10834.__hash = h__2192__auto____10836;
return h__2192__auto____10836;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10837 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10838 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10839 = this;
if((function (){var and__3822__auto____10840 = (0 <= k);
if(and__3822__auto____10840)
{return (k < this__10839.cnt);
} else
{return and__3822__auto____10840;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__10841 = this__10839.tail.slice();
(new_tail__10841[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__10839.meta,this__10839.cnt,this__10839.shift,this__10839.root,new_tail__10841,null));
} else
{return (new cljs.core.PersistentVector(this__10839.meta,this__10839.cnt,this__10839.shift,cljs.core.do_assoc.call(null,coll,this__10839.shift,this__10839.root,k,v),this__10839.tail,null));
}
} else
{if((k === this__10839.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__10839.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__10889 = null;
var G__10889__2 = (function (this_sym10842,k){
var this__10844 = this;
var this_sym10842__10845 = this;
var coll__10846 = this_sym10842__10845;
return coll__10846.cljs$core$ILookup$_lookup$arity$2(coll__10846,k);
});
var G__10889__3 = (function (this_sym10843,k,not_found){
var this__10844 = this;
var this_sym10843__10847 = this;
var coll__10848 = this_sym10843__10847;
return coll__10848.cljs$core$ILookup$_lookup$arity$3(coll__10848,k,not_found);
});
G__10889 = function(this_sym10843,k,not_found){
switch(arguments.length){
case 2:
return G__10889__2.call(this,this_sym10843,k);
case 3:
return G__10889__3.call(this,this_sym10843,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10889;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym10831,args10832){
var this__10849 = this;
return this_sym10831.call.apply(this_sym10831,[this_sym10831].concat(args10832.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__10850 = this;
var step_init__10851 = [0,init];
var i__10852 = 0;
while(true){
if((i__10852 < this__10850.cnt))
{var arr__10853 = cljs.core.array_for.call(null,v,i__10852);
var len__10854 = arr__10853.length;
var init__10858 = (function (){var j__10855 = 0;
var init__10856 = (step_init__10851[1]);
while(true){
if((j__10855 < len__10854))
{var init__10857 = f.call(null,init__10856,(j__10855 + i__10852),(arr__10853[j__10855]));
if(cljs.core.reduced_QMARK_.call(null,init__10857))
{return init__10857;
} else
{{
var G__10890 = (j__10855 + 1);
var G__10891 = init__10857;
j__10855 = G__10890;
init__10856 = G__10891;
continue;
}
}
} else
{(step_init__10851[0] = len__10854);
(step_init__10851[1] = init__10856);
return init__10856;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__10858))
{return cljs.core.deref.call(null,init__10858);
} else
{{
var G__10892 = (i__10852 + (step_init__10851[0]));
i__10852 = G__10892;
continue;
}
}
} else
{return (step_init__10851[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10859 = this;
if(((this__10859.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__10860 = this__10859.tail.slice();
new_tail__10860.push(o);
return (new cljs.core.PersistentVector(this__10859.meta,(this__10859.cnt + 1),this__10859.shift,this__10859.root,new_tail__10860,null));
} else
{var root_overflow_QMARK___10861 = ((this__10859.cnt >>> 5) > (1 << this__10859.shift));
var new_shift__10862 = ((root_overflow_QMARK___10861)?(this__10859.shift + 5):this__10859.shift);
var new_root__10864 = ((root_overflow_QMARK___10861)?(function (){var n_r__10863 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__10863,0,this__10859.root);
cljs.core.pv_aset.call(null,n_r__10863,1,cljs.core.new_path.call(null,null,this__10859.shift,(new cljs.core.VectorNode(null,this__10859.tail))));
return n_r__10863;
})():cljs.core.push_tail.call(null,coll,this__10859.shift,this__10859.root,(new cljs.core.VectorNode(null,this__10859.tail))));
return (new cljs.core.PersistentVector(this__10859.meta,(this__10859.cnt + 1),new_shift__10862,new_root__10864,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10865 = this;
if((this__10865.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__10865.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__10866 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__10867 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__10868 = this;
var this__10869 = this;
return cljs.core.pr_str.call(null,this__10869);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10870 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10871 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10872 = this;
if((this__10872.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10873 = this;
return this__10873.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10874 = this;
if((this__10874.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__10874.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10875 = this;
if((this__10875.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10875.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10875.meta);
} else
{if((1 < (this__10875.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__10875.meta,(this__10875.cnt - 1),this__10875.shift,this__10875.root,this__10875.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__10876 = cljs.core.array_for.call(null,coll,(this__10875.cnt - 2));
var nr__10877 = cljs.core.pop_tail.call(null,coll,this__10875.shift,this__10875.root);
var new_root__10878 = (((nr__10877 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__10877);
var cnt_1__10879 = (this__10875.cnt - 1);
if((function (){var and__3822__auto____10880 = (5 < this__10875.shift);
if(and__3822__auto____10880)
{return (cljs.core.pv_aget.call(null,new_root__10878,1) == null);
} else
{return and__3822__auto____10880;
}
})())
{return (new cljs.core.PersistentVector(this__10875.meta,cnt_1__10879,(this__10875.shift - 5),cljs.core.pv_aget.call(null,new_root__10878,0),new_tail__10876,null));
} else
{return (new cljs.core.PersistentVector(this__10875.meta,cnt_1__10879,this__10875.shift,new_root__10878,new_tail__10876,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10881 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10882 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10883 = this;
return (new cljs.core.PersistentVector(meta,this__10883.cnt,this__10883.shift,this__10883.root,this__10883.tail,this__10883.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10884 = this;
return this__10884.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10885 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10886 = this;
if((function (){var and__3822__auto____10887 = (0 <= n);
if(and__3822__auto____10887)
{return (n < this__10886.cnt);
} else
{return and__3822__auto____10887;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10888 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10888.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__10893 = xs.length;
var xs__10894 = (((no_clone === true))?xs:xs.slice());
if((l__10893 < 32))
{return (new cljs.core.PersistentVector(null,l__10893,5,cljs.core.PersistentVector.EMPTY_NODE,xs__10894,null));
} else
{var node__10895 = xs__10894.slice(0,32);
var v__10896 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__10895,null));
var i__10897 = 32;
var out__10898 = cljs.core._as_transient.call(null,v__10896);
while(true){
if((i__10897 < l__10893))
{{
var G__10899 = (i__10897 + 1);
var G__10900 = cljs.core.conj_BANG_.call(null,out__10898,(xs__10894[i__10897]));
i__10897 = G__10899;
out__10898 = G__10900;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10898);
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
vector.cljs$lang$applyTo = (function (arglist__10901){
var args = cljs.core.seq(arglist__10901);;
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
var this__10902 = this;
if(((this__10902.off + 1) < this__10902.node.length))
{var s__10903 = cljs.core.chunked_seq.call(null,this__10902.vec,this__10902.node,this__10902.i,(this__10902.off + 1));
if((s__10903 == null))
{return null;
} else
{return s__10903;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10904 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10905 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10906 = this;
return (this__10906.node[this__10906.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10907 = this;
if(((this__10907.off + 1) < this__10907.node.length))
{var s__10908 = cljs.core.chunked_seq.call(null,this__10907.vec,this__10907.node,this__10907.i,(this__10907.off + 1));
if((s__10908 == null))
{return cljs.core.List.EMPTY;
} else
{return s__10908;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__10909 = this;
var l__10910 = this__10909.node.length;
var s__10911 = ((((this__10909.i + l__10910) < cljs.core._count.call(null,this__10909.vec)))?cljs.core.chunked_seq.call(null,this__10909.vec,(this__10909.i + l__10910),0):null);
if((s__10911 == null))
{return null;
} else
{return s__10911;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10912 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__10913 = this;
return cljs.core.chunked_seq.call(null,this__10913.vec,this__10913.node,this__10913.i,this__10913.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__10914 = this;
return this__10914.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10915 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10915.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__10916 = this;
return cljs.core.array_chunk.call(null,this__10916.node,this__10916.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__10917 = this;
var l__10918 = this__10917.node.length;
var s__10919 = ((((this__10917.i + l__10918) < cljs.core._count.call(null,this__10917.vec)))?cljs.core.chunked_seq.call(null,this__10917.vec,(this__10917.i + l__10918),0):null);
if((s__10919 == null))
{return cljs.core.List.EMPTY;
} else
{return s__10919;
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
var this__10922 = this;
var h__2192__auto____10923 = this__10922.__hash;
if(!((h__2192__auto____10923 == null)))
{return h__2192__auto____10923;
} else
{var h__2192__auto____10924 = cljs.core.hash_coll.call(null,coll);
this__10922.__hash = h__2192__auto____10924;
return h__2192__auto____10924;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10925 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10926 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__10927 = this;
var v_pos__10928 = (this__10927.start + key);
return (new cljs.core.Subvec(this__10927.meta,cljs.core._assoc.call(null,this__10927.v,v_pos__10928,val),this__10927.start,((this__10927.end > (v_pos__10928 + 1)) ? this__10927.end : (v_pos__10928 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__10954 = null;
var G__10954__2 = (function (this_sym10929,k){
var this__10931 = this;
var this_sym10929__10932 = this;
var coll__10933 = this_sym10929__10932;
return coll__10933.cljs$core$ILookup$_lookup$arity$2(coll__10933,k);
});
var G__10954__3 = (function (this_sym10930,k,not_found){
var this__10931 = this;
var this_sym10930__10934 = this;
var coll__10935 = this_sym10930__10934;
return coll__10935.cljs$core$ILookup$_lookup$arity$3(coll__10935,k,not_found);
});
G__10954 = function(this_sym10930,k,not_found){
switch(arguments.length){
case 2:
return G__10954__2.call(this,this_sym10930,k);
case 3:
return G__10954__3.call(this,this_sym10930,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10954;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym10920,args10921){
var this__10936 = this;
return this_sym10920.call.apply(this_sym10920,[this_sym10920].concat(args10921.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10937 = this;
return (new cljs.core.Subvec(this__10937.meta,cljs.core._assoc_n.call(null,this__10937.v,this__10937.end,o),this__10937.start,(this__10937.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__10938 = this;
var this__10939 = this;
return cljs.core.pr_str.call(null,this__10939);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__10940 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__10941 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10942 = this;
var subvec_seq__10943 = (function subvec_seq(i){
if((i === this__10942.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__10942.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__10943.call(null,this__10942.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10944 = this;
return (this__10944.end - this__10944.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10945 = this;
return cljs.core._nth.call(null,this__10945.v,(this__10945.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10946 = this;
if((this__10946.start === this__10946.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__10946.meta,this__10946.v,this__10946.start,(this__10946.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10947 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10948 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10949 = this;
return (new cljs.core.Subvec(meta,this__10949.v,this__10949.start,this__10949.end,this__10949.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10950 = this;
return this__10950.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10951 = this;
return cljs.core._nth.call(null,this__10951.v,(this__10951.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10952 = this;
return cljs.core._nth.call(null,this__10952.v,(this__10952.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10953 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10953.meta);
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
var ret__10956 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__10956,0,tl.length);
return ret__10956;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__10960 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__10961 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10960,subidx__10961,(((level === 5))?tail_node:(function (){var child__10962 = cljs.core.pv_aget.call(null,ret__10960,subidx__10961);
if(!((child__10962 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__10962,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__10960;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__10967 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__10968 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10969 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__10967,subidx__10968));
if((function (){var and__3822__auto____10970 = (new_child__10969 == null);
if(and__3822__auto____10970)
{return (subidx__10968 === 0);
} else
{return and__3822__auto____10970;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__10967,subidx__10968,new_child__10969);
return node__10967;
}
} else
{if((subidx__10968 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__10967,subidx__10968,null);
return node__10967;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____10975 = (0 <= i);
if(and__3822__auto____10975)
{return (i < tv.cnt);
} else
{return and__3822__auto____10975;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__10976 = tv.root;
var node__10977 = root__10976;
var level__10978 = tv.shift;
while(true){
if((level__10978 > 0))
{{
var G__10979 = cljs.core.tv_ensure_editable.call(null,root__10976.edit,cljs.core.pv_aget.call(null,node__10977,((i >>> level__10978) & 31)));
var G__10980 = (level__10978 - 5);
node__10977 = G__10979;
level__10978 = G__10980;
continue;
}
} else
{return node__10977.arr;
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
var G__11020 = null;
var G__11020__2 = (function (this_sym10983,k){
var this__10985 = this;
var this_sym10983__10986 = this;
var coll__10987 = this_sym10983__10986;
return coll__10987.cljs$core$ILookup$_lookup$arity$2(coll__10987,k);
});
var G__11020__3 = (function (this_sym10984,k,not_found){
var this__10985 = this;
var this_sym10984__10988 = this;
var coll__10989 = this_sym10984__10988;
return coll__10989.cljs$core$ILookup$_lookup$arity$3(coll__10989,k,not_found);
});
G__11020 = function(this_sym10984,k,not_found){
switch(arguments.length){
case 2:
return G__11020__2.call(this,this_sym10984,k);
case 3:
return G__11020__3.call(this,this_sym10984,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11020;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym10981,args10982){
var this__10990 = this;
return this_sym10981.call.apply(this_sym10981,[this_sym10981].concat(args10982.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10991 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10992 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10993 = this;
if(this__10993.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10994 = this;
if((function (){var and__3822__auto____10995 = (0 <= n);
if(and__3822__auto____10995)
{return (n < this__10994.cnt);
} else
{return and__3822__auto____10995;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10996 = this;
if(this__10996.root.edit)
{return this__10996.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__10997 = this;
if(this__10997.root.edit)
{if((function (){var and__3822__auto____10998 = (0 <= n);
if(and__3822__auto____10998)
{return (n < this__10997.cnt);
} else
{return and__3822__auto____10998;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__10997.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__11003 = (function go(level,node){
var node__11001 = cljs.core.tv_ensure_editable.call(null,this__10997.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__11001,(n & 31),val);
return node__11001;
} else
{var subidx__11002 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__11001,subidx__11002,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__11001,subidx__11002)));
return node__11001;
}
}).call(null,this__10997.shift,this__10997.root);
this__10997.root = new_root__11003;
return tcoll;
}
} else
{if((n === this__10997.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__10997.cnt)].join('')));
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
var this__11004 = this;
if(this__11004.root.edit)
{if((this__11004.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__11004.cnt))
{this__11004.cnt = 0;
return tcoll;
} else
{if((((this__11004.cnt - 1) & 31) > 0))
{this__11004.cnt = (this__11004.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__11005 = cljs.core.editable_array_for.call(null,tcoll,(this__11004.cnt - 2));
var new_root__11007 = (function (){var nr__11006 = cljs.core.tv_pop_tail.call(null,tcoll,this__11004.shift,this__11004.root);
if(!((nr__11006 == null)))
{return nr__11006;
} else
{return (new cljs.core.VectorNode(this__11004.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____11008 = (5 < this__11004.shift);
if(and__3822__auto____11008)
{return (cljs.core.pv_aget.call(null,new_root__11007,1) == null);
} else
{return and__3822__auto____11008;
}
})())
{var new_root__11009 = cljs.core.tv_ensure_editable.call(null,this__11004.root.edit,cljs.core.pv_aget.call(null,new_root__11007,0));
this__11004.root = new_root__11009;
this__11004.shift = (this__11004.shift - 5);
this__11004.cnt = (this__11004.cnt - 1);
this__11004.tail = new_tail__11005;
return tcoll;
} else
{this__11004.root = new_root__11007;
this__11004.cnt = (this__11004.cnt - 1);
this__11004.tail = new_tail__11005;
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
var this__11010 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11011 = this;
if(this__11011.root.edit)
{if(((this__11011.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__11011.tail[(this__11011.cnt & 31)] = o);
this__11011.cnt = (this__11011.cnt + 1);
return tcoll;
} else
{var tail_node__11012 = (new cljs.core.VectorNode(this__11011.root.edit,this__11011.tail));
var new_tail__11013 = cljs.core.make_array.call(null,32);
(new_tail__11013[0] = o);
this__11011.tail = new_tail__11013;
if(((this__11011.cnt >>> 5) > (1 << this__11011.shift)))
{var new_root_array__11014 = cljs.core.make_array.call(null,32);
var new_shift__11015 = (this__11011.shift + 5);
(new_root_array__11014[0] = this__11011.root);
(new_root_array__11014[1] = cljs.core.new_path.call(null,this__11011.root.edit,this__11011.shift,tail_node__11012));
this__11011.root = (new cljs.core.VectorNode(this__11011.root.edit,new_root_array__11014));
this__11011.shift = new_shift__11015;
this__11011.cnt = (this__11011.cnt + 1);
return tcoll;
} else
{var new_root__11016 = cljs.core.tv_push_tail.call(null,tcoll,this__11011.shift,this__11011.root,tail_node__11012);
this__11011.root = new_root__11016;
this__11011.cnt = (this__11011.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11017 = this;
if(this__11017.root.edit)
{this__11017.root.edit = null;
var len__11018 = (this__11017.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__11019 = cljs.core.make_array.call(null,len__11018);
cljs.core.array_copy.call(null,this__11017.tail,0,trimmed_tail__11019,0,len__11018);
return (new cljs.core.PersistentVector(null,this__11017.cnt,this__11017.shift,this__11017.root,trimmed_tail__11019,null));
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
var this__11021 = this;
var h__2192__auto____11022 = this__11021.__hash;
if(!((h__2192__auto____11022 == null)))
{return h__2192__auto____11022;
} else
{var h__2192__auto____11023 = cljs.core.hash_coll.call(null,coll);
this__11021.__hash = h__2192__auto____11023;
return h__2192__auto____11023;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11024 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__11025 = this;
var this__11026 = this;
return cljs.core.pr_str.call(null,this__11026);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11027 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11028 = this;
return cljs.core._first.call(null,this__11028.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11029 = this;
var temp__3971__auto____11030 = cljs.core.next.call(null,this__11029.front);
if(temp__3971__auto____11030)
{var f1__11031 = temp__3971__auto____11030;
return (new cljs.core.PersistentQueueSeq(this__11029.meta,f1__11031,this__11029.rear,null));
} else
{if((this__11029.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__11029.meta,this__11029.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11032 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11033 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__11033.front,this__11033.rear,this__11033.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11034 = this;
return this__11034.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11035 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11035.meta);
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
var this__11036 = this;
var h__2192__auto____11037 = this__11036.__hash;
if(!((h__2192__auto____11037 == null)))
{return h__2192__auto____11037;
} else
{var h__2192__auto____11038 = cljs.core.hash_coll.call(null,coll);
this__11036.__hash = h__2192__auto____11038;
return h__2192__auto____11038;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11039 = this;
if(cljs.core.truth_(this__11039.front))
{return (new cljs.core.PersistentQueue(this__11039.meta,(this__11039.count + 1),this__11039.front,cljs.core.conj.call(null,(function (){var or__3824__auto____11040 = this__11039.rear;
if(cljs.core.truth_(or__3824__auto____11040))
{return or__3824__auto____11040;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__11039.meta,(this__11039.count + 1),cljs.core.conj.call(null,this__11039.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__11041 = this;
var this__11042 = this;
return cljs.core.pr_str.call(null,this__11042);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11043 = this;
var rear__11044 = cljs.core.seq.call(null,this__11043.rear);
if(cljs.core.truth_((function (){var or__3824__auto____11045 = this__11043.front;
if(cljs.core.truth_(or__3824__auto____11045))
{return or__3824__auto____11045;
} else
{return rear__11044;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__11043.front,cljs.core.seq.call(null,rear__11044),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11046 = this;
return this__11046.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__11047 = this;
return cljs.core._first.call(null,this__11047.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__11048 = this;
if(cljs.core.truth_(this__11048.front))
{var temp__3971__auto____11049 = cljs.core.next.call(null,this__11048.front);
if(temp__3971__auto____11049)
{var f1__11050 = temp__3971__auto____11049;
return (new cljs.core.PersistentQueue(this__11048.meta,(this__11048.count - 1),f1__11050,this__11048.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__11048.meta,(this__11048.count - 1),cljs.core.seq.call(null,this__11048.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11051 = this;
return cljs.core.first.call(null,this__11051.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11052 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11053 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11054 = this;
return (new cljs.core.PersistentQueue(meta,this__11054.count,this__11054.front,this__11054.rear,this__11054.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11055 = this;
return this__11055.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11056 = this;
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
var this__11057 = this;
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
var len__11060 = array.length;
var i__11061 = 0;
while(true){
if((i__11061 < len__11060))
{if((k === (array[i__11061])))
{return i__11061;
} else
{{
var G__11062 = (i__11061 + incr);
i__11061 = G__11062;
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
var a__11065 = cljs.core.hash.call(null,a);
var b__11066 = cljs.core.hash.call(null,b);
if((a__11065 < b__11066))
{return -1;
} else
{if((a__11065 > b__11066))
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
var ks__11074 = m.keys;
var len__11075 = ks__11074.length;
var so__11076 = m.strobj;
var out__11077 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__11078 = 0;
var out__11079 = cljs.core.transient$.call(null,out__11077);
while(true){
if((i__11078 < len__11075))
{var k__11080 = (ks__11074[i__11078]);
{
var G__11081 = (i__11078 + 1);
var G__11082 = cljs.core.assoc_BANG_.call(null,out__11079,k__11080,(so__11076[k__11080]));
i__11078 = G__11081;
out__11079 = G__11082;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__11079,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__11088 = {};
var l__11089 = ks.length;
var i__11090 = 0;
while(true){
if((i__11090 < l__11089))
{var k__11091 = (ks[i__11090]);
(new_obj__11088[k__11091] = (obj[k__11091]));
{
var G__11092 = (i__11090 + 1);
i__11090 = G__11092;
continue;
}
} else
{}
break;
}
return new_obj__11088;
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
var this__11095 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11096 = this;
var h__2192__auto____11097 = this__11096.__hash;
if(!((h__2192__auto____11097 == null)))
{return h__2192__auto____11097;
} else
{var h__2192__auto____11098 = cljs.core.hash_imap.call(null,coll);
this__11096.__hash = h__2192__auto____11098;
return h__2192__auto____11098;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11099 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11100 = this;
if((function (){var and__3822__auto____11101 = goog.isString(k);
if(and__3822__auto____11101)
{return !((cljs.core.scan_array.call(null,1,k,this__11100.keys) == null));
} else
{return and__3822__auto____11101;
}
})())
{return (this__11100.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11102 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____11103 = (this__11102.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____11103)
{return or__3824__auto____11103;
} else
{return (this__11102.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__11102.keys) == null)))
{var new_strobj__11104 = cljs.core.obj_clone.call(null,this__11102.strobj,this__11102.keys);
(new_strobj__11104[k] = v);
return (new cljs.core.ObjMap(this__11102.meta,this__11102.keys,new_strobj__11104,(this__11102.update_count + 1),null));
} else
{var new_strobj__11105 = cljs.core.obj_clone.call(null,this__11102.strobj,this__11102.keys);
var new_keys__11106 = this__11102.keys.slice();
(new_strobj__11105[k] = v);
new_keys__11106.push(k);
return (new cljs.core.ObjMap(this__11102.meta,new_keys__11106,new_strobj__11105,(this__11102.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11107 = this;
if((function (){var and__3822__auto____11108 = goog.isString(k);
if(and__3822__auto____11108)
{return !((cljs.core.scan_array.call(null,1,k,this__11107.keys) == null));
} else
{return and__3822__auto____11108;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__11130 = null;
var G__11130__2 = (function (this_sym11109,k){
var this__11111 = this;
var this_sym11109__11112 = this;
var coll__11113 = this_sym11109__11112;
return coll__11113.cljs$core$ILookup$_lookup$arity$2(coll__11113,k);
});
var G__11130__3 = (function (this_sym11110,k,not_found){
var this__11111 = this;
var this_sym11110__11114 = this;
var coll__11115 = this_sym11110__11114;
return coll__11115.cljs$core$ILookup$_lookup$arity$3(coll__11115,k,not_found);
});
G__11130 = function(this_sym11110,k,not_found){
switch(arguments.length){
case 2:
return G__11130__2.call(this,this_sym11110,k);
case 3:
return G__11130__3.call(this,this_sym11110,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11130;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym11093,args11094){
var this__11116 = this;
return this_sym11093.call.apply(this_sym11093,[this_sym11093].concat(args11094.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11117 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__11118 = this;
var this__11119 = this;
return cljs.core.pr_str.call(null,this__11119);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11120 = this;
if((this__11120.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__11083_SHARP_){
return cljs.core.vector.call(null,p1__11083_SHARP_,(this__11120.strobj[p1__11083_SHARP_]));
}),this__11120.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11121 = this;
return this__11121.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11122 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11123 = this;
return (new cljs.core.ObjMap(meta,this__11123.keys,this__11123.strobj,this__11123.update_count,this__11123.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11124 = this;
return this__11124.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11125 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__11125.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11126 = this;
if((function (){var and__3822__auto____11127 = goog.isString(k);
if(and__3822__auto____11127)
{return !((cljs.core.scan_array.call(null,1,k,this__11126.keys) == null));
} else
{return and__3822__auto____11127;
}
})())
{var new_keys__11128 = this__11126.keys.slice();
var new_strobj__11129 = cljs.core.obj_clone.call(null,this__11126.strobj,this__11126.keys);
new_keys__11128.splice(cljs.core.scan_array.call(null,1,k,new_keys__11128),1);
cljs.core.js_delete.call(null,new_strobj__11129,k);
return (new cljs.core.ObjMap(this__11126.meta,new_keys__11128,new_strobj__11129,(this__11126.update_count + 1),null));
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
var this__11134 = this;
var h__2192__auto____11135 = this__11134.__hash;
if(!((h__2192__auto____11135 == null)))
{return h__2192__auto____11135;
} else
{var h__2192__auto____11136 = cljs.core.hash_imap.call(null,coll);
this__11134.__hash = h__2192__auto____11136;
return h__2192__auto____11136;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11137 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11138 = this;
var bucket__11139 = (this__11138.hashobj[cljs.core.hash.call(null,k)]);
var i__11140 = (cljs.core.truth_(bucket__11139)?cljs.core.scan_array.call(null,2,k,bucket__11139):null);
if(cljs.core.truth_(i__11140))
{return (bucket__11139[(i__11140 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11141 = this;
var h__11142 = cljs.core.hash.call(null,k);
var bucket__11143 = (this__11141.hashobj[h__11142]);
if(cljs.core.truth_(bucket__11143))
{var new_bucket__11144 = bucket__11143.slice();
var new_hashobj__11145 = goog.object.clone(this__11141.hashobj);
(new_hashobj__11145[h__11142] = new_bucket__11144);
var temp__3971__auto____11146 = cljs.core.scan_array.call(null,2,k,new_bucket__11144);
if(cljs.core.truth_(temp__3971__auto____11146))
{var i__11147 = temp__3971__auto____11146;
(new_bucket__11144[(i__11147 + 1)] = v);
return (new cljs.core.HashMap(this__11141.meta,this__11141.count,new_hashobj__11145,null));
} else
{new_bucket__11144.push(k,v);
return (new cljs.core.HashMap(this__11141.meta,(this__11141.count + 1),new_hashobj__11145,null));
}
} else
{var new_hashobj__11148 = goog.object.clone(this__11141.hashobj);
(new_hashobj__11148[h__11142] = [k,v]);
return (new cljs.core.HashMap(this__11141.meta,(this__11141.count + 1),new_hashobj__11148,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11149 = this;
var bucket__11150 = (this__11149.hashobj[cljs.core.hash.call(null,k)]);
var i__11151 = (cljs.core.truth_(bucket__11150)?cljs.core.scan_array.call(null,2,k,bucket__11150):null);
if(cljs.core.truth_(i__11151))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__11176 = null;
var G__11176__2 = (function (this_sym11152,k){
var this__11154 = this;
var this_sym11152__11155 = this;
var coll__11156 = this_sym11152__11155;
return coll__11156.cljs$core$ILookup$_lookup$arity$2(coll__11156,k);
});
var G__11176__3 = (function (this_sym11153,k,not_found){
var this__11154 = this;
var this_sym11153__11157 = this;
var coll__11158 = this_sym11153__11157;
return coll__11158.cljs$core$ILookup$_lookup$arity$3(coll__11158,k,not_found);
});
G__11176 = function(this_sym11153,k,not_found){
switch(arguments.length){
case 2:
return G__11176__2.call(this,this_sym11153,k);
case 3:
return G__11176__3.call(this,this_sym11153,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11176;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym11132,args11133){
var this__11159 = this;
return this_sym11132.call.apply(this_sym11132,[this_sym11132].concat(args11133.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11160 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__11161 = this;
var this__11162 = this;
return cljs.core.pr_str.call(null,this__11162);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11163 = this;
if((this__11163.count > 0))
{var hashes__11164 = cljs.core.js_keys.call(null,this__11163.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__11131_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__11163.hashobj[p1__11131_SHARP_])));
}),hashes__11164);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11165 = this;
return this__11165.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11166 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11167 = this;
return (new cljs.core.HashMap(meta,this__11167.count,this__11167.hashobj,this__11167.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11168 = this;
return this__11168.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11169 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__11169.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11170 = this;
var h__11171 = cljs.core.hash.call(null,k);
var bucket__11172 = (this__11170.hashobj[h__11171]);
var i__11173 = (cljs.core.truth_(bucket__11172)?cljs.core.scan_array.call(null,2,k,bucket__11172):null);
if(cljs.core.not.call(null,i__11173))
{return coll;
} else
{var new_hashobj__11174 = goog.object.clone(this__11170.hashobj);
if((3 > bucket__11172.length))
{cljs.core.js_delete.call(null,new_hashobj__11174,h__11171);
} else
{var new_bucket__11175 = bucket__11172.slice();
new_bucket__11175.splice(i__11173,2);
(new_hashobj__11174[h__11171] = new_bucket__11175);
}
return (new cljs.core.HashMap(this__11170.meta,(this__11170.count - 1),new_hashobj__11174,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__11177 = ks.length;
var i__11178 = 0;
var out__11179 = cljs.core.HashMap.EMPTY;
while(true){
if((i__11178 < len__11177))
{{
var G__11180 = (i__11178 + 1);
var G__11181 = cljs.core.assoc.call(null,out__11179,(ks[i__11178]),(vs[i__11178]));
i__11178 = G__11180;
out__11179 = G__11181;
continue;
}
} else
{return out__11179;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__11185 = m.arr;
var len__11186 = arr__11185.length;
var i__11187 = 0;
while(true){
if((len__11186 <= i__11187))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__11185[i__11187]),k))
{return i__11187;
} else
{if("\uFDD0'else")
{{
var G__11188 = (i__11187 + 2);
i__11187 = G__11188;
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
var this__11191 = this;
return (new cljs.core.TransientArrayMap({},this__11191.arr.length,this__11191.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11192 = this;
var h__2192__auto____11193 = this__11192.__hash;
if(!((h__2192__auto____11193 == null)))
{return h__2192__auto____11193;
} else
{var h__2192__auto____11194 = cljs.core.hash_imap.call(null,coll);
this__11192.__hash = h__2192__auto____11194;
return h__2192__auto____11194;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11195 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11196 = this;
var idx__11197 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__11197 === -1))
{return not_found;
} else
{return (this__11196.arr[(idx__11197 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11198 = this;
var idx__11199 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__11199 === -1))
{if((this__11198.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__11198.meta,(this__11198.cnt + 1),(function (){var G__11200__11201 = this__11198.arr.slice();
G__11200__11201.push(k);
G__11200__11201.push(v);
return G__11200__11201;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__11198.arr[(idx__11199 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__11198.meta,this__11198.cnt,(function (){var G__11202__11203 = this__11198.arr.slice();
(G__11202__11203[(idx__11199 + 1)] = v);
return G__11202__11203;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11204 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__11236 = null;
var G__11236__2 = (function (this_sym11205,k){
var this__11207 = this;
var this_sym11205__11208 = this;
var coll__11209 = this_sym11205__11208;
return coll__11209.cljs$core$ILookup$_lookup$arity$2(coll__11209,k);
});
var G__11236__3 = (function (this_sym11206,k,not_found){
var this__11207 = this;
var this_sym11206__11210 = this;
var coll__11211 = this_sym11206__11210;
return coll__11211.cljs$core$ILookup$_lookup$arity$3(coll__11211,k,not_found);
});
G__11236 = function(this_sym11206,k,not_found){
switch(arguments.length){
case 2:
return G__11236__2.call(this,this_sym11206,k);
case 3:
return G__11236__3.call(this,this_sym11206,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11236;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym11189,args11190){
var this__11212 = this;
return this_sym11189.call.apply(this_sym11189,[this_sym11189].concat(args11190.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11213 = this;
var len__11214 = this__11213.arr.length;
var i__11215 = 0;
var init__11216 = init;
while(true){
if((i__11215 < len__11214))
{var init__11217 = f.call(null,init__11216,(this__11213.arr[i__11215]),(this__11213.arr[(i__11215 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__11217))
{return cljs.core.deref.call(null,init__11217);
} else
{{
var G__11237 = (i__11215 + 2);
var G__11238 = init__11217;
i__11215 = G__11237;
init__11216 = G__11238;
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
var this__11218 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__11219 = this;
var this__11220 = this;
return cljs.core.pr_str.call(null,this__11220);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11221 = this;
if((this__11221.cnt > 0))
{var len__11222 = this__11221.arr.length;
var array_map_seq__11223 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__11222))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__11221.arr[i]),(this__11221.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__11223.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11224 = this;
return this__11224.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11225 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11226 = this;
return (new cljs.core.PersistentArrayMap(meta,this__11226.cnt,this__11226.arr,this__11226.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11227 = this;
return this__11227.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11228 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11228.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11229 = this;
var idx__11230 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__11230 >= 0))
{var len__11231 = this__11229.arr.length;
var new_len__11232 = (len__11231 - 2);
if((new_len__11232 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__11233 = cljs.core.make_array.call(null,new_len__11232);
var s__11234 = 0;
var d__11235 = 0;
while(true){
if((s__11234 >= len__11231))
{return (new cljs.core.PersistentArrayMap(this__11229.meta,(this__11229.cnt - 1),new_arr__11233,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__11229.arr[s__11234])))
{{
var G__11239 = (s__11234 + 2);
var G__11240 = d__11235;
s__11234 = G__11239;
d__11235 = G__11240;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__11233[d__11235] = (this__11229.arr[s__11234]));
(new_arr__11233[(d__11235 + 1)] = (this__11229.arr[(s__11234 + 1)]));
{
var G__11241 = (s__11234 + 2);
var G__11242 = (d__11235 + 2);
s__11234 = G__11241;
d__11235 = G__11242;
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
var len__11243 = cljs.core.count.call(null,ks);
var i__11244 = 0;
var out__11245 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__11244 < len__11243))
{{
var G__11246 = (i__11244 + 1);
var G__11247 = cljs.core.assoc_BANG_.call(null,out__11245,(ks[i__11244]),(vs[i__11244]));
i__11244 = G__11246;
out__11245 = G__11247;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11245);
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
var this__11248 = this;
if(cljs.core.truth_(this__11248.editable_QMARK_))
{var idx__11249 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__11249 >= 0))
{(this__11248.arr[idx__11249] = (this__11248.arr[(this__11248.len - 2)]));
(this__11248.arr[(idx__11249 + 1)] = (this__11248.arr[(this__11248.len - 1)]));
var G__11250__11251 = this__11248.arr;
G__11250__11251.pop();
G__11250__11251.pop();
G__11250__11251;
this__11248.len = (this__11248.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__11252 = this;
if(cljs.core.truth_(this__11252.editable_QMARK_))
{var idx__11253 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__11253 === -1))
{if(((this__11252.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__11252.len = (this__11252.len + 2);
this__11252.arr.push(key);
this__11252.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__11252.len,this__11252.arr),key,val);
}
} else
{if((val === (this__11252.arr[(idx__11253 + 1)])))
{return tcoll;
} else
{(this__11252.arr[(idx__11253 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11254 = this;
if(cljs.core.truth_(this__11254.editable_QMARK_))
{if((function (){var G__11255__11256 = o;
if(G__11255__11256)
{if((function (){var or__3824__auto____11257 = (G__11255__11256.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____11257)
{return or__3824__auto____11257;
} else
{return G__11255__11256.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__11255__11256.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11255__11256);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11255__11256);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__11258 = cljs.core.seq.call(null,o);
var tcoll__11259 = tcoll;
while(true){
var temp__3971__auto____11260 = cljs.core.first.call(null,es__11258);
if(cljs.core.truth_(temp__3971__auto____11260))
{var e__11261 = temp__3971__auto____11260;
{
var G__11267 = cljs.core.next.call(null,es__11258);
var G__11268 = tcoll__11259.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__11259,cljs.core.key.call(null,e__11261),cljs.core.val.call(null,e__11261));
es__11258 = G__11267;
tcoll__11259 = G__11268;
continue;
}
} else
{return tcoll__11259;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11262 = this;
if(cljs.core.truth_(this__11262.editable_QMARK_))
{this__11262.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__11262.len,2),this__11262.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__11263 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__11264 = this;
if(cljs.core.truth_(this__11264.editable_QMARK_))
{var idx__11265 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__11265 === -1))
{return not_found;
} else
{return (this__11264.arr[(idx__11265 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__11266 = this;
if(cljs.core.truth_(this__11266.editable_QMARK_))
{return cljs.core.quot.call(null,this__11266.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__11271 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__11272 = 0;
while(true){
if((i__11272 < len))
{{
var G__11273 = cljs.core.assoc_BANG_.call(null,out__11271,(arr[i__11272]),(arr[(i__11272 + 1)]));
var G__11274 = (i__11272 + 2);
out__11271 = G__11273;
i__11272 = G__11274;
continue;
}
} else
{return out__11271;
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
var G__11279__11280 = arr.slice();
(G__11279__11280[i] = a);
return G__11279__11280;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__11281__11282 = arr.slice();
(G__11281__11282[i] = a);
(G__11281__11282[j] = b);
return G__11281__11282;
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
var new_arr__11284 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__11284,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__11284,(2 * i),(new_arr__11284.length - (2 * i)));
return new_arr__11284;
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
var editable__11287 = inode.ensure_editable(edit);
(editable__11287.arr[i] = a);
return editable__11287;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__11288 = inode.ensure_editable(edit);
(editable__11288.arr[i] = a);
(editable__11288.arr[j] = b);
return editable__11288;
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
var len__11295 = arr.length;
var i__11296 = 0;
var init__11297 = init;
while(true){
if((i__11296 < len__11295))
{var init__11300 = (function (){var k__11298 = (arr[i__11296]);
if(!((k__11298 == null)))
{return f.call(null,init__11297,k__11298,(arr[(i__11296 + 1)]));
} else
{var node__11299 = (arr[(i__11296 + 1)]);
if(!((node__11299 == null)))
{return node__11299.kv_reduce(f,init__11297);
} else
{return init__11297;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__11300))
{return cljs.core.deref.call(null,init__11300);
} else
{{
var G__11301 = (i__11296 + 2);
var G__11302 = init__11300;
i__11296 = G__11301;
init__11297 = G__11302;
continue;
}
}
} else
{return init__11297;
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
var this__11303 = this;
var inode__11304 = this;
if((this__11303.bitmap === bit))
{return null;
} else
{var editable__11305 = inode__11304.ensure_editable(e);
var earr__11306 = editable__11305.arr;
var len__11307 = earr__11306.length;
editable__11305.bitmap = (bit ^ editable__11305.bitmap);
cljs.core.array_copy.call(null,earr__11306,(2 * (i + 1)),earr__11306,(2 * i),(len__11307 - (2 * (i + 1))));
(earr__11306[(len__11307 - 2)] = null);
(earr__11306[(len__11307 - 1)] = null);
return editable__11305;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__11308 = this;
var inode__11309 = this;
var bit__11310 = (1 << ((hash >>> shift) & 0x01f));
var idx__11311 = cljs.core.bitmap_indexed_node_index.call(null,this__11308.bitmap,bit__11310);
if(((this__11308.bitmap & bit__11310) === 0))
{var n__11312 = cljs.core.bit_count.call(null,this__11308.bitmap);
if(((2 * n__11312) < this__11308.arr.length))
{var editable__11313 = inode__11309.ensure_editable(edit);
var earr__11314 = editable__11313.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__11314,(2 * idx__11311),earr__11314,(2 * (idx__11311 + 1)),(2 * (n__11312 - idx__11311)));
(earr__11314[(2 * idx__11311)] = key);
(earr__11314[((2 * idx__11311) + 1)] = val);
editable__11313.bitmap = (editable__11313.bitmap | bit__11310);
return editable__11313;
} else
{if((n__11312 >= 16))
{var nodes__11315 = cljs.core.make_array.call(null,32);
var jdx__11316 = ((hash >>> shift) & 0x01f);
(nodes__11315[jdx__11316] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__11317 = 0;
var j__11318 = 0;
while(true){
if((i__11317 < 32))
{if((((this__11308.bitmap >>> i__11317) & 1) === 0))
{{
var G__11371 = (i__11317 + 1);
var G__11372 = j__11318;
i__11317 = G__11371;
j__11318 = G__11372;
continue;
}
} else
{(nodes__11315[i__11317] = ((!(((this__11308.arr[j__11318]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__11308.arr[j__11318])),(this__11308.arr[j__11318]),(this__11308.arr[(j__11318 + 1)]),added_leaf_QMARK_):(this__11308.arr[(j__11318 + 1)])));
{
var G__11373 = (i__11317 + 1);
var G__11374 = (j__11318 + 2);
i__11317 = G__11373;
j__11318 = G__11374;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__11312 + 1),nodes__11315));
} else
{if("\uFDD0'else")
{var new_arr__11319 = cljs.core.make_array.call(null,(2 * (n__11312 + 4)));
cljs.core.array_copy.call(null,this__11308.arr,0,new_arr__11319,0,(2 * idx__11311));
(new_arr__11319[(2 * idx__11311)] = key);
(new_arr__11319[((2 * idx__11311) + 1)] = val);
cljs.core.array_copy.call(null,this__11308.arr,(2 * idx__11311),new_arr__11319,(2 * (idx__11311 + 1)),(2 * (n__11312 - idx__11311)));
added_leaf_QMARK_.val = true;
var editable__11320 = inode__11309.ensure_editable(edit);
editable__11320.arr = new_arr__11319;
editable__11320.bitmap = (editable__11320.bitmap | bit__11310);
return editable__11320;
} else
{return null;
}
}
}
} else
{var key_or_nil__11321 = (this__11308.arr[(2 * idx__11311)]);
var val_or_node__11322 = (this__11308.arr[((2 * idx__11311) + 1)]);
if((key_or_nil__11321 == null))
{var n__11323 = val_or_node__11322.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11323 === val_or_node__11322))
{return inode__11309;
} else
{return cljs.core.edit_and_set.call(null,inode__11309,edit,((2 * idx__11311) + 1),n__11323);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11321))
{if((val === val_or_node__11322))
{return inode__11309;
} else
{return cljs.core.edit_and_set.call(null,inode__11309,edit,((2 * idx__11311) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__11309,edit,(2 * idx__11311),null,((2 * idx__11311) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__11321,val_or_node__11322,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__11324 = this;
var inode__11325 = this;
return cljs.core.create_inode_seq.call(null,this__11324.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11326 = this;
var inode__11327 = this;
var bit__11328 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11326.bitmap & bit__11328) === 0))
{return inode__11327;
} else
{var idx__11329 = cljs.core.bitmap_indexed_node_index.call(null,this__11326.bitmap,bit__11328);
var key_or_nil__11330 = (this__11326.arr[(2 * idx__11329)]);
var val_or_node__11331 = (this__11326.arr[((2 * idx__11329) + 1)]);
if((key_or_nil__11330 == null))
{var n__11332 = val_or_node__11331.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__11332 === val_or_node__11331))
{return inode__11327;
} else
{if(!((n__11332 == null)))
{return cljs.core.edit_and_set.call(null,inode__11327,edit,((2 * idx__11329) + 1),n__11332);
} else
{if((this__11326.bitmap === bit__11328))
{return null;
} else
{if("\uFDD0'else")
{return inode__11327.edit_and_remove_pair(edit,bit__11328,idx__11329);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11330))
{(removed_leaf_QMARK_[0] = true);
return inode__11327.edit_and_remove_pair(edit,bit__11328,idx__11329);
} else
{if("\uFDD0'else")
{return inode__11327;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__11333 = this;
var inode__11334 = this;
if((e === this__11333.edit))
{return inode__11334;
} else
{var n__11335 = cljs.core.bit_count.call(null,this__11333.bitmap);
var new_arr__11336 = cljs.core.make_array.call(null,(((n__11335 < 0))?4:(2 * (n__11335 + 1))));
cljs.core.array_copy.call(null,this__11333.arr,0,new_arr__11336,0,(2 * n__11335));
return (new cljs.core.BitmapIndexedNode(e,this__11333.bitmap,new_arr__11336));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__11337 = this;
var inode__11338 = this;
return cljs.core.inode_kv_reduce.call(null,this__11337.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11339 = this;
var inode__11340 = this;
var bit__11341 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11339.bitmap & bit__11341) === 0))
{return not_found;
} else
{var idx__11342 = cljs.core.bitmap_indexed_node_index.call(null,this__11339.bitmap,bit__11341);
var key_or_nil__11343 = (this__11339.arr[(2 * idx__11342)]);
var val_or_node__11344 = (this__11339.arr[((2 * idx__11342) + 1)]);
if((key_or_nil__11343 == null))
{return val_or_node__11344.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11343))
{return cljs.core.PersistentVector.fromArray([key_or_nil__11343,val_or_node__11344], true);
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
var this__11345 = this;
var inode__11346 = this;
var bit__11347 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11345.bitmap & bit__11347) === 0))
{return inode__11346;
} else
{var idx__11348 = cljs.core.bitmap_indexed_node_index.call(null,this__11345.bitmap,bit__11347);
var key_or_nil__11349 = (this__11345.arr[(2 * idx__11348)]);
var val_or_node__11350 = (this__11345.arr[((2 * idx__11348) + 1)]);
if((key_or_nil__11349 == null))
{var n__11351 = val_or_node__11350.inode_without((shift + 5),hash,key);
if((n__11351 === val_or_node__11350))
{return inode__11346;
} else
{if(!((n__11351 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__11345.bitmap,cljs.core.clone_and_set.call(null,this__11345.arr,((2 * idx__11348) + 1),n__11351)));
} else
{if((this__11345.bitmap === bit__11347))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__11345.bitmap ^ bit__11347),cljs.core.remove_pair.call(null,this__11345.arr,idx__11348)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11349))
{return (new cljs.core.BitmapIndexedNode(null,(this__11345.bitmap ^ bit__11347),cljs.core.remove_pair.call(null,this__11345.arr,idx__11348)));
} else
{if("\uFDD0'else")
{return inode__11346;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11352 = this;
var inode__11353 = this;
var bit__11354 = (1 << ((hash >>> shift) & 0x01f));
var idx__11355 = cljs.core.bitmap_indexed_node_index.call(null,this__11352.bitmap,bit__11354);
if(((this__11352.bitmap & bit__11354) === 0))
{var n__11356 = cljs.core.bit_count.call(null,this__11352.bitmap);
if((n__11356 >= 16))
{var nodes__11357 = cljs.core.make_array.call(null,32);
var jdx__11358 = ((hash >>> shift) & 0x01f);
(nodes__11357[jdx__11358] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__11359 = 0;
var j__11360 = 0;
while(true){
if((i__11359 < 32))
{if((((this__11352.bitmap >>> i__11359) & 1) === 0))
{{
var G__11375 = (i__11359 + 1);
var G__11376 = j__11360;
i__11359 = G__11375;
j__11360 = G__11376;
continue;
}
} else
{(nodes__11357[i__11359] = ((!(((this__11352.arr[j__11360]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__11352.arr[j__11360])),(this__11352.arr[j__11360]),(this__11352.arr[(j__11360 + 1)]),added_leaf_QMARK_):(this__11352.arr[(j__11360 + 1)])));
{
var G__11377 = (i__11359 + 1);
var G__11378 = (j__11360 + 2);
i__11359 = G__11377;
j__11360 = G__11378;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__11356 + 1),nodes__11357));
} else
{var new_arr__11361 = cljs.core.make_array.call(null,(2 * (n__11356 + 1)));
cljs.core.array_copy.call(null,this__11352.arr,0,new_arr__11361,0,(2 * idx__11355));
(new_arr__11361[(2 * idx__11355)] = key);
(new_arr__11361[((2 * idx__11355) + 1)] = val);
cljs.core.array_copy.call(null,this__11352.arr,(2 * idx__11355),new_arr__11361,(2 * (idx__11355 + 1)),(2 * (n__11356 - idx__11355)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__11352.bitmap | bit__11354),new_arr__11361));
}
} else
{var key_or_nil__11362 = (this__11352.arr[(2 * idx__11355)]);
var val_or_node__11363 = (this__11352.arr[((2 * idx__11355) + 1)]);
if((key_or_nil__11362 == null))
{var n__11364 = val_or_node__11363.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11364 === val_or_node__11363))
{return inode__11353;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__11352.bitmap,cljs.core.clone_and_set.call(null,this__11352.arr,((2 * idx__11355) + 1),n__11364)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11362))
{if((val === val_or_node__11363))
{return inode__11353;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__11352.bitmap,cljs.core.clone_and_set.call(null,this__11352.arr,((2 * idx__11355) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__11352.bitmap,cljs.core.clone_and_set.call(null,this__11352.arr,(2 * idx__11355),null,((2 * idx__11355) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__11362,val_or_node__11363,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11365 = this;
var inode__11366 = this;
var bit__11367 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11365.bitmap & bit__11367) === 0))
{return not_found;
} else
{var idx__11368 = cljs.core.bitmap_indexed_node_index.call(null,this__11365.bitmap,bit__11367);
var key_or_nil__11369 = (this__11365.arr[(2 * idx__11368)]);
var val_or_node__11370 = (this__11365.arr[((2 * idx__11368) + 1)]);
if((key_or_nil__11369 == null))
{return val_or_node__11370.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11369))
{return val_or_node__11370;
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
var arr__11386 = array_node.arr;
var len__11387 = (2 * (array_node.cnt - 1));
var new_arr__11388 = cljs.core.make_array.call(null,len__11387);
var i__11389 = 0;
var j__11390 = 1;
var bitmap__11391 = 0;
while(true){
if((i__11389 < len__11387))
{if((function (){var and__3822__auto____11392 = !((i__11389 === idx));
if(and__3822__auto____11392)
{return !(((arr__11386[i__11389]) == null));
} else
{return and__3822__auto____11392;
}
})())
{(new_arr__11388[j__11390] = (arr__11386[i__11389]));
{
var G__11393 = (i__11389 + 1);
var G__11394 = (j__11390 + 2);
var G__11395 = (bitmap__11391 | (1 << i__11389));
i__11389 = G__11393;
j__11390 = G__11394;
bitmap__11391 = G__11395;
continue;
}
} else
{{
var G__11396 = (i__11389 + 1);
var G__11397 = j__11390;
var G__11398 = bitmap__11391;
i__11389 = G__11396;
j__11390 = G__11397;
bitmap__11391 = G__11398;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__11391,new_arr__11388));
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
var this__11399 = this;
var inode__11400 = this;
var idx__11401 = ((hash >>> shift) & 0x01f);
var node__11402 = (this__11399.arr[idx__11401]);
if((node__11402 == null))
{var editable__11403 = cljs.core.edit_and_set.call(null,inode__11400,edit,idx__11401,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__11403.cnt = (editable__11403.cnt + 1);
return editable__11403;
} else
{var n__11404 = node__11402.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11404 === node__11402))
{return inode__11400;
} else
{return cljs.core.edit_and_set.call(null,inode__11400,edit,idx__11401,n__11404);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__11405 = this;
var inode__11406 = this;
return cljs.core.create_array_node_seq.call(null,this__11405.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11407 = this;
var inode__11408 = this;
var idx__11409 = ((hash >>> shift) & 0x01f);
var node__11410 = (this__11407.arr[idx__11409]);
if((node__11410 == null))
{return inode__11408;
} else
{var n__11411 = node__11410.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__11411 === node__11410))
{return inode__11408;
} else
{if((n__11411 == null))
{if((this__11407.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__11408,edit,idx__11409);
} else
{var editable__11412 = cljs.core.edit_and_set.call(null,inode__11408,edit,idx__11409,n__11411);
editable__11412.cnt = (editable__11412.cnt - 1);
return editable__11412;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__11408,edit,idx__11409,n__11411);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__11413 = this;
var inode__11414 = this;
if((e === this__11413.edit))
{return inode__11414;
} else
{return (new cljs.core.ArrayNode(e,this__11413.cnt,this__11413.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__11415 = this;
var inode__11416 = this;
var len__11417 = this__11415.arr.length;
var i__11418 = 0;
var init__11419 = init;
while(true){
if((i__11418 < len__11417))
{var node__11420 = (this__11415.arr[i__11418]);
if(!((node__11420 == null)))
{var init__11421 = node__11420.kv_reduce(f,init__11419);
if(cljs.core.reduced_QMARK_.call(null,init__11421))
{return cljs.core.deref.call(null,init__11421);
} else
{{
var G__11440 = (i__11418 + 1);
var G__11441 = init__11421;
i__11418 = G__11440;
init__11419 = G__11441;
continue;
}
}
} else
{return null;
}
} else
{return init__11419;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11422 = this;
var inode__11423 = this;
var idx__11424 = ((hash >>> shift) & 0x01f);
var node__11425 = (this__11422.arr[idx__11424]);
if(!((node__11425 == null)))
{return node__11425.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__11426 = this;
var inode__11427 = this;
var idx__11428 = ((hash >>> shift) & 0x01f);
var node__11429 = (this__11426.arr[idx__11428]);
if(!((node__11429 == null)))
{var n__11430 = node__11429.inode_without((shift + 5),hash,key);
if((n__11430 === node__11429))
{return inode__11427;
} else
{if((n__11430 == null))
{if((this__11426.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__11427,null,idx__11428);
} else
{return (new cljs.core.ArrayNode(null,(this__11426.cnt - 1),cljs.core.clone_and_set.call(null,this__11426.arr,idx__11428,n__11430)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__11426.cnt,cljs.core.clone_and_set.call(null,this__11426.arr,idx__11428,n__11430)));
} else
{return null;
}
}
}
} else
{return inode__11427;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11431 = this;
var inode__11432 = this;
var idx__11433 = ((hash >>> shift) & 0x01f);
var node__11434 = (this__11431.arr[idx__11433]);
if((node__11434 == null))
{return (new cljs.core.ArrayNode(null,(this__11431.cnt + 1),cljs.core.clone_and_set.call(null,this__11431.arr,idx__11433,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__11435 = node__11434.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11435 === node__11434))
{return inode__11432;
} else
{return (new cljs.core.ArrayNode(null,this__11431.cnt,cljs.core.clone_and_set.call(null,this__11431.arr,idx__11433,n__11435)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11436 = this;
var inode__11437 = this;
var idx__11438 = ((hash >>> shift) & 0x01f);
var node__11439 = (this__11436.arr[idx__11438]);
if(!((node__11439 == null)))
{return node__11439.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__11444 = (2 * cnt);
var i__11445 = 0;
while(true){
if((i__11445 < lim__11444))
{if(cljs.core.key_test.call(null,key,(arr[i__11445])))
{return i__11445;
} else
{{
var G__11446 = (i__11445 + 2);
i__11445 = G__11446;
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
var this__11447 = this;
var inode__11448 = this;
if((hash === this__11447.collision_hash))
{var idx__11449 = cljs.core.hash_collision_node_find_index.call(null,this__11447.arr,this__11447.cnt,key);
if((idx__11449 === -1))
{if((this__11447.arr.length > (2 * this__11447.cnt)))
{var editable__11450 = cljs.core.edit_and_set.call(null,inode__11448,edit,(2 * this__11447.cnt),key,((2 * this__11447.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__11450.cnt = (editable__11450.cnt + 1);
return editable__11450;
} else
{var len__11451 = this__11447.arr.length;
var new_arr__11452 = cljs.core.make_array.call(null,(len__11451 + 2));
cljs.core.array_copy.call(null,this__11447.arr,0,new_arr__11452,0,len__11451);
(new_arr__11452[len__11451] = key);
(new_arr__11452[(len__11451 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__11448.ensure_editable_array(edit,(this__11447.cnt + 1),new_arr__11452);
}
} else
{if(((this__11447.arr[(idx__11449 + 1)]) === val))
{return inode__11448;
} else
{return cljs.core.edit_and_set.call(null,inode__11448,edit,(idx__11449 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__11447.collision_hash >>> shift) & 0x01f)),[null,inode__11448,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__11453 = this;
var inode__11454 = this;
return cljs.core.create_inode_seq.call(null,this__11453.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11455 = this;
var inode__11456 = this;
var idx__11457 = cljs.core.hash_collision_node_find_index.call(null,this__11455.arr,this__11455.cnt,key);
if((idx__11457 === -1))
{return inode__11456;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__11455.cnt === 1))
{return null;
} else
{var editable__11458 = inode__11456.ensure_editable(edit);
var earr__11459 = editable__11458.arr;
(earr__11459[idx__11457] = (earr__11459[((2 * this__11455.cnt) - 2)]));
(earr__11459[(idx__11457 + 1)] = (earr__11459[((2 * this__11455.cnt) - 1)]));
(earr__11459[((2 * this__11455.cnt) - 1)] = null);
(earr__11459[((2 * this__11455.cnt) - 2)] = null);
editable__11458.cnt = (editable__11458.cnt - 1);
return editable__11458;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__11460 = this;
var inode__11461 = this;
if((e === this__11460.edit))
{return inode__11461;
} else
{var new_arr__11462 = cljs.core.make_array.call(null,(2 * (this__11460.cnt + 1)));
cljs.core.array_copy.call(null,this__11460.arr,0,new_arr__11462,0,(2 * this__11460.cnt));
return (new cljs.core.HashCollisionNode(e,this__11460.collision_hash,this__11460.cnt,new_arr__11462));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__11463 = this;
var inode__11464 = this;
return cljs.core.inode_kv_reduce.call(null,this__11463.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11465 = this;
var inode__11466 = this;
var idx__11467 = cljs.core.hash_collision_node_find_index.call(null,this__11465.arr,this__11465.cnt,key);
if((idx__11467 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__11465.arr[idx__11467])))
{return cljs.core.PersistentVector.fromArray([(this__11465.arr[idx__11467]),(this__11465.arr[(idx__11467 + 1)])], true);
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
var this__11468 = this;
var inode__11469 = this;
var idx__11470 = cljs.core.hash_collision_node_find_index.call(null,this__11468.arr,this__11468.cnt,key);
if((idx__11470 === -1))
{return inode__11469;
} else
{if((this__11468.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__11468.collision_hash,(this__11468.cnt - 1),cljs.core.remove_pair.call(null,this__11468.arr,cljs.core.quot.call(null,idx__11470,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11471 = this;
var inode__11472 = this;
if((hash === this__11471.collision_hash))
{var idx__11473 = cljs.core.hash_collision_node_find_index.call(null,this__11471.arr,this__11471.cnt,key);
if((idx__11473 === -1))
{var len__11474 = this__11471.arr.length;
var new_arr__11475 = cljs.core.make_array.call(null,(len__11474 + 2));
cljs.core.array_copy.call(null,this__11471.arr,0,new_arr__11475,0,len__11474);
(new_arr__11475[len__11474] = key);
(new_arr__11475[(len__11474 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__11471.collision_hash,(this__11471.cnt + 1),new_arr__11475));
} else
{if(cljs.core._EQ_.call(null,(this__11471.arr[idx__11473]),val))
{return inode__11472;
} else
{return (new cljs.core.HashCollisionNode(null,this__11471.collision_hash,this__11471.cnt,cljs.core.clone_and_set.call(null,this__11471.arr,(idx__11473 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__11471.collision_hash >>> shift) & 0x01f)),[null,inode__11472])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11476 = this;
var inode__11477 = this;
var idx__11478 = cljs.core.hash_collision_node_find_index.call(null,this__11476.arr,this__11476.cnt,key);
if((idx__11478 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__11476.arr[idx__11478])))
{return (this__11476.arr[(idx__11478 + 1)]);
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
var this__11479 = this;
var inode__11480 = this;
if((e === this__11479.edit))
{this__11479.arr = array;
this__11479.cnt = count;
return inode__11480;
} else
{return (new cljs.core.HashCollisionNode(this__11479.edit,this__11479.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__11485 = cljs.core.hash.call(null,key1);
if((key1hash__11485 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__11485,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___11486 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__11485,key1,val1,added_leaf_QMARK___11486).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___11486);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__11487 = cljs.core.hash.call(null,key1);
if((key1hash__11487 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__11487,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___11488 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__11487,key1,val1,added_leaf_QMARK___11488).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___11488);
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
var this__11489 = this;
var h__2192__auto____11490 = this__11489.__hash;
if(!((h__2192__auto____11490 == null)))
{return h__2192__auto____11490;
} else
{var h__2192__auto____11491 = cljs.core.hash_coll.call(null,coll);
this__11489.__hash = h__2192__auto____11491;
return h__2192__auto____11491;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11492 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__11493 = this;
var this__11494 = this;
return cljs.core.pr_str.call(null,this__11494);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11495 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11496 = this;
if((this__11496.s == null))
{return cljs.core.PersistentVector.fromArray([(this__11496.nodes[this__11496.i]),(this__11496.nodes[(this__11496.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__11496.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11497 = this;
if((this__11497.s == null))
{return cljs.core.create_inode_seq.call(null,this__11497.nodes,(this__11497.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__11497.nodes,this__11497.i,cljs.core.next.call(null,this__11497.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11498 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11499 = this;
return (new cljs.core.NodeSeq(meta,this__11499.nodes,this__11499.i,this__11499.s,this__11499.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11500 = this;
return this__11500.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11501 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11501.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__11508 = nodes.length;
var j__11509 = i;
while(true){
if((j__11509 < len__11508))
{if(!(((nodes[j__11509]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__11509,null,null));
} else
{var temp__3971__auto____11510 = (nodes[(j__11509 + 1)]);
if(cljs.core.truth_(temp__3971__auto____11510))
{var node__11511 = temp__3971__auto____11510;
var temp__3971__auto____11512 = node__11511.inode_seq();
if(cljs.core.truth_(temp__3971__auto____11512))
{var node_seq__11513 = temp__3971__auto____11512;
return (new cljs.core.NodeSeq(null,nodes,(j__11509 + 2),node_seq__11513,null));
} else
{{
var G__11514 = (j__11509 + 2);
j__11509 = G__11514;
continue;
}
}
} else
{{
var G__11515 = (j__11509 + 2);
j__11509 = G__11515;
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
var this__11516 = this;
var h__2192__auto____11517 = this__11516.__hash;
if(!((h__2192__auto____11517 == null)))
{return h__2192__auto____11517;
} else
{var h__2192__auto____11518 = cljs.core.hash_coll.call(null,coll);
this__11516.__hash = h__2192__auto____11518;
return h__2192__auto____11518;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11519 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__11520 = this;
var this__11521 = this;
return cljs.core.pr_str.call(null,this__11521);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11522 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11523 = this;
return cljs.core.first.call(null,this__11523.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11524 = this;
return cljs.core.create_array_node_seq.call(null,null,this__11524.nodes,this__11524.i,cljs.core.next.call(null,this__11524.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11525 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11526 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__11526.nodes,this__11526.i,this__11526.s,this__11526.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11527 = this;
return this__11527.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11528 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11528.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__11535 = nodes.length;
var j__11536 = i;
while(true){
if((j__11536 < len__11535))
{var temp__3971__auto____11537 = (nodes[j__11536]);
if(cljs.core.truth_(temp__3971__auto____11537))
{var nj__11538 = temp__3971__auto____11537;
var temp__3971__auto____11539 = nj__11538.inode_seq();
if(cljs.core.truth_(temp__3971__auto____11539))
{var ns__11540 = temp__3971__auto____11539;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__11536 + 1),ns__11540,null));
} else
{{
var G__11541 = (j__11536 + 1);
j__11536 = G__11541;
continue;
}
}
} else
{{
var G__11542 = (j__11536 + 1);
j__11536 = G__11542;
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
var this__11545 = this;
return (new cljs.core.TransientHashMap({},this__11545.root,this__11545.cnt,this__11545.has_nil_QMARK_,this__11545.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11546 = this;
var h__2192__auto____11547 = this__11546.__hash;
if(!((h__2192__auto____11547 == null)))
{return h__2192__auto____11547;
} else
{var h__2192__auto____11548 = cljs.core.hash_imap.call(null,coll);
this__11546.__hash = h__2192__auto____11548;
return h__2192__auto____11548;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11549 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11550 = this;
if((k == null))
{if(this__11550.has_nil_QMARK_)
{return this__11550.nil_val;
} else
{return not_found;
}
} else
{if((this__11550.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__11550.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11551 = this;
if((k == null))
{if((function (){var and__3822__auto____11552 = this__11551.has_nil_QMARK_;
if(and__3822__auto____11552)
{return (v === this__11551.nil_val);
} else
{return and__3822__auto____11552;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11551.meta,((this__11551.has_nil_QMARK_)?this__11551.cnt:(this__11551.cnt + 1)),this__11551.root,true,v,null));
}
} else
{var added_leaf_QMARK___11553 = (new cljs.core.Box(false));
var new_root__11554 = (((this__11551.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__11551.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___11553);
if((new_root__11554 === this__11551.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11551.meta,((added_leaf_QMARK___11553.val)?(this__11551.cnt + 1):this__11551.cnt),new_root__11554,this__11551.has_nil_QMARK_,this__11551.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11555 = this;
if((k == null))
{return this__11555.has_nil_QMARK_;
} else
{if((this__11555.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__11555.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__11578 = null;
var G__11578__2 = (function (this_sym11556,k){
var this__11558 = this;
var this_sym11556__11559 = this;
var coll__11560 = this_sym11556__11559;
return coll__11560.cljs$core$ILookup$_lookup$arity$2(coll__11560,k);
});
var G__11578__3 = (function (this_sym11557,k,not_found){
var this__11558 = this;
var this_sym11557__11561 = this;
var coll__11562 = this_sym11557__11561;
return coll__11562.cljs$core$ILookup$_lookup$arity$3(coll__11562,k,not_found);
});
G__11578 = function(this_sym11557,k,not_found){
switch(arguments.length){
case 2:
return G__11578__2.call(this,this_sym11557,k);
case 3:
return G__11578__3.call(this,this_sym11557,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11578;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym11543,args11544){
var this__11563 = this;
return this_sym11543.call.apply(this_sym11543,[this_sym11543].concat(args11544.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11564 = this;
var init__11565 = ((this__11564.has_nil_QMARK_)?f.call(null,init,null,this__11564.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__11565))
{return cljs.core.deref.call(null,init__11565);
} else
{if(!((this__11564.root == null)))
{return this__11564.root.kv_reduce(f,init__11565);
} else
{if("\uFDD0'else")
{return init__11565;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11566 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__11567 = this;
var this__11568 = this;
return cljs.core.pr_str.call(null,this__11568);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11569 = this;
if((this__11569.cnt > 0))
{var s__11570 = ((!((this__11569.root == null)))?this__11569.root.inode_seq():null);
if(this__11569.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__11569.nil_val], true),s__11570);
} else
{return s__11570;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11571 = this;
return this__11571.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11572 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11573 = this;
return (new cljs.core.PersistentHashMap(meta,this__11573.cnt,this__11573.root,this__11573.has_nil_QMARK_,this__11573.nil_val,this__11573.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11574 = this;
return this__11574.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11575 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__11575.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11576 = this;
if((k == null))
{if(this__11576.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__11576.meta,(this__11576.cnt - 1),this__11576.root,false,null,null));
} else
{return coll;
}
} else
{if((this__11576.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__11577 = this__11576.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__11577 === this__11576.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11576.meta,(this__11576.cnt - 1),new_root__11577,this__11576.has_nil_QMARK_,this__11576.nil_val,null));
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
var len__11579 = ks.length;
var i__11580 = 0;
var out__11581 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__11580 < len__11579))
{{
var G__11582 = (i__11580 + 1);
var G__11583 = cljs.core.assoc_BANG_.call(null,out__11581,(ks[i__11580]),(vs[i__11580]));
i__11580 = G__11582;
out__11581 = G__11583;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11581);
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
var this__11584 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__11585 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__11586 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11587 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__11588 = this;
if((k == null))
{if(this__11588.has_nil_QMARK_)
{return this__11588.nil_val;
} else
{return null;
}
} else
{if((this__11588.root == null))
{return null;
} else
{return this__11588.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__11589 = this;
if((k == null))
{if(this__11589.has_nil_QMARK_)
{return this__11589.nil_val;
} else
{return not_found;
}
} else
{if((this__11589.root == null))
{return not_found;
} else
{return this__11589.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11590 = this;
if(this__11590.edit)
{return this__11590.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__11591 = this;
var tcoll__11592 = this;
if(this__11591.edit)
{if((function (){var G__11593__11594 = o;
if(G__11593__11594)
{if((function (){var or__3824__auto____11595 = (G__11593__11594.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____11595)
{return or__3824__auto____11595;
} else
{return G__11593__11594.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__11593__11594.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11593__11594);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11593__11594);
}
})())
{return tcoll__11592.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__11596 = cljs.core.seq.call(null,o);
var tcoll__11597 = tcoll__11592;
while(true){
var temp__3971__auto____11598 = cljs.core.first.call(null,es__11596);
if(cljs.core.truth_(temp__3971__auto____11598))
{var e__11599 = temp__3971__auto____11598;
{
var G__11610 = cljs.core.next.call(null,es__11596);
var G__11611 = tcoll__11597.assoc_BANG_(cljs.core.key.call(null,e__11599),cljs.core.val.call(null,e__11599));
es__11596 = G__11610;
tcoll__11597 = G__11611;
continue;
}
} else
{return tcoll__11597;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__11600 = this;
var tcoll__11601 = this;
if(this__11600.edit)
{if((k == null))
{if((this__11600.nil_val === v))
{} else
{this__11600.nil_val = v;
}
if(this__11600.has_nil_QMARK_)
{} else
{this__11600.count = (this__11600.count + 1);
this__11600.has_nil_QMARK_ = true;
}
return tcoll__11601;
} else
{var added_leaf_QMARK___11602 = (new cljs.core.Box(false));
var node__11603 = (((this__11600.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__11600.root).inode_assoc_BANG_(this__11600.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___11602);
if((node__11603 === this__11600.root))
{} else
{this__11600.root = node__11603;
}
if(added_leaf_QMARK___11602.val)
{this__11600.count = (this__11600.count + 1);
} else
{}
return tcoll__11601;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__11604 = this;
var tcoll__11605 = this;
if(this__11604.edit)
{if((k == null))
{if(this__11604.has_nil_QMARK_)
{this__11604.has_nil_QMARK_ = false;
this__11604.nil_val = null;
this__11604.count = (this__11604.count - 1);
return tcoll__11605;
} else
{return tcoll__11605;
}
} else
{if((this__11604.root == null))
{return tcoll__11605;
} else
{var removed_leaf_QMARK___11606 = (new cljs.core.Box(false));
var node__11607 = this__11604.root.inode_without_BANG_(this__11604.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___11606);
if((node__11607 === this__11604.root))
{} else
{this__11604.root = node__11607;
}
if(cljs.core.truth_((removed_leaf_QMARK___11606[0])))
{this__11604.count = (this__11604.count - 1);
} else
{}
return tcoll__11605;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__11608 = this;
var tcoll__11609 = this;
if(this__11608.edit)
{this__11608.edit = null;
return (new cljs.core.PersistentHashMap(null,this__11608.count,this__11608.root,this__11608.has_nil_QMARK_,this__11608.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__11614 = node;
var stack__11615 = stack;
while(true){
if(!((t__11614 == null)))
{{
var G__11616 = ((ascending_QMARK_)?t__11614.left:t__11614.right);
var G__11617 = cljs.core.conj.call(null,stack__11615,t__11614);
t__11614 = G__11616;
stack__11615 = G__11617;
continue;
}
} else
{return stack__11615;
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
var this__11618 = this;
var h__2192__auto____11619 = this__11618.__hash;
if(!((h__2192__auto____11619 == null)))
{return h__2192__auto____11619;
} else
{var h__2192__auto____11620 = cljs.core.hash_coll.call(null,coll);
this__11618.__hash = h__2192__auto____11620;
return h__2192__auto____11620;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11621 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__11622 = this;
var this__11623 = this;
return cljs.core.pr_str.call(null,this__11623);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11624 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11625 = this;
if((this__11625.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__11625.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__11626 = this;
return cljs.core.peek.call(null,this__11626.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__11627 = this;
var t__11628 = cljs.core.first.call(null,this__11627.stack);
var next_stack__11629 = cljs.core.tree_map_seq_push.call(null,((this__11627.ascending_QMARK_)?t__11628.right:t__11628.left),cljs.core.next.call(null,this__11627.stack),this__11627.ascending_QMARK_);
if(!((next_stack__11629 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__11629,this__11627.ascending_QMARK_,(this__11627.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11630 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11631 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__11631.stack,this__11631.ascending_QMARK_,this__11631.cnt,this__11631.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11632 = this;
return this__11632.meta;
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
{if((function (){var and__3822__auto____11634 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____11634)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____11634;
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
{if((function (){var and__3822__auto____11636 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____11636)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____11636;
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
var init__11640 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__11640))
{return cljs.core.deref.call(null,init__11640);
} else
{var init__11641 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__11640):init__11640);
if(cljs.core.reduced_QMARK_.call(null,init__11641))
{return cljs.core.deref.call(null,init__11641);
} else
{var init__11642 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__11641):init__11641);
if(cljs.core.reduced_QMARK_.call(null,init__11642))
{return cljs.core.deref.call(null,init__11642);
} else
{return init__11642;
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
var this__11645 = this;
var h__2192__auto____11646 = this__11645.__hash;
if(!((h__2192__auto____11646 == null)))
{return h__2192__auto____11646;
} else
{var h__2192__auto____11647 = cljs.core.hash_coll.call(null,coll);
this__11645.__hash = h__2192__auto____11647;
return h__2192__auto____11647;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__11648 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__11649 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__11650 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__11650.key,this__11650.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__11698 = null;
var G__11698__2 = (function (this_sym11651,k){
var this__11653 = this;
var this_sym11651__11654 = this;
var node__11655 = this_sym11651__11654;
return node__11655.cljs$core$ILookup$_lookup$arity$2(node__11655,k);
});
var G__11698__3 = (function (this_sym11652,k,not_found){
var this__11653 = this;
var this_sym11652__11656 = this;
var node__11657 = this_sym11652__11656;
return node__11657.cljs$core$ILookup$_lookup$arity$3(node__11657,k,not_found);
});
G__11698 = function(this_sym11652,k,not_found){
switch(arguments.length){
case 2:
return G__11698__2.call(this,this_sym11652,k);
case 3:
return G__11698__3.call(this,this_sym11652,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11698;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym11643,args11644){
var this__11658 = this;
return this_sym11643.call.apply(this_sym11643,[this_sym11643].concat(args11644.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__11659 = this;
return cljs.core.PersistentVector.fromArray([this__11659.key,this__11659.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__11660 = this;
return this__11660.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__11661 = this;
return this__11661.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__11662 = this;
var node__11663 = this;
return ins.balance_right(node__11663);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__11664 = this;
var node__11665 = this;
return (new cljs.core.RedNode(this__11664.key,this__11664.val,this__11664.left,this__11664.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__11666 = this;
var node__11667 = this;
return cljs.core.balance_right_del.call(null,this__11666.key,this__11666.val,this__11666.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__11668 = this;
var node__11669 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__11670 = this;
var node__11671 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__11671,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__11672 = this;
var node__11673 = this;
return cljs.core.balance_left_del.call(null,this__11672.key,this__11672.val,del,this__11672.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__11674 = this;
var node__11675 = this;
return ins.balance_left(node__11675);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__11676 = this;
var node__11677 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__11677,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__11699 = null;
var G__11699__0 = (function (){
var this__11678 = this;
var this__11680 = this;
return cljs.core.pr_str.call(null,this__11680);
});
G__11699 = function(){
switch(arguments.length){
case 0:
return G__11699__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11699;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__11681 = this;
var node__11682 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__11682,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__11683 = this;
var node__11684 = this;
return node__11684;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__11685 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__11686 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__11687 = this;
return cljs.core.list.call(null,this__11687.key,this__11687.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__11688 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__11689 = this;
return this__11689.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__11690 = this;
return cljs.core.PersistentVector.fromArray([this__11690.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__11691 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__11691.key,this__11691.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11692 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__11693 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__11693.key,this__11693.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__11694 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__11695 = this;
if((n === 0))
{return this__11695.key;
} else
{if((n === 1))
{return this__11695.val;
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
var this__11696 = this;
if((n === 0))
{return this__11696.key;
} else
{if((n === 1))
{return this__11696.val;
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
var this__11697 = this;
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
var this__11702 = this;
var h__2192__auto____11703 = this__11702.__hash;
if(!((h__2192__auto____11703 == null)))
{return h__2192__auto____11703;
} else
{var h__2192__auto____11704 = cljs.core.hash_coll.call(null,coll);
this__11702.__hash = h__2192__auto____11704;
return h__2192__auto____11704;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__11705 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__11706 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__11707 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__11707.key,this__11707.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__11755 = null;
var G__11755__2 = (function (this_sym11708,k){
var this__11710 = this;
var this_sym11708__11711 = this;
var node__11712 = this_sym11708__11711;
return node__11712.cljs$core$ILookup$_lookup$arity$2(node__11712,k);
});
var G__11755__3 = (function (this_sym11709,k,not_found){
var this__11710 = this;
var this_sym11709__11713 = this;
var node__11714 = this_sym11709__11713;
return node__11714.cljs$core$ILookup$_lookup$arity$3(node__11714,k,not_found);
});
G__11755 = function(this_sym11709,k,not_found){
switch(arguments.length){
case 2:
return G__11755__2.call(this,this_sym11709,k);
case 3:
return G__11755__3.call(this,this_sym11709,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11755;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym11700,args11701){
var this__11715 = this;
return this_sym11700.call.apply(this_sym11700,[this_sym11700].concat(args11701.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__11716 = this;
return cljs.core.PersistentVector.fromArray([this__11716.key,this__11716.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__11717 = this;
return this__11717.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__11718 = this;
return this__11718.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__11719 = this;
var node__11720 = this;
return (new cljs.core.RedNode(this__11719.key,this__11719.val,this__11719.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__11721 = this;
var node__11722 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__11723 = this;
var node__11724 = this;
return (new cljs.core.RedNode(this__11723.key,this__11723.val,this__11723.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__11725 = this;
var node__11726 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__11727 = this;
var node__11728 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__11728,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__11729 = this;
var node__11730 = this;
return (new cljs.core.RedNode(this__11729.key,this__11729.val,del,this__11729.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__11731 = this;
var node__11732 = this;
return (new cljs.core.RedNode(this__11731.key,this__11731.val,ins,this__11731.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__11733 = this;
var node__11734 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11733.left))
{return (new cljs.core.RedNode(this__11733.key,this__11733.val,this__11733.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__11733.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11733.right))
{return (new cljs.core.RedNode(this__11733.right.key,this__11733.right.val,(new cljs.core.BlackNode(this__11733.key,this__11733.val,this__11733.left,this__11733.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__11733.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__11734,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__11756 = null;
var G__11756__0 = (function (){
var this__11735 = this;
var this__11737 = this;
return cljs.core.pr_str.call(null,this__11737);
});
G__11756 = function(){
switch(arguments.length){
case 0:
return G__11756__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11756;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__11738 = this;
var node__11739 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11738.right))
{return (new cljs.core.RedNode(this__11738.key,this__11738.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__11738.left,null)),this__11738.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11738.left))
{return (new cljs.core.RedNode(this__11738.left.key,this__11738.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__11738.left.left,null)),(new cljs.core.BlackNode(this__11738.key,this__11738.val,this__11738.left.right,this__11738.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__11739,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__11740 = this;
var node__11741 = this;
return (new cljs.core.BlackNode(this__11740.key,this__11740.val,this__11740.left,this__11740.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__11742 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__11743 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__11744 = this;
return cljs.core.list.call(null,this__11744.key,this__11744.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__11745 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__11746 = this;
return this__11746.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__11747 = this;
return cljs.core.PersistentVector.fromArray([this__11747.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__11748 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__11748.key,this__11748.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11749 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__11750 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__11750.key,this__11750.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__11751 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__11752 = this;
if((n === 0))
{return this__11752.key;
} else
{if((n === 1))
{return this__11752.val;
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
var this__11753 = this;
if((n === 0))
{return this__11753.key;
} else
{if((n === 1))
{return this__11753.val;
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
var this__11754 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__11760 = comp.call(null,k,tree.key);
if((c__11760 === 0))
{(found[0] = tree);
return null;
} else
{if((c__11760 < 0))
{var ins__11761 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__11761 == null)))
{return tree.add_left(ins__11761);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__11762 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__11762 == null)))
{return tree.add_right(ins__11762);
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
{var app__11765 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__11765))
{return (new cljs.core.RedNode(app__11765.key,app__11765.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__11765.left,null)),(new cljs.core.RedNode(right.key,right.val,app__11765.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__11765,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__11766 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__11766))
{return (new cljs.core.RedNode(app__11766.key,app__11766.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__11766.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__11766.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__11766,right.right,null)));
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
{var c__11772 = comp.call(null,k,tree.key);
if((c__11772 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__11772 < 0))
{var del__11773 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____11774 = !((del__11773 == null));
if(or__3824__auto____11774)
{return or__3824__auto____11774;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__11773,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__11773,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__11775 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____11776 = !((del__11775 == null));
if(or__3824__auto____11776)
{return or__3824__auto____11776;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__11775);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__11775,null));
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
var tk__11779 = tree.key;
var c__11780 = comp.call(null,k,tk__11779);
if((c__11780 === 0))
{return tree.replace(tk__11779,v,tree.left,tree.right);
} else
{if((c__11780 < 0))
{return tree.replace(tk__11779,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__11779,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__11783 = this;
var h__2192__auto____11784 = this__11783.__hash;
if(!((h__2192__auto____11784 == null)))
{return h__2192__auto____11784;
} else
{var h__2192__auto____11785 = cljs.core.hash_imap.call(null,coll);
this__11783.__hash = h__2192__auto____11785;
return h__2192__auto____11785;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11786 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11787 = this;
var n__11788 = coll.entry_at(k);
if(!((n__11788 == null)))
{return n__11788.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11789 = this;
var found__11790 = [null];
var t__11791 = cljs.core.tree_map_add.call(null,this__11789.comp,this__11789.tree,k,v,found__11790);
if((t__11791 == null))
{var found_node__11792 = cljs.core.nth.call(null,found__11790,0);
if(cljs.core._EQ_.call(null,v,found_node__11792.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11789.comp,cljs.core.tree_map_replace.call(null,this__11789.comp,this__11789.tree,k,v),this__11789.cnt,this__11789.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11789.comp,t__11791.blacken(),(this__11789.cnt + 1),this__11789.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11793 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__11827 = null;
var G__11827__2 = (function (this_sym11794,k){
var this__11796 = this;
var this_sym11794__11797 = this;
var coll__11798 = this_sym11794__11797;
return coll__11798.cljs$core$ILookup$_lookup$arity$2(coll__11798,k);
});
var G__11827__3 = (function (this_sym11795,k,not_found){
var this__11796 = this;
var this_sym11795__11799 = this;
var coll__11800 = this_sym11795__11799;
return coll__11800.cljs$core$ILookup$_lookup$arity$3(coll__11800,k,not_found);
});
G__11827 = function(this_sym11795,k,not_found){
switch(arguments.length){
case 2:
return G__11827__2.call(this,this_sym11795,k);
case 3:
return G__11827__3.call(this,this_sym11795,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11827;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym11781,args11782){
var this__11801 = this;
return this_sym11781.call.apply(this_sym11781,[this_sym11781].concat(args11782.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11802 = this;
if(!((this__11802.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__11802.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11803 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11804 = this;
if((this__11804.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11804.tree,false,this__11804.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__11805 = this;
var this__11806 = this;
return cljs.core.pr_str.call(null,this__11806);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__11807 = this;
var coll__11808 = this;
var t__11809 = this__11807.tree;
while(true){
if(!((t__11809 == null)))
{var c__11810 = this__11807.comp.call(null,k,t__11809.key);
if((c__11810 === 0))
{return t__11809;
} else
{if((c__11810 < 0))
{{
var G__11828 = t__11809.left;
t__11809 = G__11828;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__11829 = t__11809.right;
t__11809 = G__11829;
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
var this__11811 = this;
if((this__11811.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11811.tree,ascending_QMARK_,this__11811.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11812 = this;
if((this__11812.cnt > 0))
{var stack__11813 = null;
var t__11814 = this__11812.tree;
while(true){
if(!((t__11814 == null)))
{var c__11815 = this__11812.comp.call(null,k,t__11814.key);
if((c__11815 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__11813,t__11814),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__11815 < 0))
{{
var G__11830 = cljs.core.conj.call(null,stack__11813,t__11814);
var G__11831 = t__11814.left;
stack__11813 = G__11830;
t__11814 = G__11831;
continue;
}
} else
{{
var G__11832 = stack__11813;
var G__11833 = t__11814.right;
stack__11813 = G__11832;
t__11814 = G__11833;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__11815 > 0))
{{
var G__11834 = cljs.core.conj.call(null,stack__11813,t__11814);
var G__11835 = t__11814.right;
stack__11813 = G__11834;
t__11814 = G__11835;
continue;
}
} else
{{
var G__11836 = stack__11813;
var G__11837 = t__11814.left;
stack__11813 = G__11836;
t__11814 = G__11837;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__11813 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__11813,ascending_QMARK_,-1,null));
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
var this__11816 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11817 = this;
return this__11817.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11818 = this;
if((this__11818.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11818.tree,true,this__11818.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11819 = this;
return this__11819.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11820 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11821 = this;
return (new cljs.core.PersistentTreeMap(this__11821.comp,this__11821.tree,this__11821.cnt,meta,this__11821.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11822 = this;
return this__11822.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11823 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__11823.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11824 = this;
var found__11825 = [null];
var t__11826 = cljs.core.tree_map_remove.call(null,this__11824.comp,this__11824.tree,k,found__11825);
if((t__11826 == null))
{if((cljs.core.nth.call(null,found__11825,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11824.comp,null,0,this__11824.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11824.comp,t__11826.blacken(),(this__11824.cnt - 1),this__11824.meta,null));
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
var in__11840 = cljs.core.seq.call(null,keyvals);
var out__11841 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__11840)
{{
var G__11842 = cljs.core.nnext.call(null,in__11840);
var G__11843 = cljs.core.assoc_BANG_.call(null,out__11841,cljs.core.first.call(null,in__11840),cljs.core.second.call(null,in__11840));
in__11840 = G__11842;
out__11841 = G__11843;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11841);
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
hash_map.cljs$lang$applyTo = (function (arglist__11844){
var keyvals = cljs.core.seq(arglist__11844);;
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
array_map.cljs$lang$applyTo = (function (arglist__11845){
var keyvals = cljs.core.seq(arglist__11845);;
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
var ks__11849 = [];
var obj__11850 = {};
var kvs__11851 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__11851)
{ks__11849.push(cljs.core.first.call(null,kvs__11851));
(obj__11850[cljs.core.first.call(null,kvs__11851)] = cljs.core.second.call(null,kvs__11851));
{
var G__11852 = cljs.core.nnext.call(null,kvs__11851);
kvs__11851 = G__11852;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__11849,obj__11850);
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
obj_map.cljs$lang$applyTo = (function (arglist__11853){
var keyvals = cljs.core.seq(arglist__11853);;
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
var in__11856 = cljs.core.seq.call(null,keyvals);
var out__11857 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__11856)
{{
var G__11858 = cljs.core.nnext.call(null,in__11856);
var G__11859 = cljs.core.assoc.call(null,out__11857,cljs.core.first.call(null,in__11856),cljs.core.second.call(null,in__11856));
in__11856 = G__11858;
out__11857 = G__11859;
continue;
}
} else
{return out__11857;
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
sorted_map.cljs$lang$applyTo = (function (arglist__11860){
var keyvals = cljs.core.seq(arglist__11860);;
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
var in__11863 = cljs.core.seq.call(null,keyvals);
var out__11864 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__11863)
{{
var G__11865 = cljs.core.nnext.call(null,in__11863);
var G__11866 = cljs.core.assoc.call(null,out__11864,cljs.core.first.call(null,in__11863),cljs.core.second.call(null,in__11863));
in__11863 = G__11865;
out__11864 = G__11866;
continue;
}
} else
{return out__11864;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__11867){
var comparator = cljs.core.first(arglist__11867);
var keyvals = cljs.core.rest(arglist__11867);
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
{return cljs.core.reduce.call(null,(function (p1__11868_SHARP_,p2__11869_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____11871 = p1__11868_SHARP_;
if(cljs.core.truth_(or__3824__auto____11871))
{return or__3824__auto____11871;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__11869_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__11872){
var maps = cljs.core.seq(arglist__11872);;
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
{var merge_entry__11880 = (function (m,e){
var k__11878 = cljs.core.first.call(null,e);
var v__11879 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__11878))
{return cljs.core.assoc.call(null,m,k__11878,f.call(null,cljs.core._lookup.call(null,m,k__11878,null),v__11879));
} else
{return cljs.core.assoc.call(null,m,k__11878,v__11879);
}
});
var merge2__11882 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__11880,(function (){var or__3824__auto____11881 = m1;
if(cljs.core.truth_(or__3824__auto____11881))
{return or__3824__auto____11881;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__11882,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__11883){
var f = cljs.core.first(arglist__11883);
var maps = cljs.core.rest(arglist__11883);
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
var ret__11888 = cljs.core.ObjMap.EMPTY;
var keys__11889 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__11889)
{var key__11890 = cljs.core.first.call(null,keys__11889);
var entry__11891 = cljs.core._lookup.call(null,map,key__11890,"\uFDD0'cljs.core/not-found");
{
var G__11892 = ((cljs.core.not_EQ_.call(null,entry__11891,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__11888,key__11890,entry__11891):ret__11888);
var G__11893 = cljs.core.next.call(null,keys__11889);
ret__11888 = G__11892;
keys__11889 = G__11893;
continue;
}
} else
{return ret__11888;
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
var this__11897 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__11897.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11898 = this;
var h__2192__auto____11899 = this__11898.__hash;
if(!((h__2192__auto____11899 == null)))
{return h__2192__auto____11899;
} else
{var h__2192__auto____11900 = cljs.core.hash_iset.call(null,coll);
this__11898.__hash = h__2192__auto____11900;
return h__2192__auto____11900;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11901 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11902 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11902.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__11923 = null;
var G__11923__2 = (function (this_sym11903,k){
var this__11905 = this;
var this_sym11903__11906 = this;
var coll__11907 = this_sym11903__11906;
return coll__11907.cljs$core$ILookup$_lookup$arity$2(coll__11907,k);
});
var G__11923__3 = (function (this_sym11904,k,not_found){
var this__11905 = this;
var this_sym11904__11908 = this;
var coll__11909 = this_sym11904__11908;
return coll__11909.cljs$core$ILookup$_lookup$arity$3(coll__11909,k,not_found);
});
G__11923 = function(this_sym11904,k,not_found){
switch(arguments.length){
case 2:
return G__11923__2.call(this,this_sym11904,k);
case 3:
return G__11923__3.call(this,this_sym11904,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11923;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym11895,args11896){
var this__11910 = this;
return this_sym11895.call.apply(this_sym11895,[this_sym11895].concat(args11896.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11911 = this;
return (new cljs.core.PersistentHashSet(this__11911.meta,cljs.core.assoc.call(null,this__11911.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__11912 = this;
var this__11913 = this;
return cljs.core.pr_str.call(null,this__11913);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11914 = this;
return cljs.core.keys.call(null,this__11914.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11915 = this;
return (new cljs.core.PersistentHashSet(this__11915.meta,cljs.core.dissoc.call(null,this__11915.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11916 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11917 = this;
var and__3822__auto____11918 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____11918)
{var and__3822__auto____11919 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____11919)
{return cljs.core.every_QMARK_.call(null,(function (p1__11894_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11894_SHARP_);
}),other);
} else
{return and__3822__auto____11919;
}
} else
{return and__3822__auto____11918;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11920 = this;
return (new cljs.core.PersistentHashSet(meta,this__11920.hash_map,this__11920.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11921 = this;
return this__11921.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11922 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__11922.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__11924 = cljs.core.count.call(null,items);
var i__11925 = 0;
var out__11926 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__11925 < len__11924))
{{
var G__11927 = (i__11925 + 1);
var G__11928 = cljs.core.conj_BANG_.call(null,out__11926,(items[i__11925]));
i__11925 = G__11927;
out__11926 = G__11928;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11926);
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
var G__11946 = null;
var G__11946__2 = (function (this_sym11932,k){
var this__11934 = this;
var this_sym11932__11935 = this;
var tcoll__11936 = this_sym11932__11935;
if((cljs.core._lookup.call(null,this__11934.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__11946__3 = (function (this_sym11933,k,not_found){
var this__11934 = this;
var this_sym11933__11937 = this;
var tcoll__11938 = this_sym11933__11937;
if((cljs.core._lookup.call(null,this__11934.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__11946 = function(this_sym11933,k,not_found){
switch(arguments.length){
case 2:
return G__11946__2.call(this,this_sym11933,k);
case 3:
return G__11946__3.call(this,this_sym11933,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11946;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym11930,args11931){
var this__11939 = this;
return this_sym11930.call.apply(this_sym11930,[this_sym11930].concat(args11931.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__11940 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__11941 = this;
if((cljs.core._lookup.call(null,this__11941.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__11942 = this;
return cljs.core.count.call(null,this__11942.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__11943 = this;
this__11943.transient_map = cljs.core.dissoc_BANG_.call(null,this__11943.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11944 = this;
this__11944.transient_map = cljs.core.assoc_BANG_.call(null,this__11944.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11945 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__11945.transient_map),null));
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
var this__11949 = this;
var h__2192__auto____11950 = this__11949.__hash;
if(!((h__2192__auto____11950 == null)))
{return h__2192__auto____11950;
} else
{var h__2192__auto____11951 = cljs.core.hash_iset.call(null,coll);
this__11949.__hash = h__2192__auto____11951;
return h__2192__auto____11951;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11952 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11953 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11953.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__11979 = null;
var G__11979__2 = (function (this_sym11954,k){
var this__11956 = this;
var this_sym11954__11957 = this;
var coll__11958 = this_sym11954__11957;
return coll__11958.cljs$core$ILookup$_lookup$arity$2(coll__11958,k);
});
var G__11979__3 = (function (this_sym11955,k,not_found){
var this__11956 = this;
var this_sym11955__11959 = this;
var coll__11960 = this_sym11955__11959;
return coll__11960.cljs$core$ILookup$_lookup$arity$3(coll__11960,k,not_found);
});
G__11979 = function(this_sym11955,k,not_found){
switch(arguments.length){
case 2:
return G__11979__2.call(this,this_sym11955,k);
case 3:
return G__11979__3.call(this,this_sym11955,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11979;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym11947,args11948){
var this__11961 = this;
return this_sym11947.call.apply(this_sym11947,[this_sym11947].concat(args11948.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11962 = this;
return (new cljs.core.PersistentTreeSet(this__11962.meta,cljs.core.assoc.call(null,this__11962.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11963 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__11963.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__11964 = this;
var this__11965 = this;
return cljs.core.pr_str.call(null,this__11965);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__11966 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__11966.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11967 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__11967.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__11968 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11969 = this;
return cljs.core._comparator.call(null,this__11969.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11970 = this;
return cljs.core.keys.call(null,this__11970.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11971 = this;
return (new cljs.core.PersistentTreeSet(this__11971.meta,cljs.core.dissoc.call(null,this__11971.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11972 = this;
return cljs.core.count.call(null,this__11972.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11973 = this;
var and__3822__auto____11974 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____11974)
{var and__3822__auto____11975 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____11975)
{return cljs.core.every_QMARK_.call(null,(function (p1__11929_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11929_SHARP_);
}),other);
} else
{return and__3822__auto____11975;
}
} else
{return and__3822__auto____11974;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11976 = this;
return (new cljs.core.PersistentTreeSet(meta,this__11976.tree_map,this__11976.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11977 = this;
return this__11977.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11978 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__11978.meta);
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
var G__11984__delegate = function (keys){
var in__11982 = cljs.core.seq.call(null,keys);
var out__11983 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__11982))
{{
var G__11985 = cljs.core.next.call(null,in__11982);
var G__11986 = cljs.core.conj_BANG_.call(null,out__11983,cljs.core.first.call(null,in__11982));
in__11982 = G__11985;
out__11983 = G__11986;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11983);
}
break;
}
};
var G__11984 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11984__delegate.call(this, keys);
};
G__11984.cljs$lang$maxFixedArity = 0;
G__11984.cljs$lang$applyTo = (function (arglist__11987){
var keys = cljs.core.seq(arglist__11987);;
return G__11984__delegate(keys);
});
G__11984.cljs$lang$arity$variadic = G__11984__delegate;
return G__11984;
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
sorted_set.cljs$lang$applyTo = (function (arglist__11988){
var keys = cljs.core.seq(arglist__11988);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__11990){
var comparator = cljs.core.first(arglist__11990);
var keys = cljs.core.rest(arglist__11990);
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
{var n__11996 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____11997 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____11997))
{var e__11998 = temp__3971__auto____11997;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__11998));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__11996,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__11989_SHARP_){
var temp__3971__auto____11999 = cljs.core.find.call(null,smap,p1__11989_SHARP_);
if(cljs.core.truth_(temp__3971__auto____11999))
{var e__12000 = temp__3971__auto____11999;
return cljs.core.second.call(null,e__12000);
} else
{return p1__11989_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__12030 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__12023,seen){
while(true){
var vec__12024__12025 = p__12023;
var f__12026 = cljs.core.nth.call(null,vec__12024__12025,0,null);
var xs__12027 = vec__12024__12025;
var temp__3974__auto____12028 = cljs.core.seq.call(null,xs__12027);
if(temp__3974__auto____12028)
{var s__12029 = temp__3974__auto____12028;
if(cljs.core.contains_QMARK_.call(null,seen,f__12026))
{{
var G__12031 = cljs.core.rest.call(null,s__12029);
var G__12032 = seen;
p__12023 = G__12031;
seen = G__12032;
continue;
}
} else
{return cljs.core.cons.call(null,f__12026,step.call(null,cljs.core.rest.call(null,s__12029),cljs.core.conj.call(null,seen,f__12026)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__12030.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__12035 = cljs.core.PersistentVector.EMPTY;
var s__12036 = s;
while(true){
if(cljs.core.next.call(null,s__12036))
{{
var G__12037 = cljs.core.conj.call(null,ret__12035,cljs.core.first.call(null,s__12036));
var G__12038 = cljs.core.next.call(null,s__12036);
ret__12035 = G__12037;
s__12036 = G__12038;
continue;
}
} else
{return cljs.core.seq.call(null,ret__12035);
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
{if((function (){var or__3824__auto____12041 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____12041)
{return or__3824__auto____12041;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__12042 = x.lastIndexOf("/");
if((i__12042 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__12042 + 1));
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
if((function (){var or__3824__auto____12045 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____12045)
{return or__3824__auto____12045;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__12046 = x.lastIndexOf("/");
if((i__12046 > -1))
{return cljs.core.subs.call(null,x,2,i__12046);
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
var map__12053 = cljs.core.ObjMap.EMPTY;
var ks__12054 = cljs.core.seq.call(null,keys);
var vs__12055 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____12056 = ks__12054;
if(and__3822__auto____12056)
{return vs__12055;
} else
{return and__3822__auto____12056;
}
})())
{{
var G__12057 = cljs.core.assoc.call(null,map__12053,cljs.core.first.call(null,ks__12054),cljs.core.first.call(null,vs__12055));
var G__12058 = cljs.core.next.call(null,ks__12054);
var G__12059 = cljs.core.next.call(null,vs__12055);
map__12053 = G__12057;
ks__12054 = G__12058;
vs__12055 = G__12059;
continue;
}
} else
{return map__12053;
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
var G__12062__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12047_SHARP_,p2__12048_SHARP_){
return max_key.call(null,k,p1__12047_SHARP_,p2__12048_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__12062 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12062__delegate.call(this, k, x, y, more);
};
G__12062.cljs$lang$maxFixedArity = 3;
G__12062.cljs$lang$applyTo = (function (arglist__12063){
var k = cljs.core.first(arglist__12063);
var x = cljs.core.first(cljs.core.next(arglist__12063));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12063)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12063)));
return G__12062__delegate(k, x, y, more);
});
G__12062.cljs$lang$arity$variadic = G__12062__delegate;
return G__12062;
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
var G__12064__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12060_SHARP_,p2__12061_SHARP_){
return min_key.call(null,k,p1__12060_SHARP_,p2__12061_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__12064 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12064__delegate.call(this, k, x, y, more);
};
G__12064.cljs$lang$maxFixedArity = 3;
G__12064.cljs$lang$applyTo = (function (arglist__12065){
var k = cljs.core.first(arglist__12065);
var x = cljs.core.first(cljs.core.next(arglist__12065));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12065)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12065)));
return G__12064__delegate(k, x, y, more);
});
G__12064.cljs$lang$arity$variadic = G__12064__delegate;
return G__12064;
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
var temp__3974__auto____12068 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12068)
{var s__12069 = temp__3974__auto____12068;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__12069),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__12069)));
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
var temp__3974__auto____12072 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12072)
{var s__12073 = temp__3974__auto____12072;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__12073))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__12073),take_while.call(null,pred,cljs.core.rest.call(null,s__12073)));
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
var comp__12075 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__12075.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__12087 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____12088 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____12088))
{var vec__12089__12090 = temp__3974__auto____12088;
var e__12091 = cljs.core.nth.call(null,vec__12089__12090,0,null);
var s__12092 = vec__12089__12090;
if(cljs.core.truth_(include__12087.call(null,e__12091)))
{return s__12092;
} else
{return cljs.core.next.call(null,s__12092);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__12087,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____12093 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____12093))
{var vec__12094__12095 = temp__3974__auto____12093;
var e__12096 = cljs.core.nth.call(null,vec__12094__12095,0,null);
var s__12097 = vec__12094__12095;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__12096))?s__12097:cljs.core.next.call(null,s__12097)));
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
var include__12109 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____12110 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____12110))
{var vec__12111__12112 = temp__3974__auto____12110;
var e__12113 = cljs.core.nth.call(null,vec__12111__12112,0,null);
var s__12114 = vec__12111__12112;
if(cljs.core.truth_(include__12109.call(null,e__12113)))
{return s__12114;
} else
{return cljs.core.next.call(null,s__12114);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__12109,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____12115 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____12115))
{var vec__12116__12117 = temp__3974__auto____12115;
var e__12118 = cljs.core.nth.call(null,vec__12116__12117,0,null);
var s__12119 = vec__12116__12117;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__12118))?s__12119:cljs.core.next.call(null,s__12119)));
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
var this__12120 = this;
var h__2192__auto____12121 = this__12120.__hash;
if(!((h__2192__auto____12121 == null)))
{return h__2192__auto____12121;
} else
{var h__2192__auto____12122 = cljs.core.hash_coll.call(null,rng);
this__12120.__hash = h__2192__auto____12122;
return h__2192__auto____12122;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__12123 = this;
if((this__12123.step > 0))
{if(((this__12123.start + this__12123.step) < this__12123.end))
{return (new cljs.core.Range(this__12123.meta,(this__12123.start + this__12123.step),this__12123.end,this__12123.step,null));
} else
{return null;
}
} else
{if(((this__12123.start + this__12123.step) > this__12123.end))
{return (new cljs.core.Range(this__12123.meta,(this__12123.start + this__12123.step),this__12123.end,this__12123.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__12124 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__12125 = this;
var this__12126 = this;
return cljs.core.pr_str.call(null,this__12126);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__12127 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__12128 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__12129 = this;
if((this__12129.step > 0))
{if((this__12129.start < this__12129.end))
{return rng;
} else
{return null;
}
} else
{if((this__12129.start > this__12129.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__12130 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__12130.end - this__12130.start) / this__12130.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__12131 = this;
return this__12131.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__12132 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__12132.meta,(this__12132.start + this__12132.step),this__12132.end,this__12132.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__12133 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__12134 = this;
return (new cljs.core.Range(meta,this__12134.start,this__12134.end,this__12134.step,this__12134.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__12135 = this;
return this__12135.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__12136 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__12136.start + (n * this__12136.step));
} else
{if((function (){var and__3822__auto____12137 = (this__12136.start > this__12136.end);
if(and__3822__auto____12137)
{return (this__12136.step === 0);
} else
{return and__3822__auto____12137;
}
})())
{return this__12136.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__12138 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__12138.start + (n * this__12138.step));
} else
{if((function (){var and__3822__auto____12139 = (this__12138.start > this__12138.end);
if(and__3822__auto____12139)
{return (this__12138.step === 0);
} else
{return and__3822__auto____12139;
}
})())
{return this__12138.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__12140 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12140.meta);
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
var temp__3974__auto____12143 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12143)
{var s__12144 = temp__3974__auto____12143;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__12144),take_nth.call(null,n,cljs.core.drop.call(null,n,s__12144)));
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
var temp__3974__auto____12151 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12151)
{var s__12152 = temp__3974__auto____12151;
var fst__12153 = cljs.core.first.call(null,s__12152);
var fv__12154 = f.call(null,fst__12153);
var run__12155 = cljs.core.cons.call(null,fst__12153,cljs.core.take_while.call(null,(function (p1__12145_SHARP_){
return cljs.core._EQ_.call(null,fv__12154,f.call(null,p1__12145_SHARP_));
}),cljs.core.next.call(null,s__12152)));
return cljs.core.cons.call(null,run__12155,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__12155),s__12152))));
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
var temp__3971__auto____12170 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____12170)
{var s__12171 = temp__3971__auto____12170;
return reductions.call(null,f,cljs.core.first.call(null,s__12171),cljs.core.rest.call(null,s__12171));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____12172 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12172)
{var s__12173 = temp__3974__auto____12172;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__12173)),cljs.core.rest.call(null,s__12173));
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
var G__12176 = null;
var G__12176__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__12176__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__12176__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__12176__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__12176__4 = (function() { 
var G__12177__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__12177 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12177__delegate.call(this, x, y, z, args);
};
G__12177.cljs$lang$maxFixedArity = 3;
G__12177.cljs$lang$applyTo = (function (arglist__12178){
var x = cljs.core.first(arglist__12178);
var y = cljs.core.first(cljs.core.next(arglist__12178));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12178)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12178)));
return G__12177__delegate(x, y, z, args);
});
G__12177.cljs$lang$arity$variadic = G__12177__delegate;
return G__12177;
})()
;
G__12176 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12176__0.call(this);
case 1:
return G__12176__1.call(this,x);
case 2:
return G__12176__2.call(this,x,y);
case 3:
return G__12176__3.call(this,x,y,z);
default:
return G__12176__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12176.cljs$lang$maxFixedArity = 3;
G__12176.cljs$lang$applyTo = G__12176__4.cljs$lang$applyTo;
return G__12176;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__12179 = null;
var G__12179__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__12179__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__12179__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__12179__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__12179__4 = (function() { 
var G__12180__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__12180 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12180__delegate.call(this, x, y, z, args);
};
G__12180.cljs$lang$maxFixedArity = 3;
G__12180.cljs$lang$applyTo = (function (arglist__12181){
var x = cljs.core.first(arglist__12181);
var y = cljs.core.first(cljs.core.next(arglist__12181));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12181)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12181)));
return G__12180__delegate(x, y, z, args);
});
G__12180.cljs$lang$arity$variadic = G__12180__delegate;
return G__12180;
})()
;
G__12179 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12179__0.call(this);
case 1:
return G__12179__1.call(this,x);
case 2:
return G__12179__2.call(this,x,y);
case 3:
return G__12179__3.call(this,x,y,z);
default:
return G__12179__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12179.cljs$lang$maxFixedArity = 3;
G__12179.cljs$lang$applyTo = G__12179__4.cljs$lang$applyTo;
return G__12179;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__12182 = null;
var G__12182__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__12182__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__12182__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__12182__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__12182__4 = (function() { 
var G__12183__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__12183 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12183__delegate.call(this, x, y, z, args);
};
G__12183.cljs$lang$maxFixedArity = 3;
G__12183.cljs$lang$applyTo = (function (arglist__12184){
var x = cljs.core.first(arglist__12184);
var y = cljs.core.first(cljs.core.next(arglist__12184));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12184)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12184)));
return G__12183__delegate(x, y, z, args);
});
G__12183.cljs$lang$arity$variadic = G__12183__delegate;
return G__12183;
})()
;
G__12182 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12182__0.call(this);
case 1:
return G__12182__1.call(this,x);
case 2:
return G__12182__2.call(this,x,y);
case 3:
return G__12182__3.call(this,x,y,z);
default:
return G__12182__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12182.cljs$lang$maxFixedArity = 3;
G__12182.cljs$lang$applyTo = G__12182__4.cljs$lang$applyTo;
return G__12182;
})()
});
var juxt__4 = (function() { 
var G__12185__delegate = function (f,g,h,fs){
var fs__12175 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__12186 = null;
var G__12186__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__12156_SHARP_,p2__12157_SHARP_){
return cljs.core.conj.call(null,p1__12156_SHARP_,p2__12157_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__12175);
});
var G__12186__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__12158_SHARP_,p2__12159_SHARP_){
return cljs.core.conj.call(null,p1__12158_SHARP_,p2__12159_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__12175);
});
var G__12186__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__12160_SHARP_,p2__12161_SHARP_){
return cljs.core.conj.call(null,p1__12160_SHARP_,p2__12161_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__12175);
});
var G__12186__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__12162_SHARP_,p2__12163_SHARP_){
return cljs.core.conj.call(null,p1__12162_SHARP_,p2__12163_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__12175);
});
var G__12186__4 = (function() { 
var G__12187__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__12164_SHARP_,p2__12165_SHARP_){
return cljs.core.conj.call(null,p1__12164_SHARP_,cljs.core.apply.call(null,p2__12165_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__12175);
};
var G__12187 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12187__delegate.call(this, x, y, z, args);
};
G__12187.cljs$lang$maxFixedArity = 3;
G__12187.cljs$lang$applyTo = (function (arglist__12188){
var x = cljs.core.first(arglist__12188);
var y = cljs.core.first(cljs.core.next(arglist__12188));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12188)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12188)));
return G__12187__delegate(x, y, z, args);
});
G__12187.cljs$lang$arity$variadic = G__12187__delegate;
return G__12187;
})()
;
G__12186 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12186__0.call(this);
case 1:
return G__12186__1.call(this,x);
case 2:
return G__12186__2.call(this,x,y);
case 3:
return G__12186__3.call(this,x,y,z);
default:
return G__12186__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12186.cljs$lang$maxFixedArity = 3;
G__12186.cljs$lang$applyTo = G__12186__4.cljs$lang$applyTo;
return G__12186;
})()
};
var G__12185 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12185__delegate.call(this, f, g, h, fs);
};
G__12185.cljs$lang$maxFixedArity = 3;
G__12185.cljs$lang$applyTo = (function (arglist__12189){
var f = cljs.core.first(arglist__12189);
var g = cljs.core.first(cljs.core.next(arglist__12189));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12189)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12189)));
return G__12185__delegate(f, g, h, fs);
});
G__12185.cljs$lang$arity$variadic = G__12185__delegate;
return G__12185;
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
var G__12192 = cljs.core.next.call(null,coll);
coll = G__12192;
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
if(cljs.core.truth_((function (){var and__3822__auto____12191 = cljs.core.seq.call(null,coll);
if(and__3822__auto____12191)
{return (n > 0);
} else
{return and__3822__auto____12191;
}
})()))
{{
var G__12193 = (n - 1);
var G__12194 = cljs.core.next.call(null,coll);
n = G__12193;
coll = G__12194;
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
var matches__12196 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__12196),s))
{if((cljs.core.count.call(null,matches__12196) === 1))
{return cljs.core.first.call(null,matches__12196);
} else
{return cljs.core.vec.call(null,matches__12196);
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
var matches__12198 = re.exec(s);
if((matches__12198 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__12198) === 1))
{return cljs.core.first.call(null,matches__12198);
} else
{return cljs.core.vec.call(null,matches__12198);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__12203 = cljs.core.re_find.call(null,re,s);
var match_idx__12204 = s.search(re);
var match_str__12205 = ((cljs.core.coll_QMARK_.call(null,match_data__12203))?cljs.core.first.call(null,match_data__12203):match_data__12203);
var post_match__12206 = cljs.core.subs.call(null,s,(match_idx__12204 + cljs.core.count.call(null,match_str__12205)));
if(cljs.core.truth_(match_data__12203))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__12203,re_seq.call(null,re,post_match__12206));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__12213__12214 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___12215 = cljs.core.nth.call(null,vec__12213__12214,0,null);
var flags__12216 = cljs.core.nth.call(null,vec__12213__12214,1,null);
var pattern__12217 = cljs.core.nth.call(null,vec__12213__12214,2,null);
return (new RegExp(pattern__12217,flags__12216));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__12207_SHARP_){
return print_one.call(null,p1__12207_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____12227 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____12227))
{var and__3822__auto____12231 = (function (){var G__12228__12229 = obj;
if(G__12228__12229)
{if((function (){var or__3824__auto____12230 = (G__12228__12229.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____12230)
{return or__3824__auto____12230;
} else
{return G__12228__12229.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__12228__12229.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__12228__12229);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__12228__12229);
}
})();
if(cljs.core.truth_(and__3822__auto____12231))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____12231;
}
} else
{return and__3822__auto____12227;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____12232 = !((obj == null));
if(and__3822__auto____12232)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____12232;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__12233__12234 = obj;
if(G__12233__12234)
{if((function (){var or__3824__auto____12235 = (G__12233__12234.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____12235)
{return or__3824__auto____12235;
} else
{return G__12233__12234.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__12233__12234.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__12233__12234);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__12233__12234);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__12255 = (new goog.string.StringBuffer());
var G__12256__12257 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__12256__12257)
{var string__12258 = cljs.core.first.call(null,G__12256__12257);
var G__12256__12259 = G__12256__12257;
while(true){
sb__12255.append(string__12258);
var temp__3974__auto____12260 = cljs.core.next.call(null,G__12256__12259);
if(temp__3974__auto____12260)
{var G__12256__12261 = temp__3974__auto____12260;
{
var G__12274 = cljs.core.first.call(null,G__12256__12261);
var G__12275 = G__12256__12261;
string__12258 = G__12274;
G__12256__12259 = G__12275;
continue;
}
} else
{}
break;
}
} else
{}
var G__12262__12263 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__12262__12263)
{var obj__12264 = cljs.core.first.call(null,G__12262__12263);
var G__12262__12265 = G__12262__12263;
while(true){
sb__12255.append(" ");
var G__12266__12267 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12264,opts));
if(G__12266__12267)
{var string__12268 = cljs.core.first.call(null,G__12266__12267);
var G__12266__12269 = G__12266__12267;
while(true){
sb__12255.append(string__12268);
var temp__3974__auto____12270 = cljs.core.next.call(null,G__12266__12269);
if(temp__3974__auto____12270)
{var G__12266__12271 = temp__3974__auto____12270;
{
var G__12276 = cljs.core.first.call(null,G__12266__12271);
var G__12277 = G__12266__12271;
string__12268 = G__12276;
G__12266__12269 = G__12277;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____12272 = cljs.core.next.call(null,G__12262__12265);
if(temp__3974__auto____12272)
{var G__12262__12273 = temp__3974__auto____12272;
{
var G__12278 = cljs.core.first.call(null,G__12262__12273);
var G__12279 = G__12262__12273;
obj__12264 = G__12278;
G__12262__12265 = G__12279;
continue;
}
} else
{}
break;
}
} else
{}
return sb__12255;
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
var sb__12281 = cljs.core.pr_sb.call(null,objs,opts);
sb__12281.append("\n");
return [cljs.core.str(sb__12281)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__12300__12301 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__12300__12301)
{var string__12302 = cljs.core.first.call(null,G__12300__12301);
var G__12300__12303 = G__12300__12301;
while(true){
cljs.core.string_print.call(null,string__12302);
var temp__3974__auto____12304 = cljs.core.next.call(null,G__12300__12303);
if(temp__3974__auto____12304)
{var G__12300__12305 = temp__3974__auto____12304;
{
var G__12318 = cljs.core.first.call(null,G__12300__12305);
var G__12319 = G__12300__12305;
string__12302 = G__12318;
G__12300__12303 = G__12319;
continue;
}
} else
{}
break;
}
} else
{}
var G__12306__12307 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__12306__12307)
{var obj__12308 = cljs.core.first.call(null,G__12306__12307);
var G__12306__12309 = G__12306__12307;
while(true){
cljs.core.string_print.call(null," ");
var G__12310__12311 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12308,opts));
if(G__12310__12311)
{var string__12312 = cljs.core.first.call(null,G__12310__12311);
var G__12310__12313 = G__12310__12311;
while(true){
cljs.core.string_print.call(null,string__12312);
var temp__3974__auto____12314 = cljs.core.next.call(null,G__12310__12313);
if(temp__3974__auto____12314)
{var G__12310__12315 = temp__3974__auto____12314;
{
var G__12320 = cljs.core.first.call(null,G__12310__12315);
var G__12321 = G__12310__12315;
string__12312 = G__12320;
G__12310__12313 = G__12321;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____12316 = cljs.core.next.call(null,G__12306__12309);
if(temp__3974__auto____12316)
{var G__12306__12317 = temp__3974__auto____12316;
{
var G__12322 = cljs.core.first.call(null,G__12306__12317);
var G__12323 = G__12306__12317;
obj__12308 = G__12322;
G__12306__12309 = G__12323;
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
pr_str.cljs$lang$applyTo = (function (arglist__12324){
var objs = cljs.core.seq(arglist__12324);;
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
prn_str.cljs$lang$applyTo = (function (arglist__12325){
var objs = cljs.core.seq(arglist__12325);;
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
pr.cljs$lang$applyTo = (function (arglist__12326){
var objs = cljs.core.seq(arglist__12326);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__12327){
var objs = cljs.core.seq(arglist__12327);;
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
print_str.cljs$lang$applyTo = (function (arglist__12328){
var objs = cljs.core.seq(arglist__12328);;
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
println.cljs$lang$applyTo = (function (arglist__12329){
var objs = cljs.core.seq(arglist__12329);;
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
println_str.cljs$lang$applyTo = (function (arglist__12330){
var objs = cljs.core.seq(arglist__12330);;
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
prn.cljs$lang$applyTo = (function (arglist__12331){
var objs = cljs.core.seq(arglist__12331);;
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
printf.cljs$lang$applyTo = (function (arglist__12332){
var fmt = cljs.core.first(arglist__12332);
var args = cljs.core.rest(arglist__12332);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__12333 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12333,"{",", ","}",opts,coll);
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
var pr_pair__12334 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12334,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__12335 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12335,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____12336 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____12336))
{var nspc__12337 = temp__3974__auto____12336;
return [cljs.core.str(nspc__12337),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____12338 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____12338))
{var nspc__12339 = temp__3974__auto____12338;
return [cljs.core.str(nspc__12339),cljs.core.str("/")].join('');
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
var pr_pair__12340 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12340,"{",", ","}",opts,coll);
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
var normalize__12342 = (function (n,len){
var ns__12341 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__12341) < len))
{{
var G__12344 = [cljs.core.str("0"),cljs.core.str(ns__12341)].join('');
ns__12341 = G__12344;
continue;
}
} else
{return ns__12341;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__12342.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__12342.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__12342.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__12342.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__12342.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__12342.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__12343 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12343,"{",", ","}",opts,coll);
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
var this__12345 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__12346 = this;
var G__12347__12348 = cljs.core.seq.call(null,this__12346.watches);
if(G__12347__12348)
{var G__12350__12352 = cljs.core.first.call(null,G__12347__12348);
var vec__12351__12353 = G__12350__12352;
var key__12354 = cljs.core.nth.call(null,vec__12351__12353,0,null);
var f__12355 = cljs.core.nth.call(null,vec__12351__12353,1,null);
var G__12347__12356 = G__12347__12348;
var G__12350__12357 = G__12350__12352;
var G__12347__12358 = G__12347__12356;
while(true){
var vec__12359__12360 = G__12350__12357;
var key__12361 = cljs.core.nth.call(null,vec__12359__12360,0,null);
var f__12362 = cljs.core.nth.call(null,vec__12359__12360,1,null);
var G__12347__12363 = G__12347__12358;
f__12362.call(null,key__12361,this$,oldval,newval);
var temp__3974__auto____12364 = cljs.core.next.call(null,G__12347__12363);
if(temp__3974__auto____12364)
{var G__12347__12365 = temp__3974__auto____12364;
{
var G__12372 = cljs.core.first.call(null,G__12347__12365);
var G__12373 = G__12347__12365;
G__12350__12357 = G__12372;
G__12347__12358 = G__12373;
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
var this__12366 = this;
return this$.watches = cljs.core.assoc.call(null,this__12366.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__12367 = this;
return this$.watches = cljs.core.dissoc.call(null,this__12367.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__12368 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__12368.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__12369 = this;
return this__12369.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__12370 = this;
return this__12370.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__12371 = this;
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
var G__12385__delegate = function (x,p__12374){
var map__12380__12381 = p__12374;
var map__12380__12382 = ((cljs.core.seq_QMARK_.call(null,map__12380__12381))?cljs.core.apply.call(null,cljs.core.hash_map,map__12380__12381):map__12380__12381);
var validator__12383 = cljs.core._lookup.call(null,map__12380__12382,"\uFDD0'validator",null);
var meta__12384 = cljs.core._lookup.call(null,map__12380__12382,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__12384,validator__12383,null));
};
var G__12385 = function (x,var_args){
var p__12374 = null;
if (goog.isDef(var_args)) {
  p__12374 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12385__delegate.call(this, x, p__12374);
};
G__12385.cljs$lang$maxFixedArity = 1;
G__12385.cljs$lang$applyTo = (function (arglist__12386){
var x = cljs.core.first(arglist__12386);
var p__12374 = cljs.core.rest(arglist__12386);
return G__12385__delegate(x, p__12374);
});
G__12385.cljs$lang$arity$variadic = G__12385__delegate;
return G__12385;
})()
;
atom = function(x,var_args){
var p__12374 = var_args;
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
var temp__3974__auto____12390 = a.validator;
if(cljs.core.truth_(temp__3974__auto____12390))
{var validate__12391 = temp__3974__auto____12390;
if(cljs.core.truth_(validate__12391.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__12392 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__12392,new_value);
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
var G__12393__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__12393 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12393__delegate.call(this, a, f, x, y, z, more);
};
G__12393.cljs$lang$maxFixedArity = 5;
G__12393.cljs$lang$applyTo = (function (arglist__12394){
var a = cljs.core.first(arglist__12394);
var f = cljs.core.first(cljs.core.next(arglist__12394));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12394)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12394))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12394)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12394)))));
return G__12393__delegate(a, f, x, y, z, more);
});
G__12393.cljs$lang$arity$variadic = G__12393__delegate;
return G__12393;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__12395){
var iref = cljs.core.first(arglist__12395);
var f = cljs.core.first(cljs.core.next(arglist__12395));
var args = cljs.core.rest(cljs.core.next(arglist__12395));
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
var this__12396 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__12396.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__12397 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__12397.state,(function (p__12398){
var map__12399__12400 = p__12398;
var map__12399__12401 = ((cljs.core.seq_QMARK_.call(null,map__12399__12400))?cljs.core.apply.call(null,cljs.core.hash_map,map__12399__12400):map__12399__12400);
var curr_state__12402 = map__12399__12401;
var done__12403 = cljs.core._lookup.call(null,map__12399__12401,"\uFDD0'done",null);
if(cljs.core.truth_(done__12403))
{return curr_state__12402;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__12397.f.call(null)});
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
var map__12424__12425 = options;
var map__12424__12426 = ((cljs.core.seq_QMARK_.call(null,map__12424__12425))?cljs.core.apply.call(null,cljs.core.hash_map,map__12424__12425):map__12424__12425);
var keywordize_keys__12427 = cljs.core._lookup.call(null,map__12424__12426,"\uFDD0'keywordize-keys",null);
var keyfn__12428 = (cljs.core.truth_(keywordize_keys__12427)?cljs.core.keyword:cljs.core.str);
var f__12443 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2462__auto____12442 = (function iter__12436(s__12437){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12437__12440 = s__12437;
while(true){
if(cljs.core.seq.call(null,s__12437__12440))
{var k__12441 = cljs.core.first.call(null,s__12437__12440);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__12428.call(null,k__12441),thisfn.call(null,(x[k__12441]))], true),iter__12436.call(null,cljs.core.rest.call(null,s__12437__12440)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2462__auto____12442.call(null,cljs.core.js_keys.call(null,x));
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
return f__12443.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__12444){
var x = cljs.core.first(arglist__12444);
var options = cljs.core.rest(arglist__12444);
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
var mem__12449 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__12453__delegate = function (args){
var temp__3971__auto____12450 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__12449),args,null);
if(cljs.core.truth_(temp__3971__auto____12450))
{var v__12451 = temp__3971__auto____12450;
return v__12451;
} else
{var ret__12452 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__12449,cljs.core.assoc,args,ret__12452);
return ret__12452;
}
};
var G__12453 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12453__delegate.call(this, args);
};
G__12453.cljs$lang$maxFixedArity = 0;
G__12453.cljs$lang$applyTo = (function (arglist__12454){
var args = cljs.core.seq(arglist__12454);;
return G__12453__delegate(args);
});
G__12453.cljs$lang$arity$variadic = G__12453__delegate;
return G__12453;
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
var ret__12456 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__12456))
{{
var G__12457 = ret__12456;
f = G__12457;
continue;
}
} else
{return ret__12456;
}
break;
}
});
var trampoline__2 = (function() { 
var G__12458__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__12458 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12458__delegate.call(this, f, args);
};
G__12458.cljs$lang$maxFixedArity = 1;
G__12458.cljs$lang$applyTo = (function (arglist__12459){
var f = cljs.core.first(arglist__12459);
var args = cljs.core.rest(arglist__12459);
return G__12458__delegate(f, args);
});
G__12458.cljs$lang$arity$variadic = G__12458__delegate;
return G__12458;
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
var k__12461 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__12461,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__12461,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____12470 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____12470)
{return or__3824__auto____12470;
} else
{var or__3824__auto____12471 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____12471)
{return or__3824__auto____12471;
} else
{var and__3822__auto____12472 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____12472)
{var and__3822__auto____12473 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____12473)
{var and__3822__auto____12474 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____12474)
{var ret__12475 = true;
var i__12476 = 0;
while(true){
if((function (){var or__3824__auto____12477 = cljs.core.not.call(null,ret__12475);
if(or__3824__auto____12477)
{return or__3824__auto____12477;
} else
{return (i__12476 === cljs.core.count.call(null,parent));
}
})())
{return ret__12475;
} else
{{
var G__12478 = isa_QMARK_.call(null,h,child.call(null,i__12476),parent.call(null,i__12476));
var G__12479 = (i__12476 + 1);
ret__12475 = G__12478;
i__12476 = G__12479;
continue;
}
}
break;
}
} else
{return and__3822__auto____12474;
}
} else
{return and__3822__auto____12473;
}
} else
{return and__3822__auto____12472;
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
var tp__12488 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__12489 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__12490 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__12491 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____12492 = ((cljs.core.contains_QMARK_.call(null,tp__12488.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__12490.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__12490.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__12488,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__12491.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__12489,parent,ta__12490),"\uFDD0'descendants":tf__12491.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__12490,tag,td__12489)});
})());
if(cljs.core.truth_(or__3824__auto____12492))
{return or__3824__auto____12492;
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
var parentMap__12497 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__12498 = (cljs.core.truth_(parentMap__12497.call(null,tag))?cljs.core.disj.call(null,parentMap__12497.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__12499 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__12498))?cljs.core.assoc.call(null,parentMap__12497,tag,childsParents__12498):cljs.core.dissoc.call(null,parentMap__12497,tag));
var deriv_seq__12500 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__12480_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__12480_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__12480_SHARP_),cljs.core.second.call(null,p1__12480_SHARP_)));
}),cljs.core.seq.call(null,newParents__12499)));
if(cljs.core.contains_QMARK_.call(null,parentMap__12497.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__12481_SHARP_,p2__12482_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__12481_SHARP_,p2__12482_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__12500));
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
var xprefs__12508 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____12510 = (cljs.core.truth_((function (){var and__3822__auto____12509 = xprefs__12508;
if(cljs.core.truth_(and__3822__auto____12509))
{return xprefs__12508.call(null,y);
} else
{return and__3822__auto____12509;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____12510))
{return or__3824__auto____12510;
} else
{var or__3824__auto____12512 = (function (){var ps__12511 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__12511) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__12511),prefer_table)))
{} else
{}
{
var G__12515 = cljs.core.rest.call(null,ps__12511);
ps__12511 = G__12515;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____12512))
{return or__3824__auto____12512;
} else
{var or__3824__auto____12514 = (function (){var ps__12513 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__12513) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__12513),y,prefer_table)))
{} else
{}
{
var G__12516 = cljs.core.rest.call(null,ps__12513);
ps__12513 = G__12516;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____12514))
{return or__3824__auto____12514;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____12518 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____12518))
{return or__3824__auto____12518;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__12536 = cljs.core.reduce.call(null,(function (be,p__12528){
var vec__12529__12530 = p__12528;
var k__12531 = cljs.core.nth.call(null,vec__12529__12530,0,null);
var ___12532 = cljs.core.nth.call(null,vec__12529__12530,1,null);
var e__12533 = vec__12529__12530;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__12531))
{var be2__12535 = (cljs.core.truth_((function (){var or__3824__auto____12534 = (be == null);
if(or__3824__auto____12534)
{return or__3824__auto____12534;
} else
{return cljs.core.dominates.call(null,k__12531,cljs.core.first.call(null,be),prefer_table);
}
})())?e__12533:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__12535),k__12531,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__12531),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__12535)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__12535;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__12536))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__12536));
return cljs.core.second.call(null,best_entry__12536);
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
if((function (){var and__3822__auto____12541 = mf;
if(and__3822__auto____12541)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____12541;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2363__auto____12542 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12543 = (cljs.core._reset[goog.typeOf(x__2363__auto____12542)]);
if(or__3824__auto____12543)
{return or__3824__auto____12543;
} else
{var or__3824__auto____12544 = (cljs.core._reset["_"]);
if(or__3824__auto____12544)
{return or__3824__auto____12544;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____12549 = mf;
if(and__3822__auto____12549)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____12549;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2363__auto____12550 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12551 = (cljs.core._add_method[goog.typeOf(x__2363__auto____12550)]);
if(or__3824__auto____12551)
{return or__3824__auto____12551;
} else
{var or__3824__auto____12552 = (cljs.core._add_method["_"]);
if(or__3824__auto____12552)
{return or__3824__auto____12552;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____12557 = mf;
if(and__3822__auto____12557)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____12557;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2363__auto____12558 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12559 = (cljs.core._remove_method[goog.typeOf(x__2363__auto____12558)]);
if(or__3824__auto____12559)
{return or__3824__auto____12559;
} else
{var or__3824__auto____12560 = (cljs.core._remove_method["_"]);
if(or__3824__auto____12560)
{return or__3824__auto____12560;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____12565 = mf;
if(and__3822__auto____12565)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____12565;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2363__auto____12566 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12567 = (cljs.core._prefer_method[goog.typeOf(x__2363__auto____12566)]);
if(or__3824__auto____12567)
{return or__3824__auto____12567;
} else
{var or__3824__auto____12568 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____12568)
{return or__3824__auto____12568;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____12573 = mf;
if(and__3822__auto____12573)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____12573;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2363__auto____12574 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12575 = (cljs.core._get_method[goog.typeOf(x__2363__auto____12574)]);
if(or__3824__auto____12575)
{return or__3824__auto____12575;
} else
{var or__3824__auto____12576 = (cljs.core._get_method["_"]);
if(or__3824__auto____12576)
{return or__3824__auto____12576;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____12581 = mf;
if(and__3822__auto____12581)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____12581;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2363__auto____12582 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12583 = (cljs.core._methods[goog.typeOf(x__2363__auto____12582)]);
if(or__3824__auto____12583)
{return or__3824__auto____12583;
} else
{var or__3824__auto____12584 = (cljs.core._methods["_"]);
if(or__3824__auto____12584)
{return or__3824__auto____12584;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____12589 = mf;
if(and__3822__auto____12589)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____12589;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2363__auto____12590 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12591 = (cljs.core._prefers[goog.typeOf(x__2363__auto____12590)]);
if(or__3824__auto____12591)
{return or__3824__auto____12591;
} else
{var or__3824__auto____12592 = (cljs.core._prefers["_"]);
if(or__3824__auto____12592)
{return or__3824__auto____12592;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____12597 = mf;
if(and__3822__auto____12597)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____12597;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2363__auto____12598 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12599 = (cljs.core._dispatch[goog.typeOf(x__2363__auto____12598)]);
if(or__3824__auto____12599)
{return or__3824__auto____12599;
} else
{var or__3824__auto____12600 = (cljs.core._dispatch["_"]);
if(or__3824__auto____12600)
{return or__3824__auto____12600;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__12603 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__12604 = cljs.core._get_method.call(null,mf,dispatch_val__12603);
if(cljs.core.truth_(target_fn__12604))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__12603)].join('')));
}
return cljs.core.apply.call(null,target_fn__12604,args);
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
var this__12605 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__12606 = this;
cljs.core.swap_BANG_.call(null,this__12606.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12606.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12606.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12606.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__12607 = this;
cljs.core.swap_BANG_.call(null,this__12607.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__12607.method_cache,this__12607.method_table,this__12607.cached_hierarchy,this__12607.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__12608 = this;
cljs.core.swap_BANG_.call(null,this__12608.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__12608.method_cache,this__12608.method_table,this__12608.cached_hierarchy,this__12608.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__12609 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__12609.cached_hierarchy),cljs.core.deref.call(null,this__12609.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__12609.method_cache,this__12609.method_table,this__12609.cached_hierarchy,this__12609.hierarchy);
}
var temp__3971__auto____12610 = cljs.core.deref.call(null,this__12609.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____12610))
{var target_fn__12611 = temp__3971__auto____12610;
return target_fn__12611;
} else
{var temp__3971__auto____12612 = cljs.core.find_and_cache_best_method.call(null,this__12609.name,dispatch_val,this__12609.hierarchy,this__12609.method_table,this__12609.prefer_table,this__12609.method_cache,this__12609.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____12612))
{var target_fn__12613 = temp__3971__auto____12612;
return target_fn__12613;
} else
{return cljs.core.deref.call(null,this__12609.method_table).call(null,this__12609.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__12614 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__12614.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__12614.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__12614.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__12614.method_cache,this__12614.method_table,this__12614.cached_hierarchy,this__12614.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__12615 = this;
return cljs.core.deref.call(null,this__12615.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__12616 = this;
return cljs.core.deref.call(null,this__12616.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__12617 = this;
return cljs.core.do_dispatch.call(null,mf,this__12617.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__12619__delegate = function (_,args){
var self__12618 = this;
return cljs.core._dispatch.call(null,self__12618,args);
};
var G__12619 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12619__delegate.call(this, _, args);
};
G__12619.cljs$lang$maxFixedArity = 1;
G__12619.cljs$lang$applyTo = (function (arglist__12620){
var _ = cljs.core.first(arglist__12620);
var args = cljs.core.rest(arglist__12620);
return G__12619__delegate(_, args);
});
G__12619.cljs$lang$arity$variadic = G__12619__delegate;
return G__12619;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__12621 = this;
return cljs.core._dispatch.call(null,self__12621,args);
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
var this__12622 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_12624,_){
var this__12623 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__12623.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__12625 = this;
var and__3822__auto____12626 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____12626)
{return (this__12625.uuid === other.uuid);
} else
{return and__3822__auto____12626;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__12627 = this;
var this__12628 = this;
return cljs.core.pr_str.call(null,this__12628);
});
cljs.core.UUID;
