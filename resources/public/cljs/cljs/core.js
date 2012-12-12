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
var x__8687 = (((x == null))?null:x);
if((p[goog.typeOf(x__8687)]))
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
var G__8688__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__8688 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8688__delegate.call(this, array, i, idxs);
};
G__8688.cljs$lang$maxFixedArity = 2;
G__8688.cljs$lang$applyTo = (function (arglist__8689){
var array = cljs.core.first(arglist__8689);
var i = cljs.core.first(cljs.core.next(arglist__8689));
var idxs = cljs.core.rest(cljs.core.next(arglist__8689));
return G__8688__delegate(array, i, idxs);
});
G__8688.cljs$lang$arity$variadic = G__8688__delegate;
return G__8688;
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
if((function (){var and__3937__auto____8774 = this$;
if(and__3937__auto____8774)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3937__auto____8774;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2390__auto____8775 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8776 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8775)]);
if(or__3939__auto____8776)
{return or__3939__auto____8776;
} else
{var or__3939__auto____8777 = (cljs.core._invoke["_"]);
if(or__3939__auto____8777)
{return or__3939__auto____8777;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3937__auto____8778 = this$;
if(and__3937__auto____8778)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3937__auto____8778;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2390__auto____8779 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8780 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8779)]);
if(or__3939__auto____8780)
{return or__3939__auto____8780;
} else
{var or__3939__auto____8781 = (cljs.core._invoke["_"]);
if(or__3939__auto____8781)
{return or__3939__auto____8781;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3937__auto____8782 = this$;
if(and__3937__auto____8782)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3937__auto____8782;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2390__auto____8783 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8784 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8783)]);
if(or__3939__auto____8784)
{return or__3939__auto____8784;
} else
{var or__3939__auto____8785 = (cljs.core._invoke["_"]);
if(or__3939__auto____8785)
{return or__3939__auto____8785;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3937__auto____8786 = this$;
if(and__3937__auto____8786)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3937__auto____8786;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2390__auto____8787 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8788 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8787)]);
if(or__3939__auto____8788)
{return or__3939__auto____8788;
} else
{var or__3939__auto____8789 = (cljs.core._invoke["_"]);
if(or__3939__auto____8789)
{return or__3939__auto____8789;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3937__auto____8790 = this$;
if(and__3937__auto____8790)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3937__auto____8790;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2390__auto____8791 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8792 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8791)]);
if(or__3939__auto____8792)
{return or__3939__auto____8792;
} else
{var or__3939__auto____8793 = (cljs.core._invoke["_"]);
if(or__3939__auto____8793)
{return or__3939__auto____8793;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3937__auto____8794 = this$;
if(and__3937__auto____8794)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3937__auto____8794;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2390__auto____8795 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8796 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8795)]);
if(or__3939__auto____8796)
{return or__3939__auto____8796;
} else
{var or__3939__auto____8797 = (cljs.core._invoke["_"]);
if(or__3939__auto____8797)
{return or__3939__auto____8797;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3937__auto____8798 = this$;
if(and__3937__auto____8798)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3937__auto____8798;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2390__auto____8799 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8800 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8799)]);
if(or__3939__auto____8800)
{return or__3939__auto____8800;
} else
{var or__3939__auto____8801 = (cljs.core._invoke["_"]);
if(or__3939__auto____8801)
{return or__3939__auto____8801;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3937__auto____8802 = this$;
if(and__3937__auto____8802)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3937__auto____8802;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2390__auto____8803 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8804 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8803)]);
if(or__3939__auto____8804)
{return or__3939__auto____8804;
} else
{var or__3939__auto____8805 = (cljs.core._invoke["_"]);
if(or__3939__auto____8805)
{return or__3939__auto____8805;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3937__auto____8806 = this$;
if(and__3937__auto____8806)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3937__auto____8806;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2390__auto____8807 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8808 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8807)]);
if(or__3939__auto____8808)
{return or__3939__auto____8808;
} else
{var or__3939__auto____8809 = (cljs.core._invoke["_"]);
if(or__3939__auto____8809)
{return or__3939__auto____8809;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3937__auto____8810 = this$;
if(and__3937__auto____8810)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3937__auto____8810;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2390__auto____8811 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8812 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8811)]);
if(or__3939__auto____8812)
{return or__3939__auto____8812;
} else
{var or__3939__auto____8813 = (cljs.core._invoke["_"]);
if(or__3939__auto____8813)
{return or__3939__auto____8813;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3937__auto____8814 = this$;
if(and__3937__auto____8814)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3937__auto____8814;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2390__auto____8815 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8816 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8815)]);
if(or__3939__auto____8816)
{return or__3939__auto____8816;
} else
{var or__3939__auto____8817 = (cljs.core._invoke["_"]);
if(or__3939__auto____8817)
{return or__3939__auto____8817;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3937__auto____8818 = this$;
if(and__3937__auto____8818)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3937__auto____8818;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2390__auto____8819 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8820 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8819)]);
if(or__3939__auto____8820)
{return or__3939__auto____8820;
} else
{var or__3939__auto____8821 = (cljs.core._invoke["_"]);
if(or__3939__auto____8821)
{return or__3939__auto____8821;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3937__auto____8822 = this$;
if(and__3937__auto____8822)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3937__auto____8822;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2390__auto____8823 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8824 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8823)]);
if(or__3939__auto____8824)
{return or__3939__auto____8824;
} else
{var or__3939__auto____8825 = (cljs.core._invoke["_"]);
if(or__3939__auto____8825)
{return or__3939__auto____8825;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3937__auto____8826 = this$;
if(and__3937__auto____8826)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3937__auto____8826;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2390__auto____8827 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8828 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8827)]);
if(or__3939__auto____8828)
{return or__3939__auto____8828;
} else
{var or__3939__auto____8829 = (cljs.core._invoke["_"]);
if(or__3939__auto____8829)
{return or__3939__auto____8829;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3937__auto____8830 = this$;
if(and__3937__auto____8830)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3937__auto____8830;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2390__auto____8831 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8832 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8831)]);
if(or__3939__auto____8832)
{return or__3939__auto____8832;
} else
{var or__3939__auto____8833 = (cljs.core._invoke["_"]);
if(or__3939__auto____8833)
{return or__3939__auto____8833;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3937__auto____8834 = this$;
if(and__3937__auto____8834)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3937__auto____8834;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2390__auto____8835 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8836 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8835)]);
if(or__3939__auto____8836)
{return or__3939__auto____8836;
} else
{var or__3939__auto____8837 = (cljs.core._invoke["_"]);
if(or__3939__auto____8837)
{return or__3939__auto____8837;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3937__auto____8838 = this$;
if(and__3937__auto____8838)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3937__auto____8838;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2390__auto____8839 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8840 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8839)]);
if(or__3939__auto____8840)
{return or__3939__auto____8840;
} else
{var or__3939__auto____8841 = (cljs.core._invoke["_"]);
if(or__3939__auto____8841)
{return or__3939__auto____8841;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3937__auto____8842 = this$;
if(and__3937__auto____8842)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3937__auto____8842;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2390__auto____8843 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8844 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8843)]);
if(or__3939__auto____8844)
{return or__3939__auto____8844;
} else
{var or__3939__auto____8845 = (cljs.core._invoke["_"]);
if(or__3939__auto____8845)
{return or__3939__auto____8845;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3937__auto____8846 = this$;
if(and__3937__auto____8846)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3937__auto____8846;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2390__auto____8847 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8848 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8847)]);
if(or__3939__auto____8848)
{return or__3939__auto____8848;
} else
{var or__3939__auto____8849 = (cljs.core._invoke["_"]);
if(or__3939__auto____8849)
{return or__3939__auto____8849;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3937__auto____8850 = this$;
if(and__3937__auto____8850)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3937__auto____8850;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2390__auto____8851 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8852 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8851)]);
if(or__3939__auto____8852)
{return or__3939__auto____8852;
} else
{var or__3939__auto____8853 = (cljs.core._invoke["_"]);
if(or__3939__auto____8853)
{return or__3939__auto____8853;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3937__auto____8854 = this$;
if(and__3937__auto____8854)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3937__auto____8854;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2390__auto____8855 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____8856 = (cljs.core._invoke[goog.typeOf(x__2390__auto____8855)]);
if(or__3939__auto____8856)
{return or__3939__auto____8856;
} else
{var or__3939__auto____8857 = (cljs.core._invoke["_"]);
if(or__3939__auto____8857)
{return or__3939__auto____8857;
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
if((function (){var and__3937__auto____8862 = coll;
if(and__3937__auto____8862)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3937__auto____8862;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2390__auto____8863 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8864 = (cljs.core._count[goog.typeOf(x__2390__auto____8863)]);
if(or__3939__auto____8864)
{return or__3939__auto____8864;
} else
{var or__3939__auto____8865 = (cljs.core._count["_"]);
if(or__3939__auto____8865)
{return or__3939__auto____8865;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3937__auto____8870 = coll;
if(and__3937__auto____8870)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3937__auto____8870;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2390__auto____8871 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8872 = (cljs.core._empty[goog.typeOf(x__2390__auto____8871)]);
if(or__3939__auto____8872)
{return or__3939__auto____8872;
} else
{var or__3939__auto____8873 = (cljs.core._empty["_"]);
if(or__3939__auto____8873)
{return or__3939__auto____8873;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3937__auto____8878 = coll;
if(and__3937__auto____8878)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3937__auto____8878;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2390__auto____8879 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8880 = (cljs.core._conj[goog.typeOf(x__2390__auto____8879)]);
if(or__3939__auto____8880)
{return or__3939__auto____8880;
} else
{var or__3939__auto____8881 = (cljs.core._conj["_"]);
if(or__3939__auto____8881)
{return or__3939__auto____8881;
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
if((function (){var and__3937__auto____8890 = coll;
if(and__3937__auto____8890)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3937__auto____8890;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2390__auto____8891 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8892 = (cljs.core._nth[goog.typeOf(x__2390__auto____8891)]);
if(or__3939__auto____8892)
{return or__3939__auto____8892;
} else
{var or__3939__auto____8893 = (cljs.core._nth["_"]);
if(or__3939__auto____8893)
{return or__3939__auto____8893;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3937__auto____8894 = coll;
if(and__3937__auto____8894)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3937__auto____8894;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2390__auto____8895 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8896 = (cljs.core._nth[goog.typeOf(x__2390__auto____8895)]);
if(or__3939__auto____8896)
{return or__3939__auto____8896;
} else
{var or__3939__auto____8897 = (cljs.core._nth["_"]);
if(or__3939__auto____8897)
{return or__3939__auto____8897;
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
if((function (){var and__3937__auto____8902 = coll;
if(and__3937__auto____8902)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3937__auto____8902;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2390__auto____8903 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8904 = (cljs.core._first[goog.typeOf(x__2390__auto____8903)]);
if(or__3939__auto____8904)
{return or__3939__auto____8904;
} else
{var or__3939__auto____8905 = (cljs.core._first["_"]);
if(or__3939__auto____8905)
{return or__3939__auto____8905;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3937__auto____8910 = coll;
if(and__3937__auto____8910)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3937__auto____8910;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2390__auto____8911 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8912 = (cljs.core._rest[goog.typeOf(x__2390__auto____8911)]);
if(or__3939__auto____8912)
{return or__3939__auto____8912;
} else
{var or__3939__auto____8913 = (cljs.core._rest["_"]);
if(or__3939__auto____8913)
{return or__3939__auto____8913;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3937__auto____8918 = coll;
if(and__3937__auto____8918)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3937__auto____8918;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2390__auto____8919 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8920 = (cljs.core._next[goog.typeOf(x__2390__auto____8919)]);
if(or__3939__auto____8920)
{return or__3939__auto____8920;
} else
{var or__3939__auto____8921 = (cljs.core._next["_"]);
if(or__3939__auto____8921)
{return or__3939__auto____8921;
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
if((function (){var and__3937__auto____8930 = o;
if(and__3937__auto____8930)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3937__auto____8930;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2390__auto____8931 = (((o == null))?null:o);
return (function (){var or__3939__auto____8932 = (cljs.core._lookup[goog.typeOf(x__2390__auto____8931)]);
if(or__3939__auto____8932)
{return or__3939__auto____8932;
} else
{var or__3939__auto____8933 = (cljs.core._lookup["_"]);
if(or__3939__auto____8933)
{return or__3939__auto____8933;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3937__auto____8934 = o;
if(and__3937__auto____8934)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3937__auto____8934;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2390__auto____8935 = (((o == null))?null:o);
return (function (){var or__3939__auto____8936 = (cljs.core._lookup[goog.typeOf(x__2390__auto____8935)]);
if(or__3939__auto____8936)
{return or__3939__auto____8936;
} else
{var or__3939__auto____8937 = (cljs.core._lookup["_"]);
if(or__3939__auto____8937)
{return or__3939__auto____8937;
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
if((function (){var and__3937__auto____8942 = coll;
if(and__3937__auto____8942)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3937__auto____8942;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2390__auto____8943 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8944 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2390__auto____8943)]);
if(or__3939__auto____8944)
{return or__3939__auto____8944;
} else
{var or__3939__auto____8945 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3939__auto____8945)
{return or__3939__auto____8945;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3937__auto____8950 = coll;
if(and__3937__auto____8950)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3937__auto____8950;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2390__auto____8951 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8952 = (cljs.core._assoc[goog.typeOf(x__2390__auto____8951)]);
if(or__3939__auto____8952)
{return or__3939__auto____8952;
} else
{var or__3939__auto____8953 = (cljs.core._assoc["_"]);
if(or__3939__auto____8953)
{return or__3939__auto____8953;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3937__auto____8958 = coll;
if(and__3937__auto____8958)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3937__auto____8958;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2390__auto____8959 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8960 = (cljs.core._dissoc[goog.typeOf(x__2390__auto____8959)]);
if(or__3939__auto____8960)
{return or__3939__auto____8960;
} else
{var or__3939__auto____8961 = (cljs.core._dissoc["_"]);
if(or__3939__auto____8961)
{return or__3939__auto____8961;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3937__auto____8966 = coll;
if(and__3937__auto____8966)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3937__auto____8966;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2390__auto____8967 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8968 = (cljs.core._key[goog.typeOf(x__2390__auto____8967)]);
if(or__3939__auto____8968)
{return or__3939__auto____8968;
} else
{var or__3939__auto____8969 = (cljs.core._key["_"]);
if(or__3939__auto____8969)
{return or__3939__auto____8969;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3937__auto____8974 = coll;
if(and__3937__auto____8974)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3937__auto____8974;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2390__auto____8975 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8976 = (cljs.core._val[goog.typeOf(x__2390__auto____8975)]);
if(or__3939__auto____8976)
{return or__3939__auto____8976;
} else
{var or__3939__auto____8977 = (cljs.core._val["_"]);
if(or__3939__auto____8977)
{return or__3939__auto____8977;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3937__auto____8982 = coll;
if(and__3937__auto____8982)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3937__auto____8982;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2390__auto____8983 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8984 = (cljs.core._disjoin[goog.typeOf(x__2390__auto____8983)]);
if(or__3939__auto____8984)
{return or__3939__auto____8984;
} else
{var or__3939__auto____8985 = (cljs.core._disjoin["_"]);
if(or__3939__auto____8985)
{return or__3939__auto____8985;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3937__auto____8990 = coll;
if(and__3937__auto____8990)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3937__auto____8990;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2390__auto____8991 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____8992 = (cljs.core._peek[goog.typeOf(x__2390__auto____8991)]);
if(or__3939__auto____8992)
{return or__3939__auto____8992;
} else
{var or__3939__auto____8993 = (cljs.core._peek["_"]);
if(or__3939__auto____8993)
{return or__3939__auto____8993;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3937__auto____8998 = coll;
if(and__3937__auto____8998)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3937__auto____8998;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2390__auto____8999 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9000 = (cljs.core._pop[goog.typeOf(x__2390__auto____8999)]);
if(or__3939__auto____9000)
{return or__3939__auto____9000;
} else
{var or__3939__auto____9001 = (cljs.core._pop["_"]);
if(or__3939__auto____9001)
{return or__3939__auto____9001;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3937__auto____9006 = coll;
if(and__3937__auto____9006)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3937__auto____9006;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2390__auto____9007 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9008 = (cljs.core._assoc_n[goog.typeOf(x__2390__auto____9007)]);
if(or__3939__auto____9008)
{return or__3939__auto____9008;
} else
{var or__3939__auto____9009 = (cljs.core._assoc_n["_"]);
if(or__3939__auto____9009)
{return or__3939__auto____9009;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3937__auto____9014 = o;
if(and__3937__auto____9014)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3937__auto____9014;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2390__auto____9015 = (((o == null))?null:o);
return (function (){var or__3939__auto____9016 = (cljs.core._deref[goog.typeOf(x__2390__auto____9015)]);
if(or__3939__auto____9016)
{return or__3939__auto____9016;
} else
{var or__3939__auto____9017 = (cljs.core._deref["_"]);
if(or__3939__auto____9017)
{return or__3939__auto____9017;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3937__auto____9022 = o;
if(and__3937__auto____9022)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3937__auto____9022;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2390__auto____9023 = (((o == null))?null:o);
return (function (){var or__3939__auto____9024 = (cljs.core._deref_with_timeout[goog.typeOf(x__2390__auto____9023)]);
if(or__3939__auto____9024)
{return or__3939__auto____9024;
} else
{var or__3939__auto____9025 = (cljs.core._deref_with_timeout["_"]);
if(or__3939__auto____9025)
{return or__3939__auto____9025;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3937__auto____9030 = o;
if(and__3937__auto____9030)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3937__auto____9030;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2390__auto____9031 = (((o == null))?null:o);
return (function (){var or__3939__auto____9032 = (cljs.core._meta[goog.typeOf(x__2390__auto____9031)]);
if(or__3939__auto____9032)
{return or__3939__auto____9032;
} else
{var or__3939__auto____9033 = (cljs.core._meta["_"]);
if(or__3939__auto____9033)
{return or__3939__auto____9033;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3937__auto____9038 = o;
if(and__3937__auto____9038)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3937__auto____9038;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2390__auto____9039 = (((o == null))?null:o);
return (function (){var or__3939__auto____9040 = (cljs.core._with_meta[goog.typeOf(x__2390__auto____9039)]);
if(or__3939__auto____9040)
{return or__3939__auto____9040;
} else
{var or__3939__auto____9041 = (cljs.core._with_meta["_"]);
if(or__3939__auto____9041)
{return or__3939__auto____9041;
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
if((function (){var and__3937__auto____9050 = coll;
if(and__3937__auto____9050)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3937__auto____9050;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2390__auto____9051 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9052 = (cljs.core._reduce[goog.typeOf(x__2390__auto____9051)]);
if(or__3939__auto____9052)
{return or__3939__auto____9052;
} else
{var or__3939__auto____9053 = (cljs.core._reduce["_"]);
if(or__3939__auto____9053)
{return or__3939__auto____9053;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3937__auto____9054 = coll;
if(and__3937__auto____9054)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3937__auto____9054;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2390__auto____9055 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9056 = (cljs.core._reduce[goog.typeOf(x__2390__auto____9055)]);
if(or__3939__auto____9056)
{return or__3939__auto____9056;
} else
{var or__3939__auto____9057 = (cljs.core._reduce["_"]);
if(or__3939__auto____9057)
{return or__3939__auto____9057;
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
if((function (){var and__3937__auto____9062 = coll;
if(and__3937__auto____9062)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3937__auto____9062;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2390__auto____9063 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9064 = (cljs.core._kv_reduce[goog.typeOf(x__2390__auto____9063)]);
if(or__3939__auto____9064)
{return or__3939__auto____9064;
} else
{var or__3939__auto____9065 = (cljs.core._kv_reduce["_"]);
if(or__3939__auto____9065)
{return or__3939__auto____9065;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3937__auto____9070 = o;
if(and__3937__auto____9070)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3937__auto____9070;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2390__auto____9071 = (((o == null))?null:o);
return (function (){var or__3939__auto____9072 = (cljs.core._equiv[goog.typeOf(x__2390__auto____9071)]);
if(or__3939__auto____9072)
{return or__3939__auto____9072;
} else
{var or__3939__auto____9073 = (cljs.core._equiv["_"]);
if(or__3939__auto____9073)
{return or__3939__auto____9073;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3937__auto____9078 = o;
if(and__3937__auto____9078)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3937__auto____9078;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2390__auto____9079 = (((o == null))?null:o);
return (function (){var or__3939__auto____9080 = (cljs.core._hash[goog.typeOf(x__2390__auto____9079)]);
if(or__3939__auto____9080)
{return or__3939__auto____9080;
} else
{var or__3939__auto____9081 = (cljs.core._hash["_"]);
if(or__3939__auto____9081)
{return or__3939__auto____9081;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3937__auto____9086 = o;
if(and__3937__auto____9086)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3937__auto____9086;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2390__auto____9087 = (((o == null))?null:o);
return (function (){var or__3939__auto____9088 = (cljs.core._seq[goog.typeOf(x__2390__auto____9087)]);
if(or__3939__auto____9088)
{return or__3939__auto____9088;
} else
{var or__3939__auto____9089 = (cljs.core._seq["_"]);
if(or__3939__auto____9089)
{return or__3939__auto____9089;
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
if((function (){var and__3937__auto____9094 = coll;
if(and__3937__auto____9094)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3937__auto____9094;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2390__auto____9095 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9096 = (cljs.core._rseq[goog.typeOf(x__2390__auto____9095)]);
if(or__3939__auto____9096)
{return or__3939__auto____9096;
} else
{var or__3939__auto____9097 = (cljs.core._rseq["_"]);
if(or__3939__auto____9097)
{return or__3939__auto____9097;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3937__auto____9102 = coll;
if(and__3937__auto____9102)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3937__auto____9102;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2390__auto____9103 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9104 = (cljs.core._sorted_seq[goog.typeOf(x__2390__auto____9103)]);
if(or__3939__auto____9104)
{return or__3939__auto____9104;
} else
{var or__3939__auto____9105 = (cljs.core._sorted_seq["_"]);
if(or__3939__auto____9105)
{return or__3939__auto____9105;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3937__auto____9110 = coll;
if(and__3937__auto____9110)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3937__auto____9110;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2390__auto____9111 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9112 = (cljs.core._sorted_seq_from[goog.typeOf(x__2390__auto____9111)]);
if(or__3939__auto____9112)
{return or__3939__auto____9112;
} else
{var or__3939__auto____9113 = (cljs.core._sorted_seq_from["_"]);
if(or__3939__auto____9113)
{return or__3939__auto____9113;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3937__auto____9118 = coll;
if(and__3937__auto____9118)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3937__auto____9118;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2390__auto____9119 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9120 = (cljs.core._entry_key[goog.typeOf(x__2390__auto____9119)]);
if(or__3939__auto____9120)
{return or__3939__auto____9120;
} else
{var or__3939__auto____9121 = (cljs.core._entry_key["_"]);
if(or__3939__auto____9121)
{return or__3939__auto____9121;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3937__auto____9126 = coll;
if(and__3937__auto____9126)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3937__auto____9126;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2390__auto____9127 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9128 = (cljs.core._comparator[goog.typeOf(x__2390__auto____9127)]);
if(or__3939__auto____9128)
{return or__3939__auto____9128;
} else
{var or__3939__auto____9129 = (cljs.core._comparator["_"]);
if(or__3939__auto____9129)
{return or__3939__auto____9129;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3937__auto____9134 = o;
if(and__3937__auto____9134)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3937__auto____9134;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2390__auto____9135 = (((o == null))?null:o);
return (function (){var or__3939__auto____9136 = (cljs.core._pr_seq[goog.typeOf(x__2390__auto____9135)]);
if(or__3939__auto____9136)
{return or__3939__auto____9136;
} else
{var or__3939__auto____9137 = (cljs.core._pr_seq["_"]);
if(or__3939__auto____9137)
{return or__3939__auto____9137;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3937__auto____9142 = d;
if(and__3937__auto____9142)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3937__auto____9142;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2390__auto____9143 = (((d == null))?null:d);
return (function (){var or__3939__auto____9144 = (cljs.core._realized_QMARK_[goog.typeOf(x__2390__auto____9143)]);
if(or__3939__auto____9144)
{return or__3939__auto____9144;
} else
{var or__3939__auto____9145 = (cljs.core._realized_QMARK_["_"]);
if(or__3939__auto____9145)
{return or__3939__auto____9145;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3937__auto____9150 = this$;
if(and__3937__auto____9150)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3937__auto____9150;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2390__auto____9151 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____9152 = (cljs.core._notify_watches[goog.typeOf(x__2390__auto____9151)]);
if(or__3939__auto____9152)
{return or__3939__auto____9152;
} else
{var or__3939__auto____9153 = (cljs.core._notify_watches["_"]);
if(or__3939__auto____9153)
{return or__3939__auto____9153;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3937__auto____9158 = this$;
if(and__3937__auto____9158)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3937__auto____9158;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2390__auto____9159 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____9160 = (cljs.core._add_watch[goog.typeOf(x__2390__auto____9159)]);
if(or__3939__auto____9160)
{return or__3939__auto____9160;
} else
{var or__3939__auto____9161 = (cljs.core._add_watch["_"]);
if(or__3939__auto____9161)
{return or__3939__auto____9161;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3937__auto____9166 = this$;
if(and__3937__auto____9166)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3937__auto____9166;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2390__auto____9167 = (((this$ == null))?null:this$);
return (function (){var or__3939__auto____9168 = (cljs.core._remove_watch[goog.typeOf(x__2390__auto____9167)]);
if(or__3939__auto____9168)
{return or__3939__auto____9168;
} else
{var or__3939__auto____9169 = (cljs.core._remove_watch["_"]);
if(or__3939__auto____9169)
{return or__3939__auto____9169;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3937__auto____9174 = coll;
if(and__3937__auto____9174)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3937__auto____9174;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2390__auto____9175 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9176 = (cljs.core._as_transient[goog.typeOf(x__2390__auto____9175)]);
if(or__3939__auto____9176)
{return or__3939__auto____9176;
} else
{var or__3939__auto____9177 = (cljs.core._as_transient["_"]);
if(or__3939__auto____9177)
{return or__3939__auto____9177;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3937__auto____9182 = tcoll;
if(and__3937__auto____9182)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3937__auto____9182;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2390__auto____9183 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9184 = (cljs.core._conj_BANG_[goog.typeOf(x__2390__auto____9183)]);
if(or__3939__auto____9184)
{return or__3939__auto____9184;
} else
{var or__3939__auto____9185 = (cljs.core._conj_BANG_["_"]);
if(or__3939__auto____9185)
{return or__3939__auto____9185;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3937__auto____9190 = tcoll;
if(and__3937__auto____9190)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3937__auto____9190;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2390__auto____9191 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9192 = (cljs.core._persistent_BANG_[goog.typeOf(x__2390__auto____9191)]);
if(or__3939__auto____9192)
{return or__3939__auto____9192;
} else
{var or__3939__auto____9193 = (cljs.core._persistent_BANG_["_"]);
if(or__3939__auto____9193)
{return or__3939__auto____9193;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3937__auto____9198 = tcoll;
if(and__3937__auto____9198)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3937__auto____9198;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2390__auto____9199 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9200 = (cljs.core._assoc_BANG_[goog.typeOf(x__2390__auto____9199)]);
if(or__3939__auto____9200)
{return or__3939__auto____9200;
} else
{var or__3939__auto____9201 = (cljs.core._assoc_BANG_["_"]);
if(or__3939__auto____9201)
{return or__3939__auto____9201;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3937__auto____9206 = tcoll;
if(and__3937__auto____9206)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3937__auto____9206;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2390__auto____9207 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9208 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2390__auto____9207)]);
if(or__3939__auto____9208)
{return or__3939__auto____9208;
} else
{var or__3939__auto____9209 = (cljs.core._dissoc_BANG_["_"]);
if(or__3939__auto____9209)
{return or__3939__auto____9209;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3937__auto____9214 = tcoll;
if(and__3937__auto____9214)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3937__auto____9214;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2390__auto____9215 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9216 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2390__auto____9215)]);
if(or__3939__auto____9216)
{return or__3939__auto____9216;
} else
{var or__3939__auto____9217 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3939__auto____9217)
{return or__3939__auto____9217;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3937__auto____9222 = tcoll;
if(and__3937__auto____9222)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3937__auto____9222;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2390__auto____9223 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9224 = (cljs.core._pop_BANG_[goog.typeOf(x__2390__auto____9223)]);
if(or__3939__auto____9224)
{return or__3939__auto____9224;
} else
{var or__3939__auto____9225 = (cljs.core._pop_BANG_["_"]);
if(or__3939__auto____9225)
{return or__3939__auto____9225;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3937__auto____9230 = tcoll;
if(and__3937__auto____9230)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3937__auto____9230;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2390__auto____9231 = (((tcoll == null))?null:tcoll);
return (function (){var or__3939__auto____9232 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2390__auto____9231)]);
if(or__3939__auto____9232)
{return or__3939__auto____9232;
} else
{var or__3939__auto____9233 = (cljs.core._disjoin_BANG_["_"]);
if(or__3939__auto____9233)
{return or__3939__auto____9233;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3937__auto____9238 = x;
if(and__3937__auto____9238)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3937__auto____9238;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2390__auto____9239 = (((x == null))?null:x);
return (function (){var or__3939__auto____9240 = (cljs.core._compare[goog.typeOf(x__2390__auto____9239)]);
if(or__3939__auto____9240)
{return or__3939__auto____9240;
} else
{var or__3939__auto____9241 = (cljs.core._compare["_"]);
if(or__3939__auto____9241)
{return or__3939__auto____9241;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3937__auto____9246 = coll;
if(and__3937__auto____9246)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3937__auto____9246;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2390__auto____9247 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9248 = (cljs.core._drop_first[goog.typeOf(x__2390__auto____9247)]);
if(or__3939__auto____9248)
{return or__3939__auto____9248;
} else
{var or__3939__auto____9249 = (cljs.core._drop_first["_"]);
if(or__3939__auto____9249)
{return or__3939__auto____9249;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3937__auto____9254 = coll;
if(and__3937__auto____9254)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3937__auto____9254;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2390__auto____9255 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9256 = (cljs.core._chunked_first[goog.typeOf(x__2390__auto____9255)]);
if(or__3939__auto____9256)
{return or__3939__auto____9256;
} else
{var or__3939__auto____9257 = (cljs.core._chunked_first["_"]);
if(or__3939__auto____9257)
{return or__3939__auto____9257;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3937__auto____9262 = coll;
if(and__3937__auto____9262)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3937__auto____9262;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2390__auto____9263 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9264 = (cljs.core._chunked_rest[goog.typeOf(x__2390__auto____9263)]);
if(or__3939__auto____9264)
{return or__3939__auto____9264;
} else
{var or__3939__auto____9265 = (cljs.core._chunked_rest["_"]);
if(or__3939__auto____9265)
{return or__3939__auto____9265;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3937__auto____9270 = coll;
if(and__3937__auto____9270)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3937__auto____9270;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2390__auto____9271 = (((coll == null))?null:coll);
return (function (){var or__3939__auto____9272 = (cljs.core._chunked_next[goog.typeOf(x__2390__auto____9271)]);
if(or__3939__auto____9272)
{return or__3939__auto____9272;
} else
{var or__3939__auto____9273 = (cljs.core._chunked_next["_"]);
if(or__3939__auto____9273)
{return or__3939__auto____9273;
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
var or__3939__auto____9275 = (x === y);
if(or__3939__auto____9275)
{return or__3939__auto____9275;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__9276__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__9277 = y;
var G__9278 = cljs.core.first.call(null,more);
var G__9279 = cljs.core.next.call(null,more);
x = G__9277;
y = G__9278;
more = G__9279;
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
var G__9276 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9276__delegate.call(this, x, y, more);
};
G__9276.cljs$lang$maxFixedArity = 2;
G__9276.cljs$lang$applyTo = (function (arglist__9280){
var x = cljs.core.first(arglist__9280);
var y = cljs.core.first(cljs.core.next(arglist__9280));
var more = cljs.core.rest(cljs.core.next(arglist__9280));
return G__9276__delegate(x, y, more);
});
G__9276.cljs$lang$arity$variadic = G__9276__delegate;
return G__9276;
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
var G__9281 = null;
var G__9281__2 = (function (o,k){
return null;
});
var G__9281__3 = (function (o,k,not_found){
return not_found;
});
G__9281 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__9281__2.call(this,o,k);
case 3:
return G__9281__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9281;
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
var G__9282 = null;
var G__9282__2 = (function (_,f){
return f.call(null);
});
var G__9282__3 = (function (_,f,start){
return start;
});
G__9282 = function(_,f,start){
switch(arguments.length){
case 2:
return G__9282__2.call(this,_,f);
case 3:
return G__9282__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9282;
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
var G__9283 = null;
var G__9283__2 = (function (_,n){
return null;
});
var G__9283__3 = (function (_,n,not_found){
return not_found;
});
G__9283 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__9283__2.call(this,_,n);
case 3:
return G__9283__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9283;
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
var and__3937__auto____9284 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3937__auto____9284)
{return (o.toString() === other.toString());
} else
{return and__3937__auto____9284;
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
var cnt__9297 = cljs.core._count.call(null,cicoll);
if((cnt__9297 === 0))
{return f.call(null);
} else
{var val__9298 = cljs.core._nth.call(null,cicoll,0);
var n__9299 = 1;
while(true){
if((n__9299 < cnt__9297))
{var nval__9300 = f.call(null,val__9298,cljs.core._nth.call(null,cicoll,n__9299));
if(cljs.core.reduced_QMARK_.call(null,nval__9300))
{return cljs.core.deref.call(null,nval__9300);
} else
{{
var G__9309 = nval__9300;
var G__9310 = (n__9299 + 1);
val__9298 = G__9309;
n__9299 = G__9310;
continue;
}
}
} else
{return val__9298;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__9301 = cljs.core._count.call(null,cicoll);
var val__9302 = val;
var n__9303 = 0;
while(true){
if((n__9303 < cnt__9301))
{var nval__9304 = f.call(null,val__9302,cljs.core._nth.call(null,cicoll,n__9303));
if(cljs.core.reduced_QMARK_.call(null,nval__9304))
{return cljs.core.deref.call(null,nval__9304);
} else
{{
var G__9311 = nval__9304;
var G__9312 = (n__9303 + 1);
val__9302 = G__9311;
n__9303 = G__9312;
continue;
}
}
} else
{return val__9302;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__9305 = cljs.core._count.call(null,cicoll);
var val__9306 = val;
var n__9307 = idx;
while(true){
if((n__9307 < cnt__9305))
{var nval__9308 = f.call(null,val__9306,cljs.core._nth.call(null,cicoll,n__9307));
if(cljs.core.reduced_QMARK_.call(null,nval__9308))
{return cljs.core.deref.call(null,nval__9308);
} else
{{
var G__9313 = nval__9308;
var G__9314 = (n__9307 + 1);
val__9306 = G__9313;
n__9307 = G__9314;
continue;
}
}
} else
{return val__9306;
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
var cnt__9327 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__9328 = (arr[0]);
var n__9329 = 1;
while(true){
if((n__9329 < cnt__9327))
{var nval__9330 = f.call(null,val__9328,(arr[n__9329]));
if(cljs.core.reduced_QMARK_.call(null,nval__9330))
{return cljs.core.deref.call(null,nval__9330);
} else
{{
var G__9339 = nval__9330;
var G__9340 = (n__9329 + 1);
val__9328 = G__9339;
n__9329 = G__9340;
continue;
}
}
} else
{return val__9328;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__9331 = arr.length;
var val__9332 = val;
var n__9333 = 0;
while(true){
if((n__9333 < cnt__9331))
{var nval__9334 = f.call(null,val__9332,(arr[n__9333]));
if(cljs.core.reduced_QMARK_.call(null,nval__9334))
{return cljs.core.deref.call(null,nval__9334);
} else
{{
var G__9341 = nval__9334;
var G__9342 = (n__9333 + 1);
val__9332 = G__9341;
n__9333 = G__9342;
continue;
}
}
} else
{return val__9332;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__9335 = arr.length;
var val__9336 = val;
var n__9337 = idx;
while(true){
if((n__9337 < cnt__9335))
{var nval__9338 = f.call(null,val__9336,(arr[n__9337]));
if(cljs.core.reduced_QMARK_.call(null,nval__9338))
{return cljs.core.deref.call(null,nval__9338);
} else
{{
var G__9343 = nval__9338;
var G__9344 = (n__9337 + 1);
val__9336 = G__9343;
n__9337 = G__9344;
continue;
}
}
} else
{return val__9336;
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9345 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__9346 = this;
if(((this__9346.i + 1) < this__9346.a.length))
{return (new cljs.core.IndexedSeq(this__9346.a,(this__9346.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9347 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9348 = this;
var c__9349 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__9349 > 0))
{return (new cljs.core.RSeq(coll,(c__9349 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__9350 = this;
var this__9351 = this;
return cljs.core.pr_str.call(null,this__9351);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9352 = this;
if(cljs.core.counted_QMARK_.call(null,this__9352.a))
{return cljs.core.ci_reduce.call(null,this__9352.a,f,(this__9352.a[this__9352.i]),(this__9352.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__9352.a[this__9352.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9353 = this;
if(cljs.core.counted_QMARK_.call(null,this__9353.a))
{return cljs.core.ci_reduce.call(null,this__9353.a,f,start,this__9353.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9354 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9355 = this;
return (this__9355.a.length - this__9355.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__9356 = this;
return (this__9356.a[this__9356.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__9357 = this;
if(((this__9357.i + 1) < this__9357.a.length))
{return (new cljs.core.IndexedSeq(this__9357.a,(this__9357.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9358 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9359 = this;
var i__9360 = (n + this__9359.i);
if((i__9360 < this__9359.a.length))
{return (this__9359.a[i__9360]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9361 = this;
var i__9362 = (n + this__9361.i);
if((i__9362 < this__9361.a.length))
{return (this__9361.a[i__9362]);
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
var G__9363 = null;
var G__9363__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__9363__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__9363 = function(array,f,start){
switch(arguments.length){
case 2:
return G__9363__2.call(this,array,f);
case 3:
return G__9363__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9363;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__9364 = null;
var G__9364__2 = (function (array,k){
return (array[k]);
});
var G__9364__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__9364 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__9364__2.call(this,array,k);
case 3:
return G__9364__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9364;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__9365 = null;
var G__9365__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__9365__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__9365 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__9365__2.call(this,array,n);
case 3:
return G__9365__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9365;
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
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9366 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9367 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__9368 = this;
var this__9369 = this;
return cljs.core.pr_str.call(null,this__9369);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9370 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9371 = this;
return (this__9371.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9372 = this;
return cljs.core._nth.call(null,this__9372.ci,this__9372.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9373 = this;
if((this__9373.i > 0))
{return (new cljs.core.RSeq(this__9373.ci,(this__9373.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9374 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__9375 = this;
return (new cljs.core.RSeq(this__9375.ci,this__9375.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9376 = this;
return this__9376.meta;
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
{if((function (){var G__9380__9381 = coll;
if(G__9380__9381)
{if((function (){var or__3939__auto____9382 = (G__9380__9381.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3939__auto____9382)
{return or__3939__auto____9382;
} else
{return G__9380__9381.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__9380__9381.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9380__9381);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__9380__9381);
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
{if((function (){var G__9387__9388 = coll;
if(G__9387__9388)
{if((function (){var or__3939__auto____9389 = (G__9387__9388.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3939__auto____9389)
{return or__3939__auto____9389;
} else
{return G__9387__9388.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9387__9388.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9387__9388);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9387__9388);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__9390 = cljs.core.seq.call(null,coll);
if((s__9390 == null))
{return null;
} else
{return cljs.core._first.call(null,s__9390);
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
{if((function (){var G__9395__9396 = coll;
if(G__9395__9396)
{if((function (){var or__3939__auto____9397 = (G__9395__9396.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3939__auto____9397)
{return or__3939__auto____9397;
} else
{return G__9395__9396.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9395__9396.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9395__9396);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9395__9396);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__9398 = cljs.core.seq.call(null,coll);
if(!((s__9398 == null)))
{return cljs.core._rest.call(null,s__9398);
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
{if((function (){var G__9402__9403 = coll;
if(G__9402__9403)
{if((function (){var or__3939__auto____9404 = (G__9402__9403.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3939__auto____9404)
{return or__3939__auto____9404;
} else
{return G__9402__9403.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__9402__9403.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__9402__9403);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__9402__9403);
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
var sn__9406 = cljs.core.next.call(null,s);
if(!((sn__9406 == null)))
{{
var G__9407 = sn__9406;
s = G__9407;
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
var G__9408__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__9409 = conj.call(null,coll,x);
var G__9410 = cljs.core.first.call(null,xs);
var G__9411 = cljs.core.next.call(null,xs);
coll = G__9409;
x = G__9410;
xs = G__9411;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__9408 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9408__delegate.call(this, coll, x, xs);
};
G__9408.cljs$lang$maxFixedArity = 2;
G__9408.cljs$lang$applyTo = (function (arglist__9412){
var coll = cljs.core.first(arglist__9412);
var x = cljs.core.first(cljs.core.next(arglist__9412));
var xs = cljs.core.rest(cljs.core.next(arglist__9412));
return G__9408__delegate(coll, x, xs);
});
G__9408.cljs$lang$arity$variadic = G__9408__delegate;
return G__9408;
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
var s__9415 = cljs.core.seq.call(null,coll);
var acc__9416 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__9415))
{return (acc__9416 + cljs.core._count.call(null,s__9415));
} else
{{
var G__9417 = cljs.core.next.call(null,s__9415);
var G__9418 = (acc__9416 + 1);
s__9415 = G__9417;
acc__9416 = G__9418;
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
{if((function (){var G__9425__9426 = coll;
if(G__9425__9426)
{if((function (){var or__3939__auto____9427 = (G__9425__9426.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3939__auto____9427)
{return or__3939__auto____9427;
} else
{return G__9425__9426.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9425__9426.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9425__9426);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9425__9426);
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
{if((function (){var G__9428__9429 = coll;
if(G__9428__9429)
{if((function (){var or__3939__auto____9430 = (G__9428__9429.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3939__auto____9430)
{return or__3939__auto____9430;
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
var G__9433__delegate = function (coll,k,v,kvs){
while(true){
var ret__9432 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__9434 = ret__9432;
var G__9435 = cljs.core.first.call(null,kvs);
var G__9436 = cljs.core.second.call(null,kvs);
var G__9437 = cljs.core.nnext.call(null,kvs);
coll = G__9434;
k = G__9435;
v = G__9436;
kvs = G__9437;
continue;
}
} else
{return ret__9432;
}
break;
}
};
var G__9433 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9433__delegate.call(this, coll, k, v, kvs);
};
G__9433.cljs$lang$maxFixedArity = 3;
G__9433.cljs$lang$applyTo = (function (arglist__9438){
var coll = cljs.core.first(arglist__9438);
var k = cljs.core.first(cljs.core.next(arglist__9438));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9438)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9438)));
return G__9433__delegate(coll, k, v, kvs);
});
G__9433.cljs$lang$arity$variadic = G__9433__delegate;
return G__9433;
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
var G__9441__delegate = function (coll,k,ks){
while(true){
var ret__9440 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__9442 = ret__9440;
var G__9443 = cljs.core.first.call(null,ks);
var G__9444 = cljs.core.next.call(null,ks);
coll = G__9442;
k = G__9443;
ks = G__9444;
continue;
}
} else
{return ret__9440;
}
break;
}
};
var G__9441 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9441__delegate.call(this, coll, k, ks);
};
G__9441.cljs$lang$maxFixedArity = 2;
G__9441.cljs$lang$applyTo = (function (arglist__9445){
var coll = cljs.core.first(arglist__9445);
var k = cljs.core.first(cljs.core.next(arglist__9445));
var ks = cljs.core.rest(cljs.core.next(arglist__9445));
return G__9441__delegate(coll, k, ks);
});
G__9441.cljs$lang$arity$variadic = G__9441__delegate;
return G__9441;
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
if((function (){var G__9449__9450 = o;
if(G__9449__9450)
{if((function (){var or__3939__auto____9451 = (G__9449__9450.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3939__auto____9451)
{return or__3939__auto____9451;
} else
{return G__9449__9450.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9449__9450.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9449__9450);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9449__9450);
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
var G__9454__delegate = function (coll,k,ks){
while(true){
var ret__9453 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__9455 = ret__9453;
var G__9456 = cljs.core.first.call(null,ks);
var G__9457 = cljs.core.next.call(null,ks);
coll = G__9455;
k = G__9456;
ks = G__9457;
continue;
}
} else
{return ret__9453;
}
break;
}
};
var G__9454 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9454__delegate.call(this, coll, k, ks);
};
G__9454.cljs$lang$maxFixedArity = 2;
G__9454.cljs$lang$applyTo = (function (arglist__9458){
var coll = cljs.core.first(arglist__9458);
var k = cljs.core.first(cljs.core.next(arglist__9458));
var ks = cljs.core.rest(cljs.core.next(arglist__9458));
return G__9454__delegate(coll, k, ks);
});
G__9454.cljs$lang$arity$variadic = G__9454__delegate;
return G__9454;
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
var h__9460 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__9460);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__9460;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__9462 = (cljs.core.string_hash_cache[k]);
if(!((h__9462 == null)))
{return h__9462;
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
if((function (){var and__3937__auto____9464 = goog.isString(o);
if(and__3937__auto____9464)
{return check_cache;
} else
{return and__3937__auto____9464;
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
{var G__9468__9469 = x;
if(G__9468__9469)
{if((function (){var or__3939__auto____9470 = (G__9468__9469.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3939__auto____9470)
{return or__3939__auto____9470;
} else
{return G__9468__9469.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__9468__9469.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__9468__9469);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__9468__9469);
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
{var G__9474__9475 = x;
if(G__9474__9475)
{if((function (){var or__3939__auto____9476 = (G__9474__9475.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3939__auto____9476)
{return or__3939__auto____9476;
} else
{return G__9474__9475.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__9474__9475.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__9474__9475);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__9474__9475);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__9480__9481 = x;
if(G__9480__9481)
{if((function (){var or__3939__auto____9482 = (G__9480__9481.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3939__auto____9482)
{return or__3939__auto____9482;
} else
{return G__9480__9481.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__9480__9481.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__9480__9481);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__9480__9481);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__9486__9487 = x;
if(G__9486__9487)
{if((function (){var or__3939__auto____9488 = (G__9486__9487.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3939__auto____9488)
{return or__3939__auto____9488;
} else
{return G__9486__9487.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__9486__9487.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__9486__9487);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__9486__9487);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__9492__9493 = x;
if(G__9492__9493)
{if((function (){var or__3939__auto____9494 = (G__9492__9493.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3939__auto____9494)
{return or__3939__auto____9494;
} else
{return G__9492__9493.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__9492__9493.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__9492__9493);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__9492__9493);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__9498__9499 = x;
if(G__9498__9499)
{if((function (){var or__3939__auto____9500 = (G__9498__9499.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3939__auto____9500)
{return or__3939__auto____9500;
} else
{return G__9498__9499.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__9498__9499.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9498__9499);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__9498__9499);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__9504__9505 = x;
if(G__9504__9505)
{if((function (){var or__3939__auto____9506 = (G__9504__9505.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3939__auto____9506)
{return or__3939__auto____9506;
} else
{return G__9504__9505.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9504__9505.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9504__9505);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9504__9505);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__9510__9511 = x;
if(G__9510__9511)
{if((function (){var or__3939__auto____9512 = (G__9510__9511.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3939__auto____9512)
{return or__3939__auto____9512;
} else
{return G__9510__9511.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__9510__9511.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__9510__9511);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__9510__9511);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__9516__9517 = x;
if(G__9516__9517)
{if((function (){var or__3939__auto____9518 = (G__9516__9517.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3939__auto____9518)
{return or__3939__auto____9518;
} else
{return G__9516__9517.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__9516__9517.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__9516__9517);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__9516__9517);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__9522__9523 = x;
if(G__9522__9523)
{if(cljs.core.truth_((function (){var or__3939__auto____9524 = null;
if(cljs.core.truth_(or__3939__auto____9524))
{return or__3939__auto____9524;
} else
{return G__9522__9523.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__9522__9523.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__9522__9523);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__9522__9523);
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
var G__9525__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__9525 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9525__delegate.call(this, keyvals);
};
G__9525.cljs$lang$maxFixedArity = 0;
G__9525.cljs$lang$applyTo = (function (arglist__9526){
var keyvals = cljs.core.seq(arglist__9526);;
return G__9525__delegate(keyvals);
});
G__9525.cljs$lang$arity$variadic = G__9525__delegate;
return G__9525;
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
var keys__9528 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__9528.push(key);
}));
return keys__9528;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__9532 = i;
var j__9533 = j;
var len__9534 = len;
while(true){
if((len__9534 === 0))
{return to;
} else
{(to[j__9533] = (from[i__9532]));
{
var G__9535 = (i__9532 + 1);
var G__9536 = (j__9533 + 1);
var G__9537 = (len__9534 - 1);
i__9532 = G__9535;
j__9533 = G__9536;
len__9534 = G__9537;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__9541 = (i + (len - 1));
var j__9542 = (j + (len - 1));
var len__9543 = len;
while(true){
if((len__9543 === 0))
{return to;
} else
{(to[j__9542] = (from[i__9541]));
{
var G__9544 = (i__9541 - 1);
var G__9545 = (j__9542 - 1);
var G__9546 = (len__9543 - 1);
i__9541 = G__9544;
j__9542 = G__9545;
len__9543 = G__9546;
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
{var G__9550__9551 = s;
if(G__9550__9551)
{if((function (){var or__3939__auto____9552 = (G__9550__9551.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3939__auto____9552)
{return or__3939__auto____9552;
} else
{return G__9550__9551.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9550__9551.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9550__9551);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9550__9551);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__9556__9557 = s;
if(G__9556__9557)
{if((function (){var or__3939__auto____9558 = (G__9556__9557.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3939__auto____9558)
{return or__3939__auto____9558;
} else
{return G__9556__9557.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__9556__9557.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__9556__9557);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__9556__9557);
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
var and__3937__auto____9561 = goog.isString(x);
if(and__3937__auto____9561)
{return !((function (){var or__3939__auto____9562 = (x.charAt(0) === "\uFDD0");
if(or__3939__auto____9562)
{return or__3939__auto____9562;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3937__auto____9561;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3937__auto____9564 = goog.isString(x);
if(and__3937__auto____9564)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3937__auto____9564;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3937__auto____9566 = goog.isString(x);
if(and__3937__auto____9566)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3937__auto____9566;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3939__auto____9571 = cljs.core.fn_QMARK_.call(null,f);
if(or__3939__auto____9571)
{return or__3939__auto____9571;
} else
{var G__9572__9573 = f;
if(G__9572__9573)
{if((function (){var or__3939__auto____9574 = (G__9572__9573.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3939__auto____9574)
{return or__3939__auto____9574;
} else
{return G__9572__9573.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__9572__9573.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__9572__9573);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__9572__9573);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3937__auto____9576 = cljs.core.number_QMARK_.call(null,n);
if(and__3937__auto____9576)
{return (n == n.toFixed());
} else
{return and__3937__auto____9576;
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
if(cljs.core.truth_((function (){var and__3937__auto____9579 = coll;
if(cljs.core.truth_(and__3937__auto____9579))
{var and__3937__auto____9580 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3937__auto____9580)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3937__auto____9580;
}
} else
{return and__3937__auto____9579;
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
var G__9589__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__9585 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__9586 = more;
while(true){
var x__9587 = cljs.core.first.call(null,xs__9586);
var etc__9588 = cljs.core.next.call(null,xs__9586);
if(cljs.core.truth_(xs__9586))
{if(cljs.core.contains_QMARK_.call(null,s__9585,x__9587))
{return false;
} else
{{
var G__9590 = cljs.core.conj.call(null,s__9585,x__9587);
var G__9591 = etc__9588;
s__9585 = G__9590;
xs__9586 = G__9591;
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
var G__9589 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9589__delegate.call(this, x, y, more);
};
G__9589.cljs$lang$maxFixedArity = 2;
G__9589.cljs$lang$applyTo = (function (arglist__9592){
var x = cljs.core.first(arglist__9592);
var y = cljs.core.first(cljs.core.next(arglist__9592));
var more = cljs.core.rest(cljs.core.next(arglist__9592));
return G__9589__delegate(x, y, more);
});
G__9589.cljs$lang$arity$variadic = G__9589__delegate;
return G__9589;
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
{if((function (){var G__9596__9597 = x;
if(G__9596__9597)
{if(cljs.core.truth_((function (){var or__3939__auto____9598 = null;
if(cljs.core.truth_(or__3939__auto____9598))
{return or__3939__auto____9598;
} else
{return G__9596__9597.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__9596__9597.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__9596__9597);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__9596__9597);
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
var xl__9603 = cljs.core.count.call(null,xs);
var yl__9604 = cljs.core.count.call(null,ys);
if((xl__9603 < yl__9604))
{return -1;
} else
{if((xl__9603 > yl__9604))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__9603,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__9605 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3937__auto____9606 = (d__9605 === 0);
if(and__3937__auto____9606)
{return ((n + 1) < len);
} else
{return and__3937__auto____9606;
}
})())
{{
var G__9607 = xs;
var G__9608 = ys;
var G__9609 = len;
var G__9610 = (n + 1);
xs = G__9607;
ys = G__9608;
len = G__9609;
n = G__9610;
continue;
}
} else
{return d__9605;
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
var r__9612 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__9612))
{return r__9612;
} else
{if(cljs.core.truth_(r__9612))
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
{var a__9614 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__9614,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9614);
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
var temp__4086__auto____9620 = cljs.core.seq.call(null,coll);
if(temp__4086__auto____9620)
{var s__9621 = temp__4086__auto____9620;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9621),cljs.core.next.call(null,s__9621));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__9622 = val;
var coll__9623 = cljs.core.seq.call(null,coll);
while(true){
if(coll__9623)
{var nval__9624 = f.call(null,val__9622,cljs.core.first.call(null,coll__9623));
if(cljs.core.reduced_QMARK_.call(null,nval__9624))
{return cljs.core.deref.call(null,nval__9624);
} else
{{
var G__9625 = nval__9624;
var G__9626 = cljs.core.next.call(null,coll__9623);
val__9622 = G__9625;
coll__9623 = G__9626;
continue;
}
}
} else
{return val__9622;
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
var a__9628 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__9628);
return cljs.core.vec.call(null,a__9628);
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
if((function (){var G__9635__9636 = coll;
if(G__9635__9636)
{if((function (){var or__3939__auto____9637 = (G__9635__9636.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3939__auto____9637)
{return or__3939__auto____9637;
} else
{return G__9635__9636.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__9635__9636.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9635__9636);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__9635__9636);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__9638__9639 = coll;
if(G__9638__9639)
{if((function (){var or__3939__auto____9640 = (G__9638__9639.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3939__auto____9640)
{return or__3939__auto____9640;
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__9641 = this;
return this__9641.val;
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
var G__9642__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9642 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9642__delegate.call(this, x, y, more);
};
G__9642.cljs$lang$maxFixedArity = 2;
G__9642.cljs$lang$applyTo = (function (arglist__9643){
var x = cljs.core.first(arglist__9643);
var y = cljs.core.first(cljs.core.next(arglist__9643));
var more = cljs.core.rest(cljs.core.next(arglist__9643));
return G__9642__delegate(x, y, more);
});
G__9642.cljs$lang$arity$variadic = G__9642__delegate;
return G__9642;
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
var G__9644__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
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
var G__9646__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
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
var G__9648__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
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
var G__9650__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__9651 = y;
var G__9652 = cljs.core.first.call(null,more);
var G__9653 = cljs.core.next.call(null,more);
x = G__9651;
y = G__9652;
more = G__9653;
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
var G__9650 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9650__delegate.call(this, x, y, more);
};
G__9650.cljs$lang$maxFixedArity = 2;
G__9650.cljs$lang$applyTo = (function (arglist__9654){
var x = cljs.core.first(arglist__9654);
var y = cljs.core.first(cljs.core.next(arglist__9654));
var more = cljs.core.rest(cljs.core.next(arglist__9654));
return G__9650__delegate(x, y, more);
});
G__9650.cljs$lang$arity$variadic = G__9650__delegate;
return G__9650;
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
var G__9655__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__9656 = y;
var G__9657 = cljs.core.first.call(null,more);
var G__9658 = cljs.core.next.call(null,more);
x = G__9656;
y = G__9657;
more = G__9658;
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
var G__9655 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9655__delegate.call(this, x, y, more);
};
G__9655.cljs$lang$maxFixedArity = 2;
G__9655.cljs$lang$applyTo = (function (arglist__9659){
var x = cljs.core.first(arglist__9659);
var y = cljs.core.first(cljs.core.next(arglist__9659));
var more = cljs.core.rest(cljs.core.next(arglist__9659));
return G__9655__delegate(x, y, more);
});
G__9655.cljs$lang$arity$variadic = G__9655__delegate;
return G__9655;
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
var G__9660__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__9661 = y;
var G__9662 = cljs.core.first.call(null,more);
var G__9663 = cljs.core.next.call(null,more);
x = G__9661;
y = G__9662;
more = G__9663;
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
var G__9660 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9660__delegate.call(this, x, y, more);
};
G__9660.cljs$lang$maxFixedArity = 2;
G__9660.cljs$lang$applyTo = (function (arglist__9664){
var x = cljs.core.first(arglist__9664);
var y = cljs.core.first(cljs.core.next(arglist__9664));
var more = cljs.core.rest(cljs.core.next(arglist__9664));
return G__9660__delegate(x, y, more);
});
G__9660.cljs$lang$arity$variadic = G__9660__delegate;
return G__9660;
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
var G__9665__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__9666 = y;
var G__9667 = cljs.core.first.call(null,more);
var G__9668 = cljs.core.next.call(null,more);
x = G__9666;
y = G__9667;
more = G__9668;
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
var G__9665 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9665__delegate.call(this, x, y, more);
};
G__9665.cljs$lang$maxFixedArity = 2;
G__9665.cljs$lang$applyTo = (function (arglist__9669){
var x = cljs.core.first(arglist__9669);
var y = cljs.core.first(cljs.core.next(arglist__9669));
var more = cljs.core.rest(cljs.core.next(arglist__9669));
return G__9665__delegate(x, y, more);
});
G__9665.cljs$lang$arity$variadic = G__9665__delegate;
return G__9665;
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
var G__9670__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9670 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9670__delegate.call(this, x, y, more);
};
G__9670.cljs$lang$maxFixedArity = 2;
G__9670.cljs$lang$applyTo = (function (arglist__9671){
var x = cljs.core.first(arglist__9671);
var y = cljs.core.first(cljs.core.next(arglist__9671));
var more = cljs.core.rest(cljs.core.next(arglist__9671));
return G__9670__delegate(x, y, more);
});
G__9670.cljs$lang$arity$variadic = G__9670__delegate;
return G__9670;
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
var G__9672__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
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
var rem__9675 = (n % d);
return cljs.core.fix.call(null,((n - rem__9675) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9677 = cljs.core.quot.call(null,n,d);
return (n - (d * q__9677));
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
var v__9680 = (v - ((v >> 1) & 1431655765));
var v__9681 = ((v__9680 & 858993459) + ((v__9680 >> 2) & 858993459));
return ((((v__9681 + (v__9681 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__9682__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__9683 = y;
var G__9684 = cljs.core.first.call(null,more);
var G__9685 = cljs.core.next.call(null,more);
x = G__9683;
y = G__9684;
more = G__9685;
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
var G__9682 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9682__delegate.call(this, x, y, more);
};
G__9682.cljs$lang$maxFixedArity = 2;
G__9682.cljs$lang$applyTo = (function (arglist__9686){
var x = cljs.core.first(arglist__9686);
var y = cljs.core.first(cljs.core.next(arglist__9686));
var more = cljs.core.rest(cljs.core.next(arglist__9686));
return G__9682__delegate(x, y, more);
});
G__9682.cljs$lang$arity$variadic = G__9682__delegate;
return G__9682;
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
var n__9690 = n;
var xs__9691 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____9692 = xs__9691;
if(and__3937__auto____9692)
{return (n__9690 > 0);
} else
{return and__3937__auto____9692;
}
})()))
{{
var G__9693 = (n__9690 - 1);
var G__9694 = cljs.core.next.call(null,xs__9691);
n__9690 = G__9693;
xs__9691 = G__9694;
continue;
}
} else
{return xs__9691;
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
var G__9695__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9696 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9697 = cljs.core.next.call(null,more);
sb = G__9696;
more = G__9697;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9695 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9695__delegate.call(this, x, ys);
};
G__9695.cljs$lang$maxFixedArity = 1;
G__9695.cljs$lang$applyTo = (function (arglist__9698){
var x = cljs.core.first(arglist__9698);
var ys = cljs.core.rest(arglist__9698);
return G__9695__delegate(x, ys);
});
G__9695.cljs$lang$arity$variadic = G__9695__delegate;
return G__9695;
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
var G__9699__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9700 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__9701 = cljs.core.next.call(null,more);
sb = G__9700;
more = G__9701;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__9699 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9699__delegate.call(this, x, ys);
};
G__9699.cljs$lang$maxFixedArity = 1;
G__9699.cljs$lang$applyTo = (function (arglist__9702){
var x = cljs.core.first(arglist__9702);
var ys = cljs.core.rest(arglist__9702);
return G__9699__delegate(x, ys);
});
G__9699.cljs$lang$arity$variadic = G__9699__delegate;
return G__9699;
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
format.cljs$lang$applyTo = (function (arglist__9703){
var fmt = cljs.core.first(arglist__9703);
var args = cljs.core.rest(arglist__9703);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9706 = cljs.core.seq.call(null,x);
var ys__9707 = cljs.core.seq.call(null,y);
while(true){
if((xs__9706 == null))
{return (ys__9707 == null);
} else
{if((ys__9707 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9706),cljs.core.first.call(null,ys__9707)))
{{
var G__9708 = cljs.core.next.call(null,xs__9706);
var G__9709 = cljs.core.next.call(null,ys__9707);
xs__9706 = G__9708;
ys__9707 = G__9709;
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
return cljs.core.reduce.call(null,(function (p1__9710_SHARP_,p2__9711_SHARP_){
return cljs.core.hash_combine.call(null,p1__9710_SHARP_,cljs.core.hash.call(null,p2__9711_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__9715 = 0;
var s__9716 = cljs.core.seq.call(null,m);
while(true){
if(s__9716)
{var e__9717 = cljs.core.first.call(null,s__9716);
{
var G__9718 = ((h__9715 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__9717)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__9717)))) % 4503599627370496);
var G__9719 = cljs.core.next.call(null,s__9716);
h__9715 = G__9718;
s__9716 = G__9719;
continue;
}
} else
{return h__9715;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__9723 = 0;
var s__9724 = cljs.core.seq.call(null,s);
while(true){
if(s__9724)
{var e__9725 = cljs.core.first.call(null,s__9724);
{
var G__9726 = ((h__9723 + cljs.core.hash.call(null,e__9725)) % 4503599627370496);
var G__9727 = cljs.core.next.call(null,s__9724);
h__9723 = G__9726;
s__9724 = G__9727;
continue;
}
} else
{return h__9723;
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
var G__9748__9749 = cljs.core.seq.call(null,fn_map);
if(G__9748__9749)
{var G__9751__9753 = cljs.core.first.call(null,G__9748__9749);
var vec__9752__9754 = G__9751__9753;
var key_name__9755 = cljs.core.nth.call(null,vec__9752__9754,0,null);
var f__9756 = cljs.core.nth.call(null,vec__9752__9754,1,null);
var G__9748__9757 = G__9748__9749;
var G__9751__9758 = G__9751__9753;
var G__9748__9759 = G__9748__9757;
while(true){
var vec__9760__9761 = G__9751__9758;
var key_name__9762 = cljs.core.nth.call(null,vec__9760__9761,0,null);
var f__9763 = cljs.core.nth.call(null,vec__9760__9761,1,null);
var G__9748__9764 = G__9748__9759;
var str_name__9765 = cljs.core.name.call(null,key_name__9762);
(obj[str_name__9765] = f__9763);
var temp__4088__auto____9766 = cljs.core.next.call(null,G__9748__9764);
if(temp__4088__auto____9766)
{var G__9748__9767 = temp__4088__auto____9766;
{
var G__9768 = cljs.core.first.call(null,G__9748__9767);
var G__9769 = G__9748__9767;
G__9751__9758 = G__9768;
G__9748__9759 = G__9769;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9770 = this;
var h__2219__auto____9771 = this__9770.__hash;
if(!((h__2219__auto____9771 == null)))
{return h__2219__auto____9771;
} else
{var h__2219__auto____9772 = cljs.core.hash_coll.call(null,coll);
this__9770.__hash = h__2219__auto____9772;
return h__2219__auto____9772;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9773 = this;
if((this__9773.count === 1))
{return null;
} else
{return this__9773.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9774 = this;
return (new cljs.core.List(this__9774.meta,o,coll,(this__9774.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__9775 = this;
var this__9776 = this;
return cljs.core.pr_str.call(null,this__9776);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9777 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9778 = this;
return this__9778.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9779 = this;
return this__9779.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9780 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9781 = this;
return this__9781.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9782 = this;
if((this__9782.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__9782.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9783 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9784 = this;
return (new cljs.core.List(meta,this__9784.first,this__9784.rest,this__9784.count,this__9784.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9785 = this;
return this__9785.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9786 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9787 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9788 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9789 = this;
return (new cljs.core.List(this__9789.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__9790 = this;
var this__9791 = this;
return cljs.core.pr_str.call(null,this__9791);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9792 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9793 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9794 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9795 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9796 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9797 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9798 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9799 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9800 = this;
return this__9800.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9801 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__9805__9806 = coll;
if(G__9805__9806)
{if((function (){var or__3939__auto____9807 = (G__9805__9806.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3939__auto____9807)
{return or__3939__auto____9807;
} else
{return G__9805__9806.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__9805__9806.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__9805__9806);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__9805__9806);
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
var G__9808__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__9808 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9808__delegate.call(this, x, y, z, items);
};
G__9808.cljs$lang$maxFixedArity = 3;
G__9808.cljs$lang$applyTo = (function (arglist__9809){
var x = cljs.core.first(arglist__9809);
var y = cljs.core.first(cljs.core.next(arglist__9809));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9809)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9809)));
return G__9808__delegate(x, y, z, items);
});
G__9808.cljs$lang$arity$variadic = G__9808__delegate;
return G__9808;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9810 = this;
var h__2219__auto____9811 = this__9810.__hash;
if(!((h__2219__auto____9811 == null)))
{return h__2219__auto____9811;
} else
{var h__2219__auto____9812 = cljs.core.hash_coll.call(null,coll);
this__9810.__hash = h__2219__auto____9812;
return h__2219__auto____9812;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9813 = this;
if((this__9813.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__9813.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9814 = this;
return (new cljs.core.Cons(null,o,coll,this__9814.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__9815 = this;
var this__9816 = this;
return cljs.core.pr_str.call(null,this__9816);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9817 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9818 = this;
return this__9818.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9819 = this;
if((this__9819.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__9819.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9820 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9821 = this;
return (new cljs.core.Cons(meta,this__9821.first,this__9821.rest,this__9821.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9822 = this;
return this__9822.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9823 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9823.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3939__auto____9828 = (coll == null);
if(or__3939__auto____9828)
{return or__3939__auto____9828;
} else
{var G__9829__9830 = coll;
if(G__9829__9830)
{if((function (){var or__3939__auto____9831 = (G__9829__9830.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3939__auto____9831)
{return or__3939__auto____9831;
} else
{return G__9829__9830.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__9829__9830.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9829__9830);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__9829__9830);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__9835__9836 = x;
if(G__9835__9836)
{if((function (){var or__3939__auto____9837 = (G__9835__9836.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3939__auto____9837)
{return or__3939__auto____9837;
} else
{return G__9835__9836.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__9835__9836.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__9835__9836);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__9835__9836);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__9838 = null;
var G__9838__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9838__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9838 = function(string,f,start){
switch(arguments.length){
case 2:
return G__9838__2.call(this,string,f);
case 3:
return G__9838__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9838;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9839 = null;
var G__9839__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9839__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9839 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__9839__2.call(this,string,k);
case 3:
return G__9839__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9839;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9840 = null;
var G__9840__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__9840__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9840 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__9840__2.call(this,string,n);
case 3:
return G__9840__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9840;
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
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__9852 = null;
var G__9852__2 = (function (this_sym9843,coll){
var this__9845 = this;
var this_sym9843__9846 = this;
var ___9847 = this_sym9843__9846;
if((coll == null))
{return null;
} else
{var strobj__9848 = coll.strobj;
if((strobj__9848 == null))
{return cljs.core._lookup.call(null,coll,this__9845.k,null);
} else
{return (strobj__9848[this__9845.k]);
}
}
});
var G__9852__3 = (function (this_sym9844,coll,not_found){
var this__9845 = this;
var this_sym9844__9849 = this;
var ___9850 = this_sym9844__9849;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__9845.k,not_found);
}
});
G__9852 = function(this_sym9844,coll,not_found){
switch(arguments.length){
case 2:
return G__9852__2.call(this,this_sym9844,coll);
case 3:
return G__9852__3.call(this,this_sym9844,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9852;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym9841,args9842){
var this__9851 = this;
return this_sym9841.call.apply(this_sym9841,[this_sym9841].concat(args9842.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__9861 = null;
var G__9861__2 = (function (this_sym9855,coll){
var this_sym9855__9857 = this;
var this__9858 = this_sym9855__9857;
return cljs.core._lookup.call(null,coll,this__9858.toString(),null);
});
var G__9861__3 = (function (this_sym9856,coll,not_found){
var this_sym9856__9859 = this;
var this__9860 = this_sym9856__9859;
return cljs.core._lookup.call(null,coll,this__9860.toString(),not_found);
});
G__9861 = function(this_sym9856,coll,not_found){
switch(arguments.length){
case 2:
return G__9861__2.call(this,this_sym9856,coll);
case 3:
return G__9861__3.call(this,this_sym9856,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9861;
})()
;
String.prototype.apply = (function (this_sym9853,args9854){
return this_sym9853.call.apply(this_sym9853,[this_sym9853].concat(args9854.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__9863 = lazy_seq.x;
if(lazy_seq.realized)
{return x__9863;
} else
{lazy_seq.x = x__9863.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9864 = this;
var h__2219__auto____9865 = this__9864.__hash;
if(!((h__2219__auto____9865 == null)))
{return h__2219__auto____9865;
} else
{var h__2219__auto____9866 = cljs.core.hash_coll.call(null,coll);
this__9864.__hash = h__2219__auto____9866;
return h__2219__auto____9866;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9867 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9868 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__9869 = this;
var this__9870 = this;
return cljs.core.pr_str.call(null,this__9870);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9871 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9872 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9873 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9874 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9875 = this;
return (new cljs.core.LazySeq(meta,this__9875.realized,this__9875.x,this__9875.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9876 = this;
return this__9876.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9877 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9877.meta);
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9878 = this;
return this__9878.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__9879 = this;
var ___9880 = this;
(this__9879.buf[this__9879.end] = o);
return this__9879.end = (this__9879.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__9881 = this;
var ___9882 = this;
var ret__9883 = (new cljs.core.ArrayChunk(this__9881.buf,0,this__9881.end));
this__9881.buf = null;
return ret__9883;
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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9884 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__9884.arr[this__9884.off]),(this__9884.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9885 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__9885.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__9886 = this;
if((this__9886.off === this__9886.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__9886.arr,(this__9886.off + 1),this__9886.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__9887 = this;
return (this__9887.arr[(this__9887.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__9888 = this;
if((function (){var and__3937__auto____9889 = (i >= 0);
if(and__3937__auto____9889)
{return (i < (this__9888.end - this__9888.off));
} else
{return and__3937__auto____9889;
}
})())
{return (this__9888.arr[(this__9888.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__9890 = this;
return (this__9890.end - this__9890.off);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__9891 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9892 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9893 = this;
return cljs.core._nth.call(null,this__9893.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9894 = this;
if((cljs.core._count.call(null,this__9894.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__9894.chunk),this__9894.more,this__9894.meta));
} else
{if((this__9894.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__9894.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9895 = this;
if((this__9895.more == null))
{return null;
} else
{return this__9895.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9896 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9897 = this;
return (new cljs.core.ChunkedCons(this__9897.chunk,this__9897.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9898 = this;
return this__9898.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9899 = this;
return this__9899.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9900 = this;
if((this__9900.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__9900.more;
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
if((function (){var G__9904__9905 = s;
if(G__9904__9905)
{if(cljs.core.truth_((function (){var or__3939__auto____9906 = null;
if(cljs.core.truth_(or__3939__auto____9906))
{return or__3939__auto____9906;
} else
{return G__9904__9905.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__9904__9905.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__9904__9905);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__9904__9905);
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
var ary__9909 = [];
var s__9910 = s;
while(true){
if(cljs.core.seq.call(null,s__9910))
{ary__9909.push(cljs.core.first.call(null,s__9910));
{
var G__9911 = cljs.core.next.call(null,s__9910);
s__9910 = G__9911;
continue;
}
} else
{return ary__9909;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__9915 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__9916 = 0;
var xs__9917 = cljs.core.seq.call(null,coll);
while(true){
if(xs__9917)
{(ret__9915[i__9916] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__9917)));
{
var G__9918 = (i__9916 + 1);
var G__9919 = cljs.core.next.call(null,xs__9917);
i__9916 = G__9918;
xs__9917 = G__9919;
continue;
}
} else
{}
break;
}
return ret__9915;
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
var a__9927 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9928 = cljs.core.seq.call(null,init_val_or_seq);
var i__9929 = 0;
var s__9930 = s__9928;
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____9931 = s__9930;
if(and__3937__auto____9931)
{return (i__9929 < size);
} else
{return and__3937__auto____9931;
}
})()))
{(a__9927[i__9929] = cljs.core.first.call(null,s__9930));
{
var G__9934 = (i__9929 + 1);
var G__9935 = cljs.core.next.call(null,s__9930);
i__9929 = G__9934;
s__9930 = G__9935;
continue;
}
} else
{return a__9927;
}
break;
}
} else
{var n__2554__auto____9932 = size;
var i__9933 = 0;
while(true){
if((i__9933 < n__2554__auto____9932))
{(a__9927[i__9933] = init_val_or_seq);
{
var G__9936 = (i__9933 + 1);
i__9933 = G__9936;
continue;
}
} else
{}
break;
}
return a__9927;
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
var a__9944 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9945 = cljs.core.seq.call(null,init_val_or_seq);
var i__9946 = 0;
var s__9947 = s__9945;
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____9948 = s__9947;
if(and__3937__auto____9948)
{return (i__9946 < size);
} else
{return and__3937__auto____9948;
}
})()))
{(a__9944[i__9946] = cljs.core.first.call(null,s__9947));
{
var G__9951 = (i__9946 + 1);
var G__9952 = cljs.core.next.call(null,s__9947);
i__9946 = G__9951;
s__9947 = G__9952;
continue;
}
} else
{return a__9944;
}
break;
}
} else
{var n__2554__auto____9949 = size;
var i__9950 = 0;
while(true){
if((i__9950 < n__2554__auto____9949))
{(a__9944[i__9950] = init_val_or_seq);
{
var G__9953 = (i__9950 + 1);
i__9950 = G__9953;
continue;
}
} else
{}
break;
}
return a__9944;
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
var a__9961 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__9962 = cljs.core.seq.call(null,init_val_or_seq);
var i__9963 = 0;
var s__9964 = s__9962;
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____9965 = s__9964;
if(and__3937__auto____9965)
{return (i__9963 < size);
} else
{return and__3937__auto____9965;
}
})()))
{(a__9961[i__9963] = cljs.core.first.call(null,s__9964));
{
var G__9968 = (i__9963 + 1);
var G__9969 = cljs.core.next.call(null,s__9964);
i__9963 = G__9968;
s__9964 = G__9969;
continue;
}
} else
{return a__9961;
}
break;
}
} else
{var n__2554__auto____9966 = size;
var i__9967 = 0;
while(true){
if((i__9967 < n__2554__auto____9966))
{(a__9961[i__9967] = init_val_or_seq);
{
var G__9970 = (i__9967 + 1);
i__9967 = G__9970;
continue;
}
} else
{}
break;
}
return a__9961;
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
{var s__9975 = s;
var i__9976 = n;
var sum__9977 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3937__auto____9978 = (i__9976 > 0);
if(and__3937__auto____9978)
{return cljs.core.seq.call(null,s__9975);
} else
{return and__3937__auto____9978;
}
})()))
{{
var G__9979 = cljs.core.next.call(null,s__9975);
var G__9980 = (i__9976 - 1);
var G__9981 = (sum__9977 + 1);
s__9975 = G__9979;
i__9976 = G__9980;
sum__9977 = G__9981;
continue;
}
} else
{return sum__9977;
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
var s__9986 = cljs.core.seq.call(null,x);
if(s__9986)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__9986))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__9986),concat.call(null,cljs.core.chunk_rest.call(null,s__9986),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9986),concat.call(null,cljs.core.rest.call(null,s__9986),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__9990__delegate = function (x,y,zs){
var cat__9989 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9988 = cljs.core.seq.call(null,xys);
if(xys__9988)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__9988))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__9988),cat.call(null,cljs.core.chunk_rest.call(null,xys__9988),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9988),cat.call(null,cljs.core.rest.call(null,xys__9988),zs));
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
return cat__9989.call(null,concat.call(null,x,y),zs);
};
var G__9990 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9990__delegate.call(this, x, y, zs);
};
G__9990.cljs$lang$maxFixedArity = 2;
G__9990.cljs$lang$applyTo = (function (arglist__9991){
var x = cljs.core.first(arglist__9991);
var y = cljs.core.first(cljs.core.next(arglist__9991));
var zs = cljs.core.rest(cljs.core.next(arglist__9991));
return G__9990__delegate(x, y, zs);
});
G__9990.cljs$lang$arity$variadic = G__9990__delegate;
return G__9990;
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
var G__9992__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9992 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9992__delegate.call(this, a, b, c, d, more);
};
G__9992.cljs$lang$maxFixedArity = 4;
G__9992.cljs$lang$applyTo = (function (arglist__9993){
var a = cljs.core.first(arglist__9993);
var b = cljs.core.first(cljs.core.next(arglist__9993));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9993)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9993))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9993))));
return G__9992__delegate(a, b, c, d, more);
});
G__9992.cljs$lang$arity$variadic = G__9992__delegate;
return G__9992;
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
var args__10035 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__10036 = cljs.core._first.call(null,args__10035);
var args__10037 = cljs.core._rest.call(null,args__10035);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__10036);
} else
{return f.call(null,a__10036);
}
} else
{var b__10038 = cljs.core._first.call(null,args__10037);
var args__10039 = cljs.core._rest.call(null,args__10037);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__10036,b__10038);
} else
{return f.call(null,a__10036,b__10038);
}
} else
{var c__10040 = cljs.core._first.call(null,args__10039);
var args__10041 = cljs.core._rest.call(null,args__10039);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__10036,b__10038,c__10040);
} else
{return f.call(null,a__10036,b__10038,c__10040);
}
} else
{var d__10042 = cljs.core._first.call(null,args__10041);
var args__10043 = cljs.core._rest.call(null,args__10041);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__10036,b__10038,c__10040,d__10042);
} else
{return f.call(null,a__10036,b__10038,c__10040,d__10042);
}
} else
{var e__10044 = cljs.core._first.call(null,args__10043);
var args__10045 = cljs.core._rest.call(null,args__10043);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__10036,b__10038,c__10040,d__10042,e__10044);
} else
{return f.call(null,a__10036,b__10038,c__10040,d__10042,e__10044);
}
} else
{var f__10046 = cljs.core._first.call(null,args__10045);
var args__10047 = cljs.core._rest.call(null,args__10045);
if((argc === 6))
{if(f__10046.cljs$lang$arity$6)
{return f__10046.cljs$lang$arity$6(a__10036,b__10038,c__10040,d__10042,e__10044,f__10046);
} else
{return f__10046.call(null,a__10036,b__10038,c__10040,d__10042,e__10044,f__10046);
}
} else
{var g__10048 = cljs.core._first.call(null,args__10047);
var args__10049 = cljs.core._rest.call(null,args__10047);
if((argc === 7))
{if(f__10046.cljs$lang$arity$7)
{return f__10046.cljs$lang$arity$7(a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048);
} else
{return f__10046.call(null,a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048);
}
} else
{var h__10050 = cljs.core._first.call(null,args__10049);
var args__10051 = cljs.core._rest.call(null,args__10049);
if((argc === 8))
{if(f__10046.cljs$lang$arity$8)
{return f__10046.cljs$lang$arity$8(a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050);
} else
{return f__10046.call(null,a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050);
}
} else
{var i__10052 = cljs.core._first.call(null,args__10051);
var args__10053 = cljs.core._rest.call(null,args__10051);
if((argc === 9))
{if(f__10046.cljs$lang$arity$9)
{return f__10046.cljs$lang$arity$9(a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052);
} else
{return f__10046.call(null,a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052);
}
} else
{var j__10054 = cljs.core._first.call(null,args__10053);
var args__10055 = cljs.core._rest.call(null,args__10053);
if((argc === 10))
{if(f__10046.cljs$lang$arity$10)
{return f__10046.cljs$lang$arity$10(a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054);
} else
{return f__10046.call(null,a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054);
}
} else
{var k__10056 = cljs.core._first.call(null,args__10055);
var args__10057 = cljs.core._rest.call(null,args__10055);
if((argc === 11))
{if(f__10046.cljs$lang$arity$11)
{return f__10046.cljs$lang$arity$11(a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056);
} else
{return f__10046.call(null,a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056);
}
} else
{var l__10058 = cljs.core._first.call(null,args__10057);
var args__10059 = cljs.core._rest.call(null,args__10057);
if((argc === 12))
{if(f__10046.cljs$lang$arity$12)
{return f__10046.cljs$lang$arity$12(a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056,l__10058);
} else
{return f__10046.call(null,a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056,l__10058);
}
} else
{var m__10060 = cljs.core._first.call(null,args__10059);
var args__10061 = cljs.core._rest.call(null,args__10059);
if((argc === 13))
{if(f__10046.cljs$lang$arity$13)
{return f__10046.cljs$lang$arity$13(a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056,l__10058,m__10060);
} else
{return f__10046.call(null,a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056,l__10058,m__10060);
}
} else
{var n__10062 = cljs.core._first.call(null,args__10061);
var args__10063 = cljs.core._rest.call(null,args__10061);
if((argc === 14))
{if(f__10046.cljs$lang$arity$14)
{return f__10046.cljs$lang$arity$14(a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056,l__10058,m__10060,n__10062);
} else
{return f__10046.call(null,a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056,l__10058,m__10060,n__10062);
}
} else
{var o__10064 = cljs.core._first.call(null,args__10063);
var args__10065 = cljs.core._rest.call(null,args__10063);
if((argc === 15))
{if(f__10046.cljs$lang$arity$15)
{return f__10046.cljs$lang$arity$15(a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056,l__10058,m__10060,n__10062,o__10064);
} else
{return f__10046.call(null,a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056,l__10058,m__10060,n__10062,o__10064);
}
} else
{var p__10066 = cljs.core._first.call(null,args__10065);
var args__10067 = cljs.core._rest.call(null,args__10065);
if((argc === 16))
{if(f__10046.cljs$lang$arity$16)
{return f__10046.cljs$lang$arity$16(a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056,l__10058,m__10060,n__10062,o__10064,p__10066);
} else
{return f__10046.call(null,a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056,l__10058,m__10060,n__10062,o__10064,p__10066);
}
} else
{var q__10068 = cljs.core._first.call(null,args__10067);
var args__10069 = cljs.core._rest.call(null,args__10067);
if((argc === 17))
{if(f__10046.cljs$lang$arity$17)
{return f__10046.cljs$lang$arity$17(a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056,l__10058,m__10060,n__10062,o__10064,p__10066,q__10068);
} else
{return f__10046.call(null,a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056,l__10058,m__10060,n__10062,o__10064,p__10066,q__10068);
}
} else
{var r__10070 = cljs.core._first.call(null,args__10069);
var args__10071 = cljs.core._rest.call(null,args__10069);
if((argc === 18))
{if(f__10046.cljs$lang$arity$18)
{return f__10046.cljs$lang$arity$18(a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056,l__10058,m__10060,n__10062,o__10064,p__10066,q__10068,r__10070);
} else
{return f__10046.call(null,a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056,l__10058,m__10060,n__10062,o__10064,p__10066,q__10068,r__10070);
}
} else
{var s__10072 = cljs.core._first.call(null,args__10071);
var args__10073 = cljs.core._rest.call(null,args__10071);
if((argc === 19))
{if(f__10046.cljs$lang$arity$19)
{return f__10046.cljs$lang$arity$19(a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056,l__10058,m__10060,n__10062,o__10064,p__10066,q__10068,r__10070,s__10072);
} else
{return f__10046.call(null,a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056,l__10058,m__10060,n__10062,o__10064,p__10066,q__10068,r__10070,s__10072);
}
} else
{var t__10074 = cljs.core._first.call(null,args__10073);
var args__10075 = cljs.core._rest.call(null,args__10073);
if((argc === 20))
{if(f__10046.cljs$lang$arity$20)
{return f__10046.cljs$lang$arity$20(a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056,l__10058,m__10060,n__10062,o__10064,p__10066,q__10068,r__10070,s__10072,t__10074);
} else
{return f__10046.call(null,a__10036,b__10038,c__10040,d__10042,e__10044,f__10046,g__10048,h__10050,i__10052,j__10054,k__10056,l__10058,m__10060,n__10062,o__10064,p__10066,q__10068,r__10070,s__10072,t__10074);
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
var fixed_arity__10090 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10091 = cljs.core.bounded_count.call(null,args,(fixed_arity__10090 + 1));
if((bc__10091 <= fixed_arity__10090))
{return cljs.core.apply_to.call(null,f,bc__10091,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__10092 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10093 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__10094 = cljs.core.bounded_count.call(null,arglist__10092,(fixed_arity__10093 + 1));
if((bc__10094 <= fixed_arity__10093))
{return cljs.core.apply_to.call(null,f,bc__10094,arglist__10092);
} else
{return f.cljs$lang$applyTo(arglist__10092);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10092));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__10095 = cljs.core.list_STAR_.call(null,x,y,args);
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
var apply__5 = (function (f,x,y,z,args){
var arglist__10098 = cljs.core.list_STAR_.call(null,x,y,z,args);
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
var apply__6 = (function() { 
var G__10104__delegate = function (f,a,b,c,d,args){
var arglist__10101 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
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
};
var G__10104 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10104__delegate.call(this, f, a, b, c, d, args);
};
G__10104.cljs$lang$maxFixedArity = 5;
G__10104.cljs$lang$applyTo = (function (arglist__10105){
var f = cljs.core.first(arglist__10105);
var a = cljs.core.first(cljs.core.next(arglist__10105));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10105)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10105))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10105)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10105)))));
return G__10104__delegate(f, a, b, c, d, args);
});
G__10104.cljs$lang$arity$variadic = G__10104__delegate;
return G__10104;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10106){
var obj = cljs.core.first(arglist__10106);
var f = cljs.core.first(cljs.core.next(arglist__10106));
var args = cljs.core.rest(cljs.core.next(arglist__10106));
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
var G__10107__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10107 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10107__delegate.call(this, x, y, more);
};
G__10107.cljs$lang$maxFixedArity = 2;
G__10107.cljs$lang$applyTo = (function (arglist__10108){
var x = cljs.core.first(arglist__10108);
var y = cljs.core.first(cljs.core.next(arglist__10108));
var more = cljs.core.rest(cljs.core.next(arglist__10108));
return G__10107__delegate(x, y, more);
});
G__10107.cljs$lang$arity$variadic = G__10107__delegate;
return G__10107;
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
var G__10109 = pred;
var G__10110 = cljs.core.next.call(null,coll);
pred = G__10109;
coll = G__10110;
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
{var or__3939__auto____10112 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3939__auto____10112))
{return or__3939__auto____10112;
} else
{{
var G__10113 = pred;
var G__10114 = cljs.core.next.call(null,coll);
pred = G__10113;
coll = G__10114;
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
var G__10115 = null;
var G__10115__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10115__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10115__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10115__3 = (function() { 
var G__10116__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10116 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10116__delegate.call(this, x, y, zs);
};
G__10116.cljs$lang$maxFixedArity = 2;
G__10116.cljs$lang$applyTo = (function (arglist__10117){
var x = cljs.core.first(arglist__10117);
var y = cljs.core.first(cljs.core.next(arglist__10117));
var zs = cljs.core.rest(cljs.core.next(arglist__10117));
return G__10116__delegate(x, y, zs);
});
G__10116.cljs$lang$arity$variadic = G__10116__delegate;
return G__10116;
})()
;
G__10115 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__10115__0.call(this);
case 1:
return G__10115__1.call(this,x);
case 2:
return G__10115__2.call(this,x,y);
default:
return G__10115__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__10115.cljs$lang$maxFixedArity = 2;
G__10115.cljs$lang$applyTo = G__10115__3.cljs$lang$applyTo;
return G__10115;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10118__delegate = function (args){
return x;
};
var G__10118 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10118__delegate.call(this, args);
};
G__10118.cljs$lang$maxFixedArity = 0;
G__10118.cljs$lang$applyTo = (function (arglist__10119){
var args = cljs.core.seq(arglist__10119);;
return G__10118__delegate(args);
});
G__10118.cljs$lang$arity$variadic = G__10118__delegate;
return G__10118;
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
var G__10126 = null;
var G__10126__0 = (function (){
return f.call(null,g.call(null));
});
var G__10126__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10126__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10126__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10126__4 = (function() { 
var G__10127__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10127 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10127__delegate.call(this, x, y, z, args);
};
G__10127.cljs$lang$maxFixedArity = 3;
G__10127.cljs$lang$applyTo = (function (arglist__10128){
var x = cljs.core.first(arglist__10128);
var y = cljs.core.first(cljs.core.next(arglist__10128));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10128)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10128)));
return G__10127__delegate(x, y, z, args);
});
G__10127.cljs$lang$arity$variadic = G__10127__delegate;
return G__10127;
})()
;
G__10126 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10126__0.call(this);
case 1:
return G__10126__1.call(this,x);
case 2:
return G__10126__2.call(this,x,y);
case 3:
return G__10126__3.call(this,x,y,z);
default:
return G__10126__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10126.cljs$lang$maxFixedArity = 3;
G__10126.cljs$lang$applyTo = G__10126__4.cljs$lang$applyTo;
return G__10126;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__10129 = null;
var G__10129__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10129__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10129__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10129__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10129__4 = (function() { 
var G__10130__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
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
var comp__4 = (function() { 
var G__10132__delegate = function (f1,f2,f3,fs){
var fs__10123 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__10133__delegate = function (args){
var ret__10124 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10123),args);
var fs__10125 = cljs.core.next.call(null,fs__10123);
while(true){
if(fs__10125)
{{
var G__10134 = cljs.core.first.call(null,fs__10125).call(null,ret__10124);
var G__10135 = cljs.core.next.call(null,fs__10125);
ret__10124 = G__10134;
fs__10125 = G__10135;
continue;
}
} else
{return ret__10124;
}
break;
}
};
var G__10133 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10133__delegate.call(this, args);
};
G__10133.cljs$lang$maxFixedArity = 0;
G__10133.cljs$lang$applyTo = (function (arglist__10136){
var args = cljs.core.seq(arglist__10136);;
return G__10133__delegate(args);
});
G__10133.cljs$lang$arity$variadic = G__10133__delegate;
return G__10133;
})()
;
};
var G__10132 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10132__delegate.call(this, f1, f2, f3, fs);
};
G__10132.cljs$lang$maxFixedArity = 3;
G__10132.cljs$lang$applyTo = (function (arglist__10137){
var f1 = cljs.core.first(arglist__10137);
var f2 = cljs.core.first(cljs.core.next(arglist__10137));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10137)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10137)));
return G__10132__delegate(f1, f2, f3, fs);
});
G__10132.cljs$lang$arity$variadic = G__10132__delegate;
return G__10132;
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
var G__10138__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10138 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10138__delegate.call(this, args);
};
G__10138.cljs$lang$maxFixedArity = 0;
G__10138.cljs$lang$applyTo = (function (arglist__10139){
var args = cljs.core.seq(arglist__10139);;
return G__10138__delegate(args);
});
G__10138.cljs$lang$arity$variadic = G__10138__delegate;
return G__10138;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__10140__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
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
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10142__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
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
var partial__5 = (function() { 
var G__10144__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10145__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
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
};
var G__10144 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10144__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10144.cljs$lang$maxFixedArity = 4;
G__10144.cljs$lang$applyTo = (function (arglist__10147){
var f = cljs.core.first(arglist__10147);
var arg1 = cljs.core.first(cljs.core.next(arglist__10147));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10147)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10147))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10147))));
return G__10144__delegate(f, arg1, arg2, arg3, more);
});
G__10144.cljs$lang$arity$variadic = G__10144__delegate;
return G__10144;
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
var G__10148 = null;
var G__10148__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__10148__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__10148__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__10148__4 = (function() { 
var G__10149__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__10149 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10149__delegate.call(this, a, b, c, ds);
};
G__10149.cljs$lang$maxFixedArity = 3;
G__10149.cljs$lang$applyTo = (function (arglist__10150){
var a = cljs.core.first(arglist__10150);
var b = cljs.core.first(cljs.core.next(arglist__10150));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10150)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10150)));
return G__10149__delegate(a, b, c, ds);
});
G__10149.cljs$lang$arity$variadic = G__10149__delegate;
return G__10149;
})()
;
G__10148 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__10148__1.call(this,a);
case 2:
return G__10148__2.call(this,a,b);
case 3:
return G__10148__3.call(this,a,b,c);
default:
return G__10148__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10148.cljs$lang$maxFixedArity = 3;
G__10148.cljs$lang$applyTo = G__10148__4.cljs$lang$applyTo;
return G__10148;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__10151 = null;
var G__10151__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__10151__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__10151__4 = (function() { 
var G__10152__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
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
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__10154 = null;
var G__10154__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__10154__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__10154__4 = (function() { 
var G__10155__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
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
var mapi__10172 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____10180 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10180)
{var s__10181 = temp__4088__auto____10180;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10181))
{var c__10182 = cljs.core.chunk_first.call(null,s__10181);
var size__10183 = cljs.core.count.call(null,c__10182);
var b__10184 = cljs.core.chunk_buffer.call(null,size__10183);
var n__2554__auto____10185 = size__10183;
var i__10186 = 0;
while(true){
if((i__10186 < n__2554__auto____10185))
{cljs.core.chunk_append.call(null,b__10184,f.call(null,(idx + i__10186),cljs.core._nth.call(null,c__10182,i__10186)));
{
var G__10187 = (i__10186 + 1);
i__10186 = G__10187;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10184),mapi.call(null,(idx + size__10183),cljs.core.chunk_rest.call(null,s__10181)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10181)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__10181)));
}
} else
{return null;
}
}),null));
});
return mapi__10172.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____10197 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10197)
{var s__10198 = temp__4088__auto____10197;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10198))
{var c__10199 = cljs.core.chunk_first.call(null,s__10198);
var size__10200 = cljs.core.count.call(null,c__10199);
var b__10201 = cljs.core.chunk_buffer.call(null,size__10200);
var n__2554__auto____10202 = size__10200;
var i__10203 = 0;
while(true){
if((i__10203 < n__2554__auto____10202))
{var x__10204 = f.call(null,cljs.core._nth.call(null,c__10199,i__10203));
if((x__10204 == null))
{} else
{cljs.core.chunk_append.call(null,b__10201,x__10204);
}
{
var G__10206 = (i__10203 + 1);
i__10203 = G__10206;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10201),keep.call(null,f,cljs.core.chunk_rest.call(null,s__10198)));
} else
{var x__10205 = f.call(null,cljs.core.first.call(null,s__10198));
if((x__10205 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__10198));
} else
{return cljs.core.cons.call(null,x__10205,keep.call(null,f,cljs.core.rest.call(null,s__10198)));
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
var keepi__10232 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____10242 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10242)
{var s__10243 = temp__4088__auto____10242;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10243))
{var c__10244 = cljs.core.chunk_first.call(null,s__10243);
var size__10245 = cljs.core.count.call(null,c__10244);
var b__10246 = cljs.core.chunk_buffer.call(null,size__10245);
var n__2554__auto____10247 = size__10245;
var i__10248 = 0;
while(true){
if((i__10248 < n__2554__auto____10247))
{var x__10249 = f.call(null,(idx + i__10248),cljs.core._nth.call(null,c__10244,i__10248));
if((x__10249 == null))
{} else
{cljs.core.chunk_append.call(null,b__10246,x__10249);
}
{
var G__10251 = (i__10248 + 1);
i__10248 = G__10251;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10246),keepi.call(null,(idx + size__10245),cljs.core.chunk_rest.call(null,s__10243)));
} else
{var x__10250 = f.call(null,idx,cljs.core.first.call(null,s__10243));
if((x__10250 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__10243));
} else
{return cljs.core.cons.call(null,x__10250,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__10243)));
}
}
} else
{return null;
}
}),null));
});
return keepi__10232.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10337 = p.call(null,x);
if(cljs.core.truth_(and__3937__auto____10337))
{return p.call(null,y);
} else
{return and__3937__auto____10337;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10338 = p.call(null,x);
if(cljs.core.truth_(and__3937__auto____10338))
{var and__3937__auto____10339 = p.call(null,y);
if(cljs.core.truth_(and__3937__auto____10339))
{return p.call(null,z);
} else
{return and__3937__auto____10339;
}
} else
{return and__3937__auto____10338;
}
})());
});
var ep1__4 = (function() { 
var G__10408__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10340 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3937__auto____10340))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3937__auto____10340;
}
})());
};
var G__10408 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10408__delegate.call(this, x, y, z, args);
};
G__10408.cljs$lang$maxFixedArity = 3;
G__10408.cljs$lang$applyTo = (function (arglist__10409){
var x = cljs.core.first(arglist__10409);
var y = cljs.core.first(cljs.core.next(arglist__10409));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10409)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10409)));
return G__10408__delegate(x, y, z, args);
});
G__10408.cljs$lang$arity$variadic = G__10408__delegate;
return G__10408;
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
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10352 = p1.call(null,x);
if(cljs.core.truth_(and__3937__auto____10352))
{return p2.call(null,x);
} else
{return and__3937__auto____10352;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10353 = p1.call(null,x);
if(cljs.core.truth_(and__3937__auto____10353))
{var and__3937__auto____10354 = p1.call(null,y);
if(cljs.core.truth_(and__3937__auto____10354))
{var and__3937__auto____10355 = p2.call(null,x);
if(cljs.core.truth_(and__3937__auto____10355))
{return p2.call(null,y);
} else
{return and__3937__auto____10355;
}
} else
{return and__3937__auto____10354;
}
} else
{return and__3937__auto____10353;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10356 = p1.call(null,x);
if(cljs.core.truth_(and__3937__auto____10356))
{var and__3937__auto____10357 = p1.call(null,y);
if(cljs.core.truth_(and__3937__auto____10357))
{var and__3937__auto____10358 = p1.call(null,z);
if(cljs.core.truth_(and__3937__auto____10358))
{var and__3937__auto____10359 = p2.call(null,x);
if(cljs.core.truth_(and__3937__auto____10359))
{var and__3937__auto____10360 = p2.call(null,y);
if(cljs.core.truth_(and__3937__auto____10360))
{return p2.call(null,z);
} else
{return and__3937__auto____10360;
}
} else
{return and__3937__auto____10359;
}
} else
{return and__3937__auto____10358;
}
} else
{return and__3937__auto____10357;
}
} else
{return and__3937__auto____10356;
}
})());
});
var ep2__4 = (function() { 
var G__10410__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10361 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3937__auto____10361))
{return cljs.core.every_QMARK_.call(null,(function (p1__10207_SHARP_){
var and__3937__auto____10362 = p1.call(null,p1__10207_SHARP_);
if(cljs.core.truth_(and__3937__auto____10362))
{return p2.call(null,p1__10207_SHARP_);
} else
{return and__3937__auto____10362;
}
}),args);
} else
{return and__3937__auto____10361;
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
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10381 = p1.call(null,x);
if(cljs.core.truth_(and__3937__auto____10381))
{var and__3937__auto____10382 = p2.call(null,x);
if(cljs.core.truth_(and__3937__auto____10382))
{return p3.call(null,x);
} else
{return and__3937__auto____10382;
}
} else
{return and__3937__auto____10381;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10383 = p1.call(null,x);
if(cljs.core.truth_(and__3937__auto____10383))
{var and__3937__auto____10384 = p2.call(null,x);
if(cljs.core.truth_(and__3937__auto____10384))
{var and__3937__auto____10385 = p3.call(null,x);
if(cljs.core.truth_(and__3937__auto____10385))
{var and__3937__auto____10386 = p1.call(null,y);
if(cljs.core.truth_(and__3937__auto____10386))
{var and__3937__auto____10387 = p2.call(null,y);
if(cljs.core.truth_(and__3937__auto____10387))
{return p3.call(null,y);
} else
{return and__3937__auto____10387;
}
} else
{return and__3937__auto____10386;
}
} else
{return and__3937__auto____10385;
}
} else
{return and__3937__auto____10384;
}
} else
{return and__3937__auto____10383;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10388 = p1.call(null,x);
if(cljs.core.truth_(and__3937__auto____10388))
{var and__3937__auto____10389 = p2.call(null,x);
if(cljs.core.truth_(and__3937__auto____10389))
{var and__3937__auto____10390 = p3.call(null,x);
if(cljs.core.truth_(and__3937__auto____10390))
{var and__3937__auto____10391 = p1.call(null,y);
if(cljs.core.truth_(and__3937__auto____10391))
{var and__3937__auto____10392 = p2.call(null,y);
if(cljs.core.truth_(and__3937__auto____10392))
{var and__3937__auto____10393 = p3.call(null,y);
if(cljs.core.truth_(and__3937__auto____10393))
{var and__3937__auto____10394 = p1.call(null,z);
if(cljs.core.truth_(and__3937__auto____10394))
{var and__3937__auto____10395 = p2.call(null,z);
if(cljs.core.truth_(and__3937__auto____10395))
{return p3.call(null,z);
} else
{return and__3937__auto____10395;
}
} else
{return and__3937__auto____10394;
}
} else
{return and__3937__auto____10393;
}
} else
{return and__3937__auto____10392;
}
} else
{return and__3937__auto____10391;
}
} else
{return and__3937__auto____10390;
}
} else
{return and__3937__auto____10389;
}
} else
{return and__3937__auto____10388;
}
})());
});
var ep3__4 = (function() { 
var G__10412__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10396 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3937__auto____10396))
{return cljs.core.every_QMARK_.call(null,(function (p1__10208_SHARP_){
var and__3937__auto____10397 = p1.call(null,p1__10208_SHARP_);
if(cljs.core.truth_(and__3937__auto____10397))
{var and__3937__auto____10398 = p2.call(null,p1__10208_SHARP_);
if(cljs.core.truth_(and__3937__auto____10398))
{return p3.call(null,p1__10208_SHARP_);
} else
{return and__3937__auto____10398;
}
} else
{return and__3937__auto____10397;
}
}),args);
} else
{return and__3937__auto____10396;
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
var G__10414__delegate = function (p1,p2,p3,ps){
var ps__10399 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10209_SHARP_){
return p1__10209_SHARP_.call(null,x);
}),ps__10399);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10210_SHARP_){
var and__3937__auto____10404 = p1__10210_SHARP_.call(null,x);
if(cljs.core.truth_(and__3937__auto____10404))
{return p1__10210_SHARP_.call(null,y);
} else
{return and__3937__auto____10404;
}
}),ps__10399);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10211_SHARP_){
var and__3937__auto____10405 = p1__10211_SHARP_.call(null,x);
if(cljs.core.truth_(and__3937__auto____10405))
{var and__3937__auto____10406 = p1__10211_SHARP_.call(null,y);
if(cljs.core.truth_(and__3937__auto____10406))
{return p1__10211_SHARP_.call(null,z);
} else
{return and__3937__auto____10406;
}
} else
{return and__3937__auto____10405;
}
}),ps__10399);
});
var epn__4 = (function() { 
var G__10415__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3937__auto____10407 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3937__auto____10407))
{return cljs.core.every_QMARK_.call(null,(function (p1__10212_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10212_SHARP_,args);
}),ps__10399);
} else
{return and__3937__auto____10407;
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
var G__10414 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10414__delegate.call(this, p1, p2, p3, ps);
};
G__10414.cljs$lang$maxFixedArity = 3;
G__10414.cljs$lang$applyTo = (function (arglist__10417){
var p1 = cljs.core.first(arglist__10417);
var p2 = cljs.core.first(cljs.core.next(arglist__10417));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10417)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10417)));
return G__10414__delegate(p1, p2, p3, ps);
});
G__10414.cljs$lang$arity$variadic = G__10414__delegate;
return G__10414;
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
var or__3939__auto____10498 = p.call(null,x);
if(cljs.core.truth_(or__3939__auto____10498))
{return or__3939__auto____10498;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3939__auto____10499 = p.call(null,x);
if(cljs.core.truth_(or__3939__auto____10499))
{return or__3939__auto____10499;
} else
{var or__3939__auto____10500 = p.call(null,y);
if(cljs.core.truth_(or__3939__auto____10500))
{return or__3939__auto____10500;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__10569__delegate = function (x,y,z,args){
var or__3939__auto____10501 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3939__auto____10501))
{return or__3939__auto____10501;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__10569 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10569__delegate.call(this, x, y, z, args);
};
G__10569.cljs$lang$maxFixedArity = 3;
G__10569.cljs$lang$applyTo = (function (arglist__10570){
var x = cljs.core.first(arglist__10570);
var y = cljs.core.first(cljs.core.next(arglist__10570));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10570)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10570)));
return G__10569__delegate(x, y, z, args);
});
G__10569.cljs$lang$arity$variadic = G__10569__delegate;
return G__10569;
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
var or__3939__auto____10513 = p1.call(null,x);
if(cljs.core.truth_(or__3939__auto____10513))
{return or__3939__auto____10513;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3939__auto____10514 = p1.call(null,x);
if(cljs.core.truth_(or__3939__auto____10514))
{return or__3939__auto____10514;
} else
{var or__3939__auto____10515 = p1.call(null,y);
if(cljs.core.truth_(or__3939__auto____10515))
{return or__3939__auto____10515;
} else
{var or__3939__auto____10516 = p2.call(null,x);
if(cljs.core.truth_(or__3939__auto____10516))
{return or__3939__auto____10516;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3939__auto____10517 = p1.call(null,x);
if(cljs.core.truth_(or__3939__auto____10517))
{return or__3939__auto____10517;
} else
{var or__3939__auto____10518 = p1.call(null,y);
if(cljs.core.truth_(or__3939__auto____10518))
{return or__3939__auto____10518;
} else
{var or__3939__auto____10519 = p1.call(null,z);
if(cljs.core.truth_(or__3939__auto____10519))
{return or__3939__auto____10519;
} else
{var or__3939__auto____10520 = p2.call(null,x);
if(cljs.core.truth_(or__3939__auto____10520))
{return or__3939__auto____10520;
} else
{var or__3939__auto____10521 = p2.call(null,y);
if(cljs.core.truth_(or__3939__auto____10521))
{return or__3939__auto____10521;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__10571__delegate = function (x,y,z,args){
var or__3939__auto____10522 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3939__auto____10522))
{return or__3939__auto____10522;
} else
{return cljs.core.some.call(null,(function (p1__10252_SHARP_){
var or__3939__auto____10523 = p1.call(null,p1__10252_SHARP_);
if(cljs.core.truth_(or__3939__auto____10523))
{return or__3939__auto____10523;
} else
{return p2.call(null,p1__10252_SHARP_);
}
}),args);
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
var or__3939__auto____10542 = p1.call(null,x);
if(cljs.core.truth_(or__3939__auto____10542))
{return or__3939__auto____10542;
} else
{var or__3939__auto____10543 = p2.call(null,x);
if(cljs.core.truth_(or__3939__auto____10543))
{return or__3939__auto____10543;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3939__auto____10544 = p1.call(null,x);
if(cljs.core.truth_(or__3939__auto____10544))
{return or__3939__auto____10544;
} else
{var or__3939__auto____10545 = p2.call(null,x);
if(cljs.core.truth_(or__3939__auto____10545))
{return or__3939__auto____10545;
} else
{var or__3939__auto____10546 = p3.call(null,x);
if(cljs.core.truth_(or__3939__auto____10546))
{return or__3939__auto____10546;
} else
{var or__3939__auto____10547 = p1.call(null,y);
if(cljs.core.truth_(or__3939__auto____10547))
{return or__3939__auto____10547;
} else
{var or__3939__auto____10548 = p2.call(null,y);
if(cljs.core.truth_(or__3939__auto____10548))
{return or__3939__auto____10548;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3939__auto____10549 = p1.call(null,x);
if(cljs.core.truth_(or__3939__auto____10549))
{return or__3939__auto____10549;
} else
{var or__3939__auto____10550 = p2.call(null,x);
if(cljs.core.truth_(or__3939__auto____10550))
{return or__3939__auto____10550;
} else
{var or__3939__auto____10551 = p3.call(null,x);
if(cljs.core.truth_(or__3939__auto____10551))
{return or__3939__auto____10551;
} else
{var or__3939__auto____10552 = p1.call(null,y);
if(cljs.core.truth_(or__3939__auto____10552))
{return or__3939__auto____10552;
} else
{var or__3939__auto____10553 = p2.call(null,y);
if(cljs.core.truth_(or__3939__auto____10553))
{return or__3939__auto____10553;
} else
{var or__3939__auto____10554 = p3.call(null,y);
if(cljs.core.truth_(or__3939__auto____10554))
{return or__3939__auto____10554;
} else
{var or__3939__auto____10555 = p1.call(null,z);
if(cljs.core.truth_(or__3939__auto____10555))
{return or__3939__auto____10555;
} else
{var or__3939__auto____10556 = p2.call(null,z);
if(cljs.core.truth_(or__3939__auto____10556))
{return or__3939__auto____10556;
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
var G__10573__delegate = function (x,y,z,args){
var or__3939__auto____10557 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3939__auto____10557))
{return or__3939__auto____10557;
} else
{return cljs.core.some.call(null,(function (p1__10253_SHARP_){
var or__3939__auto____10558 = p1.call(null,p1__10253_SHARP_);
if(cljs.core.truth_(or__3939__auto____10558))
{return or__3939__auto____10558;
} else
{var or__3939__auto____10559 = p2.call(null,p1__10253_SHARP_);
if(cljs.core.truth_(or__3939__auto____10559))
{return or__3939__auto____10559;
} else
{return p3.call(null,p1__10253_SHARP_);
}
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
var G__10575__delegate = function (p1,p2,p3,ps){
var ps__10560 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__10254_SHARP_){
return p1__10254_SHARP_.call(null,x);
}),ps__10560);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10255_SHARP_){
var or__3939__auto____10565 = p1__10255_SHARP_.call(null,x);
if(cljs.core.truth_(or__3939__auto____10565))
{return or__3939__auto____10565;
} else
{return p1__10255_SHARP_.call(null,y);
}
}),ps__10560);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10256_SHARP_){
var or__3939__auto____10566 = p1__10256_SHARP_.call(null,x);
if(cljs.core.truth_(or__3939__auto____10566))
{return or__3939__auto____10566;
} else
{var or__3939__auto____10567 = p1__10256_SHARP_.call(null,y);
if(cljs.core.truth_(or__3939__auto____10567))
{return or__3939__auto____10567;
} else
{return p1__10256_SHARP_.call(null,z);
}
}
}),ps__10560);
});
var spn__4 = (function() { 
var G__10576__delegate = function (x,y,z,args){
var or__3939__auto____10568 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3939__auto____10568))
{return or__3939__auto____10568;
} else
{return cljs.core.some.call(null,(function (p1__10257_SHARP_){
return cljs.core.some.call(null,p1__10257_SHARP_,args);
}),ps__10560);
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
var G__10575 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10575__delegate.call(this, p1, p2, p3, ps);
};
G__10575.cljs$lang$maxFixedArity = 3;
G__10575.cljs$lang$applyTo = (function (arglist__10578){
var p1 = cljs.core.first(arglist__10578);
var p2 = cljs.core.first(cljs.core.next(arglist__10578));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10578)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10578)));
return G__10575__delegate(p1, p2, p3, ps);
});
G__10575.cljs$lang$arity$variadic = G__10575__delegate;
return G__10575;
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
var temp__4088__auto____10597 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10597)
{var s__10598 = temp__4088__auto____10597;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10598))
{var c__10599 = cljs.core.chunk_first.call(null,s__10598);
var size__10600 = cljs.core.count.call(null,c__10599);
var b__10601 = cljs.core.chunk_buffer.call(null,size__10600);
var n__2554__auto____10602 = size__10600;
var i__10603 = 0;
while(true){
if((i__10603 < n__2554__auto____10602))
{cljs.core.chunk_append.call(null,b__10601,f.call(null,cljs.core._nth.call(null,c__10599,i__10603)));
{
var G__10615 = (i__10603 + 1);
i__10603 = G__10615;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10601),map.call(null,f,cljs.core.chunk_rest.call(null,s__10598)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__10598)),map.call(null,f,cljs.core.rest.call(null,s__10598)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10604 = cljs.core.seq.call(null,c1);
var s2__10605 = cljs.core.seq.call(null,c2);
if((function (){var and__3937__auto____10606 = s1__10604;
if(and__3937__auto____10606)
{return s2__10605;
} else
{return and__3937__auto____10606;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10604),cljs.core.first.call(null,s2__10605)),map.call(null,f,cljs.core.rest.call(null,s1__10604),cljs.core.rest.call(null,s2__10605)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10607 = cljs.core.seq.call(null,c1);
var s2__10608 = cljs.core.seq.call(null,c2);
var s3__10609 = cljs.core.seq.call(null,c3);
if((function (){var and__3937__auto____10610 = s1__10607;
if(and__3937__auto____10610)
{var and__3937__auto____10611 = s2__10608;
if(and__3937__auto____10611)
{return s3__10609;
} else
{return and__3937__auto____10611;
}
} else
{return and__3937__auto____10610;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10607),cljs.core.first.call(null,s2__10608),cljs.core.first.call(null,s3__10609)),map.call(null,f,cljs.core.rest.call(null,s1__10607),cljs.core.rest.call(null,s2__10608),cljs.core.rest.call(null,s3__10609)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__10616__delegate = function (f,c1,c2,c3,colls){
var step__10614 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10613 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10613))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__10613),step.call(null,map.call(null,cljs.core.rest,ss__10613)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__10418_SHARP_){
return cljs.core.apply.call(null,f,p1__10418_SHARP_);
}),step__10614.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__10616 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10616__delegate.call(this, f, c1, c2, c3, colls);
};
G__10616.cljs$lang$maxFixedArity = 4;
G__10616.cljs$lang$applyTo = (function (arglist__10617){
var f = cljs.core.first(arglist__10617);
var c1 = cljs.core.first(cljs.core.next(arglist__10617));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10617)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10617))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10617))));
return G__10616__delegate(f, c1, c2, c3, colls);
});
G__10616.cljs$lang$arity$variadic = G__10616__delegate;
return G__10616;
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
{var temp__4088__auto____10620 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10620)
{var s__10621 = temp__4088__auto____10620;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__10621),take.call(null,(n - 1),cljs.core.rest.call(null,s__10621)));
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
var step__10627 = (function (n,coll){
while(true){
var s__10625 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3937__auto____10626 = (n > 0);
if(and__3937__auto____10626)
{return s__10625;
} else
{return and__3937__auto____10626;
}
})()))
{{
var G__10628 = (n - 1);
var G__10629 = cljs.core.rest.call(null,s__10625);
n = G__10628;
coll = G__10629;
continue;
}
} else
{return s__10625;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__10627.call(null,n,coll);
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
var s__10632 = cljs.core.seq.call(null,coll);
var lead__10633 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__10633)
{{
var G__10634 = cljs.core.next.call(null,s__10632);
var G__10635 = cljs.core.next.call(null,lead__10633);
s__10632 = G__10634;
lead__10633 = G__10635;
continue;
}
} else
{return s__10632;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__10641 = (function (pred,coll){
while(true){
var s__10639 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3937__auto____10640 = s__10639;
if(and__3937__auto____10640)
{return pred.call(null,cljs.core.first.call(null,s__10639));
} else
{return and__3937__auto____10640;
}
})()))
{{
var G__10642 = pred;
var G__10643 = cljs.core.rest.call(null,s__10639);
pred = G__10642;
coll = G__10643;
continue;
}
} else
{return s__10639;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__10641.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____10646 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10646)
{var s__10647 = temp__4088__auto____10646;
return cljs.core.concat.call(null,s__10647,cycle.call(null,s__10647));
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
var s1__10652 = cljs.core.seq.call(null,c1);
var s2__10653 = cljs.core.seq.call(null,c2);
if((function (){var and__3937__auto____10654 = s1__10652;
if(and__3937__auto____10654)
{return s2__10653;
} else
{return and__3937__auto____10654;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__10652),cljs.core.cons.call(null,cljs.core.first.call(null,s2__10653),interleave.call(null,cljs.core.rest.call(null,s1__10652),cljs.core.rest.call(null,s2__10653))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__10656__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10655 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10655))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__10655),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__10655)));
} else
{return null;
}
}),null));
};
var G__10656 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10656__delegate.call(this, c1, c2, colls);
};
G__10656.cljs$lang$maxFixedArity = 2;
G__10656.cljs$lang$applyTo = (function (arglist__10657){
var c1 = cljs.core.first(arglist__10657);
var c2 = cljs.core.first(cljs.core.next(arglist__10657));
var colls = cljs.core.rest(cljs.core.next(arglist__10657));
return G__10656__delegate(c1, c2, colls);
});
G__10656.cljs$lang$arity$variadic = G__10656__delegate;
return G__10656;
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
var cat__10667 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4086__auto____10665 = cljs.core.seq.call(null,coll);
if(temp__4086__auto____10665)
{var coll__10666 = temp__4086__auto____10665;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__10666),cat.call(null,cljs.core.rest.call(null,coll__10666),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__10667.call(null,null,colls);
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
var G__10668__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__10668 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10668__delegate.call(this, f, coll, colls);
};
G__10668.cljs$lang$maxFixedArity = 2;
G__10668.cljs$lang$applyTo = (function (arglist__10669){
var f = cljs.core.first(arglist__10669);
var coll = cljs.core.first(cljs.core.next(arglist__10669));
var colls = cljs.core.rest(cljs.core.next(arglist__10669));
return G__10668__delegate(f, coll, colls);
});
G__10668.cljs$lang$arity$variadic = G__10668__delegate;
return G__10668;
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
var temp__4088__auto____10679 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10679)
{var s__10680 = temp__4088__auto____10679;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10680))
{var c__10681 = cljs.core.chunk_first.call(null,s__10680);
var size__10682 = cljs.core.count.call(null,c__10681);
var b__10683 = cljs.core.chunk_buffer.call(null,size__10682);
var n__2554__auto____10684 = size__10682;
var i__10685 = 0;
while(true){
if((i__10685 < n__2554__auto____10684))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__10681,i__10685))))
{cljs.core.chunk_append.call(null,b__10683,cljs.core._nth.call(null,c__10681,i__10685));
} else
{}
{
var G__10688 = (i__10685 + 1);
i__10685 = G__10688;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10683),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__10680)));
} else
{var f__10686 = cljs.core.first.call(null,s__10680);
var r__10687 = cljs.core.rest.call(null,s__10680);
if(cljs.core.truth_(pred.call(null,f__10686)))
{return cljs.core.cons.call(null,f__10686,filter.call(null,pred,r__10687));
} else
{return filter.call(null,pred,r__10687);
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
var walk__10691 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__10691.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__10689_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__10689_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__10695__10696 = to;
if(G__10695__10696)
{if((function (){var or__3939__auto____10697 = (G__10695__10696.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3939__auto____10697)
{return or__3939__auto____10697;
} else
{return G__10695__10696.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__10695__10696.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__10695__10696);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__10695__10696);
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
var G__10698__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__10698 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10698__delegate.call(this, f, c1, c2, c3, colls);
};
G__10698.cljs$lang$maxFixedArity = 4;
G__10698.cljs$lang$applyTo = (function (arglist__10699){
var f = cljs.core.first(arglist__10699);
var c1 = cljs.core.first(cljs.core.next(arglist__10699));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10699)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10699))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10699))));
return G__10698__delegate(f, c1, c2, c3, colls);
});
G__10698.cljs$lang$arity$variadic = G__10698__delegate;
return G__10698;
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
var temp__4088__auto____10706 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10706)
{var s__10707 = temp__4088__auto____10706;
var p__10708 = cljs.core.take.call(null,n,s__10707);
if((n === cljs.core.count.call(null,p__10708)))
{return cljs.core.cons.call(null,p__10708,partition.call(null,n,step,cljs.core.drop.call(null,step,s__10707)));
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
var temp__4088__auto____10709 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____10709)
{var s__10710 = temp__4088__auto____10709;
var p__10711 = cljs.core.take.call(null,n,s__10710);
if((n === cljs.core.count.call(null,p__10711)))
{return cljs.core.cons.call(null,p__10711,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__10710)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__10711,pad)));
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
var sentinel__10716 = cljs.core.lookup_sentinel;
var m__10717 = m;
var ks__10718 = cljs.core.seq.call(null,ks);
while(true){
if(ks__10718)
{var m__10719 = cljs.core._lookup.call(null,m__10717,cljs.core.first.call(null,ks__10718),sentinel__10716);
if((sentinel__10716 === m__10719))
{return not_found;
} else
{{
var G__10720 = sentinel__10716;
var G__10721 = m__10719;
var G__10722 = cljs.core.next.call(null,ks__10718);
sentinel__10716 = G__10720;
m__10717 = G__10721;
ks__10718 = G__10722;
continue;
}
}
} else
{return m__10717;
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
cljs.core.assoc_in = (function assoc_in(m,p__10723,v){
var vec__10728__10729 = p__10723;
var k__10730 = cljs.core.nth.call(null,vec__10728__10729,0,null);
var ks__10731 = cljs.core.nthnext.call(null,vec__10728__10729,1);
if(cljs.core.truth_(ks__10731))
{return cljs.core.assoc.call(null,m,k__10730,assoc_in.call(null,cljs.core._lookup.call(null,m,k__10730,null),ks__10731,v));
} else
{return cljs.core.assoc.call(null,m,k__10730,v);
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
var update_in__delegate = function (m,p__10732,f,args){
var vec__10737__10738 = p__10732;
var k__10739 = cljs.core.nth.call(null,vec__10737__10738,0,null);
var ks__10740 = cljs.core.nthnext.call(null,vec__10737__10738,1);
if(cljs.core.truth_(ks__10740))
{return cljs.core.assoc.call(null,m,k__10739,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__10739,null),ks__10740,f,args));
} else
{return cljs.core.assoc.call(null,m,k__10739,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__10739,null),args));
}
};
var update_in = function (m,p__10732,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__10732, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__10741){
var m = cljs.core.first(arglist__10741);
var p__10732 = cljs.core.first(cljs.core.next(arglist__10741));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10741)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10741)));
return update_in__delegate(m, p__10732, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10744 = this;
var h__2219__auto____10745 = this__10744.__hash;
if(!((h__2219__auto____10745 == null)))
{return h__2219__auto____10745;
} else
{var h__2219__auto____10746 = cljs.core.hash_coll.call(null,coll);
this__10744.__hash = h__2219__auto____10746;
return h__2219__auto____10746;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10747 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10748 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10749 = this;
var new_array__10750 = this__10749.array.slice();
(new_array__10750[k] = v);
return (new cljs.core.Vector(this__10749.meta,new_array__10750,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__10781 = null;
var G__10781__2 = (function (this_sym10751,k){
var this__10753 = this;
var this_sym10751__10754 = this;
var coll__10755 = this_sym10751__10754;
return coll__10755.cljs$core$ILookup$_lookup$arity$2(coll__10755,k);
});
var G__10781__3 = (function (this_sym10752,k,not_found){
var this__10753 = this;
var this_sym10752__10756 = this;
var coll__10757 = this_sym10752__10756;
return coll__10757.cljs$core$ILookup$_lookup$arity$3(coll__10757,k,not_found);
});
G__10781 = function(this_sym10752,k,not_found){
switch(arguments.length){
case 2:
return G__10781__2.call(this,this_sym10752,k);
case 3:
return G__10781__3.call(this,this_sym10752,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10781;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym10742,args10743){
var this__10758 = this;
return this_sym10742.call.apply(this_sym10742,[this_sym10742].concat(args10743.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10759 = this;
var new_array__10760 = this__10759.array.slice();
new_array__10760.push(o);
return (new cljs.core.Vector(this__10759.meta,new_array__10760,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__10761 = this;
var this__10762 = this;
return cljs.core.pr_str.call(null,this__10762);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10763 = this;
return cljs.core.ci_reduce.call(null,this__10763.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10764 = this;
return cljs.core.ci_reduce.call(null,this__10764.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10765 = this;
if((this__10765.array.length > 0))
{var vector_seq__10766 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__10765.array.length))
{return cljs.core.cons.call(null,(this__10765.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__10766.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10767 = this;
return this__10767.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10768 = this;
var count__10769 = this__10768.array.length;
if((count__10769 > 0))
{return (this__10768.array[(count__10769 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10770 = this;
if((this__10770.array.length > 0))
{var new_array__10771 = this__10770.array.slice();
new_array__10771.pop();
return (new cljs.core.Vector(this__10770.meta,new_array__10771,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10772 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10773 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10774 = this;
return (new cljs.core.Vector(meta,this__10774.array,this__10774.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10775 = this;
return this__10775.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10776 = this;
if((function (){var and__3937__auto____10777 = (0 <= n);
if(and__3937__auto____10777)
{return (n < this__10776.array.length);
} else
{return and__3937__auto____10777;
}
})())
{return (this__10776.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10778 = this;
if((function (){var and__3937__auto____10779 = (0 <= n);
if(and__3937__auto____10779)
{return (n < this__10778.array.length);
} else
{return and__3937__auto____10779;
}
})())
{return (this__10778.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10780 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10780.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
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
var cnt__10783 = pv.cnt;
if((cnt__10783 < 32))
{return 0;
} else
{return (((cnt__10783 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__10789 = level;
var ret__10790 = node;
while(true){
if((ll__10789 === 0))
{return ret__10790;
} else
{var embed__10791 = ret__10790;
var r__10792 = cljs.core.pv_fresh_node.call(null,edit);
var ___10793 = cljs.core.pv_aset.call(null,r__10792,0,embed__10791);
{
var G__10794 = (ll__10789 - 5);
var G__10795 = r__10792;
ll__10789 = G__10794;
ret__10790 = G__10795;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__10801 = cljs.core.pv_clone_node.call(null,parent);
var subidx__10802 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__10801,subidx__10802,tailnode);
return ret__10801;
} else
{var child__10803 = cljs.core.pv_aget.call(null,parent,subidx__10802);
if(!((child__10803 == null)))
{var node_to_insert__10804 = push_tail.call(null,pv,(level - 5),child__10803,tailnode);
cljs.core.pv_aset.call(null,ret__10801,subidx__10802,node_to_insert__10804);
return ret__10801;
} else
{var node_to_insert__10805 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__10801,subidx__10802,node_to_insert__10805);
return ret__10801;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3937__auto____10809 = (0 <= i);
if(and__3937__auto____10809)
{return (i < pv.cnt);
} else
{return and__3937__auto____10809;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__10810 = pv.root;
var level__10811 = pv.shift;
while(true){
if((level__10811 > 0))
{{
var G__10812 = cljs.core.pv_aget.call(null,node__10810,((i >>> level__10811) & 31));
var G__10813 = (level__10811 - 5);
node__10810 = G__10812;
level__10811 = G__10813;
continue;
}
} else
{return node__10810.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__10816 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__10816,(i & 31),val);
return ret__10816;
} else
{var subidx__10817 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10816,subidx__10817,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10817),i,val));
return ret__10816;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__10823 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10824 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__10823));
if((function (){var and__3937__auto____10825 = (new_child__10824 == null);
if(and__3937__auto____10825)
{return (subidx__10823 === 0);
} else
{return and__3937__auto____10825;
}
})())
{return null;
} else
{var ret__10826 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10826,subidx__10823,new_child__10824);
return ret__10826;
}
} else
{if((subidx__10823 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__10827 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__10827,subidx__10823,null);
return ret__10827;
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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10830 = this;
return (new cljs.core.TransientVector(this__10830.cnt,this__10830.shift,cljs.core.tv_editable_root.call(null,this__10830.root),cljs.core.tv_editable_tail.call(null,this__10830.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10831 = this;
var h__2219__auto____10832 = this__10831.__hash;
if(!((h__2219__auto____10832 == null)))
{return h__2219__auto____10832;
} else
{var h__2219__auto____10833 = cljs.core.hash_coll.call(null,coll);
this__10831.__hash = h__2219__auto____10833;
return h__2219__auto____10833;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10834 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10835 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10836 = this;
if((function (){var and__3937__auto____10837 = (0 <= k);
if(and__3937__auto____10837)
{return (k < this__10836.cnt);
} else
{return and__3937__auto____10837;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__10838 = this__10836.tail.slice();
(new_tail__10838[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__10836.meta,this__10836.cnt,this__10836.shift,this__10836.root,new_tail__10838,null));
} else
{return (new cljs.core.PersistentVector(this__10836.meta,this__10836.cnt,this__10836.shift,cljs.core.do_assoc.call(null,coll,this__10836.shift,this__10836.root,k,v),this__10836.tail,null));
}
} else
{if((k === this__10836.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__10836.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__10886 = null;
var G__10886__2 = (function (this_sym10839,k){
var this__10841 = this;
var this_sym10839__10842 = this;
var coll__10843 = this_sym10839__10842;
return coll__10843.cljs$core$ILookup$_lookup$arity$2(coll__10843,k);
});
var G__10886__3 = (function (this_sym10840,k,not_found){
var this__10841 = this;
var this_sym10840__10844 = this;
var coll__10845 = this_sym10840__10844;
return coll__10845.cljs$core$ILookup$_lookup$arity$3(coll__10845,k,not_found);
});
G__10886 = function(this_sym10840,k,not_found){
switch(arguments.length){
case 2:
return G__10886__2.call(this,this_sym10840,k);
case 3:
return G__10886__3.call(this,this_sym10840,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10886;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym10828,args10829){
var this__10846 = this;
return this_sym10828.call.apply(this_sym10828,[this_sym10828].concat(args10829.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__10847 = this;
var step_init__10848 = [0,init];
var i__10849 = 0;
while(true){
if((i__10849 < this__10847.cnt))
{var arr__10850 = cljs.core.array_for.call(null,v,i__10849);
var len__10851 = arr__10850.length;
var init__10855 = (function (){var j__10852 = 0;
var init__10853 = (step_init__10848[1]);
while(true){
if((j__10852 < len__10851))
{var init__10854 = f.call(null,init__10853,(j__10852 + i__10849),(arr__10850[j__10852]));
if(cljs.core.reduced_QMARK_.call(null,init__10854))
{return init__10854;
} else
{{
var G__10887 = (j__10852 + 1);
var G__10888 = init__10854;
j__10852 = G__10887;
init__10853 = G__10888;
continue;
}
}
} else
{(step_init__10848[0] = len__10851);
(step_init__10848[1] = init__10853);
return init__10853;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__10855))
{return cljs.core.deref.call(null,init__10855);
} else
{{
var G__10889 = (i__10849 + (step_init__10848[0]));
i__10849 = G__10889;
continue;
}
}
} else
{return (step_init__10848[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10856 = this;
if(((this__10856.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__10857 = this__10856.tail.slice();
new_tail__10857.push(o);
return (new cljs.core.PersistentVector(this__10856.meta,(this__10856.cnt + 1),this__10856.shift,this__10856.root,new_tail__10857,null));
} else
{var root_overflow_QMARK___10858 = ((this__10856.cnt >>> 5) > (1 << this__10856.shift));
var new_shift__10859 = ((root_overflow_QMARK___10858)?(this__10856.shift + 5):this__10856.shift);
var new_root__10861 = ((root_overflow_QMARK___10858)?(function (){var n_r__10860 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__10860,0,this__10856.root);
cljs.core.pv_aset.call(null,n_r__10860,1,cljs.core.new_path.call(null,null,this__10856.shift,(new cljs.core.VectorNode(null,this__10856.tail))));
return n_r__10860;
})():cljs.core.push_tail.call(null,coll,this__10856.shift,this__10856.root,(new cljs.core.VectorNode(null,this__10856.tail))));
return (new cljs.core.PersistentVector(this__10856.meta,(this__10856.cnt + 1),new_shift__10859,new_root__10861,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10862 = this;
if((this__10862.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__10862.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__10863 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__10864 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__10865 = this;
var this__10866 = this;
return cljs.core.pr_str.call(null,this__10866);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__10867 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__10868 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10869 = this;
if((this__10869.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10870 = this;
return this__10870.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10871 = this;
if((this__10871.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__10871.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10872 = this;
if((this__10872.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__10872.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10872.meta);
} else
{if((1 < (this__10872.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__10872.meta,(this__10872.cnt - 1),this__10872.shift,this__10872.root,this__10872.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__10873 = cljs.core.array_for.call(null,coll,(this__10872.cnt - 2));
var nr__10874 = cljs.core.pop_tail.call(null,coll,this__10872.shift,this__10872.root);
var new_root__10875 = (((nr__10874 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__10874);
var cnt_1__10876 = (this__10872.cnt - 1);
if((function (){var and__3937__auto____10877 = (5 < this__10872.shift);
if(and__3937__auto____10877)
{return (cljs.core.pv_aget.call(null,new_root__10875,1) == null);
} else
{return and__3937__auto____10877;
}
})())
{return (new cljs.core.PersistentVector(this__10872.meta,cnt_1__10876,(this__10872.shift - 5),cljs.core.pv_aget.call(null,new_root__10875,0),new_tail__10873,null));
} else
{return (new cljs.core.PersistentVector(this__10872.meta,cnt_1__10876,this__10872.shift,new_root__10875,new_tail__10873,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10878 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10879 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10880 = this;
return (new cljs.core.PersistentVector(meta,this__10880.cnt,this__10880.shift,this__10880.root,this__10880.tail,this__10880.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10881 = this;
return this__10881.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10882 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10883 = this;
if((function (){var and__3937__auto____10884 = (0 <= n);
if(and__3937__auto____10884)
{return (n < this__10883.cnt);
} else
{return and__3937__auto____10884;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10885 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10885.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__10890 = xs.length;
var xs__10891 = (((no_clone === true))?xs:xs.slice());
if((l__10890 < 32))
{return (new cljs.core.PersistentVector(null,l__10890,5,cljs.core.PersistentVector.EMPTY_NODE,xs__10891,null));
} else
{var node__10892 = xs__10891.slice(0,32);
var v__10893 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__10892,null));
var i__10894 = 32;
var out__10895 = cljs.core._as_transient.call(null,v__10893);
while(true){
if((i__10894 < l__10890))
{{
var G__10896 = (i__10894 + 1);
var G__10897 = cljs.core.conj_BANG_.call(null,out__10895,(xs__10891[i__10894]));
i__10894 = G__10896;
out__10895 = G__10897;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10895);
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
vector.cljs$lang$applyTo = (function (arglist__10898){
var args = cljs.core.seq(arglist__10898);;
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__10899 = this;
if(((this__10899.off + 1) < this__10899.node.length))
{var s__10900 = cljs.core.chunked_seq.call(null,this__10899.vec,this__10899.node,this__10899.i,(this__10899.off + 1));
if((s__10900 == null))
{return null;
} else
{return s__10900;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10901 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10902 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10903 = this;
return (this__10903.node[this__10903.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10904 = this;
if(((this__10904.off + 1) < this__10904.node.length))
{var s__10905 = cljs.core.chunked_seq.call(null,this__10904.vec,this__10904.node,this__10904.i,(this__10904.off + 1));
if((s__10905 == null))
{return cljs.core.List.EMPTY;
} else
{return s__10905;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__10906 = this;
var l__10907 = this__10906.node.length;
var s__10908 = ((((this__10906.i + l__10907) < cljs.core._count.call(null,this__10906.vec)))?cljs.core.chunked_seq.call(null,this__10906.vec,(this__10906.i + l__10907),0):null);
if((s__10908 == null))
{return null;
} else
{return s__10908;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10909 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__10910 = this;
return cljs.core.chunked_seq.call(null,this__10910.vec,this__10910.node,this__10910.i,this__10910.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__10911 = this;
return this__10911.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10912 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__10912.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__10913 = this;
return cljs.core.array_chunk.call(null,this__10913.node,this__10913.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__10914 = this;
var l__10915 = this__10914.node.length;
var s__10916 = ((((this__10914.i + l__10915) < cljs.core._count.call(null,this__10914.vec)))?cljs.core.chunked_seq.call(null,this__10914.vec,(this__10914.i + l__10915),0):null);
if((s__10916 == null))
{return cljs.core.List.EMPTY;
} else
{return s__10916;
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10919 = this;
var h__2219__auto____10920 = this__10919.__hash;
if(!((h__2219__auto____10920 == null)))
{return h__2219__auto____10920;
} else
{var h__2219__auto____10921 = cljs.core.hash_coll.call(null,coll);
this__10919.__hash = h__2219__auto____10921;
return h__2219__auto____10921;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10922 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10923 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__10924 = this;
var v_pos__10925 = (this__10924.start + key);
return (new cljs.core.Subvec(this__10924.meta,cljs.core._assoc.call(null,this__10924.v,v_pos__10925,val),this__10924.start,((this__10924.end > (v_pos__10925 + 1)) ? this__10924.end : (v_pos__10925 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__10951 = null;
var G__10951__2 = (function (this_sym10926,k){
var this__10928 = this;
var this_sym10926__10929 = this;
var coll__10930 = this_sym10926__10929;
return coll__10930.cljs$core$ILookup$_lookup$arity$2(coll__10930,k);
});
var G__10951__3 = (function (this_sym10927,k,not_found){
var this__10928 = this;
var this_sym10927__10931 = this;
var coll__10932 = this_sym10927__10931;
return coll__10932.cljs$core$ILookup$_lookup$arity$3(coll__10932,k,not_found);
});
G__10951 = function(this_sym10927,k,not_found){
switch(arguments.length){
case 2:
return G__10951__2.call(this,this_sym10927,k);
case 3:
return G__10951__3.call(this,this_sym10927,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10951;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym10917,args10918){
var this__10933 = this;
return this_sym10917.call.apply(this_sym10917,[this_sym10917].concat(args10918.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10934 = this;
return (new cljs.core.Subvec(this__10934.meta,cljs.core._assoc_n.call(null,this__10934.v,this__10934.end,o),this__10934.start,(this__10934.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__10935 = this;
var this__10936 = this;
return cljs.core.pr_str.call(null,this__10936);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__10937 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__10938 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10939 = this;
var subvec_seq__10940 = (function subvec_seq(i){
if((i === this__10939.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__10939.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__10940.call(null,this__10939.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10941 = this;
return (this__10941.end - this__10941.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__10942 = this;
return cljs.core._nth.call(null,this__10942.v,(this__10942.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__10943 = this;
if((this__10943.start === this__10943.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__10943.meta,this__10943.v,this__10943.start,(this__10943.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__10944 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10945 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10946 = this;
return (new cljs.core.Subvec(meta,this__10946.v,this__10946.start,this__10946.end,this__10946.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10947 = this;
return this__10947.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10948 = this;
return cljs.core._nth.call(null,this__10948.v,(this__10948.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10949 = this;
return cljs.core._nth.call(null,this__10949.v,(this__10949.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10950 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10950.meta);
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
var ret__10953 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__10953,0,tl.length);
return ret__10953;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__10957 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__10958 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__10957,subidx__10958,(((level === 5))?tail_node:(function (){var child__10959 = cljs.core.pv_aget.call(null,ret__10957,subidx__10958);
if(!((child__10959 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__10959,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__10957;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__10964 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__10965 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__10966 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__10964,subidx__10965));
if((function (){var and__3937__auto____10967 = (new_child__10966 == null);
if(and__3937__auto____10967)
{return (subidx__10965 === 0);
} else
{return and__3937__auto____10967;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__10964,subidx__10965,new_child__10966);
return node__10964;
}
} else
{if((subidx__10965 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__10964,subidx__10965,null);
return node__10964;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3937__auto____10972 = (0 <= i);
if(and__3937__auto____10972)
{return (i < tv.cnt);
} else
{return and__3937__auto____10972;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__10973 = tv.root;
var node__10974 = root__10973;
var level__10975 = tv.shift;
while(true){
if((level__10975 > 0))
{{
var G__10976 = cljs.core.tv_ensure_editable.call(null,root__10973.edit,cljs.core.pv_aget.call(null,node__10974,((i >>> level__10975) & 31)));
var G__10977 = (level__10975 - 5);
node__10974 = G__10976;
level__10975 = G__10977;
continue;
}
} else
{return node__10974.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__11017 = null;
var G__11017__2 = (function (this_sym10980,k){
var this__10982 = this;
var this_sym10980__10983 = this;
var coll__10984 = this_sym10980__10983;
return coll__10984.cljs$core$ILookup$_lookup$arity$2(coll__10984,k);
});
var G__11017__3 = (function (this_sym10981,k,not_found){
var this__10982 = this;
var this_sym10981__10985 = this;
var coll__10986 = this_sym10981__10985;
return coll__10986.cljs$core$ILookup$_lookup$arity$3(coll__10986,k,not_found);
});
G__11017 = function(this_sym10981,k,not_found){
switch(arguments.length){
case 2:
return G__11017__2.call(this,this_sym10981,k);
case 3:
return G__11017__3.call(this,this_sym10981,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11017;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym10978,args10979){
var this__10987 = this;
return this_sym10978.call.apply(this_sym10978,[this_sym10978].concat(args10979.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10988 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10989 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__10990 = this;
if(this__10990.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__10991 = this;
if((function (){var and__3937__auto____10992 = (0 <= n);
if(and__3937__auto____10992)
{return (n < this__10991.cnt);
} else
{return and__3937__auto____10992;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10993 = this;
if(this__10993.root.edit)
{return this__10993.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__10994 = this;
if(this__10994.root.edit)
{if((function (){var and__3937__auto____10995 = (0 <= n);
if(and__3937__auto____10995)
{return (n < this__10994.cnt);
} else
{return and__3937__auto____10995;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__10994.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__11000 = (function go(level,node){
var node__10998 = cljs.core.tv_ensure_editable.call(null,this__10994.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__10998,(n & 31),val);
return node__10998;
} else
{var subidx__10999 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__10998,subidx__10999,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__10998,subidx__10999)));
return node__10998;
}
}).call(null,this__10994.shift,this__10994.root);
this__10994.root = new_root__11000;
return tcoll;
}
} else
{if((n === this__10994.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__10994.cnt)].join('')));
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
var this__11001 = this;
if(this__11001.root.edit)
{if((this__11001.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__11001.cnt))
{this__11001.cnt = 0;
return tcoll;
} else
{if((((this__11001.cnt - 1) & 31) > 0))
{this__11001.cnt = (this__11001.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__11002 = cljs.core.editable_array_for.call(null,tcoll,(this__11001.cnt - 2));
var new_root__11004 = (function (){var nr__11003 = cljs.core.tv_pop_tail.call(null,tcoll,this__11001.shift,this__11001.root);
if(!((nr__11003 == null)))
{return nr__11003;
} else
{return (new cljs.core.VectorNode(this__11001.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3937__auto____11005 = (5 < this__11001.shift);
if(and__3937__auto____11005)
{return (cljs.core.pv_aget.call(null,new_root__11004,1) == null);
} else
{return and__3937__auto____11005;
}
})())
{var new_root__11006 = cljs.core.tv_ensure_editable.call(null,this__11001.root.edit,cljs.core.pv_aget.call(null,new_root__11004,0));
this__11001.root = new_root__11006;
this__11001.shift = (this__11001.shift - 5);
this__11001.cnt = (this__11001.cnt - 1);
this__11001.tail = new_tail__11002;
return tcoll;
} else
{this__11001.root = new_root__11004;
this__11001.cnt = (this__11001.cnt - 1);
this__11001.tail = new_tail__11002;
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
var this__11007 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11008 = this;
if(this__11008.root.edit)
{if(((this__11008.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__11008.tail[(this__11008.cnt & 31)] = o);
this__11008.cnt = (this__11008.cnt + 1);
return tcoll;
} else
{var tail_node__11009 = (new cljs.core.VectorNode(this__11008.root.edit,this__11008.tail));
var new_tail__11010 = cljs.core.make_array.call(null,32);
(new_tail__11010[0] = o);
this__11008.tail = new_tail__11010;
if(((this__11008.cnt >>> 5) > (1 << this__11008.shift)))
{var new_root_array__11011 = cljs.core.make_array.call(null,32);
var new_shift__11012 = (this__11008.shift + 5);
(new_root_array__11011[0] = this__11008.root);
(new_root_array__11011[1] = cljs.core.new_path.call(null,this__11008.root.edit,this__11008.shift,tail_node__11009));
this__11008.root = (new cljs.core.VectorNode(this__11008.root.edit,new_root_array__11011));
this__11008.shift = new_shift__11012;
this__11008.cnt = (this__11008.cnt + 1);
return tcoll;
} else
{var new_root__11013 = cljs.core.tv_push_tail.call(null,tcoll,this__11008.shift,this__11008.root,tail_node__11009);
this__11008.root = new_root__11013;
this__11008.cnt = (this__11008.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11014 = this;
if(this__11014.root.edit)
{this__11014.root.edit = null;
var len__11015 = (this__11014.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__11016 = cljs.core.make_array.call(null,len__11015);
cljs.core.array_copy.call(null,this__11014.tail,0,trimmed_tail__11016,0,len__11015);
return (new cljs.core.PersistentVector(null,this__11014.cnt,this__11014.shift,this__11014.root,trimmed_tail__11016,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11018 = this;
var h__2219__auto____11019 = this__11018.__hash;
if(!((h__2219__auto____11019 == null)))
{return h__2219__auto____11019;
} else
{var h__2219__auto____11020 = cljs.core.hash_coll.call(null,coll);
this__11018.__hash = h__2219__auto____11020;
return h__2219__auto____11020;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11021 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__11022 = this;
var this__11023 = this;
return cljs.core.pr_str.call(null,this__11023);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11024 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11025 = this;
return cljs.core._first.call(null,this__11025.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11026 = this;
var temp__4086__auto____11027 = cljs.core.next.call(null,this__11026.front);
if(temp__4086__auto____11027)
{var f1__11028 = temp__4086__auto____11027;
return (new cljs.core.PersistentQueueSeq(this__11026.meta,f1__11028,this__11026.rear,null));
} else
{if((this__11026.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__11026.meta,this__11026.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11029 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11030 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__11030.front,this__11030.rear,this__11030.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11031 = this;
return this__11031.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11032 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11032.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11033 = this;
var h__2219__auto____11034 = this__11033.__hash;
if(!((h__2219__auto____11034 == null)))
{return h__2219__auto____11034;
} else
{var h__2219__auto____11035 = cljs.core.hash_coll.call(null,coll);
this__11033.__hash = h__2219__auto____11035;
return h__2219__auto____11035;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11036 = this;
if(cljs.core.truth_(this__11036.front))
{return (new cljs.core.PersistentQueue(this__11036.meta,(this__11036.count + 1),this__11036.front,cljs.core.conj.call(null,(function (){var or__3939__auto____11037 = this__11036.rear;
if(cljs.core.truth_(or__3939__auto____11037))
{return or__3939__auto____11037;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__11036.meta,(this__11036.count + 1),cljs.core.conj.call(null,this__11036.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__11038 = this;
var this__11039 = this;
return cljs.core.pr_str.call(null,this__11039);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11040 = this;
var rear__11041 = cljs.core.seq.call(null,this__11040.rear);
if(cljs.core.truth_((function (){var or__3939__auto____11042 = this__11040.front;
if(cljs.core.truth_(or__3939__auto____11042))
{return or__3939__auto____11042;
} else
{return rear__11041;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__11040.front,cljs.core.seq.call(null,rear__11041),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11043 = this;
return this__11043.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__11044 = this;
return cljs.core._first.call(null,this__11044.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__11045 = this;
if(cljs.core.truth_(this__11045.front))
{var temp__4086__auto____11046 = cljs.core.next.call(null,this__11045.front);
if(temp__4086__auto____11046)
{var f1__11047 = temp__4086__auto____11046;
return (new cljs.core.PersistentQueue(this__11045.meta,(this__11045.count - 1),f1__11047,this__11045.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__11045.meta,(this__11045.count - 1),cljs.core.seq.call(null,this__11045.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11048 = this;
return cljs.core.first.call(null,this__11048.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11049 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11050 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11051 = this;
return (new cljs.core.PersistentQueue(meta,this__11051.count,this__11051.front,this__11051.rear,this__11051.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11052 = this;
return this__11052.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11053 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__11054 = this;
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
var len__11057 = array.length;
var i__11058 = 0;
while(true){
if((i__11058 < len__11057))
{if((k === (array[i__11058])))
{return i__11058;
} else
{{
var G__11059 = (i__11058 + incr);
i__11058 = G__11059;
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
var a__11062 = cljs.core.hash.call(null,a);
var b__11063 = cljs.core.hash.call(null,b);
if((a__11062 < b__11063))
{return -1;
} else
{if((a__11062 > b__11063))
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
var ks__11071 = m.keys;
var len__11072 = ks__11071.length;
var so__11073 = m.strobj;
var out__11074 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__11075 = 0;
var out__11076 = cljs.core.transient$.call(null,out__11074);
while(true){
if((i__11075 < len__11072))
{var k__11077 = (ks__11071[i__11075]);
{
var G__11078 = (i__11075 + 1);
var G__11079 = cljs.core.assoc_BANG_.call(null,out__11076,k__11077,(so__11073[k__11077]));
i__11075 = G__11078;
out__11076 = G__11079;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__11076,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__11085 = {};
var l__11086 = ks.length;
var i__11087 = 0;
while(true){
if((i__11087 < l__11086))
{var k__11088 = (ks[i__11087]);
(new_obj__11085[k__11088] = (obj[k__11088]));
{
var G__11089 = (i__11087 + 1);
i__11087 = G__11089;
continue;
}
} else
{}
break;
}
return new_obj__11085;
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__11092 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11093 = this;
var h__2219__auto____11094 = this__11093.__hash;
if(!((h__2219__auto____11094 == null)))
{return h__2219__auto____11094;
} else
{var h__2219__auto____11095 = cljs.core.hash_imap.call(null,coll);
this__11093.__hash = h__2219__auto____11095;
return h__2219__auto____11095;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11096 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11097 = this;
if((function (){var and__3937__auto____11098 = goog.isString(k);
if(and__3937__auto____11098)
{return !((cljs.core.scan_array.call(null,1,k,this__11097.keys) == null));
} else
{return and__3937__auto____11098;
}
})())
{return (this__11097.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11099 = this;
if(goog.isString(k))
{if((function (){var or__3939__auto____11100 = (this__11099.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3939__auto____11100)
{return or__3939__auto____11100;
} else
{return (this__11099.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__11099.keys) == null)))
{var new_strobj__11101 = cljs.core.obj_clone.call(null,this__11099.strobj,this__11099.keys);
(new_strobj__11101[k] = v);
return (new cljs.core.ObjMap(this__11099.meta,this__11099.keys,new_strobj__11101,(this__11099.update_count + 1),null));
} else
{var new_strobj__11102 = cljs.core.obj_clone.call(null,this__11099.strobj,this__11099.keys);
var new_keys__11103 = this__11099.keys.slice();
(new_strobj__11102[k] = v);
new_keys__11103.push(k);
return (new cljs.core.ObjMap(this__11099.meta,new_keys__11103,new_strobj__11102,(this__11099.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11104 = this;
if((function (){var and__3937__auto____11105 = goog.isString(k);
if(and__3937__auto____11105)
{return !((cljs.core.scan_array.call(null,1,k,this__11104.keys) == null));
} else
{return and__3937__auto____11105;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__11127 = null;
var G__11127__2 = (function (this_sym11106,k){
var this__11108 = this;
var this_sym11106__11109 = this;
var coll__11110 = this_sym11106__11109;
return coll__11110.cljs$core$ILookup$_lookup$arity$2(coll__11110,k);
});
var G__11127__3 = (function (this_sym11107,k,not_found){
var this__11108 = this;
var this_sym11107__11111 = this;
var coll__11112 = this_sym11107__11111;
return coll__11112.cljs$core$ILookup$_lookup$arity$3(coll__11112,k,not_found);
});
G__11127 = function(this_sym11107,k,not_found){
switch(arguments.length){
case 2:
return G__11127__2.call(this,this_sym11107,k);
case 3:
return G__11127__3.call(this,this_sym11107,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11127;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym11090,args11091){
var this__11113 = this;
return this_sym11090.call.apply(this_sym11090,[this_sym11090].concat(args11091.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11114 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__11115 = this;
var this__11116 = this;
return cljs.core.pr_str.call(null,this__11116);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11117 = this;
if((this__11117.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__11080_SHARP_){
return cljs.core.vector.call(null,p1__11080_SHARP_,(this__11117.strobj[p1__11080_SHARP_]));
}),this__11117.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11118 = this;
return this__11118.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11119 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11120 = this;
return (new cljs.core.ObjMap(meta,this__11120.keys,this__11120.strobj,this__11120.update_count,this__11120.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11121 = this;
return this__11121.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11122 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__11122.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11123 = this;
if((function (){var and__3937__auto____11124 = goog.isString(k);
if(and__3937__auto____11124)
{return !((cljs.core.scan_array.call(null,1,k,this__11123.keys) == null));
} else
{return and__3937__auto____11124;
}
})())
{var new_keys__11125 = this__11123.keys.slice();
var new_strobj__11126 = cljs.core.obj_clone.call(null,this__11123.strobj,this__11123.keys);
new_keys__11125.splice(cljs.core.scan_array.call(null,1,k,new_keys__11125),1);
cljs.core.js_delete.call(null,new_strobj__11126,k);
return (new cljs.core.ObjMap(this__11123.meta,new_keys__11125,new_strobj__11126,(this__11123.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11131 = this;
var h__2219__auto____11132 = this__11131.__hash;
if(!((h__2219__auto____11132 == null)))
{return h__2219__auto____11132;
} else
{var h__2219__auto____11133 = cljs.core.hash_imap.call(null,coll);
this__11131.__hash = h__2219__auto____11133;
return h__2219__auto____11133;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11134 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11135 = this;
var bucket__11136 = (this__11135.hashobj[cljs.core.hash.call(null,k)]);
var i__11137 = (cljs.core.truth_(bucket__11136)?cljs.core.scan_array.call(null,2,k,bucket__11136):null);
if(cljs.core.truth_(i__11137))
{return (bucket__11136[(i__11137 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11138 = this;
var h__11139 = cljs.core.hash.call(null,k);
var bucket__11140 = (this__11138.hashobj[h__11139]);
if(cljs.core.truth_(bucket__11140))
{var new_bucket__11141 = bucket__11140.slice();
var new_hashobj__11142 = goog.object.clone(this__11138.hashobj);
(new_hashobj__11142[h__11139] = new_bucket__11141);
var temp__4086__auto____11143 = cljs.core.scan_array.call(null,2,k,new_bucket__11141);
if(cljs.core.truth_(temp__4086__auto____11143))
{var i__11144 = temp__4086__auto____11143;
(new_bucket__11141[(i__11144 + 1)] = v);
return (new cljs.core.HashMap(this__11138.meta,this__11138.count,new_hashobj__11142,null));
} else
{new_bucket__11141.push(k,v);
return (new cljs.core.HashMap(this__11138.meta,(this__11138.count + 1),new_hashobj__11142,null));
}
} else
{var new_hashobj__11145 = goog.object.clone(this__11138.hashobj);
(new_hashobj__11145[h__11139] = [k,v]);
return (new cljs.core.HashMap(this__11138.meta,(this__11138.count + 1),new_hashobj__11145,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11146 = this;
var bucket__11147 = (this__11146.hashobj[cljs.core.hash.call(null,k)]);
var i__11148 = (cljs.core.truth_(bucket__11147)?cljs.core.scan_array.call(null,2,k,bucket__11147):null);
if(cljs.core.truth_(i__11148))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__11173 = null;
var G__11173__2 = (function (this_sym11149,k){
var this__11151 = this;
var this_sym11149__11152 = this;
var coll__11153 = this_sym11149__11152;
return coll__11153.cljs$core$ILookup$_lookup$arity$2(coll__11153,k);
});
var G__11173__3 = (function (this_sym11150,k,not_found){
var this__11151 = this;
var this_sym11150__11154 = this;
var coll__11155 = this_sym11150__11154;
return coll__11155.cljs$core$ILookup$_lookup$arity$3(coll__11155,k,not_found);
});
G__11173 = function(this_sym11150,k,not_found){
switch(arguments.length){
case 2:
return G__11173__2.call(this,this_sym11150,k);
case 3:
return G__11173__3.call(this,this_sym11150,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11173;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym11129,args11130){
var this__11156 = this;
return this_sym11129.call.apply(this_sym11129,[this_sym11129].concat(args11130.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11157 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__11158 = this;
var this__11159 = this;
return cljs.core.pr_str.call(null,this__11159);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11160 = this;
if((this__11160.count > 0))
{var hashes__11161 = cljs.core.js_keys.call(null,this__11160.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__11128_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__11160.hashobj[p1__11128_SHARP_])));
}),hashes__11161);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11162 = this;
return this__11162.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11163 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11164 = this;
return (new cljs.core.HashMap(meta,this__11164.count,this__11164.hashobj,this__11164.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11165 = this;
return this__11165.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11166 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__11166.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11167 = this;
var h__11168 = cljs.core.hash.call(null,k);
var bucket__11169 = (this__11167.hashobj[h__11168]);
var i__11170 = (cljs.core.truth_(bucket__11169)?cljs.core.scan_array.call(null,2,k,bucket__11169):null);
if(cljs.core.not.call(null,i__11170))
{return coll;
} else
{var new_hashobj__11171 = goog.object.clone(this__11167.hashobj);
if((3 > bucket__11169.length))
{cljs.core.js_delete.call(null,new_hashobj__11171,h__11168);
} else
{var new_bucket__11172 = bucket__11169.slice();
new_bucket__11172.splice(i__11170,2);
(new_hashobj__11171[h__11168] = new_bucket__11172);
}
return (new cljs.core.HashMap(this__11167.meta,(this__11167.count - 1),new_hashobj__11171,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__11174 = ks.length;
var i__11175 = 0;
var out__11176 = cljs.core.HashMap.EMPTY;
while(true){
if((i__11175 < len__11174))
{{
var G__11177 = (i__11175 + 1);
var G__11178 = cljs.core.assoc.call(null,out__11176,(ks[i__11175]),(vs[i__11175]));
i__11175 = G__11177;
out__11176 = G__11178;
continue;
}
} else
{return out__11176;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__11182 = m.arr;
var len__11183 = arr__11182.length;
var i__11184 = 0;
while(true){
if((len__11183 <= i__11184))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__11182[i__11184]),k))
{return i__11184;
} else
{if("\uFDD0'else")
{{
var G__11185 = (i__11184 + 2);
i__11184 = G__11185;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__11188 = this;
return (new cljs.core.TransientArrayMap({},this__11188.arr.length,this__11188.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11189 = this;
var h__2219__auto____11190 = this__11189.__hash;
if(!((h__2219__auto____11190 == null)))
{return h__2219__auto____11190;
} else
{var h__2219__auto____11191 = cljs.core.hash_imap.call(null,coll);
this__11189.__hash = h__2219__auto____11191;
return h__2219__auto____11191;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11192 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11193 = this;
var idx__11194 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__11194 === -1))
{return not_found;
} else
{return (this__11193.arr[(idx__11194 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11195 = this;
var idx__11196 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__11196 === -1))
{if((this__11195.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__11195.meta,(this__11195.cnt + 1),(function (){var G__11197__11198 = this__11195.arr.slice();
G__11197__11198.push(k);
G__11197__11198.push(v);
return G__11197__11198;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__11195.arr[(idx__11196 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__11195.meta,this__11195.cnt,(function (){var G__11199__11200 = this__11195.arr.slice();
(G__11199__11200[(idx__11196 + 1)] = v);
return G__11199__11200;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11201 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__11233 = null;
var G__11233__2 = (function (this_sym11202,k){
var this__11204 = this;
var this_sym11202__11205 = this;
var coll__11206 = this_sym11202__11205;
return coll__11206.cljs$core$ILookup$_lookup$arity$2(coll__11206,k);
});
var G__11233__3 = (function (this_sym11203,k,not_found){
var this__11204 = this;
var this_sym11203__11207 = this;
var coll__11208 = this_sym11203__11207;
return coll__11208.cljs$core$ILookup$_lookup$arity$3(coll__11208,k,not_found);
});
G__11233 = function(this_sym11203,k,not_found){
switch(arguments.length){
case 2:
return G__11233__2.call(this,this_sym11203,k);
case 3:
return G__11233__3.call(this,this_sym11203,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11233;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym11186,args11187){
var this__11209 = this;
return this_sym11186.call.apply(this_sym11186,[this_sym11186].concat(args11187.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11210 = this;
var len__11211 = this__11210.arr.length;
var i__11212 = 0;
var init__11213 = init;
while(true){
if((i__11212 < len__11211))
{var init__11214 = f.call(null,init__11213,(this__11210.arr[i__11212]),(this__11210.arr[(i__11212 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__11214))
{return cljs.core.deref.call(null,init__11214);
} else
{{
var G__11234 = (i__11212 + 2);
var G__11235 = init__11214;
i__11212 = G__11234;
init__11213 = G__11235;
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
var this__11215 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__11216 = this;
var this__11217 = this;
return cljs.core.pr_str.call(null,this__11217);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11218 = this;
if((this__11218.cnt > 0))
{var len__11219 = this__11218.arr.length;
var array_map_seq__11220 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__11219))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__11218.arr[i]),(this__11218.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__11220.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11221 = this;
return this__11221.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11222 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11223 = this;
return (new cljs.core.PersistentArrayMap(meta,this__11223.cnt,this__11223.arr,this__11223.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11224 = this;
return this__11224.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11225 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11225.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11226 = this;
var idx__11227 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__11227 >= 0))
{var len__11228 = this__11226.arr.length;
var new_len__11229 = (len__11228 - 2);
if((new_len__11229 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__11230 = cljs.core.make_array.call(null,new_len__11229);
var s__11231 = 0;
var d__11232 = 0;
while(true){
if((s__11231 >= len__11228))
{return (new cljs.core.PersistentArrayMap(this__11226.meta,(this__11226.cnt - 1),new_arr__11230,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__11226.arr[s__11231])))
{{
var G__11236 = (s__11231 + 2);
var G__11237 = d__11232;
s__11231 = G__11236;
d__11232 = G__11237;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__11230[d__11232] = (this__11226.arr[s__11231]));
(new_arr__11230[(d__11232 + 1)] = (this__11226.arr[(s__11231 + 1)]));
{
var G__11238 = (s__11231 + 2);
var G__11239 = (d__11232 + 2);
s__11231 = G__11238;
d__11232 = G__11239;
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
var len__11240 = cljs.core.count.call(null,ks);
var i__11241 = 0;
var out__11242 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__11241 < len__11240))
{{
var G__11243 = (i__11241 + 1);
var G__11244 = cljs.core.assoc_BANG_.call(null,out__11242,(ks[i__11241]),(vs[i__11241]));
i__11241 = G__11243;
out__11242 = G__11244;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11242);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__11245 = this;
if(cljs.core.truth_(this__11245.editable_QMARK_))
{var idx__11246 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__11246 >= 0))
{(this__11245.arr[idx__11246] = (this__11245.arr[(this__11245.len - 2)]));
(this__11245.arr[(idx__11246 + 1)] = (this__11245.arr[(this__11245.len - 1)]));
var G__11247__11248 = this__11245.arr;
G__11247__11248.pop();
G__11247__11248.pop();
G__11247__11248;
this__11245.len = (this__11245.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__11249 = this;
if(cljs.core.truth_(this__11249.editable_QMARK_))
{var idx__11250 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__11250 === -1))
{if(((this__11249.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__11249.len = (this__11249.len + 2);
this__11249.arr.push(key);
this__11249.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__11249.len,this__11249.arr),key,val);
}
} else
{if((val === (this__11249.arr[(idx__11250 + 1)])))
{return tcoll;
} else
{(this__11249.arr[(idx__11250 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11251 = this;
if(cljs.core.truth_(this__11251.editable_QMARK_))
{if((function (){var G__11252__11253 = o;
if(G__11252__11253)
{if((function (){var or__3939__auto____11254 = (G__11252__11253.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3939__auto____11254)
{return or__3939__auto____11254;
} else
{return G__11252__11253.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__11252__11253.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11252__11253);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11252__11253);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__11255 = cljs.core.seq.call(null,o);
var tcoll__11256 = tcoll;
while(true){
var temp__4086__auto____11257 = cljs.core.first.call(null,es__11255);
if(cljs.core.truth_(temp__4086__auto____11257))
{var e__11258 = temp__4086__auto____11257;
{
var G__11264 = cljs.core.next.call(null,es__11255);
var G__11265 = tcoll__11256.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__11256,cljs.core.key.call(null,e__11258),cljs.core.val.call(null,e__11258));
es__11255 = G__11264;
tcoll__11256 = G__11265;
continue;
}
} else
{return tcoll__11256;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11259 = this;
if(cljs.core.truth_(this__11259.editable_QMARK_))
{this__11259.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__11259.len,2),this__11259.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__11260 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__11261 = this;
if(cljs.core.truth_(this__11261.editable_QMARK_))
{var idx__11262 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__11262 === -1))
{return not_found;
} else
{return (this__11261.arr[(idx__11262 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__11263 = this;
if(cljs.core.truth_(this__11263.editable_QMARK_))
{return cljs.core.quot.call(null,this__11263.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__11268 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__11269 = 0;
while(true){
if((i__11269 < len))
{{
var G__11270 = cljs.core.assoc_BANG_.call(null,out__11268,(arr[i__11269]),(arr[(i__11269 + 1)]));
var G__11271 = (i__11269 + 2);
out__11268 = G__11270;
i__11269 = G__11271;
continue;
}
} else
{return out__11268;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2337__auto__){
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
var G__11276__11277 = arr.slice();
(G__11276__11277[i] = a);
return G__11276__11277;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__11278__11279 = arr.slice();
(G__11278__11279[i] = a);
(G__11278__11279[j] = b);
return G__11278__11279;
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
var new_arr__11281 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__11281,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__11281,(2 * i),(new_arr__11281.length - (2 * i)));
return new_arr__11281;
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
var editable__11284 = inode.ensure_editable(edit);
(editable__11284.arr[i] = a);
return editable__11284;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__11285 = inode.ensure_editable(edit);
(editable__11285.arr[i] = a);
(editable__11285.arr[j] = b);
return editable__11285;
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
var len__11292 = arr.length;
var i__11293 = 0;
var init__11294 = init;
while(true){
if((i__11293 < len__11292))
{var init__11297 = (function (){var k__11295 = (arr[i__11293]);
if(!((k__11295 == null)))
{return f.call(null,init__11294,k__11295,(arr[(i__11293 + 1)]));
} else
{var node__11296 = (arr[(i__11293 + 1)]);
if(!((node__11296 == null)))
{return node__11296.kv_reduce(f,init__11294);
} else
{return init__11294;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__11297))
{return cljs.core.deref.call(null,init__11297);
} else
{{
var G__11298 = (i__11293 + 2);
var G__11299 = init__11297;
i__11293 = G__11298;
init__11294 = G__11299;
continue;
}
}
} else
{return init__11294;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__11300 = this;
var inode__11301 = this;
if((this__11300.bitmap === bit))
{return null;
} else
{var editable__11302 = inode__11301.ensure_editable(e);
var earr__11303 = editable__11302.arr;
var len__11304 = earr__11303.length;
editable__11302.bitmap = (bit ^ editable__11302.bitmap);
cljs.core.array_copy.call(null,earr__11303,(2 * (i + 1)),earr__11303,(2 * i),(len__11304 - (2 * (i + 1))));
(earr__11303[(len__11304 - 2)] = null);
(earr__11303[(len__11304 - 1)] = null);
return editable__11302;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__11305 = this;
var inode__11306 = this;
var bit__11307 = (1 << ((hash >>> shift) & 0x01f));
var idx__11308 = cljs.core.bitmap_indexed_node_index.call(null,this__11305.bitmap,bit__11307);
if(((this__11305.bitmap & bit__11307) === 0))
{var n__11309 = cljs.core.bit_count.call(null,this__11305.bitmap);
if(((2 * n__11309) < this__11305.arr.length))
{var editable__11310 = inode__11306.ensure_editable(edit);
var earr__11311 = editable__11310.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__11311,(2 * idx__11308),earr__11311,(2 * (idx__11308 + 1)),(2 * (n__11309 - idx__11308)));
(earr__11311[(2 * idx__11308)] = key);
(earr__11311[((2 * idx__11308) + 1)] = val);
editable__11310.bitmap = (editable__11310.bitmap | bit__11307);
return editable__11310;
} else
{if((n__11309 >= 16))
{var nodes__11312 = cljs.core.make_array.call(null,32);
var jdx__11313 = ((hash >>> shift) & 0x01f);
(nodes__11312[jdx__11313] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__11314 = 0;
var j__11315 = 0;
while(true){
if((i__11314 < 32))
{if((((this__11305.bitmap >>> i__11314) & 1) === 0))
{{
var G__11368 = (i__11314 + 1);
var G__11369 = j__11315;
i__11314 = G__11368;
j__11315 = G__11369;
continue;
}
} else
{(nodes__11312[i__11314] = ((!(((this__11305.arr[j__11315]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__11305.arr[j__11315])),(this__11305.arr[j__11315]),(this__11305.arr[(j__11315 + 1)]),added_leaf_QMARK_):(this__11305.arr[(j__11315 + 1)])));
{
var G__11370 = (i__11314 + 1);
var G__11371 = (j__11315 + 2);
i__11314 = G__11370;
j__11315 = G__11371;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__11309 + 1),nodes__11312));
} else
{if("\uFDD0'else")
{var new_arr__11316 = cljs.core.make_array.call(null,(2 * (n__11309 + 4)));
cljs.core.array_copy.call(null,this__11305.arr,0,new_arr__11316,0,(2 * idx__11308));
(new_arr__11316[(2 * idx__11308)] = key);
(new_arr__11316[((2 * idx__11308) + 1)] = val);
cljs.core.array_copy.call(null,this__11305.arr,(2 * idx__11308),new_arr__11316,(2 * (idx__11308 + 1)),(2 * (n__11309 - idx__11308)));
added_leaf_QMARK_.val = true;
var editable__11317 = inode__11306.ensure_editable(edit);
editable__11317.arr = new_arr__11316;
editable__11317.bitmap = (editable__11317.bitmap | bit__11307);
return editable__11317;
} else
{return null;
}
}
}
} else
{var key_or_nil__11318 = (this__11305.arr[(2 * idx__11308)]);
var val_or_node__11319 = (this__11305.arr[((2 * idx__11308) + 1)]);
if((key_or_nil__11318 == null))
{var n__11320 = val_or_node__11319.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11320 === val_or_node__11319))
{return inode__11306;
} else
{return cljs.core.edit_and_set.call(null,inode__11306,edit,((2 * idx__11308) + 1),n__11320);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11318))
{if((val === val_or_node__11319))
{return inode__11306;
} else
{return cljs.core.edit_and_set.call(null,inode__11306,edit,((2 * idx__11308) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__11306,edit,(2 * idx__11308),null,((2 * idx__11308) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__11318,val_or_node__11319,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__11321 = this;
var inode__11322 = this;
return cljs.core.create_inode_seq.call(null,this__11321.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11323 = this;
var inode__11324 = this;
var bit__11325 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11323.bitmap & bit__11325) === 0))
{return inode__11324;
} else
{var idx__11326 = cljs.core.bitmap_indexed_node_index.call(null,this__11323.bitmap,bit__11325);
var key_or_nil__11327 = (this__11323.arr[(2 * idx__11326)]);
var val_or_node__11328 = (this__11323.arr[((2 * idx__11326) + 1)]);
if((key_or_nil__11327 == null))
{var n__11329 = val_or_node__11328.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__11329 === val_or_node__11328))
{return inode__11324;
} else
{if(!((n__11329 == null)))
{return cljs.core.edit_and_set.call(null,inode__11324,edit,((2 * idx__11326) + 1),n__11329);
} else
{if((this__11323.bitmap === bit__11325))
{return null;
} else
{if("\uFDD0'else")
{return inode__11324.edit_and_remove_pair(edit,bit__11325,idx__11326);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11327))
{(removed_leaf_QMARK_[0] = true);
return inode__11324.edit_and_remove_pair(edit,bit__11325,idx__11326);
} else
{if("\uFDD0'else")
{return inode__11324;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__11330 = this;
var inode__11331 = this;
if((e === this__11330.edit))
{return inode__11331;
} else
{var n__11332 = cljs.core.bit_count.call(null,this__11330.bitmap);
var new_arr__11333 = cljs.core.make_array.call(null,(((n__11332 < 0))?4:(2 * (n__11332 + 1))));
cljs.core.array_copy.call(null,this__11330.arr,0,new_arr__11333,0,(2 * n__11332));
return (new cljs.core.BitmapIndexedNode(e,this__11330.bitmap,new_arr__11333));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__11334 = this;
var inode__11335 = this;
return cljs.core.inode_kv_reduce.call(null,this__11334.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11336 = this;
var inode__11337 = this;
var bit__11338 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11336.bitmap & bit__11338) === 0))
{return not_found;
} else
{var idx__11339 = cljs.core.bitmap_indexed_node_index.call(null,this__11336.bitmap,bit__11338);
var key_or_nil__11340 = (this__11336.arr[(2 * idx__11339)]);
var val_or_node__11341 = (this__11336.arr[((2 * idx__11339) + 1)]);
if((key_or_nil__11340 == null))
{return val_or_node__11341.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11340))
{return cljs.core.PersistentVector.fromArray([key_or_nil__11340,val_or_node__11341], true);
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
var this__11342 = this;
var inode__11343 = this;
var bit__11344 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11342.bitmap & bit__11344) === 0))
{return inode__11343;
} else
{var idx__11345 = cljs.core.bitmap_indexed_node_index.call(null,this__11342.bitmap,bit__11344);
var key_or_nil__11346 = (this__11342.arr[(2 * idx__11345)]);
var val_or_node__11347 = (this__11342.arr[((2 * idx__11345) + 1)]);
if((key_or_nil__11346 == null))
{var n__11348 = val_or_node__11347.inode_without((shift + 5),hash,key);
if((n__11348 === val_or_node__11347))
{return inode__11343;
} else
{if(!((n__11348 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__11342.bitmap,cljs.core.clone_and_set.call(null,this__11342.arr,((2 * idx__11345) + 1),n__11348)));
} else
{if((this__11342.bitmap === bit__11344))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__11342.bitmap ^ bit__11344),cljs.core.remove_pair.call(null,this__11342.arr,idx__11345)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11346))
{return (new cljs.core.BitmapIndexedNode(null,(this__11342.bitmap ^ bit__11344),cljs.core.remove_pair.call(null,this__11342.arr,idx__11345)));
} else
{if("\uFDD0'else")
{return inode__11343;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11349 = this;
var inode__11350 = this;
var bit__11351 = (1 << ((hash >>> shift) & 0x01f));
var idx__11352 = cljs.core.bitmap_indexed_node_index.call(null,this__11349.bitmap,bit__11351);
if(((this__11349.bitmap & bit__11351) === 0))
{var n__11353 = cljs.core.bit_count.call(null,this__11349.bitmap);
if((n__11353 >= 16))
{var nodes__11354 = cljs.core.make_array.call(null,32);
var jdx__11355 = ((hash >>> shift) & 0x01f);
(nodes__11354[jdx__11355] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__11356 = 0;
var j__11357 = 0;
while(true){
if((i__11356 < 32))
{if((((this__11349.bitmap >>> i__11356) & 1) === 0))
{{
var G__11372 = (i__11356 + 1);
var G__11373 = j__11357;
i__11356 = G__11372;
j__11357 = G__11373;
continue;
}
} else
{(nodes__11354[i__11356] = ((!(((this__11349.arr[j__11357]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__11349.arr[j__11357])),(this__11349.arr[j__11357]),(this__11349.arr[(j__11357 + 1)]),added_leaf_QMARK_):(this__11349.arr[(j__11357 + 1)])));
{
var G__11374 = (i__11356 + 1);
var G__11375 = (j__11357 + 2);
i__11356 = G__11374;
j__11357 = G__11375;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__11353 + 1),nodes__11354));
} else
{var new_arr__11358 = cljs.core.make_array.call(null,(2 * (n__11353 + 1)));
cljs.core.array_copy.call(null,this__11349.arr,0,new_arr__11358,0,(2 * idx__11352));
(new_arr__11358[(2 * idx__11352)] = key);
(new_arr__11358[((2 * idx__11352) + 1)] = val);
cljs.core.array_copy.call(null,this__11349.arr,(2 * idx__11352),new_arr__11358,(2 * (idx__11352 + 1)),(2 * (n__11353 - idx__11352)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__11349.bitmap | bit__11351),new_arr__11358));
}
} else
{var key_or_nil__11359 = (this__11349.arr[(2 * idx__11352)]);
var val_or_node__11360 = (this__11349.arr[((2 * idx__11352) + 1)]);
if((key_or_nil__11359 == null))
{var n__11361 = val_or_node__11360.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11361 === val_or_node__11360))
{return inode__11350;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__11349.bitmap,cljs.core.clone_and_set.call(null,this__11349.arr,((2 * idx__11352) + 1),n__11361)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11359))
{if((val === val_or_node__11360))
{return inode__11350;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__11349.bitmap,cljs.core.clone_and_set.call(null,this__11349.arr,((2 * idx__11352) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__11349.bitmap,cljs.core.clone_and_set.call(null,this__11349.arr,(2 * idx__11352),null,((2 * idx__11352) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__11359,val_or_node__11360,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11362 = this;
var inode__11363 = this;
var bit__11364 = (1 << ((hash >>> shift) & 0x01f));
if(((this__11362.bitmap & bit__11364) === 0))
{return not_found;
} else
{var idx__11365 = cljs.core.bitmap_indexed_node_index.call(null,this__11362.bitmap,bit__11364);
var key_or_nil__11366 = (this__11362.arr[(2 * idx__11365)]);
var val_or_node__11367 = (this__11362.arr[((2 * idx__11365) + 1)]);
if((key_or_nil__11366 == null))
{return val_or_node__11367.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__11366))
{return val_or_node__11367;
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
var arr__11383 = array_node.arr;
var len__11384 = (2 * (array_node.cnt - 1));
var new_arr__11385 = cljs.core.make_array.call(null,len__11384);
var i__11386 = 0;
var j__11387 = 1;
var bitmap__11388 = 0;
while(true){
if((i__11386 < len__11384))
{if((function (){var and__3937__auto____11389 = !((i__11386 === idx));
if(and__3937__auto____11389)
{return !(((arr__11383[i__11386]) == null));
} else
{return and__3937__auto____11389;
}
})())
{(new_arr__11385[j__11387] = (arr__11383[i__11386]));
{
var G__11390 = (i__11386 + 1);
var G__11391 = (j__11387 + 2);
var G__11392 = (bitmap__11388 | (1 << i__11386));
i__11386 = G__11390;
j__11387 = G__11391;
bitmap__11388 = G__11392;
continue;
}
} else
{{
var G__11393 = (i__11386 + 1);
var G__11394 = j__11387;
var G__11395 = bitmap__11388;
i__11386 = G__11393;
j__11387 = G__11394;
bitmap__11388 = G__11395;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__11388,new_arr__11385));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__11396 = this;
var inode__11397 = this;
var idx__11398 = ((hash >>> shift) & 0x01f);
var node__11399 = (this__11396.arr[idx__11398]);
if((node__11399 == null))
{var editable__11400 = cljs.core.edit_and_set.call(null,inode__11397,edit,idx__11398,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__11400.cnt = (editable__11400.cnt + 1);
return editable__11400;
} else
{var n__11401 = node__11399.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11401 === node__11399))
{return inode__11397;
} else
{return cljs.core.edit_and_set.call(null,inode__11397,edit,idx__11398,n__11401);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__11402 = this;
var inode__11403 = this;
return cljs.core.create_array_node_seq.call(null,this__11402.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11404 = this;
var inode__11405 = this;
var idx__11406 = ((hash >>> shift) & 0x01f);
var node__11407 = (this__11404.arr[idx__11406]);
if((node__11407 == null))
{return inode__11405;
} else
{var n__11408 = node__11407.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__11408 === node__11407))
{return inode__11405;
} else
{if((n__11408 == null))
{if((this__11404.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__11405,edit,idx__11406);
} else
{var editable__11409 = cljs.core.edit_and_set.call(null,inode__11405,edit,idx__11406,n__11408);
editable__11409.cnt = (editable__11409.cnt - 1);
return editable__11409;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__11405,edit,idx__11406,n__11408);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__11410 = this;
var inode__11411 = this;
if((e === this__11410.edit))
{return inode__11411;
} else
{return (new cljs.core.ArrayNode(e,this__11410.cnt,this__11410.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__11412 = this;
var inode__11413 = this;
var len__11414 = this__11412.arr.length;
var i__11415 = 0;
var init__11416 = init;
while(true){
if((i__11415 < len__11414))
{var node__11417 = (this__11412.arr[i__11415]);
if(!((node__11417 == null)))
{var init__11418 = node__11417.kv_reduce(f,init__11416);
if(cljs.core.reduced_QMARK_.call(null,init__11418))
{return cljs.core.deref.call(null,init__11418);
} else
{{
var G__11437 = (i__11415 + 1);
var G__11438 = init__11418;
i__11415 = G__11437;
init__11416 = G__11438;
continue;
}
}
} else
{return null;
}
} else
{return init__11416;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11419 = this;
var inode__11420 = this;
var idx__11421 = ((hash >>> shift) & 0x01f);
var node__11422 = (this__11419.arr[idx__11421]);
if(!((node__11422 == null)))
{return node__11422.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__11423 = this;
var inode__11424 = this;
var idx__11425 = ((hash >>> shift) & 0x01f);
var node__11426 = (this__11423.arr[idx__11425]);
if(!((node__11426 == null)))
{var n__11427 = node__11426.inode_without((shift + 5),hash,key);
if((n__11427 === node__11426))
{return inode__11424;
} else
{if((n__11427 == null))
{if((this__11423.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__11424,null,idx__11425);
} else
{return (new cljs.core.ArrayNode(null,(this__11423.cnt - 1),cljs.core.clone_and_set.call(null,this__11423.arr,idx__11425,n__11427)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__11423.cnt,cljs.core.clone_and_set.call(null,this__11423.arr,idx__11425,n__11427)));
} else
{return null;
}
}
}
} else
{return inode__11424;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11428 = this;
var inode__11429 = this;
var idx__11430 = ((hash >>> shift) & 0x01f);
var node__11431 = (this__11428.arr[idx__11430]);
if((node__11431 == null))
{return (new cljs.core.ArrayNode(null,(this__11428.cnt + 1),cljs.core.clone_and_set.call(null,this__11428.arr,idx__11430,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__11432 = node__11431.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__11432 === node__11431))
{return inode__11429;
} else
{return (new cljs.core.ArrayNode(null,this__11428.cnt,cljs.core.clone_and_set.call(null,this__11428.arr,idx__11430,n__11432)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11433 = this;
var inode__11434 = this;
var idx__11435 = ((hash >>> shift) & 0x01f);
var node__11436 = (this__11433.arr[idx__11435]);
if(!((node__11436 == null)))
{return node__11436.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__11441 = (2 * cnt);
var i__11442 = 0;
while(true){
if((i__11442 < lim__11441))
{if(cljs.core.key_test.call(null,key,(arr[i__11442])))
{return i__11442;
} else
{{
var G__11443 = (i__11442 + 2);
i__11442 = G__11443;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__11444 = this;
var inode__11445 = this;
if((hash === this__11444.collision_hash))
{var idx__11446 = cljs.core.hash_collision_node_find_index.call(null,this__11444.arr,this__11444.cnt,key);
if((idx__11446 === -1))
{if((this__11444.arr.length > (2 * this__11444.cnt)))
{var editable__11447 = cljs.core.edit_and_set.call(null,inode__11445,edit,(2 * this__11444.cnt),key,((2 * this__11444.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__11447.cnt = (editable__11447.cnt + 1);
return editable__11447;
} else
{var len__11448 = this__11444.arr.length;
var new_arr__11449 = cljs.core.make_array.call(null,(len__11448 + 2));
cljs.core.array_copy.call(null,this__11444.arr,0,new_arr__11449,0,len__11448);
(new_arr__11449[len__11448] = key);
(new_arr__11449[(len__11448 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__11445.ensure_editable_array(edit,(this__11444.cnt + 1),new_arr__11449);
}
} else
{if(((this__11444.arr[(idx__11446 + 1)]) === val))
{return inode__11445;
} else
{return cljs.core.edit_and_set.call(null,inode__11445,edit,(idx__11446 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__11444.collision_hash >>> shift) & 0x01f)),[null,inode__11445,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__11450 = this;
var inode__11451 = this;
return cljs.core.create_inode_seq.call(null,this__11450.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__11452 = this;
var inode__11453 = this;
var idx__11454 = cljs.core.hash_collision_node_find_index.call(null,this__11452.arr,this__11452.cnt,key);
if((idx__11454 === -1))
{return inode__11453;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__11452.cnt === 1))
{return null;
} else
{var editable__11455 = inode__11453.ensure_editable(edit);
var earr__11456 = editable__11455.arr;
(earr__11456[idx__11454] = (earr__11456[((2 * this__11452.cnt) - 2)]));
(earr__11456[(idx__11454 + 1)] = (earr__11456[((2 * this__11452.cnt) - 1)]));
(earr__11456[((2 * this__11452.cnt) - 1)] = null);
(earr__11456[((2 * this__11452.cnt) - 2)] = null);
editable__11455.cnt = (editable__11455.cnt - 1);
return editable__11455;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__11457 = this;
var inode__11458 = this;
if((e === this__11457.edit))
{return inode__11458;
} else
{var new_arr__11459 = cljs.core.make_array.call(null,(2 * (this__11457.cnt + 1)));
cljs.core.array_copy.call(null,this__11457.arr,0,new_arr__11459,0,(2 * this__11457.cnt));
return (new cljs.core.HashCollisionNode(e,this__11457.collision_hash,this__11457.cnt,new_arr__11459));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__11460 = this;
var inode__11461 = this;
return cljs.core.inode_kv_reduce.call(null,this__11460.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__11462 = this;
var inode__11463 = this;
var idx__11464 = cljs.core.hash_collision_node_find_index.call(null,this__11462.arr,this__11462.cnt,key);
if((idx__11464 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__11462.arr[idx__11464])))
{return cljs.core.PersistentVector.fromArray([(this__11462.arr[idx__11464]),(this__11462.arr[(idx__11464 + 1)])], true);
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
var this__11465 = this;
var inode__11466 = this;
var idx__11467 = cljs.core.hash_collision_node_find_index.call(null,this__11465.arr,this__11465.cnt,key);
if((idx__11467 === -1))
{return inode__11466;
} else
{if((this__11465.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__11465.collision_hash,(this__11465.cnt - 1),cljs.core.remove_pair.call(null,this__11465.arr,cljs.core.quot.call(null,idx__11467,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__11468 = this;
var inode__11469 = this;
if((hash === this__11468.collision_hash))
{var idx__11470 = cljs.core.hash_collision_node_find_index.call(null,this__11468.arr,this__11468.cnt,key);
if((idx__11470 === -1))
{var len__11471 = this__11468.arr.length;
var new_arr__11472 = cljs.core.make_array.call(null,(len__11471 + 2));
cljs.core.array_copy.call(null,this__11468.arr,0,new_arr__11472,0,len__11471);
(new_arr__11472[len__11471] = key);
(new_arr__11472[(len__11471 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__11468.collision_hash,(this__11468.cnt + 1),new_arr__11472));
} else
{if(cljs.core._EQ_.call(null,(this__11468.arr[idx__11470]),val))
{return inode__11469;
} else
{return (new cljs.core.HashCollisionNode(null,this__11468.collision_hash,this__11468.cnt,cljs.core.clone_and_set.call(null,this__11468.arr,(idx__11470 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__11468.collision_hash >>> shift) & 0x01f)),[null,inode__11469])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__11473 = this;
var inode__11474 = this;
var idx__11475 = cljs.core.hash_collision_node_find_index.call(null,this__11473.arr,this__11473.cnt,key);
if((idx__11475 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__11473.arr[idx__11475])))
{return (this__11473.arr[(idx__11475 + 1)]);
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
var this__11476 = this;
var inode__11477 = this;
if((e === this__11476.edit))
{this__11476.arr = array;
this__11476.cnt = count;
return inode__11477;
} else
{return (new cljs.core.HashCollisionNode(this__11476.edit,this__11476.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__11482 = cljs.core.hash.call(null,key1);
if((key1hash__11482 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__11482,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___11483 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__11482,key1,val1,added_leaf_QMARK___11483).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___11483);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__11484 = cljs.core.hash.call(null,key1);
if((key1hash__11484 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__11484,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___11485 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__11484,key1,val1,added_leaf_QMARK___11485).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___11485);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11486 = this;
var h__2219__auto____11487 = this__11486.__hash;
if(!((h__2219__auto____11487 == null)))
{return h__2219__auto____11487;
} else
{var h__2219__auto____11488 = cljs.core.hash_coll.call(null,coll);
this__11486.__hash = h__2219__auto____11488;
return h__2219__auto____11488;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11489 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__11490 = this;
var this__11491 = this;
return cljs.core.pr_str.call(null,this__11491);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11492 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11493 = this;
if((this__11493.s == null))
{return cljs.core.PersistentVector.fromArray([(this__11493.nodes[this__11493.i]),(this__11493.nodes[(this__11493.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__11493.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11494 = this;
if((this__11494.s == null))
{return cljs.core.create_inode_seq.call(null,this__11494.nodes,(this__11494.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__11494.nodes,this__11494.i,cljs.core.next.call(null,this__11494.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11495 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11496 = this;
return (new cljs.core.NodeSeq(meta,this__11496.nodes,this__11496.i,this__11496.s,this__11496.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11497 = this;
return this__11497.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11498 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11498.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__11505 = nodes.length;
var j__11506 = i;
while(true){
if((j__11506 < len__11505))
{if(!(((nodes[j__11506]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__11506,null,null));
} else
{var temp__4086__auto____11507 = (nodes[(j__11506 + 1)]);
if(cljs.core.truth_(temp__4086__auto____11507))
{var node__11508 = temp__4086__auto____11507;
var temp__4086__auto____11509 = node__11508.inode_seq();
if(cljs.core.truth_(temp__4086__auto____11509))
{var node_seq__11510 = temp__4086__auto____11509;
return (new cljs.core.NodeSeq(null,nodes,(j__11506 + 2),node_seq__11510,null));
} else
{{
var G__11511 = (j__11506 + 2);
j__11506 = G__11511;
continue;
}
}
} else
{{
var G__11512 = (j__11506 + 2);
j__11506 = G__11512;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11513 = this;
var h__2219__auto____11514 = this__11513.__hash;
if(!((h__2219__auto____11514 == null)))
{return h__2219__auto____11514;
} else
{var h__2219__auto____11515 = cljs.core.hash_coll.call(null,coll);
this__11513.__hash = h__2219__auto____11515;
return h__2219__auto____11515;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11516 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__11517 = this;
var this__11518 = this;
return cljs.core.pr_str.call(null,this__11518);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11519 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__11520 = this;
return cljs.core.first.call(null,this__11520.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__11521 = this;
return cljs.core.create_array_node_seq.call(null,null,this__11521.nodes,this__11521.i,cljs.core.next.call(null,this__11521.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11522 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11523 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__11523.nodes,this__11523.i,this__11523.s,this__11523.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11524 = this;
return this__11524.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11525 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11525.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__11532 = nodes.length;
var j__11533 = i;
while(true){
if((j__11533 < len__11532))
{var temp__4086__auto____11534 = (nodes[j__11533]);
if(cljs.core.truth_(temp__4086__auto____11534))
{var nj__11535 = temp__4086__auto____11534;
var temp__4086__auto____11536 = nj__11535.inode_seq();
if(cljs.core.truth_(temp__4086__auto____11536))
{var ns__11537 = temp__4086__auto____11536;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__11533 + 1),ns__11537,null));
} else
{{
var G__11538 = (j__11533 + 1);
j__11533 = G__11538;
continue;
}
}
} else
{{
var G__11539 = (j__11533 + 1);
j__11533 = G__11539;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__11542 = this;
return (new cljs.core.TransientHashMap({},this__11542.root,this__11542.cnt,this__11542.has_nil_QMARK_,this__11542.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11543 = this;
var h__2219__auto____11544 = this__11543.__hash;
if(!((h__2219__auto____11544 == null)))
{return h__2219__auto____11544;
} else
{var h__2219__auto____11545 = cljs.core.hash_imap.call(null,coll);
this__11543.__hash = h__2219__auto____11545;
return h__2219__auto____11545;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11546 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11547 = this;
if((k == null))
{if(this__11547.has_nil_QMARK_)
{return this__11547.nil_val;
} else
{return not_found;
}
} else
{if((this__11547.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__11547.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11548 = this;
if((k == null))
{if((function (){var and__3937__auto____11549 = this__11548.has_nil_QMARK_;
if(and__3937__auto____11549)
{return (v === this__11548.nil_val);
} else
{return and__3937__auto____11549;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11548.meta,((this__11548.has_nil_QMARK_)?this__11548.cnt:(this__11548.cnt + 1)),this__11548.root,true,v,null));
}
} else
{var added_leaf_QMARK___11550 = (new cljs.core.Box(false));
var new_root__11551 = (((this__11548.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__11548.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___11550);
if((new_root__11551 === this__11548.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11548.meta,((added_leaf_QMARK___11550.val)?(this__11548.cnt + 1):this__11548.cnt),new_root__11551,this__11548.has_nil_QMARK_,this__11548.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11552 = this;
if((k == null))
{return this__11552.has_nil_QMARK_;
} else
{if((this__11552.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__11552.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__11575 = null;
var G__11575__2 = (function (this_sym11553,k){
var this__11555 = this;
var this_sym11553__11556 = this;
var coll__11557 = this_sym11553__11556;
return coll__11557.cljs$core$ILookup$_lookup$arity$2(coll__11557,k);
});
var G__11575__3 = (function (this_sym11554,k,not_found){
var this__11555 = this;
var this_sym11554__11558 = this;
var coll__11559 = this_sym11554__11558;
return coll__11559.cljs$core$ILookup$_lookup$arity$3(coll__11559,k,not_found);
});
G__11575 = function(this_sym11554,k,not_found){
switch(arguments.length){
case 2:
return G__11575__2.call(this,this_sym11554,k);
case 3:
return G__11575__3.call(this,this_sym11554,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11575;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym11540,args11541){
var this__11560 = this;
return this_sym11540.call.apply(this_sym11540,[this_sym11540].concat(args11541.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11561 = this;
var init__11562 = ((this__11561.has_nil_QMARK_)?f.call(null,init,null,this__11561.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__11562))
{return cljs.core.deref.call(null,init__11562);
} else
{if(!((this__11561.root == null)))
{return this__11561.root.kv_reduce(f,init__11562);
} else
{if("\uFDD0'else")
{return init__11562;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11563 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__11564 = this;
var this__11565 = this;
return cljs.core.pr_str.call(null,this__11565);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11566 = this;
if((this__11566.cnt > 0))
{var s__11567 = ((!((this__11566.root == null)))?this__11566.root.inode_seq():null);
if(this__11566.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__11566.nil_val], true),s__11567);
} else
{return s__11567;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11568 = this;
return this__11568.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11569 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11570 = this;
return (new cljs.core.PersistentHashMap(meta,this__11570.cnt,this__11570.root,this__11570.has_nil_QMARK_,this__11570.nil_val,this__11570.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11571 = this;
return this__11571.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11572 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__11572.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11573 = this;
if((k == null))
{if(this__11573.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__11573.meta,(this__11573.cnt - 1),this__11573.root,false,null,null));
} else
{return coll;
}
} else
{if((this__11573.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__11574 = this__11573.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__11574 === this__11573.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__11573.meta,(this__11573.cnt - 1),new_root__11574,this__11573.has_nil_QMARK_,this__11573.nil_val,null));
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
var len__11576 = ks.length;
var i__11577 = 0;
var out__11578 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__11577 < len__11576))
{{
var G__11579 = (i__11577 + 1);
var G__11580 = cljs.core.assoc_BANG_.call(null,out__11578,(ks[i__11577]),(vs[i__11577]));
i__11577 = G__11579;
out__11578 = G__11580;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11578);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__11581 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__11582 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__11583 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11584 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__11585 = this;
if((k == null))
{if(this__11585.has_nil_QMARK_)
{return this__11585.nil_val;
} else
{return null;
}
} else
{if((this__11585.root == null))
{return null;
} else
{return this__11585.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__11586 = this;
if((k == null))
{if(this__11586.has_nil_QMARK_)
{return this__11586.nil_val;
} else
{return not_found;
}
} else
{if((this__11586.root == null))
{return not_found;
} else
{return this__11586.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11587 = this;
if(this__11587.edit)
{return this__11587.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__11588 = this;
var tcoll__11589 = this;
if(this__11588.edit)
{if((function (){var G__11590__11591 = o;
if(G__11590__11591)
{if((function (){var or__3939__auto____11592 = (G__11590__11591.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3939__auto____11592)
{return or__3939__auto____11592;
} else
{return G__11590__11591.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__11590__11591.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11590__11591);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__11590__11591);
}
})())
{return tcoll__11589.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__11593 = cljs.core.seq.call(null,o);
var tcoll__11594 = tcoll__11589;
while(true){
var temp__4086__auto____11595 = cljs.core.first.call(null,es__11593);
if(cljs.core.truth_(temp__4086__auto____11595))
{var e__11596 = temp__4086__auto____11595;
{
var G__11607 = cljs.core.next.call(null,es__11593);
var G__11608 = tcoll__11594.assoc_BANG_(cljs.core.key.call(null,e__11596),cljs.core.val.call(null,e__11596));
es__11593 = G__11607;
tcoll__11594 = G__11608;
continue;
}
} else
{return tcoll__11594;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__11597 = this;
var tcoll__11598 = this;
if(this__11597.edit)
{if((k == null))
{if((this__11597.nil_val === v))
{} else
{this__11597.nil_val = v;
}
if(this__11597.has_nil_QMARK_)
{} else
{this__11597.count = (this__11597.count + 1);
this__11597.has_nil_QMARK_ = true;
}
return tcoll__11598;
} else
{var added_leaf_QMARK___11599 = (new cljs.core.Box(false));
var node__11600 = (((this__11597.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__11597.root).inode_assoc_BANG_(this__11597.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___11599);
if((node__11600 === this__11597.root))
{} else
{this__11597.root = node__11600;
}
if(added_leaf_QMARK___11599.val)
{this__11597.count = (this__11597.count + 1);
} else
{}
return tcoll__11598;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__11601 = this;
var tcoll__11602 = this;
if(this__11601.edit)
{if((k == null))
{if(this__11601.has_nil_QMARK_)
{this__11601.has_nil_QMARK_ = false;
this__11601.nil_val = null;
this__11601.count = (this__11601.count - 1);
return tcoll__11602;
} else
{return tcoll__11602;
}
} else
{if((this__11601.root == null))
{return tcoll__11602;
} else
{var removed_leaf_QMARK___11603 = (new cljs.core.Box(false));
var node__11604 = this__11601.root.inode_without_BANG_(this__11601.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___11603);
if((node__11604 === this__11601.root))
{} else
{this__11601.root = node__11604;
}
if(cljs.core.truth_((removed_leaf_QMARK___11603[0])))
{this__11601.count = (this__11601.count - 1);
} else
{}
return tcoll__11602;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__11605 = this;
var tcoll__11606 = this;
if(this__11605.edit)
{this__11605.edit = null;
return (new cljs.core.PersistentHashMap(null,this__11605.count,this__11605.root,this__11605.has_nil_QMARK_,this__11605.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__11611 = node;
var stack__11612 = stack;
while(true){
if(!((t__11611 == null)))
{{
var G__11613 = ((ascending_QMARK_)?t__11611.left:t__11611.right);
var G__11614 = cljs.core.conj.call(null,stack__11612,t__11611);
t__11611 = G__11613;
stack__11612 = G__11614;
continue;
}
} else
{return stack__11612;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11615 = this;
var h__2219__auto____11616 = this__11615.__hash;
if(!((h__2219__auto____11616 == null)))
{return h__2219__auto____11616;
} else
{var h__2219__auto____11617 = cljs.core.hash_coll.call(null,coll);
this__11615.__hash = h__2219__auto____11617;
return h__2219__auto____11617;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11618 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__11619 = this;
var this__11620 = this;
return cljs.core.pr_str.call(null,this__11620);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__11621 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11622 = this;
if((this__11622.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__11622.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__11623 = this;
return cljs.core.peek.call(null,this__11623.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__11624 = this;
var t__11625 = cljs.core.first.call(null,this__11624.stack);
var next_stack__11626 = cljs.core.tree_map_seq_push.call(null,((this__11624.ascending_QMARK_)?t__11625.right:t__11625.left),cljs.core.next.call(null,this__11624.stack),this__11624.ascending_QMARK_);
if(!((next_stack__11626 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__11626,this__11624.ascending_QMARK_,(this__11624.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11627 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11628 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__11628.stack,this__11628.ascending_QMARK_,this__11628.cnt,this__11628.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11629 = this;
return this__11629.meta;
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
{if((function (){var and__3937__auto____11631 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3937__auto____11631)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3937__auto____11631;
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
{if((function (){var and__3937__auto____11633 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3937__auto____11633)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3937__auto____11633;
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
var init__11637 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__11637))
{return cljs.core.deref.call(null,init__11637);
} else
{var init__11638 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__11637):init__11637);
if(cljs.core.reduced_QMARK_.call(null,init__11638))
{return cljs.core.deref.call(null,init__11638);
} else
{var init__11639 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__11638):init__11638);
if(cljs.core.reduced_QMARK_.call(null,init__11639))
{return cljs.core.deref.call(null,init__11639);
} else
{return init__11639;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11642 = this;
var h__2219__auto____11643 = this__11642.__hash;
if(!((h__2219__auto____11643 == null)))
{return h__2219__auto____11643;
} else
{var h__2219__auto____11644 = cljs.core.hash_coll.call(null,coll);
this__11642.__hash = h__2219__auto____11644;
return h__2219__auto____11644;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__11645 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__11646 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__11647 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__11647.key,this__11647.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__11695 = null;
var G__11695__2 = (function (this_sym11648,k){
var this__11650 = this;
var this_sym11648__11651 = this;
var node__11652 = this_sym11648__11651;
return node__11652.cljs$core$ILookup$_lookup$arity$2(node__11652,k);
});
var G__11695__3 = (function (this_sym11649,k,not_found){
var this__11650 = this;
var this_sym11649__11653 = this;
var node__11654 = this_sym11649__11653;
return node__11654.cljs$core$ILookup$_lookup$arity$3(node__11654,k,not_found);
});
G__11695 = function(this_sym11649,k,not_found){
switch(arguments.length){
case 2:
return G__11695__2.call(this,this_sym11649,k);
case 3:
return G__11695__3.call(this,this_sym11649,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11695;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym11640,args11641){
var this__11655 = this;
return this_sym11640.call.apply(this_sym11640,[this_sym11640].concat(args11641.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__11656 = this;
return cljs.core.PersistentVector.fromArray([this__11656.key,this__11656.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__11657 = this;
return this__11657.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__11658 = this;
return this__11658.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__11659 = this;
var node__11660 = this;
return ins.balance_right(node__11660);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__11661 = this;
var node__11662 = this;
return (new cljs.core.RedNode(this__11661.key,this__11661.val,this__11661.left,this__11661.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__11663 = this;
var node__11664 = this;
return cljs.core.balance_right_del.call(null,this__11663.key,this__11663.val,this__11663.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__11665 = this;
var node__11666 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__11667 = this;
var node__11668 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__11668,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__11669 = this;
var node__11670 = this;
return cljs.core.balance_left_del.call(null,this__11669.key,this__11669.val,del,this__11669.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__11671 = this;
var node__11672 = this;
return ins.balance_left(node__11672);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__11673 = this;
var node__11674 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__11674,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__11696 = null;
var G__11696__0 = (function (){
var this__11675 = this;
var this__11677 = this;
return cljs.core.pr_str.call(null,this__11677);
});
G__11696 = function(){
switch(arguments.length){
case 0:
return G__11696__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11696;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__11678 = this;
var node__11679 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__11679,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__11680 = this;
var node__11681 = this;
return node__11681;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__11682 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__11683 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__11684 = this;
return cljs.core.list.call(null,this__11684.key,this__11684.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__11685 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__11686 = this;
return this__11686.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__11687 = this;
return cljs.core.PersistentVector.fromArray([this__11687.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__11688 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__11688.key,this__11688.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11689 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__11690 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__11690.key,this__11690.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__11691 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__11692 = this;
if((n === 0))
{return this__11692.key;
} else
{if((n === 1))
{return this__11692.val;
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
var this__11693 = this;
if((n === 0))
{return this__11693.key;
} else
{if((n === 1))
{return this__11693.val;
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
var this__11694 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11699 = this;
var h__2219__auto____11700 = this__11699.__hash;
if(!((h__2219__auto____11700 == null)))
{return h__2219__auto____11700;
} else
{var h__2219__auto____11701 = cljs.core.hash_coll.call(null,coll);
this__11699.__hash = h__2219__auto____11701;
return h__2219__auto____11701;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__11702 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__11703 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__11704 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__11704.key,this__11704.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__11752 = null;
var G__11752__2 = (function (this_sym11705,k){
var this__11707 = this;
var this_sym11705__11708 = this;
var node__11709 = this_sym11705__11708;
return node__11709.cljs$core$ILookup$_lookup$arity$2(node__11709,k);
});
var G__11752__3 = (function (this_sym11706,k,not_found){
var this__11707 = this;
var this_sym11706__11710 = this;
var node__11711 = this_sym11706__11710;
return node__11711.cljs$core$ILookup$_lookup$arity$3(node__11711,k,not_found);
});
G__11752 = function(this_sym11706,k,not_found){
switch(arguments.length){
case 2:
return G__11752__2.call(this,this_sym11706,k);
case 3:
return G__11752__3.call(this,this_sym11706,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11752;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym11697,args11698){
var this__11712 = this;
return this_sym11697.call.apply(this_sym11697,[this_sym11697].concat(args11698.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__11713 = this;
return cljs.core.PersistentVector.fromArray([this__11713.key,this__11713.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__11714 = this;
return this__11714.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__11715 = this;
return this__11715.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__11716 = this;
var node__11717 = this;
return (new cljs.core.RedNode(this__11716.key,this__11716.val,this__11716.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__11718 = this;
var node__11719 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__11720 = this;
var node__11721 = this;
return (new cljs.core.RedNode(this__11720.key,this__11720.val,this__11720.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__11722 = this;
var node__11723 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__11724 = this;
var node__11725 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__11725,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__11726 = this;
var node__11727 = this;
return (new cljs.core.RedNode(this__11726.key,this__11726.val,del,this__11726.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__11728 = this;
var node__11729 = this;
return (new cljs.core.RedNode(this__11728.key,this__11728.val,ins,this__11728.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__11730 = this;
var node__11731 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11730.left))
{return (new cljs.core.RedNode(this__11730.key,this__11730.val,this__11730.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__11730.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11730.right))
{return (new cljs.core.RedNode(this__11730.right.key,this__11730.right.val,(new cljs.core.BlackNode(this__11730.key,this__11730.val,this__11730.left,this__11730.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__11730.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__11731,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__11753 = null;
var G__11753__0 = (function (){
var this__11732 = this;
var this__11734 = this;
return cljs.core.pr_str.call(null,this__11734);
});
G__11753 = function(){
switch(arguments.length){
case 0:
return G__11753__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11753;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__11735 = this;
var node__11736 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11735.right))
{return (new cljs.core.RedNode(this__11735.key,this__11735.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__11735.left,null)),this__11735.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__11735.left))
{return (new cljs.core.RedNode(this__11735.left.key,this__11735.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__11735.left.left,null)),(new cljs.core.BlackNode(this__11735.key,this__11735.val,this__11735.left.right,this__11735.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__11736,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__11737 = this;
var node__11738 = this;
return (new cljs.core.BlackNode(this__11737.key,this__11737.val,this__11737.left,this__11737.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__11739 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__11740 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__11741 = this;
return cljs.core.list.call(null,this__11741.key,this__11741.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__11742 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__11743 = this;
return this__11743.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__11744 = this;
return cljs.core.PersistentVector.fromArray([this__11744.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__11745 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__11745.key,this__11745.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11746 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__11747 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__11747.key,this__11747.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__11748 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__11749 = this;
if((n === 0))
{return this__11749.key;
} else
{if((n === 1))
{return this__11749.val;
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
var this__11750 = this;
if((n === 0))
{return this__11750.key;
} else
{if((n === 1))
{return this__11750.val;
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
var this__11751 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__11757 = comp.call(null,k,tree.key);
if((c__11757 === 0))
{(found[0] = tree);
return null;
} else
{if((c__11757 < 0))
{var ins__11758 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__11758 == null)))
{return tree.add_left(ins__11758);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__11759 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__11759 == null)))
{return tree.add_right(ins__11759);
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
{var app__11762 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__11762))
{return (new cljs.core.RedNode(app__11762.key,app__11762.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__11762.left,null)),(new cljs.core.RedNode(right.key,right.val,app__11762.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__11762,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__11763 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__11763))
{return (new cljs.core.RedNode(app__11763.key,app__11763.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__11763.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__11763.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__11763,right.right,null)));
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
{var c__11769 = comp.call(null,k,tree.key);
if((c__11769 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__11769 < 0))
{var del__11770 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3939__auto____11771 = !((del__11770 == null));
if(or__3939__auto____11771)
{return or__3939__auto____11771;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__11770,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__11770,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__11772 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3939__auto____11773 = !((del__11772 == null));
if(or__3939__auto____11773)
{return or__3939__auto____11773;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__11772);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__11772,null));
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
var tk__11776 = tree.key;
var c__11777 = comp.call(null,k,tk__11776);
if((c__11777 === 0))
{return tree.replace(tk__11776,v,tree.left,tree.right);
} else
{if((c__11777 < 0))
{return tree.replace(tk__11776,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__11776,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11780 = this;
var h__2219__auto____11781 = this__11780.__hash;
if(!((h__2219__auto____11781 == null)))
{return h__2219__auto____11781;
} else
{var h__2219__auto____11782 = cljs.core.hash_imap.call(null,coll);
this__11780.__hash = h__2219__auto____11782;
return h__2219__auto____11782;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__11783 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__11784 = this;
var n__11785 = coll.entry_at(k);
if(!((n__11785 == null)))
{return n__11785.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__11786 = this;
var found__11787 = [null];
var t__11788 = cljs.core.tree_map_add.call(null,this__11786.comp,this__11786.tree,k,v,found__11787);
if((t__11788 == null))
{var found_node__11789 = cljs.core.nth.call(null,found__11787,0);
if(cljs.core._EQ_.call(null,v,found_node__11789.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11786.comp,cljs.core.tree_map_replace.call(null,this__11786.comp,this__11786.tree,k,v),this__11786.cnt,this__11786.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11786.comp,t__11788.blacken(),(this__11786.cnt + 1),this__11786.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__11790 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__11824 = null;
var G__11824__2 = (function (this_sym11791,k){
var this__11793 = this;
var this_sym11791__11794 = this;
var coll__11795 = this_sym11791__11794;
return coll__11795.cljs$core$ILookup$_lookup$arity$2(coll__11795,k);
});
var G__11824__3 = (function (this_sym11792,k,not_found){
var this__11793 = this;
var this_sym11792__11796 = this;
var coll__11797 = this_sym11792__11796;
return coll__11797.cljs$core$ILookup$_lookup$arity$3(coll__11797,k,not_found);
});
G__11824 = function(this_sym11792,k,not_found){
switch(arguments.length){
case 2:
return G__11824__2.call(this,this_sym11792,k);
case 3:
return G__11824__3.call(this,this_sym11792,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11824;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym11778,args11779){
var this__11798 = this;
return this_sym11778.call.apply(this_sym11778,[this_sym11778].concat(args11779.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__11799 = this;
if(!((this__11799.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__11799.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__11800 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11801 = this;
if((this__11801.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11801.tree,false,this__11801.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__11802 = this;
var this__11803 = this;
return cljs.core.pr_str.call(null,this__11803);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__11804 = this;
var coll__11805 = this;
var t__11806 = this__11804.tree;
while(true){
if(!((t__11806 == null)))
{var c__11807 = this__11804.comp.call(null,k,t__11806.key);
if((c__11807 === 0))
{return t__11806;
} else
{if((c__11807 < 0))
{{
var G__11825 = t__11806.left;
t__11806 = G__11825;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__11826 = t__11806.right;
t__11806 = G__11826;
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
var this__11808 = this;
if((this__11808.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11808.tree,ascending_QMARK_,this__11808.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11809 = this;
if((this__11809.cnt > 0))
{var stack__11810 = null;
var t__11811 = this__11809.tree;
while(true){
if(!((t__11811 == null)))
{var c__11812 = this__11809.comp.call(null,k,t__11811.key);
if((c__11812 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__11810,t__11811),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__11812 < 0))
{{
var G__11827 = cljs.core.conj.call(null,stack__11810,t__11811);
var G__11828 = t__11811.left;
stack__11810 = G__11827;
t__11811 = G__11828;
continue;
}
} else
{{
var G__11829 = stack__11810;
var G__11830 = t__11811.right;
stack__11810 = G__11829;
t__11811 = G__11830;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__11812 > 0))
{{
var G__11831 = cljs.core.conj.call(null,stack__11810,t__11811);
var G__11832 = t__11811.right;
stack__11810 = G__11831;
t__11811 = G__11832;
continue;
}
} else
{{
var G__11833 = stack__11810;
var G__11834 = t__11811.left;
stack__11810 = G__11833;
t__11811 = G__11834;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__11810 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__11810,ascending_QMARK_,-1,null));
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
var this__11813 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11814 = this;
return this__11814.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11815 = this;
if((this__11815.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__11815.tree,true,this__11815.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11816 = this;
return this__11816.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11817 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11818 = this;
return (new cljs.core.PersistentTreeMap(this__11818.comp,this__11818.tree,this__11818.cnt,meta,this__11818.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11819 = this;
return this__11819.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11820 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__11820.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__11821 = this;
var found__11822 = [null];
var t__11823 = cljs.core.tree_map_remove.call(null,this__11821.comp,this__11821.tree,k,found__11822);
if((t__11823 == null))
{if((cljs.core.nth.call(null,found__11822,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__11821.comp,null,0,this__11821.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__11821.comp,t__11823.blacken(),(this__11821.cnt - 1),this__11821.meta,null));
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
var in__11837 = cljs.core.seq.call(null,keyvals);
var out__11838 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__11837)
{{
var G__11839 = cljs.core.nnext.call(null,in__11837);
var G__11840 = cljs.core.assoc_BANG_.call(null,out__11838,cljs.core.first.call(null,in__11837),cljs.core.second.call(null,in__11837));
in__11837 = G__11839;
out__11838 = G__11840;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11838);
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
hash_map.cljs$lang$applyTo = (function (arglist__11841){
var keyvals = cljs.core.seq(arglist__11841);;
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
array_map.cljs$lang$applyTo = (function (arglist__11842){
var keyvals = cljs.core.seq(arglist__11842);;
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
var ks__11846 = [];
var obj__11847 = {};
var kvs__11848 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__11848)
{ks__11846.push(cljs.core.first.call(null,kvs__11848));
(obj__11847[cljs.core.first.call(null,kvs__11848)] = cljs.core.second.call(null,kvs__11848));
{
var G__11849 = cljs.core.nnext.call(null,kvs__11848);
kvs__11848 = G__11849;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__11846,obj__11847);
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
obj_map.cljs$lang$applyTo = (function (arglist__11850){
var keyvals = cljs.core.seq(arglist__11850);;
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
var in__11853 = cljs.core.seq.call(null,keyvals);
var out__11854 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__11853)
{{
var G__11855 = cljs.core.nnext.call(null,in__11853);
var G__11856 = cljs.core.assoc.call(null,out__11854,cljs.core.first.call(null,in__11853),cljs.core.second.call(null,in__11853));
in__11853 = G__11855;
out__11854 = G__11856;
continue;
}
} else
{return out__11854;
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
sorted_map.cljs$lang$applyTo = (function (arglist__11857){
var keyvals = cljs.core.seq(arglist__11857);;
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
var in__11860 = cljs.core.seq.call(null,keyvals);
var out__11861 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__11860)
{{
var G__11862 = cljs.core.nnext.call(null,in__11860);
var G__11863 = cljs.core.assoc.call(null,out__11861,cljs.core.first.call(null,in__11860),cljs.core.second.call(null,in__11860));
in__11860 = G__11862;
out__11861 = G__11863;
continue;
}
} else
{return out__11861;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__11864){
var comparator = cljs.core.first(arglist__11864);
var keyvals = cljs.core.rest(arglist__11864);
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
{return cljs.core.reduce.call(null,(function (p1__11865_SHARP_,p2__11866_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3939__auto____11868 = p1__11865_SHARP_;
if(cljs.core.truth_(or__3939__auto____11868))
{return or__3939__auto____11868;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__11866_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__11869){
var maps = cljs.core.seq(arglist__11869);;
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
{var merge_entry__11877 = (function (m,e){
var k__11875 = cljs.core.first.call(null,e);
var v__11876 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__11875))
{return cljs.core.assoc.call(null,m,k__11875,f.call(null,cljs.core._lookup.call(null,m,k__11875,null),v__11876));
} else
{return cljs.core.assoc.call(null,m,k__11875,v__11876);
}
});
var merge2__11879 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__11877,(function (){var or__3939__auto____11878 = m1;
if(cljs.core.truth_(or__3939__auto____11878))
{return or__3939__auto____11878;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__11879,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__11880){
var f = cljs.core.first(arglist__11880);
var maps = cljs.core.rest(arglist__11880);
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
var ret__11885 = cljs.core.ObjMap.EMPTY;
var keys__11886 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__11886)
{var key__11887 = cljs.core.first.call(null,keys__11886);
var entry__11888 = cljs.core._lookup.call(null,map,key__11887,"\uFDD0'cljs.core/not-found");
{
var G__11889 = ((cljs.core.not_EQ_.call(null,entry__11888,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__11885,key__11887,entry__11888):ret__11885);
var G__11890 = cljs.core.next.call(null,keys__11886);
ret__11885 = G__11889;
keys__11886 = G__11890;
continue;
}
} else
{return ret__11885;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__11894 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__11894.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11895 = this;
var h__2219__auto____11896 = this__11895.__hash;
if(!((h__2219__auto____11896 == null)))
{return h__2219__auto____11896;
} else
{var h__2219__auto____11897 = cljs.core.hash_iset.call(null,coll);
this__11895.__hash = h__2219__auto____11897;
return h__2219__auto____11897;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11898 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11899 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11899.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__11920 = null;
var G__11920__2 = (function (this_sym11900,k){
var this__11902 = this;
var this_sym11900__11903 = this;
var coll__11904 = this_sym11900__11903;
return coll__11904.cljs$core$ILookup$_lookup$arity$2(coll__11904,k);
});
var G__11920__3 = (function (this_sym11901,k,not_found){
var this__11902 = this;
var this_sym11901__11905 = this;
var coll__11906 = this_sym11901__11905;
return coll__11906.cljs$core$ILookup$_lookup$arity$3(coll__11906,k,not_found);
});
G__11920 = function(this_sym11901,k,not_found){
switch(arguments.length){
case 2:
return G__11920__2.call(this,this_sym11901,k);
case 3:
return G__11920__3.call(this,this_sym11901,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11920;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym11892,args11893){
var this__11907 = this;
return this_sym11892.call.apply(this_sym11892,[this_sym11892].concat(args11893.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11908 = this;
return (new cljs.core.PersistentHashSet(this__11908.meta,cljs.core.assoc.call(null,this__11908.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__11909 = this;
var this__11910 = this;
return cljs.core.pr_str.call(null,this__11910);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11911 = this;
return cljs.core.keys.call(null,this__11911.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11912 = this;
return (new cljs.core.PersistentHashSet(this__11912.meta,cljs.core.dissoc.call(null,this__11912.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11913 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11914 = this;
var and__3937__auto____11915 = cljs.core.set_QMARK_.call(null,other);
if(and__3937__auto____11915)
{var and__3937__auto____11916 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3937__auto____11916)
{return cljs.core.every_QMARK_.call(null,(function (p1__11891_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11891_SHARP_);
}),other);
} else
{return and__3937__auto____11916;
}
} else
{return and__3937__auto____11915;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11917 = this;
return (new cljs.core.PersistentHashSet(meta,this__11917.hash_map,this__11917.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11918 = this;
return this__11918.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11919 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__11919.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__11921 = cljs.core.count.call(null,items);
var i__11922 = 0;
var out__11923 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__11922 < len__11921))
{{
var G__11924 = (i__11922 + 1);
var G__11925 = cljs.core.conj_BANG_.call(null,out__11923,(items[i__11922]));
i__11922 = G__11924;
out__11923 = G__11925;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11923);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__11943 = null;
var G__11943__2 = (function (this_sym11929,k){
var this__11931 = this;
var this_sym11929__11932 = this;
var tcoll__11933 = this_sym11929__11932;
if((cljs.core._lookup.call(null,this__11931.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__11943__3 = (function (this_sym11930,k,not_found){
var this__11931 = this;
var this_sym11930__11934 = this;
var tcoll__11935 = this_sym11930__11934;
if((cljs.core._lookup.call(null,this__11931.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__11943 = function(this_sym11930,k,not_found){
switch(arguments.length){
case 2:
return G__11943__2.call(this,this_sym11930,k);
case 3:
return G__11943__3.call(this,this_sym11930,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11943;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym11927,args11928){
var this__11936 = this;
return this_sym11927.call.apply(this_sym11927,[this_sym11927].concat(args11928.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__11937 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__11938 = this;
if((cljs.core._lookup.call(null,this__11938.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__11939 = this;
return cljs.core.count.call(null,this__11939.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__11940 = this;
this__11940.transient_map = cljs.core.dissoc_BANG_.call(null,this__11940.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__11941 = this;
this__11941.transient_map = cljs.core.assoc_BANG_.call(null,this__11941.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__11942 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__11942.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__11946 = this;
var h__2219__auto____11947 = this__11946.__hash;
if(!((h__2219__auto____11947 == null)))
{return h__2219__auto____11947;
} else
{var h__2219__auto____11948 = cljs.core.hash_iset.call(null,coll);
this__11946.__hash = h__2219__auto____11948;
return h__2219__auto____11948;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__11949 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__11950 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11950.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__11976 = null;
var G__11976__2 = (function (this_sym11951,k){
var this__11953 = this;
var this_sym11951__11954 = this;
var coll__11955 = this_sym11951__11954;
return coll__11955.cljs$core$ILookup$_lookup$arity$2(coll__11955,k);
});
var G__11976__3 = (function (this_sym11952,k,not_found){
var this__11953 = this;
var this_sym11952__11956 = this;
var coll__11957 = this_sym11952__11956;
return coll__11957.cljs$core$ILookup$_lookup$arity$3(coll__11957,k,not_found);
});
G__11976 = function(this_sym11952,k,not_found){
switch(arguments.length){
case 2:
return G__11976__2.call(this,this_sym11952,k);
case 3:
return G__11976__3.call(this,this_sym11952,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11976;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym11944,args11945){
var this__11958 = this;
return this_sym11944.call.apply(this_sym11944,[this_sym11944].concat(args11945.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__11959 = this;
return (new cljs.core.PersistentTreeSet(this__11959.meta,cljs.core.assoc.call(null,this__11959.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__11960 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__11960.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__11961 = this;
var this__11962 = this;
return cljs.core.pr_str.call(null,this__11962);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__11963 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__11963.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__11964 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__11964.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__11965 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__11966 = this;
return cljs.core._comparator.call(null,this__11966.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__11967 = this;
return cljs.core.keys.call(null,this__11967.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__11968 = this;
return (new cljs.core.PersistentTreeSet(this__11968.meta,cljs.core.dissoc.call(null,this__11968.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__11969 = this;
return cljs.core.count.call(null,this__11969.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__11970 = this;
var and__3937__auto____11971 = cljs.core.set_QMARK_.call(null,other);
if(and__3937__auto____11971)
{var and__3937__auto____11972 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3937__auto____11972)
{return cljs.core.every_QMARK_.call(null,(function (p1__11926_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11926_SHARP_);
}),other);
} else
{return and__3937__auto____11972;
}
} else
{return and__3937__auto____11971;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__11973 = this;
return (new cljs.core.PersistentTreeSet(meta,this__11973.tree_map,this__11973.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__11974 = this;
return this__11974.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__11975 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__11975.meta);
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
var G__11981__delegate = function (keys){
var in__11979 = cljs.core.seq.call(null,keys);
var out__11980 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__11979))
{{
var G__11982 = cljs.core.next.call(null,in__11979);
var G__11983 = cljs.core.conj_BANG_.call(null,out__11980,cljs.core.first.call(null,in__11979));
in__11979 = G__11982;
out__11980 = G__11983;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__11980);
}
break;
}
};
var G__11981 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11981__delegate.call(this, keys);
};
G__11981.cljs$lang$maxFixedArity = 0;
G__11981.cljs$lang$applyTo = (function (arglist__11984){
var keys = cljs.core.seq(arglist__11984);;
return G__11981__delegate(keys);
});
G__11981.cljs$lang$arity$variadic = G__11981__delegate;
return G__11981;
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
sorted_set.cljs$lang$applyTo = (function (arglist__11985){
var keys = cljs.core.seq(arglist__11985);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__11987){
var comparator = cljs.core.first(arglist__11987);
var keys = cljs.core.rest(arglist__11987);
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
{var n__11993 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__4086__auto____11994 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__4086__auto____11994))
{var e__11995 = temp__4086__auto____11994;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__11995));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__11993,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__11986_SHARP_){
var temp__4086__auto____11996 = cljs.core.find.call(null,smap,p1__11986_SHARP_);
if(cljs.core.truth_(temp__4086__auto____11996))
{var e__11997 = temp__4086__auto____11996;
return cljs.core.second.call(null,e__11997);
} else
{return p1__11986_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__12027 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__12020,seen){
while(true){
var vec__12021__12022 = p__12020;
var f__12023 = cljs.core.nth.call(null,vec__12021__12022,0,null);
var xs__12024 = vec__12021__12022;
var temp__4088__auto____12025 = cljs.core.seq.call(null,xs__12024);
if(temp__4088__auto____12025)
{var s__12026 = temp__4088__auto____12025;
if(cljs.core.contains_QMARK_.call(null,seen,f__12023))
{{
var G__12028 = cljs.core.rest.call(null,s__12026);
var G__12029 = seen;
p__12020 = G__12028;
seen = G__12029;
continue;
}
} else
{return cljs.core.cons.call(null,f__12023,step.call(null,cljs.core.rest.call(null,s__12026),cljs.core.conj.call(null,seen,f__12023)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__12027.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__12032 = cljs.core.PersistentVector.EMPTY;
var s__12033 = s;
while(true){
if(cljs.core.next.call(null,s__12033))
{{
var G__12034 = cljs.core.conj.call(null,ret__12032,cljs.core.first.call(null,s__12033));
var G__12035 = cljs.core.next.call(null,s__12033);
ret__12032 = G__12034;
s__12033 = G__12035;
continue;
}
} else
{return cljs.core.seq.call(null,ret__12032);
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
{if((function (){var or__3939__auto____12038 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3939__auto____12038)
{return or__3939__auto____12038;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__12039 = x.lastIndexOf("/");
if((i__12039 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__12039 + 1));
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
if((function (){var or__3939__auto____12042 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3939__auto____12042)
{return or__3939__auto____12042;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__12043 = x.lastIndexOf("/");
if((i__12043 > -1))
{return cljs.core.subs.call(null,x,2,i__12043);
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
var map__12050 = cljs.core.ObjMap.EMPTY;
var ks__12051 = cljs.core.seq.call(null,keys);
var vs__12052 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3937__auto____12053 = ks__12051;
if(and__3937__auto____12053)
{return vs__12052;
} else
{return and__3937__auto____12053;
}
})())
{{
var G__12054 = cljs.core.assoc.call(null,map__12050,cljs.core.first.call(null,ks__12051),cljs.core.first.call(null,vs__12052));
var G__12055 = cljs.core.next.call(null,ks__12051);
var G__12056 = cljs.core.next.call(null,vs__12052);
map__12050 = G__12054;
ks__12051 = G__12055;
vs__12052 = G__12056;
continue;
}
} else
{return map__12050;
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
var G__12059__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12044_SHARP_,p2__12045_SHARP_){
return max_key.call(null,k,p1__12044_SHARP_,p2__12045_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__12059 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12059__delegate.call(this, k, x, y, more);
};
G__12059.cljs$lang$maxFixedArity = 3;
G__12059.cljs$lang$applyTo = (function (arglist__12060){
var k = cljs.core.first(arglist__12060);
var x = cljs.core.first(cljs.core.next(arglist__12060));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12060)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12060)));
return G__12059__delegate(k, x, y, more);
});
G__12059.cljs$lang$arity$variadic = G__12059__delegate;
return G__12059;
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
var G__12061__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12057_SHARP_,p2__12058_SHARP_){
return min_key.call(null,k,p1__12057_SHARP_,p2__12058_SHARP_);
}),min_key.call(null,k,x,y),more);
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
var temp__4088__auto____12065 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____12065)
{var s__12066 = temp__4088__auto____12065;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__12066),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__12066)));
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
var temp__4088__auto____12069 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____12069)
{var s__12070 = temp__4088__auto____12069;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__12070))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__12070),take_while.call(null,pred,cljs.core.rest.call(null,s__12070)));
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
var comp__12072 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__12072.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__12084 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__4088__auto____12085 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__4088__auto____12085))
{var vec__12086__12087 = temp__4088__auto____12085;
var e__12088 = cljs.core.nth.call(null,vec__12086__12087,0,null);
var s__12089 = vec__12086__12087;
if(cljs.core.truth_(include__12084.call(null,e__12088)))
{return s__12089;
} else
{return cljs.core.next.call(null,s__12089);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__12084,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4088__auto____12090 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__4088__auto____12090))
{var vec__12091__12092 = temp__4088__auto____12090;
var e__12093 = cljs.core.nth.call(null,vec__12091__12092,0,null);
var s__12094 = vec__12091__12092;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__12093))?s__12094:cljs.core.next.call(null,s__12094)));
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
var include__12106 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__4088__auto____12107 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__4088__auto____12107))
{var vec__12108__12109 = temp__4088__auto____12107;
var e__12110 = cljs.core.nth.call(null,vec__12108__12109,0,null);
var s__12111 = vec__12108__12109;
if(cljs.core.truth_(include__12106.call(null,e__12110)))
{return s__12111;
} else
{return cljs.core.next.call(null,s__12111);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__12106,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4088__auto____12112 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__4088__auto____12112))
{var vec__12113__12114 = temp__4088__auto____12112;
var e__12115 = cljs.core.nth.call(null,vec__12113__12114,0,null);
var s__12116 = vec__12113__12114;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__12115))?s__12116:cljs.core.next.call(null,s__12116)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__12117 = this;
var h__2219__auto____12118 = this__12117.__hash;
if(!((h__2219__auto____12118 == null)))
{return h__2219__auto____12118;
} else
{var h__2219__auto____12119 = cljs.core.hash_coll.call(null,rng);
this__12117.__hash = h__2219__auto____12119;
return h__2219__auto____12119;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__12120 = this;
if((this__12120.step > 0))
{if(((this__12120.start + this__12120.step) < this__12120.end))
{return (new cljs.core.Range(this__12120.meta,(this__12120.start + this__12120.step),this__12120.end,this__12120.step,null));
} else
{return null;
}
} else
{if(((this__12120.start + this__12120.step) > this__12120.end))
{return (new cljs.core.Range(this__12120.meta,(this__12120.start + this__12120.step),this__12120.end,this__12120.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__12121 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__12122 = this;
var this__12123 = this;
return cljs.core.pr_str.call(null,this__12123);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__12124 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__12125 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__12126 = this;
if((this__12126.step > 0))
{if((this__12126.start < this__12126.end))
{return rng;
} else
{return null;
}
} else
{if((this__12126.start > this__12126.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__12127 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__12127.end - this__12127.start) / this__12127.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__12128 = this;
return this__12128.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__12129 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__12129.meta,(this__12129.start + this__12129.step),this__12129.end,this__12129.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__12130 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__12131 = this;
return (new cljs.core.Range(meta,this__12131.start,this__12131.end,this__12131.step,this__12131.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__12132 = this;
return this__12132.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__12133 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__12133.start + (n * this__12133.step));
} else
{if((function (){var and__3937__auto____12134 = (this__12133.start > this__12133.end);
if(and__3937__auto____12134)
{return (this__12133.step === 0);
} else
{return and__3937__auto____12134;
}
})())
{return this__12133.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__12135 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__12135.start + (n * this__12135.step));
} else
{if((function (){var and__3937__auto____12136 = (this__12135.start > this__12135.end);
if(and__3937__auto____12136)
{return (this__12135.step === 0);
} else
{return and__3937__auto____12136;
}
})())
{return this__12135.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__12137 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12137.meta);
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
var temp__4088__auto____12140 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____12140)
{var s__12141 = temp__4088__auto____12140;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__12141),take_nth.call(null,n,cljs.core.drop.call(null,n,s__12141)));
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
var temp__4088__auto____12148 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____12148)
{var s__12149 = temp__4088__auto____12148;
var fst__12150 = cljs.core.first.call(null,s__12149);
var fv__12151 = f.call(null,fst__12150);
var run__12152 = cljs.core.cons.call(null,fst__12150,cljs.core.take_while.call(null,(function (p1__12142_SHARP_){
return cljs.core._EQ_.call(null,fv__12151,f.call(null,p1__12142_SHARP_));
}),cljs.core.next.call(null,s__12149)));
return cljs.core.cons.call(null,run__12152,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__12152),s__12149))));
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
var temp__4086__auto____12167 = cljs.core.seq.call(null,coll);
if(temp__4086__auto____12167)
{var s__12168 = temp__4086__auto____12167;
return reductions.call(null,f,cljs.core.first.call(null,s__12168),cljs.core.rest.call(null,s__12168));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__4088__auto____12169 = cljs.core.seq.call(null,coll);
if(temp__4088__auto____12169)
{var s__12170 = temp__4088__auto____12169;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__12170)),cljs.core.rest.call(null,s__12170));
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
var G__12173 = null;
var G__12173__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__12173__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__12173__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__12173__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__12173__4 = (function() { 
var G__12174__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__12174 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12174__delegate.call(this, x, y, z, args);
};
G__12174.cljs$lang$maxFixedArity = 3;
G__12174.cljs$lang$applyTo = (function (arglist__12175){
var x = cljs.core.first(arglist__12175);
var y = cljs.core.first(cljs.core.next(arglist__12175));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12175)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12175)));
return G__12174__delegate(x, y, z, args);
});
G__12174.cljs$lang$arity$variadic = G__12174__delegate;
return G__12174;
})()
;
G__12173 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12173__0.call(this);
case 1:
return G__12173__1.call(this,x);
case 2:
return G__12173__2.call(this,x,y);
case 3:
return G__12173__3.call(this,x,y,z);
default:
return G__12173__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12173.cljs$lang$maxFixedArity = 3;
G__12173.cljs$lang$applyTo = G__12173__4.cljs$lang$applyTo;
return G__12173;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__12176 = null;
var G__12176__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__12176__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__12176__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__12176__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__12176__4 = (function() { 
var G__12177__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
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
var juxt__3 = (function (f,g,h){
return (function() {
var G__12179 = null;
var G__12179__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__12179__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__12179__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__12179__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__12179__4 = (function() { 
var G__12180__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
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
var juxt__4 = (function() { 
var G__12182__delegate = function (f,g,h,fs){
var fs__12172 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__12183 = null;
var G__12183__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__12153_SHARP_,p2__12154_SHARP_){
return cljs.core.conj.call(null,p1__12153_SHARP_,p2__12154_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__12172);
});
var G__12183__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__12155_SHARP_,p2__12156_SHARP_){
return cljs.core.conj.call(null,p1__12155_SHARP_,p2__12156_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__12172);
});
var G__12183__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__12157_SHARP_,p2__12158_SHARP_){
return cljs.core.conj.call(null,p1__12157_SHARP_,p2__12158_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__12172);
});
var G__12183__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__12159_SHARP_,p2__12160_SHARP_){
return cljs.core.conj.call(null,p1__12159_SHARP_,p2__12160_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__12172);
});
var G__12183__4 = (function() { 
var G__12184__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__12161_SHARP_,p2__12162_SHARP_){
return cljs.core.conj.call(null,p1__12161_SHARP_,cljs.core.apply.call(null,p2__12162_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__12172);
};
var G__12184 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12184__delegate.call(this, x, y, z, args);
};
G__12184.cljs$lang$maxFixedArity = 3;
G__12184.cljs$lang$applyTo = (function (arglist__12185){
var x = cljs.core.first(arglist__12185);
var y = cljs.core.first(cljs.core.next(arglist__12185));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12185)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12185)));
return G__12184__delegate(x, y, z, args);
});
G__12184.cljs$lang$arity$variadic = G__12184__delegate;
return G__12184;
})()
;
G__12183 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__12183__0.call(this);
case 1:
return G__12183__1.call(this,x);
case 2:
return G__12183__2.call(this,x,y);
case 3:
return G__12183__3.call(this,x,y,z);
default:
return G__12183__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__12183.cljs$lang$maxFixedArity = 3;
G__12183.cljs$lang$applyTo = G__12183__4.cljs$lang$applyTo;
return G__12183;
})()
};
var G__12182 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12182__delegate.call(this, f, g, h, fs);
};
G__12182.cljs$lang$maxFixedArity = 3;
G__12182.cljs$lang$applyTo = (function (arglist__12186){
var f = cljs.core.first(arglist__12186);
var g = cljs.core.first(cljs.core.next(arglist__12186));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12186)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12186)));
return G__12182__delegate(f, g, h, fs);
});
G__12182.cljs$lang$arity$variadic = G__12182__delegate;
return G__12182;
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
var G__12189 = cljs.core.next.call(null,coll);
coll = G__12189;
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
if(cljs.core.truth_((function (){var and__3937__auto____12188 = cljs.core.seq.call(null,coll);
if(and__3937__auto____12188)
{return (n > 0);
} else
{return and__3937__auto____12188;
}
})()))
{{
var G__12190 = (n - 1);
var G__12191 = cljs.core.next.call(null,coll);
n = G__12190;
coll = G__12191;
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
var matches__12193 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__12193),s))
{if((cljs.core.count.call(null,matches__12193) === 1))
{return cljs.core.first.call(null,matches__12193);
} else
{return cljs.core.vec.call(null,matches__12193);
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
var matches__12195 = re.exec(s);
if((matches__12195 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__12195) === 1))
{return cljs.core.first.call(null,matches__12195);
} else
{return cljs.core.vec.call(null,matches__12195);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__12200 = cljs.core.re_find.call(null,re,s);
var match_idx__12201 = s.search(re);
var match_str__12202 = ((cljs.core.coll_QMARK_.call(null,match_data__12200))?cljs.core.first.call(null,match_data__12200):match_data__12200);
var post_match__12203 = cljs.core.subs.call(null,s,(match_idx__12201 + cljs.core.count.call(null,match_str__12202)));
if(cljs.core.truth_(match_data__12200))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__12200,re_seq.call(null,re,post_match__12203));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__12210__12211 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___12212 = cljs.core.nth.call(null,vec__12210__12211,0,null);
var flags__12213 = cljs.core.nth.call(null,vec__12210__12211,1,null);
var pattern__12214 = cljs.core.nth.call(null,vec__12210__12211,2,null);
return (new RegExp(pattern__12214,flags__12213));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__12204_SHARP_){
return print_one.call(null,p1__12204_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3937__auto____12224 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3937__auto____12224))
{var and__3937__auto____12228 = (function (){var G__12225__12226 = obj;
if(G__12225__12226)
{if((function (){var or__3939__auto____12227 = (G__12225__12226.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3939__auto____12227)
{return or__3939__auto____12227;
} else
{return G__12225__12226.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__12225__12226.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__12225__12226);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__12225__12226);
}
})();
if(cljs.core.truth_(and__3937__auto____12228))
{return cljs.core.meta.call(null,obj);
} else
{return and__3937__auto____12228;
}
} else
{return and__3937__auto____12224;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3937__auto____12229 = !((obj == null));
if(and__3937__auto____12229)
{return obj.cljs$lang$type;
} else
{return and__3937__auto____12229;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__12230__12231 = obj;
if(G__12230__12231)
{if((function (){var or__3939__auto____12232 = (G__12230__12231.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3939__auto____12232)
{return or__3939__auto____12232;
} else
{return G__12230__12231.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__12230__12231.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__12230__12231);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__12230__12231);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__12252 = (new goog.string.StringBuffer());
var G__12253__12254 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__12253__12254)
{var string__12255 = cljs.core.first.call(null,G__12253__12254);
var G__12253__12256 = G__12253__12254;
while(true){
sb__12252.append(string__12255);
var temp__4088__auto____12257 = cljs.core.next.call(null,G__12253__12256);
if(temp__4088__auto____12257)
{var G__12253__12258 = temp__4088__auto____12257;
{
var G__12271 = cljs.core.first.call(null,G__12253__12258);
var G__12272 = G__12253__12258;
string__12255 = G__12271;
G__12253__12256 = G__12272;
continue;
}
} else
{}
break;
}
} else
{}
var G__12259__12260 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__12259__12260)
{var obj__12261 = cljs.core.first.call(null,G__12259__12260);
var G__12259__12262 = G__12259__12260;
while(true){
sb__12252.append(" ");
var G__12263__12264 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12261,opts));
if(G__12263__12264)
{var string__12265 = cljs.core.first.call(null,G__12263__12264);
var G__12263__12266 = G__12263__12264;
while(true){
sb__12252.append(string__12265);
var temp__4088__auto____12267 = cljs.core.next.call(null,G__12263__12266);
if(temp__4088__auto____12267)
{var G__12263__12268 = temp__4088__auto____12267;
{
var G__12273 = cljs.core.first.call(null,G__12263__12268);
var G__12274 = G__12263__12268;
string__12265 = G__12273;
G__12263__12266 = G__12274;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4088__auto____12269 = cljs.core.next.call(null,G__12259__12262);
if(temp__4088__auto____12269)
{var G__12259__12270 = temp__4088__auto____12269;
{
var G__12275 = cljs.core.first.call(null,G__12259__12270);
var G__12276 = G__12259__12270;
obj__12261 = G__12275;
G__12259__12262 = G__12276;
continue;
}
} else
{}
break;
}
} else
{}
return sb__12252;
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
var sb__12278 = cljs.core.pr_sb.call(null,objs,opts);
sb__12278.append("\n");
return [cljs.core.str(sb__12278)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__12297__12298 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__12297__12298)
{var string__12299 = cljs.core.first.call(null,G__12297__12298);
var G__12297__12300 = G__12297__12298;
while(true){
cljs.core.string_print.call(null,string__12299);
var temp__4088__auto____12301 = cljs.core.next.call(null,G__12297__12300);
if(temp__4088__auto____12301)
{var G__12297__12302 = temp__4088__auto____12301;
{
var G__12315 = cljs.core.first.call(null,G__12297__12302);
var G__12316 = G__12297__12302;
string__12299 = G__12315;
G__12297__12300 = G__12316;
continue;
}
} else
{}
break;
}
} else
{}
var G__12303__12304 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__12303__12304)
{var obj__12305 = cljs.core.first.call(null,G__12303__12304);
var G__12303__12306 = G__12303__12304;
while(true){
cljs.core.string_print.call(null," ");
var G__12307__12308 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12305,opts));
if(G__12307__12308)
{var string__12309 = cljs.core.first.call(null,G__12307__12308);
var G__12307__12310 = G__12307__12308;
while(true){
cljs.core.string_print.call(null,string__12309);
var temp__4088__auto____12311 = cljs.core.next.call(null,G__12307__12310);
if(temp__4088__auto____12311)
{var G__12307__12312 = temp__4088__auto____12311;
{
var G__12317 = cljs.core.first.call(null,G__12307__12312);
var G__12318 = G__12307__12312;
string__12309 = G__12317;
G__12307__12310 = G__12318;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4088__auto____12313 = cljs.core.next.call(null,G__12303__12306);
if(temp__4088__auto____12313)
{var G__12303__12314 = temp__4088__auto____12313;
{
var G__12319 = cljs.core.first.call(null,G__12303__12314);
var G__12320 = G__12303__12314;
obj__12305 = G__12319;
G__12303__12306 = G__12320;
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
pr_str.cljs$lang$applyTo = (function (arglist__12321){
var objs = cljs.core.seq(arglist__12321);;
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
prn_str.cljs$lang$applyTo = (function (arglist__12322){
var objs = cljs.core.seq(arglist__12322);;
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
pr.cljs$lang$applyTo = (function (arglist__12323){
var objs = cljs.core.seq(arglist__12323);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__12324){
var objs = cljs.core.seq(arglist__12324);;
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
print_str.cljs$lang$applyTo = (function (arglist__12325){
var objs = cljs.core.seq(arglist__12325);;
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
println.cljs$lang$applyTo = (function (arglist__12326){
var objs = cljs.core.seq(arglist__12326);;
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
println_str.cljs$lang$applyTo = (function (arglist__12327){
var objs = cljs.core.seq(arglist__12327);;
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
prn.cljs$lang$applyTo = (function (arglist__12328){
var objs = cljs.core.seq(arglist__12328);;
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
printf.cljs$lang$applyTo = (function (arglist__12329){
var fmt = cljs.core.first(arglist__12329);
var args = cljs.core.rest(arglist__12329);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__12330 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12330,"{",", ","}",opts,coll);
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
var pr_pair__12331 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12331,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__12332 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12332,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__4088__auto____12333 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4088__auto____12333))
{var nspc__12334 = temp__4088__auto____12333;
return [cljs.core.str(nspc__12334),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__4088__auto____12335 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4088__auto____12335))
{var nspc__12336 = temp__4088__auto____12335;
return [cljs.core.str(nspc__12336),cljs.core.str("/")].join('');
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
var pr_pair__12337 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12337,"{",", ","}",opts,coll);
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
var normalize__12339 = (function (n,len){
var ns__12338 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__12338) < len))
{{
var G__12341 = [cljs.core.str("0"),cljs.core.str(ns__12338)].join('');
ns__12338 = G__12341;
continue;
}
} else
{return ns__12338;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__12339.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__12339.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__12339.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__12339.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__12339.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__12339.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__12340 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__12340,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__12342 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__12343 = this;
var G__12344__12345 = cljs.core.seq.call(null,this__12343.watches);
if(G__12344__12345)
{var G__12347__12349 = cljs.core.first.call(null,G__12344__12345);
var vec__12348__12350 = G__12347__12349;
var key__12351 = cljs.core.nth.call(null,vec__12348__12350,0,null);
var f__12352 = cljs.core.nth.call(null,vec__12348__12350,1,null);
var G__12344__12353 = G__12344__12345;
var G__12347__12354 = G__12347__12349;
var G__12344__12355 = G__12344__12353;
while(true){
var vec__12356__12357 = G__12347__12354;
var key__12358 = cljs.core.nth.call(null,vec__12356__12357,0,null);
var f__12359 = cljs.core.nth.call(null,vec__12356__12357,1,null);
var G__12344__12360 = G__12344__12355;
f__12359.call(null,key__12358,this$,oldval,newval);
var temp__4088__auto____12361 = cljs.core.next.call(null,G__12344__12360);
if(temp__4088__auto____12361)
{var G__12344__12362 = temp__4088__auto____12361;
{
var G__12369 = cljs.core.first.call(null,G__12344__12362);
var G__12370 = G__12344__12362;
G__12347__12354 = G__12369;
G__12344__12355 = G__12370;
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
var this__12363 = this;
return this$.watches = cljs.core.assoc.call(null,this__12363.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__12364 = this;
return this$.watches = cljs.core.dissoc.call(null,this__12364.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__12365 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__12365.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__12366 = this;
return this__12366.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__12367 = this;
return this__12367.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__12368 = this;
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
var G__12382__delegate = function (x,p__12371){
var map__12377__12378 = p__12371;
var map__12377__12379 = ((cljs.core.seq_QMARK_.call(null,map__12377__12378))?cljs.core.apply.call(null,cljs.core.hash_map,map__12377__12378):map__12377__12378);
var validator__12380 = cljs.core._lookup.call(null,map__12377__12379,"\uFDD0'validator",null);
var meta__12381 = cljs.core._lookup.call(null,map__12377__12379,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__12381,validator__12380,null));
};
var G__12382 = function (x,var_args){
var p__12371 = null;
if (goog.isDef(var_args)) {
  p__12371 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12382__delegate.call(this, x, p__12371);
};
G__12382.cljs$lang$maxFixedArity = 1;
G__12382.cljs$lang$applyTo = (function (arglist__12383){
var x = cljs.core.first(arglist__12383);
var p__12371 = cljs.core.rest(arglist__12383);
return G__12382__delegate(x, p__12371);
});
G__12382.cljs$lang$arity$variadic = G__12382__delegate;
return G__12382;
})()
;
atom = function(x,var_args){
var p__12371 = var_args;
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
var temp__4088__auto____12387 = a.validator;
if(cljs.core.truth_(temp__4088__auto____12387))
{var validate__12388 = temp__4088__auto____12387;
if(cljs.core.truth_(validate__12388.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440,"\uFDD0'column",13))))].join('')));
}
} else
{}
var old_value__12389 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__12389,new_value);
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
var G__12390__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__12390 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12390__delegate.call(this, a, f, x, y, z, more);
};
G__12390.cljs$lang$maxFixedArity = 5;
G__12390.cljs$lang$applyTo = (function (arglist__12391){
var a = cljs.core.first(arglist__12391);
var f = cljs.core.first(cljs.core.next(arglist__12391));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12391)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12391))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12391)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12391)))));
return G__12390__delegate(a, f, x, y, z, more);
});
G__12390.cljs$lang$arity$variadic = G__12390__delegate;
return G__12390;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__12392){
var iref = cljs.core.first(arglist__12392);
var f = cljs.core.first(cljs.core.next(arglist__12392));
var args = cljs.core.rest(cljs.core.next(arglist__12392));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__12393 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__12393.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__12394 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__12394.state,(function (p__12395){
var map__12396__12397 = p__12395;
var map__12396__12398 = ((cljs.core.seq_QMARK_.call(null,map__12396__12397))?cljs.core.apply.call(null,cljs.core.hash_map,map__12396__12397):map__12396__12397);
var curr_state__12399 = map__12396__12398;
var done__12400 = cljs.core._lookup.call(null,map__12396__12398,"\uFDD0'done",null);
if(cljs.core.truth_(done__12400))
{return curr_state__12399;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__12394.f.call(null)});
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
var map__12429__12430 = options;
var map__12429__12431 = ((cljs.core.seq_QMARK_.call(null,map__12429__12430))?cljs.core.apply.call(null,cljs.core.hash_map,map__12429__12430):map__12429__12430);
var keywordize_keys__12432 = cljs.core._lookup.call(null,map__12429__12431,"\uFDD0'keywordize-keys",null);
var keyfn__12433 = (cljs.core.truth_(keywordize_keys__12432)?cljs.core.keyword:cljs.core.str);
var f__12456 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2489__auto____12455 = (function iter__12445(s__12446){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12446__12451 = s__12446;
while(true){
var temp__4088__auto____12452 = cljs.core.seq.call(null,s__12446__12451);
if(temp__4088__auto____12452)
{var xs__4574__auto____12453 = temp__4088__auto____12452;
var k__12454 = cljs.core.first.call(null,xs__4574__auto____12453);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__12433.call(null,k__12454),thisfn.call(null,(x[k__12454]))], true),iter__12445.call(null,cljs.core.rest.call(null,s__12446__12451)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2489__auto____12455.call(null,cljs.core.js_keys.call(null,x));
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
return f__12456.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__12457){
var x = cljs.core.first(arglist__12457);
var options = cljs.core.rest(arglist__12457);
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
var mem__12462 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__12466__delegate = function (args){
var temp__4086__auto____12463 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__12462),args,null);
if(cljs.core.truth_(temp__4086__auto____12463))
{var v__12464 = temp__4086__auto____12463;
return v__12464;
} else
{var ret__12465 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__12462,cljs.core.assoc,args,ret__12465);
return ret__12465;
}
};
var G__12466 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12466__delegate.call(this, args);
};
G__12466.cljs$lang$maxFixedArity = 0;
G__12466.cljs$lang$applyTo = (function (arglist__12467){
var args = cljs.core.seq(arglist__12467);;
return G__12466__delegate(args);
});
G__12466.cljs$lang$arity$variadic = G__12466__delegate;
return G__12466;
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
var ret__12469 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__12469))
{{
var G__12470 = ret__12469;
f = G__12470;
continue;
}
} else
{return ret__12469;
}
break;
}
});
var trampoline__2 = (function() { 
var G__12471__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__12471 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12471__delegate.call(this, f, args);
};
G__12471.cljs$lang$maxFixedArity = 1;
G__12471.cljs$lang$applyTo = (function (arglist__12472){
var f = cljs.core.first(arglist__12472);
var args = cljs.core.rest(arglist__12472);
return G__12471__delegate(f, args);
});
G__12471.cljs$lang$arity$variadic = G__12471__delegate;
return G__12471;
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
var k__12474 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__12474,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__12474,cljs.core.PersistentVector.EMPTY),x));
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
var or__3939__auto____12483 = cljs.core._EQ_.call(null,child,parent);
if(or__3939__auto____12483)
{return or__3939__auto____12483;
} else
{var or__3939__auto____12484 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3939__auto____12484)
{return or__3939__auto____12484;
} else
{var and__3937__auto____12485 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3937__auto____12485)
{var and__3937__auto____12486 = cljs.core.vector_QMARK_.call(null,child);
if(and__3937__auto____12486)
{var and__3937__auto____12487 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3937__auto____12487)
{var ret__12488 = true;
var i__12489 = 0;
while(true){
if((function (){var or__3939__auto____12490 = cljs.core.not.call(null,ret__12488);
if(or__3939__auto____12490)
{return or__3939__auto____12490;
} else
{return (i__12489 === cljs.core.count.call(null,parent));
}
})())
{return ret__12488;
} else
{{
var G__12491 = isa_QMARK_.call(null,h,child.call(null,i__12489),parent.call(null,i__12489));
var G__12492 = (i__12489 + 1);
ret__12488 = G__12491;
i__12489 = G__12492;
continue;
}
}
break;
}
} else
{return and__3937__auto____12487;
}
} else
{return and__3937__auto____12486;
}
} else
{return and__3937__auto____12485;
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
var tp__12501 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__12502 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__12503 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__12504 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3939__auto____12505 = ((cljs.core.contains_QMARK_.call(null,tp__12501.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__12503.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__12503.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__12501,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__12504.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__12502,parent,ta__12503),"\uFDD0'descendants":tf__12504.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__12503,tag,td__12502)});
})());
if(cljs.core.truth_(or__3939__auto____12505))
{return or__3939__auto____12505;
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
var parentMap__12510 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__12511 = (cljs.core.truth_(parentMap__12510.call(null,tag))?cljs.core.disj.call(null,parentMap__12510.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__12512 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__12511))?cljs.core.assoc.call(null,parentMap__12510,tag,childsParents__12511):cljs.core.dissoc.call(null,parentMap__12510,tag));
var deriv_seq__12513 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__12493_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__12493_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__12493_SHARP_),cljs.core.second.call(null,p1__12493_SHARP_)));
}),cljs.core.seq.call(null,newParents__12512)));
if(cljs.core.contains_QMARK_.call(null,parentMap__12510.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__12494_SHARP_,p2__12495_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__12494_SHARP_,p2__12495_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__12513));
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
var xprefs__12521 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3939__auto____12523 = (cljs.core.truth_((function (){var and__3937__auto____12522 = xprefs__12521;
if(cljs.core.truth_(and__3937__auto____12522))
{return xprefs__12521.call(null,y);
} else
{return and__3937__auto____12522;
}
})())?true:null);
if(cljs.core.truth_(or__3939__auto____12523))
{return or__3939__auto____12523;
} else
{var or__3939__auto____12525 = (function (){var ps__12524 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__12524) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__12524),prefer_table)))
{} else
{}
{
var G__12528 = cljs.core.rest.call(null,ps__12524);
ps__12524 = G__12528;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3939__auto____12525))
{return or__3939__auto____12525;
} else
{var or__3939__auto____12527 = (function (){var ps__12526 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__12526) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__12526),y,prefer_table)))
{} else
{}
{
var G__12529 = cljs.core.rest.call(null,ps__12526);
ps__12526 = G__12529;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3939__auto____12527))
{return or__3939__auto____12527;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3939__auto____12531 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3939__auto____12531))
{return or__3939__auto____12531;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__12549 = cljs.core.reduce.call(null,(function (be,p__12541){
var vec__12542__12543 = p__12541;
var k__12544 = cljs.core.nth.call(null,vec__12542__12543,0,null);
var ___12545 = cljs.core.nth.call(null,vec__12542__12543,1,null);
var e__12546 = vec__12542__12543;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__12544))
{var be2__12548 = (cljs.core.truth_((function (){var or__3939__auto____12547 = (be == null);
if(or__3939__auto____12547)
{return or__3939__auto____12547;
} else
{return cljs.core.dominates.call(null,k__12544,cljs.core.first.call(null,be),prefer_table);
}
})())?e__12546:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__12548),k__12544,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__12544),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__12548)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__12548;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__12549))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__12549));
return cljs.core.second.call(null,best_entry__12549);
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
if((function (){var and__3937__auto____12554 = mf;
if(and__3937__auto____12554)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3937__auto____12554;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2390__auto____12555 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12556 = (cljs.core._reset[goog.typeOf(x__2390__auto____12555)]);
if(or__3939__auto____12556)
{return or__3939__auto____12556;
} else
{var or__3939__auto____12557 = (cljs.core._reset["_"]);
if(or__3939__auto____12557)
{return or__3939__auto____12557;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3937__auto____12562 = mf;
if(and__3937__auto____12562)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3937__auto____12562;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2390__auto____12563 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12564 = (cljs.core._add_method[goog.typeOf(x__2390__auto____12563)]);
if(or__3939__auto____12564)
{return or__3939__auto____12564;
} else
{var or__3939__auto____12565 = (cljs.core._add_method["_"]);
if(or__3939__auto____12565)
{return or__3939__auto____12565;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3937__auto____12570 = mf;
if(and__3937__auto____12570)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3937__auto____12570;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2390__auto____12571 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12572 = (cljs.core._remove_method[goog.typeOf(x__2390__auto____12571)]);
if(or__3939__auto____12572)
{return or__3939__auto____12572;
} else
{var or__3939__auto____12573 = (cljs.core._remove_method["_"]);
if(or__3939__auto____12573)
{return or__3939__auto____12573;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3937__auto____12578 = mf;
if(and__3937__auto____12578)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3937__auto____12578;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2390__auto____12579 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12580 = (cljs.core._prefer_method[goog.typeOf(x__2390__auto____12579)]);
if(or__3939__auto____12580)
{return or__3939__auto____12580;
} else
{var or__3939__auto____12581 = (cljs.core._prefer_method["_"]);
if(or__3939__auto____12581)
{return or__3939__auto____12581;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3937__auto____12586 = mf;
if(and__3937__auto____12586)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3937__auto____12586;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2390__auto____12587 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12588 = (cljs.core._get_method[goog.typeOf(x__2390__auto____12587)]);
if(or__3939__auto____12588)
{return or__3939__auto____12588;
} else
{var or__3939__auto____12589 = (cljs.core._get_method["_"]);
if(or__3939__auto____12589)
{return or__3939__auto____12589;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3937__auto____12594 = mf;
if(and__3937__auto____12594)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3937__auto____12594;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2390__auto____12595 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12596 = (cljs.core._methods[goog.typeOf(x__2390__auto____12595)]);
if(or__3939__auto____12596)
{return or__3939__auto____12596;
} else
{var or__3939__auto____12597 = (cljs.core._methods["_"]);
if(or__3939__auto____12597)
{return or__3939__auto____12597;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3937__auto____12602 = mf;
if(and__3937__auto____12602)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3937__auto____12602;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2390__auto____12603 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12604 = (cljs.core._prefers[goog.typeOf(x__2390__auto____12603)]);
if(or__3939__auto____12604)
{return or__3939__auto____12604;
} else
{var or__3939__auto____12605 = (cljs.core._prefers["_"]);
if(or__3939__auto____12605)
{return or__3939__auto____12605;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3937__auto____12610 = mf;
if(and__3937__auto____12610)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3937__auto____12610;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2390__auto____12611 = (((mf == null))?null:mf);
return (function (){var or__3939__auto____12612 = (cljs.core._dispatch[goog.typeOf(x__2390__auto____12611)]);
if(or__3939__auto____12612)
{return or__3939__auto____12612;
} else
{var or__3939__auto____12613 = (cljs.core._dispatch["_"]);
if(or__3939__auto____12613)
{return or__3939__auto____12613;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__12616 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__12617 = cljs.core._get_method.call(null,mf,dispatch_val__12616);
if(cljs.core.truth_(target_fn__12617))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__12616)].join('')));
}
return cljs.core.apply.call(null,target_fn__12617,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__12618 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__12619 = this;
cljs.core.swap_BANG_.call(null,this__12619.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12619.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12619.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__12619.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__12620 = this;
cljs.core.swap_BANG_.call(null,this__12620.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__12620.method_cache,this__12620.method_table,this__12620.cached_hierarchy,this__12620.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__12621 = this;
cljs.core.swap_BANG_.call(null,this__12621.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__12621.method_cache,this__12621.method_table,this__12621.cached_hierarchy,this__12621.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__12622 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__12622.cached_hierarchy),cljs.core.deref.call(null,this__12622.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__12622.method_cache,this__12622.method_table,this__12622.cached_hierarchy,this__12622.hierarchy);
}
var temp__4086__auto____12623 = cljs.core.deref.call(null,this__12622.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__4086__auto____12623))
{var target_fn__12624 = temp__4086__auto____12623;
return target_fn__12624;
} else
{var temp__4086__auto____12625 = cljs.core.find_and_cache_best_method.call(null,this__12622.name,dispatch_val,this__12622.hierarchy,this__12622.method_table,this__12622.prefer_table,this__12622.method_cache,this__12622.cached_hierarchy);
if(cljs.core.truth_(temp__4086__auto____12625))
{var target_fn__12626 = temp__4086__auto____12625;
return target_fn__12626;
} else
{return cljs.core.deref.call(null,this__12622.method_table).call(null,this__12622.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__12627 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__12627.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__12627.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__12627.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__12627.method_cache,this__12627.method_table,this__12627.cached_hierarchy,this__12627.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__12628 = this;
return cljs.core.deref.call(null,this__12628.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__12629 = this;
return cljs.core.deref.call(null,this__12629.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__12630 = this;
return cljs.core.do_dispatch.call(null,mf,this__12630.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__12632__delegate = function (_,args){
var self__12631 = this;
return cljs.core._dispatch.call(null,self__12631,args);
};
var G__12632 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12632__delegate.call(this, _, args);
};
G__12632.cljs$lang$maxFixedArity = 1;
G__12632.cljs$lang$applyTo = (function (arglist__12633){
var _ = cljs.core.first(arglist__12633);
var args = cljs.core.rest(arglist__12633);
return G__12632__delegate(_, args);
});
G__12632.cljs$lang$arity$variadic = G__12632__delegate;
return G__12632;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__12634 = this;
return cljs.core._dispatch.call(null,self__12634,args);
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
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2336__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__12635 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_12637,_){
var this__12636 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__12636.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__12638 = this;
var and__3937__auto____12639 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3937__auto____12639)
{return (this__12638.uuid === other.uuid);
} else
{return and__3937__auto____12639;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__12640 = this;
var this__12641 = this;
return cljs.core.pr_str.call(null,this__12641);
});
cljs.core.UUID;
