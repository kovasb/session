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
var x__8689 = (((x == null))?null:x);
if((p[goog.typeOf(x__8689)]))
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
var G__8690__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__8690 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8690__delegate.call(this, array, i, idxs);
};
G__8690.cljs$lang$maxFixedArity = 2;
G__8690.cljs$lang$applyTo = (function (arglist__8691){
var array = cljs.core.first(arglist__8691);
var i = cljs.core.first(cljs.core.next(arglist__8691));
var idxs = cljs.core.rest(cljs.core.next(arglist__8691));
return G__8690__delegate(array, i, idxs);
});
G__8690.cljs$lang$arity$variadic = G__8690__delegate;
return G__8690;
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
if((function (){var and__3822__auto____8776 = this$;
if(and__3822__auto____8776)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____8776;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2363__auto____8777 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8778 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8777)]);
if(or__3824__auto____8778)
{return or__3824__auto____8778;
} else
{var or__3824__auto____8779 = (cljs.core._invoke["_"]);
if(or__3824__auto____8779)
{return or__3824__auto____8779;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____8780 = this$;
if(and__3822__auto____8780)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____8780;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2363__auto____8781 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8782 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8781)]);
if(or__3824__auto____8782)
{return or__3824__auto____8782;
} else
{var or__3824__auto____8783 = (cljs.core._invoke["_"]);
if(or__3824__auto____8783)
{return or__3824__auto____8783;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____8784 = this$;
if(and__3822__auto____8784)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____8784;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2363__auto____8785 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8786 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8785)]);
if(or__3824__auto____8786)
{return or__3824__auto____8786;
} else
{var or__3824__auto____8787 = (cljs.core._invoke["_"]);
if(or__3824__auto____8787)
{return or__3824__auto____8787;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____8788 = this$;
if(and__3822__auto____8788)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____8788;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2363__auto____8789 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8790 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8789)]);
if(or__3824__auto____8790)
{return or__3824__auto____8790;
} else
{var or__3824__auto____8791 = (cljs.core._invoke["_"]);
if(or__3824__auto____8791)
{return or__3824__auto____8791;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____8792 = this$;
if(and__3822__auto____8792)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____8792;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2363__auto____8793 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8794 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8793)]);
if(or__3824__auto____8794)
{return or__3824__auto____8794;
} else
{var or__3824__auto____8795 = (cljs.core._invoke["_"]);
if(or__3824__auto____8795)
{return or__3824__auto____8795;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____8796 = this$;
if(and__3822__auto____8796)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____8796;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2363__auto____8797 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8798 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8797)]);
if(or__3824__auto____8798)
{return or__3824__auto____8798;
} else
{var or__3824__auto____8799 = (cljs.core._invoke["_"]);
if(or__3824__auto____8799)
{return or__3824__auto____8799;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____8800 = this$;
if(and__3822__auto____8800)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____8800;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2363__auto____8801 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8802 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8801)]);
if(or__3824__auto____8802)
{return or__3824__auto____8802;
} else
{var or__3824__auto____8803 = (cljs.core._invoke["_"]);
if(or__3824__auto____8803)
{return or__3824__auto____8803;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____8804 = this$;
if(and__3822__auto____8804)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____8804;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2363__auto____8805 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8806 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8805)]);
if(or__3824__auto____8806)
{return or__3824__auto____8806;
} else
{var or__3824__auto____8807 = (cljs.core._invoke["_"]);
if(or__3824__auto____8807)
{return or__3824__auto____8807;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____8808 = this$;
if(and__3822__auto____8808)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____8808;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2363__auto____8809 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8810 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8809)]);
if(or__3824__auto____8810)
{return or__3824__auto____8810;
} else
{var or__3824__auto____8811 = (cljs.core._invoke["_"]);
if(or__3824__auto____8811)
{return or__3824__auto____8811;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____8812 = this$;
if(and__3822__auto____8812)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____8812;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2363__auto____8813 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8814 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8813)]);
if(or__3824__auto____8814)
{return or__3824__auto____8814;
} else
{var or__3824__auto____8815 = (cljs.core._invoke["_"]);
if(or__3824__auto____8815)
{return or__3824__auto____8815;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____8816 = this$;
if(and__3822__auto____8816)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____8816;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2363__auto____8817 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8818 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8817)]);
if(or__3824__auto____8818)
{return or__3824__auto____8818;
} else
{var or__3824__auto____8819 = (cljs.core._invoke["_"]);
if(or__3824__auto____8819)
{return or__3824__auto____8819;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____8820 = this$;
if(and__3822__auto____8820)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____8820;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2363__auto____8821 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8822 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8821)]);
if(or__3824__auto____8822)
{return or__3824__auto____8822;
} else
{var or__3824__auto____8823 = (cljs.core._invoke["_"]);
if(or__3824__auto____8823)
{return or__3824__auto____8823;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____8824 = this$;
if(and__3822__auto____8824)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____8824;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2363__auto____8825 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8826 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8825)]);
if(or__3824__auto____8826)
{return or__3824__auto____8826;
} else
{var or__3824__auto____8827 = (cljs.core._invoke["_"]);
if(or__3824__auto____8827)
{return or__3824__auto____8827;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____8828 = this$;
if(and__3822__auto____8828)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____8828;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2363__auto____8829 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8830 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8829)]);
if(or__3824__auto____8830)
{return or__3824__auto____8830;
} else
{var or__3824__auto____8831 = (cljs.core._invoke["_"]);
if(or__3824__auto____8831)
{return or__3824__auto____8831;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____8832 = this$;
if(and__3822__auto____8832)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____8832;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2363__auto____8833 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8834 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8833)]);
if(or__3824__auto____8834)
{return or__3824__auto____8834;
} else
{var or__3824__auto____8835 = (cljs.core._invoke["_"]);
if(or__3824__auto____8835)
{return or__3824__auto____8835;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____8836 = this$;
if(and__3822__auto____8836)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____8836;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2363__auto____8837 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8838 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8837)]);
if(or__3824__auto____8838)
{return or__3824__auto____8838;
} else
{var or__3824__auto____8839 = (cljs.core._invoke["_"]);
if(or__3824__auto____8839)
{return or__3824__auto____8839;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____8840 = this$;
if(and__3822__auto____8840)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____8840;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2363__auto____8841 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8842 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8841)]);
if(or__3824__auto____8842)
{return or__3824__auto____8842;
} else
{var or__3824__auto____8843 = (cljs.core._invoke["_"]);
if(or__3824__auto____8843)
{return or__3824__auto____8843;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____8844 = this$;
if(and__3822__auto____8844)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____8844;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2363__auto____8845 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8846 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8845)]);
if(or__3824__auto____8846)
{return or__3824__auto____8846;
} else
{var or__3824__auto____8847 = (cljs.core._invoke["_"]);
if(or__3824__auto____8847)
{return or__3824__auto____8847;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____8848 = this$;
if(and__3822__auto____8848)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____8848;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2363__auto____8849 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8850 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8849)]);
if(or__3824__auto____8850)
{return or__3824__auto____8850;
} else
{var or__3824__auto____8851 = (cljs.core._invoke["_"]);
if(or__3824__auto____8851)
{return or__3824__auto____8851;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____8852 = this$;
if(and__3822__auto____8852)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____8852;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2363__auto____8853 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8854 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8853)]);
if(or__3824__auto____8854)
{return or__3824__auto____8854;
} else
{var or__3824__auto____8855 = (cljs.core._invoke["_"]);
if(or__3824__auto____8855)
{return or__3824__auto____8855;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____8856 = this$;
if(and__3822__auto____8856)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____8856;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2363__auto____8857 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____8858 = (cljs.core._invoke[goog.typeOf(x__2363__auto____8857)]);
if(or__3824__auto____8858)
{return or__3824__auto____8858;
} else
{var or__3824__auto____8859 = (cljs.core._invoke["_"]);
if(or__3824__auto____8859)
{return or__3824__auto____8859;
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
if((function (){var and__3822__auto____8864 = coll;
if(and__3822__auto____8864)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____8864;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2363__auto____8865 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8866 = (cljs.core._count[goog.typeOf(x__2363__auto____8865)]);
if(or__3824__auto____8866)
{return or__3824__auto____8866;
} else
{var or__3824__auto____8867 = (cljs.core._count["_"]);
if(or__3824__auto____8867)
{return or__3824__auto____8867;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____8872 = coll;
if(and__3822__auto____8872)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____8872;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2363__auto____8873 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8874 = (cljs.core._empty[goog.typeOf(x__2363__auto____8873)]);
if(or__3824__auto____8874)
{return or__3824__auto____8874;
} else
{var or__3824__auto____8875 = (cljs.core._empty["_"]);
if(or__3824__auto____8875)
{return or__3824__auto____8875;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____8880 = coll;
if(and__3822__auto____8880)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____8880;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2363__auto____8881 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8882 = (cljs.core._conj[goog.typeOf(x__2363__auto____8881)]);
if(or__3824__auto____8882)
{return or__3824__auto____8882;
} else
{var or__3824__auto____8883 = (cljs.core._conj["_"]);
if(or__3824__auto____8883)
{return or__3824__auto____8883;
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
if((function (){var and__3822__auto____8892 = coll;
if(and__3822__auto____8892)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____8892;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2363__auto____8893 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8894 = (cljs.core._nth[goog.typeOf(x__2363__auto____8893)]);
if(or__3824__auto____8894)
{return or__3824__auto____8894;
} else
{var or__3824__auto____8895 = (cljs.core._nth["_"]);
if(or__3824__auto____8895)
{return or__3824__auto____8895;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____8896 = coll;
if(and__3822__auto____8896)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____8896;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2363__auto____8897 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8898 = (cljs.core._nth[goog.typeOf(x__2363__auto____8897)]);
if(or__3824__auto____8898)
{return or__3824__auto____8898;
} else
{var or__3824__auto____8899 = (cljs.core._nth["_"]);
if(or__3824__auto____8899)
{return or__3824__auto____8899;
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
if((function (){var and__3822__auto____8904 = coll;
if(and__3822__auto____8904)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____8904;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2363__auto____8905 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8906 = (cljs.core._first[goog.typeOf(x__2363__auto____8905)]);
if(or__3824__auto____8906)
{return or__3824__auto____8906;
} else
{var or__3824__auto____8907 = (cljs.core._first["_"]);
if(or__3824__auto____8907)
{return or__3824__auto____8907;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____8912 = coll;
if(and__3822__auto____8912)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____8912;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2363__auto____8913 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8914 = (cljs.core._rest[goog.typeOf(x__2363__auto____8913)]);
if(or__3824__auto____8914)
{return or__3824__auto____8914;
} else
{var or__3824__auto____8915 = (cljs.core._rest["_"]);
if(or__3824__auto____8915)
{return or__3824__auto____8915;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____8920 = coll;
if(and__3822__auto____8920)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____8920;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2363__auto____8921 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8922 = (cljs.core._next[goog.typeOf(x__2363__auto____8921)]);
if(or__3824__auto____8922)
{return or__3824__auto____8922;
} else
{var or__3824__auto____8923 = (cljs.core._next["_"]);
if(or__3824__auto____8923)
{return or__3824__auto____8923;
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
if((function (){var and__3822__auto____8932 = o;
if(and__3822__auto____8932)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____8932;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2363__auto____8933 = (((o == null))?null:o);
return (function (){var or__3824__auto____8934 = (cljs.core._lookup[goog.typeOf(x__2363__auto____8933)]);
if(or__3824__auto____8934)
{return or__3824__auto____8934;
} else
{var or__3824__auto____8935 = (cljs.core._lookup["_"]);
if(or__3824__auto____8935)
{return or__3824__auto____8935;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____8936 = o;
if(and__3822__auto____8936)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____8936;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2363__auto____8937 = (((o == null))?null:o);
return (function (){var or__3824__auto____8938 = (cljs.core._lookup[goog.typeOf(x__2363__auto____8937)]);
if(or__3824__auto____8938)
{return or__3824__auto____8938;
} else
{var or__3824__auto____8939 = (cljs.core._lookup["_"]);
if(or__3824__auto____8939)
{return or__3824__auto____8939;
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
if((function (){var and__3822__auto____8944 = coll;
if(and__3822__auto____8944)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____8944;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2363__auto____8945 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8946 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2363__auto____8945)]);
if(or__3824__auto____8946)
{return or__3824__auto____8946;
} else
{var or__3824__auto____8947 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____8947)
{return or__3824__auto____8947;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____8952 = coll;
if(and__3822__auto____8952)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____8952;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2363__auto____8953 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8954 = (cljs.core._assoc[goog.typeOf(x__2363__auto____8953)]);
if(or__3824__auto____8954)
{return or__3824__auto____8954;
} else
{var or__3824__auto____8955 = (cljs.core._assoc["_"]);
if(or__3824__auto____8955)
{return or__3824__auto____8955;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____8960 = coll;
if(and__3822__auto____8960)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____8960;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2363__auto____8961 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8962 = (cljs.core._dissoc[goog.typeOf(x__2363__auto____8961)]);
if(or__3824__auto____8962)
{return or__3824__auto____8962;
} else
{var or__3824__auto____8963 = (cljs.core._dissoc["_"]);
if(or__3824__auto____8963)
{return or__3824__auto____8963;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____8968 = coll;
if(and__3822__auto____8968)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____8968;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2363__auto____8969 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8970 = (cljs.core._key[goog.typeOf(x__2363__auto____8969)]);
if(or__3824__auto____8970)
{return or__3824__auto____8970;
} else
{var or__3824__auto____8971 = (cljs.core._key["_"]);
if(or__3824__auto____8971)
{return or__3824__auto____8971;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____8976 = coll;
if(and__3822__auto____8976)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____8976;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2363__auto____8977 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8978 = (cljs.core._val[goog.typeOf(x__2363__auto____8977)]);
if(or__3824__auto____8978)
{return or__3824__auto____8978;
} else
{var or__3824__auto____8979 = (cljs.core._val["_"]);
if(or__3824__auto____8979)
{return or__3824__auto____8979;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____8984 = coll;
if(and__3822__auto____8984)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____8984;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2363__auto____8985 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8986 = (cljs.core._disjoin[goog.typeOf(x__2363__auto____8985)]);
if(or__3824__auto____8986)
{return or__3824__auto____8986;
} else
{var or__3824__auto____8987 = (cljs.core._disjoin["_"]);
if(or__3824__auto____8987)
{return or__3824__auto____8987;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____8992 = coll;
if(and__3822__auto____8992)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____8992;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2363__auto____8993 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____8994 = (cljs.core._peek[goog.typeOf(x__2363__auto____8993)]);
if(or__3824__auto____8994)
{return or__3824__auto____8994;
} else
{var or__3824__auto____8995 = (cljs.core._peek["_"]);
if(or__3824__auto____8995)
{return or__3824__auto____8995;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____9000 = coll;
if(and__3822__auto____9000)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____9000;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2363__auto____9001 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9002 = (cljs.core._pop[goog.typeOf(x__2363__auto____9001)]);
if(or__3824__auto____9002)
{return or__3824__auto____9002;
} else
{var or__3824__auto____9003 = (cljs.core._pop["_"]);
if(or__3824__auto____9003)
{return or__3824__auto____9003;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____9008 = coll;
if(and__3822__auto____9008)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____9008;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2363__auto____9009 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9010 = (cljs.core._assoc_n[goog.typeOf(x__2363__auto____9009)]);
if(or__3824__auto____9010)
{return or__3824__auto____9010;
} else
{var or__3824__auto____9011 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____9011)
{return or__3824__auto____9011;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____9016 = o;
if(and__3822__auto____9016)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____9016;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2363__auto____9017 = (((o == null))?null:o);
return (function (){var or__3824__auto____9018 = (cljs.core._deref[goog.typeOf(x__2363__auto____9017)]);
if(or__3824__auto____9018)
{return or__3824__auto____9018;
} else
{var or__3824__auto____9019 = (cljs.core._deref["_"]);
if(or__3824__auto____9019)
{return or__3824__auto____9019;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____9024 = o;
if(and__3822__auto____9024)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____9024;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2363__auto____9025 = (((o == null))?null:o);
return (function (){var or__3824__auto____9026 = (cljs.core._deref_with_timeout[goog.typeOf(x__2363__auto____9025)]);
if(or__3824__auto____9026)
{return or__3824__auto____9026;
} else
{var or__3824__auto____9027 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____9027)
{return or__3824__auto____9027;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____9032 = o;
if(and__3822__auto____9032)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____9032;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2363__auto____9033 = (((o == null))?null:o);
return (function (){var or__3824__auto____9034 = (cljs.core._meta[goog.typeOf(x__2363__auto____9033)]);
if(or__3824__auto____9034)
{return or__3824__auto____9034;
} else
{var or__3824__auto____9035 = (cljs.core._meta["_"]);
if(or__3824__auto____9035)
{return or__3824__auto____9035;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____9040 = o;
if(and__3822__auto____9040)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____9040;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2363__auto____9041 = (((o == null))?null:o);
return (function (){var or__3824__auto____9042 = (cljs.core._with_meta[goog.typeOf(x__2363__auto____9041)]);
if(or__3824__auto____9042)
{return or__3824__auto____9042;
} else
{var or__3824__auto____9043 = (cljs.core._with_meta["_"]);
if(or__3824__auto____9043)
{return or__3824__auto____9043;
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
if((function (){var and__3822__auto____9052 = coll;
if(and__3822__auto____9052)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____9052;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2363__auto____9053 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9054 = (cljs.core._reduce[goog.typeOf(x__2363__auto____9053)]);
if(or__3824__auto____9054)
{return or__3824__auto____9054;
} else
{var or__3824__auto____9055 = (cljs.core._reduce["_"]);
if(or__3824__auto____9055)
{return or__3824__auto____9055;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____9056 = coll;
if(and__3822__auto____9056)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____9056;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2363__auto____9057 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9058 = (cljs.core._reduce[goog.typeOf(x__2363__auto____9057)]);
if(or__3824__auto____9058)
{return or__3824__auto____9058;
} else
{var or__3824__auto____9059 = (cljs.core._reduce["_"]);
if(or__3824__auto____9059)
{return or__3824__auto____9059;
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
if((function (){var and__3822__auto____9064 = coll;
if(and__3822__auto____9064)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____9064;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2363__auto____9065 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9066 = (cljs.core._kv_reduce[goog.typeOf(x__2363__auto____9065)]);
if(or__3824__auto____9066)
{return or__3824__auto____9066;
} else
{var or__3824__auto____9067 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____9067)
{return or__3824__auto____9067;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____9072 = o;
if(and__3822__auto____9072)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____9072;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2363__auto____9073 = (((o == null))?null:o);
return (function (){var or__3824__auto____9074 = (cljs.core._equiv[goog.typeOf(x__2363__auto____9073)]);
if(or__3824__auto____9074)
{return or__3824__auto____9074;
} else
{var or__3824__auto____9075 = (cljs.core._equiv["_"]);
if(or__3824__auto____9075)
{return or__3824__auto____9075;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____9080 = o;
if(and__3822__auto____9080)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____9080;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2363__auto____9081 = (((o == null))?null:o);
return (function (){var or__3824__auto____9082 = (cljs.core._hash[goog.typeOf(x__2363__auto____9081)]);
if(or__3824__auto____9082)
{return or__3824__auto____9082;
} else
{var or__3824__auto____9083 = (cljs.core._hash["_"]);
if(or__3824__auto____9083)
{return or__3824__auto____9083;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____9088 = o;
if(and__3822__auto____9088)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____9088;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2363__auto____9089 = (((o == null))?null:o);
return (function (){var or__3824__auto____9090 = (cljs.core._seq[goog.typeOf(x__2363__auto____9089)]);
if(or__3824__auto____9090)
{return or__3824__auto____9090;
} else
{var or__3824__auto____9091 = (cljs.core._seq["_"]);
if(or__3824__auto____9091)
{return or__3824__auto____9091;
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
if((function (){var and__3822__auto____9096 = coll;
if(and__3822__auto____9096)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____9096;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2363__auto____9097 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9098 = (cljs.core._rseq[goog.typeOf(x__2363__auto____9097)]);
if(or__3824__auto____9098)
{return or__3824__auto____9098;
} else
{var or__3824__auto____9099 = (cljs.core._rseq["_"]);
if(or__3824__auto____9099)
{return or__3824__auto____9099;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____9104 = coll;
if(and__3822__auto____9104)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____9104;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2363__auto____9105 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9106 = (cljs.core._sorted_seq[goog.typeOf(x__2363__auto____9105)]);
if(or__3824__auto____9106)
{return or__3824__auto____9106;
} else
{var or__3824__auto____9107 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____9107)
{return or__3824__auto____9107;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____9112 = coll;
if(and__3822__auto____9112)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____9112;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2363__auto____9113 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9114 = (cljs.core._sorted_seq_from[goog.typeOf(x__2363__auto____9113)]);
if(or__3824__auto____9114)
{return or__3824__auto____9114;
} else
{var or__3824__auto____9115 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____9115)
{return or__3824__auto____9115;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____9120 = coll;
if(and__3822__auto____9120)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____9120;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2363__auto____9121 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9122 = (cljs.core._entry_key[goog.typeOf(x__2363__auto____9121)]);
if(or__3824__auto____9122)
{return or__3824__auto____9122;
} else
{var or__3824__auto____9123 = (cljs.core._entry_key["_"]);
if(or__3824__auto____9123)
{return or__3824__auto____9123;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____9128 = coll;
if(and__3822__auto____9128)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____9128;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2363__auto____9129 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9130 = (cljs.core._comparator[goog.typeOf(x__2363__auto____9129)]);
if(or__3824__auto____9130)
{return or__3824__auto____9130;
} else
{var or__3824__auto____9131 = (cljs.core._comparator["_"]);
if(or__3824__auto____9131)
{return or__3824__auto____9131;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____9136 = o;
if(and__3822__auto____9136)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____9136;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2363__auto____9137 = (((o == null))?null:o);
return (function (){var or__3824__auto____9138 = (cljs.core._pr_seq[goog.typeOf(x__2363__auto____9137)]);
if(or__3824__auto____9138)
{return or__3824__auto____9138;
} else
{var or__3824__auto____9139 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____9139)
{return or__3824__auto____9139;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____9144 = d;
if(and__3822__auto____9144)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____9144;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2363__auto____9145 = (((d == null))?null:d);
return (function (){var or__3824__auto____9146 = (cljs.core._realized_QMARK_[goog.typeOf(x__2363__auto____9145)]);
if(or__3824__auto____9146)
{return or__3824__auto____9146;
} else
{var or__3824__auto____9147 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____9147)
{return or__3824__auto____9147;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____9152 = this$;
if(and__3822__auto____9152)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____9152;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2363__auto____9153 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9154 = (cljs.core._notify_watches[goog.typeOf(x__2363__auto____9153)]);
if(or__3824__auto____9154)
{return or__3824__auto____9154;
} else
{var or__3824__auto____9155 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____9155)
{return or__3824__auto____9155;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____9160 = this$;
if(and__3822__auto____9160)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____9160;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2363__auto____9161 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9162 = (cljs.core._add_watch[goog.typeOf(x__2363__auto____9161)]);
if(or__3824__auto____9162)
{return or__3824__auto____9162;
} else
{var or__3824__auto____9163 = (cljs.core._add_watch["_"]);
if(or__3824__auto____9163)
{return or__3824__auto____9163;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____9168 = this$;
if(and__3822__auto____9168)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____9168;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2363__auto____9169 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____9170 = (cljs.core._remove_watch[goog.typeOf(x__2363__auto____9169)]);
if(or__3824__auto____9170)
{return or__3824__auto____9170;
} else
{var or__3824__auto____9171 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____9171)
{return or__3824__auto____9171;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____9176 = coll;
if(and__3822__auto____9176)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____9176;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2363__auto____9177 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9178 = (cljs.core._as_transient[goog.typeOf(x__2363__auto____9177)]);
if(or__3824__auto____9178)
{return or__3824__auto____9178;
} else
{var or__3824__auto____9179 = (cljs.core._as_transient["_"]);
if(or__3824__auto____9179)
{return or__3824__auto____9179;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____9184 = tcoll;
if(and__3822__auto____9184)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____9184;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2363__auto____9185 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9186 = (cljs.core._conj_BANG_[goog.typeOf(x__2363__auto____9185)]);
if(or__3824__auto____9186)
{return or__3824__auto____9186;
} else
{var or__3824__auto____9187 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____9187)
{return or__3824__auto____9187;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____9192 = tcoll;
if(and__3822__auto____9192)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____9192;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2363__auto____9193 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9194 = (cljs.core._persistent_BANG_[goog.typeOf(x__2363__auto____9193)]);
if(or__3824__auto____9194)
{return or__3824__auto____9194;
} else
{var or__3824__auto____9195 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____9195)
{return or__3824__auto____9195;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____9200 = tcoll;
if(and__3822__auto____9200)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____9200;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2363__auto____9201 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9202 = (cljs.core._assoc_BANG_[goog.typeOf(x__2363__auto____9201)]);
if(or__3824__auto____9202)
{return or__3824__auto____9202;
} else
{var or__3824__auto____9203 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____9203)
{return or__3824__auto____9203;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____9208 = tcoll;
if(and__3822__auto____9208)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____9208;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2363__auto____9209 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9210 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2363__auto____9209)]);
if(or__3824__auto____9210)
{return or__3824__auto____9210;
} else
{var or__3824__auto____9211 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____9211)
{return or__3824__auto____9211;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____9216 = tcoll;
if(and__3822__auto____9216)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____9216;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2363__auto____9217 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9218 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2363__auto____9217)]);
if(or__3824__auto____9218)
{return or__3824__auto____9218;
} else
{var or__3824__auto____9219 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____9219)
{return or__3824__auto____9219;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____9224 = tcoll;
if(and__3822__auto____9224)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____9224;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2363__auto____9225 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9226 = (cljs.core._pop_BANG_[goog.typeOf(x__2363__auto____9225)]);
if(or__3824__auto____9226)
{return or__3824__auto____9226;
} else
{var or__3824__auto____9227 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____9227)
{return or__3824__auto____9227;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____9232 = tcoll;
if(and__3822__auto____9232)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____9232;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2363__auto____9233 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____9234 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2363__auto____9233)]);
if(or__3824__auto____9234)
{return or__3824__auto____9234;
} else
{var or__3824__auto____9235 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____9235)
{return or__3824__auto____9235;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____9240 = x;
if(and__3822__auto____9240)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____9240;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2363__auto____9241 = (((x == null))?null:x);
return (function (){var or__3824__auto____9242 = (cljs.core._compare[goog.typeOf(x__2363__auto____9241)]);
if(or__3824__auto____9242)
{return or__3824__auto____9242;
} else
{var or__3824__auto____9243 = (cljs.core._compare["_"]);
if(or__3824__auto____9243)
{return or__3824__auto____9243;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____9248 = coll;
if(and__3822__auto____9248)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____9248;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2363__auto____9249 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9250 = (cljs.core._drop_first[goog.typeOf(x__2363__auto____9249)]);
if(or__3824__auto____9250)
{return or__3824__auto____9250;
} else
{var or__3824__auto____9251 = (cljs.core._drop_first["_"]);
if(or__3824__auto____9251)
{return or__3824__auto____9251;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____9256 = coll;
if(and__3822__auto____9256)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____9256;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2363__auto____9257 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9258 = (cljs.core._chunked_first[goog.typeOf(x__2363__auto____9257)]);
if(or__3824__auto____9258)
{return or__3824__auto____9258;
} else
{var or__3824__auto____9259 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____9259)
{return or__3824__auto____9259;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____9264 = coll;
if(and__3822__auto____9264)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____9264;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2363__auto____9265 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9266 = (cljs.core._chunked_rest[goog.typeOf(x__2363__auto____9265)]);
if(or__3824__auto____9266)
{return or__3824__auto____9266;
} else
{var or__3824__auto____9267 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____9267)
{return or__3824__auto____9267;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____9272 = coll;
if(and__3822__auto____9272)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____9272;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2363__auto____9273 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____9274 = (cljs.core._chunked_next[goog.typeOf(x__2363__auto____9273)]);
if(or__3824__auto____9274)
{return or__3824__auto____9274;
} else
{var or__3824__auto____9275 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____9275)
{return or__3824__auto____9275;
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
var or__3824__auto____9277 = (x === y);
if(or__3824__auto____9277)
{return or__3824__auto____9277;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__9278__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__9279 = y;
var G__9280 = cljs.core.first.call(null,more);
var G__9281 = cljs.core.next.call(null,more);
x = G__9279;
y = G__9280;
more = G__9281;
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
var G__9278 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9278__delegate.call(this, x, y, more);
};
G__9278.cljs$lang$maxFixedArity = 2;
G__9278.cljs$lang$applyTo = (function (arglist__9282){
var x = cljs.core.first(arglist__9282);
var y = cljs.core.first(cljs.core.next(arglist__9282));
var more = cljs.core.rest(cljs.core.next(arglist__9282));
return G__9278__delegate(x, y, more);
});
G__9278.cljs$lang$arity$variadic = G__9278__delegate;
return G__9278;
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
var G__9283 = null;
var G__9283__2 = (function (o,k){
return null;
});
var G__9283__3 = (function (o,k,not_found){
return not_found;
});
G__9283 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__9283__2.call(this,o,k);
case 3:
return G__9283__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9283;
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
var G__9284 = null;
var G__9284__2 = (function (_,f){
return f.call(null);
});
var G__9284__3 = (function (_,f,start){
return start;
});
G__9284 = function(_,f,start){
switch(arguments.length){
case 2:
return G__9284__2.call(this,_,f);
case 3:
return G__9284__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9284;
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
var G__9285 = null;
var G__9285__2 = (function (_,n){
return null;
});
var G__9285__3 = (function (_,n,not_found){
return not_found;
});
G__9285 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__9285__2.call(this,_,n);
case 3:
return G__9285__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9285;
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
var and__3822__auto____9286 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____9286)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____9286;
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
var cnt__9299 = cljs.core._count.call(null,cicoll);
if((cnt__9299 === 0))
{return f.call(null);
} else
{var val__9300 = cljs.core._nth.call(null,cicoll,0);
var n__9301 = 1;
while(true){
if((n__9301 < cnt__9299))
{var nval__9302 = f.call(null,val__9300,cljs.core._nth.call(null,cicoll,n__9301));
if(cljs.core.reduced_QMARK_.call(null,nval__9302))
{return cljs.core.deref.call(null,nval__9302);
} else
{{
var G__9311 = nval__9302;
var G__9312 = (n__9301 + 1);
val__9300 = G__9311;
n__9301 = G__9312;
continue;
}
}
} else
{return val__9300;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__9303 = cljs.core._count.call(null,cicoll);
var val__9304 = val;
var n__9305 = 0;
while(true){
if((n__9305 < cnt__9303))
{var nval__9306 = f.call(null,val__9304,cljs.core._nth.call(null,cicoll,n__9305));
if(cljs.core.reduced_QMARK_.call(null,nval__9306))
{return cljs.core.deref.call(null,nval__9306);
} else
{{
var G__9313 = nval__9306;
var G__9314 = (n__9305 + 1);
val__9304 = G__9313;
n__9305 = G__9314;
continue;
}
}
} else
{return val__9304;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__9307 = cljs.core._count.call(null,cicoll);
var val__9308 = val;
var n__9309 = idx;
while(true){
if((n__9309 < cnt__9307))
{var nval__9310 = f.call(null,val__9308,cljs.core._nth.call(null,cicoll,n__9309));
if(cljs.core.reduced_QMARK_.call(null,nval__9310))
{return cljs.core.deref.call(null,nval__9310);
} else
{{
var G__9315 = nval__9310;
var G__9316 = (n__9309 + 1);
val__9308 = G__9315;
n__9309 = G__9316;
continue;
}
}
} else
{return val__9308;
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
var cnt__9329 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__9330 = (arr[0]);
var n__9331 = 1;
while(true){
if((n__9331 < cnt__9329))
{var nval__9332 = f.call(null,val__9330,(arr[n__9331]));
if(cljs.core.reduced_QMARK_.call(null,nval__9332))
{return cljs.core.deref.call(null,nval__9332);
} else
{{
var G__9341 = nval__9332;
var G__9342 = (n__9331 + 1);
val__9330 = G__9341;
n__9331 = G__9342;
continue;
}
}
} else
{return val__9330;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__9333 = arr.length;
var val__9334 = val;
var n__9335 = 0;
while(true){
if((n__9335 < cnt__9333))
{var nval__9336 = f.call(null,val__9334,(arr[n__9335]));
if(cljs.core.reduced_QMARK_.call(null,nval__9336))
{return cljs.core.deref.call(null,nval__9336);
} else
{{
var G__9343 = nval__9336;
var G__9344 = (n__9335 + 1);
val__9334 = G__9343;
n__9335 = G__9344;
continue;
}
}
} else
{return val__9334;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__9337 = arr.length;
var val__9338 = val;
var n__9339 = idx;
while(true){
if((n__9339 < cnt__9337))
{var nval__9340 = f.call(null,val__9338,(arr[n__9339]));
if(cljs.core.reduced_QMARK_.call(null,nval__9340))
{return cljs.core.deref.call(null,nval__9340);
} else
{{
var G__9345 = nval__9340;
var G__9346 = (n__9339 + 1);
val__9338 = G__9345;
n__9339 = G__9346;
continue;
}
}
} else
{return val__9338;
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
var this__9347 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__9348 = this;
if(((this__9348.i + 1) < this__9348.a.length))
{return (new cljs.core.IndexedSeq(this__9348.a,(this__9348.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9349 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9350 = this;
var c__9351 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__9351 > 0))
{return (new cljs.core.RSeq(coll,(c__9351 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__9352 = this;
var this__9353 = this;
return cljs.core.pr_str.call(null,this__9353);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9354 = this;
if(cljs.core.counted_QMARK_.call(null,this__9354.a))
{return cljs.core.ci_reduce.call(null,this__9354.a,f,(this__9354.a[this__9354.i]),(this__9354.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__9354.a[this__9354.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9355 = this;
if(cljs.core.counted_QMARK_.call(null,this__9355.a))
{return cljs.core.ci_reduce.call(null,this__9355.a,f,start,this__9355.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9356 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9357 = this;
return (this__9357.a.length - this__9357.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__9358 = this;
return (this__9358.a[this__9358.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__9359 = this;
if(((this__9359.i + 1) < this__9359.a.length))
{return (new cljs.core.IndexedSeq(this__9359.a,(this__9359.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9360 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9361 = this;
var i__9362 = (n + this__9361.i);
if((i__9362 < this__9361.a.length))
{return (this__9361.a[i__9362]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9363 = this;
var i__9364 = (n + this__9363.i);
if((i__9364 < this__9363.a.length))
{return (this__9363.a[i__9364]);
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
var G__9365 = null;
var G__9365__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__9365__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__9365 = function(array,f,start){
switch(arguments.length){
case 2:
return G__9365__2.call(this,array,f);
case 3:
return G__9365__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9365;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__9366 = null;
var G__9366__2 = (function (array,k){
return (array[k]);
});
var G__9366__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__9366 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__9366__2.call(this,array,k);
case 3:
return G__9366__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9366;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__9367 = null;
var G__9367__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__9367__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__9367 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__9367__2.call(this,array,n);
case 3:
return G__9367__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9367;
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
var this__9368 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9369 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__9370 = this;
var this__9371 = this;
return cljs.core.pr_str.call(null,this__9371);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9372 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9373 = this;
return (this__9373.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9374 = this;
return cljs.core._nth.call(null,this__9374.ci,this__9374.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9375 = this;
if((this__9375.i > 0))
{return (new cljs.core.RSeq(this__9375.ci,(this__9375.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9376 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__9377 = this;
return (new cljs.core.RSeq(this__9377.ci,this__9377.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9378 = this;
return this__9378.meta;
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
{if((function (){var G__9382__9383 = coll;
if(G__9382__9383)
{if((function (){var or__3824__auto____9384 = (G__9382__9383.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____9384)
{return or__3824__auto____9384;
} else
{return G__9382__9383.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__9382__9383.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9382__9383);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9382__9383);
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
{if((function (){var G__9389__9390 = coll;
if(G__9389__9390)
{if((function (){var or__3824__auto____9391 = (G__9389__9390.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9391)
{return or__3824__auto____9391;
} else
{return G__9389__9390.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9389__9390.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9389__9390);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9389__9390);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__9392 = cljs.core.seq.call(null,coll);
if((s__9392 == null))
{return null;
} else
{return cljs.core._first.call(null,s__9392);
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
{if((function (){var G__9397__9398 = coll;
if(G__9397__9398)
{if((function (){var or__3824__auto____9399 = (G__9397__9398.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9399)
{return or__3824__auto____9399;
} else
{return G__9397__9398.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9397__9398.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9397__9398);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9397__9398);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__9400 = cljs.core.seq.call(null,coll);
if(!((s__9400 == null)))
{return cljs.core._rest.call(null,s__9400);
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
{if((function (){var G__9404__9405 = coll;
if(G__9404__9405)
{if((function (){var or__3824__auto____9406 = (G__9404__9405.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____9406)
{return or__3824__auto____9406;
} else
{return G__9404__9405.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__9404__9405.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__9404__9405);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__9404__9405);
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
var sn__9408 = cljs.core.next.call(null,s);
if(!((sn__9408 == null)))
{{
var G__9409 = sn__9408;
s = G__9409;
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
var G__9410__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__9411 = conj.call(null,coll,x);
var G__9412 = cljs.core.first.call(null,xs);
var G__9413 = cljs.core.next.call(null,xs);
coll = G__9411;
x = G__9412;
xs = G__9413;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__9410 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9410__delegate.call(this, coll, x, xs);
};
G__9410.cljs$lang$maxFixedArity = 2;
G__9410.cljs$lang$applyTo = (function (arglist__9414){
var coll = cljs.core.first(arglist__9414);
var x = cljs.core.first(cljs.core.next(arglist__9414));
var xs = cljs.core.rest(cljs.core.next(arglist__9414));
return G__9410__delegate(coll, x, xs);
});
G__9410.cljs$lang$arity$variadic = G__9410__delegate;
return G__9410;
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
var s__9417 = cljs.core.seq.call(null,coll);
var acc__9418 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__9417))
{return (acc__9418 + cljs.core._count.call(null,s__9417));
} else
{{
var G__9419 = cljs.core.next.call(null,s__9417);
var G__9420 = (acc__9418 + 1);
s__9417 = G__9419;
acc__9418 = G__9420;
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
{if((function (){var G__9427__9428 = coll;
if(G__9427__9428)
{if((function (){var or__3824__auto____9429 = (G__9427__9428.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____9429)
{return or__3824__auto____9429;
} else
{return G__9427__9428.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9427__9428.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9427__9428);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9427__9428);
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
{if((function (){var G__9430__9431 = coll;
if(G__9430__9431)
{if((function (){var or__3824__auto____9432 = (G__9430__9431.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____9432)
{return or__3824__auto____9432;
} else
{return G__9430__9431.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9430__9431.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9430__9431);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9430__9431);
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
var G__9435__delegate = function (coll,k,v,kvs){
while(true){
var ret__9434 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__9436 = ret__9434;
var G__9437 = cljs.core.first.call(null,kvs);
var G__9438 = cljs.core.second.call(null,kvs);
var G__9439 = cljs.core.nnext.call(null,kvs);
coll = G__9436;
k = G__9437;
v = G__9438;
kvs = G__9439;
continue;
}
} else
{return ret__9434;
}
break;
}
};
var G__9435 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9435__delegate.call(this, coll, k, v, kvs);
};
G__9435.cljs$lang$maxFixedArity = 3;
G__9435.cljs$lang$applyTo = (function (arglist__9440){
var coll = cljs.core.first(arglist__9440);
var k = cljs.core.first(cljs.core.next(arglist__9440));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9440)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9440)));
return G__9435__delegate(coll, k, v, kvs);
});
G__9435.cljs$lang$arity$variadic = G__9435__delegate;
return G__9435;
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
var G__9443__delegate = function (coll,k,ks){
while(true){
var ret__9442 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__9444 = ret__9442;
var G__9445 = cljs.core.first.call(null,ks);
var G__9446 = cljs.core.next.call(null,ks);
coll = G__9444;
k = G__9445;
ks = G__9446;
continue;
}
} else
{return ret__9442;
}
break;
}
};
var G__9443 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9443__delegate.call(this, coll, k, ks);
};
G__9443.cljs$lang$maxFixedArity = 2;
G__9443.cljs$lang$applyTo = (function (arglist__9447){
var coll = cljs.core.first(arglist__9447);
var k = cljs.core.first(cljs.core.next(arglist__9447));
var ks = cljs.core.rest(cljs.core.next(arglist__9447));
return G__9443__delegate(coll, k, ks);
});
G__9443.cljs$lang$arity$variadic = G__9443__delegate;
return G__9443;
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
if((function (){var G__9451__9452 = o;
if(G__9451__9452)
{if((function (){var or__3824__auto____9453 = (G__9451__9452.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9453)
{return or__3824__auto____9453;
} else
{return G__9451__9452.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9451__9452.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9451__9452);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9451__9452);
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
var G__9456__delegate = function (coll,k,ks){
while(true){
var ret__9455 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__9457 = ret__9455;
var G__9458 = cljs.core.first.call(null,ks);
var G__9459 = cljs.core.next.call(null,ks);
coll = G__9457;
k = G__9458;
ks = G__9459;
continue;
}
} else
{return ret__9455;
}
break;
}
};
var G__9456 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9456__delegate.call(this, coll, k, ks);
};
G__9456.cljs$lang$maxFixedArity = 2;
G__9456.cljs$lang$applyTo = (function (arglist__9460){
var coll = cljs.core.first(arglist__9460);
var k = cljs.core.first(cljs.core.next(arglist__9460));
var ks = cljs.core.rest(cljs.core.next(arglist__9460));
return G__9456__delegate(coll, k, ks);
});
G__9456.cljs$lang$arity$variadic = G__9456__delegate;
return G__9456;
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
var h__9462 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__9462);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__9462;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__9464 = (cljs.core.string_hash_cache[k]);
if(!((h__9464 == null)))
{return h__9464;
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
if((function (){var and__3822__auto____9466 = goog.isString(o);
if(and__3822__auto____9466)
{return check_cache;
} else
{return and__3822__auto____9466;
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
{var G__9470__9471 = x;
if(G__9470__9471)
{if((function (){var or__3824__auto____9472 = (G__9470__9471.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____9472)
{return or__3824__auto____9472;
} else
{return G__9470__9471.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__9470__9471.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__9470__9471);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__9470__9471);
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
{var G__9476__9477 = x;
if(G__9476__9477)
{if((function (){var or__3824__auto____9478 = (G__9476__9477.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____9478)
{return or__3824__auto____9478;
} else
{return G__9476__9477.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__9476__9477.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__9476__9477);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__9476__9477);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__9482__9483 = x;
if(G__9482__9483)
{if((function (){var or__3824__auto____9484 = (G__9482__9483.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____9484)
{return or__3824__auto____9484;
} else
{return G__9482__9483.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__9482__9483.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__9482__9483);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__9482__9483);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__9488__9489 = x;
if(G__9488__9489)
{if((function (){var or__3824__auto____9490 = (G__9488__9489.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____9490)
{return or__3824__auto____9490;
} else
{return G__9488__9489.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__9488__9489.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__9488__9489);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__9488__9489);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__9494__9495 = x;
if(G__9494__9495)
{if((function (){var or__3824__auto____9496 = (G__9494__9495.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____9496)
{return or__3824__auto____9496;
} else
{return G__9494__9495.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__9494__9495.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__9494__9495);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__9494__9495);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__9500__9501 = x;
if(G__9500__9501)
{if((function (){var or__3824__auto____9502 = (G__9500__9501.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____9502)
{return or__3824__auto____9502;
} else
{return G__9500__9501.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9500__9501.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9500__9501);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9500__9501);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__9506__9507 = x;
if(G__9506__9507)
{if((function (){var or__3824__auto____9508 = (G__9506__9507.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____9508)
{return or__3824__auto____9508;
} else
{return G__9506__9507.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9506__9507.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9506__9507);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9506__9507);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__9512__9513 = x;
if(G__9512__9513)
{if((function (){var or__3824__auto____9514 = (G__9512__9513.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____9514)
{return or__3824__auto____9514;
} else
{return G__9512__9513.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__9512__9513.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__9512__9513);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__9512__9513);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__9518__9519 = x;
if(G__9518__9519)
{if((function (){var or__3824__auto____9520 = (G__9518__9519.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____9520)
{return or__3824__auto____9520;
} else
{return G__9518__9519.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__9518__9519.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__9518__9519);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__9518__9519);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__9524__9525 = x;
if(G__9524__9525)
{if(cljs.core.truth_((function (){var or__3824__auto____9526 = null;
if(cljs.core.truth_(or__3824__auto____9526))
{return or__3824__auto____9526;
} else
{return G__9524__9525.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__9524__9525.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__9524__9525);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__9524__9525);
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
var G__9527__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__9527 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9527__delegate.call(this, keyvals);
};
G__9527.cljs$lang$maxFixedArity = 0;
G__9527.cljs$lang$applyTo = (function (arglist__9528){
var keyvals = cljs.core.seq(arglist__9528);;
return G__9527__delegate(keyvals);
});
G__9527.cljs$lang$arity$variadic = G__9527__delegate;
return G__9527;
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
var keys__9530 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__9530.push(key);
}));
return keys__9530;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__9534 = i;
var j__9535 = j;
var len__9536 = len;
while(true){
if((len__9536 === 0))
{return to;
} else
{(to[j__9535] = (from[i__9534]));
{
var G__9537 = (i__9534 + 1);
var G__9538 = (j__9535 + 1);
var G__9539 = (len__9536 - 1);
i__9534 = G__9537;
j__9535 = G__9538;
len__9536 = G__9539;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__9543 = (i + (len - 1));
var j__9544 = (j + (len - 1));
var len__9545 = len;
while(true){
if((len__9545 === 0))
{return to;
} else
{(to[j__9544] = (from[i__9543]));
{
var G__9546 = (i__9543 - 1);
var G__9547 = (j__9544 - 1);
var G__9548 = (len__9545 - 1);
i__9543 = G__9546;
j__9544 = G__9547;
len__9545 = G__9548;
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
{var G__9552__9553 = s;
if(G__9552__9553)
{if((function (){var or__3824__auto____9554 = (G__9552__9553.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9554)
{return or__3824__auto____9554;
} else
{return G__9552__9553.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9552__9553.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9552__9553);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9552__9553);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__9558__9559 = s;
if(G__9558__9559)
{if((function (){var or__3824__auto____9560 = (G__9558__9559.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____9560)
{return or__3824__auto____9560;
} else
{return G__9558__9559.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__9558__9559.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__9558__9559);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__9558__9559);
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
var and__3822__auto____9563 = goog.isString(x);
if(and__3822__auto____9563)
{return !((function (){var or__3824__auto____9564 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____9564)
{return or__3824__auto____9564;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____9563;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____9566 = goog.isString(x);
if(and__3822__auto____9566)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____9566;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____9568 = goog.isString(x);
if(and__3822__auto____9568)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____9568;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____9573 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____9573)
{return or__3824__auto____9573;
} else
{var G__9574__9575 = f;
if(G__9574__9575)
{if((function (){var or__3824__auto____9576 = (G__9574__9575.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____9576)
{return or__3824__auto____9576;
} else
{return G__9574__9575.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__9574__9575.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__9574__9575);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__9574__9575);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____9578 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____9578)
{return (n == n.toFixed());
} else
{return and__3822__auto____9578;
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
if(cljs.core.truth_((function (){var and__3822__auto____9581 = coll;
if(cljs.core.truth_(and__3822__auto____9581))
{var and__3822__auto____9582 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____9582)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____9582;
}
} else
{return and__3822__auto____9581;
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
var G__9591__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__9587 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__9588 = more;
while(true){
var x__9589 = cljs.core.first.call(null,xs__9588);
var etc__9590 = cljs.core.next.call(null,xs__9588);
if(cljs.core.truth_(xs__9588))
{if(cljs.core.contains_QMARK_.call(null,s__9587,x__9589))
{return false;
} else
{{
var G__9592 = cljs.core.conj.call(null,s__9587,x__9589);
var G__9593 = etc__9590;
s__9587 = G__9592;
xs__9588 = G__9593;
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
var G__9591 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9591__delegate.call(this, x, y, more);
};
G__9591.cljs$lang$maxFixedArity = 2;
G__9591.cljs$lang$applyTo = (function (arglist__9594){
var x = cljs.core.first(arglist__9594);
var y = cljs.core.first(cljs.core.next(arglist__9594));
var more = cljs.core.rest(cljs.core.next(arglist__9594));
return G__9591__delegate(x, y, more);
});
G__9591.cljs$lang$arity$variadic = G__9591__delegate;
return G__9591;
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
{if((function (){var G__9598__9599 = x;
if(G__9598__9599)
{if(cljs.core.truth_((function (){var or__3824__auto____9600 = null;
if(cljs.core.truth_(or__3824__auto____9600))
{return or__3824__auto____9600;
} else
{return G__9598__9599.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__9598__9599.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__9598__9599);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__9598__9599);
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
var xl__9605 = cljs.core.count.call(null,xs);
var yl__9606 = cljs.core.count.call(null,ys);
if((xl__9605 < yl__9606))
{return -1;
} else
{if((xl__9605 > yl__9606))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__9605,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__9607 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____9608 = (d__9607 === 0);
if(and__3822__auto____9608)
{return ((n + 1) < len);
} else
{return and__3822__auto____9608;
}
})())
{{
var G__9609 = xs;
var G__9610 = ys;
var G__9611 = len;
var G__9612 = (n + 1);
xs = G__9609;
ys = G__9610;
len = G__9611;
n = G__9612;
continue;
}
} else
{return d__9607;
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
var r__9614 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__9614))
{return r__9614;
} else
{if(cljs.core.truth_(r__9614))
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
{var a__9616 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__9616,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9616);
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
var temp__3971__auto____9622 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9622)
{var s__9623 = temp__3971__auto____9622;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9623),cljs.core.next.call(null,s__9623));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__9624 = val;
var coll__9625 = cljs.core.seq.call(null,coll);
while(true){
if(coll__9625)
{var nval__9626 = f.call(null,val__9624,cljs.core.first.call(null,coll__9625));
if(cljs.core.reduced_QMARK_.call(null,nval__9626))
{return cljs.core.deref.call(null,nval__9626);
} else
{{
var G__9627 = nval__9626;
var G__9628 = cljs.core.next.call(null,coll__9625);
val__9624 = G__9627;
coll__9625 = G__9628;
continue;
}
}
} else
{return val__9624;
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
var a__9630 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__9630);
return cljs.core.vec.call(null,a__9630);
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
if((function (){var G__9637__9638 = coll;
if(G__9637__9638)
{if((function (){var or__3824__auto____9639 = (G__9637__9638.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____9639)
{return or__3824__auto____9639;
} else
{return G__9637__9638.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9637__9638.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9637__9638);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9637__9638);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__9640__9641 = coll;
if(G__9640__9641)
{if((function (){var or__3824__auto____9642 = (G__9640__9641.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____9642)
{return or__3824__auto____9642;
} else
{return G__9640__9641.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9640__9641.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9640__9641);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9640__9641);
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
var this__9643 = this;
return this__9643.val;
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
var G__9644__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9644 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9644__delegate.call(this, x, y, more);
};
G__9644.cljs$lang$maxFixedArity = 2;
G__9644.cljs$lang$applyTo = (function (arglist__9645){
var x = cljs.core.first(arglist__9645);
var y = cljs.core.first(cljs.core.next(arglist__9645));
var more = cljs.core.rest(cljs.core.next(arglist__9645));
return G__9644__delegate(x, y, more);
});
G__9644.cljs$lang$arity$variadic = G__9644__delegate;
return G__9644;
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
var G__9646__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9646 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9646__delegate.call(this, x, y, more);
};
G__9646.cljs$lang$maxFixedArity = 2;
G__9646.cljs$lang$applyTo = (function (arglist__9647){
var x = cljs.core.first(arglist__9647);
var y = cljs.core.first(cljs.core.next(arglist__9647));
var more = cljs.core.rest(cljs.core.next(arglist__9647));
return G__9646__delegate(x, y, more);
});
G__9646.cljs$lang$arity$variadic = G__9646__delegate;
return G__9646;
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
var G__9648__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9648 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9648__delegate.call(this, x, y, more);
};
G__9648.cljs$lang$maxFixedArity = 2;
G__9648.cljs$lang$applyTo = (function (arglist__9649){
var x = cljs.core.first(arglist__9649);
var y = cljs.core.first(cljs.core.next(arglist__9649));
var more = cljs.core.rest(cljs.core.next(arglist__9649));
return G__9648__delegate(x, y, more);
});
G__9648.cljs$lang$arity$variadic = G__9648__delegate;
return G__9648;
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
var G__9650__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9650 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9650__delegate.call(this, x, y, more);
};
G__9650.cljs$lang$maxFixedArity = 2;
G__9650.cljs$lang$applyTo = (function (arglist__9651){
var x = cljs.core.first(arglist__9651);
var y = cljs.core.first(cljs.core.next(arglist__9651));
var more = cljs.core.rest(cljs.core.next(arglist__9651));
return G__9650__delegate(x, y, more);
});
G__9650.cljs$lang$arity$variadic = G__9650__delegate;
return G__9650;
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
var G__9652__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__9653 = y;
var G__9654 = cljs.core.first.call(null,more);
var G__9655 = cljs.core.next.call(null,more);
x = G__9653;
y = G__9654;
more = G__9655;
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
var G__9652 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9652__delegate.call(this, x, y, more);
};
G__9652.cljs$lang$maxFixedArity = 2;
G__9652.cljs$lang$applyTo = (function (arglist__9656){
var x = cljs.core.first(arglist__9656);
var y = cljs.core.first(cljs.core.next(arglist__9656));
var more = cljs.core.rest(cljs.core.next(arglist__9656));
return G__9652__delegate(x, y, more);
});
G__9652.cljs$lang$arity$variadic = G__9652__delegate;
return G__9652;
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
var G__9657__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__9658 = y;
var G__9659 = cljs.core.first.call(null,more);
var G__9660 = cljs.core.next.call(null,more);
x = G__9658;
y = G__9659;
more = G__9660;
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
var G__9657 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9657__delegate.call(this, x, y, more);
};
G__9657.cljs$lang$maxFixedArity = 2;
G__9657.cljs$lang$applyTo = (function (arglist__9661){
var x = cljs.core.first(arglist__9661);
var y = cljs.core.first(cljs.core.next(arglist__9661));
var more = cljs.core.rest(cljs.core.next(arglist__9661));
return G__9657__delegate(x, y, more);
});
G__9657.cljs$lang$arity$variadic = G__9657__delegate;
return G__9657;
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
var G__9662__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__9663 = y;
var G__9664 = cljs.core.first.call(null,more);
var G__9665 = cljs.core.next.call(null,more);
x = G__9663;
y = G__9664;
more = G__9665;
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
var G__9662 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9662__delegate.call(this, x, y, more);
};
G__9662.cljs$lang$maxFixedArity = 2;
G__9662.cljs$lang$applyTo = (function (arglist__9666){
var x = cljs.core.first(arglist__9666);
var y = cljs.core.first(cljs.core.next(arglist__9666));
var more = cljs.core.rest(cljs.core.next(arglist__9666));
return G__9662__delegate(x, y, more);
});
G__9662.cljs$lang$arity$variadic = G__9662__delegate;
return G__9662;
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
var G__9667__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__9668 = y;
var G__9669 = cljs.core.first.call(null,more);
var G__9670 = cljs.core.next.call(null,more);
x = G__9668;
y = G__9669;
more = G__9670;
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
var G__9667 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9667__delegate.call(this, x, y, more);
};
G__9667.cljs$lang$maxFixedArity = 2;
G__9667.cljs$lang$applyTo = (function (arglist__9671){
var x = cljs.core.first(arglist__9671);
var y = cljs.core.first(cljs.core.next(arglist__9671));
var more = cljs.core.rest(cljs.core.next(arglist__9671));
return G__9667__delegate(x, y, more);
});
G__9667.cljs$lang$arity$variadic = G__9667__delegate;
return G__9667;
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
var G__9672__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9672 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9672__delegate.call(this, x, y, more);
};
G__9672.cljs$lang$maxFixedArity = 2;
G__9672.cljs$lang$applyTo = (function (arglist__9673){
var x = cljs.core.first(arglist__9673);
var y = cljs.core.first(cljs.core.next(arglist__9673));
var more = cljs.core.rest(cljs.core.next(arglist__9673));
return G__9672__delegate(x, y, more);
});
G__9672.cljs$lang$arity$variadic = G__9672__delegate;
return G__9672;
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
var G__9674__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9674 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9674__delegate.call(this, x, y, more);
};
G__9674.cljs$lang$maxFixedArity = 2;
G__9674.cljs$lang$applyTo = (function (arglist__9675){
var x = cljs.core.first(arglist__9675);
var y = cljs.core.first(cljs.core.next(arglist__9675));
var more = cljs.core.rest(cljs.core.next(arglist__9675));
return G__9674__delegate(x, y, more);
});
G__9674.cljs$lang$arity$variadic = G__9674__delegate;
return G__9674;
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
var rem__9677 = (n % d);
return cljs.core.fix.call(null,((n - rem__9677) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9679 = cljs.core.quot.call(null,n,d);
return (n - (d * q__9679));
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
var v__9682 = (v - ((v >> 1) & 1431655765));
var v__9683 = ((v__9682 & 858993459) + ((v__9682 >> 2) & 858993459));
return ((((v__9683 + (v__9683 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__9684__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__9685 = y;
var G__9686 = cljs.core.first.call(null,more);
var G__9687 = cljs.core.next.call(null,more);
x = G__9685;
y = G__9686;
more = G__9687;
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
var G__9684 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9684__delegate.call(this, x, y, more);
};
G__9684.cljs$lang$maxFixedArity = 2;
G__9684.cljs$lang$applyTo = (function (arglist__9688){
var x = cljs.core.first(arglist__9688);
var y = cljs.core.first(cljs.core.next(arglist__9688));
var more = cljs.core.rest(cljs.core.next(arglist__9688));
return G__9684__delegate(x, y, more);
});
G__9684.cljs$lang$arity$variadic = G__9684__delegate;
return G__9684;
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
var n__9692 = n;
var xs__9693 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9694 = xs__9693;
if(and__3822__auto____9694)
{return (n__9692 > 0);
} else
{return and__3822__auto____9694;
}
})()))
{{
var G__9695 = (n__9692 - 1);
var G__9696 = cljs.core.next.call(null,xs__9693);
n__9692 = G__9695;
xs__9693 = G__9696;
continue;
}
} else
{return xs__9693;
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
var G__9697__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9698 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9699 = cljs.core.next.call(null,more);
sb = G__9698;
more = G__9699;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9697 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9697__delegate.call(this, x, ys);
};
G__9697.cljs$lang$maxFixedArity = 1;
G__9697.cljs$lang$applyTo = (function (arglist__9700){
var x = cljs.core.first(arglist__9700);
var ys = cljs.core.rest(arglist__9700);
return G__9697__delegate(x, ys);
});
G__9697.cljs$lang$arity$variadic = G__9697__delegate;
return G__9697;
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
var G__9701__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9702 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__9703 = cljs.core.next.call(null,more);
sb = G__9702;
more = G__9703;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__9701 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9701__delegate.call(this, x, ys);
};
G__9701.cljs$lang$maxFixedArity = 1;
G__9701.cljs$lang$applyTo = (function (arglist__9704){
var x = cljs.core.first(arglist__9704);
var ys = cljs.core.rest(arglist__9704);
return G__9701__delegate(x, ys);
});
G__9701.cljs$lang$arity$variadic = G__9701__delegate;
return G__9701;
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
format.cljs$lang$applyTo = (function (arglist__9705){
var fmt = cljs.core.first(arglist__9705);
var args = cljs.core.rest(arglist__9705);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9708 = cljs.core.seq.call(null,x);
var ys__9709 = cljs.core.seq.call(null,y);
while(true){
if((xs__9708 == null))
{return (ys__9709 == null);
} else
{if((ys__9709 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9708),cljs.core.first.call(null,ys__9709)))
{{
var G__9710 = cljs.core.next.call(null,xs__9708);
var G__9711 = cljs.core.next.call(null,ys__9709);
xs__9708 = G__9710;
ys__9709 = G__9711;
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
return cljs.core.reduce.call(null,(function (p1__9712_SHARP_,p2__9713_SHARP_){
return cljs.core.hash_combine.call(null,p1__9712_SHARP_,cljs.core.hash.call(null,p2__9713_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__9717 = 0;
var s__9718 = cljs.core.seq.call(null,m);
while(true){
if(s__9718)
{var e__9719 = cljs.core.first.call(null,s__9718);
{
var G__9720 = ((h__9717 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__9719)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__9719)))) % 4503599627370496);
var G__9721 = cljs.core.next.call(null,s__9718);
h__9717 = G__9720;
s__9718 = G__9721;
continue;
}
} else
{return h__9717;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__9725 = 0;
var s__9726 = cljs.core.seq.call(null,s);
while(true){
if(s__9726)
{var e__9727 = cljs.core.first.call(null,s__9726);
{
var G__9728 = ((h__9725 + cljs.core.hash.call(null,e__9727)) % 4503599627370496);
var G__9729 = cljs.core.next.call(null,s__9726);
h__9725 = G__9728;
s__9726 = G__9729;
continue;
}
} else
{return h__9725;
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
var G__9750__9751 = cljs.core.seq.call(null,fn_map);
if(G__9750__9751)
{var G__9753__9755 = cljs.core.first.call(null,G__9750__9751);
var vec__9754__9756 = G__9753__9755;
var key_name__9757 = cljs.core.nth.call(null,vec__9754__9756,0,null);
var f__9758 = cljs.core.nth.call(null,vec__9754__9756,1,null);
var G__9750__9759 = G__9750__9751;
var G__9753__9760 = G__9753__9755;
var G__9750__9761 = G__9750__9759;
while(true){
var vec__9762__9763 = G__9753__9760;
var key_name__9764 = cljs.core.nth.call(null,vec__9762__9763,0,null);
var f__9765 = cljs.core.nth.call(null,vec__9762__9763,1,null);
var G__9750__9766 = G__9750__9761;
var str_name__9767 = cljs.core.name.call(null,key_name__9764);
(obj[str_name__9767] = f__9765);
var temp__3974__auto____9768 = cljs.core.next.call(null,G__9750__9766);
if(temp__3974__auto____9768)
{var G__9750__9769 = temp__3974__auto____9768;
{
var G__9770 = cljs.core.first.call(null,G__9750__9769);
var G__9771 = G__9750__9769;
G__9753__9760 = G__9770;
G__9750__9761 = G__9771;
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
var this__9772 = this;
var h__2192__auto____9773 = this__9772.__hash;
if(!((h__2192__auto____9773 == null)))
{return h__2192__auto____9773;
} else
{var h__2192__auto____9774 = cljs.core.hash_coll.call(null,coll);
this__9772.__hash = h__2192__auto____9774;
return h__2192__auto____9774;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9775 = this;
if((this__9775.count === 1))
{return null;
} else
{return this__9775.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9776 = this;
return (new cljs.core.List(this__9776.meta,o,coll,(this__9776.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__9777 = this;
var this__9778 = this;
return cljs.core.pr_str.call(null,this__9778);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9779 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9780 = this;
return this__9780.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9781 = this;
return this__9781.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9782 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9783 = this;
return this__9783.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9784 = this;
if((this__9784.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__9784.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9785 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9786 = this;
return (new cljs.core.List(meta,this__9786.first,this__9786.rest,this__9786.count,this__9786.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9787 = this;
return this__9787.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9788 = this;
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
var this__9789 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9790 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9791 = this;
return (new cljs.core.List(this__9791.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__9792 = this;
var this__9793 = this;
return cljs.core.pr_str.call(null,this__9793);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9794 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9795 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9796 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9797 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9798 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9799 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9800 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9801 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9802 = this;
return this__9802.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9803 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__9807__9808 = coll;
if(G__9807__9808)
{if((function (){var or__3824__auto____9809 = (G__9807__9808.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____9809)
{return or__3824__auto____9809;
} else
{return G__9807__9808.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__9807__9808.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__9807__9808);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__9807__9808);
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
var G__9810__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__9810 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9810__delegate.call(this, x, y, z, items);
};
G__9810.cljs$lang$maxFixedArity = 3;
G__9810.cljs$lang$applyTo = (function (arglist__9811){
var x = cljs.core.first(arglist__9811);
var y = cljs.core.first(cljs.core.next(arglist__9811));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9811)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9811)));
return G__9810__delegate(x, y, z, items);
});
G__9810.cljs$lang$arity$variadic = G__9810__delegate;
return G__9810;
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
var this__9812 = this;
var h__2192__auto____9813 = this__9812.__hash;
if(!((h__2192__auto____9813 == null)))
{return h__2192__auto____9813;
} else
{var h__2192__auto____9814 = cljs.core.hash_coll.call(null,coll);
this__9812.__hash = h__2192__auto____9814;
return h__2192__auto____9814;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9815 = this;
if((this__9815.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__9815.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9816 = this;
return (new cljs.core.Cons(null,o,coll,this__9816.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__9817 = this;
var this__9818 = this;
return cljs.core.pr_str.call(null,this__9818);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9819 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9820 = this;
return this__9820.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9821 = this;
if((this__9821.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__9821.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9822 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9823 = this;
return (new cljs.core.Cons(meta,this__9823.first,this__9823.rest,this__9823.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9824 = this;
return this__9824.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9825 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9825.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____9830 = (coll == null);
if(or__3824__auto____9830)
{return or__3824__auto____9830;
} else
{var G__9831__9832 = coll;
if(G__9831__9832)
{if((function (){var or__3824__auto____9833 = (G__9831__9832.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____9833)
{return or__3824__auto____9833;
} else
{return G__9831__9832.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9831__9832.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9831__9832);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9831__9832);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__9837__9838 = x;
if(G__9837__9838)
{if((function (){var or__3824__auto____9839 = (G__9837__9838.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____9839)
{return or__3824__auto____9839;
} else
{return G__9837__9838.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__9837__9838.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__9837__9838);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__9837__9838);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__9840 = null;
var G__9840__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9840__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9840 = function(string,f,start){
switch(arguments.length){
case 2:
return G__9840__2.call(this,string,f);
case 3:
return G__9840__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9840;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9841 = null;
var G__9841__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9841__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9841 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__9841__2.call(this,string,k);
case 3:
return G__9841__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9841;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9842 = null;
var G__9842__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__9842__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9842 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__9842__2.call(this,string,n);
case 3:
return G__9842__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9842;
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
var G__9854 = null;
var G__9854__2 = (function (this_sym9845,coll){
var this__9847 = this;
var this_sym9845__9848 = this;
var ___9849 = this_sym9845__9848;
if((coll == null))
{return null;
} else
{var strobj__9850 = coll.strobj;
if((strobj__9850 == null))
{return cljs.core._lookup.call(null,coll,this__9847.k,null);
} else
{return (strobj__9850[this__9847.k]);
}
}
});
var G__9854__3 = (function (this_sym9846,coll,not_found){
var this__9847 = this;
var this_sym9846__9851 = this;
var ___9852 = this_sym9846__9851;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__9847.k,not_found);
}
});
G__9854 = function(this_sym9846,coll,not_found){
switch(arguments.length){
case 2:
return G__9854__2.call(this,this_sym9846,coll);
case 3:
return G__9854__3.call(this,this_sym9846,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9854;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym9843,args9844){
var this__9853 = this;
return this_sym9843.call.apply(this_sym9843,[this_sym9843].concat(args9844.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__9863 = null;
var G__9863__2 = (function (this_sym9857,coll){
var this_sym9857__9859 = this;
var this__9860 = this_sym9857__9859;
return cljs.core._lookup.call(null,coll,this__9860.toString(),null);
});
var G__9863__3 = (function (this_sym9858,coll,not_found){
var this_sym9858__9861 = this;
var this__9862 = this_sym9858__9861;
return cljs.core._lookup.call(null,coll,this__9862.toString(),not_found);
});
G__9863 = function(this_sym9858,coll,not_found){
switch(arguments.length){
case 2:
return G__9863__2.call(this,this_sym9858,coll);
case 3:
return G__9863__3.call(this,this_sym9858,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9863;
})()
;
String.prototype.apply = (function (this_sym9855,args9856){
return this_sym9855.call.apply(this_sym9855,[this_sym9855].concat(args9856.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__9865 = lazy_seq.x;
if(lazy_seq.realized)
{return x__9865;
} else
{lazy_seq.x = x__9865.call(null);
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
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9869 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9870 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__9871 = this;
var this__9872 = this;
return cljs.core.pr_str.call(null,this__9872);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9873 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9874 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9875 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9876 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9877 = this;
return (new cljs.core.LazySeq(meta,this__9877.realized,this__9877.x,this__9877.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9878 = this;
return this__9878.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9879 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9879.meta);
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
var this__9880 = this;
return this__9880.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__9881 = this;
var ___9882 = this;
(this__9881.buf[this__9881.end] = o);
return this__9881.end = (this__9881.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__9883 = this;
var ___9884 = this;
var ret__9885 = (new cljs.core.ArrayChunk(this__9883.buf,0,this__9883.end));
this__9883.buf = null;
return ret__9885;
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
var this__9886 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__9886.arr[this__9886.off]),(this__9886.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9887 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__9887.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__9888 = this;
if((this__9888.off === this__9888.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__9888.arr,(this__9888.off + 1),this__9888.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__9889 = this;
return (this__9889.arr[(this__9889.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__9890 = this;
if((function (){var and__3822__auto____9891 = (i >= 0);
if(and__3822__auto____9891)
{return (i < (this__9890.end - this__9890.off));
} else
{return and__3822__auto____9891;
}
})())
{return (this__9890.arr[(this__9890.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9892 = this;
return (this__9892.end - this__9892.off);
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
var this__9893 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9894 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9895 = this;
return cljs.core._nth.call(null,this__9895.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9896 = this;
if((cljs.core._count.call(null,this__9896.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__9896.chunk),this__9896.more,this__9896.meta));
} else
{if((this__9896.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__9896.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9897 = this;
if((this__9897.more == null))
{return null;
} else
{return this__9897.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9898 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9899 = this;
return (new cljs.core.ChunkedCons(this__9899.chunk,this__9899.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9900 = this;
return this__9900.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9901 = this;
return this__9901.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9902 = this;
if((this__9902.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__9902.more;
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
if((function (){var G__9906__9907 = s;
if(G__9906__9907)
{if(cljs.core.truth_((function (){var or__3824__auto____9908 = null;
if(cljs.core.truth_(or__3824__auto____9908))
{return or__3824__auto____9908;
} else
{return G__9906__9907.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__9906__9907.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__9906__9907);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__9906__9907);
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
var ary__9911 = [];
var s__9912 = s;
while(true){
if(cljs.core.seq.call(null,s__9912))
{ary__9911.push(cljs.core.first.call(null,s__9912));
{
var G__9913 = cljs.core.next.call(null,s__9912);
s__9912 = G__9913;
continue;
}
} else
{return ary__9911;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__9917 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__9918 = 0;
var xs__9919 = cljs.core.seq.call(null,coll);
while(true){
if(xs__9919)
{(ret__9917[i__9918] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__9919)));
{
var G__9920 = (i__9918 + 1);
var G__9921 = cljs.core.next.call(null,xs__9919);
i__9918 = G__9920;
xs__9919 = G__9921;
continue;
}
} else
{}
break;
}
return ret__9917;
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
var a__9929 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9930 = cljs.core.seq.call(null,init_val_or_seq);
var i__9931 = 0;
var s__9932 = s__9930;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9933 = s__9932;
if(and__3822__auto____9933)
{return (i__9931 < size);
} else
{return and__3822__auto____9933;
}
})()))
{(a__9929[i__9931] = cljs.core.first.call(null,s__9932));
{
var G__9936 = (i__9931 + 1);
var G__9937 = cljs.core.next.call(null,s__9932);
i__9931 = G__9936;
s__9932 = G__9937;
continue;
}
} else
{return a__9929;
}
break;
}
} else
{var n__2527__auto____9934 = size;
var i__9935 = 0;
while(true){
if((i__9935 < n__2527__auto____9934))
{(a__9929[i__9935] = init_val_or_seq);
{
var G__9938 = (i__9935 + 1);
i__9935 = G__9938;
continue;
}
} else
{}
break;
}
return a__9929;
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
var a__9946 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9947 = cljs.core.seq.call(null,init_val_or_seq);
var i__9948 = 0;
var s__9949 = s__9947;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9950 = s__9949;
if(and__3822__auto____9950)
{return (i__9948 < size);
} else
{return and__3822__auto____9950;
}
})()))
{(a__9946[i__9948] = cljs.core.first.call(null,s__9949));
{
var G__9953 = (i__9948 + 1);
var G__9954 = cljs.core.next.call(null,s__9949);
i__9948 = G__9953;
s__9949 = G__9954;
continue;
}
} else
{return a__9946;
}
break;
}
} else
{var n__2527__auto____9951 = size;
var i__9952 = 0;
while(true){
if((i__9952 < n__2527__auto____9951))
{(a__9946[i__9952] = init_val_or_seq);
{
var G__9955 = (i__9952 + 1);
i__9952 = G__9955;
continue;
}
} else
{}
break;
}
return a__9946;
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
var a__9963 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9964 = cljs.core.seq.call(null,init_val_or_seq);
var i__9965 = 0;
var s__9966 = s__9964;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9967 = s__9966;
if(and__3822__auto____9967)
{return (i__9965 < size);
} else
{return and__3822__auto____9967;
}
})()))
{(a__9963[i__9965] = cljs.core.first.call(null,s__9966));
{
var G__9970 = (i__9965 + 1);
var G__9971 = cljs.core.next.call(null,s__9966);
i__9965 = G__9970;
s__9966 = G__9971;
continue;
}
} else
{return a__9963;
}
break;
}
} else
{var n__2527__auto____9968 = size;
var i__9969 = 0;
while(true){
if((i__9969 < n__2527__auto____9968))
{(a__9963[i__9969] = init_val_or_seq);
{
var G__9972 = (i__9969 + 1);
i__9969 = G__9972;
continue;
}
} else
{}
break;
}
return a__9963;
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
{var s__9977 = s;
var i__9978 = n;
var sum__9979 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9980 = (i__9978 > 0);
if(and__3822__auto____9980)
{return cljs.core.seq.call(null,s__9977);
} else
{return and__3822__auto____9980;
}
})()))
{{
var G__9981 = cljs.core.next.call(null,s__9977);
var G__9982 = (i__9978 - 1);
var G__9983 = (sum__9979 + 1);
s__9977 = G__9981;
i__9978 = G__9982;
sum__9979 = G__9983;
continue;
}
} else
{return sum__9979;
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
var s__9988 = cljs.core.seq.call(null,x);
if(s__9988)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__9988))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__9988),concat.call(null,cljs.core.chunk_rest.call(null,s__9988),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9988),concat.call(null,cljs.core.rest.call(null,s__9988),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__9992__delegate = function (x,y,zs){
var cat__9991 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9990 = cljs.core.seq.call(null,xys);
if(xys__9990)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__9990))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__9990),cat.call(null,cljs.core.chunk_rest.call(null,xys__9990),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9990),cat.call(null,cljs.core.rest.call(null,xys__9990),zs));
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
return cat__9991.call(null,concat.call(null,x,y),zs);
};
var G__9992 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9992__delegate.call(this, x, y, zs);
};
G__9992.cljs$lang$maxFixedArity = 2;
G__9992.cljs$lang$applyTo = (function (arglist__9993){
var x = cljs.core.first(arglist__9993);
var y = cljs.core.first(cljs.core.next(arglist__9993));
var zs = cljs.core.rest(cljs.core.next(arglist__9993));
return G__9992__delegate(x, y, zs);
});
G__9992.cljs$lang$arity$variadic = G__9992__delegate;
return G__9992;
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
var G__9994__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9994 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9994__delegate.call(this, a, b, c, d, more);
};
G__9994.cljs$lang$maxFixedArity = 4;
G__9994.cljs$lang$applyTo = (function (arglist__9995){
var a = cljs.core.first(arglist__9995);
var b = cljs.core.first(cljs.core.next(arglist__9995));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9995)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9995))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9995))));
return G__9994__delegate(a, b, c, d, more);
});
G__9994.cljs$lang$arity$variadic = G__9994__delegate;
return G__9994;
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
var args__10037 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__10038 = cljs.core._first.call(null,args__10037);
var args__10039 = cljs.core._rest.call(null,args__10037);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__10038);
} else
{return f.call(null,a__10038);
}
} else
{var b__10040 = cljs.core._first.call(null,args__10039);
var args__10041 = cljs.core._rest.call(null,args__10039);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__10038,b__10040);
} else
{return f.call(null,a__10038,b__10040);
}
} else
{var c__10042 = cljs.core._first.call(null,args__10041);
var args__10043 = cljs.core._rest.call(null,args__10041);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__10038,b__10040,c__10042);
} else
{return f.call(null,a__10038,b__10040,c__10042);
}
} else
{var d__10044 = cljs.core._first.call(null,args__10043);
var args__10045 = cljs.core._rest.call(null,args__10043);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__10038,b__10040,c__10042,d__10044);
} else
{return f.call(null,a__10038,b__10040,c__10042,d__10044);
}
} else
{var e__10046 = cljs.core._first.call(null,args__10045);
var args__10047 = cljs.core._rest.call(null,args__10045);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__10038,b__10040,c__10042,d__10044,e__10046);
} else
{return f.call(null,a__10038,b__10040,c__10042,d__10044,e__10046);
}
} else
{var f__10048 = cljs.core._first.call(null,args__10047);
var args__10049 = cljs.core._rest.call(null,args__10047);
if((argc === 6))
{if(f__10048.cljs$lang$arity$6)
{return f__10048.cljs$lang$arity$6(a__10038,b__10040,c__10042,d__10044,e__10046,f__10048);
} else
{return f__10048.call(null,a__10038,b__10040,c__10042,d__10044,e__10046,f__10048);
}
} else
{var g__10050 = cljs.core._first.call(null,args__10049);
var args__10051 = cljs.core._rest.call(null,args__10049);
if((argc === 7))
{if(f__10048.cljs$lang$arity$7)
{return f__10048.cljs$lang$arity$7(a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050);
} else
{return f__10048.call(null,a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050);
}
} else
{var h__10052 = cljs.core._first.call(null,args__10051);
var args__10053 = cljs.core._rest.call(null,args__10051);
if((argc === 8))
{if(f__10048.cljs$lang$arity$8)
{return f__10048.cljs$lang$arity$8(a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052);
} else
{return f__10048.call(null,a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052);
}
} else
{var i__10054 = cljs.core._first.call(null,args__10053);
var args__10055 = cljs.core._rest.call(null,args__10053);
if((argc === 9))
{if(f__10048.cljs$lang$arity$9)
{return f__10048.cljs$lang$arity$9(a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054);
} else
{return f__10048.call(null,a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054);
}
} else
{var j__10056 = cljs.core._first.call(null,args__10055);
var args__10057 = cljs.core._rest.call(null,args__10055);
if((argc === 10))
{if(f__10048.cljs$lang$arity$10)
{return f__10048.cljs$lang$arity$10(a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056);
} else
{return f__10048.call(null,a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056);
}
} else
{var k__10058 = cljs.core._first.call(null,args__10057);
var args__10059 = cljs.core._rest.call(null,args__10057);
if((argc === 11))
{if(f__10048.cljs$lang$arity$11)
{return f__10048.cljs$lang$arity$11(a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058);
} else
{return f__10048.call(null,a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058);
}
} else
{var l__10060 = cljs.core._first.call(null,args__10059);
var args__10061 = cljs.core._rest.call(null,args__10059);
if((argc === 12))
{if(f__10048.cljs$lang$arity$12)
{return f__10048.cljs$lang$arity$12(a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058,l__10060);
} else
{return f__10048.call(null,a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058,l__10060);
}
} else
{var m__10062 = cljs.core._first.call(null,args__10061);
var args__10063 = cljs.core._rest.call(null,args__10061);
if((argc === 13))
{if(f__10048.cljs$lang$arity$13)
{return f__10048.cljs$lang$arity$13(a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058,l__10060,m__10062);
} else
{return f__10048.call(null,a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058,l__10060,m__10062);
}
} else
{var n__10064 = cljs.core._first.call(null,args__10063);
var args__10065 = cljs.core._rest.call(null,args__10063);
if((argc === 14))
{if(f__10048.cljs$lang$arity$14)
{return f__10048.cljs$lang$arity$14(a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058,l__10060,m__10062,n__10064);
} else
{return f__10048.call(null,a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058,l__10060,m__10062,n__10064);
}
} else
{var o__10066 = cljs.core._first.call(null,args__10065);
var args__10067 = cljs.core._rest.call(null,args__10065);
if((argc === 15))
{if(f__10048.cljs$lang$arity$15)
{return f__10048.cljs$lang$arity$15(a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058,l__10060,m__10062,n__10064,o__10066);
} else
{return f__10048.call(null,a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058,l__10060,m__10062,n__10064,o__10066);
}
} else
{var p__10068 = cljs.core._first.call(null,args__10067);
var args__10069 = cljs.core._rest.call(null,args__10067);
if((argc === 16))
{if(f__10048.cljs$lang$arity$16)
{return f__10048.cljs$lang$arity$16(a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058,l__10060,m__10062,n__10064,o__10066,p__10068);
} else
{return f__10048.call(null,a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058,l__10060,m__10062,n__10064,o__10066,p__10068);
}
} else
{var q__10070 = cljs.core._first.call(null,args__10069);
var args__10071 = cljs.core._rest.call(null,args__10069);
if((argc === 17))
{if(f__10048.cljs$lang$arity$17)
{return f__10048.cljs$lang$arity$17(a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058,l__10060,m__10062,n__10064,o__10066,p__10068,q__10070);
} else
{return f__10048.call(null,a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058,l__10060,m__10062,n__10064,o__10066,p__10068,q__10070);
}
} else
{var r__10072 = cljs.core._first.call(null,args__10071);
var args__10073 = cljs.core._rest.call(null,args__10071);
if((argc === 18))
{if(f__10048.cljs$lang$arity$18)
{return f__10048.cljs$lang$arity$18(a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058,l__10060,m__10062,n__10064,o__10066,p__10068,q__10070,r__10072);
} else
{return f__10048.call(null,a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058,l__10060,m__10062,n__10064,o__10066,p__10068,q__10070,r__10072);
}
} else
{var s__10074 = cljs.core._first.call(null,args__10073);
var args__10075 = cljs.core._rest.call(null,args__10073);
if((argc === 19))
{if(f__10048.cljs$lang$arity$19)
{return f__10048.cljs$lang$arity$19(a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058,l__10060,m__10062,n__10064,o__10066,p__10068,q__10070,r__10072,s__10074);
} else
{return f__10048.call(null,a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058,l__10060,m__10062,n__10064,o__10066,p__10068,q__10070,r__10072,s__10074);
}
} else
{var t__10076 = cljs.core._first.call(null,args__10075);
var args__10077 = cljs.core._rest.call(null,args__10075);
if((argc === 20))
{if(f__10048.cljs$lang$arity$20)
{return f__10048.cljs$lang$arity$20(a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058,l__10060,m__10062,n__10064,o__10066,p__10068,q__10070,r__10072,s__10074,t__10076);
} else
{return f__10048.call(null,a__10038,b__10040,c__10042,d__10044,e__10046,f__10048,g__10050,h__10052,i__10054,j__10056,k__10058,l__10060,m__10062,n__10064,o__10066,p__10068,q__10070,r__10072,s__10074,t__10076);
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
var fixed_arity__10092 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10093 = cljs.core.bounded_count.call(null,args,(fixed_arity__10092 + 1));
if((bc__10093 <= fixed_arity__10092))
{return cljs.core.apply_to.call(null,f,bc__10093,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__10094 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10095 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10096 = cljs.core.bounded_count.call(null,arglist__10094,(fixed_arity__10095 + 1));
if((bc__10096 <= fixed_arity__10095))
{return cljs.core.apply_to.call(null,f,bc__10096,arglist__10094);
} else
{return f.cljs$lang$applyTo(arglist__10094);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10094));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__10097 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10098 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10099 = cljs.core.bounded_count.call(null,arglist__10097,(fixed_arity__10098 + 1));
if((bc__10099 <= fixed_arity__10098))
{return cljs.core.apply_to.call(null,f,bc__10099,arglist__10097);
} else
{return f.cljs$lang$applyTo(arglist__10097);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10097));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__10100 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10101 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10102 = cljs.core.bounded_count.call(null,arglist__10100,(fixed_arity__10101 + 1));
if((bc__10102 <= fixed_arity__10101))
{return cljs.core.apply_to.call(null,f,bc__10102,arglist__10100);
} else
{return f.cljs$lang$applyTo(arglist__10100);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10100));
}
});
var apply__6 = (function() { 
var G__10106__delegate = function (f,a,b,c,d,args){
var arglist__10103 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10104 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10105 = cljs.core.bounded_count.call(null,arglist__10103,(fixed_arity__10104 + 1));
if((bc__10105 <= fixed_arity__10104))
{return cljs.core.apply_to.call(null,f,bc__10105,arglist__10103);
} else
{return f.cljs$lang$applyTo(arglist__10103);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10103));
}
};
var G__10106 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10106__delegate.call(this, f, a, b, c, d, args);
};
G__10106.cljs$lang$maxFixedArity = 5;
G__10106.cljs$lang$applyTo = (function (arglist__10107){
var f = cljs.core.first(arglist__10107);
var a = cljs.core.first(cljs.core.next(arglist__10107));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10107)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10107))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10107)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10107)))));
return G__10106__delegate(f, a, b, c, d, args);
});
G__10106.cljs$lang$arity$variadic = G__10106__delegate;
return G__10106;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10108){
var obj = cljs.core.first(arglist__10108);
var f = cljs.core.first(cljs.core.next(arglist__10108));
var args = cljs.core.rest(cljs.core.next(arglist__10108));
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
var G__10109__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10109 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10109__delegate.call(this, x, y, more);
};
G__10109.cljs$lang$maxFixedArity = 2;
G__10109.cljs$lang$applyTo = (function (arglist__10110){
var x = cljs.core.first(arglist__10110);
var y = cljs.core.first(cljs.core.next(arglist__10110));
var more = cljs.core.rest(cljs.core.next(arglist__10110));
return G__10109__delegate(x, y, more);
});
G__10109.cljs$lang$arity$variadic = G__10109__delegate;
return G__10109;
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
var G__10111 = pred;
var G__10112 = cljs.core.next.call(null,coll);
pred = G__10111;
coll = G__10112;
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
{var or__3824__auto____10114 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____10114))
{return or__3824__auto____10114;
} else
{{
var G__10115 = pred;
var G__10116 = cljs.core.next.call(null,coll);
pred = G__10115;
coll = G__10116;
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
var G__10117 = null;
var G__10117__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10117__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10117__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10117__3 = (function() { 
var G__10118__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10118 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10118__delegate.call(this, x, y, zs);
};
G__10118.cljs$lang$maxFixedArity = 2;
G__10118.cljs$lang$applyTo = (function (arglist__10119){
var x = cljs.core.first(arglist__10119);
var y = cljs.core.first(cljs.core.next(arglist__10119));
var zs = cljs.core.rest(cljs.core.next(arglist__10119));
return G__10118__delegate(x, y, zs);
});
G__10118.cljs$lang$arity$variadic = G__10118__delegate;
return G__10118;
})()
;
G__10117 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__10117__0.call(this);
case 1:
return G__10117__1.call(this,x);
case 2:
return G__10117__2.call(this,x,y);
default:
return G__10117__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__10117.cljs$lang$maxFixedArity = 2;
G__10117.cljs$lang$applyTo = G__10117__3.cljs$lang$applyTo;
return G__10117;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10120__delegate = function (args){
return x;
};
var G__10120 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10120__delegate.call(this, args);
};
G__10120.cljs$lang$maxFixedArity = 0;
G__10120.cljs$lang$applyTo = (function (arglist__10121){
var args = cljs.core.seq(arglist__10121);;
return G__10120__delegate(args);
});
G__10120.cljs$lang$arity$variadic = G__10120__delegate;
return G__10120;
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
var G__10128 = null;
var G__10128__0 = (function (){
return f.call(null,g.call(null));
});
var G__10128__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10128__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10128__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10128__4 = (function() { 
var G__10129__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10129 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10129__delegate.call(this, x, y, z, args);
};
G__10129.cljs$lang$maxFixedArity = 3;
G__10129.cljs$lang$applyTo = (function (arglist__10130){
var x = cljs.core.first(arglist__10130);
var y = cljs.core.first(cljs.core.next(arglist__10130));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10130)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10130)));
return G__10129__delegate(x, y, z, args);
});
G__10129.cljs$lang$arity$variadic = G__10129__delegate;
return G__10129;
})()
;
G__10128 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10128__0.call(this);
case 1:
return G__10128__1.call(this,x);
case 2:
return G__10128__2.call(this,x,y);
case 3:
return G__10128__3.call(this,x,y,z);
default:
return G__10128__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10128.cljs$lang$maxFixedArity = 3;
G__10128.cljs$lang$applyTo = G__10128__4.cljs$lang$applyTo;
return G__10128;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__10131 = null;
var G__10131__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10131__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10131__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10131__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10131__4 = (function() { 
var G__10132__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10132 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10132__delegate.call(this, x, y, z, args);
};
G__10132.cljs$lang$maxFixedArity = 3;
G__10132.cljs$lang$applyTo = (function (arglist__10133){
var x = cljs.core.first(arglist__10133);
var y = cljs.core.first(cljs.core.next(arglist__10133));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10133)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10133)));
return G__10132__delegate(x, y, z, args);
});
G__10132.cljs$lang$arity$variadic = G__10132__delegate;
return G__10132;
})()
;
G__10131 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10131__0.call(this);
case 1:
return G__10131__1.call(this,x);
case 2:
return G__10131__2.call(this,x,y);
case 3:
return G__10131__3.call(this,x,y,z);
default:
return G__10131__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10131.cljs$lang$maxFixedArity = 3;
G__10131.cljs$lang$applyTo = G__10131__4.cljs$lang$applyTo;
return G__10131;
})()
});
var comp__4 = (function() { 
var G__10134__delegate = function (f1,f2,f3,fs){
var fs__10125 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__10135__delegate = function (args){
var ret__10126 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10125),args);
var fs__10127 = cljs.core.next.call(null,fs__10125);
while(true){
if(fs__10127)
{{
var G__10136 = cljs.core.first.call(null,fs__10127).call(null,ret__10126);
var G__10137 = cljs.core.next.call(null,fs__10127);
ret__10126 = G__10136;
fs__10127 = G__10137;
continue;
}
} else
{return ret__10126;
}
break;
}
};
var G__10135 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10135__delegate.call(this, args);
};
G__10135.cljs$lang$maxFixedArity = 0;
G__10135.cljs$lang$applyTo = (function (arglist__10138){
var args = cljs.core.seq(arglist__10138);;
return G__10135__delegate(args);
});
G__10135.cljs$lang$arity$variadic = G__10135__delegate;
return G__10135;
})()
;
};
var G__10134 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10134__delegate.call(this, f1, f2, f3, fs);
};
G__10134.cljs$lang$maxFixedArity = 3;
G__10134.cljs$lang$applyTo = (function (arglist__10139){
var f1 = cljs.core.first(arglist__10139);
var f2 = cljs.core.first(cljs.core.next(arglist__10139));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10139)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10139)));
return G__10134__delegate(f1, f2, f3, fs);
});
G__10134.cljs$lang$arity$variadic = G__10134__delegate;
return G__10134;
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
var G__10140__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10140 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10140__delegate.call(this, args);
};
G__10140.cljs$lang$maxFixedArity = 0;
G__10140.cljs$lang$applyTo = (function (arglist__10141){
var args = cljs.core.seq(arglist__10141);;
return G__10140__delegate(args);
});
G__10140.cljs$lang$arity$variadic = G__10140__delegate;
return G__10140;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__10142__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10142 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10142__delegate.call(this, args);
};
G__10142.cljs$lang$maxFixedArity = 0;
G__10142.cljs$lang$applyTo = (function (arglist__10143){
var args = cljs.core.seq(arglist__10143);;
return G__10142__delegate(args);
});
G__10142.cljs$lang$arity$variadic = G__10142__delegate;
return G__10142;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10144__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10144 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10144__delegate.call(this, args);
};
G__10144.cljs$lang$maxFixedArity = 0;
G__10144.cljs$lang$applyTo = (function (arglist__10145){
var args = cljs.core.seq(arglist__10145);;
return G__10144__delegate(args);
});
G__10144.cljs$lang$arity$variadic = G__10144__delegate;
return G__10144;
})()
;
});
var partial__5 = (function() { 
var G__10146__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10147__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10147 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10147__delegate.call(this, args);
};
G__10147.cljs$lang$maxFixedArity = 0;
G__10147.cljs$lang$applyTo = (function (arglist__10148){
var args = cljs.core.seq(arglist__10148);;
return G__10147__delegate(args);
});
G__10147.cljs$lang$arity$variadic = G__10147__delegate;
return G__10147;
})()
;
};
var G__10146 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10146__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10146.cljs$lang$maxFixedArity = 4;
G__10146.cljs$lang$applyTo = (function (arglist__10149){
var f = cljs.core.first(arglist__10149);
var arg1 = cljs.core.first(cljs.core.next(arglist__10149));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10149)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10149))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10149))));
return G__10146__delegate(f, arg1, arg2, arg3, more);
});
G__10146.cljs$lang$arity$variadic = G__10146__delegate;
return G__10146;
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
var G__10150 = null;
var G__10150__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__10150__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__10150__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__10150__4 = (function() { 
var G__10151__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__10151 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10151__delegate.call(this, a, b, c, ds);
};
G__10151.cljs$lang$maxFixedArity = 3;
G__10151.cljs$lang$applyTo = (function (arglist__10152){
var a = cljs.core.first(arglist__10152);
var b = cljs.core.first(cljs.core.next(arglist__10152));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10152)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10152)));
return G__10151__delegate(a, b, c, ds);
});
G__10151.cljs$lang$arity$variadic = G__10151__delegate;
return G__10151;
})()
;
G__10150 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__10150__1.call(this,a);
case 2:
return G__10150__2.call(this,a,b);
case 3:
return G__10150__3.call(this,a,b,c);
default:
return G__10150__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10150.cljs$lang$maxFixedArity = 3;
G__10150.cljs$lang$applyTo = G__10150__4.cljs$lang$applyTo;
return G__10150;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__10153 = null;
var G__10153__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__10153__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__10153__4 = (function() { 
var G__10154__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__10154 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10154__delegate.call(this, a, b, c, ds);
};
G__10154.cljs$lang$maxFixedArity = 3;
G__10154.cljs$lang$applyTo = (function (arglist__10155){
var a = cljs.core.first(arglist__10155);
var b = cljs.core.first(cljs.core.next(arglist__10155));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10155)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10155)));
return G__10154__delegate(a, b, c, ds);
});
G__10154.cljs$lang$arity$variadic = G__10154__delegate;
return G__10154;
})()
;
G__10153 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__10153__2.call(this,a,b);
case 3:
return G__10153__3.call(this,a,b,c);
default:
return G__10153__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10153.cljs$lang$maxFixedArity = 3;
G__10153.cljs$lang$applyTo = G__10153__4.cljs$lang$applyTo;
return G__10153;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__10156 = null;
var G__10156__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__10156__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__10156__4 = (function() { 
var G__10157__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__10157 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10157__delegate.call(this, a, b, c, ds);
};
G__10157.cljs$lang$maxFixedArity = 3;
G__10157.cljs$lang$applyTo = (function (arglist__10158){
var a = cljs.core.first(arglist__10158);
var b = cljs.core.first(cljs.core.next(arglist__10158));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10158)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10158)));
return G__10157__delegate(a, b, c, ds);
});
G__10157.cljs$lang$arity$variadic = G__10157__delegate;
return G__10157;
})()
;
G__10156 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__10156__2.call(this,a,b);
case 3:
return G__10156__3.call(this,a,b,c);
default:
return G__10156__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10156.cljs$lang$maxFixedArity = 3;
G__10156.cljs$lang$applyTo = G__10156__4.cljs$lang$applyTo;
return G__10156;
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
var mapi__10174 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10182 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10182)
{var s__10183 = temp__3974__auto____10182;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10183))
{var c__10184 = cljs.core.chunk_first.call(null,s__10183);
var size__10185 = cljs.core.count.call(null,c__10184);
var b__10186 = cljs.core.chunk_buffer.call(null,size__10185);
var n__2527__auto____10187 = size__10185;
var i__10188 = 0;
while(true){
if((i__10188 < n__2527__auto____10187))
{cljs.core.chunk_append.call(null,b__10186,f.call(null,(idx + i__10188),cljs.core._nth.call(null,c__10184,i__10188)));
{
var G__10189 = (i__10188 + 1);
i__10188 = G__10189;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10186),mapi.call(null,(idx + size__10185),cljs.core.chunk_rest.call(null,s__10183)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10183)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__10183)));
}
} else
{return null;
}
}),null));
});
return mapi__10174.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
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
{var x__10206 = f.call(null,cljs.core._nth.call(null,c__10201,i__10205));
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
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10203),keep.call(null,f,cljs.core.chunk_rest.call(null,s__10200)));
} else
{var x__10207 = f.call(null,cljs.core.first.call(null,s__10200));
if((x__10207 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__10200));
} else
{return cljs.core.cons.call(null,x__10207,keep.call(null,f,cljs.core.rest.call(null,s__10200)));
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
var keepi__10234 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10244 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10244)
{var s__10245 = temp__3974__auto____10244;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10245))
{var c__10246 = cljs.core.chunk_first.call(null,s__10245);
var size__10247 = cljs.core.count.call(null,c__10246);
var b__10248 = cljs.core.chunk_buffer.call(null,size__10247);
var n__2527__auto____10249 = size__10247;
var i__10250 = 0;
while(true){
if((i__10250 < n__2527__auto____10249))
{var x__10251 = f.call(null,(idx + i__10250),cljs.core._nth.call(null,c__10246,i__10250));
if((x__10251 == null))
{} else
{cljs.core.chunk_append.call(null,b__10248,x__10251);
}
{
var G__10253 = (i__10250 + 1);
i__10250 = G__10253;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10248),keepi.call(null,(idx + size__10247),cljs.core.chunk_rest.call(null,s__10245)));
} else
{var x__10252 = f.call(null,idx,cljs.core.first.call(null,s__10245));
if((x__10252 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__10245));
} else
{return cljs.core.cons.call(null,x__10252,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__10245)));
}
}
} else
{return null;
}
}),null));
});
return keepi__10234.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10339 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____10339))
{return p.call(null,y);
} else
{return and__3822__auto____10339;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10340 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____10340))
{var and__3822__auto____10341 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____10341))
{return p.call(null,z);
} else
{return and__3822__auto____10341;
}
} else
{return and__3822__auto____10340;
}
})());
});
var ep1__4 = (function() { 
var G__10410__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10342 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____10342))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____10342;
}
})());
};
var G__10410 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10410__delegate.call(this, x, y, z, args);
};
G__10410.cljs$lang$maxFixedArity = 3;
G__10410.cljs$lang$applyTo = (function (arglist__10411){
var x = cljs.core.first(arglist__10411);
var y = cljs.core.first(cljs.core.next(arglist__10411));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10411)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10411)));
return G__10410__delegate(x, y, z, args);
});
G__10410.cljs$lang$arity$variadic = G__10410__delegate;
return G__10410;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10354 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10354))
{return p2.call(null,x);
} else
{return and__3822__auto____10354;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10355 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10355))
{var and__3822__auto____10356 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____10356))
{var and__3822__auto____10357 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10357))
{return p2.call(null,y);
} else
{return and__3822__auto____10357;
}
} else
{return and__3822__auto____10356;
}
} else
{return and__3822__auto____10355;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10358 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10358))
{var and__3822__auto____10359 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____10359))
{var and__3822__auto____10360 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____10360))
{var and__3822__auto____10361 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10361))
{var and__3822__auto____10362 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____10362))
{return p2.call(null,z);
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
} else
{return and__3822__auto____10358;
}
})());
});
var ep2__4 = (function() { 
var G__10412__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10363 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____10363))
{return cljs.core.every_QMARK_.call(null,(function (p1__10209_SHARP_){
var and__3822__auto____10364 = p1.call(null,p1__10209_SHARP_);
if(cljs.core.truth_(and__3822__auto____10364))
{return p2.call(null,p1__10209_SHARP_);
} else
{return and__3822__auto____10364;
}
}),args);
} else
{return and__3822__auto____10363;
}
})());
};
var G__10412 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10412__delegate.call(this, x, y, z, args);
};
G__10412.cljs$lang$maxFixedArity = 3;
G__10412.cljs$lang$applyTo = (function (arglist__10413){
var x = cljs.core.first(arglist__10413);
var y = cljs.core.first(cljs.core.next(arglist__10413));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10413)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10413)));
return G__10412__delegate(x, y, z, args);
});
G__10412.cljs$lang$arity$variadic = G__10412__delegate;
return G__10412;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10383 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10383))
{var and__3822__auto____10384 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10384))
{return p3.call(null,x);
} else
{return and__3822__auto____10384;
}
} else
{return and__3822__auto____10383;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10385 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10385))
{var and__3822__auto____10386 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10386))
{var and__3822__auto____10387 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____10387))
{var and__3822__auto____10388 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____10388))
{var and__3822__auto____10389 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____10389))
{return p3.call(null,y);
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
} else
{return and__3822__auto____10385;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10390 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____10390))
{var and__3822__auto____10391 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____10391))
{var and__3822__auto____10392 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____10392))
{var and__3822__auto____10393 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____10393))
{var and__3822__auto____10394 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____10394))
{var and__3822__auto____10395 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____10395))
{var and__3822__auto____10396 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____10396))
{var and__3822__auto____10397 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____10397))
{return p3.call(null,z);
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
} else
{return and__3822__auto____10390;
}
})());
});
var ep3__4 = (function() { 
var G__10414__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10398 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____10398))
{return cljs.core.every_QMARK_.call(null,(function (p1__10210_SHARP_){
var and__3822__auto____10399 = p1.call(null,p1__10210_SHARP_);
if(cljs.core.truth_(and__3822__auto____10399))
{var and__3822__auto____10400 = p2.call(null,p1__10210_SHARP_);
if(cljs.core.truth_(and__3822__auto____10400))
{return p3.call(null,p1__10210_SHARP_);
} else
{return and__3822__auto____10400;
}
} else
{return and__3822__auto____10399;
}
}),args);
} else
{return and__3822__auto____10398;
}
})());
};
var G__10414 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10414__delegate.call(this, x, y, z, args);
};
G__10414.cljs$lang$maxFixedArity = 3;
G__10414.cljs$lang$applyTo = (function (arglist__10415){
var x = cljs.core.first(arglist__10415);
var y = cljs.core.first(cljs.core.next(arglist__10415));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10415)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10415)));
return G__10414__delegate(x, y, z, args);
});
G__10414.cljs$lang$arity$variadic = G__10414__delegate;
return G__10414;
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
var G__10416__delegate = function (p1,p2,p3,ps){
var ps__10401 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10211_SHARP_){
return p1__10211_SHARP_.call(null,x);
}),ps__10401);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10212_SHARP_){
var and__3822__auto____10406 = p1__10212_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____10406))
{return p1__10212_SHARP_.call(null,y);
} else
{return and__3822__auto____10406;
}
}),ps__10401);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10213_SHARP_){
var and__3822__auto____10407 = p1__10213_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____10407))
{var and__3822__auto____10408 = p1__10213_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____10408))
{return p1__10213_SHARP_.call(null,z);
} else
{return and__3822__auto____10408;
}
} else
{return and__3822__auto____10407;
}
}),ps__10401);
});
var epn__4 = (function() { 
var G__10417__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____10409 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____10409))
{return cljs.core.every_QMARK_.call(null,(function (p1__10214_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10214_SHARP_,args);
}),ps__10401);
} else
{return and__3822__auto____10409;
}
})());
};
var G__10417 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10417__delegate.call(this, x, y, z, args);
};
G__10417.cljs$lang$maxFixedArity = 3;
G__10417.cljs$lang$applyTo = (function (arglist__10418){
var x = cljs.core.first(arglist__10418);
var y = cljs.core.first(cljs.core.next(arglist__10418));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10418)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10418)));
return G__10417__delegate(x, y, z, args);
});
G__10417.cljs$lang$arity$variadic = G__10417__delegate;
return G__10417;
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
var G__10416 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10416__delegate.call(this, p1, p2, p3, ps);
};
G__10416.cljs$lang$maxFixedArity = 3;
G__10416.cljs$lang$applyTo = (function (arglist__10419){
var p1 = cljs.core.first(arglist__10419);
var p2 = cljs.core.first(cljs.core.next(arglist__10419));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10419)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10419)));
return G__10416__delegate(p1, p2, p3, ps);
});
G__10416.cljs$lang$arity$variadic = G__10416__delegate;
return G__10416;
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
var or__3824__auto____10500 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____10500))
{return or__3824__auto____10500;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____10501 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____10501))
{return or__3824__auto____10501;
} else
{var or__3824__auto____10502 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____10502))
{return or__3824__auto____10502;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__10571__delegate = function (x,y,z,args){
var or__3824__auto____10503 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10503))
{return or__3824__auto____10503;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__10571 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10571__delegate.call(this, x, y, z, args);
};
G__10571.cljs$lang$maxFixedArity = 3;
G__10571.cljs$lang$applyTo = (function (arglist__10572){
var x = cljs.core.first(arglist__10572);
var y = cljs.core.first(cljs.core.next(arglist__10572));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10572)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10572)));
return G__10571__delegate(x, y, z, args);
});
G__10571.cljs$lang$arity$variadic = G__10571__delegate;
return G__10571;
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
var or__3824__auto____10515 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10515))
{return or__3824__auto____10515;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____10516 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10516))
{return or__3824__auto____10516;
} else
{var or__3824__auto____10517 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10517))
{return or__3824__auto____10517;
} else
{var or__3824__auto____10518 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10518))
{return or__3824__auto____10518;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____10519 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10519))
{return or__3824__auto____10519;
} else
{var or__3824__auto____10520 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10520))
{return or__3824__auto____10520;
} else
{var or__3824__auto____10521 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____10521))
{return or__3824__auto____10521;
} else
{var or__3824__auto____10522 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10522))
{return or__3824__auto____10522;
} else
{var or__3824__auto____10523 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____10523))
{return or__3824__auto____10523;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__10573__delegate = function (x,y,z,args){
var or__3824__auto____10524 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10524))
{return or__3824__auto____10524;
} else
{return cljs.core.some.call(null,(function (p1__10254_SHARP_){
var or__3824__auto____10525 = p1.call(null,p1__10254_SHARP_);
if(cljs.core.truth_(or__3824__auto____10525))
{return or__3824__auto____10525;
} else
{return p2.call(null,p1__10254_SHARP_);
}
}),args);
}
};
var G__10573 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10573__delegate.call(this, x, y, z, args);
};
G__10573.cljs$lang$maxFixedArity = 3;
G__10573.cljs$lang$applyTo = (function (arglist__10574){
var x = cljs.core.first(arglist__10574);
var y = cljs.core.first(cljs.core.next(arglist__10574));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10574)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10574)));
return G__10573__delegate(x, y, z, args);
});
G__10573.cljs$lang$arity$variadic = G__10573__delegate;
return G__10573;
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
var or__3824__auto____10544 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10544))
{return or__3824__auto____10544;
} else
{var or__3824__auto____10545 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10545))
{return or__3824__auto____10545;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____10546 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10546))
{return or__3824__auto____10546;
} else
{var or__3824__auto____10547 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10547))
{return or__3824__auto____10547;
} else
{var or__3824__auto____10548 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____10548))
{return or__3824__auto____10548;
} else
{var or__3824__auto____10549 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10549))
{return or__3824__auto____10549;
} else
{var or__3824__auto____10550 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____10550))
{return or__3824__auto____10550;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____10551 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____10551))
{return or__3824__auto____10551;
} else
{var or__3824__auto____10552 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____10552))
{return or__3824__auto____10552;
} else
{var or__3824__auto____10553 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____10553))
{return or__3824__auto____10553;
} else
{var or__3824__auto____10554 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____10554))
{return or__3824__auto____10554;
} else
{var or__3824__auto____10555 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____10555))
{return or__3824__auto____10555;
} else
{var or__3824__auto____10556 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____10556))
{return or__3824__auto____10556;
} else
{var or__3824__auto____10557 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____10557))
{return or__3824__auto____10557;
} else
{var or__3824__auto____10558 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____10558))
{return or__3824__auto____10558;
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
var G__10575__delegate = function (x,y,z,args){
var or__3824__auto____10559 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10559))
{return or__3824__auto____10559;
} else
{return cljs.core.some.call(null,(function (p1__10255_SHARP_){
var or__3824__auto____10560 = p1.call(null,p1__10255_SHARP_);
if(cljs.core.truth_(or__3824__auto____10560))
{return or__3824__auto____10560;
} else
{var or__3824__auto____10561 = p2.call(null,p1__10255_SHARP_);
if(cljs.core.truth_(or__3824__auto____10561))
{return or__3824__auto____10561;
} else
{return p3.call(null,p1__10255_SHARP_);
}
}
}),args);
}
};
var G__10575 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10575__delegate.call(this, x, y, z, args);
};
G__10575.cljs$lang$maxFixedArity = 3;
G__10575.cljs$lang$applyTo = (function (arglist__10576){
var x = cljs.core.first(arglist__10576);
var y = cljs.core.first(cljs.core.next(arglist__10576));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10576)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10576)));
return G__10575__delegate(x, y, z, args);
});
G__10575.cljs$lang$arity$variadic = G__10575__delegate;
return G__10575;
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
var G__10577__delegate = function (p1,p2,p3,ps){
var ps__10562 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__10256_SHARP_){
return p1__10256_SHARP_.call(null,x);
}),ps__10562);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10257_SHARP_){
var or__3824__auto____10567 = p1__10257_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____10567))
{return or__3824__auto____10567;
} else
{return p1__10257_SHARP_.call(null,y);
}
}),ps__10562);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10258_SHARP_){
var or__3824__auto____10568 = p1__10258_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____10568))
{return or__3824__auto____10568;
} else
{var or__3824__auto____10569 = p1__10258_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____10569))
{return or__3824__auto____10569;
} else
{return p1__10258_SHARP_.call(null,z);
}
}
}),ps__10562);
});
var spn__4 = (function() { 
var G__10578__delegate = function (x,y,z,args){
var or__3824__auto____10570 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____10570))
{return or__3824__auto____10570;
} else
{return cljs.core.some.call(null,(function (p1__10259_SHARP_){
return cljs.core.some.call(null,p1__10259_SHARP_,args);
}),ps__10562);
}
};
var G__10578 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10578__delegate.call(this, x, y, z, args);
};
G__10578.cljs$lang$maxFixedArity = 3;
G__10578.cljs$lang$applyTo = (function (arglist__10579){
var x = cljs.core.first(arglist__10579);
var y = cljs.core.first(cljs.core.next(arglist__10579));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10579)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10579)));
return G__10578__delegate(x, y, z, args);
});
G__10578.cljs$lang$arity$variadic = G__10578__delegate;
return G__10578;
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
var G__10577 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10577__delegate.call(this, p1, p2, p3, ps);
};
G__10577.cljs$lang$maxFixedArity = 3;
G__10577.cljs$lang$applyTo = (function (arglist__10580){
var p1 = cljs.core.first(arglist__10580);
var p2 = cljs.core.first(cljs.core.next(arglist__10580));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10580)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10580)));
return G__10577__delegate(p1, p2, p3, ps);
});
G__10577.cljs$lang$arity$variadic = G__10577__delegate;
return G__10577;
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
var temp__3974__auto____10599 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10599)
{var s__10600 = temp__3974__auto____10599;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10600))
{var c__10601 = cljs.core.chunk_first.call(null,s__10600);
var size__10602 = cljs.core.count.call(null,c__10601);
var b__10603 = cljs.core.chunk_buffer.call(null,size__10602);
var n__2527__auto____10604 = size__10602;
var i__10605 = 0;
while(true){
if((i__10605 < n__2527__auto____10604))
{cljs.core.chunk_append.call(null,b__10603,f.call(null,cljs.core._nth.call(null,c__10601,i__10605)));
{
var G__10617 = (i__10605 + 1);
i__10605 = G__10617;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10603),map.call(null,f,cljs.core.chunk_rest.call(null,s__10600)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__10600)),map.call(null,f,cljs.core.rest.call(null,s__10600)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10606 = cljs.core.seq.call(null,c1);
var s2__10607 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____10608 = s1__10606;
if(and__3822__auto____10608)
{return s2__10607;
} else
{return and__3822__auto____10608;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10606),cljs.core.first.call(null,s2__10607)),map.call(null,f,cljs.core.rest.call(null,s1__10606),cljs.core.rest.call(null,s2__10607)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10609 = cljs.core.seq.call(null,c1);
var s2__10610 = cljs.core.seq.call(null,c2);
var s3__10611 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____10612 = s1__10609;
if(and__3822__auto____10612)
{var and__3822__auto____10613 = s2__10610;
if(and__3822__auto____10613)
{return s3__10611;
} else
{return and__3822__auto____10613;
}
} else
{return and__3822__auto____10612;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10609),cljs.core.first.call(null,s2__10610),cljs.core.first.call(null,s3__10611)),map.call(null,f,cljs.core.rest.call(null,s1__10609),cljs.core.rest.call(null,s2__10610),cljs.core.rest.call(null,s3__10611)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__10618__delegate = function (f,c1,c2,c3,colls){
var step__10616 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10615 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10615))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__10615),step.call(null,map.call(null,cljs.core.rest,ss__10615)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__10420_SHARP_){
return cljs.core.apply.call(null,f,p1__10420_SHARP_);
}),step__10616.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__10618 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10618__delegate.call(this, f, c1, c2, c3, colls);
};
G__10618.cljs$lang$maxFixedArity = 4;
G__10618.cljs$lang$applyTo = (function (arglist__10619){
var f = cljs.core.first(arglist__10619);
var c1 = cljs.core.first(cljs.core.next(arglist__10619));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10619)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10619))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10619))));
return G__10618__delegate(f, c1, c2, c3, colls);
});
G__10618.cljs$lang$arity$variadic = G__10618__delegate;
return G__10618;
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
{var temp__3974__auto____10622 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10622)
{var s__10623 = temp__3974__auto____10622;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__10623),take.call(null,(n - 1),cljs.core.rest.call(null,s__10623)));
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
var step__10629 = (function (n,coll){
while(true){
var s__10627 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____10628 = (n > 0);
if(and__3822__auto____10628)
{return s__10627;
} else
{return and__3822__auto____10628;
}
})()))
{{
var G__10630 = (n - 1);
var G__10631 = cljs.core.rest.call(null,s__10627);
n = G__10630;
coll = G__10631;
continue;
}
} else
{return s__10627;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__10629.call(null,n,coll);
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
var s__10634 = cljs.core.seq.call(null,coll);
var lead__10635 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__10635)
{{
var G__10636 = cljs.core.next.call(null,s__10634);
var G__10637 = cljs.core.next.call(null,lead__10635);
s__10634 = G__10636;
lead__10635 = G__10637;
continue;
}
} else
{return s__10634;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__10643 = (function (pred,coll){
while(true){
var s__10641 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____10642 = s__10641;
if(and__3822__auto____10642)
{return pred.call(null,cljs.core.first.call(null,s__10641));
} else
{return and__3822__auto____10642;
}
})()))
{{
var G__10644 = pred;
var G__10645 = cljs.core.rest.call(null,s__10641);
pred = G__10644;
coll = G__10645;
continue;
}
} else
{return s__10641;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__10643.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10648 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10648)
{var s__10649 = temp__3974__auto____10648;
return cljs.core.concat.call(null,s__10649,cycle.call(null,s__10649));
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
var s1__10654 = cljs.core.seq.call(null,c1);
var s2__10655 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____10656 = s1__10654;
if(and__3822__auto____10656)
{return s2__10655;
} else
{return and__3822__auto____10656;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__10654),cljs.core.cons.call(null,cljs.core.first.call(null,s2__10655),interleave.call(null,cljs.core.rest.call(null,s1__10654),cljs.core.rest.call(null,s2__10655))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__10658__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10657 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10657))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__10657),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__10657)));
} else
{return null;
}
}),null));
};
var G__10658 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10658__delegate.call(this, c1, c2, colls);
};
G__10658.cljs$lang$maxFixedArity = 2;
G__10658.cljs$lang$applyTo = (function (arglist__10659){
var c1 = cljs.core.first(arglist__10659);
var c2 = cljs.core.first(cljs.core.next(arglist__10659));
var colls = cljs.core.rest(cljs.core.next(arglist__10659));
return G__10658__delegate(c1, c2, colls);
});
G__10658.cljs$lang$arity$variadic = G__10658__delegate;
return G__10658;
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
var cat__10669 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____10667 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____10667)
{var coll__10668 = temp__3971__auto____10667;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__10668),cat.call(null,cljs.core.rest.call(null,coll__10668),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__10669.call(null,null,colls);
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
var G__10670__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__10670 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10670__delegate.call(this, f, coll, colls);
};
G__10670.cljs$lang$maxFixedArity = 2;
G__10670.cljs$lang$applyTo = (function (arglist__10671){
var f = cljs.core.first(arglist__10671);
var coll = cljs.core.first(cljs.core.next(arglist__10671));
var colls = cljs.core.rest(cljs.core.next(arglist__10671));
return G__10670__delegate(f, coll, colls);
});
G__10670.cljs$lang$arity$variadic = G__10670__delegate;
return G__10670;
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
var temp__3974__auto____10681 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10681)
{var s__10682 = temp__3974__auto____10681;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10682))
{var c__10683 = cljs.core.chunk_first.call(null,s__10682);
var size__10684 = cljs.core.count.call(null,c__10683);
var b__10685 = cljs.core.chunk_buffer.call(null,size__10684);
var n__2527__auto____10686 = size__10684;
var i__10687 = 0;
while(true){
if((i__10687 < n__2527__auto____10686))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__10683,i__10687))))
{cljs.core.chunk_append.call(null,b__10685,cljs.core._nth.call(null,c__10683,i__10687));
} else
{}
{
var G__10690 = (i__10687 + 1);
i__10687 = G__10690;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10685),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__10682)));
} else
{var f__10688 = cljs.core.first.call(null,s__10682);
var r__10689 = cljs.core.rest.call(null,s__10682);
if(cljs.core.truth_(pred.call(null,f__10688)))
{return cljs.core.cons.call(null,f__10688,filter.call(null,pred,r__10689));
} else
{return filter.call(null,pred,r__10689);
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
var walk__10693 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__10693.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__10691_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__10691_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__10697__10698 = to;
if(G__10697__10698)
{if((function (){var or__3824__auto____10699 = (G__10697__10698.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____10699)
{return or__3824__auto____10699;
} else
{return G__10697__10698.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__10697__10698.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__10697__10698);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__10697__10698);
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
var G__10700__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__10700 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10700__delegate.call(this, f, c1, c2, c3, colls);
};
G__10700.cljs$lang$maxFixedArity = 4;
G__10700.cljs$lang$applyTo = (function (arglist__10701){
var f = cljs.core.first(arglist__10701);
var c1 = cljs.core.first(cljs.core.next(arglist__10701));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10701)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10701))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10701))));
return G__10700__delegate(f, c1, c2, c3, colls);
});
G__10700.cljs$lang$arity$variadic = G__10700__delegate;
return G__10700;
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
var temp__3974__auto____10708 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10708)
{var s__10709 = temp__3974__auto____10708;
var p__10710 = cljs.core.take.call(null,n,s__10709);
if((n === cljs.core.count.call(null,p__10710)))
{return cljs.core.cons.call(null,p__10710,partition.call(null,n,step,cljs.core.drop.call(null,step,s__10709)));
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
var temp__3974__auto____10711 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____10711)
{var s__10712 = temp__3974__auto____10711;
var p__10713 = cljs.core.take.call(null,n,s__10712);
if((n === cljs.core.count.call(null,p__10713)))
{return cljs.core.cons.call(null,p__10713,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__10712)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__10713,pad)));
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
var sentinel__10718 = cljs.core.lookup_sentinel;
var m__10719 = m;
var ks__10720 = cljs.core.seq.call(null,ks);
while(true){
if(ks__10720)
{var m__10721 = cljs.core._lookup.call(null,m__10719,cljs.core.first.call(null,ks__10720),sentinel__10718);
if((sentinel__10718 === m__10721))
{return not_found;
} else
{{
var G__10722 = sentinel__10718;
var G__10723 = m__10721;
var G__10724 = cljs.core.next.call(null,ks__10720);
sentinel__10718 = G__10722;
m__10719 = G__10723;
ks__10720 = G__10724;
continue;
}
}
} else
{return m__10719;
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
cljs.core.assoc_in = (function assoc_in(m,p__10725,v){
var vec__10730__10731 = p__10725;
var k__10732 = cljs.core.nth.call(null,vec__10730__10731,0,null);
var ks__10733 = cljs.core.nthnext.call(null,vec__10730__10731,1);
if(cljs.core.truth_(ks__10733))
{return cljs.core.assoc.call(null,m,k__10732,assoc_in.call(null,cljs.core._lookup.call(null,m,k__10732,null),ks__10733,v));
} else
{return cljs.core.assoc.call(null,m,k__10732,v);
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
var update_in__delegate = function (m,p__10734,f,args){
var vec__10739__10740 = p__10734;
var k__10741 = cljs.core.nth.call(null,vec__10739__10740,0,null);
var ks__10742 = cljs.core.nthnext.call(null,vec__10739__10740,1);
if(cljs.core.truth_(ks__10742))
{return cljs.core.assoc.call(null,m,k__10741,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__10741,null),ks__10742,f,args));
} else
{return cljs.core.assoc.call(null,m,k__10741,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__10741,null),args));
}
};
var update_in = function (m,p__10734,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__10734, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__10743){
var m = cljs.core.first(arglist__10743);
var p__10734 = cljs.core.first(cljs.core.next(arglist__10743));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10743)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10743)));
return update_in__delegate(m, p__10734, f, args);
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
var this__10746 = this;
var h__2192__auto____10747 = this__10746.__hash;
if(!((h__2192__auto____10747 == null)))
{return h__2192__auto____10747;
} else
{var h__2192__auto____10748 = cljs.core.hash_coll.call(null,coll);
this__10746.__hash = h__2192__auto____10748;
return h__2192__auto____10748;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10749 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10750 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10751 = this;
var new_array__10752 = this__10751.array.slice();
(new_array__10752[k] = v);
return (new cljs.core.Vector(this__10751.meta,new_array__10752,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__10783 = null;
var G__10783__2 = (function (this_sym10753,k){
var this__10755 = this;
var this_sym10753__10756 = this;
var coll__10757 = this_sym10753__10756;
return coll__10757.cljs$core$ILookup$_lookup$arity$2(coll__10757,k);
});
var G__10783__3 = (function (this_sym10754,k,not_found){
var this__10755 = this;
var this_sym10754__10758 = this;
var coll__10759 = this_sym10754__10758;
return coll__10759.cljs$core$ILookup$_lookup$arity$3(coll__10759,k,not_found);
});
G__10783 = function(this_sym10754,k,not_found){
switch(arguments.length){
case 2:
return G__10783__2.call(this,this_sym10754,k);
case 3:
return G__10783__3.call(this,this_sym10754,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10783;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym10744,args10745){
var this__10760 = this;
return this_sym10744.call.apply(this_sym10744,[this_sym10744].concat(args10745.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10761 = this;
var new_array__10762 = this__10761.array.slice();
new_array__10762.push(o);
return (new cljs.core.Vector(this__10761.meta,new_array__10762,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__10763 = this;
var this__10764 = this;
return cljs.core.pr_str.call(null,this__10764);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10765 = this;
return cljs.core.ci_reduce.call(null,this__10765.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10766 = this;
return cljs.core.ci_reduce.call(null,this__10766.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10767 = this;
if((this__10767.array.length > 0))
{var vector_seq__10768 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__10767.array.length))
{return cljs.core.cons.call(null,(this__10767.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__10768.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10769 = this;
return this__10769.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10770 = this;
var count__10771 = this__10770.array.length;
if((count__10771 > 0))
{return (this__10770.array[(count__10771 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10772 = this;
if((this__10772.array.length > 0))
{var new_array__10773 = this__10772.array.slice();
new_array__10773.pop();
return (new cljs.core.Vector(this__10772.meta,new_array__10773,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10774 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10775 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10776 = this;
return (new cljs.core.Vector(meta,this__10776.array,this__10776.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10777 = this;
return this__10777.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10778 = this;
if((function (){var and__3822__auto____10779 = (0 <= n);
if(and__3822__auto____10779)
{return (n < this__10778.array.length);
} else
{return and__3822__auto____10779;
}
})())
{return (this__10778.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10780 = this;
if((function (){var and__3822__auto____10781 = (0 <= n);
if(and__3822__auto____10781)
{return (n < this__10780.array.length);
} else
{return and__3822__auto____10781;
}
})())
{return (this__10780.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10782 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10782.meta);
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
var cnt__10785 = pv.cnt;
if((cnt__10785 < 32))
{return 0;
} else
{return (((cnt__10785 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__10791 = level;
var ret__10792 = node;
while(true){
if((ll__10791 === 0))
{return ret__10792;
} else
{var embed__10793 = ret__10792;
var r__10794 = cljs.core.pv_fresh_node.call(null,edit);
var ___10795 = cljs.core.pv_aset.call(null,r__10794,0,embed__10793);
{
var G__10796 = (ll__10791 - 5);
var G__10797 = r__10794;
ll__10791 = G__10796;
ret__10792 = G__10797;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__10803 = cljs.core.pv_clone_node.call(null,parent);
var subidx__10804 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__10803,subidx__10804,tailnode);
return ret__10803;
} else
{var child__10805 = cljs.core.pv_aget.call(null,parent,subidx__10804);
if(!((child__10805 == null)))
{var node_to_insert__10806 = push_tail.call(null,pv,(level - 5),child__10805,tailnode);
cljs.core.pv_aset.call(null,ret__10803,subidx__10804,node_to_insert__10806);
return ret__10803;
} else
{var node_to_insert__10807 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__10803,subidx__10804,node_to_insert__10807);
return ret__10803;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____10811 = (0 <= i);
if(and__3822__auto____10811)
{return (i < pv.cnt);
} else
{return and__3822__auto____10811;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__10812 = pv.root;
var level__10813 = pv.shift;
while(true){
if((level__10813 > 0))
{{
var G__10814 = cljs.core.pv_aget.call(null,node__10812,((i >>> level__10813) & 31));
var G__10815 = (level__10813 - 5);
node__10812 = G__10814;
level__10813 = G__10815;
continue;
}
} else
{return node__10812.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__10818 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__10818,(i & 31),val);
return ret__10818;
} else
{var subidx__10819 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10818,subidx__10819,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10819),i,val));
return ret__10818;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__10825 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10826 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10825));
if((function (){var and__3822__auto____10827 = (new_child__10826 == null);
if(and__3822__auto____10827)
{return (subidx__10825 === 0);
} else
{return and__3822__auto____10827;
}
})())
{return null;
} else
{var ret__10828 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10828,subidx__10825,new_child__10826);
return ret__10828;
}
} else
{if((subidx__10825 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__10829 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10829,subidx__10825,null);
return ret__10829;
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
var this__10832 = this;
return (new cljs.core.TransientVector(this__10832.cnt,this__10832.shift,cljs.core.tv_editable_root.call(null,this__10832.root),cljs.core.tv_editable_tail.call(null,this__10832.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10833 = this;
var h__2192__auto____10834 = this__10833.__hash;
if(!((h__2192__auto____10834 == null)))
{return h__2192__auto____10834;
} else
{var h__2192__auto____10835 = cljs.core.hash_coll.call(null,coll);
this__10833.__hash = h__2192__auto____10835;
return h__2192__auto____10835;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10836 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10837 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10838 = this;
if((function (){var and__3822__auto____10839 = (0 <= k);
if(and__3822__auto____10839)
{return (k < this__10838.cnt);
} else
{return and__3822__auto____10839;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__10840 = this__10838.tail.slice();
(new_tail__10840[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__10838.meta,this__10838.cnt,this__10838.shift,this__10838.root,new_tail__10840,null));
} else
{return (new cljs.core.PersistentVector(this__10838.meta,this__10838.cnt,this__10838.shift,cljs.core.do_assoc.call(null,coll,this__10838.shift,this__10838.root,k,v),this__10838.tail,null));
}
} else
{if((k === this__10838.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__10838.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__10888 = null;
var G__10888__2 = (function (this_sym10841,k){
var this__10843 = this;
var this_sym10841__10844 = this;
var coll__10845 = this_sym10841__10844;
return coll__10845.cljs$core$ILookup$_lookup$arity$2(coll__10845,k);
});
var G__10888__3 = (function (this_sym10842,k,not_found){
var this__10843 = this;
var this_sym10842__10846 = this;
var coll__10847 = this_sym10842__10846;
return coll__10847.cljs$core$ILookup$_lookup$arity$3(coll__10847,k,not_found);
});
G__10888 = function(this_sym10842,k,not_found){
switch(arguments.length){
case 2:
return G__10888__2.call(this,this_sym10842,k);
case 3:
return G__10888__3.call(this,this_sym10842,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10888;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym10830,args10831){
var this__10848 = this;
return this_sym10830.call.apply(this_sym10830,[this_sym10830].concat(args10831.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__10849 = this;
var step_init__10850 = [0,init];
var i__10851 = 0;
while(true){
if((i__10851 < this__10849.cnt))
{var arr__10852 = cljs.core.array_for.call(null,v,i__10851);
var len__10853 = arr__10852.length;
var init__10857 = (function (){var j__10854 = 0;
var init__10855 = (step_init__10850[1]);
while(true){
if((j__10854 < len__10853))
{var init__10856 = f.call(null,init__10855,(j__10854 + i__10851),(arr__10852[j__10854]));
if(cljs.core.reduced_QMARK_.call(null,init__10856))
{return init__10856;
} else
{{
var G__10889 = (j__10854 + 1);
var G__10890 = init__10856;
j__10854 = G__10889;
init__10855 = G__10890;
continue;
}
}
} else
{(step_init__10850[0] = len__10853);
(step_init__10850[1] = init__10855);
return init__10855;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__10857))
{return cljs.core.deref.call(null,init__10857);
} else
{{
var G__10891 = (i__10851 + (step_init__10850[0]));
i__10851 = G__10891;
continue;
}
}
} else
{return (step_init__10850[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10858 = this;
if(((this__10858.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__10859 = this__10858.tail.slice();
new_tail__10859.push(o);
return (new cljs.core.PersistentVector(this__10858.meta,(this__10858.cnt + 1),this__10858.shift,this__10858.root,new_tail__10859,null));
} else
{var root_overflow_QMARK___10860 = ((this__10858.cnt >>> 5) > (1 << this__10858.shift));
var new_shift__10861 = ((root_overflow_QMARK___10860)?(this__10858.shift + 5):this__10858.shift);
var new_root__10863 = ((root_overflow_QMARK___10860)?(function (){var n_r__10862 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__10862,0,this__10858.root);
cljs.core.pv_aset.call(null,n_r__10862,1,cljs.core.new_path.call(null,null,this__10858.shift,(new cljs.core.VectorNode(null,this__10858.tail))));
return n_r__10862;
})():cljs.core.push_tail.call(null,coll,this__10858.shift,this__10858.root,(new cljs.core.VectorNode(null,this__10858.tail))));
return (new cljs.core.PersistentVector(this__10858.meta,(this__10858.cnt + 1),new_shift__10861,new_root__10863,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10864 = this;
if((this__10864.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__10864.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__10865 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__10866 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__10867 = this;
var this__10868 = this;
return cljs.core.pr_str.call(null,this__10868);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10869 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10870 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10871 = this;
if((this__10871.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10872 = this;
return this__10872.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10873 = this;
if((this__10873.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__10873.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10874 = this;
if((this__10874.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10874.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10874.meta);
} else
{if((1 < (this__10874.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__10874.meta,(this__10874.cnt - 1),this__10874.shift,this__10874.root,this__10874.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__10875 = cljs.core.array_for.call(null,coll,(this__10874.cnt - 2));
var nr__10876 = cljs.core.pop_tail.call(null,coll,this__10874.shift,this__10874.root);
var new_root__10877 = (((nr__10876 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__10876);
var cnt_1__10878 = (this__10874.cnt - 1);
if((function (){var and__3822__auto____10879 = (5 < this__10874.shift);
if(and__3822__auto____10879)
{return (cljs.core.pv_aget.call(null,new_root__10877,1) == null);
} else
{return and__3822__auto____10879;
}
})())
{return (new cljs.core.PersistentVector(this__10874.meta,cnt_1__10878,(this__10874.shift - 5),cljs.core.pv_aget.call(null,new_root__10877,0),new_tail__10875,null));
} else
{return (new cljs.core.PersistentVector(this__10874.meta,cnt_1__10878,this__10874.shift,new_root__10877,new_tail__10875,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10880 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10881 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10882 = this;
return (new cljs.core.PersistentVector(meta,this__10882.cnt,this__10882.shift,this__10882.root,this__10882.tail,this__10882.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10883 = this;
return this__10883.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10884 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10885 = this;
if((function (){var and__3822__auto____10886 = (0 <= n);
if(and__3822__auto____10886)
{return (n < this__10885.cnt);
} else
{return and__3822__auto____10886;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10887 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10887.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__10892 = xs.length;
var xs__10893 = (((no_clone === true))?xs:xs.slice());
if((l__10892 < 32))
{return (new cljs.core.PersistentVector(null,l__10892,5,cljs.core.PersistentVector.EMPTY_NODE,xs__10893,null));
} else
{var node__10894 = xs__10893.slice(0,32);
var v__10895 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__10894,null));
var i__10896 = 32;
var out__10897 = cljs.core._as_transient.call(null,v__10895);
while(true){
if((i__10896 < l__10892))
{{
var G__10898 = (i__10896 + 1);
var G__10899 = cljs.core.conj_BANG_.call(null,out__10897,(xs__10893[i__10896]));
i__10896 = G__10898;
out__10897 = G__10899;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10897);
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
vector.cljs$lang$applyTo = (function (arglist__10900){
var args = cljs.core.seq(arglist__10900);;
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
var this__10901 = this;
if(((this__10901.off + 1) < this__10901.node.length))
{var s__10902 = cljs.core.chunked_seq.call(null,this__10901.vec,this__10901.node,this__10901.i,(this__10901.off + 1));
if((s__10902 == null))
{return null;
} else
{return s__10902;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10903 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10904 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10905 = this;
return (this__10905.node[this__10905.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10906 = this;
if(((this__10906.off + 1) < this__10906.node.length))
{var s__10907 = cljs.core.chunked_seq.call(null,this__10906.vec,this__10906.node,this__10906.i,(this__10906.off + 1));
if((s__10907 == null))
{return cljs.core.List.EMPTY;
} else
{return s__10907;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__10908 = this;
var l__10909 = this__10908.node.length;
var s__10910 = ((((this__10908.i + l__10909) < cljs.core._count.call(null,this__10908.vec)))?cljs.core.chunked_seq.call(null,this__10908.vec,(this__10908.i + l__10909),0):null);
if((s__10910 == null))
{return null;
} else
{return s__10910;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10911 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__10912 = this;
return cljs.core.chunked_seq.call(null,this__10912.vec,this__10912.node,this__10912.i,this__10912.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__10913 = this;
return this__10913.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10914 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10914.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__10915 = this;
return cljs.core.array_chunk.call(null,this__10915.node,this__10915.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__10916 = this;
var l__10917 = this__10916.node.length;
var s__10918 = ((((this__10916.i + l__10917) < cljs.core._count.call(null,this__10916.vec)))?cljs.core.chunked_seq.call(null,this__10916.vec,(this__10916.i + l__10917),0):null);
if((s__10918 == null))
{return cljs.core.List.EMPTY;
} else
{return s__10918;
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
var this__10921 = this;
var h__2192__auto____10922 = this__10921.__hash;
if(!((h__2192__auto____10922 == null)))
{return h__2192__auto____10922;
} else
{var h__2192__auto____10923 = cljs.core.hash_coll.call(null,coll);
this__10921.__hash = h__2192__auto____10923;
return h__2192__auto____10923;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10924 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10925 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__10926 = this;
var v_pos__10927 = (this__10926.start + key);
return (new cljs.core.Subvec(this__10926.meta,cljs.core._assoc.call(null,this__10926.v,v_pos__10927,val),this__10926.start,((this__10926.end > (v_pos__10927 + 1)) ? this__10926.end : (v_pos__10927 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__10953 = null;
var G__10953__2 = (function (this_sym10928,k){
var this__10930 = this;
var this_sym10928__10931 = this;
var coll__10932 = this_sym10928__10931;
return coll__10932.cljs$core$ILookup$_lookup$arity$2(coll__10932,k);
});
var G__10953__3 = (function (this_sym10929,k,not_found){
var this__10930 = this;
var this_sym10929__10933 = this;
var coll__10934 = this_sym10929__10933;
return coll__10934.cljs$core$ILookup$_lookup$arity$3(coll__10934,k,not_found);
});
G__10953 = function(this_sym10929,k,not_found){
switch(arguments.length){
case 2:
return G__10953__2.call(this,this_sym10929,k);
case 3:
return G__10953__3.call(this,this_sym10929,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10953;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym10919,args10920){
var this__10935 = this;
return this_sym10919.call.apply(this_sym10919,[this_sym10919].concat(args10920.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10936 = this;
return (new cljs.core.Subvec(this__10936.meta,cljs.core._assoc_n.call(null,this__10936.v,this__10936.end,o),this__10936.start,(this__10936.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__10937 = this;
var this__10938 = this;
return cljs.core.pr_str.call(null,this__10938);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__10939 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__10940 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10941 = this;
var subvec_seq__10942 = (function subvec_seq(i){
if((i === this__10941.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__10941.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__10942.call(null,this__10941.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10943 = this;
return (this__10943.end - this__10943.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10944 = this;
return cljs.core._nth.call(null,this__10944.v,(this__10944.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10945 = this;
if((this__10945.start === this__10945.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__10945.meta,this__10945.v,this__10945.start,(this__10945.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10946 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10947 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10948 = this;
return (new cljs.core.Subvec(meta,this__10948.v,this__10948.start,this__10948.end,this__10948.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10949 = this;
return this__10949.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10950 = this;
return cljs.core._nth.call(null,this__10950.v,(this__10950.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10951 = this;
return cljs.core._nth.call(null,this__10951.v,(this__10951.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10952 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10952.meta);
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
var ret__10955 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__10955,0,tl.length);
return ret__10955;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__10959 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__10960 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10959,subidx__10960,(((level === 5))?tail_node:(function (){var child__10961 = cljs.core.pv_aget.call(null,ret__10959,subidx__10960);
if(!((child__10961 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__10961,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__10959;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__10966 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__10967 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10968 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__10966,subidx__10967));
if((function (){var and__3822__auto____10969 = (new_child__10968 == null);
if(and__3822__auto____10969)
{return (subidx__10967 === 0);
} else
{return and__3822__auto____10969;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__10966,subidx__10967,new_child__10968);
return node__10966;
}
} else
{if((subidx__10967 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__10966,subidx__10967,null);
return node__10966;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____10974 = (0 <= i);
if(and__3822__auto____10974)
{return (i < tv.cnt);
} else
{return and__3822__auto____10974;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__10975 = tv.root;
var node__10976 = root__10975;
var level__10977 = tv.shift;
while(true){
if((level__10977 > 0))
{{
var G__10978 = cljs.core.tv_ensure_editable.call(null,root__10975.edit,cljs.core.pv_aget.call(null,node__10976,((i >>> level__10977) & 31)));
var G__10979 = (level__10977 - 5);
node__10976 = G__10978;
level__10977 = G__10979;
continue;
}
} else
{return node__10976.arr;
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
var G__11019 = null;
var G__11019__2 = (function (this_sym10982,k){
var this__10984 = this;
var this_sym10982__10985 = this;
var coll__10986 = this_sym10982__10985;
return coll__10986.cljs$core$ILookup$_lookup$arity$2(coll__10986,k);
});
var G__11019__3 = (function (this_sym10983,k,not_found){
var this__10984 = this;
var this_sym10983__10987 = this;
var coll__10988 = this_sym10983__10987;
return coll__10988.cljs$core$ILookup$_lookup$arity$3(coll__10988,k,not_found);
});
G__11019 = function(this_sym10983,k,not_found){
switch(arguments.length){
case 2:
return G__11019__2.call(this,this_sym10983,k);
case 3:
return G__11019__3.call(this,this_sym10983,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11019;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym10980,args10981){
var this__10989 = this;
return this_sym10980.call.apply(this_sym10980,[this_sym10980].concat(args10981.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10990 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10991 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10992 = this;
if(this__10992.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10993 = this;
if((function (){var and__3822__auto____10994 = (0 <= n);
if(and__3822__auto____10994)
{return (n < this__10993.cnt);
} else
{return and__3822__auto____10994;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10995 = this;
if(this__10995.root.edit)
{return this__10995.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__10996 = this;
if(this__10996.root.edit)
{if((function (){var and__3822__auto____10997 = (0 <= n);
if(and__3822__auto____10997)
{return (n < this__10996.cnt);
} else
{return and__3822__auto____10997;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__10996.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__11002 = (function go(level,node){
var node__11000 = cljs.core.tv_ensure_editable.call(null,this__10996.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__11000,(n & 31),val);
return node__11000;
} else
{var subidx__11001 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__11000,subidx__11001,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__11000,subidx__11001)));
return node__11000;
}
}).call(null,this__10996.shift,this__10996.root);
this__10996.root = new_root__11002;
return tcoll;
}
} else
{if((n === this__10996.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__10996.cnt)].join('')));
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
var this__11003 = this;
if(this__11003.root.edit)
{if((this__11003.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__11003.cnt))
{this__11003.cnt = 0;
return tcoll;
} else
{if((((this__11003.cnt - 1) & 31) > 0))
{this__11003.cnt = (this__11003.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__11004 = cljs.core.editable_array_for.call(null,tcoll,(this__11003.cnt - 2));
var new_root__11006 = (function (){var nr__11005 = cljs.core.tv_pop_tail.call(null,tcoll,this__11003.shift,this__11003.root);
if(!((nr__11005 == null)))
{return nr__11005;
} else
{return (new cljs.core.VectorNode(this__11003.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____11007 = (5 < this__11003.shift);
if(and__3822__auto____11007)
{return (cljs.core.pv_aget.call(null,new_root__11006,1) == null);
} else
{return and__3822__auto____11007;
}
})())
{var new_root__11008 = cljs.core.tv_ensure_editable.call(null,this__11003.root.edit,cljs.core.pv_aget.call(null,new_root__11006,0));
this__11003.root = new_root__11008;
this__11003.shift = (this__11003.shift - 5);
this__11003.cnt = (this__11003.cnt - 1);
this__11003.tail = new_tail__11004;
return tcoll;
} else
{this__11003.root = new_root__11006;
this__11003.cnt = (this__11003.cnt - 1);
this__11003.tail = new_tail__11004;
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
var this__11009 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11010 = this;
if(this__11010.root.edit)
{if(((this__11010.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__11010.tail[(this__11010.cnt & 31)] = o);
this__11010.cnt = (this__11010.cnt + 1);
return tcoll;
} else
{var tail_node__11011 = (new cljs.core.VectorNode(this__11010.root.edit,this__11010.tail));
var new_tail__11012 = cljs.core.make_array.call(null,32);
(new_tail__11012[0] = o);
this__11010.tail = new_tail__11012;
if(((this__11010.cnt >>> 5) > (1 << this__11010.shift)))
{var new_root_array__11013 = cljs.core.make_array.call(null,32);
var new_shift__11014 = (this__11010.shift + 5);
(new_root_array__11013[0] = this__11010.root);
(new_root_array__11013[1] = cljs.core.new_path.call(null,this__11010.root.edit,this__11010.shift,tail_node__11011));
this__11010.root = (new cljs.core.VectorNode(this__11010.root.edit,new_root_array__11013));
this__11010.shift = new_shift__11014;
this__11010.cnt = (this__11010.cnt + 1);
return tcoll;
} else
{var new_root__11015 = cljs.core.tv_push_tail.call(null,tcoll,this__11010.shift,this__11010.root,tail_node__11011);
this__11010.root = new_root__11015;
this__11010.cnt = (this__11010.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11016 = this;
if(this__11016.root.edit)
{this__11016.root.edit = null;
var len__11017 = (this__11016.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__11018 = cljs.core.make_array.call(null,len__11017);
cljs.core.array_copy.call(null,this__11016.tail,0,trimmed_tail__11018,0,len__11017);
return (new cljs.core.PersistentVector(null,this__11016.cnt,this__11016.shift,this__11016.root,trimmed_tail__11018,null));
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
var this__11020 = this;
var h__2192__auto____11021 = this__11020.__hash;
if(!((h__2192__auto____11021 == null)))
{return h__2192__auto____11021;
} else
{var h__2192__auto____11022 = cljs.core.hash_coll.call(null,coll);
this__11020.__hash = h__2192__auto____11022;
return h__2192__auto____11022;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11023 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__11024 = this;
var this__11025 = this;
return cljs.core.pr_str.call(null,this__11025);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11026 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11027 = this;
return cljs.core._first.call(null,this__11027.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11028 = this;
var temp__3971__auto____11029 = cljs.core.next.call(null,this__11028.front);
if(temp__3971__auto____11029)
{var f1__11030 = temp__3971__auto____11029;
return (new cljs.core.PersistentQueueSeq(this__11028.meta,f1__11030,this__11028.rear,null));
} else
{if((this__11028.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__11028.meta,this__11028.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11031 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11032 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__11032.front,this__11032.rear,this__11032.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11033 = this;
return this__11033.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11034 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11034.meta);
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
var this__11035 = this;
var h__2192__auto____11036 = this__11035.__hash;
if(!((h__2192__auto____11036 == null)))
{return h__2192__auto____11036;
} else
{var h__2192__auto____11037 = cljs.core.hash_coll.call(null,coll);
this__11035.__hash = h__2192__auto____11037;
return h__2192__auto____11037;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11038 = this;
if(cljs.core.truth_(this__11038.front))
{return (new cljs.core.PersistentQueue(this__11038.meta,(this__11038.count + 1),this__11038.front,cljs.core.conj.call(null,(function (){var or__3824__auto____11039 = this__11038.rear;
if(cljs.core.truth_(or__3824__auto____11039))
{return or__3824__auto____11039;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__11038.meta,(this__11038.count + 1),cljs.core.conj.call(null,this__11038.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__11040 = this;
var this__11041 = this;
return cljs.core.pr_str.call(null,this__11041);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11042 = this;
var rear__11043 = cljs.core.seq.call(null,this__11042.rear);
if(cljs.core.truth_((function (){var or__3824__auto____11044 = this__11042.front;
if(cljs.core.truth_(or__3824__auto____11044))
{return or__3824__auto____11044;
} else
{return rear__11043;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__11042.front,cljs.core.seq.call(null,rear__11043),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11045 = this;
return this__11045.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__11046 = this;
return cljs.core._first.call(null,this__11046.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__11047 = this;
if(cljs.core.truth_(this__11047.front))
{var temp__3971__auto____11048 = cljs.core.next.call(null,this__11047.front);
if(temp__3971__auto____11048)
{var f1__11049 = temp__3971__auto____11048;
return (new cljs.core.PersistentQueue(this__11047.meta,(this__11047.count - 1),f1__11049,this__11047.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__11047.meta,(this__11047.count - 1),cljs.core.seq.call(null,this__11047.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11050 = this;
return cljs.core.first.call(null,this__11050.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11051 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11052 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11053 = this;
return (new cljs.core.PersistentQueue(meta,this__11053.count,this__11053.front,this__11053.rear,this__11053.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11054 = this;
return this__11054.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11055 = this;
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
var this__11056 = this;
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
var len__11059 = array.length;
var i__11060 = 0;
while(true){
if((i__11060 < len__11059))
{if((k === (array[i__11060])))
{return i__11060;
} else
{{
var G__11061 = (i__11060 + incr);
i__11060 = G__11061;
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
var a__11064 = cljs.core.hash.call(null,a);
var b__11065 = cljs.core.hash.call(null,b);
if((a__11064 < b__11065))
{return -1;
} else
{if((a__11064 > b__11065))
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
var ks__11073 = m.keys;
var len__11074 = ks__11073.length;
var so__11075 = m.strobj;
var out__11076 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__11077 = 0;
var out__11078 = cljs.core.transient$.call(null,out__11076);
while(true){
if((i__11077 < len__11074))
{var k__11079 = (ks__11073[i__11077]);
{
var G__11080 = (i__11077 + 1);
var G__11081 = cljs.core.assoc_BANG_.call(null,out__11078,k__11079,(so__11075[k__11079]));
i__11077 = G__11080;
out__11078 = G__11081;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__11078,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__11087 = {};
var l__11088 = ks.length;
var i__11089 = 0;
while(true){
if((i__11089 < l__11088))
{var k__11090 = (ks[i__11089]);
(new_obj__11087[k__11090] = (obj[k__11090]));
{
var G__11091 = (i__11089 + 1);
i__11089 = G__11091;
continue;
}
} else
{}
break;
}
return new_obj__11087;
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
var this__11094 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11095 = this;
var h__2192__auto____11096 = this__11095.__hash;
if(!((h__2192__auto____11096 == null)))
{return h__2192__auto____11096;
} else
{var h__2192__auto____11097 = cljs.core.hash_imap.call(null,coll);
this__11095.__hash = h__2192__auto____11097;
return h__2192__auto____11097;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11098 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11099 = this;
if((function (){var and__3822__auto____11100 = goog.isString(k);
if(and__3822__auto____11100)
{return !((cljs.core.scan_array.call(null,1,k,this__11099.keys) == null));
} else
{return and__3822__auto____11100;
}
})())
{return (this__11099.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11101 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____11102 = (this__11101.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____11102)
{return or__3824__auto____11102;
} else
{return (this__11101.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__11101.keys) == null)))
{var new_strobj__11103 = cljs.core.obj_clone.call(null,this__11101.strobj,this__11101.keys);
(new_strobj__11103[k] = v);
return (new cljs.core.ObjMap(this__11101.meta,this__11101.keys,new_strobj__11103,(this__11101.update_count + 1),null));
} else
{var new_strobj__11104 = cljs.core.obj_clone.call(null,this__11101.strobj,this__11101.keys);
var new_keys__11105 = this__11101.keys.slice();
(new_strobj__11104[k] = v);
new_keys__11105.push(k);
return (new cljs.core.ObjMap(this__11101.meta,new_keys__11105,new_strobj__11104,(this__11101.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11106 = this;
if((function (){var and__3822__auto____11107 = goog.isString(k);
if(and__3822__auto____11107)
{return !((cljs.core.scan_array.call(null,1,k,this__11106.keys) == null));
} else
{return and__3822__auto____11107;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__11129 = null;
var G__11129__2 = (function (this_sym11108,k){
var this__11110 = this;
var this_sym11108__11111 = this;
var coll__11112 = this_sym11108__11111;
return coll__11112.cljs$core$ILookup$_lookup$arity$2(coll__11112,k);
});
var G__11129__3 = (function (this_sym11109,k,not_found){
var this__11110 = this;
var this_sym11109__11113 = this;
var coll__11114 = this_sym11109__11113;
return coll__11114.cljs$core$ILookup$_lookup$arity$3(coll__11114,k,not_found);
});
G__11129 = function(this_sym11109,k,not_found){
switch(arguments.length){
case 2:
return G__11129__2.call(this,this_sym11109,k);
case 3:
return G__11129__3.call(this,this_sym11109,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11129;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym11092,args11093){
var this__11115 = this;
return this_sym11092.call.apply(this_sym11092,[this_sym11092].concat(args11093.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11116 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__11117 = this;
var this__11118 = this;
return cljs.core.pr_str.call(null,this__11118);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11119 = this;
if((this__11119.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__11082_SHARP_){
return cljs.core.vector.call(null,p1__11082_SHARP_,(this__11119.strobj[p1__11082_SHARP_]));
}),this__11119.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11120 = this;
return this__11120.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11121 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11122 = this;
return (new cljs.core.ObjMap(meta,this__11122.keys,this__11122.strobj,this__11122.update_count,this__11122.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11123 = this;
return this__11123.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11124 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__11124.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11125 = this;
if((function (){var and__3822__auto____11126 = goog.isString(k);
if(and__3822__auto____11126)
{return !((cljs.core.scan_array.call(null,1,k,this__11125.keys) == null));
} else
{return and__3822__auto____11126;
}
})())
{var new_keys__11127 = this__11125.keys.slice();
var new_strobj__11128 = cljs.core.obj_clone.call(null,this__11125.strobj,this__11125.keys);
new_keys__11127.splice(cljs.core.scan_array.call(null,1,k,new_keys__11127),1);
cljs.core.js_delete.call(null,new_strobj__11128,k);
return (new cljs.core.ObjMap(this__11125.meta,new_keys__11127,new_strobj__11128,(this__11125.update_count + 1),null));
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
var this__11133 = this;
var h__2192__auto____11134 = this__11133.__hash;
if(!((h__2192__auto____11134 == null)))
{return h__2192__auto____11134;
} else
{var h__2192__auto____11135 = cljs.core.hash_imap.call(null,coll);
this__11133.__hash = h__2192__auto____11135;
return h__2192__auto____11135;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11136 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11137 = this;
var bucket__11138 = (this__11137.hashobj[cljs.core.hash.call(null,k)]);
var i__11139 = (cljs.core.truth_(bucket__11138)?cljs.core.scan_array.call(null,2,k,bucket__11138):null);
if(cljs.core.truth_(i__11139))
{return (bucket__11138[(i__11139 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11140 = this;
var h__11141 = cljs.core.hash.call(null,k);
var bucket__11142 = (this__11140.hashobj[h__11141]);
if(cljs.core.truth_(bucket__11142))
{var new_bucket__11143 = bucket__11142.slice();
var new_hashobj__11144 = goog.object.clone(this__11140.hashobj);
(new_hashobj__11144[h__11141] = new_bucket__11143);
var temp__3971__auto____11145 = cljs.core.scan_array.call(null,2,k,new_bucket__11143);
if(cljs.core.truth_(temp__3971__auto____11145))
{var i__11146 = temp__3971__auto____11145;
(new_bucket__11143[(i__11146 + 1)] = v);
return (new cljs.core.HashMap(this__11140.meta,this__11140.count,new_hashobj__11144,null));
} else
{new_bucket__11143.push(k,v);
return (new cljs.core.HashMap(this__11140.meta,(this__11140.count + 1),new_hashobj__11144,null));
}
} else
{var new_hashobj__11147 = goog.object.clone(this__11140.hashobj);
(new_hashobj__11147[h__11141] = [k,v]);
return (new cljs.core.HashMap(this__11140.meta,(this__11140.count + 1),new_hashobj__11147,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11148 = this;
var bucket__11149 = (this__11148.hashobj[cljs.core.hash.call(null,k)]);
var i__11150 = (cljs.core.truth_(bucket__11149)?cljs.core.scan_array.call(null,2,k,bucket__11149):null);
if(cljs.core.truth_(i__11150))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__11175 = null;
var G__11175__2 = (function (this_sym11151,k){
var this__11153 = this;
var this_sym11151__11154 = this;
var coll__11155 = this_sym11151__11154;
return coll__11155.cljs$core$ILookup$_lookup$arity$2(coll__11155,k);
});
var G__11175__3 = (function (this_sym11152,k,not_found){
var this__11153 = this;
var this_sym11152__11156 = this;
var coll__11157 = this_sym11152__11156;
return coll__11157.cljs$core$ILookup$_lookup$arity$3(coll__11157,k,not_found);
});
G__11175 = function(this_sym11152,k,not_found){
switch(arguments.length){
case 2:
return G__11175__2.call(this,this_sym11152,k);
case 3:
return G__11175__3.call(this,this_sym11152,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11175;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym11131,args11132){
var this__11158 = this;
return this_sym11131.call.apply(this_sym11131,[this_sym11131].concat(args11132.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11159 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__11160 = this;
var this__11161 = this;
return cljs.core.pr_str.call(null,this__11161);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11162 = this;
if((this__11162.count > 0))
{var hashes__11163 = cljs.core.js_keys.call(null,this__11162.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__11130_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__11162.hashobj[p1__11130_SHARP_])));
}),hashes__11163);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11164 = this;
return this__11164.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11165 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11166 = this;
return (new cljs.core.HashMap(meta,this__11166.count,this__11166.hashobj,this__11166.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11167 = this;
return this__11167.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11168 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__11168.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11169 = this;
var h__11170 = cljs.core.hash.call(null,k);
var bucket__11171 = (this__11169.hashobj[h__11170]);
var i__11172 = (cljs.core.truth_(bucket__11171)?cljs.core.scan_array.call(null,2,k,bucket__11171):null);
if(cljs.core.not.call(null,i__11172))
{return coll;
} else
{var new_hashobj__11173 = goog.object.clone(this__11169.hashobj);
if((3 > bucket__11171.length))
{cljs.core.js_delete.call(null,new_hashobj__11173,h__11170);
} else
{var new_bucket__11174 = bucket__11171.slice();
new_bucket__11174.splice(i__11172,2);
(new_hashobj__11173[h__11170] = new_bucket__11174);
}
return (new cljs.core.HashMap(this__11169.meta,(this__11169.count - 1),new_hashobj__11173,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__11176 = ks.length;
var i__11177 = 0;
var out__11178 = cljs.core.HashMap.EMPTY;
while(true){
if((i__11177 < len__11176))
{{
var G__11179 = (i__11177 + 1);
var G__11180 = cljs.core.assoc.call(null,out__11178,(ks[i__11177]),(vs[i__11177]));
i__11177 = G__11179;
out__11178 = G__11180;
continue;
}
} else
{return out__11178;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__11184 = m.arr;
var len__11185 = arr__11184.length;
var i__11186 = 0;
while(true){
if((len__11185 <= i__11186))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__11184[i__11186]),k))
{return i__11186;
} else
{if("\uFDD0'else")
{{
var G__11187 = (i__11186 + 2);
i__11186 = G__11187;
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
var this__11190 = this;
return (new cljs.core.TransientArrayMap({},this__11190.arr.length,this__11190.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11191 = this;
var h__2192__auto____11192 = this__11191.__hash;
if(!((h__2192__auto____11192 == null)))
{return h__2192__auto____11192;
} else
{var h__2192__auto____11193 = cljs.core.hash_imap.call(null,coll);
this__11191.__hash = h__2192__auto____11193;
return h__2192__auto____11193;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11194 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11195 = this;
var idx__11196 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__11196 === -1))
{return not_found;
} else
{return (this__11195.arr[(idx__11196 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11197 = this;
var idx__11198 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__11198 === -1))
{if((this__11197.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__11197.meta,(this__11197.cnt + 1),(function (){var G__11199__11200 = this__11197.arr.slice();
G__11199__11200.push(k);
G__11199__11200.push(v);
return G__11199__11200;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__11197.arr[(idx__11198 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__11197.meta,this__11197.cnt,(function (){var G__11201__11202 = this__11197.arr.slice();
(G__11201__11202[(idx__11198 + 1)] = v);
return G__11201__11202;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11203 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__11235 = null;
var G__11235__2 = (function (this_sym11204,k){
var this__11206 = this;
var this_sym11204__11207 = this;
var coll__11208 = this_sym11204__11207;
return coll__11208.cljs$core$ILookup$_lookup$arity$2(coll__11208,k);
});
var G__11235__3 = (function (this_sym11205,k,not_found){
var this__11206 = this;
var this_sym11205__11209 = this;
var coll__11210 = this_sym11205__11209;
return coll__11210.cljs$core$ILookup$_lookup$arity$3(coll__11210,k,not_found);
});
G__11235 = function(this_sym11205,k,not_found){
switch(arguments.length){
case 2:
return G__11235__2.call(this,this_sym11205,k);
case 3:
return G__11235__3.call(this,this_sym11205,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11235;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym11188,args11189){
var this__11211 = this;
return this_sym11188.call.apply(this_sym11188,[this_sym11188].concat(args11189.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11212 = this;
var len__11213 = this__11212.arr.length;
var i__11214 = 0;
var init__11215 = init;
while(true){
if((i__11214 < len__11213))
{var init__11216 = f.call(null,init__11215,(this__11212.arr[i__11214]),(this__11212.arr[(i__11214 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__11216))
{return cljs.core.deref.call(null,init__11216);
} else
{{
var G__11236 = (i__11214 + 2);
var G__11237 = init__11216;
i__11214 = G__11236;
init__11215 = G__11237;
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
var this__11217 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__11218 = this;
var this__11219 = this;
return cljs.core.pr_str.call(null,this__11219);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11220 = this;
if((this__11220.cnt > 0))
{var len__11221 = this__11220.arr.length;
var array_map_seq__11222 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__11221))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__11220.arr[i]),(this__11220.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__11222.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11223 = this;
return this__11223.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11224 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11225 = this;
return (new cljs.core.PersistentArrayMap(meta,this__11225.cnt,this__11225.arr,this__11225.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11226 = this;
return this__11226.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11227 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11227.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11228 = this;
var idx__11229 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__11229 >= 0))
{var len__11230 = this__11228.arr.length;
var new_len__11231 = (len__11230 - 2);
if((new_len__11231 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__11232 = cljs.core.make_array.call(null,new_len__11231);
var s__11233 = 0;
var d__11234 = 0;
while(true){
if((s__11233 >= len__11230))
{return (new cljs.core.PersistentArrayMap(this__11228.meta,(this__11228.cnt - 1),new_arr__11232,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__11228.arr[s__11233])))
{{
var G__11238 = (s__11233 + 2);
var G__11239 = d__11234;
s__11233 = G__11238;
d__11234 = G__11239;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__11232[d__11234] = (this__11228.arr[s__11233]));
(new_arr__11232[(d__11234 + 1)] = (this__11228.arr[(s__11233 + 1)]));
{
var G__11240 = (s__11233 + 2);
var G__11241 = (d__11234 + 2);
s__11233 = G__11240;
d__11234 = G__11241;
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
var len__11242 = cljs.core.count.call(null,ks);
var i__11243 = 0;
var out__11244 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__11243 < len__11242))
{{
var G__11245 = (i__11243 + 1);
var G__11246 = cljs.core.assoc_BANG_.call(null,out__11244,(ks[i__11243]),(vs[i__11243]));
i__11243 = G__11245;
out__11244 = G__11246;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11244);
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
var this__11247 = this;
if(cljs.core.truth_(this__11247.editable_QMARK_))
{var idx__11248 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__11248 >= 0))
{(this__11247.arr[idx__11248] = (this__11247.arr[(this__11247.len - 2)]));
(this__11247.arr[(idx__11248 + 1)] = (this__11247.arr[(this__11247.len - 1)]));
var G__11249__11250 = this__11247.arr;
G__11249__11250.pop();
G__11249__11250.pop();
G__11249__11250;
this__11247.len = (this__11247.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__11251 = this;
if(cljs.core.truth_(this__11251.editable_QMARK_))
{var idx__11252 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__11252 === -1))
{if(((this__11251.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__11251.len = (this__11251.len + 2);
this__11251.arr.push(key);
this__11251.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__11251.len,this__11251.arr),key,val);
}
} else
{if((val === (this__11251.arr[(idx__11252 + 1)])))
{return tcoll;
} else
{(this__11251.arr[(idx__11252 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11253 = this;
if(cljs.core.truth_(this__11253.editable_QMARK_))
{if((function (){var G__11254__11255 = o;
if(G__11254__11255)
{if((function (){var or__3824__auto____11256 = (G__11254__11255.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____11256)
{return or__3824__auto____11256;
} else
{return G__11254__11255.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__11254__11255.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11254__11255);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11254__11255);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__11257 = cljs.core.seq.call(null,o);
var tcoll__11258 = tcoll;
while(true){
var temp__3971__auto____11259 = cljs.core.first.call(null,es__11257);
if(cljs.core.truth_(temp__3971__auto____11259))
{var e__11260 = temp__3971__auto____11259;
{
var G__11266 = cljs.core.next.call(null,es__11257);
var G__11267 = tcoll__11258.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__11258,cljs.core.key.call(null,e__11260),cljs.core.val.call(null,e__11260));
es__11257 = G__11266;
tcoll__11258 = G__11267;
continue;
}
} else
{return tcoll__11258;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11261 = this;
if(cljs.core.truth_(this__11261.editable_QMARK_))
{this__11261.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__11261.len,2),this__11261.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__11262 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__11263 = this;
if(cljs.core.truth_(this__11263.editable_QMARK_))
{var idx__11264 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__11264 === -1))
{return not_found;
} else
{return (this__11263.arr[(idx__11264 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__11265 = this;
if(cljs.core.truth_(this__11265.editable_QMARK_))
{return cljs.core.quot.call(null,this__11265.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__11270 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__11271 = 0;
while(true){
if((i__11271 < len))
{{
var G__11272 = cljs.core.assoc_BANG_.call(null,out__11270,(arr[i__11271]),(arr[(i__11271 + 1)]));
var G__11273 = (i__11271 + 2);
out__11270 = G__11272;
i__11271 = G__11273;
continue;
}
} else
{return out__11270;
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
var G__11278__11279 = arr.slice();
(G__11278__11279[i] = a);
return G__11278__11279;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__11280__11281 = arr.slice();
(G__11280__11281[i] = a);
(G__11280__11281[j] = b);
return G__11280__11281;
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
var new_arr__11283 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__11283,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__11283,(2 * i),(new_arr__11283.length - (2 * i)));
return new_arr__11283;
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
var editable__11286 = inode.ensure_editable(edit);
(editable__11286.arr[i] = a);
return editable__11286;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__11287 = inode.ensure_editable(edit);
(editable__11287.arr[i] = a);
(editable__11287.arr[j] = b);
return editable__11287;
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
var len__11294 = arr.length;
var i__11295 = 0;
var init__11296 = init;
while(true){
if((i__11295 < len__11294))
{var init__11299 = (function (){var k__11297 = (arr[i__11295]);
if(!((k__11297 == null)))
{return f.call(null,init__11296,k__11297,(arr[(i__11295 + 1)]));
} else
{var node__11298 = (arr[(i__11295 + 1)]);
if(!((node__11298 == null)))
{return node__11298.kv_reduce(f,init__11296);
} else
{return init__11296;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__11299))
{return cljs.core.deref.call(null,init__11299);
} else
{{
var G__11300 = (i__11295 + 2);
var G__11301 = init__11299;
i__11295 = G__11300;
init__11296 = G__11301;
continue;
}
}
} else
{return init__11296;
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
var this__11302 = this;
var inode__11303 = this;
if((this__11302.bitmap === bit))
{return null;
} else
{var editable__11304 = inode__11303.ensure_editable(e);
var earr__11305 = editable__11304.arr;
var len__11306 = earr__11305.length;
editable__11304.bitmap = (bit ^ editable__11304.bitmap);
cljs.core.array_copy.call(null,earr__11305,(2 * (i + 1)),earr__11305,(2 * i),(len__11306 - (2 * (i + 1))));
(earr__11305[(len__11306 - 2)] = null);
(earr__11305[(len__11306 - 1)] = null);
return editable__11304;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__11307 = this;
var inode__11308 = this;
var bit__11309 = (1 << ((hash >>> shift) & 0x01f));
var idx__11310 = cljs.core.bitmap_indexed_node_index.call(null,this__11307.bitmap,bit__11309);
if(((this__11307.bitmap & bit__11309) === 0))
{var n__11311 = cljs.core.bit_count.call(null,this__11307.bitmap);
if(((2 * n__11311) < this__11307.arr.length))
{var editable__11312 = inode__11308.ensure_editable(edit);
var earr__11313 = editable__11312.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__11313,(2 * idx__11310),earr__11313,(2 * (idx__11310 + 1)),(2 * (n__11311 - idx__11310)));
(earr__11313[(2 * idx__11310)] = key);
(earr__11313[((2 * idx__11310) + 1)] = val);
editable__11312.bitmap = (editable__11312.bitmap | bit__11309);
return editable__11312;
} else
{if((n__11311 >= 16))
{var nodes__11314 = cljs.core.make_array.call(null,32);
var jdx__11315 = ((hash >>> shift) & 0x01f);
(nodes__11314[jdx__11315] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__11316 = 0;
var j__11317 = 0;
while(true){
if((i__11316 < 32))
{if((((this__11307.bitmap >>> i__11316) & 1) === 0))
{{
var G__11370 = (i__11316 + 1);
var G__11371 = j__11317;
i__11316 = G__11370;
j__11317 = G__11371;
continue;
}
} else
{(nodes__11314[i__11316] = ((!(((this__11307.arr[j__11317]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__11307.arr[j__11317])),(this__11307.arr[j__11317]),(this__11307.arr[(j__11317 + 1)]),added_leaf_QMARK_):(this__11307.arr[(j__11317 + 1)])));
{
var G__11372 = (i__11316 + 1);
var G__11373 = (j__11317 + 2);
i__11316 = G__11372;
j__11317 = G__11373;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__11311 + 1),nodes__11314));
} else
{if("\uFDD0'else")
{var new_arr__11318 = cljs.core.make_array.call(null,(2 * (n__11311 + 4)));
cljs.core.array_copy.call(null,this__11307.arr,0,new_arr__11318,0,(2 * idx__11310));
(new_arr__11318[(2 * idx__11310)] = key);
(new_arr__11318[((2 * idx__11310) + 1)] = val);
cljs.core.array_copy.call(null,this__11307.arr,(2 * idx__11310),new_arr__11318,(2 * (idx__11310 + 1)),(2 * (n__11311 - idx__11310)));
added_leaf_QMARK_.val = true;
var editable__11319 = inode__11308.ensure_editable(edit);
editable__11319.arr = new_arr__11318;
editable__11319.bitmap = (editable__11319.bitmap | bit__11309);
return editable__11319;
} else
{return null;
}
}
}
} else
{var key_or_nil__11320 = (this__11307.arr[(2 * idx__11310)]);
var val_or_node__11321 = (this__11307.arr[((2 * idx__11310) + 1)]);
if((key_or_nil__11320 == null))
{var n__11322 = val_or_node__11321.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11322 === val_or_node__11321))
{return inode__11308;
} else
{return cljs.core.edit_and_set.call(null,inode__11308,edit,((2 * idx__11310) + 1),n__11322);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11320))
{if((val === val_or_node__11321))
{return inode__11308;
} else
{return cljs.core.edit_and_set.call(null,inode__11308,edit,((2 * idx__11310) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__11308,edit,(2 * idx__11310),null,((2 * idx__11310) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__11320,val_or_node__11321,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__11323 = this;
var inode__11324 = this;
return cljs.core.create_inode_seq.call(null,this__11323.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11325 = this;
var inode__11326 = this;
var bit__11327 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11325.bitmap & bit__11327) === 0))
{return inode__11326;
} else
{var idx__11328 = cljs.core.bitmap_indexed_node_index.call(null,this__11325.bitmap,bit__11327);
var key_or_nil__11329 = (this__11325.arr[(2 * idx__11328)]);
var val_or_node__11330 = (this__11325.arr[((2 * idx__11328) + 1)]);
if((key_or_nil__11329 == null))
{var n__11331 = val_or_node__11330.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__11331 === val_or_node__11330))
{return inode__11326;
} else
{if(!((n__11331 == null)))
{return cljs.core.edit_and_set.call(null,inode__11326,edit,((2 * idx__11328) + 1),n__11331);
} else
{if((this__11325.bitmap === bit__11327))
{return null;
} else
{if("\uFDD0'else")
{return inode__11326.edit_and_remove_pair(edit,bit__11327,idx__11328);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11329))
{(removed_leaf_QMARK_[0] = true);
return inode__11326.edit_and_remove_pair(edit,bit__11327,idx__11328);
} else
{if("\uFDD0'else")
{return inode__11326;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__11332 = this;
var inode__11333 = this;
if((e === this__11332.edit))
{return inode__11333;
} else
{var n__11334 = cljs.core.bit_count.call(null,this__11332.bitmap);
var new_arr__11335 = cljs.core.make_array.call(null,(((n__11334 < 0))?4:(2 * (n__11334 + 1))));
cljs.core.array_copy.call(null,this__11332.arr,0,new_arr__11335,0,(2 * n__11334));
return (new cljs.core.BitmapIndexedNode(e,this__11332.bitmap,new_arr__11335));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__11336 = this;
var inode__11337 = this;
return cljs.core.inode_kv_reduce.call(null,this__11336.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11338 = this;
var inode__11339 = this;
var bit__11340 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11338.bitmap & bit__11340) === 0))
{return not_found;
} else
{var idx__11341 = cljs.core.bitmap_indexed_node_index.call(null,this__11338.bitmap,bit__11340);
var key_or_nil__11342 = (this__11338.arr[(2 * idx__11341)]);
var val_or_node__11343 = (this__11338.arr[((2 * idx__11341) + 1)]);
if((key_or_nil__11342 == null))
{return val_or_node__11343.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11342))
{return cljs.core.PersistentVector.fromArray([key_or_nil__11342,val_or_node__11343], true);
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
var this__11344 = this;
var inode__11345 = this;
var bit__11346 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11344.bitmap & bit__11346) === 0))
{return inode__11345;
} else
{var idx__11347 = cljs.core.bitmap_indexed_node_index.call(null,this__11344.bitmap,bit__11346);
var key_or_nil__11348 = (this__11344.arr[(2 * idx__11347)]);
var val_or_node__11349 = (this__11344.arr[((2 * idx__11347) + 1)]);
if((key_or_nil__11348 == null))
{var n__11350 = val_or_node__11349.inode_without((shift + 5),hash,key);
if((n__11350 === val_or_node__11349))
{return inode__11345;
} else
{if(!((n__11350 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__11344.bitmap,cljs.core.clone_and_set.call(null,this__11344.arr,((2 * idx__11347) + 1),n__11350)));
} else
{if((this__11344.bitmap === bit__11346))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__11344.bitmap ^ bit__11346),cljs.core.remove_pair.call(null,this__11344.arr,idx__11347)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11348))
{return (new cljs.core.BitmapIndexedNode(null,(this__11344.bitmap ^ bit__11346),cljs.core.remove_pair.call(null,this__11344.arr,idx__11347)));
} else
{if("\uFDD0'else")
{return inode__11345;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11351 = this;
var inode__11352 = this;
var bit__11353 = (1 << ((hash >>> shift) & 0x01f));
var idx__11354 = cljs.core.bitmap_indexed_node_index.call(null,this__11351.bitmap,bit__11353);
if(((this__11351.bitmap & bit__11353) === 0))
{var n__11355 = cljs.core.bit_count.call(null,this__11351.bitmap);
if((n__11355 >= 16))
{var nodes__11356 = cljs.core.make_array.call(null,32);
var jdx__11357 = ((hash >>> shift) & 0x01f);
(nodes__11356[jdx__11357] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__11358 = 0;
var j__11359 = 0;
while(true){
if((i__11358 < 32))
{if((((this__11351.bitmap >>> i__11358) & 1) === 0))
{{
var G__11374 = (i__11358 + 1);
var G__11375 = j__11359;
i__11358 = G__11374;
j__11359 = G__11375;
continue;
}
} else
{(nodes__11356[i__11358] = ((!(((this__11351.arr[j__11359]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__11351.arr[j__11359])),(this__11351.arr[j__11359]),(this__11351.arr[(j__11359 + 1)]),added_leaf_QMARK_):(this__11351.arr[(j__11359 + 1)])));
{
var G__11376 = (i__11358 + 1);
var G__11377 = (j__11359 + 2);
i__11358 = G__11376;
j__11359 = G__11377;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__11355 + 1),nodes__11356));
} else
{var new_arr__11360 = cljs.core.make_array.call(null,(2 * (n__11355 + 1)));
cljs.core.array_copy.call(null,this__11351.arr,0,new_arr__11360,0,(2 * idx__11354));
(new_arr__11360[(2 * idx__11354)] = key);
(new_arr__11360[((2 * idx__11354) + 1)] = val);
cljs.core.array_copy.call(null,this__11351.arr,(2 * idx__11354),new_arr__11360,(2 * (idx__11354 + 1)),(2 * (n__11355 - idx__11354)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__11351.bitmap | bit__11353),new_arr__11360));
}
} else
{var key_or_nil__11361 = (this__11351.arr[(2 * idx__11354)]);
var val_or_node__11362 = (this__11351.arr[((2 * idx__11354) + 1)]);
if((key_or_nil__11361 == null))
{var n__11363 = val_or_node__11362.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11363 === val_or_node__11362))
{return inode__11352;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__11351.bitmap,cljs.core.clone_and_set.call(null,this__11351.arr,((2 * idx__11354) + 1),n__11363)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11361))
{if((val === val_or_node__11362))
{return inode__11352;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__11351.bitmap,cljs.core.clone_and_set.call(null,this__11351.arr,((2 * idx__11354) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__11351.bitmap,cljs.core.clone_and_set.call(null,this__11351.arr,(2 * idx__11354),null,((2 * idx__11354) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__11361,val_or_node__11362,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11364 = this;
var inode__11365 = this;
var bit__11366 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11364.bitmap & bit__11366) === 0))
{return not_found;
} else
{var idx__11367 = cljs.core.bitmap_indexed_node_index.call(null,this__11364.bitmap,bit__11366);
var key_or_nil__11368 = (this__11364.arr[(2 * idx__11367)]);
var val_or_node__11369 = (this__11364.arr[((2 * idx__11367) + 1)]);
if((key_or_nil__11368 == null))
{return val_or_node__11369.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11368))
{return val_or_node__11369;
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
var arr__11385 = array_node.arr;
var len__11386 = (2 * (array_node.cnt - 1));
var new_arr__11387 = cljs.core.make_array.call(null,len__11386);
var i__11388 = 0;
var j__11389 = 1;
var bitmap__11390 = 0;
while(true){
if((i__11388 < len__11386))
{if((function (){var and__3822__auto____11391 = !((i__11388 === idx));
if(and__3822__auto____11391)
{return !(((arr__11385[i__11388]) == null));
} else
{return and__3822__auto____11391;
}
})())
{(new_arr__11387[j__11389] = (arr__11385[i__11388]));
{
var G__11392 = (i__11388 + 1);
var G__11393 = (j__11389 + 2);
var G__11394 = (bitmap__11390 | (1 << i__11388));
i__11388 = G__11392;
j__11389 = G__11393;
bitmap__11390 = G__11394;
continue;
}
} else
{{
var G__11395 = (i__11388 + 1);
var G__11396 = j__11389;
var G__11397 = bitmap__11390;
i__11388 = G__11395;
j__11389 = G__11396;
bitmap__11390 = G__11397;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__11390,new_arr__11387));
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
var this__11398 = this;
var inode__11399 = this;
var idx__11400 = ((hash >>> shift) & 0x01f);
var node__11401 = (this__11398.arr[idx__11400]);
if((node__11401 == null))
{var editable__11402 = cljs.core.edit_and_set.call(null,inode__11399,edit,idx__11400,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__11402.cnt = (editable__11402.cnt + 1);
return editable__11402;
} else
{var n__11403 = node__11401.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11403 === node__11401))
{return inode__11399;
} else
{return cljs.core.edit_and_set.call(null,inode__11399,edit,idx__11400,n__11403);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__11404 = this;
var inode__11405 = this;
return cljs.core.create_array_node_seq.call(null,this__11404.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11406 = this;
var inode__11407 = this;
var idx__11408 = ((hash >>> shift) & 0x01f);
var node__11409 = (this__11406.arr[idx__11408]);
if((node__11409 == null))
{return inode__11407;
} else
{var n__11410 = node__11409.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__11410 === node__11409))
{return inode__11407;
} else
{if((n__11410 == null))
{if((this__11406.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__11407,edit,idx__11408);
} else
{var editable__11411 = cljs.core.edit_and_set.call(null,inode__11407,edit,idx__11408,n__11410);
editable__11411.cnt = (editable__11411.cnt - 1);
return editable__11411;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__11407,edit,idx__11408,n__11410);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__11412 = this;
var inode__11413 = this;
if((e === this__11412.edit))
{return inode__11413;
} else
{return (new cljs.core.ArrayNode(e,this__11412.cnt,this__11412.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__11414 = this;
var inode__11415 = this;
var len__11416 = this__11414.arr.length;
var i__11417 = 0;
var init__11418 = init;
while(true){
if((i__11417 < len__11416))
{var node__11419 = (this__11414.arr[i__11417]);
if(!((node__11419 == null)))
{var init__11420 = node__11419.kv_reduce(f,init__11418);
if(cljs.core.reduced_QMARK_.call(null,init__11420))
{return cljs.core.deref.call(null,init__11420);
} else
{{
var G__11439 = (i__11417 + 1);
var G__11440 = init__11420;
i__11417 = G__11439;
init__11418 = G__11440;
continue;
}
}
} else
{return null;
}
} else
{return init__11418;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11421 = this;
var inode__11422 = this;
var idx__11423 = ((hash >>> shift) & 0x01f);
var node__11424 = (this__11421.arr[idx__11423]);
if(!((node__11424 == null)))
{return node__11424.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__11425 = this;
var inode__11426 = this;
var idx__11427 = ((hash >>> shift) & 0x01f);
var node__11428 = (this__11425.arr[idx__11427]);
if(!((node__11428 == null)))
{var n__11429 = node__11428.inode_without((shift + 5),hash,key);
if((n__11429 === node__11428))
{return inode__11426;
} else
{if((n__11429 == null))
{if((this__11425.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__11426,null,idx__11427);
} else
{return (new cljs.core.ArrayNode(null,(this__11425.cnt - 1),cljs.core.clone_and_set.call(null,this__11425.arr,idx__11427,n__11429)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__11425.cnt,cljs.core.clone_and_set.call(null,this__11425.arr,idx__11427,n__11429)));
} else
{return null;
}
}
}
} else
{return inode__11426;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11430 = this;
var inode__11431 = this;
var idx__11432 = ((hash >>> shift) & 0x01f);
var node__11433 = (this__11430.arr[idx__11432]);
if((node__11433 == null))
{return (new cljs.core.ArrayNode(null,(this__11430.cnt + 1),cljs.core.clone_and_set.call(null,this__11430.arr,idx__11432,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__11434 = node__11433.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11434 === node__11433))
{return inode__11431;
} else
{return (new cljs.core.ArrayNode(null,this__11430.cnt,cljs.core.clone_and_set.call(null,this__11430.arr,idx__11432,n__11434)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11435 = this;
var inode__11436 = this;
var idx__11437 = ((hash >>> shift) & 0x01f);
var node__11438 = (this__11435.arr[idx__11437]);
if(!((node__11438 == null)))
{return node__11438.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__11443 = (2 * cnt);
var i__11444 = 0;
while(true){
if((i__11444 < lim__11443))
{if(cljs.core.key_test.call(null,key,(arr[i__11444])))
{return i__11444;
} else
{{
var G__11445 = (i__11444 + 2);
i__11444 = G__11445;
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
var this__11446 = this;
var inode__11447 = this;
if((hash === this__11446.collision_hash))
{var idx__11448 = cljs.core.hash_collision_node_find_index.call(null,this__11446.arr,this__11446.cnt,key);
if((idx__11448 === -1))
{if((this__11446.arr.length > (2 * this__11446.cnt)))
{var editable__11449 = cljs.core.edit_and_set.call(null,inode__11447,edit,(2 * this__11446.cnt),key,((2 * this__11446.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__11449.cnt = (editable__11449.cnt + 1);
return editable__11449;
} else
{var len__11450 = this__11446.arr.length;
var new_arr__11451 = cljs.core.make_array.call(null,(len__11450 + 2));
cljs.core.array_copy.call(null,this__11446.arr,0,new_arr__11451,0,len__11450);
(new_arr__11451[len__11450] = key);
(new_arr__11451[(len__11450 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__11447.ensure_editable_array(edit,(this__11446.cnt + 1),new_arr__11451);
}
} else
{if(((this__11446.arr[(idx__11448 + 1)]) === val))
{return inode__11447;
} else
{return cljs.core.edit_and_set.call(null,inode__11447,edit,(idx__11448 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__11446.collision_hash >>> shift) & 0x01f)),[null,inode__11447,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__11452 = this;
var inode__11453 = this;
return cljs.core.create_inode_seq.call(null,this__11452.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11454 = this;
var inode__11455 = this;
var idx__11456 = cljs.core.hash_collision_node_find_index.call(null,this__11454.arr,this__11454.cnt,key);
if((idx__11456 === -1))
{return inode__11455;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__11454.cnt === 1))
{return null;
} else
{var editable__11457 = inode__11455.ensure_editable(edit);
var earr__11458 = editable__11457.arr;
(earr__11458[idx__11456] = (earr__11458[((2 * this__11454.cnt) - 2)]));
(earr__11458[(idx__11456 + 1)] = (earr__11458[((2 * this__11454.cnt) - 1)]));
(earr__11458[((2 * this__11454.cnt) - 1)] = null);
(earr__11458[((2 * this__11454.cnt) - 2)] = null);
editable__11457.cnt = (editable__11457.cnt - 1);
return editable__11457;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__11459 = this;
var inode__11460 = this;
if((e === this__11459.edit))
{return inode__11460;
} else
{var new_arr__11461 = cljs.core.make_array.call(null,(2 * (this__11459.cnt + 1)));
cljs.core.array_copy.call(null,this__11459.arr,0,new_arr__11461,0,(2 * this__11459.cnt));
return (new cljs.core.HashCollisionNode(e,this__11459.collision_hash,this__11459.cnt,new_arr__11461));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__11462 = this;
var inode__11463 = this;
return cljs.core.inode_kv_reduce.call(null,this__11462.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11464 = this;
var inode__11465 = this;
var idx__11466 = cljs.core.hash_collision_node_find_index.call(null,this__11464.arr,this__11464.cnt,key);
if((idx__11466 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__11464.arr[idx__11466])))
{return cljs.core.PersistentVector.fromArray([(this__11464.arr[idx__11466]),(this__11464.arr[(idx__11466 + 1)])], true);
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
var this__11467 = this;
var inode__11468 = this;
var idx__11469 = cljs.core.hash_collision_node_find_index.call(null,this__11467.arr,this__11467.cnt,key);
if((idx__11469 === -1))
{return inode__11468;
} else
{if((this__11467.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__11467.collision_hash,(this__11467.cnt - 1),cljs.core.remove_pair.call(null,this__11467.arr,cljs.core.quot.call(null,idx__11469,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11470 = this;
var inode__11471 = this;
if((hash === this__11470.collision_hash))
{var idx__11472 = cljs.core.hash_collision_node_find_index.call(null,this__11470.arr,this__11470.cnt,key);
if((idx__11472 === -1))
{var len__11473 = this__11470.arr.length;
var new_arr__11474 = cljs.core.make_array.call(null,(len__11473 + 2));
cljs.core.array_copy.call(null,this__11470.arr,0,new_arr__11474,0,len__11473);
(new_arr__11474[len__11473] = key);
(new_arr__11474[(len__11473 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__11470.collision_hash,(this__11470.cnt + 1),new_arr__11474));
} else
{if(cljs.core._EQ_.call(null,(this__11470.arr[idx__11472]),val))
{return inode__11471;
} else
{return (new cljs.core.HashCollisionNode(null,this__11470.collision_hash,this__11470.cnt,cljs.core.clone_and_set.call(null,this__11470.arr,(idx__11472 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__11470.collision_hash >>> shift) & 0x01f)),[null,inode__11471])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11475 = this;
var inode__11476 = this;
var idx__11477 = cljs.core.hash_collision_node_find_index.call(null,this__11475.arr,this__11475.cnt,key);
if((idx__11477 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__11475.arr[idx__11477])))
{return (this__11475.arr[(idx__11477 + 1)]);
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
var this__11478 = this;
var inode__11479 = this;
if((e === this__11478.edit))
{this__11478.arr = array;
this__11478.cnt = count;
return inode__11479;
} else
{return (new cljs.core.HashCollisionNode(this__11478.edit,this__11478.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__11484 = cljs.core.hash.call(null,key1);
if((key1hash__11484 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__11484,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___11485 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__11484,key1,val1,added_leaf_QMARK___11485).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___11485);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__11486 = cljs.core.hash.call(null,key1);
if((key1hash__11486 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__11486,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___11487 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__11486,key1,val1,added_leaf_QMARK___11487).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___11487);
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
var this__11488 = this;
var h__2192__auto____11489 = this__11488.__hash;
if(!((h__2192__auto____11489 == null)))
{return h__2192__auto____11489;
} else
{var h__2192__auto____11490 = cljs.core.hash_coll.call(null,coll);
this__11488.__hash = h__2192__auto____11490;
return h__2192__auto____11490;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11491 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__11492 = this;
var this__11493 = this;
return cljs.core.pr_str.call(null,this__11493);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11494 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11495 = this;
if((this__11495.s == null))
{return cljs.core.PersistentVector.fromArray([(this__11495.nodes[this__11495.i]),(this__11495.nodes[(this__11495.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__11495.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11496 = this;
if((this__11496.s == null))
{return cljs.core.create_inode_seq.call(null,this__11496.nodes,(this__11496.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__11496.nodes,this__11496.i,cljs.core.next.call(null,this__11496.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11497 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11498 = this;
return (new cljs.core.NodeSeq(meta,this__11498.nodes,this__11498.i,this__11498.s,this__11498.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11499 = this;
return this__11499.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11500 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11500.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__11507 = nodes.length;
var j__11508 = i;
while(true){
if((j__11508 < len__11507))
{if(!(((nodes[j__11508]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__11508,null,null));
} else
{var temp__3971__auto____11509 = (nodes[(j__11508 + 1)]);
if(cljs.core.truth_(temp__3971__auto____11509))
{var node__11510 = temp__3971__auto____11509;
var temp__3971__auto____11511 = node__11510.inode_seq();
if(cljs.core.truth_(temp__3971__auto____11511))
{var node_seq__11512 = temp__3971__auto____11511;
return (new cljs.core.NodeSeq(null,nodes,(j__11508 + 2),node_seq__11512,null));
} else
{{
var G__11513 = (j__11508 + 2);
j__11508 = G__11513;
continue;
}
}
} else
{{
var G__11514 = (j__11508 + 2);
j__11508 = G__11514;
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
var this__11515 = this;
var h__2192__auto____11516 = this__11515.__hash;
if(!((h__2192__auto____11516 == null)))
{return h__2192__auto____11516;
} else
{var h__2192__auto____11517 = cljs.core.hash_coll.call(null,coll);
this__11515.__hash = h__2192__auto____11517;
return h__2192__auto____11517;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11518 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__11519 = this;
var this__11520 = this;
return cljs.core.pr_str.call(null,this__11520);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11521 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11522 = this;
return cljs.core.first.call(null,this__11522.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11523 = this;
return cljs.core.create_array_node_seq.call(null,null,this__11523.nodes,this__11523.i,cljs.core.next.call(null,this__11523.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11524 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11525 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__11525.nodes,this__11525.i,this__11525.s,this__11525.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11526 = this;
return this__11526.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11527 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11527.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__11534 = nodes.length;
var j__11535 = i;
while(true){
if((j__11535 < len__11534))
{var temp__3971__auto____11536 = (nodes[j__11535]);
if(cljs.core.truth_(temp__3971__auto____11536))
{var nj__11537 = temp__3971__auto____11536;
var temp__3971__auto____11538 = nj__11537.inode_seq();
if(cljs.core.truth_(temp__3971__auto____11538))
{var ns__11539 = temp__3971__auto____11538;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__11535 + 1),ns__11539,null));
} else
{{
var G__11540 = (j__11535 + 1);
j__11535 = G__11540;
continue;
}
}
} else
{{
var G__11541 = (j__11535 + 1);
j__11535 = G__11541;
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
var this__11544 = this;
return (new cljs.core.TransientHashMap({},this__11544.root,this__11544.cnt,this__11544.has_nil_QMARK_,this__11544.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11545 = this;
var h__2192__auto____11546 = this__11545.__hash;
if(!((h__2192__auto____11546 == null)))
{return h__2192__auto____11546;
} else
{var h__2192__auto____11547 = cljs.core.hash_imap.call(null,coll);
this__11545.__hash = h__2192__auto____11547;
return h__2192__auto____11547;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11548 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11549 = this;
if((k == null))
{if(this__11549.has_nil_QMARK_)
{return this__11549.nil_val;
} else
{return not_found;
}
} else
{if((this__11549.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__11549.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11550 = this;
if((k == null))
{if((function (){var and__3822__auto____11551 = this__11550.has_nil_QMARK_;
if(and__3822__auto____11551)
{return (v === this__11550.nil_val);
} else
{return and__3822__auto____11551;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11550.meta,((this__11550.has_nil_QMARK_)?this__11550.cnt:(this__11550.cnt + 1)),this__11550.root,true,v,null));
}
} else
{var added_leaf_QMARK___11552 = (new cljs.core.Box(false));
var new_root__11553 = (((this__11550.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__11550.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___11552);
if((new_root__11553 === this__11550.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11550.meta,((added_leaf_QMARK___11552.val)?(this__11550.cnt + 1):this__11550.cnt),new_root__11553,this__11550.has_nil_QMARK_,this__11550.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11554 = this;
if((k == null))
{return this__11554.has_nil_QMARK_;
} else
{if((this__11554.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__11554.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__11577 = null;
var G__11577__2 = (function (this_sym11555,k){
var this__11557 = this;
var this_sym11555__11558 = this;
var coll__11559 = this_sym11555__11558;
return coll__11559.cljs$core$ILookup$_lookup$arity$2(coll__11559,k);
});
var G__11577__3 = (function (this_sym11556,k,not_found){
var this__11557 = this;
var this_sym11556__11560 = this;
var coll__11561 = this_sym11556__11560;
return coll__11561.cljs$core$ILookup$_lookup$arity$3(coll__11561,k,not_found);
});
G__11577 = function(this_sym11556,k,not_found){
switch(arguments.length){
case 2:
return G__11577__2.call(this,this_sym11556,k);
case 3:
return G__11577__3.call(this,this_sym11556,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11577;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym11542,args11543){
var this__11562 = this;
return this_sym11542.call.apply(this_sym11542,[this_sym11542].concat(args11543.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11563 = this;
var init__11564 = ((this__11563.has_nil_QMARK_)?f.call(null,init,null,this__11563.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__11564))
{return cljs.core.deref.call(null,init__11564);
} else
{if(!((this__11563.root == null)))
{return this__11563.root.kv_reduce(f,init__11564);
} else
{if("\uFDD0'else")
{return init__11564;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11565 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__11566 = this;
var this__11567 = this;
return cljs.core.pr_str.call(null,this__11567);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11568 = this;
if((this__11568.cnt > 0))
{var s__11569 = ((!((this__11568.root == null)))?this__11568.root.inode_seq():null);
if(this__11568.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__11568.nil_val], true),s__11569);
} else
{return s__11569;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11570 = this;
return this__11570.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11571 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11572 = this;
return (new cljs.core.PersistentHashMap(meta,this__11572.cnt,this__11572.root,this__11572.has_nil_QMARK_,this__11572.nil_val,this__11572.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11573 = this;
return this__11573.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11574 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__11574.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11575 = this;
if((k == null))
{if(this__11575.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__11575.meta,(this__11575.cnt - 1),this__11575.root,false,null,null));
} else
{return coll;
}
} else
{if((this__11575.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__11576 = this__11575.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__11576 === this__11575.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11575.meta,(this__11575.cnt - 1),new_root__11576,this__11575.has_nil_QMARK_,this__11575.nil_val,null));
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
var len__11578 = ks.length;
var i__11579 = 0;
var out__11580 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__11579 < len__11578))
{{
var G__11581 = (i__11579 + 1);
var G__11582 = cljs.core.assoc_BANG_.call(null,out__11580,(ks[i__11579]),(vs[i__11579]));
i__11579 = G__11581;
out__11580 = G__11582;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11580);
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
var this__11583 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__11584 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__11585 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11586 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__11587 = this;
if((k == null))
{if(this__11587.has_nil_QMARK_)
{return this__11587.nil_val;
} else
{return null;
}
} else
{if((this__11587.root == null))
{return null;
} else
{return this__11587.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__11588 = this;
if((k == null))
{if(this__11588.has_nil_QMARK_)
{return this__11588.nil_val;
} else
{return not_found;
}
} else
{if((this__11588.root == null))
{return not_found;
} else
{return this__11588.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11589 = this;
if(this__11589.edit)
{return this__11589.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__11590 = this;
var tcoll__11591 = this;
if(this__11590.edit)
{if((function (){var G__11592__11593 = o;
if(G__11592__11593)
{if((function (){var or__3824__auto____11594 = (G__11592__11593.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____11594)
{return or__3824__auto____11594;
} else
{return G__11592__11593.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__11592__11593.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11592__11593);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11592__11593);
}
})())
{return tcoll__11591.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__11595 = cljs.core.seq.call(null,o);
var tcoll__11596 = tcoll__11591;
while(true){
var temp__3971__auto____11597 = cljs.core.first.call(null,es__11595);
if(cljs.core.truth_(temp__3971__auto____11597))
{var e__11598 = temp__3971__auto____11597;
{
var G__11609 = cljs.core.next.call(null,es__11595);
var G__11610 = tcoll__11596.assoc_BANG_(cljs.core.key.call(null,e__11598),cljs.core.val.call(null,e__11598));
es__11595 = G__11609;
tcoll__11596 = G__11610;
continue;
}
} else
{return tcoll__11596;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__11599 = this;
var tcoll__11600 = this;
if(this__11599.edit)
{if((k == null))
{if((this__11599.nil_val === v))
{} else
{this__11599.nil_val = v;
}
if(this__11599.has_nil_QMARK_)
{} else
{this__11599.count = (this__11599.count + 1);
this__11599.has_nil_QMARK_ = true;
}
return tcoll__11600;
} else
{var added_leaf_QMARK___11601 = (new cljs.core.Box(false));
var node__11602 = (((this__11599.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__11599.root).inode_assoc_BANG_(this__11599.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___11601);
if((node__11602 === this__11599.root))
{} else
{this__11599.root = node__11602;
}
if(added_leaf_QMARK___11601.val)
{this__11599.count = (this__11599.count + 1);
} else
{}
return tcoll__11600;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__11603 = this;
var tcoll__11604 = this;
if(this__11603.edit)
{if((k == null))
{if(this__11603.has_nil_QMARK_)
{this__11603.has_nil_QMARK_ = false;
this__11603.nil_val = null;
this__11603.count = (this__11603.count - 1);
return tcoll__11604;
} else
{return tcoll__11604;
}
} else
{if((this__11603.root == null))
{return tcoll__11604;
} else
{var removed_leaf_QMARK___11605 = (new cljs.core.Box(false));
var node__11606 = this__11603.root.inode_without_BANG_(this__11603.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___11605);
if((node__11606 === this__11603.root))
{} else
{this__11603.root = node__11606;
}
if(cljs.core.truth_((removed_leaf_QMARK___11605[0])))
{this__11603.count = (this__11603.count - 1);
} else
{}
return tcoll__11604;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__11607 = this;
var tcoll__11608 = this;
if(this__11607.edit)
{this__11607.edit = null;
return (new cljs.core.PersistentHashMap(null,this__11607.count,this__11607.root,this__11607.has_nil_QMARK_,this__11607.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__11613 = node;
var stack__11614 = stack;
while(true){
if(!((t__11613 == null)))
{{
var G__11615 = ((ascending_QMARK_)?t__11613.left:t__11613.right);
var G__11616 = cljs.core.conj.call(null,stack__11614,t__11613);
t__11613 = G__11615;
stack__11614 = G__11616;
continue;
}
} else
{return stack__11614;
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
var this__11617 = this;
var h__2192__auto____11618 = this__11617.__hash;
if(!((h__2192__auto____11618 == null)))
{return h__2192__auto____11618;
} else
{var h__2192__auto____11619 = cljs.core.hash_coll.call(null,coll);
this__11617.__hash = h__2192__auto____11619;
return h__2192__auto____11619;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11620 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__11621 = this;
var this__11622 = this;
return cljs.core.pr_str.call(null,this__11622);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11623 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11624 = this;
if((this__11624.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__11624.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__11625 = this;
return cljs.core.peek.call(null,this__11625.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__11626 = this;
var t__11627 = cljs.core.first.call(null,this__11626.stack);
var next_stack__11628 = cljs.core.tree_map_seq_push.call(null,((this__11626.ascending_QMARK_)?t__11627.right:t__11627.left),cljs.core.next.call(null,this__11626.stack),this__11626.ascending_QMARK_);
if(!((next_stack__11628 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__11628,this__11626.ascending_QMARK_,(this__11626.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11629 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11630 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__11630.stack,this__11630.ascending_QMARK_,this__11630.cnt,this__11630.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11631 = this;
return this__11631.meta;
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
{if((function (){var and__3822__auto____11633 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____11633)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____11633;
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
{if((function (){var and__3822__auto____11635 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____11635)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____11635;
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
var init__11639 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__11639))
{return cljs.core.deref.call(null,init__11639);
} else
{var init__11640 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__11639):init__11639);
if(cljs.core.reduced_QMARK_.call(null,init__11640))
{return cljs.core.deref.call(null,init__11640);
} else
{var init__11641 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__11640):init__11640);
if(cljs.core.reduced_QMARK_.call(null,init__11641))
{return cljs.core.deref.call(null,init__11641);
} else
{return init__11641;
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
var this__11644 = this;
var h__2192__auto____11645 = this__11644.__hash;
if(!((h__2192__auto____11645 == null)))
{return h__2192__auto____11645;
} else
{var h__2192__auto____11646 = cljs.core.hash_coll.call(null,coll);
this__11644.__hash = h__2192__auto____11646;
return h__2192__auto____11646;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__11647 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__11648 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__11649 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__11649.key,this__11649.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__11697 = null;
var G__11697__2 = (function (this_sym11650,k){
var this__11652 = this;
var this_sym11650__11653 = this;
var node__11654 = this_sym11650__11653;
return node__11654.cljs$core$ILookup$_lookup$arity$2(node__11654,k);
});
var G__11697__3 = (function (this_sym11651,k,not_found){
var this__11652 = this;
var this_sym11651__11655 = this;
var node__11656 = this_sym11651__11655;
return node__11656.cljs$core$ILookup$_lookup$arity$3(node__11656,k,not_found);
});
G__11697 = function(this_sym11651,k,not_found){
switch(arguments.length){
case 2:
return G__11697__2.call(this,this_sym11651,k);
case 3:
return G__11697__3.call(this,this_sym11651,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11697;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym11642,args11643){
var this__11657 = this;
return this_sym11642.call.apply(this_sym11642,[this_sym11642].concat(args11643.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__11658 = this;
return cljs.core.PersistentVector.fromArray([this__11658.key,this__11658.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__11659 = this;
return this__11659.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__11660 = this;
return this__11660.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__11661 = this;
var node__11662 = this;
return ins.balance_right(node__11662);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__11663 = this;
var node__11664 = this;
return (new cljs.core.RedNode(this__11663.key,this__11663.val,this__11663.left,this__11663.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__11665 = this;
var node__11666 = this;
return cljs.core.balance_right_del.call(null,this__11665.key,this__11665.val,this__11665.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__11667 = this;
var node__11668 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__11669 = this;
var node__11670 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__11670,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__11671 = this;
var node__11672 = this;
return cljs.core.balance_left_del.call(null,this__11671.key,this__11671.val,del,this__11671.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__11673 = this;
var node__11674 = this;
return ins.balance_left(node__11674);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__11675 = this;
var node__11676 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__11676,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__11698 = null;
var G__11698__0 = (function (){
var this__11677 = this;
var this__11679 = this;
return cljs.core.pr_str.call(null,this__11679);
});
G__11698 = function(){
switch(arguments.length){
case 0:
return G__11698__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11698;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__11680 = this;
var node__11681 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__11681,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__11682 = this;
var node__11683 = this;
return node__11683;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__11684 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__11685 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__11686 = this;
return cljs.core.list.call(null,this__11686.key,this__11686.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__11687 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__11688 = this;
return this__11688.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__11689 = this;
return cljs.core.PersistentVector.fromArray([this__11689.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__11690 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__11690.key,this__11690.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11691 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__11692 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__11692.key,this__11692.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__11693 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__11694 = this;
if((n === 0))
{return this__11694.key;
} else
{if((n === 1))
{return this__11694.val;
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
var this__11695 = this;
if((n === 0))
{return this__11695.key;
} else
{if((n === 1))
{return this__11695.val;
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
var this__11696 = this;
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
var this__11701 = this;
var h__2192__auto____11702 = this__11701.__hash;
if(!((h__2192__auto____11702 == null)))
{return h__2192__auto____11702;
} else
{var h__2192__auto____11703 = cljs.core.hash_coll.call(null,coll);
this__11701.__hash = h__2192__auto____11703;
return h__2192__auto____11703;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__11704 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__11705 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__11706 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__11706.key,this__11706.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__11754 = null;
var G__11754__2 = (function (this_sym11707,k){
var this__11709 = this;
var this_sym11707__11710 = this;
var node__11711 = this_sym11707__11710;
return node__11711.cljs$core$ILookup$_lookup$arity$2(node__11711,k);
});
var G__11754__3 = (function (this_sym11708,k,not_found){
var this__11709 = this;
var this_sym11708__11712 = this;
var node__11713 = this_sym11708__11712;
return node__11713.cljs$core$ILookup$_lookup$arity$3(node__11713,k,not_found);
});
G__11754 = function(this_sym11708,k,not_found){
switch(arguments.length){
case 2:
return G__11754__2.call(this,this_sym11708,k);
case 3:
return G__11754__3.call(this,this_sym11708,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11754;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym11699,args11700){
var this__11714 = this;
return this_sym11699.call.apply(this_sym11699,[this_sym11699].concat(args11700.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__11715 = this;
return cljs.core.PersistentVector.fromArray([this__11715.key,this__11715.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__11716 = this;
return this__11716.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__11717 = this;
return this__11717.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__11718 = this;
var node__11719 = this;
return (new cljs.core.RedNode(this__11718.key,this__11718.val,this__11718.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__11720 = this;
var node__11721 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__11722 = this;
var node__11723 = this;
return (new cljs.core.RedNode(this__11722.key,this__11722.val,this__11722.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__11724 = this;
var node__11725 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__11726 = this;
var node__11727 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__11727,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__11728 = this;
var node__11729 = this;
return (new cljs.core.RedNode(this__11728.key,this__11728.val,del,this__11728.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__11730 = this;
var node__11731 = this;
return (new cljs.core.RedNode(this__11730.key,this__11730.val,ins,this__11730.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__11732 = this;
var node__11733 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11732.left))
{return (new cljs.core.RedNode(this__11732.key,this__11732.val,this__11732.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__11732.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11732.right))
{return (new cljs.core.RedNode(this__11732.right.key,this__11732.right.val,(new cljs.core.BlackNode(this__11732.key,this__11732.val,this__11732.left,this__11732.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__11732.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__11733,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__11755 = null;
var G__11755__0 = (function (){
var this__11734 = this;
var this__11736 = this;
return cljs.core.pr_str.call(null,this__11736);
});
G__11755 = function(){
switch(arguments.length){
case 0:
return G__11755__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11755;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__11737 = this;
var node__11738 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11737.right))
{return (new cljs.core.RedNode(this__11737.key,this__11737.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__11737.left,null)),this__11737.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11737.left))
{return (new cljs.core.RedNode(this__11737.left.key,this__11737.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__11737.left.left,null)),(new cljs.core.BlackNode(this__11737.key,this__11737.val,this__11737.left.right,this__11737.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__11738,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__11739 = this;
var node__11740 = this;
return (new cljs.core.BlackNode(this__11739.key,this__11739.val,this__11739.left,this__11739.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__11741 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__11742 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__11743 = this;
return cljs.core.list.call(null,this__11743.key,this__11743.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__11744 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__11745 = this;
return this__11745.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__11746 = this;
return cljs.core.PersistentVector.fromArray([this__11746.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__11747 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__11747.key,this__11747.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11748 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__11749 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__11749.key,this__11749.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__11750 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__11751 = this;
if((n === 0))
{return this__11751.key;
} else
{if((n === 1))
{return this__11751.val;
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
var this__11752 = this;
if((n === 0))
{return this__11752.key;
} else
{if((n === 1))
{return this__11752.val;
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
var this__11753 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__11759 = comp.call(null,k,tree.key);
if((c__11759 === 0))
{(found[0] = tree);
return null;
} else
{if((c__11759 < 0))
{var ins__11760 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__11760 == null)))
{return tree.add_left(ins__11760);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__11761 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__11761 == null)))
{return tree.add_right(ins__11761);
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
{var app__11764 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__11764))
{return (new cljs.core.RedNode(app__11764.key,app__11764.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__11764.left,null)),(new cljs.core.RedNode(right.key,right.val,app__11764.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__11764,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__11765 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__11765))
{return (new cljs.core.RedNode(app__11765.key,app__11765.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__11765.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__11765.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__11765,right.right,null)));
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
{var c__11771 = comp.call(null,k,tree.key);
if((c__11771 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__11771 < 0))
{var del__11772 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____11773 = !((del__11772 == null));
if(or__3824__auto____11773)
{return or__3824__auto____11773;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__11772,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__11772,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__11774 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____11775 = !((del__11774 == null));
if(or__3824__auto____11775)
{return or__3824__auto____11775;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__11774);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__11774,null));
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
var tk__11778 = tree.key;
var c__11779 = comp.call(null,k,tk__11778);
if((c__11779 === 0))
{return tree.replace(tk__11778,v,tree.left,tree.right);
} else
{if((c__11779 < 0))
{return tree.replace(tk__11778,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__11778,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__11782 = this;
var h__2192__auto____11783 = this__11782.__hash;
if(!((h__2192__auto____11783 == null)))
{return h__2192__auto____11783;
} else
{var h__2192__auto____11784 = cljs.core.hash_imap.call(null,coll);
this__11782.__hash = h__2192__auto____11784;
return h__2192__auto____11784;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11785 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11786 = this;
var n__11787 = coll.entry_at(k);
if(!((n__11787 == null)))
{return n__11787.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11788 = this;
var found__11789 = [null];
var t__11790 = cljs.core.tree_map_add.call(null,this__11788.comp,this__11788.tree,k,v,found__11789);
if((t__11790 == null))
{var found_node__11791 = cljs.core.nth.call(null,found__11789,0);
if(cljs.core._EQ_.call(null,v,found_node__11791.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11788.comp,cljs.core.tree_map_replace.call(null,this__11788.comp,this__11788.tree,k,v),this__11788.cnt,this__11788.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11788.comp,t__11790.blacken(),(this__11788.cnt + 1),this__11788.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11792 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__11826 = null;
var G__11826__2 = (function (this_sym11793,k){
var this__11795 = this;
var this_sym11793__11796 = this;
var coll__11797 = this_sym11793__11796;
return coll__11797.cljs$core$ILookup$_lookup$arity$2(coll__11797,k);
});
var G__11826__3 = (function (this_sym11794,k,not_found){
var this__11795 = this;
var this_sym11794__11798 = this;
var coll__11799 = this_sym11794__11798;
return coll__11799.cljs$core$ILookup$_lookup$arity$3(coll__11799,k,not_found);
});
G__11826 = function(this_sym11794,k,not_found){
switch(arguments.length){
case 2:
return G__11826__2.call(this,this_sym11794,k);
case 3:
return G__11826__3.call(this,this_sym11794,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11826;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym11780,args11781){
var this__11800 = this;
return this_sym11780.call.apply(this_sym11780,[this_sym11780].concat(args11781.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11801 = this;
if(!((this__11801.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__11801.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11802 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11803 = this;
if((this__11803.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11803.tree,false,this__11803.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__11804 = this;
var this__11805 = this;
return cljs.core.pr_str.call(null,this__11805);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__11806 = this;
var coll__11807 = this;
var t__11808 = this__11806.tree;
while(true){
if(!((t__11808 == null)))
{var c__11809 = this__11806.comp.call(null,k,t__11808.key);
if((c__11809 === 0))
{return t__11808;
} else
{if((c__11809 < 0))
{{
var G__11827 = t__11808.left;
t__11808 = G__11827;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__11828 = t__11808.right;
t__11808 = G__11828;
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
var this__11810 = this;
if((this__11810.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11810.tree,ascending_QMARK_,this__11810.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11811 = this;
if((this__11811.cnt > 0))
{var stack__11812 = null;
var t__11813 = this__11811.tree;
while(true){
if(!((t__11813 == null)))
{var c__11814 = this__11811.comp.call(null,k,t__11813.key);
if((c__11814 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__11812,t__11813),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__11814 < 0))
{{
var G__11829 = cljs.core.conj.call(null,stack__11812,t__11813);
var G__11830 = t__11813.left;
stack__11812 = G__11829;
t__11813 = G__11830;
continue;
}
} else
{{
var G__11831 = stack__11812;
var G__11832 = t__11813.right;
stack__11812 = G__11831;
t__11813 = G__11832;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__11814 > 0))
{{
var G__11833 = cljs.core.conj.call(null,stack__11812,t__11813);
var G__11834 = t__11813.right;
stack__11812 = G__11833;
t__11813 = G__11834;
continue;
}
} else
{{
var G__11835 = stack__11812;
var G__11836 = t__11813.left;
stack__11812 = G__11835;
t__11813 = G__11836;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__11812 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__11812,ascending_QMARK_,-1,null));
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
var this__11815 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11816 = this;
return this__11816.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11817 = this;
if((this__11817.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11817.tree,true,this__11817.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11818 = this;
return this__11818.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11819 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11820 = this;
return (new cljs.core.PersistentTreeMap(this__11820.comp,this__11820.tree,this__11820.cnt,meta,this__11820.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11821 = this;
return this__11821.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11822 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__11822.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11823 = this;
var found__11824 = [null];
var t__11825 = cljs.core.tree_map_remove.call(null,this__11823.comp,this__11823.tree,k,found__11824);
if((t__11825 == null))
{if((cljs.core.nth.call(null,found__11824,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11823.comp,null,0,this__11823.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11823.comp,t__11825.blacken(),(this__11823.cnt - 1),this__11823.meta,null));
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
var in__11839 = cljs.core.seq.call(null,keyvals);
var out__11840 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__11839)
{{
var G__11841 = cljs.core.nnext.call(null,in__11839);
var G__11842 = cljs.core.assoc_BANG_.call(null,out__11840,cljs.core.first.call(null,in__11839),cljs.core.second.call(null,in__11839));
in__11839 = G__11841;
out__11840 = G__11842;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11840);
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
hash_map.cljs$lang$applyTo = (function (arglist__11843){
var keyvals = cljs.core.seq(arglist__11843);;
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
array_map.cljs$lang$applyTo = (function (arglist__11844){
var keyvals = cljs.core.seq(arglist__11844);;
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
var ks__11848 = [];
var obj__11849 = {};
var kvs__11850 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__11850)
{ks__11848.push(cljs.core.first.call(null,kvs__11850));
(obj__11849[cljs.core.first.call(null,kvs__11850)] = cljs.core.second.call(null,kvs__11850));
{
var G__11851 = cljs.core.nnext.call(null,kvs__11850);
kvs__11850 = G__11851;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__11848,obj__11849);
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
obj_map.cljs$lang$applyTo = (function (arglist__11852){
var keyvals = cljs.core.seq(arglist__11852);;
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
var in__11855 = cljs.core.seq.call(null,keyvals);
var out__11856 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__11855)
{{
var G__11857 = cljs.core.nnext.call(null,in__11855);
var G__11858 = cljs.core.assoc.call(null,out__11856,cljs.core.first.call(null,in__11855),cljs.core.second.call(null,in__11855));
in__11855 = G__11857;
out__11856 = G__11858;
continue;
}
} else
{return out__11856;
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
sorted_map.cljs$lang$applyTo = (function (arglist__11859){
var keyvals = cljs.core.seq(arglist__11859);;
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
var in__11862 = cljs.core.seq.call(null,keyvals);
var out__11863 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__11862)
{{
var G__11864 = cljs.core.nnext.call(null,in__11862);
var G__11865 = cljs.core.assoc.call(null,out__11863,cljs.core.first.call(null,in__11862),cljs.core.second.call(null,in__11862));
in__11862 = G__11864;
out__11863 = G__11865;
continue;
}
} else
{return out__11863;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__11866){
var comparator = cljs.core.first(arglist__11866);
var keyvals = cljs.core.rest(arglist__11866);
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
{return cljs.core.reduce.call(null,(function (p1__11867_SHARP_,p2__11868_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____11870 = p1__11867_SHARP_;
if(cljs.core.truth_(or__3824__auto____11870))
{return or__3824__auto____11870;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__11868_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__11871){
var maps = cljs.core.seq(arglist__11871);;
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
{var merge_entry__11879 = (function (m,e){
var k__11877 = cljs.core.first.call(null,e);
var v__11878 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__11877))
{return cljs.core.assoc.call(null,m,k__11877,f.call(null,cljs.core._lookup.call(null,m,k__11877,null),v__11878));
} else
{return cljs.core.assoc.call(null,m,k__11877,v__11878);
}
});
var merge2__11881 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__11879,(function (){var or__3824__auto____11880 = m1;
if(cljs.core.truth_(or__3824__auto____11880))
{return or__3824__auto____11880;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__11881,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__11882){
var f = cljs.core.first(arglist__11882);
var maps = cljs.core.rest(arglist__11882);
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
var ret__11887 = cljs.core.ObjMap.EMPTY;
var keys__11888 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__11888)
{var key__11889 = cljs.core.first.call(null,keys__11888);
var entry__11890 = cljs.core._lookup.call(null,map,key__11889,"\uFDD0'cljs.core/not-found");
{
var G__11891 = ((cljs.core.not_EQ_.call(null,entry__11890,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__11887,key__11889,entry__11890):ret__11887);
var G__11892 = cljs.core.next.call(null,keys__11888);
ret__11887 = G__11891;
keys__11888 = G__11892;
continue;
}
} else
{return ret__11887;
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
var this__11896 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__11896.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11897 = this;
var h__2192__auto____11898 = this__11897.__hash;
if(!((h__2192__auto____11898 == null)))
{return h__2192__auto____11898;
} else
{var h__2192__auto____11899 = cljs.core.hash_iset.call(null,coll);
this__11897.__hash = h__2192__auto____11899;
return h__2192__auto____11899;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11900 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11901 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11901.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__11922 = null;
var G__11922__2 = (function (this_sym11902,k){
var this__11904 = this;
var this_sym11902__11905 = this;
var coll__11906 = this_sym11902__11905;
return coll__11906.cljs$core$ILookup$_lookup$arity$2(coll__11906,k);
});
var G__11922__3 = (function (this_sym11903,k,not_found){
var this__11904 = this;
var this_sym11903__11907 = this;
var coll__11908 = this_sym11903__11907;
return coll__11908.cljs$core$ILookup$_lookup$arity$3(coll__11908,k,not_found);
});
G__11922 = function(this_sym11903,k,not_found){
switch(arguments.length){
case 2:
return G__11922__2.call(this,this_sym11903,k);
case 3:
return G__11922__3.call(this,this_sym11903,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11922;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym11894,args11895){
var this__11909 = this;
return this_sym11894.call.apply(this_sym11894,[this_sym11894].concat(args11895.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11910 = this;
return (new cljs.core.PersistentHashSet(this__11910.meta,cljs.core.assoc.call(null,this__11910.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__11911 = this;
var this__11912 = this;
return cljs.core.pr_str.call(null,this__11912);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11913 = this;
return cljs.core.keys.call(null,this__11913.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11914 = this;
return (new cljs.core.PersistentHashSet(this__11914.meta,cljs.core.dissoc.call(null,this__11914.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11915 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11916 = this;
var and__3822__auto____11917 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____11917)
{var and__3822__auto____11918 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____11918)
{return cljs.core.every_QMARK_.call(null,(function (p1__11893_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11893_SHARP_);
}),other);
} else
{return and__3822__auto____11918;
}
} else
{return and__3822__auto____11917;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11919 = this;
return (new cljs.core.PersistentHashSet(meta,this__11919.hash_map,this__11919.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11920 = this;
return this__11920.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11921 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__11921.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__11923 = cljs.core.count.call(null,items);
var i__11924 = 0;
var out__11925 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__11924 < len__11923))
{{
var G__11926 = (i__11924 + 1);
var G__11927 = cljs.core.conj_BANG_.call(null,out__11925,(items[i__11924]));
i__11924 = G__11926;
out__11925 = G__11927;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11925);
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
var G__11945 = null;
var G__11945__2 = (function (this_sym11931,k){
var this__11933 = this;
var this_sym11931__11934 = this;
var tcoll__11935 = this_sym11931__11934;
if((cljs.core._lookup.call(null,this__11933.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__11945__3 = (function (this_sym11932,k,not_found){
var this__11933 = this;
var this_sym11932__11936 = this;
var tcoll__11937 = this_sym11932__11936;
if((cljs.core._lookup.call(null,this__11933.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__11945 = function(this_sym11932,k,not_found){
switch(arguments.length){
case 2:
return G__11945__2.call(this,this_sym11932,k);
case 3:
return G__11945__3.call(this,this_sym11932,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11945;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym11929,args11930){
var this__11938 = this;
return this_sym11929.call.apply(this_sym11929,[this_sym11929].concat(args11930.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__11939 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__11940 = this;
if((cljs.core._lookup.call(null,this__11940.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__11941 = this;
return cljs.core.count.call(null,this__11941.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__11942 = this;
this__11942.transient_map = cljs.core.dissoc_BANG_.call(null,this__11942.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11943 = this;
this__11943.transient_map = cljs.core.assoc_BANG_.call(null,this__11943.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11944 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__11944.transient_map),null));
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
var this__11948 = this;
var h__2192__auto____11949 = this__11948.__hash;
if(!((h__2192__auto____11949 == null)))
{return h__2192__auto____11949;
} else
{var h__2192__auto____11950 = cljs.core.hash_iset.call(null,coll);
this__11948.__hash = h__2192__auto____11950;
return h__2192__auto____11950;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11951 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11952 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11952.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__11978 = null;
var G__11978__2 = (function (this_sym11953,k){
var this__11955 = this;
var this_sym11953__11956 = this;
var coll__11957 = this_sym11953__11956;
return coll__11957.cljs$core$ILookup$_lookup$arity$2(coll__11957,k);
});
var G__11978__3 = (function (this_sym11954,k,not_found){
var this__11955 = this;
var this_sym11954__11958 = this;
var coll__11959 = this_sym11954__11958;
return coll__11959.cljs$core$ILookup$_lookup$arity$3(coll__11959,k,not_found);
});
G__11978 = function(this_sym11954,k,not_found){
switch(arguments.length){
case 2:
return G__11978__2.call(this,this_sym11954,k);
case 3:
return G__11978__3.call(this,this_sym11954,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11978;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym11946,args11947){
var this__11960 = this;
return this_sym11946.call.apply(this_sym11946,[this_sym11946].concat(args11947.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11961 = this;
return (new cljs.core.PersistentTreeSet(this__11961.meta,cljs.core.assoc.call(null,this__11961.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11962 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__11962.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__11963 = this;
var this__11964 = this;
return cljs.core.pr_str.call(null,this__11964);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__11965 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__11965.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11966 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__11966.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__11967 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11968 = this;
return cljs.core._comparator.call(null,this__11968.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11969 = this;
return cljs.core.keys.call(null,this__11969.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11970 = this;
return (new cljs.core.PersistentTreeSet(this__11970.meta,cljs.core.dissoc.call(null,this__11970.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11971 = this;
return cljs.core.count.call(null,this__11971.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11972 = this;
var and__3822__auto____11973 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____11973)
{var and__3822__auto____11974 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____11974)
{return cljs.core.every_QMARK_.call(null,(function (p1__11928_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11928_SHARP_);
}),other);
} else
{return and__3822__auto____11974;
}
} else
{return and__3822__auto____11973;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11975 = this;
return (new cljs.core.PersistentTreeSet(meta,this__11975.tree_map,this__11975.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11976 = this;
return this__11976.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11977 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__11977.meta);
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
var G__11983__delegate = function (keys){
var in__11981 = cljs.core.seq.call(null,keys);
var out__11982 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__11981))
{{
var G__11984 = cljs.core.next.call(null,in__11981);
var G__11985 = cljs.core.conj_BANG_.call(null,out__11982,cljs.core.first.call(null,in__11981));
in__11981 = G__11984;
out__11982 = G__11985;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11982);
}
break;
}
};
var G__11983 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11983__delegate.call(this, keys);
};
G__11983.cljs$lang$maxFixedArity = 0;
G__11983.cljs$lang$applyTo = (function (arglist__11986){
var keys = cljs.core.seq(arglist__11986);;
return G__11983__delegate(keys);
});
G__11983.cljs$lang$arity$variadic = G__11983__delegate;
return G__11983;
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
sorted_set.cljs$lang$applyTo = (function (arglist__11987){
var keys = cljs.core.seq(arglist__11987);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__11989){
var comparator = cljs.core.first(arglist__11989);
var keys = cljs.core.rest(arglist__11989);
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
{var n__11995 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____11996 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____11996))
{var e__11997 = temp__3971__auto____11996;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__11997));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__11995,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__11988_SHARP_){
var temp__3971__auto____11998 = cljs.core.find.call(null,smap,p1__11988_SHARP_);
if(cljs.core.truth_(temp__3971__auto____11998))
{var e__11999 = temp__3971__auto____11998;
return cljs.core.second.call(null,e__11999);
} else
{return p1__11988_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__12029 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__12022,seen){
while(true){
var vec__12023__12024 = p__12022;
var f__12025 = cljs.core.nth.call(null,vec__12023__12024,0,null);
var xs__12026 = vec__12023__12024;
var temp__3974__auto____12027 = cljs.core.seq.call(null,xs__12026);
if(temp__3974__auto____12027)
{var s__12028 = temp__3974__auto____12027;
if(cljs.core.contains_QMARK_.call(null,seen,f__12025))
{{
var G__12030 = cljs.core.rest.call(null,s__12028);
var G__12031 = seen;
p__12022 = G__12030;
seen = G__12031;
continue;
}
} else
{return cljs.core.cons.call(null,f__12025,step.call(null,cljs.core.rest.call(null,s__12028),cljs.core.conj.call(null,seen,f__12025)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__12029.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__12034 = cljs.core.PersistentVector.EMPTY;
var s__12035 = s;
while(true){
if(cljs.core.next.call(null,s__12035))
{{
var G__12036 = cljs.core.conj.call(null,ret__12034,cljs.core.first.call(null,s__12035));
var G__12037 = cljs.core.next.call(null,s__12035);
ret__12034 = G__12036;
s__12035 = G__12037;
continue;
}
} else
{return cljs.core.seq.call(null,ret__12034);
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
{if((function (){var or__3824__auto____12040 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____12040)
{return or__3824__auto____12040;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__12041 = x.lastIndexOf("/");
if((i__12041 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__12041 + 1));
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
if((function (){var or__3824__auto____12044 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____12044)
{return or__3824__auto____12044;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__12045 = x.lastIndexOf("/");
if((i__12045 > -1))
{return cljs.core.subs.call(null,x,2,i__12045);
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
var map__12052 = cljs.core.ObjMap.EMPTY;
var ks__12053 = cljs.core.seq.call(null,keys);
var vs__12054 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____12055 = ks__12053;
if(and__3822__auto____12055)
{return vs__12054;
} else
{return and__3822__auto____12055;
}
})())
{{
var G__12056 = cljs.core.assoc.call(null,map__12052,cljs.core.first.call(null,ks__12053),cljs.core.first.call(null,vs__12054));
var G__12057 = cljs.core.next.call(null,ks__12053);
var G__12058 = cljs.core.next.call(null,vs__12054);
map__12052 = G__12056;
ks__12053 = G__12057;
vs__12054 = G__12058;
continue;
}
} else
{return map__12052;
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
var G__12061__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12046_SHARP_,p2__12047_SHARP_){
return max_key.call(null,k,p1__12046_SHARP_,p2__12047_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__12061 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12061__delegate.call(this, k, x, y, more);
};
G__12061.cljs$lang$maxFixedArity = 3;
G__12061.cljs$lang$applyTo = (function (arglist__12062){
var k = cljs.core.first(arglist__12062);
var x = cljs.core.first(cljs.core.next(arglist__12062));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12062)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12062)));
return G__12061__delegate(k, x, y, more);
});
G__12061.cljs$lang$arity$variadic = G__12061__delegate;
return G__12061;
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
var G__12063__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12059_SHARP_,p2__12060_SHARP_){
return min_key.call(null,k,p1__12059_SHARP_,p2__12060_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__12063 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12063__delegate.call(this, k, x, y, more);
};
G__12063.cljs$lang$maxFixedArity = 3;
G__12063.cljs$lang$applyTo = (function (arglist__12064){
var k = cljs.core.first(arglist__12064);
var x = cljs.core.first(cljs.core.next(arglist__12064));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12064)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12064)));
return G__12063__delegate(k, x, y, more);
});
G__12063.cljs$lang$arity$variadic = G__12063__delegate;
return G__12063;
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
var temp__3974__auto____12067 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12067)
{var s__12068 = temp__3974__auto____12067;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__12068),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__12068)));
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
var temp__3974__auto____12071 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12071)
{var s__12072 = temp__3974__auto____12071;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__12072))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__12072),take_while.call(null,pred,cljs.core.rest.call(null,s__12072)));
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
var comp__12074 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__12074.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__12086 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____12087 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____12087))
{var vec__12088__12089 = temp__3974__auto____12087;
var e__12090 = cljs.core.nth.call(null,vec__12088__12089,0,null);
var s__12091 = vec__12088__12089;
if(cljs.core.truth_(include__12086.call(null,e__12090)))
{return s__12091;
} else
{return cljs.core.next.call(null,s__12091);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__12086,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____12092 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____12092))
{var vec__12093__12094 = temp__3974__auto____12092;
var e__12095 = cljs.core.nth.call(null,vec__12093__12094,0,null);
var s__12096 = vec__12093__12094;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__12095))?s__12096:cljs.core.next.call(null,s__12096)));
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
var include__12108 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____12109 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____12109))
{var vec__12110__12111 = temp__3974__auto____12109;
var e__12112 = cljs.core.nth.call(null,vec__12110__12111,0,null);
var s__12113 = vec__12110__12111;
if(cljs.core.truth_(include__12108.call(null,e__12112)))
{return s__12113;
} else
{return cljs.core.next.call(null,s__12113);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__12108,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____12114 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____12114))
{var vec__12115__12116 = temp__3974__auto____12114;
var e__12117 = cljs.core.nth.call(null,vec__12115__12116,0,null);
var s__12118 = vec__12115__12116;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__12117))?s__12118:cljs.core.next.call(null,s__12118)));
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
var this__12119 = this;
var h__2192__auto____12120 = this__12119.__hash;
if(!((h__2192__auto____12120 == null)))
{return h__2192__auto____12120;
} else
{var h__2192__auto____12121 = cljs.core.hash_coll.call(null,rng);
this__12119.__hash = h__2192__auto____12121;
return h__2192__auto____12121;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__12122 = this;
if((this__12122.step > 0))
{if(((this__12122.start + this__12122.step) < this__12122.end))
{return (new cljs.core.Range(this__12122.meta,(this__12122.start + this__12122.step),this__12122.end,this__12122.step,null));
} else
{return null;
}
} else
{if(((this__12122.start + this__12122.step) > this__12122.end))
{return (new cljs.core.Range(this__12122.meta,(this__12122.start + this__12122.step),this__12122.end,this__12122.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__12123 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__12124 = this;
var this__12125 = this;
return cljs.core.pr_str.call(null,this__12125);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__12126 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__12127 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__12128 = this;
if((this__12128.step > 0))
{if((this__12128.start < this__12128.end))
{return rng;
} else
{return null;
}
} else
{if((this__12128.start > this__12128.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__12129 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__12129.end - this__12129.start) / this__12129.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__12130 = this;
return this__12130.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__12131 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__12131.meta,(this__12131.start + this__12131.step),this__12131.end,this__12131.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__12132 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__12133 = this;
return (new cljs.core.Range(meta,this__12133.start,this__12133.end,this__12133.step,this__12133.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__12134 = this;
return this__12134.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__12135 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__12135.start + (n * this__12135.step));
} else
{if((function (){var and__3822__auto____12136 = (this__12135.start > this__12135.end);
if(and__3822__auto____12136)
{return (this__12135.step === 0);
} else
{return and__3822__auto____12136;
}
})())
{return this__12135.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__12137 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__12137.start + (n * this__12137.step));
} else
{if((function (){var and__3822__auto____12138 = (this__12137.start > this__12137.end);
if(and__3822__auto____12138)
{return (this__12137.step === 0);
} else
{return and__3822__auto____12138;
}
})())
{return this__12137.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__12139 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12139.meta);
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
var temp__3974__auto____12142 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12142)
{var s__12143 = temp__3974__auto____12142;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__12143),take_nth.call(null,n,cljs.core.drop.call(null,n,s__12143)));
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
var temp__3974__auto____12150 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12150)
{var s__12151 = temp__3974__auto____12150;
var fst__12152 = cljs.core.first.call(null,s__12151);
var fv__12153 = f.call(null,fst__12152);
var run__12154 = cljs.core.cons.call(null,fst__12152,cljs.core.take_while.call(null,(function (p1__12144_SHARP_){
return cljs.core._EQ_.call(null,fv__12153,f.call(null,p1__12144_SHARP_));
}),cljs.core.next.call(null,s__12151)));
return cljs.core.cons.call(null,run__12154,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__12154),s__12151))));
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
var temp__3971__auto____12169 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____12169)
{var s__12170 = temp__3971__auto____12169;
return reductions.call(null,f,cljs.core.first.call(null,s__12170),cljs.core.rest.call(null,s__12170));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____12171 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____12171)
{var s__12172 = temp__3974__auto____12171;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__12172)),cljs.core.rest.call(null,s__12172));
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
var G__12175 = null;
var G__12175__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__12175__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__12175__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__12175__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__12175__4 = (function() { 
var G__12176__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__12176 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12176__delegate.call(this, x, y, z, args);
};
G__12176.cljs$lang$maxFixedArity = 3;
G__12176.cljs$lang$applyTo = (function (arglist__12177){
var x = cljs.core.first(arglist__12177);
var y = cljs.core.first(cljs.core.next(arglist__12177));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12177)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12177)));
return G__12176__delegate(x, y, z, args);
});
G__12176.cljs$lang$arity$variadic = G__12176__delegate;
return G__12176;
})()
;
G__12175 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12175__0.call(this);
case 1:
return G__12175__1.call(this,x);
case 2:
return G__12175__2.call(this,x,y);
case 3:
return G__12175__3.call(this,x,y,z);
default:
return G__12175__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12175.cljs$lang$maxFixedArity = 3;
G__12175.cljs$lang$applyTo = G__12175__4.cljs$lang$applyTo;
return G__12175;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__12178 = null;
var G__12178__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__12178__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__12178__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__12178__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__12178__4 = (function() { 
var G__12179__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__12179 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12179__delegate.call(this, x, y, z, args);
};
G__12179.cljs$lang$maxFixedArity = 3;
G__12179.cljs$lang$applyTo = (function (arglist__12180){
var x = cljs.core.first(arglist__12180);
var y = cljs.core.first(cljs.core.next(arglist__12180));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12180)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12180)));
return G__12179__delegate(x, y, z, args);
});
G__12179.cljs$lang$arity$variadic = G__12179__delegate;
return G__12179;
})()
;
G__12178 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12178__0.call(this);
case 1:
return G__12178__1.call(this,x);
case 2:
return G__12178__2.call(this,x,y);
case 3:
return G__12178__3.call(this,x,y,z);
default:
return G__12178__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12178.cljs$lang$maxFixedArity = 3;
G__12178.cljs$lang$applyTo = G__12178__4.cljs$lang$applyTo;
return G__12178;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__12181 = null;
var G__12181__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__12181__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__12181__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__12181__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__12181__4 = (function() { 
var G__12182__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__12182 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12182__delegate.call(this, x, y, z, args);
};
G__12182.cljs$lang$maxFixedArity = 3;
G__12182.cljs$lang$applyTo = (function (arglist__12183){
var x = cljs.core.first(arglist__12183);
var y = cljs.core.first(cljs.core.next(arglist__12183));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12183)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12183)));
return G__12182__delegate(x, y, z, args);
});
G__12182.cljs$lang$arity$variadic = G__12182__delegate;
return G__12182;
})()
;
G__12181 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12181__0.call(this);
case 1:
return G__12181__1.call(this,x);
case 2:
return G__12181__2.call(this,x,y);
case 3:
return G__12181__3.call(this,x,y,z);
default:
return G__12181__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12181.cljs$lang$maxFixedArity = 3;
G__12181.cljs$lang$applyTo = G__12181__4.cljs$lang$applyTo;
return G__12181;
})()
});
var juxt__4 = (function() { 
var G__12184__delegate = function (f,g,h,fs){
var fs__12174 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__12185 = null;
var G__12185__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__12155_SHARP_,p2__12156_SHARP_){
return cljs.core.conj.call(null,p1__12155_SHARP_,p2__12156_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__12174);
});
var G__12185__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__12157_SHARP_,p2__12158_SHARP_){
return cljs.core.conj.call(null,p1__12157_SHARP_,p2__12158_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__12174);
});
var G__12185__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__12159_SHARP_,p2__12160_SHARP_){
return cljs.core.conj.call(null,p1__12159_SHARP_,p2__12160_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__12174);
});
var G__12185__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__12161_SHARP_,p2__12162_SHARP_){
return cljs.core.conj.call(null,p1__12161_SHARP_,p2__12162_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__12174);
});
var G__12185__4 = (function() { 
var G__12186__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__12163_SHARP_,p2__12164_SHARP_){
return cljs.core.conj.call(null,p1__12163_SHARP_,cljs.core.apply.call(null,p2__12164_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__12174);
};
var G__12186 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12186__delegate.call(this, x, y, z, args);
};
G__12186.cljs$lang$maxFixedArity = 3;
G__12186.cljs$lang$applyTo = (function (arglist__12187){
var x = cljs.core.first(arglist__12187);
var y = cljs.core.first(cljs.core.next(arglist__12187));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12187)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12187)));
return G__12186__delegate(x, y, z, args);
});
G__12186.cljs$lang$arity$variadic = G__12186__delegate;
return G__12186;
})()
;
G__12185 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12185__0.call(this);
case 1:
return G__12185__1.call(this,x);
case 2:
return G__12185__2.call(this,x,y);
case 3:
return G__12185__3.call(this,x,y,z);
default:
return G__12185__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12185.cljs$lang$maxFixedArity = 3;
G__12185.cljs$lang$applyTo = G__12185__4.cljs$lang$applyTo;
return G__12185;
})()
};
var G__12184 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12184__delegate.call(this, f, g, h, fs);
};
G__12184.cljs$lang$maxFixedArity = 3;
G__12184.cljs$lang$applyTo = (function (arglist__12188){
var f = cljs.core.first(arglist__12188);
var g = cljs.core.first(cljs.core.next(arglist__12188));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12188)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12188)));
return G__12184__delegate(f, g, h, fs);
});
G__12184.cljs$lang$arity$variadic = G__12184__delegate;
return G__12184;
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
var G__12191 = cljs.core.next.call(null,coll);
coll = G__12191;
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
if(cljs.core.truth_((function (){var and__3822__auto____12190 = cljs.core.seq.call(null,coll);
if(and__3822__auto____12190)
{return (n > 0);
} else
{return and__3822__auto____12190;
}
})()))
{{
var G__12192 = (n - 1);
var G__12193 = cljs.core.next.call(null,coll);
n = G__12192;
coll = G__12193;
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
var matches__12195 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__12195),s))
{if((cljs.core.count.call(null,matches__12195) === 1))
{return cljs.core.first.call(null,matches__12195);
} else
{return cljs.core.vec.call(null,matches__12195);
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
var matches__12197 = re.exec(s);
if((matches__12197 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__12197) === 1))
{return cljs.core.first.call(null,matches__12197);
} else
{return cljs.core.vec.call(null,matches__12197);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__12202 = cljs.core.re_find.call(null,re,s);
var match_idx__12203 = s.search(re);
var match_str__12204 = ((cljs.core.coll_QMARK_.call(null,match_data__12202))?cljs.core.first.call(null,match_data__12202):match_data__12202);
var post_match__12205 = cljs.core.subs.call(null,s,(match_idx__12203 + cljs.core.count.call(null,match_str__12204)));
if(cljs.core.truth_(match_data__12202))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__12202,re_seq.call(null,re,post_match__12205));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__12212__12213 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___12214 = cljs.core.nth.call(null,vec__12212__12213,0,null);
var flags__12215 = cljs.core.nth.call(null,vec__12212__12213,1,null);
var pattern__12216 = cljs.core.nth.call(null,vec__12212__12213,2,null);
return (new RegExp(pattern__12216,flags__12215));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__12206_SHARP_){
return print_one.call(null,p1__12206_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____12226 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____12226))
{var and__3822__auto____12230 = (function (){var G__12227__12228 = obj;
if(G__12227__12228)
{if((function (){var or__3824__auto____12229 = (G__12227__12228.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____12229)
{return or__3824__auto____12229;
} else
{return G__12227__12228.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__12227__12228.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__12227__12228);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__12227__12228);
}
})();
if(cljs.core.truth_(and__3822__auto____12230))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____12230;
}
} else
{return and__3822__auto____12226;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____12231 = !((obj == null));
if(and__3822__auto____12231)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____12231;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__12232__12233 = obj;
if(G__12232__12233)
{if((function (){var or__3824__auto____12234 = (G__12232__12233.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____12234)
{return or__3824__auto____12234;
} else
{return G__12232__12233.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__12232__12233.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__12232__12233);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__12232__12233);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__12254 = (new goog.string.StringBuffer());
var G__12255__12256 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__12255__12256)
{var string__12257 = cljs.core.first.call(null,G__12255__12256);
var G__12255__12258 = G__12255__12256;
while(true){
sb__12254.append(string__12257);
var temp__3974__auto____12259 = cljs.core.next.call(null,G__12255__12258);
if(temp__3974__auto____12259)
{var G__12255__12260 = temp__3974__auto____12259;
{
var G__12273 = cljs.core.first.call(null,G__12255__12260);
var G__12274 = G__12255__12260;
string__12257 = G__12273;
G__12255__12258 = G__12274;
continue;
}
} else
{}
break;
}
} else
{}
var G__12261__12262 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__12261__12262)
{var obj__12263 = cljs.core.first.call(null,G__12261__12262);
var G__12261__12264 = G__12261__12262;
while(true){
sb__12254.append(" ");
var G__12265__12266 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12263,opts));
if(G__12265__12266)
{var string__12267 = cljs.core.first.call(null,G__12265__12266);
var G__12265__12268 = G__12265__12266;
while(true){
sb__12254.append(string__12267);
var temp__3974__auto____12269 = cljs.core.next.call(null,G__12265__12268);
if(temp__3974__auto____12269)
{var G__12265__12270 = temp__3974__auto____12269;
{
var G__12275 = cljs.core.first.call(null,G__12265__12270);
var G__12276 = G__12265__12270;
string__12267 = G__12275;
G__12265__12268 = G__12276;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____12271 = cljs.core.next.call(null,G__12261__12264);
if(temp__3974__auto____12271)
{var G__12261__12272 = temp__3974__auto____12271;
{
var G__12277 = cljs.core.first.call(null,G__12261__12272);
var G__12278 = G__12261__12272;
obj__12263 = G__12277;
G__12261__12264 = G__12278;
continue;
}
} else
{}
break;
}
} else
{}
return sb__12254;
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
var sb__12280 = cljs.core.pr_sb.call(null,objs,opts);
sb__12280.append("\n");
return [cljs.core.str(sb__12280)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__12299__12300 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__12299__12300)
{var string__12301 = cljs.core.first.call(null,G__12299__12300);
var G__12299__12302 = G__12299__12300;
while(true){
cljs.core.string_print.call(null,string__12301);
var temp__3974__auto____12303 = cljs.core.next.call(null,G__12299__12302);
if(temp__3974__auto____12303)
{var G__12299__12304 = temp__3974__auto____12303;
{
var G__12317 = cljs.core.first.call(null,G__12299__12304);
var G__12318 = G__12299__12304;
string__12301 = G__12317;
G__12299__12302 = G__12318;
continue;
}
} else
{}
break;
}
} else
{}
var G__12305__12306 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__12305__12306)
{var obj__12307 = cljs.core.first.call(null,G__12305__12306);
var G__12305__12308 = G__12305__12306;
while(true){
cljs.core.string_print.call(null," ");
var G__12309__12310 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12307,opts));
if(G__12309__12310)
{var string__12311 = cljs.core.first.call(null,G__12309__12310);
var G__12309__12312 = G__12309__12310;
while(true){
cljs.core.string_print.call(null,string__12311);
var temp__3974__auto____12313 = cljs.core.next.call(null,G__12309__12312);
if(temp__3974__auto____12313)
{var G__12309__12314 = temp__3974__auto____12313;
{
var G__12319 = cljs.core.first.call(null,G__12309__12314);
var G__12320 = G__12309__12314;
string__12311 = G__12319;
G__12309__12312 = G__12320;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____12315 = cljs.core.next.call(null,G__12305__12308);
if(temp__3974__auto____12315)
{var G__12305__12316 = temp__3974__auto____12315;
{
var G__12321 = cljs.core.first.call(null,G__12305__12316);
var G__12322 = G__12305__12316;
obj__12307 = G__12321;
G__12305__12308 = G__12322;
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
pr_str.cljs$lang$applyTo = (function (arglist__12323){
var objs = cljs.core.seq(arglist__12323);;
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
prn_str.cljs$lang$applyTo = (function (arglist__12324){
var objs = cljs.core.seq(arglist__12324);;
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
pr.cljs$lang$applyTo = (function (arglist__12325){
var objs = cljs.core.seq(arglist__12325);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__12326){
var objs = cljs.core.seq(arglist__12326);;
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
print_str.cljs$lang$applyTo = (function (arglist__12327){
var objs = cljs.core.seq(arglist__12327);;
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
println.cljs$lang$applyTo = (function (arglist__12328){
var objs = cljs.core.seq(arglist__12328);;
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
println_str.cljs$lang$applyTo = (function (arglist__12329){
var objs = cljs.core.seq(arglist__12329);;
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
prn.cljs$lang$applyTo = (function (arglist__12330){
var objs = cljs.core.seq(arglist__12330);;
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
printf.cljs$lang$applyTo = (function (arglist__12331){
var fmt = cljs.core.first(arglist__12331);
var args = cljs.core.rest(arglist__12331);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__12332 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12332,"{",", ","}",opts,coll);
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
var pr_pair__12333 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12333,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__12334 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12334,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____12335 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____12335))
{var nspc__12336 = temp__3974__auto____12335;
return [cljs.core.str(nspc__12336),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____12337 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____12337))
{var nspc__12338 = temp__3974__auto____12337;
return [cljs.core.str(nspc__12338),cljs.core.str("/")].join('');
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
var pr_pair__12339 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12339,"{",", ","}",opts,coll);
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
var normalize__12341 = (function (n,len){
var ns__12340 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__12340) < len))
{{
var G__12343 = [cljs.core.str("0"),cljs.core.str(ns__12340)].join('');
ns__12340 = G__12343;
continue;
}
} else
{return ns__12340;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__12341.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__12341.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__12341.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__12341.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__12341.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__12341.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__12342 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12342,"{",", ","}",opts,coll);
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
var this__12344 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__12345 = this;
var G__12346__12347 = cljs.core.seq.call(null,this__12345.watches);
if(G__12346__12347)
{var G__12349__12351 = cljs.core.first.call(null,G__12346__12347);
var vec__12350__12352 = G__12349__12351;
var key__12353 = cljs.core.nth.call(null,vec__12350__12352,0,null);
var f__12354 = cljs.core.nth.call(null,vec__12350__12352,1,null);
var G__12346__12355 = G__12346__12347;
var G__12349__12356 = G__12349__12351;
var G__12346__12357 = G__12346__12355;
while(true){
var vec__12358__12359 = G__12349__12356;
var key__12360 = cljs.core.nth.call(null,vec__12358__12359,0,null);
var f__12361 = cljs.core.nth.call(null,vec__12358__12359,1,null);
var G__12346__12362 = G__12346__12357;
f__12361.call(null,key__12360,this$,oldval,newval);
var temp__3974__auto____12363 = cljs.core.next.call(null,G__12346__12362);
if(temp__3974__auto____12363)
{var G__12346__12364 = temp__3974__auto____12363;
{
var G__12371 = cljs.core.first.call(null,G__12346__12364);
var G__12372 = G__12346__12364;
G__12349__12356 = G__12371;
G__12346__12357 = G__12372;
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
var this__12365 = this;
return this$.watches = cljs.core.assoc.call(null,this__12365.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__12366 = this;
return this$.watches = cljs.core.dissoc.call(null,this__12366.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__12367 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__12367.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__12368 = this;
return this__12368.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__12369 = this;
return this__12369.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__12370 = this;
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
var G__12384__delegate = function (x,p__12373){
var map__12379__12380 = p__12373;
var map__12379__12381 = ((cljs.core.seq_QMARK_.call(null,map__12379__12380))?cljs.core.apply.call(null,cljs.core.hash_map,map__12379__12380):map__12379__12380);
var validator__12382 = cljs.core._lookup.call(null,map__12379__12381,"\uFDD0'validator",null);
var meta__12383 = cljs.core._lookup.call(null,map__12379__12381,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__12383,validator__12382,null));
};
var G__12384 = function (x,var_args){
var p__12373 = null;
if (goog.isDef(var_args)) {
  p__12373 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12384__delegate.call(this, x, p__12373);
};
G__12384.cljs$lang$maxFixedArity = 1;
G__12384.cljs$lang$applyTo = (function (arglist__12385){
var x = cljs.core.first(arglist__12385);
var p__12373 = cljs.core.rest(arglist__12385);
return G__12384__delegate(x, p__12373);
});
G__12384.cljs$lang$arity$variadic = G__12384__delegate;
return G__12384;
})()
;
atom = function(x,var_args){
var p__12373 = var_args;
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
var temp__3974__auto____12389 = a.validator;
if(cljs.core.truth_(temp__3974__auto____12389))
{var validate__12390 = temp__3974__auto____12389;
if(cljs.core.truth_(validate__12390.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))))].join('')));
}
} else
{}
var old_value__12391 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__12391,new_value);
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
var G__12392__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__12392 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12392__delegate.call(this, a, f, x, y, z, more);
};
G__12392.cljs$lang$maxFixedArity = 5;
G__12392.cljs$lang$applyTo = (function (arglist__12393){
var a = cljs.core.first(arglist__12393);
var f = cljs.core.first(cljs.core.next(arglist__12393));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12393)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12393))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12393)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12393)))));
return G__12392__delegate(a, f, x, y, z, more);
});
G__12392.cljs$lang$arity$variadic = G__12392__delegate;
return G__12392;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__12394){
var iref = cljs.core.first(arglist__12394);
var f = cljs.core.first(cljs.core.next(arglist__12394));
var args = cljs.core.rest(cljs.core.next(arglist__12394));
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
var this__12395 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__12395.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__12396 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__12396.state,(function (p__12397){
var map__12398__12399 = p__12397;
var map__12398__12400 = ((cljs.core.seq_QMARK_.call(null,map__12398__12399))?cljs.core.apply.call(null,cljs.core.hash_map,map__12398__12399):map__12398__12399);
var curr_state__12401 = map__12398__12400;
var done__12402 = cljs.core._lookup.call(null,map__12398__12400,"\uFDD0'done",null);
if(cljs.core.truth_(done__12402))
{return curr_state__12401;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__12396.f.call(null)});
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
var map__12423__12424 = options;
var map__12423__12425 = ((cljs.core.seq_QMARK_.call(null,map__12423__12424))?cljs.core.apply.call(null,cljs.core.hash_map,map__12423__12424):map__12423__12424);
var keywordize_keys__12426 = cljs.core._lookup.call(null,map__12423__12425,"\uFDD0'keywordize-keys",null);
var keyfn__12427 = (cljs.core.truth_(keywordize_keys__12426)?cljs.core.keyword:cljs.core.str);
var f__12442 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2462__auto____12441 = (function iter__12435(s__12436){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12436__12439 = s__12436;
while(true){
if(cljs.core.seq.call(null,s__12436__12439))
{var k__12440 = cljs.core.first.call(null,s__12436__12439);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__12427.call(null,k__12440),thisfn.call(null,(x[k__12440]))], true),iter__12435.call(null,cljs.core.rest.call(null,s__12436__12439)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2462__auto____12441.call(null,cljs.core.js_keys.call(null,x));
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
return f__12442.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__12443){
var x = cljs.core.first(arglist__12443);
var options = cljs.core.rest(arglist__12443);
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
var mem__12448 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__12452__delegate = function (args){
var temp__3971__auto____12449 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__12448),args,null);
if(cljs.core.truth_(temp__3971__auto____12449))
{var v__12450 = temp__3971__auto____12449;
return v__12450;
} else
{var ret__12451 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__12448,cljs.core.assoc,args,ret__12451);
return ret__12451;
}
};
var G__12452 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12452__delegate.call(this, args);
};
G__12452.cljs$lang$maxFixedArity = 0;
G__12452.cljs$lang$applyTo = (function (arglist__12453){
var args = cljs.core.seq(arglist__12453);;
return G__12452__delegate(args);
});
G__12452.cljs$lang$arity$variadic = G__12452__delegate;
return G__12452;
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
var ret__12455 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__12455))
{{
var G__12456 = ret__12455;
f = G__12456;
continue;
}
} else
{return ret__12455;
}
break;
}
});
var trampoline__2 = (function() { 
var G__12457__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__12457 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12457__delegate.call(this, f, args);
};
G__12457.cljs$lang$maxFixedArity = 1;
G__12457.cljs$lang$applyTo = (function (arglist__12458){
var f = cljs.core.first(arglist__12458);
var args = cljs.core.rest(arglist__12458);
return G__12457__delegate(f, args);
});
G__12457.cljs$lang$arity$variadic = G__12457__delegate;
return G__12457;
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
var k__12460 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__12460,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__12460,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____12469 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____12469)
{return or__3824__auto____12469;
} else
{var or__3824__auto____12470 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____12470)
{return or__3824__auto____12470;
} else
{var and__3822__auto____12471 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____12471)
{var and__3822__auto____12472 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____12472)
{var and__3822__auto____12473 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____12473)
{var ret__12474 = true;
var i__12475 = 0;
while(true){
if((function (){var or__3824__auto____12476 = cljs.core.not.call(null,ret__12474);
if(or__3824__auto____12476)
{return or__3824__auto____12476;
} else
{return (i__12475 === cljs.core.count.call(null,parent));
}
})())
{return ret__12474;
} else
{{
var G__12477 = isa_QMARK_.call(null,h,child.call(null,i__12475),parent.call(null,i__12475));
var G__12478 = (i__12475 + 1);
ret__12474 = G__12477;
i__12475 = G__12478;
continue;
}
}
break;
}
} else
{return and__3822__auto____12473;
}
} else
{return and__3822__auto____12472;
}
} else
{return and__3822__auto____12471;
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
var tp__12487 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__12488 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__12489 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__12490 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____12491 = ((cljs.core.contains_QMARK_.call(null,tp__12487.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__12489.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__12489.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__12487,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__12490.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__12488,parent,ta__12489),"\uFDD0'descendants":tf__12490.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__12489,tag,td__12488)});
})());
if(cljs.core.truth_(or__3824__auto____12491))
{return or__3824__auto____12491;
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
var parentMap__12496 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__12497 = (cljs.core.truth_(parentMap__12496.call(null,tag))?cljs.core.disj.call(null,parentMap__12496.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__12498 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__12497))?cljs.core.assoc.call(null,parentMap__12496,tag,childsParents__12497):cljs.core.dissoc.call(null,parentMap__12496,tag));
var deriv_seq__12499 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__12479_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__12479_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__12479_SHARP_),cljs.core.second.call(null,p1__12479_SHARP_)));
}),cljs.core.seq.call(null,newParents__12498)));
if(cljs.core.contains_QMARK_.call(null,parentMap__12496.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__12480_SHARP_,p2__12481_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__12480_SHARP_,p2__12481_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__12499));
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
var xprefs__12507 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____12509 = (cljs.core.truth_((function (){var and__3822__auto____12508 = xprefs__12507;
if(cljs.core.truth_(and__3822__auto____12508))
{return xprefs__12507.call(null,y);
} else
{return and__3822__auto____12508;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____12509))
{return or__3824__auto____12509;
} else
{var or__3824__auto____12511 = (function (){var ps__12510 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__12510) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__12510),prefer_table)))
{} else
{}
{
var G__12514 = cljs.core.rest.call(null,ps__12510);
ps__12510 = G__12514;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____12511))
{return or__3824__auto____12511;
} else
{var or__3824__auto____12513 = (function (){var ps__12512 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__12512) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__12512),y,prefer_table)))
{} else
{}
{
var G__12515 = cljs.core.rest.call(null,ps__12512);
ps__12512 = G__12515;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____12513))
{return or__3824__auto____12513;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____12517 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____12517))
{return or__3824__auto____12517;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__12535 = cljs.core.reduce.call(null,(function (be,p__12527){
var vec__12528__12529 = p__12527;
var k__12530 = cljs.core.nth.call(null,vec__12528__12529,0,null);
var ___12531 = cljs.core.nth.call(null,vec__12528__12529,1,null);
var e__12532 = vec__12528__12529;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__12530))
{var be2__12534 = (cljs.core.truth_((function (){var or__3824__auto____12533 = (be == null);
if(or__3824__auto____12533)
{return or__3824__auto____12533;
} else
{return cljs.core.dominates.call(null,k__12530,cljs.core.first.call(null,be),prefer_table);
}
})())?e__12532:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__12534),k__12530,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__12530),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__12534)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__12534;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__12535))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__12535));
return cljs.core.second.call(null,best_entry__12535);
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
if((function (){var and__3822__auto____12540 = mf;
if(and__3822__auto____12540)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____12540;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2363__auto____12541 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12542 = (cljs.core._reset[goog.typeOf(x__2363__auto____12541)]);
if(or__3824__auto____12542)
{return or__3824__auto____12542;
} else
{var or__3824__auto____12543 = (cljs.core._reset["_"]);
if(or__3824__auto____12543)
{return or__3824__auto____12543;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____12548 = mf;
if(and__3822__auto____12548)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____12548;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2363__auto____12549 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12550 = (cljs.core._add_method[goog.typeOf(x__2363__auto____12549)]);
if(or__3824__auto____12550)
{return or__3824__auto____12550;
} else
{var or__3824__auto____12551 = (cljs.core._add_method["_"]);
if(or__3824__auto____12551)
{return or__3824__auto____12551;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____12556 = mf;
if(and__3822__auto____12556)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____12556;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2363__auto____12557 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12558 = (cljs.core._remove_method[goog.typeOf(x__2363__auto____12557)]);
if(or__3824__auto____12558)
{return or__3824__auto____12558;
} else
{var or__3824__auto____12559 = (cljs.core._remove_method["_"]);
if(or__3824__auto____12559)
{return or__3824__auto____12559;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____12564 = mf;
if(and__3822__auto____12564)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____12564;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2363__auto____12565 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12566 = (cljs.core._prefer_method[goog.typeOf(x__2363__auto____12565)]);
if(or__3824__auto____12566)
{return or__3824__auto____12566;
} else
{var or__3824__auto____12567 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____12567)
{return or__3824__auto____12567;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____12572 = mf;
if(and__3822__auto____12572)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____12572;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2363__auto____12573 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12574 = (cljs.core._get_method[goog.typeOf(x__2363__auto____12573)]);
if(or__3824__auto____12574)
{return or__3824__auto____12574;
} else
{var or__3824__auto____12575 = (cljs.core._get_method["_"]);
if(or__3824__auto____12575)
{return or__3824__auto____12575;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____12580 = mf;
if(and__3822__auto____12580)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____12580;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2363__auto____12581 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12582 = (cljs.core._methods[goog.typeOf(x__2363__auto____12581)]);
if(or__3824__auto____12582)
{return or__3824__auto____12582;
} else
{var or__3824__auto____12583 = (cljs.core._methods["_"]);
if(or__3824__auto____12583)
{return or__3824__auto____12583;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____12588 = mf;
if(and__3822__auto____12588)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____12588;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2363__auto____12589 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12590 = (cljs.core._prefers[goog.typeOf(x__2363__auto____12589)]);
if(or__3824__auto____12590)
{return or__3824__auto____12590;
} else
{var or__3824__auto____12591 = (cljs.core._prefers["_"]);
if(or__3824__auto____12591)
{return or__3824__auto____12591;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____12596 = mf;
if(and__3822__auto____12596)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____12596;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2363__auto____12597 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____12598 = (cljs.core._dispatch[goog.typeOf(x__2363__auto____12597)]);
if(or__3824__auto____12598)
{return or__3824__auto____12598;
} else
{var or__3824__auto____12599 = (cljs.core._dispatch["_"]);
if(or__3824__auto____12599)
{return or__3824__auto____12599;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__12602 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__12603 = cljs.core._get_method.call(null,mf,dispatch_val__12602);
if(cljs.core.truth_(target_fn__12603))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__12602)].join('')));
}
return cljs.core.apply.call(null,target_fn__12603,args);
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
var this__12604 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__12605 = this;
cljs.core.swap_BANG_.call(null,this__12605.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12605.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12605.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12605.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__12606 = this;
cljs.core.swap_BANG_.call(null,this__12606.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__12606.method_cache,this__12606.method_table,this__12606.cached_hierarchy,this__12606.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__12607 = this;
cljs.core.swap_BANG_.call(null,this__12607.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__12607.method_cache,this__12607.method_table,this__12607.cached_hierarchy,this__12607.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__12608 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__12608.cached_hierarchy),cljs.core.deref.call(null,this__12608.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__12608.method_cache,this__12608.method_table,this__12608.cached_hierarchy,this__12608.hierarchy);
}
var temp__3971__auto____12609 = cljs.core.deref.call(null,this__12608.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____12609))
{var target_fn__12610 = temp__3971__auto____12609;
return target_fn__12610;
} else
{var temp__3971__auto____12611 = cljs.core.find_and_cache_best_method.call(null,this__12608.name,dispatch_val,this__12608.hierarchy,this__12608.method_table,this__12608.prefer_table,this__12608.method_cache,this__12608.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____12611))
{var target_fn__12612 = temp__3971__auto____12611;
return target_fn__12612;
} else
{return cljs.core.deref.call(null,this__12608.method_table).call(null,this__12608.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__12613 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__12613.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__12613.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__12613.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__12613.method_cache,this__12613.method_table,this__12613.cached_hierarchy,this__12613.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__12614 = this;
return cljs.core.deref.call(null,this__12614.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__12615 = this;
return cljs.core.deref.call(null,this__12615.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__12616 = this;
return cljs.core.do_dispatch.call(null,mf,this__12616.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__12618__delegate = function (_,args){
var self__12617 = this;
return cljs.core._dispatch.call(null,self__12617,args);
};
var G__12618 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12618__delegate.call(this, _, args);
};
G__12618.cljs$lang$maxFixedArity = 1;
G__12618.cljs$lang$applyTo = (function (arglist__12619){
var _ = cljs.core.first(arglist__12619);
var args = cljs.core.rest(arglist__12619);
return G__12618__delegate(_, args);
});
G__12618.cljs$lang$arity$variadic = G__12618__delegate;
return G__12618;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__12620 = this;
return cljs.core._dispatch.call(null,self__12620,args);
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
var this__12621 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_12623,_){
var this__12622 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__12622.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__12624 = this;
var and__3822__auto____12625 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____12625)
{return (this__12624.uuid === other.uuid);
} else
{return and__3822__auto____12625;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__12626 = this;
var this__12627 = this;
return cljs.core.pr_str.call(null,this__12627);
});
cljs.core.UUID;
